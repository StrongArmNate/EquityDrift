import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Everything (sitemap, canonical URLs, RSS, OG tags) derives from this.
const SITE_URL = 'https://equitydriftpoker.ca';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
