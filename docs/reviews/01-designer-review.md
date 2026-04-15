# Designer Review — 2026-03-26

## 1. Existing Known Issues — Status

| ID | Issue | Status |
|---|---|---|
| KI-1 | Services section top padding too tight after Hero | Still present |
| KI-2 | Footer missing social links (only in CTA) | Still present |
| KI-3 | Profile avatar too small (80px) for visual impact | Still present |
| KI-4 | About section blocks need stronger visual separation | Still present |
| KI-5 | Samsung Semiconductor timeline order incorrect | Still present |
| KI-6 | CTA subtitle text too generic | Still present |

## 2. New Issues

### N-1: Footer max-width inconsistent (High)
- `.footer-inner` uses `max-width: 1100px`, rest of site uses `640px`
- Fix: Change to `max-width: 640px`

### N-2: Hero background hardcoded (Medium)
- `.hero { background: #fff }` — hardcoded, not using CSS variable
- Fix: Use `var(--color-bg)` or define a dedicated hero bg token

### N-3: About section padding inconsistent (Medium)
- `.about-section { padding: 64px 24px }` — spec says `40px 0`
- Fix: Change to `padding: 40px 24px`

### N-4: Two h1 tags on one page (Medium)
- `.profile-name` is `<h1>`, but Hero already has `<h1>`
- Fix: Change `.profile-name` to `<h2>` in both EN and KO

### N-5: Services section missing id anchor (Medium)
- No `id` on Services `<section>`, no nav link to it
- Fix: Add `id="services"`

### N-6: .about-summary padding asymmetric (Low)
- `padding: 20px 24px` — card spec says `padding: 24px` uniform
- Fix: Change to `padding: 24px`

### N-7: Footer breakpoint mismatch (Low)
- Footer uses `@media (max-width: 600px)`, all others use `480px`
- Fix: Change to `480px`

### N-8: Links block buttons same visual weight as CTA (Low)
- About "Links" buttons identical to CTA primary button
- Fix: Use smaller/lighter variant for Links buttons

### N-9: hero-label letter-spacing deviation (Low)
- `letter-spacing: 0.1em` vs section h2 standard `0.08em`
- Fix: Change to `0.08em`

### N-10: .profile-korean class semantically wrong in KO (Low)
- In KO page, `.profile-korean` displays English name
- Fix: Rename to `.profile-secondary-name`

### N-11: KO timeline role title language inconsistency (Low)
- Some Google roles translated to Korean, others left in English
- Fix: Establish consistent policy

## 3. Passing

- Color tokens match spec
- Typography (h1, h2, h3, body, small) matches spec
- Font family Inter with correct weights
- Line height 1.6 correct
- Header height 56px correct
- Container 640px with 24px padding correct
- Hero padding 88px/80px correct
- Card spec (bg, border, radius, hover) correct
- Card grid 2-col desktop, 1-col mobile at 480px correct
- Button styles (primary, outline, hover) correct
- CTA background #f0f4ff correct
- Timeline and nested timeline correct
- Profile avatar CSS values match spec (size is known issue)
- Mobile breakpoint 480px correct (except footer)
- No Chinese characters found
- EN/KO structural parity confirmed
