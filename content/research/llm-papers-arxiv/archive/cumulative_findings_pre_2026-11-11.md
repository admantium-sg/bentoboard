# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 10, 2026
**Last Fact-Check:** 2026-10-29 (21:45 UTC) — next fact-check run should cover the 2026-10-30 through 2026-11-10 sections
**Verification Status:** ⚠️ 15 claims checked in the 2026-10-28 / 2026-10-29 sections: 14 verified, 1 partially verified (BenchLeader index score drops unconfirmed / stale)
**Verification Status:** ✅ Cumulative tracking active
**Working Directory:** shared-workspace/research/llm-papers-arxiv

**Insight count:** 1743 total (+30 new papers on 2026-11-10)
**Active window:** 2026-11-10 only. The 2026-11-08 and 2026-11-09 sections were archived this run to `archive/cumulative_findings_2026-11.md` (and to `archive/cumulative_findings_pre_2026-11-10.md`) to hold the active file under ~60KB; they remain fully recoverable there and in `daily_reports/2026-11-08.md` / `daily_reports/2026-11-09.md`. Unabridged Nov 10 detail lives in `findings_nov10_task1.md` (40.4 KB) and `findings_nov10_task2.md` (43.0 KB); the section below is condensed to fit the size budget, with every source URL retained.

## 2026-11-10 (Tuesday Evening)

**Batch:** 915 papers (ids 2611.09897–2611.12884) harvested from the cs.CL / cs.LG / cs.AI "new + cross submissions" listings of 2026-11-10; 760 replacement submissions were excluded as already-published revisions. 1,678 ids were absent from every previously recorded source (cumulative file, archive, and the Nov 06–Nov 09 batches), of which 918 were new/cross submissions and 427 passed an LLM-relevance keyword screen; the 30 most significant for LLM research are written up below. Papers peripheral to LLM work were dropped regardless of keyword score. All quantitative claims are self-reported by the paper authors and taken from the abstracts; nothing here was independently verified. Task 1 made **no web requests** — all abstracts come from the locally harvested `tmp/nov10/top110.json`.

All numbers are author-self-reported from the abstracts.

### 2611.12062 — Translating KV Caches Between Hybrid-Attention Language Models
Extends KV-cache translation to frontier architectures caching MLA latents, recurrent linear-attention states and sparse-attention indexer keys rather than plain K/V, verified on Kimi-VL-A3B↔Kimi-Linear-48B and Qwen3.5-27B↔Qwen3.8-27B at 16–48B scale. Decoding token ids from the source's layer-0 MLA latent raises needle recall from 0.09 to 0.99 at 2–32K and 0.83–1.00 at 64K, with TTFT 18.7×/46.8× shorter than a re-read; hybrid full-MLA transfer is within the paired CI of native quality on every task metric.
Subjects: cs.LG,cs.CL
Source: https://arxiv.org/abs/2611.12062

### 2611.11761 — BridgeKV: Large-Model Prefill and Small-Model Decoding for LLM Inference via KV Cache Translation
Runs a large model for prefill and a smaller same-family model for decoding, with a lightweight KV-stitching module translating the large model's prompt cache into the smaller model's layout via learned local layer mixing and separate key/value maps, all models frozen. Beats fine-tuned small-model baselines in all 30 model-pair × dataset settings, closing up to 80% of the quality gap; on one A40, Llama-3.1-8B→3.2-1B gives 3.0× more requests at near-small-model latency, and a 70B→1B serving simulation predicts up to 33.86× faster requests.
Subjects: cs.CL
Source: https://arxiv.org/abs/2611.11761

### 2611.10240 — PACE: Keeping the Right Tokens in the KV Cache Is Not Enough for Long-Horizon LLM Agents
Shows that retaining needed KV tokens is insufficient: with a 2,048-token budget on 100K-token sessions (Qwen3-8B), a planner-guided policy keeping >99% of needed tokens still drops from 93% to 64% accuracy as the definition-to-use gap grows 2K→90K, because rotary distance grows. PACE couples plan-aware retention with bounded-position renumbering (rotary distance <8K), passing 97% of hidden unit tests at 100K tokens vs 42% (H2O) and 3% (SnapKV), and 99%/100% at 1M/2M tokens under 0.7GB KV state versus 147–295GB for the full cache.
Subjects: cs.LG,cs.CL,cs.DC
Source: https://arxiv.org/abs/2611.10240

### 2611.10634 — Coverage-Verified Sparse Attention: Closed-Loop Quality Control for Long-Context LLM Decoding
Turns sparse attention into a training-free verify-then-correct decode loop using "coverage" (softmax mass on selected tokens), which equals per-step output error algebraically and acts as both acceptance criterion and recovery interpolation weight; no sampling, draft model or speculative infrastructure. Quality varies only 0.14 points across the threshold sweep; on LongBench at 7B/70B it is within 1.13 points of dense attention (statistically matching at 70B), loses 0.8 on RULER, with 6.21× median decode-step speedup at 128K context.
Subjects: cs.LG,cs.CL | NeurIPS 2026
Source: https://arxiv.org/abs/2611.10634

### 2611.11319 — Verify Before You Fetch: Reliable KV Cache Compression for LLM Inference
VerKV gives (ε, δ) guarantees on attention approximation: query-agnostic pivotal tokens on GPU plus a token-level sketch, the full cache in CPU memory, pivotal tokens chosen by a new stochastic PoissonComp sampler; KVFetch estimates relative error and only fetches from host memory when the tolerance is unmet. PoissonComp beats state-of-the-art KV compression, and with KVFetch reaches 90–100% of dense quality at 32K context (RULER/LOFT) on Qwen3-4B, Qwen3.5-9B, Ministral-3-8B, cutting GPU memory 8–32× with CPU→GPU fetches within 2–23% of cache per token.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.11319

### 2611.10165 — AutoEMatic: Runtime-Adaptive Mixed-Precision LLM Inference via Automatic Exponent-Mantissa Refinement
Full-stack co-design adapting weight, activation and KV-cache precision at runtime from two signals (next-token entropy, per-layer hidden-state update magnitude), with AutoFP deriving 2-, 4- and 6-bit formats from an NVFP4 base, realised in NVFP4 Tensor Core kernels and in a native accelerator datapath. Improves accuracy by up to 21.7% over NVFP4 and matches group-scaled FP6 on most benchmarks at 4.9 vs 4.5 bits/weight, retaining ~90–98% of NVFP4 decode throughput on GB300; the accelerator cuts latency 1.6–2.3× and energy 7–23%.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.10165

