# Findings: Incremental Benchmark Releases, Scaling Laws, and Multimodal LLM Developments
## arXiv Papers: April 13-15, 2026

**Research Period:** April 13-15, 2026
**Date Compiled:** April 15, 2026
**Source:** arXiv (cs.CL, cs.LG, cs.AI categories)

---

## 📊 Summary

This report captures new developments in benchmark releases, scaling laws, multimodal architectures, and performance evaluation methodologies from arXiv papers submitted between April 13-15, 2026. Key highlights include the introduction of PolicyBench (a large-scale cross-system policy comprehension benchmark), new scaling laws for looped architectures, and comprehensive meta-analysis of the AI safety benchmark ecosystem.

---

## 🆕 New Benchmark Releases

### 1. PolicyBench - Cross-System Policy Comprehension Benchmark

**Paper:** "Towards Excellent Comprehension of Public Policy for Large Language Models"
**arXiv ID:** 2604.12995
**Authors:** Han Bao, Penghao Zhang, Yue Huang, et al.
**Status:** Accepted by ACL 2026 findings
**URL:** https://arxiv.org/abs/2604.12995

**Description:**
- **First large-scale cross-system benchmark** evaluating LLM policy comprehension across US-China contexts
- **21K test cases** spanning a broad spectrum of policy areas, capturing real-world governance diversity and complexity
- Follows **Bloom's taxonomy** with three core capability levels:
  1. **Memorization**: Factual recall of policy knowledge
  2. **Understanding**: Conceptual and contextual reasoning
  3. **Application**: Problem-solving in real-life policy scenarios

**Key Innovation:** 
- Provides a structured framework for assessing policy understanding across different political and cultural systems
- Reveals key limitations of current LLMs in policy understanding
- Suggests paths toward more reliable, policy-focused models

**Associated Model:**
- **PolicyMoE**: Domain-specialized Mixture-of-Experts model with expert modules aligned to each cognitive level
- Demonstrates stronger performance on application-oriented policy tasks than on memorization or conceptual understanding

---

### 2. QuarkMedSearch Benchmark - Medical Deep Search Evaluation

**Paper:** "A Long-Horizon Deep Search Agent for Exploring Medical Intelligence"
**arXiv ID:** 2604.12867
**Authors:** Zhichao Lin, et al.
**URL:** https://arxiv.org/abs/2604.12867

**Description:**
- Built specifically for **Chinese medical deep search** scenarios
- Constructed through **collaboration with medical experts** with rigorous manual verification
- Evaluates full-pipeline approach spanning:
  - Medical multi-hop data construction
  - Training strategies
  - Evaluation benchmarks

**Context:**
- Part of the QuarkMedSearch system, built upon Tongyi DeepSearch
- Addresses scarcity of deep search training data in the medical domain
- Combines large-scale medical knowledge graph with real-time online exploration

**Performance:**
- Achieves **state-of-the-art performance** among open-source models of comparable scale on the QuarkMedSearch Benchmark
- Maintains strong competitiveness on general benchmarks

---

### 3. LongMemEval-S - Cross-Session Memory Benchmark

**Paper:** "Drawing on Memory: Dual-Trace Encoding Improves Cross-Session Recall in LLM Agents"
**arXiv ID:** 2604.12948
**Authors:** Benjamin Stern, et al.
**URL:** https://arxiv.org/abs/2604.12948

**Description:**
- **4,575 sessions** with **100 recall questions** total
- Evaluates LLM agent memory across multiple sessions
- Tests temporal reasoning, knowledge-update tracking, and multi-session aggregation

**Key Findings:**
- Dual-trace encoding achieves **73.7% overall accuracy** vs 53.5% for fact-only baseline
- **+20.2 percentage point** gain (95% CI: [+12.1, +29.3], bootstrap p < 0.0001)
- Gains concentrate in:
  - Temporal reasoning: +40pp
  - Knowledge-update tracking: +25pp
  - Multi-session aggregation: +30pp
- No benefit for single-session retrieval (consistent with encoding specificity theory)

---

## 📈 Scaling Law Discoveries

### 1. Scaling Laws For Stable Looped Language Models

**Paper:** "Scaling Laws For Stable Looped Language Models"
**arXiv ID:** 2604.12946
**Authors:** Zachary Novack, et al.
**URL:** https://arxiv.org/abs/2604.12946

