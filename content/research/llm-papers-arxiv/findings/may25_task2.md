# Task 2 Findings: Community Buzz & Reasoning/Quantization/Benchmarks - May 25, 2026

## Community & Industry Developments

### From LLM News Sites (May 24-25)

### 1. Gemini 3.5 Flash GA Release
- Gemini 3.5 Flash now generally available
- Frontier-level intelligence at 4x speed of comparable models
- Pricing: $1.50/$9 per 1M tokens
- 1M context window
- 76.2% Terminal-Bench 2.1
- Beats Gemini 3.1 Pro on coding and agent tasks

### 2. Latent Cache Flow: Model-to-Model Communication
**arXiv:2605.22863** (May 21, 2026) — cs.LG
- LLM agents communicate via text - incurs latency and information loss from autoregressive decoding
- Proposes model-to-model communication without text
- Key insight: Bypassing text representation could significantly reduce multi-agent latency

### 3. The Readout Shortcut in Arithmetic CoT
**arXiv:2605.22870** (May 21, 2026) — cs.LG
- Chain-of-thought prompting necessary for arithmetic in small language models
- Shuffling CoT steps preserves most performance
- Key insight: CoT readout (not reasoning steps) dominates arithmetic performance in small models

### 4. FuRA: Full-Rank Parameter-Efficient Fine-Tuning
**arXiv:2605.22869** (May 21, 2026) — cs.LG
- Both full fine-tuning and LoRA introduce weight updates without spectral awareness
- Spectral preconditioning addresses spectral drift
- Key insight: Spectral awareness in fine-tuning preserves model stability

### 5. Query-Adaptive Semantic Chunking for RAG
**arXiv:2605.22834** (May 21, 2026) — cs.CL
- Retrieval-Augmented Generation depends critically on document chunking quality
- Proposes dynamic strategy with contextual window expansion
- Key insight: Adaptive chunking outperforms fixed approaches for RAG

### Benchmark Updates

From llm-stats.com (May 25):
- 50+ benchmarks tracked, 500+ models
- GPQA: 214 models evaluated (graduate-level reasoning)
- MMLU-Pro: 119 models (harder variant with 10-choice questions)
- SWE-Bench Verified: 90 models (real GitHub issues)
- Humanity's Last Exam: 75 models (frontier academic benchmark)

### Key Trends
1. **Agent Skill Optimization:** SkillOpt-style approaches (trained skill evolution) emerging as next step beyond hand-crafted prompts
2. **Multimodal Knowledge Editing:** Generalization across semantic variations remains challenging; adversarial approaches showing promise
3. **Multi-Agent Epistemics:** Planning calibration (not just execution) becoming recognized as critical failure mode
4. **Spatial Reasoning Gap:** VLMs fundamentally lack numerical grounding despite appearing capable

## Sources
https://arxiv.org/abs/2605.22863 | https://arxiv.org/abs/2605.22870 | https://arxiv.org/abs/2605.22869 | https://arxiv.org/abs/2605.22834 | https://llm-stats.com/ai-news
