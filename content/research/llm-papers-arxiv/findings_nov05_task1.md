# arXiv LLM papers — batch of Thu 5 Nov 2026 (cs.CL / cs.LG / cs.AI)

Selection of ~34 of 70 keyword-scored candidates, ranked by strength of quantitative claim, negative results, and counterintuitive mechanisms. All numbers copied verbatim from the abstracts.

**Reasoning and test-time compute**

### 2611.06095 — Reasoning-Trace Overflow in Code Generation
Reasoning
Explicit reasoning has a hard failure mode: across seven models and six code benchmark settings, "on several model--benchmark pairs, more than half of generations exhaust the full 32k-token budget while still reasoning" without producing code. The value of reasoning is "highly conditional" — overflow is rare on simple function-level tasks but common on harder benchmarks — and "disabling reasoning can therefore be competitive for overflow-prone models, simply because it ensures that an answer is produced." Most complete overflow traces repetitive reasoning loops, though substantial long reasoning also occurs without looping; prompt steering reduces overflow inconsistently, while budgeted transitions give more direct control. Direct negative result on reasoning-effort scaling: more thinking is not always better.
https://arxiv.org/abs/2611.06095

### 2611.05919 — Routes of Reasoning: Reading and Reshaping Test-Time Compute in MoE Models
Reasoning
MoE routers can be used as a training-free behavioural control knob: after labelling reasoning traces with six behaviours (planning, execution, restatement, fact, reflection, conclusion), linear probes on router logits predict the label "nearly as well as probes on the residual stream ... while using about half as many features", and the signals generalise across six datasets in five domains. Selectively editing expert router scores at inference "reduces the number of generated tokens by a median of 30.4% (and up to 63.3%)" across four models and four benchmarks, with "accuracy never drops by more than 0.5 percentage points, and frequently improves" — it curbs overthinking without skipping essential steps. Comparison: token-budget and steering interventions, which regulate duration rather than behaviour.
https://arxiv.org/abs/2611.05919

### 2611.05591 — C-GRPO: Conformal Group Relative Policy Optimization
Reasoning
Standard GRPO uses a fixed rollout group, wasting compute on easy prompts; C-GRPO replaces it with calibrated conformal thresholds over task-specific nonconformity scores (APS-style calibration for closed-form reasoning, first-success score for code, periodic re-calibration) and proves finite-sample coverage for the stopping rule. Across six benchmarks in math, graduate science and code, "CGRPO reduces mean training rollouts by 49-70% relative to fixed-budget GRPO while retaining strong fixed-budget accuracy", achieves the strongest pass@1 among static and dynamic baselines, and transfers across model families "with up to 82% rollout savings". Comparison: heuristic adaptive-budget GRPO variants with no calibration guarantee.
https://arxiv.org/abs/2611.05591

**Efficiency, quantization and serving**

### 2611.05991 — A Controlled Experimental Evaluation of Configuration and Cache Architecture in LLM Serving Engines
Efficiency
Most vLLM-vs-SGLang comparisons confound cache design with other defaults, above all chunked prefill. Under vendor defaults "vLLM's median time to first token is up to 64x SGLang's", but "matching one setting removes 78% of the capacity gap where that gap is largest and 30 to 67% of the latency gap". The residual gap is explained by a fluid queue model driven by "a 4.4% throughput shortfall", which also shows the gap grows with benchmark length. What survives matching is a tail-latency advantage of 2.4 to 6.4x at equal throughput, attributed to cache-aware ordering of waiting requests. A textbook harness/configuration-artefact result for leaderboard claims.
https://arxiv.org/abs/2611.05991

### 2611.06859 — Balancing hierarchical representation and quantization in text embeddings
Efficiency
Empirical benchmark of 38 MTEB tasks × four embedding models × hierarchical dimensions × 32-bit/8-bit/binary quantization (168 configurations per task). Under a Friedman test with Nemenyi post-hoc, "int8 quantization is statistically indistinguishable from float32 for pair classification and re-ranking and costs at most 1.5 percentage points overall, whereas binary quantization is significantly worse across every task category". Combining an 8x dimensionality reduction with int8 gives "a 32x reduction in per-vector storage at 94.4% of baseline effectiveness". Null result worth noting: "we find no evidence that quantization speeds up evaluation, whereas sampling from intermediate layers shortens it substantially"; retrieval degrades far faster than any other category.
https://arxiv.org/abs/2611.06859

