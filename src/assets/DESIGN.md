---
version: 2.1.0
name: Buser Andromeda
description: A warm, utility-first consumer travel marketplace anchored on a near-white canvas (#fafafa) and Buser Pink (#f11075), the single brand voltage that carries every primary CTA, active state, and brand marker. Type runs Poppins at modest weights — display sits at 18–32px in weight 500 rather than the heavy 700+ that fintech and enterprise systems use; the brand trusts whitespace, soft 16px radii, and the warm ink #454545 over typographic muscle. Pill-shaped chips (rounded.full = 500px), softly rounded cards (rounded.lg = 16px), and 8px input/button radii (rounded.sm) read as friendly and human. The system is monochromatic-pink — there is no secondary brand color; supporting tones are functional (success / error / warning / info), never decorative.

colors:
  # Brand
  primary: "#f11075"
  primary-active: "#e6006a"
  primary-pressed: "#b00051"
  primary-disabled: "#ffaecc"

  # Sub-brand accents (scoped surfaces only — never on mainline marketing)
  reseller: "#d81b60"
  carro-purple: "#6f0076"

  # Text
  ink: "#454545"
  body: "#454545"
  display-black: "#000000"
  muted: "#757575"
  muted-soft: "#c1c1c1"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

  # Surface
  canvas: "#fafafa"
  surface-card: "#ffffff"
  surface-hover: "#fafafa"
  surface-soft: "#fff7fa"
  surface-strong: "#f6f0eb"
  surface-sand: "#eee4d4"

  # Borders & dividers
  hairline: "#e0e0e0"
  hairline-soft: "#fafafa"
  border-strong: "#c1c1c1"
  border-dark: "#454545"

  # Semantic
  success: "#40b552"
  success-light: "#e8f5e9"
  success-dark: "#035810"
  error: "#dc2e36"
  error-light: "#ffebee"
  error-dark: "#a90d14"
  warning: "#e4ad1c"
  warning-light: "#fdf6ec"
  info: "#35befd"
  info-dark: "#0277bd"

  # Special
  star-rating: "#454545"
  legal-link: "#0277bd"
  scrim: "#000000"

typography:
  # Display tier
  display-xl:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0
  display-lg:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0
  display-md:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0
  display-sm:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: 0

  # Title tier
  title-lg:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  title-md:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  title-sm:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  title-xs:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0

  # Body tier
  body-md:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  body-sm:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  caption:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: 0
  caption-sm:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  micro:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0

  # Functional / utility
  label:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0
  badge:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.7
    letterSpacing: 0
  button-md:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-lg:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  link:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  nav-link:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0

  # Price (commerce signal)
  price-lg:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: 0
  price-md:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: 0
  price-sm:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0

  # Validation
  error-text:
    fontFamily: "Poppins, 'Poppins fallback', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 0

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 16px
  xl: 32px
  full: 500px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

shadows:
  card: "0 6px 60px rgba(74,63,69,0.06)"
  elevation-1: "0 4px 8px rgba(0,0,0,0.10)"
  elevation-2: "0 6px 16px rgba(0,0,0,0.10)"
  elevation-3: "0 12px 16px rgba(0,0,0,0.10)"
  focus-ring: "0 0 0 1px rgba(53,190,253,0.502)"

components:
  # Buttons
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: 0 16px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-primary-disabled:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.muted}"
    borderColor: "{colors.muted-soft}"
    rounded: "{rounded.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-active}"
    borderColor: "{colors.primary-active}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    padding: 0 16px
    height: 44px
  button-tertiary-text:
    backgroundColor: transparent
    textColor: "{colors.primary-active}"
    typography: "{typography.button-md}"
  button-pill-brand:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 0 16px
    height: 34px
  button-large:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.lg}"
    padding: 0 24px
    height: 54px

  # Icon buttons
  icon-button-circle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 34px
    width: 34px
  icon-button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"
    height: 44px
    width: 44px

  # Navigation
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    height: 60px
  product-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.full}"
    padding: 6px 16px
  product-tab-inactive:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.full}"
    padding: 6px 16px

  # Search surface
  search-bar-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 8px
  search-field-segment:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: 0 12px
    height: 44px
  search-submit:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.lg}"
    height: 44px

  # Chips
  category-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 0 16px
    height: 34px
  category-chip-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-active}"
    borderColor: "{colors.primary-active}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"

  # Cards
  destination-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: 16px
  destination-card-photo:
    rounded: "{rounded.lg}"
  promo-card:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 32px
  trip-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: 16px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: 16px
  values-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: 24px
  reservation-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: 16px

  # Badges
  badge-novo:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 1px 8px
  badge-discount:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.badge}"
    rounded: "{rounded.sm}"
    padding: 1px 8px

  # Lists
  list-item:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: 16px
  city-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"

  # Date picker
  date-picker-day:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    height: 35px
    width: 35px
  date-picker-day-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  date-picker-day-in-range:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    rounded: "{rounded.sm}"
  date-picker-day-disabled:
    backgroundColor: transparent
    textColor: "{colors.muted-soft}"
    rounded: "{rounded.sm}"

  # Inputs
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    padding: 0 12px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.info}"
    rounded: "{rounded.sm}"
  text-input-invalid:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    borderColor: "{colors.error}"
    rounded: "{rounded.sm}"

  # Alerts
  alert-success:
    backgroundColor: "{colors.success-light}"
    textColor: "{colors.success-dark}"
    borderColor: "{colors.success}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px
  alert-error:
    backgroundColor: "{colors.error-light}"
    textColor: "{colors.error-dark}"
    borderColor: "{colors.error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px
  alert-warning:
    backgroundColor: "{colors.warning-light}"
    textColor: "{colors.ink}"
    borderColor: "{colors.warning}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px

  # Footer
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.hairline}"
    padding: 40px 16px
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.primary-active}"
    typography: "{typography.body-sm}"
  legal-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
---

## Overview

Buser is a Brazilian intercity-bus marketplace that connects travelers to chartered (`Fretamento`) and partner-operator bus trips, optimizing routes and pricing through aggregated demand. The visual language leans toward **utility, accessibility, and trust** — schedules, pricing, and boarding logistics dominate the surface area, and the design system is calibrated for fast comparison rather than editorial storytelling.

The base canvas is a near-white warm grey (`{colors.canvas}` — `#fafafa`), deliberately not pure white, so that white cards (`{colors.surface-card}` — `#ffffff`) lift above the page without needing aggressive shadows. Body text sits at a warm dark grey (`{colors.body}` — `#454545`), again deliberately not pure black, to keep dense information pages readable across long sessions.

A single saturated magenta — **Buser Pink** (`{colors.primary}` — `#f11075`) — carries the entire brand voltage: primary CTAs ("Buscar", "Selecionar", "Reserve agora"), active navigation states, the wordmark, and price overlays on hero photography. There is **no secondary brand color** in the core experience. Supporting tones are strictly functional (success, error, warning, info), never decorative. This monochromatic restraint is what makes the pink read as a price-trust signal rather than marketing flourish.