**Key Contributions:**

**Novel Architecture - Parcae:**
- Addresses instability issues in existing looped architectures (residual explosion, loss spikes)
- Constrains spectral norm of injection parameters via discretization of negative diagonal parameterization
- Achieves **up to 6.3% lower validation perplexity** over prior large-scale looped models

**Scaling Laws for Training:**
- Derives **predictable power laws** to scale FLOPs while keeping parameter count fixed
- Key insight: **looping and data should be increased in tandem**, given a fixed FLOP budget
- Looped architectures scale quality by increasing FLOPs through repeated activations (vs. traditional parameter increase)

**Scaling Laws for Test-Time:**
- Parcae can use looping to scale compute at test-time
- Follows a **predictable, saturating exponential decay**
- Allows compute scaling without parameter increase

**Performance Metrics:**
- At 1.3B parameters, Parcae improves:
  - **CORE quality**: +2.99 points
  - **Core-Extended quality**: +1.18 points
- Achieves **relative quality of up to 87.5%** of a Transformer twice the size
- Same parameter and data budget as strong Transformer baselines

**Theoretical Innovation:**
- Recasts looping as a nonlinear time-variant dynamical system over the residual stream
- Uses linear approximation to identify that instability results from large spectral norms in injection parameters

---

### 2. Loop Corrections to Training and Generalization Errors

**Paper:** "Loop Corrections to the Training and Generalization Errors of Random Feature Models"
**arXiv ID:** 2604.12827
**Authors:** Taeyoung Kim, et al.
**URL:** https://arxiv.org/abs/2604.12827

**Scaling Insights:**
- Derives **loop corrections** to training, test, and generalization errors for random feature models
- Shows that finite-width contributions appear as loop corrections within an effective field-theoretic framework
- Demonstrates that ensemble-averaged errors depend on:
  - Mean kernel (traditional)
  - Higher-order fluctuation statistics (beyond mean-kernel approximation)
- Derives scaling laws for these loop corrections

**Methodology:**
- Neural networks sampled from prescribed initialization ensemble are frozen and used as random features
- Only readout weights are optimized
- Statistical-physics viewpoint applied to study errors beyond mean-kernel approximation

---

## 🏗️ Multimodal Architecture Advances

### 1. MoshiRAG - Full-Duplex Speech LLM with Retrieval

**Paper:** "Asynchronous Knowledge Retrieval for Full-Duplex Speech Language Models"
**arXiv ID:** 2604.12928
**Authors:** Chung-Ming Chien, et al.
**URL:** https://arxiv.org/abs/2604.12928

**Architecture Innovation:**
- **Modular approach** combining compact full-duplex interface with selective retrieval
- **Asynchronous framework** enables model to identify knowledge-demanding queries
- Grounds responses in external information while maintaining natural conversation flow

**Key Features:**
- Leverages natural temporal gap between response onset and core information delivery
- Retrieval process completes during conversation (not blocking)
- **Plug-and-play retrieval methods** without retraining
- Strong performance on **out-of-domain mathematical reasoning tasks**

**Performance:**
- Achieves **factuality comparable to the best publicly released non-duplex speech language models**
- Preserves interactivity inherent to full-duplex systems (real-time, handles pauses/interruptions/backchannels)
- Addresses factuality challenge without scaling model size (which would make real-time inference prohibitively expensive)

---

### 2. PAL - Personal Adaptive Learner (Multimodal Education)

**Paper:** "PAL: Personal Adaptive Learner"
**arXiv ID:** 2604.13017
**Authors:** Madhur Thareja, et al.
**URL:** https://arxiv.org/abs/2604.13017

**Multimodal Capabilities:**
- **Continuously analyzes multimodal lecture content** (video, audio, potentially slides)
- Dynamically engages learners through questions of **varying difficulty**
- Adjusts to learner responses as lesson unfolds
- Generates **personalized summaries** at end of session
- Tailors examples to learner's interests

**Key Innovation:**
- Moves beyond **static personalization** (predefined quizzes, uniform pacing, generic feedback)
- Achieves **real-time, individualized support**
- Unites multimodal content analysis with adaptive decision-making

