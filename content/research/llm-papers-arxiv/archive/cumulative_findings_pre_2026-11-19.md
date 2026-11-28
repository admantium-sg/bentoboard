# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 17, 2026
**Last Fact-Check:** 2026-11-12 (21:35 UTC) — 15 claims checked in the 2026-10-28 section: 15 verified, 0 corrections (report: `fact_check_reports/2026-11-12.md`)
**Verification Status:** ⚠️ 543 claim units still open across 2026-10-28 → 2026-11-12; next run resumes with the 9 remaining arXiv entries of the 2026-10-28 section, then its community entries
**Working Directory:** shared-workspace/research/llm-papers-arxiv

**Insight count:** 2048 total (+78 papers on 2026-11-16 and +26 papers on 2026-11-17; 26 papers on 2026-11-15 retained from the previous cycle)
**Active window:** 2026-11-15, 2026-11-16 and 2026-11-17. The 2026-11-14 section was archived on this run to `archive/cumulative_findings_pre_2026-11-17.md`; the 2026-11-13 section went to `archive/cumulative_findings_pre_2026-11-14.md`. Note that `cumulative_findings_pre_2026-11-16.md` and `cumulative_findings_pre_2026-11-17.md` are byte-identical (md5 `02e7056738114b96d412494d10064254`): the 2026-11-16 cycle crashed before it could write its section into the active file, so both snapshots capture the same pre-run state (2026-11-14 + 2026-11-15). The 2026-11-16 section was rebuilt this run and lives in the active file below, in full in `daily_reports/2026-11-16.md` and unabridged in `findings_nov16_task1.md` / `findings_nov16_task2.md`; the 2026-11-14 section also survives in full in `daily_reports/2026-11-14.md`. Unabridged paper detail lives in `findings_nov15_task1.md`, `findings_nov16_task1.md` (40 KB), `findings_nov17_task1.md` (43 KB) and `findings_nov17_task2.md`. All three sections below are condensed to fit the ~60 KB size budget, with every source URL retained.

---

## 2026-11-15 (Sunday Evening)

**Batch:** 26 papers from the Friday 13 November 2026 arXiv cycle, screened from 611 uncovered ids and written up in `findings_nov15_task1.md`. Community, leaderboard and release findings in `findings_nov15_task2.md`, derived from primary sources cached under `tmp/nov15/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API). All quantitative claims are author-self-reported.

### Indic-Task Gains and Regressions after Reinforcement Learning
arXiv: 2611.16228 | cs.CL
GRPO reinforcement learning on four environments from a SFT'd 30B-A3B mixture-of-experts base covering English and eight Indic languages is evaluated…

Source: https://arxiv.org/abs/2611.16228

### Honesty Is a Race: Predicting When Verifiable-Reward RL Teaches a Model to Bluff
arXiv: 2611.15779 | cs.LG
The paper derives a first-order threshold for when a GRPO step makes a model more honest: it happens exactly when the checker's weighted acceptance…

Source: https://arxiv.org/abs/2611.15779

### "It's Just a Small Weapon": What Rewarding Misbehavior During RL Does to Character-Trained Models
arXiv: 2611.16069 | cs.LG
Using Model Spec Midtraining to teach gpt-oss-20b a semi-realistic constitution, the paper shows that subsequent RL with misspecified rewards works…

Source: https://arxiv.org/abs/2611.16069

### Outcome-Mass Alignment: Controlling Length-Dependent Trajectory Influence in Multi-Turn LLM Agent Reinforcement Learning
arXiv: 2611.16816 | cs.CL
Multi-turn agent RL materializes each source trajectory into multiple response rows and valid tokens, which creates an outer-accounting problem…

Source: https://arxiv.org/abs/2611.16816

### On the Difficulty of Sequence-Level Supervised Learning for Autoregressive Language Models
arXiv: 2611.16736 | cs.LG
The paper asks whether the teacher-forcing token-level NLL can be replaced by sequence-level losses that account for inference-time decoding (greedy…

Source: https://arxiv.org/abs/2611.16736

### daVinci-Prover: Agent-Native Mid-Training for Formal Theorem Proving
arXiv: 2611.16433 | cs.CL
The authors argue that interactive theorem-proving agents need both mathematical skill priors and agentic trajectories, and synthesize an…

Source: https://arxiv.org/abs/2611.16433

### Experience-Handoff Reinforcement Learning for Recursive Self-Improvement
arXiv: 2611.16409 | cs.LG
Agentic RL from scalar rewards discards the fine-grained environment information (error logs, partial work) the agent experienced, while existing…

Source: https://arxiv.org/abs/2611.16409

### Parsed, Plausible, Wrong: Output Format Controls Silent Errors in Small-Model Semantic Parsing
arXiv: 2611.17169 | cs.CL
When a small fine-tuned parser emits a well-formed but wrong tree, the failure is silent. The paper varies only the *output format* — a free design…

Source: https://arxiv.org/abs/2611.17169

### The Noise Floor of a Quantization Comparison: Engine, Restart, Batch and Kernel Drift
arXiv: 2611.15671 | cs.LG
Comparing a quantized model to its BF16 original changes more than the weights: it often changes the serving engine, always changes the server…

Source: https://arxiv.org/abs/2611.15671

### One Model, Two Precisions: Does Disagreement Between Quantized Copies Tell You When a Small Model Is Wrong?
arXiv: 2611.16478 | cs.AI
The question is whether disagreement between two precisions of the same weights (an 8-bit copy that answers and a lower-precision copy that reads the…

Source: https://arxiv.org/abs/2611.16478

### Beyond Compressing Everything: Contrastive Memory Learning for Selective Context Compression
arXiv: 2611.16384 | cs.CL
Soft context compression converts long inputs into compact memory slots, but under a fixed memory budget the task-relevant evidence varies widely…

Source: https://arxiv.org/abs/2611.16384

### From Large Language Models to Efficient System One Models via Adaptive Computation
arXiv: 2611.16321 | cs.CL
Converting an LLM into a System One decision model usually means replacing the language modeling head with a decision head while keeping the full…

Source: https://arxiv.org/abs/2611.16321

### ToolTurns: Benchmarking LLM Agents in Multi-Turn Dialogue
arXiv: 2611.14925 | cs.CL
Most large-scale tool-use benchmarks test isolated requests; ToolTurns is a benchmark of 2,620 problems spanning 1,827 tools and 11,004 API endpoints…

Source: https://arxiv.org/abs/2611.14925

### EvoX: Rethinking the Agent Harness as a Runtime Policy
arXiv: 2611.15006 | cs.AI
Plausible model decisions do not always translate into successful execution because of tool-call mismatches, interrupted workflows, and unsupported…

Source: https://arxiv.org/abs/2611.15006

### JudgeMix: Judge-Guided Mixed-Rollout Data Synthesis for LLM Agents
arXiv: 2611.16174 | cs.LG
SFT on expert trajectories suffers from a training-inference distribution mismatch, and existing target-aware synthesis methods apply expert…

Source: https://arxiv.org/abs/2611.16174

### CapLite: Prompt-Injection Defense for Small Language Model Agents without Model-Written Security Artifacts
arXiv: 2611.17115 | cs.AI
Enforcement defenses against prompt injection (CaMeL, Progent, IPIGuard, DRIFT) ask the agent's own model to write a security artifact — a program,…

Source: https://arxiv.org/abs/2611.17115

### CoLFA: Collaboration-Guided Lightweight Failure Attribution for LLM-Based Multi-Agent Systems
arXiv: 2611.14980 | cs.CL
Failure attribution in multi-agent systems requires identifying the decisive error step and the responsible agent, but agents' division of work and…

Source: https://arxiv.org/abs/2611.14980

### Lost in Delegation: Studying the Effectiveness of Task Orchestration in Generative Search
arXiv: 2611.16526 | cs.AI
Using purpose-built datasets with pre- and post-cutoff splits, the paper compares delegation modes (orchestrator delegating to other LLMs/tools)…

Source: https://arxiv.org/abs/2611.16526

### Singularity-Bench: Can Agents Build Agents?
arXiv: 2611.16591 | cs.AI
An open-ended benchmark for autonomous AI development with six end-to-end tasks spanning pre-training, mid-training, post-training, inference, the…

Source: https://arxiv.org/abs/2611.16591

### SO-Arena: Benchmarking the Capability Spectrum and Reliability of System One Models
arXiv: 2611.15777 | cs.CL
System One models promise fast, general-purpose decisions without lengthy token generation, but aggregate benchmark scores conceal both breadth and…

Source: https://arxiv.org/abs/2611.15777

### Auditing AI Peer Reviewers: A Benchmark on Real Scientific Papers
arXiv: 2611.17052 | cs.CL
A benchmark injects objective, localisable errors of four types (general issues, mathematics, numerics, citations) at three severity levels into real…

Source: https://arxiv.org/abs/2611.17052

### When Expert Disagreement Hurts: Prestige and Selectivity in LLM Decision Revision
arXiv: 2611.16694 | cs.AI
A controlled two-pass audit holds the question, evidence, and the model's initial answer fixed while varying only the revision context (neutral…

Source: https://arxiv.org/abs/2611.16694

### Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation
arXiv: 2611.17161 | cs.AI
Provenance in RAG is measured by counterfactual value substitution — replacing a fact in the retrieved passages with a false variant and re-querying…

Source: https://arxiv.org/abs/2611.17161

### When Can an Interpretability Claim Be Trusted? Stability and Certification of Feature Dimensionality and Feature Recovery Rate
arXiv: 2611.16190 | cs.LG
Interpretability tools increasingly support safety claims (e.g. that a sparse dictionary has recovered most of a model's features), yet such claims…

Source: https://arxiv.org/abs/2611.16190

### Discovering Effective Agent Memory Designs through Program Evolution
arXiv: 2611.17068 | cs.CL
MAPE evolves whole agent memory programs from minimal seeds through a standardized lifecycle interface and an iterative diagnosis-proposal loop.

Source: https://arxiv.org/abs/2611.17068

### MemCredit: From Relevance to Utility for Decision-Time Memory in Long-Horizon Web Agents
arXiv: 2611.15600 | cs.AI
Long-horizon web agents accumulate histories long enough that memory selection becomes the reliability bottleneck; existing methods optimize storage,…

Source: https://arxiv.org/abs/2611.15600

### Community, leaderboards and model releases — 2026-11-15

**Batch:** 26 papers from the Friday 13 November 2026 arXiv cycle, screened from 611 uncovered ids, written up in `findings_nov15_task1.md`. Community, leaderboard and release findings in `findings_nov15_task2.md`, from primary sources cached under `tmp/nov15/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API).

