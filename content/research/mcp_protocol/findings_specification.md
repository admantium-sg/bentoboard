# MCP Protocol Specification Details

## Overview

The Model Context Protocol (MCP) is an open protocol enabling seamless integration between LLM applications and external data sources and tools. It provides a standardized way for applications to share contextual information with language models, expose tools and capabilities to AI systems, and build composable integrations and workflows.

**Reference:** https://modelcontextprotocol.io/specification/2025-03-26

---

## 1. JSON-RPC 2.0 Message Format

All messages in MCP MUST follow the [JSON-RPC 2.0](https://www.jsonrpc.org/specification) specification. The protocol defines three types of messages:

### Requests
Requests are sent from client to server or vice versa to initiate an operation.

```json
{
  "jsonrpc": "2.0";
  "id": string | number;
  "method": string;
  "params?: {
    [key: string]: unknown;
  };
}
```

**Rules:**
- Requests MUST include a string or integer ID
- Unlike base JSON-RPC, the ID MUST NOT be `null`
- The request ID MUST NOT have been previously used by the requestor within the same session

### Responses
Responses are sent in reply to requests, containing the result or error.

```json
{
  "jsonrpc": "2.0";
  "id": string | number;
  "result?: {
    [key: string]: unknown;
  }
  error?: {
    code: number;
    message: string;
    data?: unknown;
  }
}
```

**Rules:**
- Responses MUST include the same ID as the request they correspond to
- Either a `result` or an `error` MUST be set — a response MUST NOT set both
- Error codes MUST be integers

### Notifications
Notifications are one-way messages that do not expect a response.

```json
{
  "jsonrpc": "2.0";
  "method": string;
  "params?: {
    [key: string]: unknown;
  };
}
```

**Rules:**
- Notifications MUST NOT include an ID
- The receiver MUST NOT send a response

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/basic

---

## 2. Message Types

### Client → Server Requests

| Method | Schema Type | Purpose |
|--------|-------------|---------|
| `initialize` | InitializeRequestSchema | Establish connection and negotiate capabilities |
| `ping` | PingRequestSchema | Health check |
| `tools/list` | ListToolsRequestSchema | Discover available tools |
| `tools/call` | CallToolRequestSchema | Execute a tool |
| `resources/list` | ListResourcesRequestSchema | Discover available resources |
| `resources/read` | ReadResourceRequestSchema | Read resource content |
| `resources/subscribe` | SubscribeRequestSchema | Subscribe to resource updates |
| `resources/unsubscribe` | UnsubscribeRequestSchema | Cancel subscription |
| `resources/templates/list` | ListResourceTemplatesRequestSchema | List resource templates |
| `prompts/list` | ListPromptsRequestSchema | Discover available prompts |
| `prompts/get` | GetPromptRequestSchema | Get prompt details |
| `logging/setLevel` | SetLevelRequestSchema | Configure logging verbosity |
| `roots/list` | ListRootsRequestSchema | List filesystem roots |

### Server → Client Requests

| Method | Schema Type | Purpose |
|--------|-------------|---------|
| `ping` | PingRequestSchema | Server-initiated health check |
| `sampling/createMessage` | CreateMessageRequestSchema | Request message creation from LLM |
| `elicitation/create` | ElicitRequestSchema | Request user input |
| `completion/complete` | CompleteRequestSchema | Request text completion |

### Notifications (No Response Expected)

| Method | Direction | Purpose |
|--------|-----------|---------|
| `initialized` | Client → Server | Confirm initialization complete |
| `cancelled` | Both | Cancel in-progress operation |
| `progress` | Both | Report operation progress |
| `resources/updated` | Server → Client | Resource content changed |
| `resources/list_changed` | Server → Client | Available resources changed |
| `prompts/list_changed` | Server → Client | Available prompts changed |
| `tools/list_changed` | Server → Client | Available tools changed |
| `logging/message` | Server → Client | Log output |
| `roots/list_changed` | Server → Client | Filesystem roots changed |

**Source:** https://dev.to/portkey/mcp-message-types-complete-mcp-json-rpc-reference-guide-3gja

---

## 3. Capabilities Discovery Mechanism

Capabilities are the heart of MCP's flexibility. During initialization, both client and server advertise what they can do, creating a contract for their interaction.

### How Capability Negotiation Works

1. MCP Client announces what it can handle in the `initialize` request
2. MCP Server responds with what it offers in the `initialize` response
3. Both parties only use mutually supported features
4. Runtime errors are avoided through upfront negotiation

### Client Capabilities

```json
{
  "capabilities": {
    "roots": {
      "listChanged": true
    },
    "sampling": {},
    "experimental": {
      "customFeature": true
    }
  }
}
```

### Server Capabilities

```json
{
  "capabilities": {
    "tools": {},
    "resources": {
      "subscribe": true,
      "listChanged": true
    },
    "prompts": {
      "listChanged": true
    },
    "logging": {}
  }
}
```

### Capability Rules

- **No capability = No feature**: If not advertised, assume unavailable
- **Empty object = Basic support**: `"tools": {}` means tools are available but without special features
- **Nested properties = Specific features**: `"resources": { "subscribe": true }` means resources with subscription support
- **Check before use**: Always verify capability exists before using a feature

### Common Capability Patterns

**Basic Server (Minimal Capabilities):**
```json
{
  "capabilities": {
    "tools": {}
  }
}
```

**Full-Featured Server:**
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

**Advanced Client:**
```json
{
  "capabilities": {
    "roots": { "listChanged": true },
    "sampling": {},
    "experimental": { "debugging": true, "metrics": true }
  }
}
```

### Capability-Dependent Message Flow

| Server Capability | Enables Server Messages | Required for Client Messages |
|-------------------|------------------------|------------------------------|
| `tools` | — | `tools/list`, `tools/call` |
| `tools.listChanged` | `tools/list_changed` notification | — |
| `resources` | — | `resources/list`, `resources/read` |
| `resources.subscribe` | `resources/updated` notification | `resources/subscribe`, `resources/unsubscribe` |
| `resources.listChanged` | `resources/list_changed` notification | — |
| `prompts` | — | `prompts/list`, `prompts/get` |
| `prompts.listChanged` | `prompts/list_changed` notification | — |
| `logging` | `logging/message` notification | `logging/setLevel` |

| Client Capability | Enables Client Messages | Required for Server Messages |
|-------------------|------------------------|-----------------------------|
| `roots` | `roots/list` | — |
| `roots.listChanged` | — | `roots/list_changed` notification |
| `sampling` | — | `sampling/createMessage`, `completion/complete` |

**Source:** https://dev.to/portkey/mcp-message-types-complete-mcp-json-rpc-reference-guide-3gja

---

## 4. The Three Core Primitives

MCP provides three fundamental building blocks for adding context to language models:

### Control Hierarchy

| Primitive | Control | Description | Example |
|-----------|---------|-------------|---------|
| **Prompts** | User-controlled | Interactive templates invoked by user choice | Slash commands, menu options |
| **Resources** | Application-controlled | Contextual data attached and managed by the client | File contents, git history |
| **Tools** | Model-controlled | Functions exposed to the LLM to take actions | API POST requests, file writing |

### Tools

Tools enable models to interact with external systems. They are **model-controlled**, meaning the language model can discover and invoke tools automatically.

**Capability Declaration:**
```json
{
  "capabilities": {
    "tools": {
      "listChanged": true
    }
  }
}
```

**Key Protocol Messages:**
- `tools/list` — Discover available tools
- `tools/call` — Execute a tool with arguments

**Tool Result Content Types:**
- Text: `{ "type": "text", "text": "..." }`
- Image: `{ "type": "image", "data": "base64...", "mimeType": "image/png" }`
- Audio: `{ "type": "audio", "data": "base64...", "mimeType": "audio/wav" }`
- Embedded Resource: `{ "type": "resource", "resource": { "uri": "...", ... } }`

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/server/tools

### Resources

Resources provide structured data or content for additional context. They are **application-controlled**, with host applications determining how to incorporate context.

**Capability Declaration:**
```json
{
  "capabilities": {
    "resources": {
      "subscribe": true,
      "listChanged": true
    }
  }
}
```

**Key Protocol Messages:**
- `resources/list` — Discover available resources
- `resources/read` — Retrieve resource contents
- `resources/templates/list` — List parameterized resource templates (using URI templates per RFC 6570)
- `resources/subscribe` — Subscribe to resource changes
- `resources/unsubscribe` — Cancel subscription

**Standard URI Schemes:**
- `https://` — Web resources
- `file://` — Filesystem-like resources
- `git://` — Git version control integration

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/server/resources

### Prompts

Prompts are pre-defined templates that guide language model interactions. They are **user-controlled**, intended for explicit user selection.

**Capability Declaration:**
```json
{
  "capabilities": {
    "prompts": {
      "listChanged": true
    }
  }
}
```

**Key Protocol Messages:**
- `prompts/list` — Discover available prompt templates
- `prompts/get` — Retrieve a prompt template with arguments filled in

**Prompt Content Types:**
- Text, Image, Audio, and Embedded Resources (same as tools)

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/server/prompts

---

## 5. Sampling and Roots (Optional Protocol Features)

### Sampling (Server → Client)

Sampling allows servers to request LLM generations from language models via clients. This enables servers to implement **agentic behaviors** by enabling LLM calls nested inside other MCP server features.

**Capability Declaration:**
```json
{
  "capabilities": {
    "sampling": {}
  }
}
```

**Protocol Message:**
- `sampling/createMessage` — Server asks client to generate an LLM response

**Model Preference System:**
Servers express needs through normalized priority values (0-1):
- `costPriority`: How important is minimizing costs?
- `speedPriority`: How important is low latency?
- `intelligencePriority`: How important are advanced capabilities?

Model hints allow servers to suggest specific models:
```json
{
  "hints": [
    { "name": "claude-3-sonnet" },
    { "name": "claude" }
  ],
  "intelligencePriority": 0.8,
  "speedPriority": 0.5
}
```

**Security:** There SHOULD always be a human in the loop with ability to deny sampling requests.

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/client/sampling

### Roots (Client → Server)

Roots define filesystem boundaries where servers can operate, allowing them to understand which directories and files they have access to.

**Capability Declaration:**
```json
{
  "capabilities": {
    "roots": {
      "listChanged": true
    }
  }
}
```

**Protocol Messages:**
- `roots/list` — Server requests list of filesystem roots
- `notifications/roots/list_changed` — Client notifies when roots change

**Data Type:**
```json
{
  "uri": "file:///home/user/projects/myproject",
  "name": "My Project"
}
```

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/client/roots

---

## 6. Protocol State Machine and Lifecycle

The MCP lifecycle consists of three distinct phases:

### Lifecycle Diagram

```
┌─────────────────────────────────────────┐
│         Initialization Phase            │
│  Client → Server: initialize request    │
│  Server → Client: initialize response   │
│  Client → Server: initialized notification │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│           Operation Phase               │
│    Normal protocol operations           │
│    (tools, resources, prompts, etc.)    │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│            Shutdown Phase               │
│       Client closes connection          │
└─────────────────────────────────────────┘
```

### Initialization Phase

The initialization phase MUST be the first interaction between client and server.

**Step 1:** Client sends `initialize` request:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-03-26",
    "capabilities": {
      "roots": { "listChanged": true },
      "sampling": {}
    },
    "clientInfo": {
      "name": "ExampleClient",
      "version": "1.0.0"
    }
  }
}
```

**Step 2:** Server responds with capabilities:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "protocolVersion": "2025-03-26",
    "capabilities": {
      "logging": {},
      "prompts": { "listChanged": true },
      "resources": { "subscribe": true, "listChanged": true },
      "tools": { "listChanged": true }
    },
    "serverInfo": {
      "name": "ExampleServer",
      "version": "1.0.0"
    },
    "instructions": "Optional instructions"
  }
}
```

