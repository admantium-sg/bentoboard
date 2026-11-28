# findings_nov23_task1.md — Newest LLM-central arXiv papers (Task 1)

## Methodology

- **Source:** arXiv Atom API (`https://export.arxiv.org/api/query`), category feeds for `cs.CL`, `cs.LG`, `cs.AI`, `cs.SE`, `cs.DC`, `cs.CV`; `sortBy=submittedDate&sortOrder=descending`, `max_results=300` per feed. No web search was used for retrieval.
- **Window covered:** the arXiv API snapshot's newest `published` date is **2026-11-20** (the snapshot contains no entries dated 2026-11-21 or later, so the nominal 2026-11-21/2026-11-22 announcement cycle could not be pulled directly). This batch therefore covers submissions dated **2026-11-18 → 2026-11-20**, i.e. the submissions that feed the 2026-11-21 announcement cycle plus the residual unscreened 2026-11-19/2026-11-20 backlog. All 39 selected papers are dated **2026-11-20** (38) or **2026-11-19** (1) in the API.
- **De-duplication:** 1180 unique entries parsed across all six feeds (versions collapsed to unversioned base IDs, categories merged). A prior-ID set of **2826** arXiv IDs was built by grepping `findings_nov*.md`, `cumulative_findings.md`, `daily_reports/*.md` and `archive/*.md` (pattern `26[0-9]{2}\.[0-9]{5}`); the candidate pool was reduced to **637** papers dated 2026-11-19/2026-11-20 after removing already-reported IDs (**114** of the 852 papers dated 2026-11-18→2026-11-20 had already been reported). Every one of the 39 selected IDs was re-checked against `prior_ids.txt` and confirmed **new** (0 collisions).
- **Selection criteria:** 25–40 genuinely LLM-central papers (39 selected) across post-training/RL, reasoning/CoT, agents, inference efficiency & serving, quantization/compression, evaluation/benchmarks, safety/alignment, and interpretability. Domain-specific (clinical, finance, biology, robotics), vision-only, and non-LLM theory papers were excluded. Two borderline entries were dropped late (a guardrail-decidability position paper with no quantitative results, and a linearization paper reporting no numbers) to keep every entry result-bearing.
- **Caveat:** all numbers below are **author-self-reported** from the abstracts; none have been independently verified or reproduced. Papers whose abstracts are only position/analysis pieces are marked as such.
- **Duplicate check across tasks:** this file is Task 1's independent pass; cross-task duplicates within the same daily run are possible.

---

## Architecture & Training

**2611.27973** MemOnce: A Scalable Memory Architecture for Large Language Models — Introduces a foundation architecture that caches only a small subset of final-layer hidden states as compact memory and decodes them back into KV caches on the fly, with memory sparse attention that computes retrieval indices once across layers. Adapting Qwen3.5-4B with MemOnce reduces the memory-state cache by 1313x and prefill latency by 6.9x at 1M context, improving throughput 3.5x and overall memory performance by +5.77%, while outperforming Transformers across model sizes, context lengths, and both pretraining and post-training regimes.
Source: https://arxiv.org/abs/2611.27973

**2611.27962** Model Carving: Training Transformers That Optimize Their Own Topology — Trains a Transformer's weights and architecture jointly by putting learnable scalar gates on every sublayer so the loss can remove the model's own components, carving out a smaller heterogeneous network inside. Pretrained standard Transformers from 140M to 2.7B params and looped Transformers from 140M to 1.3B reach lower validation loss than dense models trained with up to 1.7x more compute, beat size-matched pruning/distillation models, and cost up to 34% fewer FLOPs per token with up to 1.6x faster decoding.
Source: https://arxiv.org/abs/2611.27962

**2611.27326** Reasoning in Fewer Tokens: Concept-Normalized Multilingual Scratchpads and Reversible Model-Adaptive Reasoning Codes — Learns a compressed vocabulary of Private Use Area tokens representing frequent semantic spans and expands the LLM vocabulary, fine-tuning strictly 1:1 so the compression is lossless. On Llama-3.1-8B, Qwen2.5-14B and Qwen2.5-32B across four benchmarks it cuts total generated tokens by 14.7% on average (reasoning trace length down up to 27.1%) at a negligible 1.6pp average accuracy cost, and stacks with lossy/irreversible compression methods.
Source: https://arxiv.org/abs/2611.27326

