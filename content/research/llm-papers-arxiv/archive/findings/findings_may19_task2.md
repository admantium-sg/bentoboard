# Findings: Task 2 — Community & Benchmark Updates (May 19, 2026)

## Sources
- https://benchlm.ai/reasoning (Reasoning leaderboard, updated May 19, 2026)
- https://futureagi.com/blog/best-llms-may-2026 (Best LLMs May 2026)
- https://presenc.ai/research/local-llm-quantization-quality-benchmarks-2026 (Quantization benchmarks)

## Reasoning Benchmark Leaderboard Update (BenchLM, May 19, 2026)

**Top 5:**
1. Grok 4.1: 96.8% (provisional leader, +0.0% from prior)
2. Gemini 3.1 Pro: 96.3% (+0.0%)
3. GPT-5.4: 95.6% (+0.0%)
4. GPT-5.3 Codex: 93.5% (+0.0%)
5. Gemini 3 Pro Deep Think: 88.8% (+0.0%)

**Note:** All top models unchanged from prior snapshot — no new verified scores. 93 provisional-ranked models, 0 verified-ranked models. Benchmark staleness remains a known industry issue.

**Notable movement in ranked models:**
- GLM-5 Reasoning at 87.1% (#11) — first appearance in top 15 reasoning
- Qwen3.5 397B Reasoning at 81.4% (#15) — open-weight competitive on reasoning
- GPT-5 (high) at 76.7% (#17) — reasoning-tier models starting to separate from standard
- Claude Opus 4.5 drops to #24 at 69.8% — standard (non-reasoning) Claude versions significantly trail reasoning-optimized variants

## May 2026 LLM Landscape Summary

**Model layer quiet in early May** — no new frontier model releases in first week after April's deluge (9 major releases in 30 days). The model layer rested while infrastructure moved.

**Architecture moves:**
- Subquadratic launched May 5 with $29M seed to ship SubQ (subquadratic sparse attention, 12M token context). First subquadratic commercial LLM.
- DashAttention (from today's arXiv) also targets long-context efficiency via differentiable sparse hierarchical attention

**Distribution moves:**
- Apple iOS 27 (May 5): users can select third-party AI models — first crack in iPhone's 2-year OpenAI exclusivity

**Key pricing context (May 2026):**
- Western/Chinese pricing gap: 5–25x at equivalent benchmark performance
- DeepSeek V4-Pro: $0.87/M output vs GPT-5.5: $30/M output (34x cheaper)
- DeepSeek V4-Flash: $0.07/M output (post-promo standard) — lowest frontier-class API price

**Best picks per category (FutureAGI, May 2026):**
- Multi-file coding: Claude Opus 4.7 (87.6% SWE-bench Verified)
- Coding benchmark dominance: Qwen 3.6 Max-Preview (#1 on SIX coding/agent benchmarks)
- Agentic terminal work: GPT-5.5 (82.7% Terminal-Bench 2.0)
- Hallucination resistance: Grok 4.20 Multi-Agent Beta (78% AA-Omniscience)
- Multimodal + 1M context: Gemini 3.1 Pro ($12/M output, cheapest US frontier)
- Open-weight: Kimi K2 (61.1T MoE, leads AA Index for open-hosted)
- Open-weight long context: Llama 4 Scout (10M tokens)
- Smallest frontier footprint: Mistral Small 4 / Gemma 4 (6.5B–31B active)

## Quantization Update (Presenc.ai, May 2026)

**Production sweet spot confirmed: Q4 (4-bit)**
- Q4 perplexity degradation: 1–3% vs FP16
- AWQ > GPTQ by 0.5–1.0% due to activation-aware scaling
- Q3: 3–8% perplexity degradation, ~5% GSM8K drop (never for reasoning workloads)
- Q2: ~14% perplexity, ~14% GSM8K drop (severely degraded)

**Memory/Speed tradeoffs (Llama 70B):**
- FP16: ~140GB baseline
- Q4_K_M: ~40GB, 3.7x speedup
- Q3_K_M: ~30GB, 4.5x speedup (reasoning quality unacceptable per prior findings)

**Format comparison:**
- GGUF: best compatibility with llama.cpp, Ollama
- AWQ: best for vLLM deployment, activation-aware scaling advantage
- GPTQ: well-established, good quality/speed balance
- EXL2:EXL2 4.0bpw offers highest quality among 4-bit formats but less community tooling

**Key insight:** The distinction between reasoning-optimized models and standard models increasingly matters for quantization quality — reasoning models may tolerate lower bits better due to explicit chain-of-thought structure.

## Key Observations

1. **Model layer plateau:** No new frontier releases in first week of May — infrastructure and distribution layers are where the action is
2. **Architecture diversity returning:** Subquadratic attention (SubQ, DashAttention) signals the O(n²) transformer bottleneck being challenged — 12M token contexts become viable
3. **Benchmark staleness:** 93 provisional vs 0 verified-ranked models in reasoning — public benchmarks remain unreliable; production decisions shouldn't depend solely on leaderboard positions
4. **Open-weight reasoning:** Qwen3.5 397B Reasoning and GLM-5 Reasoning now competing in top 15 reasoning leaderboard — open-weight models closing the reasoning gap
5. **Multi-agent inference:** Grok 4.20 ships 4–16 parallel agents as the default inference path — first production frontier model making multi-agent debate architectural rather than optional
6. **Backdoor defense gap:** Orthogonal latent encoding in backdoor circuits bypasses defenses that inspect intermediate representations — new detection methods needed