# Findings — Task 2 (community buzz, benchmarks, leaderboards, releases), 2026-10-29

Window: 2026-10-28 17:00 UTC → 2026-10-29 17:30 UTC (plus carry-over of items that first appeared in the Oct 28 evening pull but were not yet accumulated).
Method: HN Algolia API (`search_by_date`, tags=story, points>30, 100 hits/page) — HTTP 200; leaderboard JSON endpoints (BenchLM, FMRT) — HTTP 200; BenchLeader HTML; Artificial Analysis HTML + article pages; Hugging Face model API; Reddit **old-style RSS only** (JSON 403, all Redlib mirrors currently Anubis-challenged or 503/410). 3 vendor/blog pages fetched directly.
Note on provenance: every number below is either quoted from a primary page I fetched this session or taken from a live JSON/HTML snapshot in `tmp/`. Vendor claims are labelled as such.

---

### Hacker News

**Mistral open-weights Mistral Large 4 — 646 points / 165 comments (Oct 29 14:13)** — Mistral released the weights of **Mistral Large 4 ("Le Chonk")**, a **1-trillion-parameter natively multimodal** model (arch: `Mistral-Large-4-1T-A52B`, i.e. ~52B active), previewed earlier in October and now re-released after **three more weeks of reinforcement learning**. Vendor numbers, self-reported: **FrontierCode 2.0 (Cognition, private) 19.7%** — the open-weight leader; **Artificial Analysis Coding Agent Index 48%**, effectively tied with GLM-5.3 but using **47% fewer tokens per task**; **Terminal-Bench 4.0 41%, +13 pp over the preview, open-weight leader**, with **30% fewer output tokens**. Three reasoning modes (Low / Medium / High-default) replace the earlier "None" mode. Surge Code blind pairwise human preference: preferred over GLM-5.3, Kimi K3 and DeepSeek V4.1 Flash, ranked behind only Claude Opus 5.5. Trained from scratch on European infrastructure; positioned as the flagship "sovereign AI" open model.
Source: https://mistral.ai/news/mistral-large-4-oss/ · HN: https://news.ycombinator.com/item?id=50284255

**"Gemini 4 Carbon" launch thread — 989 points / 790 comments (Oct 28 17:01)** — the launch post itself, now the single highest-scoring AI story of the window (up from 264 points in the Oct 28 evening snapshot; the thread grew ~3.7× in a day). Sub-thread **"Gemini 4 Carbon is the new #1 on the Artificial Analysis Intelligence Index v5" — 304 points / 225 comments (Oct 29 12:41)**. The AA article (fetched this session) confirms the #1 with the *v5* scale: **Intelligence Index v5 score 59** for Gemini 4 Carbon (high reasoning), ahead of **Claude Opus 5.5 (max, default fallback) 58** and GPT-6 Astra (max) 57. It leads **4 of 9** Index evaluations (HLE-Diamond, Terminal-Bench-Science, AA-Omniscience, AutomationBench-AA). Coding agent index: **59** with Antigravity CLI, 3 points behind Claude Code + Claude Opus 5.5 (max, 62); **second on Terminal-Bench 4.0 (64%) and FrontierCode v1.1 (51%)** behind Opus 5.5 at 56%. AA-Briefcase **1609 Elo** (+126 over Gemini 4 Argon) but still behind Kimi K3.1 Pro (1678), Muse Wonder (1659) and Grok 4.7 (1638). Cost per Index task **$7.76** vs Opus 5.5 $10.04 (−23%) but **1.2× GPT-6 Astra ($6.25)**; 123k output tokens per task, 29% fewer than Opus 5.5's 173k. AA-Omniscience v1.1: **54** vs Opus 5.5 48 and Argon 46, with accuracy 58% and hallucination rate 11% (vs 50% for both Opus 5.5 and GPT-6 Astra). Context **1M tokens**; multimodal in (text/image/video/speech). Pricing **$4/$20 per MTok** standard with a **50% launch discount, no confirmed end date**, cached input 95% off ($0.20/M). Not yet publicly available — gated rollout to selected users.
Source: https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1 · https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/

