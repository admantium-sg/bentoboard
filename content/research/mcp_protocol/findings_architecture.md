# MCP Protocol Architecture and Core Concepts

## What is the Model Context Protocol (MCP)?

**MCP (Model Context Protocol)** is an open-source protocol standard for connecting AI applications to external systems—data sources, tools, and workflows. Think of it as "USB-C for AI applications": just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems.

**Source:** https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro

---

## Problem MCP Solves

Before MCP, AI applications required custom integrations for each data source or tool. MCP standardizes how AI applications (like Claude, ChatGPT, VS Code, Cursor) connect to:
- **Data sources**: local files, databases, Google Calendar, Notion
- **Tools**: search engines, calculators, code interpreters
- **Workflows**: specialized prompts, 3D design tools, etc.

This reduces development time and enables a composable ecosystem where servers work across multiple AI clients.

**Key insight:** MCP focuses solely on the protocol for context exchange—it does not dictate how AI applications use LLMs or manage the provided context.

**Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture

---

## Client-Server Architecture

MCP follows a **client-server architecture** with three key participants:

### MCP Host (AI Application)
- The AI application that coordinates and manages one or multiple MCP clients
- Examples: Claude Desktop, Claude Code, Visual Studio Code, Cursor
- Instantiates MCP client objects for each server connection

### MCP Client
- A component within the host that maintains a dedicated connection to an MCP server
- One MCP client per MCP server connection
- Obtains context from the server for the host to use

### MCP Server
- A program that provides context to MCP clients
- Can run **locally** (e.g., filesystem server) or **remotely** (e.g., Sentry server)
- Exposes primitives: tools, resources, and prompts

```
┌─────────────────────────────────────────────┐
│         MCP Host (AI Application)           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │ Client 1│ │ Client 2│ │ Client 3│       │
│  └────┬────┘ └────┬────┘ └────┬────┘       │
└───────┼───────────┼───────────┼─────────────┘
        │           │           │
    ┌───┴───┐   ┌───┴───┐   ┌───┴───┐
    │Server A│   │Server B│   │Server C│
    │(Local) │   │(Local) │   │(Remote)│
    └────────┘   └────────┘   └────────┘
```

**Local MCP servers** using STDIO transport typically serve a single MCP client.
**Remote MCP servers** using Streamable HTTP transport typically serve many MCP clients.

**Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture

---

## Transport Layer Mechanisms

MCP has two layers:
1. **Data layer**: JSON-RPC 2.0 based protocol (inner layer)
2. **Transport layer**: Communication mechanisms (outer layer)

### Transport 1: stdio (Standard Input/Output)

Used for **local** MCP servers on the same machine:

- Client launches MCP server as a **subprocess**
- Server reads JSON-RPC messages from `stdin`, writes to `stdout`
- Messages are **newline-delimited** (one JSON-RPC message per line)
- Server writes logging/debug output to `stderr`
- Server MUST NOT write non-MCP messages to `stdout`
- Client MUST NOT write non-MCP messages to `stdin`

**Cancellation**: Client sends `notifications/cancelled` notification (stdio is a single shared channel, no per-request stream to close)

**Shutdown**: Client closes input stream to child process (graceful), then escalates to SIGTERM/SIGKILL if needed

**Unexpected termination**: Client restarts the server; in-flight requests are lost and can be retried (stateless protocol)

**Source:** https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio

### Transport 2: Streamable HTTP (with Server-Sent Events)

Used for **remote** MCP servers:

- Server exposes a **single HTTP endpoint** (e.g., `https://example.com/mcp`)
- Client sends every JSON-RPC request as its own **HTTP POST**
- Server responds with either:
  - Single JSON object (`Content-Type: application/json`)
  - SSE stream (`Content-Type: text/event-stream`) for streaming responses
- Client **MUST** include `Accept` header listing both `application/json` and `text/event-stream`
- Server returns `202 Accepted` with no body for notifications

