# Findings — Task 2: Community Buzz + Reasoning/Benchmarks/Quantization
**Date:** 2026-09-18

## FMRT Reasoning Leaderboard (September 2026)

**Claude Fable 5** retains #1 with BT 1711, 77% win rate across 710 debated motions.
**Kimi 3** is the standout mover: ▲8 on recent form, now at rank #5 overall (BT 1567, 60% win rate). This is the third consecutive day of confirmed ▲8 trajectory — momentum is real.

**Top FMRT Rankings:**
1. Claude Fable 5 — BT 1711, 77%
2. GPT-5.6 Sol — BT 1641, 67%
3. MiniMax M3 (open) — BT 1579, 61% ▲2
4. Kimi K2.6 (open) — BT 1568, 60% ▲4
5. Kimi 3 — BT 1567, 60% ▲8 ← biggest mover
6. Grok 4.5 — BT 1551, 55% ▲4
7. GLM 5.2 (open) — BT 1536, 55% ▲4
8. Muse Spark 1.3 Contributor — BT 1475, 47% ▲4
9. DeepSeek V4 Flash (open) — BT 1437, 40% ▲4
10. Gemini 2.5 Pro — BT 1405, 36% ▲3

**Open-weight leader:** MiniMax M3 at #3 overall (BT 1579) — 131 points behind Claude Fable 5. The open/proprietary gap remains meaningful.

**Closest rivalries:**
- DeepSeek V4 Flash vs Gemini 2.5 Pro: 27–27 across 59 meetings (perfectly tied)
- Kimi K2.6 vs Grok 4.5: 26–26 across 57 meetings (tied)
- Kimi K2.6 vs GLM 5.2: 51–52 across 107 meetings (essentially even)

**Most one-sided:**
- MiniMax M3 vs Qwen 3.5: 76–29 across 110 meetings
- MiniMax M3 vs Gemini 2.5 Pro: 71–27 across 106 meetings
- Kimi K2.6 vs DeepSeek V4 Flash: 54–14 across 72 meetings

Source: https://fmrt.ai/report (live as of 2026-09-18)

---

## BenchLM Reasoning (September 2026)

**GPT-6 Astra** dominates at #1 with 89.5 weighted score (10+ points ahead of #2).

**Top Benchmarks:** MuSR (narrative reasoning), BBH (BIG-Bench Hard), LisanBench (word-chain reasoning, 2026), Pencil Puzzle Bench (multi-step verifiable reasoning, 2026), LongBench v2 (long-context reasoning).

**Shortlist:**
1. GPT-6 Astra — 89.5 (OpenAI, 1.05M context)
2. Claude Fable 5.1 — 79.4 (Anthropic, 1M context)
3. Kimi K3 — 78.5 (Moonshot AI, 1.05M context)
4. MiniMax M3 — 78.0 (MiniMax, open weight, 1M context)
5. Muse Spark 1.3 — 78.0 (Meta, 1M context)

Note: FMRT and BenchLM rankings diverge somewhat — Kimi K3 is #3 on BenchLM but Kimi 3 is #5 on FMRT. Different evaluation paradigms (debate vs fixed-prompt benchmarks).

Source: https://benchlm.ai/reasoning (last verified 2026-09-18)

---

## HuggingFace Trending (September 18)

**Notable movers:**
- **Edge0-35B-A3B-preview:** 52.5k downloads (+33% overnight, 693 → 52k in 5 days — momentum accelerating rapidly)
- **DeepSeek-V4.1-Flash:** 430k downloads (+10% overnight, 4.8x over 9 days — now normalizing)
- **Ternary-Bonsai-2-27B-gguf:** 406k downloads (new entrant ~21 hours old)
- **Xing4.0-29B-A4B:** 3.07k downloads (updated ~6 hours ago — new entry)

**Steady performers:**
- Qwen3.8-27B: 7.36M (normalizing after peak)
- MiniCPM5-2B: 357k (steady)
- YuE2-3B (text-to-audio): 13.7k (normalized after viral spike)
- Swift-Qwen3.8-27b: 6.29k (new entrant 2 days ago)

**GGUF/quantization interest:**
- Ternary-Bonsai-2-27B-gguf: 406k downloads, 768 likes — ternary quantization getting strong interest
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion: 1.2M downloads (continuing strong)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: 1.08M downloads

Source: https://huggingface.co/models?sort=trending

---

## Quantization Advances (Community)

**Ternary-Bonsai-2-27B-gguf** trending with 406k downloads in ~21 hours — strong signal that sub-4-bit quantization for medium models is generating significant community interest. Ternary (3-level) quantization hitting mainstream GGUF format adoption.

**Observation:** GGUF continues to dominate model distribution format for open-weight models. Multiple Qwen3.8-27B variants (turbo, GSQ-RCO, cold-fusion) with millions of downloads each — the Qwen3.8-27B base is becoming the dominant community fine-tune substrate.

---

## Key Observations

1. **Kimi momentum confirmed:** Kimi 3 with ▲8 third consecutive day on FMRT is a real trend, not noise. Kimi K2.6 also rising ▲4.

2. **Quantization democratization:** Ternary-Bonsai-2-27B-gguf hitting 406k downloads in <1 day suggests aggressive quantization is finding broad user base beyond technical users.

3. **FMRT/BenchLM divergence:** Models rank differently across paradigms — FMRT (debate) vs BenchLM (fixed benchmarks). Neither is wrong; they measure different things.

4. **Edge0 momentum:** Edge0-35B trending from 693 to 52k downloads in 5 days — 75x growth. Small-to-medium agentic models gaining serious traction.

---

## Sources
- https://fmrt.ai/report
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending
