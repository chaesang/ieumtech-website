# IA 결정 사항

> **현재 적용 기준은 아래 "Positioning Update (2026-04-15) — PRIMARY" 섹션입니다.**
> 그 뒤의 이전 기록(2026-04-14)은 역사·맥락 참고용.

---

## Positioning Update (2026-04-15) — PRIMARY

### 사이트의 역할
- **LinkedIn 프로필 대체용 전문적 정체성 페이지**
- **실험 공간 (playground)** — 앞으로 /now, 피어 커멘터리, RAG 챗봇 등 새 형식 여지
- **세일즈 지향 아님** — 수익(자문·강연·채용)은 이 사이트 외부(네트워크·DM·메일)에서 발생. 사이트의 역할은 "이 사람 누구냐" 에만 답함

### 독자 우선순위 (5그룹)
1. **멘토링 희망자** (최우선)
2. **동료 개발자**
3. 강연 섭외자
4. 자문 발주자
5. 채용 담당자

상위 2그룹이 비상업 커뮤니티 독자라는 점이 톤·구조 전반을 좌우.

### 인상 목표
방문자가 떠날 때: *"아, 이 사람은 다양한 경험 가진 따뜻한 사람이구나. 같이 이야기 나눌 거리 많은 친절한 사람."*

### 브랜드 관계 (C 선택)
- **Chaesang Jung 전면** — 개인 브랜드
- **"이음"은 개인 철학·테마** — 회사명에서 비롯했으나 저자의 시선
- **Ieum Tech 법인** — 푸터·법적 정보에만. Copy에서 언급 최소

### 사이트맵 (재구성)

```
/                 홈 (name + short intro + Writing + Soft Contact)
/about            About (산문 bio 없이, headline + highlights + 추천사 + CTA)
/companies        거쳐 온 자리들 (신설)
/projects         함께 했던 프로젝트들 (신설, 기존 /portfolio 리네임)
/talks            남긴 말들 (신설, 기존 /speaking 랜딩 통합)
/writing          글 (이미 구축)
/writing/[slug]
/writing/series/[slug]

(향후 추가 예정)
/now              지금 하는 일
/chat             RAG 챗봇

/ko/... KO 대칭
```

### 폐지된 것
- `/advisory` 자문 랜딩 — 판매 지향, 재포지셔닝 원칙과 충돌
- `/speaking` 섭외 랜딩 — `/talks`에 통합
- `/portfolio` — `/projects`로 리네임
- `/contact` 페이지 — 폐지. 홈·About 하단 소프트 초대로 대체

### 네비게이션 (C 패턴)

- **Primary (상단 메인)**: `About · 글 · Now` — 3개
- **Secondary (작은 글씨)**: `거쳐 온 자리들 · 함께 했던 프로젝트들 · 남긴 말들` — 3개 (우산 라벨 없음)
- **푸터**: 전체 링크 반복 + LinkedIn · Brunch · 이메일
- **Now, /projects**는 초기엔 빈 상태일 수 있음. 네비 노출 여부 구현 시 결정.

### Hero 카피 (확정, Phase 4 결과)

```
정채상 (Chaesang Jung)

한국과 실리콘밸리를 오가며, IT 현장에서 지내왔습니다.
30년 가까이 격변의 한복판을 지나오며 사람과 기술 사이를 이어 왔고,
그 동안 쌓인 배움과 경험을 여기에 모아 두고 있습니다.
```

### 홈 구조

1. Hero (이름 + 위 3줄)
2. Writing 위젯 — h2 `글 — 여러 갈래의 기록` → 시리즈 카드 바로 아래
3. (향후) 피어 커멘터리, 축약 타임라인 토글
4. Soft Contact — `잇고 싶은 이야기가 있다면, 같이 이어 봐도 좋겠습니다.` + 이메일 · LinkedIn

**폐지된 홈 섹션**: Where I've Been, Who I'm Here For, Ways We Can Work Together, Founder 블록 일부

### About 구조

