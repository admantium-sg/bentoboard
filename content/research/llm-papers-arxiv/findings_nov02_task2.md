# Findings — Task 2 — 2 Nov 2026

**Scope:** Hacker News + Reddit discussions, leaderboard/benchmark deltas, Artificial Analysis, Hugging Face trending, pricing and open-weight developments for the 2 Nov 2026 window.
**Evidence base:** cached artifacts in `/home/devcon/.openclaw/shared-workspace/research/llm-papers-arxiv/tmp/nov02/` (HN Algolia trees + front-page snapshots, Reddit Atom feeds, BenchLeader/BenchLM/FMRT JSON, AA changelog + LLM leaderboard HTML, HF `sort=trendingScore` JSON, plus `numbat_readme.md`, `toms.html`, `kimi28.html`, `longcat25.html`).
**Baseline:** `findings_nov01_task2.md` (1 Nov 2026).

---

## 1. Hacker News

Twenty-three HN item trees were captured (`50323814` … `50339494`), above the ~9 expected. AI-relevant ranking (points/comments at capture):

| Item | Pts | Com | Title / URL |
|---|---|---|---|
| `50330456` | 240 | 244 | AI delivers 'zero financial payoff' to most companies, Apollo Economist says — `https://techcrunch.com/2026/10/25/ai-delivers-zero-financial-payoff-to-most-companies-apollo-economist-says/` |
| `50337439` | 189 | 191 | Anthropic reports $17B in Q3 revenue, commitments of $895B in revised S-1 — `https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.h...` (URL truncated in cache) |
| `50334038` | 144 | 77 | China's First Frontier AI Export Controls: Mofcom Announcement No. 48 — `https://labs.cloudsecurityalliance.org/research/csa-research` |
| `50334372` | 116 | 126 | BioWare co-founder: game execs "have never made a game" — `https://www.pcgamer.com/gaming-industry/none-of-these-people-have-ever...` |
| `50332086` | 100 | 96 | AI fan wikis riddled with errors muddying video-game history — `https://www.eurogamer.net/ai-fan-wikis-errors-are-complicating-our-ability-to-understand-video-game-history` |
| `50336791` | 98 | 97 | Sam Altman: All the RAM Should Belong to Me — `https://gizmodo.com/sam-altman-all-the-ram-should-belong-to-me-so-i-ca...` (**satire**) |
| `50336138` | 84 | 81 | Last night an AI agent performed brain surgery on a mouse — `https://twitter.com/OcanaSantero/status/2115442964574908902` (**unverified**) |
| `50330253` | 76 | 130 | So I guess everyone uses LLMs to think now — `https://eva.ac/blog/llms/` |
| `50337454` | 61 | 71 | Jobless tech workers left out of SF's AI boom — `https://www.bloomberg.com/news/features/2026-09-17/san-francisco-s-ai-...` |
| `50328293` | 56 | 6 | Muse AI agent is a commercial surveillance network disguised — `https://paulfwalsh.substack.com/p/metas-muse-ai-agent-is-a-commercial-surveillance-network-disguised-as-an-ai-agent` (**allegation**) |
| `50331998` | 46 | 25 | AI Can Write More of the Code. We Still Have to Engineer the Software — `https://picon.dev/en/publications/ai-assisted-engineering/` |
| `50337716` | 42 | 14 | LongCat-2.5: Native Multimodality for Agentic Tasks — `https://longcat.ai/blog/longcat-2.5/` |
| `50339494` | 42 | 21 | Anthropic's internal AI use, at retail prices, now exceeds its employee pay — `https://www.businessinsider.com/anthropic-claude-internal-ai-use-excee...` |
| `50337503` | 33 | 26 | GPT-Rosalind-6 System Card Addendum — `https://deploymentsafety.openai.com/gpt-rosalind-6` |
| `50327240` | 35 | — | Alleged Mythos Class Anthropic Checkpoint Leak |
| `50323814` | 4 | — | DeepSeek launches advanced coding agent to rival Claude Code — `https://www.bloomberg.com/news/articles/2026-11-01/deepseek-drops-enhanced-coding-agent-with-aim-to-rival-anthropic` |
| `50324343` | 2 | — | Tell HN: Claude Code now defaults to Haiku 5.5 |
| `50336840` | 11 | — | The U.S. Census Bureau and "Super Intelligence" |
| `50335659` | 127 | 49 | Never Complain, Never Explain (Wikipedia essay; engaged with the AI-workplace thread) |

