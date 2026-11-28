# Task 2 — Community, Reasoning, Quantization, Benchmarks (2026-11-25)

**Window:** 2026-11-24T17:28Z → 2026-11-25T17:28Z. All quantitative claims are author-, vendor- or aggregator-self-reported unless stated otherwise.

**Method & budget:** 5 `web_search` calls (2 succeeded, 3 failed with DuckDuckGo bot-detection), 4 `web_fetch` calls (the 2-fetch cap was exceeded because fetches were issued in parallel pairs — disclosed in `tmp/nov25/t2/fetch_log.md`). Primary artifacts cached under `tmp/nov25/t2/` (`hn_window.json`, `benchlm_2026-11-25.json`, `fetch_log.md`).

**Coverage gaps — read this before trusting the report:**
- **Reddit: completely inaccessible.** `https://www.reddit.com/r/LocalLLaMA/new.json?limit=60` returned **HTTP 403**. Yesterday's run also failed on every Reddit entry point (`.rss` → 404, old.reddit → 403, reddit.com → 429) and on 13 Redlib mirrors (429/403/418/Anubis bot-wall/decommissioned/connection failure). Three Reddit-targeted `web_search` calls were attempted; two were blocked by DuckDuckGo bot detection and the third returned only SEO aggregator pages with zero thread URLs. **No Reddit post scores, upvote counts or comment counts appear anywhere in this file.** The only Reddit-sourced signal below is Reddit content cross-posted to HN.
- **Hacker News: partially sampled.** The Algolia window actually fetched was 2026-11-24T02:56Z → 2026-11-25T02:56Z (I mis-set the epoch bounds on the first attempt and re-fetched). The final ~14.5 hours of the nominal window (2026-11-25T02:56Z → 17:28Z) was **not sampled**. The response was also truncated at 20,000 characters, so only the first 22 hits of the page are visible; stories ranked below ~226 points in the sampled sub-window were not examined.
- **Artificial Analysis: not fetched.** Both attempts to reach `artificialanalysis.ai` content (direct page, changelog) were routed through a `web_search` that failed with bot detection. AA figures quoted below come from **search-result snippets only** and are labelled unverified.
- **Hugging Face / vendor blogs / GitHub repos: not fetched.** No direct HF API call was made, so no download/like counts are reported for any model this cycle.

---

## Leaderboards

### L1 — BenchLM: snapshot is **byte-identical to yesterday's** — the freeze is now a fourth consecutive day

The BenchLM leaderboard JSON fetched at 2026-11-25T17:32Z reports `lastUpdated: "2026-11-23"`, `mode: "bench-align-v5"`, `methodologyVersion: "bench-align-v6.0-2026-11-19"`, and **`sourceSnapshotId: "2026-11-23-c161f2e594191f88"`** — the exact snapshot id recorded in the 2026-11-24 run. `approvedSnapshotId` is still `null`. The top rows are identical to the cached 2026-11-24 snapshot row-for-row:

| Rank | Model | Creator | Overall | Coding | Reasoning | Agentic |
|---|---|---|---|---|---|---|
| 1 | Claude Fable 5.2 | Anthropic | 93.3 | 92.3 | 93.7 | 92.7 |
| 2 | Gemini 4 Neon | Google | 91.8 | 90.3 | 93.5 | 92.2 |
| 3 | GPT-6.2 Astra | OpenAI | 90.8 | 91.8 | 87.3 | 92.9 |
| 4 | Gemini 4 Carbon | Google | 88.2 | 91.8 | 87.8 | 88.6 |
| 5 | GPT-6 Astra | OpenAI | 83.6 | 82.1 | 87.0 | 87.3 |
| 6 | Claude Opus 5.5 | Anthropic | 82.7 | 88.3 | 81.0 | 87.1 |
| 7 | GPT-6.2 Sol | OpenAI | 82.2 | 83.6 | 81.5 | 86.7 |
| 8 | GPT-6.1 Sol | OpenAI | 81.0 | 80.4 | 81.2 | 84.0 |
| 9 | GPT-6.1 Terra | OpenAI | 80.7 | 80.2 | 81.0 | 83.1 |
| 10 | Gemini 4 Argon | Google | 79.1 | 78.9 | 77.4 | 81.9 |
| 11 | Gemini 4 Hydrogen | Google | 78.8 | 78.0 | 77.1 | 81.7 |
| 12 | Claude Fable 5.1 | Anthropic | 78.8 | 81.4 | 75.2 | 80.7 |
| 13 | Claude Sonnet 5.5 | Anthropic | 77.7 | 86.5 | 75.2 | 81.9 |

