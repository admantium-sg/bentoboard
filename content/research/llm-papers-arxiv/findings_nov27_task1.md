# New arXiv papers in cs.CL / cs.LG / cs.AI — announcement cycles 2026-11-25 and 2026-11-26 (run 2026-11-27)

Scope: chain-of-thought and reasoning structure, prompt engineering / evaluation process, RL for LLMs, quantization and precision, inference efficiency, agents and memory, safety and measurement.

## Verification, certificates and proof systems

**2611.33303** Certify What You Plant: Shortcut-Free Proof Depth in Logical Reasoning Data — Procedurally generated logic problems are graded by planting a proof of a desired depth, but a planted proof is only one possible proof, so the stated depth can overstate what solving the problem actually requires. The authors measure what each problem really requires relative to its stated depth, showing that stated difficulty is an unreliable proxy for the proof depth a model must actually search. The result matters for anyone using synthetic logic data for both training and evaluation, since a shortcut (a shorter proof) inflates difficulty labels and rewards surface heuristics.

Source: https://arxiv.org/abs/2611.33303

**2611.31811** How Far Apart Are Two Proofs? Measuring Proof Dissimilarity in a Proof Kernel and in Lean/Mathlib — The paper defines 19 proof-dissimilarity measures in 6 families (syntactic, structural, dependency/resource, semantic, information-theoretic, higher-categorical) plus 10 desirable properties, and tests them on 5 machine-checked proofs that the primes are infinite in a Curry-Howard kernel and on 19 Lean 4/Mathlib proofs of 3 theorems. Raw syntax cannot distinguish a rewrite from a new argument; dependency-closure measures track intuition best (Euclid rewritten < Goldbach < Furstenberg), while semantic measures invert that ordering because Furstenberg's topological proof reproduces Euclid's witness; a corollary is that equality of normal forms never holds between differently written versions of the same argument. Directly relevant to detecting duplicated AI proofs and to interpreting model proofs via their nearest human-understandable counterparts.

Source: https://arxiv.org/abs/2611.31811

**2611.32032** Provenance-Isolated Epistemic Quorums: Execution-Bound Evidence Certification and Plausible-World Safety Gating in Agentic Control Planes — LLM voting ensembles correlate errors rather than providing independent fault tolerance, because models share pretraining priors and conform to peer rationales, so PIEQ keeps every model outside the trusted computing base and instead certifies diagnostic preconditions from disjoint physical failure domains and gates candidate mutations across all unrefuted fault worlds. Across formal guarantees, automated etcd fault suites, frozen software benchmarks, and live language-model runs, PIEQ reports zero within-assumption unsafe admissions and zero false-precondition commits, converting occasional agent proof omissions into recoverable false blocks rather than unsafe actions. The authors are explicit that all benchmarks are author-labeled and live model snapshots are unpinned.

Source: https://arxiv.org/abs/2611.32032

**2611.32958** Attestation is All You Need: Toward a Zero-Trust Architecture for HPC AI Agents — AEGIS addresses the "hijacked authorized agent" threat: an adversary subverts an agent via prompt injection, poisoned shared data, compromised tools, or multi-agent coordination and then exfiltrates data through legitimate encrypted LLM API traffic. AEGIS compiles task-derived behavioral constraints, monitors agent actions with eBPF-based syscall interception, verifies evidence against constraint profiles, correlates behavior across agents, and triggers Slurm-level containment; on the real attestation path it detects all four implemented attack classes with sub-second median latency at a 1-second interval with no observed false positives on the evaluated benign workflows. Coverage is only against the four attack classes the authors implemented, so the detection claim is bounded by their own threat model.

Source: https://arxiv.org/abs/2611.32958

**2611.32166** RightDiff: Learning Generative Reward Models to Judge by the Right Differences — Generative reward models are trained with response-isolated prompts and a difference-alignment reward regularized by budget-constrained one-to-one matching and multiplicative gating, so the judge is trained to key on the correct differences rather than on surface style. The model reaches state-of-the-art preference modeling on RewardBench and RM-Bench, surpassing all open-source reward models and leading proprietary LLM judges, and provides supervision for DPO on Arena-Hard and AlpacaEval while resisting length shortcuts. The comparison set includes proprietary judges, so the "surpassing leading proprietary judges" claim depends on those judges' versions and prompts.

Source: https://arxiv.org/abs/2611.32166

**2611.33394** Confidence scores for gated automation of large language models — A linear confidence head is fitted to the final-layer hidden state of a frozen 2B-parameter LLM backbone, with text-only metamodels trained as the closed-model alternative, to predict answer correctness and route uncertain answers to human review. On graded answers (about 98% SQuAD, remainder TruthfulQA) the confidence head beats all baselines and metamodels and automates the largest fraction of workload at high accuracy targets, while prompted confidence scores can look calibrated yet lack resolution for thresholding. Transferability to unseen datasets is only modest, and all results come from one small backbone.

Source: https://arxiv.org/abs/2611.33394

## RL, credit assignment and reasoning structure

