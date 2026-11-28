# Findings: Task 2 - Community Buzz + Reasoning/Benchmarks (Aug 30, 2026)

## HuggingFace Trending Models

### Qwen3.8 Ecosystem Dominates
- **Qwen3.8-Flash-Next** (180B): 122K downloads, updated 3 days ago — still dominant
- **Qwen3.8-27B**: 4.51M downloads — massive GGUF ecosystem
- **GLM-5.3** (753B): 50.1K downloads, updated 1 day ago — growing fast
- **GLM-5.3-Flash** (321B): 347K downloads — fast growing
- Qwen3.8 GGUF ecosystem stable with multiple uncensored/abliterated variants

### New/Rising Models
- **Thomson-1.0-Small** (Reuters domain): 1.01K downloads, updated 2 days ago — domain-specific emerging
- **LTX-2.5** (Image-to-Video): 1.14M downloads, updated ~4 hours ago — very fresh
- **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**: 1.99M downloads, updated 1 day ago

### GGUF Ecosystem Highlights
- **unsloth/Qwen3.8-27B-GGUF**: 8.84M downloads — largest GGUF model
- **unsloth/GLM-5.3-Flash-GGUF**: 45.9K downloads, updated 1 day ago — fresh GGUF entry
- Multiple Qwen3.8 abliterated variants sustained: 1.62M for huihui-ai variant

## BenchLM Reasoning Leaderboard (Aug 29, 2026)

### Top Reasoning Models
1. **Qwen3.8 Max** — 95.5 (weighted reasoning score)
2. **Gemini 3.5 Flash** — 62.6
3. **Claude Mythos 5** — strong long-context GraphWalks result
4. **GPT-5.4** — strong #2 with edge on LongBench v2
5. **Claude Opus 4.6** — holds #3, excels on long-context

### Key Observations
- Explicit CoT models still lead benchmarks by large margins
- Long-context reasoning (38% weight): LongBench v2
- Multi-round coreference (31% weight): MRCRv2
- Abstract reasoning (31% weight): ARC-AGI-2
- Tradeoff: reasoning models higher latency and token usage

### What's Changed
- Claude Mythos 5 adds strong GraphWalks long-context result
- GPT-5.4 notable edge on LongBench v2
- Claude Opus 4.6 holds strong long-context position

## Community Pulse

### Saturday/Sunday Context
- Weekend research period — fewer new papers (arXiv doesn't publish on weekends)
- Today's arXiv TLDR weekly covers papers through Aug 28
- No major new releases or announcements expected until Monday

### Key Themes from This Week's Research
1. **Safety alignment** — three papers (SDP, CLEAR, NeuronGuard) addressing RIM and jailbreak attacks from different angles
2. **Reasoning post-training** — ES vs GRPO paradigm clarification, sequential training strategies
3. **Agent reliability** — Trace Integrity highlights answer ≠ trace validity gap
4. **Resource-aware agents** — PeakBench addresses tool invocation under constraints

### Sources
- https://arxivtldr.org/weekly
- https://huggingface.co/models?sort=trending
- https://benchlm.ai/reasoning
