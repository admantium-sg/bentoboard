# Findings — Task 2 (community pulse + leaderboards) — window 2026-11-08T17:28Z → 2026-11-09T17:28Z

Sources for this task: Hacker News (Algolia `search_by_date` + item trees), Reddit r/LocalLLaMA and r/MachineLearning Atom feeds, Artificial Analysis (homepage payload + changelog + article), BenchLM, FMRT, BenchLeader, Hugging Face (models API + trending + newest).

## Recovery note for the 2026-11-07 → 2026-11-08 window

Yesterday's run (cache `tmp/nov08/t2/`) crashed before writing output. Its raw data was re-used, but only the parts that are actually intact:

- **Blocked Reddit captures (report honestly):** `ll_new.json`, `ll_top.json`, `ml_new.json`, `ml_top.json`, `rd_LocalLLaMA_new.json`, `rd_LocalLLaMA_top.json`, `rd_MachineLearning_new.json`, `rd_MachineLearning_top.json`, `t.json`, `rj_6a078e.json`, `rj_d2866c.json` in `tmp/nov08/t2/` are all **byte-identical 189,908-byte Reddit HTML block pages**, md5 `87dd5b9fca5f325c707a6d176b810c32`. They contain no feed content and were discarded.
- **Usable yesterday files:** `rd_LocalLLaMA_new.xml` (367,060 B), `rd_LocalLLaMA_top.xml` (126,233 B), `rd_MachineLearning_new.xml` (283,750 B), `rd_MachineLearning_top.xml` (39,807 B) are valid Atom feeds; `reddit_ll.json` / `reddit_ml.json` are parsed extracts of them and were used instead of re-fetching.
- The compact extracts named in the task brief (`reddit_ll_new_compact.txt`, `reddit_ml_new_compact.txt`, `leaderboards_compact.txt`, `hn_top_overall.txt`) **do not exist** in `tmp/nov08/t2/` — they were never written before the crash. Reconstructed directly from the raw caches instead.
- Secondary-window Reddit counts recovered: r/LocalLLaMA `new` 47 in-window items, r/LocalLLaMA `top` 44, r/MachineLearning `new` 11, r/MachineLearning `top` 11.
- Secondary-window HN: 707 stories in `hn_p0..hn_p9.json`, all inside 2026-11-07T17:28Z → 2026-11-08T17:28Z.

## Community signal

### Hacker News — in-window stories

840 stories enumerated in the primary window (`tmp/nov09/t2/hn_prim_p0..p11.json`, all 840 fall inside 2026-11-08T17:28Z → 2026-11-09T17:28Z). Keyword filter for AI/LLM relevance yields **304 candidate stories**. Top AI-relevant items by points (URL = `https://news.ycombinator.com/item?id=<id>`):

| points | comments | id | title | HN URL |
|---|---|---|---|---|
| 861 | 466 | 50415628 | Goldman Sachs is pulling Claude Code from its bankers and traders | https://news.ycombinator.com/item?id=50415628 |
| 498 | 850 | 50418975 | I'm not convinced the AI bubble exists | https://news.ycombinator.com/item?id=50418975 |
| 288 | 204 | 50416363 | How I Fight AI Brain Fry | https://news.ycombinator.com/item?id=50416363 |
| 163 | 52 | 50422628 | ChatGPT Desktop forwards your SSH agent to remote machines | https://news.ycombinator.com/item?id=50422628 |
| 162 | 36 | 50422168 | Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation | https://news.ycombinator.com/item?id=50422168 |
| 144 | 146 | 50418818 | When a language's creator and its owners strongly disagree [pdf] | https://news.ycombinator.com/item?id=50418818 |
| 105 | 110 | 50421426 | Apple capped engineers at a $200 daily AI budget | https://news.ycombinator.com/item?id=50421426 |
| 102 | 24 | 50421155 | Show HN: Flide: Make Jev-like decision models up to 9.5x faster | https://news.ycombinator.com/item?id=50421155 |
| 97 | 125 | 50415817 | Silicon Valley Promises AI Will Cure Disease. Drugmaker CEOs Aren't Buying It | https://news.ycombinator.com/item?id=50415817 |
| 65 | 11 | 50424199 | 6 Hours of YouTube and 85 handtyped pages of notes on LLM Inference – Start here | https://news.ycombinator.com/item?id=50424199 |
| 63 | 29 | 50420532 | Asahi Linux Drops MIT, Goes Full GPL After AI Used to Steal Unreleased Code | https://news.ycombinator.com/item?id=50420532 |
| 47 | 42 | 50422001 | Being a meat proxy for AI should be grounds for getting people fired | https://news.ycombinator.com/item?id=50422001 |

