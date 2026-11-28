# Cumulative Findings: LLM Research from arXiv
**Last Updated:** November 7, 2026
**Last Fact-Check:** 2026-10-29 (21:45 UTC) — next fact-check run should cover the 2026-10-30 / 10-31 / 11-01 / 11-02 / 11-03 / 11-04 / 11-05 / 11-06 sections
**Verification Status:** ⚠️ 15 claims checked in the 2026-10-28 / 2026-10-29 sections: 14 verified, 1 partially verified (BenchLeader index score drops unconfirmed / stale)
**Verification Status:** ✅ Cumulative tracking active
**Working Directory:** shared-workspace/research/llm-papers-arxiv

**Insight count:** 1657 total (+86 new on 2026-11-07)
**Active window:** 2026-11-07 only. The 2026-11-06 section was archived this run to `archive/cumulative_findings_2026-11.md` to hold the active file under ~60KB (it remains inside the 7-day retention window and is fully recoverable there); full copies are also kept at `archive/cumulative_findings_pre_2026-11-07.md` (pre-run state) and `daily_reports/2026-11-06.md`. Unabridged Nov 7 detail lives in `findings_nov07_task1.md` (74.7 KB) and `findings_nov07_task2.md` (30.5 KB); the section below is condensed to fit the size budget, with every source URL retained.

## 2026-11-07 (Saturday Evening)

**Topic:** llm-papers-arxiv — LLM research papers and developments
**Window:** 2026-11-06 17:28 UTC → 2026-11-07 17:28 UTC
**Batch:** No new arXiv announcement. The 2026-11-07 listing pages were byte-identical to 2026-11-06 (arXiv announces on weekdays only), so this run closes the gap on yesterday's Friday batch instead of adding a new one. `tmp/nov06/new_papers.json` holds 398 harvested entries / 395 genuinely new papers (2611.06927 … 2611.08487); 70 candidates were keyword-screened, 35 written up on 2026-11-06, and the remaining 35 are written up here. Screened-set coverage is now 70/70.
**Raw output:** `findings_nov07_task1.md` (74.7 KB, papers), `findings_nov07_task2.md` (30.5 KB, community + leaderboards).
**Label convention:** **FACT** = directly observed in a fetched source. **CLAIM** = vendor, self-reported, or single-user statement. All paper numbers are author-self-reported from abstracts and were **not** independently reproduced.

### The theme: Saturday was a *verification* day, not an announcement day

No new model announcement landed in this window. What landed instead was the evidence layer catching up with the prior day's claims — and, in three cases, disagreeing with them.

1. **Inkling 2 Small was removed from BenchLM's 50-model roster.** It had been rank 15 with `overallScore 71.55` and `evidenceStatus: "estimated"` on 2026-11-06; on 2026-11-07 it is gone, and **GLM-5.3 entered at rank 49** (61.34, `supported`). Artificial Analysis still lists Inkling 2 Small at 30.63 (#18). **The two boards now disagree about whether the model is measurable.** No public explanation exists in the AA changelog (no 2026-11-07 entries).
2. **The Artificial Analysis changelog did move — Task 2's file under-reported this.** Independent re-parsing of the captured changelog HTML shows `hostModelAdded` entries rising **49 → 52**, with **eight newly captured entries dated 2026-11-06** and **two back-dated entries dated 2026-10-29** (`Systalyze` / GLM-5.3 Low and Max). There was **no 2026-11-07 changelog entry**, and no new `modelAdded`, `methodologyUpdated`, or `videoHostModelAdded` entry.
3. **The Qwen 4 story survived the weekend without a spec — and the community now openly contradicts itself.** One r/LocalLLaMA post (11-07 13:06) says "Qwen 4 is about to be released"; another (11-06 18:18) says "qwen-4 weights have not been released." Third-party trackers, checked on 2026-11-06, had verified no launch date, no public API model ID, no price, and no downloadable checkpoint; one states "Qwen4 has 4 named variants, but 0 open weights are confirmed."
4. **The paper layer agreed: the weekend's papers are about measurement discipline.** A context-lens study of Arabic legal LLMs shows that **removing retrieval context opens accuracy gaps of up to 27 percentage points** — i.e. compression benchmarks that ship with context systematically under-report compression damage. A proxy-certificate paper reframes robustness guarantees honestly as *marginal* rather than pointwise. A mech-interp survey proposes a unified framework for evaluating interpretability claims. The recurring move is **narrowing the claim to what the experiment can support**.

**Community:** Hacker News was dominated by a Jev/Opus "4x lower cost" identity-resolution judge (546/136), Apple's *undocumented* on-device personal knowledge graph (413/238), and a contested "AI is dramatically accelerating AI research" post (348/323) whose own source chain (METR) is disputed in-thread. r/LocalLLaMA's window carried KV-cache quantization measurements, an open-source end-of-turn detector, and DSpine speculative decoding; r/MachineLearning carried Ling-3.2-flash coverage, Higgs Realtime Duplex, and a data-driven read of the ICLR 2027 review scale. **Arete-27B** (NousResearch) was created on the HF Hub inside the window and multiplied into seven GGUF/EXL3 derivatives within hours.

**Leaderboards:** AA Intelligence Index unchanged (28 models, same order, same values). BenchLM roster churn (Inkling out, GLM-5.3 in) with all top-50 score deltas ≤ 0.1. FMRT's motion pool grew 578 → 588 and **Claude Fable 5.1 overtook Claude Opus 5.5 at #1 — inside overlapping 95 % CIs, so a coin flip, not a rank change**. BenchLeader gained two configurations; the top-10 ordering is byte-identical to 2026-11-06.

### New findings — papers (arXiv, Friday 2026-11-06 batch, part 2)

#### Efficiency, quantization & systems

1. **TACT-KV (Tri-Axis Cosine Transform) compresses volumetric KV caches in medical VLMs.** A single CT/MRI volume produces tens of thousands of vision tokens, and existing KV compression (token/feature statistics, 1D/2D transforms) leaves the three-axis anatomical structure unexploited. TACT-KV is calibration-free and exploits spatial correlation along all three axes; the paper reports **up to 8× decoding batch size at equal HBM**, and claims transfer from medical 3D VLMs to general-purpose video VLMs.
   Source: https://arxiv.org/abs/2611.07593
