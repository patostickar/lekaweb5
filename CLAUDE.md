# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **Leka Publicidad**, a signage company in Buenos Aires. No build step, no package manager — pure HTML/CSS/JS served as static files.

## Running Locally

```bash
python3 -m http.server 8000
# or
npx serve .
```

No build, lint, or test commands exist.

## Architecture

The site is a single-page application in `index.html` with three external JS modules:

- **`js/portfolio.js`** — `modalData` object keyed by modal ID (e.g. `modal-cercos`), plus `openModal()`, `closeModal()`, `nextImage()`, `prevImage()`. Images support responsive `srcsets` with `.avif` at 320/640/1024w.
- **`js/app.js`** — Lucide icon init, mobile menu toggle, counter animation (IntersectionObserver-triggered), hero parallax scroll, CDO carousel auto-rotate, email copy toast, footer year.
- **`js/contact.js`** — EmailJS integration (service `service_d3zmvo9`, template `template_g1qb1zn`).
- **`css/styles.css`** — Animations (`kenBurns`, `cosmic-gradient`/`gradient-shift` for `.title-gradient`/`.gradient-text`), CDO carousel layout, custom scrollbar, parallax mobile override.

## Key Conventions

**Tailwind custom theme** (inline config in `<head>`):
- `brandRed: #ff4040` — primary accent color
- `concrete: #f5f5f0` — background

**Image formats:** `.avif` for portfolio (with responsive srcsets), `.webp` for general images.

**Modal pattern** — each modal requires:
1. An entry in `modalData` in `js/portfolio.js`
2. A `<div id="modal-X" class="fixed inset-0 z-[100] hidden">` in `index.html`
3. Backdrop div with `onclick="closeModal()"` for click-outside behavior
4. Image element with id `modal-X-img`, counter with id `modal-X-counter`

**JavaScript naming:** `camelCase` for variables/functions, `UPPER_SNAKE_CASE` for constants, `kebab-case` for modal IDs matching `modalData` keys.

**CSS rule:** Only use `css/styles.css` for complex animations or non-Tailwind overrides. Prefer Tailwind utility classes in HTML.
