# Project: tobenamed-ecom

Single-page marketing site for an e-commerce services agency. Built with Astro (static output, near-zero JS).
Contact is via WhatsApp (`wa.me` links) and email (`mailto:`) only — no backend.

## Commands

- `npm run dev` — dev server with hot reload at http://localhost:4321
- `npm run build` — production build to `dist/`
- `npm run check` — type-check `.astro` / `.ts` files (run before committing)

## Conventions

- All copy, contact details, services, brands and reviews live in `src/config/site.ts`. Components read from it; don't hardcode content in components.
- Design tokens (colours, radius, fonts) are CSS variables at the top of `src/styles/global.css`.
- Styles are scoped per `.astro` component. To style an element rendered by a child component (e.g. `<Icon>`'s `<svg>`), use `:global()`.
- Icons are inline SVGs in `src/components/Icon.astro` — no icon libraries.
- Must work at phone width (no horizontal scroll) and respect `prefers-reduced-motion`.

## Current state

A first landing page exists (hero, generic services, process, brands + review, CTA) with placeholder copy.
It is being reworked into the plan below.

## Plan (agreed with the owner)

One page, sticky header whose links scroll to each section:

1. **Header** — logo, links (Services, Brands, About, Contact), "Get in touch" button; mobile menu.
2. **Intro / hero** — headline along the lines of "We grow brands on Amazon, Walmart & eBay", one supporting line, WhatsApp + email buttons, a row of platforms we work with (Amazon, Walmart, eBay, Google, Meta). Use text badges by default — official platform logos are trademarks; owner may swap them in later.
3. **Services**, two groups:
   - Marketplace management — Amazon, Walmart, eBay: brand/store management + advertising management (one card per platform).
   - Local & paid growth — Google Business Profile management, Google Ads, Meta Ads.
4. **Brands we've managed** — infinitely looping, auto-scrolling logo marquee (duplicate the list for a seamless loop, pause on hover, static under reduced motion). Owner will drop logos into `public/brands/`. Below it, a reviews area that supports both written reviews and screenshots (Facebook / WhatsApp) — screenshots must have customer names/numbers blurred.
5. **About + Contact** combined — who we are, why us, contact buttons (form maybe later).
6. **Floating WhatsApp + email buttons**, always visible.
7. **Footer.**

## Open questions for the owner

- Business name and logo (placeholder "ToBeNamed" text logo until then).
- Colours — suggested dark navy + one bright accent (orange or teal) unless they have brand colours.
- Light site with a dark hero, or fully dark.
- Real email address and WhatsApp number (placeholders in `src/config/site.ts`).

Next step: build the intro/hero and overall design, then services.
