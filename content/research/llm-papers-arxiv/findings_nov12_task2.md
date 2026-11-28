# Community, Leaderboard and Release Signals — window 2026-11-11T17:28Z → 2026-11-12T17:28Z (Task 2)

**Method.** Every claim below is derived from primary artifacts fetched directly via curl and cached under `tmp/nov12/t2/`: Algolia HN API (`hn_1794418080.json`, `hn_1794461280.json`, `hn_all.json`, plus per-item trees `hnitem_*.json`), Reddit RSS feeds (`r_LocalLLaMA.xml`, `r_MachineLearning.xml`, `p_1xtpqxm.xml`), the Artificial Analysis homepage Next.js payload (`aa_payload.txt`) and changelog (`aa_changelog.txt`), the Artificial Analysis Decision Index evaluation page (`aa_di.html` → `aa_di.txt`), the BenchLM leaderboard JSON (`benchlm.json`), the Hugging Face models API (`hf.json`), the Huawei MACaQ README (`macaq_readme.md`) and blog page (`macaq.html`), and the Google Gemini Decisions API blog (`gemini_decisions.html`). **0 web_search calls and 0 web_fetch calls** were used for this task — the run-wide cap was not approached.

**Window note.** The window is the same 24 h slot as previous runs (17:28Z → 17:28Z). All timestamps below are as published by the source.

---

## 1. Leaderboards

### 1.1 Artificial Analysis — Intelligence Index (homepage Next.js payload)

The legacy `api/v2/data/*` endpoints still return **HTTP 410 Gone**; extraction is from the homepage payload only.

**Top 5 are bit-identical to the 10 Nov and 11 Nov snapshots for a third consecutive day:**
Claude Fable 5.2 (max) 64.56 ($26.54/task) | Gemini 4 Carbon (high) 60.03 ($7.76) | Claude Opus 5.5 (max) 59.11 ($10.04) | GPT-6 Astra (max) 56.85 ($6.24) | GPT-6.1 Sol (max) 54.61 ($1.27).

Next tier: Muse Wonder Full (max) 50.08, Kimi K3.1 Pro 46.45 (open, $3.68), Muse Wonder (max) 43.57, Grok 4.7 (xhigh) 35.49, DeepSeek V4.1 Flash 1017 (max) 32.59 (open, $0.60), GLM-5.3 (max) 31.65 (open, $5.01), MiMo-V2.6-Pro 29.89 (open, $0.26), Ling 3.1 Flash 1019 29.57, Claude Haiku 5.5 (max) 36.48 ($0.411), Muse Ember 36.02 ($0.136), GPT-6 Luna 27.86 ($0.152), Mistral Large 4 26.12, Qwen3.8 27B 20.11 (open, $3.53), K2 Horizon 375B A23B 17.82, Beam 1.0 17.73, Nemotron 3.5 Super VL 13.62 — 32 rows / ~27 unique models.

**Cost outliers unchanged:** Muse Ember $0.136/task remains roughly one third of Claude Haiku 5.5's $0.411 at a near-identical score; MiMo-V2.6-Pro $0.26; GPT-6 Luna $0.152. Source: https://artificialanalysis.ai/

### 1.2 Artificial Analysis — Decision Index v2.1 (capability improvement)

**The Decision Index per-model data was recoverable this run.** On 11 Nov the referenced data manifest was served in an undecodable binary format (`/data/324ed05c14a0dc8b.txt`, 75513 bytes, `file` reports `data`) and the legacy `api/v2/data/*` endpoints returned 410 Gone, so no Decision Index numbers were reported. On 12 Nov the same numbers are recoverable from the homepage Next.js payload via the `HomeDecisionContestantsContextProvider` block, which carries `indexScore` and `costPerTaskUsd` for **23 entries** (20 `decisionModel` + 3 `llm`). The binary manifest remains unusable (`aa_manifest.txt` still reports `data`), so this is a payload-side extraction route, not a fixed manifest.

Full ranking (indexScore, cost per task):

| # | Model | Kind | Index score | Cost/task |
|---|---|---|---|---|
| 1 | Claude Haiku 5.5 (Max) | llm | 76.49216258405318 | $0.006218276560848557 |
| 2 | GPT-6 Luna (Max) | llm | 75.67452818327847 | $0.0015484570232176802 |
| 3 | Drex Max v1.1 | decisionModel | 72.62416891718618 | $0.00010267619916351927 |
| 4 | SubQ Snap 1.2 | decisionModel | 72.58051127736282 | $0.0001369015988846924 |
| 5 | GLiDE v1.2 | decisionModel | 72.51518604270153 | $0.0007804024483753589 |
| 6 | Mammoth 27B | decisionModel | 71.3606271722313 | $0.0002635732891177445 |
| 7 | d1-ultra | decisionModel | 70.57640821306735 | $0.00013303619567638116 |
| 8 | Decider v1.2 | decisionModel | 69.76625551837046 | $0.00006845624997988636 |
| 9 | GPT-6 Luna (Low) | llm | 68.80089357639407 | $0.0004851996786857328 |
| 10 | SubQ Snap 1.1 | decisionModel | 67.92112781109881 | $0.0001369015988846924 |
| 11 | Claude Haiku 5.5 (Low) | llm | 67.18077941198649 | $0.0008611217916101578 |
| 12 | Elephant 9B | decisionModel | 66.38927973293856 | $0.0000922506511912106 |
| 13 | Jev 1.14 | decisionModel | 66.23416034232282 | $0.0001562283474547284 |
| 14 | Gemini Decision 1 | decisionModel | 65.97704607379173 | $0.0003454119032828384 |
| 15 | Microsoft-Decision-1 | decisionModel | 62.071841900952585 | $0.0001425621582695805 |
| 16 | Mercury Decide | decisionModel | 62.06671054636425 | $0.00006952527604940752 |
| 17 | Celeris-1.1 Decision | decisionModel | 61.984155702822896 | $0.000013673908958574728 |
| 18 | Drex 2.0 | decisionModel | 61.56239461370923 | $0.00019995755854053992 |
| 19 | d1 | decisionModel | 60.7814283497953 | $0.00006335056936970531 |
| 20 | Clef | decisionModel | 60.333283101183866 | $0.0008631479792105371 |
| 21 | GPT-6 Luna (Decisions) | decisionModel | 60.246412746474554 | $0.0003387371041709804 |
| 22 | Decider Flash v1.2 | decisionModel | 60.083745412105394 | $0.0001957871079899432 |
| 23 | Clef-Omni | decisionModel | 57.75003536430474 | $0.0005293863242237254 |

