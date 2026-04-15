---
title: "Macro ASM"
date: 2024-02-07
lang: ko
summary: "학교를 한창 다니던 90년대 중반은 MS-DOS , Windows-95 등으로 바뀌어 가면서 개인용 컴퓨터를 계속 포맷하고 바꿔 끼고 했던 기억들이다. 재미 삼아(?) 리눅스라는 걸 설치해 보려 하면 플로피 디스크 20장 들고 바꿔 깔다가 bad block 맞아서 다시 하는 등의 일들이 빈번했고, 과제들 중에서는 2학년 때 System programming"
tags: ["memoir", "retrospective"]
series: "90s-com-eng"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/49
draft: true
---

학교를 한창 다니던 90년대 중반은 MS-DOS , Windows-95 등으로 바뀌어 가면서 개인용 컴퓨터를 계속 포맷하고 바꿔 끼고 했던 기억들이다. 재미 삼아(?) 리눅스라는 걸 설치해 보려 하면 플로피 디스크 20장 들고 바꿔 깔다가 bad block 맞아서 다시 하는 등의 일들이 빈번했고, 과제들 중에서는 2학년 때 System programming 이라는 과목을 접하게 되고, Microsoft Assembly 를 접하게 된다.

  

### **텀프로젝트**

  

한학기를 통으로 할당하는 텀프로젝트라는 것을 처음 접하게 되고, 과제가 MASM(Macro Assembler) 을 만들어서 Intel assembly 로 만들어진 프로그램을 정상적으로 수행하는 것이었다. 수행하는 프로그램들은 터보C 가 만들어 낸 간단한 연산 혹은 소팅을 하는 프로그램들이었던 기억인데, 여튼 MASM 에서 되는 것과 같은 기능을 하는 것을 만들고, 소스코드를 다 찍어서 제출하는 것이었다.

  

팀 프로젝트라고 하지만 일을 어떻게 나눠 진행해야 하는지 등의 경험도 없었고, 기량이 부족하지만 인내심과 노력으로 커버해서 그래도 마무리가 되었고, 50장 정도 되는 리포트를 도트 프린터로 찍어 냈던 기억이다. 학점도 꽤 좋았던 기억인데... 어딘가 왜곡이 있었을 수도 있겠다.

  

### **아주 큰 if else 문과 debugger**


영어로 주어진 txt 파일을 parser 를 구현해서 instruction 따라서, mode 따라서 이런 저런 일들을 하는 것이어서 직관적으로 수많은 if else 문으로 풀어서 했었다. C 로 만들었다고는 하지만, 모듈화 등을 이것저것 고려했을 리가 없었을 거고, copy & paste 를 그래도 열심히 잘 했었을 것이다. 터보C 를 열심히 쓰면서, 이 때 디버거를 자유자재로 쓰는 기술과 인내심을 배우게 된다. 아이러니하지만 머리로 원하는 값들을 정해 놓고 그대로 되게 코드들의 시뮬레이터를 구현하는, 지금 생각하면 살짝 이상한 일들을 연속으로 했던 거 같다.

  

커리큘럼이 아마도 꼬여서, 다음 학기에 자료구조를, 다음 학년에 컴파일러와 파일 시스템을 배우게 되는데, 이 때 구현하게 되는 과제들 역시 scratch 부터 만들어야 했던 거고, 인내심 측면에서는 상대적으로 뒤의 과제들이 할만했던 거 보면, 저 텀 프로젝트가 인생에 도움이 된 거 같다.


### **Ctrl-S**

  

assembly 의 경우 몇몇 코드들은 잘못 만지면 시스템이 재부팅되는 경우가 많았었다. 실제 메모리, 인터럽트 등을 건드려야 했기 때문에 껐다 키는 일들이 빈번했고, 주로 printf 를 하게 되는 경우 당하게 되었더랬다. 디버그 모드이건 아니건 자주 껐다 켰던 기억이다..

![blue-screen.jpg](/writing/chaesang-49/01.jpg) 아마도 이 중 하나였겠지..

지금은 상상하기 힘들지만, 당시의 에디터들은 자동 저장 기능이 없기도 했었고, '저장을 하지 않아 날려 먹는' 일들이 빈번하던 시절었다. 심지어 저장을 해도 park 명령을 해 놓고 power-off 를 하지 않으면 안전이 보장되지 않던 시기이기도 해서 뭔가 해 놓고 위의 화면을 만나서 껐다 켜지는 일들이 자주 있었다. 저 인내심과 함께 ctrl-S , 날짜 별로 version / backup 등의 습관을 나름 성실하게 했던 거 같은데, 요즘 세상에 그런 거 하등 필요 없는 거 보니 새옹지마 싶기도 하다.

  

### **부록 - 2000년대의 assembly**


손과 머리로 하는 assembly 는 꽤 잘 했던 기억이지만, 기계보다 잘 할 수 없으면 맞서지 말자 뭐 이런 생각으로 멀리 있게 되었고, cross compiler 같은 것도 남들이 다 해 주니까 싶으면서 멀어지기도 했지만, 최근의 재미난 일들 3가지.

  

**1\. 2023 년 popularity ranking 에서 5.43% 로 19등 (** [**Link**](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/) **)**. 서로 다른 CPU 들의 연합군이면 반칙일까 싶기도 하지만, Swift, R, Scala 보다 높은 건 고무적..

**2\. 요즘 들어 Assembly 는 Web Assembly 에서 자주 보임.** 20년 전 기억과는 ISA 가 달라서 어색하고, 저 텍스트 버젼을 볼 일이 있을까 싶음.

**3\. 최근에 각잡고 본 기억은 deepmind 가 발견한 정렬 알고리즘 (** [**https://deepmind.google/discover/blog/alphadev-discovers-faster-sorting-algorithms/**](https://deepmind.google/discover/blog/alphadev-discovers-faster-sorting-algorithms/) ). C/C++ 였으면 많이 허무했을 수도...
