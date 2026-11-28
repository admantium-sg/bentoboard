# Findings: Task 1 — arXiv Papers (Oct 12, 2026)
Research focus: chain-of-thought, prompt engineering, efficiency

## Sources
- https://arxiv.org/abs/2610.13672
- https://arxiv.org/abs/2610.13912
- https://arxiv.org/abs/2610.13821
- https://arxiv.org/abs/2610.13722
- https://arxiv.org/abs/2610.13485
- https://arxiv.org/abs/2610.13171
- https://arxiv.org/abs/2610.13041
- https://arxiv.org/abs/2610.13060
- https://arxiv.org/abs/2610.13348
- https://arxiv.org/abs/2610.13025

---

## UPTURN: User-Prompt Turn Injection at Learned Positions for Self-Correction
**arXiv:2610.13672** (Oct 9, 2026) — cs.CL, cs.AI
- Large language models struggle to reliably identify and correct errors in their own reasoning
- UPTRAIN approach: train 130K-parameter MLP head on frozen encoder using only final-answer correctness to learn WHERE to intervene
- Key finding: inline token injections FAIL to redirect reasoning; presenting the same instruction as a NEW USER TURN changes the model's course
- No LLM fine-tuning required — retains selected prefix, injects instruction as new user turn, regenerates suffix
- Across four reasoners and six math benchmarks: improves average accuracy in every setting over 32-rollout baseline
- Outperforms self-correction and reflection-token baselines under matched correction budgets
- Transfers across reasoners and to GPQA-Diamond without retraining
- Complements GRPO and self-correction methods
- Paper: https://arxiv.org/abs/2610.13672

## RSI-Anything: Recursive Self-Improvement via Predictive World Models
**arXiv:2610.13912** (Oct 9, 2026) — cs.CL
- RSI aims to transform interaction experience into persistent improvements; external feedback is costly and world-model predictions become unreliable as policies evolve
- RSI-Anything: built on JEPA-Anything, uses predictive world models to guide action and learning-data selection
- Observed feedback drives policy/workflow improvement and conditional world-model adaptation; component and compatibility checks govern retention of updated policy-model pairs
- Code repair (fixed coder): 26.3% → 29.2% through predictive selection → 31.2% after world-model adaptation
- GUI evaluations: higher task completion, average actions decrease 39.4%
- Lab planning across five successive policy versions: 21.80% → 46.01% (more than double)
- Reaction optimization: 96.15% mean best observed yield vs 82.16% for Bayesian optimization (40-experiment budget)
- End-to-end immune-science application connects workflow evolution with therapeutic hypothesis generation
- Key insight: predictive world models + retained system updates enable recursive improvement across diverse environments
- Code: https://github.com/Gen-Verse/RSI-Anything
- Paper: https://arxiv.org/abs/2610.13912

## Learned Answer Selection: When to Abstain from Answering
**arXiv:2610.13821** (Oct 9, 2026) — cs.CL
- Question: should we train the model itself or a separate component to check its answers?
- On Qwen3-14B for factual questions with score rewarding correct answers, penalizing mistakes, allowing abstention
- Learned answer selector vs calibrated confidence filter: selector improves threshold-averaged utility
- TriviaQA: mean coverage 20.2% → 30.9%; pooled error rate among scored answers 23.0% → 14.5% (exact-match grading)
- Reinforcement learning changes do NOT establish consistent gains for abstention
- On NQ-Open: selector improves utility over filter but still performs worse than always abstaining
- Key insight: learned answer selection is viable; reliable abstention across datasets remains unresolved
- Paper: https://arxiv.org/abs/2610.13821

## Legal Reasoning: Knowledge Graph-Guided Multi-Task Pre-training
**arXiv:2610.13722** (Oct 9, 2026) — cs.CL (NLLP 2026 Workshop @ EMNLP)
- Current legal language models rely solely on masked language modeling, treating statutory text as flat token sequences
- Multi-task pre-training for German traffic law: NSP + KG-Guided Clustering (CLU) + KG-Aware Paragraph Classification (CLS)
- Nine Transformer-based encoders, 324 experimental runs
- Synthetic StVO QA: consistent relative improvements 10.3% to 155.0% over baselines
- LexGLUE: improves over prior results on 4 of 7 legal benchmarks
- Zero-shot transfer on Austrian driving regulations: 3.4% to 15.8% relative gains
- Key insight: explicitly encoding structured legal knowledge into model weights enables zero-shot legal reasoning
- Paper: https://arxiv.org/abs/2610.13722

## Verifiable Retrieval for Legal Reasoning via Structure-Driven Knowledge Graph
**arXiv:2610.13695** (Oct 9, 2026) — cs.CL (RAGE-KG 2026 Workshop @ ISWC)
- LLM-based systems are black boxes — RAG attempts to ground generation in interpretable documents
- Problem: naive retrieval ignores critical context as number and size of sources increases
- Structure-driven parsing creates KG for source document navigation and retrieval in German Legal Code
- Compares KG-informed chunking and retrieval strategies for accuracy of retrieved citations
- Key insight: structural parsing + KG-guided retrieval improves verifiability in legal RAG
- Paper: https://arxiv.org/abs/2610.13695

## POrchestra: Proactive Agentic Orchestration
**arXiv:2610.13485** (Oct 9, 2026) — cs.CL
- Agentic orchestration delegates to sub-agents with independent contexts — extends effective execution horizon
- Limitations: (1) fixed sub-agent goals and harnesses at creation time — no adaptability; (2) sparse and delayed feedback limits orchestration learning
- POrchestra: on-the-fly proactive orchestration — sub-agents request harness adjustments at any logical point while maintaining execution continuity
- OPOD (On-Policy Orchestration Distillation): attributes proactive revision requests back to preceding orchestration decisions for targeted improvement signals
- Process supervision alongside final reward optimizes orchestration policy
- Three long-horizon agent benchmarks (deep research, dynamic digital assistance, software engineering)
- Average 9.1% relative improvement over strongest baseline; combined with OPOD: 10.0% improvement for small orchestrator
- More favorable cost-performance trade-off
- Code: https://github.com/XueyangFeng/POrchestra
- Paper: https://arxiv.org/abs/2610.13485