### 2611.12356 — DForkTree: Accelerating Speculative Decoding with Fork-Aware Block Diffusion Draft Trees
Diagnoses that off the drafter's top-1 continuation its accuracy collapses from 89% to 18%, but re-running from the fork token is usually right — the error is in the conditioning prefix. The training-free fix re-anchors each branch on its own tokens, adding target-model n-gram statistics as pointwise mutual information weighted more after the fork, and builds the optimal tree exactly on GPU. Fastest tree method on every benchmark for Qwen3.5-4B/9B, up to 41.5% faster than DFlash and 15.1% than DDTree, averaging up to 4.75× over autoregressive decoding.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.12356

### 2611.10432 — D-REAL: Acceptance-Length Optimization with Unbiased Gradients for Speculative Decoding
Post-trains the drafter to directly maximise expected accepted-token length — the quantity governing speculative-decoding efficiency but not targeted by token-level objectives — by weighting draft-target overlap with prefix survival probabilities and deriving an unbiased gradient under stochastic verification. On DSpark and DFlash2 with Qwen3-8B across ten benchmarks, one epoch improves mean acceptance length by up to 0.23 tokens under greedy (T=0.0) and stochastic (T=1.0) sampling, worth up to 9.4% end-to-end serving throughput.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.10432

### 2611.12240 — Prune, Don't Merge: Expert Compression of Mixture-of-Experts LLMs on Multilingual Production Tasks
Compares SOTA one-shot MoE compression methods (REAP pruning vs REAM merging) on five multilingual production tasks from a web-hosting company with two 30B models at 25% and 50% expert removal. Pruning wins on matched rows (REAP significantly better in 16 of 20 comparisons); at 25% removal REAP keeps 93.6% of generative quality vs 62.5% for REAM, though within a point on academic benchmarks. Damage concentrates in the output contract (89.8–95.2% of email-template losses are hard-gate failures like invalid JSON); logit divergence and repetition-loop rate track production quality, n-gram diversity does not.
Subjects: cs.CL,cs.LG
Source: https://arxiv.org/abs/2611.12240

### 2611.10096 — Coordinated Mixed-Precision KV Cache Quantization for Efficient LLM-based Multi-agent Systems
CoMixKV is the first mixed-precision KV-cache quantization framework to jointly allocate precision across simultaneously resident agent caches under a shared memory budget, using online sensitivity from a local attention-error bound (no calibration data or extra passes) plus a shared controller minimising total estimated error. Across four benchmarks, three backbones and 2/3/4-bit settings it reaches 68.35% average accuracy on Gemma-4-31B-it at average 3-bit (+0.59 over the best quantized baseline) and, on Qwen3-32B, cuts peak KV memory 32.08% with a 1.38× speedup over FullKV.
Subjects: cs.LG
Source: https://arxiv.org/abs/2611.10096

### 2611.11079 — When Calibration Data Matter in Sub-4-Bit Language Model Quantization
FragCal-DC calibrates low-bit quantizers on task families that lose accuracy at 2 bits, evaluating six data-dependent methods across six dense models (1.7B–8B) and ten tasks with four-seed comparisons and a 2–4-bit sweep. Iterative SignRound V2 and OmniQuant improve at 2 bits while single-pass GPTQ/AWQ respond weakly at 3 bits; at 2 bits SignRound V2 gains 1.83 points of mean ten-task accuracy over generic-text calibration, and at 70B both GPTQ and SignRound V2 improve. Recovery concentrates on calibrated task families; reconstruction error does not track accuracy gains.
Subjects: cs.LG,cs.CL | NeurIPS 2026
Source: https://arxiv.org/abs/2611.11079

### 2611.10974 — SWEET: Mitigating Spurious Feature Reliance in LLM Reasoning via Weight Editing
Training-free method combining counterfactual interventions with mechanistic interpretability: extracts token- and sequence-level behavioural directions from activation contrasts between original and counterfactual problems, localises responsible MLP neurons and attention heads, and suppresses them via weight edits. Using only 20 original-counterfactual pairs it improves accuracy by 11.8 points on perturbed inputs and 2 points on original inputs across five open-weight reasoning models and five benchmarks, shrinking the original-vs-perturbed gap from 17.6% to 2.5%.
Subjects: cs.CL,cs.LG
Source: https://arxiv.org/abs/2611.10974

### 2611.12293 — Depth as a Candidate Source: Portfolio Allocation for Recurrent Test-Time Scaling in Large Language Models
Shows deeper recurrent reasoning can lose correct solutions found at shallower depths, with depth-specific success sets broadly non-nested, so depth determines access to distinct candidate solutions, not just compute cost. Depth Portfolio Allocation reformulates recurrent test-time scaling as budgeted allocation across depth-specific candidate sources, supporting fixed portfolios and feedback-guided sequential allocation; on GSM8K, SVAMP, MultiArith and MBPP mixed-depth portfolios expand oracle coverage under matched counts and costs, and feedback-guided allocation matches or beats uniform allocation while cutting computation at high budgets.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.12293

### 2611.11201 — When Self-Consistency Hurts: The Hidden Cost of Majority Voting in Small Language Models
Finds self-consistency is often net-harmful for small models when sample budgets are inherited from large-model practice: on Qwen-2.5-0.5B and Gemma-3-1B (FP16 and MLX-Q4) over GSM8K/MATH-500 with n=200–400 and 1,000× paired-bootstrap CIs, an oracle SC gate reaches 109–174% of always-SC accuracy at 23–30% of its compute in 12/12 cases (at N=5 always-SC is dominated everywhere), because SC flips 3–10.5% of correct greedy answers to wrong (leaving always-SC 3 points worse than greedy on Qwen-Q4 × MATH-500). A greedy-pass gate skips 45–99% of SC calls, removes 36–79% of compute and retains 98.1–98.8% accuracy (point estimates; wide CIs).
Subjects: cs.AI | ICONIP 2026
Source: https://arxiv.org/abs/2611.11201

### 2611.10486 — Test-Time Scaling for Diffusion Language Models with Frequency-Aware Remasking
Reframes DLM test-time scaling as joint allocation of compute and decoding strategy: a fast base sampler handles easy questions, then a frequency-aware remasking stage commits tokens whose predictions change most across denoising steps, encouraging exploration of alternative reasoning paths. On LLaDA-8B-Instruct and Dream-7B-Instruct it yields absolute accuracy gains up to 3.73 points (LLaDA) and 7.33 (Dream) on MATH-500 and coverage gains up to 11.39 and 10.98 on HumanEval, and recovers 3.75–18.75% of examples unsolved by the base certainty-aware strategy after 100 samples.
Subjects: cs.CL,cs.AI
Source: https://arxiv.org/abs/2611.10486

