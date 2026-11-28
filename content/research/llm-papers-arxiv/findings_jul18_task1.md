# Findings: Task 1 — arXiv Papers (July 16/17 Batch) + Weekly Top Papers
**Date:** July 18, 2026
**Research focus:** chain-of-thought, prompt engineering, efficiency

## Papers from July 16 Batch (reviewed)

All major papers from the July 16 batch (2607.147xx–2607.152xx range) were covered in the July 17 daily report:
- Statistical Self-Consistency (2607.15277) — macro fallacy, persona prompting for population estimates
- Mask-Aware Policy Gradients (2607.15200) — COLM 2026, MDLM RL, 87.1% GSM8K
- T2MLR (2607.15178) — middle-layer recurrence retrofitting, math reasoning
- In-Place Tokenizer Expansion (2607.15232) — LFM2→LFM2.5, 2.4-4.0x token reduction
- OPD² (2607.15161) — delta distillation, reasoning transfer
- SEED (2607.14777) — self-evolving on-policy distillation for agents
- Rubrics on Trial (2607.15092) — evaluation rubric evolution
- OmniaBench (2607.14989) — general agent benchmark, 58% frontier ceiling

## New: Weekly Top Papers (arXiv TLDR, July 13-19)

### 1. CausalDS: Benchmarking Causal Reasoning in Data-Science Agents
**arXiv: Likely July 13-18, 2026** — cs.AI, cs.CL, cs.LG
- New benchmark evaluating causal reasoning, data science, and tool use in LLM agents
- Uses synthetic data and realistic scenarios with instances from sampled SCMs
- Tasks span Pearl's three causal inference rungs: association, intervention, counterfactual
- Includes data science coding, tool use, and imperfect observations
- Addresses gap in evaluating causal reasoning within agentic workflows
- **Significance:** First major benchmark specifically targeting causal reasoning in data-science agents

### 2. Verifier-Based Reinforcement Fine-Tuning (RFT) for Reasoning Models
**arXiv: Likely July 13-18, 2026** — cs.LG
- Adapts reasoning models for real-world control tasks (thermal energy storage)
- Converts exact dynamic programming action values into dense, verifiable rewards
- RFT reduces CO2 emissions from 70.5 to 61.2 kg, nearly matching DP optimum (60.8 kg)
- Key insight: dense, verifiable rewards from domain-specific simulators bridge RL to real control tasks
- **Significance:** Demonstrates RL fine-tuning of reasoning models for physical systems control

### 3. PROBE: Benchmarking Code Generation in LLMs
**arXiv: Likely July 13-18, 2026** — cs.SE
- Extensible benchmark for LLM code generation evaluation
- Evaluates functional correctness, code quality, and solution proximity
- Uses diverse metrics, workloads, and prompt templates for comprehensive assessment
- **Significance:** Addresses gap between syntax-only metrics and real code quality

### 4. StructureClaw: Traceable LLM Agents for Structural Engineering
**arXiv: Likely July 13-18, 2026** — cs.SE, cs.AI, cs.MA
- Workbench and benchmark for LLM agents in structural engineering
- Features governed engineering skills, typed tools, shared artifact state
- StructureClaw-Bench: 150 executable scenarios for workflow evaluation
- Full evidence chain evaluation: requirements → computable model → validation → solver → code → report
- **Significance:** Process-focused evaluation (workflow integrity) vs. answer-only scoring

## Additional Papers from July 16 Batch (minor/not previously highlighted)

### Digital Pantheon: Coalition Formation with LLM Agents
**arXiv:2607.15095** (July 16, 2026) — cs.CL, cs.AI, cs.MA
- Multi-agent framework simulating political coalition formation
- Combines SFT + DPO + per-party RAG to enforce partisan personas while grounding in manifestos
- MILT (Multi-Layered Information Lineage Topology) traces agreement clauses back to manifesto origins
- Validated on 2019 Flemish election; framework predicts real-world outcomes
- **Significance:** Interpretable multi-agent negotiation with provenance tracking

## Papers NOT YET on arXiv (mentioned in community digest)

### Ring-Zero: Zero-RL for Trillion-Parameter Models
- Scales RL with verifiable rewards and NO human-annotated data ("zero RL") to trillion-parameter regime
- Prior work avoided this compute regime
- Naive scaling produces poor readability, token redundancy, and non-adaptive reasoning depth
- Introduces techniques to elicit high-quality chain-of-thought behavior
- **Community interest:** If transferable to open weights, could enable controllable reasoning without annotation pipelines
- **Source:** Substack ML Expedition digest (July 16 edition)
- **Note:** Not yet on arXiv as of July 18

## Sources
- https://arxivtldr.org/weekly (July 18, 2026)
- https://machinelearningexpedition.substack.com/p/ai-research-digest-july-16-2026
- https://arxiv.org/abs/2607.15095
- https://papers.cool/arxiv/cs.CL,cs.LG,cs.AI,cs.CV
