---
title: "인공지능과 추천 시스템 강의 노트 - (16/16)"
date: 2024-12-26
lang: ko
summary: "들어가며 계엄, 탄핵 정국의 중심에 있는 여의도는 매일 여러 업데이트가 있는 등 어수선하지만, 막상 마지막 수업은 괜히 온라인으로 했나 싶을 정도로 조금 허무한 상황이었다. 탄핵 의결 후 당장이라도 여러 일이 일어날 거 같은 상황이었지만, 아무 일 없이 시간이 지나가고, 다행히 다친 사람들도 없지만, 그렇다고 뭔가 해결이 되고 있는 거 같지도 않은... 결"
tags: ["kaist", "lecture"]
series: "kaist-dfmba-24"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/101
draft: true
---

## **들어가며**

계엄, 탄핵 정국의 중심에 있는 여의도는 매일 여러 업데이트가 있는 등 어수선하지만, 막상 마지막 수업은 괜히 온라인으로 했나 싶을 정도로 조금 허무한 상황이었다. 탄핵 의결 후 당장이라도 여러 일이 일어날 거 같은 상황이었지만, 아무 일 없이 시간이 지나가고, 다행히 다친 사람들도 없지만, 그렇다고 뭔가 해결이 되고 있는 거 같지도 않은... 결과적으로 학생들과 얼굴을 한 달 동안 못 본 채 끝내게 되는 상황이 되어 버렸다. 작년에는 수업 후에 1:1 신청도 꽤 했었고, 다른 이야기거리들이 많았는데, 올해는 딱 수업과 학점 매기는 이후에는 아무 interaction이 없게 되는 게 여러 모로 아쉬움이 있다.

  

### [**16주) 강의 update**](https://docs.google.com/presentation/d/18CplJc4Z4Wi1V5pTHCVAZIM9ZXe5izHKjsnwrosTI3Y/edit#slide=id.g1168ad8df56_0_7)

![AD\_4nXfJHGThBPtX6QCe2d5CImgJZE1KtLQj6yYFV611X2Ixtn3uze\_0kbU75WhSn7NO-wXaQZfK7jsD9MGJkOOrx\_3dEVKlL12dUhxSUKzUNnpvaQfvlchd5bLKHokIStpV-uRG6yra?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-101/01.jpg)

구글의 동영상 생성 서비스인 veo 가 Sora 를 비롯한 다른 엔진들을 데차게 저격하는 것으로 건재함을 알렸고, OpenAI 는 12개의 서비스를 런치하는 중 자동 응답 전화 시스템인 1-800-ChatGPT 를 런치함으로써 미국에서 더욱 저변을 넓혀 가고 있다. 저물어 가는 서비스를 이용해서 새로운 사용자들을 모을 수 있을까에 대한 개인적인 호기심이 크다.

  

## **기말 과제들**

  

### [**"Attention Is All You Need" - The Dawn of a New Era in AI : Before & Beyond-김동호,노대일,임윤호**](https://docs.google.com/presentation/d/1F8nYISywtNWoVny39AoO4TLiZkURp1Q5/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true)

이제는 교과서처럼 되어 버린 역사적인 논문에 대해 조금 깊은 분석과 산업 전반에 미친 영향들에 대해 정리한 내용들. 이후 Transformer 와 infrastructure / resource 들의 전쟁터가 되어 버렸지만, 약간은 교과서 혹은 역사서에 해당하는 이야기들과 조금 고전적인 language model 에서부터의 분석들 정리.

  

C. 2018년의 GPT 1 과 이후의 GPT 들은 많이 다르니 구분을 해 주세요.

Q. 특히 GPT-3 이후에 변화들의 중심이 되었는데, 구글의 open source로의 release 가 영향을 준 것일까요 ?

Q. 이후 학계는 LLama 의 open 이 더 큰 영향을 준 건 아닐까요 ?

  

### [**기업정보 텍스트를 활용한 산업분류체계 개발-박신식,장우제**](https://drive.google.com/file/d/1nG2sJUiSPgJ3Kylb4-4efANbfvlDkDUm/view?usp=drive_link)

기업 정보를 산업 분류 체계로 나눔에 있어 여러 생기는 문제들을 clustering 으로 풀고자 한 접근들.실제 여러 embedding 과 clustering 기법들을 시도해 보며 유의미한 분류를 찾아 나가는 노력들.

  

Q. 기존의 문제는 taxonomy 의 문제인지, 실제 분류 방법의 문제인지 ?

