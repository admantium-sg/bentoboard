# Findings: Task 1 — arXiv Papers (cs.CL, cs.LG, cs.AI) — June 3-5, 2026

## Key Papers

### CLSA: Cross-Layer Sparse Attention with Shared Routing
**arXiv:2606.06467** (June 4, 2026) — cs.CL, cs.AI, cs.LG
- Built on YOCO KV-sharing architectures; shares routing index across cross-decoder layers
- Single indexer computes top-k selection once, reuses across layers — preserves fine-grained selectivity while amortizing routing overhead
- Improves pre-filling, KV-cache storage, and long-context decoding jointly
- Up to 7.6x decoding speedup, 17.1x overall throughput improvement at 128K context
- Key insight: KV cache sharing + shared routing index solves the efficiency-quality tradeoff in sparse attention for long-context LLMs

### NF-CoT: Latent Reasoning with Normalizing Flows
**arXiv:2606.06447** (June 4, 2026) — cs.CL, cs.LG
- Models continuous thoughts with normalizing flows distilled from explicit CoT
- Preserves: left-to-right generation, probabilistic sampling, KV-cache decoding compatibility, tractable likelihood estimation
- NF head generates continuous-thought positions; standard LM head generates text positions
- Supports direct policy-gradient optimization in latent reasoning space
- Improves pass rates over explicit CoT and prior latent reasoning baselines on code-generation benchmarks
- Key insight: Normalizing flows bridge latent reasoning advantages (efficiency, tractability) with autoregressive LM strengths (KV cache, sampling)

### ACTS: Agentic Chain-of-Thought Steering
**arXiv:2606.03965** (June 2, 2026) — cs.CL, cs.AI
- Controller agent steers frozen reasoner via Markov decision process at each reasoning step
- Steering action = reasoning strategy + steering phrase; budget-aware
- Multi-budget augmentation via synthetic steering trajectories; RL with budget-conditioned reward shaping
- Matches full-thinking performance with substantial token savings
- Enables controllable accuracy-efficiency trade-offs across reasoners and tasks
- Key insight: Separating the "what to think" controller from the "how to think" reasoner allows budget-aware strategy control

### SARDI: Self-Augmenting Retrieval for Diffusion Language Models
**arXiv:2606.06474** (June 4, 2026) — cs.CL, cs.AI, cs.LG — ICML 2026
- Diffusion dLLMs discard low-confidence tokens — SARDI uses these as lookahead for RAG
- Even low-confidence tokens surface salient entities early in denoising trajectory
- Training-free, retriever-agnostic, applicable to any reasoning-capable discrete diffusion LLM
- Up to 8x higher throughput over autoregressive retrieval baselines on multi-hop QA
- Key insight: Discarded tokens in diffusion models are actually valuable retrieval signals

### EDIT: Evidence-Diagnosed Intervention Training
**arXiv:2606.06350** (June 4, 2026) — cs.CL
- Two-phase framework for rubric-faithful LLM grading
- Phase 1 (EDIT-SFT): Locates problematic steps via internal model signals (posterior mark belief, input-grounding scores), revises with rubric checklist
- Phase 2 (EDIT-RL): Belief-guided reward shaping penalizes harmful belief drifts
- Outperforms SFT and RL baselines on multi-subject grading benchmarks (in-domain and out-of-domain)
- Key insight: Grading requires local credit assignment — internal state diagnostics identify where reasoning goes wrong

### IR3DE: Linear Router for Domain Experts
**arXiv:2606.06098** (June 4, 2026) — cs.CL, cs.LG — ICML 2026 Workshop
- Ridge regression-based LLM router for domain expert selection
- Cheap and fast routing decisions; no substantial training required
- 98.4% normalized performance in reasoning setting
- Dynamic addition/removal of domain experts without router retraining
- Key insight: Simple linear routing surpasses complex models for domain-expert LLM selection in reasoning tasks