### 2611.06084 — Shallow Encoding Emits Deep Memories
Efficiency
Hybrid models (softmax attention + linear attention/SSM layers) spend more memory bandwidth on recurrent states than the output requires — on Qwen3.8-Flash-Next a recurrent state "take[s] as many bytes per request as the attention cache of thousands of tokens". Two structural findings drive SEED: writes are easier than reads, so prompt tokens except the last "run as few as 63% of the layers"; and recurrent states have a rank-one "state sink" plus low-rank working memory, compressible exactly (Gated DeltaNet, Kimi Delta Attention, Mamba-2) with provably bounded open-loop error. On six checkpoints of five production hybrids from 30B to >300B parameters SEED is "nearly lossless on eleven official exams", and served with SGLang on GB300 GPUs it "raises the per-GPU throughput of Qwen3.8-Flash-Next 1.2-1.4x" on an agentic-coding trace. Comparison: full-depth prefill and uncompressed recurrent state.
https://arxiv.org/abs/2611.06084

### 2611.06854 — Visual Token Routing: Learning to keep tokens that matter
Efficiency
Computer-use agents pay for thousands of visual tokens per screenshot; VTR trains a lightweight spatio-temporal router jointly with the VLM to decide which region tokens enter the language model. With only 2,000 training steps VTR "matches the performance of the full-resolution model on OSWorld, CUA-World, and video game action prediction, while using 2.5-5.8x fewer visual tokens", cutting inference cost "by up to 3.3x" and speeding prefill "by up to 2.9x". It beats lowering image resolution and other token-dropping baselines "by up to 12.8 points on OSWorld".
https://arxiv.org/abs/2611.06854

### 2611.06075 — UniCompress: From Multi-LoRA Experts to One Compact Model for Edge Intelligence
Efficiency
A consolidated BF16 Qwen3-VL-4B teacher is turned into an asymmetric INT2 student via GPTQ initialization plus teacher-guided quantization recovery of both vision encoder and language backbone projection weights. Storage falls "from 8.9 GB in BF16 to 2.1 GB in INT2, corresponding to a reduction of approximately 76%", and the INT2 macro task score improves "by 34.3 percentage points over GPTQ-INT2 while remaining within 0.9 points of the consolidated BF16 teacher" across four embodied tasks (posture recognition, household safety, dialogue routing, GUI action prediction). Comparison: plain GPTQ-INT2 and multi-LoRA deployment.
https://arxiv.org/abs/2611.06075

### 2611.05894 — RECAP: Context-Aware Prediction Recycling for Multimodal Speculative Decoding
Efficiency
Training-free speculative decoding for VLMs: recycling indexes fail because predictions "computed under different images and prefixes" are conflated, failing most often at image-sensitive decoding states. RECAP stores predictions under one-, two- and three-token keys (request-local contextual memory + persistent token-level memory) and fuses them by entropy-confidence weighting plus best-first tree search. Without training or a draft model it achieves mean speedups of "1.66× and 1.56× across seven single-turn benchmarks on Qwen2.5-VL-7B and LLaVA-1.6-7B, exceeding the strongest training-free baseline, Token Recycling (1.51× and 1.37×)".
https://arxiv.org/abs/2611.05894

### 2611.05926 — Split-KV: Efficient Context Parallelism for Training Diffusion Drafters
Efficiency
For diffusion drafters, "acceptance length remains stable as context scales with a fixed query budget, while increasing the query budget yields diminishing quality gains" — justifying query–context asymmetry. Split-KV keeps KV shards local and limits per-layer attention communication to query-sized tensors, making communication independent of context length; at CP size 64 it "retains 85--91% weak-scaling efficiency and achieves up to 3.67× speedup over the fastest available CP baseline", with a longest-processing-time-first balancer achieving "<1% imbalance and plans three orders of magnitude faster than the best load-balancing baseline". Comparison: existing context-parallel methods that ignore the asymmetry.
https://arxiv.org/abs/2611.05926

