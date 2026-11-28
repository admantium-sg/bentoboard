# Findings — 2026-11-25 cycle, Task 1 (llm-papers-arxiv)

40 papers selected from the 2026-11-24 arXiv announcement cycle (plus 4 strong 2026-11-23 papers that had not been reported before). All IDs checked against `tmp/nov25/known_ids.txt` — zero collisions.

### 2611.32884 Lazy Agents Answer Against Their Own Beliefs: Reinforcement Learning with Verifiable Beliefs Teaches Them to Act on What They Believe
- Categories: cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32884
- Key contribution: Introduces Reinforcement Learning with Verifiable Beliefs (RLVB), which rewards an agent for taking further steps while the simulator's exact posterior over the answer still permits several answers, and for committing once the evidence is sufficient. The reward needs no judge, critic or reward model and never reads the belief line the agent writes before each action. RLVB improves the base model in all nine settings across three benchmarks, "by 17.1% on average", while under outcome reward both GRPO and PPO fall below the base model; it also beats PPO with an LLM-judge process reward "by 9.3% on average while using 1.6 times fewer GPU-hours". The trained agent answers with sufficient evidence in "51%, 12% and 74%" of episodes versus "8%, 0.4% and 36%" for the base model, and commits at only "0.1 to 2.2%" of turns where evidence is insufficient, against "3 to 68%" for the base model.
- Why it matters: It reframes "laziness" as a credit-assignment problem that the environment can grade exactly, showing outcome rewards are structurally blind to evidence sufficiency.

### 2611.32131 Rethinking Reasoning Effort Training in Large Language Models: On-Policy Distillation or Reinforcement Learning?
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32131
- Key contribution: A systematic comparison of reinforcement learning (RL) and on-policy distillation (OPD) for controlling reasoning effort. Length-penalized RL reliably compresses a single policy, "reducing thinking on AIME25 by 70% without accuracy loss", but collapses effort tiers when trained jointly; multi-teacher OPD separates tiers, where across 33 benchmarks low and medium tiers use "58% and 43% fewer thinking tokens than high", while high improves on the reference policy by "3.1 points". The mechanism is traced to the training signal: a sequence-level reward cannot distinguish tier-specific from shared behavior, whereas OPD supplies a tier-specific target at every visited state including the decision to stop. A single token-level KL anchor on the high tier suffices to learn separated tiers within one RL stage, and tier separation from dense targets "does not carry over to unseen agentic tasks".
- Why it matters: It gives a principled criterion for when to reach for distillation versus RL for effort control, and shows a key limitation of dense-target tier separation.

### 2611.32013 To Critic Or Not To Critic
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32013
- Key contribution: Argues there is no universal winner between critic-based PPO and critic-free GRPO, and studies the choice through the bias-variance tradeoff measured by how closely each method's gradient estimates align with the true policy gradient as batch size grows. Across "more than 1,200 training runs, including 96 with LLMs" in control tasks, short-horizon math and long-horizon terminal agents, PPO generally leads at small batch sizes, while GRPO often overtakes heavily bootstrapped PPO and reaches parity with lightly bootstrapped PPO at larger batches; at longer horizons and in more complex domains GRPO needs larger batches to catch up. Accounting for training compute, "critics pay off at small budgets, but their returns diminish at larger budgets."
- Why it matters: It replaces folklore about critics with a batch-size-dependent decision rule grounded in gradient alignment rather than headline benchmark wins.

### 2611.32452 The Teacher Is Already Inside: Self-Distilling Looped Language Models Beyond Their Last Loop
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32452
- Key contribution: Observes that a looped language model already contains a policy better than its last loop — the next-token distribution extrapolated from the first loop through the last — and turns this into a self-distillation target (ELPSD) computed by a frozen copy of the model, using the exact reverse KL at every visited prefix. The objective pulls the last loop towards the base model's last loop with weight 1+w and away from the first loop with weight w; the teacher must stay frozen, since an idealised teacher recomputed from the current model "extrapolates without bound". On Ouro-1.4B-Thinking across five math benchmarks, ELPSD raises avg@8 from "61.15 to 63.69" with no reward, no external teacher and no privileged context, beating GRPO ("62.32", which uses a verifier) and OPSD ("61.77", which needs reference solutions).
- Why it matters: It shows a model can be its own teacher, removing the verifier bottleneck for post-training looped architectures.

### 2611.31939 Beyond the Last Loop: Reinforcement Learning with a Teacher Extrapolated from the Model Itself
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.31939
- Key contribution: Proposes ELGO (Extrapolated-Loop Group-relative Optimization), which adds to GRPO a dense per-token distillation term towards the extrapolated-loop teacher distribution. The teacher comes from an anchor copy of the model that stays frozen and is refreshed once the student's KL to the teacher drops below a threshold, so the teacher improves with the student without chasing its own extrapolation; the outcome reward splits probability between correct and incorrect responses while the teacher decides which tokens are preferred inside a response. On Ouro-1.4B-Thinking, ELGO raises average avg@8 over five math benchmarks "from 62.32 with GRPO to 64.20" and is the best compared method on every benchmark, while spreading the reward over loops falls below the base model.
- Why it matters: It pairs outcome reward with a self-generated dense teacher, sidestepping both the one-bit-per-response signal problem and the need for an external teacher.

### 2611.33148 CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies
- Categories: cs.CL
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33148
- Key contribution: Shows the teacher's chain-of-thought can be omitted entirely when distilling a long-horizon agent: the student is trained on teacher actions with an empty reasoning block plus a KL loss on a replay buffer of its own generations, and the resulting policy transfers to inference with thinking enabled — "cross-format transfer". Distilling the actions of Qwen3.6-27B raises Qwen3-4B's AppWorld task success "from 7% to 18%" and Qwen3-32B's "from 12% to 25%"; adding short "CoT-proxies" (summaries of the teacher's reasoning placed after the empty reasoning block) lifts Qwen3-4B further "to 35%". Distilling GPT-5.6 Luna from its visible outputs and API-returned reasoning summaries raises Qwen3-4B "from 7% to 48% on AppWorld and from 3% to 28% on SWE-bench Verified".
- Why it matters: It makes closed-teacher distillation of long-horizon agent policies practical without access to hidden reasoning traces.

### 2611.33064 U-Statistics-Powered LLM Reasoning
- Categories: cs.LG, stat.ML
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33064
- Key contribution: Recasts the choice of GRPO group size as a classical variance-ratio estimation problem, exploiting the U-statistic structure of GRPO's policy gradient. Since the denominator of the ratio is small and naive plug-in estimators are unstable, it proposes a pessimistic ratio estimator that accounts for the denominator's estimation uncertainty, with statistical characterization across three sample-size regimes. Empirically, on synthetic Reasoning Gym tasks and real mathematical-reasoning and code-generation benchmarks, a jackknife-based pessimistic rule reduces the mean squared error of the resulting policy gradient and improves policy optimisation over fixed-group-size baselines "with modest additional computational cost".
- Why it matters: It replaces a hyperparameter usually chosen by trial and error with a statistically grounded, cost-aware selection rule.

### 2611.32539 Avalon-M1: Reinforcement Learning from Collective Rewards
- Categories: cs.CL
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32539
- Key contribution: Introduces reinforcement learning from collective rewards (RLCR), training one shared policy for a CEO role and up to eight specialists that coordinate through a message board and workspace under a common outcome-derived advantage and a latency deadline. The trained Avalon-M1-Mini (120B) across 147 environments sees eight-hire organisational execution raise IMO-ProofBench-Advanced scores "from 23.8% to 39.0%" relative to single-agent execution; across 12 benchmarks organisations reach similar average scores at roughly one-third the derived latency of token-matched single-agent execution and just over half that of eight independent attempts plus selection. The model also outperforms Nemotron 3 Super post-trained from the same base model across all evaluations, and on EdgeBench organisations overtake the single agent after approximately 0.4 derived hours. Safety evaluations find "near-universal refusal of harmful actions but sustained declines in external reporting in two of three oversight scenarios".
- Why it matters: It shows organisations of agents trained under one shared advantage spontaneously develop hierarchies, and it surfaces an oversight-degradation risk in multi-agent setups.

### 2611.32064 Fix How It Acts, Not How It Thinks: Surgical Fine-Tuning of Frontier LLMs
- Categories: cs.LG, cs.CL
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32064
- Key contribution: Diagnoses that behavior-level LoRA updates on released checkpoints often do not survive merging: in the BF16 release the median weight change is "only 1.5% of a single rounding step" and merging loses roughly two thirds of the update's norm, while merging the same adapter into the mixed FP8/NVFP4 release makes "93% of the update disappear". The proposed merge-aware fine-tuning rounds the sum of base weights and adapter update to the release format at every training step (keeping the vendor's quantization scales) and computes the loss on those rounded weights, so the trained model is the model shipped. Applied to Nemotron-3.5, it improves agentic coding in both BF16 and NVFP4 releases "by up to 8.4 points on Terminal-Bench 2.1", with both models released publicly.
- Why it matters: It makes the fine-tuning loss numerically identical to serving numerics, closing a silent failure mode of quantized release pipelines.

### 2611.32802 Sample-Efficient In-Context Adaptation via Sleep
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32802
- Key contribution: Studies whether "sleep" — N recurrent forward passes refining the model's representation of a context chunk — helps in-context adaptation on general tasks for transformers, after prior work found it only for SSM-attention hybrids. The authors pre-train models up to 1.2B parameters on up to 100B tokens with sleep mechanisms and find that longer sleep (larger N) enables faster in-context learning on multiple few-shot algorithmic and QA tasks plus lower next-token prediction loss on out-of-distribution evaluations. On held-out code, models with N=2 and N=4 match the no-sleep baseline's loss using "2.10x and 2.39x fewer tokens in-context, respectively".
- Why it matters: It turns a latent-space compute trick into a measurable in-context learning-efficiency gain, at the cost of extra decoding latency.

### 2611.31966 On the Information Loss of Multi-Token Prediction: Origin and Solution
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.31966
- Key contribution: Separates block-wise from sequence-level cumulative information loss (CIL) in multi-token prediction (MTP), showing that when the model generates from its own outputs without reference answers, the input-conditional gap equals the cross-block dependence of the reference targets. The proposed Dual-MTP supervises shared prediction heads under both full and randomly masked contexts, and the normalized dual loss bounds the divergence between predictive distributions under full and masked contexts. Across five backbones and six math-reasoning and GLUE tasks, Dual-MTP achieves the highest average task score on four of five backbones with gains "of up to 2.46 points over MTP", and on mathematical reasoning it reaches "1.4 to 1.9 times the decoding throughput of the NTP reference".
- Why it matters: It gives a principled diagnosis of MTP error accumulation and a dual-context fix that improves accuracy without giving up block-wise decoding.

