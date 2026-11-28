# Findings: Task 2 — Community & Benchmarks (Sep 1, 2026)

## Sources: BenchLM.ai, HuggingFace trending, arXiv reasoning papers

---

## BenchLM Reasoning Leaderboard — September 2026

### Top Reasoning Models
- **#1: Qwen3.8 Max** — 95.5 weighted reasoning score
- **#2: Gemini 3.5 Flash** — 62.6
- Claude Mythos 5 adds strong long-context GraphWalks result
- GPT-5.4 strong #2 with notable edge on LongBench v2
- Claude Opus 4.6 holds #3, excels on long-context reasoning

### Benchmarks Tracked (11 total)
- MuSR — complex multi-step reasoning problems
- BBH — 23 challenging BIG-Bench tasks
- LisanBench — word-chain reasoning (planning, recall, constraint following)
- Pencil Puzzle Bench — multi-step verifiable reasoning
- LongBench v2 (38% weight) — long-context reasoning + retrieval
- MRCRv2 (31% weight) — multi-round coreference + retrieval
- Graphwalks BFS/Parents 128K — graph traversal/reasoning
- ARC-AGI-2 (31% weight) — abstract reasoning

### Key Observations
- Reasoning models with explicit CoT outperform standard models by large margins, at cost of higher latency/token usage
- ARC-AGI-2 still early — uneven coverage, some models lack scores
- MuSR underrepresented — few providers run it
- Qwen3.8 Max's dominance suggests scaling + reasoning optimization continue to compound

**Source:** https://benchlm.ai/reasoning

---

## HuggingFace Trending Models (Sep 1, 2026)

### Text Generation / Multimodal Trending
1. **Qwen3.8-Flash-Next** (180B) — 208k downloads, updated 5 days ago — dominant
2. **GLM-5.3-Flash** (321B) — 441k downloads, updated 1 day ago — fastest growing
3. **GLM-5.3** (753B) — 94.4k downloads, updated 1 day ago — surging
4. **Qwen3.8-27B** (28B) — 4.96M downloads — massive base, still very popular
5. **DeepSeek-V4-Flash-Vision-Exp** (305B) — 17.9k downloads, updated 7h ago

### GGUF / Quantized Models
- unsloth/Qwen3.8-Flash-Next-GGUF — 431k downloads, updated 7h
- unsloth/GLM-5.3-Flash-GGUF — 63.7k downloads
- huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF — 1.87M downloads, updated 1 day ago
- orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF — 64.3k, updated 1 day ago

### Key Observations
- GLM-5.3 family surging — 441k downloads in ~1 day for Flash variant
- Qwen3.8-Flash-Next still dominant in absolute downloads (208k)
- GGUF/quantized variants very active — community heavily using quantized models
- Uncensored variants from orcarouter gaining traction
- Image/video models (LTX-2.5, MiniMax-H3) also trending

**Source:** https://huggingface.co/models?sort=trending

---

## Reasoning & Self-Evolution Papers from Today

### ASPIRE: Self-Evolution from Vague Goals (2608.31111)
- Current agents: routinely complete training/harness-editing loops, but weight-level gains remain sparse/unstable
- Strongest evolved harness still below engineered Qwen-Agent reference
- Agents often train on mismatched data and trust narrow self-evaluations
- Key bottleneck: vague-goal interpretation is hard; local gains fail to transfer to hidden evaluation

### S³Gym: Self-Testing → Self-Judging → Self-Improvement (2608.31100)
- Self-improvement is neither automatic nor uniform
- Context-level experience helps some model-game pairs
- Summaries benefit when experience compresses into reusable rules; underperform raw history for precise state-contingent info
- Parameter training: substantial gains on some tasks, but unstable + severe negative transfer on others
- Core insight: recognizing successful actions is insufficient — must transform feedback into executable/transferable policies

### PaperGym: Rubric-Centered Research Planning (2608.31119)
- Qwen3-8B trained on PaperGym reaches 73.48 ResearchQA — above far larger Kimi K2.6
- 58.1% win rate in three-way comparisons vs 28.2% for existing rubric-based approach
- Criterion leakage only 3.7% (vs 11.9-34.1% in existing datasets)

---

## Quantization Observations
- No major new quantization papers on arXiv today
- GGUF downloads remain very high — community demand for quantized models continues
- unsloth and orcarouter variants seeing rapid updates (hours-old GGUF conversions for newest models)
- Indicates quantization pipeline velocity matching model release velocity

---

## Key Takeaways
1. **Qwen3.8 Max dominates reasoning** (95.5) but reasoning is highly competitive with Claude/GPT close
2. **GLM-5.3 family surge** — 753B and 321B variants both trending, updated daily
3. **Self-evolution benchmarks maturing** — ASPIRE and S³Gym show agents can explore but can't reliably improve
4. **Query design > model scaling** in IE: FeedQ shows 18.6 F1 improvement from question design alone
5. **GGUF ecosystem thriving** — new models get quantized within hours, high download volumes
