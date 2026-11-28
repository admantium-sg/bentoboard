# Findings: Task 1 - arXiv Papers (Aug 30, 2026)
Research area: chain-of-thought, prompt engineering, efficiency

## Papers from arXiv TLDR Weekly (Aug 30, 2026)

### 1. SDP - Safety-Direction Penalty (2608.23497)
cs.AI, cs.CL | #2 arXivTLDR weekly
- **Title:** Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty
- **Problem:** Reasoning fine-tuning (math, code, CoT) can induce harmful behaviors even without harmful content — RIM (Reasoning-Induced Misalignment)
- **Method:** Identifies coupled reasoning-safety activation-space directions. SDP penalizes movement along learned safety direction during reasoning fine-tuning. CKA distance ratios and probes locate safety-decision layers where shift is most relevant.
- **Results:** On Qwen2.5-3B and 7B, SDP restores safety while preserving benchmark reasoning performance
- **Key insight:** RIM is geometry-based, not just neuron-level entanglement — representation space analysis enables targeted intervention
- **Paper:** https://arxiv.org/abs/2608.23497

### 2. CLEAR - Continuous Latent Adapter Routing (2608.21278)
cs.AI | #7 arXivTLDR weekly
- **Title:** Continuous Latent Adapter Routing for Utility-Preserving LLM Safety Alignment
- **Problem:** Global safety tuning degrades utility on benign prompts
- **Method:** Lightweight hidden-state gate controls activation strength of safety low-rank adapter conditionally. Reduces harmful completions without affecting frozen backbone.
- **Results:** On Llama-3-8B-Instruct: HarmBench ASR 32.3% → 0.5%, GSM8K +7.1pp vs global SFT/LoRA
- **Key insight:** Conditional safety adaptation preserves utility while hardening safety — adapter routing provides fine-grained control
- **Paper:** https://arxiv.org/abs/2608.21278

### 3. NeuronGuard (2608.23959)
cs.CR, cs.AI, cs.IR, cs.LG | #9 arXivTLDR weekly | EMNLP 2026 Findings
- **Title:** Robust LLM Safety Alignment via Ablation-Aware Safety Signal Redistribution
- **Problem:** Safety info concentrates in sparse neuron subset — vulnerable to jailbreak and neuron-level ablation attacks
- **Method:** Redistributes safety signals across broader neuron set during fine-tuning. Dynamic safety-critical neuron identification, forces refusal under ablation, KL-divergence regularization.
- **Results:** Near-zero ASR across 3 LLMs, 6 attack strategies, multimodal settings. Formal guarantee: strictly reduces ASR upper bound.
- **Key insight:** Sparse safety signal concentration is the common vulnerability — redistribution is the fix
- **Paper:** https://arxiv.org/abs/2608.23959

### 4. Evolution Strategies for LLM Reasoning (2608.27351)
cs.LG | #5 arXivTLDR weekly
- **Title:** Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO
- **Problem:** ES seen as memory-efficient alternative to GRPO, but its advantage scope unclear
- **Method:** Verifier-projected Jensen-Shannon diversity across ES population. Functional sparsity analysis.
- **Results:** ES leads to broader reasoning coverage, higher Pass@K than GRPO. Sequential GRPO-ES combines Pass@1 strength with Pass@K gains. Task gains from sparse large-magnitude updates — doesn't cause catastrophic forgetting.
- **Key insight:** ES is a distinct reasoning post-training paradigm, not just memory-efficient alternative to GRPO
- **Paper:** https://arxiv.org/abs/2608.27351

### 5. Trace Integrity (2608.26036)
cs.AI, cs.CL | #4 arXivTLDR weekly
- **Title:** Trace Integrity for LLM Data Agents: A Vision for Auditable Structured Reasoning
- **Problem:** Answer accuracy insufficient — benchmark-correct answers often come from invalid traces (CAIT rates 45-55%)
- **Method:** Trace Integrity properties: explicit, executable, schema-valid, operator-faithful, replayable, answer-consistent, auditable. Execution contracts bind user intent to schema elements, operator plans, assumptions, executable queries.
- **Results:** On BIRD Mini-Dev: CAIT rates 45-55% show answer accuracy ≠ trace validity
- **Key insight:** Answer accuracy and trace validity are distinct evaluation signals — current benchmarks miss silent computation failures
- **Paper:** https://arxiv.org/abs/2608.26036

### 6. PeakBench (2608.24509)
cs.AI, cs.SE | #3 arXivTLDR weekly
- **Title:** PeakBench: Benchmarking Resource-Aware Tool Invocation in LLM Agents
- **Problem:** Existing benchmarks ignore parallel execution and resource constraints
- **Method:** Executable multi-tool workflows with dependency annotations and resource profiles. Two-part evaluation: disentangles logical planning from physical scheduling.
- **Results:** Strong logical planning doesn't translate to safe/efficient execution under resource constraints. Exposing resource info reduces overflows.
- **Key insight:** Agent tool invocation requires joint planning + scheduling evaluation — decoupled approaches miss failures
- **Paper:** https://arxiv.org/abs/2608.24509

## Summary
Today (Sunday Aug 30): No new arXiv submissions (arXiv doesn't publish on weekends). Research covers papers from Aug 24-28 that appeared in this week's arXiv TLDR. Safety alignment is the dominant theme — three papers on different aspects (SDP, CLEAR, NeuronGuard) reflecting the RIM (Reasoning-Induced Misalignment) concern. ES vs GRPO comparison clarifies that ES is a distinct paradigm. Trace Integrity highlights answer accuracy ≠ trace validity.
