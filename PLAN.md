# BentoBoard File System Migration Plan

## Overview

Transform BentoBoard from a Supabase-backed application to a file system-based dashboard that visualizes and manages content from `/home/devcon/.openclaw/shared-workspace/`. The application will read, write, and watch files in the shared-workspace directory, removing all Supabase dependencies.

---

## High-Level Architecture

### Current Architecture (To Be Removed)
```
BentoBoard Frontend (Next.js)
         ↓
    Supabase (PostgreSQL + Realtime)
    - Items table
    - Notifications table
    - Comments table
    - Projects table
    - Outreach table
```

### New Architecture
```
BentoBoard Frontend (Next.js)
         ↓
    API Routes (/api/*)
         ↓
    File System (/home/devcon/.openclaw/shared-workspace/)
    - kanban/{project}/
      - backlog/
      - to-do/
      - blocked/
      - in-progress/
      - in-review/
      - pull-request/
      - done/
      - cancelled/
      - sessions/
    - brainstorming/{project}/
    - research/{topic}/
    - code-bugfix/{project}/
    - status/
```

---

## Section 1: Data Model Changes

### 1.1 New Types

Add file-system specific types to `src/lib/types.ts`:

```typescript
// Kanban Ticket Phases (from auto-kanban-flow skill)
export type KanbanPhase =
  | 'backlog'
  | 'to-do'
  | 'blocked'
  | 'in-progress'
  | 'in-review'
  | 'pull-request'
  | 'done'
  | 'cancelled'

// File-based Content Types
export type ContentType = 'kanban-ticket' | 'markdown-doc' | 'session-registry' | 'status-file'

// File Node Structure (for directory tree)
export interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: FileNode[]
  size?: number
  modifiedAt: string
}

// Kanban Ticket (parsed from markdown)
export interface KanbanTicket {
  id: string                // e.g., "DASH-019"
  project: string           // e.g., "openclaw-kanban-dashboard"
  acronym: string          // e.g., "DASH"
  number: number           // e.g., 19
  title: string
  description: string
  tasks: TicketTask[]
  acceptanceCriteria: string[]
  questions: string[]
  assumptions: string[]
  priority?: string
  metadata: Record<string, string>
  phase: KanbanPhase
  phaseHistory: PhaseHistoryEntry[]
  attempts: AttemptEntry[]
  symbol?: string          // e.g., "⏳" or "❌"
  filePath: string         // Absolute path to file
  modifiedAt: string
}

interface TicketTask {
  checked: boolean
  text: string
}

interface PhaseHistoryEntry {
  phase: KanbanPhase
  date: string
  notes?: string
}

interface AttemptEntry {
  number: number
  phase: KanbanPhase
  questionBlock: string
  attempts: number
  resolution?: string
}

// Session Registry (from kanban/sessions/{PROJECT_ACR}-session.json)
export interface SessionRegistry {
  startedAt: string
  lastHeartbeat: string
  activeTicket: string | null
  activeBranch: string | null
  phase: KanbanPhase | null
  project: string
}

// Project Status (from status/maintenance-engineer.json)
export interface AgentStatus {
  agent: string
  state: string
  currentTask: string
  progress: string
  blockers: string[]
  inputFiles: string[]
  outputFiles: string[]
  updatedAt: string
}

// Markdown Document (non-kanban files)
export interface MarkdownDoc {
  path: string
  title: string
  content: string
  category: string       // e.g., "research-findings", "feature-ideas", "run-report"
  project: string
  modifiedAt: string
}
```

### 1.2 Remove Supabase Types

Remove or deprecate the following types (no longer used):
- `Item` → Replace with `KanbanTicket` or `MarkdownDoc`
- `ItemStatus` → Replace with `KanbanPhase`
- `ItemType` → Replace with `ContentType`
- `Notification` → Will be derived from file system events
- `Comment` → Will be derived from ticket attempts/questions
- `Project` → Derived from kanban directory structure
- `OutreachCreator` → Can be kept if needed as markdown-doc type

---

## Section 2: Backend API Routes

### 2.1 Directory Structure

Create new API routes under `src/app/api/`:

