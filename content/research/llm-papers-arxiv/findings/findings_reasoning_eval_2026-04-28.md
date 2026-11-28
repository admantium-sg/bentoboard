# LLM Reasoning & Evaluation Research Findings
**Date:** April 28, 2026
**Source:** arXiv (cs.AI, cs.CL)

---

## 1. Speculative Decoding Techniques

Active research direction with 20+ papers in April 2026. Key developments:

### Distributed/Pipelined Approaches
- **DiP-SD** (arXiv:2604.XXXX): Distributed Pipelined Speculative Decoding for Efficient LLM Inference at the Edge
- **ECHO** (arXiv:2603.XXXXX): Elastic Speculative Decoding with Sparse Gating for High-Concurrency Scenarios

### Self-Speculative Decoding with MoE
- **ELMoE-3D** (arXiv:2604.XXXX): Leveraging Intrinsic Elasticity of MoE for Hybrid-Bonding-Enabled Self-Speculative Decoding
- **SpecMoE** (arXiv:2604.XXXX): Fast and Efficient MoE Inference via Self-Assisted Speculative Decoding

### Adaptive/Calibrated Approaches
- **Calibrated Speculative Decoding** (arXiv:2604.XXXX): Frequency-Guided Candidate Selection for Efficient Inference
- **SpecBound** (arXiv:2604.XXXX): Adaptive Bounded Self-Speculation with Layer-wise Confidence Calibration
- **ConfLayers** (arXiv:2604.XXXX): Adaptive Confidence-based Layer Skipping for Self-Speculative Decoding

### Verification-Aware Multi-Step Reasoning
- **From Tokens to Steps** (arXiv:2604.XXXX): Verification-Aware Speculative Decoding for Efficient Multi-Step Reasoning

### Benchmark for Speculative Decoding
- **SPEED-Bench** (arXiv:2602.XXXXX): A Unified and Diverse Benchmark for Speculative Decoding — addresses the data-dependent nature of SD performance

### Key Trend
Speculative decoding is evolving beyond simple draft-verify to include: adaptive selection, confidence calibration, MoE integration, and domain-specific optimizations (tool calling, video VLLMs).

---

## 2. Benchmark Updates & New Evaluations

### Domain-Specific Reasoning Benchmarks
- **K-MetBench** (arXiv:2604.XXXX): Multi-Dimensional Benchmark for Fine-Grained Evaluation of Expert Reasoning, Locality, and Multimodality in Meteorology
- **Source-Sensitive Reasoning in Turkish** (arXiv:2604.XXXX): Evaluating LLMs under Evidential Trust Manipulation

### Multi-hop & Compositional Reasoning
- **SEARCH-R** (arXiv:2604.XXXX): Structured Entity-Aware Retrieval with Chain-of-Reasoning Navigator for Multi-hop QA
- **KnowledgeBerg** (arXiv:2604.XXXX): Evaluating Systematic Knowledge Coverage and Compositional Reasoning in LLMs

### Vision-Language Reasoning
- **Systematic evaluation of VLMs for astronomical reasoning** (arXiv:2604.XXXX)
- **PhysNote** (arXiv:2604.XXXX): Self-Knowledge Notes for Evolvable Physical Reasoning in Vision-Language Models

### Key Trend
Benchmarks are moving toward multi-dimensional evaluation (reasoning + locality + multimodality) and domain-specific expertise testing.

---

## 3. Test-Time Compute Scaling

### Papers Found
- **TEMPO** (arXiv:2604.XXXX): Scaling Test-time Training for Large Reasoning Models
- **Process Supervision of Confidence Margin for Calibrated LLM Reasoning** (arXiv:2604.XXXX): Explores scaling test-time compute with calibrated confidence
- **Adaptive Test-Time Compute Allocation** (arXiv:2604.XXXX): With Evolving In-Context Demonstrations
- **Curriculum-Aware Budget Scheduling** (arXiv:2603.XXXXX): "Avoiding Overthinking and Underthinking" — scaling test-time compute budget

### Key Trend
Research is focusing on adaptive allocation of test-time compute rather than uniform scaling, and methods to avoid overthinking/underthinking pitfalls.

---

## 4. Reasoning Architecture Innovations

### Hybrid Mamba-Transformer MoE
- **Nemotron 3 Super** (NVIDIA, arXiv:2604.XXXX): 120B parameter (12B active) hybrid Mamba-Attention Mixture-of-Experts model — first hybrid architecture combining Mamba SSM with attention for agentic reasoning

### Long-Context Reasoning
- **DepthKV** (arXiv:2604.XXXX): Layer-Dependent KV Cache Pruning for Long-Context LLM Inference
- **Kwai Summary Attention**: Long-context ability as key iteration direction

### Process Reward Models
- **Rewarding the Scientific Process** (arXiv:2604.XXXX): Process-Level Reward Modeling for Agentic Data Analysis
- **Perception-centric Process Reward Models** (arXiv:2604.XXXX): Improving VLMs with PRMs for reinforcement learning with verifiable rewards

### Reasoning with Adaptive Depth
- **AdapTime** (arXiv:2604.XXXX): Enabling Adaptive Temporal Reasoning in LLMs

### Key Trend
Hybrid architectures (SSM + attention), process reward models, and adaptive reasoning depth are emerging as major directions.

---

## 5. Evaluation Methodologies

### Key Paper Insights
- **KnowledgeBerg**: Identifies three failure patterns in LLMs: missing knowledge, failure to identify requirements, incorrect reasoning execution — persists across languages and model scales
- Test-time compute and retrieval augmentation show improvements but don't fully resolve these patterns

### Evaluation Focus Areas
1. Multi-hop compositional reasoning
2. Source-sensitive/evidential reasoning
3. Temporal reasoning adaptability
4. Physical reasoning in VLMs
5. Multi-dimensional expert reasoning (reasoning + locality + multimodality)

---

## Summary

The April 2026 arXiv landscape shows:

1. **Speculative Decoding**: Mature but active — moving toward adaptive, calibrated approaches with MoE integration and domain-specific optimizations
2. **Benchmarks**: Shift to multi-dimensional, domain-expert evaluations rather than generic reasoning tests
3. **Test-Time Compute**: Focus on *adaptive* allocation strategies over uniform scaling; addressing overthinking/underthinking
4. **Architectures**: Hybrid SSM-attention MoE models emerging; process reward models gaining traction for complex reasoning
5. **Evaluation**: Recognition that test-time compute and RAG don't fully solve reasoning failures; need better evaluation frameworks

---

*Note: web_search was blocked by bot detection; findings compiled via direct arXiv search and paper abstraction.*
