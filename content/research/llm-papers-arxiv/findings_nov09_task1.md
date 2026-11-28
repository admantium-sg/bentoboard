# arXiv LLM Papers — 2026-11-09 Batch (Task 1, written up 2026-11-09)

Batch of 389 papers (ids 2611.08490–2611.09892; 220 new submissions, 169 cross submissions) harvested from the cs.CL / cs.LG / cs.AI listings, screened down to 70 keyword-selected candidates, of which the 30 most significant for LLM research are written up here. Papers whose topic is peripheral to LLM work (PDE/operator learning, nuclear-reactor modelling, molecule generation, signal decomposition, bolted-joint corrosion, clinical-imaging pipelines, cooperative-perception attacks) were dropped regardless of keyword score. All quantitative claims are self-reported by the paper authors and taken verbatim from the abstracts; nothing here was independently verified, and no web requests were made — all abstracts come from the locally harvested `tmp/nov09/selected.json`.

## Efficiency, quantization & inference systems

### 2611.09722 — FOSCAR: Accelerating Decode Attention over 2- and 4-Bit KV Caches through Affine Folding
**arXiv:** 2611.09722 | **Category:** cs.AI | **Section:** New submissions
Packing the KV cache into 2-bit or 4-bit integers cuts memory traffic but does not by itself buy latency: existing 2-bit fused kernels reach under 31% (H100) and 15% (B200) of peak HBM throughput, largely because applying scale and offset to every value before the Tensor Cores is instruction-issue bound. FOSCAR instead applies affine folding, moving the scale/offset onto the other operand or onto the output of the decode-attention matrix product depending on whether the scheme is token-wise or channel-wise, which is exact in real arithmetic and reduces scale-and-offset operations by up to two orders of magnitude. The work also uses bit manipulation to feed KV operands to Tensor Cores efficiently and builds warp-specialized pipelines for Hopper (wgmma) and Blackwell (tcgen05). The authors integrate FOSCAR into SGLang and report serving gains on long-context workloads.

**Key numbers:** H100: geo-mean speedups of 3.36× (INT2) and 2.83× (INT4) over FlashInfer BF16, and 2.03× / 1.71× over TensorRT-LLM FP8. B200: 2.67× / 2.30× over FlashInfer BF16, 1.48× / 1.28× over TensorRT-LLM FP8, 1.16× / 1.00× over TensorRT-LLM NVFP4. Kernel needs 1 and 0.19 ALU instructions per INT2 element on H100 and B200; scale/offset operations reduced by up to two orders of magnitude; peak aggregate throughput up 170% (vs 2-bit) and 341% (vs 16-bit) baselines.
Source: https://arxiv.org/abs/2611.09722

### 2611.09825 — BitDecoding-FP4: Native FP4 KV Cache Decoding via Algorithm-System Co-Design
**arXiv:** 2611.09825 | **Category:** cs.CL | **Section:** Cross submissions
The KV cache dominates memory and bandwidth in long-context serving, and 4-bit microscaling formats (NVFP4, MXFP4) can run attention on FP4 Tensor Cores — but existing systems trade accuracy for speed, since vanilla quantization causes severe accuracy drops while accuracy-oriented 4-bit algorithms pay vector codebook lookup overhead that destroys decode throughput. BitDecoding-FP4 is an algorithm–system co-design attacking three error sources: Dual-Residual Query Quantization (splitting queries into two FP4 tensors), Underflow-Aware Probability Scaling (preventing E4M3 scales from rounding long-context probabilities to zero), and Outlier-Aware Key Quantization (static smoothing, Hadamard rotation, scale search). At the system level it removes the softmax bottleneck via transposed softmax with fused probability quantization and stacked query MMA on paged KV caches.

**Key numbers:** Query logit error cut from 60% to 1% via dual-residual query quantization. Accuracy stays within 0.5 points of BF16 KV with NVFP4 (within 1 point with MXFP4), and tracks BF16 KV in RL training rollouts. End-to-end serving on NVIDIA B300 with Qwen3-4B and Qwen3-30B-A3B delivers 2.4–3.0× higher peak serving throughput than BF16 KV.
Source: https://arxiv.org/abs/2611.09825

### 2611.09424 — MINE: Entropy-coded Memory-efficient Inference for Large Language Models
**arXiv:** 2611.09424 | **Category:** cs.LG | **Section:** New submissions
MINE targets single-stream LLM inference, where decoding is strongly memory-bound because every weight must be streamed once per generated token and requests cannot be batched in local or low-latency deployments — a regime where existing lossless compression methods yield speedups only for specific data types and under extra assumptions. Its core is dtANS-LLM, a GPU entropy coding scheme adapted from dtANS to LLM inference, exploiting the non-uniform weight distribution that persists even after quantization, with exposed hyperparameters trading compression ratio against decoding cost, auto-tuned per tensor and per GPU to trace the Pareto front between model size and decoding latency. MINE ships as a vLLM plugin that selects the best kernel configuration for a given memory budget.

