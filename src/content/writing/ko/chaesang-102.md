---
title: "AWS 리인벤트(re:Invent) 2024 리뷰"
date: 2024-12-27
lang: ko
summary: "이 글은 제가 NIA [한국지능정보사회진흥원]의 < 디지털서비스 이슈리포트 > 2024년 12월호에 기고한 글입니다. 원본 글 '2024년 AI 현황 보고서 리뷰'를 이곳 브런치에서도 공유합니다.  들어가며 매년 12월 초, 라스베거스(Las Vegas)는 AWS가 주최하는 리인벤트(re:Invent) 행사로 기술 혁신과 열정으로 가득 찬 도시로 변한다."
tags: ["update", "speaking"]
series: "chaesang-priv"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/102
draft: false
---

이 글은 제가 **NIA \[한국지능정보사회진흥원\]의 < 디지털서비스 이슈리포트 > 2024년 12월호에 기고한 글**입니다. 원본 글 **'**[**2024년 AI 현황 보고서 리뷰**](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do;jsessionid=45C141C222A23225F7F8C6F90B8D70C7.aac3e2fb21b606361521?cbIdx=99863&bcIdx=27589)**'**를 이곳 브런치에서도 공유합니다.

  

## **들어가며**

매년 12월 초, 라스베거스(Las Vegas)는 AWS가 주최하는 리인벤트(re:Invent) 행사로 기술 혁신과 열정으로 가득 찬 도시로 변한다. 전 세계의 클라우드 전문가, 개발자, 기업 리더들이 한자리에 모여 최신 기술 트렌드를 공유하고, AWS의 새로운 서비스와 솔루션을 경험하며, 네트워킹의 기회를 넓힐 수 있는 이 행사는 단순한 컨퍼런스를 넘어 클라우드 기술의 미래를 조망하는 장으로 자리 잡았다.

  

마이크로소프트의 애져(Azure) 와 구글 클라우드 플랫폼을 비롯한 업계의 강력한 경쟁자들도 있지만, 2012년부터 AWS 는 이 행사를 그들의 고객들이 같이 참여해서 정보를 나누고 공유하는 행사사로 만들었다. 뿐만 아니라 개발자들에게는 세분화된 세션들과 함께 여러 가지를 해 볼 수 있는 세션, 경진 대회 등을 제공하는 명실상부한 축제로 만들어 나가고 있다.

  

워낙 유명한 행사이고, 여러 경로로 다양한 분석들을 접할 수 있지만, 이 글에서는 기술 기업을 운영하는 입장에서 다른 이벤트들과 비교해서 AWS 가 어떻게 세상에 접근하는지 등에 대해 몇 가지 정리해 보겠다.

![AD\_4nXfDFWqEwZzrGBfkZRykVxT-3\_thgU6Go4q7swBY2rBE7-YLi-zRNvPq3cThL0VpDME0VARd590ADpJnrOsaSHBNr\_j9x2frKphGxot6ByEZd7Pd\_kXp9GamV\_fhMf4ELnYnObduCQ?key=yqA1P1QECrmaJkZu8klkxyqj](/writing/chaesang-102/01.jpg) 그림 1. AWS 2024 전경

## **빌더(Builder)**

AWS를 사용할 때 제일 먼저 눈에 들어오는 문구는 “빌더” 라는 표현이었다. 넓은 의미로 AWS 의 사용자를 칭하는 말이겠고, 곳곳에서 “Hey AWS Builders.” 라는 말들을 많이 들을 수 있었다. 오랜 시간 개발자로 지내 왔지만, 이 행사처럼 개발자와 비개발자들을 아우르는 곳에서는 아주 적절한 이름이라 생각하고 있고, 실제로 개발자가 아닌 빌더들을 많이 접하면서 많은 사례들을 직간접적으로 접할 수 있다.

  

실제 AWS 를 처음 접하게 되면 아이디를 만들 때 아래 화면처럼 AWS 빌더 아이디를 만들겠다고 한다.

![AD\_4nXcfDiIWJZ0JxEm1yX5nYrtWNhBT-fes64ZPbf4AV5X2z4dHYtaYDo2tFlQFT4cGXOSb3cEYVTwSTSwusdPfyRTweIkWMmTFtxsGq8cZibC9hG0pcwNyw4cAvTfZXD77MmPqdlM6?key=yqA1P1QECrmaJkZu8klkxyqj](/writing/chaesang-102/02.jpg) 그림 2. AWS 첫 로그인 화면

## **AWS vs 아마존(Amazon)**