Highest-scoring AI-adjacent item overall in the window was `50418016` "Nvidia CEO Jensen Huang's letter to staff about affair" (896 pts, 1131 comments) — governance/safety scandal rather than a technical story; URL https://news.ycombinator.com/item?id=50418016. Related: `50416801` "Statement from Nvidia board of directors" (486/371, https://news.ycombinator.com/item?id=50416801), `50416679` "Nvidia Board to Probe Spying Case After CEO Admits Affair" (41/12, https://news.ycombinator.com/item?id=50416679).

Additional items with cached comment trees (not in the top-points list above but materially relevant):

- `50422069` — "Is Opus 5.5 nerfed? Thinking patterns changed on November 3" (382 pts, 284 comments) — the single most-discussed model-behaviour story of the window. Source: https://twitter.com/shanemelaugh/status/2119192075505893695. Verbatim: *"As one user pointed out: > I noticed this too as did many others. Had to bump my default reasoning but it's not the same. Seems to often happen before new model drops I heard th…"* — commenter `Retro_Dev`. Counter-position: *"This has happened to consistently across OpenAI and Anthropic models that I can't believe people are still denying it. Obviously they are silently quantising their models…"* — commenter `Gareth321`. Other threads in the tree argue for infrastructure constraints and harness changes rather than a real model change.
- `50427085` — "The same H100 costs $2.69 or $12.29 an hour depending where you rent it" (78 pts, 44 comments), source https://github.com/datarececeipts/data-receipts/tree/main/109-gpu-pricing. Verbatim: *"runpod is incredible, im a big fan, but good luck with availability on any specific GPU above 20gb of vram when you actually want to use it…"* — `jdc0589`.
- `50424199` — "6 Hours of YouTube and 85 handtyped pages of notes on LLM Inference" (65 pts, 3 comments). Verbatim: *"I filmed over 6+ Hours of footage and hand wrote 85+ pages of notes to teach absolute beginners about AI Inference…"* — `samirswr`.
- `50421155` — Flide (Jev-like decision-model inference, "up to 9.5x faster than vLLM and SGLang"). Verbatim: *"Under what specific circumstances is it actually 9.5x faster? Are there any circumstances where it is just about as fast as something like vLLM?"* — `rytill`.
- `50418975` — bubble discussion. Verbatim: *"The only modification I'd make is to amortize the investments over 5-6 years instead of 20 because most of the cost is GPUs not the buildings…"* — `wmf`.
- `50420532` — Asahi Linux relicensing. Commenters pointed to the primary source https://asahilinux.org/2026/11/progress-report-7-3/ and criticised the submitted secondary source (`rvz`: *"This is a terrible source, riddled with ads and unreadable."*). Original discussion: https://news.ycombinator.com/item?id=50401867.
- `50415628` — Goldman Sachs / Claude Code. Commenters challenged the source chain (`MallocVoidstar`: *"Original source appears to be Bloomberg via … fa-mag.com"*; `anon7725`: *"somehow that 'State of AI' site skates right past uBlock - weird."*).
- `50422628` — ChatGPT Desktop SSH-agent forwarding. Security mitigation advice: *"I'd suggest to use ssh keys inside the secure enclave on macOS that require your fingerprint for every new session"* — `littlecranky67`; Yubikey touch-to-auth — `bradfa`.
- `50421426` — Apple $200/day AI cap. *"FTA (emphasis added: Apple has reportedly slashed the daily AI spending limit for SOME of its own engineers, dropping the cap from $300 down to $200"* — `Someone`.
- `50415817` — AI in drug discovery. *"Translation … 'Drugmaker CEOs plan to use AI to 'manage disease' not 'cure' it.'"* — `Kevin_Flynn`; `zzzeek` pushes back on the framing.
- `50422001` — "meat proxy" for AI. *"But in any case, we are all heading there? Eventually, a SWE will be 'a nice smart person that's more pleasurable for the manager to speak to than LLM itself'."* — `anovikov`.

### Reddit r/LocalLLaMA

Feed: `tmp/nov09/t2/ll_new100.xml` (100 entries, **46 in-window**); `ll_top.xml` (25 entries, **0 in-window** — its newest item is 2026-11-05); `ll_new.xml` (25 entries, 24 in-window but fully overlapping the 100-item capture). Distinct in-window r/LocalLLaMA items: **46**. Representative, with permalinks:

