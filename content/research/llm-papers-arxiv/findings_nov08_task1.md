# LLM Papers — Daily arXiv Run, 2026-11-08 (Friday 2026-11-06 batch), Task 1

26 papers, all previously uncovered. Grouped by theme.

## Efficiency, attention & inference systems

#### Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost
**arXiv:** 2611.07232 | **Category:** cs.CL | **Section:** New submissions
At context lengths of about 1M tokens, dense attention is expensive in both prefill and decoding, and training long-context models needs long documents that grow scarcer as target length rises. Existing sparse attention methods score all preceding blocks or tokens, so selection cost per query is O(L) at context length L; hierarchical selection lowers this to O(log L), but prior trainable hierarchical methods only report accuracy within their training length. RecSA (Recursive Sparse Attention) builds a tree over the KV cache where each node summarizes its subtree with one key and one mean-pooled value, using one pooler per layer shared across all levels and distilled from dense attention. Each level above the tokens selects at most k candidates, so each query has O(log L) selection cost and reads O(log L) entries, and summaries of unselected candidates share one softmax with the exact tokens. Each entry's RoPE position is its index among the candidates of its level, so every relative distance stays inside the range seen during training. Initialized from Qwen3-4B and trained on 0.62B tokens at the original model's 32K training length, RecSA outperforms all baselines on RULER at every length from 131K to 2M.

**Key numbers:** O(L) selection cost for prior sparse methods vs. O(log L) for RecSA; initialized from Qwen3-4B; trained on 0.62B tokens at 32K training length; beats all baselines on RULER at every length from 131K to 2M; at 1M tokens scores 60.5 vs. 40.0 for the best baseline, Dense + DCA; with optimized kernels faster than dense attention end-to-end in prefill and decoding from 64K to 2M; at 524K on one H200 GPU, accelerates prefill by 3.2x and decoding by 3.8x.
Source: https://arxiv.org/abs/2611.07232

#### Beyond K/V Caches: Cross-Model State Handoff in Hybrid Linear-Attention LLMs
**arXiv:** 2611.08133 | **Category:** cs.CL | **Section:** New submissions
Production deployments mix models for cost/quality through cascading, routing, and switching mid-conversation, so context accumulates across turns and each switch forces the target model to repeat prefill. Existing work transfers full-attention (FA) K/V caches across models, but hybrid linear-attention models also retain recurrent states (REC) and convolution histories (Conv), and the interaction between Conv and REC makes cross-model transfer hard: Conv perturbations change keys and values in recurrent layers and alter REC updates, Conv histories are overwritten, yet changes in REC can still affect later outputs. The authors also note that more accurate REC reconstruction need not improve continuation. Hybrid State Transfer (HST) handles all three state types, using structured REC maps and preserving history order during Conv alignment, calibrating adapters against the frozen target's outputs during continuation, and merging FA cache map updates offline.

**Key numbers:** Across five benchmarks, Qwen3.5 4B→27B achieves mean task retention of 89.88% and 9B→27B achieves 94.11%; with source caches already available, separate timing on synthetic 16K inputs yields handoff body speedups of 21.66x and 21.91x.
Source: https://arxiv.org/abs/2611.08133

#### Gabor Gabor: E-Gaborformer, a Strictly Causal Speech Recognizer with Gabor-Dictionary Convolutions and Delta-Rule Memory
**arXiv:** 2611.08092 | **Category:** cs.CL | **Section:** Cross submissions
Real-time voice agents need a speech recognizer that never waits on future audio and whose per-call memory does not grow with call length. E-Gaborformer is a strictly causal encoder combining Gated DeltaNet-2 recurrent layers with sliding-window attention in a 3:1 ratio, where every temporal convolution is built from a fixed dictionary of causal Gabor atoms. Its streaming state is constant — about 19 MB per call at production scale including the prediction network — whereas a causal-attention encoder of the same size accumulates over 1 GB after ten minutes. In a controlled causal study on LibriSpeech it leaves the initial plateau earlier, reaches a given accuracy up to 18% sooner, and matches or beats an E-Branchformer trained with the identical front end and recipe.

