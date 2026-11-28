# BentoBoard

BentoBoard is a kanban board with drag and drop, workspace-based project management, and Markdown editing.

## Features

- Drag and drop ticket management with @dnd-kit.
- Workspace and file management with a configurable workspace folder.
- Views for projects, ideas, drafts, tasks, inbox, research, and files.
- Markdown rendering with react-markdown and remark-gfm.
- Client state with Zustand.

## Tech Stack

- Framework: Next.js 16
- Language: TypeScript
- Drag and drop: @dnd-kit/core and @dnd-kit/sortable
- State: Zustand
- Markdown: react-markdown and remark-gfm
- Utilities: date-fns and lucide-react
- Tests: Vitest and @vitest/coverage-v8
- CI: Node.js 22

## Getting Started

### Prerequisites

Install Node.js 22 and npm.

### Installation

```bash
npm install
```

### Configuration

Create `.env.local` in the project root. BentoBoard does not include an example environment file.

```env
BENTOBOARD_WORKSPACE_FOLDER=/path/to/your/workspace
BENTOBOARD_AUTH_USER=your-user
BENTOBOARD_AUTH_PASSWORD=your-password
```

`BENTOBOARD_WORKSPACE_FOLDER` sets the folder that the server reads and writes. Set it to an absolute path that the server can access. When it is unset, BentoBoard uses the Markdown and text files from `content/research`, copied into `.next/bentoboard-content` during the production build. `BENTOBOARD_AUTH_USER` and `BENTOBOARD_AUTH_PASSWORD` set the app credentials.

### Development

Start the development server:

```bash
npm run dev
```

Open http://127.0.0.1:3333 in your browser.

### Production Build

Build and start the production server:

```bash
npm run build
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server on port 3333 |
| `npm run build` | Build the production app |
| `npm start` | Start the production server |
| `npm run stop` | Stop processes listening on ports 3333 and 3000 |
| `npm run restart` | Stop the server, then start the production server |
| `npm run rebuild` | Stop the server, remove `.next`, build, and start |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests once and check coverage thresholds |

## Project Structure

```text
src/
├── app/            # Next.js app router pages and API routes
├── components/     # React components for kanban, layout, and UI
├── lib/            # State, security, parsers, and utilities
└── test/           # Vitest tests
```
