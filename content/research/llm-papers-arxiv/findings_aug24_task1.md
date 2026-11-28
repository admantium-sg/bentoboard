# Findings: Task 1 — arXiv Papers (CoT, Prompt Engineering, Efficiency)
**Date:** 2026-08-24
**Sources:** arXiv cs.CL new listings (Aug 21, 24), arXiv TLDR Weekly Aug 24, papers.cool

## Papers Found

### 1. Memory Augmentation Unlocks Efficient Chain-of-Thought Reasoning
**arXiv:2608.21265** (Aug 21, 2026) — cs.CL

- Formalizes the **Context-Generation Substitution Law**: explicit reasoning context substitutes for decode-time generation
- Proposes **Memory-Augmented Compression**: constructs reusable reasoning memories from historical traces, retrieves them as prefill-side scaffolds during inference
- Key advantage: memories summarize reusable reasoning patterns, key constraints, and critical operations — not raw demonstrations
- Compatible with token-level, reasoning-trace-level, and inference-state compression
- Accuracy gains over Chain-of-Draft (CoD): GSM8K +21.4pp, MATH +28.0pp, BBH +29.5pp, MMLU-Sci +6.61pp
- Latency speedup: 1.14–1.49× over standard CoT
- **Key insight:** CoT compression + memory scaffolds can recover most of full CoT quality while cutting latency — training-free approach
- Paper: https://arxiv.org/abs/2608.21265

### 2. Prompt-Model Interaction Reaches the Fixed Points
**arXiv:2608.21315** (Aug 21, 2026) — cs.CL

- Studies prompt effects using a task-free structural readout: the fixed-point structure of the short-window argmax map
- Nine tokens of conditioning moves fixed-point fraction across most of its range; changes four-way structural class and reorders models
- Instruction tuning worth 60.5 IFEval points moves the structural class by zero — alignment ≠ structural change
- Attention-sink dominance predicts sign of shift on 2/5 models (chance level)
- **Key insight:** Prompt effects are fundamentally about the prompt-model pair, not the prompt alone — existing phenomenological factors fail under widened sampling. On this readout, the unit of explanation is the pair.
- Paper: https://arxiv.org/abs/2608.21315 | Code: https://github.com/nicoveraz/token-lattice-ca

### 3. EnSI-RAG: Entity-Structure-Indexed Retrieval-Augmented Generation
**arXiv:2608.21252** (Aug 21, 2026) — cs.CL, cs.AI, cs.DB, cs.IR

- Addresses long-document QA where evidence spans multiple entities and their relationships
- Constructs query-independent entity-centered index: (entity, type, category, value) records with passage links
- Separates evidence localization from answer synthesis; preserves traceable source evidence
- +6.62pp average accuracy over published baselines on Loong and Oolong benchmarks
- **Key insight:** Entity-structure indexing beats raw chunk embedding similarity for multi-hop evidence across documents
- Paper: https://arxiv.org/abs/2608.21252 | Code: https://github.com/RamonMeng/EnSI-RAG

### 4. PertMind: Eliciting Emergent Biological Reasoning via RL on Cellular Perturbation Data
**arXiv:2608.16419** (Aug 17, 2026) — cs.LG, cs.AI | TLDR #1 Paper of the Week

- Uses cellular perturbation atlases as RL environments — gene response measurements provide computable rewards
- Combines supervised initialization with gene-, pathway-, and format-level RL signals
- Transfers without task-specific training to: reverse perturbation identification, double-perturbation reasoning, phenotypic-screen prioritization, biological process interpretation
- Generates competitive gene/cell/donor representations across multiscale downstream tasks
- **Key insight:** Perturbation-derived RL offers scalable route to transform experimental atlases into training environments for domain-specific reasoning — without manual curation
- Paper: https://arxiv.org/abs/2608.16419 | HF Model: https://huggingface.co/tzcfly/PertMind

### 5. Move by Move: Measuring and Steering How LLMs Conduct Psychotherapy
**arXiv:2608.21325** (Aug 21, 2026) — cs.CL

- Introduces ontology of ten therapeutic moves (grounded in MULTI-60 inventory, validated by 5 licensed psychologists)
- Models over-use inquiry up to 3× human rate, neglect psychoeducation, strongly context-anchored
- Exposing the ontology as tools roughly halves mean deviation from human move distribution; improves turn-level alignment by 7–9pp, no fine-tuning
- **Key insight:** Structured taxonomies of LLM behavior enable targeted steering without retraining
- Paper: https://arxiv.org/abs/2608.21325
