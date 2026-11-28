# Findings — Nov 20, 2026 cycle (Task 2): community, leaderboards, releases

Window: **2026-11-19 17:28 UTC → 2026-11-20 17:28 UTC** (Friday cycle, 2026-11-20 17:28 UTC).

All primary-source artifacts are cached under `tmp/nov20/t2/` (Algolia HN API `q_*.json`, Reddit via Redlib mirrors `reddit/parsed_*.json`, artificialanalysis.ai homepage + changelog + Decision Index + leaderboard JSON `aa/`, benchlm.ai leaderboard JSON `aa/benchlm.json`, huggingface.co models API `hf/`, openai.com RSS `vendor/openai.xml`, vendor pages `vendor/`).

All quantitative claims are **author-, vendor- or community-reported and were not independently reproduced**.

Budget used this run: 4 web searches, 3 web fetches (within the 10 / 3 cap).

---

## A. The two biggest AI stories of the window are both *research claims*, not product launches

### 1. Anthropic employee claims a general proof of the Riemann Hypothesis — the largest AI thread on HN in the window

The single highest-scoring AI story of the window is a **number-theory proof claim**: "Anthropic employee claims general proof of the Riemann Hypothesis" — **1,374 points / 931 comments** on Hacker News, by a wide margin the largest AI thread of the day.

The primary source is a self-published PDF by **Levent Alpöge** (`alpo.ge/remark.pdf`), who states he worked with Claude and believes he has discovered a proof of the Riemann Hypothesis, extending to the **Generalized Riemann Hypothesis** and — with more time — the Extended Riemann Hypothesis. He writes that "Claude and I have also formalized the arguments without assumptions", that the formalization is finished as a Lean (proof assistant) development distributed as a 14-part `lean.tar.gz` archive, and that he believes the argument will be "massively simplified". The narrative is explicitly collaborative rather than model-led: "I guided us to the right situation … and then Claude began to leave me in awe."

The concrete mathematical hook is stated in the document: in Stepanov's resolution of Riemann over function fields one uses a divisor involving *multiplicity*, which is hard to reproduce over the integers; the new idea is to chain theta lifts so that the **length of the chain of theta lifts, "in view of each mimicking √multiplicity", was X**. The document also logs the working timeline (e.g. 11/15/26 entries on Hecke-character averaging, Iwasawa towers, GRH; 11/16/26: GRH).

**This is a claim, not a verified result.** No independent mathematical verification exists; the PDF is not peer-reviewed; the formalization is stated but not audited. The fact-checker should treat every mathematical assertion in it as unverified.
Source: https://alpo.ge/remark.pdf
Source: https://news.ycombinator.com/item?id=50574968
Source: https://lobste.rs/s/cmifpg/levent_alpoge_claims_proof_riemann
Source: https://www.reddit.com/r/MachineLearning/comments/1y0z7ab/levent_alpge_claims_to_have_found_a_proof_of_the_riemann/

### 2. Claude Fable 5.2 solves two open problems in black-hole physics — Anthropic's own research post

**536 points / 256 comments** on HN, pointing at Anthropic's research page. Anthropic states that Claude Fable 5.2 "has solved two open problems in theoretical physics", both concerning black holes and the search for a theory of quantum gravity:

- **The Hawking-Page transition** — a calculation set up by Hawking and Page in 1983 that had never been completed. Claude's result shows that the sudden transition associated with black-hole formation persists even where spacetime no longer has a definite shape (i.e. beyond globally hyperbolic geometry).
- **The modular bootstrap** — Claude found the exact limit of the simplest version of a technique used to test candidate quantum-gravity theories.

Anthropic's own framing is careful: the work proceeds via holographic duality (describing a gravitational model universe in terms of a non-gravitational quantum theory on its boundary), and it presents the preprints as available. Note the date: the post is **published 2026-11-17**, so it crossed the wire in this window but predates the window's news cycle; the 2026-11-19 cycle already logged the underlying claim from a community source. What is new here is the **primary Anthropic research page and its two-problem structure** (Hawking-Page + modular bootstrap), not the existence of the claim.
Source: https://www.anthropic.com/research/claude-black-hole-physics
Source: https://news.ycombinator.com/item?id=50563148

### 3. Frostbite: an AI-designed CPU architecture — hardware co-design becomes the third research axis

