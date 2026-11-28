# Findings — September 9, 2026 — Task 2: Community & Reasoning Developments

## 2026 LLM Inference Papers Landscape (from GPU Hunter)

Key themes from recent inference research (GPU Hunter editorial):

1. **FP4 is hardware capability, not magic switch**: Blackwell FP4 needs model-aware quantization and backend support. Layer-wise sensitivity analysis (NVFP4 vs MXFP4) shows no universal speedup.

2. **Long-context local inference depends on KV-cache quantization**, not just weight quantization. Key papers:
   - **OSCAR** (2605.17757): 2-bit KV cache quantization via offline spectral covariance-aware rotation
   - **SAW-INT4** (2604.19157): System-aware 4-bit KV-cache for vLLM-style paged layouts
   - **DeltaKV** (2602.08005): Residual-based KV cache compression via long-range inter-token similarity

3. **Serving and single-GPU workloads converging**: ModeSwitch-LLM (2605.23057) routes each request across FP16, quantized, speculative, prefix-cached modes using cheap workload features. A desktop GPU can serve different prompts better when runtime switches strategy per request.

4. **Quantized model size is not enough**: Fast dequantization kernels matter. NF4 dequantization kernel paper (2604.02556) shows GPU Hunter benchmarks should care about unpacking/dequant backend performance.

5. **AMD inference growing**: Architecture-aware benchmark on AMD MI325X (2603.10031) shows model architecture, KV offload, runtime kernels, and block size choices can dominate hardware specs.

## Key Inference Papers Summary

| Paper | Focus | Key Insight |
|-------|-------|-------------|
| ModeSwitch-LLM | Phase-aware single-GPU inference | Runtime strategy switching per request |
| OSCAR | 2-bit KV cache quantization | Offline rotation from attention-aware covariance |
| SAW-INT4 | 4-bit KV cache for production | Paged layouts + fused attention execution |
| Fast NF4 Dequant Kernels | GPU kernel optimization | Quantized size ≠ actual speed |
| Speculative Decoding: Performance or Illusion? | vLLM production study | Speedup depends on workload, draft method, batch size |

## Research Trends

### From Yesterday's Research Notes
Previous day's highlights included:
- **QeRL** (ICLR 2026): Quantization noise enhances RL exploration, 32B on single H100
- **RLVR locks solution space** at trajectory entrance (67% coverage loss)
- **Hybrid LM mechanistic clarity**: Attention = retrieval, Recurrence = persona/style

### New Directions Today
1. **Binary/Sub-1-bit quantization practical**: BTC-LLM (ACL 2026) shows sub-1-bit can work on standard hardware, not just specialized accelerators.

2. **Attention sink root cause identified**: Self-concentration + value-non-mixing (not RoPE). This will inform new quantization strategies targeting outlier activation mitigation.

3. **RLVR efficiency improving**: ThinkPrior shows 10.6% rollout reduction via zero-rollout difficulty priors. Combined with yesterday's DAPO findings, RLVR is becoming more efficient.

4. **Test-time RL for code**: ERPO extends TTRL to open-vocabulary outputs via behavioral consensus (Probe Consensus Reward).

5. **Length extrapolation for recurrence**: CST achieves 128× training length improvement via state credit stabilization.

## Reasoning Models Status

### FMRT (from Sep 8 report)
- Muse Spark 1.3 Contributor: #1 at BT 1713 (75% win rate)
- Claude Fable 5: #2 at BT 1703 (77% win rate)
- Kimi 3: #7 overall but #1 on recent form (▲10 places)
- Kimi K2.6 vs Grok 4.5: closest rivalry (25-25 across 55 meetings)
- Strongest open-weight: MiniMax M3 at BT 1566 (#4)

### BenchLM (from Sep 8)
- GPT-6 Astra: 89.5 (↑ from 88.8)

### Emerging Pattern
Kimi 3's rapid rise (▲10 on recent form) suggests Chinese labs are closing the gap rapidly on reasoning tasks. MiniMax M3 remains the strongest open-weight contender.

---

## Sources
- https://www.gpuhunter.io/research/2026-llm-inference-papers
- Previous daily reports (Sep 8)
- FMRT leaderboard (Sep 8)
- BenchLM (Sep 8)