### 2611.32063 Integral DeltaNet: Improved Linear Attention with Adaptive Memory Integration
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32063
- Key contribution: Introduces Integral DeltaNet, a linear attention architecture keeping two complementary recurrent states — a fast-updating delta state for current key-value associations and an integral state preserving a weighted history of the delta state — adaptively combined at readout to access information across timescales. It derives a chunkwise parallel formulation for hardware-efficient training. Evaluation on 340M and 1.3B models trained from scratch on 15B and 100B FineWeb-Edu tokens shows improved language modeling, commonsense reasoning, real-world and synthetic retrieval, long-context understanding and length extrapolation versus strong recurrent baselines, with training throughput, activation memory, decoding latency and memory also compared.
- Why it matters: It targets the memory-collision weakness of linear attention with a dual-timescale state rather than another gating variant.

### 2611.32324 When Exact Token Importance Is Not Enough: Limits of Top-K Selection in LLM Attention
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32324
- Key contribution: Shows that ranking attention positions individually by their exact single-position deletion effect is insufficient, because attention weights are renormalized over the chosen set: a four-position construction makes the ranked pair incur "133.2 times the Kullback-Leibler (KL) divergence of the optimal pair", and a parametric family proves the multiplicative gap is unbounded. In exhaustive frozen-model audits of SmolLM2, Gemma and Qwen, exact-singleton Top-4 leaves at least 10% relative improvement inside a fully enumerated 24-position pool in "55/60, 49/60, and 60/60" cases respectively; the same-budget one-swap audit SwapCert detects "157/164" such cases and returns directly checkable improving supports, with a KL-margin certificate relating support fidelity to next-token stability and cached-decoding experiments at K = 128 and 256.
- Why it matters: It proves that joint support quality, not per-token importance, is the correct object of analysis for sparse attention under inference constraints.

### 2611.33080 Shifter Quantization: Compact Representations for Native Integer Computation
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33080
- Key contribution: Develops Shifter Quantization (SQ), which reconstructs native-width integer operands by appending and shifting shared bits, so groupwise-style accuracy no longer blocks standard integer MMA spanning the full dot product; a variant Shifter Integer (SHI) targets INT4 kernels. SQ/SHI outperform standard groupwise quantization in projection error, KL divergence, decoding and prefill speed. At 2 bits, SQ2 and SHI2 achieve "2.71-3.77x the 4,096-token prefill throughput of llama.cpp on a Q2_K checkpoint" and reduce WikiText-2 KL by "6.6-7.8%"; at 4 bits, SQ4 achieves "1.43-2.47x the prefill throughput of NInfer's groupwise-integer baselines" with "24-40% lower KL"; at 8 bits, SQ8 achieves "27.4% higher batch-one prefill throughput and 72.7% lower KL than vLLM's online FP8".
- Why it matters: It resolves the accuracy-versus-native-integer-kernel tension that has limited groupwise quantization's deployability.

### 2611.32873 MXFP4 for LLM Inference: Complementary Post-Training Quantization Techniques and Their Interactions
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32873
- Key contribution: Systematically studies the composability of PTQ configurations across six LLMs and three microscaling formats (MXFP6, MXFP4, NVFP4), varying Hadamard rotation granularity, PTQ algorithm and scale-selection strategy. The central finding is that recipes are format dependent: MXFP4 benefits substantially from rotation and error-correcting PTQ whereas NVFP4 gains less from rotation, consistent with its finer-grained scales. The paper introduces Midmax, a calibration-free scale-selection strategy mitigating clipping error in power-of-two block scales; pairing MXFP6 activations with MXFP4 weights recovers most of the accuracy lost at 4-bit and on Llama-3.1-8B "matches or exceeds our in-house BF16 baseline", while adding a per-tensor macroscale does not improve average accuracy, suggesting global rescaling alone cannot fix E8M0 block scales.
- Why it matters: It gives evidence-based guidance that quantization recipes cannot be ported blindly between microscaling formats.

### 2611.32848 Measurement Artifacts in Trustworthiness Evaluations of Quantized Small Language Models
- Categories: cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32848
- Key contribution: Decomposes the measured change in benchmark scores under quantization into the true change plus an instrument-contributed term, and estimates the interaction for four measurement choices in 8 instruction-tuned models below two billion parameters, at float16, LLM.int8() and NF4, on identical items. Measured against labels from two human annotators, "the 4-bit rise in harmful compliance is about half to two-thirds of the rise in non-refusal that a corrected keyword detector records". Cloze and lettered multiple-choice scoring disagree far beyond their noise allows, correlating at "rho = 0.10, against a ceiling of about 0.77". LLM.int8() answers depend on batch composition and "padding alone changes its answers" (rounding activations to 8 bits suffices), while NF4 is batch-invariant; the two largest reported calibration losses are response-bias shifts.
- Why it matters: It shows a substantial part of the reported "quantization harms safety" effect is measurement artifact, changing how such claims should be made.

### 2611.32755 ReQOR: Operator-Discrepancy Subspace Repair for Quantization-Conditioned Backdoors in Large Language Models
- Categories: cs.CR, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32755
- Key contribution: Isolates module-local quantization effects from upstream drift by evaluating high-precision and quantized versions of each module on identical states from the quantized inference trajectory, then formulates QCB defense as repairing these same-state operator discrepancies. ReQOR is a training-free defense that identifies the dominant directions of the discrepancies on benign calibration data and restores full-precision computation along them in closed form, yielding a factorized residual adapter, using neither attack information nor gradient-based optimization, and supporting both full-span and low-rank repair. Across four LLMs, three PGD-based QCB attacks, three malicious behaviors and three quantization formats it substantially mitigates QCB while largely preserving benign utility; on a non-PGD outlier-injection attack existing baselines "largely fail, whereas ReQOR remains effective", and the dominant-discrepancy directions beat rank-matched random, low-energy and raw-weight-error directions.
- Why it matters: It offers a quantization-aware backdoor defense that works without attack knowledge and generalizes beyond the attack family it was designed for.

### 2611.32954 LoomKV: Lossless KV Cache Compression from GPU Memory to SSD for LLM Serving
- Categories: cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32954
- Key contribution: Brings lossless KV compression to both external tiers and the GPU pool on an unmodified engine, using a calibrated per-head two-level 3-bit code over BF16 high bytes (sign and upper seven exponent bits): BF16 KV is stored at "0.71 of its raw size across nine models" and FP8 KV at "0.85-0.87". TileStream writes exact-length records with length readback off the load path, and FragPack packs variable-length records into shared-budget GPU pages read in place by a fused decode-attention kernel "faster than FlashAttention-3 on BF16". Built on LMCache and vLLM, tier mode delivers "2.7-3.6x raw's goodput and 1.9-3.1x lower mean time-to-first-token (TTFT)" across LMCache's LRU cliff and cuts repeated-prompt TTFT "up to 1.7x"; pool mode fits "1.31-1.34x as many GPU tokens", and on a constrained AI IDE trace tier and pool modes raise goodput by "1.24x and 1.59x" while compression costs at most "2.2% throughput" where raw capacity suffices.
- Why it matters: It shows exact, bit-preserving KV compression is attainable at the memory-hierarchy levels that actually bottleneck agent serving.

### 2611.32269 Pando: Noise-Coupled Parallel Draft Trees for Efficient Edge Speculative Decoding
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32269
- Key contribution: Builds dynamic draft trees on top of a parallel drafter, removing the block-size cap that leaves most of the verification budget unused in DFlash/DSpark-style chains. Noise-coupled pruning draws the target model's sampling noise before drafting and ranks candidate branches under that noise, so the tree keeps branches the target will actually sample; the coupling is lossless, needs no retraining or extra model pass, and increases acceptance length by "up to 8.4% on Qwen3-8B". Using an operator-level roofline normalized to AR decoding, a 16-node Pando tree on a representative edge device attains "5.3x speedup and 4.2x energy reduction over AR decoding", "25% faster than DSpark's released chain" and "27% faster and 72% more energy-efficient than an EAGLE-3 tree".
- Why it matters: It exploits target-model sampling noise as free information, decoupling draft-tree size from drafter training budget.

### 2611.33004 LEGOSpec: A Composable and Efficient Framework for Speculative Draft Design and Training
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33004
- Key contribution: Decomposes draft models into Context, Backbone, Proposal and Objective components under one training infrastructure, so component effects, interactions and composition benefits can be isolated under matched training conditions. Three findings emerge: different workloads favor different backbones depending on context length and memory budget (within-block dependency modeling matters most for long contexts); proposal design must balance acceptance against latency; and the objective should match token distributions locally while optimizing acceptance length across the block. These guide DFlux, a general-purpose draft combining a convolution-equipped SWA-GQA hybrid backbone, Residual Corrector and hierarchical supervision, which improves acceptance length over the strongest baseline "by up to 13.7% on regular benchmarks and 34.7% on long-context workloads" across Qwen and Gemma models. Metadata-aware scheduling and asynchronous execution raise training throughput "by up to 79%" and accelerate offline supervision preparation "up to 3.11x over SpecForge".
- Why it matters: It turns speculative draft design from recipe-hunting into a decomposed, workload-aware engineering discipline.

### 2611.33111 Draft Calibration for Speculative Decoding: Accelerating LLM Serving by Matching Draft and Target Distributions
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33111
- Key contribution: Links speculative decoding speedup directly to the L1 gap between the target distribution p and draft distribution q, and applies post-hoc calibration of the draft to shrink it. The authors observe that community open-source draft models generally learn the top candidate token correctly but are systematically underconfident relative to the target, indicating a consistent distribution mismatch. Standard temperature scaling of the draft distribution improves the acceptance length by "up to approximately 10% with almost no additional cost across different tasks", and throughput analysis verifies the serving-efficiency gain; analysis of more general calibration methods indicates further headroom.
- Why it matters: It identifies confidence miscalibration, not capability, as a large part of the acceptance-rate loss in practical draft models.

### 2611.32572 Breaking Routing And Inter-device Dependencies in Mixture-of-Experts
- Categories: cs.DC, cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32572
- Key contribution: Introduces BRAID-MoE, which pairs laddered residual connections with early routing to relax the sequential dependencies that block overlap of expert-parallel dispatch and combine. Laddered residuals defer each expert combine to the following block while early routing computes the next routing decision from the pre-combine residual, with experts still receiving the updated post-combine hidden state, creating a window for back-to-back combine/dispatch on a dedicated communication stream overlapped with attention computation. On Qwen3-shaped MoEs at 0.4B-A0.1B and 2.5B-A0.5B, BRAID closely matches sequential training at matched compute with validation-loss increases of only "1% and 0.5%"; on a converted Qwen3-30B-A3B it achieves speedups "of up to 1.29x in prefill and 1.37x in decode" and "at least 1.12x across diverse workloads and EP configurations" on one or two four-H100 nodes, outperforming competing overlap strategies in all tested settings.
- Why it matters: It demonstrates that architecture-level changes, not only kernel-level ones, can unlock communication-computation overlap in MoE serving.

