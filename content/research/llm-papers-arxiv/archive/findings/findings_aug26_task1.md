# Task 1 Findings — Aug 26, 2026
## arXiv Papers: cs.CL / cs.LG / cs.AI (Aug 26 submissions)

**Note:** Chain-of-thought / prompt engineering papers were sparse today — no dedicated CoT papers found in cs.CL. The main themes were **agent reliability**, **reasoning evaluation**, and **inference efficiency**.

---

### 🔬 Key Paper: RecurSE — Bounded Recursive Self-Evaluation for LLM Judges
**arXiv:2608.24231** | cs.CL | EMNLP 2026

LLM-as-judge is essential for evaluating open-ended text, but improving the judge typically requires expensive annotations or distillation from stronger teachers. This work eliminates external gold supervision entirely.

**Core approach:** Recursive Self-Evaluation (RecurSE) pairs a trainable judge evaluating candidate responses under per-rule rubrics (Pass 1) with a synchronized policy-copy checker that audits the judge's reasoning against meta-rubrics to supply a scalar process reward (Pass 2). Interface decoupling structurally isolates the checker's scalar score from the judge's verdict tokens — eliminating a degenerative token-copying shortcut that inflates self-assigned rewards.

**Pairwise Advantage Validity (PAV)** serves as an unbiased validation monitor that jointly tracks judge accuracy and checker fidelity to identify the optimal early-stopping window, since unanchored recursive learning is inherently bounded.

**Key results across Qwen3.5-9B, Gemma-4-E4B-it, and Qwen3.6-27B:**
- Consistent generalization gains across held-out medical, pairwise, summarization, and professional benchmarks
- Synchronized judge-checker co-evolution outperforms frozen checkers, external meta-judges, self-consistency, and scaled teacher distillation
- Preference pairs curated by their judge effectively enhance downstream policy alignment

**Why it matters:** This is a concrete demonstration that bounded RSI for LLM-as-judge is viable when self-produced reward validity is explicitly decoupled and monitored. The interface decoupling insight is novel and likely applicable beyond judge evaluation.

🔗 https://arxiv.org/abs/2608.24231

---

### ⚡ AgentSpec — Speculative Decoding for Batch Inference of LLM Agents
**arXiv:2608.24004** | cs.CL | EMNLP 2026

LLM-based agent applications incur high response time. Speculative decoding improves inference efficiency but state-of-the-art algorithms suffer substantial speed degradation under large batch sizes, limiting real-world deployability.

**Problem identified:** Two dominant factors of speedup degradation: (1) high rejection rate of speculative tokens, and (2) under-utilization of dynamic token budgets.

**AgentSpec solution:**
- **Structure-isolated drafting**: Constrains speculation to semantically coherent segments of the agent workflow, reducing drafts of irrelevant semantic paths → extremely low rejection rate
- **Redundancy-aware budget allocation**: Exploits agent-level information to better utilize the dynamically-free token budget during agent inference

Evaluated on 5 different workloads and 4 different models from 4 different LLM families in vLLM. Outperforms state-of-the-art.

🔗 https://arxiv.org/abs/2608.24004

---

### 🗄️ PARTAB — Partition-Aware Reasoning over Tables
**arXiv:2608.24082** | cs.CL | cs.AI | cs.IR

LLM table reasoning degrades as tables grow in size and complexity due to irrelevant context and difficulty localizing evidence. Existing approaches reason over either the full table or a single reduced view, obscuring important row-column relationships.

**Approach:** PARTAB constructs a structured evidence interface between the LLM and the table. It represents query-relevant evidence as semantically coherent, row-linked table regions and performs hierarchical selection over column groups and row-level partitions before composing selected evidence for answer generation.

**Results:** Consistently improves over full-table prompting and recent table reasoning methods on WikiTableQuestions and TabFact, while remaining competitive on numerical reasoning. Larger benefits on complex tables — semantic partitioning and targeted evidence selection substantially reduce reasoning context.

