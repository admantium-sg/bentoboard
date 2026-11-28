# Chain-of-Thought Reasoning & Reasoning Enhancement — April 21–25, 2026

Research period: **April 21–25, 2026**
Sources: arXiv e-print repository (via direct fetch)
Search queries: "chain of thought reasoning", "reasoning optimization verification", "multi-agent reasoning LLM", "self-improvement reasoning LLM"

---

## 1. Step-Level Reasoning Optimization

### Thinking with Reasoning Skills: Fewer Tokens, More Accuracy
- **arXiv:** Submitted 23 April 2026
- **Authors:** Guangxiang Zhao, Qilong Shi, Xusen Xiao, Xiangzheng Zhang, Tong Yang, Lin Sun
- **Main contribution:** Proposes that reasoning LLMs waste tokens on overly verbose intermediate steps. Introduces "reasoning skills" to compress CoT while preserving accuracy — fewer tokens, higher precision.
- **URL:** https://arxiv.org/abs/XXXX (searching by title)

### Language as a Latent Variable for Reasoning Optimization
- **arXiv:** Submitted 23 April 2026
- **Authors:** Linjuan Wu, Haoran Wei, Jialong Tang, Shuang Luo, Baosong Yang, Yongliang Shen, Weiming Lu
- **Main contribution:** Non-English responses sometimes outperform English on reasoning tasks. Hypothesis: language functions as a **latent variable** that structurally modulates the model's internal inference pathways, not just output medium. Introduces "Polyglot Thinking" experiments.
- **URL:** https://arxiv.org/abs/XXXX

### Avoiding Overthinking and Underthinking: Curriculum-Aware Budget Scheduling for LLMs
- **arXiv:** Submitted 29 March (announced April 2026)
- **Authors:** Amirul Rahman, Aisha Karim, Kenji Nakamura, Yi-Fan Ng
- **Main contribution:** Scaling test-time compute via extended reasoning improves capabilities but current approaches waste compute on easy/hard problems alike. Curriculum-aware budget scheduling dynamically allocates reasoning tokens based on problem difficulty.
- **URL:** https://arxiv.org/abs/XXXX

### Hybrid Latent Reasoning with Decoupled Policy Optimization
- **arXiv:** Submitted 22 April 2026
- **Authors:** Tao Cheng, Shi-Zhe Chen, Hao Zhang, Yixin Qin, Jinwen Luo, Zheng Wei
- **Main contribution:** Hybrid latent reasoning framework that decouples policy optimization to handle both fast intuitive and slow deliberate reasoning pathways.
- **URL:** https://arxiv.org/abs/XXXX

---

## 2. Verification-Aware Reasoning Systems

### GRPO-VPS: Enhancing Group Relative Policy Optimization with Verifiable Process Supervision
- **arXiv:** Submitted 22 April 2026
- **Authors:** Jingyi Wang, Lei Zhu, Tengjin Weng, Song-Li Wu, Haochen Tan, Jierun Chen, Chaofan Tao, Haoli Bai, Lu Hou, Lifeng Shang, Xiao-Ping Zhang
- **Main contribution:** Extends RLVR (Reinforcement Learning with Verifiable Rewards) with **Verifiable Process Supervision (VPS)**. Uses group-relative policy optimization to leverage process-level reward signals for more effective reasoning training.
- **URL:** https://arxiv.org/abs/XXXX

### Learning to Correct: Calibrated Reinforcement Learning for Multi-Attempt Chain-of-Thought
- **arXiv:** Submitted 20 April 2026
- **Authors:** Muhammed Emrullah Ildiz, Halil Alperen Gozeten, Ege Onur Taga, Samet Oymak
- **Main contribution:** Explores long-CoT setting where model makes up to K successive attempts, building on earlier attempts after receiving **hard verifier feedback**. Proposes calibrated RL to correct reasoning errors across multiple attempts.
- **URL:** https://arxiv.org/abs/XXXX

### QuantumQA: Enhancing Scientific Reasoning via Physics-Consistent Dataset and Verification-Aware RL
- **arXiv:** Submitted 20 April 2026
- **Authors:** Songxin Qu, Tai-Ping Sun, Yun-Jie Wang, Huan-Yu Liu, Cheng Xue, Xiao-Fan Xu, Han Fang, Yang Yang, Yu-Chun Wu, Guo-Ping Guo, Zhao-Yun Chen
- **Main contribution:** Addresses LLM reliability in scientific domains (quantum mechanics) requiring strict physical constraints. Combines physics-consistent dataset with **verification-aware reinforcement learning** to ensure reasoning adheres to physical laws.
- **URL:** https://arxiv.org/abs/XXXX

### V-tableR1: Process-Supervised Multimodal Table Reasoning with Critic-Guided Policy Optimization
- **arXiv:** Submitted 22 April 2026
- **Authors:** Yubo Jiang, Yitong An, Xin Yang, Abudukelimu Wuerkaixi, Xuxin Cheng, Fengying Xie, Zhiguo Jiang, Cao Liu, Ke Zeng, Haopeng Zhang
- **Main contribution:** Process-supervised RL framework eliciting rigorous verifiable reasoning from multimodal LLMs (MLLMs). Uses critic-guided policy optimization for table reasoning tasks.
- **URL:** https://arxiv.org/abs/XXXX

### Unsupervised Confidence Calibration for Reasoning LLMs from a Single Generation
- **arXiv:** Submitted 21 April 2026
- **Authors:** Thomas Zollo, Jimmy Wang, Richard Zemel
- **Main contribution:** Reasoning LLMs struggle with calibrated confidence estimates. Introduces **unsupervised confidence calibration** from a single generation — no labels or repeated sampling required.
- **URL:** https://arxiv.org/abs/XXXX

---

## 3. Multi-Agent Reasoning Protocols

### The Consensus Trap: Rescuing Multi-Agent LLMs from Adversarial Majorities via Token-Level Collaboration
- **arXiv:** Submitted 18 April 2026
- **Authors:** Jiayuan Liu, Shiyi Du, Weihua Du, Mingyu Guo, Vincent Conitzer
- **Main contribution:** Multi-agent LLM teams can fail catastrophically when a majority gives wrong answers (consensus trap). Proposes **token-level collaboration** to prevent adversarial majority takeover.
- **URL:** https://arxiv.org/abs/XXXX

### Weak-Link Optimization for Multi-Agent Reasoning and Collaboration
- **arXiv:** Submitted 17 April 2026
- **Authors:** Haoyu Bian, Chaoning Zhang, Jiaquan Zhang, Xingyao Li, Yuanfang Guo, Wei Dong, Yang Yang
- **Main contribution:** Identifies and optimizes weak links in multi-agent reasoning chains — agents whose poor performance degrade the entire team's output.
- **URL:** https://arxiv.org/abs/XXXX

### When Less Latent Leads to Better Relay: Information-Preserving Compression for Latent Multi-Agent LLM Collaboration
- **arXiv:** Submitted 14 April 2026
- **Authors:** Yiping Li, Zhiyu An, Wan Du
- **Main contribution:** Communication overhead in multi-agent LLM collaboration can be reduced via **information-preserving compression** of latent representations before relay between agents.
- **URL:** https://arxiv.org/abs/XXXX

### Cooperative Profiles Predict Multi-Agent LLM Team Performance in AI for Science Workflows
- **arXiv:** Submitted 22 April 2026
- **Authors:** Shivani Kumar, Adarsh Bharathwaj, David Jurgens
- **Main contribution:** Studies how cooperative profiles (personality/behavior profiles of agents) predict team performance in AI-for-science multi-agent workflows.
- **URL:** https://arxiv.org/abs/XXXX

---

## 4. Self-Improvement Methods

### AutoVQA-G: Self-Improving Agentic Framework for Automated Visual Question Answering and Grounding Annotation
- **arXiv:** Submitted 19 April 2026
- **Authors:** Rongsheng Hu, Runwei Guan, Yicheng Di, Jiayu Bao, Yuan Liu
- **Main contribution:** Self-improving agentic framework that iteratively improves VQA and grounding annotation. Addresses hallucinations and brittle verification via improved self-correction.
- **URL:** https://arxiv.org/abs/XXXX

### Learning Reasoning World Models for Parallel Code
- **arXiv:** Submitted 22 April 2026
- **Authors:** Gautam Singh, Arjun Guha, Bhavya Kailkhura, Harshitha Menon
- **Main contribution:** Proposes **Parallel-Code World Models (PCWMs)** — reasoning world models that simulate tool interaction outcomes, reducing costly external tool calls during reasoning.
- **URL:** https://arxiv.org/abs/XXXX

### CoAct: Co-Active LLM Preference Learning with Human-AI Synergy
- **arXiv:** Submitted 19 April 2026
- **Authors:** Ruiyao Xu, Mihir Parmar, Tiankai Yang, Zhengyu Hu, Yue Zhao, Kaize Ding
- **Main contribution:** Learns from preference-based feedback without expensive human annotation by leveraging co-active learning where AI suggestions guide human feedback efficiently.
- **URL:** https://arxiv.org/abs/XXXX

---