Q. 하나의 기업이 여러 곳에 들어가고 싶은 경우는 어떻게 하면 좋을까요 ?

Q. 기존의 분류 방법들과 비교되는 사례가 있을까요 ?

Q. 키워드는 해당 group 에서 추출된 건가요 ?

Q. 총 기업 수가 국내 2,300 , 해외 23,000 , 총 25,200 인가요 ? 나중에 숫자 더해보면 좀 안 맞는 거 같은데요..

C. 수집된 데이터에 대해 한 번 훑어 주시겠어요 ? 기업별 정보가 균등(?)하게 들어 있는지,

Q. 2개의 layer 로 ? 3,989 는 어디로 ? 기타로 놓게 될까요 ? '기타' 가 어떻게 쓰이면 좋을까요 ?

Q. 건설 1516 vs 광고 30 차이가 많이 나는데, 분류해서 적용해 보기에 괜찮을까요 ?

  

### [**GPT를 활용한 가상화폐 투자 정보 요약 서비스-강상훈,권기빈,신서윤.pptx**](https://docs.google.com/presentation/d/1H3pyTjhvJdShtg5N1T_1jW_889S6bL7H/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true)

투자 정보들을 모아서 요약해 주는 봇 서비스를 만듦. 가상화폐라는 조금 아슬아슬한 영역의 주제이지만, 일반적인 로직으로도 쓰임직한 요약 서비스로 유의미한 방법론. 서비스를 만들고, 사용자 인터뷰를 통해 피벗을 준비하는 잘 정의된 사이클을 만들어 가고 있었음.

  

Q. '실시간' 에 대해서는 어떤 가정을 하고 있나요 ? 새로운 뉴스가 온 것을 알아채는 로직이 있는지 ? 그 시점 기준으로 얼마나 window 를 넓게 가져야 하는지..?

Q. p4 의 서로 다른 유저의 니즈를 하나로 담는 건 과한 욕심이 아닐까요 ?

Q. 하나의 content 를 만들고 나면 그게 telegram 이나 Youtube shorts 등의 다양한 폼으로 표현된다고 하면, 거래량 top 5 는 어지간하면 안 바뀌는 거 아닌가요 ?

Q. 생성된 content 가 얼마나 만족스러운가..? 를 정량적으로 풀 수 있어야 할텐데요... 몇몇 버그 처럼 보이는 것을 조절한다고 하지만 어디선가 복붙해 온 another copied contents 로 읽히는 건 아닐까 ? 사용자 인터뷰 정도가 만족도를 알 수 있는 1차적인 방법이겠지만... 이후에 prompt 를 바꾸어 나갈 때 어떻게 track 할 수 있을까요 ?

  

### [**기업 매출/매입 내역을 활용한 온라인 제조 B2B 플랫폼 기획-정상원.pptx**](https://docs.google.com/presentation/d/1dqPSTQbTU6uBWWvK2Mta3rrrQeiw_EWp/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true)

기업들끼리 주고 받는, 특히 제조업 쪽에서 오가는 B2B 거래 정보를 바탕으로 플랫폼을 만들고자 하는 내용들. 온라인 쇼핑몰 만큼의 사연이 있겠냐마는, 제조업에서 필요한 부품이나 자재들의 수요 공급이 제한적이었다는 점을 개선하고자 하는 노력들.

  

Q. '제조' 라고 도메인을 꽤 충분히 좁혔지만, B2C 를 참조하는지라 눈높이가 쿠팡 정도에 와 있는데, 비교될 수 있을까요 ?

Q. 이 도메인에 1300만개의 기업이 있는 건가요..? 다른 숫자여야 할 거 같은데요..

Q. 기업의 정보는 상대적으로 쉽지만, 제품의 정보는 어떨까요 ? p7 에서의 문제가 address 되나요 ?

Q. 플랫폼으로 자리잡으려면 공급자와의 관계들도 중요할텐데, 예를 들자면 수수료 같은 문제들은 어떻게 풀 수 있을까요 ?

  

### [**외국인을 위한 라이프스타일 맞춤형 부동산 추천 서비스 기획-이동수.pptx**](https://docs.google.com/presentation/d/1QrvB3LizpbdFLhD4G-n8iPehuv3fIrPi/edit#slide=id.p1)

