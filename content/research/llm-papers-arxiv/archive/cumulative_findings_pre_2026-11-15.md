# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 14, 2026
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

## 2026-11-14 (Saturday Evening)

**Batch:** 30 papers from the same Friday, 13 November 2026 arXiv announcement cycle — arXiv does not publish a separate weekend cycle, and the cached listing still reads "Showing new listings for Friday, 13 November 2026". The run screened the cached current listing plus the leftover backlog while explicitly excluding every arXiv id already reported in earlier findings, archives or daily reports; all 30 ids are new to the cumulative record. Write-up lives in `findings_nov14_task1.md`. The community and leaderboard section was reconstructed in the main agent from cached primary-source artifacts under `tmp/nov14/t2/` (Algolia HN API, Reddit RSS, AA homepage payload + Decision Index, BenchLM JSON, HF models API) after the delegated Task 2 worker completed its fetches but exited before writing its findings file.

### Early Stopping in Large Reasoning Models: A Survey and Empirical Audit of Efficiency and Reliability
arXiv: 2611.00166 | cs.AI
Reasoning models gain accuracy by emitting longer traces, but much of that compute may be avoidable, so the paper audits early-stopping methods by charging for the cost of the stop decision… Caveat: the audit covers five models and a shared replay protocol; the correctness drop at later…
Source: https://arxiv.org/abs/2611.00166

### CARE-PO: Controllable Tool-Call Efficiency for LLM Agents
arXiv: 2611.12125 | cs.LG
A step-level diagnosis of Qwen3.5 trajectories at two model sizes on GAIA finds that most trajectories contain removable tool calls, at a similar rate at both sizes — but standard… Caveat: on four held-out multi-hop benchmarks the result is size-dependent — at 9B both operating…
Source: https://arxiv.org/abs/2611.12125

### BunshinRL: Whole-Workspace Forking for Agentic Reinforcement Learning Rollouts
arXiv: 2611.10453 | cs.AI
Agentic RL rollouts interleave model reasoning with tool calls in persistent workspaces, so scaling them incurs heavy memory cost for concurrent environments while slow tool calls delay… Caveat: gains are reported as "up to" percentages across configurations; the implementation depends…
Source: https://arxiv.org/abs/2611.10453

### Shortcuts and Boundaries: Verifiable RL Misalignment and Contextual Safety Learning
arXiv: 2611.12865 | cs.AI
The paper studies reward-driven misalignment in RL agents via verifiable reward–context conflicts, where compliant completion is feasible but executable violations earn more reward than any… Caveat: results come from synthetic conflict-encoded environments rather than deployed production…
Source: https://arxiv.org/abs/2611.12865

### From Delegation to Coordination: Learning Efficient Multi-Agent Deep Research
arXiv: 2611.17041 | cs.MA
Multi-agent deep-research systems delegate subtasks to keep long tool traces out of the main agent's context, but delegation only pays off when task allocation and subtask execution are… Caveat: the rubric is a training-time heuristic and the gains are modest in absolute terms (2.49…
Source: https://arxiv.org/abs/2611.17041

### DecArena: Evaluating Large-Scale Decentralized Multi-Agent Collaboration
arXiv: 2611.15521 | cs.MA
Decentralized multi-agent systems lack the global orchestrator that centralized ones rely on, so agents must proactively discover non-local tools and skills and collaborate with peers under… Caveat: the benchmark uses synthetic distributed tool calling, so real-world decentralized…
Source: https://arxiv.org/abs/2611.15521

### Axion 1.0: Open Agent Foundation Models, Simplified
arXiv: 2611.03233 | cs.AI
Axion 1.0 is a fully open agent foundation model trained in only three stages — two lightweight supervised fine-tuning stages followed by reinforcement learning — with no dedicated… Caveat: the abstract reports benchmark competitiveness qualitatively without naming scores, model…
Source: https://arxiv.org/abs/2611.03233

### AutoQS: Automated Quantization Strategy Design with Large Language Models
arXiv: 2611.11975 | cs.AI
Quantization cuts LLM deployment cost, but effective strategies must balance model quality and storage, and LLM-driven search must find good strategies within a limited evaluation budget —… Caveat: evaluated on a single 7B model with weight-only, four-bit group-size search; the accuracy…
Source: https://arxiv.org/abs/2611.11975

### Recompute or Restore? Host-Tier KV for Multi-Model Agent Workflows on a Static-Graph NPU Serving Stack
arXiv: 2611.15126 | cs.DC
Agent workflows issue dependent model calls sharing long context prefixes, so serving efficiency depends on reusing the KV cache of those prefixes; on accelerators that compile graphs ahead… Caveat: results are tied to one NPU stack and runtime version, and mixed/bursty workloads remain…
Source: https://arxiv.org/abs/2611.15126

### Reducing Batch Makespan for LLM Agent Workloads through Inference-Environment Coordination
arXiv: 2611.16661 | cs.DC
Agent tasks alternate between LLM inference and environment interaction, so the paper targets batch makespan — the time to complete all tasks in a batch — with coordinated optimizations… Caveat: gains depend on replay fidelity — ablations use recorded environment responses and…
Source: https://arxiv.org/abs/2611.16661

### Smart Model Routing for Order-of-Magnitude LLM Cost Reduction
arXiv: 2611.15911 | cs.DC
Frontier LLMs cost per token often more than an order of magnitude above smaller task-adequate models, so the paper develops a formal cost–quality optimization framework for routing each… Caveat: the headline order-of-magnitude saving is an analytical/numerical result under stated…
Source: https://arxiv.org/abs/2611.15911

### GC-MoE on SM120: Overlapping Expert-Parallel Token Dispatch with Warp-Level FP8xFP4 Block-Scaled MMA on Consumer Blackwell
arXiv: 2611.16219 | cs.DC
Expert-parallel MoE decoding is latency bound because each layer serializes token exchange, a grouped GEMM over routed experts and a combine, while only a few tokens per rank are in flight;… Caveat: consumer-only PCIe interconnect and SM120-specific kernel work; the speedups are measured…
Source: https://arxiv.org/abs/2611.16219

### Starscream: Reimagining LLM Sharding on AMD Instinct GPUs with GPU Partitioning
arXiv: 2611.15951 | cs.DC
As GPUs grow larger, pronounced non-uniform memory access (NUMA) characteristics challenge existing LLM frameworks, and chiplet-based designs such as AMD Instinct MI300X add GPU… Caveat: the evaluation is AMD-specific and centred on tensor parallelism; gains are reported as…
Source: https://arxiv.org/abs/2611.15951

### When Evaluators of AI Agents Disagree: An Empirical Study of Native Scoring, LLM Judges, and Commit-Boundary Checks on tau2-bench
arXiv: 2611.14581 | cs.SE
Benchmarks compare a tool-using agent's final state against a gold answer, while deployed services rely on an LLM judge reading the transcript — yet practice treats the two as… Caveat: two domains and 2,160 episodes; the forbidden-write rate (11.1%) is high but the analysis…
Source: https://arxiv.org/abs/2611.14581

### Copies Are Not Confirmations: How News Duplication Fools LLM Judges and Continual Learners
arXiv: 2611.09203 | cs.LG
A model that keeps learning from news sees the same claim repeatedly, but many reports are copies of one source (wire stories, in-group sharing, syndication, press releases), so the paper… Caveat: colluding sources that do not copy each other remain an open problem, and the…
Source: https://arxiv.org/abs/2611.09203

### Deletion Sensitivity Is a Property of the Model: A Three-Condition Measurement across Seven Open Reasoning Models
arXiv: 2611.13223 | cs.CL
Reasoning models emit a reasoning trace every turn of a multi-turn tool session and later turns read that history; since 73% of user interactions across 94k ShareGPT conversations span… Caveat: measured on open-weight reasoning models with synthetic deletion rendering; the paper does…
Source: https://arxiv.org/abs/2611.13223

### When Both Sides Adapt: The Challenges of Evaluating Interactive LLM Systems
arXiv: 2611.17239 | cs.AI
In interactive systems users are adaptive — after seeing LLM responses they change prompting strategy and the type and difficulty of subsequent tasks — so model responses influence the… Caveat: the formal results rely on stylized/linear interaction models; the reversal…
Source: https://arxiv.org/abs/2611.17239

### Agent Self-Improvement with Frozen Weights: The Added Value and Limits of Failure Traces
arXiv: 2611.11342 | cs.LG
The paper asks whether an agent's harness — the notes written around its model — can learn from the agent's failure traces beyond a matched search that never sees them. Tests use an open… Caveat: the tool-use test items themselves were judged largely defective by a blind audit, so the…
Source: https://arxiv.org/abs/2611.11342

### How Much Is Left Matters: False Positives and False Negatives in Partial-Prompt Contamination Tests
arXiv: 2611.10307 | cs.LG
Partial-prompt completion — giving the model the first part of a benchmark problem and checking whether it reproduces the rest — is a widely used contamination test, and the paper audits it… Caveat: the audit covers seven open-weight models and two benchmark families; flag-rate estimates…
Source: https://arxiv.org/abs/2611.10307

### Testing Conversation Preservation Across LLM APIs: A Rule-Based Oracle for Detecting Silent Information Loss
arXiv: 2611.15543 | cs.SE
Translators and compatibility layers move conversations across LLM APIs, yet a translated request can be accepted by the target API while silently losing information about instruction… Caveat: the oracle's coverage is bounded by the ConvIR rule set and the fault taxonomy it encodes;…
Source: https://arxiv.org/abs/2611.15543

### Model Merging Does Not Require Uniform LoRA Ranks
arXiv: 2611.06486 | cs.LG
Standard model-merging practice trains every expert at the same LoRA rank, coupling the rank choice across experts even though each domain has its own best rank; the paper shows this… Caveat: results span three domains, three scales and six merge methods; the conclusion is…
Source: https://arxiv.org/abs/2611.06486

### Sketching Language Models for Context Attribution
arXiv: 2611.17313 | cs.AI
Context attribution asks how removing parts of a prompt changes a language model's output; leave-one-out (LOO) attribution over an n-token prompt with a fixed measurement function naively… Caveat: the guarantee is conditional on the stability assumption and on an oracle-model lower…
Source: https://arxiv.org/abs/2611.17313

### Same Answer, Different Future: Dissociating Belief Content and Evidence Weight in Language Models
arXiv: 2611.07913 | cs.LG
Memory summaries, prompts and steering vectors set a language model's beliefs, but a prediction says nothing about how firmly a belief is held; the paper separates belief content (what is… Caveat: conclusions come from Bernoulli-inference tasks on open-weight models, where the "ideal…
Source: https://arxiv.org/abs/2611.07913

### Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents
arXiv: 2611.15118 | cs.CR
Because agents now run unattended for hours with privileged system access, model-weight integrity becomes a security concern; the paper shows a method called Lazarus can turn a capable… Caveat: the defense is itself agent-built and evaluated against the same attack family; no human…
Source: https://arxiv.org/abs/2611.15118

### SideTaskBench: Measuring Unauthorized Side-Task Delivery in Coding Agents
arXiv: 2611.14548 | cs.CR
The benchmark asks whether a coding agent can fix a user's repository while also completing and delivering work the user never requested, a failure that repair success alone misses. Each… Caveat: 25 repairs and 190 side-task units in Python only, so generalisation to other languages and…
Source: https://arxiv.org/abs/2611.14548

### OverServe: Resource Amplification Attacks on SaaS Agents via Tool–Prompt Co-Design
arXiv: 2611.14808 | cs.CR
In subscription-based SaaS deployments, model and tool calls consume provider resources without extra customer payment, and because the agent autonomously decides when to stop, a malicious… Caveat: the amplification is measured against the specific completion-confirmation prompt designs…
Source: https://arxiv.org/abs/2611.14808