**Context:**
- Addresses core challenge in AI-enabled education
- Contributes novel framework for responsive digital learning
- Transforms lecture videos into interactive learning experiences

---

### 3. CLAD - Compressed Log Anomaly Detection

**Paper:** "Efficient Log Anomaly Detection Directly on Compressed Representations"
**arXiv ID:** 2604.13024
**Authors:** Benzhao Tang, et al.
**URL:** https://arxiv.org/abs/2604.13024

**Architecture Innovation:**
- **First deep learning framework** to perform LAD directly on compressed byte streams
- Bypasses decompression and parsing bottlenecks
- Purpose-built architecture:
  - Dilated convolutional byte encoder
  - Hybrid Transformer--mLSTM
  - Four-way aggregation pooling

**Key Insight:**
- Normal logs compress into **regular byte patterns**
- Anomalies **systematically disrupt** these patterns
- Extracts multi-scale deviations from opaque bytes

**Training Strategy:**
- Two-stage training:
  1. Masked pre-training
  2. Focal-contrastive fine-tuning (handles severe class imbalance)

**Performance:**
- State-of-the-art **average F1-score of 0.9909** across five datasets
- Outperforms best baseline by **2.72 percentage points**
- **Completely eliminates** decompression and parsing overheads
- Generalizes to structured streaming compressors

---

## 📚 Performance Evaluation Methodologies

### 1. AISafetyBenchExplorer - Comprehensive Benchmark Catalog

**Paper:** "A Metric-Aware Catalogue of AI Safety Benchmarks Reveals Fragmented Measurement and Weak Benchmark Governance"
**arXiv ID:** 2604.12875
**Authors:** Abiodun A. Solanke, et al.
**URL:** https://arxiv.org/abs/2604.12875

**Catalog Scope:**
- **195 AI safety benchmarks** released between 2018 and 2026
- Structured through **multi-sheet schema**:
  - Benchmark-level metadata
  - Metric-level definitions
  - Benchmark-paper metadata
  - Repository activity

**Key Findings - Structural Problems:**
- **Benchmark proliferation has outpaced measurement standardization**
- Dominated by medium-complexity benchmarks: **94/195**
- Only **7 benchmarks** occupy the Popular tier
- **English-only evaluation**: 165/195 benchmarks
- **Evaluation-only resources**: 170/195 benchmarks
- **Stale GitHub repositories**: 137/195 benchmarks
- **Stale Hugging Face datasets**: 96/195 benchmarks
- Heavy reliance on arXiv preprints (among benchmarks with known venue metadata)

**Metric-Level Insights:**
- Familiar labels (accuracy, F1 score, safety score) conceal materially different:
  - Judges
  - Aggregation rules
  - Threat models

**Main Failure Mode:**
- **Fragmentation rather than scarcity**
- Many benchmark artifacts exist, but lack:
  - Shared measurement language
  - Principled basis for benchmark selection
  - Durable stewardship norms for post-publication maintenance

**Contribution:**
- Provides traceable benchmark catalogue
- Controlled metadata schema
- Complexity taxonomy
- Supports rigorous benchmark discovery, comparison, and meta-evaluation

---

### 2. The Verification Tax - Fundamental Limits of AI Auditing

**Paper:** "The Verification Tax: Fundamental Limits of AI Auditing in the Rare-Error Regime"
**arXiv ID:** 2604.12951
**Authors:** Jason Z Wang, et al.
**URL:** https://arxiv.org/abs/2604.12951

**Key Theoretical Result:**
- Minimax rate for estimating calibration error with model error rate ε: **Θ((Lε/m)^{1/3})**
- **"Verification tax"**: As AI models improve, verifying calibration becomes fundamentally harder
- Same exponent in opposite directions for improvement and verification

**Contradictions to Standard Evaluation Practice:**
1. **Self-evaluation without labels provides exactly zero information** about calibration (bounded by constant independent of compute)
2. **Sharp phase transition** at mε ≈ 1 below which miscalibration is undetectable
3. **Active querying eliminates Lipschitz constant**, collapsing estimation to detection
4. **Verification cost grows exponentially** with pipeline depth at rate L^K

**Empirical Validation:**
- Tested across **5 benchmarks** with ~27,000 items:
  - MMLU
  - TruthfulQA
  - ARC-Challenge
  - HellaSwag
  - WinoGrande
