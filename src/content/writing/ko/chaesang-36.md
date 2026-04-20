---
title: "RISC vs CISC"
date: 2024-01-18
lang: ko
summary: "기억 속의 첫 기계어는 컴퓨터학습에서 예제로 접했던 SPC-1000 에서 돌아가는 몇몇 게임용 코드들이다. 마법 주문처럼 길게 적혀 있는 16진수로 되어 있는 값들을 하나하나 집어 넣고, 마지막에 call 을 수행시키면 뭔가 되거나 아니면 껐다 켜야 하거나 둘 중 하나의 결과로 기억하고 있다. 무슨 의미인지는 몰랐고, 모눈 종이에 색칠 해 가면서 모자이크처"
tags: ["memoir", "retrospective"]
series: "90s-com-eng"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/36
draft: false
---

기억 속의 첫 기계어는 컴퓨터학습에서 예제로 접했던 SPC-1000 에서 돌아가는 몇몇 게임용 코드들이다. 마법 주문처럼 길게 적혀 있는 16진수로 되어 있는 값들을 하나하나 집어 넣고, 마지막에 call 을 수행시키면 뭔가 되거나 아니면 껐다 켜야 하거나 둘 중 하나의 결과로 기억하고 있다. 무슨 의미인지는 몰랐고, 모눈 종이에 색칠 해 가면서 모자이크처럼 뭔가를 만졌던 기억은 있는데, 이는 생각해 보니 font, 흑백 그림일 지언정 instruction 들은 아니었던 것 같다.

  

### MASM ( Microsoft Macro ASseMbler )


제대로 된 기계어와의 첫 만남은 학부 2학년 때 시스템 프로그래밍 과목에서 기말 과제로 만난 MASM 이다. 프로그래밍 언어는 if then, for, print 등으로 어찌어찌 되던 것들만 보다가 완전 기계어도 아닌 어셈블러? 어셈블리어? 라는 것을 외계어처럼 보이는 것을 알게 되었고, 이를 구현하는 과제를 아주 오랜 시간 인내심으로, 매우 큰 switch 문으로 한땀한땀 풀어 내었던 나름 뿌듯했던 기억들이 있다.

  

### RISC ( Reduced Instruction Set Computer ) vs CISC ( Complex Instruction Set Computer )

  

여러 기억들이 섞여 있는데, 구조 관련 수업 시간에 배운 RISC 의 태동은 매우 감동이 컸었다. 집에 있는 컴퓨터랑 다르게 저 멀리 있는 것에 대한 더 좋은 컴퓨터라는 생각과 이걸 가능하게 하기 위해 1. CPU 내에는 pipeline 이라는 것들을 집어 넣으면서 여러 개의 명령을 동시에 실행할 수 있게 자리 배치를 하고

![https://en.wikipedia.org/wiki/Classic\_RISC\_pipeline](/writing/chaesang-36/01.jpg)

*https://en.wikipedia.org/wiki/Classic\_RISC\_pipeline*

2\. 각종 부작용(hazard)들에 대해서 필요한 조치들을 취하고, 3. 이를 가능하게 하는 향상된 컴파일러의 기술들. 4. 이를 maximize 해 주는 건 cache. 시험 문제들도 각종 hazard 들을 어떻게 대응할 건지 뭐 이런 것들을 어느 과목에서인가 적으면서, Synopsys VHDL 을 가지고 실제 회로들도 만들었던 기억들도 있는 거 보면...

  

반대편 진영의 Intel 쪽의 CISC 대비해서 뭔가 아름다운 스토리라 생각했더랬지만, 이후 CISC vs RISC 는 좀 허무하게 지나갔던 기억이다. 일단 개인적인 시각으로 RISC 가 instruction 수가 절대 적지 않아서 이게 무슨 reduced ? , 인텔의 Pentium 들은 CISC 지만 RISC 들을 차용해서 쓰고, PowerPC 는 망하고.(?).. 등등.. 굳이 쟤네들이 싸울 필요도 없는 거였잖아..? 라는 면에서 부질 없더라는 기억이다..

  

### ARM / StrongARM / ARM7 / xScale

  

이 RISC 는 이후 embedded linux 를 다루게 되면서 ARM 을 통해서 다시 만나게 된다. ARM 은 Advanced RISC Machine 혹은 Acorn RISC Machine 이었고, [iPAQ](https://en.wikipedia.org/wiki/IPAQ) 을 정점으로 추억이 된 회사인 팜팜테크에서 여러 CPU 들을 따라 다니면서 Linux Kernel , compiler , device driver 등을 계속 만졌더랬다. ARM assembly 도 꽤 했었던 거 같다. 여기의 R 이 RISC 였다는 것을 당시에 기억하고 있었더랬는데, 꽤 오랫동안 기억에서 사라졌다가 지금도 ARM 이 언급되는 거 보면서 살짝 꺼내어 본다. 이제 더이상의 R은 RISC 의 R 이 아니고, ARM 의 R 이랄까..

  

무려 Intel 에서 xScale 이라는 새로운 CPU 를 만들어서 그걸 초기에 써 보며 CPU clock 을 동적으로 바꾸는 과제들이 기억나고, Linux 를 가지고 만들려고 했던 스마트폰, QT, [자우루스](https://en.wikipedia.org/wiki/Sharp_Zaurus) ... 이 기억들은 이후 Symbian 과 Google 에서 Android 까지 연결이 된다. 이 이야기는 2000년대 이야기이니 다른 곳에서...

  

ps. Wikipedia 와 나무위키에 관련 내용들이 잘 정리되어 있는 것들을 보면서 당시의 정보들을 모으기 위해 했던 수많은 노력들이 다시 지나간다.... 당시의 인내심이 지금의 나를 만드는 데 긍정적인 영향을 주었을 거라는 생각을 해 본다.
