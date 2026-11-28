# Task 2 findings — 2026-11-16 (window 2026-11-15T17:28Z → 2026-11-16T17:28Z)

**Scope.** Community signals (HN, Reddit), leaderboard state (AA, BenchLM) and model releases, computed **only from artifacts cached on disk** in `tmp/nov16/t2/`. **0 `web_search` / 0 `web_fetch` calls**.

**Window.** `2026-11-15T17:28:00Z` → `2026-11-16T17:28:00Z` (Unix `1794763680` → `1794850080`). Every item below falls inside it; HN is exhaustive over it.

**Baselines.** `tmp/nov15/t2/aa_ii_home.json` (28-row AA set), `tmp/nov15/t2/aa_decision.json` (26-row Decision Index set), `tmp/nov15/t2/benchlm.json` (50 rows), `findings_nov15_task2.md`, `last_check.json`.

**Raw artifacts** (in `tmp/nov16/t2/`): `hn_p0.json` (418 hits), `hn_p1.json` (672), `hn_all.json` (1090), `ai_ids.json` (291), `aa_home.html`+`aa_payload.txt`, `aa_rows_all.json`, `aa_decision_rows.json`, `benchlm.json`, `hf.json`, 2 Reddit RSS files.

---

## 1. Hacker News

### 1.1 Coverage and AI share

| Metric | 2026-11-15 window | **2026-11-16 window** | Δ |
|---|---|---|---|
| Unique stories (objectID-dedup) | 746 | **1090** | +344 |
| AI-relevant stories (identical rule) | 196 | **291** | +95 |
| **AI share** | **26.3 %** | **26.7 %** | **+0.4 pp** |
| AI share of overall top-50 by points | 20.0 % (10/50) | **20.0 % (10/50)** | 0 pp |

Method: `hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1794763680,created_at_i<1794850080`, split into two 12 h pages (418 + 672 hits). `nbHits` equals the hit count on both pages, so the enumeration is **exhaustive**; the pages do not overlap (0 shared objectIDs). AI relevance = yesterday's rule, unchanged: title matches a word-bounded pattern in `tmp/nov15/t2/ai_kw.txt` **or** URL host matches the curated list in `tmp/nov15/t2/filter2.py`.

**Rule blind spot (flagged, not silently patched).** The strict rule **misses the window's #1 story overall**: **"Qwen4-Max" — 790 pts / 413 comments** — https://news.ycombinator.com/item?id=50513215 → https://qwen.ai/blog?id=qwen4-max — because `(?i:\bQwen\b)` does not match `Qwen4-Max` and the host list has `qwenlm` but not `qwen.ai`. Adjusted: **292 / 1090 = 26.8 %**; a looser sensitivity run (adding ~18 common AI words) gives **299 / 1090 = 27.4 %**, adding only *Hy4 Flash* (5 pts, https://news.ycombinator.com/item?id=50517032) and *Qwen4 Max: Intelligence, Performance and Price Analysis* (3 pts, https://news.ycombinator.com/item?id=50514401). One **false positive**: item #13 matched on "computer use".

### 1.2 Top AI-relevant stories by points (strict rule, unchanged)

| # | Pts | Com | Title | HN URL | Article URL |
|---|---|---|---|---|---|
| 1 | 410 | 520 | What's Next for Nvidia? | https://news.ycombinator.com/item?id=50512235 | https://steveblank.com/2026/11/15/whats-next-for-nvidia/ |
| 2 | 173 | 173 | Jensen Huang might return to Nvidia as CEO | https://news.ycombinator.com/item?id=50511982 | https://www.reuters.com/world/china/jensen-huang-discusses-comeback-nvidia-ceo-with-allies-ft-reports-2026-11-15/ |
| 3 | 128 | 128 | Jensen Huang discusses comeback as Nvidia CEO with allies | https://news.ycombinator.com/item?id=50509883 | https://www.ft.com/content/45383d86-33c4-4d99-86e5-5e058d3567c1 |
| 4 | 104 | 73 | Nvidia Was in Trouble Before the Jensen Huang Mess | https://news.ycombinator.com/item?id=50518567 | https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/ |
| 5 | 93 | 79 | "Who is Hiring?" postings stuck near 12-year lows as AI reaches half of all jobs | https://news.ycombinator.com/item?id=50512950 | https://www.hntrends.com/2026/november.html |
| 6 | 75 | 61 | Your Agent Will Pick the Hackable One | https://news.ycombinator.com/item?id=50510799 | https://geoffstearns.com/blog/your-agent-will-pick-the-hackable-one/ |
| 7 | 68 | 66 | Parents pay $75k for Alpha's AI school. Half of its students missed math target | https://news.ycombinator.com/item?id=50509953 | https://fortune.com/2026/11/14/alpha-school-ai-students-tuition-learning-goals/ |
| 8 | 47 | 22 | Show HN: Coral – Open-source gateway where agents write their own tools | https://news.ycombinator.com/item?id=50517803 | https://github.com/withcoral/coral |
| 9 | 39 | 72 | ChatGPT Wallet | https://news.ycombinator.com/item?id=50518501 | https://openai.com/index/introducing-chatgpt-wallet/ |
| 10 | 34 | 9 | Nvidia's Days as an Open Checkbook for the AI Economy Are Numbered | https://news.ycombinator.com/item?id=50513876 | https://www.wsj.com/tech/ai/nvidias-days-as-an-open-checkbook-for-the-ai-economy-are-numbered-90c7b388 |
| 11 | 34 | 1 | Huang Discusses Comeback as Nvidia Chief with Allies, FT Says | https://news.ycombinator.com/item?id=50511763 | https://www.bloomberg.com/news/articles/2026-11-15/huang-discusses-comeback-as-nvidia-chief-with-allies-ft-says |
| 12 | 21 | 22 | Generative AI Usage in the Games Industry | https://news.ycombinator.com/item?id=50519043 | https://www.gameworkers.co.uk/ai-manifesto/ |
| 13 | 20 | 7 | Did the Apollo Guidance Computer use 60% of the ICs in 1963? (2019) — *false positive ("computer use")* | https://news.ycombinator.com/item?id=50514257 | https://retrocomputing.stackexchange.com/questions/12158/did-the-apollo-guidance-computer-really-use-60-of-the-worlds-ics-in-1963 |
| 14 | 17 | 16 | Reports of AI-related child sexual abuse material rise 8,400% in two years | https://news.ycombinator.com/item?id=50513713 | https://www.theguardian.com/technology/2026/nov/16/ai-related-child-sexual-abuse-material-rise-exploitation-deepfakes |

