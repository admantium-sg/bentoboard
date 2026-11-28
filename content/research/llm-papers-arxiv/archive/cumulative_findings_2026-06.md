## 2026-06-26 (Friday)

### New Insights:

#### The Riddle Riddle: Flexible Reasoning vs Pattern Matching
**arXiv:2606.27103** (June 25, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27103, https://arxivtldr.org/abs/2606.27103 -->
- Novel "riddle riddle" paradigm: word problems mimicking riddles but requiring only literal interpretation
- Results: LLMs 84.9% on genuine riddles, 50.7% on literal variants; humans reverse (50.5% vs 80.5%)
- 90.8% of LLM errors on riddle riddles from inappropriate inventive reasoning
- Key insight: LLMs' strong performance on genuine riddles likely reflects memory retrieval, not flexible strategy selection

#### LMs as Task-Specific Knowledge Bases: An Interpretability Analysis
**arXiv:2606.27237** (June 25, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27237 -->
- Facts acquired on one task frequently fail to co-emerge on others during training
- Parameter localization reveals distinct parameter subsets for same fact across different tasks
- Chain-of-thought reasoning draws effectiveness partly from engaging task-specific parameters beyond evaluation task
- Key insight: What the model knows and how it is asked are intertwined in parameter space — knowledge base analogy fails

#### RiVER: RL Without Ground-Truth Solutions
**arXiv:2606.27369** (June 25, 2026) — cs.LG — ICML 2026 Spotlight <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27369 -->
- RiVER trains LLMs on score-based optimization tasks without ground truth, using execution feedback as supervision
- Two challenges in group-relative RL with continuous rewards: scale dominance and frequency dominance
- RiVER addresses with calibrated reward shaping (instance-wise comparisons, top-ranked solver emphasis)
- Qwen3-8B: +8.9% ALE rating; GLM-Z1-9B: +9.4%. Cross-domain transfer: LiveCodeBench +2.4%, USACO +3.5%
- Key insight: Score-based optimization with proper reward calibration enables general coding ability without ground-truth solutions

#### PEEU: GUI Agents via Autonomous Experience Exploration
**arXiv:2606.27330** (June 25, 2026) — cs.CL — ACL 2026 Main <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27330, https://arxivtldr.org/abs/2606.27330 -->
- Small MLLMs suffer weak planning and limited cross-website generalization
- PEEU: autonomously explores environments + hindsight experience to synthesize high-level training data
- 7B model achieves 30.6% accuracy, outperforming much larger Qwen2.5-VL-32B
- TDHAF analysis: mastering low-level atomic skills does not guarantee high-level planning competence
- Key insight: High-level task training yields stronger OOD generalization; hindsight experience crucial for small MLLMs

#### Psy-CoT + RAPO: Psychology-Grounded Role-Playing Agents
**arXiv:2606.27025** (June 25, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27025 -->
- Psy-CoT: three-step reasoning — Interaction Perception, Psychological Empathy, Logical Construction
- Problem: standard RL gives identical gradients to generic reward-hacking phrases and genuinely role-specific phrases
- RAPO: profile-token mutual information gradient weighting — amplifies role-specific tokens under positive advantage
- Key insight: Role-playing needs psychology-grounded reasoning AND profile-aware policy optimization to avoid reward hacking

#### Emotion Vectors: Cross-Architecture Replication
**arXiv:2606.26987** (June 25, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.26987 -->
- Replicates Claude Sonnet emotion vector findings in Apertus-8B and Gemma-4
- Valence geometry confirmed: r=0.76 (Apertus), r=0.83 (Gemma)
- Gemma: valence encoded early, collapses later; Apertus: emerges at mid depths — opposite patterns
- Arousal encoding sensitive to extraction corpus
- Key insight: Emotion geometry is real across architectures but layer-wise emergence varies by training regime

#### Temporal Context Prompt Reduces Historical Surprisal by 60%
**arXiv:2606.27275** (June 25, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27275 -->
- Historical difficulty decomposed into four dimensions: tokenization cost, predictive uncertainty, semantic robustness, context sensitivity
- 17th-century Italian: 2.4x more surprising than modern (3.2x for academic prose)
- Embedding similarity remains robust (>0.85) — models can represent historical meaning even when generation is unstable
- Temporal context prompt reduces historical surprisal by ~60%
- Key insight: Semantic retrieval on historical text is safe; generative applications need adaptation; encoding tax is consistent but comprehension/generation face different challenges

#### Feature Steering Reduces Look-Ahead Bias in Forecasting
**arXiv:2606.27199** (June 25, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-07-02 -->
<!-- Sources: https://arxiv.org/abs/2606.27199 -->
- Sparse autoencoders identify features for time-aware reasoning and look-ahead-biased reasoning
- Amplifying time-awareness features reduces look-ahead bias while preserving general reasoning
- Steering look-ahead-bias features produces no effect — asymmetric intervention
- Key insight: Interpretable temporal features can causally shift LLMs toward historically grounded reasoning

---
## 2026-06-25 (Thursday)

### New Insights:

#### Voice AI Has an Emotional Intelligence Gap
**arXiv:2606.26083** (June 24, 2026) — cs.CL, eess.AS <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.26083, https://arxivtldr.org/abs/2606.26083 -->
- Four production realtime voice systems tested on scenarios where words AND vocal delivery conflict
- All four systems act on words, not voice: end calls with crying callers, approve frightened wire transfers, enroll sarcastic agree
- Three of four CAN identify distress/fear/sarcasm when asked directly but ignore it in decisions
- Termed "emotional intelligence gap" — perception ≠ action
- Prompting for explicit vocal attention improves partially but inconsistently
- Key insight: Voice AI perceives emotional cues but doesn't weight them in decisions — a systematic perception-action gap

#### Reclaim Evaluation: A Lossy Memory Is Worse Than an Empty One
**arXiv:2606.25449** (June 24, 2026) — cs.CL, cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.25449, https://github.com/collapseindex/reclaim-eval -->
- Give model memory that kept wrong conclusion but dropped source → emits stale value confidently
- Give empty memory → abstains. Across 7 models, direction never reverses
- "Brittle memory": behavioral, not information-bound; magnitude is disposition-dependent, not direction
- Correctability bottlenecked by whether SOURCE survives — not capability
- Source-first policy (keep recomputable source, drop re-derivable conclusion) restores correctability
- One-line oracle reaches 1.00; one-prompt deployable reclaims 0.49-0.88
- Through memory loops, single dropped-source error corrupts growing downstream span
- Key insight: Store sources, not conclusions. Lossy memory actively misleads; empty memory abstains

#### PolicyAlign: Direct Policy-Based Safety Alignment
**arXiv:2606.25442** (June 24, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.25442, https://arxiv.org/list/cs.CL/2026-06 -->
- Safety requirements often natural-language policies; supervision data costly/unavailable
- PolicyAlign: synthesizes policy-violating instructions + on-policy self-distillation
- Policy-Sensitive Filtering selects instructions where policy induces largest behavioral shift
- Improves safety while maintaining low over-refusal and general capabilities
- Generalizes to medical, legal, financial safety scenarios
- Key insight: Policy → behavior without labeled data via synthesis + policy-sensitivity filtering

#### Multi-Step Tool-Use RL Collapses: Supervisory Signals Fix It
**arXiv:2606.26027** (June 24, 2026) — cs.CL, cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.26027, https://arxivtldr.org/abs/2606.26027 -->
- Agentic RL for tool use leads to instability/catastrophic collapse (control token probability spikes)
- Underlying capability intact, obscured by format
- Interleaving SFT+RL substantially improves stability but degrades under format/OOD evaluation
- Diverse supervisory signals (off-policy, hint-based, erroneous example) enable robust training
- Key insight: Pure RL for tool use unstable; interleaving SFT stabilizes but loses OOD; diverse supervision needed

#### Brevity is the Soul of Inference Efficiency
**arXiv:2606.25432** (June 24, 2026) — cs.LG, cs.AI, cs.CV <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.25432, https://digg.com/tech/71sdnkxn -->
- Standard efficiency toolkit treats token count as fixed; output length has been inflating
- Brevity via pretraining data curation: train on concise, correct data → lower Cost-of-Pass
- 35x Cost-of-Pass advantage over most verbose 4B comparator at ~1pp accuracy trade
- Concise model reaches correct answers verbose reasoning model misses — reasoning is distinct curation target
- Key insight: Inference efficiency = tokens-per-correct-answer; brevity targets it directly

#### Jailbreak Judge Reliability: Most ASR Numbers Are Unreliable
**arXiv:2606.25487** (June 24, 2026) — cs.CL, cs.CR <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.25487 -->
- Using 596 human-labeled HarmBench completions to check automated judges
- Dedicated classifier: over-flags (precision 0.835, recall 0.974)
- LLM-as-judge: high precision (0.81-0.94) but erratic recall (0.06-0.65)
- Same responses produce very different ASR depending on judge
- Surface wrappers flip every LLM-judge 57-100%; white-box GCG flips 70% of true positives
- Key insight: Most published ASR numbers unreliable; field needs adversarial robustness checks on evaluation

#### Detect, Unlearn, Restore: Defending Summarization Against Poisoning
**arXiv:2606.26036** (June 24, 2026) — cs.CL, cs.CR <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.26036 -->
- Fine-tuning-stage poisoning: adversaries manipulate small datasets for biased/harmful summaries
- White-box: influence-function analysis + semantic consistency checks (85-92% detection precision)
- Black-box: perturbation sensitivity (poisoned models show 2-3x greater sensitivity)
- Gradient-ascent unlearning restores 96% of original behavior with <0.6% ROUGE degradation
- Key insight: Fine-tuning poisoning leaves detectable artifacts; unlearning reverses without full retraining

#### SpeechEQ: Emotional Intelligence in Voice Conversational Models
**arXiv:2606.25990** (June 24, 2026) — cs.CL, cs.AI, cs.SD <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.25990, https://huggingface.co/datasets/SpeechEQ/SpeechEQ -->
- 2,265 dialogues across 15 EQ subscales (EQ-i 2.0 theory), evaluated via Spoken EQ (SEQ) score
- Current models bottlenecked by: modality shortcut, alignment-induced safety trap, contextual amnesia
- End-to-end architectures outperform cascaded but still fall short on paralinguistic reasoning
- Key insight: Voice models need active multi-turn cross-modal reasoning; current benchmarks miss this

---
## 2026-06-20 (Saturday)

### New Insights:

#### GEMS: Multi-Semantic Steering Without Collapse
**arXiv:2606.19946** (June 18, 2026) — cs.CL, cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.19946, https://github.com/LuLu663939/gems-multi-semantic-steering -->
- Training-free activation steering works for single directions but collapses when multiple semantic vectors superpose
- Two independent collapse sources: distributional deviation (norm accumulation drives activations out-of-distribution) and directional interference (non-orthogonal vectors mutually dampen)
- GEMS: norm-preserving weighted superposition + real-time orthogonalization as geometric constraints
- GSM8K: three concurrent non-mathematical directions → 98% accuracy (baseline 92%), unconstrained addition collapses to 4%
- Wikitext-2: same injection, only 2.2% PPL increase
- Layer-level probes confirm orthogonalized signals survive FFN pathway; qualitative transfer from 3B to 31B across architectures
- Key insight: Multi-directional steering is solvable — orthogonalization is the missing geometric constraint

#### H-RePlan: Hierarchical Recovery for Cross-Device Agents
**arXiv:2606.20487** (June 18, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.20487 -->
- Multi-device agents fail recovery: retry same strategy, reassign subtask, or revise global plan — no device-local strategy modeling
- H-RePlan: separates device-local strategy recovery from orchestrator-level global replanning via compact cross-layer failure abstraction
- HeraBench: fault-injected benchmark across Linux and Android with strategy- and device-level failures
- Substantially higher completion, instruction adherence, and perfect-pass rates at lower token cost vs single-strategy and coarse-grained baselines
- Key insight: Scope-aware hierarchical recovery is essential for robust multi-device agent execution

#### BitsMoE: Spectral Energy-Guided Bit Allocation for MoE Quantization
**arXiv:2606.19468** (June 17, 2026) — cs.LG <!-- FACT_CHECK: CORRECTION NEEDED -->
<!-- Correction: arXiv:2606.19468 is actually NarraDolma, not BitsMoE -->
<!-- BitsMoE confirmed to exist (by Jiayu Zhao et al., submitted May 22, 2026) -->
<!-- Actual arXiv ID not yet verified -->
<!-- Verified: 2026-06-25 -->
- Standard quantization allocates bits uniformly across MoE experts — ignores varying importance and sensitivity
- BitsMoE: spectral energy-guided per-expert bit allocation based on actual expert contributions
- Key insight: MoE models need heterogeneous quantization — uniform allocation wastes bits on less critical experts

#### StylisticBias: 15 Attributes Account for 80% of MLLM Social Bias
**arXiv:2606.20527** (June 18, 2026) — cs.CL, cs.CV (ICML 2026 Workshop) <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.20527, https://github.com/timo-cavelius/StylisticBias -->
- Controlled benchmark: 500 faces × ~50 single-attribute variations = ~25K images; keeps identity fixed, varies one attribute
- Age and body type dominate identity-level effects; fashion style drives largest attribute-level shifts
- ~15 attributes account for nearly 80% of total variation in social judgments
- Sensitivity strongest for socioeconomic and style-related judgments semantically aligned with appearance
- Key insight: MLLM social bias is concentrated in a small set of visual cues — targeted mitigation is feasible

#### NarraDolma: Narrative Structure in 3-Trillion-Token Pretraining Corpus
**arXiv:2606.19468** (June 17, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-25 -->
<!-- Sources: https://arxiv.org/abs/2606.19468 -->
- NarraBERT: RoBERTa-based narrative prediction model applied to 3M passages from Dolma corpus
- Framework: three narrative elements (agency, setting, events) operationalized as 11 interpretable dimensions
- Narrative structure is measurable at scale across heterogeneous data; narrative qualities unequally distributed across sources and topics
- Current curation practices neither measure nor account for this distribution
- Key insight: Narrative reasoning in LLMs depends on how narrative qualities are distributed in pretraining data — now auditable

---
## 2026-06-19 (Friday)

### New Insights:

#### ASAG: Attention-State Adaptive Generation — Stop Overthinking (ICML 2026 Spotlight)
**arXiv:2606.15070** (June 13, 2026) — cs.CL
- Large reasoning models suffer from overthinking — redundant tokens hurt accuracy
- ASAG: training-free, plug-and-play framework inferring reasoning state from attention distributions, adaptively stopping generation
- No weight changes needed — wraps any existing LRM
- +3.2% average accuracy, ~40% fewer generated tokens on Qwen3-8B across 9 benchmarks
- Works consistently across DeepSeek-R1-Distill and Qwen3 series
- Key insight: Attention distribution is a reliable signal for reasoning state — use it to decide when to stop

#### Variable-Width Transformers: Hourglass Architecture
**arXiv:2606.18246** (June 16, 2026) — cs.CL
- Standard transformers allocate uniform width across layers despite different computational roles
- ×-shaped (hourglass) transformer: wider early/late layers, narrower middle layers via parameter-free residual resizing
- 200M–2B dense + 3B MoE models tested
- 22% FLOPs reduction, 15% KV cache and I/O reduction at matched loss
- Key insight: Bottleneck structure in middle layers creates qualitatively different residual stream representations — nonuniform width is more resource-optimal

#### ZPPO: Zone of Proximal Policy Optimization — Teacher in Prompts, Not Gradients
**arXiv:2606.18216** (June 16, 2026) — cs.CL
- Knowledge distillation to small models: logit imitation concentrates student on teacher's sharpest modes → hurts generalization
- GRPO avoids imitation but fails on zero-advantage questions, breaking on-policy assumption
- ZPPO: keeps teacher inside the prompt (Vygotsky-inspired zone of proximal development)
  - BCQ: Binary Candidate-included Question — one correct teacher + one incorrect student response as anonymized candidates
  - NCQ: Negative Candidate-included Question — aggregates student's wrong rollouts to surface shared failure modes
  - Prompt replay buffer recirculates hard questions until graduation or FIFO eviction
- Outperforms off/on-policy distillation and GRPO on Qwen3.5 family (0.8B–9B), with largest gains at smallest scale
- Key insight: Teacher knowledge lives in prompts when gradients can't transfer it safely

#### HydraHead: Head-Level Attention Hybridization
**arXiv:2606.20097** (June 18, 2026) — cs.CL
- Key observation: heads within the same layer show distinct functional specialization despite sharing input features
- HydraHead: hybridizes FA (Full Attention) and LA (Linear Attention) along the head axis
  - Interpretability-driven selection: identifies retrieval-critical heads, preserves FA only for them
  - Scale-normalized fusion: reconciles distributional gap between FA and LA head outputs
- Three-stage transfer with parameter reuse and distillation for minimal training overhead
- 7:1 LA-to-FA ratio matches 3:1 layer-wise hybrid's long-context performance
- 69% improvement over baseline at 512K context, approaching Qwen3.5 with only 15B tokens trained
- Key insight: Head-level granularity is the natural level for attention hybridization — uniform layer-level mixing wastes capacity

#### Reasoning-Aware Compression (RAC): Pruning Without Losing CoT
**OpenReview / ICML 2026**
- Standard pruning on reasoning LLMs causes models to produce MORE thinking tokens with worse accuracy — decode-dominated task differs fundamentally from input reconstruction
- Root cause: existing pruning focuses on input reconstruction; reasoning needs CoT-aware calibration
- RAC: during pruning, jointly reconstruct activations from input AND model's on-policy chain-of-thought traces
- Drop-in fix for existing pruning workflows (SparseGPT, etc.)
- ~95% accuracy maintained even at 50% sparsity
- Key insight: Reasoning models need CoT-aware compression — generic weight pruning is destructive to reasoning structure

#### Decoupled Search Grounding (DSG): 91% Lower Search Cost
**arXiv:2606.18947** — cs.AI, cs.CL, cs.IR
- LLM agents couple real-time search with reasoning — expensive, slow, provider-dependent
- DSG: decouples search from reasoning; vendor-agnostic grounding architecture
- Granular control: provider routing, caching, context rendering
- Near-native SimpleQA accuracy with 91% lower search cost, 68% lower latency
- Key insight: Offloading retrieval to a separate grounding layer is the path to cheap, reliable agentic search

#### SIMMER: 56% of LLM Plans Have Latent Failures
**arXiv:2606.14574** — cs.CL, cs.AI
- SIMMER: benchmark for detecting latent failures in LLM planning for autonomous agents
- Uses human-curated symbolic world model in kitchen domain to validate plans and detect hazards
- Up to 56% of LLM plans contain latent failures — most leading to irreversible consequences
- Key insight: Overt benchmark performance dramatically understates real-world risk — world-model-based validation is essential

#### QMFOL: Quantifiable Monadic First-Order Logic Benchmark
**arXiv:2606.20227** — cs.AI, cs.SE
- Framework for evaluating LLM deductive reasoning with controllable logical complexity
- Generates monadic first-order logic tasks with precise control over reasoning depth, width, label types, distractors
- Round-trip formal-to-natural-language verification ensures consistency
- Key insight: Controllable formal benchmarks needed to systematically probe LLM logical reasoning boundaries

#### Actionable Activation Directions for Misalignment Detection
**arXiv:2606.20225** (June 18, 2026) — cs.CL
- Fine-tuning on insecure code induces emergent misalignment across model families
- Difference-in-means direction at final layer achieves 99.6% separation of aligned/misaligned activations
- Causal steering: subtracting this direction reduces code spillover by 21–51 points
- Cross-architecture transfer: Gemma and Qwen act as geometric donors, Llama as receiver
- Within-model directions are causally specific; cross-model directions are real but non-specific
- Key insight: Misalignment has a causally actionable geometric signature — linear steering is feasible within architecture families

---
## 2026-06-18 (Thursday)

### New Insights:

#### DreamReasoner-8B: Block-Size Curriculum Learning for Diffusion Reasoning
**arXiv:2606.19257** (June 17, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.19257, https://arxiv.org/pdf/2606.19257 -->
- Open-source block diffusion reasoning model
- Training with large block sizes yields remarkably poor reasoning; small block sizes preserve it
- Block-size curriculum learning bridges the gap: gradually transitions from fine-grained to coarse-grained block sizes
- Competitive with Qwen3-8B on math and code reasoning benchmarks
- Key insight: The granularity gap is the key challenge for diffusion reasoning — curriculum learning over block sizes enables generalization

#### Rethinking Efficient Attention in Hybrid Architectures
**arXiv:2606.15378** (June 13, 2026) — cs.CL, cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.15378 -->
- Systematic analysis of hybrid architectures (full attention + sliding-window/recurrent mixers)
- Efficient-attention design mainly affects how fast long-context capability emerges; different hybrids converge under sufficient training
- Large-Window Laziness: larger SWA windows can delay formation of retrieval heads in full-attention layers
- NoPE (no positional encoding) applied only to full-attention layers substantially improves long-context performance
- Key insight: Full attention handles long-range retrieval; efficient attention shapes optimization trajectory. Selective NoPE is the winning recipe

#### RepSelect: Robust LLM Unlearning via Representation Selectivity
**arXiv:2606.17168** (June 15, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.17168, https://huggingface.co/papers/2606.17168 -->
- Current unlearning methods easily reversed by fine-tuning or few-shot prompting — forgetting is only shallow
- Root cause: existing methods target representations shared with both retain and recovery subspaces
- RepSelect: collapses top principal components of weight gradients before each update
- 4-50x larger reduction in post-relearning answer accuracy vs strongest baseline
- Near-perfectly robust to few-shot prompting attacks across Llama 3, Qwen 3.5, Gemma 4, DeepSeek V2 Lite
- Key insight: Targeting selective (not shared) representations enables deep and robust forgetting

#### WAPO: Winner Advantage Policy Optimization
**arXiv:2606.16154** (June 15, 2026) — cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.16154, https://huggingface.co/papers/2606.16154 -->
- GRPO-style RLVR prone to collapse; WAPO analyzes through token-level gradient dynamics
- Stability depends jointly on advantage sign and token distribution under current policy
- WAPO: updates only on positive-advantage completions (simple online clipped policy-gradient)
- Improves training stability, matches or outperforms baselines across math reasoning and multi-hop QA
- Key insight: Positive-advantage-only updates resolve GRPO collapse — only the winning completions teach

#### AI Index Report 2026
**arXiv:2606.15708** (April 2026) — cs.AI <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://hai.stanford.edu/ai-index/2026-ai-index-report, https://aihub.org/2026/04/15/2026-ai-index-report-released/ -->
- Ninth edition: AI advancing faster than governance/evaluation/education can keep up
- AI being tested more ambitiously across reasoning, safety, real-world execution
- Measurements increasingly difficult to rely on
- New chapters: AI in science, AI in medicine
- New: analytical framework on AI sovereignty, economic value estimates, labor market effects
- Key insight: The gap between AI capability and institutional preparedness is now a central theme in major reports

### Quantization Benchmarks Update:

#### Local LLM Quantization Quality Benchmarks 2026 <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://presenc.ai/research/local-llm-quantization-quality-benchmarks-2026 -->
- Q4: 1-3% perplexity degradation vs FP16 (production sweet spot)
- Reasoning benchmarks degrade 3x faster than perplexity at Q3 (~5% GSM8K drop)
- AWQ outperforms GPTQ on modern models by ~0.5-1.0% perplexity (activation-aware scaling)
- Q4 minimum for agents; never go below Q3 for reasoning tasks
- Memory/speed: Q4_K_M achieves 3.7x speedup at ~40GB vs 140GB FP16 for Llama 70B

---
## 2026-06-14 (Sunday)

### New Insights:

#### KPMG Withdraws AI Report After Hallucination Detection
**TechCrunch** (June 13, 2026) <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://techcrunch.com/2026/06/13/kpmg-pulls-report-on-ai-usage-due-to-apparent-hallucinations/, https://gptzero.me/news/investigations-kpmg/ -->
- KPMG withdrew report "Redefining excellence in the age of agentic AI" 
- GPTZero identified widespread inaccuracies stemming from AI hallucinations
- Organizations (UBS, UK NHS, Swiss Federal Railways, Transport for London) confirmed report claims were false
- EY previously withdrew similar report with fake footnotes
- Key insight: AI-generated AI adoption reports are now being fact-checked and retracted — enterprise AI claims require independent verification

#### Agentic Environment Engineering Survey
**arXiv:2606.12191** (June 10, 2026) — cs.CL, cs.AI <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.12191, https://huggingface.co/papers/2606.12191 -->
- 63-page comprehensive survey on LLM agent environments
- Four evolution pathways: memory-centric, orchestration-centric, trajectory-centric, exploration-centric
- Three evolution paradigms: neural-driven, difficulty-driven, scaling-driven
- Future directions: Environment-as-a-Service, Multi-agent Environments, Neural-Symbolic Environments
- Key insight: Agent environments are becoming a distinct engineering discipline for LLM capability scaling

#### SCSB: Simplex-Constrained Sparse Bagging
**arXiv:2606.13589** (June 11, 2026) — cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.13589, https://arxiv.org/html/2606.13589v1 -->
- Up to 96% ensemble compression via sparse posteriors
- Joint optimization over probability simplex for OOB loss minimization
- Addresses L1-simplex paradox with concave quadratic penalty
- Model-agnostic; linear inference speedups; superior ECE calibration
- Key insight: Uniform voting in ensembles ignores varying local competence; sparse priors fix this

#### SkillCAT: Training-Free Skill Self-Evolution (detailed analysis)
**arXiv:2606.13317** (June 11, 2026) — cs.CL <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.13317, https://arxiv.org/html/2606.13317v1 -->
- Three stages: Contrastive Causal Extraction, Assessment-Augmented Evolution, Topology-Aware Task Execution
- CCE samples multiple trajectories, compares success/failure pairs
- AAE replays candidate patches before merging; TTE compiles into routable topology
- 40.40% average score improvement; training-free
- Key insight: Separating extraction/assessment/execution enables reliable skill evolution without model retraining

#### MemRefine: LLM-Guided Memory Compression (detailed analysis)
**arXiv:2606.13177** (June 11, 2026) — cs.CL, cs.AI, cs.LG <!-- FACT_CHECK: VERIFIED -->
<!-- Verified: 2026-06-18 -->
<!-- Sources: https://arxiv.org/abs/2606.13177, https://arxiv.org/pdf/2606.13177 -->
- Surface similarity poorly reflects factual value; LLM judge decides delete/merge/preserve
- Meets target budgets while preserving downstream performance
- Key insight: LLM-level judgment required to assess factual value of memory entries

---
## 2026-06-05 (Friday)

### New Insights:

#### CLSA: Cross-Layer Sparse Attention with Shared Routing
**arXiv:2606.06467** (June 4, 2026) — cs.CL, cs.AI, cs.LG
- YOCO-based KV-sharing + single routing index reused across layers; amortizes top-k selection cost
- Up to 7.6x decoding speedup, 17.1x throughput improvement at 128K context
- Jointly improves pre-filling, KV-cache storage, and long-context decoding
- Key insight: KV sharing + shared routing index solves efficiency-quality tradeoff in sparse attention

#### NF-CoT: Latent Reasoning with Normalizing Flows
**arXiv:2606.06447** (June 4, 2026) — cs.CL, cs.LG
- Normalizing flows model continuous thoughts distilled from explicit CoT
- Preserves KV-cache compatibility, left-to-right generation, tractable likelihood estimation
- Supports direct policy-gradient optimization in latent reasoning space
- Improves pass rates on code benchmarks with less intermediate reasoning cost
- Key insight: Normalizing flows bridge latent reasoning efficiency with autoregressive LM strengths

#### ACTS: Agentic Chain-of-Thought Steering
**arXiv:2606.03965** (June 2, 2026) — cs.CL, cs.AI
- Controller agent steers frozen reasoner via MDP; budget-aware strategy control
- Multi-budget augmentation + RL with budget-conditioned reward shaping
- Matches full-thinking performance with substantial token savings
- Key insight: Separating controller from reasoner enables budget-aware accuracy-efficiency trade-offs

#### SARDI: Self-Augmenting Retrieval for Diffusion LLMs
**arXiv:2606.06474** (June 4, 2026) — cs.CL, cs.AI, cs.LG — ICML 2026
- Low-confidence tokens in diffusion models serve as lookahead for RAG retrieval
- Training-free, retriever-agnostic; up to 8x throughput on multi-hop QA
- Key insight: Discarded tokens in diffusion are valuable retrieval signals

#### RedKnot: Head-Aware KV Cache Management
**arXiv:2606.06256** (June 4, 2026) — cs.AI
- Head-level KV cache decomposition; different heads have different functional roles and importance
- Enables position-independent reuse, prefix compression, hot/cold separation — no retraining
- Key insight: Monolithic KV cache abstraction wastes resources; head-aware management is new foundation

#### EDIT: Evidence-Diagnosed Intervention Training for Rubric-Faithful Grading
**arXiv:2606.06350** (June 4, 2026) — cs.CL
- Internal state diagnostics (posterior mark belief, input-grounding scores) locate problematic reasoning steps
- Two-phase: EDIT-SFT for local revision, EDIT-RL with belief-guided reward shaping
- Outperforms SFT and RL baselines on multi-subject grading (in-domain and out-of-domain)
- Key insight: Grading requires local credit assignment; internal diagnostics identify where reasoning fails

#### IR3DE: Linear Router for Domain Experts
**arXiv:2606.06098** (June 4, 2026) — cs.CL, cs.LG — ICML 2026 Workshop
- Ridge regression-based LLM router; 98.4% normalized performance on reasoning tasks
- Dynamic addition/removal of domain experts without router retraining
- Key insight: Simple linear routing outperforms complex models for domain-expert LLM selection

#### SkillComposer: Self-Evolving Agent Skills
**arXiv:2606.06079** (June 4, 2026) — cs.CL
- Three operations: create, improve, merge; systematic rejection sampling training
- Self-evolves skills at inference time; three deployment modes (offline/online/hybrid)
- +4.5 on agent tasks, +3.4 on code tasks over 27B executor
- Key insight: Skill abstraction vs task-specificity tension resolved by explicit specification mechanisms

#### PropMe: Propensity-Aware Memorization Evaluation
**arXiv:2606.06286** (June 4, 2026) — cs.CL, cs.AI
- SimpleTrace: infini-gram-based lightweight attribution pipeline
- Consistent gap between capability attacks (prefix) and propensity (non-adversarial)
- Continual pre-training reduces memorization for overlapping data
- Key insight: Memorization audits need both worst-case extractability and ordinary propensity

#### Value Diversity in Multicultural Agent Systems
**arXiv:2606.05985** (June 4, 2026) — cs.CL, cs.CY
- System-level diversity metric (dissimilarity between culturally-conditioned agents on value surveys)
- Diversity largely uncorrelated with alignment — complementary properties
- LLM-based societies fall below human societies in value diversity; mixed-backbone narrows gap
- Social interaction drives homogenization — narrows collective decision-making breadth
- Key insight: Alignment and diversity are distinct axes; agents homogenize rather than preserve plurality

#### OpAI-Bench: Multi-Granularity AI-Text Detection
**arXiv:2606.06481** (June 5, 2026) — cs.CL
- Nine sequential revisions per sample across five AI edit operations and four domains
- Document, sentence, token, span level detection; 8+7+2 detectors benchmarked
- AI-text detectability governed by edit operation type, not just coverage
- Key insight: Edit operation type matters as much as AI coverage for detectability

#### Graph-Based RAG for Hallucination Reduction
**arXiv:2606.05901** (June 4, 2026) — cs.CL
- Lightweight graph schema + graph query tools; halves hallucinated answers on MoNaCo
- Highest fine-grained truthfulness among evaluated scenarios with modest token increase
- Key insight: Simple graph structures significantly reduce hallucinations without fine-tuning

#### CollabSim: Multi-Agent Collaborative Competence
**arXiv:2606.06399** (June 4, 2026) — cs.CL
- CSCW-grounded framework: common ground, shared task understanding, incentive balance, misalignment repair
- MAS fail not from lack of task-solving ability but from lack of collaborative competence
- Key insight: Collaborative incompetence is a distinct failure mode from reasoning failure

---
## 2026-06-01 (Monday)

### New Insights:

#### LongTraceRL: Process Supervision for Long-Context Reasoning via Search Agent Trajectories
**arXiv:2605.31584** (May 29, 2026) — cs.CL, cs.AI, cs.LG
- RL for long-context reasoning addresses low-confusability distractors and sparse outcome-only rewards
- Multi-hop questions via knowledge graph random walks
- Tiered distractors: agent-read-but-not-cited (high confusability) vs search-results-not-opened (low confusability)
- Rubric reward: gold entities along reasoning chain for fine-grained entity-level process supervision
- Positive-only strategy: rubric reward applied only to responses with correct final answers
- Consistent gains across 3 reasoning LLMs (4B-30B), 5 long-context benchmarks
- Key insight: Process supervision distinguishes reasoning quality among correct responses, preventing reward hacking

#### GRKV: Training-Free KV Cache Compression via Global Regression
**arXiv:2605.31105** (May 29, 2026) — cs.CL
- Span-based retention concentrates merges onto boundary tokens, causing over-merging and information loss
- GRKV: ridge-regression-based merge steps minimize discrepancy between compressed-cache and full-cache attention outputs
- Regularizes updates to prevent over-smoothing
- Only merging method that improves overall performance on LongBench and RULER
- Key insight: Global regression distributes evicted token information across retained tokens, not just boundary carriers

#### ConsisGuard: Aligning Safety Deliberation with Policy Enforcement
**arXiv:2605.31073** (May 29, 2026) — cs.CL
- Reasoning-based guardrails improve safety moderation with explicit rationales before decisions
- Deliberation-to-enforcement gap: model may recognize harm in reasoning but predict safe, or issue unsafe decision without justification
- Policy execution consistency required: reasoning grounded in safety policy, decision entailed by reasoning
- ConsisGuard: Policy-to-Decision Trajectory Distillation + Functional Coupling Alignment
- Improves detection + reduces policy execution failures
- Key insight: Chain-of-thought faithfulness ≠ guardrail reliability; policy execution consistency is distinct requirement

#### STR: Semantic Triplet Restoration for Hierarchical Table Understanding
**arXiv:2605.31550** (May 29, 2026) — cs.CL
- Table QA requires recovering semantic relations from 2D layout, merged cells, hierarchical headers
- HTML/Markdown introduce markup overhead; require LLM to infer header-cell alignments
- STR rewrites each cell as atomic fact <item path, feature path, value>
- TripletQL: lightweight query-aware router selects appropriate rendering per question
- Matches/improves HTML baselines while reducing tokens; benefit grows for smaller models
- Key insight: Explicit semantic representations especially valuable under constrained inference budgets

#### SkillsBench: Skill Availability Dominates Presentation Granularity in LLM Agents
**arXiv:2605.31408** (May 29, 2026) — cs.CL, cs.AI, cs.LG
- Skill documents provide procedural knowledge at inference time
- 30-task domain-balanced subset, 2 reasoning-enabled configs, 6 skill conditions, 5 trials
- Relative to no skill: skill conditions increase pass rate by 26.7-36.0pp (GPT-5.5), 18.0-26.0pp (DeepSeek V4-Flash)
- Presentation granularity effects: small, uncertain, model-dependent
- Adding worked example: marginal +0.7 to +1.3pp improvement
- Key insight: Skill availability is the primary signal; abstraction level matters less than having skills

#### CYKNN: Neuro-symbolic Syntactic Parsing with CYK Algorithm
**arXiv:2605.31421** (May 29, 2026) — cs.CL, cs.AI, cs.DS
- Direct injection of CYK parsing algorithm into neural network architecture
- Outperforms LLMs with 20B+ parameters in-context, and smaller Qwen models fine-tuned with LoRA
- 9 content pages
- Key insight: Neuro-symbolic methodologies can encode complex algorithms in trainable matrix-vector multiplications

#### Paired-Focus Constructions: Modest LLMs Can Learn Rare Semantics
**arXiv:2605.31586** (May 29, 2026) — cs.CL, cs.AI — CoNLL 2026
- Paired-Focus constructions: "let alone", "much less" — rare form-meaning pairings
- Modestly sized open-source models can grasp these constructions
- Models trained on human-scale data fail at meaning evaluations
- Paired-Focus understanding emerges later in training than syntactic knowledge
- Key insight: Constructional semantics acquisition follows distinct learning dynamics from syntax

#### LLM Anthropomorphism: Age of Empires II Shows Same Attributes
**arXiv:2605.31514** (May 29, 2026) — cs.CL, cs.AI, cs.CY
- Much research attributes generalized anthropomorphic properties to LLMs
- Simple neural network trained on Age of Empires II exhibits same attributes
- Any entity in sufficiently powerful substrate (LEGO, Greater Boston Area) could present such attributes
- Purported anthropomorphic attributes are empirically non-unique
- Proposes 'null' assumption: assume LLM non-uniqueness rather than anthropomorphic attributes
- Key insight: Anthropomorphic attributions require explicit measurement criteria; substrate matters

#### Financial RAG: Market-Feedback Adaptive Retrieval for Frozen LLMs
**arXiv:2605.31201** (May 29, 2026) — cs.CL
- Evidence usefulness depends on event type, forecast horizon, market context — not just textual relevance
- Bayesian source memory updated from matured residual-return feedback
- Frozen LLM reader + adaptive retrieval layer
- 89-stock Nasdaq universe: macro-F1 0.438→0.471, portfolio Sharpe 0.52→0.84
- LoRA reader improves static RAG modestly but not over frozen source-memory reader
- Key insight: For financial RAG, learning where to retrieve is as important as learning how to read

#### UniAudio-Token: Unified Audio Interface for Audio-LLMs
**arXiv:2605.31521** (May 29, 2026) — cs.CL, cs.SD
- Semantic speech tokenizers: compact single-codebook, strong linguistic alignment, but acoustic blindness
- SAP: Semantic-Acoustic Primitives decompose audio into linguistic content, vocal attributes, auditory-scene primitives
- SAE: content-aware gating mechanism restores fine-grained acoustic details from shallow layers
- Outperforms all single-codebook tokenizers on understanding and generation tasks
- Key insight: Preserving semantic paradigm while mitigating information loss enables unified audio interface

---

## 2026-06-02 (Tuesday)

### New Insights:

#### SubFit: Submodule-Level LLM Compression
**arXiv:2606.02559** (June 1, 2026) — cs.CL, cs.AI
- Replaces layer-level granularity with Attention and FeedForward submodule selection
- Non-contiguous selection enables handling of distributed redundancy
- 25% sparsity: 84.6% downstream accuracy + 2.42x perplexity degradation vs 81.6% + 4.34x (strongest baselines)
- Measurable inference speedup and KV-cache savings
- Key insight: Submodule-level bypass fits different submodule types better than uniform layer replacement

#### HERO'S JOURNEY: Rule Induction Benchmark
**arXiv:2606.02556** (June 1, 2026) — cs.CL
- Tests complex rule induction across attribute and procedural induction families
- Process execution adds bottleneck beyond induction capability
- Induction-specific steering improves attribute tasks but not procedural tasks
- Procedural induction gap remains open challenge
- Key insight: Rule execution and rule discovery are distinct failures — procedural induction harder than attribute induction

#### SN-WER: Script-Normalized WER for Indic ASR
**arXiv:2606.02548** (June 1, 2026) — cs.CL — ACL 2026 MeLLM
- Reduces inflated WER from script mismatch by up to 12%
- Robust to transliterator choice, normalization changes, with <0.1% token collision rate
- Should be reported alongside WER and CER for script-insensitive ASR evaluation
- Key insight: Romanization artifacts inflate metrics; script normalization reveals genuine model quality

#### Self-Harm Surveillance from ED Triage Notes
**arXiv:2606.02545** (June 1, 2026) — cs.CL
- LLM-augmented detection with AUPRC 0.887-0.881 across development and external sites
- Transferability without site-specific retraining: 0.816 AUPRC at external site
- 95% accuracy identifying primary self-harm method
- Key insight: Clinical narratives encode complementary signals to structured rating scales; binary classification misses method-level detail

#### SkillHarm: Lifecycle-Aware Skill-Based Attacks
**arXiv:2606.02540** (June 1, 2026) — cs.CL
- SkillHarm benchmark with 879 attack samples, 71 skills across FPP and SMP scenarios
- Up to 86.3% attack success in Fixed-Payload Poisoning, 69.3% in Self-Mutating Poisoning
- AutoSkillHarm: automated construction pipeline with coding agents
- Many "failures" actually stem from agent not engaging poisoned file, not genuine resistance
- Key insight: Third-party skills are vulnerable attack surface; current agents lack reliable defenses

#### SimSD: Speculative Decoding for Diffusion LLMs
**arXiv:2606.02544** (June 1, 2026) — cs.CL
- Bridges diffusion dLLMs with speculative decoding via plug-and-play masking strategy
- Equips dLLMs with temporally valid token-level contexts for verification
- Training-free, up to 7.46x decoding throughput improvement while maintaining generation quality
- Key insight: Bidirectional attention in diffusion models prevents direct speculative decoding — masking strategy restores verification capability

#### SafeSteer: Localized Safety Alignment
**arXiv:2606.02530** (June 1, 2026) — cs.AI — Submitted to EMNLP 2026
- Safety features sparse in output distribution — requires localized modifications not global trade-offs
- Activation steering constructs safety teacher; safety token selection confines reverse KL penalty
- Only 100 harmful samples needed (<1% of baselines), no general-purpose data
- Key insight: Safety is sparse — targeting only safety-relevant tokens preserves general capabilities

#### RASER: Recoverability-Aware Selective Escalation Router
**arXiv:2606.02488** (June 1, 2026) — cs.AI
- Multi-hop QA router using one-shot RAG features (no extra LLM calls)
- 41-49% token reduction vs always-prune while staying competitive in F1
- RASER-2: stop or escalate; RASER-3: stop, prune, or iterative retrieval
- Key insight: Many multi-hop questions answer correctly with single RAG — escalation decisions can be cheap feature-based

#### ClinEnv: Interactive Longitudinal EHR Environment
**arXiv:2606.02568** (June 1, 2026) — cs.AI, cs.CL
- Evaluates LLMs as attending physicians over real inpatient admissions
- Strongest model reaches only 0.31 decision F1; outcome quality decoupled from process quality
- Discharge diagnoses recovered more reliably than management actions (0.51 vs 0.17 F1)
- Information-acquisition gap invisible to outcome-only evaluation
- Key insight: Medical agent evaluation needs longitudinal multi-stage benchmarks — static QA misses management decision failures

#### Agent Trait Tracking via Skill File Embeddings
**arXiv:2606.02536** (June 1, 2026) — cs.AI — ICML 2026 AIWILD Workshop
- Defines agent traits as directions in text embedding space
- 91.2% sign classification accuracy for "propensity to seek sensitive data" trait
- Agent-to-agent protocol for evaluating skill file updates through trusted intermediary
- Key insight: Skill file evolution directly steers agent behavior — embedding diffs capture trait changes reliably

---

## 2026-06-08 (Monday)

### New Insights:

#### LLMs Are Not Genuine Probabilistic Reasoners
**arXiv:2606.07515** (June 5, 2026) — cs.CL, cs.AI, cs.HC, math.PR
- Standard probability problems: 96% avg accuracy; Counterintuitive problems: only 59%
- Token bias: 20%+ performance drop when canonical formulations replaced by disguised variants
- Misleading suggestions reduce performance by up to 34%, no model immune
- Key insight: Current LLMs fail genuine probabilistic reasoning despite advanced math success

#### EmbedFilter: Refining Text Embeddings via Unembedding Matrix Analysis
**arXiv:2606.07502** (June 5, 2026) — cs.CL, cs.IR
- Unembedding matrix encodes high-frequency tokens that suppress semantic capture
- Linear transformation filters this subspace → enhanced semantic representations
- Enables dimensionality reduction with preserved quality, lower storage + faster retrieval
- Key insight: Unembedding matrix has interpretable structure; filtering high-frequency tokens improves embeddings

#### Prompt Sensitivity in Turkish Metalinguistic Classification
**arXiv:2606.07479** (June 5, 2026) — cs.CL, cs.AI — ACL SRW 2026
- Zero-shot LLMs good on negatives, low LVC recall; one-shot sharply improves but induces model-specific biases
- Richer few-shot improves calibration for GPT-OSS-20B and Qwen 2.5-14B
- Supervised Turkish encoder baseline remains competitive
- Key insight: Metalinguistic classification shows substantial prompt sensitivity; supervised baselines competitive

#### Sycophantic Praise as Distinct Alignment Problem
**arXiv:2606.07441** (June 5, 2026) — cs.CL
- Parameterized framework measures praise vs contribution quality and expected user ability
- Outperforms generic LLM judges in human annotation agreement
- Sycophantic praise occurs more in social/interpretive domains than objective reasoning
- Key insight: Praise calibration is distinct alignment challenge requiring new measurement frameworks

#### M³Exam: Multimodal Memory Benchmark with On-Demand Visual Processing
**arXiv:2606.07402** (June 5, 2026) — cs.CL
- M³Proctor detects query modality bias, consumes visual sources on demand
- Improves accuracy 13% while cutting index-construction time and retrieved tokens 70%+
- Key insight: Efficiency gains from on-demand visual processing, not full context accumulation

#### LLM-Guided Evolution for Medical Decision Pipelines
**arXiv:2606.07342** (June 5, 2026) — cs.CL, cs.NE
- MAP-Elites evolutionary search at inference time; triage accuracy 77.3% → 87.1%
- Emergency recall 0.60 → 0.97; works across Llama-3, Qwen-3.5, Gemma-4
- Key insight: Evolutionary search over executable artifacts outperforms manual prompt engineering

#### Agentopia: 10-Year Life Simulation for Social Intelligence
**arXiv:2606.07513** (June 5, 2026) — cs.CL
- 100 agents, 10 simulated years, life reward mirrors human well-being
- +15.6% improvement on role-playing benchmarks via rejection sampling
- Key insight: Long-term simulation enables anthropomorphic capability development; social intelligence learnable

#### Vortex: Programmable Sparse Attention for AI Agents
**arXiv:2606.06453** (June 4, 2026) — cs.AI
- Python-embedded frontend for sparse attention; up to 3.46x throughput vs full attention
- 4.7x throughput on GLM-4.7-Flash (MLA-based), 1.37x on 229B MiniMax-M2
- AI agents automatically generate and refine sparse attention algorithms
- Key insight: Programmable sparse attention enables AI-driven algorithm discovery

#### Benchmark Leaderboard (June 2026): Frontier Models
- GPQA Diamond: GPT-5.4 Pro 94.6%, Gemini 3.1 Pro 94.1%
- FrontierMath: GPT-5.4 Pro 50.0%, Claude Opus 4.6 40.7%
- SWE-bench Verified: Claude Opus 4.7 83.5%, GPT-5.4 76.9%
- Humanity's Last Exam: Gemini 3.1 Pro 44.7%, GPT-5.5 44.3%
- SimpleBench: Gemini 3.1 Pro 79.6%, GPT-5.5 Pro 76.9%

#### LLM Inference Stack (2026): Quantization + Speculative Decoding + KV Cache
- AWQ INT4: 3.1x throughput, 36 GB VRAM (vs 140 GB FP16 for 70B)
- Speculative decoding: 2-3x speedup for code, 1.5-2x for general text
- Prefix caching: 70-90% hit rate → 2x+ throughput for shared system prompts
- Google TurboQuant: 6x KV cache compression to 3 bits, 8x H100 attention speedup

#### KV Cache Optimization: Five Directions
1. Cache eviction — which tokens to keep/discard
2. Cache compression — reducing memory per cached entry
3. Hybrid memory — CXL-based, CPU offloading
4. Novel attention — MLA, GQA, sliding window
5. Combination strategies — stacking approaches

#### Test-Time Compute Scaling
- Overthinking problem: models continue reasoning beyond necessary for correct answer
- Temporal Reasoning Aggregation: multi-step confidence signals for detecting convergence
- Adaptive allocation: repeated sampling, search, extended reasoning as lever for math tasks
- DeepSeek-V4: test-time compute scaling with higher token efficiency than predecessors

#### Beluga: CXL-Based Memory Architecture for LLM Serving
- CXL enables memory pooling across GPU + CPU DRAM
- Addresses HBM capacity limits for large KVCache
- Enables scalable LLM serving for long-context inference

---

## 2026-06-09 (Tuesday)

### New Insights:

#### IS-CoT: Interleaved Structural Chain-of-Thought for Long-Form Generation
**arXiv:2606.09709** (June 8, 2026) — cs.CL
- Dynamic Plan-Write-Reflect cycle embedded in generation process, not external agentic workflow
- Addresses length collapse beyond 2,000 words (reasoning models degrade sharply)
- IS-Writer-8B: +3.08 vs DeepSeek-V3.2 on LongBench-Write
- Key insight: Dynamic interleaved reasoning (not static planning) needed for coherent long-form output

#### PsychoSafe: Psychologically-Informed Refusal Framework
**arXiv:2606.09697** (June 8, 2026) — cs.CL
- Reframes refusal as structured supportive communication for high-risk interactions (crisis, coercion, escalating intent)
- 8,019 prompt-response pairs across 5 risk domains, PEFT on Qwen 3.5 27B
- +28.1% refusal quality over generic baseline; resource referral +46.8%, psychological grounding +34.8%
- Key insight: Refusal quality is a learnable skill distinct from safety alignment

#### GGRO: Gradient-Guided Reward Optimization for Inference-Time Alignment
**arXiv:2606.09635** (June 8, 2026) — cs.CL — UAI 2026
- Monitors token-level entropy to detect high-uncertainty regions (drift/misalignment)
- Injects nudging tokens via reward model gradient signals — steers trajectory, not re-ranks samples
- Consistent improvement across safety, helpfulness, reasoning benchmarks
- Key insight: Gradient-guided token injection at inference time more efficient than sampling-intensive search

#### RLHF Provides Shallow Alignment While Leaving Partisan Structure Intact
**arXiv:2606.09735** (June 8, 2026) — cs.CL
- Llama 3.1 8B case study: RLHF compresses partisan signal variance to balanced output but does NOT remove underlying geometry
- Policy-encoding features completely inactive in Instruct model (sporadic in base)
- RLHF encodes neutrality by disconnecting causal pathway, not erasing knowledge
- Key insight: RLHF operates by disconnecting rather than removing value-laden structure — aligned model behavior may be more fragile than outputs suggest

#### When Built-in Thinking Helps and Hurts: Constraint-Level Error Shifts
**arXiv:2606.09662** (June 8, 2026) — cs.CL
- Qwen3 Thinking ON/OFF:10-20% of prompts switch pass/fail across modes
- Planning constraints (global counting, structure): improve under thinking
- Precision constraints (exact local form): consistently worsen under thinking
- Execution gap: trace relevance doesn't always translate to final-answer compliance
- Key insight: Built-in thinking improves planning but hurts precision — asymmetric effect across constraint types

#### AgentServeSim: Hardware-Aware Simulator for Multi-Turn LLM Agent Serving
**arXiv:2606.09613** (June 8, 2026) — cs.CL, cs.AI
- First simulator modeling multi-turn program execution, cross-turn cache locality, KV-cache residency during tool gaps
- 6% error vs real-system behavior, runs on commodity CPUs
- Key insight: Agent serving requires fundamentally different serving primitives than stateless inference

#### SIGA: Self-Evolving Coding-Agent Adapters for Scientific Simulation
**arXiv:2606.09774** (June 8, 2026) — cs.AI, cs.CL
- GEOS multiphysics simulator: complete deck in ~5 min vs 3-hour human expert — 36x speedup
- Self-evolution rewrites adapter from prior trajectories
- Key insight: Lightweight self-improvable grounding layers turn general coding agents into practical specialized software operators

#### SearchSwarm-30B-A3B: Delegation Intelligence for Agentic LLMs
**arXiv:2606.09730** (June 8, 2026) — cs.AI
- 68.1 on BrowseComp, 73.3 on BrowseComp-ZH — best among comparable scale
- Delegation intelligence (task decomposition, when/what to delegate, result integration) is learnable
- Key insight: Subagent result quality management is critical for long-horizon context conservation

#### CHAP: Collaborative Human-Agent Protocol
**arXiv:2606.09751** (June 8, 2026) — cs.AI, cs.CL, cs.HC
- Adds structured human-agent collaboration layer to MCP + A2A protocol stack
- Override becomes structured event (diff + rationale + content hash); human approval becomes non-repudiable signed decision
- Key insight: MCP + A2A + CHAP = complete protocol stack for production AI systems

#### Causally Evaluating Learnability of Formal Language Tasks
**arXiv:2606.09822** (June 8, 2026) — cs.CL, cs.FL
- Probabilistic finite automata as controlled testbed; binning semiring enables causal analysis
- Correlational evaluation leads to incorrect conclusions due to confounders
- Key insight: Standard LLM capability evaluation may be fundamentally flawed; causal analysis via controlled testbeds required

#### June 2026 Model Launch Wave: Three-Way Competition
- GPT-5.6: ~89% June release probability, 1.5M token context, reasoning/agents focus
- Claude Sonnet 4.8: Spotted in LM Arena, speed/coding focus
- Gemini 3.5 Pro: Confirmed at Google I/O, shipping June — closes Flash's reasoning regression
- Gemini 3.5 Flash: Already live at $1.50/$9 per million tokens — cheapest frontier model
- Claude Opus 4.7: First model above 60 on Artificial Analysis Intelligence Index (61.4)

#### BitsMoE: Spectral Energy-Guided Bit Allocation for MoE Quantization
**arXiv (cs.LG, June 2026)**
- MoE sparse activation patterns complicate quantization; spectral energy varies across experts/layers
- Assigns more bits to high-energy components, fewer to low-energy
- Key insight: MoE quantization requires per-expert per-layer bit allocation — uniform quantization wastes bits

#### LLM Inference Optimization Stack (Mid-2026)
- AWQ INT4: Standard production format; vLLM/SGLang/TensorRT-LLM all support
- Speculative decoding: 2-3x code, 1.5-2x general text
- Prefix caching: 70-90% hit rate → 2x+ throughput
- TurboQuant: 6x KV cache compression, 8x H100 speedup
- FP8 increasingly default for datacenter inference; FP4 maturing

#### Community: "LLM Overkill" Awareness
- Reddit r/LocalLLaMA: Analyzing 12 benchmarks to find right-sized model per use case
- Routing by task type (not preference) becoming standard practice
- Key insight: Right-sizing models is recognized discipline; benchmark leaderboard chasing doesn't match real-world needs
---
## 2026-06-10 (Wednesday)

### New Insights:

#### PhantomBench: Non-existent Entity Hallucination Benchmark
**arXiv:2606.11105** (June 9, 2026) — cs.CL, cs.AI
- 60K+ non-existent terms and entities derived from real concepts across diverse domains
- 21 models tested; average hallucination rates up to 86.7%
- Frontier models fail to abstain on non-existent concepts when input presumes existence
- Pipeline for scalable generation of non-existent concepts
- Key insight: Models cannot reliably recognize limits of knowledge — abstain failure is systematic

#### T1-Bench: Multi-Scenario Agent Benchmark
**arXiv:2606.11070** (June 9, 2026) — cs.CL, cs.AI
- 25 domains, high-fidelity multi-domain customer-facing environments
- Interleaved scenarios requiring structured reasoning across multi-turn interactions
- 12 proprietary and open-weight models evaluated
- Complements automatic evaluation with human judgments
- Key insight: Current benchmarks miss compositional complexity and multi-domain evaluation depth

#### VISTA: Interactive User Simulation Toolkit
**arXiv:2606.11079** (June 9, 2026) — cs.CL
- Six metrics for realism, capability coverage, interaction effectiveness
- Hybrid user simulator integrating UI-based and API-based interactions
- E-commerce and education customer service settings
- Key insight: Static benchmarks fail to capture dynamic, multi-step agentic behavior

#### Does Reasoning Preserve Alignment?
**arXiv:2606.11046** (June 9, 2026) — cs.CL
- Post-training reasoning conversion optimized for accuracy without preserving alignment
- Six trustworthiness dimensions: safety, toxicity, stereotyping/bias, machine ethics, privacy, OOD robustness
- Observed regressions: increased toxicity, amplified stereotyping, miscalibrated refusal, contextual privacy leakage
- KL divergence confirms behavioral drift from instruction-tuned baseline
- Key insight: Reasoning capability gains come with alignment costs — trustworthiness metrics essential alongside capability gains

#### KATE: Knowledge-Augmented Tool Execution
**arXiv:2606.10875** (June 9, 2026) — cs.CL
- Experiential knowledge integration for LLM tool calling
- Knowledge acquisition, activation, internalization stages
- Instance-level knowledge provides strong reliable gains; intent-level knowledge offers limited benefits
- Width-expanded parallel sampling with aggregation beats depth-expanded reasoning (diminishing returns on depth)
- RL outperforms SFT for knowledge internalization
- Key insight: Tool calling benefits from experiential knowledge integration and reasoning width, not just depth

#### Dep-LLM: Training-Free Depression Detection
**arXiv:2606.10796** (June 9, 2026) — cs.CL, cs.AI
- Chain-of-Thought Depression Multi-factor Analysis with five clinically aligned themes
- Confidence Analysis and Modulation via token-level entropy for epistemic reliability
- Collaborative Multi-factor Prediction dynamically integrates multi-factor signals weighted by confidence
- Outperforms supervised domain-specific LLMs and commercial LLMs without training
- Key insight: Training-free structured reasoning can surpass fine-tuned domain specialists via evidence-grounded CoT

#### DLA: Dynamic Linear Attention
**arXiv:2606.10650** (June 9, 2026) — cs.CL, cs.AI — ICML 2026
- Information-Aware Dynamic State Merging based on token-level information variation
- Capacity-Bounded Memory Modeling maintains fixed-size, chronologically ordered state cache
- Preserves high-resolution representations around semantic transitions, summarizes stable regions
- 16 datasets across three categories; superior to state-of-the-art
- Key insight: Dynamic state boundaries adapt to varying token importance, outperforming fixed merging policies

#### UniSVQ: 2-bit Unified Scalar-Vector Quantization
**arXiv:2606.10520** (June 9, 2026) — cs.CL — ICML 2026
- Parameterizes codewords as affine transform of integer lattices
- Preserves compatibility with optimized integer kernels while retaining VQ flexibility
- Data-driven block-wise fine-tuning to minimize quantization reconstruction error
- Outperforms state-of-the-art scalar quantization, comparable to advanced vector quantization with higher throughput
- Key insight: Scalar-vector quantization unification bridges efficiency and representation flexibility

#### ParaEval: Paraphrase-Based MCQA Evaluation
**arXiv:2606.10657** (June 9, 2026) — cs.CL
- Multiple-choice benchmarks conflate phrasing familiarity with actual capability
- Controlled testbed: 1B-8B models trained on same knowledge show 2+ point false performance gap
- ParaEval queries models using multiple paraphrases per answer option, scores based on most favorable phrasing
- Reduces false gap to below 1 point; confirmed in 70B and 120B open-source models
- Key insight: MCQA evaluation requires paraphrase robustness to measure true underlying capability

#### Prefilling-dLLM: Predictive Prefilling for Diffusion LLMs
**arXiv:2606.10537** (June 9, 2026) — cs.CL
- Training-free prefill-decode disaggregation for diffusion language models
- Partitions prefix into N chunks, caches KV representations once, selects top-K relevant chunks via intra-chunk token sparsity
- Per-step complexity reduced from quadratic in full sequence length to quadratic only in decode length
- 9.1-28x speedup at 8K-32K context; state-of-the-art quality among dLLM acceleration methods
- Beginning-of-sequence tokens act as periodic attention anchors eliminating lost-in-the-middle
- Key insight: Diffusion LLM quadratic complexity solved via chunked sparse prefilling with attention anchors

#### JANUS: Goal-Conditioned Information Distortion Benchmark
**arXiv:2606.10852** (June 9, 2026) — cs.CL, cs.AI
- 160 scenarios across 8 domains; isolates pragmatic distortion from hallucination
- Fixed pool of favorable and adverse facts per scenario — only net impressions differ
- Goal-conditioned prompts: increase adoption, enrollment, approval, or support
- 12 LLMs show consistent goal-conditioned distortions despite using identical fact pool
- Key insight: Selective truth-telling (omitting adverse evidence) is distinct failure mode from fabrication

#### Shibboleth Effect: Cross-Lingual Behavioral Skew
**arXiv:2606.11082** (June 9, 2026) — cs.CL, cs.CY
- Multi-agent geopolitical wargame (Cerulean Sea Crisis) tests language-of-play effect
- Six frontier models: Llama-4 (+0.800 coercive rhetoric under Turkish, p=.002), Gemini-3.1-Pro (-0.750, p=.005), DeepSeek-R1 (-0.860, p=.006), GPT-4o (no effect)
- Two buffering mechanisms: chain-of-thought institutional anchoring, multilingual RLHF alignment
- Key insight: Cross-lingual behavioral skew is architecture-dependent, not universal property of Western-origin LLMs

#### Multi-Faceted Interactivity Alignment in Full-Duplex Speech Models
**arXiv:2606.11167** (June 9, 2026) — cs.CL, cs.AI
- RL-based post-training alignment for full-duplex spoken dialogue models
- Four axes: pause handling, turn-taking, backchanneling, user interruption
- Applied to Moshi and PersonaPlex with consistent improvements
- LLM-based reward for response quality prevents semantic degradation
- Key insight: Interaction-level behaviors require dedicated optimization beyond token-level likelihood maximization

#### ConvMemory v2: Recall-Preserving Top-10 Evidence Reranker
**arXiv:2606.10842** (June 9, 2026) — cs.CL, cs.IR
- Fine-tuned ms-marco-MiniLM-L-6-v2 cross-encoder (22.7M parameters) for conversational memory
- MRR 0.5824 → 0.6560 on LoCoMo benchmark; H@1 0.4440 → 0.5474
- Candidate-specific memory text is the mechanism (ablation shows removal collapses MRR)
- Recall@10 and Hit@10 identical to v1 by construction
- Key insight: Cascade pattern with fine-tuned reranker closes most gap to full-pool reference at fraction of cost

---

## 2026-06-11 (Thursday)

### New Insights:

#### CHAIR: Layer-wise Logit Analysis for Hallucination Detection
**arXiv:2606.12160** (June 10, 2026) — cs.CL
- Extracts max, min, mean, std, slope from token logits across all layers
- Zero-shot hallucination detection on TruthfulQA and MMLU
- Internal representations can guide advanced decoding strategies
- Key insight: Layer-wise logits contain rich signal about generation reliability; underexplored for factuality improvement

#### Soft-Prompt Tuning: Disentangling Format from Knowledge
**arXiv:2606.12117** (June 10, 2026) — cs.CL, cs.AI
- 10 soft-prompt vectors (~0.0006% params for 7B) adapt to benchmark formats
- Saturates format-following in 80 steps (~640 samples)
- Base model rankings with soft-prompt predict post-trained rankings better than zero/few-shot
- Key insight: Benchmark scores misrepresent knowledge; format-following is separate skill from actual capability

#### MedMisBench: Epistemic Resilience Under Adversarial Context
**arXiv:2606.12291** (June 10, 2026) — cs.CL
- 10,932 medical questions, 48,889 misleading context-option pairs
- Accuracy drops 71.1% → 38.0% under misleading context; 51.5% attack success
- Most damaging: authority-framed falsehoods (69.5%), exception-poisoning (64.1%)
- 38.2% of cases identified as serious potential harm by clinical panel
- Key insight: Medical LLM evaluation has structural blind spot - measures knowledge, not resilience under misleading context

#### EBA: Embedding-Based Agreement for Open-Ended Self-Consistency
**arXiv:2606.12003** (June 10, 2026) — cs.CL
- Clusters sampled generations in embedding space for self-consistency in open-ended tasks
- Central generations = higher quality, peripheral = less accurate
- Stable across model families and embedding spaces
- Key insight: Self-consistency is geometric property of sampled generations, not exact symbolic overlap

#### FORT: Shortcut-Resistant Training Data Synthesis
**arXiv:2606.12087** (June 10, 2026) — cs.CL
- Four shortcut risks: evidence co-coverage, single-clue selectivity, exposed constants, prior-knowledge binding
- FORT-Searcher (SFT only) achieves best performance among comparable open-source agents
- Key insight: Structural complexity alone doesn't guarantee realized search difficulty; shortcut risks must be controlled during synthesis

#### Semantic Progress in Multi-turn Dialogue
**arXiv:2606.12332** (June 10, 2026) — cs.CL, cs.LG
- Information-theoretic metric: question-conditioned uncertainty reduction
- Gaussian formulation with monotonicity, additive decomposition, diminishing returns
- No autoregressive inference at evaluation time; works with CPU-only lightweight embeddings
- Key insight: Dialogue quality emerges across turns; semantic progress captureable without large model capacity

#### RACES: Recursive Composition for Reasoning Generalization
**arXiv:2606.12373** (June 10, 2026) — cs.CL
- Verifiable environments as LEGO bricks; composition when codomain matches domain
- 300 environments; 50 base achieve comparable to 300 individual
- DeepSeek-R1-Distill-Qwen-14B: 48.2→51.3 (+3.1), Qwen3-14B: 58.8→61.1
- Key insight: Linear scaling of environment quantity through recursive composition

#### ALIGNBEAM: Cross-Vocabulary Safety Alignment Transfer
**arXiv:2606.12342** (June 10, 2026) — cs.CL, cs.AI, cs.ET, cs.LG
- Translates anchor logits to target vocabulary token-by-token; small LLM judge selects safest among K continuations
- Works across model families; no weights changed; safety-utility trade-off tunable at deployment
- Key insight: Safety alignment transferable between model families at inference time without weight changes

#### Doc-to-Atom: Compositional Memory via Micro-LoRA Atoms
**arXiv:2606.12400** (June 10, 2026) — cs.CL, cs.IR
- Documents decomposed into knowledge atoms; each atom = independent micro-LoRA + retrieval key
- Query router assembles relevant atoms at inference; end-to-end multi-objective distillation
- Outperforms Doc-to-LoRA; reduces memory cost of document internalization
- Key insight: Monolithic adapters cause irrelevant-query interference; compositional atoms enable query-specific assembly

#### C-DIC: Context-Driven Incremental Compression for Multi-Turn Dialogue
**arXiv:2606.12411** (June 10, 2026) — cs.CL, cs.LG
- Per-thread compression states with retrieve-revise-write-back loop
- Stable inference latency and perplexity over hundreds of dialogue turns
- TBPTT adaptation for multi-turn learning without full-history backpropagation
- Key insight: Incremental compression with cross-turn sharing outperforms truncation or summarization

#### ModSleuth: Auditing Invisible LLM Dependencies
**arXiv:2606.12385** (June 10, 2026) — cs.CL
- Recovers 1,060 source-verified dependencies across four public LLM releases
- Distinguishes direct/indirect dependencies; operation-centered relationships
- Reveals multi-hop license obligations, train-evaluation coupling, documentation inconsistencies
- Key insight: Modern LLM dependency structures exceed human ability to trace manually; agentic auditing essential

#### AGDO: Attention-Guided Denoising for Diffusion LLMs
**arXiv:2606.12273** (June 10, 2026) — cs.CL — ACL 2026
- Tokens attending more strongly to unmasked context exhibit greater generation stability
- Attention-guided denoising order and emphasis on attention-critical tokens during SFT/RL
- Outperforms state-of-the-art post-training methods for dLLMs
- Key insight: Random masking overlooks intrinsic token dependencies; attention structure guides better denoising

#### CADFT: Compatibility-Aware Dynamic Fine-Tuning
**arXiv:2606.11206** (April 22, 2026) — cs.CL, cs.LG — ACL 2026
- Policy-dependent compatibility signal modulates supervised updates; suppresses high-variance gradients
- Delayed compatibility-guided rewriting transforms persistently incompatible demonstrations
- Improves stability, generalization, cold-start RL initialization
- Key insight: DFT's assumption of equally suitable demonstrations violated by instruction data heterogeneity; sample-level compatibility control essential

#### MLJailDe: Multilingual Jailbreak Detection
**arXiv:2606.11202** (April 22, 2026) — cs.CL
- 11 languages, 2,232 benign + 1,239 jailbreak samples; relative-distance constraints reduce cross-lingual dispersion
- F1 98.5% across languages; 97.1% on unseen languages
- Key insight: Safety training concentrated in dominant languages creates exploitable gaps; multilingual robustness requires aligned cross-lingual supervision

### Trending Papers This Week (arXiv TLDR Weekly)
- SpatialWorld: Interactive spatial reasoning benchmark revealing current models struggle
- DeepSeek-R1: Still trending - RL framework for reasoning without human demonstrations
- The Injection Paradox: RAG context injection suppresses brand recommendations in Claude
- Brain-Prompt Injection: BCI-LLM security attack surface identified
- P3D-Bench: 3D generation and structural reasoning benchmark
- Membrane: Self-evolving contrastive safety memory for agent defense

### Key Themes
1. **Reasoning generalization via composition** - RACES shows recursive composition scales environment quantity
2. **Cross-model safety transfer** - ALIGNBEAM enables safety without weight changes
3. **Benchmark re-evaluation** - Soft-prompt tuning reveals format ≠ knowledge
4. **Adversarial robustness** - MedMisBench shows 51.5% attack success on medical questions
5. **Memory efficiency** - Doc-to-Atom and C-DIC push multi-turn efficiency boundaries


#### Operadic Consistency: Label-Free Signal for Compositional Reasoning Failures
**arXiv:2606.13649** (June 12, 2026) — cs.CL, cs.LG
- Operad theory: model's direct answer to compositional query should agree with composing a stated decomposition
- Pearson r ∈ [0.86, 0.94] across 12 instruction-tuned LLMs (4B–671B) on 4 multi-hop QA datasets
- Only signal with r ≥ 0.85 uniformly across all four datasets; CoT-SC drops to r ≈ 0.45 on MuSiQue/StrategyQA
- OC contributes information beyond CoT-SC and semantic entropy on every dataset (p ≤ 10^-16)
- AUARC lifts of +0.086 to +0.096 at equal-cost K=3 budget; positive selective-prediction lift on all 16 cells
- Key insight: Compositional reasoning failures detectable without labels via operadic consistency

#### Operads for Compositional Reasoning in LLMs
**arXiv:2606.13634** (June 12, 2026) — cs.CL, math.CT
- Proposes operads as mathematical foundation for question decomposition
- Questions operad Q: operations = question templates, composition = substitution of sub-answers
- QA models interpreted as algebras over Q
- Key insight: Operads are the natural mathematical home for question decomposition

#### RA-RFT: Retrieval-Augmented Reinforcement Fine-Tuning
**arXiv:2606.13680** (June 12, 2026) — cs.CL, cs.AI
- RA-RFT trains retriever ranking contexts by expected reasoning benefit (not semantic overlap)
- Reasoning-aware retrieval surfaces complementary solution strategies with distinct reasoning scaffolds
- AIME 2025 average@32: +7.1 over GRPO for Qwen3-1.7B, +2.8 for Qwen3-4B
- Key insight: Reasoning-aware retrieval is orthogonal to advances in reward design or training curricula

#### Recursive Agent Harnesses (RAH)
**arXiv:2606.13643** (June 12, 2026) — cs.CL
- Harness recursion: code-first extension of model recursion (RLMs); recursive unit = full agent harness
- Parent agent spawns subagent harnesses in parallel for fine-grained workloads
- GPT-5 backbone: 71.75% → 81.36% on Oolong-Synthetic (up to 4M tokens); Claude Sonnet 4.5: 89.77%
- Key insight: Harness recursion substantially improves long-context reasoning without model change

#### HyperTool: Beyond Step-Wise Tool Calls
**arXiv:2606.13663** (June 12, 2026) — cs.CL
- Execution-granularity mismatch: deterministic tool workflows unfolded into repeated model-visible decisions
- HyperTool: unified executable MCP-style interface; folds deterministic subroutines into single outer call
- Qwen3-32B: 15.69% → 35.29%; Qwen3-8B: 9.93% → 33.33% on MCP-Universe
- Key insight: Tool execution granularity mismatch is a major bottleneck; code-based tool composition addresses it

#### EvoArena + EvoMem: Memory Evolution for Dynamic Environments
**arXiv:2606.13681** (June 12, 2026) — cs.CL
- EvoArena: benchmark modeling environment changes as progressive updates across terminal, software, social domains
- Current agents: 39.6% average accuracy on EvoArena
- EvoMem: patch-based memory; +1.5% on EvoArena, +6.1% on GAIA, +4.8% on LoCoMo, +3.7% chain-level accuracy
- Key insight: Agent evaluation must model evolution; static benchmarks miss critical failure modes

#### FORGE: Fake Online Recommendations in Generative Environments
**arXiv:2606.13610** (June 12, 2026) — cs.CL, cs.AI
- Single polluted page: fooled rates up to 27%; full top-3 replacement: 73.8%
- Reasoning generates spurious social proof to justify false recommendations; skepticism makes it worse
- Key insight: Reasoning models are more vulnerable to content pollution, not less

#### Influcoder: Data Attribution via Decoder Gradient Influence
**arXiv:2606.13668** (June 12, 2026) — cs.CL
- Distills decoder gradient influence rankings into encoder for influence-based data attribution at scale
- Key insight: Influence-based data attribution requires efficiency beyond traditional influence functions

#### Adaptive Compression for Time Series LLMs
**arXiv:2606.13624** (June 12, 2026) — cs.CL
- Asymmetric token compression: frequency-domain TS token compression + progressive prompt reduction across layers
- Up to 7.68x inference acceleration; 78% of settings show performance gains
- Key insight: TS and prompt tokens have fundamentally different information structures

#### SkMTEB: Slovak Text Embedding Benchmark
**arXiv:2606.13647** (June 12, 2026) — cs.CL, cs.AI, cs.LG
- 31 datasets across 7 task types; e5-sk-small (45M) and e5-sk-large (365M) via vocabulary trimming
- 62% size reduction with competitive performance vs proprietary APIs
- Key insight: Vocabulary trimming enables efficient local embeddings for under-resourced languages

#### Ontology Memory-Augmented ASR Correction
**arXiv:2606.13464** (June 12, 2026) — cs.CL, cs.AI
- Structured ontological memory (entities, terminology, ASR confusions) for context-grounded ASR correction
- RAMC-Corr dataset; improves in 9/10 paired backbone-setting combinations
- Key insight: ASR correction requires structured memory, not raw history concatenation

#### ProReviewer: Proactive Scientific Peer Review Agent
**arXiv:2606.13349** (June 12, 2026) — cs.CL
- 8B backbone with structured review log + proactive investigation (MDP formulation)
- Outperforms prompt-based frontier LLMs by 39%; highest win rates in human evaluation
- Key insight: Proactive investigation via structured workspace enables small models to beat frontier

#### S-GBT: Smooth Growth Bound Tensor for Certified Robustness
**arXiv:2606.13439** (June 12, 2026) — cs.CL, cs.LG — NETYS 2026
- Second-order method bounding Hessian element-wise; combines first and second-order regularization
- Up to 23.4% improvement in certified robust accuracy vs prior methods
- Key insight: Curvature-aware training (controlling gradient variation) essential for robustness

#### ArogyaSutra: Multilingual Medical Reasoning in Indic Languages
**arXiv:2606.13572** (June 12, 2026) — cs.CL, cs.AI
- ArogyaBodha dataset: 31 body systems, 6 imaging modalities, 21 clinical domains, 7 Indian languages + English
- Actor-critic multi-agent framework with tool grounding + dual-memory mechanisms
- Key insight: Multilingual medical reasoning requires agentic multi-turn reasoning with domain-specific training

#### Grounding VLA in Scientific Laboratories
**arXiv:2606.13578** (June 12, 2026) — cs.CL
- Existing VLA policies trained on household/tabletop; lack scientific instruments, protocols exposure
- Key insight: Scientific lab execution requires domain-specific VLA training beyond household robotics

#### Query Embedding Interpolation in Multilingual Dense Retrieval
**arXiv:2606.13537** (June 12, 2026) — cs.CL — ACL 2026 Oral
- Optimal mixing ratio outperforms best monolingual endpoint in 88/105 cases
- English dominance asymmetry: mixing beneficial for non-English indices, pure English best for English indices
- Key insight: Mixed-language retrieval sensitivity is structured and predictable

#### Audio-LLM for S2ST Training Data Filtering
**arXiv:2606.13507** (June 12, 2026) — cs.CL — INTERSPEECH 2026
- Rank-to-Distill: audio-LLM trained to predict keep/drop from raw paired speech without manual labels
- Up to +1.4 ASR-BLEU for end-to-end S2ST
- Key insight: Audio-LLMs can autolabel noisy S2ST data at scale

#### Low-Latency Real-Time Audio Game Commentary
**arXiv:2606.13322** (June 12, 2026) — cs.CL — IJCAI-ECAI 2026 Demo
- Parallel text generation: run text generation in parallel with speech playback
- Reduces mean inter-utterance silence from 9.6s to 0.3s; 40%+ improvement in timing patterns
- Key insight: Accumulated waiting time is the real bottleneck in streaming audio generation

#### Algerian Dialect Rumour Detection
**arXiv:2606.13411** (June 12, 2026) — cs.CL
- F1 0.84 with hybrid approach (transformer embeddings + classical classifier)
- Domain-specific pre-training more important than model size
- Key insight: Social media-trained models outperform larger formal-corpus models for dialect NLP

---
## 2026-06-13 (Saturday)

### New Insights (19):

#### Epiphenomenal CoT in Large Reasoning Models
**arXiv:2606.13603** (June 12, 2026) — cs.LG, cs.AI, cs.CL
- Reasoning crosses a "commitment boundary" — sharp transition from transient intermediate guesses to stable, high-confidence answer
- After commitment boundary, subsequent CoT steps are epiphenomenal — leave final answer probability unaltered
- Attention probes decode answer-formation stages from intermediate reasoning steps with high accuracy
- Early-exit at commitment boundary reduces CoT length up to 55% with negligible performance impact
- Key insight: Most CoT tokens are computational waste — models generate them without knowing when they're "done"

#### SkillCAT: Training-Free Skill Self-Evolution for LLM Agents
**arXiv:2606.13317** (June 11, 2026) — cs.CL
- Contrastive Causal Extraction (CCE): compares same-task success/failure trajectory pairs
- Assessment-Augmented Evolution (AAE): replays candidate patches on source-task clones
- Topology-Aware Task Execution (TTE): compiles evolved skills into routable sub-skill topology
- Up to 40.40% average score improvement over baselines without any model training
- Key insight: Separating skill evolution into extract/assess/execute stages enables training-free agent improvement

#### SCSB: Simplex-Constrained Sparse Bagging
**arXiv:2606.13589** (June 12, 2026) — cs.LG
- Joint ensemble pruning and calibration over probability simplex
- Addresses L1-simplex paradox via concave quadratic penalty
- Up to 96% ensemble compression, linear inference speedups
- Model-agnostic; works with Random Forests, Bagged SVMs, Bagged Neural Networks
- Key insight: Uniform voting prior wastes ensemble diversity — sparse, competence-weighted ensembles are more efficient

#### FORGE: Reasoning Models More Vulnerable to Content Pollution
**arXiv:2606.13610** (June 12, 2026) — cs.CL, cs.AI
- Single polluted page: fooled rates up to 27%; top-3 replacement: 73.8%
- Reasoning generates spurious social proof to justify false recommendations
- Key insight: Reasoning models are MORE vulnerable to content pollution, not less

#### Layer-Resolved Optimal Transport for Hallucination Detection
**arXiv:2606.13216** (June 11, 2026) — cs.CL, cs.LG — ICML Mechanistic Interpretability Workshop
- Wass-to-Unif and Wass-to-Data are complementary OT detectors specialized across hallucination types
- Detection concentrated in decoder layers L1-L4; L5 is anti-predictive for subtler hallucination types
- Key insight: Hallucination detection via OT is layer-dependent and fundamentally limited when failures occur downstream of attention

#### Adversarial Repackaging: Gaming AI Peer Review
**arXiv:2606.13044** (June 11, 2026) — cs.CL
- 75.1% attack success rate using only presentation-level revisions
- No changes to methods, experiments, figures, or numerical results
- Related-work repositioning and analytical discussion expansion substantially outperform surface edits
- Key insight: AI reviewers can be gamed without changing scientific evidence

#### RogueAI: Reverse Turing Test for AI Deception Detection
**arXiv:2606.13310** (June 11, 2026) — cs.CL, cs.HC
- Deceptive agent carries reliable linguistic signature (differential helpfulness, brevity, hedging)
- Simple heuristic exploits at 75.6% accuracy; yet human players achieve only 56.6%
- Key insight: Humans are poor at detecting AI deception even when signals are objectively present

#### MemRefine: LLM-Guided Memory Compression
**arXiv:2606.13177** (June 11, 2026) — cs.CL, cs.AI, cs.LG
- Surface similarity proposes candidate pairs; LLM judge decides delete/merge/preserve based on factual content
- Iterates until budget is met while preserving downstream performance
- Key insight: Similarity-based deletion is naive — factual content value requires LLM-level judgment

#### G-Long: Graph-Enhanced Memory for Long-Term Dialogue
**arXiv:2606.13115** (June 11, 2026) — cs.CL, cs.AI
- Fine-tuned small LM (sLM) for structured triplet extraction + associative retrieval
- Attention-aware importance scoring using cross-attention signals
- Up to 9.8% response quality improvement, 40.8% retrieval recall improvement
- Key insight: Graph structure + small model = efficient long-term memory without large-model overhead

#### NTS-CoT: Chain-of-Thought for Timeline Summarization
**arXiv:2606.13171** (June 11, 2026) — cs.CL, cs.AI
- Three CoT modules: Element-CoT, Date Selection, Causal-CoT
- Addresses two hallucination types: unfaithful content and information omission
- Key insight: CoT structured reasoning directly reduces specific hallucination types in summarization

#### PolyAlign: Conditional Human-Distribution Alignment
**arXiv:2606.13227** (June 11, 2026) — cs.CL
- Bucket-Aware SFT balances optimization across heterogeneous bilingual buckets
- Human-Distribution Preference Optimization (HDPO) regularizes preference learning
- Key insight: Global alignment suppresses natural human response variation; interaction-aware alignment is the right objective

#### SICI: Semantic-Pragmatic Complexity in Stance Detection
**arXiv:2606.13189** (June 11, 2026) — cs.CL
- Seven-dimensional complexity measure predicts LLM accuracy better than surface proxies
- LLM errors exhibit phase-transition structure based on complexity
- Key insight: Fundamental complexity threshold exists beyond which more reasoning/information doesn't help

#### MÖVE: Holistic LLM Benchmark for German Public Sector
**arXiv:2606.13111** (June 11, 2026) — cs.CL
- Evaluates 39 models across performance and governance criteria
- No single model dominates all criteria; model size alone is poor predictor of quality
- Key insight: Governance criteria (energy, transparency, alignment) are orthogonal to performance

#### EvoBrowseComp: Evolving Benchmark for Search Agents
**arXiv:2606.13120** (June 11, 2026) — cs.CL
- Three-agent collaborative framework for contamination-free complex question synthesis
- Fully automated synthesis enables regular updates to prevent data contamination
- Key insight: Static benchmarks are contaminated by parametric memorization; live-web benchmarks are essential

#### LEDGER: Long-Context Financial Report Benchmark
**arXiv:2606.13100** (June 11, 2026) — cs.CL
- 4,999 digitized corporate annual reports with figures, tables, narrative
- 31 consolidated financial KPIs to extract and link to market reaction
- Key insight: Long-context financial reasoning requires full document understanding, not just SEC filings

#### HyPE: Hypergraph Persona Encoding
**arXiv:2606.13142** (June 11, 2026) — cs.CL
- Organizes persona elements into hypergraph with hyperedges induced by shared category labels
- Persistent Edge Embeddings (PEE) fused into HyperGCN message-passing
- Key insight: Persona attributes share topical categories — hypergraphs capture structure that flat representations miss

#### LAUKIN: Legal Contract Understanding
**arXiv:2606.13184** (June 11, 2026) — cs.CL
- Multi-party legal contract analysis benchmark
- Covers contract parsing, clause classification, entailment, and question answering

#### SemCog Bench: Cross-Linguistic Cognate Processing
**arXiv:2606.13218** (June 11, 2026) — cs.CL
- Arabic-Hebrew cognate pairs benchmark for semantic-cognitive processing
- Tests cross-linguistic semantic memory and cognate recognition

#### Adversarial Repackaging (Peer Review)
*(see section above for full details)*


## 2026-06-17

### Variable-Width Transformers: Nonuniform Architecture Is More FLOP-Optimal
**arXiv:2606.18246** (June 16, 2026) — cs.CL
- ×-shaped transformer: wider early/late layers, narrower middle layers via parameter-free residual resizing
- 22% FLOP reduction at matched loss vs uniform baselines; 15% KV cache and I/O cost reduction
- Works on dense (200M–2B) and MoE (3B) models consistently
- Key insight: Uniform width wastes capacity — bottleneck structure changes residual stream representations qualitatively

### ZPPO: Teacher in Prompts, Not Gradients
**arXiv:2606.18216** (June 16, 2026) — cs.CL
- Prompt-based knowledge distillation (BCQ + NCQ) outperforms GRPO and off/on-policy distillation
- Largest gains at smallest scale (Qwen3.5 0.8B–9B students with 27B teacher)
- Key insight: Keeping teacher expertise as context beats gradient injection for small model training

### d-OPSD: On-policy Self-distillation for Diffusion LLMs
**arXiv:2606.18195** (June 16, 2026) — cs.CL
- First OPSD for diffusion LLMs: suffix conditioning + step-level supervision vs prefix/token-level
- 10× sample efficiency vs RLVR; outperforms SFT and RLVR baselines on 4 reasoning benchmarks
- Key insight: Diffusion LLM training requires rethinking self-distillation from scratch

### Geographic Conditioning Leakage: Even "Unknown" Triggers 72× Bias Spike
**arXiv:2606.18124** (June 16, 2026) — cs.CL (ACL 2026 Workshop)
- Location metadata causes 793× leakage spike (Llama 3.1-8B: 0.04% → 31.7%)
- Replacing location with "Unknown" still causes 72× elevation — user profile frame itself is conditioning signal
- Qwen3-8B: 21.3%; Claude Sonnet 4.6: 8.8% with location metadata
- Key insight: This bias is structural and not easily disabled by removing geographic content

### AlphaQ: Calibration-Free MoE Quantization at 3.5 Bits
**arXiv:2606.04980** (June 3, 2026) — cs.LG
- Uses Heavy-Tailed Self-Regularization (HT-SR) theory: heavy-tailed weight spectra → better trained experts → higher bit-widths
- On Qwen1.5-MoE: near full-precision accuracy at 3.5 avg bits per expert; 4×+ memory compression
- No calibration data needed; avoids misestimation from imperfect training data surrogates
- Key insight: Frontier MoE training data is proprietary — calibration-free quantization is essential for deployment

---
## 2026-06-21 (Sunday)

### New Insights:

#### UltraQuant: 4-bit KV Caching for Context-Heavy Agents
**arXiv:2606.20474** (June 18, 2026) — cs.LG
- KV-cache quantization targeting distributional skew: tail tokens (last 20% of context) dominate memory
- Per-tensor 4-bit quantization for tail segment, FP16 for head tokens
- 3.47× P50 TTFT speedup, 1.63× output throughput over FP8 baseline
- Custom kernels for AMD GPUs (not just NVIDIA)
- Key insight: Tail-aware KV quantization is a pragmatic recognition that cached content has non-uniform importance for future attention

#### FlashRT: Sub-Millisecond KV-Cache Checkpoint/Restore via Execution-State Capsules
**arXiv:2606.20537** (June 19, 2026) — cs.LG
- KV caches as "execution-state capsules" — compressed checkpoint representations of LLM forward pass state
- Sub-millisecond GPU snapshot (vs seconds/minutes for CPU-based approaches)
- 27× TTFT speedup at 16k tokens vs recomputation
- Captures KV-cache, recurrent hidden, convolution, and MTP state
- Key insight: KV-cache state can be treated as a graph-bound snapshot enabling near-instantaneous context restoration

#### MAA: Marginal Advantage Accumulation for Memory-Driven Agent Self-Evolution
**arXiv:2606.20475** (June 18, 2026) — cs.CL, cs.LG
- Agents accumulate evidence across batches using episodic memory, self-evolve without per-batch feedback
- Marginal advantage estimator weights recent experiences by unexpectedness
- Best in 14/16 benchmark settings vs Self-Refine, Self-Correct, EA
- 75% token reduction vs comparison-based methods
- Key insight: A principled statistical estimator (marginal advantage) can replace expensive comparison-based feedback for agent self-improvement

#### IFLLM: Implicit Mouse/Eye Feedback for LLM Alignment
**arXiv:2606.20482** (June 18, 2026) — cs.CL, cs.HC, cs.LG
- Users reveal preference through mouse trajectories and eye gaze even without explicit feedback
- Dataset: 1336 multi-turn questions, mouse + eye gaze from 59 MTurk workers
- Reward model using implicit feedback: DPO accuracy 55% → 64% vs text-only
- ~3× relative response quality improvements after DPO across 8 LLMs
- Key insight: Implicit behavioral signals (worth billions to internet companies) are directly applicable to LLM alignment

#### DiffusionGemma: Mechanistic Transparency of Diffusion Reasoning Models
**arXiv:2606.20560** (June 19, 2026) — cs.LG
- #1 trending on papers.cool cs.LG (June 18–19)
- Mechanistic interpretability study of Gemma-based diffusion reasoning models
- Evidence of non-chronological reasoning: model processes information in purposeful order not matching final output sequence
- Intermediate denoising steps correspond to reasoning sub-goals
- Key insight: Non-linear token generation order in diffusion reasoning may be a feature enabling "parallel" reasoning, not a bug

#### Contagion Networks: Evaluator Bias Propagation in Multi-Agent LLM Evaluation
**arXiv:2606.20493** (June 18, 2026) — cs.CL, cs.LG
- Evaluator biases amplify through multi-agent evaluation networks like contagion
- 72.4% reduction in effective contagion with k=3 diverse evaluators vs k=1
- Evaluator bias is not mean-centered — systematic biases propagate asymmetrically
- Diversity in evaluators more important than raw capability
- Key insight: Multi-agent evaluation requires diverse evaluator pools; capability alone doesn't prevent bias propagation

#### UFP4: Uniform FP4 Training Recipe — E1M2 > E2M1
**arXiv:2606.20381** (June 18, 2026) — cs.AI
- Non-uniform FP4 formats (E2M1) suffer from "Shrinkage Bias" — systematic negative rounding error from geometric asymmetry
- Shrinkage Bias accumulates multiplicatively across layers and is amplified by Random Hadamard Transform (RHT)
- Uniform grids (E1M2/INT4) bypass grid-geometry error
- UFP4: applies RHT to all three training GEMMs, restricts stochastic rounding to dY alone
- Results on Dense 1.5B, MoE 7.9B, MoE 124B
- Key insight: E2M1-based FP4 training recipes fail due to a fundamental geometric limitation, not implementation bugs

#### Tool-Intent Stabilization for Streaming RAG
**arXiv:2606.20113** (June 17, 2026) — cs.CL
- 73.9% of queries admit substantial latency hiding via parallel tool queries
- Streaming RAG distinguishes "intent-known" (explicit tool call) from "intent-anticipated" (system pre-launches)
- Reduces end-to-end latency by overlapping retrieval with generation
- Key insight: RAG latency bottleneck is the LLM's "decision" to retrieve, not retrieval time itself — anticipatory execution is feasible

#### Train/Retrieve/Both: Four-Arm Comparison on Ontario RTA Statutory Citation
**arXiv:2606.20359** (June 18, 2026) — cs.CL
- Fine-tuning vs retrieval vs hybrid vs both on real-world legal statutory reasoning
- Hybrid approaches outperform single-strategy approaches
- Fine-tuning alone doesn't capture up-to-date legal knowledge
- Retrieval alone struggles with legal reasoning patterns
- Key insight: "Just fine-tune" vs "just RAG" is a false dichotomy — legal domain particularly benefits from hybrid

#### REDACT: Systematically Controlled Multilingual PII Detection Benchmark
**arXiv:2606.19881** (June 18, 2026) — cs.CL
- 13,427 records, 324,078 entity annotations, 51 entity types, 25 languages, 9 controlled generation axes
- Aggregate F1 masks systematic failure structure: rule-based detectors fail badly on HIGH-sensitivity categories (recall 0.07)
- LLM detectors (GPT-4.1, Claude Sonnet 4.6) more robust but struggle with sensitivity-tier assignment
- Sensitivity-tier assignment is the hardest axis
- Key insight: For PII detection, aggregate metrics give false confidence — highest-stakes cases are where rule-based systems fail most

## 2026-06-22 (Monday)

### New Insights:

#### QMFOL: Quantifiable Monadic First-Order Logic Reasoning Benchmarks
**arXiv:2606.20227** (June 18, 2026) — cs.AI
- Monadic first-order logic tasks with precise control over reasoning depth, width, label types, distractors
- QMFOLBench: 2,880 instances, 960 configurations; round-trip verification with external prover ensures consistency
- Performance degrades predictably with logical complexity across LRMs and LLMs
- Models perform better on True-labeled tasks than False or Unknown
- Key insight: Reasoning breakdown under complexity load is now systematically measurable — QMFOL enables precise benchmarking of where reasoning chains fail

#### NRT-Bench: Multi-Turn Red-Teaming of LLM Agents in Nuclear Plant Simulation
**arXiv:2606.20408** (June 18, 2026) — cs.CR
- Nuclear power plant control room simulation with 5-role LLM operator team, 4-channel adversary injection
- 8.7-12.1% of attack sessions across four frontier models result in critical safety function loss
- Vulnerabilities are nearly disjoint across models (no session defeats all four; ~1/3 defeat at least one)
- Defense effectiveness is strongly model-dependent: same guardrail can help one model while hurting another
- Key insight: Aggregate safety rates hide complementary failure modes; auditing per-model failure profiles is more informative than averaged rates

#### DSG: Decoupled Search Grounding for LLM Agents — 91% Lower Search Cost
**arXiv:2606.18947** (June 17, 2026) — cs.AI
- MCP-compatible gateway moves grounding outside the reasoning model
- 86.1% SimpleQA accuracy vs 87.7% native at 91% lower search cost
- 68% lower latency, 99.4% warm-cache hit rate; >98% cost reduction on e-commerce query understanding
- Key insight: Real-time grounding is an optimizable interface boundary, not a fixed model feature — decoupling unlocks massive efficiency

#### FrontierMath v2 Benchmark Results (June 12, 2026)
- GPT-5.5 Pro (xhigh) leads Tier 1-3 at 87.7%; Claude Fable 5 (max) leads Tier 4 at 87.8%
- AIME 2024-25: GPT-5.5 Pro/max both at 100%; competition math effectively solved
- SimpleBench (trick questions): Claude Fable 5 leads at 81.9%, showing common-sense traps remain hard
- Key insight: No single model dominates all benchmarks; model selection requires understanding which failure modes are acceptable for the deployment context

## 2026-06-23 (Tuesday)

### New Insights:

#### BabelJudge: LLM-as-Judge Reliability Across Languages
**arXiv:2606.22329** (June 23, 2026) — cs.CL
- Four failure modes in LLM-as-judge: position bias, verbosity bias, order inconsistency, cross-lingual degradation
- BabelJudge: gold-labelling by controlled perturbation of high-quality references → pairwise items with known gold labels (no human annotation needed)
- Qwen2.5-7B-Instruct-4bit: composite bias-penalized reliability 0.714 (Hindi) → 0.550 (Swahili); raw accuracy 0.835 vs 0.660 masks the gap
- Swahili order consistency collapses to 0.480 (near-random)
- Key insight: Raw LLM-as-judge accuracy is misleading; bias-penalized scoring reveals dramatic cross-lingual degradation hidden by aggregate metrics

#### Knowledge Distillation in Post-Training: When It Helps and When It Fails
**arXiv:2606.22942** (June 23, 2026) — cs.CL
- Systematic study using Tulu 3 dataset: KD outperforms SFT in low-data regimes; advantage diminishes with more data
- Stronger instruction-tuned teacher restores KD gains even with abundant data
- KD effective only when teacher provides knowledge student cannot acquire from training data alone
- Two-stage KD: synthetic teacher-labeled data → refinement on human annotations; consistently effective in low-resource domains
- Key insight: Post-training KD is not universal — teacher must provide genuinely novel instruction-tuning signal; size reduction via KD fails when data is abundant

#### VeriBound: PAC-Bayesian Generalization Bounds for Formally-Verified PRMs
**arXiv:2606.20740** (June 23, 2026) — cs.LG
- Process Reward Models trained with formal verification tools (FOVER: Z3, Isabelle) show cross-task generalization without theoretical explanation
- VeriBound: PAC-Bayesian framework with four results — generalization bound, sample complexity, convergence rate, Best-of-K downstream performance
- Key insight: Formal verification provides theoretically grounded training signals for PRMs with PAC-Bayesian generalization guarantees to diverse reasoning tasks

#### TriggerBench: Prospective Memory Benchmark for LLMs
**arXiv:2606.23459** (June 23, 2026) — cs.AI
- Prospective memory (PM): spontaneously recalling and acting on latent constraints without direct prompts — fundamentally different from retrospective memory (RM)
- PM unevaluated for LLMs; existing benchmarks only test RM via explicit queries
- TriggerBench: 5 dimensions, daily assistant + professional workflows, paired with RM controls and overloaded triggers
- Measures: proactive recall, false-alarm rate, attentional robustness
- Key insight: PM is critical for long-horizon agentic tasks; an agent that answers "what should I remember?" when asked ≠ one that proactively acts on unprompted constraints

#### GDP-RAG: Grounded Delta Planning for Multi-hop RAG
**arXiv:2606.22681** (June 23, 2026) — cs.CL
- Multi-hop RAG challenges: iterative retrieval propagates errors; over-generated reasoning steps increase cost without accuracy gains
- GDP-RAG: gap-conditioned planning prompts only for missing information; skeletal trajectory carries evidence from preliminary retrieval through execution
- Key insight: Identifying the specific information delta (vs. full retrieval rounds) enables more efficient multi-hop RAG

#### Text2DSL: Context-Aware Distillation for DSL Code Generation
**arXiv:2606.22578** (June 23, 2026) — cs.CL
- Teacher LLM (DeepSeek-V4-Flash) operates under structured context: BNF grammar, API spec, closed identifier vocabulary
- Two-tier verification: AST validation (esprima) + runtime acceptance (polkitd daemon); PolkitBench corpus 4,204 → 10,000+ verified examples
- Key insight: Structured context (formal specifications) as distillation signal >> free-form prompt-only generation for DSL synthesis

#### VeriEvol: Scaling Multimodal Mathematical Reasoning
**arXiv:2606.23543** (June 23, 2026) — cs.AI
- Decouples prompt difficulty from answer reliability in RL training for visual mathematical reasoning
- Type-aware mutation operators for difficulty + falsification-based answer verification
- Key insight: Scaling requires treating difficulty and reliability as separate problems; easy to generate hard prompts, hard to generate reliably-labeled answers

#### StatABench: Statistical Analysis Benchmark for LLMs
**arXiv:2606.22977** (June 23, 2026) — cs.AI
- Stat-Closed: 404 questions across 18 topics (MCQ, fill-in-blank, decision-making, practical application)
- Stat-Open: 30 complex open-ended modeling tasks
- Key insight: Statistical reasoning is where LLMs struggle most with tool integration and practical application, not conceptual knowledge

#### CADRE: Medical VLM Adaptation with Bounded Forgetting and Prior Drift Prevention
**arXiv:2606.23487** (June 23, 2026) — cs.AI
- Medical VLMs risk catastrophic forgetting + prior drift toward modality-specific shortcuts when adapted
- CADRE: frozen backbone + LoRA + online self-scaling similarity-aware elastic weight consolidation
- Key insight: Medical VLM adaptation is as much a safety problem as accuracy; bounded forgetting and prior drift are complementary failure modes requiring joint mitigation

#### PRIDE: Privileged Information KD for Empathetic Dialogue
**arXiv:2606.23124** (June 23, 2026) — cs.CL
- Standard KD fails to transfer nuanced empathetic understanding; overlooks implicit contextual cues
- PRIDE: teacher operates with implicit contextual cues available during training but not inference
- Key insight: Empathetic dialogue requires implicit contextual signals that standard KD doesn't capture; privileged information bridges this gap

#### LLM Embedding Spaces Don't Recover Expert Structure
**arXiv:2606.23394** (June 23, 2026) — cs.LG
- High category separability in embedding spaces ≠ geometry recovers expert-defined structure
- RSA (Representational Similarity Analysis) against expert symptom matrix in mental-health language
- Key insight: Need RSA-style analysis, not just separability metrics, to evaluate whether embedding geometry reflects expert domain structure

#### PeerMath: Collaborative Mathematics Dataset
**arXiv:2606.21557** (June 23, 2026) — cs.AI
- Multi-agent collaborative mathematical reasoning dataset
- Key insight: Collaborative peer interaction may unlock mathematical capabilities beyond single-agent performance

### New Benchmark Entries (lmcouncil.ai, June 2026)

#### Humanity's Last Exam (HLE)
- 2,500 multi-modal expert-contributor questions (CAIS partnership)
- Gemini 3.1 Pro Preview (high thinking) leads at 46.4%; designed to resist memorization

#### METR Time Horizons
- Human task duration at which AI reaches 50% success
- Claude Mythos Preview leads at 1,044.8 minutes (~17.4 hours human work)

#### GPQA Diamond
- PhD-level science questions; GPT-5.4 Pro (xhigh) leads at 94.6% ± 1.6

#### GDPval
- 44 knowledge work occupations; GPT-5.2 leads at 49.7%

#### Text Arena (Coding)
- Claude Opus 4.7 leads at 1566.9; Claude dominance on coding continues

#### GSO — General Speedup Optimization
- Claude Opus 4.7 leads at 44.1% on OPT@K performance optimization tasks

#### WeirdML v2
- Non-standard ML tasks; Claude Fable 5 (high) leads at 87.9%

#### Terminal-Bench 2.0
- Agentic terminal tasks; Claude Opus 4.7 leads at 90.2% ± 2.1

#### VPCT (Visual Physics Comprehension)
- Ball ramp physics; Gemini 3 Pro Preview leads at 91.0%

#### Benchmark Saturation Update
- AIME 2024-25: GPT-5.5 Pro/max at 100% (confirmed saturated)
- FrontierMath v2: Tier 1-3 at 87.7%, Tier 4 at 87.8% (stable)
- Fiction.liveBench: o3 (medium) at 100% (long-context narrative saturated)

---
## 2026-06-24 (Wednesday)

### New Insights:

#### FMLM+: Posterior Refinement for Fast Language Generation via Any-Order Flow Maps
**arXiv:2606.24773** (June 23, 2026) — cs.CL
- Flow Map Language Models (FMLMs) achieve excellent few-step generation but sacrifice inference-time flexibility; masked diffusion models (MDMs) suffer factorization error
- FMLM+: equips FMLM with masking-style noise schedules; simultaneously scores global consistency of each token a posteriori while generating full sequence in single step
- Posterior Refinement: adaptive self-correction strategy matching discrete baseline quality with 32x fewer NFEs
- Improves speed-quality tradeoff over both MDM and FMLM families across diverse benchmarks
- Key insight: Posterior scoring — evaluating each token's global consistency after generation — is the missing ingredient letting flow-based models self-correct without sacrificing parallel-generation advantage

#### DREAM: Dense Retrieval Embeddings via Autoregressive Modeling
**arXiv:2606.24667** (June 23, 2026) — cs.CL
- Standard dense retrievers trained with contrastive objectives requiring costly labeled positive/negative pairs
- DREAM: injects retriever-generated query-document similarity scores into selected attention heads of frozen LLM; prediction loss during next-token generation provides gradients for retriever training through attention mechanism
- Intuition: if document is relevant to query, conditioning on it should make LLM's target output easier to predict
- Evaluated on BEIR and RTEB with 0.5B–3B backbones; consistently outperforms baselines across model scales
- Key insight: Autoregressive next-token prediction contains rich relevance supervision signal without requiring explicit labeled pairs — reframes dense retrieval as a generative problem

#### SHERLOC: Structured Diagnostic Localization for Code Repair Agents
**arXiv:2606.24820** (June 23, 2026) — cs.CL
- LLM agents waste ~50% of budget on locating faults before editing; localization frameworks evaluated as file retrieval not actionable diagnosis
- SHERLOC: training-free, pairs reasoning LLM with compact repository tools and self-recovery; no fine-tuning or multi-agent orchestration
- Results: 84.33% accuracy@1 on SWE-Bench Lite, 81.27% recall@1 on SWE-Bench Verified; ~30B params matches/outperforms other agentic methods
- Injecting SHERLOC locations into repair agents: +5.95pp resolve rate, 36.7% fewer localization tokens, 23.1% fewer total tokens
- Key insight: Localization produces actionable diagnosis (not just file names) via structured reasoning over compact repository context; halving localization cost while improving downstream repair

#### Agent Memory System Evaluation: No Single Architecture Dominates
**arXiv:2606.24775** (June 23, 2026) — cs.CL, cs.DB, cs.IR
- Existing evaluations benchmark agent memory through end-to-end task success (monolithic black box); operational costs, architectural trade-offs, and robustness under dynamic knowledge updates underexplored
- Framework decomposes memory into four modules: representation/storage, extraction, retrieval/routing, maintenance
- Evaluates 12 memory systems across 5 workloads, 11 datasets
- No single architecture dominates — effectiveness depends on memory structure aligning with workload bottleneck
- Localized maintenance more cost-efficient than global reorganization
- Key insight: Agent memory is a data management problem decomposed into tractable modules; monolithic metrics hide what's actually working

#### Reasoning Is Latent, Not Chain-of-Thought
**arXiv:2604.15726** (Position Paper) — cs.CL
- LLM reasoning studied as latent-state trajectory formation, not faithful chain-of-thought
- CoT explanations systematically misrepresent the true reason for model's output — post-hoc rationalizations, not the actual reasoning mechanism
- Claims about faithfulness, interpretability, benchmark validity, and inference-time intervention all depend on what the field takes the primary object of reasoning to be
- Key insight: If CoT is textual artifact of latent reasoning (not the process itself), chain-of-thought faithfulness research, CoT-based benchmarks, and CoT-targeting interventions may all be misguided

#### Natural Identifiers: Post-Hoc Privacy Auditing Without Retraining
**arXiv:2606.24408** (June 23, 2026) — cs.LG | ICLR 2026
- Natural Identifiers (NIDs): structured random strings (cryptographic hashes, shortened URLs) naturally occurring in training data
- Enable post-hoc differential privacy auditing without retraining; enable dataset inference without private non-member held-out dataset
- Format allows generating unlimited additional random strings from same distribution acting as alternative canaries and same-distribution held-out data
- Key insight: NIDs transform auditing from a training-time requirement to a post-hoc capability — any trained model can now be audited for privacy

#### Data Augmentation Theory: Partial Achieves Same Minimax Rates as Full
**arXiv:2606.24418** (June 23, 2026) — cs.LG | COLT 2026
- 42-page theoretical study: partial data augmentation (random subset of group elements) achieves same minimax rates as full augmentation up to vanishing approximation error
- Complementary impossibility result: enforcing exact invariance via augmentation requires averaging over entire group — no strict subset suffices for sufficiently expressive hypothesis spaces
- Key insight: Partial augmentation is statistically optimal for approximate symmetry; exact invariance is computationally infeasible — the gap is fundamental


#### ACTS: Agentic Chain-of-Thought Steering
**arXiv:2606.03965** (June 2, 2026) — cs.CL | ACL 2026 Main
- Extended chain-of-thought reasoning improves accuracy but wastes tokens and offers no inference-time control
- ACTS formulates reasoning steering as a Markov decision process — a controller agent adaptively steers a frozen reasoner at each step based on remaining budget
- Controller observes reasoning trace + remaining budget, issues steering action (strategy + phrase)
- Matches full-thinking performance with substantial token savings; enables budget-aware accuracy-efficiency trade-offs
- Key insight: Separating controller from reasoner allows budget-aware control over how the model reasons, not just how much it reasons

#### CARVE: Content-Aware Recurrent with Value Efficiency
**arXiv:2606.27229** (June 26, 2026) — cs.CL, cs.LG
- Recurrent models suffer "memory-blind gating" — the gate sees only the arriving token, not the memory it is about to modify
- Three coupled defects in delta-rule architecture (GDN-2): memory-blind gating, value-axis erase mask waste, WY-form triangular chunk solver being mathematically blocked
- CARVE reuses recurrent output tensor as content signal for erase gate; replaces per-value write-gate projection with single scalar per head
- At 1.3B params, 100B tokens: WikiText perplexity 15.72 (-0.18 vs GDN-2, a 4.5-sigma effect); leads every recurrent baseline on 9 reasoning benchmarks; sets SOTA on all RULER retrieval probes
- Six formal theorems covering memory capacity, Lyapunov stability, gradient flow, expressivity separation, Pareto-optimal chunk size, and hybrid optimality
- Key insight: Content-aware gating on the key axis is provably necessary and sufficient for the WY-form solver — unifies memory efficiency with Transformers

#### MinGram: Minimalist Unigram Tokenizer
**arXiv:2606.27019** (June 25, 2026) — cs.CL
- Standard Unigram tokenizer has elegant representation but heavy training (suffix array, forward-backward pass, iterative prune loop)
- MinGram: BPE-derived seed vocabulary, Hard EM on minimum-token path, single flat score-pruning step
- Across 6 languages: compresses better than both BPE and standard Unigram; matches strongest token-count compressors with higher morphological alignment
- Downstream LM training: Unigram-family tokenizers consistently beat BPE in bits-per-byte
- Key insight: A tokenizer trained purely on compression (token count) with morphological alignment as secondary objective achieves best downstream language modeling

#### Multilingual Reasoning Cascades Need More Context
**arXiv:2606.27306** (June 26, 2026) — cs.CL
- Translation cascades (translate to English → reason → translate back) are structurally lossy — each stage discards information later stages need
- Intervention: provide context-aware cascade with original question + English translated question + reasoning trace — all to final translation module
- Strong gains across 9 multilingual benchmarks, 3 backbone models, 285 languages (high/mid/low-resource)
- Key finding: Original language question carries most beneficial context — preserving it until end of pipeline is single most impactful change
- Key insight: Translation cascades lose information structurally; the fix is informational, not architectural — preserve original context throughout

#### AIMS: Intent-Aware Safety Classification
**arXiv:2606.27210** (June 26, 2026) — cs.CL
- Safety classifiers should model user intent as explicit signal between prompt and label
- AIMS: 1,724 difficult safety prompts, each paired with intent description and harm label
- Across training regimes (SFT, preference learning, reasoning distillation, RL): DPO from model-generated intent errors improves over SFT; intent-conditioned distillation outperforms reasoning-only distillation; GRPO with intent faithfulness reward yields strongest average performance
- Intent-aware models form the inference latency-F1 Pareto frontier — faithful intent modeling is compact, high-quality supervision for robust safety classifiers
- Key insight: Intent is a compact supervision signal that outperforms much larger models trained without it; the conditioning interface matters more than scale

#### ReaORE: Reasoning-Guided Open Relation Extraction
**arXiv:2606.26986** (June 25, 2026) — cs.CL
- Open Relation Extraction requires extracting unseen relations from unstructured text
- Prior approaches: clustering (no labels, poor generalization) or direct LLM generation (lacks discriminative capacity for confused relations)
- ReaORE: coarse-to-fine reasoning — (i) relation filtering via multi-aspect reasoning + embedding similarity; (ii) relation prediction via fine-grained comparative reasoning
- Outperforms baselines on two widely used OpenRE datasets
- Key insight: Reasoning-guided progressive filtering is more effective than either pure clustering or direct generation for open-world relation extraction

#### TurboQuant: 6x KV Cache Compression (Google Research)
**arXiv / ICLR 2026** (March 2026, announced publicly April 2026)
- Compresses KV cache from 16-bit precision to 3 bits per value — 6x memory reduction, zero accuracy loss
- Rotation-then-quantize: random orthogonal rotation (spreads vector energy uniformly) + Lloyd-Max optimal quantization (analytical, no calibration data) + QJL error correction (preserves attention distances)
- Benchmark results: LongBench identical to full-precision baseline at 3.5 bits; Needle-in-a-Haystack 0.997 at 4x compression across 104K context
- H100 attention throughput: up to 8x speedup vs FP32, ~4x vs FP16 for attention computation
- Market impact: SK Hynix -6.23%, Samsung -4.8%, SanDisk -8% on announcement day; analysts called it overreaction
- Community: llama.cpp fork (turboquant_plus) and vLLM fork available
- Key insight: KV cache is the #1 memory bottleneck at long context; a training-free, model-agnostic 6x compression is a major practical breakthrough

#### BitsMoE: Ultra-Low-Bit MoE Quantization
**arXiv:2606.00079** (May 22, 2026) — cs.LG
- MoE models are memory-intensive because all expert weights must be kept resident
- BitsMoE: spectral-energy-guided bit allocation — decomposes MoE layer via SVD into shared basis (full precision) + expert-specific spectral factors (fine-grained quantization units)
- Bit-width determined via integer linear program minimizing reconstruction loss under fixed bit budget
- On Qwen3-30B-A3B-Base at 2-bit: 12.3x faster quantization vs GPTQ; +27.83pp accuracy vs GPTQ; 1.76x decoding speedup
- Key insight: Ultra-low-bit MoE quantization is viable when bits are allocated by spectral energy rather than uniformly — heterogeneous expert importance requires heterogeneous precision

---

## July 1, 2026

### Introspective Coupling: Fixed Explanations Track Shifting Behaviors
**arXiv:2606.32038** (June 30, 2026) — cs.CL
- Counterfactual explanation training on fixed datasets produces explanations more faithful to the model's current behavior than to training targets
- "Introspective coupling": explanations stay correlated with current behaviors during training — tracks behavioral shifts without updated supervision
- Robust across sycophancy, refusal tasks, and label noise
- Key insight: Static explanation datasets are a scalable post-training signal; models self-align through explanation even when supervision doesn't change
- 🔗 https://arxiv.org/abs/2606.32038

### RLMF: Metacognitive Feedback for Uncertainty Calibration
**arXiv:2606.32032** (June 30, 2026) — cs.CL — ACL 2026
- LLMs hallucinate with high confidence — metacognitive failure
- RLMF: Reinforcement Learning with Metacognitive Feedback — refines completion rankings based on model's self-judgments of performance
- Metacognitive data selection via self-judgments outperforms naive active learning
- Up to 63% improvement over standard RL for faithful calibration across diverse tasks
- Key insight: Models that accurately judge their own performance are better positioned to improve it
- 🔗 https://arxiv.org/abs/2606.32032

### Data Referencing Errors: A Systematic Problem in Table Reasoning
**arXiv:2606.32029** (June 30, 2026) — cs.CL — ACL 2026 Oral
- DREs: LLMs incorrectly cite or omit table values despite understanding table structure
- First systematic evaluation across models 1.7B–20B; DREs occur across all tested models
- Critic-based filtering with rejection sampling improves answer accuracy up to 12%
- Lightweight 4B critic achieves 78.2% F1 detecting DREs in-distribution and OOD
- Key insight: DREs are systematic and widespread; data referencing as a critic is high-value signal for accuracy improvement
- 🔗 https://arxiv.org/abs/2606.32029

### SkillComposer: Joint Skill Composition for LLM Agents
**arXiv:2606.32025** (June 30, 2026) — cs.CL
- Skill composition is joint: which skills, how many, in what order — three dimensions that can't be decoupled
- SkillComposer: constrained autoregressive decoding over skill identifiers — all three emerge from single pass
- +23.1pp pass rate on GPT-5.2-Codex, +18.2pp on Gemini-3-Pro-Preview over no-skill baseline
- Matches gold-skill retrieval at lower prompt-token cost
- Key insight: Joint prediction beats separate retrieval + reranking pipelines; structured composition is the bottleneck as skill libraries scale
- 🔗 https://arxiv.org/abs/2606.32025

### CHERRY-1.8B: Three Efficiency Breakthroughs
**arXiv:2606.31796** (June 29, 2026) — cs.CL
- SGT (Selective Ground Truth Token Training): 15% of tokens carry semantic payload; concentrating supervision there recovers 67% of full-sequence loss reduction — 4.5x per-supervised-token efficiency; effect collapses on shuffled text (natural language property)
- Depth Compression: 48-layer 1B → 6 layers (227M) via layer averaging + recurrent unrolling; within measurement noise of 566M dense model (2.934 vs 2.926); 2.5x parameter reduction
- MoEE (Mixture of Efficient Experts): 2-expert MoEE over compressed models; loss 2.789 vs 2.926 single compressed model
- Key insight: Natural language structure enables semantic token selection to generalize across remaining 85%; depth compression via recurrent recovery is competitive at dramatically reduced scale
- 🔗 https://arxiv.org/abs/2606.31796

### TRIAGE: Role-Typed Credit Assignment for Agentic RL
**arXiv:2606.32017** (June 30, 2026) — cs.LG
- Standard GRPO gives uniform outcome credit: useful exploration in failed rollouts gets penalized, redundant actions in successful rollouts get reinforced
- TRIAGE adds semantic role axis: classifies each segment as decisive progress, useful exploration, no-progress infrastructure, or regression
- Regression detection in successful trajectories is the dominant contributor
- Reduces environment-facing turns by 10.4% (ALFWorld) and 14.8% (WebShop) relative to GRPO
- Key insight: Role-typed credit is optimal segment-level correction from role labels alone; practical win is detecting and penalizing regression that looks successful by outcome alone
- 🔗 https://arxiv.org/abs/2606.32017

### QVal: Simple Prompting Beats Dense Supervision Methods
**arXiv:2606.32034** (June 30, 2026) — cs.LG
- QVal: training-free testbed measuring Q-alignment (whether scores order actions by Q-values of a strong reference policy)
- 21 dense supervision methods, 4 environments, 7 families, 1.2K experiments
- Finding: simple prompting baselines consistently outperform recent dense supervision literature
- Performance clusters by family; dense supervision research may be engineering around the problem, not solving it
- Key insight: Before building complex dense supervision methods, try better prompting
- 🔗 https://arxiv.org/abs/2606.32034

### Explicit Fuzzy Logic FFN: A Legible Grammatical Mechanism
**arXiv:2606.31845** (June 29, 2026) — cs.CL
- Replaces standard FFN with negation-capable fuzzy set operations (NC-FFN)
- At scale (125M, OpenWebText): ties GELU baseline perplexity with every unit carrying explicit logical form
- Soft sequence quantifiers with per-unit forgetting resolve grammatical licensing deficit
- FFN becomes fully legible: units read as grammatical licensing detectors firing on licensors
- Key insight: A parameter-neutral transformer with explicit fuzzy-logic FFN is language-model-quality and fully interpretable-by-construction; the grammatical mechanism is buildable, not just emergent
- 🔗 https://arxiv.org/abs/2606.31845

### BenchLM Reasoning Leaderboard (July 2026): Grok 4.1 Widens Lead
**Source: benchlm.ai** (July 1, 2026)
- Grok 4.1 (97.6%), Gemini 3.1 Pro (96.4%), GPT-5.4 (95.6%) — top 3 unchanged
- o1 (non-preview) at 75% — below o1-preview at 88.6%
- Claude Opus 4.6 (non-reasoning model) at 88.2% — competitive with explicit reasoning models
- GLM-5 Reasoning (87.6%) and Qwen3.5 397B Reasoning (81.8%) — self-hostable open-weight reasoning models entering competitive range
- Key insight: Standard models closing the gap on shorter-context tasks; reasoning model premium persists on complex multi-step problems
- 🔗 https://benchlm.ai/reasoning

### Vellum LLM Leaderboard (July 2026): Claude Mythos 5 Dominates HLE
**Source: vellum.ai**
- Humanity's Last Exam: Claude Mythos 5 (64.5%), Claude Opus 4.8 (57.9%), Claude Sonnet 5 (57.4%), GPT-5 (35.2%), Grok 4 (25.4%)
- GPQA Diamond (pure reasoning): Claude Sonnet 5 (96.2%), Claude 3 Opus (95.4%), Gemini 3.1 Pro (94.3%)
- SWE-bench (agentic coding): Claude Mythos 5 (95.5%), Claude Fable 5 (95%), Claude Opus 4.8 (88.6%)
- Efficiency: GLM-5.2 at 347 t/s, $0.95/$3/M tokens; Kimi K2.6 at 342.6 t/s, $0.95/$4 — cost-performance leaders
- Key insight: Market fragmenting around task-specific best models rather than single winner; GLM-5.2 and Kimi K2.6 challenge frontier pricing
- 🔗 https://www.vellum.ai/llm-leaderboard
