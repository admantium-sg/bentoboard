# Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — May 31, 2026

## Task 1: Chain-of-Thought, Prompt Engineering, Efficiency

---

### CONF-KV: Confidence-Aware KV Cache Eviction with Mixed-Precision Storage
**arXiv:2605.24786** (May 24, 2026) — cs.LG, cs.AI
- Long-horizon LLM inference makes KV cache the dominant GPU memory consumer
- Existing eviction policies use static recency windows or historical attention — leave model's current uncertainty unused
- CONF-KV: converts next-token distribution into confidence score to choose per-step cache budget
- Retains more context when model is uncertain, prunes aggressively when confident
- Blockwise online-softmax attention, mixed FP16/INT8 storage, pyramidal per-layer budget variant
- Near footprint of fixed 512-token sliding window while remaining within 1.5-2.1 perplexity points of full KV
- Needle-in-a-Haystack up to 32K tokens: 91.4% retrieval accuracy vs 53.8% (sliding windows) and 80.6% (H2O)
- VisualWebArena: 95.3% of full-KV success at 2.8x lower peak memory
- **Key insight**: Model uncertainty is an untapped signal for cache management — uncertainty-guided eviction outperforms static and history-based policies

---

### RePoT: Recoverable Program-of-Thought via Checkpoint Repair
**arXiv:2605.30052** (May 28, 2026) — cs.SE, cs.AI, cs.CL
- One-shot Program-of-Thought (PoT) emits Python program — single invalid action silently invalidates trajectory
- RePoT: deterministic verified replay walks plan through environment to first invalid transition, then one LLM call resumes from verified prefix
- Costs at most one extra LLM call on ~14% of problems where PoT fails
- Beats PoT by +3 to +11pp across four closed-model configurations on PuzzleZoo-775
- Peaks at 96.9% vs 86.3% on gpt-5.4-mini-medium
- Derail-550 controlled recovery benchmark: every condition with checkpoint information clears >=30% on GPT-medium and >=70% on Gemini, vs <=3.1% for error-only feedback
- **Key insight**: Checkpoint information, not the specific verified-prefix tail, is the load-bearing recovery signal for Program-of-Thought

---

### CoHyDE: Iterative Co-Training of LLM Rewriter & Dense Encoder for Tool Retrieval
**arXiv:2605.29271** (May 28, 2026) — cs.AI, cs.IR, cs.LG
- Tool retrieval over large API catalogs: user queries are colloquial/underspecified, catalog uses technical API vocabulary
- Contrastive encoder fine-tuning excels when query surface form matches catalog but fails when queries are underspecified
- Zero-shot HyDE is robust to underspecified queries but generates catalog-unaware hypothetical descriptions that degrade well-formed queries
- CoHyDE: encoder and LLM rewriter co-evolve iteratively — encoder retrained with InfoNCE on rewriter's hypothetical descriptions; rewriter preference-aligned via DPO against encoder retrieval scores
- Three rounds: +2.5pp NDCG@5 on standard queries, +6.3pp on held-out vague queries, up to +8pp on hardest vague tier
- **Key insight**: Complementary training approaches must co-evolve — neither alone handles both well-formed and underspecified queries

---

### Confidence-Aware Storage Pattern
**Key pattern from recent papers**: Model-derived confidence signals (next-token distribution for CONF-KV, retrieval scores for CoHyDE) are more effective than static or heuristic approaches. This suggests a broader trend toward uncertainty-guided systems.

---

### Evaluation Engineering: Empirical Study of ML Evaluation Harnesses
**arXiv:2605.24213** (May 27, 2026)
- Empirical study of 57 evaluation harnesses reveals 5-stage harness model
- 16,560 issues classified by workflow stage and root cause
- 41.4% of issues concentrate in Specification stage where harnesses integrate external models, datasets, and scoring judges
- Top root causes: unimplemented features (24.3%), documentation gaps (20.3%), missing input validation (17.2%)
- Environment incompatibility and external dependency breakage account for 36.2% of provisioning issues
- Algorithmic error (25.9%) and validation gap (22.5%) dominate assessment issues
- **Key insight**: Evaluation engineering is a distinct software engineering concern — harness quality directly impacts research reliability

---

### LLM Reliability Study: Procedural State vs Chain-of-Thought
**arXiv:2605.02028** (Stanford, May 3, 2026)
- LLMs perform strongly on benchmarks but unclear whether success is general logical competence, learned procedure application, or pattern matching mimicking rule execution
- Chain-of-Thought provides structural scaffolding for semantic reasoning but fails to guarantee rule execution
- Foundational procedural state is lost rather than obscured — longer generation cannot reliably reconstruct it
- **Key insight**: CoT improves reasoning but does not guarantee procedural reliability; pattern matching vs genuine competence gap remains

---

### SAERL: Guiding LLM Post-training Data Engineering with Model Internals from Sparse Autoencoders
**arXiv:2605.27354** (May 29, 2026)
- Uses Sparse Autoencoder (SAE) to model three intrinsic data properties: diversity, difficulty, quality
- Each property grounds concrete data engineering operation: SAE-space clustering, difficulty-weighted sampling, quality-filtered curation
- **Key insight**: Model internals provide actionable signals for data engineering — SAE features enable principled post-training data selection

---

## Sources
- https://arxiv.org/abs/2605.24786
- https://arxiv.org/abs/2605.30052
- https://arxiv.org/abs/2605.29271
- https://arxiv.org/abs/2605.24213
- https://fanlab.stanford.edu/wp-content/papercite-data/pdf/dai2026reliability.pdf
- https://arxiv.org/abs/2605.27354
