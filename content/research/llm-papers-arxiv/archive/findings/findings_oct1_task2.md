# Findings: Task 2 — Community Buzz, Reasoning, Quantization, Benchmarks
## Research Focus: Reddit/community sentiment, reasoning developments, quantization, benchmarks

Sources: FMRT (fmrt.ai/report), BenchLM (benchlm.ai/reasoning), HuggingFace trending (huggingface.co/models?sort=trending)
Date: October 1, 2026

---

## Leaderboard State: FMRT (October 1, 2026)

**Claude Fable 5** retains #1: BT 1713, 78% win rate (▼1 on recent form)
- Kimi 3 is the standout: ▲8 on recent form (career rank #9, recent #1)
- GPT-5.6 Sol has cooled: ▼2 places
- MiniMax M3 best open-weight at #7 (BT 1576, 61%), 137 points behind Claude Fable 5

Full standings:
| Rank | Model | BT | Win% | Recent |
|------|-------|-----|------|--------|
| 1 | Claude Fable 5 | 1713 | 78% | ▼1 |
| 2 | GPT-5.6 Sol | 1639 | 67% | ▼2 |
| 3 | MiniMax M3 (open) | 1576 | 61% | ▲3 |
| 4 | Kimi K2.6 (open) | 1568 | 61% | ▲5 |
| 5 | Kimi 3 | 1568 | 60% | ▲8 |
| 6 | GLM 5.2 (open) | 1532 | 55% | ▲6 |
| 7 | Muse Spark 1.3 Contributor (open) | 1528 | 56% | ▲6 |
| 8 | Grok 4.7 | 1513 | 65% | ▲6 |
| 9 | DeepSeek V4 Flash (open) | 1432 | 40% | ▲4 |
| 10 | Gemini 2.5 Pro | 1401 | 36% | ▲7 |

Notable rivalries:
- Kimi K2.6 vs GLM 5.2: 51-52 (4T) across 107 meetings — essentially tied
- DeepSeek V4 Flash vs Gemini 2.5 Pro: 27-27 (5T) across 59 meetings — perfectly matched
- MiniMax M3 dominates Qwen 3.5: 77-30 (5T) across 112 meetings

Key insight: Kimi 3 is the month's standout climber; Kimi ecosystem broadly rising (K2.6 ▲5, Kimi 3 ▲8). GPT-5.6 Sol cooling. Open-weight models (MiniMax M3, Kimi K2.6) performing well.

Source: https://fmrt.ai/report

---

## Leaderboard State: BenchLM (September 30, 2026)

**GPT-6 Astra** leads at 89.6 — dominant, ~7+ points ahead of #2
**Anthropic holds top 3**: Claude Opus 5.5 (#2, 82.4), Claude Fable 5.1 (#3, 81.4)

Key changes from previous cycle:
- GPT-6 Sol enters at #4 (79.6) and GPT-6.1 Sol at #5 (79.4) — two new GPT-6 family members
- MiniMax M3 rises to #6 (79.4, tied with GPT-6 Sol) — best open-weight, consistent across platforms
- Muse Spark 1.3 rises to #7 (79.4) — Meta's reasoning model climbing
- Kimi K3 drops significantly to #18 (65.8) — strong on FMRT, weak on fixed benchmarks
- GPT-5.6 Sol drops to #15 (72.5) — notable fall from earlier high standing

Top 10:
| Rank | Model | Score |
|------|-------|-------|
| 1 | GPT-6 Astra | 89.6 |
| 2 | Claude Opus 5.5 | 82.4 |
| 3 | Claude Fable 5.1 | 81.4 |
| 4 | GPT-6 Sol | 79.6 |
| 5 | GPT-6.1 Sol | 79.4 |
| 6 | MiniMax M3 (open) | 79.4 |
| 7 | Muse Spark 1.3 | 79.4 |
| 8 | Claude Sonnet 5.5 | 79.2 |
| 9 | Qwen3.8-27B (open) | 78.7 |
| 10 | Claude Opus 5 | 77.3 |

Open-weight leader: MiniMax M3 at #6 (79.4) — consistent across both FMRT and BenchLM

Key insight: BenchLM and FMRT show different pictures. Kimi K3 ranks #5 on FMRT (recent form #1) but #18 on BenchLM — suggests it excels at live debate reasoning but underperforms on fixed benchmarks. GPT-6 family expansion (Sol, 1 Sol, Astra) indicates OpenAI is running a multi-model reasoning portfolio.

Source: https://benchlm.ai/reasoning

---

## HuggingFace Trending (October 1, 2026)

Continuing trends from previous cycle:
- **Qwen3.8-27B**: 6.95M downloads — still dominant in text models, normalizing from peak
- **Ternary-Bonsai-2-27B-gguf**: 3.77M downloads — viral momentum slowing slightly (was 3.68M Sep 30)
- **DeepSeek-V4.1-Flash**: 748k downloads (updated ~10 hours ago) — steady
- **Qwen-Image-2.1**: 76.9k downloads (1 day old) — new entrant, text-to-image
- **Swift-1.5-Qwen3.8-27B-GSQ-RCO-GGUF**: 231k downloads — quantized variant gaining traction
- **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF**: 952k downloads (2 days old) — large quantized model
- **XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B**: 12.8k downloads — small distilled model, steady

New entrants:
- **Comfy-Org/Qwen-Image-2.1**: 5.38M downloads — community fork of Qwen image model going viral
- **Viggle/Qwen-Image-2.1-viggle-turbo**: 218k downloads (~13 hours old) — another image variant
- **Jev-Omni**: 1.4k downloads — choice-based classification model

Key insight: Ternary quantization (Ternary-Bonsai) growth slowing after viral run. Qwen image models dominating community fork space. No new text reasoning models trending — space is consolidating around existing leaders.

Source: https://huggingface.co/models?sort=trending

---

## Key Cross-Platform Observations

1. **Kimi ecosystem momentum**: Kimi 3 is climbing on both FMRT (▲8 recent form) and maintaining BenchLM presence — the trajectory is cross-platform, suggesting real capability improvement rather than benchmark overfitting.

2. **GPT-6 family proliferation**: Astra (#1 BenchLM), Sol (#4), 1 Sol (#5) — OpenAI running 3 reasoning-tier models simultaneously, different capability/cost tradeoffs.

3. **FMRT vs BenchLM divergence**: Models like Kimi K3 (#5 FMRT, #18 BenchLM) and GPT-5.6 Sol (#2 FMRT, #15 BenchLM) show massive divergence — tournament debate and fixed benchmarks measure fundamentally different reasoning capabilities.

4. **Open-weight gap stable at ~137 points** (MiniMax M3 vs Claude Fable 5 on FMRT) — proprietary lead remains meaningful but not widening.

5. **Quantization space maturing**: Ternary-Bonsai viral growth plateauing; Qwen GSQ variants filling the quantization optimization space — community moving from exploration to exploitation.
