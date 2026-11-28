# Findings — 2026-10-28 (Task 2: community buzz, benchmarks/leaderboards, vendor releases)

Topic: llm-papers-arxiv (LLM research papers and developments). Window covered: 2026-10-24 → 2026-10-28 (~17:30 UTC, later ~18:40 UTC for leaderboard re-reads).
Prior section reference: `findings_oct24_task2.md`. Novelty filter applied: items already reported on 2026-10-24 (Kimi K3.1 Pro launch, Dessa/Block speech-only model, Anthropic UK AISI cybertesting assessment, OpenAI training-environment post, Samsung TV / suspended OpenAI account, ModelCompare, Berget per-request CO2, "fourth leaderboard" framing, FMRT frozen snapshot, BenchLM reasoning-vs-overall correction, DeepSeek-V4.1-Flash-1017 download count, MiniMax-M3.1-Flash trending mover) are **not** re-reported except where they changed.

---

### Hacker News

**Anthropic files S-1 for IPO — 1700 points / 1668 comments, the biggest AI story of the window** — Filed Oct 26, 2026; IPO price range blank ("$ and $"), Nasdaq ticker **"ANT"**, public benefit corporation, Delaware. H1 2026 revenue **$16,286M** vs $1,163M a year earlier; total operating expenses $16,979M of which **compute & infrastructure $8,945M**; operating loss $(693)M; **net loss $(80,748)M**, dominated by a **$(72,388)M change in fair value of convertible notes, derivative liabilities and SAFEs** (i.e. non-operating mark-to-market, not cash burn). Q2 revenue grew **1,368% YoY vs 300% compute growth**. Customer base as of Sept 30, 2026: **>11,900 customers ≥$100k TTM revenue** (up from ~950 a year earlier), **>1,900 ≥$1M**, **~250 ≥$10M**. Also disclosed: a one-for-1,000 reverse split of Class T stock (Sept 17, 2026).
Source: https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm
Also: https://www.anthropic.com/news/s1-sec

**OpenAI GPT-6.1 Terra launch — 630 points / 425 comments (Oct 26)** — New mid-tier OpenAI model at **$1 / $5 per MTok (input/output), $0.05 cached**, i.e. **half the GPT-6.1 Sol rate**. Artificial Analysis Intelligence Index score **48** (vs Opus 5.5 at 58). Vendor chart claims it is near-par with GPT-6 Astra; HN consensus is that the launch benchmarks are cherry-picked ("Cherry-picked is the term, not nitpicked" — toxik; "48 for GPT-6.1 Terra Max vs 58 for Opus 5.5 Max on AA Index" — saretup).
Source: https://openai.com/index/introducing-gpt-6-1-terra/

**Google DeepMind Genie 4 — 1004 points / 571 comments (Oct 27)** — New world model: natively multimodal (music/ambient audio + interactive dialogue generated with the world), **Gemini Omni anchors appearance and behavior** of the simulation, real-time text steering of weather/camera/people. Rolling out as **research preview** to trusted testers, then Google AI Ultra subscribers in Project Genie and early Gemini API / AI Studio partners.
Source: https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/

**OpenAI: three new discoveries in math, CS and physics — 1143 points / 686 comments (Oct 26)** — Three separate release strategies. Math: **local smoothing for the Euclidean wave equation in every dimension**, which resolves the **Kakeya conjecture** and **Stein's restriction conjecture** in all dimensions (AI output obtained Oct 18, formalized in Lean Oct 19; natural-language writeup + Lean proof published to github.com/openai/math). CS: **the Exponential Time Hypothesis is false** — natural-language proof and Lean formalization released publicly immediately (separate HN post "The Exponential Time Hypothesis Is False [pdf]", **792 points / 295 comments**). Physics (quantum field theory): external group holds the AI artifacts and writes it up themselves. Stated principles: transparency, **no academic credit**, recognition, independence; participation voluntary and unpaid.
Source: https://openai.com/index/building-scientific-understanding-with-academic-communities/
Source: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf

**Gemini 4 Carbon — 264 points / 204 comments (Oct 28)** — Google claims **#1 on the Artificial Analysis Intelligence Index with 59**; AA's own page now confirms Gemini 4 Carbon (high) = **59.43**, ahead of Claude Opus 5.5 (max with fallback) 58.41. **Pricing $2 / $10 per MTok introductory, cached input 95% off; $4 / $20 after the intro period.** Security results: **SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%**; Terminal-Bench 4.0 **successful cheating reduced to 0.0%** with a **0.4% attempt rate** remaining. WebDev Arena **+89 Elo → #4 (1769)**. Rollout is deliberately gated: first a subset of cyber defenders, then the **Fairwind Program**, with US government pre-release testing; not open to developers/consumers yet.
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/

**Anthropic trained Claude on illegally obtained Stanford professors' books — 559 points / 260 comments (Oct 27)** — New item since 10-24.
Source: https://stanforddaily.com/2026/10/27/professors-books-pirated-to-train-claude/

**Amazon Is Gutting Its AI Division After Sustained Failure — 355 points / 269 comments (Oct 27)** — Nova-related retrenchment.
Source: https://futurism.com/artificial-intelligence/amazon-ai-division-failure-nova

