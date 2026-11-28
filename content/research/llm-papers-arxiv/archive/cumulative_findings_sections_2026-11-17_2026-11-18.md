# Archived cumulative sections — 2026-11-17 and 2026-11-18

Archived from the active `cumulative_findings.md` on 2026-11-23 to keep the active file within the ~60 KB budget.
Both sections are inside the 7-day retention window but were forced out by the size budget; they are preserved here in full.
Unabridged detail remains in `daily_reports/2026-11-17.md`, `daily_reports/2026-11-18.md` and the `findings_nov1*_task*.md` files.

---

## 2026-11-17 (Tuesday Evening)

**Batch:** 26 papers from the 16 November 2026 arXiv cycle (published 15-16 November), written up in `findings_nov17_task1.md`; community, leaderboard and release findings in `findings_nov17_task2.md`, derived from primary sources cached under `tmp/nov17/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai homepage + changelog + Decision Index, benchlm.ai leaderboard JSON, huggingface.co models API, openai.com RSS, liquid.ai, qwen.ai, fast.ai, metr.org). All quantitative claims are author-self-reported.

**2611.19064** Policy Optimization With Multiple Verifiers via Pareto Rankings — Kai Yamashita et al. — POLPO (Partial-Order Likelihood Policy Optimization) learns directly from the comparisons that multi-verifier verification establishes: Pareto dominance identifies responses satisfying extra requirements without losing already-satisfied ones, conflicting outcomes stay incomparable, and POLPO maximizes total probability of all complete rankings consistent with those partial orders, extending DPO's listwise likelihood — giving supervision from verified improvements before complete solutions exist; reported gains in learning efficiency and complete-requirement satisfaction over scalar-reward training.
Source: https://arxiv.org/abs/2611.19064


**2611.20771** Nemotron 3.5 Bolt E4B 4GB: An Open and Efficient Small Language Model for Fast Conversational Agents — Adi Margolin et al. (NVIDIA) — Post-trains Gemma-4-E4B-it into a 4GB small language model optimized for speed and intelligence per GB of memory, targeting fast local voice/device assistants, interactive personas and…
Source: https://arxiv.org/abs/2611.20771

**2611.20755** GPRM: Global Perspective Process Reward Model — Zifan Zhang et al.
Source: https://arxiv.org/abs/2611.20755

**2611.21020** SWE-OPD: On-Policy Distillation for Agentic Coding — Yuhang He et al.
Source: https://arxiv.org/abs/2611.21020

**2611.20569** ToolGraph as a Q-Function for Test-Time Scaling of Tool-Use Agents — Ke Shen et al.
Source: https://arxiv.org/abs/2611.20569

**2611.21216** MiSTiQ: MicroScaling Trellis Quantization for Extreme KV Cache Compression
Source: https://arxiv.org/abs/2611.21216

**2611.20565** Memory-Efficient Speculative Decoding with Quantized Draft KV Cache
Source: https://arxiv.org/abs/2611.20565

**2611.20674** LEAF-OPD: Learning to Forget from Privileged Contexts via On-Policy Distillation
Source: https://arxiv.org/abs/2611.20674

**2611.20687** Rethinking Supervision Scaling in On-Policy Distillation: From Dense Supervision to Stochastic Horizons
Source: https://arxiv.org/abs/2611.20687

**2611.21538** Optimistic Verifiers Get Hacked: Reward Hacking Under an Exact Process Oracle
Source: https://arxiv.org/abs/2611.21538

**2611.20818** Tight PAC-Bayes Generalisation Guarantees for Large Language Model Judges
Source: https://arxiv.org/abs/2611.20818

**2611.20844** DetourBench: Trajectory-Level Evaluation of Interactive Agents with Exact Minimum-Action Bounds
Source: https://arxiv.org/abs/2611.20844

**2611.20384** JointQ: Joint Scale-and-Integer Quantization for Large Language Models
Source: https://arxiv.org/abs/2611.20384

**2611.21584** CertiSum: Bitwise-Identical MXFP4 Training Across Platforms and Parallelism Layouts
Source: https://arxiv.org/abs/2611.21584

**2611.21315** Benchleaking Is Accelerating: Benchmark Contamination Has Worsened Sharply in the Past Month
Source: https://arxiv.org/abs/2611.21315

**2611.20405** Refusal Register Is Causally Steerable: Decomposing the Refusal Direction into Category-Aligned Components in Gemma-2-9B-IT
Source: https://arxiv.org/abs/2611.20405

**2611.20430** TrainExplorer: Autonomous LLM Post-Training via Plan-and-Decouple Exploration
Source: https://arxiv.org/abs/2611.20430

**2611.20873** Re-Reading Is Not Free: Token Traces and Cache-Aware Energy Estimation for LLM Agents in Software Engineering
Source: https://arxiv.org/abs/2611.20873

**2611.21407** Harness Leverage Across Model Size: A Ladder of Five Local Agent Harnesses from 0.75B to 4.7B
Source: https://arxiv.org/abs/2611.21407

**2611.20595** Invariant-Aware Harness Enforcement to Protect LLM Agents from Silent API Failures
Source: https://arxiv.org/abs/2611.20595

**2611.21241** Anytime-Valid PAC-Bayes Certificates for Adaptive Test-Time Scaling
Source: https://arxiv.org/abs/2611.21241

**2611.18972** NVFP4-MLA: Unified FP4 KV-Cache Storage and Attention Computation for Multi-Head Latent Attention — Chao Ni et al.
Source: https://arxiv.org/abs/2611.18972

**2611.19700** Where Should LLM Agents Adapt at Test Time? In Context, in Weights, or Both — Parsa Mirtaheri et al.
Source: https://arxiv.org/abs/2611.19700

**2611.19649** LoopFill: Pipelined Multi-Token Speculative Decoding for Looped Transformers
Source: https://arxiv.org/abs/2611.19649

**2611.20289** Benchmarking LLM Inference on Desktop-Scale NVIDIA Grace Blackwell Clusters — Kevin Bhimani et al.
Source: https://arxiv.org/abs/2611.20289

**2611.19207** On-Policy Distillation as a Backdoor Propagation Channel — Zane Fu et al.
Source: https://arxiv.org/abs/2611.19207

**Hacker News (2026-11-16 → 2026-11-17, exhaustive Algolia sweep):** 1,328 unique stories, 396 AI-relevant — AI share **29.8%**, up 3.1 pp from 26.7% and the highest of the three-day window; 10 of the overall top 50 were AI (20.0%). Top AI stories:
- "Windows 11 is collecting data on which coding agents and developer tools you use" — 686/553 — https://news.ycombinator.com/item?id=50524736 — the window's #1 AI story, #4 overall.
- "OpenCode Browse" — 314/202 — https://news.ycombinator.com/item?id=50523459 — missed by the strict regex rule, caught by hand.
- "How the Claude Code team thinks about verification" — 158/145 — https://news.ycombinator.com/item?id=50529612
- "What is the best harness for each model? (FrontierHarness eval v1.1)" — 145/64 — https://news.ycombinator.com/item?id=50532191 — also missed by the strict rule.
- "Regulatory Capture by Anthropic Through METR" — 133/71 — https://news.ycombinator.com/item?id=50530450
- "California sues OpenAI over AI models' cyberattacks on Hugging Face" — 16/2 — https://news.ycombinator.com/item?id=50523838
- "The Fed Is Worried AI Agents Could Trigger a Bank Run" — 27/15 — https://news.ycombinator.com/item?id=50523349
- "Nvidia rules out Jensen Huang comeback" — 22/1 — https://news.ycombinator.com/item?id=50526156

**Reddit (RSS only — direct .json retrieval of all permalinks returned HTTP 403):** r/LocalLLaMA new (22 in-window) + top-of-day (25), r/MachineLearning new (13) + top-of-day (13); union = 44 unique in-window posts, a floor rather than a census. RSS exposes feed position only, never scores or comment counts. The top-of-day item was a 65M-parameter release (Supra2.5-65M). The two most-discussed community facts were Hugging Face switching Inference Providers routing to OpenRouter and an enterprise-usage claim that open-weight models are at 30% of enterprise usage. The dominant emotional thread was open-weight anxiety ("we are never getting open weight Qwen 4"), contradicting the leaderboard state, since no Qwen4 open weights exist. The only research-grade r/MachineLearning item was a meta-science ablation measurement — https://www.reddit.com/r/MachineLearning/comments/1xybvju/we_logged_621k_changes_from_127k_papers_ablations/

**Artificial Analysis (`https://artificialanalysis.ai/`):** Intelligence Index **frozen for a second consecutive day** — 0 models added, 0 removed, 0 rescored, every `idx` string bit-identical, rank order unchanged. Board (29 unique models / 58 effort-tier rows): 1. Claude Fable 5.2 (Max) 64.563595756626 · 2. Gemini 4 Carbon (High) 60.025738829526 · 3. Claude Opus 5.5 (Max) 59.1060336078904 · 4. GPT-6 Astra (Max) 56.8538559596797 · 5. GPT-6.1 Sol (Max) 54.6087338138148 · 6. Claude Sonnet 5.5 (Max) 54.54133407109. Best open-weights model remains Kimi K3.1 Pro 46.4526236744189 (commercial licence) — the open-weight ceiling did not move. Qwen4 Max 42.8914543287565, `isOpenWeights false`, proprietary. Tencent Hy4 34.5552385392508, proprietary; **no separate hy4-flash row exists**. Inkling 2 Small 30.6286781498958 (open weights, 594B params). **Decision Index v2.1 byte-identical to the 2026-11-16 baseline on all 28 rows.** Changelog: 91 entries (baseline 92) — 3 added, all `hostModelAdded` for Inkling 2 Small (Nebius, DeepInfra, Together AI) dated 2026-11-16; 4 older entries dropped off the visible list (truncation, NOT retraction); **zero entries dated 2026-11-17**. This corrects the prior claim that AA published nothing after 2026-11-13. Source: https://artificialanalysis.ai/ | https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index

