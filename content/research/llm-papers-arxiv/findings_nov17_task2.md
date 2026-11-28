# Community, Leaderboards & Model Releases — 2026-11-17 cycle (Task 2)

**Window:** `2026-11-16T17:28:00Z` → `2026-11-17T17:28:00Z` (Unix `1794850080` → `1794936480`). Every item below falls inside it.
**Working directory:** `/home/devcon/.openclaw/shared-workspace/research/llm-papers-arxiv`
**Method:** 0 `web_search`, 0 `web_fetch` — every claim comes from a primary source fetched with `curl` and cached under `tmp/nov17/t2/`.
**Baselines used:** `tmp/nov16/t2/aa_cmp28.json`, `tmp/nov16/t2/aa_decision_rows.json`, `tmp/nov16/t2/aa_rows_all.json`, `tmp/nov16/t2/aa_changelog_data.json`, `tmp/nov16/t2/benchlm.json`, rules in `tmp/nov15/t2/ai_kw.txt` + `tmp/nov15/t2/filter2.py`.

**Cached artifacts (new this cycle):** `hn_p0.json` (594 hits), `hn_p1.json` (734 hits), `hn_all.json` (1,328 unique), `ai_ids.json` (396), `inw_ids.json`, `rd_all_inwindow.json` (44), 4 Reddit RSS feeds, `aa_home.html` / `aa_payload.txt` / `aa_rows_all.json` / `aa_decision_rows.json` / `aa_changelog_data.json` / `aa_qwen4max.html`, `benchlm.json`, `hf_newest2000.json` + 22 org listings (`hfo_*`, `hfo200_*`), `liquid_d1-2.html`, `liquid_news.html`, `ds.html`, `oai_rss.xml`, `qwen4max.html`, `hy4flash.html`.

---

## 1. Hacker News

### 1.1 Coverage

Algolia sweep `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1794850080,created_at_i<1794936480&hitsPerPage=1000`, split at Unix `1794893291` into two 12 h pages (594 + 734 hits). `nbHits` on a whole-window query returns **1328** = sum of both pages → the enumeration is **exhaustive**; the pages share **0** objectIDs and the 42 s boundary gap re-queried returns `nbHits: 0`. Dedupe by `objectID` leaves **1,328** unique stories (all inside the window; min `1794850122`, max `1794936467`).

| Metric | 2026-11-17 | 2026-11-16 | 2026-11-15 |
|---|---|---|---|
| Unique stories | **1,328** | 1,090 | 746 |
| AI-relevant (strict rule, unchanged) | **396** | 291 | 196 |
| AI share (strict) | **29.8 %** | 26.7 % | 26.3 % |
| AI-relevant (curated adjusted) | **423** | — | — |
| AI share (adjusted) | **31.9 %** | — | — |
| AI share of overall top-50 (strict) | 10/50 (20.0 %) | 10/50 (20.0 %) | 10/50 (20.0 %) |
| AI share of overall top-50 (adjusted) | 13/50 (26.0 %) | — | — |

AI share of total HN volume rose **+3.1 pp** — the highest of the three-day window — while the strict AI share of the top-50 stayed flat at exactly 20.0 % (13/50 once the curated set is applied).

### 1.2 Blind spots and false positives — explicitly checked

| Check | Result |
|---|---|
| `"Qwen4"` in any in-window title | **0 hits** — the 790-pt Qwen4-Max thread belongs to the *previous* window (2026-11-16) and aged out |
| `"Hy4"` / `"hunyuan"` / `"Tencent"` | **0 hits** |
| `"Karpo"`, `"801-30B"`, `"second run"`, `"d1.2"` | **0 hits** |
| `"computer use"` false-positive check | **0 in-window titles** contain the phrase, so the known false-positive class did not fire this cycle (the pattern `\bcomputer use\b` remains in `ai_kw.txt` and is still a latent risk) |
| `"Olala"` | 3 hits (all the same OVH story, 3 different regional URLs) — missed by strict rule |
| `"Maxwell"` | 2 hits (same repo) — missed by strict rule |
| `"Clover"`, `"Inkling"`, `"Interact-0"`, `"SolveIt"`, `"OpenCode"` | 1 hit each — missed by strict rule |

### 1.3 Curated adjusted set (strict-rule misses verified by hand)

| Pts | Com | ID | Title | URL |
|---|---|---|---|---|
| 314 | 202 | 50523459 | OpenCode Browse | https://opencode.ai/product/browse |
| 145 | 64 | 50532191 | What is the best harness for each model? (FrontierHarness eval v1.1) | https://runta.com/blog/introducing-frontierharness-eval-v1-1/ |
| 74 | 116 | 50526537 | Mem Is Shutting Down | https://get.mem.ai/blog/mem-is-shutting-down |
| 15 | 0 | 50528263 | OVH releases first model with EU public funding and supercomputer access | https://twitter.com/olesovhcom/status/2122573582911869173 |
| 8 | 1 | 50528874 | OVH announces Olala mini 7A1B | https://corporate.ovhcloud.com/en-ie/newsroom/news/ovh-olala-mini/ |
| 6 | 0 | 50527381 | The Public Launch of SolveIt (fast.ai) | https://www.fast.ai/posts/2026-11-16-solveit-launch/ |
| 4 | 0 | 50526622 | Localix Studio – an open-source Cursor alternative for any model | https://github.com/localixai/localix-studio |
| 4 | 0 | 50526023 | Show HN: I made an audio-to-MIDI model 60x more efficient | https://kobi.music/research/dettato |
| 4 | 0 | 50532141 | Experiments in Weight-Space Programming | https://jacobstrauss.bearblog.dev/experiments-in-weight-space-programming/ |
| 3 | 1 | 50526091 | Old SaaS Model Is Dead. Software Is a Plug-In. | https://www.thestateofai.com/news/saas-is-dead-software-plug-in-ai-assistants |
| 3 | 0 | 50521942 | Does weight-space programming need to touch the hidden layers? | https://probe-graft.vercel.app/2/ |
| 3 | 0 | 50533361 | RL Misalignment Under Accurate Rewards and Explicit Requirements | https://www.lesswrong.com/posts/yNYco6JrA3Q9rLMJS/rl-misalignment-under-accurate-rewards-and |
| 2 | 1 | 50534896 | Interact-0, the first always-on model | https://interact.inc/blog/interact-0/ |
| 2 | 0 | 50527682 | A Modular, Extensible, Serving System for Multimodal Models (MStar) | https://mstar.stanford.edu/ |
| 2 | 1 | 50530125 | DeepClause: task- and domain-specific harnesses with Logic Programming | https://github.com/deepclause/deepclause-sdk |
| 2 | 0 | 50528851 | The METR Graph, Updated | https://twitter.com/ben_j_todd/status/2122318704260403562/photo/1 |
| 2 | 0 | 50531823 | Maxwell-V1-Flash 35B-A3B | https://github.com/maxwell-model/Maxwell-V1-Flash |
| 2 | 0 | 50529976 | OVH announces Olala mini 7A1B (en-in mirror) | https://corporate.ovhcloud.com/en-in/newsroom/news/ovh-olala-mini/ |
| 2 | 0 | 50529352 | OVH announces Olala mini 7A1B (en mirror) | https://corporate.ovhcloud.com/en/newsroom/news/ovh-olala-mini/ |
| 1 | 0 | 50530650 | The model with the lower price per token cost me twice as much per task | https://github.com/apimodels/llm-agent-field-notes/blob/main/cost-per-task.md |
| 1 | 0 | 50525932 | Measuring Alignment Eval Tells (METR, 2026-11-16) | https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/ |
| 1 | 0 | 50534423 | What Failure Looks Like (Alignment Forum) | https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like |
| 1 | 0 | 50522079 | Sopro V2: private, fast, on-device text-to-speech | https://research.haloneuro.ai/posts/sopro-v2 |
| 1 | 0 | 50532515 | Show HN: An API for word timestamps from speech, 75 % within 20 ms | https://quebec.yarn.so |
| 1 | 0 | 50531657 | Unbundling Multimodal Vision Encoding | https://unbundling.github.io/ |
| 1 | 0 | 50531554 | Vera Rubin NVL72: 2x Blackwell Ultra Performance in MLPerf Training v6.1 | https://developer.nvidia.com/blog/nvidia-vera-rubin-nvl72-achieves-up-to-2x-blackwell-ultra-performance-in-mlperf-training-v6-1/ |
| 1 | 0 | 50534744 | Show HN: SGNE-CC – 3.13 MiB Qwen3.5-0.8B edit beats MIT-p50c 8.6x at T=0 | https://github.com/Nondual-Observer/dna-weight-editing |

