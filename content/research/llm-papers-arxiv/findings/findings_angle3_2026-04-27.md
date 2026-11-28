# LLM Reasoning & Evaluation Developments — Angle 3 Findings
**Date:** 2026-04-27
**Research Focus:** Speculative Decoding, LLM Benchmarks, Reasoning Evaluation, Test-time Compute Scaling

---

## 1. Speculative Decoding Techniques

### DiP-SD: Distributed Pipelined Speculative Decoding for Efficient LLM Inference at the Edge
- **Submitted:** 22 April 2026
- **Focus:** Enables distributed speculative decoding across edge devices, reducing latency for edge LLM inference
- **Key innovation:** Pipelined approach to speculative decoding that distributes the draft and verify phases across heterogeneous edge nodes
- **Impact:** Makes speculative decoding viable for resource-constrained edge deployment scenarios
- **Source:** arXiv search — speculative decoding LLM, April 2026 announcements

### FASER: Fine-Grained Phase Management for Speculative Decoding in Dynamic LLM Serving
- **Authors:** Wenyan Chen, Chengzhi Lu, Yanying Lin, Dmitrii Ustiugov
- **Submitted:** 22 April 2026
- **Focus:** Dynamic LLM serving with speculative decoding
- **Key innovation:** Fine-grained phase management that adapts speculative decoding behavior based on runtime conditions
- **Impact:** Improves throughput and latency for speculative decoding in production serving scenarios
- **Source:** arXiv search — speculative decoding LLM, April 2026 announcements

### Guess-Verify-Refine: Data-Aware Top-K for Sparse-Attention Decoding on Blackwell
- **Authors:** Long Cheng, Ritchie Zhao, Timmy Liu, Mindy Li, Xianjie Qiao, Kefeng Duan, Yu-Jung Chen, Xiaoming Chen, Bita Darvish Rouhani, June Yang
- **Submitted:** 24 April 2026
- **Focus:** Sparse-attention decoders using exact Top-K selection for key-value entries
- **Key innovation:** Data-aware Top-K selection using temporal correlation on NVIDIA Blackwell hardware
- **Impact:** Optimizes long-context LLM inference by selecting most relevant KV entries per query token
- **Source:** arXiv search — speculative decoding LLM, April 2026 announcements

### Super Apriel: One Checkpoint, Many Speeds
- **Authors:** SLAM Labs + collaborators (Oleksiy Ostapenko, Raymond Li, Torsten Scholak, et al.)
- **Submitted:** 21 April 2026
- **Focus:** Multi-mixer attention in a single 15B-parameter supernet
- **Key innovation:** Four trained attention mixer choices per decoder layer — Full Attention (FA), Sliding Window Attention (SWA), Kimi Delta Attention (KDA), and Gated DeltaNet (GDN). Placements switchable at serving time without reloading weights
- **Impact:** Enables dynamic speed/quality trade-offs from a single model checkpoint, useful for speculative decoding draft selection
- **Source:** arXiv search — speculative decoding LLM, April 2026 announcements

### EAGLE3 Speculative Decoding with Fine-Tuned Nemotron (PayPal)
- **Authors:** Ally Qin, Jian Wan, Sarat Mudunuri, Srinivasan Manoharan (PayPal)
- **Submitted:** 26 March 2026 (announced April 2026)
- **Focus:** Empirical evaluation of EAGLE3 speculative decoding with fine-tuned Nemotron models in production commerce agent
- **Key finding:** Demonstrates real-world speedup gains from speculative decoding in a production payment/commerce agent context
- **Impact:** Bridges the gap between academic speculative decoding research and production deployment
- **Source:** arXiv search — speculative decoding LLM, April 2026 announcements

---

## 2. LLM Reasoning Benchmarks & Evaluation Methods

