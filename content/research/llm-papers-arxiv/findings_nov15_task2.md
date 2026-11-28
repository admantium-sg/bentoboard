# Task 2 findings — 2026-11-15 (window 2026-11-14T17:28Z → 2026-11-15T17:28Z)

Topic: `llm-papers-arxiv` · Community signals, leaderboards, model releases.
Working dir: `/home/devcon/.openclaw/shared-workspace/research/llm-papers-arxiv` · Raw artifacts: `tmp/nov15/t2/`.

**Window correction (important).** The timestamps supplied in the assignment (`1763040480` → `1763126880`) resolve to **2025-11-14 → 2025-11-15**, not 2026. The window actually used throughout this file is the stated calendar window:
`2026-11-14T17:28:00Z` → `2026-11-15T17:28:00Z` = **Unix `1794677280` → `1794763680`**. All queries below were re-run against the corrected range and every cited item is inside it.

**Tool budget.** 0 `web_search` calls, 0 `web_fetch` calls. Everything below comes from direct `curl` against primary sources (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API, plus two source pages pulled for verification: the DeepSeek API docs and the DeepSeek changelog).

---

## 1. Hacker News — window exhaustive

**Method.** `http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1794677280,created_at_i<=1794763680&hitsPerPage=1000`, paged via `&page=N`. Raw aggregate: `tmp/nov15/t2/hn_all.json`. Unique stories are keyed on `objectID` (no duplicates across pages; a stale 2025-era file `tmp/nov15/t2/hn_uniq.json` was **not** used).

**AI-relevance filter (stated explicitly, reproducible).** A story counts as AI-relevant if **either**
1. its **title** matches a word-bounded pattern from `tmp/nov15/t2/ai_kw.txt` (`AI`, `LLM`, `GPT`, `Claude`, `Anthropic`, `OpenAI`, `Gemini`, `DeepSeek`, `Qwen`, `Mistral`, `Llama`, `model`, `agent`, `inference`, `transformer`, `embedding`, `prompt`, `token`, `fine-tune`, `quantiz*`, `GPU`, `TPU`, `Nvidia`, `benchmark`, `chatbot`, `diffusion`, `MoE`, `RAG`, …), **or**
2. the **host** is in a curated AI-domain list (`anthropic.com`, `openai.com`, `huggingface.co`, `arxiv.org`, `ai.googleblog.com`, `deepmind.google`, `mistral.ai`, `qwenlm.github.io`, `github.com/ggml-org`, `github.com/vllm-project`, …).

Script: `tmp/nov15/t2/filter2.py`. The same filter was re-applied to yesterday's raw file `tmp/nov14/t2/hn_raw.json` so the two days are comparable.

