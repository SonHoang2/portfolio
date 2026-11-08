// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.ts';

export default defineConfig({
  site: site.url,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && (site.showBlog || !page.includes('/blog/')),
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
});
