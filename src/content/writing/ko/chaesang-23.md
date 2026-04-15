---
title: "인공지능과 추천 시스템 강의 노트 - (14/16)"
date: 2024-01-09
lang: ko
summary: "AWS reinvent 가 일어나는 중이고, 학기 중 발표를 위해 준비한 내용을 이야기한 마지막 시간이다.  준비한 자료들 14주 강의 update  GAIA benchmark 에 관심이 가서 조사를 좀 더 하고 인용을 했다. 기계는 아직 멀었다고 이야기하는 Yann 의 의견을 뒷받침하는 벤치마크들. 여전히 ‘이런 것들을 답 한다고?’ 싶은 것들의 집합."
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/23
draft: true
---

AWS reinvent 가 일어나는 중이고, 학기 중 발표를 위해 준비한 내용을 이야기한 마지막 시간이다.

  

## 준비한 자료들

### [14주 강의 update](https://docs.google.com/presentation/d/1jDUEE5GWi58AZVGDXas7BTg_fACXxiblqtP-r7LSgA0/edit#slide=id.g1168ad8df56_0_7)

![1\*fzb07JcZhHlWTCczK9CVQQ.png](/writing/chaesang-23/01.png)

  

GAIA benchmark 에 관심이 가서 조사를 좀 더 하고 인용을 했다. 기계는 아직 멀었다고 이야기하는 Yann 의 의견을 뒷받침하는 벤치마크들. 여전히 ‘이런 것들을 답 한다고?’ 싶은 것들의 집합.

![0\*TxwggJ\_FhvnINC5i](/writing/chaesang-23/02.jpg)

  

### [14주) 추천시스템 — 9](https://docs.google.com/presentation/d/1XRZS_osfRn1Ud69bVP7aWabtwip_-CNh8LrHkIXztOk/edit#slide=id.g1168ad8df56_0_7)

추천 시스템 강의의 남은 부분을 몰아서 진행하며 마무리하는 시간. 상세 알고리즘들 중에서 회귀 모델과 행렬 분해, 자연어 처리 등에 대한 이야기들. LLM(or LMM) 이전의 나름 아기자기한 방법들끼리 비교하는 모습이었고, 1) (sparse한) 행렬을 만들고, 2) 백터의 내적을 가지고 정렬해서 닮음을 찾아 낸다.. 라는 목적을 향해 여러 가지 시도들.

  

개인적으로는 자연어를 푸는 방식을 만들어 놓고, 거기에 해당할 수 있는 ‘문장’을 생성해 놓는 방식으로 구현한다는 게 조금 돌아가는 듯하지만 신선했었다. 그리고 여러 가지 이유로 딥러닝 이후에는 transformer/attention 으로 통일이 되었고, 이제 예측 모델 자체의 우열은 가리기 힘든 시대인 듯하다는 생각들.

  

실제 업무에서는 여러 방법론 중 하나 혹은 여럿의 방법으로 넓은 의미의 추천이 진행되기를 바라고, 각 방법들 사이에 실제 운영에 필요한 여러 기법들, 이후의 비용과 각종 근사 방법들… 오래 되었지만 여전히 재미있는 분야라는 생각이다.

  

마지막으로는 제품이 만들어 내는 편향들, 요새 LMM / AGI 등의 담론에서 다시 화두가 되는 이슈들을 정리하는 기회들이 있었다. 유명하진 않고 구성이 올드하긴 하지만, 할 이야기들은 그래도 잘 정리해 놓은 교재였다는 개인적인 평가를 이 책에 드린다. 중간에 비는 시간 없이 조금 더 계획적이었으면 어땠을까 하는 개인적인 아쉬움도 이 강의에 남긴다.

  

## 과제 발표들

### [Last Mile Delivery — 효율성 개선을 위한 AI 적용](https://drive.google.com/file/d/1IxtfOC-dAdSaEhKFHQQXMiKqNZ9FlKjF/view?usp=drive_link) by 정하련

AWS 에서 발표한 Dynamic Delivery Planner 의 접근에 대한 논문과 해석들. NP hard 로 알려져 있는 고전적인 TSP(Traveling Salesman Problem) 이지만, 현실의 세계에서는 배송기사의 습관과 미래의 교통 상황 등에 대한 이슈들을 여러 가지 운영 상의 노하우들로 해결해 나가고 있다. 개인적으로 운전자의 습관이 큰 변수가 될 것이 아니라는 견해지만, 여기서 ‘최적화’ 는 배송 기사의 더 많은 노동량을 뜻하게 되는 아이러니 또한 풀어야 할 과제일 것이다.

  

### [Lemonade 회사 및 서비스 분석](https://drive.google.com/file/d/1EDxc_Po4CQCHGv2lGCoaN-rP5G7203yN/view) by 김명준

미국 insure tech 회사 Lemonade 에 대한 분석들. 보험 가입자들의 불만을 잘 노린 영역이지만 기존 보험 고객들의 반격과 확장 전략의 벽 사이에서 고전하고 있는 회사. 막상 캘리포니아 주민인 나는 가입이 안 된다고 함. 한국의 보험 사정과 미국의 보험 사정 특히 주택 보험 세상에서는 많은 차이들이 있어 다르게 접근해야 함.

  

### [eXplainable AI by Number Transition](https://drive.google.com/file/d/1miN9AEt47jXBTILZGj5G9gSEcGL6Xkk7/view) by 윤경화,이상엽

‘설명 가능’ 이 주는 모호함이 제품 관점에서 아주 어렵게 적용되는 사례. 우리가 이해해 보자는 접근과 (진상) 고객의 질문들에 답을 해 주어야 한다는 것에 큰 차이가 있는데, 마치 구글 네이버 검색의 랭킹 로직을 어차피 들어도 오해할 사람들에게 설명해야 하는 것인가에 대한 의문이 있었고, 이미 있는 문제들에 대해서는 CS 가 대응할 근거가 되는 정도의 선에서 타협이 있는 듯했다. 그래서 전체 e2e 를 돌려 놓고, 설명이 되는 몇몇 surrogated model 을 역으로 끼워 맞춰서 ‘많은 확률로 이럴 것입니다’ 라는 이야기를 풀어 적는 모습으로 진행되고 있다는 해석들.

  

### [AI 상용화에 따른 미래 비즈니스 및 직업의 변화](https://docs.google.com/presentation/d/1l5rCfkRu2s-IXIWKNVRtt3ej52uRGfwL/edit#slide=id.p1) by 강창호,홍성기

모든 직업을 대체까지는 모르겠지만, “prompt engineering 으로 ChatGPT를 잘 쓰는 MZ사원의 performance” 를 가지고 5시간 걸릴 일을 1시간으로 줄여 주는 사례를 시연해 주었다. 개인적으로는 sentiment analysis 보다 어렵지만, 실제 도움이 되는 일들이 있지 않을까 하는 생각이지만, 이 또한 prompt engineering 으로 녹여낼 수 있겠다는 답변에 충분히 설득이 되었었다. 이 가까운 미래의 것이 prompt engineering 일 지 RAG / RLHF 일 지 모르지만, 잘 쓰는 쪽에 기회가 더 생길 것은 명확해 보인다.

  

---

이후 수업들은 남은 발표들을 하는 것들이 남아 있어 이제 마무리의 단계로 가지 싶지만, 올해 AI 뉴스들은 그렇게 쉽게 내버려 두지 않을 거 같다.
