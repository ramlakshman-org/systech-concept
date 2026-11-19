# TeamSystech website prototype

This repository contains the upgraded **v4** TeamSystech enterprise website prototype promoted into `public/`. It uses static HTML, CSS, modular ES JavaScript (`18` modules), WebP/SVG assets, and a preloaded local Geist font with zero build dependencies. Serve it over HTTP so ES modules load properly.

## Highlights in `public/`

- **Multi-page enterprise IA (`59` routes):** Solutions hub, industry playbooks, 2026 Lenovo 360 Platinum portal + genuine FRU spares finder, Microsoft Cloud & Licensing Hub, Dedicated Other Brands (`/other-brands/`), Seqrite & enterprise security stack, E-Waste Asset Recovery, Case Studies, Company, Careers, and Contact.
- **16-Series Business Computing Catalog (`?page=business-computing` & `?page=bc-*`):** 5 hardware categories, 16 series cards with HD studio cutouts, 48 sub-models, and 16 dedicated 3-view interactive inspection pages.
- **Interactive Tools:** Hero X-Ray blueprint hotspots, 3D Office Setup Planner (`10–1,000` seats across 25 / 50 / 100 / 250+ tiers), Printable Capability Dossier, and instant `Ctrl+K` site search.
- **Paper & CAD Dark Modes + Full Device Optimization:** WCAG AA high-contrast light and blueprint dark themes across `320px` foldable cover displays, notched mobile viewports (`viewport-fit=cover`, safe areas, `44px+` touch targets, `16px` mobile inputs), tablets, compact laptops, and 4K displays.

## Run locally

From the repository root, run:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory public
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Deploy with Vercel Drop

1. Open [Vercel Drop](https://vercel.com/drop), sign in to your Vercel account, and drop the `public` folder. The folder contains `index.html` at its top level.
2. If the site is for private review, configure Deployment Protection and confirm that an unauthorised visitor cannot open the exact link you plan to send. The `noindex` tag requests exclusion from search results. Standard Protection excludes production domains.

## Deploy from a Git repository

1. Import this repository as a Vercel project.
2. Select the **Other** framework preset. Set the **Output Directory** to `public`. Override the **Build Command** with an empty value to skip the build. Keep the project root at the repository root.
3. Open the homepage, `/?page=business-computing`, `/?page=company`, and `/?page=planner` after deployment. Test the link with and without reviewer access before sharing it privately.

## Review before public launch

- Confirm audited figures, ISO 9001:2015 / CPCB / KSPCB authorization IDs, leadership portraits, gallery photos, and testimonials.
- Approve the Privacy Policy, Terms & Conditions, and Return Policy.
- Wire `ENQUIRY_ENDPOINT` in `public/ecosystem-data.js` before production DNS cutover (currently opens a pre-populated Email / WhatsApp dispatch handoff with one-click copy).
- Remove `<meta name="robots" content="noindex">` in `public/index.html` and change `Disallow: /` to `Allow: /` in `public/robots.txt` when approving public launch.