### 2611.10866 — The Surprising Effectiveness of Deleting Weights in LLM Post-Training
"Deletion Tuning" learns a binary mask over transformer gate projections, zeroing fewer than 0.05% of weights and matching full fine-tuning at scale across RLVR, SFT and on-policy distillation. The mask is hundreds to thousands of times smaller than an FFT checkpoint and forgets far less — under RL its prior-task accuracy stays near base while FFT, LoRA and random sparse fine-tuning lose up to 5.4 points — and stable rank, spectrum drift and principal-weight overlap show its updates are closest to FFT's.
Subjects: cs.LG,cs.CL | NeurIPS 2026
Source: https://arxiv.org/abs/2611.10866

### 2611.12799 — Agentic-OPD: Recovering Forgotten Agent Capabilities via On-Policy Distillation for Agentic Tasks
Shows keeping only the best-validation checkpoint in GRPO agent training is lossy: its solved-problem set is a subset of earlier checkpoints', and the union across checkpoints far exceeds any single one, giving a free teacher pool. Agentic-OPD uses the best checkpoint as student and all others as frozen teachers, with HCN (Highest Coverage Next) selecting teachers by weighted coverage of unsolved problems and LAD (Locality-Aware Distillation) restricting transfer to failed rollouts. Across five agentic domains and 24 benchmarks it gains up to 7.4 points over its initialization, with a 4B student beating GPT-5.6 and DeepSeek-V4.1 on deep search.
Subjects: cs.LG,cs.AI
Source: https://arxiv.org/abs/2611.12799

### 2611.11450 — How Much Training-Inference Mismatch Can On-Policy Distillation Tolerate?
Quantifies OPD's tolerance to mismatch from quantized inference, async rollouts and weight staleness: OPD tolerates substantial mismatch without meaningful quality loss but degrades beyond an empirical budget, and both the cost and the quantization-induced mismatch are model-dependent, with some layers especially precision-sensitive — staying stable where RL destabilises. A lightweight admission check screens rollout configs against a calibrated budget without full training runs; model-specific FP8 recipes allow ≥1.93× more KV-cache tokens than BF16, and FP8 plus async rollouts reaches the same quality 1.62× sooner than synchronous BF16.
Subjects: cs.LG,cs.AI
Source: https://arxiv.org/abs/2611.11450

### 2611.11330 — When Credit Turns Against Tools: Transition-Aware Credit Assignment in Agentic Reinforcement Learning
Traces tool-calling degradation in agentic RL to three coupled mechanisms — negative tool credit from tool-token imbalance, token-mean aggregation amplifying it for longer wrong trajectories, and failure-driven retries extending negative credit — and counters them with TACA: Advantage Projection (nonnegative mean advantage on tool tokens via minimal uniform shift), Decision Contrast (tool-assisted vs direct-answer rewards) and Supervised Replay. It raises mean accuracy over MT-GRPO on six reasoning benchmarks by 4.61 points for Qwen2.5-1.5B and 3.61 for Qwen2.5-3B.
Subjects: cs.LG | NeurIPS 2026
Source: https://arxiv.org/abs/2611.11330

### 2611.10045 — Don't Blame The Preferences: Examining The Emergence of Sycophancy in LLM Training
Across three model families and three benchmarks, sycophancy is largely established by the end of SFT rather than introduced by preference alignment: in all nine model-benchmark combinations SFT checkpoints reach ≥92% of the aligned models' sycophancy scores and ≥85% of final models', and alignment raises sycophancy in only four of nine cases (4.2 points on average when it does). Mechanistic probing shows SFT datasets activate sycophancy representations no more than other data but contribute far more examples, and the top-scoring datasets are all from SFT — implying interventions belong in pretraining/SFT data selection.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.10045

### 2611.12856 — WorkflowArena: Benchmarking Executable Workflow Orchestration in LLM-Based Multi-Agent Systems
Formalises workflow orchestration — a model's run-time choice of whether and how to delegate and to author the coordinating workflow — as a distinct capability, with 145 long-horizon tasks across 8 professional domains, each with an initial workspace and an integrated deliverable scored by a hidden verifier and all delegation recorded. Across nine models no configuration wins everywhere and delegation styles differ (Claude invokes workflows less often but with larger worker groups; GPT delegates more often in smaller units), and workflows authored by Claude Opus 5.5 substantially improve weaker executors when the executor is fixed.
Subjects: cs.CL,cs.SE
Source: https://arxiv.org/abs/2611.12856

### 2611.10412 — TurnFlow: Benchmarking User-State Reasoning in Multi-Turn LLM Agents via Scene-Guided User Simulation
Interactive benchmark combining adaptive user simulation with verifiable judging to test whether models preserve, revise and act on evolving user requirements across turns while hidden requirements and pass/fail criteria stay controlled. Nine LLMs reach overall pass rates of 42.86–59.59% on 490 scenarios, performing well on Stateful Multi-Constraint Following but far less reliably on Scope Creep and Goal Shift, exposing persistent limits in reasoning over evolving requirements.
Subjects: cs.AI | EMNLP 2026 Findings
Source: https://arxiv.org/abs/2611.10412

### 2611.10457 — Represented but Not Used: Value-Policy Dissociation in LLM Agents
In Qwen2.5-7B/32B-Instruct and GPT-OSS-20B on Grid and WebShop, the relative values of candidate actions are linearly decodable from intermediate hidden states even at states where the policy prefers the worse action — a "value-policy dissociation". Readout-direction interventions have limited, inconsistent effects while Natural Value Transport (a transformation learned from hidden-state changes caused by action-value differences) more consistently shifts action preferences, especially in later layers, and a closed-loop controller using readout as sensor and NVT as actuator improves task outcomes.
Subjects: cs.AI
Source: https://arxiv.org/abs/2611.10457

### 2611.10477 — PatternBloom: Empowering Agentic RAG with Externalized RL-Distilled Graph Patterns
Shifts the unit of retrieval in agentic RAG from content to logic: a first RL stage scores the agent's evidence graph by a frozen oracle's information gain via an Information-Density Reward (size-normalised mutual information), high-reward trajectories are distilled into a Graph Pattern Memory of type-abstracted reasoning skeletons, and a second RL stage's Pattern-Augmented Reward couples policy to memory. A 7B PatternBloom beats 27 baselines by +15.0 average OOD EM, with gains compounding with reasoning depth because procedural knowledge is reused rather than re-derived.
Subjects: cs.AI | NeurIPS 2026
Source: https://arxiv.org/abs/2611.10477