**472 points / 269 comments** on HN. Architect Labs (Architect Silicon) presents Frostbite as "a new CPU architecture discovered, designed, and verified end-to-end by AI", published **2026-11-18**.

The technical core is a switch from shared mutable state to **interaction nets**: a program is a graph of nodes, computation is rewriting connected node pairs, every rewrite is local, every dependency is explicit, and every value has exactly one owner (linearity), so active rewrites never overlap and can be applied in any order or all at once with the same result. The claimed payoff: on **25 workloads, of which 15 were held out until final evaluation**, a **4.59× performance-per-watt** multiple against a modern silicon-proven superscalar (dual-issue, in-order) CPU core. The company's AI systems "autonomously iterated over the compiler, ISA, architecture, microarchitecture, RTL, verification, and final GDS", and the resulting architectural primitives reportedly include novel hardware implementations and runtime features.

Two caveats worth carrying forward: the comparison baseline is an **in-order dual-issue** core, not a modern out-of-order one, and the 4.59× figure is **company-reported** on a workload set the company chose. This is the clearest signal yet that frontier-model capability is moving beyond software into architecture discovery — and it arrived the same week as OpenAI's own "Advancing chip design with OpenAI models" (2026-11-18).
Source: https://architectlabs.com/blog/frostbite
Source: https://news.ycombinator.com/item?id=50572503

---

## B. A third leaderboard appeared: the Models Engineering Index, and Gemini 4 Neon took #1

**"Gemini 4 Neon is the new #1 on the Models Engineering Index"** — **360 points / 238 comments** on HN.

The **Models Engineering Index (MEI)** is a third-party composite, published at `git-aarvin.github.io/mei`, that scores models on **16 coding benchmarks**, adjusted for benchmark difficulty and for missing results so models average 50; cost and token use are adjusted the same way and expressed relative to the typical model (1×).

Full ranking as captured (model, MEI index, cost×, tokens×):

| # | Model | Vendor | Index | Cost | Tokens |
|---|---|---|---|---|---|
| 1 | Gemini 4 Neon | Google | 68.4 | 2.1× | 0.8× |
| 2 | GPT-6.2 Astra | OpenAI | 67.1 | 2.1× | 0.37× |
| 3 | Claude Fable 5.2 | Anthropic | 66.7 | 5.8× | 1.4× |
| 4 | Claude Opus 5.5 | Anthropic | 61.5 | 4.2× | 1.5× |
| 5 | GPT-6.2 Sol | OpenAI | 60.6 | 0.54× | 0.3× |
| 6 | Gemini 4 Carbon | Google | 59.1 | 2.4× | 0.91× |
| 7 | Claude Sonnet 5.5 | Anthropic | 58.8 | 3.2× | 2.6× |
| 8 | Gemini 4 Hydrogen | Google | 56.0 | 1.5× | 1× |
| 9 | Qwen4-Max | Alibaba | 51.9 | 9.5× | 1.2× |
| 10 | GPT-6.1 Terra | OpenAI | 51.7 | 0.8× | 1.1× |
| 11 | Muse Wonder | Meta | 49.7 | 2.3× | 0.79× |
| 12 | Kimi K3.1 Pro | Moonshot | 49.4 | 1.4× | 0.62× |
| 13 | Muse Wonder Full | Meta | 49.3 | 2.1× | 0.69× |
| 14 | DeepSeek V4.1 Flash | DeepSeek | 45.9 | 0.15× | 1.3× |
| 15 | Muse Ember | Meta | 44.4 | 0.061× | 0.73× |
| 16 | Claude Haiku 5.5 | Anthropic | 44.3 | 0.53× | 1.6× |
| 17 | Grok 4.7 | xAI | 43.6 | 4.1× | 0.77× |
| 18 | **Tencent Hy4** | Tencent | **42.8** | **0.48×** | **1×** |
| 19 | GLM-5.3 | Z.ai | 42.0 | 2.3× | 1.4× |
| 20 | Inkling 2 Small | Thinking Machines | 39.3 | 0.53× | 2.7× |
| 21 | MiMo-V2.6-Pro | Xiaomi | 39.1 | 0.14× | 0.85× |
| 22 | MiniMax M3.1 Flash | MiniMax | 37.1 | 0.26× | 2.4× |
| 23 | GPT-6 Luna | OpenAI | 35.9 | 0.064× | 0.52× |
| 24 | Mistral Large 4 | Mistral | 35.7 | 1× | 0.93× |

