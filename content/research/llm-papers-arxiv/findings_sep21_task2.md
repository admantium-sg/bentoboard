# Research Findings — Task 2: Community & Benchmarks
**Topic:** llm-papers-arxiv | **Date:** 2026-09-21
**Research focus:** Community buzz + Reasoning developments, quantization advances, benchmarks

## FMRT Leaderboard (September 21, 2026)
**Source:** https://fmrt.ai/report

- **#1 Claude Fable 5:** BT 1709, 77% win rate — slipped 1 place in recent form
- **#2 GPT-5.6 Sol:** BT 1639, 67% — ▲1
- **#3 MiniMax M3:** BT 1578, 61% — ▲3 (best open-weight)
- **#4 Kimi 3:** BT 1569, 60% — ▲7 (biggest mover, career rank #8, recent #1)
- **#5 Kimi K2.6:** BT 1565, 60% — ▲4
- **#6 Grok 4.5:** BT 1551, 55% — ▲2
- **#7 GLM 5.2:** BT 1535, 55% — ▲5
- **#8 Muse Spark 1.3 Contributor:** BT 1515, 50% — ▲6

**Key rivalry:** Kimi K2.6 vs Grok 4.5: 27-27 (5 ties) across 59 meetings — perfectly split
**Proprietary lead:** 131 points (Claude Fable 5 vs MiniMax M3)

## BenchLM Reasoning (September 18, 2026)
**Source:** https://benchlm.ai/reasoning

- **#1 GPT-6 Astra:** 89.5 — dominant, 10+ points ahead
- **#2 Claude Fable 5.1:** 79.4
- **#3 Kimi K3:** 78.5
- **#4 MiniMax M3:** 78.0
- **#5 Muse Spark 1.3:** 78.0
- **#6 Claude Fable 5:** 77.6
- **#7 Qwen3.8-27B:** 77.4
- **#8 Gemini 3.8 Flash:** 76.9

Top 10 crystallized — reasoning tier structure stable

## HuggingFace Trending (September 21, 2026)
**Source:** https://huggingface.co/models?sort=trending

- **Ternary-Bonsai-2-27B-gguf:** 2.23M downloads (was 1.91M Sep 20 — viral, +17%)
- **Qwen3.8-27B:** 7.15M downloads (normalizing from 7.46M peak)
- **DeepSeek-V4.1-Flash:** 512k downloads
- **YuE2-3B (text-to-audio):** 18.8k downloads (was 11.6k Sep 17 — still climbing)
- **Swift-Qwen3.8-27b:** 16.5k downloads (new entrant, <1 day old)
- **GLM-5.3-Flash:** 3.31M downloads (was 1.77M Sep 14 — 87% growth)
- **Qwen-Image-2.1:** 6.52k downloads, 1.28k likes (new entrant, image gen)
- **TinyTouch-2-7B:** 1.22k downloads (new entrant)

**Key insight:** Ternary quantization (Ternary-Bonsai) accelerating through viral phase; GLM family surge continues

## Community Pulse

**Working well:**
- Kimi ecosystem momentum: Kimi 3 up 7 places on FMRT recent form, Kimi K3 solid #3 on BenchLM
- Ternary quantization gaining traction faster than expected (2.23M downloads in ~1 week)

**Problems:**
- GPT-6 Astra's dominance on BenchLM (89.5, 10+ points ahead) shows OpenAI reclaimed reasoning benchmark lead
- Claude Fable 5 cooling on FMRT (slipped 1) despite strong BenchLM position

**Interesting:**
- RecreationWorld shows GPT-6 Astra at 58.1% on hybrid computer-use tasks but only 2.8% pass all programmatic tests — capability gap in verifiable execution
- MDL paper shows 56% hallucination reduction via zero-parameter decision layer — white-box alternative to LLM self-evaluation for RAG

## Sources
- https://fmrt.ai/report
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending
