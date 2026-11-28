# Fact-Check Batch A — 2026-10-22 section (9 papers)

Method: Source 1 = arXiv abstract page (`https://arxiv.org/abs/<ID>`, `citation_title` / `citation_date` / `<blockquote class="abstract">` metadata + rendered abstract).
Source 2 = independent third-party mirrors on different domains: `alphaxiv.org` (all 9, full abstract text verified verbatim), `arxivsignals.io/papers/<ID>` and `papers.cool/arxiv/<ID>` (ID↔title mapping verified for all 9). Extra third-domain checks where available: `huggingface.co/papers/2610.30066` (200), `ai-data-base.com/paper/2610-29518`, `fugumt.com/fugumt/paper_check/2610.29518v1`, `arxivtldr.org/abs/2610.30066`.
Semantic Scholar API and `arxiv.deeppaper.ai` and `huggingface.co/papers/` for the other 8 IDs returned 404/429 — no independent abstract there; alphaxiv + arxivsignals + papers.cool covered it instead.

**Global finding (applies to all 9):** the *arXiv ID ↔ paper content mapping is correct in every case* — every claim bullet matches the right paper's abstract. However, the doc uses **editorial/paraphrased headline titles** rather than the verbatim arXiv titles. Only 1 of 9 titles (30066) is verbatim; the other 8 are rewritten headlines. The paper itself and its numbers are correctly identified; only the title string differs.

---

### 2610.29410 — ECHO: A Common-Mode Hidden Offset Silently Destroys Generation While Rankings Improve
- **Doc title:** ECHO: A Common-Mode Hidden Offset Silently Destroys Generation While Rankings Improve / **Actual title:** ECHO: Emergent Common-Mode Hidden Offsets Drive Vocabulary Collapse in Preference Optimization → MISMATCH (editorialized headline; correct paper, correct arXiv ID; "ECHO" prefix retained)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 (submitted 21 Oct 2026) → MATCH
- Claim bullets checked:
  - "14 of 17 base-model lineages" → CONFIRMED ("the same collapse appears in 14 of 17 base-model lineages")
  - "including under full-parameter fine-tuning" → CONFIRMED ("and under full-parameter fine-tuning")
  - "DPO keeps it weakly aligned with any single vocabulary direction even at 3× budget" → CONFIRMED ("even with three times our base budget")
  - "full-parameter SimPO from base drives it into collapse on Llama-2 and Llama-3.1" → CONFIRMED
  - "the same offset grows (well-free) from a public SFT checkpoint under the official SimPO recipe" → CONFIRMED
  - "present in textbook DPO and SimPO runs that form *no* well" → CONFIRMED
  - "Across 17 UltraFeedback runs" → CONFIRMED
  - "the better a run ranks held-out responses, the less often two public reward models agree" → PARTIAL: abstract says "the less often two public reward models prefer its samples to the base model's" — "agree" is loose phrasing for a different comparison (model preference vs base model, not inter-model agreement)
  - "masking the common component from the loss prevents the well" → PARTIAL: abstract qualifies this as holding "in our flagship setting"; doc drops the qualifier
  - Mechanism claims (common-mode offset across token positions/prompts/chosen+rejected; vocabulary well; isolated offset reconstructs the well; injection into untreated base model recreates collapse; norm-matched random directions do not) → CONFIRMED verbatim
