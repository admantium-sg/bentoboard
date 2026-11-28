# Task 1 Findings — 2026-09-07
# arXiv papers: cs.CL/cs.LG/cs.AI — chain-of-thought, prompt engineering, efficiency

## Research Questions
- New arXiv papers on chain-of-thought reasoning, prompt engineering, and model efficiency
- September 7 batch: 151 new cs.CL papers submitted

## Key Findings

### 1. Scale-QLoRA: Code-Invariant Adapter Merging for Native 4-bit Microscaling LLMs
**arXiv:2609.04526** (Sep 3, 2026) — cs.CL, cs.LG
- Merging LoRA adapters into native 4-bit microscaling checkpoints (NVFP4, MXFP4) is non-trivial: naive re-derivation of E2M1 code plane degrades accuracy by up to 39pp
- Scale-QLoRA: adapts only per-block scale fields on the deployment grid, freezing E2M1 codes — merging becomes bit-exact identity
- QAT-LoRA re-derives the code plane through a quantizer; Scale-QLoRA preserves it exactly
- Accuracy-lossless across 4 models and 4 tasks vs naive merging
- Enables ~125x faster scale-only task swap; exact rollback; code-plane deduplication
- Sensitivity bound: extreme rule mismatches can drive weight-space artifact to ~0%
- Key insight: NVFP4/MXFP4 require quantization-aware adapter merging; naive approaches delete the adaptation
- Paper: https://arxiv.org/abs/2609.04526

### 2. MBP: Masked Boundary Pause Tokens Recast CoT as Training-Dynamics Intervention
**arXiv:2609.04489** (Sep 3, 2026) — cs.CL, cs.AI
- Prior work explains pause-token gains through computational expressivity; this paper studies training dynamics instead
- Masked Boundary Pause (MBP): place pause tokens at reasoning-step boundaries, mask their loss
- Two findings: H1 (mode retention) — masked pauses overwrite prior distribution ~4x less at matched adaptation; H2 (non-myopic compression) — boundary-adjacent token encodes more downstream-step information
- Across Qwen and Llama 1B-8B: up to 6pp gains on math, 2.5pp on code, without degrading general language understanding
- Extends to GRPO (group relative policy optimization)
- Key insight: pause tokens are not just an inference-time computation device — they reshape the retention-adaptation trade-off during training
- Paper: https://arxiv.org/abs/2609.04489

### 3. Evidence Integration in LLMs: A Distributional Theory
**arXiv:2609.04290** (Sep 3, 2026) — cs.CL, cs.AI, cs.LG
- Studies how LLMs integrate external evidence (from tools, RAG, other agents, users) into decisions they have already begun to form
- Distributional theory: evidence shifts receiver's distribution of initial answers, driven by receiver prior weight and candidate evidence tilt
- Three predictions confirmed over 10M trials, 12 LLMs, 8 domains (incl. quantum mechanics, physics, genetics, molecular biology):
  1. Candidates more probable to the receiver are more persuasive
  2. Receivers more readily integrate characteristic errors of their own than foreign errors
  3. Identical evidence can improve weaker models and harm stronger ones
- Causal implementation: candidate integration happens late in the network as a structured sequence of steps
- Representations of verbalized verification are decodable but have little causal impact on actual answers
- J-lens decomposition shows verification state is fully dissociable from candidate integration state
- Key insight: evidence integration is a receiver-specific control policy, not scalar trust in the source
- Paper: https://arxiv.org/abs/2609.04290

### 4. Cache-Aware Spatio-Temporal Router for Memory-Efficient MoE Inference
**arXiv:2609.04895** (Sep 4, 2026) — cs.CL
- MoE models activate only a subset of experts per token, but full expert set often exceeds GPU memory — causes repeated weight transfers
- Temporal Router: predicts same-layer expert reuse, retains experts for future tokens without proactive loading
- Spatio-Temporal Router: adds spatial component using causal predecessor's hidden state to refine temporal cache before target-layer access
- On Qwen3: best load-adjusted efficiency, +1.15–18.03pp adjusted hit rate, -4.6–53.3% traffic vs strongest prefetching baseline
- Results on GPT-OSS competitive but task-dependent
- Key insight: MoE inference efficiency is a model-side algorithmic problem, not just hardware
- Paper: https://arxiv.org/abs/2609.04895

