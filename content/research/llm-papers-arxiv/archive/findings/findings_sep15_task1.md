# Research Findings — September 15, 2026 (Task 1)

## Sep 14 arXiv Submissions — Chain-of-Thought, Reasoning, Prompt Engineering, Efficiency

### Disentangling Representation Evolution in Transformers (EMNLP 2026)
**arXiv:2609.15975** (Sep 14, 2026) — cs.CL, cs.LG, EMNLP 2026
- Decomposes transformer representation updates into parallel and perpendicular components relative to hidden state direction
- Key finding: substantial parallel components exist beyond the residual identity path across pretrained models
- Exclude-self value-space parallel manipulation is markedly more robust than residual-space/perpendicular alternatives — preserves direct self-message while scaling only non-self aggregate
- Perpendicular error separates compression methods more clearly than parallel error — useful diagnostic
- Full-aggregate parallel suppression during from-scratch pretraining lowers validation-loss trajectories and improves downstream averages (value-space variant strongest)
- **Significance:** EMNLP 2026 — connects representation geometry to editing robustness, compression diagnosis, and training-time intervention. Practical implications for compression methods and targeted model editing.

Paper: https://arxiv.org/abs/2609.15975

---

### Discovery Foundation Models: Toward Open-Ended Discovery Intelligence
**arXiv:2609.15973** (Sep 14, 2026) — cs.CL
- Argues the next frontier is transitioning from solving human-specified problems to actively participating in constructing new problems, representations, and knowledge
- Discovery Foundation Models (DFMs): model systems operating over revisable research state with 7 coupled capabilities: problem discovery, formulation, representation construction, hypothesis formation, intervention, evidence-grounded revision, continual discovery improvement
- Zetema: couples explicit research-state dynamics, verification/experimental gating, external grounding, and Discovery Skill evolution
- GALILEO: real therapeutic-discovery system with Dry-Lab reasoning, robotic wet-lab experimentation, and iterative hypothesis revision in a closed physical loop
- Unified approach to capability formation and process-centered evaluation beyond final-answer performance
- **Significance:** Bold framing of the next stage of foundation model evolution — from learning existing knowledge to actively constructing new knowledge. The Zetema/GALILEO instantiations give it concrete grounding beyond a position paper.

Paper: https://arxiv.org/abs/2609.15973

---

### Mind2Dialogue: Training Human-Aware LLMs via User Mental State Simulation
**arXiv:2609.15972** (Sep 14, 2026) — cs.CL, cs.LG
- Psychology-guided user simulator that preserves personal characteristics while updating mental states through interaction
- Key: shared evolving mental state drives user behavior and guides Oracle assistant responses (privileged distillation)
- Training on full Mind2Dialogue corpus improves every reported personalization metric over Qwen, Llama, and OLMo instruction-tuned baselines
- Gains of 26.6 to 40.9 percentage points in preference-following generation
- Also improves belief and action reasoning beyond personalized assistance
- **Significance:** Addresses fundamental supervision gap — user mental states are not directly observable. The 26.6-40.9pp gains on preference-following are substantial and the approach is novel.

Paper: https://arxiv.org/abs/2609.15972

---

### Verifiable by Construction: Claim-Level Verbatim Citation in Clinical QA
**arXiv:2609.15964** (Sep 14, 2026) — cs.CL
- Evaluates whether LLMs can provide fine-grained verbatim quotes that fully substantiate every factual claim in clinical QA
- Standardized harness over 4 clinical practice guidelines, 12 LLMs, 222 synthetic clinical questions
- Most models attach verbatim quotes to 90%+ of claims from prompting alone (except lightweight models like claude-haiku-4.5)
- Critical gap: quotes often fail to fully substantiate claims — claude-opus-5: 98.0% quote attachment but only 37.1% fully substantiating
- **Significance:** Important gap between citation attachment and true substantiation — the 37.1% vs 98.0% discrepancy is a concrete capability gap in high-stakes applications.

Paper: https://arxiv.org/abs/2609.15964

---

### K-Bench: Clinical Benchmark for High-Risk Mental Health Conversations
**arXiv:2609.15855** (Sep 14, 2026) — cs.CL, cs.AI, cs.LG
- 125 model configurations from 33 base models across 14 providers, evaluated on 200 multi-turn vignettes (suicide, self-harm, domestic violence, substance misuse)
- Synthetic patient conversations show distributional overlap with real human-AI conversations
- Frozen GPT-4o judge achieves 94.2% exact agreement with clinician consensus
- Leading models: combined-risk scores above 95; risk exploration exposes substantial variation among lower-performing configurations
- Therapeutic prompting: configuration-specific gains concentrated among weaker models; elevated reasoning produces no average improvement
- **Significance:** Important safety benchmark — elevated reasoning not helping on average for mental health is a counterintuitive finding. The leaderboard at k-bench.ai is publicly available.

Paper: https://arxiv.org/abs/2609.15855

---

### Learning to Coach (L2C): LLM-as-Coach for Experiential Learning
**arXiv:2609.15851** (Sep 14, 2026) — cs.CL
- LLM-as-Coach extracts actionable experiential knowledge from actor model's previous trajectories; actor remains frozen
- Two rewards: same-instance (improves subsequent responses on original problem) and cross-instance (elicits transferable knowledge)
- Across math reasoning and interactive text-games: L2C consistently outperforms self-refinement and untrained LLM-as-Coach
- More iterations of experiential learning improves accuracy and uses inference compute more effectively than enlarging actor's decoding budget
- Trained LLM-as-Coach transfers to out-of-distribution tasks and adapts to specific actor it coaches
- **Significance:** Novel self-improvement paradigm — coaching instead of direct self-refinement. Transferability to new actors and OOD tasks is the headline practical advantage.

Paper: https://arxiv.org/abs/2609.15851

---

### Inoculation Midtraining with Learned Neologisms
**arXiv:2609.15886** (Sep 14, 2026) — cs.CL
- Introduces <quarantine_token> neologism during midtraining to designate unsafe behaviour contexts; post-trains on unsafe data within that context
- Goal: reduce misalignment while preserving benign data property transfer (e.g., German, Shakespearean prose)
- Result: can reduce misalignment while preserving some benign properties BUT does not outperform standard Inoculation Prompting
- Boundary is leaky — nearby contextual cues can reactivate unsafe behavior
- **Significance:** Incremental finding — learned associations via midtraining can shape selective generalization, but not yet competitive with standard prompting. Leaky boundary is a meaningful limitation.

Paper: https://arxiv.org/abs/2609.15886

---

## Key Insights for Today

1. Representation geometry (parallel/perpendicular decomposition) is emerging as a useful lens for understanding and editing transformers — EMNLP 2026 acceptance signals credibility
2. Discovery Foundation Models framing (DFMs) is the boldest new positioning — next frontier from solving to constructing problems
3. Mind2Dialogue's 26.6-40.9pp gains on personalization suggest that simulating user mental states is a promising training direction
4. K-Bench counterintuitive finding: elevated reasoning produces no average improvement on mental health safety — reasoning capability and safety capability may be partially orthogonal
5. L2C (Learning to Coach) is a novel paradigm — coaching from trajectories beats self-refinement; more iterations beats larger decoding budget

## Sources
- arXiv cs.CL new (Sep 14): https://arxiv.org/list/cs.CL/new
- Cool Papers: https://papers.cool/arxiv/cs.CL,cs.LG,cs.AI
