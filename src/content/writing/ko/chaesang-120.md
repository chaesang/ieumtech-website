---
title: "인공지능과 추천 시스템 강의 노트 - (2/16)"
date: 2025-10-02
lang: ko
summary: "들어가며  타이트해진 출석 체크와 작년 대비 추가된 중간과제와 기말과제 조건들 덕인지 꽤 많은 학생들이 다른 선택들을 하였고, 인원은 58명으로 정해졌다. 이제 조금 기대치가 조절되고 있는 셈이니 내년에도 이 과목을 내가 하고 있을 지는 모르지만, 학과를 위해서는 강의 평가도 좋은 점수가 나와야 할텐데 하는 걱정도 적지 않게 든다.  공개된 데이터를 가지고"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-25"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/120
draft: false
---

## **들어가며**

  

타이트해진 출석 체크와 작년 대비 추가된 중간과제와 기말과제 조건들 덕인지 꽤 많은 학생들이 다른 선택들을 하였고, 인원은 58명으로 정해졌다. 이제 조금 기대치가 조절되고 있는 셈이니 내년에도 이 과목을 내가 하고 있을 지는 모르지만, 학과를 위해서는 강의 평가도 좋은 점수가 나와야 할텐데 하는 걱정도 적지 않게 든다.

  

공개된 데이터를 가지고, EDA 를 자유 형식으로 하라는 중간 과제가 서로 낯설어서 질문들이 많다. Kaggle , Dacon 등에서 보이는 ‘내가 봐도 문제 없는 데이터’를 가지고 직장 상사에게 보고하는 형태의 보고서를 쓴다는 생각으로 과제를 정의하고 있다. 데이터의 형식, 문제 정의 등에 대해 피드백을 주고 받을 생각으로, 각자 도메인에서 의미있는 해석들이 있으리라 기대가 된다.

  

![구름이 잔뜩 낀, 하지만 매력적인 서울 하늘](/writing/chaesang-120/01.jpg)

*구름이 잔뜩 낀, 하지만 매력적인 서울 하늘*

  

## **준비한 내용들**

  

[2주) 강의 update](https://docs.google.com/presentation/d/1iLQQxM7Tivqy-ZFKihUC05VyB2G-0unn5IUt3Xyv6Vs/edit?slide=id.g1168ad8df56_0_7#slide=id.g1168ad8df56_0_7)

[AI 강의 - 1강](https://docs.google.com/presentation/d/1pGeQaN55iCAWYp_EDyKbXuOZJv-FSNRSLNq7bNLS7NI/edit?slide=id.g1168ad8df56_0_7#slide=id.g1168ad8df56_0_7)

[추천시스템 - 1](https://docs.google.com/presentation/d/1RrzZV4qmQZO_FjTiV-gLzzBfrlGyKuiYSOetE53zA1A/edit?slide=id.g1168ad8df56_0_7#slide=id.g1168ad8df56_0_7)

[Google(Playstore)에서 과제 런칭하기 - 1](https://docs.google.com/presentation/d/1hzOfHpptydhQ-ikLRLuJaZ0dw7Rk6xT2/edit?slide=id.p1#slide=id.p1)

  

![](/writing/chaesang-120/02.png)

이번 주에 있었던 일들로는 굵직굵직한 OpenAI 의 한국 행보와 구글 검색의 AI 모드 전면 배치 등이 있었다. 사상 최고를 경신하고 있는 코스피 자체도 관심 있게 챙겨야 하겠다.

  

## **나눈 이야기들**

  

약간의 역사적인 이야기가 들어 있는 인공지능 이야기와 추천 시스템의 입문에 대해 다루었다. 추천 시스템이라는 단어들도 오해가 많은 영역이라, 이 강의에서는 완성된 사용자 위주의 제품의 시각에서 접근과 그걸 가능하게 하는 방법론에 대해 이야기를 많이 하게 된다. 다음 시간부터는 각 내용들에 대해 요즘 시각에서 익숙한 이야기들을 담게 되겠다.

  

유사 쇼핑몰의 개념으로 구글 플레이스토어 이야기를, 완제품의 시각에서 구글 검색 이야기를 내부자의 관점에서 많이 하게 될 것이라 ice-breaking 으로 구글 플레이스토어 이야기를 꽤 일찍부터 시간을 많이 할애하기로 했다. 지표들에 대해서까지 대략적으로 이야기를 하였는데, 아무래도 바깥에서 이야기하기에 한계들이 있는 영역이라 여러 번 감정 이입을 해 가며 정리를 해야 하겠다.

  

ps.

인프런에 올라가 있는 유료 강의들을 원하는 학생들에게는 무료로 제공하자 싶어 본의 아니게 인프런 광고를 조금 하게 되었다. 도움이 필요한 분들께 조금이라도 도움이 되면 하는 바램이다.