**"Claude Code regularly sends each background agent's transcript to its model" — 530 points / 215 comments (Oct 29 03:33)** — a gist by Flamerix AI that also documents **Claude Code burning ~15–20% of tokens on a 3-word status line** (`agent_summary`), with a Bun preload to disable it. The security/privacy framing (per-background-agent transcript transmission) dominated the thread; the token-waste finding is the practical takeaway. Gist has 149 stars, 8 forks, 4 revisions.
Source: https://gist.github.com/flamerix-ai/c3905705cc4205e5de3011fa2e74efce · HN: https://news.ycombinator.com/item?id=50289418

**"Qwenputer: A functioning, deterministic RISC-V CPU inside Qwen3.5" — 663 points / 139 comments (Oct 29 00:25)** — a **stock Qwen 3.5 4B** with a **32-bit RISC-V core (RV32IM + Zba + small bignum unit) compiled into 11 extra layers**, using the model's own **Gated DeltaNet layers as RAM**. Each CPU instruction is emitted as ADDR/VAL/STEP tokens, so the CPU executes *inside the forward pass* with no external runtime, tool call or sandbox. Author-reported: passes the official `riscv-tests`, programs match **qemu**, and it has run **18 million instructions free-running without a single error**; runs C and MicroPython. Throughput ~**3,200 CPU tokens/s** on an L4. Checkpoint is **18.8 GB**, roughly double base Qwen (mostly zero padding), and needs a small `RvChat` driver to boot the firmware. Blog dated Oct 22; surfaced in the local-AI community this week. Also the top Reddit thread in the window ("Someone built a 32-bit RISC-V CPU directly inside Qwen's model weights").
Source: https://divagr.com/blog/qwenputer · HN: https://news.ycombinator.com/item?id=50282838

**"Dayjob: Tax — evaluating AI agents on 50 professional tax assignments" — 248 points / 164 comments (Oct 28 15:46)** — Surge AI benchmark built from real tax-professional workflows: **50 environments, 1,789 files**, eight areas of practice, three-layer expert review (correctness/completeness/solvability). Scoring is **pass@1 at a 95% rubric threshold** — an attempt passes only if it satisfies ≥95% of criteria (calculations, supporting evidence, consequential issues, completed deliverable). **Results are brutal: Claude Sonnet 5.5 leads at 10.8%**, followed by **Claude Fable 5.1 at 9.6%** and **Claude Opus 5.5 at 9.2%**. The benchmark deliberately tests initiative (uncovering issues the client did not raise) and handling of conflicting/insufficient records. Companion sub-benchmarks: TaxCalcBench (return accuracy), TaxLab (ask the simulated taxpayer for missing info and file).
Source: https://surgehq.ai/blog/dayjob-tax · HN: https://news.ycombinator.com/item?id=50275626

**"The Agent SDK" (Cursor) — 139 points / 130 comments (Oct 28 14:02)** — Cursor released the framework it uses internally for its managed agents (Bugbot, Security Reviewer, Rollouts): define agents **as code**, template them or point a coding agent at the docs, then `agent-sdk deploy`. The thread was largely a debate about SDK fragmentation in the agent-tooling layer.
Source: https://cursor.com/blog/agent-sdk · HN: https://news.ycombinator.com/item?id=50273731

**"Nvidia Nemotron 3.5 Transcribe: open ASR for 40 languages" — 126 points / 23 comments (Oct 28 15:17)** — NVIDIA + HF release, blog dated Oct 28. One open-weight checkpoint doing transcription, diarization, translation and audio QA: **transcribes 40 languages, translates 31 of them to/from English, attributes speakers in 13**, handles up to **one hour** of audio and **up to 8 speakers**. Architecture: speech encoder + **hybrid Mamba–Transformer MoE**, **30B total / ~4B active** per token. Vendor-reported leaderboard positions: **AA-WER 2.8%, tied for first among open-weight models** (vs 24B active for the model it ties) — about one-sixth the active parameters; on **AA-AgentTalk** (half the AA-WER index) **1.8% WER vs 2.3%** for the next-best open-weight model. HF Open ASR Leaderboard: **English 5.33% average WER (first among open-weight)**, **multilingual 4.62% mean WER across seven languages**, **long-form 10.98% mean WER**. Medical case study: fine-tuning cut WER on held-out speakers by **45.8% relative** to the best prompt. Open **Granary v2** data pipeline + fine-tuning recipes.
Source: https://huggingface.co/blog/nvidia/nemotron-transcribe-granary · HN: https://news.ycombinator.com/item?id=50275128

