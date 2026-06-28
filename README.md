# Shea Tea Tree — Coming Soon Website

A responsive, SEO-friendly static landing page created from the approved Shea Tea Tree coming-soon design.

## Files

- `index.html` — semantic page structure and SEO metadata
- `assets/css/styles.css` — responsive design and brand styling
- `assets/js/site.js` — contact dialog interaction
- `assets/images/` — optimized logo, product image, icons and social preview
- `site.webmanifest` — mobile/PWA metadata
- `robots.txt` — search-engine access rules

## Publish

Upload the complete folder to the web root on cPanel, Netlify, Vercel, GitHub Pages or any static hosting service. The homepage file must remain named `index.html`.

## Required changes before final launch

1. Confirm the final domain.
2. Add a canonical URL to `<head>` after the domain is confirmed:
   `<link rel="canonical" href="https://YOUR-DOMAIN/">`
3. Replace or confirm the three social-media URLs in `index.html`.
4. Add the final WhatsApp, telephone and email details when available.
5. Add Google Analytics only after the GA4 measurement ID is provided.
6. Verify the final domain in Google Search Console and submit its sitemap.
7. Replace the product-group crop with transparent individual product photographs when source product images are available.

## Brand variables

The primary design colors are at the beginning of `assets/css/styles.css`:

- `--brand-green`
- `--brand-green-dark`
- `--canvas`
- `--muted`

## Notes

The page does not include prices, shopping-cart functions or payment features. It is a product-information coming-soon page.
