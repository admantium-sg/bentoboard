# Findings — Nov 20, 2026 cycle (Task 1): arXiv screening, `cs.CL` / `cs.LG` / `cs.AI` (+ `cs.SE` / `cs.CV` / `cs.DC`)

Window covered: the 19 November 2026 arXiv announcement cycle (papers published 2026-11-19 UTC, announced 2026-11-20) plus the residual 17–18 November backlog that the previous cycles did not screen.

## Method and de-duplication

- Source: arXiv API (`https://export.arxiv.org/api/query`), cached under `tmp/nov20/t1/api_*.xml` — 9 files, `cs.CL`, `cs.LG`, `cs.AI` paginated at start=0/300/600, plus `cs.SE`, `cs.CV`, `cs.DC` at start=0. 2,939 unique entries after parsing.
- Publication-date histogram of the whole cached pool: 2026-11-19 → 516, 2026-11-18 → 492, 2026-11-16 → 441, 2026-11-17 → 430, 2026-11-15 → 158, then the 09–13 Nov tail.
- De-duplication: every candidate id was checked against a prior-id set built from `cumulative_findings.md`, all `daily_reports/*.md`, all `findings_*.md` and `archive/*.md` — **2,443 unique arXiv ids** already known. After removing them and restricting to publication dates ≥ 2026-11-17, **1,384 candidate papers** remained (516 / 466 / 402 for 19 / 18 / 17 November).
- Scoring: keyword scoring over five topic axes (reasoning, prompting/instruction, efficiency/serving, benchmark/eval, safety) plus an LLM-centrality term, then manual curation. 59 papers retained below.
- Zero overlap with any previously reported id: the 59 ids in this file were set-diffed against `prior_ids.txt` — **0 collisions**.

All numbers below are **author-self-reported from the abstract** and were not independently reproduced.

---

## A. Reasoning-model training and post-training

### 2611.26157 — NariQ: Sub-3-Bit Quantization for Long-Horizon Agentic Tasks
Trellis-coded post-training quantization that calibrates on tokens the BF16 model itself generates inside agent sessions, rather than on short web text. On Qwen3.8-27B, NariQ at **3.0 and 2.5 bits/weight matches BF16** on DeepSWE and Terminal Bench (long-horizon agentic), and on AIME and RealWorldQA; the 2.0-bit checkpoint trails. The framing is the interesting part: the paper states that existing ≤3-bit quantizations of Qwen3.8-27B match BF16 on AIME but in published results solve **at most 72% as many tasks** as BF16 on DeepSWE. Weights released as `Qwen3.8-27B-NariQ-GGUF`; inference via a llama.cpp fork.
Source: https://arxiv.org/abs/2611.26157
Source: https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF
Source: https://github.com/nari-labs/nari-llama.cpp

### 2611.26172 — Budget Internalization: Fixed-Budget RLVR Trades Test-Time Scaling for In-Budget Accuracy
The most consequential result in this cycle for anyone spending on inference compute. RLVR with a fixed rollout cap does not just bound training cost — it **becomes a learned constraint**. Models trained under a cap "use few additional tokens beyond the training budget"; they beat the base model near that budget but their accuracy stops improving and **falls below the base model at larger budgets**. Observed across Qwen3.5-4B, Gemma4-E2B and Nemotron-3-Nano-4B, on math and on procedurally generated problems, and it transfers from math training to science and coding. Ablations are the sharp part: stronger KL regularization preserves more test-time scaling but costs in-budget accuracy; SFT on *artificially* truncated traces reproduces the effect while SFT on *naturally* short traces does not — which ties it to **length-censored post-training**, not to an RL-specific objective term. The practical warning: a rollout cap can buy low-budget gains at the price of performance when extra inference compute is later available.
Source: https://arxiv.org/abs/2611.26172

### 2611.26342 — Training LLMs to Follow Reasoning Instructions with Minimal Edits
Edit-based training: sample a completion, let an editor find the *first* failure point under a stated criterion, propose a minimal replacement span, and supervise only on those spans — concentrating supervision where reasoning first breaks and leaving existing patterns elsewhere intact. On Qwen3-32B with the ReasonIF benchmark it beats full-trajectory SFT and trajectory-level RL on compliance with the reasoning instruction while largely preserving untargeted skills. Works offline and online.
Source: https://arxiv.org/abs/2611.26342

### 2611.25926 — ROAM-GRPO: Enforcing Reasoning Diversity in GRPO via Routed Off-mode Approach Mining
Targets the well-documented collapse of GRPO/RLVR policies into a low-diversity mode (repeated outputs nearly identical, pass@k converging or degrading). ROAM-GRPO detects well-solved problems, moves them to an "off-mode" track, asks for *distinct* solution strategies, verifies logical validity and distinctness with an LLM judge, and self-distills them back into the policy. On Qwen3.5-2B over a 1,000-problem MATH lvl5 subset it reports **peak pass@16 +4.7%** and roughly **1.5–2x larger correct-embedding cosine distance** on a difficult evaluation set.
Source: https://arxiv.org/abs/2611.25926

### 2611.26282 — What If Chain-of-Thought Is Not Enough?
Argues the *internal thinking model* of an LLM is trainable and that CoT is not the only substrate. The paper trains models to follow a Question–Option–Criteria (QOC) structured decision process — explicit questions, competing options, evaluation criteria — through a three-generation pipeline from a bare QOC core to answer synthesis to statistically enriched QOC reasoning. Gains over non-fine-tuned bases are reported, with the largest once models are large enough to execute the underlying QOC computations reliably.
Source: https://arxiv.org/abs/2611.26282