**"Zombie stats: Where the numbers AI quotes come from" — 79 points / 37 comments (Oct 29 15:06)** — Trakkr research page tracing where commonly cited AI statistics originate; the source page **was not reachable from this host (connection failed)**, so only the title and engagement are recorded here. Treat the underlying numbers as unverified until the page is read.
Source: https://trakkr.ai/trakkr-research/zombie-stats · HN: https://news.ycombinator.com/item?id=50290283

**"Perspectiva Kogui: A message on artificial intelligence from the Kogui people" — 117 points / 99 comments (Oct 29 11:29)** — a first-principles/indigenous-perspective essay on AI, notable for its engagement ratio (comments ≈ 85% of points, i.e. argument rather than announcement).
Source: https://sonidoselva.com/perspectiva-kogui · HN: https://news.ycombinator.com/item?id=50287359

**Security items with AI-adjacent relevance (context only, not LLM research):** "Zero click, silent, remote Android DoS" (273 pts / 156 c) https://smsofdeath.com/ · "Forging a Microsoft Edge Full Chain with Logic Bugs Only" (212 / 37) https://blog.orange.tw/posts/2026-10-the-last-proof-of-human-craft-browser-full-chain/ · "Why is this fingerprinting script creating bioweapons?" (1500 / 281).

**Non-AI context items in the same window (signal calibration only):** Apple's git still trusting compromised eMudhra certificates (1170/402) · ICE spying operation evidence (1164/986) · StackOverflow now under 1000 questions/month (714/618) · MacBook Pro with PROLED XDR (606/1048) · Emacs turns 50 (504/222) · Kentucky man first humanist granted religious exemption from AI (477/513) · Git for the US Code (444/266) · DoorDash to acquire Instacart $17B (228/415) · "For the first time ever, Google Search is less than 50% of Alphabet's revenue" (135/78).

---

### Reddit (r/LocalLLaMA, r/MachineLearning)

**Data-access caveat:** reddit.com JSON returns **HTTP 403**, the Redlib mirrors `safereddit.com` (503), `redlib.catsarch.com` (429), `redlib.perennialte.ch` (410) and `redlib.privacyredirect.com` (Anubis JS challenge) are all currently unusable, and the old-style `/r/<sub>/.rss` feed returns 200 but **carries no score or comment counts**. Therefore the Reddit items below are **titles + dates + permalinks only — no engagement numbers**, which is a real regression versus the Oct 28 run (which had Redlib scores). Do not quote Reddit engagement for today.

