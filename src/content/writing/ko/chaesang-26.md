---
title: "인공지능과 추천 시스템 - 추천 시스템 강의 자료 모음"
date: 2024-01-09
lang: ko
summary: "인공지능과 추천 시스템 강의의 한 축은 고전 도서인 추천 시스템 입문 책을 같이 훑어 보면서 내용을 숙지하는 것이었다. 운명처럼 만나기도 했지만, 이른바 ‘교과서’에 해당하는 내용들이었고, requirement , evaluation 쪽에 중점을 두고 해석하려 하였다.  인공지능과 추천시스템을 반반씩 다루고 싶어 매 수업 분량을 1시간 안으로 만들고 싶었고"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/26
draft: true
---

인공지능과 추천 시스템 강의의 한 축은 고전 도서인 추천 시스템 입문 책을 같이 훑어 보면서 내용을 숙지하는 것이었다. 운명처럼 만나기도 했지만, 이른바 ‘교과서’에 해당하는 내용들이었고, requirement , evaluation 쪽에 중점을 두고 해석하려 하였다.

![https://m.hanbit.co.kr/store/books/book\_view.html?p\_code=B7471666713](/writing/chaesang-26/01.jpg)

*https://m.hanbit.co.kr/store/books/book\_view.html?p\_code=B7471666713*

  

인공지능과 추천시스템을 반반씩 다루고 싶어 매 수업 분량을 1시간 안으로 만들고 싶었고, iPython ( or notebook/colab )이 필요한 경우 run all 을 돌려 볼 수 있는 내용들을 같이 모아 놓았다. 원 저자가 만들어 놓은 일본어로 된 내용과 번역자가 만들어 놓은 내용도 GitHub에 각각 있어 따라가 볼 수 있다.

  

실습의 경우 MovieLens 의 일부만 가지고 해 보더라도 ML fit 함수 하나 돌리면 수 분이 지나가는 경우가 태반이라 수업 시간에 해 볼 수 있는 라이브 코딩에 한계도 있었지만, 학생들이 따라가며 해 보기에 난이도는 많이 낮아진 환경이라 하겠다.

  

  

아래는 강의 발표 자료들. 실습 예제의 경우 colab 링크도 걸려 있다.

  

1주) [1\. 추천 시스템](https://docs.google.com/presentation/d/1ir53pVrF9w-j_TyTHepwT2BhqQsAG064oad8dWZ44Dg/edit#slide=id.g1168ad8df56_0_7)  
2주) [2\. 추천 시스템 프로젝트](https://docs.google.com/presentation/d/1nRSWgMqTAWx5itnT65aclja09hxE-5P_imQTK5YpSWo/edit#slide=id.g1168ad8df56_0_7)  
3주) [3\. 추천 시스템의 UI/UX](https://docs.google.com/presentation/d/1XUGoyGa9q_nobF971c53tw_w91HwFWjj2-cpG0dAJtA/edit#slide=id.g1168ad8df56_0_7)  
4주) [4\. 추천 알고리즘 개요](https://docs.google.com/presentation/d/1r6jDs0f_l9RtIRBDgEnaN4cAff8RTLGokd5wfcAwIfU/edit#slide=id.g1168ad8df56_0_7)  
6주) [5\. 추천 알고리즘 상세 ( part 1 )](https://docs.google.com/presentation/d/1yklJHL5QpD8h4gW1KFbXm_3KKMepsvyV2rw0kgpUhkY/edit#slide=id.g1168ad8df56_0_7)  
7주) [5\. 추천 알고리즘 상세 ( part 2 ) , 7. 추천 시스템 평가](https://docs.google.com/presentation/d/1th9haDVf3NFt5rj9iCCGvNUKssJKt8dw1s1VnDsffQg/edit#slide=id.g28c58c5e1fe_0_0)  
8주) [5\. 추천 알고리즘 상세 ( part 3 )](https://docs.google.com/presentation/d/1VlCxJI-Kye_CTpqQdSe1ywjCa7eNBtalHPmdRCSkIN8/edit#slide=id.g1168ad8df56_0_7)  
9주) [5\. 추천 알고리즘 상세 ( part 4 )](https://docs.google.com/presentation/d/1S3RKiy9oUbz0cjlqaTWNmPFiF_-U8hOcW01WvF_104M/edit#slide=id.g1168ad8df56_0_7)  
14주) [5\. 추천 알고리즘 상세 ( part 5 ) , 6. 실제 시스템과의 조합 , 8. 발전적 주제](https://docs.google.com/presentation/d/1XRZS_osfRn1Ud69bVP7aWabtwip_-CNh8LrHkIXztOk/edit#slide=id.g2a02e92fd9f_0_44)

  

Ps. 10년 전 구글에서 공부하며 만났던 MovieLens가 너무 반가웠고, 강남 교보에서 이 책을 만난 순간의 감동은 신이 나를 이끄는 듯한 착각이 들기도 했었다. 참고로 이 책은 일본어가 원전으로 2022년 5월에 출간되었고, 한국어 번역은 2023년 5월에 되었고, 이는 내가 강의 제의를 받은 시기와 일치한다. 작년 syllabus를 훑어 본 다음 내가 교보를 둘러 보아야 겠다는 생각을 한 것은 6월 첫 주였으니 아주 따끈따끈한 책을 만난 셈인데, MovieLens는 20년전 내용들이고, 왜 이제서야 출판되었나 싶은 내용들이기도 하다.

  

  

  

  

  

  

  

[Kaist](https://medium.com/tag/kaist?source=post_page-----063dcaf24731---------------kaist-----------------)
