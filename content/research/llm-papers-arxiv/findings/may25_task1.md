# Task 1 Findings: arXiv Papers - May 25, 2026

## Papers Examined from cs.CL, cs.AI (May 22-25 submissions)

### 1. LINK: Lexical Interventions for Multilingual Knowledge Transfer
**arXiv:2605.23885** (May 22, 2026) — cs.CL
- Problem: Cross-lingual knowledge transfer for low-resource languages requires parallel data, translation systems, or auxiliary models
- Solution: LINK - data-level intervention using bilingual vocabularies for lexical substitutions during pretraining
- Achieves up to 2x speedup in training to reach equivalent performance
- Requires only a bilingual vocabulary (near-zero cost for virtually any language)
- Key insight: Lexical substitution at data level outperforms model-level interventions for multilingual transfer

### 2. OnePred: Next-Query Prediction via Recursive Intent Memory
**arXiv:2605.23668** (May 22, 2026) — cs.CL, cs.AI
- Problem: LLM conversational systems are reactive (respond only after user types); full history concatenation is expensive
- Solution: OnePred maintains recursively updated memory as sole cross-turn context; bounded per-turn cost independent of conversation length
- Uses two-stage RL pipeline: first teaches what to predict, then what to compress
- Results: 22x reduction in per-turn token consumption while exceeding all baselines in prediction quality
- Key insight: Intent trajectory tracking (not raw history) is sufficient for next-query prediction

### 3. SkillOpt: Executive Strategy for Self-Evolving Agent Skills
**arXiv:2605.23904** (May 25, 2026) — cs.AI
- Problem: Agent skills are hand-crafted or loosely self-revised - none behaves like a deep-learning optimizer
- Solution: SkillOpt - systematic controllable text-space optimizer for agent skills
- Separate optimizer model turns scored rollouts into bounded add/delete/replace edits on skill document
- Zero inference-time model calls at deployment
- Key insight: Frozen agent + trained skill optimizer enables reproducible skill improvement

### 4. SpaceNum: Spatial Numerical Understanding in VLMs
**arXiv:2605.23898** (May 22, 2026) — cs.AI
- Problem: VLMs deployed in embodied environments need numerical outputs (coordinates, magnitudes) but unclear if these are truly grounded
- Findings: Models largely fail to ground numbers in spatial meaning, perform close to random
- Reliance on shallow spatial cues; fail to build stable coordinate-aware representations
- Explicit reasoning provides only marginal gains; tuning partially helps
- Key insight: VLMs lack genuine spatial-numerical grounding despite appearing to produce meaningful numbers

### 5. EDGE-OPD: Evidence Guided On-Policy Distillation
**arXiv:2605.23493** (May 22, 2026) — cs.AI
- Problem: On-Policy Self-Distillation (OPSD) may train on side effects rather than desired transferable behavior
- Solution: Guided rollouts + evidence mask - only update student at token positions where privileged context supports the sampled token
- OPSD completely fails to learn target identity; EDGE-OPD succeeds
- Key insight: Localized evidence masking enables efficient knowledge transfer while preserving general capabilities

### 6. EPC-AW: Epistemic Planning Calibration for Multi-Agent Systems
**arXiv:2605.23414** (May 22, 2026) — cs.AI, cs.LG
- Problem: LLM multi-agent systems fail due to epistemic miscalibration - agents misjudge their knowledge when evaluating plan feasibility
- Solution: EPC-AW assesses plans under varying information conditions; uses consistency-based plan selection and epistemic state refinement
- Improves system-level success by average 9.75%
- Key insight: Epistemic calibration (not just execution correctness) is crucial for multi-agent planning

### 7. ASAM: Adversarial Multimodal Knowledge Editing
**arXiv:2605.23780** (May 22, 2026) — cs.AI
- Problem: Intrinsic multimodal knowledge editing achieves reliability but fails to generalize across semantic variations
- Solution: LAR (Latent Adversarial Robustification) + RCSL (Rank-Constrained Subspace Learning)
- Enforces low-rank alignment of adversarial representations at edit layer
- Key insight: Adversarial semantic supervision bridges the generalization gap in multimodal knowledge editing

## Sources
https://arxiv.org/abs/2605.23885 | https://arxiv.org/abs/2605.23668 | https://arxiv.org/abs/2605.23904 | https://arxiv.org/abs/2605.23898 | https://arxiv.org/abs/2605.23493 | https://arxiv.org/abs/2605.23414 | https://arxiv.org/abs/2605.23780
