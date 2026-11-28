# AI Agent Sandbox Architecture: Technical Research Findings

## Overview

Research into the technical architecture behind AI agent sandboxes, covering isolation technologies, platform implementations, security models, and performance trade-offs.

---

## 1. Isolation Technologies

### 1.1 Docker Containers (runc/containerd)
- **Isolation Boundary**: Linux namespaces (pid, mount, net, ipc, uts, user) + cgroups v2
- **Kernel Layer**: Shared host Linux kernel
- **Security Model**: Process-level isolation. Seccomp-bpf, AppArmor/SELinux can filter dangerous syscalls, but the attack surface remains broad since any kernel zero-day exposes the entire node
- **Performance**: 200-500ms cold start, near-zero CPU/memory virtualization overhead
- **Limitations**: A kernel vulnerability or misconfiguration can allow container escape → host access. AI agents generate unpredictable code that might exploit these. **Not adequate for untrusted code**

### 1.2 gVisor (runsc)
- **Isolation Boundary**: User-space syscall interception via Sentry process
- **Kernel Layer**: Virtualized syscall layer (Sentry implements ~300 Linux syscalls in memory-safe Go)
- **Security Model**: Syscall-level isolation. Reduces kernel attack surface dramatically; only a minimal vetted subset of syscalls reaches host kernel. Filesystem access mediated by separate Gofer process over 9P/LXP protocol
- **Virtualization Backend**: ptraced (debugging hooks) or KVM driver for lower overhead
- **Performance**: 10-50ms startup; 10-30% overhead on I/O-heavy workloads due to user-space context switches
- **GPU Support**: Yes, via gVisor nvproxy which parses/validates NVIDIA driver ioctl syscalls
- **Use Cases**: Compute-heavy AI workloads, multi-tenant SaaS, CI/CD pipelines

### 1.3 Firecracker MicroVMs
- **Isolation Boundary**: Hardware virtualization (Intel VT-x / AMD-V) via KVM
- **Kernel Layer**: Dedicated guest Linux OS per microVM
- **Security Model**: Strongest isolation — each workload has dedicated kernel. Compromise requires escaping both guest kernel AND hypervisor
- **Architecture**: Minimal VMM ~50,000 lines of Rust (vs QEMU's millions of lines of C). Provides only 4 paravirtualized devices: virtio-net, virtio-block, virtio-vsock, minimal serial console
- **Performance**: 
  - Cold boot: ~125ms
  - Snapshot restore: 5-30ms
  - Memory overhead: <5 MiB per VMM
  - Throughput: up to 150 VMs/second per host
- **Snapshotting**: Supports saving full VM state to disk and resuming in 5-30ms (critical for multi-turn agent workflows)
- **Use Cases**: Multi-tenant AI agent execution, untrusted code, serverless functions, production environments

### 1.4 Kata Containers
- **Isolation Boundary**: Hardware virtualization via multiple VMMs (Firecracker, Cloud Hypervisor, QEMU)
- **Security Model**: Same hardware-level isolation as Firecracker, but with Kubernetes-native orchestration
- **Performance**: ~200ms boot, minimal memory overhead
- **Use Cases**: Regulated industries, multi-tenant Kubernetes, zero-trust environments requiring VM-level security with container workflows

### 1.5 WebAssembly (Wasmtime/WASI)
- **Isolation Boundary**: Memory-safe bytecode sandbox with capability-based security
- **Kernel Layer**: Host capability interface (no guest OS)
- **Security Model**: Zero access to host memory, files, sockets unless explicitly granted. Sandboxed linear memory space
- **Performance**: Sub-5ms instantiation, <10 MiB memory overhead per instance
- **Limitations**: Requires programs compiled to wasm32-wasi target. Cannot run arbitrary Linux binaries, pre-compiled C-extensions, fork processes, or execute standard bash scripts
- **Use Cases**: Isolated execution of compiled code, capability-gated operations

---

## 2. Comparison Matrix

| Technology | Isolation Level | Boot Time | Memory Overhead | Arbitrary Binaries | Multi-Tenant Security |
|------------|----------------|-----------|-----------------|-------------------|----------------------|
| Docker (runc) | Namespaces/cgroups | 200-500ms | ~15-30 MiB | Yes | Weak |
| gVisor (runsc) | User-space syscalls | 10-50ms | ~25-40 MiB | Yes (~300 syscalls) | High |
| Firecracker | Hardware KVM | 50-125ms | <5 MiB | Yes (full native) | Maximum |
| WebAssembly | Bytecode sandbox | <5ms | <10 MiB | No (WASI only) | Maximum |

---

## 3. Platform Implementations

### Production Platforms Using Sandboxing:
- **E2B**: Firecracker microVMs for AI agent code execution
- **Vercel Sandbox**: Firecracker (GA January 2026)
- **Northflank**: Kata Containers + gVisor (adaptive based on infrastructure)
- **Claude Code**: Process-level sandboxing (version 1.3+)

### Architecture Patterns:
- **Infrastructure-Adaptive Isolation**: Platforms like Northflank automatically choose Kata Containers (when nested virtualization available) or gVisor (when unavailable)
- **Snapshotting for Multi-Turn Agents**: Firecracker's copy-on-write memory forking enables instant VM provisioning from golden images while maintaining state across agent turns

---

## 4. Security Models

### Zero-Trust Principles:
1. **Allow-by-default is wrong**: All agent actions must be explicitly allowed, not implicitly permitted
2. **Treat all AI-generated code as potentially malicious**
3. **Defense-in-depth**: Combine sandboxing + resource limits + network controls + monitoring + approval gates

### Threat Vectors Addressed:
- **Container escape**: Mitigated by microVMs (hardware boundary)
- **Kernel privilege escalation**: Mitigated by gVisor (user-space syscall interception) and microVMs (dedicated kernel)
- **Resource exhaustion**: Mitigated by cgroups, CPU/memory/disk quotas
- **Network exfiltration**: Mitigated by egress filtering, VPC isolation, metadata service blocking
- **Prompt injection**: Input validation, sandboxed tool execution, output monitoring

### Network Isolation:
- Dedicated TAP interfaces per microVM
- iptables/eBPF filtering blocking:
  - Cloud metadata services (169.254.169.254)
  - Private VPC ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)
- DNS logging proxies with domain blocklists

---

## 5. Performance Trade-offs

### Cold Start Latency:
- WASM: <5ms (fastest)
- gVisor: 10-50ms
- Firecracker: 50-125ms
- Docker: 200-500ms

### Snapshot Resume (critical for multi-turn agents):
- WASM: <1ms
- Firecracker: 5-30ms
- gVisor: 50-100ms
- Docker: N/A

### I/O/Syscall Overhead:
- WASM: Near-zero
- Firecracker: <3% (virtio)
- Docker: <1% (native)
- gVisor: 10-30% (user-space context switches)

### Memory Efficiency at Scale:
- Firecracker: <5 MiB per VM enables thousands of concurrent sandboxes
- gVisor: 25-40 MiB per instance
- Docker: 15-30 MiB but shared kernel reduces per-sandbox memory

---

## 6. Multi-Turn Agent Statefulness

AI coding agents require state persistence across sequential turns (inspect repo → install deps → write tests → execute → refactor). Three strategies:

1. **Stateless (ephemeral per turn)**: Re-initialize on every call. High latency, destroys state
2. **Long-lived daemon**: Persistent WebSocket/gRPC session. Preserves state but wastes resources on idle
3. **MicroVM snapshot + CoW forking**: Production solution — golden image boot once, then CoW memory forks per session. Private dirty pages per tenant, instant fork (<30ms), zero GC overhead on cleanup

---

## 7. Key Findings Summary

| Requirement | Recommended Technology |
|-------------|------------------------|
| Untrusted code execution | Firecracker or Kata Containers |
| Compute-heavy with limited I/O | gVisor |
| Trusted internal automation | Hardened containers (seccomp, AppArmor) |
| Instant instantiation | WebAssembly |
| Multi-turn stateful workflows | Firecracker with snapshot/CoW |
| Kubernetes-native VM isolation | Kata Containers |
| GPU-accelerated AI workloads | gVisor (nvproxy) or Firecracker (PCIe passthrough) |

---

## Sources

1. [Northflank - How to sandbox AI agents](https://northflank.com/blog/how-to-sandbox-ai-agents)
2. [LLMs Blog - Agent Sandbox Architecture in Production](https://www.llms.blog/posts/agent-sandbox-architecture-in-production-comparing-firecracker-microvms-gvisor-webassembly-and-docker-isolation-for-untrusted-ai-code-execution)
3. [Zylos AI - AI Agent Sandboxing and Security Isolation](https://zylos.ai/en/research/2026-04-04-ai-agent-sandboxing-security-isolation/)
4. [Digital Applied - AI Agent Sandboxing: 3 Isolation Patterns](https://www.digitalapplied.com/blog/ai-agent-sandboxing-isolation-patterns-2026)
5. [Dev.to - How to sandbox AI agents in 2026](https://dev.to/aiagentengineering/how-to-sandbox-ai-agents-in-2026-firecracker-gvisor-runtimes-isolation-strategies-14pk)
