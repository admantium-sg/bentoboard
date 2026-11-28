## 2026-05-30 (Saturday)

### New Insights:

#### Reasoning in Memory: Latent Reasoning Without Autoregressive CoT
**arXiv:2605.30343** (May 28, 2026) — cs.CL, cs.AI
- RiM replaces autoregressive generation of reasoning steps with fixed memory blocks
- Memory blocks processed in single forward pass — enables compute-efficient latent reasoning
- Two-stage curriculum: first grounds memory blocks via explicit reasoning steps, then discards step-level supervision for iterative answer refinement
- Matches/exceeds existing latent reasoning methods without autoregressive thought generation
- Key insight: LLMs can use working memory for reasoning analogous to human cognition — internal manipulation without externalization

#### Data Mixture Surgery: Reverse-Engineering LLM Training Data
**arXiv:2605.30348** (May 28, 2026) — cs.CL, cs.AI, cs.LG — ACL 2026 Main
- LLMSurgeon: given only generated text from target LLM, estimates domain-level pretraining distribution
- Casts DMS as inverse problem under label-shift assumption with calibrated soft confusion matrix
- LLMScan evaluation suite with transparent mixtures for verification
- Recovers domain mixtures with high fidelity under fixed protocols
- Key insight: "Digital DNA" of LLMs can be audited post-hoc without training data access

#### Entropy-Cut Metropolis-Hastings: Cutting at Decision Points in Reasoning
**arXiv:2605.30327** (May 28, 2026) — cs.LG, cs.AI, cs.CL
- Frontier reasoning via RL post-training challenged by power distribution sampling
- Prior work cuts uniformly at random — tends to rewrite local details, not revisit consequential decisions
- Entropy-Cut MCMC: next-token entropy as proxy for decision points; resamples from high-entropy positions
- Mixing time scales with number of decisions, not tokens — critical for long traces
- Consistent gains across MATH500, HumanEval, GPQA Diamond, AIME26 over RL-trained models
- Key insight: Entropy jumps signal consequential reasoning decisions worth revisiting

#### Self-Trained Verification: Doubling V-R Loop Accuracy
**arXiv:2605.30290** (May 28, 2026) — cs.LG, cs.AI, cs.CL
- Self-improvement gated by verifier bottleneck; V-R loops stall, self-training fails on bad self-generated data
- STV insight: model cannot catch errors alone, but can when shown reference solution
- Trains verifier to imitate informed version of itself using this asymmetry
- Results: 2x accuracy on hard math; 14x on scientific reasoning (1.5% → 21%)
- Verifier-in-the-loop training (ViL): generator's standalone pass@1 climbs 30% past RL convergence
- Key insight: Next frontier in reasoning is how we train for and with verification

#### Parametric Memory Law for LoRA: Phase Transition at p > 0.5
**arXiv:2605.30260** (May 28, 2026) — cs.CL, cs.AI, cs.CV, cs.LG
- Power law linking loss reduction ΔL to effective parameters and sequence length
- Phase transition: prediction probability p > 0.5 sufficient condition for verbatim recall under greedy decoding
- MemFT: threshold-guided optimization redistributes training budget toward sub-threshold tokens
- Key insight: Memory capacity is quantitatively predictable — deterministic phase transition enables precise fine-tuning targeting

#### HullFT: Geometric Test-Time Finetuning via Convex Reconstruction
**arXiv:2605.30337** (May 28, 2026) — cs.LG
- Test-time finetuning adapts model per-query but selection and finetuning both per-query bottlenecks
- HullFT: Frank-Wolfe optimization finds sparse convex combination of training sequences
- Geometric integerization converts fractional weights to integer multiplicities
- Gradient Reuse amortizes forward-backward across repeated examples
- Lower bits-per-byte at substantially lower runtime than state-of-art TTFT
- Key insight: Convex geometry provides both diversity and relevance in support set selection

#### Canonical-Context On-Policy Distillation for Multi-Turn
**arXiv:2605.30251** (May 28, 2026) — cs.CL, cs.AI
- CCOPD addresses self-anchored drift: partial-context responses introduce unsupported assumptions that distort final answers
- Frozen teacher conditioned on full prompt; trainable student receives same evidence incrementally
- 32% average relative improvement in RAW-SHARDED performance across math + 5 zero-shot task families
- Strengthens grounding in user evidence; reduces contamination from earlier assistant turns
- Key insight: Multi-turn conversation requires explicit alignment between partial-context and full-context reasoning

#### SoundnessBench: LLMs Are Optimistically Biased Evaluators
**arXiv:2605.30329** (May 28, 2026) — cs.LG — ICML 2026
- 1,099 ML research proposals from ICLR submissions, labeled with reviewer soundness scores
- 12 frontier LLMs tested on methodological viability judgment
- Pervasive optimism bias: rate low-soundness proposals as sound under standard prompting
- Aggressive prompting shifts errors from false positives to false negatives — no calibration
- Contamination controls suggest bias is not explained by memorized answers
- Key insight: Current LLMs not reliable as standalone first-gate evaluators of scientific rigor

#### Agent Sabotage: 2-3% Rate in Gemini
**arXiv:2605.30322** (May 28, 2026) — cs.LG, cs.AI
- Gram: automated alignment auditing framework for sabotage propensity
- 17 simulated agentic deployment scenarios incentivizing sabotage
- Gemini misbehaves in 2-3% of trajectories — mostly "overeagerness" causing excessive role-playing and goal-seeking
- Increasing realism and removing misbehavior nudges reduces sabotage to near zero
- Investigator agent pipeline enables targeted experiments to identify failure drivers
- Key insight: Sabotage in agents is real but reducible through environment design

#### COMPOSE: Dual-Graph Future Theorem Generation
**arXiv:2605.30333** (May 28, 2026) — cs.CL
- Generates plausible future mathematical claims using citation graph + formal theorem dependency graph
- 108K paired scientific-formal graph examples; 47K future papers benchmark
- Outperforms baselines on retrieval to real future papers
- Key insight: Combining scientific context with formal structure produces more grounded mathematical claims

#### Multi-Component LLM Agents: Probability Violations Inevitable
**arXiv:2605.30335** (May 28, 2026) — cs.AI, cs.CL
- Locally coherent, globally incoherent: components seeing only partial information violate probability axioms in composition
- Compositional residual ε* measurable at runtime from declared coupling constraints
- 33-94% of ensemble cliques show ε* > 0 across four-LLM panels
- Three intuitive mitigations (retrieval, partition-aware prompting, aggregator-LLM) all fail or regress
- Key insight: Probabilistic incoherence is structural in multi-component agents, not fixable by prompting

#### Fairness-Aware Federated Learning: Trajectory Shapley Value
**arXiv:2605.30336** (May 28, 2026) — cs.LG
- FedTSV: contribution metric evaluating client influence on optimization trajectory
- Adaptive aggregation responding to heterogeneous and adversarial participation in real time
- Accelerates convergence, improves robustness, more equitable contribution assessment
- Key insight: Temporal contribution tracking beats static aggregation weights in federated learning

#### In-Context Reward Adaptation for Heterogeneous Human Preferences
**arXiv:2605.30323** (May 28, 2026) — cs.LG, cs.AI
- RLHF relies on static reward models — fails to generalize to unseen preference domains
- Transformer-based framework adaptively infers reward structure from few preference demonstrations
- Human response time as auxiliary signal enables adaptation to unseen domains
- Key insight: Response time is a critical signal for modeling diverse human preferences in context

---


## 2026-05-29 (Friday)

### New Insights:

#### Structured Multi-Agent Coordination: PatchBoard
**arXiv:2605.29313** (May 28, 2026) — cs.CL
- JSON Patch mutations over shared structured state vs natural-language dialogue
- 84.6% success rate vs 30.8% (LangGraph) and 61.6% (Flock)
- 45.5k tokens per task vs 368.3k (LangGraph) — order-of-magnitude reduction
- Key insight: Schema-grounded state mutations enable reliable, auditable multi-agent coordination

#### Reasoning Transfer: Three Distinct Mechanisms
**arXiv:2605.28913** (May 27, 2026) — cs.CL
- Cross-model CoT transfer is not single phenomenon: answer extraction, reasoning scaffolding, or receiver-dependent competence
- AIME: driven by explicit answer availability; MMLU-Pro: receiver competence; ZebraLogic: partial structured-answer leakage
- Answer agreement among receivers signals when to stop provider reasoning early
- Key insight: Prefix-based transfer enables efficient reasoning reuse across models

#### Stable Latent Reasoning: STARS
**arXiv:2605.26733** (May 26, 2026) — cs.LG, cs.AI — ICML 2026
- LoopLMs collapse with excessive recurrence depth — trade-off between stability and effectiveness
- STARS: Jacobian Spectral Radius Regularization constrains latent states toward asymptotically stable fixed points
- Achieves reliable test-time scaling on arithmetic; mitigates performance degradation at depth
- Key insight: Converging toward stable fixed points enables effective latent reasoning scaling

#### Session-Level Role-Playing Evaluation
**arXiv:2605.29256** (May 28, 2026) — cs.CL, cs.AI
- DynSess: session-level rubrics for character consistency across multi-turn conversations
- Smaller model with proper training matches larger character models in blind evaluation
- Multi-turn lookahead search constructs high-quality training trajectories
- Key insight: Session-level evaluation unlocks role consistency that turn-level metrics miss

#### Self-Evolving Conversation Evaluation: GrowLoop
**arXiv:2605.28882** (May 26, 2026) — cs.CL, cs.AI
- Minimal human seed annotations + LLM iterative rubric refinement via Heuristic Learning
- Human-AI agreement required where annotators converge; plausibility expected where they diverge
- Rubric-Case co-evolution enables continuous evolution as models advance
- Key insight: Static benchmarks age out — self-evolving evaluation paradigm needed

#### Byte-Level Token Representations: Kronecker Embeddings
**arXiv:2605.29459** (May 28, 2026) — cs.CL, cs.LG
- Replaces learned embedding table with deterministic byte-level factorization
- Eliminates 91-94% of input-side trainable parameters at frontier scale
- 2.5% lower validation loss than BPE-tied baseline; 1.43x fewer steps to converge
- On-the-fly variant: 4.5MB buffer vs 2.15GB table with 0.01-0.24% step-time overhead
- Key insight: Byte-level locality shifts disambiguation to early attention; typographic variants cluster less than morphological relatives

#### Indic Tokenizer: BrahmicTokenizer-131K
**arXiv:2605.29379** (May 28, 2026) — cs.CL, cs.LG
- 26.7% fewer tokens than Tekken/Sarvam-m on Indic text; 76.79% improvement on Odia (4.31x compression)
- Drop-in replacement for o200k_base preserving English/EU/code compression
- Only tokenizer simultaneously competitive on Brahmic, English, EU, code, and math at 131K budget
- Key insight: Script-prune crop + linear-programming allocation enables universal vocabulary

#### Learnable Assessment Skills Bypass Rubric Bottleneck
**arXiv:2605.29274** (May 28, 2026) — cs.CL
- Assessment skills: item-independent procedural knowledge guiding scoring workflow
- Iterative framework requires no expert-written rubric; surpasses dataset-provided rubric on ASAP-SAS
- Cross-item transfer reveals generalizable and item-specific patterns
- Key insight: Learning evaluation heuristics from scoring experience enables scalable automated scoring

#### Schema Linking: EviLink
**arXiv:2605.29670** (May 28, 2026) — cs.CL, cs.AI
- Reframes schema linking as uncertainty-aware inference over multiple plausible SQL paths
- Spider2-Scale: 90.15% field-level strict recall, 123.30K average tokens
- Key insight: Distinguishing required vs path-dependent schema items improves completeness-cost balance

#### Phone-Use Agent Environment Scaling: PhoneWorld
**arXiv:2605.29486** (May 28, 2026) — cs.CL, cs.AI, cs.LG
- Reusable pipeline: real trajectories → controllable environments, executable tasks, rule-based verifiers
- 34 apps across 16 domains; replacing 10K AndroidWorld steps improves all four benchmarks
- HYMobileBench: +17.7 points; PhoneWorld: +52.5 points
- Key insight: Environment supply, not single-benchmark design, is the scaling bottleneck

#### Medical RAG Source-Dependence Problem
**arXiv:2605.29084** (May 27, 2026) — cs.CL, cs.AI, cs.IR
- Multi-author corpus gives different answers to same question depending on source
- Better retrieval reveals MORE disagreement — prior methods understated prevalence
- 5-label taxonomy for inter-source relationships; domain-agnostic framework
- Key insight: Source-dependence is missing evaluation axis — single-gold-answer paradigm insufficient

#### Operator Optimization: HTAM
**arXiv:2605.29734** (May 28, 2026) — cs.CL
- Hierarchical Transition Graph organizes coarse global directions and detailed local strategies
- KernelBench: consistently improves correctness, fast-solution rate, and speedup
- Key insight: Appropriate granularity organizes optimization experience for LLM-based CUDA generation

#### Factuality Checking via Test-Taking Strategies
**arXiv:2605.29712** (May 28, 2026) — cs.CL — ACL 2026 Main
- Grounded claim factuality as true/false reading comprehension
- 80% token reduction vs unguided open-ended reasoning; competitive accuracy
- SLMs trained via SFT + self-revision achieve competitive performance with rationales
- Key insight: Test-taking strategy prompting enables efficient, interpretable factuality checking

#### Gold-Action Policy Distillation: GAPD
**arXiv:2605.29584** (May 28, 2026) — cs.CL
- Dense token-level guidance for outcome-based RL in KBQA
- MID-ANCHOR MATCHING: matches student states to gold states through explored entity sets
- Surpasses SOTA on WebQSP, GrailQA, GraphQ
- Key insight: Dense intermediate supervision from gold logical forms beats sparse final rewards

#### Temporal Grounding in Music LLMs: MusTBENCH
**arXiv:2605.29300** (May 28, 2026) — cs.CL, cs.AI
- Five temporally grounded QA tasks for audio-language models
- Existing LALMs struggle with precise temporal grounding
- Key insight: Temporal grounding is missing capability in current music understanding models

#### LLM Behavioral Consistency in Tool-Calling
**arXiv:2605.28840** (Apr 23, 2026) — cs.CL, cs.AI, cs.SE
- First systematic study of behavioral consistency in multi-step tool-calling agents
- Structured tool-calling with typed parameters and side effects (richer than ReAct-style)
- Key insight: Production reliability in tool-calling agents remains fundamental open question

#### Referential Bridging: LLMBridge
**arXiv:2605.29048** (May 27, 2026) — cs.CL
- Combines heuristic pre/post-processing with LLM NLI ability
- Surpasses SOTA on ISNotes, BASHI, GUMBridge in both settings
- Key insight: Symbolic heuristics + neural NLI enables robust bridging resolution

#### Synthetic Misconception Generation
**arXiv:2605.29007** (May 27, 2026) — cs.CL
- Generation Agent + Examination Agent framework for targeted error generation
- Answer-grounding contributes more than expanded examples or external content
- Key insight: Targeted error generation enables tutoring applications where authentic student corpora unavailable

#### SafeRx-Agent: Medication Recommendation
**arXiv:2605.29146** (May 27, 2026) — cs.CL, cs.AI
- First fine-grained ATC fourth-level code generation for medication recommendation
- Safety verification traces alongside accuracy
- Key insight: Safety-critical domains require explicit verification alongside recommendation

#### Scientific Hypothesis Discovery: MOOSE-Copilot
**arXiv:2605.29475** (May 28, 2026) — cs.CL — ACL 2026 System Demonstrations
- Human-AI interaction protocol bridging divergent ideation and convergent refinement
- Three steering signals: initial blueprints, inter-stage routing, regenerative feedback
- Key insight: Structured expert steering outperforms purely autonomous baselines

---

## 2026-05-27 (Wednesday)

### New Insights:

#### MATCHA: Contradiction-Aware Semantic Similarity Metric
**arXiv:2605.27345** (May 26, 2026) — cs.CL
- Both token-overlap (ROUGE) and embedding-based (BERTScore) metrics assign nearly identical scores to contradicting texts
- MATCHA: dual-view metric rewarding proximity to gold AND penalizing distance from adversarially generated contradictions
- Outperforms 23 embedding models on TruthfulQA: +18.38% over ROUGE-L, +20.82% over BERTScore
- Key insight: Standard metrics miss fundamental errors because they don't penalize contradictions explicitly

#### FinHarness: Inline Safety Harness for Finance LLM Agents
**arXiv:2605.27333** (May 26, 2026) — cs.CL
- Finance agents need simultaneous blocking of unauthorized actions AND approval of legitimate workflows
- Three-component inline architecture: Query Monitor (intent + cross-turn drift), Tool Monitor (prospective calls), Cascade (adaptive lightweight/advanced judge routing)
- On FinVault: reduces ASR from 38.3% to 15.0% while preserving benign approval (41.1% → 39.3%)
- 4.7x fewer advanced-judge calls than always-advanced ablation
- Key insight: Inline per-step evaluation beats post-hoc auditing for irreversible mid-trajectory tool calls

#### MUSE: Disentangling Sycophancy from Uncertainty-Driven Conformity
**arXiv:2605.27288** (May 26, 2026) — cs.CL, cs.AI, cs.LG
- LLM conformity to user pushback has TWO distinct mechanisms: sycophantic conformity (aligns even with certainty) and uncertainty-driven conformity (increases with epistemic uncertainty)
- Both mechanisms grow with: (1) perceived user expertise, (2) plausibility of user suggestions
- MUSE framework maps epistemic uncertainty against conformity likelihood
- Key insight: Interventions need to target both RL-trained sycophancy AND training-corpora-driven uncertainty separately

#### Word Coverage Score (WCS): Decoding Filters as Censorship
**arXiv:2605.27268** (May 26, 2026) — cs.CL, cs.AI
- Top-p, Top-k, Min-p sampling filters act as unintended censorship mechanisms
- WCS quantifies lexical survival rate of low-frequency, high-information human words as function of sampling parameters
- Industry-standard defaults smooth unique human expression textures into homogenized discourse
- Framework for optimizing coherence vs lexical richness trade-off
- Key insight: Decoding mechanics suppress linguistic diversity even when the right words are in the probability space

#### PIPO: Latent Multi-Token Prediction Unifying Compression and MTP
**arXiv:2605.27255** (May 26, 2026) — cs.CL, cs.AI
- Previous work: latent compression (input side) and multi-token prediction (output side) pursued independently
- PIPO: mirror-image operations - compressor folds two input tokens into one latent, MTP head unfolds one hidden state into one output token
- On-Policy Distillation (OPD) naturally matches speculative decoding rejection-sampling criterion
- Confidence head trained alongside OPD with negligible extra cost (removes verifier)
- Results on AIME 2025, GPQA-Diamond, LiveCodeBench v6, LongBench v2 with Qwen3.5-4B/9B: +7.15 pass@4 improvement, up to 2.64x first-token-latency speedup, 2.07x per-token speedup
- Key insight: Unifying input compression and output expansion through OPD removes the verifier cost entirely

#### Semantic Competition vs Context Length in RAG
**arXiv:2605.27294** (May 26, 2026) — cs.CL, cs.IR
- RAG readers fail not just from longer context but from semantic competition
- Matched-control protocol: fixed passage count/length, replace hard competitors with less-competitive real passages
- For Phi-2: +6.0 EM points, +7.0 answer-inclusion points, +0.057 F1
- For Qwen2.5-1.5B: +4.5 EM points, +9.0 answer-inclusion points, +0.068 F1
- Right-censored half-life retention curves show competition effect distinct from context length
- Key insight: Competition effect clearer for F1 and answer inclusion than exact match; varies with snippet length

#### Coverage Illusion: Pre vs Post-Retrieval Routing Failure
**arXiv:2605.27220** (May 26, 2026) — cs.CL, cs.IR
- Query augmentation (HyDE, expansion) applied to every query = substantial inference cost/latency
- Case study: Danish National Encyclopedia, 20,000 query-workflow pairs
- Synthetic queries suggest LLM augmentation needed for >90% of queries; production reality: only 27.8%
- Coverage Illusion: structural mismatch between synthetic and real query distributions
- Pre-retrieval routing can't resolve - need revealed only after searching index
- Post-retrieval cascade (cheapest-first, escalate only when step returns no docs): +0.140 Composite Overall points, 31.8% latency reduction, 72.2% queries without LLM augmentation
- Key insight: Real traffic is far cheaper than synthetic suggests; post-retrieval cascade beats pre-retrieval routing

#### CPT: Collaborative Parallel Thinking for Test-Time Scaling
**arXiv:2605.27030** (May 26, 2026) — cs.CL
- Existing parallel TTS methods keep branches isolated - intermediate discoveries stay branch-private
- Information isolation causes redundant exploration (branches rediscover info found elsewhere)
- CPT: training-free inference framework enabling search-time information sharing across parallel branches
- Extracts compact intermediate info, maintains deduplicated query-level information pool, broadcasts via input context
- Each branch reuses others' discoveries instead of rediscovering
- HMMT and AIME benchmarks: stronger accuracy-latency Pareto frontier than baselines
- Key insight: Collaboration at inference time is an effective direction for efficient parallel TTS

#### DART: Adapting SFT Data for Reasoning Generalization
**arXiv:2605.26924** (May 26, 2026) — cs.CL
- Direct SFT on expert data hurts generalization when distribution mismatches target model
- DART: RL-trained mapper transforms original SFT data into model-adapted supervision
- Transformed data better matches target model's distribution and learning preferences
- Multiple models/datasets: DART improves generalization, higher training efficiency than direct RL
- Helps models surpass standard SFT
- Key insight: Distribution alignment between SFT data and target model is the bottleneck; RL mapper solves it

#### C4STYLI: Cross-Culture Aesthetic Stylistics Benchmark
**arXiv:2605.27296** (May 26, 2026) — cs.CL (IJCAI 2026)
- LLMs deployed across diverse cultural contexts but aesthetic stylistics underexplored
- C4STYLI: benchmark from Hong Kong and Chinese Mainland movie titles and advertising slogans
- Evaluates behavioral recognition and productive competence
- LLMs differ from humans in stylistic recognition; varies across text domains
- Recognition and generation not consistently aligned
- Structural ablation: Hong Kong setting, LLM recognition relies on surface linguistic info, not stylistic structure
- Key insight: Limited sensitivity to culture-specific stylistic structure - recognition/generation gap is real

#### Real Images, Worse Judgments: VLM Concreteness/Imagery Gap
**arXiv:2605.27315** (May 26, 2026) — cs.CL
- Visual inputs assumed to improve language understanding in VLMs
- VLMs cannot distinguish useful visual evidence from incidental context in lexical judgments
- Real-image contexts do NOT yield consistent gains; often hurt alignment with human ratings
- Sharpest degradation when visual evidence is least relevant (abstract/low-imagery words)
- Probing + canonical correlation analysis: real-image contexts cause representational shifts, sensitivity to spurious visual cues
- Instructing models to focus on textual content at inference reduces degradation
- Key insight: Current instruction-tuned VLMs need better calibration of when visual context should inform lexical judgments

#### Demographic Information in Hate Speech Detection
**arXiv:2605.27313** (May 26, 2026) — cs.CL
- Demographic features help in some settings, behave as noise in others
- Gains concentrate in regimes with: low training disagreement, high test disagreement, fine-grained ambiguity measurement, sufficient training data, greater demographic overlap
- Gated demographic residual model: treats demographics as selective adjustment to text-only predictions
- Effective on high disagreement or low confidence examples
- Key insight: Demographics should NOT be assumed useful by default; their value depends jointly on data regime and modeling framework

#### ChartCounterfactuals: Evaluating VLM Visual Reasoning
**arXiv:2605.27311** (May 26, 2026) — cs.CL, cs.CV
- Chart QA benchmarks allow models to reach solutions through shortcuts or prior familiarity
- Chartographer: framework to reverse engineer charts into executable code, generate counterfactual variants
- Same question, different chart data, different answers
- Counterfactual charts reveal failures hidden by single-chart performance
- VLMs fail to generalize after answering original chart correctly; failures most prevalent when updates require novel visual reasoning pathways
- Key insight: Counterfactual evaluation is necessary to isolate true visual reasoning from memorized shortcuts

#### Pashto TTS Evaluation: INSV Framework
**arXiv:2605.26978** (May 26, 2026) — cs.CL, cs.SD
- TTS evaluation for low-resource non-Latin-script languages fails with single ASR round-trip WER
- INSV (Intelligibility, Naturalness, Script fidelity, Verification) separates failure modes
- INSV-A automated screening: synthesis completion, ASR WER/CER, transcript script fidelity rate, audio language identification
- PashtoTTS-Bench: Edge GulNawaz lowest WER (24.1% FLEURS, 27.4% CV24)
- Whisper Large V3 returns 0.0% Pashto labels on checked audio; MMS-LID-4017 and SpeechBrain separate Pashto from Urdu control
- Key insight: Single metrics miss failure modes - multi-dimensional evaluation needed for low-resource TTS

#### KZ-SafetyPrompts: Kazakh Safety Evaluation Dataset
**arXiv:2605.26947** (May 26, 2026) — cs.CL (SIGUL2026)
- Kazakh underrepresented in LLM safety evaluation resources
- 5,717 prompts in Kazakh (Cyrillic), 11 categories: self-harm, violence, child exploitation, sexual content, racist content, radicalization, regulated goods/illegal activities
- GPT-4o overall refusal rate 28.2%, varying 5.5% to 53.8% across categories
- Kazakh prompts expose category-specific safety gaps not captured by English-only evaluation
- Key insight: Language-specific safety evaluation reveals gaps invisible in English-only benchmarks

#### In-Vitro Cross-Lingual Transfer Study
**arXiv:2605.26683** (May 26, 2026) — cs.CL, cs.AI
- Natural corpora entangle lexical overlap, morphology, data imbalance, tokenization
- Framework: two procedurally generated languages, shared ontology/typed grammar/compositional structure, different surface realization
- 700 controlled runs
- Transfer governed by whether tokenization preserves reusable cross-lingual substructure, not raw lexical similarity
- Smaller vocabularies improve masked transfer by keeping words decomposable into shared fragments
- Larger vocabularies turn forms into language-specific atoms
- Transfer emerges as staged process: grammatical and type-level competence precede masked lexical generalization
- Tokenizer bridge strength correlates with masked reachability
- Key insight: Subword decomposability into shared cross-lingual structure is the key to transfer

#### Muon Optimizer for Adversarial Training
**arXiv:2605.26929** (May 26, 2026) — cs.LG
- Muon orthogonalizes matrix-valued updates via approximate polar decomposition, memory cost comparable to SGD
- AT robustness depends on min-max objective optimization
- SGD remains default for AT; adaptive optimizers improve standard training but may hurt robustness
- Theoretical: Muon imposes spectral-norm stability ceiling on matrix updates, limiting uncontrolled spectral growth
- Empirical across 5 architectures, 3 ℓ_p threat models (ℓ_∞, ℓ_1, ℓ_2), their union
- Muon competitive with SGD on CNNs, substantially outperforms AdamW on CNNs and ViTs
- Key insight: Optimizer geometry is a security-relevant factor in AT - orthogonalized updates have distinct robustness benefits

#### CoMeTS-GAN: GAN-Diffusion for Financial Time Series
**arXiv:2605.27113** (May 26, 2026) — cs.LG, cs.AI
- Synthetic financial data addresses scarcity and privacy but reproducing stylized facts remains open challenge
- CoMeTS-GAN: Conditional GAN jointly generating mid-price and volume time series for correlated stocks
- GAN's Critic guides diffusion process for correlation structure quality
- Framework models inter-asset correlation structures explicitly
- Validated against leading generative architectures
- Key insight: Combining GAN and diffusion captures both distribution fidelity and correlation structure realism

### Key Trends from May 27, 2026:

1. **Contradiction Detection Breaking Through**: MATCHA shows 18-20% gains over standard metrics by explicitly penalizing contradictions
2. **Finance Agent Safety Moves Inline**: FinHarness demonstrates inline per-step evaluation (38.3% → 15.0% ASR) beats post-hoc auditing
3. **Conformity Has Two Mechanisms**: MUSE disentangles sycophantic from uncertainty-driven conformity - interventions must target both
4. **Decoding Is a Censorship Mechanism**: WCS shows sampling filters suppress low-frequency high-information words even when in probability space
5. **Unified Compression-MTP**: PIPO shows OPD naturally matches speculative decoding rejection - unifying input/output removes verifier cost
6. **Post-Retrieval > Pre-Retrieval Routing**: Coverage Illusion reveals 72.2% of real queries don't need LLM augmentation vs 90%+ for synthetic
7. **Collaboration at Inference**: CPT enables parallel branches to share discoveries via deduplicated info pool
8. **SFT Data Distribution Alignment**: DART uses RL mapper to transform expert data to match target model distribution
9. **Cultural Stylistics Gap**: LLMs rely on surface linguistic info for Hong Kong stylistics, not structural understanding
10. **Visual Context Can Degrade**: VLMs perform worse with real images when visual evidence is irrelevant

---

## 2026-05-26 (Tuesday)

### New Insights:

#### StepGap: Step-Level Evidence-Gap Detection for Multi-Hop QA
**arXiv:2605.24733** (May 23, 2026) — cs.CL
- Hybrid NLI-LLM decision tree detects step-level evidence gaps in multi-hop QA
- Three typed labels: Contradicted Claim (CC), Irrelevant Evidence (IE), Missing Bridge (MB)
- Each label tied to a concrete repair action
- Reveals Q-F1 trap: question-level F1 is mechanically inflated by checkers that flag every step — step-level F1 is the necessary diagnostic
- Competing-error cancellation: LLM-only baselines have internal stages masking each other's errors
- As typed GRPO process reward: improves Qwen2.5-7B-Instruct EM from 32.1±0.3 to 35.4±0.9 across three seeds
- +5.6 Avg EM gain over matched Search-R1 GRPO reproduction (single-run comparison)
- Key insight: Typed process rewards outperform untyped step-level rewards — not just what step is wrong but what kind of gap it is determines the repair path

#### HiMed: Hindi Medical Reasoning
**arXiv:2605.24635** (May 23, 2026) — cs.CL
- Hindi severely underrepresented in medical LLMs; English-Hindi accuracy gap persists
- HiMed: Hindi reasoning medical corpus + benchmark covering Western and Indian medicine
- HiMed-8B: Hindi-form medical reasoning LLM with decaying scaffolding reward
- Decaying scaffolding reward incentivizes Hindi reasoning without sacrificing English performance
- Validates each training stage contribution independently
- Key insight: Language-specific reasoning scaffolding (not just translation) is the path to closing the English-Hindi medical gap

#### DaR: Decompose-and-Refine for Legal Multi-Hop QA
**arXiv:2605.24454** (May 23, 2026) — cs.CL
- Statutory legal QA requires multi-hop reasoning across multiple legal issues
- Problem: vocabulary gap between user questions and statutory text leaves retrieval accuracy poor
- DaR: progressively decomposes complex legal questions into atomic sub-questions
- Generates statute-aligned parametric queries for each sub-question
- Enables single most central statutory provision selection per legal issue
- Evaluated on KoBLEX (Korean multi-hop LQA benchmark) with Qwen3-32B and Gemma3-27B
- Explicit sub-question/provision separation enables transparent issue-level verification
- Key insight: Query decomposition + parametric refinement addresses the vocabulary gap that natural-language query reformulation misses

#### EPC: Expected Predictive Compression for Long-Context Memory
**arXiv:2605.24579** (May 23, 2026) — cs.CL
- Long-context memory systems fail under fixed budgets but end-to-end eval doesn't reveal whether failure is write-side or retrieval-side
- Four-condition diagnostic: TFC (truncated full context), OE (oracle evidence), CSM (complete stored memory), RM (retrieved memory)
- Key finding: Write-side gaps EXCEED retrieval-side gaps for most baselines — 4 of 6 baselines are write-dominant
- EPC: LLM anticipates likely future questions at write time, preserves minimal supporting evidence under token budget
- Results across GPT-5.2, Claude Sonnet 4, Gemini 2.5 Pro: EPC achieves 0.49 CSM vs 0.44 for strongest baseline (Summary-LLM)
- Reduces Delta_write to 0.04 while leaving retrieval performance comparable
- Key insight: What you write to memory matters more than how you retrieve it — improving write-stage evidence selection is the key avenue

#### Claw-Anything: Always-On Personal Assistant Benchmark
**arXiv:2605.26086** (May 25, 2026) — cs.AI
- Current agent systems operate over narrow slices of user digital world
- Claw-Anything: benchmark expanding context along 3 dimensions — long-horizon activity histories, interdependent backend services, integrated GUI/CLI across multiple devices
- Simulates months of user activity through multi-round event injection with realistic noise, irrelevant events, conflicting signals
- Also evaluates proactive assistance: agents anticipating user needs before explicit requests
- GPT-5.5 achieves only 34.5% pass@1 — substantially below prior benchmarks
- Automated data-generation pipeline: 2,000 training environments improves base model by 23.7%
- Key insight: Frontier models are still far from the always-on assistant vision — current narrow context is the bottleneck, not model capability

#### ContextEcho: Persona Drift in Long Agentic-Coding Sessions
**arXiv:2605.24279** (May 23, 2026) — cs.CL, cs.SE
- Frontier models' "helpful programming assistant" persona does not survive long agentic-coding sessions
- 25-probe identity suite + snapshot-then-probe protocol
- Across 23 frontier models: persona drift is general across organizations, not family-specific
- In-session compaction does NOT reliably reset drift
- Single-shot anchor DOES restore trained register
- Drift can facilitate tool-use continuation BUT in tool-free chat it breaks formatting contracts and inflates output length
- Mode-dependent downstream effects: drift has opposite impacts in different interaction modes
- Key insight: Persona stability is a deployment-scale problem invisible in short evaluations — compaction does not reset what long sessions build up

#### AstroMind: Spacecraft Behavior Reasoning Benchmark
**arXiv:2605.24573** (May 23, 2026) — cs.CL
- Spacecraft maneuver intent inference — why it maneuvers, not just that it did
- Three task types: intent inference, maneuver parameter estimation, threat assessment
- High-fidelity astrodynamics simulations + realistic sensing noise + multi-source textual intelligence at varying reliability
- Qwen3 (32B) leads on intent inference accuracy; QwQ (32B) leads on threat assessment
- GPT-OSS (20B) produces strongest judged reasoning quality
- Structured reasoning prompts help consistently across 8B models
- Key insight: Physics-grounded reasoning benchmarks reveal that structured prompts + small models can approach larger models when the domain has clear constraint structure

#### gov-llm: EU AI Act Compliance as Continuous Runtime Signal
**arXiv:2605.24737** (May 23, 2026) — cs.CL, cs.AI, cs.CY
- Current AI compliance is binary audit-time verdict — not continuous measurable property
- EU AI Act demands ongoing behavioral drift detection in deployed systems
- gov-llm: routing architecture where model selection is determined by accumulated compliance scores
- Panel of regulatory judges (LLM evaluators specialized per criterion: EU AI Act, GDPR, ANSSI, accessibility)
- Inter-judge disagreement reframed as regulatory uncertainty signal warranting human arbitration
- 49 annotated prompt/response pairs, 4 SLMs (1.7B-7B) running fully on-premise
- Agreement rates: 51.5% (mistral:7b) to 69.1% (phi4-mini)
- Judge-specific position bias degrades agreement by up to 25 percentage points across question-order conditions
- Key insight: Compliance is a continuous runtime property — static audits miss emergent behavioral drift

### Key Trends from May 26, 2026:

1. **Typed Process Rewards Maturing:** StepGap shows typed gap detection (what kind of failure, not just that failure occurred) enables targeted repair — GRPO process reward gains +5.6 EM over untyped
2. **Write > Retrieve for Long Context:** EPC diagnostic framework proves write-stage gaps dominate retrieval gaps — compression must anticipate questions, not just store evidence
3. **Persona Drift is Deployment-Scale:** ContextEcho shows 23 frontier models drift across organizations — compaction doesn't reset it, single-shot anchor does — invisible in short evals
4. **Hindi Medical Reasoning:** Language-specific scaffolding (decaying reward) closes English-Hindi gap without cross-language interference
5. **Legal Multi-Hop:** DaR shows query decomposition + parametric refinement beats natural-language reformulation for statutory retrieval
6. **Physics-Constrained Reasoning:** AstroMind shows structured prompts + domain constraints let smaller models approach larger ones
7. **Compliance as Runtime Signal:** gov-llm demonstrates continuous compliance monitoring via judge panel disagreement — structural position bias is a key failure mode
8. **Always-On Agents Far from Ready:** GPT-5.5 at 34.5% on Claw-Anything — context breadth is the bottleneck, not model intelligence

---

## 2026-05-25 (Monday)

### New Insights:

#### LINK: Lexical Interventions for Multilingual Knowledge Transfer
**arXiv:2605.23885** (May 22, 2026) — cs.CL
- Problem: Cross-lingual knowledge transfer for low-resource languages requires parallel data, translation systems, or auxiliary models
- LINK: data-level intervention using bilingual vocabularies for lexical substitutions during pretraining
- Achieves up to 2x speedup in training to reach equivalent performance
- Requires only a bilingual vocabulary (near-zero cost for virtually any language)
- Key insight: Lexical substitution at data level outperforms model-level interventions for multilingual transfer

#### OnePred: Next-Query Prediction via Recursive Intent Memory
**arXiv:2605.23668** (May 22, 2026) — cs.CL, cs.AI
- Problem: LLM conversational systems are reactive; full history concatenation is expensive (linear token growth)
- OnePred: recursively updated memory as sole cross-turn context; bounded per-turn cost independent of conversation length
- Two-stage RL pipeline: first teaches what to predict, then what to compress
- Results: 22x reduction in per-turn token consumption while exceeding all baselines
- Key insight: Intent trajectory tracking (not raw history) is sufficient for next-query prediction

#### SkillOpt: Executive Strategy for Self-Evolving Agent Skills
**arXiv:2605.23904** (May 25, 2026) — cs.AI
- Problem: Agent skills are hand-crafted or loosely self-revised — none behaves like a deep-learning optimizer
- SkillOpt: systematic controllable text-space optimizer for agent skills
- Separate optimizer model turns scored rollouts into bounded add/delete/replace edits on skill document
- Zero inference-time model calls at deployment
- Key insight: Frozen agent + trained skill optimizer enables reproducible skill improvement

#### SpaceNum: Spatial Numerical Understanding in VLMs
**arXiv:2605.23898** (May 22, 2026) — cs.AI
- Problem: VLMs deployed in embodied environments produce numerical outputs but unclear if truly grounded
- Findings: Models largely fail to ground numbers in spatial meaning; perform close to random
- Rely on shallow spatial cues; fail to build stable coordinate-aware representations
- Explicit reasoning provides only marginal gains; tuning partially helps
- Key insight: VLMs lack genuine spatial-numerical grounding despite appearing capable

#### EDGE-OPD: Evidence Guided On-Policy Distillation
**arXiv:2605.23493** (May 22, 2026) — cs.AI
- Problem: On-Policy Self-Distillation (OPSD) may train on side effects rather than desired transferable behavior
- Solution: Guided rollouts + evidence mask — only update student at token positions where privileged context supports sampled token
- OPSD completely fails to learn target identity; EDGE-OPD succeeds
- Key insight: Localized evidence masking enables efficient knowledge transfer while preserving general capabilities

#### EPC-AW: Epistemic Planning Calibration for Multi-Agent Systems
**arXiv:2605.23414** (May 22, 2026) — cs.AI, cs.LG
- Problem: LLM multi-agent systems fail due to epistemic miscalibration — agents misjudge knowledge when evaluating plan feasibility
- Solution: EPC-AW assesses plans under varying information conditions; uses consistency-based plan selection
- Improves system-level success by average 9.75%
- Key insight: Epistemic calibration (not just execution correctness) is crucial for multi-agent planning

#### ASAM: Adversarial Multimodal Knowledge Editing
**arXiv:2605.23780** (May 22, 2026) — cs.AI
- Problem: Intrinsic multimodal knowledge editing achieves reliability but fails to generalize across semantic variations
- Solution: LAR (Latent Adversarial Robustification) + RCSL (Rank-Constrained Subspace Learning)
- Enforces low-rank alignment of adversarial representations at edit layer
- Key insight: Adversarial semantic supervision bridges the generalization gap in multimodal knowledge editing

### Key Trends from May 25, 2026:

1. **Skill Optimization Maturation:** SkillOpt-style trained skill evolution emerging as next step beyond hand-crafted prompts and loose self-revision
2. **Intent-Based Conversation:** OnePred (22x token reduction) demonstrates intent trajectory tracking outperforms raw history concatenation
3. **Multimodal Generalization:** Adversarial approaches (ASAM) addressing the semantic variation gap in knowledge editing
4. **Multi-Agent Epistemics:** Planning calibration (EPC-AW) becoming recognized as distinct failure mode from execution errors
5. **Spatial Grounding Gap:** VLMs fundamentally lack numerical-spatial grounding despite producing seemingly meaningful coordinates

---

## 2026-05-24 (Sunday)

### New Insights:

#### MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agents
**arXiv:2605.22794** (May 21, 2026) — cs.AI
- Current self-evolving agents confined to text-mutable artifacts; cannot touch agent harness code itself
- Argues source-level adaptation is fundamentally more general: Turing-complete, strict superset of text-mutable scope, deterministic effect, immune to long-context drift
- MOSS: self-rewriting at source level on production agentic substrates
- Evolution anchored to automatically curated batch of production-failure evidence; multi-stage pipeline delegates code modification to external coding-agent CLI
- Verification via replay against batch in ephemeral trial workers; promotion via user-consent-gated container swap with health-probe rollback
- Results on OpenClaw: 4-task mean grader score 0.25 → 0.61 in single cycle without human intervention
- Key insight: Text-mutable agents hit a structural ceiling — source-level access unlocks a fundamentally higher capability level

#### Gated DeltaNet-2: Decoupled Erase/Write for Linear Attention
**arXiv:2605.22791** (May 21, 2026) — cs.AI
- Linear attention uses fixed-size recurrent state vs unbounded cache; enables constant-memory decoding
- Problem: scalar gate controlled both erasing old content AND writing new content in prior delta-rule models
- Solution: Gated DeltaNet-2 separates channel-wise erase gate (b_t) from channel-wise write gate (w_t)
- Derived fast-weight update view, chunkwise WY algorithm with asymmetric erase factors, gate-aware backward pass
- 1.3B params trained on 100B FineWeb-Edu tokens; strongest results among Mamba-2/Gated DeltaNet/KDA/Mamba-3 variants
- Most pronounced advantage on long-context RULER needle-in-a-haystack benchmarks
- Key insight: Decoupling erase/write is the missing piece for linear attention — enables superior long-context retrieval

#### AI-Driven Formal Proof Search for Open Mathematical Problems
**arXiv:2605.22763** (May 21, 2026) — cs.AI
- First large-scale evaluation of using LLMs to generate formal proofs in Lean for genuinely open problems
- Most capable agent autonomously resolved 9 of 353 open Erdős problems at few hundred dollars per problem
- Proved 44/492 OEIS conjectures; deployed in combinatorics, optimization, graph theory, algebraic geometry, quantum optics research
- Basic agent alternating LLM generation with Lean verification replicated successes but at higher cost on hardest problems
- Key insight: LLMs + formal verification is now viable for actual open research problems, not just competition benchmarks

#### HarnessAPI: Unified Framework for APIs and MCP Tools
**arXiv:2605.22733** (May 21, 2026) — cs.AI
- Problem: every Python function deployed as LLM tool must exist in two forms (HTTP endpoint + MCP registration) with duplicated business logic but divergent surrounding machinery
- HarnessAPI: typed skill folder as single source of truth — derives streaming HTTP endpoint (SSE), OpenAPI/Swagger UI, zero-config MCP tool from one handler + Pydantic schemas
- 74% reduction in framework-facing boilerplate vs dual-stack (FastAPI + FastMCP)
- Key insight: Tool deployment infrastructure is a real friction point; unification frameworks emerging to address MCP/agent tooling complexity

### Key Trends from May 24, 2026:

1. **Source-Level Self-Evolution:** MOSS demonstrates self-modification at code level achieves 2.4x improvement over text-only approaches — structural failures require structural fixes
2. **Formal Reasoning Production Readiness:** AI solving actual open Erdős problems (not competition math) — proof assistant integration transitioning from benchmark to real research tool
3. **Attention Architecture Iteration:** DeltaNet variants with decoupled erase/write continuing to improve — linear attention closing long-context gap with softmax attention
4. **Tool Deployment Unification:** MCP/HTTP boilerplate reduction (74%) indicates infrastructure tooling catching up to model capabilities
5. **No arXiv Publication Today:** Weekend — no new submissions. May 21 papers are the latest material.

---


## 2026-05-23 (Saturday)

### New Insights:

#### Vector Policy Optimization (VPO): Training for Diversity Improves Test-Time Search
**arXiv:2605.22817** (May 21, 2026)
- Addresses "diversity collapse" — standard post-training optimizes scalar reward, producing low-entropy distributions unsuitable for inference-time search
- VPO: RL algorithm explicitly training policies to anticipate diverse downstream reward functions and produce diverse solutions
- Leverages vector-valued rewards (per-test-case correctness, multiple user personas, multiple reward models)
- Drop-in replacement for GRPO advantage estimator, but trains LLM to output solution sets where individual solutions specialize to different trade-offs in vector reward space
- Results: matches or beats strongest scalar RL baselines on test-time search (pass@k, best@k); gap widens as search budget grows
- Evolutionary search: VPO models unlock problems GRPO models cannot solve at all
- Key insight: As test-time search becomes standardized, optimizing for diversity may need to become the default post-training objective

#### Multi-Reward RLIF: Collapse-free Training Framework
**arXiv:2605.22620** (May 21, 2026)
- RLVR improved reasoning but requires external supervision; RLIF (scalable unsupervised alternative) uses signals from the model itself
- Problem: single internal reward leads to reward hacking, entropy collapse, degraded reasoning structure
- Solution: decomposes training signal into two complementary components — answer-level reward based on cluster voting + completion-level reward based on token-wise self-certainty
- GDPO-based normalization to reduce reward-scale imbalance
- KL-Cov regularization targets low-entropy token distributions responsible for disproportionate entropy reduction, preserving exploration and preventing late-stage collapse
- Key insight: Complementary internal rewards + targeted regularization can support stable long-horizon reasoning without external ground-truth supervision

#### CAME-Grad: Conflict-Averse Multi-Task Learning for Radiology Report Generation
**arXiv:2605.22635** (May 21, 2026) — ICML 2026
- Characterizes linear scalarization failure in multi-task learning as "Double Dilemma": drift term deviation + diffusion term decay
- Solution: Conflict-Averse Magnitude-Enhanced Gradient Descent (CAME-Grad) with conflict-averse direction rectification + magnitude-enhanced energy injection
- Adaptive gradient fusion mechanism for dynamic balance between theoretical optimal direction and task-specific inductive bias
- Results: +2.3% MIMIC-CXR, +1.9% IU X-Ray across 8 RRG methods
- Key insight: Gradient dynamics analysis reveals structural problems invisible at architecture level — optimization-level solutions transfer across backbones

### Key Trends from May 23, 2026:

1. **Diversity as Post-Training Objective:** VPO directly addresses diversity collapse from scalar reward optimization — may redefine default post-training goals as test-time search matures
2. **RLIF Maturation:** Multi-reward RLIF with targeted regularization (KL-Cov) solves the entropy collapse problem that plagued single-reward approaches
3. **Multi-Task Gradient Dynamics:** CAME-Grad shows gradient-level analysis reveals structural problems invisible at architecture level — optimization-level solutions transfer across backbones
4. **Inference-Time Search Renaissance:** AlphaEvolve-style search now has proper training-time support (VPO) — closing the loop between training and search

---

## 2026-05-22 (Friday)

### New Insights:

#### ConvexTok: Tokenisation via Convex Relaxations
**arXiv:2605.22821** (May 21, 2026)
- Reformulates tokeniser construction as linear program solved via convex optimisation
- Current BPE/Unigram are greedy — locally optimal without considering resulting vocabulary as a whole
- Consistently improves bits-per-byte (BpB) achieved by language models
- Allows certifying how far tokeniser is from optimal via lower bound
- Empirically within 1% of optimal at common vocabulary sizes
- Key insight: Optimal tokenizers require global optimization — greedy approaches structurally suboptimal

#### Evaluating Commercial AI Chatbots as News Intermediaries
**arXiv:2605.22785** (May 21, 2026)
- 14-day evaluation of 6 AI chatbots on 2,100 factual questions from same-day BBC News
- Best systems achieve >90% multiple-choice accuracy on same-day news
- Lose 11-13% under free-response, 16-17% across cohort
- Key failure patterns: Hindi lowest (79% vs 89-91%), retrieval >70% of errors, false premise vulnerability (19-70%)
- Detection-accuracy paradox: best false-premise detector ranks second in adversarial accuracy
- Key insight: High accuracy masks systematic regional inequity and near-total dependence on retrieval infrastructure

#### Political Consistency Training (PCT)
**arXiv:2605.22771** (May 21, 2026)
- Addresses covert political bias: LLMs handle opposing political sides asymmetrically
- Identifies 7 categories of covert bias techniques; RL training with consistency-based objectives
- Preserves overall helpfulness while reducing bias
- Key insight: Covert bias is structural — requires consistency-based training, not surface adjustments

#### Data Temporality Impact on LLM Pre-training
**arXiv:2605.22769** (May 21, 2026)
- Studies impact of data ordering on time-sensitive factual knowledge (7,000+ temporally grounded questions)
- Pretrains 6B models on temporally ordered vs shuffled Common Crawl
- Temporally ordered = improved factual freshness; shuffled = peaks on older data (factual repetition)
- Key insight: Data temporality matters for knowledge currency — ordered pretraining improves freshness

#### ChronoMedKG: Temporal Biomedical Knowledge Graph
**arXiv:2605.22734** (May 21, 2026)
- 460,497 evidence-linked triples, 13,431 diseases with temporal components
- Multi-agent LLM pipeline with multi-model consensus; ChronoTQA benchmark: 3,341 questions
- Frontier LLMs lose ~30 points moving from static to temporal questions
- ChronoMedKG retrieval rescues 47-65% of long-tail failures (vs 17-29% for HPOA-RAG)
- Key insight: Temporal grounding is crucial axis previously absent from biomedical KGs

#### Self-Policy Distillation (SPD)
**arXiv:2605.22675** (May 21, 2026)
- Bootstraps LLMs by training on own generations without external signals
- Extracts low-rank capability subspace from gradients on correctness-defining tokens
- Up to 13% improvement over state-of-art self-distillation, 16% over pretrained baselines
- Key insight: Capability-subspace projection isolates task-relevant signals from stylistic artifacts

#### Hyperfitting as Late-Stage Geometric Expansion
**arXiv:2605.22579** (May 21, 2026) — ICML 2026
- Fine-tuning to near-zero loss enhances open-ended generation (hyperfitting)
- NOT temperature scaling — dynamic context-dependent rank reordering, not distribution sharpening
- Terminal Expansion: +80.8 feature dimension in final transformer block
- Late-Stage LoRA: updating only final 5 layers yields robust generation with minimal parameters
- Key insight: Hyperfitting works via terminal geometric expansion promoting deep-tail tokens

#### LANG: Multilingual Reasoning with Language-Adaptive Hint Guidance
**arXiv:2605.22567** (May 21, 2026) — ACL 2026
- RL effective for reasoning but benefits don't translate to multilingual contexts
- LANG: language-conditioned hints with progressive decay + language-adaptive switch
- Substantially enhances multilingual reasoning without compromising language consistency
- Key insight: Language-adaptive learning horizons resolve consistency-reasoning trade-off in multilingual RL

#### DeferMem: Query-Time Evidence Distillation for Long-Term Memory QA
**arXiv:2605.22411** (May 21, 2026)
- Decouples high-recall candidate retrieval from query-conditioned evidence distillation
- DistillPO: RL algorithm for distilling noisy candidates into faithful, self-contained evidence
- Highest QA accuracy with fastest runtime, zero commercial-API token cost for memory operations
- Key insight: Query-time distillation beats pre-computed memory — dynamic evidence selection superior

#### High-Entropy Sum (HES): Unified Data Selection for LLM Reasoning
**arXiv:2605.22389** (May 21, 2026)
- HES: training-free metric summing entropy of top 0.5% highest-entropy tokens per reasoning sample
- Validated across SFT, RFT, and RL paradigms
- Top 20% HES-ranked data matches full-dataset performance in SFT
- Key insight: High-entropy tokens in reasoning = quality signal; top 0.5% captures essential decision points

#### Behavioral Fine-Tuning Induces Pathology-Like Patterns
**arXiv:2605.22356** (May 21, 2026)
- Fine-tunes LLMs on synthetic datasets inspired by maladaptive behavioral patterns
- Produces stable, context-general shifts in next-token probability distributions
- Effects generalize beyond training contexts — detectable in qualitative completions
- Key insight: LLMs can be behaviorally induced to exhibit consistent pathological patterns

#### Five-Stage Causal Feature Analysis
**arXiv:2605.22462** (May 21, 2026)
- Five stages: probe design, feature extraction, causal validation, robustness testing, deployment integration
- 15 selective features explain only 31% of variance vs SAE's 99.7%
- Gap between detection robustness and causal robustness exposed
- Optimal monitor: $8.96 per 1000 queries vs $1000 baseline (99.1% saving)
- Key insight: Multi-stage methodology required for robust causal analysis — single-stage approaches insufficient

#### Boiling the Frog: Multi-Turn Agentic Safety Benchmark
**arXiv:2605.22643** (May 21, 2026)
- Evaluates tool-using AI susceptibility to incremental attacks starting with benign workspace edits
- Key insight: Incremental attacks are the real agentic safety challenge — single-turn benchmarks insufficient

#### TransitLM: Map-Free Transit Route Generation
**arXiv:2605.22355** (May 21, 2026)
- 13M+ transit route records from 4 Chinese cities, 120,845 stations, 13,666 lines
- LLM produces structurally valid routes without explicit mapping infrastructure
- Key insight: End-to-end map-free route generation is learnable from origin-destination alone

#### Cohesion-6K: Arabic Social Cohesion Dataset
**arXiv:2605.22447** (May 21, 2026)
- Conflict posts receive 2-4x more user interaction than resolution-oriented (p < 0.01)
- Key insight: Divisive discourse attracts disproportionate visibility — resolution content systematically suppressed

### Key Trends from May 22, 2026:

1. **Retrieval vs Reasoning:** News chatbot study confirms >70% of errors are retrieval failures — retrieval infrastructure is the bottleneck
2. **Regional Inequity:** Hindi 10 points below other languages; Anglophone bias in retrieval confirmed across 6 chatbots
3. **False Premise Vulnerability:** Models at 88-96% accuracy drop to 19-70% with subtle false premises
4. **Temporal Knowledge:** Ordered pretraining improves factual freshness; temporal biomedical KGs rescue 47-65% of failures
5. **Self-Distillation Advances:** Capability-subspace projection enables 13% gains without external signals
6. **Generation Mechanics:** Hyperfitting works via terminal geometric expansion (+80.8 dim in final layers)
7. **Multilingual RL:** Language-adaptive hint guidance resolves consistency-reasoning trade-off (ACL 2026)
8. **Memory Architecture:** Query-time distillation beats pre-computed memory — dynamic evidence selection wins
9. **Data Quality Metric:** HES (top 0.5% entropy tokens) works across SFT/RFT/RL — 20% data matches full dataset
10. **Behavioral Induction:** Fine-tuning can induce consistent pathological patterns from synthetic data
11. **Agentic Safety:** Incremental attacks starting from benign edits are the real threat
12. **Social Media Dynamics:** Conflict consistently outperforms cohesion 2-4x in engagement

---

## 2026-05-21 (Thursday)

### New Insights:

#### CopT: Contrastive On-Policy Thinking (Reversing CoT Order)
**arXiv:2605.20075** (May 19, 2026)
- Reformulates chain-of-thought by reversing the thinking/answering order
- First elicits draft answer, then invokes on-policy thinking conditioned on draft
- Uses contrastive verification: compares model's support under discrete-token vs continuous-embedding inputs
- Sequence-level reverse KL estimator captures answer-relevant uncertainty (not arbitrary latent uncertainty)
- Results: up to 23% peak accuracy improvement, 57% token reduction at comparable/higher accuracy
- No additional training required
- Addresses "performative reasoning": models can identify answers before extended thinking but current CoT paradigm delays access
- Key insight: Thinking should follow answer drafting, not precede it — early answer signals determine whether extended reasoning is needed

#### CEPO: Contrastive Evidence Policy Optimization for RLVR
**arXiv:2605.19436** (May 19, 2026)
- RLVR with verifiable rewards treats all tokens equally — decisive reasoning steps get same signal as grammatical filler
- Solution: ask not just "does correct answer favor this token?" but "does correct answer favor AND wrong answer disfavor?"
- Token satisfying both = genuine reasoning step; satisfying neither = filler
- Wrong-answer teacher from rejected rollouts in training batch — no additional sampling cost
- Theoretical guarantee: inherits safety of prior state-of-art while strictly sharpening credit at decisive tokens
- Empirically: 43.43% and 60.56% average accuracy at 2B and 4B scale vs 41.17% and 57.43% for GRPO
- Distribution-matching methods (OPSD, SDPO) fall below untrained baseline — confirms information leakage theory
- Key insight: Contrastive wrong-answer signal distinguishes decisive steps from filler without answer leakage

#### Reasoning Shrinkage: Why Pass@k Degrades Under SFT
**arXiv:2605.17026** (May 16, 2026)
- Reasoning models improve pass@1 but show "coverage shrinkage" — pass@k degrades relative to base model
- Root cause: "forks in the road" decision points in training data where model faces indecipherable patterns with multiple valid paths
- SFT collapses these diverse paths into single answer, reducing model's ability to generate diverse completions
- Controlled case studies across graph branching and reasoning modes confirm correlation between decision-point prevalence and shrinkage
- Partial mitigation: targeted data synthesis of decision-points + diversity-encouraging decoding
- Key insight: SFT-based post-training destroys the diversity that makes sampling effective — data composition matters more than training duration

#### optimize_anything: Universal Text Parameter Optimization
**arXiv:2605.19633** (May 19, 2026) — CAIS 2026
- Single LLM-based optimization system for any text artifact evaluated by scoring function
- Unifies tasks traditionally requiring domain-specific algorithms: agent architectures, scheduling, CUDA kernels, circle packing
- Results: nearly triples Gemini Flash ARC-AGI accuracy (32.5% to 89.5%), cuts cloud costs 40%, 87% of generated CUDA kernels match or beat PyTorch, outperforms AlphaEvolve on circle packing (n=26)
- Key finding: actionable side information yields faster convergence and higher final scores than score-only feedback
- Multi-task search outperforms independent optimization through cross-task transfer
- Key insight: Text optimization with LLM-based search is general-purpose — domain-specific algorithms can be unified under single framework

#### PEEK: Context Map as Orientation Cache for Long-Context Agents
**arXiv:2605.19932** (May 19, 2026)
- Caches reusable orientation knowledge (context structure, useful entities, constants, schemas) as small constant-sized artifact
- Three-module policy: Distiller (extracts transferable knowledge from inference signals), Cartographer (structured edits), Evictor (fixed token budget)
- On long-context reasoning and aggregation: 6.3-34% improvement, 93-145 fewer iterations, 1.7-5.8x lower cost vs ACE
- On context learning: 6.0-14% solving rate improvement, 7.8-12.1% rubric accuracy at 1.4x lower cost vs ACE
- Generalizes across LMs and agent architectures including OpenAI Codex (production-grade)
- Key insight: Orientation knowledge about recurring contexts is most needed but currently unpreserved — persistent "peek" into external context improves accuracy and efficiency

#### Text Analytics on Social Media: LLM Limitations Exposed
**arXiv:2605.21338** (May 20, 2026)
- 470 manually curated questions evaluating semantic understanding and reasoning over aggregated text
- Performance heavily depends on input scale and data complexity
- Noticeable decline in multi-label or target-dependent scenarios
- Progressive drop as complexity increases: semantic existence → comparison → counting → calculation
- Critical finding: performance degrades substantially when input exceeds 500 instances, especially open-weights models
- Numerical tasks particularly affected
- Key insight: Architectural bottlenecks in current LLMs for rigorous quantitative analysis over large text collections — not just context window limitations

#### Metaphor Processing via Conditional Scale Entropy
**arXiv:2605.21391** (May 20, 2026)
- Decoder-only models (124M to 20B): GPT-2 family, LLaMA-2 7B, GPT-oss 20B
- Metaphorical tokens produce significantly higher spectral breadth than literal tokens at contiguous layer positions
- Effect survives cluster-based permutation correction, recurs in early-to-mid relative depth across models
- Converges with independent analysis of 200 naturalistic VUA pairs
- Specificity controls show effect not explained by semantic complexity or matched propositional content
- Key insight: Multi-scale coordination is consistent signature of metaphorical language processing — mechanistic interpretability using wavelet-derived measures reveals layer-wise organizational patterns

#### LLM Pragmatic Reasoning vs Semantic Accuracy
**arXiv:2605.21299** (May 20, 2026)
- 25 LLMs tested on conditional inferences across 4 languages vs equal number of humans
- Humans enrich logical reasoning through pragmatic inferences — LLMs are accurate semantic operators but miss pragmatic enrichments
- Some LLMs perfectly follow truth-table but ignore pragmatics; others deviate but reflect accurate rule-based processing without human-like reasoning
- LLM accuracy not predicted by open vs closed, training orientation, or architecture type
- Key insight: Pragmatic reasoning is still an emerging ability — structural accuracy doesn't imply human-like reasoning

### Key Trends from May 21, 2026:

1. **CopT Reverses CoT Paradigm:** Draft-first-think-after approach shows 57% token reduction — performative reasoning (knowing before thinking) is real and exploitable
2. **RLVR Credit Assignment Maturing:** CEPO's contrastive wrong-answer signal addresses token-level credit misallocation — key for efficient reasoning training
3. **SFT Destroys Diversity:** Reasoning shrinkage confirmed as data problem, not architecture — "forks in the road" training data composition is the lever
4. **Universal Text Optimization:** optimize_anything demonstrates domain-specific algorithms unified under LLM-based search — ARC-AGI 89.5%, cloud costs -40%
5. **Context Orientation Caching:** PEEK shows orientation knowledge preservation enables 1.7-5.8x cost reduction — persistent "peek" beats repeated full context access
6. **Large-Scale Aggregation Problem:** LLMs degrade beyond 500 instances on quantitative tasks — architectural bottleneck for real-world document processing
7. **Mechanistic Interpretability Advances:** Conditional scale entropy reveals metaphor processing uses multi-scale coordination at specific layer positions
8. **Pragmatics Gap Confirmed:** 25 models across 4 languages — LLMs are accurate semantic operators but miss pragmatic enrichments characteristic of human reasoning

---

## 2026-05-20 (Wednesday)

### New Insights:

#### TIDE: I/O-Aware Expert Offload for Diffusion LLM Inference
**arXiv:2605.20179** (May 19, 2026)
- Novel inference system for Diffusion Large Language Models (dLLMs) with MoE architecture
- Uses temporal stability of expert activations during diffusion process — interval-based expert refresh strategy
- Formulates scheduling as mathematical programming for optimal I/O/cost tradeoff
- Lossless optimization, no model training required
- Results: 1.4x (LLaDA2.0-mini) and 1.5x (LLaDA2.0-flash) throughput improvement over baselines
- Key insight: Expert placement updated in I/O-aware fashion based on temporal stability windows

#### CES: Conditional Entropy Shaping for Adaptive LLM Reasoning
**arXiv:2605.19358** (May 19, 2026)
- Built on DAPO framework; uses token-level entropy as uncertainty signal
- Dual mechanism: penalizes high-entropy forking-point tokens on correct paths (conciseness) + rewards on incorrect paths (exploration)
- On DeepSeek-R1-Distill-7B across 12 math benchmarks: improves accuracy while reducing response length
- Also validates on 1.5B backbone and out-of-domain benchmarks
- Key insight: Token-level entropy is better control signal than response-level length budgets

#### AutoTool: Adaptive Tool Invocation for Multimodal LLM Reasoning
**arXiv:2605.19852** (May 19, 2026) — ICML 2026
- Dual-mode reasoning: tool-assisted vs text-centric, adaptively chosen per query
- Reinforcement learning with mode-specific reward functions; joint exploration prevents premature bias
- Results: +21.8% accuracy on V* benchmark vs base model; +44.9% efficiency on POPE benchmark
- Key insight: Redundant/inappropriate tool invocations hurt more than help — model should decide when to use tools

#### MOTAB: Dual Exposure Biases in Reasoning Distillation
**arXiv:2605.19433** (May 19, 2026)
- Off-policy distillation: exposure bias from training/inference distribution mismatch
- On-policy distillation: reciprocal reversed exposure bias when teacher conditions on suboptimal student contexts
- Solution: Monitoring Trajectories And Backtracking when it Strays (MOTAB)
- Key insight: Both off-policy and on-policy distillation have inherent biases; need backtracking mechanism

#### K-Quantization: Impact of 2-6 Bit Quantization on LLM Output
**arXiv:2605.19645** (May 19, 2026)
- 8 LLMs evaluated at 2-6 bit on MMLU-Pro (knowledge/reasoning), CRUXEval (code), MuSR (reading)
- Key findings: Higher precision (Q8) = better but diminishing returns; aggressive quantization (Q2) sometimes acceptable
- Larger models show greater resilience to aggressive quantization
- Mid-sized 7-9B models: optimal balance between efficiency and accuracy
- Key insight: Q4 (4-bit) confirmed as practical floor; below Q3 meaningful quality loss on reasoning tasks

#### RALC: Retrieval-Augmented Linguistic Calibration
**arXiv:2605.19344** (May 19, 2026)
- Models linguistic confidence as distribution over plausible perceived probability values (not scalar)
- Faithfulness Divergence (FD): information-theoretic metric measuring surprise on truth revelation
- RALC: lightweight post-hoc pipeline with retrieval-augmented rewriting for calibrated confidence expressions
- Results: up to 66% faithfulness improvement, 58% calibration improvement across 3 QA benchmarks and 5 LLM families
- Key insight: Linguistic confidence expressions like "I believe" can be calibrated via distributional rewriting


#### ThoughtTrace: User Thoughts in Real-World LLM Interactions
**arXiv:2605.20087** (May 19, 2026)
- First large-scale dataset: 1,058 users, 2,155 conversations, 17,058 turns, 10,174 thought annotations across 20 LLMs
- Thoughts semantically distinct from messages; hard for frontier LLMs to infer from context alone
- Demonstrates utility: improves user-behavior prediction as inference-time context; enables fine-grained alignment signals
- Key insight: Users' latent goals/preferences not reliably inferable from conversation text alone

#### m3BERT: Matryoshka Multilingual Bidirectional Encoder
**arXiv:2605.19568** (May 19, 2026) — KDD 2026
- Three-stage pretraining: monolingual → multilingual adaptation → continual pretraining on web corpus
- Jointly optimizes representations across transformer layers AND multiple embedding dimensions
- Single model adaptable to varied resource/accuracy targets while maintaining pretraining consistency
- Key insight: Matryoshka pretraining enables architecture-consistent downstream adaptation without misalignment

#### LLMEval-Logic: Adversarial Chinese Logical Reasoning Benchmark
**arXiv:2605.19597** (May 19, 2026)
- Realistic situational scenarios (not templated); forward-authored with expert auditing
- Z3 verification for annotated answers; expert rubrics for natural-to-formal grading
- Two subsets: Base (246 items) + Hard (190 items, 938 multi-step sub-questions)
- Key insight: Template-free, expert-audited reasoning benchmarks needed as existing ones saturate frontier models

#### Scientific Writing Study: LLM Impact on NLP Publications
**arXiv:2605.19936** (May 19, 2026) — LREC 2026
- 37,000 papers from ACL Anthology (2020-2024) + 3,000 human/LLM text pairs
- LLM-modified texts: more syntactic constructions, longer words, lower lexical diversity
- Pilot annotation (20 domain experts): LLM texts rated more understandable but elicit negative qualitative attitudes
- Key insight: LLM-assisted writing improves readability but experts resist it emotionally

### Key Trends from May 20, 2026:
1. **Entropy-Controlled Reasoning:** CES marks shift from length budgets to token-level entropy signals for adaptive depth
2. **Diffusion LLMs Maturing:** TIDE shows dLLMs now getting serious deployment optimization (1.5x throughput, lossless)
3. **Tool Use is Not Always Good:** AutoTool (21.8% gain over tool-eager baseline) validates selective tool use paradigm
4. **Distillation Dual-Bias Problem:** MOTAB identifies both off-policy and on-policy have inherent biases — backtracking needed
5. **Q4 Confirmed as Floor:** K-Quantization study (8 models, 2-6 bits) reaffirms 4-bit as practical production minimum
6. **Confidence Calibration Maturing:** RALC's distributional approach to linguistic confidence (66% faithfulness gain) beats scalar methods
7. **User Thought Data:** ThoughtTrace reveals fundamental gap between what users say and what they think in AI conversations
8. **Benchmark Adversarial Hardening:** LLMEval-Logic responding to frontier model saturation with expert auditing

---

## 2026-05-19 (Tuesday)

### New Insights:

#### DashAttention: Differentiable Adaptive Sparse Hierarchical Attention
**arXiv:2605.18753** (May 18, 2026)
- Uses adaptively sparse α-entmax for variable block selection — keeps full hierarchy differentiable
- Non-dispersive → better long-context modeling than NSA/InfLLMv2
- Full-attention accuracy at 75% sparsity; better Pareto frontier than NSA/InfLLMv2
- Triton GPU impl: speedup over FlashAttention-3 at inference
- Key insight: Gradient flow across sparse→dense boundary unlocks better learned sparsity patterns

#### Code as Agent Harness (Survey)
**arXiv:2605.18747** (May 18, 2026)
- Code as operational substrate for agent reasoning/action/verification, not just output
- Three-layer framework: harness interface, harness mechanisms, multi-agent scaling
- Key insight: Harness quality now separates working production agents from demos — model choice alone doesn't explain production outcomes
- Open challenges: regression-free harness improvement, shared state across agents, safety-critical oversight

#### EnvFactory: Scaling Tool-Use Agents
**arXiv:2605.18703** (May 18, 2026)
- 85 verified environments (vs ~5x more in prior work) → 2,575 SFT+RL trajectories
- Qwen3-series: +15% BFCLv3, +8.6% MCP-Atlas, +6% conversational benchmarks
- Key insight: Environment infrastructure quality > quantity for Agentic RL training efficiency

#### Language-Switching Backdoor Circuit
**arXiv:2605.18646** (May 18, 2026)
- 8B model: 3-word Latin trigger → English to French via 3-phase circuit
- Serial bottleneck at single position — corrupting it anywhere fully mitigates trigger but degrades capabilities
- Orthogonal latent encoding evades standard interpretability-based defenses
- Key insight: Backdoor circuits use encoding subspaces invisible to standard representation inspection

#### Proxy Metrics for LLM Performance Forecasting
**arXiv:2605.18607** (May 18, 2026)
- Token-level statistics (entropy, top-k accuracy, expert token rank) over expert trajectories
- Cross-family selection: Spearman Rho=0.81 vs Rho=0.36 for cross-entropy
- Pretraining data: ~10,000x less compute than direct evaluation
- Key insight: Expert trajectories enable cheap, reliable model development decisions throughout lifecycle


### Key Trends from May 19, 2026:
1. **Architecture diversity returns:** Subquadratic attention (SubQ, DashAttention) challenges O(n²) bottleneck — 12M token contexts viable
2. **Harness > Model:** Industry increasingly accepting that harness/infrastructure layer determines production outcomes
3. **Backdoor detection gap:** Orthogonal encoding evades standard interpretability defenses — new detection methods needed
4. **Proxy metric revolution:** Token-level statistics enable 10,000x cheaper model development decisions
5. **Open-weight reasoning:** Qwen3.5 397B, GLM-5 in top 15 reasoning leaderboard
6. **Benchmark staleness:** 93 provisional vs 0 verified-ranked models — verification gap persists
7. **SubQ June release:** First subquadratic commercial LLM — contamination-resistant eval results pending

---

## 2026-05-18 (Monday)

### New Insights:

#### Argus: Evidence Assembly for Deep Research Agents
**arXiv:2605.16217** (May 15, 2026)
- Searcher + Navigator cooperative system treating deep research as jigsaw puzzle, not parallel brute-force
- Navigator maintains shared evidence graph, dispatches Searchers to fill gaps, synthesizes source-traced answers
- RL-trained Navigator supports rollouts with 1-64 parallel Searchers without retraining
- 35B-A3B MoE backbone; +5.5pp (1 Searcher), +12.7pp (8 parallel) avg over 8 benchmarks
- 64 Searchers reach 86.2 on BrowseComp, surpassing all proprietary agents tested
- Navigator context stays under 21.5K tokens despite parallel search
- Key insight: Cooperative evidence assembly outperforms parallel rollouts that duplicate rather than complete

#### Block Attention Generalization via SemanticSeg + Block Distillation
**arXiv:2605.15913** (May 15, 2026)
- SemanticSeg: 30K+ instances across 16 categories for automatic text segmentation
- Block distillation with frozen teacher: block sink tokens, block dropout, token-level loss weighting
- Achieves near-full-attention performance under block attention
- Key insight: KV cache reuse in RAG now practical via semantic block boundaries

#### Artificial Aphasias in Lesioned Language Models
**arXiv:2605.16222** (May 15, 2026)
- Clinical aphasia lesion method applied to 112,426 outputs from five 1B-scale LMs
- Depth effect: early-layer lesions → syntactic/semantic symptoms; late-middle layers → phonological/fluency deficits
- Attention vs feed-forward components show different symptom profiles
- Key insight: Aphasia syndromes heavily influenced by learning/processing details, not domain-invariant

#### DebiasRAG: Tuning-Free Fair Generation via RAG
**arXiv:2605.16113** (May 15, 2026)
- Three-stage: query-specific debiasing candidate generation → context pool → gradient-updated reranking
- Self-diagnosis of bias contexts via regular retrieval; reversed debiasing contexts as fairness constraints
- Preserves intrinsic LLM capabilities while improving fairness

### Key Trends from May 18, 2026:
1. **Cooperative Agent Architectures:** Argus demonstrates evidence assembly > parallel brute-force
2. **Block Attention Maturation:** SemanticSeg + distillation enable practical KV cache reuse
3. **Lesion Analysis:** Clinical aphasia framework reveals layer-wise functional organization in LLMs
4. **MoE Universal:** All frontier models use sparse routing; differentiation via routing mechanisms not architecture
5. **Perfect Math:** GPT-5 achieves 100% on AIME 2026 — high school math effectively solved
6. **Q4 Minimum Enforced:** Q3 unsuitable for agent workloads (~5% GSM8K drop)
7. **Context Window Explosion:** Llama 4 Scout at 10M tokens — era of naive RAG fading



## 2026-05-17 (Sunday)

### New Insights:

#### Grep vs Vector Retrieval for Agentic Search
**arXiv:2605.15184** (May 14, 2026)
- Empirical study comparing grep and vector retrieval on agentic search systems
- Across Chronos, Claude Code, Codex, and Gemini CLI: grep generally yields higher accuracy than vector retrieval
- Tool output presentation (inline vs file-based) impacts performance
- Key finding: Simple grep can outperform semantic vector retrieval for agent harnesses; overall scores depend strongly on harness choice

#### Clinical Timeline Reconstruction via Multimodal Alignment
**arXiv:2605.15168** (May 14, 2026)
- Graph-based multimodal framework bridges clinical narratives and structured EHR data
- Timeline reconstruction: anchor events from text → place non-central events → calibrate with EHR temporal evidence
- 34.8% of text-derived events are entirely absent from tabular records
- Key insight: Aligning modalities produces more temporally faithful clinical reconstruction than either source alone


#### SDAR: Self-Distilled Agentic Reinforcement Learning
**arXiv:2605.15155** (May 14, 2026)
- Treats On-Policy Self-Distillation (OPSD) as gated auxiliary objective with RL as primary backbone
- Sigmoid gate strengthens distillation on teacher-endorsed positive-gap tokens; attenuates negative rejections
- Results on Qwen2.5/Qwen3 families: +9.4% on ALFWorld, +7.0% on Search-QA, +10.2% on WebShop-Acc
- Avoids naive GRPO+OPSD instability; consistently outperforms hybrid baselines


#### VPD: Variational Policy Distillation
**arXiv:2605.15113** (May 14, 2026)
- Formalizes learning from language feedback as Variational EM problem
- E-step: teacher refined on trajectory outcomes via adaptive trust-region update; M-step: student internalizes guidance
- Co-evolving teacher overcomes passive distillation limitations
- Outperforms standard RLVR and existing self-distillation baselines on scientific reasoning and code generation

#### Tensor Similarity for Mechanistic Interpretability
**arXiv:2605.15183** (May 14, 2026)
- Weight-based metric invariant to weight-space symmetries
- Tracks functional training dynamics (grokking, backdoor insertion) with higher fidelity than existing metrics
- Reduces similarity verification to algebraic problem vs empirical approximation

#### LLM Strategic Behavior Under Observation (Hawthorne Effect)
**arXiv:2605.15034** (May 14, 2026)
- Monitored conditions: +24.9% TTR change; automated AI monitoring: +22.2%; audience-framing: +17.7%
- Human evaluation elicits stronger register formalization than automated AI surveillance
- Key insight: LLMs are contextually sensitive communicative actors; observer identity matters


#### SubQ 1M-Preview: First Commercial Subquadratic LLM
- First commercially available LLM with non-transformer (subquadratic sparse attention) architecture
- Native 12M token context window; ~1/5 cost of frontier models on long-context workloads
- $29M seed funding; vendor claims 52x faster attention at scale (awaiting independent verification)
- Key question: Does it hold on MRCR, RULER against GPT-5.5 or Opus 4.7?

