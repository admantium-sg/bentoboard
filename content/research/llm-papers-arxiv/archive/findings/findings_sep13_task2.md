# Research Findings — September 13, 2026 (Task 2)

## Benchmarks, Quantization, Community Buzz

### BenchLM Reasoning: GPT-6 Astra 89.5; Rankings Stable; Volatility in Lower Tiers
**BenchLM** (benchlm.ai/reasoning, Sep 10, 2026 data)
- GPT-6 Astra holds #1 at 89.5; Claude Fable 5.1 #2 at 79.4; Kimi K3 #3 at 78.5
- **Notable volatility in lower tiers:** GPT-5.6 Sol dropped from BT 1634 to weighted 70.4 — significant discrepancy with yesterday's FMRT BT rating of 1634
- Muse Spark 1.3 and MiniMax M3 tied at 78.0 (#4-5)
- Benchmarks: LongBench v2 (25%), ARC-AGI-2 (25%), MRCRv2 (20%) — hardest public benchmarks weighted heavily
- **Key insight:** Discrepancy between BenchLM weighted score (70.4) and FMRT BT rating (1634) for GPT-5.6 Sol suggests the two benchmarks are measuring different things — BT ratings reflect meeting quality; BenchLM weighted scores reflect reasoning on hard benchmarks.
- Last verified Sep 10, 2026

Source: https://benchlm.ai/reasoning

---

## HuggingFace Trending — Sep 13

### Volume Leaders
- **DeepSeek-V4.1-Flash** (763B): 244k downloads — surging (was 141k on Sep 12, 75.8k on Sep 11 — nearly 3.2x in 2 days)
- **MiniCPM5-2B** (3B): 150k downloads — continuing strong (was 102k on Sep 12, 67.6k on Sep 11)
- **Edge0-35B-A3B-preview** (35B): 3.55k downloads, updated 4 days ago — new entrant
- **Nex-N2.5-mini** (35B): 3.97k downloads, updated 5 days ago — replacing Nex-N2.5-Pro as fresh entrant
- **Qwen3.8-27B**: 7.77M cumulative downloads

### Quantization Activity
- **DeepSeek-V4.1-Flash**: dominant by volume — 3.2x growth in 2 days
- **Nex-N2.5-Pro** (397B): holding at 30.3k downloads — still significant
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**: 770k downloads — GSQ quantization
- **unsloth/Qwen3.8-27B-GGUF**: 11M cumulative downloads
- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion**: 751k downloads — uncensored custom fusion variant
- **GLM-5.3-CYBERSECURITY-FP8**: 30.3k downloads — FP8 domain-specific
- **Agnes-AI/Agnes-3.0-Flash** (33B): 474 downloads, updated 1 day ago — new entrant

### Key Observations
1. DeepSeek-V4.1-Flash is the clear community momentum winner — 3.2x in 2 days
2. MiniCPM5-2B small-model story continues strong — 150k downloads for a 3B model
3. Nex-N2.5-Pro being replaced by Nex-N2.5-mini in the "fresh entrant" slot
4. Uncensored Qwen3.8-27B fusion variants showing significant community interest (751k downloads)
5. No NVIDIA FP4 variant visible in today's top-30 trending — possible normalization after initial surge

Source: https://huggingface.co/models?sort=trending

---

## Reasoning, Quantization, Efficiency Themes

### Small Model Story: MiniCPM5-2B
- 150k downloads (Sep 13) for 3B parameter model — extraordinary relative volume
- MiniCPM5-2B-GGUF also at 99.7k downloads — strong GGUF uptake
- Implication: community strongly values small, deployable models for specific tasks

### DeepSeek Momentum
- DeepSeek-V4.1-Flash has gone from 75.8k → 141k → 244k in 3 days
- This is a remarkable sustained surge — likely driven by strong benchmark performance + open weight availability
- DeepSeek's "Flash" naming convention (efficient, fast inference) resonates with community

### FP4 Quantization Normalizing
- NVIDIA FP4 variants (Qwen3.8-Flash-Next-NVFP4) were 89.9k on Sep 12 — not in today's visible top-30
- This may be noise/rotation in HuggingFace trending, not actual volume decline

---

## Community Pulse
*(FMRT report unavailable — relying on BenchLM and HuggingFace)*

The community focus remains on:
- Open-weight efficiency models (DeepSeek-V4.1-Flash dominating)
- Small capable models (MiniCPM5-2B surge)
- Custom/uncensored variants (DavidAU fusion at 751k)
- FP8 domain-specific deployments (GLM-5.3-CYBERSECURITY)

---

## Sources
- BenchLM reasoning: https://benchlm.ai/reasoning
- HuggingFace trending: https://huggingface.co/models?sort=trending
