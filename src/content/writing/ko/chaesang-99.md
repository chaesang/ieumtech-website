---
title: "인공지능과 추천 시스템 강의 노트 - (14/16)"
date: 2024-12-22
lang: ko
summary: "들어가며 이번 주는 오롯이 학생들의 과제들로만 채워지는 시간이다. 이후에 두 번 남은 시간에 생각보다 많은 과제들이 몰려서 조치를 취해야 할 듯하고, 주중에 reinvent 에 참석한 후에 북가주로 돌아온 후 새벽에 진행을 하게 되었고, 그 와중에 한국에서는 큰 일이 일어나서 한 치 앞을 내다볼 수 없는 상황이 되었다. 개인으로서 한국에 입국이 가능한가 질"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-24"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/99
draft: true
---

## **들어가며**

이번 주는 오롯이 학생들의 과제들로만 채워지는 시간이다. 이후에 두 번 남은 시간에 생각보다 많은 과제들이 몰려서 조치를 취해야 할 듯하고, 주중에 reinvent 에 참석한 후에 북가주로 돌아온 후 새벽에 진행을 하게 되었고, 그 와중에 한국에서는 큰 일이 일어나서 한 치 앞을 내다볼 수 없는 상황이 되었다. 개인으로서 한국에 입국이 가능한가 질문부터 학생들의 안전과 현업에서의 영향 등 불확실함의 연속이지만, 발표하는 학생들은 일단 강의장에서 발표를 진행하게 되었다.

  

## [**14주) 강의 update**](https://docs.google.com/presentation/d/1zJqpjTrsRGNh5HSTQVBaC6WJyonZhAVyP_DvJ2I6YmY/edit#slide=id.g240ce33ae91_0_26)

![AD\_4nXfL3K3pV3zlTJdH1Xv8eZLgIuCTYRPp2olLG0wunkgnYgM4YuYgzaGpdvgY8oUUKAdmTFxZrRaHogh4C1LLxMe1kiDIRIgQy-umjvh77yfIN7Hq-74fmxenzJBU-Dc6nMnJvOuc?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-99/01.jpg)

한 달에 200불을 달라고 하는 ChatGPT pro. 개인적인 생각으로는 해도 너무하는군… 의 생각이고, AWS reinvent 에서 발표된 Amazon 의 foundation model 참전 소식. 써 본 사람들 말로는 은근히 성능이 괜찮아서 머리가 많이 아프다고들 한다. 비슷한 성능이면 한푼이라도 싸지 않을까 혹은 싸 지지 않을까 하면서 옮겨갈 거라고들 하는데... 종속된다는 게 이런 건가 싶다고들 한다.

  

## **기말 과제들**

### [**논문분석 - LLM과 추천 시스템을 결합한 대화형 추천 에이전트 분석 - 임혜원**](https://docs.google.com/presentation/d/1JIYZrsUCb1ymGV224Kw31n_HwrN_wKDJ/edit#slide=id.p1)

