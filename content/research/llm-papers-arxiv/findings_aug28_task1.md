# Findings: Task 1 — Aug 28, 2026
# arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Sources
- https://arxiv.org/abs/2608.27455 (CritICL)
- https://arxiv.org/abs/2608.27420 (Weak-Model Guidance RLVR)
- https://arxiv.org/abs/2608.27265 (SCIT - Latent CoT)
- https://arxiv.org/abs/2608.27176 (ContraTalk)
- https://arxiv.org/abs/2608.27394 (RATIO)
- https://arxiv.org/abs/2608.27351 (ES vs GRPO)
- https://arxiv.org/abs/2608.27454 (WikiSkill)
- https://arxiv.org/abs/2608.27391 (CorporateBench)
- https://arxiv.org/abs/2608.27260 (ACE Lens)
- https://benchlm.ai/reasoning

---

## CritICL (2608.27455) — Inference-Time Weak-to-Strong Generalization
cs.CL | Aug 27, 2026

Key insight: LLM failure modes exhibit structured patterns across model scales within the same family. CritICL leverages failure modes from weaker models as guidance instead of treating them as noise.

Two variants:
- CritICL-dynamic: adaptively predicts input-specific failure modes, retrieves critiques
- CritICL-static: uses global failure mode profile for stable guidance

Outperforms standard in-context learning, competitive with or superior to test-time scaling methods while requiring fewer generations and lower token cost.

Paper: https://arxiv.org/abs/2608.27455

---

## Weak-Model Guidance in RLVR (2608.27420) — Boosting LLM Exploration
cs.CL | Aug 27, 2026

Problem: RLVR significantly improves LLM reasoning but causes entropy collapse, leading to narrowed reasoning coverage and degraded Pass@K.

Solution: Force target model to generate answers based on partial reasoning trajectories from smaller/weaker models. These unfamiliar prefixes disrupt over-confidence and encourage exploration of distinct reasoning paths.

Key findings:
- Performance gain increasingly pronounced as K scales up
- Effectively mitigates entropy collapse without requiring additional SFT, intricate reward designs, or complex prompting
- Reveals mechanism of distributional discrepancy's impact on exploration dynamics in RLVR training

Paper: https://arxiv.org/abs/2608.27420

---

## SCIT (2608.27265) — Testing Causal Cache Carriers in Latent Chain-of-Thought Models
cs.CL | EMNLP 2026 | Aug 27, 2026

Latent CoT moves intermediate reasoning from emitted text into continuous states, improving compactness but hiding causal objects.

SCIT (Suffix Cache Interchange Test): causal protocol that constructs exact source-recipient counterfactuals, patches declared cache segments, identifies which transformer object carries counterfactual computation.

Key findings:
- Counterfactual arithmetic transfers primarily through value-cache suffix trajectories, NOT hidden states, keys, reusable answer slots, or single-token triggers
- Complete sufficiency-and-necessity evidence for late-value-suffix mechanism in CODI-GPT2 checkpoint
- Competence-gated carrier map: arithmetic-like cells preserve latent-tail KV transfer, competent 8B cells route through prompt-prefix or full-cache K/V

Paper: https://arxiv.org/abs/2608.27265

---

## ContraTalk (2608.27176) — Inconsistent-Aware Reasoning for Audio-Grounded Dialogue
cs.CL, cs.AI, cs.LG | Aug 27, 2026

Problem: Existing evaluations allow shortcuts based on transcripts, missing whether models genuinely ground predictions in speech.

Cross-modal disagreement: transcripts suggest plausible but incorrect surface interpretations while acoustic cues support different answers.

ContraTalk benchmark: 501 questions across 5 discourse dimensions (interaction behavior, emotion state, dialogue act, social stance, conversational intent).

Audio Twin framework: converts speech into text-readable representation of localized acoustic cues exposing acoustic evidence to reasoning model.

Key findings:
- Strong text-only LLMs exceed 90% accuracy in consistent cases but drop to 33-48% in conflict cases
- Direct AudioLLMs still select transcript-biased trap in 30-40% of conflict cases
- Audio Twin improves conflict-case accuracy while reducing trap selection

Paper: https://arxiv.org/abs/2608.27176

---

## RATIO (2608.27394) — Retrieval Across Typed Ideation Operations
cs.CL, cs.IR | Aug 27, 2026

Scientific inspiration retrieval: prior work may suggest how to address problems, or surface directions at different levels of abstraction.

Three ideation moves: Address (approaches for stated problems), Broaden (more general formulations), Specify (concrete instantiations).

Constructed from millions of full-text scientific papers via general recipe extending discourse-marker distant supervision to corpus-scale retrieval.

Key finding: Operation-specific fine-tuning substantially boosts retrievers but leaves much room for further improvements.

Paper: https://arxiv.org/abs/2608.27394

---

## Evolution Strategies for LLM Reasoning (2608.27351) — Broader Reasoning Coverage than GRPO
cs.LG | Aug 27, 2026

ES emerges as distinct reasoning post-training paradigm, not just memory-efficient alternative to GRPO.

Key findings:
- ES leads to broader reasoning coverage, better exploiting pretrained LLM capabilities
- Verifier-projected Jensen-Shannon diversity across ES population helps higher Pass@K
- Unlike GRPO, ES improves Pass@1 while attaining higher Pass@K
- Sequential GRPO-ES training strategy combines GRPO's Pass@1 strength with ES's Pass@K gains
- Task-performance gains from sparse subset of larger-magnitude updates (functional sparsity)
- Large parameter movement doesn't necessarily lead to catastrophic forgetting
- Larger LLMs require smaller population size for effective ES

Paper: https://arxiv.org/abs/2608.27351

---

## WikiSkill (2608.27454) — Compiling Agent Experience into Persistent Knowledge
cs.AI, cs.CL | Aug 27, 2026

Problem: Insights guiding skill development remain scattered across optimization histories, limiting systematic reuse.

WikiSkill: co-evolves agent skills with persistent knowledge base (wiki). Separates raw execution experience, accumulated knowledge, and executable skills.

Key findings:
- Consistently outperforms state-of-the-art skill-evolution methods
- Skill evolution complements model scaling: larger models benefit more from evolved skills
- Smaller models with skills can outperform substantially larger models without them
- Evolved skills transfer effectively across models and model families
- Skills evolved by other models can outperform self-evolved skills
- Persistent knowledge accumulation in wiki is critical for effective skill evolution

Paper: https://arxiv.org/abs/2608.27454

---

## CorporateBench (2608.27391) — Large-Scale Q&A Benchmarking
cs.AI, cs.CL, cs.IR, cs.LG | EMNLP Findings | Aug 27, 2026

Human-validated multi-task Q&A benchmark approaching conditions LLMs encounter in corporate communication networks.

Scale: evaluation corpora surpassing 230,000 documents, 4 synthetically generated firms (12 to 10,000 employees).

Key finding: Performance degrades significantly as input size approaches realistic scales. Current LLMs struggle with enterprise-scale document reasoning.

Paper: https://arxiv.org/abs/2608.27391

---

## ACE Lens (2608.27260) — What Makes Good Agentic Data?
cs.AI, cs.CL | Aug 27, 2026

Two-level framework: agentic data as factorized object (E, q, τ, v) = (environment, task signal, interaction realization, verifier).

ACE lens: Accuracy-Complexity-divErsity
- Accuracy: feasible support of grounded, internally consistent data
- Complexity: learning mass relative to learner capability and execution config
- divErsity: coverage and redundancy control

Shift toward:
- Execution-grounded accuracy
- Learner-relative complexity
- Diversity beyond surface variation or dataset size

Central challenge: continually allocate valid, informative, and non-redundant experience as agents and environments evolve.

Paper: https://arxiv.org/abs/2608.27260