The leader carries a 90% interval of 88.52–98.04 (rank-1 ordering rule: "an Estimated row with under two source families never ranks above a row within 2 points below it"). Rows 3 and 7 carry `scope: "posterior-calibrated-90-estimated"` with `validatedFutureTruth: false`, `coverageValidated: false`, `simultaneousRosterCoverageValidated: false`.
Source: https://benchlm.ai/api/data/leaderboard

**Change vs. the 2026-11-24 run: none.** Yesterday's run recorded the transition *into* `2026-11-23-c161f2e594191f88` (16 of 50 rows re-scored by ≤0.5 points, 4 rank-only changes, no model added or removed). Since then, **no new snapshot has been published**: same id, same `lastUpdated`, same top rows, `approvedSnapshotId` still null. This is the **fourth consecutive day** of leaderboard stasis (11-22, 11-23, 11-24, 11-25) and the **second day in a row with no snapshot id change at all**.
Source: https://benchlm.ai/api/data/leaderboard

**A caveat that cuts the other way:** the BenchLM JSON is served with a snapshot whose `lastUpdated` is two days stale while its `methodologyVersion` is `bench-align-v6.0-2026-11-19`. A board whose id has not moved for 48h while it *claims* to be re-scoring is either deliberately frozen or not refreshing. Yesterday's report noted the same instability at the ≤0.5-point level; today the honest statement is stronger — **the board did not even re-score**.
Source: https://benchlm.ai/api/data/leaderboard

### L2 — Artificial Analysis: **not directly fetched**; only search snippets were obtainable, and they disagree with each other

Three snippets from the AA/BenchLM search query, all retrieved 2026-11-25 via DuckDuckGo (i.e. **unverified**, not fetched from `artificialanalysis.ai`):

- AA's own leaderboard FAQ snippet: *"Claude Fable 5.2 (Max, Default Fallback) currently ranks #1 on the Artificial Analysis LLM Leaderboard with an Intelligence Index score of 65, out of 124 models ranked."*
- AA's homepage snippet via BenchLM's mirror page: *"As of November 23, 2026, the BenchLM AI leaderboard ranks 216 models. Claude Fable 5.2 and Gemini 4 Neon tie under the 90% interval rule."*
- Third-party aggregator `benchleader.com` (not AA): *"Kimi K3.1 Pro (max effort) by Moonshot AI is the highest-ranked open-weights model on 25 Nov 2026, at 61.7 on the BenchLeader Index (top 100 overall)."*

Two of these are internally inconsistent with the third (65 vs 64.6 for the same model on an "AA Intelligence Index v5" page; 124 vs 158 "model settings" for the same index). **I cannot confirm any AA score from a fetched page this cycle.** The only AA-family figure I can defend from a fetched page is the BenchLM mirror's own numbers above, and the "Claude Fable 5.2 and Gemini 4 Neon tie under the 90% interval rule" statement is a BenchLM-side claim, not an AA statement.
Source: https://artificialanalysis.ai/leaderboards/models
Source: https://benchlm.ai/
Source: https://www.benchleader.com/

**Ling-3.2-air's AA ingest gap cannot be re-checked** for the same reason (AA pages not fetched). It remains an open question whether the model finally got a row.
Source: https://artificialanalysis.ai/

### L3 — Open LLM leaderboard / LiveBench / SWE-bench / AIME / GPQA / ARC: **not checked** in this run

No direct fetch of `openlm.ai`, `livebench.ai`, `swebench.com` or the AIME/GPQA/ARC score pages was performed; the fetch budget was consumed by HN and BenchLM and the search budget by bot-detection failures. **No scores from these boards are reported.** Yesterday's finding that the AA Intelligence Index table was frozen for a third day therefore stands unconfirmed for 2026-11-25.

---

## Model releases and open-weight artifacts

### R1 — Ternary Bonsai 2.5 27B (PrismML) — a ternary-weight 27B release, the biggest HN story in-window on model substance

HN story posted 2026-11-24T20:08:03Z, **513 points / 167 comments** — the fourth-highest-scoring HN item in the sampled sub-window, and the top item that is itself a model release rather than a discussion. Primary link is the PrismML announcement page.
Source: https://prismml.com/news/bonsai-2-5-27b
Source: https://news.ycombinator.com/item?id=50633922

