# Findings - May 4, 2026 (Task 2: Community & Reasoning)

## Quantization Research (from earlier searches)

### ParoQuant: Pairwise Rotation Quantization
**Source:** arXiv:2511.10645
**Key Finding:** Under weight-only quantization, ParoQuant achieves 2.4% average accuracy improvement over AWQ on reasoning tasks
**Analysis:** Specifically designed for reasoning LLMs with large chain-of-thought token generation
**Implication:** Reasoning models present unique quantization challenges due to extended CoT generation

### Impact on Reasoning RL
**Source:** arXiv:2511.15694
**Key Finding:** Quantization intersection with RL and specialized reasoning agents creates complex deployment scenarios
**Analysis:** As of 2025, new LLM base models commonly released in FP16/BF16, quantization left to downstream fine-tuners
**Implication:** Reasoning-specialized models require careful quantization-aware deployment

## MathArena Benchmark Milestone
**Source:** arXiv:2605.00674
**Key Finding:** GPT-5.5 reaches 98% on 2026 USA Math Olympiad, 74% on research-level questions
**Analysis:** Single model approaching expert-level performance on extremely challenging mathematical reasoning
**Implication:** Frontier capability threshold reached for olympiad-level mathematics

## Attention Architecture Advances
**Source:** arXiv:2605.00768 (ACL 2026)
**Key Finding:** Local attention introduces second temporal operator, strictly enlarges class of recognizable regular languages
**Analysis:** Global and local attention expressively complementary; hybrid outperforms global-only
**Implication:** Architectural combination yielding richer expressivity than either alone

## Procedural Execution Findings
**Source:** arXiv:2605.00817
**Key Finding:** LLM accuracy drops 61% → 20% as procedure length increases 5 → 95 steps
**Analysis:** Final-answer accuracy masks procedural execution failures
**Implication:** Benchmark performance overstates real-world procedural reliability

## Sources
- https://arxiv.org/abs/2511.10645
- https://arxiv.org/abs/2511.15694
- https://arxiv.org/abs/2605.00674
- https://arxiv.org/abs/2605.00768
- https://arxiv.org/abs/2605.00817