**Key numbers:** Constant streaming state of about 19 MB per call at production scale, vs. over 1 GB accumulated after ten minutes by a causal-attention encoder of the same size; 3:1 ratio of Gated DeltaNet-2 layers to sliding-window attention; on LibriSpeech reaches a given accuracy up to 18% sooner; a 0.6B-parameter Hebrew and English streaming transducer has 28–31% lower WER than NVIDIA's Nemotron 3.5 ASR Streaming on English voice-agent traffic, and up to 20% lower Hebrew WER than the authors' previous production system; same weights serve strictly causal and 480 ms-lookahead decoding with no accuracy loss; a two-class formulation of the RNN-T lattice trains the transducer 2.6x faster with exact loss and gradients.
Source: https://arxiv.org/abs/2611.08092

#### Latency-Aware Adaptive Best-of-N
**arXiv:** 2611.07453 | **Category:** cs.CL | **Section:** New submissions
Test-time compute improves responses by spending extra inference compute, and the right amount depends on the prompt. Adaptive TTC methods usually allocate compute by stopping once an observed reward signal exceeds a fixed threshold, and they measure cost in generations or tokens — but in online serving latency is also a cost, growing with server load, so a fixed threshold under-spends when generation is fast and over-spends when it is slow. For Best-of-N sampling the paper proposes a two-stage adaptive algorithm: draw an initial batch, then use observed rewards and the batch's latency to decide whether to draw a second batch and at what size by comparing expected improvement against predicted cost, drawing one when the first batch's best reward is below a threshold that decreases with the first batch's latency, without explicitly measuring server load. Each reward is mapped to its value under the cumulative distribution function (CDF) of the prompt's reward distribution so the same tradeoff parameters transfer across tasks, and a regression fitted offline on other prompts predicts a distribution for the CDF value of the first batch's best reward, giving expected improvement in closed form.

**Key numbers:** Evaluated by simulation on a preference-based alignment benchmark with a generations-equivalent cost metric (generations plus latency, converted to generations); the method reaches Best-of-N's reward at lower generations-equivalent cost, and conditioning on measured first-batch latency saves at least as much cost as fixed-threshold latency-unaware baselines, and more when latency is highly variable, grows with batch size, and the second batch's latency is highly predictable from the first's.
Source: https://arxiv.org/abs/2611.07453

#### Server-Side Sparse Assignment for Federated Mixture-of-Experts
**arXiv:** 2611.07093 | **Category:** cs.LG | **Section:** New submissions
Federated learning enables collaborative LLM fine-tuning on edge devices with privacy, but clients are heterogeneous in data distribution and in memory/compute budget. Recent federated mixture-of-experts approaches cope via sparse expert activation or partial expert loading, yet existing partial-expert methods rely on heuristic full-pool observations or prioritize system-wide load balance, with no guarantee of recovering client-specific relevant experts from partial observations. S3-MoE is a server-side sparse expert assignment framework that estimates client-specific expert relevance from partial observations and refines assignments through an exploit–explore mechanism, with established relevance-estimation error and exact Top-K recovery guarantees. Experiments use a CNN-based MoE on CIFAR-100.

**Key numbers:** S3-MoE recovers task-dependent client–expert preferences and reduces conflicts from correlated expert selection across clients; versus Full-20 FedAvg (all 20 experts available for local Top-5 routing), S3-MoE achieves 1.31 percentage points higher mean final accuracy while loading only 5 experts per client.
Source: https://arxiv.org/abs/2611.07093

## Quantization & compression

#### DictLLM: Post-training Compression of Large Language Model with Dictionary Kernels
**arXiv:** 2611.08082 | **Category:** cs.LG | **Section:** Cross submissions
Efficient mobile deployment of LLMs requires balancing performance against compute and memory constraints, and post-training compression manages this trade-off with far less computation than in-training counterparts. DictLLM decomposes weight matrices within grouped layers into a shared dictionary plus layer-specific sparse coefficients, obtained directly from a pre-trained model without further training, cast as a four-step post-training optimization: shared dictionaries via singular value decomposition (SVD) of input-scaled weight matrices amortizing rank across grouped layers; sparsification of layer-specific coefficients to the target compression ratio using a dictionary-aware Hessian; dictionary refinement given the resulting sparse coefficients; and aggressive quantization of both components using factor-specific Hessian information (input covariance for dictionaries, dictionary-aware Hessian for coefficients). The resulting representation stores a single shared dictionary per layer group alongside sparse layer-specific coefficients.

**Key numbers:** DictLLM consistently outperforms existing post-training low-rank compression methods on language modeling and zero-shot reasoning benchmarks and pushes the Pareto frontier between model size and performance; compresses the original LLaMA-7B model by 5.1x with only a 2.9-point increase in WikiText-2 perplexity; achieves a 3.6x higher compression ratio than the state-of-the-art low-rank method.
Source: https://arxiv.org/abs/2611.08082

#### StrataFlux: Memory-Hierarchy-Native Low-Bit LLM Inference
**arXiv:** 2611.08363 | **Category:** cs.LG | **Section:** New submissions
Quantization cuts LLM inference memory and bandwidth but can degrade accuracy, and offloading higher-precision data instead stalls generation. StrataFlux challenges that tradeoff by recovering accuracy lost to low-bit weight and KV-cache quantization while retaining quantization's memory and speed advantages, co-designing refinement representation, selection, and delivery so that host RAM and solid-state drives become useful sources of additional precision. Its selective precision streaming reduces transfer volume, overlaps delivery with computation, and reuses fetched precision across decoding steps so generation need not wait for every transfer. Evaluation covers 2–4-bit weights and 2–3-bit KV caches on dedicated GPUs and unified-memory platforms.

**Key numbers:** For 2-bit Llama-3.1-8B-Instruct weights, reduces WikiText-2 perplexity from 9.46 to 8.40 while maintaining 95.4% of the quantized base's throughput on RTX 5090; with 2-bit weights and KV, raises Qwen3-8B's AIME 2024/2025 accuracy from 11.0% to 47.1% at unchanged GPU memory use; at 128K context, Llama-3.1-8B-Instruct with 3-bit weights and 2-bit KV achieves comparable perplexity and speed to vLLM's 4-bit AWQ weights and 8-bit KV on RTX 5090 using approximately half the GPU memory.
Source: https://arxiv.org/abs/2611.08363

## Reasoning, test-time compute & verification

#### WeightLoop: Weight-Space Programming with Experimental Feedback
**arXiv:** 2611.07319 | **Category:** cs.LG | **Section:** New submissions
Weight-space programming (WSP) shows language models can reason about and rewrite neural network weights, while recursive self-improvement (RSI) motivates feedback-driven improvement. WeightLoop turns experimental feedback into persistent updates to deployed predictors: GPT-6 Astra inspects a task specification and the model implementation, then writes a bounded, reusable parameter-editing program. As new measurements arrive, the program identifies prediction discrepancies, validates candidate edits using observed outcomes, and writes the selected changes back to the original model. The editor remains fixed while the predictor evolves, enabling repeated updates without further LLM calls or gradient retraining while preserving the original inference interface.

**Key numbers:** In offline replay, targeted edits improve mean ranking utility in seven of eight endpoint-budget settings (all eight versus random edits) and improve mean final discovery across three sequential tasks.
Source: https://arxiv.org/abs/2611.07319

#### Teaching Agents the "Principle", Not the "Reward"
**arXiv:** 2611.07130 | **Category:** cs.LG | **Section:** New submissions
Reinforcement learning performs strongly on many tasks, but in more complex tasks agents still struggle to learn good, generalizable policies even with carefully designed rewards and abundant samples. The authors attribute this to the reward decoding burden: designers encode knowledge of desired behavior into rewards and penalties, and agents must infer it from long sequences of noisy scalars. They propose prescriptive policy learning (PPL), which directly teaches higher-level knowledge about tasks — principles of behavior such as how to maintain balance, accumulate energy, and land smoothly — through appropriately selected key quantities and references, so that at every step it can be indicated whether and to what extent the agent follows the principles.

**Key numbers:** No quantitative claims in abstract beyond qualitative findings: PPL agents learn good, generalizable policies without any reward; taught only simple heuristic principles, PPL agents outperform reward-based methods with far fewer samples; policies transfer directly to harder settings and keep performing well.
Source: https://arxiv.org/abs/2611.07130

#### SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization
**arXiv:** 2611.08483 | **Category:** cs.AI | **Section:** New submissions
LLM-guided evolutionary search uses AI agents to improve programs for mathematical and computational problems by iteratively refining solutions and combining high-scoring methods, but the process is slow because the LLM generates a long textual chain of thought per round and must repeat this many times to maintain population diversity. SwarmEvolve runs hundreds of low-cost agents per round in swarms that reason in latent space without decoding to text and share information by passing KV caches, with each swarm studying the problem from a different angle. A novelty filter keeps the most distinct agent ideas by directly measuring distances between agents' hidden state vectors, and crossover happens naturally in latent space since a summarizer agent receives the combined KV caches of all swarm members.

