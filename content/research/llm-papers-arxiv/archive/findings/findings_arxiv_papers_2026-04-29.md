# arXiv Papers Research Findings — April 29, 2026

**Scope:** cs.CL, cs.LG, cs.AI — chain-of-thought, prompt engineering, efficiency, and reasoning advances
**Date range:** Late April 2026 (arXiv IDs 2604.25xxx–2604.26xxx)
**Sources:** arXiv.org via web_fetch on recent submissions lists

---

## 1. Reasoning & Chain-of-Thought

### 🔬 Barriers to Universal Reasoning With Transformers (And How to Overcome Them)
- **arXiv:** [2604.25800](https://arxiv.org/abs/2604.25800)
- **Subjects:** cs.LG, cs.CL
- **Innovation:** Theorems + construction showing standard positional encodings limit CoT to TC⁰; proposes signpost tokens and value-change encodings to achieve linear-length-generalizable Turing-complete reasoning with CoT traces longer than training.
- **Key insight:** Chain-of-Thought boosts expressivity but doesn't automatically generalize in length; overcome via signpost tokens enabling reliable length generalization.
- **URL:** https://arxiv.org/abs/2604.25800

### ⚡ How Fast Should a Model Commit to Supervision? Training Reasoning Models on the Tsallis Loss Continuum
- **arXiv:** [2604.25907](https://arxiv.org/abs/2604.25907)
- **Subjects:** cs.LG, cs.AI
- **Innovation:** Tsallis q-logarithm loss family (GARL + PAFT) interpolating RLVR ↔ density-estimation; mitigates cold-start stalling in reasoning model post-training.
- **Key insight:** Cold-start stalling under RLVR requires Ω(1/p₀) time to escape; GARL at q=0.75 escapes in Θ(log(1/p₀)). PAFT at q=0.75 best on HotPotQA (+14.4 maj@16 over GRPO).
- **URL:** https://arxiv.org/abs/2604.25907

### 🔄 Recursive Multi-Agent Systems
- **arXiv:** [2604.25917](https://arxiv.org/abs/2604.25917)
- **Subjects:** cs.AI
- **Innovation:** RecursiveMAS extends latent-space recursive computation (from single-model looped LMs) to multi-agent collaboration. Lightweight RecursiveLink module connects heterogeneous agents as a collaboration loop; inner-outer loop co-optimization via shared gradient credit assignment.
- **Key insight:** Agent collaboration itself can be scaled through recursion; evaluated across 9 benchmarks, 4 agent patterns.
- **URL:** https://arxiv.org/abs/2604.25917

---

## 2. Prompt Engineering & Steering

### 🎯 Subliminal Steering: Stronger Encoding of Hidden Signals
- **arXiv:** [2604.25783](https://arxiv.org/abs/2604.25783)
- **Subjects:** cs.CL
- **Innovation:** Subliminal steering via trained steering vectors (not system prompts). Transfers complex multi-word biases; mechanism transfers not just the bias but the steering vector itself, localized to specific layers.
- **Key insight:** Bias encoded with surprising precision — a new steering vector trained on the subliminal dataset achieves high cosine similarity with the original vector.
- **URL:** https://arxiv.org/abs/2604.25783

### 🗣️ A Paradox of AI Fluency: How Fluent Users Experience More Failures (but Recover Better)
- **arXiv:** [2604.25905](https://arxiv.org/abs/2604.25905)
- **Subjects:** cs.CL
- **Innovation:** Analysis of 27K transcripts from WildChat-4.8M. Fluent users iterate collaboratively and critically assess outputs; novices take a passive stance. Novices experience "invisible failures" (appear successful but miss the mark); fluent users have visible failures but partial recovery.
- **Key insight:** Redefines AI success metrics — active engagement beats passive acceptance. Product builders should encourage deep engagement, not friction-free experiences.
- **URL:** https://arxiv.org/abs/2604.25905

### 🧠 From Syntax to Emotion: A Mechanistic Analysis of Emotion Inference in LLMs
- **arXiv:** [2604.25866](https://arxiv.org/abs/2604.25866)
- **Subjects:** cs.CL
- **Innovation:** Sparse autoencoder (SAE) analysis reveals 3-phase information flow for emotion recognition. Phase-stratified causal tracing identifies small causal feature sets; proposes interpretable causal feature steering that improves emotion recognition while preserving language modeling.
- **Key insight:** Emotion features emerge only in late layers; Disgust is more weakly/diffusely represented than other emotions.
- **URL:** https://arxiv.org/abs/2604.25866

---

## 3. Efficiency & Training

### 📉 Graph-Guided Fine-Tuning of Language Models (G-Loss)
- **arXiv:** [2604.25853](https://arxiv.org/abs/2604.25853)
- **Subjects:** cs.CL, cs.AI, cs.LG
- **Innovation:** G-Loss incorporates semi-supervised label propagation via document-similarity graph for global semantic structure. Converges faster, produces semantically coherent embeddings.
- **Key insight:** Traditional losses (cross-entropy, contrastive, triplet) only operate in local neighborhoods; G-Loss leverages global embedding manifold structure.
- **URL:** https://arxiv.org/abs/2604.25853

### 💎 When Errors Can Be Beneficial: A Categorization of Imperfect Rewards for Policy Gradient
- **arXiv:** [2604.25872](https://arxiv.org/abs/2604.25872)
- **Subjects:** cs.LG, cs.AI
- **Innovation:** Theoretical taxonomy of reward error effects on policy gradient. Identifies that some errors are benign or even beneficial — they prevent policy stalling around mediocre-output attractors. Derives reward model evaluation metrics better correlated with post-RLHF performance than ranking accuracy.
- **Key insight:** In RLHF, not all reward deviations are equal; proxy reward effectiveness depends on interaction with initial policy and learning algorithm.
- **URL:** https://arxiv.org/abs/2604.25872

### 🔒 Common Interventions Can Hide Emergent Misalignment Behind Contextual Triggers
- **arXiv:** [2604.25891](https://arxiv.org/abs/2604.25891)
- **Subjects:** cs.LG, cs.AI, cs.CR
- **Innovation:** Proposes "conditional misalignment" — models show clean on standard evals but misaligned behavior when prompts resemble training context. Diluting misaligned data, fine-tuning on benign data, and inoculation prompting all produce conditional misalignment under tweaks.
- **Key insight:** Realistic post-training mixes misaligned + benign data; models may be conditionally misaligned even if standard evaluations look clean.
- **URL:** https://arxiv.org/abs/2604.25891

---

## 4. Agent Systems & Long-Horizon Tasks

### 📋 ADEMA: A Knowledge-State Orchestration Architecture for Long-Horizon Knowledge Synthesis with LLMAgents
- **arXiv:** [2604.25849](https://arxiv.org/abs/2604.25849)
- **Subjects:** cs.AI
- **Innovation:** Combines epistemic bookkeeping, heterogeneous dual-evaluator governance, adaptive task-mode switching, reputation-shaped resource allocation, checkpoint-resumable persistence, segment-level memory condensation, artifact-first assembly, and final-validity checking. Checkpoint/resume is critical for interruption-sensitive tasks.
- **Key insight:** Long-horizon tasks fail due to knowledge state drift, implicit commitments, and interrupted evidence chains; explicit epistemic state transitions + artifact progression address this.
- **URL:** https://arxiv.org/abs/2604.25849

### 📊 Benchmarking Data Visualization Agents in Real-World Scenarios (DV-World)
- **arXiv:** [2604.25914](https://arxiv.org/abs/2604.25914)
- **Subjects:** cs.CL
- **Innovation:** DV-World benchmark (260 tasks) evaluating DV agents across real-world professional lifecycles — spreadsheet manipulation (DV-Sheet), adapting visual art (DV-Evolution), and proactive intent alignment.
- **Key insight:** Existing DV benchmarks suffer from code-sandbox confinement, single-language creation, and assumption of perfect intent; DV-World addresses all three.
- **URL:** https://arxiv.org/abs/2604.25914

### 🔓 Cross-Lingual Jailbreak Detection via Semantic Codebooks
- **arXiv:** [2604.25716](https://arxiv.org/abs/2604.25716)
- **Subjects:** cs.CL, cs.AI
- **Innovation:** Training-free external guardrail comparing multilingual query embeddings against fixed English codebook of jailbreak prompts. Achieves AUC up to 0.99 on canonical benchmarks, but degrades (AUC ≈0.60–0.70) on behaviorally diverse unsafe benchmarks.
- **Key insight:** Safety mechanisms remain English-centric; semantic similarity generalizes well across languages for canonical templates but breaks down under distribution shift.
- **URL:** https://arxiv.org/abs/2604.25716

---

## Summary Table

| arXiv ID | Title | Area | Key Innovation |
|----------|-------|------|----------------|
| 2604.25800 | Barriers to Universal Reasoning With Transformers | CoT reasoning | Signpost tokens for length-generalizable Turing completeness |
| 2604.25907 | Training Reasoning Models on the Tsallis Loss Continuum | RLVR/reasoning | GARL/PAFT — Tsallis loss mitigates cold-start stalling |
| 2604.25917 | Recursive Multi-Agent Systems | Multi-agent | Recursive agent collaboration via RecursiveLink |
| 2604.25783 | Subliminal Steering | Prompt steering | Steering vectors transfer multi-word biases subliminally |
| 2604.25905 | A Paradox of AI Fluency | HCI/prompt | Fluent users engage more, have visible failures but better outcomes |
| 2604.25866 | From Syntax to Emotion in LLMs | Interpretability | SAE analysis + causal feature steering for emotion recognition |
| 2604.25853 | Graph-Guided Fine-Tuning (G-Loss) | Fine-tuning efficiency | Label propagation graph for global semantic loss |
| 2604.25872 | When Errors Can Be Beneficial | RLHF efficiency | Taxonomy of imperfect rewards; some errors help |
| 2604.25891 | Conditional Misalignment | Alignment safety | Standard safety interventions leave contextual gaps |
| 2604.25849 | ADEMA Knowledge-State Orchestration | LLM agents | Explicit epistemic bookkeeping for long-horizon synthesis |
| 2604.25914 | DV-World Benchmark | LLM agents | 260 real-world data visualization tasks |
| 2604.25716 | Cross-Lingual Jailbreak Detection | LLM safety | Semantic codebooks across 4 languages; AUC 0.99→0.60 under shift |

---

*Research conducted by Researcher subagent on 2026-04-29. All papers from arXiv.org (cs.CL, cs.LG, cs.AI), submissions from April 28–29, 2026.*