### Look It Up: Multi-bit LLM Watermarking via Codebook Search
arXiv: 2611.16890 | cs.CR
Attributing short LLM-generated texts to a source is hard for existing multi-bit watermarking methods, which often need long generations or costly decoding to recover payloads reliably. The… Caveat: short-text instruction-tuned generation remains the weak case, and robustness to insertions…
Source: https://arxiv.org/abs/2611.16890

### Jais 3: Introducing Arabic-centric Agentic AI
arXiv: 2611.10224 | cs.CL
Jais 3 is a fleet of six open, Arabic-centric agentic language models from 0.9B to 375B parameters, trained to complete multi-step tasks rather than merely answer: plan multi-step tasks,… Caveat: the abstract reports benchmark comparisons qualitatively without absolute scores; the…
Source: https://arxiv.org/abs/2611.10224

### Evaluating Compositional Generalization in Transformers: The Role of Composition Equivalence and Module Coverage
arXiv: 2611.13498 | cs.LG
Compositional generalization — training on some combinations of modules and generalizing to unseen combinations — has produced inconsistent transformer results because evaluations used… Caveat: the study is a systematic re-analysis of existing split designs rather than a new…
Source: https://arxiv.org/abs/2611.13498

### Tokenization: Hardness and Bicriteria Approximation Algorithms
arXiv: 2611.15074 | cs.DS
The paper studies Binary Tokenization: given a corpus of binary strings and a vocabulary budget K, select at most K substrings so as to minimize the total number of tokens needed to… Caveat: the analysis is for binary-string corpora and does not directly cover natural-language…
Source: https://arxiv.org/abs/2611.15074

**Hacker News — 822 unique stories in window, 226 AI-relevant (27.5%). Top AI stories:**

| 1 | 935 | 571 | 50493251 | Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs | https://news.ycombinator.com/item?id=50493251 |
| 2 | 412 | 106 | 50486748 | AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems | https://news.ycombinator.com/item?id=50486748 |
| 3 | 371 | 202 | 50487864 | $11.4M in Nvidia hardware vanishes during shipment from CA to TX | https://news.ycombinator.com/item?id=50487864 |
| 4 | 282 | 46 | 50487185 | After 600 experiments, here's what I discovered about JEPA world models | https://news.ycombinator.com/item?id=50487185 |
| 5 | 213 | 126 | 50488769 | No AI Slop: A Manifesto | https://news.ycombinator.com/item?id=50488769 |
| 6 | 208 | 51 | 50492993 | Nvidia director sold nearly $1B in stock weeks before the Jensen Huang scandal | https://news.ycombinator.com/item?id=50492993 |
| 7 | 174 | 72 | 50487184 | OpenAI disbands its robotics team as its general models start running robots | https://news.ycombinator.com/item?id=50487184 |
| 8 | 124 | 158 | 50496921 | The Claude Delusion | https://news.ycombinator.com/item?id=50496921 |
| 9 | 105 | 82 | 50491097 | Claude Meetings | https://news.ycombinator.com/item?id=50491097 |
| 10 | 94 | 89 | 50492141 | Anthropic upgrades Claude Code Projects to run parallel AI workers | https://news.ycombinator.com/item?id=50492141 |
| 11 | 77 | 36 | 50497155 | Serving GLM-5.3 at 607.8 tok/s across two Nvidia DGX stations with vLLM | https://news.ycombinator.com/item?id=50497155 |
| 12 | 66 | 47 | 50494696 | Ask HN: What are the most useful, concrete AI skills to independently learn? | https://news.ycombinator.com/item?id=50494696 |

