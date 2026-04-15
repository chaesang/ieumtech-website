---
title: "인공지능과 추천 시스템 강의 노트 - (4/16)"
date: 2024-01-09
lang: ko
summary: "들어가며 월말까지 기말 과제 주제들을 모으려 했기에 더 과제들이 모였다. 지금까지 절반 정도의 학생들이 과제를 제안하고 있고, 모두 피드백을 주고 있다. 보험 쪽 이야기들도 들어오기 시작했고, 비금융쪽 이야기들 중에 같이 하고 싶다고 해서 조율 중이다. AI 라는 이름으로 너무 많은 이야기들이 진행되고 있어서 사용자 문제를 잘 정의하는데 피드백들을 주고 있"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/14
draft: true
---

## 들어가며

월말까지 기말 과제 주제들을 모으려 했기에 더 과제들이 모였다. 지금까지 절반 정도의 학생들이 과제를 제안하고 있고, 모두 피드백을 주고 있다. 보험 쪽 이야기들도 들어오기 시작했고, 비금융쪽 이야기들 중에 같이 하고 싶다고 해서 조율 중이다. AI 라는 이름으로 너무 많은 이야기들이 진행되고 있어서 사용자 문제를 잘 정의하는데 피드백들을 주고 있다.

  

새벽 시간 3시-6시에 맞추는 건 여전히 난이도가 있었고, 앞뒤로 시간을 준비하는 건 조금 더 어려웠다. ZOOM 을 띄우고 share screen 할 때 sound output을 설정해 주었어야 했고, 조교들은 열심히 출석 체크를 하고 있었다.

  

## 준비한 자료들

### [4주차 강의 업데이트](https://docs.google.com/presentation/d/1WU76atJQmVNdLZ76jyE1_kDUBDlLTaWTaimA_wqEMgQ/edit#slide=id.g1168ad8df56_0_7)

![](/writing/chaesang-14/01.png)

  

공유하고 싶은 뉴스들이 있었다.

