# Equity Drift — Blog Platform Setup: Session Summary

A record of the decisions and work completed while scaffolding the Equity Drift blog
platform, for reference in future sessions.

## What this session covered

Took the "Blog Platform & Distribution" workstream from a bare decision (where should
the blog live?) to a working local Astro site, pushed to a private GitHub repo, with the
first post live.

## Key decisions

| Decision | Choice | Why |
|---|---|---|
| Platform | Astro (static site generator) | Posts are Markdown files, no CMS/database — a content pipeline can write a file and deploy, no API needed |
| Hosting (planned, not yet done) | Cloudflare Pages | Free tier, unlimited bandwidth, auto-deploys on every GitHub push |
| Site name | **Equity Drift** | Data/analysis-forward name, not tied to a specific poker term the way "Orphaned Pots" was |
| Domain (placeholder, not registered yet) | equitydrift.com | Set in `astro.config.mjs` and `robots.txt` — swap for the real domain once purchased |
| Repo | `github.com/StrongArmNate/EquityDrift` (private) | Pushed successfully; 1 commit, all files present |
| Game focus | Pot-Limit Omaha (PLO), not Texas Hold'em | Caught and corrected — an earlier draft had a stray `texas-holdem` tag |

## Design system

The site deliberately avoids generic/default AI-blog aesthetics. Current direction is
modeled on the person's actual GG Poker table theme (deep violet felt, near-black UI
chrome, neon cyan/magenta glow accents, gold jackpot signage, four-color deck).

**Colors** (CSS variables in `src/layouts/BaseLayout.astro`):
- `--felt: #1c1433` — page background (table felt)
- `--panel: #251b41` / `--panel-raised: #2f2350` — content panel surfaces
- `--gold: #e8b23f` — stat highlights, jackpot-style accents
- `--cyan: #4fd8e0` / `--magenta: #e0499b` — neon accents lifted from active-player glow rings
- `--suit-club / --suit-diamond / --suit-heart` — four-color deck accents, used sparingly (tags, small UI)

**Typography:**
- Headings: Space Grotesk (bold, geometric — closer to the poker client's own UI type)
- Body: Inter
- Stats/data/mono: IBM Plex Mono
- **Note:** fonts are loaded via a Google Fonts `<link>` in `BaseLayout.astro` — an earlier
  version referenced font names in CSS without importing them, which silently fell back to
  system fonts. Fixed; if fonts ever look wrong again, check that import is intact.

**Signature element — "the ledger rail":** a sidebar (or top strip on mobile) on each post
that pulls the post's `stats` frontmatter (e.g. hands reviewed, BB won) into a row of
HUD-style nameplate readouts, echoing the BB stack readouts under each player at the table.
Populated automatically from frontmatter — no manual layout work needed per post.

## SEO implementation

Baseline SEO is fully wired into `BaseLayout.astro` and applies to every page automatically:
- Meta description (from each post's `description` frontmatter field, capped at 160 chars by the content schema)
- Canonical URL
- Open Graph + Twitter card tags
- Article JSON-LD structured data (on post pages only)
- Sitemap (`@astrojs/sitemap` integration, auto-generated at build)
- `robots.txt` pointing to the sitemap
- RSS feed at `/rss.xml`

## Project structure

```
equity-drift-blog/
├── astro.config.mjs          # site URL, sitemap integration
├── package.json
├── src/
│   ├── content/
│   │   ├── config.ts          # frontmatter schema (title, description, pubDate, tags, stats)
│   │   └── blog/
│   │       └── checking-the-orphaned-pots-mantra.md   # first post
│   ├── layouts/
│   │   ├── BaseLayout.astro   # sitewide SEO + design tokens/header/footer
│   │   └── BlogPost.astro     # post template + ledger rail
│   └── pages/
│       ├── index.astro        # homepage / post list
│       ├── rss.xml.js
│       └── blog/[...slug].astro
└── public/
    ├── favicon.svg
    └── robots.txt
```

## First post

**"I Checked Whether I Actually 'Claim the Orphaned Pots' — The Data Said Something
Different"** — analyzes 54 filtered PLO hands, finding 63% of uncontested flop wins came
from blind defense rather than late-position stealing. This is the content-format template
going forward: state a mantra, test it against real hand data, report what the data says.

Filename: `src/content/blog/checking-the-orphaned-pots-mantra.md`

## Homepage copy (current)

- Eyebrow: "PLO, hand by hand"
- H1: "The mantra says one thing. The database says another."
- Dek: "Every post starts with a piece of table wisdom — a habit, a rule of thumb, a thing
  your coach said once — then runs it against real hand history to see if it survives
  contact with the data."

## Status: what's done vs. not yet done

**Done:**
- [x] Astro project scaffolded, builds and runs locally
- [x] First post converted and live
- [x] Full SEO plumbing in place
- [x] Design system (GG Poker–inspired) applied
- [x] Site renamed to Equity Drift throughout
- [x] Pushed to private GitHub repo (`StrongArmNate/EquityDrift`)

**Not yet done:**
- [ ] Connect GitHub repo to Cloudflare Pages for auto-deploy
- [ ] Register a real domain (equitydrift.com or alternative) and update `astro.config.mjs` + `robots.txt`
- [ ] Affiliate links (planned for once the site is live)
- [ ] Video repurposing / auto-distribution pipeline (not started)

## Open questions / notes for future sessions

- **PLO2/PLO5 data is sufficient for testing the pool-tendency report tool.** Testing tool
  functionality (parsing, stat calculation, output correctness) doesn't require higher
  stakes. PLO25 data would only be needed if a *specific future post's premise* requires
  demonstrating behavior that's particular to that stake level.
- **Work-scheduling reflection:** Nate had been using poker downswings as the trigger for
  blog work (mirroring "play more when running good, less when running bad"). Flagged as a
  potentially risky pattern — it couples the project to a negative emotional state, works
  against building a predictable publishing cadence, and tilt is a bad state for the kind of
  clear-headed data analysis this blog depends on. Leaning toward a small consistent
  baseline (e.g. 20–30 min, 2–3×/week) with downswing time as optional bonus, not the
  primary driver. First 20–30 minute session under this new approach was used to complete
  the GitHub push above.
