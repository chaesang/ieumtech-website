---
title: "한국 IT 용어 이야기 (15) - 에이전트"
date: 2026-02-18
lang: ko
summary: "약간 식상하지만 AI 란 무엇인가라는 질문에 대해서 답변은 그동안 매우 다양하게 있어 왔다. 눈높이는 각종 영화나 TV show 에서 나오는 HAL1000, Jarvis, Skynet 등에 맞춰져 있지만, 꽤 오랫동안 Google Home이나 Amazon Alexa같은 지금은 smart speaker 라고 불리는 것들이 그 위치를 차지하고 있었고, 채팅 창"
tags: ["it-term", "language"]
series: "itterm"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/154
draft: false
---

약간 식상하지만 AI 란 무엇인가라는 질문에 대해서 답변은 그동안 매우 다양하게 있어 왔다. 눈높이는 각종 영화나 TV show 에서 나오는 HAL1000, Jarvis, Skynet 등에 맞춰져 있지만, 꽤 오랫동안 Google Home이나 Amazon Alexa같은 지금은 smart speaker 라고 불리는 것들이 그 위치를 차지하고 있었고, 채팅 창의 챗봇이 그 역할을 하기도 하다 ChatGPT 이후에 대세가 되어 오랫동안은 대화창에 응답하는 것들을 뭉뚱그려 AI 라고 혹은 AI 서비스라 불러 왔다.

  

지금 2026년 전망을 보면 거의 모두가 에이전트라는 것으로 이야기를 한다. 서비스나 플랫폼이라 불리던 것들은 거의 없고, 특히 생산성 영역은 전부라 해도 과언이 아닐 정도로 에이전트들을 이용한 무언가들로 모여 있다. 각각의 역할들도 다양할 테고, 수행하는 방식도 영업 비밀에 해당하겠지만, 이전에 안 되던 것들이 이제는 되는 거 같고, 상상했던 것보다 잘 되는 영역도 분명 존재할테다. 이 키워드 없이는 비지니스가 되지 않을테니 일단 포함하고 보는 각종 거짓말들과 공수표들도 덩달아 판을 칠 것이기에 정신 바짝 차려야 하겠다.

  

## **언제부터 ?**


아주 오래전부터 쓰이던 일반 명사였겠지만, 이쪽 세상에 언제부터 에이전트가 전면에 나왔을까 짚어 보자면 2024년 10월 Microsoft의 ignite 행사를 꼽겠다. AI 관련해서는 상대적으로 잠잠하던 Microsoft 가 2024년 봄에 Office365에 Copilot을 중심으로 전면전에 참여를 했는데, 당시 주요 빅테크들이 여전히 채팅 기반 어시스턴트, LLM 코어 등에 집중하던 시절에 이 행사에서 Copilot 과 Agent 두 키워드들을 선점해서 강하게 제품들 이름에 넣었었고, 이후에 더 넓은 곳에서 널리 쓰이는 모습이다. 당시 옆 채널에서 쓴 글( [https://brunch.co.kr/@chaesang/98](https://brunch.co.kr/@chaesang/98) )을 참고할 수 있겠다. 아래는 당시의 wrap up.

  

[https://www.microsoft.com/en-us/startups/blog/microsoft-ignite-2024-wrap-up-highlights-and-resources/](https://www.microsoft.com/en-us/startups/blog/microsoft-ignite-2024-wrap-up-highlights-and-resources/)

[**Microsoft Ignite 2024 wrap up: Highlights and resources - Microsoft for Startups Blog**

Learn more about leveraging AI responsibly, committing to security, and keeping pace with the constantly changing technological landscape.

https://www.microsoft.com/en-us/startups/blog/microsoft-ignite-2024-wrap-up-highlights-and-resources/](https://www.microsoft.com/en-us/startups/blog/microsoft-ignite-2024-wrap-up-highlights-and-resources/) 

![image.png](/writing/chaesang-154/01.png)

  

잠깐 정신을 차려 보니 어디에서나 모두다 자연스레 쓰고 있다. 한편으로는 이 회사가 제품 이름을 먼저 짓는데 들었을 가늠되지 않는 노력, 이후의 상도덕 같은 게 신경쓰이지만, 이 판국이 그런 거 신경 쓸 상황이 아니기도 하겠다 싶다. 그렇다고 특허를 걸거나 할 수도 없을테고. 꽤 자연스레 assistant 나 chat service 등은 이제 거의 보이지 않는데, 아마도 에이전트가 개념적으로 더 많은 일을 할 수 있는 상위 개념이니까 그럴까 싶은 생각이다.

  

## **어려운 번역들**


예전 구글에서 제품 이름들이 나오면 언제나 한국형 이름을 짓는데 고생들이 많았는데, assistant 도 만만치 않았으리라. 직관적으로는 '비서'로 번역이 되겠지만, 영어로는 자연스레 assistant라고 쓰는 공에 특정 직군을 담기 부담되기도 하였을 테고, '나만의 개인 비서' 등으로 풀어 쓰려 하면 제품으로서 가치가 매우 어려워서 짐작컨데 '구글 어시스턴트'라고 그대로 부르려 했으리라.

  

에이전트도 마찬가지겠구나 싶다. 직역인 대리인, 요원 둘다 만만치 않고, 없어 보이기까지 하는데, 이는 스포츠에이전시나 첩보 영화들이 그동안 준 좋은 의미의 선입견들도 한몫하고 있다는 생각이다. 대신 검색 에이전트, 예매 에이전트, 조회 에이전트 등등 다른 단어들과 자연스럽게 연결되어 조만간 펼쳐질 엄청나게 다양한 에이전트들을 맞이해야 하겠다. 한편 비슷한 맥락들에서 Agentic AI 라는 말들이 꽤 있었더랬는데, 지금은 에이전트가 AI 를 포함하는 개념으로 쓰이고들 있는 거 같고, 개인적으로는 AI 라는 말이 빠지면서 조금 더 명확해 지는 등의 이유로 반가운 마음이다.

  

AI 가 지능 그 자체를 가리키는 쪽으로 역할을 놓고, 에이전트는 그것을 운용하는 쪽으로 주로 역할을 맡는다. 굳이 내부에서 LLM 을, 크고 비싼 걸 써야 하나 말아야 하나 등은 중요하지 않아 보인다. 다만, 권한을 위임 받기를, '자율적'인 형태를 가지기를, '판단'을 하기를 기대하고 이를 위해 LLM 등이 이용된다. 이용하려는 tool 의 정확도, 검색의 품질, knowledge base 로 사용할 데이터들의 유용성, 얼마나 trash 들을 걸러 내어야 하려나 등의 이슈들로 살짝 돌아가는 느낌도 들고... 정신 없이 따라가기에도 정신 없는 한 해가 예상된다. :)

  

### **사족.**

전문연구요원이라는 제도로 짧게 군대 훈련소를 다녀왔는데, 당시 민망하게도 '연구'라는 말이 빠진 채로 '전문요원' 이라고 쓰여진 팻말 아래 평균 나이 30살 늦깍이 훈련병들이 모여 있었더랬다. 같이 입소한 20살 젊은 신병들의 눈흘김이 살짝 기억난다. 뭔가라도 기대했던 것일까...
