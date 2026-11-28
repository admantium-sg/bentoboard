# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 15, 2026
**Last Fact-Check:** 2026-11-12 (21:35 UTC) — 15 claims checked in the 2026-10-28 section: 15 verified, 0 corrections (report: `fact_check_reports/2026-11-12.md`)
**Verification Status:** ⚠️ 543 claim units still open across 2026-10-28 → 2026-11-12; next run resumes with the 9 remaining arXiv entries of the 2026-10-28 section, then its community entries
**Verification Status:** ✅ Cumulative tracking active
**Working Directory:** shared-workspace/research/llm-papers-arxiv

**Insight count:** 1943 total (+71 papers across 2026-11-13 and 2026-11-14, +26 papers on 2026-11-15)
**Active window:** 2026-11-14 and 2026-11-15. The 2026-11-13 section was archived on this run to `archive/cumulative_findings_pre_2026-11-15.md` (mirrored earlier in `archive/cumulative_findings_pre_2026-11-14.md`, and in full in `daily_reports/2026-11-13.md`); the 2026-11-12 section went to `archive/cumulative_findings_pre_2026-11-13.md`. Unabridged paper detail lives in `findings_nov14_task1.md` (30 papers), `findings_nov15_task1.md` (26 papers) and `findings_nov15_task2.md`. Both sections below are condensed to fit the ~60KB size budget, with every source URL retained.

---

## 2026-11-14 (Saturday Evening)

**Batch:** 30 papers from the same Friday, 13 November 2026 arXiv announcement cycle — arXiv does not publish a separate weekend cycle, and the cached listing still reads "Showing new listings for Friday, 13 November 2026". The run screened the cached current listing plus the leftover backlog while explicitly excluding every arXiv id already reported in earlier findings, archives or daily reports; all 30 ids are new to the cumulative record. Write-up lives in `findings_nov14_task1.md`. The community and leaderboard section was reconstructed in the main agent from cached primary-source artifacts under `tmp/nov14/t2/` (Algolia HN API, Reddit RSS, AA homepage payload + Decision Index, BenchLM JSON, HF models API) after the delegated Task 2 worker completed its fetches but exited before writing its findings file.

### Early Stopping in Large Reasoning Models: A Survey and Empirical Audit of Efficiency and Reliability
arXiv: 2611.00166 | cs.AI
Reasoning models gain accuracy by emitting longer traces, but much of that compute may be avoidable, so the paper audits early-stopping methods by charging for the cost of the stop decision… Caveat: the audit…
Source: https://arxiv.org/abs/2611.00166

### CARE-PO: Controllable Tool-Call Efficiency for LLM Agents
arXiv: 2611.12125 | cs.LG
A step-level diagnosis of Qwen3.5 trajectories at two model sizes on GAIA finds that most trajectories contain removable tool calls, at a similar rate at both sizes — but standard… Caveat: on four held-out…
Source: https://arxiv.org/abs/2611.12125

### BunshinRL: Whole-Workspace Forking for Agentic Reinforcement Learning Rollouts
arXiv: 2611.10453 | cs.AI
Agentic RL rollouts interleave model reasoning with tool calls in persistent workspaces, so scaling them incurs heavy memory cost for concurrent environments while slow tool calls delay… Caveat: gains are reported…
Source: https://arxiv.org/abs/2611.10453

### Shortcuts and Boundaries: Verifiable RL Misalignment and Contextual Safety Learning
arXiv: 2611.12865 | cs.AI
The paper studies reward-driven misalignment in RL agents via verifiable reward–context conflicts, where compliant completion is feasible but executable violations earn more reward than any… Caveat: results come…
Source: https://arxiv.org/abs/2611.12865

### From Delegation to Coordination: Learning Efficient Multi-Agent Deep Research
arXiv: 2611.17041 | cs.MA
Multi-agent deep-research systems delegate subtasks to keep long tool traces out of the main agent's context, but delegation only pays off when task allocation and subtask execution are… Caveat: the rubric is a…
Source: https://arxiv.org/abs/2611.17041

### DecArena: Evaluating Large-Scale Decentralized Multi-Agent Collaboration
arXiv: 2611.15521 | cs.MA
Decentralized multi-agent systems lack the global orchestrator that centralized ones rely on, so agents must proactively discover non-local tools and skills and collaborate with peers under… Caveat: the benchmark…
Source: https://arxiv.org/abs/2611.15521

### Axion 1.0: Open Agent Foundation Models, Simplified
arXiv: 2611.03233 | cs.AI
Axion 1.0 is a fully open agent foundation model trained in only three stages — two lightweight supervised fine-tuning stages followed by reinforcement learning — with no dedicated… Caveat: the abstract reports…
Source: https://arxiv.org/abs/2611.03233

### AutoQS: Automated Quantization Strategy Design with Large Language Models
arXiv: 2611.11975 | cs.AI
Quantization cuts LLM deployment cost, but effective strategies must balance model quality and storage, and LLM-driven search must find good strategies within a limited evaluation budget —… Caveat: evaluated on a…
Source: https://arxiv.org/abs/2611.11975

### Recompute or Restore? Host-Tier KV for Multi-Model Agent Workflows on a Static-Graph NPU Serving Stack
arXiv: 2611.15126 | cs.DC
Agent workflows issue dependent model calls sharing long context prefixes, so serving efficiency depends on reusing the KV cache of those prefixes; on accelerators that compile graphs ahead… Caveat: results are…
Source: https://arxiv.org/abs/2611.15126

### Reducing Batch Makespan for LLM Agent Workloads through Inference-Environment Coordination
arXiv: 2611.16661 | cs.DC
Agent tasks alternate between LLM inference and environment interaction, so the paper targets batch makespan — the time to complete all tasks in a batch — with coordinated optimizations… Caveat: gains depend on…
Source: https://arxiv.org/abs/2611.16661

### Smart Model Routing for Order-of-Magnitude LLM Cost Reduction
arXiv: 2611.15911 | cs.DC
Frontier LLMs cost per token often more than an order of magnitude above smaller task-adequate models, so the paper develops a formal cost–quality optimization framework for routing each… Caveat: the headline…
Source: https://arxiv.org/abs/2611.15911

### GC-MoE on SM120: Overlapping Expert-Parallel Token Dispatch with Warp-Level FP8xFP4 Block-Scaled MMA on Consumer Blackwell
arXiv: 2611.16219 | cs.DC
Expert-parallel MoE decoding is latency bound because each layer serializes token exchange, a grouped GEMM over routed experts and a combine, while only a few tokens per rank are in flight;… Caveat: consumer-only…
Source: https://arxiv.org/abs/2611.16219

### Starscream: Reimagining LLM Sharding on AMD Instinct GPUs with GPU Partitioning
arXiv: 2611.15951 | cs.DC
As GPUs grow larger, pronounced non-uniform memory access (NUMA) characteristics challenge existing LLM frameworks, and chiplet-based designs such as AMD Instinct MI300X add GPU… Caveat: the evaluation is…
Source: https://arxiv.org/abs/2611.15951

### When Evaluators of AI Agents Disagree: An Empirical Study of Native Scoring, LLM Judges, and Commit-Boundary Checks on tau2-bench
arXiv: 2611.14581 | cs.SE
Benchmarks compare a tool-using agent's final state against a gold answer, while deployed services rely on an LLM judge reading the transcript — yet practice treats the two as… Caveat: two domains and 2,160…
Source: https://arxiv.org/abs/2611.14581

### Copies Are Not Confirmations: How News Duplication Fools LLM Judges and Continual Learners
arXiv: 2611.09203 | cs.LG
A model that keeps learning from news sees the same claim repeatedly, but many reports are copies of one source (wire stories, in-group sharing, syndication, press releases), so the paper… Caveat: colluding sources…
Source: https://arxiv.org/abs/2611.09203

### Deletion Sensitivity Is a Property of the Model: A Three-Condition Measurement across Seven Open Reasoning Models
arXiv: 2611.13223 | cs.CL
Reasoning models emit a reasoning trace every turn of a multi-turn tool session and later turns read that history; since 73% of user interactions across 94k ShareGPT conversations span… Caveat: measured on…
Source: https://arxiv.org/abs/2611.13223

### When Both Sides Adapt: The Challenges of Evaluating Interactive LLM Systems
arXiv: 2611.17239 | cs.AI
In interactive systems users are adaptive — after seeing LLM responses they change prompting strategy and the type and difficulty of subsequent tasks — so model responses influence the… Caveat: the formal results…
Source: https://arxiv.org/abs/2611.17239

### Agent Self-Improvement with Frozen Weights: The Added Value and Limits of Failure Traces
arXiv: 2611.11342 | cs.LG
The paper asks whether an agent's harness — the notes written around its model — can learn from the agent's failure traces beyond a matched search that never sees them. Tests use an open… Caveat: the tool-use test…
Source: https://arxiv.org/abs/2611.11342

### How Much Is Left Matters: False Positives and False Negatives in Partial-Prompt Contamination Tests
arXiv: 2611.10307 | cs.LG
Partial-prompt completion — giving the model the first part of a benchmark problem and checking whether it reproduces the rest — is a widely used contamination test, and the paper audits it… Caveat: the audit…
Source: https://arxiv.org/abs/2611.10307

### Testing Conversation Preservation Across LLM APIs: A Rule-Based Oracle for Detecting Silent Information Loss
arXiv: 2611.15543 | cs.SE
Translators and compatibility layers move conversations across LLM APIs, yet a translated request can be accepted by the target API while silently losing information about instruction… Caveat: the oracle's coverage…
Source: https://arxiv.org/abs/2611.15543

### Model Merging Does Not Require Uniform LoRA Ranks
arXiv: 2611.06486 | cs.LG
Standard model-merging practice trains every expert at the same LoRA rank, coupling the rank choice across experts even though each domain has its own best rank; the paper shows this… Caveat: results span three…
Source: https://arxiv.org/abs/2611.06486

### Sketching Language Models for Context Attribution
arXiv: 2611.17313 | cs.AI
Context attribution asks how removing parts of a prompt changes a language model's output; leave-one-out (LOO) attribution over an n-token prompt with a fixed measurement function naively… Caveat: the guarantee is…
Source: https://arxiv.org/abs/2611.17313

### Same Answer, Different Future: Dissociating Belief Content and Evidence Weight in Language Models
arXiv: 2611.07913 | cs.LG
Memory summaries, prompts and steering vectors set a language model's beliefs, but a prediction says nothing about how firmly a belief is held; the paper separates belief content (what is… Caveat: conclusions come…
Source: https://arxiv.org/abs/2611.07913

### Lazare, veni foras: Reprogramming Dormant Neurons to Backdoor AI Agents
arXiv: 2611.15118 | cs.CR
Because agents now run unattended for hours with privileged system access, model-weight integrity becomes a security concern; the paper shows a method called Lazarus can turn a capable… Caveat: the defense is…
Source: https://arxiv.org/abs/2611.15118

### SideTaskBench: Measuring Unauthorized Side-Task Delivery in Coding Agents
arXiv: 2611.14548 | cs.CR
The benchmark asks whether a coding agent can fix a user's repository while also completing and delivering work the user never requested, a failure that repair success alone misses. Each… Caveat: 25 repairs and 190…
Source: https://arxiv.org/abs/2611.14548

### OverServe: Resource Amplification Attacks on SaaS Agents via Tool–Prompt Co-Design
arXiv: 2611.14808 | cs.CR
In subscription-based SaaS deployments, model and tool calls consume provider resources without extra customer payment, and because the agent autonomously decides when to stop, a malicious… Caveat: the…
Source: https://arxiv.org/abs/2611.14808

### Look It Up: Multi-bit LLM Watermarking via Codebook Search
arXiv: 2611.16890 | cs.CR
Attributing short LLM-generated texts to a source is hard for existing multi-bit watermarking methods, which often need long generations or costly decoding to recover payloads reliably. The… Caveat: short-text…
Source: https://arxiv.org/abs/2611.16890

### Jais 3: Introducing Arabic-centric Agentic AI
arXiv: 2611.10224 | cs.CL
Jais 3 is a fleet of six open, Arabic-centric agentic language models from 0.9B to 375B parameters, trained to complete multi-step tasks rather than merely answer: plan multi-step tasks,… Caveat: the abstract…
Source: https://arxiv.org/abs/2611.10224

### Evaluating Compositional Generalization in Transformers: The Role of Composition Equivalence and Module Coverage
arXiv: 2611.13498 | cs.LG
Compositional generalization — training on some combinations of modules and generalizing to unseen combinations — has produced inconsistent transformer results because evaluations used… Caveat: the study is a…
Source: https://arxiv.org/abs/2611.13498

### Tokenization: Hardness and Bicriteria Approximation Algorithms
arXiv: 2611.15074 | cs.DS
The paper studies Binary Tokenization: given a corpus of binary strings and a vocabulary budget K, select at most K substrings so as to minimize the total number of tokens needed to… Caveat: the analysis is for…
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

## 2026-11-15 (Sunday Evening)

### Indic-Task Gains and Regressions after Reinforcement Learning
arXiv: 2611.16228 | cs.CL
GRPO reinforcement learning on four environments from a SFT'd 30B-A3B mixture-of-experts base covering English and eight Indic languages is evaluated before and after in a single campaign over 34 benchmarks. MATH improves by 36.07 points and most… Caveat: the paper's own headline caveat is that the language reward did not ensure use of the…
Source: https://arxiv.org/abs/2611.16228

### Honesty Is a Race: Predicting When Verifiable-Reward RL Teaches a Model to Bluff
arXiv: 2611.15779 | cs.LG
The paper derives a first-order threshold for when a GRPO step makes a model more honest: it happens exactly when the checker's weighted acceptance rate $\tilde{p}$ times the certificate payoff $r$, divided by the unverifiable-verdict payoff $b$,… Caveat: the threshold argument is first-order and the collapse predictor is validated on small…
Source: https://arxiv.org/abs/2611.15779

### "It's Just a Small Weapon": What Rewarding Misbehavior During RL Does to Character-Trained Models
arXiv: 2611.16069 | cs.LG
Using Model Spec Midtraining to teach gpt-oss-20b a semi-realistic constitution, the paper shows that subsequent RL with misspecified rewards works directly against character training: character-trained models readily learn both (a) answering… Caveat: a single model family (gpt-oss-20b) and two RL variants are tested, and the "motivated…
Source: https://arxiv.org/abs/2611.16069

### Outcome-Mass Alignment: Controlling Length-Dependent Trajectory Influence in Multi-Turn LLM Agent Reinforcement Learning
arXiv: 2611.16816 | cs.CL
Multi-turn agent RL materializes each source trajectory into multiple response rows and valid tokens, which creates an outer-accounting problem distinct from within-trajectory credit assignment: row-based outcome statistics can count one episode… Caveat: the gain is contingent on the coupling between trajectory expansion and outcome…
Source: https://arxiv.org/abs/2611.16816

### On the Difficulty of Sequence-Level Supervised Learning for Autoregressive Language Models
arXiv: 2611.16736 | cs.LG
The paper asks whether the teacher-forcing token-level NLL can be replaced by sequence-level losses that account for inference-time decoding (greedy or autoregressive sampling). Two natural constructions are shown to be fundamentally flawed — both… Caveat: the negative result is theoretical (unboundedness, variance), and the "moment…
Source: https://arxiv.org/abs/2611.16736

### daVinci-Prover: Agent-Native Mid-Training for Formal Theorem Proving
arXiv: 2611.16433 | cs.CL
The authors argue that interactive theorem-proving agents need both mathematical skill priors and agentic trajectories, and synthesize an agent-native 33.7B-token mid-training corpus covering decomposition, search, self-verification, and revision,… Caveat: the 13.7-point average is against a matched SFT-only baseline on a single base model;…
Source: https://arxiv.org/abs/2611.16433

### Experience-Handoff Reinforcement Learning for Recursive Self-Improvement
arXiv: 2611.16409 | cs.LG
Agentic RL from scalar rewards discards the fine-grained environment information (error logs, partial work) the agent experienced, while existing harnesses that hand off experience do so with hand-constructed artifacts whose construction is never… Caveat: the abstract reports no absolute numbers for the held-out gains or the baselines…
Source: https://arxiv.org/abs/2611.16409

### Parsed, Plausible, Wrong: Output Format Controls Silent Errors in Small-Model Semantic Parsing
arXiv: 2611.17169 | cs.CL
When a small fine-tuned parser emits a well-formed but wrong tree, the failure is silent. The paper varies only the *output format* — a free design choice — across six lossless encodings of the same target tree on the PIZZA ordering benchmark,… Caveat: strict refusal has a measured price — 2.1–10.1% of real, mostly polite, orders are…
Source: https://arxiv.org/abs/2611.17169

### The Noise Floor of a Quantization Comparison: Engine, Restart, Batch and Kernel Drift
arXiv: 2611.15671 | cs.LG
Comparing a quantized model to its BF16 original changes more than the weights: it often changes the serving engine, always changes the server instance, may change batching, and on some stacks changes which kernel the library selects purely because… Caveat: measured on two Cloudflare decision models (not general LLMs) on one GB10 device; the…
Source: https://arxiv.org/abs/2611.15671

### One Model, Two Precisions: Does Disagreement Between Quantized Copies Tell You When a Small Model Is Wrong?
arXiv: 2611.16478 | cs.AI
The question is whether disagreement between two precisions of the same weights (an 8-bit copy that answers and a lower-precision copy that reads the same prompt) can serve as a per-question error score for abstention, escalation or re-asking, at… Caveat: the headline effect size is negligible on the 0.6B model and vanishes on the 1.7B…
Source: https://arxiv.org/abs/2611.16478

### Beyond Compressing Everything: Contrastive Memory Learning for Selective Context Compression
arXiv: 2611.16384 | cs.CL
Soft context compression converts long inputs into compact memory slots, but under a fixed memory budget the task-relevant evidence varies widely across queries — localized, multiple distant spans, or dispersed through the document — so compressing… Caveat: the abstract reports consistent wins but no absolute accuracy or compression-ratio…
Source: https://arxiv.org/abs/2611.16384

### From Large Language Models to Efficient System One Models via Adaptive Computation
arXiv: 2611.16321 | cs.CL
Converting an LLM into a System One decision model usually means replacing the language modeling head with a decision head while keeping the full backbone, so every decision pays for all layers. The paper measures how much depth decisions actually… Caveat: the evidence base is decision/classification-style benchmarks rather than generation,…
Source: https://arxiv.org/abs/2611.16321

### ToolTurns: Benchmarking LLM Agents in Multi-Turn Dialogue
arXiv: 2611.14925 | cs.CL
Most large-scale tool-use benchmarks test isolated requests; ToolTurns is a benchmark of 2,620 problems spanning 1,827 tools and 11,004 API endpoints across 47 categories, where each dialogue starts with an intentionally underspecified request and… Caveat: the user simulator's fidelity bounds the benchmark — the checker–fixer reduces…
Source: https://arxiv.org/abs/2611.14925

### EvoX: Rethinking the Agent Harness as a Runtime Policy
arXiv: 2611.15006 | cs.AI
Plausible model decisions do not always translate into successful execution because of tool-call mismatches, interrupted workflows, and unsupported completion claims. EvoX is a Rust-based multi-model agent runtime built around "The Second Policy,"… Caveat: the advantage is strongly model-dependent (+10.7 vs +3.0 points average), the "highest…
Source: https://arxiv.org/abs/2611.15006

### JudgeMix: Judge-Guided Mixed-Rollout Data Synthesis for LLM Agents
arXiv: 2611.16174 | cs.LG
SFT on expert trajectories suffers from a training-inference distribution mismatch, and existing target-aware synthesis methods apply expert assistance blind to the target model's actual behavior — either disrupting rollouts with random intervention… Caveat: the reported gains are "up to" 10 pass@1 points on two benchmarks, and the judge…
Source: https://arxiv.org/abs/2611.16174

### CapLite: Prompt-Injection Defense for Small Language Model Agents without Model-Written Security Artifacts
arXiv: 2611.17115 | cs.AI
Enforcement defenses against prompt injection (CaMeL, Progent, IPIGuard, DRIFT) ask the agent's own model to write a security artifact — a program, privilege policy, dependency graph or constraint list — that code then enforces. Across 15… Caveat: the guarantee is structural and depends on the tool-call schema containing all…
Source: https://arxiv.org/abs/2611.17115

### CoLFA: Collaboration-Guided Lightweight Failure Attribution for LLM-Based Multi-Agent Systems
arXiv: 2611.14980 | cs.CL
Failure attribution in multi-agent systems requires identifying the decisive error step and the responsible agent, but agents' division of work and information exchange produce interleaved steps and cluttered content that must be linked in lengthy… Caveat: the improvement is measured against individual baselines rather than against other…
Source: https://arxiv.org/abs/2611.14980

### Lost in Delegation: Studying the Effectiveness of Task Orchestration in Generative Search
arXiv: 2611.16526 | cs.AI
Using purpose-built datasets with pre- and post-cutoff splits, the paper compares delegation modes (orchestrator delegating to other LLMs/tools) against non-delegated setups and finds delegation provides no consistent accuracy improvement, with… Caveat: the conclusion is derived from synthetic pre-/post-cutoff split datasets, and…
Source: https://arxiv.org/abs/2611.16526

