# Session Notes — Sept 5, 2026

## Direction decided
Pursuing the "combine skills into a niche offer" path: use technical/data background to build tools and content for the Ontario PLO player pool, rather than treating poker volume itself as the primary income lever. This directly addresses the structural limitation below.

## Ontario market constraint (why this approach)
- Ontario's regulated market (AGCO/iGO) ring-fences each operator's player pool to Ontario residents only — no shared international liquidity.
- On GGPoker: PLO2 is well-populated, PLO5 has only 1-2 tables at prime times, PLO10 essentially never runs, PLO25 has 4+ tables always full. No smooth stake ladder.
- PokerStars relaunched in Ontario as "PokerStars on FanDuel" in June 2026 (Playtech-powered) — a second pool, but still separately ring-fenced, not a fix for overall thinness.
- Net effect: online volume is capped by seat availability, not just bankroll or skill — supports building tools/content over relying on climbing stakes for income.

## Methodology: existing study materials as the taxonomy
Prior Gemini-generated PLO study materials (5-tier starting hand system, position-by-action matrix, SPR-based play guidelines, session checklists/mantras) are being used as a rules-based framework to:
1. **Audit personal play** — pull matching PT4 stats for each rule/mantra, compare actual play to the guideline, use the gap as content.
2. **Profile the pool** — apply the same taxonomy to opponents' tendencies for the pool-tendency report generator, which is the differentiated angle vs. generic poker stat tools.

The same eventual classification script serves both purposes.

## Data sequencing
- Only ~1,300 hands logged at PLO25 (target stake) — too thin for reliable individual leak stats yet.
- Decision: use the larger PLO2 + PLO5 GGPoker dataset (8,679 hands) as a proof-of-concept — build and debug the script and content format now, re-run on PLO25 once volume is sufficient.

## First worked example: "claim the orphaned pots"
- PT4 filter used: `(Site: GG Poker) AND (Stakes: PLO2/PLO5) AND (Saw Flop) AND (Player Won Hand) AND (NOT Saw Showdown) AND (Called Preflop Any Call) AND (NOT Raised Preflop Any Raise)`
- Result: 54 hands, ~920 BB won, 0 losses (by definition of the filter).
- Finding: 63% of these uncontested wins (34/54) came from the blinds (BB+SB), not late position as the original mantra implied — reframes the skill as "blind defense conversion" more than "late-position stealing." Button pots ran bigger on average in BB terms despite being less frequent.
- First blog post drafted and approved using this finding plus 3 illustrative hands, expressed in BB per user preference (thinks in BB, not dollars, except at deposit/withdrawal).

## Content format decisions
- Written blog posts first (comfortable format, no on-camera appearance).
- AI-generated video repurposed from written posts afterward — no manual video creation.
- Distribution to be automated/scheduled rather than manually maintaining social accounts.
- Each leak-fix post doubles as a funnel toward the eventual pool-tendency report product.

## Workspace organization
Set up as 3 separate Claude Projects to keep threads focused while staying connected:
1. **PLO Leak-Analysis Content Series** — ongoing leak-fix posts (this thread's work).
2. **Blog Platform & Distribution** — site hosting, SEO, automated distribution (next up — no home for posts yet).
3. **Pool-Tendency Report Generator** — v1 scope + script build, dual-purpose with personal leak audits.

## Next steps
- [ ] Blog Platform project: decide hosting/SEO/distribution so the approved post has somewhere to go.
- [ ] Content project: mine next leak — "evidence-based fold" rule (river bluff-catcher decisions) using the same filter-and-drill-down method.
- [ ] Report Generator project: define v1 scope and begin scripting the tier/position/SPR classifier against the PLO2/PLO5 dataset.
