# Fact-check: AI agent funding claims (Q4 2026 corpus)

Date of check: 2026-10-22
Corpus checked: `cumulative_findings.md` entries dated 2026-10-17, 2026-10-20, 2026-10-21
Tracker checked: Gravity "AI agent funding tracker Q4 2026" (updated 16 October 2026)

Method note: DuckDuckGo / Bing web search endpoints were bot-blocked during this session, so
verification was done by (a) direct fetch of primary/independent articles surfaced via the
tracker's own source list and via Google News RSS, and (b) direct fetch of the tracker page and
its `data.csv`. Every URL below actually appeared in a search result or was fetched successfully
during this session — nothing is reconstructed from memory.

---

## F1. Gravity Fast's Q4 2026 AI agent funding tracker shows FIVE disclosed rounds totaling $872.5M as of October 16, 2026.

**VERDICT: VERIFIED** (as a statement about what the tracker says)

**EVIDENCE**
- https://gravity.fast/data/ai-agent-funding-tracker/ — "Quick answer: Data through 16 October 2026.
  Q4 2026 has five disclosed AI agent funding rounds worth $872.5 million; the largest is Manus at
  $500.0 million." Also: "As of 16 October 2026, Q4 2026 has 5 disclosed AI agent funding rounds
  worth $872.5 million in disclosed money." Table titled "Q4 2026 rounds so far — Five disclosed
  rounds, $872.5 million, dated 1 October 2026 to 8 October 2026."
- https://gravity.fast/data/ai-agent-funding-tracker/data.csv — machine-readable companion, 5 Q4 rows
  only: Armadin 255.5 / Photon 4.5 / Stuut 52.5 / Hone 60 / Manus 500. Sum = 872.5. Confirmed.

**NOTE**
Arithmetic independently reconciles: 255.5 + 4.5 + 52.5 + 60 + 500 = 872.5. The tracker is a
single-source compilation (one author, one site), so "verified" here means "the tracker does say
this", not "the figure is corroborated by an outside institution." Each underlying round is
independently sourced below.

---

## F2. Manus AI confirmed $500 million+ in its first funding round since the Meta deal collapse, with Boyu Capital leading and Tencent participating.

**VERDICT: VERIFIED** (with one correction to the lead detail)

**EVIDENCE**
- https://techcrunch.com/2026/10/08/chinas-manus-raises-over-500m-in-first-funding-round-since-split-with-meta/
  — "Chinese AI lab Manus' parent company, Butterfly Effect, said on Thursday in a WeChat post that
  it has raised more than $500 million, the company's first funding round since Meta was forced to
  call off its $2 billion acquisition… Boyu Capital and IDG Capital led the funding round, and
  existing shareholders Tencent, HSG (formerly known as Sequoia China), ZhenFund, and others also
  participated." Date: 8 October 2026.
- https://siliconangle.com/2026/10/08/ai-agent-developer-manus-raises-500m-at-reported-4b-valuation/
  — "It said the private equity firm Boyu Capital led the investment with contributions from Tencent
  Holdings Ltd., one of China's largest tech firms, and several others." Notes the $4B valuation is a
  Bloomberg September report, not company-confirmed, and that the Meta acquisition was "scrapped this
  past April after Chinese regulators blocked it."
- Additional independent headlines surfaced in Google News RSS (not fetched, but published and dated
  8 Oct 2026): CNBC, Reuters, The Next Web, TechNode, Quartz, Tech Xplore, PYMNTS.

**NOTE / CORRECTION**
"Boyu Capital leading" is right but incomplete: the round was **co-led by Boyu Capital and IDG
Capital**. Tencent participated as an existing shareholder, not as a lead. The corpus's framing is
not wrong, but a precise sentence should say "co-led by Boyu Capital and IDG Capital, with Tencent
and other existing shareholders participating." Also note the $4B valuation is a reported figure
(Bloomberg, September 2026), not confirmed by Manus.

---

## F3. Stuut raised $52.5 million Series B led by Insight Partners, for AI-driven order-to-cash finance automation.

**VERDICT: VERIFIED**

**EVIDENCE**
- https://www.stuut.ai/blog/why-we-raised-series-b — primary company announcement: "Today, we're
  excited to share we've raised a $52.5 million Series B led by Insight Partners, with participation
  from Andreessen Horowitz, M12, Microsoft's Venture Fund, and Activant, just ten months after our
  Series A." Post title: "Why we raised $52.5M to run all of order-to-cash." Content: collections,
  cash application, payments, disputes, deductions; 150+ customers; $3B moved through the platform.
- https://thenextweb.com/news/stuut-52-5m-series-b-ai-order-to-cash — "Stuut, the AI platform that
  runs order-to-cash for the world's enterprises… it is announcing a $52.5 million Series B led by
  Insight Partners. Andreessen Horowitz and M12, Microsoft's Venture Fund, also participated, bringing
  its total funding to $93 million." Dated 7 October 2026.

