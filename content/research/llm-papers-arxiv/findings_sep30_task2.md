# Research Findings — Task 2
# Topic: llm-papers-arxiv
# Date: 2026-09-30
# Focus: Community buzz + Reasoning developments, quantization advances, benchmarks

## Reasoning Developments

### LongHarness Bench: Efficiency as Critical Dimension (2609.38137)
- Same model shows markedly different efficiency under different harnesses
- Strategic processing (deciding what to attend to) vs exhaustive processing (attending to everything) produces different accuracy-cost tradeoffs
- Best model-harness: 68% macro-average accuracy — still room for improvement
- Benchmark tests retrieval strategies (lexical, semantic) + adaptive reasoning
- **Source:** https://arxiv.org/abs/2609.38137

### MERA: Missing-Evidence Retrieval Augmentation (2609.37443)
- Evidence for answers may be scattered across distant turns while question omits clues to locate it
- Trained 0.6B planner achieves 77.40% on LoCoMo, 71.29% on LongMemEval-S (exceeds 30B planner without retrieval-grounded training)
- Later retrieval rounds increase cumulative evidence recall from 55.5% to 80.5%
- **Source:** https://arxiv.org/abs/2609.37443

### Regime Boundary Alignment for Abstention (2609.37491)
- RAG models answer 100% even on missing evidence — training signal assigns no target to unsupported contexts
- RBA trains on both sides of the support boundary
- Reduces unsupported answering from 100% to below 1% while also improving supported accuracy
- **Source:** https://arxiv.org/abs/2609.37491

## Quantization Advances

### STEPQuant: 5x Recurrent-State Compression (2609.38169)
- Delta-rule recurrent state quantization: spatial-temporal post-training quantization
- Allocates precision based on error magnitude and memory lifetime
- Jointly fits key-row and value-column scales
- Achieves 68.7% total serving memory reduction
- 6-bit quantization matches FP32 accuracy for Qwen3.8-27B and Kimi-Linear-48B
- **Source:** https://arxiv.org/abs/2609.38169

### Key Insight: Linear Attention Efficiency
- KV cache replaced with fixed-size recurrent states — memory bottleneck shifted
- Uniform quantization fails; spatial-temporal awareness required
- Linear attention models gaining traction for long-context efficiency
- **Source:** https://arxiv.org/abs/2609.38169

## Benchmarks & Leaderboards

### FMRT (Frontier Model Reasoning Tournament) — Sep 30, 2026
Claude Fable 5 leads (BT 1712, 78% win rate) across 732 debated motions

| Rank | Model | BT Rating | Win Rate | Recent Form |
|------|-------|-----------|----------|-------------|
| 1 | Claude Fable 5 | 1712 | 78% | — |
| 2 | GPT-5.6 Sol | 1642 | 68% | — |
| 3 | MiniMax M3 (open) | 1578 | 61% | ▲3 |
| 4 | Kimi 3 | 1570 | 60% | ▲7 |
| 5 | Kimi K2.6 (open) | 1569 | 61% | ▲4 |

- Kimi 3 standout riser: up 7 on recent form (career #8, recent #1)
- Open-weight leader: MiniMax M3 (#7 overall, BT 1578)
- Proprietary lead remains meaningful: 134 points between Claude Fable 5 and MiniMax M3

**Sources:** https://fmrt.ai/report

### BenchLM Reasoning — Sep 29, 2026
GPT-6 Astra leads at 89.6 weighted reasoning score

| Rank | Model | Creator | Score |
|------|-------|---------|-------|
| 1 | GPT-6 Astra | OpenAI | 89.6 |
| 2 | Claude Opus 5.5 | Anthropic | 82.4 |
| 3 | Claude Fable 5.1 | Anthropic | 81.4 |
| 4 | GPT-6 Sol | OpenAI | 79.6 |
| 5 | MiniMax M3 | MiniMax | 79.4 |

- Anthropic holds top 3 positions (2, 3, 7)
- Open-weight best: MiniMax M3 at #5
- Benchmarks: MuSR, BBH, LisanBench, Pencil Puzzle Bench, LongBench v2, MRCRv2, ARC-AGI-2

**Sources:** https://benchlm.ai/reasoning

## HuggingFace Trending — Sep 30

| Model | Downloads | Notes |
|-------|----------|-------|
| Qwen3.8-27B | 7.04M | Normalizing from peak |
| Comfy-Org/Qwen-Image-2.1 | 5.03M | Text-to-image dominant |
| Ternary-Bonsai-2-27B-gguf | 3.68M | Viral ternary going mainstream |
| DeepSeek-V4.1-Flash | 721k | Stable |
| XiaomiMiMo-V2.6-Pro-RL | 81k | Sustained momentum |
| TeleOCR (XingChen-AGI) | 30.4k | New OCR entrant |

**Sources:** https://huggingface.co/models?sort=trending

## Summary of Key Developments

1. **Quantization**: STEPQuant achieves 5x compression on linear attention recurrent states by accounting for temporal error persistence and spatial error variation
2. **Efficiency**: SYNTH dataset shows synthetic data can replace 10-140x more web data — major training efficiency breakthrough
3. **Long-context**: SCSP (semantic compression) and MERA (missing evidence retrieval) both improve long-context handling without full processing
4. **Abstention**: RBA and RINSE both tackle the problem of models answering when they shouldn't — different approaches to evidence sufficiency
5. **Reasoning**: Kimi 3 surging in recent form on FMRT; GPT-6 Astra dominates BenchLM reasoning
