# Task 1 Findings — Oct 8, 2026
# arXiv papers (cs.CL, cs.LG, cs.AI): chain-of-thought, prompt engineering, efficiency

## Sources
- https://arxiv.org/abs/2610.10533 (EngramEdit)
- https://arxiv.org/abs/2610.10455 (PHRBench)
- https://arxiv.org/abs/2610.10426 (CoTrace)
- https://arxiv.org/abs/2610.10332 (Task-Progress Distillation)
- https://arxiv.org/abs/2610.09772 (Structural Immunity / AO-DA)
- https://arxiv.org/abs/2610.09976 (EASE)
- https://arxiv.org/abs/2610.09835 (Catastrophic Forgetting in Output Embeddings)
- https://arxiv.org/abs/2610.10232 (LLM Persuasion evaluation)
- https://arxiv.org/abs/2610.09795 (MIRROR personalization)

---

### EngramEdit: Decoupled Knowledge Updates through Conditional Memory
**arXiv:2610.10533** (Oct 7, 2026) — cs.CL
- Builds on DeepSeek Engram conditional memory architecture
- EngramEdit computes target memory representations that make the model predict updated facts across multiple expressions
- Jointly updates shared n-gram embeddings across expressions, penalizing frequent embeddings more strongly
- Near-perfect editing success; revised knowledge usable across unseen expressions and multi-hop reasoning
- Nearly 3x stronger than baseline under CoT prompting; unrelated knowledge and general capabilities largely preserved as updates accumulate
- Key insight: conditional memory (Engram) extends beyond model scaling to become an editable knowledge interface
- Paper: https://arxiv.org/abs/2610.10533

### PHRBench: Post-Hallucination Reasoning Evaluation
**arXiv:2610.10455** (Oct 7, 2026) — cs.CL, cs.AI
- PHRBench: controlled benchmark for behavioral PHR across 4 domains, 18 LLMs, 4820 controlled instances
- Measures Hallucination Compliance, Hallucination Avoidance, Heuristic Correction independently of final-answer correctness
- Successful recovery remains relatively rare; associated with more frequent belief updates along trajectory
- Lightweight predictor achieves AUROC 0.847 for successful recovery from hallucinated prompt properties
- Key insight: recovery likelihood is predictable — hallucination properties contain substantial signal for recovery success
- Paper: https://arxiv.org/abs/2610.10455

### CoTrace: Harness-Aware Data Recipes for Terminal Agents
**arXiv:2610.10426** (Oct 7, 2026) — cs.CL
- Terminal-agent capability = model weights + runtime harness jointly
- CoTrace: harness-aware data recipe governing trajectory routing, provenance matching, curriculum refresh
- Qwen3.5-9B: 78 → 88 solved tasks (SFT), 90 with online RL on Tmax promotion split
- Compact harness-matched corpus outperforms much larger pooled corpora at lower compute
- Out-of-distribution transfer depends on harness compatibility; consistency between training/eval runtimes prevents procedural execution breakdowns
- Key insight: trajectory value for model training depends on the harness under which it was generated
- Paper: https://arxiv.org/abs/2610.10426

### Task-Progress Distillation: Small Agents from Compact Supervision
**arXiv:2610.10332** (Oct 7, 2026) — cs.CL
- Task-Progress Distillation (TPD): pairs each demonstrated action with a short label describing current task stage
- 1.7B student: 72.4% success with TPD or action-only (vs 48.3% for reasoning-trained student)
- Explicit stages improve at intermediate demonstration budget (200 demos: 48.0% → 67.7% over action-only)
- Both approaches reach 76.9% at 808 demonstrations
- Key insight: compact task-stage labels provide meaningful guidance at intermediate budgets; action-only catches up with scale
- Paper: https://arxiv.org/abs/2610.10332

### Structural Immunity: Decoupling Logic from Persona in Edge LLM Agents
**arXiv:2610.09772** (Oct 7, 2026) — cs.CL, cs.AI
- AO-DA: Decoupling Architecture separating logical inference ("What") from persona expression ("How") on INT4 base + hot-swappable LoRA
- Logic path receives only core turn → emits verifiable structured Micro-State; persona path renders in character with full history
- Decoupled logic path structurally invariant to pollution: byte-identical outputs across 4 pollution levels (40/40 runs)
- Mixed single-pass degrades monotonically: composite logic score 0.669 → 0.150 on Llama-3.1-8B
- 80-95% of mixed-pass runs on Llama fail to emit required structured output at highest pollution levels
- Key insight: separation of concerns (logic vs persona) is a structural, not just behavioral, defense against context pollution
- Paper: https://arxiv.org/abs/2610.09772

### EASE: Evading AI-Generated Text Detectors via Entropy-Adaptive Distribution Shaping
**arXiv:2610.09976** (Oct 7, 2026) — cs.CL
- EASE: training-free, detector-agnostic framework for evading AIGT detectors
- Computes predictive entropy from source LLM's next-token distribution; adapts both logit perturbation and sampling temperature
- No detector feedback or model fine-tuning required
- Consistent detection reductions across multiple LLMs and detectors with negligible text quality degradation
- Key insight: next-token entropy is sufficient signal for adaptive evasion without any detector access
- Paper: https://arxiv.org/abs/2610.09976

### Catastrophic Forgetting Lives in Output Embeddings
**arXiv:2610.09835** (Oct 7, 2026) — cs.CL, cs.AI
- Forgetting concentrates selectively in output embeddings of tokens rarely seen in new corpus
- Same sqrt(v-hat) band of the body is inert; new learning resides elsewhere
- Root cause: absent tokens receive persistent one-sided softmax gradients that Adam's sqrt(v-hat) normalization amplifies into full-sized updates
- Fix: raise Adam's epsilon exclusively for output projection during training
- Removes 39.4% to 67.9% of forgetting across 8 settings (160M to 12B parameters); combines with or outperforms replay (79.8% on Qwen/Korean)
- Post-hoc editing recovers under 5% — intervention must be during training
- Key insight: catastrophic forgetting localizes to output embeddings; single-line optimizer adjustment may be primary defense where corpus starves vocabulary
- Paper: https://arxiv.org/abs/2610.09835

### LLM Persuasion Evaluation: Methods Agree Only Weakly
**arXiv:2610.10232** (Oct 7, 2026) — cs.CL, cs.AI, cs.CY
- 9 automated persuasion methods evaluated on same 15 LLMs in shared setup
- Methods agree only weakly: mean Spearman ρ = 0.25
- Contributing factors: (1) task refusal lowers agreement by ~25%, falling mostly on manipulation tasks; (2) general capability tracks non-manipulation methods, not manipulation methods
- Persuasion scores combine ability to persuade with willingness to do so
- Key insight: single persuasion score is informative about its own setting but says little about persuasiveness across tasks
- Paper: https://arxiv.org/abs/2610.10232

### MIRROR: From Imitation to Internalization in LLM Personalization
**arXiv:2610.09795** (Oct 7, 2026) — cs.CL, cs.AI
- MIRROR: self-distillation framework shifting LLM personalization from imitation to preference internalization
- Reference-revealed on-policy self-distillation aligns model's distributions along own generation trajectories with reference-conditioned self
- MIRROR-F: focal plug-in augmenting alignment with selective supervision over informative reference tokens
- Leads on 3 personalized generation benchmarks; less catastrophic forgetting than SFT baselines
- Key insight: internalizing preferences through self-distillation preserves content quality better than copying reference style
- Paper: https://arxiv.org/abs/2610.09795