### 5. Causally Validating Multilingual SAE Translation Features in Gemma 2 and 3
**arXiv:2609.04808** (Sep 4, 2026) — cs.CL, cs.AI | BlackboxNLP 2026 Special Track
- Sparse autoencoder (SAE) features for translation-initiation found across languages may not transfer causally
- Reproduced SAE feature discovery in Gemma 2, extended to multilingual settings (vary prompt/source/target language)
- Key finding: feature recurrence across settings overstates cross-lingual transfer — nearly all recurrent features have small/inconsistent causal effects
- One exception: Gemma 2 (L10, 5717) and Gemma 3 (L20, 2456) consistently improves COMET scores when amplified, degrades when ablated, across 23 language settings
- Key insight: language-agnostic translation-initiation direction exists, but is rare; most recurring features are spurious
- Paper: https://arxiv.org/abs/2609.04808

### 6. Discourse Dependency: A Continuous Criterion for Translation Difficulty
**arXiv:2609.04959** (Sep 4, 2026) — cs.CL | EMNLP 2026 Main Conference
- Introduces referential reach — how far a segment must look back into its document to resolve entities and pronouns
- Formalized as Discourse Dependency (DDP): metric-free, source-side measure from named entity re-mentions and pronominal coreference
- WMT24++ and WMT25 heavily skewed toward low-DDP segments; domain labels don't distinguish them
- As DDP grows, no context injection strategy keeps pace with human post-editing; at DDP >= 15, humans prefer human translations while automatic metrics show no difference
- Key insight: as frontier systems saturate aggregate MT scores, DDP shifts evaluation from scoring to reach — how far models can actually look back
- Paper: https://arxiv.org/abs/2609.04959

### 7. WearableQA: Benchmark for LLM Reasoning Over Real-World Wearable Data
**arXiv:2609.05405** (Sep 4, 2026) — cs.CL
- Benchmark: 4,084 10-option MCQ from 200 real users' wearable time series, blood biomarkers, demographics (up to 500 days)
- 16 question types across two axes: data vs. health reasoning, single vs. cross-signal
- Dual-grounding: literature-grounded + statistically validated population-grounded physiological patterns
- 14 models evaluated: 19.6% to 72.9% accuracy vs 10% chance baseline; most below 60%
- Key insight: real-world longitudinal physiological data is a new frontier for multi-modal reasoning benchmarks
- Paper: https://arxiv.org/abs/2609.05405

### 8. MedProb: Lightweight Probing for Medical VQA Without Fine-Tuning
**arXiv:2609.04336** (Sep 3, 2026) — cs.CL | EMNLP Findings 2026
- MedVQA assumed to require medical fine-tuning, large models, or multi-agent pipelines
- MedProb: predicts MC answers from frozen VLM representations via linear probing — no generation needed
- Outperforms prompting on PATH-VQA, SLAKE, VQA-RAD; beats medical VLMs and agentic systems
- Small VLMs contain more recoverable MedVQA signal than generation-based evaluation reveals
- Free-text generation has up to 10pp answer-position bias; MedProb's positional bias is different in character
- Key insight: linear probing of frozen representations may outperform generation for diagnostic Medical VQA
- Paper: https://arxiv.org/abs/2609.04336

## Notes
- September 7 cs.CL batch: 151 new submissions
- EMNLP 2026 continues to dominate acceptance announcements
- Focus themes: efficiency (MoE routing, quantization, KV cache), reasoning (pause tokens, evidence integration), and medical/applied benchmarks
- Scale-QLoRA is highly practical given NVIDIA's push toward NVFP4 deployment
