---
title: "홍길동 / 김뱅샐 / John Doe"
date: 2024-06-08
lang: ko
summary: "일터에서 만난 홍길동  한국인은 아주 오래전부터 홍길동을 알고 있고, 동사무소 등의 곳에서 꽤 오랫동안 예제의 이름으로 보아 왔다. Valid 한 이름이고, '홍'씨가 꽤 많으니, 실명으로 쓰고 계시는 분이 있을 수 있겠으나, 예제로 아주 자연스레 써 왔음이리라. 관공서에 왜 그리 많이 씌여 있었을까에 대해서는 아래 알쓸신잡에서 설명을 잘 해 주셨다. 모두"
tags: ["organization", "leadership"]
series: "do-well-company"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/64
draft: false
---

## **일터에서 만난 홍길동**


한국인은 아주 오래전부터 홍길동을 알고 있고, 동사무소 등의 곳에서 꽤 오랫동안 예제의 이름으로 보아 왔다. Valid 한 이름이고, '홍'씨가 꽤 많으니, 실명으로 쓰고 계시는 분이 있을 수 있겠으나, 예제로 아주 자연스레 써 왔음이리라. 관공서에 왜 그리 많이 씌여 있었을까에 대해서는 아래 알쓸신잡에서 설명을 잘 해 주셨다. 모두에게 사랑받는 이름, 누구에게도 폐를 끼치지 않는 이름..

  

