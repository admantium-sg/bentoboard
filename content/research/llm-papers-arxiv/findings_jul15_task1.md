# Findings: Task 1 — arXiv Papers (cs.CL/cs.LG/cs.AI) — July 15, 2026

## Papers from July 14 Submissions (reported July 15)

### 1. EcoSpec: Cost-Aware Speculative Decoding for MoE
**arXiv:2607.12696** (July 14, 2026) — cs.CL
- Confidence-driven speculative decoding causes "expert scattering" in MoE models — high-probability drafts route to disjoint experts, increasing memory traffic
- EcoSpec: incorporates predicted marginal expert activation cost into draft selection via lightweight expert predictor + dynamic expert buffer
- Favors draft paths that reuse experts already in verification set while preserving acceptance likelihood
- Up to 1.62× speedup on DeepSeek-V3.1 (671B), Qwen3-235B-A22B, GPT-OSS-120B
- Key insight: MoE inference efficiency depends on expert overlap, not just token acceptance probability — accounting for memory traffic unlocks real speedups
- Paper: https://arxiv.org/abs/2607.12696

### 2. PalmClaw: Native On-Device Agent Framework
**arXiv:2607.13027** (July 14, 2026) — cs.CL — cs.AI
- Existing mobile agents rely on GUI actions (tap/swipe/type) — long, interface-dependent, can't access device capabilities directly
- PalmClaw: open-source agent framework running natively on mobile, managing sessions/memory/skills/tools/agent loop on-device
- Device tools with explicit arguments, structured results, clearly defined execution boundaries
- 11.5% relative task success improvement, 94.9% completion time reduction over strongest baseline
- Code: https://github.com/ModalityDance/PalmClaw
- Key insight: native on-device agents need modality-aware tool abstraction, not GUI proxying — execution boundaries matter for reliability
- Paper: https://arxiv.org/abs/2607.13027

### 3. The Illusion of Robustness: Aggregate Accuracy Hides Prediction Flips
**arXiv:2607.12963** (July 14, 2026) — cs.CL
- Models appear robust to task-irrelevant context at aggregate level (accuracy barely changes)
- But per-example: even random pseudo-words can markedly shift predictions — improving some, degrading others
- Instability modulated by: context type, length, test-time compute, model development stage
- Affected examples are largely model-specific — aggregate scores hide this tail risk
- Key insight: aggregate accuracy is a dangerous proxy for reliability — per-example evaluation reveals context-induced prediction flips
- Paper: https://arxiv.org/abs/2607.12963

### 4. LLM Judges Can Be Too Generous Without Reference Answers
**arXiv:2607.12885** (July 14, 2026) — cs.CL
- Reference-free LLM-as-judge evaluation increasingly common; but calibration is critical
- Judges over-credit incorrect answers in absence of reference; reference presence flips 85% of correct/incorrect decisions in some settings
- Changes generally align with human annotations
- Three languages tested; pattern consistent
- Key insight: reference-free judge evaluation is unreliable without prior calibration against a reference-aware sample — calibration protocol is essential
- Paper: https://arxiv.org/abs/2607.12885

### 5. ThReadMed-QA: Multi-Turn Medical Misconception Correction
**arXiv:2607.12884** (July 14, 2026) — cs.CL — MLHC 2026
- Medical questions often embed misconceptions; correcting them over multi-turn is critical for patient safety
- ThReadMed-QA: 2,437 multi-turn patient-physician threads (8,204 QA pairs) from AskDocs
- GPT-5 and Claude-Haiku: ~85% misconception correction on initial questions, drops to ~50% within two follow-ups
- Oracle analysis: much of degradation from error propagation; even with correct prior context, performance imperfect
- Key insight: multi-turn evaluation is essential for clinical deployment — single-turn benchmark performance dramatically overstates real-world safety
- Paper: https://arxiv.org/abs/2607.12884

