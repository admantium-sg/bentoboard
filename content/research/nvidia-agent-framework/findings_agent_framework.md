# NVIDIA AI Agent Framework Research Findings

## Overview
NVIDIA provides a comprehensive ecosystem for building, controlling, and securing AI agents in 2026. The main offerings include **NeMo Agent Toolkit** for agent development and orchestration, and **OpenShell** for runtime control and security.

---

## 1. NVIDIA NeMo Agent Toolkit

**What it is:** An open-source library for efficiently connecting and optimizing teams of AI agents. Adds intelligence to AI agents across any framework—enhancing speed, accuracy, and decision-making through enterprise-grade instrumentation, observability, and continuous learning.

**Key Features:**

- **Framework Agnostic:** Works with LangChain, LlamaIndex, CrewAI, Microsoft Semantic Kernel, Google ADK, and custom frameworks
- **Agent Performance Primitives (APP):** Accelerates graph-based agent frameworks with parallel execution, speculative branching, and node-level priority routing
- **Dynamo Runtime Intelligence:** (experimental) Automatically infers per-request latency sensitivity from agent profiles for cache control, load-aware routing, and priority-aware serving
- **Model Context Protocol (MCP):** Integrate MCP tools into agents or serve tools/agents as MCP servers
- **Agent-to-Agent (A2A) Protocol:** Build teams of distributed agents with full authentication support
- **Built-in UI:** Chat interface to interact with agents, visualize output, and debug workflows
- **Observability:** Track performance, trace execution flows, LangSmith native integration
- **Profiling:** Profile entire workflows from agent level down to individual tokens
- **Evaluation System:** Validate and maintain accuracy with offline evaluation tools
- **Hyper-Parameter and Prompt Optimizer:** Automatically identify best configurations
- **Fine-tuning with RL:** Fine-tune LLMs specifically for your agent
- **NVIDIA Dynamo Integration:** Improve agent performance at scale with KV-Cache optimization

**Installation:**
```bash
pip install nvidia-nat
pip install "nvidia-nat[langchain]"  # Framework-specific plugins
```

**Requirements:** Python 3.11, 3.12, or 3.13

**Documentation:** https://docs.nvidia.com/nemo/agent-toolkit/latest/

**GitHub:** https://github.com/NVIDIA/NeMo-Agent-Toolkit

---

## 2. NVIDIA OpenShell

**What it is:** An open-source runtime (v0.1.0) for defining and enforcing which systems and data an AI agent can access. Combines sandboxed execution, controlled service access, credential management, and formal policy analysis.

**Purpose:** Provides runtime controls for autonomous AI agents without rewriting them. Part of the broader **NVIDIA Open Agent Safety Platform**.

**Key Capabilities:**

| Capability | Description |
|------------|-------------|
| Multi-tenant platform support | Separate workspaces, permissions, service access on shared infrastructure |
| Formal policy verification | Shows reviewers whether permissions exceed defined security boundaries |
| Extensible security/governance | Connect third-party security services and custom checks |
| Credential-protected service access | Real credentials remain outside agent workload, bound to authorized requests |
| CPU and GPU execution | Run on CPUs/GPUs across containers, VMs, Kubernetes |

**Architecture Components:**
- **OpenShell Gateway:** Manages lifecycles and policies of many sandboxes
- **OpenShell Supervisor:** Runs outside agent workload, checks outbound requests against policy
- **OpenShell Sandbox:** Runs workload with kernel-level controls, no network path except through supervisor

**Key Security Features:**
- Sandboxed execution with kernel-level controls over filesystem and processes
- Network inspection for HTTP, GraphQL, and MCP traffic—can allow reads while blocking writes
- Policy Advisor: Agent can propose narrowly scoped policy changes pending human review
- Formal policy prover: Uses OPA/Rego to verify permissions mathematically
- OCSF audit trail for all policy decisions
- Credentials substituted outside agent workload, only for authorized endpoints

**Supported Agents:** Codex, Claude Code, Pi, Hermes, and future frameworks

**Adopting Organizations:** Cadence (chip design), Slack (enterprise automation), Gecko Robotics (physical robots)

**Documentation:** https://docs.nvidia.com/openshell/about/why-open-shell

**GitHub:** https://github.com/NVIDIA/OpenShell

---

## 3. NVIDIA Open Agent Safety Platform

**What it is:** An open reference design built with partners that continuously monitors and governs agent behavior, ensuring AI agents follow safety guidelines.

**Scope:** Full-stack governance and control across software, hardware, compute, and robotics systems that run agents—from testing to deployment.

**Announced:** 2026 as part of NVIDIA's AI agent push

---

## 4. Related NVIDIA AI Offerings

- **NVIDIA Nemotron & Cosmos Reasoning Models:** Designed for enterprise and physical AI applications, open reasoning models up to 9x faster
- **NVIDIA ACE Game Agent SDK:** Lightweight open-source C/C++ framework for on-device AI companions with Agent, Chat, and RAG APIs
- **NVIDIA AI-Q Blueprint:** Agentic search combining hybrid approaches, tops DeepResearch Bench accuracy leaderboards

---

## Sources

- https://github.com/NVIDIA/NeMo-Agent-Toolkit
- https://developer.nvidia.com/blog/add-runtime-controls-to-ai-agents-with-nvidia-openshell/
- https://blogs.nvidia.com/blog/secure-autonomous-ai-agents-openshell/
- https://www.nvidia.com/en-us/solutions/ai/agent-safety/
- https://nvidianews.nvidia.com/news/open-agent-safety-platform
- https://www.nvidia.com/en-us/ai/
- https://developer.nvidia.com/blog/build-on-device-ai-companions-with-the-nvidia-ace-game-agent-sdk-and-unreal-engine-5-plugins/
