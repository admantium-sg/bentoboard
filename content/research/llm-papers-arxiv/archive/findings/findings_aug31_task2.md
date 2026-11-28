# Task 2 Findings — 2026-08-31
# Community buzz + Reasoning developments, quantization advances, benchmarks

## Reasoning/Benchmark Developments

### NL2AGBench (2608.28481) — LLM Auto-Formalization for AlphaGeometry
cs.CL, cs.AI | Ziliang Zong
- AlphaGeometry requires formal DSL input; manual conversion from natural language is major usability bottleneck
- NL2AGBench: evaluates LLM translation from English geometry to AlphaGeometry formal representations
- Execution-based verification using AlphaGeometry engine — not just textual similarity
- Key finding: substantial gap between closed-source (80%+ executable translation) and open-source models
- Even largest open-source models struggle to preserve geometric constraints and produce valid formalizations
- Error taxonomy: syntax vs logic errors; mitigation via few-shot prompting, fine-tuning, human-guided hinting
- Key insight: neuro-symbolic systems need better auto-formalization — closed-source models significantly ahead on this task
- Paper: https://arxiv.org/abs/2608.28481

### KV Cache Eviction Probabilistic Formalization (2608.28293)
cs.CL, cs.AI | Renato Geh
- KV cache eviction: evict entries for higher throughput at negligible quality cost — but selection heuristics informal
- Formal analysis: KV eviction is computationally hard; framing it probabilistically reduces to expectation estimation
- Key finding: existing methods are zero-variance biased estimators; can be adapted with decode-time correction
- Probabilistic version with decode-time correction more robust across tasks at same compression budget
- Key insight: decode-time correction for evicted entries was previously ignored — probabilistic framing enables it
- Paper: https://arxiv.org/abs/2608.28293

### FinExam-10K (2608.28155) — Financial Reasoning with Retrieval
cs.CL
- Professional financial exams (CFA, FRM) require domain knowledge + calculation + judgment
- 10,198 questions spanning CFA Levels I-III and FRM Parts I-II; 5,088 held-out for leaderboard
- Best accuracy: 85.29% overall; Hard band best: 34.68% (Full-Coverage) / 54.57% (Context-Complete)
- All 17 models share 47 context-complete failures — common blind spots
- Function-RAG / FunctionGraph-RAG rescue hundreds of errors but also overturn correct answers
- Trained gate on public data decides when to invoke FunctionGraph-RAG: +0.37pp improvement (p=.0446)
- Key insight: selective retrieval gating beats unconditional retrieval on held-out data — retrieval not always helpful
- Paper: https://arxiv.org/abs/2608.28155

### Nested Byte-Level Vocabularies (2608.28151) — Pre-Registered Negative Result
cs.CL, cs.AI, cs.IR | Pre-registered study
- Byte-level BPE prefix nesting allows one model to operate at multiple vocabulary sizes
- Slicing is numerically exact: removes 66% of deployed weights without changing latency
- BUT: shared model trails fixed-cap specialist by 3.64% bits/byte at 32k (1% margin)
- Output restriction costs +0.47% to +1.19%; control token effect is near-zero (+0.07% to +0.13%)
- Multi-cap training improves robustness under typographical noise (12.5-15.4 points less degradation)
- Key insight: nested vocabularies are cheap to deploy but expensive to share — per-cap penalty proportional to training share
- Paper: https://arxiv.org/abs/2608.28151

## Community Observations

### HuggingFace Trending (as of Aug 31, 2026)
- Qwen3.8-Flash-Next (180B) still dominant at 159K downloads, updated 4 days ago
- GLM-5.3 (753B) surging: 66.2K downloads, updated 3 hours ago
- GLM-5.3-Flash (321B): 379K downloads, updated 5 hours ago — fastest growing
- DeepSeek-V4-Flash-Vision-Exp (305B): updated 4 hours ago — vision model gaining traction
- Qwen3.8-Flash-Next-FP8: 85K downloads, updated 8 hours ago — FP8 variant popular
- Thomson-1.0-Small (Reuters domain): 1.05K downloads — domain-specific stable
- Qwen3.8 GGUF ecosystem continues strong with multiple uncensored/abliterated variants

### BenchLM Reasoning (as of Aug 28, 2026)
- Qwen3.8 Max (95.5) maintains top reasoning position
- Claude Mythos 5 adds strong GraphWalks long-context result
- GPT-5.4 strong #2 with edge on LongBench v2
- Claude Opus 4.6 holds #3, excelling on long-context tasks
- Explicit CoT models still lead by large margins over standard models
- ARC-AGI-2 still early — coverage uneven across models
- Key insight: reasoning benchmark performance gap between CoT and standard models remains large — no convergence yet
