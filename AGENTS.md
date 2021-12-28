# AGENTS.md - Leka Publicidad Website

This file provides guidelines for agentic coding agents working on this repository.

## Project Overview

This is a static website for **Leka Publicidad**, a signage company based in Buenos Aires, Argentina. It uses HTML5, Tailwind CSS (via CDN), and vanilla JavaScript embedded in `index.html`.

## Tech Stack

- **Frontend:** HTML5, Tailwind CSS (via CDN)
- **Icons:** Lucide Icons & Font Awesome (via CDN)
- **Typography:** Google Fonts (Space Grotesk, JetBrains Mono, Manrope)
- **Interactivity:** Vanilla JavaScript (embedded in `index.html`)
- **Assets:** Optimized `.webp` images organized by service categories

## Directory Structure

```
/                           # Root - entry points
├── index.html              # Main single-page application
├── index.old.html          # Legacy/backup version
├── README.md               # Project description
├── AGENTS.md               # This file - agent guidelines
├── GEMINI.md               # Project overview and notes
├── css/
│   └── styles.css          # Custom CSS (animations, scrollbar, floating UI)
└── img/                    # Organized asset library
    ├── cdo/                # Carteles de Obra assets
    ├── cercos/             # Fence and perimeter protection
    ├── logos/              # Partner and client trust signals
    └── portfolio/          # Project images organized by Modal IDs
```

---

## Commands

### Running the Project

This is a **static website** with no build step or package manager.

**Local Development:**
```bash
# Using npx serve (requires Node.js)
npx serve .

# Or using Python's http.server
python3 -m http.server 8000

# Or using PHP
php -S localhost:8000
```

**VS Code:** Use the Live Server extension (right-click `index.html` → "Open with Live Server").

### No Build/Lint/Test Commands

This project has **no build system, linter, or test framework** configured:
- No `package.json` - no npm dependencies
- No build tools (webpack, vite, etc.)
- No test framework (jest, cypress, etc.)
- No linter (eslint, stylelint, etc.)

If you need to add any of these, propose the setup to the user first.

---

## Code Style Guidelines

### General Principles

1. **Keep it simple** - This is a static site; avoid over-engineering
2. **Mobile-first** - Use Tailwind's responsive classes (`md:`, `lg:`) properly
3. **Accessibility** - Include alt text, ARIA labels where needed, keyboard navigation
4. **Performance** - Use `.webp` images, lazy loading, minimal CDN dependencies

### HTML (index.html)

- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Tailwind utility classes for styling - prefer Tailwind over custom CSS
- Group related content logically
- Keep inline JavaScript organized in the `<script>` tag at the bottom
- Custom CSS goes in `css/styles.css` only for complex animations or non-Tailwind overrides

**Example structure:**
```html
<!-- Header/Nav -->
<header>...</header>

<!-- Main Content -->
<main>
  <section id="hero">...</section>
  <section id="services">...</section>
  <section id="portfolio">...</section>
  <section id="contact">...</section>
</main>

<!-- Footer -->
<footer>...</footer>

<!-- Modals (outside main) -->
<div id="modal-1" class="fixed...">...</div>

<!-- Scripts -->
<script>
  // Global state
  // Data objects
  // Functions
  // Event listeners
</script>
```

### CSS (css/styles.css)

- Use for animations (Ken Burns, cosmic gradients), scrollbar styling, and floating UI elements (WhatsApp button)
- Avoid overwriting Tailwind classes unless necessary
- Use CSS custom properties for theme colors if needed
- Keep animations smooth (use `transform` and `opacity`)

### JavaScript (embedded in index.html)

**Naming Conventions:**
- Variables/functions: `camelCase` (e.g., `openModal`, `currentModal`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MODAL_DATA`)
- Modal IDs: `kebab-case` (e.g., `modal-3`, `modal-12`)
- Data object keys: match modal IDs exactly

**Code Organization (inside `<script>` tag):**
```javascript
// 1. Global state
let currentModal = null;

// 2. Data objects (modalData, etc.)
const modalData = { ... };

// 3. Utility functions
function openModal(id) { ... }
function closeModal() { ... }

// 4. Event handlers / initialization
document.addEventListener('DOMContentLoaded', () => { ... });
```

**Error Handling:**
- Use try-catch for operations that might fail (e.g., image loading)
- Check for null/undefined before accessing properties
- Provide fallback behavior rather than throwing errors

**Event Listeners:**
- Use `addEventListener` instead of inline `onclick` for complex handlers
- For modals, the backdrop click handler can be inline: `onclick="closeModal()"`
- Close on Escape key:
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && currentModal) closeModal();
});
```

### Tailwind CSS

- Follow standard Tailwind class ordering: layout → spacing → sizing → visual → interactivity → transitions
- Use the custom theme colors defined in the tailwind.config script:
  - `brandRed: #ff4040` - primary accent
  - `concrete: #f5f5f0` - background
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

**Example:**
```html
<div class="flex items-center justify-between p-4 md:p-6 lg:p-8">
  <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Title</h1>
  <button class="px-4 py-2 bg-brandRed text-white rounded-lg hover:bg-red-600 transition-colors">
    Click me
  </button>
</div>
```

### Adding New Portfolio Items

When adding a new portfolio item:

1. Add images to `img/portfolio/Modal-X/` (use `.webp` format)
2. Create a new modal div with unique ID (e.g., `modal-13`)
3. Add entry to `modalData` object:
```javascript
'modal-13': {
  images: ['img/portfolio/Modal-13/image1.webp', '...'],
  category: 'Category Name',
  description: 'Description text'
}
```
4. Add a click trigger on the portfolio grid:
```html
<div onclick="openModal('modal-13')" class="cursor-pointer">...</div>
```

### Modals - Required Structure

Each modal must have this structure for proper click-outside-to-close behavior:

```html
<div id="modal-X" class="fixed inset-0 z-[100] hidden">
  <!-- Backdrop with click handler -->
  <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="closeModal()"></div>
  <!-- Modal content container -->
  <div class="relative h-full flex items-center justify-center p-4">
    <!-- Close button -->
    <button onclick="closeModal()" class="...">&times;</button>
    <!-- Modal content -->
    <div class="max-w-5xl w-full bg-white rounded-lg ...">...</div>
  </div>
</div>
```

**Key:** The backdrop div must have `onclick="closeModal()"` to close when clicking outside the modal content.

---

## Common Tasks

### Updating Content
- Text changes: Edit directly in `index.html`
- Images: Add to appropriate folder in `img/`, use `.webp` format

### Adding New Sections
- Add new `<section>` in the appropriate place within `<main>`
- Use semantic HTML and Tailwind classes
- Add any custom CSS to `css/styles.css` if needed

### Modifying the Theme
- Tailwind config is inline in `<head>` of `index.html`
- Edit the `tailwind.config` script block to add/change colors, fonts, or breakpoints

---

## Notes for Agents

1. **Before making changes**, read the relevant sections of `index.html` to understand the current structure
2. **Avoid adding dependencies** - this is meant to remain a simple static site
3. **Test changes** - open `index.html` in a browser to verify functionality
4. **Image optimization** - always use `.webp` format, keep file sizes reasonable
5. **Backup** - the original version is preserved in `index.old.html` if needed
