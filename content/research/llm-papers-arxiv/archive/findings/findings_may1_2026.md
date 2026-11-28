# Findings - May 1, 2026

## Task 1: arXiv Papers - Chain-of-Thought, Prompt Engineering, Efficiency

### 1. LLM Reasoning Is Latent, Not the Chain of Thought (arXiv:2604.15726)
- **Submitted:** April 17, 2026
- **Authors:** Wenshuo Wang
- **Key Argument:** LLM reasoning should be studied as latent-state trajectory formation rather than faithful surface CoT
- **Three Hypotheses Formalized:**
  - H1: Reasoning primarily mediated by latent-state trajectories
  - H2: Reasoning primarily mediated by explicit surface CoT
  - H0: Apparent reasoning gains explained by generic serial compute
- **Key Finding:** Current evidence most strongly supports H1 - latent-state dynamics should be the default object of study
- **Recommendations:** 
  1. Treat latent-state dynamics as default for LLM reasoning research
  2. Evaluate reasoning with designs that disentangle surface traces, latent states, and serial compute
- **Implications:** Claims about faithfulness, interpretability, reasoning benchmarks, and inference-time intervention all depend on this foundational question
- **URL:** https://arxiv.org/abs/2604.15726

### 2. Thinking Without Words: Efficient Latent Reasoning with Abstract Chain-of-Thought (arXiv:2604.22709)
- **Submitted:** April 24, 2026
- **Authors:** Keshav Ramji, Tahira Naseem, Ramón Fernandez Astudillo
- **Proposed:** Abstract-CoT - discrete latent reasoning post-training mechanism
- **Mechanism:** Model produces short sequence of tokens from reserved vocabulary (not natural language CoT)
- **Training:** Policy iteration-style warm-up alternating between:
  1. Bottlenecked SFT from verbal CoT via masking
  2. Self-distillation via constrained decoding with codebook
- **Results:** Up to 11.6x fewer reasoning tokens while maintaining comparable performance
- **Tested on:** Mathematical reasoning, instruction-following, multi-hop reasoning
- **Emergent Finding:** Power law distribution over abstract vocabulary (akin to natural language)
- **URL:** https://arxiv.org/abs/2604.22709

### 3. QeRL: Beyond Efficiency (ICLR 2026)
- **Organization:** NVlabs
- **GitHub:** https://github.com/NVlabs/QeRL
- **Innovation:** Combines NVFP4 quantization with Low-Rank Adaptation (LoRA)
- **Key Benefits:**
  - Accelerates rollout phase of RL
  - Reduces memory overhead
  - Quantization noise increases policy entropy → enhanced exploration
  - Enables discovery of better strategies during RL
- **Enables:** RL training for 32B LLMs on single GPUs
- **URL:** https://arxiv.org/abs/2510.11696

### 4. TurboQuant (Google, ICLR 2026)
- **Presented:** ICLR 2026
- **Technology:** Extreme compression algorithm for vector quantization
- **Performance:** 
  - KV cache compression to 3 bits with zero accuracy loss
  - 6x less memory for LLM inference
  - Up to 8x speedup for H100 attention computation vs FP32
- **Related:** Quantized Johnson-Lindenstrauss (QJL), PolarQuant (AISTATS 2026)
- **URL:** https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/

### 5. SliderQuant: Accurate Post-Training Quantization for LLMs
- **Focus:** Post-training quantization (PTQ) from overlooked perspective
- **Problem:** Sequential quantization treats different layers equally, suboptimal at low bit-width
- **Approach:** Studies quantization impact of different layers on model accuracy
- **URL:** https://openreview.net/forum?id=YNqZqw4fLT

### 6. Optimizing LLM Prompt Engineering with DSPy-Based Declarative Learning (arXiv:2604.04869)
- **Focus:** Automated, modular, learnable prompt construction
- **Approach:** DSPy declarative framework for optimizing text-processing pipelines
- **Key Features:**
  - Unified DSPy LLM architecture
  - Combines symbolic planning, gradient-free optimization, automated module rewriting
  - Reduces hallucinations, improves factual grounding, avoids unnecessary prompt complexity
- **URL:** https://arxiv.org/abs/2604.04869

### 7. TDD Governance for Multi-Agent Code Generation via Prompt Engineering
- **Submitted:** April 29, 2026
- **Category:** cs.SE
- **Authors:** Tarlan Hasanli et al.
- **Contribution:** AI-native Test-Driven Development framework operationalizing classical TDD as prompt-level and workflow-level governance mechanisms
- **Architecture:** Layered architecture
- **URL:** https://letsdatascience.com/news/tdd-governance-guides-multi-agent-code-generation-289d621c

## Task 2: Community Buzz + Reasoning Developments, Quantization, Benchmarks

### 1. Scaling Test-time Compute for LLM Agents (arXiv:2506.12928)
- **First systematic exploration:** Applying test-time scaling to language agents
- **Strategies explored:**
  - Different test-time scaling strategies
  - Verification and result merging approaches
- **Finding:** List-wise method performs best among verification approaches
- **Implication:** Test-time compute scaling extends beyond reasoning to agent workflows
- **URL:** https://arxiv.org/abs/2506.12928

### 2. ICLR 2026 Key Papers Summary
From Lambda AI's coverage of 12 ICLR papers:
- Agents, LLM alignment, world modeling, multimodal efficiency
- Notable: Reinforcement learning for reasoning (QeRL), quantization advances (TurboQuant, QeRL)
- Two workshops on making AI systems reliable, efficient, and secure

### 3. Reasoning Benchmarks 2026
From benchlm.ai:
- **Coverage:** 226 AI models on reasoning benchmarks
- **Focus Areas:** Multi-step inference, factual reasoning, long-context discipline
- **Notable:** Long Context, MRCR, Graphwalks benchmarks

### 4. Humanity's Last Exam (Nature, 2025)
- **Type:** Expert-level academic benchmark
- **Coverage:** Multi-modal, broad subject coverage
- **Purpose:** Frontier of human knowledge assessment
- **URL:** https://www.nature.com/articles/s41586-025-09962-4

### 5. The Art of Scaling Test-Time Compute
From arXivIQ Substack:
- **Key Insight:** Linear relationship between compute and accuracy initially, but recent findings show complexity
- **Reference:** Gema et al. and Hassid et al. on compute-optimal strategies
- **Analogy:** Compute-optimal inference analogous to Chinchilla-optimal training
- **Reference:** Snell et al. (arXiv:2408.03314), Hassid et al. (arXiv:2501.02497)

---

## Key Themes Observed

1. **Latent Reasoning Paradigm Shift:** Multiple papers converging on latent vs. surface reasoning debate
2. **Efficiency Focus:** 11.6x token reduction (Abstract-CoT), 6x memory reduction (TurboQuant), quantization + RL synergy (QeRL)
3. **Test-time Compute Maturation:** From pure reasoning to agents, optimal allocation strategies
4. **Prompt Engineering Automation:** DSPy-based approaches replacing manual crafting
5. **Multi-Agent Governance:** TDD principles applied at prompt level for code generation

## Sources
- https://arxiv.org/abs/2604.15726
- https://arxiv.org/abs/2604.22709
- https://arxiv.org/abs/2510.11696
- https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/
- https://openreview.net/forum?id=YNqZqw4fLT
- https://arxiv.org/abs/2604.04869
- https://arxiv.org/abs/2506.12928
- https://lambda.ai/blog/iclr-2026-12-papers
- https://benchlm.ai/reasoning
- https://www.nature.com/articles/s41586-025-09962-4
