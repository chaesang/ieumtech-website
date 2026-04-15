---
title: "한국 IT 용어 이야기 (2) - \"정합성\""
date: 2024-01-08
lang: ko
summary: "두번째로 챌린징했던 단어는 '정합성'이다. PM / design 쪽에서 이야기는 많이 듣지 못했지만, data 직군과 DBA , DevOps 들과 이야기할 때 종종 나왔던 단어이다. 일단 네이버 사전에서 정합성은 무슨 말인지 못 알아들을 정도의 설명인데, 단지 뒤에 '체크'라는 말이 붙으면서 조금 알아들을 수 있는 용어로 바뀌게 된다.  30년 전에 데이터"
tags: ["it-term", "language"]
series: "itterm"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/3
draft: false
---

두번째로 챌린징했던 단어는 '정합성'이다. PM / design 쪽에서 이야기는 많이 듣지 못했지만, data 직군과 DBA , DevOps 들과 이야기할 때 종종 나왔던 단어이다.

일단 네이버 사전에서 정합성은 무슨 말인지 못 알아들을 정도의 설명인데, 단지 뒤에 '체크'라는 말이 붙으면서 조금 알아들을 수 있는 용어로 바뀌게 된다.

![1698620722789?e=1710374400&v=beta&t=ROrhUjhLKjElZOBIsT7O-3X16IfpZzsU9cN7bPiSyb4](/writing/chaesang-3/01.jpg) 네이버 사전 결과 '정합성'

  

30년 전에 데이터베이스 과목을 수강한 후에 실무 일머리들은 영어로 다시 다 배웠기에 여러 가지 용어들을 두리뭉실하게 써 왔는데, 여기서 잠깐 ChatGPT 와 bard 의 이야기 먼저...  

![1698621142470?e=1710374400&v=beta&t=jzxBHzXRWvidHDnoWxpu9LLvsbaJkglHG4rmv2tIROM](/writing/chaesang-3/02.jpg) ChatGPT 의 결과 - "데이터 정합성을 영어로"

![1698621170498?e=1710374400&v=beta&t=Aye8YjzwbaSXaRIbBzmN6Q7vDnXm5HV\_r8VNIFuT9rI](/writing/chaesang-3/03.jpg) bard 의 결과 - "데이터 정합성을 영어로"

  

일단 책에서 배운 개념으로 data consistency 와 data integrity 가 꼬이기 시작했고, 한글로 적당한 '데이터 무결성'이 생각이 났다. 이를 비교하려 다시 물어 보니 이제 bard 랑 chatGPT 가 비슷한 말을 하게 되는 거 같았다.  

  

![1698621763188?e=1710374400&v=beta&t=9R3GSTTMjyi2IYkrYea1lUqRskCDmGMXFBywZwDpA1Q](/writing/chaesang-3/04.jpg) ChatGPT - 데이터 무결성과 데이터 정합성 비교

![1698621779501?e=1710374400&v=beta&t=bBdEx60pWwFFmDoq3IfJBoVONYMOPCKiZgOUIDv9Z2c](/writing/chaesang-3/05.jpg) bard - 데이터 무결성과 데이터 정합성 비교

  

아래는 배웠던 대로 이해하고 동작하는 (쉬운) 예제들.  

database migration 작업을 하는데, 새로 생성된 테이블의 entry 개수가 이전 table 의 개수와 다르다.. --> 두 테이블의 정합성이 맞지 않아 AWS DMS 를 다시 시도한다든지...

database , table 안에 끊어진 reference 들이 있고, deprecated 된 table 때문에 의미 없는 필드들이 더 생기게 되었다. --> data 무결성이 깨지는 상황으로 batch 잡을 돌려서 null 로 채우자..

  

조금 난이도가 있는 사례로는

소스로 삼는 raw table 이 여러 곳에서 동시에 사용되는 derived table 을 만들게 되는데, 같은 날 생성된 다른 두 테이블의 같아야 할 값이 다르더라. --> 두 테이블 사이에 필드들이 정합성이 다르다. freezing 되어 있는 테이블을 써라..

  

그런데, 위의 bard 의 번역처럼 다양한 의미를 두리뭉실하게 '정합성'이라는 말에 기대어 쓰는 경우들이 종종 있었다. 뭔가 딱히 깊이 설명하고 싶지 않지만, 보이는 데이터를 바로 쓰기 찜찜할 때 '정합성' 이 거론되었고, 사실 이 단어 뒤에 들어오게 될 동사를 고르는 것도 꽤 어려운 일이다. '맞지 않다' , '깨져 있다', '좋다 or 나쁘다'. '완벽하다', '쓸만하다?'

  

가장 어려웠던 사례로는

Google Analytics 가 주는 MAU, Firebase 가 주는 MAU , Amplitude 가 주는 MAU 가 다른데, 데이터 정합성이 의심되니 쓰던 걸 쓰도록 하겠다. or vice versa

실험을 돌려 지표가 나왔는데, 정합성에 이슈가 있어서 다시 하기로 했다.

  

이 '정합성'이라는 말은 '무결성'에 비해 조금 과하게 넓게 쓰이고 있는 게 아닐까 하는 생각이었고, 이 일본식 한자들은 딱히 정이 가지 않기도 해서 어느 새 지나 보니 시간 될 때마다 영어 표기를 권하는 꼰대가 되어 있었다.
