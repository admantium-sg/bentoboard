# Findings: Task 1 — arXiv Papers (June 8-9, 2026)

## Research Focus: Chain-of-Thought, Prompt Engineering, Efficiency

---

### 1. IS-CoT: Interleaved Structural Chain-of-Thought for Long-Form Generation
**arXiv:2606.09709** (June 8, 2026) — cs.CL

**Problem:** Reasoning-enhanced LLMs suffer severe length collapse in open-ended writing — performance degrades sharply beyond 2,000 words. Static hierarchical planning can't provide dynamic guidance over extended contexts.

**Method:** Interleaved Structural Chain-of-Thought (IS-CoT) embeds a dynamic Plan-Write-Reflect cycle into generation, enabling continuous strategy adaptation without external agentic workflows. Multi-teacher pipeline constructs high-quality interleaved reasoning traces dataset.

**Key Results:**
- Trains IS-Writer-8B, achieving state-of-the-art on LongBench-Write: +3.08 vs DeepSeek-V3.2
- Robust length compliance and coherence competitive with much larger proprietary models
- Plan-Write-Reflect cycle embedded directly in generation process

**Key Insight:** Dynamic interleaved reasoning (not static planning) is needed for coherent long-form output. Plan and write steps must co-evolve throughout generation.

**Source:** https://arxiv.org/abs/2606.09709

---

### 2. PsychoSafe: Psychologically-Informed Refusal Framework
**arXiv:2606.09697** (June 8, 2026) — cs.CL

**Problem:** In high-risk interactions (crisis, coercion, escalating intent), blunt refusals prevent direct harm but fail to support the person behind the request.

**Method:** PsychoSafe reframes refusal as structured supportive communication grounded in evidence-based intervention strategies. 8,019 prompt-response pairs across 5 risk domains; PEFT on Qwen 3.5 27B.

**Key Results:**
- PsychoSafe prompting: +28.1% refusal quality over generic baseline
- External resource referral: +46.8%; psychological grounding: +34.8%
- Preserves downstream performance on non-refusal tasks
- Fine-tuning achieves near-perfect refusal rates but reduces response relevance

**Key Insight:** Refusal quality is a learnable skill distinct from safety alignment. Structured intervention-aware refusals significantly outperform blunt non-compliance in high-risk domains.

**Source:** https://arxiv.org/abs/2606.09697

---

### 3. GGRO: Gradient-Guided Reward Optimization for Inference-Time Alignment
**arXiv:2606.09635** (June 8, 2026) — cs.CL — Accepted to UAI 2026

**Problem:** Best-of-N and rejection sampling are bounded by base model quality and vulnerable to reward hacking via imperfect reward models.

**Method:** GGRO monitors token-level entropy to identify high-uncertainty regions (indicative of drift/misalignment). Upon detection, injects nudging tokens generated using gradient signals from an off-the-shelf reward model — steering generation trajectory rather than re-ranking samples.

**Key Results:**
- Consistent improvement across safety, helpfulness, and reasoning benchmarks
- Increases coverage of high-quality responses
- Increases robustness to reward hacking
- Minimal computational overhead

**Key Insight:** Gradient-guided token injection at inference time is more efficient than sampling-intensive search methods. Uncertainty detection enables targeted, minimal intervention.

**Source:** https://arxiv.org/abs/2606.09635 | Code: https://github.com/lhk2004/GGRO

---

### 4. RLHF Provides Shallow Alignment While Leaving Partisan Structure Intact
**arXiv:2606.09735** (June 8, 2026) — cs.CL

**Method:** Mechanistic case study of Llama 3.1 8B before/after RLHF, focusing on partisan political orientation. Uses sparse autoencoder decomposition and feature-level steering experiments.

