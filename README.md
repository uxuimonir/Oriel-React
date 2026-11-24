# Oriel — Next.js

A natural-light photography portfolio template. Next.js 16 (App Router), React 19, Tailwind CSS 4.
Black theme by default, with the full light palette one attribute away. Same design, content and
motion as the Astro edition of Oriel.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the build
npm run typecheck
```

Requires Node 20.9 or newer.

## Pages

| Route | File |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/work`, `/work/[slug]` | `src/app/work/` |
| `/studio` | `src/app/studio/page.tsx` |
| `/journal`, `/journal/[slug]` | `src/app/journal/` |
| `/contact` | `src/app/contact/page.tsx` |
| 404 | `src/app/not-found.tsx` |
| sitemap, robots | `src/app/sitemap.ts`, `src/app/robots.ts` |

## Edit the content

Everything on the site (text, series, journal posts, rates, FAQ, contact details) lives in one file:
`src/data/content.ts`. A photograph is referred to by file name only, e.g. `"zwsYwNmeZv4H9cJEPOpu8PkMw.png"`.

Add a series or a post by adding an object to `projects` or `posts`. Pages, links, the sitemap and
static paths update on their own.

## Photographs

Originals live in `public/photos` (high resolution). `next/image` serves responsive WebP from them
(widths 420 → 3200, quality 78) and caches the result for a year. To add a photo, drop it in
`public/photos`, use its file name in `content.ts`, then run `npm run og` to make its 1200×630
share image in `public/og`.

## Theme

All colours are CSS variables in `src/app/globals.css`. The black palette is on `:root`; the light
palette sits on `:root[data-theme="light"]`. Set `data-theme="light"` on `<html>` to switch.
Type scale, section rhythm and the 1536px shell are tokens in the same file.

## Motion

| Effect | How |
| --- | --- |
| Section and card reveal | `data-reveal` → `.is-in` (opacity, y 36 → 0, 0.9s) |
| Image exposure-open | `data-frame` (scale 1.06 → 1, 1.2s); hover scale 1.03 |
| Headline word rise + blur | `<Words>` (22px, 5px blur, 0.05s stagger) |
| Count-up numbers | `data-count` (1.4s, cubic ease-out) |
| Ticker | CSS marquee, pauses on hover |
| Navigation | hides on scroll down, returns on scroll up; drawer on phones |
| Links | colour and underline only, no movement |

One client component, `src/components/Motion.tsx`, drives scroll effects and re-runs on every route
change. Everything is switched off under `prefers-reduced-motion`, and content is visible without
JavaScript.

## Deploy

**Vercel (recommended).** Import the repo; no settings needed. Images are optimised on demand.

**Any Node host.** `npm run build && npm start`.

**Static hosting.** `npm run export` writes a static site to `out/`. Image optimisation is off in
this mode, so the original photographs are served as they are (about 100 MB). Use it for previews,
or run the originals through your own image CDN.

Set the production URL in `site.url` (`src/data/content.ts`); canonical links, Open Graph tags and
the sitemap use it.

## Accessibility and SEO

Skip link, one `h1` per page, labelled landmarks, visible focus, `aria-current` on navigation,
alt text on every photograph, keyboard-operable menu and filters, per-page title, description,
canonical, Open Graph and Twitter tags, sitemap and robots.

## Credits

Fonts: Archivo, DM Mono, Instrument Serif (Google Fonts, SIL OFL). Photographs are free-licence
work by the photographers named in each series' credits. The studio, people and quotes are fictional.