```
src/app/api/
├── fs/
│   ├── ls/route.ts              # List directory contents
│   ├── read/route.ts            # Read file content
│   ├── write/route.ts           # Write file content
│   ├── move/route.ts            # Move file between directories
│   └── watch/route.ts           # Polling endpoint for file changes
├── kanban/
│   ├── projects/route.ts         # List all kanban projects
│   ├── tickets/route.ts         # List tickets by project/phase
│   ├── ticket/[id]/route.ts     # Get single ticket details
│   ├── ticket/[id]/phase/route.ts  # Update ticket phase
│   ├── ticket/[id]/content/route.ts # Update ticket content
│   ├── sessions/route.ts         # Get active session for project
│   └── stats/route.ts          # Project statistics
├── docs/
│   ├── list/route.ts            # List all markdown docs
│   ├── [path]/route.ts          # Get doc by path
│   └── [path]/write/route.ts   # Update doc content
└── status/route.ts              # Get agent status
```

### 2.2 API Route Implementations

#### 2.2.1 File System Routes (`src/app/api/fs/`)

**GET /api/fs/ls**
- Query params: `path` (relative to shared-workspace)
- Returns: `FileNode[]` (directory tree)
- Error handling: Validate path doesn't escape shared-workspace root

**GET /api/fs/read**
- Query params: `path` (relative to shared-workspace)
- Returns: `{ content: string, modifiedAt: string }`
- Error handling: File not found, permission denied

**POST /api/fs/write**
- Body: `{ path, content }`
- Writes file atomically (write to temp, then rename)
- Returns: `{ success: true, modifiedAt: string }`
- Creates parent directories if needed

**POST /api/fs/move**
- Body: `{ fromPath, toPath }`
- Moves file between directories (for phase transitions)
- Returns: `{ success: true }`
- Updates file's Phase History

**GET /api/fs/watch**
- Query params: `since` (timestamp)
- Returns: `{ changed: string[] }` (list of changed file paths)
- Uses file mtime comparison

#### 2.2.2 Kanban Routes (`src/app/api/kanban/`)

**GET /api/kanban/projects**
- Scans `/kanban/` directory for project subdirectories
- Returns: `{ name, acronym, ticketCounts }[]`

**GET /api/kanban/tickets**
- Query params: `project`, `phase` (optional)
- Parses all markdown files in project/phase directories
- Returns: `KanbanTicket[]`
- Caching: Store parsed results in memory for performance

**GET /api/kanban/ticket/[id]**
- Search for ticket ID across all phases
- Returns: `KanbanTicket | null`
- Parses full ticket markdown

**POST /api/kanban/ticket/[id]/phase**
- Body: `{ phase, notes }`
- Moves ticket file to new phase directory
- Updates Phase History in markdown
- Returns: `{ success: true }`

**POST /api/kanban/ticket/[id]/content**
- Body: `{ content }`
- Overwrites ticket markdown content
- Returns: `{ success: true, modifiedAt: string }`

**GET /api/kanban/sessions**
- Query params: `project`
- Reads `sessions/{PROJECT_ACR}-session.json`
- Returns: `SessionRegistry | null`

**GET /api/kanban/stats**
- Query params: `project`
- Calculates: tickets per phase, tasks completion rate
- Returns: `{ total, byPhase, completedTasks, totalTasks }`

#### 2.2.3 Docs Routes (`src/app/api/docs/`)

**GET /api/docs/list**
- Scans all non-kanban directories for markdown files
- Returns: `MarkdownDoc[]` with category info

**GET /api/docs/[...path]**
- Reads markdown file from path
- Returns: `{ content: string, metadata }`

**POST /api/docs/[...path]/write**
- Body: `{ content }`
- Writes markdown file
- Returns: `{ success: true }`

#### 2.2.4 Status Route (`src/app/api/status/`)

**GET /api/status**
- Reads all `status/*.json` files
- Returns: `AgentStatus[]`

---

## Section 3: Store Refactoring

### 3.1 Update Store Structure

Refactor `src/lib/store.ts`:

```typescript
interface FilesystemStore {
  // Projects
  projects: KanbanProject[]
  setProjects: (projects: KanbanProject[]) => void

  // Tickets (indexed by ID for O(1) lookup)
  tickets: Record<string, KanbanTicket>
  setTickets: (tickets: Record<string, KanbanTicket>) => void
  upsertTicket: (ticket: KanbanTicket) => void
  removeTicket: (id: string) => void
  moveTicketPhase: (id: string, phase: KanbanPhase, notes?: string) => Promise<void>

  // Docs
  docs: MarkdownDoc[]
  setDocs: (docs: MarkdownDoc[]) => void
  upsertDoc: (doc: MarkdownDoc) => void

  // Agent Status
  agentStatus: AgentStatus[]
  setAgentStatus: (status: AgentStatus[]) => void

  // File Watcher
  lastPollTime: string
  setLastPollTime: (time: string) => void

  // UI State
  selectedProject: string | null
  selectedPhase: KanbanPhase | 'all'
  setSelectedProject: (project: string | null) => void
  setSelectedPhase: (phase: KanbanPhase | 'all') => void

  // Editor State
  editingPath: string | null
  editingContent: string
  setEditingPath: (path: string | null) => void
  setEditingContent: (content: string) => void
}
```

### 3.2 Remove Supabase Dependencies

- Delete `src/lib/supabase.ts`
- Remove all Supabase realtime subscription code
- Replace with file polling mechanism

---

## Section 4: UI Changes

### 4.1 Navigation Updates

Update `src/components/layout/Sidebar.tsx`:

```typescript
const NAV_ITEMS = [
  { href: '/projects',   label: 'Projects',   icon: <Board     size={18} /> },
  { href: '/drafts',     label: 'Drafts',     icon: <FileText   size={18} /> },
  { href: '/research',   label: 'Research',   icon: <Search    size={18} /> },
  { href: '/status',     label: 'Status',     icon: <Activity   size={18} /> },
  { href: '/architecture', label: 'Architecture', icon: <span>🏗️</span> },
]

// Projects dropdown (expandable)
const projectsNav = useMemo(() => {
  return projects.map(p => ({
    href: `/projects/${p.slug}`,
    label: p.name,
    icon: <span style={{ fontSize: 16 }}>📋</span>
  }))
}, [projects])
```

**Remove:**
- Inbox, Ideas, Tasks, Files, Outreach sections
- Notification badges (replace with file change indicators)

**Add:**
- Projects section (kanban boards)
- Drafts section (all non-kanban markdown docs)
- Research section (grouped by topic)
- Status section (agent status monitors)

### 4.2 New Pages

Create new pages under `src/app/(app)/`:

```
src/app/(app)/
├── projects/
│   ├── page.tsx                # List all projects with summary stats
│   ├── [project]/
│   │   ├── page.tsx            # Kanban board view (drag-drop)
│   │   ├── ticket/
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Ticket detail/editor
│   │   └── phase/
│   │       └── [phase]/
│   │           └── page.tsx    # Filtered phase view
├── drafts/
│   ├── page.tsx                # List all markdown docs
│   └── [path]/
│       └── page.tsx            # Markdown editor
├── research/
│   ├── page.tsx                # Research topics
│   └── [topic]/
│       └── page.tsx            # Topic details
└── status/
    └── page.tsx                # Agent status dashboard
```

### 4.3 Projects Page (`src/app/(app)/projects/page.tsx`)

Features:
- List all kanban projects from `/kanban/`
- Show summary stats per project:
  - Total tickets
  - Tickets per phase (backlog, to-do, in-progress, etc.)
  - Active session indicator
- Click to navigate to project board
- Visual indicators:
  - In-progress tickets count
  - Blocked tickets count
  - Pull requests waiting

### 4.4 Project Kanban Board (`src/app/(app)/projects/[project]/page.tsx`)

Features:
- Columns for phases (as defined in auto-kanban-flow):
  - backlog → to-do → blocked → in-progress → in-review → pull-request → done | cancelled
- Drag-and-drop ticket cards between phases
- Ticket card shows:
  - ID (e.g., DASH-019)
  - Title
  - Priority badge (if metadata includes)
  - Task completion progress bar
  - Symbol indicator (⏳ for blocked, ❌ for error)
  - Last modified time
- Filter by ticket type (bug vs regular)
- Search tickets by title/ID
- Create new ticket button (opens editor)