r/LocalLLaMA — items dated 2026-10-27 → 2026-10-29:
- **"Mistral Large 4 (Le Chonk) is now open weight"** (2026-10-29, u/Few_Painter_5) — https://www.reddit.com/r/LocalLLaMA/comments/1xil3qy/mistral_large_4_le_chonk_is_now_open_weight/
- **"Apsara conference: Qwen4 next week"** (2026-10-29, u/rerri) — https://www.reddit.com/r/LocalLLaMA/comments/1xif6lf/apsara_conference_qwen4_next_week/ — vendor-announcement-driven speculation.
- **"Qwen4 1M context window"** (2026-10-29, u/brainExploded) — https://www.reddit.com/r/LocalLLaMA/comments/1xi9mf2/qwen4_1m_context_window/
- **"Artificial Analysis Intelligence Index v5 (major update)"** (2026-10-28, u/ResearchCraft) — https://www.reddit.com/r/LocalLLaMA/comments/1xhuk5b/artificial_analysis_intelligence_index_v5_major_update/
- **"Someone built a 32-bit RISC-V CPU directly inside Qwen's model weights so it can execute i…"** (2026-10-28, u/LatentSpacer) — the Qwenputer thread; https://www.reddit.com/r/LocalLLaMA/comments/1xhmo1q/someone_built_a_32bit_riscv_cpu_directly_inside/
- **"A small step for man, a GIANT step for LOCAL AI"** (2026-10-28, u/HolidayBit143) — https://www.reddit.com/r/LocalLLaMA/comments/1xhubiw/a_small_step_for_man_a_giant_step_for_local_ai/
- **"Gemma 5 models soon ??"** (2026-10-28, u/KokaOP) — https://www.reddit.com/r/LocalLLaMA/comments/1xhjn9d/gemma_5_models_soon/
- **"Mac Studio M5 Ultra 512gb Starts at $22,299.00 USD"** (2026-10-28, u/Boomfrag) — https://www.reddit.com/r/LocalLLaMA/comments/1xhu3b0/mac_studio_m5_ultra_512gb_starts_at_2229900_usd/
- **"IT vendor lists massive $60 million AI supercomputer on eBay with 9,600 Nvidia A100 GPUs and 4,200 A…"** (2026-10-28, u/giveen) — https://www.reddit.com/r/LocalLLaMA/comments/1xhsvmy/it_vendor_lists_massive_60_million_ai/
- **"Dirt cheap GPUs coming next year"** (2026-10-28, u/sayamss) — https://www.reddit.com/r/LocalLLaMA/comments/1xhep6w/dirt_cheap_gpus_coming_next_year/ (already reported 2026-10-28)
- **"I am a King, but local 😂"** (2026-10-27, u/perelmanych) and **"Debunking Cohere's claim of Qwen 3.8 Flash Next uploading to Alibaba remote URL"** (2026-10-27, u/feelspeaceman) — the Qwen-telemetry thread continues to generate counter-claims; second-hand, unresolved.

r/MachineLearning — new since Oct 28:
- **"Old-school classifiers are still generally better than Jevons [P]"** (2026-10-29) — https://www.reddit.com/r/MachineLearning/comments/1xjq7f3/oldschool_classifiers_are_still_generally_better/ — likely a direct response to the widely-shared "Jevons paradox" AI-benchmark claim.
- **"Leaving a job to pursue a PhD [D]"** (2026-10-29) — career-signal discussion, not technical.
- **"[R] Taking EmbeddingGemma-2 (577M) from Rank #26 to #1 on the MAEB audio benchmark by fi…"** (2026-10-28) — https://www.reddit.com/r/MachineLearning/comments/1xhw6u5/r_taking_embeddinggemma2_577m_from_rank_26_to_1/
- Standing items unchanged from the Oct 28 pull: "The Paper Reviewing Process is Now in Critical Condition [D]" (2026-10-27) · "ICLR 2027 is still handing out desk rejects [N]" (2026-10-25) · "Papers with Code is now open-source [P]" (2026-10-27) · "An interactive map of all 9,110 NeurIPS 2026 papers" (2026-10-21) · "Ψ-0.6: Adaptive Streams of Thought in a Unified Vision-Language World Model [R]" (2026-10-27).

---

### Leaderboards & Benchmarks

#### Artificial Analysis — Intelligence Index v5 (live, Oct 29)
Current state per the AA models page fetched this session: **78 models evaluated**, of which **23 open weights**. Leaderboard text on the page: *"The models with the highest Intelligence Index score of 59, out of 78 models evaluated"* → **1. Gemini 4 Carbon (High) (59), 2. Claude Opus 5.5 (Max, Default Fallback) (58)**; open-weights line: *"highest Intelligence Index score of 32… 1. DeepSeek V4.1 Flash 1017 (Max) (32), 2. GLM-5.3 (Max) (32), and 3. MiMo…"* with **23 open-weight models out of 78 total**. This confirms the v5 re-baseline numbers from the Oct 28 report (Gemini 4 Carbon 59.43 → display 59; Opus 5.5 58.41 → 58) and confirms the **open-weights ceiling is still ~32 while the proprietary ceiling is 59 — a 27-point gap**, now measured on a scale where 60% of the Index is private/held-out.
Source: https://artificialanalysis.ai/models

