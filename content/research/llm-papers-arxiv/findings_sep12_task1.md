# Research Findings — September 12, 2026 (Task 1)

## Papers & Preprints (Sep 10-11 uploads)

### TransClean: Benchmark for Clean LLM Translation Extraction
**arXiv:2609.11399** (Sep 10, 2026) — cs.CL, WMT26
- LLMs used for MT produce outputs with noise: language labels, explanations, bilingual repetitions — 12 recurring patterns identified across 790K outputs from 12 LLMs, 22 language pairs
- TransClean benchmark: 9,900 noisy/clean pairs (8,800 synthetic + 1,100 manual authentic)
- Two extraction approaches evaluated: span-based (translation quality estimation) and LLM-based prompting
- First systematic framework for evaluating cleanliness of LLM translation outputs
- **Significance:** Translation noise from LLMs is systematic, not random. The 12-pattern taxonomy gives practitioners a checklist. Clean extraction is non-trivial — this benchmark will drive improvement.

Paper: https://arxiv.org/abs/2609.11399

---

### SWRouter: Multi-Turn LLM Routing with Context Windows
**arXiv:2609.11414** (Sep 10, 2026) — cs.CL, cs.AI, cs.IR
- Existing routers work for single-turn but fail multi-turn: context segmentation, retention, and incorporation create new challenges
- SWRouter: Similarity-Contractive Window Router — combines similarity-based context segmentation with dual-metric evaluation (decouples construction accuracy from router performance)
- 16.26% improvement over best individual LLM, 8.22% additional gain over Conv-ID Context baseline
- Key insight: multi-turn routing requires joint design of context construction + evaluation, not an extension of single-turn methods
- **Significance:** Multi-turn routing is a fundamentally different problem. The context segmentation mechanism (similarity-contractive windows) is likely applicable to other long-context scenarios.

Paper: https://arxiv.org/abs/2609.11414

---

### Direct LLM Projection for Cross-Lingual Clinical Annotation
**arXiv:2609.11450** (Sep 10, 2026) — cs.CL, cs.AI
- Constrained LLM projection: inserts entity tags directly into target-language text, followed by deterministic validation
- Transfers Spanish Disease/Symptom/Procedure annotations to 6 languages
- GLM 5.2 achieves mean Strict F1 of 0.9201 across 18 language-entity combinations; Gemma4:31B achieves 0.9133 (locally deployable)
- Improved Strict F1 over prior SOTA by 0.0564-0.1512 in all 18 settings
- **Significance:** Direct LLM projection outperforms candidate-based pipelines for clinical annotation transfer. The locally deployable Gemma4 result (0.9133) is practically important for privacy-sensitive clinical NLP.

Paper: https://arxiv.org/abs/2609.11450

---

### ReGround: Grounding Reviewer Comments in Multimodal Evidence (EMNLP 2026)
**arXiv:2609.11460** (Sep 10, 2026) — cs.CL, cs.IR
- Reviewer comments reference specific parts of papers; grounding them to evidence is difficult in long multimodal docs
- ReGround: 10,267 reviewer comments linked to 16,274 evidence spans in 3,656 papers — uses author rebuttals as high-precision annotation source
- Retrieval over full paper content performs poorly; evidence-type inference is a major bottleneck; multimodal evidence provides complementary signals
- **Significance:** Scientific document understanding at scale. The rebuttal-as-annotation insight is clever and generalizable to other academic NLP tasks.

Paper: https://arxiv.org/abs/2609.11460

---

### Structural Priors for Data-Efficient Language Learning (EMNLP 2026 BabyLM)
**arXiv:2609.11505** (Sep 10, 2026) — cs.CL, cs.AI, cs.LG
- Non-language data (music, probabilistic grammars, cellular automata) as structural transfer for multilingual language modeling
- Structural transfer yields lower language-modeling loss than random init; gains coincide with smaller weight shifts during language training
- Critical caveat: lower loss does NOT consistently translate to better downstream linguistic performance; non-language data is less efficient than additional language data
- **Significance:** Negative result with nuance — non-language data partially substitutes for language data on the NTP objective but doesn't reliably support linguistic generalization. Important for data-efficient training research.

Paper: https://arxiv.org/abs/2609.11505

---

### Kashin-DCT: Structured Transforms for Low-Overhead LLM Quantization
**arXiv:2609.11687** (Sep 10, 2026) — cs.CL
- Revisits Kashin-decomposition-based weight quantization; replaces dense random orthogonal matrix with sign-randomized DCT
- Reduces per-iteration cost from O(N²) to O(N log N); greedy algorithm with alternating updates
- Bounded-ℓ∞ factorization is robust: on stress configs where QuIP variants diverge to four-digit perplexity or abort with NaNs, Kashin-DCT stays stable near FP16 baseline
- Composes with OPTQ/QuIP/QuIP-RG-style error compensation; competitive at 4-bit per channel
- **Significance:** Numerically robust 2-bit quantization that's tractable. The DCT-based orthogonal transform is the key efficiency gain. Stability under stress is the headline for practitioners.

Paper: https://arxiv.org/abs/2609.11687

---

### LOCUS: Task-Aware Low-Rank Post-Training for Token-Efficient Generation
**arXiv:2609.11739** (Sep 10, 2026) — cs.CL, cs.AI, cs.LG
- Post-training alignment inflates response verbosity without improving utility — LOCUS addresses this
- LOCUS: selects task-aware LoRA subspace to minimize output-token cost subject to utility constraint; retains native preference objective with frozen backbone
- Results on Anthropic HH-RLHF: reduces continuation length by 39.84% on Pythia-2.8B, 14.87-17.58% on Qwen2.5-3B, while updating only 0.24-0.28% of parameters
- No material change in internal preference diagnostic
- **Significance:** Token efficiency via low-rank subspaces is a practical serving-cost lever. Nearly 40% token reduction with frozen alignment loss and 0.24% parameter update is a compelling trade-off.

Paper: https://arxiv.org/abs/2609.11739

---

### RAG-Safety-Bench: RAG Degrades Safety Even with Benign Documents (EMNLP 2026)
**arXiv:2609.11758** (Sep 10, 2026) — cs.CL, cs.IR
- RAG can increase safety risk: retrieving trusted documents improves reliability but can also enable harmful generation
- RAG-Safety-Bench: four conditions (non-RAG, oracle doc, related-doc, random-doc) to isolate causes of safety degradation
- Key findings: inverse relationship between benign and unsafe capability; baseline safety guardrails do NOT transfer to RAG case; even random safe documents can cause unsafe generation
- **Significance:** Critical safety finding. RAG systems need domain-specific safety guardrails, not just base-model safety tuning. The four-condition isolation design is a methodological model for safety research.

Paper: https://arxiv.org/abs/2609.11758

---

### Multi-Signal Hallucination Detection: DeBERTa + MC Dropout + DPO
**arXiv:2609.11878** (Sep 10, 2026) — cs.CL, cs.AI, cs.LG
- Multi-signal pipeline: fine-tuned DeBERTa-v3 classifier + Monte Carlo Dropout uncertainty + temperature-scaled calibration
- HaluEval: F1=0.915, AUROC=0.977; per-task F1 of 0.97 (QA), 0.96 (Summarization), 0.82 (Dialogue)
- MC Dropout inference improves accuracy to 93.2%; context ablation confirms genuine entailment reasoning (summarization F1 drops 24% without context)
- DPO fine-tuning on Qwen2.5-0.5B reduces hallucination rate from 85.5% to 37.7% (55.9% relative reduction)
- Cross-domain transfer poor without domain-matched fine-tuning (SciFact F1=0.52 general-domain trained vs 0.63 with PubMedBERT)
- **Significance:** MC Dropout for hallucination detection is a practical addition to the toolkit. Domain-matched fine-tuning as the strongest adaptation strategy confirms what practitioners have observed. DPO for hallucination reduction is notable at 0.5B scale.

Paper: https://arxiv.org/abs/2609.11878

---

### Distance Generalization in Transformers: Why Bother with Positional Encoding?
**arXiv:2609.11913** (Sep 10, 2026) — cs.CL
- Studies distance generalization: performance when inter-token distances change between training and inference, keeping context length fixed
- Three questions: (A) Do RoPE/ALiBi improve distance resolution vs NoPE? (B) How does training data diversity affect distance transfer? (C) When is distance transfer positive vs negative?
- Synthetic delay copy tasks with finite distances between source and recall
- **Significance:** The "why bother with positional encoding" framing is provocative. Results likely challenge assumptions about RoPE/ALiBi necessity for certain distance-dependent tasks.

Paper: https://arxiv.org/abs/2609.11913

---

## Sources
- arXiv cs.CL new submissions (Sep 11, 2026): https://arxiv.org/list/cs.CL/new
- arXiv cs.CL recent: https://arxiv.org/list/cs.CL/recent