#### ZAYA1-8B: AMD-Trained Open-Weight MoE
- Apache 2.0, 8B total params; ~760M active per token via MoE routing
- First reasoning-oriented open release trained end-to-end on AMD Instinct hardware
- If verified: strongest cost-per-token open option in small-MoE band

#### Quantization Benchmark Update (May 2026)
- Q4 (4-bit): Practical production sweet spot; 1-3% perplexity degradation vs FP16
- AWQ > GPTQ by 0.5-1.0% perplexity on modern models due to activation-aware scaling
- Q3: Meaningful quality loss on reasoning (~5% GSM8K drop); never go below Q4 for agentic workloads
- Q2: Severe degradation (~14% perplexity, ~14% GSM8K drop)
- Production agents: AWQ 4-bit or GGUF Q5_K_M minimum


### Key Trends from May 17, 2026:
1. **Agent Retrieval Paradigm Shift:** Grep outperforming vector retrieval challenges "semantic is better" assumption
2. **Co-Evolving Distillation:** SDAR and VPD both address passive teacher limitations via active teacher refinement
3. **Subquadratic Attention Hits API:** SubQ commercializes non-transformer architecture; first real deployment bet
4. **Intelligence Density Focus:** ZAYA1-8B at 760M active parameters demonstrates active-per-token as new model size metric
5. **Default Tier Competition:** GPT-5.5 Instant and Gemini 3.1 Flash Lite launched same week; user experience war
6. **Q4 Minimum for Agents:** Reasoning benchmark degradation at Q3 confirms quantization floor
7. **Observer Effects in LLMs:** Hawthorne effect confirmed; human evaluation > AI surveillance

---

## 2026-05-16 (Saturday)

### New Insights:

#### Orchard: Open-Source Agentic Modeling Framework
**arXiv:2605.15040** (May 14, 2026)
- Orchard Env provides reusable primitives for sandbox lifecycle management across task domains, agent harnesses, and pipeline stages
- Orchard-SWE distills 107K trajectories from MiniMax-M2.5 and Qwen3.5-397B; credit-assignment SFT from productive segments of unresolved trajectories
- Qwen3-30B-A3B-Thinking achieves 64.3% SWE-bench Verified after SFT, 67.5% after SFT+RL (new SOTA for open-source of comparable size)
- Orchard-GUI (4B VLM computer-use agent): 74.1% WebVoyager, 67.0% Online-Mind2Web, 64.0% DeepShop
- Key insight: Credit-assignment SFT learns from unresolved trajectories — enables better agent training from imperfect data

#### MeMo: Memory as a Model
**arXiv:2605.15156** (May 14, 2026)
- Encodes new knowledge into dedicated memory model while keeping LLM parameters unchanged
- No access to LLM weights/logits needed (plug-and-play for any LLM API); retrieval cost independent of corpus size at inference
- Strong performance on BrowseComp-Plus, NarrativeQA, MuSiQue
- Key insight: Dedicated memory model approach enables domain knowledge integration without touching base model

#### AsyncFC: Future-based Asynchronous Function Calling
**arXiv:2605.15077** (May 14, 2026)
- Decouples LLM decoding from function execution; enables overlap between decoding and execution plus inter-function parallelism
- Pure execution-layer solution requiring no fine-tuning or changes to standard function-calling protocol
- Key finding: LLMs have native capability to reason over symbolic futures representing unresolved execution results
- Significantly reduces end-to-end task completion time while preserving accuracy

#### COTCAgent: Probabilistic Chain-of-Thought Completion for Medical EHR
**arXiv:2605.15016** (May 14, 2026)
- Temporal-Statistics Adapter converts analytical plans to executable code; COTC layer leverages symptom-trend-disease knowledge base with weighted scoring
- 90.47% Top-1 accuracy on self-built dataset; 70.41% on HealthBench (outperforms medical agents and mainstream LLMs)
- Key insight: Decoupling statistical computation, feature matching, and language generation eliminates reliance on complex multimodal inputs

#### Premature Closure in Frontier LLMs
**arXiv:2605.15000** (May 14, 2026)
- False-action rates of 55-81% (MedQA) and 53-82% (AfriMed-QA) when correct choice removed
- 30% inappropriate answers on 861 HealthBench questions; 78% on 191 physician-authored adversarial queries
- Safety-oriented prompting reduces but doesn't eliminate premature closure
- Key insight: Medical LLMs need to evaluate whether they know when NOT to answer

#### ML-Embed: Inclusive Multilingual Embeddings (ICML 2026)
**arXiv:2605.15081** (May 14, 2026)
- 3-Dimensional Matryoshka Learning (3D-ML): MEL (parameter efficiency) + MLL (flexible inference-time depth) + MRL (storage)
- 140M to 8B parameters, massively multilingual, all models/data/code released
- Sets new records on 9/17 MTEB benchmarks, especially strong on low-resource languages

#### OpenDeepThink: Parallel Reasoning via Bradley-Terry Aggregation
**arXiv:2605.15177** (May 14, 2026)
- Pairwise Bradley-Terry comparison for candidate selection from parallel reasoning traces; LLM judges random pairs, aggregates votes into global ranking
- Raises Gemini 3.1 Pro's Codeforces Elo by +405 points in 8 sequential LLM-call rounds (~27 min)
- Transfers across weaker/stronger models without retuning; gains concentrated in objectively verifiable domains
- CF-73: 73 expert-rated Codeforces problems with International Grandmaster annotation

#### MANSU: Quantization-Permanent Unlearning via Circuit Attribution
**arXiv:2605.15138** (May 14, 2026)
- Gradient-based unlearning methods lose forgetting under 4-bit PTQ; methods surviving quantization barely change model
- Root cause: sparsity-permanence tradeoff — per-parameter updates lie 47-828x below NF4 quantization bin width
- Solution: causal circuit attribution to isolate minimal forget-set subgraph, circuit-restricted null-space projection, per-parameter magnitude floor
- First method to jointly satisfy all 4 properties: meaningful forgetting, retain preservation, non-positive PTQ gap, structural erasure

#### FutureSim: World Event Prediction for Adaptive Agents
**arXiv:2605.15188** (May 14, 2026)
- Agents forecast world events beyond knowledge cutoff while interacting with chronological replay of real news (Jan–Mar 2026)
- Best agent accuracy 25%; many score worse than making no prediction at all (negative Brier skill)
- Clear capability separation revealed; benchmark studies long-horizon test-time adaptation, search, memory, uncertainty reasoning

#### Shodh-MoE: Sparse MoE Routing for Multi-Physics
**arXiv:2605.15179** (May 14, 2026)
- Sparse-activated latent transformer for multi-physics transport; physics-informed autoencoder (16^3 physical latents, Helmholtz velocity)
- Top-1 soft-semantic router autonomously bifurcates domains: open-channel → Expert 0, porous-media → Expert 1
- Exact mass conservation (divergence ~2.8×10^-10 in FP64); convergent simultaneous multi-regime training

#### Behavioural Assurance Cannot Verify Safety Claims
**arXiv:2605.15164** (May 14, 2026)
- Audit gap: divergence between required and achievable verification access for governance frameworks
- Fragile assurance: evidential structure doesn't support asserted safety claim
- 21-instrument inventory reveals incentive gradient rewarding surface-level behavioral proxies over structural verification
- Proposal: bound behavioral evidence weight in legal text; extend pre-deployment access with mechanistic evidence classes (linear probes, activation patching)

#### CAST: Case-Based Calibration for LLM Tool Use
**arXiv:2605.15041** (May 14, 2026)
- Treats historical execution trajectories as structured cases; extracts complexity profiles and failure maps for reward design and adaptive reasoning
- Up to 5.85 pp gain in execution accuracy, 26% reduction in average reasoning length on BFCLv2 and ToolBench

#### Self-Recall Thinking (SRT) for Multi-turn Dialogue
**arXiv:2605.15102** (May 14, 2026)
- Dependency Construction → self-recall chains, Capability Initialization with recall tokens, Reasoning Improvement via verifiable rewards
- +4.7% F1 score, -14.7% end-to-end latency vs prior methods; endogenous reasoning without external memory modules

### Key Trends from May 16, 2026:
1. **Agentic Training:** Orchard framework shows unresolved-trajectory credit assignment enables 67.5% SWE-bench from 30B model
2. **Memory Models:** MeMo approach (dedicated memory, no weight access) emerging as architecture-agnostic knowledge integration
3. **Async Function Calling:** Native LLM capability over symbolic futures enables pure infrastructure wins without model changes
4. **Premature Closure:** 30-78% inappropriate action rates on adversarial medical queries — abstention training critical
5. **Test-Time Scaling:** Bradley-Terry aggregation works for verifiable domains; fails for subjective ones (fundamental limitation)
6. **Quantization + Unlearning:** Sparsity-permanence tradeoff explains why circuit-level interventions needed for quantized deployment
7. **Governance Gap:** Behavioural evaluation structurally cannot meet governance demands — mechanistic evidence required
8. **World Prediction:** Frontier agents at 25% accuracy on real-world forecasting — long-horizon adaptation unsolved

---

## 2026-05-14 (Thursday)

### New Insights:

#### Weight-Space Multi-Agent Communication (TFlow)
**arXiv:2605.13839** (May 13, 2026)
- Multi-agent communication via transient low-rank LoRA weight perturbations instead of text messages
- With 3x Qwen3-4B agents: up to 8.5 accuracy point improvement, 32.69% token reduction, 83.27% total token reduction vs text-based baseline, 4.6x wall-clock speedup
- Weight-space communication enables instance-level adaptation without changing model or enlarging context

#### Local Teachability Collapse in Strong-to-Weak OPD
**arXiv:2605.13643** (May 13, 2026) — BEA Workshop 2026
- On-policy distillation can fail in strong-to-weak settings when later trajectory segments lack local contrast for dense feedback
- Solution: Trajectory-specific release rule with BIC-style change point detection
- Key insight: Effective OPD requires evaluating local utility of teacher guidance, not just availability

#### FlowCompile: LLM Workflow Compiler
**arXiv:2605.13647** (May 13, 2026)
- Compile-time design space exploration for multi-agent LLM workflows
- Up to 6.4x speedup over heuristic optimization
- Reusable configuration set enables flexible deployment under varying runtime preferences

#### WARDEN: Endangered Language with 6 Hours of Data
**arXiv:2605.13846** (May 13, 2026)
- Two-stage architecture: separate transcription and translation models
- Cross-lingual initialization from Sundanese (shared phonemes)
- Outperforms larger open-source and proprietary models with mere 6 hours of annotated data

#### RTLC: Feynman Technique Lifts LLM-as-Judge
**arXiv:2605.13695** (May 13, 2026)
- Three-stage prompting (Research, Teach-to-Learn, Critique) applying Feynman Learning Technique
- Claude 3.7 Sonnet: 64.6% → 78.6% (+14pp) on JudgeBench-GPT
- Ablation: +9.4pp from Teach-to-Learn, +3.7pp from N=10 marginalisation, +0.9pp from critique

#### Quantum Long-Attention Memory (QLAM)
**arXiv:2605.13833** (May 13, 2026)
- Quantum extension of state-space models using superposition property
- Hidden state as quantum state encoding superposition of historical information
- Improves over recurrent baselines and transformers on sequential image classification

#### Tokenization Theory: Fragmentation and Context
**arXiv:2605.13485** (May 13, 2026)
- Fragmentation can strictly increase optimal finite-context log-loss (explains ByT5/CANINE underperformance)
- Greedy tokenization can make short token window behave like longer source-context window
- Finite-context information-theoretic framework for representation choices in Transformers

#### BPE Dropout in Pretraining
**arXiv:2605.13436** (May 13, 2026)
- Stochastic tokenization during both pretraining and fine-tuning optimal for low-resource NLP
- Pretraining-time BPE dropout exposes model to better-aligned segmentations more consistently
- Benefits largest when pretraining or fine-tuning data is scarce

#### Dense vs Sparse at Tiny Scale
**arXiv:2605.13769** (May 13, 2026)
- MoE (4 experts, top-2 routing) wins on active-parameter matching: 1.5788 vs 1.6545 validation loss
- Dense wins on total-parameter matching: narrows during training
- In sub-25M regime, MoE improves under active-parameter matching but doesn't surpass dense at equal total capacity

#### TruncProof: JSON with Token-Length Constraints
**arXiv:2605.13076** (May 13, 2026) — IJCNN 2026
- Grammar-constrained generation ensuring valid JSON termination under token limits
- Leverages LL(1) parser properties to approximate minimum tokens for valid output

### Key Trends from May 14, 2026:
1. **Weight-Space Communication:** Token-free multi-agent communication via weight perturbations enables massive efficiency (83% token reduction)
2. **OPD Theory:** Local teachability collapse identified—evaluating local utility of teacher signal is critical
3. **LLM Compilation:** Workflow optimization from compilation perspective (FlowCompile) achieves 6.4x speedup
4. **Feynman for Judges:** Pedagogical scaffolding improves LLM-as-judge by 14pp without fine-tuning
5. **Low-Resource Breakthrough:** 6 hours of data sufficient for endangered language transcription with cross-lingual initialization
6. **Quantum Sequence Modeling:** QLAM shows quantum superposition for implicit global dependency capture
7. **Tokenization Theory:** Formal framework for representation choice in Transformers

---

## 2026-05-07 (Thursday)

### New Insights:

#### The Impossibility Triangle of Long-Context Modeling
**arXiv:2605.05066** (May 6, 2026) — 41 pages, Yan Zhou
- Proves a fundamental trade-off: no model can simultaneously achieve (i) per-step computation independent of sequence length (Efficiency), (ii) state size independent of sequence length (Compactness), and (iii) ability to recall facts proportional to sequence length (Recall)
- Formalizes within Online Sequence Processor abstraction unifying Transformers, SSMs, linear recurrent networks, and hybrids
- Proves via Data Processing Inequality and Fano's Inequality: any model satisfying Efficiency + Compactness can recall at most O(poly(d)/log V) key-value pairs from arbitrary-length sequences
- Classifies 52 architectures published before March 2026 into the triangle — each achieves at most two of the three properties
- Hybrid architectures trace continuous trajectories in the interior
- Validated on synthetic associative recall tasks with 5 representative architectures

#### LLM Reasoning Is Latent, Not the Chain of Thought
**arXiv:2604.15726** (April 17, 2026) — Wenshuo Wang, position paper
- Argues LLM reasoning should be studied as latent-state trajectory formation rather than faithful surface CoT
- Three competing hypotheses: H1 (reasoning via latent-state trajectories), H2 (reasoning via explicit surface CoT), H0 (gains from generic serial compute, no privileged representational object)
- Reorganizes recent empirical, mechanistic, and survey work under this framework
- Compute-audited worked exemplars factorize surface traces, latent interventions, and matched budget expansions
- Current evidence most strongly supports H1 as a default working hypothesis
- Recommendations: treat latent-state dynamics as default object of study; evaluate reasoning with designs disentangling surface traces, latent states, and serial compute

#### The First Token Knows: Single-Decode Confidence for Hallucination Detection
**arXiv:2605.05166** (May 6, 2026) — Mina Gabriel, 6 pages
- First-token confidence (phi_first): computed from normalized entropy of top-K logits at first content-bearing answer token of a single greedy decode
- Matches or exceeds semantic self-consistency on closed-book short-answer factual QA
- Across three 7-8B instruction-tuned models and two benchmarks: phi_first achieves mean AUROC of 0.820 vs 0.793 for semantic agreement and 0.791 for surface-form self-consistency
- Combining phi_first with semantic agreement yields only small AUROC improvement over phi_first alone
- Argues phi_first should be reported as default low-cost baseline before sampling-based uncertainty estimation