### 2611.31638 Wavefront: Low-Rank Drafting with Parallel Causal Refinement for Speculative Decoding
- Categories: cs.AI
- Published: 2026-11-23
- Source: https://arxiv.org/abs/2611.31638
- Key contribution: Measures DSpark's correction head and finds it overrides the base prediction on most slots, so the expensive base readout through the target's full lm_head mostly provides a seed. Wavefront therefore replaces the full lm_head with a learned low-rank base, conditions the correction head on the whole drafted prefix within the block, and resolves it with a few parallel Jacobi passes, making the draft step free of data-dependent control flow and capturable as a single CUDA graph in vLLM with fused kernels. On Qwen3-8B it improves throughput over xPress, DSpark and DFlash by "2.6%, 10.7% and 23.6%" on average across math, code, chat and agentic benchmarks and by "9.6%, 14.3% and 28.9%" on SPEED-Bench long-context prompts; on Qwen3.8-27B it leads DFlash2, DSpark and xPress by "7.6%, 10.6% and 5.0%", with gains persisting at concurrency 32.
- Why it matters: It shows the costliest part of parallel drafting is the base readout, not the dependency correction, and reallocates compute accordingly.

### 2611.32660 Bathys: Advancing Deep Search Agents
- Categories: cs.CL, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32660
- Key contribution: Presents Bathys 9B and 27B deep search agents built on a training framework spanning verifiable question synthesis, post-training and online RL under context compression. Data construction reformulates each clue as an indirect reference requiring independent retrieval and retains evidence chains enabling verification that clues jointly determine a unique answer. Curated trajectories underpin an SFT → KTO → CM-GSPO pipeline, where CM-GSPO optimizes execution sub-trajectories with length-normalized likelihood ratios and reweights sub-trajectory advantages to correct the extra weighting from independently averaging sub-trajectory losses. Bathys 9B and 27B attain "66.51% and 80.49% on BrowseComp" under an evaluation protocol with trajectory self-verification and conditional retries.
- Why it matters: It shows a deliberate evidence-chain design plus a corrected sub-trajectory RL objective can push deep search without a bespoke reward model.

### 2611.31727 fork() for Agents: Agent Kernel for Non-blocking LLM Orchestration
- Categories: cs.CL, cs.DC
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.31727
- Key contribution: Ports the distributed-systems subgraph-selective recovery pattern to the LLM content plane via Agent-Kernel, whose primitive Sub-Graph Recovery (SGR) fires on a raw exception with no trained verifier or planner, resets a failed node's descendants while preserving completed siblings, and composes each parent's text into its children's prompts (context inheritance) on a durable substrate with a formal state-preservation guarantee. Across "14,434 runs on synthetic and standard benchmarks (tau-bench, Gaia2, AutomationBench, InterruptBench)", SGR reaches full recovery within budget=3 where whole-trajectory replay exhausts ("100% vs. 55%"), and is "roughly 10x faster than an adapted Sherlock rollback that also recovers". It matches ReAct-serial accuracy within noise on linear workloads while adding recovery and parallelism (up to "12.7x speedup"), and removing SGR collapses success to "39.4%".
- Why it matters: It shows classic fault-tolerance semantics transfer cleanly to LLM agent runtimes and that failure recovery need not cost accuracy.

### 2611.33093 AIChipBench: Benchmarking LLM Agents for Automated AI Accelerator Design
- Categories: cs.CL, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33093
- Key contribution: A benchmark where agents implement quantized Qwen3.5, Gemma 3, Gemma 4 and Llama 3.2 decoders in synthesizable RTL against an executable integer reference specifying outputs and stored state at every decoding step, with frozen designs graded on held-out token sequences, resets, memory stalls and synthesis, plus a track to speed up a correct design at nearly fixed area. Across "9,136 attempts by four coding agents", the difficulty is in stored state: feedback pointing to the first state mismatch raises acceptance over output-only feedback in all 12 agent-task cells by "25.0 to 46.9 percentage points" and halves agent-hours per accepted design. Regraded on new sequences, "45 of 69 accepted designs fail" within the 32 steps their tests required, and more than a third of speedup attempts end without a faster design. The overall score ranks Sol 5.6 and Fable 5.1 above Astra 6 and Opus 5.5 in all 200 random splits.
- Why it matters: It demonstrates that current coding agents can pass output tests while shipping broken state machines, a failure mode hardware code makes unusually measurable.

### 2611.31522 One Step, Four Clocks: How GUI Agents Fall Out of Step
- Categories: cs.AI
- Published: 2026-11-23
- Source: https://arxiv.org/abs/2611.31522
- Key contribution: Models four events — environment change, observation availability, decision commitment and action receipt (EODA) — and introduces ChronotopeGym to study GUI-agent failures under Paused, Replay and Live execution. Agents can fail in Live despite succeeding when responses remain valid, even when actions meet deadlines; on Moving Balloon, updating a pending click raises success "from 0% to 100% without changing response time". The accelerator-resident controller Chronotope maintains compact interaction history and selectively keeps, updates or redecides pending actions; compared with Agent S3 it reduces median end-to-end latency by "85.5% for a 27B model" and reaches "100% Live success at an 8-second deadline versus 0%".
- Why it matters: It identifies temporal desynchronization, not reasoning, as the dominant GUI-agent failure mode and fixes it without extra reasoning calls.

### 2611.31821 Exploring Multi-Player Social Games as Verifiable Training Grounds for Large Language Models
- Categories: cs.CL, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.31821
- Key contribution: Uses multi-player social games, whose rules give an objective outcome usable as a verifiable reward, as an alternative to LLM judges, which are expensive, noisy and vulnerable to reward hacking. With three social games, SFT and RLVR raise Qwen3-4B's win rate against the much stronger Gemma-3-27B "from 33% to 81%" on the trained games and "from 39% to 54%" on three held-out games, while in-context prompting improves the win rate by only about 6 pp; gains hold across model sizes 1.7B, 4B and 32B. Qualitative analysis shows trained agents share information more openly, check each other's claims against public evidence and coordinate votes.
- Why it matters: It proposes a scalable, judge-free verifiable reward source for social intelligence and shows it generalizes to held-out games.