[https://www.youtube.com/watch?v=EJt9MXSU\_Ew](https://www.youtube.com/watch?v=EJt9MXSU_Ew)

  

이후 데이터베이스를 만지게 되고, 회사에서 여러 일을 하게 되면서 한국인의 '테스트 계정'으로 자연스럽게 홍길동을 쓰게 된다. 개발계 혹은 staging 환경에서 쓰고, 임의의 유의미한 생년월일, 주소, 123-456-7890 등의 아무 전화 번호 등을 가지고 사용해 왔었고, 지금은 조금 더 광범위한 common library 가 있지만, 다양한 케이스들을 불과 몇 년 전까지만해도 만들어 쓰곤 했었다. Open source 와 in-house library 에 대한 사연들에 대해서는 다른 토픽에서 다루도록 하자.

  

여러 명의 테스트 데이터가 필요할 경우들이 생긴다. 이 경우 홍길동 하나로 부족하고, 남녀 다른 페르소나를 관리해야 할 경우, attribute 는 정해 놓고 시작하는데, 사람 이름 정하는 데서 많은 애로사항이 생기게 된다. 창작의 고통이랄까... 한글의 경우 사람의 이름이 글자 수의 제약 등이 걸려 있기도 해서 막 지을 수는 없었고, 테스트 코드 상에서는 각종 유명 걸그룹 멤버들이 소환되었다. 어중간하게 유명해서 '누구라고?' 라고 되는 순간 productivity 가 떨어지는 문제가 생기기도 했고, 적어도 팀원들끼리 같이 좋아하는 아이돌 그룹이면 꽤 수월했던 기억이다. 물론 다른 팀 혹은 다른 회사들과 주고 받을 때 canonical 은 다시 홍길동으로 회귀하는 건 어쩔 수 없다 하겠다.

  

## **김뱅샐**

  

오래 미국 생활을 하다 다시 한국으로 복귀해서 2021년부터 거의 2년간 [뱅크샐러드](https://www.banksalad.com/) 에서 기억들이 여럿 있는데, 그 중 꽤 감명을 받은 게 홍길동 대신 쓰이고 있는 '김뱅샐'이었다. 돌아 보면 이런 걸로 감명을 받다니 싶긴 한데, 창작의 고통 부분을 꽤 덜어 주었고, 자연스레 이뱅샐, 박뱅샐 등의 이름들로 확장되었는데, 의외로 입에 잘 달라붙는 경험들이었다.

  

꽤 직관적이어서 오래전부터 기술 블로그에 신입 개발자로 등장하기도 하고 ([뱅크샐러드의 특별한 스펙, '테크 스펙](https://blog.banksalad.com/tech/we-work-by-tech-spec/) ) , 머니 피드에 사연자로 등장하기도 한다 ([전세사기 피해 세입자 우선매수권 간단 정리](https://www.banksalad.com/articles/%EC%A0%84%EC%84%B8%EC%82%AC%EA%B8%B0-%ED%94%BC%ED%95%B4-%EC%84%B8%EC%9E%85%EC%9E%90-%EC%9A%B0%EC%84%A0%EB%A7%A4%EC%88%98%EA%B6%8C-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC)). 개발자의 삶 중에서 뭔가의 이름을 지어 내어야 하는 고통이 꽤 큰데, 홍길동에 준하는 자산이 있다는 건 회사를 운영함에 있어 꽤 칭찬할 부분이라는 생각이다. 다른 회사들에서 막 지어 보자면, 김구글, 이삼성, 박엘지, 정카카오, 다들 여러 의미로 어색하다.

  

## **John Doe / Jane Doe**

  

구글에서 검색 일을 오래동안 했었지만, 왜인지 이 문제를 직접 당하지는 않았던 거 같다. 테스트 account 가 이미 16진수 hash 값에서 시작하는 거고 개개인을 다루는 과제가 아니어서 그랬을 수도 있고, 여러 복잡한 규정들로 실제 구글 계정을 직접 쓰거나, 외부의 gmail 계정 중에서 내가 등록한 것만 내가 볼 수 있는 등 강한 규제들 속에서 굳이 '홍길동'의 필요를 본 적이 없었더랬는데, 2017년 즈음에 Nest store 과제를 하면서 관련된 경험들을 하게 되었다. 이른바 쇼핑몰이고, 다른 업체들과 protocol 을 주고 받는 상황에서 이른바 '업계의 표준' 사례들로 이 이름들을 접하게 되었다.

  

글자 제한이 덜 한 미국, 영어권에서는 이 홍길동의 위치를 [John Doe, Jane Doe](https://en.wikipedia.org/wiki/John_Doe) 가 쓰이고 있었고, Baby Doe 까지가 일단 한 셋트였었다. 알고 보니 꽤 미국의 여러 교과서에 등장하던 가상의 인물의 위치를 오랫동안 지녔던 이름이었고, database 나 법률 쪽에서는 꽤 유명한 이름이었다. 예를 들어 성경의 인물이 직접 거론된다면 회사 내에서 종교 전쟁이 벌어질 게 보이고, 역사적인 인물들이라 해도 홍길동만큼 모두에게 사랑받는 사람이 귀하리라는 생각이다. 심지어 비틀즈 같은 유명 아티스트들도 호불호가 있을텐데...

  

이후 John Smith, Jane Smith 까지는 보았지만, 이후에 나오는 이름들은 그리 감동이나 기억이 있거나 하진 않았다. 이후 쇼핑몰 등 금융 관련 '업권'에서는 꽤 자연스럽게 쓰이고 있어 신기해 했던 기억이다.

  

## **부록 : 테스트용 신용 카드 번호**

  

Nest store 에서 했던 과제는 다양한 결재 방법을 구현하는 것이었고, 나는 한국으로 할부 혹은 후불 결재에 해당하는 [BNPL ( Buy Now Pay Later )](https://namu.wiki/w/BNPL) 을 구현하는 과제를 해당 업체 중 하나인 [affirm](https://www.affirm.com/) 의 API 와 붙이는 일들을 하였다. 여러 payment solution들의 도움을 받지만, 기본적으로 여러 가지 flow 를 챙겨야 하는 서비스의 특성을 제대로 만들려면 홍길동 / John Doe 를 비롯한 다양한 테스트 계정과 시나리오들이 필요했었다.

  

이 중에서 가장 도움이 되었던 게 각 카드 회사들마다 쓸 수 있었던 테스트용 신용카드 번호들이었다. 별다른 contract 없이 업계 모두가 공용으로 쓰고 있는 번호들에 다양한 에러들까지 만들어 주는 내용들은 개발을 아주 쉽게 도와주는 내용들이었었다. 10년 전부터 이미 구글에 "test card numbers" 등을 해 보면 자료들이 잘 모여 있었고, 최근에는 Stripe , Bluesnap 등이 집대성해서 아래의 좋은 resource들로 이용할 수 있다. 지금 만들고 있는 작은 프로젝트에서는 별 고민 없이 Stripe integration을 고려하고 있다.

  

[https://docs.stripe.com/testing?testing-method=card-numbers#visa](https://docs.stripe.com/testing?testing-method=card-numbers#visa)

[**Test payment methods**

Use test cards to validate your Stripe integration without moving real money. Test a variety of international scenarios, including successful and declined payments, card errors, disputes, and bank authentication. You can also test non-card payment methods

https://docs.stripe.com/testing?testing-method=card-numbers#visa](https://docs.stripe.com/testing?testing-method=card-numbers#visa) 

  

[https://support.bluesnap.com/docs/test-credit-card-numbers](https://support.bluesnap.com/docs/test-credit-card-numbers)

[**Test Card Numbers**

The following card numbers can be used for testing regular card transactions in the BlueSnap Sandbox environment. The table indicates what the expected result is for each test card, such as a successful charge or a specific error. �Notes:If the CVV Code

https://support.bluesnap.com/docs/test-credit-card-numbers](https://support.bluesnap.com/docs/test-credit-card-numbers) 

  

다만 한국에서 비슷한 일을 위의 뱅크샐러드에서 하려 했을 때 거의 이 모든 내용이 public 에 없더라는 게 다른 한편으로 놀라운 일이었었다. 네이버 / 구글의 전반적인 정보 생태계의 문제도 하나의 시작이고, 자산의 공개에 조금 더 보수적인 회사들의 NDA , 테스트 계정 생성, rate limit 등도 이유일 수 있겠다. 실제로 작업을 하기 전에 계약, 서류작업 들이 많이 필요했었고, 제약이 훨씬 많았더랬다. 좋게 생각하면 누군가에게는 장벽, 누군가에게는 기회의 영역이라 할 수도 있겠다.