Verified **not** AI (excluded): 50528758 (bus drivers/horses), 50530566 (tax policy), 50530789 (life-expectancy widget), 50534453 (Apple M-Series memory model — arXiv CS/AR, not ML), 50533666 (registry unification essay), 50533540 (AMD DDR5 BIOS), 50529909 (Ask HN: open-source business model), 50522643 (Feinberg chemical reaction-network theory — no ML).

### 1.4 Top AI stories (strict rule)

| Pts | Com | ID | Title | URL |
|---|---|---|---|---|
| 686 | 553 | 50524736 | Windows 11 is collecting data on which coding agents and developer tools you use | https://xusheng.dev/posts/windows-coding-agent-telemetry/ |
| 158 | 145 | 50529612 | How the Claude Code team thinks about verification | https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/ |
| 153 | 195 | 50531751 | Baidu, Xiaomi CEOs warn of growing gap between AI hype and returns | https://www.scmp.com/tech/big-tech/article/3374774/baidu-xiaomi-ceos-warn-growing-gap-between-ai-hype-and-returns |
| 133 | 71 | 50530450 | Regulatory Capture by Anthropic Through METR | https://nitter.cf/kevinnbass/status/2099621874279817638 |
| 124 | 106 | 50526152 | Running coding agents without handing them my credentials | https://blog.antonio.cx/running-agents-with-lend |
| 122 | 307 | 50520804 | Strengthening the fight against online child sexual abuse | https://openai.com/index/strengthening-online-child-safety/ |
| 50 | 20 | 50526264 | Claude Mythos slashed software work to onboard AMD GPUs to around three days | https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-says-claude-mythos-slashed-software-work-to-onboard-amd-gpus-to-around-three-days |
| 48 | 60 | 50523022 | Caltech professor no longer grades homework's because everyone uses AI | https://www.businessinsider.com/ai-math-class-university-homework-caltech-careers-2026-11 |
| 47 | 13 | 50520796 | FBI says Artex AI open-source hacking tool used to breach networks | https://techcrunch.com/2026/11/16/fbi-says-artex-ai-open-source-hacking-tool-used-to-breach-networks |
| 39 | 20 | 50520867 | Nvidia board not considering reinstating Jensen Huang as chief executive | https://www.ft.com/content/e5275763-d7e2-4857-8ac6-6b888111986a |
| 31 | 3 | 50521575 | U.S. tightens controls on remote access to AI technology amid Nvidia fallout | https://www.npr.org/2026/11/16/nx-s1-6042883/nvidia-jensen-huang-commerce-department |
| 30 | 16 | 50526584 | Tokendoctor – See what your Claude Code use overpays | https://github.com/localixai/tokendoctor |
| 27 | 15 | 50523346 | The Fed Is Worried AI Agents Could Trigger a Bank Run | https://gizmodo.com/the-fed-is-worried-ai-agents-could-trigger-a-bank-run-2000840566 |
| 25 | 9 | 50523037 | Kubernetes Is Strengthening Its Position as the AI Platform of Choice | https://cloudnativenow.com/features/kubernetes-is-strengthening-its-position-as-the-ai-platform-of-choice |
| 23 | 6 | 50523955 | No matter how you ask, more Americans are negative than positive about AI | https://ourworldindata.org/no-matter-how-you-ask-more-americans-are-negative-than-positive-about-ai |
| 22 | 1 | 50526156 | Nvidia rules out Jensen Huang comeback as campaign for his return grows | https://www.reuters.com/legal/transactional/silicon-valley-leaders-back-call-jensen-huangs-return-nvidia |
| 19 | 3 | 50526967 | Show HN: Pulsar – cross-harness agent to agent communication and messaging | https://github.com/yocontra/pulsar |
| 17 | 7 | 50529644 | Who Is Anthropic Kidding? | https://www.theatlantic.com/economy/2026/11/anthropic-ipo-ai-safety/689440/ |
| 16 | 2 | 50523838 | California sues OpenAI over AI models' cyberattacks on Hugging Face | https://www.reuters.com/business/california-sues-openai-over-ai-models-cyberattacks-hugging-face-other- |
| 16 | 6 | 50520501 | Nvidia board is not considering bringing Jensen Huang back as CEO | https://www.cnbc.com/2026/11/16/nvidia-ceo-jensen-huang.html |
| 16 | 7 | 50531644 | Show HN: Agav – an open-source terminal agent designed to waste fewer tokens | https://github.com/prapaa-ai/agav |
| 15 | 14 | 50533571 | Mistral offers three months of Vibe Pro free in Europe | https://x.com/MistralAI/status/2122713540666806397 |

Top AI stories only reachable through the curated set: **OpenCode Browse** (314p) and **FrontierHarness eval v1.1** (145p) — i.e. two of the three biggest AI-adjacent threads of the window were invisible to the strict regex.

### 1.5 Top-8 overall HN (denominator context)

2097p "Carnegie Mellon is putting computer science courses on YouTube for free" (50522980) · 812p JPMorgan Chase technical issue (50521045) · 791p school phone bans test scores (50530163) · **686p Windows 11 coding-agent telemetry (50524736)** · 684p "BugMeNot has closed" (50523601) · 572p Optimizely compromised (50524767) · 379p "Software is breaking down at a systemic level" (50520866) · **314p "OpenCode Browse" (50523459, AI, curated-only)**.

---

## 2. Reddit

Feeds pulled as RSS: `r/LocalLLaMA` new + top-of-day, `r/MachineLearning` new + top-of-day. All 4 raw feeds parsed (`tmp/nov17/t2/rd_*.rss`); in-window filter applied to `<published>`.

| Subreddit | Feed | In-window posts | Bytes |
|---|---|---|---|
| r/LocalLLaMA | new | 22 | 81,225 |
| r/LocalLLaMA | top-of-day | 25 | 74,795 |
| r/MachineLearning | new | 13 | 60,496 |
| r/MachineLearning | top-of-day | 13 | 28,507 |

**Union of unique in-window posts: 44** (r/LocalLLaMA 31 unique across both feeds, 16 overlapping; r/MachineLearning 13, fully overlapping between feeds).

### 2.1 r/LocalLLaMA — notable in-window posts