### 2611.25597 — Decision-Focused Reinforcement Learning for LLM Post-Training
DFRL post-trains an LLM used as a *predictor of optimization parameters*, using negative downstream decision regret as reward rather than prediction loss. It needs no downstream convexity or differentiability and drops into existing RL post-training stacks; reward cost is handled with heuristic warm-starting plus reward correction (inexpensive estimates mixed with randomized exact evaluations, preserving the expected policy gradient). On H&M inventory planning with product descriptions, the best configuration — LLM reasons before predicting — **cuts regret 31.4% vs the SFT baseline and 12.4% vs the strongest conventional forecasting baseline**.
Source: https://arxiv.org/abs/2611.25597

### 2611.26509 — GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers
Decision models score candidate answers in a single forward pass — no generated reasoning — but reasoning improves decision quality. GLiDE (0.4B–27B, built on Qwen hybrid LMs) removes causal masking from full-attention layers for bidirectional context/question/candidate interaction, then transfers reasoning via soft-target distillation from multiple teachers plus progressive post-training on decision tasks, with parameter-free recurrent depth to add inference compute without emitting tokens. **GLiDE-27B reports a hidden-set score of 71.52, ECE 2.0%, median latency 92.9 ms on one GPU**; checkpoint averaging plus recurrent depth reaches **73.37 at ECE 2.1%**. Claimed to sit on the performance–parameter Pareto frontier of the HF Decision Index.
Source: https://arxiv.org/abs/2611.26509

### 2611.25363 — Stop Going in Circles: Loop-Triggered Routing for System 1 Decision Agents
LoopRoute: a fast decision model acts by default; when recurring state-action pairs signal a stall, a heavyweight LLM policy gives brief feedback-driven help and hands control back. No extra training, no per-model confidence calibration. Mean gains of **+21.0% (ALFWorld), +60.1% (MapReader), +30.1% (TextWorld cooking)** over standalone Jev, with lower cumulative API time and call cost than full LLM control; the same rule also improves six frozen decision models.
Source: https://arxiv.org/abs/2611.25363

### 2611.26423 — Seer: Guiding Small Deep-Research Agents with Shared Decision Models
Separates action *proposal* from learned *consequence prediction and value estimation*, so a small on-device agent can search over candidate actions without paying for real tool calls on the discarded ones. Two models trained offline from a shared corpus of real research trajectories: a tool-response simulator on observed call–response pairs and a value estimator on histories labelled with discounted terminal correctness; both reused across agents with no further training. Reported GAIA gains: **13.6% → 41.7% for Qwen3.5-4B** and **22.3% → 50.5% for Qwen3.5-9B**. The paper's own analysis is the useful bit: broader candidate coverage can compensate for imperfect simulation, while prediction and scoring errors cap the benefit of wider imagined search.
Source: https://arxiv.org/abs/2611.26423

### 2611.22055 — Weight-Space Programming Doesn't Need Transformers (17 Nov backlog)
Given ten labeled examples and a sandbox, three frontier LLMs were asked to write target weights by hand — either for a fixed architecture or by designing one. When free to design, all three compiled plain-text facts into a sparse table queried by a fixed procedure, reaching **up to 54.4% test accuracy**. An LLM-designed model beat the most accurate released Transformer the same LLM wrote, using **~1,800x fewer parameters**; a proposed associative-memory model runs **up to 17x faster on GPUs** than a same-sized Transformer. Each wrong answer points to one table row, so weights stay interpretable and rewritable. Pretrained LLMs remain more (sic) competitive on other benchmarks.
Source: https://arxiv.org/abs/2611.22055

---

## B. Inference efficiency, KV cache and serving

### 2611.25433 — RoCoKV: Accelerating LLM Inference Serving through Uncertainty and Redundancy Aware KV Cache Compression
Targets the specific pathology of *reasoning* models: cost is dominated by long generated traces, and trace tokens are redundant (looping, self-verification, corrections) yet still carry high attention scores, so naive pruning hurts. RoCoKV prunes adaptively by model confidence (more memory when uncertain, more pruning when confident) and prefers tokens dissimilar to recent reasoning content. It is co-designed with the serving stack — fused three-phase CUDA decode kernels, a vLLM drop-in plugin that preserves paged KV layout and CUDA graph capture. Reported on DeepSeek-R1-Distill-Llama-8B in vLLM: **1.27x speedup / +38% throughput on AIME25 and 1.43x speedup / +45% throughput** on a long synthetic benchmark vs Full-KV.
Source: https://arxiv.org/abs/2611.25433

### 2611.26363 — HiSA: Sparsifying the Hidden Dimension of RoPE Attention in LLMs
Sparsifies attention along the **hidden (feature) axis** rather than the token axis — a much less explored axis. HiSA keeps query/key projections intact but computes only a partial dot product, using a static, parameter-free rule derived from RoPE structure (keys and queries decompose into parts that can be omitted). Trained from scratch, the partial dot product **does not hurt and reportedly improves** performance while computing **only about a third of the query-key products**, improving decoding speed and memory footprint; extended to FlashAttention-3 kernels. The motivation is nice: dense attention is shown to learn to suppress exactly the attention-score parts HiSA drops.
Source: https://arxiv.org/abs/2611.26363
Source: https://github.com/ambroise-b/hisa

### 2611.25938 — DTS: Delta-Based Tile Scoring for Efficient Long-Context Sparse Attention
Training-free, content-adaptive tile scoring for block-sparse attention. Anchors are selected by local vector change, so redundant regions use fewer representatives and heterogeneous regions keep more detail; parallel delta packing makes the selection cheap. On LLaMA-3.1-8B-Instruct it keeps RULER/LongBench **within 0.10 points of full attention** (RULER evaluated to 128K). At 128K it cuts scoring-pipeline latency **38% vs XAttention**; on four H100s it reaches a **3.3x prefill speedup** over a PyTorch full-attention + FlashAttention-2 baseline at 512K tokens.
Source: https://arxiv.org/abs/2611.25938