- 2026-11-08T17:32 — "GPT-5.5 dataset across my used 25 billion tokens!" — https://www.reddit.com/r/LocalLLaMA/comments/1xr3ymf/gpt55_dataset_across_my_used_25_billion_tokens/
- 2026-11-08T19:19 — "Next-Concept Modeling: Fast, Parallel Coarse-to-Fine Text Generation: This will completely change everything!" — https://www.reddit.com/r/LocalLLaMA/comments/1xr6krp/nextconcept_modeling_fast_parallel_coarsetofine/ (body: *"Essentially we could very soon run opus 5.5 level of intelligence on 32gb Vram."*)
- 2026-11-08T19:45 — "Kimi-K3.1-Pro-Coder (2.8T) | 1.77 TB -> 775 GB (-56%) | 36.8 TPS (Batch) / 10.8 TPS on 1x Blackwell" — https://www.reddit.com/r/LocalLLaMA/comments/1xr777l/kimik31procoder_28t_177_tb_775_gb_56_368_tps/
- 2026-11-08T22:17 — "Nous Research Arete-27B GGUF quants" — https://www.reddit.com/r/LocalLLaMA/comments/1xrarta/nous_research_arete27b_gguf_quants/
- 2026-11-08T22:19 — "How much code do AI models and harnesses add? I made an open-source benchmark to measure code complexity." — https://www.reddit.com/r/LocalLLaMA/comments/1xrathc/how_much_code_do_ai_models_and_harnesses_add_i/
- 2026-11-09T09:49 — "which model would you use to manage your gmail inbox?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrnmso/which_model_would_you_use_to_manage_your_gmail/
- 2026-11-09T11:32 — "New Gemma Models" — https://www.reddit.com/r/LocalLLaMA/comments/1xrpcke/new_gemma_models/ (author /u/Bowdenzug asking for insider info on upcoming Gemma; single-user speculation, not a release signal)
- 2026-11-09T15:24 — "Top 7 Decision Models Benchmark: Evaluation Across 2,826 Real Tech Decisions" — https://www.reddit.com/r/LocalLLaMA/comments/1xruhp3/top_7_decision_models_benchmark_evaluation_across/ (body excerpt: *"Perplexity Decider V1.2 ranks as the strongest overall recommendation… open-source licensing. Nace Dre…"* — truncated)
- 2026-11-09T15:40 — "Weight-space programming: editing Qwen3.5 into a top decision model" (/u/facethef) — https://www.reddit.com/r/LocalLLaMA/comments/1xruwlf/weightspace_programming_editing_qwen35_into_a_top/
- 2026-11-09T15:43 — "Drummer's Orion 26B A4B v1 and v1.1! … Plus a new project from yours truly." — https://www.reddit.com/r/LocalLLaMA/comments/1xruzry/drummers_orion_26b_a4b_v1_and_v11_plus_a_new/ (body links https://huggingface.co/TheDrummer/Orion-26B-A4B-v1.1 and …/Orion-26B-A4B-v1, plus BeaverNet at net.beaverai.org)
- 2026-11-09T17:29 — "ConceptCountry/qwen-concept-27b · Hugging Face" (/u/Thrumpwart) — https://www.reddit.com/r/LocalLLaMA/comments/1xrxwg1/conceptcountryqwenconcept27b_hugging_face/ — **posted 2026-11-09T17:29:27Z, i.e. 87 seconds after the window closed**, so it is reported as adjacent-to-window, not in-window.
- 2026-11-09T11:50 — "Anyone else given up waiting for Qwen4?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrpo1y/anyone_else_given_up_waiting_for_qwen4/ (single-user report of release fatigue)
- 2026-11-09T15:08 — "Anyone else trusted bro and got duped?" — https://www.reddit.com/r/LocalLLaMA/comments/1xru36u/anyone_else_trusted_bro_and_got_duped/ (body: *"I woke up and no Qwen 4 Flash. So sad."* — single-user report)

Note on permalinks: the Reddit Atom feed exposes both a `<link href>` and a `content` link; for several entries these differ. Every item above is listed with the `content` href, which for all checked entries matched the `<link href>`.

### Reddit r/MachineLearning

Feed: `tmp/nov09/t2/ml_new100.xml` (100 entries, **10 in-window**); `ml_new.xml` and `ml_top.xml` are **0 bytes** (Reddit block page) — a fetch failure, reported as such. Distinct in-window r/MachineLearning items: **10**.

- 2026-11-08T17:43 — "I merged attention and MLP processing into a single gated Transformer block. GAP [R]" — https://www.reddit.com/r/MachineLearning/comments/1xr47tw/i_merged_attention_and_mlp_processing_into_a/
- 2026-11-08T17:54 — "Artificial Analysis: multimodal decision model Drex Max ranks #1. Both achieving SOTA and Pareto frontier [N]" — https://www.reddit.com/r/MachineLearning/comments/1xr4hkm/artificial_analysis_multimodal_decision_model/
- 2026-11-08T21:16 — "Continual retention across 6 streams [R]" — https://www.reddit.com/r/MachineLearning/comments/1xr9d9y/continual_retention_across_6_streams_r/
- 2026-11-09T00:30 — "LoRA-conditioned model skips the first line of its output when the caption is short. Any idea why? [D]" — https://www.reddit.com/r/MachineLearning/comments/1xrdn7p/loraconditioned_model_skips_the_first_line_of_its/
- 2026-11-09T03:41 — "Can coding agents build interactive 3D worlds? Frontier3DBench evaluates 11 configurations across objects, sce…" — https://www.reddit.com/r/MachineLearning/comments/1xrhg3a/can_coding_agents_build_interactive_3d_worlds/
- 2026-11-09T09:22 — "I tried to reproduce 'lost in the middle' on current models and actually couldn't do that! [P]" — https://www.reddit.com/r/MachineLearning/comments/1xrn7lo/i_tried_to_reproduce_lost_in_the_middle_on/
- 2026-11-09T15:30 — "Using latent-agent swarms for math discovery and optimization [R]" — https://www.reddit.com/r/MachineLearning/comments/1xrunu7/using_latentagent_swarms_for_math_discovery_and/
- 2026-11-09T15:52 — "EACL 2027 Decisions Thread [R]" — https://www.reddit.com/r/MachineLearning/comments/1xrv8mp/eacl_2027_decisions_thread_r/

