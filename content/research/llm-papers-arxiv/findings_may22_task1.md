# Task 1 Findings: arXiv Papers (cs.CL, cs.LG, cs.AI) — May 22, 2026

## Papers Examined from May 21-22, 2026 Submissions

### 1. ConvexTok: Tokenisation via Convex Relaxations
**arXiv:2605.22821** (May 21, 2026)
- Reformulates tokeniser construction as a linear program solved via convex optimisation
- Current BPE/Unigram are greedy — make locally optimal decisions without considering resulting vocabulary as a whole
- ConvexTok consistently improves bits-per-byte (BpB) achieved by language models
- Allows certifying how far tokeniser is from optimal via lower bound
- Empirically within 1% of optimal at common vocabulary sizes
- Less consistent improvements on downstream task performance
- Key insight: Tokenization quality matters for compression efficiency — optimal vocabularies require global optimization

### 2. Evaluating Commercial AI Chatbots as News Intermediaries
**arXiv:2605.22785** (May 21, 2026)
- 14-day evaluation (Feb 9-22, 2026) of 6 AI chatbots on 2,100 factual questions
- Systems tested: Gemini 3 Flash/Pro, Grok 4, Claude 4.5 Sonnet, GPT-5, GPT-4o mini
- Best systems achieve >90% multiple-choice accuracy on same-day news
- Lose 11-13% under free-response evaluation, 16-17% across cohort
- **Key failure patterns:**
  1. Hindi lowest accuracy (79% vs 89-91% elsewhere), Anglophone retrieval bias confirmed
  2. Retrieval, NOT reasoning, drives >70% of all errors
  3. False premise vulnerability: 88-96% accuracy drops to 19-70% with subtle false premises
- Detection-accuracy paradox: best false-premise detector ranks second in adversarial accuracy
- Key insight: High accuracy masks systematic regional inequity and near-total dependence on retrieval infrastructure

### 3. Political Consistency Training (PCT)
**arXiv:2605.22771** (May 21, 2026)
- Addresses covert political bias: LLMs handle opposing political sides asymmetrically
- Identifies 7 categories of covert bias techniques
- Two metrics: Sentiment Consistency (symmetry in rhetoric across paired political prompts) and Helpfulness Consistency (symmetric depth/engagement)
- RL training method with Sentiment + Helpfulness Consistency Training
- Preserves overall helpfulness while reducing bias
- Key insight: Covert bias is structural, not just surface-level — requires consistency-based training

### 4. Data Temporality Impact on LLM Pre-training
**arXiv:2605.22769** (May 21, 2026)
- Studies impact of data ordering on time-sensitive factual knowledge
- Introduces 7,000+ temporally grounded questions benchmark
- Pretrains 6B models on temporally ordered vs shuffled Common Crawl
- **Results:**
  - Temporally ordered: improved factual freshness, more up-to-date knowledge
  - Shuffled: peaks on older data, possibly due to increased factual repetition
- Both match on general language understanding and common knowledge
- Released code, checkpoints, and datasets at github.com/kyutai-labs/kairos
- Key insight: Data temporality matters for knowledge currency — ordered training improves factual freshness

### 5. ChronoMedKG: Temporal Biomedical Knowledge Graph
**arXiv:2605.22734** (May 21, 2026)
- Problem: Existing biomedical KGs treat disease associations as static facts
- Temporal information crucial for clinical reasoning (symptom at age 3 → different disease at age 13)
- ChronoMedKG: 460,497 evidence-linked triples, 13,431 diseases with temporal components
- Multi-signal credibility scoring, PMID-traceable evidence
- Built via multi-agent LLM pipeline with multi-model consensus
- ChronoTQA benchmark: 3,341 questions across 8 task types
- **Key finding:** Frontier LLMs lose ~30 points moving from static to temporal questions
- ChronoMedKG retrieval rescues 47-65% of long-tail failures (vs 17-29% for HPOA-RAG)
- Key insight: Temporal grounding is crucial axis previously absent from biomedical KGs

### 6. Self-Policy Distillation (SPD)
**arXiv:2605.22675** (May 21, 2026)
- Self-distillation: bootstrapping LLMs by training on their own generations
- Problem: Existing methods rely on external signals OR train on all raw outputs (domain-specific)
- SPD achieves capability-selective self-distillation WITHOUT external signals
- Extracts low-rank capability subspace from model's own gradients on correctness-defining tokens
- Projects KV activations into this subspace during self-generation
- **Results:** Up to 13% improvement over state-of-art self-distillation, 16% over pretrained baselines
- Superior generalizability: 15% better under out-of-domain generalization
- Key insight: Task-relevant capability can be isolated from stylistic patterns/formatting artifacts via subspace projection

### 7. Hyperfitting as Late-Stage Geometric Expansion
**arXiv:2605.22579** (May 21, 2026) — ICML 2026
- "Hyperfitting": fine-tuning LLMs to near-zero training loss enhances open-ended generation
- Counterintuitive: low-entropy output distributions suggest temperature scaling equivalence — but it's NOT
- Entropy-matched controls show temperature scaling fails to replicate diversity gains
- NOT static vocabulary reweighting — relies on dynamic, context-dependent rank reordering
- Layer-wise analysis: "Terminal Expansion" in final transformer block (+80.8 feature dimension)
- Late-Stage LoRA: updating only final 5 layers yields robust generation with minimal parameters
- Key insight: Final layers undergo geometric expansion promoting deep-tail tokens — hyperfitting works via terminal expansion, not distribution sharpening

### 8. LANG: Multilingual Reasoning with Language-Adaptive Hint Guidance
**arXiv:2605.22567** (May 21, 2026) — ACL 2026
- RL effective for multi-step reasoning, but benefits don't fully translate to multilingual contexts
- Fundamental trade-off: input-language consistency vs reasoning quality
- Prioritizing consistency → reasoning degradation; prioritizing reasoning → language drift toward English
- LANG: language-conditioned hints guide exploration in non-English reasoning
- Two mechanisms prevent hint dependency: progressive decay schedule + language-adaptive switch
- Substantially enhances multilingual reasoning without compromising language consistency
- Key insight: Language-adaptive learning horizons can resolve consistency-reasoning trade-off in multilingual RL

## Summary of Key Findings

1. **Tokenization:** ConvexTok proves optimal tokenizers require global optimization — greedy BPE/Unigram are suboptimal
2. **News Retrieval:** Retrieval >> reasoning as failure source (>70%); Hindi 10 points below other languages; false premises expose hidden fragility
3. **Political Bias:** Covert bias is structural and requires consistency-based RL training (PCT)
4. **Temporal Knowledge:** Ordered pretraining improves factual freshness without hurting general capabilities
5. **Biomedical AI:** Temporal knowledge graphs enable clinical reasoning 47-65% better than static approaches
6. **Self-Distillation:** Capability-subspace projection enables self-distillation without external signals (13% gains)
7. **Generation Quality:** Hyperfitting works via terminal geometric expansion in final layers, not temperature scaling
8. **Multilingual RL:** Language-adaptive hint guidance resolves consistency-reasoning trade-off