Notable structure:
- **Two general-purpose LLMs (Claude Haiku 5.5 Max, GPT-6 Luna Max) still outscore every dedicated decision model**, and they do so at 60× and 15× the cost per task respectively. The dedicated models buy a ~4-point gap over the best general model (Drex Max v1.1 at 72.62, $0.000103/task) at 1/60th of Claude Haiku's price.
- **Cost spread is three orders of magnitude** across the table: $0.0000137 (Celeris-1.1 Decision) to $0.0062 (Claude Haiku 5.5 Max).
- **Two "same-family" progressions are non-monotonic**: SubQ Snap 1.1 → 1.2 rises 67.92 → 72.58 at *identical* cost ($0.0001369015988846924), while Drex 2.0 → Max v1.1 rises 61.56 → 72.62 at half the cost. A version bump worth 11 points is larger than the entire gap between #1 and #6.
- The **top open decision model (Drex Max v1.1, 72.62)** corroborates an independent community claim: a Nace engineer states his team is "folks behind Drex, an open source decision family model that hit #1 in Artificial analysis in decision index 2.1" (https://www.reddit.com/r/LocalLLaMA/comments/1xu9onk/kquant_new_quantization_technique_37_better/). Note the claim is #1 among *open* decision models — the AA table overall puts two LLMs above Drex.
- **The AA roster shows "Jev 1.14" (66.23)**, the model a community author benchmarks against ("the six benchmarks Jev 1.13 is evaluated on", https://www.reddit.com/r/LocalLLaMA/comments/1xtocct/i_made_open_models_for_yesno_and_multiplechoice/). The community is tracking the same ladder the board publishes, one version behind.

**Methodology, from the AA Decision Index evaluation page** (https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index): "Version 2.1 combines six evaluations: AA-Paperclip, 1,500 resumes, receipts and invoices, and research papers, each with decisions to make and facts to extract; EvalSafe-O*NET-AA, based on TypeSafe's O*NET benchmark of judgements about workplace documents; When2Call, NVIDIA's tool-calling evaluation; AA-Omniscience-Decision v1.1, a private dataset adapted from the knowledge and hallucination benchmark AA-Omniscience; HLE-MultiChoice v1.1, the text-only multiple-choice questions from Humanity's Last Exam with an option to decline; and AA-Symmetry v1.1, which checks that a decision holds when its options are moved or reworded, or its question is negated." The homepage update card reads: *"Decision Index v2.1 — New private benchmarks and scoring that rewards calibrated confidence."* Changelog metadata: `"decisionIndex":{"name":"Artificial Analysis Decision Index v2.1","change":{"type":"updated","removeAfter":"2026-11-20"}}`.

### 1.3 Artificial Analysis — changelog

**No changelog entry dated 2026-11-12 exists yet.** The newest entries are 2026-11-11:
- `modelAdded` — **JT-4.1 Flash 236B A21B**, creator **China Mobile**, `intelligenceIndex: 18.952876906667`, `omniscience: 2` (model id `b268d7c1-5a0b-41c1-9590-1d89e66cf156`, slug `jt-4-1-flash-236b-a21b`).
- `hostModelAdded` ×3 — **Kimi K3.1 Pro** on **Databricks**; **GLM-5.3 (Low)** and **GLM-5.3 (Max)** on **SambaNova**.

The prior 2026-11-10 entries stand: the **Multimodal Knowledge Agent (MKA)** benchmark article (Google DeepMind partnership) and **Endpoint Accuracy Index v1.1**; 2026-11-09: Endpoint Accuracy Index v1.1 article and "Meta's Muse Ember is the cheapest model scoring 36 on the Intelligence Index".

Caveat carried forward: index components rotate under the models — Intelligence Index v5.0.1 is marked updated, and frontiercode-2-0, hle-diamond, AA-3D and omniscience v1.1 were all removed after 2026-11-10. Source: https://artificialanalysis.ai/changelog

### 1.4 BenchLM

Snapshot `2026-11-12-5d3bc0727c73e61f` (previous `2026-11-11-ea3ff4c9eb0b31d5`), methodology unchanged at `bench-align-v5.8-2026-09-30`, mode `bench-align-v5`, 50 models, `approvedSnapshotId: null`.

**Top 5 after a large re-scoring:**

| Rank | Model | Score | Δ vs 11 Nov | Evidence status |
|---|---|---|---|---|
| 1 | Claude Fable 5.2 | 93.86 | **+2.45** | estimated |
| 2 | Gemini 4 Carbon | 89.13 | **+1.22** | supported |
| 3 | Claude Opus 5.5 | 86.29 | **+0.52** | supported |
| 4 | GPT-6 Astra | 84.84 | −0.14 | supported |
| 5 | GPT-6.1 Sol | 84.54 | −0.37 | supported |

Ranks 6–12 (not previously tracked in this series): Claude Sonnet 5.5 82.37, Claude Fable 5.1 80.50, GPT-6.1 Terra 80.33 (estimated), Gemini 4 Argon 80.01, Claude Fable 5 78.34, GPT-6 Sol 77.25, Claude Opus 5 77.19.

**This is the largest single-day move on the board, and it is not a release-driven move.** The methodology version did not change (`bench-align-v5.8-2026-09-30`), yet the #1 jumped +2.45 and the #2 +1.22 — larger than every delta observed in the last three days. Only the two OpenAI entries fell (−0.14, −0.37). A same-methodology snapshot moving the leader by 2.45 points in one day is a re-scoring or backfill event, not new capability.

Caveats unchanged and still severe for the leader:
- `evidenceStatus: "estimated"`, `sourcePattern: "objective-only"`, 90% interval **79.51 – 100.00**, `patternCalibrationFamilies: 12`, `patternIntervalAvailable: true`.
- Payload flags `validatedFutureTruth: false`, `coverageValidated: false`, `simultaneousRosterCoverageValidated: false`; `uncertaintyPolicy.retrospectiveTailChecksPassed: false`.
- Category evidence is mixed even for the #1: agentic `estimated`, coding `supported`, knowledge `supported`, reasoning `supported`, multimodalGrounded `estimated`.
- Category scores for the #1: agentic 90.52, coding 88.33, reasoning 90.93, multimodalGrounded 90.57, knowledge 97.95, math 93.8 (multilingual and instructionFollowing `null`).
- Board's own ordering caveat: "Point-estimate order; conditional ranges do not establish rank confidence."
- Licence: CC BY-NC 4.0; commercial use not permitted without a licence from BenchLM.

Source: https://benchlm.ai/api/data/leaderboard

### 1.5 Cross-board reading

- **AA is frozen for a third day; BenchLM moved sharply.** AA's Intelligence Index roster is bit-identical to 10 and 11 Nov, while BenchLM re-scored its top two upward by 2.45 and 1.22 points with no methodology change. Two boards on different clocks, one static and one jumping, is the same divergence as yesterday but with the magnitude inverted.
- **Claude Fable 5.2 still leads both boards** (AA 64.56, BenchLM 93.86) — third consecutive day, still no frontier release.
- **The one genuinely new capability this run is the Decision Index**, and it produces a leaderboard nobody else publishes: 20 dedicated decision models, of which **8 are open-weight and cost under $0.0007 per task**, versus a general LLM best of 76.49 at $0.0062.
- Open-weight standings on AA unchanged: Kimi K3.1 Pro 46.45, DeepSeek V4.1 Flash 1017 32.59, GLM-5.3 31.65, MiMo-V2.6-Pro 29.89, Qwen3.8 27B 20.11, Nemotron 3.5 Super VL 13.62.

### 1.6 Hugging Face

`https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=200` — **184 of 200** newest repos fall inside the window. **No established lab published weights in-window.** The named entries are third-party conversions and community quants: `eulogiord/Ripple-65B-Base-Preview`, `cjosie/Qwen3.8-27B-GPTQ`, `ehzawad/Voxtral-Small-24B-2507-bn-BD-{GPTQ,IQ2_S,IQ3_S,IQ3_XS,W8A16-GPTQ}`, `mlx-community/NVIDIA-Nemotron-Labs-Dory1.0-4B-MLX-8bit`, `bartowski/moganai_MoganOCR-TR-GGUF`, `Kuzey12345/blackhole-lite-gguf`, `kadirify/atlas-code-GGUF`, `Vzdorrr/Nocta-Qwen3.5-4B-RP-GGUF`, plus a large volume of `mradermacher/*-GGUF` conversions and Qwen3.5 merge derivatives. All listed downloads are 0 at fetch time.

---

## 2. Hacker News

Coverage: exhaustive enumeration of the 2026-11-11T17:28Z → 2026-11-12T17:28Z window via Algolia `search_by_date` (two split queries, 529 + 614 hits, union **1143 unique objectIDs**, 0 residual). **285 of 1143 (24.9%)** are AI/LLM-relevant by title — a sharp drop from 29% on 11 Nov and back near the 24% baseline.

**Top AI-relevant stories:**

| Pts | Comments | Title | ID |
|---|---|---|---|
| 1495 | 1238 | NVIDIA Announces CEO Transition | 50467087 |
| 1205 | 1598 | Nvidia is preparing to oust Jensen Huang | 50459703 |
| 639 | 666 | United Airlines bans AI agents from booking flights on behalf of travelers | 50458900 |
| 569 | 595 | Anthropic IPO | 50465829 |
| 533 | 154 | Gemini Decisions API | 50456791 |
| 373 | 253 | Jensen Huang resigns as Nvidia CEO immediately | 50467132 |
| 168 | 103 | Nvidia CEO Jensen Huang resigns after reports of second affair deepened scandal | 50467139 |
| 164 | 184 | Retirement Savings Are Fueling the AI Bubble | 50457164 |
| 126 | 31 | Huawei releases MACaQ, its internal quantizer for local inference | 50458166 |
| 72 | 20 | Nvidia CEO Jensen Huang resigns after reports of extramarital relationships | 50467191 |
| 33 | 8 | Modern Web Guidance 1.0: The web platform expertise your coding agent is missing | 50460398 |
| 33 | 14 | Why Every AI Model Will Ship as a Torrent | 50464055 |
| 15 | 1 | Gemini Decision 1 is Free on Google AI Studio | 50457853 |
| 15 | 12 | Anthropic says a key AI safety alarm has been triggered, days before its IPO | 50456668 |
| 15 | 9 | Show HN: AI Red Lines – write down what would make you act on AI | 50467880 |
| 14 | 9 | AI makes it 'close to impossible' to assess university coursework, regulator says | 50465844 |
| 14 | 1 | "Zlibrary my beloved": Anthropic staff chats extolling piracy cited in Sony suit | 50459256 |
| 12 | 3 | He let an AI read too many court auction listings. Now he is in a Turkish jail | 50461979 |
| 12 | 4 | Swatters are using AI voices to deceive 911 dispatchers, and it's getting worse | 50456742 |
| 4 | 0 | 37% on ARC-AGI-2 Kaggle Without LLMs | 50461495 |
| 4 | 0 | Compress any LLM 3x in one click, near-lossless, vLLM successor | 50470363 |

**The AI cycle was entirely about capital and governance, not about models.** The top four threads are an NVIDIA CEO transition, an airline banning AI agents, and an Anthropic IPO — none is a model release or a benchmark result. The single frontier-lab product launch of the window was Google's Decisions API (533 pts / 154 comments).

**Anthropic's IPO is the day's structural event** (569 pts / 595 comments, https://ipo.anthropic.com/us/). Two days earlier in the same window, a filing was reported: "Anthropic says a key AI safety alarm has been triggered, days before its IPO" (15 pts / 12 comments, https://news.ycombinator.com/item?id=50456668). Per the quoted filing, the trigger fires "when AI is doing enough of Anthropic's research to roughly double how fast its models improve. The policy says that pace would pack two years' worth of AI progress, at its 2018-2024 rate, into a single year." The filing states the call "based on 'what we expect from future models and our overall rate of progress, rather than on what we have observed from current models.'"

**Apple is now a non-AI top story** — "Apple has new Mac app coming to make running local AI models easy" (461 pts) was 11 Nov's #2; on 12 Nov the AI-LLM share of top stories fell to 24.9%.

**United Airlines banning AI agents from booking flights** (639 pts / 666 comments, https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) is the day's most consequential *deployment* restriction, and it is a cost argument, not a safety argument: "United is saying they don't want to add yet another, and potentially even more powerful, intermediary than they already face in terms of Google search, price-comparison metasearch sites and online travel agencies… Flight searches cost airlines money, and undoubtedly United wants to avoid the expense associated with the surge of AI bot flight searches."

**Huawei's MACaQ** (126 pts / 31 comments, https://github.com/huawei-csl/MACaQ) was the day's most substantive technical release thread, and its comment thread is dominated by two debates: (a) Huawei's sanction status and whether distributing its tools is "material support to sanctioned entities" (several commenters note it is a Commerce Department sanction, not a Treasury Department one, "which would be far more serious"); (b) why Huawei has three separate quantization pipelines — a commenter maps them: "SINQ was created last year. It was for weights only and it was calibration-free quantization. Then KVarN is for KV-cache quantization to get longer context. MACaQ is multimodal, activation and weights calibrated quantization. 3 different projects". Multiple commenters note the tool is being reproduced into GGUFs on Reddit and Hugging Face (https://huggingface.co/huawei-csl/Qwen3.6-35B-A3B-MACaQ-R-GGUF).

Also notable: **"Why Every AI Model Will Ship as a Torrent"** (33 pts / 14 comments, https://pirateface.co/articles/every-ai-model-should-be-a-torrent), continuing the distribution debate that on 11 Nov surfaced "Zlibrary my beloved" Anthropic staff chats cited in the Sony suit (14 pts).

---

## 3. Reddit — r/LocalLLaMA (50 in-window posts)

Coverage: 100 newest entries fetched, **50 in-window** (2026-11-11T17:28Z → 2026-11-12T17:28Z).

**Quantization was the day's dominant technical thread, and it was crowded.** Four distinct quantization efforts landed in 24 hours:

1. **MACaQ (Huawei, Apache 2.0)** — arXiv 2611.10649. README claims: "MACaQ can quantize a **122B-parameter model in 64 minutes using just 32.5 GB of device memory**. You can get lower perplexity than MR-GPTQ and DuQuant++, or match their best Llama-3-8B perplexity with **11× less quantization time**." Backends: Diffusers (image/video/audio, W4A4), llama.cpp (2/3/4-bit GGUF), vLLM (W4A4 or weight-only), PyTorch (speech, W4A4), Ascend. Community measurement (Qwen3-4B IQ4_XS): MACaQ mean KL 0.02804 at 2.260 GB vs Bartowski 0.03443 at 2.271 GB and Unsloth 0.03663 at 2.271 GB — 23.5% lower KL than Unsloth, 18.6% lower than Bartowski at effectively identical file size. On Qwen3.6-35B-A3B: MACaQ 0.018696 vs Unsloth (UD-IQ4_XS) 0.020954 vs Bartowski 0.021927. On Qwen3.8-27B: MACaQ 0.036784 vs Bartowski 0.104170 — ~65% lower. Supported llama.cpp formats: IQ2_XXS, IQ2_XS, IQ3_XXS, IQ3_S, IQ4_NL, IQ4_XS. https://github.com/huawei-csl/MACaQ · https://www.reddit.com/r/LocalLLaMA/comments/1xto0fa/opensource_method_macaq_beats_unsloth_ggufs/
2. **KQuant** (Nace / UoT) — "3.7× better quants" claimed for the Qwen family; KL from full-precision next-token predictions: Qwen3.5-4B 0.048 (1.45× better than public 4-bit's 0.070), Qwen3.5-9B 0.030 (2.6× better vs 0.081); open-sourced MLX packs for 4B/27B/35B/Flash-Next. Built with "Fable 5.2 & Astra … 128 subagents". Explicitly a KL-divergence measure, "not a task-accuracy score". https://www.reddit.com/r/LocalLLaMA/comments/1xu9onk/kquant_new_quantization_technique_37_better/
3. **Raon-1 Nano (KRAFTON)** — Apache 2.0, 3.1B dense hybrid, official GGUF + a `ik_llama.cpp` PR (#2903) adding native runtime and MTP speculative decoding while upstream support is still pending. https://www.reddit.com/r/LocalLLaMA/comments/1xue3d4/pr_run_kraftons_official_raon1_nano_31b_gguf_via/
4. **BotPsy-0.8B** (Tether) — a 0.8B agentic personal-assistant model on Qwen3.5-0.8B for on-device function calling. https://www.reddit.com/r/LocalLLaMA/comments/1xu8685/qvacbotpsy08b_hugging_face_ondevice_personal/

**Open decision models are being trained against the AA Decision Index ladder.** "I made open models for yes/no and multiple-choice decisions in agents. The 26B MoE (4B active) beats Jev 1.13": Decido-1 85.4 (~4 s CPU / ~1.1 s Metal on M4 Pro), Decido-1-Max (reasons first) 89.2, Decido-1-Fast 1.7B 73.0, Decido-1-Ultra 0.6B 62.2, vs Jev 1.13 API 83.9. Reported ordering instability: "Answers flip when options are reordered 4.8% of the time (Jev reports 14.6%)" — i.e. the open model is both more accurate *and* more order-invariant than the incumbent it targets. That order-invariance property is precisely what AA-Symmetry v1.1 measures on the board. https://www.reddit.com/r/LocalLLaMA/comments/1xtocct/i_made_open_models_for_yesno_and_multiplechoice/

**New open model releases worth noting:**
- **Praxis-1** (Runway) — 27B MoE diffusion transformer predicting video *and* actions together; "top-performing world action model on NVIDIA's RoboLab-120 leaderboard, and it outperforms every open-weight VLA. On RoboLab-120, Praxis-1 reaches 46.2% success across 1,200 episodes, compared with 42.9% for FLUX 3 Action, 36.8% for Cosmos3 Nano and 28.0% for π0.5." Apache 2.0 weights + inference and fine-tuning code, native LeRobot support, vLLM-Omni, hosted on Reactor; runs on H100/B200 through RTX 5090 / RTX PRO 6000 to Jetson Thor. https://www.reddit.com/r/LocalLLaMA/comments/1xu8u4f/praxis1_a_runwayml_collection/
- **MetaEncoder / meta-encoder-v1** (Meta) — contrastively fine-tuned from `meta-models/Muse-Glimmer-30B`; one encoder for retrieval *and* decision making with a natural-language interface, scoring candidates by task specification with no rigid schema, matching by inner product so an ANN index can serve millions of candidates without re-running the model. arXiv 2610.11316. https://www.reddit.com/r/LocalLLaMA/comments/1xu8eie/metaencoder_a_facebook_collection_one_encoder_for/

**Hardware and serving threads:**
- **Voltage-glitching a CMP 170HX into an A100-80G**: the 8GB CMP 170HX "apparently ships with ~80GB of HBM onboard, just fused off"; voltage fault injection past the fuse lock then enabled all working SMs (120–126 vs the 108 NVIDIA ships on A100) → **85.9 TFLOP/s FP16 vs 72.5 on a retail A100**, with the full 80GB usable and NVLink/PCIe Gen4 restored. Cost of the mod: board wiring, a custom STM32 glitcher, 1–48 h of glitching per card, and one of ten cards had only 64GB intact. https://www.reddit.com/r/LocalLLaMA/comments/1xu1dkz/someone_voltageglitched_a_cmp_170hx_mining_card/
- **Qwen3.8-Flash-Next on 4× RTX 3090 via Strata** — unsloth UD-Q4_K_XL and UD-Q5_K_XL benchmarked on a Threadripper 2920X / 128 GB RAM / 4× RTX 3090 24 GB, power-capped to 275 W; benchmarks run over SSH with Claude Code doing the scripting. https://www.reddit.com/r/LocalLLaMA/comments/1xuhhie/qwen38flashnext_on_up_to_4_rtx_3090_via_strata/
- **Strata QFN on Strix Halo** — ~70–80 t/s on a 3090 + 64 GB RAM, the box fully occupied by the model. https://www.reddit.com/r/LocalLLaMA/comments/1xu7h6v/strata_qfn_on_strix_halo/
- **DeepSeek V4.1 Flash 1017 exl3 2.9bpw on APEX 2025** — 6×3090 / 128 GB / Threadripper 3960x, ~1000 tps prefill and 75 tps decode with cards power-limited to 175 W; Terminal-Bench 2.1 and AIME 2026 performance "similar to unquantized". https://www.reddit.com/r/LocalLLaMA/comments/1xtyxl9/deepseek_v41_flash_1017_exl3_29bpw_apex_2025/
- **RealtimeVAD** — trading false positives for ~110 ms earlier end-of-speech detection in local voice pipelines. https://www.reddit.com/r/LocalLLaMA/comments/1xueuyv/trading_false_positives_for_110ms_earlier/
- **llama.cpp PR #31533** — "CUDA: few-row MMQ for BS 2-24", with the SPEED-Bench speculative-decoding command line quoted in full (Qwen3.8-27B-UD-Q4_K_M.gguf, `--spec-type draft-dflash`, `--spec-draft-model Qwen3.8-27B-DFlash2-Q4_K_M.gguf`, ctx 180224). https://www.reddit.com/r/LocalLLaMA/comments/1xudqle/title_cuda_fewrow_mmq_for_bs_224_by_anujj_pull/

**Other threads:** MCP/architecture — "Architecture trends: From full to local attention" (the transition from full to hybrid attention continues) https://www.reddit.com/r/LocalLLaMA/comments/1xtvxtp/architecture_trends_from_full_to_local_attention/ ; llama.cpp "chat: refactor gemma4 to build loose schema rules" fixing Gemma tool-calling https://www.reddit.com/r/LocalLLaMA/comments/1xu6td8/chat_refactor_gemma4_to_build_loose_schema_rules/ ; a Gemma4-31B latent-space report in which "Caring and Contempt for user controlled by the same 3 neurons" https://www.reddit.com/r/LocalLLaMA/comments/1xu4n7b/gemma431b_latent_space_discovery_caring_and/ ; "After four years of development, are LLMs capable of writing high-quality prose?" https://www.reddit.com/r/LocalLLaMA/comments/1xub4s2/after_four_years_of_development_are_llms_capable/ ; Inflect v3 local TTS (34.31M params, six voices, Apache 2.0, CPU+CUDA) https://www.reddit.com/r/LocalLLaMA/comments/1xtzwxf/i_released_inflect_v3_lightweight_local_tts_in/ ; MOSS-Image AMA with an anime model in development and a plan to keep the next model Apache 2.0 https://www.reddit.com/r/LocalLLaMA/comments/1xuad5c/meet_the_people_behind_mossimage_plus_a_few/ ; "Buying Hugging Face: Was it a strategic mistake for Jensen?" https://www.reddit.com/r/LocalLLaMA/comments/1xuget9/buying_hugging_face_was_it_a_strategic_mistake/ ; Microsoft patent application to train AI models on idle consumer GPUs with credits as reward https://www.reddit.com/r/LocalLLaMA/comments/1xtowe4/microsoft_files_a_patent_application_to_train_ai/ ; "Why is AI-generated language so hard to understand?" (arXiv 2610.29162v1) https://www.reddit.com/r/LocalLLaMA/comments/1xtux72/261029162v1_why_is_aigenerated_language_so_hard/ ; Cherry Studio / TiinyOS open-source licensing statement https://www.reddit.com/r/LocalLLaMA/comments/1xu9jdr/open_source_licensing_statement_on_tiinyos_and/ ; and a local world model turning images into interactive video (https://huggingface.co/lucidml/gta) https://www.reddit.com/r/LocalLLaMA/comments/1xtpc2v/im_releasing_a_local_world_model_ive_been/.

**Regulation anxiety surfaced twice in one day** — "Ai safety and our future. Could this affect running locally in the future without regulation?" and "The regulation of local AI could/should be viewed as the largest censorship implementation in the h[istory]" (both https://www.reddit.com/r/LocalLLaMA/comments/1xu4ysu/ and /1xu2mdo/), plus "US and China 'may' collaborate on AI. The jokes write themselves".

**Self-attribution is a running theme.** "New Paper -> Unless Told Otherwise, an Open Language Model Says OpenAI Made It" (https://www.reddit.com/r/LocalLLaMA/comments/1xtpqxm/) — an open model insists it was made by OpenAI, attributed by the author to contamination from OpenAI strings in the pre-training corpus. The comment thread is unusually sharp about the obvious confound: "/u/cpsnow: Doing a find/replace could alter the quality of the data set. For example, saying OpenAI is the company to released ChatGPT in 2023 is important chronological knowledge. You cannot just find/replace." One commenter reports the opposite result from adjacent work: "Results have been varied, but have often seen stealth models call themselves Claude by Anthropic more so than OpenAI."

---

## 4. Reddit — r/MachineLearning (18 in-window posts)

Coverage: 100 newest entries fetched, 18 in-window. The feed worked (no 403/429).

**An audit of Meta's TRIBE v2 brain-response model** is the strongest item of the day (https://www.reddit.com/r/LocalLLaMA/../r/MachineLearning/comments/1xuillf/ — https://www.reddit.com/r/MachineLearning/comments/1xuillf/does_metas_brainresponse_model_tribe_v2_actually/): the author ran classic mapping stimuli (checkerboard wedges/rings, hemifield flicker, moving dots, tone sweeps) through TRIBE v2 and fit the same models one fits to real fMRI, validating against a synthetic ground-truth control first. Results: **no retinotopic map (d=0.05, n.s.), no tonotopic map (ρ=−0.07, n.s., even with loudness controlled), but motion selectivity is sharp and lands precisely in MT+ (d=4.31, 52× enrichment over chance)**. The sharpest finding is the eccentricity result: it "looked null by default, but flipped to significant and 'correct' under three separate stimulus-geometry controls — a classic image-statistics confound masquerading as a positional code, not a real signature of position." Solo project, self-funded: https://jakubstrawa1.github.io/audit-multimodal-brain-response/

**Paper-venue mechanics dominated the rest of the feed:**
- "How to get desk-rejected at NeurIPS/ICML/ICLR" — the author traced every call for papers, author guide and ethics/LLM policy page since 2013 via Wayback snapshots and found that "Until 2023 all the rules were about the paper: page limit, anonymity, dual submission. Now you can get desk rejected for having no reciprocal reviewer, a co[…]" https://www.reddit.com/r/MachineLearning/comments/1xu08e7/how_to_get_deskrejected_at_neuripsicmliclr_d/
- "How should authors handle a suspected auto-generated review at ICLR?" — one reviewer gave a 2 with confidence 1 while others gave 3 with confidence 3; "Pangram flags the review as 100% AI", and all three listed weaknesses concern material deep in the appendix. https://www.reddit.com/r/MachineLearning/comments/1xtvipb/how_should_authors_handle_a_suspected/
- "What if NeurIPS, ICML, and ICLR capped accepted papers at 1,000 each?" https://www.reddit.com/r/MachineLearning/comments/1xugl6c/what_if_neurips_icml_and_iclr_capped_accepted/
- "How much does reviewer confidence matter in ICLR decisions?" and "Have people given up on ICLR reviews?" (no rebuttals filed across a batch of 10–12 papers) https://www.reddit.com/r/MachineLearning/comments/1xu3n5f/ and /1xtt0px/
- "How to post an AC-confidential comment on OpenReview for ICLR 2027?" and "CVPR 2027 Author enrollment form" (separate enrollment form required by the abstract deadline; late submission risks desk rejection, with no reminder sent) https://www.reddit.com/r/MachineLearning/comments/1xug0ym/ and /1xue879/

**Tooling and technique:**
- **UMAP 0.6** — new initialization, new optimizers, ~4× faster neighbour search via better use of PyNNDescent; "On 3 million arXiv papers it finishes in under 5 minutes, before UMAP 0.5 has even found its nearest neighbours." The seeded-run gap is explicit: "A seeded 0.5 run is single-threaded: 52 minutes, 12x longer." New *recursive initialization* lays out a coarse graph then refines it, "in a recursive tower of initializations". https://www.reddit.com/r/MachineLearning/comments/1xudaah/umap_06_new_initialization_new_optimizers_and/
- **mlxVS** — an Apache-2.0 port of NVIDIA's cuVS GPU nearest-neighbour algorithms (exact k-NN, k-means, NN-Descent k-NN graphs, CAGRA) to Apple Silicon via MLX, using cuVS's parameter names. On SIFT1M (985k × 128, L2, MacBook Pro M3 Pro, 18-core GPU / 12-core CPU): mlxVS CAGRA with degree 32 from a 64-NN graph builds in 10.4 s, and at itopk 64 reaches Recall@10 0.976 at 69,500 queries/s. https://www.reddit.com/r/MachineLearning/comments/1xtt5tx/mlxvs_cuvsstyle_gpu_nearestneighbor_search/
- **e-means** — an exponential-moving-average optimizer for mini-batch k-means, claiming to beat Lloyd's k-means in one-tenth the epochs. https://www.reddit.com/r/LocalLLaMA/../r/MachineLearning/comments/1xu92md/paper_emeans_outperforming_kmeans_in_onetenth_the/
- **A zero-cost curvature proxy for flow matching** — exact identity |dv|² = (ds)² + 4·s·s'·sin²(θ/2); E = (h/2)|v|θ predicts true next-step Euler error with median ratio 0.80–0.84 and across-unit log-correlation 0.91–0.92. bf16 + CFG 5 evaluation noise is ~1.7° between consecutive velocities and does not decrease with h; CFG multiplies it ~4×, so a raw-angle controller collapses to its minimum step. The first-step finding is explicitly post hoc. https://www.reddit.com/r/MachineLearning/comments/1xtq4vl/a_zerocost_curvature_proxy_predicts_euler_step/
- **Game world models: "the action labels are the bottleneck, not the video"** — VPT's ~2,000 h of contractor play labelled ~70,000 h of YouTube; MUSE trained on years of one studio's play with controller inputs kept; NVIDIA reportedly pulled inputs off streamers' on-screen controller overlays. https://www.reddit.com/r/MachineLearning/comments/1xtymuk/for_game_world_models_the_action_labels_are_the/
- **"AI 'slop' is a social judgement"** (Nature, https://www.nature.com/articles/s41562-026-02639-6) — "AI Slop isn't something you can find in the content. It's a social judgement, made when a community decides that some AI-generated content is unwanted." https://www.reddit.com/r/MachineLearning/comments/1xtour7/ai_slop_is_a_social_judgement_r/
- **Sharding vs. replicas across multiple GPUs**, with the community correcting a common misconception: "pooled GPU scheduling isn't magic VRAM merging — managing multiple cards doesn't automatically turn them into one big VRAM block any model can use." https://www.reddit.com/r/MachineLearning/comments/1xuc62q/sharding_vs_replicas_across_multiple_gpus_just/
- **Arc Tagger** — a small streaming text tagger that reads word-by-word from ASR or typed text and tags intent, dialog act, entities, numbers, PII, profanity, toxicity and safety risks mid-utterance. https://www.reddit.com/r/MachineLearning/comments/1xu548q/i_built_a_small_streaming_text_tagger_that_reads/
- **CoRL paper explorer** — 2,100+ robotics papers indexed 2017–2026 with TLDRs, project pages, code and arXiv links. https://www.reddit.com/r/MachineLearning/comments/1xtul3j/i_built_an_explorer_of_2100_robotics_papers/
- **EVA-02 fine-tune for neural video retrieval** — a 7-day sprint open-sourcing a video search engine by pose, clothing detail, camera angle and motion cadence, ignoring uploader metadata, in minimal VRAM. https://www.reddit.com/r/MachineLearning/comments/1xu1pg4/i_finetuned_eva02_in_a_week_to_build_a_neural/

---

## 5. Model and product releases in-window

| Product | Date | Evidence | Source |
|---|---|---|---|
| **Gemini Decision 1 + Gemini Decisions API** | Nov 11, 2026 | Google's own blog: "Evaluate up to 1,000 yes/no, choice, and rubric-scoring questions in a fast, single pass across text, images, audio, video, and PDFs." Authored by Min Choi (PM) and Felix Yu (Principal Scientist), Google DeepMind. | https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/ |
| **Gemini Decision 1 free on Google AI Studio** | Nov 11, 2026 | HN thread, 15 pts | https://aistudio.google.com/docs/decisions-api · https://news.ycombinator.com/item?id=50457853 |
| **MACaQ** (Huawei, Apache 2.0) | Nov 11–12 | arXiv 2611.10649 (from the Nov 9 batch, *not* a Nov 12 arXiv paper), GitHub, HF collection; HN 126 pts | https://github.com/huawei-csl/MACaQ |
| **JT-4.1 Flash 236B A21B** (China Mobile) | Nov 11, 2026 | AA changelog `modelAdded`, Intelligence Index 18.95 | https://artificialanalysis.ai/changelog |
| **Anthropic IPO** | Nov 12, 2026 | ipo.anthropic.com, HN 569 pts | https://ipo.anthropic.com/us/ |
| **Praxis-1** (Runway, Apache 2.0) | in-window | 27B MoE video+action diffusion transformer; HF collection, GitHub, LeRobot, vLLM-Omni | https://github.com/runwayml/praxis-1-oss |
| **MetaEncoder v1** (Meta) | in-window | contrastively fine-tuned from Muse-Glimmer-30B; arXiv 2610.11316 | https://github.com/facebook/meta-encoder-eval |
| **Raon-1 Nano** (KRAFTON, Apache 2.0) | in-window | 3.1B dense hybrid, official GGUF, ik_llama.cpp PR #2903 | https://huggingface.co/KRAFTON/Raon-1-nano-gguf |
| **BotPsy-0.8B** (Tether) | in-window | on-device agentic assistant on Qwen3.5-0.8B | https://huggingface.co/qvac/BotPsy-0.8B |
| **KQuant MLX packs** (Nace) | in-window | Qwen3.5-4B/9B/27B/35B/Flash-Next | https://huggingface.co (Nace org) |
| **NVIDIA CEO transition** | Nov 12, 2026 | NVIDIA newsroom announcement; Colette Kress named interim | https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition |
| **GLM-5.3 (Low)/(Max) on SambaNova; Kimi K3.1 Pro on Databricks** | Nov 11, 2026 | AA changelog `hostModelAdded` ×3 | https://artificialanalysis.ai/changelog |

No established lab published weights on Hugging Face in-window (see §1.6).

---

## 6. Negative signals and disputes

1. **BenchLM re-scored without changing methodology.** The #1 moved +2.45 (91.41 → 93.86) and the #2 +1.22 on snapshot `2026-11-12-5d3bc0727c73e61f` with `methodologyVersion` still `bench-align-v5.8-2026-09-30`. The #1's 90% interval widened at the bottom, 76.84 → 79.51, upper bound still 100.00, `evidenceStatus` still "estimated". A point-estimate board whose leader jumps 2.45 points in a day while the methodology string is unchanged is producing motion that does not correspond to a capability change. https://benchlm.ai/api/data/leaderboard
2. **AA's Intelligence Index is bit-identical for a third day** while its components rotate underneath — Intelligence Index v5.0.1 updated; frontiercode-2-0, hle-diamond, AA-3D and omniscience v1.1 removed after 2026-11-10. Frozen headline numbers are not evidence of a frozen evaluation. https://artificialanalysis.ai/changelog
3. **The Decision Index "specialist beats generalist" story is narrow.** Claude Haiku 5.5 (Max) at 76.49 and GPT-6 Luna (Max) at 75.67 still outrank every dedicated decision model; the best specialist (Drex Max v1.1, 72.62) is *below* both. The real story is cost: 60× cheaper per task for a 4-point deficit. https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index
4. **Anthropic's own safety alarm fired days before its IPO** — the trigger is "AI is doing enough of Anthropic's research to roughly double how fast its models improve", and the filing explicitly bases the call "on what we expect from future models and our overall rate of progress, rather than on what we have observed from current models." The HN comment thread's objection is the same one the filing makes against itself: "How can these two statements both be true?" https://news.ycombinator.com/item?id=50456668
5. **United Airlines is banning AI agents from booking** — on cost grounds, not safety: it refuses to be "another, and potentially even more powerful, intermediary" paying for flight-search scraping. A deployment channel closing for economic reasons. https://www.cbsnews.com/item?id=50458900
6. **NVIDIA's CEO transition is the day's top story by a wide margin** (1495 + 1205 + 373 + 168 + 72 pts across five threads) with the cause reported as a second affair and the timing coinciding with a 46% stake sale. Industry-restructuring news, not AI research, but it dominates the AI-adjacent conversation.
7. **Peer review is being attacked from the inside.** ICLR reviewers being flagged as AI-generated (Pangram at 100%), reciprocal-reviewer rules now a desk-reject condition since 2023, and an entire batch of 10–12 papers with no rebuttals filed. The measurement layer of the field is degrading while its model layer accelerates. https://www.reddit.com/r/MachineLearning/comments/1xtvipb/ and /1xu08e7/
8. **A benchmark result reversed under a control.** The TRIBE v2 eccentricity effect — apparently "significant and correct" — flipped to null under three stimulus-geometry controls, revealing an image-statistics confound masquerading as a positional code; retinotopy and tonotopy were absent entirely. Self-funded solo project, not peer reviewed. https://www.reddit.com/r/MachineLearning/comments/1xuillf/
9. **Self-attribution contamination in open models.** An open model asserting it was made by OpenAI, attributed to OpenAI strings in the pre-training corpus — with the thread correctly noting that a naive find/replace would destroy genuine chronological knowledge (ChatGPT was released by OpenAI in 2023). The fix is not trivial, which is why the result is interesting. https://www.reddit.com/r/LocalLLaMA/comments/1xtpqxm/
10. **Huawei's MACaQ raises a sanctions-compliance question in its own comment thread** — several HN commenters ask whether shipping its tools is "material support to sanctioned entities", noting the distinction between Commerce and Treasury sanctions. Separately, Huawei's top-three-starred repos are all quantization pipelines, and MACaQ is the third (after SINQ for weights and KVarN for KV cache). https://news.ycombinator.com/item?id=50458166
11. **Community quant claims are KL-divergence, not task accuracy** — the KQuant author states this explicitly ("Lower means closer to the original, not a task-accuracy score"), and the MACaQ-vs-Unsloth numbers in the same thread are KL as well. No accuracy benchmark accompanies the strongest quantization claims of the day.
12. **Two ordering-invariance reports disagree.** Decido-1 claims answers flip on option reordering 4.8% of the time against Jev's reported 14.6%, but the comparison is against the competitor's published figures and the 0.8B–26B open models are new. https://www.reddit.com/r/LocalLLaMA/comments/1xtocct/
13. **The ARC-AGI-2 result without LLMs (37% on Kaggle, 4 pts / 0 comments on HN)** and the "Compress any LLM 3x in one click, near-lossless, vLLM successor" post (4 pts / 0 comments) both got essentially no traction — noteworthy as a negative engagement signal on two otherwise striking claims.
14. **The flow-matching curvature-proxy result is explicitly post hoc** — the author states "The hypotheses were not pre-registered in a file; the first-step finding is post hoc."
15. **Operational note (not a claim):** Task 2 was completed in the main agent from cached artifacts under `tmp/nov12/t2/` rather than by a second delegated subagent, because the data had already been fetched. No additional web requests were issued for this task.

---

## 7. Trend

Yesterday the board was static and the community was busy. Today the board moved a lot without a release, and the community moved away from models entirely.

Two things are genuinely new. First, **the Decision Index became readable**, and what it reveals is that a distinct class of tiny specialised models has formed underneath the frontier: twenty decision models, the cheapest at $0.0000137 per task, the best of them (Drex Max v1.1, 72.62) beating the general-purpose specialist tier by 11 points over its own predecessor at half the cost — while the general LLMs still head the table. Community labs are now training directly against this ladder: one author's open 26B/4B-active decision model claims to beat Jev 1.13 on both accuracy and option-ordering invariance, and the AA roster itself has advanced to "Jev 1.14". The leaderboard and the open-source community are iterating on the same artifact within the same day.

Second, **the commercial frame hardened**. Anthropic filed an IPO and, three days before it, disclosed that it had tripped its own AI-capability alarm — on a forecast basis, explicitly not on observed behaviour. United Airlines closed the AI-agent booking channel for economic reasons, not safety ones. NVIDIA changed its chief executive in the middle of it. The day contained no frontier model release of note beyond a Google decisions API for multimodal yes/no scoring, and AA's Intelligence Index sat bit-identical for a third consecutive day.

What moved under the surface was the *plumbing of measurement*. BenchLM re-scored its leader by 2.45 points with an unchanged methodology string and a still-unvalidated estimated score; AA kept its headline fixed while rotating four index components out from under it. Meanwhile the peer-review layer of the field was actively degrading — automated-reviewer detection at ICLR, desk-reject rules for missing reciprocal reviewers, and a batch of papers with no rebuttals at all — and a solo audit showed a brain-encoding model's flagship spatial result reversing under three controls.

The through-line is that **evaluation is the weakest link in the stack, and it is weakest in the direction of manufacturing agreement.** The community spent its day building better quantizers (four distinct efforts, with two of them claiming 20–65% lower KL divergence) and better tools (UMAP 0.6, mlxVS, Praxis-1), while the boards that certify those tools were re-baselining underneath everyone and the venues that certify the papers were losing reviewers to automation. The gap between "better open models" and "we can tell which is better" widened today.
