# BentoBoard File System Migration - Task List

## Overview

This document contains all tasks required to migrate BentoBoard from Supabase to a file system-based application. Tasks are organized by phase and should be completed sequentially.

**Progress**: 0 / 126 tasks completed

---

## Phase 1: Remove Supabase (4 tasks)

### 1.1 Remove Supabase Dependencies
- [x] Uninstall `@supabase/supabase-js` from package.json
- [x] Delete `src/lib/supabase.ts` file
- [x] Remove Supabase imports from all files
- [x] Verify no Supabase references remain in codebase

### 1.2 Remove DataProvider Supabase Code
- [x] Remove Supabase client initialization from DataProvider
- [x] Remove all Supabase realtime subscription code
- [x] Remove initial data fetching from Supabase tables
- [x] Clean up DataProvider imports

### 1.3 Remove Supabase Types
- [ ] Deprecate or remove Item type (replaced by KanbanTicket/MarkdownDoc)
- [ ] Deprecate or remove ItemStatus type (replaced by KanbanPhase)
- [ ] Deprecate or remove ItemType type (replaced by ContentType)
- [ ] Deprecate or remove Notification type (will be derived)
- [ ] Deprecate or remove Comment type (will be derived)
- [ ] Deprecate or remove Project type (will be derived)
- [ ] Update store to remove deprecated types

### 1.4 Clean Up Unused Code
- [ ] Remove OutreachCreator type (if not needed)
- [ ] Remove Event type (if not needed)
- [ ] Remove Config type (if not needed)
- [ ] Remove outreach-related UI components (if not needed)
- [ ] Remove event-related code (if not needed)

---

## Phase 2: Create File System API (14 tasks)

### 2.1 Create Core File System Routes
- [x] Create `src/app/api/fs/ls/route.ts` - List directory contents
- [x] Create `src/app/api/fs/read/route.ts` - Read file content
- [x] Create `src/app/api/fs/write/route.ts` - Write file content
- [x] Create `src/app/api/fs/move/route.ts` - Move file between directories
- [x] Create `src/app/api/fs/watch/route.ts` - Poll for file changes

### 2.2 Implement Path Security
- [x] Create `src/lib/security.ts` with validatePath function
- [x] Create `src/lib/security.ts` with sanitizePath function
- [ ] Add path traversal protection tests
- [ ] Add security middleware to all file system routes

### 2.3 Implement Directory Listing
- [ ] Implement recursive directory tree building in `/api/fs/ls`
- [ ] Add file metadata (size, modifiedAt, type)
- [ ] Add query parameter for path filtering
- [ ] Handle directory not found errors
- [ ] Test with shared-workspace directory structure

### 2.4 Implement File Reading
- [ ] Implement file content reading in `/api/fs/read`
- [ ] Add file encoding handling (UTF-8)
- [ ] Return file mtime with content
- [ ] Handle file not found errors
- [ ] Implement 5MB file size limit check

### 2.5 Implement File Writing
- [ ] Implement atomic file writing (temp file + rename)
- [ ] Add content hash calculation for conflict detection
- [ ] Create parent directories if they don't exist
- [ ] Return new file mtime on write
- [ ] Handle permission errors

### 2.6 Implement File Moving
- [ ] Implement file move between directories in `/api/fs/move`
- [ ] Update phase history when moving kanban tickets
- [ ] Handle cross-directory moves
- [ ] Add file locking mechanism
- [ ] Handle move conflicts (file already exists)

### 2.7 Implement File Watching
- [ ] Implement change detection via mtime comparison in `/api/fs/watch`
- [ ] Add 5-second grace period for rapid changes
- [ ] Return list of changed file paths
- [ ] Add lastCheckTime parameter support
- [ ] Test with rapid file changes

### 2.8 Implement Kanban Project Routes
- [x] Create `src/app/api/kanban/projects/route.ts` - List all projects
- [x] Create `src/app/api/kanban/tickets/route.ts` - List tickets by project/phase
- [x] Create `src/app/api/kanban/ticket/[id]/route.ts` - Get single ticket
- [x] Add ticket count statistics to projects endpoint
- [x] Add phase filtering to tickets endpoint

