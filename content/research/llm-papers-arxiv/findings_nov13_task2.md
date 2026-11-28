# Task 2 — Community, Leaderboard & Release Signals

**Window:** 2026-11-12T17:28:00+00:00 → 2026-11-13T17:28:00+00:00 (24h UTC)
**Baseline for all deltas:** `findings_nov12_task2.md` (window 2026-11-11T17:28Z → 2026-11-12T17:28Z)

---

## 1. Hacker News — window 2026-11-12T17:28Z → 2026-11-13T17:28Z

**Coverage:** Algolia HN `search_by_date` pages `hn_all.json` + `hn_p0.json` … `hn_p12.json`, deduped by `objectID` → **1,068 unique stories in window**. Comment trees pulled with the Algolia item endpoint for the top 5 AI threads (`hnitem_50471431.json`, `hnitem_50472260.json`, `hnitem_50474883.json`, `hnitem_50475713.json`, `hnitem_50481187.json`) plus `hnitem_50477231.json`, `hnitem_50475735.json`, `hnitem_50481870.json`, `hnitem_50480659.json`, `hnitem_50484426.json`, `hnitem_50474361.json`.

### AI/LLM share of all in-window stories

| Metric | 12 Nov window | 13 Nov window | Δ |
|---|---|---|---|
| Total stories in window | 1,143 | 1,068 | −75 |
| AI/LLM-relevant stories (title keyword) | 306 | **303** | −3 |
| **AI/LLM share of all in-window stories** | 26.8% | **28.4%** | **+1.6 pp** |
| AI/LLM share of top 50 by points | 13/50 (26.0%) | **15/50 (30.0%)** | +4.0 pp |
| AI/LLM share of top 100 by points | 33/100 (33.0%) | **35/100 (35.0%)** | +2.0 pp |

The share rose, but the *shape* of the day changed: on 12 Nov the top AI story was a funding/IPO event; on 13 Nov the top AI stories are a **model launch (Gemini 4 Hydrogen)** and an **outage**, with the NVIDIA leadership crisis occupying the overall #1 slot.

### Top AI/LLM-relevant stories (by points)

| # | Pts | Comments | ID | Title | Source |
|---|---|---|---|---|---|
| 1 | 750 | 613 | 50477231 | Nvidia employees petition to bring back Jensen Huang | https://news.ycombinator.com/item?id=50477231 |
| 2 | 554 | 345 | 50471431 | Gemini 4 Hydrogen | https://news.ycombinator.com/item?id=50471431 |
| 3 | 480 | 158 | 50472260 | Gemini 4 Hydrogen and Orchestrator | https://news.ycombinator.com/item?id=50472260 |
| 4 | 433 | 352 | 50481187 | Elevated errors on claude.ai, Claude Code, and platform.claude.com | https://news.ycombinator.com/item?id=50481187 |
| 5 | 406 | 436 | 50473190 | Former Nvidia CEO Huang had a relationship with a second employee, sources say | https://news.ycombinator.com/item?id=50473190 |
| 6 | 338 | 140 | 50474883 | Chinese frontier AI models carry the fingerprint of export-controlled GPUs | https://news.ycombinator.com/item?id=50474883 |
| 7 | 315 | 94 | 50475713 | Edge0-145B: Frontier AI Capabilities on Your Own Computer | https://news.ycombinator.com/item?id=50475713 |
| 8 | 219 | 125 | 50477649 | Brave Search API now accepts agentic payments via the x402 protocol | https://news.ycombinator.com/item?id=50477649 |
| 9 | 192 | 223 | 50474311 | AI is turning Apple's app review process into a nightmare for synth developers | https://news.ycombinator.com/item?id=50474311 |
| 10 | 192 | 85 | 50481870 | AI Is Destroying the Trust Between Writers and Readers | https://news.ycombinator.com/item?id=50481870 |
| 11 | 184 | 160 | 50481220 | Claude Is Down | https://news.ycombinator.com/item?id=50481220 |
| 12 | 129 | 32 | 50471650 | Show HN: AgentRun – open-source, Self-improving Managed Agents | https://news.ycombinator.com/item?id=50471650 |
| 13 | 98 | 83 | 50475735 | Why You Should Expect an AI Crash | https://news.ycombinator.com/item?id=50475735 |
| 14 | 88 | 39 | 50484658 | Jonathan Blow – If AI Solved Coding, Why Is My Software Still the Same? [video] | https://news.ycombinator.com/item?id=50484658 |
| 15 | 86 | 28 | 50476586 | Chicago schools to Google – we'd rather lose Search than be forced to accept AI | https://news.ycombinator.com/item?id=50476586 |

Additional in-window AI threads counted in the share statistic: 50484960 (Why is Google cutting off Search from AI-free schools?, 65/49), 50484110 (Amodei Says AI Will Cure Cancer in a Decade. Doctors Are Skeptical, 29/65), 50480659 (Is there a 'right amount' of AI?, 35/61), 50484426 (Ask HN: Can anyone name anything new that AI has done?, 22/42), 50474361 (Foundation Models framework — Apple, 257/35), 50480909 (Tell HN: Claude Code Is Down, 37/21), 50480941 (Claude AI Is Down, 27/6), 50480936 (Claude OAuth Failures, 27/23), 50480914 (Claude needs CAPTCHA, 14/9).

Primary source URLs for the five highest-engagement AI stories:

https://news.ycombinator.com/item?id=50477231
https://news.ycombinator.com/item?id=50471431
https://news.ycombinator.com/item?id=50472260
https://news.ycombinator.com/item?id=50481187
https://news.ycombinator.com/item?id=50474883

### Verbatim comments from the cached comment trees (≤250 chars each)

**"Gemini 4 Hydrogen"** (50471431, 554 pts / 345 comments) — the pricing/workhorse argument dominates:

> "This is the most important class of models to keep watch. These are the ones that are going be to workhorses in the post-tokenmaxxing clarity" — **vatsachak**

> "Disagree, Opus-tier models are the workhorses. You can get a ton done with them on a $100 subscription." — **jrflo**

> "And for those on API billing? Opus is still quite pricy for what you're getting done with it." — **vallerie**

> "Price per token is dropping (though anthropic are doing dastardly things such as using new tokenizers that use 30% more tokens), efficiency will likely increase." — **scrollop**

**"Gemini 4 Hydrogen and Orchestrator"** (50472260, 480/158) — model-quality scepticism about Google's stack:

> "Carbon is the first "better than meh" model form Google in more than half a year. It's been out for less than a week. How can you consider it "steady"? Their subscription and even the API has been terribly unstable thro…" — **pietz**

> "I use argon and opus daily and I can tell you I have to use opus to review argon because argon goes and build things and also creates bunch of bugs along with it." — **ilteris**

**"Chinese frontier AI models carry the fingerprint of export-controlled GPUs"** (50474883, 338/140) — the export-control debate:

> "Export controls inherently raise the cost of doing business with parties you don't like, the other party has to either invest more resources acquiring them, or make the decision to forego acquiring them." — **wmchen**

> "Simply banning things causes the price to go up. That alone is good enough to motivate the policy decision." — **LarsDu88**

**"Edge0-145B"** (50475713, 315/94) — open-weight licensing is the contested claim:

> "It is not open weight either. The license is too restrictive to meet the standard definition of that team." — **hedora**

> "It's interesting. It does seem to be based on QFN, but they've modified the architecture. 10B active versus QFN's 6B, plus also QFN is 180B parameters, not 145B." — **anon373839**

**"Elevated errors on claude.ai, Claude Code, and platform.claude.com"** (50481187, 433/352) — outage thread:

> "Many Claude session suddenly require a re-login, which first worked but now gives ¶ OAuth request failed Temporarily unable to authenticate. Please retry. ¶ Can this be fall-out from the Microsoft outage?" — **xamde**

**"Nvidia employees petition to bring back Jensen Huang"** (50477231, 750/613):

