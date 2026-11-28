# AI Agent Sandbox Platforms - Research Findings

## Overview

AI agent sandbox platforms provide isolated cloud environments where AI agents can safely execute code, access filesystems, run commands, and interact with computing resources without risking the host application or production infrastructure.

---

## 1. E2B (e2b.dev)

**Description:** The AI Agent Cloud — purpose-built for AI agents. Provides isolated Firecracker microVMs with full Linux environments.

### Key Features
- **Isolation:** Hardware-isolated Firecracker microVMs (separate kernel per workload)
- **SDKs:** Python, JavaScript, TypeScript
- **Execution:** Run commands, stream output, PTY support, execute Python/JavaScript with rich results (charts, tables, images)
- **Lifecycle & State:** Pause/resume with full snapshots (filesystem + memory); fork up to 100 copies from saved state
- **Network:** Expose ports via HTTPS, egress control by CIDR/hostname, secrets vault with proxy injection
- **Storage:** Isolated POSIX filesystem, Git, persistent volumes, mounted S3/GCS/R2 buckets
- **Observability:** Live CPU/memory/disk metrics, logs, browser terminal, signed lifecycle webhooks
- **Desktop:** Optional graphical Linux desktop for computer-use agents
- **Deployment:** SOC 2 Type II compliant; US, EU, APAC regions; BYOC for enterprise

### Pricing
- **Hobby:** $0/mo, $100 one-time credits, 20 concurrent sandboxes, 1hr session limit, 10 GiB storage
- **Pro:** $150/mo + usage, 100 concurrent, 24hr sessions, 20 GiB storage, custom CPU/RAM
  - vCPU: $0.000014 per vCPU-second
  - RAM: $0.0000045 per GiB-second
  - Storage: Free
- **Pro+:** $650/mo (600 concurrent), **Pro++:** $1,150/mo (1,100 concurrent)
- **Enterprise:** $3,000/mo minimum, custom deployment/BYOC

### Use Cases
- Coding agents, code interpreters, computer-use agents with GUI, deep research, parallel evaluations

### Sources
- https://e2b.dev
- https://e2b.dev/pricing
- https://docs.e2b.dev

---

## 2. Modal (modal.com)

**Description:** Serverless AI infrastructure platform with sandbox execution for agent code. Strong Python focus with GPU support.

### Key Features
- **Isolation:** Container-based (secure sandbox containers), with VM Sandboxes in beta
- **SDKs:** Python (primary), Go, JavaScript/TypeScript (beta)
- **Execution:** Run commands, file access, networking, custom images
- **Infrastructure:** Serverless functions, batch jobs, model inference, scheduled jobs, volumes, notebooks
- **Scaling:** Autoscale 0 to 1000+ GPUs, containers boot instantly
- **Snapshots:** Memory snapshots for fast cold starts
- **GPU Support:** Full GPU acceleration for ML workloads
- **Observability:** Integrated logging, full visibility into functions/sandboxes/containers

### Pricing
- **Free tier:** $30/month in credits
- **Pay-as-you-go:** Starts at $0.0001 per vCPU-second
- No mandatory commitments

### Use Cases
- AI model training/inference, high-performance batch jobs, sandboxed code execution, Python ML agents, vision models, embeddings

### Sources
- https://modal.com
- https://modal.com/docs

---

## 3. Fly.io (via Sprites)

**Description:** Fly.io provides persistent Linux computers for AI agent workloads via **Sprites** CLI.

### Key Features
- **Isolation:** Firecracker microVMs (persistent Linux machines)
- **SDK:** Sprites CLI for creating/managing agent workloads
- **Persistence:** Sandboxes persist until explicitly terminated
- **Access:** Terminal sessions, command execution, filesystem access

### Pricing
- Not prominently published; usage-based model expected
- Similar to Fly.io's general compute pricing

### Use Cases
- Background coding agents, persistent agent environments, development workflows

