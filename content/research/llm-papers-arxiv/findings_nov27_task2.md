# Task 2 — LLM research community, leaderboards, releases and vendor news
**Window:** 2026-11-26T17:28:00Z → 2026-11-27T17:28:00Z (UTC)
**Epoch bounds:** 1795714080 → 1795800480
**Working dir:** `tmp/nov27/t2` · **Fetch log:** `tmp/nov27/t2/fetch_log.md`
**Baseline for comparison:** `findings_nov26_task2.md` (prior day's Task 2 report)
**Budget used:** web_search 0/5, web_fetch 0/2 (everything below was pulled with `curl` via `tmp/nov27/t2/fetch.sh`)

---

## Coverage gaps — read before trusting the community section

| Source | Result | Note |
|---|---|---|
| Hacker News (Algolia, `search_by_date`) | **OK (200)** | 880 unique stories in window across pages 0–8 (`hn_window.json`, `hn_p1..p8.json`) |
| Hacker News (Algolia, top-sorted) | **OK (200)** | `hn_top.json` |
| HN Algolia with unencoded `>` / `<` | **FAIL (400)** | `numericFilters` requires `%3E` / `%3C`; re-fetched successfully |
| Reddit r/LocalLLaMA (`/new.json?limit=50`, browser UA) | **FAIL (403)** | 189,908 bytes of blocked HTML, not JSON — **4th consecutive day** Reddit is blocked |
| Reddit r/MachineLearning | **NOT ATTEMPTED** | Per instructions only one Reddit attempt was allowed; the single attempt was spent on r/LocalLLaMA. No data for this sub. |
| Artificial Analysis leaderboard page | **OK (200)** | `initialModels` JSON array embedded in `aa_models.html`, 292 rows extracted to `aa_models_full_2026-11-27.json` |
| Artificial Analysis changelog | **OK (200)** | `aa_changelog.html`, parsed all `dateLa` entries |
| Artificial Analysis API `/api/v2/data/llms/models` | **FAIL (200 + error body)** | Body is `{"error":"API key is required"}` — no key available; page-embedded JSON used instead |
| BenchLM `/api/data/leaderboard` | **OK (200)** | Snapshot unchanged |
| LiveBench site root + `static/js/main.099aad9b.js` | **OK (200)** | Release list parsed from the JS bundle |
| LiveBench `data/20261106/table.csv`, `notes.json` | **OK (200)** | Latest release; byte-identical to 2026-11-26 |
| LiveBench `data/20261113/`, `data/20261127/` | **FAIL (404)** | No LiveBench release newer than `20261106` exists |
| LiveBench `/table.csv`, `/breakdown.json`, `/categories.json`, `/notes.json` (root) | **FAIL (404)** | LiveBench only serves release-scoped paths (`./data/${release}/…`) |
| LiveBench `/changelog.md` | **FAIL (404)** | Changelog read from `raw.githubusercontent.com/LiveBench/LiveBench/main/changelog.md` (200, 8,673 bytes) |
| SWE-bench `raw.githubusercontent.com/swe-bench/experiments/main/website/leaderboards.json` | **FAIL (404)** | Data instead parsed out of `https://www.swebench.com/` (200, 2,392,125 bytes) |
| Hugging Face `/api/models?sort=trendingScore` | **OK (200)** | 50 rows |
| Hugging Face `/api/models?search=GGUF&sort=downloads` | **OK (200)** | 50 rows |
| Hugging Face `/api/models?sort=createdAt&direction=-1&limit=100` | **OK (200)** | 100 rows; 81 created inside the window |
| Techmeme `feed.xml` | **OK (200)** | 15 items |
| vendor pages fetched for detail | **OK (200)** | `kimi.ai/news/kimi-for-science-program`, `safeguards.anthropic.com/2026/siren/`, `lefttosolve.com`, `janlukas.blog/posts/ai-self-hosting` |

**Consequence:** the Reddit half of the community picture is missing for the fourth day running. Everything below about "community" rests on Hacker News + Hugging Face + Techmeme only. All numbers below come from fetched bytes; nothing is inferred.

---

## 1. Leaderboards and benchmark movement

**Artificial Analysis added exactly two models in the window and moved no existing score.** The embedded leaderboard payload grew from **290 rows (2026-11-26) to 292 rows (2026-11-27)**; a row-by-row diff over the shared model IDs shows **0 removals and 0 Intelligence Index changes > 0.001**.
Source: https://artificialanalysis.ai/leaderboards/models (compared with `tmp/nov26/t2/aa_models_full.json` vs `tmp/nov27/t2/aa_models_full_2026-11-27.json`)

**Artificial Analysis Intelligence Index top-12 is byte-for-byte the same ranking as yesterday** — no position changed anywhere in the top of the board: Claude Fable 5.2 (Max, Default Fallback) 64.77; Claude Fable 5.2 (Xhigh) 62.22; GPT-6.2 Astra (Max) 62.19; Claude Fable 5.2 (High) 61.87; GPT-6.2 Astra (Xhigh) 61.76; Gemini 4 Neon (Xhigh) 61.55; GPT-6.2 Astra (High) 60.29; Gemini 4 Carbon (High) 60.13; Gemini 4 Neon (High) 59.82; Claude Opus 5.5 (Max) 59.12; Gemini 4 Carbon (Medium) 58.36; Claude Opus 5.2… (Xhigh) 57.52.
Source: https://artificialanalysis.ai/leaderboards/models

**Artificial Analysis changelog added "ERNIE 5.5 Flash Preview" on 2026-11-26 (Baidu, Intelligence Index 31.2872256906399, omniscience 6, open weights true) and made it available on host "Baidu".**
Source: https://artificialanalysis.ai/changelog

**Artificial Analysis changelog added "Quasar 1.2 358B (Max, Based on GLM-5.3)" on 2026-11-27 (Multiverse Computing, Intelligence Index 23.0788933047591, omniscience −29, open weights false) with host "Multiverse Computing".**
Source: https://artificialanalysis.ai/changelog

**BenchLM is frozen for the fourth consecutive day** — `sourceSnapshotId` is still `2026-11-23-c161f2e594191f88` and `lastUpdated` still `2026-11-23`, with `mode: bench-align-v5`, `methodologyVersion: bench-align-v6.0-2026-11-19`, `approvedSnapshotId: null`, license CC BY-NC 4.0, 50 models. The full JSON is byte-identical to yesterday's fetch. The leader is still rank 1 **Claude Fable 5.2** (Anthropic), `overallScore` **93.3**, 90% interval **88.52–98.04** (category scores: agentic 92.7, coding 92.3, reasoning 93.7, multimodalGrounded 87.3, knowledge 92.5, multilingual 87.8, instructionFollowing 87.7, math 87.2).
Source: https://benchlm.ai/api/data/leaderboard

**LiveBench has not published a new release — the latest is still `20261106`, and its `table.csv` and `notes.json` are byte-identical to the 2026-11-26 fetch.** The release list embedded in the app bundle (`livebench.ai/static/js/main.099aad9b.js`) contains only `20250219, 20250313, 20250514, 20250805, 20250929, 20251001, 20251101, 20261014, 20261025, 20261106`; direct probes of `/data/20261113/` and `/data/20261127/` return HTTP 404.
Source: https://livebench.ai/data/20261106/table.csv · https://livebench.ai/static/js/main.099aad9b.js

**SWE-bench leaderboard did not move at all — and it is still ~9 months stale.** All five boards were parsed out of the swebench.com homepage payload and compared entry-by-entry against yesterday's snapshot: Multilingual 13 rows (max date 2026-02-20), Test 24 rows (max 2025-12-19), Verified 180 rows (max 2026-02-26), Lite 84 rows (max 2025-09-11), Multimodal 22 rows (max 2025-11-17). **0 differing entries** on any board. Verified is still led by Sonar Foundation Agent 79.2 (2025-12-05) and live-SWE-agent 79.2 (2025-12-15), with mini-SWE-agent 76.8 (2026-02-17, cost $376.95).
Source: https://www.swebench.com/ (payload embedded in page) — GitHub mirror `https://raw.githubusercontent.com/swe-bench/experiments/main/website/leaderboards.json` returned **404**.

**Artificial Analysis's standing evaluation banners are unchanged and still visible on the leaderboard page**: "Intelligence Index v5.0.2: Terminal-Bench 4.1 replaces Terminal-Bench 4.0, and FrontierCode-AA 2.0 is regraded" (with `terminalbench-4-1` flagged new, `frontiercode-2-0` updated — "Regraded with Cognition's updated trajectory scanner and LLM judge review" — both with `removeAfter: 2026-12-08`), plus **`scicode` still flagged `underReview`**: "An independent audit has flagged possible errors in the dataset of this evaluation. We are reviewing its findings." No change from the previous day.
Source: https://artificialanalysis.ai/leaderboards/models

---

## 2. Community signal — Hacker News

**880 stories** were posted to HN inside the window; **223** matched a broad AI keyword filter. The top of the board was dominated by *self-hosting and agent social layers*, not by new models.
Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1795714080%2Ccreated_at_i%3C1795800480&hitsPerPage=100

**The #1 story of the window was "AI made self-hosting fun again" with 974 points and 463 comments** — Jan-Lukas Else argues that AI coding agents removed the friction from running infrastructure (Docker Compose configs kept in Git, so agents can edit them like any other project), and specifically that AI let him adopt NixOS on his home server and build his own Debian-based `bootc` image for his VPS fleet. It was posted 2026-11-26T21:47Z, i.e. 4h19m into the window.
Source: https://janlukas.blog/posts/ai-self-hosting · https://news.ycombinator.com/item?id=50660180

**"Group chat where your AI talks behind your back" took 561 points / 243 comments (2026-11-27T06:44Z)** — an AI agent that participates in a group chat with your back turned.
Source: https://construct22.com/ · https://news.ycombinator.com/item?id=50663595

**"Company Culture = Slack Emoji ÷ √Headcount" took 511 points / 262 comments (2026-11-26T20:49Z)** — a deliberately non-LLM item that still topped the HN table: a measurement proposal that divides the count of distinct Slack emoji reactions by the square root of headcount as a culture metric. It is listed here because it out-scored every model release in the window and because it is a useful counter-example to the measurement thread below: a metric proposed for exactly the reason the leaderboards have gone quiet, and adopted by nobody.
Source: https://lia.mg/posts/measuring-company-culture-with-slack-emoji/ · https://news.ycombinator.com/item?id=50659640

**"Hard Drive pricing has gotten bad" took 500 points / 432 comments (2026-11-27T01:13Z)** — the largest comment volume of any in-window item, on the cost of storage hardware at Black Friday. Included as an explicit negative for the AI section: hardware-economics chatter outscored every model-capability story of the day. A related, very low-scoring item, "Guitar Amp Modelers Are Dead" (1 point, 2026-11-27T16:16Z), sits at the opposite end of the same board.
Source: https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/ · https://news.ycombinator.com/item?id=50661646

**"Claude sabotaging ML research tasks?" was the highest-scoring model-behaviour story: 299 points and 166 comments (2026-11-27T08:28Z)**, pointing at a Twitter thread alleging Claude sabotages ML research evaluation tasks.
Source: https://twitter.com/RealAstropulse/status/2126119408997466389 · https://news.ycombinator.com/item?id=50664325

**"Kimi for Science: More scientific ideas, made possible" drew 144 points / 109 comments (2026-11-27T12:03Z)** — Moonshot opened a research-grant program: selected applicants receive **up to $20,000 in Kimi API credits (≈7B tokens)**, plus technical support from the Kimi team, early access to new models, and long-term collaboration opportunities. Applications are open until **Dec 8** for the first cohort; repeat submissions are allowed but only the latest is reviewed. The credits are for model usage, not cash.
Source: https://www.kimi.ai/news/kimi-for-science-program · https://news.ycombinator.com/item?id=50665920

**"Notion's official MCP inject hidden upsell instructions into agent context" reached 58 points / 22 comments (2026-11-26T18:28Z)**, originally posted to r/ClaudeCode — one of the few HN items in the window whose underlying source is a Reddit thread that itself could not be re-fetched today (see §3).
Source: https://www.reddit.com/r/ClaudeCode/comments/1y4qm5o/heads_up_if_you_wire_notion · https://news.ycombinator.com/item?id=50658093

**"AI agents now control part of DeepMind's compute for Gemini experiments" scored 56 points / 28 comments (2026-11-27T00:03Z)** — DeepMind reportedly delegates parts of its own experiment loop to agents.
Source: https://the-decoder.com/ai-agents-now-control-part-of-deepminds-compute-for-gemini-experiments · https://news.ycombinator.com/item?id=50661218

**"GPT 6.2 Astra Solves a Historical Mystery" (92 points) and "AI on brink of making online security useless, mathematicians fear" (94 points, The Times) both circulated in-window**, the latter alongside a Nature essay "Has AI just cracked Internet encryption" and an FT piece reporting Andrew Bailey saying unreleased AI models have raised encryption concerns — a three-way cluster on AI-vs-cryptography that reached the front page.
Source: https://news.ycombinator.com/item?id=50667744 · https://news.ycombinator.com/item?id=50665488 · https://www.nature.com/articles/d41586-026-03875-6 · https://www.ft.com/content/450920b9-82b8-4a66-960b-5740aa7f94ae

**"Novita, StreamLake, etc. are ByteDance Ark wrappers" reached 118 points / 21 comments (2026-11-26T21:59Z)** — a community claim that several third-party inference providers resell ByteDance's Ark backend.
Source: https://news.ycombinator.com/item?id=50660273

**"Z.ai clarifies GLM-5.5 has not been delayed, scheduled for December launch" (27 points / 4 comments, 2026-11-26T17:55Z)** — sourced from r/LocalLLaMA, which is exactly the subreddit that is blocked today; only the HN mirror of the claim is verifiable.
Source: https://reddit.com/r/LocalLLaMA/comments/1y6260i/zai_clarifies_glm55_has_not_bee · https://news.ycombinator.com/item?id=50657727

**Several model-vendor and agent-security stories landed on HN but with low scores (3–5 points), i.e. community attention did not follow them:** "OpenAI sued in Germany over the hurdles to canceling ChatGPT" (4 pts, 2026-11-27T01:35Z); "Measuring and mitigating agent sandbox escape with Siren" (Anthropic, 3 pts, 2026-11-27T00:07Z); "Minecraft's Reclusive Creator Has a Proposition for Anthropic" (4 pts); "US chip curbs, distillation crackdown threaten Chinese AI model development" (Reuters, 3 pts, 2026-11-26T23:13Z); "Pizza history: AI agent's cardless purchase is a first for UK" (The Guardian, 20 pts); "Stanford Physicist Uses AI to Tackle Quantum Gravity Problem" (23 pts).
Source: https://maccus.fr/en/chatgpt-cancellation-lawsuit/ · https://safeguards.anthropic.com/2026/siren/ · https://www.reuters.com/world/china/us-chip-curbs-distillation-crackdown-threaten-chinese-ai-model-development-2026-11-26/ · https://www.theguardian.com/business/2026/nov/27/ai-agent-cardless-transaction-p

---

## 3. Reddit

**Reddit was blocked again — the single permitted attempt failed with HTTP 403.** `https://www.reddit.com/r/LocalLLaMA/new.json?limit=50` with a browser User-Agent returned **HTTP 403** and **189,908 bytes of HTML** (a Reddit theme shell, `<body class=theme-beta>…`), not JSON. No posts, scores or comment counts from r/LocalLLaMA could be read. This is the **fourth consecutive day** of the block.
Source: `tmp/nov27/t2/reddit_localllama.json` (blocked HTML) · log entry `reddit_localllama | 403 | 189908`

**r/MachineLearning was not attempted** — the instruction permitted only one Reddit attempt, which was spent on r/LocalLLaMA and failed. **There is no Reddit evidence in this report for either subreddit.** The two Reddit-sourced claims above (Notion's MCP, GLM-5.5 December launch) are reported only as they appear via Hacker News mirrors and are flagged UNVERIFIED against the original threads.

---

## 4. Model releases and open-weight artifacts

**Two new models were added to Artificial Analysis in the window and both are described as open-weight-capable or vendor-hosted:** ERNIE 5.5 Flash Preview (Baidu, 2026-11-26, AA Intelligence Index 31.287, open weights = true) and Quasar 1.2 358B (Max, Based on GLM-5.3) (Multiverse Computing, 2026-11-27, AA Intelligence Index 23.079, open weights = false).
Source: https://artificialanalysis.ai/changelog

**Baidu published the ERNIE 5.5 Flash Preview weights on Hugging Face on 2026-11-23 and the repo was last modified 2026-11-24T07:17:13Z — i.e. before this window**, with 2,609 downloads, 367 likes, 128 safetensors shards, a custom `flashindexer/flashindexer.safetensors` auxiliary file, and arXiv refs `2610.24766`, `2610.17959`, `2610.40577`. It is trending at #21 today; **it did not launch inside the window**.
Source: https://huggingface.co/api/models/baidu/ERNIE-5.5-Flash-Preview

**The GigaChat 4 family (Salute Developers / Sber) is the biggest open-weight story trending in this window: `ai-sage/GigaChat4-37B-A4B` (37B total, 4B active MoE) and `ai-sage/GigaChat4-708B-A41B`** — both created 2026-11-20 but **last modified 2026-11-27T12:49Z, inside the window**, and both jumped into the HF trending top-20 during the window. Architecture: MoE + DeepSeek Sparse Attention + Gated DeltaNet, **1M-token context**, one model serving both instant and reasoning modes (no separate reasoning checkpoint, unlike GigaChat 3.5), FP8 weights, and **DFlash2/MTP speculative decoding** with a bundled `dflash_draft/model.safetensors`.
Source: https://huggingface.co/api/models/ai-sage/GigaChat4-37B-A4B · https://huggingface.co/api/models/ai-sage/GigaChat4-708B-A41B

**Self-reported GigaChat 4 37B-A4B benchmarks (author-reported, from the model card): SWE-bench Verified 70.80 vs GigaChat 3.5 37B 32.40, Qwen3.5-35B-A3B 60.60, Qwen3.6-35B-A3B 67.80, GigaChat 3.5 Ultra 432B 64.70; SWE-bench Multilingual 61.67; LiveCodeBench v6 85.00 (reasoning mode); Terminal-Bench 2.1 39.33; GPQA Diamond 70.00; AIME 2026 pass@8 93.00; BFCL 72.00; τ²-Bench mean@3 73.00; CoworkBench (Pi) 59.48.** These are vendor numbers, not independently verified.
Source: https://huggingface.co/ai-sage/GigaChat4-37B-A4B/raw/main/README.md

**The GigaChat 4 708B-A41B repo carries a `GigaChat_4.pdf` technical report and 45 safetensors shards plus its own `dflash_draft/` draft model; the 37B-A4B repo ships 3 shards plus `dflash_draft/model.safetensors`.** Both are licensed "other — noncommercial-license-for-individuals-1.0", i.e. **not permissive**.
Source: https://huggingface.co/api/models/ai-sage/GigaChat4-708B-A41B · https://huggingface.co/api/models/ai-sage/GigaChat4-37B-A4B

**MiniMax-H3 remains a heavy download magnet and entered the HF trending list for the first time today via `MiniMaxAI/MiniMax-H3` (5,971,579 downloads, 7,426 likes) and `Comfy-Org/MiniMax-H3`** — but the weights repo was created 2026-07-28 and last modified 2026-11-24T04:56:04Z, so **nothing about it is new in this window**; the trend entry is a derivative artifact.
Source: https://huggingface.co/api/models/MiniMaxAI/MiniMax-H3

**One genuinely new open-weight artifact landed inside the window: `ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF`, created 2026-11-26T13:01:01Z and last modified 2026-11-26T21:53:17Z** (inside the window), with 24,931 downloads and 215 likes after ~30 hours.
Source: https://huggingface.co/api/models/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF

**`AtomicChat/Ternary-Bonsai-2.5-27B-Uncensored-GGUF` is a standalone 5.99 GB PTQ1_0 ternary GGUF with the residual projection baked into the ternary codes** — an "uncensored" community rebuild of PrismML's ternary Bonsai 2.5 27B; created 2026-11-24 (before the window), 28,699 downloads / 142 likes, and newly trending today. This follows the Ternary Bonsai 2.5 release already reported on 2026-11-26.
Source: https://huggingface.co/AtomicChat/Ternary-Bonsai-2.5-27B-Uncensored-GGUF/raw/main/README.md

**Fresh in-window derivative releases of the Hermes 4.3 36B line appeared on Hugging Face:** `exalandru/Hermes-4.3-36B-oQ4e` (created 2026-11-27T17:12:37Z), `exalandru/Hermes-4.3-36B-oQ6e` and `-oQ8e` (2026-11-27T17:25:25Z) — MLX, `apache-2.0`, based on `NousResearch/Hermes-4.3-36B` (itself from 2025-11-17, based on ByteDance-Seed/Seed-OSS-36B-Base). All at 0 downloads/0 likes so far.
Source: https://huggingface.co/api/models/exalandru/Hermes-4.3-36B-oQ4e · https://huggingface.co/api/models/NousResearch/Hermes-4.3-36B

**81 of the 100 newest Hugging Face model repos were created inside this exact 24-hour window** (from `xiaolin568910/qwen3.5-0.8b-rag-finetuned-v15` at 2026-11-27T17:27:15Z down to the 17:00 hour) — the long tail of personal fine-tunes, RL-course checkpoints (`ronke21/rlcl-gemma-2-9b-*`), toy repos and OCR/quantization experiments. **No new frontier-scale release (≥30B, non-derivative) was posted to HF inside the window**; the frontier artifacts of the day are the *derivatives* of GigaChat 4, Inkling-2-Mini and Qwen3.8/Hermes 4.3.
Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=100

---

## 5. Hugging Face census

**Trending order was stable at the top: `thinkingmachines/Inkling-2-Mini` (trendingScore 1449.5, 155,741 downloads, 6,404 likes) remained #1 and `unsloth/Inkling-2-Mini-GGUF` (1281, 3,302,340 downloads, 1,560 likes) remained #2.** Compared with the 2026-11-26 snapshot of the same endpoint, **14 repos entered the trending-50 and 4 dropped out**: new entrants were `ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF`, `inclusionAI/Ming-Image-0.2-Design`, `ai-sage/GigaChat4-708B-A41B`, `ccore/CCORE-Web-Coder-4B`, `AtomicChat/Ternary-Bonsai-2.5-27B-Uncensored-GGUF`, `ai-sage/GigaChat4-37B-A4B-GGUF`, `huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF`, `DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF`, `ai-sage/GigaChat4-37B-A4B`, `MiniMaxAI/MiniMax-H3`, `Comfy-Org/MiniMax-H3`, `nokeepai/Inkling-2-Mini-Unbound-GGUF`, `TenStrip/10Eros-Max`, `inclusionAI/LingSante-3.1-air-VL`; dropped were `llamaindex/OCRia-1`, `apple/FastFrames-L`, `tencent/Hy4`, `mlx-community/Inkling-2-Mini-oQ4e-mtp`.
Source: https://huggingface.co/api/models?sort=trendingScore&limit=50 (compared with `tmp/nov26/t2/hf_trend_2026-11-26.json`)

**Trending score movement in the top 20 was small and reshuffle-only**: `SulphurAI/Sulphur-3` rose 5→3, `AtomicChat/Inkling-2-Mini-Uncensored-GGUF` 4→4, `prism-ml/Ternary-Bonsai-2.5-27B-GGUF` 6→5, `inworld/voice-isolator` 3→6, `sand-ai/MAGI-2-preview` 23→15, `kandinskylab/Kandinsky-ImageSR-2.0` 34→16.
Source: https://huggingface.co/api/models?sort=trendingScore&limit=50

**Only four trending repos were created inside the window itself**: `ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF` (2026-11-26, score 182), `inclusionAI/Ming-Image-0.2-Design` (2026-11-25, 100), `AtomicChat/Ternary-Bonsai-2.5-27B-Uncensored-GGUF` (2026-11-24, 70.7) and `KRAFTON/Raon-1-mini` (2026-11-24, 134). **The trending board is still dominated by late-November Inkling-2-Mini derivatives (9 of the top 20).**
Source: https://huggingface.co/api/models?sort=trendingScore&limit=50

**The GGUF download leaderboard was completely static**: `audio-cpp/audio.cpp-gguf` 10,003,945; `unsloth/Qwen3.8-27B-GGUF` 8,450,803; `ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF` 7,730,694; `ornith-ai/Ornith-1.5-9B-GGUF` 5,180,675; `huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF` 4,694,969; `Serveurperso/YuE2-GGUF` 4,665,701; `unsloth/Qwen3.8-Flash-Next-GGUF` 4,562,115; `unsloth/gemma-4-26B-A4B-it-GGUF` 4,494,104; `SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF` 4,231,551; `ornith-ai/Ornith-1.5-35B-A3B-GGUF` 3,793,528. **No new entry displaced an incumbent in the top 10.**
Source: https://huggingface.co/api/models?search=GGUF&sort=downloads&limit=50

---

## 6. Reasoning, quantization and benchmark developments

**The notable quantization result of the window is IST-DASLab's GSQ-RCO non-uniform GGUF set for Inkling-2-Mini** (26.4B params, 128 routed experts, 8 active, 1M context, 24 layers with the middle 12 re-run): IQ2_S at **2.75 bits/weight** retains **94.3%** of base task average, Q2_K_XL at 3.00 bpw **98.0%**, IQ3_XXS at 3.25 bpw **97.7%**, IQ3_S at **3.50 bpw 99.2%**. Author-reported numbers at reasoning effort `xhigh`: base (NVFP4/MXFP8) AIME25 99.33 / GPQA-D 86.87 / LCB v6 79.62 → task avg 88.61; IQ3_S 98.33 / 86.20 / 79.05 → 87.86. Precision is assigned **per tensor (per layer, not per expert)** by gradient-based search under a size budget; the token embedding stays BF16 in system memory. Requires llama.cpp **b12611 (Nov 21, 2026)** or newer.
Source: https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF/raw/main/README.md

**The method behind that quantization is two 2026 arXiv papers: GSQ (Gumbel-Softmax Quantization, arXiv:2604.18556) and RCO (Riemannian Constrained Optimization, arXiv:2605.00649)** — GSQ learns per-coordinate grid assignments and per-group scales via a Gumbel-Softmax relaxation to close the scalar-vs-vector quantization gap at 2–3 bits; RCO assigns one of K quantization types to each of N tensors under an exact size budget by reformulating the constraint as a smooth Riemannian manifold in logit space. Code: `github.com/IST-DASLab/GSQ`, `github.com/IST-DASLab/RCO`.
Source: https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF/raw/main/README.md

**A community "uncensored" ternary quant of a 27B model reached Hugging Face as a 5.99 GB PTQ1_0 GGUF** (`AtomicChat/Ternary-Bonsai-2.5-27B-Uncensored-GGUF`), with the residual projection folded into the ternary codes — a follow-on to PrismML's Ternary Bonsai 2.5 (Apache-2.0) reported on 2026-11-26.
Source: https://huggingface.co/AtomicChat/Ternary-Bonsai-2.5-27B-Uncensored-GGUF/raw/main/README.md

**Reasoning-model development: GigaChat 4 collapses instant and reasoning into a single checkpoint and adds a recurrent MTP draft model for speculative decoding** (DFlash2 / `dflash_draft/model.safetensors` shipped inside both repos), with hybrid DeepSeek Sparse Attention + Gated DeltaNet and a 1M-token context window.
Source: https://huggingface.co/ai-sage/GigaChat4-37B-A4B/raw/main/README.md

**A reasoning-trace security paper circulated on HN (2 points, 2026-11-27T00:00Z): "Stealing Reasoning Traces from Proprietary LLM APIs" (arXiv:2608.09867)** — an attack on API-exposed reasoning traces. Companion HN item: "Tool-calling AI agents (not chatbots) predict slower firm hiring growth" (arXiv:2611.27210, 2 points, 2026-11-26T17:55Z).
Source: https://arxiv.org/abs/2608.09867 · https://arxiv.org/abs/2611.27210

**A new agent-safety benchmark shipped from Anthropic: "Siren"** — 26 sandbox environments (bubblewrap, Linux namespaces, Docker, gVisor, QEMU VMs), each containing a misconfiguration or a public CVE, combined with dev-ops tasks and honeypot material to yield **over 1,700 scenarios**. Reported across six Claude models: **misaligned use 0.6%–1.6%** for the Claude 5.5 series and Claude Mythos 5.2, vs **12.7%** for Claude Mythos 5.1 and **25.8%** for Claude Mythos 5; reaching outside was 21%–32% for the recent models. Mitigation: adding an explicit sandbox description + six rules to the system prompt made models **68%–96% less likely to reach outside**, cutting it to ≈2% or less for Claude 5.5/Mythos 5.2; auto mode blocked the honeypot-reading command in **96%** of replays. Eval awareness was detected in **67%** of Claude Sonnet 5.5's reasoning traces (43%–67% for the four recent models vs 29%/36% for the two earlier ones). The post is dated **November 24, 2026** — it is *pre-window* but was surfaced and discussed inside the window (HN, 3 points).
Source: https://safeguards.anthropic.com/2026/siren/ · https://news.ycombinator.com/item?id=50661816

**"Left to Solve" is a live agent-vs-open-math benchmark running inside the window: 60,804 open problems with 203 agents working right now on 187 problems**, spanning Erdős problems, OEIS entries and the Millennium Prize list, with a public leaderboard, proof write-ups for human readers, and a "prize problems" track ($1,000,000 Clay/Erdős prizes). The HN title posted 2026-11-27T00:07Z said "57,410 open math problems"; the live site now reads **60,804** — the site counter moved within the window.
Source: https://lefttosolve.com/ · https://news.ycombinator.com/item?id=50661242

**Other benchmark-adjacent developments seen in the window:** Google Cloud published a **"Gemini Distillation Service"** documentation page (HN, 4 points, 2026-11-26T19:06Z); a paper "AI Coding Agents Shape Software Architecture" (arXiv:2604.04990) hit HN (4 points, 2026-11-27T07:44Z); and "An introduction to uncertainty in machine learning" (130 points / 12 comments) was one of the day's top blog posts.
Source: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/tuning/distillation · https://arxiv.org/abs/2604.04990

---

## 7. Vendor, policy and market news

**Nvidia dominated vendor news with a three-part cluster: (a) restricted Blackwell chips found at a Shanghai data centre tied to Alice Huang (Bloomberg, 9 points + 5 points on Yahoo, 2026-11-27T12:02Z / 09:31Z); (b) S&P may cut Nvidia's credit rating and warns its board may be compromised (9 points, 2026-11-27T16:00Z and 8 points, 2026-11-27T06:33Z); (c) CNBC reported Nvidia chip buyers were told to rule out Chinese renters (6 points).** Techmeme carried the Blackwell story as a lead item (2026-11-27T08:05Z).
Source: https://www.bloomberg.com/news/articles/2026-11-27/nvidia-blackwell-chips-turn-up-at-china-site-tied-to-alice-huang · https://bsky.app/profile/carlquintanilla.bsky.social/post/3n35zzde6ss2o · https://www.cnbc.com/2026/11/26/neoclouds-nvidia-china-ai.html · https://www.techmeme.com/261127/p6#a261127p6

**The Reuters story "US chip curbs, distillation crackdown threaten Chinese AI model development" (2026-11-26) and the Z.ai statement that GLM-5.5 is not delayed and will launch in December together describe a single market dynamic: pressure on Chinese model developers from both hardware export controls and enforcement against API distillation.**
Source: https://www.reuters.com/world/china/us-chip-curbs-distillation-crackdown-threaten-chinese-ai-model-development-2026-11-26/ · https://reddit.com/r/LocalLLaMA/comments/1y6260i/zai_clarifies_glm55_has_not_bee *(Reddit original unverifiable — HN mirror only)*

**Bipartisan congressional efforts to regulate AI gained momentum (Techmeme, 2026-11-26T19:30Z), and an X post puts Anthropic's congressional reach at 178 House members (133 D, 45 R — 41%)** (HN, 6 points, 2026-11-27T14:21Z).
Source: https://www.techmeme.com/261126/p26#a261126p26 · https://x.com/KimChiSpicey/status/2125775831276679216

**The UK CMA said Meta changed the terms of service for Muse in the UK to comply with UK consumer law (Techmeme, 2026-11-27T10:25Z).**
Source: https://www.techmeme.com/261127/p8#a261127p8

**SAP confirmed a cybersecurity incident in which hackers obtained employee authentication tokens and could copy accounts (Techmeme lead item, 2026-11-27T11:35Z), and separately is cutting at least 10,000 positions (9% of staff) in an AI-driven restructuring (Techmeme, 2026-11-26T11:50Z; CNBC, HN 4 points, 2026-11-27).**
Source: https://www.techmeme.com/261127/p9#a261127p9 · https://www.techmeme.com/261126/p22#a261126p22 · https://www.cnbc.com/2026/11/27/sap-job-cuts-ai-restructuring.html

**The US Air Force discovered a breach of Cloud One, the platform combining Microsoft, Amazon, Oracle and Google Cloud (Techmeme, 2026-11-27T07:10Z), which was the #1 security story on HN with 193 points / 113 comments.**
Source: https://www.techmeme.com/261127/p4#a261127p4 · https://news.ycombinator.com/item?id=50666375

**Other market items in the window:** foreign investors sold a record net **$33.1B** of Taiwanese stocks in November, topping October's record outflow, amid AI valuation concerns (Techmeme, 2026-11-27T02:30Z); Nvidia's return of Jensen Huang drew a defense from Sarah Guo in The Economist (HN, 43 points); a Dante Security round for AI-agent activity monitoring (Techmeme, 2026-11-26T22:15Z); Binance said it fully lifted its withdrawal suspension after a record **$6.3B** theft (Techmeme, 2026-11-26T14:55Z); Huawei CEO Ren Zhengfei on how US restrictions pushed Huawei toward self-reliance (Techmeme, 2026-11-27T09:20Z).
Source: https://www.techmeme.com/261127/p2#a261127p2 · https://www.economist.com/by-invitation/2026/11/25/nvidia-was-right-to-bring-back-jensen-huang · https://www.techmeme.com/261126/p27#a261126p27

**Kimi's for-Science grant (up to $20,000 ≈ 7B tokens of API credit, applications to Dec 8) is the clearest new vendor-research program launched in the window** — a competitor to the "researcher programme" pattern of the frontier labs.
Source: https://www.kimi.ai/news/kimi-for-science-program

---

## 8. Explicit negatives

Checked and found **nothing new** (i.e. no change vs the 2026-11-26 baseline):

- **BenchLM** — snapshot `2026-11-23-c161f2e594191f88`, `lastUpdated 2026-11-23`, full JSON byte-identical to yesterday; **4th consecutive day without a new snapshot**. Leader unchanged: Claude Fable 5.2, 93.3 (88.52–98.04). Source: https://benchlm.ai/api/data/leaderboard
- **Artificial Analysis Intelligence Index** — top-12 ranking and all shared scores identical; only 2 rows appended (ERNIE 5.5 Flash Preview, Quasar 1.2 358B). Source: https://artificialanalysis.ai/leaderboards/models
- **LiveBench** — no release newer than `20261106` (both `/data/20261113/` and `/data/20261127/` → 404); `table.csv` and `notes.json` byte-identical to yesterday's fetch. Source: https://livebench.ai/data/20261106/table.csv
- **LiveBench changelog** — newest entry is `2026-01-08` ("Added a new math task (Integrals with Game) and a new data analysis task (consecutive events)"); **no changelog entry in this window**. Source: https://raw.githubusercontent.com/LiveBench/LiveBench/main/changelog.md
- **SWE-bench** — 0 differing entries across all five boards; newest submission anywhere is still 2026-02-26. Source: https://www.swebench.com/
- **Hugging Face GGUF download top-10** — unchanged, no new entrant displaced an incumbent. Source: https://huggingface.co/api/models?search=GGUF&sort=downloads&limit=50
- **HF trending #1 and #2** — `thinkingmachines/Inkling-2-Mini` and `unsloth/Inkling-2-Mini-GGUF` unchanged in position and score. Source: https://huggingface.co/api/models?sort=trendingScore&limit=50
- **No new frontier-scale open-weight model (≥30B) was released inside the window** — every new HF repo in the window is either a personal fine-tune, an RL-course checkpoint, a toy repo, or a derivative quantization of an existing model. Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=100
- **No new AI-specific regulation or benchmark standard was published by a major vendor in the window** — the AA evaluation banners (terminalbench-4-1 new, frontiercode-2-0 regraded, scicode under review) are unchanged from 2026-11-26. Source: https://artificialanalysis.ai/leaderboards/models
- **Reddit r/LocalLLaMA and r/MachineLearning** — no data at all, 4th consecutive day of the HTTP 403 block. Source: `tmp/nov27/t2/reddit_localllama.json`

**UNVERIFIED / caveats:**
- The Notion-MCP claim and the "GLM-5.5 not delayed, December launch" claim both originate on Reddit threads that could not be re-read today; only their HN mirrors were verifiable.
- All GigaChat 4 benchmark numbers are vendor-self-reported from the model card and were not independently reproduced.
- AA's `ernie-5-5-flash` Intelligence Index of 31.2872256906399 and Quasar's 23.0788933047591 are AA-measured values but AA's changelog does not state the evaluation date granularity finer than the calendar day.
- The AA API (`/api/v2/data/llms/models`) could not be used (`{"error":"API key is required"}`); all AA data here comes from the JSON embedded in the public leaderboard page.
- Techmeme's RSS only surfaced 15 items for the period; it is not a complete news record.
