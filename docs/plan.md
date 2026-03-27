# Ieum Tech Homepage Redesign Plan

## 참조 사이트
- https://www.keeyonghan.com/
- 디자인: 미니멀, 깔끔한 카드 UI, 반응형

## 현재 상태
- 단일 `index.html` (인라인 CSS, JS 없음)
- GitHub Pages + Cloudflare DNS로 배포 (ieumtech.net)
- Claude Code Action으로 이슈 기반 자동화 구축 완료

## 사이트 정보
- 회사명: Ieum Tech / 이음 테크
- 도메인: ieumtech.net
- 이메일: hello@ieumtech.net

## 대표 프로필 (Chaesang Jung / 정채상)
- 헤드라인: Engineering leader with 25+ years across embedded systems, consumer services, and cloud
- 경력: MEGAZONECLOUD, Google, Banksalad, Yahoo, Samsung
- 학력: Seoul National University (서울대학교)
- 자격증: Generative AI with LLMs, Google Cloud Architecture, TensorFlow Developer Certificate
- 특허: 5개 미국 특허 (Google 검색 관련)
- LinkedIn: https://linkedin.com/in/chaesang
- Inflearn: https://www.inflearn.com/en/users/1292051

## 브랜드 키워드 (이음 = Connecting)
- Connecting ideas with technology
- Connecting people
- Connecting history and future
- Connecting generations

## 결정 사항
- 구조: 회사 중심 (A안) — 본인 = 회사, About 페이지에 대표 프로필
- 언어: 한/영 토글 (페이지 내 전환 버튼)
- 프로필 사진: 나중에 추가 (placeholder로 시작)
- 설명: 간결하게
- 콘텐츠는 링크 위주

## 서비스 목록
1. **Tech Consulting** — 기술 전략, 아키텍처, 클라우드
2. **Leadership Consulting** — 엔지니어링 리더십, 조직 구성, 팀 빌딩
3. **Technical Writing** — 기술 문서, 블로그, 콘텐츠 작성
4. **교육 Contents** — Inflearn 강의, YouTube, 세미나/워크숍

## 페이지 구조

### Home (index.html)
- Header: 로고 (Ieum Tech / 이음 테크) + 네비 (Home, About, Contact) + 한/영 토글
- Hero: 회사 소개 문구 (간결)
- Services: 4개 카드 (2열 레이아웃)
- CTA: 연락 유도 + 이메일/LinkedIn 버튼
- Footer: 소셜 링크 + Copyright

### About (about.html 또는 같은 페이지 섹션)
- 대표 프로필 사진 (원형, placeholder)
- 이름 + 헤드라인
- 경력 요약
- 자격증/특허
- 소셜 링크

## 디자인 가이드라인
- 폰트: Inter (현재 사용 중) 또는 Geist (참조 사이트)
- 색상: 미니멀 (흰 배경, 어두운 텍스트, 포인트 컬러)
- 카드: 둥근 모서리, 부드러운 그림자
- 반응형: 모바일 1열, 데스크톱 2열

## 작업 순서

### Phase 1: Home 리디자인 ✅
- [x] Header + 네비게이션 (PR #15)
- [x] Hero 섹션 — 4개 Connecting 태그라인 (PR #17)
- [x] Services 카드 레이아웃 — 2열, 4개 (PR #19)
- [x] CTA 섹션 (PR #21)
- [x] Footer 리디자인 (PR #23)

### Phase 2: About 페이지 ✅
- [x] 대표 프로필 + 경력/학력/자격증/특허/소셜 링크 (PR #25)

### Phase 3: 다듬기 (진행 중)
- [x] 한/영 토글 — index.html(EN) + ko/index.html(KO), Header에 EN/KO 토글 (PR #27)
- [x] 경력 상세 — Google 역할 펼치기, 초기 경력 개별 항목, 특허 full name (PR #29, #33)
- [x] robots.txt + sitemap.xml (이슈 #34 진행 중)
- [ ] 프로필 문구 수정 — headline, summary, CTA 등 (이슈 #34 진행 중)
- [ ] Samsung 시간순 수정 (이슈 #34 진행 중)
- [ ] Designer 리뷰 피드백 반영 — 간격, footer 소셜 링크, avatar 크기 등
- [ ] 반응형 검증
- [ ] 파비콘
- [ ] 프로필 사진 교체 (현재 placeholder)

### Phase 4: Agent Teams 기반 개선
- [ ] Agent Teams로 designer → frontend-dev → webmaster 리뷰 흐름 테스트
- [ ] design-system.md 기준으로 전체 페이지 디자인 리뷰 + 수정
- [ ] SEO/접근성 webmaster 리뷰 반영

## 주의사항
- 사이트에 한문(중국어 한자) 사용 금지. 한글과 영어만 사용할 것.
- 이슈 작성 시 이 점을 명시할 것.

## 작업 이력
- 2026-03-25: 초기 홈페이지 배포 완료 (미니멀 원페이지)
- 2026-03-25: Claude Code Action + PR 자동화 + 라이브 프리뷰 구축
- 2026-03-25: 리디자인 계획 수립 (keeyonghan.com 참조)
- 2026-03-25: 요구사항 정리 — 서비스 4개, 한/영 토글, 회사 중심 구조
- 2026-03-25: Phase 1 완료 (Header, Hero, Services, CTA, Footer)
- 2026-03-26: Phase 2 완료 (About 페이지)
- 2026-03-26: Phase 3 시작 — 한/영 토글, 경력 상세, 문구 수정
- 2026-03-26: Agent Teams 설정 (designer, frontend-dev, webmaster) + design-system.md
- 2026-03-26: PAT_TOKEN 설정으로 이슈 자동 close + deploy 자동화 해결