**2611.33232** How Many Samples Is RL Worth? Best-of-N versus RL Post-Training for Text-to-Image Models — The paper introduces an "exchange rate": how many base-model samples one RL sample is worth, measured on Stable Diffusion 3.5 Medium and its public Flow-GRPO checkpoint over 398 new GenEval-style prompts with human labels and two automatic judges other than the reward. Four fifths of prompts carry no positional constraint and there best-of-16 with a VLM picker matches one RL image, but on positional prompts RL is far ahead (92% correct per single RL image vs 52% for a person scanning 8 base images); on the pre-registered primary test best-of-16 with the VLM picker is 9.3 points behind one RL image, and people see a smaller 5.5 and 6.5 point gap. The authors note the automatic judges err in opposite directions and that comparisons of RL with best-of-N should check selected images by hand.

Source: https://arxiv.org/abs/2611.33232

**2611.33316** What Does RL Post-Training Teach Text-to-Image Models? A Skill-Wise Analysis of Flow-GRPO — Measuring pass@k over shared noise seeds before and after Flow-GRPO (which lifts SD3.5-M GenEval from 0.63 to 0.95) shows the aggregate gain decomposes into two regimes: on four of six GenEval skills the gain is sharpening (one post-trained sample worth 4-10 base samples, pass@32 barely moves), while on spatial relations it is unlocking (pass@32 rises 0.69 to 1.00, 128 base samples do not match one post-trained sample, and prompts the base model never solved in 32 samples are solved 93% of the time). Relations carry 35% of the total gain, and of the remaining 65% selecting among 8 base samples with the judge behind the reward recovers nine tenths, which means the benchmark-average "31 base samples per post-trained sample" describes no individual skill.

Source: https://arxiv.org/abs/2611.33316

**2611.33515** Evaluation and Restoration of Safety in Reasoning-Tuned LLMs — Across multiple model families, increasing reasoning capability consistently increases the unsafe rate, inverting the common intuition that better reasoning means better safety. The proposed fix, ESPG, combines evolution strategies with a post-training guardrail, requires no GPU memory beyond inference, and works with as few as 30 training samples, making open reasoning models such as VibeThinker meaningfully safer without GRPO-style infrastructure. The safety metric is the authors' own, so cross-paper comparability is limited.

Source: https://arxiv.org/abs/2611.33515

**2611.33133** A Bias in Disguise: Tiny Gradient Edits Stop a Small Language Model's Thinking Loops and Complement a Frontier Model's Weight Edit — Qwen3.5-0.8B almost never finishes reasoning in thinking mode (1-2 of 500 MATH-500 answers close the think block at 4,096 tokens, 15.4% accuracy), and fine-tuning only the 140-139,750 weights with the largest gradient on the model's own correct answers raises thinking-mode MATH-500 at 4k tokens to 39.0-45.5% after 2-9 minutes on one GPU with 50 examples, against 16.3% for 1,398 random positions. Because the model has no bias terms, the edit acts as a constant vector added to the residual stream (adding three fixed vectors matches it); under the Astra protocol the authors reproduce a 52.1% score for the GPT-6 Astra edit and reach 45.6-45.7% themselves, with the two edits complementary — 62.2% combined at 32k tokens versus 52.1% for Astra alone (p = 3e-9).

Source: https://arxiv.org/abs/2611.33133

**2611.34275** LatentCP-DPO: Conformal Pessimism for DPO with Finite-Sample Guarantees — LatentCP-DPO combines conformal prediction with pessimistic preference optimization for Bradley-Terry pairwise and Plackett-Luce ranking feedback, building uncertainty sets for latent relative rewards with finite-sample marginal coverage and then maximizing the worst-case expected preference log-likelihood over those sets using unlabeled prompts and responses. The resulting finite-sample upper bounds on regularized policy suboptimality separate policy-class approximation error, conformal uncertainty, and statistical estimation error, and for BT feedback a matching worst-case lower bound is established with the same reciprocal dependence on the number of unlabeled optimization examples; the lower bound also shows the uncertainty sets can induce a bias that persists as the optimization sample grows, so the guarantee is not a free lunch.

Source: https://arxiv.org/abs/2611.34275

**2611.34579** Tune for Retention, Not Just Gain: SFT Forgets Far Less than You Think — The paper challenges the premise that catastrophic forgetting in fine-tuning is caused by SFT's off-policy nature, showing that alternative hyperparameters (lower learning rate and batch size) yield similar new-task gains with little to no forgetting, and that with hyperparameters selected jointly for gain and retention vanilla SFT retains prior capabilities far better than previously suggested and can be competitive with on-policy Self-Distillation Fine-Tuning. SDFT is more robust to hyperparameter choice but needs a retention-aware criterion, and the results raise open questions about what actually drives forgetting.

Source: https://arxiv.org/abs/2611.34579

**2611.33513** Learning to Reason in Real-Time — Real-time reasoning training (RRT) adapts agents to environments that change independently of the agent, using real-time data, decoupling acting from observing, and curriculum learning in time, rather than imposing a fixed thinking-to-acting ratio. Across time pressures, RRT beats the strongest non-RRT baseline by an average of 33% reward in-distribution and 55% out-of-distribution in the Frogger and Snake environments, which suggests agents can learn when delay is cheap and when reasoning pays for itself.

