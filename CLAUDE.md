# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Local dev server (Next.js)
npm run build        # Production build (static export to out/)
npm run lint         # ESLint
npm run type-check   # TypeScript check (tsc --noEmit)
npm run preview      # Preview production build via Wrangler (serves out/)
npm run deploy       # Build + deploy to Cloudflare Pages
```

Deploy shortcut: `npx wrangler pages deploy out --project-name nordische-energy --branch main`

No test suite is configured.

## Architecture

**Framework:** Next.js 15 App Router with `output: "export"` (fully static site). All pages are pre-rendered at build time. No SSR/ISR.

**Hosting:** Cloudflare Pages. The `out/` directory is deployed. Cloudflare Workers functions live in `functions/` (separate from Next.js).

**Key architectural decisions:**
- `images.unoptimized: true` — required for static export
- `trailingSlash: true` — Cloudflare Pages convention
- `experimental.typedRoutes: true` — type-safe `<Link>` hrefs

## Data Flow

**All site content is in `src/lib/constants.ts`** (~790 lines). This single file contains: site config (`SITE`), navigation links, product catalog, technology verticals, industry data, case studies, about page content, partner list, blog posts, and all other structured data. Pages import from here — there is no CMS or database.

Supporting lib files:
- `metadata.ts` — `buildMetadata()` generates consistent SEO metadata per page
- `schema.ts` — JSON-LD structured data (Organization schema)
- `imagery.ts` — maps slugs to image paths
- `utils.ts` — icon resolver (`getIcon`), WhatsApp href builder, `cn()` class merger
- `api.ts` — `submitLeadCapture()` POST to `/api/contact`

## Component Organization

```
src/components/
├── layout/       # Navbar, Footer, FloatingCTA, StickyQuoteBar (persistent chrome)
├── sections/     # Page-level sections (Hero, ProductCards, TrustBar, LeadCapture, etc.)
├── ui/           # Reusable primitives (Button, Card, Badge, map, SectionHeader, PageHero)
└── visuals/      # Animated SVG/Canvas components (ParticleNetwork, GlobalReachMap, BatteryChargingAnimation)
```

## Styling

**Tailwind CSS** with custom CSS variables defined in `src/styles/globals.css`:
- `--color-nord-black` (#0a0c10) through `--color-nord-white` (#f0f4fa) — dark theme palette
- `--color-nord-teal` (#00d4aa) — primary accent
- `--color-nord-amber` (#f5a623) — secondary accent
- `--font-display`, `--font-body`, `--font-mono` — Google Fonts (Barlow Condensed, DM Sans, JetBrains Mono)

Always use CSS variables via `var(--color-nord-*)` in Tailwind arbitrary values, not raw hex colors.

## Cloudflare Workers (functions/)

`functions/api/contact.ts` — handles contact form POST. Uses Resend API to email leads. The `RESEND_API_KEY` is a Cloudflare Pages secret (set via `wrangler pages secret put`). Emails go to `info@nordischeenergy.com` with BCC to `srksourabh@gmail.com`.

## Key Patterns

- **Icons:** Use `getIcon()` from `src/lib/utils.ts` which maps string names to Lucide React components. Don't import Lucide icons directly in data constants.
- **Animations:** Framer Motion is used extensively. Components in `visuals/` are `"use client"` with motion elements.
- **Partner logos:** SVG files in `public/images/partners/`. Referenced in `ABOUT_CONTENT.partners` in constants.ts. Displayed with `brightness-0 invert` CSS filter.
- **Lead capture form:** Uses react-hook-form + Zod validation. The `LeadCapture` component is reused on multiple pages.
- **WhatsApp:** All phone/WhatsApp numbers are centralized in `SITE` constant. `toWhatsAppHref()` builds the `wa.me` link.