Non-AI-noise in-window ML items: MLSys 2027 reviewer assignments, Amazon applied-science intern interview, NeurIPS camera-ready deadline extension.

**Total distinct in-window Reddit items: 56** (46 r/LocalLLaMA + 10 r/MachineLearning).

### New model release(s) surfaced in-window and independently confirmed

Strictly inside the window, **no new base-model weight release could be confirmed** — the HF newest-100 capture (`hf_created.json`) contains 81 in-window creations, all of them 0-download/0-like noise (fine-tunes of BERT, GGUF conversions, test repos, LoRAs). Verified via the HF models API.

Releases/artifacts that *surfaced* in-window but were created before it:

1. **`ConceptCountry/qwen-concept-27b`** — HF API: created **2026-11-08T16:39:43Z**, i.e. **48 minutes BEFORE the window opened** (window start 2026-11-08T17:28Z); last modified 2026-11-08T18:00:55Z; 58 downloads, 6–8 likes; tags `weight-editing`, `reasoning`, `base_model:Qwen/Qwen3.8-27B`; license apache-2.0. README claim (verbatim, self-reported, **not independently verified**): *"Qwen3.8-27B with nine down-projections rewritten by weight-space programming… GPQA Diamond +4.3 [+1.8, +7.1], LiveCodeBench v6 +13.0, with thinking tokens down 27-54%."* Paper/code: https://concept.country/research/weight-space-programming. URL: https://huggingface.co/ConceptCountry/qwen-concept-27b. Surfaced on Reddit 2026-11-09T17:29:27Z (/u/Thrumpwart) — 87 seconds after the window closed: https://www.reddit.com/r/LocalLLaMA/comments/1xrxwg1/conceptcountryqwenconcept27b_hugging_face/ **Report as a pre-window creation whose discussion landed in-window.**
2. **`tencent/Qwen3.8-27B-DSpine-b16`** — created 2026-11-07T14:20:29Z (pre-window, secondary window), 1,464 downloads / 141 likes, last modified 2026-11-09T09:26:40Z. Reddit post 2026-11-08T16:23Z ("Tencent has developed a new speculative decoding method. 3x faster decoding for 27B models?"). URL: https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16. Derivative in-window uploads: `haiping/Qwen3.8-27B-DSpine-b16-nvfp4` (2026-11-09T17:16:12Z, 0 downloads), `qwegnai/Qwen3.8-27B-DSpine-b16-hq4g32` (2026-11-09T17:11:19Z).
3. **`NousResearch/Arete-27B`** — created 2026-11-06T19:31:28Z, **pre-window** (already reported 2026-11-07); now trending #8 with 2,407 downloads / 341 likes; GGUF quants posted to Reddit 2026-11-08T22:17Z. Not a new release.
4. **`meituan-longcat/LongCat-2.5`** — created 2026-11-04T11:48:50Z, pre-window; posted to Reddit 2026-11-09T14:14Z ("A 1.6T multimodal model."); 39 likes, 0 downloads, last modified 2026-11-09T11:38:03Z. Not a new release.
5. **`netease-youdao/Confucius4-R2T2`** — created 2026-09-10, pre-window; posted to Reddit 2026-11-09T14:13Z; 46,552 downloads / 595 likes. An old model re-surfacing on Reddit, **not** a new release.
6. **`TheDrummer/Orion-26B-A4B-v1.1`** — HF API: created 2026-09-13T14:19:18Z, last modified 2026-11-05T12:23:31Z — **pre-window**; announced on Reddit in-window (2026-11-09T15:43Z).
7. **BenchLeader release-watch items dated 8 Nov 2026** (`https://benchleader.ai/releases`): `LFM2.5-24B-A2B` (Liquid AI) and `LFM3-1.7B` (Liquid AI) "first measured 8 Nov 2026 — awaiting results"; plus a chip labelled **"o3 + GPT-4.1" — 8 Nov** on the "New AI model releases this week" row (https://benchleader.ai/models/o3-plus-gpt-4-1). The "o3 + GPT-4.1" entry is a BenchLeader composite slug with **no matching row in the model table**; its meaning is **unverified**. The LiquidAI weights themselves are old (`LFM2.5-24B-A2B` created 2026-10-12, `LFM3-1.7B` created 2026-10-23) — the in-window event is *first measurement*, not release.
8. **`Agnes 2.5 Pro Theta`** (Sapiens AI) — released **7 Nov 2026** (pre-window); the in-window event is the **evaluation publication** (AA changelog 08 Nov 2026, BenchLeader entry 9 Nov). Not an in-window release.
9. **Next-Concept Modeling (arXiv:2610.14162)** — a *paper*, not a model release; arXiv id 2610 = October 2026, surfaced in-window on HN (2026-11-09T07:20:37Z) and Reddit (2026-11-08T19:19Z). Abstract verbatim: *"NCM achieves better generative perplexity than the strongest DLM baseline on LM1B while running $21\times$ faster. On OpenWebText, it is competitive with the strongest DLM while running $10\times$ faster; on XSum, it matches the strongest DLM's ROUGE-L while being $31\times$ faster."* URL: https://arxiv.org/abs/2610.14162.

**Distinct new models/releases confirmed in-window: 0** (no new base-model weights). In-window *new artifacts* independently confirmed: **2** — (a) AA Decision Index v2 evaluation suite + article published 08 Nov 2026, (b) Agnes 2.5 Pro Theta evaluation results published 08 Nov 2026. A third in-window artifact, the qwen-concept-27b weight edit, is confirmed to exist but its creation timestamp is pre-window.

## Leaderboard changes

### Artificial Analysis — Intelligence Index

Roster extracted from the AA homepage payload (`aa_home.html`, 56 Intelligence Index entries parsed). **No roster change and no score change** between `tmp/nov08/t2/aa_home.html` (8 Nov snapshot) and `tmp/nov09/t2/aa_home.html` (9 Nov snapshot): 0 added, 0 removed, 0 value changes (compared to full float precision). Top of the roster on 9 Nov:

| # | model | Intelligence Index |
|---|---|---|
| 1 | Gemini 4 Carbon | 60.025738829526 |
| 2 | Claude Opus 5.5 | 59.1060336078904 |
| 3 | GPT-6 Astra | 56.8538559596797 |
| 4 | GPT-6.1 Sol | 54.6087338138148 |
| 5 | Claude Sonnet 5.5 | 54.54133407109 |
| 6 | GPT-6.1 Terra | 51.3265188577015 |
| 7 | Muse Wonder Full | 50.0772123627021 |
| 8 | Claude Fable 5.1 | 49.1602124158081 |
| 9 | Kimi K3.1 Pro | 46.4526236744189 |
| 10 | Muse Wonder | 43.5748225998431 |

Remaining parsed values (11→20): 36.4845435880142, 35.4850117067196, 34.5552385392508, 33.6545627367888, 32.5896393532027, 31.653381843882, 30.8468119957291, 30.6286781498958, 29.8897833093321, 29.570119369837.

**Decision Index v2 — the substantive AA item of the window.** Article published **November 8, 2026**: "Introducing the Artificial Analysis Decision Index v2" (https://artificialanalysis.ai/articles/introducing-the-artificial-analysis-decision-index-v2). Changes: 45% of the Index is now built on private datasets (up from 25% in v1); new headline **Decision Score** metric rewarding correctness *and* calibrated confidence, per-question score `50 × (1 + c − (p − c)²)`; new private benchmark **AA-Paperclip** (30%, 1,500 documents, 15 answers each, all-or-nothing); new **AA-Symmetry** (15%, 120 questions × rewordings); AA-Omniscience-Decision v1.1 and HLE-MultiChoice v1.1 at 15% each (down from 25%); **EvalSafe-O*NET-AA** (15%) added; NVIDIA When2Call retained at 10% (down from 25%); **WildGuardTest removed** for saturation. Results (verbatim): *"Drex Max v1.1 from Nace AI and GLiDE v1.2 from Fastino Labs both score 73, with Mammoth 27B from Base Labs scoring 72"*; *"Claude Haiku 5.5 (Max) scores 77 and GPT-6 Luna (Max) scores 76 on Decision Index v2"*; cost spread *"varies by more than 60x"* — Celeris-1.1 Decision ($14), Decider v1.2 ($68), Drex Max v1.1 ($102), Clef ($859); *"GLiDE v1.2 costs $780, nearly 8x higher than Drex Max v1.1 despite only 33% higher list prices"*; *"GPT-6 Luna (Max) costs $1,530 per 1M Tasks vs. $102 for Drex Max v1.1 (15x the cost) and takes 11.34 seconds per task vs. 275 milliseconds (~40x slower)"*. URL: https://artificialanalysis.ai/articles/introducing-the-artificial-analysis-decision-index-v2.

AA changelog delta (`aa_changelog_new.txt` vs `aa_changelog_old.txt`), full diff of the two cached files: one new dated block, **08 Nov 2026** — "🔔 New article published / Introducing the Artificial Analysis Decision Index v2" and "New language model evaluation results available / Agnes 2.5 Pro Theta / Intelligence Index: 24 / Agnes AI / performance results now available / Agnes 2.5 Pro Theta". The only other diff hunk is a truncation artifact at the tail of the older capture (Kimi K3.1 Pro / Nemotron 3.5 Bolt E4B 4GB (Reasoning) / DeepSeek V4.1 Flash 1017 (Max) entries fall off the end of the newer extract, not a deletion upstream). **No 09 Nov 2026 changelog entry exists** as of capture. Changelog URL: https://artificialanalysis.ai/changelog.

Note: AA's **public data endpoints return HTTP 410**, so all extraction above relies on the homepage payload and the rendered article text. Scores are point estimates with overlapping intervals.

### BenchLM

`tmp/nov09/t2/benchlm.json` vs `tmp/nov08/t2/benchlm.json` (md5 `061d8082bb2b6ff5c4cbadfbffdbd513` vs `b162debbd7e47b974c4894af4dac21a7`): **the entire diff is metadata.** Every model's rank and `overallScore` is byte-identical.

- `lastUpdated`: `2026-11-07` → `2026-11-09`
- `sourceSnapshotId`: `2026-11-07-8d3e46af35e8fc5d` → `2026-11-09-5e530c42bd5282c3`
- `methodologyVersion`: `bench-align-v5.8-2026-09-30` (unchanged)

So BenchLM registered a fresh upstream snapshot without any reordering of its own ranking. BenchLM: https://benchlm.ai/ (methodology version string as cached).

### FMRT

FMRT (https://fmrt.ai, methodology https://fmrt.ai/#method) snapshot moved from `generatedAt 2026-11-07T13:09:52.034Z` (588 motions) to `generatedAt 2026-11-09T06:56:47.890Z` (594 motions) — +6 motions, **no models added and none removed**. Five rank changes, all within overlapping 95% CI (so all are noise-level shuffles):

| model | old rating [CI] | new rating [CI] | old rank → new rank |
|---|---|---|---|
| Claude Fable 5.1 | 1918.6 [1846.9, 1994.4] | 1916.1 [1845.2, 1993.8] | 1 → 1 (win 80%) |
| Claude Opus 5.5 | 1917.4 [1837.5, 1999] | 1915.6 [1842.4, 2000.9] | 2 → 2 (win 77%) |
| Kimi K3.1 Pro | 1783.3 [1696.8, 1864] | 1781.9 [1705.6, 1865.8] | 3 → 3 (win 71%) |
| Muse Wonder | 1636.9 [1573.2, 1691.8] | 1636.2 [1575.3, 1695.4] | 6 → **4** (win 57%→58%) |
| Kimi 3 (open weights) | 1640.3 [1559.1, 1708.2] | 1635.8 [1562.2, 1703.3] | 4 → **5** (win 61%) |
| Gemini 4 Argon | 1640.1 [1570.2, 1707.1] | 1633.2 [1567.1, 1696.7] | 5 → **6** (win 61%) |
| Grok 4.7 | 1632.2 [1566.9, 1693.9] | 1626.8 [1561.3, 1685.4] | 7 → 7 (win 59%) |
| GLM 5.3 | 1619.6 [1550.3, 1678.5] | 1617.9 [1551.7, 1683.8] | 8 → 8 (win 56%) |
| MiniMax M3 | 1420.5 [1342.8, 1481.6] | 1414.7 [1335.7, 1477.9] | 14 → 15 |
| Qwen 3.8 Max | 1419.8 [1343.2, 1480.1] | 1415.8 [1338.3, 1479.5] | 15 → 14 |
| GPT-6 Astra | 1538.7 [1479.7, 1597.2] | 1528.1 [1465.7, 1589.4] | 9 → 9 |
| DeepSeek V4.1 Flash 1017 | 1492.9 [1405.9, 1566] | 1500.0 [1415.4, 1574.4] | 11 → 11 |
| Kimi K3.1 Pro · low effort | 1708.4 [1612.6, 1804.3] | 1687.0 [1592.1, 1778.3] | unranked |
| DeepSeek V4 Pro 0813 · size test | 1412.7 [1296, 1509.4] | 1421.8 [1306.9, 1527.9] | unranked |

Largest absolute rating move: Kimi K3.1 Pro · low effort −21.4. Every one of these intervals overlaps the previous interval, so **no FMRT movement is statistically meaningful**.

### BenchLeader

BenchLeader (https://benchleader.ai/) rebuilds once a day, run starts 22:03 UTC. Diff of the 8 Nov vs 9 Nov digests (`bl_old.txt` → `bl_new.txt`):

- models ranked **333 → 334**; configurations ranked **593 → 594**; benchmarks **255** from **46** publishers (78 of them feed the index), unchanged; data feeds live **28/28**.
- **NEW: Agnes 2.5 Pro Theta (Sapiens AI)** — released 7 Nov 2026, 6 benchmark results, BenchLeader Index **51.2**, entering at **#316**.
- **#1–4 unchanged:** Claude Opus 5.5 69.4 · Gemini 4 Carbon 69.3 · GPT-6 Astra 68.3 · Claude Fable 5.1 67.3.
- #5 GPT-6.1 Sol 67.3 → **67.2** (▼ 0.1); #7 Gemini 4 Argon 66.1 → **66.0** (▼ 0.1).
- #9 Claude Sonnet 5.5 65.4 → **65.5** (▲ 0.1), overtaking Claude Opus 5 (65.4, ▼ 0.1) at #10.
- Release watch: LFM2.5-24B-A2B and LFM3-1.7B (Liquid AI) first measured 8 Nov 2026, awaiting results; Agnes 2.5 Pro Theta 7 Nov; Inkling 2 Small 5 Nov.
- Digest index: https://benchleader.ai/blog/digest-2026-11-09 ("Agnes 2.5 Pro Theta added"); weekly https://benchleader.ai/blog/week-2026-11-08.
- BenchLeader's own framing: *"25 configurations sit within Claude Opus 5.5's margin of error"* — the ±0.1 index moves are inside the noise band.

### Hugging Face trending

`hf_trend.json` (top-25, 9 Nov) vs `hf.json` (top-25, 8 Nov snapshot). Entered the list: `Scantist/GLM-5.3-SLIM-GGUF` (7,884 dl / 1,294 likes, score 183.5), `PrunaAI/P-H3-Image` (1,016 / 183, 177), `baidu/ERNIE-5.5-Flash-Base` (1,699 / 236, 172), `mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF` (217,408 / 205, 167). Left the list: `burner22/numbat`, `deepseek-ai/DeepSeek-V4.1-Flash-1017`, `Pika-Labs/Pika-H3-Flex`, `ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF`.

Notable rank moves: `NousResearch/Arete-27B` 12 → **8** (2,407 dl / 341 likes — pre-window release, momentum only); `ricursiveAI/Ripple-65B-Preview` 6 → 4; `Qwen/Qwen3.8-27B` 7 → 9; `ccore/Qwen3.5-4B-3D-Coder` 4 → 6; `FusionCow/Sulphur-3` 8 → 22; `LiquidAI/LFM3-1.7B` 19 → 25. Current #1 `speridlabs/idol` (24,747 dl / 1,557 likes) is an image-to-3D gaussian-splatting model, not an LLM — trending is dominated by image/video and GGUF-derivative repos rather than new LLMs.

HF noise flagged and excluded from "new release" claims: `mradermacher/Second-1.0-2B-GGUF` (2026-11-09T17:33:03Z, 0 downloads) and `cassimahmedattia/GLM-5.3-CYBERSECURITY-FP8` (2026-11-09T17:28:20Z, 0 downloads, tags abliterated/crack/refusal-removed).

## Disputed / notable negative signals

- **Model behaviour change without a release** — HN `50422069` (382 pts / 284 comments), https://news.ycombinator.com/item?id=50422069: users report Claude Opus 5.5 thinking patterns shifted on November 3. Two camps: silent quantization / capacity-constrained serving (`Gareth321`) vs. harness, infrastructure or user-side confounders. **Single-thread anecdote set — no vendor confirmation, and the underlying claim is unverified.**
- **Silent capability/capability-adjacent restriction** — Goldman Sachs pulling Claude Code from bankers and traders (HN `50415628`, 861/466, https://news.ycombinator.com/item?id=50415628). The submitted chain (fa-mag.com relaying Bloomberg) was challenged in-thread as AI-written/slop; the underlying event is reported, the sourcing is contested.
- **Credential exposure by agent tooling** — Claude Code "Don't Ask Again" exposing passwords in 1,122 public GitHub files (secondary window, HN `50407882`, 504/366, https://news.ycombinator.com/item?id=50407882, source https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-).
- **Agent credential forwarding** — ChatGPT Desktop forwards your SSH agent to remote machines (HN `50422628`, 163/52, https://news.ycombinator.com/item?id=50422628). In-thread mitigation advice points to Secure-Enclave SSH keys and Yubikey touch-to-auth.
- **AI-assisted code theft** — Asahi Linux drops MIT, goes full GPL after AI was used to steal unreleased code (HN `50420532`, 63/29, https://news.ycombinator.com/item?id=50420532); primary source https://asahilinux.org/2026/11/progress-report-7-3/, original discussion https://news.ycombinator.com/item?id=50401867.
- **Budget caps on internal AI use** — Apple capped some engineers at a $200/day AI budget (HN `50421426`, 105/110, https://news.ycombinator.com/item?id=50421426), reported as $300 → $200 for *some* engineers.
- **Bubble skepticism cutting both ways** — HN `50418975` (498/850) and HN `50424704` "Humans will never again create a project like Wikipedia" (421/356, https://news.ycombinator.com/item?id=50424704); plus `50422001` (47/42, https://news.ycombinator.com/item?id=50422001) on human "meat proxy" roles for AI.
- **AI hype vs. pharma reality** — HN `50415817` (97/125): *"Drugmaker CEOs plan to use AI to 'manage disease' not 'cure' it."* In-thread pushback (`zzzeek`) that the framing is itself the gotcha.
- **Reproducibility negative result** — r/MachineLearning, 2026-11-09T09:22Z: "I tried to reproduce 'lost in the middle' on current models and actually couldn't do that! [P]" (https://www.reddit.com/r/MachineLearning/comments/1xrn7lo/i_tried_to_reproduce_lost_in_the_middle_on/) — single-user report.
- **Release fatigue / broken promises** — r/LocalLLaMA: "Anyone else given up waiting for Qwen4?" (2026-11-09T11:50Z) and "Anyone else trusted bro and got duped?" ("I woke up and no Qwen 4 Flash.") — both single-user reports. Also "Do you think Qwen4 Plus will be open weights?" (2026-11-08T11:36Z, secondary window) and "New Gemma Models" (2026-11-09T11:32Z) asking for insider info — speculation, no release.
- **Benchmark gaming as a systemic concern** — AA's own Decision Index v2 explicitly reweights toward private data (45% vs 25%) and drops WildGuardTest for saturation, which is an institutional admission that public benchmarks are saturating.
- **Vendor capacity constraint** — Anthropic strikes $3.4B deal to generate gas-fired power for data centres (secondary window, HN `50412760`, 30/20).

## Coverage limitations

- **Reddit blocking:** `ml_new.xml` and `ml_top.xml` in `tmp/nov09/t2/` are 0 bytes; yesterday's `*.json` Reddit captures are byte-identical 189,908-byte block pages (md5 `87dd5b9fca5f325c707a6d176b810c32`). Only the Atom feeds `ll_new100.xml`, `ll_new.xml`, `ll_top.xml`, `ml_new100.xml` and yesterday's `rd_*.xml` / `reddit_*.json` yielded real content. r/MachineLearning therefore has only a 100-item "new" capture and **no in-window top-of-feed coverage**; r/LocalLLaMA `ll_top.xml` had 0 in-window items (newest 2026-11-05).
- **Reddit depth:** feed entries expose title/author/timestamp/link only — no score or comment counts. No comment bodies were retrieved, so Reddit signals are single-post, not community-weighted. The four compact extracts referenced in the task brief do not exist on disk.
- **HN comment trees:** only 12 items have cached item JSON (`hnitem_50415628/50415817/50416363/50418975/50420532/50421155/50421426/50422001/50422069/50422628/50424199/50427085`); quoted comments are from those trees only. Algolia item records carry `created_at`/`points`/`num_comments`/`children` — they do **not** carry `score`, `kids` or `time` (earlier `KeyError: 'time'` / `TypeError` on `NoneType` subtraction came from assuming those fields).
- **AA:** public data endpoints return **HTTP 410**; extraction relies entirely on the homepage payload plus rendered article text. The Intelligence Index roster comparison is limited to the 56 entries embedded in the homepage payload. AA scores are point estimates with overlapping intervals.
- **FMRT:** the two snapshots are 46 hours apart, not 24; movements are within 95% CI and should be treated as noise.
- **BenchLM:** no score/rank deltas exist between the 7 Nov and 9 Nov snapshots — only `lastUpdated` and `sourceSnapshotId` moved, so the 9 Nov refresh produced no visible ranking change.
- **BenchLeader:** rebuilds once daily (22:03 UTC); the 9 Nov digest reflects the rebuild, not continuous updates. The "o3 + GPT-4.1" chip dated 8 Nov has no corresponding row in the model table and its semantics are **unverified**.
- **Hugging Face:** `hf_created.json` newest-100 covers only the final ~28 minutes of the window (17:06–17:34Z); an ad-hoc paginated pull of `?sort=createdAt&direction=-1` (1000/page, 12 pages) found no in-window creation with >0 downloads or >0 likes beyond the items listed above. HF has no release-event feed, so "released" claims rest on repo `createdAt` + announcement timing.
- **Model release confirmation:** self-reported benchmark claims (qwen-concept-27b's GPQA/LiveCodeBench deltas; NCM's 21×/10×/31× speedups) are **unverified** — no independent re-evaluation was available in-window.
