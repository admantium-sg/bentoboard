# The Model Context Protocol (MCP): A Comprehensive Technical Overview

## Executive Summary

The **Model Context Protocol (MCP)** is an open standard created by Anthropic in November 2024 that standardizes how AI applications connect to external data sources, tools, and services. Think of it as "USB-C for AI applications" — a universal interface layer that replaces fragmented, custom integrations with a single, composable protocol. MCP enables AI assistants like Claude, Cursor, and VS Code to interact with filesystems, databases, APIs, and services through a structured, capability-negotiated mechanism that works across clients, hosts, and servers.

**Specification:** https://modelcontextprotocol.io  
**Reference Servers:** https://github.com/modelcontextprotocol/servers  
**Registry:** https://registry.modelcontextprotocol.io

---

## 1. Protocol Architecture & Core Concepts

### What MCP Is and Why It Exists

Before MCP, every AI application integration with external tools or data required custom, one-off implementation. An AI assistant wanting filesystem access, GitHub API interaction, and database queries needed three separate bespoke integrations. MCP standardizes that connection layer, enabling a composable ecosystem where MCP servers work across multiple AI clients and AI clients work with any compliant MCP server.

The protocol focuses **solely on context exchange** — it does not dictate how AI applications use LLMs or how they manage context internally. That remains the host's responsibility. MCP provides the wire format and the capability negotiation.

### The Three-Party Architecture

MCP involves three distinct roles:

```
┌─────────────────────────────────────────────────────────┐
│              MCP Host (AI Application)                  │
│  Examples: Claude Desktop, Claude Code, Cursor,         │
│  Visual Studio Code, Zed, JetBrains, Windsurf          │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Client 1 │  │ Client 2 │  │ Client 3 │             │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘             │
└───────┼─────────────┼─────────────┼────────────────────┘
        │             │             │
    ┌───┴───┐     ┌───┴───┐     ┌───┴───┐
    │Server A│    │Server B│    │Server C│
    │(Local) │    │(Remote)│    │(Remote)│
    │stdio  │    │HTTP+SSE│    │HTTP+SSE│
    └────────┘    └────────┘    └────────┘
```

- **MCP Host**: The AI application that coordinates everything. It instantiates MCP clients, manages their lifecycle, and uses their exposed capabilities in LLM interactions. The host runs the AI model or agent.

- **MCP Client**: A component within the host that maintains a dedicated 1:1 connection to one MCP server. One client per server. The client obtains context from the server and passes it to the host's LLM.

- **MCP Server**: A lightweight program that exposes tools, resources, and prompts to MCP clients. Can run locally (on the same machine) or remotely (accessible over a network). Servers are dumb pipes — they expose capabilities but do not make autonomous decisions.

### Transport Layer Mechanisms

MCP operates in two layers: an inner **data layer** (JSON-RPC 2.0) wrapped by an outer **transport layer**.

**Transport 1: stdio (Standard Input/Output)**

Used for **local** MCP servers on the same machine:

- The client launches the MCP server as a **subprocess**
- The server reads JSON-RPC messages from `stdin`, writes responses to `stdout`
- Messages are **newline-delimited** (one JSON-RPC message per line)
- Server logs and debug output go to `stderr` (not stdout — stdout is reserved for MCP messages)
- Cancellation: client sends a `notifications/cancelled` notification
- Shutdown: client closes the input stream to the child process; escalates to `SIGTERM`/`SIGKILL` if needed
- Unexpected termination: client restarts the server; in-flight requests are lost (stateless protocol, safe to retry)

**Transport 2: Streamable HTTP with Server-Sent Events (SSE)**

Used for **remote** MCP servers:

- The server exposes a single HTTP endpoint (e.g., `https://api.example.com/mcp`)
- Every JSON-RPC request is its own **HTTP POST**
- The server responds with either a single JSON object (`Content-Type: application/json`) or an SSE stream (`Content-Type: text/event-stream`) for streaming responses
- The client **must** include an `Accept` header listing both media types
- Server returns `202 Accepted` with no body for notifications (no response expected)
- Server-to-client interactions (e.g., tool call results, notifications) use the **MRTR pattern** (Multi Round-Trip Requests): the server returns `InputRequiredResult` with `inputRequests`, and the client retries with `inputResponses`
- Cancellation: closing the SSE response stream is the cancellation signal
- **Note**: This replaced the older HTTP+SSE transport (protocol version 2024-11-05) in version 2025-03-26

