# Task 1 Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — August 20, 2026

## Research Focus: chain-of-thought, prompt engineering, efficiency

---

### 1. SPADE: Self-Play in Adaptive Synthetic Executable Environments
**arXiv:2608.19197** (Aug 19, 2026) — cs.CL, cs.AI

**Summary:** Introduces SPADE, a self-play RL framework where a single LLM plays two roles: Environment Designer (writes complete training environments as executable code with OpenAI Gym-style reset()/step() interface) and Reasoning Agent (learns to act in them). Each environment is stateful, multi-turn with state transitions, reward functions, and verification code.

**Key findings:**
- Grounding the Environment Designer on documents from large pretraining corpus is critical
- Accumulated environment memory for the Designer is essential
- Scaling to 30B-parameter models: SPADE improves +5.3 avg over strongest fixed-environment baseline across 8 held-out math, science, code, and reasoning benchmarks
- Tool-use setting: +5.7 on BFCL-v4 multi-turn, +13.9 on ACEBench-Agent
- Environment design itself becomes a learnable component — concrete step toward open-ended self-improvement

**Key insight:** Self-generating adaptive training environments enable continuous capability scaling without fixed dataset constraints — the environment design problem, not just the reasoning problem, is learnable.

**Paper:** https://arxiv.org/abs/2608.19197

---

### 2. VAL: Verification Autonomy Levels (L0-L5) for LLM Reasoning
**arXiv:2608.19009** (Aug 19, 2026) — cs.CL

**Summary:** Proposes Verification Autonomy Levels (VAL), a meta-standard classifying verification schemes along a single axis: where does the verification spec come from, and what does the verdict guarantee? Ranges from L0 (LLM self-declaration, no deterministic anchor) through L2 (objective ground truth, correctness only) to L3/L4 (decidable systems with domain-level completeness), with L5 impossible in unrestricted case.

**Key findings:**
- **Central concept:** Completeness blind spot — substitution- and sampling-based verifiers can confirm candidates hold but cannot prove no candidate was missed
- **Dichotomy:** Completeness reachable only for formally specifiable properties; empirical open-world verification (fact-checking, diagnosis) caps at anchored correctness (L2)
- Documents across 4 domains: symbolic mathematics, behavior monitoring, medical diagnosis, code generation
- Granularity, concept hierarchy, risk, and system stack levels are orthogonal to VAL — resolves systematic conflation across 17 surveyed papers

**Key insight:** The verification literature conflates 5 different meanings of "level" — VAL provides a unified axis for comparing verification schemes: epistemic source of ground truth and what the verdict guarantees.

**Paper:** https://arxiv.org/abs/2608.19009

---

### 3. Test-Time Scaling in the Wild: Exploitation, Not Exploration, Is the Bottleneck
**arXiv:2608.18931** (Aug 19, 2026) — cs.CL, cs.AI

**Summary:** First compute-normalized comparison of 5 test-time scaling (TTS) families across 5 open-ended generation benchmarks (medicine, law, finance, general chat, creative writing). Decomposes effectiveness into exploration (generating candidate pool) and exploitation (choosing from it).

**Key findings:**
- **Exploration scales well:** Best candidate in pool improves steadily with compute across all settings
- **Exploitation breaks:** With SOTA generators, reward models correlate at only ρ_v ≈ 0.12 with true quality — selection is near-random regardless of budget
- Tree search amplifies failure through diversity collapse
- Refinement helps on 1/5 benchmarks; gains elsewhere are confounded
- Only synthesis across candidates (Fusion) consistently improves over single-sample, yet recovers only ~40% of available quality

**Key insight:** The candidate pool is not the bottleneck — choosing from it is. Test-time scaling gains in open-ended domains are fundamentally limited by exploitation quality, not exploration quantity.

**Paper:** https://arxiv.org/abs/2608.18931

---

### 4. DeepWeaver: Bridging the Evidence Synthesis Gap in Open-Ended QA
**arXiv:2608.18988** (Aug 19, 2026) — cs.CL, cs.AI

**Summary:** Proposes DeepWeaver for retrieve-then-generate pipelines in open-ended QA. Addresses the evidence synthesis gap — LLMs must organize noisy, fragmented evidence into comprehensive, well-cited answers. Uses Thought Block Chains (TBCs) to group claims, salient info, keywords, and supporting evidence.

**Key findings:**
- DeepWeaver maintains TBCs that subordinate TBCs inspect residual evidence, commit revisions, and discover new claims
- Evaluated on open-ended QA over knowledge bases and web
- Introduces LoQA, a high-density benchmark for evidence synthesis
- Improves content sufficiency, citation grounding, and detail preservation across multiple LLMs
- Higher citation quality on DeepResearch Bench

**Key insight:** Evidence synthesis is a distinct skill from retrieval — structured representation (TBCs) enables systematic evidence weaving that outperforms direct generation.

**Paper:** https://arxiv.org/abs/2608.18988

---

*Sources: arXiv/cs.CL Aug 19-20 listings (99 papers reviewed), arXiv TLDR Weekly Aug 20*