Source: https://arxiv.org/abs/2611.33513

**2611.32055** More Powerful, Less Verifiable? Mitigating Hard-to-Verify Hallucinations in MLLM's Reinforcement Learning — Reward optimization can produce outputs whose errors are harder for humans to detect, and the ITHV dataset of 2,728 visually grounded instances separates obvious from elusive hallucinations to measure this. DAPO-V extends DAPO with a verifiability-aware reward and adaptive dual control that penalizes errors more on questions where human verification accuracy is low, improving accuracy on elusive hallucination questions by 5.78-9.72 percentage points over accuracy-only DAPO across three MLLM base models, with a blinded human study confirming better detectability.

Source: https://arxiv.org/abs/2611.32055

**2611.32515** Branch and Consolidate: A Unified Recipe for Multi-Teacher On-Policy Distillation — Weight merging and standard MOPD fail when specialists diverge substantially from their shared checkpoint, so the paper specifies a unified recipe covering initialization, data selection, balanced supervision across teachers, capability preservation, and a targeted refinement stage for lagging capabilities. In an industrial setting with six specialists the student recovers 97.0% of the specialists' average gain versus 79.8% for IM-MOPD, and in the fully open five-domain Qwen3-4B setting it recovers 95.7% after consolidation and 97.5% after refinement versus 94.1% for IM-MOPD, with code to be released.

Source: https://arxiv.org/abs/2611.32515

## Architecture, depth and decoding

**2611.34051** Stable Gated DeltaNet-2: Understanding and Mitigating Recurrent State Instability — The paper analyzes recurrent state growth in gated DeltaNet-style linear attention, attributes instability to residual state propagation and unbounded residual writing, and mitigates it with decay-regulated residual writing plus gated inner-loop state updates, while establishing an O(sqrt(T)) upper bound on recurrent state growth that retains chunkwise parallel computation. On ~1.6B parameter models the fix trains stably and improves long-context retrieval: +6.80 points on the 128K average RULER score in the recurrent setting and +0.62 points average across nine downstream tasks in the hybrid setting versus GDN-2.

Source: https://arxiv.org/abs/2611.34051

**2611.33257** One Token, Many Lessons: Sliding-Window Attention within Gated Delta Networks — Viewing the linear-attention state as an online-learned regression model, the paper shifts attention from how the state is updated to how the key-value pairs fed into the update are constructed: SWGDN replaces the short convolutions in Delta-Rule attention with sliding-window attention for content-dependent local mixing of queries, keys and values. This makes consecutive updates' key-value pairs more similar in both GDN2 and KDA, and the strategy plugs into any Delta-Rule architecture without changing the state update equations or chunkwise parallel algorithms, outperforming the Delta-Rule baseline across multiple benchmarks.

Source: https://arxiv.org/abs/2611.33257

**2611.33952** DuoMI: Dual Mutual Information Regularization for Expert Reuse in Looped Transformers — In looped MoE Transformers where two computation rounds share an expert pool, the two routers can pick different subsets and waste shared parameters. DuoMI adds round-level marginal mutual information to limit dependence of aggregate expert usage on the round, plus token-level conditional mutual information to penalize average cross-round routing changes outside a target interval, computed as differentiable penalties over soft routing distributions with no added parameters and unchanged sparse Top-k inference. On a looped OLMoE backbone with paired adjacent layers sharing experts, the average score across 15 downstream tasks rises from 50.08% to 51.82%.

Source: https://arxiv.org/abs/2611.33952

**2611.34276** Scaling Looped MoE Language Models under Matched Budgets: Information Flow and Parameter Allocation — Gated inner-loop state updates and a cross-stage residual connection are used to improve information flow in looped models, and controlled iso-parameter/iso-FLOP studies identify a configuration with a single-pass Core depth of 25%-35% of total unrolled depth and the saved parameters reallocated into extra routed experts per layer. After 1T pre-training tokens, the resulting 69B MLA and 51B KDA MoE models beat budget-matched non-recurrent baselines by an average of 1.16 and 2.29 percentage points across four benchmarks, with reproduction experiments at a 200B-token budget showing lower perplexity than other looped methods; code: https://github.com/lxi01766/Scaling-Looped-MoE-Language-Models-under-Matched-Budgets-Information-Flow-and-Parameter-Allocation

Source: https://arxiv.org/abs/2611.34276

**2611.33468** Learning from Recurrence: Internalizing Depth-Induced Preferences in Looped Language Models — Retrofitting pretrained OLMo-2-1B with a shared recurrent block and continuing mid-training across recurrent depths shows that additional passes mainly redistribute probability among already-top-ranked tokens; training only the shared block through a single pass on its own deeper continuations ("transfer preference write-back") further improves one-pass and multi-pass accuracy. At their target depths the updated models beat a non-recurrent control matched on mid-training data and token budget on all six mathematical reasoning benchmarks, with mean relative gains up to 46.2%, and on GSM8K applying the updated block only on passes two through four recovers nearly the entire four-pass gain.

Source: https://arxiv.org/abs/2611.33468

**2611.32782** Measuring Layer-wise Intrinsic Dimensionality of FFNs in LLMs via PCA — Applying PCA to the input of every FFN down-projection across 58 open-weight LLMs spanning 14 families and 70M-72B parameters reveals a recurring middle-heavy profile in which middle layers carry higher intrinsic dimensionality than edge layers; the profile is robust to calibration corpus (English vs Chinese) and largely preserved through post-training fine-tuning. Used to guide width pruning under a matched parameter budget in a knowledge-distilled student, PCA-guided allocation beats the uniform-width convention by +2.3 points on Qwen3-8B and +2.5 on Qwen2.5-3B, with smaller gaps on lower-dispersion teachers (+0.9 Gemma-3-4B, +0.5 LLaMA-3-8B) and a budget-matched inverted control worst on all four teachers; code: https://github.com/naver-ai/lidf

Source: https://arxiv.org/abs/2611.32782

**2611.33919** DiCALM: Converting Autoregressive Convolution-Attention Language Models into Discrete Diffusion Language Models — DiCALM extends LFM2's causal gated convolution to capture local context in both directions and combines this with masking warm-up and joint AR-diffusion training, converting the LFM2/LFM2.5 hybrid convolution-attention family from autoregressive to masked-diffusion generation. In controlled experiments it matches the corresponding fine-tuned LFM2.5-based AR models while delivering consistent speedups of over 1.4x on average and up to 1.79x at the 350M and 1.2B scales.

Source: https://arxiv.org/abs/2611.33919

**2611.33823** Pitfalls of Dependency-Ready Decoding for Masked Diffusion Language Models — Dependency-readiness is defined information-theoretically (how much revealing a masked token would shift the prediction for another) rather than via attention, and the paper proves that when the margin is large relative to this sensitivity, Maximum-Margin decoding already commits dependency-ready tokens, so no revelation can change the top prediction. Empirically, attention-based dependency-readiness decoding tends to collapse to left-to-right order when it does beat confidence or future-utility baselines, leaving only a narrow regime (margins smaller than the information-theoretic sensitivity) where such decoders could help and questioning reliance on attention.

Source: https://arxiv.org/abs/2611.33823

**2611.32807** From Grammar Deltas to Token Masks: Incremental Constrained Decoding under Runtime Grammar Evolution — GramDelta maintains parse state over the committed prefix and propagates only the changes induced by newly appended grammar rules through historical dependencies, avoiding prefix replay, then maps the updated parse state to exact next-token masks via compilation-free factorized projection over shared historical charts. Across four model configurations it adds negligible overhead when there are no updates, and under sustained runtime grammar evolution it cuts median first-seen grammar-update latency by 10.7-11.5x and reduces additional TPOT overhead over unconstrained decoding by 53.1-81.9% relative to the strongest reconstruction baseline.

Source: https://arxiv.org/abs/2611.32807

## Quantization, precision and serving

**2611.34402** Any-Rate: Half-Bit Multi-Precision LLM Quantization with Coded Bit-Planes — Nested multi-precision quantization derives several precisions from one checkpoint by reading only leading weight bits, but integer-bit-only schemes leave large accuracy gaps between adjacent precisions and degrade severely at 2 bits; Any-Rate serves 2-8 bits from a single checkpoint in half-bit steps over 2-4 bits using restricted coded bit-planes. This gives deployment teams one checkpoint spanning a continuum of memory/energy budgets rather than a handful of fixed-bit variants.

Source: https://arxiv.org/abs/2611.34402

**2611.31747** FN-Prune: Training-Free Expert Pruning with Finite RMSNorm Perturbations — Frequency- and magnitude-based expert scores ignore how RMSNorm consumes the expert's contribution, so FN-Prune compares the next RMSNorm outputs before and after subtracting each router-weighted expert contribution with routes and weights fixed, averaging squared differences over all calibration tokens in a single pass and physically deleting low-scoring experts. At 50% expert removal FN-Prune achieves lower WikiText-2 perplexity than the best published methods on Qwen3, ERNIE and OLMoE (including a 32% reduction on OLMoE) and improves GSM8K accuracy over the best published methods by 7.5 and 7.0 points on Qwen3 and ERNIE, while multiple-choice gains remain task-dependent.

Source: https://arxiv.org/abs/2611.31747

**2611.32008** LIBRA: Runtime Co-Tuning of Batch Size and Parallelism for Time-Efficient LLM Training — LIBRA treats throughput and convergence as two noisy objectives and searches their joint space with parallel noisy expected hypervolume improvement (qNEHVI), using hierarchical pruning of infeasible and low-throughput parallel configurations plus critical-batch-size-aware convergence monitoring, and acquisition-guided parallel evaluation of surviving candidates. On clusters of up to 256 GPUs it reduces time-to-convergence by 31.1% on average over state-of-the-art methods, with the runtime tuning itself accounting for only 0.3-3.5% of total time.

Source: https://arxiv.org/abs/2611.32008

**2611.32223** Beyond Autoregression: Diffusion Language Model is All Analog In-Memory Computing Need — Hardware non-idealities perturb matrix-vector multiplications, and autoregressive models are especially vulnerable because each token is committed to the causal context at birth so errors cascade; diffusion LMs, which iteratively refine a masked sequence, degrade more gracefully under persistent weight perturbations. Controlled analyses rule out cross-round noise averaging and support delayed token commitment and progressive context resolution as the mechanism, with more denoising steps further shrinking the clean-noisy gap, and on a 16-chip 28nm eFlash AIMC cluster hybrid on-board measurements show DLMs tolerate 1.4-3x larger weight noise.

Source: https://arxiv.org/abs/2611.32223

**2611.33236** KiRA: Kronecker Input-Gated Rank Adaptation for Parameter-Efficient Fine-Tuning of Pretrained Models — Instead of a low-rank product, the update is the Kronecker product of a frozen random p x p matrix A and a trainable factor M(x), so rank is multiplicative and A multiplies M(x)'s rank by p with no extra trainable parameters; M(x) further decomposes into B1 diag(g(x)) B2 with an input gate shared across adapted layers that adjusts rank in steps of p and can be folded away when conditioning is unnecessary. Because the gate changes rank only in discrete steps, the benefit of input conditioning is predictable before training from a few hundred labeled inputs; across six medical imaging and language benchmarks KiRA attains the highest mean score against five published baselines with 8.7-9.7x fewer trainable parameters than LoRA.

Source: https://arxiv.org/abs/2611.33236

**2611.33679** Faster and Better Query (FBQ): Learning Future-Position Probes from the First Generated Token — When an LLM evicts prompt keys and values at the end of prefill it must decide what to keep before seeing subsequent decoding queries; FBQ keeps the first output token's embedding and learns additive offsets at the other seven future positions of an FTQ-8 style probe to predict the average prompt attention of a full-cache continuation, computed in a single forward pass. On LongBench, FBQ performs comparably to eight-step Lookahead Q-Cache at the same cache budget, so KV-cache eviction policy can be sharpened without extra autoregressive steps.

Source: https://arxiv.org/abs/2611.33679

## Agents, memory and safety measurement

**2611.33005** Leto: Utility-Centric Agent Memory — Leto reframes agent memory as a prediction problem rather than a fidelity problem, indexing conversation details so future requests can retrieve context beyond what they explicitly state, and running a utility loop that uses response outcomes to refine future memory selection. Against six memory systems on five benchmarks and three scenarios it beats the strongest compared system by 16.3 points of accuracy on PrefEval and 3.1 points of task completion on PERMA in personalization, achieves the best overall performance on MemoryArena averaged over five environments with the gain growing with chain depth, and matches retrieval over raw history in long-context understanding while serving fewer context tokens.

Source: https://arxiv.org/abs/2611.33005

**2611.33612** Failure Broadens, Success Sharpens: Continual Adaptation of Tool-Use Agents Across Diverse Tasks with Dual-Polarity Memory — Dual-Polarity Memory with periodic maintenance generates procedural memory from both local successes and local failures within each trajectory and consolidates it periodically under a fixed capacity to prevent memory explosion across long task streams. Online prequential evaluation shows failure memory broadens coverage while success memory streamlines execution, and combining both integrates the two benefits; external evaluation on EvoMemBench supports portability.

Source: https://arxiv.org/abs/2611.33612

**2611.33822** MetaDecomp: Adaptive Task Decomposition via Meta-Learned Procedural Memory — MetaDecomp is an in-context meta-learning framework whose outer loop builds procedural memory from successful training executions, representing task progress as abstract states and procedures as directed acyclic graphs of operations and dependencies, and revisits historical evidence to reassign states as new distinctions are learned; at test time memory is fixed while the inner loop refines an initial decomposition from environmental feedback. On ALFWorld and ScienceWorld over three seeds it achieves the highest mean performance in four of five settings, for example 86.3% success on ALFWorld with Qwen3-4B, and uses fewer inference tokens than ReAct and AutoRefine in all five settings.

Source: https://arxiv.org/abs/2611.33822

**2611.32480** VISE: Verifier-Independent Skill Self-Evolution with Feedback from Tool Implementations — VISE is a scripts-first revision stage that extracts tool capabilities, input requirements, usage conditions and output formats directly from source code, compares that with current SKILL.md instructions to find missing or conflicting steps, and recommends edits each linked to the relevant implementation. Added as a revision stage to four evolution methods on SkillsBench and SkillLearnBench, it improves overall average task success by 9.14-13.35 percentage points over the corresponding no-verifier conditions and raises the share of tasks solved in all three runs by 12.36-18.29 points, which is notable because it needs no task-specific verifier.

Source: https://arxiv.org/abs/2611.32480

**2611.33605** The Detour Is the Danger: Preserving Security During LLM Agent Recovery — Agent recovery after failure opens a path where security protections are dropped along the way; ARGUS combines resource-bound security evidence, isolated recovery-plan validation and execution-time enforcement to preserve obligations across workflow changes, evaluated in an executable MCP/Skill environment spanning seven LLMs, twelve task templates and three security-sensitive domains. In a separate 864-run evaluation ARGUS prevents all observed protection-loss events under enforcement, while recovery assistance yields model-dependent improvements in protected task completion over blocking alone.

Source: https://arxiv.org/abs/2611.33605

**2611.33879** FORK: Co-Evolving Safe Disclosure and Decision Skills Against Attackers Who Read Every Refusal — FORK treats each exploited message and permissive decision as evidence for a gradient-free revision of the agent's natural-language skill library, with the attacker able to read every public message, and updates disclosure and decision skills jointly rather than only adding refusals. Averaged over three agents on FORK-World it cuts adaptive attack success rate from 78.4% to 14.1% while keeping utility above 85%, and on the unseen MT-AgentRisk benchmark it lowers ASR from 70.6% to 9.1% with 93.1% benign utility.

Source: https://arxiv.org/abs/2611.33879

**2611.33385** Poisoning Self-Evolving Security Policies in LLM Agents — Self-evolving defenses that learn reusable policies from observed attacks become an attack surface themselves: a single prompt-injection episode makes SED in the AgentDojo benchmark learn an over-broad policy and subsequently refuse legitimate requests. Across 10 Nemotron runs every poisoned run over-refuses at least one legitimate task while unrelated-task performance and the original injection defense stay intact, and the attack transfers to gpt-oss-120b; integrity-oriented attacks on the judge, policy synthesis, retrieval and organization mechanisms fail in the evaluated settings, so over-refusal is the primary exploitable failure mode, and self-poisoning can occur without any attacker via false-positive harm judgments.

Source: https://arxiv.org/abs/2611.33385

**2611.32085** ExpGuard: Guarding Long-Horizon LLM Agents against Corrupted Experience — Long-horizon agents distill trajectories into reusable experiences, so misleading or adversarial guidance in a source trajectory can persist across tasks; ExpGuard builds a task-conditioned heterogeneous graph over experience semantics, provenance and execution dependencies to predict attack and task-failure risk before reuse, with matched counterfactual replays of each experience against a minimally neutralized counterpart to derive separate risk labels. At inference the framework repairs flagged experiences and re-predicts their risk before they enter the agent's active context.

Source: https://arxiv.org/abs/2611.32085

**2611.33098** Delegent: A Multi-Agent Harness That Reduces Cost without Sacrificing Performance — Delegent keeps the frontier model in charge of every task but delegates focused subtasks (investigating code, running tests, searching a corpus) to a small model running on owned hardware, in contrast to cascades and routers that assign the whole task to one model, and it trains no router so either model can be swapped. With a 27B FP8 SLM it reduces frontier cost by 67% for long-horizon coding and 59% for agentic search with no performance loss, and even a laptop-sized 2B SLM cuts coding cost by 66%, with a short instruction accounting for most of the saving; code: https://github.com/castorini/delegent

Source: https://arxiv.org/abs/2611.33098

**2611.32365** The Control-Flow Tax: Specialized Decision Routing for LLM Agent Workflows — In a documentation workflow, control-flow routing accounts for 42.5% of baseline reference cost on the initial task, and cheap general-purpose routers can trigger extra calls to the expensive generator; the paper instead uses Jev, a specialized System 1 decision model controlling finite actions, with Sol generating documents. Across four software tasks (480 valid runs) Jev full routing gives the lowest mean cost and elapsed time on every task, cutting mean cost by 49.6% (95% paired-bootstrap interval 42.9-56.3%) and elapsed time by 33.2% on the initial task, with cost reductions of 40.5-42.9% on three further tasks, while existence-only specialization saves just 1.8%.

Source: https://arxiv.org/abs/2611.32365

**2611.33065** Auditing the Judge: Human-Derived Bias Discovery, Quantification, and Mitigation in LLM Judges — HUB-J uses human-LLM judgement disagreements to automatically discover interpretable bias factors, uses agreement cases to quantify bias strength via controlled input modifications, and then applies a lightweight training-free regression-based mitigation that estimates each factor's influence on judgements and removes its estimated effect. Unlike prior work it does not rely on pre-discovered bias lists and avoids costly interventions, uncovering both known and novel biases.

Source: https://arxiv.org/abs/2611.33065

**2611.32610** Privacy Disclosure Control Benchmark (PDC-Bench): How Faithfully Do LLMs Keep Privacy Constraints on In-Context Disclosure Granularity? — PDC-Bench formalizes disclosure control as a ceiling over a knowledge-graph hierarchy (allowing country-level disclosure but not state-level), which distinguishes semantic leakage from direct leakage, and contains 16,105 samples over geography, age, race and ethnicity, and occupation. Applied to eleven LLMs, 62% of constraint violations are semantic leakage, and the leakage depends less on the model than on the permitted disclosure granularity and on how much the task needs the private attribute, so auditing must target semantic leakage plus those two factors.

Source: https://arxiv.org/abs/2611.32610

