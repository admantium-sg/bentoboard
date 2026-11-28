# Findings: Task 1 — arXiv Papers (Sep 1, 2026)

## Source: arXiv cs.CL, cs.LG new papers (Sep 1, 2026)

---

### MIST: Model-Internal Saliency for CoT Compression
**arXiv:2608.31066** (Aug 31, 2026) — cs.CL
- Chain-of-thought reasoning improves multi-step problem solving but long traces inflate inference cost
- Token-level CoT compression prunes full reasoning chains — token selection is the central challenge
- Existing methods rely on external scorers or heuristic signals indirectly tied to model's internal answer computation
- MIST takes model-internal perspective: each reasoning token leaves a "ripple" in residual stream (stream of thought), magnitude reflects token's contribution to answer computation
- Two complementary axes: **necessity** (drop in answer likelihood when token removed) and **sufficiency** (gain when contribution alone provided)
- Combining yields unified importance score for pruning
- Outperforms baselines across 4 reasoning benchmarks, 4 models
- Key insight: model-internal saliency provides effective proxy for reasoning-token importance — internal signals beat external scorers
- Paper: https://arxiv.org/abs/2608.31066

---

### PaperGym: Rubric-Centered Evolution for Research-Plan Generation
**arXiv:2608.31119** (Aug 31, 2026) — cs.CL | ZJU
- Research planning is decisive capability of AI scientists; admits no verifiable answer, so RL lacks environment (tasks + critic)
- Rubrics from scientific papers can supply the critic — but existing pipelines draw question and criteria from same content, so reward earned by paraphrase
- PaperGym exploits paper structure: question synthesized from research goal + background; criteria derived from method + experiments
- Criterion leakage: 3.7% vs 11.90%-34.10% in existing datasets
- Uses rubric twice: as privileged context for OPSD's self-teacher, then as reward for GRPO
- Across Qwen3-1.7B/4B/8B: outperforms SFT, either stage alone, and reverse ordering — +5.6, +5.0, +4.8 points improvement
- PaperGym-20k trained models win 58.1% of three-way comparisons vs 28.2% for RubricHub Science
- Qwen3-8B reaches 73.48 on ResearchQA, above far larger Kimi K2.6
- Key insight: rubric structure (question ≠ criteria) enables honest RL — exploiting paper structure reduces leakage dramatically
- Paper: https://arxiv.org/abs/2608.31119

---

### ASPIRE: Self-Evolution from Vague Goals
**arXiv:2608.31111** (Aug 31, 2026) — cs.CL
- Many human learning forms begin with vague goal ("become better physicist") — must interpret goal, identify gaps, decide how to learn, determine improvement
- Existing LLM self-evolution starts with human-specified tasks and metrics — reduces to optimizing explicit objective, not deciding what/how to learn
- ASPIRE: benchmark providing only natural-language capability goal, downstream evaluation tasks hidden
- Agent must operationalize: choose data + update methods, construct training/validation signals, decide when to evaluate
- Supports both model-weight and agent-harness evolution in unified interactive environment
- Experiments show: vague goals redirect search effort toward goal interpretation; weight-level gains remain sparse/unstable; strongest evolved harness still below engineered Qwen-Agent reference
- Agents often train on mismatched data and trust narrow self-evaluations — local gains fail to transfer
- Key insight: vague-goal evolution is fundamentally different from task-based optimization — current agents can't yet reliably translate exploration into capability gains
- Paper: https://arxiv.org/abs/2608.31111

---

### S³Gym: Self-Testing, Self-Judging, Self-Improvement
**arXiv:2608.31100** (Aug 31, 2026) — cs.CL
- Existing agent benchmarks evaluate as fixed policies; can't test whether agent actively tests/judges behavior and uses experience to improve
- S³Gym: interactive benchmark for self-improvement via three coupled capabilities: Self-Testing, Self-Judging, Self-Improvement
- Separates permissive exploration from strict held-out evaluation; 7 text-based games with executable verifiers
- Three pathways: direct History ICL, score-conditioned Summary Memory, parameter Training
- Self-improvement is neither automatic nor uniform: context-level experience helps some model-game pairs; summaries benefit when experience compresses into reusable rules but underperform raw history when success depends on precise state-contingent info
- Parameter training produces substantial gains on some tasks but also unstable improvement + severe negative transfer on others
- Key insight: recognizing successful actions is insufficient — agents must transform feedback into executable and transferable policies
- Paper: https://arxiv.org/abs/2608.31100

---

