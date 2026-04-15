---
title: "한국 IT 용어 이야기 (14) - \"옵스(Ops)\""
date: 2026-02-17
lang: ko
summary: "구글 밖을 나오면서 혹은 한국에서 일을 하게 되면서 시가가 겹쳤는지, Ops 라는 단어를 직군에서 팀 이름에서 꽤 많이 접하게 되었다. Operation 을, 한국 말로는 '운영'을 뜻하고 그래서인지 꽤 많은 곳에서 일반적인 의미를 포함해서 쓰이는데, 기대하는 바들이 서로 달라 영역을 정리하면서 오해들이 종종 있어 왔다.  시작 - DevOps  구글에서"
tags: ["it-term", "language"]
series: "itterm"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/153
draft: false
---

구글 밖을 나오면서 혹은 한국에서 일을 하게 되면서 시가가 겹쳤는지, Ops 라는 단어를 직군에서 팀 이름에서 꽤 많이 접하게 되었다. Operation 을, 한국 말로는 '운영'을 뜻하고 그래서인지 꽤 많은 곳에서 일반적인 의미를 포함해서 쓰이는데, 기대하는 바들이 서로 달라 영역을 정리하면서 오해들이 종종 있어 왔다.

  

## **시작 - DevOps**


구글에서 한창 일을 할 때 가까운 곳에 SRE(Software Reliability Engineer) 라는 직군이 있었다. Software engineer들 중에서 추가적인 기량을 가진 사람들로 접했고, 서비스가 잘못될 경우에 가차 없이 rollback 시키는 사람들로 대개 처음 접하게 되었다. 추가적인 보수를 받는 대신 24/7 에 참여를 하는 당번이 정해지는 사람들, 만능에 뭐든지 다 찾아내는 기량을 가진 사람들의 이미지가 여전히 있다. 이후에 구글 밖에서 비슷한 단어(?)로 DevOps 라는 말을 접하게 되었다. 조금 정확하게는 DevOps engineer 라고 불리는 사람들이 있었는데, SWE 들과 기량은 비슷한 거 같기도 하고, 하는 일도 비슷한데, 굳이 빅테크가 아닌 곳에서 굳이..? 라는 생각들을 꽤 했었더랬다.

  

이 둘의 관계는 SRE의 교과서로 불리는 [https://sre.google/workbook/table-of-contents/](https://sre.google/workbook/table-of-contents/) 의 첫 페이지에서 꽤 명확하게 이야기 해 준다.

  

**"class SRE implements interface DevOps"**

  

[https://sre.google/workbook/how-sre-relates/](https://sre.google/workbook/how-sre-relates/)

[**Google SRE - SRE vs DevOps, Similarity and Difference**

https://sre.google/workbook/how-sre-relates/](https://sre.google/workbook/how-sre-relates/) 

  

개발자들이 만들어 놓은 것을 툴툴거리며 떠맡아서 매일 모니터링 화면을 보고 상태를 보는 게 주 업이라고 하기도, 개발자들이 필요한 helm 등의 환경을 꾸미는 것이 주요 기량이라고 하기도, 개발 빼고 다 할 줄 알아야 한다고 하기도, 그냥 이것저것 다 해 보고 싶은 거 마음대로 해 보자 하는 사람들의 집합이기도 하고, 최근에는 특정 클라우드를 console 에서 아무거나 해 볼 수 있는 기량을 가진 사람들이라고도 했다. 빅테크 안에서는 no more silos, measure everything 등의 기업 문화에 조금 더 닿아 있었던 기억이었고, 직접 무언가를 손에 묻히는 것보다 누구라도 동의할 수 있게 바를 설정하고 코드 등의 도구들을 만드는 쪽에 조금 더 닿아 있었던 기억이다.

  

## **MLOps**


세월이 많이 지나지 않아, 지금 대비 초기의 machine learning 이 흥할 때 접하게 되었다. machine learning 이 구동되는 시스템이 있을 경우 model 을 만들기를 제외(?)한 모든 것들을 해 주는 사람들로 이해가 되었고, 실제 운영 환경에서 model 이 deploy 되고, 실행되고, 조금 더 나아가서는 data pipeline 을 다루는 일과 continuous training 까지 cover 하는 걸 영역으로 삼고 있었다.

  

개발자가 만들고 운영까지 해야 한다는 고정관념의 연장으로 한편으로는 모델을 만드는 사람이 다 해야 하지 않나..? 하는 생각이 강했더랬다. 물론 모델 만들어서 테스트하는 게 어렵고, 그걸 deploy 하기까지 evaluation과 quality check 등이 난이도가 높겠다는 생각인데, 다른 한편으로 그거 모르고 operation 들을 할 수 있다고..? 라는 생각도 있다. 일단 일의 양이 많으니 풀타임으로 별도의 개발자 혹은 유사한 자원이 필요하냐 이슈가 있을테고, 혹은 이걸 해 주겠다는 여러 서비스들이 있는데 그걸로 되겠느냐, 그걸 또 운영하는 별도의 기술들을 가진 직원을 또 뽑아야 하느냐 등의 이슈들이 있었다.

  

이미 위의 DevOps 랑 꽤 다르다. Ops for ML 이 적당하겠는데, 그래서인지 경력에 MLOps 가 적혀 있는 사람들이 spectrum 이 꽤 넓었던 기억이다. 데이터 전처리만 하던 사람들도, CI/CD 만 만지작 거리던 사람들도 살짝 핫한 키워드로 이 범주에 포함되어 있었다.

  

## **AIOps**

  

ChatGPT 이후 AI = LLM inference 로 통용되며 MLOps 가 AIOps 로 진화되어 왔다. fine tuning 이 필요할 경우 앞의 MLOps 와 같은 track 으로 있다가, RAG 가 흥할 때는 knowledge base 들을 관리하는 형태로도 통용되어 왔고, 소위 AI 라는 이름으로 뭔가를 운영하겠다고 하는 여러 서비스, 팀 등이 살짝 두리뭉실하지만서도 필요한 일들을 하게 될 때 뭉뚱그려지는 형태로 이 키워드를 사용하고 있었다.

  

다만 최근에 가트너에서는 AIOps 를 살짝 다르게 정의를 해 놓았다. AI for IT Ops 를 밀고 있고, 보다 넓은 의미로 (회사에서) 뭐든 AI 가지고 하는 거면 AIOps 로 부르자는 느낌? 생산성 도구들이 AI 든 agent 라는 이름들로 어떻게든 재편이 될텐데, 위의 AIOps 랑은 꽤 결이 다르다.

[https://www.gartner.com/en/information-technology/glossary/aiops-artificial-intelligence-operations](https://www.gartner.com/en/information-technology/glossary/aiops-artificial-intelligence-operations)

[**Definition of AIOps (Artificial Intelligence for IT Operations) - Gartner Information Technology Glossary**

AIOps combines big data and machine learning to automate IT operations processes, including event correlation, anomaly detection and causality determination.

https://www.gartner.com/en/information-technology/glossary/aiops-artificial-intelligence-operations](https://www.gartner.com/en/information-technology/glossary/aiops-artificial-intelligence-operations) 

  

## **더 많은 Ops들**


그밖에 만난 여러 Ops 들을 아래에 모아 본다. 팀의 이름으로 혹은 직군으로 혹은 제품군을 나타내는 이름으로 쓰이고 있는데, 서로 다른 취지였는데 단지 Ops 라는 단어가 포함되어 한데 모이는 취급을 당하는 게 낯설 수도 있겠다.

DevSecOps

BizOps

DataOps

SaaSOps

CloudOps

TechOps

AgentOps

요즘 보이는 단어들은 특히 실제로 직접 수행하는 사람들을, 단순한 일들을 하더라도 의미있게 포장하는 것도 포함되어 있는 거 같다. 개인적인 선입견으로 DevOps 에서 접하던 (문화를 위해) 운영을 위한 도구를 만들던 사람들.. 이라는 건 적어도 한국에서는 다르게 접근해야 하겠다는 생각이다.
