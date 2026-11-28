# arXiv LLM Research — Backlog Write-ups from the 2026-11-11 Batch (Task 1)

## Batch summary
- 186 papers were available in the local backlog file (`tmp/nov12/unwritten.json`), spanning arXiv id range 2510.15265 – 2611.14511, with the bulk in the 2611.13xxx–2611.145xx range (the 2026-11-11 submission cycle).
- 28 papers were selected as the most significant for LLM research; the rest were application-only (robotics, medical/finance deployment, time-series, vision-only, audio) or had abstracts too vague to support a technical write-up.
- A further ~10 papers were strong but displaced at the margin: `2611.14068` (CAGE 4 benchmark audit), `2611.14210` (Tree-Ising weight repair), `2611.14483` (logic of mechanistic inference), `2611.13730` (tritify deterministic integer inference), `2611.14418` (precision-on-demand decoding), `2611.13412` (prefix-cache serving collapse), `2611.13306` (HiLo LoRA synchronization), `2611.13144` (student-aware teaching), `2611.12953` (agent architecture cost–success trade-offs), `2611.14010` (model fingerprinting).

Thematic clusters identified:
1. **RL post-training and reward design under matched compute** — dense vs. sparse rewards in GRPO, on-policy distillation (teacher selection, bootstrapping, multi-teacher routing), test-time reward correction, test-time branching. Dominant methodological theme: compute-matched evaluation overturns per-update rankings.
2. **Measurement skepticism / benchmark audit** — failure taxonomies that are artifacts of the labeling procedure, agent benchmarks whose saturation lives in the metric, checklist-based research-agent benchmarks, and audits of measurement protocols.
3. **Inference efficiency and serving systems** — speculative decoding budget scheduling, block-sparse long-context prefill, diffusion-LM parallel block decoding, KV-cache reuse across model updates, training simulators, and production training-validation tooling.
4. **Interpretability and internal representation analysis** — null models for "attention surgery", concentrated vs. diffuse head dropout, MoE neuron-level specialization, stagewise emergence of inside-outside computation.
5. **Tokenization and multilingual equity** — Havon multi-word tokenizers, the Indic token tax, sovereignty cost of inherited vocabularies, and encoding-choice sensitivity of byte-level LMs.
6. **Agent reliability, verification and harnesses** — trajectory-centered error attribution, verifier generation, distilling SOP agents into code workflows, long-horizon agent serving under prefix caching.

Note on self-reporting: every quantitative claim below is as stated by the authors in the abstract; no independent verification was performed (no web access used for this task).

---

### Are Dense Rewards Worth Their Tokens in GRPO? — `2611.13560`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
The authors argue that comparing dense process rewards to GRPO per training update, or vetting them with a single-batch gradient test, ignores their true cost. They introduce a matched-compute protocol that equalizes generated tokens and training GPU-hours across interventions, run as preregistered studies with side-effect controls over 1,668 runs on six models. The headline finding is a reversal: a Monte-Carlo step reward that beats GRPO per update on Qwen2.5-1.5B ends up lower at equal tokens and equal training time, and no dense-reward variant beats GRPO even with more time. A gradient test overestimates each reward's gain by one to two points, while prompt selection by predicted probability near 1/2 of failure improves accuracy at matched compute.

**Key numbers:** 1,668 training runs across 6 models; Monte-Carlo dense reward −14.3 pp vs. GRPO at equal tokens and −7.8 pp at equal training time on Qwen2.5-1.5B; failure-probability prompt selection +1.7 pp on Qwen3-0.6B and +0.8 pp on Qwen2.5-1.5B; gradient test overestimates gains by 1–2 points; continuation sampling consumes 91% of all generated tokens in their setting.

**Source:** https://arxiv.org/abs/2611.13560

### Free Lunch Uncertainty: Sequence-Level Rényi Entropy from Particle Decoding for Adaptive LLM Reasoning — `2611.13414`
**Category:** Machine Learning (cs.LG) | **Section:** Cross submissions
The paper shows that Sequential Monte Carlo decoding for power sampling already estimates the normalizing constant of the power distribution, yielding sequence-level Rényi entropy (SRE) of the completion distribution at essentially zero marginal cost, with a guarantee at every particle budget. A Rényi chain rule extends this to stepwise entropies of any order, and they prove orders above one track the most likely token at each step (explaining their correlation with log-probability), while the order-1/2 member accumulates log per-step search effort. That order-1/2 signal is evaluated as a zero-cost selective-prediction signal against log-probability on MATH500, and used to drive a two-pass particle-allocation policy.

