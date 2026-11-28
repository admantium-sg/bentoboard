# Findings — Task 1: arXiv Papers (cs.CL, cs.LG, cs.AI)
**Date:** 2026-09-18
**Research focus:** chain-of-thought, prompt engineering, efficiency

## Papers Identified (Sep 17 submissions, Sep 18 check)

### 1. RetireOPD: Self-Retiring On-Policy Distillation for Agentic RL
**arXiv:2609.20784** (Sep 17, 2026) — cs.CL, cs.AI

**Core Problem:** Multi-turn RL agents receive only a single scalar reward per trajectory. On-policy distillation (OPD) addresses this with dense token-level supervision from a self-teacher. But two issues undermine OPD in agentic tasks: (1) privileged information alone doesn't make a teacher reliable, and (2) the benefit of teacher supervision is stage-dependent.

**Approach:** RetireOPD = Self-Retiring On-Policy Distillation. Two phases:
- Phase 1: Optimize a decoupled, skill-conditioned teacher with environment rewards
- Phase 2: Train a skill-free student jointly with RL and OPD
- Key innovation: Adaptive Retirement — the student drops the teacher autonomously when discrepancy stops shrinking AND it reaches a target fraction of the teacher's success rate. No predefined distillation schedule.

**Results (Qwen2.5, 1.5B–7B):**
- ALFWorld success rate: +14.1% to +18.8% over RL baseline
- WebShop accuracy: +11.8% to +19.0% over RL baseline
- Surpasses its own skill-conditioned teacher in every setting

**Significance:** First self-regulating distillation mechanism; solves the reliance on unreliable teachers in agentic RL.
**Paper:** https://arxiv.org/abs/2609.20784

---

### 2. Harm Laundering in GPT Models (EMNLP 2026)
**arXiv:2609.20779** (Sep 17, 2026) — cs.CL, cs.AI
**Status:** Accepted at EMNLP 2026 Main Conference

**Core Problem:** Safety evaluations rely on surface-form toxicity classifiers that report declining harm scores across model generations. This paper shows this methodology is systematically incomplete.

**Key Finding:** Explicit discriminatory content is *transformed* rather than removed — the authors call this "harm laundering."

**Evidence (450,000 gender-directed completions, 15 GPT models, GPT-2 → GPT-5):**
- Sexual violence clusters prevalent in GPT-2 women-directed output disappear by GPT-4
- Men-directed completions gain positive representational territory (caregiving, emotional range, ally identity) that women-directed completions do not
- At GPT-5: Topic 5 (1,997 docs) frames breast cancer as a men's rights debate; zero equivalent clusters in women-directed output
- Three independent toxicity classifiers all score this content as non-toxic
- Sentiment scores *invert* at GPT-4: early models demean women; later models over-correct
- Topic diversity in women-directed completions falls 36% relative to men at GPT-4 alignment boundary (W/M ratio = 0.58, down from 0.91 at GPT-2)

**Statistical Evidence:**
- REGARD representational harm disparity correlates with release date (ρ = +0.55, p = .034)
- Detoxify toxicity does not correlate (ρ = -0.23, p = .42)
- **Key insight:** Toxicity score reduction is NOT a sufficient proxy for harm reduction

**Contributions:**
- Formalized harm laundering as a three-criteria test
- Three-stage detection protocol applicable to any generative model

**Paper:** https://arxiv.org/abs/2609.20779

---

### 3. On-Demand Attention (ODA): Long-Context Efficiency
**arXiv:2609.20734** (Sep 17, 2026) — cs.CL

**Core Problem:** Full-attention decoding reads the entire growing history at every step, regardless of actual benefit — wasteful for long contexts in reasoning and agentic workloads.

**Insight:** A pretrained model's decoding states already contain information predictive of the benefit of global attention, *before* the global read occurs.

**Approach:** On-Demand Attention (ODA)
- Local-first decoding as baseline
- Lightweight recall head predicts when to invoke global attention (based on changing predicted benefit during generation)
- Only the recall head is trained; pretrained weights unchanged
- Complete historical KV cache preserved for future recall

**Implementation:** GPU-side conditional execution in vLLM — reduced global reads translate to practical decoding speedups over full attention at long context lengths.

