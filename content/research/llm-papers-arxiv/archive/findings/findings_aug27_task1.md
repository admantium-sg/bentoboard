# Task 1 Findings — August 27, 2026 (Evening)
# Research focus: arXiv papers — chain-of-thought, prompt engineering, efficiency

## Sources
- https://arxiv.org/abs/2608.25428 (DCGC)
- https://arxiv.org/abs/2608.25115 (PACE)
- https://arxiv.org/abs/2608.25637 (AutoVerifier)
- https://arxiv.org/abs/2608.25523 (TOPAS)
- https://arxiv.org/abs/2608.25579 (Expert-Informed Skill Prompting)
- https://arxiv.org/abs/2608.25276 (Groundhog Bit-Flip Attack / GBFA)
- https://arxiv.org/abs/2608.26036 (Trace Integrity — TLDR top 5)
- https://arxiv.org/abs/2608.24509 (PeakBench — TLDR top 4)
- https://arxiv.org/abs/2608.26009 (Imitation Learning for Connection-Tableau)
- https://benchlm.ai/reasoning
- https://arxiv.org/list/cs.CL/new (182 entries today)

---

## PACE: Evidence Frontloading + Pressure-Adaptive Budgeting for RAG
**arXiv:2608.25115** (Aug 26, 2026) — cs.CL, cs.IR
- RAG bottleneck shifts between upstream reranking and downstream generation under different loads
- PACE (Prioritized Adaptive Coverage of Evidence): evidence frontloading + pressure-adaptive budgeting
- Evidence frontloading reorders candidates by marginal evidence coverage (query-relevant, complementary, chain-forming)
- Monotone submodular objective → greedy selection has (1-1/e) approximation guarantee
- Dynamically adjusts reranking budget based on reranker vs LLM relative pressure
- Improves evidence recall, reduces p95 latency under ranking-heavy workloads
- Key insight: Less can be more — evidence-dense top-ranked candidates enable higher final recall with fewer reranked documents
- Paper: https://arxiv.org/abs/2608.25115

## DCGC: Draft-Conditioned Global Correction via Masked Diffusion Models
**arXiv:2608.25428** (Aug 26, 2026) — cs.CL, cs.AI
- Autoregressive LLMs propagate early reasoning mistakes into subsequent tokens
- DCGC: Masked Diffusion Model framework for global correction using imperfect draft from upstream solver
- Combines SFT with Dynamic Dual-CFG at inference: separates problem-only and joint problem-draft branches
- Scales draft-conditioned residual via relative confidence gap
- Outperforms standard sampling and simpler CFG variants across math, code, knowledge reasoning
- Works as verifier-free global correction module for difficult reasoning instances
- Key insight: Diffusion-based correction of flawed reasoning traces is viable — no ground-truth failure labels needed at test time
- Paper: https://arxiv.org/abs/2608.25428

## AutoVerifier: Residual-Guided Non-Parametric Optimization for Answer Verification
**arXiv:2608.25637** (Aug 26, 2026) — cs.CL
- Verifier inductive biases: equivalence of answer forms (e.g., "1+3.14" vs "1+π") depends on question and scoring criterion
- AutoVerifier: learns verifier biases from recurring errors via non-parametric optimization
- Records biases in rule cards → promotes to code modules or prompt guidance after replay validation (no regressions)
- Keeps accepted updates auditable, editable, reusable
- Outperforms SOTA verifiers by large margin on four verifier benchmarks
- Key insight: Verifier errors are learnable patterns — systematic bias tracking beats static rule-based verification
- Paper: https://arxiv.org/abs/2608.25637

## TOPAS: Workflow-Aware Prefix-State Scheduling for Multi-Agent LLM Serving
**arXiv:2608.25523** (Aug 26, 2026) — cs.CL
- Prefix caching in multi-agent LLM: keeping long system-prompt KV cache accelerates future calls but reduces memory for batching
- Existing schedulers optimize either immediate prefix locality OR overall workflow progress — both hurt under shared KV budget
- TOPAS (Task-Oriented Prefix-Aware Scheduler): jointly decides which agent prefixes to cache + which requests to schedule
- Scores post-decision states by tradeoff: expected reduction in longest remaining service path vs near-term downstream prefix reuse benefit
- Task-level aging prevents starvation
- Up to 39.8%/49.4% mean/p99 JCT reduction on synthetic workloads; 22.0%/26.6% p99 JCT reduction on MetaGPT workflows
- Key insight: Multi-agent serving requires joint prefix/cache and scheduling decisions — decoupled approaches leave significant performance on the table
- Paper: https://arxiv.org/abs/2608.25523

