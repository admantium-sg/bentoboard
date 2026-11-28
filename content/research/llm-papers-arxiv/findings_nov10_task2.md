# Findings — Task 2 (Community pulse, leaderboards, model releases) — 2026-11-10

Window: 2026-11-09T17:28Z → 2026-11-10T17:28Z (24h). Previous run covered up to 2026-11-09T17:28Z.
Raw fetches live in `tmp/nov10/t2/` (not committed content).

---

## Community pulse

### Hacker News

**Enumeration:** Algolia `search_by_date`, `tags=story`, `numericFilters=created_at_i>1794240480,created_at_i<1794326880`.
Algolia's 1000-hit pagination ceiling made the single-query approach lose data (p0–p4 = 1000 of nbHits 1199, p5+ empty). I re-ran the window as two halves (641 hits over 4 pages, 558 hits over 3 pages) and merged.
- nbHits (total stories in window): **1199**
- Pages fetched: 7 (4 + 3) across two split queries, plus 12 wasted pages from the first (capped) attempt
- Unique objectIDs: **1199** → **residual 0** (full enumeration confirmed)
- Keyword-filtered AI/LLM-relevant stories: **353 of 1199 (29%)**; 13 of those exceeded 100 points
- Yesterday for comparison: 840 stories total in the Nov 08–09 window (fully enumerated, 840 unique, 0 residual). **Volume is up ~43% day-over-day.**

Top AI/LLM stories (points / comments):

| Story | Pts | Cmts | URL |
|---|---|---|---|
| Claude Fable 5.2 and Mythos 5.2 (Anthropic blog) | 982 | 6 | https://news.ycombinator.com/item?id=50429906 |
| Claude Fable 5.2 and Mythos 5.2 (duplicate link, main thread) | 821 | 950 | https://news.ycombinator.com/item?id=50429068 |
| Google Gemini routes personal Drive files and emails to human annotators | 692 | 144 | https://news.ycombinator.com/item?id=50429426 |
| Claude Fable 5.2 scores 65 on Artificial Analysis, highest so far | 363 | 261 | https://news.ycombinator.com/item?id=50431144 |
| Muse Ember: Our smallest, most efficient model (Meta) | 321 | 139 | https://news.ycombinator.com/item?id=50429024 |
| TPU 8tx and TPU 8i Max (Google) | 254 | 75 | https://news.ycombinator.com/item?id=50432831 |
| CoreWeave bond yield tops 16% as AI credit stress rises | 188 | 174 | https://news.ycombinator.com/item?id=50435660 |
| Gemini 4 Carbon is now available | 181 | 81 | https://news.ycombinator.com/item?id=50442303 |
| DeepX claims inference up to 100B parameters at less than 5 W | 155 | 24 | https://news.ycombinator.com/item?id=50429545 |
| A year after the 100% AI mandate nobody understands our code | 144 | 183 | https://news.ycombinator.com/item?id=50433079 |
| Fireworks AI security breach impacts Notion and their customers | 143 | 49 | https://news.ycombinator.com/item?id=50437106 |
| AI usage generates a fragile codebase | 133 | 166 | https://news.ycombinator.com/item?id=50438318 |
| Fable 5.2 one-shotted my nephew's dream game | 464 | 401 | https://news.ycombinator.com/item?id=50433659 |
| Anthropic to Seek $1.3T Valuation in IPO (down from $2T) | 49 | 72 | https://news.ycombinator.com/item?id=50439616 |

**Finding (Fable 5.2 launch dominates the day).** Anthropic shipped Claude Fable 5.2 and Claude Mythos 5.2 at ~18:00Z Nov 9; the announcement thread alone drew 950 comments. The most substantive HN comment is from an AI-accelerator-design researcher quoting Anthropic's own system card:

> "The model that underlies Claude Fable 5.2 and Claude Mythos 5.2 is a step forward in general capabilities. However, during the model's training, we took steps to limit advances in the specific research capabilities that could most directly accelerate AI development. Thus, in relevant areas, including accelerator kernel optimization and improving large language model architectures, Fable 5.2 and Claude Mythos 5.2 perform at about the level of Opus 5.5."
> — HN user `stefanpie`, https://news.ycombinator.com/item?id=50429068

This is **not an allegation** — it is a direct quotation of Anthropic's system card (PDF linked in-thread: https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf). Anthropic further states it uses "transparent fallbacks to Opus 5 for a small set of topics" and is "starting to deliberately limit public access to certain AI capabilities related to computer architecture." **Confirmed by the vendor, not a third-party accusation.**

Source: https://news.ycombinator.com/item?id=50429068

