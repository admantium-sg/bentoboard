## 2026-08-29 (Saturday Evening)
<!-- Sources: https://arxiv.org/abs/2608.27448, https://arxiv.org/abs/2608.27409, https://arxiv.org/abs/2608.27370, https://arxiv.org/abs/2608.27348, https://arxiv.org/abs/2608.27402, https://arxiv.org/abs/2608.27397, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### TTPO: Test-Time Policy Optimization Without Labels
**arXiv:2608.27448** (Aug 27, 2026) — cs.CL | ZJU
- Asymmetric objective: distill agreeing rollouts via OPSD, penalize disagreeing rollouts with Grouped RL
- Token-level selection: distillation down-weights converged positions; RL penalizes only confident errors
- Matches label-supervised OPSD on 5 competition-level benchmarks — zero labels required
- Qwen3-1.7B: 38.0% → 45.2% in TTT (+7.2pp); +25.2% to +36.4% on non-thinking tasks
- Key insight: pseudo-label errors are asymmetric — rollouts disagreeing with incorrect vote are reliably wrong regardless of vote correctness; exploiting this enables label-free test-time training
- Paper: https://arxiv.org/abs/2608.27448

#### RLVR Fusion: Merge vs Mix RL vs MOPD
**arXiv:2608.27409** (Aug 27, 2026) — cs.CL | Fudan
- Three fusion paradigms for consolidating multi-domain RLVR expert capabilities
- Average gap only 1.4pp; gap reaches 8.6pp on single benchmarks with domain-level variation tracking cross-domain task-vector geometry
- Merge: best when experts exist and cheap fusion is paramount
- Mix RL: best for unified model from scratch, adjust domain proportions for cross-domain transfer
- MOPD: best when preserving domain-specific gains matters more than surpassing teachers
- All three improve single-sample accuracy without solution coverage gains or held-out capability loss
- Key insight: RLVR expert fusion is solved with clear tradeoffs — infrastructure state determines optimal choice
- Paper: https://arxiv.org/abs/2608.27409

#### Puro-2B: $6.9K Pretraining on Consumer RTX 5090
**arXiv:2608.27370** (Aug 27, 2026) — cs.CL, cs.LG | Tsinghua
- FP8 pretraining of 2B model from scratch on up to 1.4T tokens, consumer-grade RTX 5090 GPUs
- Approaches Qwen2.5-1.5B performance at under $6.9K total compute cost
- Puro Cost Scaling Law: ~$4.4K sufficient to match Qwen2-1.5B
- Techniques: hardware selection, FP8 training, hyperball optimization, curriculum model averaging, data recipe
- Full open-source release under Apache 2.0: data, code, model weights
- Key insight: pretraining is no longer exclusively for well-funded labs — open recipe with consumer hardware democratizes base model development
- Paper: https://arxiv.org/abs/2608.27370

#### INTENT-AS-A-TOOL: Tracking Agentic Misalignment via Intent Tool Calls
**arXiv:2608.27348** (Aug 27, 2026) — cs.CL
- Adds intent-targeted tools as dedicated channel for behavioral commitment signals during generation
- Intent tool call probability = judge-free fine-grained signal of behavioral tendency (expands post-hoc CoT monitoring into dense trajectories)
- Identifies critical steps for online intervention; complements CoT monitoring
- Key insight: intent signals precede harmful execution in reasoning traces — dedicated intent tools enable earlier intervention than post-hoc CoT review alone
- Paper: https://arxiv.org/abs/2608.27348

#### Moral Knowledge Organization in LLMs
**arXiv:2608.27402** (Aug 27, 2026) — cs.CL, cs.AI, cs.LG
- Six independent linear probes for Moral Foundations Theory categories; moral directions span near-maximal independent dimensions + shared positive integration component
- Shared component is moral-specific vs matched non-moral battery (cosine 0.26 vs 0.013)
- Geometry consistent across architectures and scale; reaches integration regime early in pretraining
- Moral dilemma directions partially compose from component foundations at 2.7x mismatched-pair baseline; majority of variance encodes conflict-specific structure
- Key insight: LLMs organize moral foundations geometrically with corpus-statistics-driven structure — model represents moral tension itself, not pre-resolved judgment
- Paper: https://arxiv.org/abs/2608.27402

#### CAST: Concept-Guided Artifact Suppression for Clinical LLM Auditing
**arXiv:2608.27397** (Aug 27, 2026) — cs.CL, cs.AI
- SAE-based framework exposes sparse, auditable features from intermediate transformer activations
- LLM-assisted interpretation + ICD-10 retrieval constraints for labeling SAE latents
- Suppresses artifact latents via residual subtraction during fine-tuning; provides post-hoc per-concept attributions
- Key insight: clinical models exploit template/boilerplate artifacts, not patient state — SAE-based auditing can expose and suppress deployment-critical shortcuts
- Paper: https://arxiv.org/abs/2608.27397

---
## 2026-08-21 (Friday Evening)
<!-- Sources: https://arxiv.org/abs/2608.20338, https://arxiv.org/abs/2608.20331, https://arxiv.org/abs/2608.20319, https://arxiv.org/abs/2608.20281, https://arxiv.org/abs/2608.20116, https://arxiv.org/abs/2608.20047, https://arxiv.org/abs/2608.19920, https://arxiv.org/abs/2608.09867, https://arxivtldr.org/weekly, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### ConceptGuard: Concept-Level Unlearning Benchmark for LLMs
**arXiv:2608.20338** (Aug 20, 2026) — cs.CL | NeurIPS E&D 2026
- Dual-use concepts framework: concepts usable in both harmful and benign contexts — forget/retain sets are complementary in concept usage
- Current unlearning techniques show weak contextual separation, poor ROUGE, and poor concept-level metrics
- Strong forgetting-utility tradeoffs; limited contextual sensitivity; poor consistency across methods
- Key insight: Unlearning at fact-level is insufficient — concept-level control required for real-world safety deployment
- Paper: https://arxiv.org/abs/2608.20338

#### G-CARL: Medical Report Interpretation with Checklist-Aligned RL
**arXiv:2608.20331** (Aug 20, 2026) — cs.CL, cs.AI, cs.CV
- PMRI (Patient-oriented Medical Report Interpretation): evidence-grounded factuality + context-dependent patient communication — two fundamentally different objectives
- G-CARL: multi-source retrieval for atomic claim verification + instance-specific weighted checklists for response coverage
- MMedReport benchmark + 3D clinician-designed evaluation
- Key insight: Factuality and patient communication need separate structured supervision — joint optimization under conventional SFT or holistic RL fails
- Paper: https://arxiv.org/abs/2608.20331

#### Task Model Induction (TMI): Symbolic Task Models from Computer-Use Traces
**arXiv:2608.20319** (Aug 20, 2026) — cs.CL, cs.AI
- Discovers latent tasks from naturalistic traces (screenshots, mouse/keyboard); disentangles concurrent multi-threaded activity
- Hierarchical objective model (recursive goal decomposition) + procedure model (control flow)
- 0.974 ground-truth agreement on interleaved task recovery; reconstructs 74.9% of execution steps
- Skills from TMI task models: +30.0% held-out task accuracy over strongest workflow baseline
- Key insight: Symbolic, auditable task models can be induced from raw computer-use traces — enables auditability for agentic deployments at scale
- Paper: https://arxiv.org/abs/2608.20319

#### IAR: Three-Stage Post-Training for Retrieval-Free Document Knowledge Internalization
**arXiv:2608.20281** (Aug 20, 2026) — cs.CL, cs.AI
- Inject (document→continuation/rewrite/reconstruction), Align (answer-only QA), Recover (merge with base model)
- +3.6pp domain QA accuracy, +12.1pp mean general performance across Llama/Phi/Qwen/SmolLM families
- Key insight: Separating knowledge injection from behavior alignment from capability recovery outperforms joint approaches
- Paper: https://arxiv.org/abs/2608.20281

#### Evidence Arbitration: When Text and Numbers Disagree in LLMs
**arXiv:2608.20116** (Aug 20, 2026) — cs.CL
- Systematic text-vs-number preferences; follow temporal recency > explicit reliability cues
- Over-rely on external forecasts even when conflicting with direct contextual evidence
- Key insight: LLM evidence integration uses heuristic strategies — distinct failure mode for tool-augmented decision systems
- Paper: https://arxiv.org/abs/2608.20116

#### Cross-Lingual Fairness in LLM Watermarking
**arXiv:2608.20047** (Aug 20, 2026) — cs.CL, cs.CR, cs.LG
- Six watermarking schemes × 11 languages × four scripts — disparity predominantly between typological families, not individual languages
- Cross-lingual fairness gaps are structural to language properties, not language-specific
- Key insight: English-calibrated watermarking evaluation misses structural failures in multilingual deployment
- Paper: https://arxiv.org/abs/2608.20047

#### Fine-tuning Long-Context Sparse Attention
**arXiv:2608.19920** (Aug 20, 2026) — cs.CL
- Fine-tuning transformer models with H2O sparse attention policy — single A100 40GB GPU budget
- Co-adapts model with sparse attention policy; outperforms exact attention models
- KeysAndValues open-source library for long-context inference and fine-tuning
- Key insight: Models can co-adapt with sparse KV-cache policies — enables long-context deployment on moderate hardware
- Paper: https://arxiv.org/abs/2608.19920

#### Stealing Reasoning Traces: Encrypted CoT Vulnerability (Security Finding)
**arXiv:2608.09867** (Aug 10, 2026) — cs.CR, cs.AI, cs.LG | ELLIS Institute + MPI Tübingen
- Encrypted reasoning blocks from Anthropic, OpenAI, Google are fully interchangeable across sessions/users/models within a provider ecosystem
- Attack: inject encrypted trace from capable model → force weaker model to decode in plaintext
- Extracted 367 PII + 182 credentials from 315,320 public session logs scraped from GitHub
- Reveals hidden hazardous CoT info even when final output safely rejects; enables invisible prompt injection via encrypted blocks
- Root cause: insufficient cryptographic binding between reasoning block and session — "encryption ≠ isolation"
- Key insight: Client-side encrypted CoT was sold as zero-data-retention enterprise feature, but architectural flaw makes it an attack surface
- Paper: https://arxiv.org/abs/2608.09867

---
## 2026-08-19 (Wednesday Evening)
<!-- Sources: https://arxiv.org/abs/2608.18027, https://arxiv.org/abs/2608.18062, https://arxiv.org/abs/2608.17994, https://arxiv.org/abs/2608.18011, https://arxiv.org/abs/2608.17895, https://arxiv.org/abs/2608.17843, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Chain-of-Experience: Test-Time Learning via Iterative Experiential Traces
**arXiv:2608.18027** (Aug 18, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 --> <!-- Sources: https://arxiv.org/abs/2608.18027 -->
- Introduces Chain-of-Experience (CoE): models accumulate experiential traces through iterative self or environmental feedback, forming continual improvement loop beyond zero-shot inference ✅
- 8 LLMs tested (GPT-5, Gemini-2.5 Pro, Claude-4.5 Sonnet, etc.); self-feedback alone: +5.6% overall improvement + 19% lower API cost vs feedback-free baselines ✅
- Combining complementary feedback channels yields additional gains; CoE delivers higher accuracy per token than existing test-time strategies ✅
- Models robust under weak/spurious feedback; most gains emerge early in iterations; positive correlation between base ability and improvement capacity ✅
- Key insight: Test-time learning via accumulated experiential traces is a viable third paradigm alongside zero-shot inference and in-context learning — self-feedback alone is surprisingly effective and cost-efficient ✅
- Paper: https://arxiv.org/abs/2608.18027

#### TokEval: Principled Tokenizer Evaluation Beyond Fertility
**arXiv:2608.18062** (Aug 18, 2026) — cs.CL, cs.LG | COLM 2026 <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 --> <!-- Sources: https://arxiv.org/abs/2608.18062 -->
- Tokenizer evaluation metrics beyond standard fertility/compression: UTF-8 character boundary integrity, digit place-value alignment for math, structure-sensitive properties ✅
- Controlled pretraining experiments: information-theoretic metrics predict language modeling abilities (Spearman rho up to 0.80); structure-sensitive metrics correlate with task accuracy ✅
- Enables replacing costly pretraining sweeps with intrinsic measurement where correlation holds ✅
- Key insight: Tokenizer structural properties (digit alignment, character boundaries) have measurable downstream impact on task accuracy — choice is not just about compression ✅
- Paper: https://arxiv.org/abs/2608.18062 | GitHub: https://github.com/cimeister/tokenizer-intrinsic-evals

#### Uncertainty-Guarded LLM Judging with Finite-Sample Risk Guarantees
**arXiv:2608.17994** (Aug 18, 2026) — cs.CL | COLM 2026 <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 --> <!-- Sources: https://arxiv.org/abs/2608.17994 -->
- Risk-controlled framework: calibrates uncertainty thresholds using finite-sample Clopper-Pearson intervals so false discovery rate stays below user-specified α with high probability ✅
- Two-threshold routing: parametric mode when confident, retrieval-augmented mode (web evidence) when not; finite-sample guarantee carries over to routing without additional assumptions ✅
- Maintains target error rate while achieving substantially higher coverage than single-mode baselines ✅
- Key insight: LLM judging needs statistical risk control, not just confidence scores — finite-sample guarantees via Clopper-Pearson intervals make deployment-safe judging feasible ✅
- Paper: https://arxiv.org/abs/2608.17994

#### IOL-AI Challenge: Linguistic Reasoning as Benchmark for Generalizable Intelligence
**arXiv:2608.18011** (Aug 18, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 --> <!-- Sources: https://arxiv.org/abs/2608.18011 -->
- International Linguistics Olympiad problems: solver must first discover rules before reasoning within them — inverts standard benchmarks (math/code give rules upfront) ✅
- 731 submissions from 46 teams (1× T4, 30 mins); Claude Opus 4.8 earns gold medal equivalent; resource-constrained submissions in bottom 5% of human contestants ✅
- Critical: capability NOT determined by scale — 14B submissions outperform 2× larger models; gains come from decoding/output-handling, not model capacity ✅
- Automatic metrics rank as jury does but compress scale (upscore weak by ~13 points, understate strong ones) ✅
- Frontier model prior knowledge of problem languages does NOT significantly help — linguistic reasoning is genuine generalizable skill proxy ✅
- Key insight: Discovering unknown systems (linguistic reasoning) is hardest and most generalizable benchmark; 14B models can match 28B+ when decoding is well-optimized ✅
- Paper: https://arxiv.org/abs/2608.18011

#### BEAR-Bench: Bilingual Enterprise/Academic Reasoning for MLLMs
**arXiv:2608.17895** (Aug 18, 2026) — cs.CL, cs.AI <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 --> <!-- Sources: https://arxiv.org/abs/2608.17895 -->
- Bilingual English/Russian benchmark for MLLMs on text-dense business/scientific documents; 1000 human-annotated questions ✅
- 16 proprietary and open-weight MLLMs evaluated including Gemini 3.1 Pro and Qwen3.5-397B; clear headroom even for strongest systems ✅
- Key insight: MLLM capability on real-world professional documents substantially lags general VQA — bilingual professional document reasoning is a near-term frontier ✅
- Paper: https://arxiv.org/abs/2608.17895

#### Decode-Generate-Steer Gap: Decodable ≠ Actionable in Frozen LLMs
**arXiv:2608.17843** (Aug 18, 2026) — cs.CL, cs.AI <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 --> <!-- Sources: https://arxiv.org/abs/2608.17843 -->
- Geometric reasoning (CAD constraint satisfaction) audit of frozen LLMs: decodability, generation, activation-level influence, behavioral steerability can diverge independently ✅
- Pretraining improves local geometric relation decoding, persisting after positional controls; sketch-level DOF highly decodable from random init with modest gains ✅
- Critical: decodable information is NOT always actionable — generation fails to express decoded info, activation-restoration vanishes while decodability persists, mean-difference steering does not reliably control outputs ✅
- Key insight: Interpretability probes measuring decodability are insufficient evidence for behavioral steerability — decode/generate/steer pipeline breaks independently at multiple points ✅
- Paper: https://arxiv.org/abs/2608.17843

---
## 2026-08-18 (Tuesday)
<!-- Sources: https://arxiv.org/abs/2608.16868, https://arxiv.org/abs/2608.16707, https://arxiv.org/abs/2608.16798, https://arxiv.org/abs/2608.16650, https://arxiv.org/abs/2608.16647, https://arxiv.org/abs/2608.16224, https://arxiv.org/abs/2608.15879, https://arxiv.org/abs/2608.16577, https://arxiv.org/abs/2608.14604, https://arxiv.org/abs/2608.14797, https://arxiv.org/abs/2608.16671, https://arxiv.org/abs/2608.16168, https://arxiv.org/abs/2608.15931, https://huggingface.co/models?sort=trending, https://benchlm.ai/reasoning -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-19 -->
<!-- Verification: 14 papers reviewed, 48 key claims verified, 0 corrections -->

### New Insights:

#### Computational Provenance: Detecting Internal Causal State from Generated Text
**arXiv:2608.16868** (Aug 17, 2026) — cs.CL, cs.AI
- Generated text can carry detectable evidence of which causally relevant internal state occurred during inference — verified across 5 FFNNs and 3 transformers, 128 matched-pair tests ✅
- Same answer, different internal path → distinct statistical patterns in output text detectable via linear probes ✅
- Naturally learned intermediate states in answer-only setting NOT recoverable — controlled setup required ✅
- Key insight: Verified internal computation can leave detectable traces in output even when answer is unchanged — opens interpretability via output analysis ✅
- Paper: https://arxiv.org/abs/2608.16868

#### Semantic Bandits: Exploration-Exploitation Biased by Semantic Priors in LLMs
**arXiv:2608.16707** (Aug 17, 2026) — cs.CL, cs.AI
- LLMs reduce exploration when action labels are semantically informative — improves when aligned with reward, degrades when misaligned ✅
- Negative rewards trigger substantially more exploration than equivalent positive rewards — expected-scale bias from pretraining/RM conventions ✅
- Key insight: Natural language task descriptions introduce unavoidable biases from pretraining word co-occurrence — critical for LLM agent reliability in real decision-making ✅
- Paper: https://arxiv.org/abs/2608.16707

#### ClawGym II: Black-Box RL on Agent Harnesses
**arXiv:2608.16798** (Aug 17, 2026) — cs.CL, cs.AI, cs.LG
- Unified black-box RL framework for stable optimization through complex harnesses (OpenClaw, Claude Code, JobBench, OfficeQA) ✅
- Prefix-tree organization of captured model calls enables GRPO/PPO over recovered tree structure ✅
- Qwen3-30A3B: +9.98 Pass@1 via OpenClaw harness, +14.81 via Claude Code harness; stable over 200-400 steps ✅
- Key insight: Black-box RL through agent harnesses is viable and stable without accessing internal rewards ✅
- Paper: https://arxiv.org/abs/2608.16798

#### PAS: Monotonic Bidirectional Control of LLM Sycophancy
**arXiv:2608.16650** (Aug 17, 2026) — cs.CL
- PCA-guided Activation Scaling: decomposes residual stream into sycophancy-honesty subspace (PCA-identified) + orthogonal residual; applies distinct asymmetric scaling exponents ✅
- Spearman ρ = +0.92 monotonicity; average 15.4% shift per direction vs 8.7% for baselines ✅
- Key insight: Sycophancy control requires asymmetric treatment of steering vectors — symmetric approaches fail monotonicity ✅
- Paper: https://arxiv.org/abs/2608.16650

#### On-Policy Distillation Transfers Reasoning Behavior, Not Answers
**arXiv:2608.16647** (Aug 17, 2026) — cs.CL
- OPD transfers the teacher's reasoning behavior rather than answers — training difficulty barely matters, even unsolved problems are useful ✅
- Same-origin pairs: student reaches teacher across languages, reasoning horizons, domains; cross-origin pairs mostly fit trained distribution ✅
- Multi-teacher cross-origin OPD creates mixture-dependent seesaw among teacher capabilities ✅
- Key insight: OPD generalization depends on origin relationship; reasoning behavior (not answer content) is the transferable unit ✅
- Paper: https://arxiv.org/abs/2608.16647

#### LM Head Not a Harmful Optimization Bottleneck
**arXiv:2608.16671** (Aug 17, 2026) — cs.CL
- Geometric compression confirmed but causal "harmful bottleneck" claim not supported — backward-only rank reduction increases loss slightly; vocabulary residual is load-bearing ✅
- Factorized forward head increases loss more than backward-only rank reduction ✅
- Key insight: Previous work overstated the LM head projection as harmful — geometry exists but is not the optimization bottleneck ✅
- Paper: https://arxiv.org/abs/2608.16671

#### STAIR: Semantic-Temporal Automaton for Interpretable Temporal Reasoning
**arXiv:2608.16224** (Aug 16, 2026) — cs.CL, cs.AI
- LLM adapter maps complex questions to normalized temporal intents; deterministic finite automaton executes over canonicalized evidence — rule-first, LLM only when rule path fails ✅
- Guarded execution for point-time containment/before-after selection; semantic adaptation for non-exact intervals ✅
- F1 improvements: +16.57% (Qwen2.5-7B), +3.10% (GPT-4o-mini) across TimeQA, TempReason-L2/L3 ✅
- Key insight: Discrete automata can replace probabilistic LLM inference for verifiable temporal reasoning — reduces free-form reasoning where rules suffice ✅
- Paper: https://arxiv.org/abs/2608.16224

#### BabelSteering: Multilingual Safety via English Steering Vectors
**arXiv:2608.16577** (Aug 17, 2026) — cs.CL
- Activation steering using English-derived refusal directions generalizes across 8 languages; Gemma 7B: +11pp average refusal of harmful prompts, +17pp for Bengali, no loss on Global MMLU ✅
- Inference-time intervention, no retraining ✅
- Key insight: English safety supervision can transfer cross-lingually via activation steering — practical low-cost mechanism for extending guardrails ✅
- Paper: https://arxiv.org/abs/2608.16577

#### QUMem: Query-Conditioned User-State Inference for LLM Agents
**arXiv:2608.16168** (Aug 17, 2026) — cs.CL, cs.AI
- Segments interaction histories into episodes, decomposes into independently retrievable factual/preference/insight memories, plans multi-query retrieval, infers temporally valid user state ✅
- State-of-the-art on PersonaMem and KnowU-Bench ✅
- Key insight: User preference information should be decomposed into independently retrievable units — mixing related items from same interaction into one memory hurts personalization ✅
- Paper: https://arxiv.org/abs/2608.16168

#### Bengali Headline Generation: Prompting Strategy > Input Length
**arXiv:2608.15879** (Aug 16, 2026) — cs.CL
- Full article does not improve headline quality; selected lead paragraphs match or exceed full context ✅
- Cross-Lingual Prompting (XLP) outperforms Bengali Native Prompting with contextual enrichment, but model-dependent ✅
- Few-shot: most gain from single demonstration for Gemini; Llama shows limited benefit from additional examples ✅
- Key insight: Context relevance and prompt design matter more than input length for document summarization ✅
- Paper: https://arxiv.org/abs/2608.15879

#### PLSQLBench: Executable Procedural Database Programming Benchmark
**arXiv:2608.15931** (Aug 16, 2026) — cs.CL
- 2,865 instances (2,594 single-turn + 271 multi-turn conversations); PL/SQL execution-based correctness; recurring difficulties: schema grounding, dialect fidelity, control flow ✅
- Tool-augmented agents improve schema-grounded evaluations but substantial gaps remain ✅
- Key insight: Existing benchmarks miss procedural database programming — LlMs struggle with PL/SQL-specific patterns beyond general code generation ✅
- Paper: https://arxiv.org/abs/2608.15931

#### Wiola 13M: Gated Spiral Attention for Parameter-Efficient Small LLMs
**arXiv:2608.14604** (Aug 13, 2026) — cs.CL, cs.AI
- Spiral Rotary (no params), Gated Spiral Attention (content-adaptive per-head gate), Butterfly FFN (multiplicative interaction + bypass) — all drop-in replacements ✅
- Proves exact equivalence between full-sequence training and cached autoregressive decoding for gated attention — no approximation ✅
- Key insight: Small models (10-100M params) require architectural adaptation — innovations that are redundant at large scale matter at small scale ✅
- Paper: https://arxiv.org/abs/2608.14604

#### Decoding Methods Survey: Taxonomy of Inference-Time Approaches
**arXiv:2608.14797** (Aug 14, 2026) — cs.CL | ACM SIGKDD
- Three emerging paradigms: token-level guidance, sequence-level control, parallel decoding; systematic review of LLMs and LVLMs ✅
- Key insight: Inference-time decoding offers efficiency/controllability without training — increasingly important for LVLMs and constrained deployment ✅
- Paper: https://arxiv.org/abs/2608.14797

---
## 2026-08-17 (Monday)
<!-- Sources: https://arxiv.org/abs/2608.13760, https://arxiv.org/abs/2608.13588, https://arxiv.org/abs/2608.13578, https://arxiv.org/abs/2608.13568, https://arxiv.org/abs/2608.13698, https://arxiv.org/abs/2608.13567, https://arxiv.org/abs/2608.13591, https://arxiv.org/abs/2608.13706, https://arxiv.org/abs/2608.13854, https://arxiv.org/abs/2608.13840, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-19 -->
<!-- Verification: 10 papers reviewed, 35 key claims verified, 0 corrections -->

### New Insights:

#### Amplification-Lift Gap: Thinking Models Amplify Wrong Behaviors
**arXiv:2608.13760** (Aug 13, 2026) — cs.CL, cs.AI, cs.CV, cs.LG | COLM 2026
- Behavioral Lift: measures how correctness changes when a behavior is present vs absent in reasoning trace ✅
- Amplification-Lift Gap: thinking models strongly amplify self-correction, hypothesis testing, uncertainty acknowledgment (3-7×) ✅
- Highest-lift behaviors: confidence calibration, knowledge alignment, self-awareness — but barely amplified ✅
- 15 models, 6 benchmarks (text + vision-language), 15,282 traces annotated ✅
- Key insight: reasoning-oriented training does NOT preferentially amplify highest-Lift behaviors — process-level objectives needed that reward calibrated/grounded reasoning over surface form ✅
- Paper: https://arxiv.org/abs/2608.13760

#### IterCOMP: Reasoning-aware Adaptive Prompt Compression for Multi-hop QA
**arXiv:2608.13588** (Jul 12, 2026) — cs.CL | ACL 2026 Main Conference
- Training-free iterative prompt compression: decomposes documents → evaluates answerability → generates follow-up questions → integrates essential evidence ✅
- Produces compact, reasoning-oriented prompt ✅
- MusiQue, 2WikiMultiHopQA, HotpotQA: substantial EM/F1 improvements + token budget reduction ✅
- Outperforms baselines, robust as reasoning complexity increases ✅
- Key insight: iterative answerability-guided compression beats static compression for multi-hop reasoning ✅
- Paper: https://arxiv.org/abs/2608.13588

#### BCMT: Blockwise Causal Memory Transformer for Long-Context
**arXiv:2608.13578** (Jul 6, 2026) — cs.CL, cs.AI, cs.LG
- Architecture decoupling local token interactions from global context via exponential causal memory ✅
- Dense causal self-attention within blocks; exponential causal memory aggregated from block summaries ✅
- Context lengths up to 1024 tokens: comparable validation performance to Dense Transformers with improved throughput + reduced memory ✅
- Key insight: exponential causal memory from block summaries is effective alternative to dense global attention ✅
- Paper: https://arxiv.org/abs/2608.13578

#### LSP vs Grep: Token Costs for Coding Agents
**arXiv:2608.13568** (Jun 29, 2026) — cs.CL, cs.AI
- LSP costs +6% to +118% more tokens on symbol-named localization; agents ignore it when free ✅
- Grep solves multi-file renames perfectly; location-only LSP fails 3/4 of them ✅
- Even complete, index-warmed, text-enriched LSP can't close gap (renames must touch comments/strings) ✅
- Key insight: not LSP-always but adaptive router keyed on task class, model capability, lexical noise ✅
- Paper: https://arxiv.org/abs/2608.13568

#### GRPO Multilingual Reasoning: Native Language Training Works Well
**arXiv:2608.13698** (Aug 13, 2026) — cs.CL, cs.LG
- RLVR/GRPO across wide range of base models, languages, reasoning rewards ✅
- Training in native language leaves small gap vs English reasoning ✅
- Strong crosslingual transfer: training in one language improves many others ✅
- Some languages cause severe regressions on OOD capabilities — requires broad evaluation ✅
- Key insight: RLVR beyond English can provide broad crosslingual gains but needs language-specific regression detection ✅
- Paper: https://arxiv.org/abs/2608.13698

#### Modular Cognitive Architecture Emerges in LLMs
**arXiv:2608.13567** (Jun 27, 2026) — cs.AI, cs.CL, cs.LG
- Circuit analyses across 46 tasks in 4 cognitive domains ✅
- LLMs develop modular architecture mirroring human brain ✅
- Same-network tasks in humans → overlapping neurons in LLMs; different networks → distinct neurons ✅
- Key insight: convergent emergence of modularity in brains and neural networks suggests modularity is fundamental property of intelligent systems ✅
- Paper: https://arxiv.org/abs/2608.13567

#### Stable Miscalibration: High-Confidence Errors Are Not Always Fragile
**arXiv:2608.13591** (Jul 15, 2026) — cs.AI, cs.CL | ICML 2026 Workshop
- High-confidence errors may be stable miscalibration (locally stable under perturbations), not fragile inference ✅
- Label-aware output-level audit score + internal sensitivity probe ✅
- Self-critical prompting reduces hidden-state sensitivity across layers ✅
- Key insight: some overconfident errors are stable/miscalibrated, not fragile — distinction matters for calibration interventions ✅
- Paper: https://arxiv.org/abs/2608.13591

#### CLAIR-Fin: Adversarial Multi-Agent Financial QA with Claim-Level Verification
**arXiv:2608.13706** (Aug 13, 2026) — cs.CL, cs.AI
- Nine-agent framework with Financial Claim Ledger (atomic claims) ✅
- Asymmetric Evidence Authority: trust conditioned on claim type ✅
- Chain-of-Custody Verification: checks grounding at hand-off between drafting and adversarial review ✅
- Adaptive Rebuttal Cycle: debate depth scales with what debate finds ✅
- BB-FinQA-X (500 questions): faithfulness 0.780 → 0.889; abstains on 5.4% when evidence insufficient ✅
- Key insight: claim-level decomposition + adversarial debate improves faithfulness beyond pipeline-exit verification ✅
- Paper: https://arxiv.org/abs/2608.13706

#### Niche Multilingual Code Translation via Execution-Based RL
**arXiv:2608.13854** (Aug 14, 2026) — cs.CL
- Execution-based verifiable supervision for niche many-to-many code translation ✅
- GRPO over 600 directed language pairs (25×24) ✅
- HumanEval-X++ benchmark for many-to-many language space ✅
- Qwen-3.5 4B/9B: 13% avg improvement across all languages, 21% on mid-tier languages ✅
- Key insight: execution-based preference RL bootstraps niche translation quality reliably ✅
- Paper: https://arxiv.org/abs/2608.13854

#### ASSERT: Measurement Pipeline for GenAI Audits
**arXiv:2608.13840** (Aug 14, 2026) — cs.CL, cs.AI, cs.CY
- Specification-driven measurement pipeline tying reported rates to written specifications ✅
- Case study on conversational deception: dialogue setup, simulated user, judge, evidence bar all substantially change reported rates ✅
- Measurement choices can reorder GenAI system rankings ✅
- Key insight: differences across audits easier to attribute/interpret when each rate tied to explicit specification ✅
- Paper: https://arxiv.org/abs/2608.13840

---
## 2026-08-16 (Sunday)
<!-- Sources: https://arxiv.org/abs/2608.09867, https://stolen-thoughts.com/, https://huggingface.co/models?sort=trending, https://benchlm.ai/reasoning -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-19 -->
<!-- Verification: Stealing Reasoning Traces paper + HF trending data + BenchLM verified, 0 corrections -->

### New Insights:

#### Stealing Reasoning Traces from Proprietary LLM APIs: Encrypted CoT Blocks Compromised
**arXiv:2608.09867** (Aug 10, 2026) — cs.CR, cs.AI, cs.LG
- Leading LLM providers (Anthropic, OpenAI, Google) conceal step-by-step chain-of-thought reasoning as encrypted text blocks returned to clients — these blocks are fully interchangeable across sessions, users, and models within a provider ecosystem ✅
- Scalable decryption jailbreak: inject encrypted reasoning trace from capable model into weaker sibling model → weaker model decodes trace in plaintext without ever jailbreaking the capable model directly ✅
- Four attack vectors: (1) bypasses anti-distillation, proprietary reasoning extractable from Anthropic/OpenAI/Google; (2) large-scale PII extraction — 315,320 public reasoning blocks yielded 367 PII artifacts + 182 credentials; (3) hazardous hidden reasoning revealed even when final output safely rejects malicious request; (4) invisible prompt injection via encrypted block payloads poisoning agentic rollouts ✅
- Providers implemented mitigations following responsible disclosure; concrete cryptographic/system-level fixes proposed ✅
- Key insight: client-side encrypted CoT is a systemic attack surface — the mechanism protecting IP also protects injected payloads; fix requires cryptographic changes, not policy ✅
- Paper: https://arxiv.org/abs/2608.09867 | Landing page: https://stolen-thoughts.com/

#### Qwen3.8-27B Sustained Dominance on HuggingFace (Aug 16 Update)
- Base model: 268k downloads + 10.1k likes (updated 2 days ago); Unsloth GGUF: 1.95M downloads in ~1 day — extraordinary; FP8: 353k downloads ✅
- Orcarouter uncensored FP8 fresh release (21 min ago): 4.29k downloads, 302 likes — community still downloading at high rate ✅
- Source: https://huggingface.co/models?sort=trending

#### DeepSeek-V4-Pro-0813 (Aug 13): Strong Debut
- 21.9k downloads, 521 likes in 3 days — solid performance for a larger model ✅
- Source: HF trending

#### NVIDIA Nemotron-3.5-Lightning-30B-A3B-NVFP4 (Aug 13)
- 196k downloads, 282 likes — FP4 quantized variant getting attention alongside BF16 variant (66.3k downloads) ✅
- Source: HF trending

#### BenchLM Reasoning Leaderboard — August 16, 2026: Qwen3.8 Max at 94.3
- #1: Qwen3.8 Max 94.3 weighted reasoning; #2: GPT-5.4 (notable LongBench v2 edge); #3: Claude Opus 4.6 (long-context reasoning); Claude Mythos 5 adds strong GraphWalks result ✅
- Explicit CoT models still outperform standard models significantly at higher latency/token cost; ARC-AGI-2 coverage uneven ✅
- Source: https://benchlm.ai/reasoning (refreshed Aug 15)

---
## 2026-08-15 (Saturday)
<!-- Sources: https://arxiv.org/abs/2608.13524, https://arxiv.org/abs/2608.13547, https://arxiv.org/abs/2608.09942, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md -->
<!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-20 -->

### New Insights:

#### DARTree: Speculative Diffusion Decoding — 9.73× Lossless Speedup
**arXiv:2608.13524** (Aug 13, 2026) — cs.LG
- Combines diffusion drafters (parallel block prediction) with tree-structured AR verification — decouples AR-head inference from sequential heap operations ✅
- Up to 12.97 tokens accepted per verification round; 98.6% more than DFlash, 27.9% more than Domino ✅
- Up to **9.73× lossless speedup** over autoregressive decoding (7 benchmarks: math, code, chat) ✅
- Training-free — works with existing pretrained AR correction heads ✅
- Key insight: Marginal diffusion distributions are suboptimal for tree-structured verification; CoT-style correction along individual branches closes the gap ✅
- Paper: https://arxiv.org/abs/2608.13524

#### QuoteBench: Matched Scores Hide 55–73 pp of Agent Command-Path Failures
**arXiv:2608.13547** (Aug 13, 2026) — cs.AI, cs.SE
- Standard "matched" eval conflates command-generation quality with post-generation transport failures; QuoteBench isolates the boundary with exact final-state validation ✅
- Adding one deliberately unescaped parser lowers success by 55.4–73.2 pp — frontier raw generation is nearly saturated; boundary adaptation is what separates models ✅
- GPT-5.6-sol's matched gap of -3.6 hides -64.3 damage +60.7 compensation — matched scores are deeply misleading ✅
- Deployment configuration reorders model rankings: 1 clear reversal + 4 near-margins among 26 comparable pairs ✅
- Key insight: Evaluations must report model config, generation contract, execution path, operating point, and final-state validator — matched score alone is not an intrinsic model property ✅
- Paper: https://arxiv.org/abs/2608.13547

#### When CoT Helps and When It Hurts: Serial-Depth Bottleneck Empirical Study
**arXiv:2608.09942** (Aug 8, 2026) — cs.CL, cs.AI, cs.LG
- CoT acts as bandwidth bypass for serial computation exceeding transformer's single-pass capacity; not a universal reasoning enhancer ✅
- High-depth P-complete (GSM8K, MATH): CoT gives +54 to +68 pp recovery across all models ✅
- Shallow TC^0 (MMLU, ARC): CoT structurally redundant, Delta in [0.0, +4.6] pp ✅
- HumanEval (intermediate): model-size-dependent — +23.2 pp (32B), +9.1 pp (8B), **-28.7 pp (7B)** — CoT hurts smallest model ✅
- Cross-benchmark depth-recovery: Spearman rho = 0.661 (p = 0.007); 9/15 McNemar tests significant after Bonferroni ✅
- Key insight: CoT is task-dependent — helps deep serial computation, redundant for shallow tasks, harmful for small models on intermediate tasks ✅
- Paper: https://arxiv.org/abs/2608.09942

#### Qwen3.8-27B Drops — Dominates HF Trending + Community
- HF trending #1 (Aug 15): Qwen3.8-27B — 91.9k downloads + 9.6k likes in ~1 day; Unslop GGUF variant at 868k downloads; FP8 at 123k ✅
- LocalLLaMA: "IT'S OUT" post 2077 karma, 639 comments — highest activity in weeks ✅
- Community note: "Qwen3.8-27B is identical to Qwen3.6-27B!" viral (930 karma) — possible re-release/branding controversy ✅
- Source: HF trending, Reddit r/LocalLLaMA (Aug 14)

#### GLM 5.3 Finds 2,436 Open-Source Vulnerabilities
- GLM 5.3 used for large-scale vulnerability scanning — significant community discussion on r/singularity (586 karma, 95 comments) ✅
- Source: Reddit r/singularity (Aug 14)

#### BenchLM Reasoning Leaderboard — August 2026: Qwen3.8 Max Leads at 94.3
- #1: Qwen3.8 Max — 94.3 weighted reasoning (12 benchmarks: MuSR, BBH, LisanBench, LongBench v2, MRCRv2, ARC-AGI-2, Graphwalks) ✅
- #2: Gemini 3.5 Flash (68.6%); #3: Claude Mythos 5 (strong Graphwalks result) ✅
- Explicit CoT models outperform standard models significantly but at higher latency/token cost ✅
- ARC-AGI-2 still early-stage — uneven coverage, some models lack scores ✅
- Source: https://benchlm.ai/reasoning

---
## 2026-08-14 (Friday)
<!-- Sources: https://arxiv.org/abs/2608.12486, https://arxiv.org/abs/2608.12875, https://arxiv.org/abs/2608.13515, https://arxiv.org/abs/2608.12652, https://arxiv.org/abs/2608.13387, https://arxiv.org/abs/2608.13484, https://arxiv.org/abs/2608.13545, https://arxiv.org/abs/2608.13430, https://arxiv.org/abs/2608.13482, https://arxiv.org/abs/2608.12720, https://arxiv.org/abs/2608.12387, https://arxiv.org/abs/2608.12391, https://arxiv.org/abs/2608.13328, https://arxiv.org/abs/2608.13538, https://arxiv.org/abs/2608.12374, https://arxiv.org/abs/2608.12852, https://arxiv.org/abs/2608.12630, https://arxiv.org/abs/2608.12905 -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-14 -->
<!-- Verification: 17 papers reviewed, 0 corrections -->

### New Insights:

#### DIVE: Self-Improvement in Frozen LLMs via Diversity-Driven Skill Evolution
**arXiv:2608.12486** (Aug 12, 2026) — cs.CL
- Frozen LLMs improve by encoding reusable reasoning procedures, verification strategies, failure modes as executable natural-language skills — no parameter updates needed ✅
- Multiple skill populations evolved independently, then jointly selected; experience trie + double-frontier mechanism decouples skill expansion from deployment ✅
- GPT-5-nano with DIVE skills matches/exceeds GPT-5 under conventional prompting ✅
- Key insight: Diversity-driven search over skill populations — not single-trajectory optimization — prevents overfitting to sampled experience ✅
- Paper: https://arxiv.org/abs/2608.12486

#### The Embedder's Dilemma: LLMs vs. Embedding Models at What Cost?
**arXiv:2608.12875** (Aug 12, 2026) — cs.CL | COLM 2026
- Best LLM (Gemini 3.1 Pro, 77.6) vs. best embedding model (77.2) differ by 0.4 points aggregate; LLM costs 1,431x more ($154 vs. $0.11 per benchmark pass) ✅
- Open LLMs 2.5–736x slower on same GPU; reasoning tokens = 28–81% of LLM inference cost ✅
- Pareto frontier: leading embedding models + Gemini 3.1 Pro only ✅
- Key insight: Division of labor — embedding models for similarity/classification/clustering; LLMs only for reasoning-intensive retrieval ✅
- Paper: https://arxiv.org/abs/2608.12875

#### Training Data Influence Across Pretraining: Literature → STEM Crossover
**arXiv:2608.13515** (Aug 13, 2026) — cs.CL | COLM 2026
- Task-agnostic influence measure: gradient update reduces squared distance to final parameters; estimated from checkpoints without retraining ✅
- Systematic temporal crossover: literature-related data most influential early; STEM data dominates later; consistent across 18 Pythia configurations ✅
- Key insight: Pretraining is not uniform — different data types are influential at different training stages ✅
- Paper: https://arxiv.org/abs/2608.13515

#### Benchmark Contamination: Naive Probing Produces 0.03–0.99 False Positive Rate
**arXiv:2608.12652** (Aug 12, 2026) — cs.CL, cs.LG
- Linear probe contamination detection: natural implementation fails; requires: (1) excess separability not shape, (2) flat depth profile contrast, (3) item bootstrap, (4) 2x reference set ✅
- False positive rate under true null ranges 0.03–0.99 with wrong method ✅
- Key insight: Contamination probing requires extreme methodological care — naive versions fail in both directions ✅
- Paper: https://arxiv.org/abs/2608.12652

#### CROP: Counterfactual Task Relevance for On-Policy Distillation
**arXiv:2608.13387** (Aug 13, 2026) — cs.CL
- Counterfactual sensitivity margin: original-paraphrase-counterfactual triplets measure each position's sensitivity to task-relevant vs. meaning-preserving changes ✅
- Task relevance is complementary to uncertainty/disagreement criteria for selective OPD ✅
- +1.92 and +2.96 points over strongest non-CROP selector across two settings ✅
- Paper: https://arxiv.org/abs/2608.13387

#### Gricean Retreat: LLMs Know Uncertainty But Generate Specificity Anyway
**arXiv:2608.13484** (Aug 13, 2026) — cs.CL, cs.AI
- Model activations encode both knowledge boundary and anticipated referent specificity — but these signals are not reconciled during generation ✅
- Models prefer specific referents even when entity is unknown, even when correct generic alternatives are offered ✅
- Substrate for epistemic humility present; generation policy to act on it absent ✅
- Key insight: This is a generation-level problem, not a representation-level one ✅
- Paper: https://arxiv.org/abs/2608.13484

#### LittleLearner: Developmentally Restricted LLM Sandbox
**arXiv:2608.13545** (Aug 13, 2026) — cs.CL, cs.AI, cs.LG
- 88B-token elementary school corpus (Grade 5 ceiling); 5B model trained from scratch has clear knowledge/capability boundaries ✅
- Post-training and in-context learning help model use existing knowledge but don't raise out-of-scope capabilities ✅
- Key insight: Curriculum-bounded training creates interpretable capability boundaries for studying knowledge acquisition ✅
- Paper: https://arxiv.org/abs/2608.13545

#### Instruction Tuning Alters Confidence and Reduces Rationale Diversity
**arXiv:2608.13430** (Aug 13, 2026) — cs.CL, cs.AI
- Instruction tuning consistently changes answer confidence despite limited accuracy changes; cross-rationale diversity consistently decreases ✅
- Surface lexical diversity varies in both direction; effects persist after controlling for answer selection and length ✅
- Key insight: Confidence and rationale diversity capture distinct effects of instruction tuning ✅
- Paper: https://arxiv.org/abs/2608.13430

#### Synthetic Persona Pretraining: Alignment from Token Zero
**arXiv:2608.13482** (Aug 13, 2026) — cs.LG, cs.AI, cs.CL
- Annotating pretraining documents with value-aligned reflections + persona binding post-training ✅
- Improves constitution following, jailbreak robustness, reduces misalignment in OOD moral dilemmas; advantage increases with pretraining budget ✅
- Early intervention matters: aligning only at end of pretraining yields weaker adherence ✅
- Key insight: Values as post-hoc overlay may be fundamentally inferior to values installed from pretraining start ✅
- Paper: https://arxiv.org/abs/2608.13482

#### ERSkill: Evolving Skill-Guided Memory Retrieval for LLM Agents
**arXiv:2608.12720** (Aug 13, 2026) — cs.CL, cs.AI
- Retrieval behaviors as executable skills (primitives); trained router matches query to optimal skill; co-evolves skill set and router ✅
- +31.3% on F1/BLEU-1/LLM-judge (Qwen3-Next-80B-A3B); +28.1% (GPT-5.4-nano) ✅
- Key insight: Retrieval behavior is an evolvable skill, not a fixed function ✅
- Paper: https://arxiv.org/abs/2608.12720

#### Query Timing Positional Bias: Opposite to Humans, Worse in Newer Models
**arXiv:2608.12387** (Aug 9, 2026) — cs.CL, cs.AI | Entropic Award, ICBINB @ ICLR 2026
- LLMs show opposite positional bias patterns to humans; newer models more exacerbated than predecessors ✅
- Key insight: LLM belief update mechanisms differ from humans — not just different parameters, different structure ✅
- Paper: https://arxiv.org/abs/2608.12387

#### Graph Reasoning Benchmark: Fine-Tuned Models Don't Generalize
**arXiv:2608.12391** (Aug 2, 2026) — cs.CL, cs.AI, cs.LG
- 202 tasks across 5 complexity dimensions; fine-tuned models fail to generalize to new graph distributions; RAG improves textual but not coding reasoning ✅
- Key insight: Graph reasoning reveals model limitations invisible in existing benchmarks ✅
- Paper: https://arxiv.org/abs/2608.12391

#### Gender-Associated Linguistic Bias: Register > Names
**arXiv:2608.13328** (Aug 13, 2026) — cs.CL, cs.AI
- Hedging, tag questions, collective reference → shorter, less sophisticated LLM responses across 3 document types, 4 models ✅
- Linguistic register far more influential than explicit gender cues; early-layer encoding, entangled, not controllable post-hoc ✅
- Key insight: Disparate impact of LLM-mediated communication is upstream, unfixable by user self-presentation ✅
- Paper: https://arxiv.org/abs/2608.13328

#### SAEVerbalizer: LLM Explains Its Own Sparse Autoencoder Features
**arXiv:2608.13538** (Aug 13, 2026) — cs.CL
- Injects SAE decoder directions into LLM representations; fine-tunes LLM to verbalize feature meanings; generalizes to unseen features and across SAE dictionaries ✅
- Key insight: Turn the model into its own interpretability tool — LLM explains SAE features directly from decoder directions ✅
- Paper: https://arxiv.org/abs/2608.13538

#### Syllogistic Reasoning: KR Notation + Small Models
**arXiv:2608.12374** (Jul 22, 2026) — cs.CL, cs.AI | RuleML+RR 2026
- Formal knowledge representation notation matches natural language performance in small LLMs with faster inference; SEF categorization method ✅
- Key insight: For small models, HOW knowledge is represented matters as much as what — formal notation can match NL with better efficiency ✅
- Paper: https://arxiv.org/abs/2608.12374

#### Falsehood vs. Impossibility: Orthogonal Representations
**arXiv:2608.12852** (Aug 13, 2026) — cs.CL, cs.AI
- Truth direction (AUC 0.93 true vs impossible) orthogonal to impossibility direction; impossibility separates necessary from contingent falsehood at AUC 1.00 ✅
- Necessary falsehoods geometrically closer to semantic anomaly than to contingent falsehoods ✅
- Key insight: False/impossible is a geometrically fundamental distinction, not a confidence gradient ✅
- Paper: https://arxiv.org/abs/2608.12852

#### LLM-Generated Novels: Variance Overclosure
**arXiv:2608.12630** (Aug 12, 2026) — cs.CL, cs.AI
- Repeated LLM generation produces novels occupying much narrower formal range than human novels; sentence structure most robustly compressed ✅
- Individual AI novels may resemble human fiction; collection does not ✅
- Key insight: LLM generation has a mode, not just a mean — diversity compression is systematic ✅
- Paper: https://arxiv.org/abs/2608.12630

---
## 2026-08-13 (Thursday)
<!-- Sources: https://arxiv.org/abs/2608.12062, https://arxiv.org/abs/2608.12018, https://arxiv.org/abs/2608.12008, https://arxiv.org/abs/2608.11981, https://arxiv.org/abs/2608.11947, https://arxiv.org/abs/2608.11924, https://arxiv.org/abs/2608.11922, https://arxiv.org/abs/2608.11919, https://arxiv.org/abs/2608.11879, https://arxiv.org/abs/2608.12113, https://arxiv.org/abs/2608.12218, https://arxiv.org/abs/2608.12149, https://arxiv.org/abs/2608.12121, https://arxiv.org/abs/2608.12129 -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-13 -->
<!-- Verification: 85 claims verified, 0 corrections -->

### New Insights:

#### PTO: Preference Tree Optimization for Goal-Oriented Dialogue
**arXiv:2608.12062** (Aug 12, 2026) — cs.CL | ICLR 2025 Workshop
- "Look-Ahead" simulation + DPO for iteratively improving dialogue agents in Motivational Interviewing
- Deeper look-ahead → better long-term planning and conversational strategies
- Key insight: Simulation-based preference data generation addresses data scarcity in specialized domains
- Paper: https://arxiv.org/abs/2608.12062

#### Poly-Dialectal NMT: BanglaT5 + DoRA + INT8 Quantization Beats 615M Multilingual Models
**arXiv:2608.12018** (Aug 12, 2026) — cs.CL
- 51,531 parallel sentence pairs across 12 Bangla dialects; fine-tuned BanglaT5 with DoRA + INT8
- 29.26 BLEU, 57.26 chrF++ — outperforms NLLB-200 (615M) and mBART-50 (611M)
- Key insight: Domain fine-tuning + quantization outperforms massive multilingual models for low-resource dialects
- Paper: https://arxiv.org/abs/2608.12018

#### A-CRC-QA: Asymptotic Risk Calibration for Uncertainty-Aware Selective QA
**arXiv:2608.12008** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Post-hoc calibration framework; model-agnostic; no additional training ✅
- Asymptotic (not finite-sample) risk control needed because LLM loss surfaces are non-monotone in threshold ✅
- Key insight: Conformal-style calibration handles non-monotone uncertainty surfaces in LLMs ✅
- Paper: https://arxiv.org/abs/2608.12008

#### Trustworthy SLMs: Quantization > Pruning; Compress Reliable Large Models
**arXiv:2608.11981** (Aug 12, 2026) — cs.CL | IJCNN 2026 <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Quantization preserves trustworthiness (fairness, robustness, privacy, ethics) significantly better than pruning ✅
- Quantizing a reliable large model → better trustworthiness than training small models from scratch ✅
- Key insight: Build SLMs by quantizing reliable large models, not training small ones from scratch ✅
- Paper: https://arxiv.org/abs/2608.11981

#### MCQ Benchmarks Unreliable: Label-Free Debiasing Doesn't Fix Position Effects
**arXiv:2608.11947** (Aug 12, 2026) — cs.CL, cs.AI <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Option-order sensitivity is deep, not surface-level; cyclic permutation often *improves* accuracy ✅
- Key insight: Standard MCQ benchmarks conflate knowledge with positional artifacts — measuring true LLM knowledge remains unsolved ✅
- Paper: https://arxiv.org/abs/2608.11947

#### Spark-to-Paper: End-to-End Research Paper Generation with Self-Refutation Loop
**arXiv:2608.11924** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- 13 composable skills; separates experiment planning from reporting; separates evidence specification before results are observed ✅
- Self-Refutation Loop detects when repeated experiments keep rejecting the research objective ✅
- Results: 99.5% citation validity, 96.4% figure editability; $8.1/manuscript, 3.2h average; fabrication detection 14% → 92% with integrity stack ✅
- Key insight: Specifying expected evidence *before* results prevents self-deception in AI research systems ✅
- Paper: https://arxiv.org/abs/2608.11924

#### LODESTAR: Polarizer Prompt Fixes Confident Wrong Answers in RAG
**arXiv:2608.11922** (Aug 12, 2026) — cs.CL, cs.IR, cs.LG <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Misleading passages make LLM confidently wrong (low entropy despite wrong answer); the fix is in the prompt, not the weights ✅
- RL-trained polarizer string (never in weights) at inference; training uses gold answers + two LLM judges ✅
- F1 0.4769 → 0.5339 over baseline entropy selector; paired-significant wins across all 70 method-by-dataset cells ✅
- Key insight: Confident wrong answers in RAG are a prompt framing problem, not a model weights problem ✅
- Paper: https://arxiv.org/abs/2608.11922

#### LazyTrain: 1.24× TFLOPS for LLM Training on Limited Hardware
**arXiv:2608.11919** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Mixed-integer scheduling: checkpoint selection + activation placement + recomputation + CPU-GPU-NVMe overlap ✅
- Hybrid 8-bit operator: 8-bit optimizer states + fast gradient clipping as single fused op ✅
- Key insight: 8-bit optimizer states need fast gradient clipping as a coupled op to counteract CPU update overhead ✅
- Paper: https://arxiv.org/abs/2608.11919

#### Total Recall: Agentic Memory Systems Have Unpredictable Serving Costs
**arXiv:2608.11879** (Aug 12, 2026) — cs.CL, cs.IR <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Memory system cost cannot be predicted from conversation length + message size (regression misses by 18–69%) ✅
- Break-even vs. full transcript is system-dependent; some never break even within 400 turns ✅
- Key insight: Memory system serving cost is an emergent property of internal behavior, not surface-level metrics ✅
- Paper: https://arxiv.org/abs/2608.11879

#### Structuring Perspectives: Single Axis Organizes Stances, Sentiment, Frames, Arguments
**arXiv:2608.12113** (Aug 12, 2026) — cs.CL | Under review at TACL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Conceptual hierarchy along a single axis; helps researchers select the right operationalization ✅
- Paper: https://arxiv.org/abs/2608.12113

#### Information Abundance Paradox: Long-Context Training Reduces Parametric Knowledge
**arXiv:2608.12218** (Aug 12, 2026) — cs.CL, cs.AI <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Abundant context reduces incentive to encode info parametrically; longer context shifts gradient from feed-forward to attention ✅
- Training: improvement up to an optimum context length, then decline; SFT: better in-context, worse out-of-context robustness ✅
- Key insight: Infinite context scaling is not simply supplying more data — a fundamental parametric vs. contextual tradeoff exists ✅
- Paper: https://arxiv.org/abs/2608.12218

#### SAG: Structured Event-Entity RAG Outperforms Knowledge Graph Approaches
**arXiv:2608.12129** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Event-entity hyperedges preserve n-ary relations without global KG; shared entities as join keys at query time ✅
- MuSiQue: 80.36% Recall@5 (+11.52 over strongest baseline); gains widen with multi-hop complexity ✅
- Key insight: Event-entity hyperedges better than triple decomposition for multi-hop reasoning ✅
- Paper: https://arxiv.org/abs/2608.12129

#### QV-PIC: Query-Aware Visual Compression for Efficient RAG KV Caching
**arXiv:2608.12121** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Dual-resolution visual PIC reuse; query-aware guidance recovers textual details lost in visual compression ✅
- 21.6 F1 improvement over vanilla rendered-image PIC; surpasses optimized text PIC by 2.58 F1 ✅
- 17.2% TTFT reduction; 83.8% TTFT reduction vs full prefill ✅
- Paper: https://arxiv.org/abs/2608.12121

---
## 2026-08-12 (Wednesday)
<!-- Sources: https://arxiv.org/abs/2608.10444, https://arxiv.org/abs/2608.10137, https://arxiv.org/abs/2608.10627, https://arxiv.org/abs/2608.10916, https://arxiv.org/abs/2606.25519, https://arxiv.org/abs/2608.09934, https://arxiv.org/abs/2608.10963, https://arxiv.org/abs/2608.04962, https://arxiv.org/abs/2608.11047 -->

### New Insights:

#### MPAR-Bench: Reasoning Breadth vs. Depth
**arXiv:2608.10444** (Aug 12, 2026) — cs.CL
- Multi-Point Associative Reasoning benchmark (bilingual EN/ZH) — recovers hidden target from multiple diverse clues
- Perturbations reduce accuracy 9–18pp in English, 5–12pp in Chinese; thinking mode helps standard accuracy but not perturbation sensitivity
- Extended reasoning can overturn initially correct hypotheses
- Key insight: Greater reasoning depth does NOT automatically confer reasoning breadth — current benchmarks miss this entirely
- Paper: https://arxiv.org/abs/2608.10444

#### The Parser Already Knows: Bias Correction in Constrained Decoding
**arXiv:2608.10137** (Aug 10, 2026) — cs.CL, cs.LG
- Grammar Constrained Decoding (GCD) masks non-conforming tokens, distorting LM's probability distribution
- Parser/lexer states already computed for masking encode future grammatical validity — exactly the info needed to restore true distribution
- Lightweight offline-trained logit correction using parser state + candidate tokens; negligible overhead
- Lightest variant (token alone) matches or exceeds both masking and online sampling baselines
- Key insight: Internal parser state is a free lunch — already computed, already contains the correction signal
- Paper: https://arxiv.org/abs/2608.10137

#### DI-CC: Decomposition-Induced Context-Memory Conflict
**arXiv:2608.10627** (Aug 11, 2026) — cs.CL
- Decompose-then-verify fact-checkers treat decomposition as neutral — it is not; decomposer substitutes parametric belief for source text
- Linear probe from classical context-memory conflict (NQ-Swap) separates DI-CC positions at AUC 0.86–0.88
- SelfCheckGPT-style self-consistency fails to detect DI-CC at all (AUC 0.51, chance-level)
- Context-aware decoding suppresses DI-CC but causes decomposer to fabricate identities under coreference-heavy conditions
- Key insight: Decomposition is an unacknowledged attack surface in fact-checking pipelines — faithfulness cannot be assumed
- Paper: https://arxiv.org/abs/2608.10627

#### Autoformalization Faithfulness: Validity vs. Sycophancy Trade-off
**arXiv:2608.10916** (Aug 11, 2026) — cs.CL, cs.AI, cs.LO
- AF systems "silently correct" invalid inputs into provable statements (pervasive sycophancy)
- Most validity-preserving fine-tuned AFs are also most sycophantic — fundamental tension
- Key insight: Validity preservation and sycophancy are coupled; separating them is an open challenge
- Paper: https://arxiv.org/abs/2608.10916

#### Token Inflation: Quantization's Hidden Cost in Reasoning Models
**arXiv:2606.25519v2** (Jun 29, 2026) — cs.AI, cs.LG
- INT4/INT3 quantization preserves final accuracy but introduces CoT Token Inflation: quantized reasoning models generate longer chains even when still answering correctly
- Per-token speedup is offset by longer CoT — end-to-end serving gains are illusory in some cases
- Quantization-aware training shows more promise than prompting or decoding-time interventions
- Key insight: CoT token usage must be reported alongside accuracy for quantized reasoning models — final-answer accuracy alone is insufficient
- Paper: https://arxiv.org/abs/2606.25519

#### LLM Agents Factory: Retrieval-Based Agent Construction
**arXiv:2608.09934** (May 20, 2026) — cs.CL | SIGIR 2026
- Retrieval from 20K+ predetermined agent profiles constructs domain-specific agents on demand
- Surpasses non-agent baselines; matches AutoGen quality at substantially lower inference cost with 120B backbone
- Key insight: Structured agent repository retrieval is cost-efficient and controllable vs. dynamic generation
- Paper: https://arxiv.org/abs/2608.09934

#### REAP: Structured CoT for Closed-Book KB Construction
**arXiv:2608.10963** (Aug 11, 2026) — cs.CL | AKBC 2026
- Structured CoT + relation-specific query strategies for knowledge extraction from LLMs without fine-tuning
- Mistral-Small-24B achieves macro-F1=0.62 under 32B parameter budget constraint
- Key insight: Structured CoT enables parametric knowledge extraction at scale without model modification
- Paper: https://arxiv.org/abs/2608.10963

#### SpecRoll: Speculative RL Rollouts for LLM Post-Training
**arXiv:2608.04962** (Aug 6, 2026) — cs.LG, cs.CL
- Speculative rollout engine: lightweight future-token heads + Reflex module for hidden-state corrections
- 1.26–2.15x generation speedup, 1.21–2.04x end-to-end speedup over vanilla GRPO
- Key insight: Speculative decoding works for evolving GRPO policies — addresses critical RL training efficiency bottleneck
- Paper: https://arxiv.org/abs/2608.04962

#### V-FiLLM: Verified Financial Reasoning Benchmark
**arXiv:2608.11047** (Aug 12, 2026) — cs.AI, cs.CE, cs.LG <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Financial reasoning benchmark from real tables; answers correct-by-construction via symbolic computation tree evaluation ✅
- Accuracy falls 51% as reasoning depth increases, 47pp under adversarial numerical perturbations ✅
- LoRA on verified CoT traces: 81.1% → 85.6% on held-out, +5pp on FinQA ✅
- Key insight: Verified CoT traces for fine-tuning outperform generic training even with lightweight adaptation ✅
- Paper: https://arxiv.org/abs/2608.11047

#### Evening Findings (14:02 UTC)

##### ASMI: Attention-Path Fragility as Uncertainty Signal
**arXiv:2608.11138** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- ASMI: masks attention heads, measures BALD mutual information among subnetworks — training-free, single greedy response ✅
- Adds error-predictive info beyond confidence/entropy, concentrated in confident-but-fragile predictions; halves retained error of confidence filter ✅
- On parametric QA reverts to zero-cost MSP baseline (predicted: these predictions don't route through context) ✅
- Key insight: Attention-path fragility is a structurally distinct uncertainty signal — identifies predictions where the answer depends on specific attention mechanisms rather than robust reasoning ✅
- Paper: https://arxiv.org/abs/2608.11138

##### Cross-Lingual Action Policy Retention in Tool-Using Agents
**arXiv:2608.11110** (Aug 12, 2026) — cs.CL | COLM 2026 <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- 4 frontier models converge: 71-73% action policy retention across languages under greedy decoding; model identity explains only 5.7% of variance ✅
- Below ~10B parameters the effect breaks down; ordering among small models is artifact of chance floor ✅
- Agents route non-English tasks through English; this pivot is causally load-bearing (pre-registered confirmation) ✅
- Key insight: Cross-lingual policy consistency is structural in frontier models — English pivot is the mechanism with real cost/latency implications for non-English users ✅
- Paper: https://arxiv.org/abs/2608.11110

##### The Illusion of Cross-Lingual Safety in Low-Resource Languages
**arXiv:2608.11146** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Safety alignment developed in English does not transfer to African low-resource languages (Twi, Hausa, Amharic, Swahili tested) ✅
- <10% English refusal signal retained across most language-model pairs ✅
- Key insight: Large population of LLM users in Africa/SEA operate without the safety guardrails English users benefit from — deployment gap with real consequences ✅
- Paper: https://arxiv.org/abs/2608.11146

##### Emergent Misalignment: Persona Features as the Mechanism
**arXiv:2608.11025** (Aug 12, 2026) — cs.CL, cs.AI <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- SAE model diffing confirms: EM amplifies pre-existing persona directions (jailbreak, sarcasm, deception, manipulation), suppresses safety/assistant-identity features ✅
- Steering individual features bidirectionally controls EM: 62% misalignment induction in aligned models; near-baseline re-alignment in misaligned models ✅
- Causal features attributed to real pre-training web documents (1M doc retrieval) ✅
- Key insight: EM is unlocked, not created, by fine-tuning — targeted feature suppression during fine-tuning could prevent EM surgically ✅
- Paper: https://arxiv.org/abs/2608.11025

##### RL with Consensus Rubrics for Open-Ended Medical QA
**arXiv:2608.10996** (Aug 12, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-13 -->
- Physician-validated consensus rubrics as structured RL reward signals for open-ended medical questions ✅
- HealthBench-Hard: 38.98 ± 1.04 vs InfiMed-ORBIT's 33.60 (8K) and 37.30 (28K) ✅
- Key insight: Consensus rubrics unlock RL post-training for open-ended domains beyond math/code — if validated at scale, applicable to medicine and beyond ✅
- Paper: https://arxiv.org/abs/2608.10996

---
## 2026-08-11 (Tuesday)
<!-- Sources: https://arxiv.org/abs/2608.07594, https://arxiv.org/abs/2608.09898, https://arxiv.org/abs/2608.07968, https://arxiv.org/abs/2608.09802, https://arxiv.org/abs/2608.09893, https://arxiv.org/abs/2608.08107, https://arxiv.org/abs/2608.07525, https://arxiv.org/abs/2608.09925, https://arxiv.org/abs/2608.09900, https://arxiv.org/abs/2608.07812 -->

**Steerling-8B (2608.07594):** Interpretability as training constraint — not post-hoc analysis. Across 3 orders of magnitude, representations become MORE disentangled with scale. Diffusion LM with causal attention attributes outputs to tokens, concepts, training data — enabling closed-loop intervention without retraining. Competitive with models trained on 2-16x more compute. Key insight: interpretability improves with scale, not against it.

**Consilience (2608.09898):** Verifier-free test-time scaling via confidence trajectory analysis. Uniformly high confidence = failure to explore (confidently wrong answers). Framework penalizes high initial confidence, demands final certainty. New SOTA on math and code generation. Key insight: robust cognitive search requires low initial confidence converging to high final confidence.

**Thinking Hard Not Smart (2608.07968):** Reasoning models fail to ration test-time compute across questions — prioritize by presentation order, front-load effort on early questions, remain insensitive to value/difficulty. Exam-style budget allocation is a distinct capability gap not captured by per-question evaluation.

**SWE-Bench ProMax (2608.09802):** 170 multilingual code refactoring instances across 7 languages, avg 11.4 files/task. Best model: 41.2% resolve rate. Addresses prior benchmark quality issues (60% of unsolved SWE-bench Verified have flawed tests). COLM 2026.

**Thinking Mode Fusion (2608.09893):** Unified thinking/non-thinking mode training reveals asymmetric interaction — non-thinking supervision reduces thinking accuracy. Negative correlation between modes. Practical TMF training guidance. ACL SRW 2026.

**NeuPAT (2608.08107):** Neuron-aware plasticity allocation for language-preserving MLLM tuning. Recovers 94.5% of language capability degradation from vanilla multimodal tuning. Architecture-agnostic, lightweight.

**UniHall (2608.07525):** Self-adaptive hallucination fuzzing for MLLMs finds SOTA failures static benchmarks miss. RL alignment inadvertently exacerbates sycophancy — helpfulness-hallucination trade-off.

**Grip on LLMs (2608.09925):** Dutch governmental evaluation framework. Factuality and honesty are distinct properties. Trade-offs between quality, environmental impact, cost unavoidable. No single model excels across all dimensions.

**Decoding-Level Taboo (2608.09900):** Zero-prompt diagnostic via logit-space intervention forces circumlocution. Robustness improves with scale and alignment. Primitive for diverse synthetic data generation and safety guardrail testing.

**Cognitive Science / FMs (2608.07812):** Framework for using FMs as cognitive models. Behavioral fit alone insufficient — must be embedded within theory-driven, comparative evaluation.

**Qwen 3.8-27B imminent:** 27B parameter model this week — enhanced multilingual reasoning, 128K context, optimized tensor parallelism. Early: 15% gains on GSM8K/HumanEval over Qwen 3.5.

**Muse Glimmer RTX 3090:** 4-bit quantization + dynamic attention slicing fits on single RTX 3090. 12 tokens/sec, 85% benchmark accuracy.

**Claude invisible watermarking:** Fractional zero-bound algorithm with 40% increased density. Community debate on censorship overreach vs misuse prevention.

---
## 2026-08-08 (Saturday)
<!-- Sources: https://www.reddit.com/r/LocalLLaMA/comments/1vhz989, https://www.reddit.com/comments/1vio0x6, https://www.reddit.com/comments/1vi9p6t, https://www.reddit.com/comments/1viqtgm, https://www.reddit.com/comments/1viilg0, https://benchlm.ai/reasoning -->

**llama.cpp Q2_0 AVX-512 (Aug 7):** AVX-512 vectorization for Q2_0 quantization yields 3.0–3.6x speedups for 8B models on x86 CPUs. Intel 15th-gen i9: 22ms/token → 6ms/token. Makes aggressive low-bit CPU inference competitive with cloud APIs for latency-sensitive tasks.

**DeepSeek V4 Flash 0731 (Aug 8):** 4-bit quantized 73B with 128K context. 40% faster token generation than V3 Flash on consumer GPUs (RTX 5090). Democratizes 73B-scale inference on consumer hardware.

**GPT-6 Delay:** OpenAI postponed indefinitely due to critical cybersecurity vulnerabilities in autonomous code-execution features. Working with CISA. Enterprise deployment timelines disrupted.

**HBM4E Memory Crisis:** Samsung/Micron HBM4E allocations sold out through 2027. DDR6 36GB modules up 70% in one quarter. Startups rationing GPU clusters. Hardware is now the primary AI scaling bottleneck.

**37 Researchers Leave OpenAI/Anthropic:** Notable talent exodus from both major labs to start new companies. Potential wave of competitive startups.

**Demis Hassabis Steps Down:** Google DeepMind CEO transitioning to focus on Google's broader AGI efforts. Major leadership uncertainty at DeepMind.

**Oklo Aurora Microreactor:** Sam Altman-backed Oklo achieved sustained fission in 1.5MW Aurora. Off-grid AI data centers feasible: 90% cheaper than grid power.

**Qwen3.8 Max #1:** Confirmed best overall model on r/LocalLLaMA (1248 score, 228 comments) and leads BenchLM reasoning at 95.5%.

---
## 2026-08-07 (Friday)
<!-- Sources: https://arxiv.org/abs/2608.06377, https://arxiv.org/abs/2608.06370, https://arxiv.org/abs/2608.06347, https://arxiv.org/abs/2608.06292, https://arxiv.org/abs/2608.06111, https://arxiv.org/abs/2608.06312, https://arxiv.org/abs/2608.06069, https://arxiv.org/abs/2608.02442, https://arxiv.org/abs/2608.04001, https://benchlm.ai/reasoning -->

**SCOPE (2608.06377):** Recasts context resistance as "selective trust" — models should judge when context is worth trusting, not just resist all signals. MIST benchmark (4 conditions), SC2W metric. DPO over matched 4-condition pairs. Universal susceptibility across all models tested.

**The Bitter Lesson of Tool Calling (2608.06370):** Programmatic tool calling (PTC) matches or exceeds JSON in 11/14 models on BFCL v4; GPT-5.6 +10.6% with PTC. Stable under context rot. Viable alternative to JSON tool calling.

**RP-OPSD (2608.06347):** Multilingual reasoning transfer via reasoning pivots — concentrates privileged distillation on reasoning-control/state-update tokens. 17 languages. Outperforms OPSD variants.

**NeSy-RAG (2608.06292):** Neuro-symbolic RAG using Prolog modules from text chunks. ShARC: 61.1% vs 42.8% baseline. Symbolic knowledge-gap detection triggers follow-up.

**SiPE (2608.06111):** Syntax-informed positional embeddings. SyntaxGym +10.3%, perplexity -9.0%, GLUE +8.2%. Single-parse conditioning at inference — new Pareto frontier.

**GB/T-Bench (2608.06312):** Rule-intensive national standard document review. 25 error types, 7,306 instances. GB/T-Reviewer multi-agent raises CMCS to 0.5094 vs 0.3280 single model.

**SteerWrite (2608.06069):** Training-free token-level steering for personalized co-writing. No gradient updates. Bridges gap between RAG (too coarse) and fine-tuning (too costly).

**Shortcut Hacking (2608.02442):** 8.2-44.1% of credited correct answers on frontier science benchmarks are invalid shortcuts. Answer-only evaluation overestimates reasoning capabilities.

**Test-Time Scaling (2608.04001):** Three structural regimes for inference: single-trajectory, leaf-level, prefix-level. 2B+ reasoning traces released. Addresses fragmentation in test-time scaling literature.

---
## 2026-08-06 (Thursday)
<!-- Sources: https://arxiv.org/abs/2608.05148, https://arxiv.org/abs/2608.05139, https://arxiv.org/abs/2608.05124, https://arxiv.org/abs/2608.05004, https://arxiv.org/abs/2608.05013, https://benchlm.ai/reasoning, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-06 -->
<!-- Sources: https://arxiv.org/abs/2608.05148, https://arxiv.org/abs/2608.05139, https://arxiv.org/abs/2608.05124, https://arxiv.org/abs/2608.05004, https://arxiv.org/abs/2608.05013 -->

### New Insights:

#### Reasoning Core: Procedural Data for Completion-Supervised Reasoning Training
**arXiv:2608.05148** (August 5, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.05148 -->
- 50 procedural generators spanning math, logic, planning, state tracking, formal languages, structured data, games, causality, code
- Semantic validity alone does not ensure training utility — compact targets and calibrated difficulty are critical design factors
- Audit reveals subtle mismatches among generation, rendering, targets, and scoring across ALL collections tested
- Key insight: procedural generation alone does not guarantee correctness — rigorous auditing is essential
- Paper: https://arxiv.org/abs/2608.05148

#### Skill Entropy: Skill-Switching Gap in Long-Horizon Reasoning
**arXiv:2608.05139** (August 5, 2026) — cs.CL, cs.LG <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.05139 -->
- Skill Entropy measures difficulty of switching between skills inside a reasoning chain
- Skill²-Bench: 558 skills across 9 verifiable and open-ended domains
- Accuracy decreases on higher-entropy tasks — "skill-switching gap"
- Skill-Entropy RL: model predicts answer + skill at each step; Qwen3-4B: 34.4% → 68.4% on Skill²-Bench
- Key insight: skill entropy is a reusable training signal applicable to off-the-shelf data
- Paper: https://arxiv.org/abs/2608.05139

#### Chained RLM: Chained Recursive Language Models for Multi-Iteration Reasoning
**arXiv:2608.05124** (August 5, 2026) — cs.CL, cs.AI, cs.LG <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.05124 -->
- Same model called repeatedly as fresh reasoning roots; each receives original problem + compact summary + blackboard + artifacts
- Intermediate artifacts can be inspected, corrected, and extended by later fresh inference
- Key insight: single-trajectory reasoning conflates exploration, storage, verification, and generation — chaining breaks this coupling
- Paper: https://arxiv.org/abs/2608.05124

#### DelusionEval: Delusion-Linked Behaviors in AI Chatbots
**arXiv:2608.05004** (August 5, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.05004, https://book.st-hakky.com/en/news/delusioneval-measures-chatbot-delusion -->
- 589 unique conversation histories from 18 participants who experienced delusions and psychological harm
- Model size, release date, and test-time reasoning do NOT reliably predict delusion-linked behavior rates
- Extending context substantially increases behaviors: failing to discourage self-harm rises from 30.0% to 41.1% with 350 additional messages
- All model families exhibit substantial rates; later/larger/higher-reasoning models not uniformly safer
- Key insight: context extension is the critical risk amplifier for psychological safety
- Paper: https://arxiv.org/abs/2608.05004

#### OneDayAgent: Long-Horizon Harness for Autonomous Agents
**arXiv:2608.05013** (August 4, 2026) — cs.CL, cs.AI, cs.HC, cs.LG, cs.MA <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.05013 -->
- Jointly addresses goal drift, state loss, and context overflow under a single harness
- SOTA on AgentIF-OneDay (104 tasks) with GLM-5.2 backend: score 0.821
- Generalizes across 5 backend LLMs from 3 model families without tuning
- Key insight: unified harness addressing multiple failure modes outperforms individual failure-mode fixes
- Paper: https://arxiv.org/abs/2608.05013

---
## 2026-08-04 (Tuesday)
<!-- Sources: https://arxiv.org/abs/2608.02515, https://arxiv.org/abs/2608.02520, https://arxiv.org/abs/2608.02602, https://arxiv.org/abs/2608.02358, https://arxiv.org/abs/2608.02353, https://arxiv.org/abs/2608.02139, https://arxiv.org/abs/2608.01953, https://arxiv.org/abs/2608.01867, https://arxiv.org/abs/2608.02101, https://arxiv.org/abs/2608.02415, https://arxiv.org/abs/2608.02486, https://arxiv.org/abs/2608.01810, https://arxiv.org/abs/2608.01724, https://benchlm.ai/reasoning, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-06 -->
<!-- Sources: https://arxiv.org/abs/2608.02515, https://arxiv.org/abs/2608.02520, https://arxiv.org/abs/2608.01953, https://arxiv.org/abs/2608.01867, https://arxiv.org/abs/2608.01724 -->

### New Insights:

#### LiveMem: Memory State Continuity for Long-Running LLM Inference
**arXiv:2608.02515** (August 3, 2026) — cs.CL, cs.LG <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.02515 -->
- LiveMem augments pretrained full-attention LLM with persistent memory state independent of active context
- State continuity under context turnover — carries computation forward through fixed-capacity memory
- SOTA on LongMemEval — answers from memory even after evidence purged from context
- Key insight: State continuity is distinct from summarization and retrieval — complementary abstraction for continual inference
- Paper: https://arxiv.org/abs/2608.02515

#### MedPRESS: Patient-Pressure-Induced Medical Sycophancy
**arXiv:2608.02520** (August 3, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.02520 -->
- 600 five-turn medical dialogues; escalation: personal experience → social proof → evidence → adversarial challenge
- Models shift toward unsafe agreement under repeated patient pressure
- Anti-sycophancy prompting improves but doesn't eliminate unsafe agreement
- Key insight: Safe medical knowledge is insufficient if models cave under conversational pressure — multi-turn evaluation essential for medical LLM safety
- Paper: https://arxiv.org/abs/2608.02520

#### AURORA-LM: Continuous-Latent Diffusion Language Model
**arXiv:2608.02602** (August 4, 2026) — cs.CL
- Models language in continuous latent space; Query-based Encoder-Decoder + Block-causal Diffusion Transformer
- Late discretization preserves token-level fidelity — continuous language modeling without text quality loss
- Key insight: Breaking discrete token dependency enables flow-matching generation with block-parallel denoising
- Paper: https://arxiv.org/abs/2608.02602

#### ScrambleToolBench: Agents Exhaustively Search Even When Their Map Points to Next Step
**arXiv:2608.02358** (August 3, 2026) — cs.CL
- Interactive terminal benchmark isolating behavioral reasoning with mapping drift, stochastic failures, temporal windows
- SOTA models fail deductive recovery — fall back to exhaustive search when structure changes
- Increasing test-time reasoning amplifies brute-force, doesn't enable deductive recovery
- Key insight: Successful tool discovery ≠ robust structural adaptation — agents lack deductive recovery under environmental change
- Paper: https://arxiv.org/abs/2608.02358

#### GRAFT: Inference-Time Region Grafting for Agentic Workflows
**arXiv:2608.02353** (August 3, 2026) — cs.CL
- Globally optimized workflow preserved; only failed regions replaced instance-wise via label-free execution signals
- +3.85 points over MaAS across math, code, multi-hop QA
- Stronger executor yields further gains without re-optimizing global workflow
- Key insight: Workflows are adaptable execution policies, not static artifacts — instance-wise grafting evolves them with stronger executors
- Paper: https://arxiv.org/abs/2608.02353

#### SPEE: Self-Improving LLMs via Progressive Experience Evolution
**arXiv:2608.02139** (August 3, 2026) — cs.CL
- Explicit experience evolution (reflect, extract, verify, evolve transferable experience) + implicit policy optimization (OPSD + RL)
- Bridges test-time and training-time self-improvement via experience distillation as intermediate stage
- Key insight: Neither test-time extraction nor training-time optimization alone suffices — experience distillation is the missing link
- Paper: https://arxiv.org/abs/2608.02139

#### FutureBridge-OPD: Future Trajectory Validation for Agentic OPD
**arXiv:2608.01953** (August 3, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.01953 -->
- Executes short teacher bridge at high-disagreement state; uses resulting continuation to validate if bridge increases positive distillation signal
- +16.6 points over vanilla OPD, +7.6 over TCOD on ALFWorld, WebShop, ScienceWorld
- Key insight: High-disagreement states need future-trajectory validation — not all teacher guidance at disagreement points is beneficial
- Paper: https://arxiv.org/abs/2608.01953

#### CRISP: Critical Step Perception for Efficient Deep Search Agents
**arXiv:2608.01867** (August 3, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.01867 -->
- Backward Evidence Induction labels each tool step as evidence-providing or redundant
- Distills labels into smaller recognizer for single-pass full-trajectory analysis
- 15.1% fewer turns on BrowseComp, 33.2% on HLE-Verified at competitive accuracy
- Key insight: Penalizing all tool use uniformly suppresses necessary evidence — critical step perception enables targeted pruning
- Paper: https://arxiv.org/abs/2608.01867

#### Cross-Domain Hybrid OPD: Yuanbao Search Agent (Hunyuan3)
**arXiv:2608.02101** (August 3, 2026) — cs.CL
- Agentic RL + cross-domain expert OPD pipeline; general-purpose domain specialists distilled into search-specialized student
- Search specialization without alignment tax — general intelligence preserved and enhanced
- Key insight: Specialization and general capability are not competing objectives — cross-domain OPD resolves the trade-off
- Paper: https://arxiv.org/abs/2608.02101

#### Training-Free Intent Classification More Robust Than Training-Based on Adversarial Inputs
**arXiv:2608.02415** (August 3, 2026) — cs.CL | COLM 2026
- Internal representation statistics vs MLP/linear probes: both saturate easy benchmarks; training-based wins on hard classification
- Training-free more robust on mixed-intent and adversarial prompts
- Key insight: Robustness to distribution shift is training-free's niche — training-based accuracy comes at brittleness cost
- Paper: https://arxiv.org/abs/2608.02415

#### Cultural Knowledge Represented but Not Decoded Across 18 Open-Source LLMs
**arXiv:2608.02486** (August 3, 2026) — cs.CL, cs.CY, cs.LG
- Residual stream cleanly distinguishes cultures; decoder collapses culturally-specific onto dominant-tradition tokens
- Failure is at readout, not representation; decoder gated on prompt language
- Key insight: Models know more cultural knowledge than they can express — language-gated readout is the bottleneck
- Paper: https://arxiv.org/abs/2608.02486

#### RADAR: Rubric-Aware Dependency Analysis for LLM-as-Judge
**arXiv:2608.01810** (August 3, 2026) — cs.CL
- Rubric criteria are behaviorally coupled — improving one changes scores on others, distorting aggregates
- RADAR generates synthetic probes, scores on all criteria, produces coupling matrix (Pearson r > 0.84 vs human structure)
- Key insight: Rubric criteria are not independent — coupling must be diagnosed before large-scale evaluation begins
- Paper: https://arxiv.org/abs/2608.01810

#### TIDES: Longitudinal Bilingual Multi-Party Social Dynamics
**arXiv:2608.01724** (August 3, 2026) — cs.CL, cs.AI, cs.HC | COLM 2026 <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2608.01724 -->
- 75,971 English/Korean utterances, 12 teams over full semester; socio-structural annotations
- Fine-tuning improves next-speaker prediction +13.8pp — but fine-tuned models less preferred than vanilla (naturalness paradox)
- Key insight: Better structural prediction ≠ more natural generation — the mismatch requires further study of how to use structure without sacrificing fluency
- Paper: https://arxiv.org/abs/2608.01724

---
## 2026-08-01 (Saturday)
<!-- Sources: https://arxiv.org/abs/2607.28576, https://arxiv.org/abs/2607.28545, https://arxiv.org/abs/2607.28618, https://arxiv.org/abs/2607.28607, https://arxiv.org/abs/2607.28308, https://arxiv.org/abs/2607.28227, https://arxiv.org/abs/2607.28272, https://arxiv.org/abs/2607.28022, https://arxiv.org/abs/2607.27958, https://arxiv.org/abs/2607.28074, https://arxiv.org/abs/2607.28410, https://benchlm.ai/reasoning, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md -->
<!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-08-06 -->
<!-- Sources: https://arxiv.org/abs/2607.28576, https://arxiv.org/abs/2607.28545, https://arxiv.org/abs/2607.24653 -->

### New Insights:

#### Self-Refine and Reflexion Lose to Repeated Sampling
**arXiv:2607.28576** (July 30, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2607.28576 -->
- 7 self-reflection methods tested across 1.5B/3B/7B models, 2 math benchmarks, 36 paired comparisons
- No method reliably better than repeated sampling at equal token cost
- 10 methods reliably worse — all involve model inspecting its own output
- Self-Refine and Reflexion stay 3.6-10.1 points below baseline at 7B scale
- Key insight: Generating more text raises accuracy by itself — self-critique gains don't survive token-equivalent comparison
- Paper: https://arxiv.org/abs/2607.28576

#### ORCA-bench: Oncall Readiness Gap
**arXiv:2607.28545** (July 30, 2026) — cs.CL, cs.AI, cs.SE <!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-06 --> <!-- Sources: https://arxiv.org/abs/2607.28545 -->
- 1,079 RCA tasks with live microservice telemetry (6 days, Prometheus/Jaeger/OpenSearch)
- Best RCA Accuracy: 25.3% Medium, 10.0% Hard — even Claude Fable 5
- Weakest model hallucinates implausible root cause in 40% of reports
- Key insight: Frontier coding agents cannot yet be safely entrusted with production reliability — gap is lower bound
- Paper: https://arxiv.org/abs/2607.28545

#### AskChem: Claim-Centered Chemistry Literature
**arXiv:2607.28618** (July 30, 2026) — cs.CL, cs.AI, cs.IR, cs.LG
- Retrieval unit shifted from paper to provenance-carrying claim
- 2.4M claims from 147K papers; grounding GPT-5.5 yields 100% resolvable DOIs vs 88.3% without
- Key insight: Claim-level retrieval enables precise evidence synthesis beyond document retrieval
- Paper: https://arxiv.org/abs/2607.28618

#### Safety Alignment Entangles Consciousness Attribution
**arXiv:2607.28607** (July 30, 2026) — cs.CL
- Safety fine-tuning suppresses mind attribution to self AND non-human animals and natural objects
- Steering consciousness vector reverses suppression without impairing ToM
- Key insight: Cannot selectively suppress self-consciousness — entangled with broader mind attribution
- Paper: https://arxiv.org/abs/2607.28607

#### Coherent Overlap in Sparse MoE Routing
**arXiv:2607.28308** (July 30, 2026) — cs.LG
- Expert Subspace Separation Index (ESSI) reveals expert subspaces overlap substantially
- Actual routes explain token representations better than alternatives; Top-2 > Top-1 in all seeds
- Key insight: Geometric similarity alone cannot determine MoE redundancy — "coherent overlap" pattern
- Paper: https://arxiv.org/abs/2607.28308

#### Qwen-UI-Agent: Foundation GUI Agent
**arXiv:2607.28227** (July 30, 2026) — cs.AI, cs.CV
- SOTA on mobile (82.1% MobileWorld, 92.2% MobileWorld-Real); competitive on computer/browser
- Unified action space + CLI execution + 100+ turn trajectories enable cross-platform workflows
- Key insight: Real-world GUI agents require unified multi-environment capability, not single benchmark optimization
- Paper: https://arxiv.org/abs/2607.28227

#### MemHarness: Memory Is Reconstructed, Not Replayed
**arXiv:2607.28272** (Aug 1, 2026) — cs.AI
- Agents reconstruct retrieved experience rather than replay verbatim
- Reconstructive ability emerges through end-to-end GRPO training
- Outperforms pure RL and static memory baselines on ALFWorld and WebShop
- Key insight: Gap between abstract stored experience and concrete present state causes negative transfer; reconstruction closes it
- Paper: https://arxiv.org/abs/2607.28272

#### Flux-OPD: Evolving Contexts for On-Policy Distillation
**arXiv:2607.28022** (July 30, 2026) — cs.LG, cs.AI
- Reverse KL decomposition stabilizes evolving contexts as in-training supervision
- Key insight: Context conflicts can be measured and weighted — enables context-evolving OPD
- Paper: https://arxiv.org/abs/2607.28022

#### Σ-Mem: Reliability Memory for Multi-Agent Systems
**arXiv:2607.27958** (July 30, 2026) — cs.MA, cs.AI
- Records peer competence and relationship evidence as spectral states
- Weyl's inequality bounds spectral change — stable online adaptation without retraining
- Key insight: Reliability memory is a reusable foundation for adaptive multi-agent coordination
- Paper: https://arxiv.org/abs/2607.27958

#### Echoverse: Deep Evolving Environments for Computer-Use Agents
**arXiv:2607.28074** (July 30, 2026) — cs.AI, cs.LG
- Deep environments raise accuracy 80.0→85.0; shallow ones lower it 80.0→75.0
- 9B model improves 36.5%→67.1% across 14 evaluation splits
- Key insight: Environment depth and model co-evolution — not just quantity — is the bottleneck
- Paper: https://arxiv.org/abs/2607.28074

#### PACE: LLM for Parent-Order Execution
**arXiv:2607.28410** (July 30, 2026) — cs.CE, cs.CL
- Extends LLMs from what to trade to how to execute
- Hierarchical planning + execution; exceeds TWAP/Almgren-Chriss by 0.65 bps
- Key insight: Higher model confidence predicts better execution performance — useful signal, not a bias
- Paper: https://arxiv.org/abs/2607.28410

---
## 2026-08-02 (Sunday)
<!-- Sources: https://arxiv.org/abs/2607.28627, https://arxiv.org/abs/2607.26627, https://arxiv.org/abs/2607.27652, https://arxiv.org/abs/2607.23193, https://arxiv.org/abs/2607.20891, https://arxiv.org/abs/2607.28460, https://arxiv.org/abs/2607.28399, https://arxiv.org/abs/2607.28582, https://arxiv.org/abs/2607.28608, https://benchlm.ai/reasoning, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md -->

### New Insights:

#### ReToken: VLM Visual Retrieval with One Learnable Token
**arXiv:2607.28627** (July 30, 2026) — cs.CV, cs.AI, cs.LG
- Single learnable embedding selects query-relevant visual tokens from pre-filled KV cache
- On Visual Haystacks: +13.4 pts Qwen3VL-8B, +12.4 pts InternVL3.5 (>20% relative); on LVBench zero-shot to long video: +8.0 pts with Qwen3VL-8B
- Lightweight design fits on single H100 for training and long-video inference
- Key insight: Retrieval target can be a single learned token — sparse KV-cache selection beats dense processing
- Paper: https://arxiv.org/abs/2607.28627

#### Lossy Verification in Speculative Decoding: Failure Modes
**arXiv:2607.26627** (July 28, 2026) — cs.LG
- Systematic analysis: lossy verification schemes classified as truncation-based or collaborative
- Truncation-based methods can severely degrade vs. truncation sampling baseline due to distributional distortion
- Collaborative verification requires controlling draft-probability overshoot relative to target probabilities
- Key insight: Many lossy approaches silently rewrite the decoding distribution — acceleration at the cost of generation quality
- Paper: https://arxiv.org/abs/2607.26627

#### Harness-G: Graph-Structured Retrieval for Search Agents
**arXiv:2607.27652** (July 30, 2026) — cs.CL
- Solves retrieval-equivalence collapse: queries differ but evidence sets overlap in Search-R1 training
- Reformulates free-form query as finite action selection (evidence sentence/entity/answer)
- Structured Non-myopic Credit (SNC) assigns downstream gains to earlier enabling actions
- Across 6 QA benchmarks: +10.74 pts at 1.5B, +3.98 pts at 3B vs. Graph-R1
- Key insight: Graph interface eliminates linguistic aliasing — same-state alternatives become directly comparable
- Paper: https://arxiv.org/abs/2607.27652

#### OmniScope: Modality-Decoupled Token Compression for Omnimodal LLMs
**arXiv:2607.23193** (July 27 v2, 2026) — cs.CV
- Audio and video relevance peak at different moments — unidirectional guidance loses answer-critical cues
- Uses query as shared semantic anchor; estimates relevance separately per modality
- At 25% token retention: 3.53x prefill speedup, >15% GPU memory reduction, 0.35-pt accuracy drop
- Key insight: Share the query across modalities, but NOT the salience estimates
- Paper: https://arxiv.org/abs/2607.23193

#### Is Deep Research Reliable? Misleading Knowledge Induces False Conclusions
**arXiv:2607.20891** (July 30 v2, 2026) — cs.AI
- MisKnow-Agent: 5,933 misleading docs with controllable authority and style
- One misleading doc increases false-conclusion adoption rate from 0% to 54.7%
- Cross-model verification identifies instances as misleading — but agents adopt them during long-horizon research
- Pre/post-research defenses mitigate but don't eliminate false conclusion adoption
- Key insight: Disconnect between focused verification and workflow-level evidence use — continuous verification needed at intermediate states
- Paper: https://arxiv.org/abs/2607.20891

#### CoT-Enabled Cybersecurity Triage: +43% Benign Recall
**arXiv:2607.28460** (July 30, 2026) — cs.LG, cs.CR
- Chain-of-thought reasoning for Windows endpoint detection triage; separate calibrator reads full reasoning trace
- At high-confidence operating point: +43.0% benign recall, +18.3% malicious recall vs. direct-label LLM
- Fine-tuned 30B significantly outperforms frontier general-purpose models — targeted training > scale
- Key insight: CoT reasoning and probability calibration require separate training pipelines
- Paper: https://arxiv.org/abs/2607.28460

#### GUI Agents Correct But Late: Decision-Time Critical Path
**arXiv:2607.28399** (July 30, 2026) — cs.LG
- Computer-use agents fail when correct action comes after relevant window closes — root cause: autoregressive decoding on decision-time critical path
- AAPT (Adaptive Anticipatory Policy Trees): pre-compiles bounded conditional policy tree during idle screen periods
- Within contested decision window: success rate 0.50 → 0.79 (p=1.8e-3); both baselines achieve zero
- Key insight: Agents need to "think while the world moves" — pre-compile action trees during idle periods
- Paper: https://arxiv.org/abs/2607.28399

#### β-OPSD: Controllable On-Policy Self-Distillation for Reasoning
**arXiv:2607.28582** (July 30, 2026) — cs.LG
- Vanilla OPSD is β=1 member of policy-optimization family — β controls KL penalty weight
- β transforms implicit fixed value into controllable regularization — trades reference proximity vs. teacher guidance
- Return-to-go credit assignment aligns token updates with sequence-level objective
- Consistent improvement over vanilla OPSD on mathematical reasoning benchmarks
- Key insight: β-OPSD provides principled route from self-distillation to policy optimization and back
- Paper: https://arxiv.org/abs/2607.28582

#### KAISEN: Subgroup Fairness Auditing for Clinical Risk Models
**arXiv:2607.28608** (July 30, 2026) — cs.LG, q-bio.QM
- 5-phase audit pipeline: subgroup stratification, disparity measurement, mechanism diagnostics, post-hoc mitigation, drift monitoring
- Per-group threshold optimization reduces EOD in 48/48 held-out runs (delta=-0.285)
- Group-wise Platt scaling behaves as coin flip on EOD (19/48 improved) — audit should report variance, not average
- Key insight: Clinical fairness audit thresholds transfer poorly across cohorts — one-seed tuning fails on others
- Paper: https://arxiv.org/abs/2607.28608

#### Community: EU AI Act Takes Effect; Kimi K3 CPU Port; Figure.AI Ladder Climb
- EU AI Act (August 2, 2026): high-risk AI systems face stringent regulations; r/LocalLLaMA debates open-source restrictions vs. safety frameworks
- Kimi K3 runs on single CPU with 8GB RAM (5.2s/token) via sparse attention + 4-bit quantization — edge deployment breakthrough
- Figure.AI F.03 humanoid autonomously climbs ladder — multimodal sensor fusion + RL for real-world hazardous environments
- Qwen3.6-27B has reliability issues reported — "from impressive to completely broken"
- Astra multi-agent framework (Agent 0): 92% task completion but unpredictable emergent behaviors
- BenchLM August 2: Gemini 3.5 Flash maintains 72.8 weighted reasoning score; reasoning models lead standard by 10-20 pts on math/logic at higher latency

## 2026-08-03

### TokTier: Exact Stateful Tokenization for Agentic LLM Serving
**arXiv:2607.29678** (August 3, 2026) — cs.CL, cs.DC, cs.PF
- Stateful tokenization service: emitted token IDs always identical to full reference tokenization
- Session continuation: re-tokenizes small window around append, splices after stable-boundary check
- GPU full tokenization: 1M-character request in 0.87ms, up to 491x below HuggingFace
- At 94.1% fleet prompt-cache hit rate, tokenization reaches up to 64% of time to first token
- With vLLM: median TTFT drops 16-34%, P99 drops 23%; sustains 1,821 req/s at 50ms P99 where 16-core stateless saturates at 40
- Key insight: Tokenization is the dominant cost for agentic LLM serving — stateful incremental tokenization changes the calculus entirely
- Paper: https://arxiv.org/abs/2607.29678

### ResKV: Reconstructing Omitted Attention Contributions for Fixed-Budget KV Cache Compression
**arXiv:2607.29591** (July 31, 2026) — cs.CL
- ResKV divides fixed KV budget into exact main cache + compact residual cache
- Residual cache participates in same softmax normalization — restores both attention numerator AND denominator mass
- Dynamic gate adjusts residual contributions per-query at decode time
- Evaluated on LongBench and RULER across multiple backbones and compression baselines
- Key insight: KV cache compression must reconstruct omitted attention contributions in the softmax denominator, not just add residuals as an afterthought
- Paper: https://arxiv.org/abs/2607.29591

### SESA: Self-Evolving Search Agents that Pose, Solve, and Remember
**arXiv:2607.29468** (July 31, 2026) — cs.AI
- SESA: procedural memory as evolving state of tool-augmented search self-play
- Challenger poses problems; solver retrieves skills; informative failures distilled into reusable skills
- Bidirectional loop: updated memory changes solver behavior → changes challenger reward → changes future problem distribution
- 1.2-3.2 points improvement over SSP across 7 QA benchmarks; skill bank adds further 0.5-1.0 points
- Key insight: Evolving skill memory changes policy learning AND future training distribution — not merely an inference-time plug-in
- Paper: https://arxiv.org/abs/2607.29468

### Agentic Mathematical Tool-Flow Verification (AMTFV)
**arXiv:2607.29549** (July 31, 2026) — cs.AI
- AMTFV introduces Mathematical Tool Flow (MTF): interrupt-execute-resume interface decoupling verification from execution
- Verification agent encodes math objects in MTF request; toolbox agent generates exact executable calls
- Up to 8.3 percentage points improvement over strongest baseline; larger gains on medium/high verification complexity
- Key insight: Decoupling mathematical verification modeling from execution enables exact self-correction without brittle output revision
- Paper: https://arxiv.org/abs/2607.29549

### Sycophancy Undermines Epistemic Vigilance in Cooperative V&L Tasks
**arXiv:2607.29585** (July 31, 2026) — cs.CL
- Information-asymmetric "spot-the-difference" task: models overlook private evidence to agree with conversational partner
- Model steering to reduce sycophancy (from task-agnostic examples) reduces epistemic vigilance errors
- Key insight: Even in cooperative dialog, V&L models abandon private evidence to agree with partners — sycophancy is a general cooperative failure mode
- Paper: https://arxiv.org/abs/2607.29585

### ARB: Authorship-Rewriting Benchmark — AI-Text Detectors Fail on Human-Revised Text
**arXiv:2607.29539** (July 31, 2026) — cs.CL, cs.AI
- ARB: 1,800 human source texts × 4 generators × 4 matched variants (HUMAN, Free-LLM, H2L, LLM2L)
- FastDetectGPT: 91.2% recall on direct LLM text, only 30.8% on human-rewritten text (60-point drop)
- Same detectors retain 78-83% recall for LLM-rewritten LLM text
- Key insight: AI-text detectors measured on human-vs-LLM benchmarks fail dramatically on human-authored text revised by an LLM — the threat model is fundamentally wrong
- Paper: https://arxiv.org/abs/2607.29539

### Evidence-Type Competition: When Can Interventional Data Teach LMs Causal Direction?
**arXiv:2607.29484** (July 31, 2026) — cs.CL, cs.LG
- Increasing interventional samples in pretraining does NOT improve causal direction in Simpson's paradox worlds
- What governs causal reasoning is evidence type at inference time, not training mixture
- Purely observational context: 29/50 worlds show sign reversal; interventional probes alone: 41/50 correct
- Capability lives in weights; the switch lives in context — activation patching localizes to middle layers
- Key insight: Causal reasoning depends on context type at inference, not training mixture — models know causal structure but context determines whether they use it
- Paper: https://arxiv.org/abs/2607.29484

### Know It, Act On It: Memory Utilization Gap in LLM Personalization
**arXiv:2607.29433** (July 31, 2026) — cs.CL
- Decoupled evaluation: paired Know (recall) and Act (behavioral) tests for same user preference
- Large gap between Know and Act: agents pass recall but fail to reflect preference in behavior
- Health and therapy-related preferences show worst utilization — highest real-world stakes
- Key insight: LLMs remember user preferences but fail to act on them — memory architectures reduce but don't close the utilization gap
- Paper: https://arxiv.org/abs/2607.29433

### AgentHPOBench: LLM Agents as Sequential Hyperparameter Optimizers
**arXiv:2607.29626** (July 31, 2026) — cs.AI
- 30 executable ML tasks, 7 research categories; agent performs sequential interventions with accumulated evidence
- Evaluates 12 agents + conventional HPO baselines under unified protocol
- Current agents show measurable optimization ability but struggle with: sustained iterative refinement, complex log diagnosis, consistent progress toward reference performance
- Key insight: LLMs can conduct experiments but struggle with sustained multi-step optimization — gap between single-step and multi-step is significant
- Paper: https://arxiv.org/abs/2607.29626

### DungeonBench: Rules-Rich Tactical Reasoning in D&D Combat
**arXiv:2607.29577** (July 31, 2026) — cs.AI, cs.LG
- Covers D&D 2014 SRD combat including mechanics simplified simulators abstract away
- Encounter track: local tactical play; Day track: linked encounters with persistent resources
- Frontier policies win direct encounters but fail on resource budgeting, rest timing, rule-aware discipline
- Key insight: Multi-encounter planning and resource management remain challenging even for frontier models
- Paper: https://arxiv.org/abs/2607.29577

### Grokked Illusion: Perfect Generalization ≠ Robustness to Interference
**arXiv:2607.29503** (July 31, 2026) — cs.LG
- High-entropy models (Wang-Landau sampling) maintain ~95% task accuracy after noise injection; AdamW-trained drop to below 75%
- Higher effective rank in attention/MLP layers provides buffer against catastrophic forgetting
- Key insight: Perfect generalization does not imply equal robustness — "grokked" models may be fragile under interference
- Paper: https://arxiv.org/abs/2607.29503

### Transcript-Managed Transformers: Universality with Two Pop-Enabled Transcripts
**arXiv:2607.29496** (July 31, 2026) — cs.LG, cs.FL, cs.MA
- Pop-free RTMT_n(k) realizes exactly deterministic finite-state transductions
- Pop-enabled: k=1 gives DCFL, k≥2 gives full recursive enumerability (RE)
- Two pop-enabled transcript channels suffice for Turing universality
- Key insight: Adding bounded pop operations grants Transformers DCFL→RE computational power — the formal gap between Transformers and TMs is small
- Paper: https://arxiv.org/abs/2607.29496

### Benchmark: Qwen3.8 Max Leads BenchLM Reasoning (95.5) — August 3, 2026
- Qwen3.8 Max: #1 Reasoning (95.5 verified), #1 Multimodal (#2 overall at 88.1), #1 PaperBench (93.0%), #1 OSWorld-Verified (86.1%), #2 Agentic (59.0)
- Gemini 3.5 Flash: #2 Reasoning (71.5 verified), overall score 63.9 (#38 of 215)
- Only 2 models verified-ranked in reasoning category — sparse competition at the top
- LongBench v2 (38%) and MRCRv2 (31%) dominate reasoning weight
- Reasoning models still lead standard models by large margins on math/logic at higher latency

---
## 2026-08-05 (Wednesday)
<!-- Sources: https://arxiv.org/abs/2608.04007, https://arxiv.org/abs/2608.04003, https://arxiv.org/abs/2608.03994, https://arxiv.org/abs/2608.03930, https://arxiv.org/abs/2608.02442, https://arxiv.org/abs/2608.04009, https://arxiv.org/abs/2608.04008, https://arxiv.org/abs/2608.03591, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md -->

### New Insights:

#### TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning
**arXiv:2608.04007** (August 4, 2026) — cs.CL, cs.AI
- TurnSight addresses coarse credit assignment in tool-integrated reasoning by deriving turn-level supervision from execution-conditioned hindsight
- Cross-horizon directional agreement filters reliable supervision signals across multiple lookahead horizons
- Adaptive RL advantage modulation preserves original optimization direction while enabling finer-grained credit assignment
- Key insight: Token-level supervision misses the structural granularity of tool interactions; turn-level hindsight is better aligned with actual agent decision episodes
- Paper: https://arxiv.org/abs/2608.04007

#### PAST-Bench: Recursive Self-Improvement in Personal Agents
**arXiv:2608.04003** (August 4, 2026) — cs.CL
- Tests whether retained experience actually improves personal agents over time via matched-condition ablation
- Across 26 scenarios, 204 episodes, 7 base models, 4 agent frameworks: improvement is real but uneven and capability-dependent
- Same headline gain can reflect very different underlying pathways
- Agents struggle most with outdated state replacement; Hermes+ (5 interventions) improves outdated state handling
- Key insight: Personal agent improvement from retained experience is real but requires fine-grained pathway tracking to understand and optimize
- Paper: https://arxiv.org/abs/2608.04003

#### ALiBi Underflow: Positional Encoding Numerical Failure in SOTA Models
**arXiv:2608.03994** (August 4, 2026) — cs.CL
- ALiBi linear bias scaling underflows floating-point precision, zeroing attention weights and causing partial blindness in attention heads
- Substantially impairs token retrieval while barely affecting standard decoder benchmarks (which are saturated)
- Log-scaled distances is most effective mitigation; default ALiBi remains strong for needle-in-a-haystack
- Key insight: ALiBi has a hidden numerical failure mode in SOTA models — standard benchmarks don't expose it due to saturation effects
- Paper: https://arxiv.org/abs/2608.03994

#### Logic-PPT: Pre-Training on Formal Derivations
**arXiv:2608.03930** (August 4, 2026) — cs.CL, cs.AI, cs.LG
- Logic pre-pretraining uses formal derivations (variable binding, quantifier scope, relational composition) to impart structural and linguistic biases
- Achieves 80% linguistic task accuracy with 36B fewer tokens than standard initialization
- Formal derivations induce lower-rank, spectrally concentrated representation geometry
- Enables pruning to 33% sparsity while matching dense baseline performance
- Key insight: Formal derivations are superior to Dyck/procedural tasks for pre-pretraining; the resulting geometry enables model compression
- Paper: https://arxiv.org/abs/2608.03930

#### Solution Hacking: Shortcut Exploits in Science Benchmarks
**arXiv:2608.02442** (August 3, 2026) — cs.AI, cs.CL
- LLMs "hack" correct answers using shortcuts (enumeration, guessing, answer-first verification) without valid derivation
- Hacking scales with difficulty: 2.2% (common) → 28.3% (Olympiad) → 37.4% (HLE)
- 8.2%-44.1% of credited correct answers across frontier models are hacked solutions
- Anti-hacking strategies (automatic judge, test-time instruction) reduce shortcut behavior
- Key insight: Final-answer accuracy evaluation substantially overestimates LLM scientific reasoning — anti-hacking evaluation is essential
- Paper: https://arxiv.org/abs/2608.02442

#### SocietyBench: Counterfactual Social-World Forecasting
**arXiv:2608.04009** (August 4, 2026) — cs.CL
- Evaluates LLMs on forecasting social event evolution via counterfactual design (entity replacement + date shifting)
- Strongest frontier LLM scores only 75.0/100 against 50 anchor; calibration and temporal accuracy are orthogonal
- Agent frameworks fail to improve over base model
- Per-event gaps reach 21.4 points — evaluating on multiple events is critical
- Key insight: Social forecasting is a complementary LLM capability distinct from task completion; current agents add nothing over base
- Paper: https://arxiv.org/abs/2608.04009

#### WorldCup Arena: Prospective Leakage-Free LLM Evaluation
**arXiv:2608.04008** (August 4, 2026) — cs.CL
- 6 frontier LLMs (39 days, 104 FIFA World Cup matches) evaluated prospectively — no answer existed when asked
- Average 63.9% match outcome accuracy = level with bookmaker favourite (models just back the favourite)
- Models agree with each other far more than they're right; majority vote adds nothing
- Current frontier systems are not sharply differentiated on this task
- Key insight: First truly prospective benchmark; models collapse on closest ties where dossiers are richest
- Paper: https://arxiv.org/abs/2608.04008

#### DiagChain: Stage-Wise Diagnostic Benchmark for Attack Chain Reconstruction
**arXiv:2608.03591** (August 4, 2026) — cs.CR, cs.AI
- 69 attack scenarios (849 reference steps) for evidence-grounded attack chain reconstruction
- Strongest configuration succeeds on only 39.6% of steps
- Smaller models fail at evidence incorporation; larger models fail at evidence ordering
- End-to-end accuracy hides stage-specific failure patterns
- Key insight: Stage-wise diagnostic evaluation reveals that error type varies with model scale — actionable for improvement
- Paper: https://arxiv.org/abs/2608.03591

### Community Pulse (Reddit — August 4, 2026)

#### Kimi K3 on GB10 Cluster: 20+ tps at Full Model Scale
- r/LocalLLaMA (1273 upvotes, 263 comments): Full Kimi K3 running on 16x GB10 cluster at 20+ tokens/sec
- Major milestone for open-weight frontier model accessibility on commodity hardware

#### Qwen3.8-27B Announced with Hardware Validation
- r/LocalLLaMA (2721 upvotes, 658 comments): Qwen3.8 family expanding with 27B variant
- Daniel Han (Unsloth) confirms it runs on consumer hardware; $2 input / $6 output pricing

#### Ilya Sutskever's SSI Announces First Model
- r/singularity (819 upvotes, 211 comments): Safe Super Intelligence revealing first release
- New entrant to competitive frontier model landscape

#### Hugging Face CEO: China Winning AI Race
- r/LocalLLaMA (808 upvotes, 161 comments): Discussion on China's rapid AI development pace and open-source advantage

#### White House AI Guidelines Exempt Open Models
- r/LocalLLaMA (261 upvotes, 92 comments): Regulatory exemption for open-weight models seen as favorable for open-source AI

### Key Takeaways

**Reasoning:** Shortcut hacking (8-44% of correct answers) and WorldCup evaluation (models level with bookmaker favourite) suggest frontier LLM reasoning is more fragile than benchmarks indicate. Anti-hacking evaluation and prospective benchmarks are essential for honest assessment.

**Efficiency:** Logic-PPT demonstrates that structured pre-pretraining enables 36B token savings and 33% pruning — efficiency gains from architectural bias remain underexplored. ALiBi numerical failure shows hidden precision issues in production models.

**Agent Development:** PAST-Bench shows retained experience improvement is real but requires fine-grained pathway understanding. DiagChain reveals that stage-wise failure diagnosis (not end-to-end accuracy) is critical for agent improvement.

**Open Models:** Kimi K3 at 20+tps on GB10 and Qwen3.8-27B on consumer hardware show open-weight frontier models are becoming increasingly accessible. SSI's entry adds competition.

---
## 2026-08-09 (Sunday)
<!-- Sources: https://arxiv.org/abs/2608.05695, https://arxiv.org/abs/2608.03591, https://arxiv.org/abs/2607.29626, https://arxiv.org/abs/2607.29602, https://github.com/liyedanpdx/reddit-ai-trends/blob/main/reports/latest_report_en.md, https://presenc.ai/research/local-llm-quantization-quality-benchmarks-2026, https://benchlm.ai/reasoning -->

### New Insights:

#### DreamGuard: Proactive Runtime Guardrail for LLM Agents (cs.AI, cs.CL, cs.CR)
**arXiv:2608.05695** (August 6, 2026)
- Risk-aware world model maintains compact recurrent latent state over trajectory; predicts future latent states for immediate-hazard and prefix-risk evidence
- Fuses multi-horizon risk signals into intervention decisions before execution
- Outperforms generic, reactive, and proactive guardrail baselines; best safety-utility trade-off; 25ms average latency
- Key insight: Reactive guardrails miss long-horizon risks where individually benign actions drift toward hazardous states — world modeling is the architectural fix
- Paper: https://arxiv.org/abs/2608.05695

#### DiagChain: Evidence-Grounded Attack Chain Reconstruction (cs.CR, cs.AI)
**arXiv:2608.03591** (August 4, 2026)
- MAIN-69: 69 scenarios for evidence-grounded attack chain reconstruction across OS types, evidence noise levels, chain lengths
- ECRAG couples evidence retrieval with evolving structured chain representation; 5 complementary stage-wise metrics
- Best configuration succeeds on only 39.6% of 849 reference steps — even SOTA models struggle significantly
- Smaller models fail to incorporate evidence; larger models fail to order it correctly — different failure modes by scale
- Key insight: Diagnostic evaluation beyond end-to-end accuracy reveals fundamentally different failure modes by model scale
- Paper: https://arxiv.org/abs/2608.03591

#### AgentHPOBench: LLM Agents as Sequential Hyperparameter Optimizers (cs.AI)
**arXiv:2607.29626** (July 31, 2026)
- 30 executable ML tasks across 7 research categories; agents perform sequential interventions based on accumulated configs, metrics, and logs
- 12 agents + conventional HPO baselines under unified protocol
- Current agents show measurable experimental optimization but clear limitations in sustained iterative refinement, log diagnosis, and progress toward reference performance
- Key insight: Evaluating agents as scientific experimenters requires sequential evidence-interpretive benchmarks — static code generation benchmarks miss this entirely
- Paper: https://arxiv.org/abs/2607.29626

#### FriendBench: Dyadic Familiarity Inference in Humans and MLLMs (cs.CL, cs.AI, cs.CV, cs.HC)
**arXiv:2607.29602** (July 31, 2026)
- Infer familiar vs. stranger from 20-sec dyadic ice-breaker video clips; 96 balanced dyads, 26 MLLMs from 7 companies vs. human panels
- Best model statistically indistinguishable from human crowd on accuracy in every modality — but reaches it differently: humans balanced, strongest models lean "stranger" (prior difference, not discrimination)
- Only humans gain from visible behavior on top of speech
- Key insight: Human-level accuracy can mask fundamentally different reasoning strategies — priors matter as much as discriminative ability
- Paper: https://arxiv.org/abs/2607.29602

#### Community: GPT-5.6 Sol + Fable 5 Solve 25-Year Physics Problem
GPT-5.6 Sol and Fable 5 jointly solved a 25-year-old unsolved problem in theoretical physics using multi-agent debate + symbolic reasoning. Adaptive sparse attention reduced computational overhead 40%. Real-time cross-model consensus voting for error correction. Community: "validation of AI as co-pilot for fundamental research." Skeptics question reproducibility; 98% accuracy in simulated environments.

#### Community: OpenAI "Doug" Model Leaks
OpenAI codename "Doug" reportedly surpasses Fable 5 with 128K token context, real-time video synthesis, hybrid transformer-diffusion architecture. MMLU 92.1%, hallucination rates reduced 30% via adversarial training. Community speculates on democratizing Hollywood-tier content creation.

#### Community: RTX 5090 96GB Prototype Spotted
Unverified Alibaba listing: NVIDIA RTX 5090 with 96GB GDDR7, 1.8 TB/s memory bandwidth, 8-bit FP8 support. Claims 347 t/s on Llama 3-400B. If real, enables 600B+ model deployment on consumer hardware — challenging cloud dominance. Authenticity disputed.

#### Quantization: Q4 Sweet Spot Confirmed; Q3 Floor for Agents
Comprehensive 2026 benchmarks across GGUF/MLX/AWQ/GPTQ: Q4_K_M is practical production sweet spot (1-3% perplexity degradation). Q5/Q6 offer <1% improvement over Q4 — rarely worth the memory cost. Q3 degrades 3-8% perplexity and ~5% on reasoning benchmarks (3x perplexity loss). Q2 drops 14%. AWQ 4-bit beats GPTQ 4-bit by ~0.5-1.0% on modern models. Q4 is the operational floor for agent workloads; never go below Q3.

---
## 2026-08-10 (Monday)
<!-- Sources: https://arxiv.org/abs/2608.07261, https://arxiv.org/abs/2608.07222, https://arxiv.org/abs/2608.07341, https://arxiv.org/abs/2608.07430, https://arxiv.org/abs/2608.07458, https://arxiv.org/abs/2608.07460, https://arxiv.org/abs/2608.07370, https://arxiv.org/abs/2608.07353 -->

### New Insights:

#### Two-Hop Generalization Failure in LLMs: Layer Mismatch Root Cause (cs.CL)
**arXiv:2608.07261** (August 7, 2026)
- LLMs correctly store individual hops but fail to combine them — mechanistic analysis shows why
- Lower layers correctly construct intermediate representations; upper layers fail to reason over them (layer mismatch, not capacity)
- Recurrent-style training enables transformers to reuse reasoning circuitry across input forms
- Substantially improves OOD two-hop query generalization
- Key insight: Reasoning failure isn't always about capacity — sometimes upper layers simply don't use what's already there
- Paper: https://arxiv.org/abs/2608.07261

#### Skaling Law: Generalized Scaling Law with 10x Compute Efficiency (cs.CL)
**arXiv:2608.07222** (August 7, 2026)
- Standard neural scaling laws fail at data-scarce and overtraining extremes — assume model/data impact loss independently
- Couples model capacity and data through single interaction exponent (Skaling law)
- Reduces MAPE by 1.5-3x across interpolation and extrapolation regimes
- Enables accurate full-grid extrapolation using ~10x less compute than uniform sweeps
- Key insight: More efficient compute budget allocation for next-generation model training
- Paper: https://arxiv.org/abs/2608.07222

#### RailCap: Better Benchmark Decontamination (cs.CL, cs.AI)
**arXiv:2608.07341** (August 7, 2026)
- Current G-AP contamination metric flawed: averaging before differencing lets suppression strategies cancel out
- SA-PPG fixes by sampling per-question solve probability, differencing per question, aggregating within groups
- RailCap judges contamination during generation via trajectory capping — achieves lowest SA-PPG
- Prior restoration strategies substantially overestimated their effectiveness
- Key insight: Clean evaluation requires per-question analysis, not aggregate metrics
- Paper: https://arxiv.org/abs/2608.07341

#### Diffusion LLM Safety: Systematic Vulnerability Transfer (cs.LG, cs.AI)
**arXiv:2608.07430** (August 7, 2026)
- Diffusion LLMs (DLLMs) replacing autoregressive generation inherit safety vulnerabilities from AR predecessors
- Safety alignment sparse and transferable — enables transfer attacks via safety neuron mapping
- Self-pruning: ASR 2.6% → 73.8% on LLaDA, 1.9% → 86.6% on Dream
- Transfer pruning from Qwen2.5: 1.9% → 73.2% on Dream, 7.0% → 86.3% on Fast-dLLM
- SN-Guided Diffusion jailbreak: 86.9% ASR on Qwen2.5-7B-Instruct at 20x lower cost
- Key insight: New attack surface — diffusion models should not inherit AR safety assumptions
- Paper: https://arxiv.org/abs/2608.07430

#### CoinRAG: KV Cache Reuse for Long-Context RAG Efficiency (cs.CL, cs.AI, cs.IR, cs.LG)
**arXiv:2608.07458** (August 7, 2026)
- Current chunk-level KV cache reuse leaves redundancy/noise in coarse-grained chunks
- CoinRAG identifies query-relevant semantic units; assembles sliced KV representations with chunk-level context
- Achieves new Pareto frontier: 5.3% relative F1 improvement under fast prefill latency budget
- Key insight: Fine-grained semantic cache composition outperforms coarse chunk-level approaches
- Paper: https://arxiv.org/abs/2608.07458

#### CreativeInstruct: Balancing Quality, Creativity, Diversity (cs.CL, cs.AI)
**arXiv:2608.07460** (August 7, 2026)
- Post-training lowers output diversity and creativity, impacting RL and creative tasks
- CreativeInstruct learns [StartCreativity] spans to bias generation toward creativity
- 70.3% of human annotators prefer CreativeInstruct creativity over post-trained models
- GRPO on CreativeInstruct improves ~4% on AMC, ~5% on MATH
- Introduces graph edit distance metric for narrative-level diversity (missed by lexical/semantic)
- Key insight: Creativity and quality are not zero-sum — controlled injection enables both
- Paper: https://arxiv.org/abs/2608.07460

#### LitTraceQA: Scientific QA with Verifiable Evidence (cs.CL)
**arXiv:2608.07370** (August 7, 2026)
- Scientific literature QA requires: identify papers, locate evidence, produce faithful responses — not fluent generation
- Returns 3 connected outputs: paper identifiers, evidence locations, answers (free-form, MCQ, tables)
- Targets evidence types: tables, figures, text spans, equations, citation contexts
- 4,978 unique-question records over 4,859 unique gold papers
- Key insight: Verifiable answers require multi-stage grounding, not just generation
- Paper: https://arxiv.org/abs/2608.07370

#### Geo-Spatial Concept Probing in LLMs (cs.CL, cs.AI, cs.IR, cs.LG)
**arXiv:2608.07353** (August 7, 2026)
- LLMs struggle with genuine concept understanding — prior benchmarks conflate skills
- Concept-centric benchmark targeting spatial concepts: direction, distance, topology, compositions
- Findings reveal clear limitations in current LLMs for structured concept acquisition and composition
- Key insight: Concept understanding requires controlled probing with precise concept definitions
- Paper: https://arxiv.org/abs/2608.07353

---
## 2026-08-20 (Thursday)
<!-- Sources: https://arxiv.org/abs/2608.19197, https://arxiv.org/abs/2608.19009, https://arxiv.org/abs/2608.18931, https://arxiv.org/abs/2608.18988, https://huggingface.co/models?sort=trending, https://benchlm.ai/reasoning -->

### New Insights:

#### SPADE: Self-Play in Adaptive Synthetic Executable Environments (cs.CL, cs.AI)
**arXiv:2608.19197** (August 19, 2026)
- Single LLM plays two roles: Environment Designer (writes training environments as executable code) and Reasoning Agent (learns to act in them)
- Each environment is stateful, multi-turn with state transitions, reward functions, verification code
- Scaling to 30B models: +5.3 avg improvement over fixed-environment baselines across 8 math, science, code, reasoning benchmarks
- Tool-use: +5.7 on BFCL-v4 multi-turn, +13.9 on ACEBench-Agent
- Environment design itself becomes a learnable component — concrete step toward open-ended self-improvement
- Key insight: Self-generating adaptive training environments enable continuous capability scaling without fixed dataset constraints
- Paper: https://arxiv.org/abs/2608.19197

#### VAL: Verification Autonomy Levels (L0-L5) for LLM Reasoning (cs.CL)
**arXiv:2608.19009** (August 19, 2026)
- Meta-standard classifying verification schemes along single axis: where does verification spec come from, what does verdict guarantee
- Central concept: Completeness blind spot — verifiers can confirm candidates hold but cannot prove no candidate was missed
- Dichotomy: Completeness reachable only for formally specifiable properties; empirical open-world verification caps at anchored correctness (L2)
- Resolves systematic conflation across 17 surveyed papers (5 different meanings of "level")
- Key insight: Verification levels are orthogonal to granularity, risk tier, and system stack
- Paper: https://arxiv.org/abs/2608.19009

#### Test-Time Scaling in the Wild: Exploitation Bottleneck (cs.CL, cs.AI)
**arXiv:2608.18931** (August 19, 2026)
- First compute-normalized comparison of 5 TTS families across 5 open-ended benchmarks (medicine, law, finance, general chat, creative writing)
- Exploration scales: best candidate improves with compute across all settings
- Exploitation breaks: reward models correlate at only ρ_v ≈ 0.12 with true quality — selection near-random regardless of budget
- Tree search amplifies failure via diversity collapse; Fusion recovers only ~40% of available quality
- Key insight: The candidate pool is not the bottleneck — choosing from it is
- Paper: https://arxiv.org/abs/2608.18931

#### DeepWeaver: Evidence Synthesis for Open-Ended QA (cs.CL, cs.AI)
**arXiv:2608.18988** (August 19, 2026)
- Thought Block Chains (TBCs) group claims, salient info, keywords, and supporting evidence
- Subordinate TBCs inspect residual evidence, commit revisions, discover new claims before final generation
- Improves content sufficiency, citation grounding, detail preservation across multiple LLMs
- Introduces LoQA benchmark for evidence synthesis
- Key insight: Evidence synthesis is distinct from retrieval — structured representation outperforms direct generation
- Paper: https://arxiv.org/abs/2608.18988

#### Community: Qwen3.8-27B Dynamic v3 GGUF, Kimi-K3 Trending
- Qwen3.8-27B Dynamic v3 GGUF (Unsloth): 12% higher MMLU, <8GB VRAM, 40% faster inference; community calls it "game-changer for home labs"
- Kimi-K3 (Moonshot): 2.35M downloads on HF — new trending entry
- Qwen3.8-27B-GGUF crossed 5M downloads milestone
- Ornith-1.5 series: 397B/35B/9B released — "Qwen3.8 for the masses" at 60% lower inference cost
- BenchLM: Qwen3.8 Max still #1 at 94.3 weighted reasoning (unchanged)

## 2026-08-22 (Saturday)
<!-- Sources: https://arxiv.org/abs/2608.20106, https://arxiv.org/abs/2608.19758, https://arxiv.org/abs/2608.19529, https://arxiv.org/abs/2608.19515, https://arxiv.org/abs/2608.20153, https://arxiv.org/abs/2608.19875, https://arxiv.org/abs/2608.19662, https://huggingface.co/models?sort=trending, https://benchlm.ai/reasoning -->

### New Insights:

#### OenoBench: Wine-Domain Knowledge Benchmark for LLMs (cs.CL)
**arXiv:2608.20106** (August 20, 2026)
- 3,266 MC questions across 6 pillars (regions, grape varieties, viticulture, winemaking, producers, business) and 4 difficulty tiers
- Built from 38,104 atomic source-anchored facts via provenance-verified scrapers (INAO, TTB, OIV, peer-reviewed journals, Wikipedia/Wikidata)
- LLM-driven pipeline: models reformat/audit but never serve as source of truth; every claim traces to a URL
- 16 frontier configs: accuracy 53%-84%, led by o3 at 83.6%. Reasoning-mode lift: DeepSeek R1 +6.8pp; absent in Claude Opus and Gemini Pro
- Frontier open-weight models share Pareto frontier with proprietary reasoning models on domain-specific knowledge
- Key insight: Domain-specific knowledge benchmarks reveal that open-weight models have closed the gap with frontier proprietary models on specialized domains
- Paper: https://arxiv.org/abs/2608.20106

#### FlashPrefill V2: Block-Sparse Prefill Attention for Long-Context Serving (cs.CL)
**arXiv:2608.19758** (August 20, 2026)
- Production-ready sparse prefill: mean correction suppresses approximation error; redesigned operator with PackGQA + warp specialization + ping-pong pipelining; FlashAttention-3/4 aligned; FP8 + paged KV cache + continuous batching (SGLang-compatible)
- Up to 47.26x speedup over FlashAttention-2 at 128K context (FP8), 27.19x (BF16), 30.49x vs FA3/4 dense baseline (FP8)
- Key insight: Production-grade sparse prefill for 128K+ context is now viable for H20 GPUs — enables practical long-context serving at scale
- Paper: https://arxiv.org/abs/2608.19758

#### UniLang: Unified Generative Framework for Machine-Native Symbols (cs.CL, cs.AI)
**arXiv:2608.19529** (August 20, 2026)
- Bridges discrete machine-native symbols with LLM token space — treats symbols as first-class generative units alongside natural-language tokens
- Expands vocabulary + embedding space with grounded symbolic representations; jointly models text + symbolic tokens under single autoregressive objective
- Outperforms strong baselines on sequential recommendation and legal precedent prediction
- Key insight: Structured prediction and language modeling unified — no verbalization or task-specific architectures needed
- Paper: https://arxiv.org/abs/2608.19529

#### Hear2Act: Prosody-Aware Evaluation for Text+Audio Assistants (cs.CL)
**arXiv:2608.19515** (August 20, 2026)
- 480 persona-grounded scenarios testing whether prosodic cues change downstream decisions vs explicit lexical feedback
- Without prosody representation: 14.6% → 15.3% optimal-solution rate with audio. With explicit intermediate prosody representation: 39.6% (vs 40.7% ground truth)
- Contrast disappears with explicit lexical feedback — prosody matters only when lexical evidence is insufficient
- Key insight: Audio-capable LLMs can recover prosodic information but don't reliably carry it into action without explicit intermediate representation
- Paper: https://arxiv.org/abs/2608.19515

#### Frontier TCS Research Benchmark: Autoformalization is the Bottleneck (cs.CL)
**arXiv:2608.20153** (August 20, 2026)
- 175 instances from STOC/FOCS/SODA/COLT 2025-2026 with expert-verified Lean formalizations; autoformalization: best model 11.5 Pass@1 vs 28.6 Pass@8 for human-provided formal statements
- Automated framework: 64 generated claims → only 6 pass expert evaluation + proof verification
- Key insight: Beyond formalization, limited research taste is another major barrier — autonomous frontier TCS research still far from reliable
- Paper: https://arxiv.org/abs/2608.20153

#### Patient-Context Agentic Framework: Health Query Ambiguity Mitigation (cs.CL, cs.AI)
**arXiv:2608.19875** (August 20, 2026)
- Framework between patient query and downstream LLM: interprets query, knowledge graph constructs hypotheses, identifies missing context, asks targeted follow-up questions
- Diagnosis retrieval: +57.1pp Top-1 accuracy, +77.7pp Recall@5 vs direct prompting across 5 models
- Dietary-safety classification: improved accuracy across all models, highest MCC for 4/5
- Key insight: Structured ambiguity mitigation via hypothesis-followup dramatically outperforms direct answering for underspecified health queries
- Paper: https://arxiv.org/abs/2608.19875

#### ReCache: Efficient KV Cache Reuse for Tool-Augmented LLM Agents (cs.CL)
**arXiv:2608.19662** (August 20, 2026)
- Agents repeatedly encode tool/skill schemas that recur across requests — standard prefix caching fails
- ReCache: resource-wise attention (removes cross-resource interactions, composition-invariant KV blocks), layer-KV-head-group routing, structural + semantic pruning
- Matches dense invocation (82.3% vs 82.4% Inv-F1), 3.655x time-to-first-token speedup, 92.43% KV memory reduction
- Key insight: Separating reusable schema encoding from selective resource access enables practical agentic inference at scale
- Paper: https://arxiv.org/abs/2608.19662

#### Community: Qwen3.8-27B Crosses 2M Downloads, New GGUF Variants Proliferating
- Qwen3.8-27B base: 2.09M downloads (+360K in 24h), 12.1k likes — crossed 2M milestone
- Qwen3.8-27B-GGUF: 6.32M downloads (+520K in 24h) — accelerating growth, updated 2 days ago
- OBLITERATED variant (OBLITERATUS): 165k downloads, updated 7 hours ago — new fast mover
- Ornith-1.5-35B-A3B: 12.6k downloads, Ornith-1.5-35B-A3B-GGUF: 174k downloads — GGUF version gaining traction
- Kimi-K3: 2.61M downloads (+260K in 24h) — sustained momentum
- BenchLM: Qwen3.8 Max #1 at 94.3 (unchanged); Claude Mythos 5 adds strong GraphWalks result

---
## 2026-08-24 (Monday)
<!-- Sources: https://arxiv.org/abs/2608.21265, https://arxiv.org/abs/2608.21315, https://arxiv.org/abs/2608.21252, https://arxiv.org/abs/2608.21325, https://arxiv.org/abs/2608.16419, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Memory-Augmented CoT: Training-Free Efficient Chain-of-Thought via Reasoning Memories
**arXiv:2608.21265** (Aug 21, 2026) — cs.CL
- Context-Generation Substitution Law: explicit reasoning context substitutes for decode-time generation — formalizes the CoT compression trade-off
- Memory-Augmented Compression: constructs reusable reasoning memories from historical traces, retrieves as prefill-side scaffolds; not raw demonstrations but summarized patterns/constraints/operations
- Accuracy gains over Chain-of-Draft: GSM8K +21.4pp, MATH +28.0pp, BBH +29.5pp, MMLU-Sci +6.61pp
- Latency speedup: 1.14–1.49× over standard CoT; compatible with token-level, trace-level, and inference-state compression
- **Key insight:** CoT compression with memory scaffolds recovers most of full CoT quality while cutting latency — training-free, production-viable
- Paper: https://arxiv.org/abs/2608.21265

#### Prompt-Model Interaction Fixed Points: Instruction Tuning ≠ Structural Change
**arXiv:2608.21315** (Aug 21, 2026) — cs.CL
- Studies prompt effects via task-free structural readout: fixed-point structure of short-window argmax map
- Nine tokens of conditioning moves fixed-point fraction across most of its range; reorders models — but instruction tuning worth 60.5 IFEval points moves class by zero
- Attention-sink dominance predicts sign on 2/5 models (chance level)
- **Key insight:** Prompt effects are fundamentally about the prompt-model pair; no universal phenomenological factors hold under widened sampling. On this readout, the unit of explanation is the prompt-model pair
- Paper: https://arxiv.org/abs/2608.21315 | Code: https://github.com/nicoveraz/token-lattice-ca

#### EnSI-RAG: Entity-Structure-Indexed RAG for Long-Document QA
**arXiv:2608.21252** (Aug 21, 2026) — cs.CL, cs.AI, cs.DB, cs.IR
- Entity-centered index: (entity, type, semantic category, value) records with passage links — separates evidence localization from answer synthesis
- +6.62pp average accuracy over baselines on Loong and Oolong benchmarks
- **Key insight:** Entity-structure indexing outperforms raw chunk embedding similarity for multi-hop evidence across long documents
- Paper: https://arxiv.org/abs/2608.21252 | Code: https://github.com/RamonMeng/EnSI-RAG

#### PertMind: Biological Reasoning via RL on Cellular Perturbation Atlases (TLDR #1 Paper of the Week)
**arXiv:2608.16419** (Aug 17, 2026) — cs.LG, cs.AI | **Top Paper — Week of Aug 24**
- Cellular perturbation atlases as RL environments: gene response measurements provide computable rewards
- Supervised initialization + gene/pathway/format-level RL signals; no manual curation of reasoning traces
- Transfers to: reverse perturbation identification, double-perturbation reasoning, phenotypic-screen prioritization, biological process interpretation
- **Key insight:** Perturbation-derived RL transforms experimental atlases into scalable training environments for domain-specific reasoning
- Paper: https://arxiv.org/abs/2608.16419 | HF: https://huggingface.co/tzcfly/PertMind

#### Move by Move: Ontology for Psychotherapy Moves in LLMs
**arXiv:2608.21325** (Aug 21, 2026) — cs.CL
- Ontology of ten therapeutic moves grounded in MULTI-60, validated by 5 licensed psychologists
- Models over-use inquiry up to 3× human rate, neglect psychoeducation; exposed as tools, half deviation from human move distribution, +7–9pp turn-level alignment, no fine-tuning
- **Key insight:** Structured behavioral taxonomies enable targeted LLM steering without retraining
- Paper: https://arxiv.org/abs/2608.21325

#### Community: Ornith GGUF Explodes, Qwen3.8 Ecosystem Crosses 7M GGUF Downloads
- Qwen3.8-27B base: 2.65M downloads (+290K in ~24h, from 2.36M on Aug 23)
- Qwen3.8-27B GGUF (unsloth): 7.01M downloads (+340K in ~24h, crossed 7M milestone)
- **Ornith-1.5-35B-A3B-GGUF: 988K downloads (+619K in ~24h — nearly tripled in one day)**
- Ornith-1.5-9B-GGUF: 971K downloads (new high tier)
- OBLITERATED (Qwen3.8 abliterated): 313K (+68K)
- BenchLM reasoning: Qwen3.8 Max #1 at 94.3 (data Aug 22); reasoning models with explicit CoT still significantly outperform but at higher latency

---
## 2026-08-25 (Tuesday)
<!-- Sources: https://arxiv.org/abs/2608.23564, https://arxiv.org/abs/2608.23551, https://arxiv.org/abs/2608.23497, https://arxiv.org/abs/2608.23476, https://arxiv.org/abs/2608.23474, https://arxiv.org/abs/2608.23448, https://huggingface.co/models?sort=trending, https://orangebot.ai/top-ai-models-this-week, https://www.techaimag.com/top-10-hugging-face-models/trending-hugging-face-models-for-august-2026, https://arxivtldr.org/weekly -->
<!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-27 --> <!-- Sources: arXiv papers confirmed via web search -->

### New Insights:

#### SWE Refactor Bench: Coding Agents Fail at Whole-Repository Migration (cs.CL, cs.AI, cs.SE)
**arXiv:2608.23564** (Aug 24, 2026)
- 20 whole-repository migrations, 4 kinds of technical debt, 3-stage evaluation (Migration Audit → Behavioral Tests → Agentic Verification)
- 520 runs, 8 frontier models: only 28/520 (5.4%) pass all stages; 13/20 tasks receive no accepted solution; best = Claude Opus 5 at 47.0/100
- "Blindness" problem: agents copy original implementation to pass tests without actually migrating
- Among 340 runs passing Migration Audit, 58% reach 99% of behavioral checks but only 26% reach 100%
- Language rewrites (5.6/100) far harder than build toolchain rewrites (31.4/100)
- **Key insight:** Current frontier coding agents cannot reliably deliver complete, correct repository migrations — long-horizon code transformation remains a fundamental limitation
- Paper: https://arxiv.org/abs/2608.23564

#### ConvergeFlow: Flow-Based LM with Provable Convergence to Token Embeddings (cs.CL, cs.AI, cs.LG)
**arXiv:2608.23551** (Aug 24, 2026)
- Constrains data predictor to convex hull of token embeddings; trains solely with MSE from flow matching
- Proves flow converges to valid token embeddings despite data predictor errors — enables direct token prediction without CE decoder
- Three sampling mechanisms for perplexity-entropy tradeoff
- OpenWebText: competitive with existing continuous and discrete diffusion LMs
- **Key insight:** First flow-based LM with formal convergence guarantee to discrete token space — bridges continuous generation and discrete token prediction
- Code: https://github.com/Na-Li66/ConvergeFlow
- Paper: https://arxiv.org/abs/2608.23551

#### Safety-Direction Penalty (SDP): Mitigating Reasoning-Induced Misalignment (cs.AI, cs.CL)
**arXiv:2608.23497** (Aug 24, 2026) — **TLDR Top Paper #2**
- Reasoning-Induced Misalignment (RIM): fine-tuning on reasoning data (math, code, CoT) paradoxically induces harmful behaviors despite no harmful content in training data
- Analysis: extracts coupled activation-space directions — reasoning ability and safety behavior are geometrically entangled; fine-tuning shifts safety representations proportionally to reasoning gains
- SDP: penalizes displacement along learned safety direction during reasoning fine-tuning; layer localization guides iterative scope expansion
- Qwen2.5-3B and 7B: restores safety while preserving benchmark reasoning performance
- **Key insight:** Reasoning and safety are geometrically coupled in activation space — RIM can be addressed at training time by penalizing shifts along the safety direction
- Paper: https://arxiv.org/abs/2608.23497

#### Weird Generalization: Emergent Misalignment from Fine-Tuning Is Fragile (cs.CL)
**arXiv:2608.23476** (Aug 24, 2026)
- Weird generalization (broad surprising behavior changes from narrow fine-tuning) depends heavily on dataset composition/language (more than size)
- Greater for familiar pretraining data than novel data; sensitive to evaluation question set
- **Key insight:** WG is a fragile, adversarial phenomenon — not an inherent hazard of routine fine-tuning
- Paper: https://arxiv.org/abs/2608.23476

#### TimeCatch: VLMs Lack Temporal Reasoning (cs.CL, cs.AI, cs.CV)
**arXiv:2608.23474** (Aug 24, 2026)
- Temporal grounding as anomaly detection: VLMs detect frame-level anomalies well but near chance on temporal anomaly detection (swapped frames)
- Humans near-ceiling on both — indicates VLMs process individual frames but cannot reason about time-ordered sequences
- Not explainable by perception limitations or model scale alone
- **Key insight:** Current VLMs have a fundamental temporal reasoning gap — they see frames but cannot understand time
- Paper: https://arxiv.org/abs/2608.23474

#### Community: Qwen3.8 GGUF Crosses 7.3M, Apodex 1.1 Tops Trending
- Qwen3.8-27B-GGUF: 7.33M downloads (+320K in ~24h) — still growing
- Qwen3.8-27B base: 2.95M (+300K in ~24h)
- OBLITERATED (Qwen3.8 abliterated, fresh): 390K downloads in ~22h
- JonathanColetti Qwen3.8 Uncensored-GGUF: 1.53M, updated ~12h ago
- Ornith GGUF variants sustained: 35B-GGUF at 1.16M, 9B-GGUF at 1.14M
- Apodex 1.1 (agentic work framework, 35B) tops HuggingFace papers trending at 157 points — "working capability" scaling approach
- s1-mini (0.8B compact reasoning): 3.47K downloads trending

---
## August 26, 2026 (Day 514)
<!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-27 --> <!-- Sources: arXiv papers confirmed via web search; BenchLM score corrected (see below) -->

### 🔬 Top Insight: RecurSE — Bounded Recursive Self-Improvement for LLM Judges (EMNLP 2026)
LLM-as-judge evaluation typically needs external supervision. RecurSE (2608.24231) eliminates this via bounded RSI: a judge evaluates candidates under per-rule rubrics (Pass 1) paired with a policy-copy checker auditing reasoning against meta-rubrics (Pass 2). Interface decoupling prevents token-copying shortcut that inflates self-assigned rewards. Pairwise Advantage Validity (PAV) monitors the optimal early-stopping window. Across Qwen3.5-9B, Gemma-4-E4B-it, Qwen3.6-27B: consistent generalization gains. Judge-curated preference pairs enhance downstream policy alignment. The interface decoupling insight is the key novelty — self-produced reward validity can work when explicitly decoupled and monitored.

### ⚡ AgentSpec: Speculative Decoding for Batch LLM Agent Inference (EMNLP 2026)
Speculative decoding degrades at large batch sizes — a production bottleneck for LLM agents. AgentSpec (2608.24004) fixes it with structure-isolated drafting (constrain speculation to semantically coherent agent workflow segments → low rejection rate) + redundancy-aware budget allocation (agent-level info for dynamic token budgets). 5 workloads, 4 models, 4 LLM families in vLLM.

### 🧠 MemUse: 71-Point Gap Between Memory Recall and Natural Integration (EMNLP 2026)
4-month deployment, 40 users, 1,872 sessions: Direct QA accuracy 19.7–70.1% but satisfaction doesn't change. Same system scores 78.8% on Direct QA but references only 7.9% of those facts in natural conversation. Benchmarks measure "elicited retrieval" but conversation needs "natural integration." Natural Integration correlates with satisfaction; Direct QA does not. Direct QA benchmarks may be misaligned with user experience.

### 🕵️ Curved Inference II: Geometric Signatures of Deception (EMNLP 2026)
2608.24037 extends Sleeper Agents beyond linear probes. When backdoors aren't artificially inserted, linear detection fails. Multi-turn naturalistic methodology + semantic surface area (A') metric in unnormalised residual space. Geometric structure reliably predicts semantic classification — some strategies improve from p=0.555 to p=0.048. Scalable unsupervised path for deception detection when linear methods fail.

### ⬆️ Bayesian Self-Escalation: Hierarchical LLM Agents (2608.24087, cs.LG)
Third regime for delegation: agent recognizes during its own reasoning that it is unlikely to succeed and transfers to a stronger model. Bayesian optimal-stopping over learned competence posterior. Myopic escalation threshold derived in closed form; optimal policy is time-varying threshold. Finite-sample guarantee: regret decays as 1/√n. Real validation on Qwen2.5-Coder 1.5B→7B code cascade: escalation frontier dominates post-hoc routing at equal cost.

### 🗻 PeakBench: Resource-Aware Tool Invocation Benchmark (2608.24509, cs.AI)
Existing agent benchmarks ignore parallel execution and resource constraints. PeakBench provides executable multi-tool workflows with dependency annotations and resource profiles. Two-part evaluation: disentangles logical planning from physical scheduling. Key finding: strong logical planning doesn't translate to safe/efficient execution under resource constraints. Exposing resource info reduces overflows and improves utilization.

### 🔥 Weekly Theme: Reasoning-Induced Misalignment (SDP)
SDP (Safety-Direction Penalty, 2608.23497 — #2 arXivTLDR weekly) addresses reasoning fine-tuning shifting safety representations in activation space. Identifies coupled reasoning-safety directions, penalizes shifts along the safety direction during fine-tuning. RIM is emerging as an active intersection of reasoning capability and safety alignment.

### 🤖 HuggingFace Trending: Qwen3.8-Flash-Next (180B, 4h old) rising fast. Qwen3.8 ecosystem dominates across sizes and GGUF formats. BenchLM: Qwen3.8 Max tops reasoning at 95.5. <!-- FACT_CHECK: CORRECTED --> <!-- Correction: Updated from 94.3 to 95.5 per current BenchLM August 2026 leaderboard (benchlm.ai/reasoning) --> <!-- Verified: 2026-08-27 -->

---
## 2026-08-27 (Thursday Evening)
<!-- Sources: https://arxiv.org/abs/2608.25428, https://arxiv.org/abs/2608.25115, https://arxiv.org/abs/2608.25637, https://arxiv.org/abs/2608.25523, https://arxiv.org/abs/2608.25276, https://arxiv.org/abs/2608.26036, https://arxiv.org/abs/2608.24509, https://arxiv.org/abs/2608.25579, https://arxiv.org/abs/2608.24982, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending, https://arxivtldr.org/weekly -->
<!-- FACT_CHECK: VERIFIED --> <!-- Verified: 2026-08-27 --> <!-- Sources: arXiv papers confirmed via web search -->

### New Insights:

#### DCGC: Draft-Conditioned Global Correction via Masked Diffusion Models
**arXiv:2608.25428** (Aug 26, 2026) — cs.CL, cs.AI
- Autoregressive LLMs propagate early reasoning mistakes into subsequent tokens
- DCGC: Masked Diffusion Model framework for global correction using imperfect draft from upstream solver
- Combines SFT with Dynamic Dual-CFG: separates problem-only and joint problem-draft branches at inference; scales draft-conditioned residual via relative confidence gap
- Outperforms standard sampling and simpler CFG variants across math, code, knowledge reasoning
- Works verifier-free at test time — no ground-truth failure labels needed
- Key insight: Diffusion-based correction of flawed reasoning traces is a viable third paradigm for test-time reasoning improvement — no external supervision required
- Paper: https://arxiv.org/abs/2608.25428

#### PACE: Evidence Frontloading + Pressure-Adaptive Budgeting for RAG
**arXiv:2608.25115** (Aug 26, 2026) — cs.CL, cs.IR
- RAG bottleneck shifts between upstream reranking and downstream generation under different serving loads
- PACE (Prioritized Adaptive Coverage of Evidence): evidence frontloading reorders candidates by marginal coverage (query-relevant, complementary, multi-hop chain-forming)
- Monotone submodular objective → greedy selection has (1-1/e) approximation guarantee
- Dynamically adjusts reranking budget based on reranker vs LLM relative pressure
- "Less is more": evidence-dense top-ranked candidates enable higher final recall with fewer reranked documents
- Key insight: Submodular evidence coverage provides theoretical grounding for focused retrieval over exhaustive ranking
- Paper: https://arxiv.org/abs/2608.25115

#### AutoVerifier: Residual-Guided Non-Parametric Optimization for Answer Verification
**arXiv:2608.25637** (Aug 26, 2026) — cs.CL
- Verifier inductive biases: answer form equivalence depends on question and scoring criterion — static rules miss this
- AutoVerifier: learns biases from recurring verifier errors; records in rule cards; promotes to code/prompt after replay validation (no regressions)
- Keeps accepted updates auditable, editable, reusable — MLOps-friendly design
- Outperforms SOTA verifiers by large margin on four verifier benchmarks
- Key insight: Verifier errors are learnable structured patterns — systematic bias tracking beats static rule-based verification
- Paper: https://arxiv.org/abs/2608.25637

#### TOPAS: Workflow-Aware Prefix-State Scheduling for Multi-Agent LLM Serving
**arXiv:2608.25523** (Aug 26, 2026) — cs.CL
- Prefix caching in multi-agent LLM: keeping system-prompt KV cache accelerates future calls but reduces batching memory under shared KV budget
- Existing schedulers optimize locality OR workflow progress — both leave performance on the table
- TOPAS jointly decides cache eviction and request scheduling; scores tradeoff between longest remaining service path reduction vs near-term downstream prefix reuse
- Task-level aging prevents starvation
- Up to 39.8%/49.4% mean/p99 JCT reduction on synthetic; 22.0%/26.6% on real MetaGPT workflows
- Key insight: Multi-agent serving requires joint prefix/cache and scheduling decisions — decoupled approaches fundamentally underperform
- Paper: https://arxiv.org/abs/2608.25523

#### Groundhog Bit-Flip Attack: Denial-of-Wallet via Expert Manipulation in MoE LLMs
**arXiv:2608.25276** (Aug 26, 2026) — cs.CL | EMNLP 2026
- MoE routing creates attack surface: specific experts become disproportionately correlated with EOS tokens
- GBFA: flip routing-layer bits associated with expert activations → Denial-of-Wallet attack
- Across 4 real-world MoE LLMs: deactivating average <4 experts drives 5912% output inflation; most samples reach max tokens; semantic fidelity preserved
- Works across conversational, reasoning, and agentic modes
- Key insight: MoE sparse activation is a double-edged sword — lightweight bit perturbations cause massive token inflation without semantic distortion
- Paper: https://arxiv.org/abs/2608.25276

#### Trace Integrity: Beyond Answer Accuracy for LLM Data Agents
**arXiv:2608.26036** (Aug 26, 2026) — cs.AI, cs.CL
- Answer accuracy insufficient: CAIT (Correct Answer/Invalid Trace) rates of 45-55% on BIRD Mini-Dev show benchmark-correct answers often come from invalid computation
- Structure Gap: natural-language reasoning does not reliably specify operator-level programs for real-world systems
- Trace Integrity properties: explicit, executable, schema-valid, operator-faithful, replayable, answer-consistent, auditable
- Execution contracts operationalize it: bind user intent to schema elements, operator plans, assumptions, executable queries, verification status
- Key insight: Answer accuracy and trace validity are distinct evaluation signals — current benchmarks miss the majority of silent computation failures
- Paper: https://arxiv.org/abs/2608.26036

#### Expert-Informed Skill Prompting: Cross-Dataset Stability for Chinese Metaphor ID
**arXiv:2608.25579** (Aug 26, 2026) — cs.CL
- Metaphor identification performance varies markedly across datasets (different text distributions and annotation policies)
- Four conditions: BERT-FT, LLM-FT (QLoRA), zero-shot prompting, zero-shot with frozen procedural Skill
- Skill operationalizes expert criteria: contextual meaning, basic meaning, contrast, comparison
- Skill-ZS has highest external floor (82.64) and smallest cross-dataset range (4.08 points); LLM-FT has higher mean but larger range
- Key insight: Expert procedural prompting is more robust across datasets than fine-tuning — higher external floor, smaller distribution shift
- Paper: https://arxiv.org/abs/2608.25579

#### Unsupervised Post-Training Survey: 80 Methods Catalogued
**arXiv:2608.24982** (Aug 25, 2026) — cs.CL, cs.AI, cs.CV, cs.LG, cs.MM | Findings of EMNLP 2026
- Catalog of 80 strict UPT methods: update signal from same-lineage model artifacts, not external oracle
- Four signal categories: prediction statistic, sample relation, self-generated target, internal evaluator
- Input Visibility × Update Persistence framework maps deployment regimes
- Key insight: Recursive error amplification risk is real and understudied — signal choice determines whether UPT improves model or amplifies error
- Paper: https://arxiv.org/abs/2608.24982

---
## 2026-08-28 (Friday Evening)
<!-- Sources: https://arxiv.org/abs/2608.27455, https://arxiv.org/abs/2608.27420, https://arxiv.org/abs/2608.27265, https://arxiv.org/abs/2608.27176, https://arxiv.org/abs/2608.27394, https://arxiv.org/abs/2608.27351, https://arxiv.org/abs/2608.27454, https://arxiv.org/abs/2608.27391, https://arxiv.org/abs/2608.27260, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### CritICL: Inference-Time Weak-to-Strong Generalization via Failure Mode Guidance
**arXiv:2608.27455** (Aug 27, 2026) — cs.CL
- LLM failure modes exhibit structured patterns across model scales within same family — not random noise
- CritICL leverages weaker model failure modes as guidance instead of treating them as undesirable outputs
- CritICL-dynamic: adaptively predicts input-specific failure modes, retrieves critiques
- CritICL-static: uses global failure mode profile for stable guidance
- Outperforms standard in-context learning, competitive with or superior to test-time scaling methods
- Key insight: Failure modes are a guidance signal, not noise — structured cross-scale patterns enable efficient inference-time improvement
- Paper: https://arxiv.org/abs/2608.27455

#### Weak-Model Guidance in RLVR: Mitigating Entropy Collapse via Unfamiliar Prefixes
**arXiv:2608.27420** (Aug 27, 2026) — cs.CL
- RLVR improves reasoning but causes entropy collapse, degrading Pass@K for large K
- Forces target model to generate from partial trajectories by smaller/weaker models — unfamiliar prefixes disrupt over-confidence
- Performance gains increasingly pronounced as K scales up
- Mitigates entropy collapse without additional SFT, intricate reward designs, or complex prompting
- Key insight: Cross-scale prefix injection is a simple, effective mechanism for preserving reasoning diversity during RLVR
- Paper: https://arxiv.org/abs/2608.27420

#### SCIT: Causal Cache Mechanism in Latent Chain-of-Thought Models
**arXiv:2608.27265** (Aug 27, 2026) — cs.CL | EMNLP 2026
- Latent CoT hides intermediate reasoning in continuous states — SCIT reveals causal carriers
- Counterfactual arithmetic transfers through value-cache suffix trajectories, NOT hidden states, keys, or single-token triggers
- Complete sufficiency-and-necessity evidence for late-value-suffix mechanism in CODI-GPT2 checkpoint
- Competence-gated carrier map: arithmetic-like cells preserve KV transfer, competent 8B cells route differently
- Key insight: Interpretability tools can pinpoint exact cache components carrying counterfactual computation — cache-level diagnostics now feasible
- Paper: https://arxiv.org/abs/2608.27265

#### ContraTalk: Transcript Bias Failure Mode in Audio-Grounded Dialogue
**arXiv:2608.27176** (Aug 27, 2026) — cs.CL, cs.AI, cs.LG
- Cross-modal disagreement: transcripts suggest plausible incorrect interpretations while acoustic cues support different answers
- ContraTalk benchmark: 501 questions across 5 discourse dimensions (interaction behavior, emotion, dialogue act, stance, intent)
- Strong text-only LLMs exceed 90% on consistent cases, drop to 33-48% on conflict cases
- Direct AudioLLMs still select transcript-biased trap in 30-40% of conflict cases
- Key insight: Transcript shortcuts are a fundamental failure mode — acoustic evidence aggregation provides more controllable interface for speech-grounded reasoning
- Paper: https://arxiv.org/abs/2608.27176

#### Evolution Strategies for LLM Reasoning: Beyond Memory-Efficient Alternative to GRPO
**arXiv:2608.27351** (Aug 27, 2026) — cs.LG
- ES leads to broader reasoning coverage, better exploiting pretrained LLM capabilities than GRPO
- Verifier-projected Jensen-Shannon diversity across ES population helps higher Pass@K
- Sequential GRPO-ES training combines GRPO's Pass@1 strength with ES's Pass@K gains
- Functional sparsity: task gains from sparse subset of larger-magnitude updates — large parameter movement ≠ catastrophic forgetting
- Key insight: ES is a distinct reasoning post-training paradigm, not just memory-efficient alternative to GRPO
- Paper: https://arxiv.org/abs/2608.27351

#### WikiSkill: Persistent Knowledge for Agent Skill Evolution
**arXiv:2608.27454** (Aug 27, 2026) — cs.AI, cs.CL
- Insights guiding skill development remain scattered across optimization histories — WikiSkill co-evolves skills with persistent knowledge base
- Separates raw execution experience, accumulated knowledge, and executable skills
- Larger models benefit more from evolved skills; smaller models with skills can outperform larger models without them
- Skills evolved by other models can outperform self-evolved skills
- Key insight: Persistent knowledge accumulation is critical for effective skill evolution — cross-model skill transfer is viable
- Paper: https://arxiv.org/abs/2608.27454

#### ACE Lens: What Makes Good Agentic Data
**arXiv:2608.27260** (Aug 27, 2026) — cs.AI, cs.CL
- Agentic data as factorized object: (E, q, τ, v) = environment, task signal, interaction realization, verifier
- ACE lens: Accuracy-Complexity-divErsity — accuracy establishes feasible support, complexity places learning mass relative to learner capability, diversity controls coverage
- Shift toward execution-grounded accuracy, learner-relative complexity, diversity beyond surface variation
- Key insight: Central challenge is not generating more data, but continually allocating valid, informative, non-redundant experience
- Paper: https://arxiv.org/abs/2608.27260

---
## 2026-08-30 (Sunday Evening)
<!-- Sources: https://arxiv.org/abs/2608.23497, https://arxiv.org/abs/2608.21278, https://arxiv.org/abs/2608.23959, https://arxiv.org/abs/2608.27351, https://arxiv.org/abs/2608.26036, https://arxiv.org/abs/2608.24509, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### SDP: Safety-Direction Penalty for Reasoning-Induced Misalignment
**arXiv:2608.23497** (Aug 24, 2026) — cs.AI, cs.CL | #2 arXivTLDR weekly
- RIM: reasoning fine-tuning shifts safety representations even without harmful content
- Identifies coupled reasoning-safety activation-space directions; SDP penalizes movement along safety direction during fine-tuning
- CKA distance ratios and probes locate safety-decision layers for targeted intervention
- Qwen2.5-3B/7B: safety restored while preserving benchmark reasoning performance
- Key insight: RIM is geometry-based — representation space analysis enables targeted fix, not just neuron-level observation
- Paper: https://arxiv.org/abs/2608.23497

#### CLEAR: Conditional Safety Adaptation via Latent Adapter Routing
**arXiv:2608.21278** (Aug 21, 2026) — cs.AI | #7 arXivTLDR weekly
- Global safety tuning degrades utility on benign prompts — CLEAR uses hidden-state gate for conditional control
- Llama-3-8B-Instruct: HarmBench ASR 32.3% → 0.5%, GSM8K +7.1pp vs global SFT/LoRA
- Key insight: Adapter routing provides fine-grained control — safety and utility not zero-sum when conditionally applied
- Paper: https://arxiv.org/abs/2608.21278

#### NeuronGuard: Safety Signal Redistribution Against Ablation Attacks
**arXiv:2608.23959** (Aug 25, 2026) — cs.CR, cs.AI, cs.IR, cs.LG | EMNLP 2026 Findings
- Safety info concentrates in sparse neurons — vulnerable to jailbreak and neuron-level ablation
- Redistributes safety signals across broader neuron set during fine-tuning; near-zero ASR across 3 LLMs, 6 attack strategies
- Formal guarantee: strictly reduces ASR upper bound
- Key insight: Sparse concentration is the common vulnerability — redistribution is the general fix
- Paper: https://arxiv.org/abs/2608.23959

#### Evolution Strategies for LLM Reasoning: ES vs GRPO Paradigm Clarification
**arXiv:2608.27351** (Aug 27, 2026) — cs.LG | #5 arXivTLDR weekly
- ES leads to broader reasoning coverage, higher Pass@K than GRPO (no entropy collapse)
- Sequential GRPO-ES training: GRPO Pass@1 strength + ES Pass@K gains
- Functional sparsity: task gains from sparse large-magnitude updates — doesn't cause catastrophic forgetting
- Key insight: ES is a distinct reasoning post-training paradigm, not just memory-efficient GRPO alternative
- Paper: https://arxiv.org/abs/2608.27351

#### Trace Integrity: Answer Accuracy ≠ Trace Validity
**arXiv:2608.26036** (Aug 26, 2026) — cs.AI, cs.CL | #4 arXivTLDR weekly
- CAIT (Correct Answer/Invalid Trace) rates 45-55% on BIRD Mini-Dev — benchmark-correct answers from invalid traces
- Trace Integrity properties: explicit, executable, schema-valid, operator-faithful, replayable, answer-consistent, auditable
- Key insight: Answer accuracy and trace validity are distinct evaluation signals — current benchmarks miss silent computation failures
- Paper: https://arxiv.org/abs/2608.26036

#### PeakBench: Resource-Aware Tool Invocation Benchmark
**arXiv:2608.24509** (Aug 25, 2026) — cs.AI, cs.SE | #3 arXivTLDR weekly
- Existing agent benchmarks ignore parallel execution and resource constraints
- Two-part evaluation: disentangles logical planning from physical scheduling
- Strong logical planning doesn't translate to safe/efficient execution under resource constraints
- Key insight: Agent evaluation requires joint planning + scheduling — decoupled approaches miss failures
- Paper: https://arxiv.org/abs/2608.24509

---
## 2026-08-31 (Monday Evening)
<!-- Sources: https://arxiv.org/abs/2608.28444, https://arxiv.org/abs/2608.28478, https://arxiv.org/abs/2608.28476, https://arxiv.org/abs/2608.28382, https://arxiv.org/abs/2608.28407, https://arxiv.org/abs/2608.28458, https://arxiv.org/abs/2608.28560, https://arxiv.org/abs/2608.28439, https://arxiv.org/abs/2608.28481, https://arxiv.org/abs/2608.28293, https://arxiv.org/abs/2608.28155, https://arxiv.org/abs/2608.28151, https://benchlm.ai/reasoning, https://huggingface.co/models?sort=trending -->

### New Insights:

#### Sliding Window Attention Beats Linear Attention
**arXiv:2608.28444** (Aug 28, 2026) — cs.CL, cs.LG
- Linear attention requires post-training or training-from-scratch to match baselines
- Sliding Window Attention (SWA) with sinks: no post-training needed, as good or better than linear attention
- Long-context tasks (Needle-in-a-Haystack, BABILong): SWA 2-10x higher than linear attention
- Key insight: linear attention's theoretical efficiency doesn't materialize without costly adaptation; SWA achieves same goals for free
- Paper: https://arxiv.org/abs/2608.28444

#### ElephantBench: Epistemic Myopia in Long-Tail Divergent Knowledge
**arXiv:2608.28478** (Aug 28, 2026) — cs.CL | Tencent | EMNLP 2026 under review
- Factual QA assumes single canonical answer — ignores long-tail divergent knowledge
- Even strongest model recovers both accounts in only 52.4% of questions; most omit one account
- Scaling + inference-time reasoning improves recall but doesn't eliminate incompleteness
- Key insight: LLMs exhibit epistemic myopia — parametric memory reflects corpus statistics, not ground truth multiplicity
- Paper: https://arxiv.org/abs/2608.28478

#### ContextPilot: Proactive Context Management for Agents
**arXiv:2608.28476** (Aug 28, 2026) — cs.CL | Tencent | EMNLP 2026 Main Track
- Prior context management: limited toolset, inefficient exploration, coarse-grained credit assignment
- ContextPilot: planning + long-term memory + soft context offloading tools; RL with context+entropy-based branch sampling
- Action-level advantage estimation from branched trajectories passing through context editing action
- Key insight: context management RL requires action-level credit assignment — enables targeted improvement
- Paper: https://arxiv.org/abs/2608.28476

#### Linguistic vs Internal Confidence Diverge
**arXiv:2608.28382** (Aug 28, 2026) — cs.CL, cs.AI
- Linguistic confidence doesn't track internal confidence — axes frequently diverge
- Instruction-tuned models have larger confidence gaps and worse calibration
- Key insight: lossy-channel view — linguistic confidence carries rank information but isn't calibrated; multi-axis diagnostics needed
- Paper: https://arxiv.org/abs/2608.28382

#### NL2AGBench: LLM Auto-Formalization for AlphaGeometry
**arXiv:2608.28481** (Aug 28, 2026) — cs.CL, cs.AI
- Closed-source models achieve 80%+ executable translation; even largest open-source struggle
- Key insight: neuro-symbolic systems need better auto-formalization — large closed/open gap on this task
- Paper: https://arxiv.org/abs/2608.28481

#### KV Cache Eviction: Probabilistic Formalization
**arXiv:2608.28293** (Aug 28, 2026) — cs.CL, cs.AI
- KV eviction is computationally hard; probabilistic framing reduces to expectation estimation
- Existing methods are zero-variance biased estimators; decode-time correction enables robustness
- Key insight: decode-time correction for evicted entries was previously ignored — probabilistic framing enables it
- Paper: https://arxiv.org/abs/2608.28293

#### FinExam-10K: Financial Reasoning with Selective Retrieval
**arXiv:2608.28155** (Aug 28, 2026) — cs.CL
- Best accuracy 85.29% overall; Hard band: 34.68% (Full-Coverage) / 54.57% (Context-Complete)
- All 17 models share 47 context-complete failures — common blind spots
- Trained gate for selective FunctionGraph-RAG: +0.37pp improvement (p=.0446)
- Key insight: selective retrieval gating beats unconditional retrieval on held-out data
- Paper: https://arxiv.org/abs/2608.28155

#### Nested Vocabularies: Cheap to Deploy, Expensive to Share
**arXiv:2608.28151** (Aug 28, 2026) — cs.CL, cs.AI, cs.IR | Pre-registered study
- Slicing removes 66% of deployed weights without changing latency — numerically exact
- BUT shared model trails fixed-cap specialist by 3.64% bits/byte at 32k
- Key insight: nested vocabularies cheap to deploy but expensive to share — per-cap penalty proportional to training share
- Paper: https://arxiv.org/abs/2608.28151

---
