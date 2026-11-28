# Task 1 Findings: arXiv Papers — July 12, 2026
**Research focus:** chain-of-thought, prompt engineering, efficiency
**Date:** July 12, 2026
**Sources:** arXiv cs.CL/cs.LG/cs.AI (July 10 batch), papers.cool, SciPapermill

## Notable Papers from July 10 Batch (cs.CL/cs.LG/cs.AI)

### 1. Hidden Decoding at Scale: Sequence-Length Scaling for LLMs (2607.08186)
**arXiv** (July 9, 2026) — cs.CL — cs.LG
- Hidden Decoding: token expanded into n streams with independent embedding tables, KV cache as context — adds computation along sequence-length dimension
- Stream-Factorized Attention: most layers attend within each stream, only a few layers mix across streams — reduces attention cost from O(n²) to ~O(n)
- First demonstrated sequence-length scaling at 100B+ MoE scale (WeLM-HD4-80B and WeLM-HD4-617B, n=4)
- Gains grow as n increases — showing this is a practical fixed-backbone scaling path
- Key insight: scaling computation per token without widening Transformer layers is feasible via sequence-length expansion; looped/recurrent approaches are no longer the only alternative
- Paper: https://arxiv.org/abs/2607.08186

### 2. DominoTree: Conditional Tree-Structured Drafting with Domino (2607.08642)
**arXiv** (July 9, 2026) — cs.CL
- Training-free speculative decoding: best-first draft tree scored by Domino's conditional non-factorized correction along each root-to-node path
- Up to 6.6x speedup over autoregressive decoding on Qwen3-4B
- Highest mean accept length: up to 10.7 tokens per round at every temperature
- On Qwen3-8B: +24% throughput over DDTree at T=0; wins across all temperatures vs DFlash and Domino
- CUDA-graph builder for GPU-native tree construction
- Key insight: non-factorized (path-dependent) correction in tree drafting significantly outperforms factorized approaches — conditional modeling along the full path matters
- Code: https://github.com/slin-zhq/Domino-Tree
- Paper: https://arxiv.org/abs/2607.08642

### 3. Jet-Long: Dynamic Bifocal RoPE for Long-Context Extension (2607.07740)
**arXiv** (July 8, 2026) — cs.LG — cs.AI
- Tuning-free zero-shot long-context extension: pairs local RoPE-faithful window with adaptive long-range window
- Recovers base model exactly at short inputs; extrapolates at long contexts
- Up to 1.39x FA2 throughput on H100 (approaching Hopper-only FA4); ≤4% overhead at every length
- On Qwen3-1.7B/4B/8B up to 128K: RULER +4.79/+2.18/+2.03 pp over strongest baseline
- Generalizes to hybrid attention architectures (Jet-Nemotron) without retraining
- Key insight: dynamic per-length rescaling of RoPE outperforms fixed-factor approaches; tuning-free method means zero deployment overhead
- Paper: https://arxiv.org/abs/2607.07740

### 4. GRAPHEVAL: Graph-Based Reasoning Faithfulness (2607.08017)
**arXiv** (July 9, 2026) — cs.CL — cs.AI
- GRAPHEVAL: graph-based framework re-framing uncertainty quantification as reasoning fidelity problem
- Graph Reasoning Coherence Score (GRCS): captures semantic-structural consensus in reasoning space; only metric consistently negatively correlated with reasoning faithfulness
- Graph Self-Consistency (GSC): medoid-based decoding that trades nominal accuracy for faithfulness
- Key finding: Self-Consistency inflated by unfaithful lucky guesses — smaller models heavily exploit this; GSC exposes the true reasoning path ("load-bearing path")
- Forcing models away from GSC-selected path degrades both faithfulness AND accuracy in targeted cases
- Key insight: majority voting on final answers masks broken intermediate reasoning; GRCS > self-consistency for evaluating chain-of-thought quality
- Paper: https://arxiv.org/abs/2607.08017

### 5. MASTE: Multi-Agent Zero-Shot Aspect Sentiment Triplet Extraction (2607.08080)
**arXiv** (July 9, 2026) — cs.CL
- Multi-agent pipeline decomposes ASTE into 4 sequential stages with explicit conditioning
- Training-free zero-shot; generalizes across backbones and datasets
- Chain-of-thought prompting offered only marginal gains; requires careful prompt engineering
- Outperforms zero-shot and CoT baselines substantially under same backbone
- Key insight: multi-agent decomposition of span extraction tasks outperforms single-pass CoT; explicit role specialization matters more than reasoning prompts
- Code: https://github.com/Hankerlove/MASTE
- Paper: https://arxiv.org/abs/2607.08080

### 6. Linear Attention Architectures: Mechanisms, Trade-offs, Cross-Layer Routing (2607.07953)
**arXiv** (July 8, 2026) — cs.LG — cs.AI
- Comparative study of softmax attention vs 4 recurrent linear-attention architectures: DeltaNet, Gated DeltaNet, Kimi Delta Attention, Gated DeltaNet-2
- Kimi Delta Attention + Muon: lowest final validation loss
- Gated DeltaNet + AdamW: highest training throughput
- Cross-Layer Value Routing (CLVR): modest improvement from routing write values across layers
- Gradient-based allocation performs worse than random — gradient magnitude does not predict impact of weight removal
- Key insight: linear attention architectures are not interchangeable — architecture-specific factors dominate; Muon consistently beats AdamW in matched settings
- Code: https://github.com/tommasocerruti/linear-attention-architectures
- Paper: https://arxiv.org/abs/2607.07953

### 7. OpenCoF: Chain-of-Frame Reasoning via Video Generation (2607.08763)
**arXiv** (July 9, 2026) — cs.CV — cs.AI
- Chain-of-Frame (CoF): reasoning through temporally connected frames rather than text tokens
- OpenCoF-17K dataset: 11 task families; Wan-CoF fine-tuned video model
- Visual + textual reasoning tokens capture low-level visual cues and high-level semantic priors
- Strong gains over Wan2.2-I2V-A14B baseline across 4 video reasoning benchmarks
- Key insight: reasoning can unfold spatially/temporally in visual modality — dedicated CoF design outperforms generic video generation with text CoT
- Project: https://opencof.github.io/
- Paper: https://arxiv.org/abs/2607.08763

## Summary of Key Themes

1. **Scaling alternatives:** Hidden Decoding opens sequence-length scaling as a new axis — no architecture change, no new parameters per se
2. **Speculative decoding:** DominoTree shows non-factorized path-dependent correction significantly outperforms factorized methods
3. **Long-context efficiency:** Jet-Long achieves near-zero-cost context extension via dynamic RoPE rescaling
4. **CoT faithfulness:** GRAPHEVAL exposes that self-consistency is inflated by lucky guesses; GRCS is more reliable
5. **Multi-agent over CoT:** MASTE shows role-specialized agents beat single-pass CoT for structured extraction
6. **Linear attention heterogeneity:** architecture factors matter more than generic insights; Muon consistently beats AdamW
