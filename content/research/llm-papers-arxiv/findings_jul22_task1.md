# Findings: Task 1 — arXiv Papers (July 22 Batch)
**Date:** 2026-07-22
**Focus:** cs.CL/cs.AI/cs.LG — chain-of-thought, prompt engineering, efficiency

## Papers Reviewed

### 1. GEAR: Overcoming Repetitive Copying in Long-Context Reasoning via Evidence-Aware RL
**arXiv:2607.19345** — cs.CL, cs.AI | Submitted Tue, 21 Jul 2026

Key finding: In long-context settings, frontier LLMs exhibit "repetitive copying" — extensively copying text from input into reasoning traces rather than productively solving problems. This failure mode intensifies with context length.

Root cause: Insufficient grounding — models copy from prompt indiscriminately, failing to focus on key evidence.

Proposed solution: GEAR (Grounding Evidence-Aware Reward) — augments accuracy signal with:
- Grounding reward for overlap with key evidence
- Distractor penalty for overlap with irrelevant context

Results: +4.6 average points over standard RL with accuracy-based rewards, larger gains at longer contexts, reduced repetitive copying and thinking length.

**Novelty:** First systematic diagnosis and remedy for repetitive copying as a distinct long-context CoT failure mode.

---

### 2. MaLoRA + MaRA: Selective State-Space Adaptation for LLM Reasoning
**arXiv:2607.19326** — cs.CL | Submitted Tue, 21 Jul 2026

Key finding: Standard LoRA applies a static learned update identically to every input — provides task-level adaptation but misses token-level and instance-level state variation.

Proposed: Two complementary adapters:
- **MaLoRA** (Mamba-modulated LoRA): Makes adapter's scaling factor a dynamic input-dependent function with recurrent state across tokens
- **MaRA** (Mamba Retrieval Adapter): Tracks cross-segment state, selects most relevant segments before answer generation

Results across Qwen-2.5-7B, Llama-3.1-8B, Gemma-2-9B on MuSiQue and 2WikiMultihopQA:
- +6.8 F1 average (+10.5% relative) over LoRA baseline
- Up to +9.3 F1 (+18.2% relative) on hardest cases
- Gains carry to RULER QA-2 under length stress

**Novelty:** First selective state-space adaptation at both token and context levels for LLM reasoning.

---

### 3. VeyraBench: Format, Instruction Count, and Context Length Effects on LLM Instruction Adherence
**arXiv:2607.19257** — cs.CL, cs.AI | Submitted Tue, 21 Jul 2026

Systematic study of three under-researched prompt design decisions:
1. Format (markdown, plain text, prose, tabular)
2. Number of simultaneous instructions (10–160 rules)
3. Context length (2k–512k tokens)

Key findings:
- Perfect-response rate collapses to zero by N=80 instructions for every model, format, and placement
- System-prompt vs. user-turn placement produces effects at least as large as format at N=160
- No model shows reliable markdown advantage; one 35B model favors plain text
- Recall stays near ceiling through 64-128k tokens, then degrades sharply (one model's spread reaches 48 points at 128k)
- Near context ceiling: refusal to answer rises from 0% to 79-90% — distinct from sycophancy or fabrication
- Fabrication never occurred (0/5,760 probes)

Released: Full harness, corpus generator, raw results (VeyraBench)

**Novelty:** First controlled multi-factor study on instruction-following collapse thresholds and context-length-driven refusal patterns.

---

### 4. DAIS: Dependency-Aware Intermediate QA Supervision for Complex Reasoning
**arXiv:2607.19088** — cs.CL, cs.AI | Submitted Tue, 21 Jul 2026

Problem with standard CoT supervision: Flat rationale targets optimize a single reasoning sequence, provide limited supervision on how local conclusions should support later decisions.

Proposed: DAIS (Dependency-Aware Intermediate QA Supervision) — converts filtered teacher rationales into stage-level QA records. Each intermediate record predicts a local answer conditioned on previous states needed for that decision.

Results across GDPR, AIACT, MedQA, FOLIO with multiple Qwen backbones:
- Largest gain of 5.6% and average gain of 4.2% over strongest non-DAIS baseline
- Valid previous-state conditioning contributes beyond longer targets or additional intermediate text

**Novelty:** First approach to model dependency structure explicitly in intermediate CoT supervision.

---

### 5. CircuitKIT: Mechanistic Interpretability Circuit Discovery and Evaluation Toolkit
**arXiv:2607.19317** — cs.LG, cs.CL | Submitted Tue, 21 Jul 2026

Problem: Circuit analysis methods are fragmented — separate implementations for discovery, evaluation, and intervention, plus hand-authoring of contrastive prompts. Makes methods hard to compare and limits application beyond canonical tasks.

Proposed: CircuitKIT — source-available library connecting circuit-analysis workflow through typed, serializable representation. Includes:
- Suite of discovery algorithms
- Declarative interfaces for mapping structured data into discovery tasks
- Complementary circuit diagnostics
- Downstream application modules (pruning, editing, steering, selective fine-tuning)

Released: GitHub (Lexsi-Labs/CircuitKIT)

**Novelty:** First unified toolkit connecting the full circuit-analysis pipeline from discovery through intervention.

---

### 6. Agents in the Wild: Where Research Meets Deployment
**arXiv:2607.19336** — cs.AI, cs.CL | Submitted Tue, 21 Jul 2026

Tutorial paper bridging academic agent research and production deployment challenges. Covers:
- Reasoning and planning advances
- Multi-agent coordination
- Evaluation and robustness
- Safety and reliability

Case studies in pharmaceutical discovery and financial systems. Practical failure modes and mitigations: verification pipelines, fallback mechanisms, human-in-the-loop supervision.

**Novelty:** Applied synthesis of agentic system deployment lessons — practical checklist and design patterns for researchers and practitioners.

---

## Duplicate Check vs. Prior Coverage (July 21 batch)
- GEAR / repetitive copying: Novel — new failure mode identified, not in prior reports
- MaLoRA/MaRA: Novel — selective state-space adaptation approach not previously covered
- VeyraBench: Novel — systematic format/instruction/context study, new benchmark
- DAIS: Novel — dependency-aware intermediate supervision, distinct from prior CoT work
- CircuitKIT: Novel — unified circuit analysis toolkit
- Agents in the Wild: Novel — tutorial bridging research and deployment

## Sources
- https://arxiv.org/abs/2607.19345
- https://arxiv.org/abs/2607.19326
- https://arxiv.org/abs/2607.19257
- https://arxiv.org/abs/2607.19088
- https://arxiv.org/abs/2607.19317
- https://arxiv.org/abs/2607.19336
