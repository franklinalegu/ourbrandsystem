# MRJAMESBRAND LTD · Formation Brand System

**One website, one mark, one process.** Strategic Brand & Digital Experience Studio · Benin City → Global.

> Vector master: **Artboard3** (upright flat-bottom block M). Slanted Artboard1/4 = motion only. Artboard2 deprecated.

## Open it

No build step. Open any page by double-click, or serve the folder statically:

| File | What it is |
|---|---|
| `stakeholder.html` | Hub · one link for sign-off + decision table |
| `formation.html` | Formation Mark + Processes website |
| `presentation.html` | 13-slide interactive deck (arrows · O grid · F fullscreen · print to PDF) |
| `index.html` | Full Behance-style brand board |
| `rationale.html` | Logo depth · M·J·B·R layers, construction, grid |
| `icons-patterns.html` | Icon lab · 50 glyphs · size/stroke sliders, filter, click-to-copy |
| `illustrations.html` | Flat illustration gallery · 12 scenes |
| `uikit.html` | UI kit · 8 type tokens · 10 colour tokens · components |
| `design-system.html` | Design system spec · tokens, bento, playground |

Every page carries the shared top bar (`assets/site.css` + `assets/site.js`): HUB · FORMATION · DECK · BOARD · M·J·B·R · ICONS · ART · UI KIT · SYSTEM.

## Logo system (`assets/logo/` + `exports/`)

| File | Use |
|---|---|
| `mrjames-m-primary.svg` | Black on light |
| `mrjames-m-reversed.svg` | White on dark hero |
| `mrjames-m-lime.svg` | Lime moments only |
| `lockup-horizontal.svg` | Mark + MRJAMESBRAND LTD wordmark |
| `lockup-stacked.svg` | Centered stacked lockup |
| `favicon.svg` | 64px padded app icon + OG |

Geometry: viewBox 680×420 · stem 115 · gap 70 · bridge 100 · 45° shoulders · flat base y=360 · valley point-contacts 145,160 / 425,160. Clearspace = 1 stem. Minimum 24px digital / 12mm print.

**M·J·B·R depth** (`assets/rationale/anatomy-*.svg`): M master (MrJames·Mountain·Method) · J stem-01 hook (James) · B twin bowls (Brand) · R bowl + leg + mark (Registered). Trademark rule: ship **™** until CAC registration is confirmed in Legal Registrations; **®** only when registered.

## Icon pack · 50 (`assets/icons/` mirrored in `exports/icons/`)

24px grid · stroke `currentColor` 2.4 · square caps · miter joins · no fills except solid accents.

Arrows, menu, close, plus, check, search · work, services, solutions, method, insights, resources, academy, contact, booking, portal · growth, trust, proof, quote, play · phone, send, download, upload, external, copy, share, printer · invoice, payment, calendar, clock, pin, globe, award, team, target, idea, rocket, sliders, file, image, mic, home, bell, lock, palette.

Rules: 24px UI / 20px nav · never below 16px · lime for active state only · add new icons with the same `W()` stroke wrapper.

## Patterns · 8 and illustrations · 12

Patterns (`assets/patterns/`): m-tessellation · slash-motion (social motion only) · peak-grid · blueprint (hero/packaging) · dot-matrix (print backs) · bar-rhythm · valley-fade · lime-tape. All seamless `patternUnits="userSpaceOnUse"`.

Illustrations (`assets/illustrations/`): growth-bars · brand-stack · portal-dash · team-proof · megaphone · globe-network · invoice · shield-check · rocket · academy · chat · mountain-m. Flat fills only, brand ink, 480×360.

## UI kit · type tokens · colour

Type: Space Grotesk 700 display · Inter 400 body · IBM Plex Mono labels. Tokens `--text-display-1/2/3`, `--text-title`, `--text-lede`, `--text-body`, `--text-eyebrow`, `--text-caption` (see `uikit.html`). Never body copy in Grotesk. Never rounded display faces.

Colour: black `#000000` 60 · white `#FFFFFF` 25 · lime `#B7FF4A` 10 CTA only · paper `#F6F4EF` · mist `#E5E7EB` · graphite `#1A1A1A` · stone `#6B7280` · lime-soft `#E6F5C7` · forest `#0E2F26` portal · chocolate `#3B2313` portal. Pairs: black/white 21:1 · black-on-lime ~15:1 · white-on-forest AA. Lime on white fails: always black on lime.

Layout: 12-col · max 1280 · gutters 20/48/80 · 8pt base · 3px brutal proof cards · 1px hairline calm · radius 0 (pills + avatars excepted) · bento `gap:0 + shared 1px line` · `assets/design-system.css` loads after page styles on all 9 pages.

## Exporting

* Behance/deck: open `presentation.html` → `Ctrl+P` → Save as PDF (300dpi). PNGs: open any SVG → export at 1x/2x/3x.
* Copy: click any swatch, token, icon or illustration to copy hex, token or SVG code (clipboard + toast confirm).

## Rollout to the platform repo

1. `apps/web/components/site-chrome.tsx:39` text → `exports/mrjames-m-*.svg` + Space Grotesk lockup.
2. Favicon + OG + manifest ← `exports/favicon.svg`.
3. Retire JPGs sitewide (baked white dies on the black hero).
4. Legal: confirm ® vs ™ against CAC docs.

## Stack

Vanilla HTML/CSS/JS · Google Fonts (Space Grotesk, Inter, IBM Plex Mono) · no build · no external images. Source: Drive `Mrjamesbrand Documents` + `github.com/franklinalegu/mrjamesbrand`. System repo: `github.com/franklinalegu/ourbrandsystem`.

© 2026 MRJAMESBRAND LTD · Strategy · Brand · Digital · Growth.