1. 프로필 사진 + 이름 (Chaesang Jung · 정채상)
2. **헤드라인**: `기술이 지나온 자리에 늘 사람이 있었습니다.`
3. **Highlights (5줄)**:
   ```
   임베디드, 검색, 커머스, 핀테크, 클라우드, 산업 AI
   실리콘밸리 13년 · 한국에서의 그 앞뒤
   엔지니어, 매니저, VP, CTO, 자문으로 옮겨 다닌 자리들
   잘 풀린 프로젝트, 자연스레 접힌 프로젝트
   여전히 배우는 자리에서, 가끔 먼저 본 것을 건넵니다.
   ```
4. 추천사 2개 (기존 유지: Jennifer Lin · Ada Kim)
5. **CTA**: `여기 어딘가에서 질문이 생겼다면, 이쪽으로 이어 주세요. / 정리되지 않은 질문이어도 괜찮습니다.`
6. 하단 링크: `/companies` · `/projects` · `/talks`

**폐지**: 산문 bio (상세 경력은 /companies로 이관), 타임라인 전체, 특허 리스트, Teaching 하위 섹션 (→ /talks 또는 /about에서 축약)

### "이음" 의미장 사용 밀도 (D4-B)

- **헤드라인·버튼**: "이음 / 잇다" 제외 (슬로건화 방지)
- **본문**: 허용 — 동사·분사로 자연스럽게 (`이어 왔습니다`, `잇는`, `이어 가며`)
- **회사명 "이음 테크"**: 푸터에만

### Soft Contact 전략

- Contact 페이지 폐지
- 홈·About 하단에 한 문장 초대 + 이메일·LinkedIn 버튼 + (향후 RAG 챗봇 링크)
- 문의 폼 없음 — 판매 지향 회피

### 브랜드 보이스

- `/Users/chaesang/ieumtech/website/docs/voice-guide.md` 참조
- 5계 (간략): 느낌표 금지 · 최상급 금지 · 주어 "저는/제가" 남발 금지 · 제언은 "~했으면 하는 바람이 있다"를 넘지 않기 · 실패·접힘 숨기지 않기
- Display copy 추가 원칙: 비문(`독고(?)` 류) 금지 · 현재 활동 상태 노출 금지 · 겸손하되 우습게 보이지 않기

### 에이전트
- **`ieumtech-ko`**: 한국어 웹 카피 전담 (보이스 가이드 최우선)
- **`ieumtech-en`**: 영문 웹 카피 전담

### EN/KO 차이 (재확인)

- **KO**: 글·에세이·생각이 핵심. 멘토링·피어 독자가 주로 옴. Writing·About 중심.
- **EN**: 이력·경력 정보가 핵심. 섭외·자문·채용 독자가 주로 옴. About·Companies·Projects 더 상세.
- 번역이 아닌 **언어별 재구성** — EN은 Writing 축소, Career 확장.

### 수정된 Content Collections 스키마

기존 `writing`, `portfolio`(→ 표시만 projects로), `talks`, `series` 유지.
**신설 필요**: `companies` 콜렉션 — 회사명·역할·기간·요약·outcomes·링크 스키마.

### 유지된 기술·인프라

- 도메인: **ieumtech.net**
- Astro 5.x SSG, Content Collections, i18n (EN 기본, `/ko/`)
- GitHub Pages + Cloudflare (`/*.html` 301 rules)
- canonical = ieumtech.net, hreflang, sitemap 자동 생성
- 이미지 alt·lazy loading rehype 플러그인
- Writing은 캐노니컬 ieumtech.net, externalUrl은 Brunch 원문 링크

---

# ============ 이전 기록 (2026-04-14) — 역사 참고 ============

ieumtech.com Astro 전환·재구축을 위한 확정된 정보 구조(IA) 결정.

## 대원칙
- **정채상 개인 브랜드 전면**, ieumtech은 푸터·법인 정보·인보이스에만
- 수익원 우선순위: 채용 → 자문 → 유료 강연 (단, 채용은 사이트 비노출)
- 3그룹 독자: 채용담당자 / 자문 발주자 / 강연 섭외자
- KO 1차 시장, EN은 "Silicon Valley meets Korea" 브리지 포지션

