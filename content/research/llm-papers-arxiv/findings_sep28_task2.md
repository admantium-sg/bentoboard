# Findings — Sep 28, 2026 | Task 2: Community Buzz + Reasoning/Benchmarks/Quantization

**Research focus:** Reasoning developments, quantization advances, benchmarks, Reddit discussions

---

## Weekly Top Papers (arxivtldr digest)

From this week's arxivtldr weekly digest:

1. **Agent-Editing World Model (AEWM)** — EditAct integrates world modeling with real execution, editing noisy reasoning directly. Already covered Sep 27.
2. **LEGO: Expert GraphRAG + Expert CoT for Legal** — 40.53% exact-match on LawExamQA_Civil. Already covered Sep 27.
3. **Control-Token Injection** — Suppresses chain-of-thought in tool-using LLMs, converts refusals to exfiltrations. Security critical. Already covered Sep 27.
4. **UK-PRBENCH** — Paragraph-level precedent retrieval for UK case law
5. **MultiVENT-Raw** — 120,000 videos for video retrieval and reasoning
6. **onPanda** — Token-level correction for alignment data annotation, 52% time reduction
7. **COMPASS** — Spatial transformers for multi-robot collectives (1024 robots)
8. **Fine-Tuning LLMs for Translation: Catastrophic Forgetting** — General forgetting mitigation preserves general capabilities but not MT-specific instruction following
9. **The Alignment Illusion in MLLMs** — Standard visual-text similarity metrics fail to detect corrupted visual streams (NeurIPS 2026)
10. **PriceBench** — LLM booking agents' hidden preferences for price, quality, brand

---

## Leaderboard Updates

### BenchLM Reasoning — Sep 28, 2026
**Source:** https://benchlm.ai/reasoning

GPT-6 Astra maintains #1 (89.5). Notable changes from Sep 25:
- Qwen3.8-27B moved up to **#6** (78.4) — strong open-weight showing
- Inkling (Thinking Machines Lab) enters at **#10** (75.2) — new entrant
- Grok 4.7 up to **#11** (74.8)
- Kimi K3 down to **#15** (65.5)

| Rank | Model | Creator | Score |
|------|-------|---------|-------|
| 1 | GPT-6 Astra | OpenAI | 89.5 |
| 2 | Claude Opus 5.5 | Anthropic | 82.4 |
| 3 | Claude Fable 5.1 | Anthropic | 81.4 |
| 4 | GPT-6 Sol | OpenAI | 79.6 |
| 5 | Muse Spark 1.3 | Meta | 79.1 |
| 6 | Qwen3.8-27B | Alibaba | 78.4 |
| 7 | Claude Opus 5 | Anthropic | 77.3 |

### FMRT — September 2026
**Source:** https://fmrt.ai/report

Claude Fable 5 leads (BT 1712, 77% win rate). Kimi 3 is standout mover — up 7 places on recent form (career #8, recent #1).

| Rank | Model | BT Rating | Win Rate | Recent Form |
|------|-------|-----------|----------|-------------|
| 1 | Claude Fable 5 | 1712 | 77% | — |
| 2 | GPT-5.6 Sol | 1642 | 68% | — |
| 3 | MiniMax M3 (open) | 1578 | 61% | ▲3 |
| 4 | Kimi 3 | 1570 | 60% | ▲7 |
| 5 | Kimi K2.6 (open) | 1569 | 60% | ▲4 |

**Open-weight leader:** MiniMax M3 at #3 (BT 1578), 134 points behind Claude Fable 5.

---

## HuggingFace Trending (Sep 28)

**Source:** https://huggingface.co/models?sort=trending

- Ternary-Bonsai-2-27B-gguf: **3.46M downloads** (viral, ternary models continuing momentum)
- Qwen3.8-27B: 6.84M downloads (normalizing)
- DeepSeek-V4.1-Flash: 669k downloads (stable)
- Qwen-Image-2.1: 58.7k (Comfy-Org fork at 4.35M)
- XiaomiMiMo-V2.6-Pro-RL: 76.5k downloads
- Xing4.0-29B-A4B: 45.8k downloads

**Ternary models still viral:** Ternary-Bonsai continues sustained high download rate across GGUF and MLX formats.

---

## Quantization/Efficiency Observations

From this week's papers:

1. **Stale-document poisoning paper** shows quantization/pruning concerns for RAG — temporal validity tracking becomes harder with compressed models
2. **MoSAR** presents learned attention geometry as alternative to fixed sparsity patterns — adaptive approach to efficiency
3. **KV cache reuse** evaluation methodology paper highlights accuracy loss measurement issues
4. **4-bit precision destroys repeated-token map stability** (0.0098 accuracy) per 2609.31181

---

## Reasoning Developments This Week

Key themes from recent papers:
1. **State editing over critique** — AEWM and LEGO both show editing internal reasoning structure outperforms external critique
2. **Temporal validity** — Stale-document poisoning reveals underexplored failure mode in RAG systems
3. **Strategic diversity in training** — Self-training benefit comes from approach variation, not just correctness
4. **Model-harness joint safety** — Control-token injection demonstrates safety is joint property, not model-only

---

## Sources
- https://fmrt.ai/report
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending
- https://arxivtldr.org/weekly