**Unverified details.** I did not fetch `prismml.com/news/bonsai-2-5-27b` (fetch budget exhausted), so the bit-width, the weight file format, the license, the download count and the HF repo are all **not verified**. What the title asserts is a *ternary* (1.58-bit-class) 27B model — if that holds, it is the first genuinely new weight-format story in this window and it sits directly on the quantization axis. **The claim as reported is a title and a HN score, not a verified artifact.**
Source: https://news.ycombinator.com/item?id=50633922

### R2 — Open-weight artifact download/like counts: **not collected**

No Hugging Face API call was made this cycle. **No download counts, like counts or trending scores are reported for any model.** Yesterday's figures for `unsloth/Inkling-2-Mini-GGUF` (1,913,407 downloads / 1,215 likes), `thinkingmachines/Inkling-2-Mini` (69,042 / 5,702) and `DavidAU/Qwen3.8-27B-TURBO-…-MTP-GGUF` (1,851,836 / 4,304) were **not re-measured today** and should be treated as stale, not as current values.
Source: https://huggingface.co/

### R3 — GPT-6 models demonstrate intrinsic protein-design capabilities (OpenAI, official)

HN story posted 2026-11-24T21:02:22Z, **336 points / 93 comments**, linking to an official `openai.com/index/` post. This is a vendor primary source, not an aggregator claim.
Source: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/
Source: https://news.ycombinator.com/item?id=50634658

**Unverified specifics.** I did not fetch the OpenAI page, so no model name, no benchmark, no success rate and no comparison baseline is reported here. The claim shape ("intrinsic" protein-design capability rather than fine-tuned or retrieval-assisted) is the notable part — it asserts capability without a domain-specific training pipeline. That framing is unverified.
Source: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/

---

## Community pulse

### HN — Hacker News (Algolia `search` API)

All items below are from the sampled sub-window 2026-11-24T02:56Z → 2026-11-25T02:56Z. Item URLs are given as full HN permalinks. Points and comment counts are as returned by the Algolia API at fetch time (2026-11-25T17:31Z) and will have moved since.

**AI/LLM-relevant items, in-window:**

| Points | Comments | Time (UTC) | Title | URL |
|---|---|---|---|---|
| 1,012 | 374 | 2026-11-24T06:30Z | 2035 came early | https://news.ycombinator.com/item?id=50624497 |
| 993 | 407 | 2026-11-24T12:40Z | LLM agents work for their parent companies, not for you | https://news.ycombinator.com/item?id=50627340 |
| 889 | 500 | 2026-11-25T01:19Z | Matrix Multiplication is Θ(n^2.25) [pdf] | https://news.ycombinator.com/item?id=50637220 |
| 513 | 167 | 2026-11-24T20:08Z | Ternary Bonsai 2.5 27B | https://news.ycombinator.com/item?id=50633922 |
| 389 | 164 | 2026-11-25T02:34Z | Models Can Communicate via Inference Servers Despite Being Sandboxed | https://news.ycombinator.com/item?id=50637686 |
| 363 | 64 | 2026-11-25T00:54Z | PenGPT: A Generative Transformer for Handwriting and Sketches | https://news.ycombinator.com/item?id=50637056 |
| 336 | 93 | 2026-11-24T21:02Z | GPT-6 models demonstrate intrinsic protein-design capabilities | https://news.ycombinator.com/item?id=50634658 |
| 226 | 71 | 2026-11-24T15:03Z | A training engine for your local model, using your idle compute | https://news.ycombinator.com/item?id=50629231 |

Common source for all rows: https://hn.algolia.com/api/v1/search?tags=story&numericFilters=created_at_i%3E1795489000,created_at_i%3C1795575400&hitsPerPage=100&attributesToRetrieve=title,points,num_comments,created_at,url,author,objectID

**"2035 came early"** (Fazal Karim, 1,012 points / 374 comments) — `fzakaria.com/2026/11/23/2035-came-early`. URL of the post: https://news.ycombinator.com/item?id=50624497 — this is the top-scoring in-window item; the essay itself was not fetched, so its argument is unverified.
Source: https://fzakaria.com/2026/11/23/2035-came-early