**Key threads:**
- **Anthropic S-1** (`50337439`) — top business story: **$17B Q3 revenue**, **$895B commitments**. Company disclosure, not independently audited.
- **Anthropic internal AI use exceeds its employee payroll** (`50339494`) — pairs with the S-1 story; inference cost/margin dominated Anthropic chatter.
- **Mythos-class leak** (`50327240`, follow-on `50334524`): repo `burner22/numbat`, README cached as `numbat_readme.md`. **Uploader claims only**: ~14T params, 114 layers, hybrid GDN/MLA, MoE 1,224 experts (top-48 + 1 shared), NVFP4, 772 shards ≈ 7.72 TB, `total_size` `7720300817720`, step 1,830,000 of ~1.96M, `model-00001-of-00772.safetensors` with 142 tensors, and a quoted Claude Code leak line *"Remove this section when we launch numbat."* (Mar 2026). Cached prior-day community assessment: **almost certainly fake** — 8-TB size implausible, apparent random-noise weights with a plausible embedding table, "torrent-swap" troll pattern; safetensors-only path removes code-exec risk (X-LSB-Attacks arXiv 2409.19310, CVE-2026-24747 cited as context). The repo nonetheless hit **#15 on HF trending** today (283 likes / 7,108 downloads).
- **Anthropic enforcement** (see §2), **China's first frontier AI export controls** (`50334038`) — the day's most consequential *policy* item, **Apollo "zero financial payoff"** (`50330456`) — top AI story by points and comments, **AI fan wikis** (`50332086`) — long-running thread defending Fandom-style community wikis.

---

## 2. Reddit (r/LocalLLaMA)

Threads captured: `1xm33gr` (`https://www.reddit.com/r/LocalLLaMA/comments/1xm33gr/yet_another_reason_to_self_host_anthr` — Anthropic/self-hosting + Muse AI surveillance claim), `1xm2xbq` (`.../1xm2xbq/fine_tuned_open_model_ftw/`), `1xm2gd5` (`.../1xm2gd5/there_is_a_kimi_k28/`), plus `1xlys6k`, `1xlwpqv`, `1xm1lgm`, `1xlzaq0`, `1xm28e6`, `1xm0lmk`, `1xm0uy0`, `1xlusil`, `1xlerw1`, `1xldent`, `1xlg`, `1xm23ep`, `1xlzj`.

Users seen (19): `/u/Big_Wave9732`, `/u/Choice_Celery9481`, `/u/cocktail_peanut`, `/u/No_Afternoon_4260`, `/u/ResearchCrafty180`, `/u/jacek2023`, `/u/reasonmonkey`, `/u/zxtech`, `/u/Impossible_Key_11`, `/u/danielhanchen`, `/u/gladkos`, `/u/quivering_palm`, `/u/beneath_steel_sky`, `/u/docdavkitty`, `/u/just_another_leddito`, `/u/fgk55555`, `/u/Common-Membership503`, `/u/Forsaken_Economy7462`, `/u/FinBenton`.

Named claims in threads (**user assertions, unverified**): `Hydrogen-1.0`; `GLM-5.3`; `FrontierScience-Research`; `38.3%`; `GPT-6-Astra`; `33.3%`; `Kimi K2.8`; `DeepSeek-V4.1`; `DeepSeek-V4.1-Flash-1017`; `12 Gb VRAM`; and a post titled *"Qwen Models Will Stick to Open Source to the End!"*.

**Anthropic reverse-engineering limits** (`toms.html`): headline *"Anthropic confirms new Claude Code limits to prevent game cloning — users report Opus 5.5 is also actively blocking reverse engineering tasks"*, by Bruno Ferreira, **published 2 November 2026**. An Anthropic employee confirmed the guardrails directly in a tweet, per Addy Osmani: *"[Anthropic] added two sentences to Claude Code's prompt on Opus 5.5 to steer it away from recreating someone else's specific game because using Claude to infringe IP is against [its] usage policy."* Original-game work is stated to keep working; Anthropic is "iterating on the rules" to "strike the right balance." Third consecutive day of Anthropic-enforcement coverage in this dataset.

**Kimi K2.8** (`kimi28.html`, independent tracker, dated 2026-09-12): Moonshot silently swapped the default coding model behind the `kimi-for-coding` ID to **Kimi K2.8 Preview** on **September 11, 2026**; `K2.7 Code HighSpeed` stays the speed model on Allegretto+, `K3` for long-horizon work, and there is **no K2.8 row on the open platform API or Hugging Face**. So the Reddit K2.8 thread concerns a **September** release, not a new one.

