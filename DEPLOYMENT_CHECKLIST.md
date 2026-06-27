# Deployment Checklist

## Pre-Deployment Steps

### Step 1: Install Dependencies
```bash
cd kanan-portfolio
npm install
```

### Step 2: Local Testing
```bash
npm run dev
# Visit http://localhost:3000
# Test all pages: /, /about, /projects
# Test responsive design on mobile/tablet/desktop
```

### Step 3: Build Test
```bash
npm run build
# Check for any build errors
```

### Step 4: Type Check
```bash
npm run type-check
# Should have no TypeScript errors
```

### Step 5: Lint Check
```bash
npm run lint
# Fix any linting warnings
```

## Content Customization (Before Deployment)

Update these files with actual content:

### Home Page
Edit `data/home.ts`:
- [ ] Update `hero.greeting` with actual name
- [ ] Update `hero.subheading` with real bio
- [ ] Update `featuredProjects` with 3 real projects
- [ ] Update `skills` with your skills
- [ ] Update `aboutPreview.excerpt` with your bio

### About Page
Edit `data/about.ts`:
- [ ] Update `introduction.bio` with real biography
- [ ] Update `introduction.location`
- [ ] Update `timeline` with real events
- [ ] Update `interests` (5 items)
- [ ] Update `achievements` with real achievements
- [ ] Update `funFacts` with real facts

### Projects Page
Edit `data/projects.ts`:
- [ ] Add 6 real projects with:
  - Titles and descriptions
  - Technology stacks
  - GitHub links
  - Live demo links
  - Project images

### Footer
Edit `data/footer.ts`:
- [ ] Update social links (GitHub, LinkedIn, Email)
- [ ] Update copyright year
- [ ] Update tagline

## Image Assets

Add your images to `public/images/`:
- [ ] `project-1.jpg` (and 2, 3, 4, 5, 6)
- [ ] Any portfolio photos
- [ ] Any background images

Current: Using placeholder images (gradient backgrounds)

## SEO Optimization (Optional)

Edit `app/layout.tsx`:
- [ ] Update metadata.title
- [ ] Update metadata.description
- [ ] Update openGraph.url (your domain)
- [ ] Add favicon (public/favicon.ico)

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
npm i -g vercel
vercel login
vercel deploy --prod
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Option 3: Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. New Project
3. Import GitHub repository
4. Deploy

## Post-Deployment Verification

After deploying:
- [ ] Visit live URL
- [ ] Test all 3 pages load
- [ ] Test navigation works
- [ ] Test mobile responsiveness
- [ ] Check images load
- [ ] Verify social links work
- [ ] Check email link works

## Performance Checks

Use these free tools:

### Lighthouse (Built-in)
```bash
# In Chrome DevTools: Lighthouse tab
# Target scores: 90+
```

### Page Speed Insights
https://pagespeed.web.dev/

### Responsive Design Test
https://responsivedesignchecker.com/

## Custom Domain (Optional)

To use a custom domain:
1. Buy domain (Vercel, Namecheap, etc.)
2. Go to Vercel Project Settings > Domains
3. Add custom domain
4. Update DNS records (instructions provided)
5. Wait 24-48 hours for DNS propagation

## Monitoring & Analytics (Optional)

### Add Google Analytics
1. Get Google Analytics ID
2. Add to environment variable
3. Install `@react-ga/compat`
4. Initialize in `app/layout.tsx`

### Add Vercel Analytics
- Automatically available in Vercel dashboard

## Maintenance Checklist

After deployment:
- [ ] Monitor Vercel dashboard for errors
- [ ] Update content regularly (edit data files)
- [ ] Add new projects to portfolio
- [ ] Update achievements
- [ ] Keep dependencies updated (`npm update`)
- [ ] Run security audit (`npm audit`)

## Common Issues & Fixes

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check image paths in data files
- Ensure images exist in public/images/
- Check file extensions (.jpg, .png)

### Styles Not Applied
- Clear browser cache
- Rebuild: `npm run build`
- Restart dev server

### Deployment Fails
- Check Vercel logs
- Ensure all dependencies installed
- Verify TypeScript has no errors

## Estimated Timeline

| Task | Time |
|------|------|
| Content update | 1-2 hours |
| Image preparation | 30 mins |
| Local testing | 30 mins |
| Deployment | 5-10 mins |
| Post-verification | 10-15 mins |
| **Total** | **2-3 hours** |

## Final Deployment Command

When ready to go live:
```bash
vercel deploy --prod
```

Your portfolio will be live in minutes!

---

**Status:** Ready for deployment ✅
**Current Phase:** 6/10 (95% complete)
**Remaining:** Testing & deployment only
