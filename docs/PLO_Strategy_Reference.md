# PLO Strategy Reference — Consolidated

*Consolidated from your session checklists, tier charts, position matrices, and SPR guides. Where sources conflicted, the resolution and reasoning are noted — flag anything that doesn't match your intent.*

---

## 1. Preflop Position Matrix (source: Matrix.png — confirmed current)

| Action | UTG/MP | HJ | CO | BTN | SB | BB |
|---|---|---|---|---|---|---|
| RFI (Open) | Tier 1-2 | Tier 1-3 | Tier 1-3 | Tier 1-4 | Tier 1-4 | — |
| ISO Fish (Limp) | Tier 1-2 | Tier 1-2 | Tier 1-2 | Tier 1-3 | Tier 1-2 | Tier 1-2 |
| Call 2-Bet | Tier 2 | Tier 3 | Tier 3 | Tier 3-4 | **FOLD** | Tier 3-4 |
| 3-Bet (vs Open) | Tier 1 | Tier 1-2 | Tier 1-2 | Tier 1-2 | Tier 1-2 | Tier 1 |
| 4-Bet (Value) | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 | Tier 1 |

> **Note:** PF-Matrix.png (an alternate version without an HJ column, with an added AA/Tier-1-only 4-bet rule and a "Trap Zone" callout) was superseded — Matrix.png is the version to use. The Trap Zone content below is still folded in separately since it doesn't conflict with anything in Matrix.png.

**The Trap Zone — fold preflop regardless of position:**
- **No danglers:** a card disconnected from the rest of the hand (e.g. A-K-Q-3) turns a 4-card hand into a 3-card hand. Fold.
- **No triplets:** three of a kind in your hand (e.g. K-K-K-5) blocks your own set. Fold.
- **No small pairs without connectivity:** "set-over-set" bait (e.g. 5-5-4-2). Fold.

---

## 2. Hand Tiers

Two of your three tier sources use matching quantitative criteria (Tier-Definitions.png and Tiers_-_Quick_Ref.png); the third (Tiers.png) uses a different, simpler 4-tier example-based system. **The quantitative 5-tier system is used below** as the assumed current standard — flag if Tiers.png is actually the one you want going forward.

| Tier | Name | Criteria | Example |
|---|---|---|---|
| 1 | Premium | 4 cards working together (9+) + Nut suits + High pairs (AA/KK) | AsKsQsJs |
| 2 | Strong | 3 cards working together (7+) + A-high suit + Big pair (QQ/JJ) | AhAd7c2s |
| 3 | Speculative | 3 cards working Broadway/Rundown + 1 dangler, OR mid rundowns (1-gap) with suited kings | JsTs8s7h |
| 4 | Marginal | 2 cards working + 2 danglers (suited), OR low pairs/rundowns with double gaps, OR middle pair with no suits | 6s6h5s4h |
| 5 | Trash | No connectivity, no suits, "trips" in hand, danglers/triplets/rainbow junk | KsQsJs3h |

---

## 3. SPR / All-In Guidelines

Your one-line SPR Guidelines image is a fast heuristic; the SPR_All-in_Confrontations chart is the detailed version it's compressing. **Use the detailed chart when you have time to think; use the one-liners as the 5-second-timer fallback.**

**Fast version (5-second timer):**
- SPR 1–4 (3-bet pots): Top Pair + Flush Draw or 13+ wrap → jam. Otherwise, tighten up — this range is more nuanced than "always jam" (see detailed chart below).
- SPR 4–10 (single-raised): play for the nuts; fold bottom sets / non-nut flushes.
- SPR 13+ (multiway/limped): nuts or nothing — don't bluff.

**Detailed chart (selected rows, condensed):**

| Hand on the flop | SPR ≤1 | SPR ≤4 | SPR ≤13 | SPR >13 |
|---|---|---|---|---|
| Nut flush | OK | OK | OK | No way |
| Nut straight w/ set or flush redraw | OK | OK | Iffy/No | No way |
| Top pair, no redraws | OK | OK | Iffy/No | No way |
| Bare nut flush draw, unpaired board | OK | OK/Iffy | No | — |
| 16-card nut wrap w/ nut FD | OK | OK | OK | OK |
| Non-nut wrap | OK | OK/Iffy | No | — |
| Bare top two pair | OK | OK/Iffy | No | No |
| Dry AA on K72 rainbow | OK | No | No | No |

The takeaway your one-liner simplifies: **the "jam SPR 1-4 with top pair+FD or 13+ wrap" rule is a good default, but the full chart shows several SPR-1-4 hands (bare top two, non-nut wraps, dry overpairs) that should NOT jam** — worth keeping the detailed chart in view rather than relying on the one-liner alone once you're past the basics.

---

## 4. Postflop Process Rules

1. **Hands off the mouse:** river bet from Villain → 5-second count before acting.
2. **The "Can I Name 3 Bluffs?" rule** (facing a big river bet with a bluff-catcher — top pair or weak two-pair): count to 5, name 3 specific hands Villain could be bluffing with based on the board. Can't name 3 → fold.
3. **Size down bluffs:** missed flop in a 3-bet pot (e.g. AK/AJ/QJ-type hand) → keep c-bet to 33% pot; folding to a raise there isn't "sunk cost," it's correct.
4. **Respect the overbet:** at NL10ish stakes, a river overbet is value ~85% of the time. Don't be the 15% that pays it off just to "see it."

---

## 5. Session Mental Mantras (chronological, most recent last)

- Feb 9: Claim the orphaned pots (increase WWSF) · Believe the "pot"-sized bets (decrease stack-leaks) · Draw to the nuts (avoid coolers)
- Feb 18 (general): Am I out of position? → don't squeeze triple-suited/gapped hands · Did I flop one pair? → prep to check-fold to heavy betting · Is the board wet + I have a monster? → raise immediately, no slow-play
- Feb 24: Isolate the whales preflop · Stab at orphaned pots (WWSF booster) · Check the turn with one-pair Aces in multiway pots

**Running theme:** increase WWSF via steals/stabs at orphaned pots, but stay cautious with one-pair-type holdings on later streets, especially multiway. This is the same principle underlying the postflop process rules above.

---

## Open items
- Confirm whether the 5-tier quantitative system (Section 2) is actually your current standard, or whether Tiers.png's simpler system should replace it.
- The "MP" and "BB" leaks identified in the companion leak report aren't yet covered by an explicit rule — worth adding one once you've reviewed actual losing hands from those positions.