## 사이트맵

```
/                      EN 홈 (독자 라우팅 허브)
/about                 대표 프로필
/advisory              자문 서비스 랜딩 (수익 축 1)
/speaking              강연 섭외 랜딩 (수익 축 2)
/talks                 강연 아카이브 (proof)
/talks/[slug]
/writing               글 목록 (기고·Brunch 통합)
/writing/[slug]
/portfolio             포트폴리오 목록
/portfolio/[slug]
/contact               연락 (intent 분기 폼)

/ko/                   KO 대칭 (위 구조 동일)
/ko/about /ko/advisory /ko/speaking /ko/talks /ko/writing ...

/rss.xml /ko/rss.xml   writing 피드
/sitemap.xml           자동 생성
```

**채용 페이지 없음.** 풀타임 채용 제안은 LinkedIn Open to Work(recruiter-only)와 네트워크로만 받음. 사이트 톤은 자문가 일관.

## Hero 메시지 방향 (B안 채택)

차별화 3축 중 하나를 직접 헤드라인에 노출 (10초 스캐너 대응):
1. "0 → 50명 조직을 직접 만든 Staff+ 엔지니어"
2. "실리콘밸리 엔지니어링 문화를 한국 조직에 이식한 VPE"
3. "임베디드 → 검색 → 커머스 → 핀테크 → 클라우드 → 산업 AI, 6개 도메인을 관통한 궤적"

최종 헤드라인·서브헤드 문구는 copywriter + 대표님 검토로 확정.

## 페이지 목적·상단 요소

| 페이지 | 목적 | 상단 배치 |
|---|---|---|
| `/` | 3그룹 독자 라우팅 허브 | 한 줄 정체성 → 3개 진입 카드(Advisory/Speaking/Writing) → highlights → 최근 글 3개 |
| `/about` | 사람에 대한 신뢰 자산 | 이름·헤드라인·사진 → highlights(숫자) → 타임라인 → 추천사 → 특허·교육 |
| `/advisory` | 자문 문의 전환 | 누구에게/어떤 문제/어떻게 → 패키지(Fractional CTO, Architecture Review, Coaching) → 사례 → CTA |
| `/speaking` | 강연 섭외 | 키노트 주제 3–5 → 포맷/청중 → 지난 강연 셀렉션 → 섭외 폼 |
| `/talks` | 강연 아카이브 | 카드 리스트 (date desc), 필터 |
| `/writing` | 사고의 흔적 | 최신 글 리스트, 태그 필터, RSS |
| `/portfolio` | 자문 판매의 근거 | 카드 그리드 (role · outcome · period) |
| `/contact` | 의도별 분기 접수 | intent 드롭다운 + 필수 필드 6개 |

## 네비게이션
- 데스크톱: `About · Advisory · Speaking · Writing · Portfolio` + 우측 `[Contact] [KO/EN]`
- 모바일: 햄버거 + 하단 sticky Contact CTA
- i18n 전환: 현재 페이지의 번역본 있으면 해당 URL로, 없으면 `/ko/` 홈 폴백

## Contact 폼 필드 (6개)
1. 이름 / 소속 (필수)
2. 이메일 (필수)
3. 문의 유형 드롭다운: 자문 / 강연 / 채용 / 기타 (필수) — URL 쿼리 `?intent=advisory|speaking|hiring`로 프리셀렉트
4. 회사 단계·규모 (선택, 자문 선택 시 노출)
5. 도메인/주제 태그 (선택, 멀티선택)
6. 메시지 (필수, 200자 이상 권장 안내)

**예산 필드 넣지 않음** (1인 사업자 유연성이 강점).

## 신뢰 신호 우선순위 (홈 상단)
1. 회사 로고 벨트 (Google · Banksalad · MegazoneCloud · KAIST · INEEJI)
2. 추천사 1~2개 (실명+직함, 수집 필요)
3. 기고 실적 (NIA · Brunch · DBR)
4. 언론 인용 (현재 약함, 쌓이면 상위로)

