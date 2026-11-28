# Findings - October 4, 2026 (Task 1: arXiv Papers)

## Sources
- https://arxiv.org/abs/2610.02206 (KaliBench)
- https://arxiv.org/abs/2610.02193 (HC-DLM)
- https://arxiv.org/abs/2610.02163 (AutoCompact)
- https://arxiv.org/abs/2610.02092 (TESS)
- https://arxiv.org/abs/2610.02150 (SourceLearn)
- https://arxiv.org/abs/2610.02142 (Keyword Harnesses)
- https://arxiv.org/abs/2610.01493 (Text Entropy Filtering)
- https://arxiv.org/abs/2610.01471 (Cross-Model Review)
- https://arxiv.org/abs/2610.01592 (Online LLM Picker)

## Key Findings

### KaliBench: Cybersecurity CLI Tool Use — No Open-Weight Model Exceeds 42%
**arXiv:2610.02206** (Oct 1, 2026) — cs.CL, cs.AI, cs.CR | NeurIPS 2026

- 8,504 query-command pairs, 1,642 tools across 23 capability dimensions, 5 security phases
- Multi-stage verification: LLM validation + sandboxed terminal execution + human-in-the-loop refinement
- No open-weight model exceeds 42% exact-command accuracy without explicit tool hints
- RL with verifiable rewards from KaliBench significantly improves an 8B model to comparable with a 685B MoE model
- Key insight: cybersecurity CLI translation requires deterministic accuracy — benchmark quality signals for tool-use generalization remain inadequate for operational deployment
- Paper: https://arxiv.org/abs/2610.02206

### HC-DLM: Hierarchical Continuous Diffusion Language Models
**arXiv:2610.02193** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG

- Discrete diffusion: each token sampled independently from marginal — severs statistical dependencies
- Continuous diffusion avoids this but nothing ties latent to valid token config until final decode
- HC-DLM: tokens read from latent at every step, feed back as scaffold for next latent update
- On Sudoku, Countdown, LM1B: improves over discrete and continuous diffusion baselines
- Key insight: coupling discrete token generation with continuous latent trajectory enables principled bidirectional reasoning with global constraint satisfaction
- Paper: https://arxiv.org/abs/2610.02193

### AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents
**arXiv:2610.02163** (Oct 1, 2026) — cs.CL

- SWE-bench Verified: +9.2% absolute pass rate; SWE-PolyBench Verified: +5.0%
- Judge reviews compaction decisions, summaries, and actions after compaction — flawed outputs replaced before execution
- 256K context window never overflows; 16K window with overflow triggers fallback compaction
- Improvements hold across all evaluated inference budgets
- Key insight: learning when to compact is as important as how — training compaction decisions as part of the policy outperforms fixed heuristics
- Paper: https://arxiv.org/abs/2610.02163

### TESS: Transferable Example Scoring and Selection for Data Selection
**arXiv:2610.02092** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG

- Meta-learning for training-data selection faces trade-off between fine-grained valuation and transferability
- Directly incorporating selection network into MTS objectives leads to unstable optimization
- Causes: weight suppression and persistent reliance on easy-to-learn features
- TESS: Pointwise Value Matching (PVM) objective solves these issues
- Key insight: the obvious solution (adding a selection network) fails due to optimization dynamics — PVM objective is the fix
- Paper: https://arxiv.org/abs/2610.02092

### SourceLearn: Source-Specific Competence via Persistent Source Models
**arXiv:2610.02150** (Oct 1, 2026) — cs.CL, cs.AI, cs.LG

- Source learning: developing reusable source-specific competence over persistent authoritative sources
- Self-Directed Source Learning: identifies what remains incompletely understood, adaptively revisits source
- Task-Guided Source Learning: uses downstream experience to reveal local representational gaps
- 13 of 15 settings best; gains up to 22.6 points over Hybrid RAG
- Key insight: repeated source use should be opportunity for progressive understanding, not repeated access
- Paper: https://arxiv.org/abs/2610.02150

### Keyword Harnesses Fail Open: Diagnostic Ladder for Tool-Use Claims
**arXiv:2610.02142** (Oct 1, 2026) — cs.CL

- 661.6M model and 1,109M model score almost identically on lenient tool-use metrics (B4: 0.660 vs 0.650)
- Verbatim-reproduction checks separate them completely: 600M emits valid tool calls on 6/6 examples, 1B on 0/6
- First-token probe: 1B failure traced to missing prior on <|tool_call|> token — erased by web-heavy training
- Targeted SFT recipe repairs 1B in ~3.3 GPU-hours using 3 orders of magnitude fewer tokens than failed phase
- Valid emission rises from 0.100 to 0.959 on 269 corpus rows
- Key insight: keyword-matching benchmarks credit tool use models never perform — cheap diagnostic ladder should gate all tool-use claims on small models
- Paper: https://arxiv.org/abs/2610.02142

### Text Entropy Rate Filtering Mitigates Iterative Fine-Tuning Collapse
**arXiv:2610.01493** (Oct 1, 2026) — cs.CL, cs.AI, cs.IT | NeurIPS 2026

- Model collapse: output diversity narrows as rare patterns progressively lost
- Existing mitigations require model log-probabilities, external oracle, or real human data
- Non-parametric Kontoyiannis entropy rate estimator h_k: computed entirely from raw text, no model required
- In 6-generation QLoRA collapse experiment on Llama-3.1-8B: logprob-based filtering provides no significant benefit (p > 0.23), h_k-filtering yields +42% unique trigrams, +30% vocabulary, -19% repetition (all p < 0.001)
- Key insight: information-theoretic approach to collapse mitigation is both superior and requires no model access
- Paper: https://arxiv.org/abs/2610.01493

### Cross-Model Review: When Does a Second Model Help LLM Verification?
**arXiv:2610.01471** (Oct 1, 2026) — cs.CL, cs.AI, cs.SE

- 30 artifacts, 150 planted errors, 10 review conditions, 900 review sessions
- Cross-model reviewer finds partly different errors from same-model review (Jaccard 41.2%)
- One CCR plus one cross-model review matches more errors than two CCR reviews (56.7% vs 42.7%, Holm-adjusted p=.006)
- Lightweight cross-model reviewer scores no higher than same-model review
- Key insight: model independence helps but reviewer capability dominates — difference in model matters less than difference in skill
- Paper: https://arxiv.org/abs/2610.01471

### Online LLM Picker: Active Model Selection for Streaming Data
**arXiv:2610.01592** (Oct 1, 2026) — cs.CL, cs.LG

- Practitioners rely on benchmarks that only approximate real performance
- ONLINE LLM PICKER: selects most informative prompts for annotation to identify best LLM
- Saves annotation cost by up to 71.67% while reliably identifying best or near-best model
- Reduces regret by up to 2.51x for sequential generation on unannotated prompts
- Key insight: streaming settings require dynamic model selection — static benchmark rankings are insufficient
- Paper: https://arxiv.org/abs/2610.01592