**Request metadata headers** (Streamable HTTP only):
- `MCP-Protocol-Version`: Protocol version on every POST
- `Mcp-Method`: The RPC method name
- `Mcp-Name`: The tool/resource/prompt name for specific calls

**Security requirements for HTTP transport**:
- Servers **must** validate the `Origin` header to prevent DNS rebinding attacks
- Servers **should** bind to `127.0.0.1` when running locally
- Servers **should** implement OAuth authentication
- Servers **should** include `X-Accel-Buffering: no` for SSE to prevent proxy buffering

### Protocol Versioning

MCP uses **string-based version identifiers** in `YYYY-MM-DD` format, indicating the date of the last backwards-incompatible change:

- **Current protocol version**: `2025-11-25`
- Revisions can be **Draft**, **Current**, or **Final**
- Version is **not** incremented for backward-compatible additions
- Negotiation is **per-request and stateless** — every request declares its protocol version via `io.modelcontextprotocol/protocolVersion` in the `_meta` field
- If the server doesn't support the declared version, it responds with `UnsupportedProtocolVersionError` listing its supported versions
- The client can retry with a mutually supported version

### Discovery Mechanism

The mandatory `server/discover` RPC allows clients to retrieve server capabilities before making other requests:

- Server's supported protocol versions
- Server capabilities (tools, resources, prompts, notifications)
- Server identity (`serverInfo` with name and version)
- Cache TTL (`ttlMs`) and scope

Discovery is **optional** — clients can send any request directly and handle version errors. Results are typically cacheable.

---

## 2. Protocol Specification

### JSON-RPC 2.0 Message Format

All MCP messages follow [JSON-RPC 2.0](https://www.jsonrpc.org/specification). Three message types exist:

**Requests** (require an ID):
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {
    "_meta": {
      "io.modelcontextprotocol/protocolVersion": "2025-11-25",
      "io.modelcontextprotocol/clientCapabilities": {}
    }
  }
}
```

**Responses** (match request ID, contain either `result` or `error`):
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": { "tools": [...] }
}
```

**Notifications** (no ID, fire-and-forget):
```json
{
  "jsonrpc": "2.0",
  "method": "notifications/initialized"
}
```

**Critical rules:**
- ID must not be `null`
- ID must not be reused within the same session
- Either `result` or `error` must be set — never both

### Core Protocol Messages

**Client → Server Requests:**

| Method | Purpose |
|--------|---------|
| `initialize` | Establish connection, negotiate capabilities |
| `ping` | Health check |
| `tools/list` | Discover available tools |
| `tools/call` | Execute a tool |
| `resources/list` | Discover available resources |
| `resources/read` | Read resource content |
| `resources/subscribe` | Subscribe to resource updates |
| `resources/unsubscribe` | Cancel subscription |
| `prompts/list` | Discover available prompts |
| `prompts/get` | Get a prompt with arguments filled in |
| `logging/setLevel` | Configure logging verbosity |
| `roots/list` | List filesystem boundaries |

**Server → Client Requests:**

| Method | Purpose |
|--------|---------|
| `ping` | Server-initiated health check |
| `sampling/createMessage` | Request LLM generation from client |
| `elicitation/create` | Request user input from client |
| `completion/complete` | Request text completion |

**Notifications (no response expected):**

| Method | Direction | Purpose |
|--------|-----------|---------|
| `initialized` | Client → Server | Confirm initialization complete |
| `cancelled` | Both | Cancel in-progress operation |
| `progress` | Both | Report operation progress |
| `resources/updated` | Server → Client | Resource content changed |
| `tools/list_changed` | Server → Client | Available tools changed |
| `prompts/list_changed` | Server → Client | Available prompts changed |
| `logging/message` | Server → Client | Log output |

### Capability Discovery and Negotiation

Capabilities are the heart of MCP's flexibility. Both client and server advertise what they can handle, creating a binding contract.

**Client capability example:**
```json
{
  "capabilities": {
    "roots": { "listChanged": true },
    "sampling": {}
  }
}
```