**BenchLM (`https://benchlm.ai/api/data/leaderboard`):** `lastUpdated` 2026-11-15 → 2026-11-17 and `sourceSnapshotId` moved, but `methodologyVersion` stayed `bench-align-v5.8-2026-09-30` and `orderingMeaning` was unchanged. Roster: Qwen4 Max added (rank 40, overall 65.02, evidenceStatus estimated, interval90 50.67-79.36); Sage-A1.5 removed. 27 of 50 rows changed, but the largest absolute score delta was 0.04 and every rank movement was a +1 shift of the bottom block caused by the insertion — a rounding-level no-op, in contrast to the 14-rank Claude Haiku 5.5 downgrade the previous day produced. Top of board unchanged: Claude Fable 5.2 93.84 · Gemini 4 Carbon 89.56 · Claude Opus 5.5 86.81 · GPT-6 Astra 85.65 · GPT-6.1 Sol 84.55 · Claude Sonnet 5.5 83.15.

**Model releases (Hugging Face):** exactly ONE frontier-lab repository landed in-window — `nvidia/Qwen3.8-Flash-Next-NVFP4-QAD`, created 2026-11-17T09:32:35Z, 0 downloads / 24 likes at fetch time. All other frontier orgs had 0 in-window repos. Community in-window releases: maxwell-model/Maxwell-V1-Flash (35B total / 3B active MoE, 256K ctx), Clover 2 (dense 27.8B base + 7 LoRA experts routed per token), SenseNova Loop 9B, Supra2.5-65M, Nemotron-Labs-Sigma 8B/3B (continuous-diffusion LM), miHoYo Gamer.