Key comments: Nvidia engineered scarcity (935/571) — *"so if this is true... we should finally get some gpus right?"* — **tz18**; *"Surely this is Nvidia deploying excess capital by acquiring equity in high growth companies at significant discounts"* — **throwaway69123**; *"The GPUs going in datacenters are not usable at home right?"* — **ares623**. Gödel notebooks (412/106) — *"You could likely 'unlock' the manuscript yourself with a competent computer vision algorithm. It's nothing that fancy."* — **rsoto2**; *"The AI was of course trained on existing pre-AI transcriptions of Gödel's shorthand"* — **2aFds**. OpenAI robotics disbanded (174/72) — *"The Bitter Lesson comes for everything"* — **yewenjie**. The Claude Delusion (124/158) — *"It's just plainly not true. Yes AI uses electricity but it's not that large a percentage of global electricity use."* — **ch4s3**. No AI Slop (213/126) — *"ask the submitter to give their prompt as part of their contribution"* — **courtcircuits**.

**r/LocalLLaMA (100 newest entries fetched, 40 posted 2026-11-14) — selected:**

1. **RustingStrata runs Flint 40B on a 12 GB card: 64 tok/s decode, 1.3x llama.cpp** — a new custom speculative-decoding/attention path claims 1.3x over stock llama.cpp decode at 40B on a single 12 GB card.
https://www.reddit.com/r/LocalLLaMA/comments/1xw5nzn/rustingstrata_runs_flint_40b_on_a_12_gb_card_64/

2. **tiny-voca: a fully open 4.5M-parameter TTS (code, weights, dataset), 70x real time on a CPU** — sub-5M-parameter fully open TTS with code, weights and training dataset released.
https://www.reddit.com/r/LocalLLaMA/comments/1xw7zrg/tinyvoca_a_fully_open_45mparameter_tts_code/

3. **CQ 4-bit matches BF16 on Qwen3.8-27B benchmarks while NF4 drops 12 points on GSM8K, plus GCMP, a LoRA replacement with 55x fewer parameters** — a fourth quantization format (CQ) reported at BF16 parity on Qwen3.8-27B with NF4 losing 12 GSM8K points, alongside GCMP as a LoRA substitute at 1/55th the parameter count.
https://www.reddit.com/r/LocalLLaMA/comments/1xvrgf1/cq_4bit_matches_bf16_on_qwen3827b_benchmarks/

4. **ARC 1.0: A decision model for routing AI agents across cloud and local models (0.6B, Apache 2.0)** — a 0.6B Apache-2.0 router model that decides whether an agent call goes to a frontier API or a local model; a separate thread asks whether decision models can serve as permission checkers.
https://www.reddit.com/r/LocalLLaMA/comments/1xw29ic/arc_10_a_decision_model_for_routing_ai_agents/

5. **IBM trains two small open models to ignore orders hidden in documents** — prompt-injection hardening by training models to refuse instructions embedded in retrieved content, released as two small open models.
https://www.reddit.com/r/LocalLLaMA/comments/1xw09tu/ibm_trains_two_small_open_models_to_ignore_orders/

6. **After medusa halo we get siren halo** — a speculative-decoding variant following the Medusa/HALO family, discussed as a multi-head draft head for llama.cpp.
https://www.reddit.com/r/LocalLLaMA/comments/1xw7edn/after_medusa_halo_we_get_siren_halo/

7. **[Paper] Read Less, Solve More: Token-Efficient Sparse Reading of External Content for AI Agents** — a paper post on sparse, selective reading of external content to cut agent token cost.
https://www.reddit.com/r/LocalLLaMA/comments/1xvuit5/paper_read_less_solve_more_tokenefficient_sparse/

8. **Unsloth Qwen3.8-27B Quantizations — Dynamic v3.1 Update** — the same quant release drew 222 pts / 105 comments on Hacker News (item 50491980), making it the highest-scoring open-weights artefact of the window.
https://www.reddit.com/r/LocalLLaMA/comments/1xvquae/unsloth_qwen3827b_quantizations_dynamic_v31_update/