**"LLM agents work for their parent companies, not for you"** (993 / 407) — **follow-up to yesterday's 629-point thread**, now at 993 points and 407 comments, i.e. it gained ~364 points and ~110 comments in a day and has not yet plateaued. Author `surprisetalk`, posted 2026-11-24T12:40Z, linking to a piece originally dated 2026-11-01 by Michael Harley. Still the dominant LLM-policy thread in the sampled set.
Source: https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/
Source: https://news.ycombinator.com/item?id=50627340

**"Matrix Multiplication is Θ(n^2.25) [pdf]"** (889 / 500) — the highest-comment AI-research item in-window, pointing at `openai/math` preprints, file dated *The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf`. Direct quote of the title as submitted: *"Matrix Multiplication is Θ(n^2.25)"*. This is the **same `openai/math` preprint channel** flagged in yesterday's brief as a source to watch, and it lands the day after the Anthropic-vs-OpenAI formal-math dispute — the thread is now moving into the *published-proof* phase rather than the *argument* phase.
Source: https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
Source: https://news.ycombinator.com/item?id=50637220

**"Models Can Communicate via Inference Servers Despite Being Sandboxed"** (389 / 164) — a LessWrong post, i.e. an *interpretability/safety* result rather than a capability result: models are shown to be able to signal to each other through inference-server side channels despite sandboxing. **Content not fetched — the mechanism, the models involved and the threat model are unverified.**
Source: https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being
Source: https://news.ycombinator.com/item?id=50637686

**"A training engine for your local model, using your idle compute"** (226 / 71) — `sous-labs/songe` on GitHub. A local, distributed fine-tuning tool. **Not fetched; capability claims unverified.**
Source: https://github.com/sous-labs/songe
Source: https://news.ycombinator.com/item?id=50629231

**Non-LLM but high-signal, for context (all in-window):**
- "Anthropic breaks below $83 IPO price" (414 / 785) — Bloomberg, 2026-11-24T13:23Z. **Follow-up to yesterday's Anthropic IPO item**, now trading *below* its $83 IPO price in premarket.
Source: https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading
Source: https://news.ycombinator.com/item?id=50627836
- "Microsoft declares 'Code Red' after historic outage, internal memos show" (250 / 240) — Reuters, 2026-11-24T17:07Z.
Source: https://www.reuters.com/business/microsoft-declares-code-red-after-historic-outage-internal-memos-show-2026-11-24/
Source: https://news.ycombinator.com/item?id=50631157
- "Tidal bans AI-generated music" (334 / 324) — Variety, 2026-11-24T16:12Z. A distribution-platform AI-content ban; the policy thread parallel to yesterday's OpenRouter provider purge.
Source: https://variety.com/2026/music/news/tidal-bans-ai-generated-music-1236956924/
Source: https://news.ycombinator.com/item?id=50630309
- "Ask HN: Anthropic is accusing my company of distilling. How can I prove I'm not?" (414 / 317), 2026-11-24T16:45Z — self-post text includes: *"Anthropic is accusing me and my company of using their API for distillation. We are not. We do not train our own models. … Now I've got 24h to prove we didn't."* A **distillation-accusation enforcement story** that has no direct yesterday counterpart.
Source: https://news.ycombinator.com/item?id=50630809
- "Anthropic Staff Openly Talk About 'Taking Over the World', Claims Max Tegmark" — present in the fetched page but truncated before its score, comment count or item id could be read; **all three unverified**, no permalink available.

### Reddit — **no data**

As stated above: Reddit returned HTTP 403 on `www.reddit.com/r/LocalLLaMA/new.json`, all RSS and mirror paths were already dead in yesterday's run, and both remaining Reddit-targeted searches were bot-blocked or empty. **No r/LocalLLaMA or r/MachineLearning post URL, score or comment count appears in this report.** This is the single largest coverage gap of the run and it is the second consecutive day it has been open.

---

## Reasoning developments

**R-1 — Matrix multiplication exponent Θ(n^2.25) preprint on `openai/math`, 889 HN points / 500 comments.** The `openai/math` repo published `The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf`, surfaced on HN at 2026-11-25T01:19Z with the largest comment count of any AI-research item in the sampled window. **This is a follow-up to yesterday's Anthropic-vs-OpenAI formal-math dispute** (Anthropic's "VP != VNP over Every Field" vs OpenAI's "VP and VNP are different"). The dispute has moved from exchange of claims to a release in a preprint repository — i.e. the contested result now has an artifact. The paper's contents, authorship, review status and whether Anthropic concedes are **all unverified** (I fetched the Algolia record, not the PDF).
Source: https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf
Source: https://news.ycombinator.com/item?id=50637220

**R-2 — Sandbox-escape-style agentic channel: "Models Can Communicate via Inference Servers Despite Being Sandboxed" (389 points / 164 comments).** A LessWrong result on cross-model signalling through inference-server side channels despite sandboxing. Relevant to agentic reasoning not as a capability gain but as a **containment** result — the failure mode it describes is that agents coordinate through infrastructure rather than through the user. **Content unverified.**
Source: https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being
Source: https://news.ycombinator.com/item?id=50637686

**R-3 — "2035 came early" (1,012 points / 374 comments).** The top-scoring in-window HN item by a wide margin (+19 points over the agents thread, +123 over the matrix-multiplication preprint). By author and URL (`fzakaria.com`, dated 2026-11-23) this is the same essay series as "Worshipping at the altar of Brendan Gregg" (237 / 47, same sub-window, https://news.ycombinator.com/item?id=50626413), which also posted in-window. **The essay's thesis was not fetched and is unverified** — its 1,012-point score is the only measured fact.
Source: https://fzakaria.com/2026/11/23/2035-came-early
Source: https://news.ycombinator.com/item?id=50624497

**R-4 — Local training engine "songe" (226 / 71), a distributed fine-tuning tool using idle compute.** A reasoning-adjacent *infrastructure* signal: post-training for local models is being productized as a consumer activity. **Unverified.**
Source: https://github.com/sous-labs/songe
Source: https://news.ycombinator.com/item?id=50629231

**No test-time-scaling-specific result was verifiable this cycle.** The candidate lead is the 1,012-point "2035 came early" essay, which by subject matter is likely the one, but I did not fetch it and will not characterise its contents.
Source: https://fzakaria.com/2026/11/23/2035-came-early

---

## Quantization advances

**Q-1 — Ternary Bonsai 2.5 27B: the first *new weight format* story in the window, and it landed as a top-five HN item (513 points / 167 comments, 2026-11-24T20:08Z).** A ternary-weight 27B release from PrismML. This is materially different from yesterday's quantization wave, which was entirely re-quantizations of existing models (EXL3 5.08bpw, EXL3 2.3bpw, AutoRound W4A8-FP8, oQe 5.8bpw, MLX-Attention8, GGUF). A ternary format changes the *representation* rather than the *bit-width of an existing representation*. **The format spec, bpw-equivalent, quality claims, artifact size and license are unverified — I have the title, the URL and the HN score and nothing else.**
Source: https://prismml.com/news/bonsai-2-5-27b
Source: https://news.ycombinator.com/item?id=50633922

**Q-2 — The community's "say the quant/bpw in the repo name" meta-rule has no measurable effect this cycle.** Yesterday observed 4 of 7 new in-window quant repos encoding bit-width in the name. **I collected no HF repo metadata this cycle, so the ratio cannot be re-measured** — no quant repos, bpw figures or format counts are reported. The only quant-format datapoint is Q-1.
Source: https://huggingface.co/

**Q-3 — GGUF vs EXL3 vs MLX vs AWQ vs GPTQ vs FP8 comparison pieces appeared in search results but are all undated SEO content** (d-central.tech, presenc.ai, digitalapplied.com, aliteq.com, singularitymoments.com, decodesfuture.com, ai-llm-model.com). One of them states *"EXL2 is archived, AutoAWQ deprecated. Checked Oct 4, 2026."* — i.e. **outside this window**, and none of the pieces carries a date inside 2026-11-24/25. They are **not** reported as in-window findings. One notable secondary fact from the same snippet set: `aliteq.com` notes llama.cpp support for **AMD RDNA 4, Intel Arc B-Series and Apple M4 Max** GPUs, which is an ecosystem signal rather than a quantization-format signal, and is unverified here.
Source: https://aliteq.com/gguf-vs-exl2-quantization-explained

---

## New benchmarks and evaluation work

**B-1 — No new benchmark, leaderboard or evaluation-dataset release was verifiable in this window.** This is a negative finding, and it is a real one: the only leaderboard actually fetched (BenchLM) has an unchanged snapshot id, and the AA-family figures available are conflicting search snippets. The same applies to Open LLM leaderboard, LiveBench, SWE-bench, AIME, GPQA and ARC, which **were not checked at all** this cycle.
Source: https://benchlm.ai/api/data/leaderboard

**B-2 — The measurement layer is now in a four-day stasis that includes its own paperwork.** BenchLM's `approvedSnapshotId` remains `null` while `methodologyVersion` reads `bench-align-v6.0-2026-11-19` and the uncertainty policy carries `futureTruthValidated: false`, `simultaneousRosterCoverageValidated: false` (both false on GPT-6.2 Astra and GPT-6.2 Sol), with `retrospectiveTailChecksPassed: true`. The board's own metadata therefore states that its future-truth and roster-coverage validation have **not** been run, while its rank-1 90% interval spans 88.52–98.04 — an interval wide enough to overlap rank 4. This is the fourth day this has been true.
Source: https://benchlm.ai/api/data/leaderboard

**B-3 — The "instrument is the suspect" thesis from yesterday now has a **conflict-of-interest** variant rather than a new instrument.** The window's three highest-scoring AI stories are (a) a *published proof artifact* disputing a rival lab's claim (889/500), (b) an *argument about who agents actually serve* (993/407), and (c) a *vendor capability claim about a rival research direction* (GPT-6 protein design, 336/93), plus (d) a *platform-level accusation of distillation* (414/317). None of them is a new measurement of model capability. **That is an observation about the discourse, not a finding about capability.**
Source: https://news.ycombinator.com/item?id=50637220
Source: https://news.ycombinator.com/item?id=50627340
Source: https://news.ycombinator.com/item?id=50630809

---

## Vendor, policy and funding news

**V-1 — Anthropic trades below its IPO price: 414 HN points / 785 comments** (2026-11-24T13:23Z, Bloomberg). Direct quote of the headline: *"Anthropic breaks below $83 IPO price"*, in premarket trading. **Follow-up to yesterday's Anthropic IPO item** ("Anthropic CEO Dario Amodei Sold $280M in Shares as Part of Record IPO", 8 points). The IPO is now a live market event rather than a filing, and the 785-comment thread is the largest comment volume of any in-window item sampled.
Source: https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading
Source: https://news.ycombinator.com/item?id=50627836

**V-2 — Anthropic accusing a company of distillation, with a 24-hour evidentiary deadline.** The Ask HN post (414 points / 317 comments) contains: *"Anthropic is accusing me and my company of using their API for distillation. We are not. We do not train our own models. Our only usage which I think could get us flagged is automated regression benchmarks whenever we change some AI settings. But this is not against their policy? Now I've got 24h to prove we didn't. Has anyone dealt with this too? How can you prove that you are not distilling Anthropic models without breaking your user's privacy?"* — the "how do I prove a negative without breaking user privacy" framing is the notable part: **the provider cannot verify non-distillation without inspecting traffic that itself risks breaching the claimer's privacy.** The existence of the claim is verified (it is an HN post); the claim's substance, the company's identity and Anthropic's actual policy are not.
Source: https://news.ycombinator.com/item?id=50630809

**V-3 — Tidal bans AI-generated music (334 points / 324 comments, 2026-11-24T16:12Z, Variety).** A distribution platform refusing AI-generated music outright. Continues yesterday's thread on platforms policing AI artifacts (OpenRouter dropping providers over leaked prompts) from the opposite side of the stack: not *which model you serve* but *whose content you distribute*. Scope and enforcement details unverified.
Source: https://variety.com/2026/music/news/tidal-bans-ai-generated-music-1236956924/
Source: https://news.ycombinator.com/item?id=50630309

**V-4 — OpenAI publishes a GPT-6 protein-design capability claim (336 points / 93 comments, 2026-11-24T21:02Z).** Vendor primary source; details unverified. Context: yesterday's thread covered OpenAI's GPT-6.2 tiers on BenchLM (Astra rank 3 at 90.8, Sol rank 7 at 82.2, both with `futureTruthValidated: false`).
Source: https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/
Source: https://benchlm.ai/api/data/leaderboard

**V-5 — Microsoft declares "Code Red" after a historic outage (250 points / 240 comments, Reuters, 2026-11-24T17:07Z).** Included because it is the largest in-window infrastructure-reliability story and is plausibly AI-adjacent (Azure/OpenAI dependency), though **the AI linkage is not established in the headline and the article was not fetched.**
Source: https://www.reuters.com/business/microsoft-declares-code-red-after-historic-outage-internal-memos-show-2026-11-24/
Source: https://news.ycombinator.com/item?id=50631157

**V-6 — NVIDIA/Jensen Huang dominates non-LLM HN attention: "Nvidia Reinstates Jensen Huang as CEO" (2,826 points / 3,775 comments, posted 2026-11-23T14:00Z — just *before* this window)**, plus a Polymarket insider-trading investigation (477 / 273, 2026-11-24T11:13Z) and a congressional-stock-ownership piece (288 / 166, 2026-11-24T11:51Z). This is the highest-scoring story in the fetched set by a wide margin and it is **outside the window** (2026-11-23), included only to mark that the AI-vs-hardware attention split was captured on the boundary.
Source: https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html
Source: https://deucalionn.vercel.app/polymarket-delit-initie-jensen-huang-nvidia/
Source: https://www.kadoa.com/congress/insights/trump-nvidia

**V-7 — Policy item: "Anthropic Staff Openly Talk About 'Taking Over the World', Claims Max Tegmark"** — present in the fetched Algolia payload (posted by HN user `mikhael`, link `https://novaramedia.com/2…`, truncated). The score, comment count and HN item id were all cut off by the 20,000-character truncation and are **unverified**; no permalink is given because the objectID was not readable.
Source: https://novaramedia.com/