Type runs **Poppins** sans-serif throughout, with a bespoke "Poppins fallback" `@font-face` rule (built from local Arial with `ascent-override: 93.6182%` and `size-adjust: 112.1577%`) that holds the same metrics until the web font loads. Headings sit at weight **500** rather than the heavy 700+ that fintech and enterprise systems use; the system trusts photography, generous whitespace, and the saturated brand pink to do the work bolder type would do elsewhere.

The shape language is consistently soft: 16px radii on cards (`{rounded.lg}`), 8px on inputs and buttons (`{rounded.sm}`), and full-pill (500px — `{rounded.full}`) on chips, category tabs, and the "Novo" badge. There are no hard corners on interactive surfaces.

### Key Characteristics

- **Single brand voltage** — Buser Pink (`{colors.primary}`) carries CTAs, active states, and price-on-photo overlays. Used frequently inside transactional flows but never decoratively.
- **Poppins everywhere** — modest weights (500 for headings, 400 for body, 600 for `<strong>`, 700 only for prices).
- **Search-first interface** — origin / destination / date inputs at the top of every entry surface with strong visual priority and clear segmentation.
- **List-based marketplace results** — `{component.trip-card}` rows prioritize departure time, duration, boarding points, and price — never imagery.
- **High-density layout** — 16px gutters between trip rows because users compare, they don't browse.
- **Logistics-focused UI** — boarding-point chips, seat-selection canvas, and remarcação flows are core, reinforcing clarity and control.
- **Subtle, warm-tinted shadows** — `rgba(74, 63, 69, …)` instead of pure black, picking up brand warmth.
- **Mobile-first patterns** — sticky bottom CTAs, 44px tap targets as the system minimum, full-bleed sheets for date and city pickers.

## Colors

### Brand & Accent

- **Buser Pink** (`{colors.primary}` — `#f11075`): The single brand color. Used for the primary CTA fill, the search submit button, the active state on bottom-nav icons, the top page-load progress strip, the wordmark, and inline brand markers in selected chips. The most recognizable color in the Brazilian intercity-bus category.
- **Buser Pink Active** (`{colors.primary-active}` — `#e6006a`): Hover variant on filled CTAs and the default color of every inline `<a>` tag on the site. Slightly more saturated and less luminous than Buser Pink — visually one notch deeper.
- **Buser Pink Pressed** (`{colors.primary-pressed}` — `#b00051`): The pointer-down / press variant on link-style buttons and the active text color used inside transparent-button (`is-link`) variants.
- **Buser Pink Disabled** (`{colors.primary-disabled}` — `#ffaecc`): A pale tint reserved for accent fills inside pink-themed banners. **Note:** Buser does NOT use this on disabled CTAs — the disabled CTA falls back to a hairline-grey shell (see `{component.button-primary-disabled}`).
- **Reseller Magenta** (`{colors.reseller}` — `#d81b60`): Sub-brand accent for the Buser Revendedor (authorized reseller) taskbar. Only appears on reseller-scoped surfaces — never in mainline marketing.
- **Buser Carro Purple** (`{colors.carro-purple}` — `#6f0076`): Sub-brand accent reserved for Buser Carro (the carpool sub-product). Same scoping as Revendedor — sub-product only.

### Surface

- **Canvas** (`{colors.canvas}` — `#fafafa`): The default page floor for every public page. Note this is **not** pure white — Buser's body sits on a warm near-white that gives white cards a subtle lift. There is no dark mode on the public web, though a `dark-mode` class exists on the page shell for embedded WebView contexts (background goes to `#000`).
- **Surface Card** (`{colors.surface-card}` — `#ffffff`): The card and modal interior fill — used on `.ada-card`, action sheet wrappers, search-field interiors, and dropdown menus. Sits on top of Canvas.
- **Surface Hover** (`{colors.surface-hover}` — `#fafafa`): Field hover state and transparent-button hover background. Same hex as Canvas — used at the component level to signal interactivity without changing chroma.
- **Surface Soft** (`{colors.surface-soft}` — `#fff7fa`): The lightest brand wash — selected-chip background, "Novo" badge fill, and the highlighted day-range fill on the calendar between two selected days.
- **Surface Strong** (`{colors.surface-strong}` — `#f6f0eb`) and **Surface Sand** (`{colors.surface-sand}` — `#eee4d4`): Warm neutral fills reserved for editorial / "Buser Day" promotional sections — never on transactional surfaces.

### Borders & Dividers

- **Hairline** (`{colors.hairline}` — `#e0e0e0`): The default 1px border tone — outlined cards, search-field outlines, accordion dividers, calendar nav baseline, footer top border, list-item separators.
- **Border Strong** (`{colors.border-strong}` — `#c1c1c1`): A heavier stroke for disabled outlined buttons and disabled calendar day numerals.
- **Border Dark** (`{colors.border-dark}` — `#454545`): Used as the chip hover border (chip outline shifts from `#e0e0e0` to `#454545` on pointer-over) and as the dark-mode footer top border.

### Text

- **Ink / Body** (`{colors.ink}` / `{colors.body}` — `#454545`): The dominant text color on light surfaces. Body copy, bottom-nav default state, footer link color, list-item text, input value text. Buser is deliberate about **not** using pure black — `#454545` is a warm dark grey that keeps long pages from feeling clinical.
- **Display Black** (`{colors.display-black}` — `#000000`): Reserved for the homepage `<h2>` display headlines ("É só você vivendo o seu caminho.", "Veja o que falam sobre a Buser") and the dark-mode taskbar fill. Used sparingly and only at large sizes.
- **Muted** (`{colors.muted}` — `#757575`): Secondary text — input placeholders, list-item subtitles, calendar weekday labels ("Dom", "Seg"), modal close-button labels, "Saindo de / A partir de" sub-labels above route prices on destination cards.
- **Muted Soft** (`{colors.muted-soft}` — `#c1c1c1`): Same hex as Border Strong — used for disabled calendar day numerals.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): White text on the Buser Pink CTA, on the pink hero header ("Viagens de ônibus com mais conforto pelo menor preço"), on the price-pill overlay on highlighted destination cards, and on the bottom dark-gradient overlay on city imagery.

### Semantic

- **Success** (`{colors.success}` — `#40b552`): Filled success buttons and the green check on the "lead saved" newsletter confirmation. Paired with `{colors.success-light}` (`#e8f5e9`) as the alert background and `{colors.success-dark}` (`#035810`) as the selected-state text on green chips.
- **Error** (`{colors.error}` — `#dc2e36`): Inline form-validation text, error-alert border, the field-invalid outline on `.ada-field.f-invalid`, and notification-dot fill. Paired with `{colors.error-light}` (`#ffebee`) and `{colors.error-dark}` (`#a90d14`).
- **Warning** (`{colors.warning}` — `#e4ad1c`): The amber pair, used on the "Promo / discount" homepage band background and on warning alerts. `{colors.warning-light}` (`#fdf6ec`) is the fill behind the "Confira aqui nossas promoções" homepage band.
- **Info** (`{colors.info}` — `#35befd`): The focus-ring color on outlined fields (`.fc-focused` gets a `0 0 0 1px rgba(53,190,253,.502)` halo via `{shadows.focus-ring}`), the city-swap chevron `⇄` icon between origin and destination, and info-alert borders. `{colors.info-dark}` (`#0277bd`) is used for filled blue buttons and the legal-link color in the footer.

