# Task 2 Findings — 2026-09-04

## Research Focus
Community buzz (Reddit) + Reasoning developments, quantization advances, benchmarks

## FMRT September 2026 — Reasoning Tournament Results

### Current Standings (13 active models, 691 motions)

**Top 5:**
1. **Muse Spark 1.3 Contributor** — BT 2499, 100% win rate (proprietary leader)
2. **Claude Fable 5** — BT 1664, 77% win rate
3. **GPT-5.6 Sol** — BT 1588, 67% win rate (▲1)
4. **MiniMax M3** — BT 1526, 61% win rate (▼1)
5. **Kimi K2.6** — BT 1516, 60% win rate (▲4)

### Biggest Movers
- **Kimi 3** — Up 10 places on recent form (career rank #11 → recent #1). Standout riser this month.
- **Grok 4.5** — Up 6 places (▲6)
- **GLM 5.2** — Up 7 places (▲7)
- **DeepSeek V4 Flash** — Up 6 places (▲6)
- **Qwen 3.5** — Up 5 places (▲5)
- **MiniMax M3** — Slipped 1 place (▼1)

### Closest Rivalries
- Kimi K2.6 vs Grok 4.5: 25–25 (5T) across 55 meetings
- gpt-oss 120B vs Gemma 4 31B: 17–17 (3T) across 37 meetings
- Qwen 3.5 vs Gemini 2.5 Pro: 51–52 (7T) across 110 meetings

### Most One-Sided
- MiniMax M3 vs Qwen 3.5: 75–29 (5T) across 109 meetings
- MiniMax M3 vs Gemini 2.5 Pro: 71–27 (7T) across 105 meetings
- GLM 5.2 vs Qwen 3.5: 72–35 (3T) across 110 meetings

### Open Weight vs Proprietary
- **Strongest open-weight**: MiniMax M3 at #4 (BT 1526)
- **Proprietary lead**: Muse Spark 1.3 Contributor leads by 973 BT points
- Gap remains meaningful

Source: https://fmrt.ai/report

## Inference Efficiency Papers (from GPU Hunter survey)

### Key 2026 Inference Papers

1. **ModeSwitch-LLM** (2605.23057) — Single-GPU phase-aware controller routing requests across FP16, quantized, speculative, prefix-cached, batched modes using cheap workload features. Desktop GPU can serve different prompts better when runtime switches strategy per request.

2. **OSCAR** (2605.17757) — 2-bit KV cache quantization using offline spectral covariance-aware rotation. Long-context claims on consumer GPUs increasingly depend on KV-cache-specific quantization, not just weight quantization.

3. **SAW-INT4** (2604.19157) — System-aware 4-bit KV-cache quantization designed around paged layouts, regular memory access, fused attention execution. For vLLM-style serving, deployability matters as much as compression ratio.

4. **Fast NF4 Dequantization Kernels** (2604.02556) — Shared-memory kernel optimization for accelerating NF4 dequantization on NVIDIA GPUs. Quantized model size is not enough; GPU Hunter takeaway: backend needs fast unpacking and dequant kernels.

5. **TurboQuant** (Google, ICLR 2026) — Extreme compression algorithm optimally addressing memory overhead in vector quantization. Uses Quantized Johnson-Lindenstrauss (QJL) and PolarQuant (AISTATS 2026).

6. **Hierarchical Block Quantization (HBQ)** — Novel method using large blocks and low-overhead significand scaling technique. Achieves better performance than existing block quantization methods and state-of-the-art weight-only quantization.

Source: https://www.gpuhunter.io/research/2026-llm-inference-papers

## Community Trends

### LLM Reasoning State (September 2026)
- Muse Spark 1.3 Contributor dominates at #1 with 100% win rate
- Kimi 3 biggest riser: up 10 places in recent form
- Open-weight models closing gap but proprietary lead remains meaningful
- Reasoning tournament field expanding with 13 active models across 691 motions

### Quantization Landscape 2026
- Moving beyond generic model compression to deployment-specific optimization
- KV cache formats increasingly important for long-context
- FP4 (Blackwell) requires model-aware quantization and backend support
- Phase-aware local inference gaining traction for single-GPU workloads
- KV cache + weight quantization converging for local serving

### Key Observations
- **Reasoning**: Competition intensifying with Kimi, GLM, Grok rising fast
- **Efficiency**: Focus shifting from weight-only quantization to holistic system optimization (KV cache, kernels, runtime mode-switching)
- **Evaluation**: LLM judge reliability on shared endpoints questioned (0.40 vs 0.90 required Spearman)
- **Agent Protocols**: NLIP standardized by Ecma International for agent interoperability (related to MCP, A2A)

## Key Takeaways from Task 2

1. **Muse Spark Dominates**: 100% win rate in reasoning debates, 973 BT points ahead of best open-weight
2. **Kimi 3 Rising Fast**: Up 10 places in recent form — model to watch
3. **Inference Efficiency Shifts**: From weight quantization to KV cache quantization + adaptive runtime
4. **Local Inference Convergence**: Serving and single-GPU workloads converging around adaptive runtime decisions
5. **Evaluation Concerns**: Shared endpoint instability undermines LLM-as-judge reliability

## Sources
- https://fmrt.ai/report
- https://www.gpuhunter.io/research/2026-llm-inference-papers
- https://arxiv.org/abs/2609.04194 (LLM observer reliability)
- https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/