### Sources
- https://fly.io
- https://sprites.dev

---

## 4. Other Notable Platforms

### Daytona
- **Focus:** Stateful coding agents with persistent, configurable development environments
- **Isolation:** Both microVM and Docker options
- **Key Features:** Sub-90ms cold starts, snapshots, persistent volumes, Windows + GPU sandboxes
- **Integrations:** Mastra, OpenAI Agents SDK, LangChain, LangGraph, Vercel AI SDK
- **Pricing:** Contact for enterprise; free tier available

### Northflank
- **Focus:** Production-grade sandboxes with Kubernetes orchestration
- **Isolation:** Kata Containers (microVMs) or gVisor (user-space kernel)
- **Key Features:** Sessions persist until explicitly killed, enterprise features (audit logs, RBAC)
- **Pricing:** ~$0.01 per vCPU-hour, usage-based

### Vercel Sandbox
- **Focus:** AI applications on Vercel platform
- **Isolation:** Linux containers with root access
- **Key Features:** Persistence by default, JavaScript/Python SDKs, full Linux workflows
- **Best for:** Teams already using Vercel ecosystem

### Cloudflare Sandbox SDK
- **Focus:** Cloudflare Workers integration
- **Isolation:** VM-isolated Containers
- **Key Features:** Workers + Durable Objects + Containers architecture, stateful sandbox identities
- **Best for:** Edge computing with Cloudflare Workers

### Runloop
- **Focus:** Software engineering agents with evaluation infrastructure
- **Key Features:** Devboxes (VM-isolated), Blueprints for reusable environments, snapshots, suspend/resume

### OpenSandbox
- **Focus:** Open-source general-purpose sandbox platform
- **Key Features:** Multi-language SDKs, unified sandbox APIs, Docker/Kubernetes runtimes
- **GitHub:** opensandbox-group/OpenSandbox

---

## Comparison Summary

| Platform | Isolation | SDKs | GPU Support | Sessions | Best For |
|----------|-----------|------|-------------|----------|----------|
| **E2B** | Firecracker microVM | Python, JS/TS | No | Up to 24hrs (Pro) | Purpose-built agent sandboxes, computer-use |
| **Modal** | Containers/VMs | Python (primary) | Yes | Ephemeral/serverless | Python ML workloads, broader AI infra |
| **Fly.io/Sprites** | Firecracker microVM | CLI | Unknown | Persistent | Persistent agent environments |
| **Daytona** | MicroVM or Docker | Multiple | Yes (GPU option) | Stateful | Coding agents, latency-sensitive |
| **Northflank** | Kata/gVisor | Multiple | Yes | Persistent until killed | Stateful research agents, enterprise |
| **Vercel** | Linux containers | JS, Python | No | Persistent by default | Vercel-deployed AI apps |
| **Cloudflare** | VM Containers | Workers-based | No | Stateful | Edge/cloudflare ecosystem |

---

## Key Architectural Considerations

1. **Isolation Levels:**
   - MicroVMs (Firecracker, Kata): Strongest isolation, hardware virtualization
   - gVisor: User-space kernel, syscall interception, balanced security/performance
   - Containers + seccomp/AppArmor: Namespace isolation, not suitable for untrusted code

2. **Stateful vs Ephemeral:**
   - E2B: Snapshot-based pause/resume, fork copies
   - Modal: Serverless, ephemeral by default
   - Northflank/Vercel: Persistent until explicitly terminated

3. **GPU Support:**
   - Modal: Full GPU support
   - E2B: CPU-only (no GPUs)
   - Daytona: GPU sandboxes available

---

## Sources
- https://e2b.dev
- https://e2b.dev/pricing
- https://docs.e2b.dev
- https://modal.com
- https://modal.com/docs
- https://fly.io
- https://sprites.dev
- https://mastra.ai/articles/best-ai-agent-sandbox-platforms
- https://fast.io/resources/best-ai-agent-sandboxes/