#### BenchLM — `https://benchlm.ai/api/leaderboard` (HTTP 200)
Metadata: `lastUpdated: 2026-10-29`, mode `bench-align-v5`, methodology `bench-align-v5.8-2026-09-30`, `sourceSnapshotId: 2026-10-29-598e80f34326e96c` (prior: `2026-10-28-ab40e64bebac5827`). **50 rows ranked** (the Oct 28 file also had 50; the 230-model headline counter from Oct 28 is not in this JSON).

| Rank | Model | Score | Evidence | In/Out $ per MTok |
|---|---|---|---|---|
| 1 | **Gemini 4 Carbon** (Google) | **88.38** | **estimated** | 2 / 10 |
| 2 | Claude Opus 5.5 | 86.29 | supported | 4 / 20 |
| 3 | GPT-6 Astra | 86.07 | supported | 10 / 50 |
| 4 | GPT-6.1 Sol | 85.27 | supported | 2 / 10 |
| 5 | Gemini 4 Argon | 82.28 | supported | 2 / 10 |
| 6 | Claude Sonnet 5.5 | 81.84 | supported | 2 / 10 |
| 7 | Claude Fable 5.1 | 81.08 | supported | 10 / 50 |
| 8 | Claude Fable 5 | 80.78 | supported | 10 / 50 |
| 9 | GPT-6.1 Terra | 80.46 | estimated | 1 / 5 |
| 10 | Claude Opus 5 | 79.68 | supported | 5 / 25 |
| 11 | GPT-6 Sol | 77.97 | supported | 2 / 10 |
| 12 | GPT-5.6 Sol | 74.83 | supported | 4 / 20 |
| 13 | **Kimi K3.1 Pro** (Moonshot AI) | **74.61** | estimated | 2 / 10 |

**Critical caveat on the new #1:** Gemini 4 Carbon's row is `evidenceStatus: "estimated"` with a **90% interval of 78.66 – 98.10** (`scope: source-pattern`, `sourcePattern: objective-and-preference`, 12 calibration families, `patternIntervalAvailable: true`, but `validatedFutureTruth: false` and `coverageValidated: false`). **The interval spans rank 1 through roughly rank 12–15 of the visible table**, so BenchLM's own uncertainty policy ("Point-estimate order; conditional ranges do not establish rank confidence") means the "new #1" claim is *not* statistically supported. Kimi K3.1 Pro is likewise `estimated`.
**Roster churn vs Oct 28:** six new entries — `Gemini 4 Carbon`, `Kimi K3.1 Pro`, `Hy4 preview`, `Gemini 3.5 Flash`, `GPT-5.3 Codex`, `Ornith-1.5-397B` — and six dropped (`MiniMax M3.1 Flash`, `Muse Spark Open`, `Qwen3.8-Flash-Next`, `MiMo-V2.6-Flash`, `Step 5 Preview`, `MiMo-V2.6-Pro`). Two of the three strongest open-weight community models (MiniMax M3.1 Flash, Qwen 3.8 Flash Next) fell out of the top-50 window entirely — a roster effect, not necessarily a performance drop.
Source: https://benchlm.ai/api/leaderboard

#### FMRT — `https://fmrt.ai/api/leaderboard.json` (HTTP 200)
Metadata: `generatedAt: 2026-10-29T03:18:32.650Z`, **motions 515** (prior: `2026-10-28T12:54:13.492Z`, 510). **The snapshot now genuinely advances daily** — the three-day frozen-stamp problem flagged in earlier cycles is resolved.

