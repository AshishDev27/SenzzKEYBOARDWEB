# senzz.org

Website for **Senzz**, the AI texting keyboard for Android. Static site built with
[Astro](https://astro.build) + TypeScript + plain CSS, deployed to GitHub Pages at
https://senzz.org.

Pages: Home `/`, `/privacy`, `/terms`, `/support`, `/delete-account`, `/faq`, plus a custom 404.

The look comes straight from the app's design system (`core/designsystem` in the Android
project): the same colors (canvas `#0B0C0E`, volt `#C8F135`, ember `#FFB23F` for Fumble),
fonts (Bricolage Grotesque, Geist, Geist Mono, under OFL), radii, buttons, cards and icons.

## Setup

Needs Node.js 22.23+ (24 recommended).

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # type-checks, then builds to dist/
npm run preview    # serve dist/ locally
```

## Things you'll edit

| What | Where |
|------|-------|
| Support email, Play Store link | `src/site.ts` |
| Privacy Policy and Terms text | `src/legal/*.md` (copied from the app's `assets/legal`; keep both in sync) |
| App screenshots | `public/screenshots/` (file names in `public/screenshots/README.md`) |
| Social preview image | add `public/og-image.png` (1200 × 630); it's picked up automatically |
| Colors and type | `src/styles/global.css` (`:root` tokens) |
| Page text | `src/pages/*.astro` |

Screenshots: until a file exists, its phone mockup shows a clearly marked
"Screenshot placeholder". Drop the real PNG in with the listed name and rebuild.

No JavaScript ships to the browser. Menus and FAQ use native `<details>`. A strict
Content-Security-Policy (in `src/layouts/Base.astro`) blocks all scripts and third-party
resources. If you add a script or an external service later, update that policy.

## Upload to GitHub and deploy

> This folder also holds an empty Android Studio template (`app/`, `gradle/`, `*.kts`,
> `gradlew*`, `.idea/`, `.gradle/`). The website doesn't use any of it. Delete it or leave
> it out of the repo; it isn't the Senzz app.

1. Create a new GitHub repository (for example `senzz-website`).
2. Push this folder:
   ```sh
   git init
   git add .
   git commit -m "Senzz website"
   git branch -M main
   git remote add origin https://github.com/<your-account>/senzz-website.git
   git push -u origin main
   ```
3. In the repo go to **Settings › Pages** and set **Source** to **GitHub Actions**.
   Every push to `main` or `master` now builds and deploys (`.github/workflows/deploy.yml`).
   If the Actions tab shows a run called **"pages build and deployment"** failing on `.astro`
   files, Source is still **Deploy from a branch**: that's GitHub's built-in Jekyll build,
   not this workflow. Switch Source to GitHub Actions.
4. Custom domain: in **Settings › Pages › Custom domain** enter `senzz.org` and save.
   (`public/CNAME` already contains it.)
5. At your domain registrar add these DNS records:
   - `A` records for `senzz.org` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www` → `<your-account>.github.io`
6. Once the DNS check passes, tick **Enforce HTTPS**.

See `LAUNCH_CHECKLIST.md` before going live.