**Key numbers:** order-1/2 SRE best zero-cost selective-prediction signal in 10 of 13 settings; AUROC 0.022–0.044 above log-probability on MATH500 for all four models, stable within length quartiles; 8-particle probe identifies problems needing more particles; two-pass policy matches 64-particle accuracy with 34.2% fewer particles over three seeds.

**Source:** https://arxiv.org/abs/2611.13414

### ForeSpark: Joint Draft and Verification Budget Scheduling for Parallel Speculative Decoding — `2611.13442`
**Category:** Distributed, Parallel, and Cluster Computing (cs.DC) | **Section:** Cross submissions
Existing parallel-drafter systems control only how many tokens are verified, so every request still drafts a full block; the authors observe that drafting consumes up to 40% of step time at high load and most of it is discarded. Because a parallel drafter commits to its length in a single pass, autoregressive draft-length control does not transfer, so draft and verification lengths must be selected jointly across the batch while remaining cheap per step. ForeSpark implements work-conserving speculation via a context-aware pre-draft estimator, a joint draft–verify scheduler using a global sort, and a post-draft budget distribution, implemented on vLLM without changing the output distribution.

**Key numbers:** drafting consumes up to 40% of step time at high load; up to 1.77× throughput over DSpark and 2.49× over autoregressive decoding at matched per-request generation rate; sustains up to 1.51× DSpark's request rate under latency SLOs.

**Source:** https://arxiv.org/abs/2611.13442

