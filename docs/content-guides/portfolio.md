# Portfolio Collection

Case studies and project summaries.

## Directory layout
```
portfolio/
├── en/<slug>.md
└── ko/<slug>.md
```

## Frontmatter
```yaml
---
title: "Banksalad — 75% cloud cost reduction"
client: "Banksalad"
role: "VP of Engineering"
period:
  start: 2022-01-01
  end: 2023-07-31
lang: en
summary: "Led 40+ engineers to cut cloud costs 75% in 6 months..."
outcomes:
  - "Cloud cost reduced 75% in 6 months"
  - "Mydata real-time updates improved 20x"
stack: [Go, gRPC, Kubernetes, AWS]
tags: [leadership, cloud, fintech]
confidential: false
links:
  - label: "Postmortem post"
    url: https://example.com
cover: ./cover.jpg
draft: false
---
```
