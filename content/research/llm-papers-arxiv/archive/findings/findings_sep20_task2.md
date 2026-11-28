# Findings — Task 2: Community Buzz + Reasoning/Benchmarks/Quantization
**Date:** 2026-09-20

## FMRT Reasoning Leaderboard (September 20)

**Kimi 3** is the standout mover: ▲7 on recent form, now rank **#4 overall** (BT 1569, 60% win rate). This is a major jump — Kimi 3 is climbing rapidly in debate-based reasoning. **Claude Fable 5** slips ▼1 but still leads at #1 (BT 1707, 77%).

**Top FMRT Rankings:**
1. Claude Fable 5 — BT 1707, 77% ▼1
2. GPT-5.6 Sol — BT 1639, 67% ▲1
3. MiniMax M3 (open) — BT 1577, 61% ▲1
4. **Kimi 3** — BT 1569, 60% ▲7 ← biggest mover
5. Kimi K2.6 (open) — BT 1565, 60% ▲5
6. Grok 4.5 — BT 1551, 55% ▲3
7. GLM 5.2 (open) — BT 1535, 55% ▲6
8. Muse Spark 1.3 Contributor — BT 1518, 50% ▲5
9. DeepSeek V4 Flash (open) — BT 1433, 40% ▲4
10. Gemini 2.5 Pro — BT 1403, 36% ▲4
11. Qwen 3.5 (open) — BT 1399, 36% ▲4
12. gpt-oss 120B (open) — BT 1370, 33% ▲4
13. Gemma 4 31B (open) — BT 1322, 25% ▲5

**Open-weight leader:** MiniMax M3 at #3 overall (BT 1577) — 130 points behind Claude Fable 5.

**Most one-sided rivalries:**
- MiniMax M3 vs Qwen 3.5: 76–29 across 110 meetings
- MiniMax M3 vs Gemini 2.5 Pro: 71–27 across 106 meetings
- Kimi K2.6 vs DeepSeek V4 Flash: 54–14 across 72 meetings

**Perfect ties:**
- Kimi K2.6 vs Grok 4.5: 27–27 across 59 meetings
- DeepSeek V4 Flash vs Gemini 2.5 Pro: 27–27 across 59 meetings

Source: https://fmrt.ai/report (live as of 2026-09-20)

---

## BenchLM Reasoning (September 18 verified)

**GPT-6 Astra** widens its lead at #1 with **89.5** weighted score — 10+ points ahead of #2. This is a significant gap in the benchmark reasoning landscape.

**Top BenchLM Rankings:**
1. GPT-6 Astra — 89.5 (OpenAI) — 1.05M context
2. Claude Fable 5.1 — 79.4 (Anthropic) — 1M context
3. **Kimi K3** — 78.5 (Moonshot AI) — 1.05M context
4. MiniMax M3 — 78.0 (open weight) — 1M context
5. Muse Spark 1.3 — 78.0 (Meta) — 1M context
6. Claude Fable 5 — 77.6 (Anthropic)
7. **Qwen3.8-27B** — 77.4 (Alibaba) — notable open-weight entrant
8. Gemini 3.8 Flash — 76.9 (Google)
9. Grok 4.6 — 76.2 (xAI)
10. GLM-5.3 — 75.8 (Z.AI)

**Notable:** Qwen3.8-27B at #7 is a strong showing for an open-weight model on fixed benchmarks. Kimi K3 at #3 on BenchLM vs Kimi 3 at #4 on FMRT — the debate paradigm vs fixed benchmarks diverge as expected.

Source: https://benchlm.ai/reasoning (last verified 2026-09-18)

---

## HuggingFace Trending (September 20)

**Massive mover:**
- **Ternary-Bonsai-2-27B-gguf:** 1.91M downloads — ternary (3-bit) quantization, updated 3 days ago, 1.34k likes. Explosive growth from the 406k seen 2 days ago.

**Continuing strong performers:**
- Qwen3.8-27B: 7.33M downloads (steady)
- DeepSeek-V4.1-Flash: 497k downloads (continuing massive volume)
- ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF: 1.22M downloads
- DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion: 1.3M downloads
- unsloth/Qwen3.8-27B-GGUF: 6.94M downloads

**New/updating:**
- **Edge0-35B-A3B-preview:** 76.7k downloads — continuing rapid growth (was 52k on Sep 18)
- Xing4.0-29B-A4B: 12.6k downloads
- Swift-Qwen3.8-27b: 11k downloads
- **TaichuAI/ZDTaichu5.0-9B:** 3.75k downloads, updated ~2 hours ago — new entrant

**Quantization observation:** Ternary-Bonsai-2-27B-gguf at 1.91M downloads is extraordinary — sub-4-bit quantization for a 27B model hitting nearly 2M downloads suggests quantization is going mainstream. Multiple Qwen3.8-27B variants with millions of downloads each — this base model is the community's dominant fine-tune substrate.

Source: https://huggingface.co/models?sort=trending

---

## Key Observations

1. **Kimi surge confirmed:** Kimi 3 ▲7 and Kimi K2.6 ▲5 on FMRT — Kimi/Moonshot is clearly on an upward trajectory. Kimi K3 also #3 on BenchLM.

2. **GPT-6 Astra dominance:** 89.5 on BenchLM — a 10+ point lead over #2 is rare at this level of the leaderboard. OpenAI retaining benchmark reasoning crown.

3. **Ternary quantization hits mainstream:** Ternary-Bonsai-2-27B-gguf at 1.91M downloads in ~5 days — aggressive sub-4-bit quantization going fully mainstream on HuggingFace.

4. **Qwen3.8-27B as community standard:** Multiple fine-tuned variants (turbo, cold-fusion, GSQ-RCO) each with 1M+ downloads — the Qwen3.8-27B base has become the community's primary fine-tune substrate.

5. **Edge0 momentum continues:** 52k → 76.7k in 2 days — agentic medium models remain in high demand.

---

## Sources
- https://fmrt.ai/report
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending
