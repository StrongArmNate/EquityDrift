import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Replace with your real domain once you've registered one.
// Everything (sitemap, canonical URLs, RSS, OG tags) derives from this.
const SITE_URL = 'https://www.equitydrift.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