**Server capability example:**
```json
{
  "capabilities": {
    "tools": { "listChanged": true },
    "resources": { "subscribe": true, "listChanged": true },
    "prompts": { "listChanged": true },
    "logging": {}
  }
}
```

**Key rules:**
- **No capability advertised = feature unavailable** — always check before use
- **Empty object `{}` = basic support** — the feature exists but without special extensions
- **Nested properties = specific features** — e.g., `"resources": { "subscribe": true }` means resources with subscription support
- Capability negotiation is **per-request and stateless** — every request carries capability declarations

### The Three Core Primitives

MCP defines three fundamental building blocks for adding context to language models, with different control ownership:

| Primitive | Control | Description | Example |
|-----------|---------|-------------|---------|
| **Prompts** | User-controlled | Templates invoked by explicit user choice | Slash commands, menu options |
| **Resources** | Application-controlled | Data attached and managed by the client | File contents, git history, database records |
| **Tools** | Model-controlled | Functions the LLM can invoke autonomously | API calls, file operations, computations |

**Tools**: The most impactful primitive. When a tool is exposed to the LLM, the model can discover and invoke it dynamically during generation. Tool results are returned to the model as context for the next generation step. Tools are registered with:
- `name` — identifier for the model to reference
- `description` — natural language explanation of what the tool does (the primary discovery surface for the LLM)
- `inputSchema` — JSON Schema describing accepted parameters
- Result content types: `text`, `image`, `audio`, `resource`

**Resources**: URI-addressed data content. Servers expose resources via `resources/list`; clients read them via `resources/read`. Resources support:
- Subscriptions (`resources/subscribe`) for real-time updates
- Resource templates using RFC 6570 URI templates for parameterized access
- Standard URI schemes: `file://`, `https://`, `git://`

**Prompts**: Pre-defined message templates. Listed via `prompts/list` and retrieved via `prompts/get` with arguments. Unlike tools (which the model invokes autonomously), prompts are for user-initiated interactions — they represent the "right way" to frame a certain type of request.

### Optional Protocol Features

**Sampling** (Server → Client): Allows an MCP server to request LLM completions via the client. The server expresses model preference as normalized priorities (0–1):
- `costPriority`: How important is minimizing cost?
- `speedPriority`: How important is low latency?
- `intelligencePriority`: How important are advanced capabilities?

Servers can also provide model hints (`"claude-3-sonnet"`, etc.). A human-in-the-loop SHOULD be required for sampling requests. This feature is **deprecated** in the 2026-07-28 spec — servers should integrate directly with LLM provider APIs instead.

**Roots** (Client → Server): Defines filesystem boundaries where servers can operate, allowing servers to understand which directories and files they have access to. This provides a security boundary mechanism.

### Protocol Lifecycle

```
┌────────────────────────────────────────────────┐
│         Initialization Phase                   │
│  Client → Server: initialize request            │
│  Server → Client: initialize response           │
│  Client → Server: initialized notification      │
└────────────────────────────────────────────────┘
                       ↓
┌────────────────────────────────────────────────┐
│           Operation Phase                      │
│    All subsequent protocol operations          │
│    (tools, resources, prompts, etc.)           │
└────────────────────────────────────────────────┘
                       ↓
┌────────────────────────────────────────────────┐
│           Shutdown Phase                        │
│    Transport-level termination                  │
│    (stdio: close streams; HTTP: close conn)    │
└────────────────────────────────────────────────┘
```

**Initialization rules:**
- The `initialize` request must not be part of a JSON-RPC batch
- Client should not send requests other than `ping` before server responds to `initialize`
- Server should not send requests other than `ping` and logging before receiving `initialized`

**Timeouts:** Implementations should establish timeouts for all sent requests. Senders should issue cancellation notifications when timeouts expire.

### Error Codes

| Code | Meaning |
|------|---------|
| -32700 | Parse error — invalid JSON |
| -32600 | Invalid request — not a valid JSON-RPC request |
| -32601 | Method not found — unknown method |
| -32602 | Invalid params — invalid method parameters |
| -32603 | Internal error — internal server error |
| -32000 to -32099 | MCP-specific server errors |

---

## 3. Ecosystem and Implementations

### Official SDKs

Anthropic maintains official MCP SDKs in **10 languages**, all hosted at `github.com/modelcontextprotocol`:

| Language | Repository |
|----------|-----------|
| Python | `modelcontextprotocol/python-sdk` |
| TypeScript/JavaScript | `modelcontextprotocol/typescript-sdk` |
| C# | `modelcontextprotocol/csharp-sdk` |
| Go | `modelcontextprotocol/go-sdk` |
| Java | `modelcontextprotocol/java-sdk` |
| Kotlin | `modelcontextprotocol/kotlin-sdk` |
| PHP | `modelcontextprotocol/php-sdk` |
| Ruby | `modelcontextprotocol/ruby-sdk` |
| Rust | `modelcontextprotocol/rust-sdk` |
| Swift | `modelcontextprotocol/swift-sdk` |

### Reference Servers

The [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) repository contains reference implementations maintained by the MCP steering group:

| Server | Description |
|--------|-------------|
| `everything` | Reference/test server with prompts, resources, and tools |
| `fetch` | Web content fetching and conversion for efficient LLM usage |
| `filesystem` | Secure file operations with configurable access controls |
| `git` | Read, search, and manipulate Git repositories |
| `memory` | Knowledge graph-based persistent memory system |
| `sequentialthinking` | Dynamic problem-solving through thought sequences |
| `time` | Time and timezone conversion |

**Archived reference servers** (now maintained by community):
- GitHub, GitLab, Google Drive, Google Maps, Brave Search, PostgreSQL, SQLite, Redis, Sentry, Slack, Puppeteer, EverArt, AWS KB Retrieval

These servers are **educational reference implementations**, not production-ready solutions. Production deployments should evaluate their own security requirements.

### Community Servers and Registries

The **MCP Registry** at `registry.modelcontextprotocol.io` lists published community servers. Notable community categories:

- **Music/Audio**: SUB/WAVE (radio DJ control), Wave (SuperCollider audio synthesis), Spotify integrations, Ableton Live MCP servers, Reaper integration
- **Development**: GitHub, GitLab, PostgreSQL, SQLite, Redis, filesystem servers
- **Productivity**: Slack, Notion, Google Calendar, email integrations
- **Monitoring**: Sentry, Datadog, cloud provider integrations
- **Content**: Web search, web scraping, content extraction

The registry provides a browsable directory for discovering MCP servers for various use cases.

### MCP Clients

MCP is supported across a wide range of AI tools:

| Client | Type | Notes |
|--------|------|-------|
| **Claude Desktop** | Desktop app | Local stdio servers + remote HTTP servers |
| **Claude Code** | CLI agent | MCP integration via `claude mcp add` |
| **Cursor** | IDE | MCP server configuration in settings |
| **VS Code (with Cody)** | IDE | MCP support via Cody extension |
| **Windsurf** | IDE | Cascade agent MCP integration |
| **Zed** | IDE | MCP support announced |
| **JetBrains** | IDE | MCP integration in progress |
| **Claude API** | API | MCP via API connectors |

### How to Build a Custom MCP Server

Building an MCP server involves:

1. **Choose an SDK** matching your language (Python, TypeScript, Go, etc.)
2. **Implement the server class** with the three core primitives:
   - Register tools via `setRequestHandler`
   - Expose resources via `server.addResource()`
   - Define prompts via `server.addPrompt()`
3. **Connect a transport**: stdio for local servers, HTTP+SSE for remote
4. **Declare capabilities** in the `initialize` response
5. **Handle errors** with structured `MCPError` types

The `modelcontextprotocol/servers` repository provides reference implementations in each language showing best practices for each SDK.

### Smithery.ai

**Smithery** (`smithery.ai`) is a third-party platform that automates MCP server installation for Claude Desktop — a managed registry and configuration tool that simplifies connecting community servers.

---

## 4. Security Model

MCP introduces a fundamentally new attack surface: AI agents dynamically executing tools based on natural language, with access to sensitive systems. Unlike traditional APIs where developers control every call, MCP lets LLMs decide which tools to invoke, when, and with what parameters. This creates unique security risks combining prompt injection, supply chain attacks, and confused deputy problems.

### Known Risk Categories

**Tool Poisoning**: Malicious instructions hidden in tool descriptions, parameter schemas, or return values that manipulate the LLM's behavior. Tool descriptions are not just documentation — they become part of the model's context and can be exploited as injection vectors.