AWS 의 시작이 아마존 서비스들을 클라우드 환경에서 만들기 위해서였고, 이를 아마존 이외의 기업들에게 유용하게 서비스할 수 있게 해 놓은 것이 지금에 이르렀다. 이를 감안해서 모든 키노트들에서 AWS 와 아마존을 나누어서 해석하면 훨씬 자연스러운 이야기들이 들린다. 이는 다른 주요 빅테크 업체들의 행사들과 크게 차이나는 부분으로 맷 가먼(Matt Garman)의 메인 키노트에서 무려 30분을 할애해 가며 주요 협력 업체 중 하나로서 아마존이 어떻게 AWS 의 도움을 받아 사업들을 영위해 나가는지를 보여 주었다.

  

아마존 CEO로 영전한 앤디 제시 전 AWS CEO가 직접 나섰고, 아마존 전 제품군에서의 AWS 사용, 특히 AI 를 이용한 제품 개선에 대해 이야기를 해 주었다.

아마존 앱에서 채팅을 이용한 고객 상담 서비스에 생성형 AI 이용.

상품의 상세 페이지를 자동으로 생성.

물류 센터에서 재고 관리를 효율화함.

물류 센터 안에서 로봇들의 협업 관리.

쇼핑을 도와 주는 챗봇 서비스 루퍼스(Rufus)

알렉사의 대화 품질 향상

이미지로 물건을 검색하는 아마존 렌즈(Amazon Lens)

사용자를 이해한 후 옷의 사이즈 같은 초개인화 추천

프라임 비디오에서의 데이터 기반 통계 서비스 등

![AD\_4nXcEwH3pvdmCROxGNk0xdUEjCgHKZSq3U0QJyPE3Ecji5mQGY9TDg0KEZcqug6dMhPH8PnZgJ\_bFKVTAg4UvcVGeX0ncG0AGg0uP9vr\_vH4mfggNYqSexaK1eL3AwrvwzrWpd0GAJA?key=yqA1P1QECrmaJkZu8klkxyqj](/writing/chaesang-102/03.jpg) 그림 3. 쇼핑몰 입점자들에게 호평을 받는 아마존 상세 페이지 생성기

이 날 발표의 백미 중의 하나는 ‘노바(Nova)’ 라는 제품군으로 아마존이 직접 프론티어 AI 모델의 공급자로 나서겠다는 것이었다. 노바는 이전에 ‘타이탄(titan)’으로 쓰던 모델을 전격적으로 재편한 것이고, 각종 지표에서 경쟁력을 주장하며 6가지 모델로 출시를 선언했다. 자연어 텍스트로 질문하고 답하는 보급형 모델로 메타 라마 3.1 8B나 구글 제미나이 1.5 플래시-8B와 비교되는 ‘노바 마이크로’, 텍스트와 이미지, 비디오 등의 멀티모달을 지원하고 GPT-4o 미니와 비교되는 ‘노바 라이트’, GPT-4o와 비교되는 ‘노바 프로’, 최고사양으로 알려져 이름만 공개된 ‘노바 프리미어’, 이미지 생성 모델인 ‘노바 캔버스’, 동영상 생성 모델인 ‘노바 릴’ 등이다.

  

이후에 공개될 라인업으로 음성 용 스피치 투 스피치, 멀티 모달 용 애니 투 애니를 예고함으로써 AWS 는 빌더들에게 선택권을 주지만, 강력한 후보 중 하나로 아마존에서 만든 노바를 고려하게 만들었다.

![AD\_4nXcKwMapkZmvrSwlYHBbIMCkJsQsuP7WjeeSx4VyWuPjI-F1zQthuvXXtYG8-b7TKe7H02Xg8NoVZ8b6kFyMY48piMrEE8NuAKEzwHbqk1g8-xMYy-\_Xvvv14hCZOYqm8qWJUphDxg?key=yqA1P1QECrmaJkZu8klkxyqj](/writing/chaesang-102/04.jpg) 그림 4. 아마존 노바의 다음 출시 예정 모델들

  

## **생성형 서비스 만드는 건 힘들다.**

많은 세션에서 공통적으로 이야기하기를 생성형 AI 서비스를 이용해서 데모 혹은 최소 시제품을 만드는 건 쉽지만, 이를 서비스로 만들어 내기까지는 무수한 어려움이 있고, 그들은 대개 비용 증가, 데이터 품질 저하, 그리고 위험 관리 부족이라 이야기한다. 이는 지속적으로 관리를 해야 하는 것에 따르는 반복적이면서 복잡한 과정들 때문이기에 이 고통을 분담하기 위해 세이지메이커(SageMaker) 와 베드록(Bedrock) 에 다양한 기능들을 추가해 왔다고 일관되게 이야기하고 있다.

  

