# Task 1 Findings: arXiv Papers — July 10, 2026
**Research focus:** chain-of-thought, prompt engineering, efficiency
**Date:** July 10, 2026
**Sources:** arXiv cs.CL new submissions (July 9 batch), papers.cool

## Papers Flagged from July 9 Submissions

### 1. DominoTree: Conditional Tree-Structured Drafting with Domino (2607.08642)
**arXiv:2607.08642** (July 9, 2026) — cs.CL
- Training-free speculative decoding combining block-diffusion (DFlash) with best-first tree expansion (DDTree)
- Domino's GRU-based causal correction makes each draft token path-dependent — DDTree's factorized formulation cannot represent this
- DominoTree restricts per-node correction to candidate top-M, making computation practical
- Results: up to 6.6x speedup over autoregressive decoding on Qwen3-4B; mean accept length up to 10.7 tokens/round; +24% throughput over DDTree at T=0 on Qwen3-8B
- GPU-native CUDA-graph builder bit-identical to reference Python implementation
- Code: https://github.com/slin-zhq/Domino-Tree
- Key insight: Path-dependent correction is the missing link between block-diffusion drafting and tree verification — combining them yields multiplicative speedup

### 2. MAESTRO: Markov-chain Expert Sparsification for MoE (2607.08601)
**arXiv:2607.08601** (July 9, 2026) — cs.CL
- Existing MoE pruning methods use locally-derived importance heuristics blind to cross-layer routing dependencies
- MAESTRO: models expert activation trajectories as Ergodic Markov chains whose stationary distributions encode cross-layer dependencies
- 10.61% average performance retention improvement at 50% compression over state-of-the-art baselines
- Substantially lower cross-task variance — global routing-congruent pruning generalizes better
- Key insight: Local importance heuristics miss the interdependent nature of MoE routing — Markov chain modeling captures what static importance scores cannot

### 3. When the Judge Changes, So Does the Measurement (2607.08535)
**arXiv:2607.08535** (July 9, 2026) — cs.CL, cs.AI
- Treats evaluator-replacement ambiguity as measurement-validity problem
- Judge upgrades are not interchangeable: only Qwen3 1.7B→4B gives robust adjacent gain; MiniMax adjacent releases don't
- Stronger judges reduce but do not remove position and verbosity bias
- Repeated-sample juries add little when errors are correlated
- Structured debate can move decisions substantially, but without parser/fallback logs, shifts cannot be attributed to deliberation
- Key insight: LLM-as-judge reports need dataset slices, bias probes, error-dependence estimates, and protocol audit trails — scalar F1 is insufficient

### 4. UniClawBench: Universal Benchmark for Proactive Agents (2607.08768)
**arXiv:2607.08768** (July 9, 2026) — cs.CL
- First capability-driven benchmark for proactive agents in dynamic real-world settings
- Five foundational capabilities: Skill Usage, Exploration, Long-Context Reasoning, Multimodal Understanding, Cross-Platform Coordination
- 400 bilingual real-world tasks; evaluates in live Docker containers with fine-grained step-by-step checkpoints
- Closed-loop evaluation: executor agent + hidden supervisor agent + user agent simulates multi-turn feedback without leaking criteria
- Evaluates state-of-the-art models under multiple agent frameworks — disentangles base model capabilities from framework design
- Code: https://github.com/HKU-MMLab/UniClawBench
- Key insight: Current benchmarks mix multiple capabilities in same task category, obscuring root causes of failure — capability-driven taxonomy fixes this

### 5. WebSwarm: Recursive Multi-Agent Orchestration (2607.08662)
**arXiv:2607.08662** (July 9, 2026) — cs.CL, cs.AI, cs.MA
- Single ReAct-style agent constrained by one long trajectory — hard to handle depth and coverage simultaneously
- WebSwarm: progressive recursive delegation framework with task decomposition, recursive expansion, and agent collaboration during inference
- Dynamically instantiates agentic search nodes — each with local objective + search mode
- Nodes can solve themselves or delegate child nodes; returns evidence upward for parent nodes to expand/revise/aggregate
- Web organization probing guides node expansion; process-level experience reuse across homogeneous siblings
- Outperforms single-agent and multi-agent baselines on BrowseComp-Plus, WideSearch, DeepWideSearch, GISA
- Key insight: Recursive depth + evidence-grounded expansion + collaboration adaptability are the three missing pieces in multi-agent search