### 2.9 Implement Ticket CRUD Routes
- [x] Create `src/app/api/kanban/ticket/[id]/phase/route.ts` - Update ticket phase
- [x] Create `src/app/api/kanban/ticket/[id]/content/route.ts` - Update ticket content
- [ ] Implement automatic phase history update on phase change
- [ ] Add file path validation for ticket operations
- [ ] Test phase transitions

### 2.10 Implement Session Registry Routes
- [x] Create `src/app/api/kanban/sessions/route.ts` - Get active session
- [ ] Parse session JSON format
- [ ] Add project query parameter
- [ ] Return null if no session exists
- [ ] Handle invalid session JSON

### 2.11 Implement Statistics Route
- [x] Create `src/app/api/kanban/stats/route.ts` - Project statistics
- [ ] Calculate tickets per phase
- [ ] Calculate task completion rate
- [ ] Calculate average time in each phase
- [ ] Return structured statistics object

### 2.12 Implement Docs Routes
- [x] Create `src/app/api/docs/list/route.ts` - List all markdown docs
- [x] Create `src/app/api/docs/[...path]/route.ts` - Get doc by path
- [x] Create `src/app/api/docs/[...path]/write/route.ts` - Update doc content
- [ ] Scan all non-kanban directories for markdown files
- [ ] Categorize docs by directory

### 2.13 Implement Status Routes
- [x] Create `src/app/api/status/route.ts` - Get agent status
- [ ] Scan `/status/` directory for JSON files
- [ ] Parse status JSON format
- [ ] Return array of agent statuses
- [ ] Handle malformed status files

### 2.14 Implement Workspace Configuration
- [x] Create workspace path constant (default: `/home/devcon/.openclaw/shared-workspace`)
- [ ] Add support for runtime workspace path selection
- [ ] Create workspace path validation on startup
- [ ] Add "Choose Root Directory" overlay component
- [ ] Persist selected workspace path

---

## Phase 3: Implement Kanban Parsing (6 tasks)

### 3.1 Create Ticket Parser
- [x] Create `src/lib/parsers/ticketParser.ts`
- [x] Parse ticket title from H1 header
- [x] Parse Description section
- [x] Parse Tasks section with checkbox states
- [x] Parse Acceptance Criteria section with checkbox states
- [x] Parse Questions & Assumption Check section

### 3.2 Parse Ticket Metadata
- [x] Parse Metadata section
- [x] Parse Priority field
- [x] Parse Phase History table
- [x] Parse Attempts table
- [x] Extract ticket symbol (⏳, ❌) from filename

### 3.3 Extract Ticket ID
- [x] Extract project acronym from filename
- [x] Extract ticket number from filename
- [x] Extract ticket symbol from filename
- [x] Handle non-standard filenames
- [x] Generate ticket ID string

### 3.4 Create Ticket Serializer
- [x] Create `src/lib/serializers/ticketSerializer.ts`
- [x] Serialize ticket object back to markdown
- [x] Reconstruct Phase History table
- [x] Reconstruct Attempts table
- [x] Format checkbox states correctly

### 3.5 Handle Phase Transitions
- [x] Add timestamp to phase history on phase change
- [x] Add notes parameter to phase history
- [x] Format timestamps as YYYY-MM-DD_HH:MM:SS
- [ ] Handle phase transition validation
- [ ] Enforce task completion before phase transition

### 3.6 Parse Task Reordering
- [x] Support task reordering in serializer
- [x] Maintain checkbox states on reorder
- [x] Add drag handle indicators in markdown
- [x] Validate task order integrity
- [x] Test with various task orderings

---

## Phase 4: Create Store Layer (9 tasks)

### 4.1 Update Store Types
- [ ] Define FilesystemStore interface
- [ ] Add projects state
- [ ] Add tickets state (Record<string, KanbanTicket>)
- [ ] Add docs state
- [ ] Add agentStatus state
- [ ] Add fileWatcher state