**Server-to-client interactions**: Done via MRTR (Multi Round-Trip Requests) pattern—server returns `InputRequiredResult` with `inputRequests`, client retries with `inputResponses`

**Change notifications**: Clients open a long-lived `subscriptions/listen` stream to receive notifications (tools list changes, resource updates)

**Cancellation**: Closing the SSE response stream IS the cancellation signal

**Security requirements**:
1. Servers MUST validate `Origin` header (prevent DNS rebinding attacks)
2. Servers SHOULD bind to localhost (127.0.0.1) when running locally
3. Servers SHOULD implement authentication (OAuth recommended)
4. Servers SHOULD include `X-Accel-Buffering: no` header for SSE to prevent proxy buffering

**Request metadata headers** (Streamable HTTP only):
- `MCP-Protocol-Version`: Protocol version (required on every POST)
- `Mcp-Method`: The RPC method name
- `Mcp-Name`: The tool/resource/prompt name (for specific calls)

**Note**: Streamable HTTP replaced the older HTTP+SSE transport (protocol version 2024-11-05) in version 2025-03-26.

**Source:** https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http

---

## Protocol Versioning and Handshake/Capabilities Exchange

### Versioning Model

MCP uses **string-based version identifiers** in `YYYY-MM-DD` format, indicating the last date backwards-incompatible changes were made.

- **Current protocol version**: `2025-11-25`
- Version is NOT incremented for backward-compatible changes
- Revisions can be: **Draft**, **Current**, or **Final**

**Negotiation mechanism** (per-request, stateless):
- Every request declares protocol version via `io.modelcontextprotocol/protocolVersion` in `_meta` field
- Server accepts/rejects each request independently
- If server doesn't support the version, it responds with `UnsupportedProtocolVersionError` listing supported versions
- Client can retry with a mutually supported version

### Discovery (server/discover)

Before sending other requests, clients can call the mandatory `server/discover` RPC to get:
- Server's supported protocol versions
- Server's capabilities (tools, resources, prompts, notifications)
- Server identity (`serverInfo` with name and version)
- Cache TTL (`ttlMs`) and scope

Discovery is optional—clients can send any request directly and handle version errors. Results are typically cacheable.

### Capability Exchange

**Client declares capabilities** in `_meta.io.modelcontextprotocol/clientCapabilities` on every request:
- Example: `"elicitation": {}` means client can gather user input

**Server declares capabilities** in `server/discover` response:
- Example: `"tools": {"listChanged": true}` means server supports tools and can send list change notifications

This per-request capability model means MCP is **stateless**—every request contains all info needed to process it, servers infer nothing from previous requests.

**Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/versioning

---

## Core Primitives

MCP defines three core primitives that **servers** can expose:

### 1. Tools
- Executable functions AI applications can invoke
- Examples: file operations, API calls, database queries
- Methods: `tools/list`, `tools/call`

### 2. Resources
- Data sources providing contextual information
- Examples: file contents, database records, API responses
- Methods: `resources/list`, `resources/read`, `resources/subscribe`

### 3. Prompts
- Reusable templates for interacting with language models
- Examples: system prompts, few-shot examples
- Methods: `prompts/list`, `prompts/get`

**Client primitives:**
- **Elicitation**: Server-initiated requests for user input (replaces deprecated sampling)
  - Method: `elicitation/create`
  - Delivered via MRTR pattern

**Deprecated client primitives** (as of protocol version 2026-07-28):
- **Sampling**: Server-requested LLM completions (deprecated—servers should integrate directly with LLM provider APIs)
- **Logging**: Server-to-client log messages (deprecated—use stderr for stdio, OpenTelemetry for HTTP)

### Notifications
- Real-time updates between servers and clients
- Sent as JSON-RPC notifications (no response expected)
- Opt-in via `subscriptions/listen`
- Examples: `notifications/tools/list_changed`, `notifications/resources/updated`

**Source:** https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture

---

## MCP vs Other Agent Communication Protocols

### Comparison with Language Server Protocol (LSP)