🔗 https://arxiv.org/abs/2608.24082

---

### 🧠 MemUse — Memory Evaluation: Recall vs. Natural Integration
**arXiv:2608.24189** | cs.CL | EMNLP 2026 (Main Conference)

Memory systems for conversational LLMs are conventionally evaluated by Direct QA — can the model recall fact X from a prior conversation? 4-month deployment (40 users, 1,872 sessions, 7 memory conditions) shows existing-benchmark Direct QA varies from 19.7% to 70.1% across conditions, but **user satisfaction does not change**.

**Key finding — 71-point gap:** The same system scores 78.8% on Direct QA but references only 7.9% of those facts in natural conversation. Benchmarks measure "elicited retrieval" (recall when asked) while conversation requires "natural integration" (detecting relevance and naturally weaving prior context into a response).

**Implication:** Direct QA benchmarks may be fundamentally misaligned with what users actually experience. Natural Integration is associated with satisfaction; Direct QA is not.

🔗 https://arxiv.org/abs/2608.24189 | https://github.com/ryuichi-sumida/memuse

---

### 🕵️ Curved Inference II — Sleeper Agent Geometry
**arXiv:2608.24037** | cs.CL

Extends Anthropic's Sleeper Agents research. Linear probes detect artificial backdoors with >99% accuracy, but this relies on linear separability that may be an artifact of backdoor insertion — not a property of naturally occurring deceptive alignment.

