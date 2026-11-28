# Findings: Task 1 - arXiv Papers (June 18, 2026)

## DreamReasoner-8B: Block-Size Curriculum Learning for Diffusion Reasoning
**arXiv:2606.19257** (June 17, 2026) — cs.CL

Block diffusion language models accelerate via parallel block-wise denoising, but scaling for long CoT reasoning was unresolved. DreamReasoner-8B is an open-source block diffusion reasoning model.

Key findings:
- Training with large block sizes yields remarkably poor reasoning
- Small block sizes preserve effective reasoning
- Block-size curriculum learning bridges the gap: gradually transitions training from fine-grained to coarse-grained block sizes
- Competitive with Qwen3-8B on math and code reasoning benchmarks

**Key insight:** The granularity gap is the key challenge for diffusion reasoning models — curriculum learning over block sizes enables generalization across diverse inference block sizes.

---

## Rethinking Efficient Attention in Hybrid Architectures
**arXiv:2606.15378** (June 13, 2026) — cs.CL, cs.LG

Systematic analysis of hybrid architectures combining full attention with efficient modules (sliding-window, recurrent mixers).

Key findings:
- Efficient-attention design mainly affects how fast long-context capability emerges
- Different hybrids eventually converge to comparable long-context performance under sufficient training
- Large-Window Laziness: larger SWA windows can delay formation of retrieval heads in full-attention layers
- NoPE (no positional encoding) applied only to full-attention layers of small-window SWA hybrid substantially improves long-context performance

**Key insight:** Full attention handles long-range retrieval; efficient attention shapes the optimization trajectory. Applying NoPE selectively is the winning recipe.

---

## RepSelect: Robust LLM Unlearning
**arXiv:2606.17168** (June 15, 2026) — cs.CL

Current unlearning methods are easily reversed by fine-tuning or few-shot prompting — forgetting is only shallow.

Solution: RepSelect (Representation Selectivity)
- Collapses top principal components of weight gradients before each update
- Isolates forget-set-specific representations
- Leaves general capabilities intact
- Limits what fine-tuning can recover

Evaluated across Llama 3, Qwen 3.5, Gemma 4 E4B, DeepSeek V2 Lite:
- 4-50x larger reduction in post-relearning answer accuracy vs strongest baseline
- Near-perfectly robust to few-shot prompting attacks

**Key insight:** Targeting selective representations (not shared ones) enables deep and robust forgetting.

---

## WAPO: Winner Advantage Policy Optimization
**arXiv:2606.16154** (June 15, 2026) — cs.LG

GRPO-style RLVR optimization prone to collapse. WAPO analyzes instability through token-level gradient dynamics.

Taxonomy shows: stability depends jointly on advantage sign and token distribution under current policy.

Solution: WAPO updates only on positive-advantage completions (simple online clipped policy-gradient).

Results: improves training stability, matches or outperforms baselines across math reasoning and multi-hop QA benchmarks.

**Key insight:** Positive-advantage-only updates resolve GRPO collapse — only the winning completions teach.

---

## AI Index Report 2026
**arXiv:2606.15708** (April 2026) — cs.AI

Ninth edition. Key themes:
- AI advancing faster than governance/evaluation/education can keep up
- AI being tested more ambitiously across reasoning, safety, real-world execution
- Measurements increasingly difficult to rely on
- New: chapters on AI in science and AI in medicine
- New: analytical framework on AI sovereignty
- New: economic value estimates and labor market effects

**Key insight:** The gap between AI capability and institutional preparedness is now a central theme.

---

## Sources:
- https://arxiv.org/abs/2606.19257
- https://arxiv.org/abs/2606.15378
- https://arxiv.org/abs/2606.17168
- https://arxiv.org/abs/2606.16154
- https://arxiv.org/abs/2606.15708
