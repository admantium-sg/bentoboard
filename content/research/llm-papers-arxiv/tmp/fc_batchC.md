# Fact-Check Batch C — arXiv 2610.* batch + ReQAT
Working file: cumulative_findings.md (read-only). Section checked: "2026-10-22 (Thursday Evening)" plus the 2026-10-21 section entry for 2610.28303.

---

### 2610.30014 — Agent Behavior Maps: Locating Agents by What They Would Do, Without Running Them
- **Doc title:** Agent Behavior Maps: Locating Agents by What They Would Do, Without Running Them / **Actual title:** Agent Behavior Maps: Locating Agents by What They Would Do, Without Running Them → **MATCH**
- **Doc date:** arXiv:2610.30014v1 (Oct 21, 2026) / **Actual date:** [Submitted on 21 Oct 2026] → MATCH
- Claim bullets checked:
  - "centered action log-likelihoods on shared reference trajectories — no new environment rollouts from the target agent" → CONFIRMED (abstract, verbatim)
  - "Error bounds relate squared coordinate distances to trajectory KL" → CONFIRMED ("error bounds relating squared coordinate distances to trajectory KL under explicit assumptions")
  - "across eight cross-scored models the distances track measured trajectory KL in rank order" → CONFIRMED ("across eight cross-scored models the distances track the directly measured trajectory KL in rank order")
  - "Across 100 LLMs and four environments" → CONFIRMED
  - "ALFWorld-based coordinates support performance prediction and identify behavioural similarities" → CONFIRMED
  - "similarities persist after controlling for success rates and model size, across model families" → CONFIRMED
  - "Harness-component displacements approximately compose, with accuracy varying across components and environments" → CONFIRMED
  - Subject class in doc: cs.LG;cs.AI;cs.CL → matches arXiv listing (Machine Learning (cs.LG); Artificial Intelligence (cs.AI); Computation and Language (cs.CL))
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.30014 — **Source 2:** https://emergentmind.com/papers/2610.30014 (independent mirror, abstract + author list + date reproduced)

---

### 2610.30047 — SWE-DIVE: Multi-Turn Coding Agent Evaluation with Dynamic User Simulation
- **Doc title:** SWE-DIVE: Multi-Turn Coding Agent Evaluation with Dynamic User Simulation / **Actual title:** SWE-DIVE: Multi-Turn Coding Agent Evaluation with Dynamic User Simulation → **MATCH**
- **Doc date:** arXiv:2610.30047v1 (Oct 21, 2026) / **Actual date:** [Submitted on 21 Oct 2026] → MATCH
- Claim bullets checked:
  - "Coding agents are usually evaluated on one-shot, well-formulated prompts; real usage is multi-turn" → CONFIRMED
  - "user simulator with configurable behavioural patterns" → CONFIRMED ("a user simulator that can simulate different behavioral patterns")
  - "conversation validator that checks whether the simulator's outputs fulfil the initial requirements and steers the agent toward success" → CONFIRMED
  - "orchestrated inside a Harbor environment (agent + simulator + validator + test execution)" → CONFIRMED
  - No numeric claims in doc for this paper → N/A
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.30047 — **Source 2:** https://github.com/lorenzbrehme/swe-dive_usersim (README confirms SWE-DIVE, Harbor integration, user-simulator personas, conversation validator)
- Note (not a doc error): arXiv comments field says the paper was **accepted at a NeurIPS 2026 workshop ("Grounded User Simulation…", non-archival)**. The doc does not mention venue — no contradiction, but worth adding if venue metadata is tracked elsewhere.

---

### 2610.30103 — P2NPCBench: Paired P vs NP-Complete Problems, Hardened by Adversarial Multi-Agent Rewriting
- **Doc title:** P2NPCBench: Paired P vs NP-Complete Problems, Hardened by Adversarial Multi-Agent Rewriting / **Actual title:** "Did the Problem Actually Get Harder? Testing LLMs on Paired P and NP-Complete Problems Hardened by Adversarial Multi-Agent Rewriting" → **MISMATCH** (doc heading is a shortened/rewritten version of the real arXiv title; the benchmark name P2NPCBench is real, but it is not the paper title)
- **Doc date:** arXiv:2610.30103v1 (Oct 21, 2026) / **Actual date:** [Submitted on 21 Oct 2026] → MATCH
- Claim bullets checked (all numbers verbatim in abstract):
  - "Each NP-complete problem paired with a polynomial-time twin over the same surface (e.g. 3- vs 2-colouring)" → CONFIRMED
  - "Built with **AgentGAN**" → CONFIRMED
  - "executable validity gate keeps rewrites answer- and class-preserving" → CONFIRMED
  - "**2,114 hardened statements**" → CONFIRMED
  - "hand-verified reference human solvers" → CONFIRMED
  - "**12 problem families**" → CONFIRMED (also 12 family dirs in the repo)
  - "Every model scores lower on NPC than its P twin (**35.4% vs 63.8% pass@1**)" → CONFIRMED
  - "**95.1% of model-family pairs** fail more often on the NPC side" → CONFIRMED
  - "**tenfold time limit** lifts NPC accuracy only **28.5% → 31.9%**" → CONFIRMED
  - "failures are wrong or crashing programs, not slow ones" → CONFIRMED
  - "Hardening **narrows** the class gap **24.8 → 14.6 points**" → CONFIRMED
  - Extra detail in abstract not in doc: evaluation covered **12 proprietary and open-source models** — doc does not state the model count, no conflict.
- **Overall:** NEEDS CORRECTION (title only — every numeric claim is CONFIRMED)
- **Source 1:** https://arxiv.org/abs/2610.30103 — **Source 2:** https://github.com/Labib1610/complexity-benchmark (README confirms 12 families, NPC/P paired criteria, 3-colouring vs 2-colouring example, hardening + validity-gate pipeline)

---

### 2610.30116 — Environment Duels: A Microcosm of LLM Co-Evolution
- **Doc title:** Environment Duels: A Microcosm of LLM Co-Evolution / **Actual title:** Environment Duels: A Microcosm of LLM Co-Evolution → **MATCH**
- **Doc date:** arXiv:2610.30116v1 (Oct 21, 2026) / **Actual date:** [Submitted on 21 Oct 2026] → MATCH
- Claim bullets checked:
  - "each model **writes environments** containing a privileged hint, aiming for tasks capable solvers fail without the hint and pass with it" → CONFIRMED
  - "**Nine frontier LLMs**" → CONFIRMED (abstract "across nine frontier LLMs"; repo ranking table lists exactly 9 models)
  - "solving and authoring are distinct skills — strongest solvers are not strongest authors" → CONFIRMED
  - "**smaller models learn more** from how others played and write the hardest environments and most useful hints" → CONFIRMED
  - "Head-to-head outcomes are **transitive** (stable ranking)" → CONFIRMED
  - "independent authors **converge on the same designs**" → CONFIRMED
  - "RL study with **Qwen3.8-27B**" → CONFIRMED (repo ranking includes qwen3.8-27b)
  - "the learner's **hint lift** on an author's environments **tracks** how much training on them improves held-out reasoning/agentic performance" → CONFIRMED
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.30116 — **Source 2:** https://github.com/LLM-Duels/EnvDuels (README: 90 environments, 9 models × 10 authored environments, ranking matrix with Solve/Difficulty/Lift/Rescue/Design, qwen3.8-27b row)

---

### 2610.30132 — LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data
- **Doc title:** LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data / **Actual title:** LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data → **MATCH**
- **Doc date:** arXiv:2610.30132v1 (Oct 21, 2026) / **Actual date:** [Submitted on 21 Oct 2026] → MATCH
- Claim bullets checked:
  - "RL for long-context reasoning needs data that is long, diverse, challenging **and verifiable**" → CONFIRMED
  - "synthesis from external corpora or stronger teachers gets harder as models get stronger" → CONFIRMED
  - "model first synthesizes question, answer **and supporting evidence in a compact structured form**, then separately expands the evidence into a long multi-document context — no external data" → CONFIRMED
  - "Combines self-written **multi-hop reasoning** tasks with self-written **multi-round retrieval** tasks, trained with GRPO" → CONFIRMED
  - "Two LLMs × **five long-context reasoning benchmarks**" → CONFIRMED ("two LLMs across five long-context reasoning benchmarks"); repo names the two: Qwen3-4B-Thinking-2507 and Qwen3-8B
  - "generalizes to real tasks" → CONFIRMED
  - "**outperforms RL on externally-synthesized data**" → CONFIRMED (abstract: "outperforms both baselines"; baselines = RL on external-corpus-synthesized data)
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.30132 — **Source 2:** https://github.com/zhennan1/LongZero (README: same construction, GRPO training, two base models, released HF data)

---

### 2610.29961 — Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority
- **Doc title:** Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority / **Actual title:** Commit or Abstain? System One Decision Models, LLMs, and Missing Legal Authority → **MATCH**
- **Doc date:** arXiv:2610.29961v1 (Oct 21, 2026) / **Actual date:** [Submitted on 21 Oct 2026] → MATCH
- Claim bullets checked (all verbatim in abstract):
  - "'System One' decision models return a **calibrated probability per option** instead of generating text" → CONFIRMED
  - "CaseHOLD extended with an abstention condition: correct holding replaced in **1,670 of 5,314 items**" → CONFIRMED
  - "**4 decision models vs 6 generative LLMs**" → CONFIRMED
  - "generative LLMs still pick one in **38–86% of items**" → CONFIRMED
  - "the most cautious decision model in **30%**" → CONFIRMED
  - "matches the best generative LLM (**88.1% vs 88.2%**) at **1/55 of the cost**" → CONFIRMED
  - "Accepting the LLM's answer only when a decision model agrees **halves wrong citations**" → CONFIRMED
  - "distilling decision-model probabilities into **Qwen3-8B** without labels yields a well-calibrated local model" → CONFIRMED
  - "**Legal AI should be judged by wrong citations, not accuracy alone**" → CONFIRMED (final sentence of abstract)
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.29961 — **Source 2:** https://github.com/mmikaildemir/commit-or-abstain (README independently states 1,670 of 5,314, four decision models vs six generative LLMs, Qwen3-8B distillation)

---

### 2610.28947 — (doc label: "Sparsity vs precision")
- **Doc title:** no formal title in doc — bullet label "Sparsity vs precision" / **Actual title:** "Is 2:4 Sparsity Still Worth It? Semi-Structured Sparsity versus Quantization in LLM Inference" → label only (not a title claim); actual paper title absent from doc
- **Doc date:** Oct 20 / **Actual date:** [Submitted on 20 Oct 2026] → MATCH
- Claim bullets checked:
  - "comparing 2:4 semi-structured sparsity against dropping a precision step **at equal bits and equal tensor-core tiers**" → CONFIRMED ("at equal bits, with sparsity metadata counted, and at equal nominal tensor-core tiers")
  - "across **all six GEMM operands** of a transformer layer" → CONFIRMED
  - "on **three GPU generations**" → CONFIRMED (paper body: Ada, Hopper, Blackwell)
  - "**as long as a lower precision is available, adding 2:4 is the worse step**, less accurate *and* slower" → CONFIRMED (abstract, verbatim)
  - "because the energy 2:4 discards from each operand is worth more than the sparsity saves" → CONFIRMED (abstract: energy discarded "does not shrink with bits, while quantization error does")
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.28947 — **Source 2:** https://emergentmind.com/papers/2610.28947 (independent mirror reproducing abstract, date, categories) + PDF text check https://arxiv.org/pdf/2610.28947
- Note: the abstract also contains a "below the quantization floor" result the doc omits (2:4 still speeds linear layers 1.3–1.7× at the hardware precision floor; retrained 2:4 in FP8 on H100 → 27% higher prefill throughput, GSM8K on par; Blackwell 4:8 sparse FP4 loses more). Omission, not an error.

---