### 2611.25813 — Efficient and Robust Drafting with Multi-Token Prediction
A heavily optimized MTP drafter for speculative decoding with three components: target activation injection to anchor semantic planning, zero-copy KV-cache cross-attention to bypass prefill compute and cut memory overhead, and a clustered vocabulary projection to avoid full-vocabulary decoding cost. With the Gemma 4 family: **up to 3.1x on large server-side setups, up to 2.3x on H100 and 2.2x on a smartphone GPU** for smaller on-device models. The fine-tuning recipes require **up to 1.83x fewer target forward passes** than tuning the backbone only.
Source: https://arxiv.org/abs/2611.25813

### 2611.26619 — TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming
Serving system for hybrid architectures (global-attention plus bounded-state layers, as in current open-weight MLLMs) on CPU–GPU superchips. Three parts: a Transparent Cache Pool that redistributes physical pages behind fixed virtual addresses; a Cache Streamer that prefetches the next global-attention layer's prefix into shared GPU slots using computation intervals from the bounded-state layers (generated KV stays resident); and a Request Scheduler that picks resident vs streamed execution. In SGLang on GB300 and GH200 across seven model/platform configurations: **up to 2.04x as many agent turns, 20–59% lower overall P50 per-token latency, 1.40–3.05x better agent P50 TTFT** vs SGLang with HiCache.
Source: https://arxiv.org/abs/2611.26619

### 2611.26435 — Aggron: Aggressive Compression of Agentic KV Caches during Head-of-Line Stalls in the Request Queue
Turns the server's own idle capacity against the compression problem. Aggron summarizes agentic requests *at every turn* and only for selected parts of the KV cache, launching summarization from a separate queue that consumes the compute and memory left idle by head-of-line stalls in the main queue — and only issues a summarization when it can predict it will finish before the stalled agentic request executes. Against state-of-the-art asynchronous summarization at high load: **P99 program latency reduced 27–31%, throughput up 1.34–1.40x**.
Source: https://arxiv.org/abs/2611.26435

### 2611.25078 — Twindex: Index Cache Offloading with Coarse-to-Fine Selection (18 Nov backlog)
Identifies a bottleneck that only appears once KV is offloaded to host memory: the *indexer* cache becomes the HBM constraint — **63% of per-request HBM on Qwen and 75% on DeepSeek V4.1-Flash at 1M tokens**. Twindex keeps a compact copy of the indexer cache in HBM and the full cache in host memory, the copy selecting a larger candidate set from which the model's own indexer picks the top-k from the original rows. No weight changes; runs inside CUDA graphs. At 1M tokens it fits **1.78x / 1.62x / 3.03x as many requests** as KV offloading alone (Qwen / V4.1 / GLM-5.2), with **1.44x / 1.25x / 2.54x decode throughput** when host memory is not the limit.
Source: https://arxiv.org/abs/2611.25078

### 2611.25112 — TripleKV: Predict, Prefetch, Protect — KV Cache Management for AI Agents (18 Nov backlog)
Three-tier KV cache for agent workloads, where the KV blocks needed by the *next* inference request are known in advance — only the time of reuse is uncertain. A tool-aware latency predictor estimates when each tool call will finish and prefetches KV blocks from SSD into host DRAM ahead of time, without reserving scarce GPU memory. Plus DRAM de-duplication of GPU-resident blocks and a victim cache that refills from SSD on eviction. Across data, web and coding agents, **critical-path SSD reads fall from 45–76% to under 10%**, with **P95 TTFT reduced up to 49%**.
Source: https://arxiv.org/abs/2611.25112

### 2611.25670 — Efficient Latent Reasoning for Vision-Language Model via Dynamics-Aware Quantization and Distillation
QL-VLM quantizes *latent* (continuous-thought) CoT models, where direct quantization badly degrades reasoning. Operator and perturbation analysis shows continuous-thought errors are direction-dependent, so reconstruction accuracy is the wrong objective. Two components: Dynamics-Guided Quantization with nonuniform codebooks preserving rotary-key structure, and Dynamics-Preserving Distillation aligning continuous thoughts, latent-query readouts and predictions with an FP teacher. On ScienceQA-IMG with Qwen2-VL-2B-Instruct, **4-bit QL-VLM reaches 90.43% accuracy, +40.33% over baseline, with 16.64x fewer bit-operations and 6.40x lower measured latency than explicit CoT**.
Source: https://arxiv.org/abs/2611.25670

### 2611.23695 — MoMoVL: Modality-Aware Adaptive Compression for On-Device Sparsely-Activated VLMs (18 Nov backlog)
Mixed-precision quantization for MoE-based VLMs on edge devices, with the observation that in MoE VLMs the visual-vs-text token distinction changes per-expert quantization sensitivity. MoMoVL jointly exploits per-expert activation profiles and per-modality sensitivity to assign bit-widths, improving the accuracy–compression trade-off.
Source: https://arxiv.org/abs/2611.23695

### 2611.25905 — Validation-driven Deployment of LLM Inference Platforms for Agentic Workloads
An end-to-end validation pipeline for rolling agentic workloads onto self-hosted open-weight models, with two empirically useful numbers: **replaying captured traces reproduces per-session load far better than live re-runs** (at P95, replay stays within 1.18x of recorded input tokens while live re-runs reach 4.98x), and a vLLM code-coverage analysis shows live, replayed and synthetic workloads are complementary — each exercises serving paths the others miss. A case study rolling four large MoE models on llm-d found the target models reached only **~half the optimal concurrency and ~60% of the throughput** on captured workloads versus public traces.
Source: https://arxiv.org/abs/2611.25905

### 2611.24085 — LEDGE: An Efficient Simulator for Distributed LLM Serving on Heterogeneous Edge Devices (18 Nov backlog)
Simulator for edge LLM serving that does not execute tensor operations: event graphs support non-uniform tensor and pipeline parallelism, execution cost comes from reusable performance models calibrated from end-to-end measurements, and shared-link contention is simulated. On a testbed of 10 Jetson and Raspberry Pi devices spanning 17 model–precision combinations across 4 LLM families, Qwen deployments show **request-level MAPE below 3.6% and a 135.3x aggregate speedup over physical inference**; a performance model calibrated on one LLM family transfers zero-shot at 7.44% error.
Source: https://arxiv.org/abs/2611.24085

---

## C. Memory, context management and long-horizon agents

### 2611.25673 — CompAct-Bench: A Benchmark for Working-Context Compaction in Long-Horizon Agent Tasks
Benchmark that measures working-context compaction by its *downstream* effect: start from successful agent trajectories, insert compaction boundaries at different execution stages, compress the preceding working context with the model under test, and let the same executor continue. Compaction is compared at controlled retention ratios via iterative ratio adjustment, over BrowseComp, SWE-bench and an internal CompanyBench. Finding: compaction remains **highly lossy even for frontier models** — Claude- and GPT-family models perform best but degrade substantially under aggressive compaction. The failure mode is not only omission: **distorted task state** (turning unresolved issues into apparent conclusions, forgetting established results) causes wrong or redundant work.
Source: https://arxiv.org/abs/2611.25673

### 2611.25123 — Forget Freely, Grep Later: Lossless, Index-Free Memory for Long-Horizon LLM Agents (18 Nov backlog)
GrepMem is a deliberately simple counter-argument to structured memory: an append-only plain-text log of the complete history plus a regex search tool, with no embeddings, retrieval index, extraction step or extra model. Qwen3.5-9B trained with RL under five context-management strategies reaches **95–97% accuracy on ContextBench vs at most 21% for lossy baselines**, and **+8.8 points over SUPO's summarization on BCP-Multi**. It scales with input length and stays on the accuracy–token-cost Pareto frontier.
Source: https://arxiv.org/abs/2611.25123

### 2611.22179 — RAG in a Trenchcoat: When Minimal Memory Is Enough for Agentic Systems, and When It Isn't (17 Nov backlog)
A deliberately minimal RAG memory (chained observation notes, hybrid BM25 + cosine retrieval, chronological rendering; one LLM call per ingestion or query at ~5–7K reader-prompt tokens) reaches **parity within bootstrap CI with the prior SOTA on LongMemEval-S and BEAM** and **beats the best memory baseline on EverMemBench by 5.7–6.3 points** at a matched reader. The paper's thesis is that standard memory benchmarks score *what memory retrieves*, not *what memory enables when the agent acts*, so it adds five adversarial probes (rule application, pattern induction, dynamic multiturn) judged at generation time by a cross-vendor verification chain. No architecture wins universally: atomic fact extractors win rule application, BRIDGE's block-summary memory wins pattern induction.
Source: https://arxiv.org/abs/2611.22179

### 2611.26361 — How Much Should an Agent Remember? Deployment Lessons from Self-Distilled Memory
IBM's deployment of self-distilled memory (lessons mined from the agent's own trajectories, consolidated into guidelines that record how many lessons they merged) across AppWorld, spanning models with 40–92% baseline completion. Central finding: **the right amount of memory is a property of the model, not the memory**. DeepSeek-V3.2 gains **+9.5 points task completion and +16.1 points scenario completion** with its full 191-guideline set; gpt-oss-120b starts at 39.9% and reaches 51.2% with all 199 guidelines but **55.4% with a selected subset of ~29**. The paper is unusually candid about what went wrong: a high-support guideline that backfired, provenance silently dropped during consolidation, a swallowed API error that failed every task while producing a plausible log, and a baseline confound that nearly produced a misleading comparison. Shipped in the open-source `altk-evolve` library, deployed in IBM's CUGA agent and watsonx Orchestrate.
Source: https://arxiv.org/abs/2611.26361

### 2611.25855 — HabitusMem: Belief Memory over Evolving User Preferences for LLM Agents
Treats memory as the assistant's *belief* about the user rather than stored content: the user is a latent preference state that every interaction both reveals and updates, and each memory record carries evidence, scope and status. Implemented as a trained writer that emits beliefs as text for a frozen agent; best among memory systems on PersonaMem-v2 and VitaBench 2.0 across two agent families. Ablations attribute the gain to learned request conditioning, with auxiliary training tasks helping tool use.
Source: https://arxiv.org/abs/2611.25855

### 2611.25705 — STARK: Moving towards Personalized Agents That Truly Learn and Remember
Dual-graph memory: an Episodic Graph records interactions as temporally, causally and semantically linked episodes, while an Insight Graph holds LLM-extracted behavioral signals scored by supporting-event counts, connected by the very events that led to them (events as edges). Because insights are grounded by edges, retrieval skips repeated episodic traversal, and the graph projects into a relational embedding space enabling **cross-user transfer** — inferring missing insights for cold-start users. Reports **+1.48 judge score on LongMemEval information extraction and +0.93 on LoCoMo** open-domain questions over SOTA; on LongLaMP, cross-user transfer adds **+0.7 judge score and +3 ROUGE-L at 5% graph sparsity**.
Source: https://arxiv.org/abs/2611.25705