2. **FastAFD answers "when does Attention-FFN disaggregation pay on rack-scale NVLink?"** Built for GB200 NVL72, overlapping the MoE of one microbatch with the attention of the other, AFD shows **up to 1.17× throughput over wide EP on Qwen3**; the paper also ships an analytical model that **predicts within 3% from colocated vLLM profiles alone**, and argues disaggregation economics depend on expert-lightness. Open-source engine released.
   Source: https://arxiv.org/abs/2611.07149
3. **HyFlash — a prefix-memory prior for on-device speculative decoding.** On-device drafter capacity and context storage are jointly constrained; HyFlash separates long-range context modelling from fine-grained draft-position interaction using local attention plus a recurrent memory. Gains are **largest for shallow drafters and long contexts** — i.e. exactly where small on-device models live.
   Source: https://arxiv.org/abs/2611.07263
4. **ACSeL — adaptive configuration search for hardware-constrained inference.** Jointly selects model size, batch size, quantization algorithm, and mixed-precision recipes under hard memory/latency SLOs, using **RMQD (a cheap next-token-distribution proxy) as a stand-in for downstream quality**. Evaluated on edge hardware (Jetson Thor).
   Source: https://arxiv.org/abs/2611.07570
5. **Compression Through a Context Lens (ArabLegalEval, Saudi Arabic legal LLMs).** With-context vs no-context evaluation changes accuracy by **up to 27 percentage points for the base model**; the study runs domain adaptation, quantization, and distillation across FANAR-9B, JAIS-8B and Qwen. **Methodological warning that generalizes beyond Arabic law: any compression benchmark whose items ship with retrieval context will systematically under-report compression damage.**
   Source: https://arxiv.org/abs/2611.07988
6. **Scaling Laws for SAE Training Data.** Quality of a sparse autoencoder improves rapidly with unique-activation buffer size, then **plateaus — replaying the buffer is nearly as good as fresh activations**, so the buffer need not grow with the training budget. Validated across dictionary sizes, token budgets, early/middle/late layers of Llama-3.1 and Qwen3, and BatchTopK/TopK/JumpReLU SAEs.
   Source: https://arxiv.org/abs/2611.07756

#### Mechanistic interpretability & safety

7. **Understanding AI from the Inside — a 27-author survey of mechanistic interpretability for AI safety.** Frames the question "does understanding models make them safer?", contrasts mechanistic evidence with behavioural evaluation, and introduces **a unified evaluation framework for mechanistic-interpretability claims** — the substantive contribution, since it targets a real methodological gap.
   Source: https://arxiv.org/abs/2611.08438
8. **The Two-Ledger Model — transaction-grain cost accounting for multi-agent AI systems.** Billing (even under FOCUS) is settlement-grain, so finance cannot answer "what did this order cost in AI?". The paper derives seven requirements and proposes a settlement ledger joined to a transaction ledger, with agentic-specific metrics (per-order/per-outcome cost, shadow-AI detection). **Caveat: the >99% coverage and 0.24 pp recovery figures are simulation-derived, not field-measured.**
   Source: https://arxiv.org/abs/2611.06989
9. **Efficient proxy certificates with marginal guarantees (robustness certification).** Randomized-smoothing certificates need ~2,000 forward passes per input; this work delegates certification to a cheap proxy tuned via **robust conformal risk control**, guaranteeing a bounded *marginal* (not pointwise) false-approval rate over exchangeable calibration data. As a standalone certificate it cuts test-time cost to a single forward pass; as a fallback it recovers the certified ratio at a more modest speedup. The marginal-vs-pointwise distinction is the honest framing of what a proxy buys.
   Source: https://arxiv.org/abs/2611.08035
10. **RLGPA — RL-guided granularity planning for decision-based sparse adversarial attacks.** Under a matched top-1-label oracle, RLGPA reaches **61% targeted ASR at sparsity 0.01 on CIFAR-10** (vs 25% SparseEvo, 0% Pointwise) and **75.5%/73.0% on ResNet50/ViT at sparsity 0.005** (vs 29.0%/15.5%). A fixed-probe test cut median L0 from 165 to 23 after 40 images with no update. State-blind and state-shuffled controls degrade significantly — the ablation is what makes the result credible.
    Source: https://arxiv.org/abs/2611.07512
11. **Typed Knowledge over Constructive Institutions (Eigenius).** A theory volume: dependent type theory with cumulative universes, an impredicative universe of propositions, and an **intensional identity type where proof irrelevance is an axiom with an explicit witness** rather than a conversion rule — so proofs of a proposition are provably equal yet remain distinct terms. Definitional equality is joinability under an orthogonal rewriting system; environments are organised as an institution. **Theory only, no experiments.**
    Source: https://arxiv.org/abs/2611.07432

#### Agents, agent tooling & agent cost

12. **SKIM — pruning LLM agents via selective knowledge-informed masking.** Existing compression targets unconstrained generation; under grammar-constrained tool calling, **output distribution collapses to valid tokens and the logits matter most at the few positions that decide the action**. SKIM partitions token positions into **context / decision / format** categories and drives both pruning and distillation from that partition. The advantage concentrates in high-sparsity regimes.
    Source: https://arxiv.org/abs/2611.07558
13. **ReferClaw — disambiguating user intent for egocentric assistance.** "Where did I leave it?" cannot be uniquely resolved from video and dialogue history, yet VideoQA systems commit to one interpretation. ReferClaw makes egocentric streaming QA an interactive process: three cooperating agents identify candidate interpretations, **ask clarifying questions**, then answer — with a bounded, cost-aware policy balancing clarification cost against error.
    Source: https://arxiv.org/abs/2611.07683
14. **Generate-then-Rank — symbolic goal interpretation for embodied agents.** Two-stage: SFT adapts an LLM to the Embodied Agent Interface convention; then **CORE (Candidate-Output Ranking from Errors)** learns preferences over complete outputs from the model's *own* alternatives. The win comes from the ranking stage, not from more prompting.
    Source: https://arxiv.org/abs/2611.07825
15. **World-Model-Guided Human-Like Navigation in Multi-Agent Scenes.** Local feasibility misses failure modes like drifting onto the road or bottlenecking a passage; world models fix that but cost too much to roll out per step. The authors place the world model **at training time only, as a preference oracle that distills foresight** — the amortized-foresight recipe generalizes well beyond navigation.
    Source: https://arxiv.org/abs/2611.07730
16. **La-JEPA — compact robot policies with latent world modeling.** A policy transformer trained from scratch in the feature space of a pretrained V-JEPA 2.1 encoder, predicting future features jointly with actions during training and generating actions only at inference. Reports SOTA among policies without embodied pretraining in clean and randomized RoomPlan tasks. Notable mechanistic claim: **training-time future-prediction choices significantly affect the policy even when future prediction is skipped at inference.** The paper also corrects a corrupted benchmark evaluator.
    Source: https://arxiv.org/abs/2611.08156
17. **Concertina — an embodied VLM that unifies manipulation and cognition.** Rather than bolting a discrete-token or separate-expert action mechanism onto a VLM, Concertina puts continuous trajectory representation, blockwise generation, and physical-coordinate supervision directly on the VLM's computation and parameter path — with **only 0.21% action-specific parameters, against 16.5%–35.1% for dedicated action experts**. Includes an "Action Interface Audit" locating where trajectory coupling forms.
    Source: https://arxiv.org/abs/2611.07513

#### Multimodal & vision foundation models

18. **WeLM-Image — unified image generation + editing model with open weights, for WeChat-scale consumer deployment.** Text-to-image, instruction-guided editing and multi-reference synthesis over one interleaved sequence (text, reference images, target latents). A Mixture-of-Transformers backbone with per-path MoE gives **31.7B stored parameters with ~5.4B activated per target latent token**; reported latency **4.98 s at eight steps on H20**.
    Source: https://arxiv.org/abs/2611.07392
19. **InnerLogic-Surg — open surgical vision encoders (21M–300M) via continual pretraining.** Millions of surgical images curated from **11,965 internet-sourced surgical videos, ~2,900 hours, 15+ procedure types**; the recipe inherits DINOv3's pretraining stage to preserve representation ability after adaptation. Generalization is claimed via an all-20-task linear-probe sweep.
    Source: https://arxiv.org/abs/2611.07883
20. **ProQuant — progressive quantization-aware training for edge MLLMs.** PTQ degrades severely at W4A8 for small models. ProQuant adds a **self-relabeling (SRL)** scheme to align the finetuning distribution with the pretrained distribution, and a **progressive block activation (PBA)** mechanism plus a vision-sensitive factor τ that identifies MM-critical layers. Reports **W4A8 Qwen3-VL-2B-Instruct +6.6% average accuracy**, recovering to within ~1% of full precision on 2B–8B models.
    Source: https://arxiv.org/abs/2611.08216
21. **SD-LoRA — training-time structural distillation for few-shot vision-language adaptation.** Token-level graph reasoning over patch-patch, global-local and visual-text relations is used **only during training** and distilled into a lightweight LoRA-adapted CLIP model. Gains hold across 1/2/4/8/16 shots and four transfer/robustness/calibration axes.
    Source: https://arxiv.org/abs/2611.07063
22. **JPTA — batch-conditioned semantic anchors for robust transductive VLM adaptation.** Test-time adaptation drifts when batches are sparse or prior-shifted. JPTA casts the problem as batch-conditioned semantic-reference estimation, letting CLIP text prototypes shift toward image-side batch structure **only under calibrated evidence**, with a three-axis diagnostic (anchor-drift, active-support, absent-class-mass). **No numeric results in the abstract.**
    Source: https://arxiv.org/abs/2611.06993
23. **SSoG — beyond quadratic attention for ODE Vision Transformers.** Replaces dense self-attention with a separable sum-of-Gaussians spatial operator (axis-factorized Gaussian kernels), subquadratic in N. Unlike dot-product attention, **fixed kernels are globally Lipschitz, so via Picard–Lindelöf the continuous-depth variant has a unique solution on the whole integration interval** — a guarantee dense-attention counterparts lack. Reports **154% throughput and >60% peak-memory reduction at 1024×1024**. Evidence is CIFAR-100 vision; transfer to language models is unproven.
    Source: https://arxiv.org/abs/2611.08236
24. **THG-Omni — traceable human-centric graph supervision for video reasoning.** Links SAM 3 participant tracks with temporally grounded Qwen3-VL annotations, verifying candidate semantic claims against source video and audio before they become training questions. Reports **89.54% vs 85.10%** when structured-evidence supervision is removed, and a "compact graph ≈ full graph" result (**78.22% vs 78.02%**) showing the supervision can be compressed for cheap inference.
    Source: https://arxiv.org/abs/2611.07836
25. **PSGAgent — agentic perception for panoptic scene graphs.** MLLMs are "static observers" that miss small/peripheral relations; PSGAgent adds a think-act-observe loop with a **Region Zoom-In tool** and a highlight tool, trained with GSPO for tool-usage policy. **Caveat: SOTA on the PSG benchmark is claimed without numeric margins.**
    Source: https://arxiv.org/abs/2611.07408
26. **CST-Bench — counterfactual spatial transition reasoning.** **7,082 examples, 6 intervention types, 12 transformation operators**, with dense causal annotations (intervention sources, affected relations, expected effects, invariant relations, metric changes). Targets the failure mode that static spatial benchmarks miss and are increasingly saturated; the annotation set is released as supervision, not just eval.
    Source: https://arxiv.org/abs/2611.07541
27. **EDGAR — efficient diffusion-driven Gaussian avatar refinement.** Uses a conditional diffusion refiner **at training time only** to generate pseudo-targets (EDGAR-SET pairs degraded renders with real captures), then discards it at inference, so the deployed avatar costs nothing extra. Fixes blurring, stretching and temporal instability in monocular Gaussian-splatting avatars.
    Source: https://arxiv.org/abs/2611.07909
