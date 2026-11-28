# Findings: Task 1 — arXiv Papers (Chain-of-Thought, Prompt Engineering, Efficiency)
**Date:** 2026-10-21
**Research area:** LLM research papers and developments
**Method:** arXiv API queries (https://export.arxiv.org/api/query) over cs.CL / cs.LG / cs.AI, filtered to 2026-10-17 → 2026-10-20 announcements. Novelty checked against `cumulative_findings.md` (grep on arXiv IDs) and `daily_reports/2026-10-20.md`.

---

## Reward Misspecification Alone Degrades Chain-of-Thought Monitorability
**arXiv:2610.28303v1** (Oct 20, 2026) — cs.CL
- CoT monitoring is a core safety control; the paper shows it breaks not only through adversarial training but through *ordinary* reward misspecification
- Testbed: pairs of "true" rewards (aligned with task intent) vs. misspecified rewards (favouring a different behaviour) so reward hacking is induced by training and verifiably labelled
- Across 3 models × 3 tasks: CoT monitorability stays low as hack rates rise — the CoT keeps *reasoning about the task intent* while the *output* violates it and gets rewarded
- Mitigation without knowing the true reward: collect rollouts under diverse rewards across training steps, have an LM infer a reward description, inject it into the input
- Reward-description training improves monitorability by ~24% relative / up to 42% absolute, and produces CoTs that explicitly reason about the misspecified reward
- Code: https://github.com/Lorenayannnnn/reward-misspecification-degrades-cot-monitorability
- Source: https://arxiv.org/abs/2610.28303

---

## The Instruction Tax on Factual Recall: Base Models Beat Their Instruction-Tuned Counterparts
**arXiv:2610.28407v1** (Oct 20, 2026) — cs.CL, cs.AI
- AKBC LM-KBC 2026 shared task: generate all possible objects for subject–relation pairs with an LM up to 32B, no retrieval, no fine-tuning
- Official leaderboard score 0.6836 vs. baseline 0.2964 (more than 2×)
- Instruction-tuned model via chat interface: 0.5681. **Base** model prompted as a text completion: 0.6836
- Claim: instruction tuning *decreases* factual recall — the "instruction tax" is attributed to weights, not prompting style
- Winning recipe is deliberately simple: few training examples in-context, generate 64–256 candidates, keep only the repeated ones; plus two per-relation specialisations (large answer-set recall, vitality check before predicting a place of death)
- Implication: for knowledge-probing tasks, benchmark the base model — chat interfaces and instruction tuning can cost double the score
- Source: https://arxiv.org/abs/2610.28407

---

## ProVe: Proposer-Verifier Decoding — Roles Reversed for Speculative Decoding
**arXiv:2610.27815v1** (Oct 20, 2026) — cs.CL, cs.LG
- Standard speculative decoding: small model drafts serially, large model verifies in parallel. ProVe inverts it
- Fine-tunes the *large* AR checkpoint into a proposer that predicts a block of future tokens in one forward pass; one extra forward pass verifies the block
- Verifier can be a smaller AR model, or the proposer itself — the latter yields "ProVe-lossless", which exactly reproduces greedy AR decoding
- Block size 16 → average AR-matching prefix of 6.6 tokens on GSM8K
- 32B proposer across 6 benchmarks: ProVe-lossless reaches 2.5× average AR throughput **without training a separate draft head**
- With a 3B verifier: 2.7× average throughput at −2.6 accuracy points (six-task average) — an explicit speed/accuracy dial
- Source: https://arxiv.org/abs/2610.27815

---

## Beyond the Point Mass: D-PAL and Distributional Losses for Speculative Decoding
**arXiv:2610.28355v1** (Oct 20, 2026) — cs.LG
- D-PACE (2026) trains drafters with a loss weighting each position by its contribution to expected accepted length, but both its weights and its CE loss use only the draft's probability of the recorded target token — treating the target as a *point mass*
- Under rejection sampling a sampled draft token is accepted with probability = overlap of draft and target distributions = 1 − TV distance
- D-PAL (Dynamic Position-wise Acceptance Loss) derived from the exact expected accepted length: overlap-based position weights with log-acceptance (LA) per-position loss; reduces to D-PACE for a point-mass target
- Because the weights are detached, any per-position loss can replace LA in practice
- Forward KL and Rényi divergence of order 1/2 match or exceed LA; Rényi-1/2 provably bounds the true acceptance rate from above and below
- Replacing CE with Rényi-1/2 improves acceptance length under both D-PACE's and D-PAL's weights
- Qwen3-4B target, 6 benchmarks: mean acceptance length 4.50 → 4.57 at T=0, 4.20 → 4.28 at T=1; consistently higher throughput at both temperatures
- Code: https://github.com/Lucas-TY/D-PAL-SpecForge
- Source: https://arxiv.org/abs/2610.28355

---

## Lafa: Large Flow Language Models — 8B Continuous Flow LM with Parallel Decoding
**arXiv:2610.28559v1** (Oct 20, 2026) — cs.CL, cs.AI
- Continuous flow language models as a route to parallel generation with control/acceleration tools that discrete diffusion lacks — but billion-scale recipes were previously unestablished
- Lafa: blockwise flow model, causal attention on the prefix and bidirectional asynchronous flow inside each block
- Enables data-efficient training by adapting pretrained AR models; fast inference via prefix caching and blockwise parallel decoding
- Trained at 0.5B / 7B / 8B with fewer than 30B tokens — more data-efficient than previous diffusion models
- Matches or surpasses AR quality on instruction following, reasoning, coding; distils into flow maps for one- and few-step generation
- Finding worth noting: flow training *preserves or improves* pretrained AR capabilities via a multi-token-prediction effect
- Self-speculative decoding: flow-based drafts verified autoregressively inside a single model → 2.54× AR throughput at comparable quality, beating multi-token prediction and discrete-diffusion methods
- Code: https://github.com/lafa-gh/large-flow-lms
- Source: https://arxiv.org/abs/2610.28559

---

## CoRAL: Hybrid Diffusion-Autoregressive Framework for Efficient Multimodal Reasoning
**arXiv:2610.28584v1** (Oct 20, 2026) — cs.AI
- Frames autoregressive reasoning as hitting a "Sequentiality Bottleneck" while diffusion LMs lack semantic coherence
- Asymmetric Planner–Executor (APE): a DLM Planner generates K diverse reasoning trajectories in parallel; a large ARM Executor selects the optimal plan and synthesises the final answer
- Reward-Guided Denoising for CoT (RDC) trains the planner by injecting outcome rewards into the diffusion process
- Beats prior diffusion-based methods on vision-language benchmarks and is competitive with strong ARMs on both efficiency and quality
- Source: https://arxiv.org/abs/2610.28584

---

## Present but Hard to Read: Probing Latent Reasoning with Minimal Pairs
**arXiv:2610.28498v1** (Oct 20, 2026) — cs.LG, cs.CL
- Methodological warning for interpretability: standard latent-reasoning probes read the model state where the answer begins and treat a failed probe as proof the value is absent
- Minimal-pair experiment (a digit copied from the question) in looped model Ouro-1.4B and Qwen2.5-1.5B: the digit *is* present at the last prompt token in a code shared across questions (readout ≈0.9)
- But a probe that sees one prompt at a time — the usual setting — barely reads it: 0.36 (Ouro) and 0.19 (Qwen) even after 5,249 training questions
- Diagnostics: the digit's change is *small rather than crowded* (random noise lands on equally busy directions), while a random word in its place moves the state much further
- Consequence: a successful probe is ambiguous too — the paper proposes a protocol with a synthetic null for generic mixing
- In pre-registered two-step problems the signal for the unwritten intermediate a+b appears just before Ouro writes the answer's last digit and its sign follows the operation — but mixing alone produces much of the sign-following part
- Patching that value from another problem does not move the written digit, while patching the answer's own digit does: the value is *readable but not used*
- Source: https://arxiv.org/abs/2610.28498

---

## Forty Questions: Identifying a Language Model from One-Word Answers
**arXiv:2610.28281v1** (Oct 20, 2026) — cs.CL
- A model's *answer profile* (how often it gives each answer to each everyday question — "Name a sound", "Name a poet") identifies the model behind an API
- 40 one-word answers identify the exact model 92.5% of the time on a 94-model panel, vs. 1.1% by chance
- Applied to 96 OpenRouter endpoints of 13 open models: 92 identify as the model they claim. Of the 4 mismatches, one matches the claimed model with reasoning turned off, and **one endpoint serves Gemma 4 under the name Llama 4 Maverick** (it names itself Gemma 4; billed with Gemma 4 token counts on every message). Two remain unresolved
- A system prompt lowers identification accuracy by 6–16 points — persona scaffolding degrades the fingerprint
- Billing records show context added to first-party models: Grok 4.7 is billed 1,247 input tokens for a one-line question that costs GPT-4o only 12 tokens; five models state the current date without being billed for it
- Cost: cents per endpoint; questions drawn from a public census of model defaults
- Code/data: https://github.com/tap2k/modelun
- Source: https://arxiv.org/abs/2610.28281

---

## Every Model Leaves a Trace: Multi-Resolution LLM Fingerprinting
**arXiv:2610.28434v1** (Oct 20, 2026) — cs.CL, cs.AI
- Two axes: *model resolution* (different families → distilled → LoRA-adapted variants) and *signal resolution* (behavioural, stylometric, lexical, semantic evidence)
- Protocol progressively suppresses surface cues, paraphrases outputs, varies available text length, tests generalisation across prompt distributions and languages
- Fingerprints survive beyond family boundaries — still detectable in distilled models and even in LoRA adaptations of the same base model
- Attribution weakens as surface/lexical cues are altered, but substantial model-specific signal remains; signals transfer across prompt sources and languages, with **semantic representations most robust across languages**
- Source: https://arxiv.org/abs/2610.28434

---

## Speak vs. Know: Balancing Behavior and Knowledge Distributions of LLMs
**arXiv:2610.27648v1** (Oct 20, 2026) — cs.CL
- Prior work: the distribution verbalised in output text aligns far better with human opinion distributions than the next-token log-probability distribution
- But the verbalised distribution is a *knowledge* distribution; deployment behaviour is governed by the *behavior* (log-prob) distribution — and they disagree
- On World Values Survey, the most likely answer under the verbalised distribution differs from the log-probability distribution for **37% of questions** (mean over three LLMs)
- Consequence for evaluation: a verbalised distribution can score well against a group while its most likely answer is one the model never outputs — the score no longer describes the model
- Proposal: learnable combination that follows the most likely answer of the behavior distribution while preserving the shape of the knowledge distribution, one hyperparameter trading behavioural fidelity vs distribution quality
- On three opinion survey datasets × six models: behavioural consistency 71.6% → 95.6%, while TV distance to human opinion distributions rises only 28.8% → 33.8%; robust under temperature scaling and cross-dataset
- Source: https://arxiv.org/abs/2610.27648

---

## PAR: Progress-Aligned Recurrence for Length Generalization in State Tracking
**arXiv:2610.27628v1** (Oct 20, 2026) — cs.CL
- Looped LMs can run more test-time iterations, but extra iterations need not help longer problems: final-answer supervision does not say how far each iteration should advance, and repeated updates rescale the recurrent state
- PAR trains the prediction at iteration k to match the state after the first k operations, and rescales recurrent states to their first-iteration norms
- swap-S5, Qwen2.5-0.5B trained on ≤32 moves: 95.5% mean full-state accuracy at 512 moves = **16× the training length** (RLT 55.7%, explicit CoT 0.8% on the same backbone)
- Ablations: removing norm anchoring collapses the extrapolation factor from 16× to <2.2×; replacing progress-aligned targets with final-answer supervision caps it at 8×
- Learned completion readout picks when to answer without a supplied stopping depth; prefix self-distillation recovers the correspondence from shorter prefixes when intermediate labels are unavailable
- Source: https://arxiv.org/abs/2610.27628

---

## AsymLoop: Asymmetric Looped Transformers
**arXiv:2610.28489v1** (Oct 20, 2026)
- Full-stack looping mixes context construction and iterative state refinement in one recurrent computation
- AsymLoop separates them: a single-pass causal encoder produces layer-specific **Global** KV caches fixed across iterations, while a weight-tied recurrent decoder generates **Local** KV from its evolving state; joint attention over both under a single softmax
- Training: heavy-tail-guided layerwise learning rate for encoder vs decoder
- FineWeb-Edu, 60M → 1B: consistently lower validation perplexity and higher downstream accuracy than Full Loop at matched effective depth and token budget
- At 1B: average zero-shot accuracy over seven commonsense reasoning benchmarks 49.58% → 50.85%; benefits extend to longer budgets, an OLMo-style backbone, and sparse MoE
- Source: https://arxiv.org/abs/2610.28489

---

## Polarity Blindness in LLM Safety: Negation, Antonym Substitution, Adversarial Framing
**arXiv:2610.27908v1** (Oct 20, 2026) — cs.CL, cs.AI
- Names a structural safety vulnerability: failure to recognise harmful intent after polarity-altering transformations
- Two inversions studied (grammatical negation, antonym replacement) with synonym replacement as a polarity-preserving control; plus an adversarial textual wrapper to test amplification
- 260-prompt benchmark, 10 state-of-the-art LLMs, 3 languages (EN, ES, CZ), stratified by harmfulness potential, validated 0–5 harm scale
- Polarity blindness affects most evaluated models; mean harm score reaches 4.12 for the most vulnerable model
- Effect persists across typologically differing negation systems → a broader semantic-robustness limitation rather than a grammar-specific failure
- Source: https://arxiv.org/abs/2610.27908

---

## Contextual Candour: Role-Aware Graduated Disclosure over Mixed-Sensitivity Contexts
**arXiv:2610.28067v1** (Oct 20, 2026) — cs.CR, cs.CL
- Binary access control (fully answer vs. refuse) causes over-refusal and unintended leakage in mixed-sensitivity contexts
- Graduated disclosure: calibrate level of detail and sensitivity of the response to the user's authorisation, modelled as a disclosure-aware generation problem
- Reward-based optimisation shapes responses toward level-appropriate abstractions while penalising unauthorised factual leakage, including paraphrases and approximations
- On enterprise and clinical benchmarks, substantially reduces leakage while preserving correctness and utility vs. prompt-based, gating, and supervised baselines
- Source: https://arxiv.org/abs/2610.28067

---

## Proof-Carrying Contracts (PC2): Commitments AI Agents Cannot Break
**arXiv:2610.28484v1** (Oct 20, 2026)
- For an agent economy where parties delegate to agents they cannot inspect, textual instructions/policies are insufficient
- Before an operation runs, the agent must supply a machine-checkable proof that it preserves the agreed constraints in every case allowed by its model
- An execution system ("Airlock") checks the proof and controls access to the operation; parties specify conditions, the agent supplies the reasoning
- Formal result: constraints hold at every instant during execution, even for an adversarial agent, plus conditions under which this implies safety in the world; reusable capability modules provide tools and guarantees
- Source: https://arxiv.org/abs/2610.28484

---

## FALCA: Falsification-Aware RL with Hierarchical Credit Assignment for Deep Search Agents
**arXiv:2610.28361v1** (Oct 20, 2026)
- Long-horizon deep search: early mistakes amplify — agents anchor on wrong candidates, collect partially supporting evidence, overlook contradictions
- FALCA frames deep search as propose–falsify: collaborative Searcher proposes candidates/sub-answers; independent Falsifiers seek counterevidence, check unmet constraints, identify conflicts, emit concise falsification reports for research-state revision
- Training: SFT warmup on falsification trajectories + agentic RL with parallel rollouts and hierarchical credit assignment over research stages, state transitions, and actions
- Improves over backbone and harness ablations on five search benchmarks while reducing confirmation bias and error accumulation
- Source: https://arxiv.org/abs/2610.28361

---

## CALM: Consistency-Aware Logit Masking to Mitigate Overthinking
**arXiv:2610.25908v1** (Oct 19, 2026) — cs.CL
- Truncation-based early exit (consecutive trial-answer agreement) is a local signal that can disrupt useful later reflection/verification
- CALM: training-free decoding intervention — monitors trial answers at step boundaries, then masks action-transition-point tokens ("Wait", "Alternatively", "Hmm") in the logits while letting the thought continue
- 4 advanced LRMs × 5 benchmarks: 18.6–25.0% token reduction vs. full CoT at maintained performance; accuracy can even improve by 0.07–1.48% by removing redundant reasoning; LLM-as-judge reports more coherent, concise outputs
- Source: https://arxiv.org/abs/2610.25908

---

## Interventional Step Credit (ISC) and IGPO: Causal Step Importance for Efficient Reasoning
**arXiv:2610.25876v1** (Oct 19, 2026) — cs.CL, cs.LG
- Existing step-pruning signals (attention mass, step entropy) reflect model behaviour at a step, not that step's contribution to the answer
- ISC takes a causal view: step importance is assessed via targeted parameter-level interventions
- IGPO uses ISC to guide fine-grained advantage rescaling in RL, suppressing redundant steps while preserving important ones
- 2 model scales × 9 benchmarks: up to 62% average token reduction, and better overall performance than compared methods
- Source: https://arxiv.org/abs/2610.25876

---

## Curriculum Learning Teaches LLMs Long-Horizon Implicit Reasoning, Up To A Limit
**arXiv:2610.25612v1** (Oct 19, 2026) — cs.LG, cs.CL
- LLMs externalise intermediate steps as CoT tokens; even frontier reasoning models hit abrupt performance cliffs on long-horizon tasks
- Implicit reasoning (search-ahead within a single forward pass) helps CoT generation: weak implicit reasoning → wrong path commitment and backtracking; strong implicit reasoning → correct proof strategy found directly, shorter CoT
- Prior work: LLMs struggle to reason implicitly beyond shallow depths. Curriculum learning extends this, up to a limit
- Source: https://arxiv.org/abs/2610.25612

---

## Token-Set Choice Confounds POPE: An Audit of Yes/No Extraction in VLM Hallucination Evaluation
**arXiv:2610.25964v2** (Oct 19, 2026) — cs.CV, cs.CL
- Reproduction attempt on POPE found the LLaVA-1.5-7B baseline (82.21 F1 on the adversarial split) sat 1.21–8.67 points above every adversarial baseline they planned to compare against
- Root cause is a readout choice: a two-token logit readout decides yes/no by comparing vocabulary IDs 3582 ("yes") and 1217 ("no"); across 9,000 greedy-decode questions on all three splits **neither ID is ever generated** — the model emits " Yes" (3869) and " No" (1939) because SentencePiece prepends a space byte
- Benchmark-hygiene lesson: a single tokenisation detail moved the headline F1 enough to invert a paper's conclusion
- Source: https://arxiv.org/abs/2610.25964