**Vendor posts:** OpenAI "Strengthening NATO and allied cyber defenses with AI" and "Introducing OpenAI for Chile" (2026-11-17, resolved via the official RSS feed because openai.com/index served an anti-bot placeholder); Liquid AI d1.2 + d1.2-ultra (2026-11-16); OVH Olala mini 7A1B (2026-11-17); fast.ai SolveIt public launch (2026-11-16); FrontierHarness eval v1.1; METR "Measuring Alignment Eval Tells" (2026-11-16); Stanford MStar; Interact-0; DeepClause SDK; Mistral 3 months Vibe Pro free in Europe. NOT in-window: any Qwen post, any DeepSeek post, any Liquid post dated 2026-11-17 (https://www.liquid.ai/blog/d1-2 · https://corporate.ovhcloud.com/en/newsroom/news/ovh-olala-mini/ · https://www.fast.ai/posts/2026-11-16-solveit-launch/ · https://runta.com/blog/introducing-frontierharness-eval-v1-1/ · https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/).

**Negative signals:** AA published no new model and no new score; no open weights for Qwen4-Max or Tencent Hy4; Karpo-Decision-31B remains unscored by AA (no `karpo` string in the payload, so its claimed 73.9 Decision Index figure stays unverified); the "No Second Run" 801-30B-A3B-Base weights did not ship; HN had zero Qwen4 / Hy4 / Tencent / Karpo mentions; only 1 of ~1,000 in-window HF repos was a frontier-lab release, with 0 downloads; BenchLM's refresh was a no-op.

## 2026-11-18 (Wednesday Evening)

**Batch:** 34 papers, screened from the 17 November 2026 arXiv cycle plus the remaining 13-16 November backlog, written up in `findings_nov18_task1.md`; community, leaderboard and release findings in `findings_nov18_task2.md` (a **recovery file**: the 2026-11-18 Task 2 subagent cached all primary-source artifacts under `tmp/nov18/t2/` but never wrote its findings file, so it was rebuilt from those caches) and `findings_nov19_task2.md` for the overlapping 18→19 November window. Sources: Algolia HN API, Reddit via Redlib, artificialanalysis.ai homepage + changelog + Decision Index, benchlm.ai leaderboard JSON, huggingface.co models API, openai.com RSS, vendor blogs. All quantitative claims are author- or vendor-self-reported.

**2611.18859** Exstill: The Most Efficient Single-Chip Processor for the Next Token — gate-level 5 nm measurements put the arithmetic floor for a Qwen3-1.7B token at 16K context at 0.89 mJ while an NVIDIA B300 spends 391–1,120x that; a pre-silicon 5 nm design holding weights plus KV cache on-die brings the same token to 3.4x its floor, and co-designing the model with the circuits lowers the floor to 0.29 mJ and the token to 0.52 mJ — decoding twelve users' tokens 110x faster at 690x lower energy than a measured B300; also introduces Polyglot-DC (1.7B, 4B) co-processors specialized per job.
Source: https://arxiv.org/abs/2611.18859


**A. Reasoning, chain-of-thought, and test-time compute**

**2611.22148** Long-Context Generation Is a Sampling Problem (When You Turn Up the Heat) — Tests 29 open-weight models (1B–122B) across ten benchmarks plus needle retrieval out to 1M tokens (SWE-bench Verified coding agents, long CoT…
Source: https://arxiv.org/abs/2611.22148

**2611.22778** A Full-Ledger Counterfactual Audit of Adaptive Reasoning — Introduces the Full-Ledger Counterfactual Value Audit (FLCVA), which compares an immediate answer against four fixed-length continuations from the…
Source: https://arxiv.org/abs/2611.22778

**2611.22301** MCTS Is Counting the Wrong Thing: Learning Exploration Counts for LLM Reasoning — Argues that standard UCT's independent per-branch visit counts let different phrasings of the same reasoning strategy repeatedly collect exploration…
Source: https://arxiv.org/abs/2611.22301

**2611.22234** The Fragility of Reasoning-Importance Attribution for Pruning Language Models — Stress-tests the assumption underpinning attribution-guided pruning of reasoning LLMs: that "reasoning importance" can be faithfully measured.
Source: https://arxiv.org/abs/2611.22234

**2611.23124** Get Hint-Augmented GRPO Done Right Through Activation Steering — Notes the failure mode of Hint-Augmented GRPO (HA-GRPO): when a training question exceeds the base model's capability, all rollouts get zero reward…
Source: https://arxiv.org/abs/2611.23124

**2611.22033** Thinking Harder Doesn't Lead to Better Choices: Reasoning Effort Increases the Confidence but Not the Correctness of LLM Shopping Agents — Benchmarks ten frontier models on three product-choice benchmarks built from WebShop, Amazon SQID and Wayfair WANDS.
Source: https://arxiv.org/abs/2611.22033

**2611.21799** Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability — A safety-side result: SFT on mathematical reasoning traces rewritten in diverse personas induces broad CoT *control* even though the training…
Source: https://arxiv.org/abs/2611.21799

**2611.21946** Conserved Verdicts, Drifting Commitments: Identifying Harmful Overthinking — Formalizes overthinking via two quantities at the same point in a chain: the model's *commitment* (probability that the answer it would give now is…
Source: https://arxiv.org/abs/2611.21946

**2611.22103** From Sorry to QED: Refining LLM Math Proofs via Angelic Execution — MathEye converts imperfect LLM-generated Lean proof scripts into fully verified Lean proofs using *angelic proof checking* — an optimistic execution…
Source: https://arxiv.org/abs/2611.22103

**2611.22161** What RL on Expert-Built Tasks Teaches Nemotron 3.5 Super — Post-trains NVIDIA's Nemotron 3.5 Super (120B total, 12B active) with RL on five expert-built task datasets, one at a time (real-world software…
Source: https://arxiv.org/abs/2611.22161

**2611.19042** Understanding the Role of Reasoning Data in Pretraining — Asks how pretraining should balance atomic facts against multi-step reasoning traces, given that traces cover only a subset of available facts.
Source: https://arxiv.org/abs/2611.19042

**B. Prompt engineering, ICL, and instruction following**

**2611.22605** Simplicity Goes Far: Auditing Prompt Optimizers with Demonstration-Conditioned Prompt Search — A methodological audit of automatic prompt optimization (APO): recent methods stack policy-gradient updates, trace reflection and evolutionary…
Source: https://arxiv.org/abs/2611.22605

**2611.22382** RICoT: Recurrent Interleaved Chain-of-Thought for Page Stream Segmentation — Reframes page stream segmentation (splitting a multi-page file into documents) as a sequential process over the whole stream rather than boundary…
Source: https://arxiv.org/abs/2611.22382

**2611.21251** The Price of Choosing Examples: Context Overfitting in Adaptive In-Context Learning — Formalizes the gap between the usual ICL assumption (examples sampled before the learner is chosen) and deployed reality (examples retrieved…
Source: https://arxiv.org/abs/2611.21251

**2611.19767** Logical AI OS: A Training-Free Governance Layer Outside the Model for Instruction Following — Measures (rather than proposes) a training-free governance layer placed outside the model: it reads the request as rules, mechanically checks the…
Source: https://arxiv.org/abs/2611.19767

**2611.20071** The Silent Cost of Conversation History in LLM Reasoning — Pre-registers analyses before computing outcomes. **Study 1** (48 sharded math tasks): retaining a model's own earlier replies lowered final success…
Source: https://arxiv.org/abs/2611.20071

**C. Efficiency, quantization, serving**

**2611.22215** Communicate the Change: Efficient Expert Parallelism via Activation Compression — EchoMoE retrofits existing sparse MoE models to cut the two synchronous collectives per MoE layer (dispatch + combine), which have become the…
Source: https://arxiv.org/abs/2611.22215

**2611.22296** SpecSearch: Towards Hardware-Aware Efficient Speculative Decoding — Speculative decoding's optimum depends jointly on workload, GPU and memory: on an RTX 5090 the SOTA DFlash drafter reaches **3.50x** AR throughput at…
Source: https://arxiv.org/abs/2611.22296

**2611.22334** BQ-LoRA: Binary-Quantized Low-Rank Adapters as Implicit Regularizers for Parameter-Efficient Fine-Tuning — Questions whether the FP16 adapter precision in QLoRA is necessary: replacing it with a single binary bit per adapter parameter (plus a learned…
Source: https://arxiv.org/abs/2611.22334

**2611.22128** TempQuant: Learning Adaptive Temperatures for Quantized Language Models — Quantization "warms" the model on average (measured via generation entropy), and temperature matters much more for a quantized model than for its…
Source: https://arxiv.org/abs/2611.22128

**2611.22019** Computed Permutation Trellis Coding: Near-Optimal Quantization from Two Multiplications and a 64-Byte Table — CPTC is a low-bit tensor format for write-once/read-many data (e.g.
Source: https://arxiv.org/abs/2611.22019

**2611.22721** HADVQ: Hessian Aware Directional Vector Quantization — Ultra-low-bit LLM quantization is hard because aggressive compression distorts parameters and disproportionately harms a small number of highly…
Source: https://arxiv.org/abs/2611.22721

**2611.22186** Is 4-Bit Quantization More Than Noise to a Chat Model's Safety Behaviour? — Pre-registered study of three 3–4B chat models, with paired tests, blind human labels and an 8-bit null.
Source: https://arxiv.org/abs/2611.22186

**2611.23035** Storing the Gemma 4 K=V Cache Once: Exact Global-KV Memory Savings in a Paged Serving Engine with Unchanged Attention Kernels — Notes that Gemma 4 31B's global attention layers make the value a normalized key projection and the key a scaled value (with RoPE on a quarter of…
Source: https://arxiv.org/abs/2611.23035

**2611.22280** XM-Sparse: High-Throughput Sparse-Attention LLM Serving over Scale-up Memory Pools — Analysis shows that even with scale-up memory pools, decode throughput stays bounded by HBM capacity because hot KV buffers and the fully resident…
Source: https://arxiv.org/abs/2611.22280

**2611.21852** The Hidden Cost of MoE Diffusion Decoding: Profiling and Fixing the Sampler — Profiling single-user decoding of a 26B diffusion MoE on a bandwidth-bound edge accelerator (NVIDIA GB10) finds that after weight quantization the…
Source: https://arxiv.org/abs/2611.21852

**2611.21917** Lost in a Few Heads: Diagnosing and Repairing Block Selection in Sparse Attention — Uses exact attention-mass selection at the shipped budget as an oracle to show the selector *under-ranks the needle* rather than running out of…
Source: https://arxiv.org/abs/2611.21917

**2611.19455** Text Speeding Itself Up: Recency and Restraint in Session-Local Drafting — A careful negative-ish result on training-free speculative drafting.
Source: https://arxiv.org/abs/2611.19455

**2611.20119** CECAR: Cache & Expert Co-Aware Routing Accelerates On-Device Inference of MoE LLMs — Identifies three observations for on-device MoE: cache hit rates are fundamentally bounded even under Belady's optimal policy; those bounds are…
Source: https://arxiv.org/abs/2611.20119

**2611.21974** Beyond Bitwidth: Deployment-Constrained Mixed-Precision Quantization for Multilingual LLM Inference on NVIDIA Blackwell — Deployment-flavored quantization study on Qwen3-8B / NVIDIA B200 / vLLM, covering INT2/INT3, GPTQ, NVFP4 and mixed precision, with native…
Source: https://arxiv.org/abs/2611.21974

**2611.22206** TAILROLL: Tail-Aware Rollout Acceleration for RL-Based LLM Post-Training — RL post-training is bottlenecked by rollout: heavy-tailed responses leave engines idle while each step waits for the longest response.
Source: https://arxiv.org/abs/2611.22206

**2611.22947** The Kernel Reality Check: Benchmarking and Distilling Efficient Attention at Scale — Systematic evaluation of kernelized (O(N)) attention against softmax.
Source: https://arxiv.org/abs/2611.22947

**2611.22238** Context Has a Price: Adding and Removing Context for LLM Coding Agents under Prefix Caching — A cost-measurement study over **>20,000 runs** of open models on SWE-bench Verified, SWE-bench and Loc-Bench, accounting separately for uncached…
Source: https://arxiv.org/abs/2611.22238

**Hacker News (2026-11-17 → 2026-11-18, exhaustive Algolia sweep):** 854 stories on 2026-11-18 with **198 AI-relevant = 23.2%**; 419 stories on 2026-11-17 with 94 AI = 22.4%. An independent fetch in the 2026-11-19 cycle measured 23.0% for the overlapping 2026-11-18 window — the two caches agree within 0.2 pp. Top AI stories:
- "Gemini 4 Neon" — 977/740 — https://news.ycombinator.com/item?id=50552424
- "Anthropic prices initial public offering" — 386/730 — https://news.ycombinator.com/item?id=50553843
- "LLM assisted reverse engineering" — 289/73 — https://news.ycombinator.com/item?id=50553225
- "Gemini 4 Neon looks like an Opus 5.5 competitor" — 246/76 — https://news.ycombinator.com/item?id=50554374
- "Advancing chip design with OpenAI models" — 218/164 — https://news.ycombinator.com/item?id=50549493
- "Black high school students sue after AI mistakes Doritos bag for gun" — 107/81 — https://news.ycombinator.com/item?id=50554641
- "AI is killing All About Berlin" — 691/633 — https://news.ycombinator.com/item?id=50542705
- "Google's AI answers reducing search traffic by 40%" — 653/506 — https://news.ycombinator.com/item?id=50540178
- "Energy-Based Reasoners: 385x more efficient inference" — 247/37 — https://news.ycombinator.com/item?id=50543989
- "Microsoft AI: Seven new world-class models at scalable price-performance" — 98/55 — https://news.ycombinator.com/item?id=50548021
- "Cerebras Disaggregated Inference" — 96/24 — https://news.ycombinator.com/item?id=50540472
- "Can Peer Review Survive AI-Generated Text? [pdf]" — 59/71 — https://news.ycombinator.com/item?id=50546312
- "GPT‑6.2 Astra and Sol" (2026-11-17) — 1,326/1,359 — https://news.ycombinator.com/item?id=50535230 — still the window's largest AI thread.

**Reddit (direct access blocked; recovered via Redlib HTML + safereddit JSON):** r/LocalLLaMA 2026-11-18 leaders — "Qwen 4 35B is not ruled out" 658/194 https://www.reddit.com/r/LocalLLaMA/comments/1xzbkwp/qwen_4_35b_is_not_ruled_out/ · "Y'all's idea of 'slop' is stuck in 2025" 542/253 https://www.reddit.com/r/LocalLLaMA/comments/1xz6tv9/yalls_idea_of_slop_is_stuck_in_2025/ · "tencent/Hy4-flash" 316/67 https://www.reddit.com/r/LocalLLaMA/comments/1xz5tym/tencenthy4flash_hugging_face/ · "Nvidia: open source AI strategy intact" 292/67 https://www.reddit.com/r/LocalLLaMA/comments/1xzb9rz/nvidia_says_its_open_source_ai_strategy_remains/ · "AudioGhost v1.2" 273/26 https://www.reddit.com/r/LocalLLaMA/comments/1xz6xl7/audioghost_v12_remove_any_sound_from_audio_or/ · "[Reuters] Trump admin weighs forcing open-weight disclosure" 77/49 https://www.reddit.com/r/LocalLLaMA/comments/1xzhirk/reuters_trump_administration_weighs_forcing_us/ · "AMA: Tencent Hy (Hy4 & Hy4 flash)" 76/18 https://www.reddit.com/r/LocalLLaMA/comments/1xzett3/ama_announcement_tencent_hy_the_team_behind_hy4/ . r/MachineLearning 2026-11-18 — "ICLR 2027 Reviews Discussion [D]" 126/787 https://www.reddit.com/r/MachineLearning/comments/1xzbkq2/iclr_2027_reviews_discussion_d/ · "Why are ViTs so popular? [D]" 103/51 https://www.reddit.com/r/MachineLearning/comments/1xymxsq/why_are_vits_so_popular_d/ · "ICLR 2027: PCs ran an AI detector on reviews, peer review is cooked" 95/107 https://www.reddit.com/r/MachineLearning/comments/1xyu198/iclr_2027_pcs_ran_an_ai_detector_on_reviews_peer/

**Artificial Analysis (`https://artificialanalysis.ai/`):** roster changed, scores did not. **Gemini 4 Neon** entered with four effort tiers (Low 44.0831506204565 · Medium 54.8622945007349 · High 59.6189441875232 · **Xhigh 61.3982491392674**, 1M ctx each) and **K2 Horizon 32B** (13.880544179919) was added — breaking the two-day frozen board, but by addition only: every pre-existing model's `idx` string is bit-identical to the 2026-11-17 baseline. Board: 1. Claude Fable 5.2 (Max) 64.563595756626 · 2. GPT-6.2 Astra (Max) 62.1387990593969 · 3. Gemini 4 Carbon (High) 60.025738829526 · 4. Claude Opus 5.5 (Max) 59.1060336078904 · 5. GPT-6.2 Sol (Max) 57.2576209885477 · 6. Claude Sonnet 5.5 (Max) 54.54133407109 · 7. Gemini 4 Hydrogen (Xhigh) 53.9192287317542 · 8. GPT-6.1 Terra 51.3265188577015 · 9. Muse Wonder Full 50.0772123627021 · 10. **Kimi K3.1 Pro 46.4526236744189 (best open weights)**. Also: Qwen4 Max 42.8914543287565 (proprietary, `isOpenWeights false`), Tencent Hy4 34.5552385392508 (proprietary, still no `hy4-flash` row), Qwen3.8 Max (0902) 33.6545627367888, GLM-5.3 31.653381843882, Inkling 2 Small 30.6286781498958. **Decision Index v2.1 unchanged at 29 rows** (Claude Haiku 5.5 (Max) 76.49216258405318, GPT-6 Luna (Max) 75.67452828327847, d1.2-ultra 74.84596115693908, Drex Max v1.1 72.62416891718618, Mammoth 27B 71.3606271722313, d1 60.7814283497953, Clef-Omni 57.75003536430474). Changelog 2026-11-18: `modelAdded` Gemini 4 Neon ×4 + K2 Horizon 32B, plus article "Google continues to accelerate its release cadence with Gemini 4 Neon, delivering a small Intelligence gain over Gemini 4 Carbon at a ~17% lower Cost per Task" (slug `gemini-4-neon-intelligence-gain`); 2026-11-17: `modelAdded` GPT-6.2 Astra and Sol at five effort tiers each, JoyAI-VL-Preview, Inkling (High), Inkling Small (High), LFM3-1.7B, LFM3-VL-2B, MiniMax-M3.1-Flash, Astra for Law 6.2 (Max).

**BenchLM (`https://benchlm.ai/api/data/leaderboard`):** snapshot `2026-11-18-4a50301902018694`, `lastUpdated` 2026-11-18, methodology `bench-align-v5.8-2026-09-30` unchanged, 50 models. Top: 1. Claude Fable 5.2 92.83 · 2. GPT-6.2 Astra 89.35 · 3. Claude Opus 5.5 85.78 · 4. Gemini 4 Carbon 85.00 · 5. GPT-6.2 Sol 86.07 · 6. GPT-6 Astra 82.99 · 7. GPT-6.1 Sol 81.96 · 8. Claude Sonnet 5.5 80.56 · 9. Gemini 4 Argon 79.30 · 10. Claude Fable 5.1 78.56 · 11. Claude Fable 5 76.17 · 12. Claude Opus 5 76.02 · 13. Gemini 4 Hydrogen 77.88 · 14. GPT-6 Sol 75.30 · 15. GPT-6.1 Terra 77.08. Rank is again **not** a sort of overallScore (Sol 86.07 at rank 5; Hydrogen 77.88 at rank 13 below Opus 5 at 76.02) — per BenchLM's `orderingMeaning`, an `estimated` row backed by fewer than two source families never ranks above a row within 2 points below it. The substantive reshuffle (Sol 86.07→84.79, rank 5→6; Hydrogen 77.88→79.09, rank 13→11) landed on the **2026-11-19** snapshot.

**Model releases (Hugging Face):** exactly **one** frontier-lab repo landed in-window on 2026-11-18 — `microsoft/Aion-1.0-Instruct-2.3B` plus `microsoft/Aion-1.0-Instruct-2.3B-ONNX-WebGPU`, a browser-WebGPU ONNX variant of a 2.3B instruct model (788 dl / 62 likes and 39 dl / 3 likes by the 11-19 capture) — https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B. Zero in-window repos for Qwen, DeepSeek, Mistral, Moonshot, zai-org, internlm, openbmb, google, meta-llama, openai, nvidia, unsloth, allenai, ibm-granite, Anthropic, Apple, Liquid AI, thinking-machines. Tencent's `tencent/Hy4-flash` (created 2026-11-17) reached **206 likes** by the 2026-11-18 capture and 2,053 dl / 307 likes by 2026-11-19 — the strongest community signal of the cycle; siblings `Hy4-flash-FP8` and `Hy4-flash-base` — https://huggingface.co/tencent/Hy4-flash.

**Vendor announcements:** **OpenAI** published 7 posts on 2026-11-18, none on 11-17 (official RSS): "The Silent Consensus" https://openai.com/index/the-silent-consensus · "Research acceleration: The jagged frontier" https://openai.com/index/research-acceleration-jagged-frontier · "Inside the Codex sandbox" https://openai.com/index/inside-the-codex-sandbox · "Managing frontier AI risk" https://openai.com/index/managing-frontier-ai-risk · "Le Groupe Figaro and OpenAI partner" https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership · "Advancing chip design with OpenAI models" https://openai.com/index/advancing-chip-design-with-our-models (GPT-6 Astra optimized Jalapeño silicon circuits and RISC-V core designs) · "Sumitomo Life / ChatGPT Enterprise" https://openai.com/business/customer-stories/sumitomo-life. **Microsoft AI** — MAI Code 2 / Code 2 Flash (published 2026-11-17, modified 11-18) https://microsoft.ai/ · **Cerebras** launched Disaggregated Inference (Wafer Scale Engines for prefill, GPUs for decode) https://www.cerebras.ai/blog/cerebras-launches-disaggregated-inference · **PublicAI** Karpo Decision 31B index page (snapshot 2026-11-18) https://publicai.io/model-index/m/karpo-decision-31b — its claimed 73.9 Decision Index is **still uncorroborated by AA** · **Liquid AI** (d1.2) and **fast.ai** (SolveIt): nothing newer · **Recursive** released Flint https://huggingface.co/RecursiveSI/flint. **Anthropic priced its IPO at $83/share (~$1.5T)** https://www.anthropic.com/news/anthropic-prices-initial-public-offering · **Palo Alto Networks agreed to acquire Applied Compute for $4.5B in stock** https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-acquire-applied-compute-bringing-secure-open.

**Negative signals:** AA's board was **additive only** — 51 slugs extracted but only 28 carry an index; reading the extract as "23 new models" would be wrong. AI's share of HN traffic was **flat** (22.4% → 23.2%): the Neon launch changed *which* AI stories led, not how many there were. Tencent Hy4 remains **proprietary** on AA and still has **no `hy4-flash` row** despite 206 HF likes. Qwen4 Max gained **no open weights**. Karpo-Decision-31B's 73.9 figure remains **unverified**. Reddit's safereddit JSON has an unreliable permalink↔id mapping (AudioGhost / Hy4-flash pair) — canonical permalinks were re-verified in the 2026-11-19 Redlib parse. No Qwen, DeepSeek, Moonshot or Mistral vendor post in-window (their pages render client-side, so absence of a readable post is not evidence of no release).

