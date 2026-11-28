# Research Findings — September 12, 2026 (Task 2)

## Benchmarks & Rankings

### BenchLM Reasoning Leaderboard (Sep 10, 2026)
Source: https://benchlm.ai/reasoning

GPT-6 Astra leads at 89.5. Rankings largely unchanged from yesterday. Kimi K3 maintains #3.

| Rank | Model | Score | Notes |
|------|-------|-------|-------|
| 1 | GPT-6 Astra | 89.5 | OpenAI, proprietary |
| 2 | Claude Fable 5.1 | 79.4 | Anthropic |
| 3 | Kimi K3 | 78.5 | Moonshot AI |
| 4 | MiniMax M3 | 78.0 | Open weight |
| 5 | Muse Spark 1.3 | 78.0 | Meta |
| 6 | Claude Fable 5 | 77.6 | Anthropic |
| 7 | Qwen3.8-27B | 77.4 | Alibaba |
| 8 | Gemini 3.8 Flash | 76.9 | Google |
| 9 | Grok 4.6 | 76.2 | xAI |
| 10 | GLM-5.3 | 75.8 | Z.AI |

Key benchmarks weighted: LongBench v2 (25%), ARC-AGI-2 (25%), MRCRv2 (20%)

Note: BenchLM rankings unchanged vs yesterday. Last verified Sep 10, 2026.

---

### FMRT September 2026 — Live Rankings (Sep 12)
Source: https://fmrt.ai/report

Claude Fable 5 holds #1 (BT 1707). Kimi 3 is the standout climber: up 8 on recent form.

| Rank | Model | BT Rating | Win Rate | Recent Form |
|------|-------|-----------|----------|-------------|
| 1 | Claude Fable 5 | 1707 | 77% | — |
| 2 | GPT-5.6 Sol | 1634 | 67% | — |
| 3 | MiniMax M3 (open) | 1574 | 61% | ▼2 |
| 4 | Kimi K2.6 (open) | 1564 | 60% | ▲1 |
| 5 | Kimi 3 | 1563 | 60% | ▲8 |
| 6 | Muse Spark 1.3 Contributor | 1559 | 55% | ▲4 |
| 7 | Grok 4.5 | 1550 | 55% | ▲7 |
| 8 | GLM 5.2 (open) | 1531 | 55% | ▲8 |
| 9 | DeepSeek V4 Flash (open) | 1433 | 40% | ▲6 |
| 10 | Gemini 2.5 Pro | 1400 | 36% | ▲3 |

Key observations:
- Kimi 3: career rank #9, recent form #1 — strongest climber in the field
- GLM 5.2 up 8 on recent form (consistent with yesterday's observation)
- MiniMax M3: down 2 places on recent form — cooling confirmed
- DeepSeek V4 Flash vs Gemini 2.5 Pro: 27-27 across 59 meetings — closest rivalry in the field
- Strongest open-weight: MiniMax M3 at BT 1574 (#3), 133 points behind Claude Fable 5

---

## HuggingFace Trending (Sep 12, 2026)

Source: https://huggingface.co/models?sort=trending

Volume leaders:
- **DeepSeek-V4.1-Flash** (763B): 141k downloads, updated 2 days ago — surging (was 75.8k on Sep 11)
- **MiniCPM5-2B** (3B): 102k downloads, updated ~9 hours ago — strong small-model showing
- **Nex-N2.5-Pro** (397B): 30.1k downloads, updated 1 day ago — holding strong from yesterday
- **Qwen3.8-27B**: 7.73M downloads — cumulative classic

Quantization activity:
- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**: 730k downloads
- **unsloth/Qwen3.8-27B-GGUF**: 11.5M downloads — massive cumulative
- **nvidia/Qwen3.8-Flash-Next-NVFP4**: 89.9k downloads (FP4 hardware quantization)
- **dealignai/GLM-5.3-CYBERSECURITY-FP8**: 30.1k downloads

New/updated:
- **IFM/K2-Horizon-MoVA-36B-A4B** (37B): 5.62k downloads, updated ~12 hours ago — fresh entrant
- **WarmBloodAban/Minimax-h3_Singularity** (image/video): 114k downloads, updated ~13 hours ago

Key insight: DeepSeek-V4.1-Flash volume nearly doubled overnight (75.8k → 141k). MiniCPM5-2B small-model story continues. Nex-N2.5-Pro holding from yesterday's fresh release.

---

## Quantization & Efficiency Developments

From HuggingFace trending and today's arXiv:
- FP4 variants (NVIDIA hardware-native) continuing to gain traction: Qwen3.8-Flash-Next-NVFP4 at 89.9k downloads
- GGUF remains dominant for quantized inference: unsloth Qwen3.8-27B-GGUF at 11.5M cumulative downloads
- FP8: GLM-5.3-CYBERSECURITY-FP8 showing 30.1k downloads — domain-specific FP8 deployment
- Kashin-DCT quantization paper (arXiv:2609.11687) today: O(N log N) DCT-based 2-bit quantization with strong stability under stress — notable for hardware-native 2-bit deployment

---

## Key Theme: RAG Safety

Today's standout safety finding: RAG-Safety-Bench (EMNLP 2026, arXiv:2609.11758) shows that RAG degrades safety even with benign documents. Baseline safety guardrails don't transfer to RAG settings. This is a critical finding for enterprise RAG deployments.

---

## Sources
- BenchLM reasoning: https://benchlm.ai/reasoning
- FMRT: https://fmrt.ai/report
- HuggingFace trending: https://huggingface.co/models?sort=trending