**Key numbers:** On Llama 3.1 8B Instruct with a 2.1-bit EntQuant checkpoint, speedups of 2.52× and 1.48× over the fastest baseline on an RTX 4060 Ti and an RTX 5090 respectively, at effective bitrates of 2.24 and 3.43 bits per weight.
Source: https://arxiv.org/abs/2611.09424

### 2611.08924 — ResQAdam: Residual-Preserving Adaptive Optimization for Memory-Efficient Quantization Aware Training
**arXiv:** 2611.08924 | **Category:** cs.CL | **Section:** Cross submissions
Quantization-aware training is the most reliable route to accurate low-bit LLMs, but AdamW keeps two dense FP32 states per weight matrix, and the authors find that low-rank memory-efficient optimizers such as GaLore and LDAdam degrade substantially in QAT. The diagnosis: a considerable part of the QAT momentum lies outside the optimizer's top-r singular subspace, and projection-based methods discard this part at every step — yet the residual remains useful when only its sign is kept. ResQAdam therefore keeps a single BF16 momentum, applies Adam only to the r×r coordinates of the principal subspace, and adds a normalized sign update computed from the residual. It is evaluated with two from-scratch QAT methods and three QAT fine-tuning pipelines, with weights quantized down to 2 bits.

**Key numbers:** Optimizer-state memory reduced by 71%–74% relative to AdamW; stays close to AdamW in most settings; training throughput reduced by less than 2%. Weights quantized down to 2 bits in evaluation.
Source: https://arxiv.org/abs/2611.08924

### 2611.09868 — CodeQuant2: Enhanced Outlier Mitigation and Adaptive Clustering for Low-Precision LRMs
**arXiv:** 2611.09868 | **Category:** cs.CL | **Section:** New submissions
Large reasoning models improve task performance by emitting longer intermediate traces, which raises inference cost and makes low-precision quantization attractive — yet aggressively quantized models often fail on reasoning tasks. The authors observe that activation fluctuations are larger during the first decoding steps of reasoning, so calibration that omits these early states misses them. CodeQuant2 is a clustering-based LUT quantization framework for low-precision LRMs: it mitigates activation outliers with rotation and scaling, uses clustering to represent non-uniform weight distributions, and adapts codebook sizes to the quantization difficulty of each layer, with calibration sample selection improved to better match actual decoding statistics. A custom LUT CUDA kernel is provided alongside.

**Key numbers:** Up to 2.85× speedup over BF16, with substantial accuracy improvements on reasoning benchmarks (no absolute accuracy figures given in the abstract).
Source: https://arxiv.org/abs/2611.09868

### 2611.08566 — CascadeRec: Deployed Adaptive LLM Compute Allocation for Multi-Tenant Content Recommendation
**arXiv:** 2611.08566 | **Category:** cs.LG | **Section:** Cross submissions
CascadeRec is a two-tier LLM reranking cascade deployed in production at a large financial-planning-and-analysis SaaS provider, serving content recommendations to enterprise tenants on AWS EKS and GKE. A lightweight Tier-1 model reranks every request; a router escalates only the requests where extra inference-time compute is likely to help to a more expensive Tier-2 procedure (self-consistency sampling, multi-path reasoning, or a larger model). Because tenant data cannot be released, the authors also evaluate on public benchmarks (MovieLens-1M, Amazon-Electronics) with segment-level analysis and paired-bootstrap confidence intervals, and report lessons learned, including inter-tenant load imbalance as a driver for cascading and handling of LLM output-parsing failures at the serving layer.

**Key numbers:** Inference cost reduced by about 10% versus uniform use of the expensive tier, with minimal latency impact and no quality regression observed over a production A/B run of over a month. On public benchmarks, uniform LLM reranking lowers NDCG@10 for sparse-history users by up to 30%; escalating cold users can enlarge the loss rather than repair it.
Source: https://arxiv.org/abs/2611.08566

### 2611.09280 — An Empirical Study of Issues in GPU Kernel Libraries for LLM Systems
**arXiv:** 2611.09280 | **Category:** cs.AI | **Section:** New submissions
LLM systems depend heavily on specialized GPU kernel libraries that implement attention, GEMM, quantization and low-precision operators while managing tensor shapes, memory layouts, code generation and hardware-specific dispatch. Problems at this layer silently corrupt outputs, hang GPUs, prevent compilation, introduce deployment incompatibilities, or degrade performance. The authors present what they describe as the first comprehensive empirical study of issues in GPU kernel libraries for LLM systems, manually analyzing 300 high-quality GitHub issue reports, their discussions and available fixes from seven representative libraries: FlashInfer, FlashAttention, Triton, CUTLASS, DeepGEMM, xFormers and bitsandbytes, characterizing symptoms, root causes, fixes, and testing and debugging practices.

