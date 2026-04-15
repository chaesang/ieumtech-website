---
title: "인공지능과 추천 시스템 강의 노트 - (16/16)"
date: 2024-01-09
lang: ko
summary: "마지막 수업. 밀린 발표들 때문에 1시간 여건 되는 사람들을 일찍 시작하게 만들었음. 여전히 10시 이후까지 밀릴 수 있어 따로 recap 할 시간이 여의치 않을 거 같았다. 나름 한 학기를 마무리하는 메시지를 전할 수 있으면 하는 생각에 고민들을 많이 할 수밖에 없었다.  준비한 자료들 16주 강의 update AI 쪽은 급변하는 논의들 중에 가장 언급이"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/25
draft: true
---

마지막 수업. 밀린 발표들 때문에 1시간 여건 되는 사람들을 일찍 시작하게 만들었음. 여전히 10시 이후까지 밀릴 수 있어 따로 recap 할 시간이 여의치 않을 거 같았다. 나름 한 학기를 마무리하는 메시지를 전할 수 있으면 하는 생각에 고민들을 많이 할 수밖에 없었다.

  

## 준비한 자료들

### [16주 강의 update](https://docs.google.com/presentation/d/134han64VRy1-vwGp4oRab1j8ehuJ2xZDstPkaMtO_u4/edit#slide=id.g1168ad8df56_0_7)

![1\*7qDouSLe9G2bmCC\_iPRNcQ.png](/writing/chaesang-25/01.png)

AI 쪽은 급변하는 논의들 중에 가장 언급이 많이 되고 앞으로도 그럴 단어들의 조금 명확한 정리들. LLM, LMM, SLM, frontier AI 등. 그리고 금융 쪽에서 실제 벌어질 예상되는 미래와 관련된 이야기들을 나누었다. ChatGPT를 잘 쓰는 개발자가 그렇지 못한 개발자보다 대우를 더 잘 받고 살아 남을 거라 생각했던 미래와는 다른 의미로, 챗봇 세상의 경우 감소된 인원들이 자기의 의지와 상관 없이 난이도 — 진상 대응 빈도 등 — 가 높아지는 일들이 떠밀려 발생하게 되었다. 사회적인 공감과 합의가 필요할 듯하다.

  

## 과제 발표들

### [식사 메뉴 추천시스템에 대한 overview](https://docs.google.com/presentation/d/1NIRYbzupunZKW3pXrvWEUA10dfgll0bc/edit#slide=id.p10) by 김기태