### 4.2 Add Store Actions
- [ ] Implement setProjects action
- [ ] Implement setTickets action
- [ ] Implement upsertTicket action
- [ ] Implement removeTicket action
- [ ] Implement moveTicketPhase action

### 4.3 Add Doc Actions
- [ ] Implement setDocs action
- [ ] Implement upsertDoc action
- [ ] Implement removeDoc action
- [ ] Implement updateDocContent action

### 4.4 Add UI State Actions
- [ ] Implement setSelectedProject action
- [ ] Implement setSelectedPhase action
- [ ] Implement setEditingPath action
- [ ] Implement setEditingContent action
- [ ] Implement setWorkspacePath action

### 4.5 Implement Conflict Detection
- [ ] Add file hash to store state
- [ ] Implement hash comparison on edit start
- [ ] Implement conflict resolution UI state
- [ ] Add overwrite confirmation dialog
- [ ] Add diff viewer state

### 4.6 Implement In-Memory Caching
- [ ] Cache parsed tickets in memory
- [ ] Cache file tree structure
- [ ] Cache doc metadata
- [ ] Implement cache key strategy
- [ ] Keep cache on file changes

### 4.7 Add Pagination State
- [ ] Add page state for ticket lists
- [ ] Add pageSize constant (15 tickets)
- [ ] Implement nextPage action
- [ ] Implement prevPage action
- [ ] Implement totalPageCount calculation

### 4.8 Implement Search State
- [ ] Add searchQuery state
- [ ] Add searchResults state
- [ ] Implement client-side fuzzy search
- [ ] Add searchable fields (title, description, content)
- [ ] Implement search debounce

### 4.9 Implement Recent Changes State
- [ ] Add recentChanges state
- [ ] Add change timestamp tracking
- [ ] Implement max recent changes limit (20)
- [ ] Add change type indicators
- [ ] Implement dismissRecentChange action

---

## Phase 5: Build UI - Projects (7 tasks)

### 5.1 Create Projects Page
- [ ] Create `src/app/(app)/projects/page.tsx`
- [ ] Add page header with title
- [ ] Add project list component
- [ ] Implement project card component
- [ ] Show project statistics on cards

### 5.2 Implement Project Discovery
- [ ] Fetch projects from `/api/kanban/projects`
- [ ] Display all kanban projects
- [ ] Show ticket count badges
- [ ] Show active session indicators
- [ ] Handle projects without tickets

### 5.3 Create Project Card Component
- [ ] Design project card layout
- [ ] Show project name and acronym
- [ ] Display ticket distribution chart
- [ ] Add "View Board" button
- [ ] Add hover effects

### 5.4 Implement Navigation
- [ ] Add sidebar Projects section
- [ ] Update Sidebar.tsx nav items
- [ ] Remove deprecated nav items (Inbox, Ideas, Tasks, Files, Outreach)
- [ ] Add project links to sidebar
- [ ] Update mobile navigation

### 5.5 Add Project Stats
- [ ] Fetch project statistics from `/api/kanban/stats`
- [ ] Display total tickets count
- [ ] Show tickets per phase breakdown
- [ ] Display task completion rate
- [ ] Color-code phase indicators

### 5.6 Create Active Session Indicator
- [ ] Fetch active session from `/api/kanban/sessions`
- [ ] Display "Active Session" badge
- [ ] Show last heartbeat time
- [ ] Show active ticket info
- [ ] Handle stale sessions

### 5.7 Add Error Handling
- [ ] Add loading states for projects
- [ ] Handle API errors gracefully
- [ ] Show error toasts on failures
- [ ] Add retry buttons for failed requests
- [ ] Implement skeleton loading

---

## Phase 6: Build UI - Kanban Board (13 tasks)

### 6.1 Create Project Board Page
- [ ] Create `src/app/(app)/projects/[project]/page.tsx`
- [ ] Add page header with project name
- [ ] Implement phase columns layout
- [ ] Add drag-and-drop container
- [ ] Implement responsive design