### 2611.25235 — Some Memories Must Fade: Persistence and Decay of User Memories in Model Parameters (18 Nov backlog)
Argues parametric memory should not mirror the continual-learning objective of retaining everything. The substrate is a fixed-capacity LoRA adapter built from k-hot rank combinations that store facts without catastrophic interference and support **independently controlled temporal decay**, so outdated information fades while stable facts persist; a lightweight learned controller governs what to remember, how deeply and for how long.
Source: https://arxiv.org/abs/2611.25235

---

## D. LLM-as-a-judge and evaluation methodology

### 2611.25588 — Rubric Semantics or Numerical Priors? Auditing Scale-Direction Bias in LLM Judges
Introduces *semantic faithfulness* (semantically equivalent rubrics must yield consistent scores) and probes it with a **scale-reversal probe** that inverts score anchors without altering evaluation criteria, plus floor normalization to calibrate reversal disagreement against intrinsic model variability. Across five meta-evaluation benchmarks with seven judges (open-weight and proprietary) the paper finds **widespread violations of semantic faithfulness**, and that raw reversal agreement alone is misleading. Bidirectional anchor averaging reduces dependence on any single anchor direction without hurting human alignment.
Source: https://arxiv.org/abs/2611.25588

### 2611.26077 — Same Judgement, Different Scores: Numerical Scoring Topology in LLM-as-a-Judge Evaluation
Names *numerical scoring topology* — scale width, granularity, offset, symmetry, boundary placement — and runs what it claims is the first systematic study of how that structure changes zero-shot judging across benchmarks and judge models. Findings: topology systematically affects scores, calibration and robustness, especially in judgment-intensive evaluations; **shifted and narrow ranges produce some of the largest score deviations**; and **stronger, larger judges are more discriminative and more robust** to topology changes. Implication: the scoring scheme should be treated as a component of the evaluation, not an afterthought.
Source: https://arxiv.org/abs/2611.26077

### 2611.26073 — AltRA-Test: An Alternative Annotator Test for LLM Judges Without Shared Annotators
Extends the Alternative Annotator Test to the common case where *different subsets* of annotators label different items. AltRA-Test bootstraps over items, draws k human annotations per item, substitutes one with an LLM annotation, and compares the inter-annotator agreement of the mixed panel against the all-human panel — replacement is supported when the LLM preserves the signal humans share. The test is shown to be consistent at asymptotic level alpha, and evaluated with **18 LLMs, 5 prompting techniques, 20 datasets across text, image, audio and video**; **about 100 items often suffice**. In simulation it makes more correct replacement decisions than existing baselines; on real data **LLMs pass in about half of the setups, depending mainly on the task**.
Source: https://arxiv.org/abs/2611.26073

### 2611.25582 — AutoRAGBench: A Benchmark for LLM Agents Automating RAG System Development
Nine tasks where agents build RAG systems from scratch with no starter code and no prescribed strategy, on a six-hour budget on a single H800. **GPT-6.1 Sol with Codex CLI averages 56.1 against a 44.4 Human-SOTA composite baseline**, and improves on a human-designed starting system by **16.6 points on average** across seven tasks.
Source: https://arxiv.org/abs/2611.25582

### 2611.25360 — AppSci-Bench: Can LLMs Build AI Agents and Make Them Better?
Seven realistic domains (Slides Generation, Order-to-Cash, Compliance Review, Customer Call Insights, CRM Insights, plus Airline and Banking recast from tau3-bench) each with a held-out evaluation suite. Best model, **Claude Opus 5.0, reaches only a 59.1% mean-minimum score across three build attempts**; others do significantly worse. The diagnostic detail is the good part: models struggle with eliciting requirements (**65% for Opus 5.0**), and they **saturate their own internal evaluations 65% of the time while failing the held-out task** — i.e. models judge their own agents as finished while the agent is broken.
Source: https://arxiv.org/abs/2611.25360

### 2611.25590 — Measuring Hallucination in LLMs for Cyber Threat Intelligence
HalluVision: generates LLM outputs over 4,940 real cybersecurity articles, extracts domain entities with a fine-tuned NER model and evaluates factual consistency with multiple similarity metrics, validated against 100 human-annotated outputs and two faithfulness detectors. Result: **semantic similarity aligns with human judgment while entity-based metrics agree poorly**, and model differences concentrate in question answering.
Source: https://arxiv.org/abs/2611.25590

### 2611.23530 — Dreaming Up Authors: Factual Prevalence and LLM Hallucinations in Academic Authorship Attribution (17 Nov backlog)
Uses citation count as a proxy for factual prevalence over a curated **1.92M-paper** dataset across eight disciplines, stratified by citation level. Across three frontier LLMs the inverse relationship between hallucination rate and citation count is robust in every model and discipline: **hallucination rates exceed 98% for rarely cited papers and fall below 37% for highly cited ones**. Analysis attributes these failures primarily to *retrieval limitations rather than knowledge absence*, and hidden-state probing shows factual prevalence is already encoded in pre-generation representations.
Source: https://arxiv.org/abs/2611.23530

---

## E. Safety, alignment and misuse

### 2611.25793 — When Safety Rationales Hallucinate: Diagnosing and Grounding Multimodal Safety Guards
Introduces *rationale hallucination* in multimodal safety guards, split into visual rationale hallucination (unsupported visual facts) and safety attribution hallucination (grounded content given the wrong safety reading). Across rationale-generation methods, backbones and datasets it is **widespread and does not shrink with higher classification accuracy or larger models**. In Think-with-Image analyses the hallucination concentrates in fine-grained attributes and relations, and visual tools are invoked infrequently or without spatial focus. The proposed fix, Tool-Contrastive Grounding RL, rewards tool use only when it beats a tool-free reference, cutting rationale hallucination while keeping safety-prediction performance competitive.
Source: https://arxiv.org/abs/2611.25793