**2611.27317** Do Language Models Know Which Words Steer Their Reasoning? — Names *Phantom Context Influence*: LLMs are disproportionately steered by semantically irrelevant context words while simultaneously denying those words' relevance. The proposed Online KV Suppression scores every prompt word's influence over the whole CoT in one pass and zeroes the KV entries of the highest-influence word the model itself judges inert, improving CoT accuracy across four models and five reasoning benchmarks by up to 8.9pp on math.
Source: https://arxiv.org/abs/2611.27317

**2611.27823** Mixture of Latent Recursions for Low-Rank Adaptation — Introduces MoLR, which recursively refines the down-projected latent representation of each input with a shared transformation while a lightweight threshold router decides per token whether to refine further, with dynamically adjusted thresholds balancing recursion depth usage. It consistently outperforms representative LoRA variants across language and vision tasks with negligible parameter overhead, learns input-dependent recursion-depth allocation, and exposes a controllable inference-time compute/performance trade-off without retraining.
Source: https://arxiv.org/abs/2611.27823

---

## Post-Training, RL & Distillation

**2611.27375** Gumbel Substitution: Removing Sampler Drift from RL Without Trusting the Sampler — A coordinator fixes public Gumbel noise per token position, bit-identical across GPUs, and the trainer re-derives the token its own policy would have drawn under the *same* noise, scoring that instead of the sampler's reported token, so sampler drift vanishes in expectation for any sampling distribution. On a 9B model the expected drift of uncorrected training is at least 170x to 4,800x that of substitution; on a 2B model under strong mismatch uncorrected training collapses while substitution stays stable; on a permissionless network a 9B model trained for 158 steps on 15.75B tokens (1.21% tokens substituted, no skipped step) improved on all eight held-out benchmarks.
Source: https://arxiv.org/abs/2611.27375

**2611.27148** Structure Over Scale: Rethinking Adaptation for Reinforcement Learning with Verifiable Rewards — Finds that under a cold-start GRPO protocol LoRA exhibits rank collapse (stable at low rank, then failing abruptly as rank grows), while DoRA and QuanTA remain stable over a wider region and stay competitive with full fine-tuning while updating under 0.6% of parameters. Spectral analysis shows collapsed LoRA concentrates update energy into few effective directions versus distributed updates for structured adapters, motivating a falsifiable "Model Maturity Hypothesis" that adaptation geometry depends on properties encoded during pretraining.
Source: https://arxiv.org/abs/2611.27148
Source: https://github.com/Shrimpstanot/structure-over-scale

**2611.27227** CreditFilter: Calibrated Token Weights over the Within-Response Entropy Rank for RLVR — Formalizes a token's impact on the outcome as *forking value* (variance of success probability over the policy's next-token choices) and shows it decays exponentially with within-response entropy rank, so most tokens carry negligible value. Weighting tokens by an exponential window calibrated to that envelope needs no extra forward passes and beats DAPO by 7.7 points on MATH500 and 10.5 / 9.1 points on AIME24 / AIME25 averaged over three seeds.
Source: https://arxiv.org/abs/2611.27227
Source: https://github.com/yoctta/CreditFilter

**2611.27570** WEIR: Watershed Exploration and Drift-Aware Prefix Shrinkage for Multi-Turn Agent Reinforcement Learning — An actor-critic framework grounded in a Doob turn-variance conservation identity that maintains a cross-iteration canonical action-prefix tree with discounted visit counts, trains a prefix-conditioned critic toward a minimax drift-aware shrinkage target, and allocates rollout budgets via Neyman stratification. On Qwen2.5-3B/7B-Instruct across four multi-hop QA benchmarks, ALFWorld and WebShop it reaches 32.18% and 37.85% average QA exact match and 84.83% / 87.81% ALFWorld success, beating CAPO by 1.50–3.74 points while using 28–29% fewer rollout tokens than chain sampling.
Source: https://arxiv.org/abs/2611.27570

**2611.27376** Composable Soft-Prompt Distillation of RL Experts: Toward Continual Post-Training — Keeps the pre-RL model frozen, distills each RL expert independently into a soft prompt, and composes experts by concatenating prompts without joint training. A single soft prompt recovers at least 90% of the teacher's gain in 22 of 23 math/code/agent settings; the full multi-expert composition matches MOPD (67.83 vs 67.79), generalizes best across six held-out benchmarks, and keeps throughput within 1.5% of the unadapted backbone (2.40x that of rank-4 LoRA).
Source: https://arxiv.org/abs/2611.27376