## Content Collections 스키마 (Astro + Zod)

```ts
// writing
{
  title, date, updated?, lang: 'en'|'ko', summary, tags: string[],
  source: 'brunch'|'nia'|'dbr'|'linkedin'|'original',
  externalUrl?,             // 원문 외부 링크 (표시용 — Brunch/NIA/DBR 등)
  cover?, draft?: boolean
}
// canonical은 항상 ieumtech.net 측 URL. externalUrl은 본문 하단 "원문 보기" 링크로만 노출.

// portfolio
{
  title, client, role, period: { start, end? }, lang,
  summary, outcomes: string[],  // 정량 결과 (예: "클라우드 비용 75% 절감")
  stack?: string[], tags: string[],
  confidential?: boolean,
  links?: { label, url }[], cover?
}

// talks (speaking archive)
{
  title, date, venue, event, lang, audience?, sizeEstimate?,
  format: 'keynote'|'panel'|'workshop'|'interview'|'podcast'|'lecture',
  links?: { label, url }[],   // YouTube, 슬라이드
  thumbnail?, tags: string[], featured?: boolean
}
```

## URL 호환성 (기존 유입 보존)
- GitHub Pages는 서버 301 불가 → **Cloudflare Rules에서 `/about.html` → `/about` 301** 처리
- `/ko/index.html`, `/ko/about.html` 동일
- sitemap.xml에는 새 URL만 등록

## SEO 핵심 룰
- Writing의 `source: brunch`는 **원문 전체를 사이트에 게시 + Brunch 링크 표시**
- canonical은 **ieumtech.net 측**(우리 사이트가 주인). Brunch는 "원본" 지위를 양보하지 않지만 Brunch는 우리가 제어 불가하므로 감수. 향후 Brunch 글에 canonical tag 달 수 있으면 일괄 적용.
- 스키마상 `source !== 'original'`이면 `brunchUrl`/`externalUrl` 필드 필수 (표시용)
- `featured: true` talks는 `/speaking` 랜딩에 노출
- hreflang: `lang` frontmatter 기반 자동 연결

## EN/KO 차이
- **EN**: Silicon Valley 현지·글로벌 기업 대상. "Palo Alto-based, 13 years at Google" 등 위치·규모·지속연수 먼저. 강연 섹션 비중 축소. "Ieum — to connect" 짧게.
- **KO**: 한국 스타트업·대기업·미디어 대상. Banksalad·KAIST·INEEJI가 Google보다 앞쪽에 와도 무방. 강연·기고 비중 확대. "이음"의 언어적 뉘앙스 설명.
- Availability 표기는 EN에서만 명시 ("Open to advisory roles")

## 구조적 리스크 · 대응
1. **Writing 중복 색인** — Brunch 원문과 사이트 본문이 병존. canonical은 ieumtech.net이 가져감. Brunch 측 canonical 수정 불가는 감수. 향후 Brunch 글 제목·링크에 canonical tag 일괄 적용 방안 재검토.
2. **EN 콘텐츠 공백** — 초기에는 EN에 KO 콘텐츠도 `lang` 배지로 함께 노출, 또는 EN 전용 셀렉션만
3. **Contact intent 분기 없으면 대응 효율 저하** — intent 필드 필수로 강제

## 확정 도메인·인프라 (2026-04-14)
- 도메인: **ieumtech.net** (`.com` 미보유)
- Contact 폼 백엔드: **Formspree** (무료 50건/월, 초과 시 재검토)
- DNS: Cloudflare 프록시 ON → 구 URL 301은 Cloudflare Redirect Rules로 처리

## 참조
- `~/personal/resumes/` — 경력 근거
- `/Users/chaesang/ieumtech/operations/company-profile.md` — source of truth
- 전문가 의견: architect(site IA), marketer(독자 여정), strategist(포지셔닝) — 2026-04-14
