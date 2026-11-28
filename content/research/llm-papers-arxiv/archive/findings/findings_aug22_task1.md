# Findings - Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI) — Aug 22, 2026

## Papers from Aug 21 listing not covered in Aug 21 daily report

### 1. OenoBench: Wine-Domain Knowledge Benchmark for LLMs
**arXiv:2608.20106** (Aug 20, 2026) — cs.CL
- 3,266 MC questions across 6 pillars (regions, grape varieties, viticulture, winemaking, producers, business) and 4 difficulty tiers
- Built from 38,104 atomic, source-anchored facts via provenance-verified scrapers (INAO, TTB, OIV, peer-reviewed journals, Wikipedia/Wikidata)
- LLM-driven pipeline: models reformat/audit but never serve as source of truth
- 16 frontier configs evaluated: accuracy spans 53%-84%, led by o3 at 83.6%
- Reasoning-mode lift: DeepSeek R1 +6.8pp; absent in Claude Opus and Gemini Pro
- Key insight: Frontier open-weight models share Pareto frontier with proprietary reasoning models on domain-specific knowledge
- **Paper:** https://arxiv.org/abs/2608.20106

### 2. FlashPrefill V2: Block-Sparse Prefill Attention for Long-Context LLM Serving
**arXiv:2608.19758** (Aug 20, 2026) — cs.CL
- Evolves FlashPrefill from prototype toward production: mean correction suppresses approximation error, redesigned sparse operator with PackGQA + warp specialization + ping-pong pipelining
- Aligns with FlashAttention-3/4; supports FP8 inference and paged KV cache + continuous batching (SGLang-compatible)
- Up to 47.26x speedup over FlashAttention-2 at 128K context (FP8), 27.19x (BF16), 30.49x vs FA3/4 dense baseline (FP8)
- Key insight: Production-grade sparse prefill now viable — enables 128K+ context at practical inference speeds
- **Paper:** https://arxiv.org/abs/2608.19758

### 3. UniLang: Unified Generative Framework for Machine-Native Symbols in LLMs
**arXiv:2608.19529** (Aug 20, 2026) — cs.CL, cs.AI
- Bridges discrete machine-native symbols (compact, structured) with LLM token space — treats symbols as first-class generative units alongside text tokens
- Expands LLM vocabulary + embedding space with grounded symbolic representations; jointly models text + symbolic tokens under single autoregressive objective
- Evaluated on sequential recommendation and legal precedent prediction — outperforms strong baselines
- Key insight: Structured prediction and language modeling can be unified — no verbalization or task-specific architectures needed
- **Paper:** https://arxiv.org/abs/2608.19529

### 4. Hear2Act: Prosody-Aware Evaluation for Text+Audio Assistants
**arXiv:2608.19515** (Aug 20, 2026) — cs.CL
- 480 persona-grounded scenarios testing whether prosodic cues change downstream decisions vs explicit lexical feedback
- Without prosody: 14.6% → 15.3% optimal-solution rate with audio. With explicit intermediate prosody representation: rises to 39.6% (vs 40.7% ground truth)
- Contrast disappears with explicit lexical feedback — prosody matters only when lexical evidence is insufficient
- Key insight: Audio-capable LLMs can recover prosodic information but don't reliably carry it into action without explicit intermediate representation
- **Paper:** https://arxiv.org/abs/2608.19515

### 5. Frontier TCS Research Benchmark: Autoformalization is the Bottleneck
**arXiv:2608.20153** (Aug 20, 2026) — cs.CL
- 175 instances from STOC/FOCS/SODA/COLT 2025-2026 with expert-verified Lean formalizations
- Autoformalization: best model only 11.5 (Pass@1) vs 28.6 Pass@8 for human-provided formal statements
- Automated TCS research framework: 64 generated claims → 6 pass expert evaluation + proof verification
- Key insight: Limited research taste is a major barrier beyond formalization — autonomous TCS research still far from reliable
- **Paper:** https://arxiv.org/abs/2608.20153

### 6. Patient-Context Agentic Framework: Mitigating Health Query Ambiguity
**arXiv:2608.19875** (Aug 20, 2026) — cs.CL, cs.AI
- Framework between patient query and downstream LLM: interprets query, uses knowledge graph to construct hypotheses, identifies missing patient-context, asks targeted follow-up questions
- Diagnosis retrieval: +57.1pp Top-1 accuracy, +77.7pp Recall@5 vs direct prompting
- Dietary-safety classification: improved accuracy across all 5 models, highest MCC for 4/5
- Key insight: Ambiguity mitigation via structured hypothesis-followup dramatically outperforms direct answering for underspecified health queries
- **Paper:** https://arxiv.org/abs/2608.19875

### 7. ReCache: Efficient KV Cache Reuse for Tool-Augmented LLM Agents
**arXiv:2608.19662** (Aug 20, 2026) — cs.CL
- Agents repeatedly encode tool/skill schemas that recur across requests — standard prefix caching fails
- ReCache: resource-wise attention (removes cross-resource interactions), layer-KV-head-group routing, structural + semantic pruning
- Matches dense invocation performance (82.3% vs 82.4% Inv-F1), 3.655x time-to-first-token speedup
- 92.43% KV memory reduction, 1.423x attention acceleration
- Key insight: Separating reusable schema encoding from selective resource access enables practical agentic inference at scale
- **Paper:** https://arxiv.org/abs/2608.19662