- **Overall:** PARTIAL (content and all numbers correct; two bullets slightly over-generalized, title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29410 — **Source 2:** https://www.alphaxiv.org/abs/2610.29410 (+ https://arxivsignals.io/papers/2610.29410, https://papers.cool/arxiv/2610.29410)

### 2610.29734 — Monitorability Is Trainable — A Post-Training Stage for CoT-Monitor Coupling
- **Doc title:** Monitorability Is Trainable — A Post-Training Stage for CoT-Monitor Coupling / **Actual title:** Monitorability Is Trainable: Post-Training for Chain-of-Thought Monitorability → MISMATCH (editorialized headline; correct paper)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "maximizing mutual information between CoT and the output" (unsupervised post-training objective) → CONFIRMED
  - "Across three model organisms with degraded CoT, recovers most or all of the lost monitorability" → CONFIRMED
  - "on undegraded policies it further improves judged monitorability, improves CoT monitors' and activation probes' prediction of unsafe behavior, and increases the prevalence of consequential reasoning" → CONFIRMED (all three)
  - "monitorability is a trainable attribute of the policy" → CONFIRMED
  - "extends current practices which only *protect* CoT from direct optimization pressure" → CONFIRMED
  - "Complements Oct 21's `2610.28303`" → **WRONG (date label)**: 2610.28303 ("Reward Misspecification Degrades Chain-of-Thought Monitorability") was submitted **20 Oct 2026**, not Oct 21. The doc's own earlier entry (line 17) also records it as Oct 20, 2026. The "complements/diagnoses vs. restores" framing itself is correct.
- **Overall:** NEEDS CORRECTION (one date error: "Oct 21's 2610.28303" → "Oct 20's 2610.28303"; title paraphrased; all substantive claims confirmed)
- **Source 1:** https://arxiv.org/abs/2610.29734 — **Source 2:** https://www.alphaxiv.org/abs/2610.29734 (+ https://arxivsignals.io/papers/2610.29734, https://papers.cool/arxiv/2610.29734)

### 2610.29518 — Rationale Contrastive Decoding (RCD): Forcing the Answer to Actually Depend on the Rationale
- **Doc title:** Rationale Contrastive Decoding (RCD): Forcing the Answer to Actually Depend on the Rationale / **Actual title:** Mitigating Query Shortcuts in Chain-of-Thought with Context-Aware Decoding → MISMATCH (editorialized headline; correct paper, RCD is the paper's own name for its contribution)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "final answers do not always depend on the generated rationales — models lean on query-specific shortcuts" → CONFIRMED
  - "RCD contrasts next-token distributions conditioned on the query with and without its rationale, amplifying tokens whose likelihood increases because of the rationale" → CONFIRMED
  - "a KL-regularized reward-maximization objective" → CONFIRMED
  - "Improves answer accuracy over standard CoT across five reasoning benchmarks" → CONFIRMED ("five reasoning benchmarks")
  - "with ground-truth and random rationales, RCD increases the behavioural dependence of answers on rationale content" → CONFIRMED
  - "Training-free, decoding-time — drop-in for any CoT pipeline" → CONFIRMED ("simple, training-free approach"); "drop-in" is the doc's characterization
- **Overall:** VERIFIED (content; title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29518 — **Source 2:** https://www.alphaxiv.org/abs/2610.29518 (+ https://ai-data-base.com/paper/2610-29518, https://fugumt.com/fugumt/paper_check/2610.29518v1, https://papers.cool/arxiv/2610.29518)

### 2610.29727 — Accept-or-Repair (AoR): Contrastive Decoding Without the Accuracy Tax
- **Doc title:** Accept-or-Repair (AoR): Contrastive Decoding Without the Accuracy Tax / **Actual title:** Accept or Repair: Preserving Passage-Supported Answers in Contrastive Decoding → MISMATCH (editorialized headline; correct paper, "AoR" is the paper's own abbreviation)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "keep the sampled answer if the passage supports it; else try up to two contrastive-decoding replacements, returning the first that passes the support check" → CONFIRMED
  - "rejects replacements repeating the no-passage answer when the passage favours another" → CONFIRMED
  - "**+12.5 points over sampling on counterfactual passages, +2.3 on ordinary ones**" → CONFIRMED ("raises the score over sampling by 12.5 points on counterfactual passages and 2.3 on ordinary ones")
  - "beats eight contrastive/prompting baselines on both, including baselines given the same rejection rule" → CONFIRMED ("surpassing eight contrastive and prompting baselines on both, including when each receives the same rejection rule")
  - "Ablation: replacing only unsupported *initial* answers improves the average score of **every** decoder tested" → CONFIRMED ("Replacing only initial answers that the passage does not support improves the average score of every decoder")
  - "training-free" → CONFIRMED
- **Overall:** VERIFIED (content; title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29727 — **Source 2:** https://www.alphaxiv.org/abs/2610.29727 (+ https://arxivsignals.io/papers/2610.29727, https://papers.cool/arxiv/2610.29727)

### 2610.29602 — Diffusion LMs Trade Faithfulness for Fluency on Table-to-Text
- **Doc title:** Diffusion LMs Trade Faithfulness for Fluency on Table-to-Text / **Actual title:** A Diagnostic Study of Faithfulness in Diffusion Language Models for Table-to-Text Generation → MISMATCH (editorialized headline; correct paper)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "MDLM/LLaDA vs GPT-2/GPT-Neo on ToTTo with an identical retrieval-based few-shot protocol, scoring reference similarity and source grounding separately" → CONFIRMED
  - "more demonstrations raise BLEU **11.3 → 22.0**" → CONFIRMED
  - "NLI entailment against the source table **falls 0.78 → 0.52**" → CONFIRMED
  - "QLoRA-adapted LLaDA hits the study's best BLEU (**24.15**) and grounds no better" → CONFIRMED
  - "autoregressive baselines **wander off the table**; diffusion models **stay on topic and swap out individual entities**" → CONFIRMED (manual annotation)
- **Overall:** VERIFIED (content; title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29602 — **Source 2:** https://www.alphaxiv.org/abs/2610.29602 (+ https://arxivsignals.io/papers/2610.29602, https://papers.cool/arxiv/2610.29602)

### 2610.29657 — Quantization, Social Bias and Abstention Are Confounded
- **Doc title:** Quantization, Social Bias and Abstention Are Confounded / **Actual title:** Effects of Model Scale and Quantization on Social Bias and Abstention in Question Answering → MISMATCH (editorialized headline; correct paper)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "BBQ benchmark across sizes and quantization settings of Qwen3, Gemma-3, SmolLM2" → CONFIRMED (model families exactly Qwen3, Gemma-3, SmolLM2)
  - "alternative prompt formulations and a forced-choice setting with the 'Unknown' option removed" → CONFIRMED
  - "Larger models get more accurate, but **bias shows no simple scaling trend** and quantization effects vary across configurations" → CONFIRMED
  - "**20 of the 26 configurations with fewer biased responses also show increased over-abstention**" → CONFIRMED
  - "Fairness evaluation must consider biased responses, abstention, prompt formulation and answer-option design jointly" → CONFIRMED
- **Overall:** VERIFIED (content; title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29657 — **Source 2:** https://www.alphaxiv.org/abs/2610.29657 (+ https://arxivsignals.io/papers/2610.29657, https://papers.cool/arxiv/2610.29657)

### 2610.29922 — Unintended Side Effects of Value Training Across Hofstede Dimensions
- **Doc title:** Unintended Side Effects of Value Training Across Hofstede Dimensions / **Actual title:** Unintended Side Effects of Value Training in LLMs → MISMATCH (editorialized headline; correct paper)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "Four instruction-tuned LLMs adapted across individual Hofstede value dimensions, evaluated for cross-value transfer and broader behaviours" → CONFIRMED ("adapt four instruction-tuned LLMs across individual Hofstede's value dimensions and evaluate them on both cross-value transfer and broader behaviours")
  - "unintended side effects on untrained values, risk preferences, social cognition and safety traits" → CONFIRMED
  - "because values are interconnected, tuning one silently moves the others" → CONFIRMED
  - "post-hoc value alignment needs broader behavioural evaluation, and the *placement* of value training in the pipeline is a design variable" → CONFIRMED
  - No numeric claims in this entry.
- **Overall:** VERIFIED (content; title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29922 — **Source 2:** https://www.alphaxiv.org/abs/2610.29922 (+ https://arxivsignals.io/papers/2610.29922, https://papers.cool/arxiv/2610.29922)

### 2610.30066 — Looped Uniform Diffusion Language Models
- **Doc title:** Looped Uniform Diffusion Language Models / **Actual title:** Looped Uniform Diffusion Language Models → MATCH
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "Selective looping (re-applying a few early Transformer layers within each denoising step) applied to uniform diffusion LMs, objective and sampler unchanged" → CONFIRMED
  - "reach the validation NLL of a non-looped UDLM trained on ~0.5T tokens" → CONFIRMED ("about 0.5 trillion tokens")
  - "**up to 2.8× fewer training FLOPs on OpenWebText and 3.3× fewer on FineWeb-Edu**" → CONFIRMED (2.8x OpenWebText, 3.3x FineWeb-Edu)
  - "At matched NFE budget: **up to 9.8% lower generation perplexity**" → CONFIRMED
  - "gains concentrated at *moderate* loop counts" → CONFIRMED ("most gains achieved at moderate loop counts")
  - "sampling smaller loop counts more frequently during training improves downstream inference efficiency" → CONFIRMED (abstract adds: uses 12% fewer loops without degrading accuracy)
- **Overall:** VERIFIED (only entry with a verbatim title)
- **Source 1:** https://arxiv.org/abs/2610.30066 — **Source 2:** https://huggingface.co/papers/2610.30066 (+ https://www.alphaxiv.org/abs/2610.30066, https://arxivtldr.org/abs/2610.30066, https://papers.cool/arxiv/2610.30066)

### 2610.29302 — QSelect: Compressing Onboard LMs for Space Robots under Behavioral Fidelity
- **Doc title:** QSelect: Compressing Onboard LMs for Space Robots under Behavioral Fidelity / **Actual title:** Compressing Onboard Language Models for Space Robots under a Behavioral-Fidelity Requirement → MISMATCH (editorialized headline; correct paper, "QSelect" is the paper's own method name)
- **Doc date:** Oct 21, 2026 / **Actual date:** 2026/10/21 → MATCH
- Claim bullets checked:
  - "Compression treated as a **ground-segment step** with flight requirements generic PTQ leaves implicit: fixed memory budget and storage format, **static artifact under configuration control**, behavior close to the ground-validated FP model" → CONFIRMED ("flight use adds requirements that generic post-training quantization leaves implicit: a fixed memory budget and storage format, a static artifact under configuration control, and behavior close to the full-precision model validated on the ground")
  - "QSelect composes **one static low-bit model from compatible AWQ, GPTQ and AutoRound checkpoints** by assigning each linear module to one quantizer family" → CONFIRMED
  - "scoring every substitution at the **final-task level**" → PARTIAL/WRONG wording: abstract says substitutions are scored "at the final next-token distribution" (default fidelity mode, forward-KL vs BF16 reference); task labels are only used in the *optional* target-adapted mode. "Final-task level" conflates the two.
  - No numeric claims carried into the doc bullets (paper's own numbers — 4.3/4.5-point accuracy gains, 43–46% embedding+output share, 6 settings, 12 paired runs — were not summarized in the doc, so nothing to check there).
- **Overall:** PARTIAL (all structure claims confirmed; one mischaracterization of the scoring granularity; title paraphrased)
- **Source 1:** https://arxiv.org/abs/2610.29302 — **Source 2:** https://www.alphaxiv.org/abs/2610.29302 (+ https://arxivsignals.io/papers/2610.29302, https://papers.cool/arxiv/2610.29302)

---

## Summary table

| arXiv ID | Title match | Date | Numbers | Overall |
|---|---|---|---|---|
| 2610.29410 | MISMATCH (paraphrase) | MATCH | 14/17, 3×, 17 UltraFeedback all CONFIRMED | PARTIAL |
| 2610.29734 | MISMATCH (paraphrase) | MATCH | 3 model organisms CONFIRMED | NEEDS CORRECTION (cross-ref date Oct 21→Oct 20) |
| 2610.29518 | MISMATCH (paraphrase) | MATCH | five benchmarks CONFIRMED | VERIFIED |
| 2610.29727 | MISMATCH (paraphrase) | MATCH | +12.5 / +2.3 / eight baselines / two replacements CONFIRMED | VERIFIED |
| 2610.29602 | MISMATCH (paraphrase) | MATCH | 11.3→22.0, 0.78→0.52, 24.15 CONFIRMED | VERIFIED |
| 2610.29657 | MISMATCH (paraphrase) | MATCH | 20 of 26 CONFIRMED | VERIFIED |
| 2610.29922 | MISMATCH (paraphrase) | MATCH | n/a (no numeric claims) | VERIFIED |
| 2610.30066 | MATCH | MATCH | 0.5T, 2.8×, 3.3×, 9.8% CONFIRMED | VERIFIED |
| 2610.29302 | MISMATCH (paraphrase) | MATCH | n/a in doc bullets | PARTIAL |

## Actionable corrections
1. **2610.29734 bullet 1:** "Complements Oct 21's `2610.28303`" → "Complements Oct 20's `2610.28303`" (submitted 20 Oct 2026; the doc's own line 17 says Oct 20).
2. **2610.29302 bullet 3:** "scoring every substitution at the final-task level" → "scoring every substitution at the final next-token distribution" (task labels only in the optional target-adapted mode).
3. **2610.29410:** restore the flagship-setting qualifier on the masking result; reword "two public reward models agree" → "two public reward models prefer its samples to the base model's".
4. **Titles:** 8 of 9 headings are paraphrased rather than verbatim arXiv titles. If verbatim titles are wanted, replace with the `citation_title` values listed above.