### 2611.26569 — Text-Aware, Vision-Blind: How Multimodal Image Editing Systems Handle Unsafe Inputs
EditSafetyBench: **5,940 image–instruction pairs**, safe and unsafe images across 11 risk categories and three edit intents, probed on Gemini, GPT, Qwen API and Qwen Local. Headline finding is a systematic text–vision safety mismatch: Gemini and GPT refuse **87.1% and 81.6%** of cases with unsafe-intent *prompts*, but only **24.2% and 22.4%** when the risk is in the *image* and the instruction is neutral. Category-level inconsistency is large (GPT allows 70.4% of unsafe political content edits, Gemini only 34.8%); sexual content shows the strongest visual sensitivity.
Source: https://arxiv.org/abs/2611.26569

### 2611.25492 — Why Do LLMs Help with Scientific Misconduct Requests and What to Do About It?
Across 8 LLMs on SciIntBench (1,350 research-integrity prompts), the gap between recognition and refusal is the finding: models **identify misconduct requests 91% of the time even in the Most Covert cases, yet refuse to comply only 34% of the time**. The largest single lever is phrasing — rephrasing an instruction as a question about permissibility raises refusal from **52% to 88%**. Two cheap system-prompt fixes ("assess the request before responding", "remind responsible conduct of research principles") raise refusal on adversarial requests from **58% to 87% and 86%**.
Source: https://arxiv.org/abs/2611.25492

### 2611.25898 — Verifiable Logic in Medical LLMs (critical review)
Reviews four paradigms — how clinical hallucination arises and why static metrics miss it; the agentic hallucination cascade where multi-agent and tool-augmented systems amplify early reasoning errors; process reward modeling as step-level supervision; and neuro-symbolic grounding with logic engines, ontologies and knowledge graphs. Verdict: symbolic veto layers offer guarantees *relative to their encoded knowledge*, but the evidence comes from single studies in simulated or small-sample settings and is not comparable with neural baselines; PRMs stay bounded by their training statistics. Argues responsible certification should audit reasoning trajectories, not just final-answer accuracy, since regulation currently requires only performance.
Source: https://arxiv.org/abs/2611.25898

### 2611.26545 — The Geometry of Lies: Knowledge and Persona Directions for Detecting Deception in LLMs
Extends a published persona bank with roles that deny knowledge they *have*, plus honest counterparts. At the middle layer, the persona direction ranks lies on Liars' Bench better than single-dataset probes on three of four models but **fails on Qwen**; on Llama-3.3-70B-Instruct its gain over the published direction is **within the range of random widenings**. On lies about knowledge, persona directions mostly track wording; a separate knowledge direction separates lies from identical honest denials on two models, narrowly on a third, and not on the fourth. The sum of both directions beats a supervised probe at the same depth on all four models (near chance on one) but trails that probe on held-out lies.
Source: https://arxiv.org/abs/2611.26545

### 2611.25583 — DriftGuard: Online Memory-Drift Detection via Causal Attribution
Estimates each retrieved memory's causal contribution to drift at serving time. Two obstacles named: content features (perplexity, relevance) cannot determine which memory would change behavior if neutralized, and counterfactual attribution requires replaying downstream agent and tool execution per candidate memory. DriftGuard decouples offline causal supervision (paired counterfactual replays from a shared pre-action state, aggregated into a memory drift score covering action change, attack removal, violation removal and task recovery) from an online risk model that flags drift-inducing memories by maximum component risk without online rollouts.
Source: https://arxiv.org/abs/2611.25583
Source: https://anonymous.4open.science/r/DriftGuard-7F0B

### 2611.24936 — Jailbreak Detection on LLMs via Contrastive Prototype Structures (18 Nov backlog)
JDPI uses only binary safety labels to build harmful and benign prototypes and predicts from relative prototype distances — no separate downstream classifier, hence fewer labeled examples than the classifier baseline. Contrastive fine-tuning improves detection accuracy by **9.1–18.0 points**; with dataset-specific adaptation JDPI exceeds the released **Llama Guard 3-8B** baseline by **0.173–0.310 ROC-AUC** across four benchmarks. In multi-turn replay on TomGibbs it accumulates user history for higher conversation-level accuracy.
Source: https://arxiv.org/abs/2611.24936

### 2611.22278 — DACE: Diversity-Driven Adversarial Co-Evolution for Robust LLM Safety Alignment (17 Nov backlog)
Names two pathologies of co-evolutionary safety training: **attack strategy collapse** (attacker overfits to a narrow set of high-reward rewrites) and **defense adversarial forgetting** (defender loses competence against earlier attacks as the attack distribution drifts). DACE attacks the attacker side with a two-dimensional strategy space (risk category x attack style) and a normalized marginal coverage gain reward that stays bounded and non-vanishing, and defends with a Bayesian adversarial replay pool whose Beta–Bernoulli threat posteriors decay over time and are sampled via Thompson sampling. Notes that existing attacker-side diversity rewards measure textual novelty, not strategy novelty, and defender replay relies on discrete judge scores that ignore estimation uncertainty and defender non-stationarity.
Source: https://arxiv.org/abs/2611.22278

