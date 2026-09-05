# RootsmanTilt — Leak-Finding Report
*Based on PokerTracker 4 data (all-time + since 2026-01-01) and a 54-hand export*

## Headline numbers

| Scope | Hands | Won | bb/100 or bb/hand |
|---|---|---|---|
| All-time, all Omaha | 16,522 | C$223.31 | 25.77 bb/100 |
| All-time, position-tagged subset | 15,717 | C$240.20 | 0.29 bb/hand avg |
| Since 2026-01-01, GG Poker only | 10,002 | C$164.18 | 0.31 bb/hand avg |

You're a solid net winner overall. The interesting story is in the position and stake breakdowns — that's where the real leaks (and one surprise) show up.

---

## Finding 1: SB is your biggest historical leak — but it's shrinking, not your worst leak *right now*

**All-time (15,717 hands):**
| Position | Hands | Won | bb/hand | VPIP | PFR |
|---|---|---|---|---|---|
| SB | 3,853 | **-C$88.79** | **-0.13** | 32.26 | 26.66 |
| BB | 3,771 | -C$23.68 | 0.13 | 18.07 | 9.53 |
| MP | 2,007 | -C$51.57 | 0.06 | 19.28 | 17.96 |

SB is your only position with a *negative* all-time bb/hand, and it's the biggest dollar loser by far. This tracks with Matrix.png, which already tells you to **fold to a 2-bet from SB** — the historical data says that rule exists for a reason.

**But since Jan 2026 (10,002 hands), the picture shifts:**
| Position | Hands | bb/hand | WTSD% | WSD% |
|---|---|---|---|---|
| SB | 2,014 | **-0.57** | 35.15 | 52.11 |
| MP | 1,699 | -0.08 | 27.65 | 52.33 |
| BB | 1,934 | 0.32 | 27.46 | 54.49 |

SB is *worse* on a per-hand basis this year (-0.57 vs -0.13 all-time), and it's going to showdown more often (35.15% WTSD, the highest of any position) while winning only about half those showdowns. That's the classic pattern of calling too wide preflop and following through with a hand that isn't good enough — worth checking whether the SB fold-to-2-bet rule is actually being followed at the table, not just on paper.

---

## Finding 2: At your current stake ($0.25), MP and BB — not SB — are the real bleed

This is the one that would be easy to miss if you only looked at all-time numbers. Filtering to **$0.25 PL Hi only** (your highest and presumably most current stake, 1,323 hands):

| Position | Hands | bb/hand | VPIP | PFR | WTSD% | WSD% |
|---|---|---|---|---|---|---|
| **MP** | 275 | **-0.87** | 18.91 | 17.94 | **40.00** | 50.00 |
| **BB** | 216 | **-0.90** | 16.59 | 10.53 | 23.91 | 59.09 |
| SB | 222 | -0.62 | 16.67 | 13.57 | 38.24 | 30.77 |
| BTN | 224 | 0.57 | 23.66 | 20.09 | 29.27 | 66.67 |
| CO | 215 | 1.44 | 18.14 | 18.45 | 36.11 | 69.23 |
| EP | 171 | 0.80 | 15.20 | 15.53 | 34.78 | 50.00 |

Two distinct problems here, not one:

- **MP: going to showdown too often with hands that aren't good enough.** MP has the highest WTSD of any position (40%) but only wins half those showdowns. VPIP/PFR are tight and disciplined (18.91/17.94), so this doesn't look like a preflop looseness problem — it looks like a **postflop calldown problem**: continuing too far with one-pair type holdings. This is exactly what your "Check the turn with one-pair Aces in multi-way pots" mantra is aimed at — it may need to extend beyond just multiway pots.

- **BB: losing money despite decent showdown equity.** BB actually wins showdowns fine (59.09%) but still loses -0.90 bb/hand — the worst rate of any position at this stake. Since the leak isn't at showdown, it's happening pre-showdown: either folding too much to c-bets (giving up equity without a fight) or bleeding chips in pots that never reach showdown. Worth checking your BB fold-to-flop-cbet rate specifically — a related report on your $0.02 6-max play showed **100% fold to flop c-bet**, which, if that pattern holds at $0.25 too, would explain exactly this.

- **SB's showdown win rate at this stake is very low (30.77%)** — even lower than the all-time number — reinforcing Finding 1.

---

## Finding 3: your winrate is real, but it's concentrated in BTN/CO, and the blinds are funding it

Across every cut of the data, BTN and CO are your clear money-makers (all-time: C$158/C$183 respectively; since Jan: C$139/C$147; at $0.25: 0.57/1.44 bb/hand). Meanwhile SB, MP, and BB are flat-to-negative in most cuts. This is a completely normal shape for a winning PLO player — position is king — but it means your edge is coming almost entirely from good position play, and the out-of-position seats are a drag on winrate rather than a smaller contributor.

The 54-hand "won without showdown" export you provided skews heavily toward SB and BB hands (roughly half the sample), which fits your "Claim the orphaned pots" / "Stab at the orphaned pots" mantras — you *are* picking up uncontested pots from the blinds. The gap is that the blind seats are still net losers overall, so the steals aren't fully offsetting the times you're forced to defend or call down out of position.

---

## What this means for your existing rules

| Your rule | What the data says |
|---|---|
| Matrix.png: "SB Call 2-Bet = FOLD" | Correct and supported — SB is a loser everywhere, and its showdown win rate is trending down, not up. |
| PF-Matrix.png Trap Zone (no danglers/triplets/small pairs) | Consistent with MP's high-WTSD/low-WSD pattern — worth explicitly re-checking against MP hands specifically, not just SB. |
| "Check the turn with one-pair Aces in multi-way pots" | Directionally right, but MP's numbers suggest the leak may not be limited to multiway pots — consider whether it also applies heads-up. |
| "Respect the Overbet" (85% value at NL10) | Can't confirm from the data provided — the hand export is filtered to hands you won, so it doesn't show the times you paid off (or correctly folded to) a river overbet. Worth pulling a "lost hands, saw river, faced overbet" report specifically if you want to test this one directly. |

## Caveat on the hand history file

`Hands_Export.txt` (54 hands) is filtered to hands **you won without going to showdown** — it's useful for reviewing your steal/bluff frequency and bet sizing, but it structurally can't show you your losing hands or leaks, since none of the hands in it are losses. If you want hand-level evidence for the MP or BB leaks above, the more useful export would be filtered to **losing hands from MP and BB**, ideally ones that reached showdown.
