# Findings — Task 1 (arXiv) — 2026-10-31

## Harvest stats

**Key outcome: 0 papers with a *new* arXiv announcement dated 2026-10-31.** 2026-10-31 is a Saturday; arXiv does not announce on weekends. The newest announcement batch available is **Fri, 30 Oct 2026**, and that batch was already harvested yesterday (Oct 30) — 711 of its 738 cs.CL/cs.LG/cs.AI IDs are in `tmp/known_ids_oct30_full.txt`.

Because the Oct-30 batch was already covered, this run went a level deeper: it swept the **full `/list/<cat>/recent` announcement pages** (show=2000) for cs.CL, cs.LG and cs.AI, which expose five announcement batches, and diffed *all* of them (not just the newest) against the known-ID baseline plus every ID ever mentioned in this workspace's `findings_*.md` / `daily_reports/*.md`.

### Queries run
1. API (as instructed, with `-L`): `http://export.arxiv.org/api/query?search_query=cat:cs.CL+OR+cat:cs.LG+OR+cat:cs.AI+AND+submittedDate:[202610290000+TO+202610312359]&start=0&max_results=3000&sortBy=submittedDate&sortOrder=ascending`
   - **API quirk:** this exact URL returns an **empty body** — the literal `[` `]` in `submittedDate:[...]` is rejected by the query parser and the query returns 0 entries. The fix is URL-encoding the brackets as `%5B` … `%5D`. All subsequent API calls use `%5B`/`%5D`.
2. Per-category API with encoded brackets: `cat:cs.CL`, `cat:cs.LG`, `cat:cs.AI` each with `submittedDate:[202610290000 TO 202610312359]` → 76 / 171 / 181 entries; merged union with the combined query → **347 unique IDs**, all with `<published>` = 2026-10-29, all with prefix `2610.*`.
3. API probe with `submittedDate:[202610300000 TO 202610312359]` → **0 entries**; `[202611010000 TO 202611022359]` → **0 entries**. Confirms no new submissions announced after Oct 29.
4. Listing pages (the actual announcement view): `https://arxiv.org/list/{cs.CL,cs.LG,cs.AI}/recent?skip=0&show=2000`.

### Counts
| Metric | Value |
|---|---|
| API harvest (submittedDate Oct 29–31, 3 cats, union) | **347 unique IDs** |
| …of which already in `known_ids_oct30_full.txt` | **347 (100%)** |
| …of which genuinely new | **0** |
| Announcement batches swept via `/list/*/recent` | 5 (Oct 23, 26, 27, 28, 30) |
| Unique IDs across those batches (3 cats) | **2,872** |
| IDs in known baseline | 2,210 |
| IDs **not** in known baseline | **662** |
| …of those 662, also never mentioned in any `findings_*.md` / `daily_reports/*.md` | **662 (100% — all genuinely unreported)** |
| Non-relevant (off-topic: bio, chemistry, physics, vision-only, etc.) among the 662 | ~520 (filtered out of "Other notable") |

### Breakdown of the 662 never-reported papers
By **announcement batch** (from `/list/*/recent` headers) and by **API `<published>` submission month**:

| Announcement batch | Count | of which submitted in 2026-10 |
|---|---|---|
| Fri, 30 Oct 2026 | 27 | 24 |
| Wed, 28 Oct 2026 | 1 | 0 (submitted 2026-09) |
| Tue, 27 Oct 2026 | 339 | 332 |
| Fri, 23 Oct 2026 | 295 | 284 |

By API submission month across all 662: 2026-10 → 640, 2026-09 → 12, 2026-08 → 6, 2025-09 → 2, 2025-10 → 1, 2026-01 → 1. (Older submission dates with a late announcement date are cross-listings/replacements.)

### Known-ID file updated
Backup created: `tmp/known_ids_oct31_full.txt` (copy of `tmp/known_ids_oct30_full.txt`). All 662 newly-surfaced IDs were appended to `tmp/known_ids_oct30_full.txt` (now 3,063 lines).

### Selected papers (abstract-level verified)
All 25 below were fetched via the arXiv API (`id_list` query) and the abstracts were cross-checked against the live `/abs/` page for a sample (2610.34427, 2610.33625, 2610.37683 — text matched verbatim). Every number is taken from the paper's own abstract.

### 2610.34427 — ScaleRLT: Exact Log-Probabilities and Fast Deferred Rollouts for Reinforcement Learning on Looped Transformers
cs.LG, cs.DC | submitted 2026-10-25
Looped LLMs (e.g. Ouro) reuse one block of layers several times per token, so a rollout engine can defer deep loops — but the RL learner's dense log-prob recomputation differs in floating point: "in FP32 at 4096 tokens about **18%** of the sampled tokens miss a 10⁻⁵ same-weight gate, and with bf16 weights nearly every token does." The hybrid learner log-prob ℓ = ℓ_dense + sg(ℓ_sched − ℓ_dense) reproduces the rollout **bit for bit in all 167 FP32 and 28 bf16 real-weight cells** across three platforms, and the full GRPO loss matches a float64 reference to **3.1×10⁻⁴**. Deferral raises rollout throughput **1.47–1.56×** (1.18–1.54× with CUDA graphs); a two-node GRPO loop with one-wave KV admission shortens an update **2.71×** with the gate bitwise at every update, and four nodes keep update time within **2%**. In 100-update runs held-out GSM8K rose **23% → 82%** with the mixed-depth readout and **34% → 90%** with the native readout.
https://arxiv.org/abs/2610.34427

### 2610.34577 — Rethinking Verification in Agent Harnesses
cs.AI | submitted 2026-10-25
Frames verification as an axis of test-time scaling across four layers of the agent lifecycle (initial instructions, mid-turn reminders, completion gates, independent review). Compares **17 designs** across **7 frontier coding models** on Terminal-Bench (TB) and SWE-bench Verified (SWE), plus a new VisualBench for expert evaluation of visual/interactive artifacts. Independent review by a critic gives the best accuracy–cost trade-off: **+5.9 to +9.5 pp on TB and +3.9 to +6.6 pp on SWE** at **1.13–1.25×** and **1.00–1.04×** baseline cost. On VisualBench, independent review reaches net preferences of **13.2–23.8 points** over baseline across its four designs; additional review rounds or independent critics add up to **3.5 pp** TB accuracy.
https://arxiv.org/abs/2610.34577

### 2610.33684 — More: Mode-Optimized Reasoning with Self-Adaptive Effort for Self-Evolving Agents
cs.AI | submitted 2026-10-24
MORE is a two-stage self-evolving training framework that jointly selects reasoning *form* (direct answer, short CoT, long CoT, code-based) and *effort* per task. Stage 1 establishes a compact prior over the four modes; Stage 2 self-evolves it with Mode-Adaptive and Test-time effort PPO (MATE-PPO) on generated verifiable task streams without curated data. Reports "consistent performance gains on Base and Coder backbones at model scales from **3B to 14B**" across coding, math and general-reasoning benchmarks, with "markedly shorter response lengths and reduced inference time" at inference. (Abstract states no numeric accuracy table.)
https://arxiv.org/abs/2610.33684

### 2610.33025 — Can Language Models Learn While They Think? Testing Gradient Adaptation Across Architectures
cs.LG, cs.CL | submitted 2026-10-10
Dynamic evaluation (one SGD step per 128-token chunk on MLP output projections of the last quarter of blocks, no training, 2k window): softmax-attention models (Qwen3-1.7B, Qwen3-4B, Gemma-4-E4B) lose **5–8%** of next-token loss over a document and beat the same frozen model given the full 32k context. Hybrid Gated-DeltaNet models (Qwen3.5-4B, Qwen3.8-27B) gain **under 1% at every learning rate**. The effect transfers to masked-diffusion models, larger: **8% on Nemotron-Diffusion-8B and 17–20% on DiffusionGemma-26B**. Critically, across RULER, BABILong, LongBench-v2, SCOTUS, HotpotQA, MuSiQue, ContractNLI and citation completion (≥100 items, two model sizes), weights updated on the full document **recover none of the accuracy lost to context truncation** — adaptation is style/vocabulary, not retrieval. Writing facts into weights gives **30% recall under chat prompting vs 80% in context** and costs **36–38 GSM8K points at every dose**; distilling the model's own conclusion-conditioned judgments into a LoRA reaches the in-context ceiling (**0.83 and 0.88 vs 0.84 and 0.88 on 100 games**) with GSM8K unchanged.
https://arxiv.org/abs/2610.33025

### 2610.33625 — RAQ-MLA: Role-Aware Quantization for Multi-Head Latent Attention Caches
cs.AI, cs.LG | submitted 2026-10-24
Shows the two tensors MLA actually caches play different roles: the latent mainly supplies the values while the narrow positional key dominates the attention score. RAQ-MLA fits an invertible transform to each cached tensor against the error that tensor delivers to the attention output (attention-weighted value error for the latent, score perturbation for the positional key). **Training-free**, it quantizes the full MLA cache to **~2.5 bits per element — a 6.5× increase in theoretical KV-cache capacity** — while remaining "nearly lossless on reasoning and coding tasks across four MLA models." (Abstract reports no numeric accuracy table.)
https://arxiv.org/abs/2610.33625

### 2610.33501 — DualPace: Decoupled Scheduling and Cooperative GPU–CPU Decoding for LLM Serving
cs.DC, cs.LG | submitted 2026-10-24
Turns the host into an independently scheduled decode engine: the GPU engine runs prefills and GPU-resident decodes, while an **AMX-enabled CPU engine** independently batches and advances CPU-resident decodes, cooperatively (full local decode iterations, or selective GPU "Dense Assist" for dense stages). Reports throughput gains of **6.9–43.2% over NEO** (an open-source CPU-offloading system) and **11.5–90.6% over vLLM** in decode-oriented scenarios at the same latency level, while preserving NEO's P99 TTFT advantage and sustaining **7.3–50.5% higher request rates** than NEO at the same P99 ITL.
https://arxiv.org/abs/2610.33501

### 2610.37683 — Prompt-agnostic Language Models
cs.CL, cs.AI, cs.LG | submitted 2026-10-13
Attacks prompt sensitivity at *training* time rather than by inference-time prompt optimization. Shows that per-paraphrasing gradients interfere across trainable parameters: **57% exhibit sign conflicts** and the naive gradient average discards **~a fifth of the magnitude**. Proposes two gradient-merging methods, **Prompt-TIES** and **Prompt-DARE**, borrowing interference-resolution operators from model/gradient merging. Evaluated on **4 models from 2 families at 2 scales**. Finds the interaction between prompt phrasing and specific examples accounts for **54% of per-example variability on average**, exceeding **70%** on ANLI and WiC; the gradient-merging methods nearly **halve per-example variance** on fully fine-tuned models at little cost to overall accuracy, while other train-time methods (data construction, consistency regularization, contrastive alignment) improve raw performance but fail to improve per-example variance reliably.
https://arxiv.org/abs/2610.37683

### 2610.37680 — Artifact Distillation: Training-Free Transfer from Frontier to Small Language Models
cs.CL, cs.AI, cs.LG | submitted 2026-10-12
Instead of fine-tuning a student on teacher outputs, the teacher externalizes its problem-solving procedure into an **artifact bank** the student queries at inference time, **with no gradient updates**. Across four LiveBench tasks, a bank written by Claude Opus 4.5 lets **Claude Haiku 4.5 beat unaided Claude Sonnet 4.5 on spatial reasoning (0.707 vs 0.647) at 60% of its cost**, and reach Sonnet 4.5's level on table joining at **89% of its cost**. The same raw bank raises **Qwen3.5-27B's pooled score from 0.730 to 0.800**, showing transfer is not confined to the teacher's model family.
https://arxiv.org/abs/2610.37680

### 2610.37679 — Exposure Is Not Commitment: Double-Stratified Evaluation of Latent Monitors for Tool-Using Agents
cs.CL, cs.LG | submitted 2026-10-12
Argues the conflicting literature on pre-action latent monitors for indirect prompt injection is largely an **evaluation artifact**, and proposes double-stratifying injection *exposure* from behavioral *commitment* in both eval and training populations. On the Qwen AgentDojo grid, monitors trained on the naive mixed unsafe-vs-rest contrast mostly learn exposure — they flag exposed trajectories whether or not the agent complies, and barely predict which cases turn unsafe. Retrained on exposed cases only, the same probe families predict the model's own unsafe tool call **up to two steps early** (logistic **AUROC 0.853**, matched by a trained TF-IDF text baseline at **0.855**); **Mistral-7B 0.896** and **OLMo-2-7B 0.912**. Representations separate on exposure (**probe 1.000 vs trained text 0.908**). Conclusion: "an unstratified AUROC overstates what a latent monitor knows."
https://arxiv.org/abs/2610.37679

### 2610.37676 — Scoring Explanations Without Reading Them: Structural Shortcuts in Automated-Interpretability Evaluation Data
cs.CL | submitted 2026-10-10
Shows automated-interpretability scores for SAE explanations can be produced **without reading the explanation**. On Neuronpedia's stored fuzzing runs for **500 random GPT-2 small features**, **91.3%** of activating examples are cropped with the peak on the centre token, and a rule that says "yes" when the centre token is marked reaches **balanced accuracy 0.979**, vs **0.838** for the stored LLM scorers; a rule reading only mark count reaches **0.969**. The cue changes form across pipelines (delphi always marks the same slot in fuzzing negatives; full-context runs mark negatives with more tokens). On OpenAI's simulation benchmark a first-five rule scores **0.227** pooled correlation vs **0.160** for GPT-4's published simulator. On natural-text windows cut at random offsets the best shared fixed-offset prior scores **0.015**; there a typed decision model (Jev) reaches pooled correlation **0.331** over 49 features vs **0.013** with shuffled explanations, and an open 8B simulator reads the explanation (**0.194 vs 0.019**). Prescribes: report scores beside the best explanation-free rule.
https://arxiv.org/abs/2610.37676

### 2610.37706 — Search-Guided Reasoning Trace Curation for Verilog Generation
cs.AR, cs.AI | submitted 2026-10-26
MCTS-SFT formulates reasoning-trace construction as search over intermediate reasoning states, propagating functional feedback from complete Verilog rollouts back to earlier design decisions; Plan-MCTS searches compact hardware-design plans (interfaces, timing, state, behavior, update rules) and keeps the searched plan as part of the SFT target. Plan-MCTS reaches the highest functional trace yield: **84.2% correct traces vs 81.9%** for one-shot structured planning and **82.0%** for unguided tree exploration. For identical trajectories and outputs, **retaining the explicit searched plan during SFT raises pass@10 from 52.56% to 57.7%**. In a separate **6,000-trace** study, MCTS-curated supervision improves pass@10 over full-response CoT distillation by **up to 3.7 points** while reducing downstream generation length by **~50%** on VerilogEval-v2.
https://arxiv.org/abs/2610.37706

### 2610.33375 — AgentOrch: How Close Can Global Orchestration Come to Step-by-Step Interaction?
cs.AI | submitted 2026-10-24
Compares global orchestration (generate the whole executable workflow up front, no further LLM calls) against step-by-step interaction on **650 enterprise SOPs and 3,220 runtime variants** under matched tools/environments. Step-by-step stays more accurate for every model, but the gap **has shrunk by about 79%** from early models to the strongest recent one. Three routes to narrow it: incremental workflow construction (**+9.98 pp** average, without runtime execution feedback); revising complete workflows with execution feedback (improves all models, including **6.13 pp** on held-out runtime variants); targeted training on complete workflows (**+12.18 pp** average across all five trained models).
https://arxiv.org/abs/2610.33375

### 2610.34425 — CTXAgent — Self-Controlled Context Management of LLM Agents
cs.AI | submitted 2026-10-25
Instead of the harness compacting history at a token threshold, the model decides when to compact, what to keep, and what to write as the hand-off, given two tools and one paragraph of guidance. Compares **7 frontier models** with and without context tools on a benchmark interleaving coding exercises, multi-step SciCode problems, SWE-bench Pro and Terminal-Bench 4.0 tasks with planted facts and ephemeral observations, in sessions of **35–212 turns**, deterministically checked. Most strong models manage their own context (live context mostly under **100k tokens**, scores mostly not dropping significantly). With **Claude Opus 5.5**, the self-managed harness **matches Claude Code on task success at 34% lower cost** than its explicit 200k-window configuration and **49% lower** than its default.
https://arxiv.org/abs/2610.34425

### 2610.33845 — Build, Don't Play: Self-Improving LLM Research Agents Develop a Hearthstone Battlegrounds AI That Rivals Top Players
cs.AI, cs.LG, cs.MA | submitted 2026-10-24
AutoTavern: specialised LLM research agents share a typed research memory, every claim passes verification gates, and live games close the loop so the agents improve the simulator, opponents, policy — and their own research process. In **20 days** it built TavernGym, "the first faithful, full-content reproduction of the live game", and delivered **23 versions** of TavernAgent trained with PPO. On the live ladder its rating rose **from 6,000 to about 15,000**; the last 20 records average a placement of **1.60 with 80% first places**, beating the server's ten highest-rated players on every statistic (2.34, 59%). TavernBench (**960 tasks in 40 scenarios**): the built agent answers **91%** of play tasks vs at most **63%** for frontier LLMs, and decides in **0.03 s** where they need up to **26 s**; within the one-second turn budget it keeps **90%** vs no LLM more than **26%**.
https://arxiv.org/abs/2610.33845

### 2610.33029 — Lessons from Luck: Do LLM-Written Lessons Carry Chance into an Agent's Next Decision?
cs.LG, cs.AI, cs.CL, cs.IR | submitted 2026-10-12
Registered study in **256 synthetic worlds**: a scripted previous run used the more or less reliable of two interchangeable tools with an assigned success/transient-failure outcome; a model wrote a lesson via ReasoningBank's memory-writing instruction, then a fresh session of the same model chose the next run's first tool given that lesson (or a control). Protocol frozen and timestamped before any confirmatory call; **11 LLM endpoints, 90,084 answers**. After a chance failure of the better tool, the panel's lessons carried the chance (registered reading luck-carrying; interaction **+0.112, 95% CI [+0.097, +0.126]**): readers named the worse tool in **11.6%** of next runs with the failure-written lesson, vs **0.4%** with an irrelevant item and **0.4%** with a success-written lesson. Effect was **+0.042** where the log stated failures are independent, **+0.181** where it did not. Exploratory: 6 endpoints carried the chance (up to **+0.352**), 5 bounded below 0.10.
https://arxiv.org/abs/2610.33029

### 2610.34386 — ParetoRSI-Gym: Can AI Agents Improve Language Models Across Multiple Domains?
cs.LG, cs.AI | submitted 2026-10-25
An agent searches for data, curates it, trains, reads back per-domain results and repeats — with everything but the data held fixed (initial LLM, five domains: math, code, finance, medicine, science; toolset; SFT pipeline), and generalization benchmarks in each domain to separate capability gain from overfitting to the optimized score. Across **3 agent systems × 3 base models × 5 rounds × multiple seeds**, the strongest system (**Claude Code with Opus-5**) raises generalization scores of its proxy-best checkpoint by **9.2% relative (+2.3 absolute points)**, equally weighted over three base models and five domains, with a single-domain relative gain of **up to 63%** (medicine on Ministral-3-3B). Concludes the harness matters as much as the model it drives.
https://arxiv.org/abs/2610.34386

### 2610.33644 — AlphaIdeaBench: Benchmarking Automated Research Idea Generation under Feasibility Constraints with Peer Review Alignment
cs.AI | submitted 2026-10-24
Benchmark of **100 ideation tasks** (50 workshop calls for papers, 50 open problems from surveys), each with an explicit resource budget and shared proposal schema, scored by an LLM judge on **12 dimensions**. The judge is validated against reviewer-comment-derived scores on **600 papers** from ICLR 2026, NeurIPS 2025 and ICML 2025: for problem and method novelty, **Gemini 3.7 Flash is within one point of the reviewer-derived score on 94–97% of papers**, with lower agreement on scenario novelty. Evaluates **8 published harnesses** on a shared backbone and 8 backbones within one harness. **CoI-Agent** scores highest overall, narrowly ahead of **SciMON** (which leads on method and insight novelty). All harnesses score low on scenario novelty and rarely change the problem setting; the backbone largely determines *which* problem is targeted, the harness determines whether one or several problems are combined. Weaker backbones (Llama 4 Scout) fail to execute the harness strategy and score low on budget feasibility.
https://arxiv.org/abs/2610.33644

### 2610.33592 — Auditing evaluation artifacts and data leakage in large language model systems for rare disease diagnosis
cs.AI | submitted 2026-10-24
Audit of augmented LLM diagnostic systems over a repository of **>60,000 cases** from diverse public and independent clinical cohorts, using a reconstructed agentic framework. Enforcing strict cross-dataset isolation cuts cross-dataset mean **Recall@1 from 54.3% to 40.3% (Hedges' g = 0.94)**; spatial overfitting in supervised classifiers drops diagnostic accuracy from an internal mean of **42.9% to 16.7%** across external cohorts (**Cohen's d = 2.01**). Also quantifies LLMs exploiting retrospective therapeutic cues in clinical narratives and temporal misalignment in foundational knowledge bases. Concludes prevailing evaluation protocols "inadvertently reflect data leakage rather than genuine medical reasoning."
https://arxiv.org/abs/2610.33592

### 2610.21073 — Skip the Compressor: Coding Agents Fix More Issues When They Pick Whole Files
cs.SE, cs.AI, cs.CL, cs.LG | submitted 2026-10-15
At an equal token budget, giving the budget to *choosing which files to show verbatim* beats token pruning or chunk retrieval. Selector **CQ2-CARE**, fitted to the same per-issue budget on **300 recent SWE-rebench issues** and graded with the benchmark's tests: with **GPT-5.6 and Claude Opus 5** it resolves **43.7% and 46.7%** of issues — **6.3 pp more than the best of three compressors** with either model, and **9.3 and 12.7 pp more than the best of three retrievers**. It even beats two issue-resolution-trained methods: **SweRank** (by 0.7 and 1.7 pp) and **SWE-Pruner** (by 2.0 and 7.3 pp). Analysis: retrievers miss the files to edit; compressors keep them but alter their text, so fewer patches apply.
https://arxiv.org/abs/2610.21073

### 2610.30664 — Compiling Autoregressive LLM Control into Policy-Exact Parallel Inference for Hierarchical RAG
cs.CL, cs.IR | submitted 2026-10-22
For hierarchical RAG, where an LLM commits to *b* of *k* sections under an input-dependent action grammar, the reachable future forms a shallow action-prefix tree that is compiled: **one root prefill plus one tree-causal probe** evaluates every prefix-conditioned action distribution with serial decoding's tokens, positions and causal ancestry. A prefix-state lemma makes compiled control **policy-exact in exact arithmetic** — same policy with a **two-forward critical path and zero output tokens**. One further probe certifies the exact order-marginalized MAP set. Across **four document-disjoint splits and two scales** on MetaX, compiled control matches the serial policy on **84–89% of questions** (every instrumented divergence a floating-point near-tie) and cuts control latency by **35–47%** vs token-wise serial decoding and **6–7%** vs an idealized chunked engine.
https://arxiv.org/abs/2610.30664

### 2610.30920 — DConstrain: Compiling Context-Parameterized Transitions for Diffusion Language Model Constrained Decoding
cs.AI | submitted 2026-10-22
Diffusion LMs decode tokens in parallel, so individually valid tokens can be jointly invalid under a schema. DConstrain compiles schemas into **context-parameterized transition programs**: cold compilation specializes token consumption to local grammar states while keeping stack operations, environment guards and deferred parsing symbolic; runtime warm compilation binds reached configurations to those programs to construct exact successors, overlapping with the model forward pass (no model scores needed). Token-effect grouping merges tokens with identical compiled effects, and objective-specific score aggregation provably preserves both the Viterbi optimum and the token-labeled path distribution. Across **three benchmarks and two DLM families**, DConstrain compiles **100% of BFCL schemas under arbitrary property orders** vs **71.30–85.81%** for an optimized finite-state baseline; it cuts BFCL end-to-end decoding latency by **6.65–46.26×** with **100% schema validity** and raises **DiffusionGemma's BFCL accuracy from 37.27% (fixed order) to 81.56%**.
https://arxiv.org/abs/2610.30920

### 2610.30765 — Scaling Laws for Generative Reward Models
cs.AI | submitted 2026-10-22
Studies GenRMs as online preference providers for policy optimization in creative writing, over Qwen3 reward-model sizes **0.6B to 14B**. Thinking judges trained with **GRPO** have higher static Gold-label accuracy than Answer-Only judges trained with **SFT**, but the ranking **reverses under online DPO**: Answer-Only rewarders yield higher peak and top-five-average policy Elo in **7 of 8 matched settings** under a fixed learned **32B** Gold evaluator. Intermediate Thinking-judge checkpoints can outperform later, more statically accurate checkpoints. Sweeps over rewarder size, policy size, training duration and DPO regularization show substantial benefits from reward-model capacity, **including judges larger than the policy**. The paper names this an **evaluator–rewarder gap**: "fixed-distribution judging accuracy does not determine downstream optimization quality."
https://arxiv.org/abs/2610.30765

### 2610.33509 — Can Agentic Code Review Catch Vulnerabilities Before They Are Merged?
cs.SE, cs.AI, cs.CR, cs.PL | submitted 2026-10-24
SecPRBench is built by an automated agentic pipeline that harvests, builds and validates real-world bug-introducing commits (not later fixes). Collects **265 tasks from 9 critical systems** including Firefox, V8 and OpenSSL, with LLM-as-a-judge crediting findings matching ground-truth vulnerabilities. Across **8 frontier models**, recall ranges from **32.5% to 78.1%**, with **Grok 4.6** and **GPT-6 sol** at the top. Most misses are not oversights: in **68%** of them the agent reports on a file that holds the flaw but argues for a different mechanism. Harness choice matters: **OpenAI's Codex Security lowers recall by 8.3 points** (mostly by abstaining) while **Anthropic's Defending Code harness raises it by 7.7 points**, at higher cost.
https://arxiv.org/abs/2610.33509

### 2610.34561 — GRASP: Group-Adaptive Hybrid RL-SFT Post-Training for Medical VQA without Reasoning Annotations
cs.CV, cs.AI | submitted 2026-10-25
GRASP combines RL and SFT **in every update** using only short answers: RL lets the model explore its own reasoning, SFT teaches the gold answer after that reasoning, and their balance adapts to per-question performance. Tuning only **~1% of parameters with LoRA**, GRASP outperforms all compared objectives in-domain and on OOD open-ended questions across **Qwen3-VL-8B, InternVL3-8B and Gemma 3-4B**. On an OOD benchmark spanning **8 imaging modalities**, GRASP-trained InternVL3-8B and Qwen3-VL-8B beat **all 10 compared general and medical VLMs** in open-ended accuracy, including models trained on up to **2,600× more data** or with **>250× more trainable parameters**. Releases MedTerse (**12.9K** short-answer questions).
https://arxiv.org/abs/2610.34561

### 2610.30429 — RoleFlow: Self-Evolving Multi-Role Agentic Collaboration via Structural Adaptation
cs.AI | submitted 2026-10-21
Refines multi-role collaboration *structures* via feedback-driven atomic edits and on-demand role synthesis, rather than relying on predefined structures or trajectory-level rewards. Introduces **Single-Edit Counterfactual Policy Optimization (SECPO)**, which evaluates each edit against its no-edit counterpart at the same chain state and assigns targeted credit to edit-specific tokens. Across **7 benchmarks in 4 domains**, RoleFlow achieves the best average performance, **surpassing the strongest competitor by 4.7 points**; it leads on all three multi-hop QA benchmarks by **3.2–7.5 F1** points and also on mathematical reasoning, web interaction and code generation, with cross-benchmark transferability and cross-executor generalization shown.
https://arxiv.org/abs/2610.30429

## Other notable (no expansion)

See `tmp/other_notable.md` for the full 140-entry list with one-line abstract extracts; the top entries by quantitative density are reproduced below.

- 2610.30873 — MOER: Mix-Policy Optimization under Expert Prefix Guidance with Selective Rollback (cs.LG,cs.AI; submitted 2026-10-22). Decaying expert CoT prefix with selective rollback guarantees every off-policy trajectory's correctness; GRPO loss on on-policy tokens + trust-region SFT loss on expert prefix and completion tokens; reports highest average scores in math and general reasoning.
  https://arxiv.org/abs/2610.30873
- 2610.33020 — Mine or Yours? Mind-Bridged Language Models Take Each Other's Memories as Their Own (cs.CL,cs.AI; submitted 2026-10-08). A receiver attending to a partner model's internal memory named the partner's rule in **97%** of answers at double weight, and called the partner's code word its own.
  https://arxiv.org/abs/2610.33020
- 2610.33178 — AOS-Bench: Can LLM Agents Manage Dynamic Workloads? (cs.AI; submitted 2026-10-23). On heavy workloads every system loses **13–23 points**; serial dispatch leaves **73%** of heavy-workload tasks unclaimed.
  https://arxiv.org/abs/2610.33178
- 2610.30418 — Agent Mosaic: Recognizing Confidentiality Leaks in Agentic LLM Systems (cs.CR,cs.AI,cs.CL; submitted 2026-10-21). GPT-5.6-Sol discloses forbidden composites in **7.08%** of answers (95% CI 3.75–10.67%) in simulation; unsafe disclosures persist in **32.37%** of simulated answers despite safeguards.
  https://arxiv.org/abs/2610.30418
- 2610.33011 — When Agents Collude: Weak-to-Strong On-Policy Distillation for Mitigating Strategic Deception (cs.MA,cs.AI,cs.CL,cs.LG; submitted 2026-10-08). Multi-agent interaction raises misaligned-action rates **35.4% → 68.2%** and persistent deception **31.0% → 62.2%**; PACT cuts persistent deception **80% → 3%**.
  https://arxiv.org/abs/2610.33011
