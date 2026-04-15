---
title: "2025 구글 I/O와 JAX 업데이트"
date: 2025-05-31
lang: ko
summary: "이 글은 제가 NIA [한국지능정보사회진흥원]의 < 디지털서비스 이슈리포트 > 2025년 5월호에 기고한 글입니다. 원본 글 '2025년 AI 현황 보고서 리뷰'를 이곳 브런치에서도 공유합니다.   들어가며  매년 5월에 열리는 구글 I/O는 기술 혁신의 최전선을 조망하고, 구글의 미래 비전을 공유하는 자리이다. 2025년 행사 역시 예외는 아니었고, 전"
tags: ["update", "speaking"]
series: "chaesang-priv"
source: brunch
externalUrl: https://brunch.co.kr/@chaesang/114
draft: true
---

이 글은 제가 **NIA \[한국지능정보사회진흥원\]의 < 디지털서비스 이슈리포트 > 2025년 5월호에 기고한 글**입니다. 원본 글 **'**[**2025년 AI 현황**](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99863&bcIdx=28147&parentSeq=28147) [**보고서**](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99863&bcIdx=28147&parentSeq=28147) [**리뷰**](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99863&bcIdx=28147&parentSeq=28147)[**'**](https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=99863&bcIdx=27742&parentSeq=27742)를 이곳 브런치에서도 공유합니다.

---

  

## **들어가며**


매년 5월에 열리는 구글 I/O는 기술 혁신의 최전선을 조망하고, 구글의 미래 비전을 공유하는 자리이다. 2025년 행사 역시 예외는 아니었고, 전 세계 개발자들을 위한 다양한 업데이트가 발표되었다. AI 시대를 맞아 새롭게 선보인 제품과 서비스는 여러 매체에서 폭넓게 다뤄졌지만, 이 글에서는 JAX를 중심으로 AI 개발자들이 특히 주목할 만한 소식들을 정리해 본다.

  

관련 세션으로는 ‘JAX의 실제 적용(JAX in Action)’, ‘케라스 3에서 model.fit(...)으로 JAX 모델 학습하기(Train your JAX models using model.fit(...) in Keras 3)’, ‘JAX로 트랜스포머 만들기(Build a Transformer with JAX)’ 등이 공개되었으며, JAX에 대한 더 자세한 정보는 [https://jax.dev/](https://jax.dev/)에서 확인할 수 있다.

  

## **JAX 소개**


JAX는 구글에서 개발한 고성능 수치 계산 라이브러리로, NumPy 스타일의 코드를 사용하면서도 자동 미분과 하드웨어 가속(GPU/TPU)을 손쉽게 활용할 수 있도록 설계되었다. 머신러닝과 과학 계산 등 고성능 계산이 필요한 분야에서 각광받아 왔으며, 최근 대규모 훈련 등 효율적인 자원 사용이 중요해 지면서 사용이 늘고 있다.

  

JAX 는 "Just After eXecution"의 줄임말로, 함수형 프로그래밍 패러다임을 바탕으로 설계되어 연구자와 개발자들이 복잡한 수치 계산을 효율적으로 수행할 수 있도록 돕는다. JAX의 주요 특징들은 다음과 같다.

  

NumPy와 유사한 인터페이스: 데이터 분석에서 가장 널리 쓰이는 NumPy와 거의 동일한 문법과 기능을 제공한다. 따라서 기존 NumPy 코드에 익숙한 개발자들도 쉽게 JAX로 전환하여 하드웨어 가속의 이점을 누릴 수 있다.

자동 미분 (Automatic Differentiation) : 복잡한 함수의 기울기를 자동으로 계산할 수 있다. 순방향과 역방향 자동 미분을 모두 지원하며, 고차 미분도 가능하다. 이는 딥러닝에서 역전파(back propagation) 구현에 필수적이며, 효율적인 최적화를 가능하게 한다.

JIT (Just-In-Time) 컴파일: 파이썬 언어의 데코레이터를 사용하여 함수를 XLA(Accelerated Linear Algebra) 컴파일러로 컴파일할 수 있다. 이는 코드 실행 시점에서 최적화된 기계어 코드로 변환하여 연산 속도를 대폭 향상시키고, CPU와 GPU에서 상당한 성능 향상을 얻을 수 있다.

벡터화 및 병렬화 : 간단한 함수를 이용해서 스칼라 함수를 벡터 함수로 자동 변환할 수 있다. 이는 배치 처리나 몬테카를로 시뮬레이션 등에서 코드를 간결하게 유지하면서도 높은 성능을 달성하게 해 주며, 병렬 계산을 통해 분산 학습이나 대규모 계산에서도 높은 성능을 가능하게 한다.

함수형 프로그래밍 패러다임 : 순수 함수(pure functions)와 불변 배열(immutable arrays) 사용을 권장하는 함수형 프로그래밍 모델을 따른다. 이는 코드의 예측 가능성을 높여 테스트, 디버깅, 병렬화 및 최적화를 용이하게 한다.

아래는 구글 코랩에서 엔비디아 T4 칩에 연결해 성능을 비교한 결과로, 간단한 병렬 연산의 경우 1000배 이상의 성능 차이를 볼 수 있다.

![AD\_4nXchQsMz4-M2P-q9HnZVqfHeY5Cx3UQu8dLMQcUW7N3bSJksJJyH28few\_wTQZaG4wZcZ347MZoUI0XGv3XjWSwo2-8k4-y8GBT20Qr2mWiomPsG6dI6al0QOe0omBdaAK3JH\_DJoxGn\_7OHRQ2xOs0?key=m2-uSAAbfqn8QZPUe1M7XQ](/writing/chaesang-114/01.jpg) 그림 1. JAX 병렬 연산의 속도 비교

  

![AD\_4nXdvoyNQdficoamIqcgliJRXnp2Vq5XIpTB\_\_S8DgGuxcsgEwNJyIb-6haL57zMrcTM6MRZ\_i2K947kdt5SfeNnCRCOLraLhTXkFdQ0tdyY5nE7ICvhn7RDXDX07FqKSYhBWebsk8-Aj8xa0zfExIV8?key=m2-uSAAbfqn8QZPUe1M7XQ](/writing/chaesang-114/02.jpg) 그림 2. JIT를 사용한 JAX 병렬 연산의 속도 비교

  

## **구글이 지원하는 생태계 : JAX 와 케라스(Keras)**


구글은 개발자들이 다양한 수준과 목적에 맞춰 AI 개발을 할 수 있도록 체계적인 생태계를 구축하고 지원해 왔다. 하드웨어 레이어에서는 자체 제작한 TPU를 포함해 CPU, GPU를 아우르는 광범위한 지원을 제공하며, 그 위에는 JAX, 텐서플로우와 같은 저수준 프레임워크를 지원한다. 특히 JAX는 구글의 TPU와 최적화된 연동을 통해 대규모 연구 프로젝트에서 진가를 발휘한다.

  

고수준 프레임워크로는 사용하기 쉬운 API를 제공하는 케라스가 핵심 역할을 한다. 또한 특정 도메인에 특화된 라이브러리들인 KerasTuner(하이퍼파라미터 튜닝), KerasHub(사전 훈련된 모델), Keras Recommenders(추천 시스템) 등이 개발자들의 구체적인 요구사항을 충족한다. 이러한 계층적 구조는 연구자들이 저수준의 세밀한 제어가 필요할 때는 JAX를 활용하고, 빠른 프로토타이핑이나 프로덕션 배포가 목적일 때는 Keras를 선택할 수 있는 유연성을 제공한다.

![AD\_4nXf5hrps3yxrkv8PmkO1aTZS\_kDCUt135\_LOcF8V7ZSrW7y13JJ648LdPyT3tvo-2obpGU-kAkM-YEIv2u3k3Fx-yl8JUX2y4dkhx0Wwj4FooTWQwwCXSqcXcjdXs12mpdicdGrzX2Uazd1dvATmxIo?key=m2-uSAAbfqn8QZPUe1M7XQ](/writing/chaesang-114/03.jpg) 그림 3. Keras와 JAX를 포함하는 구글이 지원하는 생태계

  

## **JAX의 저수준 성능 제어 : 이스케이프 해치(Escape Hatch)와 팔라스(Pallas)**

  

JAX는 강력한 자동 미분과 JIT 컴파일 기능을 제공하며 대부분의 머신러닝 워크로드에 충분한 성능을 제공한다. 하지만 때로는 극도로 최적화된 성능이 필요하거나, 특정 하드웨어의 저수준 기능을 직접 제어해야 하는 경우가 생기는데, 이를 위해 JAX 는 '이스케이프 해치(Escape Hatch)'를 위한 계층을 지원한다.

![AD\_4nXeg8Ygw88aNeVgp4E9lKkWRXHqpH\_A1pTn0uiDtQoPGdo1WG17rU27GAOjoTonsUY53-fGJC\_pP\_E5b5ZK-GbfNCplCsV8\_U8WWGMFpymA8g-WevZQXSo12J9Nh-QbZBke3OICgsxwwKs9jcoQH3zQ?key=m2-uSAAbfqn8QZPUe1M7XQ](/writing/chaesang-114/04.jpg) 그림 4. JAX에서 성능과 유연성을 지원하는 이스케이프 해치 계층

간단한 함수를 이용하는 것, 그리고 JIT와 XLA를 이용하는 것보다 더 하드웨어에 가까운 계층이 팔라스(Pallas)라는 커널 언어다. 이는 JAX 생태계의 새로운 구성 요소로, GPU와 TPU에서 고성능 커스텀 커널을 작성할 수 있게 해주는 도구다. 기존에는 쿠다(CUDA)나 트리톤(Triton) 같은 저수준 언어를 배워야 했던 커널 프로그래밍을, JAX의 친숙한 문법으로 할 수 있게 만들어 준다.

  

이 팔라스의 핵심 아이디어는 “블록 수준 프로그래밍”이다. 전체 벡터 혹은 텐서를 한 번에 처리하는 대신, 메모리에 맞는 작은 블록들로 나누어 처리함으로써 메모리 계층 구조를 효율적으로 활용할 수 있게 한다. 이는 특히 대규모 행렬 연산이나 트랜스포머의 어텐션 메커니즘 같은 메모리 집약적인 연산에서 큰 성능 향상을 가져올 수 있다. 게다가 GPU의 공유 메모리나 TPU의 벡터 처리 유닛 등을 직접 제어할 수도 있어, 이론적 성능의 한계에 근접한 최적화가 가능하다. 이는 연구자와 개발자들이 하드웨어 성능의 한계를 탐험할 수 있는 새로운 가능성을 열어 주었다.

![AD\_4nXdZkxSYZWmSlxNz91f\_r11sRgzPfMdbAMwTYmM-Vir--cWcZnV\_1k885Xpa3xBmkXe6\_X3FTgnkeRBhHeOAQRRZkko9333dNrnxmLJ-Jy12Ou\_rP4Bfll3tJsrLNrGDYLCxjBseTsExoTXCtCudF2k?key=m2-uSAAbfqn8QZPUe1M7XQ](/writing/chaesang-114/05.jpg) 그림 5. 팔라스로 작성한 커스텀 행렬 곱셈 함수 예제

  

## **JAX를 활용한 논문 동향**


2025년 3월 PapersWithCode 집계에 따르면, 최근에 발행된 논문에서 JAX 는 3%-4% 정도의 점유율을 보인다. 주로 대규모 언어 모델을 포함한 복잡한 연구 분야에서 효율적인 활용성을 인정받으며 사용되고 있다. 2021년의 1%대에 머물렀던 것과 비교하면 최근 들어 빠르게 점유율을 높이며 텐서플로우 영역을 대체하는 추세다.

![AD\_4nXcy8GgAFSCjNVxDSHRm23HeA1baaGFmK5ev1mjxPjbqIyWUfTDCVt6gGGyZJinyi5xxsn83iIMeUzpaHiwMZ-wW0f2mQ6Ni0y8YeDKXFbqWC8g0mSCOp87nG3mVrHWgAM5a4jvvRUz5DcQ-uLqVXVs?key=m2-uSAAbfqn8QZPUe1M7XQ](/writing/chaesang-114/06.jpg) 그림 6. AI 논문에 인용된 프레임워크 점유율

참고로 중국 연구의 약진과 함께 화웨이의 마인드스포어(MindSpore)가 7% 정도의 점유율로 파이토치 다음으로 널리 쓰이고 있다.

  

## **맺으며**

  

AI 기술의 발전 속도가 더욱 빨라지는 이 시대에, JAX는 고성능 컴퓨팅의 한계를 뛰어넘어 혁신적인 AI 모델을 구현하는 데 필수적인 도구로 자리매김하고 있다. 파이토치의 강력한 경쟁 프레임워크로서 JAX가 제시하는 유연하고 강력한 생태계는 앞으로도 수많은 AI 연구와 실제 애플리케이션에서 핵심적인 역할을 할 것이다.
