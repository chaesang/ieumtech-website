---
title: "인공지능과 추천 시스템 강의 노트 - (9/16)"
date: 2024-01-09
lang: ko
summary: "3번의 새벽 온라인 수업의 두번째 시간으로, 시차 적응에 난이도가 생겨 버렸다. 과제로 내어 준 내용들을 주중에 심각하게 읽고 의미 있는 피드백을 주기 위해 시간을 들였는데, 시간이 많이 들긴 하지만, 다양한 현장의 snapshot들을 모을 수 있는 기회가 되기를 기대한다.  이번 주에는 과제 발표가 3.5개가 있어 추천 시스템에 라이브 코딩으로 남아 있는"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/18
draft: false
---

3번의 새벽 온라인 수업의 두번째 시간으로, 시차 적응에 난이도가 생겨 버렸다. 과제로 내어 준 내용들을 주중에 심각하게 읽고 의미 있는 피드백을 주기 위해 시간을 들였는데, 시간이 많이 들긴 하지만, 다양한 현장의 snapshot들을 모을 수 있는 기회가 되기를 기대한다.

  

이번 주에는 과제 발표가 3.5개가 있어 추천 시스템에 라이브 코딩으로 남아 있는 부분을 뒤로 미뤄야 했고, 이는 하반기 대면 강의 때 몇 개 cover 해 보려 한다. 지금 huggingface 에서 해 보고 있는 LLM들 써 보고 하는 것들이 정리가 되면 해 보겠는데, 뭘 좀 해 보려면 자꾸 credit 을 쓰겠다고 해서 많이 주저하고 있다. 오늘은 stateofAI 후반부와 정리와 과제 발표들로 채우고 남는 시간이 있다면 Playstore를 준비하고 있는데, 다음 주에는 7개가 예약되어 있고 하는 거 보면 쉽지 않겠다는 생각이다. 학생들이 준비를 열심히 해 오는 것을 말리기도 곤란해서 두다 보니 시간이 어쩔 수 없게 되는 부분도 있는 거 같다.

  

## 준비한 자료들

### [9주) 강의 update](https://docs.google.com/presentation/d/1qq2lUMxNGtwtuXJoM_5lEsbVyZMK1yDJUEDxKpMeq0I/edit#slide=id.g1168ad8df56_0_7)

![](/writing/chaesang-18/01.png)

뉴스 상으로 금융 쪽에서 카카오뱅크 사건 이상의 것들이 눈에 들어오지 않았고, 금방 올 거 같았던 저작권쪽 소송이 나왔는데, 특정 회사가 특정 서비스만 콕 찍어서 내고 있는게 눈여겨 볼 지점이라 생각한다. 개인적으로 구글 검색에서의 경험으로 문서의 양보다 authority있는 문서들의 quality 등이 이슈가 계속 될텐데, 특정 사안들, 잊혀질 권리 등을 결국 아주 오래 전의 robots.txt , sitemap 등으로 거슬러 가야 할텐데, re-indexing vs re-training 에서 견적이 안 나오게 될 듯하다. LLM 앞단에 검색이 붙어 있어야 할텐데, 그건 구글이나 빙 정도나 할 수 있는 것일테여서 뭔가 또 빙빙 도는 느낌이랄까…

  

### [stateof AI report — research](https://docs.google.com/presentation/d/156WpBF_rGvf4Ecg19oM1fyR51g4FAmHV3Zs0WLukrLQ/preview?slide=id.g24daeb7f4f0_0_3470)

후반부 industry 쪽을 같이 나누었다. 학생들의 1/3 정도는 누가누가 잘하나를 이미 꿰고 있었고, 여러 업체들이 언급되었다. 생각지 않은 Generative AI 의 돌풍으로 인해 아주 많은 돈들이 과하게 필요하고, 이는 Nvidia 로 흘러가는 모습들, 그리고 도대체 수익이란 건 어떤 형태로 나오게 될 것인가에 대한 궁금증들.. 예전에 구글이 검색을 잘 한다고 했을 때 보였던 수많은 ‘구글 검색 결과를 scraping 해서 검색에서 승부를 보겠다' 던 업체들, 그리고 구글의 많이 무모했던 custom search project 라고 적고 있는데, 요새 다른 프로젝트로 다시 태어난 듯… [https://programmablesearchengine.google.com/controlpanel/create](https://programmablesearchengine.google.com/controlpanel/create)