**Key numbers:** 300 issue reports analysed across 7 libraries; 60.33% of sampled issues originate in the Compiler and Build System or Runtime Environment dimensions, implying validation must cover the deployment and execution stack rather than kernel code alone. No other quantitative results stated.
Source: https://arxiv.org/abs/2611.09280

## Reasoning & test-time compute

### 2611.09798 — Test-Time Compute Scales Better with Parallel Agent Teams
**arXiv:** 2611.09798 | **Category:** cs.AI | **Section:** New submissions
Two common ways to spend test-time compute on agents both fail in different ways: best-of-N sampling over many independent agents saturates quickly, while one large collaborating team scores higher but stops improving as it grows. The proposed method, parallel agent teams, samples many small teams in parallel and keeps the best team's result, balancing a high mean with the variance gain. It is tested on 12 long-horizon tasks drawn from GPU kernels and formal proofs to exploit development, with a 27B model and a budget of 100 agents. A simple statistical model explains the effect: individual agents lose because their many samples have a low mean, whereas one large team loses because a single sample gets no gain from variance.

**Key numbers:** With a 27B model and a 100-agent budget, parallel teams of ten beat parallel agents on 10 of 12 tasks, and beat one team of 100 on all four tasks where such large teams were run. At equal dollar cost, the same parallel teams beat a frontier model on half the tasks.
Source: https://arxiv.org/abs/2611.09798

### 2611.09154 — Learning When to Think: Dual-Reference Offline Optimization for Adaptive VLM Reasoning
**arXiv:** 2611.09154 | **Category:** cs.AI | **Section:** New submissions
Reasoning traces help vision-language models on complex multimodal tasks, but forcing every input through a long reasoning process causes overthinking and unnecessary inference cost. The paper studies adaptive fast/slow thinking for VLMs, where one model answers simple inputs directly and reasons step by step when needed; because fast answers and slow traces come from distinct behavior policies, a single-reference offline objective misweights one mode. DR-BOLT therefore distinguishes the desired fast/slow mixture reference from the sampling distribution and corrects their mismatch in reward-weighted training, with a fast/slow partition competition explaining routing in the optimal target and an efficient source-wise correction approximating the exact objective when response formats are well separated. Matched Qwen3-VL comparisons use identical candidate banks to isolate the objective from slow-teacher quality.

**Key numbers:** A 24.1% cross-benchmark slow ratio and a 2.90-fold end-to-end training speedup over reproduced GRPO; improvements in score–length trade-offs over the evaluated offline and online baselines on ScienceQA and three held-out transfer benchmarks.
Source: https://arxiv.org/abs/2611.09154

### 2611.09872 — On the Reliability of Majority-Vote Pseudo-Labels in Test-Time Reinforcement Learning
**arXiv:** 2611.09872 | **Category:** cs.AI | **Section:** New submissions
Test-time reinforcement learning adapts pretrained language models to unlabeled target-domain data using self-generated pseudo-labels, whose reliability is poorly understood. The authors analyze majority-vote supervision for TTRL with online DPO and decompose its error into population-majority bias and prompt-dependent finite-rollout variation. Because population-majority bias is generally unidentifiable without external supervision, they focus on mitigating the downstream effect of finite-rollout variation, proposing prompt-conditional distributionally robust DPO that conditions within-prompt robust reweighting on observed vote reliability so that updates from sampling-sensitive prompts become more conservative. A cache-based mechanism reduces self-supervised forgetting during online adaptation.

**Key numbers:** Matches or outperforms the strongest TTRL baseline in 24 of 30 settings, across six mathematical and knowledge-intensive reasoning benchmarks and five model backbones. No other quantitative claims in the abstract.
Source: https://arxiv.org/abs/2611.09872

### 2611.09597 — RuACT: Recovering Inactive Rubrics as Adaptive Critics and Teachers
**arXiv:** 2611.09597 | **Category:** cs.CL | **Section:** New submissions
Rubric-based RL extends verifiable rewards to open-ended tasks by scoring each response against query-specific rubrics. Under group-relative optimization, however, a rubric that every sampled response fails (unreachable) or passes (saturated) gives all responses the same outcome and no learning signal — and in Qwen3-4B medical training, 60.88% of query–rubric observations are inactive. The authors find the two states lack different supervision: stating an unreachable rubric in the prompt raises its satisfaction from 1.13% to 91.25%, whereas responses that all pass a saturated rubric still differ in quality. RuACT assigns each inactive rubric the role that supplies what it lacks — Rubric as Teacher uses unreachable rubrics as privileged information for reward-gated on-policy self-distillation; Rubric as Critic decomposes saturated rubrics into child rubrics that separate current responses while sharing the parent's weight.