### 6. KLLMs: Knowledge-less Language Models for Evidence-Grounded Generation
**arXiv:2607.12831** (July 14, 2026) — cs.CL
- LLM factual knowledge in parameters → unreliable when outdated or misaligned with context
- KLLMs: pretrain on corpora with anonymized named entities — removes entity-linked factual supervision channel
- Substantially reduces closed-book factual recall; improves contextual QA and fact verification
- Up to 20-25% relative gains in retrieval-grounded settings with imperfect evidence
- Better calibration: improved ECE, Brier score, AUROC, and abstention behavior
- Key insight: suppressing parametric recall at pretraining time shifts models toward evidence-dependence — architectural complement to RAG
- Paper: https://arxiv.org/abs/2607.12831

### 7. The One-Word Census: Answer-Choice Conformity Across 44 Models
**arXiv:2607.12796** (July 14, 2026) — cs.CL — cs.AI — cs.CY
- 44 LLMs asked "pick a word — any word" for 31 categories: "serendipity" chosen 41% of the time
- Extreme convergence: in 7/31 categories, one answer takes >80% of all responses
- Conformity varies 4× across models; persona/community-tuned most divergent, newest mainline flagships most conformist
- Within Claude/GPT/Qwen/Grok lineages: conformity rises each generation, then reverses for latest flagships (possible repositioning signal)
- Key insight: answer-choice conformity is a structured, measurable property — latest flagship reversal may signal strategy shift at top tier
- Paper: https://arxiv.org/abs/2607.12796

### 8. ESFP: Epistemic Stance Flexibility Probing
**arXiv:2607.12739** (July 14, 2026) — cs.CL
- Models asked "what do experts believe?" vs "what do you believe?" should respond in different epistemic registers
- ESFP benchmark: 104 items across 6 epistemic categories, 5 phrasing templates, 4 evaluation dimensions
- Epistemic flexibility largely orthogonal to general capability: 27B open-weight matches strongest proprietary
- Reasoning-optimized models do NOT consistently show higher epistemic flexibility
- Stance content density is strongest signal; surface lexical markers (like "I think") can change without stance change
- Key insight: capability ≠ epistemic flexibility; current benchmarks miss this dimension entirely
- Paper: https://arxiv.org/abs/2607.12739

### 9. CARE-PPO: Quantitative Prediction with Confidence via PPO
**arXiv:2607.12687** (July 14, 2026) — cs.CL — cs.AI
- LLMs perform quantitative prediction but produce overconfident errors in healthcare/finance
- CARE-PPO: Confidence-Aligned Reward for Estimation — joint PPO fine-tuning of prediction accuracy and confidence calibration
- Repurposes critic as confidence estimator at inference time
- Better-aligned confidence than logit-based and verbalized baselines across healthcare and finance tasks
- Gains persist under out-of-distribution settings (linguistic and domain shifts)
- Key insight: actor-critic PPO framework unifies prediction accuracy and uncertainty quantification — critic is the confidence signal
- Paper: https://arxiv.org/abs/2607.12687

### 10. KnowAct-GUIClaw: Know-Route-Act-Reflect for OpenClaw GUI Agents
**arXiv:2607.12625** (July 14, 2026) — cs.CL — cs.CV
- Builds on OpenClaw agent framework to address GUI manipulation and self-evolution limitations
- Four components: Know (accumulated experience + knowledge for task decomposition), Route (allocation), Act (skill library), Reflect (feedback)
- Experience-attributable memory system + self-evolving skill library for cross-platform migration
- 64.1% on MobileWorld benchmark with Kimi-2.6 open-source models, beating Seed-2.0-Pro and GPT-5.5
- 8.5% improvement transferable across base models
- Key insight: long-horizon GUI agents need self-evolving memory + skill libraries — not just better planning
- Paper: https://arxiv.org/abs/2607.12625

### 11. OAT: Agentic Failure Attribution via One-Class Neural CDE
**arXiv:2607.12747** (July 14, 2026) — cs.AI — cs.CL
- Identifying which step caused agentic task failure: prompting-based is expensive; step-level annotation is costly to collect
- OAT: trains exclusively on successful trajectories using neural Controlled Differential Equations in latent space
- Each failure step gets an anomaly score based on deviation from learned successful dynamics
- 200-5000× faster than prompting baselines; +20% F1 in-domain, +7% OOD vs baselines
- Key insight: failure attribution is learnable without failure data — success dynamics are sufficient signal for anomaly detection
- Paper: https://arxiv.org/abs/2607.12747

### 12. Extractable Memorization: A Formal Treatment
**arXiv:2607.12649** (July 14, 2026) — cs.LG — cs.CL
- Prior extractable memorization work suffers from validity issues: short sequences can't distinguish memorization from predictability
- Matched comparison framework: compare generation probability of training sequences vs comparable non-training sequences
- Conformal test (population-level FPR calibration) + census (matched document-level calibration)
- Example: OLMo 2 32B on Wikipedia — 24% of training sequence generation rate is false positives, not memorization
- Llama 3.1 70B on books: memorization thresholds as low as 1e-27
- Key insight: "extractable memorization" needs rigorous matched comparisons — without them, extraction claims are unreliable
- Paper: https://arxiv.org/abs/2607.12649

### 13. Language Identification with Machine-Independent Traces
**arXiv:2607.12443** (July 14, 2026) — cs.CL — cs.DS — cs.LG
- Gold-Angluin model of language identification in limit: CoT tokens can serve as computational traces that aid learning
- Establishes positive results for identification using small-alphabet traces defined directly from language structure (no underlying machine model)
- Traces use alphabet linear in language's own alphabet size — independent of language complexity
- Key insight: CoT-style annotations are not just human convenience — they are computationally meaningful traces that enable learning
- Paper: https://arxiv.org/abs/2607.12443

### 14. Sparse FFN Dependencies: Neuron-Level Circuit Analysis
**arXiv:2607.11990** (July 13, 2026) — cs.LG — cs.AI — cs.CL
- Despite dense parameterization, FFNs exhibit sparse structured inter-layer dependencies at neuron level
- Small subsets of preceding activations + attention outputs suffice to preserve neuron activations with high fidelity
- Moderate layerwise masking leaves perplexity largely unchanged — structured sparse pathways exist
- Key insight: dense FFNs are operationally sparse — interpretability can exploit neuron-level circuit structure for efficient inference
- Paper: https://arxiv.org/abs/2607.11990

### 15. Diffusion LLM Efficient Inference Survey (IJCAI-ECAI 2026)
**arXiv:2607.12829** (July 14, 2026) — cs.LG — cs.AI — cs.CL
- Diffusion LLMs theoretically enable parallel generation, but practical speedups need specialized inference mechanisms
- Unified latency decomposition framework for dLLMs disentangles algorithmic, architectural, and system-level factors
- Acceleration techniques categorized across three axes: algorithmic innovations, architectural/system optimizations, inference-time scaling
- Guidelines for reproducible benchmarking; open challenges for realizing full parallel generation potential
- Key insight: dLLM efficiency isn't just about parallel decoding — full-stack analysis needed across the entire inference pipeline
- Paper: https://arxiv.org/abs/2607.12829

### 16. Double Ratchet: Co-Evolving Evaluation Metrics and Skills
**arXiv:2607.12790** (July 14, 2026) — cs.AI — cs.CL — cs.MA
- Self-evolving agents need reliable evaluation metrics; in many real applications these don't exist
- Metric loop: searches compositions of small drawback detectors under evolutionary lifecycle, trained on anchored reference set
- Double Ratchet co-evolves metric with skill loop — retains 88-110% of ground-truth lift across MBPP+, Spider 2.0-Snow, report generation
- Safety comes from anchor discipline + outer audits; removing anchor guards collapses metric
- Key insight: evaluation metrics and skills must co-evolve — neither can improve sustainably without the other
- Paper: https://arxiv.org/abs/2607.12790

### 17. LLM Rubric Reliability for Paper Reproduction
**arXiv:2607.12835** (July 14, 2026) — cs.CL
- PaperBench evaluates code reproduction via LLM-generated rubrics; but are these rubrics reliable?
- Checklist-style reformulation; meta-evaluation intrinsically (semantic similarity) and extrinsically (score alignment)
- LLM-generated rubrics: overly fine-grained, biased toward high scores, less adaptive to paper domain
- Augmented settings approach human baseline on downstream alignment
- Key insight: rubric quality for paper reproduction needs extrinsic validation — intrinsic similarity is insufficient proxy
- Paper: https://arxiv.org/abs/2607.12835
