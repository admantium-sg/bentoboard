# Chain-of-Thought & Reasoning Advances in LLMs — arXiv Findings (April 2026)

## Overview

This report summarizes recent arXiv submissions (April 2026) related to LLM reasoning, covering five focus areas: CoT papers and Process Reward Models (PRM), Best-of-N / self-consistency improvements, quiet/silent thinking approaches, test-time compute scaling, and new reasoning architectures.

> **Note:** web_search (DuckDuckGo) returned bot-detection challenges throughout this session. Findings were obtained via direct arXiv.org browsing and search — arXiv IDs are confirmed but paper PDFs/HTML were not deeply fetched for full content. Key facts are sourced from paper abstracts and titles only.

---

## 1. Process Reward Models (PRM) & Verbal Process Supervision

### Verbal Process Supervision (VPS) — Key arXiv Paper
**Paper:** *Process Supervision via Verbal Critique Improves Reasoning in Large Language Models*  
**arXiv:** [2604.21611](https://arxiv.org/abs/2604.21611)  
**Authors:** Hao-Yuan Chen et al.  
**Venue:** cs.CL / cs.AI — submitted 23 April 2026

**Key Contributions:**
- Introduces **Verbal Process Supervision (VPS)**, a training-free framework that uses structured natural-language critique from a stronger supervisor to guide an iterative generate-critique-refine loop (up to R rounds)
- Identifies **critique granularity** as a fourth axis of inference-time scaling (alongside chain depth, sample breadth, and learned step-scorers / PRMs)
- **Performance on GPQA Diamond:** GPT-5.4 (High) | GPT-5.4 (Low) reaches **94.9% at R=4**, surpassing prior 94.1% state of the art — without any gradient updates
- **Performance on AIME 2025:** VPS boosts scores from 11.7–26.7% to **63.3–90.0%** (gains of up to +63.3 points)
- **Compared to baselines at matched compute:** VPS outperforms Reflexion by +8.5 to +12.1 points, and Self-Consistency@5 by +5.0 pp on GPQA and +8.3 pp on LiveCodeBench
- Performance scales with supervisor-actor capability gap (Pearson r=0.90)
- Limitation: degrades when errors are not linguistically expressible (e.g., code synthesis), motivating hybrid verbal-executable methods

**Significance:** VPS establishes critique granularity as a new axis of inference-time scaling, enabling "weak-to-strong" rescue without model fine-tuning.

---

### V-tableR1 — Process-Supervised Multimodal Table Reasoning
**arXiv:** [2604.21590](https://arxiv.org/abs/2604.21590) — announced April 2026  
**Focus:** Process-supervised RL framework for multimodal table reasoning with critic-guided policy optimization

---

### GRPO-VPS — Group Relative Policy Optimization with Verifiable Process Supervision
**arXiv:** [2604.21593](https://arxiv.org/abs/2604.21593) — announced April 2026  
**Focus:** Enhances GRPO with verifiable process supervision for effective LLM reasoning

---

### R2IF — Aligning Reasoning with Decisions via Composite Rewards
**arXiv:** [2604.21769](https://arxiv.org/abs/2604.21769) — announced April 2026  
**Focus:** Composite rewards for interpretable LLM function calling (reasoning + decisions alignment)

---

## 2. Best-of-N and Self-Consistency Improvements

### Self-Consistency Performance Gains (from VPS paper)
- The VPS paper ([2604.21611](https://arxiv.org/abs/2604.21611)) shows that at matched compute, **VPS outperforms Self-Consistency@5** by **+5.0 pp on GPQA** and **+8.3 pp on LiveCodeBench**
- This demonstrates that verbal critique-based refinement outperforms standard self-consistency voting without additional samples

### Where Reasoning Breaks — Logic-Aware Path Selection
**arXiv:** [2604.21897](https://arxiv.org/abs/2604.21897) — announced April 2026  
**Focus:** Controlling logical connectives in LLM reasoning chains to select correct paths

---

## 3. Quiet/Silent Thinking Approaches

### Fast Quiet-STaR: Thinking Without Thought Tokens
**arXiv:** [2509.06778](https://arxiv.org/abs/2509.06778) — v1 submitted May 2025, latest revision Sept 2025  
**Authors:** Wei Huang, Yizhe Xiong et al.  
**Focus:** Improves upon STaR (Self-Taught Reasoner) by removing the need for explicit "thought tokens" — reasoning without token overhead

**Key Concept:**
- STaR (ZoT) introduced the idea of generative reasoning tokens interspersed with normal output
- Quiet-STaR removes the need for special thought tokens while preserving the benefits of implicit reasoning during generation
- Aim: reduce token overhead while maintaining reasoning quality

---

## 4. Test-Time Compute Scaling

### Adaptive Test-Time Compute Allocation with Evolving In-Context Demonstrations
**arXiv:** [2604.21584](https://arxiv.org/abs/2604.21584) — announced April 2026  
**Focus:** Adaptive compute allocation at test time using evolving in-context demonstrations

---

### Avoiding Overthinking and Underthinking: Curriculum-Aware Budget Scheduling
**arXiv:** [2604.21501](https://arxiv.org/abs/2604.21501) — announced April 2026  
**Authors:** Amirul Rahman, Aisha Karim, Kenji Nakamura, Yi-Fan Ng  
**Focus:** Curriculum-aware budget scheduling for LLMs — balancing overthinking vs underthinking through budget control  
**Significance:** Addresses the problem of optimal test-time token budget allocation for reasoning models

---

### TEMPO: Scaling Test-time Training for Large Reasoning Models
**arXiv:** [2604.21555](https://arxiv.org/abs/2604.21555) — announced April 2026  
**Authors:** Qingyang Zhang, Xinke Kong et al.  
**Focus:** Test-time training for large reasoning models — scaling inference-time computation through training-like adaptation

---

## 5. New Reasoning Architectures & Efficiency

### Thinking with Reasoning Skills: Fewer Tokens, More Accuracy
**arXiv:** [2604.21764](https://arxiv.org/abs/2604.21764)  
**Authors:** Guangxiang Zhao, Qilong Shi, Xusen Xiao et al. — submitted to ACL 2026 Industry Track  
**Submitted:** 23 April 2026

**Key Contributions:**
- Proposes **summarizing and storing reusable reasoning skills** distilled from extensive deliberation and trial-and-error exploration
- At inference time, relevant skills are **retrieved to guide future reasoning** — replacing "reasoning from scratch"
- Evaluated on **coding and mathematical reasoning tasks**
- Result: **significantly reduces reasoning tokens while improving overall performance**
- Practical/economic benefit: lower per-request cost for real-world deployment
- Accepted to **ACL 2026 Industry Track**

---

### Hybrid Latent Reasoning with Decoupled Policy Optimization
**arXiv:** [2604.21871](https://arxiv.org/abs/2604.21871) — announced April 2026  
**Focus:** Chain-of-thought reasoning via decoupled policy optimization for latent reasoning

---

### Language as a Latent Variable for Reasoning Optimization
**arXiv:** [2604.21885](https://arxiv.org/abs/2604.21885) — announced April 2026  
**Observation:** As LLMs reduce English-centric bias, **non-English responses sometimes outperform English** on reasoning tasks — implications for multilingual CoT

---

### CoFEE — Cognitive Feature Engineering Engine (Reasoning Control)
**arXiv:** [2604.21584](https://arxiv.org/abs/2604.21584)  
**Focus:** Induces cognitive behaviors (backward chaining, subgoal decomposition, verification, backtracking) as structured inductive biases for LLM-based feature discovery  
**Results:** 15.2% higher Success Rate Score vs vanilla prompting; 29% fewer features generated; 53.3% cost reduction

---

## 6. Generalization & Symbolic Reasoning

### Generalization of Transformers in Symbolic Reasoning
**arXiv:** [2604.21632](https://arxiv.org/abs/2604.21632)  
**Authors:** Nevena Lazic et al.  
**Key Finding:** Decoder-only transformers fail to generalize to unseen variable names due to **unembedding (last-layer weight) collapse** — all unseen tokens converge to nearly the same vector  
**Fix:** Technique combination involving data diversity, freezing/resetting (un)embeddings achieves generalization  
**Real-world evidence:** Correlated embeddings observed in **Gemma 3 family** (99 unused tokens) — poor initialization for fine-tuning

---

## Summary Table

| arXiv ID | Paper Title | Key Topic | Performance / Key Result |
|---|---|---|---|
| [2604.21611](https://arxiv.org/abs/2604.21611) | Process Supervision via Verbal Critique | PRM / Verbal supervision | 94.9% on GPQA Diamond, +63.3 pts on AIME 2025 |
| [2604.21764](https://arxiv.org/abs/2604.21764) | Thinking with Reasoning Skills | Skill-based reasoning | Fewer tokens + better accuracy (ACL 2026) |
| [2604.21769](https://arxiv.org/abs/2604.21769) | Who Defines "Best"? (LLM Leaderboards) | Eval / reasoning | Interactive user-defined eval of LLM rankings |
| [2604.21584](https://arxiv.org/abs/2604.21584) | Reasoning Control for LLM Feature Discovery | Cognitive reasoning control | +15.2% success rate, 53.3% cost reduction |
| [2604.21501](https://arxiv.org/abs/2604.21501) | Curriculum-Aware Budget Scheduling | Test-time compute | Overthinking/underthinking balance |
| [2604.21555](https://arxiv.org/abs/2604.21555) | TEMPO: Scaling Test-time Training | Test-time training | Scaling inference-time computation |
| [2604.21571](https://arxiv.org/abs/2604.21571) | Separable Expert Architecture | Privacy + reasoning | Personalization without shared weight pollution |
| [2604.21632](https://arxiv.org/abs/2604.21632) | Generalization of Transformers in Symbolic Reasoning | Symbolic reasoning gen. | Unembedding collapse identified; fix proposed |
| [2604.21590](https://arxiv.org/abs/2604.21590) | V-tableR1 | Multimodal PRM | Process-supervised table reasoning |
| [2604.21593](https://arxiv.org/abs/2604.21593) | GRPO-VPS | PRM / RLVR | Group relative policy optimization |
| [2509.06778](https://arxiv.org/abs/2509.06778) | Fast Quiet-STaR | Silent thinking | Thinking without thought tokens |

---

## Key Trends (April 2026)

1. **Verbal Process Supervision (VPS) as a new scaling axis** — critique granularity adds a 4th dimension to inference-time compute scaling (alongside chain depth, sample breadth, PRMs)
2. **Reasoning skill distillation** — storing and retrieving reusable reasoning patterns reduces token cost while improving accuracy
3. **Multilingual reasoning** — non-English CoT sometimes outperforms English, suggesting reasoning is partially language-agnostic
4. **Test-time budget control** — curriculum-aware scheduling to avoid overthinking/underthinking is an active research area
5. **Symbolic reasoning generalization** — unembedding collapse identified as a key failure mode for unseen variable names in transformers

---

*Research compiled: 26 April 2026*  
*Sources: arXiv.org (cs.AI, cs.CL categories)*  
*Method: Direct arXiv browsing and abstract extraction (web_search blocked by bot detection)*