> "I imagine there's a lot of mixed emotions at Nvidia. Jensen seemed to have a very likable persona about him and he truly was a great CEO of the company. I imagine many looked up to him and are left to make sense of the past week." — **jmathai**

---

## 2. Reddit — r/LocalLLaMA

**Coverage:** `rll.rss` (feed `<updated>` 2026-11-13T17:34:07+00:00, 100 newest entries) → **69 in-window posts** (2026-11-12T17:28Z → 2026-11-13T17:28Z). Yesterday's window had 50. **Engagement metrics (upvotes / comment counts) are not carried by Reddit's RSS feed and could not be retrieved** — direct `reddit.com/.../<id>.json` requests returned **HTTP 403** and `old.reddit.com` returned **HTTP 302**. No score or comment count is asserted below.

### Notable in-window posts

1. **llama.cpp v1.0 is here 🦙** — Hugging Face's Merve announces the v1.0 release of llama.cpp plus new Llama desktop apps built on it ("we'll keep covering every platform and every model type"). First-party announcement, in-window at 2026-11-13T14:07:33+00:00.
   https://www.reddit.com/r/LocalLLaMA/comments/1xv8t2e/llamacpp_v10_is_here/

2. **Perplexity releases Decider v1.3 (26B) and Decider Flash v1.3 (5B): open-weight (Apache 2.0) classification/decision models** — `pplx-decider-v1.3` fine-tuned from Qwen3.8-27B (~49 GiB BF16); `pplx-decider-flash-v1.3` distilled from the 27B via a KL objective on teacher distributions (~8.5 GiB BF16). Both Apache 2.0, text + image, and they add a new **locate** question type that extracts verbatim spans with character offsets (NER, PII detection, extractive QA).
   https://www.reddit.com/r/LocalLLaMA/comments/1xv7fku/perplexity_releases_decider_v13_26b_and_decider/

3. **thinkingmachines/Inkling-2-Small is released!** — Thinking Machines' open release lands in-window (2026-11-12T22:25:57+00:00); Artificial Analysis now lists **Inkling 2 Small, Intelligence Index 30.6287, cost $1.1784281349617984, release date 2026-11-05**, and it has entered the AA open-weight ranking (see §4).
   https://www.reddit.com/r/LocalLLaMA/comments/1xuqplg/thinkingmachinesinkling2small_is_released/

4. **Edge0-145B: Open-Source On-Device AI with 145B Parameters** — the Edge0 release that drove 315 pts / 94 comments on HN (item 50475713); the HN thread disputes both its provenance (Qwen3.8-Flash-Next derivative) and its "open-source" label.
   https://www.reddit.com/r/LocalLLaMA/comments/1xuuq0b/edge0145b_opensource_ondevice_ai_with_145b/

5. **New Model "Ernie 5.5 Flash Preview" hits strongly at a low parameter count (280B, 14B Active)** — Baidu Ernie 5.5 Flash Preview, 280B total / 14B active. The post carries a self-built "Agentic Coding" aggregate index over 12 coding benchmarks (Terminal-Bench v4.0 16%, DeepSWE v1.1 15%, FrontierCode 2.0 11%, Code Migration (Vals-AI) 9%, Terminal-Bench v2.1 8.5%, SRE-Bench (Vals-AI) 8%, SWE-bench Pro 7.5%, Code Arena Elo 6.5%, Program-Bench 6%, Vibe Code Bench v1.1 5.5%, SciCode 4%, LiveCodeBench v6 3%) and explicitly argues AA's own index covers only two coding benchmarks (Terminal-Bench 4.0 and FrontierCode-AA 2.0, together 25% of the score).
   https://www.reddit.com/r/LocalLLaMA/comments/1xune1i/new_model_ernie_55_flash_preview_hits_strongly_at/

6. **I noticed the 2 Hessian Refinement of MACaQ can be applied to any GGUF without any patches ... and tried it. 13% better quants** — direct follow-on to yesterday's Huawei MACaQ thread: applying 2 of MACaQ's 3 components to an existing GGUF (Qwen3.8-27B UD_4_XL) yields **13.23% less KL divergence vs Unsloth** on the author's small single-5090 testset, with a claimed 4% LiveCodeBench gain (self-described as a single data point).
   https://www.reddit.com/r/LocalLLaMA/comments/1xvbqqa/i_noticed_the_2_hessian_refinement_of_macaq_can/

7. **[Boole-32B-A2.5B-preview] 9GB 1.8-bit MoE, 565 token/s on 1 RTX 5090** — Recursive/precision-numerics' next step after Boole-1.7B: mixed-precision quantization + expert pruning + custom kernels make the model **9× smaller than BF16 and 2× faster than INT4**.
   https://www.reddit.com/r/LocalLLaMA/comments/1xv3h93/boole32ba25bpreview_9gb_18bit_moe_565_tokens_on_1/

