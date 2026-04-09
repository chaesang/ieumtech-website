# Ieum Tech Design System

## Reference
- https://www.keeyonghan.com/

## Brand
- Company: Ieum Tech / 이음 테크
- Founder: Chaesang Jung / 정채상
- Theme: "이음 (Connecting)" — ideas, people, generations, what's ahead
- Tone: Warm, people-first, quiet confidence. Not a corporate brochure. Mentor-like.
- Identity: "개발자 정채상이 꾸준히 이어가는 일들" / "The threads Chaesang, an engineer, keeps weaving"

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#fafafa` | Page background |
| `--color-text` | `#1a1a1a` | Primary text |
| `--color-muted` | `#6b6b6b` | Secondary text, captions |
| `--color-accent` | `#2563eb` | Links, buttons, highlights |
| `--color-border` | `#e5e5e5` | Borders, dividers |
| CTA bg | `#f0f4ff` | CTA section background |
| Card bg | `#ffffff` | Card/component background |

## Typography

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Hero h1 (Connecting) | 1.75rem | 600 | Main tagline, letter-spacing -0.025em (EN) / -0.01em (KO) |
| Hero sub-items | 1.25rem | 400 | Secondary taglines, muted color |
| Hero sublabel | 0.9375rem | 400 | "개발자 정채상이 꾸준히 이어가는 일들" |
| Hero sub | 1rem | 300 | Invitation paragraph |
| Hero vision | 0.875rem | 400 | Brand tagline, accent color, italic (EN only, normal for KO) |
| Section h2 | 1.375rem | 600 | letter-spacing -0.02em |
| Sub-group h3 | 0.9375rem | 600 | Accent color, uppercase, letter-spacing 0.06em, left border accent |
| Card h3 | 0.9375rem | 600 | Service card titles |
| Body text | 0.9375rem | 400 | Default reading size |
| Small text | 0.8125rem | 400 | Captions, metadata (was 300, changed to 400 for legibility) |
| Highlight text | 0.9375rem | 500 | Vertical highlight bar items |
| Font family (EN) | Inter | 300,400,500,600 | Google Fonts |
| Font family (KO) | Inter + Noto Sans KR | 300,400,500,600 | KO pages only |
| Line height | 1.6 | — | Default (hero-sub: 1.7, profile-headline: 1.7) |
| KO word-break | keep-all | — | KO pages only, with overflow-wrap: break-word |

## Spacing

| Element | Value | Notes |
|---------|-------|-------|
| Container max-width | 640px | Main content |
| Container padding | 24px | Left/right |
| Header height | 56px | Sticky |
| Hero padding | 88px top, 80px bottom | Full-width section |
| Section padding | 40px top/bottom | Within container |
| Card padding | 24px | Inside card (audience-card: 18px 24px) |
| Card gap | 16px | Between cards |
| Card border-radius | 12px | Rounded corners |
| Simple-list gap | 14px | About page list items |
| Sub-group spacing | margin-bottom: 28px | Between Teaching sub-groups |

## Components

### Header
- Semantic `<header>` element
- Logo: bilingual — "Ieum Tech 이음 테크" (EN) / "이음 테크 Ieum Tech" (KO)
- Logo secondary text: 0.8125rem, 400 weight, muted color
- Nav: Home / About / Contact (홈 / 소개 / 연락처)
- Language toggle: EN ↔ KO

### Highlights Bar (Homepage)
- Vertical stack (flex-direction: column)
- 4 text phrases, centered
- No numbers — text statements only
- Background: #fff, border-bottom

### Audience Cards (Homepage — Who I'm Here For)
- Horizontal flex: title left, description right (justify-content: space-between)
- Padding: 18px 24px
- 1-column grid
- Mobile: stacks vertically at 480px

### Service Cards (Homepage — Ways We Can Work Together)
- Same horizontal flex layout as audience cards
- 1-column grid, 5 items

### Cards (About — Teaching sub-groups)
- Standard card format with sub-group headers
- Sub-group h3: accent color, uppercase, left border accent

### Buttons
- Primary: accent bg, white text, 12px 28px padding, 8px radius
- Outline: transparent bg, accent text/border
- Hover: darken primary (#1d4ed8), fill outline

### Timeline (About page)
- Left border: 2px solid `--color-border`
- Dot: 10px circle, accent color with border
- Padding-left: 24px
- Nested (Google): additional 2px border, 16px padding-left

### Profile
- Avatar: 96px circle, real photo (profile.jpg)
- img attributes: width="96" height="96" loading="lazy"
- Name: h2 on homepage, h1 on about page
- Headline: 0.9375rem, muted, line-height 1.7

### CTA Section
- Background: #f0f4ff
- Border: #d6e0ff
- Padding: 72px 24px
- aria-labelledby on section
- Homepage: "If you have a story to connect, reach out." / "잇고 싶은 이야기가 있다면, 연락 주세요."
- About: "If any of this resonates, let's talk." / "여기 와닿는 게 있다면, 이야기 나눠요."

## Page Structure

### Homepage (index.html / ko/index.html)
1. Header (bilingual logo)
2. Hero (sublabel → connecting list → sub → vision)
3. Highlights bar (4 vertical text items)
4. Where I've Been (narrative prose)
5. Who I'm Here For (3 audience cards + prose line)
6. Ways We Can Work Together (5 service cards)
7. Founder (photo + name + headline + about link)
8. CTA
9. Footer

### About (about.html / ko/about.html)
1. Header
2. Profile (photo + name + headline)
3. Summary (4 bullet points)
4. Words from Colleagues (2 testimonials)
5. Experience (full timeline)
6. Teaching & Speaking (4 sub-groups: Online Courses, University, Talks & Interviews, Writing & Mentoring)
7. Education
8. US Patents
9. CTA
10. Footer

## Layout Rules
- Full-width sections: Hero, Highlights, CTA, About, Footer
- Contained sections: Services (inside 640px container)
- Mobile breakpoint: 480px
- `<main>` landmark wraps content between header and footer
- Shared CSS: /style.css (page-specific overrides inline)

## Content Rules
- NO Chinese characters. Korean (Hangul) and English ONLY.
- EN and KO pages must have identical structure.
- All content sourced from ~/personal/resumes/master/resume_full.md
- Company profile: ~/ieumtech/operations/company-profile.md (synced to docs/)
- Don't lead with "30 years" as marketing flex
- Don't use Google as a marketing keyword
- Voice: ~/writing/book/ Brunch essays as tone reference

## Files
- `/style.css` — shared CSS (756 lines)
- `/favicon.svg` — I-beam SVG favicon
- `/profile.jpg` — profile photo
- `/sitemap.xml` — EN + KO homepage + about pages
- `/robots.txt` — standard allow-all + sitemap pointer