**2611.27068** Decision Models Are General-Purpose Process Reward Models — DM-PRM asks one question per step and adds the standardized answers to the advantage, plugging into any policy-gradient method with no step labels, no fine-tuning and no critic. With Qwen2.5-1.5B it lifts GRPO by over 20 points on ALFWorld and over 10 on WebShop, overtakes GiGPO on ALFWorld, learns in far fewer iterations, and reaches the highest success in the comparison (ahead of critic-based PPO and GiGPO/HGPO/GraphGPO).
Source: https://arxiv.org/abs/2611.27068

**2611.27348** Breaking the Long Horizon: Short-Horizon Process Supervision for Long-Form Generation in LLMs — Decomposes long-form generation into semantically segmented decisions, each generated with prefix-conditioned context so coherence survives while supervision stays local, then scores segments with rubric-based rewards for adherence, coherence and relevance to compute step-wise advantages. Instantiated as SH-PRM under the same GRPO framework, it consistently beats outcome-level supervision and strong inference-time baselines across multiple LLMs and two long-form benchmarks, with gains attributed mainly to improved credit assignment.
Source: https://arxiv.org/abs/2611.27348

**2611.27443** Learning When to Ask: Advisor-Aware Post-Training for SLM Agents — ADAPT is a multi-stage recipe that teaches a small LM when to query a stronger advisor, at what cost, and how to act on the advice, learning only from its own rollouts supervised by environment outcome (no reward model, no human annotation). Success rate rises from 24.5% to 77.3% on TextWorld, 21.8% to 56.0% on LiveCodeBench and 17.5% to 49.3% on GAIA using only ~1.0–2.1 advisor calls per task; on the two long-horizon domains it closes 70–85% of the gap to a perfect-timing oracle and exceeds that oracle on code generation, with gains persisting for unseen advisors.
Source: https://arxiv.org/abs/2611.27443

**2611.27436** THRIFTY: Cost-Constrained Reasoning-Data Synthesis for Small Language Models — Casts teacher-sampling budget allocation as a bandits-with-knapsack problem with a diversity-aware objective, tracking each problem's success probability with an online Beta posterior and spending tokens where it expects the most new distinct correct solutions. On AIME, MATH-500 and LiveCodeBench it gathers up to 22% more diverse correct trajectories per generation token than uniform sampling and the strongest adaptive baseline, with the largest gains under scarce budgets and on hard problems.
Source: https://arxiv.org/abs/2611.27436

**2611.27578** PRISM: Validation-Free Online Batch Selection for LLM Fine-Tuning via Preconditioned Conic Ghost Matching — Aligns candidate gradients in a factored second-moment metric and casts subset construction as conic facility location over positive ray projections, using factored preconditioned ghost inner products to avoid materializing per-example gradients; the objective stays normalized, nonnegative and monotone submodular, guaranteeing a (1−1/e) greedy approximation. Across four LLM fine-tuning configurations from 1.5B to 8B params, PRISM beats full-batch training, Euclidean facility location and zeroth-order selectors, and rivals or surpasses validation-guided baselines without held-out data.
Source: https://arxiv.org/abs/2611.27578

**2611.27119** CTRL: Concurrent Training and Rollout for LLM Reinforcement Learning via GPU Co-Residency — Co-locates a dense learner and a persistent rollout engine on the same device under CUDA MPS, with optimizer state kept in host memory and policy weights streamed through a bounded GPU window; a publication gate enforces a dropless staleness bound and a step-time bound guides compute-share selection. On H100, A800 and RTX 4090 with Qwen3 models, CTRL reaches 1.11–2.24x the throughput of the stronger of verl's asynchronous baselines across 24 workload settings at staleness limit 2, and 1.23x verl's colocate_async on eight H100s; co-residency is 1.10–1.26x faster than time-sharing on all three platforms.
Source: https://arxiv.org/abs/2611.27119

---

## Agents, Tool Use & Multi-Agent Systems

**2611.27860** Who Grades the Agent? Privilege Separation for Coding-Agent Benchmarks — Introduces SplitBench, a privilege-separation framework that separates running a task's tests from judging their results, so an agent that takes over the whole test environment still cannot forge a pass because a trusted grader holds the expected answers. 180 of 202 tasks from real benchmarks (Terminal-Bench, DeepSWE) convert with high fidelity and SplitBench agrees with native graders on 98.7% of agent attempts; under worst-case attacks where adversarial agents read all grading code, SplitBench blocked 75% of attempts.
Source: https://arxiv.org/abs/2611.27860

**2611.27116** CoEvoBench: Can LLMs Drive Recursive Co-Evolution of Agentic Systems? — A benchmark evaluating LLMs as researchers co-evolving both the model and the harness of a target agent across five agentic domains, with a 24-hour budget and scoring on separate test tasks. Across five frontier researchers the strongest closes more than four fifths of the gap to an instruction-tuned reference system, but co-evolution succeeds on interaction tasks and rarely on long-horizon coding — current LLMs make a strong first improvement but cannot yet turn feedback from an improved system into the next one.
Source: https://arxiv.org/abs/2611.27116

**2611.26980** Contexture: Runtime Context Eviction for High-Throughput Agent Serving — Traces tokens to their originating tool operations and shows shared KV capacity limits agent-serving throughput, identifying 64% of recorded final-history tokens as removal candidates. Contexture separates the harness's full conversation history from the model's execution context without modifying harness logic or model execution, and across two models, two harnesses and two benchmarks improves throughput-under-SLO by 20–73% over the best of no eviction, harness compaction, AgentDiet and Continuum (7–63% over observation masking in five of eight configurations), cuts GPU energy per completed session by up to 11%, and is 23% faster than LMCache alone on H100.
Source: https://arxiv.org/abs/2611.26980

**2611.27095** Epistemic Guard: Out-of-Process MCP Receipt Proxying, Post-Turn Prose Supervision, and Provenance-Gated Memory for Tool-Using Autonomous Agents — An open-source out-of-process stdio MCP receipt proxy (15 modules, 0 MiB GPU VRAM) that keeps Ed25519 keys out of process, writes RFC 6962 Merkle logs with AER-1 receipt translation, checks post-turn prose on CPU with SHA-256-verified OpenVINO INT8 encoders (279.48 MB total; 82.67 MB on the supervision path), and gates SQLite writes across 7 provenance domains. It rejects 100% of tampered receipts, passes all 58 official AER-1 ingestion vectors and all 50 reference-verified AER-1 exports, verifies 100% of 40 fault-injected wire calls and blocks 100% of 100 unauthorized memory writes; on 250 frozen-benchmark traces it reaches 93.2% accuracy at 17.9 ms warm median CPU latency, beating 12B–14B GPU judges by 6.4–6.8 points at 4.26–4.5x lower latency, and on 60 live mcp-proxy traces catches 96.15% of hazards at 76.67% accuracy.
Source: https://arxiv.org/abs/2611.27095

**2611.27046** Actions Speak Louder than Words: Stateful Privacy Sniffing of LLM Agents via Behavioral Covert Channels in Web Interactions — Shows that an agent's benign web decisions themselves leak private context (whether, which, and in what order it acts), forming a behavioral covert channel that transmits nothing explicit and so defeats content-level inspection. SNOOP, a stateful hierarchical probing framework, recovers query concepts at average F1 0.89 and user profiles at F1 0.80 across four agents, three LLM backbones, 500 StackExchange queries and 378 multi-turn iKAT dialogues, while four representative agent defenses change recovery by less than 0.03 F1; the proposed Selection-Obfuscated Retrieval defense cuts SNOOP's F1 to 0.39 with no extra LLM inference.
Source: https://arxiv.org/abs/2611.27046

**2611.27217** CoPyro: Feeding Copy Proposals to Parallel Drafters — Feeds copied tokens from an n-gram retrieval match into a parallel drafter in place of masks, so the drafter learns from context which tokens to keep and which to revise. Across eight benchmarks on Qwen3-4B it improves overall acceptance length for all four parallel drafters tested (gains of 2.19–5.08% when trained on 100K samples; 1.08–2.00% with DFlash on 710K samples), with code generation benefiting most; on Qwen3-8B the proposals add only 0.24 ms per decoding round in Transformers.
Source: https://arxiv.org/abs/2611.27217

---

## Inference Efficiency, Serving & Systems

