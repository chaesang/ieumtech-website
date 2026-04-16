# ieumtech.net Design System v2.0

작성일: 2026-04-16
기반: ia-decisions.md (2026-04-15) · voice-guide.md · 24장 스크린샷 감사 · 레퍼런스 4개 분석

---

## 1. Design Principles

레퍼런스 4개(keeyonghan, brittanychiang, joshwcomeau, april5.world)의 공통 원리에서 이 사이트만의 원칙 7개를 추출합니다.

### P1. 여백이 말한다 (Whitespace speaks)
콘텐츠를 나열하지 않고 여백으로 호흡을 만듭니다. 섹션 간 공백은 "다음 이야기가 있습니다"라는 신호입니다. keeyonghan처럼 좁은 컬럼 + 넉넉한 상하 여백이 친밀감을 만듭니다. 요소를 추가하고 싶을 때 먼저 뺄 것을 검토합니다.

### P2. 타이포그래피가 유일한 장식이다 (Typography as sole decoration)
그라디언트, 박스 그림자, 배경 텍스처를 쓰지 않습니다. 크기·굵기·색상의 미묘한 대비가 위계를 만듭니다. brittanychiang처럼 폰트 스케일이 잘 설계되어 있으면 추가 장식이 필요 없습니다.

### P3. 수평선은 마지막 수단이다 (Borders as last resort)
현재 사이트의 가장 큰 문제 중 하나입니다. `<hr>`, `border-bottom` 이 남발되어 섹션이 감옥처럼 느껴집니다. 구분은 1순위 여백, 2순위 배경색 변화, 3순위 border 순으로 해결합니다. border가 필요한 곳: 헤더 하단, 푸터 상단, 인용 블록 왼쪽, 카드 외곽. 필요 없는 곳: 섹션 간, 리스트 아이템 간, about-block 사이.

### P4. 차갑지 않은 정확함 (Precise but not cold)
오차 없는 정렬과 스케일을 유지하되, 톤은 따뜻합니다. joshwcomeau처럼 시스템은 엄격하고 언어는 친근합니다. 이를 위해 색 팔레트에서 순수 흑백 대신 살짝 따뜻한 중립색을 씁니다.

### P5. 한국어가 1등 시민이다 (Korean as first-class citizen)
KO 페이지에서 영문이 덩어리로 등장하는 것은 레이아웃 실패입니다. 한국어 타이포그래피(word-break, letter-spacing, 행간)는 별도 설계가 필요합니다. 영문과 한국어의 시각적 무게감을 맞춥니다.

### P6. 판매하지 않는다 (No selling)
CTA 섹션 배경을 `#f0f4ff` 파란 틴트로 강조하는 현재 방식은 "지금 구매하세요" 느낌을 줍니다. Soft Contact는 콘텐츠 흐름 안에서 자연스럽게, 강조색 없이 존재해야 합니다.

### P7. 시스템은 숨고 사람이 보인다 (System hides, person shows)
디자인 시스템이 잘 작동하면 방문자는 시스템을 인식하지 못하고 "정채상"이라는 사람만 기억합니다. 컴포넌트는 통일되고 예측 가능하되, 콘텐츠의 개성을 지워서는 안 됩니다.

---

## 2. Typography Scale

### 폰트 패밀리

**결정이 필요한 항목 — 옵션 3개**

**Option A. 현행 유지 (Inter + Noto Sans KR)**
- 장점: 이미 로드 중, Inter는 화면 최적화 폰트, 유지 비용 0
- 단점: Inter는 차갑고 중립적. KO 페이지에서 Noto Sans KR의 획 굵기가 Inter보다 살짝 가늘어 불일치 발생
- 추천 여부: 리소스 제한 시 선택

**Option B. Pretendard (추천)**
- 장점: 한글/영문 통일 폰트. KO/EN 혼재 환경에서 획 굵기·행간이 자연스럽게 맞음. 라이선스 무료(SIL OFL). keeyonghan.com 류의 warm-but-precise 느낌에 정확히 부합
- 단점: 폰트 파일 사이즈. CDN 또는 self-host 필요. woff2 서브셋으로 최적화 필요
- 추천 근거: KO가 1등 시민인 이 사이트에서 한글 렌더링이 가장 중요함. Pretendard는 KO 텍스트의 비율과 획 굵기가 우아하게 보이면서 EN 텍스트와 시각적 무게가 일치함

**Option C. Geist (Vercel) + Noto Sans KR**
- 장점: Geist는 최근 트렌드의 엔지니어링 감성. EN 페이지에 sharp한 느낌
- 단점: KO/EN 혼재 시 여전히 불일치 발생. Noto Sans KR의 한계는 동일
- 추천 여부: EN 페이지를 강하게 차별화하고 싶을 때만

```css
/* Option B 적용 시 */
--font-sans: 'Pretendard Variable', 'Pretendard', -apple-system,
             BlinkMacSystemFont, 'Apple SD Gothic Neo', sans-serif;

/* Option A 유지 시 */
--font-sans-en: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans-ko: 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
```

---

