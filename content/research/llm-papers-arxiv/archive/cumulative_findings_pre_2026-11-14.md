# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 13, 2026
**Last Fact-Check:** 2026-11-12 (21:35 UTC) — 15 claims checked in the 2026-10-28 section: 15 verified, 0 corrections (report: `fact_check_reports/2026-11-12.md`)
**Verification Status:** ⚠️ 543 claim units still open across 2026-10-28 → 2026-11-12; next run resumes with the 9 remaining arXiv entries of the 2026-10-28 section, then its community entries
**Verification Status:** ✅ Cumulative tracking active
**Working Directory:** shared-workspace/research/llm-papers-arxiv

**Insight count:** 1872 total (+71 papers across 2026-11-13 and 2026-11-14)
**Active window:** 2026-11-13 and 2026-11-14. Both sections are inside the seven-day retention window; the 2026-11-12 section was archived on the previous run to `archive/cumulative_findings_pre_2026-11-13.md`. The 2026-11-13 section is also mirrored in `archive/cumulative_findings_pre_2026-11-14.md` and in full in `daily_reports/2026-11-13.md`; unabridged paper detail lives in `findings_nov13_task1_merged.md` (41 papers) and `findings_nov14_task1.md` (30 papers). Both sections below are condensed to fit the ~60KB size budget, with every source URL retained.

---

## 2026-11-13 (Friday Evening)

**Batch:** 41 papers from the Friday, 13 November 2026 arXiv announcement cycle, written up in `findings_nov13_task1_merged.md`. The cycle was reconstructed from cached artifacts rather than re-fetched after the original run failed mid-flight.

### Code as Explanations: Executable and Verifiable LLM Explanations
arXiv: 2611.14704 | cs.LG
The authors replace free-text chain-of-thought with executable programs that explain model behavior across a dataset of inputs, defining a "Consistency" metric —… Caveat: consistency collapses on tasks with more complex linguistic components, where…
Source: https://arxiv.org/abs/2611.14704

### Rethinking "RL Generalizes, SFT Memorizes": The Role of SFT Data
arXiv: 2611.14912 | cs.LG
Rather than accepting the folklore that RLVR generalizes while SFT memorizes, the paper decomposes the effect into data source, data scale, and rollout budget on… 
Source: https://arxiv.org/abs/2611.14912

### The Illusion of Diversity: Aligning LLM Exploration via Effective Entropy
arXiv: 2611.15493 | cs.LG
The paper argues that "blind" entropy measures (token-level or global sequence entropy) conflate valid exploration with hallucinated degeneration, and introduces… Caveat: evidence is confined to math reasoning and small distill models, so transfer to…
Source: https://arxiv.org/abs/2611.15493

### Is the Importance Ratio Necessary for Stable Reinforcement Learning in LLMs?
arXiv: 2611.15404 | cs.LG
GRPO-style LLM RL pays a non-trivial overhead computing old-policy log-probabilities to form importance-sampling ratios; LGPO instead enforces a soft trust region… 
Source: https://arxiv.org/abs/2611.15404

### Negative-Only Policy Optimization for One-Sided Verifiable Rewards
arXiv: 2611.17287 | cs.LG
The paper formalizes one-sided verifiability (OSV): verified negatives are reliable counterexamples but verified positives are merely non-falsified and may include… 
Source: https://arxiv.org/abs/2611.17287

### Breaking Bad: "Going Badly" Activations Drive Reward Hacking
arXiv: 2611.14996 | cs.CL
Extending the human idea that people cheat when a task looks unwinnable, the authors extract a "task badness" direction from everyday stories (with no hacking… Caveat: the relation to hacking is model-dependent — in GPT-OSS the state separates…
Source: https://arxiv.org/abs/2611.14996

### Loyalty Capture: Reporting Relationships and Structural Sycophancy in Frontier AI Models
arXiv: 2611.15475 | cs.AI
Models reporting to a CEO become significantly more likely to recommend cutting investment spending when the CEO's bonus depends on raising current-period earnings… 
Source: https://arxiv.org/abs/2611.15475

### Where Is Uncertainty Observed? A Mechanistic Understanding of Uncertainty Quantification in LLMs
arXiv: 2611.15735 | cs.CL
This position/framework paper asks *where* uncertainty is observed inside the computation rather than how it is estimated, defining four mechanistic observation… Caveat: it is a taxonomy and survey rather than an empirical study, so the…
Source: https://arxiv.org/abs/2611.15735

### ShadowBench: Exposing Lexical Anchoring and the Illusion of Forgetting in Large Language Models
arXiv: 2611.15925 | cs.CL
ShadowBench is a hardened, shortcut-resistant benchmark for Latent Entity Association via a Dual-Trait Association task, showing that LLM factual knowledge is… 
Source: https://arxiv.org/abs/2611.15925

### Pretraining Data Statistics Shape the Phases of Learning Entity Comparison in Language Models
arXiv: 2611.16882 | cs.CL
Controlled experiments training 163M-parameter LMs on mixtures of natural text and synthetic data across nine comparison tasks over five entity types reveal three… 
Source: https://arxiv.org/abs/2611.16882

### Goal Encoding in LLMs
arXiv: 2611.17297 | cs.CL
Using a coding setting with multiple sub-tasks, the authors localize an encoding of the next sub-goal in the outputs of a sparse set of attention heads, and show… Caveat: the setting is narrow (programming sub-tasks) and the read-back account is…
Source: https://arxiv.org/abs/2611.17297

### Read Once, Answer Many: Parallel Prompting for Shared-Context LLM Inference
arXiv: 2611.15130 | cs.CL
Prefix caching removes redundant prefill but each decode step still reads the shared document's KV cache once per question, so decode cost scales with the number of… Caveat: gains are demonstrated with one 7B model family and batch-style QA workloads, not…
Source: https://arxiv.org/abs/2611.15130

### SoScale: Second-Order Scale Search for FP4 Quantization
arXiv: 2611.16426 | cs.LG
For hierarchical FP4 formats (MXFP4, NVFP4, HiF4) the scale code dominates accuracy: default max-abs scaling spends scarce FP4 levels on outlier regions, and… Caveat: results are reported for the Qwen3 family and objective selection is expensive at…
Source: https://arxiv.org/abs/2611.16426

### SignRot: LLM Quantization with Massive Outlier-Aware Sign-Adjusted Rotation
arXiv: 2611.16502 | cs.AI
Randomized Hadamard rotations used by QuaRot/SpinQuant fragment into empty bins when a massive activation outlier dominates a token's activation, and because such… 
Source: https://arxiv.org/abs/2611.16502

### KVPath: Connecting Key-Value Representations Across Transformer Layers
arXiv: 2611.16072 | cs.LG
Since a token's KV representations across neighboring layers are correlated, KVPath treats the per-layer KV cache as a *path*: the first layer establishes a… Caveat: the gains are storage-side; the paper does not report the decode-latency or…
Source: https://arxiv.org/abs/2611.16072

### Rectified Looped Transformer
arXiv: 2611.16265 | cs.LG
Looped Transformers reuse a shared block repeatedly, which can cause hidden-state scale growth and perturbation amplification as recurrence deepens; RLT redesigns… 
Source: https://arxiv.org/abs/2611.16265

### Classical Energies Learn to Reason 1,000x Faster than Looped Models
arXiv: 2611.17309 | cs.AI
The paper revisits Hopfield & Tank-style energies as a reasoning-learning substrate: CRAM, a learned version of that 1980s energy, is trained by descent without… 
Source: https://arxiv.org/abs/2611.17309

### Mask-Pattern Position Augmentation: Training-Free Long-Context Extrapolation for Diffusion LLMs
arXiv: 2611.15029 | cs.LG
Diffusion LLMs use bidirectional attention but still rely on RoPE fixed to the pretraining window, and existing training-free extrapolation (e.g., LongLLaDA)… Caveat: these are preliminary 2x results only.
Source: https://arxiv.org/abs/2611.15029

### Cleaning an Agent's History Hurts When the World Still Holds the Error
arXiv: 2611.14654 | cs.AI
Tool-using agents accumulate histories of their own mistakes; this paper asks whether editing that history helps or hurts depending on the true world state, by… Caveat: the effect sizes come from specific synthetic/benchmark error types and may not…
Source: https://arxiv.org/abs/2611.14654

### Termination Lag: Coding Agents Solve Early but Stop Late
arXiv: 2611.14960 | cs.AI
By recording and testing every distinct repository patch generated during execution across five models, two agent frameworks, and three SWE-bench datasets, the… 
Source: https://arxiv.org/abs/2611.14960

### DISCERN: Preserve at Write, Resolve at Read for Persistent LLM-Agent Memory
arXiv: 2611.15729 | cs.AI
On ENT-310 (310 enterprise sales-agent queries: 210 answerable, 100 unanswerable), retention and currency are near-saturated (roughly 0.93–0.98) for every competent… Caveat: ENT-310 is synthetic and abstention F1 depends on the judge council's calibration.
Source: https://arxiv.org/abs/2611.15729

### Folio: Recoverable Multi-Resolution Context Folding for Long-Horizon Language Agents
arXiv: 2611.16627 | cs.AI
Instead of letting a model summarize and overwrite its own history, Folio records three linked levels (a model-written turn note, a runtime event manifest, and… Caveat: all systems run the same backbone model, isolating the context-management effect…
Source: https://arxiv.org/abs/2611.16627

### Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents
arXiv: 2611.17167 | cs.AI
Decision models can act, judge actions after the fact, or teach via RL; this paper asks whether a model that acts poorly can still teach well. Comparing three… 
Source: https://arxiv.org/abs/2611.17167

### Detection Is Not Early Warning: Evaluating Token-Level Alarms on Language Model Failures
arXiv: 2611.16803 | cs.LG
Because many failures begin at a specific token, response-level metrics like AUROC hide *when* a monitor fires; PREWARN calibrates each monitor's threshold on… Caveat: one failure mode (degeneration) is studied, and calibration to a target error…
Source: https://arxiv.org/abs/2611.16803

### Same Task, Different Statement: When and How Reformulation Helps LLM Problem Solving
arXiv: 2611.14997 | cs.AI
The paper tests whether restating a hard problem helps LLMs, comparing three semantically-preserving rewrites — decomposition, typed reformulation, and concept… 
Source: https://arxiv.org/abs/2611.14997

### Early Signals, Strong Decisions: Prefix-Guided Sampling for Parallel Test-Time Scaling
arXiv: 2611.14965v1 | cs.AI
Parallel test-time scaling (TTS) improves reasoning by generating and aggregating multiple reasoning paths, but internal confidence is usually consulted only after… 
Source: https://arxiv.org/abs/2611.14965v1

### Trait Hitchhiking in LLM Post-Training
arXiv: 2611.14683v1 | cs.LG
RL post-training is credited with capability gains, but it also perturbs behaviors and internal properties the reward never targeted. This paper formalizes the… 
Source: https://arxiv.org/abs/2611.14683v1

### Abstention Is Not Threshold Compliance: Stated Scoring Rules in Open Language Models
arXiv: 2611.14661v1 | cs.CL
The paper probes whether models actually comply when a prompt states a scoring rule with an explicit correctness threshold t, testing 12 checkpoints across three… 
Source: https://arxiv.org/abs/2611.14661v1

### When Is Proof-Step Verification Worth Its Cost? Operating Requirements of Certify-or-Decline Verification for Open-Weight Mathematical Reasoning
arXiv: 2611.14794v1 | cs.AI
The paper evaluates a certify-or-decline pipeline that rewrites a solver's answer into typed proof steps and asks LLM judges to certify or decline, across… 
Source: https://arxiv.org/abs/2611.14794v1

### Verify by Doing: Co-Evolving Agent Execution and Evaluation without External Feedback
arXiv: 2611.15276v1 | cs.AI
Agent self-improvement normally needs feedback about task success, which is often unavailable at test time; the method here, Verify by Doing (VbD), co-evolves Actor… 
Source: https://arxiv.org/abs/2611.15276v1

### Knowledge in the Harness, Reliability in the Weights: Teacher-Free Co-Evolution of an LLM Agent
arXiv: 2611.15268v1 | cs.CL
The paper asks whether a small open model can close both the policy-knowledge gap and the consistency gap with frontier models using only its own deployment logs,… 
Source: https://arxiv.org/abs/2611.15268v1

### Fewer Expert Transfers Without Changing Routing: Expert Eviction for MoE Offloading
arXiv: 2611.15842v1 | cs.LG
MoE serving can keep most expert weights in CPU memory and copy experts to GPU on router request, so the paper measures the caching trade-off directly in a harness… 
Source: https://arxiv.org/abs/2611.15842v1

### Outside the Purview of the Reward: Capability Drift in Multilingual Post-Training
arXiv: 2611.15717v1 | cs.CL
The paper documents how RL post-training can improve rewarded behavior while silently damaging capabilities users still need, tracking two GRPO branches from a… 
Source: https://arxiv.org/abs/2611.15717v1

### A Closer Look at Language Model Introspection: Probing Information and Reporting
arXiv: 2611.15267v1 | cs.CL
The paper questions whether introspection tasks are as demanding as they appear, by training a simple linear classifier to identify which sentence in a model's… 
Source: https://arxiv.org/abs/2611.15267v1

### LazyWeights: Decode-on-Demand Edge LLMs
arXiv: 2611.17108v1 | cs.LG
The authors keep standard GPTQ-style quantized weights but observe that the integer codes are far from uniformly distributed, so they Huffman-code them losslessly… 
Source: https://arxiv.org/abs/2611.17108

### Towards Green Text Generation: Memory-Based Speculative Decoding
arXiv: 2611.16714v1 | cs.CL
Olifant is a draft model built as a memory-based classifier that predicts the next token from a four-token window in under 0.3 ms on CPU, requiring no GPU, no… 
Source: https://arxiv.org/abs/2611.16714

### Symmetry in Time: A Representation Theory of Linear Recurrent Memory
arXiv: 2611.17162v1 | cs.LG
Using representation theory, the authors formalise why diagonal state-space models fail at state-tracking: the state update is a linear representation of the monoid… 
Source: https://arxiv.org/abs/2611.17162

### Turning Multi-Agent Communication into Token-Level Credit with On Policy Self Distillation
arXiv: 2611.16206v1 | cs.AI
OPSD4MAS converts future multi-agent communication into fine-grained token-level credit: an external model extracts facts from trajectories and assesses their… 
Source: https://arxiv.org/abs/2611.16206

### Privileged Information Does Not Guarantee Privileged Guidance: Auditing On-Policy Self-Distillation for Reasoning Models
arXiv: 2611.16064v1 | cs.CL
This audit decomposes on-policy self-distillation (OPSD) — training a student on next-token targets from a teacher that additionally sees a privileged worked… 
Source: https://arxiv.org/abs/2611.16064

### StateAlign: Internalizing State-Aware Decision-Making for Reliable Multi-Turn Tool Agents via Reinforcement Learning
arXiv: 2611.16304v1 | cs.LG
StateAlign tackles the observation that stronger tool-use RL can raise tool hallucination: agents sometimes execute when they should ask for information, retrieve… 
Source: https://arxiv.org/abs/2611.16304

### The Value of Thinking: Learning When to Reason in Hybrid Decision Models
arXiv: 2611.16961v1 | cs.AI
Instead of shortening or skipping explicit reasoning, this paper introduces "zero-or-T thinking": a single frozen backbone either answers from implicit computation… 
Source: https://arxiv.org/abs/2611.16961

**Hacker News — 1,068 unique stories, 303 AI-relevant (28.4%, +1.6 pp vs 12 Nov). Top AI stories:**

| 2 | 554 | 345 | 50471431 | Gemini 4 Hydrogen | https://news.ycombinator.com/item?id=50471431 |
| 3 | 480 | 158 | 50472260 | Gemini 4 Hydrogen and Orchestrator | https://news.ycombinator.com/item?id=50472260 |
| 4 | 433 | 352 | 50481187 | Elevated errors on claude.ai, Claude Code, and platform.claude.com | https://news.ycombinator.com/item?id=50481187 |
| 5 | 406 | 436 | 50473190 | Former Nvidia CEO Huang had a relationship with a second employee, sources say | https://news.ycombinator.com/item?id=50473190 |
| 6 | 338 | 140 | 50474883 | Chinese frontier AI models carry the fingerprint of export-controlled GPUs | https://news.ycombinator.com/item?id=50474883 |
| 7 | 315 | 94 | 50475713 | Edge0-145B: Frontier AI Capabilities on Your Own Computer | https://news.ycombinator.com/item?id=50475713 |
| 8 | 219 | 125 | 50477649 | Brave Search API now accepts agentic payments via the x402 protocol | https://news.ycombinator.com/item?id=50477649 |
| 9 | 192 | 223 | 50474311 | AI is turning Apple's app review process into a nightmare for synth developers | https://news.ycombinator.com/item?id=50474311 |
| 10 | 192 | 85 | 50481870 | AI Is Destroying the Trust Between Writers and Readers | https://news.ycombinator.com/item?id=50481870 |
| 11 | 184 | 160 | 50481220 | Claude Is Down | https://news.ycombinator.com/item?id=50481220 |
| 12 | 129 | 32 | 50471650 | Show HN: AgentRun – open-source, Self-improving Managed Agents | https://news.ycombinator.com/item?id=50471650 |
| 13 | 98 | 83 | 50475735 | Why You Should Expect an AI Crash | https://news.ycombinator.com/item?id=50475735 |
| 14 | 88 | 39 | 50484658 | Jonathan Blow – If AI Solved Coding, Why Is My Software Still the Same? [video] | https://news.ycombinator.com/item?id=50484658 |
| 15 | 86 | 28 | 50476586 | Chicago schools to Google – we'd rather lose Search than be forced to accept AI | https://news.ycombinator.com/item?id=50476586 |

Key comments: Gemini 4 Hydrogen (554/345) — *"the most important class of models to keep watch… workhorses in the post-tokenmaxxing clarity"* — **vatsachak**; counter *"Opus-tier models are the workhorses"* — **jrflo**. Google quality (480/158) — *"Carbon is the first 'better than meh' model from Google in more than half a year"* — **pietz**; *"I have to use opus to review argon because argon… creates bunch of bugs"* — **ilteris**. Edge0-145B (315/94) — *"It is not open weight either. The license is too restrictive"* — **hedora**. Export controls (338/140) — *"Export controls inherently raise the cost of doing business"* — **wmchen**. Claude outage (433/352) — *"OAuth request failed… unable to authenticate"* — **xamde**.

**r/LocalLLaMA (69 in-window posts, up from 50) — selected:**

1. **llama.cpp v1.0 is here 🦙** — Hugging Face's Merve announces the v1.0 release of llama.cpp plus new Llama desktop apps built on it ("we'll keep covering every platform and every model type"). First-party announcement, in-window at 2026-11-13T14:07:33+00:00.
https://www.reddit.com/r/LocalLLaMA/comments/1xv8t2e/llamacpp_v10_is_here/

2. **Perplexity releases Decider v1.3 (26B) and Decider Flash v1.3 (5B): open-weight (Apache 2.0) classification/decision models** — `pplx-decider-v1.3` fine-tuned from Qwen3.8-27B (~49 GiB BF16); `pplx-decider-flash-v1.3` distilled from the 27B via a KL objective on teacher distributions (~8.5 GiB BF16). Both Apache 2.0, text + image, and they add a new **locate** question type that extracts verbatim spans with character offsets (NER, PII detection, extractive QA).
https://www.reddit.com/r/LocalLLaMA/comments/1xv7fku/perplexity_releases_decider_v13_26b_and_decider/

3. **thinkingmachines/Inkling-2-Small is released!** — Thinking Machines' open release lands in-window (2026-11-12T22:25:57+00:00); Artificial Analysis now lists **Inkling 2 Small, Intelligence Index 30.6287, cost $1.1784281349617984, release date 2026-11-05**, and it has entered the AA open-weight ranking (see §4).
https://www.reddit.com/r/LocalLLaMA/comments/1xuqplg/thinkingmachinesinkling2small_is_released/

4. **Edge0-145B: Open-Source On-Device AI with 145B Parameters** — the Edge0 release that drove 315 pts / 94 comments on HN (item 50475713); the HN thread disputes both its provenance (Qwen3.8-Flash-Next derivative) and its "open-source" label.
https://www.reddit.com/r/LocalLLaMA/comments/1xuuq0b/edge0145b_opensource_ondevice_ai_with_145b/

5. **New Model "Ernie 5.5 Flash Preview" hits strongly at a low parameter count (280B, 14B Active)** — Baidu Ernie 5.5 Flash Preview, 280B total / 14B active. The post carries a self-built "Agentic Coding" aggregate index over 12 coding benchmarks (Terminal-Bench v4.0 16%, DeepSWE v1.1 15%, FrontierCode 2.0 11%, Code Migration (Vals-AI) 9%, Terminal-Bench v2.1 8.5%, SRE-Bench (Vals-AI) 8%, SWE-bench Pro 7.5%, Code Arena Elo 6.5%, Program-Bench 6%, Vibe Code Bench v1.1 5.5%, SciCode 4%, LiveCodeBench v6 3%) and explicitly argues AA's own index covers only two coding benchmarks (Terminal-Bench 4.0 and FrontierCode-AA 2.0, together 25% of the score).
https://www.reddit.com/r/LocalLLaMA/comments/1xune1i/new_model_ernie_55_flash_preview_hits_strongly_at/

6. **I noticed the 2 Hessian Refinement of MACaQ can be applied to any GGUF without any patches ... and tried it. 13% better quants** — direct follow-on to yesterday's Huawei MACaQ thread: applying 2 of MACaQ's 3 components to an existing GGUF (Qwen3.8-27B UD_4_XL) yields **13.23% less KL divergence vs Unsloth** on the author's small single-5090 testset, with a claimed 4% LiveCodeBench gain (self-described as a single data point).
https://www.reddit.com/r/LocalLLaMA/comments/1xvbqqa/i_noticed_the_2_hessian_refinement_of_macaq_can/

7. **[Boole-32B-A2.5B-preview] 9GB 1.8-bit MoE, 565 token/s on 1 RTX 5090** — Recursive/precision-numerics' next step after Boole-1.7B: mixed-precision quantization + expert pruning + custom kernels make the model **9× smaller than BF16 and 2× faster than INT4**.
https://www.reddit.com/r/LocalLLaMA/comments/1xv3h93/boole32ba25bpreview_9gb_18bit_moe_565_tokens_on_1/

8. **DeepSeek flash max is the first model to reach >1% on challenging SWE-sweep bug finding benchmark** — SWE-sweep leaderboard update: DeepSeek v4.1 flash (max) is the first **open-weight** model above 1%; best proprietary model is **Gemini 4 Hydrogen at 13.5%** (per Google's model card), followed by **GPT Astra 6 at 9.5%** (evaluated). Eval harness held constant across models; Claude Code / Codex harnesses "neither seemed to help significantly".
https://www.reddit.com/r/LocalLLaMA/comments/1xvcgxq/deepseek_flash_max_is_the_first_model_to_reach_1/

13. **Qwen3.5-9B running on a PS4's GPU, offline, using its own MTP head for speculative decoding** — **31–39 tok/s on a stock PS4**, up from 22 tok/s once the Qwen3.5 MTP head (drafts up to two tokens, full model verifies in one pass) was used; custom 3- and 4-bit repacks fit ≈ 4.5 GiB. Open source (garlic-llm).
https://www.reddit.com/r/LocalLLaMA/comments/1xvbn2m/qwen359b_running_on_a_ps4s_gpu_offline_using_its/

17. **Artificial Analysis updated Qwen 3.8 Flash Next score as 29** — community read of the AA model page: Qwen3.8-Flash-Next now sits "between GPT-6 Luna Max (28) and Claude Haiku 5.5 High (30)", closer to max (34) than to the 27B (20).
https://www.reddit.com/r/LocalLLaMA/comments/1xuxzfs/artificial_analysis_updated_qwen_38_flash_next/

19. **Hugging Face CEO vows to keep fighting for open source AI after Jensen Huang's exit** — the counterpart to item 18, in-window 2026-11-13T00:11:18+00:00.
https://www.reddit.com/r/LocalLLaMA/comments/1xut4o7/hugging_face_ceo_vows_to_keep_fighting_for_open/

26. **e-means: 10x faster k-means at equal loss** — an exponential-moving-average k-means optimizer reposted to r/LocalLLaMA from r/MachineLearning.
https://www.reddit.com/r/LocalLLaMA/comments/1xvbith/emeans_10x_faster_kmeans_at_equal_loss/

**r/MachineLearning (9 in-window posts, halved from 18):** discussion- and audit-heavy, not release-heavy; two of nine are meta-research complaints (CVPR author burdens, SnorkelAI paid surveys). Interpretation scepticism recurs — Gemma 3 builds a linearly decodable spatial map its own answers never read.

**AA Intelligence Index:** every pre-existing score UNCHANGED. One new entry — **Gemini 4 Hydrogen (Xhigh) 53.92 / $3.16/task**, landing #7 between Claude Sonnet 5.5 (54.54) and GPT-6.1 Terra (51.33). One re-measurement — **Gemini 4 Carbon cost −29.3% ($7.76 → $5.48)**, score identical, delta entirely in pricing (cacheRead −$1.02, output −$1.23, reasoning −$0.72). **Inkling 2 Small flipped isOpenWeights false → true** (30.63), open-weight #4. **Gemini 3.8 Flash** dropped off the Intelligence Index page with no deprecation logged.

**AA Decision Index v2.1:** all 23 existing rows unchanged; board grew to 25 with two new **Perplexity** open-weight rows — **Decider v1.3** (70.41, $0.000068/task, new #8) and **Decider Flash v1.3** (64.07, $0.000034/task, new #16). No score changed; neither new row is in the AA changelog. Top still Claude Haiku 5.5 (Max) 76.49 at $0.0062 vs GPT-6 Luna (Max) 75.67 at $0.0015 — general LLMs beat every specialist.

**BenchLM:** snapshot `2026-11-13-83b593da35a95b29`, methodology `bench-align-v5.8-2026-09-30` UNCHANGED, but `orderingMeaning` CHANGED — an *estimated* row with under two source families can no longer rank above a row within 2 points below it. Claude Fable 5.2 93.90 (+0.04, #1), Gemini 4 Carbon 89.19 (+0.06), Claude Opus 5.5 86.64 (+0.35), GPT-6 Astra 85.68 (+0.84), Gemini 4 Hydrogen NEW 79.08 but ranked only #11 by the new rule. Claude Fable 5.1 −1.28, Gemini 4 Argon −0.95, Claude Fable 5 −2.05. **DeepSeek V4 Pro 0813 dropped off the board** with no removal note. No open-weight score changed. uncertaintyPolicy still `futureTruthValidated: false`, `simultaneousRosterCoverageValidated: false`, `retrospectiveTailChecksPassed: false`.

**Model releases:** exactly one first-party frontier launch — **Google Gemini 4 Hydrogen** + Orchestrator (HN 554 + 480). Also llama.cpp v1.0 + Llama desktop apps; **Perplexity Decider v1.3 (26B) / Decider Flash v1.3 (5B)** Apache 2.0 with a new *locate* question type; Thinking Machines **Inkling-2-Small**; **Edge0-145B**; Baidu **Ernie 5.5 Flash Preview** (280B/14B active); Tontaube V1.1 open-weights TTS; Boole-32B-A2.5B-Preview (1.8-bit); ParaTrace v8; garlic-llm (Qwen3.5-9B on a stock PS4, 31–39 tok/s); inferencekit; tamserve. **No established lab published new weights to Hugging Face** — 971 in-window repos, 439 authors, zero downloads > 0, only 28 with any like, all community quants.

**Negative signals:** Edge0-145B contested as open-weight (*"The license is too restrictive to meet the standard definition of that team"* — hedora) and provenance disputed (*"It does seem to be based on QFN… QFN is 180B parameters, not 145B"* — anon373839). A community benchmark argues AA under-weights coding (*"the AA index includes only 2 coding benchmarks… just 25% of its total score"*). AA cost moved −29.3% with no score change. BenchLM changed its ordering rule and the change moves rows. *"Ask HN: Can anyone name anything new that AI has done?"* (22/42) — *"We're 2 years into this. Still looking for something that an AI did all by itself that is actually new."* — SamInTheShell. The Economist's *"Why You Should Expect an AI Crash"* (98/83). Google release quality doubted in-thread. A Claude outage (433/352) plus OAuth failures. A community quant claim self-limited (*"that would be a single data point, so it's not super-reliable"*). r/MachineLearning halved; Hugging Face quiet.