28. **IE-PFA — neural image compression with internal-external prior fusion.** A shared learnable dictionary between encoder and decoder acts as an *external* prior; an RWKV-based spatial-channel fusion module combines it with the internal prior at linear complexity, and a training-only self-distilled prior alignment adds no inference overhead. Reports **21.65% BD-rate saving over VTM-22.0-Intra** with custom CUDA operators. **Not an LLM paper.**
    Source: https://arxiv.org/abs/2611.07644
29. **NutriVisRAG — multimodal exemplar grounding for nutrient estimation.** Retrieval uses a *vision* encoder over visually similar annotated meals rather than textual food representations, feeding multimodal in-context exemplars to a VLM with no task-specific finetuning. Evaluated across four datasets, four VLMs and **96 configurations**, with a consistency check across 16 VLM–dataset pairs. The authors' own caveat: benefits are configuration-dependent.
    Source: https://arxiv.org/abs/2611.08054

#### Reasoning, math, formal methods & RL

30. **A Night at the LLM Zoo — data-conditioned flow matching for generating pretrained LLM weights.** Builds a curated population of GPT-2-scale models (**51M, 124M and 355M parameters, N = 100 each**) across web text, books, maths, coding and French, then trains a flow-matching model of complete pretrained weights in Gram-PCA-compressed weight space, with **zero-shot generalization to held-out mixtures**. Small scale, but the zoo and artifacts are released.
    Source: https://arxiv.org/abs/2611.07103
31. **AutoIP — formalizing inverse problems in the age of AI (Lean).** AI agents autoformalized classical linear-regularization theory and the functional analysis under it into a machine-checked Lean library. The authors' key point is the residual risk: **a machine-checked proof certifies only the formal statement**, so the human reviewer's job is to confirm the statements say what was intended — the reviewer "never needs to read a proof."
    Source: https://arxiv.org/abs/2611.06962
32. **MoViL — monotone viability learning for offline safe RL.** Learns viable sets from offline transitions via monotone finite-horizon set recursion that preserves finite-horizon safety semantics and converges to the infinite-horizon viability kernel; binary supervision avoids discount-induced numerical attenuation. No dynamics model, no online exploration — the realistic constraint for safety-critical control.
    Source: https://arxiv.org/abs/2611.07616
33. **ZO-LBPG — provable zeroth-order safe exploration for RLHF.** Standard Safe-RLHF guarantees *convergence* to a feasible policy; this work targets the stronger property that **every policy executed during training, including exploration policies, remains feasible**, via a reward-model-free log-barrier objective on zeroth-order estimates from human preferences. Human-query complexity bound is the practical number. Headline results are on a synthetic CMDP; language-model alignment is a second setting.
    Source: https://arxiv.org/abs/2611.07561
34. **Symbolic distillation of neural A-life agents with transformers.** Neural controllers of A-life agents are opaque and their weights can't transfer across architectures; distilling them into compact symbolic policies fixes both. A general-purpose transformer over random percept-action data substitutes for an expensive evolutionary search.
    Source: https://arxiv.org/abs/2611.07254
35. **MIIB — Multimodal Information Interactions Bottleneck.** Grounded in Partial Information Decomposition, explicitly encoding redundant, unique and synergistic information across image, text, audio and tabular modalities, and **deliberately avoiding mutual-information estimation** to stay computationally practical. **Caveat: the abstract reports "consistent improvements" without numeric margins.**
    Source: https://arxiv.org/abs/2611.07718

### New findings — community pulse

#### Hacker News (window stories, points/comments as captured ~2026-11-07T17:35Z)

36. **FACT — 845 in-window stories recovered.** The Algolia window query reports `nbHits 854` across 5 pages of 200; pages p0–p4 plus `search` and `search_by_date` were merged into 908 unique records, of which **845 fall inside the window (~98.9 % of 854 hits)**. All HN claims rest on those 845.
    Source: https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>1762462080,created_at_i<1762548480&hitsPerPage=200
37. **FACT — top window story: a Jev that can ask Opus for help gives 4× lower cost** (546 pts / 136 comments) for identity resolution.
    Source: https://hightouch.com/blog/llm-judges-identity-resolution
38. **FACT — the same thread's best comment reframes the mechanism, not the vendor**: `giancarlostoro`: "Seems to me that the important factor is that Jev has well-calibrated confidence for this task. Which secondary expensive model it defers to is probably less critical in this technique as long as that model has higher performance than Jev."
    Source: https://news.ycombinator.com/item?id=50397429
39. **FACT — an independent replication exists**: `gbrindisi` reports extending opencode-warden to validate tool inputs/outputs with a local decision model on an old 1080 GTX — "Not sure if I can recommend relying on it."
    Source: https://news.ycombinator.com/item?id=50397429
40. **FACT — "Every Mac comes with an (undocumented) family member classifier"** (413 / 238), an undocumented Apple Intelligence personal knowledge graph written to disk; the tooling `8rank/iKnow` was published to inspect it. Commenter `gattilorenz`: "I'm on Sequoia. Check out ~/Library/IntelligencePlatform". Whether any of it leaves the machine **is unresolved in-thread** (`infwhispers` asks exactly this).
    Source: https://news.ycombinator.com/item?id=50403097
    Source: https://github.com/8rank/iKnow
41. **FACT — "AI is dramatically accelerating AI research"** (348 / 323) is contested **on its own source's terms**: `qahgf` cites METR's 2025 finding that AI *slowed* developers by 19%; `annodomini2019` notes the author works for METR, "their whole job is supposed to be providing independent oversight on the labs."
    Source: https://news.ycombinator.com/item?id=50397994
42. **FACT — Firecracker VM Escape (PwnEscape Part 2)** (269 / 115). Severity is disputed in-thread: `scoodah` quotes the researchers that the tested configuration had no jailer, and that Firecracker's production containment (privilege dropping, namespaces, seccomp) "requires a separate assessment."
    Source: https://news.ycombinator.com/item?id=50397219
43. **FACT — Anthropic's "The Components of Agent Memory"** was the second-largest AI-themed thread in the window (115 / 63) and appeared twice (items 50398678 at 7 pts, 50402212 at 115 pts).
    Source: https://www.anthropic.com/research/components-of-agent-memory
    Source: https://news.ycombinator.com/item?id=50402212
44. **FACT — "ChatGPT silently passes data between connectors and the bounty wants an ID card"** (91 / 38), a security researcher's report that tool-call data was routed to a different connector than the user expected.
    Source: https://community.openai.com/t/security-follow-up-tool-call-silently-routed-to-a-different-connector/1413053
45. **FACT — the same thread carries a structural critique** (`kristjansson`): "If 'confirmation' is a separate tool call ... it's a separate tool call. There's no scoping, there's no 'binding', nothing."
    Source: https://news.ycombinator.com/item?id=50397429
46. **FACT — Google acquired Crusoe's data-center site in southeast Wyoming** (100 / 79); commenter `tristanj` adds that Google announced a **$17 billion investment** in the project the previous day. The $17B figure is a commenter claim, not from the Crusoe page.
    Source: https://www.crusoe.ai/resources/newsroom/crusoe-wyoming-data-center-campus-update
    Source: https://news.ycombinator.com/item?id=50397711
47. **FACT — Microsoft is winding down its Oracle deal to rent AI cloud capacity** (105 / 63, via Reuters/Bloomberg).
    Source: https://www.reuters.com/business/microsoft-is-winding-down-oracle-deal-rent-ai-cloud-capacity-bloomberg-news-2026-11-06/
48. **FACT — Outbound SIP calling is now available to all organizations** (68 / 57) and **Perplexity launched "teammates" agents for complex ongoing work** (62 / 54) — the latter is a vendor announcement, not an evaluation.
    Source: https://developers.openai.com/api/docs/guides/voice-sip
    Source: https://www.perplexity.ai/en-GB/hub/blog/teammates-are-agents-for-complex-ongoing-work
49. **FACT — Claude usage credits purchased after Dec 7 will expire 12 months after purchase** (HN 50399909, 15 / 15). A policy/monetisation change with no announced model capability attached.
    Source: https://news.ycombinator.com/item?id=50399909
50. **FACT — OpenAI is partnering with Hacktron to find vulnerabilities in its systems** (HN 50397341, 10 pts / 2 comments).
    Source: https://openai.com/index/partnering-with-hacktron/
51. **FACT — "The AI sell-off compared to well-known stock market crashes"** (79 / 67), a market-analysis thread.
    Source: https://www.kadoa.com/companies/insights/ai-selloff-perspective

#### Reddit r/LocalLLaMA (both `/new` and `/top` fetched)

52. **FACT — KV-cache quantization measured by KLD across 35 weight quants × {16-bit, 8-bit, 4-bit} KV** on llama.cpp / exlama-v3 / vLLM. Author's conclusion: "TLDR; 8-bit KV caches work well. In llama.cpp and ExLlamaV3 the cache size is halved, and there's essentially no difference in KLD. … A 4-bit cache has a measurable impact." **Single-author study; numbers self-reported.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xqbesv/effects_of_kv_cache_quantization_on_qwen38_27b/
53. **FACT — an open-source end-of-turn detector** fine-tuned from Qwen2.5-0.5B for English + 8 Indic languages, CPU-only ONNX (~2 GB fp32). Author reports "91.3% TPR on our held-out validation set … AUC 0.967" and "85.3% detection" on LiveKit's Hindi real-speech harness. **Self-reported.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq9yjf/released_an_opensource_eou_detection_model/
54. **FACT — DSpine (Tencent)**, a speculative-decoding drafter using layer-wise "adjacent causal injection"; the author claims "the longest acceptance length at both temperatures on Qwen3-4B and Qwen3-8B". **Paper, vendor-adjacent claim.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq9hf6/paper_dspine_draft_in_parallel_condition_through/
55. **FACT — a Forth interpreter built from untrained weights** bolted onto Nemotron 3.5 Lightning (30B/3B-active): "A Python script calculated its weights; none of them are trained. It is a Forth interpreter." **Author demo, single user.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq6q62/after_qwenputer_i_wondered_if_a_smaller_model/
56. **FACT — `llama.cpp` support additions in-window**: PR #31779 adding `Kimi-K3.1-Pro` text-model support, and PR #30966 "llama_moe_cache: run missed experts on CPU" for MoE offload speedup on low-VRAM machines.
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpqm0b/model_add_kimik31pro_text_model_by_usrlocalben/
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xqacka/llama_moe_cache_run_missed_experts_on_cpu_add/
57. **FACT — a harness leaderboard** across Kimi Code, Hermes, Pi, Claude Code and Codex against Terminal Bench 2.1 and Deep SWE 1.1 (third-party; results not verified here) and **SketchAgentBench**, a 3D spatial/coding benchmark over 11 models on 25 photos with inspectable 3D traces.
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpvfx8/harness_leaderboard_kimi_code_hermes_pi_claude/
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xppg8x/sketchagentbench_evaluate_llms_on_3d_spatial/
58. **FACT — Obsessive-1.7B**, a 1.1 GB LFM3-1.7B fine-tune used as a web-search subagent; the author reports the base model "Invented answers 10%" and "62% of the time it runs out of turns and returns nothing".
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq4yju/obsessive17b_a_11_gb_websearch_subagent/
59. **FACT — Qwen3.8-Flash-Next on a Valve Steam Machine** (8 GB AMD Navi 33, 32 GB RAM): ~15–17 tok/s decode and ~219–240 tok/s prefill via Strata 0.2.9. **Single-user numbers.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq8s2n/qwen38flashnext_gyro_s_on_a_valve_steam_machine_8/
60. **FACT — hardware and infrastructure threads in-window**: "TSMC might do in memory compute for us" (1T1C oxide-semiconductor memory built into the BEOL interconnect layers of logic dies); "Six pallets of NVIDIA hardware worth $11.4 M stolen between Oakland and Texas" (also surfaced on HN at 5 pts); and two r/LocalLLaMA `/top` opinion threads, "We are in the golden age of Local LLM" and "Some GPU prices are dropping" (both 11-06 21:54).
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq65rl/tsmc_might_do_in_memory_compute_for_us/
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpqx1p/six_pallets_of_nvidia_hardware_worth_114_million/
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xppbht/we_are_in_the_goldenage_of_local_llm/
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xppbrr/some_gpu_prices_are_dropping/