[**로그인 - Google 계정**

https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fprogrammablesearchengine.google.com%2Fcontrolpanel%2Fcreate&followup=https%3A%2F%2Fprogrammablesearchengine.google.com%2Fcontrolpanel%2Fcreate&ifkv=ASKXGp25yKV7FaCFOkScrGaYdu3PlBreNSk7leDx2gjhTq\_Z5mmWDNL\_\_Zi75hNmC33S6XPrTCXpTQ&passive=1209600&flowName=WebLiteSignIn&flowEntry=ServiceLogin&dsh=S-855517276%3A1704770624498222](https://programmablesearchengine.google.com/controlpanel/create) 

  

### Break:

오늘은 별도의 비디오를 준비하지 않았다. 몇 개 공유했으면 하는 게 있는데, 이후 구글 스토리들 풀 때 같이 나눌까 한다.

  

## 기말 과제 발표

### [(Request only) “소셜 트레이딩”에서 주식 종목 추천 시스템](https://docs.google.com/document/d/17zy_cRbVJOZHS4ETb5hSjc0x56CRPP0h/edit) by 한민우

지난 주 끊어졌던 ‘천하제일 투자왕' 이야기. 감추려는 자, 자랑하려는 자, 어떻게든 카피하려는 자 등 서로 다른 목적을 가진 사람들이 모여 있는 조금은 기이한 서비스인데, 코인 쪽은 훨씬 더 extreme 한 형태의 돈놓고 돈먹기의 성질인 듯하다.

  

뱅크샐러드에서 고수들의 투자전략이라고 해서 보여 준 aggregate 된 종목은 사실 그다지 감동이 없었더랬고, 각종 평범한 증권사 홈페이지에서 보이는 종목 추천에 별다른 점이 없어 왔었다. 증권사들이 자기네 앱 혹은 서비스들을 쓰게 하기 위한 수단으로는 인정하지만, 다른 용도로 커뮤니티를 해결하거나 하기에는 다양한 사용자들의 욕망을 담아 내기가 많이 어렵다는 생각이다. 특히 ‘이대로만 하면 너네도 부자 된다' 라는 게 얼마나 부질없을까 하는 개인적인 생각이기도 하다.

  

### [AI Loss Prevention Solution on Self-Checkout](https://docs.google.com/presentation/d/1Vwj4znxtqkxWidBw1rxVRUbd5khcoZKC/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true) by 조용규, 홍지훈

무인계산대의 운영에 묵묵히 참전 중인 효성에 다니는 학생들의 시장 분석과 여러 챌린지들에 대한 정리들인데, ‘완전 무인'이 가능한가 에 대한 의문을 향해 가는 몇몇 접근이라 하겠다. 동영상을 찍으며 이상 징후를 찾아 내자는 건 많이 무모하기도 하지만, 보조적인 수단으로서라도 필요한 건 맞고, 실제 점원들의 일탈로 인한 도난 등이 baseline 인 걸 생각하자면 이또한 어쨌든 신경 써서 필요한 영역이긴 한데, 다른 한 편으로 이런 시스템을 받아들일 수 있는 곳이 중형 이상의 마트라는 것도 어려운 지점이겠다.

  

최근 아마존고가 다른 형태로 운영되는 — 물건의 수가 적지만 throughput 을 높여야 하는 event shop 같은 — 곳에서 의미가 있는 것을 보면 일어나는 현재 혹은 가까운 미래인 건 맞는 거 같고, 어느새 셀프 계산을 사용자 입장에서 자연스레 받아들여 버렸다 생각을 하면 그것도 괜찮겠다 싶었다. 실시간으로 도난 발견까지는 멀겠지만, 보조적인 수단으로 카메라 수를 줄이면서 적은 시스템에서 문제를 푸는 수준까지 가지 싶다.

  

### [AI with 자산운용](https://docs.google.com/presentation/d/1Fy4SXF0FXuiPl5VtbxHaIk3iFizdDXkc/edit?usp=drive_link&ouid=104177486172188740976&rtpof=true&sd=true) by 노승갑,전성희

자산 운용은 그 토픽 자체가 블랙박스의 영역이고 기계를 쓰던 안 쓰던 알아서(?) 투자를 하는 세상에 가깝고, 이쪽은 남들이 못하는 걸 내가 할 수 있어야 빛을 발하지만, 그 경우 또 반대로 당기는 질서가 있는 등 100% 믿고 알아서 맡기는 세상이 오지는 못할 거 같다.

  

은행권이 빠졌지만, 자산 운용하는 사람들의 노동을 줄여 주는 쪽으로는 확실히 발전되어 가고 있고, 선택지를 넓혀 주는 용으로는 여전히 의미가 있다 하겠다. 단지 공개되어 있는 정보들과 뉴스나 공시 정도 이 또한 많은 경우 해석이 같기에 특별한 장기적인 면에서 부가가치의 영역이 되기 어렵고, 오히려 초단타, 트위터의 buzz 시그널에 연동 등의 영역이 말이 되는 내용이겠다 싶다는 생각이다. LLM 이건 뭐건 이쪽도 세상에 돌아다니는 정보들에서 어떤 ‘특이한' 것을 더할 것인지가 궁금해 지는 시점이었지만, 많은 경우 영업 비밀의 영역이겠다 싶었다.

  

### [사내 데이터 모델 추천 시스템](https://drive.google.com/file/d/1C04SvXf4dnA4SoZPVs3mPrMy2OOZMEC4/view?usp=drive_link) by 남호승

사내에 여러 가지 이유로 비용을 들여 테이블이 유지되고 있는데, 분석하는 사용자들이 굳이 찾아 보지 않는다는 문제 의식이었는데, 그래서 테이블의 20% 정도만 이용이 되는 게 문제의 시작이라는 발표인데, 개인적으로 문제가 공감이 가지 않아서 comment 주기가 어려운 과제였다.

  

추천을 살짝 넓은 의미로 놓아야 할 것이고, ‘이런 이런 테이블이 있으니 혹시 네가 필요할 수도 있어' 라는 의미의 추천일텐데, 이게 새로운 뭔가를 해야 하는 사용자에게 어떤 의미로 다가가야 하는가 등에 질문이 있었다. 사내의 상황을 100% 이해할 수 없던 한계가 있었지만, 한 발 물러서서 table 의 discovery 와 literacy 는 많이 어려운 이슈임에는 분명하고, ML 에게 다 넣어 놓고 알아서 해 놓으라고 하는 것도 함부로 할 수 없는 성질의 것이라는 생각이었다.

  

## 마무리하며

오늘도 과제 발표가 길어져서 시간이 많이 쫓겼고, Playstore 이야기는 오늘도 하지를 못했지만 거의 3시간이 다 사용되었다. 몇몇 학생들이 구글 이야기들을 좀 더 궁금해 하던데 다음을 기약해야 하겠다. 다음 주는 7개의 발표가 있는데, break 을 빼고 진행해야 할 거 같고, 주중에 숙제가 많아지겠다 싶다.
