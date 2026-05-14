# BentoBoard

A kanban board application with 3D visualization, drag-and-drop functionality, and workspace-based project management.

## Features

- **3D Kanban Board**: Interactive board visualization using React Three Fiber
- **Drag-and-Drop**: Intuitive ticket management with @dnd-kit
- **Workspace Management**: Organize projects and files within a configurable workspace
- **Multiple Views**: Projects, ideas, drafts, tasks, inbox, research, outreach, and more
- **Markdown Support**: Rich text editing with react-markdown and remark-gfm
- **State Management**: Built with Zustand for reactive UI updates

## Tech Stack

- **Framework**: Next.js 16.2.3
- **Language**: TypeScript
- **3D Rendering**: Three.js, React Three Fiber, React Three Drei
- **Drag-and-Drop**: @dnd-kit/core, @dnd-kit/sortable
- **State**: Zustand
- **Markdown**: react-markdown, remark-gfm
- **Utilities**: date-fns, lucide-react
- **Testing**: Vitest with @vitest/coverage-v8

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn or pnpm or bun

### Installation

```bash
npm install
```

### Configuration

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Set your workspace folder path:

```env
BENTOBOARD_WORKSPACE_FOLDER=/path/to/your/workspace
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://127.0.0.1:3333](http://127.0.0.1:3333) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3333 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage report |

## Project Structure

```
src/
├── app/            # Next.js app router pages and API routes
├── components/    # React components (kanban, layout, ui, editor)
├── lib/           # Core utilities (store, security, parsers, types)
└── test/          # Vitest test files
```

## Architecture

BentoBoard uses a layered architecture:
- **App Layer**: Pages and API routes (Next.js App Router)
- **Components Layer**: UI components organized by feature
- **Library Layer**: Core business logic, state management, and utilities