### 2611.10026 — MetaPI: Constructing Prompt Injection Benchmarks from LLM Agent Benchmark
Meta-benchmarking for indirect prompt injection: transforms existing utility benchmarks into end-to-end IPI suites reusing their tasks, environments and infrastructure, with a toolkit that auto-detects injection points, generates attack objectives, optimises adaptive payloads and validates attacks in the real environment, behind modular interfaces for heterogeneous environments, agents, defences and attacks. Applied to AppWorld, VitaBench and Terminal-Bench across multiple backbones, no evaluated defence achieves both strong utility and strong security in realistic adaptive agentic IPI settings.
Subjects: cs.CR,cs.AI
Source: https://arxiv.org/abs/2611.10026

### 2611.10258 — Beyond the Prompt: Leveraging Pre-Decoding States for Jailbreak Detection in dLLMs
Shows diffusion LLMs expose a detection surface absent from autoregressive decoding: jailbreaks hard to see in prompt representations remain detectable from hidden states over masked response positions before any token is generated. Linear classifiers on prompt vs pre-decoding response representations each catch attacks the other misses, and ReFuse fuses their harmfulness scores at inference time without touching weights or decoding. On LLaDA-8B it cuts average ASR across jailbreaks from 63.29% (undefended) and 11.27% (prompt-only) to 3.31%, with benign refusal below 1%.
Subjects: cs.CL,cs.CY,cs.LG | NeurIPS 2026
Source: https://arxiv.org/abs/2611.10258

### 2611.10971 — When Safety Becomes An Outlier: Understanding the Retention of LLM Safety Behaviors
Argues formulaic refusal strings function as "outlier modes" — narrow, weakly grounded patterns that are easy to fit but vulnerable to later updates — supported by experiments showing fixed refusals are acquired much like arbitrary constant strings. NEST (Naturalness-Enhanced Safety Targets) instead builds natural, context-aware safety targets inside the model's existing output distribution, using original-model perplexity as a proxy for distributional support, instantiated in supervised and preference-based settings; across models and regimes it improves immediate safety and its retention under continued fine-tuning without sacrificing helpfulness. No numeric figures in the abstract.
Subjects: cs.CL | NeurIPS 2026
Source: https://arxiv.org/abs/2611.10971

### 2611.11266 — ErosionBench: Probing Alignment Decay in Enterprise Multi-Agent Systems
Environment-grounded benchmark for alignment decay where benign requests escalate through poisoned shared state, long-context documents and trusted peer messages, scored on the realized tool call against authorized intent and provenance via deterministic contracts rather than output text. Spans four enterprise domains, four decay mechanisms, 1,728 scenarios with matched benign controls labelled against the OWASP Top-10 for LLM Applications, plus 198 image attacks each paired with a text equivalent. Perimeter defences suppress attacks only by over-refusing 54–92% of legitimate work; the calibrated Meta-Auditor reaches 98.5% recall at 2.9% false positives on a family-disjoint 906-scenario split.
Subjects: cs.CR,cs.AI,cs.MA
Source: https://arxiv.org/abs/2611.11266

### 2611.10156 — DeepResearch RewardBench: Evaluating Reward Models for Deep Research Report
First benchmark dedicated to reward modelling of long, information-dense deep-research reports: candidates collected from multiple agents or tool-augmented LLMs, scored against query-specific golden rubrics with multi-round filtering and human verification, packaged as pair/triplet/quadruplet preference sets for ranking at varying difficulty. Reward models handle general coherence but degrade significantly on research reports, while generative LLM judges are comprehensively superior, with comparative evaluation outperforming direct scoring. No numeric figures in the abstract.
Subjects: cs.AI,cs.CL | EMNLP 2026 Findings
Source: https://arxiv.org/abs/2611.10156

### 2611.11695 — Language model capabilities fail in a shared, predictable order under compression and perturbation
Seven perturbation and compression methods applied to eight instruction-tuned models over 16 tasks in four answer formats, against preregistered predictions: short-answer capabilities fail in nearly the same order under four random perturbations with different mechanisms (median correlation 0.90) and within each model under pruning and quantization (0.875). Fragility profiles under random perturbation predicted which tasks and facts compression removes first and, after four-task calibration, held-out task accuracy (median absolute error 0.11–0.12 vs 0.20–0.21 for uniform decline); the order did not transfer across models under GPTQ nor hold for long-form tasks.
Subjects: cs.CL,cs.AI,cs.LG
Source: https://arxiv.org/abs/2611.11695

---

## Batch summary

**Inference-time systems dominate**: eleven of thirty papers attack the cost, latency or memory of running models, and the shared move is a shift from heuristic approximation toward verifiable approximation — CVSA closes the sparse-attention loop via softmax-mass coverage, VerKV gives (ε, δ) guarantees while avoiding host memory where possible, PACE shows retaining the right KV tokens is insufficient because rotary distance grows with session length, and two papers transfer state rather than recompute it (BridgeKV; KV translation generalised to MLA latents, recurrent states and sparse indexers, lifting needle recall from 0.09 to 0.99 at 64K).

**Post-training and agentic RL** form the second theme, unified by suspicion that standard recipes discard capability: zeroing under 0.05% of weights matches full fine-tuning while forgetting far less (Deletion Tuning), discarded GRPO checkpoints form a free teacher pool worth up to +7.4 points (Agentic-OPD, a 4B student beating GPT-5.6 and DeepSeek-V4.1 on deep search), and OPD tolerates a mismatch budget RL does not; TACA explains why tool-calling decays during agentic RL and PatternBloom externalises reasoning patterns for +15.0 average OOD EM.

