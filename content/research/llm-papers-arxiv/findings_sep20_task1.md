# Findings — Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI)
**Date:** 2026-09-20
**Research focus:** chain-of-thought, prompt engineering, efficiency

## Papers Identified (Sep 17 submissions, checked Sep 20)

### 1. On-Policy Self-Distillation: What Does Privileged Information Add?
**arXiv:2609.20612** (Sep 17, 2026) — cs.CL

**Core Question:** On-policy self-distillation (OPSD) gives a frozen teacher access to answers or worked solutions ("privileged information"). How much does that privileged information actually contribute beyond the distillation itself?

**Methodology:** AMPLE-Math — 5,319 mathematical problems with six reasoning views sharing the same answer. Compare each view with matched reference-free distillation.

**Key Findings:**
- With a thinking-enabled teacher supervising direct-response rollouts, **reference-free distillation accounts for most of Qwen3-1.7B's improvement** under thinking-enabled evaluation, both in-domain and on external benchmarks
- Evidence for additional reference benefit is modest in Qwen, strongest for polished solutions
- Complete traces add ~2 percentage points in SmolLM3-3B at step 50
- **Replacing short direct-response rollouts with long thinking-enabled rollouts turns gains into losses** in both model families — teacher profiles and matched loss interventions confirm this
- **Implication:** The value of a privileged reference is what it adds to cross-mode transfer, not how much of the solution it reveals

**Significance:** Quantifies exactly how much "thinking-enabled teacher" actually helps vs. plain self-distillation — nuanced answer: mostly distillation, privileged info adds less than assumed.
**Paper:** https://arxiv.org/abs/2609.20612

---

### 2. SAFARI: Industrial Benchmark for LLM-Assisted Hazard Analysis (EMNLP 2026 Industry)
**arXiv:2609.20584** (Sep 17, 2026) — cs.CL
**Status:** Accepted at EMNLP 2026 Industry Track

**Core Problem:** LLMs are being considered for safety-critical ISO 26262 workflows, but reliability is underexplored.

**Benchmark:** SAFARI (Safety-Aware Functional Automotive Risk Inference) — 3,000 de-identified industrial HARA cases, two tasks: open-ended hazard analysis and standards-grounded risk assessment.

**Key Findings (9 frontier LLMs tested):**
- Models produce plausible hazard narratives but remain **weak at ISO 26262 risk classification** — best ASIL macro-F1 only **0.261**
- **Chain-of-Thought prompting provides limited benefit and often degrades categorical risk assessment** — a striking counterpoint to CoT's general effectiveness
- Major failures localize to: (a) scenario-critical context omissions during hazard generation, and (b) controllability misjudgments during risk assessment

**Significance:** CoT doesn't universally help — in high-stakes classification with precise categorical requirements, it can actively hurt. Practical implication: expert oversight should focus on those two specific failure modes.
**Paper:** https://arxiv.org/abs/2609.20584

---

### 3. Relational Attention for Data-Efficient Language Modeling (BabyLM/EMNLP 2026)
**arXiv:2609.20530** (Sep 17, 2026) — cs.CL, cs.LG
**Status:** BabyLM Workshop, EMNLP 2026

**Approach:** Dual Attention Transformer (DAT) separates routing of object-level ("sensory") lexical features from structural/relational information. Adds Next-Latent Prediction (NextLat) objective encouraging hidden states to compress history into a dense belief state. Also introduces RoPE-based symbol-retrieval mechanism with no additional parameters.

**Results (strict 100M-word track):**
- Best model ranks **6th of 55 overall**, 3rd of 55 on NLP-task subset
- Architecture is the dominant factor for structural linguistic generalization; objective is secondary
- Full relational attention (vs. RCA/DisRCA variants) interchangeable at 10M words; full RA pulls ahead at 100M
- Outperforms GPT-2 baseline on most benchmarks; highest EWoK score among strict-track entries

**Significance:** Relational/structural inductive biases in attention improve data efficiency — relevant for training smaller models with less data.
**Paper:** https://arxiv.org/abs/2609.20530

---

### 4. Cut-Point Replay: Regression Testing for LLM Agents
**arXiv:2609.20625** (Sep 17, 2026) — cs.CL, cs.AI

**Problem:** LLM agent failures are hard to reproduce — non-deterministic responses, changing tool state, multi-step trajectories that rarely repeat exactly.

**Approach:** Chronicle — records agent runs at non-deterministic boundaries as immutable envelopes. Cut-point replay serves a chosen subset of boundaries from the record and executes the complementary subset live with new code.

**Results:**
- Recording adds only 23μs per crossing (0.008% of assumed 300ms model call)
- Full replay issues zero model calls, bit-stable across 20 repetitions
- Cut-point tests catch every mutant letting recorded unsafe action through (baseline with full stubbing catches none)
- 6 recorded failures, all reproducible as regression tests

**Significance:** Makes LLM agent debugging reproducible and CI-friendly — important for deployment reliability workflows.
**Paper:** https://arxiv.org/abs/2609.20625

---

### 5. Stress-Testing Alignment Midtraining
**arXiv:2609.20412** (Sep 17, 2026) — cs.CL, cs.AI

**Research Question:** Alignment midtraining (AMT) — continuing pretraining on alignment-relevant documents — is widely proposed, but is there public evidence it works at scale?

**Findings (up to 110B parameters, 1B midtraining tokens):**
- AMT can steer model motivation in simple settings
- However, **a tiny fraction of finetuning data suggesting competing motivation erases AMT effects entirely**
- Demonstrations must be present either in midtraining OR post-training datasets for rules to be robustly learned
- Conclusion: **Insufficient public evidence that midtraining addresses core difficulties in aligning powerful AI systems**

**Significance:** Challenges a widely-held assumption in alignment research — AMT's benefits are far more fragile than believed.
**Paper:** https://arxiv.org/abs/2609.20412

---

### 6. Training-Free Self-Reported Confidence in LLMs (Workshop)
**arXiv:2609.20541** (Sep 17, 2026) — cs.CL

**Three training-free confidence signals tested on 100 TriviaQA questions:**
1. Verbalized confidence with answer — surprisingly strong: **AUROC 0.956 and 0.937** for correctness prediction
2. Post-hoc P(True) — not evaluated in detail
3. Three-sample agreement — substantially weaker (0.765, 0.790); amplifies shared misconceptions

**Key findings:**
- Re-eliciting confidence with equivalent prompts changes scores by 0.043–0.084 on average; flips 4–9% of decisions at 0.8 threshold
- Audit of 100 confidence-tagged biography claims: only modest confidence gap between supported and contradicted claims
- Self-consistency (three-sample agreement) can amplify shared model misconceptions

**Significance:** Direct verbalization is a surprisingly effective baseline for confidence; self-consistency methods need careful handling.
**Paper:** https://arxiv.org/abs/2609.20541

---

## Sources
- https://arxiv.org/abs/2609.20612
- https://arxiv.org/abs/2609.20584
- https://arxiv.org/abs/2609.20530
- https://arxiv.org/abs/2609.20625
- https://arxiv.org/abs/2609.20412
- https://arxiv.org/abs/2609.20541