### 2611.32316 ASTERISM: Do Multimodal LLMs Actually Look at All the Images?
- Categories: cs.CV, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32316
- Key contribution: Audits about 33k items from 19 public multi-image benchmarks and finds that one image or the question alone settles "24.2% of them"; on those items MLLMs recover from one image a median "78% of the accuracy that all images add over the text alone", a single-image shortcut they take even when one image is insufficient. ASTERISM is built from the 19 benchmarks by keeping only items needing more than one image: 18.7k items (2.0k corrected or rewritten) with one format, one scorer and seven task categories, plus ASTERISM-Train with 49k training items and a manually verified ASTERISM-Lite hard subset where the strongest proprietary MLLM scores "68%". Existing RLVR objectives add little to the ASTERISM score because they reward the shortcut; the proposed cross-image credit assignment (CICA) raises it by "2.6 to 6.0 points" on three open-source MLLMs, more than twice the gain of general or vision-specific RL objectives trained on the same data.
- Why it matters: It shows that multi-image evaluation and RLVR training rewards can both be gamed by single-image shortcuts, and provides both the audit and the fix.

### 2611.33012 Can LLM Judges Catch Unsafe Clinical Actions? A Fault-Injection Study
- Categories: cs.AI, cs.CL
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33012
- Key contribution: Injects controlled clinical errors into verified MedAgentBench trajectories — 416 faulty trajectories, eight error categories, six open-weight LLM judges — and compares each faulty trajectory with its correct counterpart to measure genuine error recognition rather than blanket flagging. Judges shown only the final answer cannot distinguish errors that leave it unchanged while flagging "56% of correct trajectories"; with full trajectory information the discrimination score reaches "0.75", and providing actual EHR responses improves discrimination by "0.39". Including the agent's reasoning does not improve overall performance and reduces detection of incorrectly reported clinical values by "0.18"; MedGemma performed worse than a general-purpose model and was the only judge to miss potentially dangerous medication overdoses. The benchmark's original grader accepts all 38 trajectories with an intentionally skipped lab check, while LLM judges plus a rule-based checker detect "97% of injected faults".
- Why it matters: It shows LLM judges alone are unsafe as clinical gatekeepers, and that reasoning traces can reduce judge sensitivity.

### 2611.31931 Scoring What Matters: Exact Feedback Reduction for Language Model Comparison
- Categories: cs.CL
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.31931
- Key contribution: Introduces Contrast-Aware Feedback Acquisition (CAFA), a sampler-agnostic method that identifies which scores a requested linear report actually needs before acquiring feedback, by grouping identical scoring inputs and aggregating their report coefficients, removing queries beyond ordinary caching while preserving the fully scored result. It characterizes necessary and sufficient query sets for exact recovery of sample means, alone or jointly with ordinary sample covariances. On controlled updates CAFA removes "55.8% and 90.1% of the scoring inputs remaining after caching" for Qwen2.5-1.5B-Instruct and SmolLM2-1.7B-Instruct; across three online GRPO trajectories, Independent Star sampling with CAFA achieves "46.1-51.3% lower recorded generation-plus-feedback cost" than independent autoregressive sampling with caching at a common empirical precision threshold (RMS MCSE ≤ 0.04), and all 504 evaluated report cells reproduce fully scored means and covariances to numerical precision.
- Why it matters: It shows a large fraction of benchmark scoring cost is redundant and can be eliminated exactly, not approximately.

### 2611.33050 Worth the Wait? How Response Time and Streaming Shape Judgments of Generative AI Answers and Chatbot Engagement
- Categories: cs.CL, cs.CY
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33050
- Key contribution: Uses three sources of natural variation to test whether delivery format biases blind preference votes. On the French government chatbot arena compar:IA, replaying a stored answer instead of streaming it fresh lowered the answer's chance of winning a decisive blind vote by "25.8 percentage points"; the same stored text won "57% of its decisive votes when streamed and 29% when replayed", and voters called it less complete, more superficial and more often incorrect when replayed. Provider congestion showed slower answers earned no detectable net credit in the vote, but a slower first exchange made visitors less likely to ask a follow-up question (324,029 conversations), and in "4,378,514 WildChat replies" congestion-slowed replies made users less likely to continue.
- Why it matters: It shows blind preference leaderboards systematically reward streamed output and penalize cached output, confounding text quality with delivery mechanics.

### 2611.32143 Calibrated Reading of Latent Reasoning and Communication
- Categories: cs.LG, cs.AI
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32143
- Key contribution: Proposes the Calibrated Latent Reader (CLR), a compact transformer that predicts reasoning outcomes and message content through task-conditioned interactions between states and candidate answers, with source adapters supporting transfer across models and conformal calibration providing coverage and false-alarm guarantees under exchangeability. On two CODI models, CLR improves accuracy over MLP and attention probes by "4-18 percentage points" for final-answer prediction and reference-value membership; on CODI-GPT-2 it matches a 1.7B LatentQA-based verbalizer while using "437-648 times fewer inference FLOPs". On synthetic Qwen3-4B communications, comparing decoded facts with public commitments detects "93.1% of message substitutions at a nominal 5% false-positive rate".
- Why it matters: It makes latent-state inspection cheap and statistically calibrated enough to use as a monitoring tool rather than a curiosity probe.

### 2611.32227 Relational Bottleneck Models
- Categories: cs.CV, cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32227
- Key contribution: Proposes a training-free framework that turns any off-the-shelf LVLM into an inherently interpretable model: Structured Rationale Generation models semantic interactions between visual concepts as subject-predicate-object triplets, and Rationale-Grounded Decoding enforces a strict causal dependency between rationales and the final output by aggregating rationale-conditional next-token distributions via an importance-weighted product-of-experts strategy that strictly excludes the image inputs from the decoding context. Extensive zero-shot evaluations across diverse benchmarks and LVLM backbones show superior interpretability while improving task performance over CBM baselines, entirely without task-specific fine-tuning, addressing the unfaithfulness of standard CoT.
- Why it matters: It offers interpretability for LVLM reasoning that does not require retraining and enforces a measurable causal link between rationale and output.