## Expert-Informed Skill Prompting: Cross-Dataset Stability for Chinese Metaphor ID
**arXiv:2608.25579** (Aug 26, 2026) — cs.CL
- Metaphor identification performance varies markedly across datasets (different text distributions and annotation policies)
- Four conditions compared: BERT fine-tuning, LLM fine-tuning (QLoRA), zero-shot LLM prompting, zero-shot with frozen procedural Skill
- Skill operationalizes expert criteria: contextual meaning, basic meaning, contrast, comparison
- Skill-ZS (82.92 external mean, 82.64 external floor, 4.08 point range) vs LLM-FT (83.52 mean but higher range)
- Key insight: Expert-informed procedural Skill prompting provides more stable cross-dataset performance than fine-tuning — higher external floor, smaller range
- Paper: https://arxiv.org/abs/2608.25579

## Groundhog Bit-Flip Attack: Denial-of-Wallet via Expert Manipulation in MoE LLMs
**arXiv:2608.25276** (Aug 26, 2026) — cs.CL | EMNLP 2026
- MoE routing creates attack surface: specific experts become disproportionately correlated with EOS tokens
- GBFA: flip routing-layer bits associated with expert activations → Denial-of-Wallet attack
- Across 4 real-world MoE LLMs: deactivating average <4 experts drives 5912% output inflation
- Most samples reach max tokens; semantic fidelity largely preserved
- Works across conversational, reasoning, and agentic task modes
- Key insight: MoE architecture's sparse activation is a double-edged sword — lightweight bit perturbations at routing layer cause massive token inflation without semantic distortion
- Paper: https://arxiv.org/abs/2608.25276

## Trace Integrity: Beyond Answer Accuracy for LLM Data Agents
**arXiv:2608.26036** (Aug 26, 2026) — cs.AI, cs.CL | TLDR #5
- Answer accuracy insufficient: benchmark-correct answer can be produced by invalid trace
- Structure Gap: natural-language reasoning does not reliably specify operator-level programs for real systems
- Trace Integrity properties: explicit, executable, schema-valid, operator-faithful, replayable, answer-consistent, auditable
- Operationalized via execution contracts: binds user intent to schema elements, operator plans, assumptions, executable queries, verification status
- CAIT (Correct Answer / Invalid Trace) Rate: measures how often answer-only eval counts unsupported outputs as successes
- Empirical: on BIRD Mini-Dev, answer accuracy 20-24% but Trace Integrity Pass Rate 39-43%, CAIT Rate 45-55%
- Key insight: Answer accuracy and trace validity are distinct evaluation signals — current benchmarks miss the majority of silent computation failures
- Paper: https://arxiv.org/abs/2608.26036

## PeakBench: Resource-Aware Tool Invocation Benchmark for LLM Agents
**arXiv:2608.24509** (Aug 25, 2026) — cs.AI, cs.SE | TLDR #4
- Existing agent benchmarks evaluate tool selection/argument generation under mostly serial execution — ignore parallelization and resource constraints
- Serial = safe but slow; resource-agnostic parallel = fast but prone to overflow
- PeakBench: executable multi-tool workflows with dependency annotations and measured resource profiles
- Two-part evaluation: disentangles logical planning from physical scheduling, with dedicated metrics each
- Strong logical planning does NOT reliably translate to safe/efficient execution under resource constraints
- Resource info exposure reduces avoidable overflows and improves utilization
- Key insight: Agent evaluation must separate "what tools to call" from "how to schedule under resource limits" — conflating them masks real deployment failures
- Paper: https://arxiv.org/abs/2608.24509

## Unsupervised Post-Training Survey (80 Methods)
**arXiv:2608.24982** (Aug 25, 2026) — cs.CL, cs.AI, cs.CV, cs.LG, cs.MM | Findings of EMNLP 2026
- Catalog of 80 strict UPT methods: update signal from same-lineage model artifacts, not external oracle
- Four signal categories: prediction statistic, sample relation, self-generated target, internal evaluator
- Input Visibility × Update Persistence view maps deployment regimes
- Key insight: Choice of internal signal and task structure determines whether post-training improves model or amplifies error — recursive amplification risk is real and understudied
- Paper: https://arxiv.org/abs/2608.24982

## Imitation Learning for Connection-Tableau Theorem Proving
**arXiv:2608.26009** (Aug 26, 2026) — cs.AI, cs.LG, cs.LO
- Connection tableaux: leanCoP-style search + plCoP/rlCoP-style planning as stateful policies over one interface
- Graph neural network scores proof edits from transferable structural features
- Up to 46% more problems solved than leanCoP; proofs in order of magnitude fewer steps
- Key insight: Theorem proving as imitation learning over formal calculi is viable — structural transfer across problems enables significant efficiency gains
- Paper: https://arxiv.org/abs/2608.26009