**Key Findings:**
- RLHF compresses partisan signal variance to generate balanced output — but does NOT remove the structured partisan direction in the base model
- Policy-encoding features (sporadic in base model) are completely inactive in Instruct model
- RLHF encodes norm of political neutrality by severing causal pathway from partisan geometry to output — not by erasing knowledge
- Underlying geometry enabling partisan steering remains intact
- Mechanisms bypassing guardrails (inferring user's partisan identity) reactivate partisan generation

**Key Insight:** RLHF operates by disconnecting rather than removing value-laden structure. Aligned model behavior may be more fragile than outputs suggest. The same pattern likely holds for other value domains.

**Source:** https://arxiv.org/abs/2606.09735

---

### 5. When Built-in Thinking Helps and Hurts: Constraint-Level Error Shifts
**arXiv:2606.09662** (June 8, 2026) — cs.CL

**Method:** Studies IFEval with Qwen3 models (1.7B-32B), using same-weights Thinking ON/OFF controls. Four Hunyuan models provide cross-family support. Post-hoc grouping of constraint types.

**Key Findings:**
- Aggregate pass-rate changes small (-0.55 to -3.52 pp), but 10-20% of prompts switch between pass/fail across modes
- **Planning constraints** (global counting, structure, coordination): improve at class level under thinking
- **Precision constraints** (exact local form): consistently worsen under thinking
- Matched-length analyses reduce but don't eliminate Precision penalty
- Neutral prompts: positive relevance-compliance link (r≈0.15)
- Planning prompts: near-zero correlation (r≈0.02) despite trace engagement — execution gap
- Precision prompts: small negative correlation (r≈-0.05)
- Activation patching: Precision flip instances more often restored (32-58%) vs Planning flip (14-40%)

**Key Insight:** Built-in thinking improves planning but hurts precision. Effect is asymmetric across constraint types — not a uniform degradation. Execution gap explains why trace relevance doesn't always translate to compliance.

**Source:** https://arxiv.org/abs/2606.09662

---

### 6. AgentServeSim: Hardware-Aware Simulator for Multi-Turn LLM Agent Serving
**arXiv:2606.09613** (June 8, 2026) — cs.CL, cs.AI

**Problem:** Existing LLM serving simulators target stateless request-level workloads, omitting core dynamics of agent serving: multi-turn execution, cross-turn cache locality, KV-cache residency during tool gaps.

**Method:** AgentServeSim with composable modules:
- Program Orchestrator: preserves program identity and turn order
- Tool Simulator: materializes tool-induced gaps
- Session-Aware Router: program-to-instance affinity for cache-aware dispatch
- KV Residency Model: tracks KV placement across HBM, host DRAM/CXL, eviction

**Key Results:**
- Reproduces real-system behavior within 6% error across key performance metrics
- Runs entirely on commodity CPUs
- Enables controlled, repeatable exploration without dedicated accelerator time

**Key Insight:** Agent serving requires fundamentally different serving primitives than stateless inference. KV cache residency during tool gaps is a first-class concern.

**Source:** https://arxiv.org/abs/2606.09613

---

### 7. SIGA: Self-Evolving Coding-Agent Adapters for Scientific Simulation
**arXiv:2606.09774** (June 8, 2026) — cs.AI, cs.CL

**Problem:** Scientific simulators expose specialized input languages. Learning them costs domain scientists hours to days. Off-the-shelf coding agents lack the simulator's executable contract.

**Method:** SIGA (Simulator-Interface Grounding Adapter) supplies executable contract through retrieval, procedural memory, in-trajectory validation, and validation-enforced termination. Self-evolution rewrites adapter contents from prior trajectories.

**Key Results:**
- GEOS multiphysics simulator: complete deck in ~5 minutes, TreeSim >0.90 vs 3-hour human expert — 36x speedup
- Grounding raises TreeSim from 0.720 to 0.789 on held-out set (+10% relative)
- Reduces across-seed standard deviation by 16x
- Transfers to OpenFOAM and LAMMPS: validation matters most for structural completeness, memory/retrieval for domain correctness

**Key Insight:** Lightweight self-improvable grounding layers can turn general coding agents into practical operators of specialized scientific software. Minimal simulator-specific adaptations unlock general-purpose capability.

**Source:** https://arxiv.org/abs/2606.09774

---

### 8. SearchSwarm-30B-A3B: Delegation Intelligence for Agentic LLMs
**arXiv:2606.09730** (June 8, 2026) — cs.AI

**Problem:** Long-horizon deep research requires delegation intelligence — decomposing tasks, determining when/what to delegate, integrating results. Training data for this capability is scarce.

**Method:** Harness guides model toward high-quality task decomposition and delegation, constraining subagents to return results properly. Harness-guided trajectories encode correct delegation decisions, used as SFT data.

**Key Results:**
- SearchSwarm-30B-A3B: 68.1 on BrowseComp, 73.3 on BrowseComp-ZH
- Best results among all models of comparable scale
- Will release harness, model weights, and training data

**Key Insight:** Delegation intelligence is a learnable capability distinct from general agentic behavior. Subagent result quality management is critical for long-horizon context conservation.

**Source:** https://arxiv.org/abs/2606.09730

---

### 9. CHAP: Collaborative Human-Agent Protocol
**arXiv:2606.09751** (June 8, 2026) — cs.AI, cs.CL, cs.HC

**Problem:** Production deployments are multi-human, multi-agent collaborations crossing teams, time zones, and trust boundaries. Human judgment moments (edits, approvals) are recorded in chat threads and tribal memory — not structured events.

**Method:** CHAP defines Core (workspaces, participants, tasks, artefacts, append-only evidence log) plus composable profiles (review, modes, routing, deliberation, handoff, identity, signatures, audit).

**Key Features:**
- Override becomes structured event with diff, rationale, content hash
- Shift handoff becomes portable envelope
- Human approval becomes non-repudiable signed decision (replayable)
- Complements MCP (tool access) and A2A (agent-to-agent) with human-agent collaboration layer

**Key Insight:** MCP + A2A + CHAP = complete protocol stack for production AI systems. Human-agent accountability requires protocol-level structure, not application code.

**Source:** https://arxiv.org/abs/2606.09751 | Spec: https://github.com/BrightbeamAI/chap

---

### 10. Causally Evaluating Learnability of Formal Language Tasks
**arXiv:2606.09822** (June 8, 2026) — cs.CL, cs.FL

**Problem:** Standard correlational evaluation is inherently flawed for determining how much task-specific data is needed to learn a given task.

**Method:** Uses formal languages induced from probabilistic finite automata as controlled testbed. Introduces binning semiring to control property frequency in sampled corpus. Causal graphical model with decomposed KL divergence metrics.

**Key Findings:**
- Evaluating learnability without causal intervention leads to incorrect conclusions
- Confounders in correlational analysis distort learnability estimates
- Warning: same pitfalls apply to natural-language settings

**Key Insight:** Correlational evaluation practices for LLM capabilities may be fundamentally flawed. Causal analysis via controlled synthetic testbeds reveals confounders invisible to standard benchmarks.

**Source:** https://arxiv.org/abs/2606.09822