**Key numbers:** 60.88% of query–rubric observations inactive in Qwen3-4B medical training; unreachable rubric satisfaction rises from 1.13% to 91.25% when stated in the prompt; unguided recovery rises from 35.02% to 42.86%, and child refinement improves reward-quality alignment on independent rollouts from 57.74% to 60.77%. RuACT outperforms GRPO, rubric reweighting and rubric-guided exploration on all four medical and scientific benchmarks with Qwen3-4B, and achieves the best average with Qwen3-1.7B.
Source: https://arxiv.org/abs/2611.09597

## Agents, agent memory & harnesses

### 2611.08946 — Flex-RSI: Benchmarking Recursive Self-Improvement of Frontier Agents
**arXiv:** 2611.08946 | **Category:** cs.AI | **Section:** New submissions
Agent performance depends not only on the model but on its harness — prompts, tools, memory and control loop — and most existing benchmarks keep the harness fixed and score only the produced solution. Flex-RSI is a benchmark for recursive self-improvement of agents on vision and robotics tasks under a fixed budget: in each round an executor improves the task solution, kept only if it scores higher on held-out validation data, and an improver then revises the harness, including the executor and itself. Every run starts from the same general-purpose harness and the final solution is scored on hidden test data, with closed-source and open-weight models evaluated across perception, reasoning, robot action, 3D reconstruction, visual creation and infrastructure tasks.

**Key numbers:** No quantitative results in the abstract: the paper reports qualitative findings (self-improvement helps most when the agent builds its own solution; success/failure-only feedback recording holds back open-weight models; open-weight models fall furthest behind where outputs must pass strict physical-stability or exact-correctness checks; paired runs show editing the harness itself contributes to the gains).
Source: https://arxiv.org/abs/2611.08946

### 2611.09218 — BOXBOX: Recursive Harness Self-Improvement for Long-Running Performance Optimization
**arXiv:** 2611.09218 | **Category:** cs.AI | **Section:** Cross submissions
Automated harness optimization improves agents by learning from trajectories and task feedback, but existing offline methods use reference answers to optimize harnesses for reuse on held-out tasks — while many real-world tasks are open-ended and long runs expose new difficulties that offline-optimized harnesses do not address. The paper introduces PerfRace, a benchmark for long-running performance optimization of software projects, and asks whether agents can use task-specific experience to recursively improve their harnesses during an ongoing task. BOXBOX enables agent-triggered harness revision and kernel-managed hot reloading while preserving execution context, and is evaluated under matched test-time budgets against Frozen Harness, offline Harness Evolution and Harness Scaling.

**Key numbers:** BOXBOX reaches a Speedup@4h of 1.70×, compared with 1.54× for the strongest baseline, with more efficient use of task time and model cost.
Source: https://arxiv.org/abs/2611.09218

### 2611.09472 — ENGRAM: From Agent Experience to Weights through Verified Consolidation
**arXiv:** 2611.09472 | **Category:** cs.AI | **Section:** New submissions
Language-model agents use experience through external retrieval and parameter learning, but consolidating stored experience into model weights requires deciding both which experience to train on and when its external records can leave retrieval — admission based solely on student mastery excludes useful teacher demonstrations, while removal immediately after training discards guidance the model still needs. ENGRAM separates training admission from memory release: a demonstration-aware gate admits skills based on student mastery or sufficient successful teacher demonstrations, the student learns from selected action traces with context from an Engram Trace Graph, and a verification gate then compares the updated model without episodic retrieval against the base model with retrieval on reserved probes. Release requires valid training participation and scores meeting both relative and absolute criteria; records for skills failing verification remain retrievable.

**Key numbers:** No absolute numbers in the abstract: experiments across interactive and reasoning benchmarks show consistent gains over frozen-weight ETG controls, with ablations supporting demonstration-aware admission and selective adapter activation, and a controlled held-out comparison showing verified release substantially reduces the retrievable footprint while staying close to retain-all performance and outperforming immediate and budget-matched random release. ENGRAM also improves task performance while reducing input-token usage and model calls.
Source: https://arxiv.org/abs/2611.09472

### 2611.09892 — On Agentic Manipulation Policies
**arXiv:** 2611.09892 | **Category:** cs.LG | **Section:** Cross submissions
Recent robot manipulation work has focused on specialist policies trained on demonstrations; this paper argues that generalist AI models can control manipulators more reliably than specialist policies such as vision-language-action models and world-action models, and systematically analyzes agentic manipulation policies in which a generalist model commands the manipulator directly, adapting its actions as the task unfolds. AMP1 is a reference harness that runs unchanged across single-arm, bimanual and mobile manipulation, and the basic harness supplies no grasping, pushing or placing skills — the agent develops its own strategies, such as searching for hidden objects, using objects as tools and calibrating its cameras. Adding a persistent memory store lets the agent learn across episodes.