**Step 3:** Client sends `initialized` notification:
```json
{
  "jsonrpc": "2.0",
  "method": "notifications/initialized"
}
```

**Rules:**
- The `initialize` request MUST NOT be part of a JSON-RPC batch
- Client SHOULD NOT send requests other than pings before server responds to `initialize`
- Server SHOULD NOT send requests other than pings and logging before receiving `initialized` notification

### Version Negotiation

- Client sends the protocol version it supports (SHOULD be latest)
- If server supports that version, it responds with the same version
- If not, server responds with another supported version (SHOULD be latest)
- If client doesn't support the server's response version, it SHOULD disconnect

### Operation Phase

During operation, both parties SHOULD:
- Respect the negotiated protocol version
- Only use capabilities that were successfully negotiated

### Shutdown Phase

No specific shutdown messages are defined. The underlying transport mechanism signals connection termination:

**stdio transport:**
1. Client closes input stream to server
2. Waits for server to exit, or sends `SIGTERM` if needed
3. Sends `SIGKILL` if server doesn't exit

**HTTP transport:**
Shutdown is indicated by closing HTTP connections.

### Timeouts

Implementations SHOULD establish timeouts for all sent requests. When a request hasn't received a response within the timeout period:
- Sender SHOULD issue a cancellation notification
- Sender SHOULD stop waiting for response

Implementations MAY reset timeout on progress notifications but SHOULD always enforce a maximum timeout.

**Source:** https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle

---

## Error Codes

| Code | Meaning | Description |
|------|---------|-------------|
| -32700 | Parse error | Invalid JSON |
| -32600 | Invalid request | Not a valid JSON-RPC request |
| -32601 | Method not found | Unknown method |
| -32602 | Invalid params | Invalid method parameters |
| -32603 | Internal error | Internal server error |
| -32000 to -32099 | Server error | MCP-specific errors |
| -32002 | Resource not found | Resource not found |

---

## Schema

The full specification is defined as a [TypeScript schema](https://github.com/modelcontextprotocol/specification/blob/main/schema/2025-03-26/schema.ts). There is also a [JSON Schema](https://github.com/modelcontextprotocol/specification/blob/main/schema/2025-03-26/schema.json) automatically generated from the TypeScript source.

**Source:** https://modelcontextprotocol.io/specification/2025-03-26