### KnowledgeBerg: Evaluating Systematic Knowledge Coverage and Compositional Reasoning in LLMs
- **Authors:** Xiao Zhang, Qianru Meng, Yongjian Chen, Yumeng Wang, Johan Bos
- **Submitted:** 19 April 2026
- **Focus:** Two-dimensional reasoning challenge: (1) knowledge width — cardinality of knowledge elements needed, (2) compositional set-based reasoning over knowledge
- **Key concept:** "Tip of the iceberg" phenomenon — real-world questions appear simple but require systematic knowledge coverage and compositional reasoning
- **Impact:** Goes beyond simple Q&A by evaluating whether models can compose and cover knowledge systematically
- **Source:** arXiv search — LLM reasoning benchmark, April 2026 announcements

### Rethinking Math Reasoning Evaluation: A Robust LLM-as-a-Judge Framework
- **Authors:** Erez Yosef, Oron Anschel, Shunit Haviv Hakimi, et al.
- **Submitted:** 24 April 2026
- **Focus:** Improving math reasoning evaluation beyond symbolic rigidity
- **Key innovation:** LLM-as-a-judge framework that evaluates mathematical reasoning more flexibly, avoiding over-reliance on exact symbolic matching
- **Impact:** Better evaluation of genuine mathematical understanding vs. pattern matching
- **Source:** arXiv search — LLM reasoning benchmark, April 2026 announcements

### Seeing the Whole Elephant: Failure Attribution in LLM-based Multi-Agent Systems
- **Authors:** Mengzhuo Chen, Junjie Wang, Fangwen Mu, et al.
- **Submitted:** 24 April 2026
- **Focus:** Benchmark for failure attribution in multi-agent LLM systems — identifying which agent and which step caused a failure
- **Key challenge:** Multi-agent systems are opaque; failure can cascade from any agent's decision
- **Impact:** Enables systematic debugging and evaluation of multi-agent LLM pipelines
- **Source:** arXiv search — LLM reasoning benchmark, April 2026 announcements

### MedThinkVQA: Medical Thinking with Multiple Images
- **Authors:** Zonghai Yao, Benlu Wang, Yifan Zhang, et al.
- **Submitted:** 14 April 2026
- **Focus:** Medical visual reasoning requiring cross-image evidence synthesis
- **Key innovation:** Unlike single-image VQA, this benchmark requires interpreting multiple images and combining cross-view evidence
- **Impact:** Tests multi-modal reasoning in high-stakes medical domain
- **Source:** arXiv search — LLM reasoning benchmark, April 2026 announcements

### Emergent Strategic Reasoning Risks in AI: A Taxonomy-Driven Evaluation Framework
- **Authors:** Tharindu Kumarage, Lisa Bauer, Yao Ma, et al.
- **Submitted:** 23 April 2026
- **Focus:** Evaluating emergent strategic reasoning risks in AI systems as reasoning capabilities grow
- **Key innovation:** Taxonomy-driven framework for identifying and measuring strategic reasoning risks
- **Impact:** Proactively identifies risks before deploying models with strong reasoning capabilities
- **Source:** arXiv search — LLM reasoning benchmark, April 2026 announcements

### ICE-Bench: Image Creating and Editing Benchmark
- **Authors:** Yulin Pan et al.
- **Accepted:** ICCV 2025
- **Focus:** Comprehensive image generation evaluation across 4 task categories, 31 fine-grained tasks, 6 evaluation dimensions
- **Key innovation:** VLLM-QA metric using large models to assess image editing success; hybrid real/generated data to reduce evaluation bias
- **Impact:** Unified benchmark for image generation models with multi-dimensional assessment
- **Source:** arXiv:2503.14482

---

## 3. Test-Time Compute Scaling Research

### TEMPO: Scaling Test-time Training for Large Reasoning Models
- **Authors:** Qingyang Zhang, Xinke Kong, Haitao Wu, et al.
- **Submitted:** 21 April 2026
- **Focus:** Scaling test-time training approaches for large reasoning models
- **Key innovation:** Extends test-time compute scaling to training (rather than just inference), enabling models to adapt at test time
- **Impact:** Bridges pretraining and test-time compute scaling paradigms for reasoning
- **Source:** arXiv search — test-time compute scaling, April 2026 announcements

