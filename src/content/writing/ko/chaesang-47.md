---
title: "WCET (최악 실행 시간) 분석"
date: 2024-02-03
lang: ko
summary: "90년대 후반 대학원 꼬꼬마 석사 과정을 진행하면서 맡았던 주제는 WCET ( Worst Case Execution Time ) analysis 였다. Wikipedia ( https://en.wikipedia.org/wiki/Worst-case_execution_time ) 에는 2008년부터 보이는데, 내가 이 과제를 연구실 선배들로부터 전해 받으면서"
tags: ["memoir", "retrospective"]
series: "90s-com-eng"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/47
draft: false
---

90년대 후반 대학원 꼬꼬마 석사 과정을 진행하면서 맡았던 주제는 WCET ( Worst Case Execution Time ) analysis 였다. Wikipedia ( [https://en.wikipedia.org/wiki/Worst-case\_execution\_time](https://en.wikipedia.org/wiki/Worst-case_execution_time) ) 에는 2008년부터 보이는데, 내가 이 과제를 연구실 선배들로부터 전해 받으면서 공부했던 게 이미 1995년이었으니.. ( [https://ieeexplore.ieee.org/document/392980](https://ieeexplore.ieee.org/document/392980) ) 그 사이의 시간대가 좀 비어 있긴 하겠다. 조금 어려운 이야기가 앞쪽에 하나에 세상 일 모른다는 일 두 가지 이벤트들..

  

대략 기억을 더듬자면, RTOS 세상에 여러 개의 task 들이 각각 함수를 기준으로 수행이 될 때 '잘 예측된 값'을 실행하기 전에 알 수 있으면 효율적인 scheduling 이 가능하다.. 라는 것이었고, 컴퓨터 구조를 simulator , cache emulation 등을 이용해서 '프로그램'을 만들고, 이론적인 방법들로 풀어 나가는데, 벤치마크로 사용된 소스코드와 그것의 compile 된 코드를 입력으로 받아 worst case scenario 를 만들어서 예측해 내는 방식이다. 마지막 비교는 MIPS workstation 에서 돌려 비교하는 것까지.

  

### Safer , Tighter , with Reasonable Cost

  

예측하는 방법론으로서 위의 3가지 덕목을 맞추어 나가야 하는데, 1차원 적으로 code path만 보고 판단하던 시기에서 instruction / data cache 를 emulation 하고, superscalar processor 같은 다양한 pipeline을 emulation 하면서 tight 하게 만들어 가는 게 선배들의 연구. 거기에 내가 보탠 것은 loop bound, loop 내의 condition 을 더 전해 주면 특정 benchmark 에서 조금 더 tight 해 진다는 주장(?). 이후 연구실 교수님들과 선후배님들은 NAND flash 등으로 확장해 나간다.

  

정확히 기억나지 않지만, insertion sort 의 경우 N^2 로 over bound 되는 것을 줄여준다 정도여서 몇몇 특정 benchmark 에서 효용이 있더라 정도의 적당한(?) 결말인데, 이를 위해서 컴파일러를 여러 phase 뜯어 고치고, MIPS cross compiling 등의 노하우들을 쌓았던 기억들. 실제 controller 들에 MIPS 등이 내려오게 될 때 쓸모 있는 scheduling 일 수 있겠지만, 학교에서의 연구는 현실과 좀 거리가 먼 걸 하기도 했으니... 석사 과정에서 배움이 짧아 고생을 많이 했었지만, 저 목표들은 아직 기억이 좋게 남아 있다. 엔지니어링 스럽지 않은가...

  

### 세상 일 모른다 (1) - 에너지 도메인으로

  

방법론의 핵심은 각 instruction 별로 일어나는 behavior 들을 각종 simulation / emulation 을 통해 binary code level analysis 를 하는 것이고, 마지막 결과물의 단위는 nano second, clock 수 등이었다. CPU 가 달라질 때마다 다른 것들을 구현해야 했기에 abstract machine layer 를 구현하고 여러 시스템을 펼쳐 놓고 비교하는 일들을 많이 했는데, 고전적인 기계에서의 오차 대비해서 복잡한 시스템의 새로운 instruction 들을 다루는 데 한계가 많았고, 새로운 CPU 는 cross compile 이 잘 안 되어 거기서 오는 난이도 등등...

  

아마도 90년대 후반에 갑자기 CPU 의 발열, 에너지 소모 등이 화두로 뜨게 되었다. 에너지 소모는 원래 있던 이슈들이었겠지만, 모바일, 임베디드가 되면서 다시 화두에 미리 돌려 보기 전에 사전 검사의 의미로 이 앱을 실행시키면 밧데리가 얼마나 소모하는지를 미리 측정하고 계획을 잡는데, 거의 같은 개념을 적용하게 된다. 컴파일된 코드를 사용하는데 있어 명령어별 에너지 소모량을 고려해서 곱하기 대신 더하기로 풀어 쓰게 하는 기법들이나 조금 느리더라도 에너지 소모가 적으면 유용한 세상이 벌어지게 된다. timing 대신 energy 로 놓아도 쉽게 적용이 되던 걸 보면 교수님들을 비롯한 대가들의 이해 방식에는 보고 배울 점들이 많다는 생각이다.

  

### 세상 일 모른다 (2) - scaling

  

이후 회사에 다니면서 학문의 영역과는 점점 멀어지게 되었지만, 당시가 또 폭발적인 정보의 양과 함께 패러다임의 전환의 시기를 맞으며, 또 많은 깨달음 혹은 부질없음을 겪게 된다. 위의 접근들은 겨우 5% , 10% 예측을 올려서 utilization 을 그만큼 올리자 뭐 이런 노력들이었다면, 주변의 환경들은 무지막지한 방식들로 변화해 왔다. 특히 메모리가 부족하면 하나 더 키워서 쓰면 되고 뭐 이런 것들도 나름 scaling 이라 부를 수 있겠지만...

  

얼마전 깨어지기 전까지 무어의 법칙은 계속해서 사용량을 늘려 왔고, 다양한 병렬처리들이 가능하게 되면서 , 이제 와서는 '누구나' (비용만 감당할 수 있다면) 전 세계의 문서들을 가지고 학습 시킬 수 있게 되었고, 밧데리도 신소재 리튬이온은 이전의 것들 대비 순식간에 10배 이상의 용량까지 지원하게 되면서 몇 %씩 이삭 줍듯 모으던 노력들이 머쓱하게 되는 상황이 되어 버렸다. 변화의 한복판에 여전히 있어 신기하면서도 마냥 즐겁지 않은 건 사실이지만, 다른 의미로 세상 일 모르는 것이리라 싶다. 10년쯤 후에 다시 돌아보자..
