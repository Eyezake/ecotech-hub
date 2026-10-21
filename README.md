# EcoTech Hub

EcoTech Hub is a plain HTML, CSS, and vanilla JavaScript educational website about e-waste awareness, education, and action. It is configured for GitHub Pages at `https://eyezake.github.io/ecotech-hub/`.

## Push to GitHub

Create the repository `ecotech-hub` under the GitHub account `Eyezake`, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Build EcoTech Hub static site"
git branch -M main
git remote add origin https://github.com/Eyezake/ecotech-hub.git
git push -u origin main
```

If the repository already exists, use its existing remote and push the `main` branch.

## Enable GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push to `main` or run **Actions → Deploy EcoTech Hub to GitHub Pages → Run workflow**.
4. Wait for the workflow to finish, then open `https://eyezake.github.io/ecotech-hub/`.
5. Confirm that the Home, About, Services, Blog, and Contact links load correctly.

The workflow deploys the repository root directly; there is no npm install, build command, framework, or server. The Contact form opens a prefilled issue in this repository, so it remains usable without a paid form backend.

## Google Search Console checklist

1. Open [Google Search Console](https://search.google.com/search-console) and add a **URL-prefix property** for `https://eyezake.github.io/ecotech-hub/`.
2. Complete ownership verification using one of the methods Google offers. For a GitHub Pages URL, the HTML tag method is usually easiest: add Google’s verification meta tag to each page’s `<head>` if Google asks for it, then push the change.
3. In **Sitemaps**, submit `https://eyezake.github.io/ecotech-hub/sitemap.xml`.
4. Use **URL inspection** to inspect and request indexing for each URL:
   - `https://eyezake.github.io/ecotech-hub/`
   - `https://eyezake.github.io/ecotech-hub/about.html`
   - `https://eyezake.github.io/ecotech-hub/services.html`
   - `https://eyezake.github.io/ecotech-hub/blog.html`
   - `https://eyezake.github.io/ecotech-hub/contact.html`
5. Indexing is not immediate or guaranteed. Monitor **Pages / Indexing** for crawl and coverage feedback.

## Verify crawlability

Open `https://eyezake.github.io/ecotech-hub/robots.txt` in a browser. It should show `User-agent: *`, `Allow: /`, and a sitemap URL. You can also use Search Console’s URL inspection live test and Google’s Rich Results Test. The sitemap and canonical URLs in this project already use the final GitHub Pages URL.

## Replace sample blog content

Edit the articles in `blog.html`, keep the page under 100 KB, and update the sitemap only if you add separate article pages. Keep the same Open Graph image unless you intentionally create a replacement at exactly 1200×630 pixels.