**Key numbers:** On 21 problems in mathematical discovery and scientific computing, SwarmEvolve gets the highest average score and needs a median of only 3 to 8 minutes to reach the best scores other state-of-the-art frameworks reach in 60 minutes; on several problems, SwarmEvolve with Qwen3 8B improves on solutions AlphaEvolve first found with frontier LLMs; hundreds of low-cost agents per round.
Source: https://arxiv.org/abs/2611.08483

## Alignment, safety & red-teaming

#### The Intrusion Pathway: How Non-Evidential Context Degrades Language Model Performance
**arXiv:** 2611.07778 | **Category:** cs.AI | **Section:** New submissions
Language models lose accuracy when a prompt contains non-evidential context — irrelevant statements from unrelated domains or random off-distribution tokens, with no competing answer and no semantic overlap with the query. Such noise pervades retrieval-augmented, tool-using, and long-context deployments, yet the failure lacked a mechanistic account. The paper traces the corruption to the Intrusion Pathway: MLPs enrich both query-subject and irrelevant-token representations, parroting heads carry prefix-token content to the prediction position, and relational readers largely avoid unrelated sources — yet preserved subject enrichment and selective reading do not prevent intrusion in the broader computation. The interference localizes partly to a sparse set of attention heads, the "intrusion heads," whose prefix-derived writes promote distractor-related content, while their reduced support for the correct answer arises primarily from weaker non-prefix contributions rather than direct suppression by the prefix.

**Key numbers:** Replacing the corrupted last-token residual with its clean counterpart (an oracle probe requiring a matched clean forward pass) recovers 97.6% on average of the distractor-induced drop across four downstream tasks; a deployable mask-level knockout of about ten heads — roughly 1% of the model's attention heads — recovers 57% at bounded cost to helpful context.
Source: https://arxiv.org/abs/2611.07778

#### Interactive Backdoor Attacks in LLM-Based Proactive Dialogue Systems
**arXiv:** 2611.06969 | **Category:** cs.CL | **Section:** New submissions
LLM-based proactive dialogue systems provide goal-directed support through sustained interaction, and fine-tuning their underlying models on externally supplied dialogue data introduces backdoor risk. Existing LLM backdoor work focuses on eliciting an attacker-specified response at trigger activation; this paper presents an interactive backdoor attack framework using training-data poisoning to steer post-trigger, multi-turn interactions toward an attacker-specified objective. Poisoned fine-tuning dialogues implant a trigger-conditioned guidance-policy bias that ordinary user utterances can activate, without deployment-time prompt modification or further attacker intervention. Three complementary attacks are instantiated under progressively expanded post-trigger interaction settings: Direct Attack (immediate response deviation at trigger activation, retaining the conventional trigger–response setting), Constrained Progressive Attack (progressively advancing the objective along a predefined multi-turn trajectory), and Unconstrained Progressive Attack (target-directed steering in open-ended interactions with varied user continuations).

**Key numbers:** No quantitative claims in abstract: experiments on two LLM backbones and two dialogue datasets show all three attacks effectively achieve their objectives under their respective interaction settings while largely preserving normal utility; separate defense evaluations show tested training-data filters retain nearly all poisoned dialogues, while three post-admission baselines leave substantial residual attack-specific success.
Source: https://arxiv.org/abs/2611.06969

#### Redacting Personal Data: A Speed and Accuracy Comparison of Regex, Presidio and Hybrid Designs
**arXiv:** 2611.07633 | **Category:** cs.AI | **Section:** New submissions
Enterprise projects routinely pass free text to LLMs, and that text often contains PII such as names, phone numbers, email addresses, home addresses, and dates of birth — once a prompt is sent, the data is copied into provider systems, application logs, and observability traces. The paper compares four redaction designs: a pure regular-expression redactor, Microsoft Presidio on a spaCy model, a hybrid where Presidio finds only person names while regex handles structured identifiers, and a fast hybrid calling spaCy's named-entity component directly. All four share a known-entity rule (removing the person the system already knows it is handling) and a consistent placeholder scheme so the LLM can still distinguish one person from another after redaction. Evaluation uses a sample workflow, ProfileAssist, which turns resumes into structured profiles.

**Key numbers:** 100 synthetic resumes, 523 characters on average, with 900 PII values and 600 business terms that must survive; regex ran at a 0.20 ms median but caught only 88.9% of PII; Presidio, hybrid, and fast hybrid each caught 100% of PII and kept 100% of business terms at median latencies of 37.59 ms, 30.23 ms, and 13.48 ms; against a 9,120 ms median LLM call, even the slowest option adds only 0.41% to the request; the fast hybrid is recommended as default with regex as a safety net.
Source: https://arxiv.org/abs/2611.07633

#### Signals, Evidence, and Context: User Scrutiny in Real-World LLM Conversations
**arXiv:** 2611.08232 | **Category:** cs.AI | **Section:** New submissions
LLMs often present synthesized answers without making supporting evidence easy to inspect. The study examines how features of answers relate to users' subsequent accepting, checking, and challenging in 489,283 assistant–user response pairs from ShareChat and WildChat. Broad attribution language appears in 31.9% of qualifying responses, versus explicit URLs in 1.33%, revealing a gap between claims of grounding and preserved inspectable support. Attribution, uncertainty, and other response cues generally accompany both checking and challenging; only uncertainty shows a small statistically distinguishable pooled association favoring checking.

**Key numbers:** 489,283 assistant–user response pairs from ShareChat and WildChat; broad attribution language in 31.9% of qualifying responses versus explicit URLs in 1.33%; within Technical Help, uncertainty favors checking relative to challenging, while refusals and reasoning traces favor challenging in Seeking Information; scrutiny is concentrated in some conversations, with apparent turn-to-turn persistence shrinking once conversation-level differences and response ordering are examined separately.
Source: https://arxiv.org/abs/2611.08232

## Agents, tools & orchestration

#### Learning Multi-Agent Orchestration: Higher-Order Interactions in Policy Improvement
**arXiv:** 2611.07495 | **Category:** cs.LG | **Section:** New submissions
Learned orchestration has emerged as a promising paradigm for LLM-based multi-agent systems, where a central orchestrator selects agents and controls the information they receive throughout a task. Existing methods train the orchestrator by crediting each decision with its own advantage, implicitly assuming other decisions in the episode stay fixed — an assumption that fails in orchestration, where each decision's contribution depends on preceding decisions, so the gain of a joint update is not the sum of its per-decision effects. IAPO (interaction-aware policy optimization) explicitly accounts for these interactions: it exactly decomposes the performance difference between two policies into the effects of individual decisions and their interactions, which the authors prove can account for half of the attainable gain, then optimizes both from sampled trajectories while certifying every update is an improvement.

**Key numbers:** On long-input versions of GSM8K, MATH, DROP, MBPP, and HumanEval, against fifteen published multi-agent and workflow-search systems on the same 7B executor, IAPO's deployed plans reach the strongest system's accuracy with fewer tokens; removing the interaction term costs 7 to 17 points of accuracy on code; the interaction term can account for half of the attainable gain.
Source: https://arxiv.org/abs/2611.07495

#### Binding Paraphrased Instructions to Encountered Objects in sLLM Agents under Partial Observability
**arXiv:** 2611.07599 | **Category:** cs.LG | **Section:** New submissions
Reliable LLM agent deployment requires grounding diverse user expressions in the environment. Although RL-finetuned smaller LLMs (sLLMs) rival larger prompted LLMs on embodied tasks, their robustness to instruction paraphrases was unclear. The paper introduces ALFWorld-Para to evaluate this robustness under controlled paraphrases, finding 21–52% declines in success rate (SR), predominantly driven by object synonyms. Despite retaining knowledge of synonym referents, agents often fail to take the corresponding objects even after observing them, exposing a gap between referential knowledge and object binding; partial observability complicates binding further because referents may remain unseen or have already been encountered under different labels. BINDIntent is a training-free framework that probabilistically binds referring expressions to observed labels using semantic proximity and estimated persistence against unseen candidates.

**Key numbers:** ALFWorld-Para reveals 21–52% declines in success rates under controlled paraphrases, predominantly driven by object synonyms; BINDIntent improves synonym-paraphrase success of RL-finetuned sLLMs by 17.5–49.1 percentage points with only 0.4 ms of CPU overhead per step, without additional training or LLM calls; raises GiGPO-7B's overall SR from 61.8% to 77.4%, surpassing a prompted 24B LLM.
Source: https://arxiv.org/abs/2611.07599

#### PCBRouteAgent: How Close Are LLM Agents to Becoming PCB Routing Engineers?
**arXiv:** 2611.08175 | **Category:** cs.AI | **Section:** New submissions
Automating printed circuit board routing requires coordinating board-level connectivity decisions with geometric execution under strict design rules, and although recent agents can interact with native routing tools, reliable routing on complex boards remains challenging. PCBRouteAgent is a multimodal PCB routing agent inspired by how human engineers coordinate global strategy with local execution: a Global Routing Planner combines board images with structured electrical and geometric information to specify connection topology, routing order, corridors, and layer transitions, while a Detailed Routing Executor realizes these guides through KiCad's native routing engine with bounded local recovery. Unresolved failures return as structured feedback, enabling targeted guide revisions while preserving accepted routes.

**Key numbers:** Evaluated on 247 synthetic and real-world boards from four PCBWorld-Bench test splits; clean-pass rates of 100%, 94.9%, 100%, and 40% on D2, D3-A, D3-B, and D3-C respectively; on the three real-world subsets, PCBRouteAgent outperforms the best evaluated baseline in clean-pass rate by 13.9, 36, and 10 percentage points respectively.
Source: https://arxiv.org/abs/2611.08175

#### KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks
**arXiv:** 2611.06972 | **Category:** cs.AI | **Section:** New submissions
Liability adjudication tasks (e.g. legal charge determination) require analyzing event descriptions against domain-specific skills to decide whether a party should bear liability. LLMs show promise here by leveraging executable skills for interpretable reasoning, but existing approaches face three limitations: skill libraries become stale as real-world scenarios evolve, skill descriptions suffer a semantic execution gap where LLMs deviate from intended expert logic, and growing skill collections exceed context budgets causing critical skill omission. KDASO (Knowledge-Data Dual-Driven Automated Skill Optimization) continuously evolves a skill library through neighborhood-conditioned induction from recent adjudication data, execution-aligned refinement based on LLM trajectory analysis, and context-budgeted routing for scalable skill selection.

**Key numbers:** Experiments across ride-hailing adjudication, legal liability determination, and logical reasoning judgment show KDASO significantly outperforms current general-purpose and domain-specific baselines; KDASO achieves an 8.96% improvement when transferring skills to concept-similar scenarios and maintains consistent performance gains through continuous optimization.
Source: https://arxiv.org/abs/2611.06972

#### FedReason: Large Language Models as Weight-Space Meta-Aggregators for Heterogeneous Federated Learning
**arXiv:** 2611.08383 | **Category:** cs.AI | **Section:** Cross submissions
Federated learning servers combine client models with a fixed aggregation rule, and each rule in common use is designed for one kind of heterogeneity. FedReason asks whether an LLM that inspects client models can choose the rule itself, without any server-side training. The LLM is called every ten rounds, analyzes weights by running code in a restricted server-side sandbox, sees only printed results, may score a few candidates on a 500-image proxy set, and submits a short Python aggregation program; the server applies that program until the next call and falls back to FedAvg whenever the output is invalid. Full weight tensors never leave the server.

**Key numbers:** Evaluated with Claude Opus 5.5 on CIFAR-10 and CIFAR-100 with ResNet-18 under Dirichlet label skew, width-heterogeneous sub-models, and Byzantine clients, in 168 runs against 14 baselines; across 12 paired label-skew runs it beat FedAvg by 1.26 percentage points on average (10 wins) and a control spending the same per-round proxy budget on choosing among standard rules by 1.08 points; it was the strongest server-side rule on CIFAR-100 but did not beat SCAFFOLD, which changes client training; with three of ten clients malicious it excluded all sign-flipping clients from the first round and stayed about one point below FLTrust without training a root model; without proxy feedback accuracy fell from 73.8% to 38.8% in one seed; a 60-round run cost 0.79 USD in API fees on average.
Source: https://arxiv.org/abs/2611.08383

