# Research Findings — September 15, 2026 (Task 2)

## Community Buzz, Reasoning Developments, Quantization, Benchmarks

### HuggingFace Trending — September 15

#### Volume Leaders
- **DeepSeek-V4.1-Flash** (763B): 326k downloads (was 288k on Sep 14 — +13% overnight, was 141k on Sep 12, 75.8k on Sep 11) — sustained surge continues over 4 days
- **MiniCPM5-2B** (3B): 272k downloads (was 207k on Sep 14) — continuing strong small-model showing
- **Edge0-35B-A3B-preview** (35B): 17.9k downloads (was 8.11k on Sep 14 — more than doubled overnight) — accelerating momentum
- **Nex-N2.5-mini** (35B): 5.2k downloads — replacing N2.5-Pro as fresh entrant slot
- **Nex-N2.5-Pro** (397B): 30.9k downloads — still holding significant volume
- **Qwen3.8-27B**: 7.7M cumulative downloads (was 7.32M on Sep 14)
- **dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8**: 5.78k downloads (new entry) — FP8 uncensored variant emerging
- **Agnes-AI/Agnes-3.0-Flash** (33B): 898 downloads, updated 1 day ago — new entrant

#### Quantization Activity
- **DeepSeek-V4.1-Flash**: 326k downloads, dominant absolute volume
- **DeepSeek-V4.1-Flash-UNCENSORED-FP8**: new entrant with FP8 uncensored variant at 5.78k downloads
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**: 885k downloads — GSQ quantization gaining
- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion**: 949k downloads — uncensored custom fusion holding strong
- **Qwen3.8-Flash-Next** (180B): 668k downloads — Qwen's own efficiency variant

#### Key Observations
1. DeepSeek-V4.1-Flash has gone from 75.8k → 141k → 244k → 288k → 326k in 5 days — nearly 4.3x over the week
2. Edge0-35B-A3B-preview more than doubled overnight (8.11k → 17.9k) — accelerating momentum
3. DeepSeek-V4.1-Flash-UNCENSORED-FP8 is a new entrant — community demand for uncensored variants is driving variant proliferation
4. MiniCPM5-2B small model story continues strong at 272k downloads
5. Agnes-AI/Agnes-3.0-Flash is a brand new entrant (updated 1 day ago, 898 downloads)

Source: https://huggingface.co/models?sort=trending

---

## FMRT Reasoning Tournament — September 15 Live

### Current Standings
1. **Claude Fable 5** — BT 1710, 77% win rate (▼ 1 from Sep 14's 1710? Actually same BT but ▼ 1 on win rate interpretation)
2. **GPT-5.6 Sol** — BT 1640, 67% win rate (▲ 1)
3. **MiniMax M3** (open-weight) — BT 1579, 61% win rate (▲ 1)
4. **Kimi K2.6** (open-weight) — BT 1568, 60% win rate (▲ 3)
5. **Kimi 3** — BT 1562, 59% win rate (▲ 8 on recent form — standout mover)
6. **Grok 4.5** — BT 1553, 55% win rate (▲ 6)
7. **GLM 5.2** (open-weight) — BT 1536, 55% win rate (▲ 5)
8. **Muse Spark 1.3 Contributor** — BT 1486, 47% win rate (▲ 4)
9. **DeepSeek V4 Flash** (open-weight) — BT 1438, 40% win rate (▲ 4)
10. **Gemini 2.5 Pro** — BT 1405, 36% win rate (▲ 3)

### Key Insights from FMRT
- **Kimi 3 is the month's standout** — up 8 on recent form (career rank #9, recent #1). Consistent with previous observations.
- **Claude Fable 5 cools slightly** — BT unchanged but win rate dipped. Note: BT is still 1710 (same as Sep 14), but recent form dropped.
- **Open-weight gap**: MiniMax M3 (BT 1579, #3) is 130 points behind Claude Fable 5 (#1, BT 1710)
- **Rivalries**: DeepSeek V4 Flash vs Gemini 2.5 Pro: 27-27 (5 ties) across 59 meetings — perfectly matched
- **Kimi K2.6 vs GLM 5.2**: 51-52 (4 ties) across 107 meetings — also very close
- **Most one-sided**: MiniMax M3 vs Qwen 3.5: 75-29 (5 ties) across 109 meetings — clear pecking order

Source: https://fmrt.ai/report

---

## BenchLM Reasoning — September 15 (Verified Sep 14)

- GPT-6 Astra: 89.5 (#1, unchanged)
- Claude Fable 5.1: 79.4 (#2, unchanged)
- Kimi K3: 78.5 (#3, unchanged)
- Muse Spark 1.3 and MiniMax M3 tied at 78.0 (#4-5, unchanged)
- Rankings stable — no changes from Sep 13-14
- GPT-5.6 Sol: 70.4 weighted (#12) — consistent discrepancy with FMRT BT 1640 reflects different benchmark constructs

Source: https://benchlm.ai/reasoning

---

## Community Pulse

### Working Well
- DeepSeek-V4.1-Flash momentum sustained over 5 days — from 75.8k to 326k downloads (4.3x growth)
- Edge0-35B-A3B-preview acceleration (8.11k → 17.9k in one day) signals a new model to watch
- Kimi 3 consistent climb in FMRT: up 8 places on recent form — confirmed trajectory continuing

### Problems
- K-Bench finding: elevated reasoning produces no average improvement on mental health safety — concerning for AI mental health assistants
- TruthfulnessQA surface leakage issue (from recent days): benchmarks may overestimate model truthfulness

### Interesting
- DeepSeek-V4.1-Flash-UNCENSORED-FP8 appearing as new variant — community demand for uncensored models driving variant proliferation around the most popular base
- Discovery Foundation Models paper frames a fundamentally new capability level — from problem-solving to problem-construction

## Sources
- HuggingFace trending: https://huggingface.co/models?sort=trending
- FMRT: https://fmrt.ai/report
- BenchLM: https://benchlm.ai/reasoning