The interesting structural fact is that **MEI and the Artificial Analysis Intelligence Index disagree about the winner**: AA's Intelligence Index still has Claude Fable 5.2 first (64.5636) and Gemini 4 Neon third (61.3982), while MEI puts Neon first. The likely reason is visible in the table — Neon costs **2.1×** the typical model, while Fable 5.2 costs **5.8×**. A difficulty-adjusted engineering composite and a general capability index are measuring different things, and the "cost per task" axis of MEI is where open-weight models still look strong: Hy4 at 0.48× cost and 1× tokens sits at #18, MiMo-V2.6-Pro at 0.14× cost, Muse Ember at 0.061× cost.

Source: https://git-aarvin.github.io/mei/
Source: https://news.ycombinator.com/item?id=50568130

---

## C. Leaderboard state: Artificial Analysis frozen for a fourth day, but BenchLM **re-baselined its entire methodology**

This is the most consequential technical nuance of the cycle and it is easy to misread.

### Artificial Analysis Intelligence Index — frozen for a fourth consecutive day

Comparing the 2026-11-20 homepage extract against the 2026-11-19 extract: **47 common model rows, 0 changed, every index value bit-identical.** The board stands as:

1. Claude Fable 5.2 (Max, Default Fallback) 64.5636
2. GPT-6.2 Astra (Max) 62.1388
3. Gemini 4 Neon (Xhigh) 61.3982
4. Gemini 4 Carbon (High) 60.0257
5. Claude Opus 5.5 (Max) 59.1060
6. GPT-6.2 Sol (Max) 57.2576
7. Claude Sonnet 5.5 54.5413
8. Gemini 4 Hydrogen (Xhigh) 53.9192
9. GPT-6.1 Terra 51.3265
10. Kimi K3.1 Pro 46.4526 (best open weights)

Also present: DeepSeek V4.1 Flash 1017 32.5896, GLM-5.3 31.6534, Inkling 2 Small 30.6287, Tencent Hy4 34.5552 (proprietary — **still no hy4-flash row**).

**Extraction artefact to note:** the 2026-11-19 extract carried 17 extra *lab-aggregate* rows (Alibaba, Anthropic, DeepSeek, Google, InclusionAI, Institute of Foundation Models, Kimi, Meta, Mistral, NVIDIA, OpenAI, Reflection, SpaceXAI, Tencent, Thinking Machines, Xiaomi, Z AI), each mirroring its best model's index. The 2026-11-20 extract does not contain them. This is a **presentation change, not 17 delistings** — the underlying model rows are unchanged.

### Artificial Analysis Decision Index v2.1 — unchanged and byte-identical for a fourth consecutive day

29 rows, 0 added, 0 removed, 0 values changed. Top: Claude Haiku 5.5 (Max) 76.4922, GPT-6 Luna (Max) 75.6745, d1.2-ultra 74.8460 (Liquid AI), Drex Max v1.1 72.6242, SubQ Snap 1.2 72.5805, GLiDE v1.2 72.5152, Mammoth 27B 71.3606, d1 60.7814, Clef-Omni 57.7500.

### The BenchLM re-baseline — the one leaderboard signal that moved materially

BenchLM's snapshot went from `2026-11-19-fafc64db116474c0` to `2026-11-19-fdd0bf64025b1efb`, and — critically — **the per-row `methodologyVersion` moved from `bench-align-v5.8-2026-09-30` to `bench-align-v6.0-2026-11-19` on all 50 rows.** The top-level `mode` stayed `bench-align-v5`, so this is a *re-baseline inside* the v5 mode, not a new mode.

Two policy fields changed with it:
- **Uncertainty policy**: from "Retrospective residual ranges; sparse source patterns may use a pooled range without pattern-specific coverage validation" → **"Posterior-calibrated 90% intervals from category-first 2PL-IRT and publisher variance; conditional ranges do not establish simultaneous rank confidence."**
- **Evidence status**: `supported` went from 30/50 to **45/50**, `estimated` from 20/50 down to **5/50**.

**Consequence for interpretation: score and rank movements on BenchLM today are methodology artefacts, not model regressions.** The roster churned too — **9 in, 9 out**: in GLM-5.3, Gemini 4 Neon, Hy4, Hy4 preview, Inkling 2 Small, MiMo-V2.6-Flash, MiMo-V2.6-Pro, MiniMax M3.1 Flash, Step 5 Preview; out Claude Opus 4.6, GPT-5.3 Codex, GPT-5.6 Luna, Gemini 3.5 Flash, Gemini 3.6 Flash, Grok 4.5, Muse Spark 1.1, Muse Spark 1.2, dots3-note Preview.