[Large Language Models as Optimizers](https://arxiv.org/pdf/2309.03409.pdf) by Google Deepmind

지난 한 주간 꽤 뜨거운 이슈였는데, ‘take a deep breath’ 가 도움을 준다는 게 오해의 여지가 있을 만도 하다.

  

[DALL·E 3](https://openai.com/dall-e-3) by OpenAI

참전 중인 OpenAI 의 이미지쪽 툴의 업그레이드. 그려진 그림을 이용하는 쪽에서 생성된 이미지의 품질에 대한 판단은 여전히 블랙박스의 영역이다. 기사에 나오는 사례들은 잘 된 경우의 것일테지만, 매번 같은 그림이 나올 것도 아니고, 사용자 입장에서 그리는 노력에서 고르는 노력으로 변경되어 가는 게 예상이 된다.

  

[‘Magical’ Listing Tool Harnesses the Power of AI to Make Selling on eBay Faster, Easier, and More Accurat](https://innovation.ebayinc.com/tech/features/magical-listing-tool-harnesses-the-power-of-ai-to-make-selling-on-ebay-faster-easier-and-more-accurate/)

개인적으로는 아주 만족스러운 사용의 예제라는 생각이다. 결과를 책임지는 seller의 검수를 받을 것이기에 contents creation 이 잘 어울리는 제품이라는 해석이다.

  

[음악 저작권 쪼개 주식처럼 매매… “50조원 시장”](https://www.chosun.com/economy/tech_it/2023/09/21/HQ3W23G5VBC7JPUFG3MOFPEIDM/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news)

개인적으로 web3 와 NFT 에 대해서는 아주 부정적인 시각을 가지고 있지만, 투자 상품으로서 조각투자의 영역이 어떻게 되고 있는가는 관심이 많다. 미국에서 주식은 Robinhood를 비롯해서 이미 조각투자의 상품이고, 뮤직카우를 지하철 광고판에서 꽤 보아 왔었는데, 요즘에 어떤가 해서 봤더니 법적인 이슈로 suspended 상태였다.

  

### [4주차 추천 시스템 — 4. 추천 알고리즘 개요](https://medium.com/p/c0c65893e468/edit)

![0\*im1E1FSF8SWASZlW](/writing/chaesang-14/02.jpg) https://en.wikipedia.org/wiki/Collaborative\_filtering

Wikipedia에 꽤 정리가 잘 되어 있고, 인터넷에 돌아다니는 거의 모든 자료들이 비슷하게 잘 정리되어 있었다. neighborhood-based 는 memory-based 라고 사용하는 문건들도 있었고, 교재에는 없었지만, collaborative filtering 은 user-based 와 item-based 로 나누어 고려할 수 있는데, 아래 좋은 그림을 발견할 수 있었다.

![0\*LiMqSx4Bv0QHZV\_Y](/writing/chaesang-14/03.jpg) https://medium.com/@cfpinela

결국에는 제품 별로 잘 섞어 써야 한다는 이야기이고, 아래와 같은 요약이다.  

![이론적인 추천 알고리즘에 대한 요약표](/writing/chaesang-14/04.png)

*이론적인 추천 알고리즘에 대한 요약표*

### building AI for Everyone | Jeff Dean Senior Fellow in Google AI

2018년에 Jeff Dean이 한국에 와서 했던 16분짜리 세바시 강연. TPU 를 가지고 Tensorflow를 release한 시기의 발표. 중간에 보이는 구글 렌즈 이야기는 할 수 있는 이야기도, 하고 싶은 이야기도 여전히 많은 과제/제품이다.

  

### [4주) AI 강의 — 3강 — 열려버린 판도라의 상자](https://docs.google.com/presentation/d/1Ti68CSTJZEsYOzy1D0rFuHcTWFsb7RKiI6rfWU-WZyY/edit#slide=id.g1168ad8df56_0_7)

ChatGPT 발표 이후 2023년 초에 있었던 숨가빴던 커다란 사건들에 대한 정리들과 석학들의 의견들이 모여져 있는 내용들을 같이 공유했다. 구글과 관련이 있는 내용들에 대해서는 개인적으로는 조금 다른 견해들이 있어 그것대로 언급을 하였다. 사례들이 조금씩 다르지만, 여러 의미에서 메시지들이 겹치는 것 같다는 생각을 이제 하게 된다.

  

## 마무리 하며

이번에도 질문을 수월하게 받지 못하는 상황이었지만, 2시간 40분 정도 채웠고, 나누고 싶었던 내용들은 다 나누긴 했다는 생각이다. 다만 역시 왠지 일방적이었던 거 같아서 아쉬움이 남는다.

  

다음 주는 추석 연휴로 한 주 쉬고, 그 다음 주에 5번째 강의는 한국에서 대면으로 하게 되는데, 금요일 새벽에 공항에 도착하게 될 것이라 체력 안배와 자료 안배가 필요하겠다.

  

인공지능 강의 책은 남은 부분이 정책에 대한 이야기들이어서 모아서 마무리할 생각이다. 그 뒤에 같이 나눌 인공지능 관련한 책이 필요할 듯한데, 이전에 배운 내용들은 CNN/RNN 시절의 이야기들인데, 관심사들은 ChatGPT 이후로 쏠려 있고, 이것과 관련된 자료들은 같이 보고 읽을만한 것들이 애매해 져서 조사를 좀 더 해야 할 거 같다.

학생들의 기말 발표를 시작한다. 발표될 내용들로 강의가 풍성해 질 거 같아서 기대가 크다. 첫 주에는 하나의 주제만 signup 이 되어 있는데, DAN ( Do anything now ) 사례 연구들로 시작하게 되어 재미있는 시간이 될 거 같다.

추천 시스템 쪽은 라이브코딩을 아무래도 해야 할 거 같다. 이론적인 이야기들은 한바퀴 훑은 셈이기도 하고, clone coding 처럼 되더라도 MovieLens는 재미나게 해 보았던 실습 예제인데… 학생들에게 어떻게 다가갈 지 살짝 걱정이 되긴 한데, 요즘에 colab / notebook 들이 잘 되어 있으니 안 해 본 학생들한테 도움이 되면 좋겠다.

같이 볼만한 15분 정도 강연을 찾고 있는데, 눈에 들어오는 것들이 30분 이상의 것들이라 다음 것들을 정하는 데 애를 조금 먹고 있다.

  

그밖에 주중에 한 학생으로부터 생성형 AI 대폭발 이후에 NAND flash의 미래에 어떤 일들이 벌어질까에 대한 질문이 있었고, 개인적인 해석/예측은 1) 모바일은 그대로겠지만, datacenter 쪽 training 은 더 많이 벌어질 거고, 2) inference 가 늘겠지만, 그보다 훨씬 더 training 쪽 일이 벌어질 거고, 3) multi-cloud , hybrid cloud 등이 수요가 늘겠지만, 여전히 edge 는 억지스러운 수요로 예상.. 등의 답변을 보냈다.
