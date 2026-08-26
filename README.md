# Equity Drift

A Pot-Limit Omaha study-notes blog, built with Astro. Static output, no database — every
post is a Markdown file, which is what makes it a good target for an automated publishing
pipeline.

## Run it locally

```bash
npm install
npm run dev
```

Visit http://localhost:4321

## Where things live

- `src/content/blog/*.md` — every post. This is the only folder a content pipeline needs
  to write into to publish.
- `src/content/config.ts` — the frontmatter schema. `title`, `description`, and `pubDate`
  are required; `stats` is optional and feeds the sidebar "ledger rail" on posts that have
  numbers worth pulling out.
- `src/layouts/BaseLayout.astro` — sitewide SEO: meta tags, canonical URL, Open Graph tags,
  and Article JSON-LD schema.
- `src/layouts/BlogPost.astro` — the post template, including the ledger rail sidebar.
- `src/pages/index.astro` — homepage / post list.
- `src/pages/blog/[...slug].astro` — renders each post.
- `src/pages/rss.xml.js` — RSS feed, useful for your distribution step later.

## Publishing a new post

Drop a new `.md` file into `src/content/blog/` with frontmatter like:

```yaml
---
title: "Post title"
description: "One sentence, under 160 characters — this becomes the meta description."
pubDate: 2026-08-23
tags: ["strategy"]
stats:
  - { label: "hands reviewed", value: "54" }
---
```

Use a blockquote (`> like this`) in the body anywhere you want a number to render as a
call-out box instead of inline prose.

## Before going live

1. Update `SITE_URL` in `astro.config.mjs` to your real domain once you've registered one.
2. `npm run build` to confirm it builds cleanly.
3. Push to GitHub, then connect the repo in Cloudflare Pages (build command: `npm run build`,
   output directory: `dist`).