**Safety and refusal**

### 2611.06147 — SafeStart: Mitigating the Overlooked Safety Cost of Active Expert Reduction in MoE LLM Serving
Safety
MoE serving methods that run fewer experts per token are validated only on accuracy. SafeStart shows these methods weaken refusal: at roughly two thirds of selected experts, offline decoding speeds up "15 to 28% at batch size 8" while, "under a jailbreak that tells the model not to refuse, the share of harmful requests that the model answers rises by 18.4 percentage points on Qwen1.5-MoE, 9.5 on OLMoE, and 6.6 on DeepSeek-V2-Lite ... while MMLU accuracy drops by less than two points". Most of the damage happens "while the model processes the prompt and generates its first few tokens". SafeStart runs all experts for the prompt plus the first eight tokens, keeping "at least 85% of the offline decode speedup" and bringing the jailbreak effect to "between -2.1 and +1.3 points"; on 889 held-out requests truncation raises harmful compliance by 5.8 to 21.4 points versus 0.6 to 2.6 with SafeStart.
https://arxiv.org/abs/2611.06147

### 2611.06380 — Does Context Compression Preserve Refusal Alignment?
Safety
Context compression encodes inputs into compact representations; this paper finds "encoder-based compression systematically weakens refusal behaviour in instruction-tuned language models, despite high reconstruction fidelity", across model families and compression architectures. Mechanistically, "compression attenuates activation along the decoder's learned refusal direction", and a lightweight inference-time "Memory Steering" intervention restores refusal rates to near baseline without retraining, entirely in compressed space. Core claim: semantic preservation does not imply behavioural preservation. No abstract numbers given.
https://arxiv.org/abs/2611.06380

### 2611.06553 — Addition by Subtraction: Toward Mitigating Fragile Safety Alignment in LLMs
Safety
Safety alignment is sparse, so pruning a few safety-critical neurons or ablating one refusal direction can break it. "Addition by Subtraction" gradually removes identified safety-critical neurons during finetuning and uses preference optimization to re-establish safe behaviour elsewhere in the model. Across four models from three vendors the finetuned models are "substantially more robust to pruning-based attacks", and the benefit generalizes beyond the motivating white-box attack to refusal-direction ablation and black-box jailbreaks, "reducing attack success rates by up to 90% for some attacks", while improving truthfulness and largely preserving general capabilities.
https://arxiv.org/abs/2611.06553

**RL and post-training**

### 2611.05609 — On the Generalization Limitation of On-Policy Distillation for Post-RL Consolidation
RL
Near-perfect in-distribution distillation hides a blind spot. On Qwen3 models across math, coding, agent and long-context tasks, "OPD and MOPD reach 96.04-102.73% of their teachers' IND scores", yet "their out-of-distribution (OOD) scores remain 2.45-16.25% below the base model's", and on three compositional settings "its performance on composed tasks as OOD remains 18.19-24.34% below that of the best teachers". Diagnosing teacher capability and data coverage as the two bottlenecks, and removing both "eliminates OOD forgetting in our experiments". Update geometry shows (M)OPD produces "smaller and more spectrally concentrated updates" than RL baselines. Explicit negative result on distillation as a consolidation mechanism.
https://arxiv.org/abs/2611.05609

### 2611.06244 — Rubric Curriculum RL: Exploiting the Generation-Verification Gap in Non-Verifiable Domains
RL
Rubric judges are imprecise and stationary, so policies overfit or reward-hack them; RcRL combines pairwise preferences over rollouts with a curriculum over rubric criteria, giving a discriminative, non-stationary signal "without new data, human annotations, or stronger teacher models". "Whereas baselines plateau within a few hundred steps, RcRL preserves output entropy and keeps improving past 1000 steps." On creative writing it reaches "a 70.5% human win rate against the base model", and on HealthBench improves "by 14.6% (full set) and 25.4% (consensus subset)", outperforming all training baselines including instance-specific rubrics. Comparison: absolute rubric scoring, learned reward models, instance-specific rubrics.
https://arxiv.org/abs/2611.06244