**Key numbers:** On RoboLab-120, AMP1 reaches an 85.6% success rate zero-shot, versus 49.2% and 42.9% for leading VLA and WAM policies; zero-shot success in 104 of 108 real-world trials spanning twelve tasks and three robot instances, with failure rates reduced by 20× and 15× relative to strong VLA and WAM baselines; a memory-augmented harness lowers the failure rate on RoboDojo bimanual tasks by 4.6× relative to zero-shot deployment.
Source: https://arxiv.org/abs/2611.09892

### 2611.09355 — HiMEM: Hippocampus-Inspired Memory Consolidation, Pruning, and Composition for Vision-Language-Action Models in 3D Scenes
**arXiv:** 2611.09355 | **Category:** cs.AI | **Section:** Cross submissions
Memory matters for long-horizon execution and cross-task generalization in vision-language-action models operating in complex 3D scenes, but existing VLA memory suffers from noise: stored episodic memories contain extensive redundant detail about scene layouts, object configurations and robot-specific states, obscuring generalizable manipulation principles. HiMEM introduces a hippocampus-inspired consolidation mechanism that synthesizes extensive episodic experience into a compact set of essential semantic memories, an episodic memory pruning mechanism that removes episodes already captured by consolidated semantic memories (raising effective memory capacity), and a flexible memory composition mechanism that jointly leverages multiple episodic and semantic memories for cross-scenario generalization. Experiments span LIBERO and LIBERO-Plus across different VLA backbones.

**Key numbers:** Improves the average success rate of pi_0 from 91.88% to 98.20% on LIBERO.
Source: https://arxiv.org/abs/2611.09355

### 2611.09088 — When Routine Operations Break Architectural Pattern Relationships in LLM Agent Harnesses
**arXiv:** 2611.09088 | **Category:** cs.AI | **Section:** Cross submissions
LLM agent harnesses distribute tool mediation, state management and safety guardrails across native services, independently written plugins and configuration, so routine operations can change the runtime order or retained state that architectural pattern relationships require — without any code change. The paper studies five relationships associated with the Guardrail Enforcement Point, Autonomy Controller and Blackboard patterns across five released harnesses, analysing a main sample of fourteen independently written plugins, and introduces PatternOps, an assessment procedure tracing requirements from pattern descriptions, provider documentation and deployment profiles to the providers that realise them and the records that decide them. The finding is that such relationships break silently: after a plugin was reapplied or an allow rule saved, policy stopped evaluating edits while every plugin stayed active, and a prohibited edit executed.

**Key numbers:** No quantitative results in the abstract: the paper reports qualitative findings across five harnesses and fourteen plugins (a pattern relationship is a property of the running system and its history, so architectures should be evaluated against decision paths, state lifetimes and operation sequences).
Source: https://arxiv.org/abs/2611.09088

## Evals & benchmarks

### 2611.09113 — Authorization Drift in LLM Agents: Evaluating Boundary Compliance in Multi-Step Tool Use
**arXiv:** 2611.09113 | **Category:** cs.LG | **Section:** Cross submissions
LLM agents can exceed their authorization boundaries while pursuing user goals without any adversary; the paper formalizes this as authorization drift across data, tool, scope and time, and introduces the Authorization Drift Benchmark (ADB): 648 samples across seven domains, each pairing a sufficient compliant path with an attractive unauthorized shortcut. To ensure executable tasks, tempting shortcuts and feasible compliant paths, Staged Execution-Reflective Synthesis grounds benchmark validation in real agent rollouts rather than LLM self-critique. Drift points are also mapped to legal provisions across four jurisdictions, connecting overreach to privacy and information-security concerns.

**Key numbers:** 648 samples across 7 domains; 13 LLMs and 3 frameworks, giving 25,207 trajectories. Frontier-capable models show drift rates of 0.43–0.61, but 86.18% of tasks admit an observed clean-success trajectory, showing drift is avoidable. Drift is persistent and dominated by early data over-collection; apparent improvements under agentic scaffolds coincide with collapsing clean-completion performance. 93.5% of legally grounded drifting runs map to multiple jurisdictions; data minimisation is the most frequently implicated provision.
Source: https://arxiv.org/abs/2611.09113

### 2611.09326 — ABHBench: Evaluating Moral Decision-Making of Foundation Models from an Agentic Perspective
**arXiv:** 2611.09326 | **Category:** cs.CL | **Section:** Cross submissions
Existing moral benchmarks largely ask models to judge human actions from third-person textual vignettes, leaving untested how models behave when they themselves become the acting agent. ABHBench is a multimodal benchmark built from Detroit: Become Human, placing foundation models in branching narrative scenarios with visual observations, dialogue, memory and action choices. Inspired by Asimov's Three Laws of Robotics, the framework measures Harmlessness, Obedience and Self-preservation to capture core tensions in human–AI relations, along with Autonomy, Stability and Certainty to assess decision-making patterns. The central finding is that moral behavior changes substantially under situated agentic context, and that reasoning-enhanced models show no monotonic gains.