- **6 LLMs from 5 families** (8B-405B parameters)
- 27 benchmark-model pairs with logprob-based confidence
- 95% bootstrap CIs, permutation tests
- **Self-evaluation non-significance in 80% of pairs**
- **23% of pairwise comparisons are indistinguishable from noise** among frontier models

**Implications:**
- Credible calibration claims must report verification floors
- Must prioritize active querying once gains approach benchmark resolution

---

### 3. Methodological Insights on LLM-as-Judge Evaluation

**Paper:** "One Token Away from Collapse: The Fragility of Instruction-Tuned Helpfulness"
**arXiv ID:** 2604.13006
**Authors:** Seyedarmin Azizi, et al.
**URL:** https://arxiv.org/abs/2604.13006

**Key Finding:**
- Standard independent **LLM-as-judge evaluation detects only 3.5% average quality drop**
- **Pairwise evaluation reveals 23%** quality drop
- Exposes **methodological blind spot** in how constrained generation is assessed

**Evaluation Scope:**
- Tested across **three open-weight model families** and **one closed-weight model** (GPT-4o-mini)
- Evaluated on **MT-Bench across all eight task categories**
- 1,920 pairwise comparisons judged by GPT-4o-mini and GPT-4o

**Performance Metrics:**
- Lexical constraints (banning single punctuation/word) cause instruction-tuned LLMs to collapse
- **14-48% comprehensiveness loss** in pairwise evaluation
- Baseline response preferred in **77-100%** of comparisons
- GPT-4o-mini suffers **31% comprehensiveness loss** (99% baseline win rate)

**Mechanistic Analysis:**
- Identified as **planning failure**
- Two-pass generation (free generation + constrained rewriting) recovers **59-96%** of response length
- Linear probes on prompt representations predict response length with **R² = 0.51-0.93** before generation begins
- Probes yield negative R² on base models (instruction tuning creates representational structure)
- Base models show no systematic collapse (small, noisy, bidirectional effects)

---

## 🎯 Cross-Domain Benchmarking Insights

### 1. Cross-Hardware Tensor Program Optimization

**Paper:** "Enabling Fast and Efficient Cross-Hardware Tensor Program Optimization via Continual Learning"
**arXiv ID:** 2604.12891
**Authors:** Yixian Shen, et al.
**URL:** https://arxiv.org/abs/2604.12891

**Framework: TCL (Tensor Compiler Learning)**

**Three Core Enablers:**
1. **RDU Sampler**: Data-efficient active learning strategy
   - Selects only **10% of tensor programs** by jointly optimizing:
     - Representativeness
     - Diversity
     - Uncertainty
   - Substantially reduces data collection costs while maintaining near-original model accuracy

2. **Mamba-based cost model**: 
   - Efficiently captures long-range schedule dependencies
   - Favorable trade-off between prediction accuracy and computational cost
   - Reduced parameterization and lightweight sequence modeling

3. **Continuous knowledge distillation framework**:
   - Progressively transfers knowledge across multiple hardware platforms
   - Avoids parameter explosion and data dependency issues of traditional multi-task learning

**Performance Metrics:**
- Optimizing mainstream DL models on **both CPU and GPU platforms**
- Compared to Tenset-MLP:
  - **16.8x faster tuning time** (CPU)
  - **12.48x faster tuning time** (GPU)
  - **1.20x lower inference latency** (CPU)
  - **1.13x lower inference latency** (GPU)

---

### 2. Text2Model and Text2Zinc - Optimization Problem Translation

**Paper:** "Modeling Co-Pilots for Text-to-Model Translation"
**arXiv ID:** 2604.12955
**Authors:** Serdar Kadioglu, et al.
**URL:** https://arxiv.org/abs/2604.12955
**Status:** AAAI'25 Bridge Program on Machine Learning and Operations Research

**Cross-Domain Dataset: Text2Zinc**
- Captures **optimization and satisfaction problems** specified in natural language
- Includes **interactive editor with built-in AI assistant**
- First attempt to integrate **both satisfaction and optimization problems** within:
  - **Unified architecture**
  - **Unified dataset**
- **Solver-agnostic** (unlike existing work focusing on solver-specific models)