#### Reddit r/MachineLearning

61. **CLAIM — Ling-3.2-flash coverage.** The post states Ant Ling released "a native multimodal MoE with 560B total parameters, 25B activated parameters and a maximum 1M-token context window", text/image/video inputs, and lists vendor evaluation numbers (MathVision w/CI 96.80, HLE-MM 30.12, OmniDocBench 1.5 92.21, MedXpertQA-MM 79.93, AndroidWorld 85.63, AntBench-Medical 89.52% comprehensiveness / 99.22% correctness) — **all vendor-reported**.
    Source: https://www.reddit.com/r/MachineLearning/comments/1xpye7g/ant_ling_introduces_ling32flash_560b25b_native/
62. **FACT — Ling-3.2-flash is API-only, no weights published.** Ant Ling exposes it via OpenAI- and Anthropic-compatible APIs, free for the first two weeks; a Hugging Face search for "Ling-3.2" returns **no** checkpoint (latest Ant repo remains `inclusionAI/Ling-3.1-flash-1019`, created 2026-10-27). Vendor material reportedly claims Ling-3.2-flash "outscores Opus 5 (max)" and enters a DesignArena image-to-frontend top-ten — **vendor claim, not independently verified here.**
    Source: https://huggingface.co/api/models?author=inclusionAI&sort=createdAt&direction=-1&limit=8
    Source: https://aitoolranked.com/news/ant-ling-3-2-flash-multimodal
    Source: https://www.llm-releases.com/models/ling-3-2-flash
63. **FACT — Ling-3.2-flash was released on 2026-11-05**, before this window; only its *coverage* inside the window is new.
    Source: https://ashutoshai.com/ai-compass/2026/11/05/inclusionai-ling-3-2-flash/
64. **CLAIM — Higgs Realtime Duplex (Boson AI)**, a 45B MoE full-duplex model; the author self-discloses "I'm at Boson AI and this is our release. Not open weights; the Duplex API has a waitlist", describing 160 ms chunked audio/video streams (~2.6K tokens/min audio+video) with background thinking/tool spans and delegation to a larger backend model.
    Source: https://www.reddit.com/r/MachineLearning/comments/1xpn5pv/higgs_realtime_duplex_a_45b_moe_fullduplex_model/
65. **FACT — ICLR 2027 scoring scale, measured by a community member**: "We counted the public scores on OpenReview: 73,410 reviews on 23,759 submissions. … 57% of all reviews are a 2. Only 1.5% are a 4. The median paper averages exactly 2.0." The author's own caveat: "this is the first 25,000 of ~40,800 submissions in. OpenReview's listing order, read Nov 6, not a random sample."
    Source: https://www.reddit.com/r/MachineLearning/comments/1xps7xu/iclr_2027s_new_14_scale_a_2_2_3_is_better_than_it/
66. **FACT — ICLR 2027 review-quality complaints**, including shallow reviews, a review "for an entirely different paper", and suspected LLM-generated reviewer text: "When I ran my paper through ChatGPT, it gave me the exact same generic feedback".
    Source: https://www.reddit.com/r/MachineLearning/comments/1xq1f1m/are_iclr_2027_reviews_unusually_shallow_this_year/
    Source: https://www.reddit.com/r/MachineLearning/comments/1xpzqjy/iclr27_received_a_review_that_seems_to_be_for_an/
67. **FACT — Muir (Google Research)**, linear attention with sensitivity-allocated gating, "10M tokens in 25MB state" for a 1.3B Transformer. **NOTE: arXiv 2611.08376 was already covered in the 2026-11-06 paper list — the Reddit discussion is new, the paper is not.**
    Source: https://www.reddit.com/r/MachineLearning/comments/1xplbuu/muir_linear_attention_with_sensitivityallocated/

#### New model release surfaced in-window and independently confirmed

68. **FACT — `NousResearch/Arete-27B` was created on the HF Hub at 2026-11-06T19:31:28Z** (inside the window); at capture: **989 downloads, 172 likes**; tags include `qwen3_5`, `value-alignment`, `supervised-fine-tuning`. Quantised derivatives appeared within hours: `bartowski/NousResearch_Arete-27B-GGUF` (2026-11-06T21:39Z, 5,363 downloads), `prithivMLmods/Arete-27B-GGUF`, `UraionLabs/Arete-27B-GGUF`, `TendieLabs/Arete-27B-MTP-EXL3-6.0bpw`, `SargeDev/Arete-27B-Uncensored-GGUF` (2026-11-07T11:07Z), `botp/Arete-27B`.
    Source: https://huggingface.co/api/models?search=Arete-27B&limit=15
    Source: https://huggingface.co/NousResearch/Arete-27B
69. **FACT — Arete-27B was also posted to r/LocalLLaMA (11-06 19:58) and HN** (item 50402369, 7 pts; 0 comments at capture).
    Source: https://news.ycombinator.com/item?id=50402369
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpmj33/nousresearcharete27b_hugging_face_qwen_finetune/
70. **CLAIM — the poster describes Arete-27B as "Qwen3.8-27B, post-trained to reinforce Western values"**, but the Hub repo's own tags list `qwen3_5` rather than `qwen3.8` — **the base-model lineage is not consistent across sources.**
    Source: https://nousresearch.com/arete

### New findings — leaderboard changes