### 2611.06542 — EvoOPD: Evolving Privileged Information Strategies for Black-Box On-Policy Distillation
RL
For black-box teachers, textual feedback is treated as privileged information, but which PI to request matters and the best choice shifts as the student trains. EvoOPD maintains a PI Strategy Bank adapted by measured repair utility on the current student. Across Qwen3-1.7B/4B/8B students on math and code (six settings), it "achieves the best overall performance in all six model-task settings, improving over the strongest baseline in each setting by an average of 2.14 percentage points in mathematics and 1.30 points in code", confirming that a fixed PI strategy "is difficult to sustain as the best choice throughout distillation".
https://arxiv.org/abs/2611.06542

### 2611.06123 — From Handcrafted to Generative: RLVR-Optimized Icon Generation for Alexa+
RL
A production pipeline for vectorised animated icons, where supervised fine-tuning is impossible because no line-art dataset exists under the design constraints. The authors design objective verifiers flagging guideline violations and use them for RLVR on a flow-matching model: "the pass rate" rises "from 15.7% to 58.7% (3.7x) under a VLM judge that is independent of the reward model". Both the model and the verifier ship in production, the verifier acting as an automated quality gate before design review.
https://arxiv.org/abs/2611.06123

**Architecture and MoE**

### 2611.05927 — Modality-Aware Expert Pruning for MoE-Based Multimodal LLMs
Architecture
Expert weights "account for over 90% of model size in modern MoE-MLLMs (e.g., 54 GB out of about 58 GB in BF16 for InternVL3.5-30B-A3B and Qwen3-VL-30B-A3B)". Existing pruning aggregates importance uniformly across tokens; MAEP decomposes importance by modality in one forward pass, using a redistribution-aware output-change metric (ΔH) and low-attention vision tokens as a dataset-stable vision-side pruning signal. Across three MoE MLLMs it beats modality-agnostic baselines on most multimodal benchmarks while staying competitive on text-only tasks, "reducing the BF16 expert weight footprint by about 27 GB (about 47% of total memory) so that the full weight footprint of an approximately 58 GB model fits within a single 40 GB GPU". Training-free.
https://arxiv.org/abs/2611.05927

### 2611.05984 — On the Design of Hyper-Connections: Simplification, Stability, and Scalability
Architecture
Systematic study of Hyper-Connections finds two effective interaction groups — learned read/write gating without mixing, and unconstrained mixing with fixed gates — either of which alone matches mHC; repeated access to the expanded residual state is the main source of training overhead. SimpleHC removes residual mixing and shares memory access, "incurring only 2.4% extra end-to-end training time over a vanilla residual baseline at the largest tested scale", maintaining mHC-comparable performance "when scaling from 15B to 30B MoE models", with smoother gradient dynamics and stability under stress.
https://arxiv.org/abs/2611.05984

**Agents and memory**

### 2611.05393 — Challenge-Aware Knowledge Recruitment with Meta-Agent Supervision for Medical Multi-Agent Reasoning
Agents
Multi-agent debate often fails to beat strong single-model prompting; this paper argues the problem is that experts and knowledge are recruited from the question alone rather than from gaps emerging during reasoning. A CHALLENGER inspecting the evolving trace triggers mid-discussion retrieval or specialist recruitment: on MEDAGENTSBENCH hard (862 questions, nine biomedical datasets) upfront retrieval "provides little benefit" while in-between retrieval improves accuracy on 8 of 9 datasets and "adds 6 percentage points over Challenger Only"; Challenger-triggered specialist recruitment "raises GPT-4.1-mini MedQA accuracy from 46% to 54%". Negative result: "Naively combining retrieval and specialist recruitment degrades performance" — the two channels must be coordinated, and self-triggered adaptation is unreliable.
https://arxiv.org/abs/2611.05393