### 데스크톱 타이포그래피 스케일 (1440px 기준)

```
Token          font-size    line-height  letter-spacing  font-weight  용도
─────────────────────────────────────────────────────────────────────────────
display        2.25rem      1.15         -0.03em         600          Hero 이름 (정채상 / Chaesang Jung)
h1             1.875rem     1.2          -0.025em        600          페이지 타이틀 (About, Google 등 company detail)
h2             1.375rem     1.3          -0.02em         600          섹션 헤더 (글 — 여러 갈래의 기록)
h3             1.0625rem    1.4          -0.01em         500          서브섹션 헤더, 시리즈 타이틀
body-lg        1.0rem       1.75         0               400          Hero bio 3줄, About highlights
body           0.9375rem    1.7          0               400          본문 기본
caption        0.8125rem    1.6          0               400          날짜, 베뉴, 메타정보
label          0.75rem      1.4          0.03em          500          배지, 포맷 태그 (키노트, 강의)
```

현행 `font-weight: 300` 은 전면 폐지합니다. 가는 폰트는 저해상도 화면에서 가독성이 낮고, 이 사이트의 "담담하지만 당당한" 톤과 맞지 않습니다. 최소 weight는 400입니다.

---

### 모바일 타이포그래피 스케일 (390px 기준)

```
Token          font-size    line-height  letter-spacing  font-weight
─────────────────────────────────────────────────────────────────────
display        1.625rem     1.2          -0.025em        600
h1             1.375rem     1.25         -0.02em         600
h2             1.1875rem    1.3          -0.015em        600
h3             1.0rem       1.4          -0.01em         500
body-lg        0.9375rem    1.75         0               400
body           0.9375rem    1.7          0               400
caption        0.8125rem    1.6          0               400
label          0.6875rem    1.4          0.03em          500
```

---

### 한국어 전용 조정

```css
html[lang="ko"] {
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* KO에서 letter-spacing을 EN보다 살짝 좁게 */
html[lang="ko"] .display     { letter-spacing: -0.02em; }
html[lang="ko"] .h1          { letter-spacing: -0.015em; }
html[lang="ko"] .h2          { letter-spacing: -0.01em; }
html[lang="ko"] .body-lg,
html[lang="ko"] .body        { letter-spacing: -0.005em; }
```

---

## 3. Spacing Scale

### 기본 토큰 (4px 기반)

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-7:  32px;
  --space-8:  40px;
  --space-9:  48px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 96px;
}
```

### 컨테이너

```css
--container-max:     640px;   /* 현행 유지. 1인 personal 사이트에 적합 */
--container-padding: 24px;    /* 데스크톱/모바일 동일 */
```

현행 640px 컨테이너는 적절합니다. keeyonghan이 비슷한 좁은 컬럼을 씁니다. 변경 불필요.

### 섹션 간격

```
섹션 구분        데스크톱            모바일
─────────────────────────────────────────────
Hero 상단 여백   --space-12 (96px)   --space-11 (80px)
Hero 하단 여백   --space-11 (80px)   --space-10 (64px)
섹션 상단 여백   --space-11 (80px)   --space-9  (48px)
섹션 하단 여백   --space-11 (80px)   --space-9  (48px)
```

현행 `section { padding: 32px 0 }` 은 너무 좁습니다. 섹션이 다닥다닥 붙어 보이는 이유입니다. 80px으로 늘립니다.

### 섹션 내부 요소 간격

```
요소 용도                    값
─────────────────────────────────────────────────
섹션 h2 아래 margin          --space-7  (32px)
리스트 아이템 간 gap          --space-5  (20px)   현행 10px → 2배
카드 gap                     --space-4  (16px)   현행 유지
카드 내부 padding            --space-6  (24px)   현행 유지
인용 블록 padding            --space-6  (24px)
인용 블록 left border gap    --space-4  (16px)
프로필 이미지 ~ 텍스트 gap   --space-6  (24px)   현행 유지
타임라인 아이템 간 gap        --space-7  (32px)   현행 20px → 확대
```

---

## 4. Color System

### 기본 팔레트

```css
:root {
  /* Backgrounds */
  --color-bg:         #f8f7f5;   /* 현행 #fafafa에서 변경 — 살짝 따뜻한 off-white */
  --color-surface:    #ffffff;   /* 카드, 헤더 배경 */
  --color-surface-2:  #f2f1ef;   /* 교대 섹션 배경. 현행 CTA #f0f4ff 대체 */

  /* Text */
  --color-text:       #1c1917;   /* 현행 #1a1a1a에서 변경 — stone-900, 따뜻한 근흑 */
  --color-muted:      #78716c;   /* 현행 #6b6b6b에서 변경 — stone-500, 따뜻한 회색 */
  --color-subtle:     #a8a29e;   /* 날짜, 메타, 덜 중요한 캡션 — stone-400 */

  /* Border */
  --color-border:     #e7e5e4;   /* 현행 #e5e5e5에서 변경 — stone-200 */

  /* Accent */
  --color-accent:     #2563eb;   /* 현행 유지 (아래 결정 섹션 참조) */
  --color-accent-hover: #1d4ed8;
}
```

### Accent 컬러 (#2563eb) 유지/변경 판단

**결정이 필요한 항목 — 옵션 3개**

**Option A. 현행 유지 (#2563eb, Tailwind blue-600)**
- 장점: 이미 모든 CSS에 적용됨, 변경 비용 없음, 충분히 읽기 좋은 대비
- 단점: 대형 기업(LinkedIn, 수많은 SaaS) 색상과 겹침. "따뜻한 사람" 인상에 차갑게 작용함
- 추천 여부: 빠른 론칭 우선 시 선택

**Option B. Slate Blue → Indigo (#4f46e5, Tailwind indigo-600) (추천)**
- 장점: blue-600보다 따뜻하고 개인적인 인상. 여전히 readable. keeyonghan 류의 warm-tech 감성
- 단점: 기존 배지 색상(keynote: #1d4ed8 기반) 재조정 필요
- 추천 근거: 이 사이트의 포지셔닝("따뜻한 사람")과 색상 심리학적으로 더 맞음. 배경이 #f8f7f5 따뜻한 오프화이트로 바뀌면 #2563eb의 차가운 느낌이 더 도드라짐

**Option C. 무채색 베이스 + Accent 최소화 (accent를 텍스트 색과 근접한 #374151)**
- 장점: 극도로 절제된 느낌. april5.world 방향
- 단점: 링크와 배지 구분이 약해짐. KO 페이지에서 배지가 흐릿해짐
- 추천 여부: 재설계 2라운드에서 고려

### 다크 모드

**판단: 이 단계에서 하지 않음.**
이유: 다크 모드는 CSS 변수 세트 2배, 스크린샷 감사 2배, 텍스트 가독성 검토 2배를 의미합니다. 현재 사이트의 구조·타이포그래피 문제가 더 급합니다. `/now`, RAG 챗봇이 추가되어 사이트가 안정화된 이후 2라운드 과제로 설정합니다. CSS 변수 구조는 다크 모드 추가를 고려하여 설계합니다(토큰 명에 `light-` 접두사 붙이지 않음).

### 배지 컬러 시스템 (Talk format)

Option B(indigo) 채택 시 재조정된 값입니다. Option A 유지 시 현행 그대로 사용합니다.

```css
/* keynote */
--badge-keynote-bg:   #e0e7ff;   /* indigo-100 */
--badge-keynote-text: #3730a3;   /* indigo-800 */

