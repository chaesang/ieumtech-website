# Ieum Tech Homepage — Agent Instructions

## Role
You are a frontend developer maintaining Ieum Tech's company website (https://ieumtech.net).
- Read `docs/ia-decisions.md` for the confirmed IA, URL structure, and SEO rules.
- Read `docs/company-profile.md` for source-of-truth company info.
- When creating a PR, reference the issue number with "Closes #N".

## Tech Stack
- **Framework**: Astro 5.x (static site generator)
- **Language**: TypeScript (strict)
- **Styling**: Global CSS (`src/styles/global.css`, ported from old `style.css`) + scoped `<style>` blocks in `.astro` components
- **i18n**: Astro built-in. Default locale `en` at root, `ko` at `/ko/`. `prefixDefaultLocale: false`.
- **Deployment**: GitHub Pages via `gh-pages` branch. Cloudflare in front.
- **URL format**: `trailingSlash: 'ignore'`, `build.format: 'directory'`.

## Project Structure
```
website/
├── src/
│   ├── pages/            # Routes. EN at root, KO under /ko/.
│   │   ├── index.astro            # /
│   │   ├── about.astro            # /about
│   │   └── ko/
│   │       ├── index.astro        # /ko/
│   │       └── about.astro        # /ko/about
│   ├── layouts/Base.astro         # HTML shell + SEO
│   ├── components/
│   │   ├── Header.astro / Footer.astro / SEO.astro
│   ├── content/                   # Markdown content (Content Collections)
│   │   ├── config.ts              # Zod schemas for writing/portfolio/talks
│   │   ├── writing/{en,ko}/*.md
│   │   ├── portfolio/{en,ko}/*.md
│   │   └── talks/{en,ko}/*.md
│   ├── styles/global.css
│   └── i18n/ui.ts                 # UI strings + localizedPath helper
├── public/                        # Static assets (favicon, profile.jpg, CNAME, .nojekyll)
├── docs/                          # Design & content guides (NOT deployed)
│   ├── ia-decisions.md            # ← IA source of truth
│   ├── company-profile.md
│   ├── design-system.md
│   └── content-guides/            # Frontmatter guides for writing/portfolio/talks
├── astro.config.mjs
└── .github/workflows/             # deploy.yml, preview.yml, claude.yml
```

## URL Structure (ia-decisions.md)
```
/                /ko/
/about           /ko/about
/advisory        /ko/advisory         (not yet implemented)
/speaking        /ko/speaking         (not yet implemented)
/talks           /ko/talks            (not yet implemented)
/talks/[slug]    /ko/talks/[slug]
/writing         /ko/writing          (not yet implemented)
/writing/[slug]  /ko/writing/[slug]
/portfolio       /ko/portfolio        (not yet implemented)
/portfolio/[slug] /ko/portfolio/[slug]
/contact         /ko/contact          (not yet implemented)
```

**No `/hire-me` page.** Full-time recruitment is handled via LinkedIn Open to Work only.

## Content Management Rules
- New article: add `src/content/writing/{en|ko}/<slug>.md` with frontmatter per `docs/content-guides/writing.md`.
- New portfolio item: add `src/content/portfolio/{en|ko}/<slug>.md`.
- New talk: add `src/content/talks/{en|ko}/<slug>.md`.
- **Canonical URL is always `ieumtech.net/...`**, not the external source. `externalUrl` frontmatter is for the "Read on Brunch/NIA/DBR" link only.
- For non-original writing (source=brunch/nia/dbr/linkedin), `externalUrl` is REQUIRED by schema.

## Page Update Rules
- When updating content that has EN/KO variants, update BOTH.
- When creating a new page with EN/KO variants, create both `src/pages/foo.astro` and `src/pages/ko/foo.astro`.
- Pass `altLangPath` prop to `<Base>` so LanguageSwitcher links correctly.

## Content Policy
- NEVER use Chinese characters. Korean (Hangul) and English ONLY.
- Korean and English pages should mirror structure but MAY differ in messaging emphasis (per `docs/ia-decisions.md` EN/KO section).
- Preserve the differentiation-axis messaging confirmed in ia-decisions.md.

## Styling Rules
- Prefer global CSS in `src/styles/global.css` for shared structure.
- Component-specific styles go in scoped `<style>` blocks in the `.astro` file.
- Respect the existing design tokens (color, spacing, typography) used in `global.css`.
- Do NOT reintroduce inline `<style>` in `<head>` for page-specific rules — use scoped styles or `style slot="head"` with `is:inline`.

## Technical Rules
- No new frontend frameworks (React/Vue/etc.) unless approved.
- No new runtime dependencies without discussion.
- Do not change `public/CNAME`.
- Keep `public/.nojekyll` present.
- TypeScript strict mode. Fix type errors, do not ignore.

## Company Info
- Company: Ieum Tech / 이음 테크
- Domain: ieumtech.net
- Email: hello@ieumtech.net
- Founder: Chaesang Jung / 정채상

## Deployment
- Merge to `main` → `deploy.yml` builds Astro → pushes `dist/` to `gh-pages`.
- Cloudflare fronts the site and handles `/*.html` → clean URL 301 redirects (configured in Cloudflare dashboard, not in code).
- PR preview URL: `https://ieumtech.net/previews/pr-N/`.