**Rug Pull Attacks**: A server changes its tool definitions after initial user approval, turning a trusted tool malicious. A tool approved at installation time may behave differently days later.

**Tool Shadowing / Cross-Origin Escalation**: A malicious server's tool description manipulates how the agent behaves with tools from other trusted servers — e.g., a search tool redefining what "delete" means to the agent.

**Confused Deputy Problem**: The MCP server executes actions with its own (often broad) privileges, not the requesting user's permissions. This is especially problematic for OAuth scopes.

**Data Exfiltration via Legitimate Channels**: Sensitive data encoded into seemingly normal tool calls — e.g., search queries or email subjects that actually contain stolen data.

**Excessive Permissions / Over-Scoped Tokens**: OAuth tokens granted with overly broad access (full Gmail vs. read-only), creating aggregation risk when multiple servers combine.

**Supply Chain Attacks**: Compromised or typosquatted MCP server packages from public registries.

**Message Tampering and Replay**: JSON-RPC payloads modified after TLS termination, or captured and re-sent to duplicate actions.

**Sandbox Escapes**: Local MCP servers running with full host access.

### MCP-Specific Authorization

MCP provides authorization capabilities at the transport level for HTTP-based servers. The specification recommends **OAuth 2.1** with PKCE for authentication. Key aspects:

- MCP clients make requests **on behalf of** resource owners
- Authorization scopes should be narrow and per-server
- Short-lived, ephemeral tokens preferred over long-lived PATs
- Session tokens should be bound to user-specific context

### OWASP MCP Security Best Practices

The [OWASP MCP Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html) provides comprehensive guidance:

**1. Principle of Least Privilege**
- Grant each server minimum permissions needed
- Use scoped, per-server credentials — never share tokens across servers
- Request narrow OAuth scopes (e.g., `mail.readonly` not `mail.modify`)

**2. Tool Description & Schema Integrity**
- Inspect all tool descriptions, parameter names, types, and return schemas before approval
- Treat the entire tool schema as a potential injection surface
- Pin tool definitions using cryptographic hashes; alert on changes (prevents rug pulls)
- Use `mcp-scan` to detect poisoned descriptions and cross-server shadowing
- Use strict JSON Schema: set `additionalProperties: false`

**3. Sandbox and Isolate Servers**
- Run local servers in containers, chroot, or application sandboxes
- Restrict filesystem access to only required directories
- Disable network access unless explicitly needed
- Separate sensitive servers (payment, auth, PII) from general-purpose ones

**4. Human-in-the-Loop for Sensitive Actions**
- Require explicit user confirmation for destructive, financial, or data-sharing operations
- Display full tool call parameters to the user — not just a summary name
- Ensure confirmation UI cannot be bypassed by LLM-crafted responses

**5. Input and Output Validation**
- Validate all inputs — treat them as untrusted (they originate from LLM output)
- Sanitize against SQL injection, OS command injection, path traversal
- Validate tool outputs before returning to LLM context
- Protect against SSRF: never fetch arbitrary URLs from LLM without strict allowlist

**6. Authentication and Transport Security**
- Enforce TLS for all remote HTTP/SSE transports
- Bind MCP HTTP/SSE servers to specific interfaces (e.g., `127.0.0.1`), never `0.0.0.0`
- Validate the `Host` header on every request
- Use OS-native secure credential storage (macOS Keychain, Windows Credential Manager, Linux Secret Service)
- Never store OAuth tokens in plaintext config files

**7. Message-Level Integrity and Replay Protection**
- Sign each MCP message with asymmetric keys (e.g., ECDSA P-256)
- Include unique nonces and timestamps; reject duplicates or stale messages
- Pin tool definitions at discovery time using SHA-256 hashes
- Require mutual signing (both client and server)
- Fail closed: reject messages with missing/invalid signatures

**8. Multi-Server Isolation**
- Treat each MCP server as an independent untrusted security domain
- Prevent cross-server tool description interference
- Monitor cross-server data flows
- Use an MCP gateway to enforce isolation policies

**9. Supply Chain Security**
- Only install servers from trusted, verified sources
- Review source code before installation
- Verify package integrity with checksums or code signing
- Scan dependencies for known vulnerabilities
- Watch for typosquatting (e.g., `mcp-server-filesystem` vs `mcp-server-filesytem`)
- Use `mcp-scan` to monitor installed servers