### Curriculum-Aware Budget Scheduling for LLMs: Avoiding Overthinking and Underthinking
- **Authors:** Amirul Rahman, Aisha Karim, Kenji Nakamura, Yi-Fan Ng
- **Submitted:** 29 March 2026 (announced April 2026)
- **Focus:** Adaptive compute allocation during inference based on problem difficulty
- **Key innovation:** Curriculum-aware scheduling that gives harder problems more compute budget, avoiding both overthinking (wasted compute) and underthinking (poor quality)
- **Impact:** Improves efficiency of test-time compute by dynamically allocating budget based on difficulty
- **Source:** arXiv search — test-time compute scaling, April 2026 announcements

### Adaptive Test-Time Compute Allocation with Evolving In-Context Demonstrations
- **Submitted:** 22 April 2026
- **Focus:** Adapting test-time compute based on in-context demonstration evolution
- **Key innovation:** Allocates compute dynamically using evolving demonstrations as signals for problem complexity
- **Impact:** More intelligent test-time compute allocation beyond fixed budgets
- **Source:** arXiv search — test-time compute scaling, April 2026 announcements

### SCATR: Simple Calibrated Test-Time Ranking
- **Authors:** Divya Shyamal, Marta Knežević, Lan Tran, et al.
- **Submitted:** 20 April 2026
- **Focus:** Ranking and selection among multiple candidate outputs at test time
- **Key innovation:** Simple calibration approach for test-time ranking, improving reliability of picking best outputs
- **Impact:** Enables better use of multiple sampled outputs in reasoning tasks
- **Source:** arXiv search — test-time compute scaling, April 2026 announcements

### AgentV-RL: Scaling Reward Modeling with Agentic Verifier
- **Authors:** Jiazheng Zhang, Ziche Fu, et al.
- **Submitted:** 17 April 2026
- **Focus:** Enhancing LLM reasoning via verifier-based approaches
- **Key innovation:** Agentic verifier that scales reward modeling for reasoning tasks
- **Impact:** Improves reasoning quality by scaling verification at test time
- **Source:** arXiv search — test-time compute, April 2026 announcements

---

## 4. Key Themes & Impact Summary

### Speculative Decoding
- **Trend toward distributed/edge deployment:** DiP-SD pushes speculative decoding to edge scenarios, expanding beyond datacenter use cases
- **Serving-level optimization:** FASER focuses on dynamic serving conditions, indicating production maturity
- **Hardware-specific optimization:** Guess-Verify-Refine targets NVIDIA Blackwell architecture
- **Production validation:** EAGLE3/Nemotron work validates speculative decoding in real commerce agents (PayPal)

### Reasoning Benchmarks
- **Beyond single-instance QA:** KnowledgeBerg, MedThinkVQA emphasize multi-hop, compositional, cross-document reasoning
- **Multi-agent evaluation:** "Seeing the Whole Elephant" introduces multi-agent failure attribution as a new benchmark category
- **Flexible evaluation:** LLM-as-a-judge frameworks replacing rigid symbolic matching for math reasoning
- **Risk-oriented evaluation:** Emergent strategic reasoning risks framework proactively assesses safety

### Test-Time Compute
- **Budget-aware reasoning:** Curriculum-aware scheduling signals growing focus on efficient compute allocation vs. fixed budgets
- **Test-time training:** TEMPO extends compute scaling beyond inference to training adaptation
- **Verification at scale:** AgentV-RL and SCATR focus on verifier-based approaches to improve reasoning quality

---

## Source URLs
- arXiv Speculative Decoding search: https://arxiv.org/search/?searchtype=all&query=speculative+decoding+LLM
- arXiv LLM Reasoning Benchmark search: https://arxiv.org/search/?searchtype=all&query=LLM+reasoning+benchmark
- arXiv Test-time Compute search: https://arxiv.org/search/?searchtype=all&query=test+time+compute+scaling+reasoning
- ICE-Bench: https://arxiv.org/abs/2503.14482