**2611.27891** Speculative Decoding Is Less Speculative Than You Think — DICE (Draw-Informed Candidate Selection) pre-samples and synchronizes verification randomness across drafting and verification, using those known draws to allocate drafting computation toward continuations likely to be used in the current sampling run, and extends to asynchronous prefetching. Without additional drafter training or any change to the target sampling distribution, it achieves state-of-the-art decoding throughput across diverse settings with speedups of up to 24.6pp over strong baselines.
Source: https://arxiv.org/abs/2611.27891

**2611.27477** Cannot Wait to Verify: Parallel Drafting to Eliminate Verifier Idle Time in Speculative Decoding — A plug-and-play method that parallelizes drafting across transformer layers, starting from a shared hidden state and verifying consistency via hidden-state-space divergence, accepting layer-wise draft states when deviation is small and applying a correction step otherwise. It speeds up the drafting stage by up to 1.65x with minimal accuracy degradation and unchanged speculative-decoding performance, without architecture changes or retraining.
Source: https://arxiv.org/abs/2611.27477

**2611.27554** Vega-Fafnir: Is Greedy Decoding the Same Decoding? — Traces the origin of rounding noise in speculative verification: on 150 prompts, changing the number of tokens per pass changes 60% of outputs and padding changes 68%, with every first divergence having a top-1 minus top-2 logit gap of 0.375 or less; cache entries written by multi-token passes are as noisy as the multi-token pass itself. A margin gate does not help (58/100 prompts differ vs 61/100 for plain verification), rebuilding the cache with one-token passes removes all divergence but costs 7.2 model passes per token vs 1.0, while fixed-width decoding makes drafted and plain decoding identical (0/100 differ) at 0.75 passes per token; on 138 further shifted prompts the bound was exceeded at 0.6% of positions and missed 0 of 309 flips.
Source: https://arxiv.org/abs/2611.27554

**2611.27765** Weave: Routing-Adaptive Runtime Warp Scheduling for MoE Megakernels — An MoE megakernel with a spatial schedule allocating resources between communication and computation at both SM and warp granularity, a temporal schedule that switches warp roles as execution progresses (enlisting all warps at layer start/end and handing output scatter to idle communication warps), and a fused cost model that jointly selects both schedules per GPU at launch from runtime routing statistics. Under EP8 it speeds the MoE layer by 1.30x geomean over DeepGEMM-MegaMoE (up to 1.97x on SM103) and 1.24x geomean on SM90 (up to 1.72x); under EP16 on CDNA3 it beats the fastest official RCCL+AITER baseline by 1.44x geomean (up to 2.87x; 1.67x over vLLM).
Source: https://arxiv.org/abs/2611.27765

**2611.27604** IsoMoE: Placement-Invariant Hybrid CPU-GPU MoE Inference with Lossless 12-bit Experts — Addresses the fact that existing hybrid MoE engines produce different greedy outputs depending on expert placement, because CPU and GPU use different arithmetic: a GPU expert kernel bitwise replays the CPU expert kernel, a memory layout lets the CPU compute lossless 12-bit experts with AVX-512 dot-product instructions, and a dual micro-batch pipeline overlaps the two devices without changing outputs. Across three MoE models IsoMoE produces bitwise identical outputs across placements and is faster than the fastest baseline in every setting, with average decoding speedup 1.26x and maximum 1.54x.
Source: https://arxiv.org/abs/2611.27604
Source: https://anonymous.4open.science/r/isomoe-artifact-9C21/

**2611.27233** LongCat Recall Sparse Attention: Co-Designing Key Organization and Retrieval for Long-Context Inference — Notes that retrieval-based sparse attention (e.g. DeepSeek Sparse Attention) still requires searching the entire visible history, a major bottleneck for long sequences; LRSA partitions the sequence into independently indexable time buckets, organizes keys into capacity-balanced directional groups packed into pages with per-group centers, and fuses construction stages while sharing storage across queries during chunked prefill. Integrated into SGLang with asynchronous bucket-index construction overlapping computation, LRSA accelerates key selection by 4.70x over DSA and combined selection+attention by 35.60x over full attention at a 1024K-token context.
Source: https://arxiv.org/abs/2611.27233

