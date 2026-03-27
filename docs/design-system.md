# Ieum Tech Design System

## Reference
- https://www.keeyonghan.com/

## Brand
- Company: Ieum Tech / 이음 테크
- Theme: "Connecting" — ideas, people, history & future, generations
- Tone: Professional, minimalist, warm but not casual

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
| Hero h1 | 1.75rem | 600 | Main tagline |
| Hero sub-items | 1.25rem | 400 | Secondary taglines |
| Section h2 | 0.75rem | 500 | Uppercase, letter-spacing 0.08em |
| Card h3 | 0.9375rem | 600 | Service card titles |
| Body text | 0.9375rem | 400 | Default reading size |
| Small text | 0.8125rem | 300 | Captions, metadata |
| Font family | Inter | 300,400,500,600 | Google Fonts |
| Line height | 1.6 | — | Default |

## Spacing

| Element | Value | Notes |
|---------|-------|-------|
| Container max-width | 640px | Main content |
| Container padding | 24px | Left/right |
| Header height | 56px | Sticky |
| Hero padding | 88px top, 80px bottom | Full-width section |
| Section padding | 40px top/bottom | Within container |
| Card padding | 24px | Inside card |
| Card gap | 16px | Between cards |
| Card border-radius | 12px | Rounded corners |

## Components

### Cards (Services)
- Background: white
- Border: 1px solid `--color-border`
- Border-radius: 12px
- Hover: shadow `0 4px 16px rgba(0,0,0,0.08)`, translateY(-2px)
- Grid: 2 columns desktop, 1 column mobile (< 480px)

### Buttons
- Primary: accent bg, white text, 12px 28px padding, 8px radius
- Outline: transparent bg, accent text/border
- Hover: darken primary (#1d4ed8), fill outline

### Timeline
- Left border: 2px solid `--color-border`
- Dot: 10px circle, accent color with border
- Padding-left: 24px
- Nested (Google): additional 2px border, 16px padding-left

### Profile Avatar
- Size: 80px (placeholder)
- Shape: circle
- Background: accent
- Text: white, 1.5rem, 600 weight

## Layout Rules
- Full-width sections: Hero, CTA, Footer (break out of container)
- Contained sections: Services, About (inside 640px container)
- Mobile breakpoint: 480px
- Tablet: no specific breakpoint (640px max-width handles it)

## Content Rules
- NO Chinese characters. Korean (Hangul) and English ONLY.
- EN and KO pages must have identical structure.
- Descriptions: concise, professional, no fluff.

## Known Issues (from design review)
- Services section top padding too tight after Hero
- Footer missing social links (only in CTA)
- Profile avatar too small for visual impact
- About section blocks need stronger visual separation
- Samsung Semiconductor timeline order incorrect
- CTA subtitle text too generic