## PreSTO: Predictive SubTree Prefetching for Power Sampling
**arXiv:2610.13171** (Oct 9, 2026) — cs.CL
- Power sampling improves LLM reasoning by sampling from sharpened distribution (PowerMH sampler)
- Problem: Metropolis-Hastings updates are sequential — each accept/reject sets state for next proposal
- Prior work reduces cost by changing sampler or model (sequential Monte Carlo, approximate lookahead, distillation)
- PreSTO: accelerates PowerMH by prefetching future proposals — MH transition kernel provably unchanged
- Views future MH outcomes as tree of accept/reject decisions; generates prefetched subtree proposals in one batch
- Predictive traversal rule chooses subtree to maximize predicted completed transitions
- Seven datasets, five base LLMs: median speedups 1.71×, 1.91×, 2.33× on PowerMH, EntropyCut, MultiTryMH
- On LCB V6 with Qwen3.5-9B: predictive traversal 1.25×-1.37× faster than default breadth-first
- Key insight: prefetching MH proposals is provably safe and significantly accelerates power sampling
- Paper: https://arxiv.org/abs/2610.13171

## RAMP: Recurrent Adaptive Mixed Precision for Recurrent-Depth LLMs
**arXiv:2610.13041** (Oct 9, 2026) — cs.CL
- Recurrent-depth language models improve inference-time reasoning by repeatedly applying shared network
- Problem: additional recurrent computation increases inference cost, especially during long-context prefill
- Weight-and-activation quantization accelerates via lower-precision arithmetic, but numerical perturbations accumulate along recurrent trajectory
- Key insight: quantization errors introduced earlier are attenuated by more subsequent recurrent steps (smaller effect on final representation)
- Matched-budget experiments confirm: placing quantized computation earlier in recurrent depth consistently yields best fidelity
- RAMP: performs early recurrent refinement in low precision, restores high precision for terminal refinement
- Up to 4K context: near-full-precision prefill quality with 1.16× end-to-end first-prefill speedup (13.9% latency reduction on NVIDIA H100)
- Paper: https://arxiv.org/abs/2610.13041

## KV-Repurpose: Non-Prefix KV-Cache Reuse for LLM Serving
**arXiv:2610.13060** (Oct 9, 2026) — cs.CL
- KV-cache reuse limited to exact prompt prefixes — fails when same document appears after different system prompts, conversation histories, or metadata
- KV-Repurpose: open-source vLLM-based system for segment-wise KV-cache reuse beyond exact prefixes
- Combines cache-aware segment scheduling, prompt construction, capacity management, workload generation, runtime monitoring
- Long-context benchmarks: naive segment reuse largely preserves output quality for single-doc QA and summarization; limitations in cross-document reasoning
- Zipfian RAG-style workload (20% requests share fixed prefix): 63.9% token-level cache hit rate vs 3.3% for prefix caching at same 30GB cache
- Even with 1TB cache: prefix caching reaches only 17.9% hit rate
- Key insight: segment-wise KV-cache reuse dramatically outperforms prefix caching in RAG-style workloads
- Code: https://github.com/taiga333/eval-kv-repurpose
- Paper: https://arxiv.org/abs/2610.13060

## T2Mem: Test-Time Memory Construction for Long Interaction Histories
**arXiv:2610.13348** (Oct 9, 2026) — cs.CL
- LLMs struggle to answer questions over long interaction histories — relevant evidence scattered across distant sessions
- Existing memory systems construct and maintain memory representations offline before queries, incurring overhead and limiting adaptability
- T2Mem: defers memory construction to inference; progressively builds memory along reasoning process
- Offline: extracts lightweight episode-level metadata capturing key events and temporal associations as retrieval cues
- At test time: LLM adaptively retrieves and organizes metadata and raw interactions, constructing query-specific memory as reasoning unfolds
- LoCoMo and LongMemEval: consistently outperforms strong baselines across different backbone LLMs; substantially reduces overhead
- Key insight: deferring memory construction to inference enables dynamic adaptation to individual query information needs
- Code: https://github.com/OpenBMB/T2Mem
- Paper: https://arxiv.org/abs/2610.13348

## Evo2: Weight-Harness Co-Evolution for Agent Self-Evolution
**arXiv:2610.13025** (Oct 9, 2026) — cs.CL
- Self-evolving agents improve language model systems via weight updates or harness improvements — typically pursued separately
- Evo2: unified framework for weight-harness co-evolution
- Dual-role pipeline: single policy serves as Proposer (writes harness edits) AND Reflector (diagnoses effects, guides revision)
- Harness modifications and execution outcomes guide training of both roles
- EvoTIDE training pipeline: recovers usable trajectories through edit extraction and prefix continuation; combines SFT with interleaved GRPO across two roles
- Three coding benchmarks: 82.1% on Polyglot (vs 62.6% strongest baseline), 48.3% on SWE-bench Verified (vs 41.0%)
- Evolved harnesses transfer to different tasks without further evolution
- Extends to proprietary models: GPT-5-mini agent 24.4% → 48.3%
- Key insight: weight-harness co-evolution significantly outperforms weight-only or harness-only self-evolution
- Paper: https://arxiv.org/abs/2610.13025
