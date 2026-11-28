# Findings — Task 2 (June 27, 2026)
# Community buzz + Reasoning developments, quantization advances, benchmarks

## Source 1: BenchLM.ai Reasoning Leaderboard (June 27, 2026)

**Top Reasoning Models — June 2026:**
As of June 27, 2026, the top reasoning model on BenchLM's weighted reasoning leaderboard is **Grok 4.1** (xAI) at 97.6%, followed by Gemini 3.1 Pro (96.4%) and GPT-5.4 (95.6%).

Top 5:
1. Grok 4.1 (xAI) — 97.6%
2. Gemini 3.1 Pro (Google) — 96.4%
3. GPT-5.4 (OpenAI) — 95.6%
4. GPT-5.3 Codex (OpenAI) — 93%
5. Gemini 3 Pro Deep Think (Google) — 88.7%

Notable: o1-preview at 88.6%, Claude Opus 4.6 at 88.2%.

**Key benchmark components:** MuSR (20%), LongBench v2 (30%), MRCRv2 (25%), ARC-AGI-2 (25%)

**Key observation from BenchLM:** "Models with explicit chain-of-thought (reasoning models) tend to outperform standard models by large margins, but at the cost of higher latency and token usage." The reasoning model premium is real and measured.

**Contrast with LMCouncil benchmarks (used in prior runs):** Claude and GPT models lead on coding and agentic benchmarks; Grok 4.1 leads on the BenchLM reasoning composite. Different benchmark suites give different leaders — no single model dominates all benchmarks.

🔗 https://benchlm.ai/reasoning

---

## Source 2: Google's TurboQuant — KV Cache 3-bit Compression

**Published: ICLR 2026**

TurboQuant compresses the KV cache from 16-bit precision to 3 bits per value — a 6x memory reduction — with zero accuracy loss. Key details:

- **How it works:** Rotation-then-quantize approach (PolarQuant + Quantized Johnson-Lindenstrauss for error correction)
- **Rotation:** Random orthogonal rotation spreads vector energy uniformly, making coordinates equally compressible (eliminates outlier channels problem)
- **Lloyd-Max quantization:** Optimal quantization buckets computed analytically from the known post-rotation distribution — no calibration data needed
- **QJL error correction:** Adds one extra bit per coordinate to preserve distance relationships critical for attention computation

**Benchmark results:**
- LongBench (Llama-3.1-8B-Instruct): 3.5-bit TurboQuant matches full-precision baseline exactly (50.06 vs 50.06)
- Needle-in-a-Haystack (up to 104K context): 0.997 at 4x compression — functionally identical to full precision
- H100 attention throughput: up to 8x speedup vs FP32 (roughly 4x vs FP16) for attention logit computation

**Compression metrics:**
- TQ3 (3 bits): 4.9x compression vs FP16; 52 bytes per 128-value vector (vs 256 bytes FP16); MSE = 0.034
- TQ4 (4 bits): 3.8x compression vs FP16; 68 bytes per 128-value vector; MSE = 0.009

**Market impact:** When announced March 25, 2026, memory stocks fell — SK Hynix -6.23%, Samsung -4.8%, SanDisk -8%, Micron -5%. Analysts called it an overreaction since TurboQuant only affects inference-stage memory, not training.

**Community implementations:** llama.cpp fork available (turboquant_plus), vLLM fork in progress.

**Key insight:** KV cache is the #1 memory bottleneck at long context lengths; a training-free, model-agnostic 6x compression of it is a major practical breakthrough.

🔗 https://nerdleveltech.com/google-turboquant-kv-cache-compression-llm-inference

---

## Source 3: BitsMoE — Ultra-Low-Bit MoE Quantization
**arXiv:2606.00079** | Quantization / MoE | cs.LG (from May 22, 2026)

MoE models are memory-intensive because all expert weights must be kept resident. Existing compression struggles in ultra-low-bit regime: pruning removes capacity irreversibly, coarse-grained quantization can't allocate bits according to heterogeneous expert importance.

BitsMoE: spectral-energy-guided bit allocation for MoE quantization. Decomposes each MoE layer via SVD into:
- Shared basis: kept in full precision (preserves cross-expert structure)
- Expert-specific spectral factors: fine-grained quantization units

Bit-width determined via integer linear program minimizing reconstruction loss under fixed bit budget.

Results on Qwen3-30B-A3B-Base at 2-bit quantization:
- 12.3x faster quantization vs GPTQ
- 27.83 percentage points improvement in average accuracy vs GPTQ
- 1.76x decoding speedup vs GPTQ

**Key insight:** Ultra-low-bit MoE quantization is viable when bits are allocated by spectral energy rather than uniformly — heterogeneous expert importance requires heterogeneous precision.

🔗 https://arxiv.org/abs/2606.00079

---

## Source 4: EU AI Act GPAI Enforcement Date Confirmed

EU AI Act General-Purpose AI (GPAI) enforcement begins **August 2, 2026**. This affects all providers of foundation models with systemic risk designations.

**Practical implications for LLM research:**
- Code generation and reasoning model providers face highest compliance burden
- Systemic risk models require adversarial robustness testing
- Technical documentation requirements become mandatory

**Community reaction:** Research community is closely watching — GPAI compliance costs may drive consolidation toward fewer, larger providers.

---

## New Benchmark Categories Worth Watching

**BenchLM reasoning composite (new as of June 2026):**
- **MuSR** (20%): Complex multi-step reasoning problems
- **LongBench v2** (30%): Long-context reasoning and retrieval
- **MRCRv2** (25%): Multi-round coreference and retrieval for long-context
- **ARC-AGI-2** (25%): Abstract reasoning — newest addition, still uneven coverage

**Notable:** ARC-AGI-2 is "still early — coverage is uneven, and some models lack scores." This is a benchmark to watch for new model evaluations.