### 6. UltraX: Pre-Training Data Refinement at Scale (2607.08646)
**arXiv:2607.08646** (July 9, 2026) — cs.CL, cs.AI
- As scaling gains diminish, data quality becomes the key lever
- UltraX: function-calling refinement framework with insertion + deletion + modification (not just deletion/modification)
- Dataset-adaptive prompt optimization guides expert LLM for high-quality end-to-end refined texts
- Line Alignment Mapping + Dynamic Context Replacement convert text pairs into structured program supervision
- Low-confidence example filtering + ratio-controlled sampling by operation combination
- Achieves highest average performance across all corpora with fewer training tokens
- Key insight: Three-operation (insert/delete/modify) function space is more expressive than two-operation — insertion enables data synthesis not just curation

### 7. Cross-seed SAE: Procrustes-conditioned Sparse Autoencoders (2607.08499)
**arXiv:2607.08499** (July 9, 2026) — cs.CL
- Cross-seed feature universality: independently trained networks learn misaligned feature spaces due to non-convex dictionary learning
- Procrustes-conditioned approach: compute orthogonal rotation between seeds' activation spaces before joint SAE training
- Combines Top-K sparsity, end-to-end downstream optimization, dead-feature revival auxiliary loss
- Pearson r ≥ 0.70 across seeds on SST-2, Stanford Politeness, TweetEval Emotion
- High-universality features encode interpretable sociolinguistic patterns
- Key insight: Cross-seed feature alignment via Procrustes rotation before joint training is the missing ingredient for universal feature extraction

### 8. AMALIA Validity: LLMs as Data Annotators (2607.08731)
**arXiv:2607.08731** (July 9, 2026) — cs.CL, cs.AI, cs.CY
- Portugal's 9B European Portuguese model competitive on agreement alone (within 6 F1 points of 8-13x larger models)
- But agreement ≠ validity — models may follow shortcuts to correct answers without genuine construct understanding
- Recovery gap: decomposition into atomic clauses + recombination by explicit rule recovers only ~50% of holistic performance
- Error analysis shows reliance on surface correlates (moral outrage near authority figures)
- Open multilingual LLM closes the gap on same corpus — points to corpus ≠ main explanation
- Key insight: Sovereign-LLM benchmark batteries must test evidential route, not just agreement — validity auditing requires decomposition

### 9. Citation Verifier: Rubric LLMs for Deep-Research (2607.08700)
**arXiv:2607.08700** (July 9, 2026) — cs.CL
- RL increasingly relies on LLM judge as reward model — calibration is prerequisite before trusting this signal
- Studies citation quality: source relevance + factual support dimensions requiring LLM judgment
- GPT-5-mini attains strongest source-relevance pass-class F1 at 0.908; on factual support, judges statistically indistinguishable
- At comparable F1, judges differ substantially in pass-rate drift, FPR, FNR — scalar F1 obscures directional bias
- This directional bias is exactly what downstream RL would reinforce
- Key insight: Calibrating the judge doesn't require the most expensive model — but it does require bias probes and dataset slices

## Summary
July 9 batch continues the efficiency theme. Key patterns:
- Speculative decoding getting more sophisticated: path-dependent correction + tree expansion + block-diffusion drafting
- MoE pruning finally getting routing-aware methods (Markov chain modeling)
- LLM-as-judge reliability is a growing concern for RL applications
- Agent evaluation benchmarks becoming more rigorous (live environments, capability-driven taxonomy)
- Multi-agent orchestration exploring recursive depth
