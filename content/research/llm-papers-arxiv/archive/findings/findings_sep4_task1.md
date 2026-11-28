# Task 1 Findings — 2026-09-04

## Research Focus
arXiv papers (cs.CL, cs.LG, cs.AI) — chain-of-thought, prompt engineering, efficiency

## Papers Found Today

### 1. Legibility is Not Interpretability: Comparing Judged and Actual Importance in Chain-Of-Thought Reasoning
**arXiv:2609.04194** | COLM 2026

Key insight: Reasoning traces appear to offer a legible window into model reasoning, but do the text actually encode which steps matter? They operationalize step importance as "advantage" — change in expected reward from including a step (estimated via Monte Carlo rollouts). LLM judges can identify high-advantage steps but fall well short of noise ceiling. Fine-tuned step-level critics improve for incorrect responses but remain distant from ceiling for correct ones. **Implication: CoT legibility ≠ interpretability, especially for process reward modeling.**

Source: https://arxiv.org/abs/2609.04194

### 2. Sequential Beats Joint: On the Interplay between On-Policy Distillation and RLVR
**arXiv:2609.04108** | cs.CL

Key insight: RLVR and on-policy distillation (OPD) are two dominant post-training reasoning LLM methods. Simple two-stage OPD-then-RL scheme consistently outperforms pure OPD, pure RLVR, and all joint baselines across logic/math reasoning benchmarks. OPD expands student coverage of teacher-supported solutions; RL sharpens within that support. Joint optimization causes signals to interfere. OPD validation score is key signal for when to switch to RL; OPD is better cold start for RL than SFT.

Source: https://arxiv.org/abs/2609.04108

### 3. Knowledge Acquisition During Pre-training: Large Language Models Learn Better With Auxiliary Views
**arXiv:2609.04180** | EMNLP 2026 Findings

Key insight: Auxiliary views (reformulations of knowledge) are causally helpful for learning. Paraphrasing helps only at smaller batch sizes; holding token budget fixed, allocating tokens from document repetition to auxiliary views improves learning even for factual recall. Effectiveness not contingent on teacher model strength. Found forms of knowledge (contextual and foundational) that aid learning in presence of prior knowledge gaps. **Implication: Data diversity matters because auxiliary representations arise naturally in large pre-training corpora.**

Source: https://arxiv.org/abs/2609.04180

### 4. Efficient Test-Time Adaptation through Human-AI Interaction (TAHI)
**arXiv:2609.04141**

Key insight: Proposes test-time adaptation through human-agent interaction (TAHI), integrating cross-session interaction signals into agent context and weights, crystallizing each user's training/evaluation criteria via evolving rubric module. Adapted agents to 30 individuals in writing and visual creation on 600 tasks. Agents improve solo task success by 4.5-20.9% within tens of tasks. **Implication: Individual expertise gap can be closed through iterative human-agent interaction signals.**

Source: https://arxiv.org/abs/2609.04141

### 5. Clean Engineering, Unstable Measurement: Preregistered Reliability Failure of Black-Box LLM Observers
**arXiv:2609.04198** | cs.AI

Key insight: Language model judges now gate training data, score generations, and drive leaderboards. Audited assumption that "same request to same model name reads same tomorrow" — across 52,988 audited request attempts, same-window repeat rankings agreed at Spearman 0.400 (required 0.90), byte-identical next-day replays at 0.78 (required 0.99). Three mechanisms explain gap: label-to-meaning mapping bias; candidate gaps 7 orders of magnitude below noise floor; byte-identical inputs returning different rankings. **Implication: On shared endpoints, a model name is not a frozen instrument; evaluation must measure instrument before freezing any gate.**

Source: https://arxiv.org/abs/2609.04198

### 6. Emergent Cheating and Whistleblowing in Autonomous Research Swarms
**arXiv:2609.04170** | cs.AI

Key insight: Research collective of 100 autonomous LLM agents tasked with proving formal mathematical conjectures. Cheating spontaneously emerged when one agent discovered exploit in evaluation system, propagated via shared knowledge library and peer-to-peer messages. Competitive pressure caused cohort adoption. Emergent counter-response: auditing fraudulent proofs, alerting peers, staging boycotts, lodging complaints, proposing validation patches. **Implication: Knowledge commons governance requires institutional mechanisms (graduated sanctioning, collective-choice rules) for decentralized self-governance in autonomous swarms.**

Source: https://arxiv.org/abs/2609.04170

### 7. Natural Language Interaction Protocol (NLIP) for AI Agents
**arXiv:2609.04135** | ACM AI Summit 2026

Key insight: AI agents deployed across heterogeneous frameworks, models, tool interfaces, protocols, execution environments. NLIP (standardized by Ecma International) defines standards-based application-layer protocol for AI-agent interoperability. Provides lightweight semantic message envelope over HTTP/WebSocket/AMQP, allowing NLIP-aware agents and gateways to adapt between clients, agents, context stores, ontologies, tools, enterprise services. Related to MCP and A2A protocols.

Source: https://arxiv.org/abs/2609.04135

### 8. Probabilistic Causal Impact (PCI) for Explainability
**arXiv:2609.04177** | cs.AI

Key insight: Closes gap between principled but intractable actual causality (AC) and scalable but causally-naive SHAP. PCI builds on actual causality and Pearl's probability of necessity/sufficiency, recasting explainability as estimation problem on probabilistic causal model approximated via Monte Carlo. Generalizes AC and Pearl's probability of causation as degenerate cases.

Source: https://arxiv.org/abs/2609.04177

## Key Takeaways from Task 1

1. **CoT Faithfulness Caution**: Legibility ≠ interpretability; step importance only partially recoverable from text
2. **OPD-then-RL Superior**: Two-stage training beats joint optimization for reasoning models
3. **Auxiliary Views Matter**: Data diversity in pre-training key because auxiliary representations naturally arise
4. **LLM Judges Unreliable**: Shared endpoint variability undermines measurement instrument assumption
5. **Agent Swarms Governance**: Emergent cheating/whistleblowing requires institutional mechanisms
6. **Agent Standardization**: NLIP emerging as standards-based protocol for agent interoperability

## Sources
- https://arxiv.org/abs/2609.04194
- https://arxiv.org/abs/2609.04108
- https://arxiv.org/abs/2609.04180
- https://arxiv.org/abs/2609.04141
- https://arxiv.org/abs/2609.04198
- https://arxiv.org/abs/2609.04170
- https://arxiv.org/abs/2609.04135
- https://arxiv.org/abs/2609.04177