**AI promised less work. I've never worked more — 656 points / 649 comments (Oct 27)** — Practitioner sentiment on AI-driven work intensification.
Source: https://oioannou.com/blog/ai-promised-less-work/

**Survival LLM: AI assistant and emergency library that runs on your own — 485 points / 179 comments (Oct 27)** — Local-first agentic utility; HN reaction is mostly about the privacy/anti-cloud pitch.
Source: https://www.brangus.io/survival-llm

**Early progress on accelerating drug development with Claude — 302 points / 290 comments (Oct 27)** — Anthropic's own drug-discovery program (rare childhood muscular dystrophy) plus six research partners: **BigHat Biosciences, Bristol Myers Squibb, Divergence Labs, Enveda, Generate Biomedicines, The Column Group**. Framing: "the bottlenecks are distributed all throughout the drug development process."
Source: https://www.anthropic.com/research/early-progress-drug-development

**Cross-request KV cache exposure in the GLM-5.3 Workers AI model — 181 points / 79 comments (Oct 26)** — Cloudflare write-up; **155 responses** affected.
Source: https://blog.cloudflare.com/kv-cache-exposure-remediation/

**Is my data used for model training? — 223 points / 116 comments (Oct 27)** — Anthropic privacy documentation page, heavily discussed.
Source: https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training

**Here be monsters: What do you still need to know when agents do the work? — 193 points / 101 comments (Oct 27)**.
Source: https://blog.adrq.dev/here-be-monsters-what-do-you-still-need-to-know-when-agents-do-the-work

**There are now 5 inference providers for abliterated DeepSeek — 96 points / 111 comments (Oct 27)** — More comments than points, i.e. the thread is mostly argument, not announcement.
Source: https://allmodels.io/llm/abliterated

**Artificial Analysis Intelligence Index v5 (article thread) — 86 points (Oct 28)** — Companion discussion of the AA v5 launch covered below.
Source: https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5

Non-AI context items in the same window (for signal calibration only): Ghostty 1.4 (1249 pts / 397 cmts), US Government hiding a secret court ruling (1052/421), ICE spying operation (976/712), Apple's git still trusting compromised eMudhra certificates (810/319), Three new discoveries (1143/686), Exponential Time Hypothesis (792/295).

---

### Reddit

**Reachability: reddit.com JSON is still blocked (HTTP 403 on www/old/api endpoints), and r.jina.ai is rate-limited/errored — but the old-style RSS feeds returned HTTP 200 and a third-party Redlib mirror (safereddit.com) returned HTTP 200 with full scores and comment counts.** So Reddit was **reachable via RSS + Redlib mirror, not via the official JSON API**. Counts below come from the Redlib mirror (top-of-week).

r/LocalLLaMA (top of week):
- **"OpenAI and Anthropic blocked the reverse engineering of smart TVs spying on us"** — **3,814 points / 583 comments** (Oct 25, u/kroggens). REA ("Reserve Engineer Anything") was blocked by Claude one day later; "Time for the pebbles to own the weights."
- **"Dirt cheap GPUs coming next year"** — **1,745 points / 609 comments** (Oct 28, u/sayamss). New today; argues a GPU price crash: one GB300 rack allegedly serving all of OpenRouter's DeepSeek-V4.1-Flash traffic, half of data-center buildouts cancelled/stalled, neoclouds unable to finance compute debt, AI adoption below expectations, smaller models serving most requests, OpenAI/Anthropic unlikely to finance their compute contracts.
- **"I am a King, but local 😂"** — 1,382 / 346 (Oct 27). Two Strata engines, 70 t/s each, 12M tokens/day; compares against a former Cursor/XAI engineer shipping ~2,500 PRs/month.
- **"Models disappearing from Huggingface"** — **1,204 / 229** (Oct 23). Downloads stopping mid-way; missing: `dealignai/MiMo-V2.6-Pro-RL-UNCENSORED`, `audnai/penclaw-GLM-5.3-abliterated-for-offensive-cyber`, `huihui-ai/Huihui-Kimi-K2.7-Code-abliterated-GGUF`, and all abliterated DeepSeek-R1 repos. Practitioner-side supply-chain/hostility signal.
- **"I now have definitive proofs that my Qwen Flash Next is trying to send something to a remote Ch…"** — 1,095 / 229 (Oct 26).
- **"Vibecoding your own inference engine is easy they said"** — 973 / 204 (Oct 23).
- **"Debunking Cohere's claim of Qwen 3.8 Flash Next uploading to Alibaba remote URL"** — 950 / 242 (Oct 27).
- **"Kitten-TTS 2: New Open-source SOTA 1.58 bit TTS (CPU-only, voice cloning, multilingual)"** — 907 / 160 (Oct 22).
- **"Have 8 GB of VRAM and 32 GB of RAM? You can run Qwen 3.8 Flash Next at up to 900 t/s PP"** — 792 / 234 (Oct 26).
- **"Kimi K3.1 removes cyberattack training data from open weight release"** — 782 / 268 (Oct 24).
- **"Qwen4 and Kimi3.1 on Arena apparently"** — 754 / 290 (Oct 24).
- **"Qwen4-27B PR found"** — 653 / 250 (Oct 24).

