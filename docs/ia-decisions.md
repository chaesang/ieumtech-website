# IA 결정 사항 (2026-04-14)

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
