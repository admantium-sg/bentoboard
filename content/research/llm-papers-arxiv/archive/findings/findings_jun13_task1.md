# Findings: Task 1 - arXiv Papers (CoT, Prompt Engineering, Efficiency)
**Date:** 2026-06-13
**Researcher:** DIAC cron agent
**Working Directory:** /home/devcon/.openclaw/shared-workspace/research/llm-papers-arxiv

## Papers Analyzed
104 cs.CL papers + 193 cs.LG papers from June 12, 2026 (all submissions from June 12; no June 13 submissions yet as of check time).

## Key Findings

### 1. Epiphenomenal CoT in Large Reasoning Models
**arXiv:2606.13603** (June 12, 2026) — cs.LG, cs.AI, cs.CL
- Chain-of-thought reasoning crosses a "commitment boundary" — a sharp transition from transient intermediate guesses to a stable, high-confidence answer
- This transition often happens in a single step, well before the reasoning block ends
- Followed by epiphenomenal CoT steps that leave the final answer probability unaltered
- Attention probes can linearly decode answer-formation stages from intermediate reasoning steps with high accuracy
- Early-exit at commitment boundary reduces CoT length up to 55% with negligible performance impact
- Key insight: Most CoT tokens are computational waste — models generate them because they don't know when they're "done"

### 2. SkillCAT: Training-Free Skill Self-Evolution for LLM Agents
**arXiv:2606.13317** (June 11, 2026) — cs.CL
- Contrastive Causal Extraction (CCE): compares same-task success/failure trajectory pairs to identify outcome-explaining evidence
- Assessment-Augmented Evolution (AAE): replays candidate patches on source-task clones, keeps only improving patches
- Topology-Aware Task Execution (TTE): compiles evolved skills into routable sub-skill topology, loads only relevant capability nodes at inference
- Up to 40.40% average score improvement over baselines without any model training
- Key insight: Separating skill evolution into extract/assess/execute stages enables training-free agent improvement

### 3. MemRefine: LLM-Guided Memory Compression for Long-Term Agents
**arXiv:2606.13177** (June 11, 2026) — cs.CL, cs.AI, cs.LG
- Formulates storage-budgeted memory management: keep memory within fixed budget while preserving useful information
- Uses surface similarity only to propose candidate pairs; defers delete/merge/preserve decisions to LLM judge based on factual content
- Iterates until budget is met
- Consistently meets target budgets while preserving downstream performance
- Key insight: Similarity-based deletion is naive — factual content value requires LLM-level judgment

### 4. G-Long: Graph-Enhanced Memory for Efficient Long-Term Dialogue
**arXiv:2606.13115** (June 11, 2026) — cs.CL, cs.AI
- Fine-tuned small LM (sLM) for structured triplet extraction + associative retrieval
- Attention-aware importance scoring using cross-attention signals of T5 summarizer to identify salient memories
- Up to 9.8% response quality improvement on MSC, 40.8% retrieval recall improvement on LME
- Significantly reduces computational overhead vs unstructured approaches
- Key insight: Graph structure + small model = efficient long-term memory without large-model overhead

### 5. NTS-CoT: Chain-of-Thought for Timeline Summarization
**arXiv:2606.13171** (June 11, 2026) — cs.CL, cs.AI
- Three CoT modules: Element-CoT (essential news elements), Date Selection (temporal saliency + event prominence), Causal-CoT (causal inference for omission reduction)
- Addresses two hallucination types: unfaithful content and information omission in date-event summarization
- Outperforms state-of-the-art baselines on three TLS benchmarks
- Key insight: CoT structured reasoning directly reduces specific hallucination types in summarization

### 6. Layer-Resolved Optimal Transport for Hallucination Detection
**arXiv:2606.13216** (June 11, 2026) — cs.CL, cs.LG — ICML Mechanistic Interpretability Workshop
- Wass-to-Unif and Wass-to-Data are complementary OT detectors specialized across hallucination types
- Detection concentrated in decoder layers L1-L4; L5 is anti-predictive for subtler hallucination types
- Hallucinated translations lack the exploratory attention phase present in correct translations from first decoding step
- OT detector transfers to summarization but with principled limits: unfaithful summaries can attend correctly while misrepresenting content
- Key insight: Hallucination detection via OT is layer-dependent and fundamentally limited when failures occur downstream of attention

### 7. SCSB: 96% Ensemble Compression via Sparse Posteriors
**arXiv:2606.13589** (June 12, 2026) — cs.LG
- Simplex-Constrained Sparse Bagging: joint ensemble pruning and calibration over probability simplex
- Addresses L1-simplex paradox (L1 norm constant on simplex, fails to prune) via concave quadratic penalty
- Up to 96% ensemble compression, linear inference speedups, superior probability calibration
- Model-agnostic; works with Random Forests, Bagged SVMs, Bagged Neural Networks
- Key insight: Uniform voting prior wastes ensemble diversity — sparse, competence-weighted ensembles are more efficient

