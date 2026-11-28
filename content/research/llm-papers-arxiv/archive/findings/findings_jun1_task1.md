# Findings: June 1, 2026 - Task 1 (arXiv Papers)

## Papers Researched (cs.CL, cs.LG, cs.AI - May 29-June 1, 2026)

### 1. LongTraceRL: Long-Context Reasoning from Search Agent Trajectories with Rubric Rewards
**arXiv:2605.31584** (May 29, 2026) — cs.CL, cs.AI, cs.LG
- RL for long-context reasoning addresses low-confusability distractors and sparse outcome-only rewards
- Multi-hop questions via knowledge graph random walks
- Tiered distractors: agent-read-but-not-cited (high confusability) vs search-results-not-opened (low confusability)
- Rubric reward: gold entities along reasoning chain for fine-grained entity-level process supervision
- Positive-only strategy: rubric reward applied only to responses with correct final answers
- Results: consistently outperforms strong baselines across 3 reasoning LLMs (4B-30B), 5 long-context benchmarks
- Key insight: Process supervision distinguishes reasoning quality among correct responses, preventing reward hacking

### 2. GRKV: Training-Free KV Cache Compression via Global Regression
**arXiv:2605.31105** (May 29, 2026) — cs.CL
- Span-based retention preserves contiguous spans (semantically coherent) but concentrates merges onto boundary tokens
- Over-merging from imbalanced merge pattern increases information loss
- GRKV: ridge-regression-based merge steps minimize discrepancy between compressed-cache and full-cache attention outputs
- Regularizes updates to prevent over-smoothing
- Only merging method that improves overall performance on LongBench and RULER
- Key insight: Global regression distributes evicted token information across retained tokens, not just boundary carriers

### 3. ConsisGuard: Aligning Safety Deliberation with Policy Enforcement in LLM Guardrails
**arXiv:2605.31073** (May 29, 2026) — cs.CL
- Reasoning-based guardrails improve safety moderation with explicit rationales before decisions
- Problem: deliberation-to-enforcement gap — model may recognize harm in reasoning but predict safe, or issue unsafe decision without justification
- Requires policy execution consistency: reasoning grounded in safety policy, decision entailed by reasoning
- ConsisGuard: Policy-to-Decision Trajectory Distillation + Functional Coupling Alignment
- Aligns internal coupling between safety deliberation and decision enforcement
- Improves detection + reduces policy execution failures
- Key insight: Chain-of-thought faithfulness ≠ guardrail reliability; policy execution consistency is distinct requirement

### 4. STR: Semantic Triplet Restoration for Hierarchical Table Understanding
**arXiv:2605.31550** (May 29, 2026) — cs.CL
- Table QA requires recovering semantic relations encoded by 2D layout, merged cells, hierarchical headers
- HTML/Markdown introduce markup overhead; require LLM to infer header-cell alignments from row/col spans
- STR rewrites each cell as atomic fact <item path, feature path, value>
- item path = row-wise entity, feature path = hierarchical attribute, value = cell content
- TripletQL: lightweight query-aware router selects appropriate rendering/filtered subset per question
- Matches/improves HTML baselines while reducing tokens; benefit grows for smaller models and longer contexts
- Key insight: Explicit semantic representations especially valuable under constrained inference budgets

### 5. SkillsBench: Skill Availability and Presentation Granularity in LLM Agents
**arXiv:2605.31408** (May 29, 2026) — cs.CL, cs.AI, cs.LG
- Skill documents provide procedural knowledge to agents at inference time
- 30-task domain-balanced subset, 2 reasoning-enabled model configs, 6 skill conditions, 5 trials
- Relative to no skill: skill conditions increase pass rate by 26.7-36.0pp (GPT-5.5) and 18.0-26.0pp (DeepSeek V4-Flash)
- Presentation granularity changes (low vs high abstraction): small, uncertain, model-dependent effects
- Adding worked example: marginal +0.7 to +1.3pp improvement
- Primary signal: skill availability, not presentation granularity
- Key insight: Skill documents are high-value; abstraction level matters less than availability

### 6. CYKNN: Neuro-symbolic Syntactic Parsing with CYK Algorithm
**arXiv:2605.31421** (May 29, 2026) — cs.CL, cs.AI, cs.DS
- Direct injection of algorithms into neural network architecture
- CYK (Cocke-Younger-Kasami) for parsing context-free grammars in Chomsky Normal Form
- Outperforms LLMs with 20B+ parameters in-context, and smaller Qwen models fine-tuned with LoRA
- 9 content pages, very simple grammar with 4 variations
- Key insight: Neuro-symbolic methodologies can encode complex algorithms in trainable matrix-vector multiplications

### 7. Paired-Focus Constructions: LLM Understanding of Rare Semantic Constructions
**arXiv:2605.31586** (May 29, 2026) — cs.CL, cs.AI — CoNLL 2026
- Paired-Focus constructions: "let alone", "much less" — rare form-meaning pairings
- Modestly sized open-source models can grasp these constructions
- Models trained on human-scale data fail at meaning evaluations
- Paired-Focus understanding emerges later in training than syntactic knowledge
- Learning of Paired-Focus semantics correlates with gains in world knowledge domains
- Key insight: Constructional semantics acquisition follows distinct learning dynamics from syntax

### 8. If LLMs Have Human-Like Attributes, Then So Does Age of Empires II
**arXiv:2605.31514** (May 29, 2026) — cs.CL, cs.AI, cs.CY
- Much research attributes generalized anthropomorphic properties to LLMs (morality, understanding)
- Trained simple neural network on Age of Empires II — same attributes emerge
- Any entity in sufficiently powerful substrate (LEGO, Greater Boston Area) could present such attributes
- Purported anthropomorphic attributes are empirically non-unique
- Proposes 'null' assumption: assume LLM non-uniqueness rather than anthropomorphic attributes
- Key insight: Anthropomorphic attributions require explicit measurement criteria; substrate matters

### 9. Financial RAG with Market-Feedback Adaptive Retrieval
**arXiv:2605.31201** (May 29, 2026) — cs.CL
- Evidence usefulness depends on event type, forecast horizon, market context — not just textual relevance
- Bayesian source memory updated from matured residual-return feedback
- Frozen LLM reader + adaptive retrieval layer
- 89-stock Nasdaq universe: macro-F1 0.438→0.471, portfolio Sharpe 0.52→0.84
- LoRA reader improves static RAG modestly but not over frozen source-memory reader
- Key insight: For financial RAG, learning where to retrieve is as important as learning how to read

### 10. UniAudio-Token: Empowering Semantic Speech Tokenizers with General Audio Perception
**arXiv:2605.31521** (May 29, 2026) — cs.CL, cs.SD
- Semantic speech tokenizers: compact single-codebook, strong linguistic alignment, but acoustic blindness
- SAP: Semantic-Acoustic Primitives decompose audio into linguistic content, vocal attributes, auditory-scene primitives
- SAE: content-aware gating mechanism adaptively restores fine-grained acoustic details from shallow layers
- Outperforms all single-codebook tokenizers on understanding and generation tasks
- Key insight: Preserving semantic paradigm while mitigating information loss enables unified audio interface

## Sources
- https://arxiv.org/abs/2605.31584
- https://arxiv.org/abs/2605.31105
- https://arxiv.org/abs/2605.31073
- https://arxiv.org/abs/2605.31550
- https://arxiv.org/abs/2605.31408
- https://arxiv.org/abs/2605.31421
- https://arxiv.org/abs/2605.31586
- https://arxiv.org/abs/2605.31514
- https://arxiv.org/abs/2605.31201
- https://arxiv.org/abs/2605.31521