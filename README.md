# ieumtech-website

Public GitHub Pages host for [ieumtech.net](https://ieumtech.net) — Ieum Tech's company site, built and maintained by Chaesang Jung (정채상).

## What this is

Ieum Tech's company website — writing, talks, and portfolio. Essays are first published on Medium (English) and Brunch (Korean) and mirrored here as first-class pages, with the original always one link away.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 5.x (static, no client-side JS by default) |
| Language | TypeScript (strict) |
| i18n | Astro built-in — EN at `/`, KO at `/ko/` |
| Styling | Global CSS (`src/styles/global.css`) + scoped `<style>` in `.astro` components |
| Hosting | GitHub Pages (`gh-pages` branch) behind Cloudflare |

## How it's built

The stack is deliberately boring: Astro emits static HTML with no client-side JavaScript by default, so pages are flat files behind a CDN. Content lives as plain Markdown — essays, talks, and portfolio entries are data, and the series, listings, and per-article pages are generated from it.

The workflow is the interesting part. Most of this codebase is written through agentic AI — "vibe coding" with an AI pair that reads the repo, proposes diffs, runs the build, and iterates, while the architecture, taste, and ship/no-ship calls stay human. The pipelines fall out of that: published essays sync automatically from Medium (EN) and Brunch (KO), get stripped of platform chrome, and render here as first-class pages. View counts, comments, and deploys are wired the same way — small, composable, mostly automated.

## How it ships

Active development happens in a private monorepo. Its CI builds the Astro site and publishes the output to this repo's `gh-pages` branch; Cloudflare handles clean-URL redirects and CDN in front of Pages. Scheduled jobs sync new Medium and Brunch posts into the content collection daily, before each build.

---

© Ieum Tech.