### SkillComposer: Learning to Evolve Agent Skills
**arXiv:2606.06079** (June 4, 2026) — cs.CL
- Decomposes skill construction into: create, improve, merge
- Trained via systematic rejection sampling; enables self-evolution at inference time
- Three deployment modes: offline (generalized library), online (task-specific refinement), hybrid
- SkillComposer-4B improves 27B executor by +4.5 on agent tasks, +3.4 on code tasks
- Generalizes across domains and task types unseen during training
- Key insight: Skill abstraction vs. task-specificity tension resolved by explicit specification and generalization mechanisms

### PropMe: Propensity-Aware Memorization Evaluation
**arXiv:2606.06286** (June 4, 2026) — cs.CL, cs.AI
- Contrasts prefix-based capability attacks with non-adversarial evaluations
- SimpleTrace: lightweight pipeline using infini-gram; deterministic attribution to training corpora
- Consistent gap: prefix attacks elicit substantially stronger memorization than generic/dataset-specific prompts
- DFM Decoder (continually pretrained from Comma) shows reduced memorization for Common Pile
- Key insight: Memorization audits should report both worst-case extractability AND ordinary propensity for comprehensive view

### Value Diversity in Multicultural Agent Systems
**arXiv:2606.05985** (June 4, 2026) — cs.CL, cs.CY
- System-level evaluation: dissimilarity between culturally-conditioned agents on value surveys
- 19 cultures, 18 backbone models, World Values Survey
- Diversity largely uncorrelated with alignment — complementary properties
- LLM-based societies fall substantially below human societies in value diversity
- Mixed-backbone systems narrow the gap; social interaction further erodes diversity (homogenization)
- Key insight: Alignment and diversity are distinct axes — current agents homogenize rather than preserve plurality

### OpAI-Bench: Operation-Guided AI-Text Detection
**arXiv:2606.06481** (June 5, 2026) — cs.CL
- Nine sequential revisions per sample under predefined AI coverage levels and five AI edit operations
- Multi-granularity: document, sentence, token, span levels
- 8 document-level + 7 sentence-level + 2 token/span-level detectors benchmarked
- AI-text detectability governed by both proportion and edit operation type
- Key insight: Edit operation type matters as much as coverage for AI-text detectability

### Graph-Based RAG for Hallucination Reduction
**arXiv:2606.05901** (June 4, 2026) — cs.CL
- Lightweight graph schema + graph query tools for RAG
- Halves hallucinated answers on MoNaCo complex QA benchmark
- Highest fine-grained truthfulness score among evaluated scenarios
- Modest increase in token usage
- Key insight: Simple graph structures significantly reduce hallucinations without fine-tuning

### CollabSim: Multi-Agent Collaborative Competence
**arXiv:2606.06399** (June 4, 2026) — cs.CL
- CSCW-grounded framework for evaluating agent collaborative competence
- Tests: common ground establishment, shared task understanding, incentive balancing, misalignment repair
- Captures condition effects, separates model patterns, reveals task-dependent design effects
- Key insight: MAS fail not from lack of task-solving ability but from lack of collaborative competence

### RedKnot: Head-Aware KV Cache Management
**arXiv:2606.06256** (June 4, 2026) — cs.AI
- KV cache utility highly structured across heads: different functional roles, attention distances, runtime importance
- Head-level decomposition enables: position-independent reuse, prefix compression, hot/cold separation, distributed placement
- No retraining or fine-tuning required
- New foundation for AI infrastructure: KV cache as dynamic, model-aware runtime substrate
- Key insight: Monolithic KV cache abstraction wastes resources — head-aware management unlocks efficiency

## Sources
- https://arxiv.org/abs/2606.06467
- https://arxiv.org/abs/2606.06447
- https://arxiv.org/abs/2606.03965
- https://arxiv.org/abs/2606.06474
- https://arxiv.org/abs/2606.06350
- https://arxiv.org/abs/2606.06098
- https://arxiv.org/abs/2606.06079
- https://arxiv.org/abs/2606.06286
- https://arxiv.org/abs/2606.05985
- https://arxiv.org/abs/2606.06481
- https://arxiv.org/abs/2606.05901
- https://arxiv.org/abs/2606.06399
- https://arxiv.org/abs/2606.06256