#### Create Your Own Work Stack: Deploying Self-hosted AI and Tooling in a Tech Startup
**arXiv:** 2611.08116 | **Category:** cs.AI | **Section:** New submissions
Self-hosting AI is often presented as a way to cut inference costs and increase control, but deployment brings its own costs. This is an experience report on deploying a hybrid AI stack at Grayhat Developers, a small software company with an AI-intensive development workflow. The motivation was to counter growing commercial AI cost — Claude/Codex incurred approximately $325 per month with more than 25.93 billion recorded tokens — but experiments with local open-source models as replacements for commercial coding agents showed their performance and inference speed were insufficient, so the team adopted a hybrid approach: commercial agents handle complex tasks while local models handle lower-complexity tasks, organizational information retrieval, and synchronization with self-hosted tools including Outline, Plane, and ERPNext.

**Key numbers:** Claude/Codex cost approximately $325 per month with more than 25.93 billion recorded tokens; approximately 30–40% of the commercial AI workload was associated with context transfer, documentation synchronization, task management, and related operational coordination; moving this work to local models could handle an estimated ~90% of that coordination workload without commercial inference, corresponding to an estimated 27–36% reduction in overall commercial-AI workload or cost-equivalent usage; the first internal deployment failed to achieve adoption because of UX friction, and replacing it with a centrally configured deployment substantially improved feedback and adoption.
Source: https://arxiv.org/abs/2611.08116

## Evaluation, benchmarks & judging

#### PromptOps: Iterative Prompt Optimization for LLM-as-a-Judge Systems
**arXiv:** 2611.07123 | **Category:** cs.LG | **Section:** Cross submissions
LLMs are increasingly used as automated judges for chatbots and other AI systems, but in deployment their agreement with the intended human evaluation policy may degrade as user interactions and score distributions change. Existing automatic prompt optimization methods are studied mainly as one-shot procedures on static development sets, offering limited guidance for maintaining LLM judges over time. The paper frames this as judge drift and introduces PromptOps, a closed-loop framework for monitoring and iteratively recalibrating LLM-as-a-Judge systems. PromptOps separates four operational decisions — when to optimize, which optimization procedure to apply, which feedback records to use, and how to update the judge prompt — instantiated with five prompt optimization methods: GEPA, SIMBA, Rubric Synthesis, and exemplar selection using either simulated annealing or a Tree-structured Parzen Estimator.

**Key numbers:** No quantitative claims in abstract: iterative prompt optimization can recalibrate LLM judges and recover performance after controlled shifts in the reference-score distribution, but effective maintenance is inherently context-dependent — neither optimization algorithm choice nor update timing generalizes universally across settings.
Source: https://arxiv.org/abs/2611.07123

#### Adapting LLM Judges to Observed Human Annotation Policy through Soft Prompt Tuning
**arXiv:** 2611.07126 | **Category:** cs.CL | **Section:** New submissions
LLMs are increasingly employed as automated judges for chatbot responses. Proprietary models can achieve high agreement with human annotators but are costly and hard to deploy, while lightweight open-source LLM judges are attractive but typically exhibit lower agreement with human ratings. The paper investigates whether soft prompt tuning can align open-source LLM judges more closely with human annotation policy, training soft prompts on the FairBotBench benchmark and evaluating adapted judges across bias, toxicity, and personalization. Hybrid soft-prompt tuning, combining textual prompts with learned continuous prompt embeddings, consistently improves agreement with human annotations over the corresponding untuned baselines.

**Key numbers:** Soft prompts trained on the FairBotBench benchmark; evaluation across three dimensions (bias, toxicity, personalization); for Qwen 3.5 9B, the adapted judges surpass both hosted reference judges across all three evaluation dimensions.
Source: https://arxiv.org/abs/2611.07126

#### SeVerus: Context-Aware, Gamified Benchmarking for Rust Verification
**arXiv:** 2611.07194 | **Category:** cs.AI | **Section:** Cross submissions
Coding agents achieve high success rates on existing benchmarks for Verus, a verifier for Rust programs, but those benchmarks typically provide the auxiliary lemmas needed to complete a proof — in practice such lemmas must be discovered and proved. SEVERUS is a context-aware technique for generating Verus benchmarks that organizes verification tasks into quests, each divided into levels in a gamified manner: using original proof dependencies in verified projects, it constructs one quest per verification target and progressively removes proof context to create levels ranging from completing only a single missing lemma to proving the target without any supporting lemmas. An independent checker rejects changes to executable code, weakened specifications, and unsound proof constructs, and a noisy binary search estimates the highest level an agent can solve reliably.

