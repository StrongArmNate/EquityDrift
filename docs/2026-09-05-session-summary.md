# Session Summary — September 5, 2026

## Context
This session covered two threads: (1) a broader income-diversification review, and (2) getting the Equity Drift blog from local project to a live, deployed site.

## Income-Diversification Review

Worked through several potential income streams to run alongside Equity Drift while easing away from the day job at Execulink:

- **Ruled out**: PLO coaching (no verified track record at current stakes yet), relaunching TechHelperNate (wrong brand — too consumer-facing), Nerds On Site eNerd program (revenue-share model, own brand, felt like trading one job for another), and MSP subcontracting (on-site work carries the same "no work = no pay" risk as the day job).
- **Decision**: keep the day job for now — mortgage and medical benefits matter, and the household's risk tolerance only supports a slower, lower-risk approach. Equity Drift (blog + report generator + micro-tool + affiliate income) is the primary long-term vehicle, not a fast replacement plan.
- **Rolled into this project**: micro-tool sales (a stripped-down PT4 leak-stat script sold as a lead magnet) and affiliate/rakeback links, both to be added once the site is live.
- **Still open as possible remote/low-risk supplements**: remote network diagnostics delivered digitally (no site visits), remote contract technical support, and freelance technical writing/KB documentation — none committed to yet.

## Equity Drift — Project State

- The Astro static site already exists in the repo, including full SEO plumbing (meta tags, canonical URLs, Open Graph, Article JSON-LD, RSS feed, sitemap, robots.txt) and the GGPoker-inspired visual theme.
- One real post already exists and is publication-ready: *"Checking Whether I Actually 'Claim the Orphaned Pots' — The Data Said Something Different."*
- GitHub repo (`StrongArmNate/EquityDrift`) was set from private to public this session and confirmed reachable in an incognito browser window.

## Next Steps (in order)

1. **Buy the domain** — register `equitydrift.com` through **Cloudflare Registrar** (at-cost pricing, currently ~$10.44/year for a .com, no markup) rather than a separate registrar, since hosting is already planned through Cloudflare Pages.
2. **Connect the repo in Cloudflare Pages** — Workers & Pages > Create > Pages > Connect to Git > select the EquityDrift repo. Build command: `npm run build`. Output directory: `dist`.
3. **Point the domain at the Pages project** — add it as a custom domain once both the domain and Pages project are in the same Cloudflare account; DNS should wire up automatically.
4. **Trigger and verify a build** — confirm the live site matches the local project and the orphaned-pots post is actually live.
5. **Add affiliate links** — GGPoker/rakeback affiliate link and a "tools I use" page, once the site is live.
6. **Write a one-page spec for the micro-tool** — define the 3–5 output stats (e.g. 3-bet%, c-bet%, fold-to-aggression by position) and what a sample report looks like, ahead of actually building it.

## Notes for Next Session
Domain purchase and Cloudflare Pages connection were queued up but not completed this session — pick up at step 1 above.