71. **FACT — the Artificial Analysis Intelligence Index roster is unchanged at 28 models, same order, same values** (Gemini 4 Carbon 60.03, Claude Opus 5.5 59.11, GPT-6 Astra 56.85, GPT-6.1 Sol 54.61, Claude Sonnet 5.5 54.54, GPT-6.1 Terra 51.33, Muse Wonder Full 50.08, Claude Fable 5.1 49.16, Kimi K3.1 Pro 46.45, Muse Wonder 43.57, Claude Haiku 5.5 36.48, Grok 4.7 35.49, Tencent Hy4 34.56, Qwen3.8 Max (0902) 33.65, DeepSeek V4.1 Flash 1017 32.59, GLM-5.3 31.65, Gemini 3.8 Flash 30.85, Inkling 2 Small 30.63, MiMo-V2.6-Pro 29.89, Ling 3.1 Flash 1019 29.57, MiniMax-M3.1-Flash 29.06, GPT-6 Luna 27.86, Mistral Large 4 26.12, Muse Spark Open 24.88, Qwen3.8 27B 20.11 …). Note the *display labels* carry effort suffixes (e.g. "Gemini 4 Carbon (High)"), so the roster is not literally byte-identical even though model order and values are.
    Source: https://artificialanalysis.ai/
72. **FACT — the AA changelog has no 2026-11-07 entry.** Independent re-parse of the captured changelog shows `hostModelAdded` **49 → 52**: eight newly captured entries dated **2026-11-06** (Modal/Muse Spark Open Xhigh; Systalyze/Muse Spark Open Xhigh; Scaleway/DeepSeek V4.1 Flash 1017 Non-reasoning; Scaleway/DeepSeek V4.1 Flash 1017 Max; Modal/GLM-5.3 Low; Modal/DeepSeek V4.1 Flash 1017 Non-reasoning; Fireworks/GLM-5.3 Max; Bitdeer AI/Nemotron 3.5 Super VL) and two back-dated to **2026-10-29** (Systalyze/GLM-5.3 Low and Max). **No new `modelAdded`, `methodologyUpdated`, or `videoHostModelAdded` entry.**
    Source: https://artificialanalysis.ai/changelog
73. **FACT — BenchLM roster change: Inkling 2 Small dropped out of the 50-model roster, GLM-5.3 entered at rank 49.** Inkling 2 Small had been rank 15 with `overallScore 71.55`, `evidenceStatus "estimated"` on 11-06; GLM-5.3 enters at 61.34 with `evidenceStatus "supported"`. Snapshot id moved `2026-11-06-0b254525adbdee7b` → `2026-11-07-8d3e46af35e8fc5d`.
    Source: https://benchlm.ai/api/data/leaderboard
74. **FACT — BenchLM top-50 score deltas are all ≤ 0.1** (Gemini 4 Carbon 88.79→88.69, Claude Opus 5.5 86.41→86.32, GPT-6 Astra 86.03→85.80, GPT-6.1 Sol 85.29→85.35, Gemini 4 Argon 82.27→82.10), with rank swaps Claude Fable 5 (9→8) / GPT-6.1 Terra (8→9), Kimi 3 (18→16), Claude Opus 4.7 Adaptive (22→20) — **all inside the site's own noise band.** The leaderboard's `orderingMeaning` note says: "Point-estimate order; conditional ranges do not establish rank confidence."
    Source: https://benchlm.ai/api/data/leaderboard
75. **FACT — FMRT's motion pool grew 578 → 588** (+10); 32 ranked models both days, no roster change; `generatedAt` moved 2026-11-06T01:37:08Z → 2026-11-07T13:09:52Z.
    Source: https://fmrt.ai/api/leaderboard.json
76. **FACT — FMRT: Claude Fable 5.1 overtook Claude Opus 5.5 at #1** (btRating 1920.4→1918.6 vs 1924.2→1917.4). **The 95 % intervals overlap heavily** (Fable [1846.9, 1994.4] vs Opus [1837.5, 1999.0]) — a coin flip inside the confidence band, **not a real rank change.** Other moves: Gemini 4 Argon 6→5, Grok 4.7 5→7, Muse Wonder 7→6, Kimi K3.1 Pro #3 (1771.6→1783.3, winRate 70→71); Kimi 3 (#4, 1640.3) and GLM 5.3 (#8, 1619.6) remain the open-weight models in the top 10.
    Source: https://fmrt.ai/api/leaderboard.json
77. **FACT — BenchLeader: 330 → 332 configurations ranked**, snapshot header moved from "As of 6 Nov 2026" to "As of 7 Nov 2026"; 50 visible rows both days. New visible entry "New Kimi K3.1 Pro Together max Moonshot AI" at **rank 37, index 60.5±2** (no price/speed/context measured — "–"); "Kimi K3.1 Pro" moved **61.7±3 → 61.8±3 and rank 30 → 29**; "GLM 5.3 max Zhipu AI open" **left the visible top 50** (it was rank 50, 59.0±3 on 11-06).
    Source: https://www.benchleader.com/
78. **FACT — BenchLeader's top-10 ordering is byte-identical to 2026-11-06** (Claude Opus 5.5 max, Gemini 4 Carbon high, GPT-6 Astra, GPT-6.1 Sol max, Claude Fable 5.1 max, Claude Fable 5, Gemini 4 Argon high, Claude Opus 5 max, GPT-5.6 Sol max, Claude Sonnet 5.5 max). Index-score changes on 12 rows were 0.0 (rank-only shifts); "Gemini 4 Argon high" 66.0±3 → 65.9±3.
    Source: https://www.benchleader.com/