| Rank | Model | BT rating (Oct 28 → Oct 29) |
|---|---|---|
| 1 | Claude Opus 5.5 | 1894.1 → **1910** (+15.9) |
| 2 | Claude Fable 5.1 | → **1891.8** |
| 3 | **Kimi K3.1 Pro** | → **1768.3** (new in the top 3) |
| 4 | Gemini 4 Argon | → **1645.9** |
| 5 | Grok 4.7 | → **1637.9** |
| 6 | Kimi 3 | 1620.8 → 1630.7 (+9.9) |
| 7 | Muse Wonder | → **1628.4** |
| 8 | GLM 5.3 | 1589.5 → **1615.7** (+26.2, biggest mover) |
| 9 | GPT-6 Astra | 1513.1 → **1529.6** (+16.5) |
| 10 | Muse Spark Open | 1500 → **1517.7** (+17.7) |
| 11 | DeepSeek V4.1 Flash 1017 | 1504.9 → **1495.7** (−9.2, drops to 11) |
| 12 | Qwen 3.8 | 1456.3 → **1477.4** (+21.1) |

Because the roster gained 5 motions, **almost every model moved up** — GLM 5.3 +26.2, Qwen 3.8 +21.1, MiniMax M3 +20.0, Muse Spark Open +17.7, GPT-6 Astra +16.5. Read rating *deltas* as mostly an artefact of the growing motion pool, not as per-model improvement; only **DeepSeek V4.1 Flash 1017 (−9.2) and DeepSeek V4 Pro 0813 (−15.5)** are genuine downward moves. Notably, **Gemini 4 Carbon is absent from the FMRT table** — a new top proprietary model has not yet been played.
Source: https://fmrt.ai/api/leaderboard.json

#### BenchLeader — `https://www.benchleader.com/` (HTML, 29 Oct 2026 snapshot)
Index (334 models / 245 benchmarks / 43 publishers, 78 feeding the index; rebuilt daily, run starts 22:03 UTC): **1. Claude Opus 5.5 (max) 69.1 ▼0.1 · 2. GPT-6 Astra (max) 68.2 ▼0.1 · 3. GPT-6.1 Sol (max) 67.2 ▼0.1 · 4. Claude Fable 5.1 (max) 67.0 ▼0.1 · 5. Claude Fable 5 66.6 ▲0.1 · 6. Gemini 4 Argon (high) 65.9 ▼0.1 · 7. Claude Opus 5 (max) 65.5 ▼0.8 · 8. GPT-5.6 Sol 65.4 ▼0.2 · 9. NEW Gemini 4 Carbon (high) 65.1 — · 10. Claude Sonnet 5.5 (max) 64.9 ▼0.2**. **28 configurations sit within Claude Opus 5.5's margin of error.** **Best open-weights LLM (October 2026): Kimi K3**; best for coding: Claude Opus 5.5; best for agents: **Claude Sonnet 5.5**; best cheap: Gemini 3.7 Flash; fastest: Muse Spark 1.2. Release watch: **Gemini 4 Carbon (high), released 28 Oct 2026, #17, 65.1**; GPT-6.1 Terra (max, 26 Oct, #19, 64.8); **Kimi K3.1 Pro (Moonshot, released 23 Oct, #63, 61.3)**; Nemotron 3.5 Bolt E4B 4GB and Nemotron Super VL 3.5 NVFP4 awaiting results. Price moves: **Gemini 4 Argon (high) input $2.00/M → $4.00/M (+100%)**; **Qwen3.7 (max) cached input $0.50/M → $0.33/M (−34%)**.
Note the **three-way disagreement**: BenchLeader puts Gemini 4 Carbon 9th (65.1) behind Opus 5.5, BenchLM puts it 1st (88.38, but *estimated*), AA puts it 1st (59). Different aggregator, different answer — and the two that rank it #1 rank it #1 with a very wide or "not publicly available" caveat.
Source: https://www.benchleader.com/

---

### Releases, Open Weights & Quantization

- **Mistral Large 4 weights released** (2026-10-29) — HF repo `mistralai/Mistral-Large-4-1T-A52B`, **1,146 likes**, 278 downloads at snapshot time (repo created 2026-09-30 for the preview). Quantized derivatives already circulating: `unsloth/Mistral-Large-4-1T-A52B-GGUF` (created 2026-10-29), `ggml-org/Mistral-Large-4-1T-A52B-GGUF` (2026-10-28), `unsloth/…-FP8` (2026-10-28), `ggml-org/…-NVFP4-GGUF` (2026-10-28), `amd/Mistral-Large-4-1T-A52B-Quark-MXFP4` (2026-10-13), `mistralai/Mistral-Large-4-1T-A52B-NVFP4` (2026-10-15). **The 1T/A52B checkpoint is being quantized by the community within hours of release** — the fastest third-party quantization turnaround observed so far in this tracking window.
  Source: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B