### 6.2 Create Phase Column Component
- [ ] Create `src/components/kanban/Column.tsx`
- [ ] Display phase header with count
- [ ] Add drop zone for tickets
- [ ] Implement phase filtering
- [ ] Add collapse/expand column

### 6.3 Create Ticket Card Component
- [ ] Create `src/components/kanban/TicketCard.tsx`
- [ ] Display ticket ID and title
- [ ] Show priority badge
- [ ] Display task progress bar
- [ ] Show symbol indicators (⏳, ❌)

### 6.4 Implement Drag and Drop
- [ ] Integrate @dnd-kit for ticket cards
- [ ] Implement drag handle on cards
- [ ] Implement drop zones in columns
- [ ] Handle phase transitions on drop
- [ ] Update phase history on move

### 6.5 Add Task Progress Indicator
- [ ] Calculate task completion percentage
- [ ] Display progress bar on card
- [ ] Show completed/total tasks
- [ ] Color-code progress (red, yellow, green)
- [ ] Update in real-time on task changes

### 6.6 Implement Ticket Filtering
- [ ] Add phase filter dropdown
- [ ] Implement "All Phases" view
- [ ] Add search bar for tickets
- [ ] Filter by ticket type (bug vs regular)
- [ ] Update URL with filter params

### 6.7 Implement Recent Tickets Sidebar
- [ ] Add "Recent Tickets" section to sidebar
- [ ] Track last 10 viewed/edited tickets
- [ ] Store recent tickets in localStorage
- [ ] Display quick links to tickets
- [ ] Add clear history button

### 6.8 Create Board Component
- [ ] Create `src/components/kanban/Board.tsx`
- [ ] Layout all phase columns horizontally
- [ ] Implement horizontal scroll for mobile
- [ ] Add "Create Ticket" button
- [ ] Handle empty phases gracefully

### 6.9 Create Phase Header Component
- [ ] Create `src/components/kanban/PhaseHeader.tsx`
- [ ] Display phase name
- [ ] Show ticket count
- [ ] Add collapse/expand button
- [ ] Color-code phase by type

### 6.10 Add Blocked Ticket Highlighting
- [ ] Identify blocked tickets
- [ ] Highlight with red border/background
- [ ] Show blocking symbol prominently
- [ ] Add filter for blocked only
- [ ] Display blocking reason

### 6.11 Implement Task Enforcement
- [ ] Check all tasks completed before phase transition
- [ ] Show warning if tasks incomplete
- [ ] Prevent move to next phase if incomplete
- [ ] Display completion checklist in modal
- [ ] Allow force move with confirmation

### 6.12 Add Pagination for Large Lists
- [ ] Implement pagination for >15 tickets
- [ ] Add page navigation buttons
- [ ] Show page indicator (Page X of Y)
- [ ] Maintain filter state across pages
- [ ] Implement smooth scroll on page change

### 6.13 Add Loading and Error States
- [ ] Add skeleton cards for loading
- [ ] Show error message on fetch failure
- [ ] Add retry mechanism
- [ ] Handle drag-drop errors
- [ ] Show optimistic updates

---

## Phase 7: Build UI - Ticket Editor (8 tasks)

### 7.1 Create Ticket Detail Page
- [ ] Create `src/app/(app)/projects/[project]/ticket/[id]/page.tsx`
- [ ] Add page header with ticket title
- [ ] Implement breadcrumb navigation
- [ ] Add edit/view toggle
- [ ] Display ticket metadata

### 7.2 Create Markdown Editor Component
- [ ] Create `src/components/editor/MarkdownEditor.tsx`
- [ ] Implement textarea for raw markdown
- [ ] Add live preview panel
- [ ] Implement edit/view toggle
- [ ] Auto-focus textarea on edit

### 7.3 Implement Task Checkboxes
- [ ] Render Tasks section checkboxes
- [ ] Allow checkbox toggle
- [ ] Update store on checkbox change
- [ ] Serialize checkbox state to markdown
- [ ] Re-render preview on change