41 of 50 rows moved. The largest movements: Qwen4 Max 64.37 → 74.50 (**+10.13**, rank 41 → 17), Muse Wonder Full 70.58 → 77.20 (+6.62), DeepSeek V4.1 Flash 1017 63.85 → 69.90 (+6.05), Muse Wonder 66.02 → 71.20 (+5.18), Gemini 3.8 Flash 64.38 → 67.70 (+3.32), GPT-6.1 Terra 77.10 → 80.40 (+3.30, rank 15 → 9). Downward: Claude Opus 4.7 65.66 → 63.20 (rank 24 → 42), GPT-5.2 Pro 65.27 → 63.30 (rank 25 → 41), Gemini 3.1 Pro 62.92 → 61.00 (rank 37 → 50), GPT-5.4 64.16 → 62.70 (rank 31 → 46), Claude Opus 5.5 85.82 → 82.70 (rank 3 → 6).

New top of board: Claude Fable 5.2 93.2, GPT-6.2 Astra 91.1, Gemini 4 Carbon 88.1, Gemini 4 Neon 86.3, GPT-6 Astra 83.2, Claude Opus 5.5 82.7, GPT-6.2 Sol 82.6, GPT-6.1 Sol 80.7, GPT-6.1 Terra 80.4.

**BenchLM rank is still not a sort of overallScore** (Astra 91.1 and Sol 82.6 are adjacent in rank; Claude Opus 5.5 82.7 outranks GPT-6 Astra 83.2). Per BenchLM's own `orderingMeaning`, an estimated row backed by fewer than two source families never ranks above a row within 2 points below it, and conditional ranges do not establish rank confidence.

Source: https://benchlm.ai/api/data/leaderboard
Source: https://artificialanalysis.ai/
Source: https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index

### Artificial Analysis changelog — zero entries dated 2026-11-19 or 2026-11-20

The changelog carries **73 visible entries** (identical count to the 2026-11-19 capture, with identical `dateLa`/`type` sets), and the newest entry is still dated **2026-11-18**. So AA published nothing new in either the 11-19 or the 11-20 window.

What *is* dated 2026-11-20 inside the payload are **seven `removeAfter: "2026-11-20"` expiry markers**, not new entries:
- **Decision Index v2.1** — "six evaluations, including AA-Paperclip, EvalSafe-O*NET-AA and AA-Symmetry, scored on the Decision Score, with language models answering with probabilities" (change type `updated`, on the Muse evaluation).
- **When2Call** replacing accuracy as the scored metric on LiveCodeBench, Global-MMLU-Lite, CWE-Bench-AA, CyberGym-E2E-AA and AA-Paperclip.
- **An independent audit has flagged possible errors in the dataset of this evaluation. We are reviewing its findings** — a `underReview` marker on one evaluation.

Interpretation: these are banners scheduled to expire today, so **Decision Index v2.1 and the When2Call substitution were already live yesterday** and their expiry is not itself news. The Decision Index numbers being byte-identical for a fourth day means the v2.1 re-scoring did not visibly move any row in the captured payload.

---

## D. Releases: Tencent Hy4 open weights, and a swarming of community inference stacks

### Tencent Hy4 weights released (2026-11-19/20)

The dominant r/LocalLLaMA story of the window. Hy4 is a **natively multimodal MoE, 770B total / 49B active, 1M context**, released with weights, GGUF quants and a system card:
- GitHub: https://github.com/Tencent-Hunyuan/Hy4
- Weights: https://huggingface.co/tencent/Hy4 (created 2026-10-29, last modified 2026-11-20, 89 dl / 104 likes at capture)
- GGUF: https://huggingface.co/AngelSlim/Hy4-GGUF
- System card: https://hy.tencent.ai/Hy4_system_card.pdf

**Hy4-flash** (created 2026-11-17) reached **3,949 dl / 505 likes** at capture, up from 2,053 dl / 307 likes the previous day — the strongest open-weight community signal of the cycle. It sits at **#6 on HF trending (score 169.5)**.