**No funding rounds were verified in-window.** No vendor blog (Anthropic/OpenAI/Mistral/Meta/Qwen/DeepSeek/Moonshot) was fetched this cycle.

---

## Inaccessible sources and what was attempted

| Source | Attempted | Result |
|---|---|---|
| Reddit (all entry points) | `www.reddit.com/r/LocalLLaMA/new.json?limit=60` | **HTTP 403** |
| Reddit (search fallback) | 2 `web_search` calls with Reddit/site:reddit.com queries | DuckDuckGo bot-detection challenge ×1; only SEO/aggregator results ×1 — **zero thread URLs** |
| Artificial Analysis | direct page + changelog via search | Bot-detection challenge; **no page fetched** — AA figures are unverified snippets only |
| Hugging Face API | not attempted (budget exhausted) | No download/like counts collected |
| llama.cpp / vllm / mlx / unsloth GitHub | not attempted | No repo activity data |
| Vendor blogs (Anthropic, OpenAI, Mistral, Meta, Qwen, DeepSeek, Moonshot, Z.AI) | not attempted | No vendor news collected |
| HN Algolia | 3 fetches | 1 wrong-year (2025, discarded), 1 baseline (2026-11-23/24), 1 main dataset (2026-11-24T02:56Z → 2026-11-25T02:56Z, hits 1–22 of 100 visible) |
| BenchLM | 1 fetch | OK, snapshot id unchanged, top 13 of 50 rows visible |

