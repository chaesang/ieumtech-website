---
title: "인공지능과 추천 시스템 강의 노트 - (11/16)"
date: 2024-11-27
lang: ko
summary: "들어가며 수능이 끝나며 갑자기 추워진 11월. 기말 과제들을 리뷰하면서 시간 분배를 잘 하기 어려운 일들이 생기고 있었다. 아직 못 전한 싶은 내용들이 많이 남아 있는 거 같기도 하고, 가끔은 같은 말을 반복하는 거 같은 조금 모호한 감정이 드는 시기인 거 같다. 개인적인 일정 + 회사 일정으로 미국에서 원격 수업을 두어번 더 잡아야 할 것인데, 한 학기"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-24"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/93
draft: false
---

## **들어가며**

수능이 끝나며 갑자기 추워진 11월. 기말 과제들을 리뷰하면서 시간 분배를 잘 하기 어려운 일들이 생기고 있었다. 아직 못 전한 싶은 내용들이 많이 남아 있는 거 같기도 하고, 가끔은 같은 말을 반복하는 거 같은 조금 모호한 감정이 드는 시기인 거 같다. 개인적인 일정 + 회사 일정으로 미국에서 원격 수업을 두어번 더 잡아야 할 것인데, 한 학기 16주를 꾸준하게 다 가지고 가는 것에 대해 더 현명한 결정들이 있어야 하지 싶고, 다행히 기말 과제들은 아직까지는 잘 distribute 되고 있다.

  

## **준비한 내용들**

### [**11주) 강의 update**](https://docs.google.com/presentation/d/1uxNSsvg8ClGFo_D_E_mbJaZXb3RiE-rJL16hkWgkW5I/edit#slide=id.g1168ad8df56_0_7)

![AD\_4nXdYM\_XiUTXO61XmZi0TrzKWvzC-AlpgPuckiO6kCdkVWdrh4wG3kfX4XfcrI1Qd5TeOQ6P9r4gknfq2rG8KLWMpF7ehCEypKTk4zqU8BB3IvkibB8cGQ\_CPIgL3pCGanLmIivTveA?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-93/01.jpg)

나를 잊지 말아 달라는 듯한 Anthropic 의 팟캐스트.. 무려 5시간짜리라니… 그래도 꽤 잘 들리는 아젠다 선정, 알아 들을 만한 대화들. 이어서는 MS 의 이후 agent 에 대한 아젠다 선정까지.

  

지난 주 발표했던 콴다와 GPT 간의 수능 수학 문제 풀이 배틀을 기대했지만, 언어 영역에 지문으로 diffusion 이 나오는 일이 일어났다. 모든 사람의 기초 상식에까지 내려가고 있는 건가 싶어 다행이다 싶으면서도 입시에 이용되었어야 하는가에 대한 씁쓸함이 있다.

  

### [**Lessons from Google Search ( part 2 )**](https://docs.google.com/presentation/d/1CO1nPM5IkmaP7yJGW-YZawV5-9HuuX21/edit#slide=id.p1)

지난 주 검색 결과 페이지에 있던 component 들을 지나 이번 시간에는 한 단계 더 들어간 구글 검색의 내용들을 다루었다. 인덱싱, 관련 검색, suggest, auto completion 등의 과제들과 점점 더 극단으로 crazy 하게 흘러가던 과제들을 몇 개 다루었다. GWS rewrite, universal search, 순간 검색 ( instant search ) 까지 공개된 자료들을 중심으로 이야기들을 나누었는데… 너무 예전의 이야기들이라 별 도움이 되지 않았을 수 있겠다는 생각이 조금 들기도 했다.

  

![AD\_4nXdW2Onf3NwP-OgsfxJ53akuWP8W6Zkw9sZTIWwgy588eAmkoPEg7vPRhWzY8xbFw6OXdnyeR-1jsYLY6V5pkLfZHNBKrzw-wyDQK5C68LZJKPdFQxVR5hUKhDehB5Rw1Y4ovl7M?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-93/02.jpg)

  