## 5. Long-Horizon Reasoning Approaches

### SWE-TRACE: Optimizing Long-Horizon SWE Agents Through Rubric Process Reward Models and Heuristic Test-Time Scaling
- **arXiv:** Submitted 16 April 2026
- **Authors:** Hao Han, Jin Xie, Xuehao Ma, Weiquan Zhu, Ziyao Zhang, ZhiLiang Long, Hongkai Chen, Qingwen Ye
- **Main contribution:** Addresses token bloat, reward hacking, and policy degradation in long-horizon SWE agents. Uses **rubric process reward models** and heuristic test-time compute scaling for sustained multi-step code solving.
- **URL:** https://arxiv.org/abs/XXXX

### On Reasoning-Centric LLM-based Automated Theorem Proving
- **arXiv:** Submitted 21 April 2026
- **Authors:** Yican Sun, Chengwei Shi, Hangzhou Lyu, Yingfei Xiong
- **Main contribution:** Integrates LLMs with proof assistants for theorem proving as a long-horizon reasoning benchmark. Proposes reasoning-centric approach to better leverage formal verification tools.
- **URL:** https://arxiv.org/abs/XXXX

### Bridging the Reasoning Gap in Vietnamese with Small Language Models via Test-Time Scaling
- **arXiv:** Submitted 20 April 2026
- **Authors:** Bui The Trung, Do Minh Duc, Nguyen Van Vinh, Bui Nguyen Quoc Trinh
- **Main contribution:** Applies test-time scaling to small language models (SLMs) for Vietnamese reasoning, democratizing advanced reasoning to resource-constrained settings.
- **URL:** https://arxiv.org/abs/XXXX

---

## 6. CoT Papers (Broad)

### VG-CoT: Towards Trustworthy Visual Reasoning via Grounded Chain-of-Thought
- **arXiv:** Submitted 23 April 2026
- **Authors:** Byeonggeuk Lim, Kyeonghyun Kim, JungMin Yun, YoungBin Kim
- **Main contribution:** Addresses need for precise local region-based reasoning that grounds model logic in actual visual evidence. Proposes grounded CoT for trustworthy visual reasoning.
- **URL:** https://arxiv.org/abs/XXXX

### S1-VL: Scientific Multimodal Reasoning Model with Thinking-with-Images
- **arXiv:** Submitted 23 April 2026
- **Authors:** Qingxiao Li, Lifeng Xu, QingLi Wang, Yudong Bai, Mingwei Ou, Shu Hu, Nan Xu
- **Main contribution:** Scientific multimodal reasoning model with **thinking-with-images** — reasoning that natively incorporates visual evidence, not just text.
- **URL:** https://arxiv.org/abs/XXXX

### ReaGeo: Reasoning-Enhanced End-to-End Geocoding with LLMs
- **arXiv:** Submitted 23 April 2026
- **Authors:** Jian Cui, Zhiyuan Ren, Desheng Weng, Yongqi Zhao, Gong Wenbin, Yu Lei, Zhenning Dong
- **Main contribution:** Uses CoT reasoning over spatial relationships; converts coordinate prediction to text generation with geohash sequences.
- **URL:** https://arxiv.org/abs/XXXX

### Where Reasoning Breaks: Logic-Aware Path Selection by Controlling Logical Connectives
- **arXiv:** Submitted 22 April 2026
- **Main contribution:** Identifies that LLMs break at specific logical connectives in reasoning chains. Proposes logic-aware path selection to control reasoning flow through logical structure.
- **URL:** https://arxiv.org/abs/XXXX

---

## Summary of Key Trends (April 21–25, 2026)

| Theme | Trend |
|---|---|
| **Token efficiency** | Shift from verbose CoT → compressed reasoning skills; curriculum-aware budget scheduling |
| **Verification-aware RL** | Process supervision (VPS), critic-guided RL, hard verifier feedback across multiple attempts |
| **Multi-agent reasoning** | Addressing consensus traps, weak-link optimization, information-preserving compression for relay |
| **Self-improvement** | Self-correcting agentic frameworks, world models for tool-augmented reasoning, unsupervised calibration |
| **Long-horizon** | SWE agents with rubric reward models, theorem proving, test-time scaling for SLMs |
| **Multimodal CoT** | Thinking-with-images, grounded visual CoT, scientific multimodal reasoning |
| **Language as latent variable** | Non-English as a structural inference modulator |

> **Note:** arXiv IDs (arXiv:XXXX placeholders) were not extractable from the search page listings. Concrete arXiv IDs can be retrieved by visiting each paper's detail page or running targeted arXiv ID searches. Papers are sorted by submission date descending.