### 2610.28937 — (doc label: "Conformal prediction under inference-time shift")
- **Doc title:** no formal title in doc — bullet label "Conformal prediction under inference-time shift" / **Actual title:** "Auditing Conformal Prediction for Language Models Under Inference-Time Model Shift" → label only
- **Doc date:** Oct 20 / **Actual date:** [Submitted on 20 Oct 2026] → MATCH
- Claim bullets checked:
  - "formalizes **inference-time model shift** — a change in the conformal score distribution induced by inference *configuration* (quantization mode, temperature) rather than the input–label distribution" → CONFIRMED (abstract, near-verbatim)
  - "argues current CP evaluation protocols are matched in a way that hides it" → CONFIRMED ("CP for LLMs is typically evaluated under a matched protocol… We argue that this exposes a limitation in current CP evaluation protocols")
  - No numeric claims in doc for this paper. Abstract numbers (8 LLMs, 4 finite-label benchmarks, 12 inference configurations) are not in the doc — no conflict.
- **Overall:** VERIFIED
- **Source 1:** https://arxiv.org/abs/2610.28937 — **Source 2:** https://emergentmind.com/papers/2610.28937 (independent mirror reproducing abstract, date, categories)
- Note: arXiv comments field says **Accepted at NeurIPS 2026, Track on Evaluations and Datasets** — not reflected in the doc (omission, not error).

---

### 2610.28303 — (doc heading) "Reward Misspecification Alone Degrades Chain-of-Thought Monitorability"
- **Doc title:** Reward Misspecification **Alone** Degrades Chain-of-Thought Monitorability / **Actual title:** Reward Misspecification Degrades Chain-of-Thought Monitorability → **MISMATCH** (minor: word "Alone" inserted; the real arXiv title has no "Alone")
- **Doc date:** arXiv:2610.28303 (Oct 20, 2026) — cs.CL / **Actual date:** [Submitted on 20 Oct 2026] — cs.CL → MATCH
- Claim bullets checked:
  - "Testbed pairs true vs. misspecified rewards so reward hacking is induced by training and verifiably labelled" → CONFIRMED
  - "across **3 models × 3 tasks** monitorability stays low as hack rates rise" → CONFIRMED ("Across three models and three tasks")
  - "CoT reasons about task intent while the *output* violates it" → CONFIRMED
  - "Mitigation without knowing the true reward: infer a reward description from diverse-reward rollouts, inject into input" → CONFIRMED
  - "**+24% relative / up to +42% absolute** monitorability" → **WRONG**. Correct: the paper/abstract say the method "improves monitorability by an average of **24% or 42% absolute**, depending on the metric"; the PDF states "improves monitorability by 42% (or 24%, depending on choice of metric) on average (**absolute**)". Both figures are absolute; "24% relative" is a mischaracterisation. Suggested fix: "+24% / +42% absolute monitorability, depending on the metric".
  - "Code: https://github.com/Lorenayannnnn/reward-misspecification-degrades-cot-monitorability" → CONFIRMED (repo live, HTTP 200, README matches)
- **Overall:** NEEDS CORRECTION (metric framing + title wording)
- **Source 1:** https://arxiv.org/abs/2610.28303 — **Source 2:** https://github.com/Lorenayannnnn/reward-misspecification-degrades-cot-monitorability (README: title, testbed setup, monitorability scripts) + https://api.openalex.org/works?filter=doi:10.48550/arxiv.2610.28303 (independent index: title + 2026-10-20 date) + PDF https://arxiv.org/pdf/2610.28303 (metric wording)

---

### ReQAT — project page https://aiha-lab.github.io/ReQAT/
- **Doc title (section heading):** "ReQAT (ICML 2026): FP4 QAT that matches *and beats* BF16 on reasoning models" / **Actual title:** "ReQAT: Achieving Full-Precision Reasoning Accuracy with 4-bit Floating-Point Quantization-Aware Training" → MATCH in substance (descriptive heading; real title confirmed)
- **Doc date:** no date given; venue claim "ICML 2026" / **Actual:** ICML 2026 → CONFIRMED (project page header "ICML 2026"; independent ICML poster page https://icml.cc/virtual/2026/poster/63073 and an ICML oral listing exist)
- Claim bullets checked:
  - "**+15.8 points** AIME-120 over NVFP4 direct PTQ: **65.94% vs 50.13%** PTQ baseline (W4A4KV4)" → CONFIRMED (project page; arXiv 2606.15682 text: "achieving 65.94% AIME accuracy under NVFP4 W4A4KV4 compared to 56.83% for BF16 baseline and 65.46% after full FT"; table row "NVFP4 W4A4KV4 Direct PTQ 50.13"; 65.94 − 50.13 = 15.81 ≈ +15.8)
  - "also above **BF16 full fine-tuning (65.46%)**" → CONFIRMED (paper: ReQAT 65.94 vs Full-FT 65.46; BF16 no-FT baseline is 56.83)
  - "**3.9× end-to-end throughput** on NVIDIA **DGX Spark** vs BF16" → CONFIRMED (project page + paper abstract + ICML abstract)
  - "**3.1×** on **B200**" → CONFIRMED (project page + paper abstract + ICML abstract)
  - "Standard QAT narrows the PTQ gap but **plateaus below BF16 full fine-tuning even with a larger token budget**; ReQAT closes and surpasses" → CONFIRMED (project page panel (b–c) text: "Standard QAT narrows the gap under MXFP4 W4A16 and NVFP4 W4A4KV4, but plateaus well below BF16 full fine-tuning (Full-FT) even with a larger token budget — ReQAT closes, then surpasses it"; also in paper abstract)
  - Secondary context confirmed from paper: components TAQ / SEM / Q-FIT, low-entropy-token failure hypothesis, >1.5M generated tokens analysed, Stage-2 budget 70M tokens
- **Overall:** VERIFIED
- **Source 1:** https://aiha-lab.github.io/ReQAT/ — **Source 2:** https://arxiv.org/html/2606.15682v1 (full paper text/tables) + https://icml.cc/virtual/2026/poster/63073 (ICML listing, independent of the lab's own site)
- Note: ReQAT's arXiv ID is **2606.15682** (June 2026), not a 2610.* ID — the doc correctly cites only the project page, so no error, but the arXiv link could be added. Also the doc's "+15.8 points" is a derived delta, not a number stated on the page; it is arithmetically correct.

---

## Summary
| ID | Overall | Correction needed |
|---|---|---|
| 2610.30014 | VERIFIED | — |
| 2610.30047 | VERIFIED | — (venue metadata not recorded) |
| 2610.30103 | NEEDS CORRECTION | Title is not the real arXiv title ("Did the Problem Actually Get Harder? Testing LLMs on Paired P and NP-Complete Problems…"); all numbers OK |
| 2610.30116 | VERIFIED | — |
| 2610.30132 | VERIFIED | — |
| 2610.29961 | VERIFIED | — |
| 2610.28947 | VERIFIED | — (no real paper title recorded; 1.3–1.7× / 27% prefill result omitted) |
| 2610.28937 | VERIFIED | — (no real paper title recorded; NeurIPS 2026 acceptance not recorded) |
| 2610.28303 | NEEDS CORRECTION | "+24% relative" is wrong — both 24% and 42% are **absolute**, metric-dependent; title has spurious "Alone" |
| ReQAT | VERIFIED | — |

Numeric claims checked: ~45 across the 9 papers + 5 for ReQAT. **1 wrong** (28303 metric framing), 0 unverifiable, 1 title mismatch (30103), 1 title wording issue (28303).

Source-2 availability note: Semantic Scholar Graph API returned HTTP 429 for every request; OpenAlex only had 2610.28303 indexed; OpenReview API requires a bot challenge. Second sources used instead: **emergentmind.com** (independent mirror, for 2610.30014 / 2610.28947 / 2610.28937 — no GitHub repo linked from arXiv), **author GitHub repos** for 2610.30047 / 2610.30103 / 2610.30116 / 2610.30132 / 2610.29961 / 2610.28303, **OpenAlex** for 2610.28303, and **icml.cc** + **arxiv.org/html/2606.15682v1** for ReQAT.
