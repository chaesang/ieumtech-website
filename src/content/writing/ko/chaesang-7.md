---
title: "한국 IT 용어 이야기 (6) - \"리뷰\""
date: 2024-01-08
lang: ko
summary: "한글로도 영어로도 아주 많이 쓰이고, 다른 단어들과 붙어서도 많이 쓰인다. 언뜻 생각나는 것만으로도 코드 리뷰, 프로젝트 리뷰, UI 리뷰, 리걸 리뷰, 피어 리뷰 등등이 생각나고, 가볍게 '시간 나면 봐 달라' 부터 '승인해 달라' 까지의 스펙트럼이 넓어서 영어로도 어려웠고, 한국에 와서는 Agile의 파도 아래에서 쓰임이 참으로 어려웠던 단어이다.  곰"
tags: ["it-term", "language"]
series: "itterm"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/7
draft: false
---

한글로도 영어로도 아주 많이 쓰이고, 다른 단어들과 붙어서도 많이 쓰인다. 언뜻 생각나는 것만으로도 코드 리뷰, 프로젝트 리뷰, UI 리뷰, 리걸 리뷰, 피어 리뷰 등등이 생각나고, 가볍게 '시간 나면 봐 달라' 부터 '승인해 달라' 까지의 스펙트럼이 넓어서 영어로도 어려웠고, 한국에 와서는 Agile의 파도 아래에서 쓰임이 참으로 어려웠던 단어이다.

  

곰곰히 생각해 보면 조금 더 한국말로 검토 혹은 승인, 결재 등도 있겠지만, 역시 딱딱해 지는 것은 어쩔 수 없겠다. 결과적으로는 what's next를 잘 정의해 놓아야 불필요한 오해들이 줄어들겠고, 아래는 몇가지 사례들과 개인적인 견해들.

  

### code review


구글에서 code review 를 처음 배웠는데, (거의) 모든 코드가 아무에게나 보이고, 어지간하면 build & run 이 가능하고, change 를 보낼 수 있으며, repository owner 가 혹은 해당 reviewer 가 24시간 내에 응답이 오는 꽤 신기한 경험들이었다.

  

언어 별 approver도 따로 있어서 readability 를 챙겨야 했고, owner 가 안된다고 하면 여러 가지 방법을 동원해서 어떻게든 되는 방법을 찾는 등 "LGTM"을 받기 위한 모든 노력이 여기 들어간다고 하겠다. 마침표, 약어 등의 영어로 흠이 잡혀 고생하던 경험, 그리고 그걸 이용해서 owner의 기분을 풀어주는 고급 기술, 대상 팀의 TODO 를 풀어주는 조건으로 code 를 짜 넣는 방법, 높은 사람들의 stamp 를 받아서 강제적으로 되게 하는 등의 여러 기억들이 지나간다.

  

이 맥락에서는 '리뷰'라는 말을 떼어 놓고 생각해 본 적은 없고, 한글로도 딱히 번역될 만한 말이 없는 거 같기도 하다. 당시 구글의 코드는 지금의 용어들로는 극단적인 mono-repo, 잘게 잘려진 changes, approve based 강한 정책, 리뷰어로 되어 있었을 때의 강한 의무 등 바깥에 와 보니 굳이 저렇게까지 싶을 정도의 정책들이었지만, 개인적으로는 혹독한 process가 주었던 장점들을 좋아한다.

  

### document review


팀을 옮겨 다니는 짬이 되면서 가장 신경이 많이 쓰이는 부분이 자연스럽게 문서들의 review에 대한 것들이겠다. 제품의 거대한 그림을 보여 주는 PRD , master design doc 같은 formal 한 문서들부터 작은 기능 별로 만들어진 약식 문서들, 실험 리포트들, one pager라고 불리는 짧은 design proposal 들까지... '운영'으로 갈 수록 필요가 많은 일들이긴 하겠다. 실제로 서른 넘어 배운 영어도 여기서 많이 늘었음은 틀림 없으리라.

  