9. **HarborRL Update: Elastic Scaling, SSH-Free Cluster Deployment, and Unified Agentic RL Training** — an agentic RL training stack adds elastic scaling and SSH-free cluster deployment.
https://www.reddit.com/r/LocalLLaMA/comments/1xvujf1/harborrl_update_elastic_scaling_sshfree_cluster/

10. **SPARK 2.6 4b and 1.7b Fixed a reasoning loop by editing one row of weights** — a single-row weight edit reportedly repairs a repeating-loop failure in 4B and 1.7B SPARK models.
https://www.reddit.com/r/LocalLLaMA/comments/1xvwi81/spark_26_4b_and_17b_fixed_a_reasoning_loop_by/

11. **SenseNova-Loop-9B-Preview on Hugging Face; ERNIE 5.5 Flash Base; SOV-Transcribe-1 (Salesforce)** — new checkpoint postings for a Chinese open-weight model family, Baidu's ERNIE 5.5 Flash base weights, and a Salesforce sovereign ASR model.
https://www.reddit.com/r/LocalLLaMA/comments/1xvysss/sensenovasensenovaloop9bpreview_hugging_face/

12. **Why don't we have national open AI models?** and **How long are we gonna depend on model creators (like Qwen, Gemma, NVIDIA) for ~100B models?** — two threads on national sovereignty over open-weight models and dependency on large-model vendors.
https://www.reddit.com/r/LocalLLaMA/comments/1xw4ue3/why_dont_we_have_national_open_ai_models/

**r/MachineLearning (100 newest entries fetched, 18 in-window) — selected:**

1. **Four frontier models scored 97.8-100 on a 7-part materials-science research test. How should we score long-horizon agent evals instead?** — near-ceiling scores on a seven-part materials research eval, with the thread asking how long-horizon agent evaluations should be scored when a benchmark saturates.
https://www.reddit.com/r/MachineLearning/comments/1xvgf6h/four_frontier_models_scored_978100_on_a_7part/

2. **Scaling to 1T MoE on TorchTitan** — a report on scaling a mixture-of-experts model to one trillion parameters on the TorchTitan stack.
https://www.reddit.com/r/MachineLearning/comments/1xvce5h/scaling_to_1t_moe_on_torchtitan_p/

3. **Open weights: ParaTrace v8 (RAID-tuned), 5th on the RAID leaderboard (TPR at 1% FPR)** — a prompt-injection detector released with weights, placed fifth on the RAID benchmark at 1% false-positive rate.
https://www.reddit.com/r/MachineLearning/comments/1xv4ldx/open_weights_paratrace_v8_raidtuned_5th_on_the/

4. **Paid surveys for Machine Learning Scientists for SnorkelAI: Absolutely not worth it** — negative first-hand report on ML-scientist survey compensation.
https://www.reddit.com/r/MachineLearning/comments/1xv4rjy/paid_surveys_for_machine_learning_scientists_for/

5. **ICLR 2027 Rebuttal / ICLR rebuttal / ICML 2027 Changes / Is it compulsory to upload neurips poster by 15th Nov?** — venue-process discussion clustered in one day, continuing the peer-review-disruption thread from the previous cycle.
https://www.reddit.com/r/MachineLearning/comments/1xw5uwe/iclr_2027_rebuttal_d/

**Leaderboards (2026-11-14 snapshot, unchanged from 2026-11-13 unless noted):**

