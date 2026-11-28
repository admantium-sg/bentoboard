# Task 2 findings — LLM papers/arxiv digest, 2026-11-22 (window 2026-11-21T17:28Z → 2026-11-22T17:28Z)

Weekend window: low arXiv intake (arXiv's own "new submissions" feed still shows 2026-11-19 as the most recent publication date), no frontier-lab model releases, but heavy community activity around Inkling 2 Mini, a new medical open-weight MoE (LingSante-3.1-flash), the Anthropic IPO aftermath, and a coordinated inference-provider data-handling story.

---

## Leaderboard deltas

### L1 — Artificial Analysis Intelligence Index: no change in the 47-row homepage table
The homepage model table is byte-for-byte identical to yesterday's snapshot (same 47 rows, same Intelligence Index values, same open-weight flags; zero added/removed/changed rows). Notably this means yesterday's Tencent Hy4 open-weight flip (commercial license) has settled and nothing new was scored overnight.
Source: https://artificialanalysis.ai/

### L2 — AA Decision Index: Bison 31B (Base Labs) added, taking #2 overall and #1 among decision models
Yesterday's snapshot had 29 decision-index rows; today's has 30. The new row is `baseten_bison-31b` — "Bison 31B", host/creator Base Labs — index score **75.8803**, which places it **#2 overall behind Claude Haiku 5.5 (Max) 76.4922** and **#1 among the 19 decision models**, ahead of Liquid AI d1.2-ultra (74.8460), Nace.AI Drex Max v1.1 (72.6242), Subquadratic SubQ Snap 1.2 (72.5805), Fastino GLiDE v1.2 (72.5152) and Base Labs' own Mammoth 27B (71.3606). Sub-scores: When2Call 98.43, EvalSafe-O*NET-AA 93.48, AA-Symmetry 89.21, AA-Paperclip 73.33, AA-Omniscience-Decision 60.09, HLE-MultiChoice 50.81; accuracy index 63.32; cost/task $0.000345; ~154 ms/task.
Caveat: Base Labs' own model card self-reports "#1 of 19 decision models on the Artificial Analysis Decision Index v2.1: 76, ahead of d1.2-ultra (75) and mammoth-1 (71)" with Brier 0.14 — AA's own number is 75.88 and it ranks 2nd overall including frontier LLMs. Treat the card claim as self-reported.
Source: https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index
Source: https://huggingface.co/baselabs/bison-1

### L3 — AA changelog: two new entries dated 2026-11-22 for LingSante-3.1-flash, but Intelligence Index still null
Changelog UUIDs `f6c32468-18d5-4206-8a75-48215ed4c078` (`modelAdded`, model id `313e14b6-909f-43d2-b795-49c825dc1e21`, creator InclusionAI id `4df238a9-d4fd-4cf2-ab1e-d12956c41f9b`, release slug `lingsante-3-1-flash-1119`) and `ef4e78d8-d32f-4e68-8238-312ef32ec0db` (`hostModelAdded`, host InclusionAI id `f4c55050-0a25-4270-9692-aff6080db239`). Both carry `"intelligenceIndex":null` and `"omniscience":null` — the model is listed but not yet scored, and it does **not** appear in the 47-row Intelligence Index table. AA's model page renders it as "**Proprietary** model — Released November 2026", which contradicts the MIT-licensed HF release; this looks like a metadata gap rather than a licensing change.
Source: https://artificialanalysis.ai/changelog
Source: https://artificialanalysis.ai/models/lingsante-3-1-flash-1119

### L4 — AA changelog also flags a benchmark audit and two live evaluation banners
The changelog payload carries an `underReview` flag on the **SciCode** evaluation ("An independent audit has flagged possible errors in the dataset of this evaluation. We are reviewing its findings."), a `new` banner on **MKA** (removeAfter 2026-11-24), and a `updated` banner on **AA-Symmetry v1.1** (removeAfter 2026-11-24: "options are written into the state or reworded, in place of reordered and relabelled"), plus "Decision Index v2.1: six evaluations, including AA-Paperclip, EvalSafe-O*NET-AA and AA-Symmetry, scored on the Decision Score". An under-review dataset on a live benchmark is worth watching for re-scores.
Source: https://artificialanalysis.ai/changelog

### L5 — BenchLM: new snapshot `2026-11-21-5deedfb2f831f0e6` (prev `2026-11-21-60849c238a49a5f2`), same methodology `bench-align-v6.0-2026-11-19`
Top of the board is unchanged: Claude Fable 5.2 93.30 (#1), Gemini 4 Neon 91.30 (#2), GPT-6.2 Astra 90.80 (#3), Gemini 4 Carbon 88.30 (#4, up from 88.00), GPT-6 Astra 83.60 (#5, up from 83.20), Claude Opus 5.5 82.80 (#6, up from 82.70).
Source: https://benchlm.ai/api/data/leaderboard

### L6 — BenchLM material score/rank movements (largest deltas)
- **GPT-6.2 Sol**: rank 7 → 7, score **81.0 → 82.3 (+1.3)** — the single largest score move on the board.
- **Inkling 2 Small**: rank 31 → 34, score **66.7 → 65.9 (−0.8)** — the open-weight flagship lost ground.
- **MiniMax M3.1 Flash**: rank 28 → 29, **68.1 → 67.3 (−0.8)**.
- **MiMo-V2.6-Pro**: rank 40 → 44, **63.5 → 63.0 (−0.5)**; MiMo-V2.6-Flash rank 44 → 45, **63.2 → 62.6 (−0.6)**.
- **Claude Sonnet 5**: rank 47 → 50, **61.6 → 61.2 (−0.4)**.
- Smaller gains: GPT-6.1 Sol 80.7→81.1, GPT-6.1 Terra 80.4→80.8, Muse Wonder Full 77.1→77.4, GPT-5.4 62.7→63.0, Gemini 3.7 Flash 66.4→66.6, Claude Opus 5 74.9→75.1, Claude Fable 5 74.6→74.8, Gemini 3.8 Flash 67.7→67.9, Gemini 4 Argon 79.0→79.1, Gemini 4 Hydrogen 78.7→78.8, Claude Fable 5.1 78.6→78.7, Grok 4.6 65.1→65.2.
- Small losses: Kimi K3.1 Pro rank 21 → 22, **70.1 → 70.0**; Qwen4 Max rank 15 → 17, **74.9 → 74.8**; Qwen3.8 Max 65.5→65.3; Claude Haiku 5.5 63.7→63.5; GLM-5.3 63.7→63.5; Ling 3.1 Flash 66.8→66.6; Hy4 68.5→68.4; Hy4 preview rank 26→27, 68.2→68.1.
Source: https://benchlm.ai/api/data/leaderboard

### L7 — BenchLM roster change: Gemini 3.6 Flash enters at #48, Gemini 3.1 Pro removed
Model count stays at 50, but **Gemini 3.6 Flash** is added at rank 48 with score 61.6 (pricing $0.75/$3.75) and **Gemini 3.1 Pro** is dropped. This is a roster rotation, not a new Google release.
Source: https://benchlm.ai/api/data/leaderboard

---

## Model releases and open-weight artifacts

### R1 — InclusionAI releases LingSante-3.1-flash: 560B MoE (25B active), 1M context, medical-domain (in-window)
AA lists release date **2026-11-22**; the HF repo `inclusionAI/LingSante-3.1-flash` was created 2026-11-19 with 23 likes; an **MXFP4 quant** (`inclusionAI/LingSante-3.1-flash-MXFP4`) was published **2026-11-22T03:19Z** (1 like so far). MIT license, text-generation, 560B total / 25B active params, 1M-token context, built on Ling-3.1-flash, trained with medical-mixed pretraining + mid-training + SFT + task-specific RL + multi-teacher on-policy distillation, "intended for research and evaluation, not a medical device". Reddit surfaced it twice in-window.
Source: https://huggingface.co/inclusionAI/LingSante-3.1-flash
Source: https://huggingface.co/inclusionAI/LingSante-3.1-flash-MXFP4
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y2s9vh/lingsante31flash_is_out_560b_with_fp8_and_mxfp4/

### R2 — No frontier-lab model release in the window (all feeds quiet)
Checked feeds: OpenAI RSS latest = Fri 20 Nov 2026 "Combatting adversarial distillation"; Google AI blog latest = Thu 19 Nov 2026 "Introducing Tool Retrieval in the Gemini API"; Mistral latest = Thu 05 Nov 2026 ("Le Chonk"); NVIDIA blog latest relevant = Thu 19 Nov 2026 "NVIDIA and Microsoft Expand Accelerated Computing From Azure to Windows PCs"; Thinking Machines news latest = "Introducing Inkling 2 Mini", Nov 20 2026; Anthropic newsroom latest items are Nov 20 (IPO close), Nov 18 (pricing), Nov 17 (black-hole physics research). Qwen blog, xAI, Meta AI, Zhipu, MiniMax RSS endpoints were unreachable or empty this run (MiniMax 500, Zhipu/xAI/Meta 404, Qwen blog HTML-only).
Source: https://openai.com/news/rss.xml
Source: https://blog.google/technology/ai/rss/
Source: https://thinkingmachines.ai/news/

### R3 — llama.cpp gains Nemotron 3.6 Academia support (PR opened 2026-11-21)
Upstream PR #32766 "Add Nemotron 3.6 Academia support" plus a companion "Support rectangular gated delta net states" (#32765). The r/LocalLLaMA thread "Nemotron 3.6 Academia Soon" (37 pts, 10 comments, 2026-11-21 22:13Z) reflects community anticipation; community GGUF conversions are already appearing on HF the same day (e.g. `EntityDeletr/Nemotron-Cascade2-30B-A3B-Eagle3-Long-Context-GGUF`, `iamivan11/Nemotron-3-Embed-1B-GGUF`, both created 2026-11-22).
Source: https://github.com/ggml-org/llama.cpp/pull/32766
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y2912s/nemotron_36_academia_soon/

### R4 — Baseten/Base Labs open-weights decision models: bison-1 (2026-11-20) and groundhog-1
`baselabs/bison-1` (created 2026-11-20, 201→201 downloads, 22 likes) is a 31B decision model post-trained from google/gemma-4-31B-it, block-bidirectional attention on full-attention layers, 131,072-token max length, MIT+Apache-2.0, $0.10/1M tokens on Baseten. `baselabs/groundhog-1` (2026-11-20) is its 26B MoE sibling (~4B active).
Source: https://huggingface.co/baselabs/bison-1
Source: https://huggingface.co/api/models?author=baselabs&sort=createdAt&direction=-1

### R5 — Inkling 2 Mini quant ecosystem still absorbing hard (downloads snapshot)
`unsloth/Inkling-2-Mini-GGUF` now at **805,993 downloads / 814 likes**; `thinkingmachines/Inkling-2-Mini` 23,543 downloads / 4,482 likes; `thinkingmachines/Inkling-2-Small` 48,974 downloads / 659 likes. The community quants from ShinMegamiBoson (5.4 GB and 8.9 GB) were the top HN item of the window (see B1).
Source: https://huggingface.co/unsloth/Inkling-2-Mini-GGUF
Source: https://huggingface.co/thinkingmachines/Inkling-2-Mini

---

## Community buzz

### B1 — HN activity volume: 1,284 stories over the two days, ~23% AI-related
Nov 21: **757** stories total, 182 AI-titled (24.0%). Nov 22: **527** stories total, 116 AI-titled (22.0%). Two-day total **1,284** stories / **298** AI-titled (23.2%). Restricted to the strict window (2026-11-21T17:28Z→2026-11-22T17:28Z) the count is **788 stories / 215 AI-titled**. AI share dropped slightly day-over-day (24.0% → 22.0%), consistent with a weekend. (Keyword set: ai, llm, gpt, claude, gemini, openai, anthropic, deepseek, qwen, kimi, mistral, llama, model(s), inference, benchmark, quantiz*, agent(s), neural, transformer, reasoning, token(s), chatbot, prompt, diffusion, embedding, rlhf, moe, gguf, vllm, nvidia, gpu, chatgpt.)
Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1764000000&hitsPerPage=1000

### B2 — Top in-window HN threads by points (all AI)
1. "87% of the Anthropic power will come from gas and 11% from coal in 2028" — **516 pts / 594 comments** (id 50597612; still gaining at 17:36Z, i.e. right at window edge).
2. "Data Processing Incidents on Inference Providers" — **249 pts / 87 comments** (id 50595554; last comment 2026-11-22T14:32Z).
3. "Show HN: I built a game where you are an LLM's subagent" — **132 pts / 34 comments** (id 50599762; last comment exactly 17:28:24Z).
4. "Pandex – Official European Law for AI Agents, over MCP" — **130 pts / 31 comments** (id 50593481).
5. "The Mythology of Conscious AI" (Noema) — **129 pts / 345 comments** (id 50595537).
6. "Inkling-2-Mini in 5.4 GB Memory" — 539 pts / 129 comments (id 50591853, posted 2026-11-21T18:02Z — inside window; note it is also the top AI thread of the window overall).
7. "Upload2Shell (CVE-2026-125396)" — 146 pts / 73 comments.
8. "AI Supply Chain Security: What Canary Tokens Found" — 91 pts / 21 comments.
9. "Harsher on Male? Evaluating LLMs on Gender-Asymmetric Moral Framing in Conflicts" (arXiv 2606.14068) — 86 pts / 75 comments.
Source: https://news.ycombinator.com/item?id=50597612
Source: https://news.ycombinator.com/item?id=50595554
Source: https://news.ycombinator.com/item?id=50591853
Source: https://news.ycombinator.com/item?id=50595537

### B3 — Reddit r/LocalLLaMA top-of-day (in-window), Inkling 2 Mini dominates
- "Inkling absolutely rips. ~200 tok/s decode, ~6,700 prefill on 2x3090s" — 364 pts / 88 comments (2026-11-22 04:58Z)
- "Please add a new rule: when you say 'I can run X at Y' you also have to say wh[at]" — 352 pts / 62 comments (12:37Z) — community complaint about misleading hardware claims
- "2 local models, no Web access, discover and program a vintage Motorola 68000 device" — 271 pts / 42 comments (2026-11-21 20:19Z) — two local agents reverse-engineered a serial-attached device with no internet or docs
- "Inkling 2 Mini on agentic coding and translation: below Qwen3.8-27B" — 141 pts / 58 comments
- "Ran a 9.5 hour autonomous test on Inkling 2 Mini (Q4_K_M) on a 3060 12GB" — 110 pts / 36 comments
- "Inkling2mini quants by shinmegamiboson - 5.4GB and 8.9GB at higher scores" — 103 pts / 19 comments
- "A critical review of Inkling 2 Mini" — 85 pts / **137 comments** (biggest comment count of the day → most contested)
- "An Inkling Mini warning: pair it with a search provider" — 87 pts / 43 comments
- "Strata Hy4 Flash" — 98 pts / 22 comments; "Hy4 Flash is a good model" — 37 pts / 31 comments
- "LingSante-3.1-flash is out: 560B, with FP8 and MXFP4 weights" — 2026-11-22 15:43Z (new, low traction so far)
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y2gxo7/inkling_absolutely_rips_200_toks_decode_6700/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y2oe1x/please_add_a_new_rule_when_you_say_i_can_run_x_at/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y26hhs/2_local_models_no_web_access_discover_and_program/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y2cvvd/a_critical_review_of_inkling_2_mini/

### B4 — Reddit r/LocalLLaMA weekly: the week was Inkling + "open source" politics
Top-of-week posts: "xi called to support open source" (2,404 pts / 435 comments), "Jensen Huang Breaks Silence" (2,200 / 775), "The beginning of the becoming of the beginning begins" (2,111 / 409), "thinkingmachines/Inkling-2-Mini (MoE: 26b, a3B)" (1,662 / 476), "Qwen 4 35B is not ruled out" (1,035 / 275), "They're going to go after open weight models" (417 / 234), "Nvidia says its open source AI strategy remains intact after Jensen Huang's exit" (406 / 98), "Basalt: Inkling 2 Mini on one 5090 at up to 613 tok/s decode and 14,100 tok/s prefill (NVFP4)" (518 / 167), "Inkling 2 Mini ties Opus 5.5 on CyberBench (@ValsAI)" (386 / 84), "Inkling 2 Mini uncensored" (520 / 88).
Source: https://www.reddit.com/r/LocalLLaMA/top/?t=week
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y1x7zo/basalt_inkling_2_mini_on_one_5090_at_up_to_613/

### B5 — Reddit r/MachineLearning: ICLR 2027 review-integrity scandal dominates the week
Top weekly posts are all ICLR 2027 peer-review meta-drama, not model releases: "ICLR 2027: PCs ran an AI detector on reviews, peer review is cooked" (105 / 106), "ICLR is deleting AI generated reviews and DR AI reviewers' papers" (101 / 27), "ICLR 2027 Desk Rejection" (72 / 50), "ICLR 2027 Rebuttal Score Ranked by University" (72 / 14), "Not a single iclr reviewer responded to our rebuttal" (44 / 23), "ICLR 2027 rebuttal was frustrating" (23 / 42), "So the ICLR27 borderline score is 2.67?" (21 / 26). Only in-window model-adjacent items: "ICLR 2027 Rebuttal Score Ranked by University" (2026-11-21 19:06Z) and "PhiloLM: a 112M language model trained from scratch on philosophy texts" (2026-11-21 22:54Z, 39 pts). Also "I found a MLSys paper with 455 citations with a major error in its implementation" (64 / 9).
Source: https://www.reddit.com/r/MachineLearning/top/?t=week
Source: https://www.reddit.com/r/MachineLearning/comments/1xyf1tq/iclr_2027_pcs_ran_an_ai_detector_on_reviews_peer/

---

## Anthropic IPO aftermath (unresolved thread from yesterday)

### A1 — IPO closed at $83/share; ~$119.5B gross including a $26B strategic private placement
Anthropic announced closing of its IPO: **1,127,000,000** Class A shares at **$83.00** (incl. full exercise of the underwriters' 147,000,000-share option), ~**$93.5B** gross, ~**$91.6B** to Anthropic; 1,103,351,354 shares sold by Anthropic and 23,648,646 by selling stockholders. Concurrent **private placement of 313,253,007 Class N shares to AMD, Broadcom, Google, Micron, Microsoft, NVIDIA and TSMC Partners for ~$26.0B**. Total gross ~**$119.5B**. Class A began trading on Nasdaq under **"ANT"** on **2026-11-19**. Underwriters: Goldman Sachs & Co. Lead. (Announcement dated Nov 20, i.e. pre-window, but it drove the in-window coverage.)
Source: https://www.anthropic.com/news/ipo-close

### A2 — In-window IPO coverage: unusual process, banker misstep, and an AI-trade sell-off
- Reuters, 2026-11-22 12:44Z (7 pts): "SpaceX and Anthropic Ran an Unusual IPO Process" — https://www.reuters.com/world/like-spacex-anthropic-ran-an-unusual-ipo-process-chafing-some-bankers-2026-11-22/
- FT, 2026-11-22 13:35Z (3 pts): "Did Anthropic and its bankers get a key call wrong after IPO?" — https://www.ft.com/content/d501198c-14a4-4b96-8880-c3997545902e
- Bloomberg, 2026-11-22 02:27Z (9 pts / 2 comments): "Wall Street Asks What Can Save AI Trade After Anthropic Wipeout" — https://www.bloomberg.com/news/articles/2026-11-21/wall-street-asks-what-can-save-ai-trade-after-anthropic-wipeout
- Ask HN 2026-11-22 06:59Z: "Is Anthropic being public better or worse for your org?" (7 pts / 5 comments) — https://news.ycombinator.com/item?id=50597005
The original IPO thread (id 50465829) has gone quiet: 1,009 pts / 93 top-level comments, last activity 2026-11-13. The sell-off, not the IPO itself, is now the live thread.
Source: https://news.ycombinator.com/item?id=50595628

### A3 — Energy footprint of AI datacenters is the biggest AI thread of the window
"87% of the Anthropic power will come from gas and 11% from coal in 2028" — 516 pts / 594 comments, the top AI thread of the window and still climbing at 17:36Z on Nov 22. Companion piece: "AI is becoming a disaster for the climate" (49 pts / 13 comments, id 50598961). Together with the Anthropic IPO coverage this makes energy/infra the dominant narrative of the day rather than model capability.
Source: https://news.ycombinator.com/item?id=50597612
Source: https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/

---

## Reasoning, quantization and benchmark developments

### Q1 — RightNow AI: bit-identical FP4/MoE kernels for Inkling 2 Small on NVIDIA B300 (published 2026-11-22)
Open-sourced optimization of Thinking Machines' 594B MoE across 8 B300 GPUs: **0 of 599 rows differ bit-for-bit** vs 64-row-per-step reference; next-token log-prob difference vs vLLM on same model/GPUs **0.025 nats mean, 0.13 p95**; expert GEMM **5.1× faster on NVFP4, 7.5× on MXFP8** at identical bits; 10/10 kernel test suites pass on one B300 with 8 emulated ranks; reference vLLM nightly at TP 8, temp 0. Notably every kernel was written by an **AI kernel engine** (coding agents writing CUDA, running a test harness, keep-or-revert gated). Uses Blackwell `kind::mxf4nvf4.block_scale.block16`; notes AMD MI350X/MI355X lack E2M1 FP4 (MXFP4 block 32 only). Repo: github.com/RightNow-AI/inkling-b300-kernels.
Source: https://www.rightnowai.co/blog/bit-identical-fp4-moe-kernels-on-blackwell

### Q2 — lookatmyquant: quantization compiler claiming 12× lower KL than Q4_K_M at the same file size
ShinMegamiBoson's MIT-licensed tool (519 stars, 24 forks, 4 open issues, 8 open PRs) shipped 5.4 GB and 8.9 GB Inkling-2-Mini quants with better scores than the reference quants. It was the top in-window AI HN thread (539 pts / 129 comments) and the basis of Reddit's #1 daily post. The 12×-lower-KL claim is the project's own; treat as unverified third-party claim.
Source: https://github.com/ShinMegamiBoson/lookatmyquant
Source: https://news.ycombinator.com/item?id=50591853

### Q3 — Slinky-on-an-Escalator benchmark: 15 models, single-shot, deliberately anecdotal
Nishaanth Reddy's follow-up to the pelican-on-a-bicycle test: each model gets one prompt to produce a single HTML file of a rainbow slinky walking down an up-escalator with real physics, no follow-ups, reasoning effort xhigh (high if unsupported), fresh empty folder per model; 15 models from Anthropic, OpenAI and Google; agents include Codex CLI 0.167.0/0.169.1 and Claude Code 2.1.322; virtual 60 Hz clock used for timing. It surfaced on HN 2026-11-22 07:31Z with 17 pts / 5 comments — low traction, but the methodology caveats (single run, no repeats) are the point.
Source: https://morethanamachine.com/posts/slinky-escalator-benchmark/

### Q4 — FAR.AI: prefill-level jailbreaks are systematic against open-weight models
Largest empirical study to date of prefill attacks: 20+ existing and novel strategies across multiple model families and state-of-the-art open-weight models, "consistently effective against all major contemporary open-weight models". Paper dated 2026-11-10; surfaced on HN 2026-11-21 15:02Z (id 50589902, 3 pts). Pair with the micahflee write-up on using private open-weight models (HN id 50588396, 29 pts; last comment 2026-11-21 22:18Z, i.e. still active inside the window).
Source: https://www.far.ai/research/prefill-level-jailbreak-a-black-box-risk-analysis-of-large-language-models
Source: https://micahflee.com/heres-how-anyone-can-easily-use-private-open-weight-models/

### Q5 — Gemini 4 Neon reportedly solves the 2024 Bitcoin puzzle (9h19m, 103M tokens)
Author's write-up: a Gemini 4 Neon session produced the solution after **9 hours 19 minutes** and **103 million tokens** from high-level guidance ("theme of bitcoin halving, the vertical stripe, waveform"). Solution proceeds by extracting waveform peaks via a luminance threshold over the 950×950 image, decoding 8 halving sections × 32 columns. Thread on HN 2026-11-21 19:19Z (7 pts) — low HN traction, high claim magnitude.
Source: https://echo.ls/zden-level-halv/

### Q6 — "Language Models Can Rewrite Their Own Weights" now at v2
arXiv 2611.21885 v2 (updated 2026-11-18T08:57Z): an open 27B model, given its weights, its graded answers and the ability to run itself, diagnoses its own failure and rewrites its own weights with no gradients and no training; claims **+6.6 points accuracy on unseen problems**, with iterated self-testing on practice problems. HN thread id 50577265 (489 pts / 144 comments) was 2026-11-20, i.e. pre-window — flagged yesterday as a watch item, no new HN traction in-window.
Source: http://arxiv.org/abs/2611.21885v2

### Q7 — arXiv quantization/reasoning papers, most recent cycle (no new weekend submissions; latest postings are 2026-11-19)
Latest relevant preprints (arXiv's newest list still ends 2026-11-19): **2611.26619v1 TideCache** (hybrid LLM serving with transparent cache management, 2026-11-19); **2611.26592v1** "Realized versus Population Reliability: Anytime-Valid Self-Consistency Certification" (2026-11-19); **2611.26584v1** "Represented but misread: Post-training changes how language models read out what…" (2026-11-19); **2611.26590v1** "Probing the 'Conscious' Mind: Selective Access and Global Workspace in Vision-Language…" (2026-11-19). Earlier quantization cluster carried from yesterday: **2611.26358v1** Beam Model Technical Report; **2611.25717v1** VR-SparseQuant (FP4 + 2:4 sparsity on Vera Rubin); **2611.23388v1** QDA (closed-loop LLM quantization design with agents); **2611.22186v1** 4-bit quantization vs safety behaviour; **2611.21974v1** deployment-constrained mixed-precision quantization; **2611.20384v1** JointQ; **2611.20012v1** offline-first quantized AI.
Source: http://arxiv.org/abs/2611.25717
Source: http://arxiv.org/abs/2611.23388
Source: http://arxiv.org/abs/2611.26592

### Q8 — Benchmark in-window: "Harsher on Male?" gender-asymmetric moral framing
arXiv 2606.14068, HN id 50597743, 2026-11-22 04:19Z, **86 pts / 75 comments** — high comment-to-point ratio, i.e. contested results on how LLMs treat male vs female agents in moral-framing conflicts.
Source: https://arxiv.org/abs/2606.14068
Source: https://news.ycombinator.com/item?id=50597743

### Q9 — Inkling 2 Mini community benchmark claims: CyberBench parity with Opus 5.5, agentic coding below Qwen3.8-27B
Reddit reports Inkling 2 Mini tying Opus 5.5 on ValsAI CyberBench (386 pts / 84 comments weekly) while sitting below Qwen3.8-27B on agentic coding and translation (141 pts / 58 comments, 2026-11-22 14:20Z). Community self-reported benchmarks, not vendor evaluations.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y1iufw/inkling_2_mini_ties_opus_55_on_cyberbench_valsai/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y2qf66/inkling_2_mini_on_agentic_coding_and_translation/

---

## Security / supply chain (extends yesterday's thread)

### S1 — OpenRouter off-boards three providers and strips ZDR from 125 endpoints
Following the Dragos findings, OpenRouter: **off-boarded three providers**, **removed 125 endpoints from Zero Data Retention eligibility** (flagged ones plus precautionary removals), notified potentially affected customers, and is adapting the researchers' testing approach for continuous checks. Explicitly: "These findings did not show any breach or unauthorized access of OpenRouter." Provider notices collected by OpenRouter: Novita (MiniMax requests privacy notice), Phala (November preliminary incident report), Together (prompt leakage June–July 2026). "Not all affected providers have posted publicly."
Source: https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/

### S2 — Novita privacy notice dated 2026-11-22 (in-window) re MiniMax requests
Linked from OpenRouter's provider list; notice dated November 22, 2026, covering requests involving MiniMax models routed through Novita over 2026-05-28 → 2026-11-11.
Source: https://novita.ai/blog/minimax-requests-privacy-notice/

### S3 — Dragos canary-token study details
Nearly **two million** AI prompts containing unique URLs and canary credentials were sent to widely used AI services over **July–November 2026**. Three findings: (1) evidence that data from **at least three AI providers** was exposed — seeded prompts were used in attempts to reach Dragos-controlled test systems and canary AWS accounts; (2) **unauthorized access to customer prompts by inference marketplace resellers** via standard logging, no exploit needed; (3) failure to honour privacy settings/policies — prompts sent to US providers were transmitted to **Chinese AI organizations**, and seeded URLs were accessed months after a single inference request. Article dated 2026-11-19 08:00.
Source: https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens

### S4 — Together.ai prompt-leakage disclosure dated 2026-11-21
Together's security-event notice covers requests submitted in **June and July 2026**; notice dated Sat, 21 Nov 2026. (OpenRouter lists it as one of the three provider announcements.)
Source: https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026

### S5 — Phala November preliminary incident report
Listed by OpenRouter as a provider security announcement alongside Novita and Together.
Source: https://phala.com/posts/phala-november-preliminary-incident-report

### S6 — Upload2Shell (CVE-2026-125396): Ghostscript Type-1 font-loader use-after-free escaping `-dSAFER`
HN id 50592097, 2026-11-21 18:29Z, **146 pts / 73 comments**. Use-after-free in the Ghostscript Type 1 font loader crossing the `-dSAFER` sandbox; affected paths include print, email, upload, preview and ImageMagick conversions — i.e. every typical server-side document pipeline.
Source: https://pwn.ai/upload2shell
Source: https://news.ycombinator.com/item?id=50592097

### S7 — Malicious npm package backdooring Hermes Agent (still unresolved thread)
`leadstack-crm-connect` installed Hermes Agent as root and tasked it over Telegram (SafeDep). HN id 50585975, posted 2026-11-21 04:33Z (pre-window) — only 7 pts / 1 comment, no in-window traction, but it links directly to the "open-weight models / private model misuse" cluster (Q4).
Source: https://safedep.io/blog/malicious-npm-leadstack-crm-connect-hermes-agent-backdoor

### S8 — ECHR ruling on a Romanian lawyer over AI-generated citations (thread stays quiet)
European rights court barred a Romanian lawyer for two years from representing applicants over unverified AI-generated citations; HN id 50579237, 2026-11-20 18:11Z, 24 pts / 4 comments. No in-window movement.
Source: https://www.echr.coe.int/w/romanian-lawyer-barred-for-two-years-from-representing-applicants-before-the-court-over-unverified-ai-generated-citations

### S9 — OpenAI "Combatting adversarial distillation" thread goes quiet
The contested OpenAI post (34 pts, 51 replies) had **no new comments after 2026-11-21T09:35Z** — it was still outside the window at last activity, so the contested-claims thread from yesterday has not moved.
Source: https://openai.com/index/combatting-adversarial-distillation/
Source: https://news.ycombinator.com/item?id=50581242

### S10 — Open-source policy pressure: House committees flag Chinese models, Cursor may drop them
HN id 50594171 (2026-11-21 22:14Z, 3 pts / 1 comment) on CASRAI's report that Cursor may stop using Chinese open-weight models, and HN id 50591687 (2026-11-21 17:45Z, 8 pts) quoting David Friedberg ("Restricting Open Source AI Is a Path to Tyranny"). Together with the weekly r/LocalLLaMA thread "They're going to go after open weight models" (417 / 234) this is the week's second-order theme.
Source: https://casrai.org/news/house-committees-cursor-chinese-open-weight-ai-models-report-2026
Source: https://news.ycombinator.com/item?id=50594171

### S11 — Claude watermarking is observable but not verifiable (yet)
O'Reilly Radar, HN id 50595198 (2026-11-22 01:02Z, 5 pts): "Claude Watermarks Your Words, and You Can't Check Them (Yet)". Related AA/arxiv thread: "Watermark Evidence under Open-Weight LLM Modification: Exact Bounds for Low-Rank Output Watermarks" (arXiv 2611.21702).
Source: https://www.oreilly.com/radar/claude-watermarks-your-words-and-you-cant-check-them-yet/

---

## Other notable in-window threads
- "Pandex – Official European Law for AI Agents, over MCP" — 130 pts / 31 comments; a legal-registry product exposing EU legal acts to agents over MCP. Source: https://www.pandex.io
- "AI Supply Chain Security: What Canary Tokens Found" (Dragos) and "AI is becoming a disaster for the climate" (49 pts) — see S3, A3.
- "The No AI Slop Manifesto" (HN id 50595283, 7 pts) and "Y'all's idea of 'slop' is stuck in 2025" (Reddit, 834 / 337) — the anti-slop thread keeps running. Source: https://gist.github.com/dexhorthy/4cc96f01be5b1208519e75dad250a948
- "Zero Trust for AI Agents" (Anthropic resource page, HN id 50598527, 2026-11-22 11:12Z). Source: https://claude.com/resources/articles/zero-trust-for-ai-agents
- "Muru – AI-assisted Rust server for Python apps by mod_WSGI's creator" (Simon Willison, 48 pts). Source: https://simonwillison.net/2026/Nov/21/muru/
- "AI is swallowing maths. Is economics next?" (The Economist, HN id 50591808). Source: https://www.economist.com/finance-and-economics/2026/11/19/ai-is-swallowing-maths-is-economics-next
- "California Nvidia Probe Covers Potential Criminal Law Violations" (Bloomberg, HN id 50596588). Source: https://www.bloomberg.com/news/articles/2026-11-21/california-nvidia-probe-covers-potential-criminal-law-violations
- "16-year-old awarded $500k by Y Combinator for AI-guided-missile startup" (Wired, HN id 50598875). Source: https://www.wired.com/story/henrijs-dandzbergs-polemos-missiles-ai-warfare/

---

## Caveats and methodology
- Reddit's JSON/RSS endpoints returned 403/302 this run; data was obtained from the safereddit.com Redlib-style mirror of r/LocalLLaMA (top=day, top=week) and r/MachineLearning (top=week). Scores are the mirror's, which can lag reddit.com by minutes to hours.
- HN AI-share percentages depend on the keyword regex (documented in B1); a different keyword set (e.g. including "slop", "watermark", "digital center") shifts the share by a few points. Counts of total stories are exact.
- Artificial Analysis homepage and Decision Index were scraped from the Next.js payload embedded in the HTML, compared field-by-field against yesterday's saved snapshots (`home_rows_today.json`, `dec_rows_today.json` in `tmp/nov21/t2/aa/`). Yesterday's file `tmp/nov21/t2/aa/benchlm.json` does not exist (only `benchlm.json.raw`), so the BenchLM comparison used the raw snapshot, which carries the previous snapshot id — no gap.
- AA's Intelligence Index for LingSante-3.1-flash is null and its AA model page says "Proprietary" despite MIT HF weights; treat as metadata lag, not a licensing fact.
- No arXiv new-submission activity in the window (weekend): arXiv's newest listings are still dated 2026-11-19. All arXiv items cited are therefore pre-window postings whose in-window traction (HN/Reddit discussion) is what makes them relevant today.
- Vendor feeds for Qwen, xAI, Meta AI, Zhipu and MiniMax were unreachable (404/500 or JS-rendered only); a release could exist in one of those channels that this sweep missed.
- The two-day HN counts (757 + 527) include the full calendar days 2026-11-21 and 2026-11-22, not only the strict 24h window; the strict-window figure (788 stories / 215 AI-titled) is the comparable number.