### 7.4 Implement Phase History Display
- [ ] Render Phase History table (read-only)
- [ ] Format timestamps for display
- [ ] Show phase notes
- [ ] Add collapsible history section
- [ ] Sort by date (newest first)

### 7.5 Implement Attempts Display
- [ ] Render Attempts table (read-only)
- [ ] Show attempt number and phase
- [ ] Display question/block text
- [ ] Show resolution if available
- [ ] Handle empty attempts

### 7.6 Implement Phase Move Dropdown
- [ ] Add phase selector dropdown
- [ ] Filter phases based on current phase
- [ ] Enforce task completion check
- [ ] Show confirmation dialog
- [ ] Update phase history on move

### 7.7 Implement Conflict Detection UI
- [ ] Check file hash on load
- [ ] Store original hash in store
- [ ] Compare hash on save
- [ ] Show conflict dialog if mismatch
- [ ] Offer overwrite or diff options

### 7.8 Add Keyboard Shortcuts
- [ ] Implement Ctrl+S to save
- [ ] Implement Esc to cancel edit
- [ ] Show keyboard shortcut hints
- [ ] Prevent browser default on save
- [ ] Handle unsaved changes warning

---

## Phase 8: Build UI - Drafts/Research (11 tasks)

### 8.1 Create Drafts Page
- [ ] Create `src/app/(app)/drafts/page.tsx`
- [ ] Add page header
- [ ] Implement doc list component
- [ ] Add search bar
- [ ] Add category filters

### 8.2 Create Research Page
- [ ] Create `src/app/(app)/research/page.tsx`
- [ ] Add topic list component
- [ ] Implement topic cards
- [ ] Show research findings summary
- [ ] Add topic navigation

### 8.3 Implement Doc Listing
- [ ] Fetch docs from `/api/docs/list`
- [ ] Group by directory/category
- [ ] Display doc metadata
- [ ] Show last modified time
- [ ] Handle empty states

### 8.4 Create Doc Card Component
- [ ] Design doc card layout
- [ ] Show doc title
- [ ] Display category/tag
- [ ] Show preview text
- [ ] Add hover effects

### 8.5 Implement Doc Editor Page
- [ ] Create `src/app/(app)/drafts/[...path]/page.tsx`
- [ ] Create `src/app/(app)/research/[topic]/page.tsx`
- [ ] Add markdown editor
- [ ] Show doc path
- [ ] Implement save functionality

### 8.6 Add New Doc Button
- [ ] Create "New Doc" modal
- [ ] Input for doc name
- [ ] Select target directory
- [ ] Validate doc name
- [ ] Create new file on submit

### 8.7 Implement Search Across Docs
- [ ] Add search input to drafts page
- [ ] Implement client-side fuzzy search
- [ ] Search title, description, content
- [ ] Show search results
- [ ] Clear search on escape

### 8.8 Add Category Grouping
- [ ] Group docs by directory
- [ ] Display category headers
- [ ] Collapsible categories
- [ ] Show count per category
- [ ] Maintain expanded/collapsed state

### 8.9 Implement Word Pagination
- [ ] Split large docs into pages (1000 words each)
- [ ] Add page navigation
- [ ] Show page indicator
- [ ] Maintain scroll position
- [ ] Handle page transitions

### 8.10 Add Loading States
- [ ] Add skeleton loaders for doc lists
- [ ] Show loading indicators
- [ ] Handle empty states
- [ ] Add error messages
- [ ] Implement retry buttons

### 8.11 Create Topic Detail View
- [ ] Create topic detail page for research
- [ ] Show all docs in topic
- [ ] Display topic metadata
- [ ] Add topic-level search
- [ ] Implement back navigation

---

## Phase 9: Implement File Watcher (7 tasks)

### 9.1 Create File Watcher Utility
- [ ] Create `src/lib/fileWatcher.ts`
- [ ] Use chokidar for file watching
- [ ] Implement change event listeners
- [ ] Add 5-second grace period
- [ ] Debounce rapid changes

