# Kanan's Portfolio - Setup Guide

## Quick Start

### 1. Install Node.js (if not already installed)
- Download from https://nodejs.org/ (v18+)
- Verify: `node --version` and `npm --version`

### 2. Create Project Directory
```bash
mkdir kanan-portfolio
cd kanan-portfolio
```

### 3. Copy All Files
Copy all generated files into this directory, maintaining the folder structure:
```
kanan-portfolio/
├── app/
├── components/
├── data/
├── lib/
├── public/
├── styles/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
├── .eslintrc.js
├── .gitignore
└── README.md
```

### 4. Install Dependencies
```bash
npm install
```

This will install:
- next@15
- react@19
- typescript@5
- tailwindcss@3
- framer-motion@11
- lucide-react@0.344

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the home page with placeholder content.

## File Structure Explanation

### `/app` - Next.js App Router
- `layout.tsx` - Root layout with metadata
- `page.tsx` - Home page
- `about/page.tsx` - About page
- `projects/page.tsx` - Projects page
- `globals.css` - Global styles and font imports

### `/components` - React Components
Create these folders as needed in Phase 2-6:
- `layout/` - Header, Navigation, Footer
- `home/` - Home page sections
- `about/` - About page sections
- `projects/` - Projects page sections
- `ui/` - Shared UI components (Button, Card, Badge, etc.)
- `common/` - Decorative elements

### `/data` - Content Management
All content lives here, NOT in components:
- `home.ts` - Featured projects, skills, hero text
- `about.ts` - Timeline, interests, achievements
- `projects.ts` - All 6 projects
- `footer.ts` - Social links

This separation allows easy content updates without touching UI code.

### `/lib` - Utilities & Types
- `utils.ts` - Helper functions (cn, delay, format, truncate)
- `types.ts` - TypeScript interfaces

### `/public` - Static Assets
- `images/` - Project images, photos
- `icons/` - Custom icon files (optional)

## Typography Setup

Fonts are imported in `globals.css` from Google Fonts:
- **Cormorant Garamond** - Headings (serif)
- **Caveat** - Accents (handwritten)
- **Inter** - Body text (sans-serif)

These are loaded automatically. No additional setup needed.

## Color Palette

All colors are defined in:
1. **Tailwind theme** (`tailwind.config.ts`)
2. **CSS variables** (`globals.css`)

Use in Tailwind:
```jsx
<div className="bg-cream text-warm-brown">
  <h1 className="text-dusty-blue">Hello</h1>
</div>
```

Or with CSS variables:
```css
.element {
  background-color: var(--color-cream);
  color: var(--color-warm-brown);
}
```

## Next Steps

After setup is complete:

1. ✅ Phase 1 complete (you are here)
2. ⏳ Phase 2: Build shared UI components (Button, Card, Badge, etc.)
3. ⏳ Phase 3: Add animations (Framer Motion)
4. ⏳ Phase 4: Build home page sections
5. ⏳ Phase 5: Build about page sections
6. ⏳ Phase 6: Build projects page sections
7. ⏳ Phase 7: Responsive refinement
8. ⏳ Phase 8: Accessibility audit
9. ⏳ Phase 9: Final polish and deployment

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### TypeScript errors?
```bash
npm run type-check
```

### Need to rebuild?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Missing fonts?
The fonts load from Google Fonts. Check your internet connection.

## Commands Reference

```bash
# Development
npm run dev              # Start dev server on :3000

# Production
npm run build            # Build for production
npm start                # Start production server

# Quality
npm run lint             # Run ESLint
npm run type-check       # Type check TypeScript

# Clean
rm -rf .next             # Clear Next.js cache
npm install              # Reinstall dependencies
```

## Environment Setup (Optional)

Create `.env.local` for any future environment variables:
```
NEXT_PUBLIC_SITE_URL=https://kanan.dev
```

## Ready to Code!

Phase 1 is complete. The project is set up and ready for development.

Next: **Phase 2** will add shared UI components and styling enhancements.
