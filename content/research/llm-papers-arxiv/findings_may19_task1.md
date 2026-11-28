# Findings: Task 1 — arXiv Papers (May 19, 2026)

## Sources
- https://arxiv.org/abs/2605.18753 (DashAttention)
- https://arxiv.org/abs/2605.18747 (Code as Agent Harness)
- https://arxiv.org/abs/2605.18703 (EnvFactory)
- https://arxiv.org/abs/2605.18646 (Language-Switching Backdoor Circuit)
- https://arxiv.org/abs/2605.18607 (Forecasting with Proxy Metrics)
- https://papers.cool/arxiv/cs.CL,cs.LG (Cool Papers digest, May 18 submissions)

## Key Papers

### 1. DashAttention — Differentiable Adaptive Sparse Hierarchical Attention
**arXiv:2605.18753** (May 18, 2026)

Current hierarchical attention methods (NSA, InfLLMv2) select top-k KV blocks based on coarse scores then apply fine-grained softmax — but top-k assumes fixed relevant token count and blocks gradient flow between sparse and dense stages.

DashAttention uses adaptively sparse α-entmax transformation to select a variable number of blocks per query, keeping the entire hierarchy fully differentiable. Key result: non-dispersive unlike other hierarchical methods → better long-context modeling.

- Achieves comparable accuracy to full attention at 75% sparsity
- Better Pareto frontier than NSA and InfLLMv2, especially at high sparsity
- Triton GPU implementation: speedup over FlashAttention-3 at inference
- Practical path to cost-effective long-context modeling

### 2. Code as Agent Harness
**arXiv:2605.18747** (May 18, 2026) — Large survey

Surveys the emerging paradigm where code is not just output but the operational substrate for agent reasoning, acting, environment modeling, and execution-based verification.

Three-layer framework:
- **Harness interface**: code connects agents to reasoning, action, environment modeling
- **Harness mechanisms**: planning, memory, tool use for long-horizon execution + feedback-driven control/optimization
- **Scaling to multi-agent**: shared code artifacts for multi-agent coordination, review, verification

Applications: coding assistants, GUI/OS automation, embodied agents, scientific discovery, DevOps, enterprise workflows.

Open challenges: evaluation beyond final task success, verification under incomplete feedback, regression-free harness improvement, consistent shared state across agents, human oversight for safety-critical actions, multimodal extensions.

GitHub: https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers

### 3. EnvFactory — Scaling Tool-Use Agents
**arXiv:2605.18703** (May 18, 2026)

Agentic RL is bottlenecked by: (1) lack of scalable robust execution environments, (2) scarcity of realistic training data capturing implicit human reasoning.

EnvFactory addresses both: autonomously explores and verifies stateful executable tool environments from authentic resources; synthesizes natural multi-turn trajectories via topology-aware sampling and calibrated refinement.

- Only 85 verified environments across 7 domains (prior work uses ~5x more)
- Generates 2,575 SFT and RL trajectories
- Results: Qwen3-series +15% BFCLv3, +8.6% MCP-Atlas, +6% on conversational benchmarks (τ²-Bench, VitaBench)
- Fully automates environment construction AND trajectory synthesis

### 4. Language-Switching Backdoor Circuit Analysis
**arXiv:2605.18646** (May 18, 2026)

Mechanistic analysis of backdoor attack in 8B model where 3-word Latin trigger (9 tokens) redirects English → French output.

Three-phase circuit:
1. Distributed attention heads at early layers compose trigger tokens into last sequence position
2. Signal propagates through mid-layers in subspace orthogonal to natural language-identity direction
3. MLP at final layer converts latent signal into French logits

Key: entire circuit flows through a serial bottleneck at a single position — corrupting that position at any layer fully mitigates the trigger but also degrades model capabilities.

Implication: defenses searching for language-like signals in intermediate representations miss this trigger entirely (orthogonal encoding).

### 5. Forecasting Downstream LLM Performance with Proxy Metrics
**arXiv:2605.18607** (May 18, 2026)

Cross-entropy loss is poorly aligned with downstream capabilities; direct downstream evaluation is expensive and sparse at early training stages.

Proposal: construct proxy metrics from token-level statistics (entropy, top-k accuracy, expert token rank) over expert-written solutions.

Results:
- Cross-family model selection: Spearman Rho = 0.81 vs Rho = 0.36 for cross-entropy loss
- Pretraining data selection: ranks 25 corpora at ~10,000x less compute than direct evaluation
- Training-time forecasting: extrapolates downstream accuracy across 18x compute horizon with ~half the error of alternatives

Expert trajectories as a broadly useful signal for model development decisions throughout the lifecycle.
