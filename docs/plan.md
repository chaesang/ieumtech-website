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

### Phase 1: Home 리디자인
- [ ] Header + 네비게이션 + 한/영 토글
- [ ] Hero 섹션 (회사 소개)
- [ ] Services 카드 레이아웃 (4개)
- [ ] CTA 섹션
- [ ] Footer 리디자인

### Phase 2: About 페이지
- [ ] 대표 프로필 (placeholder 사진)
- [ ] 경력/학력/자격증 요약
- [ ] 소셜 링크

### Phase 3: 다듬기
- [ ] 한/영 토글 구현
- [ ] 반응형 검증
- [ ] 호버 효과, 트랜지션
- [ ] SEO 메타 태그
- [ ] 파비콘

## 작업 이력
- 2026-03-25: 초기 홈페이지 배포 완료 (미니멀 원페이지)
- 2026-03-25: Claude Code Action + PR 자동화 + 라이브 프리뷰 구축
- 2026-03-25: 리디자인 계획 수립 (keeyonghan.com 참조)
- 2026-03-25: 요구사항 정리 — 서비스 4개, 한/영 토글, 회사 중심 구조