앞의 code change 의 경우, 남의 repository에 요청할 때 제일 먼저 듣는 이야기가 'design doc이 있느냐?' 였고, 대개 이 질문은 너의 아이디어를 sponsor / support 해 주는 높은 누군가가 있느냐 라는 질문이라 하겠다. Google Doc 에서 review , approve 기능이 은근히 유용했던 기억이고, 몇몇 팀에서는 아예 comment를 resolve 하는 것과 explicit 한 approve를 받아 오는 것을 review 과정의 일부로 놓기도 했고, 그 때문에 comment 를 남기는 행위와 허락 없이 resolve 하는 행위가 조금 적대적인 행위로 받아들여지는 부작용들도 있었다.

  

approve stamp 를 찍어 주었으면 하는 높은 사람은 대개 다른 거 하느라 바쁘고, 문서 리뷰를 요청한 사람은 또 반대로 급하기에 begging 의 기술이 필요하기도 했고, 이 날을 위해서 평소에 잘 지내 놓거나 visibility를 높여 놓거나 하는 게 필요했다. 대면 출장의 용도도 여기서 가장 컸던 거 같다. 지나고 보니 그래도 제일 좋은 방법은 review 의 결과가 미치는 영향에 따라서 요청할 때 1) 그냥 한 번 봐 달라 혹은 2) 네 생각에는 A/B/C 중 어떤 게 나은 거 같니 3) 네가 approve 찍어 주면 고맙겠다. 며칠이면 되겠니? 등의 기대치를 아예 dry 하게 요청하는 것이었던 거같다. 역지사지...

  

### launch review


구글에 다니면서 가장 짜릿하고 좋았던 경험들은 이 launch review 들에 있다. launchcal 이라 불렸고, 훗날 ariane 라 불리는 과제의 gatekeeping , explicit approval 에 해당하는 process 이고, 혹자는 agile , fast iteration 의 정반대에 있다고 해서 불편해 하는 시각이 있었던 과정이다. 다른 과제들을 읽음으로서 얻게 되는 장점도 훌륭하게 많았고, 매주 area leadership 들이 이를 운용하는 모습은 교과서에 닿아 있고, Google 의 respect others 에 가장 가까운 점이기도 하다.

  

여기서는 모든 리뷰의 목표가 'appove' 에 있고, 어떻게 하면 approve 를 받을 수 있는가 에 대한 방법, timeline 등이 잘 정의되어 있었다. speed를 고려해서는 approve 를 optional 혹은 TBR 등으로 해 놓는 정도도 나쁘지 않았고, legal 을 제외한 나머지는 자기가 맡은 부분만 신경쓰는 것도 좋은 경험이었다. 예를 들면 검색팀의 경우 engineering 과 quality 가 담당자가 달랐어서 engineering 은 성능과 기계의 비용 등에 대한 점만 보고, quality는 사용자 실험 지표 등만 보고, 둘 다 UI 에 대해서는 맘에 안 들어도 내버려 둔다든지...

  

개인적으로 agile / squad process 를 별로 좋아하지 않는데, 그 중 가장 큰 부분이 review 과정 자체를 생략하며 speed를 얻으려 하는 습관들 때문이다. 사람이 많고 여러 직군이 같이 하게 될 때 효용이 더 크겠지만, 테크 쪽은 어떻게든 그래도 코드가 들어가기 전에 비슷한 과정을 겪게 될테니까 부작용이 덜한데, 적어도 같은 직군의 다른 팀원들에게 도움 받는다는 생각으로 리뷰를 요청하는 건 규모와 상관없이 했으면 하는 생각이다. 여러 이유로 일단 내가 이걸 봐 달라고 하면 딴지부터 걸겠지..? 라는 선입견도 영향이 있을 수 있겠고, 서로 다른 squad 사이의 알력 같은 것도 쉽게 예상되긴 한다. 한국의 작은 회사들에 도입하려 했을 때 직접적인 피드백들은 불필요한 과정 추가로 인한 delay 우려 였고, 아이러니하지만, 나는 정 반대의 생각이고, 구글에서 event driven launch 들이 있었을 때 launch process가 가장 도움이 되었었던 사례들이 있다.

  

아래는 추억 돋는 quality review.

[Search Quality Meeting: Spelling for Long Queries (Annotated)](https://www.youtube.com/watch?v=JtRJXnXgE-A)

Quality 에 진심인 사람들의 치열한 리뷰 현장. Table 에는 stakeholder들, 병풍처럼 대기하는 과제 진행자들... 차례대로 기다리는...
