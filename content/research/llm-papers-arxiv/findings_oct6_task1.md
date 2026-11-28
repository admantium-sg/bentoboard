# Findings: Task 1 - arXiv Papers (Oct 6, 2026)

## MemPilot: On-Demand Multimodal Memory Curation for LLM Agents
**arXiv:2610.06830** (Oct 5, 2026) — cs.CL, cs.AI, cs.LG
- Most agent memory systems build query-agnostic memory — wasteful and may discard details later essential
- MemPilot: RL-optimized multi-step policy that orchestrates retrieval from query-agnostic memory vs. on-demand curation by heterogeneous LLMs/VLMs
- Jointly controls: evidence amount, curation instructions, model selection, visual access
- Uses objective-wise advantage decoupling + prefix-based marginal utility estimation for credit assignment
- Experiments on 5 multimodal agent-memory benchmarks: favorable performance-cost-latency trade-offs
- Key insight: flexible runtime memory curation under competing preferences beats fixed processing schemes
- Paper: https://arxiv.org/abs/2610.06830

## Balancing Memory Pathways: Hybrid LM Memory Utilization
**arXiv:2610.06750** (Oct 5, 2026) — cs.CL, cs.AI
- Recurrent-attention hybrid LMs combine efficiency of recurrent with strong performance of attention
- Problem: hybrids rely substantially more on attention than recurrent state — underutilizing recurrent pathway
- Standard fine-tuning improves performance but doesn't fix coordination — model becomes MORE reliant on attention
- Solution: auxiliary loss limiting attention's access while recurrent state propagates full sequence
- Encourages model to retain/use information through recurrent pathway alongside attention
- Strong gains on longer contexts and information aggregation tasks
- Key insight: providing multiple memory pathways doesn't ensure effective use — targeted supervision needed
- Paper: https://arxiv.org/abs/2610.06750

## MedPrune: Efficient Medical Multi-Agent Communication Topology Pruning
**arXiv:2610.06695** (Oct 5, 2026) — cs.CL
- Medical MLLMs use multi-agent frameworks with redundant communication — excessive overhead
- MedPrune: dynamically prunes both nodes and edges from communication topology
- Two mechanisms: (1) Heterogeneous Node Sparsification — eliminates task-irrelevant specialist agents via RL; (2) Heterogeneous Edge Sparsification — retains only diagnostically salient connections
- Medical VQA experiments: surpasses multi-agent baselines, boosts token efficiency, strong adversarial robustness
- Key insight: adaptive topology pruning enables efficient multi-agent collaboration without sacrificing reasoning quality
- Paper: https://arxiv.org/abs/2610.06695

## Long-Horizon Textual World Modeling via Structured Reasoning
**arXiv:2610.06637** (Oct 5, 2026) — cs.CL
- World models predict environment evolution under action sequences; long-horizon prediction compounds errors
- Multi-step dynamics models harder to learn as horizon grows: must track interacting state changes, endpoint supervision = weak credit assignment
- New approach: casts internal evolution as structured reasoning over textual world states
- Predictive-gain objective rewards learned state over matched predictor conditioning on raw history
- ScienceWorld, Jericho, CEO-Bench: strongest average long-horizon performance, gains increase at longer horizons
- Controlled counterfactual study: only model with statistically significant sensitivity to future actions
- Key insight: explicit intermediate textual states provide inspectable, scorable, correctable training targets
- Paper: https://arxiv.org/abs/2610.06637

## Anatomy of LLM Sycophancy: Flip Rate Hides Correction vs. Capitulation
**arXiv:2610.06522** (Oct 5, 2026) — cs.CL, cs.AI, cs.LG
- Flip rate counts corrections and capitulations alike — one number hides different behaviors
- SycoLens: modular replay protocol testing how user pressure and evaluation settings shape flip rates
- Across 11 frontier models, ~760,000 controlled replays: which models look sycophantic depends on HOW user pushes back
- Pushback that asserts opposite vs. challenges without asserting ranks models almost unrelatedly
- On arithmetic tasks: one model re-derives and corrects; another abandons correct answers without written work
- Planted derivation lowers release of answer it argues for — true or wrong
- Key insight: flip rate conflates correction with capitulation — need decomposed measurement instruments
- Paper: https://arxiv.org/abs/2610.06522

## Eduardo: Learning to Teach via Multi-Turn RL
**arXiv:2610.06446** (Oct 5, 2026) — cs.CL, cs.AI
- LLMs natively poor at teaching; RL-trained tutors rewarded for student success WITH tutor words in context
- Problem: reward easiest to raise by telling student answer — tuned penalty needed to reduce telling
- Solution: masked near-transfer post-test — student tested on unseen variant with tutor utterances masked
- Binary reward gates: factual correctness of tutor response, no solution handover
- Eduardo-27B matches Gemini-3.1-Pro on MathTutorBench, Claude Opus 4.8 on TutorMoments at 2.4-6.2x fewer thinking tokens
- Doubles use of push-for-justification teacher move; support fading trained in
- Key insight: teaching requires preventing cognitive offloading — reward design crucial for pedagogical quality
- Paper: https://arxiv.org/abs/2610.06446

## PlotGround: Grounding Plot Digitization in Real Scientific Figures
**arXiv:2610.06825** (Oct 5, 2026) — cs.CL, cs.CV
- Scientific figures encode quantitative results not readily machine-readable
- Existing benchmarks rely on synthetic charts or limited chart types
- PlotGround: automated benchmark building from real figures + author-released source data
- PlotGround-1k: 1,119 questions from 1,066 bioRxiv preprints, human-verified
- 16 multimodal models tested: best reaches 87.5% at ±5% relative-error tolerance
- Tightening to ±2%: drops 11-24 percentage points across all models
- Source table vs figure: coding agent accuracy 90.0% → 97.4%, cost cut 72%
- Key insight: figure-to-source gap reveals difference between visual reading and precise quantitative recovery
- Paper: https://arxiv.org/abs/2610.06825
