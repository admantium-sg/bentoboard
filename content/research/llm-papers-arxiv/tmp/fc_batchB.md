# Fact-Check Batch B — 2026-10-22 section

Working file: `/home/devcon/.openclaw/shared-workspace/research/llm-papers-arxiv/cumulative_findings.md` (read-only; not modified)

Method: Source 1 = arXiv `/abs/` page (title, dateline, submission history, full abstract, parsed from HTML).
Source 2 = `arxiv.deeppaper.ai/papers/<id>v1` (independent domain, mirrors title + abstract) for all 9; additionally `huggingface.co/papers/<id>` for 2610.29545 / 2610.29458 / 2610.29927, and a DuckDuckGo web_search for 2610.29545 and 2610.29662 which surfaced arxiv.org + deeppaper + HF + modelscope entries with matching abstracts.
All 9 arXiv pages returned HTTP 200, all `[Submitted on 21 Oct 2026]`, all single-version `v1`. Doc date "Oct 21, 2026" is correct for every paper.

---

### 2610.29545 — PACE: Periodic and Channel-Aligned Encoding of Four-Bit Recurrent States
- **Doc title:** PACE: Periodic and Channel-Aligned Encoding of Four-Bit Recurrent States / **Actual title:** PACE: Periodic and Channel-Aligned Encoding of Four-Bit Recurrent States → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 10:31:52 UTC → MATCH
- Claim bullets checked:
  - "state precision directly controls sequence concurrency per accelerator" → CONFIRMED ("Storing the state at lower precision therefore lets more sequences share an accelerator")
  - "Prior quantizers round every token and report 4 bits lose accuracy" → CONFIRMED
  - "PACE is post-hoc" → CONFIRMED
  - "Round less often (once every few generated tokens) + small buffer for intervening tokens" → CONFIRMED ("rounds the state only once every few generated tokens … keeps the tokens generated in between in a small buffer")
  - "Share scales per column — large gated-delta state entries gather in columns" → CONFIRMED
  - "Heads retaining rounding error longest kept at eight bits" → CONFIRMED
  - "Four hybrid models (4B–35B)" → CONFIRMED ("On four hybrid models from 4B to 35B parameters")
  - "mixed 4/8-bit PACE competitive with 8-bit DAMP at ~2/3 the memory" → **PARTIALLY WRONG (overstated)**: abstract limits this to "the **three larger models**", not all four. Correct wording: competitive with 8-bit DAMP *on the three larger models* at about two-thirds of its memory.
  - "all-4-bit PACE beats Q-Mamba at equal memory" → CONFIRMED
  - "periodic rounding preserves the buffer's decoding speedup" → CONFIRMED
- **Overall:** PARTIAL (one over-generalization in the DAMP claim; all numbers otherwise correct)
- **Source 1:** https://arxiv.org/abs/2610.29545 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29545v1 (+ https://huggingface.co/papers/2610.29545)

---

### 2610.29378 — Right On Q: Recovering Reasoning under Quantization via Self-Generated Trajectories
- **Doc title:** Right On Q: Recovering Reasoning under Quantization via Self-Generated Trajectories / **Actual title:** Right On Q: Recovering Reasoning under Quantization via Self-Generated Trajectories → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 08:03:24 UTC → MATCH
- Claim bullets checked:
  - "Standard QAT supervises the quantized student on fixed response sequences" → CONFIRMED
  - "training prefixes ≠ generation prefixes, and the divergence grows as responses lengthen" → CONFIRMED ("this trajectory divergence grows as responses lengthen")
  - "low-bit models often fail to terminate within the token budget the FP model needs" → CONFIRMED
  - "Fix: train on self-generated trajectories so supervision matches the student's own decoding distribution" → CONFIRMED (method = OnQ: on-policy distillation + candidate-wise Dynamic KL)
  - "Companion to ReQAT (below) and PACE" → editorial cross-reference, not a source claim (not verifiable against this paper; ReQAT entry is a separate non-arXiv source in the doc)
  - No quantitative claims in the doc bullets. (For reference, the abstract's own numbers — Qwen3-1.7B/4B/8B, 2- and 3-bit, nine-benchmark average, +10.26 points on Qwen3-8B at 2 bits — are present in the abstract but absent from the doc; omission, not error.)
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.29378 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29378v1

---

### 2610.29662 — SPARE: Sparsity Allocation via Routing Entropy for Efficient MoEs
- **Doc title:** SPARE: Sparsity Allocation via Routing Entropy for Efficient MoEs / **Actual title:** SPARE: Sparsity Allocation via Routing Entropy for Efficient MoEs → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 12:40:00 UTC → MATCH
- Claim bullets checked:
  - "Existing expert pruning picks which experts and prunes every layer equally" → CONFIRMED
  - "training-free and selector-agnostic" → CONFIRMED
  - "decides how many to remove per layer from routing entropy (entropy of normalized Top-K gate weights on calibration data)" → CONFIRMED (verbatim)
  - "Formalized by a perturbation bound under random pruning" → CONFIRMED
  - "diffuse-routing layers should be pruned harder" → CONFIRMED
  - "Beats uniform allocation on Mixtral, Qwen3, DeepSeek, especially at high pruning ratios" → CONFIRMED
  - "At 50% expert pruning: Qwen3-30B-A3B eight-task average 57.2% → 63.8%" → CONFIRMED (exact)
  - "DeepSeek-R1 math/code/science average 80.1 → 82.8" → CONFIRMED (exact)
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.29662 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29662v1 (+ modelscope.cn/papers/2610.29662, arxivsignals.io/papers/2610.29662)

---

### 2610.29498 — A Strong MoE Is All You Need for Process Supervision
- **Doc title:** A Strong MoE Is All You Need for Process Supervision / **Actual title:** A Strong MoE Is All You Need for Process Supervision → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 09:51:01 UTC → MATCH
- Claim bullets checked:
  - "Mines expert routing statistics as an intrinsic process-confidence signal" → CONFIRMED
  - "competitive with conventional output-logit confidence" → CONFIRMED
  - "no human annotation, rollout estimation or auxiliary verification needed" → CONFIRMED (abstract lists these as the alternatives it avoids)
  - "Routing confidence = overall routing mass + head routing mass + within-step routing variation" → CONFIRMED (all three components, verbatim)
  - "RoCo-Rethink: find the least-confident reasoning step, selectively regenerate the subsequent trajectory" → CONFIRMED
  - "RoCo-PRM: a strong MoE auto-annotates trajectories with routing-derived step scores, distilled into a standalone PRM that transfers across model architectures and tasks" → CONFIRMED
  - No numeric claims.
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.29498 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29498v1

---

### 2610.29527 — RCSD: Reinforcement and Continual Learning for Domain-Specific Speculative Decoding
- **Doc title:** RCSD: Reinforcement and Continual Learning for Domain-Specific Speculative Decoding / **Actual title:** same → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 10:16:23 UTC → MATCH
- Claim bullets checked:
  - "Conventional draft training via soft-label distillation forces the draft to mimic the target's full distribution, including high-entropy regions that degrade acceptance rates" → CONFIRMED
  - "RCSD optimizes the system-level objective (maximize acceptance length)" → CONFIRMED
  - "harvesting naturally occurring accepted/rejected sequences during speculative inference as implicit preference pairs" → CONFIRMED
  - "masked loss avoiding penalties on target-aligned tokens" → CONFIRMED
  - "+35% average acceptance length over HASS" → CONFIRMED (exact)
  - "1.35× faster end-to-end on practical workloads" → CONFIRMED (exact)
  - "no quality loss" → CONFIRMED ("without compromising generation quality")
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.29527 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29527v1

---

### 2610.29458 — Harness Scaling: Harness Diversity as a Scaling Dimension for Agentic RL
- **Doc title:** Harness Scaling: Harness Diversity as a Scaling Dimension for Agentic RL / **Actual title:** Harness Scaling for Generalizable Agentic Reinforcement Learning → **MISMATCH** (doc title is a paraphrase, not the paper's title; the paper's actual title contains no "Harness Diversity" subtitle)
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 09:15:50 UTC → MATCH
- Claim bullets checked:
  - "Existing agentic RL trains through a single fixed harness → specialization, poor transfer" → CONFIRMED
  - "Constructs a factorized harness space" → CONFIRMED
  - "selects a compact training subset with balanced factorial coverage" → CONFIRMED
  - "organizes cross-harness training to combine global coverage with controlled per-task variation" → CONFIRMED
  - "Consistent gains in generalization to unseen white-box configurations across benchmarks, model scales and RL algorithms" → CONFIRMED
  - "models trained through structured white-box variation transfer to unseen external black-box harnesses, beating models trained on a single complex black-box harness" → CONFIRMED
  - No numeric claims.
- **Overall:** NEEDS CORRECTION (title only — replace with "Harness Scaling for Generalizable Agentic Reinforcement Learning"; all substantive claims are accurate)
- **Source 1:** https://arxiv.org/abs/2610.29458 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29458v1 (+ https://huggingface.co/papers/2610.29458)

---

### 2610.29823 — MemoryTax: The Bitter Lesson of Agent Memory
- **Doc title:** MemoryTax: The Bitter Lesson of Agent Memory / **Actual title:** MemoryTax: The Bitter Lesson of Agent Memory → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 14:46:27 UTC → MATCH
- Claim bullets checked:
  - "one LoCoMo conversation (419 turns, 152 questions)" → CONFIRMED (exact)
  - "4 memory methods (full context, BM25, Mem0, Zep)" → CONFIRMED
  - "3 coding agents (Pi, Codex, Claude Code)" → CONFIRMED
  - "3 models" → CONFIRMED (GPT-4o-mini, GPT-6 Luna, Claude Opus 5.5)
  - "Mem0 beats full context only with GPT-4o-mini" → CONFIRMED
  - "Mem0's build alone costs more than a full-context rollout" → CONFIRMED
  - "Memory has a ceiling set by the writer: a stronger reader does not recover what a weaker writer left out" → CONFIRMED
  - "Cost/accuracy frontier with Claude Opus 5.5: Pi tops it, 99% for under half the cost of full context" → CONFIRMED (exact)
  - "its one miss was a wrong answer key" → CONFIRMED
  - "part of the lead comes from photo captions only agents could read" → CONFIRMED
  - "on the 88 questions without photo evidence, Pi and full context differ by one answer" → CONFIRMED (exact)
  - Note: the doc omits the abstract's own scoping caveat ("This is a short empirical study, with one conversation and one run per cell") — an omission, not an error.
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.29823 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29823v1

---

### 2610.29927 — Your Benchmark Is an Empirical Measure Over Difficulty (BenchFill)
- **Doc title:** Your Benchmark Is an Empirical Measure Over Difficulty (BenchFill) / **Actual title:** Your Benchmark Is an Empirical Measure Over Difficulty → **MINOR MISMATCH** (doc appends "(BenchFill)", which is the method name, not part of the title)
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 16:02:37 UTC → MATCH
- Claim bullets checked:
  - "Reframes a benchmark as inducing an empirical measure over difficulty" → CONFIRMED
  - "two formally characterized failure modes: measure mismatch (difficulty distribution ≠ intended) and coverage gaps (uncovered difficulty regions hide localized progress)" → CONFIRMED
  - "Two diagnostic metrics with theoretical guarantees" → CONFIRMED
  - "analysis of 25 popular benchmarks across 7 domains using carefully estimated item difficulties" → CONFIRMED (exact)
  - "Many benchmarks implicitly overweight certain difficulty regions → leaderboard conclusions need caution" → CONFIRMED
  - "others leave substantial difficulty-axis coverage gaps, limiting their ability to monitor improvement" → CONFIRMED
  - "BenchFill: difficulty-targeted item rewriting that reduces local coverage gaps" → CONFIRMED
- **Overall:** VERIFIED (minor title annotation "(BenchFill)" should be dropped or moved into the body)
- **Source 1:** https://arxiv.org/abs/2610.29927 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29927v1 (+ https://huggingface.co/papers/2610.29927)

---

### 2610.29933 — ThreadRAG: Graph Topology Meets Energy-Driven Pathfinding
- **Doc title:** ThreadRAG: Graph Topology Meets Energy-Driven Pathfinding / **Actual title:** Graph Topology Meets Energy-Driven Pathfinding: Preserving Contextual Consistency in Retrieval-Augmented Generation → **MISMATCH** (doc uses the method name "ThreadRAG" as a title prefix and drops the subtitle; the leading title clause and subtitle are misrepresented)
- **Doc date:** Oct 21, 2026 / **Actual date:** Submitted 21 Oct 2026, v1 Wed 21 Oct 2026 16:05:44 UTC → MATCH
- Claim bullets checked:
  - "severe semantic loss (distilling text into discrete symbols strips narrative coherence)" → CONFIRMED
  - "modality mismatch (fragmented graphs vs continuous pretraining text; graph-to-prose rewriting adds generative noise)" → CONFIRMED
  - "Semantic Topology Mapper builds context-intact Semantic Nodes and a Semantic Topology Graph (narrative + semantic + lexical edges)" → CONFIRMED
  - "Energy-Driven Pathfinding uses energy diffusion to find query-relevant subgraphs, then deterministically linearizes them into coherent evidence paths" → CONFIRMED
  - "+14.4% EM over text-centric methods on HotpotQA" → CONFIRMED (exact)
  - "+5.8% EM over the best baseline on 2WikiMultihop" → CONFIRMED (exact)
  - "at 23.3% of the strongest baseline's token cost" → CONFIRMED (exact)
- **Overall:** NEEDS CORRECTION (title only — use "Graph Topology Meets Energy-Driven Pathfinding: Preserving Contextual Consistency in Retrieval-Augmented Generation", optionally prefixed "ThreadRAG"; all numbers and mechanism claims are accurate)
- **Source 1:** https://arxiv.org/abs/2610.29933 — **Source 2:** https://arxiv.deeppaper.ai/papers/2610.29933v1

---

## Summary

| arXiv ID | Title match | Numeric claims | Overall |
|---|---|---|---|
| 2610.29545 | MATCH | 1 overstated (DAMP: "three larger models", not all four) | PARTIAL |
| 2610.29378 | MATCH | no numeric claims | VERIFIED |
| 2610.29662 | MATCH | 57.2→63.8, 80.1→82.8 confirmed | VERIFIED |
| 2610.29498 | MATCH | no numeric claims | VERIFIED |
| 2610.29527 | MATCH | +35%, 1.35× confirmed | VERIFIED |
| 2610.29458 | MISMATCH | no numeric claims | NEEDS CORRECTION (title) |
| 2610.29823 | MATCH | 419/152, 99%, 88 confirmed | VERIFIED |
| 2610.29927 | minor (appended "(BenchFill)") | 25 benchmarks / 7 domains confirmed | VERIFIED |
| 2610.29933 | MISMATCH | 14.4%, 5.8%, 23.3% confirmed | NEEDS CORRECTION (title) |

Dates: all 9 confirmed as "Submitted 21 Oct 2026", version v1 only — doc's "(Oct 21, 2026)" is correct for every paper.
Second-source coverage: all 9 papers had a working independent mirror (arxiv.deeppaper.ai). No paper lacked a second source.
