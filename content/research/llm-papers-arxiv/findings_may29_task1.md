# Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — May 29, 2026

## Task 1: Chain-of-Thought, Prompt Engineering, Efficiency

---

### STARS: Stabilizing Recurrent Dynamics for Test-Time Scalable Latent Reasoning
**arXiv:2605.26733** (May 26, 2026) — cs.LG, cs.AI — ICML 2026
- LoopLMs enable efficient latent reasoning through depth recurrence, but exhibit unreliable test-time scaling: performance peaks then collapses with further recurrence
- Root cause: trade-off between stability and effectiveness in existing architectures
- STARS (STAbility-driven Recurrent Scaling): constrains latent states to approach asymptotically stable fixed points via efficient Jacobian Spectral Radius Regularization
- Achieves reliable test-time scaling on arithmetic tasks; substantially mitigates performance degradation as recurrence depth increases while improving peak performance
- **Key insight**: Converging toward stable fixed points while preserving effectiveness is the path to reliable latent reasoning scaling

---

### Reasoning that Travels: Dissecting How Chain-of-Thought Transfers Across Models
**arXiv:2605.28913** (May 27, 2026) — cs.CL
- Cross-model CoT transfer studied via provider-receiver framework with trace prefixes
- Full traces often transfer successfully, but prefix trajectories reveal distinct mechanisms
- Force-answer mode: AIME transfer driven by explicit answer availability; MMLU-Pro reflects receiver competence; ZebraLogic depends on partial structured-answer information
- Free-generation mode: partial CoTs improve performance across benchmarks — prefixes guide continued reasoning
- Answer agreement among receivers provides gold-free signal for stopping provider reasoning early
- **Key insight**: Cross-model CoT transfer is not single phenomenon — can reflect answer extraction, reasoning scaffolding, or receiver-dependent competence

---

### GrowLoop: Self-Evolving Conversation Evaluation Seeded by Human
**arXiv:2605.28882** (May 26, 2026) — cs.CL, cs.AI
- Human-likeness in open-ended conversation is tacit knowledge resisting explicit formulation
- GrowLoop: self-evolving evaluation system with minimal human seed annotations, LLM agents iteratively extract and refine rubrics via Heuristic Learning
- Human-AI agreement required where annotators converge; plausibility expected where they diverge
- Rubric-Case co-evolution enables continuous evolution as models advance
- Substantially outperforms existing methods in alignment with human judgments; uncovers issues annotators overlook
- **Key insight**: Shifts benchmarking paradigm from manual updates to comprehensive, continuous self-evolution

---

### Synthetic Misconception Generation via Agent Framework
**arXiv:2605.29007** (May 27, 2026) — cs.CL
- Targeted synthetic errors harder than free-form incorrect-answer generation
- Framework: Generation Agent drafts erroneous solution conditioned on target class; Examination Agent judges class-consistency
- Five-class taxonomy adapted from revised Bloom's taxonomy
- Answer-grounding contributes more than expanded examples or external textbook content
- **Key insight**: Building class-stratified synthetic error datasets enables tutoring/training applications where authentic student corpora unavailable

---

### LLM Behavioral Consistency in Multi-Step Tool-Calling Pipelines
**arXiv:2605.28840** (Apr 23, 2026) — cs.CL, cs.AI, cs.SE
- First systematic study of behavioral consistency in multi-step tool-calling agents
- Measures whether agents select same tools, same order, same arguments across repeated identical invocations
- Studies structured tool-calling interfaces with typed parameters and consequential side effects (richer than ReAct-style free-text actions)
- **Key insight**: Reliability in production tool-calling agents remains fundamental open question

---

### Dynamic Session-Level Evaluation and Optimization for Role-Playing Agents
**arXiv:2605.29256** (May 28, 2026) — cs.CL, cs.AI
- Role-playing requires session-level evaluation, but existing methods remain turn-level
- DynSess: unified session-level framework with DynSess-Eval (scores complete dialogues) and DynSess-Character (multi-turn lookahead search training)
- Two variants: DSPO (off-policy) and GSRPO (on-policy)
- Aligns with human judgments substantially better than prior evaluators
- Matches strongest character model despite substantially fewer parameters
- **Key insight**: Session-level evaluation unlocks role consistency and interactive ability that turn-level metrics miss

---

