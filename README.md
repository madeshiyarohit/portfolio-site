# Rohit Madeshiya – Portfolio

A fast, SEO-friendly portfolio built with [Astro](https://astro.build), published on GitHub Pages, with blog posts and projects you can add from a simple admin panel.

## What's where

| You want to change… | Edit this |
|---|---|
| Domain, email, booking link, social links, contact form key, WhatsApp, analytics | `src/site.config.mjs` |
| Homepage text (experience, education, services, prices, delivery times, FAQ, resume) | `src/data/profile.js` (one file; everything else updates from it) |
| Blog posts | `src/content/blog/` (or the admin panel) |
| Projects / case studies | `src/content/projects/` (or the admin panel) |
| Images | `public/Assets/` (uploads from the admin panel go to `public/Assets/uploads/`) |
| Colors, fonts, layout | `src/styles/site.css` |


## Going live on GitHub Pages (one time)

1. **Create a repository** on GitHub (for example `portfolio`) and upload everything in this folder **except** `node_modules`, `dist` and `design-originals` (the `.gitignore` file already skips them if you use Git or GitHub Desktop).
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds and publishes the site. Watch progress in the **Actions** tab (about 1–2 minutes).
4. **Custom domain:** in `src/site.config.mjs`, set `url` to your domain (already set to `https://flexiroot.in`). The file `public/CNAME` (already created) contains just the domain. In **Settings → Pages → Custom domain**, enter the same domain and tick **Enforce HTTPS**. At your domain provider, add the DNS records GitHub shows you (4 `A` records for the root domain and a `CNAME` for `www` pointing to `yourusername.github.io`).
5. **Google:** add the site in [Google Search Console](https://search.google.com/search-console) and submit `https://flexiroot.in/sitemap.xml`.

## Contact form

1. Go to [web3forms.com](https://web3forms.com), enter `itsrohitmadeshiya@gmail.com` and get your free access key by email.
2. Paste it into `web3formsKey` in `src/site.config.mjs`.
3. Every message sent from `/contact/` now arrives in your inbox. Until a key is added, the form opens the visitor's email app instead.

## Adding a blog post or project (no code)

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub. Open this repository.
2. Choose **Blog posts** or **Projects** → **Add an entry**, fill in the form, upload images.
3. Turn **Draft** off when you're ready and click **Save**. The site rebuilds automatically and the new page is live at `/blog/your-title/` or `/projects/your-title/` in about a minute. It's also added to the blog/projects pages, the homepage, the menu and the sitemap automatically.

The two sample entries (`5-simple-ways-to-make-your-shopify-store-faster` and `sample-shopify-store-build`) are drafts: edit and publish them, or delete them.

## Previewing on your computer (optional)

Install [Node.js](https://nodejs.org) (LTS), then in this folder run:

```bash
npm install
npm run dev      # preview at http://localhost:4321 (drafts are visible here)
npm run build    # the exact files that get published, in dist/
```