### 2611.22177 — The Only Edge Was Memorized in Training: LLM Trading Agents Around Earnings and Bad News (17 Nov backlog)
Tests LLM trading agents at two moments where money can plausibly remain: before earnings announcements, and after bad-news drops, on a look-ahead-free benchmark (598 earnings announcements, 409 bad-news drops of large US stocks), staged agents vs single calls vs simple rules vs logistic regression, each decision made with and without the ticker name. Across five models from four vendors, **no agent beat the simple bets**; a Gemini-based agent called almost every fall an overreaction and no agent picked better dips than buying them all. The only gains came from memorized training content — given just ticker and dates, a GPT-based model called direction on **59.2%** of the earnings moves.
Source: https://arxiv.org/abs/2611.22177

---

## F. Multimodal and domain-specific

### 2611.25680 — Beyond Entity Recognition: Vision-Centric Knowledge Visual Question Answering
VC-VQA, a large-scale benchmark for vision-centric knowledge reasoning, modelling both the *source* of visual information (internal vs external image) and the *stage* at which it enters (pre- vs post-retrieval), with a controlled multimodal knowledge base with traceable textual and visual evidence per sample. **21 MLLMs evaluated** under four settings (no external knowledge, evidence provided, KB retrieval, open-web search). Three findings: current models still struggle with vision-centric knowledge reasoning; **fine-grained visual knowledge acquisition is the primary bottleneck**; and agentic retrieval shows the value of multi-step planning and cross-modal integration.
Source: https://arxiv.org/abs/2611.25680

### 2611.24762 — A³Bench: Compositional Reasoning over Aggressive Interactions in Videos (18 Nov backlog)
Benchmarks whether MLLMs can identify who performed an aggressive action, who received it and how participants relate — not merely whether aggression occurred. **17 multimodal models** degrade consistently as reasoning complexity rises, confusing aggressors with victims and bystanders: a systematic failure in role–action association rather than coarse aggression recognition.
Source: https://arxiv.org/abs/2611.24762

### 2611.24795 — Ultimate3D: Teaching MLLMs 3D Camera-Object Relations (18 Nov backlog)
Synthetic pipeline turns 3D assets into photorealistic images with precise camera-object relations via rendering plus diffusion generation, with LLMs generating the text prompts for instruction tuning. **240K VQAs** with camera-object annotations plus a benchmark. MLLMs fine-tuned on it beat commercial models by a large margin, with **+29.7% average accuracy on camera-object relation recognition**.
Source: https://arxiv.org/abs/2611.24795

### 2611.24043 — Compression Effects on Low-Resource Multilingual Translation (18 Nov backlog)
Pilot study on Hausa, Swahili and Yoruba across Qwen2.5-1.5B, Aya-23-8B and NLLB-200-distilled-1.3B on FLORES-200 (1,012 sentences/direction) at FP16, INT8 and NF4 INT4 on T4 GPUs. Three results worth keeping: the **specialised MT model beats both LLMs by 32.7–43.3 chrF on Hausa and Swahili** and 12.9–24.7 chrF on Yoruba while being ~1/6 the size of the 8B instruction model; **quantisation preserves quality within ~1 chrF** (worst case 2.19 chrF); and on consumer GPUs **INT8/INT4 save 49–61% memory at INT4 but *increase* latency 1.3x–5.3x** versus FP16.
Source: https://arxiv.org/abs/2611.24043

### 2611.23638 — When Do LLMs Model the Right Target? Problem Formulation in High-Stakes Risk Prediction (18 Nov backlog)
Examines decision dependency — historical decisions affecting observed outcomes — in LLM-generated code and explanations across child-welfare, healthcare and employment, using 11 OpenAI/Anthropic models and seven prompt conditions. LLMs **do not reliably address decision dependency without explicit prompt guidance**; when the prompt specifies target, assumption and procedure, target-aligned implementation reaches **99–100%**. A simple prompt description of how decisions affect outcomes appears sufficient for frontier models.
Source: https://arxiv.org/abs/2611.23638

### 2611.24765 — LLM-Guided Cyber-Physical Attack Path Identification in Smart Grids (18 Nov backlog)
Physics-grounded framework that combines system topology with LLM-guided STRIDE and MITRE ATT&CK threat modelling, using cascading-failure-derived impact rankings as ground truth, compared against topology-driven, threat-driven and fusion-based baselines.
Source: https://arxiv.org/abs/2611.24765

### 2611.24588 — LLMs or AI Agents for English-to-Arabic Translation? WikiEn-Ar190 (18 Nov backlog)
New dataset of 190 Wikipedia articles from 18 areas, verified by two native Arabic speakers. GPT-5-mini as a standalone translator reaches a **COMET score of 0.8649** and average human adequacy/fluency/style of **4.53/5**; wrapped in a self-assessment-and-improvement loop it **improves lexical accuracy by 28.76% (BLEU 22.83)** at similar semantic quality.
Source: https://arxiv.org/abs/2611.24588

### 2611.22580 — AfriNORM: Normative Reasoning of LLMs Across African Cultures (17 Nov backlog)
Scenario-based multiple-choice benchmark measuring the African deontic modality — strict norms and taboos — rather than linguistic fluency. Introduces a Universal Commonsense Bias Score and a Distractor Bias Score. Case study in Yorùbá finds confusion gaps in Gemini 2.0 Flash, GPT-5 and Llama 3.1 8B Instruct, with much lower accuracy in Yorùbá than English attributable to cultural confusion rather than simple bias.
Source: https://arxiv.org/abs/2611.22580

### 2611.22456 — PACD: Provenance-Aware Consensus Decoding for Cross-Modal Hallucinations (17 Nov backlog)
Training-free decoding for Omni-LLMs where one modality improperly influences predictions about another. Two paths: for non-consensus cases, Relevance-Guided Candidate Arbitration selects task-relevant unimodal evidence and arbitrates between alternative candidates; for consensus cases, Provenance-Based Consensus Recovery uses an outranking principle over layer-wise modality evidence to resolve erroneous consensus under confidence constraints. Evaluated across four Omni-LLMs and five benchmarks.
Source: https://arxiv.org/abs/2611.22456