**Outside the strict top-14 but material:**

| Pts | Com | Title | HN URL |
|---|---|---|---|
| 790 | 413 | **Qwen4-Max** (window's #1 story overall; missed by the strict rule) | https://news.ycombinator.com/item?id=50513215 |
| 11 | 4 | Live P2P Open Model Sharing | https://news.ycombinator.com/item?id=50509654 |
| 5 | 2 | Hy4 Flash | https://news.ycombinator.com/item?id=50517032 |
| 3 | 1 | Qwen4 Max: Intelligence, Performance and Price Analysis | https://news.ycombinator.com/item?id=50514401 |
| 4 | 2 | The Obsidian (open source/local) of personal agents | https://news.ycombinator.com/item?id=50514560 |
| 3 | 0 | Thales Launches Sentinel Envelope Plus to Protect from AI-Assisted Hacking | https://news.ycombinator.com/item?id=50511622 |
| 2 | 1 | Perplexity partners with Nvidia to launch Portable Computer (fully local AI agent, zero token costs) | https://news.ycombinator.com/item?id=50512421 |
| 2 | 0 | Kitesurf, Cloudflare's browser engine for AI agents, is now open source | https://news.ycombinator.com/item?id=50518495 |
| 2 | 0 | Apple launches research study to explore the use of AI for health | https://news.ycombinator.com/item?id=50513026 |
| 1 | 1 | Tencent launches Hy4 flash, cutting AI task costs by 95% in internal tests | https://news.ycombinator.com/item?id=50517461 |
| 1 | 1 | Anyone can easily use private, open weight models | https://news.ycombinator.com/item?id=50519576 |
| 1 | 0 | Enhancv launches an MCP connector to prepare for jobs | https://news.ycombinator.com/item?id=50518927 |
| 1 | 0 | Show HN: Interpretability-guided weight edits for Gemma 270M, no training | https://news.ycombinator.com/item?id=50516154 |

### 1.3 Quotes

The Algolia `search_by_date` payload contains **no comment bodies** (only `title`, `url`, `points`, `num_comments`, `objectID`, `created_at`), so no comment text can be quoted without fabricating it. The quotes below are **thread titles**, flagged as title quotes.

- *"Qwen4-Max"* — 790 pts / 413 comments — title quote — https://news.ycombinator.com/item?id=50513215
- *"Your Agent Will Pick the Hackable One"* — 75 pts / 61 comments — title quote — https://news.ycombinator.com/item?id=50510799
- *"Reports of AI-related child sexual abuse material rise 8,400% in two years"* — 17 pts / 16 comments — title quote — https://news.ycombinator.com/item?id=50513713

### 1.4 Flags

- **Model release:** **Qwen4-Max (Alibaba)**, 2026-11-16 — https://news.ycombinator.com/item?id=50513215 → https://qwen.ai/blog?id=qwen4-max ; AA mirror https://artificialanalysis.ai/models/qwen4-max.
- **Model release (API-only):** **Tencent Hy4 flash** — 224 B total (64 B Engram), 12 B active/token, 1 M context, natively multimodal — https://news.ycombinator.com/item?id=50517032 → https://hy.tencent.ai/research/hy4-flash?langVersion=en
- **Product release (no weights):** **ChatGPT Wallet** (OpenAI) — https://news.ycombinator.com/item?id=50518501 → https://openai.com/index/introducing-chatgpt-wallet/
- **Open-weight / open-source:** Cloudflare **Kitesurf** — https://news.ycombinator.com/item?id=50518495 → https://blog.cloudflare.com/kitesurf-open-source/ ; **Coral** — https://news.ycombinator.com/item?id=50517803 → https://github.com/withcoral/coral ; Live P2P open model sharing — https://news.ycombinator.com/item?id=50509654
- **Benchmark story:** AA's new Qwen4 Max row + model page https://artificialanalysis.ai/models/qwen4-max (HN https://news.ycombinator.com/item?id=50514401); hiring-data post https://news.ycombinator.com/item?id=50512950
- **Safety / security:** *"Your Agent Will Pick the Hackable One"* (75/61) https://news.ycombinator.com/item?id=50510799 ; Guardian CSAM report (17/16) https://news.ycombinator.com/item?id=50513713 ; **Thales Sentinel Envelope Plus** https://news.ycombinator.com/item?id=50511622

---

## 2. Reddit

### 2.1 Coverage and method

Parsed with `python3` + `xml.etree.ElementTree` from the cached Atom feeds.

| Feed | File | Entries | In-window | Ordering |
|---|---|---:|---:|---|
| r/LocalLLaMA | `reddit_LocalLLaMA.rss` | 25 | **23** | default `/r/LocalLLaMA/.rss` → **hot** ranking, *not* chronological (feed #1 = 13:55, #25 = 2026-11-15T20:34) |
| r/MachineLearning | `reddit_ML.rss` | 25 | **12** | default `/r/MachineLearning/.rss` → **hot** ranking (#1 = 2026-11-05, #4 = 17:23) |

**Reddit numeric score / comment counts are not available** — Reddit's Atom feed carries only id, title, link, author, dates and an HTML content block; no score, no comment count, no upvote ratio. Ranking below is therefore the **feed position (hot rank)** — a Reddit ranking, not a magnitude.

**Failed / empty feed artifacts (limitations):**
- `tmp/nov16/t2/reddit_MachineLearning.rss` → HTML error page, `<title>Blocked</title>`, body contains `Your request has been blocked due to a network polic` — not parseable as Atom.
- `tmp/nov16/t2/reddit_ll_top.rss` and `tmp/nov16/t2/reddit_ml_top.rss` → **0 bytes** (top-of-day feeds returned nothing), so no top-of-day cross-check was possible.
- `tmp/nov16/t2/r.rss` is byte-identical to `reddit_LocalLLaMA.rss` (md5 `265724447adecf881ebdb7f47b922ba3`).

Coverage is **thin by construction**: 25 hot entries per subreddit, not yesterday's 100-newest sweep; posts outside each sub's top 25 hot are not observable.

### 2.2 r/LocalLLaMA — in-window posts (hot rank)

| Rank | Title | URL | Flags |
|---|---|---|---|
| #1 | Best Audio Models - Nov 2026 | https://www.reddit.com/r/LocalLLaMA/comments/1xxpxvi/best_audio_models_nov_2026/ | model list |
| #3 | The beginning of the becoming of the beginning begins | https://www.reddit.com/r/LocalLLaMA/comments/1xxlich/the_beginning_of_the_becoming_of_the_beginning/ | — |
| #4 | **Stop worrying about Qwen 4's AA index** | https://www.reddit.com/r/LocalLLaMA/comments/1xxqfqr/stop_worrying_about_qwen_4s_aa_index/ | **Qwen 4 release, leaderboard reaction** |
| #5 | **Introducing Hy4 flash** | https://www.reddit.com/r/LocalLLaMA/comments/1xxlgpb/introducing_hy4_flash/ | **model release** |
| #6 | **Censorship is turning me into a true Local LLM believer** | https://www.reddit.com/r/LocalLLaMA/comments/1xxsc7u/censorship_is_turning_me_into_a_true_local_llm/ | **safety / censorship** |
| #7 | you may get your cheap ram and gpu after all, the AI crash has started | https://www.reddit.com/r/LocalLLaMA/comments/1xxspx6/you_may_get_your_cheap_ram_and_gpu_after_all_the/ | economics |
| #8 | **internlm/Sage-S2.1-Flash · Hugging Face** | https://www.reddit.com/r/LocalLLaMA/comments/1xxn631/internlmsages21flash_hugging_face/ | **release (weights)** |
| #9 | Why download abliterated Flash Next models when LoRA exists? | https://www.reddit.com/r/LocalLLaMA/comments/1xxawbh/why_download_abliterated_flash_next_models_when/ | **quantization / LoRA** |
| #10 | [Paper & Models] MMFlash: Faster Speculative Decoding for Vision-Language Models | https://www.reddit.com/r/LocalLLaMA/comments/1xxmd3w/paper_models_mmflash_faster_speculative_decoding/ | paper + models |
| #11 | Did we hit a wall in context length? | https://www.reddit.com/r/LocalLLaMA/comments/1xxn9c6/did_we_hit_a_wall_in_context_length/ | context-window discussion |
| #12 | New AA ranking Qwen3.8-FN better than GLM-5.3-Flash? | https://www.reddit.com/r/LocalLLaMA/comments/1xxibeh/new_aa_ranking_qwen38fn_better_than_glm53flash/ | **leaderboard reaction** |
| #13 | Tool to observe what happens inside an LLM (compare two quantizations token by token) | https://www.reddit.com/r/LocalLLaMA/comments/1xx7qbf/i_have_created_a_tool_to_observe_what_happens/ | **quant tooling / interp.** |
| #14 | How do we feel about bots posting & commenting? | https://www.reddit.com/r/LocalLLaMA/comments/1xxmd9a/how_do_we_feel_about_bots_posting_commenting/ | **safety / community** |
| #15 | [Paper & Models] Gamer: A Generalist Vision-Language-Action Foundation Model for Long-Horizon Real-Time Game Agent | https://www.reddit.com/r/LocalLLaMA/comments/1xxmj9o/paper_models_gamer_a_generalist/ | paper + models |
| #16 | I made a C&C inspired web RTS for us to benchmark our local models with | https://www.reddit.com/r/LocalLLaMA/comments/1xxtn9g/i_made_a_cc_inspired_web_rts_for_us_to_benchmark/ | **benchmark / agent eval** |
| #17 | [Paper] The Value of Thinking: Learning When to Reason in Hybrid Decision Models | https://www.reddit.com/r/LocalLLaMA/comments/1xxm2v8/paper_the_value_of_thinking_learning_when_to/ | paper |
| #19 | **Karpo-Decision-31B: open multimodal decision model. Ranks #1 on full score on Decision Index, 2x faster than Jev, at 20 % lower cost** | https://www.reddit.com/r/LocalLLaMA/comments/1xxrmt4/karpodecision31b_open_multimodal_decision_model/ | **release + benchmark claim** |
| #20 | [Project] Gemma.c - Gemma 1/2/3 + multimodal inference in one C file (CPU only) | https://www.reddit.com/r/LocalLLaMA/comments/1xxq01s/project_gemmac_gemma_123_multimodal_inference_in/ | inference project |
| #21 | **tandem.cpp v0.3.0: prefill speed improved; Project Maya's DeepSeek-V4.1 GGUFs support** | https://www.reddit.com/r/LocalLLaMA/comments/1xxo0f5/tandemcpp_v030_prefill_speed_improved_project/ | **quantization / GGUF / engine** |
| #22 | Given the flood of new inference engines any recommendations for 2x 7900xtx ? | https://www.reddit.com/r/LocalLLaMA/comments/1xxmr68/given_the_flood_of_new_inference_engines_any/ | **hardware** |
| #23 | Speed of DeepSeek-V4.1-Flash-1017-oQ4e-mtp on M5 ultra | https://www.reddit.com/r/LocalLLaMA/comments/1xxt9x7/speed_of_deepseekv41flash1017oq4emtp_on_m5_ultra/ | **hardware / quant bench** |
| #24 | **AMD Loom Fun: Added Radeon 9700 support over the weekend. Benchmarked 48 models with an average 42 % speedup over llama.cpp.** | https://www.reddit.com/r/LocalLLaMA/comments/1xxuzgg/amd_loom_fun_added_radeon_9700_support_over_the/ | **hardware / engine / benchmark** |
| #25 | Llama.cpp performance improvement over time (Gemma4 models) | https://www.reddit.com/r/LocalLLaMA/comments/1xx607x/llamacpp_performance_improvement_over_time_gemma4/ | inference engine |

Out-of-window in this feed: #2 (2026-11-11, [Bi-Weekly Megathread] Project Showcase) and #18 (2026-11-15T15:16:24, CMP 170HX voltage glitch → 80 GB VRAM).

Content excerpts (feed HTML `content` block):

- **Qwen 4** (#4): *"the new Qwen 4 will also think much less, so imagine the fine-tunes we will see once it arrives, for 27B and Flash models… it will be smarter and better, it will be ENOUGH!"* — https://www.reddit.com/r/LocalLLaMA/comments/1xxqfqr/stop_worrying_about_qwen_4s_aa_index/
- **Hy4 flash** (#5): *"224B total parameters (including 64B Engram) with just 12B active per token… natively multimodal with a 1M-token context window… significantly lower API pricing"* — https://www.reddit.com/r/LocalLLaMA/comments/1xxlgpb/introducing_hy4_flash/
- **Karpo-Decision-31B** (#19): *"a Gemma 4 31B fine-tune… scored 73.9 on the Nov 12 Decision Index board, the highest Full score among 300 entries"* — https://www.reddit.com/r/LocalLLaMA/comments/1xxrmt4/karpodecision31b_open_multimodal_decision_model/
- **Censorship** (#6): provider returned HTTP 451 — `{"message":"The content you provided or machine outputted is blocked.","type":"censorship_blocked"}`, `"provider_name":"StepFun"` — https://www.reddit.com/r/LocalLLaMA/comments/1xxsc7u/censorship_is_turning_me_into_a_true_local_llm/
- **AMD Loom** (#24): *"I took the same 51 LLMs, cut it down to the 48 that fit in 32 GB of VRAM, and got a… average 42% speedup over llama.cpp"* — https://www.reddit.com/r/LocalLLaMA/comments/1xxuzgg/amd_loom_fun_added_radeon_9700_support_over_the/

### 2.3 r/MachineLearning — in-window posts (hot rank)

| Rank | Title | URL | Flags |
|---|---|---|---|
| #3 | AISTATS 2027 paper discussion [D] | https://www.reddit.com/r/MachineLearning/comments/1xxqa3i/aistats_2027_paper_discussion_d/ | conference / papers |
| #4 | Serious spaces? [D] | https://www.reddit.com/r/MachineLearning/comments/1xxvby6/serious_spaces_d/ | community |
| #5 | **[Meta FAIR + NYU] Unbundling Multimodal Vision Encoding: training 200+ MLLMs…** | https://www.reddit.com/r/MachineLearning/comments/1xx1k2o/meta_fair_nyu_unbundling_multimodal_vision/ | paper (arXiv 2611.17334) |
| #6 | **Marimba: A System One Model for Speech. [R]** | https://www.reddit.com/r/MachineLearning/comments/1xxsqro/marimba_a_system_one_model_for_speech_r/ | paper (arXiv 2611.18330) |
| #7 | ICLR did you post reminder of rebuttal response? [D] | https://www.reddit.com/r/MachineLearning/comments/1xxbo56/iclr_did_you_post_reminder_of_rebuttal_response_d/ | process |
| #9 | Steering a pretrained music transformer at sampling time into a real-time jazz partner (no fine-tuning) [P] | https://www.reddit.com/r/MachineLearning/comments/1xxkyh3/steering_a_pretrained_music_transformer_at/ | paper + code |
| #10 | Anyone working in AML / transaction monitoring / sanctions screening using ML? | https://www.reddit.com/r/MachineLearning/comments/1xx9za4/anyone_working_in_aml_transaction_monitoring/ | career |
| #11 | **Making cudaMemcpy 5x faster on a B300 [P]** | https://www.reddit.com/r/MachineLearning/comments/1xx2n25/making_cudamemcpy_5x_faster_on_a_b300_p/ | **hardware / CUDA** |
| #15 | Hands-on ML Orchestration Tutorial with Airflow3 [P] | https://www.reddit.com/r/MachineLearning/comments/1xxa13x/handson_ml_orchestration_tutorial_with_airflow3_p/ | tooling |
| #16 | Training-free early exit for reasoning models: a linear probe folded into the `</think>` row of the output layer [p] | https://www.reddit.com/r/MachineLearning/comments/1xx1xdm/trainingfree_early_exit_for_reasoning_models_a/ | **paper / interp.** |
| #17 | Social Simulation with LLMs - From Proxies to Population (CFP @ AAAI'27) Due Nov. 20 [R] | https://www.reddit.com/r/MachineLearning/comments/1xxc63w/social_simulation_with_llms_from_proxies_to/ | CFP |
| #18 | We made a multiplayer game where each player's view is generated by a world model running on their GPU [P] | https://www.reddit.com/r/MachineLearning/comments/1xx4ta3/we_made_a_multiplayer_game_where_each_players/ | paper / world model |

Out-of-window hot entries: #1 ICLR 2027 Reviews Discussion (2026-11-05), #2 [D] Self-Promotion Thread (2026-11-02), #8 double-blind review, #12 42k ICLR submissions, #13 ICLR review scores by university, #14 Marimba repost, #19–#25.

Content excerpts:

- **Meta FAIR + NYU** (#5): *"Gemma 4 12B dropped the encoder, Kimi K3 trains its encoder from scratch, and Inkling 2 Small brought an encoder back…"* — https://www.alphaxiv.org/abs/2611.17334 — https://www.reddit.com/r/MachineLearning/comments/1xx1k2o/meta_fair_nyu_unbundling_multimodal_vision/
- **Marimba** (#6): *"One frozen Qwen3-ASR-0.6B encoder pass per 8 s window serves all questions… then Platt-calibrated."* — https://arxiv.org/abs/2611.18330 — https://www.reddit.com/r/MachineLearning/comments/1xxsqro/marimba_a_system_one_model_for_speech_r/
- **cudaMemcpy on B300** (#11): *"a tool that can speed up pageable transfers for cudaMemcpy… copying a 1 GB tensor to the GPU and back"* — https://www.reddit.com/r/MachineLearning/comments/1xx2n25/making_cudamemcpy_5x_faster_on_a_b300_p/
- **Training-free early exit** (#16): *"I got the model to stop at that point by changing a single row of weights. There's no training and no extra code at inference time"* — https://www.reddit.com/r/MachineLearning/comments/1xx1xdm/trainingfree_early_exit_for_reasoning_models_a/

---

## 3. Leaderboards

### 3.1 Artificial Analysis — Intelligence Index (homepage table)

Source `https://artificialanalysis.ai/` — the Next.js RSC payload was decoded from `aa_home.html` into `aa_payload.txt` and parsed into `aa_rows_all.json` (59 effort-tier rows → 29 release slugs). Baseline: `tmp/nov15/t2/aa_ii_home.json`.

**Result: all 28 baseline rows are bit-identical to 2026-11-15 (Δ = +0.000000000 on every row, rank order unchanged). One row is genuinely NEW: Qwen4 Max.**

**Not an extraction artefact:** `qwen4-max`, `Qwen4 Max` and `42.8914543` occur **0 times** in yesterday's cached `aa_home.html` and 11 / 15 / 4 times in today's. The model page confirms `"slug":"qwen4-max","name":"Qwen4 Max","releaseDate":"2026-11-16","intelligenceIndex":42.8914543287565,"creator":{"slug":"alibaba","name":"Alibaba"}`, `effort: {"slug":"xhigh"}`, `isOpenWeights: false` — https://artificialanalysis.ai/models/qwen4-max

| # | Model | Slug | Index 2026-11-16 | Index 2026-11-15 | Δ | Open weights |
|---|---|---|---|---|---|---|
| 1 | Claude Fable 5.2 | `claude-fable-5-2` | 64.563595756626 | 64.563595756626 | +0.000000000 | no |
| 2 | Gemini 4 Carbon | `gemini-4-carbon` | 60.025738829526 | 60.025738829526 | +0.000000000 | no |
| 3 | Claude Opus 5.5 | `claude-opus-5-5` | 59.1060336078904 | 59.1060336078904 | +0.000000000 | no |
| 4 | GPT-6 Astra | `gpt-6-astra` | 56.8538559596797 | 56.8538559596797 | +0.000000000 | no |
| 5 | GPT-6.1 Sol | `gpt-6-1-sol` | 54.6087338138148 | 54.6087338138148 | +0.000000000 | no |
| 6 | Claude Sonnet 5.5 | `claude-sonnet-5-5` | 54.54133407109 | 54.54133407109 | +0.000000000 | no |
| 7 | Gemini 4 Hydrogen | `gemini-4-hydrogen` | 53.9192287317542 | 53.9192287317542 | +0.000000000 | no |
| 8 | GPT-6.1 Terra | `gpt-6-1-terra` | 51.3265188577015 | 51.3265188577015 | +0.000000000 | no |
| 9 | Muse Wonder Full | `muse-wonder-full` | 50.0772123627021 | 50.0772123627021 | +0.000000000 | no |
| 10 | Claude Fable 5.1 | `claude-fable-5-1` | 49.1602124158081 | 49.1602124158081 | +0.000000000 | no |
| 11 | Kimi K3.1 Pro | `kimi-k3-1-pro` | 46.4526236744189 | 46.4526236744189 | +0.000000000 | yes |
| 12 | Muse Wonder | `muse-wonder` | 43.5748225998431 | 43.5748225998431 | +0.000000000 | no |
| **13** | **Qwen4 Max** | `qwen4-max` | **42.8914543287565** | — | **NEW** | no |
| 14 | Claude Haiku 5.5 | `claude-haiku-5-5` | 36.4845435880142 | 36.4845435880142 | +0.000000000 | no |
| 15 | Muse Ember | `muse-ember` | 36.0212987864912 | 36.0212987864912 | +0.000000000 | no |
| 16 | Grok 4.7 | `grok-4-7` | 35.4850117067196 | 35.4850117067196 | +0.000000000 | no |
| 17 | Tencent Hy4 | `tencent-hy4` | 34.5552385392508 | 34.5552385392508 | +0.000000000 | no |
| 18 | Qwen3.8 Max (0902) | `qwen3-8-max` | 33.6545627367888 | 33.6545627367888 | +0.000000000 | no |
| 19 | DeepSeek V4.1 Flash 1017 | `deepseek-v4-1-flash-1017` | 32.5896393532027 | 32.5896393532027 | +0.000000000 | yes |
| 20 | GLM-5.3 | `glm-5-3` | 31.653381843882 | 31.653381843882 | +0.000000000 | yes |
| 21 | Inkling 2 Small | `inkling-2-small` | 30.6286781498958 | 30.6286781498958 | +0.000000000 | yes |
| 22 | MiMo-V2.6-Pro | `mimo-v2-6-pro` | 29.8897833093321 | 29.8897833093321 | +0.000000000 | yes |
| 23 | Ling 3.1 Flash 1019 | `ling-3-1-flash` | 29.570119369837 | 29.570119369837 | +0.000000000 | yes |
| 24 | GPT-6 Luna | `gpt-6-luna` | 27.8552004938153 | 27.8552004938153 | +0.000000000 | no |
| 25 | Mistral Large 4 | `mistral-large-4` | 26.1249946754784 | 26.1249946754784 | +0.000000000 | yes |
| 26 | Qwen3.8 27B | `qwen3-8-27b` | 20.1068756031705 | 20.1068756031705 | +0.000000000 | yes |
| 27 | K2 Horizon 375B A23B | `k2-horizon-375b-a23b` | 17.8202731734027 | 17.8202731734027 | +0.000000000 | yes |
| 28 | Beam 1.0 | `reflection-beam` | 17.7307282547205 | 17.7307282547205 | +0.000000000 | yes |
| 29 | Nemotron 3.5 Super VL | `nemotron-3-5-super-vl` | 13.6203422723141 | 13.6203422723141 | +0.000000000 | yes |

Notes:
- Best **open-weights** model unchanged: **Kimi K3.1 Pro, 46.4526236744189** (2800 B) — ahead of the new proprietary Qwen4 Max (42.8914543287565).
- `qwen3-8-max` is now flagged `"deprecated": true` in the AA payload.
- **AA changelog unchanged:** the 7 `change` blocks in today's homepage payload are **identical** to yesterday's — AA published no methodology/changelog entry in the window. Source: https://artificialanalysis.ai/

### 3.2 Artificial Analysis — Decision Index

Source: Decision Index rows are embedded in the same homepage payload (`"kind":"decisionModel"`, `indexScore`) — 24 decision-model rows + 4 LLM rows = 28; yesterday's baseline had 26.

- **All 26 baseline rows unchanged (0 of 26 modified).** Yesterday's baseline slugs were `liquid-ai_d1`, `liquid-ai_d1-1`, `liquid-ai_d1-ultra` only — **`liquid-ai_d1-2` was not present yesterday**. Top values: Claude Haiku 5.5 (Max) 76.49216258405318 · GPT-6 Luna (Max) 75.67452818327847 · Drex Max v1.1 72.62416891718618 · SubQ Snap 1.2 72.58051127736282 · Fastino GLiDE v1.2 72.51518604270153 · Mammoth 27B 71.3606271722313 · Liquid-AI d1-ultra 70.57640821306735 · Perplexity Decider v1.3 70.40812045623149 · Liquid-AI d1.2 68.69494812821019; the other 17 rows (Perplexity Decider v1.2 69.76625551837046 … Cloudflare Clef-Omni 57.75003536430474) are also unchanged — full list in `tmp/nov16/t2/aa_decision_rows.json` — https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index
- **Two rows are new, both from Liquid AI's d1.2 release on 2026-11-16** — i.e. 26 baseline rows + 2 new = 28 rows today:
  - `liquid-ai_d1-2-ultra` **d1.2-ultra 74.84596115693908** — would rank **#2 overall**, behind only Claude Haiku 5.5 (Max) 76.49216258405318, and **#1 among decision models** (Liquid AI's own claim: "d1.2-ultra scores 75, the highest on the index and two points ahead of the previous best decision model").
  - `liquid-ai_d1-2` **d1.2 68.69494812821019** — new row, ranking between Perplexity Decider v1.2 (69.76625551837046) and SubQ Snap 1.1 (67.92112781109881).
  - Source: Liquid AI release blog https://www.liquid.ai/blog/d1-2 (dated NOV 16, 2026) and https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index
- The "Decision Index v2.1" banner (`"removeAfter":"2026-11-20"`, *"six evaluations, including AA-Paperclip, EvalSafe-O*NET-AA and AA-Symmetry…"*) is present in both days' payloads.

### 3.3 BenchLM

Source `tmp/nov16/t2/benchlm.json` (`https://benchlm.ai/api/data/leaderboard`), baseline `tmp/nov15/t2/benchlm.json`.

| Field | 2026-11-15 | **2026-11-16** | Changed? |
|---|---|---|---|
| `lastUpdated` | `2026-11-13` | **`2026-11-15`** | **YES — advanced 2 days** |
| `sourceSnapshotId` | `2026-11-13-6dbff129cd01f557` | **`2026-11-15-323a83e43ce62771`** | **YES — new snapshot id** |
| `mode` | `bench-align-v5` | `bench-align-v5` | no |
| `methodologyVersion` | `bench-align-v5.8-2026-09-30` | `bench-align-v5.8-2026-09-30` | no |
| `orderingMeaning` / `uncertaintyPolicy` | identical | identical | no |
| rows | 50 | 50 | no model added or removed |
| rows changed | 48/50 (yesterday) | **47/50** | — |

**Explicit answer:** the **snapshot id changed** (`2026-11-13-6dbff129cd01f557` → `2026-11-15-323a83e43ce62771`) and **lastUpdated advanced** (`2026-11-13` → `2026-11-15`). Methodology did not change, so this is a **re-scoring / data refresh**, not a methodology revision.

Largest movements (score Δ, rank Δ):

| Model | 11-15 | 11-16 | Δ | Rank |
|---|---:|---:|---:|---|
| **Claude Haiku 5.5** | 67.64 | **63.60** | **−4.04** | **20 → 34 (+14)** |
| GPT-6.1 Terra | 79.64 | 78.72 | −0.92 | 9 → 11 (+2) |
| Kimi K3.1 Pro | 70.36 | 70.97 | +0.61 | 18 → 17 (−1) |
| Gemini 4 Hydrogen | 79.06 | 79.65 | +0.59 | 11 → 9 (−2) |
| **GPT-5.4 Pro** | **66.96** | **67.20** | **+0.24** | **29 → 27 (−2)** |

The other 34 changed rows moved by ≤ 0.04 points with 1–2 rank places each (Opus 4.8 67.46 → 67.41, rank 21 → 20; Grok 4.6 66.24 → 66.20, 22 → 21; Gemini 3.7 Flash 65.91 → 65.87, 25 → 24; GPT-5.4 65.43 → 65.39, 26 → 25; Kimi K3 68.42 → 68.35, 17 → 18; DeepSeek V4.1 Flash 1017 64.48 → 64.43, 31 → 30; Claude Sonnet 5 63.81 → 63.76, 34 → 33).

Unchanged (3): **GPT-6 Astra**, **Muse Spark 1.1**, **Qwen3.7 Max**.

Top 6 today: 1 Claude Fable 5.2 93.84 · 2 Gemini 4 Carbon 89.56 · 3 Claude Opus 5.5 86.81 · 4 GPT-6 Astra 85.65 · 5 GPT-6.1 Sol 84.59 · 6 Claude Sonnet 5.5 83.13. Bottom: 50 Sage-A1.5 60.69 · 48 GLM-5.3 60.91 · 47 GPT-6 Luna 61.20 · 45 GPT-5.3 Codex 61.65.

Open-weight standings (9 "Open Weight" vs 41 "Proprietary"): **Kimi K3.1 Pro #17 (70.97)** > Kimi K3 #18 (68.35) > Ling 3.1 Flash #29 (64.57) > DeepSeek V4.1 Flash 1017 #30 (64.43) > Qwen3.8 Max #35 (63.56) > dots3-note Preview #40 (62.71) > Ornith-1.5-397B #46 (61.23) > GLM-5.3 #48 (60.91).

---

## 4. Model releases

### 4.1 Frontier releases (announced in-window)

- **Qwen4 Max — Alibaba, released 2026-11-16.**
  - AA model page (releaseDate `2026-11-16`, Intelligence Index 42.8914543287565, effort `xhigh`, `isOpenWeights: false`, `isReasoning: true`, creator Alibaba) — https://artificialanalysis.ai/models/qwen4-max
  - Vendor announcement — https://qwen.ai/blog?id=qwen4-max (locale-dependent title: *"Qwen4-Max: Your New Teammate Has Arrived"* / *"Qwen4-Max：新同事，已就位"*)
  - HN discussion — **790 pts / 413 comments, the window's #1 story overall** — https://news.ycombinator.com/item?id=50513215 ; AA announcement as an HN item — https://news.ycombinator.com/item?id=50514401
  - **Open weights: not released.** The cached Qwen org listing (`tmp/nov16/t2/hf_qwen.json`, 60 repos) has **no Qwen4 repository**; the newest `Qwen/*` repo there is from 2026-10-09, and the only `qwen4`-tagged repos are the older `Qwen/Qwen3.8-Flash-Next` family (tag `qwen4_exp`, 2026-08-24).
  - Community reaction: https://www.reddit.com/r/LocalLLaMA/comments/1xxqfqr/stop_worrying_about_qwen_4s_aa_index/ ("*the new Qwen 4 will also think much less, so imagine the fine-tunes we will see once it arrives, for 27B and Flash models*")
- **Tencent Hy4 flash — announced 2026-11-16, weights not yet released.** 224 B total (incl. 64 B Engram), 12 B active/token, natively multimodal, 1 M-token context, lower API price — https://hy.tencent.ai/research/hy4-flash?langVersion=en (HN https://news.ycombinator.com/item?id=50517032, 5 pts); press: https://news.ycombinator.com/item?id=50517461 → https://technode.com/2026/11/16/tencent-launches-hy4-flash-cutting-ai-task-costs-by-95-in-internal-tests/ ; Reddit "*Seems to be about in the same ballpark of Qwen-Flash-Next… when it will be released.*" https://www.reddit.com/r/LocalLLaMA/comments/1xxlgpb/introducing_hy4_flash/ . Parent `Tencent Hy4` is already on AA at 34.5552385392508 (unchanged).
- **Liquid AI d1.2 and d1.2-ultra — released 2026-11-16, API-only (no weights).** "d1.2: State-of-the-Art Omnimodal Decision Models" (NOV 16, 2026) — https://www.liquid.ai/blog/d1-2. New in this version: **audio input** (audio can be the subject or the question) and **five new tasks**: `Read a value from the input` (text/number/date, "not found" rather than guessing), `Find every passage of a kind in a text` (spans with position, e.g. PII), `Locate things in a picture` (box per instance or "not found"), `Estimate a number` (estimate plus range), `Pick every option that applies` (multi-label with per-option probability). **Pricing: $0.02 per million input tokens for d1.2, $0.042 for d1.2-ultra**, available immediately on the Liquid API (`/decisions/v1/systemone` endpoint, same request format). Vendor-reported calibration error (13 benchmarks / 22,505 questions): **0.8 points for d1.2-ultra vs 1.2 for d1.2, 2.7 for Jev 1.14, 3.7 for Perplexity Decider v1.3, 7.2 for GPT-6 Luna**. Vendor-reported accuracy on the new tasks (internal held-out splits): read-a-value 98%/96%, PII precision/recall 94%/93%, object location 94%/94%, count-within-one 93%/92%, multi-object 87%/90%, audio 95–97% on ESC-50 / FLEURS (43 languages). Related Liquid posts: https://www.liquid.ai/blog/lfm3 · https://www.liquid.ai/blog/d1-ultra · https://www.liquid.ai/blog/d1-decision-model
- **ChatGPT Wallet — OpenAI product launch (no weights)** — https://news.ycombinator.com/item?id=50518501 → https://openai.com/index/introducing-chatgpt-wallet/ (39/72).
- **Karpo-Decision-31B — MachinePulse**, open multimodal decision model (Gemma 4 31B fine-tune); claims 73.9 on the Nov 12 Decision Index, highest Full score among 300 entries — https://www.reddit.com/r/LocalLLaMA/comments/1xxrmt4/karpodecision31b_open_multimodal_decision_model/
- **internlm/Sage-S2.1-Flash — Shanghai AI Laboratory**, scientific multimodal model (Sage SciPerception unified representation; 10+ scientific input types: molecular graphs, crystal structures, protein sequences) — https://www.reddit.com/r/LocalLLaMA/comments/1xxn631/internlmsages21flash_hugging_face/

### 4.2 Hugging Face — 200 newest models

Source `tmp/nov16/t2/hf.json` (`https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=200`).

**Coverage caveat:** the cached page holds only the newest 200 repos, `createdAt` spanning **2026-11-16T16:51:12Z → 17:29:15Z** — a ~38-minute slice of the 24 h window. Total downloads = **0**; total likes = **9**. A *freshness* snapshot, not a day census.

- **Frontier-lab releases: none.** No repo from `anthropic`, `openai`, `google`/`deepmind`, `deepseek-ai`, `meta-llama`, `mistralai`, `Qwen`, `zai-org`, `moonshotai`, `nvidia`, `tencent`, `minimax`, `ByteDance-Seed`, `inclusionAI`, `internlm` or `openbmb` appears in the 200-newest slice. **84 distinct uploader orgs**, largest: `ringtone-ro` (88 repos), `gradients-io-tournaments` (7), `mradermacher` (7).
- **Everything present is community quants / repackagings / fine-tunes.** 9 GGUF entries: `mradermacher/Gemma-4-12B-Uncensored-i1-GGUF`, `mradermacher/HeTong-NMT-7B-GGUF`, `mradermacher/Temper-2-Sapient-GGUF`, `mradermacher/Orca-Llama-3.1-8B-Unrestricted-GGUF`, `mradermacher/Qwen3.6-35B-A3B-Mirage-i1-GGUF` (1 like), `mradermacher/Gemma-4-12B-Uncensored-GGUF`, `Nihgsmile/gemma-4-12B-it-qat-q4_0-gguf` (base `google/gemma-4-12B-it-qat-q4_0-unquantized`, 1 like), `purush0th/aimsby-qwen3-4b-instruct-GGUF`, `Kuba-cs/brainrot-BM-3B-GGUF`; plus `whittleOrg/Whittle-Next-27B-A3B-NVFP4-GGUF`.
- **Quantization / fine-tune detail:** `Nihgsmile/gemma-4-12B-it-qat-q4_0-gguf` (QAT GGUF of a Google base model), `YanSong97/E2K-Qwen3.5-9B-…-rl-iter49` and siblings (RL fine-tunes of `Qwen/Qwen3.5-9B`), `YixingZhang2026/qwen3.5-2b-sc…` (LoRA), `ivanfioravanti/d1-2B-gestures-CoreAI` (base `LiquidAI/d1-2B`, tagged `decision-model`).
- **License tags:** apache-2.0 ×24, mit ×14, other ×5, cc-by-nc-sa-4.0 ×1, cc-by-nc-4.0 ×1, unlicense ×1. **Param counts and context lengths are not present** in the cached payload (`library_name` on 49/200, `pipeline_tag` on 46/200) — **not available** rather than guessed.

---

## 5. Negative signals

1. **AA's Intelligence Index is frozen on existing models for a second consecutive day** — all 28 baseline rows Δ = +0.000000000, rank order unchanged, and the AA changelog's 7 `change` blocks are byte-identical to 2026-11-15. The only AA activity is the *addition* of Qwen4 Max: AA published, but rescored nothing.
2. **Qwen4 Max is proprietary/API-only at launch** (`isOpenWeights: false`, no `Qwen/*` HF repo, no GGUF). The open-weight ceiling is therefore still **Kimi K3.1 Pro (46.4526236744189)**, unchanged, and the community's own reaction thread assumes weights are still in the future ("*once it arrives*").
3. **BenchLM's snapshot refreshed, but the biggest movement is a downgrade**: **Claude Haiku 5.5 67.64 → 63.60 (−4.04), rank 20 → 34** — a frontier small model losing 14 rank positions with `methodologyVersion` unchanged: evidence churn, not a capability regression. **GPT-5.4 Pro** improved to 67.20 / rank 27 (from 66.96 / rank 29).
4. **HN's AI share did not grow** (26.3 % → 26.7 %) even though the window held the biggest AI story of the cycle (**Qwen4-Max, 790 pts**) — the rule misses it and total HN volume rose sharply (746 → 1090 stories). AI's share of the overall top-50 stayed flat at **20 % (10/50)**.
5. **NVIDIA governance still dominates HN's AI-adjacent engagement**: 5 of the 14 rule-matched top stories concern Jensen Huang's possible return, the FT scoop and NVIDIA's circular financing. The top AI thread (410/520) is *"What's Next for Nvidia?"* — business analysis, not a model result.
6. **Safety/security content is up but unevenly amplified.** HN carried the Guardian's AI-CSAM report (17/16) and *"Your Agent Will Pick the Hackable One"* (75/61); Reddit carries a censorship report (StepFun HTTP 451 `censorship_blocked`) and a thread asking whether bot posts are killing the subreddit. r/LocalLLaMA's strongest safety-adjacent post (#9) is a *censorship-workaround* recipe.
7. **The technical work again got the least attention.** The best artefacts — MMFlash speculative decoding, the CUDA `cudaMemcpy` 5× B300 tool, the training-free early-exit weight edit, Meta FAIR + NYU's encoder study, Marimba, the CS:GO world-model game — sit at Reddit hot ranks #10–#18 with no HN echo, while NVIDIA drama absorbs 1000+ points.
8. **No frontier-lab weights on Hugging Face** in the observed slice: 200 repos, 84 orgs, community GGUFs / AutoRound quants / RL fine-tunes / LoRAs, **0 cumulative downloads**. The frontier-lab check (Anthropic/OpenAI/Google/DeepSeek/Meta/Mistral/Qwen/zai/Moonshot/NVIDIA/Tencent/ByteDance/internlm) returns **nothing**.
9. **r/MachineLearning remains process-driven and thinner than yesterday**: only **12 of 25** hot entries are in-window, dominated by ICLR/AISTATS mechanics and community meta. Only four are research-grade: Meta FAIR + NYU, Marimba, music-transformer steering, early exit.
10. **Measurement caveats.** (a) Reddit score/comment counts are **not available** in RSS — only feed position; (b) only the default 25-entry hot feeds were cached, top-of-day feeds returned **0 bytes** and a second MachineLearning fetch returned a **"Blocked"** page, so Reddit coverage is thinner than yesterday's sweep; (c) HN comment bodies are absent from the Algolia payload, so all quotes are **title quotes**; (d) the HN AI-rule has a naming blind spot (`Qwen4-Max`, `Hy4 Flash`) and one false positive ("computer use"); (e) the HF snapshot covers only 16:51–17:29Z of the window.

---

### Machine-readable deltas for the next run

`tmp/nov16/t2/`: `aa_cmp28.json` (AA set vs baseline), `aa_rows_all.json` (59 effort-tier rows), `aa_decision_rows.json` (28 Decision Index rows), `benchlm.json` (50 rows, snapshot `2026-11-15-323a83e43ce62771`), `ai_ids.json` (291 AI story IDs), `hn_all.json` (1090 stories), `reddit_inwindow.json` (35 in-window Reddit posts with feed ranks). `last_check.json` was **not** modified.