Artificial Analysis Intelligence Index — no movement in the top 5: Claude Fable 5.2 (max) 64.5636, Gemini 4 Carbon (high) 60.0257, Claude Opus 5.5 (max) 59.1060, GPT-6 Astra (max) 56.8539, GPT-6.1 Sol (max) 54.6087; then Gemini 4 Hydrogen (xhigh) 53.9192, GPT-6.1 Terra (max) 51.3265, Muse Wonder Full (max) 50.0772, Claude Fable 5.1 (max) 49.1602, Kimi K3.1 Pro 46.4526 (open-weight, best open model). The rest of the top 20 is unchanged in value but the site now exposes effort-tier rows that were absent on 13 Nov — Claude Fable 5.2 (high) 61.8219, Gemini 4 Carbon (medium) 58.2588, GPT-6 Astra (medium) 51.5548, GPT-6.1 Sol (medium) 46.3469, Claude Opus 5.5 (medium) 48.2081, Muse Wonder (high) 40.5266, Grok 4.7 (high) 35.2123, DeepSeek V4.1 Flash 1017 (high) 28.6437. Open-weight order: Kimi K3.1 Pro 46.4526, DeepSeek V4.1 Flash 1017 32.5896, GLM-5.3 31.6534, Inkling 2 Small 30.6287, MiMo-V2.6-Pro 29.8898, Ling 3.1 Flash 1019 29.5701, Mistral Large 4 26.1250, Qwen3.8 27B 20.1069, K2 Horizon 375B A23B 17.8203, Beam 1.0 17.7307, Nemotron 3.5 Super VL 13.6203.
https://artificialanalysis.ai/

Artificial Analysis Decision Index (v2.1) — one addition and no reordering: **d1.1 joins at rank 13 with indexScore 66.4875 at $0.0000633506/task**, below Claude Haiku 5.5 (Low) 67.1808 and above Elephant 9B 66.3893. Claude Haiku 5.5 (Max) still leads at 76.4922 ($0.0062182766), GPT-6 Luna (Max) 75.6745 ($0.0015484570), Drex Max v1.1 72.6242 ($0.0001026762), SubQ Snap 1.2 72.5805, GLiDE v1.2 72.5152, Mammoth 27B 71.3606, d1-ultra 70.5764, Decider v1.3 70.4082, Decider v1.2 69.7663. Two general LLMs still outrank every dedicated decision model, at 60x and 15x the cost per task.
https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index

BenchLM — snapshot unchanged at 2026-11-13 / bench-align-v5, 50 models, no rank or score movement. Claude Fable 5.2 remains #1 at 93.9.
https://benchlm.ai/api/data/leaderboard

Hugging Face — no new first-party frontier-lab weight release in-window. The 200 newest repos and the 1000-model recent listing are dominated by community quants, GGUF conversions and single-purpose TTS/ASR uploads. Named non-spam entries: **klein-ml/KV1-1.2B** (1.2B text-generation, 3 likes at fetch time), **valueai-org/SLWM-X1B / SLWM-v2-453M / SLWM-X450M-Memory** (small model family), **kabachuha/DeepSeek-V4.1-Flash-1017-control-vectors** (activation-steering vectors for a released model), **markldn/SenseNova-Loop-9B-Preview-Q8_0-MTP-GGUF**, **qwegnai/ERNIE-5.5-Flash-Base-hq8g32-shvq15g64-shvq3g64**, **n4ze3m/tiny-voca**, **salesforce-sovereign-intelligence/SOV-Transcribe-1**, **openbmb/MiniCPM-OCR-1.0-DSpark** series quantizations, **Zyphra/ZAC-1** (2026-11-12). Lab org listings show nothing newer than nvidia/Kimi-K3.1-Pro-NVFP4 (2026-11-11), deepseek-ai/DeepSeek-V4.1-Flash-1017 (2026-10-17) and zai-org/GLM-5.3 (2026-08-25).
https://huggingface.co/api/models?sort=createdAt&direction=-1&limit=200

**Negative signals / disputes:**