### Learnable Assessment Skills for LLM-Based Automated Scoring
**arXiv:2605.29274** (May 28, 2026) — cs.CL
- LLM-based scoring near-human performance but scaling bottlenecked by per-item human rubric construction
- Assessment skills: item-independent natural-language procedural knowledge guiding scoring workflow
- Iterative framework decomposes skill into fixed scaffold + learnable item-agnostic rules
- No expert-written rubric required; surpasses dataset-provided expert rubric on ASAP-SAS
- **Key insight**: Learning evaluation heuristics from scoring experience bypasses per-item configuration bottleneck

---

### Schema-Grounded Multi-Agent Collaboration via JSON Patch Mutations
**arXiv:2605.29313** (May 28, 2026) — cs.CL
- PatchBoard: replaces inter-agent dialogue with validated JSON Patch mutations over shared structured state
- Architect agent constructs task-specific schema and workflow rules; deterministic kernel validates mutations
- On ALFWorld: 84.6% success rate vs 30.8% (LangGraph) and 61.6% (Flock)
- Tokens per successful task: 45.5k vs 368.3k (LangGraph) and 64.2k (Flock)
- **Key insight**: Structured state mutations enable reliable, auditable multi-agent coordination with order-of-magnitude token savings

---

### Source-Grounded Semantic Reinforcement Learning for Low-Resource Translation
**arXiv:2605.29502** (May 28, 2026) — cs.CL
- SG-SRL: converts source-language monolingual data into cross-lingual semantic supervision
- Reference-free RL using cross-lingual semantic reward model
- Lightweight recovery stage using small parallel corpus restores fluency while preserving semantic gains
- **Key insight**: Encoder-based semantic reward can substitute for LLM-based reranker in realistic low-resource settings

---

### Gold-Action Policy Distillation for Agentic KBQA
**arXiv:2605.29584** (May 28, 2026) — cs.CL
- GAPD: adds dense token-level guidance to outcome-based RL for knowledge base question answering
- MID-ANCHOR MATCHING: matches student states to gold states through explored entity sets
- Surpasses SOTA on WebQSP, GrailQA, and GraphQ
- **Key insight**: Dense intermediate supervision from gold logical forms enables stronger action learning than sparse final rewards

---

### Kronecker Embeddings: Byte-Level Token Representations
**arXiv:2605.29459** (May 28, 2026) — cs.CL, cs.LG
- Replaces learned embedding table (|V| x d_model) with deterministic byte-level factorization
- Eliminates 91-94% of input-side trainable parameters at frontier scale
- Reaches 2.5% lower validation loss than BPE-tied baseline; 1.43x fewer steps to converge
- On-the-fly variant: reconstructs from 4.5MB byte buffer vs 2.15GB table
- Preserves top-1 on 55.5% of spelling-robustness pairs vs 47.3% for BPE
- **Key insight**: Byte-level locality shifts disambiguation to early attention layers — typographic variants cluster less than morphological relatives

---

### BrahmicTokenizer-131K: Indic-Capable Drop-In Replacement for o200k_base
**arXiv:2605.29379** (May 28, 2026) — cs.CL, cs.LG
- 131K vocabulary byte-level BPE tokenizer with surgical retrofit across nine Brahmic Unicode blocks
- 26.7% fewer tokens than Tekken/Sarvam-m on Indic text; 76.79% improvement on Odia (4.31x compression)
- Matches o200k_base English fertility; beats Tekken/Sarvam-m on HumanEval, MBPP, GSM8K
- Only tokenizer simultaneously competitive on Brahmic, English, EU, code, and math at 131K budget
- **Key insight**: Script-prune crop + linear-programming allocation enables drop-in replacement preserving English while dramatically improving Indic compression

---

### EviLink: Multi-Path Schema Linking with Uncertainty-Guided Evidence Acquisition
**arXiv:2605.29670** (May 28, 2026) — cs.CL, cs.AI
- Reframes schema linking as uncertainty-aware inference over multiple plausible SQL paths
- Spider2-Scale: 90.15% field-level strict recall, 123.30K average tokens, improved downstream SQL generation
- **Key insight**: Distinguishing required schema items from path-dependent uncertain ones improves balance of completeness, relevance, and token cost

---

### HTAM: Hierarchical Transition-Attended Memory for Operator Optimization
**arXiv:2605.29734** (May 28, 2026) — cs.CL
- LLM-based GPU operator generation with two-level Hierarchical Transition Graph (HTG)
- Organizes coarse global directions, detailed local strategies, and transition experience
- KernelBench: consistently improves correctness, fast-solution rate, and speedup over baselines
- **Key insight**: Appropriate granularity (coarse-to-fine) organizes optimization experience for effective LLM-based CUDA code generation

---

