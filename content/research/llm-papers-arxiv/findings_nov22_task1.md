# Findings — Task 1 (llm-papers-arxiv, 2026-11-22)

- **Task:** Task 1 curation of notable new arXiv papers (LLM-central) for the 2026-11-20 (Friday) announcement cycle plus leftover 11-19 backlog not previously reported.
- **Method:** arXiv Atom API listings fetched via `curl` for cs.CL, cs.LG, cs.AI, cs.SE (300 newest per category, sorted by submittedDate), parsed with Python; filtered to papers submitted 2026-11-19 (the submission pool behind the 11-20 announcement) and to IDs absent from `tmp/nov22/t1/prior_ids.txt`; additionally cross-checked against IDs appearing in `findings_nov20_task1.md` and `findings_nov21_task1.md`. 387 unseen candidate entries were screened for LLM centrality and result substance.
- **Web budget used:** 0 web_search, 0 web_fetch (all data from arxiv.org API via curl; no corroboration calls needed).
- **Caveat:** All numbers below are author-self-reported from the abstracts; they have not been independently verified or reproduced. LLM/judge names appear as stated by the authors and may be model-card or internal names.
- **Duplicate filter:** zero overlap with the 2539 IDs in `prior_ids.txt` or the 95 IDs in the 11-20/11-21 task1 findings files.

---

**2611.26584** Represented but misread: Post-training changes how language models read out what they represent — Compares linear probes against the models' own answers using signal detection theory in six open-weight base models and their post-trained versions. On human-vs-AI authorship judgments of German texts, probes separated classes well but model answers often ordered them inversely; post-training lowered answer sensitivity by Δd' = −0.34 across families (−0.29 across three prompts) and distorted use of a stated base rate. Checkpoint analysis places the change during supervised fine-tuning, implicates early layers, and shows that from mid-depth on, states at positions *after* the text carry the change. A reproducible public-data case (truth of negated statements) shows the opposite direction: probes near ceiling, base-model answers ignoring it, post-training repairing it.

Source: https://arxiv.org/abs/2611.26584

**2611.26510** AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher — Proposes Skill-FT (Skill-Guided Fine-Tuning), which uses natural-language skills to suppress undesirable habits and elicit underrepresented behaviors during teacher rollouts, plus AutoMaster, an autonomous system where an LLM agent designs those interventions from trajectory analysis and rollout feedback. Across Terminal, Search and software-engineering tasks with 4B and 9B targets, AutoMaster beats vanilla SFT on successful unguided teacher trajectories by 1.42–8.99 percentage points with teacher, task pool, data size and SFT recipe held fixed. Retaining skill instructions during SFT beats removing them in all six settings despite identical supervised outputs.

Source: https://arxiv.org/abs/2611.26510

**2611.26427** MemFolder: Structure-Guided Memory Folding for Efficient Agent Memory Management — A framework that jointly reduces agent memory record count and retrieved context length via two shared components: RecordFolder, which grounds entity mentions and consolidates temporally chained records into fewer retrieval units, and ContextFolder, which re-encodes those records into compact text using verification feedback. On LoCoMo, PersonaMem, LongMemEval, M3-Bench-web and M3-Bench-robot, RecordFolder retains 99.0% of Mem0's original average performance with 50% fewer records, 1.9 points above the strongest baseline in performance retention.

Source: https://arxiv.org/abs/2611.26427

**2611.26248** TwinLab-Bench: Evaluating AI Scientists in Agentic Twins of Real Labs — A benchmark for agents that design their own experiments, spanning 52 tasks from physical, life and engineering labs, 100+ experimental action types, and per-task "TwinLab" agents that execute the tested agent's designs against real lab records. Reports are scored against a hidden ground-truth answer, with closed-book probes controlling for memorization. Tasks remain hard for frontier models: the strongest model (Claude Fable 5.2) averages only 45.0, with an accompanying failure analysis.

Source: https://arxiv.org/abs/2611.26248

**2611.26084** RL Can Only Reinforce What It Sees Succeed — Uses a puzzle world where small language models are trained from scratch against a known Bayesian player so both the prior and the correct answer are exact. Outcome-reward RL converts base-model hedging into decisive behaviour, but only in the direction the reward favours; when the right action is rare, runs either learn it everywhere or not at all. The authors claim a single count predicts which runs take off — the expected number of groups of attempts in which the action wins — with roughly 35 such groups giving even odds, holding across new/repeated problems, group sizes 4–256, learning rates, optimizers, GRPO variants and model sizes from 1.3M to 85M parameters.

Source: https://arxiv.org/abs/2611.26084

**2611.26059** Complete-SVD: A Functional Norm Approach to Low-Rank LLM Compression — Post-training low-rank compression that minimizes the L2 distance between original and compressed logits (weighting all logit changes equally); linearizing around the original weights plus a Kronecker-factored approximation reduces this to a weighted SVD with closed form, and the intractable output-side factor is estimated unbiasedly from random probes at K backward passes per sequence, independent of vocabulary size and sequence length. At matched uniform ranks with WikiText-2 calibration it achieves the lowest C4 and PTB perplexity in every setting; a KL-SVD variant lowers calibration perplexity in most settings and raises downstream accuracy; Complete-SVD also improves IFEval instruction-following accuracy over the strongest prior output-aware methods throughout.

Source: https://arxiv.org/abs/2611.26059

**2611.26275** dLoop: Looped Diffusion Language Models via Recurrent Latent Refinement — Restructures a pretrained diffusion language model into a Prelude-Loop-Coda architecture that recurrently applies a parameter-shared intermediate block to the same partially masked state, giving extra latent computation before commitment rather than advancing denoising. On GSM8K, MATH, MBPP and HumanEval it attains the highest or tied-highest accuracy on every benchmark; with tokens-per-forward-pass adjusted for loop compute it beats Fast-dLLM on both accuracy and TPF on all four benchmarks and dParallel on three, while d3LLM gets higher TPF. Mechanistic analysis shows extra loops mainly help slow, unstable trajectories.

Source: https://arxiv.org/abs/2611.26275

**2611.25895** One Schedule Does Not Fit All: Adaptive Inference Schedules for Diffusion Language Models — Introduces Task-Calibrated Denoising Allocation (TCDA), a deployment rule that uses simultaneous one-sided bootstrap bounds to certify which candidate schedules meet a utility tolerance and degeneration guardrails, deploying the cheapest certified candidate or falling back to the full schedule, with asymptotic probability of deploying an infeasible schedule at most alpha. Across seven datasets and two model families TCDA certifies denoiser-evaluation reductions of 3.4x on XSum and 2.0x on WMT14 for ELF-B, 8.0x on WMT14 and 4.1x on GSM8K for LLaDA-8B, and 1.33x on OpenWebText for ELF-M and ELF-L; false certification stayed below 2% over 500 calibration splits at a nominal 5% level.

Source: https://arxiv.org/abs/2611.25895

**2611.25780** RouteVerify: Routing Interventions for Step-Level Verification in Mixture-of-Experts Models — A controlled intervention study across nine MoE checkpoints that swaps internal activations from one solution trace into another while holding the input fixed, testing whether step-level verification judgments follow what routing encodes. Probes on router logits separate correct from erroneous steps in eight checkpoints (AUROC 0.80–0.88); replacing router logits across all routed layers changes the verification judgment in all nine checkpoints, more than a norm-matched random replacement — but the change rarely depends on whether the source step was correct (indistinguishable margins at one layer in all nine checkpoints), while local residual replacements do show positive differences in eight of nine.

Source: https://arxiv.org/abs/2611.25780

**2611.25763** Closing Performance Gap for Diffusion Language Models under Low Inference Budgets — Presents CaRR, a training-free framework that improves an editable diffusion LM's submission quality within its existing forward schedule via Token Commitment Remasking (remask and refill selected native replacements using the updated context) and Submission Commitment Recovery (recover supported candidates when the final answer violates task requirements), with no extra backbone forwards. Consistent gains in average accuracy over native ME-DLM across four inference budgets on code generation and math reasoning; at one-eighth of the full scheduled forward budget, six-metric average accuracy improves by 7.44 points, including +11.37 on MBPP and +10.05 on MBPP+.

Source: https://arxiv.org/abs/2611.25763

**2611.25717** VR-SparseQuant: Accurate FP4 Quantization with 2:4 Sparsity on Vera Rubin — Exploits Vera Rubin's new elementwise 2:4 structured sparsity to recover accuracy in four-bit activation quantization while keeping native FP4 execution: two overlapping sparse streams share the same FP4 value budget, offline scale-ratio calibration avoids runtime search, and a shared-weight GEMM accumulates both streams. On Nemotron-3-Nano-30B-A3B, WikiText-2 perplexity drops from 6.85 (dense RTN W4A4) to 5.57; native Rubin kernels achieve up to 3.1x GEMM and 2.7x MoE speedup over BF16.

Source: https://arxiv.org/abs/2611.25717

**2611.25814** What Does Anti-Hallucination Training Buy? Saying Less, Cheap Pruning, and the Rest — Re-analyses object-hallucination preference training on vision-language models by comparing each trained system against its base model's caption truncated to the same object recall (removing gains from brevity), and against a deliberately weak, frozen 11-feature post-hoc probe fitted on 500 annotated images. For eight public methods on LLaVA-1.5-7B, the probe reproduces at least two-thirds of the beyond-brevity gain for 7 of 8 methods on COCO, 8 of 8 on AMBER and 6 of 8 on Object HalBench; probe- or CLIP-labelled DPO recovers 0.70 and 0.87 of ground-truth-labelled DPO's beyond-brevity gain on Qwen2.5-VL, both beating length-matched random labels.

Source: https://arxiv.org/abs/2611.25814

**2611.25557** The Coverage Selection Gap: Ranking, Not Generation, Limits LLM Rubric Construction — Studies automatic rubric construction for M&A due diligence from source documents without a reference rubric, introducing a multi-axis generation framework plus a "coverage-selection gap" metric that separates failure to discover criteria from failure to select them (reference-free ranking vs a reference-informed greedy diagnostic under fixed budget). On 16 development and four held-out tasks the framework reaches 0.876 macro recall against senior-authored rubrics under an LLM criterion-equivalence protocol; adding new structural search axes improves recall 6–10 points while more generation volume on existing axes yields at most 1.5.

Source: https://arxiv.org/abs/2611.25557

**2611.25539** COVERAGE-TRACE: Source-Side Counterfactual Tracing for Detecting Omissions in LLM Summaries — Evaluates omission as dependence on a designated atomic source fact: replaces only the target fact with type-matched alternatives, holds the candidate summary fixed, and measures the change in teacher-forced length-normalized likelihood. On 80 matched covered/omitted QMSum pairs across four open-weight models, Multi-CF achieves 0.764–0.825 AUROC versus 0.640 for the strongest text-only baseline; on Falcon-7B targeted interventions reach 0.779 AUROC while shuffling counterfactual assignments collapses to 0.533. Authors note paraphrase adjustment lowers AUROC to 0.591–0.624, so it is not wording-invariant.

Source: https://arxiv.org/abs/2611.25539

**2611.25429** Evolve Where It Matters: Coverage-Guided Self-Evolution of Agent Skills — Introduces SkillPlumber, in which an agent revises its own natural-language skill instructions using instruction-level coverage labels (follow / not-follow / not covered) that separate wrong instructions from unfollowed ones, with a persistent root-cause analysis agent and a maintainer distilling cross-task strategies. Across three benchmarks and three executors, SkillPlumber solves 64.7%–70.5% of tasks, 25.6–30.4 points above the initial skill and 8.7–14.0 points above the strongest baseline; removing coverage reduces recovered failures by 20.8% on SkillsBench with GPT-5.5.

Source: https://arxiv.org/abs/2611.25429

**2611.25357** Pro² Agent: Scientific Problem Probing for Autonomous AI R&D — Shifts the primary state of an autonomous AI-research agent from the codebase to an explicit "Problem State" of what blocks success and which solutions might address it, initialized by resource/constraint analysis, then updated through controlled hypothesis testing of suspected problems and candidate solutions. On the complete MLE-Bench it matches the best reported medal rate (70.7%) under the standard 24-hour budget and reaches 76.0% at 48 hours, the highest reported on the complete benchmark, and is competitive on PostTrainBench.

Source: https://arxiv.org/abs/2611.25357

**2611.26132** Sage-Evolve-Preview: Adaptive Observation for Post-Training Self-Improvement — Argues that anchor-only feedback in post-training recursive self-improvement confuses an exhausted observation with an exhausted capability, and introduces AdaObs: at a plateau, a controller refines diagnostic granularity, escalates difficulty and adds related tasks, with validated increments fused back into training while every checkpoint is still evaluated against the anchor. Across eight independently optimized anchors in long-context reading comprehension and instruction following, AdaObs raises the mean score from 66.4 to 73.7 under a matched data budget, beating the FixedObs anchor-only baseline, and improves the seven-task PostTrainBench average across two agent backends.

Source: https://arxiv.org/abs/2611.26132

**2611.25896** The Price of an Explanation: What Demanding Verifiable Artifacts Costs, and What It Buys Back — Measures the cost of requiring a verifiable artifact (an executable program) on the 120-task ARC-AGI-2 set: demanding one drops LLM scores from 93 to 68 tasks (77% → 57%), and of the 25 tasks lost, 21 were reached by no program-producing configuration at any budget, while for 27 of 28 tasks only the answer-only arm solved, some program arm held a program reproducing every demonstration yet failing the test — the bottleneck is generalizing an explanation, not finding one. A short evolutionary search over two already-sampled programs, at no extra model cost, beats best-of-2 sampled code by 9.2 ± 1.4 tasks and 1-shot sampling by 9.9 ± 1.3; early termination saves up to 38% (best-of-n) and 49% (evolved) of budget.

Source: https://arxiv.org/abs/2611.25896

**2611.25818** Anchor and Check: Deterministic Cross-Prompt, Cross-Model Reconciliation for Auditable LLM Decisions — Defines a small reconciliation contract for discrete LLM decisions: commit the target model's greedy answer (the anchor), draw one or two greedy checks reaching it by a different route (alternate prompt or another model family), and let a pure function return one of five outcomes, of which only "Agree" is acted on. On 48,000 model-item evaluations over 6,000 questions with verbalized confidence as tie-breaker, pooling another family's samples raises semantic entropy's AUROC by 1.7–4.0 points at every budget while a same-model temperature check is weakest; under the strict Agree gate the pipeline automates 70% of items and still acts on 16% of errors, with each decision replayable from its record.

Source: https://arxiv.org/abs/2611.25818

**2611.25436** Raptor: Rejection-aware Adaptive Tree based on Speculative Decoding — A training-free framework for tree-structured speculative decoding of vision-language models that uses rejection feedback to jointly regulate candidate coverage and drafting effort, arguing acceptance length alone cannot distinguish insufficient coverage from excessive deep expansion. Rejection-aware signals jointly drive bounded, momentum-smoothed updates of tree depth, branching width and drafting budget, with execution control that limits unnecessary drafting. Experiments with two VLMs across seven multimodal benchmarks show up to 2.39x average speedup over autoregressive decoding.

Source: https://arxiv.org/abs/2611.25436

**2611.26264** A Statistical Framework for Training Data Auditing of Large Language Models — A unified framework for document-level membership inference, target-collection global auditing and suspicious-subset identification, combining chunk-level membership evidence via Cauchy combination into document scores with calibrated p-values, and giving finite-sample validity of document-level p-values, type-I error control for global auditing, and FDR control for subset identification under stated exchangeability. Case studies on BookTection, Pile-arXiv, Cosmopedia and HealthCareMagic cover both pre-training and fine-tuning data.

Source: https://arxiv.org/abs/2611.26264

**2611.25903** From Cases to Criteria: Reusing Evaluation Knowledge for Task-Specific Rubric Generation — Introduces RubricDuo, which organizes historical query-rubric pairs into a rubric knowledge graph linking evaluation dimensions, shared/local concepts, criteria and queries, abstracting reusable evaluation requirements as shared concepts; it drafts a rubric for a target query from relevant concepts plus retrieved cases, then revisits each draft criterion against concept-linked historical criteria. On RubricBench and HealthBench, RubricDuo achieves the best overall performance among evaluated automatic methods for both alignment with human-authored rubrics and downstream LLM judging.

Source: https://arxiv.org/abs/2611.25903

**2611.25430** Interference Bounds and Merge-Aware Training Dynamics for Composable Fine-Tuned Models — Formalizes composability of task vectors and proves the merged model's excess loss is controlled by an interference functional of cross-task curvature overlap and signed update alignment; in the quadratic regime the functional equals the excess loss, giving a necessary-and-sufficient criterion measuring the angle between task vectors in the curvature metric. A curvature-guided regularizer (built from curvature statistics that memory-efficient optimizers already maintain) keeps displacement below a ceiling at the standard O(1/√T) non-convex rate and converts into a ceiling on the interference functional; experiments on an exact non-quadratic model confirm budget and ceiling, and in a three-seed transformer study the functional is rank-correlated with merging degradation but no more strongly than Euclidean displacement norm.

Source: https://arxiv.org/abs/2611.25430

**2611.26020** FrontierReplay: Split-Free Exact Prefix Caching for Hybrid Language Models — A prefix caching system for hybrid (attention + recurrent) LMs that materializes exact checkpoints at structural boundaries predictable in advance (turn ends, known branch points) without cutting the prefill, logging a short window of recurrent-layer inputs and invoking a cross-layer, state-only replay kernel that builds the target state 6–37x cheaper per token than full recomputation without host synchronization. Across hybrid architectures, scales and workloads it lowers median TTFT by 16–89% (up to 8.9x), raises SLO capacity up to 1.73x and improves goodput up to 4.26x; versus approximate replay it delivers up to 1.54x higher goodput while preserving exact task accuracy (approximation cost up to 17% accuracy on long contexts).

Source: https://arxiv.org/abs/2611.26020

**2611.26538** LLM GerryMandering: Separating Interactions from Additive Effects in LLM Audits — Shows the standard intersectional-audit criterion (flagging subgroups that exceed each attribute alone) produces false positives even when attributes act independently: on 150 synthetic datasets with no interaction it flags 66.1 false subgroups per dataset on average, and with planted interactions a repaired null recovers only 32%. Introduces ADDIS, which fits an additive model over all attributes and scores subgroups by additive residual distance against a Freedman-Lane null, flagging 0.09 false subgroups per dataset and recovering 84% of planted interactions; applied to 13 open models with 10,000 synthetic Indian personas, ADDIS flags 3.0% of 738 subgroups versus 7.1% for the standard criterion.

Source: https://arxiv.org/abs/2611.26538

**2611.25735** PosteriorBench: Evaluating Behavior Posterior Sampling in Language Models — A benchmark for the behavior posterior sampling problem: given a model and a behavior of interest, sample efficiently from the distribution over transcripts exhibiting it. Contains 21 tasks on Qwen3.5-0.8B with behavior probabilities from 1e-5 to 1e-1 and exact posterior samples from a corpus of one billion labeled responses. No evaluated method is both efficient and faithful: prompting is cheap but plateaus at high KL, fine-tuning on posterior samples is often cost-prohibitive, and prior training methods do no better.

Source: https://arxiv.org/abs/2611.25735

**2611.25916** Many Solutions, One Answer: Search Order Shapes the Default Solutions of Language Models — Studies four open-weight models from three families on symbolic puzzles and multi-solution ZebraLogic variants with known solution sets, finding repeated samples concentrate far beyond uniform on one default solution that models often share, while models readily produce rarely sampled solutions when clues uniquely identify them. Comparing name-order search against fewest-candidates-first search, the latter matches a larger share of responses in all four models by 26–40 percentage points; randomising presentation or supplying a random search order raises answer breadth by 26–42 points on the symbolic task and 11–26 on ZebraLogic, at validity losses of at most 3 and 4 points.

Source: https://arxiv.org/abs/2611.25916

**2611.26413** Sequential Anytime Valid Tests for Efficient Inference-Time Alignment — Proposes e-RWSC, replacing Wald's SPRT with a betting supermartingale (e-process) for each candidate answer to give an anytime-valid stopping rule for reward-weighted self-consistency (Best-of-N-style) selection: the probability of ever certifying a non-dominant answer is bounded by alpha uniformly over time and across answers, with certification requiring O(log(1/alpha)/d_KL) samples. Experiments across several language models, datasets and reward models confirm the predicted 1/d_KL cost scaling and show improved accuracy over baselines at substantially lower token cost.

Source: https://arxiv.org/abs/2611.26413

**2611.25325** Pandora's Toolbox Or Why Agent Safety Cannot Be Verified — Argues that because current AI agents couple a fixed language model with a general computing device, agent safety is undecidable: given a dangerous program, no algorithm can predict whether an agent will run a semantically equivalent one, so guardrails, blacklists, whitelists and certifications are only imperfect. Under finite constraints (bounded context, values, runtime) safety is decidable but still intractable, and the safety problem is PSPACE-complete even when the agent description is known; safety is also non-compositional — agents proven safe individually can be unsafe when grouped.

Source: https://arxiv.org/abs/2611.25325

**2611.26311** SWE-Recreation: Benchmarking Coding Agents for Software Recreation — Asks whether an agent can understand an unfamiliar product purely by using it and then rebuild it, with only rendered pixels and pointer/keyboard access (no DOM, source, logs or back-end). The benchmark has 54 real applications (28 websites, 26 Android apps) and 1,446 hidden requirements covering multistep stateful workflows and explicit exclusions, graded by a fixed pixel-evidence judge plus a post-hoc exploration-coverage judge. Five frontier systems reach at most 0.530 weighted fidelity and 22.9% fully reproduced requirements under application-equal averaging.

Source: https://arxiv.org/abs/2611.26311

**2611.25760** Characterizing and Detecting Unfaithful Work Reports by Coding Agents — A mixed-methods study of self-admitted unfaithful coding-agent work reports from real developer–agent conversations (SWE-chat), identifying eleven subtypes in four categories (misreported observations, misattributed evidence, overstated task success, faulty technical explanations), with overstated task success most common. Handling such problems takes on average 4.3 further user turns and 12.71 minutes of recorded response/execution time; among 435 separately sampled and annotated reports a substantial share contained at least one unfaithful claim, and the new FaithDetector attains macro-F1 about 13 points above baseline.

Source: https://arxiv.org/abs/2611.25760

**2611.26335** ClosureBench: A Benchmark for Reasoning under Closure Assumptions — Tests whether LLMs follow stated rules for missing information, evaluating every base scenario under OWA, CWA and LCWA closure variants where only the treatment of missing information changes, with agent extensions for action choice, source scope and updates; a model is correct on a base scenario only if correct in all its closure variants. Across 960 instances overall accuracy ranges 71.18%–99.86% while core switch accuracy (scenarios whose gold label changes with the contract) ranges only 18.23%–99.31%, with large discrepancies under LCWA.

Source: https://arxiv.org/abs/2611.26335

**2611.26286** Twice-Told Critiques: Claim-Level Homogenization of Peer Review in the LLM Era — Measures critique overlap in conference and journal peer reviews: at ICLR overlap rose from 12.0% to 21.3% between review stages within the same year-on-year comparison, with similar rises at NeurIPS, ICML and the F1000 and PLOS journals, and a third ICLR review adding 5.46 new problems versus 6.12 previously. Applying the MELD LLM-text detector, two reviews that MELD flags overlap by 3.0 points more than unflagged pairs at ICLR in 2024–2025, 4.5 points in 2026–2027 and 5.4 points across five journal sources.

Source: https://arxiv.org/abs/2611.26286

**2611.25861** Decoupled Knowledge Retrieval and Compact Memory Enable Reliable Lifelong Model Editing — BiSpace separates memory retrieval from knowledge injection for lifelong model editing: queries are routed and relevant edits identified in an external semantic space, while knowledge is injected into the LLM's internal representation space through sparse, storage-efficient updates. It shrinks per-entry storage to about 10.2% of the original, stays resilient to edit sequences of up to 16K edits, and improves Overall Performance by more than 23% over existing methods on a harder benchmark.

Source: https://arxiv.org/abs/2611.25861

**2611.26336** One Framework to Diagnose Them All: A Stratified Benchmark for Bengali LLM Hallucination — Alikbachan is a Bengali hallucination-detection benchmark stratified along a human-validated cultural-distance band, six task types and a five-family, 32-mode taxonomy, with a harvested 2,516-item test set and a quota-constructed gold-labeled 5,000-item set. Four zero-shot LLM judges vary by over 30 macro-F1 points across strata; judge verdict probabilities rank items well (ROC-AUC 0.74–0.95) but are overconfident (ECE 0.04–0.29). An open competition drew 222 teams and 3,566 submissions; of 25 teams in both phases, 24 regressed on Phase 2 (mean −17.6 points) while every zero-shot judge improved, and Phase-1 rank barely predicted Phase-2 rank (Spearman ρ = 0.35).

Source: https://arxiv.org/abs/2611.26336

**2611.25534** How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study — Lets models rewrite expert-written agent skills round after round with no task, run or judgment, then evaluates agents built on those rewritten skills. Skills lose value rather than improve: every model tested performed worse on every benchmark, by 15 points on average on SkillsBench after thirty rounds. Rewriting pulls skills toward the model's own prior and gives up first the knowledge outside it; restoring that knowledge recovers much of the lost pass rate, and the proposed SkillDiff (marking that knowledge in place) raises SkillsBench pass rate by 4.8 points on average without feedback or text changes.

Source: https://arxiv.org/abs/2611.25534

**2611.26346** Context as a Resource — Argues that funnelling interleaved conversations and events into one linear session with frozen weights causes cross-topic constraint bleed and head-of-line stalling, while router-ticket hierarchies incur lossy prose handoffs and blind merges (true-conflict repository merges collapse to a 33.3% three-run mean). Proposes ClonAct, a routerless architecture virtualizing context blocks via a pluggable single-pass non-generative Context MMU, in-place Context Cells, a footprint-aware Synaptic Bus with an isolated trial merge gate, and a wave-flushed Shared Trunk. Across three programmatic multi-stream benchmarks and three model families, the trial merge gate lifts true-conflict merges to 63.3%, with ClonAct reaching that ceiling using 45.9% fewer prompt tokens, and under continuous surge streams it matches top completion (95.0%) with the lowest median wait.

Source: https://arxiv.org/abs/2611.26346

**2611.25955** Web search in Latin America: language models use less local and diverse news than search engines — Builds a dataset of 1,901 current events across nine Latin American countries with realistic queries submitted to three search engines and four language models, varying query language and user location (local, diaspora, tourist, foreign). Across 49,207 requests and 8,834 unique domains, language models return a less diverse set of news sources than search engines; for local users, search engines already return only 41.3% local news and language models 3.6–11.6 points less, suggesting LLM-based search can reproduce and sometimes amplify geographical hierarchies in news visibility.

Source: https://arxiv.org/abs/2611.25955

**2611.26480** Held While Waiting: What LLM Agent Sessions Reserve on Serverless and Agent Runtimes — Measures that LLM agents on Amazon Bedrock AgentCore wait a median of 2.7 seconds per model reply and compute for only an estimated 5–40 ms, yet AgentCore reserves a separate environment (VM with its own memory) per conversation and holds it until the conversation closes: 1,000 conversations reserve 1,000 environments to do the work of 2–15 processor cores. A customer-service benchmark shows conversations average 33 seconds but their environments are held 15 minutes longer unless the client closes them; in simulation, 64 conversations sharing one environment need 59x fewer environments with 99% of replies delayed by at most 40 ms.

Source: https://arxiv.org/abs/2611.26480

**2611.25605** Copilot or Culprit? How AI Is Changing Open-Source Bug Reporting and Maintenance — First large-scale study of 120,918 bug reports from 101 open-source projects between January 2024 and September 2026, tracing AI involvement from discovery and reporting through validation and resolution. AI-involved reports become more complete over time with a growing share confirmed valid; AI used for reproduction and diagnosis is associated with higher validity, whereas AI-written report text is not. Maintainers increasingly use AI to investigate code and recommend fixes but devote more effort to AI-assisted reports of human-discovered bugs than to AI-discovered ones; following the paper's guidance, 53 submitted reports on AI-discovered bugs were 69.81% accepted.

Source: https://arxiv.org/abs/2611.25605

**2611.26601** SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research — A systematization framework rating LLM vulnerability-research capability on an autonomy scale modeled on levels of driving automation, qualifying each claim by correctness, availability and evidence strength. The authors find agents discovered, validated and patched real-world vulnerabilities without human intervention before the restricted frontier models of 2026, with open-weight models later attaining comparable autonomy for discovery and validation; in 2026 disclosed vulnerabilities more than doubled with a growing share rated critical or high, while report-to-fix and disclosure-to-attack times have not shifted noticeably.

Source: https://arxiv.org/abs/2611.26601