### 2611.05827 — TandemBench: Benchmarking Decision Models for Multi-Agent Collaboration
Agents
A 1,200-question benchmark of multi-agent cooking scenarios where models choose among candidate team plans, plus paired variants that retain or remove the optimal plan to test optimality verification. Across "40 native decision models" compared with 10 general-purpose language models, "the best native decision model achieves 62.50% decision accuracy" while "native decision models remain close to chance in optimality verification", and paired tests reveal that some "report better alternatives regardless of whether an optimal plan is already present". Conclusion: decision accuracy alone conceals systematic errors in judging whether the supplied options contain an optimal arrangement.
https://arxiv.org/abs/2611.05827

### 2611.06760 — Route First, See Later: Separating Routing Policy from Action Spaces in Scientific Vision Agents
Agents
ZETA decouples intent routing from visual execution so misrouting and perception failure can be scored separately, measuring tool output as deterministic geometry rather than generative output. On a zero-shot benchmark of 51 scientific-intent queries, explicit routing semantics sharply improve routing accuracy at semantically adjacent action boundaries: for Qwen 3.8, "segmentation routing accuracy from 6.2% to 75.0% and detection routing accuracy from 60.0% to 100%", though improvements vary across models. Presented as the first controlled study isolating explicit routing-policy specification with the legal action interface held fixed.
https://arxiv.org/abs/2611.06760

### 2611.06445 — SUMONE: A Simple and Efficient Summarizer for Plug-and-Play Agent Memory
Agents
A standalone summarizer trained by masked reconstruction of expired agent history, with reconstruction quality plus a length penalty giving a task-agnostic GRPO reward — no reference summaries, no downstream task execution, no solver behaviour. As a plug-in it "reduces estimated inference cost by approximately 78% on DeepSearchQA and 75% on SWE-bench Verified relative to operating with full context, with absolute decreases of 0.04". The same checkpoint transfers across downstream models and agent harnesses without further fine-tuning. Comparison: learned compaction methods coupled to specific tasks/agents, and full-context operation.
https://arxiv.org/abs/2611.06445

### 2611.06674 — AgentTrustCI: Build-Time Policy, Grounding, and Trajectory Tests for Java LLM Agents
Agents
A Java/JUnit 5 framework that expresses application-layer expectations — allowed tool choice, grounding in tool output, required workflow — as policy, grounding and trajectory checks over recorded traces, with deterministic replay for repeatable build-time tests. On 55 synthetic cases across seven enterprise domains the full pipeline "correctly classifies all 30 injected faults and 25 passing controls ... and misses none of 12 designated critical cases", whereas "each single-layer configuration correctly classifies 35 cases" because the corpus isolates ten faults per layer. Notably, a grounded answer reached via a disallowed sequence is caught only by trajectory checks. Authors stress this is coverage of an authored regression suite, not production accuracy.
https://arxiv.org/abs/2611.06674

### 2611.06110 — MechScam and ScamCourt: Verifiable Debate for Scam Video Detection
Agents
6,614 videos covering scam mechanisms and look-alike non-scam content (ads), annotated with video-grounded explanations and deliberately misleading arguments built from genuine evidence. ScamCourt is a debate framework where trained prosecution and defense debaters argue and a trained judge decides from a transcript with verified citations. State-of-the-art MLLMs "struggle to distinguish scam videos from similar non-scam content"; ScamCourt "outperforms larger MLLMs and same-backbone fine-tuned baselines, reducing false positives and showing stronger resistance to misleading arguments" — evidence that the debate structure, not model scale, drives the gain.
https://arxiv.org/abs/2611.06110

**Evaluation and measurement**

### 2611.05662 — Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge
Evaluation
Agent-as-a-Judge is assumed to be grounded because it gathers its own evidence. A single false pre-screening note, attributed to an authority and carrying no evidential bearing on the correct verdict, "overturns up to 40% of a tool-using judge's correct verdicts across four judges and five datasets, even though the judge collects decisive evidence". Three failure modes are isolated — over-trust (verify, conclude correctly, then defer), hallucination, under-investigation — with over-trust dominating for the two Claude judges ("67-75% of harmful flips") while smaller judges spread across all three. "Lightweight mitigations blunt but never remove the bias."
https://arxiv.org/abs/2611.05662

