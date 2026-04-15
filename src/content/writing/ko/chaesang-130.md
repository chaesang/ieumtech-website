---
title: "인공지능과 추천 시스템 강의 노트 - (10/16)"
date: 2025-11-17
lang: ko
summary: "들어가며  새벽에 인천공항에 도착해서 긴 하루를 보내는 일정이었는데, daylight saving이 끝나고 바람 때문에 조금 늦게 도착해서 아침 6시 넘어 공항에 도착했다. 숙소를 3시간 넘게 다녀 올 시간이 여의치 않고 여의도가 그에 비해 한편으로 공항에서 가까워서 바로 강의장으로 와서 하루를 시작했다. 갑자기 쌀쌀해 진 날씨에, 미국보다 일찍 시작하는"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-25"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/130
draft: true
---

## **들어가며**

  

새벽에 인천공항에 도착해서 긴 하루를 보내는 일정이었는데, daylight saving이 끝나고 바람 때문에 조금 늦게 도착해서 아침 6시 넘어 공항에 도착했다. 숙소를 3시간 넘게 다녀 올 시간이 여의치 않고 여의도가 그에 비해 한편으로 공항에서 가까워서 바로 강의장으로 와서 하루를 시작했다. 갑자기 쌀쌀해 진 날씨에, 미국보다 일찍 시작하는 연말 장식 설치, 거기에 학생들 졸업 촬영까지 여러 모로 다르고 좋은 의미로 어수선하게 바쁜 도시의 주말 아침이다.

![IMG\_2831.jpg](/writing/chaesang-130/01.jpg)

![week10-2.jpg](/writing/chaesang-130/02.jpg)

![IMG\_2834.jpg](/writing/chaesang-130/03.jpg)

  

## **준비한 내용들**

  

[**10주) 강의 update**](https://docs.google.com/presentation/d/1aNU_1WuexPCYxwxVJ51DIg13fpxLMdrLI6kSrV4Qogc/edit?slide=id.g1168ad8df56_0_7#slide=id.g1168ad8df56_0_7)

[**추천시스템 - 5장 - 추천 알고리즘 상세 ( part 3 )**](https://docs.google.com/presentation/d/1TMeL_k95ssiLgxvV7c2CcgLrxgGycVPuFAtw64bfpvM/edit?slide=id.g1168ad8df56_0_7#slide=id.g1168ad8df56_0_7)

[**Lessons from Google Search - part 1.pptx**](https://docs.google.com/presentation/d/1VdZfW30MmsWgof_uN2G7_GE-0aNos8kn/edit?slide=id.p1#slide=id.p1)

![week10-3.png](/writing/chaesang-130/04.png)

  

인공 지능 파트에는 [stateof.ai](http://stateof.ai/) 의 research 부분을 같이 읽었다. 거의 모든 연구들이 어떻게 reasoning 을 해 내고 있는지에 대한 이야기들이었고, 테스트 방법들이 오염되는 것들과 지식 증류의 방법으로 해자들이 없어지는 것들에 대한 내용들이 눈에 띄었다. 아직 언어 모델 이외의 연구 결과들에 대해서는 Alphafold 이후 획기적인 것들이 결과물로 보이지는 않고 있지만, Physical AI 같은 키워드들은 산업 현장에서 오히려 먼저 반영되지 싶다.

  

![week10-2.png](/writing/chaesang-130/05.png)

  

추천 시스템 파트에서는 연관 규칙, 사용자-사용자 메모리 기반 협조 필터링, 회귀 모델 부분을 같이 다루었다. 추천이라는 주어진 문제를 회귀 모델로 변환해서 접근한 방법들이었는데, 사용자들의 평점만을 가지고 모델을 만들어 접근하는 것이라 한계도 있지만, 한 번은 시도해 봄직한 방법이라 하겠다. Regression 이라 정의되는 순간 오차로부터 자유롭기 힘들고, 사람의 감정을 숫자로 예측한다는 것에 대한 챌린지가 있다 하겠다.

  

서비스 특강 파트에서는 구글 검색 이야기를 오프라인으로 하는 이번 시간과 다음 시간에 깊이 다루기로 하였다. 조금 오래 된 기억과 기록이지만 ‘해 봐서 아는’ 이야기에 해당하겠고, 만만하게 보이기도 혹은 반대로 어렵게만 보이기도 한 검색에 대한 이야기들과 고민 거리들을 같이 나눌 수 있으면 하였다. 사용자의 행동을 읽고 모으는 방법으로 이벤트 로그, 세션 이야기들을 다루었고, 이들을 이용한 품질을 높게 만들게 하기 위한 온라인/오프라인 방법들에 대해 정리를 했다.

  

## **맺으며**


중간 과제로 모으는 리포트들은 생각보다는 자유 형식이지만, 분석 위주의 내용들을 모으게 되었고, 나역시 다양한 주제들에 배우는 것들이 있어 감사한 마음이다. 중간 과제들은 댓글로 comment 들을 공유할 수 있으면 하는 바램으로 구글 독스나 공개적인 노션의 형태로 해 보고 있는데… 기술적인 숙제를 얼른 끝내 놓아야 겠다 싶고, 다음 주에 검색 부분이 끝나면 원격 수업 1회를 포함해서 특강 부분의 내용들을 다시 준비해야 하는데, 생각보다 할 일이 많은 11, 12월이 되겠다 싶다.
