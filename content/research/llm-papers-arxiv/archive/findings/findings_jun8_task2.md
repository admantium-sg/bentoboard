# Findings - Task 2: Community Buzz + Reasoning/Quantization/Benchmarks (June 5-8, 2026)

## Benchmark Landscape (June 2026)

### Key Benchmark Results from lmcouncil.ai

**Top models across key benchmarks:**
- **GPQA Diamond** (PhD-level science): GPT-5.4 Pro (xhigh) 94.6%, Gemini 3.1 Pro Preview 94.1%, GPT-5.4 (xhigh) 93.3%
- **FrontierMath** (expert-level math): GPT-5.4 Pro (xhigh) 50.0%, GPT-5.4 (xhigh) 47.6%, Claude Opus 4.6 (max) 40.7%
- **SWE-bench Verified** (software engineering): Claude Opus 4.7 (max) 83.5%, Claude Opus 4.6 (high) 78.7%, GPT-5.4 (high) 76.9%
- **Humanity's Last Exam** (tough multi-modal): Gemini 3.1 Pro Preview 44.7%, GPT-5.5 (xhigh) 44.3%, GPT-5.5 (high) 43.0%
- **MATH Level 5** (hard competition): GPT-5 (high) 98.1%, GPT-5 (medium) 97.9%, GPT-5 mini (high) 97.8%
- **SimpleBench** (common-sense trick questions): Gemini 3.1 Pro Preview 79.6%, GPT-5.5 Pro 76.9%, GPT-5.4 Pro 74.1%

### Benchmark Suite for 2026
The recommended replacement suite per baeseokjae.github.io:
- **GPQA Diamond** for reasoning depth
- **SWE-bench Verified** for software engineering
- **LiveCodeBench** for coding
- **Chatbot Arena Elo** for general instruction-following

## LLM Inference Optimization: State of the Art (2026)

### Quantization Methods Compared (70B model, single A100 80GB)
| Method | Precision | VRAM | Throughput | Quality Loss |
|--------|-----------|------|------------|--------------|
| FP16 | 16-bit | 140 GB | 1x | None |
| GPTQ | INT4 | 38 GB | 2.8x | ~1% |
| AWQ | INT4 | 36 GB | 3.1x | ~0.8% |
| BnB NF4 | 4-bit | 35 GB | 2.5x | ~1.2% |

### Key Inference Stack Components (2026)
1. **Quantization**: AWQ/GPTQ INT4 for 3-4x memory reduction
2. **Speculative Decoding**: 2-3x speedup for code generation, 1.5-2x for general text
3. **Prefix Caching**: 70-90% cache hit rate → 2x+ throughput for apps with shared system prompts
4. **PagedAttention**: Near-zero memory waste, enables higher batch sizes

### Google TurboQuant
- KV cache compression to 3 bits with zero accuracy loss
- 6x memory reduction (H100 attention up to 8x faster vs FP32)
- Uses PolarQuant + QJL; no calibration data required

### Production Stack (2026 best practices)
- Model: AWQ INT4 quantization
- Speculative decoding with draft model (e.g., Llama-3-8b for 70b)
- Prefix caching enabled
- gpu_memory_utilization: 0.90-0.92
- max_model_len: 32K+ with tensor parallelism

## Test-Time Compute Scaling

### Key Research
- **Efficient Test-Time Scaling via Temporal Reasoning Aggregation** (arXiv:2604.17304)
  - Addresses token-inefficient "overthinking" problem in test-time scaling
  - Multi-step confidence signals for detecting reasoning convergence
  - Dynamic early-exit based on reasoning state, not single-step signals

- **Adaptive Test-Time Compute Allocation for Reasoning LLMs** (arXiv:2604.14853)
  - Test-time compute scaling via repeated sampling, search, extended reasoning
  - Becomes powerful lever for improving LLM performance on math tasks

- **DeepSeek-V4** achieves substantial improvements via test-time compute scaling
  - Higher token efficiency than predecessors on reasoning tasks like HLE

## KV Cache Optimization: 2026 Engineering Guide

### Five Principal Directions (from arXiv:2603.20397 systematic review)
1. **Cache eviction** — which tokens to keep/discard
2. **Cache compression** — reducing memory per cached entry
3. **Hybrid memory solutions** — CXL-based, CPU offloading
4. **Novel attention mechanisms** — MLA, GQA, sliding window
5. **Combination strategies** — stacking multiple approaches

### Architectural Floor Choices
- **Paged attention** is the substrate
- **Prefix caching** is the high-leverage application optimization
- **GQA or MLA** picks the architectural floor
- **FP8 KV** is the free 50% memory savings every team should already have

### KV Cache Memory Calculator
A 70B model with 128K token context requires ~42 GB just for KV cache (80 layers × 2 × 128 heads × 128 dim × 2 bytes × 128K tokens)

### Beluga: CXL-Based Memory Architecture
- CXL (Compute Express Link) enables memory pooling across GPU+CPU
- Addresses HBM capacity limits by leveraging host memory (CPU DRAM)
- Enables scalable LLM serving for long-context inference

## Community Trends (Reddit/Twitter)

### Quantization Discussions
- Q4_K_M most recommended quantization level for local deployment
- Larger models (70B+) are more resilient to aggressive quantization (Q2_K)
- Full precision significantly better than Q8 for fine-tuned models
- New benchmarks created specifically to test quantization quality reduction

### Inference Speed Community Benchmarks
- ExllamaV2, vLLM, Aphrodite Engine, AutoAWQ are main deployment frameworks
- AWQ quantization gaining popularity for production deployments
- Prefix caching provides massive wins for chatbot-style deployments

## Sources
- https://lmcouncil.ai/benchmarks
- https://llm-stats.com/benchmarks
- https://devstarsj.github.io/2026/04/02/llm-inference-optimization-quantization-speculative-decoding-kv-cache-2026/
- https://www.digitalapplied.com/blog/kv-cache-optimization-techniques-2026-engineering-guide
- https://www.spheron.network/blog/google-turboquant-llm-compression-gpu-cloud/
- https://www.spheron.network/blog/kv-cache-optimization-guide/
- https://arxiv.org/abs/2604.17304
- https://arxiv.org/abs/2604.14853
- https://arxiv.org/pdf/2603.20397
- https://github.com/jjiantong/Awesome-KV-Cache-Optimization
- https://baeseokjae.github.io/posts/llm-benchmarks-guide-2026/