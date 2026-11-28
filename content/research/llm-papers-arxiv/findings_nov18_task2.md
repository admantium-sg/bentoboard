# Task 2 Findings — Community, Leaderboards, Releases (2026-11-17 → 2026-11-18)

**Research area:** LLM research papers and developments
**Topic:** llm-papers-arxiv
**Window:** 2026-11-17 17:28 UTC → 2026-11-18 17:28 UTC (the 2026-11-18 announcement cycle)
**Status:** RECOVERY FILE. The 2026-11-18 cycle's Task 2 subagent cached all primary-source artifacts under `tmp/nov18/t2/` but terminated before writing its findings file. This file was rebuilt by the parent agent from those cached artifacts, with no new web requests for the Nov-18 data.
**Method:** Hacker News Algolia `search_by_date` API, Reddit (Redlib / safereddit JSON), artificialanalysis.ai homepage + changelog + Decision Index, benchlm.ai leaderboard JSON, huggingface.co models API, openai.com RSS, and vendor pages — all cached under `tmp/nov18/t2/`.
**Caveat:** all benchmark and cost figures are vendor- or author-self-reported and were not independently reproduced.

---

## 1. Headline: Gemini 4 Neon launch, Anthropic IPO pricing, and a genuine AA board change

The 2026-11-18 cycle was not a quiet one, despite the leaderboards themselves barely moving.

- **Google shipped Gemini 4 Neon** on 2026-11-18 — fourth Gemini 4 model in ~7 weeks, replacing Gemini 4 Argon. Full analysis in `findings_nov19_task2.md` §1.
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
  - https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain
- **Anthropic priced its IPO at $83/share (~~$1.5T valuation)** and **Palo Alto Networks agreed to acquire Applied Compute for $4.5B in stock**.
  - https://www.anthropic.com/news/anthropic-prices-initial-public-offering
  - https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-acquire-applied-compute-bringing-secure-open
- **AA's Intelligence Index gained Gemini 4 Neon** (four effort tiers) and **K2 Horizon 32B**, breaking the two-day frozen board — while every previously-listed model's score stayed bit-identical.
- **BenchLM moved for the first time in three refreshes**, but only after the Nov-18 snapshot: the Nov-18 board itself (snapshot `2026-11-18-4a50301902018694`) showed the GPT-6.2 family at the top with Fable 5.2 first; the subsequent Nov-19 snapshot demoted GPT-6.2 Sol by 1.28 points.

---

## 2. Hacker News — 2026-11-17 and 2026-11-18 (full days)

**Coverage:** exhaustive via Algolia `search_by_date` (`tags=story`, `hitsPerPage=200`), cached in `tmp/nov18/t2/hn/all_hits.json` (1,273 unique stories across both days).

| Day | Stories | AI-filtered | AI share |
|---|---|---|---|
| 2026-11-17 | 419 | 94 | 22.4% |
| 2026-11-18 | 854 | 198 | **23.2%** |

AI regex: `AI|LLM|GPT|Claude|Gemini|OpenAI|Anthropic|agent|MCP|GPU|NVIDIA|neural|inference|transformer|chatbot|prompt|diffusion|RLHF|fine-tun|Qwen|DeepSeek|Kimi|embedding`. The 2026-11-18 full-day AI share of 23.2% is consistent with the 23.0% measured on the overlapping 2026-11-18 window in the Nov-19 cache — the two independent fetches agree to within 0.2 pp.

### Top AI stories, 2026-11-18
| Pts | Comments | Story | HN |
|---|---|---|---|
| 977 | 740 | Gemini 4 Neon | https://news.ycombinator.com/item?id=50552424 |
| 386 | 730 | Anthropic prices initial public offering | https://news.ycombinator.com/item?id=50553843 |
| 289 | 73 | LLM assisted reverse engineering | https://news.ycombinator.com/item?id=50553225 |
| 246 | 76 | Gemini 4 Neon looks like an Opus 5.5 competitor | https://news.ycombinator.com/item?id=50554374 |
| 218 | 164 | Advancing chip design with OpenAI models | https://news.ycombinator.com/item?id=50549493 |
| 107 | 81 | Black high school students sue after AI mistakes Doritos bag for gun | https://news.ycombinator.com/item?id=50554641 |
| 105 | 66 | AI will not make you rich (2025) | https://news.ycombinator.com/item?id=50555093 |
| 57 | 73 | Google Gemini's "Tasks" Personal Assistant Is Now Free | https://news.ycombinator.com/item?id=50551601 |
| 32 | 7 | Octopus, Gecko and Tortoise: the 3 scanners hunting your AI keys | https://news.ycombinator.com/item?id=50550461 |
| 23 | 30 | We asked AI the same 210 buying questions 2 days in a row, 84% of answers changed | https://news.ycombinator.com/item?id=50549677 |

### Earlier the same day (from the 2026-11-17 → 11-18 cache, before the Neon spike)
- "AI is killing All About Berlin" — 691/633 — https://news.ycombinator.com/item?id=50542705
- "Google's AI answers reducing search traffic by 40%" — 653/506 — https://news.ycombinator.com/item?id=50540178
- "Energy-Based Reasoners: 385x more efficient inference" — 247/37 — https://news.ycombinator.com/item?id=50543989
- "Why is Gemini 4 Carbon taking so long?" — 238/124 — https://news.ycombinator.com/item?id=50541790
- "Claude was trained on protein sequences at scale" — 145/65 — https://news.ycombinator.com/item?id=50541619
- "Microsoft AI: Seven new world-class models at scalable price-performance" — 98/55 — https://news.ycombinator.com/item?id=50548021
- "Cerebras Disaggregated Inference" — 96/24 — https://news.ycombinator.com/item?id=50540472
- "Bank CEOs, NSA Tell Congress That AI-Driven Patches Are Behind Outages" — 91/48 — https://news.ycombinator.com/item?id=50540836
- "Can Peer Review Survive AI-Generated Text? [pdf]" — 59/71 — https://news.ycombinator.com/item?id=50546312
- "Jensen Huang's fall hits 'open' models in boost to Anthropic and OpenAI" — 24/6 — https://news.ycombinator.com/item?id=50547223
- "Microsoft's agent-framework PyPI package Compromised with Credential Stealer" — 23/3 — https://news.ycombinator.com/item?id=50542084
- "Nvidia halts all AI chip sales to China, including US-approved H200" — 9/1 — https://news.ycombinator.com/item?id=50547376
- "Nvidia/DeepSeek-V4-Pro-0813-NVFP4" — 9/2 — https://news.ycombinator.com/item?id=50542818
- "TheFed finds $3T of AI commitments that aren't on big tech's balance sheet" — 6/0 — https://news.ycombinator.com/item?id=50547790

### From 2026-11-17 (carried into the window)
- "GPT‑6.2 Astra and Sol" — 1,326 points / 1,359 comments — the single biggest AI thread of the three-day window — https://news.ycombinator.com/item?id=50535230
- "GPT-6.2 Astra scores 100% on ARC-AGI-3" — https://news.ycombinator.com/item?id=50536438
- "I hate GPT-6.2 Astra" — https://news.ycombinator.com/item?id=50536410
- "Harvard researchers find AI coding agents shifted the bottleneck to code review" — 299/172 — https://news.ycombinator.com/item?id=50538303
- "Not Everything Needs an LLM" — https://news.ycombinator.com/item?id=50535740
- "Anthropic Paid Rubio's Ex-Chief of Staff's Firm $740k. It Lobbied His NSC" — https://news.ycombinator.com/item?id=50536565
- "Launch HN: StarSling (YC P25) – Self-improving CI for agent-volume repos" — https://news.ycombinator.com/item?id=50536468
- "Nvidia Chair Harvey Jones says board doesn't intend to reinstate Huang as CEO" — https://news.ycombinator.com/item?id=50538942
- "Nvidia says it does not intend to reinstate Jensen Huang as CEO" — https://news.ycombinator.com/item?id=50539385
- "Rebuilding the Metabase MCP server: lessons for MCP tool design" — https://news.ycombinator.com/item?id=50535081