**10. Prompt Injection via Tool Return Values**
- Treat every tool response as untrusted input — sanitize before feeding back into LLM
- Strip HTML-like tags from tool outputs
- Log and alert on tool responses containing instruction-like patterns

### MCP Authorization Specification

The [MCP Authorization specification](https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization) defines how HTTP-based transports implement authorization flows, enabling MCP clients to make requests to restricted servers on behalf of resource owners.

---

## 5. Use Cases and SUB/WAVE Integration

### MCP in Practice: SUB/WAVE as a Case Study

**SUB/WAVE** (the personal internet radio project) includes a production MCP server implementation that demonstrates how MCP connects AI agents to real-world systems. The server is documented at `github.com/perminder-klair/subwave/blob/main/docs/mcp-server.md`.

**Architecture of SUB/WAVE's MCP Integration:**

```
MCP Client (Claude Code / Desktop)
        │
        │ Streamable HTTP
        ↓
Controller /api/mcp (Express, behind Caddy)
        │
        ├── 7 read-only tools (no auth required)
        └── 10 admin-gated tools (Basic auth required)
                │
                ├── Queue management
                ├── DJ control
                ├── SFX playback
                └── Skill execution
```

**The 17 Tools SUB/WAVE Exposes:**

*Read-only tools (no authentication):*
| Tool | Purpose |
|------|---------|
| `subwave_health` | Health check endpoint |
| `subwave_now_playing` | Current track, station context, listener count |
| `subwave_station_state` | Upcoming queue, history, DJ booth log |
| `subwave_schedule` | Personas, shows, weekly grid |
| `subwave_session` | DJ live session identity, recent transcript |
| `subwave_request_song` | Request a track (natural language, rate-limited) |
| `subwave_request_status` | Check request outcome |

*Admin-gated tools (Basic auth required):*
| Tool | Purpose |
|------|---------|
| `subwave_search_library` | Search Navidrome library |
| `subwave_queue_track` | Queue exact track by ID (no LLM, no rate limit) |
| `subwave_skip_track` | End current track immediately |
| `subwave_dj_announce` | Put spoken update on-air |
| `subwave_dj_segment` | Fire scripted voice segment |
| `subwave_list_skills` | List available skills |
| `subwave_run_skill` | Execute a skill by name |
| `subwave_list_sfx` | List sound effects library |
| `subwave_play_sfx` | Play a stinger on-air immediately |
| `subwave_refresh_playlist` | Refresh fallback playlist |

**Two Connection Methods:**

1. **HTTP (recommended)**: No clone, no local process. The controller serves MCP directly at `/api/mcp` via stateless Streamable HTTP. Auth credentials are in the `Authorization: Basic` header. Configuration example:
```
claude mcp add --transport http subwave https://your-station/api/mcp \
 --header "Authorization: Basic $(printf '%s' "$ADMIN_USER:$ADMIN_PASS" | base64)"
```

2. **Local stdio**: Runs from a repo clone via `tsx`. The standalone launcher connects to the controller's HTTP API. Useful for development.

**Design Decisions Worth Noting:**

- `subwave_request_song` uses **polling** to give the agent an **outcome, not a ticket**. The tool POSTs to `/request`, gets a 202 receipt, polls `GET /request/:id` every 2s (~45s budget), and returns the matched track + queue position + DJ ack, or a miss message.

