# Task 1 Findings — Aug 21, 2026
# arXiv papers: cs.CL, cs.LG, cs.AI — chain-of-thought, prompt engineering, efficiency

## Research: Aug 20-21 arXiv listings (76 cs.CL papers reviewed)

---

### 1. ConceptGuard: Benchmarking Context-Sensitive Unlearning in LLMs
**arXiv:2608.20338** (Aug 20, 2026) — cs.CL | NeurIPS E&D 2026
- Dual-use concepts: concepts usable in both harmful and benign contexts — core of ConceptGuard benchmark
- Forget/retain sets are complementary in concept usage, not disjoint facts
- All current unlearning techniques show weak contextual separation + poor ROUGE + concept-level metrics
- Strong forgetting-utility tradeoffs; limited contextual sensitivity gains
- Key insight: Unlearning at fact-level is insufficient — concept-level control is needed for real-world safety
- Paper: https://arxiv.org/abs/2608.20338

### 2. G-CARL: Grounded Checklist-Aligned Reward Learning for Medical Report Interpretation
**arXiv:2608.20331** (Aug 20, 2026) — cs.CL, cs.AI, cs.CV
- PMRI (Patient-oriented Medical Report Interpretation): evidence-grounded factuality + context-dependent patient communication
- G-CARL combines multi-source retrieval for atomic claim verification + instance-specific weighted checklists
- MMedReport benchmark + 3D clinician-designed evaluation
- Consistently outperforms post-training baselines in quality, claim precision, checklist recall
- Key insight: Factuality and patient communication require separate, structured supervision — joint optimization fails
- Paper: https://arxiv.org/abs/2608.20331

### 3. Task Model Induction (TMI) from Computer-Use Traces
**arXiv:2608.20319** (Aug 20, 2026) — cs.CL, cs.AI
- Discovers latent tasks from naturalistic computer traces (screenshots, mouse/keyboard actions)
- Hierarchical objective model (recursive goal decomposition) + procedure model (control flow)
- 0.974 ground-truth agreement on interleaved task recovery; reconstructs 74.9% of execution steps
- Skills from TMI task models improve held-out task accuracy by 30% over strongest baseline
- Key insight: Symbolic, auditable task models can be induced from raw computer-use traces — enables auditability for agentic deployments
- Paper: https://arxiv.org/abs/2608.20319

### 4. IAR: Inject, Align, Recover for Retrieval-Free Document Knowledge Internalization
**arXiv:2608.20281** (Aug 20, 2026) — cs.CL, cs.AI
- Three stages: Inject (document→continuation/rewrite/reconstruction objectives), Align (answer-only QA), Recover (merge with base model)
- +3.6pp domain QA accuracy, +12.1pp mean general performance (IFEval, MMLU, MSBench) vs Vanilla SFT
- Works across Llama, Phi, Qwen, SmolLM families
- Key insight: Separating knowledge injection from behavior alignment from capability recovery outperforms joint approaches
- Paper: https://arxiv.org/abs/2608.20281

### 5. Evidence Arbitration: When Text and Numbers Disagree in LLMs
**arXiv:2608.20116** (Aug 20, 2026) — cs.CL
- Controlled benchmark with latent risk trajectories generating both numerical time series and text summaries
- Models exhibit systematic text-vs-number preferences; follow temporal recency > explicit reliability cues
- Over-rely on external forecasts even when conflicting with direct contextual evidence
- Key insight: LLM evidence integration uses heuristic arbitration — distinct failure mode for tool-augmented decision systems
- Paper: https://arxiv.org/abs/2608.20116

### 6. Cross-Lingual Fairness in LLM Watermarking
**arXiv:2608.20047** (Aug 20, 2026) — cs.CL, cs.CR, cs.LG
- Six watermarking schemes × three open-weight generators × 11 languages × four scripts
- Disparity predominantly between typological families (not between individual languages)
- Cross-lingual fairness gaps are structural to language properties, not language-specific
- Key insight: English-calibrated watermarking evaluation misses structural failures in multilingual deployment
- Paper: https://arxiv.org/abs/2608.20047

### 7. Fine-tuning for Long-Context Sparse Attention
**arXiv:2608.19920** (Aug 20, 2026) — cs.CL
- Fine-tuning transformer language models with sparse attention (H2O policy)
- Single A100 40GB GPU budget; outperforms models trained with exact attention
- KeysAndValues open-source library for long-context inference and fine-tuning
- Key insight: Models can co-adapt with sparse attention policies — hardware budget no longer blocks long-context deployment
- Paper: https://arxiv.org/abs/2608.19920

---
*Sources: arXiv cs.CL new listings Aug 20-21 (76 papers), papers.cool cs.CL/cs.LG/cs.AI/cs.CV trending*