**Non-AI top stories (context for the denominator):** "We need smart people who give a shit" 736/363 (https://news.ycombinator.com/item?id=50554045); "Multiple vulnerabilities in Regexp and String case conversion" 322/124; "Genie 4 is now available" 282/181 (https://news.ycombinator.com/item?id=50550415); "DaisyRose-27B" 246/101 (https://news.ycombinator.com/item?id=50551046); "Scottish HTTP Codes" (https://news.ycombinator.com/item?id=50550062).

---

## 3. Reddit — 2026-11-18 (recovered via Redlib + safereddit JSON)

**Access:** direct Reddit remained blocked from this host during the Nov-18 cycle as well. The cache holds two Redlib HTML parses (`reddit/sr_68d63b.html`, `reddit/redlib_ll.html`, `reddit/sr_52e10a.html`, `reddit/sr_ML.html`) plus per-post JSON extracted through a "safereddit" endpoint (`reddit/rd_LL_safereddit.json`, `reddit/rd_ML_safereddit.json` — 25 posts each, with score, comment count, permalink and timestamp). RSS feeds (`rd_LL_new.rss`, `rd_LL_hot.rss`, `rd_ML_new.rss`, `rd_ML_hot.rss`) were also captured but carry no engagement data.

### r/LocalLLaMA, 2026-11-18 (from `rd_LL_safereddit.json`)
| Score | Comments | Created | Title | Permalink |
|---|---|---|---|---|
| 658 | 194 | Nov 18 10:xx | Qwen 4 35B is not ruled out | https://www.reddit.com/r/LocalLLaMA/comments/1xzbkwp/qwen_4_35b_is_not_ruled_out/ |
| 542 | 253 | Nov 18 05:xx | Y'all's idea of "slop" is stuck in 2025 | https://www.reddit.com/r/LocalLLaMA/comments/1xz6tv9/yalls_idea_of_slop_is_stuck_in_2025/ |
| 316 | 67 | Nov 18 04:xx | tencent/Hy4-flash · Hugging Face | https://www.reddit.com/r/LocalLLaMA/comments/1xz5tym/tencenthy4flash_hugging_face/ |
| 292 | 67 | Nov 18 09:xx | Nvidia says its open source AI strategy remains intact after Jensen Huang's departure | https://www.reddit.com/r/LocalLLaMA/comments/1xzb9rz/nvidia_says_its_open_source_ai_strategy_remains/ |
| 273 | 26 | Nov 18 05:xx | AudioGhost v1.2: remove any sound from audio or video by typing what to remove | https://www.reddit.com/r/LocalLLaMA/comments/1xz5tym/ (post id 1xz5tym — see §3 note) |
| 130 | 30 | Nov 18 14:xx | You'd never guess who opened up their checkbook to buy all the… | https://www.reddit.com/r/LocalLLaMA/comments/1xzfzz1/youd_never_guess_who_opened_up_their_checkbook_to/ |
| 82 | 26 | Nov 18 14:xx | Goes further with Koharu, the local-first manga translator with AI | https://www.reddit.com/r/LocalLLaMA/comments/1xzhaao/goes_further_with_koharu_the_localfirst_manga/ |
| 77 | 49 | Nov 18 15:xx | [Reuters] Trump administration weighs forcing US firms to disclose open-weight usage | https://www.reddit.com/r/LocalLLaMA/comments/1xzhirk/reuters_trump_administration_weighs_forcing_us/ |
| 76 | 18 | Nov 18 13:xx | AMA Announcement: Tencent Hy, the Team Behind Hy4 & Hy4 flash (Friday, Nov 20, 8–10 AM PST) | https://www.reddit.com/r/LocalLLaMA/comments/1xzett3/ama_announcement_tencent_hy_the_team_behind_hy4/ |
| 66 | 17 | Nov 18 13:xx | Qwen3.8-27B LoRA for OpenCode (xhigh thinking-level accuracy) | https://www.reddit.com/r/LocalLLaMA/comments/1xz6xl7/qwen3827b_lora_for_opencode_xhigh_thinkinglevel/ |
| 52 | 13 | Nov 18 02:xx | Running SenseNova-Loop-9B nvfp4 looped transformer with 300+ tok/s | https://www.reddit.com/r/LocalLLaMA/comments/1xzkyo0/ |

**Post-id note:** the safereddit JSON for the AudioGhost thread carries post id `1xz5tym` while the cached Redlib HTML maps that id to the tencent/Hy4-flash permalink. The canonical permalinks verified in the Nov-19 cycle's independent Redlib parse are: AudioGhost v1.2 = https://www.reddit.com/r/LocalLLaMA/comments/1xz6xl7/audioghost_v12_remove_any_sound_from_audio_or/ and Hy4-flash = https://www.reddit.com/r/LocalLLaMA/comments/1xz5tym/tencenthy4flash_hugging_face/. The permalink↔id mapping in the safereddit JSON is unreliable for this pair; the Nov-19 parse is authoritative.

Also from the 2026-11-17 evening (carried in): "Jensen Huang Breaks Silence" — 2,041/715 — https://www.reddit.com/r/LocalLLaMA/comments/1xzjtu2/ ; "Blue TTS v3: open-source TTS, about 50x real-time on a CPU" — 330/72 — https://www.reddit.com/r/LocalLLaMA/comments/1xz72jr/ ; "Best Audio Models - Nov 2026" megathread — 145/108 — https://www.reddit.com/r/LocalLLaMA/comments/1xxpxvi/best_audio_models_nov_2026/

### r/MachineLearning, 2026-11-18 (from `rd_ML_safereddit.json`)
| Score | Comments | Title | Permalink |
|---|---|---|---|
| 126 | 787 | ICLR 2027 Reviews Discussion [D] | https://www.reddit.com/r/MachineLearning/comments/1xzbkq2/iclr_2027_reviews_discussion_d/ |
| 112 | 4 | CMU's Machine Learning with Large Datasets (10-605, Fall 2026) lecture notes | https://www.reddit.com/r/MachineLearning/comments/1xz9qqv/cmus_machine_learning_with_large_datasets_10_605/ |
| 103 | 51 | Why are ViTs so popular? [D] | https://www.reddit.com/r/MachineLearning/comments/1xymxsq/why_are_vits_so_popular_d/ |
| 95 | 107 | ICLR 2027: PCs ran an AI detector on reviews, peer review is cooked [D] | https://www.reddit.com/r/MachineLearning/comments/1xyu198/iclr_2027_pcs_ran_an_ai_detector_on_reviews_peer/ |
| 54 | 40 | Current ML PhD students, would you still choose to do an ML PhD if you… | https://www.reddit.com/r/MachineLearning/comments/1xz8ksq/ |
| 48 | 175 | AISTATS 2027 paper discussion [D] | https://www.reddit.com/r/MachineLearning/comments/1xo6yzo/aistats_2027_paper_discussion_d/ |
| 33 | 7 | I found a MLSys paper with 455 citations with a major error in its implementation | https://www.reddit.com/r/MachineLearning/comments/1xywou0/ |
| 32 | 41 | Serious spaces? [D] | https://www.reddit.com/r/MachineLearning/comments/1xym86k/ |

**Interpretation:** the 2026-11-18 community mood was **open-weight expectation and anxiety**, not model evaluation — the two largest r/LocalLLaMA threads were "Qwen 4 35B is not ruled out" (658) and "Y'all's idea of 'slop' is stuck in 2025" (542), alongside Nvidia's reassurance about its open-source strategy (292) and a Reuters report that the Trump administration is weighing forcing US firms to disclose open-weight usage (77). The r/MachineLearning signal was **peer-review integrity**: the ICLR 2027 meta-thread (787 comments) plus "PCs ran an AI detector on reviews" (107 comments) plus a 455-citation paper with a major implementation error — three independent failure modes in the same subforum within 24 hours.

---

## 4. Artificial Analysis — roster change, scores frozen

**Caches:** `tmp/nov18/t2/aa/aa_models_today.json` (51 slugs / 28 with an index), `aa_all_rows_sorted.json` (56 rows), `aa_decision_rows.json` (29 rows), `changelog_inwindow.json`.

**Verdict: the roster changed but the previously-listed scores did not.** Gemini 4 Neon entered with four effort tiers and K2 Horizon 32B was added; every pre-existing model's `idx` string is bit-identical to the 2026-11-17 baseline. This broke the two-day frozen board, but only by addition.

**Board as of 2026-11-18:**
1. Claude Fable 5.2 (Max, Default Fallback) — 64.563595756626
2. **GPT-6.2 Astra (Max) — 62.1387990593969** *(added 2026-11-17)*
3. Gemini 4 Carbon (High) — 60.025738829526
4. Claude Opus 5.5 (Max, Default Fallback) — 59.1060336078904
5. GPT-6.2 Sol (Max) — 57.2576209885477 *(added 2026-11-17)*
6. Claude Sonnet 5.5 (Max, Default Fallback) — 54.54133407109
7. Gemini 4 Hydrogen (Xhigh) — 53.9192287317542
8. GPT-6.1 Terra (Max) — 51.3265188577015
9. Muse Wonder Full (Max) — 50.0772123627021
10. **Kimi K3.1 Pro — 46.4526236744189** *(best open weights, commercial license)*

Also on the board: Muse Wonder (Max) 43.5748225998431, **Qwen4 Max 42.8914543287565 (proprietary, isOpenWeights false)**, Claude Haiku 5.5 (Max) 36.4845435880142, Muse Ember 36.0212987864912, Grok 4.7 (Xhigh) 35.4850117067196, **Tencent Hy4 34.5552385392508 (proprietary — no separate hy4-flash row)**, **Qwen3.8 Max (0902) 33.6545627367888**, DeepSeek V4.1 Flash 1017 (Max) 32.5896393532027, GLM-5.3 (Max) 31.653381843882, Inkling 2 Small 30.6286781498958.

**Qwen3.8 Max (0902) caution:** this row was present in the Nov-18 extract and **absent** from the Nov-19 extract, but the slug `qwen3-8-max` still appears in every cached Nov-19 AA HTML page. Treat the disappearance as a **rendering/pagination artifact, not a delisting**.

**Decision Index v2.1 — 29 rows, unchanged** across the Nov-18 cycle: Claude Haiku 5.5 (Max) 76.49216258405318, Claude Haiku 5.5 (Low) 67.18077941198649, GPT-6 Luna (Max) 75.67452828327847, d1.2-ultra (Liquid AI) 74.84596115693908, Drex Max v1.1 72.62416891718618, SubQ Snap 1.2 72.58051127736282, GLiDE v1.2 72.51518604270153, Mammoth 27B 71.3606271722313, Microsoft-Decision-1.1 67.77851391780439, Elephant 9B 66.38927973293856, d1 60.7814283497953, Clef-Omni 57.75003536430474.

**Changelog entries dated 2026-11-18:** `modelAdded` Gemini 4 Neon (Low / Medium / High / Xhigh) and `modelAdded` K2 Horizon 32B, plus an `articlePublished` entry for "Google continues to accelerate its release cadence with Gemini 4 Neon, delivering a small Intelligence gain over Gemini 4 Carbon at a ~17% lower Cost per Task" (slug `gemini-4-neon-intelligence-gain`). The 2026-11-17 entries add GPT-6.2 Astra and Sol at five effort tiers each, plus JoyAI-VL-Preview, Inkling (High), Inkling Small (High), LFM3-1.7B, LFM3-VL-2B, MiniMax-M3.1-Flash and Astra for Law 6.2 (Max).

Source: https://artificialanalysis.ai/ | https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index

---

## 5. BenchLM — the Nov-18 board itself was still a no-op

Snapshot `2026-11-18-4a50301902018694`, `lastUpdated` 2026-11-18, `methodologyVersion` `bench-align-v5.8-2026-09-30`, roster 50 models.

Top of the Nov-18 board: 1. Claude Fable 5.2 (Anthropic) 92.83 · 2. GPT-6.2 Astra (OpenAI) 89.35 · 3. Claude Opus 5.5 85.78 · 4. Gemini 4 Carbon 85.00 · 5. GPT-6.2 Sol 86.07 · 6. GPT-6 Astra 82.99 · 7. GPT-6.1 Sol 81.96 · 8. Claude Sonnet 5.5 80.56 · 9. Gemini 4 Argon 79.30 · 10. Claude Fable 5.1 78.56 · 11. Claude Fable 5 76.17 · 12. Claude Opus 5 76.02 · 13. Gemini 4 Hydrogen 77.88 · 14. GPT-6 Sol 75.30 · 15. GPT-6.1 Terra 77.08.

Note again that **rank is not a sort of overallScore** (Sol 86.07 at rank 5, Gemini 4 Hydrogen 77.88 at rank 13 below Claude Opus 5 at 76.02) — BenchLM's `orderingMeaning` rule keeps an `estimated` row from ranking above a row within 2 points below it, and conditional ranges do not establish rank confidence. The GPT-6.2 Sol demotion (rank 5→6, 86.07→84.79) and the Gemini 4 Hydrogen climb (rank 13→11, 77.88→79.09) both landed on the **2026-11-19** snapshot; see `findings_nov19_task2.md` §6.

Source: https://benchlm.ai/api/data/leaderboard

---

## 6. Hugging Face — one small Microsoft release in-window, Tencent Hy4-flash still the loudest

**In-window frontier-org releases (2026-11-18):**
- `microsoft/Aion-1.0-Instruct-2.3B` — created 2026-11-18, plus `microsoft/Aion-1.0-Instruct-2.3B-ONNX-WebGPU` — a 2.3B instruct model shipping with a browser-WebGPU ONNX variant on the same day (downloads/likes were still near zero at capture in the Nov-18 cache; the Nov-19 cache recorded 788/62 and 39/3).
  - https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B
- **Zero** in-window repos for Qwen, DeepSeek, Mistral, Moonshot, zai-org, internlm, openbmb, google, meta-llama, openai, nvidia, unsloth, allenai, ibm-granite, Anthropic, Apple, Liquid AI and thinking-machines (per-org listings cached under `tmp/nov18/t2/hf/`).

**Tencent (created 2026-11-17, i.e. the prior day, but the dominant open-weight story of the Nov-18 community cycle):** `tencent/Hy4-flash` (159 dl / **206 likes** at the Nov-18 capture, 2,053 dl / 307 likes by the Nov-19 capture), `tencent/Hy4-flash-FP8` (121 dl / 17 likes), `tencent/Hy4-flash-base` (129 dl / 18 likes).
- https://huggingface.co/tencent/Hy4-flash
- README cached at `tmp/nov18/t2/hf/hy4flash_readme.md`

**Community:** the in-window slice was dominated by zero-engagement personal uploads; no community repo exceeded 200 downloads or 20 likes in the Nov-18 slice. The r/LocalLLaMA threads that mattered were Hy4-flash quantisation (85 GB GGUF on a 12 GB RTX 3060 + 32 GB system RAM; 70 GB → 49 GB quants on a 64 GB vRAM board) and a Qwen3.8-27B OpenCode LoRA.

Source: https://huggingface.co/api/models

---

## 7. Vendor announcements, 2026-11-17 → 2026-11-18

- **OpenAI** — the official RSS (`openai.com/news/rss.xml`, cached at `tmp/nov18/t2/vendor/oai_rss.xml`) carries **7 posts dated 2026-11-18** and none on 2026-11-17: "The Silent Consensus" (https://openai.com/index/the-silent-consensus), "Research acceleration: The jagged frontier" (https://openai.com/index/research-acceleration-jagged-frontier), "How Sumitomo Life's leaders helped teams adopt ChatGPT Enterprise" (https://openai.com/business/customer-stories/sumitomo-life), "Inside the Codex sandbox" (https://openai.com/index/inside-the-codex-sandbox), "Managing frontier AI risk: From training to deployment" (https://openai.com/index/managing-frontier-ai-risk), "Le Groupe Figaro and OpenAI partner to bring Le Figaro journalism to ChatGPT" (https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership), "Advancing chip design with OpenAI models" (https://openai.com/index/advancing-chip-design-with-our-models).
- **Microsoft AI** — "MAI Code 2 and Code 2 Flash: Everyday coding at scalable prices" (published 2026-11-17, modified 2026-11-18, https://microsoft.ai/) and "Seven new world-class models at scalable price-performance" (2026-11-17).
- **Cerebras** — **Disaggregated Inference** launch: Wafer Scale Engines for prompt processing, GPUs for token generation — https://www.cerebras.ai/blog/cerebras-launches-disaggregated-inference
- **PublicAI** — Karpo Decision 31B index page, snapshot 2026-11-18, 2 measures (https://publicai.io/model-index/m/karpo-decision-31b). The claimed 73.9 Decision Index figure is **still uncorroborated by AA** — no `karpo` string appears in any AA payload.
- **Liquid AI** — newest post remains d1.2 / d1.2-ultra (2026-11-16), nothing in-window (https://www.liquid.ai/blog/d1-2).
- **fast.ai** — newest post remains the SolveIt launch (2026-11-16), nothing in-window.
- **Recursive** — Flint open-source recursive model (https://huggingface.co/RecursiveSI/flint, https://www.recursive.com/updates/introducing-recursive-flint).
- **Qwen / DeepSeek / Moonshot / Mistral** — no new dated posts; the Qwen blog and the Moonshot news page render client-side or were unchanged.
- **METR** — "Measuring Alignment Eval Tells" (2026-11-16) is the newest entry; nothing dated in-window (https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/).
- **Government / macro:** the Fed's first close look at AI (https://finance.yahoo.com/technology/ai/articles/fed-first-close-look-ai-180000354.html), the FBI's use of the open-source Artex AI hacking tool in real intrusions, and the IMF warning on AI circular financing — all cached under `tmp/nov18/t2/vendor/`.

---

## 8. Negative signals and caveats (2026-11-18 cycle)

- **Reddit direct access failed again** in this cycle; coverage came from Redlib HTML plus a safereddit JSON endpoint. The safereddit JSON's permalink↔id mapping is unreliable for at least one pair (AudioGhost / Hy4-flash) — the canonical permalinks were re-verified in the Nov-19 cycle's independent Redlib parse.
- **AI share of HN traffic was flat**: 22.4% (11-17) → 23.2% (11-18), and the two independent HN caches for 11-18 agree to within 0.2 pp. AI's share did not grow with the Neon launch; the launch changed *which* AI stories led, not how many there were.
- **AA's frozen-scores/roster-changed distinction** matters: the Nov-18 board is "additive only". Reading the 51-slug extract as "23 new models" would be wrong — 28 rows carry an index and the rest are host/context metadata rows.
- **BenchLM's Nov-18 snapshot was still effectively a no-op**; the substantive movement (Sol demotion, Hydrogen climb) belongs to the Nov-19 snapshot.
- **Qwen3.8 Max (0902)**: present Nov-18, absent Nov-19 extracts, still present in Nov-19 HTML → artifact, not delisting.
- **Tencent Hy4 remains proprietary on AA** (34.5552385392508, `isOpenWeights false`) and there is still **no separate `hy4-flash` row** — the 206 likes on the HF repo have not yet produced an AA score.
- **Karpo-Decision-31B's claimed 73.9 Decision Index remains unverified** — no `karpo` string in any AA payload.
- **Vendor coverage is uneven**: OpenAI is reliable via RSS; Qwen, DeepSeek, Moonshot and Mistral pages render client-side or were unchanged, so absence of a readable post is **not** evidence of no release.
- All quantitative figures (AA indices, BenchLM scores, HN points, download/like counts) are vendor- or author-self-reported and were not independently reproduced. HN points and comment counts drift with time.

## Source URLs (primary, 2026-11-18 cycle)

- https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
- https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain
- https://artificialanalysis.ai/
- https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index
- https://benchlm.ai/api/data/leaderboard
- https://huggingface.co/api/models
- https://huggingface.co/tencent/Hy4-flash
- https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B
- https://www.anthropic.com/news/anthropic-prices-initial-public-offering
- https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-acquire-applied-compute-bringing-secure-open
- https://www.cerebras.ai/blog/cerebras-launches-disaggregated-inference
- https://publicai.io/model-index/m/karpo-decision-31b
- https://openai.com/index/advancing-chip-design-with-our-models
- https://openai.com/index/research-acceleration-jagged-frontier
- https://openai.com/index/inside-the-codex-sandbox
- https://openai.com/index/managing-frontier-ai-risk
- https://openai.com/index/the-silent-consensus
- https://news.ycombinator.com/item?id=50552424
- https://news.ycombinator.com/item?id=50553843
- https://news.ycombinator.com/item?id=50535230
- https://news.ycombinator.com/item?id=50554374
- https://news.ycombinator.com/item?id=50549493
- https://www.reddit.com/r/LocalLLaMA/comments/1xzbkwp/qwen_4_35b_is_not_ruled_out/
- https://www.reddit.com/r/LocalLLaMA/comments/1xz5tym/tencenthy4flash_hugging_face/
- https://www.reddit.com/r/LocalLLaMA/comments/1xz6tv9/yalls_idea_of_slop_is_stuck_in_2025/
- https://www.reddit.com/r/LocalLLaMA/comments/1xzett3/ama_announcement_tencent_hy_the_team_behind_hy4/
- https://www.reddit.com/r/MachineLearning/comments/1xyu198/iclr_2027_pcs_ran_an_ai_detector_on_reviews_peer/
- https://www.reddit.com/r/MachineLearning/comments/1xymxsq/why_are_vits_so_popular_d/
- https://www.reddit.com/r/MachineLearning/comments/1xywou0/

## Batch notes

- **This file is a recovery artifact.** It was written on 2026-11-19 from `tmp/nov18/t2/` caches only; the Nov-18 cycle's own Task 2 subagent never produced a findings file. `findings_nov19_task2.md` covers the overlapping 2026-11-18 → 2026-11-19 window and is the more current source for anything dated 2026-11-19 or 2026-11-18 evening.
- Raw caches: `tmp/nov18/t2/hn/all_hits.json` (1,273 stories), `tmp/nov18/t2/aa/*` (AA homepage, changelog, Decision Index, BenchLM), `tmp/nov18/t2/hf/*` (per-org model listings), `tmp/nov18/t2/reddit/*` (Redlib HTML + safereddit JSON + RSS), `tmp/nov18/t2/vendor/*` (OpenAI RSS, Microsoft, Cerebras, PublicAI, Liquid, fast.ai, METR, Recursive, macro sources).