### Sanity Checks for Attention Surgery: Null Models and Matched Interventions for Representation-Motivated Design — `2611.13543`
**Category:** Machine Learning (cs.LG) | **Section:** Cross submissions
The paper formalizes three reusable checks for the common practice of measuring a statistic on internal representations, removing it architecturally, and claiming an improvement: the statistic must exceed a noise floor, survive a geometric null, and the training gain must require the specific direction removed. Applied to self-attention removal (deleting the component of a head's output aligned with its own value vector) across nine pretrained models and 5,408 heads, an earlier-position causal null explains a large share of the head–value cosine alignment, and under grouped-query attention the alignment is specific to a head's own key–value group. A pre-registered 3-arm × 8-seed factorial training study tests whether the gain requires the own-value direction.

**Key numbers:** 9 models, 5,408 heads, 124M–6.9B parameters; earlier-position null accounts for 48–63% of head-value cosine alignment; within-group cosine +0.24 to +0.27 vs. across-group −0.11 to −0.19 under GQA; split-half reliability r_Δ = 0.80 (GPT-2), 0.42 (Pythia-160M), 0.53 (Pythia-410M), structural r_stat > 0.99; 4.0×10⁸ tokens per run (399,900,672 total); self-directed removal −0.0029 nats (Holm p = 0.0023) vs. fixed arbitrary direction +0.0011 nats (p = 0.197).

**Source:** https://arxiv.org/abs/2611.13543

### Agent Benchmarks Stop Ranking Before They Run Out of Tasks — `2611.13541`
**Category:** Artificial Intelligence (cs.AI) | **Section:** New submissions
The authors re-score released runs of eight agent benchmarks (MLE-bench, ALE-Bench, SWE-fficiency, AlgoTune, plus SWE-bench Verified and Terminal-Bench) and argue much of the apparent saturation lives in the measurement rather than in the tasks. Most agent benchmarks collapse a run to one pass/fail bit, which is too coarse — neighboring top-ten agents on SWE-bench Verified differ by less than the tests' own error rate — and is capped at the reference, as ALE-Bench's top ten tie when graded against the median human even though nearly half of runs beat that human. They propose a clipped log-ratio score with dated anchors, with cost as a separate axis, and report that pass/fail-tied models differ over tenfold on the quantity the tests discard.

**Key numbers:** 8 benchmarks re-scored; ALE-Bench top ten tie against the median human while ~half of runs beat it; re-scoring that corrects neighbours reorders them no more than deleting a random sixth of each agent's passes; Terminal-Bench re-run shows >10× spread on the discarded quantity among pass/fail-tied models.

**Source:** https://arxiv.org/abs/2611.13541

### Which Successes Make Good References? Action-Sequence Alignment for Multi-Turn On-Policy Distillation — `2611.13135`
**Category:** Machine Learning (cs.LG) | **Section:** Cross submissions
For multi-turn tool-use agents, on-policy distillation can condition the teacher on a validated successful trajectory of the same task, but different successes may reach incompatible interaction states and thus mislead the student. The authors cast reference selection as a free-target optimal transport problem that reduces to assigning each failed trajectory its most compatible successful reference, and use action-sequence alignment (implemented via longest common subsequence) as an observable proxy for compatibility since latent state paths are hidden. LCS isolates a shared ordered backbone of actions while permitting recoverable detours, and is evaluated against reference-free OPD on ALFWorld and the airline domain of τ³-bench.

**Key numbers:** LCS is the only evaluated reference selector to improve over reference-free OPD on ALFWorld overall score and on all three airline metrics; models trained on airline transfer to retail, where LCS improves all three metrics (no per-metric numbers given in abstract).

**Source:** https://arxiv.org/abs/2611.13135

### Bootstrapped On-Policy Distillation — `2611.13680`
**Category:** Machine Learning (cs.LG) | **Section:** New submissions
On-policy self-distillation (OPSD) replaces an external teacher with a reference-conditioned copy of the model, which gives large early gains but degrades over continued training. The authors attribute this to growing distributional mismatch between the frozen privileged teacher and the evolving reference-free student, so the teacher eventually supplies misleading supervision. Their fix is two-stage: use OPSD first to internalize task-relevant information from reference-conditioned supervision into an intermediate model, then distill that reference-free intermediate model into a fresh copy of the initial model. This converts privileged reference supervision into task-adapted signal that can be transferred without reference conditioning.

**Key numbers:** improves mathematical reasoning and code generation over both the initial models and the constructed OPSD teachers (no headline percentage in abstract; mismatch-driven degradation is characterized qualitatively).

**Source:** https://arxiv.org/abs/2611.13680

### Domain-Routed Delta Optimization for Multi-Teacher On-Policy Distillation — `2611.13249`
**Category:** Machine Learning (cs.LG) | **Section:** Cross submissions
Multi-teacher on-policy distillation typically routes samples to domain teachers but still updates shared student parameters. DRD-MOPD instead specifies which parameter components each domain's samples update: the student is a frozen base plus trainable components initialized from expert-minus-base weights, all of which participate in every forward pass, with four update modes and independent optimizer states. The paper analyzes retention of the original expert geometry via angles, projection coefficients, and energy, and compares against Open-MOPD's released checkpoint, whose increment energy largely escapes the span of the original expert directions.

**Key numbers:** 97.02% of Open-MOPD's released final checkpoint increment energy lies outside the span of the original expert directions; DRD-MOPD's own checkpoint after 20 updates retains coefficients near one per component direction with pairwise angles 88.04–92.41 degrees; exported BF16 student increment has 4.90% outside energy vs. 10.52% for the sum of saved FP32 components; 32.72% macro score across six benchmarks vs. 32.44% for the initial task-arithmetic merge.

**Source:** https://arxiv.org/abs/2611.13249

### Understanding Mixture-of-Experts Language Models Beyond Expert Boundaries — `2611.13975`
**Category:** Artificial Intelligence (cs.AI) | **Section:** Cross submissions
The paper moves past expert-level routing statistics to the neuron level, introducing Routing-Aware Magnitude Profiling (RAMP) to identify domain-specialized neuron sets and measure how that organization evolves through pre-training and post-training in three fully open MoE families. Neuron importance keeps reorganizing between pre-training checkpoints even when expert-level rankings look stable, while post-training largely preserves neuron rankings. They then build RAMP-based Pruning (RAMPr) to select neurons across experts for balanced multi-domain capability retention, coupling capacity reduction to serving gains.

**Key numbers:** domain-specialized neuron sets show 58–74% overlap across multi-source samples of the same domain vs. 15–24% across domains; at 75% neuron retention RAMPr preserves 91–98% of original full performance across six models; at 50% retention it reduces resident GPU memory by 36–43% and improves batched prefill throughput by 17–39%.

**Source:** https://arxiv.org/abs/2611.13975

### Sable: A Small-Field Sumcheck Argument for Bit-Exact Inference of Large Language Models — `2611.14083`
**Category:** Cryptography and Security (cs.CR) | **Section:** Cross submissions
Sable is an argument system with a single-GPU prover for the statement that a committed, integer-quantized transformer produced a given token sequence from a given prompt, bit for bit. It fixes an integer function F_O with no floating-point step (every rounding, normalization, softmax and sampling decision determined by inputs) and proves it with a constraint system whose relations provably never wrap modulo the 31-bit KoalaBear prime, batching zerochecks and LogUp-GKR lookups into one sumcheck per domain. The prover streams model layers on one GPU, and the system targets open-weight models since the proof is not zero-knowledge.

**Key numbers:** all 64 layers of Qwen2.5-32B proved in 92.5 s for 4,096 tokens and 398 s for 16,384 tokens on one RTX PRO 6000 Blackwell; Qwen3-32B and MoE Qwen3-30B-A3B proved in 121.8 s and 84.7 s for 4,096 tokens; proof costs 41–50× serving time (~6.4 cents per 4,096-token request) but 40–64× less time per parameter and token than zkLLM; F_O matches BF16 greedy tokens at 86.3% of positions on WikiText-2 and is within 1.6 points on MMLU and 1.7 points on GSM8K for Qwen3; verifier checks on one CPU core in 19–56 s; round-by-round soundness error 2⁻¹⁰³ in the random-oracle model.

**Source:** https://arxiv.org/abs/2611.14083

### Auditing the Judge: Internal Signals for LLM Reasoning Assurance — `2611.14323`
**Category:** Machine Learning (cs.LG) | **Section:** New submissions
Systems that self-judge must decide which answers to release, review, or recompute, and the assurance score has to rank errors well at the available budget rather than only in a full ranking. The authors compare the judge's continuous verdict-token score against a supervised correctness probe trained on attention-head activations from the same prompt, and prove that exact identities link fixed-budget error recall to residual risk with AUROC averaging recall over budgets. Cross-dataset transfer tests probe AUROC, and the paper separates a dataset-only effect from a joint protocol shift (dataset, weight precision, and generation budget changing together).

**Key numbers:** probe finds 1.3–22.5 additional percentage points of errors at 5% review across all six model–dataset settings (median 7.4 points) for three open 7–12B models on GSM8K and MATH; probe-guided routing beats equal-cost random allocation in both GSM8K experiments but beats judge-guided routing only for the weaker judge; cross-dataset transfer lowers probe AUROC for every model in both directions.

**Source:** https://arxiv.org/abs/2611.14323

### Agreeing on the Answer but Not the Reason: Measurement Limits of LLM Reasoning Failure Taxonomies — `2611.13140`
**Category:** Artificial Intelligence (cs.AI) | **Section:** Cross submissions
The paper demonstrates that reported failure-category frequencies for LLM reasoning are largely properties of the measurement procedure. Defining "Compositional Collapse" (a model notices a required sub-part then drops or misapplies it), they measure it across twelve models and eleven languages on a multilingual math benchmark and find that the reported plurality depends on classifier test order: reversing two tests moves the plurality in eleven of twelve models, and across six orderings Collapse's share spans 26.4%–76.4%. Native speakers validate answer correctness well but the Collapse label barely, and the gap traces mostly to the inspector prompt rather than the model; they close with four cheap recommended checks before comparing failure-mode rates across models.

**Key numbers:** 2,316 graded records; 50.1% of failures carry evidence for more than one category; orderings move Collapse's share to 26.4–76.4%; human–inspector kappa 0.932 on answer correctness vs. 0.093 on Collapse; two-human agreement kappa 0.659 while each agrees with the inspector at kappa ≤ 0.094; re-running the inspector with verbatim human instructions raises kappa vs. Human 2 from 0.147 to 0.636; inspector labels Collapse 1.81× as often as native speakers, 1.17× after removing a defective item.

**Source:** https://arxiv.org/abs/2611.13140

### Dependable Long-Horizon LLM Agents: A Trajectory-Centered Empirical Study of Where Errors Enter and Which Controls Reach Them — `2611.13254`
**Category:** Artificial Intelligence (cs.AI) | **Section:** New submissions
Rather than labelling symptoms or blameworthy agents, the paper defines an episode record that ties a candidate fault to its origin, propagation, detection, response, and consequence, located by operational phase and state domain and naming the control families that could have covered it. They turn this into a written annotation protocol and apply it to 95 failed runs of six multi-agent systems from the public Who&When and MAD corpora, reading each trajectory in full. The analysis shows faults enter early, that contradictory evidence was often already present in the trajectory, that detection without response is common, and that a large share of failures are harness artifacts (content-filter crashes) rather than model errors.

**Key numbers:** 95 failed runs, 6 multi-agent systems, 2 corpora; median fault onset at 0.18 of the run; in 37 of 88 Who&When runs the fault preceded the corpus's human-labelled decisive step; in 72% of failed runs evidence against the error was already present, and in 88% of those no agent acted on it; something flagged a deviation in 31% of runs but no response removed the deviated state; restoring the agent's own state would have sufficed in 35 of 95 runs; 45% of hand-crafted Who&When failures ended with a provider content-filter crash after which the harness emitted a final answer no agent produced.

**Source:** https://arxiv.org/abs/2611.13254

### Breakdown of Autoregressive Multi-Step Reasoning Under Concentrated vs. Diffuse Attention Head Dropout — `2611.14209`
**Category:** Artificial Intelligence (cs.AI) | **Section:** Cross submissions
Motivated by the localized transient silence ("off-states") observed in mammalian neocortex during extended wakefulness, the paper tests whether spatiotemporally concentrated disruptions damage autoregressive reasoning more than budget-matched diffuse dropout. Evaluating 250 paired derivations on GSM8K across Qwen3-8B and LLaMA-3.1-8B-Instruct, they contrast clustered bursts of attention-head masking against i.i.d. dropout with matched budget, and stratify the same cumulative budget uniformly across generation steps as a control. Error analysis separates derivation failures from formatting failures, showing the two models degrade for different reasons.

**Key numbers:** 250 paired GSM8K derivations, 2× 8B models; at burst onset B = 0.10 (~5.7% of vulnerable head-token volume) Qwen3-8B drops 91.2% → 78.8% (−12.4 pp, McNemar p = 5.5×10⁻⁶) and LLaMA-3.1-8B 84.0% → 76.8% (−7.2 pp, p = 0.0198); stratified diffuse matching retains 91.2% and 84.0%; exploratory factorial (N = 100) single-step density −10.0 pp (Holm p = 0.0425), multi-token continuity −7.0 pp (p = 0.1892); Qwen conditional accuracy −11.4 pp, LLaMA gap narrows to −5.0 pp with 22.2% of discordant losses lacking a final answer line.

**Source:** https://arxiv.org/abs/2611.14209

### Continual-ARC: Measuring Skill Acquisition over a Working Lifetime — `2611.14505`
**Category:** Machine Learning (cs.LG) | **Section:** New submissions
Continual-ARC is a lifelong stream built from the three ARC-AGI editions whose tasks need no domain knowledge: the same tasks return after dormant gaps with fresh instances while new tasks keep arriving. On each instance a learner may pay for demonstrations, submit answers, or act inside the harness, with paid retries, and scoring is based on the share of a finite feedback budget consumed — putting memory-based and weight-based systems on the same scale since the learner may keep anything between instances. After the stream the learner is frozen and tested on fresh instances of met tasks (memorization) and unseen tasks (generalization), comparing a frozen-weight agent harness with and without persistence, two prompting floors, program induction, and imitation-trained weights.

**Key numbers:** 3 ARC-AGI editions; run on Qwen3.5-9B and GLM-5.3 Flash; persistence in the harness generally does not improve memorization without expert guidance; most harness-based methods learn less than a floor that merely caches each task's demonstrations; no harness-based method gains on unseen tasks while weight-based learning shows substantial gains (exact percentages in abstract not stated).

**Source:** https://arxiv.org/abs/2611.14505

### Blurring the Block Boundaries: Overlapping Block Denoising for Efficient Diffusion Language Models — `2611.14387`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
Block diffusion language models refine each block of tokens iteratively before advancing, so a block is only as fast as its slowest token and the next block cannot start early. The proposed method, B3, refines two blocks in parallel within a shared forward pass, calibrating itself on the fly so the next block is opened only once the model is ready to generate it. It is training-free and hyperparameter-free and plugs into any self-editing block diffusion model, evaluated across 10 diverse datasets spanning task and difficulty levels, pushing the latency–quality Pareto frontier.

**Key numbers:** 11.5–14.5% speedup over base models across 10 datasets at on-par generation quality; two blocks refined in parallel per shared forward pass; no training or hyperparameter changes.

**Source:** https://arxiv.org/abs/2611.14387

### Can KV Cache Be Reused Across Model Updates? A DeepSeek-V4-Flash Case Study — `2611.14051`
**Category:** Distributed, Parallel, and Cluster Computing (cs.DC) | **Section:** Cross submissions
Reusing KV caches across model updates would avoid recomputing shared context, but weight changes raise the question of what the cache actually preserves. The authors study direct cache reuse across four model updates with a detailed case study of DeepSeek-V4-Flash to Flash-0731, finding that caches can retain useful task information without faithfully reproducing the updated model's behavior — retrieval accuracy varies from near-native to large losses. They introduce Functional Cache Divergence, comparing next-token distributions under reused and native caches, and show that agreement on the first generated token does not guarantee agreement in answer content or stopping behavior.

**Key numbers:** 4 model updates studied; median TTFT speedups of 2.10×–5.08× on three longer-prefix QA benchmarks when source caches are available; compatibility degrades with increasing prefix length on single-token retrieval tasks; fast reuse preserves natural-text continuation better than retrieval tasks.

**Source:** https://arxiv.org/abs/2611.14051

### Capacity Allocation at the Source: Sparse Target Optimization for LLM Knowledge Editing — `2611.12995`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
Knowledge editing typically computes an ideal target hidden state and then edits parameters so the original hidden state maps to it; this paper shows the upstream construction of the target hidden state also determines how the model's limited capacity space is allocated. The authors establish a theoretical connection between interference in parameter space and interference between target hidden states, showing the two are positively correlated, and then apply a simple ℓ₁ regularization that prunes unnecessary "tentacles" from each knowledge vector. With fewer extraneous components per edit, edits interfere less with other knowledge and coexist better.

**Key numbers:** ℓ₁ pruning of target-hidden-state tentacles; theoretical link between parameter-space and hidden-state interference; improvements verified across multiple LLMs and benchmark datasets (no headline percentage in abstract).

**Source:** https://arxiv.org/abs/2611.12995

### ExpertCrowd-SWE: Measuring Frontier Coding Agents on Expert-Authored Engineering Tasks in Unfamiliar Codebases — `2611.13246`
**Category:** Artificial Intelligence (cs.AI) | **Section:** New submissions
ExpertCrowd-SWE is a benchmark of 100 expert-authored, multi-file software engineering tasks in unfamiliar real codebases: each is a change request from a practising engineer against a pinned commit, with a sealed reference solution and a task-specific grader whose weighted, mostly executable criteria award partial credit and encode must-pass blockers. Every task image is calibrated so the reference scores 1.0 and both the untouched repo and an inert change score 0, with adversarial control patches to test grader robustness; 24 tasks are released and 76 held out to limit contamination.

**Key numbers:** 100 tasks across 87 open-source projects and 11 languages; median ticket 148 words, median reference solution 471 changed lines; 7 frontier models × 5 runs = 3,495 scored runs; Claude Opus 5.5 67.3% and GPT-6 Astra 63.7% lead with no significant gap, then Claude Fable 5.1 46.5%, Gemini 3.8 Flash 40.0%, and an indistinguishable Qwen 3.8 Max / DeepSeek V4.1 Flash / Grok 4.6 group at 32–34%; no task solved by every model and 80 tasks where no model earns full credit on all five runs; scores span 35 points; agents take a median 33–166 steps per run with little relation to score.

**Source:** https://arxiv.org/abs/2611.13246

### ARE-bench: Benchmarking Agents' Research Ability in Real-World Researcher Sessions and Workspaces — `2611.14364`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
ARE-bench evaluates whether research agents can advance ongoing projects while respecting prior decisions and existing workspace state, rather than complete standalone tasks in curated workspaces. It contains 75 tasks built on agent sessions and full workspaces from recruited researchers' own projects, spanning seven research stages, 33 requirements, 150 sub-requirements and 1,173 binary checklist items; each task is anchored to a real user request, summarizes earlier still-in-effect requests as background, and replays the complete workspace to that boundary without cleanup. The key methodological claim is that checking only delivery contracts and general norms overestimates research agents and masks model differences.

**Key numbers:** 75 tasks, 7 research stages, 33 requirements, 150 sub-requirements, 1,173 binary checklist items; across 7 frontier models the strongest passes every checklist item on only 66.2% of tasks, with Design and Execution hardest for every model; three models pass ~69% of tasks under delivery/norms-only checks but only 28.4–40.0% once historical and workspace requirements are included.

**Source:** https://arxiv.org/abs/2611.14364

### AgentScript-Eval: Benchmarking LLMs and Agents for Code Generation in an Enterprise DSL — `2611.13183`
**Category:** Software Engineering (cs.SE) | **Section:** Cross submissions
AgentScript-Eval is an execution-graded benchmark of 100 real tasks for AgentScript, the declarative DSL Salesforce uses in Agentforce, covering authoring an agent from a specification, debugging a broken definition, and optimizing a working one. Zero-shot evaluation of five models shows a hard regime, and the interesting result is that scale and price are weak predictors of success — a 31B open-weight model attains the highest compilation rate and matches the strongest frontier model on partial credit at the lowest token cost. The authors then vary the harness and the packaging of guidance to show what actually moves the number.

**Key numbers:** best model reaches only 25.0% pass@3, and every model scores 0% on authoring from scratch; 31B open-weight model attains the highest compilation rate at 48.0%; an agentic compile-and-edit loop roughly doubles partial-credit accuracy; the same skill pack scores 28% as plain documentation vs. only 14% as a live plugin, and rewriting one skill inside the plugin raises it to 37%.

**Source:** https://arxiv.org/abs/2611.13183

### A Multi-Word Tokenizer for 204 Languages That Needs Fewer Tokens Than GPT-4o's, Including on English — `2611.13059`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
The authors train byte-level BPE tokenizers from scratch on human-written text in ~200 languages, motivated by the observation that languages of India cost 1.6–14× as many tokens as English on GPT-4o's tokenizer. Havon v3 has 262,144 tokens with a pre-tokenizer that keeps combining marks attached to their letters and chunks scripts written without spaces; v4 adds a SuperBPE multi-word training stage; v5 replaces the code sample with permissively licensed code in 15 languages. Compression is evaluated on FLORES-200 devtest, and the paper is explicit that these are compression results only — no model trained with these tokenizers has been evaluated.

**Key numbers:** v3 needs a median 0.74× GPT-4o's tokens on all 25 Indian languages and fewer on 172 of 204 languages but 7% more on English; v4 at exactly GPT-4o's 200,019-token vocabulary uses 6.1% fewer tokens on English and fewer on 161 of 204 languages; at 262,144 tokens v4 uses 9.6% fewer on English and fewer on 182 of 204, and with 524,288 tokens fewer on 203 of 204; v5 uses 1.03–1.22× GPT-4o's tokens on code vs. 1.11–1.29× for v4, keeping India at median 0.74 and English at 0.94 (all significant under sentence-level bootstrap).

**Source:** https://arxiv.org/abs/2611.13059

### The Indic Token Tax in 2026: Measuring Tokenizer Disparity and Its Cost for the Languages of India — `2611.13058`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
Because APIs bill per token, a tokenizer needing more tokens for the same content in a language makes that language more expensive, slower, and more context-constrained. This paper measures the disparity across nine public tokenizers (GPT-4, GPT-4o, Qwen2.5, DeepSeek-V3, Mistral-Nemo, four Sarvam models) on all 25 Indian languages in FLORES-200 and on 13,732 human-translated Hinglish-English social media pairs, with a companion analysis of morpheme-boundary placement. It quantifies the direct billing impact and identifies Sarvam as the only third-party tokenizer staying under 2.6× on every language.

**Key numbers:** GPT-4o tokenizer needs 1.57× (Hindi) to 5.01× (Odia) the tokens of English, and 13.7× for Santali in Ol Chiki script; GPT-4's tokenizer needs up to 12.8×; Sarvam-30B/105B stays below 2.6× on every language (median 1.53); illustrative scenario: 100,000 chats/month on GPT-4o ≈ INR 56,640 in English vs. INR 102,829 in Marathi (list prices accessed 5 Nov 2026, estimates not measured costs); no tokenizer places more than 35% of word-internal boundaries on morpheme boundaries (boundary F1 ≤ 0.48).

**Source:** https://arxiv.org/abs/2611.13058

### Stagewise and interpretable emergence of inside-outside computation in Transformer-based language models — `2611.14221`
**Category:** Computation and Language (cs.CL) | **Section:** New submissions
Prior "post-mortem" studies show trained Transformers approximate canonical inside-outside parsing, but little is established about how that computation is learned. The authors take a first step by studying learning dynamics in synthetic context-free grammars with variable parse-tree topology, where the loss stages can be computed analytically and associated with representation of a hidden latent tree variable. Probing the representations visualizes inside-outside computation emerging across depth and training: early stages rely on local bigram/trigram information in a few initial layers, while later stages develop an encoder–decoder structure with the most abstract latent information in the middle and the second half of the network progressively refining token prediction.

**Key numbers:** all loss stages analytically computable and mappable to latent-tree representation; 20 pages, 9 figures; no headline accuracy delta in abstract (synthetic CFG setting with full analytical control of data statistics).

**Source:** https://arxiv.org/abs/2611.14221

### Veritas: A Verifier Generation Harness for Agent Tasks — `2611.13336`
**Category:** Artificial Intelligence (cs.AI) | **Section:** New submissions
Self-improving systems depend on verifier quality, but verifiers for most tasks are hand-written and do not scale to tasks that arrive without one. Veritas generates verifiers automatically, adding three mechanisms specific to verifier generation: an evidence header stating what the verifier will observe, a library of domain rules that tasks leave unstated, and authoring principles partly refined by a self-improvement loop. It is evaluated on six benchmarks — four execution-scored, whose official verifiers are first certified, and two pairwise-response comparisons — against seven other harnesses with the model fixed.

**Key numbers:** Veritas-generated verifiers agree better with official verdicts than all seven compared harnesses on all four execution-scored benchmarks, and are at or near best on the two pairwise benchmarks; it also beats the vendor's own harness for two of three other model families; its mechanisms improve 9 of 12 harness–benchmark pairs scored by execution across three harnesses.

**Source:** https://arxiv.org/abs/2611.13336

### ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows — `2611.14492`
**Category:** Artificial Intelligence (cs.AI) | **Section:** Cross submissions
ReTrace converts a natural-language SOP plus a few logged agent runs into a reusable workflow in which code rather than an LLM selects the next step, since the agent's per-tool-call rationale usually states the condition behind the action while the tool calls alone do not. It extracts conditions per step, merges them across runs into a compact rule document, and generates an executable workflow from it, with only the final platform-specific stage tied to a given orchestration platform. Repair loops using labeled training failures further improve the compiled workflows.

**Key numbers:** on 79 production procedures, 93.8% completion vs. 96.8% for the agent at 24% lower cost per task; on τ²-Bench, 75.8% task success (agent 80.6%) in 1.3 s vs. 170 s; three rounds of repair lift k=2 workflows from 66.7% to 81.2%; on eight SOP-Bench procedures, no-repair ReTrace trails few-shot generation (80.6% vs. 83.6%) but repair lifts it to 87.8% at 0.40 s/task vs. 85.5% in 46.6 s for the agent.

**Source:** https://arxiv.org/abs/2611.14492

### LM-SimBench: A Unified Framework, Dataset, and Benchmark for Large Language Model Training Simulation — `2611.14285`
**Category:** Artificial Intelligence (cs.AI) | **Section:** New submissions
Evaluating candidate parallelization strategies for distributed LLM training by running them is prohibitively expensive at scale, and existing simulators differ in the training stages they model and the workloads used to evaluate them. LM-SimBench is a unified framework that decomposes simulation into functional stages from model compilation to schedule-level aggregation, tying execution representations and cost estimators to measurable targets. The accompanying profiling dataset is built on an Ascend NPU cluster across dense and MoE model families and is used to compare simulators on prediction accuracy, configuration selection, and error diagnosis.

**Key numbers:** 23 model settings profiled from 10 dense and MoE LLM families on an Ascend NPU cluster; 348 feasible configurations varying five parallelism dimensions plus activation recomputation; six views spanning configuration, rank, operator, event, and kernel granularity; matched GPU–NPU experiments validate cross-platform applicability and NPU-guided GPU configuration selection.

**Source:** https://arxiv.org/abs/2611.14285

### Plumbline: When the Loss Lies, Validating LLM Training Correctly — `2611.13393`
**Category:** Distributed, Parallel, and Cluster Computing (cs.DC) | **Section:** Cross submissions
Plumbline is a correctness validation system for LLM training, used in production at Amazon, that checks each part of the training lifecycle — from the data a run trains on to the model it serves, down to newly introduced layers and up to whole runs — and reuses those checks to trace failures to root causes. Both checks and diagnosis rest on a systematic correctness methodology intended to carry across models and frameworks. It supports two agentic use cases: Day-0 validation of a newly released model before teams rely on it, and root-cause tracing of training failures.

**Key numbers:** across 3 frameworks and 5 models it found 61 problems, 32 of them silent; 42 fixed or reported upstream, 8 first raised by the authors; the 61 problems grouped into seven recurring failure patterns; 16 pages, 6 figures, 3 tables.

**Source:** https://arxiv.org/abs/2611.13393
