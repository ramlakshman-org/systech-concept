# TeamSystech website prototype

This repository contains the 37-page TeamSystech website prototype. The website is in `public/`. It uses static HTML, CSS, JavaScript, images and a local font. There are no application dependencies or build steps. Serve it over HTTP so JavaScript modules can load.

## Run locally

From the repository root, run:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory public
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Deploy with Vercel Drop

1. Open [Vercel Drop](https://vercel.com/drop), sign in to your Vercel account, and drop the `public` folder. The folder contains `index.html` at its top level.
2. If the site is for private review, configure Deployment Protection and confirm that an unauthorised visitor cannot open the exact link you plan to send. The noindex tag requests exclusion from search results. Standard Protection excludes production domains.

## Deploy from a Git repository

1. Import this repository as a Vercel project.
2. Select the **Other** framework preset. Set the **Output Directory** to `public`. Override the **Build Command** with an empty value to skip the build. Keep the project root at the repository root.
3. Open the homepage, `/?page=company`, and `/?page=planner` after deployment. Test the link with and without reviewer access before sharing it privately.

## Review before public launch

- Confirm leadership details, gallery photos and testimonials.
- Approve the Privacy Policy, Terms & Conditions and Return Policy. The return draft flags conflicting wording on the live site.
- The project enquiry prepares a draft in the visitor’s email app. Test the draft before launch. CRM integration is deferred.
- The pages keep the prototype’s noindex setting. Revisit that setting when approving a public launch.