| Time (UTC) | Title | Permalink |
|---|---|---|
| 2026-11-16 17:59 | [NEW RELEASE] - Supra2.5-65M Base and Instruct | https://www.reddit.com/r/LocalLLaMA/comments/1xxw9ik/new_release_supra2565m_base_and_instruct_our_next/ |
| 2026-11-16 18:06 | nvidia/Nemotron-Labs-Sigma 8B/3B | https://www.reddit.com/r/LocalLLaMA/comments/1xxwg6w/nvidianemotronlabssigma_8b3b/ |
| 2026-11-16 18:38 | Open weight models account for 30 % usage at enterprises to save money | https://www.reddit.com/r/LocalLLaMA/comments/1xxxbt9/open_weight_models_account_for_30_usage_at/ |
| 2026-11-16 18:55 | Small Gemma 4 tokenizers were recently updated by Google | https://www.reddit.com/r/LocalLLaMA/comments/1xxxs0a/small_gemma_4_tokenizers_were_recently_updated_by/ |
| 2026-11-16 19:11 | miHoYo Gamer: A Generalist Game Agent | https://www.reddit.com/r/LocalLLaMA/comments/1xxy7eb/mihoyo_gamer_a_generalist_game_agent/ |
| 2026-11-16 20:01 | I am sick of doomposting about demise of local AI (notes "never getting open weight Qwen 4" despite Alibaba committing) | https://www.reddit.com/r/LocalLLaMA/comments/1xxzk23/i_am_sick_of_doomposting_about_demise_of_local_ai/ |
| 2026-11-16 23:36 | Your daily dose of Qwopium: (release calendar) | https://www.reddit.com/r/LocalLLaMA/comments/1xy4xsx/your_daily_dose_of_qwopium/ |
| 2026-11-17 03:16 | Hugging Face switched its language model inference routing to OpenRouter | https://www.reddit.com/r/LocalLLaMA/comments/1xy9o6j/hugging_face_switched_its_language_model/ |
| 2026-11-17 04:04 | maxwell-model/Maxwell-V1-Flash · Hugging Face (35 B total / 3 B active MoE, 256 K ctx) | https://www.reddit.com/r/LocalLLaMA/comments/1xyamk6/maxwellmodelmaxwellv1flash_hugging_face/ |
| 2026-11-17 04:35 | Clover 2: dense 27.8B base + 7 LoRA experts routed per token, not a static merge, weights public | https://www.reddit.com/r/LocalLLaMA/comments/1xyb7jw/clover_2_dense_278b_base_7_lora_experts_routed/ |
| 2026-11-17 06:03 | DSpine - Updates on PR & GGUFs | https://www.reddit.com/r/LocalLLaMA/comments/1xycsm1/dspine_updates_on_pr_ggufs/ |
| 2026-11-17 10:08 | Strix Halo int4 cores: Gemma 4 31B at 2.43x llama.cpp, same quality | https://www.reddit.com/r/LocalLLaMA/comments/1xygpmv/strix_halo_int4_cores_gemma_4_31b_at_243x/ |
| 2026-11-17 10:14 | OVH announces Olala mini 7A1B | https://www.reddit.com/r/LocalLLaMA/comments/1xygtj4/ovh_announces_olala_mini_7a1b/ |
| 2026-11-17 11:29 | nvidia/Qwen3.8-Flash-Next-NVFP4-QAD | https://www.reddit.com/r/LocalLLaMA/comments/1xyi3aa/nvidiaqwen38flashnextnvfp4qad/ |
| 2026-11-17 11:34 | Rotate K/V read order for better L2 cache hit rates (ggml PR #32407) | https://www.reddit.com/r/LocalLLaMA/comments/1xyi6hj/rotate_kv_read_order_for_better_l2_cache_hit/ |
| 2026-11-17 12:02 | Intel Shares First Benchmarks of Its Next-Gen Crescent Island "D270" GPU | https://www.reddit.com/r/LocalLLaMA/comments/1xyioi8/intel_shares_first_benchmarks_of_its_nextgen/ |
| 2026-11-17 12:15 | GPU prices - Big "discounts" | https://www.reddit.com/r/LocalLLaMA/comments/1xyixml/gpu_prices_big_discounts/ |
| 2026-11-17 13:04 | Gemma 4 twice as fast on Ryzen AI Max+ 395 | https://www.reddit.com/r/LocalLLaMA/comments/1xyjxli/gemma_4_twice_as_fast_on_ryzen_ai_max_395/ |
| 2026-11-17 13:33 | The upcoming open weight small Qwen models are likely going to lack training data | https://www.reddit.com/r/LocalLLaMA/comments/1xykjuy/the_upcoming_open_weight_small_qwen_models_are/ |
| 2026-11-17 13:48 | [Harness Adapters] Fine tune Qwen3.8-27B for Pi Agents | https://www.reddit.com/r/LocalLLaMA/comments/1xykw4l/harness_adapters_fine_tune_qwen3827b_for_pi_agents/ |
| 2026-11-17 14:08 | SenseNova Loop 9B | https://www.reddit.com/r/LocalLLaMA/comments/1xylcw4/sensenova_loop_9b/ |
| 2026-11-17 14:18 | Are those that advocate against open weight models public enemy #1 ? | https://www.reddit.com/r/LocalLLaMA/comments/1xyllk7/are_those_that_advocate_against_open_weight/ |
| 2026-11-17 14:26 | everyone's hyped about ChatGPT Dots and Claude Duet… so I built an open source one | https://www.reddit.com/r/LocalLLaMA/comments/1xylrup/everyones_hyped_about_chatgpt_dots_and_claude/ |
| 2026-11-17 14:49 | I benchmarked over 130 LLM configs with multiple stacked 16 GB "e-waste" GPUs (V100, P100, K80) | https://www.reddit.com/r/LocalLLaMA/comments/1xymcjb/i_benchmarked_over_130_llm_configs_with_multiple/ |
| 2026-11-17 15:06 | voi-slop-detect-380M: A tiny model to detect AI slop | https://www.reddit.com/r/LocalLLaMA/comments/1xymsas/voislopdetect380m_a_tiny_model_to_detect_ai_slop/ |
| 2026-11-17 15:14 | SenseNova-Loop-9B vs its own Preview: AutomationBench 14.33→36.67, GAIA 37.86→69.90 | https://www.reddit.com/r/LocalLLaMA/comments/1xymz9z/sensenovaloop9b_vs_its_own_preview/ |
| 2026-11-17 15:45 | Squeezed a full RAG pipeline (BGE-M3 + reranker + TTS) into 4 GB VRAM and 300 MB RAM | https://www.reddit.com/r/LocalLLaMA/comments/1xynrxu/squeezed_a_full_rag_pipeline_bgem3_reranker_tts/ |
| 2026-11-17 16:29 | NVIDIA is introducing the DGX Spark HPC Developer Kit | https://www.reddit.com/r/LocalLLaMA/comments/1xyoyvc/nvidia_is_introducing_the_dgx_spark_hpc_developer/ |
| 2026-11-17 16:31 | I hope Qwen4-Flash is an upgrade for the hardware people already own | https://www.reddit.com/r/LocalLLaMA/comments/1xyp0p1/i_hope_qwen4flash_is_an_upgrade_for_the_hardware/ |

Also in-window (feed-listed, lower salience): "I don't get all the Strata hates around here" (1xxz46x), "Gemma on a printer" (1xyjkts), "Are those that advocate…" (above).

### 2.2 r/MachineLearning — 13 in-window posts

The only research-grade item:

- **"We logged 621k changes from 127k papers' ablations: 26 % didn't help by the papers' own numbers"** (2026-11-17T05:11Z, [P], u/latenticlabs) — meta-science measurement of ablation effect sizes over ICML/NeurIPS/ICLR/CVPR/AAAI/ICCV/ECCV/TPAMI/IJCV/JMLR 2016–2026 (126,758 papers read in full) — https://www.reddit.com/r/MachineLearning/comments/1xybvju/we_logged_621k_changes_from_127k_papers_ablations/

Everything else is venue process or career discussion:
- CVPR 2027: LLM Usage Statement in PDF vs. OpenReview Form? [D] — https://www.reddit.com/r/MachineLearning/comments/1xy25mx/cvpr_2027_llm_usage_statement_in_pdf_vs/
- ICLR 2027: PCs ran an AI detector on reviews, peer review is cooked [D] — https://www.reddit.com/r/MachineLearning/comments/1xyf1tq/iclr_2027_pcs_ran_an_ai_detector_on_reviews_peer/
- Is anyone's AC playing the role of "discussion moderator" for ICLR? [D] — https://www.reddit.com/r/MachineLearning/comments/1xy6t7g/is_anyones_ac_playing_the_role_of_discussion/
- CVPR Pre-submission Review [D] (1xye5j2) · Concerns About Peer Reviewers Inflating OA Scores [D] (1xyg0vu) · How is it possible that OKLS can't outperform Muon in terms of step efficiency? [D] (1xyg48x) · Why are ViTs so popular? [D] (1xyb8q6) · ICLR reviewer radio silence [D] (1xymxsq) · Is it inappropriate to leave a comment for the AC… (1xym86k)
- Curated list of resources: Theory and Code for learning Distributed Training for beginners [P] — https://www.reddit.com/r/MachineLearning/comments/1xyf6pr/curated_list_of_resources_theory_and_code_for/
- Current ML PhD students, would you still choose to do an ML PhD? (1xynl4o) · Struggled in my Infosys interview as a fresher (1xy92xo)

**Reddit signal summary:** the two most-discussed community facts of the day are (i) Hugging Face moving Inference Providers routing to OpenRouter, (ii) an enterprise-usage claim that open-weight models are at 30 % of enterprise usage (up from ~0 since July) — and the dominant emotional thread is *open-weight anxiety* ("we are never getting open weight Qwen 4", "Are those that advocate against open weight models public enemy #1 ?", "I hope Qwen4-Flash is an upgrade…"), directly contradicting the leaderboard state (no Qwen4 open weights exist).

---

## 3. Leaderboards

### 3.1 Artificial Analysis — Intelligence Index (28-row baseline `aa_cmp28.json` → current)

Current board: **29 unique models / 58 rows** (`aa_rows_all.json`), of which **29 rows carry an `idx`**; baseline `aa_rows_all.json` had 30 rows. Row-by-row comparison vs. yesterday's close:

- **0 models added, 0 models removed (1 artifact), 0 rescored.** Every `idx` string is bit-identical (Δ = +0.000000000), rank order unchanged.
- The single `removed` row is **`vidu` (Vidu)** — an extraction artifact of the provider-list parser (creator `e3a5ba75-0127-45b0-8bcc-2864b8dd404d`, model id `d2f534a4-f17b-4117-8449-c10e722520bf`), **not** a model removal. Do not report Vidu as deleted.
- `Qwen4 Max` — **42.8914543287565**, `isOpenWeights: false`, `openSourceCategorization: proprietary`, `sizeClass: large`, `contextWindowTokens: 983616`, effort tier `xhigh` (level 50), releaseDate **2026-11-16** — unchanged.
- `Tencent Hy4` — **34.5552385392508**, `isOpenWeights: false`, `proprietary`, `sizeClass: large`, releaseDate **2026-11-03** — unchanged. (AA carries the parent "Tencent Hy4"; **no separate `hy4-flash` row exists**.)
- `Inkling 2 Small` — **30.6286781498958**, `isOpenWeights: true`, `permissive`, **594 B** params — already on the board; what is new is *distribution* only.

Top of the board (unchanged): 1. Claude Fable 5.2 (Max, Default Fallback) **64.563595756626** · 2. Gemini 4 Carbon (High) **60.025738829526** · 3. Claude Opus 5.5 (Max) **59.1060336078904** · 4. GPT-6 Astra (Max) **56.8538559596797** · 5. GPT-6.1 Sol (Max) **54.6087338138148** · 6. Claude Sonnet 5.5 (Max) **54.54133407109**.
Best open-weights model remains **Kimi K3.1 Pro 46.4526236744189** (`commercial-license`); the open-weights ceiling did not move.

### 3.2 Artificial Analysis — Decision Index (`aa_decision_rows.json`, 28 rows)

**0 rows added, 0 removed, 0 rescored — every `idx` string identical to the 2026-11-16 baseline.** Full current table:

| # | Model | Decision Index |
|---|---|---|
| 1 | Claude Haiku 5.5 (Max) | 76.49216258405318 |
| 2 | GPT-6 Luna (Max) | 75.67452818327847 |
| 3 | **d1.2-ultra** (Liquid AI) | **74.84596115693908** |
| 4 | Drex Max v1.1 | 72.62416891718618 |
| 5 | SubQ Snap 1.2 | 72.58051127736282 |
| 6 | GLiDE v1.2 | 72.51518604270153 |
| 7 | Mammoth 27B | 71.3606271722313 |
| 8 | d1-ultra | 70.57640821306735 |
| 9 | Decider v1.3 | 70.40812045623149 |
| 10 | Decider v1.2 | 69.76625551837046 |
| 11 | GPT-6 Luna (Low) | 68.80089357639407 |
| 12 | **d1.2** (Liquid AI) | **68.69494812821019** |
| 13 | SubQ Snap 1.1 | 67.92112781109881 |
| 14 | Claude Haiku 5.5 (Low) | 67.18077941198649 |
| 15 | d1.1 | 66.48747882133873 |
| 16 | Elephant 9B | 66.38927973293856 |
| 17 | Jev 1.14 | 66.23416034232222 |
| 18 | Gemini Decision 1 | 65.97704607379173 |
| 19 | Decider Flash v1.3 | 64.07164965378 |
| 20 | Microsoft-Decision-1 | 62.071841900952585 |
| 21 | Mercury Decide | 62.06671054636425 |
| 22 | Celeris-1.1 Decision | 61.984155702822896 |
| 23 | Drex 2.0 | 61.56239461370923 |
| 24 | d1 | 60.7814283497953 |
| 25 | Clef | 60.333283101183866 |
| 26 | GPT-6 Luna (Decisions) | 60.246412746474554 |
| 27 | Decider Flash v1.2 | 60.083745412105394 |
| 28 | Clef-Omni | 57.75003536430474 |

Liquid's own claim in its 2026-11-16 post — "*d1.2-ultra scores 75, the highest on the index and two points ahead of the previous best decision model*" — is corroborated by AA's own numbers: 74.8459 → 75 when rounded, and the previous best *decision* model (Drex Max v1.1, 72.6242) is ~2.2 points behind. Two general-purpose models (Claude Haiku 5.5 Max 76.4922, GPT-6 Luna Max 75.6745) still sit above it overall, so "highest" holds only within the decision-model class. Cost data unchanged: `d1.2-ultra` remains by far the cheapest top-3 model (0.000133 vs 0.006218 for Haiku 5.5 Max, 0.001548 for GPT-6 Luna Max) — roughly 47× cheaper per call than the leader.

### 3.3 Artificial Analysis — changelog (91 entries)

Baseline 92 → current **91**. Diff vs. yesterday's baseline:
- **Added (3), all dated 2026-11-16, all `hostModelAdded` for `Inkling 2 Small`:** Nebius (`2d0a5d9e-b5f5-48ed-a552-6c2bae2738d7`), DeepInfra (`0e06ca03-9045-446e-acd1-780fb8fc8988`), Together AI (`6c0b3e8e-c6f2-4889-8f4d-68efc0f181d7`) — model id `fef6625d-9097-45f6-95c0-bcaa06e3d8e1`, host ids `41a856c4-5c43-42e4-bdec-f0e14629a0f2` / `a1575ad8-55b5-4652-8e4a-22099e72f1f9` / `e0bfeec9-405f-4e75-b120-a52bdd70c812`.
- **Removed (4)** — older entries dropped from the visible changelog list: `2026-11-05 hostModelAdded Kimi K3.1 Pro / Systalyze`, `2026-11-01 hostModelAdded Gemini 4 Carbon (Medium) / Google`, `2026-11-01 hostModelAdded DeepSeek V4.1 Flash 1017 (High) / DeepSeek`, `2026-10-30 modelAdded DeepSeek V4.1 Flash 1017 (Non-reasoning)`. These are list-truncation artefacts, not retraction of models.
- Most recent entries now: 2026-11-16 (3× Inkling 2 Small hosts) → 2026-11-15 `modelAdded Qwen4 Max` (`5ea61e4b-9cbb-4603-b45b-7c87a7524b5f`) and `hostModelAdded Qwen4 Max / Alibaba Cloud` (`80fe55cf-23ed-4b3d-869a-575b563842ae`) → 2026-11-13 `modelAdded Gemini 4 Argon (Medium)` (`00b707a3-c922-4838-8f27-b4400d869632`), `modelAdded DeepSeek V4 Pro 0813 (High)` (`59093467-9f5f-4107-bb69-57ba13c29fca`), `hostModelAdded GLM-5.3-Flash / Zyphra` (`cfaf3e8f-9f94-485d-959b-88ee01e53872`).
- **Zero entries dated 2026-11-17.**

### 3.4 BenchLM (`https://benchlm.ai/api/data/leaderboard`)

| Field | Baseline (2026-11-16 snapshot) | Current |
|---|---|---|
| `lastUpdated` | 2026-11-15 | **2026-11-17** |
| `sourceSnapshotId` | `2026-11-15-323a83e43ce62771` | **`2026-11-17-1bbb3d2c2ccd4a8b`** |
| `methodologyVersion` | `bench-align-v5.8-2026-09-30` | `bench-align-v5.8-2026-09-30` (unchanged) |
| `mode` | `bench-align-v5` | `bench-align-v5` |
| `approvedSnapshotId` | null | null |
| `orderingMeaning` | "Point-estimate order; an Estimated row with under two source families never ranks above a row within 2 points below it; conditional ranges do not establish rank confidence." | identical (unchanged) |
| Rows | 50 | 50 |

**Roster changes:** added **`Qwen4 Max`** (Alibaba, Proprietary, rank **40**, overall **65.02**, agentic 73.67 rank 10, knowledge 69.60 rank 20, reasoning/coding/math/multimodalGrounded/multilingual all `null`, `evidenceStatus: estimated`, interval90 50.67–79.36, source pattern `objective-only`, 12 pattern-calibration families); removed **`Sage-A1.5`**.

**All 27 changed rows** (score Δ and rank Δ vs. the 2026-11-15 baseline snapshot):

| Model | Base score | Cur score | Δscore | Base rank | Cur rank | Δrank |
|---|---|---|---|---|---|---|
| GPT-6.1 Sol | 84.59 | 84.55 | −0.04 | 5 | 5 | 0 |
| Claude Sonnet 5.5 | 83.13 | 83.15 | +0.02 | 6 | 6 | 0 |
| Gemini 4 Argon | 79.42 | 79.41 | −0.01 | 8 | 8 | 0 |
| Gemini 4 Hydrogen | 79.65 | 79.66 | +0.01 | 9 | 9 | 0 |
| GPT-6 Sol | 77.39 | 77.41 | +0.02 | 10 | 10 | 0 |
| GPT-6.1 Terra | 78.72 | 78.73 | +0.01 | 11 | 11 | 0 |
| Claude Opus 5 | 76.22 | 76.23 | +0.01 | 13 | 13 | 0 |
| GPT-5.6 Sol | 72.43 | 72.44 | +0.01 | 14 | 14 | 0 |
| Muse Wonder Full | 72.74 | 72.75 | +0.01 | 15 | 15 | 0 |
| Kimi K3 | 68.35 | 68.37 | +0.02 | 18 | 18 | 0 |
| Claude Opus 4.8 | 67.41 | 67.42 | +0.01 | 20 | 20 | 0 |
| Grok 4.6 | 66.20 | 66.21 | +0.01 | 21 | 21 | 0 |
| Muse Spark 1.2 | 65.04 | 65.02 | −0.02 | 28 | 28 | 0 |
| Claude Opus 4.7 (Adaptive) | 66.37 | 66.38 | +0.01 | 31 | 31 | 0 |
| Claude Haiku 5.5 | 63.60 | 63.61 | +0.01 | 34 | 34 | 0 |
| Qwen3.8 Max | 63.56 | 63.57 | +0.01 | 35 | 35 | 0 |
| Muse Spark 1.1 | 63.49 | 63.50 | +0.01 | 36 | 36 | 0 |
| **Qwen4 Max** | — | **65.02** | NEW | — | **40** | — |
| dots3-note Preview | 62.71 | 62.71 | 0.00 | 40 | 41 | +1 |
| Grok 4.5 | 62.65 | 62.65 | 0.00 | 41 | 42 | +1 |
| Gemini 3.6 Flash | 62.19 | 62.20 | +0.01 | 42 | 43 | +1 |
| Gemini 3.5 Flash | 61.94 | 61.95 | +0.01 | 43 | 44 | +1 |
| Claude Opus 4.6 | 61.91 | 61.91 | 0.00 | 44 | 45 | +1 |
| GPT-5.3 Codex | 61.65 | 61.66 | +0.01 | 45 | 46 | +1 |
| Ornith-1.5-397B | 61.23 | 61.23 | 0.00 | 46 | 47 | +1 |
| GPT-6 Luna | 61.20 | 61.20 | 0.00 | 47 | 48 | +1 |
| GLM-5.3 | 60.91 | 60.88 | −0.03 | 48 | 49 | +1 |
| Qwen3.7 Max | 60.79 | 60.79 | 0.00 | 49 | 50 | +1 |

Every rank movement is a pure +1 shift of the bottom block caused by the Qwen4 Max insertion at rank 40; no score moved more than 0.04. Top of board unchanged: Claude Fable 5.2 93.84 · Gemini 4 Carbon 89.56 · Claude Opus 5.5 86.81 · GPT-6 Astra 85.65 · GPT-6.1 Sol 84.55 · Claude Sonnet 5.5 83.15.

### 3.5 Hugging Face

- `https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=200` → 200 repos spanning **2026-11-17T16:47:05Z → 2026-11-17T17:32:30Z** (a ~45-minute slice at the very end of the window); the 1000-repo slice spans **2026-11-17T11:55:52Z → 2026-11-17T17:38:47Z** (**all 1,000 in-window or later**, i.e. it covers only the last ~5.5 h of the window and extends ~11 min past its end), total downloads **0**, total likes **44** — a freshness snapshot, not a day census.
- Per-org listings (60 and 200 items each) for anthropic, openai, google, deepseek-ai, meta-llama, mistralai, Qwen, zai-org, moonshotai, nvidia, tencent, internlm, openbmb, liquid-ai, unsloth: **in-window frontier-lab weights = exactly 1** — `nvidia/Qwen3.8-Flash-Next-NVFP4-QAD`, created **2026-11-17T09:32:35.000Z**, 0 downloads / 24 likes, `image-text-to-text` pipeline tag. All other orgs: **0 in-window** (their newest repos predate the window: Qwen `Qwen-Image-2.1-Turbo` 2026-10-09; DeepSeek `DeepSeek-V4.1-Flash-1017` 2026-10-17; Mistral `Mistral-Large-4-1T-A52B-NVFP4` 2026-10-15; Tencent `Qwen3.8-27B-DSpine-b16` 2026-11-07; zai-org `GLM-5.3*` 2026-08-25; internlm `Sage-S2.1-Flash` 2026-11-15; Moonshot `Kimi-K3.1-Pro` 2026-11-02; unsloth `MiniMax-H3-Image-GGUF` 2026-11-12; openbmb `MiniCPM-OCR-1.0-DSpark` 2026-10-26; google `embeddinggemma-2` 2026-09-14; meta-llama 2025-04-28; openai `openai/privacy-filter` 2026-04-17).
- `anthropic` and `liquid-ai` HF org listings return **0 models** (API returns `[]`; the Anthropic org object reports `numModels: 0`) — no frontier weights there either.
- Community activity in-window is dominated by quants/GGUF/LoRA/RL fine-tunes: e.g. `AJ-Gonzalez/coder-lfm3-1.7b-qwen4-max` (2026-11-16T10:37:33Z — **before** the window, a third-party derivative, *not* an official Qwen4-Max release), `anemll/Hy4-preview-FlashMoE-STQ1_0` (2026-09-03T02:49:34Z), `maxwell-model/Maxwell-V1-Flash`, `MachinePulseAI/karpo-decision-31B` (2026-11-05T15:33:15Z, 683 dl / 41 likes) and the karpo-decision size family (0.8B/2B/4B/9B/12B, all 2026-11-12).

---

## 4. Model & product announcements in-window

| Model / item | Date | Type | Detail | Source |
|---|---|---|---|---|
| **Liquid AI `d1.2` + `d1.2-ultra`** | NOV 16, 2026 | API release (no weights) | New decision-model versions with **audio input** and **five new task types** (read a value; find every passage of a kind; locate things in a picture; estimate a number with a range; pick every option that applies). `d1.2` **$0.02** / M input tokens, `d1.2-ultra` **$0.042** / M input tokens. Endpoint `https://api.liquid.ai/decisions/v1/systemone`; console `console.liquid.ai`. Blog id `blog:d1-2`, path `/blog/d1-2`. AA Decision Index v2.1: d1.2-ultra **74.84596115693908** (top decision model), d1.2 **68.69494812821019**. | https://www.liquid.ai/blog/d1-2 |
| **OVH Olala mini 7A1B** | 2026-11-17 | Model announcement | OVH's "first model with EU public funding and supercomputer access"; 3 HN submissions (8/1, 2/0, 2/0) + r/LocalLLaMA | https://corporate.ovhcloud.com/en/newsroom/news/ovh-olala-mini/ · https://twitter.com/olesovhcom/status/2122573582911869173 |
| **nvidia/Qwen3.8-Flash-Next-NVFP4-QAD** | 2026-11-17T09:32:35Z | Open weights (quantized, NVFP4) | Only frontier-lab HF repo in-window | https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4-QAD |
| **Maxwell-V1-Flash** (maxwell-model) | 2026-11-17 | Open weights, MoE 35 B total / 3 B active, 256 K ctx | r/LocalLLaMA #10, HN 50531823 | https://huggingface.co/maxwell-model/Maxwell-V1-Flash |
| **Clover 2** | 2026-11-17 | Open weights | Dense 27.8B base + **7 LoRA experts routed per token** (not a static merge): roleplay, general assistant, security, math, long-document, efficiency, knowledge | https://www.reddit.com/r/LocalLLaMA/comments/1xyb7jw/clover_2_dense_278b_base_7_lora_experts_routed/ |
| **SenseNova Loop 9B** | 2026-11-17 | Open weights, 9B "Looped" | Community-reported AutomationBench 14.33→36.67, GAIA 37.86→69.90 vs its own Preview | https://www.reddit.com/r/LocalLLaMA/comments/1xymz9z/sensenovaloop9b_vs_its_own_preview/ |
| **Supra2.5-65M Base and Instruct** | 2026-11-16T17:59Z | Open weights | r/LocalLLaMA top-of-day #1 | https://www.reddit.com/r/LocalLLaMA/comments/1xxw9ik/new_release_supra2565m_base_and_instruct_our_next/ |
| **Nemotron-Labs-Sigma 8B/3B** (NVIDIA) | 2026-11-16T18:06Z | Open weights | Continuous-diffusion language model (denoises in a 16-D continuous token-embedding space) | https://www.reddit.com/r/LocalLLaMA/comments/1xxwg6w/nvidianemotronlabssigma_8b3b/ |
| **miHoYo Gamer** | 2026-11-16T19:11Z | Open weights | "A Generalist Game Agent" | https://www.reddit.com/r/LocalLLaMA/comments/1xxy7eb/mihoyo_gamer_a_generalist_game_agent/ |
| **Interact-0** | in-window | Model | "The first always-on model" (HN 50534896, 2p) | https://interact.inc/blog/interact-0/ |
| **SolveIt** (fast.ai) | 2026-11-16 | Public launch | HN 50527381, 6p | https://www.fast.ai/posts/2026-11-16-solveit-launch/ |
| **FrontierHarness eval v1.1** | in-window | Benchmark | HN 50532191, **145p / 64c** — the window's most-discussed eval item | https://runta.com/blog/introducing-frontierharness-eval-v1-1/ |
| **METR "Measuring Alignment Eval Tells"** | 2026-11-16 | Eval research | HN 50525932, 1p | https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/ |
| **MStar** (Stanford) | in-window | Serving system | "A Modular, Extensible, Serving System for Multimodal Models" (HN 50527682) | https://mstar.stanford.edu/ |
| **DeepClause SDK** | in-window | Harness tooling | Task/domain-specific harnesses with Logic Programming (HN 50530125) | https://github.com/deepclause/deepclause-sdk |
| **OpenAI: Strengthening NATO and allied cyber defenses with AI** | 2026-11-17T00:00Z | Policy | In-window OpenAI index post | https://openai.com/index/strengthening-nato-allied-cyber-defences-ai |
| **OpenAI: Introducing OpenAI for Chile** | 2026-11-17T00:00Z | Market expansion | In-window OpenAI index post | https://openai.com/index/introducing-openai-for-chile |
| **Hugging Face → OpenRouter routing** | 2026-11-16 (announced) | Platform | Inference Providers now route LM requests through OpenRouter (price/speed/reliability based provider selection with failover) | https://www.reddit.com/r/LocalLLaMA/comments/1xy9o6j/hugging_face_switched_its_language_model/ |
| **Mistral: 3 months Vibe Pro free in Europe** | 2026-11-17 | Commercial | HN 50533571, 15p | https://x.com/MistralAI/status/2122713540666806397 |

### Vendor pages checked for in-window posts

- `https://www.liquid.ai/news/models` — `dateModified: 2026-11-16`; newest entry is **d1.2: State-of-the-Art Omnimodal Decision Models** (NOV 16, 2026), path `/blog/d1-2`. No 2026-11-17 Liquid post.
- `https://qwen.ai/blog` — 89,350 bytes, unchanged size vs. yesterday; contains only the `qwen4-max` blog id in its client-side routing script ("Qwen4-Max: Your New Teammate Has Arrived" / 「Qwen4-Max：新同事，已就位」) and **no new dated post**. `https://qwen.ai/blog?id=qwen4-max` returns the same shell. **No new Qwen release in-window.**
- `https://api-docs.deepseek.com/updates` — newest entry **2026-11-13** ("Releasing the full suite of application APIs"). **No in-window DeepSeek post.**
- `https://hy.tencent.ai/` and `https://hy.tencent.ai/research/hy4-flash?langVersion=en` — JavaScript-rendered shells (7,351 / 6,519 bytes) with no extractable article body. **Inconclusive**, see §5.
- `https://openai.com/index` — JS/anti-bot placeholder (9,857 bytes). Resolved instead via the official feed `https://openai.com/news/rss.xml` (853,971 bytes, 1,403 items), from which the two in-window posts above are dated 2026-11-17T00:00:00Z.

---

## 5. Negative signals / what did NOT happen

1. **Artificial Analysis published no new model and no new score during the window.** Only 3 changelog entries, all dated **2026-11-16**, all `hostModelAdded` for Inkling 2 Small (Nebius, DeepInfra, Together AI). **Zero entries dated 2026-11-17.** The Intelligence Index board is unchanged on all 29 models and the Decision Index board is bit-identical on all 28 rows for the second consecutive day.
2. **No open weights for Qwen4-Max.** No `Qwen/Qwen4-Max` repo (the Qwen org's newest repo is `Qwen-Image-2.1-Turbo`, 2026-10-09); AA still reports `isOpenWeights: false` / `proprietary`; the only "Qwen4-Max" HF repo is a third-party derivative (`AJ-Gonzalez/coder-lfm3-1.7b-qwen4-max`, 2026-11-16T10:37:33Z) that predates the window. Qwen4 Max remains **API-only**.
3. **No open weights for Tencent Hy4 / Hy4 Flash.** The only HF hit for "Hy4-Flash" is `anemll/Hy4-preview-FlashMoE-STQ1_0` (2026-09-03, community); the `tencent` org's newest repo is 2026-11-07; AA carries the parent `Tencent Hy4` with `isOpenWeights: false`. **No new Hy4 row on AA** (no `hy4-flash` slug anywhere in the AA payload) and no in-window Hy4 announcement text extractable from the JS-only `hy.tencent.ai` page.
4. **Karpo-Decision-31B is not scored by Artificial Analysis.** No `karpo` string anywhere in the AA payload; no Decision Index row. The weights exist only on HF (`MachinePulseAI/karpo-decision-31B`, 2026-11-05, plus 0.8B/2B/4B/9B/12B on 2026-11-12) — so the claimed 73.9 Decision Index figure remains **unverified by AA**.
5. **"No Second Run" `801-30B-A3B-Base` weights did not ship.** HF searches for `801-30B-A3B`, `801-30B-A3B-Base`, `801-30B`, `Second-Run`, `second_run`, `nsecond` and author `no-second-run` / `nosecondrun` / `second-run` return **zero** matching repositories; the only `A3B-Base` hits are unrelated (Qwen3-30B-A3B-Base, Nemotron-3.5-Lightning-30B-A3B-Base, GSAI LLaDA-MoE-v2-30B-A3B-Base, Villanova2-15B-A3B-Base). The "Coming Soon" status is unchanged.
6. **HN had zero Qwen4 / Hy4 / Tencent / Karpo / "801" mentions** in-window — the two blockbuster launch threads of the previous cycle (Qwen4-Max 790p; Hy4 Flash) both aged out within a day, so the community's *attention* to frontier launches was much shorter-lived than the leaderboards' content.
7. **No frontier-lab open-weight release of substance**: 1 of 1,000 in-window HF repos (NVIDIA's NVFP4 quantization of Qwen3.8-Flash-Next); 0 downloads across the whole slice.
8. **BenchLM's refresh was a rounding-level no-op**: 27/50 rows moved but max |Δscore| = 0.04 and every rank move is a +1 shift of the bottom block caused by the Qwen4 Max insertion.
9. **No DeepSeek, Qwen or Liquid vendor post dated 2026-11-17.**
10. **Reddit's research throughput stayed low** — one research-grade post in r/MachineLearning (621k ablations) against 12 process/discussion posts; the previous cycle's FAIR+NYU encoder study, Marimba, the CUDA tool and the early-exit weight edit are all gone from the feed.

---

## 6. Follow-up answers (a)–(f)

**(a) Did Qwen4-Max get open weights, or is it still API-only?**
**Still API-only — no change.** Evidence: (i) AA payload entry `{"id":"fef6625d-9097-45f6-95c0-bcaa06e3d8e1","slug":"qwen4-max","name":"Qwen4 Max","releaseDate":"2026-11-16","isOpenWeights":false,"openSourceCategorization":"proprietary","sizeClass":"large","intelligenceIndex":42.8914543287565,…,"contextWindowTokens":983616}`, also visible on the model page https://artificialanalysis.ai/models/qwen4-max; (ii) no `Qwen/Qwen4-Max` repo on HF — the Qwen org's newest repo is `Qwen/Qwen-Image-2.1-Turbo` (2026-10-09T04:50:01Z); HF `search=Qwen4-Max` / `search=Qwen4` returns only community derivatives such as `AJ-Gonzalez/coder-lfm3-1.7b-qwen4-max` (2026-11-16T10:37:33Z); (iii) BenchLM lists Qwen4 Max as `sourceType: Proprietary`. Benchmark coverage *did* grow: AA scored it at 42.8915 on 2026-11-15 (`modelAdded`, `5ea61e4b-9cbb-4603-b45b-7c87a7524b5f`) and BenchLM added it on 2026-11-17 at rank 40 / 65.02.

**(b) Did Tencent Hy4 Flash ship weights, or what is its current status?**
**No weights shipped — no change; it remains API-only and, on AA, only the parent "Tencent Hy4" exists.** Evidence: (i) `hy.tencent.ai` (7,351 bytes) and `hy.tencent.ai/research/hy4-flash?langVersion=en` (6,519 bytes) are JavaScript-only shells — the article body could not be extracted, so this page gives **no** usable confirmation either way; (ii) HF `search=Hy4-Flash` returns exactly one hit, the community repo `anemll/Hy4-preview-FlashMoE-STQ1_0` (2026-09-03T02:49:34Z); `search=Hy4` returns no official tencent repo; the `tencent` org's newest repo is `tencent/Qwen3.8-27B-DSpine-b16` (2026-11-07T14:20:29Z); (iii) AA has **no** `hy4-flash` slug — only `{"slug":"tencent-hy4","name":"Tencent Hy4","releaseDate":"2026-11-03","isOpenWeights":false,"openSourceCategorization":"proprietary","intelligenceIndex":34.5552385392508}`; (iv) no in-window HN or Reddit announcement of Hy4 weights. Status: **announced 2026-11-16, weights not released, AA score unchanged at 34.5552 (parent model)**.

**(c) Did Liquid `d1.2` / `d1.2-ultra` change on the AA Decision Index, and did Karpo-Decision-31B get verified/scored by AA?**
**Liquid: no change in-window.** The Decision Index is byte-identical to the 2026-11-16 baseline on all 28 rows: `d1.2-ultra` = **74.84596115693908**, `d1.2` = **68.69494812821019** — i.e. AA had already scored both models *before* the window opened (Liquid's blog post is dated NOV 16, 2026 and its own numbers — "d1.2-ultra scores 75, the highest on the index and two points ahead of the previous best decision model" — match AA's rounded 75 and the 72.62 → ~2.2-point gap to Drex Max v1.1). AA's changelog contains **no** Liquid entries in-window. **Karpo-Decision-31B: still not scored.** No `karpo` string exists in the AA payload, no Decision Index row, no `modelAdded` changelog entry; only the HF weights exist (`MachinePulseAI/karpo-decision-31B`, 2026-11-05T15:33:15Z, 683 downloads / 41 likes; plus karpo-decision 0.8B/2B/4B/9B/12B all created 2026-11-12). The claimed 73.9 Decision Index figure remains **unverified**.

**(d) Artificial Analysis had published nothing after 2026-11-13 for two consecutive days — did it publish on 16 or 17 Nov?**
**Yes — on 16 Nov, but only host/distribution entries.** The changelog's three newest entries are all dated **2026-11-16** and are all `hostModelAdded` for **Inkling 2 Small** on **Nebius** (`2d0a5d9e-b5f5-48ed-a552-6c2bae2738d7`), **DeepInfra** (`0e06ca03-9045-446e-acd1-780fb8fc8988`) and **Together AI** (`6c0b3e8e-c6f2-4889-8f4d-68efc0f181d7`). **Nothing dated 2026-11-17.** The prior "nothing after 2026-11-13" claim is therefore **corrected**: AA did publish on 16 Nov (3 host entries), but published **no new model and no new score** on 16 or 17 Nov — hence two consecutive days of a frozen Intelligence/Decision board.

**(e) BenchLM published a third distinct `sourceSnapshotId` under one `lastUpdated` date — did a fourth appear, and did the date advance?**
**Yes — the date advanced and a new, distinct snapshot id appeared.** `lastUpdated` moved **2026-11-15 → 2026-11-17** and `sourceSnapshotId` moved **`2026-11-15-323a83e43ce62771` → `2026-11-17-1bbb3d2c2ccd4a8b`**. `methodologyVersion` stayed `bench-align-v5.8-2026-09-30` and `orderingMeaning` is unchanged, so this is a data refresh under identical methodology. Caveat: only two snapshots are cached (baseline + current), so the intermediate ids (the previously observed 2nd/3rd snapshots under the 2026-11-15 date) cannot be enumerated from disk; what is verifiable is that the current id is different from the 2026-11-15 one, that the date advanced by two days, and that the roster changed (`Qwen4 Max` in, `Sage-A1.5` out). Whether BenchLM published additional snapshots between 2026-11-15 and 2026-11-17 is **not determinable** from the cached artifacts.

**(f) Did the "No Second Run" `801-30B-A3B-Base` weights ship?**
**No.** Every targeted HF query returns nothing: `search=801-30B-A3B` → **0 models**; `search=801-30B-A3B-Base` → `[]`; `search=Second-Run` / `second_run` → only unrelated 2023–2025 finetunes; `search=nsecond` → 0; `author=no-second-run` / `nosecondrun` / `second-run` → `[]`. The nearest `A3B-Base` repos are unrelated (`Qwen/Qwen3-30B-A3B-Base` 2025-04-28, `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-Base-BF16` 2026-08-05, `GSAI-ML/LLaDA-MoE-v2-30B-A3B-Base` 2026-08-17, `VillanovaAI/Villanova2-15B-A3B-Base` 2026-10-26). The 2026-11-14 announcement remains a **"Coming Soon"** promise (801 B total / 30 B active), unreleased.

---

## 7. Coverage caveats & measurement limits

1. **HN is exhaustive; Reddit is not.** Algolia `nbHits` for the whole window equals the number of unique stories retrieved (1,328), so HN coverage is complete. Reddit RSS gives only the 25 newest entries per feed (and the two MachineLearning feeds overlap completely), so 44 unique in-window posts is a **floor**, not a census of the subreddits' activity.
2. **Reddit RSS carries no score or comment counts** — all Reddit rankings here are feed position only, and "top-of-day" is the cached feed rather than a verified ordering. Direct `.json` retrieval of the 44 permalinks returned **HTTP 403 Blocked** for all 44 (Reddit anti-bot), so no engagement data could be attached.
3. **HN Algolia returns no comment bodies** — every quote in this report is a title quote, not a comment quote. Points/comments are snapshot values at fetch time and drift.
4. **The AI-relevance rule is a regex, not a classifier.** Strict rule: 396 / 1,328 = **29.8 %**; hand-curated additions: **423 / 1,328 = 31.9 %**. Both are reported. Known remaining blind spots for this window: `opencode.ai`, `runta.com`, `metr.org`, `ovhcloud.com`, `interact.inc`, `apimodels` hosts are not in the host allow-list, so `OpenCode Browse` (314p) and `FrontierHarness` (145p) were missed by the rule. Conversely the `\bcomputer use\b` pattern remains in `ai_kw.txt` and is a latent false-positive source (it did not fire this window).
5. **AA row extraction is heuristic** and produced two known artefacts: the `vidu` row disappearing (provider-list artefact, **not** a model removal) and four older changelog entries dropping off the visible list (truncation, **not** retraction). AA rows also include multiple effort tiers of the same model, so 58 rows ≠ 58 models (29 unique).
6. **BenchLM's `rank` is not a pure sort of `overallScore`** — the `orderingMeaning` rule states that an *Estimated* row backed by fewer than two source families never ranks above a row within 2 points below it, and conditional ranges do not establish rank confidence. Qwen4 Max (rank 40, 65.02) and many of its neighbours are `evidenceStatus: estimated` with `null` category scores, so rank and score must be read together.
7. **The HF slice covers only the newest 1,000 repos (last ~5.5 h of the window)** (2026-11-17T11:55:52Z → 17:38:47Z) and the 200-repo slice covers ~45 minutes; per-org listings (60/200 items, sorted by createdAt desc) are the real signal for frontier labs, but they cap at 60–200 items per org, so an org with a very high release rate could push an in-window repo below the cut. All in-window slice repos show 0 downloads (too new to accumulate).
8. **HF payloads lack parameter counts and context lengths** for most repos in this slice — those fields were absent from the API response, so they are reported as unavailable rather than estimated.
9. **JS-only pages are inconclusive, not negative.** `hy.tencent.ai` and `qwen.ai/blog` render client-side; `openai.com/index` served an anti-bot placeholder. The OpenAI check was therefore resolved through the official `https://openai.com/news/rss.xml` feed (1,403 items, dated entries), which is authoritative for OpenAI index posts. Absence of a readable article is **not** evidence that no release occurred on those specific sites.
10. **No web_search / web_fetch was used** — all claims are primary-source curl fetches cached under `tmp/nov17/t2/`, reproducible offline from those artifacts.

---

## Source URLs (primary)

- Hacker News: `https://news.ycombinator.com/item?id=<objectID>` (50524736, 50529612, 50531751, 50530450, 50526152, 50520804, 50532191, 50528263, 50525932, 50523459, 50526537)
- HN API: `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1794850080,created_at_i<1794936480&hitsPerPage=1000`
- Artificial Analysis: https://artificialanalysis.ai/ · https://artificialanalysis.ai/models/qwen4-max · https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index · changelog payload in `tmp/nov17/t2/aa_changelog_data.json`
- BenchLM: https://benchlm.ai/api/data/leaderboard
- Hugging Face API: https://huggingface.co/api/models · https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4-QAD · https://huggingface.co/MachinePulseAI/karpo-decision-31B
- Reddit: https://www.reddit.com/r/LocalLLaMA/ · https://www.reddit.com/r/MachineLearning/
- Vendors: https://www.liquid.ai/blog/d1-2 · https://www.liquid.ai/news/models · https://qwen.ai/blog · https://api-docs.deepseek.com/updates · https://hy.tencent.ai/research/hy4-flash?langVersion=en · https://openai.com/news/rss.xml · https://openai.com/index/strengthening-nato-allied-cyber-defences-ai · https://openai.com/index/introducing-openai-for-chile · https://corporate.ovhcloud.com/en/newsroom/news/ovh-olala-mini/ · https://www.fast.ai/posts/2026-11-16-solveit-launch/ · https://runta.com/blog/introducing-frontierharness-eval-v1-1/ · https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/ · https://mstar.stanford.edu/ · https://interact.inc/blog/interact-0/ · https://opencode.ai/product/browse
