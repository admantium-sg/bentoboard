# Findings — Task 1 — October 22, 2026 (arXiv cs.CL / cs.LG / cs.AI)

**Method:** arXiv API (`export.arxiv.org/api/query`) for `cs.CL`, `cs.LG`, `cs.AI`, newest-first. 139 unique papers parsed locally from `/tmp/cs.CL.xml`, `/tmp/cs.LG.xml`, `/tmp/cs.AI.xml`. Batch is dominated by **2026-10-21** submissions (`2610.29xxx`–`2610.30132`). Also queried the quantization-specific slice (`abs:quantization OR abs:4-bit OR abs:FP4 OR abs:NVFP4`) for Task-2 cross-reference. **Dedup:** every candidate ID checked against `cumulative_findings.md` and `daily_reports/2026-10-20.md` / `2026-10-21.md` — no ID below appeared in prior findings, so all items are new.

---

## Preference Optimization & Post-Training

### ECHO: A Common-Mode Hidden Offset Silently Destroys Generation While Rankings Improve
**arXiv:2610.29410v1** (Oct 21, 2026)
- Preference optimization can improve *every ranking metric* while building a hidden shared representation shift the relative loss barely sees.
- The culprit: a **common-mode offset** — a shared directional shift in hidden states that appears across token positions, prompts, and both chosen *and* rejected responses. Because it moves chosen and rejected representations together, the relative ranking loss barely reacts to its accumulation.
- As it grows, the offset **projects onto the output layer to form a vocabulary well**, elevating one token's probability until it dominates decoding → generation collapse.
- Causal evidence: the isolated offset alone reconstructs the vocabulary well; injecting the learned offset into an *untreated* base model recreates the collapse, while norm-matched random directions do not; masking the common component from the loss prevents the well in the flagship setting.
- Scope: under the studied per-token ranking loss the same collapse appears in **14 of 17 base-model lineages**, including under full-parameter fine-tuning.
- The offset is not merely an artifact of collapse — it is already present in textbook DPO and SimPO runs that form *no* well. Textbook DPO keeps it weakly aligned with any single vocabulary direction even at 3× the base budget; full-parameter SimPO trained from base models for that budget drives it into collapse on both Llama-2 and Llama-3.1, and the same kind of offset grows (without a well) from a public SFT checkpoint under the official SimPO recipe.
- Across 17 UltraFeedback runs: **the better a run ranks held-out responses, the less often two public reward models agree** — a benign-looking divergence that tracks the hidden drift.
- Why it matters: this is a concrete, mechanistic failure mode for DPO/SimPO-family training that no leaderboard would surface. Monitor the *offset norm* and *vocabulary-well geometry*, not just ranking metrics.
- Source: https://arxiv.org/abs/2610.29410

### Monitorability Is Trainable — A Post-Training Stage for CoT-Monitor Coupling
**arXiv:2610.29734v1** (Oct 21, 2026)
- Complements the Oct 21 report's `2610.28303` (reward misspecification degrading monitorability) by asking whether monitorability can be *restored*.
- Proposes an **unsupervised post-training objective** that maximizes the mutual information between CoT and the output.
- Across **three model organisms with degraded CoT**, it recovers most or all of the lost monitorability.
- Applied to *undegraded* policies it further improves judged monitorability, improves CoT monitors' and activation probes' prediction of unsafe behavior, and **increases the prevalence of consequential reasoning**.
- Framing: monitorability should be treated as a **trainable attribute of the policy**, not an inherited property — a dedicated post-training stage that extends current practices which only *protect* CoT from direct optimization pressure.
- Source: https://arxiv.org/abs/2610.29734

### Unintended Side Effects of Value Training Across Hofstede Dimensions
**arXiv:2610.29922v1** (Oct 21, 2026)
- Adapts four instruction-tuned LLMs across individual Hofstede value dimensions and evaluates cross-value transfer plus broader behaviours.
- Finding: value-specific training produces **unintended side effects on untrained values, risk preferences, social cognition, and safety traits**.
- Because values are interconnected, fine-tuning for one value silently moves the others — the recommendation is that post-hoc value alignment needs broader behavioural evaluation, and that the *placement* of value training in the pipeline is itself a design variable.
- Source: https://arxiv.org/abs/2610.29922