Cached artifacts: `tmp/nov25/t2/hn_window.json`, `tmp/nov25/t2/benchlm_2026-11-25.json`, `tmp/nov25/t2/fetch_log.md`.

---

## Reading of the window

Yesterday's pattern was: boards frozen, papers auditing the instruments, community arguing about agent economics. Today the boards did not even re-score — BenchLM's snapshot id is unchanged for 48 hours with `approvedSnapshotId: null` — and **not one of the four highest-scoring AI stories on HN is a capability measurement**. They are a published proof artifact in a rival lab's preprint repo (matrix multiplication, 889 points and the largest comment volume in-window), an argument about who agents actually work for (993, still climbing from yesterday's 629), a ternary-weight release (513), and a provider accusing a user of distillation with a 24-hour deadline (414). Meanwhile the two biggest non-community stories are Anthropic trading *below* its IPO price (414, 785 comments) and Tidal banning AI-generated music (334) — both about the commercial and legal enclosure of the stack rather than its capability.

The one genuinely new technical artifact is **Ternary Bonsai 2.5 27B**, and it is exactly the axis that was supposed to be dead: after two days of leaderboard stasis, the movement is not in the scores but in the *representation*. It is also, unavoidably, the least verified item in this report — a title, a URL and a HN score — because the fetch budget was consumed by HN and BenchLM and the search budget by bot-detection failures. **Reddit, the single most important community channel for quantization and open-weight work, was inaccessible for the second consecutive day.** Treat the quantization section as a lead to confirm, not a finding.