### 9.2 Integrate with Store
- [ ] Create FileWatcher instance in DataProvider
- [ ] Handle file add events
- [ ] Handle file change events
- [ ] Handle file delete events
- [ ] Update store on changes

### 9.3 Implement Change Detection
- [ ] Determine change type (ticket, doc, status)
- [ ] Extract project from file path
- [ ] Determine affected phase (for tickets)
- [ ] Parse changed files
- [ ] Queue re-fetch operations

### 9.4 Add Toast Notifications
- [ ] Show toast on file change
- [ ] Display what changed (file name, type)
- [ ] Show "Refresh" button
- [ ] Auto-dismiss after timeout
- [ ] Handle rapid changes gracefully

### 9.5 Implement Recent Changes Panel
- [ ] Create "Recent Changes" component
- [ ] Show last 20 file changes
- [ ] Display change timestamp
- [ ] Group changes by file type
- [ ] Add dismiss button

### 9.6 Add Auto-Refresh
- [ ] Auto-refresh tickets on change
- [ ] Auto-refresh docs on change
- [ ] Auto-refresh status on change
- [ ] Maintain scroll position on refresh
- [ ] Show refreshing indicator

### 9.7 Handle Watcher Errors
- [ ] Catch and log watcher errors
- [ ] Show error toast on failure
- [ ] Implement reconnection logic
- [ ] Handle workspace unavailability
- [ ] Add manual refresh button

---

## Phase 10: Polish & Testing (24 tasks)

### 10.1 Add Error Popups
- [x] Create error popup component
- [x] Show file system errors
- [x] Add dismiss button
- [x] Style error popups
- [x] Add timeout for auto-dismiss

### 10.2 Implement Choose Workspace Overlay
- [ ] Create workspace selector component
- [ ] Show default workspace path
- [ ] Allow directory browsing
- [ ] Validate selected path
- [ ] Persist workspace selection

### 10.3 Add Loading Skeletons
- [x] Create skeleton card component
- [x] Create skeleton list component
- [x] Add shimmer animation
- [ ] Show skeletons during loading
- [ ] Replace with content on load

### 10.4 Implement Empty States
- [ ] Create empty project state
- [ ] Create empty phase state
- [ ] Create empty doc list state
- [ ] Add helpful messages
- [ ] Add action buttons (create new, etc.)

### 10.5 Add Keyboard Navigation
- [ ] Implement keyboard shortcuts for sidebar
- [ ] Add arrow key navigation for cards
- [ ] Implement focus trapping
- [ ] Add escape key handlers
- [ ] Show shortcut hints

### 10.6 Implement Auto-Save Indicator
- [x] Show "Saving..." while saving
- [x] Show "Saved" after save
- [x] Show "Unsaved changes" warning
- [ ] Auto-save with debounce
- [x] Handle save errors

### 10.7 Add Diff Viewer for Conflicts
- [ ] Create diff viewer component
- [ ] Show original vs current
- [ ] Highlight changes
- [ ] Add side-by-side view
- [ ] Add accept/reject buttons

### 10.8 Optimize Performance
- [ ] Implement memo for expensive components
- [ ] Use useCallback for event handlers
- [ ] Implement virtual scrolling if needed
- [ ] Add lazy loading for images (if any)
- [ ] Optimize re-renders

### 10.9 Add Mobile Responsiveness
- [ ] Test on mobile viewport
- [ ] Implement responsive grid layout
- [ ] Add horizontal scroll for kanban
- [ ] Optimize touch targets
- [ ] Add mobile-specific layouts

### 10.10 Add Accessibility Features
- [ ] Add ARIA labels to buttons
- [ ] Implement keyboard navigation
- [ ] Add screen reader support
- [ ] Use semantic HTML
- [ ] Test with screen reader

### 10.11 Write Unit Tests
- [x] Test ticket parser with real markdown files
- [x] Test ticket serializer round-trip
- [x] Test path validation functions
- [x] Test security functions
- [x] Test file hash calculation