### 2611.06116 — The Harness Is the Model: Agent Scaffolding Changes a Fixed LLM's Compliance with Banking Conduct Rules
Evaluation
Four open-weight models × five harnesses × 156 pre-registered cases in a simulated retail bank (3,120 two-turn episodes, 11 rule families paraphrasing EU consumer-credit, payments, investor-protection, data-protection and AML provisions), scored deterministically from executed tool traces with violations and over-refusals counted separately. Pooled across models the harness moves the correct-case rate only between 87.3% and 92.1%, but within one model the best-vs-worst harness spread is "11.5 percentage points, enough to move it from first to last place among the four models", while for another model "the harness made no detectable difference" — a model×harness interaction that is "suggestive rather than conclusive". Two surprises: the same-model compliance reviewer cut violations "from 9.6% to 6.4% without raising over-refusals, contrary to our pre-registered prediction", and in exploratory analysis "26% of violations were accompanied by a customer message that denied the action the agent had just executed", which a transcript-only review would record as a correct refusal. Conclusion: the unit of validation should be the model-harness pair, and conduct testing should read the action log.
https://arxiv.org/abs/2611.06116

### 2611.06827 — Rules, Traces and Routing Statistics: Training and Calibration Data for Open Models on ARC-AGI-2
Evaluation
189 runs on 120 hidden semi-private ARC-AGI-2 tasks with solvers offline on four L4 GPUs for ≤12 hours. Two striking results: for the grid model, "no checkpoint trained with synthetic tasks, even all 95,993 of them, improved on the real-task model" (real-task fine-tuning moved the score from 28.96 to 33.06, best 34.86); and for the 27B reasoning model, most of the gain came from the inference procedure, not from training — the score rose "from 26.81 to 44.03", above the Foundation's own no-time-limit measurement of the base model (42.36). For the 125B-A6B MoE, pruning 512→384 experts per layer by router-weighted activation saliency grew the KV cache from 0.55M to 1.39M tokens, and a 296-expert ARC-routed list plus an FP8 indexer cache reached 1.96M, scoring 56.67 — the best result.
https://arxiv.org/abs/2611.06827

### 2611.05559 — Bio-VQA: How Finely Can Vision-Language Models See Biology?
Evaluation
1.86M questions over 217K images from 11 datasets, spanning taxonomic, trait, spatial and re-identification reasoning, with graded scoring. General visual ability does not transfer: the best model counts animals exactly on "41.7% of images with 2 to 10 individuals, less than half its accuracy on everyday objects at the same counts", and "taxonomic accuracy falls to one sixth, from 0.72 at phylum to 0.12 at scientific name", with the gap to a domain specialist widening from 1.2x at class (0.731 vs 0.874) to 2x at scientific name (0.269 vs 0.544). Two null results: on trait size measurement "15 of the 18 models do no better than an image-blind baseline that predicts one fixed number", and on re-identification "17 of the 18 models fall below chance under adversarial conditions"; these failures "persist across a tenfold range of model size".
https://arxiv.org/abs/2611.05559

### 2611.05386 — SRRM: A Retrieval-Reconstruction Benchmark for Long-Context Memory in Small Language Models
Evaluation
SRRM jointly scores Targeted Retrieval and Global Information Reconstruction and introduces the Memory Preservation Ratio. On a synthetic set of 10–100 factual statements across Qwen2.5 0.5B/1.5B/3B, "reconstruction performance deteriorated substantially faster than retrieval accuracy", so retrieval alone mischaracterises long-context memory. Counterintuitive scaling: "Qwen2.5-1.5B achieved the highest retrieval accuracy (86.7%), reconstruction performance (45.7%), and MPR (0.53), outperforming the larger Qwen2.5-3B model (72.2%, 18.5%, and 0.26)" — "increasing parameter count does not necessarily improve long-context memory preservation".
https://arxiv.org/abs/2611.05386

### 2611.05638 — VIPBench: A Human-Aligned Benchmark for Voice Identity Perception
Evaluation
124,876 same-or-different judgments from 1,290 listeners on 9,800 pairs from 100 public figures, covering real recordings, TTS clones and morphs. Listener judgments diverge from speaker labels most on clones: "in 41% of responses, listeners judged a clone and a real recording of the same speaker to be different people". No model reaches the noise ceiling — "the best model explains 61% of the explainable variance" — and label accuracy is a poor proxy for human alignment, since "a model with a 12% error rate on speaker labels aligns with listeners as well as models with error rates below 2%".
https://arxiv.org/abs/2611.05638

