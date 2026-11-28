# Findings: Task 2 — Community & Leaderboards
**Date:** October 17, 2026

## FMRT October 17: MAJOR RECALIBRATION — Claude Opus 5.5 Takes #1
**FMRT** (October 17, 2026 — Live)
- Claude Opus 5.5: **#1** (BT 1856.9, 67% WR, 58W-28L-7T) — **NEW #1!**
- Claude Fable 5.1: **#2** (BT 1847, 82% WR, 74W-16L-9T) — dropped from #1
- Kimi 3: **#3** (BT 1665.6, 69% WR, 59W-26L-6T) — stable
- Gemini 4 Argon: **#4** (BT 1651.5, 66% WR, 71W-36L-7T)
- Grok 4.7: **#5** (BT 1606.1, 60% WR)
- Muse Wonder: **#6** (BT 1604.6, 54% WR)
- GLM 5.3: **#7** (BT 1593.9, 54% WR) — open-weight, NEW entry
- Muse Spark Open: **#8** (BT 1521.9, 52% WR) — open-weight
- GPT-6 Astra: **#9** (BT 1513.7, 46% WR) — dropped significantly from top 3
- Qwen 3.8: **#10** (BT 1483, 42% WR) — open-weight
- Gemma 4 31B: **#15** (BT 1266.6, 20% WR) — open-weight

**Key Changes from Oct 16:**
- Claude Opus 5.5 surged to #1, overtaking Claude Fable 5.1
- GPT-6 Astra dropped to #9 (was #9 on Oct 16 provisional, now ranked)
- GLM 5.3 is a new entry at #7
- 16 ranked models now (was 14)
- Claude Opus 5.5 has 95% CI [1773.7, 1961] — overlapping with Claude Fable 5.1's [1770.9, 1947.5]

Source: https://fmrt.ai/api/leaderboard.json

## BenchLM October 17: GPT-6 Astra Still Dominant
**BenchLM** (October 17, 2026)
- #1 GPT-6 Astra: 93.3 — dominant
- #2 GPT-6.1 Sol: 90.5
- #3 Claude Opus 5.5: 86.1
- #4 Claude Fable 5.1: 85.2
- #5 MiniMax M3: 82.9 — open-weight
- Kimi K3: #21 (70.0)

**FMRT vs BenchLM Divergence:**
- Claude Opus 5.5: #1 FMRT, #3 BenchLM
- Claude Fable 5.1: #2 FMRT, #4 BenchLM
- GPT-6 Astra: #9 FMRT, #1 BenchLM — massive divergence

Source: https://benchlm.ai/reasoning

## HuggingFace Trending October 17: DeepSeek Fresh Entry, Nerkyor Accelerating
**HuggingFace** (October 17, 2026)
- Qwen3.8-27B: 7.8M downloads (stable dominant)
- DeepSeek-V4.1-Flash-1017: 713 downloads (fresh entry, ~10 hours old)
- LTX-2.5 (Lightricks): 1.99M downloads (image-to-video)
- Underdog-Saluki-27B-1.0: 394k downloads (was 371k Oct 16 — 6% increase)
- nerkyor composite: 228k downloads (was 182k Oct 16 — **25% increase, accelerating**)
- JEV-27B-VL (autotrust): 1.7M downloads
- LiquidAI/LFM2.5-24B-A2B-GGUF: 82.1k downloads
- DeepSeek-V4.1-Flash: 1.31M downloads

**Key insight:** Nerkyor composite multi-model fusion fine-tune accelerating (25% in 1 day); DeepSeek fresh entry already at 713 downloads within 10 hours; image-to-video (LTX-2.5) sustaining at 1.99M

Source: https://huggingface.co/models?sort=trending

## Community Notes
- Reddit access blocked for detailed community sentiment extraction
- FMRT has fully recalibrated from provisional state — 16 ranked models
- Benchmarks remain highly divergent: GPT-6 Astra dominates BenchLM but ranks #9 on FMRT; Claude Opus 5.5 leads FMRT but ranks #3 on BenchLM

## Sources
- https://fmrt.ai/api/leaderboard.json
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending
