# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 9, 2026
**Last Fact-Check:** 2026-10-29 (21:45 UTC) — next fact-check run should cover the 2026-10-30 through 2026-11-09 sections
**Verification Status:** ⚠️ 15 claims checked in the 2026-10-28 / 2026-10-29 sections: 14 verified, 1 partially verified (BenchLeader index score drops unconfirmed / stale)
**Verification Status:** ✅ Cumulative tracking active
**Working Directory:** shared-workspace/research/llm-papers-arxiv

**Insight count:** 1713 total (+56 new on 2026-11-09, including 26 papers carried over from the crashed 2026-11-08 run)
**Active window:** 2026-11-08 and 2026-11-09 only. The 2026-11-07 section was archived this run to `archive/cumulative_findings_2026-11.md` (and to `archive/cumulative_findings_pre_2026-11-09.md`) to hold the active file under ~60KB; it remains fully recoverable there. Unabridged Nov 9 detail lives in `findings_nov09_task1.md` (43.4 KB) and `findings_nov09_task2.md` (39.5 KB); the sections below are condensed to fit the size budget, with every source URL retained.

## 2026-11-08 (Sunday Evening) — recovered carry-over from the crashed run

**Recovery note:** the 2026-11-08 run crashed before merging anything into this file. Its 26 completed paper write-ups (`findings_nov08_task1.md`, 40.1 KB, from the 2026-11-06 arXiv batch) were verified as **not present** anywhere in `cumulative_findings.md`, `daily_reports/`, or `archive/`, and are committed here for the first time. The matching Task 2 file (`findings_nov08_task2.md`) never existed; its community/leaderboard content was re-derived this run from the cached artefacts in `tmp/nov08/t2/` and is recorded in the 2026-11-09 section below, under "Recovery note — the 2026-11-07 → 2026-11-08 window".

### Efficiency, attention & inference systems

**Recursive Sparse Attention: Million-Token Length Extrapolation at Logarithmic Cost** — `2611.07232` · cs.CL · New submissions
At context lengths of about 1M tokens, dense attention is expensive in both prefill and decoding, and training long-context models needs long documents tha…
**Key numbers:** O(L) selection cost for prior sparse methods vs. O(log L) for RecSA; initialized from Qwen3-4B; trained on 0.62B tokens at 32K training length; beats all baselines on RULER at…
Source: https://arxiv.org/abs/2611.07232

**Beyond K/V Caches: Cross-Model State Handoff in Hybrid Linear-Attention LLMs** — `2611.08133` · cs.CL · New submissions
Production deployments mix models for cost/quality through cascading, routing, and switching mid-conversation, so context accumulates across turns and each…
**Key numbers:** Across five benchmarks, Qwen3.5 4B→27B achieves mean task retention of 89.88% and 9B→27B achieves 94.11%; with source caches already available, separate timing on synthetic 16…
Source: https://arxiv.org/abs/2611.08133

**Gabor Gabor: E-Gaborformer, a Strictly Causal Speech Recognizer with Gabor-Dictionary Convolutions and Delta-Rule Memory** — `2611.08092` · cs.CL · Cross submissions
Real-time voice agents need a speech recognizer that never waits on future audio and whose per-call memory does not grow with call length. E-Gaborformer is…
**Key numbers:** Constant streaming state of about 19 MB per call at production scale, vs. over 1 GB accumulated after ten minutes by a causal-attention encoder of the same size; 3:1 ratio of…
Source: https://arxiv.org/abs/2611.08092

**Latency-Aware Adaptive Best-of-N** — `2611.07453` · cs.CL · New submissions
Test-time compute improves responses by spending extra inference compute, and the right amount depends on the prompt. Adaptive TTC methods usually allocate…
**Key numbers:** Evaluated by simulation on a preference-based alignment benchmark with a generations-equivalent cost metric (generations plus latency, converted to generations); the method re…
Source: https://arxiv.org/abs/2611.07453

