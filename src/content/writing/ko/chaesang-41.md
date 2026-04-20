---
title: "Java 와의 기억들"
date: 2024-01-26
lang: ko
summary: "학부 생활을 하며 수업에서 혹은 바깥에서 별별 언어들이 생겨났고, 자의반 타의반으로 배워야 했었다. 당시 기준으로 오래전부터 있던 것들은 다른 글에서 하도록 하고, 오늘 이야기는 Java.  Memory free 안 해도 된다는데..  C/C++ 언어는 pointer와 malloc 이 들어가는 순간부터 다른 언어가 되어 버렸더랬고, 과제를 할 때마다 모든"
tags: ["memoir", "retrospective"]
series: "90s-com-eng"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/41
draft: false
---

학부 생활을 하며 수업에서 혹은 바깥에서 별별 언어들이 생겨났고, 자의반 타의반으로 배워야 했었다. 당시 기준으로 오래전부터 있던 것들은 다른 글에서 하도록 하고, 오늘 이야기는 Java.

  

### Memory free 안 해도 된다는데..

  

C/C++ 언어는 pointer와 malloc 이 들어가는 순간부터 다른 언어가 되어 버렸더랬고, 과제를 할 때마다 모든 시간은 segmentation fault , core 와의 싸움이었던 기억들이다. 당시 새로운 언어가 나왔는데, garbage collector 라는 게 돌고 있어서 memory new alloc 만 해서 쓰면 된다고 해서 꽤 기뻐했던 기억이다. 하지만, 여러 가지 이유로 JVM 에서 GC 가 돌면 시스템이 거의 멈추는 지경까지 이르게 되는 이슈들이 있었고, 이를 잘 피해 가는 것들이 마치 폭탄 돌리기 같은 일들로 기억이다. 여기서만 터지지 마라…

  

이후 JVM 만지면서 꽤 투덜거렸던 기억도 있고, 한동안 performance 이슈가 있으면 C 로 전부 다 다시 만들어야 하는 일도 있었다. 물론 그 반대의 일들도 이후에는 자주 보게 되었고, 더 신기한 언어들도 나오곤 하면서 기억들은 희미해져 갔다. 메모리 관련해서는 이후 거의 20년이 흐른 뒤에 Google 에서도 여전히 꽤 오랫동안 memory 를 누가 할당받고 누가 free 할 건지를 가지고 여러 논의들이 기억이 난다. 쉬운 문제는 분명 아닌 것이리라...

  

### Applet

  

처음 만남은 웹에서 동적 페이지를 만드는 Java Applet 에서 시작이었고, 이후 몇몇 과제에서 Java Sublets Servlets 까지 접하면서, 당시 JVM 을 만드는 쪽에서 일들을 했었더랬다. ActiveX 의 Microsoft Internet Explorer 를 배워야 하는지, Mosaic / Netscape browser 를 가지고 Java Applet 을 다뤄야하는지를 고민하던 시간이 있었고, 수박 겉할기처럼 awt , swing, 등의 못생긴(?) UI 를 가지고 투덜거리며 이것저것 구현해야 했던 기억들이었는데...

  

졸업하고 잠깐 다른 데 보던 사이 그동안 Android, Java server, Kotlin 등으로 세상이 바뀌면서 everywhere 로 펼쳐지는 것에 대한 경외감은 여전히 있다. 예전에 안 된다고 했던 것들이 되는 세상을 보면서... "Write once, run everywhere" 는 참으로 잘 만든 문구인 듯하다.

  

### Kaffe

  

학부, 대학원 때 과제는 Java Bytecode 를 분석하거나 실행하는 환경을 만들어서 무언가를 하는 것들이었다. 당시 Embedded Linux 에서는 여전히 C 를 가지고 어플을 만들어야 했었고, Bytecode 를 읽어서 이것저것하는 것들은 오히려 Assembly 를 만드는 과정에 가까웠더랬다. OOP 의 현란한 경험들이 오기 전의 것들이었고, [Kaffe](https://en.wikipedia.org/wiki/Kaffe) 라는 것을 다운받아 패치해 가며 썼던 기억이고, Oracle Java 와 OpenJDK 가 달라서 write once 지만 버전을 맞춰 대는 게 무한히 힘들었던 기억들이다.

  

1990년대는 아니지만, 이후 Linux 로 Smartphone 을 만들겠다는 회사에서 병특을 하면서 힘들고 말을 잘 안 들었던 기억들이 있고, 이후 나는 더 안정적이었던 Symbian, C++ 을 택하게 되었다. 당시에는 최선의 선택이었겠지만 이후 그쪽 세상은 Object-C 와 Java 로 양분되고, 이후 web 의 반격까지... 정신 없이 배워야 할 게 많은 업계라 하겠다..
