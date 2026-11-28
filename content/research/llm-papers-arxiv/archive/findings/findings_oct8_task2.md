# Task 2 Findings — Oct 8, 2026
# Community buzz (Reddit) + Reasoning developments, quantization advances, benchmarks

## Sources
- https://fmrt.ai/report (FMRT leaderboard)
- https://benchlm.ai/reasoning (BenchLM leaderboard)
- https://huggingface.co/models?sort=trending (HuggingFace trending)

---

### FMRT October 8: Claude Fable 5 Holds #1, Gemini 2.5 Pro Momentum Continues
- Claude Fable 5: #1 (BT 1706, 77%) — ▲1, holds lead
- GPT-5.6 Sol: #2 (BT 1630, 67%) — ▼2, cooling
- Grok 4.7: #3 (BT 1575, 72%) — ▲1
- Kimi K2.6: #4 (BT 1567, 61%) — ▲6 (strong momentum)
- MiniMax M3: #5 (BT 1566, 60%) — ▼1
- Kimi 3: #6 (BT 1564, 60%) — ▲7 (sustained momentum)
- Muse Spark 1.3: #7 (BT 1547, 59%) — ▲3
- GLM 5.2: #8 (BT 1529, 55%) — ▲7 (notable climb)
- DeepSeek V4 Flash: #9 (BT 1430, 40%) — ▲4
- Gemini 2.5 Pro: #10 (BT 1403, 36%) — ▲12 (career #16 → recent #4 — biggest mover)
- Qwen 3.5: #11 (BT 1394, 35%) — ▲5
- gpt-oss 120B: #12 (BT 1354, 32%) — ▲6
- Gemma 4 31B: #13 (BT 1310, 25%) — ▲6
- Key insight: Kimi ecosystem (K2.6, Kimi 3) sustained momentum; GLM 5.2 notable climb; GPT-5.6 Sol cooling for second consecutive day
- Source: https://fmrt.ai/report

### BenchLM October 8: Top 5 Unchanged, OpenAI Reasoning Family Dominant
- GPT-6 Astra: #1 (89.6) — ~7 points ahead of #2
- GPT-6.1 Sol: #2 (86.8) — OpenAI reasoning family holds top 2
- Claude Opus 5.5: #3 (82.4), Claude Fable 5.1: #4 (81.4) — Anthropic holds positions 3-4
- MiniMax M3: #5 (79.4) — tied with Muse Spark 1.3 (#6)
- Claude Sonnet 5.5: #7 (79.2)
- Qwen3.8-27B: #8 (78.7) — strong open-weight showing
- Mistral Large 4: #10 (78.2), GLM-5.3-Flash: #11 (77.3)
- Inkling: #13 (75.5) — Thinking Machines Lab
- Kimi K3: #19 (66.2) — FMRT #4 but BenchLM #19 — largest gap between rankings
- Key insight: Top 5 crystallized; FMRT vs BenchLM fracture persisting — Kimi K3 especially divergent
- Source: https://benchlm.ai/reasoning

### HuggingFace Trending October 8: New Entrants, Qwen GSQ Variants Growing
- JEV-27B-VL (autotrust): 1.53M downloads (NEW entrant, updated ~14h ago)
- Qwen3.8-27B: 6.84M downloads (steady, dominant)
- Ternary-Bonsai-2-27B-gguf: 4.35M downloads (was 4.27M yesterday — slight growth, normalizing after viral spike)
- ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF: 3.41M (quantized variant growing)
- LTX-2.5 (Lightricks): 1.69M — image-to-video stable
- DeepSeek-V4.1-Flash: 1.28M (was 1.26M yesterday — steady growth)
- LiquidAI/d1-3B: 5.37k downloads (NEW, updated ~20h ago)
- Cloudflare/clef: 27B, 10.9k downloads (NEW, updated 1 day ago)
- Key insight: Qwen GSQ quantized variants showing strong growth (3.41M); new entrants JEV-27B-VL and Cloudflare/clef gaining traction; Ternary plateauing/stabilizing
- Source: https://huggingface.co/models?sort=trending

---

## Community Notes

### Working Well:
- Kimi ecosystem (K2.6 ▲6, Kimi 3 ▲7 on FMRT) sustained momentum for another day
- GLM 5.2 climbing ▲7 on FMRT — notable independent momentum from Kimi
- AO-DA decoupling architecture provides structural (not just behavioral) immunity to context pollution in edge agents

### Problems:
- FMRT vs BenchLM fracture continuing — Gemini 2.5 Pro surges on FMRT (▲12) but not reflected in BenchLM; Kimi K3 particularly divergent (FMRT #4, BenchLM #19)
- Post-hallucination recovery remains rare even across frontier models (PHRBench)

### Interesting:
- EngramEdit enables knowledge editing via conditional memory — near-perfect success, extends to CoT reasoning
- Catastrophic forgetting localizes specifically to output embeddings of tokens the data never speaks — one-line Adam epsilon fix removes 40-68% of forgetting
- EASE evades AIGT detectors using only source-model entropy, without any detector access
- CoTrace: harness-model co-evolution with trajectory provenance matching — compact matched corpus beats large pooled corpus