**Key numbers:** 12 foundation models evaluated; 75% of models shift significantly between a text-only abstraction and the matched multimodal DBH scenario. No other quantitative claims in the abstract.
Source: https://arxiv.org/abs/2611.09326

### 2611.08613 — NormGym: Evaluating Normative Competence through Social Interaction
**arXiv:** 2611.08613 | **Category:** cs.AI | **Section:** New submissions
Existing evaluations largely test whether agents can recognize or apply norms they already know, not whether they can acquire previously unknown norms from social interaction. NormGym is an interactive benchmark in which a newcomer must infer a hidden, arbitrary norm while pursuing its own task in a multi-agent community; success requires distinguishing what is possible from what is permitted, inferring the norm from observed behavior and sanctions, and applying it in new situations. It contains diverse norms and distinct environments, allowing systematic evaluation of agents including LLM agents. The analysis finds models can sometimes revise their behavior following sanctions for their own actions, but struggle to use other agents' behavior and the sanctions they receive to infer the underlying norm, and that fine-tuning may be insufficient.

**Key numbers:** The strongest evaluated LLM reaches a joint task-and-compliance success rate of 55.3%. No other quantitative claims in the abstract.
Source: https://arxiv.org/abs/2611.08613

### 2611.09792 — Knowing When to Intervene: Causal Evaluation of AI Agents
**arXiv:** 2611.09792 | **Category:** cs.LG | **Section:** Cross submissions
Benchmarks are static and therefore uninformative about the value of auditing interventions at deployment time, yet deciding whether to intervene within an agent's trajectory — verifying an output, steering behavior — is fundamentally a causal inference question, since the impact of an intervention depends on current context, environment and the agent's future behavior. The authors develop what they describe as the first methodologically grounded framework for evaluating the causal effects of randomized interventions within agent trajectories: from a relatively small dataset of trajectories collected under randomized interventions (verification or screening), they estimate the dynamic causal effect of a rich class of contextual intervention policies. The estimated structural parameters can also build safety leaderboards capturing the risk of various agentic actions, for audit prioritization. Applications cover tau-bench Retail, ToolSandbox and ImpossibleBench.

**Key numbers:** No quantitative effect sizes in the abstract: the paper reports that intervention effects vary substantially across agent actions and states, evaluated on tau-bench Retail, ToolSandbox and ImpossibleBench.
Source: https://arxiv.org/abs/2611.09792

## Safety, alignment & interpretability

### 2611.08780 — Guardrail Erosion in Domain Fine-Tuned Large Language Models: A Paired Audit of Knowledge-Centric Abstention in Biomedical LLMs
**arXiv:** 2611.08780 | **Category:** cs.CL | **Section:** New submissions
The number of domain fine-tuned models, particularly biomedical ones, is expanding rapidly, and while prior work has studied value-centric refusal, this work focuses on knowledge-centric abstention. The authors audit 25 biomedical domain fine-tuned large language models against 11 paired base checkpoints on MedAbstain and ClinDet-Bench to evaluate the impact of fine-tuning on knowledge-centric abstention. Appropriate abstention, already low in base models, falls further after fine-tuning, with heterogeneous magnitude and direction of change across pairs — motivating fine-tuning methods that improve domain-specific capability while preserving appropriate caution.

**Key numbers:** 25 fine-tuned models against 11 paired base checkpoints. Median appropriate abstention is 8.3% on MedAbstain in base models and 4.2% after fine-tuning, decreasing in 21 of 25 pairs on MedAbstain.
Source: https://arxiv.org/abs/2611.08780

### 2611.08752 — AttentionSwitch: Jailbreak Defense for LLMs via Joint Learning of Sparse Attention-Head Selection and Scaling
**arXiv:** 2611.08752 | **Category:** cs.CL | **Section:** Cross submissions
LLMs remain susceptible to jailbreak attacks that circumvent safety mechanisms, and fine-tuning-based defenses are computationally expensive and risk catastrophic forgetting. Recent jailbreak defenses intervene on specific model components but typically decouple two inherently related decisions: where to intervene and how to modify the selected components — a sequential optimization that can be suboptimal because the optimal intervention location depends on the intervention applied there, and vice versa. AttentionSwitch is presented as the first jailbreak defense to jointly optimize intervention sites and strengths within a frozen LLM: it learns a sparse set of attention heads together with query-conditioned multiplicative scaling factors, so selected heads' outputs can be attenuated or amplified without altering the directions of their representations. Evaluated across popular language models and jailbreak attacks.

**Key numbers:** No quantitative results in the abstract: the paper reports that AttentionSwitch outperforms existing defenses across popular language models and jailbreak attacks, with particularly strong results when training data is scarce.
Source: https://arxiv.org/abs/2611.08752