## **기말 과제 발표**

  

### [**디지털마케팅플랫폼(DMP)을 통한 상품 추천 사례 소개 - 김지연, 전진솔, 심윤찬**](https://docs.google.com/presentation/d/17YzVkQ8hduauuKaj5k_LHci3GdDN60eL/edit#slide=id.p1)

  

농협을 비롯한 금융앱들이 자사 상품들을 판매하기 위한 많은 노력들. 팔기 힘든 금융 상품을 팔기 위해 여러 노력들을 담담하게 설명해 주었음. 마이데이터와 중개 플랫폼들 사이에서 고뇌하는 금융 슈퍼앱들은 같은 운명이리라.

\- 플랫폼의 입장에서 볼 때 저축 은행 계죄 개설과 '보험 가입' 은 적당한 상품인가요 ?

\- 신규 가입 / 개설의 모양일까요 기존 고객에게 하나 더 권하는 모습일까요 ? 둘은 아예 집단이 달랐더랬는데요..

\- 체리피커들은 어떤 영향을 주나요 ?

\- 다양한 일을 하는 네이버 등과 다르게 금융앱 내에서 하는 행동 정보들이 신규 상품 추천에 도움이 될까요 ?

\- 과연 사용자들의 경우 '연이율', '혜택' 을 이길 수 있는 조건이 있을까요 ?

  

### [**인공지능을 활용한 기업 재무등급 자동산정 시스템 - 방준영, 김동혁, 임도형**](https://docs.google.com/presentation/d/1YKMPkFJtqbvxIxjsWV7tIM_iw2Tno1xN/edit#slide=id.p1)

  

KIS Value, 연합 인포맥스 등 데이터들을 모으고, FinBert 등으로 실제 EDA 까지 실습해 본 내용들 정리. 데이터 수집과 분석 시간을 단축시키며 초기 등급 판단에 걸리는 시간을 단축시키는 효과가 있음.

\-.분기/반기 보고서가 매번 발행되지 않고, 뉴스들도 균일하게 분포하지 않을텐데, 이를 사심 없이 적용할 수 있는 방법이 있을까요 ?

\- 감성지수 ( sentinent analysis ) 에서 기사의 긍부정과 함께 인용되는 조합들의 match 부분에서 정확도가 차이가 많이 나는데요. 회사 이름이 모호하다거나 하는 업이 바뀐다거나 등... 뉴스의 양도 차이가 많고 해서 진지한 세상에서는 가중치를 가지고 매번 고민하게 될텐데.. 몇 번 돌려 본 결과라면 예제들이 있을까요 ?

\- 상장사나 공시 등은 잘 정의된 양질의 정보들인데, 비는 부분은 혹은 새로 들어오는 기업들은 어떻게 준비를 해야 할까요 ? e.g. default padding 전략 ?

  

  

### **추천시스템을 활용한 맞춤 이동수단 추천 서비스 - 나문정, 이혜진**

### [https://www.kakaomobility.com/service-kakaot](https://www.kakaomobility.com/service-kakaot)

  

카카오 T 가 택시인 줄 알았는데, Transportation 이었고, 20개 이상의 서비스들이 공존하는 슈퍼앱인데, 모두 택시만 알고 쓰는 모순이 있는 앱.

\- 우버의 경우는 택시 내의 제품군을 여러 개로 나누어서 접근하는 것을 하고 있고, 드라이버들을 다양하게 운용하는 방식으로 사업확장이 일어나고 있습니다.  
\- 택시 탑승을 유도하지 않으면 '손해 보는 제품'이 되는 건 아닌가요 ? 이 경우 판매하는 상품을 선택하지 않았음을 알 수 없으니 feedback loop 로 다루기가 어려울 거 같은데...

\- 사용자의 앞 퍼널인 카카오맵에 조금 더 어울리는 서비스일 수 있겠는데, 어떻게 섞을 수 있을까 ?