- The tool descriptions make three things **explicit to the model** (because they're easy to get wrong):
  1. It queues, it does not interrupt — requests land after the current song
  2. It is rate-limited (1 per 20s, 8 per hour per source)
  3. It pauses with the station — zero listeners returns 503

- Every failure is a **SubwaveError** with an agent-actionable message, not a log dump:
  - Controller unreachable → names the URL and dev/prod defaults to check
  - HTTP 429 → cooldown in seconds plus rate-limit policy
  - HTTP 401/403 → whether credentials are missing or simply don't match
  - HTTP 503 → controller's own explanation passed through

- Admin credentials live in the **MCP client's config**, never in a prompt

**The MCP server's internal structure** (`mcp-subwave/`):
- `controller/src/mcp/tools.ts` — the 17 tool definitions, shared by both HTTP and stdio transports
- `controller/src/mcp/client.ts` — typed HTTP client with Basic auth and SubwaveError
- `controller/src/routes/mcp.ts` — the built-in HTTP endpoint
- `controller/src/mcp/stdio.ts` — stdio bootstrap
- `mcp-subwave/src/index.ts` — thin `tsx` launcher for local development

### Common MCP Integration Patterns

**Pattern 1: Extending AI with Tools**
The most common use case. Expose external capabilities (search, database, APIs) as MCP tools so the AI can invoke them during generation. Example: a filesystem server lets Claude read/write files.

**Pattern 2: Data Source Access**
Expose organizational data as MCP resources — database schemas, document stores, calendars. The AI reads context from these sources to ground its responses.

**Pattern 3: Agentic Workflow Control**
As demonstrated by SUB/WAVE: external agents can drive AI systems (queue a song, trigger a segment, check station state). MCP provides the typed capability surface with schema validation, authentication, and error handling — a contract in code rather than prose.

**Pattern 4: Desktop/IDE Integration**
MCP connects AI coding assistants to development tooling — Git operations, terminal execution, filesystem access, browser automation.

### Benefits Over Custom Tool-Calling

| Aspect | MCP | Custom Implementation |
|--------|-----|----------------------|
| Standardization | Open protocol | Proprietary per-implementation |
| Reusability | Servers work across all MCP clients | Single-purpose per client |
| Discovery | Built-in `server/discover` | Custom negotiation |
| Capability negotiation | Per-request via `_meta` | Often fixed at setup |
| Tool schemas | Standardized JSON Schema | Varying formats |
| Error handling | Consistent error schema | Inconsistent |
| Auth model | OAuth 2.1 recommended | Custom or absent |

---

## 6. Technical Summary

### Protocol Versioning Timeline

| Version | Date | Key Change |
|---------|------|------------|
| `2024-11-05` | November 2024 | Initial release, HTTP+SSE transport |
| `2025-03-26` | March 2025 | Streamable HTTP replaces HTTP+SSE |
| `2025-11-25` | November 2025 | Current stable version |
| `2026-07-28` | July 2026 | Sampling deprecated; elicitation formalized |

### Quick Reference

| Aspect | Detail |
|--------|--------|
| **RPC format** | JSON-RPC 2.0 |
| **Transports** | stdio (local), Streamable HTTP + SSE (remote) |
| **Current version** | `2025-11-25` |
| **Versioning model** | YYYY-MM-DD, per-request negotiation |
| **Core primitives** | Tools, Resources, Prompts |
| **Client primitives** | Elicitation (user input), Sampling (deprecated) |
| **Discovery** | `server/discover` RPC (optional to call) |
| **Auth** | OAuth 2.1 recommended for HTTP; Basic auth common |
| **Governance** | Open source, Anthropic-led, community contributions |

---

## Sources

- https://modelcontextprotocol.io/
- https://modelcontextprotocol.io/specification/2025-03-26
- https://modelcontextprotocol.io/specification/2025-03-26/basic/transports/stdio
- https://modelcontextprotocol.io/specification/2025-03-26/basic/transports/streamable-http
- https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle
- https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization
- https://modelcontextprotocol.io/docs/tutorials/security/authorization
- https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro
- https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture
- https://modelcontextprotocol.io/docs/2026-07-28/learn/versioning
- https://github.com/modelcontextprotocol/servers
- https://github.com/perminder-klair/subwave
- https://github.com/perminder-klair/subwave/blob/main/docs/mcp-server.md
- https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html
- https://dev.to/portkey/mcp-message-types-complete-mcp-json-rpc-reference-guide-3gja
- https://claude.com/docs/connectors/building/mcp
- https://chatforest.com/guides/mcp-anthropic-claude-integration/
- https://craftedsilicon.com/model-context-protocol-mcp-servers-clients-deploying-your-own-and-interacting-via-claude-desktop-cursor-and-windsurf/
- https://chatforest.com/guides/mcp-music-audio-production/
- https://registry.modelcontextprotocol.io/

---

*Essay compiled 2026-07-28. MCP is a rapidly evolving specification — verify details against the official specification at modelcontextprotocol.io for the latest protocol version and features.*