An **AMA with the Tencent Hy team and Shunyu Yao** ran in-window: **147 points / 288 comments** — the most-commented thread of the window, covering how the models were built, efficiency work and everyday workflows.
Community threads: "Tencent Hy4 (flagship multimodal MoE A49B/770B) released" 330/65; "Hy4-flash first impression: it's got AMAZING coding taste" 245/71 (early, hours-long datacenter impression, explicitly cautious about advanced problem solving); "Basalt 0.5.0: Tencent Hy4 Flash with 1M context and vision, 84 to 172 tok/s" 90/36.

Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0vaey/tencent_hy4_flagship_multimodal_moe_a49b770b/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y15w4a/tencent_hy_team_shunyu_yao_here_ask_us_anything/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0ofce/hy4flash_first_impression_its_got_amazing_coding/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0iwrg/basalt_050_tencent_hy4_flash_with_1m_context_and/
Source: https://huggingface.co/tencent/Hy4
Source: https://huggingface.co/tencent/Hy4-flash

### Other in-window releases and projects

- **CCORE-WEB-CODER** — "drops this weekend"; fully open: 4,146 Three.js scenes, 3,445-scene and 3,918-asset variants, trained into 4B models runnable locally. 206/48.
- **AMD × Unsloth** — "Unlocking the World's First NPU for Unsloth Desktop". 178/20.
- **Reverb-TTS** — open-source zero-shot voice cloning running in the browser on WebGPU. 109/23.
- **Qwen3.5 2B Dense converted to Mixture of Experts** — community conversion work; the author reports fixing dead experts (which were unused, not dead — fixed by adding maths, science and multilingual data) and improving conversion speed; the dead-expert fix also removed code limitations. 59/8.
- **Qwen3.8-27B "super adapter"** — one rank-96 LoRA claimed to improve three agent harnesses. 25/12.
- **WeMM-Video by Tencent** — 2B / 4B / 9B / 35B-A3B. 43/6.
- **Ideogram 4.6** released, "soon opensource". 127/22.
- **SillyTavern v1.19.1**. 43/7.
- **SenseNova-Loop in 8GB VRAM**. 35/13.
- **Qwen3.8-Flash-Next** — 2.5k prefill, 47 token gen, single ARC B70. 44/20.
- **Transformers PR** streams MoE experts from SSD, running a 180B model on a 32 GB Mac. 23/5.
- **Unsloth is preparing to release 4 new models**. 50/36.
- **Higurashi-ai/Haru-4B** took the **#1 HF trending** slot (7,323 dl / 4,547 likes, trending score 309), ahead of `harness-hub/Qwen3.8-27B-pi-adapted` (285.5) and `Qwen/Qwen3.8-27B` (233.5, 6.45M dl / 20.7k likes).

Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0uiph/ccorewebcoder_drops_this_weekend/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0ioi5/amd_x_unsloth_unlocking_the_worlds_first_npu_for/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y13mj0/reverbtts_opensource_zeroshot_voice_cloning/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y109xw/qwen35_2b_dense_converted_to_mixture_of_experts/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y16sam/qwen3827b_super_adapter_one_rank96_lora_that/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y10d49/wemmvideo_by_tencent_2b_4b_9b_35ba3b/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0jw4n/ideogram_46_released_soon_opensource/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0xs1f/sillytavern_v1191_released/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0xq84/sensenovaloop_in_8gb_vram/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y0u854/qwen38flashnext_25k_prefill_47_token_gen_single/
Source: https://www.reddit.com/r/LocalLLaMA/comments/1y18qbs/unsloth_is_preparing_to_release_4_new_models/

### Hugging Face: 64 new repos in-window, but no new frontier-lab repo

The in-window freshness slice contains **64 new repos**; almost all are personal or derivative uploads with 0 downloads. The only structurally interesting in-window repo is **`inclusionAI/LingSante-Pulse-1.0`** (created 2026-11-20 08:39 UTC, MIT) — a **physiological-signal encoder** (ECG/time-series, `pipeline_tag: feature-extraction`, 1280-sample windows at 128 Hz, emits `cls` and `patch_mean` features of dim 256, with fixed channel-condition vectors), requiring a separate `lingsante_pulse` inference package. This continues InclusionAI's pattern of releasing specialised encoders alongside general LLMs.

Notably, **there is still no new frontier-lab repository** in the window; `tencent/Hy4` and `tencent/Hy4-flash` were created earlier (2026-10-29 / 2026-11-17) and merely gained traffic.
Source: https://huggingface.co/inclusionAI/LingSante-Pulse-1.0
Source: https://huggingface.co/api/models