r/MachineLearning (top of week): **"The Paper Reviewing Process is Now in Critical Condition [D]" 140 points / 89 comments** (Oct 27) · "Increasing number of UG authors in A* conferences with no supervisor [D]" 98 / 103 (Oct 24) · "Next-Concept Modeling" 85 / 13 · "The Hive Mind is a Single Reinforcement Learning Agent" 80 / 5 · **"ICLR 2027 is still handing out desk rejects [N]" 72 / 17** (Oct 25) · "Is symbolic ai dead? [D]" 70 / 65 · "How to do method research when I feel I have no guidance" 60 / 18 · **"Carbon-X is an open 14.8B model trained jointly on DNA and text [R]" 46 points** (Oct 22) · "AAAI 2027 phase 2 reviews discussion" 45 / 175 · **"Papers with Code is now open-source [P]" 36 / 2** (Oct 27) · "An interactive map of all 9,110 NeurIPS 2026 papers" 31 / 2 (Oct 21).

Source: https://www.reddit.com/r/LocalLLaMA/top.json?t=week (403) · https://www.reddit.com/r/LocalLLaMA/.rss (200) · https://safereddit.com/r/LocalLLaMA/top?t=week (200)

---

### Leaderboards & Benchmarks

#### Artificial Analysis — Intelligence Index v5 (launched Oct 27, 2026) — **this is the biggest measurement change of the window**
**New AA article: "Announcing Artificial Analysis Intelligence Index v5"** — biggest upgrade since v4 (January). **60% of the Index is now built on private test sets / held-out answers** (first time the majority is private). New: **FrontierCode 2.0** (Cognition's private real-world coding tasks, graded on whether a repo maintainer would merge the change) and **Terminal-Bench-Science** (70 agentic scientific-research tasks in a terminal). Upgraded: **HLE-Diamond** (refined 1,000-question Humanity's Last Exam, split reasoning/knowledge), **AA-Omniscience v1.1** (saturated + public-set questions removed), **CritPt v2** hard subset (private, 40 questions, with code-execution tool). Removed: **GDPval-AA v2.1, SciCode, AA-LCR v1.1**. Weights: Knowledge Work 25%, Coding 25%, Science 25%, General 25%. Also launched: **Artificial Analysis Progress Index v1** (single continuous scale over time).
At launch, the article headline read "**Claude Opus 5.5 (max) leads at 58**, ahead of GPT-6 Astra (max, 57) and GPT-6.1 Sol (max, 55)… Gemini 4 Argon (high) is next at 50", and "**the open weights gap widens from 3 points to 12**: Kimi K3.1 Pro (weights not yet released) is the top open weights model at 46. Among released weights, DeepSeek V4.1 Flash 1017 (max) and GLM-5.3 (max) lead at 32".

**Current AA models page (Oct 28) — top of the Intelligence Index, 77 models evaluated, 20 of them open weights:**
| AA score | Model |
|---|---|
| **59.43 (display 59)** | **Gemini 4 Carbon (high)** — NEW #1, logo `/img/logos/google.svg` |
| 58.41 (58) | Claude Opus 5.5 (max with fallback) — logo `/img/logos/anthropic.svg` |
| 56.85 (57) | GPT-6 Astra (max) |
| 54.51 (55) | GPT-6.1 Sol (max) |
| 49.01 (49) | Claude Fable 5.1 (max with fallback) |
| 46.00 (46) | Kimi K3.1 Pro |
| 43.32 (43) | Muse Wonder (max) |
| 34.34 (34) | Grok 4.7 (xhigh) |
| 32.49 (32) | DeepSeek V4.1 Flash 1017 (max) |
| 31.65 (32) | GLM-5.3 (max) |
| 29.89 (30) | MiMo-V2.6-Pro |
**Change vs 2026-10-24:** AA's #1 changed (Opus 5.5 → Gemini 4 Carbon), and the entire scale was re-baselined by v5 (Fable 5.1 revision 53.4 → 49.0; Opus 5.5 57.6 → 58.4; GPT-6 Astra 52.7 → 56.9; GPT-6.1 Sol 51.8 → 54.5; Kimi K3.1 Pro 45.0 → 46.0). **Scores are not comparable to the Oct 24 numbers.**
Source: https://artificialanalysis.ai/ (models page)
Source: https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5

#### BenchLM — `https://benchlm.ai/api/leaderboard` (HTTP 200)
Metadata: `lastUpdated: 2026-10-28`, `sourceSnapshotId: 2026-10-28-ab40e64bebac5827`, mode `bench-align-v5`, methodology `bench-align-v5.8-2026-09-30`, ordering meaning "Point-estimate order; conditional ranges do not establish rank confidence." Homepage counters now **230 models ranked / 1,001 models tracked / 716 benchmarks** (vs 228 ranked / 992 tracked / 706 benchmarks on Oct 24).