### 4.5 Ticket Detail/Edit Page (`src/app/(app)/projects/[project]/ticket/[id]/page.tsx`)

Features:
- Full markdown editor for ticket content
- Live preview
- Task checkboxes (update on check/uncheck)
- Phase history table (read-only)
- Attempts table (read-only)
- Move to phase dropdown
- Save button (commits changes to file)
- Keyboard shortcuts: Ctrl+S to save
- Breadcrumb navigation

### 4.6 Drafts Page (`src/app/(app)/drafts/page.tsx`)

Features:
- List all markdown docs from:
  - `/brainstorming/{project}/*.md`
  - `/research/{topic}/*.md`
  - `/code-bugfix/{project}/*.md`
  - Other non-kanban markdown files
- Group by category:
  - Feature Ideas
  - Research Findings
  - Run Reports
  - Status Files
- Search and filter
- Create new doc button

### 4.7 Markdown Editor Component

Create `src/components/editor/MarkdownEditor.tsx`:

Features:
- Textarea for raw markdown
- Live preview panel
- Toolbar with:
  - Bold, Italic, Code, Link
  - Heading levels
  - Lists
  - Checkbox
  - Code block
- Syntax highlighting in preview
- Auto-save (debounced)
- Word/character count
- Last saved indicator

### 4.8 Status Page (`src/app/(app)/status/page.tsx`)

Features:
- List all agent statuses from `/status/*.json`
- Show:
  - Agent name
  - Current state
  - Progress indicator
  - Active task
  - Blockers (if any)
- Auto-refresh every 30 seconds
- Color-coded status indicators

---

## Section 5: File Watcher & Polling

### 5.1 Polling Mechanism

Create `src/lib/fileWatcher.ts`:

```typescript
class FileWatcher {
  private pollInterval: number = 5000  // 5 seconds
  private lastCheckTime: string
  private intervalId: NodeJS.Timeout | null

  async poll(): Promise<ChangedFile[]> {
    // Compare file mtimes with lastCheckTime
    // Return list of changed files
  }

  start(callback: (changes: ChangedFile[]) => void): void {
    this.intervalId = setInterval(() => {
      this.poll().then(callback)
    }, this.pollInterval)
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
}
```

### 5.2 Store Updates on File Changes

In `DataProvider.tsx`, replace Supabase subscriptions:

```typescript
useEffect(() => {
  const watcher = new FileWatcher(SHARED_WORKSPACE_PATH)

  const handleChanges = async (changes: ChangedFile[]) => {
    // Determine change type (ticket, doc, status)
    // Fetch updated data via API
    // Update store accordingly

    for (const change of changes) {
      if (change.path.includes('/kanban/')) {
        await refreshTickets(change.project)
      } else if (change.path.endsWith('.md')) {
        await refreshDocs()
      } else if (change.path.includes('/status/')) {
        await refreshStatus()
      }
    }
  }

  watcher.start(handleChanges)

  return () => watcher.stop()
}, [])
```

---

## Section 6: Markdown Parsing

### 6.1 Ticket Parser

Create `src/lib/parsers/ticketParser.ts`:

```typescript
export function parseTicketMarkdown(
  content: string,
  filePath: string
): KanbanTicket {
  // Parse frontmatter (if any)
  // Extract:
  //   - Title (h1 header)
  //   - Description
  //   - Tasks (checkbox list)
  //   - Acceptance Criteria (checkbox list)
  //   - Questions & Assumptions
  //   - Metadata section
  //   - Phase History table
  //   - Attempts table
  //   - Priority (from metadata or derived)

  // Extract ID from filename: {ACRONYM}-{NUMBER}-{SYMBOL}-{title}.md
  // Determine phase from directory path
}
```

### 6.2 Ticket Serializer

Create `src/lib/serializers/ticketSerializer.ts`:

```typescript
export function serializeTicketToMarkdown(ticket: KanbanTicket): string {
  // Reconstruct markdown from parsed object
  // Maintain original formatting where possible
  // Update phase history entry
}
```

---

## Section 7: File Path Management

### 7.1 Constants

Create `src/lib/paths.ts`:

```typescript
export const SHARED_WORKSPACE = '/home/devcon/.openclaw/shared-workspace'
export const KANBAN_ROOT = `${SHARED_WORKSPACE}/kanban`
export const SESSIONS_DIR = `${KANBAN_ROOT}/sessions`

export const PHASES = [
  'backlog',
  'to-do',
  'blocked',
  'in-progress',
  'in-review',
  'pull-request',
  'done',
  'cancelled'
] as const

export function getProjectPath(project: string): string {
  return `${KANBAN_ROOT}/${project}`
}

export function getPhasePath(project: string, phase: KanbanPhase): string {
  return `${getProjectPath(project)}/${phase}`
}

export function getTicketPath(project: string, phase: KanbanPhase, id: string): string {
  // Need to find the actual filename
}

export function getSessionPath(acronym: string): string {
  return `${SESSIONS_DIR}/${acronym}-session.json`
}
```

### 7.2 Path Security

Create `src/lib/security.ts`:

```typescript
export function validatePath(path: string): boolean {
  const resolved = resolve(path)
  const workspaceRoot = resolve(SHARED_WORKSPACE)

  return resolved.startsWith(workspaceRoot)
}

export function sanitizePath(path: string): string {
  // Remove "..", absolute paths, etc.
  return path.split('/').filter(Boolean).join('/')
}
```

---

## Section 8: Configuration Changes

### 8.1 Environment Variables

Add to `.env.local`:

```bash
# File System
NEXT_PUBLIC_SHARED_WORKSPACE=/home/devcon/.openclaw/shared-workspace
NEXT_PUBLIC_POLL_INTERVAL=5000

# API
NEXT_PUBLIC_API_BASE=http://localhost:3000/api
```

