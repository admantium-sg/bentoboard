# Research Findings — September 11, 2026 (Task 2)

## Benchmarks & Rankings

### BenchLM Reasoning Leaderboard (Sep 10, 2026)
Source: https://benchlm.ai/reasoning

GPT-6 Astra leads at 89.5 (unchanged). Kimi K3 appears as new entrant at #3 with 78.5 weighted score — notably different from FMRT rankings.

| Rank | Model | Score | Notes |
|------|-------|-------|-------|
| 1 | GPT-6 Astra | 89.5 | OpenAI, proprietary |
| 2 | Claude Fable 5.1 | 79.4 | Anthropic |
| 3 | Kimi K3 | 78.5 | Moonshot AI, NEW |
| 4 | MiniMax M3 | 78.0 | Open weight |
| 5 | Muse Spark 1.3 | 78.0 | Meta |
| 6 | Claude Fable 5 | 77.6 | Anthropic |
| 7 | Qwen3.8-27B | 77.4 | Alibaba |
| 8 | Gemini 3.8 Flash | 76.9 | Google |
| 9 | Grok 4.6 | 76.2 | xAI |
| 10 | GLM-5.3 | 75.8 | Z.AI |

Key benchmarks weighted in category: LongBench v2 (25%), ARC-AGI-2 (25%), MRCRv2 (20%)

Notable: BenchLM reasoning rankings differ significantly from FMRT — Kimi K3 ranks #3 here vs not appearing in FMRT top-10. This reflects different evaluation methodologies.

---

### FMRT September 2026 — Live Rankings (Sep 11)
Source: https://fmrt.ai/report

Claude Fable 5 holds #1 (BT 1707, 77% win rate). Kimi 3 is the standout mover: up 8 on recent form (career rank #5, recent form #1). MiniMax M3 has cooled, down 2 places.

| Rank | Model | BT Rating | Win Rate | Recent Form |
|------|-------|-----------|----------|-------------|
| 1 | Claude Fable 5 | 1707 | 77% | — |
| 2 | GPT-5.6 Sol | 1634 | 67% | — |
| 3 | MiniMax M3 (open) | 1574 | 61% | ▼2 |
| 4 | Kimi K2.6 (open) | 1564 | 60% | ▲1 |
| 5 | Kimi 3 | 1563 | 59% | ▲8 |
| 6 | Muse Spark 1.3 Contributor | 1559 | 60% | ▲4 |
| 7 | Grok 4.5 | 1550 | 55% | ▲7 |
| 8 | GLM 5.2 (open) | 1531 | 55% | ▲8 |
| 9 | DeepSeek V4 Flash (open) | 1433 | 40% | ▲6 |
| 10 | Gemini 2.5 Pro | 1400 | 36% | ▲3 |

Key observations:
- Kimi 3: career #5, recent #1 — strongest climber
- GLM 5.2 and Kimi 3 both up 8 on recent form
- DeepSeek V4 Flash vs Gemini 2.5 Pro: 27-27 (5 ties) across 59 meetings — closest rivalry
- Strongest open-weight: MiniMax M3 at BT 1574 (#3), still 133 points behind Claude Fable 5

---

## HuggingFace Trending (Sep 11, 2026)

Source: https://huggingface.co/models?sort=trending

Fresh activity patterns:
- **DeepSeek-V4.1-Flash** (763B): 75.8k downloads, updated 1 day ago — dominant absolute volume
- **MiniCPM5-2B** (3B): 67.6k downloads, updated 1 day ago — strong small-model showing
- **Nex-N2.5-Pro** (397B): 12.3k downloads, updated ~12 hours ago — NEW model, very fresh
- **Nex-N2.5-mini** (35B): 3.12k downloads, updated 3 days ago

GGUF/quantization variants continuing strong:
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** (27B): 682k downloads
- **unsloth/Qwen3.8-27B-GGUF**: 11.3M downloads
- **dealignai/GLM-5.3-CYBERSECURITY-FP8** (753B): 28.3k downloads — FP8 quantization
- **nvidia/Qwen3.8-Flash-Next-NVFP4** (120B): 78.7k downloads — NVIDIA FP4 quantized

Notable new FP4 activity:
- **nvidia/Qwen3.8-Flash-Next-NVFP4**: Hardware-native FP4 quantization gaining traction

Key insight: Nex-N2.5-Pro is a fresh entrant (397B) showing immediate community interest. DeepSeek-V4.1-Flash continues dominating downloads. FP4 quantization variants (NVIDIA FP4) are emerging as a distinct category.

---

## Quantization & Efficiency Developments

From HuggingFace trending:
- FP8 variants: GLM-5.3-CYBERSECURITY-FP8 (753B) at 28.3k downloads
- FP4 variants: nvidia/Qwen3.8-Flash-Next-NVFP4 (120B) showing 78.7k downloads
- GGUF remains dominant: unsloth Qwen3.8-27B-GGUF at 11.3M downloads
- Small efficient models: MiniCPM5-2B at 67.6k downloads (3B parameter model)

No major quantization research papers on today's arXiv submission list.

---

## Sources
- BenchLM reasoning: https://benchlm.ai/reasoning
- FMRT: https://fmrt.ai/report
- HuggingFace trending: https://huggingface.co/models?sort=trending