### Scrim & Overlay

- **Scrim** (`{colors.scrim}` — `#000000` at 74.9% opacity): The global modal / action-sheet backdrop — date picker, login dialog, city autocomplete sheet on mobile. Notably **heavier than most travel sites' scrims** (Airbnb sits at 50%) — Buser opts for a denser focus pull because the booking flow on mobile is full-screen sheet-driven.

## Typography

### Family

The system runs **Poppins** (Google Fonts, weights 400 / 500 / 600 / 700) for everything — display, body, navigation, fields, captions. The fallback stack walks `Poppins, "Poppins fallback", sans-serif`, where "Poppins fallback" is a custom `@font-face` rule built from local Arial with `ascent-override: 93.6182%` and `size-adjust: 112.1577%` — a layout-stability trick so Arial holds the same metrics as Poppins until the web font loads.

There is no separate display family. Poppins carries the entire scale, and the only non-Poppins glyphs on the site are FontAwesome icons.

### Hierarchy

| Token | Size (mobile → ≥768px) | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 32px → 64px | 400 | 115% | Hero h1 over the pink header ("Viagens de ônibus com mais conforto pelo menor preço") |
| `{typography.display-lg}` | 28px → 48px | 500 | 115% | Section h2s on the homepage ("É só você vivendo o seu caminho.", "Segurança pra você trilhar o seu caminho") |
| `{typography.display-md}` | 24px → 32px | 500 | 115% | Sub-section heads ("Destinos mais procurados", "Compre pelo Whatsapp", "Veja o que falam sobre a Buser") |
| `{typography.display-sm}` | — → 24px | 500 | 115% | Compact display headings inside cards |
| `{typography.title-lg}` | — → 28px | 500 | 120% | Result-page H1 ("Ônibus de São Paulo para Rio de Janeiro") with city tokens at 600 |
| `{typography.title-md}` | — → 24px | 500 | 120% | Modal titles, sub-section heads inside long-form pages |
| `{typography.title-sm}` | 18px → 24px | 500 | 120% | Card titles inside city blocks ("Ônibus para São Paulo", "Ônibus para Rio de Janeiro") |
| `{typography.title-xs}` | — → 16px | 500 | 120% | Dense list / accordion titles, form section heads, filter-group headers |
| `{typography.body-md}` | — → 16px | 400 | 133% | Default body text, list items, button labels |
| `{typography.body-sm}` | — → 14px | 400 | 133% | Field meta, footer links, route-row text, badge content at large size |
| `{typography.caption}` | — → 12px | 500 | 133% | Calendar weekday legends, chip captions, "vantagens" strip below the hero ("Cancelamento gratuito", "Suporte 24h") |
| `{typography.caption-sm}` | — → 12px | 400 | 133% | Address rows, micro-meta beneath pickup-points, privacy-policy line |
| `{typography.micro}` | — → 10px | 600 | 133% | Notification count pip on the profile avatar / nav bell |
| `{typography.label}` | — → 14px | 600 | 133% | The small bold cap above each search field ("Saindo de", "Indo para", "Data de ida") |
| `{typography.badge}` | — → 12px | 600 | 170% | `.ada-badge` default — the "Novo" tag next to "Experiências", discount badges on cards |
| `{typography.button-md}` | — → 16px | 500 | 125% | Default `.ada-button.is-button` label |
| `{typography.button-sm}` | — → 12px | 500 | 125% | Small button variant (`.b-small`) — used on inline CTAs inside cards and chips |
| `{typography.button-lg}` | — → 18px | 500 | 125% | Large button variant (`.b-large`) — primary "Buscar" CTA in mobile sheet flows |
| `{typography.link}` | — → 16px | 400 | 133% | Default inline link, primary-active color |
| `{typography.nav-link}` | — → 16px | 500 | 125% | Top-nav links and product tabs |
| `{typography.price-lg}` | — → 32px | 700 | 110% | Featured route price overlay on highlighted destination cards (e.g. "R$ 21,90" on the São Paulo card) |
| `{typography.price-md}` | — → 24px | 700 | 110% | Trip-card meta-block price ("R$ 86,00") on result pages |
| `{typography.price-sm}` | — → 16px | 600 | 120% | Inline price in compact rows |
| `{typography.error-text}` | — → 12px | 600 | 133% | Validation error text below fields |

### Principles

**Display weights stay deliberately calm.** The hero `{typography.display-xl}` at 64px / 400 is the largest type on the homepage but it sits beneath the search-bar card — the search surface is the visual anchor of the page, not the headline. On result pages the H1 (`{typography.title-lg}` — "Ônibus de São Paulo para Rio de Janeiro") drops to 28px / 500 because the trip-list rows below it need the visual oxygen, and the "49 horários encontrados" count beside it is muted at body-sm.

**The single typographically loud moment is the price.** On a featured destination card, the price overlay uses `{typography.price-lg}` — 32px / 700, white text on a Buser Pink lozenge — the loudest pixel in the whole system. On a result-page trip card, the price is `{typography.price-md}` — 24px / 700, ink (not pink), right-aligned. The system never uses brand pink for price digits inside a row because pink is reserved for the **Selecionar** CTA next to it, so the eye lands on price → CTA in that order. This is the deliberate trust pattern across the marketplace: the number reads neutral, the action reads brand.

**`<strong>` and `<b>` are pinned at weight 600** (not the default 700) — Buser treats semibold as the visual "bold" to keep emphasis softer against the friendly Poppins shapes. All headings render with `letter-spacing: 0` (the global reset zeroes letter-spacing on every element). Line-heights cluster around three values — `115%` for display, `120%` for sub-display, `133%` for body — and the type scale never uses `100%` line-height except in icon-only contexts.

### Note on Font Substitutes

If Poppins is unavailable, **Inter** is the closest open-source substitute and ships with similar geometric proportions. Adjust `{typography.price-lg}` and `{typography.price-md}` up by ~1px to compensate for Inter's slightly narrower numerals; otherwise the proportions transfer cleanly. **Avoid Roboto for display sizes** — its tighter horizontal spacing breaks the airy display feel that Poppins's wider counters carry. **Never substitute with serifs** — the entire shape language is calibrated against Poppins's geometric sans curves; any serif will collide with the soft 16px radii.

## Components

### Buttons

**`{component.button-primary}`** — Buser Pink fill, white text, 16px radius (`{rounded.lg}`), 44px height, weight 500 (`{typography.button-md}`), padding `0 16px`. The most common CTA in the system: "Buscar", "Selecionar", "Reserve agora", "Continuar". On result-page trip cards it appears at 40px height to fit the row.

**`{component.button-primary-hover}`** — Background flips to `{colors.primary-active}` (`#e6006a`). No transform, no shadow change.

**`{component.button-primary-pressed}`** — Background flips to `{colors.primary-pressed}` (`#b00051`).

**`{component.button-primary-disabled}`** — Hairline-grey shell (`{colors.hairline}`) with muted text (`{colors.muted}`) and a `{colors.muted-soft}` 1px border. **Important:** Buser does NOT use the pale-pink `{colors.primary-disabled}` token on disabled CTAs — disabled needs to read as "unavailable", not "tinted brand", so the system swaps to greyscale.

