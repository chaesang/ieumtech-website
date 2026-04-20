---
title: "인공지능과 추천 시스템 강의 노트 - (6/16)"
date: 2024-10-13
lang: ko
summary: "들어가며 노벨상으로 주변이 시끌벅적한 가운데, 가을의 여의도는 이제 단풍도 보이기 시작하고, 이맘때만 느낄 수 있는 아름다움이 시작된 듯하다. 지난 주의 건담과 뉴진스에 이어 오늘은 열기구가 보였다.  분당에서 여의도를 가는 길에 AI 강의 2025 책을 구입하러 책과 얽힘 에 들러 아래 이벤트를 참석해서 사인도 받았고, 브로마이드도 구할 수 있었다. 그리"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-24"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/83
draft: false
---

## **들어가며**

노벨상으로 주변이 시끌벅적한 가운데, 가을의 여의도는 이제 단풍도 보이기 시작하고, 이맘때만 느낄 수 있는 아름다움이 시작된 듯하다. 지난 주의 건담과 뉴진스에 이어 오늘은 열기구가 보였다.

![](/writing/chaesang-83/01.jpg)

![](/writing/chaesang-83/02.jpg)

![](/writing/chaesang-83/03.jpg)

  

분당에서 여의도를 가는 길에 AI 강의 2025 책을 구입하러 [책과 얽힘](https://www.google.com/search?q=%EC%B1%85%EA%B3%BC+%EC%96%BD%ED%9E%98&rlz=1C5CHFA_enUS1097US1097&oq=%EC%B1%85%EA%B3%BC+%EC%96%BD%ED%9E%98&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg90gEIMjQ5M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8) 에 들러 아래 이벤트를 참석해서 사인도 받았고, 브로마이드도 구할 수 있었다. 그리고 이는 오늘 퀴즈를 맞춘 학생에게 선물로 책과 함께 주었다.

[https://www.facebook.com/events/1614464549496226/?ref=newsfeed](https://www.facebook.com/events/1614464549496226/?ref=newsfeed)

[**박태웅의 AI 강의 2025 싸인회**

금요일, 10월 11 2024 서울에서 열리는 책과얽힘 주최 이벤트

https://www.facebook.com/events/%EC%B1%85%EA%B3%BC%EC%96%BD%ED%9E%98/%EB%B0%95%ED%83%9C%EC%9B%85%EC%9D%98-ai-%EA%B0%95%EC%9D%98-2025-%EC%8B%B8%EC%9D%B8%ED%9A%8C/1614464549496226/](https://www.facebook.com/events/1614464549496226/?ref=newsfeed) 

  

기말 과제는 아직 절반 정도만 셋팅이 되었다. 몇몇 메일들에 대해서는 주제를 명확하게 해 달라는 피드백을 주기도 하고, 논문 정리의 경우 미리 같이 훑어 보며 궁금한 점들을 미리 이야기하기도 하는데, 조금 더 이야기들을 들을 수 있으면 하는 바램이다. 그리고, 간담회를 8주 차에 운영하기로 허락을 받았고, 한두시간 이야기를 자유로이 나누기로 했는데, 이 때에도 다양한 이야기를 들을 수 있으면 하는 바램이다.

  

한 주간 서울의 가을 날씨를 제대로 대비하지 못해 감기를 꽤 앓았었는데, 수업 시간에 쉬어가는 목소리로 이야기를 하게 되어 학생들에게 미안하게 되었다...

  

## **준비한 내용들**  

[**6주) 강의 update**](https://docs.google.com/presentation/d/1Pg3dH6N3lH1TAbReve9VHWlgxhSoIShM4qasYoEmldc/edit#slide=id.g1168ad8df56_0_7)  

![](/writing/chaesang-83/04.png)

현재까지 노벨상 수상한 모든 사람이 내가 아는 사람이 되는 신기한 상황에 그 중 절반은 근무 기간이 겹치는 전 직장 동료라는 게 여전히 믿기지는 않는다. 저 상의 무게, 업적의 깊이, 살아온 이력 등이 어땠을까 가늠이 가지 않으면서도 여러 가지 생각이 들게 되는 한 주였다.

  

아울러 stateof ai 2024 년 내용이 release 되었다. ( [https://www.stateof.ai/](https://www.stateof.ai/) ) 이후 수업에서 몇 번 다룰 내용들이라 여러 번 인용이 되겠지만, 작년의 예측들에 대해서는 일단 아래의 내용으로. 참고로 AI 가 만든 음악이 메이저에 올라올 거라는 9번째 예언의 해석에 대해서는 개인적으로 동의가 되진 않는다.

  

![AGV\_vUem3uORlZlYFtBnkgudYjsfDW05ZKdXCUSh3Y6bHt8J1uw9XgFa1s-symUO0P8mUs3EFLwUrFvEEnZvnf2GD4CPEMwFesf3ScMktuzYwxKN4Zz00wGJfmXauOWxT-GWGipkiXp1Q7-zNTeoWgg8WiGXW9424QY=s2048?key=jZAgWc8Yj5NucqHWRGntwg](/writing/chaesang-83/05.jpg)

  

[**추천시스템 - 7. 평가**](https://docs.google.com/presentation/d/1U8Wq7ejiTMccARM40DohaY2JGyaFgNpXgIMM1nDrTI0/edit#slide=id.g28c58c5e1fe_0_0)

[**추천시스템 - 5**](https://docs.google.com/presentation/d/1WjQ-bCoXlU-a6Qc2OVeh-nljATcBhEeIurg5x-KqQ_E/edit#slide=id.g288bc70036d_0_67)

[**Google(Playstore)에서 과제 런칭하기.pptx**](https://docs.google.com/presentation/d/192onxLdFMWlOmFoDE3BilMku84iG0sNs/edit#slide=id.p1)

  

## **추천 시스템**

순서 상으로는 5. 알고리즘이 먼저이지만, 이는 책 절반을 할애하게 되고, 7. 평가 부분은 이론적으로 먼저 훑고 가야 할 내용이라 이야기를 꽤 해야 했다. 아래는 대략적인 설명. 결국 셋 다 해야 한다는 이야기..

![](/writing/chaesang-83/06.png)

교재는 무비렌즈 데이터들을 가지고 해 보는 것으로 이 중 오프라인 평가에 해당하고, 안에서도 아이템을 예측한 후에 판단을 어떻게 내릴 것인지에 따라 f2 score 혹은 RMSE 비교 등으로 여러 이야기를 하게 될 것이다.

  

그리고, 추천 시스템 알고리즘 맨 앞 부분은 랜덤과 popular. 개인화든 아니든 어떤 로직이든 싸워서 우열을 가려야 하는 상대가 있다면 이 둘인데, 이들에 대해 코드로 EDA 하는 부분이 포함되어 있다.

  

이후 조금 복잡한 알고리즘의 경우는 각각 별도의 시간을 가지고 하나씩 해야 할 거 같은데, 수업 시간에 하나씩 30분씩 해서 진행해 보려 한다. 아무래도 노트북 코드를 가지고 훑는 모습이라 한계가 있을 거 같기도 한데, 지표들이 공감과 설명이 잘 되면 하는 바램이다.

  

## **구글 플레이스토어 - part 1**

이 발표 자료는 작년 강의 이후 조금 정리해서 구글 플레이스토어 한국 현지화 과제를 2년간 책임자로 있으면서 다루었던 내용들이 정리된 내용들로, 이제 거의 10년이 다 되어가는 기억과 기록들이지만, 두어번 시간에 나누어서 나누고 싶었던 내용이다. 실제 B2C 제품 팀을 운영하는 분들에게 해 줄 수 있는 이야기들이기에 최대한 감정 이입을 부탁하기는 했다.

  

오늘은 첫 시간으로 내용들 중에서 개요와 당시의 제품이 지니고 있던 챌린지들, 그리고 평가들을 하기 위한지표들에 대한 이야기들을 나누었다. 쇼핑몰의 성격과 닮아 있지만, 1인당 1개의 구매 제한, preinstall 등의 사연들이 있는 제품에서 여러 이야기들을 나누기 위해 지표 이야기까지는 같이 다루고 싶었다.

![](/writing/chaesang-83/07.png)

  

아래는 학생들에게 낸 오늘의 퀴즈.

  

Q) 당시 구글 플레이스토어에서는 Good Acquisition 을 정의했는데, 인스톨 후 Y일 이내에 X번 실행을 한 경우 이를 True 로 놓았었다. X 와 Y 를 구하시오.

힌트 : Y 는 7의 배수

  

## **Q&A**

**Q. 모델 밸리데이션 시 Train:Valid:Test 비율을 8:1:1을 사용하는 경우와 6:2:2로 나누는 경우는 어떤 차이가 있나요? 예를들어 8:1:1이 6:2:2 보다 과적합 문제가 더 커지는 건 아닌가요?**

  

A. 일반적으로 그 이슈가 맞습니다. 일반론적으로 많은 경우 training 수가 적으면 학습이 덜 되고, 과하게 많으면 overfitting 이슈가 생깁니다. 대개 training 이 안 되는 문제가 먼저 오게 되고, overfitting 이 뒤에 오는데요. Overfitting 의 경우 전체 데이터 수를 늘리면서 많이들 해결합니다. 20%를 테스트로 놓는 경우는 대개 샘플 수가 적을 때 많이들 그리 합니다.

  

**Q. 질문은 강력한 시그널이라는 말씀을 들으니 십여년 쯤 전 구글 직원분의 세미나가 생각납니다. 그분도 질문은 거짓말을 하지 않는다고 말씀하시면서 자신은 질문 쿼리 데이터를 바탕으로 투자시스템을 만들 계획이라는 이야기를 했었습니다. 구글이나 다른 기업들이 질문 데이터를 활용하는 방법들을 소개해주시면 감사하겠습니다.**

  

A. 정확하게는 질문 후의 반응의 행동까지가 한 셋트입니다. 질문이 연속될 경우 그것도 강한 연관 시그널이겠구요. 특히 통계로 접근할 때 쿼리창에 나오는 suggest 쿼리들은 통계적으로 안 쓸 이유가 없는 훌륭한 소스지요. 많은 경우 통계 혹은 로직이 random 과의 싸움이라 했을 때 같은 쿼리를 다른 사용짜가 우연히 같이 넣는다고 하면 아주 큰 일이 벌어지고 있는 것입니다. 네이버 검색도 마찬가지고 각종 쇼핑몰도 마찬가지이겠습니다. 구글 플레이스토어만 하더라도 모든 쿼리에 대해 거대한 표를 만들어 놓는다 치면 어떤 쿼리가 와도 정답을 줄 수 있겠습니다. 시스템 복잡도 이런 건 대개 뒤에 고민해도 늦지 않습니다. :)