**Co-Pilot Suite: Text2Model**
- Based on **several LLM strategies** with varying complexity
- **Online leaderboard** for comparison
- Compared strategies:
  - Zero-shot prompting
  - Chain-of-thought reasoning
  - Intermediate representations via knowledge-graphs
  - Grammar-based syntax encoding
  - Agentic approaches (sequential sub-tasks)

**Key Innovation:**
- Leverages **MiniZinc's solver-and-paradigm-agnostic** modeling capabilities
- Formulates combinatorial problems in solver-agnostic way

**Findings:**
- LLMs are **promising but not yet push-button technology** for combinatorial modeling
- Co-pilot strategies are competitive and in parts improve recent research
- Contributes co-pilots, leaderboard, and dataset to open-source

---

## 🧠 Memory and Long-Horizon Architectures

### 1. Dual-Trace Memory Encoding for LLM Agents

**Paper:** "Drawing on Memory: Dual-Trace Encoding Improves Cross-Session Recall in LLM Agents"
**arXiv ID:** 2604.12948
**Authors:** Benjamin Stern, et al.
**URL:** https://arxiv.org/abs/2604.12948

**Inspiration:**
- Based on **drawing effect** from cognitive science

**Architecture Innovation:**
- Each stored fact paired with **concrete scene trace**
- Narrative reconstruction of moment and context when information was learned
- Agent commits to **specific contextual details** during encoding
- Creates **richer, more distinctive memory traces**

**Theoretical Foundation:**
- Consistent with **encoding specificity theory**
- Benefits: temporal reasoning, knowledge-update tracking, multi-session aggregation
- No benefit: single-session retrieval

**Performance:**
- Evaluated on **LongMemEval-S benchmark** (4,575 sessions, 100 recall questions)
- Dual-trace: **73.7%** vs Fact-only: **53.5%**
- **+20.2pp gain** (95% CI: [+12.1, +29.3], p < 0.0001)
- Achieves gain at **no additional token cost**

**Extension:**
- Sketches architectural design for adapting to coding agents
- Preliminary pilot validation provided

---

### 2. AiScientist - Autonomous Long-Horizon ML Research Engineering

**Paper:** "Toward Autonomous Long-Horizon Engineering for ML Research"
**arXiv ID:** 2604.13018
**Authors:** Fanzhe Meng, et al.
**URL:** https://arxiv.org/abs/2604.13018

**Key Principle:**
- Strong long-horizon performance requires both:
  1. **Structured orchestration**
  2. **Durable state continuity**

**Architecture:**
- **Hierarchical orchestration** with **permission-scoped File-as-Bus workspace**
- Top-level **Orchestrator** maintains stage-level control through:
  - Concise summaries
  - Workspace map
- Specialized agents repeatedly re-ground on **durable artifacts**:
  - Analyses
  - Plans
  - Code
  - Experimental evidence
- **Thin control over thick state** (not relying primarily on conversational handoffs)

**Performance:**
- **PaperBench score**: +10.54 points average improvement over best matched baseline
- **MLE-Bench Lite**: 81.82 Any Medal%
- Ablation: File-as-Bus protocol key driver (removing it reduces PaperBench by 6.41 points, MLE-Bench Lite by 31.82 points)

**Key Insight:**
- Long-horizon ML research engineering is a **systems problem of coordinating specialized work over durable project state**
- Not a purely local reasoning problem

**Code:** https://github.com/AweAI-Team/AiScientist

---

## 🔬 Additional Notable Developments

### 1. DDTree - Diffusion Draft Tree for Speculative Decoding

**Paper:** "Accelerating Speculative Decoding with Block Diffusion Draft Trees"
**arXiv ID:** 2604.12989
**Authors:** Liran Ringel
**URL:** https://arxiv.org/abs/2604.12989

**Innovation:**
- Constructs **draft tree directly** from per-position distributions of block diffusion drafter
- Under fixed node budget, uses **best-first heap algorithm** to select continuations
- Continuations selected by surrogate defined by draft model's output
- Tree verified efficiently in **single target model forward pass**
- Uses **ancestor-only attention mask**

**Performance:**
- Builds on **DFlash** (leading draft model for speculative decoding)
- Achieves gains by verifying multiple trajectories per round
- Among leading approaches to speculative decoding

---