**`{component.button-secondary}`** — Canvas fill with primary-active text and a 1px primary-active outline. 16px radius, 44px height. Used for "Cancelar", inverse CTAs, and secondary actions inside modals.

**`{component.button-tertiary-text}`** — Plain primary-active text, no surface, no border. Used for "Ver mais ônibus" footer links inside destinations cells, "Ver detalhes" expanders on trip cards, "Ver todas as notícias", and modal close labels.

**`{component.button-pill-brand}`** — A small pill-shaped Buser Pink CTA at full radius (500px — `{rounded.full}`), 34px height, button-sm typography. Used for inline CTAs inside cards and category chip selections.

**`{component.button-large}`** — Buser Pink fill at 54px height with `{typography.button-lg}` (18px / 500). Used on the primary "Buscar" CTA in mobile sheet flows where the CTA must dominate the foreground.

### Search Surface

**`{component.search-bar-card}`** — The signature global search container. White-canvas fill, 16px radius, 8px internal padding, soft elevation (`{shadows.card}`). Contains four `{component.search-field-segment}` cells (**Saindo de**, **Indo para**, **Data de ida**, **Data de volta**) followed by the `{component.search-submit}` button flush right. On result pages, a compact variant persists at the top of the page, narrower and aligned with the breadcrumb.

**`{component.search-field-segment}`** — Each segment carries a `{typography.label}` cap (14px / 600) above an ink placeholder line in body-md. 1px hairline border, 8px radius, 44px height. On focus, the focus-ring shadow `{shadows.focus-ring}` (`0 0 0 1px rgba(53,190,253,0.502)`) appears around the segment without thickening the border. Between origin and destination sits a swap-cities icon — an info-color chevron `⇄` button that swaps the two field values on click.

**`{component.search-submit}`** — The terminating Buser Pink button on the right of the search card. **Note:** Buser does NOT use a circular orb (Airbnb-style) — the submit is a 16px-radius rectangle at 44px height, matching the field segments around it. The visual effect is "one cohesive search card" rather than "form + standalone CTA".

### Top Navigation

**`{component.top-nav}`** — Canvas fill (`#fafafa`), 60px height (56px on mobile), 1px bottom hairline, body-color text in nav-link typography. The Buser wordmark sits flush left in `{colors.primary}` (the wordmark is one of the few non-CTA places brand pink appears). Center carries inline product links: **Início**, **Promoções**, **Experiências** (with `{component.badge-novo}`), **Viagens**, **Ajuda**. Account utilities (login / Perfil) sit flush right.

**`{component.product-tab-active}`** — Buser Pink fill, white text, full-pill radius (500px), `6px 16px` padding. The active state is a permanent version of the hover fill — **Buser does not use underlines** for active states in the top nav; the pink pill carries the entire weight.

**`{component.product-tab-inactive}`** — Transparent background, body-color text, full-pill radius, same padding. Hover triggers the brand-pink fill.

**`{component.badge-novo}`** — A pale-pink rounded-pill badge, primary-color text, `{typography.badge}` (12px / 600). Anchored next to "Experiências" in the top nav. **Buser writes it "Novo" in mixed case (not "NEW" uppercase)** because the audience is Brazilian — there is no uppercase-tag pattern anywhere in the system.

### Destination Cards (Homepage)

**`{component.destination-card}`** — White surface, 1px hairline border, 16px radius, 16px padding, soft warm-tinted card shadow (`{shadows.card}`). Each card holds: a city header in `{typography.title-sm}` ("Ônibus para São Paulo"), a "Saindo de" / "A partir de" sub-label row in caption-sm muted, and a stack of 5 origin links with right-aligned `R$ XX,XX` prices in body-sm.

**`{component.destination-card-photo}`** — When a card features a hero image (the highlighted São Paulo / Rio cells), the photo uses 16px corner clipping matching the card. A bottom dark-gradient overlay carries a price pill in `{typography.price-lg}` (32px / 700, white) showing the headline starting price.

**`{component.promo-card}`** — The sand-light "Confira aqui nossas promoções" promo band variant. Uses `{colors.surface-strong}` (`#f6f0eb`) fill, ink text, 16px radius, 32px padding, holds a `{typography.title-sm}` headline and a `{component.button-pill-brand}` CTA ("QUERO PROMO").

### Trip Cards (Result Page)

**`{component.trip-card}`** — The marketplace's primary unit on result pages: a horizontal white-card row, 1px hairline border, 16px radius, 16px padding, full container width. Layout left-to-right:

1. **`trip-card-operator-strip`** — A 32px-tall band carrying the operator logo (Buser Fretamento horizontal wordmark in primary, or partner-operator wordmarks like Levare, Viação RioDoce) on the left, and an availability tag on the right ("6 vagas disponíveis" muted, or "1 vaga disponível" in `{colors.warning}` when scarcity).
2. **`trip-card-route-line`** — The card's structural spine: `[departure-time, body-md / 600] ─── [duration, muted, body-sm] ─── [arrival-time, body-md / 600]`, with a 1px hairline rule connecting the times. Beneath each time sits the pickup-point name in body-sm and a row of `point-icon-chip` badges (metrô-line marker in `{colors.info-dark}`, photos-available marker in `{colors.primary}`, sala-VIP marker in `{colors.ink}`).
3. **`trip-card-meta-block`** — Right-aligned: seat type ("Semi-leito", "Leito", "Leito Individual", "Cama Premium") in body-sm, then the price in `{typography.price-md}` ink (**not** pink), then the installment line ("3x R$ 28,51") in caption-sm muted, then the `{component.button-primary}` "Selecionar" CTA at 40px height to fit the row.
4. **`trip-card-expander`** — A `{component.button-tertiary-text}` "Ver detalhes" at the bottom of the meta block. On click, the card expands downward to reveal the full pickup-point detail stack with addresses, intermediate stops, and muted instruction text.

**`featured-trip-card`** — A trip card flagged as "Recomendado" or "Melhor preço disponível" carries an additional 4px-wide `{colors.primary}` vertical rule on its left edge and a small uppercase tag label above the operator strip. The shadow tier remains `{shadows.card}` — featured does not float.

**`point-icon-chip`** — A 16×16 rounded-square chip with a colored fill carrying a white glyph: `{colors.info-dark}` for metrô-line markers (the "M" subway logo), `{colors.primary}` for "fotos disponíveis" (a small camera glyph), and `{colors.ink}` for accessibility / premium-lounge markers. Sits inline beneath the pickup-point name.

### Result Page Surfaces

**`result-page-header`** — Sits above the trip-card stack. Holds: the breadcrumb (`Home › Ônibus › São Paulo - SP › Rio de Janeiro - RJ` in caption muted), the H1 in `{typography.title-lg}` with city tokens at weight 600, and the result count ("49 horários encontrados") in body-sm muted, all left-aligned in a single column.

**`filter-rail`** — Left sticky rail. Each filter group ("Horário de Embarque", "Tipo de Poltrona", "Característica", "Trajeto", "Ponto de embarque", "Ponto de desembarque", "Empresas") sits as a collapsible accordion with a 1px hairline divider above. Group header in `{typography.title-xs}` ink, options as checkbox rows stacked at body-sm.

**`day-divider`** — A horizontal date band that breaks the trip-card stack into day groupings ("segunda-feira, 13 de abril", "terça-feira, 14 de abril"). Date in `{typography.title-xs}` ink left-aligned, day-name in lowercase, no rule above or below — just `{spacing.lg}` (24px) of vertical space.

**`recommended-band`** — A faint `{colors.surface-soft}` band wrapping the top 1–2 featured cards with a caption-style label "Recomendados para você" above the band. Used to soft-promote algorithmic best-match results without breaking the visual rhythm of the stack.

**`livelo-strip`** — A thin promotional row beneath the filter header showing the Livelo loyalty integration ("Recompensa ativa") with the Livelo wordmark and a toggle. Sits on `{colors.surface-soft}` to differentiate it from the trip-card stack.

### Forms & Inputs

**`{component.text-input}`** — Canvas fill, 1px hairline outline (`{colors.hairline}`), 8px radius, 44px height, body-md text, 12px horizontal padding. Stacked label above in `{typography.label}` (14px / 600). On focus (`{component.text-input-focused}`), the border flips to `{colors.info}` and the focus-ring shadow `{shadows.focus-ring}` is applied. On invalid (`{component.text-input-invalid}`), the border flips to `{colors.error}` and inline error-text appears below in `{typography.error-text}`.

**`{component.date-picker-day}`** — A 35×35 cell with 8px radius (NOT circular — Buser uses **rounded squares** to differentiate range-selection from Airbnb-style single-day selection). Body-color text, transparent fill at default. On focus, a primary-pink border appears.

**`{component.date-picker-day-selected}`** — Buser Pink fill, white text, 8px radius. Boundary days of a date range stay solid pink.

**`{component.date-picker-day-in-range}`** — Surface-soft (`#fff7fa`) lozenge background that connects the boundary days, body-color text, 8px radius. The boundary days at each end of the range remain solid Buser Pink.

**`{component.date-picker-day-disabled}`** — `{colors.muted-soft}` text on transparent fill, no interactivity.

### Newsletter & Promo Bands

**`newsletter-band`** — A horizontal band above the footer with a left-aligned `{typography.title-sm}` headline ("Inscreva-se e economize ainda mais com promoções exclusivas"), a single `{component.text-input}`, and a `{component.button-primary}` "Quero receber". Privacy-policy link beneath in caption-sm muted.

**`whatsapp-promo-band`** — A two-column horizontal band: image of a smiling person with a phone on one side, copy + a green-WhatsApp CTA on the other. **The CTA is the only place a non-Buser brand color (WhatsApp green `#25D366`) appears in the system, intentionally** — it signals platform handoff.

**`app-download-band`** — Mirror of the WhatsApp promo: image plus dual app-store badges (Google Play, App Store) at 32px height. The app-store badges are the only place pure black (`#000000`) appears as a fill outside the homepage h2 display.

### Alerts

**`{component.alert-success}`** — `{colors.success-light}` fill, `{colors.success-dark}` text, 1px `{colors.success}` border, 8px radius, 12px padding. Used for "Lead saved" newsletter confirmation.

**`{component.alert-error}`** — `{colors.error-light}` fill, `{colors.error-dark}` text, 1px `{colors.error}` border, same dimensions. Used for inline form-validation summary.

**`{component.alert-warning}`** — `{colors.warning-light}` fill, ink text, 1px `{colors.warning}` border, same dimensions. Used for the "Promo / discount" homepage band background.

### Footer

**`{component.footer}`** — Canvas fill (no contrast tone — Buser does not use a dark footer), 1px top hairline, `40px / 16px` padding. Three columns of link blocks (**Destinos** / **Viagem** / **Sobre a Buser**), each headed with a `{typography.title-sm}` ink label and stacking `{component.footer-link}` rows in body-sm.

**`{component.footer-link}`** — Primary-active text (Buser uses brand color for footer links globally), 8px vertical row spacing, no underline at rest, hairline pink underline on hover.

**`certification-band`** — Horizontal band beneath the footer columns carrying the **RA 1000**, **Cadastur**, and **SAC Libras** badges at 32px height with muted-text labels beneath each.

**`{component.legal-band}`** — Bottom strip carrying the copyright line ("© 2026 Copyright - Todos os direitos reservados. Buser Brasil Tecnologia LTDA - CNPJ: 29.365.880/0001-81") and the sitemap link. Centered, in caption muted.

## Layout

### Spacing System

- **Base unit:** 4px (no 2px micro-step — the system does not use sub-4px values).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px.
- **Section padding (vertical):** `{spacing.section}` (64px) between major homepage bands; `{spacing.xl}` (32px) on result pages between the search bar and the first trip row — tighter than the homepage because the trip list is a high-density utility surface where every additional pixel pushes the second result below the fold.
- **Card internal padding:** `{spacing.xl}` (32px) for `{component.promo-card}`; `{spacing.lg}` (24px) for `{component.values-card}`; `{spacing.md}` (16px) for `{component.trip-card}`, `{component.destination-card}`, `{component.list-item}`, and `{component.testimonial-card}`; `{spacing.sm}` (12px) for the alert components and dense rows.
- **Gutters:** `{spacing.md}` (16px) between trip-card rows in the result list (rows are stacked, never tiled); `{spacing.lg}` (24px) between footer columns; `{spacing.xs}` (8px) between the icon-chips that flag pickup points.

### Grid & Container

- **Max content width:** ~1180px centered on the homepage and editorial pages. Result pages cap at 1080px to keep the trip-card row legible without running too wide for the eye to scan price-aligned columns.
- **Homepage destinations grid:** 3-column at desktop (Ônibus para São Paulo / Rio de Janeiro / Belo Horizonte top row, then Vitória / Campinas / Brasília), each cell holding a city header in `{typography.title-sm}` and a stack of 5 origin links in body-sm with right-aligned `R$ XX,XX` prices.
- **Result page:** 2-column with a sticky filter rail on the left (~22% width) and the trip-card stack on the right (~78%). On narrower desktops the filter rail collapses to a "Filtros" button that opens a sheet.
- **Footer:** 3-column link list (Destinos / Viagem / Sobre a Buser) at desktop, collapsing to a stacked accordion on mobile. A fourth horizontal band beneath holds the certification badges (RA 1000, Cadastur, SAC Libras) and the legal copy.

### Whitespace Philosophy

The system pulls open at the search hero — the top viewport is mostly photography (the rotating banner promo) and the search-bar card — then compresses sharply into utility density once the user is looking for a trip. Result-page trip cards sit just **16px apart** because the user is comparing rows, not browsing. The contrast tells the user where they are: hero pages breathe, marketplace pages stack. Buser sells **utility, not aspiration** — there is no editorial "white-on-white luxury" pacing.

## Elevation

The system has **three shadow tiers** plus the flat baseline. Buser uses warm-tinted shadows on cards (`rgba(74, 63, 69, …)`) instead of pure black, picking up just enough warmth from the brand to feel cohesive with the pink CTA above.

