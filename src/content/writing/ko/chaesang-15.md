---
title: "인공지능과 추천 시스템 강의 노트 - (6/16)"
date: 2024-01-09
lang: ko
summary: "들어가며  추석으로 한 주 빠져서 5/15 대신 6/16 으로 표기하기로 한다. 급하게 한국에 들어가서 두 개의 강의를 in-person으로 하는 계획을 세웠었고, 금요일 새벽 도착 낮에 얕은 휴식 후 저녁 강의를 진행하는 아주 긴 하루를 보냈었다.  이번 주에는 notebook 을 써 보지 않은 사람들을 위해 colab을 이용해서 live coding 을"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/15
draft: true
---

## 들어가며


추석으로 한 주 빠져서 5/15 대신 6/16 으로 표기하기로 한다. 급하게 한국에 들어가서 두 개의 강의를 in-person으로 하는 계획을 세웠었고, 금요일 새벽 도착 낮에 얕은 휴식 후 저녁 강의를 진행하는 아주 긴 하루를 보냈었다.

  

이번 주에는 notebook 을 써 보지 않은 사람들을 위해 colab을 이용해서 live coding 을 해 보는 것을 살짝 해 보았다. 혹시라도 한 번도 못 해 본 학생들이 있다면 용기를 내어서 interactive python 정도는 해 볼 수 있기를 기대한다.

  

그리고 이번주부터는 학생들의 학기 프로젝트 발표가 시작되어 많은 기대와 시간 배분의 챌린지가 시작되게 되었다.

  

## 준비한 자료들

### [6주차 강의 업데이트](https://docs.google.com/presentation/d/1kxSyq4vc_shp1wn-pwwbZvDPu08RwnkfBN5fk8BpQbU/edit#slide=id.g1168ad8df56_0_7)

![](/writing/chaesang-15/01.png)

  

추석을 낀 2주가 있어 다양한 Big Tech 회사들의 참전 소식이 있었다.

[Meta is putting AI chatbots everywhere](https://www.theverge.com/2023/9/27/23891128/meta-ai-assistant-characters-whatsapp-instagram-connect)

[Amazon Bedrock](https://aws.amazon.com/bedrock/) by AWS

[Introducing Joule](https://www.sap.com/products/artificial-intelligence/ai-assistant.html) by SAP

  

Llama도 이제 최전선으로 왔고, 제품으로서의 가치 경쟁이 심해진 듯해서 바깥의 회사들은 머리가 더 복잡한 일들이 생긴 것으로 되었고, SaaS 의 경우 lockin 을 깨기가 점점 더 어려운 방향으로 진행되고 있구나 싶다는 생각을 하게 되었다.

  

### [6주차 추천 시스템 — 5. 추천 알고리즘 상세](https://docs.google.com/presentation/d/1yklJHL5QpD8h4gW1KFbXm_3KKMepsvyV2rw0kgpUhkY/edit#slide=id.g1168ad8df56_0_7)


이 책의 절반 정도가 이 챕터에 할당되어 있다. MovieLens ( [https://movielens.org/](https://movielens.org/) ) 를 이용해서 전통적인 다양한 추천 시스템을 구현해 보는 경험을 할 수 있길 기대한다. 모든 내용을 다 할 수는 없고, 몇 주에 나누어서 나눠 보자 싶어 아래의 일들을 이번 주에 colab 에서 cover하였다.

  

MovieLens data EDA

Offline evaluation method

Random recommendation as a baseline.

  

코드에 대해 일일이 설명할 것까지는 아니었고, 모두가 pandas 정도는 엑셀 다루듯이이것저것 다룰 수 있기를 기대한다. colab 은 그냥 따라서 계속 run 만 해도 되리라 생각했는데, 미리 준비한 것에 오타가 있었는지 directory가 안 보여 잠깐 어버버 하기도 하였다.

  

### Break : [How AI could empower any business by Andrew Ng](https://www.ted.com/talks/andrew_ng_how_ai_could_empower_any_business)


다양한 행보를 이렇게까지 해도 될까 싶은 고수의 비젼에 대한 내용. ‘보급'에 한결같은 진심인 선생님의 발걸음을 응원하고 지지하고 함께하고 싶다는 생각이다.

  

### [6주) AI 강의 — 4강 — 몸에 대한 실험, 마음에 대한 실험 , 5강-인류는 어떻게 대응해야 하는가?](https://docs.google.com/presentation/d/1DwdO7GbeI00VtxOW61qRxsoVyXSAonKJQ17KC0H2rRs/edit#slide=id.g288bc5f3c38_0_56)


기술에 대한 큰 이야기들은 끝났고, 정책과 미래 방향에 대한 이야기들을 하며 책 한 권을 마무리하게 되었다.

  

때마침 R&D 예산 건과 같은 정치적인 이야기를 하게 될까 싶어 조심스러웠고, 나라의 역할에 대해서 같은 의견이긴 하지만 깊이 다루기엔 조심스러워 모아서 이야기를 하게 되었고, 그렇게 마무리가 되어 다음 주부터 이 부분을 다른 어떤 내용으로 다룰까 조금 걱정이 되는 정도이긴 하다. ( stateof AI 2023이 나올 때가 되었는데 라는 생각을 했는데, 다음 주에 시기적절하게 나와서 자연스런 transition 이 되었다. )

  

## 기말 과제 발표

### [Do Anything Now — Generative AI darkside](https://docs.google.com/presentation/d/1OmtXQerFBBdBTfFHoJcs8u4cttggT--O/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true) by 한수연


한국성장금융투자운용에서 리스크 관리를 하고 있는 학생의 GPT 류의 서비스를 이용한 어두운 기능들에 대한 조사, 분석들. LLM을 만들 때 얻게 되는 다양한 지식들을 꺼내어 쓰려는 — jailbreak 기술들을 이용해서 — 시도들과 이를 방어하려는 기술적, 정책적인 부분들에 대한 내용들을 관련 업체들의 노력들을 같이 이야기해 주었다.

  

똑똑한 금수저 아이에게 전세계의 책을 다 읽혀 놓고 필요한 것을 꺼내 읊으라고 하다 보니 읽어서는 안 되는 내용 혹은 세상에 함부로 이야기해서는 안 되는 내용들이 있는 것과 같은 비유라 생각이 들었고, fine tuning 혹은 실제 사용자들과 접점이 있는 제품 단에서 더 고민을 많이 해야 하는 것이라는 생각을 하게 되었다.

  

---

수업 질문 창에 “LLM 을 처음부터 만들려면 어떻게 해야 하나? NLP 쪽은 어떻게 해야 할까?” 라는 질문이 와서 요새 이것저것 해 보는 입장에서 아래와 같은 의견들을 전했다.

  

Pre-train 을 scratch부터 하고 싶은가 ? 제대로 하려면 비용이 많이 들텐데…어지간하면 fine-tuning 으로 해결하는 건 ?

요새는 transformer 로 놓고 시작

데이터 모으는 게 일..

MLM / CLM 은 데이터를 가지고 학습시키는 방법, 빈 칸 추측하기 or 다음 단어 예측하기

모델은 인코딩까지만 담당하고, 거의 모든 자연어 처리는 데이터 가공에 쓰임.

huggingface 와 몇 곳에 deposit 해 놓고 작은 모델들 inference 까지는 몇 개 수월하게 해 봤는데, fine tuning 해 보려 하니 1) data 가 이 정도로 될까 ? 하는 생각과 2) 계산서를 봐 두어야…? 에서 틀어지고 있다.

---

## 마무리 하며

이번에도 질문을 수월하게 받지 못하는 상황이었지만, 2시간 반 정도 채웠고, 나누고 싶었던 내용들은 다 나누긴 했다는 생각이다. 과제 발표가 꽤 의미있게 진행이 되었다는 생각에 시간 배분을 조금 더 해야 겠다는 생각인데, 개인 소개 3분 + 발표 5분으로는 많이 모자라겠다는 생각이다.

  

사전 질문을 이용해서 과제의 결과물이 풍성해지길 기대했고, 과제 발표 자료 제출 먼저 하고 발표는 다음 주에, 그 사이에 질문들이 모이기를 기대했는데, 내가 남긴 2개의 질문 이외에 몇 개의 이야기들이 더해져서 만족스러운 시작이었고, 다양한 내용들이 cover되어 서로 견문이 넓어지면 좋겠다는 생각이다.

  

다음 주는 대면 수업을 계속 하게 되고, 이후 3번의 원격 수업의 내용을 어떤 것으로 채울까 고민을 조금 더 해야 할 거 같다.
