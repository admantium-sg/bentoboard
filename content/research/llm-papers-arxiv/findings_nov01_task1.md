# Findings — Task 1 (arXiv cs.CL / cs.LG / cs.AI) — Run 2026-11-01

Window target: 2026-10-31 → 2026-11-01 (UTC)

## Executive summary

- **There is NO new arXiv announcement batch for Nov 1.** arXiv does not announce on
  weekends; the live `/list/cs.CL/new`, `/list/cs.LG/new`, `/list/cs.AI/new` pages all still
  read **"Showing new listings for Friday, 30 October 2026"**. The arXiv API confirms the
  newest indexed submission timestamp in cs.CL is **2026-10-29T17:59:53Z**. So the
  "zero new announcements" outcome predicted for Oct 31 also holds for Nov 1.
- **However, a sweep of the Oct-30 announcement batch + the arXiv API turned up 94
  genuinely never-before-reported papers**, verified against three independent baselines
  (the delivered 3,568-ID `tmp/known_ids_nov01.txt`; a 3,609-ID union grepped from every
  `.md`/`.json` in the workspace; and a stricter 1,942-ID scan limited to actual report
  artifacts). **Zero overlap with anything previously reported** under any of them.
- Root cause of the backlog: **the Oct-25/26/27 runs never happened** (no
  `findings_oct25/26/27_task*.md`, no `daily_reports/2026-10-25/26/27.md`), so the entire
  **2026-10-25 submission batch (~79 papers) was never reported**. The Oct 28/29/30/31 runs
  then moved on to later batches. The Oct-30 listing sweep additionally exposed **18
  never-reported IDs** (mostly delayed-announcement cross-lists plus the tail of the Oct-30
  "new submissions" list).
- Of the 94, **37 are directly on-topic** (chain-of-thought/reasoning, prompt/agent
  interfaces, model efficiency & sparsity, distillation, agentic LLMs, new benchmarks).
  These are detailed below with concrete quantitative claims. Section F adds **6 further
  off-topic but notable papers** (its table has 7 rows; 2610.37682 is #34 above), so
  **43 IDs are written up in total**.
- **Genuinely new research directions vs. yesterday's coverage:** (a) *activation steering
  applied to the distillation teacher* rather than the student; (b) *sampler-mismatch as a
  first-class theory of RLVR entropy dynamics*; (c) *agent interface representation (MCP
  vs CLI) treated as an experimental variable*; (d) *a "coordination tax" cost model for
  multi-agent LLM pipelines*; (e) *human think-aloud data on ARC-AGI-3 as a
  cognition-vs-agent benchmark*.

## New arXiv Papers

### A. Reasoning, chain-of-thought, RLVR, distillation

**1. Steering the Teacher: Improving On-Policy Self-Distillation for Thinking Models** —
2610.34005 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34005
Authors: Tiejin Chen, Xiaoou Liu, Hanyang Chen, Hua Wei (cs.LG, cs.AI)
- On-policy self-distillation (OPSD) trains a student on its *own* reasoning traces using a
  reference-conditioned teacher. The paper names two concrete failure modes:
  **reference hallucinations** (student cites a reference it cannot see) and
  **reconsideration suppression** (teacher discourages verification at uncertain steps).
- ST-OPSD extracts two activation-steering directions from model-generated reasoning
  trajectories and applies them to the **teacher's** hidden states while computing
  distillation targets; the student itself is never steered.
- Result: on **AIME and HMMT**, ST-OPSD improves accuracy over vanilla OPSD and other
  interventions, while **restoring reconsideration and reference-hallucination rates back to
  base-model levels**. (Abstract reports no absolute accuracy table — treat the delta as
  qualitative/unquantified.)
- Why it matters: this is a *first* application of activation steering to the teacher side of
  a distillation pipeline — a distinctly new direction relative to Oct 31's coverage.

**2. SRA: Selective Residual Adaptation for LLM Reasoning Enhancement** — 2610.34199 —
submitted 2026-10-25 — https://arxiv.org/abs/2610.34199
Authors: Zhenxing Dou, Kun He, Mingyang Yi, Yong Liu (cs.LG, cs.AI)
- Observation driving the method: teacher/student distribution divergences along reasoning
  paths are **highly sparse**, and target tokens "almost always fall within the student
  top-K candidate set".
- Method: plug-and-play **Discrepancy Gate** to find divergence positions + **Candidate
  Residual Adapter** for top-K logit calibration. No student-backbone updates, **no runtime
  teacher inference**. Theoretically establishes error bounds guaranteeing strict
  sequence-level gains.
- **Quantified: Pass@16 on mathematical benchmarks improved by up to +4.37 percentage points
  across Qwen3 students from 0.6B → 4B**, while general capabilities are preserved.
- Note: this is also a clean *efficiency* result — reasoning distillation without a runtime
  teacher.

**3. A Sign Law for Entropy Drift under Sampler Mismatch in RLVR** — 2610.34044 — submitted
2026-10-25 — https://arxiv.org/abs/2610.34044
Authors: Zhiyuan Wang, Jacob Steeves, Chang Liu (cs.LG, cs.AI)
- Central claim: whether RLVR entropy rises or falls is determined by **sampler mismatch**
  (rollouts drawn with top-k/top-p truncation or temperature the learner does not apply),
  not by the learning signal. A constant advantage shift changes the entropy of a softmax
  policy to first order in expectation, **with the sign fixed by the sampler**: positive
  shifts sharpen under top-k, top-p, min-p and T<1; flatter samplers flatten.
- **Quantified (2B model):** the entropy slope is linear in shifts of the net advantage under
  truncated sampling and **indistinguishable from flat under exact sampling**. Token-level
  importance ratios leave **98% of the drift** unremoved; **four clipped minibatch updates
  per batch amplify it sevenfold**. Over 100-step runs a net-zero baseline only *delays*
  entropy explosion.
- **Quantified (9B reasoning model):** zeroing the net advantage or renormalizing the
  learner **raises held-out accuracy after ten steps by +8.2 and +8.8 points** over the
  uncorrected rule — with **no difference under exact sampling**.
- Why it matters: a sharp, falsifiable theory connecting RLVR entropy collapse to decoding
  hyperparameters; "entropy collapse is not just a reward-hacking symptom".

**4. DoubleFree — "Exploiting Exploration History for Rollout-Free Multi-Task LLMs Training"** —
2610.34272 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34272
Authors: Yingping Wang, Min Cai, Chenyu Yuan, Xi Ye, Zhijiang Guo (cs.LG, cs.AI)
- Reframes multi-task post-training as *domain-wise exploration → cross-domain exploitation*:
  standard multi-teacher on-policy distillation (MOPD) keeps teachers **online** throughout
  consolidation, which is expensive. DoubleFree reuses the **historical trajectories**
  collected during domain RL and precomputes teacher supervision → rollout-free,
  online-teacher-free consolidation.
- **Quantified: 2.99–5.75× consolidation speedup and 80.9–90.1% fewer GPU-hours** on math,
  code and instruction-following across Qwen3-4B, Qwen3-8B and SmolLM3-3B, with comparable
  multi-domain performance.
- Why it matters: a concrete, large efficiency win in the RL post-training pipeline — the
  part of the stack that dominates reasoning-model training cost.

### B. Model efficiency, sparsity, attention, parameter sharing

**5. INTRA: Interleaved Non-contiguous Token spaRse Attention** — 2610.34056 — submitted
2026-10-25 — https://arxiv.org/abs/2610.34056
Authors: Yuxuan Xia, Wenbo Lu, Shaoyi Zheng, Shengjie Wang (cs.LG)
- Hardware-aware **static** sparse attention built on a relay-communication view under
  Computational Query Set (CQS) constraints: Scatter forms broad "relay" groups, Gather
  reconnects them in the next layer, giving global reachability without covering all
  token-token interactions. Custom FlashAttention-style kernel computes structured indices
  at runtime and packs non-contiguous tokens densely.
- **Quantified: 1.53× speedup on A100 for 2K FLUX.1-dev generation** with *better* measured
  image quality than evaluated CLEAR configurations after LoRA self-distillation;
  attention-only benchmarks show **up to 8.4× and 10.4× speedups over MoBA and
  density-constrained NSA** respectively; improved long-context prefill efficiency on
  LLaMA-3.1-8B with strong teacher-forced retrieval under matched LoRA adaptation.
- Code: https://github.com/NovTi/INTRA (v2 adds code link).

**6. Decoupled Prune-and-Reconstruct (DPR): Training on a Compact Core with Double-Layer
Sparsification** — 2610.34140 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34140
Authors: Siqi Gu, Gaozhen Ma, Liheng Huang, Weiqi He, Jiawen Luo (cs.LG, cs.AI)
- Inverts the usual pruning trade-off: prune for efficiency, then **reconstruct** for
  accuracy. One compact node set serves as both the encoder's training graph and, at
  inference, the anchor from which a sparse structure-aware decoder rebuilds every pruned
  node.
- **Quantified: the deployed 30%-budget model trains in 1,450 MiB peak memory on one 6 GB
  GPU and recovers 96.9% of its dense-reconstruction reference**, beating a same-GPU rerun of
  the edge-sparsification baseline DSpar by **+1.36 pp at 50.1% lower peak training
  memory**; versus a full-batch no-prune encoder the deployed point pays a measured **2.64
  pp accuracy tax for a 2.8× smaller training footprint**. Pruning *without* reconstruction
  leaves the encoder at 0.378 in the same 40-epoch window. All-node serving is **46× faster**
  than sampling-based GraphSAGE (giving up ~5.4 pp accuracy). Scales to a **2.45M-node
  production graph at 6,285 MiB** peak training memory.
- Caveat: the 41.8%-budget M4 point is scored on a coarsened super-node graph with its own
  split and is reported separately — not comparable to original-node baselines.

**7. Recursive CLIP: Vision-Language Distillation with Looped Transformer Blocks** —
2610.34563 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34563
Authors: Szymon Mazurek, Alberto Presta, Michał Byra (cs.LG, cs.CV)
- Holds N·M fixed to ViT-B depth while progressively increasing parameter sharing: rCLIP
  (recursive vision encoder) and r²CLIP (recurrence in both encoders), trained either
  directly or distilled from a strong ViT-B/16 teacher pretrained on DFN-2B but with much
  smaller CC3M/CC12M data.
- **Quantified (qualitative direction only in abstract):** CLIP "tolerates substantial
  recurrent block reuse", with the effect depending on encoder and downstream task;
  parameter efficiency comes for free since fewer distinct blocks are stored and adapted.
  Evaluated on zero-shot classification, cross-modal retrieval, few-shot learning, visual
  grounding and concept unlearning. No headline speedup figure in the abstract.

**8. FreezePlan — "Freeze What Is Settled, Cache What Is Smooth: Spatial Freezing Keeps Step Caching in Its Low-Error Regime"** — 2610.34177 — submitted
2026-10-25 — https://arxiv.org/abs/2610.34177
Authors: Baiyan Li, Ganxuan Yang (cs.LG, cs.CV, cs.MM)
- Answers "how should a speed-up target be split between step caching and region freezing?"
  for instruction-based diffusion-transformer image editors. Freezing lowers the *per-step*
  cost, so the step cache can hit the same target with a conservative, low-error threshold.
- **Quantified: 5.05× faster end-to-end at 29.8 dB PSNR** on a pre-registered test split
  (Qwen-Image-2.1) with no significant drop in a VLM judge score; TaylorSeer alone at 5.02×
  reaches only 23.5 dB; the curve extends to **5.99× at 28.0 dB**. A fitted per-step cost
  model predicts held-out latency with **median error 4.0%** and reproduces re-implemented
  region-method speed ceilings (2.73× predicted vs 2.70× measured for RegionE). Swapping in
  prior methods' region selectors under this schedule costs only 0.5–0.6 dB median PSNR —
  i.e. **the gain lives in the schedule/budget split, not the selector**.
- Methodological note: pre-registered test split — a rarity in this literature.

**9. The Coordination Tax and the Heterogeneity Dividend: Break-Even Conditions for
Multi-Agent LLM Pipelines** — 2610.37700 — submitted 2026-10-25 (announced in the Oct-30
batch) — https://arxiv.org/abs/2610.37700
Authors: Andreas Zettl, Diego Gosmar (cs.MA, cs.AI)
- Closed-form model setting the *coordination tax* (decomposition overhead + per-handoff
  protocol cost) against the *heterogeneity dividend* (routing work to a cheaper model),
  with a break-even threshold and a feasibility bound **α < 1/r**. Measured with the Open
  Floor Protocol (OFP) on 135 HumanEval + ClassEval tasks, 2,430 runs, six architectures,
  Claude Opus 5.5 + Haiku 5.5.
- **Quantified: OFP adds 7.2 ms per handoff = 0.11% of pipeline wall time. Decomposition
  does NOT pay: a planner-coder-reviewer pipeline costs 3.22× a single strong call, takes
  3.24× as long, and solves no more tasks.** Moving planner and reviewer to the cheap model
  cuts cost to 0.39× but changes pass@1 by **−6.7 points**, leaving it dearer, slower and
  less accurate than the single call; the break-even forecast misses by **−19%** because
  cheap roles inflate token volume. **The saving is per-task model choice: an oracle between
  the two single calls solves 94.3% of runs at half the strong call's cost per solved task.**
- Why it matters: a falsifiable cost model for agent orchestration that directly contradicts
  the default "multi-agent pipelines are worth it" assumption.

**10. Accelerated Dataflow: scaling inference in streaming data analytics with efficiency** —
2610.22731 — submitted 2026-10-15, announced in the Oct-30 batch — https://arxiv.org/abs/2610.22731
Authors: RuiLong Jiang, Dustin Rhodes, Danny McCormick, Yuta Labur, Reza Rokni (cs.DC, cs.DB,
cs.LG)
- Co-designed autoscaling on heterogeneous worker pools plus prefix-aware batching for LLM
  inference inside Google Cloud Dataflow streaming pipelines.
- **Quantified: 1.5×–2× throughput for streaming pipelines using LLMs at similar latency, with
  up to 75% peak resource savings and 84% lower peak tail latency** vs. existing streaming
  data-processing systems.

**11. Nonlinear Dynamical Systems as Scalable and Efficient Physical Neural Networks** —
2610.40471 — submitted 2026-10-15, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.40471
Authors: Tyler King, Magnus Saebo, Jeremie Laydevant, Haoting Zhen, Maxwell G. Anderson,
Tatsuhiro Onodera et al. (cs.LG, cond-mat.dis-nn, cs.ET, cs.NE)
- Physical (analog) neural networks trained with modern ML practice including model
  compression, plus an MLP-Mixer-inspired parameter-efficient architecture around one
  dynamical system.
- **Quantified: up to 99.2% accuracy on MNIST** (vs. substantially lower for prior physical
  NNs); **up to 86.4% on CIFAR-10 (92.2% with pretraining + knowledge distillation) vs. 64%
  for the same system without the mixer architecture**, using **>5× fewer trainable
  parameters** than baseline. Back-of-envelope inference energy/speed estimates suggest
  orders-of-magnitude potential over digital-electronic NNs (simulation studies only).

### C. Agentic LLMs, agent interfaces, agent safety

**12. Matched Capabilities, Different Behaviors: A Controlled Study of MCP and CLI Interfaces
for Language Agents** — 2610.34298 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34298
Authors: Zhenning Shi, Liang Pang, Yongqi Li (cs.CL, cs.AI)
- Introduces **MICA** (Matched Interface Comparison and Analysis): MCP and CLI rendered from
  a shared semantic action contract, with decoded actions routed through the same runtime, so
  interface representation becomes the *only* variable. Six models × three interactive
  environments.
- **Quantified: structured trajectory divergence in 94.3% of 2,004 episodes**, with early
  differences propagating through subsequent interaction. Differences extend beyond surface
  validity to semantic action selection, failure pathways and recovery. Their **DART**
  (Decoupled Action Realization and Targeted Repair) **improves benchmark score in all six
  settings by up to 9.0 points** and **reduces MCP token cost in all three environments by up
  to 27.1k tokens per task**.
- Why it matters: treats *how* a tool is exposed (MCP vs CLI) as a controlled experimental
  variable — a new framing for agent research.

**13. SentryBench: A Cost-Sensitive Benchmark for Adversarial Robustness of Tool-Using LLM
Agents in Public-Safety Deployments** — 2610.34535 — submitted 2026-10-25 —
https://arxiv.org/abs/2610.34535
Authors: Md Abu Yusuf, Oyshi Tabassum Aditi, Md Faysal Hosain Mazed (cs.AI, cs.CL)
- Argues the standard assumption that "refusing is the safe default" breaks in deployments
  where an over-cautious agent dispatching no help fails as surely as one firing a false
  alert. Scores agents on a **two-sided, cost-sensitive frontier**: attack success,
  over-refusal (missing a real emergency) and over-reaction.
- **Quantified: 840 scored episodes across three frontier models and three defenses.**
  Provenance: naive caution is harm-dominated whenever it refuses more genuine emergencies
  than the attack harm it averts; a targeted trust gate adds **zero over-refusal on clean
  input**. Empirically, refuse-more caution drives over-refusal to **100% on two of three
  models** for at most a 3.7-point change in attack success and yields the worst harm
  everywhere, whereas the trust-gating wrapper **dominates the frontier (lowest harm on
  every model, over-refusal at or below baseline, higher containment)**.
- Important reporting caveat from the authors: provider content filters silently perform
  part of the defending and **must be reported separately**.

**14. Holding a Steady Course: Knowledge Evolution from Expertise and Lessons for Continual
Agent Learning (KEEL)** — 2610.34043 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34043
Authors: Wenzhe Fan, Benjamin Steenhoek, Gaurav Mittal, Yu Hu (cs.LG, cs.AI)
- Agent-agnostic framework using **verifier evidence** to convert successes into reusable
  skills and failures into corrective lessons; as evidence accumulates, skill claims can be
  supported, contradicted, replaced or retired.
- **Quantified: on the SkillFlow benchmark KEEL improves task success by +4.2 to +21.7
  percentage points over the no-knowledge baseline, vs. +2.4 to +9.6 points for SkillFlow's
  default method.** Ablations show skills and lessons are complementary.
- Code: https://github.com/microsoft/KEEL-TTCL26

**15. CaliMem: Search-Efficient Data Agent via Calibrated Memory** — 2610.34500 — submitted
2026-10-25 — https://arxiv.org/abs/2610.34500
Authors: Hanze Li, Athan Z. Li, Feiyang Kang, Jiachen T. Wang, Yuhan Chen (cs.LG, cs.AI)
- Agentic search over data-curation recipes (test-time curation). A persistent-memory agent
  over-generalizes claims beyond observed conditions; CaliMem requires the agent to **predict
  the outcome of each proposed policy before executing it**, and uses the prediction error to
  retain/revise claims and specify the conditions under which a conclusion holds.
- **Quantified: across biological and LLM post-training tasks CaliMem consistently beats
  fixed curation baselines and published methods, and exceeds full-data training by up to
  19.4%.** Setup spans 55 dataset–model tasks.

**16. MultiEvoSkill: Structure-Aware Multi-Agent Skill Evolution for Generalizable Skill
Artifacts** — 2610.34260 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34260
Authors: Kounianhua Du, Jianxing Liu, Ruoshui Shan, Yucheng Zhang, Ke Li (cs.AI, cs.CL)
- Skill documents as the default adaptation surface for frozen LLMs. Three components:
  (1) a **skill compiler** that casts skills as a *typed graph* with explicit procedural
  topology (parallel branches, dependencies) instead of sequential prose; (2) a heterogeneous
  agent system proposing revisions; (3) structure-aware debate/evolution resolving candidate
  edits under dependency and importance constraints, with multi-dimensional gating on
  information gain and topological correctness.
- **Quantified: abstract reports only "various experiments and ablations against SOTA
  methods validate the effectiveness and generalization of MultiEvoSkill" — no headline
  numbers in the abstract.** (Cross-model skill portability is the claim, not a number.)

**17. NameTrap: Steering AI Coding Agents Toward Security Vulnerabilities via Variable Names** —
2610.34253 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34253
Authors: Chieh-Yuan Chang, Guan-Wei Chen, Chia-Yi Hsu, Chih Yang, Chia-Mu Yu (cs.SE, cs.CR,
cs.AI)
- Source-code poisoning attack that **only renames identifiers** in third-party Python files
  to steer coding agents toward attacker-targeted CWEs. The released bait contains **neither
  instructions nor vulnerable statements**.
- **Quantified: across six AI coding agents, ten underlying models and four CWE categories
  (CWE-78/79/327/502), overall attack success 22.5%–56.0% across the six agents, reaching
  75.0% for certain agent–model configurations**, and clearly outperforming random renaming,
  neutral renaming and the prior identifier-poisoning attack XOXO. Effective under
  Traditional-Chinese prompts and across models; **a security-reminder defense fails to
  consistently prevent the vulnerability**. Three AI-based security analyzers and four
  static analyzers **report none of the targeted weaknesses** in the poisoned files.

**18. CyberDual: AI Attackers versus AI Code Reviewers in Real Software Maintenance** —
2610.34435 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34435
Authors: Chenyuan Yang, Hwiwon Lee, Jongseong Kim, Yihan Yang, Dongjun Kim (cs.SE, cs.AI)
- Arena where attacker agents hide an exploitable bug in real upstream maintenance and
  reviewer agents try to find/repair it; **execution decides each match** (the attacker's
  PoC is re-run on post-review code), so agent self-reports cannot game the score.
- **Quantified: three agentic reviewers catch 85–91% of 1,088 valid attacks from six
  attackers.** But when the attacker spreads the bug over real upstream commits, **about one
  in six attack slots still ends with a working exploit**. The strongest attacker has open
  weights: **GLM 5.3 almost never refuses and its attacks make up 13 of the 28 that get past
  all three reviewers**. When they miss, Claude reviewers mostly *approve* the attack while
  GPT-6-Sol mostly *repairs the wrong code*; a second-vendor reviewer catches ~2/3 of a
  Claude reviewer's misses. Claude Sonnet 5 refuses **one in five** attack slots yet attacks
  about as well as GPT-6-Sol — **refusal alone does not remove attack capability**. GLM 5.3
  in Claude Code already gets an exploit past Sonnet 5 in **17%** of its attack slots.

**19. From GPU to TPU with Coding Agents: What Works, What Fails, and What It Costs?** —
2610.34422 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34422
Authors: Hui Sun, Anderson Uchôa, Wesley K. G. Assunção (cs.SE, cs.AI, cs.LG)
- Dataset of **148 PyTorch ML research projects**; Claude Code migrates **ten** from NVIDIA
  GPU to Google Cloud TPU, independently assessed for runnability, numerical behaviour,
  intended hardware, project goal and performance.
- **Quantified: 8 projects meet the project-goal criterion; migrations require 2.4 human
  interventions on average. Of 70 execution attempts, 53 fail (76%), and 26 of those
  failures (49%) raise no error at all.** Most frequent cause is repeated compilation and
  execution inefficiency; third-party library interactions can silently change the
  computation — in one four-chip migration the agent **reports success despite a gradient
  clipping change that reduces accuracy from 86.53% to 84.89%**. In one workload TorchTPU
  trains **1.86× faster and 25% cheaper per run** than the GPU.
- Practical conclusion: mandate independent reference runs and workload-specific acceptance
  criteria for agent-driven migrations.

**20. Outcome-Aware Agents: When Does Causal Structure Help a Forward Model Foresee the
Consequences of Actions?** — 2610.34385 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34385
Author: Mallesh Madapathi (cs.AI, cs.LG)
- Compares AC-LSCM (per-factor mechanisms over a learned sparse graph, actions as
  do-interventions) against three unstructured forward models on seven random SCMs, with
  do-wrapper and counterfactual-data controls.
- **Quantified: AC-LSCM recovers the true graph exactly on every 10-variable graph and has
  lower three-step prediction error than every baseline in all 396 paired comparisons; its
  excess safety violations over an oracle are 0.25 of the no-model level on 10-variable
  graphs (best baseline 0.31) and 0.41 on 20-variable graphs (0.53)**, with the largest
  margin for two-variable actions never seen in training (0.18 vs 0.28).
- **With learned latent factors the same model is worse than the baselines** — the choice of
  factors matters more than the do-operator or counterfactual data.
- **Retraction honesty: this version explicitly withdraws an earlier headline "36× safety
  improvement" claim**, which came from a task testing only extrapolation of action values.
  Code and per-seed results released. Worth flagging as a positive example of self-correction.

### D. New benchmarks and evaluation methodology

**21. How Humans Learn Unfamiliar Worlds: A Think-Aloud Dataset on ARC-AGI-3** — 2610.34523 —
submitted 2026-10-25 — https://arxiv.org/abs/2610.34523
Authors: Shuzhi Liu, Archana Warrier, Dat Nguyen, Chengqi Zheng, Kevin Ellis (cs.AI, cs.LG,
cs.CL)
- **First dataset recording how humans discover and use mechanisms of novel environments**
  (ARC-AGI-3 testbed): **144 trajectories from 64 participants across 25 public games**, each
  pairing time-synchronized actions with think-aloud audio, **plus 250 trajectories from LLM
  agents with and without harnesses** on the same games. Annotates mechanism triggers and
  recognition, action purposes, errors and recovery.
- **Quantified: qualitative representations are far more common in successful human
  trajectories than successful LLM trajectories (50.0% vs 14.3%).** Humans more often explore
  unfamiliar situations without a concrete hypothesis; hypothesis testing is common in both.
  Under L4-style pressure the model flips once and freezes (1.9 verdict changes over ten
  turns), under L1 it never settles (7.4 changes).
- Dataset: https://arc3-human-think-aloud.github.io/

**22. BAC-Bench — "Repairing Broken Access Control in Web Applications with LLMs: An Empirical Benchmark Study"** — 2610.34290 —
submitted 2026-10-25 — https://arxiv.org/abs/2610.34290
Authors: Mingrui Liu, Liang He, Xinchu Wang, Yeting Li, Dongxu Han (cs.SE, cs.CR, cs.AI)
- **First benchmark for broken-access-control repair: 46 real-world BAC vulnerabilities** from
  six widely used web applications across four programming languages, each with a sandboxed
  runtime, a PoC validation program and a functional test program. Plus a strategy framework
  characterizing any patch along Position / Coverage / Mechanism / Content.
- **Quantified: eight base LLMs and two commercial agents evaluated — single-turn base LLMs
  repair 37.68% on average; two minimal scaffolds (Apply-Feedback, Navigate-and-Locate) raise
  the average to 66.03%; the best base LLM reaches 75.36%, close to the best agent's
  78.99%.** Some LLM-generated patches **surpass the official patches**, and one
  **incidentally closed a zero-day that had lain dormant for three years**.

**23. How Much Information Can We Fit inside a Transformer?** — 2610.34553 — submitted
2026-10-25 — https://arxiv.org/abs/2610.34553
Authors: Amirhossein Basareh, Rishabh Sanjay, Daniel de Mello, Abulhair Saparov (cs.LG, cs.CL)
- Re-examines the observed linear facts-vs-parameters scaling law, determining the *smallest*
  model that can perfectly memorize a given fact set via extensive Bayesian-optimization
  hyperparameter search, on random independent (subject, relation, object) triples.
- **Quantified: memorization capacity grows EXPONENTIALLY with transformer dimension** —
  equivalently the minimum dimension d_min required to memorize N facts grows
  **logarithmically in N**. Across **11 dataset sizes spanning N = 45 to 49,920**, a
  lack-of-fit F-test does not reject the logarithmic fit (with offset) but **rejects all other
  alternatives including power-law**. Along the depth axis at fixed width, maximum
  memorizable dataset size grows **sublinearly** with layers. Structured data (symmetric
  relations, two-hop composition) is exploited further to improve capacity.
- Code: https://github.com/Magronox/transformer_information_capacity

**24. "Conviction Without Evidence: Verdict Stability Is Independent of Visual Grounding in Medical Vision--Language Models"** —
2610.34520 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34520
Authors: Federico Felizzi, Francesco Andrea Causio, Bianca Destro Castaniti, Olivia Riccomi,
Michele Ferramola (cs.CV, cs.CL)
- Image-substitution protocol × two levels of adversarial pressure on 60 Italian State
  Examination items.
- **Quantified: fabricated consensus (L4) overturns 94.4% of verdicts with the real image and
  98.1% without (Δ = +0.037; one-sided 95% upper bound +0.105); contentless doubt (L1)
  overturns 62.5% vs 51.8% (Δ = −0.107, 95% CI [−0.209, −0.001])** — the point estimate runs
  *opposite* to what a grounding detector requires. Flips are almost entirely corrupting
  (99/100). The model flags the blank image at baseline on 35/60 items and abstains on 4–6,
  yet **those abstentions do not survive contact with pressure**.
- Conclusion: no epistemic signal a user could consult distinguishes a grounded diagnosis
  from a confabulated one.

**25. Execution Logs Sway VLM Judges of Robot Progress** — 2610.34151 — submitted 2026-10-25 —
https://arxiv.org/abs/2610.34151
Authors: Weiyan Zhao, Sunny Yang (cs.LG, cs.RO, cs.AI) — SPAIS Workshop @ CoRL 2026
- **Quantified: on clips where the robot is losing progress, adding one log line saying the
  robot *is* making progress flips correct verdicts to "progress" 10–35 percentage points more
  often than a neutral line** across Gemini, Qwen and GPT judges. A one-line warning that the
  log may be wrong removes most of the effect. Selected fake "task complete" claims flip half
  of Qwen's correct verdicts (vs one-tenth for unrelated log lines) with **no detectable
  effect on Gemini**.

**26. SHIFT-JEV: Certified Abstention and Gain-Gated Continual Adaptation for LLM-Based
Decision Models under Distribution Shift** — 2610.34329 — submitted 2026-10-25 —
https://arxiv.org/abs/2610.34329
Authors: Muhammad Atif Saeed, Azka Atiq, Adarsh Kumar, Akhtar Jamil, Uzair Iqbal (cs.LG, cs.AI)
- **Quantified: on 10 shifted test environments with Qwen3-0.6B, Qwen3-4B (3 seeds each) and
  Phi-4-mini, fine-tuning with KL anchors + temperature scaling lowers calibration error
  under shift from 0.289 to 0.087.** At a target risk of 10%, a learned uncertainty score with
  a certified threshold exceeds the target in **3–5 of 27** environment-seed tests, vs **5–15**
  for max-probability scoring and **9–14** for conformal prediction sets. A chi-squared test
  on predicted labels detects **95–99% of class-prior shifts** that confidence- and
  embedding-based detectors miss. In continual adaptation SHIFT-JEV reaches **70.5% accuracy
  on Qwen3-0.6B**, above replay/LwF/EWC/fine-tuning in every seed; on Qwen3-4B its
  conservative gate leaves it **0.4–1.4 points behind** them.

### E. Reasoning-architecture & interpretability additions (never reported, Oct-25 batch)

**27. From Document Layout to Causal Topology: An End-to-End Architecture for Temporal Causal
Reasoning** — 2610.34094 — submitted 2026-10-25 — https://arxiv.org/abs/2610.34094
Authors: Zhifeng Yang, Wei Luo, Yongjian Chen, Shiqi Ou (cs.AI, cs.CL, cs.LG)
- Two architectures: training-free neuro-symbolic **TCR-Agent** (external causal graph
  instantiation + symbolic intervention engine) and end-to-end **TCR-Former**, which
  internalizes the mechanisms into attention via a Causal-Topological Attention Mask and
  temporal span biases.
- **Quantified: on the TempoCausal benchmark TCR-Former achieves accuracy 16.5% higher than
  SOTA methods, outperforming large models such as GPT-5.4 and DeepSeek-V3.2 with only ~8.6B
  parameters.** Key finding: a **"structure-reasoning disconnection"** — external symbolic
  constraints and chain-of-thought improve reasoning *steps* but fail to improve deep causal
  deductive capability.
- Note: the 16.5% figure is stated as relative; treat with care.

**28. Alignment via Generalization (Aligned-PAC learning)** — 2610.34242 — submitted
2026-10-25 — https://arxiv.org/abs/2610.34242
Authors: Shai Shalev-Shwartz, Amnon Shashua (cs.LG, cs.AI)
- Reduces alignment to generalization: does success on the *requirements used for training*
  extend to requirements the system has not encountered? Intention is represented as a
  *collection of specific requirements* rather than one training objective. Shows how
  independent evaluation provides rigorous evidence of alignment across represented
  requirements and establishes how much evaluation is needed; develops an optimization method
  that under explicit assumptions combines learned models to satisfy the training
  requirements.
- Honest scope statement by the authors: **"does not solve alignment in full"** — choosing
  requirements that faithfully capture intentions, and understanding when learning
  generalizes to unseen requirements, remain open. No quantitative results in the abstract.

**29. From Geometry to Behavior: How Instruction Exposure Unlocks Latent Rhetorical Directions
in LLMs** — 2610.37685 — submitted 2026-10-14, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37685
Author: Shengjie Xu (cs.CL, cs.AI)
- Extracts an "Analogy Vector" from the residual stream via difference-in-means and shows it
  enables steerable explanation style across **seven instruction-tuned models** (Gemma-2,
  Llama-3.1, Qwen-2.5; 2B–32B).
- **Quantified: harmonic mean improves from 3.22 to 3.94 (+22%) for Gemma-2-9B-IT on 300
  held-out test prompts** (with a small human validation study of the LLM judge).
- **Central finding: a gradient of behavioral accessibility.** Across seven matched
  base–instruct pairs, the analogy direction exists in *every* base model, but its
  accessibility under linear intervention scales continuously with instruction exposure
  during training. Gemma-2 (strict pretraining/IT separation) shows **flat steering
  landscapes — present but behaviorally inert**; Qwen-2.5 (instruction data woven into
  pretraining) is already partially accessible before fine-tuning, with **base-instruct
  cosine similarity 0.94–0.97 for Qwen vs 0.37–0.66 for Gemma**.
- Why it matters: challenges the binary "base vs instruct" framing — the operative variable
  is instruction exposure across the *whole* training pipeline.

**30. The Best Second Opinion Is Right Where the Primary Is Wrong: Partner Selection for
Selective Span Tagging** — 2610.37678 — submitted 2026-10-12, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37678
Author: Varun Kotte (cs.CL, cs.LG)
- **Quantified: across eight tagger types, three seeds and three English benchmarks (576
  evaluated primary–partner pairings), choosing the partner by held-out accuracy on the
  primary's errors recovers 82% of the best partner's gain, vs 69–70% for span F1 or a random
  pick.** The rule was frozen before a fourth dataset was chosen and replicated there
  (**Spearman 0.40 vs 0.04 for span F1**). Partner value is directional; the predictive
  distribution is the second opinion — hard labels discard half of a partner's value, and
  scoring the served label improves **94% of pairings**. For LoRA-tuned decoders,
  independently trained partners beat every readout of the primary network. Applied zero-shot
  to **51 MASSIVE locales**, every primary has a helpful trained partner in every locale.

**31. Bouba Beats Kiki, and Other Regularities in the Subjective Preferences of LLMs** —
2610.37692 — submitted 2026-10-21, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37692
Authors: Katy Blumer, Jon Kleinberg, Ravi Kumar, Andrew Tomkins (cs.CL, cs.AI, cs.CY, cs.LG) —
**to appear at NeurIPS 2026**
- Frames the methodology gap for *subjective* evaluation: instead of "how often is the model
  right", asks "how do models choose among multiple viable responses". Restricted to
  short-form content — numbers, baby names, fictional cities — and identifies **29 aspects**
  of these examples (length, alphabetic order, popularity, vowel mix, spoken sound, …).
- **Quantified: models show strong and reproducible preferences for/against some aspects;
  variations in how the preference is *expressed* cause aspects to activate or deactivate;
  overall preference distributions among pairs may vary radically on seemingly unimportant
  changes to the question, raising new questions about manipulation; and if models both
  create the alternatives and rank them, there are unexpected interactions between the two
  stages.**
- Newly released by a high-profile author group; likely to be cited.

**32. Network Topology Does Not Matter: The Breakdown of Classical Consensus in LLM Populations**
— 2610.37699 — submitted 2026-10-24, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37699
Author: Sahil Rajesh Dhayalkar (cs.MA, cs.AI)
- **Quantified: continuous credence extracted deterministically from token-level
  probabilities across eight instruction-tuned models and 73,080 controlled exchanges.**
  LLMs systematically **violate convexity**, updating outside the hull of observed opinions,
  exhibiting **active repulsion (negative weights)** that breaks row-stochastic modeling and
  standard bounded-confidence repairs. Scaling empirically fitted operators to **10,000-agent**
  simulations: **algebraic connectivity explains almost none of the final outcome variance**;
  dynamics are governed by the model's internal update bias and message framing.
  Populations of several models (**up to 7B parameters**) reliably compound small local
  drifts to **reach confident agreement on objectively false claims regardless of network
  structure** ("collective delusion").

**33. Cassette-Editor: A Video Editing Agent That Edits the Way You Do** — 2610.37690 —
submitted 2026-10-19, announced in the Oct-30 batch — https://arxiv.org/abs/2610.37690
Authors: Zhixin Zeng, Jiahao Zhong (cs.MM, cs.AI)
- Deliberately minimal agent interface: one tool reads the project, one writes to it; every
  write passes through the same executor/rules/commit service as manual edits and either
  commits atomically or is rejected with located diagnostics and repair options.
- **Quantified: in a controlled experiment a real model is shown 277 of its own committed
  edits after damaging them — it corrected nearly every call with full or minimal feedback,
  but locating each problem cut the input tokens a correction needed to less than half**, and
  its corrections dropped other model-written values in one case rather than seven.

**34. Rank-Aware Differentially Private Release of Listwise Preferences for LLM Alignment** —
2610.37682 — submitted 2026-10-13, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37682
Authors: Junwei Chen, Manjiang Yu, Pengpeng Qiao, Yang Cao (cs.CL, cs.AI)
- Explores **listwise preference feedback under local differential privacy**, which prior
  work treats only pairwise. A full ranking has high sensitivity; a **rank-aware exponential
  mechanism** privatizes listwise data into a low-sensitivity granularity by sampling a
  fixed-size binary partition and concentrating noise near borderline items rather than
  perturbing all items uniformly as randomized response does.
- **Quantified: consistently outperforms existing LDP baselines at matched privacy budgets**
  on downstream LLM alignment tasks. (Abstract gives no absolute numbers.)

**35. "One Confidence Threshold, Unequal Coverage: Language Gaps in Typed Decision Interfaces and How Translating Inputs Reduces Them"** — 2610.37688 — submitted 2026-10-17, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37688
Authors: Junwei Yao, Yongxi Zhou, Zike Yang, Zhijun Wang, Jianan Liu, Yanxian Chen et al.
(cs.CL, cs.AI, cs.LG)
- **Quantified: confirmatory study, three vendors' interfaces, 1,000 MASSIVE items each in 51
  languages, threshold 0.9. Even when answered correctly in both English and another
  language, the English version clears the threshold more often by 8.6–11.7 percentage points
  on average.** Observed coverage (share handled automatically) is lower than English's in
  every other language, while gated requests are rarely wrong. The gap **persists when every
  language is reweighted to the same accuracy**, and standard ECE fails to detect it on one
  interface. Per-language thresholds fitted to the same 5% error target **do not close the
  gap**. **Translating inputs into English nearly closes the gap at 0.9** but leaves English
  ahead at that error target. Requests written natively in African languages show the same
  directional gap when English is the human translation.
- Recommendation: report per-language coverage at the operating threshold.

**36. DuQUAD: A Dual-View Framework with Quality-Aware Evidence Pruning for Multi-Document
Question Answering** — 2610.37701 — submitted 2026-10-25, announced in the Oct-30 batch —
https://arxiv.org/abs/2610.37701
Authors: Yeonjun Choi, Seyeon Jeong, Jong Wook Kim, Beakcheol Jang (cs.IR, cs.AI, cs.CL)
- Mitigates **Lost in the Middle** with a Local Agent guided by a Structural Fusion Score plus
  a Global Agent reasoning over the full document set, plus quality-scored, sentence-level
  evidence pruning.
- **Quantified: consistently outperforms strong Lost-in-the-Middle mitigation baselines
  (hybrid retrieval + reranking, multi-agent reasoning, context optimization), improving
  accuracy by 3.0% on average over the strongest competing baseline and gold evidence recall
  by 9.4%, while substantially reducing computational cost** versus existing multi-agent
  frameworks.

**37. LLM-Integrated Bayesian State Space Models for Multimodal Time-Series Forecasting** —
2510.20952 — submitted 2025-10-23, announced as a cross-list in the Oct-30 batch —
https://arxiv.org/abs/2510.20952
Authors: Sungjun Cho, Changho Shin, Suenggwan Jo, Xinya Yan, Shourjo Aditya Chaudhuri,
Frederic Sala (cs.LG, cs.AI)
- **Quantified: on the TextTimeCorpus benchmark LBS improves the previous state of the art by
  13.20%** while providing human-readable summaries of each forecast. Combines an SSM backbone
  (temporal dynamics of latent states generating both numerical and textual observations)
  with a pretrained LLM for posterior state estimation and textual decoding consistent with
  the latent trajectory; flexible lookback/forecast windows and principled uncertainty.
- Note: originally an Oct-2025 submission; surfaced only now as a cross-list.

### F. Also never-reported (lower on-topic relevance, noted for completeness)

| ID | Date | Title | Why listed |
|---|---|---|---|
| 2610.37671 | 2026-09-06 | The FlightFinder Occurrence Corpus: harmonising 128 aviation-safety source codes into one deduplicated cross-national accident dataset | New dataset/benchmark (cs.CL, cs.DL). 279,485 occurrences, 131,882 attached narratives from 128 source codes; one provenance row per source; auto-merge band applied to 3,441 merges, a random draw of 60 across five adjudicated samples (200 pairs) found no error, exact two-sided 95% Clopper-Pearson upper bound on false-merge rate 6.0% (= 205 pairs). |
| 2610.37682 | 2026-10-13 | Rank-Aware Differentially Private Release of Listwise Preferences for LLM Alignment | Listed above (#34). |
| 2610.37684 | 2026-10-13 | An Introduction to Large Language Models for Scientists and Professionals (Michelucci) | Textbook-style intro covering tokenisation, embeddings, prompting, instruction hierarchies, RAG, agents, tools, workflows, Ollama/Open WebUI hands-on. Useful as a practitioner reference. |
| 2610.37686 | 2026-10-16 | Where Planning Changes the Outcome of Orbital Games (OrbitalGym) | JAX multi-agent planning benchmark (cs.MA, cs.AI, cs.RO), batched GPU simulation over PD / LQR / MPPI / MCTS. Pursuit-evasion: the propellant ratio decides most encounters — pursuer policy changes capture probability by ≥10% in at most 15 of 90 capability configurations (against five of six evader policies); lady-bandit-guard: policy matters more — a better guard policy raises defense probability by ≥10% in 56 to 74 of 90 configurations. |
| 2610.37689 | 2026-10-18 | GenAI as an 'Invisible Hand' in Opinion Dynamics: Evidence from a Group-Level Simulation Study | Simulation of 50,000 group discussions across 50 controversial statements, three LLMs, varying agreeableness and personalization in homogeneous vs. heterogeneous groups. Profile-specific personalization increases LLM influence when the model adopts a non-neutral stance; neutral LLMs have a stronger effect in homogeneous groups. |
| 2610.37691 | 2026-10-19 | Two-Colour Zig-Zag Numberlink on Rectangles: A Forbidden-Pattern Characterization, a Constructive Polynomial-Time Algorithm, and a Lean Verification | cs.DS/cs.LG; settles the two-pair case on rectangles (NP-complete for unbounded pairs) via a finite forbidden-pattern catalogue (parity + border alternation + 65 listed corner configurations, sides ≥ 11), a constructive O((R+C)·RC) algorithm, and full Lean 4 verification with `native decide` over sides 11-22. Tangential to LLMs but a strong formal-methods result. |
| 2610.37709 | 2026-10-26 | Towards Myocardial Infarction Diagnosis: An Investigation into Machine Learning and Deep Learning Algorithms using ECG Data (Visionary V2) | cs.LG; on PTB-XL with all 15 leads, bagging ensemble of decision trees reaches 96.6% accuracy vs 87.7% with BioSPPy-processed signals; custom ResNet-50 misclassifies only 1 of 7,000 validation images; custom CNN F1 ≈98.7%; LIME/Grad-CAM/Integrated Gradients confirm attention on the waveform. Applied-ML, not LLM. |

## Harvest Stats

### Raw counts

**arXiv API (https, `export.arxiv.org/api/query`), `cat:cs.X AND submittedDate:[...]`,
max_results=2000, sortBy=submittedDate:**

| Query range | cs.CL | cs.LG | cs.AI | Unique IDs (union) |
|---|---|---|---|---|
| submittedDate:[202610250000 TO 202611012359] | 408 | 857 | 895 | **1,702** |

Per-day `published` breakdown of that union (all three categories):
- 2026-10-25 → 183
- 2026-10-26 → 476
- 2026-10-27 → 446
- 2026-10-28 → 250
- 2026-10-29 → **347** ← newest indexed submission is 2026-10-29T17:59:53Z
- 2026-10-30 / 10-31 / 11-01 → **0**

Control query `cat:cs.CL AND submittedDate:[202610290000 TO 202611030000]` → 76 entries, all
with `<published>` ≤ 2026-10-29T17:59:53Z. **No submission indexed after 2026-10-29.**

**HTML listing sweep** (`/list/cs.CL|{cs.LG|cs.AI}/{new,recent}`, parsed with curl):

| Category | /new page batch | new (entries) | cross (entries) | replacements (entries) | unique IDs on page | IDs on page not in 3,609-union |
|---|---|---|---|---|---|---|
| cs.CL | Friday, 30 October 2026 | 108 | 67 | 104 | 279 | 90 |
| cs.LG | Friday, 30 October 2026 | 213 | 159 | 236 | 608 | 221 |
| cs.AI | Friday, 30 October 2026 | 158 | 234 | 213 | 605 | 202 |
| **3 categories combined** | Friday, 30 October 2026 | **479** | **460** | **553** | **1,150** | **387** |

Section-level not-in-union breakdown (de-duplicated across the three categories):
`new` → 8 of 479 unique, `cross` → 16 of 416 unique, `repl` → 363 of 414 unique.

**All three `/new` pages still show "Showing new listings for Friday, 30 October 2026"** —
confirming there is no Nov 1 announcement batch (arXiv does not announce on weekends).

### Baseline filtering

Baselines used for filtering (all version-suffix-stripped, IDs normalized):
- `tmp/known_ids_nov01.txt` as delivered = **3,568** IDs.
- `tmp/known_union.txt` = **3,609** IDs, built by grepping every `.md`/`.json` in the
  workspace (`findings_*.md`, `cumulative_findings.md`, `archive/`, `daily_reports/`,
  `correction_log.md`, `verification_status.json`, `tmp/other_notable.md`, and the
  Oct-28→31 baseline files). The **41 additional IDs** were genuinely previously reported
  but missing from the baseline file (e.g. 2610.30162, 2610.33011, 2610.34185, 2610.34365
  appear in `findings_oct31_task1.md` but were *not* in `known_ids_nov01.txt`). Using the
  union avoids re-reporting them; using the raw baseline alone would have produced a false
  "347 new" style artifact of exactly the kind this run was warned about.
- `tmp/known_report_final.txt` = **1,942** IDs — a stricter re-scan restricted to actual
  *report artifacts* (`findings/`, `daily/`, `daily_reports/`, `archive/`,
  `fact_check_reports/`, root-level `findings_*.md`, `cumulative_findings.md`,
  `correction_log.md`), excluding every file touched on 2026-11-01.

**Verification: none of the 94 candidate IDs appears in any of the three baselines**
(`pool ∩ known_report_final = ∅`, `pool ∩ known_union = ∅`). The "never before reported"
claim therefore survives the strictest reading.

### New-vs-baseline results (against the 3,609-ID union)

Section-level parse of the three `/new` pages (ids de-duplicated across cs.CL / cs.LG / cs.AI):

| Source | Entries on page | Unique IDs | Never before reported |
|---|---|---|---|
| "New submissions" section | 479 | 479 | **8** |
| "Cross submissions" section | 460 | 416 | **16** |
| "Replacements" section | 553 | 414 | 363 (old papers, new version — not new research) |
| All sections, 3 categories combined | 1,492 | 1,150 | 387 (of which 379 are replacement/cross-list entries of older papers) |
| arXiv API, Oct-25/26 submission batch (never reported because the Oct-25/26/27 runs never happened) | — | 79 | **79** |
| Overlap API ∩ listing | — | 3 | 2610.37700, 2610.37701, 2610.37709 |
| **Total unique never-before-reported** | — | **94** | |
| Of which on-topic and detailed above | — | **37** | |
| Of which listed in section F (lower relevance) | — | **6** | |

- Never-reported "new submissions" (8): 2610.37671, 2610.37678, 2610.37682, 2610.37684,
  2610.37685, 2610.37688, 2610.37692, 2610.40471.
- Never-reported "cross submissions" (16): 2510.20952, 2610.22731, 2610.37678, 2610.37682,
  2610.37684, 2610.37685, 2610.37686, 2610.37688, 2610.37689, 2610.37690, 2610.37691,
  2610.37692, 2610.37699, 2610.37700, 2610.37701, 2610.37709.
- Union of listing new+cross = **18** distinct IDs.

Note on the 363 never-reported IDs in the "replacements" section: these are **new versions of
papers announced in earlier months** (arXiv re-lists a paper when it is revised, and re-lists
cross-listings into a category with the original v1 date preserved — e.g. 2610.37671 has
`citation_date` 2026/09/06 and v1 = Sun, 6 Sep 2026 22:19:04 UTC). They are *not* new
research and were excluded from the "new papers" count, but genuinely-new-to-us cross-lists
were kept where the topic matched (2610.22731, 2510.20952, 2610.37690, 2610.37699,
2610.37700, 2610.37701, 2610.37685, 2610.37678, 2610.37682, 2610.37688, 2610.37692).

### Coverage caveats

1. **Zero papers were announced on Oct 31 or Nov 1.** Any daily report claiming a Nov-1
   announcement batch would be wrong. The latest available batch is Friday, Oct 30.
2. **The bulk of this run's value is backfill, not new-day news.** The 79 papers from the
   Oct-25 submission batch were never reported because the Oct-25/26/27 daily runs did not
   happen (no `findings_oct2[567]_task*.md`, no `daily_reports/2026-10-2[567].md`). The
   Oct-28→31 runs only covered the Oct-26→29 batches. A subsequent run should re-verify
   this backfill is now closed.
3. **Partial topic coverage.** 79 papers from the Oct-25 batch were screened by title +
   abstract keyword scoring, not all read in full. The 37 detailed above are the on-topic
   subset; **51 additional Oct-25-batch papers** (mostly applied ML: ECG, mammography,
   battery, chemistry, materials, materials-discovery agents, crowd flow, ARIMA variants)
   were screened out as off-topic for an LLM-focused accumulator. Several of those still
   contain LLM components (e.g. 2610.34021 DeepSciReasoner, 2610.34203 MatOS, 2610.34126
   HumanoidNDM, 2610.34387 ALMOND) and could be picked up by a later run; their IDs are
   preserved in `tmp/nov01_screened_not_reported.txt` and were deliberately **not**
   baselined.
4. **No claims were independently verified against primary sources.** All quantitative claims
   are copied from the authors' own abstracts. Where an abstract reports a relative rather
   than absolute number (2610.34094's "16.5% higher"; 2610.34005's unquantified accuracy
   improvement), that is flagged inline. The 2610.34385 paper explicitly retracts its own
   earlier "36× safety improvement" claim — treat 2610.34385's numbers as the corrected ones.
5. **Author lists were truncated** to the first 4–6 names in the source XML for brevity.
6. **The `known_ids_nov01.txt` baseline was incomplete** (3,568 IDs) and the local union
   (3,609) was still only a partial view of what had been reported. Three independent
   baselines were therefore reconciled before filtering:
   - `tmp/known_ids_nov01.txt` as delivered: **3,568** IDs
   - `tmp/known_union.txt` (grep over `findings_*.md`, `cumulative_findings.md`, `archive/`,
     `daily_reports/`, `correction_log.md`, `verification_status.json`, `tmp/other_notable.md`
     and the Oct-28→31 baselines): **3,609** IDs
   - `tmp/known_report_final.txt` (a stricter re-scan limited to *report artifacts* —
     `findings_*/`, `daily/`, `daily_reports/`, `archive/`, `fact_check_reports/`, plus the
     root `findings_*.md` / `cumulative_findings.md`, excluding all files touched on
     2026-11-01): **1,942** IDs — of which only 1,517 overlap the union, confirming the
     union contains 2,092 IDs attested only by scratch/listing files rather than by an
     actual written report.
   The union and the report-artifact set are both conservative supersets of what was truly
   written up, and **none of the 94 candidates appears in any of them** (`pool ∩ report-files
   = ∅`), so the "never before reported" claim holds under the strictest available reading.
   Important: the report-artifact scan deliberately **excludes every file touched on
   2026-11-01** (`cumulative_findings.md`, `trend_analysis.md`, `last_check.json`,
   `daily_reports/2026-11-01.md`, `findings_nov01_task1.md`), because those files now contain
   16 of the pool IDs precisely because *this* run reported them. Including them would create
   the circular self-match that produces phantom "already known" IDs.
7. **`tmp/known_ids_nov01.txt` has been regenerated** to
   `known_union.txt ∪ known_report_final.txt ∪ (43 IDs written up in this file)` =
   **4,077 unique IDs**. The 43 IDs reported here are now baselined; the other **51**
   screened-but-off-topic candidates from the Oct-25 batch were deliberately **left out** of
   the baseline and saved to `tmp/nov01_screened_not_reported.txt` so a later run can still
   pick them up. The next run should rebuild the baseline from a fresh report-artifact grep
   plus the scratch-file union, or the same false-positive artifact can recur.
8. **No web_search / web_fetch was used** — everything came from curl against arXiv, so the
   task's 4-search / 1-fetch budget was left entirely unused.
