---
title: "클라우드 솔루션 리포트 - 컨테이너와 쿠버네티스"
date: 2026-06-01
lang: ko
summary: "이 글은 제가 NIA [한국지능정보사회진흥원]의 < 디지털서비스 이슈리포트 > 2026년 5월호에 기고한 글입니다. 원본 글 '[디지털서비스 이슈리포트2026-5] 월드 액션 모델과 로보틱스의 마지막 단계'를 이곳 브런치에서도 공유합니다.  들어가며: 쿠버네티스가 AI의 운영체제가 되었다   쿠버네티스(Kubernetes, K8s)가 컨테이너 오케스트레이션"
tags: ["update", "speaking"]
series: "chaesang-priv"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/181
draft: false
---

이 글은 제가 NIA \[한국지능정보사회진흥원\]의 < 디지털서비스 이슈리포트 > 2026년 5월호에 기고한 글입니다. 원본 글 '[\[디지털서비스 이슈리포트2026-5\] 월드 액션 모델과 로보틱스의 마지막 단계](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99863&bcIdx=29471&parentSeq=29471)'를 이곳 브런치에서도 공유합니다.

  

---

## **들어가며: 쿠버네티스가 AI의 운영체제가 되었다**

  

  

쿠버네티스(Kubernetes, K8s)가 컨테이너 오케스트레이션의 표준이 됐다는 사실은 더 이상 새롭지 않다. 새로운 사실은 그 표준이 다음 국면으로 넘어가고 있다는 점인데, 2026년 1월 클라우드 네이티브 컴퓨팅 재단(CNCF, Cloud Native Computing Foundation)의 연례 조사가 그 이동을 공식화했다 — 쿠버네티스의 프로덕션 사용률 82%, 클라우드 네이티브 기술 전체 채택률 98%, 그리고 가장 의미심장하게는 생성형 AI 모델 호스팅의 66%가 쿠버네티스 위에서 운영된다는 점이었다\[1\]. 보고서 부제 'AI 미래의 인프라(Infrastructure of AI's Future)'가 곧 결론이었다. 컨테이너 오케스트레이션 표준이라는 자리매김은 이미 지난 이야기이고, 쿠버네티스는 이제 AI 인프라의 제어 평면(Control Plane)으로 다시 정의되고 있다.

  

이 흐름이 단순한 채택률의 누적이 아니라는 점은 4월 한 달의 사건들이 보여준다. 22일에는 쿠버네티스 1.36 '하루(Haru)'가 정식 출시되며 GPU 할당의 표준 API인 동적 자원 할당(DRA, Dynamic Resource Allocation)의 우선순위 대안(Prioritized Alternatives) KEP(Kubernetes Enhancement Proposal)가 정식 단계(stable)로 졸업했고\[2\], 같은 날 구글 클라우드(Google Cloud)는 Next '26에서 단일 컨트롤 플레인이 약 100만 개의 칩을 다루는 GKE 하이퍼클러스터(Hypercluster)를 공개했다\[3\]. 한 달 사이에 표준이 한층 더 단단해졌고, 그 위에서 벤더들의 차별화 경쟁에 다시 가속이 붙었다.

  

그래서 의사결정자에게 남은 질문은 더 이상 "쿠버네티스를 쓸 것인가"가 아니라 그다음에 있다 — AI 워크로드를 어떤 쿠버네티스 위에서, 어떤 운영 모델로 돌릴 것인가. 본론에서 살피는 네 벤더는 클라우드 사업자(CSP, Cloud Service Provider) 매니지드 3사 — 아마존(AWS)의 EKS(Elastic Kubernetes Service), 마이크로소프트 애저(Azure)의 AKS(Azure Kubernetes Service), 구글 클라우드의 GKE(Google Kubernetes Engine) — 와 컨테이너·VM·AI를 한 평면에 묶은 레드햇 오픈시프트(Red Hat OpenShift)다. 본격적인 비교에 앞서, 이 선택의 배경을 만드는 두 가지 거시 흐름 — GPU 표준의 통일과 한국 K8s 지형의 새 변수 — 을 먼저 짚는다.

  

## **AI 시대의 K8s, 두 가지 거시 흐름**

  

### **GPU의 표준화: DRA 정식 GA와 엔비디아의 CNCF 기증**

  