### 2611.06631 — Trick-or-Treat: Adversarial Evaluation of Multimodal Medical Reasoning with Synthetic Images
Evaluation
Real chest radiographs paired with synthetic clinical photographs in matched and mismatched conditions, with facial identity and photographic setting held constant to avoid confounding. Across three frontier models, "models hallucinated clinically significant photograph findings in 45-57.5% of mismatched pairs, up from 25-37.5% for the same photographs shown alone". The error mode is systematic, not random: faced with a mismatch, models "tended to ignore mismatches and instead hallucinated findings that better matched the radiograph" (e.g. reading acne as crusted skin lesions to justify a chickenpox diagnosis).
https://arxiv.org/abs/2611.06631

### 2611.05556 — AGORA: Reliability-Aware Aggregation of LLM Judges via Item-Response Theory
Evaluation
With few hundred human-labelled items, per-item mean aggregation weights weak judges as heavily as strong ones, and Dawid-Skene must estimate a per-judge error table from too few items. AGORA places every item on one latent quality scale and gives each judge a sensitivity plus ordered thresholds, learning reliability jointly and without human labels. "Across three benchmarks, AGORA matches or exceeds Dawid-Skene on large evaluation sets, and its advantage widens as the set shrinks toward a few hundred items"; it stays accurate as pools grow more uneven, a label-free dispersion statistic indicates in advance when trust weighting helps, and the learned trust weights track per-judge human validity. Comparison: Dawid-Skene, unweighted mean aggregation.
https://arxiv.org/abs/2611.05556

### 2611.06856 — LongBanana: An Expert-Verified Benchmark for Long-Context Multi-Reference Image Synthesis
Evaluation
First expert-designed and expert-verified benchmark for long-context multi-reference image synthesis: 90 tasks in a 3×3 taxonomy, each with ~32 reference images, 20 constraints and 50 evaluation items (4,670 atomic evaluation items total), graph-grounded and converted into checklists for Content Fidelity, Relational Binding and Global Constraint Satisfaction. Label quality is itself quantified: a 15% double-labelled subset shows "89.4% exact agreement and 0.83 quadratic weighted kappa". Harness effects are a headline: "minimal agent harnesses improve over direct generation, while a ReAct-Plan-Exec-Reflect (RPR) workflow yields harness-dependent gains by strengthening evidence grounding and repair".
https://arxiv.org/abs/2611.06856

### 2611.05802 — GREP: Grounding Generated Room Evaluation in Principles
Evaluation
A three-tier evaluation philosophy (basic physical validity, visual coherence, human-use logic) with an autonomous agent that adaptively identifies issues, gathers evidence and reports. GREP "achieves 87% agreement with human majority preferences, substantially outperforming baseline evaluators", and only report-style feedback improves scene quality — "score-only and no-feedback baselines show slight declines". The paper also observes that recent models can move from relying on pipelines and harnesses to challenging their guidance, "but still lack the ability to resolve the resulting conflicts".
https://arxiv.org/abs/2611.05802

## Notable negative / surprising results