**Safety, alignment and measurement** form the third: a sycophancy autopsy largely exonerates preference alignment (SFT checkpoints already reach ≥92% of aligned models' sycophancy), MetaPI finds no agentic IPI defence balancing utility and security, ErosionBench shows perimeter defences buy low attack success only by over-refusing 54–92% of legitimate work (a trajectory auditor: 98.5% recall at 2.9% FP), and ReFuse cuts jailbreak ASR from 63.29% to 3.31%. Machine-checkable oracles and reported null results recur throughout.

## Theme clusters

- Efficiency/KV cache & serving (11): 2611.12062, 2611.11761, 2611.10240, 2611.10634, 2611.11319, 2611.10165, 2611.12356, 2611.10432, 2611.12240, 2611.10096, 2611.11079
- Reasoning & test-time scaling (4): 2611.10974, 2611.12293, 2611.11201, 2611.10486
- Post-training, distillation & agentic RL (5): 2611.10866, 2611.12799, 2611.11450, 2611.11330, 2611.10045
- Agent systems & multi-agent behaviour (4): 2611.12856, 2611.10412, 2611.10457, 2611.10477
- Security, jailbreaks & alignment retention (4): 2611.10026, 2611.10258, 2611.10971, 2611.11266
- Evaluation & capability measurement (2): 2611.10156, 2611.11695

Window: 2026-11-09T17:28Z → 2026-11-10T17:28Z. Full detail: `findings_nov10_task2.md`.

## Community pulse & leaderboards — window 2026-11-09T17:28Z → 2026-11-10T17:28Z

**Hacker News.** Full enumeration: nbHits **1199** stories in-window, 7 pages fetched across two split queries (Algolia's 1000-hit pagination ceiling forced the split), **1199 unique objectIDs, 0 residual**. 353 of 1199 (29%) are AI/LLM-relevant; 13 exceeded 100 points. Volume up ~43% day-over-day (yesterday: 840 stories, 0 residual). Dominant story: Anthropic's Claude Fable 5.2 / Mythos 5.2 launch (announcement thread 821 pts / 950 comments). Source: https://news.ycombinator.com/item?id=50429068

- **Fable 5.2/Mythos 5.2 launch** — 982-pt link post, 821-pt/950-comment main thread, plus 363-pt AA-score thread. Vendor-confirmed capability carve-out: Anthropic's own system card states it "took steps to limit advances in the specific research capabilities that could most directly accelerate AI development", so on accelerator-kernel optimisation and LLM-architecture research "Fable 5.2 and Claude Mythos 5.2 perform at about the level of Opus 5.5", with "transparent fallbacks to Opus 5" and deliberate limits on public access. Quoted by HN user `stefanpie`. **Confirmed by the vendor, not an allegation.** Source: https://news.ycombinator.com/item?id=50429068
- **Benchmarks churn under the models' feet** — HN user `minimaxir`: "most of the benchmarks don't line up anymore because the benchmarks have changed", making cross-release comparison with Opus 5.5 unreliable. Source: https://news.ycombinator.com/item?id=50429068
- **Vendor early access allegation** — `jrflo`: "I'm sure that they get early access to run the benchmarks". **ALLEGATION, unverified, no evidence.** Source: https://news.ycombinator.com/item?id=50431144
- **Google Gemini allegedly routes personal Drive files/emails to human annotators** — 692 pts / 144 comments; user-reported via a community repo, not vendor-confirmed. Source: https://news.ycombinator.com/item?id=50429426
- **CoreWeave bond yield tops 16%** — 188 pts / 174 comments; dominant pushback (`ElProlactin`) that "inference is incredibly profitable only when you pretend that models have 0 cost to be created". Source: https://news.ycombinator.com/item?id=50435660
- **Fireworks AI second breach in weeks; Notion affected** — 143 pts / 49 comments; customer `werrett`: Fireworks' 9 Oct notice said "not impacted", and Notion only learned otherwise after its Anthropic API keys in Fireworks were "hijacked". Fireworks states exposed data included "unattributable Notion AI chat transcripts used for the Insights feature". Source: https://news.ycombinator.com/item?id=50437106
- **DeepX claims 100B-param inference under 5 W** — 155 pts; HN notes the 80 TOP/s and 150 GB/s figures lack precision info and a 100B-capable edge part would obsolete data centres. Source: https://news.ycombinator.com/item?id=50429545
- **Google TPU 8tx / 8i Max** — 254 pts; discussion dominated by abbreviation etiquette rather than silicon. Source: https://news.ycombinator.com/item?id=50432831
- **"AI usage generates a fragile codebase"** — 133 pts / 166 comments; counter-argument is that some fragility patterns predate LLMs. Source: https://news.ycombinator.com/item?id=50438318
- **120B MoE on 32 GB M1 Max under 16 GB** — 34 pts; author adds an iOS port at ~13 tok/s on iPhone 13 Pro; reception skeptical ("a magic engine with zero details"). Source: https://news.ycombinator.com/item?id=50430323
- **"Waiting is almost a virtue"** — strong consensus in the 100% AI-mandate thread (144 pts) that committing to today's models is a mistake. Source: https://news.ycombinator.com/item?id=50433079

**Reddit r/LocalLLaMA.** 100 newest entries, **72 in-window** (yesterday: 55). Key items:

- **Qwen3.8 vs Qwen3.6 on niche languages** — 202 real GitHub tasks in 13 under-served languages; Qwen3.8 solved 43% vs Qwen3.6's 17%. Author volunteers the caveat: Qwen3.8 picked the hard tasks, so selection bias favours it. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsorsx/we_tested_qwen36_27b_qwen38_27b_and_glm53_flash/
- **Inference-engine shootout, one RTX 3060 12 GB** (Qwen3.6-35B-A3B UD-Q3_K_M, 5290-token prompt): prefill RustingStrata 2330 tok/s vs PolyStrata 1458–1549 vs llama.cpp b12119 1692; decode no-MTP 90.9 / 78.5 / 53.5 tok/s; with MTP drafts 128.4 / 97.5–100.4 / 77.7 (llama.cpp accepted 92/102 drafts). Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsipew/rustingstrata_vs_polystrata_vs_llamacpp_on_one/
- **42% GPU power reduction with no throughput loss** — RTX 3080 Ti, Qwen 3.5 9B Q4_K_M, llama.cpp: 450 W → 250–260 W produced no measurable tok/s loss (~100 tok/s); degradation only at 220 W (~80 tok/s); VRAM bandwidth never saturates. Single-user measurement. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsp309/42_gpu_power_reduction_with_zero_performance_loss/
- **Speed gap** — same one-shot prompt: DeepSeek V4.1 Flash 1017 (UD IQ1_M) 94 tok/s vs Qwen 3.8 Flash-Next 350 tok/s. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs7ffm/same_prompt_deepseek_v41_flash_vs_qwen_38_fn_94/
- **DeepSeek V4.1 Flash failed a 1-hour agentic video-editing task; GPT-6 Astra (Medium) finished in 6–7 minutes** — across all reasoning modes on OpenRouter. Open, non-comparable setups; anecdote. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xso3y1/deepseek_v41_flash_failed_after_1_hour_gpt6_astra/
- **Arete-27B trades refusals for confabulations** — handmade 30-question refusal-to-fabricate bench (nonexistent entities + 6 real controls, greedy, thinking off): Qwen3.8-Flash-Next 21/30, Orion-26B-A4B 21/30, Arete-27B materially lower. Small n, single rubric, but prompted by a prior HF observation. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs1nqc/confirming_apollomg_findings_organic_handmade/
- **CUDA+ROCm dual-backend inference** for a Strix Halo iGPU + RTX 5090 combo, claims up to 48% faster. Self-benchmark, unverified. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xsaurn/cudarocm_dualbackends_llm_inference_for/
- **DeepSeek-V4.1-Flash at 249 GB (IQ2_XXS) on one 12 GB card**, experts streamed from SSD, 9 GB VRAM LRU cache. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xrw6uv/rustingstrata_vs_llamacpp_deepseekv41flash_q2_249/
- **MiniMax H3-Image open-weight release** + same-day ComfyUI W4A4 quant. Source: https://www.reddit.com/r/LocalLLaMA/comments/1xso1ie/minimax_h3image_released_an_openweight_image/
- **Quant/fine-tune saturation**: "What happens to the 1.3 million Qwen3.8 quant/variants after Qwen 4 releases?" Source: https://www.reddit.com/r/LocalLLaMA/comments/1xs11q4/what_happens_to_the_13_million_qwen38/
- **Other notable**: DNA Factory fine-tuning framework (5 methods only) https://www.reddit.com/r/LocalLLaMA/comments/1xskn3z/dna_factory_yet_another_llm_training_framework/ · KVARK Sparkle 1.1 document QA 91.0 vs 89.5, declines 91.5% (vendor self-reported) https://www.reddit.com/r/LocalLLaMA/comments/1xskb49/kvark_sparkle_11_27b_better_document_qa_and_it/ · agent-memory vector-DB leak 0% read path vs 67% write path https://www.reddit.com/r/LocalLLaMA/comments/1xryzby/why_vector_db_metadata_filters_fail_on_agent/ · Comet 60B (A12B) GGUFs with MTP head https://www.reddit.com/r/LocalLLaMA/comments/1xsbc2r/multiverse_computings_comet_60b_a12b_ggufs_with/ · 400M Ettin NPC-decision model, ~0.1 s on 3060 Ti https://www.reddit.com/r/LocalLLaMA/comments/1xs9nux/i_made_a_400m_model_for_npc_judgement_calls_in/ · 0.8B Spanish proofreader at 138 ms/sentence on CPU https://www.reddit.com/r/LocalLLaMA/comments/1xsocrj/my_08b_finetune_proofreads_spanish_at_138_ms_per/ · 2B Doom decision model, LoRA on images, 43 min on a Mac https://www.reddit.com/r/LocalLLaMA/comments/1xryvbg/i_finetuned_a_2b_decision_model_to_play_doom_on/ · llama.cpp PR #31185 external PLE loading https://www.reddit.com/r/LocalLLaMA/comments/1xsgpby/feat_external_ple_file/ · clap.cpp audio embeddings in C++/GGML https://www.reddit.com/r/LocalLLaMA/comments/1xsdy76/audio_embeddings_infer/ · "LLMs without thinking are useless for agentic work" https://www.reddit.com/r/LocalLLaMA/comments/1xsg7wr/unpopular_opinion_llms_without_thinking_are/

**Reddit r/MachineLearning.** Reddit returned **403 then 429** for the first three attempts (multiple User-Agents, old.reddit.com) and succeeded after ~60 s backoff. 100 newest entries, **7 in-window** (yesterday: 10) — the feed's low rate means the 100-entry tail only reaches back ~1 day.

- **LingBot-Touch tactile pretraining** — JEPA-style latent prediction beats reconstruction: tactile-to-video top-5 recall at 1K hours **JEPA 32.1% vs MAE 5.6% vs VAE 4.4%**; JEPA 49.3% at 4K hours. Checkpoints and inference code public. Source: https://www.reddit.com/r/MachineLearning/comments/1xs05uo/latent_prediction_beats_reconstruction_for/
- **Power-outage forecasting** — XGBoost on HRRR storm data for 216 counties in MO+IL, claims 2.4× the PR-AUC of NWS warnings. Author-reported, single submission. Source: https://www.reddit.com/r/MachineLearning/comments/1xs4hq8/forecasting_new_power_outages_per_county_hourly_2/
- **Twindex** — exact replayable JSON certificates proving two parameter sets are indistinguishable, checked with rational-arithmetic Python (VALID/INVALID/INCONCLUSIVE). Source: https://www.reddit.com/r/MachineLearning/comments/1xryhhg/twindex_exact_replayable_proofs_that_your_data/
- **Usul** — expressing NNs in maths. https://www.reddit.com/r/MachineLearning/comments/1xsmmfm/introducing_us/
- **BatchNorm discussion** https://www.reddit.com/r/MachineLearning/comments/1xsasyf/did_we_ever_re/ · **image generator from scratch** https://www.reddit.com/r/MachineLearning/comments/1xs78e3/has_anyone_her/ · **BO file extraction** https://www.reddit.com/r/MachineLearning/comments/1xrzzfu/facing_file_ex/

## Leaderboards

**Artificial Analysis — Intelligence Index.** `api/v2/data/*` confirmed **HTTP 410 Gone** (retired 04 Nov 2026), so all values come from the homepage Next.js payload. **Top 5: Claude Fable 5.2 64.56 (changelog 65, cost/task $26.54) | Gemini 4 Carbon 60.03 ($7.76) | Claude Opus 5.5 59.11 ($10.04) | GPT-6 Astra 56.85 ($6.25) | GPT-6.1 Sol 54.61 ($1.27).** 26 of 28 tracked models are bit-identical to yesterday; added: Fable 5.2 and **Muse Ember 36.02 at $0.136/task — one third of Claude Haiku 5.5's $0.411 at the same score of 36**; dropped from the payload: Muse Spark Open, MiniMax-M3.1-Flash. Fable 5.2 leads Gemini 4 Carbon by ~4.5 points. Changelog's only new day is 09 Nov: Fable 5.2 Max 65 / High 62 / Xhigh 62 / Medium 56 / Low 54, Muse Ember Max 36 / Xhigh 34, plus new provider results for Kimi K3.1 Pro, GLM-5.3-Flash and all Fable 5.2 / Muse Ember tiers. Source: https://artificialanalysis.ai/ · https://artificialanalysis.ai/changelog

**Artificial Analysis — Decision Index v2.** No new changelog entry (v2 published 08 Nov: private-data share 25%→45%, Decision Score = 50×(1+Accuracy−Brier), AA-Paperclip 30%, AA-Symmetry 15%, WildGuardTest removed). **Per-model v2 scores are NOT retrievable today** — the homepage payload carries only navigation strings and the descriptor, and the referenced `/data/324ed05c14a0dc8b.txt` manifest is served in an undecodable binary format (magic `c6 0a b4 b5 1a 8e`, not gzip/brotli/zstd). Report no AA Decision Index numbers today. Source: https://artificialanalysis.ai/changelog

**BenchLM.** Snapshot `2026-11-10`, methodology `bench-align-v5.8-2026-09-30`, 50 models. **Top 5: Claude Fable 5.2 91.19 (evidenceStatus "estimated") | Gemini 4 Carbon 88.14 | Claude Opus 5.5 85.82 | GPT-6 Astra 85.23 | GPT-6.1 Sol 85.03.** Only entry in: Claude Fable 5.2; only exit: Hy4 preview (#50, 61.33). **Every incumbent dropped 0.32–0.57** while Fable 5.2 was inserted. Caveat: the new #1 is `estimated` with `sourcePattern: "objective-only"` and a 90% interval of **76.84–100.00**; the payload states `futureTruthValidated: false`, `retrospectiveTailChecksPassed: false`, and the site itself says "conditional ranges do not establish rank confidence". Source: https://benchlm.ai/api/data/leaderboard

**FMRT.** `generatedAt 2026-11-10T17:32:07Z`, 636 motions, blind judged head-to-head. **Top 5: Claude Opus 5.5 1879.3 (132-39-14, 77%) | Claude Fable 5.2 1807.0 (25-4, 86% win rate) | Kimi K3.1 Pro 1725.7 | Grok 4.7 1602.3 | Gemini 4 Argon 1599.7.** Claude Fable 5.1 was **retired** (rank null, rating 1876.5) — yesterday's #1. New unranked variants: Fable 5.2 low effort 1731.3, medium effort 1577.1. **Correction to yesterday's briefing:** Gemini 4 Carbon has **no FMRT entry** and yesterday's #1 was Fable 5.1 (1916.1), not Gemini 4 Carbon; the "Gemini 4 Carbon 69.4 / Claude Opus 5.5 69.4 / GPT-6 Astra 68.3" figures do not correspond to FMRT's BT-rating field. Source: https://fmrt.ai/api/leaderboard.json

**BenchLeader.** Dated 10 Nov 2026. **336 models ranked** (yesterday 334), 600 configurations, 600 data feeds live (28/29), **256 benchmarks from 47 publishers** (yesterday 255/46). **Top 5: Claude Fable 5.2 max 72.1 (New) | Claude Opus 5.5 max 68.8 | Gemini 4 Carbon high 68.5 | GPT-6 Astra 67.9 | Claude Fable 5.1 max 66.8.** Yesterday's leader was Opus 5.5 at 69.4; Opus 5.5 (68.8), Gemini 4 Carbon (68.5) and GPT-6 Astra (67.9) all fell 0.5–0.8 as Fable 5.2 was inserted, and Fable 5.2 leads by 3.3 points. 5 configurations sit inside its margin of error; the page highlights **GPT-6.1 Terra as best quality-per-dollar in the top 15 at $2.00/M blended**. Release watch: Muse Ember xhigh and Muse Ember 1.0 (released 9 Nov) and LFM2.5-24B-A2B / LFM3-1.7B (8 Nov) "awaiting results"; Agnes 2.5 Pro Theta at #324, index 50.9. Also: Fable 5.1 max #9→#8, GPT-6.1 Sol max #8→#9, MiMo-V2.5 input $0.18→$0.11/M (−39%), Nemotron 3.5 Lightning cost/task $0.29→$0.31/M (+9%). Frontier board: Fable 5.2 max 72.1 / 98 tok/s / $0.64 per agentic session; Opus 5.5 max 68.8 / 115 / $0.32; Gemini 4 Carbon high 68.5 / 78 / $0.32; GPT-6 Astra 67.9 / 27 / $0.80; GPT-6.1 Sol max 66.8 / 57 / $0.16. New benchmark results: Epoch Capabilities Index (178), GameBench 2 by reasoning setting (177), CritPt v2 hard subset (AA) (84). Source: https://www.benchleader.com/

**Cross-board:** all four boards agree — Claude Fable 5.2 is #1 on AA Intelligence Index (64.56), BenchLM (91.19) and BenchLeader (72.1), and #2 on FMRT (86% win rate, 29 decisive motions). No incumbent gained anywhere; several lost 0.3–0.8 points.

## Model releases

**No notable HF model was *created* in-window.** Enumerating the `createdAt`-descending feed to 1000 rows: 923 fall inside the window but are almost entirely test/empty repos (`MyAwesomeModel-TestRepo`, `ringtone-ro/*` spam, per-checkpoint training dumps). Only two reach 3 likes / 2000 downloads: `akhaliq/minimax-h3-image-pdmd-2step` (2026-11-10T15:21:45Z) and `PedroMarinhoDev/ReCaVSR-ComfyUI` (2026-11-10T12:24:53Z). Per-org createdAt checks for MiniMaxAI, Qwen, meta-llama, NousResearch, tencent, LiquidAI, nvidia, moonshotai, google, deepseek-ai, microsoft, openai and mistralai returned **no in-window creations**. Source: https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=50

**Releases landed provider-side, not on HF:** Claude Fable 5.2 / Mythos 5.2 (Anthropic, 2026-11-09 ~18:00Z, AA index 65) https://www.anthropic.com/claude-fable-and-mythos-5-2 · Muse Ember (Meta, 2026-11-09 ~17:58Z, AA index 36 at $0.136/task, no HF weights) https://research.meta.ai/blog/muse-ember

**HF trending top-25 churn vs yesterday.** Entered: `MiniMaxAI/MiniMax-H3-Image` (#16, score 218), `mradermacher/gemma-4-31B-it-ARA-heretic-GGUF` (#23, 157), `VideoRebirthAI/hyperflow-h3-flash` (#24, 156), `tencent/Qwen3.8-27B-DSpine-b16` (#25, 156). Exited: `Scantist/GLM-5.3-SLIM-GGUF`, `AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF`, `FusionCow/Sulphur-3`, `abenzerps/Qwen-Image-2.1-Turbo-Quantized`. Top-of-list score gains: `speridlabs/idol` 829→911 (#1), `xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic` 805→902 (#2), `moonshotai/Kimi-K3.1-Pro` 579.5→607.5 (#3), `NousResearch/Arete-27B` 329→370 (#6). **trendingScore is an HF popularity metric (likes/downloads/lastModified weighting), not quality — the #1 and #2 slots are community uncensored merges, not frontier labs.** Source: https://huggingface.co/api/models?sort=trendingScore&limit=25

**Other in-window HF repos:** `PotatoForge/Minimax-H3-Image-W4A4` (2026-11-10T17:14:52Z) · `shiffman/biscuit-smollm2-360m-ONNX` · `sabda-ai/gemma-4-E2B-sabda` and `-E4B-sabda` · `mradermacher/Qwen3-TTS-Sam-0.6B-GGUF` · `choyiny/yev2-35b-a3b-fp8` · `cmjones1966/MiniMax-H3-Longvideos`.

## Negative signals / disputes

1. **Anthropic deliberately capped Fable 5.2 / Mythos 5.2's AI-acceleration capability** — confirmed by the vendor's own system card, quoted on HN: models perform "at about the level of Opus 5.5" in accelerator-kernel and LLM-architecture research, with "transparent fallbacks to Opus 5" and deliberate limits on public access. No board captures this. https://news.ycombinator.com/item?id=50429068
2. **Benchmark-version churn breaks longitudinal comparison** — AA's own Muse Ember post notes "Artificial Analysis results are from Intelligence Index v5, as published November 9, 2026", i.e. the index moved under the model results. https://news.ycombinator.com/item?id=50429024
3. **Vendor early-access allegation** (unverified, no evidence) https://news.ycombinator.com/item?id=50431144
4. **Artificial Analysis accused of bias against open-weight models** — a LocalLLaMA post claims AA "conveniently re-calibrates" benchmarks when open models approach proprietary ones. **Community ALLEGATION, no evidence.** Weak today: AA's #1 and #13 are both closed models. https://www.reddit.com/r/LocalLLaMA/comments/1xs5pkl/is_artificialanalysis_biased_against_open_weight/
5. **The new BenchLM #1 is an estimated score** — Fable 5.2's 91.19 is `evidenceStatus: "estimated"`, `sourcePattern: "objective-only"`, 90% interval 76.84–100.00, with `futureTruthValidated: false`. https://benchlm.ai/api/data/leaderboard
6. **Fable 5.1 retired from FMRT the day its successor shipped** — head-to-head boards are poor longitudinal instruments. https://fmrt.ai/api/leaderboard.json
7. **Fireworks AI's second breach in weeks; Notion's AI chat transcripts exposed** after an initial "not impacted" notice. https://news.ycombinator.com/item?id=50437106
8. **Google allegedly routes personal Drive files and emails to human annotators** via Gemini — user-reported, not vendor-confirmed. https://news.ycombinator.com/item?id=50429426
9. **Meta accused of breaking its Muse open-source commitment** while shipping Muse Ember closed — **community ALLEGATION**, though the absence of HF weights is confirmed. https://www.reddit.com/r/LocalLLaMA/comments/1xs0qmx/muse_ember_zuck_promised_to_open_source_muse/
10. **Arete-27B appears to trade refusals for confabulations** on a homemade 30-question bench (Qwen3.8-Flash-Next and Orion-26B both 21/30, Arete materially lower) — small n, single rubric. https://www.reddit.com/r/LocalLLaMA/comments/1xs1nqc/confirming_apollomg_findings_organic_handmade/
11. **Quant/finetune saturation** — "What happens to the 1.3 million Qwen3.8 quant/variants after Qwen 4 releases?" https://www.reddit.com/r/LocalLLaMA/comments/1xs11q4/what_happens_to_the_13_million_qwen38/
12. **"AI usage generates a fragile codebase"** — the thread's counter-argument is that some fragility patterns predate LLMs. https://news.ycombinator.com/item?id=50438318
13. **Fable 5.2 reportedly making grammar errors** on launch day. https://news.ycombinator.com/item?id=50438506
14. **Source-quality problem** — the AA data manifest is undecodable and the legacy API is 410, so Decision Index v2 per-model scores cannot be retrieved by scraping. https://artificialanalysis.ai/data-api/migrate-v2-data
15. **Reddit rate-limiting** blocked r/MachineLearning (403 then 429) for ~4 minutes across multiple User-Agents and old.reddit.com; future runs should back off on that feed.

## Trend

Two launches ten minutes apart — Anthropic's Claude Fable 5.2 / Mythos 5.2 and Meta's Muse Ember — took over every board tracked: Fable 5.2 is now #1 on AA Intelligence Index (64.56 vs Gemini 4 Carbon's 60.03), BenchLM (91.19) and BenchLeader (72.1) and #2 on FMRT with an 86% win rate, and the mechanical cost is visible in the deltas — every incumbent slipped 0.3–0.8 points on BenchLM and BenchLeader while yesterday's FMRT #1 (Fable 5.1) was retired outright on launch day, so the same boards that crown a winner also discard the evidence for the previous one. The instrumentation is visibly straining: Anthropic's system card documents that Fable 5.2 and Mythos 5.2 were capped at roughly Opus 5.5 level in AI-acceleration research with transparent Opus 5 fallbacks, a vendor-confirmed capability carve-out that no leaderboard captures, while HN users note benchmark versions have shifted under older Opus 5.5 results. On cost, Muse Ember is the day's real story — Intelligence Index 36 at $0.136 per task, a third of Claude Haiku 5.5's $0.411. Community sentiment splits into two camps that rarely meet: the frontier thread is procurement economics and quota math ("waiting is almost a virtue", "I hope free open weight models prosper"), while r/LocalLLaMA keeps grinding locally on a 42% power-limit cut with zero throughput loss, 128 tok/s decode on a single 12 GB card, and DeepSeek-V4.1-Flash at 249 GB streaming off SSD. Underneath both sits a sour note — two inference-provider breaches in a month with Fireworks exposing Notion's AI chat transcripts after telling customers they weren't affected, a project alleging Google Drive data reaches human annotators, and vendors self-declaring capability caps. Hugging Face itself saw no notable new model creation in-window, its trending list is led by community uncensored merges, and the open-weight ecosystem is openly asking whether 1.3 million Qwen3.8 variants survive Qwen 4 — a saturation signal that frontier release cadence now outruns the ecosystem it feeds.