2017년에 발행된 [An overview of recommender systems in the healthy food domain 논문](https://link.springer.com/article/10.1007/s10844-017-0469-0)의 분석. 교과서에서 다루었던 내용의 음식 버젼으로 간단한 복습. 식당 추천과 음식 추천이 다른 내용이고, 음식 추천의 경우 결과물이 아주 무난한 것들에 머무를 수밖에 없고, diversity를 추구할 성질의 일들이 벌어지지는 않는 제품들이었음. 음식 추천 자체를 목표로 삼기보다는 다른 서비스에 킬러 피쳐 등으로 자리잡기를 추천하고 있고, 이는 최근 망고플레이트 사업 중단과 함께 시사하는 바가 있음.

  

### [퇴직연금 로보어드바이저 분석](https://docs.google.com/presentation/d/1HRbBgg-Oeomh8vym6-cOxwIvZp1mulSN/edit#slide=id.p1) by 박도윤

로보어드바이저의 연금 버전. 노후자금 운용이라는 특수성으로 운용상 규제가 많은 것 이외에 같은 이야기들. 방법론이야 어찌할 수 없다 해도 아직 사람 혹은 시장이 하는 것보다 더 나은 가치를 주지 못하고 있고, 포트폴리오를 다이나믹하게 바꾸어 가는 것에 대한 절대적인 비법이 존재하지 않는 한 전문가가 하는 것보다 더 ‘나은’ 방법은 결국 존재하지 않고, 선택지를 넓히는 용도에서 쓰임이 있지 않을까.

  

### [“Corporate Disclosure” by AI](https://drive.google.com/file/d/1qNYhYojH7dlUD-qROrdxtZkj332IS5tM/view) by 유지욱

상장사들의 기업 공시에 대한 이야기. 여러 규제 이슈로 문서들이 올라오고 XBRL 표준 포맷으로 모이면서 정확성, 효율성, 투명성 및 비교 가능성이 제고됨. 이는 표준화 혹은 잘 정제되는 데이터가 업권에 주는 효용으로 이해하는 게 맞을 등. 공시, 감사의 관점에서 요약 이외의 추가적인 일들을 Gen AI 에게 맡기고 보는 게 어려움. 가끔 생성하는 리포트 속에서 미처 발견하지 못한 뷰들을 볼 수 있는 점들이 있겠으나 책임을 지는 쪽에서는 여기까지가 끝이라 생각함. 상장사들은 이미 충분한 정보들을 주고 받고 공유하고 있기에 추가적인 이득이 적을 것임.

  

### [생성형 인공지능을 활용한 투자정보 서비스](https://drive.google.com/file/d/17LwCyteTXjoyX1IgKoARE8Zda-phH4Gk/view) by 장준호

FineTuning , RAG 등을 이용해서 투자정보를 알려줄 수 있는 챗봇-like 서비스를 만들어 보는 기획 제안서. 실제의 사례를 볼 수 있었으면 하는 생각이지만, 아쉽지만 그 전의 latest survey 정도까지의 내용. 현재로서는 뉴스나 구글에 물어 보면 쉽게 나오는 내용과 차별점이 크지 않고, 제품의 포지션을 생각한다면 전문가의 비서의 포지션일지 일반인이 쓸 수 있는 ‘싼’ 전문가의 포지션일지에 따라 영역이 달라질 듯. 어느 경우가 되더라도 특히 RAG 의 경우 최신 데이터들을 모으는 노력이 모든 시스템의 중심에 있어야 할 것임.

  

### [AI 반도체](https://drive.google.com/file/d/1dNzT6OHHbAHWE0elhcT5A4UFfq2Rnoh9/view) by 정성욱

Nvidia 의 GPU 독식 이후 폭증하는 수요를 NPU 혹은 AI 반도체들이 채우려는 노력들. 오래 전에 TPU 를 시작으로 onprem 혹은 inference 에 특화된 버젼으로 Sapeon, FuriosaAI, Rebellions 등이 역할을 하려 함. 아직 시장에 주요 player 로 자리잡기 전이지만, Attention 이 주류로 고정되면서 on-prem 혹은 Hybrid cloud 의 형태로 수요를 만들어 나가는 중. 개인적인 의견으로는 커지는 Pie 의 끼워 파는 빈틈을 메꿔 나간다는 전략에 망하지는 않겠구나 정도.. 여러 업체들이 제안하지만, 따로 edge 를 주장하기 쉽지 않겠다 정도의 의견. 사용자의 입장에서 chip 은 따라 오는 번들 같은 느낌.

  

### [AI생성 창작물 관련 트렌드 분석](https://docs.google.com/presentation/d/1qdlbvHCRksjzTjXyMAplnylA-TJaLV2f/edit#slide=id.p1) by 이승국

창작자를 도와 주는 역할 이상의 것들을 AI 가 할 수 있는지 등을 정리한 영화, 작곡, 웹툰 등의 노력들. 실제 창작된 결과물은 엉성하고 감동이 없지만, 도구로서의 위치는 이미 탁월하며 이후 헐리우드 파업 등과 연관되지만 부익부 빈익빈 등으로 무명작가나 무명 배우 쪽의 자리들은 점차 공격적으로 대체되고 있음. 개인적으로는 AI painter , MusicLM 등이 노동 집약적인 혹은 신경을 덜 써도 되는 쪽에서의 에너지를 획기적으로 줄여가는 데 도움을 주고 있다고 생각.

  

### [AI music to Billboard?](https://docs.google.com/presentation/d/1ymbLxERytRCw611LQLEZJZsNhSZwwTiS/edit#slide=id.p1) by 고승현,이휘서,한병훈

Statsofai 의 2024 예측 중에 내년에 빌보드 핫 100을 갈 수 있을 지 확인해 보려는 취지로 여러 툴을 이용해서 음악을 만들어 보는 노력을 해 봄. 최종 결과물들을 만들어 보고 이를 평가하는 것까지. 가사들은 아무래도 유치하거나 밋밋해서 기초 잡는 용도로 적합해 보임. EDM 같은 장르의 기본적인 곡 편곡 등에는 쓸만한데, 막상 완제품의 품질은 한계가 있음. Musia 의 EDM 파티 등에 무난한 정도였지만,

  

오늘의 하이라이트 중 하나인 SunoAI 가 만들어 준 수업과 나에 대한 낯뜨거운 가사 생성과 랩. 막상 보니 공부를 더 시켜야 할 거 같음.

![1\*q2LyN77ddLfjab5Twq6vsg.png](/writing/chaesang-25/02.png)

  

### [생성형 AI(Chat GPT 고급 데이터 분석) 기능 소개 및 실무 활용](https://drive.google.com/file/d/1RyVToRPx4_AFlw9R8NpiQUFJN-UmqJ_i/view) by 문수연,신원상

ChatGPT 4.0 의 고급 데이터 분석 기능을 써 보며 평가한 내용들. 한편으로는 사람이 도구에 적응해 가는 과정을 나타낸 것도 있음. 타이타닉 문제 정도는 자동(?)으로 알아서 분석해 주고 있고, 시계열, OCR 등은 별도의 툴을 사용하지 않아도 되는 상위호환의 도구로 사용 가능. 모든 툴을 대체하려는 것까지는 욕심일 수 있겠으나 해야 할 일을 명확히 알고 있는 경우 여러 앱들을 돌아다니며 copy & paste 해야 하는 것들이 한 데서 해결이 되는 IDE 역할을 수행했음.

  

### [LegalTech(당신은 진실만을 말하라)](https://drive.google.com/file/d/1Uv8EQ7kEXU8FUgf1E6zSPQo4-ZKP1WqV/view) by 손진권

Legal / Compliance 관점에서 AI 의 사용 가능성에 대한 이야기들. 변호사 중개/광고와 판례 검색/통계의 두가지 큰 시장이 있고, 법을 실생활에 한 발 가깝게 하는 데 쓰이고 있지만, 분쟁의 빈도가 높아지는 비용 등을 생각하면 이게 좋은 방향인가에 대한 의문. 여전히 분쟁이 생기게 되면 들어가는 비용이 크기에 분쟁 당 처리 비용이 줄더라도 그만큼 빈도가 늘어난다면… 판단을 맡겨 버리는 것까지는 할 수 없는 보수적인 곳이고 사례들만이라도 잘 이해하고 해석하고 있다면 진입장벽을 낮추는 정도까지는 할 수 있지 않을까 ?

  

### [유튜브뮤직의 추천시스템 퀄리티 개선 과정](https://docs.google.com/presentation/d/13iXpI1Irx-oSJdP6teG9zy6iLHAgqWUA/edit#slide=id.p11) by 서익동/이호연/하대현

최근 2–3년 간 한국에서 폭풍 성장을 한 YouTube Music 의 품질 관리에 대한 노력들. YouTube premium 과의 번들 덕에 시장 점유율이 높아졌지만, 그 이전에 비해 제품의 품질이 같이 올라온 것도 영향이 있는데, 그에 대한 제품 관계자 1인과 사용자 2인의 분석들. Spotify 가 고전하는 한국에서 License 에 이슈가 없는 상태에서 여러 meta data clensing 등으로 효율이 올라온 교과서적인 접근의 성공 사례. 적어도 feature parity 는 타사 대비 열위에 있지 않고, 오히려 instagram./ tiktok 등을 침범하는 역할까지 잘 수행함. 내부 관계자의 도움으로 과거와 현재가 비교되는 자료가 되어 좋았음.

  

[Deep Interest Network for Click-Through Rate Prediction (2017) 논문 분석](https://docs.google.com/presentation/d/1Cse3Z0yorcNiEejgCfDzRQzrtsvjOmqk/edit#slide=id.p22) by 조영민

2017년에 알리바바 쇼핑몰의 개선 사례를 정리해서 발표한 논문. 아무거나 다 파는 쇼핑몰에서의 사용자 방문 이력 등을 vector 로 표현해서 선호도를 찾아 나가는 과정과 이들의 sparse 한 특성을 해석하는 localized function 등의 노력들. MovieLens 가 초기 concept 의 분석용으로 쓰였고, AUC metric으로 비교하는 접근이 유효했음. 개인적으로 eval set 에서 AUC 가 어느 정도 차이가 있는 게 유의미한가에 대한 질문이 있지만 the higher the better 일 거라는 데는 공감함. 뒤에 실제 random generated data 로 이를 구해서 비교해 본 노력들도 있었지만, random data 가 아니었으면 차이가 날 수도 있었겠다 싶었음.

---

1시간 먼저 시작을 했지만, 그래도 10시에 맞춰서 끝나게 되었고, 모두에게는 아니지만 수업을 마무리하는 인사를 할 수 있었다. 여러 아쉬움들도 있지만 하얗게 불태운 게 이런 건가 싶기도 했고, 남은 과제 정리와 학점 제출 등의 숙제들을 하면 하나의 프로젝트가 마무리되겠다 싶어 조금 더 정리하는 노력이 더해지면 연말 연시를 새로이 맞이할 수 있겠다.
