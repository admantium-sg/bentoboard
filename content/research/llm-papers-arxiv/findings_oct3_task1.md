# Task 1 Findings: arXiv Papers — Oct 3, 2026
# arXiv cs.CL/cs.LG/cs.AI papers (below 2610.02040 range, not covered in Oct 2 report)

## Key Papers Found

### 1. UBE: Universal Byte-Level Encoding — UTF-8/UTF-16 Routing
**arXiv:2610.01984** (Oct 1, 2026) — cs.CL, cs.LG | NeurIPS 2026

- Byte-level BPE (BBPE) tokenizers cover all Unicode but create cross-script disparities: 3-4 byte characters in scripts like Arabic, Chinese, Thai cost more tokens than Latin before merges apply (encoding floor problem)
- Universal Byte-Level Encoding (UBE): dual-alphabet tokenizer routing 1-2 byte UTF-8 chars through UTF-8 path, 3-4 byte UTF-8 chars through UTF-16 path — lowers encoding floor for high-premium scripts without raising cost for already-efficient spans
- Only changes byte representation presented to BPE; merge rules and exact decoding preserved; composes with alternative boundary policies
- Unicode 17 audit: exact round-trip of all scalar values and all normalization/grapheme-break/emoji test suites
- Intrinsic evaluations: reduces dispersion in English-normalized token-count ratios; multilingual LM experiments match BBPE quality
- Key insight: cross-lingual token-budget equity is a solvable tokenizer design problem, not an inherent property of Unicode — UTF-16 routing selectively corrects the worst imbalances
- Paper: https://arxiv.org/abs/2610.01984

### 2. Harness Annealing: Teaching Agents to Internalize Control Decisions
**arXiv:2610.01235** (Oct 1, 2026) — cs.CL

- Language agents rely on external harnesses for control decisions (what to investigate, whether to revise, when to stop) — harness-supported experience improves task performance but leaves control decisions dependent on runtime intervention
- HAT (Harness Annealing Training): explicit control supervision + curriculum over teacher trajectories collected under progressively weaker harnesses
- 9B and 35B models on SWE-QA and SWE-QA-Pro: annealed checkpoints operating with tools alone score close to their starting checkpoints deployed with full harness
- Benefits vary with model scale and deployment configuration; further annealing does not uniformly improve
- Key insight: harness-supported experience can teach models to assume specified control responsibilities — reducing runtime control requirements without sacrificing task performance
- Paper: https://arxiv.org/abs/2610.01235

### 3. ARCCS: Automated Regulatory Compliance Checking System
**arXiv:2610.01345** (Oct 1, 2026) — cs.CL | EMNLP 2026 System Demonstrations

- ARCCS: end-to-end, agentic, regulation-agnostic Legal NLP system for compliance checking
- Decomposes raw regulatory text into atomic, traceable requirements; evaluates target documents against them using retrieved evidence, confidence scores, human-interpretable justifications
- GDPR policy-document evaluation: LLM judges find ARCCS decisions and justifications legally and evidentially consistent in 96.67% of cases
- EU public-procurement benchmark (>1,200 rule checks): 98.8% accuracy in violation detection
- First fully open-source system for end-to-end regulatory compliance checking and auditable report generation
- Key insight: atomic requirement decomposition + evidence grounding enables truly regulation-agnostic compliance checking — system works across varying regulatory structures
- Paper: https://arxiv.org/abs/2610.01345

### 4. AGO AI Quality Gate: Evidence-First Release Decisions for RAG
**arXiv:2610.01218** (Oct 1, 2026) — cs.CL | NFMCP 2026, ECML PKDD 2026 Workshops

- Enterprises adopting RAG face release decisions (promote/revise/block) with incomplete evidence from fallible LLM judges
- AGO: four-state decision model (treats missing data and judge errors as explicit outcomes) + layered scoring + stratified beta-binomial gate + mandatory meta-evaluation of LLM judge
- On RAGBench (100k annotated RAG traces): GPT-4.1-nano detects non-adherent answers barely above chance (AUROC 0.603), despite flawless protocol output; GPT-4o reaches 0.783 but per-domain still ranges 0.62-0.88
- Under regression: AGO reduces unsafe promotion to 22.2%-35.1% vs 29.3%-41.8% for naive gate
- Key insight: LLM judge quality varies dramatically by domain and must be measured per engagement — point estimates alone are not a release decision
- Paper: https://arxiv.org/abs/2610.01218

### 5. Cross-Lingual Alignment for Decoder-Only Models via MoE Routers
**arXiv:2610.01921** (Oct 1, 2026) — cs.CL, cs.AI

