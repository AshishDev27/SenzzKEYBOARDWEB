// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://senzz.org',
  trailingSlash: 'never',
  // Pages ship as /privacy.html etc., so GitHub Pages serves /privacy without a redirect.
  build: { format: 'file', inlineStylesheets: 'never' },
  // No JS ships, and the CSP in Base.astro blocks scripts; the dev toolbar would be blocked too.
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