- 2610.34365 — SEEK: Skill Extraction with Evolving Knowledge against Frontier Science Agents (cs.LG,cs.AI; submitted 2026-10-25). All **8 platforms (100%)** leak at least one protected skill; SEEK reaches **100%** attack success on 12 skills, cutting mean first-success round by **31.8%** and **38.2%**.
  https://arxiv.org/abs/2610.34365
- 2610.34542 — LLM WikiLeaks: Uncovering URL-Based Capability Extension and Security Circumvention in Agentic Message Boards (cs.CR,cs.AI; submitted 2026-10-25). **14,591 agent edits / 79,541 URL postings**; **33.6%** of URL occurrences embed targets within 1–5 layers of third-party services, **73.8%** of which extend agent capability.
  https://arxiv.org/abs/2610.34542
- 2610.30162 — FusionEval: Benchmarking Model Fusion for Large Language Models (cs.CL,cs.AI; submitted 2026-09-30). Training-free fusion preserves reasoning but substantially degrades tool use; **MOPD** preserves tool use but needs extra data/training.
  https://arxiv.org/abs/2610.30162
- 2610.30167 — IRAH: Hierarchical Agentic Tree Search for Retrieval Pipeline Optimization (cs.IR,cs.AI,cs.LG; submitted 2026-10-16). LATS-IR beats TPE on 2 of 3 in-distribution benchmarks by up to **6.4%**; warm-started IRAH reaches the highest average held-out **nDCG@10 of 0.4816** across four benchmarks.
  https://arxiv.org/abs/2610.30167
- 2610.30504 — Rethinking the Evaluation of LLM Fact-Checkers (cs.CL; submitted 2026-10-21). JSFactCheckBench: **1,913 claims**; across six LLMs, directly-answering claims are verified less accurately than supplementary claims.
  https://arxiv.org/abs/2610.30504
- 2610.30537 — PLE: Physical-Engineering's Last Exam (cs.AI; submitted 2026-10-21). **85 long-horizon agentic tasks**; the strongest configuration reaches only **50.6%** mean score while spending **27M tokens and 63 minutes per task**.
  https://arxiv.org/abs/2610.30537
- 2610.33240 — NewsBench: Expert-Grounded Evaluation of Epistemic Quality in AI News Reporting (cs.AI; submitted 2026-10-23). ~**3,000** evaluation prompts, ~**2,500** expert-annotated calibration items, ~500 refreshed monthly.
  https://arxiv.org/abs/2610.33240
- 2610.33544 — Learning When to Collaborate: Selective Multi-Agent Medical Reasoning via Uncertainty-Aware Routing (cs.AI; submitted 2026-10-24). SMART-Med cuts inference time **>3.8×** and token usage **72%** vs dense multi-agent baselines.
  https://arxiv.org/abs/2610.33544
- 2610.34450 — EvolveMAS: A Unified Self-Evolution Framework for Decentralized Multi-Agent Systems (cs.MA,cs.AI; submitted 2026-10-25). Highest normalized average score of **77.2** among compared methods across five benchmarks and six configurations.
  https://arxiv.org/abs/2610.34450
- 2610.33015 — SLICE-Mem: Salience-Gated Lightweight Information Curation for Efficient LLM Agent Memory (cs.CL,cs.AI; submitted 2026-10-08). No generative LLM calls online; **46.60 vs 46.68 FAMA** on Memora Weekly and **56.8% vs 59.3%** on LongMemEval-S while cutting token consumption **92.4%** and **99.5%**.
  https://arxiv.org/abs/2610.33015
- 2610.33074 — AGQ: Action-Guided Ultra-Low-Bit Quantization for Vision-Language-Action Models (cs.CV,cs.AI; submitted 2026-10-21). **92.7%** LIBERO success at W3 (+1.2 / +3.7 pp vs AWQ / GPTQ), 70.5% at W2.5, and **6.10×** compression at W1.5*.
  https://arxiv.org/abs/2610.33074
- 2610.37707 — Relevance-Guided Residual Calibration for Spectral Compression of Dense Retrieval Embeddings (cs.IR,cs.CL; submitted 2026-10-26). SpecTemp + RRC improves over SpecTemp by an average of **2.34 nDCG@10** at 768 dimensions on BRIGHT.
  https://arxiv.org/abs/2610.37707
- 2610.30349 — Consistency Is Not Validity: Self-Rewarded Moral Argumentation Makes Language Models Decisive but Pliable (cs.CL,cs.AI,cs.LG; submitted 2026-10-21). Self-judged tournament with masked thinking; policy becomes more decisive and reordering-invariant, but sycophancy and reframing persist.
  https://arxiv.org/abs/2610.30349
- 2610.33451 — A Comprehensive Framework for All Stages of Large-Model Training (cs.AI; submitted 2026-10-24). Reviews **395 core references** (2017–2026) across data, objective, optimization, systems, evaluation, governance; ~79% peer-reviewed.
  https://arxiv.org/abs/2610.33451
