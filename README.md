# Derivée

A one-page site for Derivée, a private desk in Lagos. Institutional counterparties only.

- Production domain: `derivee.xyz`
- Contact: `hello@derivee.xyz`
- Selected direction: Night Book

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

The production build is a static export in `out/`. `npm start` serves that folder locally on port 3000.

## Deploy

### Netlify Drop

```bash
npm run build
zip -r derivee-netlify.zip out
```

Drag `derivee-netlify.zip` into [Netlify Drop](https://app.netlify.com/drop). No account configuration is required beyond logging in.

### Netlify from Git

`netlify.toml` is already set to:

- build command: `npm run build`
- publish directory: `out`

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Public one-pager |
| `/preview` | Internal art-direction archive (noindex) |
| `/preview/night-book` | Selected hero comp |
| `/preview/banknote` | Alternate direction |
| `/preview/lagos-machine` | Alternate direction |
| `/robots.txt` | Crawl rules; `/preview` disallowed |
| `/sitemap.xml` | Public sitemap |

## Structure

- `app/page.tsx` - homepage
- `app/home.module.css` - homepage layout
- `components/OrderBook.tsx` - illustrative hero order book
- `app/layout.tsx` - fonts, metadata, theme
- `app/opengraph-image.png`, `app/twitter-image.png` - social cards
- `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` - icons
- `public/brand/` - supplied logo files
- `public/images/` - Lagos photography
- `public/comps/` - screenshots and comparison sheet

## Brand and content notes

- Palette: black `#08090B`, brass `#D4A249`, off-white `#F6F5F1`.
- Display type is Source Serif 4; interface text is Geist and Geist Mono.
- The logo files in `public/brand/` are the supplied PNGs. Swap in the final SVG brand kit when it arrives.
- The order book is explicitly labelled illustrative. It is not market data.
- The cNGN mark is a text lockup. Replace it only when the official asset and approved wording are available.
- No AUM, returns, licences, team, or partner claims are published.
- Risk copy is general and does not invent a legal entity or regulatory status.

## Photography

The two Lagos images are used under their Creative Commons licences, with cropping and colour grading:

- Lagos Island at night - Omoeko Media, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via Wikimedia Commons.
- Lekki-Ikoyi Link Bridge at night - Olasunkanmiariyo, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), via Wikimedia Commons.

Replace these with commissioned photography when the final image library is available.