쿠버네티스에서 그동안 GPU 요청은 "한 개, 두 개" 식이었다 — 파드(Pod) 정의서에 \`nvidia.com/gpu: 1\`이라고 쓰면 노드의 GPU 한 장을 통째로 점유하는 식이다. 그러나 GPU는 CPU와 달리 한 장의 카드 안에 메모리 용량, 컴퓨트 슬라이스, 인터커넥트 토폴로지가 함께 묶여 있어 워크로드에 따라 일부만 쓰거나 여러 장을 묶어 써야 한다. 동적 자원 할당(DRA)은 GPU·FPGA·고성능 NIC(Network Interface Card) 같은 특수 하드웨어를 속성 기반으로 요청·공유·분할할 수 있게 해주는 새 표준 API인데, "메모리 40GB 이상, 다중 인스턴스 GPU(MIG, Multi-Instance GPU) 분할이 가능한 카드, 같은 노드에 NVLink로 묶인 GPU 그룹" 같은 조건을 선언적으로 표현하면 스케줄러가 자동으로 매칭해 준다. PVC(PersistentVolumeClaim)가 스토리지에서 한 일을 GPU 영역에서 하는 셈이다.

  

DRA가 여기까지 오는 데는 3년이 걸렸다. 2023년 1.26에서 알파로 도입돼 2025년 9월의 1.34에서 핵심 API가 정식 단계로 졸업했고, 4월 22일의 1.36 '하루'에서는 우선순위 대안(Prioritized Alternatives, KEP-4816)이 정식 단계에 올라 운영 모드의 표준화가 한 걸음 더 진척됐다 — 어드민액세스(AdminAccess)와 Kubelet 파드리소스(PodResources) API 같은 보조 KEP는 베타 단계에 자리 잡았다\[2\]. 1.36 출시 한 달 앞선 3월 24일 KubeCon Europe에서 엔비디아(NVIDIA)가 자사 GPU용 DRA 드라이버를 CNCF에 기증한 것은\[4\] 벤더가 통제하던 인터페이스가 커뮤니티 자산으로 넘어간 사건이며, GPU 요청 방식의 표준이 어느 한 회사의 라이브러리에 묶이지 않고 쿠버네티스의 일부가 됐다는 뜻이다.

  

CIO와 CTO에게 이 변화가 의미하는 바는 분명하다. GPU는 "비싸고 통째로 쓰는 자원"에서 "유연하게 쪼개고 묶어 쓸 수 있는 풀(Pool)"로 바뀌며, 그 요청 방식이 표준화됐다는 점이 더 결정적이다 — 어느 쿠버네티스 배포판을 쓰든 DRA를 따르면 같은 형태로 GPU를 요청할 수 있다. 다만 운영자(Operator), 디바이스 드라이버, 노드 풀 설정의 디테일은 여전히 벤더마다 다르므로, 비교의 축은 "GPU를 지원하는가"가 아니라 "GPU를 얼마나 잘 추상화하고 자동화하는가"로 바뀌었다.

  

### **한국 K8s 지형 — 26만 GPU의 새 변수**

  

한국의 쿠버네티스 결정은 2026년 들어 새로운 변수를 안고 이뤄지고 있다. 2025년 10월 APEC 정상회의에서 엔비디아와 한국 정부·산업계가 합의한 약 26만 장의 엔비디아 GPU 한국 배치 계획이 첫 단계에 들어갔는데, 삼성그룹·SK그룹·현대자동차그룹이 각각 5만 장 이상, 네이버클라우드가 6만 장 이상, 정부 과학기술정보통신부가 최대 5만 장을 맡는 등 다섯 축의 AI 팩토리가 동시에 구축되는 흐름이다\[5\].

  

가장 먼저 사업화 신호를 낸 곳은 NHN클라우드로, 2026년 1월 크래프톤의 GPU 클러스터 사업을 수주하며 엔비디아 블랙웰 울트라(Blackwell Ultra) GPU 1,000여 장을 판교 NCC(NHN Cloud Center)에 구축해 7월부터 가동한다\[6\]. 정부의 신규 시스템 70% 클라우드 네이티브 적용 목표(2026년 시작)와 엔진엑스 인그레스 컨트롤러(NGINX Ingress Controller)의 2026년 3월 EOL(End-of-Life)에 따른 게이트웨이 API(Gateway API) 전환\[7\]까지, GPU 인프라 규모와 표준 아키텍처가 한꺼번에 움직이고 있다. 글로벌 클라우드 사업자가 유일한 GPU 인프라 선택지이던 시대는 저물고 있고, 의사결정자가 마주할 질문은 결국 하나로 모인다 — 이 변화를 두고 어떤 쿠버네티스를 어떤 운영 모델로 돌릴 것인가.

  

## **벤더 심층 분석: AI 시대의 포지셔닝**

  

네 벤더의 포지셔닝을 한 표로 먼저 정리한다.

![image.png](/writing/chaesang-181/01.png)표 1: 2026년 K8s 벤더별 AI 인프라 핵심 역량 비교 (ACM: Red Hat Advanced Cluster Management for Kubernetes)

  

같은 "GPU 제어"라도 접근은 갈라진다 — EKS는 표준을 감추는 쪽, AKS는 직접 노출하는 쪽, GKE는 표준 위에 한 층의 추상화를 더 얹는 쪽, 오픈시프트는 노드 규모보다 GPU와 VM·AI를 한 평면에 묶는 통합 축에 선다. 이 차이에 따라 각 벤더에 가장 잘 맞는 워크로드와 도입 6개월 차의 유의점이 갈린다.

  

### **아마존 EKS — DRA를 감추는 자동화**

  

EKS 오토 모드(Auto Mode)는 DRA를 사용자에게 노출하지 않는다. GPU 요청이 들어오면 보틀로켓(Bottlerocket) 가속 AMI(Amazon Machine Image)가 자동으로 선택되고, GPU 장애는 노드 오토 리페어(Node Auto Repair)가 10분 안에 복구하며, DCGM 익스포터(DCGM-Exporter, 엔비디아 GPU 텔레메트리)와 뉴런 모니터(Neuron Monitor, 인퍼런시아·트레이니움용) 같은 모니터링 에이전트가 사전 설치돼 텔레메트리가 자동으로 흐른다. "표준은 묻어두고, 추상화 한 단계 위에서 운영을 떠맡는다" — EKS 오토 모드가 택한 노선이다. 2025년 가을 도입된 SOCI(Seekable OCI) 병렬 풀로 컨테이너 이미지 풀 시간이 최대 60% 단축됐고\[8\], AWS 자체 칩에서는 트레이니움3(Trainium3)가 트레이니움2 대비 3배 빠른 학습 성능을 보탠다\[9\]. 자동화의 효과는 사용자 수치로 확인되는데, 스톰포지(StormForge)는 오토 모드 적용으로 클러스터 업그레이드 시간을 65% 단축했고 리퀴드 애널리틱스(Liquid Analytics)는 1,000개의 K8s 파드를 1.2초 만에 띄우며 컴퓨팅 비용을 63% 줄였다\[10\].

  

가장 잘 어울리는 자리는 일반 마이크로서비스와 GPU 워크로드를 섞어 쓰며, 운영 인력을 늘리지 않고 자동화의 효과를 빠르게 보고 싶은 환경이다. 다만 추상화의 양면성에 유의해야 한다. 특수 네트워크 토폴로지나 커스텀 AMI가 필요한 워크로드는 자체 관리(Self-managed) 노드 그룹으로 돌아가야 하므로 자동화의 가치가 그만큼 줄어든다. 컨트롤 플레인 비용 시간당 0.10달러도 AKS·GKE의 무료 옵션 대비 부담이다\[11\].

![image.png](/writing/chaesang-181/02.png)그림 1: EKS 오토 모드 클러스터 생성 시 'Use EKS Auto Mode' 활성화 옵션 (출처: AWS Containers Blog, 2024년 12월 출시 발표)

  

### **마이크로소프트 AKS — DRA의 참조 구현을 자처하다**

  

EKS가 표준을 감추는 노선이라면, AKS는 정반대다. DRA를 가장 빠르게, 가장 적극적으로 사용자에게 노출하는 길을 택했다. 2026년 3월 한 달에만 다중 인스턴스 GPU(MIG)와 DRA(3월 3일), 엔비디아 vGPU와 DRA(3월 6일)를 차례로 발표했고\[12\], 4월 1일에는 DRANET을 통해 RDMA(Remote Direct Memory Access) 성능 최적화까지 더했다. 한 분기에 세 차례, "DRA 표준의 참조 구현(reference implementation)"이라 부를 만한 속도다.

  

가장 잘 어울리는 자리는 한 장의 GPU를 여러 팀이 안전하게 공유해야 하는 엔터프라이즈 AI 개발과 파인튜닝 환경이다. 마이크로소프트 엔트라 ID(Entra ID, 구 Azure AD), 애저 아크(Azure Arc), 애저 데브옵스(Azure DevOps)와의 네이티브 통합은 마이크로소프트 365와 엔트라 ID를 기반으로 운영되는 한국 대형 조직에서 결정타로 작용한다. 다만 클러스터당 최대 1,000 노드(노드 풀당 상한)는 대규모 LLM(Large Language Model) 학습에는 부적합한 규모이고\[11\], AKS 오토매틱(Automatic)의 시간당 0.16달러 컨트롤 플레인 과금은 무료였던 표준 클러스터 대비 비용 증가다.

![image.png](/writing/chaesang-181/03.png)그림 2: AKS의 DRA + 부분 분할 vGPU 노드 아키텍처 다이어그램 (출처: AKS Engineering Blog, 2026년 3월 6일)

  

### **구글 GKE — DRA 위에 한 층 더, 추론과 스케일의 리더**


GKE의 차별화 지점은 DRA 자체가 아니라 한 층 위, 워크로드 레이어의 추상화에 있다. 2026년 정식 출시된 GKE 인퍼런스 게이트웨이(Inference Gateway)는 AI 추론 트래픽의 지능형 라우팅으로 첫 토큰 응답 시간(TTFT, Time-to-First-Token)을 96% 줄이고 토큰 비용을 최대 25%까지 절감했고\[13\], 4월 8일에는 GKE 매니지드 DRANET이 정식 단계로 올라서 엔비디아 A3 울트라·A4·A4X·A4X 맥스 GPU와 클라우드 TPU(Tensor Processing Unit) v6e·v7x 인스턴스에서 RDMA 수준의 성능을 클러스터 표준 인터페이스로 끌어올렸다\[14\].

  

스케일은 차원이 달라졌다. 2026년 4월 22일 Next '26에서 발표된 GKE 하이퍼클러스터(Hypercluster)는 단일 쿠버네티스 컨트롤 플레인이 약 100만 개의 칩, 25만 6천 노드를 멀티 리전에 걸쳐 관리하는데\[3\], EKS 단일 클러스터 상한 약 3,000 노드, AKS 1,000 노드와는 자릿수 자체가 다르고 5개월 전 GKE 자체 기록 13만 노드도 두 배 가까이 갈아치웠다. 하이퍼클러스터는 구글의 타이타늄 인텔리전스 인클레이브(Titanium Intelligence Enclave) 위에 구축돼 "관리자 액세스 없음(no-admin-access)" 모델로 모델 가중치와 프롬프트가 플랫폼 운영자로부터도 격리되는데, 인프라 계층에서 AI 자산을 격리한 첫 쿠버네티스 구현이다\[3\]. 같은 4월 22일에 발표된 GKE 에이전트 샌드박스(Agent Sandbox)는 gVisor 기반 커널 레벨 격리로 LLM이 생성한 코드를 안전하게 실행할 수 있는 K8s 프리미티브(primitive)이며\[3\], KubeCon EU 2026에서 K8s 커뮤니티 차원의 에이전트 샌드박스 프로젝트로 확장됐다\[15\]. 추론 최적화·대규모 학습·에이전트 실행이 겹치는 영역에서 2026년 5월 기준 가장 앞선 곳은 GKE다.

  

유의점은 두 가지다. GCP 자체 점유율이 AWS·애저보다 낮아 이미 다른 클라우드에 있는 조직에는 멀티클라우드 부담이 따르고, 인퍼런스 게이트웨이를 제외한 차별 기능 일부는 발표 직후라 프로덕션 레퍼런스가 아직 부족하므로 적용 시점 판단에 신중함이 필요하다.

  

![image.png](/writing/chaesang-181/04.png)그림 3: GKE 인퍼런스 게이트웨이의 트래픽 분산 다이어그램 — 모델명·우선순위 기반 라우팅 (출처: GKE Inference Gateway 공식 문서)

  

### **레드햇 오픈시프트 — 컨테이너·VM·AI의 통합 플랫폼**

  

매니지드 3사가 GPU 자동화를 두고 차별화를 겨룬다면, 오픈시프트는 다른 축에 서 있다. 네 벤더 가운데 컨테이너·VM·AI를 하나의 쿠버네티스 제어 평면에서 모두 다루는 유일한 플랫폼이라는 점이다. 2023년 브로드컴(Broadcom)의 VM웨어(VMware) 인수 이후 영구 라이선스가 폐지되고 연간 구독이 의무화되며 라이선스 비용이 두 배에서 열 배 이상까지 늘어난 사례가 보고되는 가운데\[16\], IBM은 2025년 4분기 실적 발표에서 "최근 2년 누적 5억 달러 이상"의 오픈시프트 가상화(OpenShift Virtualization) 계약을 공식화했다\[17\]. 시장 분석으로는 대규모 VM웨어 마이그레이션의 약 25%가 오픈시프트로 향하고 있다\[18\].

  

오픈시프트 4.21(2026년 3월 23일 출시, 쿠버네티스 1.34 기반)은 통합 플랫폼이라는 약속을 한층 단단히 다졌다. DRA 운영자가 우선순위 높은 GPU를 AI 학습에 자동 할당하고 미사용 시 축소하면서, 같은 GPU 풀을 학습과 추론이 시간대별로 나눠 쓰는 운영이 가능해졌고\[19\], 가상화용 마이그레이션 툴킷 2.11은 스토리지 오프로드 방식으로 VM 이전 속도를 최대 10배까지 끌어올렸다(히타치(Hitachi) 내부 테스트 기준)\[20\]. 5월 11~14일 애틀랜타에서 열린 레드햇 서밋(Red Hat Summit) 2026에서는 20여 개 조직이 오픈시프트 가상화 프로덕션 사례를 발표했다. 골드만삭스(Goldman Sachs)·모건스탠리(Morgan Stanley) 같은 글로벌 투자은행부터 미 해군(U.S. Navy)·미 항공우주국(NASA) 같은 정부·국방, 제너럴모터스(GM)·포드(Ford)·지멘스(Siemens) 같은 제조사, 클리블랜드 클리닉(Cleveland Clinic) 같은 의료기관까지, 도입 산업의 폭이 한층 넓어졌다\[21\]. 특히 NASA 제트추진연구소(JPL, Jet Propulsion Laboratory)는 심우주 임무 운영을 지탱하는 미션 크리티컬 IT 인프라를 오픈시프트 가상화로 이전했다고 행사 첫날 발표했다\[22\]. 같은 자리에서 공개된 레드햇 AI 팩토리 위드 엔비디아(Red Hat AI Factory with NVIDIA)는 IBM 그래닛(Granite)·엔비디아 네모트론(Nemotron)·코스모스(Cosmos) 모델을 NIM(NVIDIA Inference Microservices) 형태로 묶고 추론에는 vLLM과 엔비디아 TensorRT-LLM·다이나모(Dynamo)를 동시 지원해, 하드웨어부터 AI 에이전트 실행까지 한 스택으로 잇는 구조를 제시했다\[23\].

  

한국 맥락에서도 두 가지 신호가 함께 움직인다. 첫째, 정부 온나라 시스템과 2020년 12월 금융권 최초로 계정계 시스템을 오픈시프트 기반으로 전환한 롯데카드 사례\[24\]가 5년이 지난 지금 후속 검토를 이끄는 레퍼런스로 자리 잡았다. 둘째, 같은 서밋에서 공개된 주권 클라우드·프라이빗 클라우드(sovereign·private cloud) 패키지 — NIS2(Network and Information Security 2 Directive)·GDPR·DORA(Digital Operational Resilience Act)를 자동 점검하는 컴플라이언스 프로파일, 지역별 소프트웨어 공급망(EU부터 시작), 초기 구축 단계(Day 0)부터 정책을 강제하는 랜딩 존(Landing Zone) — 도 한국 공공·금융권의 컴플라이언스·망분리 요건과 결을 맞춘 흐름이다. 한국 가용 시점은 별도 확인이 필요하지만, 레드햇의 정책 방향은 분명하다\[25\].

  

도입 6개월 차에 마주칠 함정은 통합 플랫폼의 양가성에서 비롯된다. 오픈시프트 구독 자체가 매니지드 K8s보다 비싸므로, VM웨어 라이선스 절감액이 도입·운영 비용을 초과하는 손익분기점을 산출하지 않으면 "탈출"이 또 다른 부담으로 이어진다. ARO(Azure Red Hat OpenShift)·ROSA(Red Hat OpenShift Service on AWS) 같은 매니지드 옵션이 있지만 자체 운영 대비 비용 격차가 크고, IBM·레드햇의 포트폴리오 통합에 속도가 붙으며 앤서블·왓슨엑스(watsonx) 의존도가 함께 높아지는 점도 장기 검토 대상이다.

![image.png](/writing/chaesang-181/05.png)그림 4: 오픈시프트 가상화 콘솔 — 컨테이너·VM 통합 관리 (출처: 레드햇 서밋 2026, Atlanta, 2026년 5월 11~14일)

  

## **맺으며: AI 시대의 K8s 의사결정 프레임워크**

  

쿠버네티스는 이미 AI의 운영체제다. 의사결정의 질문은 "쓸 것인가"가 아니라 "AI 워크로드의 어떤 시나리오에 어떤 쿠버네티스를 어떤 운영 모델로 쓸 것인가"이며, 그 답은 조직의 규모, 워크로드 특성, 규제 요건에 따라 달라진다. 글을 마치며 의사결정자에게 두 가지를 제언한다.

  

### **제언 1: AI 워크로드 시나리오로 쿠버네티스를 역설계하라**

  

흔한 순서는 쿠버네티스 벤더를 먼저 정하고 AI를 얹는 쪽이지만, 권하는 순서는 그 반대다. 우선순위 시나리오에 따라 첫 후보가 갈린다. 추론 최적화·에이전트 실행이 핵심이면 GKE(인퍼런스 게이트웨이·에이전트 샌드박스·하이퍼클러스터)다. GPU 자동 프로비저닝과 장애 자동 복구가 우선이면 EKS 오토 모드, 한 장의 GPU를 여러 팀이 안전하게 공유해야 하면 AKS의 DRA + vGPU/MIG 조합, 컨테이너·VM·AI를 한 평면에 통합해야 하면 오픈시프트 가상화가 자연스러운 출발점이다.

  

DRA가 표준이 된 만큼 어느 벤더든 GPU를 다룰 수는 있다. 그러나 "어떤 AI 시나리오에 최적화돼 있는가"는 벤더마다 분명히 다르다. 시나리오를 먼저 그리고 벤더를 고르는 순서가, 도입 6개월 차의 함정을 가장 확실하게 줄이는 길이다.

  

### **제언 2: 한국의 세 변수 위에서 운영 모델을 먼저 정하라**

  

한국에서 쿠버네티스를 결정한다는 것은 글로벌 변수에 한국 고유의 세 변수가 동시에 더해지는 일이다. 운영 모델을 먼저 정하지 않으면 이 세 변수가 제각기 결정을 좌우하게 되고, 그 결과는 한국 CIO 매거진 조사가 보여준 "88% TCO 증가"의 사례에 더해지기 쉽다\[26\].

  

첫째, GPU 인프라의 새 옵션이다. 26만 GPU 한국 배치 계획의 첫 단계가 NHN과 크래프톤의 1,000장 규모로 모습을 드러내면서, 거시 흐름에서 짚은 글로벌 단일 선택지의 시대가 빠르게 닫히고 있다 — AI 학습은 글로벌, 추론은 국내, 또는 그 반대의 조합이 비로소 현실적 선택지로 자리 잡았다는 뜻이다. 둘째, 정부 70% 클라우드 네이티브 정책의 가속이다. 정부 온나라 시스템과 롯데카드의 오픈시프트 계정계는 공공·금융권 후발 주자에게 사실상의 표준 후보로 굳어지며, 같은 흐름이 은행권과 증권 업계로 번지는 중이다. 셋째, 표준 아키텍처의 동시 전환이다. 엔진엑스 인그레스의 3월 EOL과 게이트웨이 API 전환\[7\]\[27\], 그리고 UI(렌즈→헤드램프)·트레이싱(예거→템포)·로깅(일래스틱서치→오픈서치)의 동시 교체\[28\]까지, 새 운영 모델로 옮겨가는 시점에 표준 전환을 함께 설계해야 추가 마이그레이션을 한 차례로 묶을 수 있다.

  

이 세 변수 위에서 한국 의사결정자가 답해야 할 질문은 결국 셋으로 모인다 — 글로벌-국내 하이브리드를 어디까지 끌어안을 것인가, 공공·금융 표준화 흐름에 합류할 것인가, 표준 아키텍처 전환을 운영 모델 변경과 함께 묶을 것인가. 운영 모델을 먼저 설계하고 벤더를 그 위에 얹는 순서가, 세 변수가 동시에 움직이는 지금 가장 적은 비용으로 가장 큰 가치를 얻는 길이다.

  

쿠버네티스가 AI의 운영체제가 됐다는 사실은 출발점이지 결론이 아니다. 그 위에서 어떤 시나리오로, 어떤 운영 모델로, 어떤 벤더와 함께 가느냐가 2026년의 진짜 결정이며, 한국의 의사결정자에게는 그 결정에 한국 고유의 세 변수가 더해진다. 글로벌 표준은 자리를 잡았다. 그 위에서 한국 의사결정자가 어떤 운영 모델을 설계할지가 다음 과제다.

---

**참고 문헌**

  

\[1\] CNCF, "Kubernetes Established as the De Facto Operating System for AI as Production Use Hits 82% in 2025; CNCF Annual Cloud Native Survey," Jan 20, 2026, [https://www.cncf.io/announcements/2026/01/20/kubernetes-established-as-the-de-facto-operating-system-for-ai-as-production-use-hits-82-in-2025-cncf-annual-cloud-native-survey/](https://www.cncf.io/announcements/2026/01/20/kubernetes-established-as-the-de-facto-operating-system-for-ai-as-production-use-hits-82-in-2025-cncf-annual-cloud-native-survey/)

\[2\] Kubernetes Blog, "Kubernetes v1.36: Haru," Apr 22, 2026, [https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/](https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/)

\[3\] Google Cloud Blog, "What's new in GKE at Next '26," Apr 22, 2026, [https://cloud.google.com/blog/products/containers-kubernetes/whats-new-in-gke-at-next26](https://cloud.google.com/blog/products/containers-kubernetes/whats-new-in-gke-at-next26)

\[4\] NVIDIA Blog, "NVIDIA at KubeCon 2026: Cloud Native AI Tools and the DRA Driver Donation," [https://blogs.nvidia.com/blog/nvidia-at-kubecon-2026/](https://blogs.nvidia.com/blog/nvidia-at-kubecon-2026/)

\[5\] NVIDIA Newsroom, "NVIDIA, South Korea Government and Industrial Giants Build AI Infrastructure and Ecosystem to Fuel Korea Innovation, Industries and Jobs," Oct 30, 2025, [https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure](https://nvidianews.nvidia.com/news/south-korea-ai-infrastructure)

\[6\] ZDNet Korea, "NHN클라우드, 크래프톤 GPU 클러스터 사업 수주… 블랙웰 울트라 1천여 장 구축," Jan 19, 2026, [https://zdnet.co.kr/view/?no=20260119100834](https://zdnet.co.kr/view/?no=20260119100834)

\[7\] Kubernetes Blog, "Ingress NGINX Retirement: What You Need to Know," Nov 11, 2025, [https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/)

\[8\] AWS Blog, "New Amazon EKS Auto Mode features for enhanced security, network control, and performance," [https://aws.amazon.com/blogs/containers/new-amazon-eks-auto-mode-features-for-enhanced-security-network-control-and-performance/](https://aws.amazon.com/blogs/containers/new-amazon-eks-auto-mode-features-for-enhanced-security-network-control-and-performance/)

\[9\] Virtualization Review, "NVIDIA, AWS and Google Cloud Spotlight AI Infrastructure Push at GTC 2026," Mar 20, 2026, [https://virtualizationreview.com/articles/2026/03/20/nvidia-aws-and-google-cloud-spotlight-ai-infrastructure-push-at-gtc-2026.aspx](https://virtualizationreview.com/articles/2026/03/20/nvidia-aws-and-google-cloud-spotlight-ai-infrastructure-push-at-gtc-2026.aspx)

\[10\] AWS, "Amazon EKS Customer Success Stories," [https://aws.amazon.com/eks/customers/](https://aws.amazon.com/eks/customers/)

\[11\] Sedai, "Kubernetes Cost: EKS vs AKS vs GKE," [https://sedai.io/blog/kubernetes-cost-eks-vs-aks-vs-gke](https://sedai.io/blog/kubernetes-cost-eks-vs-aks-vs-gke)

\[12\] AKS Engineering Blog, "DRA with vGPUs on AKS," Mar 6, 2026, [https://blog.aks.azure.com/2026/03/06/dra-with-vGPUs-on-aks](https://blog.aks.azure.com/2026/03/06/dra-with-vGPUs-on-aks)

\[13\] Cloud Native Now, "Google Extends Kubernetes Service to Safely Run Agentic AI Workloads," [https://cloudnativenow.com/features/google-extends-kubernetes-service-to-safely-run-agentic-ai-workloads/](https://cloudnativenow.com/features/google-extends-kubernetes-service-to-safely-run-agentic-ai-workloads/)

\[14\] Google Cloud Documentation, "GKE release notes (new features) — DRANET GA," [https://docs.cloud.google.com/kubernetes-engine/docs/release-notes-new-features](https://docs.cloud.google.com/kubernetes-engine/docs/release-notes-new-features)

\[15\] Solo.io, "Highlights from KubeCon + CloudNativeCon Europe 2026," [https://www.solo.io/blog/highlights-from-kubecon-cloudnativecon-europe-2026](https://www.solo.io/blog/highlights-from-kubecon-cloudnativecon-europe-2026)

\[16\] Web And IT News, "The Great VMware Exodus: How Broadcom's Licensing Overhaul Is Reshaping Enterprise Virtualization Strategy," Feb 15, 2026, [https://www.webanditnews.com/2026/02/15/the-great-vmware-exodus-how-broadcoms-licensing-overhaul-is-reshaping-enterprise-virtualization-strategy/](https://www.webanditnews.com/2026/02/15/the-great-vmware-exodus-how-broadcoms-licensing-overhaul-is-reshaping-enterprise-virtualization-strategy/)

\[17\] The Motley Fool, "IBM (IBM) Q4 2025 Earnings Call Transcript," Jan 28, 2026, [https://www.fool.com/earnings/call-transcripts/2026/01/28/ibm-ibm-q4-2025-earnings-call-transcript/](https://www.fool.com/earnings/call-transcripts/2026/01/28/ibm-ibm-q4-2025-earnings-call-transcript/)

\[18\] TechTarget, "AWS, Red Hat hybrid cloud wares court VMware converts," [https://www.techtarget.com/searchitoperations/news/366617436/AWS-Red-Hat-hybrid-cloud-wares-court-VMware-converts](https://www.techtarget.com/searchitoperations/news/366617436/AWS-Red-Hat-hybrid-cloud-wares-court-VMware-converts)

\[19\] Red Hat Developers, "Dynamic resource allocation goes GA in Red Hat OpenShift 4.21: Smarter GPU scheduling for AI workloads," Mar 25, 2026, [https://developers.redhat.com/articles/2026/03/25/dynamic-resource-allocation-goes-ga-red-hat-openshift-421-smarter-gpu](https://developers.redhat.com/articles/2026/03/25/dynamic-resource-allocation-goes-ga-red-hat-openshift-421-smarter-gpu)

\[20\] Red Hat Blog, "Red Hat OpenShift 4.21: Smarter scaling, faster migration, and AI-powered efficiency," [https://www.redhat.com/en/blog/red-hat-openshift-421-smarter-scaling-faster-migration-and-ai-powered-efficiency](https://www.redhat.com/en/blog/red-hat-openshift-421-smarter-scaling-faster-migration-and-ai-powered-efficiency)

\[21\] Red Hat Blog, "Customer stories and continued momentum: OpenShift Virtualization sessions at Red Hat Summit 2026," [https://www.redhat.com/en/blog/openshift-virtualization-sessions-red-hat-summit-2026](https://www.redhat.com/en/blog/openshift-virtualization-sessions-red-hat-summit-2026)

\[22\] Red Hat 보도자료, "NASA's Jet Propulsion Laboratory Advances Deep Space Mission Operations with Red Hat OpenShift Virtualization," May 11, 2026, [https://www.redhat.com/en/about/press-releases/nasa-jet-propulsion-laboratory-advances-deep-space-mission-operations-red-hat-openshift-virtualization](https://www.redhat.com/en/about/press-releases/nasa-jet-propulsion-laboratory-advances-deep-space-mission-operations-red-hat-openshift-virtualization)

\[23\] Red Hat 보도자료, "Red Hat AI Factory with NVIDIA Expands Support for a New Class of Autonomous Agents in the Enterprise," May 12, 2026, [https://www.businesswire.com/news/home/20260512891747/en/Red-Hat-AI-Factory-with-NVIDIA-Expands-Support-for-a-New-Class-of-Autonomous-Agents-in-the-Enterprise](https://www.businesswire.com/news/home/20260512891747/en/Red-Hat-AI-Factory-with-NVIDIA-Expands-Support-for-a-New-Class-of-Autonomous-Agents-in-the-Enterprise)

\[24\] 레드햇 코리아 보도자료, "레드햇, 롯데카드의 계정계 시스템 현대화 및 클라우드 네이티브 기술 도입 지원," Mar 3, 2021, [https://www.redhat.com/ko/about/press-releases/레드햇-롯데카드의-계정계-시스템-현대화-및-클라우드-네이티브-기술-도입-지원](https://www.redhat.com/ko/about/press-releases/%EB%A0%88%EB%93%9C%ED%96%87-%EB%A1%AF%EB%8D%B0%EC%B9%B4%EB%93%9C%EC%9D%98-%EA%B3%84%EC%A0%95%EA%B3%84-%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%98%84%EB%8C%80%ED%99%94-%EB%B0%8F-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EA%B8%B0%EC%88%A0-%EB%8F%84%EC%9E%85-%EC%A7%80%EC%9B%90)

\[25\] Red Hat 보도자료, "Red Hat Introduces New Sovereign and Private Cloud Capabilities to Power Digital Autonomy," May 12, 2026, [https://www.redhat.com/en/about/press-releases/red-hat-introduces-new-sovereign-and-private-cloud-capabilities-power-digital-autonomy](https://www.redhat.com/en/about/press-releases/red-hat-introduces-new-sovereign-and-private-cloud-capabilities-power-digital-autonomy)

\[26\] CIO Korea, "쿠버네티스 비용 폭증… 88%가 TCO 증가 보고" (Spectro Cloud 설문조사 인용), [https://www.cio.com/article/4042775/](https://www.cio.com/article/4042775/)

\[27\] Kubernetes Blog, "Announcing Ingress2Gateway 1.0: Your Path to Gateway API," Mar 20, 2026, [https://kubernetes.io/blog/2026/03/20/ingress2gateway-1-0-release/](https://kubernetes.io/blog/2026/03/20/ingress2gateway-1-0-release/)

\[28\] sysnet4admin, "Kubernetes Standard Architecture 2026 (한국 K8s 표준 아키텍처)," [https://github.com/sysnet4admin/\_Book\_k8sInfra/tree/main/docs/k8s-stnd-arch/2026](https://github.com/sysnet4admin/_Book_k8sInfra/tree/main/docs/k8s-stnd-arch/2026)