조금은 특이한 한국에 사는 외국인들을 위한 부동산 시장에 대한 접근들. 극초반의 스타트업이 뾰족한 고객군을 대상으로 문제를 풀어 나가려고 함. 잠재적인 고객의 입장에서 알게모르게 응원을 하게 됨. ( [https://www.getnews.co.kr/news/articleView.html?idxno=702128](https://www.getnews.co.kr/news/articleView.html?idxno=702128) )

  

Q. 출장, 단기임대의 경우 지역 따라서 몇몇 매력적인 서비스, 심지어 에어비엔비 등이 겹치는 거 같은데..

Q. 서비스의 마지막은 중개사무소와 연결인가요 ? 아니면 부가적인 게 있나요 ? 언어 문제는 사용자쪽과 공급자쪽도 풀어야 할 문제가 있는 게 아닐까요 ?

C. 국제학교와 각 나라 별 마트 정보 이외에는 '외국인' specific 한 것보다는 '실거주 공통'에 해당되겠네요.

Q. 실 서비스를 생각한다면 p11 의 타사 크롤링은 아슬아슬한데요.. 이건 제대로 하려면 업체들로부터 공급받게 되는 걸까요 ?

  

### [**음악 추천 시스템의 편향성 문제 해결방안-이효태.pptx**](https://docs.google.com/presentation/d/16I6o652X78lWWQ-sHVMCWMa-12qDiflJ/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true)

음악 추천 시스템이 ‘편향되어 불편하다’ 라는 문제 정의에서 시작한 제안들. 개인적으로는 가정에 적극적인 동의가 되지는 않지만, 최대한 빙의를 해 봄. 예를 들면 Kpop 듣는 중에 임영웅의 노래가 나온다면..? 이라는 부분에 대해서 어떤 접근들을 할 것인가 같은 문제들이라면..? 아래는 같이 고민했으면 하는 내용들.

  

Q. 고민하는 신선도와 다양성 지표는 그 자체로 의미가 있다 하겠지만, 그게 Spotify 사례들의 목적함수였다는 이야기는 없지 않나요 ?

Q. 마찬가지로 사용자가 보기에 단지 섞여 보이는 것이 사용성을 증가시켰다는 것에 대한 연결도 비약이 아닐까요 ?

Q. 신인 아티스트의 곡 노출에 해당하는 건 공급자 중심의 접근이 아닐까요 ? 이게 사용자에게도 도움이 된다는 연결이 있을까요 ?

  

### [**사례연구 : 기업용 AI 시장-송한상.pdf**](https://drive.google.com/file/d/1Oc51FvrFvK0Dr1ISBbn3Ki6rFF5g7uOX/view?usp=drive_link)

여러 기업들에서 다양한 노력들로 AI 를 현업에 적용해 나온 사례들에 대한 연구들. 풀고 싶은 문제와 해결 방법 등을 나열해 온 노력들을 정리했음. 대기업들 위주로 아이템들이 선정된 건 조금 아쉬운 부분이지만, 대표적인 사례들이 레퍼런스로 자리잡으면 하는 작은 바램.

  

C. 사례들을 이야기하고 정리하는 건 좋은 내용인데, 제목이 꽤 어색하네요.. 조금 더 나은 이름이 없을까요 ? '사례 연구:' 로 시작해도 좋겠습니다.

Q. 기업들이 각자 문제를 정의하고 푸는 데 AI 를 사용하는 것들은 좋은 사례들인데, 정부 정책이랑은 연관성을 억지로 찾기 힘들지 않을까요 ?

C. 개인적으로 MLOps 는 새로운 직군을 정의하고 싶어 하는 사람들의 말장난이라는 꽤 삐딱한 시각을 가지고 있는데요.. 예를 들면 p12 그림은 제대로 뭘 하기 위해서 ML 밖에서 할 일이 많다의 의미로 쓰이는 그림이지, MLOps 의 필요성/역할에 인용되려는 그림은 아닌데요...

  

### [**논문 리뷰-“Multimodal Optimal Transport Knowledge Distillation for Cross-domain Recommendation”-서현희.pdf**](https://drive.google.com/file/d/1MP744GWi3UQm58GPuL8jvMZY6DYrwc6J/view?usp=drive_link)

서로 다른 도메인에 있는 정보들을 가지고 추천 셋을 꾸릴 수 있을까에 대한 이야기들. 읽은 책들이 겹치면 영화를 추천해도 될까? 라는 고민에서 시작한 방법들과 그에 관련된 질문들.

  

Q. 한편으로는 광범위한 정보가 있으면 큰 틀에서 되겠지만, 숫자가 작은 경우 괜찮을까 ?

Q. 도메인 별로 호불호가 많이 다르지 않을까 ? 정말 영화와 도서의 취향이 겹쳐야 하는 걸까 ?

  

### **ERP 기반 AI 서비스 분석-김지웅,김성기,박성진**

SAP의 ERP 에 AI 들이 접목되는 과정과 그 기능들을 강화하기 위한 SAP 의 노력들. 아직 1년이 넘었지만, 한국에서 Joule 을 직접 쓰는 사례들을 찾기는 어려웠고, MS copilot 등에서 사용할 수 있게 여러 방법론들을 마련해서 진행 중. ERP 에서 시작하는 제품과 고객들 사이에서, 이를 강화하는 건 자연스러운 정책.

  

Q. SAP 툴에 보이는 각종 도움 기능은 SAP joule 을 이용하고 있고, 더 많은 기능들을 넣어 가고 있다. ERP 자체가 한편으로는 잘 정의되어 버린 프로세스라... 도움을 주는 용도로 잘 쓰이고 있나요 ?

C. 가장 최근에 본 내용으로는 Microsoft 365 Copilot 에서 SAP Joule 을 사용 가능하게 한다는 걸 보았습니다.

Q. 기업용 보안을 고려하는 시각에서 https://openai.com/chatgpt/pricing/ 의 team plan, enterprise plan 에서는 안 쓴다고 하고, 유명 LLM 회사들은 같은 식의 approach 를 하곤 하는데, 고객 입장에서는 여전히 '못믿겠다' 가 장벽이 되는 걸까요 ? 한편으로 무조건 믿으라.. 라고 하는 것도 설득이 쉽지 않아 보이는데요..?

  

## **맺으며**

겸임교수로 수업을 진행함에 있어서, 수업 외의 본업들에 시간들과 에너지를 어떻게 써야 하는가 등은 여전히 어려운 일들이고, 작년보다 올해는 훨씬 정신 없이 지나가게 되었는데, 이는 수업 바깥의 변화에서 기인한 것이겠다 싶다. 강의 평가 결과가 많이 나쁘지 않게 나와서 내년에 또 기회가 된다면 어떻게 해야 할까 고민을 꽤 해 본다. 주제는 어차피 절반 이상은 새로운 것일 거고, 내년에는 미국에서 더 많은 시간을 보내야 할 거 같은데, 리모트로는 전하고 싶은 이야기들에 한계가 생기게 되니, 이를 커버하기 위해서는 조금 더 많은 숙제들 연계시키는 방법을 찾아 보아야 할 것 같다.

  

내년에는 여의도 IFC의 강의 층이 사무실 없이 운영이 된다고 하는데, 아래에 이 공간에서의 사진들을 몇 개 남겨 본다. 한 학기동안 금요일 오후 시간을 여의도에서 보내면서 행정을 봐 주시는 선생님들과 조교들의 도움을 많이 받았고, 한편으로는 이삿짐 빼는 시간과 겹쳐 불쑥 작별을 고하게 되었지만, 여러 면에서 감사의 마음이 전해지면 하는 바램이다. 야무지면서 꼼꼼한, 그리고 빠른 대응들이 많은 힘이 되었고, 덕분에 1주일에 반나절 선생님으로 살기 프로젝트를 2024년 2학기에도 마무리 할 수 있을 거 같다. 아직 학점 제출과 이의제기, 평가 분석 등 연말까지 한두주 더 챙겨야 할 일들이 남아 있겠다.

  

![AD\_4nXeDUg-rC5sFBz6Kp7a5Wbl-u\_2uTr0PtQ2fZWqW2QIM75DdmBZYx1oO85IcF1Yzlkrz3ZyQtlbSau0zOsl906e0irSEtkFIf5H1qitgcIS97vH5vQJ9KLVmmjNkiz1IzPk0Ec\_zpw?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-101/02.jpg)

  

![AD\_4nXeYodmXwWiRNqglJs71h-RkW06Q7J\_epyQGpDkWphAh2bMQJFbF23L8czPs2mEAW\_jQPaDgg44kC4TeO\_8YWJ1ll8U\_GtzUi7-5yWPCn1tKorwIekDJoNqId5MN2-tyRNJV0t04Ow?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-101/03.jpg)

  

![AD\_4nXcLkGbApCy6SQkC\_XIlFwpOcgPxo8EfaCiHbEe1ByP9emgyRi1MCXyFLZ-iZVBTmT-ZPfUDFSzbqhIfMyFtcTYI5HwteUWEcHyufFJXokc-t\_\_wvAoKKPT2LWCbTY9RY7z1RZfIcw?key=f5bGmQgfqT0HOh9rdSPm2A](/writing/chaesang-101/04.jpg)
