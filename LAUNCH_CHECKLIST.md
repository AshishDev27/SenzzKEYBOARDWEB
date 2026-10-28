# Launch checklist

## Content
- [ ] Add the 7 real app screenshots to `public/screenshots/` (names in its README). Build and check that no "Screenshot placeholder" is left.
- [ ] Add `public/og-image.png` (1200 × 630) for link previews.
- [ ] Confirm the Play Store link in `src/site.ts` (`com.senzz.keyboard`) is live. Until it is, "Get it on Google Play" buttons lead to a "not found" page.
- [ ] Check the numbers on the site still match the app: 20 welcome credits, 1,000 Pro credits/month, 1 credit per action, Android 8.0+.
- [ ] Optional: add `public/apple-touch-icon.png` (180 × 180) for iOS home-screen bookmarks.

## Legal
- [ ] `src/legal/privacy.md` and `terms.md` are copies of the app's `assets/legal` files. After any change there, copy them over again and replace `senzz-legal:` links with `/`.
- [ ] The app's Privacy Policy has no contact address; the website page adds one. Consider adding it in the app too.
- [ ] Add your legal entity name and country to both documents if you register a company. Have them reviewed.
- [ ] Optional: once live, point the app's `AppLinks.TERMS_URL` / `PRIVACY_URL` (now in-app `senzz-legal:` pages) at `https://senzz.org/terms` and `/privacy`.

## Google Play Console
- [ ] **Privacy policy URL**: `https://senzz.org/privacy`
- [ ] **Account deletion URL** (Data safety › Data deletion): `https://senzz.org/delete-account`
- [ ] **Support email**: `senzzcorps@gmail.com`; **Website**: `https://senzz.org`
- [ ] Data safety form answers match the Privacy Policy (email, purchase history, app interactions; messages processed but not stored).
- [ ] Accessibility (AccessibilityService) declaration and video, matching the "Conversation analysis" text.

## Deploy
- [ ] Repo **Settings › Pages › Source** = GitHub Actions; first workflow run is green.
- [ ] DNS records added (see README); custom domain `senzz.org` verified; **Enforce HTTPS** on.
- [ ] Optional: verify the domain under your GitHub account settings (Pages › Verified domains) so no one else can claim it.
- [ ] `https://www.senzz.org` redirects to `https://senzz.org`.

## Final checks on the live site
- [ ] Every page loads: `/`, `/privacy`, `/terms`, `/support`, `/delete-account`, `/faq`; a random URL shows the 404 page.
- [ ] `https://senzz.org/robots.txt` and `https://senzz.org/sitemap-index.xml` load.
- [ ] Support email links open a new email to `senzzcorps@gmail.com`.
- [ ] Phone check: menu opens, nothing scrolls sideways, text is readable.
- [ ] Lighthouse (Chrome DevTools) scores for Performance, Accessibility, Best Practices and SEO.
- [ ] Submit the sitemap in Google Search Console.
