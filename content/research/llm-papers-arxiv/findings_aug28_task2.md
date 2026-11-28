# Findings: Task 2 — Aug 28, 2026
# Community buzz (Reddit) + Reasoning developments, quantization advances, benchmarks

## Sources
- https://benchlm.ai/reasoning
- https://huggingface.co/models?sort=trending
- https://arxiv.org/abs/2608.27351 (ES for reasoning)
- https://arxiv.org/abs/2608.27420 (Weak-model guidance)

---

## BenchLM Reasoning Leaderboard (Aug 28, 2026)

Top reasoning model: Qwen3.8 Max at 95.5 (unchanged)

Notable changes:
- Claude Mythos 5: adds strong long-context GraphWalks result
- GPT-5.4: strong #2, notable edge on LongBench v2
- Claude Opus 4.6: holds #3, excels on long-context reasoning tasks

Weighted reasoning score blends:
- Long-context comprehension (LongBench v2, MRCRv2) - 38% + 31%
- Multi-step inference (MuSR) - display only
- Novel problem solving (ARC-AGI-2) - 31%

Key insight: Models with explicit chain-of-thought tend to outperform standard models by large margins, but at cost of higher latency and token usage.

Source: https://benchlm.ai/reasoning

---

## HuggingFace Trending Models (Aug 28)

Continued Qwen3.8 ecosystem dominance:
- Qwen3.8-Flash-Next (180B): 4.81k downloads, updated 1 day ago
- Qwen3.8-27B: 3.46M downloads, updated 14 days ago
- Qwen3.8-Flash-Next-GGUF (177B): 4.35k downloads, updated ~13 hours ago

New entrants:
- GLM-5.3 (753B): Updated 41 minutes ago - gaining traction
- GLM-5.3-Flash-GGUF: Updated ~1 hour ago, 238 downloads
- Thomson-1.0-Small (35B): Updated ~4 hours ago, 349 downloads - Reuters domain model

GGUF ecosystem activity:
- Multiple Qwen3.8 uncensored/abliterated variants maintaining strong downloads
- OrcaRouter Qwen3.8-27B-Uncensored-FP8: 274k downloads
- Huihui-Qwen3.8-27B-abliterated-GGUF: 1.36M downloads

Source: https://huggingface.co/models?sort=trending

---

## Reasoning Developments Summary

### ES vs GRPO Paradigm Discussion
Evolution Strategies emerging as distinct from GRPO:
- ES provides broader reasoning coverage, better Pass@K performance
- GRPO stronger on Pass@1 but suffers entropy collapse
- Sequential GRPO-ES training shows promise
- Functional sparsity: large parameter movement ≠ catastrophic forgetting

### Weak-Model Guidance
Using smaller model prefixes to guide larger models' exploration in RLVR:
- Mitigates entropy collapse without complex prompting
- Performance gains increase at larger K values
- Simpler than test-time scaling approaches

### Quantization/GGUF
- Qwen3.8 GGUF ecosystem continues rapid variant development
- Uncensored/abliterated variants seeing high community uptake
- GLM family joining GGUF ecosystem (GLM-5.3-Flash-GGUF)

---

## Key Papers This Week (TLDR candidates)
1. CritICL (2608.27455) — Weak-to-strong generalization via failure mode guidance
2. Weak-Model Guidance RLVR (2608.27420) — Entropy collapse mitigation via weak prefixes
3. SCIT (2608.27265) — Latent CoT cache mechanism discovery
4. ContraTalk (2608.27176) — Audio-grounded reasoning failure modes
5. Evolution Strategies for Reasoning (2608.27351) — ES broader coverage than GRPO
6. WikiSkill (2608.27454) — Persistent knowledge for agent skill evolution
7. RATIO (2608.27394) — Scientific inspiration retrieval
8. CorporateBench (2608.27391) — Enterprise-scale Q&A benchmark
9. ACE Lens (2608.27260) — What makes good agentic data
10. D2C-Routing (2608.27380) — Mixed-origin AI-generated text detection