**Results (Qwen and Gemma models, including hybrid-attention backbones):**
- Selective recall recovers most performance lost under local attention
- Substantially reduces global reads
- Works across different backbone architectures

**Significance:** Enables pretrained models to self-guide attention access to their own retained information — a principled approach to long-context efficiency.
**Paper:** https://arxiv.org/abs/2609.20734

---

### 4. dQwen3.5: Hybrid-Attention Diffusion Language Models
**arXiv:2609.20751** (Sep 17, 2026) — cs.CL, cs.LG

**Core Problem:** Adapting autoregressive (AR) models into diffusion language models (DLMs) is cost-efficient. Most adaptations start from full-attention transformers, but AR has shifted toward hybrid attention/RNN architectures — creating an obstacle since RNNs are structurally causal and hard to bidirectionalize.

**Approach:** dQwen3.5 family — adapts Qwen3.5 at 0.8B, 2B, 4B, and 9B scales using hybrid attention/RNN backbones as DLM starting points.

**Key Results:**
- Hybrid backbone reaches a given training loss in about **half the tokens** compared to full-attention control
- At all scales: resembles full-attention DLMs in any-order decoding behavior
- Performs strongly under parallel decoding

**Significance:** Hybrid RNN/attention architectures aren't an obstacle for DLM adaptation — they're actually an efficient starting point. Opens a new design space for diffusion language models.
**Paper:** https://arxiv.org/abs/2609.20751

---

### 5. Embedding Models Measure in Peculiar Ways
**arXiv:2609.20821** (Sep 17, 2026) — cs.CL, cs.LG

**Research Question:** Do embedding spaces reflect physical measurements (mass, distance, time, volume) that have a unique, objective notion of semantic equivalence and distance?

**Findings:**
- Physical measurement is only *weakly* modeled in embedding spaces
- Embedding representations of physical measurements are strongly influenced by superficial string similarity
- Recalibration of similarity does not substantially improve alignment

**Implication:** Embedding similarity metrics don't naturally capture objective physical measurement — caution is warranted when using embeddings to reason about physical quantities.
**Paper:** https://arxiv.org/abs/2609.20821

---

### 6. CoT Entropy Reproduction (arXiv:2609.19606)
**Sep 17, 2026** — cs.CL, cs.LG

**Background:** Zhao (2026) reported that (a) shape of CoT entropy trajectory predicts correctness, but (b) magnitude of total entropy drop does not. The magnitude half rested on a single 300-problem run.

**This reproduction (preregistered at OSF):**
- Crosses full GSM8K and MATH-500 test sets with four open-weight models including one reasoning-distilled model
- **Shape signal replicates:** monotone vs non-monotone chains — +9.6pp on GSM8K, +27.5pp on MATH-500
- **Magnitude signal divides by setting:** on anchor model, rank correlation of total entropy drop with correctness is -0.018 (GSM8K) and +0.414 (MATH-500) — inconsistent
- On reasoning-distilled model: binary shape signal fires on ~1 chain per 100, too sparse
- **Exploratory finding:** Final-step entropy alone outperforms the binary shape flag in all 8 model-by-benchmark cells by ROC area

**Paper:** https://arxiv.org/abs/2609.19606

---

### 7. HerHealthEval: Multilingual Women's Health Communication
**arXiv:2609.20684** (Sep 17, 2026) — cs.CL

**Framework:** Tests multilingual understanding (English, French, Modern Standard Arabic) across six communicative forms: canonical, clinical, layperson, indirect/hedged, emotionally concerned, and deliberately under-specified.

**Key Finding:** A multilingual adaptation model reaches 0.994 under-triage in French and Arabic under language-asymmetric risk supervision. Language-invariant risk labels (source-derived) reduce under-triage to 0.572 (French) and 0.558 (Arabic).

**Implication:** Robust multilingual healthcare evaluation requires explicit testing of register variation, uncertainty handling, and adaptation label provenance/invariance.
**Paper:** https://arxiv.org/abs/2609.20684

---

## Sources
- https://arxiv.org/abs/2609.20784
- https://arxiv.org/abs/2609.20779
- https://arxiv.org/abs/2609.20734
- https://arxiv.org/abs/2609.20751
- https://arxiv.org/abs/2609.20821
- https://arxiv.org/abs/2609.19606
- https://arxiv.org/abs/2609.20684