---

## Chain-of-Thought, Decoding & Prompt Engineering

### Rationale Contrastive Decoding (RCD): Forcing the Answer to Actually Depend on the Rationale
**arXiv:2610.29518v1** (Oct 21, 2026)
- Motivating problem: with CoT prompting, **final answers do not always depend on the generated rationales** — models lean on query-specific shortcuts instead of the reasoning steps.
- RCD applies contrastive decoding to CoT: it contrasts next-token distributions conditioned on the query *with* and *without* its rationale, amplifying tokens whose likelihood increases *because of* the rationale.
- Provides a theoretical reading of the decoding rule via a **KL-regularized reward-maximization objective** — so it is a principled method, not a heuristic logit filter.
- Results: across five reasoning benchmarks RCD **improves answer accuracy over standard CoT**.
- The key validation is interventional, not just accuracy-based: intervention analyses using ground-truth and random rationales show RCD **increases the behavioural dependence of final answers on the rationale content**.
- Training-free and decoding-time — usable as a drop-in for any CoT pipeline.
- Source: https://arxiv.org/abs/2610.29518

### Accept-or-Repair (AoR): Contrastive Decoding Without the Accuracy Tax
**arXiv:2610.29727v1** (Oct 21, 2026)
- Problem with standard contrastive decoding: it changes *correct* answers too — a passage that contradicts the model's parametric knowledge is followed, but passages that *agree* with it are also degraded.
- Observation that unlocks the fix: **checking answers against the passage removes the trade-off**.
- AoR (training-free): keep the sampled answer if the passage supports it; otherwise try up to **two** contrastive-decoding replacements, returning the first that passes the support check. It additionally rejects replacements that merely repeat the answer generated *without* the passage when the passage favours another answer.
- Results: **+12.5 points over sampling on counterfactual passages, +2.3 on ordinary ones** — beating eight contrastive and prompting baselines on both, including baselines given the same rejection rule.
- Ablation: replacing only the *initial* answers the passage does not support improves the average score of **every** decoder tested.
- Source: https://arxiv.org/abs/2610.29727

### A Strong MoE Is All You Need for Process Supervision
**arXiv:2610.29498v1** (Oct 21, 2026)
- Process reward models (PRMs) normally need human annotation, rollout-based estimation, or auxiliary verification. This paper mines a signal already inside MoE models: **expert routing statistics**.
- Key result: simple routing statistics give an **intrinsic process-confidence signal competitive with conventional output-logit confidence**.
- Builds **routing confidence** from three components: overall routing mass, head routing mass, and within-step routing variation.
- Two artefacts: **RoCo-Rethink** (identify the least-confident reasoning step, selectively regenerate the subsequent trajectory) and **RoCo-PRM** (use a strong MoE to auto-annotate trajectories with routing-derived step scores, then **distill** them into a standalone PRM).
- Across multiple MoE architectures and diverse reasoning tasks both consistently beat strong baselines; RoCo-PRM **transfers across both model architectures and tasks**.
- Interpretation: expert routing is not just a computational dispatch mechanism — it is an **architecture-native source of process supervision**.
- Source: https://arxiv.org/abs/2610.29498

### A Diagnostic Study of Faithfulness in Diffusion Language Models for Table-to-Text
**arXiv:2610.29602v1** (Oct 21, 2026)
- Compares masked diffusion models (MDLM, LLaDA) against GPT-2 / GPT-Neo under an identical retrieval-based few-shot protocol on ToTTo, scoring reference similarity and **source grounding as separate axes**.
- The two pull apart: within LLaDA, extra demonstrations raise BLEU from **11.3 → 22.0** while NLI entailment against the source table **falls 0.78 → 0.52**. A QLoRA-adapted LLaDA reaches the study's best BLEU (24.15) and grounds **no better**.
- Manual annotation shows the failure modes differ in kind: autoregressive baselines **wander off the table**; LLaDA-based models **stay on topic and swap out individual entities**.
- Takeaway: reference-based metrics alone are insufficient to assess faithfulness in table-to-text generation.
- Source: https://arxiv.org/abs/2610.29602

---

## Efficiency: Quantization, Pruning, Speculative Decoding, Diffusion

### PACE: Periodic and Channel-Aligned Encoding of Four-Bit Recurrent States
**arXiv:2610.29545v1** (Oct 21, 2026)
- Problem: linear-attention LMs keep context in a fixed-size recurrent state, and an inference system stores one copy per concurrent sequence — so **state precision directly controls how many sequences share an accelerator**.
- Prior state quantizers round after *every* generated token and report that 4 bits lose accuracy unless you widen the bit-width or fine-tune.
- PACE is a **post-hoc 4-bit state quantizer** with two mechanism insights:
  1. **Round less often.** Rounding only once every few generated tokens (as chunked kernels already do once per chunk during prefill) and buffering intervening tokens reduces accumulated state error.
  2. **Share scales per column.** Large entries of the gated-delta state **gather in columns**, because some channels of the per-token update stay large across many tokens — so one quantization scale is shared within a column.
- Plus: heads that retain rounding error longest are kept at **eight bits**.
- Results on four hybrid models (4B–35B): mixed 4/8-bit PACE is **competitive with 8-bit DAMP at about two-thirds of its memory**; all-4-bit PACE **scores higher than Q-Mamba at equal memory**; periodic rounding preserves the decoding speedup of the buffer.
- Source: https://arxiv.org/abs/2610.29545

### Right On Q: Recovering Reasoning under Quantization via Self-Generated Trajectories
**arXiv:2610.29378v1** (Oct 21, 2026)
- Standard QAT supervises the quantized student against the full-precision teacher on **fixed response sequences**. Problem: training-prefix vs. generation-prefix mismatch grows with response length, and low-bit students often **fail to terminate** within the token budget the FP model needs.
- Fix: train the student on **self-generated trajectories** instead of fixed responses, so prefixes match what the student actually sees at generation time.
- Targets the long-horizon reasoning gap that pure QAT leaves open, specifically the non-termination behaviour.
- Source: https://arxiv.org/abs/2610.29378

### SPARE: Sparsity Allocation via Routing Entropy for Efficient MoEs
**arXiv:2610.29662v1** (Oct 21, 2026)
- Expert pruning reduces MoE memory footprint, but most methods (a) focus on *which* experts to drop and (b) prune every layer **equally**.
- SPARE is **training-free and selector-agnostic**: it decides *how many* experts to remove per layer from **routing entropy** (entropy of tokens' normalized Top-K gate weights on calibration data).
- Intuition formalized by a perturbation bound under random pruning: when a token's gate weight is spread evenly, removing one active expert discards little of it — so **diffuse-routing layers should be pruned more aggressively**. Controlled interventions with a fixed selector link concentrated routing to larger output changes.
- Results at equal selector and budget: SPARE beats uniform allocation on **Mixtral, Qwen3 and DeepSeek**, especially at high pruning ratios.
- Headline numbers at 50% expert pruning: Qwen3-30B-A3B eight-task average **57.2% → 63.8%**; DeepSeek-R1 math/code/science average **80.1 → 82.8**.
- Source: https://arxiv.org/abs/2610.29662

### RCSD: Reinforcement and Continual Learning for Domain-Specific Speculative Decoding
**arXiv:2610.29527v1** (Oct 21, 2026)
- Conventional draft-model training uses soft-label distillation, forcing the draft to mimic the target's **full** output distribution — including high-entropy regions that degrade acceptance rates and increase early rejection risk.
- RCSD instead optimizes the **system-level objective** (maximize acceptance length), harvesting the naturally occurring accepted/rejected sequences during speculative inference as **implicit preference pairs**, with a masked loss that avoids penalizing target-aligned tokens.
- Results: **+35% average acceptance length over HASS** and **1.35× faster end-to-end inference** than HASS on practical workloads, without compromising generation quality.
- Source: https://arxiv.org/abs/2610.29527

### Looped Uniform Diffusion Language Models
**arXiv:2610.30066v1** (Oct 21, 2026)
- Uniform diffusion LMs (UDLMs) denoise ordinary vocabulary tokens, so training must denoise from a context that may itself be unreliable — more FLOP-hungry to train than masked DLMs, but with stronger downstream reasoning.
- Applying **selective looping** (recursively re-applying a few early Transformer layers within each denoising step) to UDLMs, with training objective and sampler unchanged: looped UDLMs reach the validation NLL of a non-looped UDLM trained on ~0.5T tokens with **up to 2.8× fewer training FLOPs on OpenWebText and 3.3× fewer on FineWeb-Edu**.
- At a matched NFE budget, looped UDLMs reach **up to 9.8% lower generation perplexity**, with most gains at *moderate* loop counts (over-looping wastes compute).
- Sampling **smaller loop counts more frequently** during training improves downstream inference efficiency.
- Source: https://arxiv.org/abs/2610.30066

### QSelect: Compressing Onboard Language Models for Space Robots under a Behavioral-Fidelity Requirement
**arXiv:2610.29302v1** (Oct 21, 2026)
- Treats compression as a **ground-segment step** for space-robot language interfaces, with explicit flight requirements generic PTQ leaves implicit: fixed memory budget and storage format, a **static artifact under configuration control**, and behaviour close to the ground-validated FP model.
- QSelect composes **one static low-bit model from compatible AWQ, GPTQ and AutoRound checkpoints** by assigning each linear module to one quantizer family and scoring every substitution at the final-task level.
- Source: https://arxiv.org/abs/2610.29302

---

## Agents, Harnesses & Memory

### Harness Scaling: Harness Diversity as a Scaling Dimension for Agentic RL
**arXiv:2610.29458v1** (Oct 21, 2026)
- Agent harnesses shape how models use tools, manage context and coordinate long-horizon interaction — but existing RL trains through a **single fixed harness**, causing specialization and poor transfer.
- Harness Scaling constructs a **factorized harness space**, selects a compact training subset with **balanced factorial coverage**, and organizes cross-harness training to combine global coverage with controlled variation for the same task.
- Results across benchmarks, model scales and RL algorithms: consistent improvement in generalization to **unseen white-box configurations**.
- The sharper claim: models trained through **structured white-box variation transfer to unseen external black-box harnesses**, outperforming models trained through a single complex black-box harness.
- Source: https://arxiv.org/abs/2610.29458

### MemoryTax: The Bitter Lesson of Agent Memory
**arXiv:2610.29823v1** (Oct 21, 2026)
- Tests whether designed memory (Mem0, Zep) still helps once the model is strong enough to **search for itself**. Setup: one LoCoMo conversation (419 turns, 152 questions) × 4 memory methods (full context, BM25, Mem0, Zep) × 3 coding agents (Pi, Codex, Claude Code) × 3 models (GPT-4o-mini, GPT-6 Luna, Claude Opus 5.5), recording the cost of every rollout.
- Finding 1 — **memory is a patch for weak models**: Mem0 beats full context *only* with GPT-4o-mini, and Mem0's *build* alone costs more than a whole full-context rollout.
- Finding 2 — **memory has a ceiling set by the writer**: a stronger reader does not recover what a weaker writer left out.
- Finding 3 — cost/accuracy frontier: with Claude Opus 5.5, **Pi tops the frontier, scoring 99% for less than half the cost of full context**; its single miss was a wrong answer key.
- Caveat the authors flag: part of the lead comes from photo captions only agents could read — on the 88 questions whose evidence has no photo, Pi and full context differ by one answer.
- Source: https://arxiv.org/abs/2610.29823

### Agent Behavior Maps: Locating Agents by What They Would Do, Without Running Them
**arXiv:2610.30014v1** (Oct 21, 2026)
- Agents with identical success rates can follow very different action sequences. ABM represents LLM–harness combinations via **centered action log-likelihoods on shared reference trajectories**, with **no new environment rollouts** from the target agent.
- Derives error bounds relating squared coordinate distances to trajectory KL under explicit assumptions; across eight cross-scored models the distances track directly measured trajectory KL **in rank order**.
- Across **100 LLMs and four environments**, ALFWorld-based coordinates support performance prediction and identify behavioural similarities. In ALFWorld the similarities **persist after controlling for success rates and model size**, including across model families.
- Extension: harness-component displacements approximately **compose**, with accuracy varying across components and environments.
- Source: https://arxiv.org/abs/2610.30014

### SWE-DIVE: Multi-Turn Coding Agent Evaluation with Dynamic User Simulation
**arXiv:2610.30047v1** (Oct 21, 2026)
- Coding agents are usually evaluated on one-shot, well-formedulated prompts (SWE-bench uses existing GitHub issues) — but real usage is multi-turn, with the user iteratively adding requirements.
- SWE-DIVE adds a **user simulator** that can simulate different behavioural patterns, plus a **conversation validator** that checks whether the simulator's outputs fulfil the initial requirements and steer the agent toward success. Everything runs inside a **Harbor** environment orchestrating agent + simulator + validator + test execution.
- Source: https://arxiv.org/abs/2610.30047

---

## Benchmarks & Evaluation

### Your Benchmark Is an Empirical Measure Over Difficulty
**arXiv:2610.29927v1** (Oct 21, 2026)
- Reframes a benchmark as inducing an **empirical measure over difficulty**, from which two failure modes follow formally: **measure mismatch** (benchmark difficulty distribution ≠ intended distribution) and **coverage gaps** (uncovered regions along the difficulty axis that prevent detecting localized training progress).
- Provides two diagnostic metrics with theoretical guarantees, and analyses **25 popular benchmarks across 7 domains** using carefully estimated item difficulties.
- Results: many benchmarks **implicitly overweight certain difficulty regions**, so leaderboard conclusions should be read with caution; others leave substantial portions of the difficulty axis uncovered, limiting their ability to monitor improvement.
- Closes the loop with **BenchFill**, a difficulty-targeted item-rewriting algorithm that effectively reduces local coverage gaps.
- Source: https://arxiv.org/abs/2610.29927

### P2NPCBench: Paired P vs NP-Complete Problems, Hardened by Adversarial Multi-Agent Rewriting
**arXiv:2610.30103v1** (Oct 21, 2026)
- Many NP-complete problems have a **polynomial-time twin** differing in one structural detail (e.g. 3- vs 2-colouring). A model that reasons rather than recalls should notice which side of the line a problem falls on; existing benchmarks either fix wording or ignore complexity class.
- P2NPCBench: **12 problem families**, each NPC problem paired with a P twin over the same surface; built with **AgentGAN**, an adversarial multi-agent framework where a generator rewrites each statement until a panel of frozen code models fails, while an **executable validity gate** keeps every rewrite answer- and class-preserving. Result: **2,114 hardened statements** with hand-verified reference human solvers.
- Results over 12 proprietary and open models: **every model scores lower on NPC than on its P twin (35.4% vs 63.8% pass@1)**; **95.1% of model-family pairs** fail more often on the NPC side.
- A **tenfold time limit** raises NPC accuracy only 28.5% → 31.9% — so failures are **wrong or crashing programs, not slow ones**.
- Hardening **narrows** the class gap from 24.8 to 14.6 points — part of the apparent gap was familiarity with textbook phrasing rather than complexity per se.
- Source: https://arxiv.org/abs/2610.30103

### Environment Duels: A Microcosm of LLM Co-Evolution
**arXiv:2610.30116v1** (Oct 21, 2026)
- Frontier LLMs absorb what predecessors and competitors create — from synthetic training pipelines to open-web data. Environment Duels is a **dynamic agentic benchmark** evaluating both roles: each model **writes environments** containing a privileged hint, aiming for tasks capable solvers fail without the hint and pass with it.
- Across **nine frontier LLMs**: solving and authoring are **distinct skills** — the strongest solvers are not the strongest authors, while **smaller models learn more** from how others played and write the hardest environments and the most useful hints.
- The duel produces a microcosm: head-to-head outcomes are **transitive** (stable ranking); independent authors **converge on the same designs**; and in an RL study with Qwen3.8-27B the learner's **hint lift** on an author's environments **tracks** how much training on those environments improves it on held-out reasoning/agentic benchmarks — whether the environments are its own or another model's.
- Source: https://arxiv.org/abs/2610.30116

### Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority
**arXiv:2610.29961v1** (Oct 21, 2026)
- "System One" decision models return a **calibrated probability per option** instead of generating text — well suited to legal verification where the question is closed (a holding, or none).
- Extends CaseHOLD with an abstention condition: the correct holding is replaced in **1,670 of 5,314 items**; compares four decision models against six generative LLMs.
- Result: when no option is correct, **generative LLMs still pick one in 38–86% of items**; the most cautious decision model in 30%.
- On standard CaseHOLD a decision model **matches the best generative LLM (88.1% vs 88.2%) at 1/55 of the cost**.
- Practical recipes: accept the LLM's answer only when a decision model agrees **halves wrong citations**; distilling a decision model's probabilities into Qwen3-8B without labels yields a well-calibrated local model.
- Conclusion: **legal AI should be judged by wrong citations, not accuracy alone.**
- Source: https://arxiv.org/abs/2610.29961

### ThreadRAG: Graph Topology Meets Energy-Driven Pathfinding
**arXiv:2610.29933v1** (Oct 21, 2026)
- Names two failure modes of KG-based RAG: **severe semantic loss** (distilling continuous text into discrete symbols strips narrative coherence) and **modality mismatch** (fragmented graphs clash with the continuous text LLMs are pretrained on; rewriting graphs into prose adds generative noise and drops information).
- ThreadRAG adds a **Semantic Topology Mapper** (context-intact Semantic Nodes; a Semantic Topology Graph with narrative, semantic and lexical edges) and **Energy-Driven Pathfinding** (energy diffusion to find query-relevant subgraphs, then deterministic linearization into coherent textual evidence paths).
- Results: **+14.4% EM over text-centric methods on HotpotQA**, +5.8% EM over the best baseline on 2WikiMultihop, while **reducing token cost to 23.3% of the strongest baseline**.
- Source: https://arxiv.org/abs/2610.29933

---

## Fairness & Calibration Under Compression

### Effects of Model Scale and Quantization on Social Bias and Abstention
**arXiv:2610.29657v1** (Oct 21, 2026)
- Question: when a compressed model produces **fewer biased responses**, does that mean fairer behaviour or just more abstention? Studied on the BBQ benchmark across multiple sizes and quantization settings of Qwen3, Gemma-3 and SmolLM2, plus alternative prompt formulations and a forced-choice setting with the "Unknown" option removed.
- Results: larger models achieve higher QA accuracy, but **bias shows no simple scaling trend** and quantization effects vary across configurations. Crucially, **20 of the 26 configurations with fewer biased responses also show increased over-abstention**.
- Implication: **lower observed bias can partly reflect greater abstention** — fairness evaluation must consider biased responses, abstention, prompt formulation and answer-option design jointly.
- Source: https://arxiv.org/abs/2610.29657

---

## Long-Context Reasoning

### LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data
**arXiv:2610.30132v1** (Oct 21, 2026)
- Problem with RL for long-context reasoning: it needs training data that is long, diverse, challenging **and verifiable** — human annotation is expensive, natural data is scarce, and synthesis from external corpora or stronger teachers gets harder as trained models get stronger.
- **LongZero** lets an LLM improve its own long-context reasoning with **no external data**. Key inversion: instead of writing questions/answers *over* existing documents, the model first synthesizes the question, answer **and supporting evidence in a compact structured form**, and only then separately expands the evidence into a long multi-document context.
- Combines self-written **multi-hop reasoning tasks** with self-written **multi-round retrieval tasks**, trained with GRPO.
- Evaluated on two LLMs across **five long-context reasoning benchmarks**; generalizes to real tasks and **outperforms RL on data synthesized from external corpora**.
- Source: https://arxiv.org/abs/2610.30132