모델을 직접 개발, 훈련, 배포를 하기 위해서는 세이지메이커를, 사전 훈련된 기본 모델들을 쉽게 사용하기 위해서는 베드록을 쓰게 하고, 여기에 다양한 자동화, 데이터 통합, 품질 검수, 관제 등의 기능들을 추가함으로써 빌더들이 겪는 노력들을 대신해 주는 것들을 목표로 하고 있다. 이 관점에서 AWS 는 아마존과 다른 위치에 있으며 아마존 서비스들을 하나의 옵션으로 두어 빌더들에게 유연함을 주는 방향으로 제품들을 진행해 오고 있다.

![AD\_4nXeGPNaOAJ-gSQCBYLKnGHDDkSMEZKU3m0o1dyChoLwHUY32N91vlubG-Em9uVvn32FBXEosb1KuNwOBMZZn7kMDjghwAsydbIs\_LzqMM0e7ZR2iWZS3bxdaRznalx3kqp5ppc5X?key=yqA1P1QECrmaJkZu8klkxyqj](/writing/chaesang-102/05.jpg) 그림 5. 시제품에서 본제품으로 가기 위해 극복해야 할 요소들

  

## **아마존 Q**

마이크로소프트가 코파일럿(copilot) 을 여러 제품군에 통합해서 다양한 기능들을 추가로 제공하기 시작한 것처럼, AWS 개발 도구에서는 아마존 Q 라는 브랜드 아래에서 아마존 Q 디벨로퍼와 아마존 Q 비즈니스 두 개의 이름으로 에이전트 역할을 하는 서비스를 추가해 왔다. 작은 기능 설명에서부터 에이전트에게 맡기고 싶은 일들을 하게 하는 등 마치 마이크로소프트 오피스365에서 코파일럿에게 일을 맡길 때와 같은 효능을 얻을 수 있도록 하고 있다.

  

특히 개인적으로 인상이 깊었던 건 윈도우 닷넷, VMware , 메인프레임 등을 AWS 생태계에 자연스럽게 마이그레이션 하고, 각종 라이브러리들의 버젼업 등을 이 에이전트들을 통해 수월하게 할 수 있도록 하는 아마존 Q 트랜스폼 서비스였다. 오래 전에 만들어져서 레거시라 불리며 통상 몇년까지도 걸리는 엄두도 내기 힘든 이 작업들을 생성형 코드 에이전트들이 일하는 모습이야 말로 개발자들이 오래전부터 꿈 꿔 왔던 세상일 지도 모르겠다. 알아서 자바 버전이 업그레이드 된다니…

  

## **맺으며**

필자가 속한 주식회사 인이지는 2023년에 스타트업 아기유니콘으로 선정되어 올해 기술보증기금이 주관하는 「2024년 아기유니콘 육성 사업 AWS re:Invent 연계 지원 프로그램」 으로 이 행사에 참석할 수 있는 기회를 얻을 수 있었다. 프로그램이 다양한 기회를 열어 준 덕에 회사의 입장에서는 상대적으로 한국에서 접하기 힘든 공장, 설비 등의 제품군에 대한 견문을 넓힐 수 있는 좋은 기회였고, 많은 솔루션 업체들과 사용 사례들을 현장에서 접할 수 있는 좋은 기회였다. 한국에서도 많은 기업들이 클라우드를 이용한 공장 자동화 솔루션으로 가는 도전들을 할 수 있기를 바라고, 인이지와 같은 회사가 다양한 최적화의 문제를 같이 풀 수 있기를 바란다.

![AD\_4nXfvu647w5\_UDnpkxH5bsqW3nOgRlRpVsHNCYH93KtyqsxlhncYlIPdrKOrHH3cu294Tt\_B1AKpbE-KIdQqeOiNKBXlsqEu0fNvypg-Df5VSJLq43kKTbnCfXKLluXAgDh6o\_x3fdg?key=yqA1P1QECrmaJkZu8klkxyqj](/writing/chaesang-102/06.jpg) 그림 6. https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html

마지막으로 이 자리를 빌어서라도 함께 했던 기술보증보험 관계자 분들께 감사의 마음을 전할 수 있으면 하고, 같이 프로그램에 참가해서 인연을 다지게 된 다른 아기유니콘 업체들의 무운도 함께 빌어 본다.