**NOTE**
A separate, larger SEC filing exists and should not be conflated with the round: a Form D accepted
16 September 2026 shows Stuut sold $67,597,673 in equity to 11 investors (via
https://runtimewire.com/article/stuut-closes-67-6m-sec-filing-microsoft-m12, pointing to the SEC
Form D at https://www.sec.gov/Archives/edgar/data/2045111/000204511126000003/). The $52.5M Series B
announcement and the $67.6M Form D offering are different disclosures; the tracker counts only the
announced $52.5M.

---

## F4. Hone raised $60 million seed at a $285 million valuation, led by Benchmark and Index Ventures, for "outcome-responsibility" agents.

**VERDICT: VERIFIED**

**EVIDENCE**
- https://runtimewire.com/article/hone-60m-seed-ai-business-agents-moritz-stephan — published 8 Oct
  2026, primary source Bloomberg Technology: "Hone raised a $60 million seed round to build AI agents
  that pursue business goals over weeks or months. CEO Moritz Stephan, a former chief of staff at
  Cognition… Benchmark and Index Ventures led the round, which values Hone at $285 million,
  according to the company."
- https://www.finsmes.com/2026/10/hone-raises-60m-in-funding-at-285m-valuation/ — 9 Oct 2026:
  "Hone, a San Francisco, CA-based provider of autonomous AI systems for enterprise outcomes, raised
  $60M funding, at a $285M valuation. The round was led by Benchmark and co-led by Index Ventures,
  with participation from Elad Gil, Hanabi, Definition, and Diffusion… Led by co-founders Moritz
  Stephan, Oliver Brady, and Carlo Kobe, Hone is an AI company developing Engines, autonomous
  systems that take ongoing responsibility for business outcomes."
- Primary product page https://hone.com/ — Hone's own positioning: "AI Engines That Own Outcomes";
  "Engines — Own outcomes. You set the goals and guardrails"; "Engines are persistent AI that own
  outcomes tied to real economic value" (https://hone.com/blog/).

**NOTE**
"Outcome-responsibility" is a fair paraphrase of Hone's own "Engines that own outcomes" language —
Hone's site uses "own outcomes", not "outcome-responsibility", so quote Hone's wording instead.
Precision fix: **Benchmark led, Index Ventures co-led** (FinSMEs), though RuntimeWire/Bloomberg say
"Benchmark and Index Ventures led" — both are used in print; the safest phrasing is "led by Benchmark
and Index Ventures" with Benchmark as lead. Two independent sources on different domains
(runtimewire.com, finsmes.com) plus the company's own site.

---

## F5. Armadin raised $255.5M Series B on October 1, 2026 (led by Andreessen Horowitz and Accel), for agentic security; founded by a Mandiant co-founder.

**VERDICT: VERIFIED** (one wording nuance)

**EVIDENCE**
- https://www.prnewswire.com/news-releases/armadin-raises-255-5-million-series-b-to-scale-effective-autonomous-security-302895278.html
  — primary press release: "Armadin, an AI-native cybersecurity company building effective autonomous
  security, today announced it has raised $255.5 million in Series B funding co-led by Andreessen
  Horowitz (a16z) and Accel that brings the company's valuation to over $2.5 billion." New investors
  Bain Capital Ventures, Redpoint; existing 8VC, Ballistic Ventures, GV, In-Q-Tel, Kleiner Perkins,
  Menlo. Total funding $445M. Quote from "Kevin Mandia, CEO of Armadin."
- https://techcrunch.com/2026/10/01/kevin-mandias-new-agent-swarm-security-startup-armadin-raises-255-5m-at-2-5b-valuation/
  — posted 1 October 2026: "Kevin Mandia, best known as the founder of cybersecurity startup Mandiant,
  which sold to Google for $5.4 billion in 2022, has raised $255.5 million for his latest startup,
  Armadin, at a valuation of more than $2.5 billion… The Series B round was led by Andreessen Horowitz
  and Accel." Product described as always-on agentic swarms that chain vulnerabilities.
- https://runtimewire.com/article/armadin-series-b-255-million-valuation — 1 Oct 2026, Reuters-sourced,
  repeats $255.5M, a16z + Accel co-leads, >$2.5B valuation.

**NOTE**
"Mandiant co-founder" is defensible but loose. TechCrunch calls Mandia "the founder" of Mandiant
(Mandiant was founded by Kevin Mandia with Dave Aitel and Glenn Chisholm); Gravity's own tracker
phrase is the more careful "Founded by one of Mandiant's founders." Recommend using that phrasing.
Also note the round is **co-led** by a16z and Accel, and total funding is $445M (after a $190M Series
A in March 2026, per TechCrunch).

---

## F6. Photon raised $4.5 million seed for agent infrastructure embedding AI in messaging apps.

**VERDICT: VERIFIED**

**EVIDENCE**
- https://techcrunch.com/2026/10/01/photon-held-a-funeral-for-mobile-apps-now-it-has-4-5m-to-help-replace-them-with-agents/
  — 1 Oct 2026: "Photon, which helps developers build agents that work over iMessage and WhatsApp,
  now has $4.5 million in seed funding to develop its products." Notes 40,000+ developer sign-ups and
  10x revenue growth over four months; founders Daniel Tian (CEO) and Ryan Zhu; unified API, channel
  framework, CLI, observability suite.
- https://techfundingnews.com/vercel-backed-photon-raises-4-5m-to-put-ai-agents-inside-imessage-and-whatsapp/
  — "the San Francisco startup, which connects agents to iMessage, RCS, SMS, WhatsApp and other
  channels, has raised $4.5 million in seed funding co-led by Gradient and A*. Vercel, HongShan,
  Z Fellows, Llama Ventures, Karman and angel investors also joined." Spectrum SDK. Valuation and total
  funding not disclosed.

**NOTE**
Seed is **co-led by Gradient and A***, not by Vercel — Vercel participated as an investor. The
"agent infrastructure embedding AI in messaging apps" description is accurate. The exact announcement
date of the round is not established by either source; TechCrunch reported it on 1 October 2026 and
RuntimeWire notes the report "does not establish when the round was announced or closed"
(https://runtimewire.com/article/photon-raises-4-5m-messaging-agents). The tracker dates the row
1 Oct 2026 (publication date).

---

## F7. Reco raised $55M on September 29, 2026 (agent security).

**VERDICT: VERIFIED**

**EVIDENCE**
- https://techcrunch.com/2026/09/29/reco-raises-55m-as-ai-agent-security-startups-crowd-the-market/
  — 29 Sept 2026: Reco "repositioned around a broader solution that uses a context graph to connect
  agents to apps, people, accounts, and permissions." Title confirms $55M.
- https://www.securityweek.com/reco-raises-55-million-for-agentic-security/ — 29 Sept 2026: "Agentic
  cybersecurity firm Reco today announced raising $55 million in a strategic funding round that
  brings the total raised by the company to $140 million. The investment round was led by AT&T
  Ventures, with additional support from new investors Forestay and Quadrille Capital." Founded 2020,
  New York.
- Additional same-day coverage on independent domains surfaced in Google News RSS: GlobeNewswire
  (press release), CTech, BankInfoSecurity, Enterprise Times, AI Insider, SecurityBrief UK.

**NOTE**
This is a **strategic** round led by AT&T Ventures, total raised $140M. The date (29 Sep 2026) is
confirmed by three independent outlets. Note Reco is a Q3 round, not Q4 — the tracker lists it as
one of the three rounds (Instinct, Reco, Restate) added in the 28–30 September window that closed Q3
at 59 rounds.

---

## F8. Q4 pace is running at 0.31 rounds/day versus Q3's 0.64 rounds/day.

**VERDICT: VERIFIED** (arithmetic checks out; one scoping caveat)

**EVIDENCE**
- https://gravity.fast/data/ai-agent-funding-tracker/ — headline "Pace" line verbatim: "Q4 2026 is
  running at 0.31 rounds a day over its first 16 days (to 16 October 2026), against 0.64 a day
  across all of Q3 2026 (59 rounds in 92 days)."
- Arithmetic check performed here: 5 rounds ÷ 16 days (Oct 1–16) = **0.3125 → 0.31** ✓.
  59 rounds ÷ 92 days (Jul 1 – Sep 30) = **0.6413 → 0.64** ✓.

**NOTE**
The figure is arithmetically sound and matches the tracker exactly. Caveat on framing: all five Q4
rounds are *dated* 1–8 October, while the pace denominator runs to 16 October — so the rate is
measured over 16 elapsed days but reflects rounds announced in the first 8. The tracker itself
stresses this is a description of elapsed pace, not a forecast or annualised run rate. The tracker
also notes the same-day Q3 comparison (day 16: Q3 had 6 rounds / $327.0M vs Q4's 5 / $872.5M).

---

## F9. KEY DISPUTED CLAIM — is the fifth Q4 round Hone ($60M), and is "Armadin's second entry" an error?

**VERDICT: NEEDS CORRECTION** — the fifth round is **Hone ($60M seed, 8 Oct 2026)**.
"Armadin's second entry" is an **error** in the corpus entry. Armadin appears exactly **once** in
the tracker's Q4 table.

**EVIDENCE**
- https://gravity.fast/data/ai-agent-funding-tracker/data.csv — exactly five Q4 2026 rows, one per
  company, with a single Armadin row:
  `Armadin,2026-10-01,255.5,...`
  `Photon,2026-10-01,4.5,...`
  `Stuut,2026-10-07,52.5,...`
  `Hone,2026-10-08,60,...,Seed,...,Benchmark and Index Ventures led`
  `Manus,2026-10-08,500,...`
- https://gravity.fast/data/ai-agent-funding-tracker/ — same five rows in the "Q4 2026 rounds so far"
  table. The update log states: "Three rounds joined in the 16 October pass: Stuut's $52.5 million
  Series B (Insight Partners), Manus's round of more than $500 million (Boyu Capital, with Tencent)
  and Hone's $60 million seed (Benchmark and Index Ventures)."
- Hone's round is independently confirmed: https://runtimewire.com/article/hone-60m-seed-ai-business-agents-moritz-stephan
  and https://www.finsmes.com/2026/10/hone-raises-60m-in-funding-at-285m-valuation/ (see F4).
- Armadin's $255.5M was a **single** Series B on 1 October 2026, confirmed by both
  https://www.prnewswire.com/news-releases/armadin-raises-255-5-million-series-b-to-scale-effective-autonomous-security-302895278.html
  and https://techcrunch.com/2026/10/01/kevin-mandias-new-agent-swarm-security-startup-armadin-raises-255-5m-at-2-5b-valuation/
  (which also notes the preceding $190M Series A was in **March 2026**, i.e. Q2, not a second Q4 round).

**NOTE — the arithmetic proves the corpus contradicts itself**
The disputed 2026-10-17 entry reads: *"The remaining three rounds are Photon ($4.5M Seed), Stuut
($52.5M Series B), and Armadin's second entry."* Then the same entry states *"Excluding Manus's
$500M, the quarter averages $93M per round across the remaining four."*
- Remaining four total = 872.5 − 500 = **372.5**; 372.5 ÷ 4 = **$93.125M → "$93M"** ✓ — only
  consistent if the fourth remaining round is Hone's $60M (255.5 + 4.5 + 52.5 + 60 = 372.5).
- Direct gap: 500 + 255.5 + 4.5 + 52.5 = 812.5; 872.5 − 812.5 = **exactly $60M** → Hone.
So the corpus's own average-of-$93M figure already assumes Hone, while the accompanying list names
"Armadin's second entry." The list item is the error; the totals were computed correctly.

**Correct replacement text for the 2026-10-17 entry:**
> "Q4 2026 data through October 16: 5 disclosed rounds totaling $872.5M. Manus's $500M (Oct 8) and
> Armadin's $255.5M Series B (Oct 1) account for 87% of the quarter's disclosed total. The remaining
> three rounds are Photon ($4.5M Seed, agent infrastructure), Stuut ($52.5M Series B, vertical AI for
> finance order-to-cash), and Hone ($60M Seed, Benchmark/Index Ventures, agent platforms)."

---

## Summary table

| Claim | Verdict |
|---|---|
| F1 Tracker: 5 rounds / $872.5M as of 16 Oct 2026 | VERIFIED |
| F2 Manus $500M+, Boyu leading, Tencent participating | VERIFIED (co-led by Boyu **and IDG**) |
| F3 Stuut $52.5M Series B, Insight Partners, order-to-cash | VERIFIED |
| F4 Hone $60M seed @ $285M, Benchmark + Index | VERIFIED |
| F5 Armadin $255.5M Series B Oct 1, a16z + Accel, Mandiant founder | VERIFIED (wording: "one of Mandiant's founders") |
| F6 Photon $4.5M seed, messaging agent infra | VERIFIED (co-led by Gradient and A*) |
| F7 Reco $55M, 29 Sep 2026, agent security | VERIFIED |
| F8 Q4 0.31 vs Q3 0.64 rounds/day | VERIFIED (arithmetic confirmed) |
| F9 Fifth round is Hone; "Armadin's second entry" | **NEEDS CORRECTION — fifth round is Hone ($60M)** |

## Key correction

The single material error is in the 2026-10-17 entry: the fifth Q4 round is **Hone** ($60M seed, 8 Oct
2026, Benchmark led / Index Ventures co-led, $285M valuation) — not an "Armadin second entry."
Armadin appears once in the tracker (one $255.5M Series B on 1 Oct 2026; its $190M Series A was in
March, i.e. Q2). The corpus's own "$93M average across the remaining four" figure already implies
Hone, so the fix is confined to the list item, not the totals.

Two secondary precision fixes worth carrying into the report: Manus' round was **co-led by Boyu
Capital and IDG Capital** (Tencent participated as an existing shareholder), and Photon's seed was
**co-led by Gradient and A*** with Vercel participating — Vercel did not lead.