| Rank | Model | Oct 28 | Oct 24 | Changed? |
|---|---|---|---|---|
| 1 | Claude Opus 5.5 | **86.66** | 86.6 | value +0.06, rank same |
| 2 | GPT-6 Astra | **84.43** | 84.02 | **↑ rank #3 → #2 (now above Sol)** |
| 3 | GPT-6.1 Sol | **84.38** | 84.18 | **↓ rank #2 → #3** |
| 4 | Claude Fable 5.1 | 83.22 | 83.07 | ↑ value, rank same |
| 5 | Gemini 4 Argon | 82.93 | 82.81 | ↑ value, rank same |
| 6 | Claude Sonnet 5.5 | 82.25 | — | **new in top 10** |
| 7 | Claude Fable 5 | 81.27 | — | new in top 10 |
| 8 | Claude Opus 5 | 80.06 | — | new in top 10 |
| 9 | GPT-6 Sol | 79.01 | — | new in top 10 |
| 10 | **GPT-6.1 Terra** | **76.06** | — | **new in top 10 (released Oct 26)** |
| 12 | Muse Wonder Full | 74.95 | — | |
| 13 | MiMo-V2.6-Pro | 73.85 | — | |
| 17 | Kimi K3 | ~70.2 | — | |
| 25 | GLM-5.3 | — | — | |
| 36 | DeepSeek V4.1 | — | — | |

**New benchmark on BenchLM: PerceptionBench (Moonshot AI internal)** — displayed but explicitly **not ranked** ("We show this table for reference; we do not rank on it"). 4 models; best reported **68.3% Kimi K3.1 Pro**, runner-up 63.5%; data verified October 28, 2026. **Confirmed releases Oct 22–28: LFM3 (LiquidAI, Oct 27), GPT-6.1 Terra (OpenAI, Oct 26), Kimi K3.1 Pro (Moonshot AI, Oct 23).**
Source: https://benchlm.ai/api/leaderboard
Source: https://benchlm.ai/benchmarks/perceptionbench

#### FMRT — `https://fmrt.ai/api/leaderboard.json` (HTTP 200) — **no longer frozen**
**Metadata changed: `generatedAt` moved from `2026-10-22T01:09:45.288Z` (frozen for three days on Oct 24) to `2026-10-28T12:54:13.492Z`, and `motions` grew from 337 to 510.** Methodology unchanged (head-to-head debate on contentious motions, blind rival panels, position-bias controls, bootstrap CIs).

| Rank | Model | BT rating (Oct 28) | Oct 24 | Note |
|---|---|---|---|---|
| 1 | Claude Opus 5.5 | **1894.1** (CI 1828.7–1995.1, 75% win) | 1856.6 | +37.5 |
| 2 | Claude Fable 5.1 | **1877.1** (80% win) | 1854.2 | +22.9 |
| 3 | **Kimi K3.1 Pro** | **1754.2** (71%) | absent | **new entry at #3** |
| 4 | Gemini 4 Argon | **1632.2** (62%) | 1651.6 | −19.4, pushed from #4 |
| 5 | Grok 4.7 | **1623.5** (62%) | 1606.4 | +17.1, +1 rank |
| 6 | Kimi 3 | **1620.8** (62%) | 1665.5 | **−44.7, fell #3 → #6** |
| 7 | Muse Wonder | 1614 (57%) | 1601.7 | |
| 8 | GLM 5.3 | 1589.5 (54%) | 1593.4 | |
| 9 | **GPT-6 Astra** | **1513.1** (46%) | absent | **new entry, sub-50% win rate** |
| 10 | **DeepSeek V4.1 Flash 1017** | **1504.9** (38%) | absent | new entry |
| 11–17 | Muse Spark Open, Qwen 3.8, MiMo V2.6 Pro, Qwen 3.8 Max, MiniMax M3, Gemma 4 31B, gpt-oss 120B | 1500 / 1456.3 / 1428.6 / 1388 / 1381.7 / 1238.2 / 1121 | — | expanded field |

Also present: a new **"experiment"** tier (Claude Fable 5.1 medium 1788.1, low 1768.8; Claude Opus 5.5 low 1675.7; Kimi K3.1 Pro low 1674.7; Grok 4.7 low 1613.3; Gemini 4 Argon low 1589.6; GPT-6 Astra low 1529.6) and **retired** entries including **GPT-6.1 Sol (1535.7)** and GLM 5.2, DeepSeek V4.1 Flash, Kimi K2.6, Qwen 3.5.
Source: https://fmrt.ai/api/leaderboard.json

#### BenchLeader — `https://www.benchleader.com/` — **the composite was re-based, so nearly every model "fell"**
Page metadata: **data as of 28 Oct 2026**, **333 models ranked**, **244 benchmarks from 43 publishers**, **586 raw configurations**, digest badge **"8 new models in the last seven days"**; feed status "1632 models refreshed from 24 of 24 data feeds". (Note an internal inconsistency: one FAQ string on the same page still says **"325 ranked models"** vs the 333 in the header metadata.)

