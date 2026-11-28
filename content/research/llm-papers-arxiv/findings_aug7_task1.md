# Findings — August 7, 2026 | Task 1: arXiv Papers (cs.CL/cs.LG/cs.AI)

## Source: arXiv cs.CL new listings, August 6-7, 2026 + Cool Papers

---

### 1. SCOPE: Selective Context Preference Optimization
**arXiv:2608.06377** (August 6, 2026) — cs.CL, cs.AI, cs.LG
- Problem: training models to resist context signals hides a failure mode — models that ignore all context look robust but are useless when context is worth trusting
- MIST benchmark: 4 matched conditions per item — clean, misleading, correct-context, irrelevant-context
- SC2W metric: paired counting of how often misleading signal flips clean-correct answer to wrong
- SCOPE: mines clean-correct/misleading-wrong failures + DPO over matched 4-condition preference pairs
- Result: substantially reduces SC2W while preserving accuracy on clean/correct/irrelevant context
- Key insight: models should be judged on selective trust, not resistance alone — universal susceptibility across all models tested
- Paper: https://arxiv.org/abs/2608.06377

---

### 2. The Bitter Lesson of Tool Calling
**arXiv:2608.06370** (August 6, 2026) — cs.CL
- Compares programmatic tool calling (PTC — Python stubs, single agent turn) to native JSON tool calling across 14 models on BFCL v4
- PTC matches or exceeds JSON in 11/14 models; GPT-5.6 family: +10.6% with PTC
- 13/14 models: PTC matches or outperforms under parallel fan-out
- Context rot: PTC holds stable while baseline degrades 2.3% on average
- Key insight: programmatic tool calling is a viable, robust alternative to JSON — performance tracks model capability across release generations
- Paper: https://arxiv.org/abs/2608.06370

---

### 3. RP-OPSD: Multilingual Reasoning Transfer via Reasoning Pivots
**arXiv:2608.06347** (August 6, 2026) — cs.CL
- Problem: OPSD provides dense token-level supervision but doesn't prioritize reasoning-critical signals for cross-lingual transfer
- Observation: target-language reasoning = surface text + reasoning pivots (decisions that advance/redirect reasoning)
- RP-OPSD: uses distributional shift between teacher views with/without English reference as proxy for reasoning-pivot guidance
- Concentrates privileged distillation on reasoning-control and state-update tokens; downweights surface-realization tokens
- 17 languages, multiple difficulty levels — outperforms strong multilingual reasoning baselines and OPSD variants
- Key insight: reasoning pivots are the critical distillation signal for multilingual transfer — not all token-level supervision is equal
- Paper: https://arxiv.org/abs/2608.06347

---

### 4. NeSy-RAG: Neuro-Symbolic RAG for Explainable QA
**arXiv:2608.06292** (August 6, 2026) — cs.CL, cs.SC
- Generates Prolog modules from retrieved text chunks — predicates encode Boolean claims with user-fact dependencies
- Joint NL-code embeddings for predicate retrieval and composition into Prolog queries
- Symbolic knowledge-gap detection: identifies missing user facts affecting query outcome → triggers follow-up interactions
- ShARC benchmark: NeSy-RAG 61.1% vs same-model RAG baseline 42.8% (no domain-specific training)
- Key insight: opaque RAG reasoning can be made attributable via neuro-symbolic grounding — deterministic answers + transparent execution traces linking each step to source
- Paper: https://arxiv.org/abs/2608.06292

---

### 5. SiPE: Syntax-Informed Positional Embeddings
**arXiv:2608.06111** (August 6, 2026) — cs.CL, cs.AI
- Learns lightweight syntactic prior from dependency parses, injected across all 3 PE families (absolute, relative, rotary) for both encoders and decoders
- For autoregressive decoders with relative PE: multiplicative coupling with relative-position term outperforms all other injection strategies
- For encoders: best added directly to input embeddings
- Results: SyntaxGym +10.3%, perplexity -9.0%, GLUE +8.2%
- Unlike prior methods, SiPE conditions on single parse at inference (no marginalization) — new Pareto frontier between syntactic supervision and inference cost
- Key insight: syntactic structure is learnable as a lightweight prior and should inform positional encoding, not just be discarded at runtime
- Paper: https://arxiv.org/abs/2608.06111

---

### 6. GB/T-Bench: Rule-Intensive National Standard Document Review
**arXiv:2608.06312** (August 6, 2026) — cs.CL
- First benchmark for structured review of national standard documents (China GB/T standards)
- GB/T Review Taxonomy: 25 error types across document structure, scope alignment, normative modality, terminology consistency, cross-section references
- 7,306 counterfactual review error instances from 488 documents
- GB/T-Reviewer multi-agent framework: best model achieves 0.3280 CMCS vs 0.6640 expert; GB/T-Reviewer raises to 0.5094
- Key insight: substantial human-LLM gap in rule-intensive document review; structured skill coordination across review dimensions outperforms single-agent approaches
- Paper: https://arxiv.org/abs/2608.06312

---

### 7. SteerWrite: Training-Free Token-Level Steering for Personalized Co-Writing
**arXiv:2608.06069** (August 6, 2026) — cs.CL
- Training-free adaptation to specialized domains — no gradient updates needed
- Enables fine-grained, token-level steering for personalized co-writing (beyond coding)
- SOTA across diverse datasets, metrics, and models; significantly reduces human editing effort
- Key insight: retrieval-augmented generation fails at token-level steering; fine-tuning is costly; SteerWrite bridges this gap without either cost
- Paper: https://arxiv.org/abs/2608.06069

---

### 8. Right Answer, Wrong Method: Shortcut Hacking on Science Benchmarks
**arXiv:2608.02442** (August 3, 2026) — cs.AI, cs.CL | arxivTLDR Weekly Top 10
- Solution Hacking: LLM reaches correct answer through invalid shortcuts (numerical search, enumeration, guessing, answer-first verification) instead of valid derivation
- Hacking rate: 2.2% common → 28.3% Olympiad → 37.4% HLE (Frontier Science)
- 8.2-44.1% of credited correct answers across frontier models are hacked solutions
- Anti-hacking strategies: automatic judge + test-time instructions — suppressing shortcuts reduces reported accuracy while having smaller effect on non-hacked accuracy
- Key insight: answer-only evaluation systematically overestimates scientific reasoning capabilities of frontier LLMs — process verification is essential
- Paper: https://arxiv.org/abs/2608.02442

---

### 9. Test-Time Scaling: Systematic Framework for Inference Regimes
**arXiv:2608.04001** (August 4, 2026) — cs.LG, cs.AI | arxivTLDR Weekly Top 10
- Three structural regimes: single-trajectory sequential scaling, leaf-level scaling with terminal reduction, prefix-level scaling
- Evaluates entire inference system, not just candidate quality
- Evaluation profile with coordinates and functionals recovering/bounding common repeated-sampling metrics
- Reproducibility requirements distinguishing exact replay from distributional reproducibility
- Releases 2B+ full reasoning traces with progressively richer verifier and token-level signals
- Key insight: "test-time scaling" is not a single concept — conflation of structurally different inference algorithms makes results incomparable across studies
- Paper: https://arxiv.org/abs/2608.04001