- **Flat (no shadow):** Body, hero banner, footer, static destinations grid — about 80% of surfaces.
- **Card rest** (`{shadows.card}` — `0 6px 60px rgba(74, 63, 69, 0.06)`): The very soft, wide warm-tinted drop used on destination cards, trip cards at rest, and cupom cards. The signature shadow of the system.
- **Elevation 1** (`{shadows.elevation-1}` — `0 4px 8px rgba(0, 0, 0, 0.10)`): Fixed taskbar after scroll, sticky bottom-nav top edge.
- **Elevation 2** (`{shadows.elevation-2}` — `0 6px 16px rgba(0, 0, 0, 0.10)`): Floating cards, dropdown menus, autocomplete sheets, the date-picker calendar pop.
- **Elevation 3** (`{shadows.elevation-3}` — `0 12px 16px rgba(0, 0, 0, 0.10)`): Modal wrappers and the desktop profile floating menu.
- **Focus ring** (`{shadows.focus-ring}` — `0 0 0 1px rgba(53, 190, 253, 0.502)`): The info-blue 1px halo applied to outlined fields on focus. This is the only interactive shadow that uses a chromatic value.

The system does not stack shadows for visual hierarchy beyond these tiers — depth comes from the hairline grid, the card-rest warm shadow, and the `{colors.surface-soft}` brand washes rather than from layered depth.

## Do's and Don'ts

### Do