**2611.34363** Single-Database Rewards Are Hackable: Counterfactual Execution for Trustworthy Text-to-SQL RL — RL for text-to-SQL agents pays when a query matches the reference on one database, but a wrong query can match by luck when the data lack the rows that expose the bug; the counterfactual-database reward runs the final query on several hidden, code-generated copies of the database and pays only if all results match (strict) or by matched share (mean). On 1,302 synthetic audit questions the strict form lowers buggy queries paid in full from 29.5% to 16.8% and reward hacks from 54.1% to 1.9% while rejecting 0 of 2,847 correct queries, but in a controlled GRPO comparison on a 3.35B model the mean form did not improve in-domain accuracy (8.4% vs 11.7%) because the two rewards disagreed on only 5-7% of rollouts, and one seed reverses both signs, so single-seed reward comparisons mislead.
Code: https://github.com/RishiiGamer2201/counterfactual-sql-rewards ; data, models, demo: https://huggingface.co/counterfactual-sql

Source: https://arxiv.org/abs/2611.34363

## Benchmarks and evaluation

**2611.32946** ShellBench: What Matters More for AI Agents, Models, or Harness for Everyday Tasks — ShellBench provides 100 day-to-day tasks derived from more than 10 million user requests, each in a realistic workspace with messy files and competing data sources, graded for correctness and safety, with 20% of tasks released publicly. The evaluation covers 12 models across 5 agent harnesses at 3 reasoning levels for 53,100 rollouts; model choice matters more than harness choice but the three leading models differ by only 1.1 points (GPT-6.1 Sol 61.4% of attempts at about one-sixth of GPT-6 Astra's estimated token cost per attempt, GPT-6 Astra 62.5%), and harness choice barely moves performance or safety (pass@1 between 42.9 for Claude Code and 45.2 for OpenClaw).

Source: https://arxiv.org/abs/2611.32946

**2611.34875** How Much Do Coding Agents Over-Edit, and Why? An Empirical Study of Unneeded Edits in Repository-Level Agent Patches — Delta Residue Attribution replays agent trajectories, traces every unit of the final patch to the step that wrote it, reverts each unit and reruns the task tests to decide whether it is needed; applied to 7,660 resolved GitHub Copilot CLI trajectories from 18 frontier models on SWE-bench Verified (6,728) and DeepSWE (932), with developer patches graded the same way. Agent patches do change more lines, but the majority of extra edits add tests (61%) and documentation (13%) on Verified and code (58%) on DeepSWE, agents' code is at least as necessary as developers' (mean NP_code 0.887 vs 0.864), 11% of agent code units on Verified are still unneeded and 89% of those change behavior, and code necessity is uncorrelated with resolve rate on Verified but negatively correlated on DeepSWE (Spearman -0.59, p = 0.01), leading to the recommendation that benchmarks report code necessity alongside resolve rate.

Source: https://arxiv.org/abs/2611.34875

**2611.31839** Spec-Test Coverage Gap: Detecting Overspecified Tests in SWE-Bench-Style Benchmarks — The paper defines a 1-4 Spec-Test Coverage Gap scale for overspecified tests and scores it with two LLM judges (Claude Opus 5.5, GPT-6.1 Sol) given only the specification and the test patch, flagging a task when both score 3 or higher. On 206 validation tasks the judges correctly flag 89% of human-identified overspecified tasks and wrongly flag only 4% of known-fine tasks; applied to whole benchmarks they flag 23% of the 500 SWE-bench Verified tasks and 35% of the 731 public SWE-bench Pro tasks; the top 30 Verified submissions resolve only 31% of flagged tasks versus 88% of others, and relaxing flagged requirements lets 61% of 2,186 failed patches pass, which would add 33-60 tasks per submission and raise resolve rates by up to 12 points — a direct challenge to current coding-agent leaderboards.

Source: https://arxiv.org/abs/2611.31839

**2611.34331** Puzzling-Bench: Evaluating Language Models on 23,777 Human-Written Puzzles with Community-Verified Answers — The benchmark collects 23,777 puzzles from the Puzzling Stack Exchange archive (2014-2026) — riddles, ciphers, logic grids, lateral-thinking problems, wordplay and recreational mathematics, a third with images — each with the author-accepted answer, author hints, community tags, creation date, and a rolling post-cutoff slice (254 puzzles posted after the training cutoff of six of the nine evaluated models) as a contamination check. GPT-6.1 reaches 74.8% on a shared 255-puzzle set, 17 hard puzzles defeat all nine models, an oracle over all nine reaches 91%, and on a 100-puzzle multimodal pilot withholding the question image costs the two best models 24 and 35 points.

Source: https://arxiv.org/abs/2611.34331

**2611.34852** DRBench Pro: A Knowledge-Centric Benchmark for Professional Deep Research Agents — DRBench Pro makes structured knowledge coverage the primary metric, building local knowledge trees from Wikipedia and using sampled subgraphs to generate research queries and evidence-grounded rubrics where each rubric corresponds to a relation in the tree, so breadth across major directions and depth along chains can be measured with a geometric mean. The benchmark spans 144 cases across 24 domains with 44,102 rubrics; of 16 evaluated deep-research agents the best reaches 57.04% overall coverage, with rubric judgements closely matching human annotations and stable rankings across metric configurations.

Source: https://arxiv.org/abs/2611.34852

**2611.34825** Routeability Before Routing: Routeability Audit Protocol (RAP) and RouteabilityBench for Audited LLM Model Selection — Routing only makes sense if the benchmark has enough prompt-specific variation for different models to be best on different inputs; RAP is a retrospective, runnable claim-verification package that runs once the benchmark-portfolio score matrix exists. Across four benchmarks and 66 LLMs, generic routing enhancements (larger embedding sets, dimensionality reduction, selective abstention, clustering, stronger regressors) do not consistently beat simply using the single best model, with positive evidence concentrated in portfolio-dependent Omni-MATH settings while GPQA, MMLU-Pro and IFEval show different failure modes, so the paper recommends reporting routing gains together with routeability diagnostics, tied-best analysis, portfolio construction details and family-corrected statistical tests.

Source: https://arxiv.org/abs/2611.34825

**2611.33307** Lost in Translation, Not in Confidence: Benchmarking and Calibrating Multilingual Decision Models — Across 25 top-ranked open-weight decision models on 17 tasks in 14 languages with parallel items, every model loses accuracy in every language (about 2 points in high-resource languages up to 8 in Tamil) while confidence falls only half as much, so a threshold set for 95% accuracy in English yields 90% in Tamil; loss size is set by language and base model rather than leaderboard rank. In 81 controlled fine-tuning runs, English-acquired skill transfers and a few thousand target-language items narrow large gaps, but neither more data nor full-parameter tuning closes them, and LLM-translated test sets understate the gap — 23 of the benchmark-language pairs show more accurate answers when translated by an LLM than by a person.

Source: https://arxiv.org/abs/2611.33307

**2611.33525** Deletion You Can Check: Auditing LLM Unlearning — The common evidence that a fine-tuned model has forgotten a deleted record — a membership-inference score near chance (ROC-AUC ~0.5) — is sound only if the comparison population represents post-deletion behavior, which is rarely validated; in a controlled 2x2 study (ArxivMIA and BookMIA against Llama-3.2-1B and Qwen2.5-1.5B), exact retraining lands within the prespecified chance band on ArxivMIA but at 0.122 on BookMIA, causing the same metric to reject an empirical deletion reference, and a post-hoc diagnostic replacing BookMIA/Qwen label-0 records with same-pool never-fine-tuned records moves the reference from 0.257 to 0.523, supporting population mismatch. On the admitted ArxivMIA/Llama axis no configuration of GA+GD, NPO-RT or SCRUB passes all three criteria (membership removal, deletion-targeted shift, utility), so a near-chance score is not evidence of forgetting until a reference establishes what chance means.

Source: https://arxiv.org/abs/2611.33525

**2611.33757** TransHarness: From Benchmark Overfitting to Transferable Harness Evolution — Harness evolution improves coding agents without touching weights but can overfit its evolution benchmark; TransHarness evolves intervention policies from same-task success-failure contrasts, coupling execution-context triggers with diagnostic guidance, and uses cross-task replay plus independent semantic selection to keep only policies that ground corrections in current-task evidence. With only 300 source trajectories from outside the test distribution it still improves strong agents across distinct target benchmarks, reaching state-of-the-art 76.4% on DeepSWE v1.1 and 95.5% on Terminal-Bench 2.1.

Source: https://arxiv.org/abs/2611.33757

## Selection notes

- **Candidates scored:** 739. The pipeline pulled 600 entries each for cs.CL, cs.LG and cs.AI from the arXiv API (600 per category, sorted by submittedDate descending), parsed the Atom XML into 1,501 unique records after merging cross-category duplicates, applied a publication-date cut of >= 2026-11-24 (827 records), and then removed every ID present in `tmp/nov27/known_ids.txt` (2,789 IDs from earlier cycles).
- **Selected:** 52 papers. From the raw 1,501 unique records, 674 were excluded by the publication-date cut (< 2026-11-24) and 88 more were excluded as known-ID collisions inside the dated set, leaving 739 scored candidates; 52 of those were selected.
- **0-collision check:** result 0 collisions. Every one of the 52 selected arXiv IDs was re-checked against the full historical corpus — 386 files (`findings_nov*.md`, all root `*.md`, `cumulative_findings.md`, `archive/*.md`, `daily_reports/*.md`, excluding this file) — and none of the 52 IDs appears in any of them, so no arXiv ID appears twice in the active window.
- **Cycles covered:** papers published 2026-11-24 (33 selected) and 2026-11-25 (19 selected), i.e. the 2026-11-25 and 2026-11-26 announcement cycles.
- **Titles** are copied verbatim from the arXiv API `title` field with LaTeX math markers (`$...$`, `\model{}`, `\textbf{}`) stripped for readability; **summaries are condensed from the abstracts**.
- All numbers reported above are author-self-reported from abstracts and were NOT independently reproduced. Where an abstract contains caveats (single-seed comparisons, author-labeled benchmarks, unpinned model snapshots, narrow attack coverage) those caveats are retained in the summaries. Several papers also report paired-bootstrap or significance intervals; those are quoted as the authors state them.
