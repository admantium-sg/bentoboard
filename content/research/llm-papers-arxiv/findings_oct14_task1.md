# Findings: Task 1 - arXiv Papers (Oct 14, 2026)

## Tev-Gym: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards
**arXiv:2610.18868** (Oct 13, 2026) — cs.CL, cs.AI, cs.CV, cs.LG
- Tev-Gym: first long-horizon agent training dataset with verifiable, dense, progressive rewards — 1,170 verified task environments across 7 domains
- Built on latent-world-first approach: constructs a latent world (complete/correct hidden specification) then progressively renders into agent-facing environment
- Progress-potential reward shaping (PPRS): converts progress into dense per-step reward, makes otherwise-intractable tasks trainable
- Tev-27B: matches GPT-6 Astra and Claude Opus 5 at Pass@5 on Agents' Last Exam computing and math sciences (ALE-CM)
- Generalizes to Terminal-Bench 3.0 and 4.0 subsets, surpassing GLM 5.2 and Gemini 3.7 Flash
- Key insight: dense progress rewards solve sparse-reward problem for long-horizon agents; latent world approach enables controllable complexity
- Code: https://tev-agent.github.io/
- Paper: https://arxiv.org/abs/2610.18868

## LLM Ensemble Gains: Decomposing Candidate Value, Diversity, and Aggregation
**arXiv:2610.18786** (Oct 13, 2026) — cs.CL, cs.AI
- Problem: LLM ensemble gains are measured against single baseline, but value attributed to additional candidates changes with comparison used
- Studies LLM aggregator under 4 matched conditions: Direct, Single-slot, Duplicate, Multi-candidate
- CIV (candidate gain) splits algebraically into DSV (additional-candidate contrast) and CCV (candidate-context contrast)
- MultiHopRAG: repetition gap Rep=-8.33pp between Duplicate and Single-slot controls
- FRAMES stronger-panel: Rep=+9.67pp improvement with matched controls
- Key insight: ensemble evaluations should state the reference control before attributing gains to additional candidates
- Paper: https://arxiv.org/abs/2610.18786

## Reliable Memory from Unstable Growth: Curating Self-Written Agent Playbooks with Randomized Experiments
**arXiv:2610.18427** (Oct 13, 2026) — cs.CL
- Problem: persistent textual memory for LLM agents — same procedure can write playbook that helps OR falls up to 69.6 points below no playbook
- Current systems leave lesson selection to the agent itself, making performance unstable
- Proposed: Randomized Block Curation (RBC) — measures lesson effect with randomized experiment on practice tasks
- RBC groups related lessons into blocks, includes/excludes each block at random on practice tasks
- Results across 2 memory systems, 3 models, 3 benchmarks: RBC raises average success to 66.9 vs 55.5 (whole playbook), 54.1 (no playbook), 53.8 (agent's own judgment)
- Key insight: measure lesson effects empirically rather than relying on agent's self-assessment
- Paper: https://arxiv.org/abs/2610.18427

## Do Factuality Methods Make LLMs More Factual? Reproducibility and Fair Comparison
**arXiv:2610.18415** (Oct 13, 2026) — cs.CL, cs.AI
- First independent reproduction of 5 factuality alignment methods (PPO, GRPO, Dr. GRPO, DPO, KTO)
- Key finding: NONE of these methods reproduces in full; on common benchmark, none significantly outperforms base model
- Root cause: rewards optimize for format, length, or brevity rather than factuality and relevance
- Choice between on-policy and offline training matters little
- Evaluation metrics/benchmarks are part of the problem — don't measure relevance of text to prompt
- Key insight: factuality alignment methods lack independent reproduction; current evaluation is fragile
- Paper: https://arxiv.org/abs/2610.18415

## Knowledge Graphs as Files: Agent Harness Where Tool Creation and Tool Use Co-Evolve
**arXiv:2610.18616** (Oct 13, 2026) — cs.CL, cs.AI, cs.IR
- DKGI (Direct Knowledge Graph Interaction): harness where agents create graph access tools over complete node/edge files
- Agent writes Python code to follow relations, combine node sets, select textual evidence
- Training-free DKGI exceeds strongest published baseline by at least 6.7 Hit@1 points on every graph
- Multi-turn programming + shell access > shell-only or predefined graph tools
- Key insight: allowing tool creation and tool use to co-evolve enables flexible graph reasoning
- Code: https://github.com/leopoldwhite/DKGI
- Paper: https://arxiv.org/abs/2610.18616

## Ontology-Grounded Semantic IDs for Hierarchy-Aware Medical Concept Representation
**arXiv:2610.18672** (Oct 13, 2026) — cs.CL, cs.AI | NeurIPS 2026
- SMI (Semantic Medical Identifier): training-free framework for ontology-grounded Semantic IDs
- Defines Semantic ID as coarse-to-fine path through expert-defined medical ontology
- Aggregates frozen biomedical LM embeddings across ontology levels for hierarchy-aware representations
- Improves mortality prediction, readmission prediction, drug recommendation, rare drug prediction on MIMIC-IV
- More robust patient representations under cross-hospital distribution shift on eICU
- Key insight: medical hierarchy is crucial for rare/fine-grained clinical codes where hierarchy-agnostic LM representations fail
- Paper: https://arxiv.org/abs/2610.18672

## Sources
- https://arxiv.org/abs/2610.18868
- https://arxiv.org/abs/2610.18786
- https://arxiv.org/abs/2610.18427
- https://arxiv.org/abs/2610.18415
- https://arxiv.org/abs/2610.18616
- https://arxiv.org/abs/2610.18672
