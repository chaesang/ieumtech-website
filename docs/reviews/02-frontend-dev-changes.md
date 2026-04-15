# Frontend Dev Changes — 2026-03-26

Commit: `2c42b9f` (local, not pushed)
Files modified: `index.html`, `ko/index.html`

## Changes Applied

### High Priority

| Designer Issue | What Changed |
|---|---|
| N-1 | `.footer-inner` max-width: `1100px` → `640px` |
| KI-5 | Samsung Semiconductor moved between Banksalad and Google (correct reverse-chronological order) |
| N-4 | `<h1 class="profile-name">` → `<h2 class="profile-name">` |

### Medium Priority

| Designer Issue | What Changed |
|---|---|
| KI-1 | Services section: added `border-top: 1px solid var(--color-border)` via inline style |
| KI-4 | `.about-block + .about-block`: added `border-top: 1px solid var(--color-border); padding-top: 32px` |
| N-2 | `.hero { background: #fff }` → `#ffffff` (explicit card-bg value) |
| N-3 | `.about-section` padding: `64px 24px` → `40px 24px`; mobile override `48px` → `40px` |
| N-5 | Added `id="services"` to the services `<section>` |

### Low Priority

| Designer Issue | What Changed |
|---|---|
| KI-3 | `.profile-avatar` width/height: `80px` → `96px`; font-size: `1.5rem` → `1.75rem` |
| N-6 | `.about-summary` padding: `20px 24px` → `24px` |
| N-7 | Footer `@media (max-width: 600px)` → `@media (max-width: 480px)` |
| N-9 | `.hero-label` letter-spacing: `0.1em` → `0.08em` |
| N-10 | `.profile-korean` renamed to `.profile-secondary-name` in CSS and HTML |
| KI-2 | LinkedIn and Brunch links added to footer nav |
| KI-6 | CTA subtitle: EN "Let's discuss how technology can drive your next breakthrough." / KO "기술로 다음 도약을 함께 만들어 가겠습니다." |
| N-8 | `.btn-sm` class added (`padding: 7px 16px; font-size: 0.8125rem`); applied to Links block buttons |

## Not Addressed

- N-11 (KO timeline role title language inconsistency) — requires content/policy decision from user
