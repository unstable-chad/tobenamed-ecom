# tobenamed-ecom

My startup's e-commerce services site, built with [Astro](https://astro.build).

## Getting started

Requires Node.js 22.12+.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run check    # type-check .astro and .ts files
```

## Where to edit things

| What | Where |
| --- | --- |
| Business name, email, WhatsApp number, socials | `src/config/site.ts` → `site` |
| Services, stats, process steps, brands, featured review | `src/config/site.ts` |
| Brand logos | drop files in `public/brands/` and set `logo: '/brands/<file>'` on the brand |
| Colours, fonts, spacing | `src/styles/global.css` (CSS variables at the top) |
| Landing page sections | `src/components/home/*.astro`, assembled in `src/pages/index.astro` |
| Header / footer / floating WhatsApp button | `src/components/` |

## Structure

```
src/
  config/site.ts          # all the content + contact details
  layouts/BaseLayout.astro
  components/             # Header, Footer, icons, WhatsApp button
  components/home/        # landing page sections
  pages/index.astro       # landing page (each file in pages/ becomes a route)
  styles/global.css
public/                   # static files served as-is (favicon, logos)
```

## Contact

WhatsApp uses `https://wa.me/<number>?text=...` links and email uses `mailto:` links, so no backend is needed.