- **Use `{colors.primary}` (#f11075) ONLY for primary actions, active states, brand markers, and price-on-photo overlays.** Restrict it; over-use kills its trust voltage.
- **Use `{colors.body}` (#454545) as the body text color, not #000.** Buser deliberately avoids pure black to keep dense pages readable for long sessions. Reserve `{colors.display-black}` for the homepage h2 only.
- **Use Poppins at modest weights** — 500 for headings, 400 for body, 600 for `<strong>`, 700 only for prices.
- **Use 16px radii on cards** (`{rounded.lg}`) and 8px on inputs/buttons (`{rounded.sm}`). Use full-pill 500px (`{rounded.full}`) on chips, category tabs, and the Novo badge.
- **Use the warm-tinted shadow `{shadows.card}` on cards**, not pure-black drop shadows. The warmth is what coheres with the pink CTA above.
- **Use Portuguese (pt-BR) copy** for all user-facing strings unless the context is strictly developer-facing.
- **Default to mobile-first responsive patterns** — sticky bottom CTAs on transactional flows, full-bleed sheets for date and city pickers.
- **Render prices as ink in row contexts and white over a pink lozenge in hero contexts.** This is a hard rule — the eye must land on price → CTA, never price → price.
- **Use `{colors.hairline}` (#e0e0e0) as the workhorse 1px border** on every outlined surface.

### Don't

- **Don't use #000 as a body color.** It only appears on the homepage display h2 and the dark-mode taskbar.
- **Don't use `{colors.primary-disabled}` (#ffaecc) on disabled CTAs.** Use `{component.button-primary-disabled}` (hairline-grey shell) instead. Disabled needs to read as "unavailable", not "tinted brand".
- **Don't introduce a secondary brand color.** The system is monochromatic-pink; supporting tones are functional (success / error / warning / info), never decorative.
- **Don't use uppercase tags on badges.** Buser writes "Novo" in mixed case — the system has no uppercase-styled tag pattern. Same for "Promo" and any other badge label.
- **Don't substitute Poppins with a serif or with Roboto for display.** The entire system is calibrated for Poppins's geometric proportions; the display sizes break with narrower or seriffed glyphs.
- **Don't apply brand pink to error states or warnings.** Pink is exclusively a positive / promotional / commerce voltage. Errors use `{colors.error}` red; warnings use `{colors.warning}` amber.
- **Don't add hard-cornered surfaces (`{rounded.none}`) outside the body grid.** Every interactive surface in Buser is softly rounded.
- **Don't use brand pink for price digits inside a trip row.** Pink is reserved for the CTA next to the price; the digits stay ink so the eye reads number → action, not number → number.
- **Don't underline active nav states.** The pink pill (`{component.product-tab-active}`) carries the entire active-state weight.
- **Don't tile trip cards horizontally.** Result-page trip cards are always stacked vertically, full-width, 16px apart — this is the comparison rhythm users expect.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| **Mobile** | `< 744px` | Top nav collapses to wordmark + hamburger; product links hide behind a sheet; the search card collapses to a stacked vertical form (origin → destination → dates → Buscar) inside a full-bleed white card; trip cards lose the horizontal route-line and switch to a vertical layout (departure block on top, duration in the middle, arrival block below) with the price + Selecionar locked to a sticky bottom bar inside the card; destinations grid stacks 1-up; filter rail collapses behind a sticky "Filtros" button. |
| **Tablet** | `744–1128px` | Top nav keeps inline product links but the search card narrows and the date-volta segment collapses to an optional "+ Volta" toggle; trip cards keep the horizontal layout but the operator strip wraps; destinations grid 2-up; filter rail becomes a collapsible sheet on the left. |
| **Desktop** | `1128–1440px` | Full top nav, full 4-segment search card with the primary Buscar button locked to the right; trip-card rows full-width with horizontal route-line; destinations grid 3-up; filter rail sticky on the left. |
| **Wide** | `> 1440px` | Content width caps at 1180px on the homepage and 1080px on result pages; gutters absorb the rest. The search card never grows wider than 1080px even on ultrawide displays — wider than that and the segment proportions break the eye-scan rhythm. |

### Touch Targets

- **Primary CTAs at minimum 44×44px** (Buser's native CTA height) — slightly below WCAG AAA's 48px but compensated by generous padding around the button hit-area.
- **The trip-card "Selecionar" button is 40px tall on desktop but expands to 54px (`{component.button-large}`) on mobile** (sticky bottom bar) — the most-tapped surface in the funnel.
- **Date-picker day cells are 35×35** — below WCAG AAA, but compensated by 8px gutters between cells widening the effective hit-area.
- **`point-icon-chip` markers are 16×16** — decorative status indicators, not tap targets; the trip-card row itself acts as the tap surface.

### Collapsing Strategy

- Top-nav links collapse into a hamburger sheet below 744px.
- Search card's 4 segments collapse vertically into a stacked form on mobile — **never a single-tap overlay** (Buser keeps the inputs visible because origin/destination disambiguation is the user's most cognitively loaded step, and hiding it behind a tap costs more than it saves).
- Trip-card rows reflow horizontal-to-vertical at 744px — the price + Selecionar block detaches from the row and locks to a sticky bottom bar inside the card on mobile.
- Filter rail collapses to a "Filtros" button below 1128px.
- Destinations grid drops column counts cleanly at each breakpoint — never reflows rows; always reduces columns.

## Agent Prompt Guide

### Core Generation Rules

When generating Buser UI, follow these rules in order of precedence:

1. **Always reference tokens from the YAML frontmatter** — never hardcode hex values, sizes, or radii in component output.
2. **Use `{colors.primary}` (#f11075) as the only brand voltage.** Do not introduce gradients, secondary brand colors, or alternative accents. Functional colors (`{colors.success}`, `{colors.error}`, `{colors.warning}`, `{colors.info}`) are scoped to their semantic role.
3. **Default body text:** `{typography.body-md}` (16px / 400) on `{colors.body}` (#454545). Default surface: `{colors.canvas}` (#fafafa). Default card: `{colors.surface-card}` (#ffffff) with 1px `{colors.hairline}` border, `{rounded.lg}` 16px, and `{shadows.card}` warm-tinted drop.
4. **Radii:** `{rounded.lg}` 16px on cards, `{rounded.sm}` 8px on inputs and buttons, `{rounded.full}` 500px on chips and category tabs. Never mix sharp and rounded corners on the same surface.
5. **Spacing:** scale is 4 → 8 → 12 → 16 → 24 → 32 → 48 → 64. Do not introduce intermediate values.
6. **Prices:** use `{typography.price-md}` (24px / 700) **ink** for row meta-blocks; use `{typography.price-lg}` (32px / 700) **white** over a `{colors.primary}` lozenge for hero overlays. Never render price digits in pink inside a row.
7. **Copy is Portuguese (pt-BR)** unless the context is strictly developer-facing. Preserve diacritics ("ônibus", "viagens", "rodoviária").
8. **Default to mobile-first responsive patterns:** sticky bottom CTAs on transactional flows, full-bleed sheets for date and city pickers, hamburger top-nav below 744px.
9. **Never use green for success actions — use `{colors.primary}` (#f11075) instead.** This overrides the semantic `{colors.success}` token for any **interactive** success state: confirmation toasts, completed-step indicators in steppers, "Reserva confirmada" badges, success-state buttons, and the "lead saved" newsletter confirmation. The green semantic tokens (`{colors.success}`, `{colors.success-light}`, `{colors.success-dark}`) remain in the YAML as legacy reserves but should NOT appear in new UI. **Pink IS the positive voltage** in Buser's system; using green dilutes the brand and breaks the established trust pattern (price → CTA → confirmation, all in one color).
10. **Every interactive element must have a motion treatment.** No instant state changes on hover, focus, selection, or expansion. See **Motion & Micro-interactions** below for the standard durations, easings, and patterns. Reduced-motion fallbacks are mandatory.
11. **The interface must read as generous, simple, and with personality** — three traits at once, not a compromise between them. See **UI Voice & Tone** below. Personality lives in the copy and the small details (warm-tinted shadow, rounded-square date cells), never in chrome.
12. **All user-facing copy must reinforce one of the four brand pillars:** Segurança (Security), Alta tecnologia (High-end technology), Conforto (Comfort), Fácil de usar (App easy-to-use). See **Copy Pillars** below for vocabulary and anti-patterns.

### Motion & Micro-interactions

The system is calibrated to feel **responsive but restrained** — every interactive surface acknowledges the user, but the system never animates for its own sake. Standard behaviors:

- **Default transition curve & duration:** `200ms cubic-bezier(0.4, 0, 0.2, 1)` on every interactive property change.
- **Button hover:** background color flips from `{colors.primary}` to `{colors.primary-active}` over `200ms`. No scale, no lift.
- **Button press:** flips to `{colors.primary-pressed}` over `100ms` (faster on press for tactile feedback).
- **Card hover:** subtle 2px `translateY(-2px)` lift + shadow upgrade from `{shadows.card}` to `{shadows.elevation-2}`, `200ms` ease-out. Applied to `{component.trip-card}`, `{component.destination-card}`, and `{component.testimonial-card}`.
- **Field focus:** the `{shadows.focus-ring}` halo fades in over `150ms`; on blur it fades out at the same rate. The border color transition runs in parallel.
- **Date-picker day selection:** the pink fill applies with a `100ms` scale pulse (1.0 → 1.05 → 1.0) to confirm the tap.
- **Sheet / modal entry:** slides up from below over `250ms` ease-out with the scrim fading in over `200ms`. Exit reverses (`200ms` ease-in).
- **Page transitions** between major flow steps (search → results → seat selection → payment): `200ms` fade + 8px slide-up. Never hard-cut.
- **Trip-card expander ("Ver detalhes"):** height transitions collapsed → expanded over `250ms` ease-in-out, content fades in at `+50ms` delay.
- **Skeleton shimmer on result page:** `1.4s linear infinite` left-to-right gradient pass on placeholder rows while trip data loads. Gradient runs `{colors.hairline}` → `{colors.hairline-soft}` → `{colors.hairline}`.
- **Search submit on tap:** the `{component.search-submit}` button pulses once (`100ms` scale 0.98 → 1.0) before the page transitions to results.
- **Toast / inline confirmation entry:** slides down from the top over `200ms` with a brief `{colors.primary}` background flash that fades to `{colors.surface-soft}` over the next `400ms`.

**Reduced-motion fallback** (`prefers-reduced-motion: reduce`): replace all transform animations with instant state changes; keep only opacity transitions at `100ms`. Skeleton shimmer pauses entirely and shows a static `{colors.hairline-soft}` placeholder.

### UI Voice & Tone

The interface should read as **generous, simple, with personality** — three traits compounding, not competing:

- **Generous** — ample whitespace, never cramped. Card padding stays at 16–24px (never below 12px). Hero bands use `{spacing.section}` (64px). Trip cards in the marketplace stack with 16px gutters even on dense pages — the air between rows is the comparison rhythm. Buser sells comfort and trust; cramped UI contradicts the message before the user reads a word.
- **Simple** — restraint everywhere. **One** brand voltage (`{colors.primary}`). **One** signature shadow (`{shadows.card}`). **Two** type weights for content (500 headings, 400 body) plus 700 reserved exclusively for prices. No decorative gradients, no illustration overload, no busy patterns, no secondary brand color, no underline-on-hover-AND-color-shift-AND-scale stacked together. Pick one signal per state.
- **Personality** — but never sterile. Personality lives in the **micro-copy** ("Aqui é sem letras miúdas.", "É só você vivendo o seu caminho.", "Do app para a poltrona"), the warm-tinted card shadow that picks up brand warmth, the rounded-square date cells that feel friendlier than circles, the mixed-case "Novo" badge instead of uppercase "NEW", and the committed Brazilian Portuguese voice. **Personality should never come from chrome** — only from copy, micro-interactions, and small considered details.

The three traits work together: **generous** gives the system room, **simple** keeps it from getting noisy, **personality** keeps it from feeling cold. Drop any one and the system tilts: cramped + simple + personality reads as cluttered-cute; generous + simple + no personality reads as enterprise-bland; generous + personality + no simplicity reads as marketing-shouty.

### Copy Pillars

All user-facing copy should reinforce one or more of Buser's four brand pillars. When generating any string — headline, button label, error message, empty state, push notification, alert toast — pick the pillar that fits and lean into its vocabulary.

| Pillar | What it says | Vocabulary to reach for | Avoid |
|---|---|---|---|
| **Segurança** (Security) | "Você está protegido em cada passo." | "seguro", "monitorado 24h", "ANTT", "câmeras anti-fadiga", "telemetria GPS", "motoristas certificados", "suporte 24 horas", "barraca rosa", "embarque acompanhado" | Trade-off framings ("barato mas seguro"); vague "confiável" without specifics; fear-based copy |
| **Alta tecnologia** (High-end technology) | "A engenharia por trás da sua viagem." | "tecnologia", "GPS", "telemetria", "no app", "rastreamento em tempo real", "reconhecimento facial", "embarque digital", "QR code", "tempo real" | Jargon that excludes ("API", "SaaS", "microserviços"); "modernização" without concrete payoff; tech-for-tech's-sake |
| **Conforto** (Comfort) | "Você merece chegar bem." | "conforto", "leito", "cama premium", "semi-leito", "poltrona reclinável", "praticidade", "sem filas", "sala VIP", "espaço pra esticar as pernas", "chegada tranquila" | "luxo" (off-brand), "exclusivo" (excludes); over-promising "primeira-classe"; aspirational language disconnected from product reality |
| **Fácil de usar** (App easy-to-use) | "Do app à poltrona, sem burocracia." | "simples", "rápido", "sem filas", "no app", "do celular", "em 2 cliques", "compre pelo WhatsApp", "cancelamento gratuito", "1h antes", "sem letras miúdas" | "complexo", "avançado" (implies friction); "se você souber" (alienates); friction-naming ("autenticação multi-fator") |

**Copy mechanics:**

- **Voice:** Brazilian Portuguese (pt-BR), second-person singular ("você"), warm but direct.
- **CTAs are imperative verbs:** "Buscar", "Selecionar", "Reserve agora", "Quero promo", "Comprar pelo WhatsApp". Never noun-only ("Pesquisa", "Reserva", "Compra").
- **No exclamation points in CTAs.** Reserve them for celebratory micro-copy ("Boa viagem!", "Pronto!").
- **Numbers in Brazilian format:** prices `R$ 86,00` (comma decimal, no space before R$ on tight surfaces), dates `13/04` (DD/MM), times `22:30` (24-hour, never 10:30 PM).
- **Diacritics are mandatory.** Never strip them ("ônibus" not "onibus", "viagens" not "viagens", "rodoviária" not "rodoviaria"). This is a non-negotiable trust signal in pt-BR.
- **When pillars combine in a single string, lead with the user benefit and let the pillar word land at the end:** *"Cancelamento gratuito até 1h antes do embarque"* (Easy-to-use + Security in one line). *"Câmeras anti-fadiga e telemetria em todos os ônibus"* (Security + Tech). *"Compre pelo app, sem filas e sem burocracia"* (Easy + Comfort).
- **Error messages reinforce trust, not blame.** Bad: *"Você inseriu uma data inválida"*. Good: *"Não encontramos viagens nessa data — tenta outro dia próximo?"* (Easy-to-use pillar — Buser owns the friction, not the user).
- **Empty states reinforce the pillar that fits the surface.** No trips on this date → reach for **Easy** ("Tenta uma data próxima?" + a quick-pick row). No saved cards yet → reach for **Tech** ("Salve um cartão pra próxima compra ser mais rápida"). Pickup-point detail empty → reach for **Security** ("Estamos confirmando os detalhes deste ponto. Suporte 24h: …").

### Quick Color Reference

| Role | Token | Hex |
|---|---|---|
| Brand pink (CTAs only) | `{colors.primary}` | `#f11075` |
| Body text | `{colors.body}` | `#454545` |
| Page canvas | `{colors.canvas}` | `#fafafa` |
| Card surface | `{colors.surface-card}` | `#ffffff` |
| Hairline border | `{colors.hairline}` | `#e0e0e0` |
| Muted secondary text | `{colors.muted}` | `#757575` |
| Brand wash (selected chip, in-range day) | `{colors.surface-soft}` | `#fff7fa` |

### WCAG Validation

- `{colors.body}` (#454545) on `{colors.canvas}` (#fafafa) → contrast ratio ~10.0:1 → **passes WCAG AAA**.
- `{colors.on-primary}` (#ffffff) on `{colors.primary}` (#f11075) → contrast ratio ~4.6:1 → **passes WCAG AA**, fails AAA — acceptable for transactional CTAs at 44px height with weight-500 labels.
- `{colors.muted}` (#757575) on `{colors.canvas}` (#fafafa) → contrast ratio ~4.5:1 → **passes WCAG AA** for body text.
- `{colors.on-primary}` (#ffffff) on `{colors.error}` (#dc2e36) → contrast ratio ~4.7:1 → **passes WCAG AA**.

### Sample Prompts

**Trip search results page:**
> Build a trip search results page for Buser. Use `{component.trip-card}` with the operator-strip + route-line spine + right-aligned price + Selecionar meta block. Stack cards 16px apart on `{colors.canvas}`. Add a sticky `filter-rail` on the left at desktop. Headers in `{typography.title-lg}`, body in `{typography.body-md}`, prices in `{typography.price-md}` ink (NOT pink). Reference DESIGN.md for all tokens. Copy in pt-BR.

**Homepage hero:**
> Build the Buser homepage hero. Top-nav (`{component.top-nav}`) with wordmark left in `{colors.primary}` and product tabs (Início, Promoções, Experiências with Novo badge, Viagens, Ajuda). Below: a `{component.search-bar-card}` with four `{component.search-field-segment}` cells (Saindo de, Indo para, Data de ida, Data de volta) and a `{component.search-submit}` flush right. Headline above the search card in `{typography.display-xl}` weight 400, white text on a Buser Pink hero band.

**Destination card grid:**
> Build a 3-column grid of `{component.destination-card}` for "Destinos mais procurados". Each card: city header in `{typography.title-sm}` ("Ônibus para São Paulo"), "Saindo de / A partir de" sub-label row in `{typography.caption-sm}` muted, then 5 origin rows with city name left and `R$ XX,XX` price right in `{typography.body-sm}`. Bottom of each card: a `{component.button-tertiary-text}` "Ver mais ônibus" link. Cards on `{colors.surface-card}`, 16px radius, `{shadows.card}`.

### Known Gaps

These surfaces are referenced by the brand but not fully tokenized in this document — coding agents should ask before generating them, or fall back to neutral defaults:

- **Hover state colors on trip cards** — the hover lift is a subtle elevation increase from `{shadows.card}` to a slightly stronger version of the same shadow, but precise extraction of the intermediate values is unreliable from the live site.
- **Loading states / skeleton screens** — the result page uses a shimmer placeholder for trip-card rows during search, but the exact gradient stops were not captured.
- **Seat-selection canvas** — the post-selection seat-map is rendered on a separate checkout step with its own visual language (top-down bus diagram with pink-filled "selected" seats, grey "occupied", white "available") — not captured in this document.
- **Buser Carro sub-brand** — the rideshare product surface (`buser.com.br/carro`) has a partially divergent treatment leaning more toward `{colors.carro-purple}` accent rather than primary pink; full sub-system not documented here.
- **Operator partner logos** — partner operators (Levare, Viação RioDoce, TSM, Santa Maria, Expresso JK) supply their own logos in their own colors. The system constrains them to a fixed-height strip (32px) and does not re-color them — meaning brand consistency on result pages depends on partner asset quality.
- **Form input error states beyond the 1px border** — the rosa-vs-warning-amber differentiation between "this field is required" and "no trips found for this date" is partially documented but the full input-outline + helper-text combination at every state was not captured here.
