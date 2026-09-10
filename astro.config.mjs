import { defineConfig } from 'astro/config';
// TEMP: sitemap integration disabled — it's crashing at build time with
// "Cannot read properties of undefined (reading 'reduce')" inside its own
// astro:build:done hook, even after bumping to the latest 3.x release.
// Likely interacting badly with the /og/ binary-image endpoint route.
// Not a launch blocker (Google indexes fine without a sitemap), but worth
// root-causing properly in a future session. Re-enable by uncommenting
// the import below and adding sitemap() back to the integrations array.
// import sitemap from '@astrojs/sitemap';

// Everything (canonical URLs, RSS, OG tags) derives from this.
const SITE_URL = 'https://equitydriftpoker.ca';

export default defineConfig({
  site: SITE_URL,
  integrations: [],
});