8. **DeepSeek flash max is the first model to reach >1% on challenging SWE-sweep bug finding benchmark** — SWE-sweep leaderboard update: DeepSeek v4.1 flash (max) is the first **open-weight** model above 1%; best proprietary model is **Gemini 4 Hydrogen at 13.5%** (per Google's model card), followed by **GPT Astra 6 at 9.5%** (evaluated). Eval harness held constant across models; Claude Code / Codex harnesses "neither seemed to help significantly".
   https://www.reddit.com/r/LocalLLaMA/comments/1xvcgxq/deepseek_flash_max_is_the_first_model_to_reach_1/

9. **Tontaube V1.1: open-weights TTS with voice cloning for long-form generation. 4-bit version runs about real time on a desktop CPU** — ~2.9B autoregressive TTS, 4-bit weights ≈ **4 GB VRAM** or real-time on desktop CPU, zero-shot cloning from 5–60 s of reference audio, 46 bundled voices (EN/DE). Blind listening study with 400 pairwise comparisons preferred V1 prosody over Fish Audio S2 Pro in ~70% of cases.
   https://www.reddit.com/r/LocalLLaMA/comments/1xvdmzb/tontaube_v11_openweights_tts_with_voice_cloning/

10. **Qwen 3.8-27B BF16, lossless, faster and 11.4 Gib smaller** — BF16_P12 packed-weight format (same bits, 12.25 bits/weight) giving **11.4 GiB less VRAM and ~20–24% faster generation**, on 2× RTX PRO 6000 Blackwell (96 GB each, 450 W cap) with llama.cpp plus patches, MTP speculative decoding, and a 10 MB per-request "uncensored" add-on instead of a second 52 GB model.
    https://www.reddit.com/r/LocalLLaMA/comments/1xvcvog/qwen_3827b_bf16_lossless_faster_and_114_gib/

11. **I built speedy Strix Halo kernels for the top-51 LLMs with AMD Loom (and you can too)** — AMD AI Group's new `hrx-loom` stack (compiler + runtime + serving) with `.loom` vector-programming kernels; an agent skill auto-writes Q4_K_M kernels that the author reports are consistently faster than llama.cpp Vulkan and ROCm on Strix Halo.
    https://www.reddit.com/r/LocalLLaMA/comments/1xvcmm0/i_built_speedy_strix_halo_kernels_for_the_top51/

12. **inferencekit: open-source plugin to optimize any model on any hardware using coding agents** — KittenML turns Claude Code / Codex / OpenCode into inference engineers for the local hardware (used to get streaming TTFB of Kitten-TTS-2 to ~10 ms on RTX Pro 6000); optimized configs are PR'd back to a shared engine repo.
    https://www.reddit.com/r/LocalLLaMA/comments/1xut6z0/inferencekit_opensource_plugin_to_optimize_any/

13. **Qwen3.5-9B running on a PS4's GPU, offline, using its own MTP head for speculative decoding** — **31–39 tok/s on a stock PS4**, up from 22 tok/s once the Qwen3.5 MTP head (drafts up to two tokens, full model verifies in one pass) was used; custom 3- and 4-bit repacks fit ≈ 4.5 GiB. Open source (garlic-llm).
    https://www.reddit.com/r/LocalLLaMA/comments/1xvbn2m/qwen359b_running_on_a_ps4s_gpu_offline_using_its/

14. **I ran the same Halloween animation prompt through five coding agents on one local Qwen model** — 2026-11-13T11:25:12+00:00.
    https://www.reddit.com/r/LocalLLaMA/comments/1xv5dsb/i_ran_the_same_halloween_animation_prompt_through/

15. **MIT's Weight-Space Programming paper sent me down to a mathematical paradox trying to fix Llama's over-refusal** — 2026-11-13T11:27:31+00:00.
    https://www.reddit.com/r/LocalLLaMA/comments/1xv5f8y/mits_weightspace_programming_paper_sent_me_down/

16. **I trained DiffusionGemma to be an abstract expressionist** — 2026-11-13T11:48:37+00:00.
    https://www.reddit.com/r/LocalLLaMA/comments/1xv5svo/i_trained_diffusiongemma_to_be_an_abstract/

17. **Artificial Analysis updated Qwen 3.8 Flash Next score as 29** — community read of the AA model page: Qwen3.8-Flash-Next now sits "between GPT-6 Luna Max (28) and Claude Haiku 5.5 High (30)", closer to max (34) than to the 27B (20).
    https://www.reddit.com/r/LocalLLaMA/comments/1xuxzfs/artificial_analysis_updated_qwen_38_flash_next/

18. **With these scandals and uncertainty with Huggingface, what models should I download?** — the day's clearest trust signal: a user asking for a "must-have" download list in case HF goes down, and whether HF alternatives exist.
    https://www.reddit.com/r/LocalLLaMA/comments/1xv0nug/with_these_scandals_and_uncertainty_with/

19. **Hugging Face CEO vows to keep fighting for open source AI after Jensen Huang's exit** — the counterpart to item 18, in-window 2026-11-13T00:11:18+00:00.
    https://www.reddit.com/r/LocalLLaMA/comments/1xut4o7/hugging_face_ceo_vows_to_keep_fighting_for_open/

20. **Open Source vs Open Weights ...** and **If open weights dry up, what are you archiving?** — the definitional/archive thread pairing. The first asks whether "open source" and "open weights" are being used interchangeably; the second asks what users are archiving against a possible drying-up of open weights.
    https://www.reddit.com/r/LocalLLaMA/comments/1xuoqgz/open_source_vs_open_weights/
    https://www.reddit.com/r/LocalLLaMA/comments/1xuthme/if_open_weights_dry_up_what_are_you_archiving/

21. **Strata EXL3 AMD - UPDATED +15-20% tk/s - run Q4 at Q3 speeds - MiMo v2.6 flash support (exp)** — decode performance ~10–20% higher than the previous fork (some cases ~24%), MiMo V2.6 Flash at ~25–30 tok/s on 2 cards; includes the reminder that **3.05 bpw EXL3 ≈ a regular 4-bit GGUF quant like IQ4_XS**.
    https://www.reddit.com/r/LocalLLaMA/comments/1xv282p/strata_exl3_amd_updated_1520_tks_run_q4_at_q3/

22. **4xR9700 & EXL3 HW/SW tips: DS4.1F (2.25bpw) pp 6.1k, c1 96-165, c16 259 tok/s | QFN (4.05bpw) pp 9.8k, c16 1100 tok/s** — byte-identical ("exact") output vs each model's reference engine, optimised for Claude Code usage.
    https://www.reddit.com/r/LocalLLaMA/comments/1xv2jst/4xr9700_exl3_hwsw_tips_ds41f_225bpw_pp_61k_c1/

23. **Qwen3.6-35B-A3B at Q8_0 and BF16 on datacenter GPUs** / **Does the Vulkan backend cost speed? Same Qwen3.6-35B-A3B model, CUDA vs Vulkan on five NVIDIA cards** / **Intel Arc Vulkan prefill got a dedicated FA kernel in llama.cpp master** — the backend-efficiency cluster of the day.
    https://www.reddit.com/r/LocalLLaMA/comments/1xuon4m/what_does_qwen3635ba3b_look_like_at_q8_0_and_bf16/
    https://www.reddit.com/r/LocalLLaMA/comments/1xv9vie/does_the_vulkan_backend_cost_speed_same/
    https://www.reddit.com/r/LocalLLaMA/comments/1xumdj4/intel_arc_vulkan_prefill_got_a_dedicated_fa/

24. **Nemotron models are the best open models there is** — practitioner endorsement of NVIDIA's Nemotron line (Bolt 24G at ~70 tok/s with vanilla llama.cpp + IQ2S; then a Qwen3.8-27B Q8_K_XL + MTP-15 drafter setup reaching 54 tok/s), closing with "Nemotron's the best because they teach you what good tech advancement is".
    https://www.reddit.com/r/LocalLLaMA/comments/1xvb5vi/nemotron_models_are_the_best_open_models_there_is/

25. **A100 prices down 20-30% since my post about them collapsing** — hardware-price deflation thread.
    https://www.reddit.com/r/LocalLLaMA/comments/1xuxbeb/a100_prices_down_2030_since_my_post_about_them/

26. **e-means: 10x faster k-means at equal loss** — an exponential-moving-average k-means optimizer reposted to r/LocalLLaMA from r/MachineLearning.
    https://www.reddit.com/r/LocalLLaMA/comments/1xvbith/emeans_10x_faster_kmeans_at_equal_loss/

### Thread-level observations (r/LocalLLaMA)

- **Decision models are the day's model release**, and they land directly on the AA Decision Index ladder discussed in §4: Perplexity's Decider v1.3 / Decider Flash v1.3 are the only two new rows on the AA Decision Index table today.
- **Quantization follow-on work continued overnight**: the MACaQ Hessian-refinement GGUF post is a direct, community-driven extension of yesterday's Huawei release, and claims 13.23% lower KL than Unsloth on a single-5090 testset.
- **Backend/hardware efficiency dominated** the non-release posts: EXL3/Strata/AMD Loom/Vulkan/PS4-portability threads outnumber model-release threads roughly 3:1.
- **Trust anxiety around Hugging Face** appeared in both directions on the same day — the "what models should I download?" archive question and the HF CEO's open-source pledge — with the NVIDIA Huang exit and the Reuters reporting (HN items 50477231 / 50473190) as the shared trigger.

---

## 3. Reddit — r/MachineLearning

**Feed status: AVAILABLE.** `tmp/nov13/rml.rss` was empty (HTTP 429) in the cached set; it was re-fetched successfully on retry and now contains **25 entries** (feed `<updated>` 2026-11-13T17:43:45+00:00, HTTP 200). It was merged with the 100-entry feed `rml_l100.rss` (range 2026-11-03T19:29:54+00:00 → 2026-11-13T16:28:36+00:00) and deduped by link → **9 in-window posts**. Yesterday's window had 18 in-window posts, so r/MachineLearning activity roughly halved.

As with r/LocalLLaMA, the RSS feed carries no upvote/comment counts and `reddit.com/.../<id>.json` returns HTTP 403, so no engagement metrics are asserted.

1. **Scaling to 1T MoE on TorchTitan [P]** — Meta/PyTorch maintainers pushing GH200 (JUPITER supercomputer) far enough to train a **~1T-parameter MoE at ~1,300 tokens/s per GPU on 384 GPUs**, "14X where we started".
   https://www.reddit.com/r/MachineLearning/comments/1xvce5h/scaling_to_1t_moe_on_torchtitan_p/

2. **Gemma 3 builds a linearly decodable spatial map from text, but its answers never read it [R]** — independent, preregistered study on Gemma 3 (12B/27B) with text-only spatial layouts ("A is 3 north of B, C is 2 east of A"): probes read every object's position, including those needing two sentences combined (**R² 0.74**), but **erasing that map costs no more than erasing random directions**, and the model instead runs on a 2-D code per sentence (**DAS 72% / 83%, random 0%**).
   https://www.reddit.com/r/MachineLearning/comments/1xuqs9d/gemma_3_builds_a_linearly_decodable_spatial_map/

3. **Open weights: ParaTrace v8 (RAID-tuned), 5th on the RAID leaderboard (TPR at 1% FPR) [R]** — Ettin-1B encoder (ModernBERT architecture), 512-token windows, fine-tuned on RAID's training split plus a hard-example round; **RAID hidden test set: TPR 99.20% at 1% FPR, 99.76% at 5% FPR (99.43% at 1% without attacks)**; weakest slices Cohere generations (96.5%), Reddit (97.9%), paraphrase attack (98.0%).
   https://www.reddit.com/r/MachineLearning/comments/1xv4ldx/open_weights_paratrace_v8_raidtuned_5th_on_the/

4. **How to make a Legora-style legal conflict detector tool using only NLI and encoder models [P]** — an open-source legal conflict detector (deviations and gaps between pairs of legal documents) built only from encoder models and natural language inference, explicitly inspired by discriminative decision models like TypeSafe AI's Jev (which sits at #14 on the AA Decision Index today).
   https://www.reddit.com/r/MachineLearning/comments/1xuzv6d/how_to_make_a_legorastyle_legal_conflict_detector/

5. **I built tamserve to make real-time video tracking 2x cheaper [P]** — Meta's SAM 2 / SAM 2.1 / EdgeTAM trackers keep every frame and exhaust GPU memory in minutes; tamserve shares one copy of the model across all cameras and keeps memory flat, "up to 3×" cheaper.
   https://www.reddit.com/r/MachineLearning/comments/1xuvxke/i_built_tamserve_to_make_realtime_video_tracking/

6. **Paid surveys for Machine Learning Scientists for SnorkelAI: Absolutely not worth it [R]** — a negative community report on compensated research participation: targeted by PhD/A*-conference filter, long waits, and a poor payoff rate.
   https://www.reddit.com/r/MachineLearning/comments/1xv4rjy/paid_surveys_for_machine_learning_scientists_for/

7. **I need feedback on this architecture for amodal raster-to-vector using a hybrid approach. [D]** — maintainer of the open-source Inkvec raster-to-vector tracer (MDL-based node selection; jigsaw-only output, no amodal infilling) seeking design feedback.
   https://www.reddit.com/r/MachineLearning/comments/1xutg9v/i_need_feedback_on_this_architecture_for_amodal/

8. **Weights for MNIST Handwriting Network [P]** — a first-project MNIST network (64 → 32 → 10) reaching **96.52% (9,652/10,000)**.
   https://www.reddit.com/r/MachineLearning/comments/1xupgn8/weights_for_mnist_handwriting_network_p/

9. **Creating author burdens to reduce paper submissions is STUPID [D]** — critique of CVPR's author enrollment form, layered onto author/reviewer sign-up and reciprocal reviewing.
   https://www.reddit.com/r/MachineLearning/comments/1xul9u7/creating_author_burdens_to_reduce_paper/

### Thread-level observations (r/MachineLearning)

- The feed is **discussion- and audit-heavy, not release-heavy**: the day's substantive items are a probing study (Gemma 3 spatial map), a benchmark-placement claim (ParaTrace v8 on RAID), a scaling report (1T MoE on TorchTitan/GH200) and two infrastructure tools (tamserve, Inkvec).
- **Interpretation scepticism is a recurring motif**: the Gemma 3 study finds a decodable map that the model's own answers do not read (a "representation present but unused" result), and the RAID post publishes per-slice weakest cases rather than a headline number.
- **Meta-research complaints** (CVPR author burdens, SnorkelAI paid surveys) occupy two of the nine in-window posts — a low point total for a forum that yesterday carried 18 in-window posts.

---

## 4. Leaderboards

Sources: Artificial Analysis homepage Next.js payload (`tmp/nov13/aa_home.html`, vs `tmp/nov12/t2/aa_payload.txt`), AA changelog (`tmp/nov13/aa_changelog.html`), AA Decision Index table (`tmp/nov13/aa_decision.json`), BenchLM leaderboard JSON (`tmp/nov13/benchlm.json`, vs `tmp/nov12/t2/benchlm.json`). Legacy `api/v2/data/*` endpoints return **HTTP 410 Gone**; the homepage payload is the only working primary source. Escaped quotes were normalised (`.replace('\\"','"')`) before parsing because the two payloads use different escaping/field-order patterns.

### 4.1 AA Intelligence Index

**Every pre-existing Intelligence Index score is UNCHANGED.** No model gained or lost index points. Two changes are structural rather than score-based: one new model entered the table, and one cost figure was re-measured.

| Model | 12 Nov | 13 Nov | Δ index | Δ cost/task |
|---|---|---|---|---|
| Claude Fable 5.2 (Max, Default Fallback) | 64.5636 | **64.5636** | **UNCHANGED (0.0000)** | UNCHANGED ($26.53855780398091) |
| Gemini 4 Carbon (High) | 60.0257 | **60.0257** | **UNCHANGED (0.0000)** | **$7.755545745286556 → $5.484780948230178 (−$2.270765)** |
| Claude Opus 5.5 (Max, Default Fallback) | 59.1060 | **59.1060** | UNCHANGED | UNCHANGED ($10.036409719512749) |
| GPT-6 Astra (Max) | 56.8539 | **56.8539** | UNCHANGED | UNCHANGED ($6.244666943602518) |
| GPT-6.1 Sol (Max) | 54.6087 | **54.6087** | UNCHANGED | UNCHANGED ($1.2720632679446995) |
| Claude Sonnet 5.5 (Max, Default Fallback) | 54.5413 | **54.5413** | UNCHANGED | UNCHANGED ($10.020621343395753) |
| **Gemini 4 Hydrogen (Xhigh)** | — | **53.9192287317542** | **NEW** | $3.1601590757006157 |
| GPT-6.1 Terra (Max) | 51.3265 | **51.3265** | UNCHANGED | UNCHANGED ($0.961108031081634) |
| Muse Wonder Full (Max) | 50.0772 | **50.0772** | UNCHANGED | UNCHANGED ($2.0617306268126856) |
| Claude Fable 5.1 (Max, Default Fallback) | 49.1602 | **49.1602** | UNCHANGED | UNCHANGED ($12.993997201178466) |
| Kimi K3.1 Pro | 46.4526 | **46.4526** | UNCHANGED | UNCHANGED ($3.6812002895742055) |
| Muse Wonder (Max) | 43.5748 | **43.5748** | UNCHANGED | UNCHANGED ($6.9520364786062245) |
| Claude Haiku 5.5 (Max) | 36.4845 | **36.4845** | UNCHANGED | UNCHANGED ($0.41100741536816304) |
| Muse Ember (Max) | 36.0213 | **36.0213** | UNCHANGED | UNCHANGED ($0.1359356168986363) |
| Grok 4.7 (Xhigh) | 35.4850 | **35.4850** | UNCHANGED | UNCHANGED ($7.771539401587139) |
| Tencent Hy4 | 34.5552 | **34.5552** | UNCHANGED | UNCHANGED ($1.0311060706397974) |
| Qwen3.8 Max (0902) | 33.6546 | **33.6546** | UNCHANGED | UNCHANGED ($10.023891571541945) |
| DeepSeek V4.1 Flash 1017 (Max) | 32.5896 | **32.5896** | UNCHANGED | UNCHANGED ($0.60210514783598) |
| GLM-5.3 (Max) | 31.6534 | **31.6534** | UNCHANGED | UNCHANGED ($5.009264601719954) |
| **Inkling 2 Small** | 30.6287 | **30.6287** | UNCHANGED | UNCHANGED ($1.1784281349617984) — **but `isOpenWeights` flipped false → true** |
| MiMo-V2.6-Pro | 29.8898 | **29.8898** | UNCHANGED | UNCHANGED ($0.25718036275876155) |
| Ling 3.1 Flash 1019 | 29.5701 | **29.5701** | UNCHANGED | UNCHANGED ($3.185145018337793) |
| Mistral Large 4 (High) | 26.1250 | **26.1250** | UNCHANGED | UNCHANGED ($2.0617306268126856) |
| Qwen3.8 27B (Xhigh) | 20.1069 | **20.1069** | UNCHANGED | UNCHANGED ($3.5295494751410654) |
| K2 Horizon 375B A23B | 17.8203 | **17.8203** | UNCHANGED | UNCHANGED ($0) |
| Beam 1.0 | 17.7307 | **17.7307** | UNCHANGED | UNCHANGED ($0.28440671352465285) |
| Nemotron 3.5 Super VL | 13.6203 | **13.6203** | UNCHANGED | UNCHANGED ($0.5196327287868884) |
| Gemini 3.8 Flash (High) | 30.8468 | *(absent from today's payload)* | — | — |

**Gemini 4 Carbon cost re-measurement (−$2.270765, −29.3%).** The score is identical; only the cost-per-task composite changed, and the change is entirely in the pricing components, not in measured capability:

| Cost component | 12 Nov | 13 Nov | Δ |
|---|---|---|---|
| total | 7.755545745286556 | **5.484780948230178** | −2.270765 |
| input | 5.300189827800433 | 4.257102989487116 | −1.043087 |
| cacheRead | 2.0391456408266344 | 1.0195728204133172 | −1.019573 |
| output | 2.4553559174861244 | 1.2276779587430622 | −1.227678 |
| reasoning | 1.4435571315365638 | 0.7217785657682819 | −0.721779 |
| answer | 1.0117987859495603 | 0.5058993929747801 | −0.505899 |
| nonCacheInput | 0.0470280358 | 0.0235140179 | −0.023514 |
| cacheWrite | 3.214016151173799 | 3.214016151173799 | 0 |

**New entry — Gemini 4 Hydrogen (Xhigh):** Intelligence Index **53.9192287317542**, cost per task **$3.1601590757006157**, release date **2026-11-12**, creator Google. It lands **7th overall**, between Claude Sonnet 5.5 (54.5413) and GPT-6.1 Terra (51.3265). The AA changelog records all four reasoning-effort variants as `modelAdded` on **2026-11-12** (see §5).

**Roster change:** `Gemini 3.8 Flash (High)` (Intelligence Index 30.8468119957291, cost $7.766006178152514) was present in the 12 Nov homepage payload and is **absent from the 13 Nov payload's Intelligence Index model list** — it remains listed as an AA release (`"slug":"gemini-3-8-flash"`, releaseDate 2026-09-02) and still appears in the Decision Index payload (`"score":25.1449496510851`, `"refusalRate":0.31808736217133166`, `"costPerTask":9.74254068495329`). This is a **page-roster change, not a score change**; no AA source in the cache states the model was deprecated, and no changelog entry for 2026-11-12 or 2026-11-13 mentions it.

### 4.2 AA Decision Index (v2.1)

**All 23 existing rows are UNCHANGED in both score and cost.** Two rows are new, both from Perplexity, both landing as **open-weight decision models**:

| # | Model | Score | Cost/task | Δ |
|---|---|---|---|---|
| 1 | Claude Haiku 5.5 (Max) | 76.49216258405318 | $0.006218276560848557 | UNCHANGED |
| 2 | GPT-6 Luna (Max) | 75.67452818327847 | $0.0015484570232176802 | UNCHANGED |
| 3 | Drex Max v1.1 | 72.62416891718618 | $0.00010267619916351927 | UNCHANGED |
| 4 | SubQ Snap 1.2 | 72.58051127736282 | $0.0001369015988846924 | UNCHANGED |
| 5 | GLiDE v1.2 | 72.5152 | $0.0007804024483753589 | UNCHANGED |
| 6 | Mammoth 27B | 71.3606 | $0.0002635732891177445 | UNCHANGED |
| 7 | d1-ultra | 70.5764 | $0.00013303619567638116 | UNCHANGED |
| **8** | **Decider v1.3** | **70.4081** | **$0.00006804024997988637** | **NEW (Perplexity)** |
| 9 | Decider v1.2 | 69.7663 | $0.00006845624997988636 | UNCHANGED (rank 8 → 9, displaced by Decider v1.3) |
| 10 | GPT-6 Luna (Low) | 68.8009 | $0.0004851996786857328 | UNCHANGED |
| 11 | SubQ Snap 1.1 | 67.9211 | $0.0001369015988846924 | UNCHANGED |
| 12 | Claude Haiku 5.5 (Low) | 67.1808 | $0.0008611217916101578 | UNCHANGED |
| 13 | Elephant 9B | 66.3893 | $0.0000922506511912106 | UNCHANGED |
| 14 | Jev 1.14 | 66.2342 | $0.0001562283474547284 | UNCHANGED |
| 15 | Gemini Decision 1 | 65.9770 | $0.0003454119032828384 | UNCHANGED |
| **16** | **Decider Flash v1.3** | **64.0716** | **$0.00003402012498994318** | **NEW (Perplexity)** |
| 17 | Microsoft-Decision-1 | 62.0718 | $0.0001425621582695805 | UNCHANGED (rank 15 → 17) |
| 18 | Mercury Decide | 62.0667 | $0.00006952527604940752 | UNCHANGED (rank 16 → 18) |
| 19 | Celeris-1.1 Decision | 61.9842 | $0.000013673908958574728 | UNCHANGED (rank 17 → 19) |
| 20 | Drex 2.0 | 61.5624 | $0.00019995755854053992 | UNCHANGED score; cost +4e-11 (float rounding) |
| 21 | d1 | 60.7814 | $0.00006335056936970531 | UNCHANGED |
| 22 | Clef | 60.3333 | $0.0008631479792105371 | UNCHANGED |
| 23 | GPT-6 Luna (Decisions) | 60.2464 | $0.0003387371041709804 | UNCHANGED |
| 24 | Decider Flash v1.2 | 60.0837 | $0.0001957871079899432 | UNCHANGED (rank 22 → 24) |
| 25 | Clef-Omni | 57.7500 | $0.0005293863242237254 | UNCHANGED (rank 23 → 25) |

**Net effect:** the Decision Index board grew from 23 to 25 rows. The two new Perplexity rows bracket the existing Decider v1.2 / Decider Flash v1.2 pair, so **Decider v1.2 is displaced one rank (8 → 9) and Decider Flash v1.2 is displaced two ranks (22 → 24)**. No score changed.

### 4.3 BenchLM

- **Newest snapshot id:** `2026-11-13-83b593da35a95b29` (previous: `2026-11-12-5d3bc0727c73e61f`)
- **Methodology string:** `bench-align-v5.8-2026-09-30` — **UNCHANGED**
- **lastUpdated:** 2026-11-13 (was 2026-11-12)
- **license:** `MIT` — UNCHANGED; `approvedSnapshotId`: null (UNCHANGED)
- **uncertaintyPolicy:** UNCHANGED, verbatim — `{"overallEstimates":"Retrospective residual ranges; sparse source patterns may use a pooled range without pattern-specific coverage validation.","categories":"Existing conditional ranges omit new capability-prior and mapping uncertainty; category propagation coverage is unvalidated.","futureTruthValidated":false,"simultaneousRosterCoverageValidated":false,"retrospectiveTailChecksPassed":false}`
- **orderingMeaning CHANGED:** 12 Nov → *"Point-estimate order; conditional ranges do not establish rank confidence."* → 13 Nov → *"Point-estimate order; an Estimated row with under two source families never ranks above a row within 2 points below it; conditional ranges do not establish rank confidence."*

| Rank | Model | 12 Nov | 13 Nov | Δ | Evidence | 90% interval (13 Nov) |
|---|---|---|---|---|---|---|
| 1 | Claude Fable 5.2 | 93.86 | **93.90** | +0.04 | estimated | 79.55–100 |
| 2 | Gemini 4 Carbon | 89.13 | **89.19** | +0.06 | supported | 83.85–94.52 |
| 3 | Claude Opus 5.5 | 86.29 | **86.64** | +0.35 | supported | 81.97–91.30 |
| 4 | GPT-6 Astra | 84.84 | **85.68** | +0.84 | supported | 80.33–91.02 |
| 5 | GPT-6.1 Sol | 84.54 | **84.63** | +0.09 | supported | 80.37–88.89 |
| 6 | Claude Sonnet 5.5 | 82.37 | **83.07** | +0.70 | supported | 78.80–87.33 |
| 7 | Claude Fable 5.1 | 80.50 | **79.22** | −1.28 | supported | 75.40–83.05 |
| 8 | Gemini 4 Argon | 80.01 | **79.06** | −0.95 | supported | 75.39–82.72 |
| 9 | GPT-6.1 Terra | 80.33 | **79.65** | −0.68 | estimated | 65.30–94.00 |
| 10 | GPT-6 Sol | 77.25 | **77.44** | +0.19 | supported | 74.01–80.87 |
| 11 | Gemini 4 Hydrogen | — | **79.08** | **NEW** | estimated | 64.74–93.43 |
| 12 | Claude Fable 5 | 78.34 | **76.29** | −2.05 | supported | 73.18–79.41 |
| 13+ | *(tail unchanged)* | — | — | — | — | — |

**Dropped from the board:** `DeepSeek V4 Pro 0813` (12 Nov: rank 39, score 62.66, evidenceStatus estimated) is **absent from the 13 Nov snapshot**. No removal note is present in the payload.

**New ordering rule in effect.** Gemini 4 Hydrogen enters at rank **11** with a point estimate of 79.08 (evidenceStatus estimated) even though its point estimate exceeds those of the rank-7 (79.22), rank-8 (79.06), rank-9 (79.65) and rank-10 (77.44) rows it sits under — and even though 79.08 would place it 8th by point estimate alone. The new `orderingMeaning` clause ("an Estimated row with under two source families never ranks above a row within 2 points below it") explains the suppression: with an estimated row and fewer than two source families, it cannot outrank a row that is within 2 points below it. Gemini 4 Carbon (89.19, supported) does move up from #2 to #2 and Claude Fable 5.2 stays #1 at 93.90.

**Open-weight standings (BenchLM):**

| Rank | Model | 13 Nov | 12 Nov | Δ | Evidence | Creator |
|---|---|---|---|---|---|---|
| 17 | Kimi K3 | 68.45 | 68.45 | UNCHANGED | supported | Moonshot AI |
| 18 | Kimi K3.1 Pro | 70.37 | 70.37 | UNCHANGED | estimated | Moonshot AI |
| 30 | Ling 3.1 Flash | 64.67 | 64.67 | UNCHANGED | estimated | InclusionAI |
| 31 | DeepSeek V4.1 Flash 1017 | 64.51 | 64.51 | UNCHANGED | supported | DeepSeek |
| 35 | Qwen3.8 Max | 63.59 | 63.59 | UNCHANGED | supported | Alibaba |
| 40 | dots3-note Preview | 62.79 | 62.79 | UNCHANGED | estimated | Dots Studio |
| 46 | Ornith-1.5-397B | 61.41 | 61.41 | UNCHANGED | estimated | Ornith AI |
| 48 | GLM-5.3 | 60.98 | 60.98 | UNCHANGED | supported | Z.AI |
| 50 | Sage-A1.5 | 60.74 | 60.74 | UNCHANGED | estimated | InternScience |

**No open-weight score changed on BenchLM.** The top open-weight model on both boards remains **Kimi K3.1 Pro** (AA Intelligence Index 46.4526, BenchLM 70.37).

### 4.4 Open-weight standings (AA Intelligence Index)

| # | Model | 12 Nov | 13 Nov | Δ index | Δ cost |
|---|---|---|---|---|---|
| 1 | Kimi K3.1 Pro | 46.4526 | **46.4526** | **UNCHANGED** | UNCHANGED ($3.6812002895742055) |
| 2 | DeepSeek V4.1 Flash 1017 (Max) | 32.5896 | **32.5896** | **UNCHANGED** | UNCHANGED ($0.60210514783598) |
| 3 | GLM-5.3 (Max) | 31.6534 | **31.6534** | **UNCHANGED** | UNCHANGED ($5.009264601719954) |
| 4 | **Inkling 2 Small** | *(not flagged open)* | **30.6287** | UNCHANGED score, **NEW open-weight entry** | UNCHANGED ($1.1784281349617984) |
| 5 | MiMo-V2.6-Pro | 29.8898 | **29.8898** | UNCHANGED | UNCHANGED ($0.25718036275876155) |
| 6 | Ling 3.1 Flash 1019 | 29.5701 | **29.5701** | UNCHANGED | UNCHANGED ($3.185145018337793) |
| 7 | Mistral Large 4 (High) | 26.1250 | **26.1250** | UNCHANGED | UNCHANGED ($2.0617306268126856) |
| 8 | Qwen3.8 27B (Xhigh) | 20.1069 | **20.1069** | UNCHANGED | UNCHANGED ($3.5295494751410654) |
| 9 | K2 Horizon 375B A23B | 17.8203 | **17.8203** | UNCHANGED | UNCHANGED ($0) |
| 10 | Beam 1.0 | 17.7307 | **17.7307** | UNCHANGED | UNCHANGED ($0.28440671352465285) |
| 11 | Nemotron 3.5 Super VL | 13.6203 | **13.6203** | UNCHANGED | UNCHANGED ($0.5196327287868884) |

The single open-weight change: **Inkling 2 Small (Thinking Machines) flipped `isOpenWeights` from false to true** in the AA payload. Its score (30.6287) and cost ($1.1784281349617984) are UNCHANGED, and it enters the open-weight table at #4, ahead of MiMo-V2.6-Pro. This matches the r/LocalLLaMA announcement "thinkingmachines/Inkling-2-Small is released!" (2026-11-12T22:25:57+00:00) and the same day's HF community conversion `mlx-community/Inkling-2-Small-4bit` (2026-11-13T14:58:47.000Z).

---

## 5. Model releases

### 5.1 Artificial Analysis changelog — dated entries

The AA changelog page (`tmp/nov13/aa_changelog.html`) contains **8 entries dated 2026-11-12** and **0 entries dated 2026-11-13**. All eight are Gemini 4 Hydrogen additions: four `modelAdded` entries (one per reasoning effort) and four `hostModelAdded` entries attaching the same models to the **Google** host (`"host":{"id":"50649676-6610-47a6-bb54-a2e213e6e414","name":"Google","slug":"google"}`).

| Changelog id | dateLa | type | Model | Intelligence Index | omniscience | Creator |
|---|---|---|---|---|---|---|
| `6d1da141-3990-4c2f-a0ea-3cd246447aad` | 2026-11-12 | modelAdded | Gemini 4 Hydrogen (Low) | 26.8936694361562 | 36 | Google |
| `598ba587-c81e-46bc-a113-2d90ee4da65b` | 2026-11-12 | modelAdded | Gemini 4 Hydrogen (Medium) | 41.2329566992579 | 42 | Google |
| `e80753aa-3dba-4741-a336-234c27b34fec` | 2026-11-12 | modelAdded | Gemini 4 Hydrogen (High) | 50.7870826951304 | 44 | Google |
| `b6543393-30b3-4762-9cce-1d33bab80153` | 2026-11-12 | modelAdded | Gemini 4 Hydrogen (Xhigh) | 53.9192287317542 | 46 | Google |
| `29bedf17-bb2c-4ca4-b0c8-bd6bcd28f3d0` | 2026-11-12 | hostModelAdded | Gemini 4 Hydrogen (Low) | — | — | Google |
| `cf9028fa-40f7-4baf-b95c-a96ba470c08a` | 2026-11-12 | hostModelAdded | Gemini 4 Hydrogen (Medium) | — | — | Google |
| `88c68c50-03c1-458a-9292-bd398c27adc5` | 2026-11-12 | hostModelAdded | Gemini 4 Hydrogen (High) | — | — | Google |
| `dad0e3b1-e3e7-4772-99f9-c14457a91114` | 2026-11-12 | hostModelAdded | Gemini 4 Hydrogen (Xhigh) | — | — | Google |

Model ids carried by these entries: `88c68c50-03c1-458a-9292-bd398c27adc5` (Low), `f0537484-af30-4a8a-bf34-368c552e5cfd` (Medium), `dae0262d-26a4-44d1-925a-6f2731cbda6a` (High), `dad0e3b1-e3e7-4772-99f9-c14457a91114` (Xhigh); creator id `faddc6d9-2c14-445d-9b28-56726f59c793` (Google).

The next-newest changelog entry is dated **2026-11-11** (1 × `modelAdded`, 3 × `hostModelAdded`). **No AA changelog entry exists for 2026-11-13** — the decision-model additions (Decider v1.3 / Decider Flash v1.3, §4.2) are **not** logged in the AA changelog even though they appear on the Decision Index table.

### 5.2 Hugging Face — in-window uploads

`tmp/nov13/hf_1000.json` = **1,000 newest model repos**, covering `createdAt` **2026-11-13T12:50:01.000Z → 2026-11-13T17:35:27.000Z**. Filtering to the window yields **971 in-window repos** (the remaining 29 are marginally older than 2026-11-13T17:28:00Z or later than the cache).

**Was an established lab published? No.** The 971 in-window repos come from **439 distinct authors**, and the author list contains **no first-party lab namespace** — no `google/`, `meta-llama/`, `Qwen/`, `mistralai/`, `nvidia/`, `deepseek-ai/`, `zai-org/`, `moonshotai/`, `MiniMaxAI/`, `ByteDance-Seed/`, `01-ai/`, `CohereLabs/`, `apple/`, `ibm-granite/`, `allenai/`, `tiiuae/`, `THUDM/`, `openbmb/`, `inclusionAI/`, `LiquidAI/`, `JetBrains/`, `nomic-ai/`, `arcee-ai/`, `PleIAs/`, `sakanaai/`, `tencent/`, `baidu/`, `alibaba/`, `perplexity/`, `mistralai/`, `openai/`, `anthropic/`, `togetherai/`, `redhatai/`, `nebius/` etc. The only notable org present is **`mlx-community`** (1 repo: `mlx-community/Inkling-2-Small-4bit`, 2026-11-13T14:58:47.000Z), a conversion pipeline rather than a model author.

Volume profile of the 971 in-window repos: **0 with downloads > 0**, **28 with likes > 0**. Highest like counts in-window: `Anbeeld/Qwen3.8-27B-GGUF-Bartowski-SINQ` (1 like, 2026-11-13T12:50:15.000Z). The dominant pattern is **third-party quantisation/repack of already-released models**, not new model publication:

- `Sanjay20269999/gemma-4-31B-it` — `_id` `6af73ca8d5417c7fa7d1f817`, createdAt **2026-11-13T16:36:56.000Z** (in-window), author `Sanjay20269999` (personal namespace, not a lab), 0 downloads / 0 likes.
- `bambocher/MiMo-V2.6-Distill-Qwen-9B-oQ5-mtp` — `_id` `6af74a5fc0f1dc548b4de08c`, createdAt **2026-11-13T17:35:27.000Z** (just after the window close).
- `Jade-18-Rohitha/tulu-dpo-1b-ches-lr2e-6` — `_id` `6af74a39a617ddc33214a463`, createdAt **2026-11-13T17:34:49.000Z** (just after the window close).
- `mlx-community/Inkling-2-Small-4bit` — 2026-11-13T14:58:47.000Z (MLX 4-bit conversion of the Thinking Machines release).
- `jstarks/Gemma-4-26B-A4B-Weight-Space-Programming` — 2026-11-13T13:48:53.000Z (weight-space-programming experiment on Gemma 4).
- `mit-han-lab/Qwen3.8-27B-PEAR-NVFP4` — 2026-11-13T17:13:46.000Z (NVFP4 repack; `mit-han-lab` is a research-lab namespace but the repo is a quantisation, not a new base model).
- `Anbeeld/Qwen3.8-27B-MTP-GGUF-Bartowski-SINQ` (2026-11-13T13:03:50.000Z) and `Anbeeld/Qwen3.8-27B-GGUF-Bartowski-SINQ` (2026-11-13T12:50:15.000Z).
- Multi-upload community accounts dominate the volume: `ringtone-ro` (88 repos), `codebucketsolutions` (40), `xix3r` (37), `bambocher` (26), `zhangify` (16), `96kevinli29` (12), `DeepFense` (12), `mradermacher` (11).

### 5.3 Releases referenced in the RSS / HN items

| Release | Announced | Primary link | In-window source |
|---|---|---|---|
| **Gemini 4 Hydrogen** (+ Orchestrator) | 2026-11-12 | https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/ · https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/ | HN 50471431 (554/345), HN 50472260 (480/158); AA changelog 2026-11-12 |
| **llama.cpp v1.0** + Llama desktop apps | 2026-11-13T14:07:33+00:00 | https://huggingface.co/blog/ggml-org/llama-cpp-v1 · https://llama.app/ | r/LocalLLaMA 1xv8t2e |
| **Perplexity Decider v1.3 (26B) / Decider Flash v1.3 (5B)**, Apache 2.0 | 2026-11-13T13:08:10+00:00 | https://www.reddit.com/r/LocalLLaMA/comments/1xv7fku/perplexity_releases_decider_v13_26b_and_decider/ | r/LocalLLaMA 1xv7fku; AA Decision Index rows #8 and #16 |
| **thinkingmachines/Inkling-2-Small** | 2026-11-12T22:25:57+00:00 (community post); AA release date 2026-11-05 | https://www.reddit.com/r/LocalLLaMA/comments/1xuqplg/thinkingmachinesinkling2small_is_released/ | r/LocalLLaMA 1xuqplg; AA `isOpenWeights` false → true |
| **Edge0-145B** | 2026-11-13T01:25:20+00:00 (reddit); HN 2026-11-12T23:06:17Z | https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer | r/LocalLLaMA 1xuuq0b; HN 50475713 (315/94) |
| **Ernie 5.5 Flash Preview** (280B / 14B active) | 2026-11-12T20:13:37+00:00 | https://www.reddit.com/r/LocalLLaMA/comments/1xune1i/new_model_ernie_55_flash_preview_hits_strongly_at/ | r/LocalLLaMA 1xune1i |
| **Tontaube V1.1** open-weights TTS | 2026-11-13T17:14:40+00:00 | https://www.reddit.com/r/LocalLLaMA/comments/1xvdmzb/tontaube_v11_openweights_tts_with_voice_cloning/ | r/LocalLLaMA 1xvdmzb |
| **Boole-32B-A2.5B-Preview** (Recursive, 1.8-bit) | 2026-11-13T09:29:51+00:00 | https://huggingface.co/precision-numerics/Boole-32B | r/LocalLLaMA 1xv3h93 |
| **ParaTrace v8** (RAID-tuned, open weights, 5th on RAID) | 2026-11-13T10:39:43+00:00 | https://www.reddit.com/r/MachineLearning/comments/1xv4ldx/open_weights_paratrace_v8_raidtuned_5th_on_the/ | r/MachineLearning 1xv4ldx |
| **garlic-llm** (Qwen3.5-9B on a stock PS4) | 2026-11-13T16:00:36+00:00 | https://github.com/leonardo-alegria/garlic-llm | r/LocalLLaMA 1xvbn2m |
| **inferencekit** (KittenML) | 2026-11-13T00:14:11+00:00 | https://github.com/KittenML/inferencekit | r/LocalLLaMA 1xut6z0 |
| **tamserve** | 2026-11-13T02:23:51+00:00 | https://www.reddit.com/r/MachineLearning/comments/1xuvxke/i_built_tamserve_to_make_realtime_video_tracking/ | r/MachineLearning 1xuvxke |

**Summary of the release picture:** exactly **one first-party frontier-lab model launch in the window** — Google's Gemini 4 Hydrogen (HN 554 + 480 pts across two threads, AA Intelligence Index 53.92 at #7). Every other release came from the community, from an existing lab re-releasing a variant (Perplexity), from a tooling project (llama.cpp v1.0), or from a paper author (TorchTitan 1T MoE). **No established lab published new weights to Hugging Face inside the window** — all 971 in-window HF repos are personal accounts and quantisation packs.

---

## 6. Negative signals / disputes

### 6.1 The day's contested claims

1. **"Edge0-145B" is not open-source.** On HN 50475713 a commenter states plainly: *"It is not open weight either. The license is too restrictive to meet the standard definition of that team."* — **hedora**. The thread also disputes the model's provenance: *"It does seem to be based on QFN, but they've modified the architecture. 10B active versus QFN's 6B, plus also QFN is 180B parameters, not 145B."* — **anon373839**. The reddit post title itself claims "Open-Source On-Device AI", which the HN thread rejects. Note that AA's own open-weight list did **not** add Edge0-145B today.
   https://news.ycombinator.com/item?id=50475713

2. **A community benchmark argues the AA Intelligence Index under-weights coding.** The Ernie 5.5 Flash Preview post states: *"If this is asking what this leaderboard is, it is not AA, it is simply an aggregate index for 'Agentic Coding' along 12 coding-related benchmarks (note that the AA index includes only 2 coding benchmarks: Terminal-Bench 4.0, FrontierCode-AA 2.0, making up just 25% of its total score. Because of that, it doesn't give you a true reflection of a model's actual software engineering capabilities)."*
   https://www.reddit.com/r/LocalLLaMA/comments/1xune1i/new_model_ernie_55_flash_preview_hits_strongly_at/

3. **The AA cost figure for Gemini 4 Carbon moved −29.3% with no score change** — a reminder that the price column of the leaderboard is a measurement, not a constant (§4.1).

4. **BenchLM's ordering rule changed, and the change moves rows.** The new `orderingMeaning` clause suppresses Gemini 4 Hydrogen to rank 11 despite a 79.08 point estimate that would place it 8th by point estimate alone (§4.3). The board's own `uncertaintyPolicy` remains non-reassuring: `futureTruthValidated: false`, `simultaneousRosterCoverageValidated: false`, `retrospectiveTailChecksPassed: false`. Every one of the four Gemini-4-family open-weight-adjacent rows carries `evidenceStatus: estimated`.

5. **Ask HN: Can anyone name anything new that AI has done?** (50484426, 22 pts / 42 comments) — the day's most explicit sceptical prompt, posted by a user who says: *"We're 2 years into this. Still looking for something that an AI did all by itself that is actually new. Everything I've seen so far still involves a human sussing out the new thing or the model is just aggregating data that is already there from disc…"* — **SamInTheShell**. The thread is largely a methodological argument about what counts as discovery.
   https://news.ycombinator.com/item?id=50484426

6. **"Why You Should Expect an AI Crash"** (HN 50475735, 98 pts / 83 comments) — the Economist's leader column drew sustained discussion. **"Is there a 'right amount' of AI?"** (50480659, 35 pts / 61 comments) drew a moral-economics argument that *"The ethical issues around AI don't seem any different than the rest of modern capitalism"* — **sobiolite** — answered with the counter that *"AI makes copyright and patents obsolete. There are no protections left for original nor derivative works"* — **OnlineTux**.
   https://news.ycombinator.com/item?id=50475735
   https://news.ycombinator.com/item?id=50480659

7. **Scepticism about Google's own release quality.** On HN 50472260: *"Carbon is the first 'better than meh' model form Google in more than half a year. It's been out for less than a week. How can you consider it 'steady'? Their subscription and even the API has been terribly unstable thro…"* — **pietz**. On the same thread, **ilteris**: *"I use argon and opus daily and I can tell you I have to use opus to review argon because argon goes and build things and also creates bunch of bugs along with it."*
   https://news.ycombinator.com/item?id=50472260

8. **Anthropic reliability and business pressure.** The Claude outage thread (50481187, 433/352) is filled with reports of OAuth failures ("Can this be fall-out from the Microsoft outage?" — **xamde**) and *"Microslop is now becoming micro availability."* — **itopaloglu83**. Separately, "Amodei Says AI Will Cure Cancer in a Decade. Doctors Are Skeptical" (50484110, 29/65) draws explicit medical scepticism, and "AI Is Destroying the Trust Between Writers and Readers" (50481870, 192/85) is a documented downside case for AI-assisted publishing.
   https://news.ycombinator.com/item?id=50481187
   https://news.ycombinator.com/item?id=50484110
   https://news.ycombinator.com/item?id=50481870

9. **A community quantisation claim is explicitly self-limited.** The MACaQ Hessian-refinement post states: *"Technically it performs 4% better on my LiveCodeBench benchmark (but that would be a single data point, so it's not super-reliable)"* and *"The numbers demonstrated here are the maximum that can be achieved in ~4 hours of optimizing on a single 5090, not the maximum that can be achieved."*
   https://www.reddit.com/r/LocalLLaMA/comments/1xvbqqa/i_noticed_the_2_hessian_refinement_of_macaq_can/

10. **Provenance and licensing doubt attached to a "frontier on your own computer" claim** is the single most substantive dispute of the day on HN (see item 1).

### 6.2 Is the community mood quiet?

**Mixed — not quiet on HN, quiet on r/MachineLearning, and notably quiet on Hugging Face.**

- **HN is loud but the loudest story is not technical.** The #1 story overall (750 pts / 613 comments) and #5 (406 / 436) are both NVIDIA leadership/HR stories, not model news. The two Gemini 4 Hydrogen threads together carry 1,033 points and 503 comments, so the *technical* conversation is genuinely active — but 750 of the day's 1,068 in-window stories are dominated by a single scandal, and the *baseline* story volume fell from 1,143 to 1,068 stories.
- **r/MachineLearning halved.** 9 in-window posts vs 18 yesterday, with no model-release thread and two meta-research complaint threads ("Creating author burdens to reduce paper submissions is STUPID", "Paid surveys for Machine Learning Scientists for SnorkelAI: Absolutely not worth it").
- **r/LocalLLaMA grew.** 69 in-window posts vs 50 yesterday, but the growth is in hardware/backend folklore (EXL3, Strata, AMD Loom, Vulkan, PS4), not in releases.
- **Hugging Face is quiet in the strongest sense.** All 971 in-window repos are personal accounts and quantisation packs; **zero downloads > 0**; only 28 repos with any like at all; **no established lab published**. When a real frontier release lands (Inkling-2-Small), the community response within the window is a single reddit post plus one MLX conversion.
- **Low-engagement signals.** `Fusee. Embeddable durable execution at the speed of the disk` (HN **50474532**, 2026-11-12T21:27:10Z, https://www.bitsinfra.com/fusee) received **1 point and 0 comments** — the weakest possible signal, worth recording as a negative engagement marker rather than a story. On the Reddit side, the RSS feed exposes no scores at all, so no equivalent low-engagement claim can be made there.

### 6.3 Method

Every claim in this report is derived from primary artifacts fetched directly via curl and cached under `tmp/nov13/`: the Algolia HN `search_by_date` pages (`hn_all.json`, `hn_p0.json` … `hn_p12.json`) and Algolia item comment trees (`hnitem_*.json`), the Reddit Atom feeds (`rll.rss`, `rml.rss`, `rml_l100.rss`), the Artificial Analysis homepage Next.js payload (`aa_home.html`), the AA changelog (`aa_changelog.html`), the AA Decision Index table (`aa_decision.json`), the BenchLM leaderboard JSON (`benchlm.json`), and the Hugging Face models API (`hf_1000.json`, `hf_new.json`). Baselines come from `tmp/nov12/t2/` and `findings_nov12_task2.md`. **0 web_search calls and 0 web_fetch calls were used for this task.** Known data gaps: Reddit upvote/comment counts are unavailable (RSS omits them; direct `.json` endpoints returned HTTP 403), and the AA legacy `api/v2/data/*` endpoints return HTTP 410 Gone.