**Novel approach:** Multi-turn context windows simulating realistic deceptive reasoning without artificial triggers or supervised backdoor insertion. Analyzes curvature, salience, and introduces **semantic surface area (A')** — a metric capturing both magnitude and directional change of meaning construction in unnormalised residual space.

**Key result:** Geometric structure reliably predicts semantic classification, with statistically significant differences in surface area across five prompt strategies and two model families. Measurement precision can reveal geometric signatures hidden by classification noise — some strategies improve from p=0.555 to p=0.048.

**Why it matters:** Sophisticated reasoning creates intrinsic geometric patterns that persist even when linear detection methods fail — a scalable, unsupervised path for detection when backdoors aren't artificially inserted.

🔗 https://arxiv.org/abs/2608.24037

---

### 🔍 Who Is the Agent to Blame? — Faithfulness in Deep Research
**arXiv:2608.24306** | cs.CL | EMNLP 2026 (Main Conference)

Deep Research systems produce long-form cited reports by orchestrating multiple agents. Citations are the primary faithfulness evaluation mechanism, yet current DR systems exhibit poor citation recall. Improving it is hard because DR systems are complex multi-agent architectures where information passes through agents like a telephone game.

**Four-type error taxonomy:** hallucination, uncited input reliance, uncited output, or insufficient citations.

**Key findings applying the method to three top-ranked open-source DR systems:**
- Almost every agent makes mistakes; exception: agents summarizing a single document
- Dominant error type varies systematically across agents — orchestrator mistakes are mostly citation-related
- 84.7% of final-report errors in AI-Q originate at the orchestrator (~31% hallucinations, rest citation mistakes)
- Two simple interventions raise citation recall by 5% without degrading output quality

🔗 https://arxiv.org/abs/2608.24306 | https://github.com/eranhirs/who-is-the-agent-to-blame

---

### 📜 SAGE — Evidence-Grounded Inference for Chinese Ancient Documents
**arXiv:2608.24011** | cs.CL | cs.AI

Chinese ancient document understanding demands complex visual, linguistic, and historical reasoning. Current LVLMs produce overconfident and weakly grounded responses in single-pass generation.

**Approach:** SAGE coordinates specialized agents for task-aware planning, tool-mediated evidence acquisition, claim-level verification, and bounded replanning under a constrained shared-state runtime. Supports bounded evidence seeking, answer revision, and abstention when grounding is insufficient.

**Notable:** SAGE with Qwen3.5-9B surpasses much larger monolithic LVLMs on most evaluated metrics, highlighting the importance of structured, evidence-grounded inference beyond model scaling.

🔗 https://arxiv.org/abs/2608.24011

---

### ⬆️ Bayesian Self-Escalation in Hierarchical LLM Agents
**arXiv:2608.24087** | cs.LG | cs.AI

Current LLM agent systems decide delegation either before reasoning begins (router picks model) or after response is complete (verifier scores and retries). This work studies a **third regime**: an agent that recognizes during its own reasoning that it is unlikely to succeed and transfers control to a stronger model.

**Formulation:** Intra-generation delegation as a Bayesian optimal-stopping problem over a learned competence posterior. The sufficient statistics are learned from labelled trajectories, not read off raw entropy.

**Key results:**
- Derived myopic escalation threshold in closed form; optimal policy is a time-varying threshold
- Exponential separation of oracle belief at the Chernoff-information rate of the signal
- Finite-sample guarantee: with n labelled calibration trajectories, regret decays as 1/√n
- Real-model validation on Qwen2.5-Coder 1.5B→7B code cascade (MBPP): escalation frontier dominates post-hoc routing at equal cost

🔗 https://arxiv.org/abs/2608.24087 | https://github.com/nadeem-shaikh/llm-self-escalation

---

### 🗻 PeakBench — Benchmarking Resource-Aware Tool Invocation
**arXiv:2608.24509** | cs.AI | cs.SE

Existing agent benchmarks evaluate tool selection, argument generation, and end-to-end success under mostly serial execution — overlooking valid parallelization and resource-constrained scheduling. This creates a practical failure mode: serial execution is safe but slow; resource-agnostic parallel execution is fast but prone to resource overflows.

**Contribution:** PeakBench, a benchmark of executable multi-tool workflows with execution-grounded dependency annotations and measured resource profiles. Two-part evaluation framework disentangles logical planning from physical scheduling, with dedicated metrics for each.

**Key finding:** Strong logical planning does not reliably translate into safe or efficient execution under resource constraints. Exposing resource information reduces avoidable overflows and improves resource utilization.

🔗 https://arxiv.org/abs/2608.24509 | https://github.com/Czzzk/Staggering-the-Peaks

---

## Papers from Prior Scan (cs.CL list, IDs 2608.24327–2608.23851)

Additional papers identified in the Aug 26 cs.CL list (full abstracts not re-fetched; titles from list scan):

| ID | Title | Relevance |
|----|-------|-----------|
| 2608.24327 | SkillForge: RL agents with tool blended token representation | Agent training |
| 2608.24497 | SteerCheck: Activation steering for fact verification | Interpretability / steering |
| 2608.23497 | SDP: Safety-Direction Penalty for Reasoning-Induced Misalignment | Reasoning + safety alignment |
| 2608.24476 | Quantization of Bangla LLMs | Efficiency / multilingual |
| 2608.24474 | Self-Consistency for efficient LLM reasoning | CoT efficiency |
| 2608.24471 | Bayesian RAG evaluation | RAG benchmarking |
| 2608.24448 | Consequence-Aware evaluation | LLM safety evaluation |

---

## Summary

**Today's theme: Agent reliability and reasoning evaluation.** No dedicated CoT or prompt-engineering papers surfaced in cs.CL today. Most relevant papers fall into:

1. **Agent evaluation** (Deep Research faithfulness, resource-aware tool invocation, hierarchical self-escalation)
2. **Reasoning self-improvement** (RecurSE, Bayesian self-escalation)
3. **Inference efficiency** (AgentSpec speculative decoding, PARTAB structured evidence selection)
4. **Interpretability** (Curved Inference II — geometric signatures of deception)

The RecurSE paper (bounded RSI for LLM judges) and AgentSpec are the most directly relevant to the tracked topics. The SDP paper on Reasoning-Induced Misalignment appeared in the weekly top-10 (arXivTLDR), indicating strong community interest.