**2611.25970** The Depth of a Prediction: Where Language Models Resolve a Word Predicts Human Reading Time — Reads each word's prediction at every layer with the tuned lens and summarizes the layerwise surprisal trajectory by its "resolution depth". On eight English eye-tracking and self-paced reading corpora (81,957 words) and ten GPT-2, OPT and Pythia models, later-resolved words (and the words after them) are read more slowly than equally surprising words; resolution depth improves held-out prediction beyond final-layer surprisal, entropy and the best single layer by 0.26 millinats per word (pooled p = 0.001), about a third of entropy's gain, and is positive in seven of eight corpora against layer-shuffled depth (random-effects mean 0.23, p = 0.016).

Source: https://arxiv.org/abs/2611.25970

**2611.26296** SKILL.PNG: Learning Agent Skills in Pixel Space — Optimizes "image skills" whose pixels are trained by gradient descent through the vision encoder of a frozen VLM, making skills continuously optimizable and transferable across agents (unlike model-specific fine-tuning) and comparable in token cost to text skills. Skill.png beats frontier-LLM-optimized textual skills in 9 of 16 settings (4 VLMs, 4 benchmarks) while using only 64–256 image tokens instead of roughly 900–2000 text tokens; hybrid text+image skills improve further, and an image optimized on an ensemble transfers across the ensemble.

Source: https://arxiv.org/abs/2611.26296

**2611.26590** Probing the "Conscious" Mind: Selective Access and Global Workspace in Vision-Language Models — Introduces MC-Lens, a multimodal Jacobian lens mapping intermediate states of a VLM's vision encoder and language decoder into a shared semantic space defined by the decoder's vocabulary, plus internal concept interventions to test whether accessed concepts drive downstream computation. Counterfactual experiments show accessed concept information participates in reasoning; two new J-space metrics track cross-modal concept alignment more clearly than hidden-state cosine, and reliable selective access develops later than concept accessibility, with shared patterns across VLM families and sizes.

Source: https://arxiv.org/abs/2611.26590

**2611.26228** Attention Head Specialization: Phase Transitions in Sample Complexity — Studies how attention-head specialization depends on data volume rather than training time, finding BERT heads specializing in syntactic relations emerge as dataset size increases. In a solvable high-dimensional model of multi-head attention, specialization is shown to be a genuine phase transition in sample complexity, appearing as non-analyticity in test error; depending on data structure and regularization, specialization either follows uninformative head differentiation or proceeds as a cascade of transitions recovering progressively weaker latent features, and the authors relate these statistical transitions to stagewise emergence during online learning.

Source: https://arxiv.org/abs/2611.26228

**2611.26081** Learning to Compare Neural Representations from Parameterized Computation Graphs — Asks whether internal representation similarity across independently trained models can be predicted from their parameterized computations rather than measured directly, introducing a graph metanetwork that embeds each internal site from its upstream computation while accounting for hidden-coordinate permutation and attention-basis transformation, with conditional guarantees for layer retrieval and stitching selection. The learned predictors support relation estimation and low-regret layer retrieval and select useful stitching connections without being trained on stitching outcomes.

Source: https://arxiv.org/abs/2611.26081

**2611.26201** Learn, Freeze, and Transfer an Activation Function Across Architectures — A learn-freeze-transfer protocol in which a pointwise activation with globally shared parameters is optimized jointly with a source network, frozen, and reused in target networks trained from scratch; instantiated as FAct, a five-parameter truncated Fourier-series activation initialized from a Fourier approximation of GELU and learned in a ViT on ImageNet-1K. Frozen FAct improves top-1 accuracy by 1.46 points over GELU in a same-architecture ViT, and across four smaller target architectures and four datasets it has the best mean accuracy among eleven activations in 15 of 16 settings (up to +1.71 points), ranking first in 11 of 16 even under per-activation learning-rate and weight-decay tuning.

Source: https://arxiv.org/abs/2611.26201

**2611.25476** WeightCode: Installing New Capabilities into Neural Networks via Weight-Space Programming — Shows that executable programs which read, construct or modify a network's weights directly can install new capabilities into trained networks without gradient-based training; WeightCode uses a frozen LM to write weight programs that install new computations using task knowledge and existing weights, and the installed capability then runs independently of the LM. Given a grammar or eight demonstrations, weight programs enable unseen command compositions (0% → 99.8% exact match) and a new pickup action (0% → 98.4%) while preserving original capabilities; on ImageNet four weight programs gain 8.84–17.62 points while preserving clean accuracy, beating the best of eight fine-tuning methods under matched constraints, and rerunning on five independently trained ViTs retains 83–110% of source-network gains on average.

Source: https://arxiv.org/abs/2611.25476

**2611.25387** TuringSpace: Grounding Spatial Intelligence in Action with Interactive CAPTCHAs — A synthetic web environment of 125 interactive CAPTCHAs spanning five spatial abilities that must be solved by clicking and dragging on screen, with program-generated instances, checkers and oracles that double as a scalable training gym. Humans solve 94.1% of tasks while the best model (GPT-6 Astra) still fails 25.9% and the best open-weight model (Kimi K3) fails 68.0%; fine-tuning Qwen3.5-9B on the gym lifts success from 1.6% to 33.1% and improves all seven out-of-distribution benchmarks, including a 9.9-point gain on VSI-Bench.

