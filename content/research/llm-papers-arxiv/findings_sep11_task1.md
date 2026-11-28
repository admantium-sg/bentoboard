# Research Findings — September 11, 2026 (Task 1)

## Papers & Preprints (Sep 10-11 uploads)

### NCP-ArchPreview: Next Concept Prediction for Latent Space Language Models
**arXiv:2609.10715** (Sep 9, 2026) — cs.CL, Intern-NCP Team
- Latent-space language model pushing autoregressive pretraining beyond standard next-token prediction (NTP)
- Learns Next Concept Prediction (NCP): predicts discrete concepts spanning multiple tokens, introducing concept-level objective alongside token-level autoregressive generation
- Product-quantized concept vocabulary constructed from hidden states; Concept Module predicts future concepts and feeds back to token level
- Scaled to 8.9B parameters, trained on 5.73T tokens (Dolma-3 dataset) — largest latent-space LLM demonstration
- Achieves final pretraining loss of OLMo-3-7B at only 51.3% of training tokens
- Outperforms OLMo-3-7B by 2.45 points downstream macro-average, including notable 5.99 point gain on GSM8K
- Using only 85% of standard computation, approaches training loss of parameter-aligned 8.9B baseline
- Learned latent space valuable after pretraining: updating just 17M VQ module enables lightweight domain adaptation; DFlash2 drafter with concept representations improves mean accepted length by 4.17%
- **Significance:** Concept-level prediction achieves strong results with half the tokens — efficiency breakthrough for pretraining. GSM8K gain (+5.99 points) suggests reasoning benefits from latent concept modeling. The 17M-parameter VQ module for post-pretraining adaptation is a practical bonus.

Paper: https://arxiv.org/abs/2609.10715

---

### Qiushi Engine: Data-Efficient Language Modeling from 10M Words
**arXiv:2609.10702** (Sep 9, 2026) — cs.CL, cs.AI
- Long-horizon autonomous research on BabyLM 2026 Strict-Small within 10M corpus words, 100M cumulative word presentations
- Three stages: frontier advancement → principle discovery → principle-guided model improvement
- Stage I: compact restatements, budget reinvestment, residual incremental learning to build frontier model
- Stage II key finding: exact repetition and aligned restatement produce different context-use patterns; recovering familiar performance did NOT ensure unseen inputs could use learned computations
- Testable data-efficient principle: organize experience around contextual dependencies; separately design visible information, supervision, and preservation; test learning, generalization, and retention
- Stage III: retained source text, masked more local clues, supervised selected targets, preserved predictions on ordinarily masked inputs
- Two continuation seeds from same parent outperformed ordinary continuation on complete nine-metric aggregate
- Overall rose from 42.02 to 42.25 across two generations; second achieved highest Overall in public Strict-Small snapshot of Sep 8, 2026
- Also addressed compression, relational anchors, shared representations, measurement
- Demonstrates Research RSI: recursive self-improvement of the research process
- **Significance:** The principle discovery (recovering familiar performance ≠ generalization to unseen) is a key insight for data-efficient training. The RSI framing — scientific understanding changing subsequent questions and designs — is a meta-level contribution.

Paper: https://arxiv.org/abs/2609.10702

---

### Think Before You Link: Reasoning + Retrieval for Multilingual Entity Linking (EMNLP 2026)
**arXiv:2609.10745** (Sep 9, 2026) — cs.CL
- Multimodal entity linking degrades on rare entities; prior work measured rarity only via popularity (pageviews)
- Introduces knowledge-graph structural metrics capturing how well an entity is documented and connected — identifies rare entities that popularity metrics miss
- State-of-the-art accuracy drops 15.4–39.9% across rare-entity slices depending on rarity definition
- Framework: reasoning-capable VLM iteratively searches and reasons over Wikipedia, gathering evidence dynamically
- Controlled experiments show reasoning and retrieval are complementary: reasoning alone doesn't significantly improve rare entities; retrieval without reasoning can hurt overall accuracy; combination performs best
- On MERLIN (5 languages: Hindi, Indonesian, Japanese, Tamil, Vietnamese): +6.9% overall, up to +23.3% on rare-entity slices
- **Significance:** Rarity isn't one-dimensional — popularity vs. structural metrics reveal different failure modes. The iterative reasoning + retrieval approach is generalizable to other knowledge-intensive tasks.

Paper: https://arxiv.org/abs/2609.10745

---

### Larger Context Window, Fewer Overcorrections: Prompt Optimization for GEC (EMNLP 2026 Findings)
**arXiv:2609.10810** (Sep 9, 2026) — cs.CL
- Minimal-edit Grammatical Error Correction: zero/few-shot prompted LLMs systematically overcorrect, degrading F₀.₅
- Three advances: (1) Taxonomy-based instructions enforce minimal-edit constraints with comprehensive grammatical error rules; (2) Batching multiple sentences acts as regularizer against overcorrection via attention dilution effect; (3) LLM-assisted Prompt Optimization refines instructions (Gemini 3.1-Pro)
- Result: F₀.₅=78.32 on BEA-2019 — new prompt-based SOTA, only 0.38 points behind fine-tuned single-model SOTA
- **Significance:** The attention dilution hypothesis from batching is mechanistically interesting — bounded self-attention capacity acts as a natural regularizer. The 0.38 point gap to fine-tuned SOTA through prompting alone is remarkable.

Paper: https://arxiv.org/abs/2609.10810

---

### K/V-Cache Interventions: Representation Alignment vs Persona Expression
**arXiv:2609.11020** (Sep 10, 2026) — cs.CL
- K/V-cache interventions: transplanting target-conditioned K/V trajectory into source-persona generation
- 13 intervention configurations on Llama-3.1-8B
- Key finding: representation-level similarity metrics alone are NOT sufficient predictors of downstream persona expression
- Mid-layer replacement (layers 9-20) combines substantial target-marker expression with preserved lexical diversity (TTR 0.77)
- Full and mid-layer replacement induce comparable alignment (V-gap 0.94 vs 0.89) but different lexical diversity profiles (TTR 0.65 vs 0.77)
- Position perturbations (lag and shuffle) uniformly suppress target-persona expression — common behavioral failure
- **Significance:** The representation-behavior dissociation is a warning for activation engineering methods — steering a representation doesn't guarantee the desired behavioral output. Mid-layer sweet spot for persona control is actionable.

Paper: https://arxiv.org/abs/2609.11020

---

### A Fragility Spectrum for Recursive Language-Model Training
**arXiv:2609.11149** (Sep 10, 2026) — cs.CL, cs.AI, cs.LG
- Model-generated text increasingly enters training corpora; recursive training collapses output diversity
- 13 publicly released checkpoints form ecosystem sharing common corpus for five generations
- Unique 4-gram outcome after five generations: 0.187 to 0.940 — five-fold spread across checkpoints
- Parameter scale alone doesn't explain fragility (within-family 3-size ladder is not monotonic)
- Cheap predictor: iterate model on own output for 2-3 generations — fragility can be inferred from that alone
- Collapse intervention: tightening top-p (cutting low-probability tail at generation time) nearly stops collapse within 3 generations
- Data-side filtering slows collapse without stopping
- **Significance:** Model fragility to recursive contamination is a property of the checkpoint itself — and it's predictable with a cheap test. Tightening top-p as a collapse prevention is a practical operational insight.

Paper: https://arxiv.org/abs/2609.11149

---

## Sources
- arXiv cs.CL new submissions (Sep 11, 2026): https://arxiv.org/list/cs.CL/new
- arXiv cs.CL recent (Sep 10-11): https://arxiv.org/list/cs.CL/recent