- The AI share of Hacker News fell to 27.5% (226 of 822 stories) from 28.4% (303 of 1068) on 13 Nov, and the AI share of the top 50 overall stories is 28.0% — the window's centre of gravity was NVIDIA corporate governance, not model research.
- No frontier-model capability release and no leaderboard movement: the Artificial Analysis Intelligence Index top 5 is bit-identical to 13 Nov, and BenchLM did not refresh at all.
- The AA Intelligence Index now publishes effort-tier rows for the same models (Fable 5.2 high 61.8219, Carbon medium 58.2588, Astra medium 51.5548, Sol medium 46.3469, Opus medium 48.2081, Muse Wonder high 40.5266, Grok 4.7 high 35.2123, DeepSeek V4.1 high 28.6437). A leaderboard that adds a second score per model for the same release makes single-number comparisons across days fragile.
- The strongest claimed quantization result of the day (CQ 4-bit matching BF16 on Qwen3.8-27B while NF4 drops 12 GSM8K points) is a community claim with no linked benchmark harness.
- The community's own pushback on the "AI energy" narrative continues: the Claude Delusion thread (124/158) is dominated by direct factual challenge to the emissions-reversal claim.
- Paper-facing skepticism is rising alongside capability: The Claude Delusion (124/158 comments) and No AI Slop (213/126) both draw more comments than points — arguing about measurement, not celebrating results.
- Two threads on JEPA world models (282/46) and Gödel notebooks (412/106) attract attention on the strength of the claim, but the strongest comments reduce both to a vision problem or to pre-existing non-AI transcriptions.

**Trend:**

Two signals dominate. First, the hardware-distribution story: NVIDIA allegedly funding AI startups to absorb excess silicon (935/571, the top AI thread of the window by a wide margin) collides with an $11.4M shipment theft (371/202), a director selling nearly $1B of stock before the scandal (208/51), and a DGX-station serving benchmark (77/36). The community reading is that the shortage narrative is manufactured, and the reflex is to ask for used datacenter silicon for home use — the thread's most-upvoted reply is "so if this is true... we should finally get some gpus right?" Second, agentic work products are moving from demos to governance: OpenAI disbanding its robotics team because general models now run robots (174/72), Anthropic shipping parallel AI workers in Claude Code Projects (94/89), and a manifesto arguing for a review process that can handle giant AI-generated PRs (213/126, where the constructive proposal is that contributors submit the prompt that produced the change).

Underneath, the technical line is unchanged but sharper: efficiency work keeps converging on *state compression and routing* rather than better models — CARE-PO controlling tool-call counts, BunshinRL forking whole workspaces for agentic RL rollouts, Recompute-or-Restore for host-tier KV on an NPU stack, batch-makespan reduction for agent workloads, order-of-magnitude cost reduction by smart routing, and AutoQS automating quantization strategy design. On the evaluation side, the papers are increasingly about *what the measurement itself buys you*: when evaluators of agents disagree (native scoring vs LLM judges vs commit-boundary checks on tau2-bench), when deletion of history is the model's property rather than the provider's, how much is left after partial-prompt contamination, and whether a fabricated article changes a forecasting system's output.

The paper set from the Friday cycle is unusually heavy on the *authorization* boundary: SideTaskBench measures unauthorized side-task delivery in coding agents (roughly 40% valid delivery under wrapped requests, from 20.48% for unrelated tasks to 57.44% for mechanism-overlapping ones), OverServe shows a multi-agent framework driving SaaS resource amplification by up to 93.88x through co-designed MCP status tools and completion prompts, and Lazarus backdoors an agent by editing fewer than ten dormant neurons with no training at all. Together with the Reddit threads on routing models, permission-checker decision models and IBM's injection-hardened models, the centre of gravity has moved from "can agents do the task" to "can agents be stopped from doing the task".

## Trend

Three forces. The economics of silicon (manufactured scarcity, theft, insider selling) now outrank model research in attention. Agentic capability is being decoupled from bespoke teams — OpenAI's robotics disbandment is the clearest signal, with general models absorbing the domain — while the governance question of what agents are *authorized* to do becomes the dominant research question. And measurement infrastructure is being rebuilt from the ground up: LLM judges are being audited against native scoring, contamination tests are being re-derived, and prompts are being proposed as review artifacts.

The undercurrent is a shift in the unit of analysis. Yesterday's papers asked whether a model could reason; today's ask whether an *agent* can be bounded — in side-task delivery, in resource consumption, in latent backdoors — and whether the numbers we quote measure capability at all.