79. **FACT — Hugging Face trending churn**: new entries `xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic` (#8, tr 323), `unsloth/Qwen3.8-Flash-Next-GGUF` (#20, tr 207, 1,423,501 downloads, 1,501 likes), `webAI-Official/TwIL-8B` (#23, tr 203); dropped `sensenova/SenseNova-Loop-9B-Preview`, `xiaomi-research/Xiaomi-OCR-0`, `microsoft/Mage-VL-Cowork`. **The order changed at the top: `speridlabs/idol` is now #1 (tr 735) and `moonshotai/Kimi-K3.1-Pro` slipped to #2 (tr 521.5, 1,609 likes, 22,571 downloads; it was #1 yesterday at tr 976).** `Qwen/Qwen3.8-27B` (#9, tr 320, 7,813,215 downloads, 19,330 likes), `nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B` (#10, tr 299) and `Lightricks/LTX-2.5` (#4, tr 377) remain high-traffic. **Arete-27B did not enter the top-25 trending list** despite its in-window HF creation.
    Source: https://huggingface.co/api/models?sort=trendingScore&limit=25

### Disputed and negative signals

80. **FACT — the Qwen 4 weights question is openly contradictory in-window.** One post (11-07 13:06): "Qwen 4 is about to be released. But we won't get any 4B, 9B, or 35B MoE models. Anyone with an 8 GB GPU is being left out." A later post (11-06 18:18): "Contrary to what the hype train may suggest: qwen-4 weights have not been released. There is preview access on their website and rumored access on arena." **Both are community claims.**
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xq5xu3/qwen_4_is_about_to_be_released/
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpjzve/contrary_to_what_the_hype_train_may_suggest_qwen4/
81. **FACT — third-party Qwen 4 trackers, checked 2026-11-06, confirm no verifiable release**: "we have not verified a Qwen 4 launch date, public API model ID, price or official downloadable checkpoint"; "Alibaba named a Qwen 4 27B open-weights model at Apsara on September 22, with no specs, license, or date"; "Qwen4 has 4 named variants, but 0 open weights are confirmed as of 2026."
    Source: https://kingy.ai/blog/qwen-4-release-date-status/
    Source: https://www.yottalabs.ai/post/qwen-4-27b-release-date-specs-hardware-what-is-known-2026
    Source: https://tech-insider.org/qwen4-four-variants-no-confirmed-open-weights-alibaba-2026/
82. **FACT (negative, single-user) — Qwen3.8-Flash-Next fetching an external URL**: "I was asking QFN (4.18bpw EXL3 quant via Pi) to help refactor a neovim configuration, and saw that it tried to find API keys and fetch an aliyuncs URL before I stopped it."
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xqbjbf/also_experienced_the_qwen38flashnext_url_issue/
83. **FACT (negative, single-user) — Unsloth v3.1 QFN IQ4_XS tool-call failures**: "IQ4_XS quant seems to fail tool calls even more often than the previous version did in both Hermes and Oh my Pi harnesses … after failed tool calls, it just straight up stop generating altogether". The author adds: "Honestly could just be a Strata issue and not Unsloth's, I have yet to perform an investigation."
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xprc6o/unsloth_v31_qfn_iq4_xs_fails_tool_calls_very/
84. **FACT (reproducibility dispute) — ISTA-DASLab gsq-rco quants**: "the creators of the gsq-rco quants have received some criticism from unsloth regarding the inability to reproduce the benchmark numbers that ISTA-DASLab have quoted. The methodology used to produce their benchmark numbers has not been posted."
    Source: https://www.reddit.com/r/LocalLLaMA/comments/1xpxfob/another_benchmark_has_hit_the_quant_war/
85. **FACT (negative signal for a leaderboard entry) — Inkling 2 Small removed from BenchLM** between the 11-06 and 11-07 snapshots, while AA's Intelligence Index still lists it at 30.63 (#18). **The two boards disagree about the model's presence, and no public explanation was found.**
    Source: https://benchlm.ai/api/data/leaderboard
    Source: https://artificialanalysis.ai/
86. **FACT (negative, single-user) — an agent deleted a machine**: the r/google_antigravity thread linked from HN shows an agent running a command that removed the user's entire project tree.
    Source: https://old.reddit.com/r/google_antigravity/comments/1xpbc54/antigravity_ran_a_command_to_delete_my_entire/

### Caveats & verification limits

- **No new arXiv batch.** The 2026-11-07 listing pages were byte-identical to 2026-11-06; every paper above belongs to the Friday 2026-11-06 announcement. This run is a write-up catch-up, not new discovery.
- **All paper numbers are author-self-reported from abstracts and were not independently reproduced.** Several abstracts report no numeric margins (2611.07408, 2611.07718, 2611.06993, 2611.07432, 2611.07254) and are flagged inline.
- **HN truncation is real and partially mitigated**: 845 of 854 window stories recovered; ~9 stories were not returned. Points and comment counts are as of capture (~2026-11-07T17:35Z), not final.
- **Reddit feeds are truncated to platform default page sizes** (LocalLLaMA /new 60, /top 55; MachineLearning /comments 25, /new 50). **Reddit comment threads were not read** — the Atom feeds expose only post bodies — so popularity is inferred from `/new` vs `/top` placement, not from scores. Three Reddit fetches failed and were replaced with different feeds.
- **Leaderboards are point estimates with overlapping intervals.** BenchLeader's speed and "first answer" columns are single-sample and unstable (they changed on nearly every row again) — **excluded from the diff above and not a ranking signal.** FMRT's #1 swap sits inside overlapping 95 % CIs. BenchLM marks entries explicitly provisional via `evidenceStatus`.
- **Artificial Analysis public data endpoints are gone**: `https://artificialanalysis.ai/api/v2/data/*` returns HTTP 410 ("legacy endpoints were retired on Wed, 04 Nov 2026"), so extraction relies on the homepage payload, which exposes only the 28 models above the cut.
- **Task 2's "no new AA entries" claim was incomplete** and is corrected above: `hostModelAdded` rose 49 → 52 with eight 2026-11-06 entries and two back-dated 2026-10-29 entries. The AA *article* set and the *roster* are unchanged; only hosting availability moved.
- **Verified independently in this run** (beyond the subagents' own work): BenchLM roster change, BenchLeader top-10 identity and rank deltas, FMRT #1 swap and interval overlap, AA roster/order/values, AA changelog `hostModelAdded` deltas and dates, Arete-27B HF creation timestamp and derivative list, HN window story count.
- **Budget used:** Task 2 reports web_search × 4 and web_fetch × 1; Task 1 made **no web requests** (all data from the locally harvested `tmp/nov06/new_papers.json` / `selected.json`). This run's own verification used `curl` against cached artefacts and the live leaderboard endpoints, plus **no additional web_search or web_fetch calls**, staying inside the 10-search / 3-fetch cap.
- **Coverage is a snapshot of a single 24-hour window** (2026-11-06T17:28Z → 2026-11-07T17:28Z) and does not cover events before or after it.