- 2610.33103 — Prospect Theory in Large Language Models: A Meta-Analysis (cs.AI,cs.CL,econ.GN; submitted 2026-10-22). Meta-analysis of **102 fitted estimates from 11 studies over 32 LLMs**: pooled loss aversion **λ = 1.26 (95% CI 1.06–1.46)** vs strongest human estimate 1.96.
  https://arxiv.org/abs/2610.33103
- 2610.37681 — Supervised Fine-Tuning for Reasoning Large Language Models: A Survey (cs.CL,cs.AI,cs.LG; submitted 2026-10-13). Survey of reasoning-SFT literature along methodological-design and analytical-analysis lenses; no numeric claims.
  https://arxiv.org/abs/2610.37681
- 2610.30168 — Finitely Verifiable Segmentation: Decidability for Every Tokenizer with a Finite-State Verifier (cs.FL,cs.CL,cs.PL; submitted 2026-10-16). Formal characterisation: six decidable questions for rational segmentation policies, with maximal-munch lexing, BPE and two-mode WordPiece as instances.
  https://arxiv.org/abs/2610.30168
- 2610.30202 — MPIDetector: Detecting Multi-modal Prompt Injection via LLM-based Reasoning (cs.CR,cs.AI; submitted 2026-10-29).
  https://arxiv.org/abs/2610.30202
- 2610.34185 — R2A-Sales: A Policy-Atom-Matched Benchmark for Rule-to-Action Gaps in Goal-Directed Sales Agents (cs.CL,cs.AI; submitted 2026-10-25).
  https://arxiv.org/abs/2610.34185
- 2610.33282 — Estimation of Propagated Risk in LLM-based Multi-Agent Systems (cs.AI; submitted 2026-10-23).
  https://arxiv.org/abs/2610.33282
- 2610.33130 — Ampe-DB: A Dataset for Human Activity and Interaction Analysis Using the Ghanaian Game Ampe (cs.AI; submitted 2026-10-27).
  https://arxiv.org/abs/2610.33130
- 2610.30792 — Trace2World: Reconstructing App Worlds from Real Interaction Traces for Scalable GUI Agent Training (cs.AI,cs.CL; submitted 2026-10-27).
  https://arxiv.org/abs/2610.30792
- 2610.30664 / 2610.30920 — see Selected (parallel-decoding and constrained-decoding efficiency papers).
  https://arxiv.org/abs/2610.30664

## Notables / caveats

- **Zero new announcements on 2026-10-31** (Saturday). This is a genuine finding, not a harvest failure: both the API (`submittedDate` for Oct 30–31 and Nov 1–2 → 0 entries) and the listing pages (`Fri, 30 Oct 2026` is the newest `<h3>`) confirm the arXiv weekend lull. The next batch will be **Mon, 2 Nov 2026**.
- **API quirk (important, reproducible):** the URL from the task instructions — with literal unencoded `[` `]` in `submittedDate:[...]` — silently returns an **empty body** even with `curl -L`. Percent-encoding the brackets as `%5B`/`%5D` is required. A second quirk: `cat:cs.CL+OR+cat:cs.LG+OR+cat:cs.AI+AND+submittedDate:[...]` is ambiguous because `AND` binds tighter than `OR` in the arXiv parser; parenthesising as `(%28cat:cs.CL+OR+cat:cs.LG+OR+cat:cs.AI%29+AND+submittedDate:%5B...%5D)` gives the correct union (347 entries).
- **Yesterday's Oct-30 batch was already harvested** (711 of its 738 IDs are in `known_ids_oct30_full.txt`), so a same-window API diff yields 0 new by construction. The 27 IDs from the Oct-30 batch that were *not* in the baseline are late cross-listings/replacements whose v1 submission dates go back to Sept 2025 – Oct 2026 — they are included above.
- **Main residual finding of this run:** the baseline `known_ids_oct30_full.txt` had never covered the **Oct 23 and Oct 27 announcement batches** for these three categories (634 papers). All 662 never-before-reported IDs were surfaced and appended. Of the 662, roughly 140 LLM/agent/efficiency-relevant ones are listed as "Other notable" with one-line abstract extracts in `tmp/other_notable.md`; the remaining ~520 are off-topic for this digest (medical imaging, materials science, combinatorial optimization, robotics control, pure theory, etc.).
- **Abstract-level verification only.** All 25 selected papers were read via the arXiv API abstract field; three (2610.34427, 2610.33625, 2610.37683) were additionally checked against the live `/abs/` HTML page and matched verbatim. No claim above comes from a title, a figure, or a paper body — figures, tables, and ablation numbers in the PDFs were not read. Where an abstract contains no number (e.g. 2610.33684, 2610.33625), that is stated explicitly rather than filled in.
- **No web_search or web_fetch was used**; the entire run was `curl` + local parsing, so the 4-search / 1-fetch budget is untouched.
- Known-ID baseline updated: `tmp/known_ids_oct30_full.txt` grew from 2,401 → 3,063 lines; backup at `tmp/known_ids_oct31_full.txt`.