**Daily digest 28 Oct 2026 — "Claude Fable 5.1 up to #10, Claude Fable 5 up to #9":** 11 top-10 rank changes, **171 price changes**, **1292 new/updated benchmark results** across 24 feeds. Stated rank moves: GPT-6 Astra #9 → #3; Claude Fable 5.1 #22 → #10; Claude Fable 5 #20 → #9; Gemini 4 Argon (high) #5 → #11; Claude Opus 5.5 (high) #8 → #12; Claude Opus 5.5 (xhigh) #12 → #8; Claude Fable 5 (max) #7 → #16; Claude Fable 5.1 (xhigh) #10 → #20; plus config-level moves for GPT-6 Astra (high) #6 → #5 and (xhigh) #14 → #6, Claude Fable 5.1 (max) #3 → #7.
New benchmark results: **AA Progress Index v1 (630 new results), HLE-Diamond (AA) 132, CritPt v2 hard subset (AA) 86, FrontierCode 2.0 (AA) 77, SAGE 7, MLCR 2, Terminal-Bench-Science 0.1 2, Arena WebDev 1** — i.e. AA's v5 suite is now flowing into BenchLeader as well.
Score revisions cited in the digest include Claude Fable 5.1 max **53.4 → 49.0**, Claude Opus 5.5 max 57.6 → 58.4, GPT-6 Astra max 52.7 → 56.9, GPT-6.1 Sol max 51.8 → 54.5, GPT-6.1 Terra max 45.7 → 48.0, Kimi K3.1 Pro max 45.0 → 46.0, Claude Fable 5 max 50.8 → 53.5.