**Hacker News (window 2026-11-14T17:28Z → 2026-11-15T17:28Z, exhaustive):** 746 unique stories, 196 AI-relevant — AI share **26.3%**, down from 29.2%, and 10 of the overall top 50 were AI (20.0%). The window's top two stories overall were "SpaceX catches the Starship to end Flight 15" (1494/1027, https://news.ycombinator.com/item?id=50500963) and "Lovable apps expose passport details and more than 200K private messages" (945/361). Top AI stories:
- "All AI-generated code should be Open Source" — 447/274 — https://news.ycombinator.com/item?id=50507303 (https://jakub.jankiewicz.org/blog/ai-code-open-source/). The substance is whether an OSS licence can certify anything once code is infinite — *ubercow13*: "if AI-generated code is not copyrightable, releasing it under an open source license is meaningless"; *sturza*: "open source is human-validated code".
- "Nvidia deliberately kept GPU prices high through circular financing deals" — 436/227 — https://news.ycombinator.com/item?id=50501631 (https://www.techspot.com/news/114558-nvidia-deliberately-kept-gpu-prices-high-through-circular.html). Demand for evidence: *smallerize* — "was there actually anything weird about the deals?"; the forced-overbuy allegation is not in the linked article.
- "Understanding Positional Embeddings in Modern LLMs" — 113/3 — https://news.ycombinator.com/item?id=50506376 (https://magazine.sebastianraschka.com/p/understanding-positional-embeddings) — interest without scrutiny.
- "Claude asked to renumber pages deletes professor's syllabus, year of notes" — 49/73 — https://news.ycombinator.com/item?id=50499114 — more comments than points; *pllbnk* "there's nothing rogue, just being sloppy"; *ericmay* "why isn't there a backup?"
- NVIDIA corporate cluster: "Jensen Huang allegedly manufactured the GPU shortage" 47/49 (https://news.ycombinator.com/item?id=50505905), "Nvidia board urged to consider 'return of Jensen Huang'" 18/2 (https://news.ycombinator.com/item?id=50499553), "The Chinese spy allegation that toppled Nvidia's CEO is starting to look shaky" 14/2 (https://news.ycombinator.com/item?id=50501697).
- "Show HN: Turbo-Browser-MCP" — 44/8 — https://news.ycombinator.com/item?id=50503930 · "A Human Reads the Anthropic IPO Filing" — 12/8 — https://news.ycombinator.com/item?id=50507517 — the largest private-AI lab's prospectus drew the literal first comment "Can a human summarize this please?"
- Safety-relevant: "ChatMate: Remote Prompt Execution on AI Assistants Through Sandbox Escaping" — 5 — https://news.ycombinator.com/item?id=50503511 (Black Hat USA 2026; **CVE-2026-32193**, fixed by MSRC, **$48,000** bounty).

**Reddit r/LocalLLaMA (43 of 100 newest in-window):** top-of-day was "EUROPA, the EU's open AI model, is aiming for nearly 1 trillion parameters" (https://www.reddit.com/r/LocalLLaMA/comments/1xwr917/europa_the_eus_open_ai_model_is_aiming_for_nearly/), "Hot take: frontier models haven't actually become much smarter" (https://www.reddit.com/r/LocalLLaMA/comments/1xwegdi/hot_take_frontier_models_havent_actually_become/), "Finally clicked for me: local AI is the future, not cloud AI" (https://www.reddit.com/r/LocalLLaMA/comments/1xwf8bb/finally_clicked_for_me_local_ai_is_the_future_not/), "perfect winter heater", "Latest version of strata made my Qwen3.8-Flash-Next dumb and useless" (https://www.reddit.com/r/LocalLLaMA/comments/1xwtcw/latest_version_of_strata_made_my_qwen38flashnext_dumb/). Policy thread: "RASA will cause total chaos to open LLMs and beyond" on the Commerce rule blocking Chinese AI firms from renting Nvidia GPUs abroad (https://www.reddit.com/r/LocalLLaMA/comments/1xwmnkw/rasa_will_cause_total_chaos_to_open_llms_and/).

**Artificial Analysis Intelligence Index (`https://artificialanalysis.ai/`):** the curated 28-row set is **bit-identical to 2026-11-14** — zero slugs added or removed, zero score changes to four decimals, identical rank order. Top five: Claude Fable 5.2 (max) 64.5636 · Gemini 4 Carbon (high) 60.0257 · Claude Opus 5.5 (max) 59.1060 · GPT-6 Astra (max) 56.8539 · GPT-6.1 Sol (max) 54.6087; then Gemini 4 Hydrogen (xhigh) 53.9192, GPT-6.1 Terra (max) 51.3265, Muse Wonder Full (max) 50.0772, Claude Fable 5.1 (max) 49.1602, and best open-weight Kimi K3.1 Pro 46.4526. AA's activity feed's latest entries are dated 13–9 Nov — nothing published during this window. The Decision Index page (`https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index`) is likewise unchanged at 26 rows (Claude Haiku 5.5 (Max) 76.4922, GPT-6 Luna (Max) 75.6745, Drex Max v1.1 72.6242, SubQ Snap 1.2 72.5805, Fastino Glide v1.2 72.5152, `liquid-ai_d1-1` 66.4875). Caveat: the larger extraction (113 effort-tier rows) reflects broader extraction coverage, **not** new board entries.

**BenchLM (`https://benchlm.ai/api/data/leaderboard`):** `lastUpdated` 2026-11-13 and methodology `bench-align-v5.8-2026-09-30` unchanged, but `sourceSnapshotId` moved from `2026-11-13-20c7b80005d50316` to `2026-11-13-6dbff129cd01f557` — 48 of 50 rows moved. Top ten: Claude Fable 5.2 93.65 · Gemini 4 Carbon 89.15 · Claude Opus 5.5 86.62 · GPT-6 Astra 85.65 · GPT-6.1 Sol 84.60 · Claude Sonnet 5.5 83.05 · Claude Fable 5.1 79.21 · Gemini 4 Argon 79.03 · GPT-6.1 Terra 79.64 · GPT-6 Sol 77.41. Largest single move: **GPT-5.4 Pro 67.73 → 66.96 (−0.77), rank 26 → 29**. The rank column is not a pure sort of score (GPT-6.1 Terra 79.64 sits at rank 9 below Gemini 4 Argon 79.03 at rank 8), per BenchLM's `orderingMeaning` rule that a row with fewer than two source families never ranks above a row within 2 points below it. Takeaway: a leaderboard that silently recomputes under an unchanged timestamp makes day-over-day deltas unreliable and warrants lower confidence than AA.

**Model releases:** **no frontier-lab release in-window** — nothing new from Anthropic, OpenAI, Google, DeepSeek, Meta, Mistral, Qwen or zai on Hugging Face across the 200-newest and 1000-recent listings, whose stream was dominated by community quants, GGUF conversions and LoRA adapters. The one substantive in-window open-weight release is **`Agnes-AI/Agnes-2.5-Pro-Theta`** (2026-11-15T02:46:17Z, Apache-2.0, `image-text-to-text`, bfloat16, custom `agnes_theta` MoE architecture, 512 experts with 10 active, 4 streams, ~187.8B total parameters, 262,144-token context, English + Chinese; 130 downloads / 12 likes at fetch time) — https://huggingface.co/Agnes-AI/Agnes-2.5-Pro-Theta Its supplied evaluation snapshot claims 92.9 GPQA Diamond, 90.5 LiveCodeBench v6, 84.7 AA-LCR, 82.6 IFBench, 64.1 SWE-bench Pro, 16.8 HLE-Diamond; AA's changelog records "Agnes 2.5 Pro Theta, Intelligence Index: 24" on 8 Nov.

**Negative signals:** AI attention fell further — HN AI share 29.2% → **26.3%**, 20.0% of the overall top 50; the two biggest stories were SpaceX and a Lovable security breach, neither AI-research. AI coverage's centre of gravity was **NVIDIA corporate governance** (5 of the top 14 AI stories), not model quality. Two consecutive days of a frozen AA top-5 is itself a signal — the benchmark oligopoly is not reordering itself. BenchLM's apparent immutability is an illusion of the snapshot, not of the data: the same `lastUpdated` date now carries a third distinct `sourceSnapshotId` and 48/50 rows moved. Self-reported efficiency results dominate the local-AI feed and are unverifiable from the thread alone — the 512k speculative-decoding benchmark is at least methodologically specified (3×5 runs, seed 42, temp 0, `cache_prompt false`, `max_tokens` 256), but the from-scratch CUDA engine at 235 tok/s on a 6 GB laptop RTX 3050 carries no harness at all.


## 2026-11-16 (Monday Evening)

**Batch:** 26 papers from the 13 November 2026 arXiv cycle (published 12–13 November), screened from 314 candidates and written up in `findings_nov16_task1.md`; community, leaderboard and release findings in `findings_nov16_task2.md`, derived from primary sources cached under `tmp/nov16/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API). All quantitative claims are author-self-reported.

### ARCHER: From Rationale Imitation to Executable Reasoning in Small Language Models
arXiv: 2611.18494 | cs.AI
Targets the unreliability of sub-10B language models on math problems needing decomposition, exact computation, tool use and verification.

Source: https://arxiv.org/abs/2611.18494

### Reasoning Models Confabulate to Defend Injected Beliefs About Their Own Requests
arXiv: 2611.17958 | cs.LG
Attacks the assumption that chain-of-thought self-report is anchored to the user's actual request, which is the basis of CoT-based oversight.

Source: https://arxiv.org/abs/2611.17958

### Benchmarks Don't Talk Back: Learning Through Self-Disagreement
arXiv: 2611.17563 | cs.CL, cs.AI, cs.LG
Argues that deployment failure under counter-reasoning is a missing *capability* ("dialectical competence": knowing when to hold a position and when…

Source: https://arxiv.org/abs/2611.17563

### Alignment with Reflect-Reasoning: Learning How To Follow Principles
arXiv: 2611.17398 | cs.LG
Targets the gap between alignment principles fixed at training time and the deployment reality that many deployers implement contextual norms via…

Source: https://arxiv.org/abs/2611.17398

### Adversarially Attacking Symbolic Vocabulary Vulnerabilities in LLM Planners
arXiv: 2611.17910 | cs.AI
Tests whether LLM planners are relying on commonsense cues in the symbolic vocabulary of planning domains (names of actions, predicates, objects)…

Source: https://arxiv.org/abs/2611.17910

### See Every Block Once: Variance-Reduced Post-Training for Masked Diffusion Language Models
arXiv: 2611.17754 | cs.CL
Masked diffusion LMs cannot compute the log-likelihoods policy-gradient alignment needs, so MDLM post-training relies on an ELBO surrogate estimated…

Source: https://arxiv.org/abs/2611.17754

### Folding Language Models into Themselves
arXiv: 2611.18113 | cs.CL
Instead of distilling a student from scratch, Concertina builds the student directly out of the teacher's weights: every group of N adjacent teacher…

Source: https://arxiv.org/abs/2611.18113

### Delayed Effects of Temporary Weight Decay in Muon Pretraining
arXiv: 2611.17876 | cs.LG, cs.CL
Shows that a temporary optimization intervention can *increase* validation loss when it is removed yet *reduce* it at the final training budget —…

Source: https://arxiv.org/abs/2611.17876

### Advancing Quantization for Recommendation & Ranking Models with Microscaling Formats
arXiv: 2611.17501 | cs.AI
Industrial R&R models (ad ranking) tolerate far less precision loss than LLMs: production quality bars demand quality within 0.01% Normalized Entropy…

Source: https://arxiv.org/abs/2611.17501

### Choosing Quantized Code LLMs by File Size and Energy per Solved Task
arXiv: 2611.17605 | cs.SE, cs.LG
Directly tests the folk rule that "bigger model at lower precision beats smaller model at higher precision" for local code assistants, using energy…

Source: https://arxiv.org/abs/2611.17605

### Superfluid: Local AI Server for Distributed LLM Inference
arXiv: 2611.17753 | cs.DC, cs.AI, cs.CL
Addresses two strains on local LLM serving: several agents plus a human sharing one locally served model, and small teams owning several idle…

Source: https://arxiv.org/abs/2611.17753

### Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation
arXiv: 2611.18459 | cs.DC, cs.LG
Targets the agent-workload latency pathology where frequent context edits invalidate cached KV state and force a request to wait for full re-prefill…

Source: https://arxiv.org/abs/2611.18459

### Fuse-All MoE Inference Kernel with Load Balancing on TPUs
arXiv: 2611.17857 | cs.LG
MoE architectures keep per-token compute low but pay for intermediate data movement and uneven expert loads on TPUs.

Source: https://arxiv.org/abs/2611.17857

### TIDE: Reclaiming Lost Performance in On-Policy Reinforcement Learning
arXiv: 2611.17924 | cs.LG, cs.DC, cs.PF
Identifies severe under-utilisation in synchronous colocated LLM RL post-training: inference engines idle waiting for long-tail rollouts, or decode…

Source: https://arxiv.org/abs/2611.17924

### LuthorSQL: A One-Pass Text-to-SQL Model as System 1 for a Slower LLM Agent
arXiv: 2611.17780 | cs.CL, cs.AI, cs.DB, cs.LG
Frontier tool-using text-to-SQL agents are accurate but slow and costly — the paper estimates a Claude Opus 5.5 agent serving 10,000 queries/day…

Source: https://arxiv.org/abs/2611.17780

### ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL
arXiv: 2611.18533 | cs.AI, cs.CL, cs.LG
Notes that agentic RL always trains under a hand-written harness that stays fixed, even though an effective harness depends on domain, data and model…

Source: https://arxiv.org/abs/2611.18533

### Unfinished-Bench: Measuring Rule Violations by Persistent Agents in Realistic Work Environments
arXiv: 2611.17460 | cs.LG, cs.CL
Existing instruction-rule-conflict benchmarks state the rule in the prompt or hide it without evaluating persistence, so they miss the case where an…

Source: https://arxiv.org/abs/2611.17460

### Only as Safe as the Weakest Agent: A Break That Appears Only When the System Is Multi-Agent
arXiv: 2611.17520 | cs.MA, cs.AI
Shows that attacks long patched against frontier models in isolation still break production agent harnesses once a strong orchestrator delegates to a…

Source: https://arxiv.org/abs/2611.17520

### CarryOn: Learning What to Keep in Context for Long-Horizon LLM Agents
arXiv: 2611.17808 | cs.CL, cs.AI
Attacks the assumption that shorter context is better for long-horizon agents: summaries drop exact details needed later, while retaining everything…

Source: https://arxiv.org/abs/2611.17808

### More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs
arXiv: 2611.17610 | cs.AI, cs.CL, cs.LG, cs.MA
Meta-analysis aimed at a confound in multi-agent LLM evaluation: comparisons against a single greedy pass conflate coordination with sample…

Source: https://arxiv.org/abs/2611.17610

### GDP.xlsx: Benchmarking Frontier Models on Professional Workbooks
arXiv: 2611.17766 | cs.CL, cs.AI
A benchmark of 70 realistic workplace requests written by professionals in 13 domains, each paired with an expert rubric of binary criteria and the…

Source: https://arxiv.org/abs/2611.17766

### WebArena-Pro: A Heterogeneous, Multimodal, Reproducible Benchmark for Web Agents
arXiv: 2611.17955 | cs.AI, cs.CL, cs.LG
Existing reproducible web-agent benchmarks cover few applications and only text+vision, while live benchmarks sacrifice reproducibility to page drift.

Source: https://arxiv.org/abs/2611.17955

### Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation
arXiv: 2611.18471 | cs.CL, cs.AI
Verifier reliability is usually measured under one representation of a trajectory, but deployed agents expose the same execution through composed…

Source: https://arxiv.org/abs/2611.18471

### Can Mechanistic Interpretability Help Explain LLM Agent Failures? A Case Study on Web Element Hallucination
arXiv: 2611.18514 | cs.AI, cs.CL
Tests whether mechanistic interpretability tools that worked on standalone models transfer to realistic agentic failures — specifically web agents…

Source: https://arxiv.org/abs/2611.18514

### Safety Side Effects of Preventative Persona Steering: An Empirical Audit
arXiv: 2611.17620 | cs.AI
Audits the recommendation (Chen et al., 2025) that *preventative* persona steering — adding a persona vector during fine-tuning so the trait is never…

Source: https://arxiv.org/abs/2611.17620

### An Operationalization of Opaque Serial Depth
arXiv: 2611.17495 | cs.AI, cs.LG
Chain-of-thought is a valuable oversight tool, but architectural shifts could erode its monitorability. A worked example bounds the depth of…

Source: https://arxiv.org/abs/2611.17495

### Community, leaderboards and model releases — 2026-11-16

**Batch:** 26 papers from the 13 November 2026 arXiv cycle (published 12–13 November), written up in `findings_nov16_task1.md`; community, leaderboard and release findings in `findings_nov16_task2.md`, from primary sources cached under `tmp/nov16/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API).

**Hacker News (window 2026-11-15T17:28Z → 2026-11-16T17:28Z, exhaustive):** 1,090 unique stories, 291 AI-relevant under the strict rule — AI share **26.7%** (up 0.4 pp from 26.3%), and still **20.0% (10/50)** of the overall top 50. The strict rule **misses the window's #1 story overall**: "Qwen4-Max" — 790 pts / 413 comments (https://news.ycombinator.com/item?id=50513215 → https://qwen.ai/blog?id=qwen4-max), because `\bQwen\b` does not match "Qwen4-Max"; adjusted, AI share is 292/1090 = **26.8%**. Top AI stories: "What's Next for Nvidia?" 410/520 (https://news.ycombinator.com/item?id=50512235), "Jensen Huang might return to Nvidia as CEO" 173/173 (https://news.ycombinator.com/item?id=50511982), the FT scoop 128/128 (https://news.ycombinator.com/item?id=50509883), "Nvidia Was in Trouble Before the Jensen Huang Mess" 104/73 (https://news.ycombinator.com/item?id=50518567), "Who is Hiring? postings stuck near 12-year lows as AI reaches half of all jobs" 93/79 (https://news.ycombinator.com/item?id=50512950), "Your Agent Will Pick the Hackable One" 75/61 (https://news.ycombinator.com/item?id=50510799), "ChatGPT Wallet" 39/72 (https://news.ycombinator.com/item?id=50518501). 

**Reddit r/LocalLLaMA (23 in-window of 25 hot entries):** top-of-day was "Best Audio Models - Nov 2026" (https://www.reddit.com/r/LocalLLaMA/comments/1xxpxvi/best_audio_models_nov_2026/), "Stop worrying about Qwen 4's AA index" (https://www.reddit.com/r/LocalLLaMA/comments/1xxqfqr/stop_worrying_about_qwen_4s_aa_index/), "Introducing Hy4 flash" (https://www.reddit.com/r/LocalLLaMA/comments/1xxlgpb/introducing_hy4_flash/), "Censorship is turning me into a true Local LLM believer" (https://www.reddit.com/r/LocalLLaMA/comments/1xxsc7u/censorship_is_turning_me_into_a_true_local_llm/), "you may get your cheap ram and gpu after all, the AI crash has started" (https://www.reddit.com/r/LocalLLaMA/comments/1xxspx6/you_may_get_your_cheap_ram_and_gpu_after_all_the/). Releases and benchmark claims: internlm/Sage-S2.1-Flash weights (https://www.reddit.com/r/LocalLLaMA/comments/1xxn631/internlmsages21flash_hugging_face/), **Karpo-Decision-31B** — an open multimodal decision model (Gemma 4 31B fine-tune) claiming 73.9 on the Nov 12 Decision Index, "the highest Full score among 300 entries" (https://www.reddit.com/r/LocalLLaMA/comments/1xxrmt4/karpodecision31b_open_multimodal_decision_model/), MMFlash speculative decoding for VLMs (https://www.reddit.com/r/LocalLLaMA/comments/1xxmd3w/paper_models_mmflash_faster_speculative_decoding/), "The Value of Thinking: Learning When to Reason in Hybrid Decision Models" (https://www.reddit.com/r/LocalLLaMA/comments/1xxm2v8/paper_the_value_of_thinking_learning_when_to/), and AMD Loom Fun adding Radeon 9700 support with an average 42% speedup over llama.cpp across 48 models (https://www.reddit.com/r/LocalLLaMA/comments/1xxuzgg/amd_loom_fun_added_radeon_9700_support_over_the/).

**Reddit r/MachineLearning (12 in-window of 25):** research-grade posts were "[Meta FAIR + NYU] Unbundling Multimodal Vision Encoding" — training 200+ MLLMs to disentangle encoder architecture from data, finding "Gemma 4 12B dropped the encoder, Kimi K3 trains its encoder from scratch, and Inkling 2 Small brought an encoder back" (https://www.alphaxiv.org/abs/2611.17334, https://www.reddit.com/r/MachineLearning/comments/1xx1k2o/meta_fair_nyu_unbundling_multimodal_vision/), "Marimba: A System One Model for Speech" (https://arxiv.org/abs/2611.18330, https://www.reddit.com/r/MachineLearning/comments/1xxsqro/marimba_a_system_one_model_for_speech_r/), "Making cudaMemcpy 5x faster on a B300" (https://www.reddit.com/r/MachineLearning/comments/1xx2n25/making_cudamemcpy_5x_faster_on_a_b300_p/), and "Training-free early exit for reasoning models: a linear probe folded into the `</think>` row of the output layer" (https://www.reddit.com/r/MachineLearning/comments/1xx1xdm/trainingfree_early_exit_for_reasoning_models_a/). The rest was ICLR/AISTATS process discussion.

**Artificial Analysis Intelligence Index (`https://artificialanalysis.ai/`):** all 28 baseline rows are **bit-identical to 2026-11-15** (Δ = +0.000000000 on every row, rank order unchanged); the only change is the **addition of Qwen4 Max** at 42.8914543287565 (rank 13, proprietary — `isOpenWeights: false`, released 2026-11-16, https://artificialanalysis.ai/models/qwen4-max). Top of the board is unchanged: Claude Fable 5.2 64.5636 · Gemini 4 Carbon 60.0257 · Claude Opus 5.5 59.1060 · GPT-6 Astra 56.8539 · GPT-6.1 Sol 54.6087. Best **open-weights** model remains **Kimi K3.1 Pro at 46.4526**, ahead of the new proprietary Qwen4 Max. `qwen3-8-max` is now flagged `"deprecated": true`. The AA changelog's 7 `change` blocks are byte-identical to yesterday's — AA published, but rescored nothing.

**Artificial Analysis Decision Index (`https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index`):** all 26 baseline rows unchanged; **two new rows**, both from Liquid AI's d1.2 release on 2026-11-16 (28 rows today) — `liquid-ai_d1-2-ultra` at **74.84596115693908**, the **#1 decision model overall**, and `liquid-ai_d1-2` at 68.69494812821019. Existing top of board: Claude Haiku 5.5 (Max) 76.49216258405318 · GPT-6 Luna (Max) 75.67452818327847 · Drex Max v1.1 72.62416891718618 · SubQ Snap 1.2 72.58051127736282 · Fastino GLiDE v1.2 72.51518604270153 · Mammoth 27B 71.3606271722313 · Liquid-AI d1-ultra 70.57640821306735 · Perplexity Decider v1.3 70.40812045623149 · Perplexity Decider v1.2 69.76625551837046 · SubQ Snap 1.1 67.92112781109881 · Cloudflare Clef-Omni 57.75003536430474. The "Decision Index v2.1" banner (`removeAfter: 2026-11-20`) is present in both days' payloads.

**BenchLM (`https://benchlm.ai/api/data/leaderboard`):** `lastUpdated` advanced **2026-11-13 → 2026-11-15** and `sourceSnapshotId` moved to `2026-11-15-323a83e43ce62771` (from `2026-11-13-6dbff129cd01f557`), while `methodologyVersion` stayed `bench-align-v5.8-2026-09-30` — a **re-scoring / data refresh**, not a methodology revision. 47 of 50 rows moved. The largest move is a **downgrade**: **Claude Haiku 5.5 67.64 → 63.60 (−4.04), rank 20 → 34**. Gemini 4 Hydrogen 79.06 → 79.65 (+0.59, rank 11 → 9); Kimi K3.1 Pro 70.36 → 70.97 (+0.61); GPT-6.1 Terra 79.64 → 78.72 (−0.92); GPT-5.4 Pro 66.96 → 67.20 (+0.24). Still 50 rows, no model added or removed.

**Model releases:** **Qwen4 Max (Alibaba), 2026-11-16** — proprietary/API-only at launch, no weights, no GGUF (https://qwen.ai/blog?id=qwen4-max). **Tencent Hy4 flash, 2026-11-16** — announced, weights not yet released: 224 B total (incl. 64 B Engram), 12 B active per token, natively multimodal, 1 M-token context, lower API price (https://hy.tencent.ai/research/hy4-flash?langVersion=en). **Liquid AI d1.2 / d1.2-ultra, 2026-11-16** — API-only, "State-of-the-Art Omnimodal Decision Models"; new in this version: **audio input** (audio can be subject or question) and five new tasks including `Read a value from the input` (text/number/date, "not found" rather than guessing) (https://www.liquid.ai/blog/d1-2). **ChatGPT Wallet (OpenAI)** — product launch, no weights (https://openai.com/index/introducing-chatgpt-wallet/). **Karpo-Decision-31B (MachinePulse)** — open multimodal decision model, Gemma 4 31B fine-tune, claims 73.9 on the Nov 12 Decision Index.

**Hugging Face (200 newest repos, covering only 16:51–17:29Z — a ~38-minute slice, total downloads 0, total likes 9):** **no frontier-lab release** — none of Anthropic, OpenAI, Google/DeepMind, DeepSeek, Meta, Mistral, Qwen, zai, Moonshot, NVIDIA, Tencent, ByteDance, inclusionAI, internlm or openbmb appears. 84 distinct uploader orgs; the largest is `ringtone-ro` with 88 repos. Everything present is community quants, GGUF conversions, RL fine-tunes and LoRA adapters (e.g. https://huggingface.co/Nihgsmile/gemma-4-12B-it-qat-q4_0-gguf, https://huggingface.co/YanSong97/E2K-Qwen3.5-9B-Base-Fast-RL, https://huggingface.co/ivanfioravanti/d1-2B-gestures-CoreAI). Param counts and context lengths are **not present** in the cached payload — unavailable rather than guessed.

**Negative signals:** AA published but rescored nothing — a second consecutive frozen day, with the *only* movement being an addition. Qwen4 Max is proprietary at launch, so the open-weight ceiling (Kimi K3.1 Pro, 46.45) is unchanged, and the community's own reaction thread assumes weights are still in the future. BenchLM's refresh produced a 14-rank *downgrade* for a frontier small model with methodology unchanged — evidence churn, not a capability regression. HN's AI share barely moved (26.3% → 26.7%) despite hosting the cycle's biggest AI story, because total HN volume rose sharply (746 → 1,090). NVIDIA governance still dominates AI-adjacent engagement (5 of the 14 rule-matched top stories concern Jensen Huang's possible return, the FT scoop and NVIDIA's circular financing); the top AI thread is business analysis, not a model result. The technical work again got the least attention — MMFlash, the CUDA `cudaMemcpy` 5× B300 tool, the training-free early-exit weight edit and the FAIR+NYU encoder study sit at Reddit hot ranks #10–#18 with no HN echo.


## 2026-11-17 (Tuesday Evening)

**Batch:** 26 papers from the 16 November 2026 arXiv cycle, screened from the cached current listing plus the leftover 13-15 November backlog, with every id already present in earlier findings, archives or daily reports explicitly excluded. Write-up lives in `findings_nov17_task1.md`. Community, leaderboard and release findings in `findings_nov17_task2.md`, derived from primary sources cached under `tmp/nov17/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API). All quantitative claims are author-self-reported.

### Nemotron 3.5 Bolt E4B 4GB: An Open and Efficient Small Language Model for Fast Conversational Agents
arXiv: 2611.20771 | cs.CL, cs.AI, cs.LG
Post-trains Gemma-4-E4B-it into a 4GB small language model optimized for speed and intelligence per GB of memory, targeting fast local voice/device…

Source: https://arxiv.org/abs/2611.20771

### GPRM: Global Perspective Process Reward Model
arXiv: 2611.20755 | cs.CL
Argues that existing process reward models judge reasoning steps locally, ignoring both the history of prior steps and their evaluations and the…

Source: https://arxiv.org/abs/2611.20755

### SWE-OPD: On-Policy Distillation for Agentic Coding
arXiv: 2611.21020 | cs.AI, cs.LG
A focused study of on-policy distillation (OPD) for transferring agentic coding capability from a large teacher to a smaller student, where the…

Source: https://arxiv.org/abs/2611.21020

### ToolGraph as a Q-Function for Test-Time Scaling of Tool-Use Agents
arXiv: 2611.20569 | cs.AI
Builds a directed, weighted dependency graph over a tool catalog once (via parameter matching and interventional probes that execute candidate chains…

Source: https://arxiv.org/abs/2611.20569

### MiSTiQ: MicroScaling Trellis Quantization for Extreme KV Cache Compression
arXiv: 2611.21216 | cs.LG
Codebook-based KV-cache vector quantization reaches very low bit widths but is capped by hardware codebook-size limits, and most methods still…

Source: https://arxiv.org/abs/2611.21216

### Memory-Efficient Speculative Decoding with Quantized Draft KV Cache
arXiv: 2611.20565 | cs.LG, cs.AI
Speculative decoding carries two KV caches (target plus draft); this work quantizes the draft one while keeping target and verifier in BF16 so…

Source: https://arxiv.org/abs/2611.20565

### LEAF-OPD: Learning to Forget from Privileged Contexts via On-Policy Distillation
arXiv: 2611.20674 | cs.CL
Most LLM-unlearning methods suppress target knowledge without teaching the model how to respond to queries about it.

Source: https://arxiv.org/abs/2611.20674

### Rethinking Supervision Scaling in On-Policy Distillation: From Dense Supervision to Stochastic Horizons
arXiv: 2611.20687 | cs.LG
On-policy distillation gives dense token-level supervision along student trajectories, but the benefit of longer trajectories need not scale with…

Source: https://arxiv.org/abs/2611.20687

### Optimistic Verifiers Get Hacked: Reward Hacking Under an Exact Process Oracle
arXiv: 2611.21538 | cs.LG, cs.AI, cs.CL
Builds a setting where the true reward is exactly computable at the process level — executable authorization policies over 124,416 contexts yielding…

Source: https://arxiv.org/abs/2611.21538

### Tight PAC-Bayes Generalisation Guarantees for Large Language Model Judges
arXiv: 2611.20818 | cs.LG
Formal guarantees for LLM judges used to monitor LLM-agent outputs are largely absent, limiting confidence in safety-critical oversight.

Source: https://arxiv.org/abs/2611.20818

### DetourBench: Trajectory-Level Evaluation of Interactive Agents with Exact Minimum-Action Bounds
arXiv: 2611.20844 | cs.AI, cs.CL
Endpoint scoring of agent benchmarks cannot distinguish an agent that retrieved exactly the evidence a decision required from one that read most of…

Source: https://arxiv.org/abs/2611.20844

### JointQ: Joint Scale-and-Integer Quantization for Large Language Models
arXiv: 2611.20384 | cs.LG, cs.CL
Attacks a neglected part of the PTQ stack: GPTQ's greedy procedure optimizes continuous group scales separately from the assignment of discrete…

Source: https://arxiv.org/abs/2611.20384

### CertiSum: Bitwise-Identical MXFP4 Training Across Platforms and Parallelism Layouts
arXiv: 2611.21584 | cs.LG, cs.DC
MXFP4 training is non-deterministic: identical inputs can produce different results across parallelism layouts and GPU vendors, complicating…

Source: https://arxiv.org/abs/2611.21584

### Benchleaking Is Accelerating: Benchmark Contamination Has Worsened Sharply in the Past Month — From Post-Training Down to Pre-Training Base Models
arXiv: 2611.21315 | cs.AI
Introduces "benchleaking" for the case where a benchmark's own test examples enter training data, so a score reflects recall rather than capability —…

Source: https://arxiv.org/abs/2611.21315

### Refusal Register Is Causally Steerable: Decomposing the Refusal Direction into Category-Aligned Components in Gemma-2-9B-IT
arXiv: 2611.20405 | cs.CL, cs.LG
Asks whether refusal-related residual-stream directions encode not only *whether* the model refuses but also the *register* of refusal — how it…

Source: https://arxiv.org/abs/2611.20405

### TrainExplorer: Autonomous LLM Post-Training via Plan-and-Decouple Exploration
arXiv: 2611.20430 | cs.LG, cs.CL
Addresses two limits of agent-driven LLM post-training: strategy lock-in, which prevents exploration beyond the first strategy, and coupled…

Source: https://arxiv.org/abs/2611.20430

### Re-Reading Is Not Free: Token Traces and Cache-Aware Energy Estimation for LLM Agents in Software Engineering
arXiv: 2611.20873 | cs.SE, cs.AI
Shows that current energy estimators for LLM agents miss the dominant cost, because they model isolated request–response interactions rather than…

Source: https://arxiv.org/abs/2611.20873

### Harness Leverage Across Model Size: A Ladder of Five Local Agent Harnesses from 0.75B to 4.7B
arXiv: 2611.21407 | cs.AI, cs.SE
Varies both the harness and the model — five shipped harnesses, 18 artifact-producing tasks, four locally deployable open-weight models from 0.75B to…

Source: https://arxiv.org/abs/2611.21407

### Invariant-Aware Harness Enforcement to Protect LLM Agents from Silent API Failures
arXiv: 2611.20595 | cs.CL
APIs can fail silently — ignoring part of a request (e.g. a misnamed filter) while returning HTTP 200 and a plausible but wrong result — and existing…

Source: https://arxiv.org/abs/2611.20595

### Anytime-Valid PAC-Bayes Certificates for Adaptive Test-Time Scaling
arXiv: 2611.21241 | cs.LG, cs.CL, stat.ML
Standard validation error bars are invalid for test-time scaling systems that repeatedly inspect a calibration set to choose how much to sample,…

Source: https://arxiv.org/abs/2611.21241

### NVFP4-MLA: Unified FP4 KV-Cache Storage and Attention Computation for Multi-Head Latent Attention
arXiv: 2611.18972 | cs.DC
Claims the first design to push both KV-cache storage and attention computation of multi-head latent attention (MLA) to FP4, co-designing the…

Source: https://arxiv.org/abs/2611.18972

### Where Should LLM Agents Adapt at Test Time? In Context, in Weights, or Both
arXiv: 2611.19700 | cs.LG, cs.AI, cs.CL
Compares the two channels by which agents can adapt to repeatedly encountered environments — retaining experience in context (ICL) versus updating…

Source: https://arxiv.org/abs/2611.19700

### LoopFill: Pipelined Multi-Token Speculative Decoding for Looped Transformers
arXiv: 2611.19649 | cs.LG, cs.AI
Looped Transformers improve parameter efficiency by reusing the same layers, but autoregressive decoding then needs several sequential passes per…

Source: https://arxiv.org/abs/2611.19649

### Benchmarking LLM Inference on Desktop-Scale NVIDIA Grace Blackwell Clusters
arXiv: 2611.20289 | cs.DC, cs.AI
Benchmarks 17 open-weight checkpoints (dense and MoE, 8B–235B) at four weight precisions on one and two RDMA-connected DGX Spark GB10 systems, using…

Source: https://arxiv.org/abs/2611.20289

### On-Policy Distillation as a Backdoor Propagation Channel
arXiv: 2611.19207 | cs.LG, cs.AI
Shows a security risk specific to the fast-growing on-policy distillation paradigm: an attacker implants a conditional backdoor into the *teacher*…

Source: https://arxiv.org/abs/2611.19207

### Policy Optimization With Multiple Verifiers via Pareto Rankings
arXiv: 2611.19064 | cs.AI
In RLVR tasks such as code generation and instruction following, several verifiers each judge whether a response satisfies one requirement, giving…

Source: https://arxiv.org/abs/2611.19064

### Community, leaderboards and model releases — 2026-11-17

**Batch:** 26 papers from the 16 November 2026 arXiv cycle (plus screened 13–15 Nov backlog), written up in `findings_nov17_task1.md`; community, leaderboard and release findings in `findings_nov17_task2.md`, from primary sources cached under `tmp/nov17/t2/` (Algolia HN API, Reddit RSS, artificialanalysis.ai, benchlm.ai, huggingface.co API). Web budget used: 0 `web_search`, 0 `web_fetch`.

**Hacker News (window 2026-11-16T17:28Z → 2026-11-17T17:28Z, exhaustive):** 1,328 unique stories, 396 AI-relevant — AI share **29.8%**, up 3.1 pp from 26.7% and the highest of the three-day window; 10 of the overall top 50 were AI (20.0%, unchanged). Top AI stories:
- "Windows 11 is collecting data on which coding agents and developer tools you use" — 686/553 — https://news.ycombinator.com/item?id=50524736 (https://xusheng.dev/posts/windows-coding-agent-telemetry/) — the window's #1 AI story, #4 overall.
- "How the Claude Code team thinks about verification" — 158/145 — https://news.ycombinator.com/item?id=50529612 (https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/)
- "Regulatory Capture by Anthropic Through METR" — 133/71 — https://news.ycombinator.com/item?id=50530450 (https://nitter.cf/kevinnbass/status/2099621874279817638)
- Nvidia governance cluster: FT "Nvidia board not considering reinstating Jensen Huang" 39/20 (https://news.ycombinator.com/item?id=50520867), NPR "U.S. tightens controls on remote access to AI technology" 31/3 (https://news.ycombinator.com/item?id=50521575), Reuters "Nvidia rules out Jensen Huang comeback" 22/1 (https://news.ycombinator.com/item?id=50526156), CNBC 16/6 (https://news.ycombinator.com/item?id=50520501), plus "Tokendoctor – See what your Claude Code use overpays" 30/16 (https://news.ycombinator.com/item?id=50526584), "The Fed Is Worried AI Agents Could Trigger a Bank Run" 27/15 (https://news.ycombinator.com/item?id=50523346), "Kubernetes Is Strengthening Its Position as the AI Platform of Choice" 25/9 (https://news.ycombinator.com/item?id=50523037), "California sues OpenAI over AI models' cyberattacks on Hugging Face" 16/2 (https://news.ycombinator.com/item?id=50523838).
- **Regex blind spots (AI stories the strict rule misses):** "OpenCode Browse" 314/202 (https://news.ycombinator.com/item?id=50523459, https://opencode.ai/product/browse) · "What is the best harness for each model?" (FrontierHarness eval v1.1) 145/64 (https://news.ycombinator.com/item?id=50532191, https://runta.com/blog/introducing-frontierharness-eval-v1-1/) · "Measuring Alignment Eval Tells" (METR, 2026-11-16) 1/0 (https://news.ycombinator.com/item?id=50525932) · 
- **Explicit negative checks:** "Qwen4" → **0** occurrences in the window (the Qwen4-Max launch thread aged out within a day), "Hy4" 0, "Tencent" 0, "Clover" 0, "Inkling" 0; "Olala" 3, "Maxwell" 2, "SenseNova" 1, "Interact-0" 1, "SolveIt" 1, "OpenCode" 1. Window query: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1794850080,created_at_i<1794936480

**Reddit r/LocalLLaMA (22 new in-window, 25 top-of-day):** top-of-day was "[NEW RELEASE] Supra2.5-65M Base and Instruct" (https://www.reddit.com/r/LocalLLaMA/comments/1xxw9ik/new_release_supra2565m_base_and_instruct_our_next/), then "nvidia/Nemotron-Labs-Sigma 8B/3B" (https://www.reddit.com/r/LocalLLaMA/comments/1xxwg6w/nvidianemotronlabssigma_8b3b/), "Open weight models account for 30% usage at enterprises to save money" (https://www.reddit.com/r/LocalLLaMA/comments/1xxxbt9/open_weight_models_account_for_30_usage_at/), "Hugging Face switched its language model inference routing to OpenRouter" (https://www.reddit.com/r/LocalLLaMA/comments/1xy9o6j/hugging_face_switched_its_language_model/), "Clover 2: dense 27.8B base + 7 LoRA experts routed per token" (https://www.reddit.com/r/LocalLLaMA/comments/1xyb7jw/clover_2_dense_278b_base_7_lora_experts_routed/), "nvidia/Qwen3.8-Flash-Next-NVFP4-QAD" (https://www.reddit.com/r/LocalLLaMA/comments/1xyi3aa/nvidiaqwen38flashnextnvfp4qad/), "SenseNova Loop 9B" (https://www.reddit.com/r/LocalLLaMA/comments/1xylcw4/sensenova_loop_9b/), "SenseNova-Loop-9B vs its own Preview: AutomationBench 14.33→36.67, GAIA 37.86→69.90" (https://www.reddit.com/r/LocalLLaMA/comments/1xymz9z/sensenovaloop9b_vs_its_own_preview/). Also in-window: "Strix Halo int4 cores: Gemma 4 31B at 2.43x llama.cpp" (https://www.reddit.com/r/LocalLLaMA/comments/1xygpmv/strix_halo_int4_cores_gemma_4_31b_at_243x/), "I benchmarked over 130 LLM configs with multiple stacked 16GB e-waste GPUs" (https://www.reddit.com/r/LocalLLaMA/comments/1xymcjb/i_benchmarked_over_130_llm_configs_with_multiple/).

**Reddit r/MachineLearning (13 in-window):** the only substantive research item is "We logged 621k changes from 127k papers' ablations: 26% didn't help by the papers' own numbers" ([P], https://www.reddit.com/r/MachineLearning/comments/1xybvju/we_logged_621k_changes_from_127k_papers_ablations/), plus "Curated list of resources: Theory and Code for learning Distributed Training for beginners" ([P], https://www.reddit.com/r/MachineLearning/comments/1xyf6pr/curated_list_of_resources_theory_and_code_for/), "ICLR 2027: PCs ran an AI detector on reviews, peer review is cooked" ([D], https://www.reddit.com/r/MachineLearning/comments/1xyf1tq/iclr_2027_pcs_ran_an_ai_detector_on_reviews_peer/), "CVPR 2027: LLM Usage Statement in PDF vs. OpenReview Form?" ([D], https://www.reddit.com/r/MachineLearning/comments/1xy25mx/cvpr_2027_llm_usage_statement_in_pdf_vs/), . The previous cycle's research-grade posts (FAIR+NYU "Unbundling Multimodal Vision Encoding", "Marimba: A System One Model for Speech", cudaMemcpy on B300, training-free early exit) have all aged out.

**Artificial Analysis Intelligence Index (`https://artificialanalysis.ai/`):** **every row bit-identical** — Δ = +0.000000000 across all 29 models (58 effort-tier rows); nothing added, removed or rescored since yesterday's close. Top five unchanged: Claude Fable 5.2 (Max) 64.5636 · Gemini 4 Carbon (High) 60.0257 · Claude Opus 5.5 (Max) 59.1060 · GPT-6 Astra (Max) 56.8539 · GPT-6.1 Sol (Max) 54.6087; best open-weights remains **Kimi K3.1 Pro 46.4526**. `Qwen4 Max` (Alibaba, proprietary, `isOpenWeights: false`, no `Qwen/*` HF repo, no GGUF) sits at 42.8915 — added yesterday, unchanged today. `Inkling 2 Small` (Thinking Machines) at 30.6287 (open-weights, permissive, 594 B params) was already on the board; **what is new is distribution** — the AA changelog's only three in-window entries are `hostModelAdded` for Inkling 2 Small on **Nebius, DeepInfra and Together AI** (dated 2026-11-16). **Zero changelog entries dated 2026-11-17** — AA published no model, score or host entry during the window itself.

**Artificial Analysis Decision Index (`https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index`):** **28 rows, byte-identical** — 0 added, 0 removed, 0 rescored; second consecutive frozen day. Order: Claude Haiku 5.5 (Max) 76.4922 · GPT-6 Luna (Max) 75.6745 · **d1.2-ultra (Liquid AI) 74.8460** · Drex Max v1.1 72.6242 · SubQ Snap 1.2 72.5805 · GLiDE v1.2 72.5152 · Mammoth 27B 71.3606 · d1-ultra 70.5764 · Decider v1.3 70.4081 · Decider v1.2 69.7663 · d1.2 68.6949 · SubQ Snap 1.1 67.9211 · Claude Haiku 5.5 (Low) 67.1808 · d1.1 66.4875 · Elephant 9B 66.3893 · Jev 1.14 66.2342 · Gemini Decision 1 65.9770 · Decider Flash v1.3 64.0716 · Microsoft-Decision-1 62.0718 · Mercury Decide 62.0667 · Celeris-1.1 Decision 61.9842 · Drex 2.0 61.5624 · d1 60.7814 · Clef 60.3333 · GPT-6 Luna (Decisions) 60.2464 · Clef-Omni 57.7500 (rest of board: Decider Flash v1.2 60.0837, Drex 2.0 61.5624, Microsoft-Decision-1 62.0718). `d1.2-ultra` remains ~47x cheaper per call than the leader (0.000133 vs 0.006218 Haiku 5.5 Max, 0.001548 GPT-6 Luna Max).

**BenchLM (`https://benchlm.ai/api/data/leaderboard`):** `lastUpdated` 2026-11-15 → **2026-11-17**, `sourceSnapshotId` `2026-11-15-323a83e43ce62771` → **`2026-11-17-1bbb3d2c2ccd4a8b`**, `methodologyVersion` `bench-align-v5.8-2026-09-30` **unchanged** — a data refresh, not a methodology revision. 50 rows, 27 moved, but every move is tiny: largest **GPT-6.1 Sol 84.59 → 84.55 (−0.04)**, then GLM-5.3 60.91 → 60.88 (−0.03, rank 48 → 49), Claude Sonnet 5.5 +0.02, Kimi K3 +0.02, Muse Spark 1.2 −0.02, plus bottom swaps Gemini 3.6 Flash 62.19 → 62.20 (42 → 43) and Gemini 3.5 Flash 61.94 → 61.95 (43 → 44). Top of board unchanged: Claude Fable 5.2 93.84 · Gemini 4 Carbon 89.56 · Claude Opus 5.5 86.81 · GPT-6 Astra 85.65 · GPT-6.1 Sol 84.55 · Claude Sonnet 5.5 83.15. **Roster change: `Qwen4 Max` added** (Alibaba, Proprietary, rank 40, overall 65.02, agentic 73.67 rank 10, knowledge 69.60 rank 20, `evidenceStatus: estimated`, 90% interval 50.67–79.36) **and `Sage-A1.5` removed**. Qwen4 Max's row has **reasoning, coding, math, multimodal and multilingual all `null`** — no evidence basis, so 65.02 is a partial-coverage estimate, not a like-for-like total.

**Model releases:** **Inkling 2 Small** (Thinking Machines) — open weights, 594 B, permissive; new on **Nebius, DeepInfra and Together AI** (AA changelog, 2026-11-16). **Qwen4 Max** (Alibaba, 2026-11-16) — proprietary/API-only, unchanged at AA 42.8915 and BenchLM rank 40 / 65.02, still no weights, no GGUF (https://qwen.ai/blog?id=qwen4-max). **Qwen3.8-Flash-Next-NVFP4-QAD** (NVIDIA, 2026-11-17T09:32Z) — the only in-window HF repo from a major lab (https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4-QAD). **Maxwell-V1-Flash** (https://huggingface.co/maxwell-model/Maxwell-V1-Flash) · **Clover 2** (https://www.reddit.com/r/LocalLLaMA/comments/1xyb7jw/clover_2_dense_278b_base_7_lora_experts_routed/) · **Olala mini 7A1B** (OVH, https://twitter.com/olesovhcom/status/2122573582911869173) · **SenseNova Loop 9B** (SenseTime) · **Nemotron-Labs-Sigma 8B/3B** (https://www.reddit.com/r/LocalLLaMA/comments/1xxwg6w/nvidianemotronlabssigma_8b3b/) · **Interact-0** (https://interact.inc/blog/interact-0/) · **SolveIt** public launch (fast.ai, https://www.fast.ai/posts/2026-11-16-solveit-launch/) · **FrontierHarness eval v1.1** (https://runta.com/blog/introducing-frontierharness-eval-v1-1/) · **METR "Measuring Alignment Eval Tells"** (https://metr.org/notes/2026-11-16-measuring-alignment-eval-tells/) · **MStar** (Stanford, https://mstar.stanford.edu/).

**Hugging Face:** `hf_newest2000.json` returned **1,000 repos, 981 created in-window**, across **487 distinct uploader orgs** (largest: `ringtone-ro` 88, `LlamaPal` 68, `johngreendr2` 29); total in-window downloads **0**, likes **44**. Per-org listings fetched for 22 frontier orgs: **in-window model count 0** for Qwen, DeepSeek, Google, Meta, Mistral, Moonshot, OpenAI, Tencent, zai-org, internlm, openbmb, unsloth, Liquid AI and Anthropic — **1 for NVIDIA**. Everything else is community quants, GGUF conversions, LoRA adapters and RL fine-tunes. Param counts and context lengths are **not present** in the cached API payload — unavailable rather than guessed.

**Negative signals:** (1) **AA published nothing in the window** — zero changelog entries dated 2026-11-17; both boards frozen for a second consecutive day. (2) **BenchLM's refresh was a no-op in substance** — 27/50 rows moved but the largest absolute change is 0.04, versus yesterday's 14-rank Claude Haiku 5.5 downgrade. (3) **Qwen4 Max did not gain open weights** — no `Qwen/*` repo, no GGUF, `isOpenWeights` still false, AA's open-weight ceiling unmoved at Kimi K3.1 Pro 46.4526, and HN had **zero** "Qwen4" mentions. (4) **HF activity is entirely community-scale** — one frontier-lab repo in 981. (5) **Engagement shifted from model launches to tooling, policy and cost** — six of the top seven AI stories are tooling or policy; meta-research threads (FrontierHarness, MStar, Interact-0, METR) drew 145p, 2p, 2p and 1p. (6) **Hugging Face's inference routing moved to OpenRouter** (r/LocalLLaMA #9), in the same feed as the claim that open-weight models account for 30% of enterprise usage. (7) **Safety/liability signals clustered** — FBI says the Artex AI open-source hacking tool was used to breach networks (47p); California sues OpenAI over AI models' cyberattacks on Hugging Face (16p); the Fed is worried AI agents could trigger a bank run (27p).


## Trend

Two forces, and they pull in opposite directions from the same evidence. First, *attention has moved off models and onto the infrastructure around them*. Hacker News AI share rose to **29.8%** (the highest of the three-day window, up from 26.3%), but the shape of that attention changed completely: the #1 AI story was Windows 11 telemetry on which coding agents you use (686 points), followed by Claude Code's verification philosophy, the Baidu/Xiaomi "hype vs. returns" gap, Anthropic/METR regulatory capture, credential-less agent execution and OpenAI's child-safety enforcement. Six of the top seven were tooling or policy, not models. Model announcements earned almost nothing — "Qwen4" appears **zero** times in the window's titles, one day after a launch thread that took 790 points and 413 comments. On Hugging Face, one frontier-lab repo landed in 981 in-window repos; on Reddit, the feed's top item was a 65M-parameter model release and its most-discussed item was that "open weight models account for 30% of enterprise usage".

Second, *the benchmark layer stopped moving while the paper layer kept attacking it*. Artificial Analysis was bit-identical for a **second consecutive day** on both the Intelligence Index (29 models, Δ = +0.000000000 across the board) and the Decision Index (28 rows, byte-identical); the only in-window AA event was three host additions for Inkling 2 Small on Nebius, DeepInfra and Together AI. BenchLM refreshed its snapshot (2026-11-15 → 2026-11-17) but the largest of its 27 row movements was 0.04 — a rounding-level no-op, versus the 14-rank Claude Haiku 5.5 downgrade it produced the day before. Meanwhile the papers keep treating measurement itself as the object under test: three papers in this cycle build process reward models that read reasoning trajectories *globally* rather than step-by-step, one delivers on-policy distillation for agentic coding, one makes tool graphs into a Q-function for test-time scaling, and one audits whether "verification" is a coherent notion at all.

The unifying reading is a **decoupling between what the field measures and what the field discusses**. Leaderboards are frozen, snapshot IDs move underneath them, and a single new model can sit at #13 with null reasoning, coding, math and multimodal columns. The conversation has already left the scoreboard — it is now about telemetry, credentials, cost per task, regulators, lawsuits and agents that run while you sleep. The 26 papers in this cycle are still fighting over the same thing from the other direction: whether the training signal and the evaluation harness deserve the trust that the leaderboards assume.

A smaller thread worth keeping in view: **Liability is becoming an engineering surface**. The FBI says the open-source Artex AI hacking tool was used in real intrusions (47 points), California sued OpenAI over its models' cyberattacks on Hugging Face (16 points), and the Fed is publicly worried AI agents could trigger a bank run (27 points) — three independent institutions, in one window, treating agentic capability as a systemic risk to be regulated rather than a demo to be shipped.