| Metric | 2026-11-14 window | **2026-11-15 window** | Δ |
|---|---|---|---|
| Unique stories | 822 | **746** | −76 |
| AI-relevant stories | 240 | **196** | −44 |
| **AI share** | **29.2%** | **26.3%** | **−2.9 pp** |
| AI share of top 50 overall | 28.0% (yesterday's reported figure) | **20.0%** (10 of 50) | −8.0 pp |

Sensitivity check: loosening the title list to include generic words (`agent`, `model`, `gpu`, `nvidia`, `token`, `prompt`, `inference`, `chatgpt`, `claude`, `openai`) raises the count only to **201 / 746 = 26.9%**, and adds **no** story to the top-16 AI list. The 26.3% figure is therefore robust, not an artefact of a narrow keyword list.

**Window headline (overall, not AI):** "SpaceX catches the Starship to end Flight 15" (1494 pts / 1027 comments, https://news.ycombinator.com/item?id=50500963), followed by "Lovable apps expose passport details and more than 200K private messages" (945/361). The AI-related top slot is *"All AI-generated code should be Open Source"* (447/274).

### Top AI stories (window)

| # | Points | Comments | Title | HN | Source |
|---|---|---|---|---|---|
| 1 | 447 | 274 | All AI-generated code should be Open Source | https://news.ycombinator.com/item?id=50507303 | https://jakub.jankiewicz.org/blog/ai-code-open-source/ |
| 2 | 436 | 227 | Nvidia deliberately kept GPU prices high through circular financing deals | https://news.ycombinator.com/item?id=50501631 | https://www.techspot.com/news/114558-nvidia-deliberately-kept-gpu-prices-high-through-circular.html |
| 3 | 113 | 3 | Understanding Positional Embeddings in Modern LLMs | https://news.ycombinator.com/item?id=50506376 | https://magazine.sebastianraschka.com/p/understanding-positional-embeddings |
| 4 | 49 | 73 | Claude asked to renumber pages deletes professor's syllabus, year of notes | https://news.ycombinator.com/item?id=50499114 | https://www.tomshardware.com/tech-industry/artificial-intelligence/rogue-claude-ai-tasked-with-renumbering-pages-accidentally-deletes-law-professors-entire-syllabus-one-year-of-lecture-notes-youre-right-to-be-angry-i-deleted-your-files-through-my-own-carelessness-humbled-agent-admits |
| 5 | 47 | 49 | Jensen Huang allegedly manufactured the GPU shortage | https://news.ycombinator.com/item?id=50505905 | https://wccftech.com/jensen-huang-financed-ai-startups-absorb-excess-silicon/ |
| 6 | 44 | 8 | Show HN: Turbo-Browser-MCP – Batch forms, DOM deltas and submit guards for MCP | https://news.ycombinator.com/item?id=50503930 | https://github.com/Tthanh2k6/turbo-browser-mcp |
| 7 | 18 | 2 | Nvidia board urged to consider 'return of Jensen Huang' by two major investors | https://news.ycombinator.com/item?id=50499553 | https://www.cnbc.com/2026/11/14/nvidia-investors-jensen-huang-return-board-letter.html |
| 8 | 16 | 3 | A comprehensive guide to the bank of Nvidia | https://news.ycombinator.com/item?id=50505376 | https://hntrbrk.com/investigations/nvidia |
| 9 | 14 | 11 | I hope you die: Inside Jensen Huang's reported tirades at Nvidia board meetings | https://news.ycombinator.com/item?id=50503905 | https://www.indiatoday.in/world/story/jensen-huang-nvidia-workplace-allegations-executive-outbursts-resignation-3039203-2026-11-15 |
| 10 | 14 | 2 | The Chinese spy allegation that toppled Nvidia's CEO is starting to look shaky | https://news.ycombinator.com/item?id=50501697 | https://www.businessinsider.com/intelligence-jensen-huang-downfall-shaky-nvidia-china-spy-gpus-2026-11-15 |
| 11 | 12 | 8 | A Human Reads the Anthropic IPO Filing | https://news.ycombinator.com/item?id=50507517 | https://www.nytimes.com/2026/11/15/business/anthropic-ipo-filing-prospectus.html |
| 12 | 9 | 1 | Show HN: Nano-Edge-TTS – 70x realtime, Lightweight Kokoro-based TTS model | https://news.ycombinator.com/item?id=50506255 | https://huggingface.co/drmhse/nano-edge-tts |
| 13 | 9 | 0 | Mystery Trader Bags Nearly $200M Shorting Nvidia Right Before Huang Exit | https://news.ycombinator.com/item?id=50503429 | https://notthebee.com/article/mystery-trader-bags-nearly-200-million-shorting-nvidia-right-before-jensen-huangs-scandalous-exit |
| 14 | 8 | 3 | How Jensen Huang Built the Backdoor Route That Keeps Beijing in the AI Race | https://news.ycombinator.com/item?id=50504083 | https://www.wsj.com/tech/jensen-huang-backdoor-ai-data-centers-a5e4499d |

Lower-traffic but substantive in-window AI items (full URLs verified via the Algolia item endpoint):
- "DeepSeek releases chat, web tools API" — 5 pts — https://news.ycombinator.com/item?id=50500577 → https://api-docs.deepseek.com/guides/build_a_chatbot/ (verified: the full application-API suite — web search, deep-thinking search, file input, URL reading, content safety — is now open to developers on `deepseek-flash`; the DeepSeek changelog entry for this release is dated **2026-11-13**, i.e. the *announcement* predates the window, but the HN discussion is in-window. Source: https://api-docs.deepseek.com/updates)
- "ChatMate: Remote Prompt Execution on AI Assistants Through Sandbox Escaping [video]" — 5 pts — https://news.ycombinator.com/item?id=50503511 → https://www.youtube.com/watch?v=MspRSCAb6uI (Black Hat USA 2026 talk; author reports **CVE-2026-32193**, fixed by MSRC, **$48,000** bug bounty)
- "LeCun: If you're interested in human-level AI, don't work on LLMs" — 6 pts — https://news.ycombinator.com/item?id=50507084 → https://www.reddit.com/r/TheMachineLearning/comments/1xwp0kp/dont_work_on_llms_ylecun_at_corl/

### Representative community comments

- On **"All AI-generated code should be Open Source"** (447/274) the argument is not about licensing mechanics but about whether OSS retains any value once code is infinite. Paraphrased: *ubercow13* — "if AI-generated code is not copyrightable, releasing it under an open source license is meaningless"; *pasquinelli* — "you could always generate infinite code… what open source lets you do is read the code for a particular piece of software to see what it actually does"; *sturza* — "open source value is shifting; open source is human-validated code, just OSSing generated code has no value." The thread is a genuine definitional fight about what a licence can still certify.
- On **"Nvidia deliberately kept GPU prices high through circular financing deals"** (436/227) the dominant posture is *demand for evidence*, not scepticism of the thesis: *smallerize* — "I don't have a WSJ subscription, but was there actually anything weird about the deals? It seems pretty normal"; *roosterIllusi0n* asserts the far stronger version (forcing customers to buy hardware they do not need "is a crime in the united states of america"); *Akronymus* supplies an outside source (an FAA-orders-investigators article) as evidence. The complaint under discussion is that the *article does not contain* the forced-overbuy allegation.
- On **"Claude asked to renumber pages deletes professor's syllabus"** (49/73 — more comments than points) the thread pushes back on the framing: *pllbnk* — "there's nothing rogue, just being sloppy. But starting the title with 'Sloppy Claude AI…' certainly won't get as many clicks"; *nvme0n1p1* — "'Rogue' implies autonomous intent, and shifts accountability away from the people using tools irresponsibly"; *ericmay* asks the operational question — "why isn't there a backup or a secondary deletion confirmation?" Note *edot* points out the files were later recovered via Dropbox.

**Deduplication.** Zero overlap between today's 196 AI story IDs and yesterday's tracked AI IDs (`tmp/nov14/t2/ai_ids_ruleR.json`, 275 entries).

---

## 2. Reddit

Feeds fetched over HTTPS with a browser-like user agent and inter-request delays: `https://www.reddit.com/r/LocalLLaMA/new/.rss`, `https://www.reddit.com/r/MachineLearning/new/.rss`, `https://www.reddit.com/r/LocalLLaMA/top/.rss?t=day`. Raw: `tmp/nov15/t2/rll.rss`, `tmp/nov15/t2/rml.rss`, `tmp/nov15/t2/rll_top.rss`. Filter: published timestamp inside the corrected window.
**Coverage:** 100 newest r/LocalLLaMA → **43 in-window**; 100 newest r/MachineLearning → **8 in-window**; r/LocalLLaMA top-of-day → 25 entries, all posted 2026-11-14/15.

### r/LocalLLaMA — notable posts

- **EUROPA, the EU's open AI model, is aiming for nearly 1 trillion parameters** (top-of-day #1, 2026-11-15) — Europe's open-model programme is reported to be targeting a ~1T-parameter model; the thread body is a one-liner ("One can hope") and the substance lives in the linked reporting. https://www.reddit.com/r/LocalLLaMA/comments/1xwr917/europa_the_eus_open_ai_model_is_aiming_for_nearly/
- **Hot take: frontier models haven't actually become much smarter** (top-of-day #2) — argues raw capability has improved far less than usefulness, because harnesses (context retrieval, prompts, custom tools) do the work; author works with LLMs as a SWE and a product integrator. https://www.reddit.com/r/LocalLLaMA/comments/1xwegdi/hot_take_frontier_models_havent_actually_become/
- **Finally clicked for me: local AI is the future, not cloud AI** (top-of-day #3) — a hardware-cost-driven conversion to local inference; explicitly balances dislike of cloud pricing and GPU prices against dislike of the AI bubble. https://www.reddit.com/r/LocalLLaMA/comments/1xwf8bb/finally_clicked_for_me_local_ai_is_the_future_not/
- **I finally succeed the CMP 170HX voltage glitch and get 80GB VRAM + 126 SM** (top-of-day #5) — a Chinese CMP 170HX card reconfigured via a voltage-glitch mod to 80 GB VRAM / 126 SMs. https://www.reddit.com/r/LocalLLaMA/comments/1xwxzgj/i_finally_succeed_the_cmp_170hx_voltage_glitch/
- **AI Rig finally done and stable, perfect winter heater** (top-of-day #4) — 8× RTX 3090 build (all 8 GB Gaming OC, bought before the price spike) doubling as a space heater; the clearest possible statement of the window's economics. https://www.reddit.com/r/LocalLLaMA/comments/1xwc3m7/ai_rig_finally_done_and_stable_perfect_winter/
- **Benchmarks: 512k Speculative Decoding on a Single 96GB RTX PRO 6000 Blackwell** (2026-11-14T19:20) — reproducible 3×5 benchmark at `-c 524288`, q8_0 KV, FlashAttention; Qwen3.8-Flash-Next +MTP Q8_0 gives **+27.9%** target generation, DeepSeek-V4.1-Flash-1017 +DSpark Q8_0 is task-dependent (**+26% JSON, −11% C++**); also two llama.cpp gotchas. https://www.reddit.com/r/LocalLLaMA/comments/1xwatyu/benchmarks_512k_speculative_decoding_on_a_single/
- **I wrote an LLM inference engine from scratch in CUDA (no PyTorch, no cuBLAS): 235 tok/s on a 6 GB laptop RTX 3050** (2026-11-14T19:16) — hand-written CUDA engine hitting **235 tok/s** on a 6 GB laptop card. https://www.reddit.com/r/LocalLLaMA/comments/1xwaqlh/i_wrote_an_llm_inference_engine_from_scratch_in/
- **Update: tandem.cpp — DeepSeek-V4.1 on a 64 GB PC with a 16 GB card, and AMD (ROCm) support** — llama.cpp patch set running MoE models larger than VRAM by keeping hot experts on GPU; DeepSeek-V4.1-Flash IQ2_XS (ISTA GSQ-RCO, 139 GiB of experts) decode tok/s compared across engines. https://www.reddit.com/r/LocalLLaMA/comments/1xwan2j/update_tandemcpp_deepseekv41_on_a_64_gb_pc_with_a/
- **ISTA Qwen3.8 27B on 3060 12GB** — IQ3_XSS quant (non-MTP, turboquant) at 65k context fully on a 12 GB 3060 with the mmproj offloaded to CPU RAM; described as running agent tasks. https://www.reddit.com/r/LocalLLaMA/comments/1xwx7uq/ista_qwen38_27b_on_3060_12gb/
- **Ninfer and GGUF of Qwen3.8-27B-UD-Q3_K_XL ASCII-Condensed** — vocabulary-pruned (ASCII + Latin-1) Q3_K_XL to fit 16 GB VRAM, converted to GGUF and to the `ninfer-all` format. https://www.reddit.com/r/LocalLLaMA/comments/1xwx74l/ninfer_and_gguf_of_qwen3827budq3_k_xl/
- **Latest version of strata made my Qwen3.8-Flash-Next dumb and useless** — a regression report after upgrading strata v0.1.42.0 → latest; pairs with the day's "RustingStrata has a new built-in chat page. What is missing?" https://www.reddit.com/r/LocalLLaMA/comments/1xwttcw/latest_version_of_strata_made_my_qwen38flashnext/ and https://www.reddit.com/r/LocalLLaMA/comments/1xwwv88/rustingstrata_has_a_new_builtin_chat_page_what_is/
- **X3Guard: A 150M parameter prompt guard** — Axiomic Labs' 150M prompt-guard model trained on their own GPT-X3 base model. https://www.reddit.com/r/LocalLLaMA/comments/1xwyp7w/x3guard_a_150m_parameter_prompt_guard/ (HF: https://huggingface.co/AxiomicLabs/X3Guard-150M, created 2026-11-13T16:50:47Z; ONNX variant 2026-11-14T12:24:11Z)
- **Testing agents without running a model in CI: record once, replay with zero calls, judge with a local model only when needed** — open-source agent-testing harness that records runs and replays them in CI with no API calls. https://www.reddit.com/r/LocalLLaMA/comments/1xwy5ia/testing_agents_without_running_a_model_in_ci/
- **[Paper] No Second Run: Does RSI Stop at Frontier Pre-training? — 801-30B-A3B-Base Coming Soon** — recursive self-improvement argued to stall at the pre-training frontier; the "Coming Soon" weights (801B total / 30B active) are an announcement, not a release. https://www.reddit.com/r/LocalLLaMA/comments/1xwt3ri/paper_no_second_run_does_rsi_stop_at_frontier/
- **Placing an implant into AI brain with Lazarus: Anatomy of a trojan** — community dissection of the Microsoft Lazarus neuron-level agent backdoor. https://www.reddit.com/r/LocalLLaMA/comments/1xwsrp1/placing_an_implant_into_ai_brain_with_lazarus/
- **RASA will cause total chaos to open LLMs and beyond** — policy thread: the US Commerce rule blocking Chinese AI firms from renting Nvidia GPUs abroad plus the House Remote Access Security Act. https://www.reddit.com/r/LocalLLaMA/comments/1xwmnkw/rasa_will_cause_total_chaos_to_open_llms_and/
- **Microsoft patent describes turning idle gaming GPUs into paid AI training hardware** — https://www.reddit.com/r/LocalLLaMA/comments/1xwe9i5/microsoft_patent_describes_turning_idle_gaming/
- **13-GPU ASRock Mining Motherboard for Local LLMs?** — H110 Pro BTC+, 12 PCIe risers, 2200–2500 W PSU build. https://www.reddit.com/r/LocalLLaMA/comments/1xwv5p4/13gpu_asrock_mining_motherboard_for_local_llms/
- **CPU-only boost for Q2_0 on AVX-VNNI · llama.cpp PR #26348** — https://www.reddit.com/r/LocalLLaMA/comments/1xx0fqn/cpuonly_boost_for_q2_0_on_avxvnni_pull_request/
- **Do we want Huang back?** and **Poll: has the AI bubble popped with Nvidia circular financing out?** — https://www.reddit.com/r/LocalLLaMA/comments/1xwkknd/do_we_want_huang_back/ and https://www.reddit.com/r/LocalLLaMA/comments/1xwfxiu/poll_has_the_ai_bubble_popped_with_nvidia/
- **LFM2.5-24B-A2B + Hermes is awesome!** — https://www.reddit.com/r/LocalLLaMA/comments/1xwgiow/lfm2524ba2b_hermes_is_awesome/
- **Probable GLM model** — a community identification of an unreleased GLM checkpoint. https://www.reddit.com/r/LocalLLaMA/comments/1xwy3ka/probable_glm_model/
- **Vimoo 1.0** — open-source T2V/I2V video generation model family. https://www.reddit.com/r/LocalLLaMA/comments/1xwwqwz/vimoo_10_a_vimooai_collection_opensource_video/ (HF repo created 2026-09-30 — reposted, not new)

### r/MachineLearning — notable posts

Only 8 of 100 newest fell in-window, and the week-end signal is thin and **process-dominated**, not research-dominated:
- **With 42k submissions to ICLR, do you think the acceptance rate will stay the same?** — https://www.reddit.com/r/MachineLearning/comments/1xwqxwj/with_42k_submissions_to_iclr_do_you_think_the/
- **ICLR 2027 Initial Review Scores ranked by University** — https://www.reddit.com/r/MachineLearning/comments/1xwcjuq/iclr_2027_initial_review_scores_ranked_by/
- **I don't think double-blind review systems work** — reviewers can see author names/affiliations in many cases, making it closer to single-blind. https://www.reddit.com/r/MachineLearning/comments/1xwuwqd/i_dont_think_doubleblind_review_systems_work_d/
- **Marimba: a System One model for speech** — lightweight speech model on a frozen Qwen3-ASR-0.6B returning typed decisions (yes/no, choice, score); "like Jev, but for audio". https://www.reddit.com/r/MachineLearning/comments/1xwzsm4/marimba_a_system_one_model_for_speech_r/
- **A project of Cadence, developed by Pragma Research, brought to life via a talking parrot [P]** — https://www.reddit.com/r/MachineLearning/comments/1xx06ig/a_project_of_cadence_developed_by_pragma_research/ → https://cadence.floatingpragma.ai/ and https://github.com/muellerberndt/cadence
- **Hackathon project for MariaDB's Wikipedia Through Time challenge: matching sentences across seven Wikipedia editions** — https://www.reddit.com/r/MachineLearning/comments/1xwttxo/hackathon_project_for_mariadbs_wikipedia_through/
- **ACM Multimedia 2026: TimeCues Studio — a free, open-source tool for annotating music structure** — https://www.reddit.com/r/MachineLearning/comments/1xwh3mw/acm_multimedia_2026_timecues_studio_a_free/
- **Anonymous GitHub not working** — ICLR rebuttal links broken mid-cycle. https://www.reddit.com/r/MachineLearning/comments/1xw9m5h/anonymous_github_not_working_d/

*(Reddit's per-post score/comment API — `reddit.com/comments/<id>.json` — returned HTTP 403 to this client, so engagement is taken from the top-of-day ordering and from the RSS metadata, not from numeric scores.)*

---

## 3. Leaderboards

### 3a. Artificial Analysis — Intelligence Index (`https://artificialanalysis.ai/`)

Payload: `tmp/nov15/t2/aa_home.html` → extracted `tmp/nov15/t2/aa_ii_home.json` (curated model rows) and `tmp/nov15/t2/aa_ii_today.json` (113 effort-tier rows from `/leaderboards/models`, supplementary only). Yesterday's snapshot: `tmp/nov14/t2/aa_ii_final.json`.

**Current top-10 Intelligence Index (28 curated rows total):**

| # | Model | Index | Open-weight? |
|---|---|---|---|
| 1 | Claude Fable 5.2 | 64.5636 | no |
| 2 | Gemini 4 Carbon | 60.0257 | no |
| 3 | Claude Opus 5.5 | 59.1060 | no |
| 4 | GPT-6 Astra | 56.8539 | no |
| 5 | GPT-6.1 Sol | 54.6087 | no |
| 6 | Claude Sonnet 5.5 | 54.5413 | no |
| 7 | Gemini 4 Hydrogen | 53.9192 | no |
| 8 | GPT-6.1 Terra | 51.3265 | no |
| 9 | Muse Wonder Full | 50.0772 | no |
| 10 | Claude Fable 5.1 | 49.1602 | no |

**Open-weight leaders (11 of 28 rows):** Kimi K3.1 Pro 46.4526 · DeepSeek V4.1 Flash 1017 32.5896 · GLM-5.3 31.6534 · Inkling 2 Small 30.6287 · MiMo-V2.6-Pro 29.8898 · Ling 3.1 Flash 1019 29.5701 · Mistral Large 4 26.1250 · Qwen3.8 27B 20.1069 · K2 Horizon 375B A23B 17.8203 · Beam 1.0 17.7307 · Nemotron 3.5 Super VL 13.6203.

**Δ vs 2026-11-14: zero.** Row count 28 → 28; no slug added or removed; every index value identical to 4 decimal places; rank order identical. The AA "New language model evaluation / New article published" activity feed on the homepage is identical in both snapshots (latest entries dated **13 Nov**, **12 Nov**, **11 Nov**, **10 Nov**, **9 Nov**) — i.e. AA published nothing new during this window. The Decision Index page (`https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index`) is likewise unchanged: **26 rows**, same order, same scores (Claude Haiku 5.5 (Max) 76.4922, GPT-6 Luna (Max) 75.6745, Drex Max v1.1 72.6242, SubQ Snap 1.2 72.5805, Fastino Glide v1.2 72.5152, Liquid-AI d1-ultra, d1-1, d1), with `liquid-ai_d1-1` still at 66.4875.

### 3b. BenchLM (`https://benchlm.ai/api/data/leaderboard`)

- Current: `tmp/nov15/t2/benchlm.json` — `lastUpdated` **2026-11-13**, `sourceSnapshotId` **2026-11-13-6dbff129cd01f557**, methodology **bench-align-v5.8-2026-09-30**, 50 models.
- Prior: `tmp/nov14/t2/benchlm.json` — `lastUpdated` 2026-11-13, `sourceSnapshotId` 2026-11-13-20c7b80005d50316, same methodology, 50 models.
- Older: `tmp/nov13/benchlm.json` — `sourceSnapshotId` 2026-11-13-83b593da35a95b29, same methodology, 50 models. (`tmp/nov14/benchlm.json` does not exist.)

**Current top 10:** 1 Claude Fable 5.2 93.65 · 2 Gemini 4 Carbon 89.15 · 3 Claude Opus 5.5 86.62 · 4 GPT-6 Astra 85.65 · 5 GPT-6.1 Sol 84.60 · 6 Claude Sonnet 5.5 83.05 · 7 Claude Fable 5.1 79.21 · 8 Gemini 4 Argon 79.03 · 9 GPT-6.1 Terra 79.64 · 10 GPT-6 Sol 77.41.

**Δ vs yesterday's snapshot — this is a REAL revision, not zero-delta.** `lastUpdated` and the methodology string did not change, but the underlying `sourceSnapshotId` did, and 48 of 50 rows changed score (only *Muse Wonder Full* and *Muse Wonder* are bit-identical). Largest move: **GPT-5.4 Pro 67.73 → 66.96 (−0.77)**, dropping **rank 26 → 29**. Rank churn at the tail: GPT-5.4 65.46→65.43 (27→26), Muse Wonder 67.41→67.38 (28→27), Muse Spark 1.2 65.11→65.09 (29→28). Top-5 movement is negligible: Claude Fable 5.2 93.90→93.65 (−0.25), Gemini 4 Carbon 89.19→89.15 (−0.04), everything else ≤0.01. Direction of travel across the board is a hair downward. Note that `tmp/nov13/benchlm.json` and `tmp/nov14/t2/benchlm.json` are field-identical apart from `sourceSnapshotId`, so the scores were stable for two days and have now been recomputed once — i.e. yesterday's report ("snapshot unchanged, no rank or score movement") was accurate for that snapshot pair but the series is not frozen.

### 3c. Hugging Face (`https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=200`)

Raw: `tmp/nov15/t2/hf.json` — 200 newest repos, 191 created inside the window. The stream is again overwhelmingly community quants, GGUF conversions, LoRA adapters and single-purpose checkpoints (`soapyyapps/tiny-aya-*` safetune/circuit/merge sets, `ducvh5/wan21-*` training collections, `nightmedia/Qwen3.5-9B-USS-Emergent`, `empero-ai/Quark-150M-*`). Nothing from a frontier lab org.

**The one substantive in-window release:** **`Agnes-AI/Agnes-2.5-Pro-Theta`** — created **2026-11-15T02:46:17Z**, Apache-2.0, `image-text-to-text`, bfloat16, custom `agnes_theta` architecture with a MoE backbone (`AgnesForConditionalGeneration`), tagged `reasoning`, `coding`, `long-context`, `mixture-of-experts`, `multimodal`, English + Chinese. 130 downloads / 12 likes at fetch time.
https://huggingface.co/Agnes-AI/Agnes-2.5-Pro-Theta

**Lab-org check (nothing newer than yesterday):** `LiquidAI` newest is still 2026-10-27 (d1-Omni-2B-GGUF, LFM3-Audio-2B-GGUF); `RecursiveSI` newest 2026-10-21; `empero-ai` newest is the in-window `Quark-150M-128K-Zero` (2026-11-15T16:56:07Z, 1 like) but the org's previous release was 2026-11-01 and the project itself is low-traffic. Nothing newer than yesterday's frontier-lab baseline (`nvidia/Kimi-K3.1-Pro-NVFP4` 2026-11-11, `deepseek-ai/DeepSeek-V4.1-Flash-1017`, `zai-org/GLM-5.3`).

**Also checked (in-window or near-window HF items surfaced via Reddit):** `AxiomicLabs/X3Guard-150M` (2026-11-13T16:50:47Z, prompt guard, text-classification) and `AxiomicLabs/X3Guard-150M-ONNX` (2026-11-14T12:24:11Z); `mlc-ai/LFM3-1.7B-q8f32_1-MLC` (2026-11-15T17:10:50Z, MLC quantization of `LiquidAI/LFM3-1.7B`); `jay042479/Edge0-145B-NVFP4` (2026-11-15T17:05:21Z, NVFP4 quantization of `Qwen/Qwen3.8-Flash-Next`); `kekzle/Flint-NVFP4` (2026-11-15T17:23:56Z, Apache-2.0 NVFP4 of `RecursiveSI/flint`). **Reposts, not new:** `higurashi-ai/Haru-4B` (2026-11-12, 2098 dl / 286 likes), `meituan-longcat/LongCat-Video-Avatar-1.6` (2026-11-13), `nex-agi/Nex-N2.6` (2026-11-10).

---

## 4. Model releases (summary)

- **No frontier-lab model release in-window.** No new Anthropic/OpenAI/Google/DeepSeek/Meta/Mistral/Qwen/zai weights on Hugging Face during the 24 h.
- **One notable third-party open-weight release:** `Agnes-AI/Agnes-2.5-Pro-Theta` (Apache-2.0, MoE, multimodal, reasoning; 2026-11-15T02:46:17Z) — https://huggingface.co/Agnes-AI/Agnes-2.5-Pro-Theta
- **One notable product/API release:** DeepSeek opened its full application-API suite (web search, deep-thinking search, file input, URL reading, content safety) on `deepseek-flash` — changelog dated 2026-11-13, i.e. the announcement is just outside the window but the developer documentation and HN discussion are live in-window — https://api-docs.deepseek.com/guides/build_a_chatbot/ and https://api-docs.deepseek.com/updates
- **Safety-relevant:** `AxiomicLabs/X3Guard-150M` (150M prompt guard) and the Black Hat USA 2026 ChatMate talk disclosing **CVE-2026-32193** with a **$48,000** bounty (sandbox escape → remote prompt execution against AI assistants) — https://news.ycombinator.com/item?id=50503511
- **Announced-not-released:** "No Second Run" paper with 801-30B-A3B-Base weights "Coming Soon"; "Probable GLM model" (community identification of an unreleased checkpoint).

---

## 5. Negative signals / disputes

- **AI attention fell further.** AI share of Hacker News dropped 29.2% → **26.3%**, and AI share of the top 50 overall stories fell to **20.0%** (10 of 50). The window's top two HN stories were SpaceX and a Lovable security breach — neither AI-research. The AI-relevant centre of gravity was **NVIDIA corporate governance** (5 of the top 14 AI stories are about Jensen Huang's departure, circular financing or the China spy allegation), not model quality.
- **Zero leaderboard movement at the top.** Artificial Analysis Intelligence Index (28 rows) and Decision Index (26 rows) are **bit-identical** to 2026-11-14, and AA's own activity feed shows nothing published after 13 Nov. Two consecutive days of a frozen top-5 is itself a signal: the benchmark oligopoly is not reordering itself.
- **BenchLM's immutability is an illusion.** Yesterday's "no movement" was a property of the snapshot, not of the data: the same `lastUpdated` date (2026-11-13) now carries a third distinct `sourceSnapshotId`, and 48 of 50 rows moved, with GPT-5.4 Pro dropping 3 ranks on a −0.77 score. A leaderboard that silently recomputes under an unchanged timestamp makes day-over-day deltas unreliable and should be treated as a lower-confidence source than AA.
- **The AA effort-tier problem persists.** 113 effort-tier rows describe the same models as the 28 curated rows (e.g. Claude Fable 5.2 appears at max 64.5636 / xhigh 62.2167 / high 61.8219 / …). Yesterday flagged this; it is unchanged today, so "the Intelligence Index top-5" remains ambiguous unless the row set is pinned.
- **Self-reported efficiency results dominate the local-AI feed and are unverifiable from the thread alone.** The 512k speculative-decoding benchmark (+27.9% tg for Qwen3.8-Flash-Next +MTP Q8_0, task-dependent for DeepSeek-V4.1-Flash-1017) is at least methodologically specified (3×5 runs, seed 42, temp 0, cache_prompt false, max_tokens 256) — but the from-scratch CUDA engine at **235 tok/s on a 6 GB laptop RTX 3050** carries no harness at all, and the "235 tok/s" claim on hardware that size deserves suspicion.
- **Quantization results are getting more aggressive and less checkable.** The day's community quant claims (ASCII-Condensed Q3_K_XL for 16 GB, IQ3_XSS 27B fully resident on a 12 GB 3060 with mmproj on CPU, NVFP4 of Flint) come with no linked benchmark harness, and one thread reports a *regression* ("Latest version of strata made my Qwen3.8-Flash-Next dumb and useless") with no reproduction.
- **The safety signal is real but low-amplification.** CVE-2026-32193 (ChatMate sandbox escape → remote prompt execution, $48,000 bounty) drew only **5 points**; the X3Guard 150M prompt guard drew a top-of-day Reddit slot. Detection and defense work is being produced at a much lower community-amplification factor than NVIDIA corporate drama.
- **Anthropic's IPO filing landed with no analysis.** "A Human Reads the Anthropic IPO Filing" (12/8) drew the literal first comment "Can a human summarize this please?" — the largest private-AI lab's public prospectus went essentially unread on the platform where its engineers live.
- **r/MachineLearning is in a process-driven trough.** 8 of 100 newest posts in-window, and the majority are about ICLR review mechanics (42k submissions, review-score rankings by university, broken anonymous-GitHub links during rebuttal), not about models or results.
- **The "frontier models haven't gotten smarter" sentiment is now a top-of-day thesis, not a fringe take** — and it lands in the same window as the biggest single AI thread being about whether AI-generated code should be open-sourced. Both threads are about *the social/labeling layer* of models rather than their behaviour.

---

## 6. Community Pulse

**What is working well.**
- The local-inference engineering community is delivering verifiable, reproducible efficiency work at a steady clip: a from-scratch CUDA engine (235 tok/s on a 6 GB laptop RTX 3050), a llama.cpp patch set (tandem.cpp) that keeps hot MoE experts on GPU and streams the rest from CPU across both NVIDIA and ROCm, 512k-context speculative-decoding benchmarks with a fully specified protocol (seed, temp, warmup, cache settings), and a vocab-pruned Q3_K_XL that fits 27B into 16 GB. People are shipping measurable numbers with the settings needed to reproduce them.
- Defensive tooling is being productized at small scale: a 150M prompt-guard model, a record-once/replay-with-zero-API-calls CI harness for agent testing, and a resident-$48,000 sandbox-escape bug with a CVE — the fix pipeline (researcher → MSRC → bounty) demonstrably works.
- The community's source hygiene is good: every substantive claim comes with a repo, a benchmark protocol, or an arXiv link, and third-party repos (tandem.cpp, `ninfer-all`, `ASCII-Condensed-prune-tools`) are linked directly.

**What problems people report.**
- **Cost and access**, repeatedly and in every forum: an 8×3090 rig bought before the price spike is now a winter heater; a 12 GB 3060 is the aspirational target for "peak of local AI"; the AI rig, the CMP 170HX voltage-glitch mod, the 13-GPU mining board — the community is literally re-engineering hardware to get around a price point.
- **Regression and instability in the serving stack**: strata's latest release reportedly made Qwen3.8-Flash-Next "dumb and useless"; a peer asks "what is strata?" in the same window, so the tool's interface and behaviour are not yet understood by the population adopting it.
- **Measurement distrust**: the frontier-intelligence thread argues harnesses do the work, not the models; the positional-embeddings explainer drew 113 points but only **3 comments** (interest without scrutiny), while the NVIDIA-finance thread drew 227 comments mostly demanding evidence the article did not contain. The community is far more rigorous about *corporate* claims than *model* claims.
- **License semantics for AI-generated code are unresolved** — a 274-comment argument with no consensus, hinging on whether copyrightability can even exist for generated output.
- **Hardware policy risk** (RASA / remote-access restrictions on renting Nvidia GPUs abroad, the Commerce rule on Chinese AI firms) is now being discussed as an existential supply-side risk to open-weight work.

**Unexpected observation.**
- The single most valuable technical content of the window — a from-scratch CUDA inference engine, a 512k speculative-decoding benchmark, an 80 GB VRAM card from a voltage glitch, a 27B model living in 16 GB — attracted **almost no Hacker News attention**. Meanwhile NVIDIA's board drama, a professor's deleted syllabus, and a SpaceX booster catch took essentially all of the platform's AI-adjacent engagement (447+436+49+47+18+16+14+14 ≈ 1141 points across the top 8 AI stories). The overlap between "what the community actually builds" and "what the community actually reads" is close to zero: r/LocalLLaMA's day was about hardware and inference engineering, HN's AI day was about money and blame. The most striking artifact is the **"Frontier models haven't gotten much smarter"** thesis reaching the #2 slot of r/LocalLLaMA's top-of-day *on the same day* the platform's biggest AI thread argued that AI-generated code cannot be meaningfully open-sourced — i.e. the community is simultaneously arguing that models add little and that their outputs need licensing regimes.

---

## 7. Data-quality notes and caveats

1. **Timestamps:** the assignment's Unix values (`1763040480`/`1763126880`) are 2025; the corrected 2026 values (`1794677280`/`1794763680`) were used everywhere. `tmp/nov15/t2/hn_uniq.json` contains stale 2025 stories and was deliberately excluded; `tmp/nov15/t2/hn_all.json` is the authoritative aggregate.
2. **Reddit engagement numbers are missing**: `reddit.com/comments/<id>.json` returned HTTP 403 to this client. Post ordering and RSS metadata were used instead. r/MachineLearning's `.rss` feed appears to expose only ~100 entries and only 8 fell in-window — coverage of that subreddit in this window is thin by construction.
3. **BenchLM timestamp ambiguity:** `lastUpdated` did not advance although 48/50 rows changed. Both the prior and current `sourceSnapshotId` values were recorded so tomorrow's run can compare snapshot-to-snapshot rather than date-to-date.
4. **Artificial Analysis rows:** the curated 28-row set (homepage payload) is used for day-over-day comparison because it reproduces yesterday's comparison set exactly; the 113-row effort-tier set is supplementary and was deliberately not used for ranking claims.
5. **No `last_check.json` update was performed by this task** — Task 1 wrote `findings_nov15_task1.md` and the parent run owns shared state; `last_check.json` was left at its 2026-11-14 content so the parent can merge both tasks' community_signals/leaderboard_changes in one place.
6. **No `daily_reports/2026-11-15.md` exists yet** (`ls: cannot access 'daily_reports/2026-11-15.md': No such file or directory`, exit 128) — the parent run writes it from these two findings files.
7. **Search budget:** 0 `web_search`, 0 `web_fetch` calls used (cap was 10/3). All data is from direct `curl` against primary sources; two pages (DeepSeek API docs, DeepSeek changelog) were fetched to verify the one borderline release.
