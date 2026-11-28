# Findings: Task 2 - Community & Quantization (June 18, 2026)

## Local LLM Quantization Quality Benchmarks 2026

Comprehensive benchmark comparing GGUF, MLX, AWQ, and GPTQ formats across perplexity and reasoning benchmarks.

### Key Findings:

**Perplexity degradation (Q4 typical):** 1-3% vs FP16 — production sweet spot

**Reasoning benchmarks degrade faster than perplexity:**
- Q3: ~5% GSM8K degradation (3x larger than perplexity drop)
- Q2: ~14% GSM8K degradation
- For agent/tool-use: do NOT go below Q4

**Format comparisons:**
- AWQ outperforms GPTQ on modern models (Llama 3+, Qwen 2+) by ~0.5-1.0% perplexity at same bit-width
- Activation-aware scaling is the differentiator
- MLX 4-bit on Apple Silicon comparable to GGUF Q4, slightly faster

**Memory/speed (Llama 70B):**
| Format | Memory | Speedup |
|--------|--------|---------|
| FP16 | ~140GB | 1x |
| Q4_K_M | ~40GB | 3.7x |
| Q3_K_M | ~30GB | 4.5x |

### Recommendations:
- Production agents: AWQ 4-bit or GGUF Q5_K_M
- Single-user chat: GGUF Q4_K_M
- Apple Silicon: MLX 4-bit or GGUF Q4_K_M
- Memory-constrained: Q3_K_M for non-reasoning only, never below Q3

**Key insight:** Quantization tier matters for reasoning quality — Q4 minimum for agents. Brand recommendations may differ materially between Q4 and Q2 deployments.

---

## Additional Community Notes:

### DreamReasoner Competition with Autoregressive Models
DreamReasoner-8B achieving competitive performance with Qwen3-8B signals diffusion-based reasoning is maturing. This could change the efficiency/quality tradeoff for long CoT reasoning.

### AI Index Report Highlights
- AI governance gap is now explicit in major reports
- AI testing moving to more ambitious reasoning/safety evaluation
- First standalone chapters on AI in science and medicine

---

## Sources:
- https://presenc.ai/research/local-llm-quantization-quality-benchmarks-2026
- https://arxiv.org/abs/2606.19257 (DreamReasoner)