**Malformed identifiers, verbatim from cached HTML/XML (do not normalize):**
- `https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-confirms-new-claude-code-limits-to-prevent-game-cloning-users-report-opus-5-5-is-also-actively-blocking-reverse-engineering-tasks"&gt;https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-confirms-new-claude-code-limits-to-prevent-game-cloning-users-report-opus-5-5-is-also-actively-blocking-reverse-engineering-tasks&lt;/a&gt;&lt;/p`
- `https://www.reddit.com/user/Choice_Celery9481`
- `https://x.com/chenru_duan/status/2117249292469665838"&gt;[link]&lt;/a&gt;&lt;/span`

---

## 3. Leaderboards & benchmarks

### Artificial Analysis — changelog moved for the first time since 30 Oct
`https://artificialanalysis.ai/changelog`:
- **02 Nov 2026** — new results: **Nanbeige4.3-33B**, Intelligence Index **20** (Nanbeige perf results now available).
- **01 Nov 2026** — new results: **Gemini 4 Carbon (Medium)** II **58**; **DeepSeek V4.1 Flash 1017 (High)** II **29** (Google + DeepSeek perf results now available).
- 30 Oct entry unchanged (DeepSeek V4.1 Flash 1017 non-reasoning II 19; provider perf for Nemotron 3.5 Super VL, Qwen3.8 27B Xhigh/non-reasoning, DeepSeek V4 Pro 0813 Max, Step 3.7 Flash).

**AA LLM Leaderboard** (`aa_lb.txt`): *"Gemini 4 Carbon (high) and Claude Opus 5.5 (max with fallback) are the highest intelligence models, followed by Gemini 4 Carbon (medium) and Claude Opus 5.5 (xhigh with fallback)."*

| Model | Ctx | Creator | II | Cost/task |
|---|---|---|---|---|
| Gemini 4 Carbon (high) | 1M | Google | **59** | $7.76 |
| Claude Opus 5.5 (max with fallback) | 1M | Anthropic | **58** | $10.04 |
| Gemini 4 Carbon (medium) | 1M | Google | 58 | $6.59 |
| Claude Opus 5.5 (xhigh with fallback) | 1M | Anthropic | 57 | $6.05 |
| GPT-6 Astra (max) | 1M | OpenAI | 57 | $6.24 |
| GPT-6 Astra (xhigh) | 1M | OpenAI | 55 | $3.66 |
| GPT-6.1 Sol (max) | 1M | OpenAI | 55 | $1.27 |
| Claude Sonnet 5.5 (max with fallback) | 1M | Anthropic | 54 | $10.02 |
Then: GPT-6.1 Sol (xhigh) 52/$0.76 · Claude Opus 5.5 (high w/ fallback) 52/$3.46 · GPT-6 Astra (medium) 51/$2.73 · GPT-6.1 Terra (max) 51/$0.96 · Gemini 4 Argon (high) 50/$7.68 · GPT-6.1 Sol (high) 50/$0.59 · Muse Wonder Full (max) 50/—. (All 1M context.)

Header callouts: fastest = **Celeris-1**, **K2 Horizon 375B A23B**, then Nemotron 3.5 Super VL, Gemini 3.5 Flash-Lite; lowest latency = **North Mini Code**, **Command A+**; lowest cost/task = **K2 Horizon 375B A23B**, **Command A+**, then GPT-6 Luna (low), Mistral Small 4; largest context = **Llama 4 Scout**, **GPT-6 Sol (Daybreak Blue, max)**, then Muse Wonder (max), Ling 3.1 Flash 1019.

**Audit state:** `scicode` still flagged **`underReview`** — *"An independent audit has flagged possible errors in the dataset of this evaluation"* — the only evaluation under audit (`underReview` appears twice in the page: badge data + UI label map). Badge windows: `code2video-aa` removeAfter 2026-11-06, `critpt-v2` removeAfter 2026-11-05, `healthbench` removeAfter 2026-10-30, Intelligence Index v5 badge removeAfter 2026-11-10.

### BenchLeader — refreshed to 2 Nov 2026
`https://www.benchleader.com/`: **329 configurations ranked · 584 data feeds live · 27/27**, **253 LLM benchmarks from 45 benchmark publishers**, **78 feed the index**, run starts **22:03 UTC**.