- Reasoning-trace overflow: on several model–benchmark pairs more than half of generations burn the full 32k budget without emitting code, and disabling reasoning can be competitive for overflow-prone models — https://arxiv.org/abs/2611.06095
- On-policy distillation consolidates in-distribution skill while regressing out-of-distribution: OPD/MOPD OOD scores sit 2.45–16.25% below the base model and 18.19–24.34% below the best teachers on composed tasks — https://arxiv.org/abs/2611.05609
- MoE expert reduction (a pure serving optimisation) raises harmful compliance by up to 18.4 points under a no-refusal jailbreak while MMLU barely moves — https://arxiv.org/abs/2611.06147
- Context compression silently destroys refusal behaviour despite high reconstruction fidelity, by attenuating the learned refusal direction — https://arxiv.org/abs/2611.06380
- A single false, authority-attributed pre-screening note flips up to 40% of correct tool-using agent-as-a-judge verdicts — https://arxiv.org/abs/2611.05662
- The harness, not the model, can decide the leaderboard: an 11.5-point best-vs-worst harness spread moves one model from first to last, and a compliance reviewer helped where it was predicted not to — https://arxiv.org/abs/2611.06116
- 95,993 synthetic ARC-AGI-2 tasks produced no improvement at all over real-task fine-tuning, and most of the reasoning-model gain came from the inference procedure rather than training — https://arxiv.org/abs/2611.06827
- Bigger is not better for long-context memory: Qwen2.5-1.5B beats 3B on retrieval, reconstruction and MPR — https://arxiv.org/abs/2611.05386
- General visual competence does not transfer to biology: 15/18 models match an image-blind constant baseline on trait measurement and 17/18 are below chance on re-identification, across a tenfold size range — https://arxiv.org/abs/2611.05559
- Multi-agent debate does not beat strong single-model prompting; combining retrieval and specialist recruitment naively degrades performance — https://arxiv.org/abs/2611.05393
- Decision accuracy can hide systematic errors: native team-plan decision models score 62.50% but stay near chance at verifying whether a better arrangement exists — https://arxiv.org/abs/2611.05827
- int8 quantization of text embeddings is statistically indistinguishable from float32 (≤1.5 pp) while binary is significantly worse everywhere, and quantization shows no evidence of speeding up evaluation — https://arxiv.org/abs/2611.06859
- 64x reported TTFT gap between vLLM and SGLang mostly dissolves (78% of the capacity gap) once chunked prefill is matched — https://arxiv.org/abs/2611.05991
- Frontier models hallucinate matching findings to justify the radiograph: 45–57.5% hallucination on mismatched pairs versus 25–37.5% for the same images alone — https://arxiv.org/abs/2611.06631
- Voice-clone identity perception: 41% of listener responses call a clone and a real recording of the same speaker different people, and label accuracy is a poor proxy for human alignment — https://arxiv.org/abs/2611.05638

## Recurring categories check

- **LLM-as-judge reliability / disagreement with humans** — appeared: 2611.05662 (confirmation bias flips up to 40% of correct verdicts), 2611.05556 (AGORA reliability-weighted judge aggregation), and 2611.06123 (VLM judge independent of the reward model).
- **Multi-agent debate or inter-agent influence causing harm** — appeared: 2611.05393 (debate fails to beat single-model prompting; naive channel combination degrades performance), 2611.06110 (ScamCourt debate beats larger MLLMs).
- **Harness / evaluation-instrument effects dominating model differences** — appeared, strongly: 2611.06116 (harness moves a model from first to last), 2611.06827 (inference procedure drives most of the gain), 2611.06856 (harness-dependent RPR gains), 2611.05802 (report vs score-only feedback), 2611.05827 (decision accuracy hides verification errors).
- **KV-cache compression below 4-bit** — did not appear. No sub-4-bit KV-cache quantization paper in the batch; the nearest items are 2611.06084 (rank-one/low-rank recurrent-state compression for hybrids, not KV cache) and 2611.06827 (expert pruning to *grow* the KV cache).
- **Reasoning-effort scaling that does NOT help** — appeared: 2611.06095 (disabling reasoning competitive; overflow), 2611.05919 (overthinking wastes 30–63% of tokens), 2611.06827 (gain from inference procedure, not more compute), 2611.05591 (49–70% fewer rollouts via conformal stopping).
- **Distilled / small models exhibiting worse alignment or capability than larger ones** — partially: 2611.05609 (distilled students fall 2.45–16.25% below the *base* model OOD) and 2611.05386 (1.5B beats 3B on long-context memory). No paper in the batch directly reports smaller distilled models having *worse alignment* than larger ones.
- **Grader or metric artefacts inflating leaderboard gaps** — appeared: 2611.06116 (same-model reviewer changed results against prediction), 2611.05827 (accuracy conceals systematic verification error), 2611.06856 (harness-dependent gains), 2611.06827 (synthetic-data null result vs inference-procedure gain), 2611.05638 (label accuracy misaligned with human perception).