### AutoSciRub: Evaluation-First Framework for Research Agents
**arXiv:2608.31076** (Aug 31, 2026) — cs.CL, cs.AI, cs.LG | EMNLP 2026
- Open-ended research tasks don't specify analyses, methods, success criteria — agents miss analyses, use inappropriate methods, draw unsupported conclusions
- AutoSciRub: induces task-specific executable rubric before research execution; uses it to guide execution, criterion-level verification, iterative revision
- Decomposes underspecified instruction into atomic scientific goals, grounds in literature + task-visible data, synthesizes specific actionable verifiable criteria
- Results on ResearchClawBench: +2.08 points average across 3 backbone LLMs, +2.95 points across 3 agent harnesses
- On AstaBench E2E Discovery: +16.8 points average, maintains/increases completed tasks
- Key insight: evaluation-first guidance provides effective generalizable control for autonomous research — makes implicit requirements explicit before execution
- Paper: https://arxiv.org/abs/2608.31076

---

### WhisperX Context-Aware Interleaved Batching
**arXiv:2608.31170** (Aug 31, 2026) — cs.CL
- WhisperX accelerates speech transcription via intra-audio batching but isolates segments, losing historical context needed for coherent punctuation/terminology
- Standard Whisper retains context sequentially but suffers slow inference + hallucination loops
- Context-Aware Interleaved Batching: uses VAD-derived segment boundaries to stabilize Whisper text conditioning, maintaining continuous historical context across batched segments
- Reduces WER, improves proper noun transcription, maintains high-throughput inference speeds
- Key insight: VAD-stabilized interleaved batching achieves best of both worlds — context continuity + batch-level efficiency
- Paper: https://arxiv.org/abs/2608.31170

---

### BioMedRAG: Configurable Semantic Chunking
**arXiv:2608.31139** (Aug 31, 2026) — cs.CL, cs.IR
- BioMedRAG uses fixed-size chunking which fragments semantic evidence
- Configurable semantic chunking: entity-preserving windows, trigger-centered chunking, proposition-first extraction, tiered trigger prioritization, hierarchical relation resolution
- Integrates with BioMedRAG by replacing only chunk construction stage
- On GM-CIHT: 82.6% F1 vs 74.2% baseline (+8.4 points)
- Cross-dataset: semantic chunking improves extraction with explicit relation cues (GM-CIHT, DDI); fixed chunking stronger for dense biochemical extraction (ChemProt, ADE)
- Key insight: configurable chunking provides interpretable, adaptable alternative to fixed chunking — task-dependent which wins
- Paper: https://arxiv.org/abs/2608.31139

---

### J-Lens: First Token as Clue for Multi-Token Concept Recovery
**arXiv:2608.31084** (Aug 31, 2026) — cs.CL
- Jacobian Lens reads hidden state as ranked token list — multi-token concepts lack own representation
- First token of multi-token concept is about as readable as single-token concept
- Given correct first token + source prompt: frozen model recovers second token in 88.3% of two-token cases
- Vector for complete concept recoverable from subsequent hidden states in single forward pass
- Average Rank@10: 43.1% (vs 27.6% Template Lens); without J-lens clue: 21.6%
- Causal concept swaps: 61.4% succ@10 vs 26.2% Template Lens
- Key insight: first-token clue substantially improves multi-token readout — subsequent states provide vectors for intervention
- Paper: https://arxiv.org/abs/2608.31084

---

### FeedQ: Learned Queries for Information Extraction
**arXiv:2608.31058** (Aug 31, 2026) — cs.CL | EMNLP 2026
- Improving question design alone raises performance by 18.6 F1 points — more than using larger extraction models
- LoQ (List of Questions): generates document-specific question sets
- FeedQ: feedback-driven optimization that iteratively refines questions against extraction outcomes
- 4B fine-tuned models match/exceed expert-derived baselines, substantially exceed larger untuned models
- Key insight: query design is first-class problem in IE — improving questions outperforms scaling models
- Paper: https://arxiv.org/abs/2608.31058

---

### Neural Approximation Rates: Affine Latent Parameterizations
**arXiv:2608.31157** (Aug 31, 2026) — cs.LG, stat.ML
- Hypernetworks, low-dimensional parameterizations, parameter-efficient adaptation, model compression all share framework: generator G maps latent vector ξ to parameters θ
- Sharp approximation rate for affine generators + ReLU architectures: optimal worst-case error ~ (P·min(M,P))^-α/d for α-Hölder functions
- Even fixed-dimensional latent space suffices for vanishing approximation error as network budget increases
- Key insight: theoretical characterization of tradeoff between latent dimension and network budget — informs design of efficient parameter generators
- Paper: https://arxiv.org/abs/2608.31157