| # | Model | Index | Move vs 1 Nov |
|---|---|---|---|
| 1 | Claude Opus 5.5 | **69.3** | ▲0.1 (was 69.2) |
| 2 | Gemini 4 Carbon | **69.0** | ▲0.1 (was 68.9) |
| 3 | GPT-6 Astra | 68.2 | — |
| 4 | GPT-6.1 Sol | 67.3 | ▲0.1 (was 67.2) |
| 5 | Claude Fable 5.1 | 67.2 | ▲0.1 (was 67.1) |
| 6 | Claude Fable 5 | 66.6 | — |
| 7 | Gemini 4 Argon | 66.0 | ▲0.1 (was 65.9) |
| 8 | GPT-5.6 Sol | 65.4 | — |
| 9 | Claude Opus 5 | 65.4 | — |
| 10 | Claude Sonnet 5.5 / GPT-6.1 Terra | 65.2 | — |

**Structural change:** corpus grew 583 → **584** data feeds, 252 → **253** benchmarks, 44 → **45** publishers, 78 benchmarks feeding the index; "27/27" feeds healthy. `GPT-6.1 Terra` remains best quality-per-dollar in the top 15 at **$2.00 per 1M tokens blended**.

**Cached-input price moves today:** `Qwen3.6 Plus` `$0.028/M → $0.050/M` (**81% up**); `Qwen3.7 (max)` `$0.33/M → $0.50/M` (**52% up**); `GLM 5.2 (max)` `$0.26/M → $0.30/M` (**15% up**); `GLM-5 (thinking)` `$0.20/M → $0.15/M` (**25% down**). Yesterday's list was *blended*-price based, so these are **not** like-for-like.

### BenchLM — still stale (4th consecutive day)
`https://benchlm.ai/api/data/leaderboard`: `lastUpdated = "2026-10-29"`, `mode = "bench-align-v5"`, `methodologyVersion = "bench-align-v5.8-2026-09-30"`, `sourceSnapshotId = "2026-10-29-598e80f34326e96c"`, `approvedSnapshotId = null`. Top unchanged: **Gemini 4 Carbon 88.38**, **Claude Opus 5.5 86.29**, **GPT-6 Astra 86.07**, GPT-6.1 Sol 85.27, Gemini 4 Argon 82.28, Claude Sonnet 5.5 81.84, Claude Fable 5.1 81.08. Policy flags still `futureTruthValidated: false`, `simultaneousRosterCoverageValidated: false`, `retrospectiveTailChecksPassed: false`. Stale by 4 days — do not present as current.

