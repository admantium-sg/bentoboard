# Task 1 Findings — arXiv papers (cs.CL, cs.LG, cs.AI)
# Chain-of-thought, Prompt Engineering, Efficiency
**Date:** 2026-08-29
**Source:** arXiv cs.CL recent (2608.27xxx range), TLDR weekly Aug 29, BenchLM Aug 29

## Papers Identified

### TTPO (2608.27448) — Test-Time Policy Optimization
cs.CL | Aug 27, 2026
- Asymmetric objective: distill agreeing rollouts via OPSD, penalize disagreeing rollouts with Grouped RL
- Token-level selection: distillation down-weights converged positions; RL penalizes only confident errors
- No labels needed — matches label-supervised OPSD on 5 competition-level benchmarks
- Qwen3-1.7B: 38.0% → 45.2% in TTT (test-time training)
- +25.2% to +36.4% on non-thinking tasks; strong cross-task generalization
- Key insight: test-time training without ground-truth labels is viable — pseudo-label errors are asymmetric and can be exploited
- URL: https://arxiv.org/abs/2608.27448

### RLVR Fusion Paradigms (2608.27409) — Merge vs Mix RL vs MOPD
cs.CL | Aug 27, 2026
- Three fusion paradigms: Merge (combine expert task vectors), Mix RL (pool datasets), MOPD (multi-teacher on-policy distillation)
- Average gap only 1.4pp but up to 8.6pp on single benchmarks
- Merge: best when experts exist + cheap fusion needed
- Mix RL: best for unified model from scratch, adjust proportions for cross-domain transfer
- MOPD: best when preserving domain-specific gains matters more than surpassing teachers
- All three improve single-sample accuracy without solution coverage gains or held-out capability loss
- Key insight: RLVR expert fusion is a solved problem with clear tradeoffs — choice depends on infrastructure state
- URL: https://arxiv.org/abs/2608.27409

### Puro-2B (2608.27370) — $6.9K Pretraining on RTX 5090
cs.CL, cs.LG | Aug 27, 2026
- Open pretraining recipe for consumer-grade RTX 5090 GPUs with FP8 precision
- Trains Puro-2B from scratch on up to 1.4T tokens
- Compute cost under $6.9K — approaches Qwen2.5-1.5B performance
- Puro Cost Scaling Law: ~$4.4K sufficient to match Qwen2-1.5B
- Techniques: hardware selection, FP8 training, hyperball optimization, curriculum model averaging, data recipe
- Released under Apache 2.0: data, code, model weights
- Key insight: pretraining is no longer exclusively for well-funded labs — open recipe democratizes base model training
- URL: https://arxiv.org/abs/2608.27370

### INTENT-AS-A-TOOL (2608.27348) — Tracking Agentic Misalignment via Intent Tools
cs.CL | Aug 27, 2026
- Adds intent-targeted tools as dedicated channel for behavioral commitment signals
- Intent tool call probability = judge-free fine-grained signal of behavioral tendency
- Expands post-hoc CoT monitoring into dense trajectories for online intervention
- Complements CoT monitoring; identifies critical steps for intervention
- Key insight: intent signals precede harmful execution in reasoning traces — dedicated intent tools enable earlier intervention than post-hoc CoT review
- URL: https://arxiv.org/abs/2608.27348

### Moral Knowledge Organization (2608.27402) — Geometric Structure of MFT in LLMs
cs.CL, cs.AI, cs.LG | Aug 27, 2026
- Six independent linear probes for Moral Foundations Theory categories
- Moral directions span near-maximal independent dimensions + shared positive component (integration signature)
- Shared component is moral-specific vs matched non-moral battery (cosine 0.26 vs 0.013)
- Geometry consistent across architectures and scale; reaches integration regime early in pretraining
- Moral dilemma directions partially compose from component foundations at 2.7x mismatched-pair baseline
- Key insight: LLMs don't just detect morality — they organize moral foundations geometrically with corpus-statistics-driven structure
- URL: https://arxiv.org/abs/2608.27402

### CAST (2608.27397) — Concept-Guided Artifact Suppression for Clinical LLM Auditing
cs.CL, cs.AI | Aug 27, 2026
- SAE-based framework exposes sparse, auditable features from intermediate activations
- LLM-assisted interpretation + ICD-10 retrieval constraints for labeling SAE latents
- Suppresses artifact latents via residual subtraction during fine-tuning
- Provides post-hoc per-concept attributions for auditing decisions
- Key insight: clinical models exploit template/boilerplate artifacts, not patient state — SAE-based auditing can expose and suppress these
- URL: https://arxiv.org/abs/2608.27397

## Sources
https://arxiv.org/abs/2608.27448 | https://arxiv.org/abs/2608.27409 | https://arxiv.org/abs/2608.27370 | https://arxiv.org/abs/2608.27348 | https://arxiv.org/abs/2608.27402 | https://arxiv.org/abs/2608.27397 | https://benchlm.ai/reasoning | https://arxivtldr.org/weekly