### 8.2 Next.js Config

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // Enable file system access in API routes
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
  // Disable ISR (no longer needed)
  isrMemoryCacheSize: 0,
}
```

---

## Section 9: Migration Steps

### Phase 1: Remove Supabase (Foundation)
1. Delete `src/lib/supabase.ts`
2. Remove `@supabase/supabase-js` from dependencies
3. Remove Supabase references from `package.json`
4. Update `DataProvider.tsx` to remove Supabase subscriptions

### Phase 2: Create File System API
1. Create `src/app/api/fs/` routes
2. Implement path validation and security
3. Test with Postman/curl

### Phase 3: Implement Kanban Parsing
1. Create `src/lib/parsers/ticketParser.ts`
2. Parse ticket markdown format
3. Handle all ticket sections and edge cases

### Phase 4: Create Store Layer
1. Refactor `src/lib/store.ts`
2. Add ticket, doc, status state
3. Implement CRUD operations using API

### Phase 5: Build UI - Projects
1. Create Projects page
2. Implement project listing and stats
3. Add navigation to individual project boards

### Phase 6: Build UI - Kanban Board
1. Create project kanban board page
2. Implement phase columns
3. Add drag-and-drop using @dnd-kit
4. Implement ticket card component

### Phase 7: Build UI - Ticket Editor
1. Create ticket detail page
2. Implement markdown editor with live preview
3. Add save functionality
4. Update phase history on moves

### Phase 8: Build UI - Drafts/Research
1. Create Drafts page
2. Scan and list non-kanban markdown files
3. Implement markdown editor for docs
4. Add category grouping

### Phase 9: Implement File Watcher
1. Create file watcher utility
2. Integrate with store updates
3. Handle file changes gracefully

### Phase 10: Polish & Testing
1. Add error handling and loading states
2. Implement optimistic updates
3. Add keyboard shortcuts
4. Test all CRUD operations
5. Verify file watching works

---

## Section 10: Requirements & Design Decisions

### Technical Requirements (User Provided)

1. **File System Access in Production**
   - API routes only read from filesystem
   - App runs on the same machine as the shared-workspace
   - No separate backend service needed

2. **Authentication & Security**
   - No authentication for API routes
   - No restrictions on shared-workspace directory access (trusted environment)
   - No rate limiting on file write operations

3. **File Watching Performance**
   - 5-second polling interval is optimal
   - Use file system events (inotify/chokidar) instead of polling
   - 5-second grace period for rapid file changes (e.g., during git operations)

4. **Concurrent Access**
   - Hash file contents when starting to edit
   - When saving, if original file hash is no longer valid, inform user of conflict
   - User can decide to overwrite or see differences
   - Yes to file locking for write operations

5. **Large File Handling**
   - Only markdown and text files supported (ignore images, binaries)
   - 5MB maximum file size limit
   - Yes to pagination for large directory listings
   - Yes to pagination for large documents (e.g., every 1000 words)

6. **Git Integration**
   - No git integration at all
   - No git operations (commit, branch)
   - Handle all files regardless of git status

7. **Error Handling**
   - "Choose Root Directory" overlay on app start
   - Default to workspace folder but user can choose another folder
   - Show file system errors in small popups
   - No offline mode (app works on local directory)

8. **Markdown Editor**
   - Pure markdown editing (textarea), then rendered preview when not editing
   - No syntax highlighting for code blocks
   - No file attachments in markdown docs

### UX Requirements (Self-Determined)

9. **Project Discovery**
   - New projects in kanban directory appear automatically on page refresh
   - No "create new project" feature (projects are managed by agents)
   - Projects without tickets still appear with "0 tickets" badge

10. **Ticket Navigation**
   - Board shows all phases by default
   - Optional filter by phase (dropdown or tabs)
   - Blocked tickets highlighted with red indicator
   - "Recent tickets" section in sidebar showing last 10 viewed/edited

11. **Editor Experience**
   - No line numbers in editor (cleaner look)
   - No collaborative editing (single user)
   - Unsaved changes warning when navigating away (native browser dialog)
   - Auto-save indicator ("Saved" or "Saving...")
   - Keyboard shortcuts: Ctrl+S to save, Esc to cancel

12. **Drafts Organization**
   - Group docs by directory structure (brainstorming/, research/, etc.)
   - Yes to search across all docs (search bar at top)
   - Users can create new markdown files via "New Doc" button
   - No new categories/subdirectories (follow existing structure)

13. **Status Monitoring**
   - Yes to alert users when agents have errors (visual indicator)
   - Stale session registries shown with yellow warning icon
   - No "force stop session" button (agents handle themselves)

14. **Notifications**
   - Toast notifications for file changes
   - No browser notifications
   - Changes made by external agents shown in "Recent Changes" panel

### Data Requirements (User Provided)

15. **Ticket ID Parsing**
   - Render all tickets regardless of filename format
   - Don't care if acronym differs from project name (only rendering)
   - Don't extract project acronym automatically (only rendering)

16. **Phase History Tracking**
   - Yes to automatically update phase history when moving tickets between phases
   - When exiting write editor, add new timestamp entry
   - Timestamp format: ISO YYYY-MM-DD_HH:MM:SS

17. **Task & AC Tracking**
   - Yes to mapping checkbox changes back to markdown format
   - Yes to enforce all tasks must be completed before phase transition
   - Task reordering: allow user to reorder via drag handles

18. **Search & Filtering**
   - Search index computed in the app (client-side)
   - Searchable fields: title, description, content
   - Yes to fuzzy search implementation

### Performance Requirements (User Provided)

19. **Caching Strategy**
   - Yes to caching parsed tickets in memory
   - No cache invalidation on file changes (keep in memory)
   - No localStorage caching for offline support

20. **Pagination & Virtualization**
   - Yes to pagination for ticket lists (more than 15 tickets per phase)
   - No limit on maximum tickets, but think about pagination
   - No lazy loading for ticket content

### Deployment Requirements (Implied from above)

21. **Deployment Architecture**
   - App runs locally on the same host as shared-workspace
   - Workspace path configurable via "Choose Root Directory" overlay
   - Workspace path set at runtime via user selection

22. **Environment Management**
   - Support selecting different workspace directories at runtime
   - No different environments (dev/staging/prod) - single local app
   - Workspace path set via user selection (not env var or config file)

23. **Monitoring & Logging**
   - Yes to logging all file system operations (console)
   - Track performance of file watching (timestamp check intervals)
   - Yes to error reporting for file system issues (popup alerts)

# Rich text editor (if choosing over textarea)
npm install @tiptap/react @tiptap/starter-kit
```

---

