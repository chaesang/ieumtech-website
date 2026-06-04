# ieumtech-website

Source for [ieumtech.net](https://ieumtech.net) — Ieum Tech's company site. Public repo.

## What this is

Ieum Tech's public company website. Covers writing, talks, and portfolio. Built and maintained by Chaesang Jung (정채상).

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 5.x (static, no client-side JS by default) |
| Language | TypeScript (strict) |
| i18n | Astro built-in — EN at `/`, KO at `/ko/` |
| Styling | Global CSS (`src/styles/global.css`) + scoped `<style>` in `.astro` components |
| Hosting | GitHub Pages (`gh-pages` branch) behind Cloudflare |

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the dist/ build locally
```

Node 20+ required.

## Content

Markdown files live under `src/content/`:

```
src/content/
├── writing/{en,ko}/*.md
├── talks/{en,ko}/*.md
└── companies/     # portfolio/company entries
```

Frontmatter is Zod-validated via `src/content/config.ts`. Field references per content type are in [`docs/content-guides/`](docs/content-guides/).

## Deployment

Merging to `main` triggers `.github/workflows/deploy.yml`, which runs `astro build` and force-pushes `dist/` to the `gh-pages` branch. Cloudflare handles clean-URL redirects and CDN in front of Pages.

PR previews publish to `https://ieumtech.net/previews/pr-N/` via `.github/workflows/preview.yml`.

## Automation

Two scheduled workflows sync external content daily:

| Workflow | Schedule (KST) | Source |
|---|---|---|
| `brunch-sync.yml` | 06:00 | Brunch (Korean articles) |
| `medium-sync.yml` | 06:30 | Medium (English articles) |

Both run `npx tsx scripts/migrate-*.ts --auto`, commit new files to `src/content/writing/`, and push to `main`.

## Project structure

```
.
├── src/
│   ├── pages/        # Routes — EN at root, KO under /ko/
│   ├── layouts/      # Base.astro (HTML shell + SEO)
│   ├── components/   # Header, Footer, SEO, WritingCard, …
│   ├── content/      # Markdown content collections
│   ├── i18n/ui.ts    # UI strings + localizedPath helper
│   └── styles/
├── public/           # Static assets (favicon, profile.jpg, CNAME, .nojekyll)
├── docs/             # Design & content guides (not deployed)
├── scripts/          # migrate-brunch.ts, migrate-medium.ts, capture-screenshots.ts, …
└── .github/
    └── workflows/    # deploy.yml, preview.yml, brunch-sync.yml, medium-sync.yml, claude.yml
```

## Where to look next

- [`docs/ia-decisions.md`](docs/ia-decisions.md) — confirmed IA, URL structure, EN/KO messaging strategy
- [`docs/design-system.md`](docs/design-system.md) — typography, color tokens, spacing
- [`docs/content-guides/`](docs/content-guides/) — frontmatter field reference per content type

---

© Ieum Tech.
