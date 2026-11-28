# Task 2 Findings: Community & Leaderboards — October 16, 2026

## FMRT October 16: Full Recalibration Complete — 14 Ranked Models
**Source: https://fmrt.ai/api/leaderboard.json (Oct 16, 2026)**

FMRT has fully recalibrated from yesterday's provisional-only state. Key rankings:
- #1 Claude Fable 5.1: BT 1803.4, 90% WR (46W-5L-4T) — firm #1, widened lead
- #2 Kimi 3: BT 1684, 71% WR (41W-17L-3T) — ▲2 from yesterday's provisional
- #3 Gemini 4 Argon: BT 1618, 71% WR (39W-16L-1T) — new ranked entry at #3
- #4 Muse Wonder: BT 1603.1, 61% WR (43W-28L-3T) — new ranked, open-weight
- #5 Grok 4.7: BT 1587.9, 63% WR (38W-22L-6T)
- #6 GLM 5.2: BT 1520.6, 54% WR (29W-25L-5T) — open-weight
- #7 GPT-6.1 Sol: BT 1500.6, 59% WR (33W-23L-2T) — dropped from #2
- #8 Muse Spark Open: BT 1500, 53% WR (40W-35L-6T) — open-weight
- #9 Kimi K2.6: BT 1492.9, 43% WR (21W-28L-1T) — open-weight
- #10 MiMo V2.6 Pro: BT 1430.5, 44% WR (23W-29L-3T) — open-weight
- #11 MiniMax M3: BT 1425.6, 51% WR (29W-28L-4T) — open-weight
- #12 DeepSeek V4 Flash: BT 1422.8, 40% WR (19W-29L-4T) — open-weight
- #13 Gemma 4 31B: BT 1236.8, 21% WR (12W-44L-5T) — open-weight, dropped significantly
- #14 gpt-oss 120B: BT 1131.7, 14% WR (9W-54L-4T) — open-weight
- #15 Qwen 3.5: BT 1122.4, 12% WR (6W-45L-1T) — open-weight

Notable: Gemma 4 31B dropped from #1 provisional (BT 1500) to #13 ranked (BT 1236.8). Yesterday's wide confidence intervals have narrowed with more match data. Muse Wonder is a new ranked open-weight entrant at #4.

## BenchLM October 16: Top 10 Stable, Minor Movements
**Source: https://benchlm.ai/reasoning**

BenchLM rankings frozen from Oct 15:
- #1 GPT-6 Astra: 93.3 — dominant
- #2 GPT-6.1 Sol: 90.5
- #3 Claude Opus 5.5: 86.1
- #4 Claude Fable 5.1: 85.2
- #5 MiniMax M3: 82.9
- #6 Muse Spark 1.3: 82.9 (tied)
- #7 Claude Sonnet 5.5: 82.7
- #8 Claude Haiku 5.5: 82.7
- #9 Qwen3.8-27B: 82.2
- #10 Mistral Large 4: 81.7
- #21 Kimi K3: 70.0

Key insight: FMRT and BenchLM show dramatically different rankings — Claude Fable 5.1 is #1 on FMRT but #4 on BenchLM. Kimi K3 is #2 on FMRT but absent from top 20 on BenchLM. Massive divergence persists.

## HuggingFace Trending October 16: Qwen Dominant, New Multimodal Entrants
**Source: https://huggingface.co/models?sort=trending**

Top trending models:
- Qwen3.8-27B: 7.52M downloads (stable dominant)
- DeepSeek-V4.1-Flash: 1.28M downloads (7 hours old)
- JEV-27B-VL (autotrust): 1.65M downloads (2 days old)
- LTX-2.5 (Lightricks): 1.92M downloads (image-to-video, 5 days old)
- Underdog-Saluki-27B-1.0: 371k downloads (was 344k Oct 15 — 8% increase, viral sustained)
- nerkyor composite fine-tune: 182k downloads (was 149k Oct 15 — 22% increase)
- LiquidAI/LFM2.5-24B-A2B-GGUF: 60.9k downloads
- Cloudflare/clef: 20.2k downloads (multimodal entrant, 7 days old)
- google/embeddinggemma-2: 151k downloads

Key insight: DeepSeek-V4.1-Flash fresh entry already at 1.28M downloads. JEV-27B-VL strong growth to 1.65M. LTX-2.5 image-to-video model gaining traction with 1.92M downloads.
