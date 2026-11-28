# LLM Research Papers — arXiv 2026-11-10 (Task 1, condensed)

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
