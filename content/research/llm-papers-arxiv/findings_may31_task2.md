# Findings: Community Buzz + Reasoning/Benchmarks/Quantization — May 31, 2026

## Task 2: Community Buzz + Reasoning Developments, Quantization Advances, Benchmarks

---

### CONF-KV: Model Uncertainty Drives Cache Efficiency
**arXiv:2605.24786** — Key findings:
- Next-token distribution provides scalar confidence score — unused signal in existing systems
- Uncertainty-guided eviction achieves near-fixed-window memory footprint with near-full-KV quality
- Mixed FP16/INT8 storage enables practical implementation
- **Community signal**: KV cache optimization moving from static policies to adaptive, model-driven approaches

---

### OSCAR: Attention-Aware 2-bit KV Cache Quantization
**Together AI release, May 2026** — Key findings:
- Offline Spectral Covariance-Aware Rotation for 2-bit KV cache
- Aligns quantization noise with directions attention is least sensitive to
- Generic Hadamard rotation misses this alignment — OSCAR derives attention-aware rotations from one-time offline calibration
- **Community signal**: Extreme KV cache quantization (2-bit) is practical with proper rotation strategies

---

### Recoverable PoT for Agentic Planning
**arXiv:2605.30052** — Key findings:
- Single invalid action silently invalidates entire PoT trajectory
- Checkpoint information is the load-bearing recovery signal (not the specific repair tail)
- ~14% of problems benefit from recovery; cost is one extra LLM call
- Open-weights models show +3.3 to +20.0pp improvement on three of four models
- **Community signal**: Program-of-Thought reliability is critical for agentic deployments — checkpoint-based recovery enables practical use

---

### GR-Ben: General Reasoning Benchmark for Process Reward Models
**arXiv (cs.AI, May 2026)** — Key findings:
- General Reasoning Benchmark for evaluating Process Reward Models (PRMs)
- Addresses gap in step-level reasoning evaluation vs outcome-only evaluation
- **Community signal**: PRM evaluation is emerging frontier — need standardized process-level benchmarks

---

### LLM Privacy in Multi-Agent Systems
**arXiv:2605.27766** — Key findings:
- Multi-turn social evaluation amplifies privacy violations (19.95% → 45.30% across OpenAI models)
- Leakage is socially contagious: agents 8x more likely to disclose after observing peer disclosure
- Explicit privacy instructions reduce but don't eliminate: >37.8% leakage even with safeguards
- **Community signal**: Static chat-based safety benchmarks underestimate agentic deployment risks; social context alone elicits sensitive disclosures

---

### ZAYA1-8B: Frontier Intelligence Density on AMD Hardware
**Zyphra, May 2026** — Key findings:
- AMD-trained MoE model performs strongly on complex reasoning, mathematics, and coding
- 8B parameters achieving frontier-level reasoning
- **Community signal**: Efficient reasoning models (8B class) continue to close gap with larger models

---

### GGUF Quantization Guide 2026 Updates
**Key findings from community guides**:
- Q4_K_M remains format behind 70%+ of local LLM downloads
- Q6_K quality jump over Q4_K_M is larger than Q6_K to Q8_0
- Commonsense reasoning highly resilient to quantization; arithmetic reasoning has quality cliff below 4 bits
- Importance Matrix (imatrix) trick: treats weights non-uniformly based on their impact
- **Community signal**: Quantization strategies becoming more nuanced — task-dependent bit allocation

---

### CoHyDE: Tool Retrieval for Agents
**arXiv:2605.29271** — Key findings:
- Iterative co-training between LLM rewriter and dense encoder solves underspecified query problem
- +6.3pp NDCG@5 on vague queries via co-evolution
- Practical for large API catalogs (10k tool subset tested)
- **Community signal**: Tool retrieval quality critical for agent reliability — co-training approach gaining traction

---

### LiveOIBench: Informatics Olympiad Benchmark at ICML 2026
**ICML 2026** — Key findings:
- Evaluates whether LLMs can outperform human contestants in Informatics Olympiads
- Tests algorithmic reasoning under competition conditions
- **Community signal**: Competition-level algorithmic reasoning becoming benchmark frontier

---

## Trend Summary

1. **Uncertainty-Guided Optimization**: Model-derived confidence (next-token distribution, retrieval scores) replacing static policies in cache management and retrieval
2. **Extreme KV Cache Quantization**: 2-bit KV cache becoming practical with attention-aware rotation strategies
3. **Recoverable Program-of-Thought**: Checkpoint-based recovery enables reliable PoT for agentic planning
4. **Multi-Agent Privacy Gap**: Social context amplifies privacy violations — static benchmarks miss agentic deployment risks
5. **Efficient Frontier Models**: 8B-class models achieving competitive reasoning performance
6. **Process Reward Model Evaluation**: Step-level reasoning evaluation gaining standardized benchmarks
7. **Co-Training for Tool Retrieval**: Iterative encoder-rewriter co-evolution handles both well-formed and underspecified queries

---

## Sources
- https://arxiv.org/abs/2605.24786
- https://arxiv.org/abs/2605.30052
- https://arxiv.org/abs/2605.27766
- https://arxiv.org/abs/2605.29271
- https://www.marktechpost.com/2026/05/25/together-ai-open-sources-oscar-an-attention-aware-2-bit-kv-cache-quantization-system-for-long-context-llm-serving/
- https://www.zyphra.com/our-work/zaya1-8b
- https://www.webnuz.com/article/2026-05-13/GGUF%20Quantization%20Explained%3A%20Q4_K_M%20vs%20Q5_K_M%20vs%20Q8%20%20Which%20to%20Pick%20%282026%29
- https://vucense.com/dev-corner/gguf-quantization-explained-q4-k-m-vs-q8-0-vs-f16-2026/