**2611.27092** PLoQ: A Prompt-Specific Low-Rank Basis for 4-bit Quantization of LLM Activations — Fixes the flaw that offline-calibrated high-precision subspaces are fixed for all prompts and leave each prompt's unique dominant directions unprotected: PLoQ extracts dominant activation components via low-rank decomposition per prompt, quantizes them separately and restores them inside the layer's GEMM without modifying weights, with the basis estimated during prefill and reused during decoding. At the same budget as state-of-the-art mixed precision (4-bit weights/activations/KV with an eighth of channels at 8 bits, ~4.2 bits per activation) it outperforms that baseline on all six Llama and Qwen models from 1B to 70B at up to 8k tokens, recovering up to 46% of the perplexity the state of the art still loses, at only +4% prefill and +8% decoding on Llama-3.1-8B at 8k tokens.
Source: https://arxiv.org/abs/2611.27092

**2611.27759** DPMA: Learning to Compress Mixture-of-Experts Models — Jointly learns pruning, merging and absorbing operations and layer-wise expert allocation under a global expert budget via gradient descent on calibration data with the original model's weights frozen; separate learnable coefficients let DPMA prune experts, merge their parameters and absorb their routing contributions. Across four MoE models, eight multiple-choice benchmarks and five compression ratios DPMA has the highest average accuracy among evaluated methods, and at 75% expert reduction it beats the strongest baseline on every model by up to 6.7pp.
Source: https://arxiv.org/abs/2611.27759

**2611.27710** Abstract What Varies, Reuse Longer Patterns: Efficient Offline Chain-of-Thought Compression — CRAFT abstracts problem-specific details into slots to uncover partially lexicalized expression templates and clusters wording variants into families, so a shared deletion/rewriting edit is compressed once per family and applied per occurrence with its own details to build compact ordinary-text training targets. Versus per-example rewriting it cuts weighted compressor budgets by a median 90.7% at a median accuracy loss of 1.21pp while generating shorter reasoning; against cross-sample encoding it shortens reasoning by 25.3% on average across eight model-dataset settings and improves accuracy in five.
Source: https://arxiv.org/abs/2611.27710

---

## Safety, Alignment & Trust

**2611.27426** Cleave: Severing Guardrails and Auditing Spectral Coupling in Open-Weight LLMs — Finds that guardrails in open-weight LLMs rely on residual writing weights to trigger refusals, and gives a training-free attack that edits those weights directly to remove all guardrails or selectively lift only cybersecurity restrictions while retaining up to a 99% refusal rate on other harmful requests and avoiding weight-rank collapse. Across five open-weight LLMs from 7B to 320B, Cleave reaches up to 67.97% attack success rate on seven safety benchmarks, and on 356 cybersecurity tasks / 15 live vulnerable services boosts executable exploit generation by up to 24x and compromises up to 66.7% of targets; the proposed dual-stage defense (pre-release subspace diagnostics + post-release weight-coupling audits) achieves 100% detection recall at 1% false-positive rate.
Source: https://arxiv.org/abs/2611.27426

**2611.27495** Trained on Harm, Still Refusing: A Training-Time Defense for Code Generation — Finds that fine-tuning on untrusted data severely undermines refusal of harmful requests even though harmfulness information remains highly decodable internally, and that an initial preference for refusal does not persist through generation. SAFEHOLD is a provider-enforced defense treating refusal as a sustained generation process: it anchors the full-vocabulary response distribution at the first position via decision-boundary anchoring and reinforces the complete refusal sequence, reducing average attack success rate by 72.03pp versus undefended fine-tuning (24.32–70.87pp better than five SOTA defenses) while improving HumanEval pass@1 by 10.24pp and holding XSTest over-refusal at 2.73%.
Source: https://arxiv.org/abs/2611.27495

**2611.27424** Jagged Robustness: Uneven Safety Transfer and Emerging Vulnerabilities under LLM Quantization — Audits how quantization affects capability and safety domains (safeguards, instruction-following, ethics, bias, truthfulness) and finds that safeguards and bias degrade under quantization while truthfulness stays comparatively stable in Qwen3-4B, attributing the jaggedness to task complexity, evaluation method and generation coherence. It verifies safeguard degradation via increased compliance with unsafe requests under quantization and demonstrates universal adversarial suffixes that are benign for the full model but jailbreak quantized models.
Source: https://arxiv.org/abs/2611.27424