**Key numbers:** Applied to six open-source Verus projects, SEVERUS generates 819 quests comprising 10,095 levels; experiments with Codex using GPT-6 Sol and GPT-6 Luna, and with Claude Code using Sonnet 4.6, show success decreases and cost increases as proof context is withdrawn; the strongest agent solves the final level of 52 of 60 sampled quests, yet can only reliably solve 35% of their levels, with failures concentrated in longer quests; successful GPT-6 Sol proofs rarely reproduce the withheld lemmas, instead using alternative proof decompositions.
Source: https://arxiv.org/abs/2611.07194

## Data, distillation & training

#### Automated Video-to-QA Pipeline: End-to-End Question Generation and Verification Using Large Language Models
**arXiv:** 2611.07755 | **Category:** cs.CL | **Section:** New submissions
The exponential growth of educational and informational video content creates a challenge for efficient knowledge retrieval and assessment. The paper proposes an end-to-end automated pipeline for extracting structured summaries and generating high-fidelity QA pairs from video streams, integrating a cascade of models: FFmpeg for audio extraction, Whisper for ASR to generate transcripts, and — because of LLM token constraints — transcript segmentation and summarization using Facebook's BART. The key innovation is a Self-Verification and Fine-Tuning Loop: meta-llama/Llama-3.1-8B-Instruct generates candidate QA pairs from transcript chunks, which are fed back into the model to assess relevance and importance, with only verified pairs retained to construct a synthetic dataset that is then used to fine-tune the Llama model via Low-Rank Adaptation (LoRA).

**Key numbers:** No quantitative claims in abstract: pipeline components are FFmpeg audio extraction, Whisper ASR, BART segmentation/summarization, and meta-llama/Llama-3.1-8B-Instruct for candidate QA generation and self-verification, with LoRA fine-tuning on the resulting synthetic dataset; the model is downloadable from Kaggle with code on GitHub.
Source: https://arxiv.org/abs/2611.07755

## Multimodal & domain-specific

#### RM-VLM: From Natural-Language Task Descriptions to Vision-Grounded Reward Machines
**arXiv:** 2611.08308 | **Category:** cs.LG | **Section:** Cross submissions
Reward machines (RMs) are a reward formulation in reinforcement learning for non-Markovian tasks where credit assignment depends on history; by representing reward functions as automata they expose the task's temporal structure and allow such rewards to be handled within a Markovian framework. However, RMs assume a labelling function — a proposition-grounding oracle for observations — which must be manually engineered per environment, limiting wider applicability. RM-VLM removes that limitation: an LLM generates an RM from a natural-language task description and a VLM acts as the labelling function, grounding the RM's propositions over image-based observations during RM-guided policy learning. A VLM-based value function estimator assesses the agent's progress towards each RM transition to derive a dense reward signal.

**Key numbers:** No quantitative claims in abstract: evaluated on three domains — non-Markovian grid-world navigation, robotic manipulation, and 3D object collection — with RM-VLM consistently achieving higher task success rates than existing VLM-based reward methods across all tested domains.
Source: https://arxiv.org/abs/2611.08308

#### Do Recommenders Need to Think in Words? Latent Reasoning for Efficient LLM-Based Recommendation
**arXiv:** 2611.07866 | **Category:** cs.CL | **Section:** New submissions
LLM-based recommender systems increasingly generate chain-of-thought text before each item prediction to activate reasoning capacity, costing tens to hundreds of extra tokens per recommendation at inference. The paper asks whether inference-time reasoning artifacts (textual or latent) can be replaced by training-time supervision alone without loss of accuracy. LatentRec replaces inference-time reasoning artifacts with training-time per-step head supervision and has three components: a 2.5M-parameter Continuous Thought Module that iterates K latent reasoning steps over the LLM's hidden state during training; Soft Token Selection bridging the ~14x norm gap between hidden states and input embeddings; and a Per-step Reasoning Loss (PRL) supervising every intermediate state through the LLM's prediction head against the first token of the target Semantic ID. The trained LLM retains this accuracy without the module at inference, so the module can be discarded at deployment.

**Key numbers:** On three Amazon benchmarks, LatentRec improves HR@10 by 4.0–5.0% (relative) over a CoT-distilled baseline at 18.3x lower latency (batch=1); the Continuous Thought Module has 2.5M parameters and iterates K latent reasoning steps; Soft Token Selection bridges a ~14x norm gap between hidden states and input embeddings; per-step training supervision consistently improves accuracy across all three datasets.
Source: https://arxiv.org/abs/2611.07866
