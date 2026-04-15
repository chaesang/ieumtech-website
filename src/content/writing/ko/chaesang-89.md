---
title: "AI 들에게 물어보기 - who is Tesla?"
date: 2024-11-06
lang: ko
summary: "여러 복잡한 생각이 들지만, 그래도 검색 쪽을 오래 했어서, 유튜브 피드에 유사 업체들이 자주 보이는데, 이번 토픽은 역시 티타임즈tv 의 대학생, 대학원생들은 왜 챗GPT, 퍼플렉시티 대신 라이너를? (김진우 대표)  개인적으로 응원의 마음과 걱정의 마음이 동시에 드는 회사, 서비스이고, 여타 다른 클립보다 댓글이 사납네..  모두를 위한다기보다는 특정"
tags: ["service-analysis"]
series: "svc-analysis"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/89
draft: false
---

여러 복잡한 생각이 들지만, 그래도 검색 쪽을 오래 했어서, 유튜브 피드에 유사 업체들이 자주 보이는데, 이번 토픽은 역시 [**티타임즈tv 의 대학생, 대학원생들은 왜 챗GPT, 퍼플렉시티 대신 라이너를? (김진우 대표)**](https://www.youtube.com/watch?v=4DS8bZieqvM)

  

개인적으로 응원의 마음과 걱정의 마음이 동시에 드는 회사, 서비스이고, 여타 다른 클립보다 댓글이 사납네..

  

모두를 위한다기보다는 특정 도메인의 사용자들이 마음껏 널리 돈 내고 쓰는 기능들을 하고 있다.. 며 보여주는 쿼리가 'who is Tesla?'. 일반적인 기대는 사람과 회사 둘이고, 어떤 설명을 해 놓고 있을지가 관건. halluciation까지 가지 않더라도, 의인화된 회사를 답으로 인정해야 할까 고민거리도 있고, 모호함의 대표적인 쿼리.

  

## **사람 + 회사 : Google / Gemini / Claude : ( 10/10 )**

사용자 시각에서 개인적으로 기대했던 답변은 맨 윗줄들이다.

  

There are multiple matches for Tesla, including an inventor and an electric car company: ( Google )

Tesla can refer to two different things: ( Gemini )

Tesla commonly refers to two major entities: ( Claude )

  

그리고 셋 다 사람에 대해 차분하게 설명해 준다. 화면 구성도 군더더기 없음.

![google-teslta.png](/writing/chaesang-89/01.png)

![gemini-tesla.png](/writing/chaesang-89/02.png)

![claude-tesla.png](/writing/chaesang-89/03.png)

  

**모르면 모른다고 하고, 헷갈리면 헷갈린다고 하라.**

  

## **사람 ! : Bing ( 8/10 ) , Liner ( 7/10 )**

일단 사람이라고 힘주어 말하고 있음.

![bing-tesla.png](/writing/chaesang-89/04.png)

![liner-tesla.png](/writing/chaesang-89/05.png)

  

Bing 은 wikipedia 인물 페이지를 올려 힘주어 말하려 하지만, 오른쪽 위의 The History of Tesla 는 회사 이야기라서 감점. reconcile 어려운 사례이고, 참고로 아래 또다른 block 에서는 자그마하게 회사 Tesla 이야기를 섞는데, 문단이 성립되지 않음.

  

라이너는 사람이라고 했지만, 오른쪽 소스에 절반은 회사 이야기. 같은 감점. 거기에 본문에 몇 자 들어가지 않는 곳에 "Serbian-American' 이라는 말이 세 번이나 나옴. 구글 Knowledge Panel 기준으로 아주 불편한 UX 여서 추가 감점.

  

## **회사 ! : Chatgpt ( 9/10 ) , 뤼튼 ( 7/10 ), Perplexity ( 5/10 )**

일단 회사라고 힘주어 말하고 있음.

![chatgpt-tesla.png](/writing/chaesang-89/06.png)

![wrtn-tesla.png](/writing/chaesang-89/07.png)

![perplexity-tesla.png](/writing/chaesang-89/08.png)

ChatGPT 는 깔끔하게 사람 이야기가 없음. 네가 사람을 찾을 리가 없어 라는 듯한 군더더기 없는 답변. 뭔가 불만이면 다시 물어 보든가... 라고 묻는 듯하다.

  

뤼튼도 간결한 답. 그러나 참고자료가 절반은 사람이고, 심지어 1, 2위가 사람인데 회사라고..? 거기에 스크롤이 확 올라가며 질문이 안 보인다. 아래 추가 질문들을 눌러 달라고 이야기하는 듯..

  

perplexity 는 글은 회사인데, 이미지들은 사람. 가장 헷갈렸음. Who 에 반응했는지 Elon Musk 가 Nikola Tesla 보다 위로 옴. 랭킹 좀 더 해야 할 듯.

  

## **뭐라고 ? : 네이버 ( 2/10 )**

  

![naver-tesla-2.png](/writing/chaesang-89/09.png)

![naver-tesla1.png](/writing/chaesang-89/10.png)

  

**Who is Tesla** 에는 반응하지 않는 거 같고... 영어라서 패스 ?

**Tesla 가 누구야** 에는 대충 섞인 웹 검색 결과. 위와 비교하면 많이 어색한데... 쿼리가 잘못된 걸로 하자.

  

ps. 글을 쓰고 있는 도중 2편이 나왔는데... [우리 콘텐츠가 AI검색 추천을 받으려면? (김진우 라이너 대표)](https://www.youtube.com/watch?v=muOoEGXO90k&t=11s) 아직 댓글이 사납진 않지만, contents quality 매기고 indexing / spam fighting 에 대해 진심이 느껴지지 않아서 걱정과 우려가 많음.