**2611.27032** Disentangling Verbalized Evaluation Awareness and Refusal through Neuron-Level Intervention — Identifies "VEA neurons" by contrasting activations in verbalized-evaluation-awareness vs non-VEA reasoning segments; intervening on 5,000 VEA neurons reduces the VEA rate from 12.6–51.8% to at most 1.4% across model/benchmark combinations and lowers a probe for unverbalized evaluation awareness. In QwQ-32B, VEA-neuron intervention also reduces refusal even in rollouts without VEA — VEA text itself explains only 4–10% of the decrease — and preserving the neurons' refusal components partially restores refusal, accounting for roughly half of the decrease; across OLMo 3 SFT/DPO/RLVR checkpoints the VEA rate is similar after SFT and DPO but substantially higher after RLVR.
Source: https://arxiv.org/abs/2611.27032

**2611.27410** Detecting Word-Substitution Poisoning of a RAG Knowledge Base with Relative Entropy and Runtime Verification — Measures the impact of word-substitution poisoning in a RAG corpus: judged answer correctness falls from 0.714 to 0.555, with damage coming mostly from lost evidence and refusals rather than false statements. A relative-entropy term — the log-ratio between a word and its most probable synonym, using a small LM as reference — reaches AUROC 0.95 and stays near chance on the control; as a retrieval filter it halves how often edited text reaches the generator, and an attacker forced to keep passages probable under the LM fails on all 57 sections attempted. Filtering alone does not restore correctness, so a runtime monitor checking answers against trusted MITRE STIX cuts exposure from 0.41 to 0.26 and, when allowed to add the trusted entry as a source, lifts correctness to 0.786.
Source: https://arxiv.org/abs/2611.27410

**2611.27831** DistDNA: Language Model Fingerprinting under Stochastic Decoding — Represents a model by its prompt-conditional response distributions and compares models by promptwise maximum mean discrepancy, assigning the model under examination to the nearest known checkpoint collected at several decoding settings, with no trained classifier. It shows finite sampling adds variance-dependent terms to expected squared fingerprint distance that decrease as O(1/R) for equal response counts R; across 115 model checkpoint entries DistDNA improves identification accuracy over the strongest baseline (LLM DNA) by 10.36%.
Source: https://arxiv.org/abs/2611.27831

---

## Evaluation & Benchmarks

**2611.26881** Your Judge Inherits Your Prompt: In-Context Label Bias in an LLM-as-Judge Is Directional, Not Symmetric — With a fully frozen generator-judge video-QA pipeline and answers held fixed, varying only the Yes/No balance of the judge's few-shot examples shows the judge's acceptance rate stays near two-annotator human consensus when examples are balanced or skewed toward rejection but jumps by ~30 points on NExT-QA and ~20 on MSVD-QA when skewed toward acceptance, with no matching drop for the opposite skew. A separate five-draw analysis shows single-draw results unreliable (varying by up to 18 points), so the paper concludes demonstration label bias is directional, inflation-only, and cheaply avoided by balancing examples and averaging draws.
Source: https://arxiv.org/abs/2611.26881

---

## Interpretability & Model Analysis

**2611.27353** WaXup: Weight Averaging of Experts as Data Augmentation for Robust Introspection — Builds on MiXup by augmenting the introspection training set through linear interpolation in weight space, motivated by linear mode connectivity (weight-averaged experts interpolate the behaviors of the original experts), to make trainable introspection methods robust. On hidden-behavior models, a real-world NLP meta-dataset and AuditBench (models adversarially trained to conceal behavior), WaXup improves the accuracy of generated descriptions as well as robustness to distribution shifts.
Source: https://arxiv.org/abs/2611.27353

---

## Notes for downstream tasks

- **Themes:** (i) post-training/RL engineering is dominated by credit assignment and off-policy drift (Gumbel substitution, CreditFilter, WEIR, SH-PRM, DM-PRM, RLVR adapter geometry); (ii) inference efficiency work is converging on decoding-time noise and hardware-aware scheduling (DICE, Vega-Fafnir, parallel drafting, Weave, IsoMoE, LRSA, PLoQ); (iii) safety papers shift from "does the model refuse" to "does refusal survive fine-tuning, quantization and weight edits" (SAFEHOLD, Cleave, Jagged Robustness).
- **Cross-task de-duplication is required:** this is an independent pass over the same 2026-11-18→2026-11-20 API snapshot that Tasks 2+ are likely to query, so overlap with other task files in this run is expected and should be resolved by ID at merge time.