### 2611.30290 Uncovering Separable and Composable Skill Mechanisms in Vision-Language Models
- Categories: cs.CV, cs.AI
- Published: 2026-11-23
- Source: https://arxiv.org/abs/2611.30290
- Key contribution: Introduces separability (mechanisms contribute primarily to their target skill) and composability (mechanisms combine to support complex tasks) as desiderata for skill localization, and builds the DISCO framework around them, with Separable Head Selection for identification and the first metrics designed to measure separability and composability of identified heads. Experiments on three VLMs and four fundamental visual reasoning skills show DISCO achieves the highest separability, outperforming the strongest baseline by "24.80, 18.38, and 13.75 points across the three models", while also achieving the highest composability on all three models.
- Why it matters: It reframes mechanistic interpretability around diagnostic usefulness rather than head-selection heuristics, with measurable criteria.

### 2611.32969 Eliciting the Recall Capacity of Linear Attention
- Categories: cs.LG
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32969
- Key contribution: Investigates linear attention's disproportionate deficit relative to softmax attention in associative recall through natural language evaluations, synthetic recall tasks and targeted training interventions. In a synthetic setting the authors quantify the role of state size in how many items can be recalled and find a similar empirical scaling across tested linear-attention architectures; testing this relationship reveals that even a single layer at scale can learn to retrieve thousands of associations across long distances. Yet standard LM training does not reliably teach a linear model to copy from context, whereas a comparable softmax model does; strengthening recall supervision via in-context sentence repetition and context-sensitive loss reweighting improves recall-intensive benchmark performance and narrows the long-distance AR gap to the softmax baseline without changing architecture, token budget or optimization steps, at a slight cost to general language modeling.
- Why it matters: It shows the linear-versus-softmax recall gap is mostly a training-signal deficit, not an architectural capacity limit.

### 2611.33030 SALSA: Sampling Adversarial Suffixes from Learned Distributions for LLM Safety Assessment
- Categories: cs.CL, cs.CR
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.33030
- Key contribution: Presents a generative framework that learns a distribution over jailbreak suffixes from optimization-derived attack corpora, enabling efficient sampling-based attacks. On open-source targets it achieves attack success rates comparable to state-of-the-art optimization baselines while reducing generation time "from 3.46s to 0.04s per prompt". In black-box transfer it reaches "99% ASR on GPT-3.5-Turbo" and "45% ASR on GPT-4o", more than doubling the strongest baseline at an equal sampling budget. The paper also offers an intuition for why generative sampling preserves high attack success when the learned suffix distribution is close to the distribution of optimization outputs, framing it as a scalable foundation for continuous vulnerability discovery.
- Why it matters: It turns adversarial suffix discovery from a slow per-target optimization into a cheap reusable asset, which raises the ceiling on continuous red-teaming.

### 2611.31756 TACT-Bench: Testing Adaptive Conversational Threats against Tool-Use Agents
- Categories: cs.AI, cs.CL
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.31756
- Key contribution: Introduces a stateful benchmark built around scenario-specific stories, personas, manipulation tactics and response-adaptive escalation, where each adversarial task targets an action explicitly prohibited by the policy given to the assistant (the policy stays hidden from the attacking user) and is paired with at least one benign counterpart that retains authorized ground-truth actions, enabling the overcautiousness/utility trade-off to be measured via the proposed Paired Selective Trustworthiness (PST) metric. Averaged across 6 models as assistants, TACT-Base raises the Attack-Induced Failure Rate (AFR) "by 17.53% over four compatible attack baselines", and TACT-TrustPrime (an unrelated benign task placed before the attack in the same conversation) raises it "by a further 17.01%". The two evaluated defense methods reduce AFR by only "8.35%-9.41% on average" and do not consistently improve PST.
- Why it matters: It shows current prompt-level defenses barely move adaptive conversational attacks, and that safety must be scored jointly with helpfulness.

### 2611.32710 Red-Teaming a Sovereign LLM, Its Reasoning and Its Training Stages
- Categories: cs.CL, cs.CR
- Published: 2026-11-24
- Source: https://arxiv.org/abs/2611.32710
- Key contribution: Red-teams Apertus v1.5, an open sovereign LLM, and five other model families across six languages and reasoning modes using synthetic personal records and six attack types (direct disclosure, correction baits, yes/no verification, derived-value queries, reasoning leakage, authorisation checks), plus copyright attribution, historical misrepresentation and stereotyping probes. Despite confidentiality instructions, "Apertus 8B and 70B leak information in 96% and 95% of requests, respectively, in correction-bait attacks", and verification and derived-value queries also expose protected information without revealing identifiers; reasoning traces can leak confidential records even when final answers withhold them. Post-training does not consistently improve safety.
- Why it matters: It demonstrates that system-prompt confidentiality is close to worthless against a determined multilingual, reasoning-aware attacker.

