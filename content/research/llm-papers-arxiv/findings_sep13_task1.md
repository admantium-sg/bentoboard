# Research Findings — September 13, 2026 (Task 1)

## Sep 11 arXiv Submissions — Chain-of-Thought, Reasoning, Prompt Engineering, Efficiency

### Think Before You Link: Reasoning + Retrieval is the Key (EMNLP 2026)
**arXiv:2609.10745** (Sep 9, 2026) — cs.CL, EMNLP 2026
- Prior work on multimodal entity linking measures rarity via popularity (pageviews) — misses many structurally rare entities
- New rarity metrics using knowledge-graph structural properties identify entities that popularity metrics miss; accuracy drops 15.4–39.9% on these slices
- Framework: reasoning-capable VLM iteratively searches and reasons over Wikipedia (dynamic evidence gathering)
- Controlled experiments: reasoning alone does NOT significantly improve rare-entity accuracy; retrieval without reasoning helps rare but hurts overall; combination is best
- On MERLIN (5 languages: Hindi, Indonesian, Japanese, Tamil, Vietnamese): +6.9% overall, +23.3% on rare-entity slices
- **Significance:** EMNLP 2026 paper — iterative reasoning + retrieval is the practical recipe for rare-entity tasks. Key insight: reasoning and retrieval are complementary, not redundant. Up to 23.3% gains on hard slices.

Paper: https://arxiv.org/abs/2609.10745

---

### Data-Efficient Language Modeling: Three Stages from Frontier to Principle (BabyLM 2026)
**arXiv:2609.10702** (Sep 9, 2026) — cs.CL
- Qiushi Engine: autonomous research program on BabyLM 2026 Strict-Small (10M words, 100M cumulative word presentations)
- Stage I: compact restatements + budget reinvestment + residual incremental learning → frontier model
- Stage II: exact repetition vs aligned restatement produce different context-use patterns — depends on target relations and prediction windows
- Stage III: controlled tasks show recovering familiar performance ≠ ability to use learned computations on unseen inputs
- **Significance:** Principled finding for data-efficient training. The disconnect between "recovering familiar performance" and "generalizing to unseen" is important for curriculum learning design. Three-stage autonomous research pipeline is notable.

Paper: https://arxiv.org/abs/2609.10702

---

### Membership Inference at Normal Duplication Levels: Only a Faint Trace
**arXiv:2609.10830** (Sep 10, 2026) — cs.CL, cs.CR
- OLMo-2 and Pythia publish their pretraining corpora + public index — ground truth for membership inference
- At normal duplication levels (below ~1000 copies): five models (1B–13B) carry at most a faint trace of their own exposure; rank correlation ~-0.08
- Above ~1000 copies: exposure becomes indistinguishable from fame — famous sentences dominate
- Word-change attacks: changing one word of a member creates the same preference gap regardless of whether original appeared 1 or 100 times — what models reward is author word choice, not memory
- Swapping register controls moves detector from 0.83 to 0.94 AUC
- **Significance:** Ground-truth membership inference at scale — the faint trace finding challenges assumptions about how much models remember. Register sensitivity is the key to detection.

Paper: https://arxiv.org/abs/2609.10830

---

### Federated Speech-LLMs: alpha-Split Fixes Cross-Component Budget Collapse (SLT2026)
**arXiv:2609.11762** (Sep 10, 2026) — cs.CL, SLT2026
- Per-layer DP clipping breaks for speech-LLMs where acoustic encoder and language decoder differ by order of magnitude in update norm
- Single-pool per-layer methods suffer cross-component budget collapse — WER far from flat global clipping or training collapses entirely
- alpha-split: two-pool allocation normalizes encoder and LLM parameters into independent pools; (epsilon, delta)-DP guarantee unchanged
- At architecture-calibrated alpha: recovers WER utility vs flat DP; grants encoder 4.47x tighter per-component noise protection; +2.6% LLM noise overhead
- **Significance:** Practical federated learning for speech-LLMs — the two-pool approach is a clean fix for a real architectural mismatch problem.

Paper: https://arxiv.org/abs/2609.11762

---

### NCP-ArchPreview: Next Concept Prediction for Latent Space Language Models
**arXiv:2609.10715** (Sep 9, 2026) — cs.CL
- Intern-NCP Team (large author list including Dahua Lin, Zhouhan Lin)
- Next Concept Prediction architecture — moving towards latent space language models
- Not yet reviewed in detail — further investigation warranted
- **Significance:** Large intern team suggests significant research investment in latent-space LM approaches.

Paper: https://arxiv.org/abs/2609.10715

---

### LLMs in Urdu: Basic Errors, Pervasive Cultural Shallowness
**arXiv:2609.10758** (Sep 9, 2026) — cs.CL, cs.AI, cs.LG
- Urdu-Stories corpus: 93 stories from GPT-5.1, Qwen-3-Max, DeepSeek-3.1 — annotated with 9-label taxonomy
- Errors: basic grammar, semantics, lack of coherence, unnatural repetition, pervasive cultural shallowness
- Few-shot prompting does NOT resolve cultural/context errors
- **Significance:** Documents continued multilingual weaknesses of frontier models in low-resource languages. Qwen-3-Max and DeepSeek-3.1 evaluated alongside GPT-5.1 — notable that these are newer model names.

Paper: https://arxiv.org/abs/2609.10758

---

## Key Insights for Today

1. Reasoning + retrieval together is the dominant pattern in new research — neither alone is sufficient
2. Membership inference at normal duplication levels shows only a faint trace — implications for understanding memorization
3. BabyLM 2026 results show a clear gap between recovering familiar performance and true generalization
4. Federated speech-LLMs need specialized DP handling due to encoder-decoder norm mismatch
5. Edge0-35B-A3B-preview is a new entrant in HuggingFace trending — worth monitoring

## Sources
- arXiv cs.CL new (Sep 11): https://arxiv.org/list/cs.CL/new
- arXiv cs.LG new (Sep 11): https://arxiv.org/list/cs.LG/new