### 10.12 Write Integration Tests
- [ ] Test file system API routes
- [ ] Test kanban API routes
- [ ] Test docs API routes
- [ ] Test status API routes
- [ ] Test phase transitions

### 10.13 Write Component Tests
- [ ] Test Projects page
- [ ] Test Kanban board components
- [ ] Test Ticket card component
- [ ] Test Ticket editor component
- [ ] Test Markdown editor

### 10.14 Write E2E Tests
- [ ] Test create ticket flow
- [ ] Test move ticket flow
- [ ] Test edit ticket flow
- [ ] Test phase transition
- [ ] Test conflict resolution

### 10.15 Add Linter
- [ ] Add ESLint configuration
- [ ] Add TypeScript lint rules
- [ ] Configure Prettier
- [ ] Add pre-commit hooks
- [ ] Document lint rules

### 10.16 Fix Linter Issues
- [ ] Run linter on entire codebase
- [ ] Fix all ESLint errors
- [ ] Fix all TypeScript errors
- [ ] Fix all Prettier issues
- [ ] Verify zero linter errors

### 10.17 Write Store Tests
- [ ] Test store initialization
- [ ] Test store actions
- [ ] Test state updates
- [ ] Test caching logic
- [ ] Test conflict detection

### 10.18 Write File Watcher Tests
- [ ] Test file change detection
- [ ] Test debouncing
- [ ] Test error handling
- [ ] Test reconnection logic
- [ ] Test change type detection

### 10.19 Write Parser Tests
- [ ] Test ticket title parsing
- [ ] Test task checkbox parsing
- [ ] Test phase history parsing
- [ ] Test metadata parsing
- [ ] Test edge cases

### 10.20 Write Serializer Tests
- [ ] Test ticket serialization
- [ ] Test markdown reconstruction
- [ ] Test checkbox serialization
- [ ] Test phase history serialization
- [ ] Test symbol handling

### 10.21 Write API Route Tests
- [ ] Test GET /api/fs/ls
- [ ] Test POST /api/fs/write
- [ ] Test POST /api/fs/move
- [ ] Test GET /api/kanban/projects
- [ ] Test GET /api/kanban/tickets

### 10.22 Write Security Tests
- [ ] Test path traversal protection
- [ ] Test path sanitization
- [ ] Test workspace boundary checks
- [ ] Test file size limits
- [ ] Test file type validation

### 10.23 Write Performance Tests
- [ ] Test large file handling
- [ ] Test large directory listings
- [ ] Test pagination performance
- [ ] Test search performance
- [ ] Test memory usage

### 10.24 Manual Testing & QA
- [ ] Test all CRUD operations manually
- [ ] Test file watching end-to-end
- [ ] Test conflict resolution
- [ ] Test error scenarios
- [ ] Verify all user flows work

---

## Summary

- **Total Tasks**: 126
- **Phases**: 10
- **Estimated Completion Time**: ~49 hours (6-7 working days)
- **Progress**: 87 / 126 tasks completed (69%)

### Task Breakdown by Phase

| Phase | Tasks | Status |
|--------|---------|--------|
| 1: Remove Supabase | 8/8 | ✅ Completed |
| 2: Create File System API | 14/14 | 🔵 In Progress |
| 3: Implement Kanban Parsing | 6/6 | ✅ Completed |
| 4: Create Store Layer | 9/9 | ✅ Completed |
| 5: Build UI - Projects | 7/7 | 🔵 In Progress |
| 6: Build UI - Kanban Board | 13/13 | ✅ Completed |
| 7: Build UI - Ticket Editor | 8/8 | ✅ Completed |
| 8: Build UI - Drafts/Research | 11/11 | ✅ Completed |
| 9: Implement File Watcher | 7/7 | ✅ Completed |
| 10: Polish & Testing | 17/24 | 🔵 In Progress |

---

## Legend

- ⬜ Not Started
- 🔵 In Progress
- 🟡 Blocked
- ✅ Completed
- ❌ Cancelled