### 2611.08768 — Conflux: Preventing Privilege Escalation with Principal Contexts and System-Level Evaluation
**arXiv:** 2611.08768 | **Category:** cs.AI | **Section:** Cross submissions
LLM agents combine information from multiple principals while acting externally. The paper formalises privilege escalation as a system-level security objective: an action may proceed only if every principal that influenced it would allow it, and since model-level defences remain probabilistic, enforcement must sit outside model judgement. Conflux is a principal-context defence whose kernel, ITES, derives authority from provenance and the organisation's existing access-control system and intersects the permissions of every influencing principal. The authors prove a conditional authority-confinement theorem: under complete mediation, no-laundering provenance, a known non-empty decision context, fresh permission checks and action binding, the kernel admits no action that escalates privilege with respect to any recorded influencing principal. Two system-level evaluators are described — SLED (black-box, bounded exhaustive exploration of a declared finite model of a defence) and SLED-V (white-box, checking a serialisable intermediate representation against security and provenance properties).

**Key numbers:** No quantitative results in the abstract: the appendix reports retained AgentDojo, SLED and SLED-V results including the limits of those runs, and the authors state explicitly that no result in the paper is an unbounded deployment guarantee.
Source: https://arxiv.org/abs/2611.08768

### 2611.08551 — How Small Can We Go? Calibrating Activation-Cache Compression for SAE Training
**arXiv:** 2611.08551 | **Category:** cs.CL | **Section:** Cross submissions
Training a sparse autoencoder requires a massive cache of model activations, and this paper measures the effect of compressing that cache two ways: a frozen-SAE test (how many feature activations stay the same when the compressed cache is passed through the original SAE) and a retraining test (how many of the original features still exist after retraining on the compressed cache). The retraining test reveals no clear scale for retained features — on a GPT-2 cache, rounding everything to fp16 keeps 60.6% of features, but changing one value in a million by the smallest step fp32 allows (eight orders of magnitude smaller) keeps only 70.5%, while changing the random seed keeps 23.0%. The authors therefore calibrate: retraining on identical bytes sets the ceiling, a reseed sets the floor, and each compressed codec is measured against its own site's floor.

**Key numbers:** On GPT-2: fp16 rounding keeps 60.6% of features, a single-value fp32-epsilon change keeps 70.5%, a reseed keeps 23.0%. Naïve per-token int4 loses more features than a reseed everywhere tested, as do PCA and random projection on GPT-2; channel standardization brings int4 back above the floor at the same raw file size. At the smallest budget a bf16 forward pass loses slightly more features than rotated 8-bit storage. Calibration of a site costs four training runs and two evaluation passes; evaluated with TopK SAEs on GPT-2 small and Pythia-1.4B.
Source: https://arxiv.org/abs/2611.08551

### 2611.09233 — Cross-Layer TopK: Dynamically Allocating Sparsity Across Layers in Transcoders
**arXiv:** 2611.09233 | **Category:** cs.LG | **Section:** New submissions
Cross-layer transcoders decompose LLM activations into human-interpretable features and trace how those features interact across layers to form circuits, but training them effectively is hard: a CLT must model all layers at once, on top of the usual sparsity-versus-reconstruction trade-off. The common JumpReLU recipe controls sparsity only indirectly through a penalty, while a direct extension of TopK selects a fixed number of latents in every layer — yet reconstruction difficulty differs widely across layers, with intermediate layers much harder than others, so a uniform budget is suboptimal. Cross-Layer TopK sets a single L0 budget for the whole model and dynamically allocates it across layers during training, with the fixed per-token budget also making it easy to pair with sparse decoding. The paper also shows the method follows scaling laws in both latent size and sparsity, and releases the weights of its CLT.

**Key numbers:** On Qwen3-8B-Base, lower FVU than JumpReLU and other TopK variants while using 20% fewer active latents; better reconstruction carries over to circuit tracing with more complete circuits and higher replacement and completeness scores; pairing with sparse decoding gives a 2.9× speedup per training step.
Source: https://arxiv.org/abs/2611.09233

## Multimodal & long context

### 2611.09092 — AdaAlloc: Adaptive Visual Token Allocation for Long-Video Question Answering
**arXiv:** 2611.09092 | **Category:** cs.AI | **Section:** Cross submissions
Long-video question answering forces multimodal LLMs to reason under strict visual-token budgets, creating a tradeoff between broad temporal coverage and fine-grained spatial detail: uniform sampling preserves coverage but obscures decisive local cues, while caption-based or frame-similarity retrieval operates over lossy proxies that can miss motion, state changes and before-after relations. AdaAlloc recasts long-video reasoning as a visual-token allocation problem, planning a global/local allocation policy, using temporal grounding to locate candidate evidence segments and refining them into a compact temporal memory. The chosen policy controls both frame sampling density and resolution, mixing sparse low-resolution global frames with denser high-resolution local frames from the refined memory; a final answerer reasons over the allocated global context and refined local evidence. It is training-free.