### FMRT — refreshed but flat
`https://fmrt.ai` (methodology `https://fmrt.ai/#method`): `generatedAt = 2026-11-02T15:54:11.937Z` (yesterday `2026-11-01T01:58:31.981Z`), motion pool **541** (unchanged from 1 Nov; +15 vs 31 Oct's 526).

| Rank | Model | btRating | CI95 | W/L/T | OW |
|---|---|---|---|---|---|
| 1 | Claude Opus 5.5 | 1910.6 | [1835, 2007.2] | 105/35/13 | — |
| 2 | Claude Fable 5.1 | 1893.2 | [1825.9, 1985.9] | 119/30/13 | — |
| 3 | Kimi K3.1 Pro | 1768.6 | [1696.3, 1859.4] | 65/27/6 | — |
Ranks 4–17 (rating; OW = openWeight flag): 4 Gemini 4 Argon 1643.5 · 5 Kimi 3 1640.2 (OW) · 6 Grok 4.7 1635 · 7 Muse Wonder 1630 · 8 GLM 5.3 1614.7 (OW) · 9 GPT-6 Astra 1524.9 · 10 Muse Spark Open 1517.1 (OW) · 11 DeepSeek V4.1 Flash 1017 1481.8 · 12 Qwen 3.8 1466.8 · 13 MiMo V2.6 Pro 1446.4 · 14 MiniMax M3 1412.6 · 15 Qwen 3.8 Max 1399.4 · 16 Gemma 4 31B 1241 · 17 gpt-oss 120B 1124.9.


**Change vs 1 Nov: none** in order or ratings; only the timestamp moved. CIs shifted marginally (Opus 5.5 [1839.1, 2003.1] → [1835, 2007.2]; Fable 5.1 [1821.9, 1976.8] → [1825.9, 1985.9]).

**Cross-leaderboard inconsistency (5th consecutive day):** **Gemini 4 Carbon is still absent from FMRT** despite being **#1 on AA** (II 59) and **#2 on BenchLeader** — the single largest unresolved divergence. Also `Muse Wonder` (Meta) is #7 on FMRT but absent from AA's top-50 II list, and `Kimi K3.1 Pro` (#3 FMRT) is only 46 on AA.

---

## 4. Hugging Face trending — reshuffle

`https://huggingface.co/api/models?sort=trendingScore&limit=25`:

| # | Model | trending | downloads | likes | move vs 1 Nov |
|---|---|---|---|---|---|
| 1 | LiquidAI/LFM3-1.7B | 705 | 42,384 | 891 | ▲ (#2, was 623) |
| 2 | deepseek-ai/DeepSeek-V4.1-Flash-1017 | 687 | 177,009 | 4655 | ▼ (#1, was 697) |
| 3 | nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B | 589 | 32,439 | 661 | ▲ (was 530, #4) |
| 4 | mistralai/Mistral-Large-4-1T-A52B | 493 | 5,500 | 1484 | ▲ (was 461) |
| 5 | baidu/Unlimited-OCR-2 | 468 | 147,588 | 553 | ▲ (was 431) |
| 6 | Lightricks/LTX-2.5 | 384 | 2,467,613 | 10327 | ▲ (was 370) |
| 7 | ccore/Qwen3.5-4B-3D-Coder | 382 | 63,499 | 547 | ▲ (was 353) |
| 8 | speridlabs/idol | 372 | 7,787 | 390 | ▲ (was 266) |
| 9 | Pika-Labs/Pika-H3-Flex | 328 | 491 | 346 | ▲ (was 289) |
| 10 | Nanbeige/Nanbeige4.3-33B | 309 | 16,976 | 999 | ▼▼ (#3, was 583) |
| 11 | abenzerps/Qwen-Image-2.1-Uncensored-Quantized | 288 | 2,516,622 | 5535 | ▼ (was 289) |
| 12 | Qwen/Qwen3.8-27B | 287 | 7,915,637 | 18991 | ▲ (was 271) |
| 13 | black-forest-labs/flux-3-image-klein-comfy | 281 | 1,003,813 | 2331 | ▼ (was 288) |
| 14 | LiquidAI/LFM3-Omni-2B | 274 | 9,964 | 303 | ▲ (was 244) |
| 15 | **burner22/numbat** | 257 | 7,108 | 283 | **new** (alleged leaked checkpoint) |Ranks 16–25 (trend / dl / likes): Edge0/Audio8-TTS-Realistic-Air 223/7,259/240 · RecursiveSI/flint 221/29,574/1309 · Diffuspace/Clover-35B-A3B-Preview 208/2,679/221 · LiquidAI/LFM3-VL-2B 206/10,141/217 · facebook/sam3 203/1,879,182/5706 · XHToken/Spark-X2.6-4B 198/18,126/968 · FusionCow/Sulphur-3 190/195/221 (**new**) · OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated 186/1,095/209 (**new**) · LiquidAI/LFM3-Audio-2B 183/6,300/196 · AtomicChat/LFM3-1.7B-Uncensored-GGUF 180/59,832/205 (**new**).

Notable: **Nanbeige4.3-33B decayed hard** (583 → 309) even as AA added its II 20 result on 2 Nov. LiquidAI's sweep narrowed from 6 slots to 3. `mistralai/Mistral-Large-4-1T-A52B` stays top-5 with only 5,500 downloads against 1,484 likes. **`MiniMaxAI/MiniMax-M3.1-Flash` is out of the top 25 for the second consecutive day** (already 135 yesterday). `ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF` (2,294,642 downloads yesterday at #17) has **dropped out**; an abliterated derivative (`OBLITERATUS/…-obliterated`) enters at #23.

---

## 5. Releases & open weights — window summary

- **No new frontier model release confirmed in this window.** AA's newest entries are evaluation results for models released earlier (Nanbeige4.3-33B, Gemini 4 Carbon, DeepSeek V4.1 Flash 1017). The **27 Oct 2026 Intelligence Index v5** rollout (new: **FrontierCode 2.0** — Cognition's private coding benchmark graded on maintainer-merge criteria, and **Terminal-Bench-Science** — 70 agentic scientific-research tasks; upgrades: **HLE-Diamond** replacing Humanity's Last Exam, **AA-Omniscience v1.1**, **CritPt v2 (Hard Subset)**) reframes all pre-27-Oct scores.
- **Open weights consolidating at FMRT's top:** `Kimi 3` (#5), `GLM 5.3` (#8), `Muse Spark Open` (#10), `MiMo V2.6 Pro` (#13), `MiniMax M3` (#14), `Gemma 4 31B` (#16), `gpt-oss 120B` (#17) carry `openWeight = True`. `Kimi K3.1 Pro` (#3) and `DeepSeek V4.1 Flash 1017` (#11) do **not** — the flags are inconsistent with other leaderboards' treatment of these models.
- **`burner22/numbat`** entered HF trending at #15; all its specs are **uploader assertions** and cached community assessment is that it is most likely fake.
- **Kimi K2.8 Preview** = **September 11, 2026** silent model-ID swap, no open-platform/HF weights — a product-surface change, not a weight release.
- **DeepSeek** shipped an enhanced coding agent aimed at Claude Code (Bloomberg, `50323814`; HN engagement minimal at 4 points). **LongCat-2.5** announced native multimodality for agentic tasks — cached page yields no benchmark data.

---

## 6. Pricing summary

- **AA cost per task:** see §3 AA table (index top: Gemini 4 Carbon high $7.76 · Claude Opus 5.5 max w/ fallback $10.04 · Gemini 4 Carbon medium $6.59 · Claude Opus 5.5 xhigh w/ fallback $6.05 · GPT-6 Astra max $6.24 · GPT-6.1 Sol max $1.27).
- **Best quality-per-dollar (top 15):** `GPT-6.1 Terra` at **$2.00 per 1M tokens blended** (BenchLeader) — unchanged from yesterday.
- **Lowest cost per task (AA):** `K2 Horizon 375B A23B`, `Command A+`, then `GPT-6 Luna (low)`, `Mistral Small 4`.
- **Cached-input moves today:** `Qwen3.6 Plus` $0.028/M → $0.050/M (81% up) · `Qwen3.7 (max)` $0.33/M → $0.50/M (52% up) · `GLM 5.2 (max)` $0.26/M → $0.30/M (15% up) · `GLM-5 (thinking)` $0.20/M → $0.15/M (25% down).

---

## Coverage caveats

1. **No live retrieval.** Everything comes from the pre-fetched cache in `tmp/nov02/`; anything absent there is unknown, not merely unfetched — notably today's BenchLeader blended-price table, the AA "under review" model roster, and activity after capture (HN trees ≈ 2 Nov 18:00 UTC; FMRT generated 2026-11-02T15:54:11.937Z; AA leaderboard snapshot undated in cache).
2. **`aa_api.json` is not JSON** (cached HTML page) — AA figures come only from `aa_lb.txt` + `aa_changelog.html`; the snapshot carries **no timestamp**.
3. **BenchLM is 4 days stale** (`lastUpdated 2026-10-29`, `approvedSnapshotId: null`, three policy flags false) — continuity only.
4. **FMRT shows no substantive change** vs 1 Nov (timestamp only). With 541 motions and overlapping 95% CIs, the top-3 ordering is **not** confidently separated.
5. **BenchLeader caveat:** 27 configurations sit inside Claude Opus 5.5's error bar — ranks 1–11 differ by less than the stated uncertainty.
6. **Cached-input vs blended-price moves are different metrics** — do not net them into one trend without today's blended figures.
7. **`toms.html` / `longcat25.html` are JS-heavy.** Tom's article recovered by text extraction (headline, Bruno Ferreira, 2 Nov 2026, Osmani quote); `longcat25.html` yielded only the title *"Introducing LongCat-2.5"* — **no LongCat benchmark numbers**.
8. **The "Muse AI" surveillance characterization** is a community/Substack allegation and the **"Mythos" checkpoint is an unverified community claim** (README = uploader's text; cached assessment: most likely fake). Neither is a sourced technical finding.
9. **"AI agent performed brain surgery on a mouse"** rests solely on a tweet URL, with no paper or lab attribution. **The Sam Altman "all the RAM" item is satire**, not a company statement.
10. **Reddit claim strings** are **user assertions** from Atom feeds; contexts and source documents were not re-verified.
11. **Malformed identifiers are reproduced verbatim** (§2), including broken `&gt;`/`&lt;/a&gt;&lt;/p` fragments and truncated `href`/`src` attributes.
12. `cnbc.html`, `cc_*`, `aa_rn.html`, `aa_models*.html` belong to other cached tasks; **the CNBC body was not extracted**, so S-1 figures are as they appear in the HN headline.
