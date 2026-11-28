# Task 2 findings — LLM community/leaderboard/release pulse, 2026-11-23 (window 2026-11-22T17:28Z → 2026-11-23T17:28Z)

Window contents: one confirmed frontier release (**GLM-5.4** from Z.ai, Loop Transformer architecture, 2026-11-23), one new open-weight drop (**inclusionAI/Ling-3.2-air**, MIT, HF repo created in-window), one in-window vendor announcement whose weights predate the window (**Aleph Alpha Kolibri 1.1**, blog 23/11/2026, HF repo 2026-11-20), a large quant drop from Tencent (**WeMM-Ecom** GGUF/GPTQ), and a leadership story rather than a release (**NVIDIA reinstates Jensen Huang**). Both leaderboards were effectively frozen on scores; the Artificial Analysis homepage Intelligence table is now unchanged for three consecutive days while the changelog records a new scored model that has not yet entered that table.

---

## Leaderboard deltas

### L1 — Artificial Analysis Intelligence Index (homepage table): frozen, unchanged for three days
The 47-row homepage table is byte-for-byte identical to the `2026-11-21` snapshot (`tmp/nov21/t2/aa/home_rows_today.json`): same 47 rows, same Intelligence Index values, same open-weight flags, zero added/removed/changed rows. The lowest-scored rows remain `Nemotron 3.5 Super VL` (13.62), `Beam 1.0` (17.731), `K2 Horizon 375B A23B` (17.82), `Qwen3.8 27B` / `Qwen3.8 27B (Xhigh)` (20.107) — no `Ling-3.2-air` row yet (see L3).
Source: https://artificialanalysis.ai/

### L2 — Artificial Analysis Decision Index: unchanged from 2026-11-22 (30 rows, Bison 31B still #2)
Compared against the prior-day report: still **30** rows, and `baseten_bison-31b` ("Bison 31B", host/creator Base Labs) is still present at **75.8803**, ranked #2 overall behind `Claude Haiku 5.5 (Max)` **76.4922** and #1 among decision models, ahead of `GPT-6 Luna (Max)` 75.6745, `d1.2-ultra` 74.846, `Drex Max v1.1` 72.6242, `SubQ Snap 1.2` 72.5805, `GLiDE v1.2` 72.5152, `Mammoth 27B` 71.3606. Note: measured against the *2026-11-21* snapshot the row count is 29 → 30, i.e. the Bison 31B addition is the 2026-11-22 event already reported yesterday, not a new delta.
Source: https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index

### L3 — AA changelog: one new entry on 2026-11-23 (`Ling-3.2-air`, Intelligence Index 23) that is not yet in the homepage table
New changelog entry UUID `86a030bb-4fe4-41f6-9cc3-881829106233`, `dateLa` `2026-11-23`, `type` `modelAdded`, model id `f232d373-e666-488c-b0f2-39ef90321f64`, name **Ling-3.2-air**, release slug `ling-3-2-air`, `intelligenceIndex` **23.3877547890296**, `omniscience` **-13**, creator InclusionAI id `4df238a9-d4fd-4cf2-ab1e-d12956c41f9b`. The release catalog in the same payload carries `{"slug":"ling-3-2-air","name":"Ling-3.2-air","deprecated":false,"releaseDate":"2026-11-23"}`.
Reconciliation: `Ling-3.2-air` **does** appear on the AA homepage HTML as a "newest release" card (`href="/models/ling-3-2-air"`) and has a full model page, but it is **absent from the 47-row homepage Intelligence table** and from the parsed 28-row models table (`tmp/nov23/t2/aa_models_rows.json`). Its AA model page renders "Intelligence # 1 / 5 — 23", "Open weights model — Released November 2026", 24B input tokens, 199M output tokens, 1M context, 124B total / 5.5B active parameters, MIT license, "No publicly available API". So: newly *scored* on 2026-11-23, but not yet *listed* in the leaderboard table — a table-refresh lag, not a scoring gap.
Prior 2026-11-22 changelog entries remain as reported yesterday: `f6c32468-18d5-4206-8a75-48215ed4c078` (`modelAdded`, `LingSante-3.1-flash`, model id `313e14b6-909f-43d2-b795-49c825dc1e21`, `intelligenceIndex` null) and `ef4e78d8-d32f-4e68-8238-312ef32ec0db` (`hostModelAdded`, host InclusionAI id `f4c55050-0a25-4270-9692-aff6080db239`), plus 2026-11-22 `hostModelAdded` rows for Makora/`Kimi K3.1 Pro` (host id `b991ea18-1dd1-4236-80b5-51dfa85ac7af`, model id `665c67ca-09eb-48f0-a7a3-0096e1d5de51`) and Databricks/`DeepSeek V4.1 Flash 1017` in both `Non-reasoning` (model id `5720fd2f-873a-4765-8640-a153b38bd64d`) and `Max` (model id `f151fd0b-2139-40cf-a3ec-995e8cedc592`) variants. The 2026-11-20 `Inkling 2 Mini` entry (model id `da3ba2f4-f4f1-43b6-95dc-8e9fa2a48402`, `intelligenceIndex` 20.1315214698783, `omniscience` -9) is unchanged.
Live evaluation banners persist unchanged: `vials-aa` (new, removeAfter 2026-11-20), `mka` (new, removeAfter 2026-11-24), `scicode` (underReview — "An independent audit has flagged possible errors in the dataset of this evaluation. We are reviewing its findings."), and `AA-Symmetry v1.1` (updated, removeAfter 2026-11-24).
Source: https://artificialanalysis.ai/changelog
Source: https://artificialanalysis.ai/models/ling-3-2-air