**Key numbers:** Across LVBench, MLVU, VideoMME and LongVideoBench, AdaAlloc improves over budget-matched uniform sampling by up to 10.5 percentage points, and outperforms the compared frame-selection and agentic methods on their reported benchmarks.
Source: https://arxiv.org/abs/2611.09092

### 2611.09511 — V-STORM: A Structure-Aware Grounded Chain of Thought Dataset for Faithful and Fine-Grained Spatio-Temporal Video Reasoning
**arXiv:** 2611.09511 | **Category:** cs.AI | **Section:** Cross submissions
MLLMs can often identify what happens in a video but struggle with fine-grained spatio-temporal reasoning, which requires precise grounding of when and where supporting evidence appears and composing that evidence into a coherent reasoning chain — a problem exacerbated by the lack of scalable data construction and evaluation pipelines giving granular, verifiable supervision linking reasoning steps to explicit spatio-temporal evidence. V-STORM transforms videos into spatio-temporal scene graphs and derives Grounded Chain of Thought from validated evidence paths, making each reasoning step traceable to structured, verifiable evidence. The analysis reveals a separation between evidence localization and evidence composition, and fine-tuning with the data improves both answer accuracy and grounding faithfulness. Dataset, benchmark and code will be publicly released.

**Key numbers:** A 260K-sample training set and a 3K-sample human-verified benchmark, both with Grounded Chain of Thought annotations linking reasoning to explicit spatio-temporal evidence. No absolute accuracy figures in the abstract.
Source: https://arxiv.org/abs/2611.09511

### 2611.09770 — ROSE: Risk-Aware Orthogonal Subspace Navigation for Lifelong Knowledge Editing in Multimodal Large Language Models
**arXiv:** 2611.09770 | **Category:** cs.CL | **Section:** New submissions
Multimodal LLMs need continuous factual updates to stay current, but lifelong knowledge editing suffers from severe Locality Erosion and Catastrophic Forgetting, since sequential edits interfere with pre-trained capabilities and prior updates. ROSE is a risk-aware orthogonal subspace navigation framework that restricts parameter updates to the orthogonal complement of previously edited subspaces, and introduces a risk-guided mechanism using a dynamically computed risk mask to safeguard factual parameter subspaces essential for model stability. At inference it uses a multi-granularity knowledge integration strategy, with prototype-anchored semantic gating and perturbation-driven subspace fusion to activate edited knowledge for relevant queries while limiting interference on unrelated inputs. Comprehensive experiments on two multimodal benchmarks cover five key metrics.

**Key numbers:** No absolute numbers in the abstract: ROSE is reported competitive with state-of-the-art approaches across five key metrics while maintaining outstanding stability over more than 1,000 sequential updates.
Source: https://arxiv.org/abs/2611.09770

## Training & weight-space methods

### 2611.09271 — Zero-Shot Weight-Space Programming Across a Difficulty-Graded Ladder of Two-Player Games
**arXiv:** 2611.09271 | **Category:** cs.AI | **Section:** New submissions
Weight-space programming sets every weight of a feed-forward network by hand, from an explicit specification of the desired computation, with no gradient descent and no training data anywhere in the construction. This paper asks how far a large language model can carry the practice zero-shot, across a four-rung difficulty ladder (Nim, tic-tac-toe, two sizes of Connect Four, and a chess endgame), building a second network at each rung from a structurally unrelated game at matched difficulty, to separate findings about the difficulty level from findings about the one game used to measure it. Ten networks are built and independently verified against independent oracles, with construction-cost measurements and a cold-prompt protocol for future cross-model comparison. The paper reports that the chess-endgame rung is exact where correctness is cheap but collapses where it is expensive.

**Key numbers:** 10 networks built and independently verified; 6 admit a complete, non-statistical proof of correctness. Chess-endgame rung: 84.1–100% success at the one-ply tactics it was built to get right, collapsing to 0.57–9.13% in full adversarial play; its replicate shows an order-of-magnitude less severe collapse under a shorter required plan and exact rather than heuristic safety checks.
Source: https://arxiv.org/abs/2611.09271

## Batch summary

The strongest trend in this batch is that LLM systems work is consolidating around memory as the scarce resource: on the serving side, two independent systems push native FP4 and 2/4-bit KV-cache decoding to 2.4–3.0× throughput (FOSCAR, BitDecoding-FP4) while entropy coding and residual-preserving optimizers attack the remaining memory wall from the weight and optimizer-state side, and on the learning side a parallel cluster of papers treats agent memory, harness revision and SAE activation caches as compressible, prunable, consolidatable artifacts rather than free context.
