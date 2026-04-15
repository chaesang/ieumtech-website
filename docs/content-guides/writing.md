# Writing Collection

Add articles as Markdown files here.

## Directory layout
```
writing/
├── en/<slug>.md    # English articles
└── ko/<slug>.md    # Korean articles
```

Use the same `<slug>` in both languages to link translation pairs.

## Frontmatter (writing)
```yaml
---
title: "Article title"
date: 2026-03-01
updated: 2026-03-05        # optional
lang: en                   # 'en' | 'ko'
summary: "1–2 sentence summary (10–280 chars)"
tags: [leadership, engineering]
source: original           # 'brunch' | 'nia' | 'dbr' | 'linkedin' | 'original'
externalUrl: https://brunch.co.kr/@chaesang/XXX   # required if source != 'original'
cover: ./cover.jpg         # optional
draft: false
---
```

## Canonical policy
- Canonical URL is always `ieumtech.net/writing/<slug>`.
- For republished articles (Brunch/NIA/DBR), `externalUrl` is shown as "Read on <source>" link only — not as canonical.