**논문 :** [**Recommender AI Agent: Integrating Large Language Models for Interactive**](https://arxiv.org/abs/2308.16505)

지금의 RAG 이 대세가 되기 이전에 비지니스 문제를 LLM + 에이전트 방식으로 풀고자 했던 노력들. 대화형으로 가게 되면 어떻게 문제를 정의하고 풀어야 하는지에 대한 논문 분석과 해설들.

  

C. AI Agent 들에 대해서는 여러 개념적인 이야기들이 여전히 다양하게 논의되고 있는 거니 간단(?)하게 진행해 봐 주시구요.

Q. 이 논문에서 쓴 방법론에 대해 설명을 해 주세요. 이게 많이 복잡하네요…

C. 각각의 dataset 들을 가지고, fine tuning 된 RecLlama 를 이용하는 것으로 보이는데, InteRecAgent 가 simulate 하면서 케이스들을 구체화시키는 과정이 키포인트일 거 같은데요.. 논문에 사용되는 prompt 들을 같이 읽어 봐 주세요. prompt 들과 request / response 들을 이해하는 게 여러 면에서 도움이 되더군요.

Q. 테스트 시에는 같은 질문을 다른 시스템에게 던지면서 얼마나 잘 따라오는지를 비교하게 될텐데.. LLM 의 일반론에 context window 를 많이 늘리는 건 도움이 되지 않을까요 ?

  

### [**ChatGPT를 활용한 영어학습과 활용서비스-진승환,송민지**](https://drive.google.com/file/d/1ohDsgn1Ouvy1VljG4HxcGe0z3iV-Kjad/view?usp=sharing)

교육을 주도하는 선생님, 학교의 시각에서 Gen AI 를 어떻게 써야 하는지에 대한 이야기와 실제 상용 서비스로 호평을 얻고 있는 스픽 서비스에 대한 분석과 설명들. 타 제품 대비 압도적인 ‘말시킴’으로 호평을 얻고 있다는데.. . 아래는 comment 들. 공교육이 제약과 규제가 필연적인 부분이 있다면, 스픽 같은 서비스는 더 자유로운 상상을 할 수 있는 상황에서 여러 방식으로 사용자들을 모으고 있는 부분에 대한 설명과 해석들.

  

Q. p15 의 '1위'는 조금 구체적으로 설명해 주세요. 장르라든지.. 객관적인 수치들이 있을까요 ?

Q. Speak 은 얼마인가요 ?

Q. Spaek 의 경우 기술적인 면에서 OpenAI 이외의 다른 모델을 쓴다고 생각하면 다른 차이들이 있을까요 ? e.g. 구글 Gemini 나 네이버 혹은 자체 모델이나 데이터라든지.

Q. 한국에서 폭발적인 사용자 수 증가에 비해 글로벌 런치 후 숫자는 그리 놀랍지 않은데, 어떻게 해석하면 될까요 ? 마케팅(이효리)의 힘이었을까요 ?

  

### [**Inside copilot - 인프라 이야기 - 박찬욱, 성민지**](https://docs.google.com/presentation/d/1wJuVOdc_eLO67e7xttJyRlQlzhmIKZx4/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true)

MS 의 Azure / Copilot 을 다루는 학생과 Hynix 에서 메모리를 다루는 학생들이 M365 Copilot 이 더 널리 쓰이게 될 때 맞이하는 여러 챌린지들을 잘 설명해 줌. MS 가 야심찼지만 BignChat 의 실패 이후 Office 에 더 집중하게 된 상황, 여전히 쓰면 쓸 수록 손해인 이 상황을 헤쳐나갈 수 있을까…? 그와 관련된 질문들..

  

Q. Github Copilot 은 다른 model 을 쓸 수 있게 바뀌는데, 다른 copilot 들도 implicit / explicit 하게 그런 일이 벌어질 수 있을까요 ?

Q. 몇몇 선택된 회사들만 training 을 scratch 부터 할 수 있고, 나머지는 inference 를 위한 cost인데요.. 둘 다 중요한 관점이고 이슈인데, 이 두 환경이 태생적으로 처한 상황이 다를텐데, 나누어서 챙겨 봐 주시겠어요 ?

Q. 빅테크 이외의 회사들에게 기회가 있을까요 ?

  

### [**Cursor IDE 차세대 AI 기반 코딩 환경의 시작-강범준**](https://drive.google.com/file/d/1UyTlw_GsetIjVeqnVMTTSWaiVAN6rp3m/view?usp=drive_link)

최근에 각광받는 코딩을 도와 주는 도구인 cursor 에 대한 이야기. 신가한 제품의 소개보다 한 발 더 나아가면, 누구에게 어떤 도움이 되는가? 에 대한 질문들.

  

Q. P6에서 “카드” 는 VsCode 인가요 ?

C. 제가 숙련된 VsCode 사용자여서 그런지 사용자 접근성에서 난이도는 공감이 안 되고, 코드 자동완성 부분은 우열을 가리기가 힘든데요..

Q. 자연어 처리’ 라고 되어 있는 항목이 일단 차이를 보일 수 있는 부분인데, 실제 사용 예를 보여 줄 수 있을까요 ? 스크린샷 정도면 괜찮을 거 같습니다. 새로운 사용법을 익히는 거라 호불호가 있더군요.

Q. 팀 단위의 실시간 협업은 VsCode 의 다른 plugin 이랑 비교하는 모습이겠군요.

Q. AI를 리뷰어로 놓는 건 어떤가요 ? 회사 분들께서는 여기에 호불호가 있었습니다.

C. 리팩토링의 경우 VsCode 는 다른 플러그인의 도움을 받는 형태일 테고, Github의 repository를 최대한 많이 넣어 놓으면서 이득을 기다리는 것일텐데, 이른바 '초보용'은 아니기에 비교를 해 본 사례가 없긴 합니다.

Q. 회사에서 GitHub와 비교해서 Cursor를 쓴다고 하면 초보용인가 전문가용인가 따라서 전략이 많이 헷갈려 하고 있습니다. 이 경우 가격은 USD 40 vs USD 19 입니다. Justify 해 줄 수 있는 부분이 있을까요 ?

  

### [**논문 분석 - Dynamic hedging of KOSPI200 barrier options using machine learning based price and delta predictions-이지훈**](https://drive.google.com/file/d/1eHEBeVSheEH9fkyPEes-HQTQKDR_uodN/view?usp=drive_link)

KOSPI200 Barrier Option을 다양한 ML 방식으로 분석해서 선물을 예측하는 방법들에 대한 연구와 분석들

  

Q. 저 MC(Monte Carlo) 방식의 simulation 은 엔트로피 같은 걸 가정한 궁극의 random 들을 실현하는 거 아닌가요 ?

Q. p11 에서 각각 약어들의 뜻을 간단하게 먼저 풀어 주세요..

Q. 사용된 변수는 종목의 가격만일까요 ?

Q. RMSE 의 경우 + 와 - 를 같은 가중치를 주는데, 이로 인한 영향은 없을까요 ?

Q. 예측이 아니라 소위 후행 ( 오늘의 값을 내일 예측 값으로 쓰는 ) 의 경우를 baseline 으로 놓는다 치면 방향이 훨씬 가중치가 높은 게 아닐까요 ?

  

### **금융사에서 쓰는 AICC(AI Contact Center)의 문제점과 개선방안 - 김민정, 박정환, 정한라**

KB금융 미래컨택센터( [https://www.etnews.com/20230810000152](https://www.etnews.com/20230810000152) )와 한국투자증권 MTS 챗봇 ( [https://economist.co.kr/article/view/ecn202311140007](https://economist.co.kr/article/view/ecn202311140007) ) 의 실제 사례 이야기. AICC 들을 replace 하는 게 단골 메뉴인데, 이게 잘 되고 있는가 ? 에 대한 현업에서의 문제 인식들. 완성된 제품으로 운용하기가 얼마나 어려운가에 대한 반증이 되기도 하는 듯.. 사용자와 상담원 모두 혹은 한쪽이라도 만족하는가 ?

  

Q. 사용자측의 불만 같은 이슈도 있지만, AI 통합 이후의 상담원들 쪽에서의 변화나 난이도 등도 있을까요 ?

Q. 간단하게 inbound의 경우 질문들이 달라지거나 진상 손님을 만날 확률이 늘어난다든지 등이 예상이 되는데, 전체 재교육 등과 연관이 될까요 ?

Q. 같은 KB 인지는 모르겠고, 관련 이슈인지 잘 모르지만, KB 노사 고용 이슈들이 연초에 꽤 있었던 걸로 알고 있습니다. AICC 의 품질이 높아지면 언젠가는 다시 겪게 될 사회의 문제일 거 같은데... 조심스러운 제안이 있을까요 ?

Q. 상대적으로 한국의 CC 품질이 월등히 높아 왔었어서 더 어려운데, 다른 나라의 사례들을 참조할 때 어떤가요 ?