MCP took inspiration from Microsoft's **Language Server Protocol**, which standardizes how development tools add language support. MCP applies similar standardization to AI context and tools.

### MCP vs Custom Integrations

| Aspect | MCP | Custom Integration |
|--------|-----|-------------------|
| **Standardization** | Open protocol | Proprietary per-implementation |
| **Reusability** | Servers work across clients | Single-purpose per client |
| **Discovery** | Built-in `server/discover` | Custom negotiation |
| **Capability negotiation** | Per-request via `_meta` | Often fixed at setup |

### Ecosystem Support

MCP is supported across a wide range of **clients and servers**:
- **AI Assistants**: Claude (Anthropic), ChatGPT (OpenAI)
- **Development Tools**: VS Code, Cursor, Zed, Claude Code
- **Enterprise platforms**: Sentry, Google Calendar, Notion, Slack

This breadth makes it possible to **build once, integrate everywhere**—a key advantage over proprietary agent frameworks.

### Notable Extensions

Beyond core protocol, MCP supports optional **extensions**:
- **Tasks**: Asynchronous execution with durable handles for long-running operations
- **Skills over MCP**: Rich structured instructions for agent workflows
- **MCP Apps**: Interactive UI elements rendered in conversations

**Source:** https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro

---

## JSON-RPC 2.0 Base Protocol

MCP uses **JSON-RPC 2.0** as its underlying RPC protocol:

- Client-server request/response pattern
- Notifications (no response required)
- `_meta` field carries:
  - `io.modelcontextprotocol/protocolVersion`
  - `io.modelcontextprotocol/clientInfo` (name, version)
  - `io.modelcontextprotocol/clientCapabilities`
  - `io.modelcontextprotocol/serverInfo` (in responses)
  - `io.modelcontextprotocol/serverCapabilities` (in responses)

**Example discovery request:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "server/discover",
  "params": {
    "_meta": {
      "io.modelcontextprotocol/protocolVersion": "2026-07-28",
      "io.modelcontextprotocol/clientInfo": {"name": "example-client", "version": "1.0.0"},
      "io.modelcontextprotocol/clientCapabilities": {"elicitation": {}}
    }
  }
}
```

**Example discovery response:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "resultType": "complete",
    "supportedVersions": ["2026-07-28"],
    "capabilities": {
      "tools": {"listChanged": true},
      "resources": {}
    },
    "_meta": {
      "io.modelcontextprotocol/serverInfo": {"name": "example-server", "version": "1.0.0"}
    },
    "ttlMs": 3600000,
    "cacheScope": "public"
  }
}
```

**Source:** https://modelcontextprotocol.io/specification/latest

---

## Security Considerations

MCP enables powerful capabilities (data access, code execution), so security is critical:

1. **User Consent and Control**: Users must explicitly consent to all data access and operations
2. **Data Privacy**: Hosts must obtain explicit consent before exposing user data to servers
3. **Tool Safety**: Tool descriptions are untrusted unless from a trusted server; users must consent before tool invocation
4. **Origin Validation**: Streamable HTTP servers MUST validate Origin header to prevent DNS rebinding
5. **Authentication**: MCP recommends OAuth 2.1 for authentication tokens

**Source:** https://modelcontextprotocol.io/specification/latest

---

## Summary

| Aspect | Details |
|--------|---------|
| **What MCP is** | Open protocol standard for connecting AI apps to external systems |
| **Architecture** | Host → Client → Server (1 client per server connection) |
| **Transports** | stdio (local), Streamable HTTP + SSE (remote) |
| **Versioning** | YYYY-MM-DD format, current: 2025-11-25 |
| **Discovery** | Mandatory `server/discover` RPC (optional to call) |
| **Primitives** | Tools, Resources, Prompts (+ Elicitation for client input) |
| **Protocol** | JSON-RPC 2.0, stateless, per-request capability negotiation |
| **Security** | Origin validation, OAuth recommended, user consent required |

**Primary source:** https://modelcontextprotocol.io/