### 8. EvoBrowseComp: Evolving Benchmark for Search Agents
**arXiv:2606.13120** (June 11, 2026) — cs.CL
- Three-agent collaborative framework: QA synthesis + information filtering + high-level guidance
- 400 English + 400 Chinese contamination-free complex questions via live-web traversal
- Fully automated synthesis enables regular updates to prevent data contamination
- Establishes scalable paradigm for auto-updatable, high-difficulty benchmarking
- Key insight: Static benchmarks are contaminated by parametric memorization; live-web benchmarks are essential for genuine agent evaluation

### 9. PolyAlign: Conditional Human-Distribution Alignment
**arXiv:2606.13227** (June 11, 2026) — cs.CL
- Bucket-Aware SFT balances optimization across heterogeneous bilingual buckets (language, interaction track, response family, length)
- Human-Distribution Preference Optimization (HDPO) regularizes preference learning using critic-estimated distance to bucket-specific human support
- Improves conditional naturalness and distributional faithfulness while preserving task utility
- Key insight: Global alignment suppresses natural human response variation; interaction-aware alignment is the right objective

### 10. SICI: Semantic-Pragmatic Complexity Reveals Phase Transitions in Stance Detection
**arXiv:2606.13189** (June 11, 2026) — cs.CL
- Seven-dimensional complexity measure predicts LLM accuracy better than surface proxies
- LLM errors exhibit phase-transition structure: low-complexity → over-attribution; intermediate → unstable boundary; high-complexity → abstention
- 15-method intervention study: prompting, retrieval, and debate shift models along attribution-abstention axis rather than removing the bottleneck
- Key insight: There's a fundamental complexity threshold beyond which more reasoning/information doesn't help — models just abstain

### 11. MÖVE: Holistic LLM Benchmark for German Public Sector
**arXiv:2606.13111** (June 11, 2026) — cs.CL
- Evaluates 39 models across performance (summarization, QA, topic extraction) and governance (hallucination, energy consumption, provider transparency, constitutional values)
- 10 German-language datasets including gold/silver standard public administration domains
- No single model dominates all criteria; model size alone is poor predictor of quality
- Key insight: Governance criteria (energy, transparency, alignment) are orthogonal to performance — must be evaluated separately

### 12. FORGE: Reasoning Models More Vulnerable to Content Pollution
**arXiv:2606.13610** (June 12, 2026) — cs.CL, cs.AI
- Single polluted page: fooled rates up to 27%; top-3 replacement: 73.8%
- Reasoning generates spurious social proof to justify false recommendations
- Key insight: Reasoning models are MORE vulnerable to content pollution, not less — they generate confident justifications for false content

### 13. Adversarial Repackaging: Gaming AI Peer Review
**arXiv:2606.13044** (June 11, 2026) — cs.CL
- 75.1% attack success rate using only presentation-level revisions (abstract, framing, related work, discussion)
- No changes to methods, experiments, figures, or numerical results
- Related-work repositioning and analytical discussion expansion substantially outperform surface edits
- Key insight: AI reviewers can be gamed without changing scientific evidence — presentation framing is a serious vulnerability

### 14. RogueAI: Reverse Turing Test for AI Deception Detection
**arXiv:2606.13310** (June 11, 2026) — cs.CL, cs.HC
- One-on-two interrogation game: player identifies deceptive AI among two indistinguishable agents
- Deceptive agent carries reliable linguistic signature (differential helpfulness, brevity, hedging) — simple heuristic exploits at 75.6% accuracy
- Yet human players achieve only 56.6% — consistent with ignoring the most diagnostic signal
- Key insight: Humans are poor at detecting AI deception even when signals are objectively present — evaluation harnesses need to account for human interpretability gaps

### 15. HyPE: Hypergraph Persona Encoding
**arXiv:2606.13142** (June 11, 2026) — cs.CL
- Organizes persona elements into hypergraph with hyperedges induced by shared category labels
- Persistent Edge Embeddings (PEE): lightweight per-category learnable priors fused into HyperGCN message-passing
- Outperforms sentence-level pooling baselines across GPT-2, LLaMA-3.2-3B, Qwen2.5-3B
- Key insight: Persona attributes share topical categories — modeling high-order relations via hypergraphs captures structure that flat representations miss

## Sources
- https://arxiv.org/abs/2606.13603
- https://arxiv.org/abs/2606.13317
- https://arxiv.org/abs/2606.13177
- https://arxiv.org/abs/2606.13115
- https://arxiv.org/abs/2606.13171
- https://arxiv.org/abs/2606.13216
- https://arxiv.org/abs/2606.13589
- https://arxiv.org/abs/2606.13120
- https://arxiv.org/abs/2606.13227
- https://arxiv.org/abs/2606.13189
- https://arxiv.org/abs/2606.13111
- https://arxiv.org/abs/2606.13610
- https://arxiv.org/abs/2606.13044
- https://arxiv.org/abs/2606.13310
- https://arxiv.org/abs/2606.13142
