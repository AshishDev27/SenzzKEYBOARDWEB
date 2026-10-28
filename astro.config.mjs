// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages project site: https://ashishdev27.github.io/SenzzKEYBOARDWEB/
  site: 'https://ashishdev27.github.io',
  base: '/SenzzKEYBOARDWEB',
  trailingSlash: 'never',
  // Pages ship as /privacy.html etc., so GitHub Pages serves /privacy without a redirect.
  build: { format: 'file', inlineStylesheets: 'never' },
  // No JS ships, and the CSP in Base.astro blocks scripts; the dev toolbar would be blocked too.
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