---

## E. Anthropic closed its IPO; the market did not cooperate

**Anthropic closed its IPO on 2026-11-20**: **1,127,000,000 shares of Class A common stock at $83.00 per share**, **including the full exercise of the underwriters' option for an additional 147,000,000 shares**, plus the closing of a concurrent private placement. Gross proceeds at the offer price ≈ **$93.5bn**. This follows the pricing on 2026-11-18.

The market reaction was the story: "**Global stock markets slump as Anthropic's record IPO fails to stem AI sell-off**" — 149 points / 162 comments on HN. Also in-window: "**No Bailout for the AI Bubble, Anthropic IPO Protesters Say**" 50/29, and "**Anthropic's Australian data centre overwhelmingly opposed by residents**" 17/14.

The juxtaposition is the point worth carrying: a record-scale AI IPO priced at ~$1.5T closed into a broad market drawdown in which AI names sold off, and the AI-sentiment cycle of the day was dominated by *research* claims rather than capital-raising or product launches.
Source: https://www.anthropic.com/news/ipo-close
Source: https://news.ycombinator.com/item?id=50574383
Source: https://news.ycombinator.com/item?id=50564282
Source: https://news.ycombinator.com/item?id=50569872

---

## F. Community, legal and institutional signals

- **ICLR deletes AI-generated reviews and desk-rejects AI reviewers' papers** — 60/19 on r/MachineLearning, the loudest governance thread of the window. Alongside it: "ICLR 2027 Desk Rejection" 46/49 and "AAMAS 2027 reviews will be out today" 19/47. Peer review is being attacked as an AI vector, in public, by the venue itself.
- **4th Amendment** — "Court: 4th Amendment Disallows Use Of AI-Generated 'Probable Cause'" 67/19.
- **AI coders** — "AI came for the coders. Understanding why tells us who's next" 59/73; "Epic Games Turns to AI Coding for the Unreal Engine" 46/54.
- **Policy debate** — "Should governments slow frontier AI? Jacob Coxon and Robin Hanson debate" 110/232; "What Comes After AGI?" 139/266.
- **Sovereign/compute** — "Anthropic employee claims general proof of the Riemann Hypothesis" aside, "Anthropic's Australian data centre overwhelmingly opposed by residents" 17/14 is the concrete instance of the compute-vs-consent tension.
- **Culture** — "An FBI agent called a Claude user about his chats" 31/29; "Traumatized teens sue school, cops after Doritos bag triggers AI gun alert" 15/1 (the follow-up to the 2026-11-19 "Black high school students sue" story); "ChatGPT for SNES" 110/33; "Apple is building an AI agent" 15/11; "Thomas Nagel on AI Consciousness" 14/1; "Llms.txt and MCP didn't move the needle" 27/18.
- **Paper-community crossover**: "**Language Models Can Rewrite Their Own Weights**" — 80/25 on HN (arXiv 2611.21885, v2). The paper reports that an open **27B** model, given its own weights, graded answers and the ability to run itself, diagnoses its own failure and rewrites its own weights with **no gradients and no training**, becoming **6.6 points more accurate on 490 unseen problems**; it submits an edit only when its own tests support it and accuracy rises monotonically over eight consecutive sessions; it repairs a **damaged copy of itself** (locating the corrupted matrix and rewriting it without reading the undamaged weights), lifting the copy from **7% to 70%** on six image benchmarks it never saw — 83% of the undamaged model's — with the repair found on text math problems alone; and the ability **emerges with scale** (2B makes no edit, 4B and 9B break themselves, only the 27B works on itself, by comparing hidden states on finished vs. truncated answers and weakening the direction separating them). The claim is that the wall between training and inference is a limit of our tools, not a property of intelligence. **Author-self-reported; not reproduced.**
Source: https://news.ycombinator.com/item?id=50577265
Source: https://arxiv.org/abs/2611.21885
Source: https://www.reddit.com/r/MachineLearning/comments/1y0y3rs/iclr_is_deleting_ai_generated_reviews_and_dr_ai/
Source: https://news.ycombinator.com/item?id=50567735
Source: https://news.ycombinator.com/item?id=50569519
Source: https://news.ycombinator.com/item?id=50564366

---

## G. Hacker News volume and AI share

Algolia `search_by_date` sweep, calendar days (UTC), AI-relevance by the established keyword filter:

| Day | Stories | AI-relevant | AI share |
|---|---|---|---|
| 2026-11-15 | 795 | 198 | 24.9% |
| 2026-11-16 | 1219 | 332 | 27.2% |
| 2026-11-17 | 1321 | 399 | 30.2% |
| 2026-11-18 | 1271 | 371 | 29.2% |
| 2026-11-19 | 1164 | 343 | 29.5% |
| 2026-11-20 (to 17:28 UTC) | 766 | 204 | 26.6% |

Rolling 24-hour windows: **2026-11-19 17:28 → 2026-11-20 17:28 UTC: 1,149 stories, 321 AI-relevant = 27.9%**, against the preceding equivalent window's 1,194 / 343 = **28.7%**.

**The AI-share plateau has held for six consecutive days in the 24.9–30.2% band** and did not break in this window either, despite two record-sized AI threads. The 2026-11-20 figure is a partial day (17:28 UTC) and should not be compared directly to full days.

---

## H. Vendor posts

- **OpenAI (official RSS)**: 5 posts dated 2026-11-19, none dated 2026-11-20. The 2026-11-19 posts are: "How OpenAI's Performance Factory keeps ChatGPT fast", "Deploying Daybreak Red", "See PR scans in action", "Explore the Codex Security Plugin", "Get started with Daybreak Blue". No model release in the window.
- **Anthropic newsroom**: 2026-11-20 IPO closing announcement (see §E); research page unchanged since 2026-11-17 ("Claude solves two open problems in the physics of black holes", plus "Updating our coordinated vulnerability disclosure policy timelines" on 2026-11-16).
- **Liquid AI**: newest post 2026-11-16 (d1.2) — nothing in-window.
- **Microsoft Research**: newest post 2026-11-16 — nothing in-window.
- **METR**: newest update 2026-11-05 — nothing in-window.
- **Mistral**: newest news item 2026-11-05 — nothing in-window.
- **Qwen blog**: client-side rendered; no readable post could be confirmed in-window — **absence is not evidence of no release**.
- **Tencent**: the tencent.com AI landing page returns no dated items (988 bytes); the Hy4 evidence comes from GitHub, Hugging Face and the system card.

Source: https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast
Source: https://openai.com/business/learn/deploying-daybreak-red
Source: https://www.anthropic.com/news/ipo-close
Source: https://www.liquid.ai/news
Source: https://www.microsoft.com/en-us/research/blog/
Source: https://metr.org/blog/
Source: https://mistral.ai/news

---

## I. Coverage caveats

- **Reddit**: direct `.json` retrieval returned HTTP 403. Coverage was recovered via Redlib HTML mirrors: **24 in-window r/LocalLLaMA posts** (page 1), **22 more** (page 2) and **9 r/MachineLearning posts** — full recovery of both subreddits for this window, unlike 2026-11-19 where r/MachineLearning could not be recovered at all. Redlib parses carry canonical permalinks and were treated as authoritative.
- **Artificial Analysis row extraction is heuristic.** Effort tiers produce duplicate rows (each model appears at "(Max, Default Fallback)" and bare), so row count ≠ model count. The 17 lab-aggregate rows present on 2026-11-19 and absent on 2026-11-20 are a presentation change, not delistings. "Latest change" leaderboard entries carry `idx: null` and are excluded from index comparisons.
- **BenchLM score and rank movements today are methodology artefacts** (bench-align-v5.8-2026-09-30 → bench-align-v6.0-2026-11-19, new uncertainty policy, evidence status shifted from 30/20 to 45/5 supported/estimated). Any comparison of today's BenchLM numbers to yesterday's is invalid without re-normalising.
- **All MEI figures are third-party and self-published**; the difficulty adjustment, the missing-result handling and the 16-benchmark choice are the author's, and the site asks for a GitHub star rather than publishing a formal methodology paper.
- **The Riemann Hypothesis proof is an unverified claim.** The PDF is the sole primary source, no peer review has occurred, and the Lean formalization is stated but unaudited. Treat every mathematical assertion as unverified.
- **Frostbite's 4.59× perf/watt is company-reported**, measured by Architect Labs against an in-order dual-issue baseline on a workload set the company selected (15 of 25 workloads held out).
- **JS-rendered vendor pages are inconclusive, not negative** (qwen.ai, hy.tencent.ai, tencent.com AI page).
- HN points and comment counts are snapshot values and drift.
