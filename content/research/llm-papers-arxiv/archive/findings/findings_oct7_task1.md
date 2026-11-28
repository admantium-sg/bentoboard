# Findings: Task 1 - arXiv Papers (cs.CL, cs.LG, cs.AI)
**Date:** October 7, 2026
**Topic:** llm-papers-arxiv
**Research Area:** LLM research papers and developments

---

## Key Papers Found (Oct 1-7, 2026)

### IdeaAnchor: Teaching LLMs to Turn Literature into Research Ideas
**arXiv:2610.08781** (Oct 6, 2026) — cs.CL, cs.AI
- Scientific research ideation: synthesizing ideas from related papers to identify gaps and formulate new directions
- IdeaAnchor: paradigm using structured specifications as privileged signals — encodes how each input paper should be synthesized into a successful idea
- Mining instances from published papers capturing how real ideas emerge from prior literature
- Trained via demonstration, self-distillation, and RL, with retrieval at inference
- Key insight: anchor-based training strengthens creative synthesis; retrieval enhances detail elaboration; combining both yields best performance
- Paper: https://arxiv.org/abs/2610.08781

### Sherpa: Teaching LLMs to Teach Adaptively
**arXiv:2610.08778** (Oct 6, 2026) — cs.AI, cs.CL
- LLMs can solve problems but being able to teach is different
- Existing approaches rely on demonstrations, preference data, or predefined pedagogical criteria — not grounded in individual student learning outcomes
- Sherpa: multi-turn RL framework with multiple student archetypes (LLMs conditioned on distinct learning preferences)
- Teacher trained to adapt instruction by directly maximizing student learning outcomes
- Results: 20.5 pp average improvement across archetypes; MathTutorBench pedagogy score 52.5% → 79.2%
- Human studies: trained teacher preferred over base model in 79.6% of pairwise comparisons
- Key insight: adaptive teaching requires diverse simulated students to become better aligned with real human teachers
- Paper: https://arxiv.org/abs/2610.08778

### AdvSim2Real: Training Web Agents Against Adaptive Prompt Injection
**arXiv:2610.08773** (Oct 6, 2026) — cs.CL, cs.AI, cs.LG
- Web agents face instructions planted by third parties that redirect from user goals
- Current defenses fine-tune on fixed injections — attackers adapt and bypass
- AdvSim2Real: co-evolves task curriculum, injection adversary, and agent inside frozen web world model
- Curriculum rewarded for tasks agent solves ~50% of time; adversary only for success flip
- 4B agent: completion rises with/without attacks, holds against frontier-model adversary never trained against
- 150 web tasks: AdvSim2Real raises completion under unseen adversary by 33.6% relative to base
- Key insight: adversarial co-evolution inside simulation produces robust agents transferable to real browsers
- Paper: https://arxiv.org/abs/2610.08773

### UNREAL: Unifying Retrieval and Long-Context with a Single Model
**arXiv:2610.08463** (Oct 6, 2026) — cs.CL, cs.IR, cs.LG
- Long-context inference and RAG handle evidence selection at vastly different scales
- UNREAL: model-native evidence selection — encodes chunks and derives retrieval queries from frozen LLM's internal representations
- Adds fewer than 500K trainable parameters; backbone unchanged
- 3B-token, 21M-chunk Wikipedia index: all four dense/hybrid backbones outperform state-of-the-art retriever-reranker
- HotpotQA recall: 49.1% → 73.2%; 2WikiMultiHopQA: 31.7% → 60.1%; MuSiQue: 8.8% → 14.4%
- Long-context: NoLiMa accuracy 1.0% → 24.83% at 128K tokens; LV-Eval F1 49.97% → 54.66% at 256K
- Reduces FLOPs and time-to-first-token from ~32K tokens onward
- Key insight: model-internal evidence selection unifies corpus retrieval and long-context inference
- Paper: https://arxiv.org/abs/2610.08463

### Agentic AutoRAG: RAG Pipeline Optimization through Reasoning-Driven Agents
**arXiv:2610.08452** (Oct 6, 2026) — cs.CL
- RAG pipeline configuration is expensive hyperparameter optimization over many interacting choices
- Existing optimizers reduce each trial to aggregate score without modeling WHY configuration failed
- Agentic AutoRAG: LLM-agent optimizer with retrieval-vs-generation failure attribution
- Diagnoser attributes failed questions to retrieval or generation after each trial
- Proposer selects next configuration weighing accuracy against cost — traces Pareto frontier
- First 10 trials match/beating baselines' full 30-trial judge accuracy
- Key insight: reasoning-driven failure attribution enables efficient multi-objective RAG optimization
- Paper: https://arxiv.org/abs/2610.08452

### Alignment Scaling Laws: A Framework and First Preregistered Measurements
**arXiv:2610.08540** (Oct 6, 2026) — cs.AI, cs.CL, cs.LG
- Alignment burden modeled as B_r(N) = a_r N^alpha_r for each risk category
- Compute needed to bring attack success under 10% grows as N^0.60 (Pythia classifiers)
- Qwen2.5 0.5B-72B preregistered pilot: truthfulness exponent -0.05, stated dispositions 0.48 (scaling helps); sycophancy 0.89 (approaching 1)
- Largest exponent among corrected risks sets long-run regime
- Above exponent 1: any policy holding headroom above floor must grow super-exponentially
- Key insight: alignment scaling requires understanding which risks scale with capability — not all risks equal
- Paper: https://arxiv.org/abs/2610.08540

