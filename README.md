# Sachitanand Prasad Sah — Portfolio

Personal portfolio of a Frontend React Developer, built with **React 18 + Vite**.

🔗 **Live:** https://sachidanand-portfolio-website.vercel.app/

## Features
- Dark / light theme (remembers the visitor's choice, respects system preference)
- Fully responsive with a mobile menu, active-section highlighting and smooth scrolling
- Scroll-reveal animations and typewriter hero (disabled for reduced-motion users)
- Accessible: semantic landmarks, skip link, keyboard focus styles, ARIA labels
- SEO / Open Graph meta tags, optimized images, zero UI dependencies

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173/
npm run build     # production build in dist/
```

## Editing content
All text, links, projects, experience and skills live in [`src/data.js`](src/data.js).
Images go in `src/assets/` and are imported at the top of that file.

## Deployment
- **Vercel (primary):** every push to `main` is built and deployed automatically to https://sachidanand-portfolio-website.vercel.app/
- **GitHub Pages (optional):** `.github/workflows/deploy.yml` builds with `GITHUB_PAGES=true` so assets resolve under `/Sachidanand-Portfolio-website/`. One-time setup: **Settings → Pages → Source: GitHub Actions**.
