import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

// One branded card template, reused for every post plus a "home" fallback
// used by pages that aren't a specific post (homepage, About, etc).
const posts = await getCollection('blog', ({ data }) => !data.draft);

const pages = {
  home: {
    title: 'Equity Drift',
    description: 'PLO study mantras, tested against real hand-history data.',
  },
  ...Object.fromEntries(posts.map((post) => [post.slug, post.data])),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  // Matches the dynamic segment in this file's name: [...slug].ts
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: `Equity Drift — ${page.description}`,
    logo: {
      path: './src/assets/branding/og-logo.png',
      size: [110],
    },
    // Felt-deep to panel-raised — the same gradient wash used behind
    // the site's hero sections, so shared cards read as the same site.
    bgGradient: [
      [18, 12, 34],
      [47, 35, 80],
    ],
    border: {
      color: [232, 178, 63],
      width: 14,
      side: 'block-end',
    },
    padding: 80,
    font: {
      title: {
        color: [241, 236, 249],
        size: 64,
        weight: 'Bold',
        lineHeight: 1.2,
      },
      description: {
        color: [169, 156, 199],
        size: 32,
        lineHeight: 1.5,
      },
    },
  }),
});
