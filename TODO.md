# EcoTech Hub implementation checklist

## Crawlable multi-page static website
- [x] Create responsive Home, About, Services, Blog, and Contact pages with meaningful initial HTML content.
- [x] Use only plain HTML, CSS, and vanilla JavaScript; do not add a framework, package manifest, or build step.
- [x] Use semantic HTML5 header, nav, main, article, and footer elements throughout the site.
- [x] Configure all internal links and assets for `https://eyezake.github.io/ecotech-hub/`.
- [x] Keep each HTML page below 100 KB excluding image assets.

## E-waste education and action content
- [x] Explain e-waste awareness, education, recycling, repair, reuse, data safety, and practical action pathways.
- [x] Include at least three complete sample blog posts about e-waste topics that can later be replaced.
- [x] Provide a static-friendly contact pathway with a usable form that opens a prefilled GitHub Issue without requiring a server.
- [x] Provide a light/dark theme toggle on every page that persists the visitor’s choice locally without a server.

## SEO and social sharing
- [x] Add unique title and description metadata to every page.
- [x] Add `og:title`, `og:description`, `og:image`, `og:url`, and `og:type` to every page.
- [x] Add canonical URLs, Twitter card metadata, and Organization JSON-LD.
- [x] Add one shared 1200x630 `og-image.png` for all pages.
- [x] Add root `sitemap.xml` and `robots.txt` that allow crawling and reference the sitemap.
- [x] Add root `favicon.ico` with a green-and-white EH monogram.

## GitHub Pages deployment
- [x] Add `.github/workflows/deploy.yml` to deploy `main` to GitHub Pages with the official Pages actions.
- [x] Document repository creation, push commands, Pages settings, verification, and Google Search Console submission.
- [x] Document homepage and all-page indexing requests plus robots.txt crawlability checks.

## Validation evidence
- [x] Check HTML, CSS, and JavaScript syntax and report file sizes.
- [x] Confirm required metadata, structured data, links, sitemap, robots, workflow, and image dimensions.
- [x] Confirm no framework or build-step files were introduced.
