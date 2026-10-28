# Senzz website

Website for **Senzz**, the AI texting keyboard for Android. Static site built with
[Astro](https://astro.build) + TypeScript + plain CSS, deployed to GitHub Pages at
https://ashishdev27.github.io/SenzzKEYBOARDWEB/

Pages: Home `/`, `/privacy`, `/terms`, `/support`, `/delete-account`, `/faq`, plus a custom 404.

The look comes straight from the app's design system (`core/designsystem` in the Android
project): the same colors (canvas `#0B0C0E`, volt `#C8F135`, ember `#FFB23F` for Fumble),
fonts (Bricolage Grotesque, Geist, Geist Mono, under OFL), radii, buttons, cards and icons.

## Setup

Needs Node.js 22.23+ (24 recommended).

```sh
npm install
npm run dev        # http://localhost:4321/SenzzKEYBOARDWEB/
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

## Base path

The site lives under `/SenzzKEYBOARDWEB/` (`site` + `base` in `astro.config.mjs`). Write internal
links and `public/` file paths with `url()` from `src/site.ts`, never as bare `/...`:

```astro
<a href={url('/faq')}>FAQ</a>   <!-- /SenzzKEYBOARDWEB/faq -->
```

CSS `url('/fonts/...')` is prefixed by the build automatically. If the repo is renamed or
the site moves to a custom domain, change `site`/`base` there and `public/robots.txt`.

No JavaScript ships to the browser. Menus and FAQ use native `<details>`. A strict
Content-Security-Policy (in `src/layouts/Base.astro`) blocks all scripts and third-party
resources. If you add a script or an external service later, update that policy.

## Upload to GitHub and deploy

> This folder also holds an empty Android Studio template (`app/`, `gradle/`, `*.kts`,
> `gradlew*`, `.idea/`, `.gradle/`). The website doesn't use any of it. Delete it or leave
> it out of the repo; it isn't the Senzz app.

Repository: `AshishDev27/SenzzKEYBOARDWEB` (branch `master`).

1. Push your changes: `git add -A && git commit -m "..." && git push`.
2. In the repo, **Settings › Pages › Custom domain** must be empty (no custom domain).
3. In the repo go to **Settings › Pages** and set **Source** to **GitHub Actions**.
   Every push to `main` or `master` now builds and deploys (`.github/workflows/deploy.yml`).
   If the Actions tab shows a run called **"pages build and deployment"** failing on `.astro`
   files, Source is still **Deploy from a branch**: that's GitHub's built-in Jekyll build,
   not this workflow. Switch Source to GitHub Actions.
4. The site is live at https://ashishdev27.github.io/SenzzKEYBOARDWEB/ once the "Deploy to GitHub Pages" run is green.

See `LAUNCH_CHECKLIST.md` before going live.