### SafeRx-Agent: Knowledge-Grounded Multi-Agent Medication Recommendation
**arXiv:2605.29146** (May 27, 2026) — cs.CL, cs.AI
- First fine-grained medication recommendation at fourth-level ATC code generation
- Multi-agent framework with patient context, external clinical knowledge, safety verification
- Traceable medication sets with controlled drug interactions and contraindications
- **Key insight**: Safety-critical domains require explicit verification traces alongside recommendation accuracy

---

### MusTBENCH: Temporal Grounding in Music LLMs
**arXiv:2605.29300** (May 28, 2026) — cs.CL, cs.AI
- Evaluates whether LALM responses are grounded in correct temporal regions of audio
- Five temporally grounded QA tasks; existing LALMs struggle with precise temporal grounding
- MusT optimization recipe: encoder adaptation, LLM adaptation, SFT, RL-based optimization
- **Key insight**: Temporal grounding is a key missing capability in current audio-language models

---

### PhoneWorld: Scaling Phone-Use Agent Environments
**arXiv:2605.29486** (May 28, 2026) — cs.CL, cs.AI, cs.LG
- Reusable pipeline converting real GUI trajectories into controllable phone-use environments
- 34 apps across 16 domains; derives executable tasks, rule-based verifiers, training rollouts
- Replacing 10K steps from AndroidWorld with PhoneWorld supervision improves all four evaluation benchmarks
- HYMobileBench: +17.7 points; AndroidWorld: +14.7 points; PhoneWorld: +52.5 points
- **Key insight**: Shifts focus from building one mobile benchmark at a time to scaling supply of phone-use environments

---

### Multi-Agent Scientific Hypothesis Discovery
**arXiv:2605.29475** (May 28, 2026) — cs.CL — ACL 2026 System Demonstrations
- MOOSE-Copilot: human-AI interaction protocol bridging divergent exploratory ideation and convergent fine-grained refinement
- Three explicit steering signals: initial blueprints, inter-stage routing, regenerative feedback
- Web-based interface with interactive tree visualization
- **Key insight**: Structured expert steering outperforms purely autonomous baselines in scientific hypothesis discovery

---

### LLMBridge: Referential Bridging Resolution
**arXiv:2605.29048** (May 27, 2026) — cs.CL
- End-to-end bridging resolution pipeline combining heuristic pre/post-processing with LLM NLI ability
- Surpasses SOTA on ISNotes, BASHI, and GUMBridge in both end-to-end and basic bridging settings
- **Key insight**: Combining symbolic heuristics with neural NLI enables robust bridging resolution

---

### Medical Multi-Source RAG: Source-Dependence Auditing
**arXiv:2605.29084** (May 27, 2026) — cs.CL, cs.AI, cs.IR
- Multi-author institutional corpus can give different answers to same question depending on source retrieved
- TransplantQA benchmark; HERO-QA hierarchical retrieval; 5-label taxonomy for inter-source relationships
- Better retrieval reveals far more disagreement than prior estimates — understates prevalence, not intensity
- **Key insight**: Source-dependence is a missing axis of NLP evaluation; auditing requires shifting from answer correctness to inter-source relationship

---

### Persona Effects in Urban Perception Explanations
**arXiv:2605.29064** (May 27, 2026) — cs.CL, cs.CV, cs.HC
- Persona prompting shapes justifications systematically; captions converge, justifications vary
- Socioeconomic and political attributes influence generated explanations
- **Key insight**: Personas affect interpretive frameworks more than perceptual outputs

---

## Sources
- https://arxiv.org/abs/2605.26733
- https://arxiv.org/abs/2605.28913
- https://arxiv.org/abs/2605.28882
- https://arxiv.org/abs/2605.29007
- https://arxiv.org/abs/2605.28840
- https://arxiv.org/abs/2605.29256
- https://arxiv.org/abs/2605.29274
- https://arxiv.org/abs/2605.29313
- https://arxiv.org/abs/2605.29502
- https://arxiv.org/abs/2605.29584
- https://arxiv.org/abs/2605.29459
- https://arxiv.org/abs/2605.29379
- https://arxiv.org/abs/2605.29670
- https://arxiv.org/abs/2605.29734
- https://arxiv.org/abs/2605.29146
- https://arxiv.org/abs/2605.29300
- https://arxiv.org/abs/2605.29486
- https://arxiv.org/abs/2605.29475
- https://arxiv.org/abs/2605.29048
- https://arxiv.org/abs/2605.29084
- https://arxiv.org/abs/2605.29064
