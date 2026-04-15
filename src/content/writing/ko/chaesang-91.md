---
title: "인공지능과 추천 시스템 강의 노트 - (9/16)"
date: 2024-11-10
lang: ko
summary: "들어가며 지난 주의 중간 고사 즈음으로 조금 쉬어 간 이후 이번 주는 여러 개의 토픽들을 돌아가며 중간정리를 해야 했어서 context 가 많이 튀었다. 검색의 품질에 대한 이야기, 추천 시스템 결과를 비교할 수 있는 실제 코딩, OpenAI API 를 이용할 수 있는 기본적인 코딩까지. 추천 시스템 코딩 따라하기가 여러 면에서 가장 생뚱맞아서 튀게 되었다"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-24"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/91
draft: true
---

## **들어가며**

지난 주의 중간 고사 즈음으로 조금 쉬어 간 이후 이번 주는 여러 개의 토픽들을 돌아가며 중간정리를 해야 했어서 context 가 많이 튀었다. 검색의 품질에 대한 이야기, 추천 시스템 결과를 비교할 수 있는 실제 코딩, OpenAI API 를 이용할 수 있는 기본적인 코딩까지. 추천 시스템 코딩 따라하기가 여러 면에서 가장 생뚱맞아서 튀게 되었다.

  

## **준비한 내용들**

### [**9주) 강의 update**](https://docs.google.com/presentation/d/164loDCluHQlKKrE0KFx89GW3PDfX1nuS0Rwwi8dr7wY/edit#slide=id.g1168ad8df56_0_7)

![](/writing/chaesang-91/01.png)

SearchGPT 가 출시되었지만, 모두가 써 본 건 아니고, 현재까지는 기존의 ChatGPT 보다 썩 더 나아졌나 궁금한 정도의 사용성이고, 한편으로는 MS / Github / OpenAI 가 오랫동안 파트너를 할 것처럼 했지만, Claude 가 Github 에서 사용 가능하겠다 하였으며, 미 대선 결과 발표 전인데 빅테크들은 건실함을 자랑하고 있는 듯했다.

  

### **brunch:** [**AI 들에게 물어보기 - '단백질 음료수 추천'**](https://brunch.co.kr/@chaesang/88)

SearchGPT 를 써 보진 않았지만, 얼마전에 Perplexity 가 한국에 도전장을 내밀며 예제로 든 쿼리가 '단백질 음료수 추천'인데, 나름 PR 팀이 고르고 고른 쿼리이겠지만, 이게 결과가 더 나은가? 라는 질문의 기록이다. 구글의 검색 퀄리티에 대한 노력을 너무 허투로 보고 있는 건 아닌가 하여 offline human evaluation 에 대해 소개하였다.

  

### **public link :** [**Guide to Search Quality Rating Program**](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)

EWOK 으로 불리던 사람들이 결과를 내는, 요즘에 RLHF 혹은 cloud sourcing 으로 읽히는 10여년전부터 구글이 검색 품질에 들이는 노력에 대한 공개 자료이다. 실제 엄청나게 디테일한 가이드라인을 담고 있고, 새로운 이벤트를 진행하게 될 때 이정도의 촘촘한 설명이 필요해서 고생했던 기억들도 난다.


### [**추천시스템 - 추천 알고리즘 상세 ( part 2 )**](https://docs.google.com/presentation/d/1mLoUxqBSsEzmCUgH3FUMheqIUn0UNdzobjkxnuRvxB8/edit#slide=id.g1168ad8df56_0_7)

추천 시스템의 몇몇 주요 알고리즘을 코드를 이용해서 따라가지 않은 게 여전히 찜찜하게 나타나 있지만, MovieLens 데이터를 이용해서 random , popular , association , user-2-user memory collaboration filter 등의 내용을 담은 링크들이다.


### [**Colab : openai API test-1101**](https://colab.research.google.com/drive/12PFb6YL7aoBN3s2HRHd6zAjhEWaBXiAt#scrollTo=bXp-ccEokH_S)

### [**Colab : openai API - for news creation**](https://colab.research.google.com/drive/1YzL5rRFHKeEDrHXEIYABiWU3krKMub3f#scrollTo=0xTe0LyN1xFM)

위의 코딩보다는 실제 OpenAI API 를 등록해서 써 보는 테스트를 해 보았다. 이미 잘 하는 친구들도 있겠지만, 뭔가 시도해 보기 힘든 벽을 처음에 가진 학생들에게 조금의 용기라도 주었으면 한다. 에러가 나는 환경, 모델을 바꾸어 가면서 혹은 prompt / instruction 을 바꾸어 가면서 글 혹은 뉴스를 만들어 내는 기본적인 prompt 사용하는 법들을 훑어 보았다. $10 의 credit 으로 시작하지만, 공짜가 아니어서 몇 개 해 보지 않아도 금방 quota 가 소진된다.

  

## **기말 과제 발표**

  

### **한국어 기반 금융 분야 BERT 기반 LLM 비교**

ChatGPT 가 나오기 이전 LM 의 1-2위를 다루던 BERT 의 금융계 도전에 대한 논문 survey 였다. KB은행에서 주도한 [https://github.com/KB-AI-Research/KB-ALBERT](https://github.com/KB-AI-Research/KB-ALBERT) 과 카카오뱅크에서 이후에 주도한 [https://huggingface.co/kakaobank/kf-deberta-base](https://huggingface.co/kakaobank/kf-deberta-base) 과 관련해서 발표되었던 몇몇 논문들을 잘 요약해 주었다. 한글이라서, 금융 도메인이라서 라는 제약을 추가적인 데이터를 가지고 pretraining 하는 접근 방법들인데, 아래는 몇가지 질문들.

  

\- 테스트 셋으로 외국 테스트의 번역본을 썼는데, 이걸로 충분한가 ? 오염이나 bias 는 ?

\- 부족한 데이터들을 모으기 위해 앞은 syntetic creation 으로 접근했고, 후자는 권위 있는 데이터의 조합으로 접근했음. 후자로 가야 하는 게 아닐까 ?

\- 점수의 차이가 실제 사용하는 입장에서 어떤 의미가 있을까 ? accuracy 가 90점이나 92점이나 10-11번 당 1번씩 잘못 판단하는 건 제품 입장에서 큰 차이 없는 것 아닌가 ?

  

## **맺으며**

준비한 내용들로는 2시간 약간 넘은 정도만 커버할 수 있어서 예상보다 많이 일찍 끝난 수업이었다. 멀리까지 시간 내어 온 학생들에게 미안한 상황이 되었는데, 교재로 준비한 책들의 내용이 끝나는 상황이 될 때 transition 이 매끄럽지 못한 것에 대해서는 더 준비가 필요하겠다.
