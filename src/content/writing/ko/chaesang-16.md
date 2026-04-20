---
title: "인공지능과 추천 시스템 강의 노트 - (7/16)"
date: 2024-01-09
lang: ko
summary: "들어가며 시차 적응에 힘들게 보낸 한 주였고, 급조된 일정이 꼬이긴 했지만 새로운 phase 를 진행할 수 있었다. 여의도의 시설들은 여전히 refresh & focus 에 훌륭한 환경이었다. AI 파트를 어떻게 채울까와 중간에 공유할 10분짜리 비디오를 어떤 걸 놓을까 고민하던 차에 기다리던 state of ai report 의 2023년 버젼이 나와서"
tags: ["kaist", "lecture"]
series: "dfmba-recom"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/16
draft: false
---

## 들어가며

시차 적응에 힘들게 보낸 한 주였고, 급조된 일정이 꼬이긴 했지만 새로운 phase 를 진행할 수 있었다. 여의도의 시설들은 여전히 refresh & focus 에 훌륭한 환경이었다.

![여의도 강의실의 수업 시간표](/writing/chaesang-16/01.jpeg)

*여의도 강의실의 수업 시간표*

AI 파트를 어떻게 채울까와 중간에 공유할 10분짜리 비디오를 어떤 걸 놓을까 고민하던 차에 기다리던 [state of ai report 의 2023년 버젼](https://www.stateof.ai/)이 나와서 일단 요약본만 오늘 공유하게 되었다.

  

## 준비한 자료들

### [7주) 강의 update](https://docs.google.com/presentation/d/1YjCQ4m6ZGfX9bmuhwcEEYCLVsKNB-eCa3EeU8KQV6CA/edit#slide=id.g1168ad8df56_0_7)

![](/writing/chaesang-16/02.png)

  

  

[https://www.aitimes.com/news/articleView.html?idxno=153376](https://www.aitimes.com/news/articleView.html?idxno=153376)

AI 쪽 update로 [huggingface](https://huggingface.co/) 를 소개하고, upstage 가 주도하는 한국 LLM leaderboard 와 미국 LLM board 들을 소개했다. Llama / 작은 Pythia model로 이것저것 해 보고 있는 것을 조만간 입코딩 or live coding 으로 잠깐 공유할 수도 있을 거 같다.

  

타이밍 맞게 지난 주에 AI 쪽 교재가 끝이 나서 stateof AI 로 몇 주간 진행해 보려 한다.전체 리포트가 저 사이트에 있지만, state of AI report는 일단 요약은 아래 두 이미지이고, 아이러니하지만 작년 이맘때까지만 해도 ChatGPT가 만들어 낸 예측들이 반영되지 않았었다. 그만큼 변화가 심했고 앞으로도 예측이 불가할 것이라는 해석이겠다. 학기 초에 예고했던 대로 다음 주부터 힘 닿는 대로 같이 읽어 나갈텐데, 일단 100 페이지가 넘는 방대한 양이긴 한데, 훑어 보니 이전보다 문체가 조금 더 읽기 수월해 져서 같이 보기 괜찮을 거 같다.

  

![2023년 예측과 성적표](/writing/chaesang-16/03.png)

*2023년 예측과 성적표*

![이후 12개월의 예측](/writing/chaesang-16/04.png)

*이후 12개월의 예측*

  

### [7주) 5. 추천 알고리즘 상세(part 2) , 7. 추천 시스템 평가](https://docs.google.com/presentation/d/1th9haDVf3NFt5rj9iCCGvNUKssJKt8dw1s1VnDsffQg/edit#slide=id.g1168ad8df56_0_7)

MovieLens data를 recap 하고, popularity ranking에 대해 EDA + eval 을 돌려 비교하는 것을 colab 에서 하였다. offline 실험의 비교 분석이 필요했었기에 7장 평가 부분을 포함시켜 진행하였다. colab 에 비슷한 내용으로 live coding을 따라 하는 것이 학생들에게 어떻게 받아들여질까에 대한 꽤나 의구심이 있어 같은 내용으로는 다음 두 번 정도까지로 마무리해야 할 듯하다.

  

책에 언급되어 있는 MovieLens를 이용하는 추천 알고리즘만 해도 10개가 넘는데, 일단 이번 주까지는 static 으로 가고, 다음 주부터는 그래도 collaborative filtering 두어개는 해 보아야 하지 싶다. 이런 저런 한계로 online 실험을 follow-up 해 볼 수 없는 게 신경이 쓰이긴 한다.

  

### Break : [Steve Jobs Greatest Keynote Addresses (Top 10)](https://www.youtube.com/watch?v=Oqcp48brqN8)

  

개인적으로 Steve Jobs의 생전에 했던 신제품 발표 시연 영상들에 감동을 많이 받았어서 소개하고 싶었는데, 15분 정도로 모여 있는 요약본을 공유할 수 있었다. 수업 시작 전에는 iPhone 시연영상을 같이 보다가 시작했었다.

  

  

### 과제 — [Exploring AI-Generated Artwork: Creativity, Copyrights, and Controversies](https://drive.google.com/file/d/1WilLrmzQy17_48RJbC62o530dQmSvbdJ/view?usp=drive_link) by 송미나,정지연

  

생성형 이미지 중에 예술의 영역에서 있었던 이슈들을 모아서 정리해 놓은 좋은 리포트였다. 꽤 오래 전 DeepDream 부터 Midjourney 의 explosion 까지, 특히 순수 예술 영역에서의 이슈들에 대해서 copyright 과 controversy 들에 대해 정리를 잘 해 주었다.

  

작가의 노력은 손으로 직접 표현하는 것에서 기계가 만들어 낸 것들을 선택하는 형식으로 변화하고 있고, 아직 사람의 개입이 온전하게 있지 않은 것이 생성해 내는 것에 대한 독립적인 권리는 규정이 허락하지 않고 있으며, 진품 가품 논란은 이전부터 있던 것에 다르지 않지만, 훨씬 더 구분이 난해해 지고 있다. 그리고 학습에 사용된 이미지에 대해 license를 따라가며 주장할 수 있을 것인지 또한 이슈인데, 이는 역시 천재 어린 아이가 TV 로 본 모나리자에 영감을 받아 각성한 것과 직접 가서 보고 각성한 것에 대해 어떻게 분리해서 판단할 수 있을까 등에 닿아 있는 것 같다.

  

### [부록) Case Study : Google Playstore](https://docs.google.com/presentation/d/1pRt4X8ZMkNuG2zSDKf8sAvd8_or74-2Z3pN92m4hK5c/edit#slide=id.g27d4693eb12_0_0)


이 강의를 위해 준비했던 예전 과제들을 시리즈로 소개하려는 시간을 만들어 진행하려 했었고, 시작을 Google Playstore 로부터 했다. 시간이 많지 않아 오늘은 Playstore의 태동과 일반적인 challenge 에 대해 나누는 정도까지 진행할 수 있었고, 2016년부터 이야기는 다음 시간에 진행하려 한다.

  

## 마무리 하며

과제 발표가 재미나기도 했어서 뒤에 시간이 많이 쫓긴 하루였다. 구글 플레이 것은 뒤에 좀 더 신경써야 할 거 같기도 하고, 다음 주부터는 2개 이상의 과제가 발표될 것인데, 미리 arrange를 잘 해야 겠다는 생각이다.

  

금융과 AI 를 같은 비중으로 놓고 싶었지만, 테크와 AI 쪽에 계속 쏠리는 것에 대해 학생들의 기대가 어떤가 가끔 걱정이 된다. 급변하는 세상에 교과서에 해당하는 이야기를 같이 하고는 있지만, 절반 이상은 내년에 같은 강의를 한다 해도 쓰지 못할 것이라 잘 정리가 되면 좋겠다 싶고, 이 medium article thread 를 다음 주부터는 강의 자료에 넣어 공유하자 싶다.