\- 사용자의 마음에 들려면 “택시 많이 막히니까 몸이 조금 고생해도 대중 교통으로 가고 10,000원 아껴라” 라고 이야기할 수 있어야 하는데, 제품으로 이게 설명이 될까요 ?

\- 기차 예약은 SRT / Korail 앱보다 훨씬 더 쾌적하군요.

  

### [**AI로\_투자하는\_국내외\_ETF\_비교 - 이하준, 황신형**](https://docs.google.com/presentation/d/168PaLfoIYmwDBUE4BryT2vVx7oJYOvuM/edit#slide=id.p1)


ETF 들 중에서 AI 를 쓴다고 주장하는 제품들에 대한 분석과 성적, 그리고 AI washing 이라 부르는 내용들까지. 개인적으로는 전설적인 투자자들에 대한 내용을 학습시켜 종목을 선정하게 하는 ETF가 관심이 갔음.

\- 상장사들은 이래저래 자료들이 많으니 도움이 되겠군요.

\- 일반 문서들의 경우 이름만으로 인용된 회사들이 실제 어느 회사로 매핑되는지가 sentiment analysis 보다 난이도가 훨씬 높았습니다. 특히 계열사의 영향은 어떠할까요 ? 특히 한국의 증시의 경우 비슷한 이름의 회사가 여럿이고, 미국의 경우 다 퉁쳐서 구글/MS 등이 되는 서로 다른 영향일텐데요..

\- 국내 ETF 상품 이름에 AI 가 포함되는 건 어떤 의미일까요 ? AI washing 일까요 ?

\- AI 상품들의 경우 영업비밀에 해당하는 것일까 아니면 신뢰도를 얻으려는 노력일까 ?

\- ETF 와 로보어드바이저를 구별해서 설명해 주시겠어요 ?

  

## **Q&A**

Q.발표하면서 여쭤봐야지 했다가 까먹고 질문 남기게 되었습니다.. 디지털마케팅플랫폼의 기본데이터를 행동데이터로 사용하기로 하고.구글의 AD-ID를 수집, 분석하여 활용하는 방향으로 개발하고 있었는데 ADID를 조만간 대체할 ‘프라이버시 샌드박스’를 도입하겠다고 발표해서 내부적으로 많은 혼란이 있었다가 구체적인 내용이 전부 미정으로만 알려져서 기존대로 진행해서 사용했었는데 내부적으로 진행 중인 사안인지? 아니면 기타 사유로 보류 또는 중지된 것인지 궁금합니다.

참고 기사:[https://www.digitaltoday.co.kr/news/articleView.html?idxno=527230](https://www.digitaltoday.co.kr/news/articleView.html?idxno=527230)

  

A. 이게 용어들이 많이 복잡하기도 해서… 먼저 AD-ID 는 Android 용, IDFA 는 iOS 용 device tracker 였을 거고.. Chrome 이 없애겠다고 하는 건 3rd party cookie tracking 이겠는데, 크롬에서 구글에 검색 몇 번 하고 나서 페이스북에 들어가면 그 물건의 광고가 뜨는 게 여기에 해당하겠습니다. 광고 플랫폼이 Chrome 에 3rd party 로 뭔가를 설치하고 그걸 facebook 에게 파는 모양인 거죠..

  

사용자의 동의를 받은 경우 해당 앱을 사용하는 사용자의 상태 변환을 보는 것은 문제가 되지 않으나 이를 서로 다른 사이트나 앱들 사이에 공유하는 것을 막는 게 큰 골자로 이해하고 있습니다. 이들을 이용해 온 광고 중개업 등이 사태를 주의깊게 보고 있고, 애플의 IDFA 처럼 갈 것이라는 게 중론이긴 했더랬습니다. 제가 active 하게 다니던 시절에도 이슈가 있어 왔었고, 법령에서의 문구는 사용자가 하기 싫다고 하면 하지 마라.. 라는 거라 개인적인 견해로는 유럽 때문에 가긴 갈 거다 라는 생각입니다. 저도 구글과 인연을 끊은 지는 꽤 되어서… :)