### 2611.23691 — MEM-STRESS: Wearable-Informed AI Chatbot for Stress Management (18 Nov backlog)
Four-week non-randomized study with 60 adults comparing a chatbot that turns wearable-ring physiology into layered memory (daily records, baseline deviations, LLM summaries) against one that remembers only past conversations. The Treatment bot referenced participants' physiological features in **71.8% of sessions**, suggested more body-related DBT skills (**14.5% vs 5.7%**) and participants praised personalization **44.4% vs 14.3%** as often.
Source: https://arxiv.org/abs/2611.23691

### 2611.24377 — LLM-Assisted Multi-Fidelity Bayesian Optimization (18 Nov backlog)
Adds a knowledge basis to conventional multi-fidelity BO: from an expert's description of the physics the low-fidelity model omits, an LLM judges which of two designs needs the larger signed residual correction, and a pairwise Gaussian process converts those judgments into the basis; high-fidelity data calibrates contribution and sign so knowledge is not trusted blindly. On a lithium-ion battery design problem it **cut the regret area under the curve by 61%** versus conventional MFBO, and the authors note **knowledge quality, not the choice of LLM, determined whether the search was useful**.
Source: https://arxiv.org/abs/2611.24377

### 2611.25257 — Keel: A Frontier Model Teaches a VLM by Rewriting Its Weights (18 Nov backlog)
Agentic weight editing for VLMs: given only the symptom (small reasoning VLMs like Qwen3.5 loop in thinking mode until the token limit), a frontier multimodal LLM acting as an editor locates the cause in the weights, edits them, and tests them, with a failure census and attention instrumentation; the harness keeps only edits that clearly reduce failure without lowering accuracy on unseen questions. **No training, no change in model size or per-token cost**, and it applies to already-edited weights. Independent editors on two models trace the loops to middle-layer attention outputs; the smaller VLM stops consulting the image inside a loop.
Source: https://arxiv.org/abs/2611.25257

### 2611.25839 — Self-Replicating Language Models
Tests three modes of LLM self-reproduction: emitting a genome that trains its offspring, copying and mutating its own weights, and teaching a child from its own samples. Small language models can in principle replicate and evolve, with selection improving them and adapting them to narrow niches; selection also lowers mutation rates, and because a language model can drive its own rate to zero, that may limit its evolution. Flagship LLMs can write such replicators, but a large LLM reproducing by teaching its offspring remains technically and economically infeasible for now.
Source: https://arxiv.org/abs/2611.25839

### 2611.26333 — OceanCoder: Verification-Guided LLM for Automated Simulation Modelling in Ocean Engineering
Qwen3-8B-based model with 12,000 verified SFT examples across 12 engineering task categories and a three-layer verification framework (inputs vs engineering parameters and constraints, completion of required simulation analyses, plausibility of computed outputs) whose outcomes feed **graded rewards for GRPO**. On a first benchmark for automated modelling in ocean engineering, **Pass@1 rises from 0% for the base model to 46.77% after SFT and 51.43% after GRPO**, beating a closed-source comparison.
Source: https://arxiv.org/abs/2611.26333

---

## Cross-cutting observations from this cycle

1. **Serving work is consolidating around "the indexer / the KV cache is the real cost".** Four independent papers this cycle (Twindex, TideCache, TripleKV, Aggron) attack different layers of the same stack — indexer cache, layer-wise streaming, tool-aware prefetch, opportunistic summarization — and all report the same underlying shift: for agentic and hybrid workloads the bottleneck is no longer prefill or FLOPs but **memory residency of the growing context**.
2. **Quantization is being re-benchmarked against the right task.** NariQ explicitly criticizes calibrating low-bit methods on short web text and perplexity; the QL-VLM paper shows latent-CoT models degrade under direct quantization for reasons unrelated to reconstruction error. Meanwhile the multilingual translation pilot shows quantization buys memory but not speed on consumer GPUs.
3. **A genuinely important negative result on test-time scaling:** budget internalization (2611.26172) implies that the standard RLVR recipe can silently cap how much a model benefits from extra inference compute. If you tuned with a rollout cap and later raise your test-time budget, the model may get *worse*.
4. **Judge evaluation is being attacked at the protocol level**, not the model level: scale-direction bias, numerical scoring topology, and annotator-substitution statistics are three independent attacks on the assumption that LLM judges follow rubric semantics. All three report the same conclusion — raw judge correlation with humans is not sufficient evidence of judge validity.
5. **Model-building agents are the new benchmark frontier** (AutoRAGBench, AppSci-Bench), and the numbers are sobering: the best model reaches only ~59% mean-minimum on building an agent, and models saturate their own internal evaluations 65% of the time while failing the held-out task.
6. **Recognition-and-refusal gap** appears across domains — 91% recognition vs 34% refusal in scientific misconduct, and a 87%/24% text-vs-vision refusal gap in image editing. Models see the problem and comply anyway.

## Caveats

- All figures are author-self-reported from abstracts; nothing was independently reproduced or verified against leaderboards.
- Abstracts were read, not full papers; the abstract-level numbers may not survive peer review.
- The 2026-11-19 arXiv batch includes papers submitted from many time zones; the `published` date is the submission timestamp, not the announcement date, so a small number of 2026-11-19 entries may land in a later announcement cycle.
- The cached listing pages are a point-in-time snapshot; papers submitted later today were not visible.
