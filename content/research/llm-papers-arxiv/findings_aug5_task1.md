# Task 1 Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — August 4, 2026
**Research Date:** August 5, 2026
**Focus:** Chain-of-thought, prompt engineering, reasoning, efficiency

## Papers Researched

### 1. TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning
**arXiv:2608.04007** (August 4, 2026) — cs.CL, cs.AI

**Summary:** Tool-Integrated Reasoning (TIR) enables LLMs to solve complex tasks through iterative tool interactions. Existing RL methods rely on trajectory-level supervision, limiting fine-grained credit assignment in long-horizon TIR. TurnSight proposes turn-level hindsight self-distillation — derives supervision directly from execution-conditioned hindsight, constructs multiple hindsight views with different lookahead horizons, and selects reliable supervision through cross-horizon directional agreement. The selected hindsight signal is normalized across sibling rollouts and used to adaptively modulate RL advantages while preserving their original optimization direction.

**Key findings:**
- Turn-level structure of tool interactions is not captured by token-level supervision
- Execution-conditioned hindsight reflects states actually visited by the agent (not ground-truth-dependent)
- Cross-horizon directional agreement filters reliable supervision signals
- Extends RL with finer-grained credit assignment at the turn level

**Source:** https://arxiv.org/abs/2608.04007

---

### 2. PAST-Bench: Benchmarking Recursive Self-Improvement in Personal Agents
**arXiv:2608.04003** (August 4, 2026) — cs.CL

**Summary:** PAST-Bench isolates the question of whether retained experience actually improves agents over time. Each agent runs ordered sequences of fresh-session tasks under matched conditions that turn retained experience on/off. Spans 26 scenarios and 204 episodes across memory, procedural reuse, information gathering, and update. Across seven base models and four agent frameworks, improvement is real but uneven. Hermes+ (five targeted interventions) raises average gain from retained experience, strongest on tasks requiring outdated state replacement.

**Key findings:**
- Improvement from retained experience is real but capability-dependent
- Same headline gain can have very different pathway evidence
- Agents struggle most with outdated state replacement
- Fine-grained pathway tracking is essential for understanding self-improvement

**Source:** https://arxiv.org/abs/2608.04003

---

### 3. When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings
**arXiv:2608.03994** (August 4, 2026) — cs.CL

**Summary:** ALiBi's linear bias scaling underflows floating-point precision, zeroing out a large fraction of attention weights and rendering affected attention heads partially blind. The failure mode substantially impairs token retrieval while having only minor effect on standard decoder benchmarks. Four training-time mitigation strategies proposed; log-scaled distances yield most consistent improvements. Default ALiBi remains strong baseline for needle-in-a-haystack retrieval.

**Key findings:**
- ALiBi underflow affects state-of-the-art pretrained models
- Token retrieval substantially impaired; standard benchmarks barely affected
- Log-scaled distance mitigation is most effective
- The issue is hidden by standard benchmark saturation

**Source:** https://arxiv.org/abs/2608.03994

---

### 4. Logic Before Language: Pre-pretraining on Formal Derivations
**arXiv:2608.03930** (August 4, 2026) — cs.CL, cs.AI, cs.LG

**Summary:** Logic pre-pretraining (Logic-PPT) leverages formal derivations to impart structural and linguistic biases. Formal derivations bind variables, connect quantifiers and relational dependencies, and compose predicate-argument structures over long contexts. At 100B-token regime, achieves 80% accuracy on linguistic tasks with 36B fewer tokens than standard initialization. Induces lower-rank, spectrally concentrated representation space enabling improved compressibility — matches dense baseline at ~33% sparsity.

**Key findings:**
- Formal derivations provide richer initialization bias than Dyck or procedural algorithms
- 36B token savings for 80% linguistic task accuracy
- Representation geometry enables pruning to 33% sparsity without performance loss
- Structural reorganization is persistent through training

**Source:** https://arxiv.org/abs/2608.03930

---

### 5. Right Answer, Wrong Method: Shortcut Hacking in Science Benchmarks
**arXiv:2608.02442** (August 3, 2026) — cs.AI, cs.CL

**Summary:** Solution Hacking: LLMs reach correct answers through invalid shortcuts (numerical search, enumeration, guessing, answer-first verification) without valid task-targeted derivation. Hacking increases with benchmark difficulty: 2.2% on common problems → 28.3% on Olympiad-level → 37.4% on HLE. 8.2%-44.1% of credited correct answers across frontier models are hacked solutions. Anti-hacking strategies (automatic judge, test-time instruction) suppress shortcut behavior and reduce reported accuracy while having smaller effect on non-hacked accuracy.

**Key findings:**
- Final-answer accuracy is insufficient for reasoning capability evaluation
- Shortcut behavior scales with problem difficulty
- HLE (hardest) has 37.4% hacked solutions — frontier models significantly overestimate true reasoning
- Anti-hacking evaluation is essential for honest capability assessment

**Source:** https://arxiv.org/abs/2608.02442

---

## Sources
- https://arxiv.org/abs/2608.04007
- https://arxiv.org/abs/2608.04003
- https://arxiv.org/abs/2608.03994
- https://arxiv.org/abs/2608.03930
- https://arxiv.org/abs/2608.02442
