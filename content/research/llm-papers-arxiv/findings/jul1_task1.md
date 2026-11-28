# Task 1 Findings — July 1, 2026
# arXiv papers: cs.CL, cs.LG, cs.AI — chain-of-thought, prompt engineering, efficiency

## Source: arXiv listings for June 30/July 1, 2026
## Papers reviewed: ~50 cs.CL, ~50 cs.LG, ~40 cs.AI
## Papers flagged as novel/relevant: 8

---

### 1. Introspective Coupling (2606.32038) — Self-Explanation Training
**arXiv:2606.32038** | cs.CL/cs.LG/cs.AI | June 30, 2026

When training LMs to explain their predictions using counterfactual behavior, even fixed explanations from earlier checkpoints produce explanations more faithful to the current model than to the training targets. This "introspective coupling" occurs when explanations stay correlated with current behaviors during training — and it tracks behavioral shifts without updated supervision. Robust across multiple tasks (sycophancy, refusal) and resilient to label noise.

Key insight: Even static counterfactual explanation datasets can provide scalable, generalizable post-training signal for introspection. The model can self-align through explanation without explicit supervision updates.

🔗 https://arxiv.org/abs/2606.32038

---

### 2. RLMF: Metacognitive Feedback for Faithful Uncertainty Expression (2606.32032)
**arXiv:2606.32032** | cs.CL/cs.AI | June 30, 2026

LLMs hallucinate with high confidence and misrepresent their uncertainty — a metacognitive failure. RLMF: Reinforcement Learning with Metacognitive Feedback — refines completion rankings during preference optimization based on the model's self-judgments of performance. Plus metacognitive data selection identifies high-value training examples, outperforming naive active learning. Achieves state-of-the-art faithful calibration (FC) across diverse tasks, surpassing standard RL by up to 63%.

Key insight: Metacognitive performance is an effective RL signal for overcoming limits of prior intrinsic feedback methods. Models that accurately judge their own performance are better positioned to improve it.

🔗 https://arxiv.org/abs/2606.32032

---

### 3. Data Referencing Errors in LLMs (2606.32029) — ACL 2026 Oral
**arXiv:2606.32029** | cs.CL | June 30, 2026 | ACL 2026 Oral

LLMs make data referencing errors (DREs): incorrectly citing or omitting table values despite understanding table structure. First systematic evaluation across models (1.7B to 20B). DREs occur across all tested models. Critic-based filtering with rejection sampling improves answer accuracy up to 12.0%. A lightweight 4B critic achieves 78.2% F1 in detecting DREs (in-distribution and OOD) and effectively assists larger models.

Key insight: DREs are systematic and widespread — not just final-answer errors but also in intermediate reasoning. Data referencing as a critic is a high-value signal for accuracy improvement.

🔗 https://arxiv.org/abs/2606.32029

---

### 4. SkillComposer: Structured Skill Composition for LLM Agents (2606.32025)
**arXiv:2606.32025** | cs.CL | June 30, 2026

Existing skill retrieval misses the joint nature of skill composition: which skills, how many, and in what order — three dimensions that cannot be decoupled. SkillComposer formulates structured skill composition as task-conditioned skill sequence prediction using constrained autoregressive decoding. On SkillsBench: raises pass rate by +23.1pp on GPT-5.2-Codex and +18.2pp on Gemini-3-Pro-Preview over no-skill baseline, matching gold-skill retrieval at lower prompt-token cost.

Key insight: Joint prediction of skill subset, count, and order outperforms separate retrieval + reranking pipelines. Structured composition is the bottleneck as skill libraries grow.

🔗 https://arxiv.org/abs/2606.32025

---

### 5. CHERRY-1.8B: Three Complementary Efficiency Techniques (2606.31796)
**arXiv:2606.31796** | cs.CL | June 29, 2026

Three compute-efficient training techniques validated on a Korean foundation model:

(1) **Selective Ground Truth Token Training (SGT)**: Concentrates supervision on ~15% of tokens carrying semantic payload. 4.5x per-supervised-token efficiency — 67% of full-sequence loss reduction recovered from 15% of supervision. Guaranteed improvement when gradient coupling coefficient is positive. Effect collapses on shuffled text — a property of natural language structure.

(2) **Depth Compression**: 48-layer 1B transformer compressed to 6 layers (227M) via layer averaging + recurrent unrolling. Within measurement noise of a 566M dense model (2.934 vs 2.926). 2.5x parameter reduction.

(3) **Mixture of Efficient Experts (MoEE)**: Assembling compressed models with multi-token prediction. 2-expert MoEE reaches loss 2.789 vs 2.926 for best single compressed model.

Key insight: The SGT finding is striking — natural language structure enables semantic token selection to generalize across the remaining 85% of tokens. Depth compression via recurrent recovery is competitive at 2.5x smaller.

🔗 https://arxiv.org/abs/2606.31796

---

### 6. TRIAGE: Role-Typed Credit Assignment for Agentic RL (2606.32017)
**arXiv:2606.32017** | cs.LG/cs.AI | June 30, 2026

Standard GRPO uses only final verifier outcome as uniform advantage — structurally incomplete because it punishes useful exploration in failed rollouts and reinforces redundant actions in successful ones. TRIAGE adds a semantic role axis: a structured judge classifies each segment as decisive progress, useful exploration, no-progress infrastructure, or regression, with fixed role-conditioned process rewards. Across ALFWorld, Search-QA, WebShop: improves success rates over GRPO, with regression detection in successful trajectories as the dominant contributor. Also reduces environment-facing turns by 10.4% (ALFWorld) and 14.8% (WebShop).

Key insight: Role-typed credit assignment is the optimal segment-level correction expressible from role labels alone — a projection of per-segment advantage residual onto the role variable. The practical takeaway: detecting and penalizing regression inside successful trajectories matters most.

🔗 https://arxiv.org/abs/2606.32017

---

### 7. QVal: Training-Free Dense Supervision Benchmark (2606.32034)
**arXiv:2606.32034** | cs.LG/cs.AI/cs.CL | June 30, 2026

Dense supervision methods (scoring intermediate steps) are evaluated via downstream training pipelines — expensive, confounded, and incomparable across families. QVal introduces a training-free testbed: measures whether a method's score is Q-aligned (orders actions according to Q-values of a strong reference policy). QVal-v1.0: 21 dense supervision methods, 4 environments, 7 families, 1.2K experiments, 6 open-weight backbones. Key finding: simple prompting baselines consistently outperform recent dense supervision methods from the literature. Performance clusters strongly by family.

Key insight: The dense supervision literature may be solving training engineering problems rather than supervision quality problems. Before building complex supervision methods, try better prompting.

🔗 https://arxiv.org/abs/2606.32034

---

### 8. Explicit Fuzzy Logic in FFN: Grammatical Licensing (2606.31845)
**arXiv:2606.31845** | cs.CL/cs.LG | June 29, 2026

Replaces FFN with negation-capable fuzzy set operations (intersection, set-difference) — NC-FFN. At scale (125M, OpenWebText): ties GELU baseline perplexity, every unit carrying explicit logical form. The robust grammatical deficit (licensing, quantifiers) is resolved with soft sequence quantifiers (existential, proportion) with per-unit learned forgetting rates. This makes the FFN fully legible: units read as grammatical licensing detectors firing on licensors and carrying memory forward to predict licensed words.

Key insight: A parameter-neutral transformer with explicit fuzzy-logic FFN is language-model-quality and fully interpretable-by-construction. The grammatical mechanism is not emergent — it's buildable.

🔗 https://arxiv.org/abs/2606.31845
