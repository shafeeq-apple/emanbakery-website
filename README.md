# Eman Bakeries — Website

A fully functional, single-page-application style static website for Eman Bakeries, built with plain HTML, CSS, and JavaScript (no build step required). Ready to publish directly on GitHub Pages.

## Features
- Hash-based client-side router covering all pages from the Enterprise Blueprint (Home, About, Certifications, Products + categories + detail pages, Distribution, Verification, News + post detail, Careers, Contact, Legal pages, Sitemap, 404).
- Fully working navigation: header nav with dropdowns, mobile hamburger menu, footer links, breadcrumbs — all internal links are wired to real routes.
- Interactive product catalog with search, category and shelf-life filters, plus 8 sample product detail pages with specs tables and "Request Pricing" modal.
- News/insights section with category filtering and full blog post pages.
- Working forms (Contact, Become a Distributor, Verification Request, Request Pricing modal) with client-side validation, submit simulation, and success messaging (ready to be wired to a real backend/webhook).
- SEO basics: meta tags, Open Graph tags, canonical URL, and JSON-LD Organization schema.
- Modern visual design: custom bakery-themed color palette, Fraunces + Inter typography, glassmorphism header, scroll-reveal animations, floating badges, responsive layout down to mobile.
- Zero dependencies beyond Google Fonts and Font Awesome (loaded via CDN) — no build tools, npm install, or bundler required.

## Local Development
Just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Publish to GitHub Pages
1. Create a new GitHub repository (e.g. `eman-bakeries`).
2. Push this folder's contents to the `main` branch.
3. In the repository settings, go to **Pages** and set the source to **GitHub Actions** (the included workflow at `.github/workflows/deploy.yml` will handle the build/deploy automatically on every push to `main`).
4. Alternatively, without Actions: go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, save. GitHub Pages will serve the site directly since it's static HTML/CSS/JS.

Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Structure
```
/
├── index.html          # Single entry point, all routes rendered into <main id="app">
├── css/style.css        # All styling
├── js/app.js             # Router, page templates, product/news data, form logic
├── .github/workflows/deploy.yml   # GitHub Actions Pages deployment
└── README.md
```

## Notes
- Sensitive documents (TDS PDFs, certification scans) are intentionally NOT linked publicly per the blueprint — buttons trigger a toast prompting users to contact sales/verification team instead.
- All form submissions are currently simulated client-side. To go live, connect the forms in `js/app.js` (`bindForm` function and modal submit handler) to a serverless endpoint, Formspree, or your own API/webhook.
- Product and news data are stored as JS arrays (`PRODUCTS`, `NEWS`) at the top of `js/app.js` for easy editing without touching the router or templates.