- Cross-lingual contrastive learning enables alignment in encoder models via shared hidden representations; impossible for decoder-only LLMs due to varying multilingual tokenization
- New approach: use MoE router outputs as alignment targets — routers pool better over many tokens, enabling reliable sequence-level cross-lingual comparisons
- Controlled continual pre-training on 4 open-source MoEs: incorporating routing loss aligns underlying hidden representations across languages AND improves multilingual performance
- Key insight: MoE routers are a viable cross-lingual alignment mechanism for decoder-only models — router outputs provide a shared representational space despite tokenization differences
- Paper: https://arxiv.org/abs/2610.01921

### 6. What Makes Something Hard(er)? Explaining Question Difficulty in LLMs
**arXiv:2610.01627** (Oct 1, 2026) — cs.CL, cs.AI

- Existing difficulty estimation yields only a single number, no account of underlying factors making questions hard
- Data-driven approach: estimates difficulty via IRT from LLM responses → LLM generates candidate hypotheses for what makes easy vs hard questions differ → hypotheses validated on held-out questions
- Three datasets (mathematical, logical, commonsense reasoning): hypotheses are interpretable and predictive — competitive with black-box regressors on their own; improve regressors further as additional features
- Causal validation: editing questions according to a hypothesis shifts measured difficulty in expected direction — hypotheses are causally valid, not post-hoc
- Key insight: question difficulty has discoverable causal factors — turning descriptive difficulty scores into actionable statements about what makes questions hard
- Paper: https://arxiv.org/abs/2610.01627

### 7. MatRAG: Matryoshka Hierarchical RAG for Multi-Hop QA
**arXiv:2610.01767** (Oct 1, 2026) — cs.CL, cs.IR

- Multi-hop RAG must balance retrieval quality vs computational cost (expensive KG/LLM summarization at indexing, iterative LLM-driven retrieval at query time)
- MatRAG: aligns semantic hierarchy of clustering with Matryoshka Representation Learning (MRL) — organizes corpus into DAG of clusters at progressively coarser granularity, each level indexed by lower Matryoshka dimension
- Pairs iterative top-down DAG traversal with entity-driven mechanism controlling hop budget and re-ranking candidates
- Three multi-hop QA benchmarks vs 7 baselines: outperforms strongest competitors in retrieval quality; reduces indexing costs (avoids KG construction + LLM summarization) and query costs (dimension-aware similarity)
- Key insight: Matryoshka representation structure provides a natural fit for hierarchical retrieval — progressive dimensionality reduction at different hops matches the problem structure
- Paper: https://arxiv.org/abs/2610.01767

### 8. Clinical Reasoning Rubric Landscape: 6-Dimension Review
**arXiv:2610.01938** (Oct 1, 2026) — cs.CL, cs.AI

- Structured narrative review mapping three literatures: medical education assessment instruments, clinical LLM benchmarks (2023+), general-domain methods for long-form generation evaluation
- Six dimensions examined: problem representation, temporal synthesis, differential/management reasoning, counterfactual reasoning, calibrated uncertainty, reasoning faithfulness
- No single instrument covers all six; problem representation and differential/management reasoning reasonably covered; TIMER-Eval targets temporal synthesis; ER-Reason assesses sequential diagnostic belief updating
- Faithfulness is weakest dimension — only one clinical causal-ablation study on MCQs found
- Proposed design: binary rubric items, separate completeness/correctness scores, case-specific importance weighting with non-compensable safety caps, temporal order-consistency checks
- Key insight: clinical LLM reasoning evaluation is fragmented across six dimensions with no unified instrument — faithfulness and calibrated uncertainty are the critical gaps
- Paper: https://arxiv.org/abs/2610.01938

### 9. Asymptotics of LM Alignment with Memory
**arXiv:2610.01828** (Oct 1, 2026) — cs.CL, cs.IT

- KL-constrained RL alignment requires knowledge of LM distribution and is computationally expensive; best-of-n sampling requires only sampling from LM
- Prior work established asymptotic closeness between these two methods for i.i.d. token sequences — but LMs have memory (Markovian output)
- Extends asymptotic closeness result to Markovian sequences; for finite sequences (m=1), provides complete characterization of when KL-divergence between the two methods is zero
- Key insight: alignment theory now accounts for LM memory — results for i.i.d. models don't directly transfer to modern autoregressive LMs with Markovian output properties
- Paper: https://arxiv.org/abs/2610.01828

## Sources
- https://arxiv.org/abs/2610.01984
- https://arxiv.org/abs/2610.01235
- https://arxiv.org/abs/2610.01345
- https://arxiv.org/abs/2610.01218
- https://arxiv.org/abs/2610.01921
- https://arxiv.org/abs/2610.01627
- https://arxiv.org/abs/2610.01767
- https://arxiv.org/abs/2610.01938
- https://arxiv.org/abs/2610.01828