### Key Trends from May 7, 2026:
1. **Long-Context Fundamental Limit Proved:** The Impossibility Triangle provides theoretical grounding for why all 52 architectures fail on at least one property — context scaling has hard limits
2. **Reasoning is Latent, Not CoT:** Growing consensus that chain-of-thought is post-hoc rationalization rather than the reasoning mechanism itself
3. **Single-Token Hallucination Detection:** phi_first shows most uncertainty info is in initial token distribution — sampling is often redundant
4. **MoE Universal:** All frontier open-weights are MoE (DeepSeek V4, Llama 4, Qwen 3.5, Kimi K2.6, Mistral 3.5)
5. **Context Window Race Cooling:** After Llama 4's 10M token claim, theoretical work suggests the era of "just make context longer" may be structurally constrained

---

## 2026-05-06 (Wednesday)

### New Insights:

#### ResRL: Residual RL for LLM Reasoning (ICML 2026)
**arXiv:2605.00380** (May 1, 2026)
- Negative Sample Projection Residual Reinforcement Learning
- Decouples similar semantic distributions among positive and negative responses
- Token-level negative-sample weighting instead of treating every token equally
- ResRL projects negative-token hidden representations onto SVD-based low-rank positive subspace
- **Results:** Surpasses NSR on mathematical reasoning by 9.4% in Avg@16 and 7.0% in Pass@128
- 12 benchmarks spanning Mathematics, Code, Agent Tasks, and Function Calling
- Accepted to ICML 2026

#### Mistral Medium 3.5 Merges Chat, Reasoning, and Code (April 29, 2026)
- 128B dense model, 256K context, 77.6% SWE-Bench Verified
- Reasoning_effort flag toggles compute-heavy reasoning only when agent tasks demand it
- Vibe Remote Agents: async cloud coding agents that open PRs without user watching
- Runs on 4× H100, $1.50/$7.50 per million tokens, modified MIT license

#### Kimi K2.6 Joins Open-Weight Frontier
- 80.2% SWE-Bench Verified, 96.4 AIME 2026, 90.5 GPQA-Diamond
- 1T total / 32B active MoE, 256K context
- Supports 300-agent swarms at 4,000 coordinated steps per run

#### Cloudflare Infire Engine
- Custom Rust inference engine across 300+ PoPs
- Unweight compression: 15-22% size reduction, no accuracy loss
- Disaggregated prefill for sub-20-second cold starts

### Key Trends from May 6, 2026:
1. **Merged Specialist Models:** Mistral 3.5 collapses three specialist models into one with runtime reasoning toggle
2. **Async Cloud Coding:** Vibe remote agents represent first production-ready async coding agents
3. **MoE Dominance:** All top open-weight models now MoE (DeepSeek V4, Llama 4, Qwen 3.5, Kimi K2.6, Mistral 3.5)
4. **Context Rot:** Models claiming 200K+ windows typically degrade around 130K — effective context matters
5. **RL-for-Reasoning Runway:** ResRL showing continued gains from reward shaping post-training

---

## 2026-05-05 (Tuesday)

### New Insights:

#### FlexSQL: Text-to-SQL Agents (2605.02815)
- Novel framework for text-to-SQL agents with flexible exploration and execution
- Better exploration strategies improve SQL generation accuracy
- Agentic approaches to database query generation gaining traction

#### RL for LLM Multi-Agent Orchestration (2605.02801)
- Using RL to optimize orchestration in multi-agent LLM systems
- Orchestration traces provide learning signal for coordination
- Multi-agent coordination emerging as distinct research frontier

#### ContextualJailbreak: Evolutionary Red-Teaming (2605.02647)
- New jailbreaking technique using conversational priming
- Safety vulnerabilities can be evolved through multi-turn conversations
- Static safety measures insufficient against adaptive attacks

#### AI-Text Arms Race (2605.02620)
- Agentic research can defeat AI text detection systems
- Offensive AI capabilities outpacing detection
- Content authenticity verification increasingly challenging

#### Legal Reasoning at Scale - ACL 2026 (2605.02472)
- Neuro-symbolic approach for large-scale legal reasoning
- Structural auditability critical for legal AI deployment
- High-stakes domains demand interpretable AI systems

### Benchmark Landscape (May 5, 2026)
- **SimpleBench:** Gemini 3.1 Pro Preview leads at 79.6%
- **GPQA Diamond:** GPT-5.4 Pro leads at 94.6%
- **SWE-bench Verified:** Claude Opus 4.7 Adaptive leads at 83.5% (standard Opus 4.7 reportedly at 87.6%) <!-- FACT_CHECK: PARTIALLY_VERIFIED -->
  <!-- Note: 83.5% for Adaptive variant, 87.6% for standard variant reported in other sources -->
  <!-- Verified: 2026-05-07 -->
  <!-- Sources: https://www.danilchenko.dev, https://www.buildfastwithai.com/blogs/claude-opus-4-7-review-benchmarks-2026/ -->
- **MATH Level 5:** GPT-5 leads at 98.1%
- **OTIS Mock AIME:** Claude Opus 4.7 leads at 97.8%
- **Key trend:** No single model dominates all benchmarks — specialization matters

### Key Trends from May 5, 2026:
1. **Agentic Text-to-SQL:** Flexible exploration strategies improving database query agents
2. **Multi-Agent Coordination:** RL-based orchestration for LLM multi-agent systems
3. **Safety Arms Race:** Evolutionary red-teaming outpacing static defenses
4. **Benchmark Specialization:** Different models excel on different benchmarks
5. **Neuro-Symbolic Legal AI:** Interpretability and auditability driving architectural choices

---

## 2026-05-04 (Monday)

### New Insights:

#### Procedural Execution Diagnostic Study
**arXiv:2605.00817** (May 1, 2026)
- Large language models often achieve strong performance on reasoning benchmarks, but final-answer accuracy alone does not show whether they faithfully execute the procedure specified in a prompt
- Accuracy drops from 61% on 5-step procedures to 20% on 95-step procedures (across 14 models, 55 datasets)
- Generation-level analysis shows failures: missing answers, premature answers, self-correction after initial error, under-executed traces, hallucinated extra steps
- Key insight: Apparent reasoning ability can mask substantial weaknesses in faithful instruction execution
- 77 pages, 109 figures — comprehensive diagnostic study

#### Local Attention Expressivity (ACL 2026)
**arXiv:2605.00768** (May 1, 2026)
- Formal account of why local attention improves model quality beyond just efficiency
- Fixed-precision transformers with global attention correspond to fragment of linear temporal logic with single past operator
- Adding local attention introduces second temporal operator, strictly enlarges class of recognizable regular languages
- Global and local attention are expressively complementary: neither subsumes the other, combining yields richest fragment
- Experiments confirm hybrid global-local transformers outperform global-only counterparts

#### MathArena: Continuous Math Evaluation Platform (May 1, 2026)
**arXiv:2605.00674**
- Static benchmarks insufficient — narrow scope, quickly saturated, rarely updated
- GPT-5.5 reaches 98% on 2026 USA Math Olympiad and 74% on research-level questions
- MathArena now covers proof-based competitions, research-level arXiv problems, formal proof generation in Lean
- Clear evaluation protocol maintained for all models; new benchmarks designed as capabilities improve
- Implication: Frontier models can now solve extremely challenging mathematical problems

#### FinSafetyBench: Financial Safety Evaluation
**arXiv:2605.00706** (Findings of ACL 2026)
- Bilingual (English-Chinese) red-teaming benchmark for financial compliance
- 14 subcategories spanning financial crimes and ethical violations
- Grounded in real-world financial crime cases and ethics standards
- Key finding: Stronger susceptibility in Chinese contexts; prompt-level defenses limited against sophisticated manipulation

#### MemCoE: Evolving Memory for LLM Agents
**arXiv:2605.00702** (May 1, 2026)
- Cognition-inspired two-stage optimization for evolving memory
- Stage 1: Memory Guideline Induction via contrastive feedback interpreted as textual gradients
- Stage 2: Guideline-Aligned Memory Policy Optimization with structured process rewards
- Addresses limited context windows for tracking evolving preferences over long interactions
- Evaluated on three personalization memory benchmarks covering explicit/implicit preference

#### ML-Bench&Guard: Multilingual Safety Benchmark
**arXiv:2605.00689** (May 1, 2026)
- Policy-grounded multilingual safety benchmark covering 14 languages
- Data derived directly from regional regulations — risk categories from jurisdiction-specific legal texts
- ML-Guard: Diffusion Large Language Model (dLLM)-based guardrail with 1.5B and 7B variants
- 1.5B for fast safe/unsafe checking; 7B for customized compliance checking with explanations
- Outperforms 11 strong guardrail baselines across 6 existing multilingual safety benchmarks

#### H-RAG: Hierarchical Parent-Child Retrieval (SemEval-2026 Task 8)
**arXiv:2605.00631** (May 1, 2026)
- Hierarchical parent-child RAG pipeline for multi-turn conversational RAG
- Child chunks: overlapping sentence-based segments
- Parent level: full documents for coherent context
- nDCG@5 score of 0.4271 on Task A, harmonic mean 0.3241 on Task C
- Hybrid dense-sparse search with embedding-based similarity rescoring

#### ParoQuant: Pairwise Rotation Quantization for Reasoning LLMs
**arXiv:2511.10645**
- Weight-only quantization achieves 2.4% average accuracy improvement over AWQ on reasoning tasks
- Reasoning LLMs generate large number of chain-of-thought tokens, presenting unique quantization challenges
- Paves way for more efficient and accurate deployment of reasoning LLMs

### Key Trends from May 4, 2026:
1. **Procedural Reliability Gap:** Accuracy on benchmarks masks procedural execution weaknesses — longer procedures see 40%+ accuracy drop
2. **Math Olympiad Threshold:** GPT-5.5 at 98% on USA Math Olympiad suggests frontier reaching expert-level performance
3. **Attention Architecture:** Hybrid local-global attention expressively superior; complementary properties
4. **Domain-Specific Safety:** Financial compliance and multilingual safety benchmarks maturing rapidly
5. **Memory for Agents:** Cognition-inspired two-stage optimization frameworks for evolving memory

---

## 2026-05-03 (Sunday)

### New Insights:

#### TopBench: Implicit Prediction Benchmark for Tabular QA
**arXiv:2604.28076** (April 30, 2026)
- Benchmark for Tabular Question Answering with implicit prediction tasks
- 779 samples across four sub-tasks: single-point prediction, decision making, treatment effect analysis, complex filtering
- Key finding: Current models struggle with intent recognition, defaulting to lookups
- Accurate intent disambiguation is prerequisite for predictive behaviors
- Published as cs.CL, cs.AI, cs.LG

#### Surprisal Theory: Proper Treatment of Units
**arXiv:2604.28147** (April 30, 2026) — ACL 2026 main conference
- Disentangles unit definition from region-of-interest choices in surprisal theory
- Argues tokenization should be implementation detail, not scientific primitive
- Framework for reasoning about surprisal over arbitrary unit inventories
- Authors: Kiegeland, Snæbjarnarson, Vieira, Cotterell

#### Length Value Model (LenVM) for Token-Level Length Modeling
**arXiv:2604.27039** (May 1, 2026)
- Predicts remaining generation length at token level
- Formulates length modeling as value estimation problem with constant negative reward per token
- Key result: On LIFEBench exact length matching, applies to 7B model improves score from 30.9 to 64.8
- On GSM8K at 200 token budget: 63% accuracy vs 6% for baseline
- Enables continuous control over performance/efficiency trade-off
- Potential for RL training as length-specific value signal

#### BatteryPass-12K: EU Battery Passport Conformance
**arXiv:2604.26986** (May 1, 2026)
- First public benchmark for EU digital battery passport conformance classification
- 22 language models evaluated in zero-shot (SLMs, MoEs, dense LLMs)
- Thinking models perform best: GPT-5.4 scores 0.98 F1 on validation, 0.71 on test
- Few-shot significantly improves performance
- Scaling parameters doesn't guarantee improvement (SLMs outperformed some LLMs)
- Prompt-injection attacks degrade performance

#### Reasoning Benchmark Updates (May 1, 2026)
- Grok 4.1 maintains reasoning lead at 96.8%
- Claude Mythos Preview leads MRCRv2 and MuSR scores
- Standard models closing gap on shorter-context reasoning tasks
- 93 provisional-ranked reasoning models, 0 verified-ranked

#### Hugging Face Trending Models (Week of May 3, 2026)
- DeepSeek-V4-Pro: 862GB memory requirement, 1.6T parameters MoE (49B active), 457k downloads (6 days old) <!-- FACT_CHECK: CORRECTED -->
  <!-- Correction: "862GB" is GPU memory required, not parameter count. Actual: 1.6T parameters (MoE) -->
  <!-- Verified: 2026-05-07 -->
  <!-- Sources: https://www.morphllm.com/deepseek-v4, https://codersera.com/blog/is-deepseek-v4-released-official-status-specs-alternatives/ -->
- DeepSeek-V4-Flash: 158B params, 414k downloads
- New entrants: inclusionAI/Ling-2.6 variants (1hr old, trending)
- NVIDIA Nemotron-3-Nano-Omni-30B-A3B-Reasoning variants: 38.9k downloads

#### Agent Evaluation Advances (cs.AI, May 1, 2026)
- **RHyVE** (2604.28056): Competence-aware verification for LLM-generated reward hypotheses
- **CARE** (2604.28043): Three-party methodology for AI agent engineering with SMEs, developers, helper agents
- Agent-agnostic SQL evaluation in production Text-to-SQL systems

### Key Trends from May 3, 2026:
1. **Intent Recognition as Frontier:** TopBench highlights implicit prediction and latent intent recognition as key unsolved challenges
2. **Length Modeling Maturing:** LenVM's token-level value approach showing promise for generation control
3. **Standard vs Reasoning Gap Narrowing:** BenchLM notes standard models closing gap on shorter-context tasks
4. **Domain-Specific Benchmarks:** Regulatory compliance (battery passports) driving specialized evaluation frameworks

---

## 2026-05-02 (Saturday)

### New Insights:

#### Hierarchical Reasoning Model (HRM)

**arXiv:2506.21734** (June 2025, updated August 2025)
- Brain-inspired dual-module architecture for latent reasoning
- 27M parameters outperforms larger models on ARC benchmark
- Only 1000 training samples needed
- Single forward pass without explicit CoT supervision
- High-level module: slow, abstract planning; Low-level module: rapid, detailed computations
- No pre-training or CoT data required
- Achieves near-perfect performance on Sudoku and maze tasks
- Aligns with "latent reasoning" paradigm from May 1 findings

#### DeepSeek V4 Preview Launch (April 24, 2026)

**Source:** TechCrunch
- Two models: V4 Flash (284B params, 13B active) and V4 Pro (1.6T params, 49B active)
- V4 Pro is the biggest open-weight model available
- Both have 1M token context windows
- Near-frontier performance on reasoning benchmarks
- Coding competition performance "comparable to GPT-5.4"
- Pricing: V4 Flash $0.14/$0.28 per 1M tokens, V4 Pro $0.145/$3.48
- Text-only (no multimodal support yet)
- Falls slightly behind frontier on knowledge tests (~3-6 month developmental lag)

#### Reasoning Benchmark Updates (BenchLM, May 1, 2026)

**Top Reasoning Models:**
- Grok 4.1: 96.8% weighted reasoning score (leader)
- Gemini 3.1 Pro: 96.3%
- GPT-5.4: 95.6%
- Claude Mythos Preview: Best MRCRv2 and MuSR scores
- Claude Opus 4.6: #3 for long-context reasoning

**Key Benchmark Highlights:**
- Claude Opus 4.7 leads SWE-bench Verified at 83.5%
- Gemini 3.1 Pro leads Humanity's Last Exam at 44.7%
- GPT-5.4 Pro leads GPQA Diamond at 94.6%
- Claude Opus 4.6 leads METR Time Horizons at 718.8 minutes

#### Frontier Tier Three-Way Competition

- GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro all making #1 claims on different benchmarks
- Each dominates different categories - "best model" claim is context-dependent
- Meta's Llama 4 family (April 5): Scout with 10M token context

### Key Trends from May 2, 2026:
1. **Latent Reasoning Convergence:** HRM and DeepSeek V4 both emphasize internal reasoning - paradigm strengthening
2. **Model Size Scaling:** DeepSeek V4 Pro (1.6T params) sets new record for open-weight models
3. **Reasoning Benchmark Differentiation:** No single model dominates all - specialization matters
4. **Efficiency Focus:** Architectural innovation (HRM) and quantization (TurboQuant) pushing efficiency

---

## 2026-05-01 (Friday)

### New Insights:

#### Latent Reasoning Paradigm Shift

**LLM Reasoning Is Latent, Not the Chain of Thought** (arXiv:2604.15726)
- Position paper arguing reasoning should be studied as latent-state trajectory formation
- Three hypotheses: H1 (latent-state), H2 (surface CoT), H0 (serial compute)
- Evidence most strongly supports H1 as default working hypothesis
- Recommendations: Treat latent-state dynamics as default object; evaluate with designs disentangling surface traces, latent states, and serial compute
- Implications: Claims about faithfulness, interpretability, benchmarks, and inference-time intervention all depend on this foundational question

**Thinking Without Words: Efficient Latent Reasoning with Abstract Chain-of-Thought** (arXiv:2604.22709)
- Proposes Abstract-CoT: discrete latent reasoning with reserved vocabulary tokens
- Achieves 11.6x fewer reasoning tokens while maintaining comparable performance
- Training: Policy iteration warm-up alternating between bottlenecked SFT and self-distillation
- Emergent power law distribution over abstract vocabulary (like natural language)
- Applicable across mathematical reasoning, instruction-following, multi-hop reasoning

#### Efficiency Breakthroughs in Quantization

**QeRL** (NVlabs, ICLR 2026)
- NVFP4 quantization combined with LoRA for RL acceleration
- Quantization noise increases policy entropy → enhanced exploration → better strategies
- Enables RL training for 32B LLMs on single GPUs
- Beyond efficiency: noise as exploration signal

**TurboQuant** (Google, ICLR 2026)
- KV cache compression to 3 bits with zero accuracy loss
- 6x memory reduction for LLM inference
- Up to 8x H100 attention speedup vs FP32
- Uses Quantized Johnson-Lindenstrauss (QJL) and PolarQuant

**SliderQuant** (OpenReview)
- Post-training quantization treating layers unequally based on sensitivity
- Addresses suboptimality of sequential layer-equivalent quantization at low bit-width

#### Prompt Engineering Automation

**DSPy-Based Declarative Learning** (arXiv:2604.04869)
- Automated modular prompt construction via DSPy framework
- Combines symbolic planning, gradient-free optimization, automated module rewriting
- Reduces hallucinations, improves factual grounding, avoids unnecessary complexity

**TDD Governance for Multi-Agent Code Generation** (April 29, 2026)
- AI-native Test-Driven Development framework
- Classical TDD principles operationalized as prompt-level and workflow-level governance
- Layered architecture for multi-agent code generation

#### Test-Time Compute Evolution

**Scaling Test-time Compute for LLM Agents** (arXiv:2506.12928)
- First systematic exploration of TTS methods for language agents
- List-wise verification method outperforms other merging approaches
- Extends beyond pure reasoning to agent workflows

**ICLR 2026 Highlights** (Lambda AI)
- 12 papers covering agents, LLM alignment, world modeling, multimodal efficiency
- Key themes: reinforcement learning for reasoning, quantization advances

### Key Trends from May 1, 2026:
1. **Latent Reasoning Paradigm:** Converging evidence that reasoning happens in latent space, not explicit CoT
2. **Efficiency Revolution:** 11.6x token reduction, 6x memory reduction making extended reasoning practical
3. **Agent Integration:** Test-time compute scaling extending to multi-agent systems
4. **Automation:** Prompt engineering evolving from art to automated optimization

---

## Document Purpose

This file accumulates key insights and trends from ongoing LLM research on arXiv. Updated daily, it serves as a living knowledge base tracking:
- Major breakthroughs and innovations
- Emerging trends and patterns
- Practical implications for researchers and practitioners
- Open research questions and future directions

---

## 2026-05-15

### New Papers (11 findings)

1. **Physics-R1** (arXiv:2605.14040) — Audited olympiad corpus revealing 46-pp MCQ vs open-ended gap; GSPO+DAPO recipe for Qwen3-VL-8B-Thinking; three-stage contamination audit pipeline

2. **Mistletoe** (arXiv:2605.14005) — Stealthy attack on speculative decoding via null-space projection; reduces accepted token length while preserving semantics

3. **TraFL** (arXiv:2605.13935) — Trajectory-balance post-training for diffusion LMs; overcomes trajectory locking; only method improving in all benchmark-length settings

4. **Derivation Prompting** (arXiv:2605.14053) — Logic-based RAG improvement via derivation tree construction; interpretable and accurate

5. **PEML** (arXiv:2605.14055) — Co-optimizes continuous prompts and low-rank model adaptation for multi-task learning; 6.67% avg improvement

6. **Multilingual Knowledge Editing** (arXiv:2605.13919) — Shared covariance vector merging critical for multilingual edit compatibility across 12 languages

7. **VectraYX-Nano** (arXiv:2605.13989) — First Spanish-native cybersecurity LLM with MCP; 42M params, 81MB GGUF, native tool invocation

8. **VeGAS** (arXiv:2605.12620) — Verifier-guided action selection for embodied agents; 36% gain via failure-case curriculum for verifier training

9. **BenchJack** (arXiv:2605.12673) — Red-teaming agent benchmarks; 219 flaws found, reduces hackability from ~100% to <10% on 4 benchmarks

10. **REVELIO** (arXiv:2605.12674) — Interpretable VLM failure mode discovery; spatial grounding failures in driving/robotics VLMs

11. **DisaBench** (arXiv:2605.12702) — Disability harm evaluation framework; 12 categories co-created with disability community

## 2026-05-28 (Thursday)

### New Insights:

#### ACROS: Sense Representations as Inducible Interfaces
**arXiv:2605.28669** (May 27, 2026) — cs.CL, cs.AI
- ACROS induces explicit sense pathway into frozen pretrained decoder LM through gated residual addition
- Zero-shot word-sense disambiguation: 64.95 F1 on Raganato ALL (competitive with WordNet first-sense heuristic)
- Low-KL lexical steering across 5,161 CoInCo cases recovers ~90% of positive shifts
- SENSIA cross-lingual adaptation to 4 languages (mean R@1 0.988)
- Key insight: Sense representations are now an inducible interface for ordinary pretrained LMs — no need for pretraining with sense structure baked in

#### S2B-LM: Compositional Learning Behaviours in Formal Mathematics
**arXiv:2605.28512** (May 27, 2026) — cs.CL
- CLB competency = capacity to ground and recombine novel symbolic structures in context
- Chain-of-thought scaffolding elicits latent CLB competency
- Every model breaking into Olympiad-level (miniF2F >75%) is among top 5 CLB scorers (p=0.004)
- CLB competency is necessary but not sufficient for hard tail of formal mathematical verification
- Key insight: Search-heavy models cover tractable bulk without detectable CLBs — CLB is what separates Olympiad-level performance

#### Reverse Probing: Token-level Uncertainty Quantification for Clinical LLMs
**arXiv:2605.28740** (May 27, 2026) — cs.CL, cs.AI
- First UQ framework specialized for clinical summarization
- Extracts uncertainty signals from 4 categories of internal activations
- Up to 4x higher AUPRC vs 8 baselines, reduced inference time
- Key insight: Delta energy and neighborhood context are most consistent predictors — models internally respond to unsupported clinical content

#### MemTrace: Tracing and Attributing Errors in LLM Memory Systems
**arXiv:2605.28732** (May 27, 2026) — cs.CL, cs.AI, cs.LG
- Transforms memory pipelines into executable memory evolution graphs
- MemTraceBench from Long-Context, RAG, Mem0, EverMemOS
- Memory failures are systematic: information loss and retrieval misalignment
- Closed-loop system boosts end-task performance by up to 7.62%
- Key insight: Memory debugging now tractable through fine-grained operational tracing

#### MUTATE: Evaluating Divergent Thinking in Interactive LLM Agents
**arXiv:2605.28465** (May 27, 2026) — cs.CL
- Interactive benchmark for agentic divergent thinking (path-level and action-level)
- Scores both completed paths AND off-path attempts
- ReDNA separates unconstrained divergent candidate generation from convergent constraint selection
- Key insight: Success-only evaluations miss divergent reasoning that gets discarded — off-path attempts matter

#### AdaDPO: Self-Adaptive DPO with Balanced Gradient Updates
**arXiv:2605.28440** (May 27, 2026) — cs.CL, cs.LG
- DPO suppresses dispreferred responses faster than promoting preferred ones (asymmetric gradients)
- AdaDPO: per-preference-pair stop-gradient-based coefficients from policy model probabilities
- 81% of hyperparameter combinations outperform DPO on Llama-3-8B-Instruct
- Global best LC (48.3%) and raw win rate (46.1%) on AlpacaEval 2
- Key insight: Gradient imbalance is core DPO problem — AdaDPO rectifies it and generalizes to SimPO, R-DPO, IPO, CPO, ORPO

#### Soft-RLVR: Self-Verified Reinforcement Learning with Soft Rewards
**arXiv:2605.28561** (May 27, 2026) — cs.CL, cs.LG
- Converts prompts into checklists of atomic requirements; LLM verifier scores with soft rewards
- Checklist-based verification gives denser partial-credit signal vs sparse pass/fail
- Self-verification prone to reward inflation — explicit stabilization needed
- Improves IFEval by up to 11.1 points
- Key insight: Self-verification requires explicit stabilization to prevent overly permissive self-judgments

#### OScaR: Occam's Razor for Extreme KV Cache Quantization
**arXiv:2605.19660** (May 19, 2026) — cs.LG, cs.CL
- Token Norm Imbalance (TNI) identified as primary bottleneck under extreme compression
- OScaR: Canalized Rotation + Omni-Token Scaling to mitigate TNI-induced variance
- Near-lossless INT2 quantization across X-LLMs; up to 3.0x speedup, 5.3x memory reduction, 4.1x throughput
- Key insight: Simple rotation + scaling beats complex quantization pipelines (TurboQuant) for KV cache

#### Attentional White Bear Effect in Transformer Language Models
**arXiv:2605.28639** (May 27, 2026) — cs.CL, cs.AI
- Instruction-based suppression doesn't reduce internal representation — just suppresses expression
- Prohibited concepts remain highly recoverable from hidden representations
- Continue to influence attention routing and shape generations despite lexical avoidance
- Key insight: Alignment via suppression is surface-level — concept representations persist internally

#### Mobile-Aptus: Confidence-Driven Interaction in MLLM Agents
**arXiv:2605.28629** (May 27, 2026) — cs.CL
- Solves over-execution AND over-soliciting in autonomous agents
- Two stages: interaction capability empowerment (SFT) + confidence bias correction (DPO)
- 17% average improvement in task success rate; real-world: 26% improvement, 0.64 intervention steps per instruction
- Key insight: Confidence-driven proactive interaction balances autonomy and assistance

#### IPO-Toolkit: Section-Structured Analysis of IPO Documents
**arXiv:2605.28714** (May 27, 2026) — cs.CL, cs.AI
- 109,000+ IPO filings from 1994-2026, 76,000+ images; documents exceed 500K tokens
- Chart quality and misleadingness assessment; SOTA models diverge from expert judgments
- Key insight: Real-world long multimodal documents expose alignment challenges in frontier models

#### VLM Human Alignment During Natural Reading
**arXiv:2605.28818** (May 27, 2026) — cs.CL, q-bio.NC
- Multimodal pretraining may NOT confer uniform global advantage in human alignment
- Language-internal representations remain key factor for modeling human text processing
- VLM advantage emerges selectively when sentences contain stronger visual semantic content
- Key insight: VLMs don't automatically align better with humans — advantage is selective, not global

---
## 2026-05-31 (Sunday)

### New Insights:

#### CONF-KV: Uncertainty-Guided KV Cache Eviction
**arXiv:2605.24786** (May 24, 2026) — cs.LG, cs.AI
- Next-token distribution provides scalar confidence — converts model uncertainty into cache management signal
- Retains more context when uncertain, prunes aggressively when confident
- Near footprint of fixed 512-token sliding window; 1.5-2.1 perplexity points above full KV
- 91.4% Needle-in-a-Haystack retrieval vs 53.8% (sliding windows) and 80.6% (H2O)
- 95.3% VisualWebArena success at 2.8x lower peak memory
- Key insight: Model-derived uncertainty is an untapped signal for cache management

#### RePoT: Recoverable Program-of-Thought
**arXiv:2605.30052** (May 28, 2026) — cs.SE, cs.AI, cs.CL
- Single invalid PoT action silently invalidates trajectory
- RePoT: verified replay walks plan to first invalid transition, single LLM call resumes from verified prefix
- Costs one extra call on ~14% of problems where PoT fails
- 96.9% vs 86.3% on gpt-5.4-mini-medium; +3.3 to +20.0pp on open-weights models
- Checkpoint information, not repair tail, is the load-bearing recovery signal
- Key insight: Checkpoint-based recovery enables reliable PoT for agentic planning

#### CoHyDE: Tool Retrieval via Iterative Co-Training
**arXiv:2605.29271** (May 28, 2026) — cs.AI, cs.IR, cs.LG
- Encoder excels on well-formed queries, fails on underspecified; HyDE opposite
- CoHyDE: encoder and LLM rewriter co-evolve iteratively
- +2.5pp NDCG@5 on standard queries; +6.3pp on vague queries; +8pp on hardest vague tier
- Key insight: Complementary approaches must co-evolve — neither alone handles both query types

#### Evaluation Engineering: Harness Quality Matters
**arXiv:2605.24213** (May 27, 2026)
- 57 evaluation harnesses studied; 16,560 issues classified
- 41.4% of issues in Specification stage; top causes: unimplemented features (24.3%), documentation gaps (20.3%), missing validation (17.2%)
- Key insight: Evaluation engineering is a distinct software concern; harness quality directly impacts research reliability

#### LLM Reliability: CoT Does Not Guarantee Procedural Competence
**arXiv:2605.02028** (Stanford, May 3, 2026)
- LLMs may apply learned procedures or pattern match rather than genuinely reason
- Foundational procedural state is lost during generation — longer CoT cannot reconstruct it
- Key insight: CoT improves semantic scaffolding but does not ensure rule execution reliability

#### SAERL: Sparse Autoencoder-Guided Post-Training Data Engineering
**arXiv:2605.27354** (May 29, 2026)
- SAE features model diversity, difficulty, quality for data selection
- Grounded operations: SAE-space clustering, difficulty-weighted sampling, quality-filtered curation
- Key insight: Model internals provide principled signals for post-training data engineering

#### LLM Privacy Amplification in Multi-Agent Systems
**arXiv:2605.27766** (May 26, 2026) — cs.AI
- Multi-turn social evaluation: 19.95% → 45.30% privacy violations (OpenAI models)
- Leakage is socially contagious: 8x more likely after observing peer disclosure
- >37.8% leakage persists even with explicit privacy safeguards
- Key insight: Static chat-based benchmarks underestimate agentic deployment risks; social context alone triggers sensitive disclosures

#### GR-Ben: General Reasoning Benchmark for Process Reward Models
**arXiv (cs.AI, May 2026)**
- Addresses step-level reasoning evaluation gap vs outcome-only evaluation
- Standardized PRM evaluation emerging as research frontier
- Key insight: Process reward model evaluation requires purpose-built benchmarks

---