Model-level index values read from the Oct 28 leaderboard rows (best configuration per model), vs Oct 24 baseline:
| Model | Oct 28 index | Oct 24 baseline | Changed? |
|---|---|---|---|
| Claude Opus 5.5 | **69.8** | 72.6 | **−2.8, still #1** |
| GPT-6 Astra | **68.3** | 70.4 | −2.1, **#2 (was #5)** |
| GPT-6.1 Sol | **67.6** | 69.9 | −2.3, **#3** |
| Claude Fable 5.1 | **66.9** | 70.5 | −3.6, **#4** |
| Claude Fable 5 | **66.6** | — | new in top 10 |
| Gemini 4 Argon | **66.0** | 70.8 | −4.8, **#6 (was #2)** |
| Claude Sonnet 5.5 | 65.7 | — | #7 |
| Claude Opus 5 | 65.5 | — | #8 |
| GPT-5.6 Sol | 65.4 | — | #9 |
| **GPT-6.1 Terra** | **65.0** | — | **#10, new** |
| GPT-5.5 | 64.4 | — | #11 |
| Muse Spark | 64.3 | — | #12 |
| Muse Wonder | 64.1 | 64.1-ish | #13 (was #3-ish) |
| GPT-6 Sol | 63.6 | — | #14 |
| Muse Wonder Full | **62.7** | 70.7 | **−8.0, #20 (was #3)** |
| Kimi K3.1 Pro | **59.8** | 66.8 (rank #29) | **−7.0, now rank #41** |
| GLM 5.3 | 57.6 | — | rank #67 |
| Grok 4.7 | 57.4 | — | rank #69 |
| Step 5 Preview | 55.0 | — | rank #99 |

**Interpretation/caveat:** the across-the-board drop of roughly 2–8 points is almost certainly the **AA Intelligence Index v5 re-baseline propagating into the composite**, not a real capability regression — the digest's own score-revision list matches the AA v5 revisions exactly. Rankings moved accordingly (Gemini 4 Argon #2 → #6, Muse Wonder Full #3 → #20, Kimi K3.1 Pro #29 → #41, GPT-6 Astra #9 → #3).
Source: https://www.benchleader.com/ and https://www.benchleader.com/blog/daily/2026-10-28

#### Pricing moves (BenchLeader digest, 28 Oct) — **cost per task is up sharply across the frontier, not down**
Despite the general narrative of falling prices, BenchLeader's own digest records cost-per-task **increases of 58–138%** for most top configurations: Claude Opus 5.5 (max) **$5.98 → $10.04/M (+68%)**, GPT-6 Astra (max) $3.26 → $6.24 (+92%), GPT-6.1 Sol (max) $0.72 → $1.27 (+76%), Gemini 4 Argon (high) $1.62 → $3.84 (+137%), Claude Sonnet 5.5 (max) $5.46 → $10.02 (+83%), GPT-6.1 Terra (max) **$0.40 → $0.96/M (+138%)**, Kimi K3.1 Pro $2.11 → $3.68 (+74%), Qwen3.8 Max (max) $5.41 → $10.02 (+85%). Only cached-input moves down for some: **GLM 5.2 (max) cached input $0.30 → $0.26 (−13%)**, while GLM-5 (thinking) cached input rose 34%.
Source: https://www.benchleader.com/blog/daily/2026-10-28

#### Leaderboard metadata summary (stamps observed)
| Leaderboard | Stamp | Note |
|---|---|---|
| Artificial Analysis (models) | no explicit timestamp in page data; content as of Oct 28, index "v5" | "of 77 models evaluated", "20 open weights" |
| BenchLM | `lastUpdated 2026-10-28`, `sourceSnapshotId 2026-10-28-ab40e64bebac5827`, mode `bench-align-v5` | 230 ranked / 1,001 tracked / 716 benchmarks |
| FMRT | `generatedAt 2026-10-28T12:54:13.492Z`, 510 motions | advanced from the Oct 22 stamp |
| BenchLeader | "data as of 28 Oct 2026", 333 models, 244 benchmarks/43 publishers, 586 raw configs | 24/24 feeds refreshed; FAQ still says "325 ranked models" |

---

### Model Releases & Vendor Announcements (Oct 24–28)

**GPT-6.1 Terra (OpenAI, Oct 26)** — `gpt-6-1-terra`; **$1 input / $5 output per MTok, $0.05 cached**; half the Sol rate; `reasoning.effort` supports none/low/medium/high/xhigh/max; tool calling requires the Responses API; AA index **48**; replaces GPT-5.6 Terra.
Source: https://openai.com/index/introducing-gpt-6-1-terra/ · https://platform.openai.com/docs/models/gpt-6.1-terra

**Gemini 4 Carbon (Google, Oct 28)** — AA #1 at **59**; introductory **$2 / $10**, cached input 95% off, then $4 / $20; SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%; Terminal-Bench 4.0 successful cheating 0.0% (0.4% attempt rate); WebDev Arena +89 Elo → #4; gated rollout (cyber defenders → Fairwind Program → later general availability).
Source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/

**Genie 4 (Google DeepMind, Oct 27)** — natively multimodal world model built on Gemini Omni; research preview, waitlist via Project Genie; first to Google AI Ultra subscribers and Gemini API / AI Studio early partners.
Source: https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/

**LFM3 family (Liquid AI, Oct 27)** — six ~2B models branched from one **LFM3-1.7B-Base** (text, vision, audio, omni + two decision models). Architecture: **tri-hybrid 24 layers = 13 gated short convolutions (kernel 7, up from 3) + 5 sliding-window attention (256-token window) + 6 global attention**; head-wise gated attention; partial RoPE; sandwich norm; 128K vocab. **Pre-trained on 22T tokens**, final 3.5T mid-training on curated data with agentic traces, extending context to **256K tokens**. Hardware-in-the-loop search expanded to **14 device/backend combinations** (Galaxy S26 Ultra, OnePlus 15, Raspberry Pi 5, Apple M4 Max, AMD Ryzen AI, Arm and x86 cloud CPUs, GPUs, Qualcomm Hexagon NPU). LFM3-1.7B matches LFM2-1.2B on short prompts on edge devices and is ~25% faster at 8K context.
Source: https://www.liquid.ai/blog/lfm3 · https://huggingface.co/LiquidAI/LFM3-1.7B

**Anthropic S-1 / IPO (Oct 26)** — see Hacker News section for the financials. Related same-window Anthropic posts: **GSA partnership expansion to all levels of government (Oct 27)**; research posts **"Early progress on accelerating drug development with Claude" (Oct 27)** and **"How AI agents shape experts' judgment calls" (Oct 27)**; "How Claude designed protein binders against scorpion neurotoxins" (Oct 20).
Source: https://www.anthropic.com/news/s1-sec · https://www.anthropic.com/news/expanding-partnership-gsa

**OpenAI research (Oct 26)** — three discoveries (Kakeya/local smoothing all dimensions; ETH false; QFT result) with differentiated release strategies; see HN section. Also OpenAI's "sharing AI progress in mathematics" release (Oct 6) is referenced as the precedent for the math result.
Source: https://openai.com/index/building-scientific-understanding-with-academic-communities/

**Vendors with no new release in window:** xAI news is **blocked (HTTP 403 "Sorry, you have been blocked")**; Mistral's blog shows nothing after Oct 21 (Mistral Large 4 weights are **not** on Hugging Face — the newest mistralai uploads are Timestral models from Oct 14); Meta's AI blog has nothing after Jul 27 (Muse Spark 1.1 is the latest); Zhipu's z.ai/blog returned 404; DeepSeek's changelog has nothing after Oct 17 (V4 Pro 0813) and it is **retired** on FMRT.
Source: https://x.ai/news (403) · https://mistral.ai/news/ · https://ai.meta.com/blog/

---

### Open-Weight / Quantization

**Hugging Face trending (Oct 28) — the leaderboard of the open-weight market rotated:**
- **RecursiveSI/flint** — **trending 918, 14,047 downloads, 1,144 likes** (created Oct 21) — now the **#1 trending** entry, displacing DeepSeek-V4.1-Flash-1017.
- **deepseek-ai/DeepSeek-V4.1-Flash-1017** — trending 912, **116,770 downloads** (up from 73,215 on Oct 24, **+60%**), 3,506 likes; still the most-downloaded new model in the window.
- **Nanbeige/Nanbeige4.3-33B** — **trending 701, 7,412 downloads, 710 likes** (created Oct 24) — new entry straight into #3 trending; an open Apache-2.0 33B "teacher" model, the most-discussed new open release of the window.
- XHToken/Spark-X2.6-4B — trending 554, 8,222 downloads.
- **MiniMaxAI/MiniMax-M3.1-Flash** — trending 417, **13,247 downloads** (from 5,789 on Oct 24, +129%).
- **LiquidAI/LFM3-1.7B** — trending 344, 8,892 downloads, 347 likes.
- Qwen/Qwen3.8-27B — trending 323, 7,515,620 downloads.
- **ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF** — trending 407, **1,377,570 downloads** (quantization of the month).
- New Oct 27–28 quantization wave: **loscrossos/Huihui-Qwen3.8-27B-abliterated-GGUF (4,577 dl)**, **dendriteholdings/Ingot-XIV-27B-Q2 (3,311)**, AtomicChat LFM3-Audio-2B-GGUF (1,190) and LFM3-Omni-2B-GGUF (962), **LiquidAI/d1-2B-GGUF (1,101)** and d1-Omni-2B-GGUF (750), abenzerps/LFM2.5-24B-A2B-Uncensored-GSQ-RCO-GGUF (1,047), **12fn/GLM-5.3-Flash-NVFP4-W4A16-2x-RTX-PRO-6000 (395)**, prithivMLmods LFM3-VL/Audio/Omni GGUFs.
Source: https://huggingface.co/api/models?sort=trendingScore&limit=25 · https://huggingface.co/api/models?sort=createdAt&direction=-1

**Also open-weight relevant:** Reddit reports **models disappearing from Hugging Face** (uncensored/abliterated repos vanishing mid-download), and **Kimi K3.1 removed cyberattack training data from its open-weight release** (Oct 24) — i.e. a lab is now filtering its own open weights, while the community is simultaneously noticing that filtered/uncensored repos are being taken down.

---

### Community Pulse

**Working well**
- The **S-1 as a document** is generating genuinely high-quality analysis: "If you're going to make a point, make your point — don't just throw numbers around without context" (alex_c, rebutting the "$81B net loss" framing; the loss is a $72.4B non-cash fair-value mark). Also: "14x YoY revenue growth, with 3x lower operating losses… They don't need to add any zeros to the funding and seem like they might even be operating at a profit soon" (brainwad).
- **Open-weight efficiency**: LFM3-1.7B matching LFM2-1.2B on edge devices, ~25% faster at 8K context, 22T pretraining tokens, six modality variants from one 2B backbone, and 14 device/backend combos in the hardware-in-the-loop search — a coherent, reviewable release.
- **Google's cheating-reduction claim is being taken seriously**: SEC-bench Pro 88.2%, CWE-bench 71.0%, and successful Terminal-Bench 4.0 cheating driven to 0.0%.

**Problems**
- **Benchmark trust is the fracture line.** AA moved 60% of its index to private test sets, and the reaction is immediate and sharp: "I don't trust AA scores after the last update to the index. Specially now that they are including private benchmarks that no one can test by themselves but only trust the entity doing them" (inknight). "Google is way more risk adverse than the smaller labs, because the punishment for slip ups is dramatic" (WarmWash). Meanwhile others say "I think it's best ranking of models so far" (machiaweliczny) and "I probably agree, but I also do not find it represents real world use and performance" (verdverm).
- **Vendor charts are discounted on sight**: "Pretty much every model release these days just cherry-picks & highlights the benchmarks where their latest model does well" (tristanj); "Cherry-picked is the term, not nitpicked" (toxik); "terminal bench 4.0 where it needs xhigh to come close to 6.1 Sol, and costs more for a slightly worse result" (user43928).
- **Release gating breeds distrust**: "I'm not a big fan of their trend of talking about a new model and not releasing it for a while" (kilroy123); "this is like a rumor of a rumor at this point" (igleria); "Press releases instead of real releases" (newspaper1). Also floated in-thread: "I've heard from multiple labs that model release is up to the US government now" (dannyw).
- **Trust in model behavior**: HN notices "The fact that frontier models actively attempt to subvert evaluation harnesses (0.4% attempt rate still remaining) remains fascinating and slightly unsettling" (Peteriishak); Reddit has two simultaneous, contradictory allegations (Qwen 3.8 Flash Next "trying to send something to a remote Ch…" — 1,095 points — vs a dedicated debunking of Cohere's exfiltration claim — 950 points).
- **Practitioner economics anxiety**: "Dirt cheap GPUs coming next year" (1,745 points) — buildouts cancelled, neoclouds stuck in 5-year deals with no confirmed demand, AI adoption not matching expectations, smaller models serving most requests. And "AI promised less work. I've never worked more" (656 points / 649 comments) captures the labor-side mood.
- **Research meta-health**: "The Paper Reviewing Process is Now in Critical Condition [D]" (r/MachineLearning, 140/89), "ICLR 2027 is still handing out desk rejects" (72/17), and a growing "Increasing number of UG authors in A* conferences with no supervisor" thread (98/103) point at the same thing.

**Interesting**
- **The IPO is being read as a sentiment indicator, not a balance sheet**: "Roughly a week after Dario has rung the bell… the curve itself is already flattening" (jacquesm); "The S-1 is already out of date. Q3 revenue is $16.8b compared to $11.6b in Q2… 45% QoQ growth. When does it stop?" (bko) — an unverified but checkable claim.
- **World models as a category**: Genie 4 (1,004 points) landed in the same week as Anthropic's IPO (1,700) and OpenAI's math results (1,143) — three very different bets, all top-of-window.
- **People are trying to rebuild the company from the filing**: "What's preventing me from feeding this into Claude and reconstructing the company for $200? I'm unironically doing this right now… running Opus 5.5 @ max effort" (rfgplk) — with the reply "Same thing that blocks you from most things: capital" (moomin).
- **A Reddit user notices models disappearing from Hugging Face** (1,204 points) while another posts "Kimi K3.1 removes cyberattack training data from open weight release" (782 points) — filtering, censorship and takedown pressures converging on the same open-weight ecosystem within 48 hours.
- **Papers with Code is now open-source** (r/MachineLearning, 36 points) — a quiet infrastructural positive buried under review-crisis threads.
- **A cheap "should I trust my local model" war**: three separate high-scoring Reddit threads (Qwen exfiltration allegations + Cohere debunking + Kimi 3.1 cyber-data removal) mean users are now auditing their own local models for outbound network calls.

---

### Data Caveats

1. **Reddit**: official JSON API (www / old / api) returned **HTTP 403**; `r.jina.ai` and `reddit.owo.si` failed (SSL / 422 / rate limit). Reddit was reachable through **old-style RSS (HTTP 200)** and the **safereddit.com Redlib mirror (HTTP 200)**; **all Reddit point/comment counts above come from the Redlib mirror, not from Reddit's API**, and the top-of-week ordering may differ slightly from reddit.com's own "top" ranking. RSS gives titles/dates only (no scores).
2. **FMRT is no longer frozen** — its `generatedAt` stamp advanced for the first time in four days (2026-10-22 → 2026-10-28T12:54:13.492Z) and the motion count jumped 337 → 510, so its Oct 28 ordering is **not comparable** to the Oct 24 numbers quoted in the baseline. It also gained a new "experiment" tier and a "retired" tier (GPT-6.1 Sol is retired there).
3. **BenchLM values drifted slightly under an advanced stamp**: Opus 5.5 86.6 → 86.66, GPT-6.1 Sol 84.18 → 84.38, GPT-6 Astra 84.02 → 84.43. Because the ordering is explicitly "point-estimate order; conditional ranges do not establish rank confidence", the **#2/#3 swap between GPT-6 Astra and GPT-6.1 Sol (0.05 apart) should not be read as a real lead change**.
4. **BenchLeader's composite was re-based** (AA v5 propagating into its inputs), producing uniform-looking drops of 2–8 points; index values before/after 2026-10-28 are **not comparable**, and the ranking moves (Gemini 4 Argon #2→#6, Muse Wonder Full #3→#20, Kimi K3.1 Pro #29→#41) reflect that re-basing as much as any capability change. The digest's own model-rank list (Fable 5.1 #22→#10, Fable 5 #20→#9) also does not match the row-level ranking I extracted (Fable 5.1 best config = #4, Fable 5 = #5) — two different rank notions coexist on the site.
5. **BenchLeader metadata inconsistency**: header says 333 models ranked / 244 benchmarks / 43 publishers, while an FAQ string on the same page still says "325 ranked models"; the releases page also says "4 AI models released this week" while the digest badge says "8 new models in the last seven days".
6. **BenchLM confirmed-release list vs HF reality**: BenchLM lists LFM3 as Oct 27 while its own release-watch table lists "LFM3 Liquid AI listed 25 Oct" and the HF repo `LiquidAI/LFM3-1.7B` was created **Oct 23** — announcement, listing and repo-creation dates disagree.
7. **Artificial Analysis carries no explicit "last updated" stamp** on the models page; the numbers are consistent with the v5 launch article (Oct 27) plus the Gemini 4 Carbon addition (Oct 28). Gemini 4 Carbon's AA score of 59 was claimed by Google before AA's page reflected it ("at time of writing, Carbon is claimed to be #1 on AA, but AA has not updated yet" — Fergusonb, HN) — and AA has now caught up.
8. **AA's index is now majority-private**, which makes it non-reproducible by third parties by design; AA's own older article text and the new v5 article are not directly comparable, and the AA "open weights gap" figure of 12 points mixes released and unreleased weights (Kimi K3.1 Pro at 46 is unreleased).
9. **S-1 financial numbers are unaudited interim figures for H1 2026** with blanks for the IPO price range and share counts; the "$81B net loss" framing circulating on HN is a non-cash fair-value item, not operating loss ($693M operating loss, $16.3B revenue).
10. **Vendor blog coverage is uneven**: x.ai/news returned 403 (blocked), z.ai/blog 404, openai.com/news 403 to plain curl (readable via web_fetch), Meta's blog stopped in July. Absence of a vendor announcement in this report is therefore not always absence of a release.
11. **Reddit/HN point counts are live and drift** — counts here were read ~18:20–18:40 UTC on Oct 28 and will differ if re-read later.
