# Task 2 Findings: Community Buzz + Reasoning/Quantization/Benchmarks
**Date:** 2026-06-17
**Researcher:** DIAC cron agent

---

## Benchmark Update: AIME 2026 Leaderboard

**Source:** https://llm-stats.com/benchmarks/aime-2026

Key standings (17 models self-reported, June 2026):
- #1: GLM-5.2 (Zhipu AI) — 99.2%, 753B params, 1M context
- #2: Kimi K2.6 (Moonshot AI) — 1.0T params, 262K context
- #3: GLM-5.1 (Zhipu AI) — 75.4B params
- #3: Qwen3.6 Plus (Alibaba) — 95.3%, best value at $0.50/1M input tokens
- #7: Qwen3.6-27B — 28B params, strong open-weight performance
- #10: Qwen3.5-397B-A17B (MoE) — 397B total, 17B active
- #15: DiffusionGemma 26B-A4B (Google) — NEW, diffusion-based Gemma variant

Notable: Gemma 4 family shows strong small-model performance (31B, 26B-A4B, 12B, 8B, 5B all in rankings).

Average score across models: 84.6%. The top 10 are tightly clustered within 5.9 points.

---

## Reasoning Model Developments

**DeepSeek R2 (released April 2026):**
- 32B dense transformer, open weights, runs on single 24GB GPU
- 92.7% on AIME 2025, significantly ahead of R1
- Commercial-use license
- Strong coding, multilingual, and reasoning capabilities
- Notably: the R2 model is already well-established since April, not a new release

**DeepSeek V4 family (April 24, 2026):**
- V4, V4-Pro, V4-Flash all launched with open weights
- V4 Flash is a 284B MoE model
- Significant agentic capability improvements over V3
- R2 and V5 status: both still in development as of June 2026

---

## Quantization Advances

**AlphaQ (arXiv:2606.04980):**
- Calibration-free MoE quantization using HT-SR theory
- Near full-precision accuracy at 3.5 bits per expert on Qwen1.5-MoE
- 4×+ memory compression without calibration data
- Key advantage: avoids the fundamental problem that frontier MoE training data is proprietary

**LiveBench refresh:**
- LiveBench 2026-01-08 is current version with new math and data analysis tasks
- Questions refresh every 6 months to prevent contamination
- https://livebench.ai/

---

## Community Observations (from search)

**r/LocalLLaMA trending discussion:**
- "LLM overkill is real" post going viral — analysis of 12 benchmarks finding right-sized models
- Key theme: many users overprovision for their actual use cases; smaller models often sufficient
- Community actively discussing benchmark quality vs real-world usefulness

**Model efficiency trend:**
- Variable-width transformers (2606.18246): 22% FLOP reduction, 15% KV cache reduction
- ZPPO distillation: largest gains at smallest scale (0.8B student matches larger models)
- Small reasoning models (DeepSeek R2 at 32B, Qwen3.6-27B) achieving competitive AIME scores

---

## Key Trends This Week

1. **Architecture innovation beyond uniform scaling** — Variable-width transformers show nonuniform width allocation is more FLOP-optimal than uniform scaling
2. **Prompt-based over gradient-based distillation** — ZPPO paradigm (teacher in prompts, not gradients) gaining traction for small model training
3. **Diffusion LLMs entering reasoning domain** — DiffusionGemma on AIME 2026, d-OPSD for diffusion LLM self-distillation
4. **MoE quantization moving calibration-free** — AlphaQ eliminates the need for calibration data by using spectral heavy-tailedness
5. **Geographic conditioning as a hidden risk** — Location metadata causes massive unintended conditioning (793× leakage); not easily fixable by removing location