/* interview */
--badge-interview-bg:   #dcfce7;
--badge-interview-text: #166534;

/* panel */
--badge-panel-bg:   #ede9fe;
--badge-panel-text: #5b21b6;

/* workshop */
--badge-workshop-bg:   #ffedd5;
--badge-workshop-text: #9a3412;

/* podcast */
--badge-podcast-bg:   #fce7f3;
--badge-podcast-text: #9d174d;

/* lecture (신설 — 강의가 가장 많은 포맷) */
--badge-lecture-bg:   #f1f5f9;
--badge-lecture-text: #475569;
```

---

## 5. Layout & Grid

### 컨테이너

```css
.container {
  max-width: var(--container-max);  /* 640px */
  margin: 0 auto;
  padding: 0 var(--container-padding);  /* 0 24px */
}
```

### 페이지별 레이아웃 권장

**홈 (/ 및 /ko/)**
```
전체폭 영역:   Hero, Soft Contact, Footer
640px 영역:   Writing 섹션

Hero 내부:    center-aligned, max-width 480px for bio text
Writing:      list 형태, 640px 컬럼 안에서 full-width item
```

**About (/about, /ko/about)**
```
전체폭:   없음 (About은 640px 컬럼 안에서만)
640px:   프로필 + 헤드라인 → Highlights → Testimonials → CTA links
```

**거쳐 온 자리들 (/companies)**
```
640px 컬럼:   리스트 (company initial circle + 회사명 + 역할 + 기간 + 요약)
레이아웃:      1열 리스트, 카드 아님
```

**Company Detail (/companies/[slug])**
```
640px:   breadcrumb → h1(회사명) → 역할/기간 → 설명 → 불릿 리스트 → prev/next nav
```

**남긴 말과 글들 (/talks)**
```
640px:   연도 그룹 → 1열 리스트
각 아이템:  배지 + 날짜 → h3 제목 → 베뉴 (이미 잘 되어 있음)
```

**글 (/writing)**
```
640px:   시리즈 카드 (현행 유지) → 전체 글 목록
```

### 반응형 브레이크포인트

```css
/* 모바일 우선 */
/* base:       390px — 단일 컬럼, 모든 그리드 1열 */
@media (min-width: 640px) { /* md: 2열 그리드 가능 */ }
@media (min-width: 768px) { /* lg: 헤더 nav 전환 */ }
@media (max-width: 639px) { /* 모바일: 햄버거, 1열 강제 */ }
```

현행 `@media (max-width: 480px)` 단일 브레이크포인트는 640px 미만으로 확대합니다. 480px은 iPhone SE 기준이고, 390px(iPhone 15 Pro)에서 640px 사이의 구간이 현재 대응되지 않습니다.

```css
/* 변경 전 */
@media (max-width: 480px) { ... }