- **Hugging Face trending (Oct 29 snapshot)** — `deepseek-ai/DeepSeek-V4.1-Flash-1017` still **#1 (trending 872, 131,062 downloads, 3,724 likes, created 2026-10-17)**; **`Nanbeige/Nanbeige4.3-33B` #2 (trending 747, 9,655 downloads, 759 likes, created 2026-10-24)** — a new Apache-2.0 33B teacher model for smaller agents; `RecursiveSI/flint` #3 (556); `XHToken/Spark-X2.6-4B` #4 (466); `tencent/Hy-SimulMT-30B-A3B-FP8` #5 (448); `LiquidAI/LFM3-1.7B` #6 (448, created 2026-10-23); `MiniMaxAI/MiniMax-M3.1-Flash` #7 (425); `ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF` #8 (413, 1,578,937 downloads); `baidu/Unlimited-OCR-2` #11 (354, created 2026-10-26); `nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B` #12 (353). Compared with the Oct 24 snapshot (DeepSeek-V4.1-Flash trending 1607 → **872**), **the trending leader's score has fallen by ~46%** while its download count rose to 131k — i.e. the leaderboard's attention is rotating to newer repos while the download volume keeps compounding.
  Source: https://huggingface.co/api/models?sort=trendingScore&limit=25

---

### Community pulse (qualitative)

1. **Open-weight competition has re-tightened at the top of two different scales.** Mistral Large 4 takes the open-weight coding lead (FrontierCode 2.0 19.7%, Terminal-Bench 4.0 41%) while Kimi K3.1 Pro sits #3 on FMRT (1768.3) and BenchLeader's "best open-weights LLM" is still Kimi K3 — two different open models, two different boards, both ahead of everything else open.
2. **Measurement distrust is now the default posture.** BenchLM's own #1 is flagged `estimated` with a 19-point-wide interval; BenchLeader reports 28 configurations inside the leader's margin of error; AA's v5 rebuild moved every score; FMRT's ratings drift +10–26 points purely because the motion pool grew. The community is reading leaderboards as *ranges*, and the Oct 28 Reddit thread on AA v5 confirms the audience cares about methodology, not just ranks.
3. **Professional-work benchmarks are exposing a 10% ceiling.** Dayjob: Tax puts every frontier model between 9.2% and 10.8% pass rate — a far more sobering framing than "which model is smartest", and directly comparable to the arXiv-side finding that harness and evaluation design dominate measured capability.
4. **Hardware cost and supply chatter keeps rising** ("dirt cheap GPUs", $60M eBay supercomputers, Mac Studio at $22,299, "Gemma 5 soon"), while the model side converges.
5. **Telemetry/trust concerns persist** — the Claude Code background-transcript gist (530 pts) and the continuing Qwen-telemetry debunk threads on Reddit are the same theme: what does the agent send home, and does the vendor's own documentation say so.

---

### Data caveats
- **Reddit engagement numbers are unavailable today** (JSON 403, every Redlib mirror Anubis-blocked/503/410, RSS carries no scores). This is a coverage regression versus 2026-10-28.
- **BenchLM's #1 is an estimate with an interval spanning ~12 ranks** — never quote the ordering as a fact.
- **FMRT deltas are contaminated by a growing motion pool** (510 → 515); only the two DeepSeek declines are meaningful.
- **Three aggregators disagree on Gemini 4 Carbon's rank** (AA #1, BenchLM #1 estimated, BenchLeader #9) — report the disagreement rather than picking one.
- **Trakkr "Zombie stats" page was unreachable** from this host; not read, only logged.
- Mistral, NVIDIA, Surge, Cognition, AA and HF numbers are **vendor- or author-reported**; FrontierCode 2.0 is a *private* benchmark and cannot be independently audited.