### Singularity-Bench: Can Agents Build Agents?
arXiv: 2611.16591 | cs.AI
An open-ended benchmark for autonomous AI development with six end-to-end tasks spanning pre-training, mid-training, post-training, inference, the agent harness, and cluster orchestration, where each task requires agents to implement core systems… Caveat: the headline result rests on a single model-and-harness configuration (Opus 5.5 +…
Source: https://arxiv.org/abs/2611.16591

### SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models
arXiv: 2611.15777 | cs.CL
System One models promise fast, general-purpose decisions without lengthy token generation, but aggregate benchmark scores conceal both breadth and reliability. SO-Arena characterizes the capability spectrum across 11 domains and five capability… Caveat: the reliability ranking is derived from two specific probes (option-set stability and…
Source: https://arxiv.org/abs/2611.15777

### Auditing AI Peer Reviewers: A Benchmark on Real Scientific Papers
arXiv: 2611.17052 | cs.CL
A benchmark injects objective, localisable errors of four types (general issues, mathematics, numerics, citations) at three severity levels into real papers and measures each reviewer's detection rate by error type and severity plus its… Caveat: the error-injection protocol makes the ground truth synthetic and the corpora small…
Source: https://arxiv.org/abs/2611.17052

### When Expert Disagreement Hurts: Prestige and Selectivity in LLM Decision Revision
arXiv: 2611.16694 | cs.AI
A controlled two-pass audit holds the question, evidence, and the model's initial answer fixed while varying only the revision context (neutral reflection, anonymous disagreement, or disagreement attributed to a domain expert), since neither… Caveat: the decision-revision setting is binary with a fixed single-disagreement structure,…
Source: https://arxiv.org/abs/2611.16694

### Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation
arXiv: 2611.17161 | cs.AI
Provenance in RAG is measured by counterfactual value substitution — replacing a fact in the retrieved passages with a false variant and re-querying the model. Across five sizes of one model family plus a second comparator family, 1.2% to 15.7% of… Caveat: the headline rates are model- and family-specific and the substitution method assumes…
Source: https://arxiv.org/abs/2611.17161

### When Can an Interpretability Claim Be Trusted? Stability and Certification of Feature Dimensionality and Feature Recovery Rate
arXiv: 2611.16190 | cs.LG
Interpretability tools increasingly support safety claims (e.g. that a sparse dictionary has recovered most of a model's features), yet such claims rest on threshold-based measurements that a small weight change, a different seed, or a different… Caveat: the experiments use toy models and synthetic dictionaries with known ground truth…
Source: https://arxiv.org/abs/2611.16190

### Discovering Effective Agent Memory Designs through Program Evolution
arXiv: 2611.17068 | cs.CL
MAPE evolves whole agent memory programs from minimal seeds through a standardized lifecycle interface and an iterative diagnosis-proposal loop. On LoCoMo and LongMemEval it achieves absolute accuracy gains of up to 12% over manually designed… Caveat: the discovered designs are program-level heuristics rather than trained weights, and…
Source: https://arxiv.org/abs/2611.17068

### MemCredit: From Relevance to Utility for Decision-Time Memory in Long-Horizon Web Agents
arXiv: 2611.15600 | cs.AI
Long-horizon web agents accumulate histories long enough that memory selection becomes the reliability bottleneck; existing methods optimize storage, retrieval, or compression, but the most semantically relevant memories are not the ones that most… Caveat: the 21-point gap is measured on ALFWorld only (WebShop is reported but not quantified…
Source: https://arxiv.org/abs/2611.15600

### Community, leaderboards and model releases — 2026-11-15

**Batch:** 26 papers from the Friday 13 November 2026 arXiv cycle (no weekend rotation; the live `cs.CL`/`cs.LG`/`cs.AI` listings still carry the Friday cycle), screened from 611 uncovered ids and written up in `findings_nov15_task1.md`. Community, leaderboard and release findings in `findings_nov15_task2.md`, derived from primary sources cached under `tmp/nov15/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API).

**Hacker News (window 2026-11-14T17:28Z → 2026-11-15T17:28Z, exhaustive):** 746 unique stories, 196 AI-relevant — an AI share of **26.3%**, down from 29.2% yesterday, and only 10 of the overall top 50 were AI (20.0%). The window's top two stories overall were "SpaceX catches the Starship to end Flight 15" (1494/1027, https://news.ycombinator.com/item?id=50500963) and "Lovable apps expose passport details and more than 200K private messages" (945/361). Top AI stories:
- "All AI-generated code should be Open Source" — 447/274 — https://news.ycombinator.com/item?id=50507303 (https://jakub.jankiewicz.org/blog/ai-code-open-source/). The substance is not licensing mechanics but whether an OSS licence can still certify anything once code is infinite — *ubercow13*: "if AI-generated code is not copyrightable, releasing it under an open source license is meaningless"; *sturza*: "open source is human-validated code".
- "Nvidia deliberately kept GPU prices high through circular financing deals" — 436/227 — https://news.ycombinator.com/item?id=50501631 (https://www.techspot.com/news/114558-nvidia-deliberately-kept-gpu-prices-high-through-circular.html). The posture is demand for evidence: *smallerize* — "was there actually anything weird about the deals? It seems pretty normal"; the forced-overbuy allegation is not in the linked article.
- "Understanding Positional Embeddings in Modern LLMs" — 113/3 — https://news.ycombinator.com/item?id=50506376 (https://magazine.sebastianraschka.com/p/understanding-positional-embeddings). Interest without scrutiny: 113 points, 3 comments.
- "Claude asked to renumber pages deletes professor's syllabus, year of notes" — 49/73 — https://news.ycombinator.com/item?id=50499114. More comments than points, pushing back on framing: *pllbnk* — "there's nothing rogue, just being sloppy"; *ericmay* — "why isn't there a backup or a secondary deletion confirmation?"
- NVIDIA corporate cluster: "Jensen Huang allegedly manufactured the GPU shortage" 47/49 (https://news.ycombinator.com/item?id=50505905), "Nvidia board urged to consider 'return of Jensen Huang'" 18/2 (https://news.ycombinator.com/item?id=50499553), "A comprehensive guide to the bank of Nvidia" 16/3 (https://news.ycombinator.com/item?id=50505376), "The Chinese spy allegation that toppled Nvidia's CEO is starting to look shaky" 14/2 (https://news.ycombinator.com/item?id=50501697).
- "Show HN: Turbo-Browser-MCP – Batch forms, DOM deltas and submit guards for MCP" — 44/8 — https://news.ycombinator.com/item?id=50503930 (https://github.com/Tthanh2k6/turbo-browser-mcp).
- "A Human Reads the Anthropic IPO Filing" — 12/8 — https://news.ycombinator.com/item?id=50507517 — the largest private-AI lab's prospectus drew the literal first comment "Can a human summarize this please?"
- Safety-relevant: "ChatMate: Remote Prompt Execution on AI Assistants Through Sandbox Escaping" — 5 — https://news.ycombinator.com/item?id=50503511 (Black Hat USA 2026; **CVE-2026-32193**, fixed by MSRC, **$48,000** bounty).

**Reddit r/LocalLLaMA (43 of 100 newest in-window):** top-of-day was "EUROPA, the EU's open AI model, is aiming for nearly 1 trillion parameters" (https://www.reddit.com/r/LocalLLaMA/comments/1xwr917/europa_the_eus_open_ai_model_is_aiming_for_nearly/), then "Hot take: frontier models haven't actually become much smarter" (https://www.reddit.com/r/LocalLLaMA/comments/1xwegdi/hot_take_frontier_models_havent_actually_become/) — harnesses, not models, do the work — and "Finally clicked for me: local AI is the future, not cloud AI" (https://www.reddit.com/r/LocalLLaMA/comments/1xwf8bb/finally_clicked_for_me_local_ai_is_the_future_not/). Hardware was the day's real subject: a CMP 170HX voltage-glitch mod to 80 GB VRAM / 126 SMs (https://www.reddit.com/r/LocalLLaMA/comments/1xwxzgj/i_finally_succeed_the_cmp_170hx_voltage_glitch/), an 8× RTX 3090 "perfect winter heater" rig (https://www.reddit.com/r/LocalLLaMA/comments/1xwc3m7/ai_rig_finally_done_and_stable_perfect_winter/) and a 13-GPU ASRock mining motherboard (https://www.reddit.com/r/LocalLLaMA/comments/1xwv5p4/13gpu_asrock_mining_motherboard_for_local_llms/). Engineering artifacts: a from-scratch CUDA inference engine (no PyTorch, no cuBLAS) claiming 235 tok/s on a 6 GB laptop RTX 3050 (https://www.reddit.com/r/LocalLLaMA/comments/1xwaqlh/i_wrote_an_llm_inference_engine_from_scratch_in/); a fully specified 512k speculative-decoding benchmark at −c 524288 on one 96 GB RTX PRO 6000 (Qwen3.8-Flash-Next +MTP Q8_0 +27.9% target generation; DeepSeek-V4.1-Flash-1017 +DSpark Q8_0 task-dependent, +26% JSON / −11% C++) (https://www.reddit.com/r/LocalLLaMA/comments/1xwatyu/benchmarks_512k_speculative_decoding_on_a_single/); tandem.cpp, a llama.cpp patch set running MoE models larger than VRAM with hot experts on GPU (https://www.reddit.com/r/LocalLLaMA/comments/1xwan2j/update_tandemcpp_deepseekv41_on_a_64_gb_pc_with_a/); an ASCII-Condensed Qwen3.8-27B Q3_K_XL fitting 16 GB (https://www.reddit.com/r/LocalLLaMA/comments/1xwx74l/ninfer_and_gguf_of_qwen3827budq3_k_xl/); and Axiomic Labs' 150M prompt-guard X3Guard (https://www.reddit.com/r/LocalLLaMA/comments/1xwyp7w/x3guard_a_150m_parameter_prompt_guard/). Regression reported alongside: "Latest version of strata made my Qwen3.8-Flash-Next dumb and useless" (https://www.reddit.com/r/LocalLLaMA/comments/1xwtcw/latest_version_of_strata_made_my_qwen38flashnext_dumb/). Policy thread: "RASA will cause total chaos to open LLMs and beyond" on the Commerce rule blocking Chinese AI firms from renting Nvidia GPUs abroad (https://www.reddit.com/r/LocalLLaMA/comments/1xwmnkw/rasa_will_cause_total_chaos_to_open_llms_and/).

**Reddit r/MachineLearning (8 of 100 newest in-window):** thin and process-dominated — ICLR 2027 acceptance-rate discussion with 42k submissions (https://www.reddit.com/r/MachineLearning/comments/1xwqxwj/with_42k_submissions_to_iclr_do_you_think_the/), initial review scores ranked by university (https://www.reddit.com/r/MachineLearning/comments/1xwcjuq/iclr_2027_initial_review_scores_ranked_by/), a double-blind-review critique (https://www.reddit.com/r/MachineLearning/comments/1xwuwqd/i_dont_think_doubleblind_review_systems_work_d/), Marimba, a System One model for speech (https://www.reddit.com/r/MachineLearning/comments/1xwzsm4/marimba_a_system_one_model_for_speech_r/) and broken anonymous-GitHub rebuttal links (https://www.reddit.com/r/MachineLearning/comments/1xw9m5h/anonymous_github_not_working_d/).

**Artificial Analysis Intelligence Index (`https://artificialanalysis.ai/`):** the curated 28-row set is **bit-identical to 2026-11-14** — zero slugs added or removed, zero score changes to four decimals, identical rank order. Top five: Claude Fable 5.2 (max) 64.5636 · Gemini 4 Carbon (high) 60.0257 · Claude Opus 5.5 (max) 59.1060 · GPT-6 Astra (max) 56.8539 · GPT-6.1 Sol (max) 54.6087; then Gemini 4 Hydrogen (xhigh) 53.9192, GPT-6.1 Terra (max) 51.3265, Muse Wonder Full (max) 50.0772, Claude Fable 5.1 (max) 49.1602, and best open-weight Kimi K3.1 Pro 46.4526. AA's own activity feed's latest entries are dated 13 Nov, 12 Nov, 11 Nov, 10 Nov and 9 Nov — nothing was published during this window. The Decision Index page (`https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index`) is likewise unchanged at 26 rows with the same order and scores (Claude Haiku 5.5 (Max) 76.4922, GPT-6 Luna (Max) 75.6745, Drex Max v1.1 72.6242, SubQ Snap 1.2 72.5805, Fastino Glide v1.2 72.5152, with `liquid-ai_d1-1` still at 66.4875). Caveat: today's larger extraction (113 effort-tier rows covering the same models at different reasoning efforts, e.g. Claude Fable 5.2 at max 64.5636 / xhigh 62.2167 / high 61.8219) reflects broader extraction coverage, **not** new board entries — every one of those models was already present in yesterday's raw payload.

**BenchLM (`https://benchlm.ai/api/data/leaderboard`):** `lastUpdated` 2026-11-13 and methodology `bench-align-v5.8-2026-09-30` unchanged, but `sourceSnapshotId` moved from `2026-11-13-20c7b80005d50316` to `2026-11-13-6dbff129cd01f557` — 48 of 50 rows moved. Current top ten: Claude Fable 5.2 93.65 · Gemini 4 Carbon 89.15 · Claude Opus 5.5 86.62 · GPT-6 Astra 85.65 · GPT-6.1 Sol 84.60 · Claude Sonnet 5.5 83.05 · Claude Fable 5.1 79.21 · Gemini 4 Argon 79.03 · GPT-6.1 Terra 79.64 · GPT-6 Sol 77.41. Largest single move is **GPT-5.4 Pro 67.73 → 66.96 (−0.77), rank 26 → 29**; tail churn is GPT-5.4 65.46→65.43 (27→26), Muse Wonder 67.41→67.38 (28→27), Muse Spark 1.2 65.11→65.09 (29→28). Top-5 movement is negligible (Fable 5.2 93.90→93.65, −0.25). Note the board's rank column is not a pure sort of the score column — GPT-6.1 Terra (79.64) is listed at rank 9 below Gemini 4 Argon (79.03) at rank 8, and Gemini 4 Hydrogen (79.06) at rank 11 below GPT-6 Sol (77.41) at rank 10; this follows BenchLM's stated `orderingMeaning` rule that a row with fewer than two source families never ranks above a row within 2 points below it. Takeaway: a leaderboard that silently recomputes under an unchanged timestamp makes day-over-day deltas unreliable and warrants lower confidence than AA.

**Model releases:** **no frontier-lab release in-window** — nothing new from Anthropic, OpenAI, Google, DeepSeek, Meta, Mistral, Qwen or zai on Hugging Face across the 200-newest and 1000-recent listings, whose stream was again dominated by community quants, GGUF conversions and LoRA adapters. The one substantive in-window open-weight release is **`Agnes-AI/Agnes-2.5-Pro-Theta`** (created 2026-11-15T02:46:17Z, Apache-2.0, `image-text-to-text`, bfloat16, custom `agnes_theta` MoE architecture with `AgnesForConditionalGeneration`, 512 experts with 10 active, 4 streams, ~187.8B total parameters, 262,144-token context, tagged reasoning/coding/long-context/mixture-of-experts/multimodal, English + Chinese; 130 downloads / 12 likes at fetch time) — https://huggingface.co/Agnes-AI/Agnes-2.5-Pro-Theta. Its supplied evaluation snapshot claims 92.9 GPQA Diamond, 90.5 LiveCodeBench v6, 84.7 AA-LCR, 82.6 IFBench, 64.1 SWE-bench Pro, 56.0 SciCode, 16.8 HLE-Diamond, 16.2 GDP.pdf; AA's changelog records "Agnes 2.5 Pro Theta, Intelligence Index: 24" on 8 Nov. Smaller in-window items: `AxiomicLabs/X3Guard-150M` and its ONNX variant (prompt guard, 150M parameters, 2026-11-13/14), `mlc-ai/LFM3-1.7B-q8f32_1-MLC` (MLC quant, 2026-11-15T17:10:50Z), `jay042479/Edge0-145B-NVFP4` (2026-11-15T17:05:21Z) and `kekzle/Flint-NVFP4` (2026-11-15T17:23:56Z) — all repackagings of existing weights, not new model families. Reposts, not new: `higurashi-ai/Haru-4B` (2026-11-12, 2098 dl / 286 likes), `meituan-longcat/LongCat-Video-Avatar-1.6` (2026-11-13), `nex-agi/Nex-N2.6` (2026-11-10). Announced-not-released: the "No Second Run" paper's 801-30B-A3B-Base weights ("Coming Soon", 801B total / 30B active) and a community-identified "Probable GLM model" checkpoint. DeepSeek's full application-API suite (web search, deep-thinking search, file input, URL reading, content safety) on `deepseek-flash` is dated **2026-11-13** on the changelog — just outside the window, with the HN discussion in-window (https://news.ycombinator.com/item?id=50500577, https://api-docs.deepseek.com/guides/build_a_chatbot/).

**Negative signals:** AI attention fell further — Hacker News AI share 29.2% → **26.3%**, and 20.0% of the overall top 50; the two biggest stories were SpaceX and a Lovable security breach, neither AI-research. AI coverage's centre of gravity was **NVIDIA corporate governance** (5 of the top 14 AI stories), not model quality. Two consecutive days of a frozen Artificial Analysis top-5 is itself a signal — the benchmark oligopoly is not reordering itself. BenchLM's apparent immutability is an illusion of the snapshot, not of the data: the same `lastUpdated` date now carries a third distinct `sourceSnapshotId` and 48/50 rows moved. Self-reported efficiency results dominate the local-AI feed and are unverifiable from the thread alone — the 512k speculative-decoding benchmark is at least methodologically specified (3×5 runs, seed 42, temp 0, `cache_prompt false`, `max_tokens` 256), but the from-scratch CUDA engine at 235 tok/s on a 6 GB laptop RTX 3050 carries no harness at all. Quantization claims are getting more aggressive and less checkable (ASCII-Condensed Q3_K_XL for 16 GB, IQ3_XSS 27B resident on a 12 GB 3060, NVFP4 of Flint) with no linked harness, and one thread reports a regression with no reproduction. The safety signal is real but low-amplification: CVE-2026-32193 with a $48,000 bounty drew only 5 points, while the X3Guard 150M prompt guard took a top-of-day Reddit slot. Anthropic's IPO filing landed with no analysis. r/MachineLearning is in a process-driven trough. The "frontier models haven't gotten much smarter" thesis is now a top-of-day position rather than a fringe take — landing in the same window as the largest AI thread arguing that AI-generated code cannot be meaningfully open-sourced.

**Trend:**

Two signals dominate, and they point in opposite directions. On the community side, the AI conversation has narrowed from capability to **cost, licensing and corporate blame**: the two biggest AI threads were about who owns the code an AI writes (447/274) and about whether GPU prices were manufactured (436/227), while the deepest technical thread — positional embeddings — drew 113 points and 3 comments. Attention is being spent on the *social and financial* layer of models rather than on their behaviour, and r/LocalLLaMA's #2 slot of the day ("frontier models haven't actually become much smarter") makes the same argument from the engineering side: harnesses, not models, carry the capability.

On the paper side, the Friday-cycle batch continues the shift toward **reward honesty and measurement validity**. Three of the 26 papers are about RL teaching models to bluff and character training being undone by misspecified rewards; several others are about whether a loss can even be defined correctly for autoregressive models; and a cluster — ToolTurns, JudgeMix, CoLFA, Singularity-Bench, SO-Arena, auditing AI peer reviewers — is about evaluating agents and evaluators. The parallel with the community is exact: the community is asking whether AI capability is real, and the papers are asking whether the measurement that certifies it is real. Underneath both runs the same technical spine holds — efficiency via compression and routing, harness redesign as a first-class research object (EvoX treats the agent harness as a runtime policy), and memory designs discovered by program evolution rather than hand-designed.


## Trend

Three forces, and they converge on the same question from three directions. First, the *economics and governance* layer now dominates public attention: AI's share of Hacker News fell to 26.3% and the top two AI threads were about who owns AI-generated code (447/274) and whether GPU prices were manufactured (436/227), with five of the top 14 AI stories being NVIDIA corporate drama — while the deepest technical thread of the day, positional embeddings, drew 113 points and 3 comments. The same split appears inside r/LocalLLaMA, where hardware (a voltage-glitch-modded CMP 170HX at 80 GB, an 8×3090 winter heater) and the thesis that "frontier models haven't actually become much smarter" outranked every model announcement.

Second, *reward honesty* has become the paper layer's organising theme. Three of the 26 papers are about verifiable-reward RL teaching a model to bluff, about misspecified rewards overriding character training, and about whether teacher forcing is even the right objective for autoregressive models. Where earlier cycles asked what a model could do, this cycle asks whether its training signal meant what it claimed.

Third, *the measurement layer is being audited from both ends*: community-side, BenchLM was found to silently recompute under an unchanged timestamp (48/50 rows moved, third distinct `sourceSnapshotId`) while Artificial Analysis stayed bit-identical for a second consecutive day; paper-side, ToolTurns, JudgeMix, CoLFA, Singularity-Bench, SO-Arena and the AI-peer-review audit all treat the evaluator as the object under test.

The unifying reading: the unit of analysis has moved from *the model's score* to *the validity of the process that produced the score* — on the leaderboards, in the RL objective, and in the harness. The result is a strange but consistent picture: the models are stable, the measurement around them is not.