**Finding (benchmarks are being re-tuned under the models' feet).** A recurring HN complaint in the Fable 5.2 thread: prior Opus 5.5 numbers are no longer comparable because the underlying benchmark versions changed mid-comparison.

> "Normally I would say 'just check against the original Opus 5.5 benchmarks'… but most of the benchmarks don't line up anymore because the benchmarks have changed."
> — HN user `minimaxir`, https://news.ycombinator.com/item?id=50429068

Source: https://news.ycombinator.com/item?id=50429068

**Finding (vendor early access suspected).** On the AA score thread, one commenter alleges Anthropic gets early access to run benchmarks before public release.

> "I'm sure that they get early access to run the benchmarks, it wouldn't have time to finish running if they were running it at public release."
> — HN user `jrflo` (**ALLEGATION, unverified, no evidence offered**)

Source: https://news.ycombinator.com/item?id=50431144

**Finding (Google sending Drive data to human annotators).** Highest-scoring non-launch story: a GitHub project claims Gemini routes personal Drive files and emails to human annotators. The thread splits over whether this is a Gemini-specific problem or a general Google problem.

> "This isn't a local LLM issue, Google is sending your Google Drive data to humans." — `ipsum2`
> "Only if you connect it to Gemini. If you're using a local LLM you probably aren't connecting your Google Drive to Gemini" — `sumeno`
> "Really frustrating that our privacy eroded to the point anyone would think this is reasonable." — `rustyhancock`

Source: https://news.ycombinator.com/item?id=50429426
Underlying repo: https://github.com/thisisme6598/gemini_files/

**Finding (credit stress around AI infrastructure).** CNBC piece on CoreWeave's bond yield passing 16%. HN's dominant pushback is that "inference has high gross margins" is a cost-accounting sleight of hand:

> "They are when they say that inference is incredibly profitable. It is incredibly profitable only when you pretend that models have 0 cost to be created (since they are a digital asset that can't depreciate), and R&D is an imaginary thing that everyone does for free." — `ElProlactin`

Source: https://news.ycombinator.com/item?id=50435660
Article: https://www.cnbc.com/2026/11/06/coreweave-bond-yield-tops-16percent-as-ai-credit-stress-rises.html

**Finding (Fireworks AI breach — second in weeks, and Notion was not told).** Two threads. A Notion customer with a direct vendor relationship complains:

> "Super poorly IMO. Fireworks' initial breach notification was on Oct 9 and told us we were 'not impacted'. Only for us to find out we were impacted after some of our Anthropic API keys used in Fireworks were 'hijacked'." — `werrett`

Fireworks' own statement says the exposed data included "unattributable Notion AI chat transcripts used for the Insights feature. Chats weren't labeled with who wrote them or which workspace they came from, and the transcripts did not contain tool call results."
Source: https://news.ycombinator.com/item?id=50437106 (Notion advisory: https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor); vendor bulletin: https://fireworks.ai/security/bulletins/october-2026-security-incident-update

**Finding (DeepX <5 W edge inference claim).** EE Times story on DeepX's second-gen LPDDR5X PIM chip claiming inference of up to 100B params below 5 W. Skeptical HN response notes the precision of the 80 TOP/s and 150 GB/s figures is unstated (INT4 vs FP16 changes prefill performance drastically) and that a 100B-capable edge part would make data centres "obsolete", which is a red flag for the claim.
Source: https://news.ycombinator.com/item?id=50429545
Article: https://www.eetimes.com/deepx-tapes-out-second-gen-chip-projects-6-7x-performance-gain-with-lpddr5x-pim/

**Finding (Google TPU 8tx / 8i Max).** Google's new TPU generation, paired with AMD EPYC Turin hosts and confidential computing. HN discussion is largely about Google's abbreviation etiquette rather than the silicon.
Source: https://news.ycombinator.com/item?id=50432831
Article: https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/

**Finding (AI-generated codebases are fragile).** Essay arguing LLM-produced code is structurally brittle (e.g. JS `mouseover` handlers instead of CSS `:hover`). HN pushes back that some of these flaws predate LLMs, but agrees speed-of-change is the real new hazard.
Source: https://news.ycombinator.com/item?id=50438318
Essay: https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/

**Finding (120B MoE on a 32 GB M1 Max).** A pure-Rust/cross-platform inference engine claims to run 120B MoE models in under 16 GB on a 32 GB M1 Max. The author adds an iOS port running a 16B MoE at ~13 tok/s on an iPhone 13 Pro. HN reception is skeptical — "You have a magic engine with zero details" (`hex4def6`).
Source: https://news.ycombinator.com/item?id=50430323
Repo/blog: https://mitln.github.io/moe-inference-engine/

**Finding (waiting beats committing).** Strong consensus in the "100% AI mandate" thread that going all-in on today's models is a mistake because a better/cheaper model arrives within months — "Growth and change is so fast that waiting is almost a virtue" (`_kulang`).
Source: https://news.ycombinator.com/item?id=50433079

### Reddit r/LocalLLaMA

- Feed: `https://www.reddit.com/r/LocalLLaMA/new.rss?limit=100` — 100 entries returned, **72 fall inside the window** (yesterday: 55 of 100).
- High posting volume; themes are Qwen3.8 variants, new inference engines, quantization, and governance complaints.

**Finding (benchmarked Qwen3.8 vs Qwen3.6 on niche languages — self-reported, vendor-affiliated risk).** A team built a benchmark of 202 real GitHub tasks in 13 under-served languages (Elixir, OCaml, Haskell, Clojure, Kotlin, Swift, Julia, R…). Qwen3.8 solved 43% of tasks, up from 17% for Qwen3.6. **Caveat the author volunteers:** Qwen3.8 was used to select the hard tasks, so it has selection bias in its favour.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsorsx/we_tested_qwen36_27b_qwen38_27b_and_glm53_flash/

**Finding (inference-engine shootout on one RTX 3060 12 GB).** RustingStrata vs PolyStrata vs llama.cpp b12119, Qwen3.6-35B-A3B UD-Q3_K_M (15.9 GiB, does not fit in VRAM), 5290-token prompt:
- Prefill: RustingStrata 2330 tok/s; PolyStrata 1458–1549 tok/s; llama.cpp 1692 tok/s
- Decode (no MTP): 90.9 / 78.5 / 53.5 tok/s
- Decode with MTP drafts: 128.4 / 97.5–100.4 / 77.7 tok/s (llama.cpp accepted 92 of 102 drafts)

Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsipew/rustingstrata_vs_polystrata_vs_llamacpp_on_one/

**Finding (42% GPU power reduction with no throughput loss).** On an RTX 3080 Ti running Qwen 3.5 9B Q4_K_M via llama.cpp, reducing the power limit from 450 W down to 250–260 W produced **no measurable tok/s loss** (~100 tok/s sustained); degradation only appeared at 220 W (~80 tok/s). The author notes VRAM bandwidth utilisation never saturates, implying a software/architecture bottleneck rather than a power limit. Single-user measurement, not independently verified.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsp309/42_gpu_power_reduction_with_zero_performance_loss/

**Finding (speed gap between two flagship open MoE models).** Same one-shot prompt: DeepSeek V4.1 Flash 1017 (UD IQ1_M) at 94 tok/s vs Qwen 3.8 Flash-Next at 350 tok/s. Author concedes the task likely appears in both models' training data.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs7ffm/same_prompt_deepseek_v41_flash_vs_qwen_38_fn_94/

**Finding (DeepSeek V4.1 Flash failed a 1-hour agentic task; GPT-6 Astra finished in 7 minutes).** User testing OpenRouter + OpenCode for automated video editing reports DeepSeek V4.1 Flash ran over an hour without completing the task across all reasoning modes (Default/None/Low/High/Max), while GPT-6 Astra (Medium) did the same task in 6–7 minutes. Open, non-comparable setups (different pricing tiers, different tool surfaces) — treat as anecdote.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xso3y1/deepseek_v41_flash_failed_after_1_hour_gpt6_astra/

**Finding (Arete-27B introduces confident hallucinations).** A user reproduces a hand-made "refusal-to-fabricate" bench (30 questions about entities that do not exist + 6 real controls, greedy decoding, thinking off, scoring honest "UNKNOWN" answers out of 30). Results: Qwen3.8-Flash-Next (GSQ-RCO Q2_0) 21/30; Orion-26B-A4B-v1.1 (Gemma4-26B) 21/30; Arete-27B scored materially lower. This is a **single-user test with a small n and a homemade rubric**, but it corroborates a claim first made on Hugging Face.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs1nqc/confirming_apollomg_findings_organic_handmade/

**Finding (Arete-27B: political framing trade-off, per one evaluator).** Same thread cluster: a user reports Arete (Nous Research post-train of Qwen3.8-27B aimed at "reinforcing Western values") removes CCP framing on Tiananmen/Hong Kong and does not substitute a symmetric Western bias on CIA-interrogation/NSA-surveillance questions; technical agentic coding parity, with Qwen slightly better on physics. Full report: https://claude.ai/artifact/3X5k3hzpz41jri7CqXhJP1
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsa420/arete27b_vs_qwen3827b_comparison/

**Finding (anti-reasoning models useless for agentic work).** "Unpopular opinion" post: regardless of size, non-thinking models (qwen3.6, qwen3-coder, gpt-oss) "get completely ignored" detailed AGENTS.md instructions; qwen3.6 *with* thinking was markedly better. Anecdotal.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsg7wr/unpopular_opinion_llms_without_thinking_are/

**Finding (CUDA+ROCm dual-backend inference for mixed-vendor GPUs).** Fork of Project MAYA enabling GLM-5.3-Flash GGUF to prefill and decode cooperatively across a Strix Halo iGPU and an RTX 5090, claiming up to 48% faster than single-backend. Unverified self-benchmark.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsaurn/cudarocm_dualbackends_llm_inference_for/

**Finding (DeepSeek-V4.1-Flash at 249 GB on a 12 GB card).** RustingStrata now loads DeepSeek-V4.1-Flash at IQ2_XXS (249 GB) on one RTX 3060 12 GB with 30 GB RAM, streaming experts from SSD through page cache with a 9 GB VRAM LRU cache. Extreme quantization; quality impact unstated.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xrw6uv/rustingstrata_vs_llamacpp_deepseekv41flash_q2_249/

**Finding (local 400M decision model for game NPC calls).** Ettin-400M encoder fine-tuned to answer small yes/no or pick-one questions (is the player threatening this guard; is the apology sincere; did my LLM's reply leak a secret). ~0.1 s on a 3060 Ti, Apache-2.0.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs9nux/i_made_a_400m_model_for_npc_judgement_calls_in/

**Finding (0.8B Spanish proofreader at 138 ms/sentence on CPU).** Ettin-0.8B-class fine-tune running fully local, invoked via a global hotkey in any Windows/Linux app.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsocrj/my_08b_finetune_proofreads_spanish_at_138_ms_per/

**Finding (MiniMax H3-Image open-weight release).** Announced and linked to HF with a ComfyUI-ready W4A4 quant posted same day.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xso1ie/minimax_h3image_released_an_openweight_image/
Model: https://huggingface.co/MiniMaxAI/MiniMax-H3-Image
Quant: https://huggingface.co/PotatoForge/Minimax-H3-Image-W4A4 (created 2026-11-10T17:14:52Z)

**Finding (quant-variant sprawl ahead of Qwen 4).** "What happens to the 1.3 million Qwen3.8 quant/variants after Qwen 4 releases?" — a user who has personally benchmarked hundreds of variants asks whether the ecosystem is about to be obsoleted like a Pentium III. Saturation signal for the fine-tune/quant scene.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs11q4/what_happens_to_the_13_million_qwen38/

**Finding (Meta accused of breaking its open-source Muse promise).** Post linking AA's Muse Ember page and a Zuckerberg/Fink post, alleging Meta open-sourced Muse Spark 1.2 but continues to ship Muse Ember closed. **ALLEGATION by a community user**; Meta's Muse Ember weights are indeed not on HF as of this window.
Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs0qmx/muse_ember_zuck_promised_to_open_source_muse/

**Finding (other notable local-LLM posts in-window).**
- DNA Factory — open-source fine-tuning framework, "deliberately opinionated", only 5 training methods (SFT, DPO, GRPO, OPD, SDFT), token-level loss-mask visualisation: https://www.reddit.com/r/LocalLLaMA/comments/1xskn3z/dna_factory_yet_another_llm_training_framework/
- KVARK Sparkle 1.1 (Qwen3.8-27B fine-tune, Apache-2.0) — document QA 91.0 vs 89.5 for 1.0; correctly declines 91.5% of the time (vendor self-reported): https://www.reddit.com/r/LocalLLaMA/comments/1xskb49/kvark_sparkle_11_27b_better_document_qa_and_it/
- Agent-memory leak: vector-DB metadata filters give 0% raw leak when users query directly, but 67% leak on background-agent *write* paths: https://www.reddit.com/r/LocalLLaMA/comments/1xryzby/why_vector_db_metadata_filters_fail_on_agent/
- Multiverse Computing Comet 60B (A12B) GGUFs with MTP head (Q4_K_M 42.6 GB, Q8_0 64.2 GB, text-only): https://www.reddit.com/r/LocalLLaMA/comments/1xsbc2r/multiverse_computings_comet_60b_a12b_ggufs_with/
- 2B Doom-playing decision model fine-tuned with LoRA on game images in MLX, trained in 43 minutes on a Mac: https://www.reddit.com/r/LocalLLaMA/comments/1xryvbg/i_finetuned_a_2b_decision_model_to_play_doom_on/
- llama.cpp PR #31185 "external PLE file loading" by pwilkin: https://www.reddit.com/r/LocalLLaMA/comments/1xsgpby/feat_external_ple_file/
- clap.cpp — audio embedding inference in C++/GGML: https://www.reddit.com/r/LocalLLaMA/comments/1xsdy76/audio_embeddings_infer/
- Startlux 4B/9B Instant (System1/Jev) Q40 on 4× Raspberry Pi 5 8 GB: https://www.reddit.com/r/LocalLLaMA/comments/1xspmhe/startlux_4b_9b_instant_system1jev_q40_on_4_x/
- Prompt-processing VRAM spike (~0.5–1 GB) on Vulkan llama.cpp 790: https://www.reddit.com/r/LocalLLaMA/comments/1xs72gf/vram_051gb_vram_usage_spikes_during_prompt/
- llm-psicotest — seeded 38-turn conversation harness to check whether a quant swap changed model behaviour: https://www.reddit.com/r/LocalLLaMA/comments/1xs1my0/llmpsicotest_a_seeded_38turn_conversation_to/

### Reddit r/MachineLearning

- Feed: `https://www.reddit.com/r/MachineLearning/new.rss?limit=100`. **Reddit returned HTTP 403 then 429 for the first three attempts** (including different User-Agents and old.reddit.com); it succeeded after a ~60 s backoff. **The 7 in-window posts below are therefore complete for the 100 newest entries** but the feed's low posting rate means the 100-entry tail only reaches back ~1 day (yesterday: 10 in-window of 100).
- 7 in-window posts: Usul (NN expressible in maths) [P]; "Did we ever really get to the bottom of why BatchNorm works?" [D]; "Has Anyone Here Ever Built An Image Generator From Scratch?" [N]; power-outage forecasting (2.4× PR-AUC of NWS warnings); LingBot-Touch tactile pretraining; Bayesian-optimisation file extraction [P]; Twindex identifiability certificates.

**Finding (LingBot-Touch tactile pretraining — JEPA beats reconstruction).** Robbyant's self-supervised tactile encoder predicts masked-contact latents instead of reconstructing raw sensor signals; beats same-size MAE and VAE reconstruction baselines on tactile-to-video top-5 recall at 1K hours: **JEPA 32.1% vs MAE 5.6% vs VAE 4.4%**; at 4K hours JEPA reaches 49.3%. Checkpoints and inference code are public.
Source: https://www.reddit.com/r/MachineLearning/comments/1xs05uo/latent_prediction_beats_reconstruction_for/
Cross-post: https://www.reddit.com/r/LocalLLaMA/comments/1xsoaeo/lingbottouch_a_robbyant_collection_a_foundation/

**Finding (power-outage forecasting).** XGBoost on HRRR storm data (gusts, shear, CAPE, icing) plus county facts and current/neighbouring outages, predicting P(≥5% of a county's customers newly out in the 6 h starting 2 h from now) for 216 counties in MO+IL. Claims 2.4× the PR-AUC of NWS warnings. **Author-reported, single submission.**
Source: https://www.reddit.com/r/MachineLearning/comments/1xs4hq8/forecasting_new_power_outages_per_county_hourly_2/

**Finding (Twindex — identifiability certificates for parameter sets).** Finds "twin" parameter sets that fit data equally well and emits a JSON certificate replayable by an exact checker (standard-library Python, rational arithmetic, no floats) returning VALID / INVALID / INCONCLUSIVE. Novel formalism; unvalidated outside the author's own tests.
Source: https://www.reddit.com/r/MachineLearning/comments/1xryhhg/twindex_exact_replayable_proofs_that_your_data/

**Finding (Usul — NN definition via maths).** Paper/dataset post proposing expressing neural networks directly in mathematical notation.
Source: https://www.reddit.com/r/MachineLearning/comments/1xsmmfm/introducing_us/

**Finding (BatchNorm discussion, image generator from scratch, Bayesian-optimisation file extraction).**
- https://www.reddit.com/r/MachineLearning/comments/1xsasyf/did_we_ever_re/
- https://www.reddit.com/r/MachineLearning/comments/1xs78e3/has_anyone_her/
- https://www.reddit.com/r/MachineLearning/comments/1xrzzfu/facing_file_ex/

---

## Leaderboards

### Artificial Analysis — Intelligence Index (homepage payload)

**Method note:** `artificialanalysis.ai/api/v2/data/*` is **HTTP 410 Gone** — confirmed today: `{"error":"Gone","message":"The legacy /api/v2/data/* endpoints were retired on Wed, 04 Nov 2026 23:59:59 GMT. Migrate to the documented V2 API: ..."}`. All numbers below were extracted from the Next.js homepage payload (`self.__next_f` flight data), field `intelligenceIndex`. The Decision Index v2 per-model scores are **not** present in the homepage payload — only navigation strings and the `decisionIndex` evaluation descriptor. The referenced `/data/324ed05c14a0dc8b.txt` manifest is served in an undecodable binary format (magic `c6 0a b4 b5 1a 8e`) — not gzip/brotli/zstd — so it could not be parsed. **Decision Index v2 values are therefore unavailable from this source today.**

Top of the AA Intelligence Index (payload values; changelog rounds to integers):

| # | Model | AA Intelligence Index | Cost/task | Yesterday |
|---|---|---|---|---|
| 1 | Claude Fable 5.2 | **64.56** (changelog: 65) | $26.54 | *new — absent yesterday* |
| 2 | Gemini 4 Carbon | 60.03 | $7.76 | 60.03 (unchanged) |
| 3 | Claude Opus 5.5 | 59.11 | $10.04 | 59.11 (unchanged) |
| 4 | GPT-6 Astra | 56.85 | $6.25 | 56.85 (unchanged) |
| 5 | GPT-6.1 Sol | 54.61 | $1.27 | 54.61 (unchanged) |
| 6 | Claude Sonnet 5.5 | 54.54 | $10.02 | 54.54 (unchanged) |
| 7 | GPT-6.1 Terra | 51.33 | $0.96 | 51.33 (unchanged) |
| 8 | Muse Wonder (Full) | 50.08 | — | 50.08 (unchanged) |
| 9 | Claude Fable 5.1 | 49.16 | $12.99 | 49.16 (unchanged) |
| 10 | Kimi K3.1 Pro | 46.45 | $3.68 | 46.45 (unchanged) |
| 11 | Muse Wonder | 43.57 | $6.95 | 43.57 (unchanged) |
| 12 | Claude Haiku 5.5 | 36.48 | $0.41 | 36.48 (unchanged) |
| 13 | **Muse Ember** | **36.02** (changelog: 36) | **$0.136** | *new — absent yesterday* |
| 14 | Grok 4.7 | 35.49 | $7.77 | 35.49 (unchanged) |

- **Change vs yesterday:** 26 of 28 tracked models are bit-identical to yesterday's values. Two models were added (Claude Fable 5.2, Muse Ember); two disappeared from the homepage payload (Muse Spark Open, MiniMax-M3.1-Flash).
- **Headline:** Claude Fable 5.2 takes the #1 slot at **64.56**, ahead of Gemini 4 Carbon (60.03) — a ~4.5-point lead, the biggest gap at the top of this table in the observed period.
- **Cost story:** Muse Ember scores 36 (matching Claude Haiku 5.5) at **$0.136 per task** vs Haiku 5.5's $0.411 — roughly one third. AA's own article headline says exactly this.
- Changelog corroboration (all entries dated 09 Nov 2026, the only new day): Fable 5.2 Max 65 / High 62 / Xhigh 62 / Medium 56 / Low 54; Muse Ember Max 36 / Xhigh 34; plus new provider results for Kimi K3.1 Pro (Inco, Amazon Bedrock), GLM-5.3-Flash (Zyphra) and all Fable 5.2 tiers (Anthropic), Muse Ember tiers (Meta).

Source: https://artificialanalysis.ai/ (Intelligence Index), https://artificialanalysis.ai/changelog (changelog), https://artificialanalysis.ai/articles/meta-s-muse-ember-is-the-cheapest-model-scoring-36-on-the-intelligence-index (Muse Ember article)

### Artificial Analysis — Decision Index v2

**Status: no new changelog entry in-window.** The v2 methodology (private-data share 25%→45%, "Decision Score" = 50×(1+Accuracy−Brier), AA-Paperclip 30%, AA-Symmetry 15%, WildGuardTest removed) was published 08 Nov and is unchanged. No per-model v2 scores could be retrieved today (see method note above). **Do not report AA Decision Index numbers for 2026-11-10.**

Source: https://artificialanalysis.ai/changelog

### BenchLM (benchlm.ai)

- Snapshot: `lastUpdated 2026-11-10`, `mode bench-align-v5`, `methodologyVersion bench-align-v5.8-2026-09-30`, `sourceSnapshotId 2026-11-10-07782fd3ca428ba7`, 50 models (yesterday: `2026-11-09`, same methodology version, 50 models).
- Site's own caveat printed in the payload: *"Point-estimate order; conditional ranges do not establish rank confidence."* and `futureTruthValidated: false`, `simultaneousRosterCoverageValidated: false`, `retrospectiveTailChecksPassed: false`.

| # | Model | Overall | Evidence | Yesterday |
|---|---|---|---|---|
| 1 | Claude Fable 5.2 | 91.19 | **estimated** | *new* |
| 2 | Gemini 4 Carbon | 88.14 | estimated | 88.69 (−0.55) |
| 3 | Claude Opus 5.5 | 85.82 | supported | 86.32 (−0.50) |
| 4 | GPT-6 Astra | 85.23 | supported | 85.80 (−0.57) |
| 5 | GPT-6.1 Sol | 85.03 | supported | 85.35 (−0.32) |
| 6 | Gemini 4 Argon | 81.60 | supported | 82.10 (−0.50) |
| 7 | Claude Sonnet 5.5 | 81.29 | supported | 81.78 (−0.49) |
| 8 | Claude Fable 5.1 | 80.90 | supported | 81.30 (−0.40) |
| 9 | Claude Fable 5 | 80.39 | supported | 80.74 (−0.35) |
| 10 | GPT-6.1 Terra | 80.22 | estimated | 80.72 (−0.50) |

- **Net effect: every incumbent score dropped 0.3–0.6** while Claude Fable 5.2 was inserted at #1 with 91.19. "Claude Fable 5.2" is the only entry in; "Hy4 preview" (#50, 61.33) is the only exit.
- **Source-quality caveat that matters:** the new #1 is flagged `evidenceStatus: "estimated"` with `sourcePattern: "objective-only"` and a 90% interval of 76.84–100.00, i.e. the score is derived from a pattern rather than directly measured, and the interval is enormous.

Source: https://benchlm.ai/api/data/leaderboard

### FMRT (fmrt.ai) — Frontier Model Reasoning Tournament

- `generatedAt 2026-11-10T17:32:07.186Z` (yesterday: 2026-11-09T06:56:47.890Z). Head-to-head debate on 636 contentious motions, judged blind.

| # | Model | BT rating | W-L-T | Win rate |
|---|---|---|---|---|
| 1 | Claude Opus 5.5 | 1879.3 | 132-39-14 | 77% |
| 2 | **Claude Fable 5.2** | 1807.0 | 25-4 | **86%** |
| 3 | Kimi K3.1 Pro | 1725.7 | 78-37 | 68% |
| 4 | Grok 4.7 | 1602.3 | 121-80 | 60% |
| 5 | Gemini 4 Argon | 1599.7 | 109-73 | 60% |
| 6 | Muse Wonder | 1592.1 | 121-94 | 56% |
| 7 | GLM 5.3 | 1573.1 | 92-78 | 54% |
| 8 | GPT-6 Astra | 1501.4 | 81-95 | 46% |
| 9 | DeepSeek V4.1 Flash 1017 | 1498.6 | 34-48 | 41% |
| 10 | Muse Spark Open | 1481.7 | 116-128 | 48% |

- **Claude Fable 5.1 was retired** (still listed with rank null, rating 1876.5, retired: true), taking yesterday's #1 slot off the board. The same retirement applies to its low/medium-effort variants.
- **New entries:** Claude Fable 5.2 (#2, 1807.0, 25-4 = 86% win rate on a small sample), plus "Claude Fable 5.2 · low effort" (1731.3) and "· medium effort" (1577.1) which are unranked variants.
- Gemini 4 Carbon is **not present** in FMRT's ranked list at all — unlike yesterday's task briefing, which quoted FMRT values for Gemini 4 Carbon (69.4). Those figures do not correspond to FMRT's BT-rating field as served today; Gemini 4 Carbon has no FMRT entry, and Fable 5.1 was yesterday's #1 (1916.1), not Gemini 4 Carbon. **Correction to yesterday's briefing noted.**
- Yesterday's #1 Claude Fable 5.1 (1916.1) → retired; yesterday's #2 Claude Opus 5.5 (1915.6) → #1 today (1879.3). Gemini 4 Argon fell #6 → #5; Grok 4.7 #7 → #4; Muse Wonder #4 → #6.

Source: https://fmrt.ai/api/leaderboard.json

### BenchLeader (benchleader.com)

- Page dated **10 Nov 2026**. Metrics block: **336 models ranked**, 600 configurations ranked, 600 data feeds live (28/29), **256 LLM benchmarks from 47 benchmark publishers** (78 feed the index). Yesterday: 334 models, 594 configurations, 255 benchmarks from 46 publishers, 28/28 feeds.
- Index change is published as "change in index since the last time it moved", not since yesterday — read accordingly.

| # | Model | Index | Δ | Price (blended/M) |
|---|---|---|---|---|
| 1 | **Claude Fable 5.2 max** (Anthropic) | **72.1** | ▲ 2.7 (New) | $16.00 |
| 2 | Claude Opus 5.5 max | 68.8 | ▼ 0.1 | $8.00 |
| 3 | Gemini 4 Carbon high | 68.5 | ▼ 0.8 | $8.00 |
| 4 | GPT-6 Astra | 67.9 | ▼ 0.2 | $20.00 |
| 5 | Claude Fable 5.1 max | 66.8 | ▼ 0.1 | $20.00 |
| 6 | GPT-6.1 Sol max | 66.8 | ▼ 0.2 | $4.00 |
| 7 | Claude Fable 5 | 66.6 | ▲ 0.1 | $20.00 |
| 8 | Gemini 4 Argon high | 65.6 | ▼ 0.1 | $4.00 |
| 9 | GPT-5.6 Sol max | 65.3 | ▼ 0.1 | $8.00 |
| 10 | Claude Opus 5 | 65.2 | ▲ 0.1 | $10.00 |

- **Claude Fable 5.2 is the new #1 at 72.1**, 3.3 points clear of Claude Opus 5.5 (68.8). The page notes 5 configurations sit within Fable 5.2's margin of error, so "for most work the choice comes down to price and speed"; it highlights **GPT-6.1 Terra as the best quality-per-dollar among the top 15 at $2.00/M blended**.
- Yesterday's leader was Claude Opus 5.5 at 69.4 (Gemini 4 Carbon 69.3, GPT-6 Astra 68.3). Opus 5.5 is now 68.8, Gemini 4 Carbon 68.5, GPT-6 Astra 67.9 — i.e. **the incumbent numbers all fell by ~0.5–0.8 while Fable 5.2 was inserted**.
- Model count 334 → 336. Benchmarks 255 → 256; publishers 46 → 47.
- Release-watch entries: **Muse Ember xhigh** and **Muse Ember 1.0** (both released 9 Nov 2026) are listed as "awaiting results"; **LFM2.5-24B-A2B** and **LFM3-1.7B** (Liquid AI, first measured 8 Nov) also awaiting results; **Agnes 2.5 Pro Theta** at #324 with index 50.9 (released 7 Nov).
- Also published today: Claude Fable 5.1 max moved #9 → #8; GPT-6.1 Sol max moved #8 → #9; MiMo-V2.5 input price $0.18/M → $0.11/M (−39%); Nemotron 3.5 Lightning cost per task $0.29/M → $0.31/M (+9%).
- Frontier board (top 10 by BenchLeader Index, with speed and cost per agentic session): Fable 5.2 max 72.1 / 98 tok/s / $0.64; Opus 5.5 max 68.8 / 115 / $0.32; Gemini 4 Carbon high 68.5 / 78 / $0.32; GPT-6 Astra 67.9 / 27 / $0.80; GPT-6.1 Sol max 66.8 / 57 / $0.16; Gemini 4 Argon high 65.6 / 66 / $0.16; DeepSeek V4 Pro (Aug 2026) high 59.1 / 42 / $0.05; DeepSeek V4.1 Flash 1017 max 58.8 / 139 / $0.02; Inkling 2 Small 58.1 / 165 / $0.02; Step 3.5 Flash 56.4 / 97 / $0.007.
- Benchmarks with new results today: Epoch Capabilities Index (178 new/updated), GameBench 2 by reasoning setting (177), CritPt v2 hard subset (AA) (84).

Source: https://www.benchleader.com/

### Cross-board summary

All four boards move the same way: **Claude Fable 5.2 is #1 on AA Intelligence Index (64.56), BenchLM (91.19) and BenchLeader (72.1), and #2 on FMRT (1807, 86% win rate)**. No incumbent model gained on any board; several lost 0.3–0.8 points on BenchLM/BenchLeader, consistent with new Fable 5.2 evidence entering those aggregated pipelines and diluting relative positions.

---

## Model releases

### In-window new models on Hugging Face

**No major-lab model was *created* on HF inside the window.** The `createdAt`-descending feed was enumerated to 1000 rows; 923 of them fall inside the window, but with the exception of two small community repos they are test/empty repos (`MyAwesomeModel-TestRepo`, `ringtone-ro/*` spam, per-checkpoint training dumps). Only two in-window repos reach 3 likes / 2000 downloads:
- `akhaliq/minimax-h3-image-pdmd-2step` — 2026-11-10T15:21:45Z, 3 likes, 0 downloads
- `PedroMarinhoDev/ReCaVSR-ComfyUI` — 2026-11-10T12:24:53Z, 3 likes, 0 downloads

Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=50 (and limit=1000)

**The day's releases landed on the provider side, not on HF.** Per-org `createdAt` checks for MiniMaxAI, Qwen, meta-llama, NousResearch, tencent, LiquidAI, nvidia, moonshotai, google, deepseek-ai, microsoft, openai, mistralai returned **no in-window creations** — the newest from each is dated before the window (LiquidAI 2026-10-27, MiniMaxAI 2026-11-08, NousResearch 2026-11-06, Qwen 2026-10-09, tencent 2026-11-07, moonshotai 2026-11-02, nvidia 2026-11-05, google 2026-09-14, deepseek-ai 2026-10-17, microsoft 2026-10-30, openai 2026-04-17, mistralai 2026-10-15, meta-llama 2025-04-28).

**Released during the window (provider-side, weights not on HF):**
- **Claude Fable 5.2 / Claude Mythos 5.2** (Anthropic) — announced 2026-11-09 ~18:00Z. AA Intelligence Index 65 (Max). https://www.anthropic.com/claude-fable-and-mythos-5-2
- **Muse Ember** (Meta) — announced 2026-11-09 ~17:58Z. AA Intelligence Index 36 (Max) at $0.136/task; BenchLeader lists "Muse Ember xhigh" and "Muse Ember 1.0" as awaiting results. No HF weights. https://research.meta.ai/blog/muse-ember

**Trending top-25 — movers vs yesterday**

Entered top-25: `MiniMaxAI/MiniMax-H3-Image` (#16, trendingScore 218, created 2026-11-03), `mradermacher/gemma-4-31B-it-ARA-heretic-GGUF` (#23, 157, created 2026-11-07), `VideoRebirthAI/hyperflow-h3-flash` (#24, 156, created 2026-11-04), `tencent/Qwen3.8-27B-DSpine-b16` (#25, 156, created 2026-11-07).
Exited top-25: `Scantist/GLM-5.3-SLIM-GGUF`, `AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF`, `FusionCow/Sulphur-3`, `abenzerps/Qwen-Image-2.1-Turbo-Quantized`.
Score increases at the top: `speridlabs/idol` 829 → 911 (#1), `xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic` 805 → 902 (#2), `moonshotai/Kimi-K3.1-Pro` 579.5 → 607.5 (#3), `NousResearch/Arete-27B` 329 → 370 (#6). No model fell out of the top 10 except via reordering.
Note: **trendingScore is a Hugging Face popularity metric (likes/downloads/lastModified weighting), not a quality or capability measure.** The #1 and #2 slots are held by community uncensored merges, not frontier labs.

Source: https://huggingface.co/api/models?sort=trendingScore&limit=25

**Other in-window HF repos worth noting (created in-window):** `PotatoForge/Minimax-H3-Image-W4A4` (2026-11-10T17:14:52Z) — 4-bit W4A4 quant of MiniMax H3-Image; `shiffman/biscuit-smollm2-360m-ONNX` (2026-11-10T17:16:03Z); `sabda-ai/gemma-4-E2B-sabda` and `sabda-ai/gemma-4-E4B-sabda` (2026-11-10); `mradermacher/Qwen3-TTS-Sam-0.6B-GGUF` (2026-11-10T17:04:49Z); `choyiny/yev2-35b-a3b-fp8` (2026-11-10T17:04:49Z); `cmjones1966/MiniMax-H3-Longvideos` (2026-11-10T17:23:34Z).

---

## Negative signals / disputes

1. **Anthropic deliberately capped Fable 5.2 / Mythos 5.2's AI-acceleration research capability** — confirmed by Anthropic's own system card, quoted verbatim on HN. In accelerator-kernel-optimisation and LLM-architecture research the models perform "at about the level of Opus 5.5", with transparent fallbacks to Opus 5 on a small topic set, and Anthropic says it is "starting to deliberately limit public access" to certain computer-architecture-related AI capabilities. https://news.ycombinator.com/item?id=50429068
2. **Benchmark-version churn breaks longitudinal comparisons.** HN users note Opus 5.5's original numbers no longer line up with current benchmark versions; one thread respondent expects AA's Intelligence Index v5 to be "published November 9, 2026", meaning the index itself moved under the model results. https://news.ycombinator.com/item?id=50429068 and https://news.ycombinator.com/item?id=50429024
3. **Vendor early access allegation.** Unverified, no evidence, but recurring in the AA-score thread. https://news.ycombinator.com/item?id=50431144
4. **Artificial Analysis accused of bias against open-weight models.** A LocalLLaMA post claims AA "conveniently re-calibrates" benchmarks whenever open-weight models approach proprietary US models, and that the Intelligence Index over-weights "coding vs telecom bullshit". **Community ALLEGATION, no evidence provided.** Today is a poor day for the claim: AA's #1 (Fable 5.2) and #13 (Muse Ember) are both closed, and the top of the index is entirely proprietary. https://www.reddit.com/r/LocalLLaMA/comments/1xs5pkl/is_artificialanalysis_biased_against_open_weight/
5. **The new BenchLM #1 is an *estimated* score.** Claude Fable 5.2's 91.19 carries `evidenceStatus: "estimated"`, `sourcePattern: "objective-only"`, a 90% interval of 76.84–100.00, and the payload itself states `futureTruthValidated: false`, `retrospectiveTailChecksPassed: false`. Any downstream comparison to the "supported"-flagged models is weaker than it looks. https://benchlm.ai/api/data/leaderboard
6. **Fable 5.1 retired from FMRT the day Fable 5.2 launched** — a model's rating disappearing from a board the moment its successor ships makes head-to-head tournament boards a poor longitudinal instrument. https://fmrt.ai/api/leaderboard.json
7. **A backdoored/compromised inference provider.** Fireworks AI had a second breach in weeks; Notion learned its AI chat transcripts were exposed via a Fireworks-related incident *after* Fireworks' 9 Oct notification said they were "not impacted". Two independent threads plus vendor and Notion advisories. https://news.ycombinator.com/item?id=50437106
8. **Google allegedly routes personal Drive files and emails to human annotators** when Gemini is used. A community repo and a 692-point HN thread report it; the claim is user-reported, not vendor-confirmed. https://news.ycombinator.com/item?id=50429426
9. **Meta accused of breaking its Muse open-source commitment** while shipping Muse Ember closed. **Community ALLEGATION**, though the absence of HF weights is confirmed. https://www.reddit.com/r/LocalLLaMA/comments/1xs0qmx/muse_ember_zuck_promised_to_open_source_muse/
10. **Arete-27B apparently trades refusals for confabulations** — a homemade 30-question refusal-to-fabricate bench scores Qwen3.8-Flash-Next and Orion-26B at 21/30 while Arete falls well short. Small n, single rubric, but independently prompted by a prior HF observation. https://www.reddit.com/r/LocalLLaMA/comments/1xs1nqc/confirming_apollomg_findings_organic_handmade/
11. **Quant/finetune saturation.** "What happens to the 1.3 million Qwen3.8 quant/variants after Qwen 4 releases?" — a community member who has benchmarked hundreds of variants frames the whole fine-tune ecosystem as about to be obsolete. https://www.reddit.com/r/LocalLLaMA/comments/1xs11q4/what_happens_to_the_13_million_qwen38/
12. **"AI usage generates a fragile codebase"** — the counter-argument in the thread is that some fragility patterns predate LLMs, which weakens the causal claim. https://news.ycombinator.com/item?id=50438318
13. **Fable 5.2 reportedly makes grammar errors.** An "Ask HN" thread noted this on the day of launch — an unusually concrete quality complaint about a fresh frontier release. https://news.ycombinator.com/item?id=50438506
14. **Source-quality problem: the AA data manifest is undecodable.** `/data/324ed05c14a0dc8b.txt` is served with magic bytes `c6 0a b4 b5 1a 8e` and is neither gzip, brotli, nor zstd. Combined with the 410 on the legacy API, Decision Index v2 per-model scores are simply not retrievable today by scraping. https://artificialanalysis.ai/data-api/migrate-v2-data
15. **Reddit rate-limiting blocked r/MachineLearning** for ~4 minutes (403 then 429 across multiple User-Agents and old.reddit.com), so any future run should build in backoff for that feed specifically.

---

## Trend

The day was owned by two launches and the churn they caused. Anthropic's Claude Fable 5.2 / Mythos 5.2 (announced 2026-11-09 ~18:00Z) and Meta's Muse Ember (17:58Z) landed within ten minutes of each other and immediately took over every board we track: Fable 5.2 is now #1 on Artificial Analysis's Intelligence Index (64.56 vs Gemini 4 Carbon's 60.03), #1 on BenchLM (91.19), #1 on BenchLeader (72.1) and #2 on FMRT with an 86% win rate in only 29 decisive motions. The mechanical effect is visible in the deltas — on both BenchLM and BenchLeader every incumbent slipped 0.3–0.8 points while Fable 5.2 was inserted, and yesterday's FMRT #1 (Fable 5.1) was retired outright the day its successor shipped, which makes the same point more bluntly. The instrumentation is visibly straining under the release cadence: Anthropic's own system card documents that Fable 5.2 and Mythos 5.2 were deliberately capped at roughly Opus 5.5 level in accelerator-kernel and LLM-architecture research (with transparent Opus 5 fallbacks) to restrict AI-acceleration capability — a vendor-confirmed capability carve-out that no board here captures — while HN users point out that benchmark versions have shifted under older Opus 5.5 results, making cross-release comparison unreliable. On the cost axis the interesting story is Muse Ember: Intelligence Index 36 at $0.136 per task, one third of Claude Haiku 5.5's $0.411, which is the first genuinely cheap frontier-adjacent number of the day. Community sentiment splits hard into two camps that rarely meet: the frontier-launch thread is dominated by procurement economics ("waiting is almost a virtue", subscription quota math, "I hope free open weight models prosper"), while r/LocalLLaMA keeps grinding on the local end, where the notable results are a 42% GPU power-limit cut on an RTX 3080 Ti with zero throughput loss, RustingStrata reaching 128 tok/s decode on a single 12 GB card, DeepSeek V4.1 Flash completing a task in 94 tok/s against Qwen 3.8 Flash-Next's 350, and DeepSeek-V4.1-Flash at 249 GB streaming off SSD on a 3060. Underneath both sits a distinctly sour note — two inference-provider breaches in a month with one of them (Fireworks) exposing Notion's AI chat transcripts after initially telling customers they weren't affected, a Google project alleging Drive data reaches human annotators, and OpenAI/Anthropic building in-house models whose capability caps are self-declared. Hugging Face itself saw no notable new model creation in-window; the trending list is now led by community uncensored merges, and the quant/fine-tune scene is openly asking whether 1.3 million Qwen3.8 variants will survive Qwen 4 — a saturation signal that the frontier release cadence is now outrunning the open-weight ecosystem it feeds.