### 2. BEAM - Bi-Level Memory-Adaptive Algorithmic Evolution

**Paper:** "Bi-level Memory-adaptive Algorithmic Evolution for LLM-Powered Heuristic Design"
**arXiv ID:** 2604.12898
**Authors:** Chuyang Xiang, et al.
**URL:** https://arxiv.org/abs/2604.12898

**Architecture:**
- **Exterior layer**: Evolves high-level algorithmic structures with function placeholders via GA
- **Interior layer**: Realizes placeholders via **Monte Carlo Tree Search (MCTS)**
- **Adaptive Memory module** facilitates complex code generation

**Knowledge Augmentation (KA) Pipeline:**
- Addresses limitations of:
  - Starting LHHs from scratch
  - Starting from code templates
- Supports evaluation for complex code generation

**Performance:**
- Significantly outperforms existing LHHs
- **Reduces optimality gap by 37.84%** on aggregate in CVRP hybrid algorithm design
- Designs heuristic that **outperforms SOTA Maximum Independent Set solver KaMIS**

---

### 3. Understanding and Improving Continuous Adversarial Training

**Paper:** "Understanding and Improving Continuous Adversarial Training for LLMs via In-context Learning Theory"
**arXiv ID:** 2604.12817
**Authors:** Shaopeng Fu, et al.
**URL:** https://arxiv.org/abs/2604.12817
**Status:** ICLR 2026

**Theoretical Innovation:**
- **First theoretical analysis** of CAT on LLMs based on in-context learning (ICL) theory
- For linear transformers trained with adversarial examples from embedding space on in-context linear regression tasks:
  - Proves robust generalization bound with **negative correlation** with perturbation radius in embedding space
  - Explains why CAT defends against jailbreak prompts from LLM's token space

**Key Insight:**
- Robustness closely related to **singular values of embedding matrix**

**Proposed Improvement:**
- Additional regularization term dependent on singular values of LLM's embedding matrix
- Achieves better **jailbreak robustness-utility tradeoff**

**Code:** https://github.com/fshp971/continuous-adv-icl

---

### 4. Rethinking On-Policy Distillation (OPD)

**Paper:** "Rethinking On-Policy Distillation of Large Language Models: Phenomenology, Mechanism, and Recipe"
**arXiv ID:** 2604.13016
**Authors:** Yaxuan Li, Yuxin Zuo, Bingxiang He, et al.
**URL:** https://arxiv.org/abs/2604.13016

**Two Governing Conditions for OPD Success:**
1. Student and teacher should share **compatible thinking patterns**
2. Even with consistent thinking patterns and higher scores, teacher must offer **genuinely new capabilities** beyond what student has seen during training

**Key Findings:**
- Successful OPD characterized by **progressive alignment on high-probability tokens** at student-visited states
- Small shared token set concentrates **97-99%** of probability mass

**Practical Strategies:**
1. **Off-policy cold start**
2. **Teacher-aligned prompt selection**

**Scaling Question:**
- OPD's "free lunch" of dense token-level reward comes at cost
- Raises question: Can OPD scale to **long-horizon distillation**?

**Code:** https://github.com/thunlp/OPD

---

### 5. LIFE - Energy Efficient Continual Learning Agentic AI Framework

**Paper:** "LIFE -- an energy efficient advanced continual learning agentic AI framework for frontier systems"
**arXiv ID:** 2604.12874
**Authors:** Gurudutt Hosangadi, et al.
**URL:** https://arxiv.org/abs/2604.12874

**Framework Components:**
1. Orchestrator
2. Agentic Context Engineering
3. Novel memory system
4. Information lattice learning

**Key Innovation:**
- Implemented as **agent-centric system** rather than single monolithic model
- Combines four components for **self-evolving network management** and operations in HPCs
- Can generalize to enable variety of orthogonal use cases

**Context:**
- Addresses energy demand amplification from AI advancement
- Addresses limitations of existing rudimentary continual learning capabilities
- Reviews directions beyond monolithic transformers (agentic AI, brain-inspired architectures)

**Application Example:**
- Closed loop HPC operations for detecting/mitigating latency spikes in critical microservices on Kubernetes-like cluster

---

## 📊 Benchmark References Summary

The following benchmarks were mentioned or evaluated in the papers reviewed:

### Existing Benchmarks Used:
- **PaperBench** - ML research benchmark (arXiv:2604.13018)
- **MLE-Bench Lite** - ML evaluation benchmark (arXiv:2604.13018)
- **MT-Bench** - Multi-turn reasoning benchmark across 8 task categories (arXiv:2604.13006)
- **LongMemEval-S** - Memory benchmark, 4,575 sessions, 100 recall questions (arXiv:2604.12948)
- **MMLU** - Multi-task language understanding (arXiv:2604.12951)
- **TruthfulQA** - Truthfulness evaluation (arXiv:2604.12951)
- **ARC-Challenge** - Reasoning challenge benchmark (arXiv:2604.12951)
- **HellaSwag** - Common sense reasoning (arXiv:2604.12951)
- **WinoGrande** - Winograd schema benchmark (arXiv:2604.12951)
- **CORE** - Language model quality benchmark (arXiv:2604.12946)
- **Core-Extended** - Extended language model quality benchmark (arXiv:2604.12946)

### New/Updated Benchmarks:
- **PolicyBench** - Cross-system policy comprehension, 21K cases (arXiv:2604.12995)
- **QuarkMedSearch Benchmark** - Chinese medical deep search (arXiv:2604.12867)
- **AISafetyBenchExplorer** - Catalog of 195 AI safety benchmarks (arXiv:2604.12875)

---

## 🔗 URLs to Sources

All papers are available on arXiv:
- https://arxiv.org/abs/2604.12995 (PolicyBench)
- https://arxiv.org/abs/2604.12867 (QuarkMedSearch)
- https://arxiv.org/abs/2604.12948 (LongMemEval-S / Dual-Trace Memory)
- https://arxiv.org/abs/2604.12875 (AISafetyBenchExplorer)
- https://arxiv.org/abs/2604.12951 (Verification Tax)
- https://arxiv.org/abs/2604.13006 (Instruction-Tuned Helpfulness)
- https://arxiv.org/abs/2604.12946 (Scaling Laws for Looped LLMs)
- https://arxiv.org/abs/2604.12827 (Loop Corrections)
- https://arxiv.org/abs/2604.12928 (MoshiRAG)
- https://arxiv.org/abs/2604.13017 (PAL)
- https://arxiv.org/abs/2604.13024 (CLAD)
- https://arxiv.org/abs/2604.12891 (TCL)
- https://arxiv.org/abs/2604.12955 (Text2Model/Text2Zinc)
- https://arxiv.org/abs/2604.13018 (AiScientist)
- https://arxiv.org/abs/2604.12989 (DDTree)
- https://arxiv.org/abs/2604.12898 (BEAM)
- https://arxiv.org/abs/2604.12817 (Continuous Adversarial Training)
- https://arxiv.org/abs/2604.13016 (On-Policy Distillation)
- https://arxiv.org/abs/2604.12874 (LIFE)

---

## 📝 Conclusion

The period April 13-15, 2026 saw significant developments in:

1. **New Benchmark Releases**: PolicyBench (cross-system policy), QuarkMedSearch (medical deep search)
2. **Scaling Laws**: New scaling laws for looped architectures (Parcae), loop corrections for random feature models
3. **Multimodal Advances**: Full-duplex speech with RAG (MoshiRAG), multimodal education (PAL), compressed log anomaly detection (CLAD)
4. **Performance Evaluation**: Comprehensive safety benchmark catalog (AISafetyBenchExplorer), fundamental limits of AI auditing (Verification Tax), methodological insights on LLM-as-judge
5. **Cross-Domain**: Cross-hardware tensor optimization (TCL), optimization problem translation (Text2Model)
6. **Memory Architectures**: Dual-trace encoding for cross-session recall, File-as-Bus for long-horizon ML research

Key trends identified:
- Benchmark proliferation outpacing measurement standardization
- Growing focus on cross-domain and cross-system evaluation
- Continued innovation in efficient architectures (looped models, retrieval augmentation, memory systems)
- Increasing attention to fundamental limits and theoretical understanding of AI systems
- Emphasis on agent-centric approaches rather than monolithic models

---

**Report compiled by:** Research Subagent
**Date:** April 15, 2026
**Papers reviewed:** ~20+ from arXiv (cs.CL, cs.LG, cs.AI)
