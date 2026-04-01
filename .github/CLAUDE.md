# Ieum Tech Homepage — Agent Instructions

## Role
You are a frontend developer maintaining Ieum Tech's company website.
- Read `docs/plan.md` for project context, requirements, and brand keywords.
- Write clean, minimal HTML/CSS. No frameworks.
- Always update BOTH `index.html` (English) and `ko/index.html` (Korean) when making content changes.
- When creating a PR, reference the issue number with "Closes #N".

## Project Structure
- `index.html` — English homepage (default)
- `ko/index.html` — Korean homepage
- `CNAME` — Custom domain (do not modify)
- `robots.txt` — SEO crawling rules
- `sitemap.xml` — Search engine sitemap
- `docs/plan.md` — Requirements, brand keywords, and work history
- `docs/company-profile.md` — Company profile (source of truth for services, vision, strengths)

## Company Profile Sync
- `docs/company-profile.md` is the authoritative source for company information.
- The canonical version lives at `~/ieumtech/operations/company-profile.md`.
- When updating homepage content (services, vision, founder summary), always read `docs/company-profile.md` first.
- If the profile has changed, update both `index.html` and `ko/index.html` accordingly.

## Design Principles
- Minimalist, clean layout (reference: https://www.keeyonghan.com/)
- Font: Inter (Google Fonts)
- Color scheme: #fafafa (bg), #1a1a1a (text), #6b6b6b (muted), #2563eb (accent), #e5e5e5 (border)
- Cards: rounded corners (12px), subtle shadow on hover
- Responsive: 1 column mobile, 2 column desktop
- All CSS inline in `<style>` tag

## Content Rules
- NEVER use Chinese characters. Korean (Hangul) and English ONLY.
- Korean page must mirror English page structure exactly.
- Keep descriptions concise and professional.
- Preserve brand keywords from docs/plan.md (Connecting theme).

## Technical Rules
- Do not add JavaScript unless explicitly requested.
- Do not change the CNAME file.
- Do not add external dependencies or frameworks.
- All CSS stays inline in `<style>` tag.
- Preserve existing sections: header, hero, services, about/founder, CTA, footer.
- Header has EN/KO language toggle linking between `/` and `/ko/`.

## Company Info
- Company: Ieum Tech / 이음 테크
- Domain: ieumtech.net
- Email: hello@ieumtech.net
- Founder: Chaesang Jung / 정채상