## Section 12: Testing Strategy

### Unit Tests

- Parser tests for ticket markdown format
- Serializer tests for ticket to markdown conversion
- Path validation tests
- Security tests for path traversal

### Integration Tests

- API route tests for all CRUD operations
- File watcher tests with mock file system
- Store update tests on file changes

### E2E Tests

- Create ticket via UI, save, verify file created
- Move ticket via drag-drop, verify file moved
- Edit ticket, save, verify markdown updated
- Create markdown doc in drafts, verify file written

---

## Section 13: Risk Assessment

### High Risk

1. **File System Race Conditions**
   - Risk: Multiple processes writing to same file
   - Mitigation: File locking, atomic writes

2. **Path Traversal Attacks**
   - Risk: Malicious paths escaping workspace
   - Mitigation: Strict path validation

### Medium Risk

3. **Performance Degradation**
   - Risk: Polling too frequently or scanning too many files
   - Mitigation: Optimize polling interval, implement caching

4. **Data Loss**
   - Risk: File write failures or accidental deletions
   - Mitigation: Backup before writes, confirm destructive actions

### Low Risk

5. **UX Confusion**
   - Risk: Users confused by file-based workflow
   - Mitigation: Clear UI feedback, undo functionality

---

## Section 14: Success Criteria

### Must Have (P0)

- [ ] Can view all kanban projects from shared-workspace
- [ ] Can view tickets by phase for a project
- [ ] Can move tickets between phases
- [ ] Can edit ticket content (markdown)
- [ ] Can view non-kanban markdown docs
- [ ] Can create/edit markdown docs
- [ ] File changes are detected and UI updates automatically
- [ ] All CRUD operations persist to file system

### Should Have (P1)

- [ ] Drag-and-drop ticket movement
- [ ] Task checkbox completion updates markdown
- [ ] Phase history auto-updates on moves
- [ ] Search/filter tickets
- [ ] Agent status monitoring
- [ ] Keyboard shortcuts for editor

### Nice to Have (P2)

- [ ] Git integration (show branch, status)
- [ ] File upload/attachment support
- [ ] Rich text editor
- [ ] Offline mode
- [ ] Export functionality
- [ ] Dark mode for code blocks

---

## Implementation Estimate

| Phase | Tasks | Estimated Time |
|--------|--------|----------------|
| 1: Remove Supabase | 4 tasks | 2 hours |
| 2: Create File System API | 5 tasks | 6 hours |
| 3: Implement Kanban Parsing | 3 tasks | 4 hours |
| 4: Create Store Layer | 4 tasks | 3 hours |
| 5: Build UI - Projects | 3 tasks | 4 hours |
| 6: Build UI - Kanban Board | 5 tasks | 8 hours |
| 7: Build UI - Ticket Editor | 4 tasks | 6 hours |
| 8: Build UI - Drafts/Research | 4 tasks | 5 hours |
| 9: Implement File Watcher | 3 tasks | 3 hours |
| 10: Polish & Testing | 6 tasks | 8 hours |

**Total Estimated Time**: ~49 hours (~6-7 working days)

---

## Appendix A: Directory Structure (Post-Migration)

```
src/
├── app/
│   ├── (app)/
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [project]/
│   │   │       ├── page.tsx
│   │   │       └── ticket/
│   │   │           └── [id]/
│   │   │               └── page.tsx
│   │   ├── drafts/
│   │   │   ├── page.tsx
│   │   │   └── [path]/
│   │   │       └── page.tsx
│   │   ├── research/
│   │   │   ├── page.tsx
│   │   │   └── [topic]/
│   │   │       └── page.tsx
│   │   ├── status/
│   │   │   └── page.tsx
│   │   └── architecture/
│   │       └── page.tsx
│   └── api/
│       ├── fs/
│       │   ├── ls/route.ts
│       │   ├── read/route.ts
│       │   ├── write/route.ts
│       │   ├── move/route.ts
│       │   └── watch/route.ts
│       ├── kanban/
│       │   ├── projects/route.ts
│       │   ├── tickets/route.ts
│       │   ├── ticket/[id]/
│       │   │   ├── route.ts
│       │   │   ├── phase/route.ts
│       │   │   └── content/route.ts
│       │   ├── sessions/route.ts
│       │   └── stats/route.ts
│       ├── docs/
│       │   ├── list/route.ts
│       │   ├── [...path]/route.ts
│       │   └── [...path]/write/route.ts
│       └── status/route.ts
├── components/
│   ├── editor/
│   │   └── MarkdownEditor.tsx
│   ├── kanban/
│   │   ├── Board.tsx
│   │   ├── Column.tsx
│   │   ├── TicketCard.tsx
│   │   └── PhaseHeader.tsx
│   └── ui/ (existing)
├── lib/
│   ├── parsers/
│   │   └── ticketParser.ts
│   ├── serializers/
│   │   └── ticketSerializer.ts
│   ├── fileWatcher.ts
│   ├── paths.ts
│   ├── security.ts
│   ├── store.ts (refactored)
│   ├── types.ts (refactored)
│   ├── utils.ts (keep)
│   └── theme.ts (keep)
└── app/layout.tsx
```