### L4 — BenchLM: content frozen, only the snapshot ID moved
New `sourceSnapshotId` **2026-11-23-1a6fc6525ad498ed** (previous **2026-11-21-5deedfb2f831f0e6**), same methodology `bench-align-v6.0-2026-11-19`, `lastUpdated` `2026-11-23`, `mode` `bench-align-v5`, roster still exactly **50** models. Every spot-checked score/rank is identical to the 2026-11-22 report: `Claude Fable 5.2` 93.3 (#1), `Gemini 4 Neon` 91.3 (#2), `GPT-6.2 Astra` 90.8 (#3), `Gemini 4 Carbon` 88.3 (#4), `GPT-6 Astra` 83.6 (#5), `Claude Opus 5.5` 82.8 (#6), `GPT-6.2 Sol` 82.3 (#7), `Qwen4 Max` 74.8 (#17), `Kimi K3.1 Pro` 70.0 (#22), `Hy4` 68.4 (#25), `MiniMax M3.1 Flash` 67.3 (#29), `Ling 3.1 Flash` 66.6 (#30), `Inkling 2 Small` 65.9 (#34), `GLM-5.3` 63.5 (#39), `MiMo-V2.6-Pro` 63.0 (#44), `MiMo-V2.6-Flash` 62.6 (#45), `Gemini 3.6 Flash` 61.6 (#48), `Claude Sonnet 5` 61.2 (#50). `Gemini 3.1 Pro` remains absent (yesterday's rotation). **No BenchLM entry exists for `GLM-5.4`, `Ling 3.2`/`Ling-3.2-air`, or `Kolibri 1.1`.**
Source: https://benchlm.ai/api/data/leaderboard

### L5 — BenchLM release tracker: GLM-5.4 is the only confirmed release dated in the window
The tracker page states: "As of November 23, 2026, the record lists 6 confirmed releases from 5 providers in the last seven days (November 17 to 23, 2026): GLM-5.4 (Z.AI), Inkling 2 Mini (Thinking Machines Lab), GPT-Live-1.1 in the API (OpenAI), and 3 more. The latest is dated November 23, 2026, per Z.AI." The "Last 24 hours" block lists exactly one entry: **GLM-5.4 — Z.AI — Nov 23, 2026**. The other six-day entries are Inkling 2 Mini (Nov 20), GPT-Live-1.1 in the API (Nov 19), Gemini 4 Neon (Nov 18), MAI Code 2 and MAI Code 2 Flash (Nov 17), GPT-6.2 Astra and Sol (Nov 17). The page itself warns: "Dates come from the linked sources. They aren't launch times and don't show broad availability."
Source: https://benchlm.ai/model-updates

---

## Community buzz (HN)

### C1 — Volume and AI share: 1,030 stories, 22.9% AI-titled — plateau holds
Algolia `search_by_date` over `created_at_i` bounds covering the strict window gives **1,030 stories** between `2026-11-22T17:28:24Z` and `2026-11-23T17:23:53Z` (API reports `nbHits` 1030; collected across two pages of `hitsPerPage=1000`, so the count is complete, and the earliest/latest story timestamps confirm the exact window bounds). Title-only word-boundary keyword matching (same keyword set as the 2026-11-22 report: ai, llm, gpt, claude, gemini, openai, anthropic, deepseek, qwen, kimi, mistral, llama, model(s), inference, benchmark, quantiz*, agent(s), neural, transformer, reasoning, token(s), chatbot, prompt, diffusion, embedding, rlhf, moe, gguf, vllm, nvidia, gpu, chatgpt) gives **236 AI-titled stories = 22.9%**; adding URL text raises it to 250 = **24.3%**.
Against the prior day's ~22–23% baseline the plateau **did not break**: the 2026-11-22 evening slice (17:28→23:59) is 57/263 = 21.7% and the 2026-11-23 day (00:00→17:28) is 179/767 = 23.3% — a weekend-to-Monday profile, no structural shift. Volume itself jumped roughly 2× versus yesterday's ~527 stories/day because the window now covers a full Monday.
Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E1795368480,created_at_i%3C1795454880&hitsPerPage=1000

### C2 — Top AI stories in the window by points
| points | comments | HN item | title |
|---|---|---|---|
| 1673 | 1 | https://news.ycombinator.com/item?id=50611588 | Jensen Huang Reinstated as Nvidia CEO |
| 763 | 268 | https://news.ycombinator.com/item?id=50609685 | GLM-5.4: Toward Generalized Coding with Our First Loop Transformer |
| 678 | 276 | https://news.ycombinator.com/item?id=50603845 | A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth |
| 659 | 1838 | https://news.ycombinator.com/item?id=50611576 | Nvidia Reinstates Jensen Huang as CEO |
| 165 | 149 | https://news.ycombinator.com/item?id=50604314 | Agent swarm trying to solve P vs. NP |
| 76 | 8 | https://news.ycombinator.com/item?id=50602153 | Harvard CS 2881R AI Safety |
| 67 | 17 | https://news.ycombinator.com/item?id=50605445 | 0rwx – A simple model of AI usage, inspired by Unix permissions |
| 65 | 76 | https://news.ycombinator.com/item?id=50610830 | Amodei reportedly suggested games could pacify masses after AI took their jobs (2015) |

Lower-ranked but telling in-window items: https://news.ycombinator.com/item?id=50603219 "What Happened in Fall 2026: AI and P vs. NP" (29 pts), https://news.ycombinator.com/item?id=50614037 "Buckle Up the AI Bubble Is Popping" (mathbabe.org, 23 pts, 48 comments), https://news.ycombinator.com/item?id=50613084 "Kolibri 1.1: English-German open-weight model with sparse attention" (9 pts), https://news.ycombinator.com/item?id=50606447 "Dario Amodei suggests video games could pacify the masses after AI takes jobs" (16 pts), https://news.ycombinator.com/item?id=50612066 "Nvidia Reinstates Jensen Huang" (12 pts), https://news.ycombinator.com/item?id=50615358 "ESP32-OS, a KolibriOS-Compatible OS for the ESP32-P4" (2 pts).
Note the #1 item by points is matched by an unrelated duplicate: the CNBC mirror of the same NVIDIA story (659 pts, 1838 comments) — treat the NVIDIA leadership news as **one** story with two submissions, and it is corporate news rather than an AI-model event.
Sources: https://news.ycombinator.com/item?id=50609685 , https://news.ycombinator.com/item?id=50603845 , https://news.ycombinator.com/item?id=50611588 , https://news.ycombinator.com/item?id=50611576

---

## Reddit

### R1 — Coverage: 98 in-window posts collected (85 r/LocalLLaMA, 13 r/MachineLearning) via Redlib HTML mirrors
412 unique posts were parsed across the collected mirror pages; **98** fall inside 2026-11-22T17:28Z → 2026-11-23T17:28Z (85 from r/LocalLLaMA, 13 from r/MachineLearning). Working mirror during this run: `https://redlib.zanity.net` (listing pages `?sort=new`, `?sort=top&t=day`, `?sort=top&t=week`, plus per-post pages). **Both subreddits were reachable.** `reddit.com` and `api.reddit.com` returned **403** as expected; `safereddit.com` and `redlib.tiekoetter.com` served an Anubis "Making sure you&#39;re not a bot!" wall; `redlib.catsarch.com` returned **429**; `redlib.perennialte.ch` returned **410**; `redlib.privacyredirect.com` returned **403**; `redlib.4o1x5.dev` is decommissioned; `redlib.ducks.party` returns an empty shell.

### R2 — Permalink verification
Canonical permalinks were taken from the Redlib HTML anchors (`/r/<sub>/comments/<id>/<slug>/`), never from safereddit JSON. The id ↔ permalink mapping was then re-verified by fetching each of the 10 top permalinks individually from `redlib.zanity.net` and matching the rendered title and score against the listing entry — 10/10 matched (e.g. `1y3enps` → "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer"; `1y3lqu3` → "GLM 5.4 is great at coding. But absolutely garbage at writing and anything but that."). Scores on the direct post pages run slightly higher than in the listing (e.g. `1y3enps` 886 vs 862/863; `1y3lqu3` 319 vs 264/268; `1y3fxfu` 195 vs 181/182), i.e. live drift between scrape times, not a parsing error.

### R3 — Top r/LocalLLaMA posts in the window
| score | comments | id | created (UTC) | permalink |
|---|---|---|---|---|
| 862 | 288 | 1y3enps | Nov 23 2026, 10:11:32 | https://www.reddit.com/r/LocalLLaMA/comments/1y3enps/glm54_toward_generalized_coding_with_our_first/ |
| 268 | 37 | 1y3bi5m | Nov 23 2026, 06:49:22 | https://www.reddit.com/r/LocalLLaMA/comments/1y3bi5m/appledepthpro2_hugging_face/ |
| 264 | 118 | 1y3lqu3 | Nov 23 2026, 15:50:16 | https://www.reddit.com/r/LocalLLaMA/comments/1y3lqu3/glm_54_is_great_at_coding_but_absolutely_garbage/ |
| 225 | 183 | 1y30a6x | Nov 22 2026, 21:20:52 | https://www.reddit.com/r/LocalLLaMA/comments/1y30a6x/inference_engines_are_becoming_too_fragmented/ |
| 181 | 69 | 1y3fxfu | Nov 23 2026, 11:27:29 | https://www.reddit.com/r/LocalLLaMA/comments/1y3fxfu/inkling_2_mini_iq3_xxs_threejs_galloping_horse/ |
| 151 | 21 | 1y30tgf | Nov 22 2026, 21:44:23 | https://www.reddit.com/r/LocalLLaMA/comments/1y30tgf/i_finetuned_gemma_4_e4b_to_run_100_villagers_in/ |
| 150 | 42 | 1y3b18s | Nov 23 2026, 06:20:14 | https://www.reddit.com/r/LocalLLaMA/comments/1y3b18s/261121885_language_models_can_rewrite_their_own/ |
| 130 | 32 | 1y3eb0r | Nov 23 2026, 09:49:40 | https://www.reddit.com/r/LocalLLaMA/comments/1y3eb0r/community_standards_contributing_to_llamacpp_vs/ |
| 118 | 70 | 1y3hzp7 | Nov 23 2026, 13:16:23 | https://www.reddit.com/r/LocalLLaMA/comments/1y3hzp7/nariq_bf16level_qwen3827b_in_a_10_gb_file/ |
| 113 | 8 | 1y2wkd5 | Nov 22 2026, 18:43:38 | https://www.reddit.com/r/LocalLLaMA/comments/1y2wkd5/poked_around_inside_inkling_2_minis_loop_one/ |

Also in-window: `1y34mos` (110 pts) https://www.reddit.com/r/LocalLLaMA/comments/1y34mos/yet_another_opinion_on_inkling_2_small/ , `1y30xzl` (110 pts) https://www.reddit.com/r/LocalLLaMA/comments/1y30xzl/aurora2400ma20mqat_releases_05bit_moe_in_275_mb/ , `1y3l96z` (67 pts, Nov 23 2026, 15:30:44) https://www.reddit.com/r/LocalLLaMA/comments/1y3l96z/alephalphas_kolibri_11_75ba34b_has_been_released/ .
The `2611.21885` link points at arXiv "Language Models Can Rewrite Their Own Weights".

### R4 — Top r/MachineLearning posts in the window
| score | comments | id | created (UTC) | permalink |
|---|---|---|---|---|
| 42 | 11 | 1y2ziqy | Nov 22 2026, 20:47:37 | https://www.reddit.com/r/MachineLearning/comments/1y2ziqy/ironically_are_we_finally_valuing_quality_over/ |
| 35 | 23 | 1y3gfbt | Nov 23 2026, 11:56:50 | https://www.reddit.com/r/MachineLearning/comments/1y3gfbt/are_you_actually_proud_of_your_research_or_do_you/ |
| 33 | 17 | 1y2wnco | Nov 22 2026, 18:47:04 | https://www.reddit.com/r/MachineLearning/comments/1y2wnco/what_are_the_actual_advantages_of_academic/ |
| 19 | 12 | 1y36eax | Nov 23 2026, 02:09:55 | https://www.reddit.com/r/MachineLearning/comments/1y36eax/views_on_mbzuai_for_a_postdoc_d/ |
| 11 | 0 | 1y2zrb7 | Nov 22 2026, 20:58:11 | https://www.reddit.com/r/MachineLearning/comments/1y2zrb7/how_much_of_representational_similarity_is/ |

r/MachineLearning in-window traffic is meta-discussion (publication culture, career questions) with no model-release thread — the model news stayed entirely on r/LocalLLaMA.

---

## Vendor releases

### V1 — Z.ai `GLM-5.4` (2026-11-23, in-window): first Loop Transformer flagship, 750B scale — the only confirmed model release of the window
Z.ai's own pages (both `https://z.ai/blog/glm-5.4` and the mirror `https://openlm.ai/glm-5.4/`) are dated **2026 Nov 23**. Key claims, all vendor-reported:
- "GLM-5.4 is our first flagship model built on the Loop Transformer architecture, reaching intelligence levels comparable to 2T-3T parameter models." It "marks the start of **Generalized Coding**" — write code to generate and edit videos, build complete games, handle 3D modeling.
- Architecture: "GLM-5.4 loops 28 layers of the GLM-5 base model for two iterations"; "Architectural Modifications at 750B Scale"; a pre-trained base was converted into a Loop Transformer by continued training rather than training from scratch.
- Three modifications: **Gated Progressive Updates** (per-token gates per iteration), **Hybrid KV Cache (Global Sharing + Independent Sliding Window)** (an extra loop costs one sliding window of KV cache rather than a full context cache, keeping the increase over GLM-5.3 "well under control" at 1M context), and **Sparse Attention Index Reuse** (second loop reuses the first loop's attention indices, zero extra indexing overhead).
- Developer docs (`https://docs.z.ai/guides/llm/glm-5.4`) list input modality Video/Image/Text/File, output Text, context 1M, max output 128K, thinking mode, streaming (up to 200 tokens/s off-peak, 70–80 tokens/s peak), function calling, context caching, structured output. Availability statement: "GLM-5.4 is now available to all GLM Coding Plan users. For users on weekly quota plans, the available quota for GLM-5.4 is increased to 1.5× that of GLM-5.3. **The Model API will be made available upon completion of the security assessment.**" Known limitation stated by the vendor: it "tends to get caught in overly long 'marathon thinking' loops".
- Embedding assets in the blog HTML: `https://z-cdn.chatglm.cn/z-blog/z-icon.svg`, `https://z-ai-bj.oss-cn-beijing.aliyuncs.com/prompts-rich-media-resources/5.4-blog/20261123-173242.jpeg?w=1280&h=720&fit=fill`, `/blog/assets/glm-5.4-BMkt6-kI.js`, `/blog/assets/src-DdQX6Gcb.js`, `/blog/assets/src.CKcEAdPG.css`, headline "Toward Generalized Coding with Our First Loop Transformer".
**No open weights for GLM-5.4 exist yet.** The Hugging Face API returns 0 models for `search=GLM-5.4` and `search=glm-5.4`, and the `zai-org` org listing's newest entries are still `zai-org/GLM-5.3-Flash-BF16`, `zai-org/GLM-5.3-BF16`, `zai-org/GLM-5.3-Flash`, `zai-org/GLM-5.3` (all 2026-08-25). The openlm.ai page links HF only for GLM-5 through GLM-5.3 and describes **GLM-5.3** as "pure open with an MIT open-source license"; no MIT statement is made for GLM-5.4. Treat GLM-5.4 as API/Coding-Plan-only today, gated behind a security assessment.
Sources: https://openlm.ai/glm-5.4/ , https://z.ai/blog/glm-5.4 , https://docs.z.ai/guides/llm/glm-5.4 , https://benchlm.ai/model-updates , https://news.ycombinator.com/item?id=50609685

### V2 — InclusionAI `Ling-3.2-air` (HF repo created 2026-11-23T03:55:12Z, in-window): open-weight, MIT, 124B/5.5B active, native multimodal
Hugging Face repo `inclusionAI/Ling-3.2-air` created `2026-11-23T03:55:12.000Z`, sha `1613b1a4dcc6aa0d8f346606628cd9a92061a525`, tags include `safetensors`, `bailing_moe_v3_vl`, `custom_code`, `license:mit`, `fp8`; architecture `BailingMoeV3VLForConditionalGeneration`; 47 likes at scrape time. Model card: same native multimodal architecture as Ling-3.0-flash-VL; **total 124B, activated 5.5B**; 35 KDA + 7 Gated MLA layers (5:1), 2 dense layers, 512 routed experts / 1 shared / 8 activated, 32 heads, hidden size 2560; text+image input, text output, 1M context; MIT.
Vendor/self-reported deltas vs Ling-3.0-flash-VL: AutomationBench-AA 15.7% → **61%**, GDP.pdf all-pass 8.4% → **16%**, AA-Briefcase v1.1 Elo 987 → **1340**, Terminal-Bench 4.0 0% → **27%**, Harvey LAB-AA v1.1 criterion pass rate **87.7%** (all-pass 8.3% before the material-hallucination check, 0.8% after), and "scores **23** on the Artificial Analysis Intelligence Index v5.0.1" (AA's own number: 23.3877547890296). These are model-card claims; the only independently published number is AA's index.
Related but out of window: `inclusionAI/LingSante-3.1-flash-MXFP4` was published `2026-11-22T03:19:38.000Z` (before the window) and `inclusionAI/Ling-3.1-flash` on 2026-11-19.
Source: https://huggingface.co/inclusionAI/Ling-3.2-air

### V3 — Aleph Alpha `Kolibri 1.1`: in-window blog announcement, out-of-window weights
The Aleph Alpha blog post "Kolibri 1.1: More Efficient. More Capable." is dated **23/11/2026** (page contains both `2026-11-23` and `23/11/2026`), so it counts as an in-window vendor announcement. Vendor claims: English–German MoE, **75B total / 3B active** parameters (Reddit title renders it "75B-A3.4B"), context up to 1M tokens, built on the same pre-trained model as Kolibri 1.0 with a new sparse-attention architecture, first layers densified (78B → 75B), "3.4 times less GPU time per task than Kolibri 1.0", bilingual tokenizer with 21.3% German tokens, abstention/"I don't know" training with the Merlin-Arthur protocol, built in Germany/Finland under European law and the EU AI Act GPAI Code of Practice. Vendor self-comparison claims it "is the strongest model in its weight class (3–4B active parameters) in both English and German" and surpasses GPT-OSS 120B, Mistral Small 4 and Nemotron 3 Super — treat as self-reported.
**The weights predate the window:** `Aleph-Alpha/Kolibri-1.1` created `2026-11-20T09:01:10.000Z`, `Aleph-Alpha/Kolibri-1.1-GGUF` created `2026-11-20T10:49:22.000Z`. A third-party mirror `nokkela-ai/Kolibri-1.1` was created `2026-11-23T16:49:47.000Z` (in-window, 0 downloads/0 likes at scrape time).
Sources: https://aleph-alpha.com/en/blog/kolibri-1-1/ , https://huggingface.co/Aleph-Alpha/Kolibri-1.1 , https://huggingface.co/nokkela-ai/Kolibri-1.1 , https://news.ycombinator.com/item?id=50613084

### V4 — Tencent `WeMM-Ecom`: in-window quantization drop, base weights from 2026-11-18
Tencent published **10 new repositories on 2026-11-23**: GGUF builds `tencent/WeMM-Ecom-0.8B-GGUF` (02:01:35Z), `2B-GGUF` (02:01:51Z), `4B-GGUF` (02:02:04Z), `9B-GGUF` (02:02:17Z), `35B-A3B-GGUF` (02:02:29Z), and GPTQ builds `0.8B-GPTQ` (06:04:04Z), `2B-GPTQ` (06:04:19Z), `4B-GPTQ` (06:04:32Z), `9B-GPTQ` (06:04:47Z), `35B-A3B-GPTQ` (06:05:01Z) — all with 0 downloads and 1–4 likes at scrape time. The base and FP8 weights (`tencent/WeMM-Ecom-0.8B` … `35B-A3B-FP8`) were created 2026-11-18, i.e. outside the window. Model card: WeChat Vision / Tencent, image-text-to-text, Apache-2.0, base model `Qwen/Qwen3.5-35B-A3B`, MoE, zh/en, hybrid thinking, with a technical report and GitHub repo `Tencent/WeMM-Ecom`. All performance numbers are vendor/model-card claims.
Source: https://huggingface.co/tencent/WeMM-Ecom-35B-A3B

### V5 — NVIDIA reinstates Jensen Huang as President, CEO and Board Director (2026-11-23, in-window)
NVIDIA newsroom release dated **November 23, 2026** (RSS `pubDate` `Mon, 23 Nov 2026 13:55:00 GMT`): "NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director". This is corporate-leadership news, not a model release, but it dominated the window's HN attention (two submissions, 1673 and 659 points). A second NVIDIA item on the same feed ("NVIDIA Announces Upcoming Event for Financial Community") is also dated 2026-11-23.
Sources: https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director , https://news.ycombinator.com/item?id=50611588

### V6 — Google: one in-window blog post (not a model release)
The Google AI blog feed's newest entry is "A more tailored Google Search that's uniquely yours" with `pubDate` `Mon, 23 Nov 2026 17:00:00 +0000` — 28 minutes before the window's 17:28Z cutoff, so in-window. Prior entry: "Introducing Tool Retrieval in the Gemini API" (`Thu, 19 Nov 2026 18:00:00 +0000`). No new Gemini model.
Sources: https://blog.google/products-and-platforms/products/search/google-search-personal-intelligence-apps/ , https://blog.google/technology/ai/rss/

### V7 — Feeds checked that produced nothing in-window (and their caveats)
- **OpenAI**: RSS latest is "Perplexity and Intelligence", `Sun, 22 Nov 2026 00:00:00 GMT` — before the window start, so **not** in-window. Next items are 2026-11-20 and earlier. No OpenAI release in the window.
- **Anthropic**: newsroom HTML carries only `2026-11-18` and `2026-11-20` dates — latest posts are the IPO-related items "Anthropic prices initial public offering", "Anthropic closes IPO", "Anthropic launches roadshow", "Anthropic files draft S-1" / "confidential draft S-1". **No Anthropic post dated 2026-11-21, 22 or 23** was found. These are nearby but out-of-window.
- **Microsoft**: `microsoft.ai` returned **403** (4546 bytes) so the MAI Code 2 page could not be read directly; the date is nevertheless established as **November 17, 2026** (announced at Ignite 2026, same day as GPT-6.2 Astra/Sol) by third-party trackers (BenchLM's own release tracker dates MAI Code 2 / MAI Code 2 Flash to Nov 17; llm-releases.com states "Released 2026-11-17"). **MAI Code 2 is therefore out of window.** The Microsoft Research blog feed returned **403** and its HTML exposes no parseable dated entries.
- **Mistral**: `https://www.mistral.ai/news` renders posts client-side; the only parseable dates run from "November 5, 2026" backwards — **no Mistral release in the window**, but absence of a readable post is not proof of absence.
- **Meta**: `https://ai.meta.com/blog/` returned 200 with no `Nov 2x, 2026` date strings; the RSS endpoints returned HTML/404 instead of a feed. No dated Meta post could be read → no in-window Meta release can be asserted either way.
- **Qwen**: `https://qwen.ai/` and its feed endpoint return a client-side-rendered shell (`qwen_feed.xml` is HTML, not RSS) — **absence of a readable Qwen post is NOT evidence of no release.** `hy.tencent.ai` returned **567** (7352 bytes) and could not be read.
- **DeepSeek**: `https://deepseek.com/` returned 200 but the API endpoint errored with `{"error":{"message":"Authentication Fails (missing key) (request_id: 793fad30-aeb0-4670-b6de-625a38d77fa4)","type":"authentication_error",...}}`; no dated in-window post readable.
- **Moonshot**: `https://moonshotai.github.io/` returns an 883-byte "Redirecting..." stub.
- **Thinking Machines Lab**: `https://thinkingmachines.ai/news/` shows `dateModified 2026-11-23T00:07:36-08:00` on the index but the newest actual post remains "Introducing Inkling 2 Mini" (2026-11-20) — no in-window post.
Sources: https://openai.com/news/rss.xml , https://openai.com/index/perplexity-and-intelligence , https://www.anthropic.com/news , https://www.anthropic.com/news/ipo-close , https://www.mistral.ai/news , https://ai.meta.com/blog/ , https://www.microsoft.com/en-us/research/blog/ , https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/ , https://thinkingmachines.ai/news/inkling-2-mini/ , https://benchlm.ai/model-updates

---

## Community pulse (what works / what breaks / what's interesting) + explicit data-coverage caveats

**What works**
- One clear narrative anchor beats many small ones. `GLM-5.4` took the #1 AI slot on HN (763 pts, 268 comments) *and* #1 on r/LocalLLaMA (862 pts, 288 comments) within hours of publication, with the same thesis ("Loop Transformer", coding-first, 750B) carrying across both venues. It was the only model release of the window and it dominated both.
- Practical, runnable guides still travel well in this community: "A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth" (678 pts, 276 comments) outscored every research-adjacent post of the day.
- Open-weight drops that arrive *with usable artifacts* convert fast: Tencent pushing ten GGUF/GPTQ builds of `WeMM-Ecom` in one morning, and the community picking up `Ling-3.2-air` (47 likes on HF within hours of the repo going live).

**What breaks**
- Loop-architecture hype outran the model's demonstrated breadth. The second-biggest r/LocalLLaMA thread by comments is `1y3lqu3` ("GLM 5.4 is great at coding. But absolutely garbage at writing and anything but that.", 264 pts / 118 comments) — the mirror image of the launch thread, and Z.ai's own docs concede the "marathon thinking" failure mode. Vendor claim (Generalized Coding across video/3D/games) vs community experience (coding good, prose bad) diverged sharply.
- Consensus-building around inference infrastructure is fragmenting: `1y30a6x` ("Inference engines are becoming too fragmented", 225 pts / 183 comments) and `1y3eb0r` ("Community standards: contributing to llama.cpp vs to new engines like Strata", 130 pts / 32 comments) are both high-engagement complaints, not solutions.
- Benchmark-led positioning is getting harder to sustain: AA's homepage Intelligence table has not refreshed for three days while the changelog already carries a scored model (`Ling-3.2-air`, 23) that the table does not list — leaderboard freshness is lagging release cadence.
- AI share of HN stories has been pinned near 22–23% for a third consecutive window (22.9% today on title-only matching) even as total volume roughly doubled; the plateau is not breaking in either direction.

**What is interesting**
- The day's two biggest discussions are about *institutions*, not models: NVIDIA reinstating Jensen Huang (1,673 + 659 pts) and Dario Amodei's 2015 "games pacify the masses" quote resurfacing (65 pts / 76 comments; Verge write-up 16 pts). Alongside "Buckle Up the AI Bubble Is Popping" (23 pts / 48 comments) and r/MachineLearning threads on whether research quality is valued over volume and whether researchers are proud of their own papers, sentiment is notably more reflective than on release days.
- Sovereign/regulated-AI positioning is a live product angle: Aleph Alpha's Kolibri 1.1 leads with German-sovereignty framing (EU AI Act, GPAI Code of Practice, 21.3% German tokens) rather than benchmark scores.
- Structural efficiency work is showing up in user-land: `NariQ: BF16-level Qwen3.8-27B in a 10 GB file` (118 pts / 70 comments), `Aurora2-400M-A20M-QAT` (0.5-bit MoE in 27.5 MB, 110 pts), and community inspection of Inkling 2 Mini's loop internals ("One vector decides how many passes it can…", 113 pts) suggest the frontier of interest is shifting toward running and reverse-engineering looped/quantized models on consumer hardware.
- Independent self-modification research reached the front page: arXiv `2611.21885` "Language Models Can Rewrite Their Own Weights" (150 pts / 42 comments on r/LocalLLaMA).

**Explicit data-coverage caveats**
1. **Reddit is mirror-dependent.** reddit.com/api.reddit.com = 403; the collection ran entirely on `redlib.zanity.net` HTML (authoritative for permalinks, and id ↔ permalink mapping verified 10/10 on top posts). Mirrors that failed this run: `safereddit.com` (Anubis wall), `redlib.tiekoetter.com` (Anubis wall), `redlib.catsarch.com` (429), `redlib.perennialte.ch` (410), `redlib.privacyredirect.com` (403), `redlib.4o1x5.dev` (decommissioned), `redlib.ducks.party` (empty shell). Counts of 98 in-window posts are a *lower bound* for anything buried below the first page of each sort; "top" ranking by score is complete for what the mirror served, and reddit's own ranking can differ from score ordering.
2. **Hacker News keyword matching is a proxy.** 22.9% (title, word-boundary) and 24.3% (title+URL) are keyword-based estimates, not a semantic classification; the keyword list is inherited unchanged from the 2026-11-22 report so the day-over-day comparison is apples-to-apples, but both figures carry roughly a few points of noise (e.g. "Progress map for the Lean formalization of Alessandro Masullo's manuscript" and "What Happened in Fall 2026: AI and P vs. NP" are counted as AI by the `model`/`ai` tokens; "ESP32-OS, a KolibriOS-Compatible OS" is a false positive). Window volume (1,030) was retrieved in a single Algolia page and the response spans the entire window, so no pagination truncation.
3. **Vendor-feed coverage is uneven.** `microsoft.ai` = 403 and the Microsoft Research feed = 403 (MAI Code 2's date is therefore taken from BenchLM's tracker and third-party trackers, not from the vendor page); `hy.tencent.ai` = 567; `qwen.ai`, `qwen_feed.xml`, `moonshotai.github.io`, `mistral.ai` feeds, and the Meta AI blog are client-side-rendered or non-feed responses. **Absence of a readable post is NOT evidence of no release** on those sites. DeepSeek's API required a key (`Authentication Fails (missing key)`).
4. **Benchmark numbers are vendor- or card-reported unless stated otherwise.** GLM-5.4's "2T-3T parameter-equivalent" claim, Kolibri 1.1's "3.4× less GPU time" and class-leadership claims, WeMM-Ecom's "outperforming open-source models with hundreds of billions of parameters", and Ling-3.2-air's AutomationBench-AA / AA-Briefcase / Terminal-Bench 4.0 deltas are model-card or vendor-blog claims. The only independently published figures are AA's Intelligence Index (Ling-3.2-air = 23.3877547890296; Inkling 2 Mini = 20.1315214698783) and BenchLM's point estimates.
5. **Leaderboard freshness vs release cadence.** Both Artificial Analysis tables and BenchLM were content-frozen this window despite a new BenchLM snapshot ID (`2026-11-23-1a6fc6525ad498ed` vs `2026-11-21-5deedfb2f831f0e6`) and despite three in-window model events. Absence from a leaderboard is not evidence of weak performance.
6. **GLM-5.4 has no discoverable open weights.** HF API returns 0 models for `GLM-5.4` / `glm-5.4`; `zai-org`'s newest repos are GLM-5.3 variants from 2026-08-25; the model is gated behind a security assessment with Coding Plan access only. Do not describe it as open-weight.