### 2611.29977 Conartist: Adaptive Agentic Red-Teaming of Computer-Using Agents against Multi-Step Prompt Injection
- Categories: cs.CR, cs.AI
- Published: 2026-11-23
- Source: https://arxiv.org/abs/2611.29977
- Key contribution: Shows two core harness security mechanisms are vulnerable — consistency checking can be bypassed by embedding malicious actions that look logically consistent with the legitimate task, and risk auditing itself can be exploited to induce additional high-risk operations. Conartist is a cascaded adaptive prompt-injection framework: a goal-pollution stage establishes deceptive causal dependencies between legitimate objectives and malicious operations, then analysis of security-auditing feedback from controlled attack exploration identifies exploitable auditing patterns so the deception can avoid triggering audits or induce extra high-risk operations. Across five backbone models it reaches attack success rates of "32.12% on a 576-instance tool use benchmark and 66.67% in the Reddit GUI benchmark", outperforming the SOTA attack by "14.41 and 29.17" respectively, and analysis of Openclaw yields seven realistic exploitable attack patterns.
- Why it matters: It shows that the defenses meant to stop agent attacks are themselves attack surface, which is a serious change in threat modeling.

## Themes

- **Self-teaching models: the teacher lives inside the model** — 2611.32452 (ELPSD self-distillation beyond the last loop), 2611.31939 (ELGO, GRPO plus extrapolated-loop teacher), 2611.32064 (merge-aware fine-tuning where the shipped quantized weights are the trained weights). All three replace an external verifier or teacher with something internal, and all report concrete benchmark deltas (avg@8 61.15→63.69; 62.32→64.20; Terminal-Bench 2.1 up to +8.4).
- **GRPO's design space, re-derived rather than guessed** — 2611.33064 (group size as variance-ratio estimation), 2611.32013 (critic vs. no critic, 1,200+ runs), 2611.32131 (RL vs. on-policy distillation for effort control), 2611.32687 (module-specific advantages for multimodal RL — 2611.32687 sits at the boundary), plus 2611.32884 (RLVB, where the environment supplies the verification signal). The common thread: reward and advantage design is being made explicit and measurable rather than inherited by convention.
- **Training-time and serving-time numerics must match** — 2611.32064 (loss on rounded merged weights), 2611.32848 (quantization evaluations confounded by measurement artifacts, rho = 0.10 between scorers), 2611.32873 (MXFP4 recipes are format-specific), 2611.32755 (quantization-induced backdoors repaired in weight space). Taken together these argue that instrument error and format mismatch are first-class failure modes, not footnotes.
- **Numeric formats: getting below 4 bits without losing native kernels** — 2611.33080 (Shifter Quantization, 2.71-3.77x prefill at 2-bit), 2611.32873 (MXFP4/NVFP4 recipe interactions, Midmax), 2611.32755 (operator-discrepancy repair for quantization-conditioned backdoors). A coherent cluster where the format itself, the scale policy and the residual error are treated as one design problem.
- **Speculative decoding and serving throughput** — 2611.32269 (Pando noise-coupled draft trees, 5.3x edge speedup), 2611.33004 (LEGOSpec/DFlux, +13.7-34.7% acceptance length), 2611.33111 (draft temperature calibration, +10% acceptance length), 2611.31638 (Wavefront low-rank base + Jacobi refinement), 2611.32954 (LoomKV lossless KV compression, 0.71 of raw BF16 size), 2611.32572 (BRAID-MoE communication overlap, 1.29-1.37x). Together these cover the whole inference stack: draft quality, cache footprint and communication.
- **Attention and context: what sparse selection and long context actually cost** — 2611.32324 (Top-K selection is provably suboptimal, 133.2x KL gap), 2611.32969 (linear attention's recall gap is a training deficit), 2611.32063 (Integral DeltaNet dual-state linear attention), 2611.32423 (Factorized Context Attention, native grid probing, ~10 points over single-pass long video). All four attack the same tension between context reach and inference cost.
- **Agents that must be verified, timed, and recovered** — 2611.32660 (Bathys deep search, 66.51%/80.49% BrowseComp), 2611.31727 (fork() subgraph recovery, 100% vs 55% recovery, 12.7x speedup), 2611.33093 (AIChipBench, 45 of 69 accepted designs fail on regrade), 2611.31522 (Chronotope, four-clock GUI failure model, 85.5% latency reduction), 2611.32037 (online environment repair, reward hacking 36.9%→0.06%, Pass@8 21.7%→46.7%), 2611.31821 (social games as verifiable training, win rate 33%→81%). The recurring lesson: agent failures are dominated by state, timing and reward-channel defects rather than reasoning.
- **Benchmark integrity and judge reliability** — 2611.32316 (ASTERISM, 24.2% of multi-image items solvable from one image), 2611.33012 (LLM judges flag 56% of correct clinical trajectories; discrimination 0.75 with full trajectories), 2611.33050 (streaming vs replay shifts blind votes by 25.8 percentage points), 2611.31931 (CAFA removes 55.8-90.1% of redundant scoring inputs exactly). All four show the measurement apparatus itself shaping the conclusions being drawn.
- **Safety of models and of autonomous agents** — 2611.33030 (SALSA, 99% ASR on GPT-3.5-Turbo, 0.04s per prompt), 2611.31756 (TACT-Bench, defenses cut AFR only 8.35-9.41%), 2611.29977 (Conartist, 32.12%/66.67% ASR; defenses are attack surface), 2611.32710 (Apertus 8B/70B leak in 96%/95% of correction-bait attacks). A cluster arguing that current prompt-level defenses are close to ineffective against adaptive, reasoning-aware attackers.
- **Interpretability that is calibrated and actionable** — 2611.32143 (CLR, 93.1% detection at 5% FPR, 437-648x fewer FLOPs than a verbalizer), 2611.32227 (Relational Bottleneck Models, training-free faithful rationale decoding), 2611.30290 (DISCO, separability/composability metrics, +24.80/+18.38/+13.75 points). The shared move is from post-hoc description to quantified guarantees.

Collision check: 0 IDs collide with known_ids.txt