**Server-Side Sparse Assignment for Federated Mixture-of-Experts** — `2611.07093` · cs.LG · New submissions
Federated learning enables collaborative LLM fine-tuning on edge devices with privacy, but clients are heterogeneous in data distribution and in memory/com…
**Key numbers:** S3-MoE recovers task-dependent client–expert preferences and reduces conflicts from correlated expert selection across clients; versus Full-20 FedAvg (all 20 experts available…
Source: https://arxiv.org/abs/2611.07093


### Quantization & compression

**DictLLM: Post-training Compression of Large Language Model with Dictionary Kernels** — `2611.08082` · cs.LG · Cross submissions
Efficient mobile deployment of LLMs requires balancing performance against compute and memory constraints, and post-training compression manages this trade…
**Key numbers:** DictLLM consistently outperforms existing post-training low-rank compression methods on language modeling and zero-shot reasoning benchmarks and pushes the Pareto frontier bet…
Source: https://arxiv.org/abs/2611.08082

**StrataFlux: Memory-Hierarchy-Native Low-Bit LLM Inference** — `2611.08363` · cs.LG · New submissions
Quantization cuts LLM inference memory and bandwidth but can degrade accuracy, and offloading higher-precision data instead stalls generation. StrataFlux c…
**Key numbers:** For 2-bit Llama-3.1-8B-Instruct weights, reduces WikiText-2 perplexity from 9.46 to 8.40 while maintaining 95.4% of the quantized base's throughput on RTX 5090; with 2-bit wei…
Source: https://arxiv.org/abs/2611.08363


### Reasoning, test-time compute & verification

**WeightLoop: Weight-Space Programming with Experimental Feedback** — `2611.07319` · cs.LG · New submissions
Weight-space programming (WSP) shows language models can reason about and rewrite neural network weights, while recursive self-improvement (RSI) motivates…
**Key numbers:** In offline replay, targeted edits improve mean ranking utility in seven of eight endpoint-budget settings (all eight versus random edits) and improve mean final discovery acro…
Source: https://arxiv.org/abs/2611.07319

**Teaching Agents the "Principle", Not the "Reward"** — `2611.07130` · cs.LG · New submissions
Reinforcement learning performs strongly on many tasks, but in more complex tasks agents still struggle to learn good, generalizable policies even with car…
**Key numbers:** No quantitative claims in abstract beyond qualitative findings: PPL agents learn good, generalizable policies without any reward; taught only simple heuristic principles, PPL…
Source: https://arxiv.org/abs/2611.07130

**SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization** — `2611.08483` · cs.AI · New submissions
LLM-guided evolutionary search uses AI agents to improve programs for mathematical and computational problems by iteratively refining solutions and combini…
**Key numbers:** On 21 problems in mathematical discovery and scientific computing, SwarmEvolve gets the highest average score and needs a median of only 3 to 8 minutes to reach the best score…
Source: https://arxiv.org/abs/2611.08483


### Alignment, safety & red-teaming

**The Intrusion Pathway: How Non-Evidential Context Degrades Language Model Performance** — `2611.07778` · cs.AI · New submissions
Language models lose accuracy when a prompt contains non-evidential context — irrelevant statements from unrelated domains or random off-distribution token…
**Key numbers:** Replacing the corrupted last-token residual with its clean counterpart (an oracle probe requiring a matched clean forward pass) recovers 97.6% on average of the distractor-ind…
Source: https://arxiv.org/abs/2611.07778

**Interactive Backdoor Attacks in LLM-Based Proactive Dialogue Systems** — `2611.06969` · cs.CL · New submissions
LLM-based proactive dialogue systems provide goal-directed support through sustained interaction, and fine-tuning their underlying models on externally sup…
**Key numbers:** No quantitative claims in abstract: experiments on two LLM backbones and two dialogue datasets show all three attacks effectively achieve their objectives under their respecti…
Source: https://arxiv.org/abs/2611.06969

**Redacting Personal Data: A Speed and Accuracy Comparison of Regex, Presidio and Hybrid Designs** — `2611.07633` · cs.AI · New submissions
Enterprise projects routinely pass free text to LLMs, and that text often contains PII such as names, phone numbers, email addresses, home addresses, and d…
**Key numbers:** 100 synthetic resumes, 523 characters on average, with 900 PII values and 600 business terms that must survive; regex ran at a 0.20 ms median but caught only 88.9% of PII; Pre…
Source: https://arxiv.org/abs/2611.07633

**Signals, Evidence, and Context: User Scrutiny in Real-World LLM Conversations** — `2611.08232` · cs.AI · New submissions
LLMs often present synthesized answers without making supporting evidence easy to inspect. The study examines how features of answers relate to users' subs…
**Key numbers:** 489,283 assistant–user response pairs from ShareChat and WildChat; broad attribution language in 31.9% of qualifying responses versus explicit URLs in 1.33%; within Technical…
Source: https://arxiv.org/abs/2611.08232


### Agents, tools & orchestration

**Learning Multi-Agent Orchestration: Higher-Order Interactions in Policy Improvement** — `2611.07495` · cs.LG · New submissions
Learned orchestration has emerged as a promising paradigm for LLM-based multi-agent systems, where a central orchestrator selects agents and controls the i…
**Key numbers:** On long-input versions of GSM8K, MATH, DROP, MBPP, and HumanEval, against fifteen published multi-agent and workflow-search systems on the same 7B executor, IAPO's deployed pl…
Source: https://arxiv.org/abs/2611.07495

**Binding Paraphrased Instructions to Encountered Objects in sLLM Agents under Partial Observability** — `2611.07599` · cs.LG · New submissions
Reliable LLM agent deployment requires grounding diverse user expressions in the environment. Although RL-finetuned smaller LLMs (sLLMs) rival larger promp…
**Key numbers:** ALFWorld-Para reveals 21–52% declines in success rates under controlled paraphrases, predominantly driven by object synonyms; BINDIntent improves synonym-paraphrase success of…
Source: https://arxiv.org/abs/2611.07599

**PCBRouteAgent: How Close Are LLM Agents to Becoming PCB Routing Engineers?** — `2611.08175` · cs.AI · New submissions
Automating printed circuit board routing requires coordinating board-level connectivity decisions with geometric execution under strict design rules, and a…
**Key numbers:** Evaluated on 247 synthetic and real-world boards from four PCBWorld-Bench test splits; clean-pass rates of 100%, 94.9%, 100%, and 40% on D2, D3-A, D3-B, and D3-C respectively;…
Source: https://arxiv.org/abs/2611.08175

**KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks** — `2611.06972` · cs.AI · New submissions
Liability adjudication tasks (e.g. legal charge determination) require analyzing event descriptions against domain-specific skills to decide whether a part…
**Key numbers:** Experiments across ride-hailing adjudication, legal liability determination, and logical reasoning judgment show KDASO significantly outperforms current general-purpose and do…
Source: https://arxiv.org/abs/2611.06972

**FedReason: Large Language Models as Weight-Space Meta-Aggregators for Heterogeneous Federated Learning** — `2611.08383` · cs.AI · Cross submissions
Federated learning servers combine client models with a fixed aggregation rule, and each rule in common use is designed for one kind of heterogeneity. FedR…
**Key numbers:** Evaluated with Claude Opus 5.5 on CIFAR-10 and CIFAR-100 with ResNet-18 under Dirichlet label skew, width-heterogeneous sub-models, and Byzantine clients, in 168 runs against…
Source: https://arxiv.org/abs/2611.08383

**Create Your Own Work Stack: Deploying Self-hosted AI and Tooling in a Tech Startup** — `2611.08116` · cs.AI · New submissions
Self-hosting AI is often presented as a way to cut inference costs and increase control, but deployment brings its own costs. This is an experience report…
**Key numbers:** Claude/Codex cost approximately $325 per month with more than 25.93 billion recorded tokens; approximately 30–40% of the commercial AI workload was associated with context tra…
Source: https://arxiv.org/abs/2611.08116


### Evaluation, benchmarks & judging

**PromptOps: Iterative Prompt Optimization for LLM-as-a-Judge Systems** — `2611.07123` · cs.LG · Cross submissions
LLMs are increasingly used as automated judges for chatbots and other AI systems, but in deployment their agreement with the intended human evaluation poli…
**Key numbers:** No quantitative claims in abstract: iterative prompt optimization can recalibrate LLM judges and recover performance after controlled shifts in the reference-score distributio…
Source: https://arxiv.org/abs/2611.07123

**Adapting LLM Judges to Observed Human Annotation Policy through Soft Prompt Tuning** — `2611.07126` · cs.CL · New submissions
LLMs are increasingly employed as automated judges for chatbot responses. Proprietary models can achieve high agreement with human annotators but are costl…
**Key numbers:** Soft prompts trained on the FairBotBench benchmark; evaluation across three dimensions (bias, toxicity, personalization); for Qwen 3.5 9B, the adapted judges surpass both host…
Source: https://arxiv.org/abs/2611.07126

**SeVerus: Context-Aware, Gamified Benchmarking for Rust Verification** — `2611.07194` · cs.AI · Cross submissions
Coding agents achieve high success rates on existing benchmarks for Verus, a verifier for Rust programs, but those benchmarks typically provide the auxilia…
**Key numbers:** Applied to six open-source Verus projects, SEVERUS generates 819 quests comprising 10,095 levels; experiments with Codex using GPT-6 Sol and GPT-6 Luna, and with Claude Code u…
Source: https://arxiv.org/abs/2611.07194


### Data, distillation & training

**Automated Video-to-QA Pipeline: End-to-End Question Generation and Verification Using Large Language Models** — `2611.07755` · cs.CL · New submissions
The exponential growth of educational and informational video content creates a challenge for efficient knowledge retrieval and assessment. The paper propo…
**Key numbers:** No quantitative claims in abstract: pipeline components are FFmpeg audio extraction, Whisper ASR, BART segmentation/summarization, and meta-llama/Llama-3.1-8B-Instruct for can…
Source: https://arxiv.org/abs/2611.07755


### Multimodal & domain-specific

**RM-VLM: From Natural-Language Task Descriptions to Vision-Grounded Reward Machines** — `2611.08308` · cs.LG · Cross submissions
Reward machines (RMs) are a reward formulation in reinforcement learning for non-Markovian tasks where credit assignment depends on history; by representin…
**Key numbers:** No quantitative claims in abstract: evaluated on three domains — non-Markovian grid-world navigation, robotic manipulation, and 3D object collection — with RM-VLM consistently…
Source: https://arxiv.org/abs/2611.08308

**Do Recommenders Need to Think in Words? Latent Reasoning for Efficient LLM-Based Recommendation** — `2611.07866` · cs.CL · New submissions
LLM-based recommender systems increasingly generate chain-of-thought text before each item prediction to activate reasoning capacity, costing tens to hundr…
**Key numbers:** On three Amazon benchmarks, LatentRec improves HR@10 by 4.0–5.0% (relative) over a CoT-distilled baseline at 18.3x lower latency (batch=1); the Continuous Thought Module has 2…
Source: https://arxiv.org/abs/2611.07866


## 2026-11-09 (Monday Evening)

**Batch:** 389 papers (ids 2611.08490–2611.09892; 220 new submissions, 169 cross submissions) harvested from the cs.CL / cs.LG / cs.AI listings, screened to 70 keyword-selected candidates, of which the 30 most significant for LLM research are written up below. Papers peripheral to LLM work (PDE/operator learning, nuclear-reactor modelling, molecule generation, signal decomposition, bolted-joint corrosion, clinical-imaging pipelines, cooperative-perception attacks) were dropped regardless of keyword score. All quantitative claims are self-reported by the paper authors and taken from the abstracts; nothing here was independently verified. Task 1 made **no web requests** — all abstracts come from the locally harvested `tmp/nov09/batch2611.json`.

### Efficiency, quantization & inference systems

**FOSCAR: Accelerating Decode Attention over 2- and 4-Bit KV Caches through Affine Folding** — `2611.09722` · cs.AI · New submissions
Packing the KV cache into 2-bit or 4-bit integers cuts memory traffic but does not by itself buy latency: existing 2-bit fused kernels reach under 31% (H10…
**Key numbers:** H100: geo-mean speedups of 3.36× (INT2) and 2.83× (INT4) over FlashInfer BF16, and 2.03× / 1.71× over TensorRT-LLM FP8. B200: 2.67× / 2.30× over FlashInfer BF16, 1.48× / 1.28×…
Source: https://arxiv.org/abs/2611.09722

**BitDecoding-FP4: Native FP4 KV Cache Decoding via Algorithm-System Co-Design** — `2611.09825` · cs.CL · Cross submissions
The KV cache dominates memory and bandwidth in long-context serving, and 4-bit microscaling formats (NVFP4, MXFP4) can run attention on FP4 Tensor Cores —…
**Key numbers:** Query logit error cut from 60% to 1% via dual-residual query quantization. Accuracy stays within 0.5 points of BF16 KV with NVFP4 (within 1 point with MXFP4), and tracks BF16…
Source: https://arxiv.org/abs/2611.09825

**MINE: Entropy-coded Memory-efficient Inference for Large Language Models** — `2611.09424` · cs.LG · New submissions
MINE targets single-stream LLM inference, where decoding is strongly memory-bound because every weight must be streamed once per generated token and reques…
**Key numbers:** On Llama 3.1 8B Instruct with a 2.1-bit EntQuant checkpoint, speedups of 2.52× and 1.48× over the fastest baseline on an RTX 4060 Ti and an RTX 5090 respectively, at effective…
Source: https://arxiv.org/abs/2611.09424

**ResQAdam: Residual-Preserving Adaptive Optimization for Memory-Efficient Quantization Aware Training** — `2611.08924` · cs.CL · Cross submissions
Quantization-aware training is the most reliable route to accurate low-bit LLMs, but AdamW keeps two dense FP32 states per weight matrix, and the authors f…
**Key numbers:** Optimizer-state memory reduced by 71%–74% relative to AdamW; stays close to AdamW in most settings; training throughput reduced by less than 2%. Weights quantized down to 2 bi…
Source: https://arxiv.org/abs/2611.08924

**CodeQuant2: Enhanced Outlier Mitigation and Adaptive Clustering for Low-Precision LRMs** — `2611.09868` · cs.CL · New submissions
Large reasoning models improve task performance by emitting longer intermediate traces, which raises inference cost and makes low-precision quantization at…
**Key numbers:** Up to 2.85× speedup over BF16, with substantial accuracy improvements on reasoning benchmarks (no absolute accuracy figures given in the abstract).…
Source: https://arxiv.org/abs/2611.09868

**CascadeRec: Deployed Adaptive LLM Compute Allocation for Multi-Tenant Content Recommendation** — `2611.08566` · cs.LG · Cross submissions
CascadeRec is a two-tier LLM reranking cascade deployed in production at a large financial-planning-and-analysis SaaS provider, serving content recommendat…
**Key numbers:** Inference cost reduced by about 10% versus uniform use of the expensive tier, with minimal latency impact and no quality regression observed over a production A/B run of over…
Source: https://arxiv.org/abs/2611.08566

**An Empirical Study of Issues in GPU Kernel Libraries for LLM Systems** — `2611.09280` · cs.AI · New submissions
LLM systems depend heavily on specialized GPU kernel libraries that implement attention, GEMM, quantization and low-precision operators while managing tens…
**Key numbers:** 300 issue reports analysed across 7 libraries; 60.33% of sampled issues originate in the Compiler and Build System or Runtime Environment dimensions, implying validation must…
Source: https://arxiv.org/abs/2611.09280


### Reasoning & test-time compute

**Test-Time Compute Scales Better with Parallel Agent Teams** — `2611.09798` · cs.AI · New submissions
Two common ways to spend test-time compute on agents both fail in different ways: best-of-N sampling over many independent agents saturates quickly, while…
**Key numbers:** With a 27B model and a 100-agent budget, parallel teams of ten beat parallel agents on 10 of 12 tasks, and beat one team of 100 on all four tasks where such large teams were r…
Source: https://arxiv.org/abs/2611.09798

**Learning When to Think: Dual-Reference Offline Optimization for Adaptive VLM Reasoning** — `2611.09154` · cs.AI · New submissions
Reasoning traces help vision-language models on complex multimodal tasks, but forcing every input through a long reasoning process causes overthinking and…
**Key numbers:** A 24.1% cross-benchmark slow ratio and a 2.90-fold end-to-end training speedup over reproduced GRPO; improvements in score–length trade-offs over the evaluated offline and onl…
Source: https://arxiv.org/abs/2611.09154

**On the Reliability of Majority-Vote Pseudo-Labels in Test-Time Reinforcement Learning** — `2611.09872` · cs.AI · New submissions
Test-time reinforcement learning adapts pretrained language models to unlabeled target-domain data using self-generated pseudo-labels, whose reliability is…
**Key numbers:** Matches or outperforms the strongest TTRL baseline in 24 of 30 settings, across six mathematical and knowledge-intensive reasoning benchmarks and five model backbones. No othe…
Source: https://arxiv.org/abs/2611.09872

**RuACT: Recovering Inactive Rubrics as Adaptive Critics and Teachers** — `2611.09597` · cs.CL · New submissions
Rubric-based RL extends verifiable rewards to open-ended tasks by scoring each response against query-specific rubrics. Under group-relative optimization,…
**Key numbers:** 60.88% of query–rubric observations inactive in Qwen3-4B medical training; unreachable rubric satisfaction rises from 1.13% to 91.25% when stated in the prompt; unguided recov…
Source: https://arxiv.org/abs/2611.09597


### Agents, agent memory & harnesses

**Flex-RSI: Benchmarking Recursive Self-Improvement of Frontier Agents** — `2611.08946` · cs.AI · New submissions
Agent performance depends not only on the model but on its harness — prompts, tools, memory and control loop — and most existing benchmarks keep the harnes…
**Key numbers:** No quantitative results in the abstract: the paper reports qualitative findings (self-improvement helps most when the agent builds its own solution; success/failure-only feedb…
Source: https://arxiv.org/abs/2611.08946

**BOXBOX: Recursive Harness Self-Improvement for Long-Running Performance Optimization** — `2611.09218` · cs.AI · Cross submissions
Automated harness optimization improves agents by learning from trajectories and task feedback, but existing offline methods use reference answers to optim…
**Key numbers:** BOXBOX reaches a Speedup@4h of 1.70×, compared with 1.54× for the strongest baseline, with more efficient use of task time and model cost.…
Source: https://arxiv.org/abs/2611.09218

**ENGRAM: From Agent Experience to Weights through Verified Consolidation** — `2611.09472` · cs.AI · New submissions
Language-model agents use experience through external retrieval and parameter learning, but consolidating stored experience into model weights requires dec…
**Key numbers:** No absolute numbers in the abstract: experiments across interactive and reasoning benchmarks show consistent gains over frozen-weight ETG controls, with ablations supporting d…
Source: https://arxiv.org/abs/2611.09472

**On Agentic Manipulation Policies** — `2611.09892` · cs.LG · Cross submissions
Recent robot manipulation work has focused on specialist policies trained on demonstrations; this paper argues that generalist AI models can control manipu…
**Key numbers:** On RoboLab-120, AMP1 reaches an 85.6% success rate zero-shot, versus 49.2% and 42.9% for leading VLA and WAM policies; zero-shot success in 104 of 108 real-world trials spanni…
Source: https://arxiv.org/abs/2611.09892

**HiMEM: Hippocampus-Inspired Memory Consolidation, Pruning, and Composition for Vision-Language-Action Models in 3D Scenes** — `2611.09355` · cs.AI · Cross submissions
Memory matters for long-horizon execution and cross-task generalization in vision-language-action models operating in complex 3D scenes, but existing VLA m…
**Key numbers:** Improves the average success rate of pi_0 from 91.88% to 98.20% on LIBERO.…
Source: https://arxiv.org/abs/2611.09355

**When Routine Operations Break Architectural Pattern Relationships in LLM Agent Harnesses** — `2611.09088` · cs.AI · Cross submissions
LLM agent harnesses distribute tool mediation, state management and safety guardrails across native services, independently written plugins and configurati…
**Key numbers:** No quantitative results in the abstract: the paper reports qualitative findings across five harnesses and fourteen plugins (a pattern relationship is a property of the running…
Source: https://arxiv.org/abs/2611.09088


### Evals & benchmarks

**Authorization Drift in LLM Agents: Evaluating Boundary Compliance in Multi-Step Tool Use** — `2611.09113` · cs.LG · Cross submissions
LLM agents can exceed their authorization boundaries while pursuing user goals without any adversary; the paper formalizes this as authorization drift acro…
**Key numbers:** 648 samples across 7 domains; 13 LLMs and 3 frameworks, giving 25,207 trajectories. Frontier-capable models show drift rates of 0.43–0.61, but 86.18% of tasks admit an observe…
Source: https://arxiv.org/abs/2611.09113

**ABHBench: Evaluating Moral Decision-Making of Foundation Models from an Agentic Perspective** — `2611.09326` · cs.CL · Cross submissions
Existing moral benchmarks largely ask models to judge human actions from third-person textual vignettes, leaving untested how models behave when they thems…
**Key numbers:** 12 foundation models evaluated; 75% of models shift significantly between a text-only abstraction and the matched multimodal DBH scenario. No other quantitative claims in the…
Source: https://arxiv.org/abs/2611.09326

**NormGym: Evaluating Normative Competence through Social Interaction** — `2611.08613` · cs.AI · New submissions
Existing evaluations largely test whether agents can recognize or apply norms they already know, not whether they can acquire previously unknown norms from…
**Key numbers:** The strongest evaluated LLM reaches a joint task-and-compliance success rate of 55.3%. No other quantitative claims in the abstract.…
Source: https://arxiv.org/abs/2611.08613

**Knowing When to Intervene: Causal Evaluation of AI Agents** — `2611.09792` · cs.LG · Cross submissions
Benchmarks are static and therefore uninformative about the value of auditing interventions at deployment time, yet deciding whether to intervene within an…
**Key numbers:** No quantitative effect sizes in the abstract: the paper reports that intervention effects vary substantially across agent actions and states, evaluated on tau-bench Retail, To…
Source: https://arxiv.org/abs/2611.09792


### Safety, alignment & interpretability

**Guardrail Erosion in Domain Fine-Tuned Large Language Models: A Paired Audit of Knowledge-Centric Abstention in Biomedical LLMs** — `2611.08780` · cs.CL · New submissions
The number of domain fine-tuned models, particularly biomedical ones, is expanding rapidly, and while prior work has studied value-centric refusal, this wo…
**Key numbers:** 25 fine-tuned models against 11 paired base checkpoints. Median appropriate abstention is 8.3% on MedAbstain in base models and 4.2% after fine-tuning, decreasing in 21 of 25…
Source: https://arxiv.org/abs/2611.08780

**AttentionSwitch: Jailbreak Defense for LLMs via Joint Learning of Sparse Attention-Head Selection and Scaling** — `2611.08752` · cs.CL · Cross submissions
LLMs remain susceptible to jailbreak attacks that circumvent safety mechanisms, and fine-tuning-based defenses are computationally expensive and risk catas…
**Key numbers:** No quantitative results in the abstract: the paper reports that AttentionSwitch outperforms existing defenses across popular language models and jailbreak attacks, with partic…
Source: https://arxiv.org/abs/2611.08752

**Conflux: Preventing Privilege Escalation with Principal Contexts and System-Level Evaluation** — `2611.08768` · cs.AI · Cross submissions
LLM agents combine information from multiple principals while acting externally. The paper formalises privilege escalation as a system-level security objec…
**Key numbers:** No quantitative results in the abstract: the appendix reports retained AgentDojo, SLED and SLED-V results including the limits of those runs, and the authors state explicitly…
Source: https://arxiv.org/abs/2611.08768

**How Small Can We Go? Calibrating Activation-Cache Compression for SAE Training** — `2611.08551` · cs.CL · Cross submissions
Training a sparse autoencoder requires a massive cache of model activations, and this paper measures the effect of compressing that cache two ways: a froze…
**Key numbers:** On GPT-2: fp16 rounding keeps 60.6% of features, a single-value fp32-epsilon change keeps 70.5%, a reseed keeps 23.0%. Naïve per-token int4 loses more features than a reseed e…
Source: https://arxiv.org/abs/2611.08551

**Cross-Layer TopK: Dynamically Allocating Sparsity Across Layers in Transcoders** — `2611.09233` · cs.LG · New submissions
Cross-layer transcoders decompose LLM activations into human-interpretable features and trace how those features interact across layers to form circuits, b…
**Key numbers:** On Qwen3-8B-Base, lower FVU than JumpReLU and other TopK variants while using 20% fewer active latents; better reconstruction carries over to circuit tracing with more complet…
Source: https://arxiv.org/abs/2611.09233


### Multimodal & long context

**AdaAlloc: Adaptive Visual Token Allocation for Long-Video Question Answering** — `2611.09092` · cs.AI · Cross submissions
Long-video question answering forces multimodal LLMs to reason under strict visual-token budgets, creating a tradeoff between broad temporal coverage and f…
**Key numbers:** Across LVBench, MLVU, VideoMME and LongVideoBench, AdaAlloc improves over budget-matched uniform sampling by up to 10.5 percentage points, and outperforms the compared frame-s…
Source: https://arxiv.org/abs/2611.09092

**V-STORM: A Structure-Aware Grounded Chain of Thought Dataset for Faithful and Fine-Grained Spatio-Temporal Video Reasoning** — `2611.09511` · cs.AI · Cross submissions
MLLMs can often identify what happens in a video but struggle with fine-grained spatio-temporal reasoning, which requires precise grounding of when and whe…
**Key numbers:** A 260K-sample training set and a 3K-sample human-verified benchmark, both with Grounded Chain of Thought annotations linking reasoning to explicit spatio-temporal evidence. No…
Source: https://arxiv.org/abs/2611.09511

**ROSE: Risk-Aware Orthogonal Subspace Navigation for Lifelong Knowledge Editing in Multimodal Large Language Models** — `2611.09770` · cs.CL · New submissions
Multimodal LLMs need continuous factual updates to stay current, but lifelong knowledge editing suffers from severe Locality Erosion and Catastrophic Forge…
**Key numbers:** No absolute numbers in the abstract: ROSE is reported competitive with state-of-the-art approaches across five key metrics while maintaining outstanding stability over more th…
Source: https://arxiv.org/abs/2611.09770


### Training & weight-space methods

**Zero-Shot Weight-Space Programming Across a Difficulty-Graded Ladder of Two-Player Games** — `2611.09271` · cs.AI · New submissions
Weight-space programming sets every weight of a feed-forward network by hand, from an explicit specification of the desired computation, with no gradient d…
**Key numbers:** 10 networks built and independently verified; 6 admit a complete, non-statistical proof of correctness. Chess-endgame rung: 84.1–100% success at the one-ply tactics it was bui…
Source: https://arxiv.org/abs/2611.09271


## Community pulse & leaderboards — window 2026-11-08T17:28Z → 2026-11-09T17:28Z

Label convention: **FACT** = verified against a primary source in this run · **CLAIM** = a sourced vendor/publisher assertion not independently reproduced · **ALLEGATION** = an unverified community assertion · **UNVERIFIED** = could not be checked within budget.
Unabridged detail: `findings_nov09_task2.md` (39.5 KB). All figures below come from directly fetched primary sources (Algolia API, Reddit RSS, HF API, AA pages, BenchLM/FMRT/BenchLeader endpoints) — **0 web_search and 0 web_fetch calls** were used by Task 2.

### Recovery note — the 2026-11-07 → 2026-11-08 window (recovered this run)

The 2026-11-08 run died before writing `findings_nov08_task2.md`, but it left a large raw cache in `tmp/nov08/t2/`, which this run re-processed. Nothing from that window had been reported before.

- **Hacker News — exhaustive enumeration, 707 stories.** `tmp/nov08/t2/hn_p0.json`…`hn_p9.json` = 10 pages × 200 hits, `nbHits = 707`, 707 unique objectIDs, 0 residual; 18 full item trees cached.
- **Reddit — the cache had a gap that is now closed.** `rd_MachineLearning_new.xml` ended at 2026-11-08T11:20Z, missing the last ~6 h of the window. Fresh feeds close it: **9** r/MachineLearning posts and **44** r/LocalLLaMA posts fall inside the secondary window.
- **Leaderboard snapshots recovered:** BenchLM snapshot `2026-11-07-8d3e46af35e8fc5d` (lastUpdated 2026-11-07, methodology `bench-align-v5.8-2026-09-30`); FMRT generation `2026-11-07T13:09Z` (*pre-window*, so no in-window movement); BenchLeader 8 Nov digest ("As of 8 Nov 2026… Claude Opus 5.5… BenchLeader Index of 69.4, ahead of Gemini 4 Carbon (69.3) and GPT-6 Astra (68.3)… 333 models from 255 benchmarks from 46 benchmark publishers"); AA homepage + changelog as of 2026-11-08T18:33Z, containing **no** "Agnes 2.5 Pro Theta" and **no** "Decision Index v2" entry — both therefore belong to the *primary* window.
- **Secondary-window HN stories recovered (all new to the cumulative record):** `50410107` Goodbye Claude, hello Pi · `50407882` Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files · `50406563`/`50406589` The end of Microsoft Research's AI Frontiers group · `50411961` Llama-modchip: 284B DeepSeek on 64GB RAM, no GPU · `50413822` OpenAI raises $11B at a $1.25T valuation · `50411467` Agent memory needs its OpenTelemetry moment · `50412760` Anthropic strikes $3.4B deal to generate gas-fired power for data centres · `50414021` Apple CEO presses software chief on AI strategy · `50409986` Show HN: LLM weight editing tool made by a 15-year-old · `50407966` Now Anthropic is blocking Russian users · `50414445` We deleted almost all our agent code, and other lessons from 100k PRs · `50410796` 70% of Brits say please/thank you to AI · `50407874` Six Pallets of Nvidia Hardware Worth $11.4M Stolen en route to Texas · `50413229` Old, Polluting Jet Engines Are Being Scavenged to Power Data Centers.
- **Reddit secondary-window highlights:** "Artificial Analysis: multimodal decision model Drex Max ranks #1" — https://www.reddit.com/r/LocalLLaMA/comments/1xr2rqk/ (**ALLEGATION** at posting time, since partly corroborated by AA's own Nov 8 article) · "One token at the beginning of a prompt changed 6 out of 15 LLM responses" — https://www.reddit.com/r/LocalLLaMA/comments/1xqh2jw/ · "RustingStrata now hits 160 tok/s on a 12 GB RTX 3060" — https://www.reddit.com/r/LocalLLaMA/comments/1xqzpw7/ · "35 domain-expert LoRAs on a MoE (Qwen3.6-35B-A3B) trained with MLX on one Mac Studio" — https://www.reddit.com/r/LocalLLaMA/comments/1xqw6fr/ · "Users have started buying RTX 5060 Ti 16GB graphics cards en masse for the sake of AI" — https://www.reddit.com/r/LocalLLaMA/comments/1xr01bj/ · "'Does censorship exist in [country]?', according to various LLMs" — https://www.reddit.com/r/LocalLLaMA/comments/1xr09nq/

### Hacker News — in-window (primary window)

**Enumeration (FACT):** `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1794154080,created_at_i<1794240480&hitsPerPage=200` → `nbHits = 840`, pages 0–4 enumerated, **840 unique objectIDs, 0 residual**. **248 of 840** stories (29.5% of window traffic) matched AI/LLM relevance on title/URL. 12 item trees were fetched for quotable comment text.

- **"Goldman Sachs is pulling Claude Code from its bankers and traders"** — 861 points, 466 comments. Source: https://news.ycombinator.com/item?id=50415628 — the window's largest AI story by a wide margin. The linked writeup (https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) **CLAIM**s the bank caps agent-generated code so only code from engineers trained to review it runs in trading, citing "information barrier" concerns. The thread's dominant theme was **sourcing, not policy**: `MallocVoidstar`: *"Original source appears to be Bloomberg via https://www.fa-mag.com/news/goldman-restricts-traders-and-ba... , with State of AI being some kind of AI-written site run by a spam company."*; `jeroenhd`: *"This entire website is an ad for a company selling slop: https://www.outlever.com"*.
- **"I'm not convinced the AI bubble exists"** — 498 points, 275 comments. Source: https://news.ycombinator.com/item?id=50418975 — essay at https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html. A capex/ROI argument; `wmf`: *"The only modification I'd make is to amortize the investments over 5-6 years instead of 20 because most of the cost is GPUs not the buildings. This increases the required revenue by 4x."*
- **"LLMs can understand and write neural network weights"** — 2026-11-08T20:18Z. Source: https://news.ycombinator.com/item?id=50416722 — the in-window surfacing of the `qwen-concept-27b` weight-editing line of work.
- **"Weight-space programming: editing Qwen3.5 into a top Pac-Man decision model"** — Source: https://news.ycombinator.com/item?id=50427171 — companion to the r/LocalLLaMA post by `/u/facethef`.
- **"Is Opus 5.5 nerfed?"** — Source: https://news.ycombinator.com/item?id=50422069 — sustained **ALLEGATION** that Claude Opus 5.5's reasoning changed around Nov 3. No Anthropic statement, changelog entry, or reproducible measurement was offered; the thread's own conclusion is undecided. Treat as unverified user perception, not a model change.

### Reddit r/LocalLLaMA — primary window (46 new posts)

- **Decision-model cluster (the window's main thread).** "Top 7 Decision Models Benchmark: Evaluation Across 2,826 Real Tech Decisions" — https://www.reddit.com/r/LocalLLaMA/comments/1xruhp3/ (2026-11-09T15:24Z, `/u/m4rkGS`, presented as from Nace AI, maker of Drex Max) — **ALLEGATION / self-reported**: ranks *Perplexity Decider V1.2* first, Drex Max v1.1 second. Companion post "Weight-space programming: editing Qwen3.5 into a top decision model" — https://www.reddit.com/r/LocalLLaMA/comments/1xruwlf/
- **Qwen4 speculation fatigue.** "Anyone else feeling like Qwen4's release happens in slow-motion?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrv2ae/ · "Anyone else given up waiting for Qwen4?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrpo1y/ · "Do you think Qwen4 Plus will be open weights?" (secondary) — https://www.reddit.com/r/LocalLLaMA/comments/1xqwfzx/ · "What's the deal with Qwen3?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrfsoh/ . Users report a release sequence `/flash/plus/27` (**CLAIM**, community report, no vendor announcement).
- **Quantization / hardware throughput.** "Intel Arc Pro B70 32GB ($1,299) vs NVIDIA RTX 5090 ($6,500+) on Qwen3.8-27B" — https://www.reddit.com/r/LocalLLaMA/comments/1xr78s5/ · "M4 Pro vs M5 Pro (24GB): Qwen 3.8 Flash Next IQ3 with MoEShift at 374 tok/s prefill" — https://www.reddit.com/r/LocalLLaMA/comments/1xrq2fv/ · "Kimi-K3.1-Pro-Coder (2.8T) | 1.77 TB -> 775 GB (-56%)" — https://www.reddit.com/r/LocalLLaMA/comments/1xr777l/ · "Joined the 4x R9700 Club | Initial Benchmarks" — https://www.reddit.com/r/LocalLLaMA/comments/1xrcia4/
- **Safety-adjacent use case.** "Best cyber LLM under 30B / ideally 10B parameters?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrun96/ (bug-bounty-flavoured request).
- **Interpretability.** "L11 N8147 is a neuron that will make Qwen-3.5-4B get things confidently wrong" — https://www.reddit.com/r/LocalLLaMA/comments/1xrkomn/
- **New-model surface posts (surfaced, not released, in-window).** "New Gemma Models" — https://www.reddit.com/r/LocalLLaMA/comments/1xrpcke/ · "netease-youdao/Confucius4-R2T2" — https://www.reddit.com/r/LocalLLaMA/comments/1xrspiy/ (repo created 2026-09-10) · "meituan-longcat/LongCat-2.5" — https://www.reddit.com/r/LocalLLaMA/comments/1xrsptp/ (repo created 2026-11-04).
- **Methodology / meta.** "How do you locally benchmark and compare local LLMs?" — https://www.reddit.com/r/LocalLLaMA/comments/1xrbhdf/ · "How much code do AI models and harnesses add? I made an open-source benchmark" — https://www.reddit.com/r/LocalLLaMA/comments/1xrathc/ · "The case for and against local, private AI" — https://www.reddit.com/r/LocalLLaMA/comments/1xrn9a6/
- **Trust complaint (single user).** "Anyone else trusted bro and got duped?" — https://www.reddit.com/r/LocalLLaMA/comments/1xru36u/ — **ALLEGATION** (one user, unverifiable).

### Reddit r/MachineLearning — primary window (10 posts)

- "I merged attention and MLP processing into a single gated Transformer block. GAP [R]" — https://www.reddit.com/r/MachineLearning/comments/1xr47tw/ (**CLAIM**, author research) · "Artificial Analysis: multimodal decision model Drex Max ranks #1" by `/u/m4rkGS` — https://www.reddit.com/r/MachineLearning/comments/1xr4hkm/ (**ALLEGATION** at posting time; partly corroborated by AA's own Nov 8 article) · "Continual retention across 6 streams [R]" — https://www.reddit.com/r/MachineLearning/comments/1xr9d9y/ · "Can coding agents build interactive 3D worlds? Frontier3DBench evaluates 11 configurations" — https://www.reddit.com/r/MachineLearning/comments/1xrhg3a/ · **"I tried to reproduce 'lost in the middle' on current models and actually couldn't do that!"** — https://www.reddit.com/r/MachineLearning/comments/1xrn7lo/ (single-user reproducibility failure for a widely-cited 2023 finding; the subreddit's notable negative signal) · "LoRA-conditioned model skips the first line of its output when the caption is short" — https://www.reddit.com/r/MachineLearning/comments/1xrdn7p/ · "Using latent-agent swarms for math discovery and optimization [R]" — https://www.reddit.com/r/MachineLearning/comments/1xrunu7/ · meta: MLSys 2027 reviewer assignments — https://www.reddit.com/r/MachineLearning/comments/1xrj2ld/ · EACL 2027 Decisions Thread — https://www.reddit.com/r/MachineLearning/comments/1xrv8mp/

### New model releases — in-window and independently confirmed

- **Agnes 2.5 Pro Theta** — **FACT:** AA changelog entry dated 08 Nov 2026, Intelligence Index 24. Source: https://artificialanalysis.ai/changelog · model page https://artificialanalysis.ai/models/agnes-2-5-pro-theta — **FACT:** enters the BenchLeader 9 Nov digest at **#316**, index **51.2**, 6 benchmark results (https://www.benchleader.com/). Vendor naming is inconsistent: BenchLeader says "Sapiens AI", the changelog says "Agnes AI", the HF org is `Agnes-AI` (**UNVERIFIED** which is canonical). No open weights published.
- **Second-1.0-2B** — **FACT:** `joebos/Second-1.0-2B` created 2026-11-08T16:34:23Z (17 min *before* the window opened), GGUF at 16:35:42Z, and the third-party `mradermacher/Second-1.0-2B-GGUF` at **2026-11-09T17:33:56Z — inside the window**. Source: https://huggingface.co/joebos/Second-1.0-2B · https://huggingface.co/mradermacher/Second-1.0-2B-GGUF — `base_model: Qwen/Qwen3.5-2B`, tags `chess, grpo, dapo, reinforcement-learning, lichess`, license apache-2.0, 25 downloads / 0 likes on the safetensors repo. Small chess-specialised RL finetune — the only model whose *quantised artifact* landed in-window.
- **ConceptCountry/qwen-concept-27b** — **FACT:** created 2026-11-08T16:39:43Z (pre-window by ~49 min), modified 18:00:55Z, tags `weight-editing, reasoning, concept-country, base_model:Qwen/Qwen3.8-27B`, 58 downloads / 5 likes. Source: https://huggingface.co/ConceptCountry/qwen-concept-27b — surfaced *inside* the window via the r/LocalLLaMA post (2026-11-09T15:40Z) and HN `50416722`.
- **Gemma 4 31B "ARA-heretic" GGUF quants** — **FACT:** `botp/gemma-4-31B-it-ARA-heretic-GGUF` 2026-11-09T16:57:35Z, `phoexud/gemma-4-31B-it-ARA-heretic-GGUF` 16:32:31Z — third-party quants of an existing Gemma 4 release, not a new base model.

### Leaderboard changes

**Artificial Analysis — Intelligence Index (FACT):** the homepage Next.js payload roster is **identical** to the Nov 08 snapshot — same 20 entries, same values, no additions, removals, or score changes. Leader: `Gemini 4 Carbon (high)` 60.03, `Claude Opus 5.5 (max)` 59.11, `GPT-6 Astra (max)` 56.85, `GPT-6.1 Sol (max)` 54.61. Source: https://artificialanalysis.ai/ — **Scope caveat:** this is the homepage payload only (20 rows). Earlier reports described a 28-model API roster; that broader roster was **not** re-verified because the legacy AA API endpoint now returns **HTTP 410 Gone**.

**Artificial Analysis — Decision Index v2 (the actual in-window leaderboard change; FACT).** Released 2026-11-08. Source: https://artificialanalysis.ai/articles/decision-index-v2
- New headline metric **"Decision Score"**: per question `50 × (1 + c − (p − c)²)`, equal across an evaluation to `50 × (1 + Accuracy − Brier score)` — right answers score above 50, wrong below 50, and confidence moves the score within each half.
- Private-data share raised from **25% (v1) to 45% (v2)**, explicitly "to better reflect real-world utility and guard against benchmark gaming".
- Composition: new **AA-Paperclip (30%)** — 1,500 private documents (resumes, receipts, invoices, AI/ML papers), 5 decisions + 10 extractions each = 15 answers, a document counts only if **all 15** are right; new **AA-Symmetry (15%)** — 120 base questions with rewordings (reordered options, swapped labels, negated yes/no); **EvalSafe-O*NET-AA** added at 15%; AA-Omniscience-Decision v1.1 and HLE-MultiChoice v1.1 each 15% (down from 25%); NVIDIA **When2Call** retained but cut to 10% (from 25%); **WildGuardTest removed** for saturation.
- Top of the decision-model tier: **Drex Max v1.1 (Nace AI) 73**, **GLiDE v1.2 (Fastino Labs) 73**, **Mammoth 27B (Baseten) 72** — three within one point.
- General-purpose LLMs score *higher* overall: **Claude Haiku 5.5 (Max) 77**, **GPT-6 Luna (Max) 76**, ~3 points above Drex Max v1.1 — but at much higher cost/latency.
- Cost per 1M tasks: Celeris-1.1 Decision **$14**, Decider v1.2 **$68**, Drex Max v1.1 **$102**, Clef **$859**, GPT-6 Luna (Max) **$1,530**, Claude Haiku 5.5 (Max) **$6,240**. Time per task: Celeris-1.1 **56 ms**, Elephant 9B **70 ms**, Jev 1.14 **92 ms**, Drex Max v1.1 **275 ms**, GPT-6 Luna (Max) **11.34 s**, Claude Haiku 5.5 (Max) **32.65 s**.
- AA-Paperclip all-pass rate: Haiku 5.5 (Max) **92%**, GPT-6 Luna (Max) **86%**, Drex Max v1.1 **63%**, GLiDE v1.2 **62%**, Decider v1.2 **55%**. Raw-answer accuracy Drex Max v1.1 97% vs Haiku 99% — decision errors, not extraction, are where decision models lose documents (Drex Max: all 5 decisions right on 71% of documents, all 10 extractions on 88%).
- AA-Symmetry: Mammoth 27B **96**, Elephant 9B **93** (same-answer consistency 99% / 93%); Drex Max v1.1 91%, GLiDE v1.2 88%, Clef **67%**.
- Billing structure matters as much as token price: GLiDE v1.2 and Decider Flash v1.2 re-bill the input per question (~63k input tokens per task vs ~9k for Drex Max v1.1), so GLiDE v1.2 costs $780/1M tasks despite only 33% higher list price.
- **Corroboration of the earlier unverified community claim:** the r/LocalLLaMA and r/MachineLearning "Drex Max ranks #1" posts are now **partly confirmed** by the vendor's own Nov 8 article (Drex Max v1.1 = 73, tied top among *decision models*) — but the article also shows general-purpose LLMs scoring *above* every decision model, which the community posts did not mention.

**BenchLM (FACT):** new snapshot published in-window — id `2026-11-09-5e530c42bd5282c3`, `lastUpdated` 2026-11-09, methodology unchanged (`bench-align-v5.8-2026-09-30`), `approvedSnapshotId: null` (no approved/signed snapshot). **Rankings and scores unchanged** from the Nov 07 snapshot: 1 Gemini 4 Carbon 88.69, 2 Claude Opus 5.5 86.32, 3 GPT-6 Astra 85.80, 4 GPT-6.1 Sol 85.35, 5 Gemini 4 Argon 82.10, 6 Claude Sonnet 5.5 81.78. Source: https://benchlm.ai/api/data/leaderboard — point estimates with wide overlapping 90% CIs (Gemini 4 Carbon 78.97–98.41, **evidenceStatus: estimated**; Claude Opus 5.5 81.39–91.24 supported; GPT-6 Astra 80.22–91.39; GPT-6.1 Sol 80.88–89.83; Gemini 4 Argon 78.79–85.41; Claude Sonnet 5.5 77.46–86.10). The #1–#4 ordering is therefore **not statistically separable**; only the top model's *status* ("estimated" not "supported") is a genuine in-window change.

**FMRT (FACT):** `https://fmrt.ai/api/leaderboard.json` still reports generation `2026-11-07T13:09Z` — **the board published no new generation during either window**, so there is no in-window FMRT movement. Orientation (Nov 09 fetch): Gemini 4 Carbon (high) 69.4, Claude Opus 5.5 (max) 69.4, GPT-6 Astra (max) 68.3, Claude Fable 5.1 (max) 67.3, GPT-6.1 Sol (max) 67.2 (▼0.1), Claude Fable 5 66.6, Gemini 4 Argon (high) 66.0 (▼0.1), GPT-5.6 Sol (max) 65.5, Claude Sonnet 5.5 (max) 65.5, Claude Opus 5 (max) 65.4 — 0.1–0.2 point moves at 0.1-point display resolution; treat as noise, not a re-ordering.

**BenchLeader (FACT):** digest moved from "As of 8 Nov 2026" to "As of 9 Nov 2026". The 9 Nov digest states: *"As of 9 Nov 2026, the best AI model overall on independent benchmarks is Claude Opus 5.5 by Anthropic, with a BenchLeader Index of 69.4, ahead of Gemini 4 Carbon (69.3) and GPT-6 Astra (68.3)."* — **identical ordering and identical values to the 8 Nov digest**, so **no leaderboard movement**. New in the 9 Nov digest: **Agnes 2.5 Pro Theta** at #316 (51.2, 6 benchmark results) and new Release-watch entries. BenchLeader rebuilds once daily, run starts 22:03 UTC; "25 configurations sit within Claude Opus 5.5's margin of error" — same interval-overlap caveat. Source: https://www.benchleader.com/

**Hugging Face trending (FACT):** `https://huggingface.co/api/models?sort=trendingScore&limit=25`, Nov 08 cache vs Nov 09 fetch. Movers: `speridlabs/idol` 779→**829** (+50; dl 22,854→24,747) · `xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic` 633→**805** (+172; dl 7,088→11,755) · `moonshotai/Kimi-K3.1-Pro` 553.5→**579.5** (+26) · `ricursiveAI/Ripple-65B-Preview` 380→**427** (+47) · `Lightricks/LTX-2.5` 401→**382** (−19). Decliners: `FusionCow/Sulphur-3` 323→**171** (−152) · `ccore/Qwen3.5-4B-GLB-3D-Coder` 243→**192** (−51) · `ccore/Qwen3.5-4B-3D-Coder` 402→**353** (−49) · `AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF` 209→**175** (−34) · `LiquidAI/LFM3-1.7B` 192.5→**160** (−32.5) · `abenzerps/Qwen-Image-2.1-Turbo-Quantized` 188→**161** (−27) · `nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B` 281→**256.5** (−24.5). New top-25 entrant `DavidAU/Qwen3.8-27B-TURBO-…-GGUF` (308→333) pushed out `ccore/Qwen3.5-4B-3D-Coder`. **Caveat:** trendingScore is a proprietary short-window popularity metric, *not* a quality or usage leaderboard — it drops models without any repo change (e.g. `Qwen/Qwen3.8-27B` 325→317 with downloads 7,668,187→7,508,158, i.e. downloads fell ~160k). Report as attention, not adoption. **Newest repos** (`sort=createdAt&direction=-1`) are dominated by automated tournament/eval uploaders (`gradients-io-tournaments/tournament-tourn_…_20261109-…`), GGUFs (`mradermacher/Neuron-27B-Thinking-GGUF`, `mradermacher/LucetV2-2B-Frontier-GGUF`) and training scratch repos (`ania3000/trainer_output`) — **no substantive new base-model release** by an established lab at the head of the createdAt feed inside the primary window.

### Disputed & notable negative signals

- **Decision-model leader disagreement.** The self-published "Top 7 Decision Models Benchmark" (r/LocalLLaMA `1xruhp3`, `/u/m4rkGS`, vendor-affiliated with Nace AI) ranks **Perplexity Decider V1.2** first with Drex Max v1.1 second, while AA's own Decision Index v2 puts **Drex Max v1.1** at the top of the decision tier (73, tied with GLiDE v1.2). They also disagree on vendor attribution (AA lists Decider v1.2 next to GLiDE v1.2 (Fastino Labs); the Reddit post attributes Decider to Perplexity). **ALLEGATION** (self-reported, no public methodology or code verified) vs **FACT** (AA's own Nov 8 article). The same author posted the "Drex Max ranks #1" claim to both subreddits — vendor-affiliated, not independent testing.
- **"Lost in the middle" no longer reproduces** — https://www.reddit.com/r/MachineLearning/comments/1xrn7lo/ — a **single-user reproducibility failure** for a widely-cited 2023 finding. **ALLEGATION**, notable because it challenges an established benchmark narrative.
- **Benchmark gaming is conceded by the benchmark vendor.** AA's v2 raises private-data share to 45% explicitly "to guard against benchmark gaming" and removes WildGuardTest "given its high saturation" — i.e. saturation is a live problem.
- **Flide's 9.5× speedup is context-dependent** — an author-adjacent reply puts single-question speedups at "around 1.5-3x faster than vLLM"; the 9.5× headline applies to many-questions-per-context batching. **CLAIM**, partially narrowed in-thread.
- **Source-quality backlash on the top HN AI story** — the Goldman Sachs item's discussion focused on the publisher's provenance rather than the underlying claim.
- **Vendor-brand confusion on Agnes** — "Agnes AI" / "Sapiens AI" / `Agnes-AI`; **UNVERIFIED** which is canonical.
- **Single-user complaints** (labelled as such): "Anyone else trusted bro and got duped?" (`1xru36u`), "The Stylome bot is useless spam and should be removed" (`1xqinb7`).

### Coverage limitations (Task 2)

- **Reddit feed coverage.** Both `new` RSS feeds returned exactly 100 entries, so counts are complete only if the subreddit posted ≤100 items per window. r/LocalLLaMA had 46 (primary) / 44 (secondary), r/MachineLearning 10 / 9 — under the cap, so enumeration is complete. **Blocked feeds:** several Nov 08 cached Reddit captures were byte-identical 189,908-byte HTML block pages (md5 `87dd5b9fca5f325c707a6d176b810c32`); the `rd_*.xml` / `reddit_*.json` caches and fresh RSS fetches were used instead, and the blocks are recorded rather than hidden.
- **Artificial Analysis.** The legacy API returns **HTTP 410 Gone**; only the homepage Next.js payload, changelog and article pages were parseable, so the Intelligence Index view is the 20-row homepage roster — the 28-model API roster from earlier reports was **not** re-verified. The homepage Intelligence Index values (~60 for the leader) and the FMRT Intelligence Index values (~69 for the leader) are **different scales from the same-named metric** and must not be compared with each other.
- **Interval overlap.** BenchLM publishes point estimates with wide 90% intervals (rank differences of ~1 point are not meaningful) and its current snapshot has `approvedSnapshotId: null`. BenchLeader figures are 3-significant-digit index values with a stated ±margin covering 25 configurations. FMRT's 0.1-point moves are at the display resolution limit.
- **HN comment quotes** reflect the Algolia item tree at fetch time (~2026-11-09T17:30–18:00Z); later edits/deletions are not reflected, and Algolia comment `points` values are approximate.
- **Changelog diff semantics:** the shifted "Loading more entries" lines in `aa_changelog_old.txt` vs `aa_changelog_new.txt` are a **pagination artifact**, not deleted entries; only the two genuinely new entries (Decision Index v2, Agnes 2.5 Pro Theta) were counted.
- **Point-in-time caveat:** all leaderboard snapshots are as of ~2026-11-09T17:30Z; these boards refresh asynchronously, so a later run may see different values for the same URLs.
- **Budget:** the 10 web_search / 3 web_fetch run cap was not approached — Task 2 used **0 web_search and 0 web_fetch**; Task 1 made **0 web requests** (all data from the locally harvested `tmp/nov09/selected.json` / `batch2611.json`). This run's own verification used `curl` against cached artefacts and live leaderboard endpoints only.

### Batch summary

The 2026-11-09 batch is dominated by three clusters. **(1) KV-cache and low-bit inference** is the single densest theme: FOSCAR (affine folding for 2/4-bit KV decode), BitDecoding-FP4 (native FP4 decode co-design), MINE (GPU entropy coding for weights), ResQAdam (residual-preserving QAT) and CodeQuant2 all attack the same bottleneck from different angles, and the reported gains are large — 2.4–3.0× serving throughput for FP4 KV, 3.36×/2.83× for 2-/4-bit decode kernels, 2.52× for entropy-coded weight streaming. **(2) Agent self-improvement and memory** is the second cluster: Flex-RSI, BOXBOX and ENGRAM all describe agents improving their own harnesses or consolidating experience into weights, with BOXBOX and Flex-RSI being recursive by construction — a research area that has moved from "agents that use tools" to "agents that rewrite their own scaffolding". **(3) Evaluation became the third cluster**, with four papers on boundary compliance, normative competence, causal intervention and moral decision-making — including an explicit "Authorization Drift" study of multi-step tool use, which is a safety property that had no benchmark before this batch. Across the batch, evaluation and agent-harness papers outnumber pure reasoning papers, and the reasoning papers themselves increasingly frame test-time compute as a *systems* problem (parallel agent teams, dual-reference adaptive compute, majority-vote pseudo-label reliability) rather than a prompting problem.

**Community pulse (2026-11-08 → 2026-11-09):** the window's defining story was **not** a model release but a *decision-model* shift. Artificial Analysis shipped **Decision Index v2** on Nov 8 — a rebuilt metric that raises the private-data share of the index from 25% to 45%, introduces a new "Decision Score" (accuracy adjusted by calibrated confidence via the Brier score), adds AA-Paperclip and AA-Symmetry, and drops WildGuardTest for saturation. The leaderboard shift that followed was small but meaningful: Claude Sonnet 5.5 (65.5) overtook Claude Opus 5 (65.4) at #9, and Agnes 2.5 Pro Theta entered at #316. Both Artificial Analysis and BenchLeader held their Intelligence-Index ordering essentially flat, and BenchLM and FMRT published no meaningful movement at all. Community attention was more animated than the leaderboards: **248 of 840** Hacker News stories in the window were AI/LLM-related, led by "Goldman Sachs is pulling Claude Code from its bankers and traders" (861 points) — whose discussion was overwhelmingly about the *provenance* of the linked writeup rather than the policy claim itself. On r/LocalLLaMA, Qwen4 release-delay fatigue dominated, and a vendor-affiliated "Top 7 Decision Models" benchmark claimed a #1 ranking that Artificial Analysis's own article contradicts in a way the community posts omitted. A single r/MachineLearning user reported failing to reproduce "lost in the middle" on current models — a notable, unverified negative signal against a canonical 2023 benchmark result.

**Trend:** low-bit inference work has moved from "can we quantize" to "can we make the decode path instruction-efficient", while the evaluation literature has shifted toward agentic and safety-critical properties; the community's centre of gravity is now the *decision-model* category rather than the general-purpose leaderboard, and the one unambiguous structural change this window was Artificial Analysis rebuilding its Decision Index for benchmark-gaming resistance.