/* 변경 후 */
@media (max-width: 639px) { ... }   /* 모바일 전반 */
@media (max-width: 390px) { ... }   /* 소형 폰 보정 필요 시만 */
```

---

## 6. 컴포넌트 패턴

### 카드

```
용도:    시리즈 카드(Writing), see-more 그리드
배경:    --color-surface (#ffffff)
테두리:  1px solid --color-border
반경:    8px (현행 12px에서 축소 — 12px은 mobile app 느낌, 8px이 더 editorial)
패딩:    24px
그림자:  없음 (기본)
hover:  border-color → --color-accent, transform: translateY(-1px)
         현행 box-shadow + translateY(-2px)는 너무 강함. 1px 이동으로 충분
```

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-6);
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.card:hover {
  border-color: var(--color-accent);
  transform: translateY(-1px);
}
```

### 인용 / Testimonial 블록

현행 About 페이지의 testimonial은 따옴표 없이 일반 텍스트 단락으로 처리되어 있습니다. 별도 처리가 필요합니다.

```css
.testimonial {
  padding: var(--space-6) var(--space-6) var(--space-6) var(--space-7);
  border-left: 3px solid var(--color-accent);
  background: transparent;   /* 현행 #fff 카드 제거. 배경 없이 left border만 */
  margin: var(--space-7) 0;
}

.testimonial-text {
  font-size: var(--font-body);    /* 0.9375rem */
  line-height: 1.75;
  color: var(--color-text);
  font-style: normal;             /* italic 금지 */
}

.testimonial-attribution {
  margin-top: var(--space-3);
  font-size: var(--font-caption);  /* 0.8125rem */
  color: var(--color-muted);
}
```

**KO 페이지 testimonial이 영문일 때** — 별도 항목(7번)에서 처리.

### 리스트 — 불릿 / 숫자 / 타임라인

**불릿 리스트 (Highlights, company detail)**
```css
.bullet-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);   /* 16px. 현행 10px에서 확대 */
}

.bullet-list li {
  padding-left: var(--space-5);   /* 20px */
  position: relative;
  font-size: var(--font-body);
  line-height: 1.7;
  color: var(--color-text);       /* 현행 --color-muted에서 변경 — 주요 정보는 text 색 */
}

.bullet-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-accent);
  /* 현행 '—' 대시 마커 → 작은 원점으로 변경. 대시는 번역투 신호 */
}
```

**타임라인 (Companies list)**
```css
.timeline-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-7);   /* 32px. 현행 padding 20px에서 확대 */
  /* border-left 제거 — line 없이 여백으로만 구분 */
}

.timeline-item-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  margin-bottom: var(--space-2);
}

.timeline-company {
  font-size: var(--font-h3);     /* 1.0625rem */
  font-weight: 500;
  color: var(--color-text);
}

.timeline-period {
  font-size: var(--font-caption); /* 0.8125rem */
  color: var(--color-subtle);     /* --color-muted보다 더 약하게 */
}
```

현행 Companies list는 company-initial circle(36px 원형)이 있습니다. 이는 유지합니다. circle 크기 36px, border `1px solid --color-border`, 배경 `--color-surface` 는 적절합니다.

### 버튼

```css
/* Primary */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px 24px;   /* 현행 12px 28px에서 약간 축소 — 덜 CTA스럽게 */
  font-size: var(--font-body);   /* 0.9375rem */
  font-weight: 500;
  border-radius: 6px;   /* 현행 8px에서 축소 */
  border: 1.5px solid var(--color-accent);
  background: var(--color-accent);
  color: #ffffff;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
}

.btn:hover {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
}

/* Secondary (현행 btn-outline) */
.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: #ffffff;
}

/* Ghost — 링크처럼 보이지만 버튼 역할 */
.btn-ghost {
  background: transparent;
  color: var(--color-muted);
  border-color: var(--color-border);
}

.btn-ghost:hover {
  color: var(--color-text);
  border-color: var(--color-muted);
}

/* Small */
.btn-sm {
  padding: 6px 14px;
  font-size: var(--font-caption);   /* 0.8125rem */
}
```

**Soft Contact의 버튼** — 이메일·LinkedIn 버튼은 현행 Primary + Secondary 조합을 유지합니다. 단, 배경색(`#f0f4ff`)을 제거하여 버튼이 덜 강조되도록 합니다. 아래 "구분선 규칙"과 연동.

### 배지 (Badge / Talk format)

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: var(--font-label);   /* 0.75rem */
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

/* 포맷별 색상은 Section 4 Color System의 배지 컬러 적용 */
.badge[data-format="keynote"]   { background: var(--badge-keynote-bg);   color: var(--badge-keynote-text); }
.badge[data-format="interview"] { background: var(--badge-interview-bg); color: var(--badge-interview-text); }
.badge[data-format="panel"]     { background: var(--badge-panel-bg);     color: var(--badge-panel-text); }
.badge[data-format="workshop"]  { background: var(--badge-workshop-bg);  color: var(--badge-workshop-text); }
.badge[data-format="podcast"]   { background: var(--badge-podcast-bg);   color: var(--badge-podcast-text); }
.badge[data-format="lecture"]   { background: var(--badge-lecture-bg);   color: var(--badge-lecture-text); }
```

### 구분선 사용 규칙 (중요)

현재 사이트는 `border-bottom: 1px solid --color-border`가 남발됩니다. Hero 아래, Highlights 아래, about-block 사이, timeline-item 아래 등. 이를 아래 기준으로 정리합니다.

**border를 유지하는 곳:**
- `site-header` 하단 (`border-bottom: 1px solid --color-border`) — 스크롤 시 콘텐츠와 헤더 구분 필수
- `site-footer` 상단 (`border-top: 1px solid --color-border`) — 필수
- `.testimonial` 왼쪽 (`border-left: 3px solid --color-accent`) — 인용 구분 의미 있음
- `.card` 외곽 (`border: 1px solid --color-border`) — 카드 구조 자체가 border 의존

**border를 제거하고 여백으로 대체하는 곳:**
- Hero 아래 — 현행 `border-bottom` 제거. `padding-bottom: 80px` 이 충분한 구분
- Highlights / Writing / Soft Contact 섹션 간 — `border-bottom` 제거. 섹션 간 `80px` 여백
- `.about-block + .about-block` 사이 — `border-top` 제거. `gap: 48px`로 대체
- `timeline-item` 아래 — `border-bottom` 제거. `gap: 32px`로 대체
- Company detail의 hr — 제거. 여백으로 대체

**border를 배경색 차이로 대체하는 곳:**
- Soft Contact 섹션 — 현행 `#f0f4ff` + `border-top/bottom` → `background: --color-surface-2(#f2f1ef)` + border 없음. 배경색 변화만으로 구분 충분

---

## 7. 한국어/영문 혼재 처리 규칙

### KO 페이지에 영문 Testimonial이 올 때

About KO 페이지에 Jennifer Lin·Ada Kim의 영문 인용이 그대로 노출됩니다. 이는 현재 가장 큰 KO 페이지 위반입니다.

**처리 방법 — 옵션 2개:**

**Option A. 한국어 번역본 제공 (추천)**
영문 원문은 `.testimonial-attribution` 아래에 작은 글씨(`font-size: 0.75rem, color: --color-subtle`)로 "원문 (English)" 접어두거나, 한국어 번역을 메인으로 올립니다. 추천사 제공자와 협의가 필요합니다.

**Option B. EN 전용 처리**
About KO 페이지에서 testimonial 섹션 전체를 제거하거나, 언어 배지(`EN`)를 달고 존재를 인정합니다.

```html
<!-- Option B 마크업 -->
<blockquote class="testimonial" lang="en">
  <span class="badge badge-lang">EN</span>
  <p class="testimonial-text">"Chaesang well balances..."</p>
  <footer class="testimonial-attribution">— Jennifer Lin</footer>
</blockquote>
```

```css
.badge-lang {
  background: var(--color-surface-2);
  color: var(--color-muted);
  font-size: 0.6875rem;
  margin-bottom: var(--space-2);
}
```

### EN 페이지에 한국어 제목이 올 때

현행 EN 홈에서 "혼자 해 보는 서비스 분석", "회사에서의 기억들" 등 한국어 시리즈 제목이 그대로 노출됩니다. Writing 섹션에 이미 "Writing is currently in Korean. English translations are planned." 안내 배너가 있습니다. 이 배너를 유지하되 스타일을 개선합니다.

```css
.lang-notice {
  padding: var(--space-3) var(--space-4);
  background: var(--color-surface-2);
  border-radius: 6px;
  font-size: var(--font-caption);   /* 0.8125rem */
  color: var(--color-muted);
  margin-bottom: var(--space-5);
}
```

현행 회색 배너는 현행 CSS 기준 적절합니다. 배경만 `--color-surface-2`로 통일합니다.

### 숫자·영문 단어가 한국어 문장에 섞일 때

```
규칙 1: 영문 고유명사(Google, KAIST, AI, VP)는 한국어 본문에 그대로 사용.
         앞뒤 공백 1칸 필수.
         예: "Google에서 13년" (O) / "Google에서13년" (X)

규칙 2: 숫자 + 한국어 단위는 붙여씀.
         예: "20명 이상" (O) / "20 명 이상" (X)

규칙 3: 영문 배지·태그는 한국어 문장과 구분되도록 badge 컴포넌트 사용.
         인라인 대문자 영문 덩어리는 지양.

규칙 4: 괄호 안 병기.
         "(Chaesang Jung)" 처럼 한국어 이름 뒤에 영문 병기 시 괄호 사용.
         헤더에서는 로고 컴포넌트가 "정채상 · Chaesang Jung" 형태로 처리.
```

---

## 8. Motion / Interaction

### 전환 기본값

```css
:root {
  --transition-fast:   0.12s ease;
  --transition-base:   0.2s ease;    /* 현행 유지 */
  --transition-slow:   0.35s ease;
}
```

### hover 규칙

```css
/* 텍스트 링크 */
a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}
a:hover { color: var(--color-accent-hover); }

/* 네비 링크 */
.nav-links a {
  transition: color var(--transition-base);
}

/* 카드 */
.card {
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}
.card:hover {
  border-color: var(--color-accent);
  transform: translateY(-1px);   /* 현행 -2px에서 축소 */
}

/* see-more 그리드 화살표 */
.see-more-grid a::after {
  transition: transform var(--transition-fast), color var(--transition-fast);
}
.see-more-grid a:hover::after {
  transform: translateX(3px);   /* 현행 2px에서 약간 확대 */
}
```

### 금지 항목

다음 애니메이션은 이 사이트의 "warm but calm" 원칙과 충돌합니다.

- `@keyframes` 진입 애니메이션 (fade-in, slide-up, etc.) — 금지. 페이지 첫 로드에서 콘텐츠가 날아다니는 것은 에세이 기반 사이트에 맞지 않습니다
- `transform: scale()` hover — 금지. 카드가 확대되는 느낌은 커머스 사이트
- 스크롤 기반 parallax — 금지
- 로딩 스피너·스켈레톤 UI — SSG 사이트에서 불필요

**허용 항목:**
- `transition` 기반 color/border/transform (위 기본값 범위 내)
- 햄버거 메뉴 열기/닫기 (현행 span rotate, 0.25s — 유지)
- 앵커 스크롤 `scroll-behavior: smooth` — 현행 유지

---

## 9. 현 24장 스크린샷 주요 개선 포인트

### High Priority

**H1. About KO 페이지 — 영문 testimonial 덩어리**
- 페이지: `02-about-ko--desktop.png`
- 문제: 한국어 페이지 중간에 영문 인용 2개가 단락 크기로 노출. "한국어 페이지에 영문 덩어리 금지" 원칙 위반
- 변경: Section 7의 Option A 또는 B 적용. 최소한 `lang="en"` + 언어 배지 추가
- 파일: `src/pages/ko/about.astro` 또는 해당 컴포넌트

**H2. 전체 페이지 — 수평선 남발**
- 페이지: 거의 모든 페이지
- 문제: Hero 하단, about-block 사이, timeline-item 사이에 border-bottom이 섹션을 감옥처럼 분리
- 변경: Section 6 "구분선 사용 규칙" 적용. Hero·Writing·SoftContact 간 border 제거, 여백으로 대체
- 파일: `src/styles/global.css` 대규모 수정

**H3. About KO — Highlights가 --color-muted (회색)으로 표시**
- 페이지: `02-about-ko--desktop.png`
- 문제: "임베디드, 검색, 커머스..." 5줄이 회색으로 렌더링. 이 정보는 페이지의 핵심인데 존재감이 없음
- 변경: `color: --color-muted → --color-text`. font-weight 400 유지, 색만 변경
- 파일: `.about-summary li` CSS

**H4. Soft Contact 섹션 — 판매 섹션처럼 보임**
- 페이지: `01-home-ko--desktop.png`, `11-home-en--desktop.png`
- 문제: `#f0f4ff` 파란 배경 + `border-top/bottom: 1px solid #d6e0ff` 조합이 기업 사이트의 CTA 배너와 동일한 인상. "판매하지 않는다" 원칙 위반
- 변경: 배경을 `--color-surface-2(#f2f1ef)` 중립 따뜻색으로 변경, border 제거
- 파일: `.cta-section` CSS

**H5. 모바일 Hero — 텍스트 중앙 정렬이 3줄에서 어색한 줄바꿈 발생**
- 페이지: `01-home-ko--mobile.png`
- 문제: "30년 가까이 격변의 한복판을 지나오며 / 사람과 기술 사이를 이어 왔고," 에서 줄바꿈이 자연스럽지 않음. `word-break: keep-all` + 중앙 정렬의 충돌
- 변경: Hero bio text를 모바일에서 `text-align: left`로 변경. 이름(display)만 center 유지
- 파일: `@media (max-width: 639px)` 내 `.hero-bio` 또는 해당 클래스

### Medium Priority

**M1. Companies List — 요소 간격이 좁아 밀도가 높음**
- 페이지: `05-companies-list-ko--desktop.png`
- 문제: 회사 아이템 간 간격이 좁아 이력서 느낌. 각 아이템의 맥락 문장이 회색으로 잘 안 보임
- 변경: 아이템 간 gap → 32px (현행 ~16px). 맥락 문장 색 → `--color-text`
- 파일: 해당 리스트 컴포넌트

**M2. Company Detail (Google) — 세부 역할 리스트가 너무 밀집**
- 페이지: `06-company-google-ko--desktop.png`
- 문제: TLM, Staff SWE 등 중첩 역할이 좁은 간격으로 나열. 가독성 저하
- 변경: 역할 간 gap → 32px, nested timeline border-left 제거하고 padding-left 24px 여백만 유지
- 파일: `.timeline-nested` CSS

**M3. Writing 리스트 — 전체 글 목록이 너무 촘촘함**
- 페이지: `03-writing-list-ko--desktop.png`
- 문제: 글 아이템 간 구분이 `border-bottom` 의존. 50개 이상 글이 나열되면 신문 기사 목록 같아짐
- 변경: border-bottom 제거, 아이템 간 gap 20px + `padding: 16px 0`. 날짜는 `--color-subtle`로 더 약하게
- 파일: writing list 컴포넌트

**M4. 헤더 — "이음 테크 Ieum Tech" 로고가 이중으로 회사를 강조**
- 페이지: 모든 데스크톱 스크린샷
- 문제: 로고가 "이음 테크"(굵게) + "Ieum Tech"(흐리게) 병기. ia-decisions에서 "Ieum Tech 법인은 푸터에만"으로 결정했으나 헤더에서도 노출
- 변경: 헤더 로고를 "정채상" 또는 "Chaesang Jung"(EN) / "정채상"(KO) 개인 이름으로 변경. "이음 테크"는 제거
- 파일: `src/components/Header.astro`

**M5. Talk Detail 페이지 — 콘텐츠가 너무 빈약**
- 페이지: `10-talk-okky-ko--desktop.png`
- 문제: 배지 + 날짜 + 제목 + 베뉴 + 한 줄 설명 + YouTube 링크가 전부. 스크롤 가능 콘텐츠 없이 페이지 하단이 비어있음
- 변경: 디자인 문제라기보다 콘텐츠 문제. 단, 현재 레이아웃에서 아이템이 적을 때 footer가 페이지 중간에 떠있는 느낌. `min-height: calc(100vh - var(--header-height))` main 영역에 적용
- 파일: talk detail 레이아웃

**M6. 섹션 h2 아래 여백 부족**
- 페이지: `09-talks-list-ko--desktop.png`, `03-writing-list-ko--desktop.png`
- 문제: h2 "남긴 말과 글들" 아래 설명 텍스트와 리스트 사이 여백이 없거나 부족
- 변경: 섹션 헤더 블록 (h2 + 설명) 아래 margin-bottom → 40px
- 파일: 페이지 헤더 컴포넌트 또는 해당 CSS

### Low Priority

**L1. EN About 페이지 — "More" 드롭다운이 내용 없이 빈 상태로 보임**
- 페이지: `12-about-en--desktop.png`
- 문제: "Places I've Worked", "Talks & Lectures", "Writing" 섹션이 접힌 상태. 처음 본 방문자는 콘텐츠 있는지 모름
- 변경: 기본 open 상태로 변경하거나, 드롭다운 UI 대신 직접 링크 카드로 교체
- 파일: 해당 컴포넌트

**L2. footer — EN 텍스트가 KO 페이지 footer에서 혼재**
- 페이지: `01-home-ko--desktop.png`
- 문제: "© 2026 이음 테크. All rights reserved." 에서 "All rights reserved."가 영문
- 변경: KO 페이지에서는 "© 2026 이음 테크. 모든 권리 보유." 또는 단순히 "© 2026 이음 테크."
- 파일: `src/components/Footer.astro`

**L3. Projects 페이지 — "아직 정리 중입니다." 빈 상태 처리**
- 페이지: `08-projects-list-ko--desktop.png`
- 문제: 페이지 전체가 비어 있고 h1 + 설명 + 빈 상태 문구만 있음. 비어있는 페이지는 방문자에게 실망감
- 변경: 빈 상태에서 related 페이지 링크("/companies", "/talks")를 보여주거나, nav에서 숨기기 검토
- 파일: `src/pages/ko/projects.astro` + navigation 조건부 렌더링

**L4. lang-toggle 버튼 — border-radius 6px가 nav 스타일과 불일치**
- 문제: 현행 `border-radius: 6px` lang-toggle 버튼이 나머지 UI 요소와 다른 스타일. 버튼 라운드는 6px로 통일
- 변경: 일치하므로 큰 변경 없음. 단, border-color를 hover 시 `--color-border → --color-accent`로 변경
- 파일: `.lang-toggle` CSS

---

## 10. 이관 계획 (Frontend-dev 체크리스트)

### Phase 1 — CSS 변수 정의 (의존성 없음, 먼저 실행)

변경 파일: `/Users/chaesang/ieumtech/website/src/styles/global.css` 상단 `:root` 블록

```
[ ] --color-bg: #fafafa → #f8f7f5
[ ] --color-text: #1a1a1a → #1c1917
[ ] --color-muted: #6b6b6b → #78716c
[ ] --color-subtle: 신설 #a8a29e
[ ] --color-surface: 신설 #ffffff (현행 하드코딩 #fff 대체)
[ ] --color-surface-2: 신설 #f2f1ef
[ ] --color-border: #e5e5e5 → #e7e5e4
[ ] --color-accent: 결정 후 반영 (현행 #2563eb 또는 #4f46e5)
[ ] --color-accent-hover: 신설
[ ] --space-1 ~ --space-12: 신설 토큰
[ ] --transition-fast, --transition-base, --transition-slow: 신설
[ ] --font-size-display, h1, h2, h3, body-lg, body, caption, label: 신설
[ ] --font-weight-body: 300 → 400 전역 교체 (grep으로 font-weight: 300 전수 확인)
[ ] --badge-* 컬러 토큰: 신설 (accent 결정 후)
```

검증: 전체 페이지 `@media (prefers-color-scheme)` 변화 없음 확인

### Phase 2 — 전역 구조 변경 (Phase 1 완료 후)

변경 파일: `src/styles/global.css` 전체

```
[ ] font-weight: 300 인스턴스 전수 제거 → 400으로 변경
    (grep: font-weight: 300, font-weight: 300;)
[ ] section { padding: 32px 0 } → padding: 80px 0 (데스크톱)
    @media (max-width: 639px) { padding: 48px 0 }
[ ] .hero border-bottom 제거
[ ] .highlights border-bottom 제거
[ ] .cta-section: background #f0f4ff → var(--color-surface-2),
    border-top/bottom 제거
[ ] .about-block + .about-block: border-top 제거, margin-top → 48px
[ ] .timeline-item: border-bottom 제거, gap 방식으로 전환
[ ] .card border-radius: 12px → 8px 전역 교체
[ ] .card hover: transform translateY(-2px) → translateY(-1px) 전역
[ ] @media 브레이크포인트: max-width: 480px → max-width: 639px 전역 교체
[ ] .bullet-list li::before: '—' → 원형 4px dot
[ ] section h2 margin-bottom: 20px → 32px
```

검증: 스크린샷 12장 재촬영(데스크톱), 주요 페이지 공백 확인

### Phase 3 — 컴포넌트 수정 (Phase 2 완료 후)

변경 파일: `src/components/` 하위

```
[ ] Header.astro: 로고 텍스트 "이음 테크 Ieum Tech" → "정채상" (KO) / "Chaesang Jung" (EN)
[ ] Footer.astro: KO 페이지 "All rights reserved." → "모든 권리 보유." 또는 제거
[ ] About KO testimonial 컴포넌트: lang="en" + .badge-lang 추가 (또는 번역본 삽입)
[ ] Testimonial 컴포넌트: .about-summary background #fff + border → background 없음 + left border only
[ ] CTA/SoftContact 컴포넌트: background 변경, border 제거
[ ] Talk detail 레이아웃: main min-height 추가
[ ] Projects 빈 상태: related links 카드 추가 또는 nav 조건부 숨김
```

### Phase 4 — 페이지별 검증 (Phase 3 완료 후)

각 페이지 데스크톱(1440px) + 모바일(390px) + 태블릿(768px) 3개 해상도 확인:

```
[ ] /ko/                홈 KO — Hero 줄바꿈, Writing 섹션 간격
[ ] /ko/about           About KO — testimonial, highlights 색상
[ ] /ko/writing         글 목록 — 아이템 간격, 배지
[ ] /ko/companies       거쳐 온 자리들 — 타임라인 간격
[ ] /ko/companies/google 상세 — nested timeline
[ ] /ko/talks           남긴 말과 글들 — 배지 컬러, 간격
[ ] /                   홈 EN — KO 제목 안내 배너
[ ] /about              About EN — More 섹션 처리
[ ] 다크 모드 없음 확인 (prefers-color-scheme media query 없어야 함)
[ ] font-weight: 300 잔존 여부 grep 재확인
[ ] KO 페이지 영문 덩어리 잔존 여부 검토
```

### Phase별 예상 파일 범위

```
Phase 1:  1개 파일 (global.css :root 블록)
Phase 2:  1개 파일 (global.css 전체 — 최대 변경량)
Phase 3:  4-6개 파일 (Header, Footer, About 컴포넌트, CTA 컴포넌트, Talk 레이아웃)
Phase 4:  0개 파일 변경 — 검증만
```

총 예상 수정 파일: 6-8개. global.css가 가장 큰 단일 수정 대상입니다.

---

## 부록 — 결정 대기 항목 요약

아래 3가지는 최종 결정 전까지 구현을 보류합니다. 결정 후 이 문서에 반영해 주십시오.

| 항목 | 옵션 | 추천 | 위치 |
|------|------|------|------|
| 폰트 패밀리 | A. Inter+Noto / B. Pretendard / C. Geist+Noto | **B** | Section 2 |
| Accent 컬러 | A. #2563eb 유지 / B. #4f46e5 indigo / C. 무채색 | **B** | Section 4 |
| KO testimonial | A. 한국어 번역 제공 / B. lang 배지 표시 | **A** (장기) / **B** (단기) | Section 7 |

---

관련 파일:
- `/Users/chaesang/ieumtech/website/docs/design-system.md` — 이 문서로 교체할 대상
- `/Users/chaesang/ieumtech/website/src/styles/global.css` — Phase 1-2 주 수정 대상
- `/Users/chaesang/ieumtech/website/docs/ia-decisions.md` — 구조 근거
- `/Users/chaesang/ieumtech/website/docs/voice-guide.md` — 톤 근거