### DeltaTTT: Layerwise Optimization for Nonlinear Recurrent Memory
**arXiv:2610.08553** (Oct 6, 2026) — cs.LG, cs.AI, cs.CL
- Sequential test-time training (TTT): memory network adapts through successive updates
- Found: fixed-base parallel TTT outperforms serial counterpart in nonlinear memories
- DeltaTTT: replaces joint inner-loop optimization with layerwise learning
- Each layer assigned local prediction target; updated through state-dependent delta rule
- Retains nonlinear readout while enabling chunkwise parallel computation
- Experiments on DeltaNet and LaCT: improvements in language modeling and retrieval
- Key insight: layerwise learning alleviates optimization difficulty in nonlinear recurrent memories
- Paper: https://arxiv.org/abs/2610.08553

### When Forgetting is not Catastrophic: Spurious Forgetting Mechanics
**arXiv:2610.08718** (Oct 6, 2026) — cs.CL, cs.LG
- Knowledge LLMs "forget" during finetuning often remains stored and recoverable
- Finetuning on new facts can produce forgetting that undoes itself: recall collapses, recovers, then erodes
- Minimal associative memory reproduces dynamics with: keys with shared structure, concentrated new values, normalization
- Finetuning moves all old representations along common direction — hiding old facts while preserving geometry
- Subtracting common shift eliminates collapse; removing one direction from each weight update restores old facts
- Key insight: forgetting combines reversible loss of access (shared direction) with slow erosion of individual facts — only second is catastrophic
- Paper: https://arxiv.org/abs/2610.08718

### Wiki-Talkie: Multilingual Benchmarking of Persona-Based Agents
**arXiv:2610.08513** (Oct 6, 2026) — cs.CL, cs.AI
- Real-world Wikipedia Talk pages across 5 languages (Germanic: German/English; Romance: Spanish/French/Italian)
- Personas derived from real user communities with sociodemographic attributes and behaviorally grounded interaction traits
- Finding: user's comment history exemplifying interaction behavior outperforms explicit persona information
- Models systematically underproduce negative/extreme sentiments; over-produce references and suggestions
- Bias toward agreeableness and positivity holds robustly across languages
- Key insight: behavioral history more predictive than explicit persona attributes for agent simulation
- Paper: https://arxiv.org/abs/2610.08513

### Latent Space Bias Directions in LLMs Capture Confidence, Not Fairness
**arXiv:2610.08559** (Oct 6, 2026) — cs.CL, cs.AI, cs.LG
- Activation steering for debiasing: steering vectors found to generalize poorly
- Linear debiasing direction (contrasting anti-biased vs biased prompts) dominated by model confidence
- Steering along it reduces measured bias by reducing confidence — model abstains from answering
- Model confidence is dominant separating factor between biased/anti-biased prompts in hidden space
- Key insight: isolating linear representation of bias disentangled from model confidence is difficult — steering-based debiasing reduces confidence, not underlying preferences
- Paper: https://arxiv.org/abs/2610.08559

### Holdout Best-of-N: Unbiased Evaluation and Its Cost
**arXiv:2610.08719** (Oct 6, 2026) — cs.CL
- Reusing scores that select Best-of-N winner can overstate expected reward
- Exact unbiased evaluation requires J < K fresh scores for K independent scores per candidate
- Unbiased minimax risk order: σ²/√K (Holdout); σ²/K (allowing bias)
- At fixed selector depth, cyclic evaluation of bounded scores has O(1/K) risk uniformly
- Key insight: unbiased evaluation of Best-of-N requires holding out selection scores — cost unavoidable
- Paper: https://arxiv.org/abs/2610.08719

### Language-model Ratings of Depression Reflect the Rater More Than the Patient
**arXiv:2610.08501** (Oct 6, 2026) — cs.CL, cs.AI, q-bio.NC
- Pre-registered: 880 LLM raters crossing 11 models with prompting/scoring choices applied to 189 interviews
- Model choice explains 30.0% of summed-symptom score variance; stable participant differences 10.5%
- Two randomly drawn raters with AUC >= 0.70 disagreed on screening decisions for 40% of participants
- Equal-capacity raters chose differently for ~1 in 5 participants
- Exploratory recalibration with 40 labeled participants: accuracy ~60% → 75%, halved disagreement
- Key insight: depression assessment via LLM raters shows high rater-dependence — calibration repairs some but doesn't secure individual agreement
- Paper: https://arxiv.org/abs/2610.08501

### Denoising Hierarchical Representations: Joint Continuous Diffusion for Language Modeling
**arXiv:2610.08738** (Oct 6, 2026) — cs.CL, cs.LG
- H-CDLMs: hierarchical continuous diffusion language models
- Diffuses tokens at different semantic granularities: tokens themselves + coarser clusters from pretrained embeddings
- Per-modality samplers and schedules enhance interplay between modalities
- At dataset entropy: MAUVE and GenPPL 49.4 on LM1B, 50.4 on OWT — improvements of 24.2 and 20.7 points
- GSM8K: 27.4% accuracy — outperforming prior continuous diffusion and flow-based models
- Key insight: hierarchical semantic granularity in diffusion improves continuous language models substantially
- Paper: https://arxiv.org/abs/2610.08738
