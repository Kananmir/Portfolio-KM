# Kanan's Portfolio Website

A personal portfolio website showcasing creative work, projects, and interests. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

- Vintage editorial aesthetic
- Scrapbook-like layouts
- Warm, earthy color palette
- Artistic and personal touch
- Subtle animations
- Mobile-first responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd kanan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/                 # Next.js App Router pages
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── about/          # About page
├── projects/       # Projects page
└── globals.css     # Global styles

components/        # Reusable components
├── layout/        # Header, Navigation, Footer
├── home/          # Home page sections
├── about/         # About page sections
├── projects/      # Projects page sections
└── ui/            # Shared UI components

data/              # Centralized content data
├── home.ts
├── about.ts
├── projects.ts
└── footer.ts

lib/               # Utilities and types
├── utils.ts
└── types.ts

public/            # Static assets
├── images/
└── icons/
```

## 🎯 Implementation Phases

- [x] Phase 1: Project setup and architecture
- [ ] Phase 2: Global styles and theme
- [ ] Phase 3: Shared UI components
- [ ] Phase 4: Home page
- [ ] Phase 5: About page
- [ ] Phase 6: Projects page
- [ ] Phase 7: Animations
- [ ] Phase 8: Responsive optimization
- [ ] Phase 9: Accessibility review
- [ ] Phase 10: Final polish

## 🎨 Color Palette

- **Cream:** #F4F1E2
- **Dusty Blue:** #D8EBF9
- **Sage:** #D7D4B1
- **Warm Brown:** #513229
- **Soft Gold:** #FCE6B7

## 🔤 Typography

- **Headings:** Cormorant Garamond (serif)
- **Accents:** Caveat (handwritten)
- **Body:** Inter (sans-serif)

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check TypeScript

### Important Notes

- All content lives in `/data` files — edit there, not in components
- Components are reusable and type-safe
- Animations use Framer Motion for performance
- No hardcoded content in JSX
- Tailwind CSS for all styling

## 📱 Responsive Design

- Mobile-first approach
- Optimized for mobile, tablet, and desktop
- Accessible keyboard navigation
- Proper ARIA labels

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast compliance
- Alt text for images

## 📝 Content Management

Edit placeholder content in `/data` files:

- `home.ts` - Hero, featured projects, skills
- `about.ts` - Bio, timeline, interests, achievements
- `projects.ts` - Full project list
- `footer.ts` - Social links

No need to touch components when updating content.

## 🚀 Deployment

Deploy to Vercel with a single command:

```bash
vercel deploy
```

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio.

## 👤 Author

Kanan Mirchandani - [Portfolio](https://kanan.dev)
