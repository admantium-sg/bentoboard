# Findings: Task 1 — arXiv Papers (July 18-20 Batch)
**Date:** 2026-07-21
**Focus:** cs.CL/cs.AI/cs.LG — chain-of-thought, prompt engineering, efficiency

## Papers Reviewed

### 1. SWE-Pruner Pro: Internal Context Pruning for Coding Agents
**arXiv:2607.18213** — cs.CL, cs.SE | Submitted Mon, 20 Jul 2026

Key finding: agents encode internal representations of code relevance when reading tool output. SWE-Pruner Pro uses a small head turning those internal states into keep-or-prune labels per line.

Results: up to 39% prompt + completion token savings; also improves SWE-Bench Verified resolve rate by +3.8% and Oolong long-context accuracy by +2.2pp. Bounded inference overhead.

Notable: self-pruning inside the agent (not external classifier) is the differentiator.

**Novelty vs prior:** SWE-Pruner (original) used a separate code classifier; Pro moves pruning inside the agent's own representations.

---

### 2. Automated Discovery Has No Universally Superior Harness
**arXiv:2607.18235** — cs.CL, cs.AI | Submitted Mon, 20 Jul 2026

Systematic decomposition of OpenEvolve and TTT-Discover into 30 budget-matched harnesses across 12 model-problem pairs, using 3.1M+ LLM rollouts.

Core findings:
- No fixed harness is reliably superior across all model-problem pairs
- OpenEvolve variants generally underperform simpler alternatives
- Harness choice is a hyperparameter, not a universal recipe
- Early discovery progress predicts final performance → enables adaptive budget reallocation

Adaptive allocation (start multiple harnesses, prune weak partial runs, reallocate to survivors) outperforms both fixed harness and non-adaptive ensemble.

**Significance:** Practical implication — don't commit to one discovery harness; adapt based on early signals.

---

### 3. VDAR-Router: Difficulty-Aware LLM Routing
**arXiv:2607.18098** — cs.CL | Submitted Mon, 20 Jul 2026

LLM routing via explicit query difficulty analysis + retrieval of historical examples with similar difficulty profiles. Estimates model suitability from retrieved records, selects via cost-performance reward function.

Key claim: surface semantics / embedding similarity routing ignores underlying query difficulty, leading to suboptimal decisions.

Results: better cost-performance tradeoffs than surface-based routing baselines across three datasets.

**Significance:** Training-free approach to model selection efficiency; explicit difficulty analysis as routing signal.

---

### 4. Evaluating LLM Responses to Expressions of Belief (EoB)
**arXiv:2607.18232** — cs.CL | Published at ACL 2026 | Submitted Mon, 20 Jul 2026

Typology of how users express beliefs to LLMs (17 fine-grained types across 4 dimensions: form, evidentiality, epistemic stance, tone).

Evaluating 16 LLMs (Llama3, Qwen3, Gemma3; 1B–30B; base vs instruct):

Key findings:
- Bigger models and instruction-tuned models tend to be LESS context-following than smaller/base models
- Specific EoB types statistically significantly persuade LLMs more than others
- Systematic patterns in how linguistic framing affects context integration

**Prompt engineering relevance:** implications for how to phrase belief-expressions in prompts; robustness considerations.

---

### 5. Answer-Conditioned Chains of Thought Degrade Verifiable-Reasoning Distillation
**arXiv:2607.14552** — cs.CL, cs.AI | Submitted Thu, 16 Jul 2026

Standard CoT distillation recipe: sample CoT from model, keep those reaching correct answer, fine-tune on survivors. Common fix: when sampling fails, show gold answer + ask model to write a chain reaching it.

This paper shows the second step (answer-conditioning) degrades training data in a way correctness filtering cannot catch. Training on own answer-conditioned chains sharply lowers verifiable-reasoning accuracy — loss grows with difficulty, reaching ~27pp on hardest competition problems.

Mechanism: chains rationalize backward from shown answer (early final-answer statement is the measurable symptom).

Key takeaway: generate answer-blind; no correctness filter can detect this damage.

---

### 6. OS-Pruner: Optimal Stopping for CoT Pruning
**arXiv:2607.11089** — cs.AI | Submitted Mon, 13 Jul 2026

Formulates CoT pruning as optimal stopping: given a reasoning prefix, learns whether further reasoning is worth its token cost.

20–60% generation length reduction with minimal accuracy sacrifice. Lightweight during both training and inference; user-controllable accuracy-effort tradeoff.

---

### 7. Valid & Necessary CoT / CAID Metric
**arXiv:2607.11266** — cs.AI | Findings ACL 2026 | Submitted Mon, 13 Jul 2026

Identifies valid-but-inefficient CoT steps (circular reasoning, excessive decomposition) that existing step evaluators miss.

CAID (Context-Aware Information Density): training-free information-theoretic metric for identifying low-utility steps.

PACE: post-hoc compression strategy using CAID. Reduces token consumption 31–53% while maintaining accuracy on GSM8K, StrategyQA, ARC-Challenge.

---

## Duplicate Check vs. Prior Coverage (July 17 batch)
- SWE-Pruner Pro vs original SWE-Pruner: Related work, Pro is novel extension (self-pruning inside agent)
- Automated Discovery Harness: Novel — systematic decomposition study, not previously covered
- VDAR-Router: Novel — difficulty-aware routing not in prior reports
- EoB evaluation: Novel — ACL 2026 paper on belief expressions in prompts
- Answer-Conditioned CoT: Novel — answer-conditioning degradation mechanism
- OS-Pruner: Novel — optimal stopping for CoT (different from CAID/PACE)
- CAID/Valid & Necessary: Novel — different from OS-Pruner approach

## Sources
- https://arxiv.org/abs/2607.18213
- https://arxiv.org/abs/2607.18235
- https://arxiv.org/abs/2607.18098
- https://arxiv.org/abs/2607.18232
- https://arxiv.org/abs/2607.14552
- https://arxiv.org/abs/2607.11089
- https://arxiv.org/abs/2607.11266