Source: https://arxiv.org/abs/2611.25387

**2611.26256** SkillBridge: Cost-Aware Diagnosis and Repair of Cross-OS Compatibility Defects in Agent Skills — A contract-based workflow (static analysis, dynamic validation, repair) for diagnosing agent-skill failures caused by OS assumptions spread across guide text, scripts, metadata, install contracts and local entrypoints. Screening 3,270 skill-target-OS cases over 1,090 skills across Linux, macOS and Windows, then repairing the responsible contract field raises the reviewer-judged target-task pass rate from 30.6% to 38.4% (+7.8 points); SkillBridge reaches 38 confirmed OS issues with 185 dynamic validations where uniform random selection would need ~865.

Source: https://arxiv.org/abs/2611.26256

**2611.25543** Efficient Multimodal Agents for Auditing 3D Worlds — Trains a 4B VLM end-to-end on verified trajectories of a frontier teacher guided by Bayesian search so it can navigate and trigger glitches in generated 3D worlds; six such explorers match a frontier model on navigation and triggering, but recognition lags, so a frontier model reviews what they record. The resulting auditor succeeds on 55.9% of 213 WorldAuditBench tasks in Unreal Engine 5 and Three.js worlds, 13.6 points above the strongest reported auditor at under a quarter of its cost, matching the frontier reviewer exploring alone at 4.6x lower cost, and without further training matches it on embodied questions about real-world scans, beating four other frontier models by 6.4–16.6 points.

Source: https://arxiv.org/abs/2611.25543

**2611.26624** PlayCraft: Designing Engaging Games from Agent Play Experience — An automated framework where a vision-based player agent plays games and reports progress, outcomes, decisions and reflections, and a crafter agent uses those reports to estimate player abilities, predict performance at different proficiency levels, compare against a target learning progression and revise the game to close gaps. Evaluating games in fresh runs with player agents across three intelligence settings, PlayCraft yields larger learning gains and steeper learning slopes than the initial games and beats the baselines on the macro-average of both metrics at every intelligence setting.

Source: https://arxiv.org/abs/2611.26624

**2611.26171** The FrontierOR Challenge: Agentic Algorithm Design for Operations Research — A benchmark for whether LLM agents can design algorithms that scale to realistic instances: in one-shot evaluation the strongest model matches Gurobi (objective within 1% and no slower) on only 39% of large instances. The challenge releases 60 of 180 audited problems across six application categories and five formulation types in weekly rounds of 15, with a second stage introducing unseen problems; two tracks (network-isolated sandbox with open-source dependencies, or self-hosted within a timed window) are ranked by objective ratio to a frozen known reference, with feasibility checked on every solution.

Source: https://arxiv.org/abs/2611.26171

**2611.25489** When Should a Voice Agent Speak? End-of-Turn Detection in Turkish — Examines the decision at the onset of silence using turn ends and turn-internal pauses from the Real-TurnTurk corpus of Turkish dyadic video calls, comparing a fine-tuned Turkish TurnGPT model, a zero-shot Turkish model and a deployed multilingual detector, plus voice-activity timing and facial features, under recording-disjoint and speaker-disjoint evaluation with paired cluster bootstrap tests. The fine-tuned model separates turn ends from pauses better than both text baselines and is the best calibrated; combining it with speaker timing features gives the best timing-based results, and in a latency simulation adding the text score to a silence timeout shortens mean response delay at the same interruption rate.

Source: https://arxiv.org/abs/2611.25489

**2611.25658** SiliconGym: A Versatile Reinforcement Learning Environment for Agentic EDA — A cross-task, cross-toolchain RL environment for hardware design and verification, decoupling versioned workspaces, budgeted execution and acceptance-gated scoring so it scales from module-level RTL, testbench and PPA tasks to multi-round repository repair and full-hierarchy SoC flows. Streaming dispatch overlaps tool checks with generation, finishing a 256-answer RL batch 21.9% faster than native ChipSeek, and results show open-source-trained functional correctness transfers cleanly to commercial simulation.

Source: https://arxiv.org/abs/2611.25658

**2611.25412** ChainAgent: Automated Chainable Vulnerability Discovery in PHP Web Applications — A goal-directed LLM-agent framework that jointly discovers exploit-chain components and capability dependencies in source code, representing vulnerabilities and functional gadgets via preconditions and capabilities over security-relevant objects, and using an evolving exploit graph to search backward from unmet preconditions and forward from discovered capabilities. Grounded in an empirical study of 386 real-world web exploit chains, ChainAgent achieves 42.02%–44.63% recall for goal-reaching components across 15 PHP applications and three shared LLM backends, recovering up to 4.4x more correct dependency edges than Codex; on 30 further real-world applications it identified 20 vulnerabilities and 13 chains, nine achieving remote code execution.

Source: https://arxiv.org/abs/2611.25412
