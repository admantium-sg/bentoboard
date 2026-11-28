# Findings - October 4, 2026 (Task 2: Community & Benchmarks)

## Sources
- https://fmrt.ai/report (Live - October 4, 2026)
- https://benchlm.ai/reasoning (Verified October 2, 2026)
- https://huggingface.co/models?sort=trending (October 4, 2026)

## FMRT October 4 (Live)

Claude Fable 5 leads with BT 1708, 77% win rate. Kimi ecosystem shows sustained momentum — Kimi 3 ▲7 on recent form, Kimi K2.6 ▲6. Gemma 4 31B is the standout mover: ▲8 on recent form (career #20, recent #12). GPT-5.6 Sol has cooled, ▼1.

Key standings:
- Claude Fable 5: #1 (BT 1708, 77%)
- GPT-5.6 Sol: #2 (BT 1635, 67%) — ▼1
- MiniMax M3: #3 open-weight (BT 1571, 61%) — ▲2
- Kimi 3: #4 (BT 1566, 60%) — ▲7
- Kimi K2.6: #5 (BT 1566, 61%) — ▲6
- Muse Spark 1.3 Contributor: #6 (BT 1549, 60%) — ▲2
- Grok 4.7: #7 (BT 1548, 68%) — ▲5
- GLM 5.2: #8 (BT 1530, 55%) — ▲7
- Gemma 4 31B: #13 — ▲8 (biggest mover)

Rivalries:
- Kimi K2.6 vs GLM 5.2: 51-52 (4T) across 107 meetings — essentially tied
- MiniMax M3 vs Qwen 3.5: 77-31 (5T) across 113 debates — dominant open-weight lead

Open-weight vs proprietary: MiniMax M3 at #7 (BT 1571), 137 points behind Claude Fable 5.

Source: https://fmrt.ai/report

## BenchLM October 2 (Verified)

GPT-6 Astra dominant at #1 (89.6) — ~10+ points ahead of #2. Top 10 unchanged from previous cycle.

Top 10:
1. GPT-6 Astra: 89.6
2. Claude Opus 5.5: 82.4
3. Claude Fable 5.1: 81.4
4. GPT-6 Sol: 79.6
5. GPT-6.1 Sol: 79.4
6. MiniMax M3: 79.4
7. Muse Spark 1.3: 79.4
8. Claude Sonnet 5.5: 79.2
9. Qwen3.8-27B: 78.7
10. Claude Opus 5: 77.3

Notable: Kimi K3 at #18 (65.8) — FMRT ranks it #4 but BenchLM ranks it #18. Massive divergence between tournament reasoning and fixed-benchmark reasoning.

Open-weight leader: MiniMax M3 at #6 (79.4) — consistent across both platforms.

Source: https://benchlm.ai/reasoning

## HuggingFace Trending October 4

- Qwen3.8-27B: 6.82M downloads — normalizing from ~7M peak
- Ternary-Bonsai-2-27B-gguf: 4.05M downloads — plateaued after viral spike
- LTX-2.5 (Lightricks): 1.63M downloads — image-to-video, new entrant going viral
- DeepSeek-V4.1-Flash: 798k downloads — steady growth
- Cloudflare/clef-flash: 6.37k downloads — 9B flash variant, new
- Aleph-Alpha/Kolibri-1: 1.14k downloads — 78B text generation, 1 day old drop

Key insight: LTX-2.5 is new image-to-video entrant showing viral growth. Qwen image ecosystem continues branching (Qwen-Image-2.1 forks). Ternary quantization viral growth plateauing.

Source: https://huggingface.co/models?sort=trending

## Community Observations

### FMRT vs BenchLM Divergence Growing
Kimi K3 is the starkest example: #4 on FMRT (tournament debate) but #18 on BenchLM (fixed benchmarks). This ~14-position gap between evaluation paradigms suggests current reasoning benchmarks measure fundamentally different capabilities. Models specialized for one paradigm don't transfer to the other.

### Gemma 4 31B Dark Horse
Gemma 4 31B moved ▲8 on recent FMRT form — biggest jump this cycle. Despite low overall BT (1312, 24% win rate), its trajectory suggests real capability improvement. Worth watching as it climbs toward competitive tiers.

### Open-Weight Cohort Broadly Rising
MiniMax M3 (#7 overall, #3 open-weight), Kimi K2.6 (#5), Muse Spark 1.3 (#6), GLM 5.2 (#8) — all ▲2-7 on recent form. Open-weight models collectively gaining ground on proprietary leaders.

### Kimi Ecosystem Momentum
Kimi 3 (#4) and Kimi K2.6 (#5) both climbing consistently. Kimi K2.6 vs GLM 5.2 rivalry remains essentially tied (51-52 across 107 debates). Kimi ecosystem appears to be sustaining a real capability improvement cycle.
