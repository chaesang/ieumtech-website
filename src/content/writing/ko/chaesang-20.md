---
title: "인공지능과 추천 시스템 강의 노트 - (11/16)"
date: 2024-01-09
lang: ko
summary: "새벽에 한국에 도착해서 약간의 휴식과 준비 후에 진행한 강의. 부쩍 추워진 서울 날씨는 캘리포니아와 다른 맛이 있다고나 할까..  준비한 자료들 11주 강의 update OpenAI 가 주최한 dev day 가 한 주간 있었던 일들을 다라고 할 정도로 임팩트가 있었다고 하겠다. 구글의 발표 때문에 서둘렀다는 설도 있었고, GPTs 는 여러 스타트업들의 강제"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/20
draft: true
---

새벽에 한국에 도착해서 약간의 휴식과 준비 후에 진행한 강의. 부쩍 추워진 서울 날씨는 캘리포니아와 다른 맛이 있다고나 할까..

  

## 준비한 자료들

### [11주 강의 update](https://docs.google.com/presentation/d/1rXPpls0710J7cm3oJQ2trdxQbTmqeJZdjON1AaA3-tI/edit#slide=id.g1168ad8df56_0_7)

![1\*RGVYewodXpCLLYzIdYY\_Pg.png](/writing/chaesang-20/01.png)

OpenAI 가 주최한 dev day 가 한 주간 있었던 일들을 다라고 할 정도로 임팩트가 있었다고 하겠다. 구글의 발표 때문에 서둘렀다는 설도 있었고, GPTs 는 여러 스타트업들의 강제적인 pivot을 한 번 더 강요하게 만들고 있고… , GPT4 turbo는 값이 싸 져서 쓸만하다고 주장하고 있다. 기존에 뭔가 진지하게 하던 회사들 입장에서는 종속된 API 들이 싹 바뀌는 모습인 거 같은데..

  

우리 뒤에는 Microsoft가 있으니 마음 편하게 데이터 같은 거 있으면 올려 놓으라.. 라고 주장하고 있는 거 같아 살짝 불편한 마음이 들었다.

  

### [부록) Case Study : Google Playstore](https://docs.google.com/presentation/d/1pRt4X8ZMkNuG2zSDKf8sAvd8_or74-2Z3pN92m4hK5c/edit#slide=id.g24763bd2f49_0_161)

2015 년 즈음의 이야기이긴 하지만, 당시 한국과 일본 과제를 운영했던 기억들을 바탕으로 metric 과 challenge 들 위주로 정리해서 나누었다. 재미난 일들도 많았고, 다양한 시각에서 배움이 많았어서 기억들도 생생하여 해 나누고 싶은 이야기들이 많은데.. 이게 audience들을 고려하다 보면 아무래도 한계가 생긴다. 간단 요약.

사용자, 공급자를 연결하는 제품이며 안드로이드 생태계 전체를 책임지는 제품. 돌아보니 전세계에서 유래를 찾기 힘든 제품이었음.

검색이 검색이 아니고, 홈페이지가 홈페이지가 아니며, 클릭 이외의 지표들이 많이 필요했던 제품. spam fighting 이 얼마나 중요한지, 이를 지표화 시켜 쓰레기들을 걸러 내는 게 왜 중요한지를 알게 된 과제

한국과 일본이 language — country pair 가 단일화된 얼마나 감사한 나라인지.. 한국인은 영어를 잘 알지만, 그렇다고 억지로 한글화 되지 않은 영어를 보여 주면 안 됨.

  

### Break : [Video Search Quality Meeting: Spelling for Long Queries (Annotated)](https://www.youtube.com/watch?v=JtRJXnXgE-A)

2011 년 구글 검색 팀의 weekly search quality launch meeting. 타사의 사례는 모르지만, 훌륭한 사람들이 자기 역할을 하며 하나의 제품을 위해 했던 process 의 좋은 사례. 전 매니져를 비롯해서 반가운 얼굴들의 조금은 앳된(?) 모습들. 이들을 만나기 위해 그리 공을 들였나 싶기도 하고, 상처를 입었던 말들이 다시 기억 저편에서 올라오기도 함. 지금 기억을 더듬어 보니 이 때는 search = quality 라고 불리었고, code repository 도 quality 였음.

  

## 기말 과제 발표들

### [알파카를 이용한 개인 AI챗봇](https://docs.google.com/presentation/d/1R4zK40LiwCotgD_BVeNihsXGss9sTf-B/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true) by 추준호

Kairess, 몇몇 먼저 이것저것 해 본 github history를 따라 가며 어디까지 되는지를 해 본 경험을 공유. colab pro 에서 pre trained model 을 inference 까지는 해 봤지만, 이후 fine tuning or instruction-tuning 의 과정과 이를 위해 사용한 한글 dataset 이 촘촘하지 못해 re-trainig 이 되었다는 것은 알겠는데, epoch를 그래서 늘려야 하나 말아야 하나 고민 정도까지가 발표의 내용.

  

한 번 training 에 4시간이 걸리는데, 개인적인 시도들도 이걸 누르면 얼마가 나가게 되려나 하는 공포감이 많은 제약을 주었다. 개념 없이 이것저것 해 보고 싶은 생각이 들다가도 흠칫 거리게 되고, 한편으로는 quality eval 하는 쪽에서 과연 이게 감당이 될 것인가 하는 의문이 들었다.

  

### [카드업권 신용평가 모형과 AI](https://docs.google.com/presentation/d/13ajUQ7xVCP6eNAJykTUSEAp3qjfkuDU4/edit#slide=id.p1) by 임동현

현대카드가 업계 점유율 3위. 꽤 많은 사용자 수들이 있어 충분하기도 하지만, 한편으로는 여전히 해당 카드를 사용하지 않는 사용자들을 어떻게 대해야 할 것인가에 대한 이슈는 있음. 사업적으로 타카드 쓰는 사람들의 분포가 궁금하긴 하겠지만, 모델을 만드는 데 통계적으로 부족하지 않다는 말에는 공감이 되었다.

  

신용평가는 카드값을 못 받을 것인가에 대한 true/false 예측인데, 딥러닝까지 오지 않더라도 전통적인 machine learning 기법이 이미 꽤 훌륭해서 운영 비용을 감당하면서까지 이후 신세대 ML 기법들을 도입해야 하는 이유가 정당화되기 어려움. 그리고 신규 사용자의 예측이 되지 않는 문제는 어차피 이쪽 기법으로 풀리지 않음.

  

### [인공지능의 편향성 이슈와 설명가능한 AI — 금융권 사례를 중심으로](https://docs.google.com/presentation/d/1bv-iT0eqD3lnn9Nj1SXR2tqPB5rHkewe/edit#slide=id.p1) by 김보연,김소현,이윤의

일단, XAI 라는 이름으로 여러 가지 개념들이 혼재해 있다. 블랙박스를 사람이 알 수 있게 설명하자 라는 측면에서 surrogated model 을 이용해서 역으로 추정하는 것은 이론적으로 인정할 수 있지만, 다양한 궁금증들을 여기에 기대는 것은 아닐 것이라고 보고, 하나의 거대한 블랙박스를 거꾸로 색칠해 가며 이해해 보는 정도의 접근이라 하겠다.

  

규제 기관의 측면에서는 이걸 빙자해서 알고리즘 혹은 영업 비밀을 다 공개하라는 식의 해석들을 같이 끼워 논의하기도 하는데, 실제 서비스를 운영하게 되면 그 책임을 묻는 모습이 될 테고, 그 이후에도 설명 가능하다면 수정 가능한지, foundation model 에서 이게 가능한 접근인지는 여전히 많이 나은 숙제에 가깝다 하겠다.

  

### [컴퓨터비전과 OCR을 활용한 디지털 트랜스포메이션 사례](https://docs.google.com/presentation/d/13i-qGfwkRERq0bYnulmNK5LhjLg5eXPT/edit#slide=id.p11) by 유충원,이영섭,장은제

일단 OCR 을 이용한 작업들은 수기로 옮기는 것보다는 분명 혜택이 있고, 감사 업무의 특성 상 ‘확인’을 100% 해야 하는 것은 피할 수가 없고, 출력된 문서들은 인식률이 높아 효과도 크다. 다만 여전히 raw text extraction 이후의 운용에 대해서는 개선의 여지들이 계속 있고, LLM 들이 여기에 기여할 수 있는 부분이 있을 수 있겠다.

  

투자사 입장의 관점에서 추가적인 이미지들을 가지고 무언가를 한다는.. 특히 위성 사진을 가지고 뭔가를 더 한다고 이야기하는 회사들은 1) 공중에서 찍은 사진의 법적 책임들 2) 매력적인 추가적인 정보를 주지 못함 등의 이슈로 매력을 많이 느끼지 못한다고 함. 그리고 영수증 OCR 같은 것은 이미 transaction data 가 더 나은 형태의 정보들이 있는데, 굳이… 의 관점이 심해져 있음. 기존의 가치관에 disruptive 가 필요한 시각들이 특히 투자자의 관점에서는 설득이 더 필요한 부분이겠다.

---

다음 주는 또 7개의 발표 주제가 있는 주이고, 주중에 피드백을 열심히 모아야 겠다 싶다. 아래는 앞으로 남은 시간 동안 해야 할 일들…

![1\*wxOnRw2YjV3wn3Qv5KG7vQ.png](/writing/chaesang-20/02.png)
