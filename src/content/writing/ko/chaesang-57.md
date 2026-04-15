---
title: "데이터베이스와 SQL"
date: 2024-03-03
lang: ko
summary: "기억 속의 컴퓨터 공학 이야기들 중 마지막 이야기이다. 데이터베이스 과목, 그의 선수과목 개념이었던 알고리즘에 대한 기억으로 1990년대 학교에서 배웠던 전공에 대한 기억들을 마무리해 본다.  알고리즘  학부 2학년 때 자료구조를 배운 이후 '제대로' 프로그래밍을 하기 위한 과정으로 알고리즘을 배웠더랬다. 두께가 위압감을 주는 책이었고 기억 속에는 아래의"
tags: ["memoir", "retrospective"]
series: "90s-com-eng"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/57
draft: true
---

기억 속의 컴퓨터 공학 이야기들 중 마지막 이야기이다. 데이터베이스 과목, 그의 선수과목 개념이었던 알고리즘에 대한 기억으로 1990년대 학교에서 배웠던 전공에 대한 기억들을 마무리해 본다.

  

## **알고리즘**

  

학부 2학년 때 자료구조를 배운 이후 '제대로' 프로그래밍을 하기 위한 과정으로 알고리즘을 배웠더랬다. 두께가 위압감을 주는 책이었고 기억 속에는 아래의 모빌이 있다. 여느 과목처럼 앞에는 열심히 했지만, Graph정도까지는 꽤 긴장하며 보았지만, Greedy 와 NP-hard/complete 나오면서부터는 그냥 어려워 했던 기억들이다.

[https://en.wikipedia.org/wiki/Introduction\_to\_Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms)

[**Introduction to Algorithms - Wikipedia**

https://en.wikipedia.org/wiki/Introduction\_to\_Algorithms](https://en.wikipedia.org/wiki/Introduction_to_Algorithms) 

  

처음에는 그냥 '주어진 문제를 조금 효율적으로 풀어 보는 방법'으로 접근했었지만, 이후 대학원 생활에서도, 그 후 사회 생활을 하면서도 자꾸 뒤돌아 보곤 했었고, 여러 가지 이유로 많이 쓰임이 있던 과목이라 하겠다. 실제로 졸업 후 10년 지나서 Google 의 면접을 보려 했을 때 이 악물고 보기도 했던 책이기도 한데, 지금은 역시 조각난 기억들만 남아 있다.

  

## **INSERT / SELECT / DELETE**


학부 마지막에 database 과목을 배웠었다. 역시 어떤 책을 들고는 있었지만 어떤 교과서라는 생각이 들지는 않는데, SQL 만 한 학기 내내 했던 기억이다. 그 중 정확한 뉘앙스는 모르지만 가장 강렬한 기억은, 당시 대학원생 형이 실습 조교로 들어와서 '니네들 앞으로 살면서 다른 거 다 필요없고, SELECT 만 알면 된다.' 라고 했던 것이었고, 25년 넘은 작년에도 여전히 쓰이고 있는 SQL 을 다루며 새삼 그 선배의 말이 기억이 났다.

  

SQL 을 programming language 로 놓을 거냐 아니냐의 사소한 논쟁도 있었지만, 여전히 2023년 기준 가장 많이 쓰이는 언어 중 하나임에는 틀림 없다 하겠고, 이제 어떤 툴들을 쓰더라도 자동으로 아마도 지원이 되고 있을 거다. 백엔드를 만지면 그래도 골고루 들여다 볼 기회가 있겠지만, 당시 선배의 말대로 SELECT 만 알아도 되는 상황이 된 것도 맞는 거 같다. AI 시대에는 SQL 을 잘 쓰게 하기 위해 GPT 사용법(?) 등을 배워야 하게 되면 사람 - GPT - SQL - DB - 기계 의 미래가 와 있다 싶긴 하다.

[https://spectrum.ieee.org/the-top-programming-languages-2023](https://spectrum.ieee.org/the-top-programming-languages-2023)

[**The Top Programming Languages 2023**

Python and SQL are on top, but old languages shouldn’t be forgotten

https://spectrum.ieee.org/the-top-programming-languages-2023](https://spectrum.ieee.org/the-top-programming-languages-2023) 

  

## **is\_deleted**

  

자료구조와 알고리즘 시간에 가장 시간을 많이 들이는 것이 delete 구현이었다. 상태가 안 깨지게 하고, 메모리 반납도 잘 하고 등등에 search 가 훨씬 자주 일어날 거니까 잘 유지해야 하고 등의 사연들이 많았더랬고, 시스템을 구현하려 할 때 가장 머리가 아픈 것들이었더랬다. 하지만, DB 수업에서 가장 할애를 많이 했던 부분은 어떻게 하면 복구를 가능하게 하느냐 였고, 사회에서 만난 서비스들도 실제 지워도 복구가 필요한 경우 어떻게 할 거냐 그렇다면 그 백업 데이터는 어떻게 하고 등등... 실제 데이터를 안 지우고 지운 척 하느냐로 많이 접근했었다.

  

한편으로 꽤 허탈했던 기억인데, 많은 경우 is\_deleted 필드를 추가하면서 기능들이 구현 가능했다. 나중에 알고 보니 Kernel 내에 page memory, NAND 플래시 내에서도 같은 concept 들이 이미 널리 쓰이고 있었더랬다. 도화지에 지우개로 하나씩 지우는 게 아니라 흰색 물감을 뿌려 버리는 느낌이랄까. 탈퇴한 유저가 새로 가입하면 이전 것을 재활용하냐 마냐 등의 이슈와 함께 몇몇 법안 관련해서는 정말 지웠느냐 등을 가지고 여러 레이어에서 이슈가 있을 것이고, 그래서 "지웠느냐?" 라는 질문에 오해들이 생겼더랬다.

  

### ps.

개별 서비스를 만들 때는 티가 안 나지만, 이후 scale 이라는 걸 경험할 기회가 생겨서, read-only 로 freezing 이 되면 극강의 read-performance 들을 발휘할 수 있는 것들이 생겼고, 이는 도메인이 바뀌거나 generation이 바뀌어도 비슷한 고민들이 계속 반복되는 걸 보면, 다 피가 되고 살이 된다 뭐 이런 말이 맞는 거 같긴 하다.