---

## Appendix B: Example API Responses

### GET /api/kanban/projects

```json
[
  {
    "name": "openclaw-kanban-dashboard",
    "slug": "openclaw-kanban-dashboard",
    "acronym": "DASH",
    "ticketCounts": {
      "backlog": 0,
      "to-do": 0,
      "blocked": 0,
      "in-progress": 0,
      "in-review": 0,
      "pull-request": 0,
      "done": 84,
      "cancelled": 17
    },
    "totalTickets": 101,
    "hasActiveSession": false
  }
]
```

### GET /api/kanban/tickets?project=openclaw-kanban-dashboard

```json
[
  {
    "id": "DASH-019",
    "project": "openclaw-kanban-dashboard",
    "acronym": "DASH",
    "number": 19,
    "title": "Dark Mode",
    "description": "Add dark mode toggle for the dashboard...",
    "tasks": [
      { "checked": true, "text": "Add theme toggle button in header" },
      { "checked": true, "text": "Detect system preference via prefers-color-scheme" }
    ],
    "acceptanceCriteria": [
      "Dark mode visually complete (no white flashes)",
      "Theme persists across page reloads"
    ],
    "questions": [],
    "assumptions": [],
    "priority": "low",
    "metadata": { "Priority": "low" },
    "phase": "done",
    "phaseHistory": [
      { "phase": "backlog", "date": "2026-04-20 18:24:00", "notes": "Self-drafted" },
      { "phase": "done", "date": "2026-04-21", "notes": "Merged PR #22" }
    ],
    "attempts": [],
    "symbol": null,
    "filePath": "/home/devcon/.openclaw/shared-workspace/kanban/openclaw-kanban-dashboard/done/DASH-019-dark-mode.md",
    "modifiedAt": "2026-04-21T00:00:00Z"
  }
]
```

---

## Appendix C: Ticket Markdown Format (For Reference)

```markdown
# DASH-019 Dark Mode

## Description
Add dark mode toggle for the dashboard. Respects system preference by default, with manual override.

## Tasks
- [x] Add theme toggle button in header
- [x] Detect system preference via prefers-color-scheme
- [x] Apply dark theme CSS variables
- [x] Persist theme preference in localStorage
- [x] Ensure all components respect theme colors

## Acceptance Criteria
- [x] Dark mode visually complete (no white flashes)
- [x] Theme persists across page reloads
- [x] All UI elements readable in both modes
- [x] Toggle smoothly transitions colors
- [x] System preference detected on first load

## Questions & Assumption Check
- [x] Assume CSS custom properties for theming
- [x] No external library needed for basic dark mode

## Metadata
- Priority: low

## Phase History
| Phase | Date | Notes |
|-------|------|-------|
| backlog | 2026-04-20 18:24:00 | Self-drafted |
| to-do | 2026-04-20 20:54:59 | Auto-filled from backlog |
| in-progress | 2026-04-21 11:15:06 | GO received |
| in-review | 2026-04-21 | |
| pull-request | 2026-04-21 | PR #22 |
| done | 2026-04-21 | Merged PR #22 |

## Attempts
| # | Phase | Question/Block | Attempts | Resolution |
|---|-------|----------------|---------|------------|
```
