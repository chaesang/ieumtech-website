# Webmaster Review — 2026-03-26

Reviewed after Frontend Dev changes (commit `2c42b9f`).

## Issues

### SEO — High

| Issue | Detail | Suggested Fix |
|---|---|---|
| No OG/Twitter meta tags | No preview card on social sharing | Add `og:title`, `og:description`, `og:image`, `twitter:card` to both files |
| No canonical tag | Duplicate-index risk (http/https, www/apex) | Add `<link rel="canonical">` to both files |
| No hreflang tags | Google can't discover EN/KO relationship | Add bidirectional `hreflang` annotations to both files |
| ~~No sitemap.xml~~ | ~~No machine-readable page index for crawlers~~ | **Resolved** — Cloudflare 서빙 확인, Google Search Console 제출 완료 |

### SEO — Medium

| Issue | Detail | Suggested Fix |
|---|---|---|
| ~~No robots.txt~~ | ~~No sitemap reference for crawlers~~ | **Resolved** — Cloudflare Managed robots.txt 확인 (AI crawler 차단 + sitemap 참조 포함) |
| No favicon | 404 on every page load, no browser tab icon | Add favicon files and `<link rel="icon">` |
| Title tag too short | "Ieum Tech LLC" (13 chars) wastes SEO space | EN: "Ieum Tech — Tech Consulting & Technical Writing" / KO: "이음 테크 — 기술 컨설팅 · 기술 문서 작성" |

### Accessibility — High

| Issue | Detail | Suggested Fix |
|---|---|---|
| No skip-to-content link | WCAG 2.4.1 failure — keyboard users can't skip nav | Add `<a href="#home" class="skip-link">` as first child of `<body>` |
| No focus-visible styles | WCAG 2.4.7 failure — keyboard focus invisible | Add `:focus-visible` CSS rule with accent outline |

### Accessibility — Medium

| Issue | Detail | Suggested Fix |
|---|---|---|
| `<header>` not used | `<div class="site-header">` invisible to ARIA landmarks | Change to `<header class="site-header">` |
| `<main>` element absent | No main landmark for screen readers | Wrap content between header and footer in `<main>` |
| Hamburger missing `aria-controls` | Button not associated with menu element | Add `aria-controls="nav-menu"` |
| Nav `<ul>` no `aria-label` | Two nav regions indistinguishable | Add `aria-label` and wrap in `<nav>` |

### Accessibility — Low

| Issue | Detail |
|---|---|
| Color contrast `#6b6b6b` on `#fafafa` | 4.6:1 — passes AA but borderline; consider `#595959` |
| Profile avatar no aria-hidden | "CJ" announced redundantly by screen readers |

### Performance — Medium

| Issue | Detail | Suggested Fix |
|---|---|---|
| Google Fonts render-blocking | Stylesheet blocks text rendering | Use `preload` with `onload` swap pattern |

### Performance — Low

| Issue | Detail |
|---|---|
| Two separate `@media (max-width: 480px)` blocks | Should consolidate for maintainability |
| Inline style on services section | Move to `<style>` block |

## Passing

- `lang="en"` / `lang="ko"` correct
- CNAME correctly set to `ieumtech.net`
- External links use `target="_blank" rel="noopener noreferrer"`
- Single `<h1>` per page (after Frontend Dev fix)
- `<footer>` semantic element used
- Footer `<nav>` landmark present
- Hamburger `aria-label` and `aria-expanded` present
- Google Fonts `preconnect` hints present
- `font-display: swap` present
- No Chinese characters
- EN/KO structurally identical
- Copyright year 2026 correct
- `scroll-padding-top` matches header height

## Recommendations (Optional)

- Add Schema.org JSON-LD (`Organization` + `Person`)
- Add `<meta name="author" content="Chaesang Jung">`
- Add web app manifest for mobile "Add to Home Screen"
