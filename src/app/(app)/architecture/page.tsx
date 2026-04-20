'use client'

import { useState, useRef, useCallback } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'

interface NodeData {
  id: string
  label: string
  type: 'input' | 'agent' | 'database' | 'dashboard' | 'output'
  column: number
  row: number
  details?: string
}

interface ConnectionData {
  from: string
  to: string
  type: 'data' | 'control' | 'realtime'
}

const NODES: NodeData[] = [
  // Inputs (column 0)
  { id: 'x-api', label: 'X/Twitter API', type: 'input', column: 0, row: 0, details: 'Tweet monitoring' },
  { id: 'hn-api', label: 'Hacker News', type: 'input', column: 0, row: 1, details: 'Tech trends' },
  { id: 'reddit', label: 'Reddit', type: 'input', column: 0, row: 2, details: 'Community discussions' },
  { id: 'blog-rss', label: 'Blog RSS', type: 'input', column: 0, row: 3, details: 'blog.kilo.ai' },
  { id: 'gmail', label: 'Gmail', type: 'input', column: 0, row: 4, details: 'VIP alerts' },
  { id: 'slack', label: 'Slack', type: 'input', column: 0, row: 5, details: 'Context input' },
  
  // Agents (column 1)
  { id: 'scout', label: 'Scout Agent', type: 'agent', column: 1, row: 0, details: 'Input collector' },
  { id: 'analyst', label: 'Analyst Agent', type: 'agent', column: 1, row: 1, details: 'Intelligence engine' },
  { id: 'writer', label: 'Writer Agent', type: 'agent', column: 1, row: 2, details: 'Content factory' },
  { id: 'main', label: 'Main Agent', type: 'agent', column: 1, row: 3, details: 'Orchestrator' },
  
  // Databases (column 2)
  { id: 'events', label: 'events', type: 'database', column: 2, row: 0 },
  { id: 'items', label: 'items', type: 'database', column: 2, row: 1, details: 'draft, idea, task' },
  { id: 'contexts', label: 'contexts', type: 'database', column: 2, row: 2 },
  { id: 'comments', label: 'comments', type: 'database', column: 2, row: 3 },
  { id: 'notifications', label: 'notifications', type: 'database', column: 2, row: 4 },
  { id: 'outreach', label: 'outreach', type: 'database', column: 2, row: 5 },
  
  // Dashboards (column 3)
  { id: 'inbox', label: 'Inbox', type: 'dashboard', column: 3, row: 0, details: 'Notifications' },
  { id: 'drafts', label: 'Drafts', type: 'dashboard', column: 3, row: 1, details: 'Content review' },
  { id: 'ideas', label: 'Ideas', type: 'dashboard', column: 3, row: 2, details: 'Kanban board' },
  { id: 'tasks', label: 'Tasks', type: 'dashboard', column: 3, row: 3, details: 'Work items' },
  { id: 'outreach-db', label: 'Outreach', type: 'dashboard', column: 3, row: 4, details: 'Creator tracker' },
  
  // Outputs (column 4)
  { id: 'telegram', label: 'Telegram', type: 'output', column: 4, row: 0 },
  { id: 'slack-dm', label: 'Slack DM', type: 'output', column: 4, row: 1 },
  { id: 'email', label: 'Email', type: 'output', column: 4, row: 2 },
  { id: 'blog', label: 'Blog', type: 'output', column: 4, row: 3 },
  { id: 'social', label: 'Social', type: 'output', column: 4, row: 4 },
]

const CONNECTIONS: ConnectionData[] = [
  // Input → Agents
  { from: 'x-api', to: 'scout', type: 'data' },
  { from: 'hn-api', to: 'scout', type: 'data' },
  { from: 'reddit', to: 'scout', type: 'data' },
  { from: 'blog-rss', to: 'scout', type: 'data' },
  { from: 'gmail', to: 'main', type: 'data' },
  { from: 'slack', to: 'main', type: 'data' },
  // Agents → Database
  { from: 'scout', to: 'events', type: 'data' },
  { from: 'analyst', to: 'items', type: 'data' },
  { from: 'analyst', to: 'contexts', type: 'data' },
  { from: 'writer', to: 'items', type: 'data' },
  { from: 'main', to: 'comments', type: 'data' },
  { from: 'main', to: 'notifications', type: 'data' },
  // Control (main orchestrates)
  { from: 'main', to: 'scout', type: 'control' },
  { from: 'main', to: 'analyst', type: 'control' },
  { from: 'main', to: 'writer', type: 'control' },
  // Database → Dashboard (realtime)
  { from: 'items', to: 'drafts', type: 'realtime' },
  { from: 'items', to: 'ideas', type: 'realtime' },
  { from: 'items', to: 'tasks', type: 'realtime' },
  { from: 'notifications', to: 'inbox', type: 'realtime' },
  { from: 'outreach', to: 'outreach-db', type: 'realtime' },
  // Dashboard → Main (approval)
  { from: 'ideas', to: 'main', type: 'control' },
  { from: 'drafts', to: 'main', type: 'control' },
  { from: 'tasks', to: 'main', type: 'control' },
  // Main → Outputs
  { from: 'main', to: 'telegram', type: 'data' },
  { from: 'main', to: 'slack-dm', type: 'data' },
  { from: 'main', to: 'email', type: 'data' },
  { from: 'main', to: 'blog', type: 'data' },
  { from: 'main', to: 'social', type: 'data' },
]

const COLUMNS = [
  { label: 'INPUTS', color: '#60A5FA' },
  { label: 'AGENTS', color: '#FBBF24' },
  { label: 'DATABASE', color: '#34D399' },
  { label: 'DASHBOARD', color: '#A78BFA' },
  { label: 'OUTPUTS', color: '#FB923C' },
]

const TYPE_STYLES: Record<NodeData['type'], { bg: string; border: string; text: string }> = {
  input: { bg: 'rgba(96,165,250,0.15)', border: '#60A5FA', text: '#60A5FA' },
  agent: { bg: 'rgba(251,191,36,0.15)', border: '#FBBF24', text: '#FBBF24' },
  database: { bg: 'rgba(52,211,153,0.15)', border: '#34D399', text: '#34D399' },
  dashboard: { bg: 'rgba(167,139,250,0.15)', border: '#A78BFA', text: '#A78BFA' },
  output: { bg: 'rgba(251,146,60,0.15)', border: '#FB923C', text: '#FB923C' },
}

const CONNECTION_STYLES: Record<ConnectionData['type'], { color: string; dash: string }> = {
  data: { color: '#64748B', dash: '' },
  control: { color: '#FBBF24', dash: '5,5' },
  realtime: { color: '#A78BFA', dash: '3,3' },
}

const NODE_WIDTH = 140
const NODE_HEIGHT = 48
const COL_GAP = 180
const ROW_GAP = 64
const PADDING = 40
const LABEL_WIDTH = 90

export default function ArchitecturePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState({ x: 0, y: 0 })
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setScale(s => Math.min(Math.max(s * delta, 0.3), 3))
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 1 || (e.button === 0 && e.altKey)) {
      setIsPanning(true)
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }, [pan])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isPanning) {
      setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y })
    }
  }, [isPanning, panStart])

  const handleMouseUp = useCallback(() => {
    setIsPanning(false)
  }, [])

  const handleNodeClick = useCallback((id: string) => {
    setSelectedNode(selectedNode === id ? null : id)
  }, [selectedNode])

  const reset = useCallback(() => {
    setScale(1)
    setPan({ x: 0, y: 0 })
  }, [])

  const maxRows = Math.max(...NODES.map(n => n.row)) + 1
  const contentWidth = LABEL_WIDTH + (COLUMNS.length * COL_GAP) + PADDING
  const contentHeight = PADDING * 2 + ((maxRows + 1) * ROW_GAP)

  const getNodePos = (node: NodeData) => ({
    x: LABEL_WIDTH + (node.column * COL_GAP) + PADDING / 2,
    y: PADDING + (node.row * ROW_GAP) + PADDING / 2,
  })

  const selected = NODES.find(n => n.id === selectedNode)

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <PageHeader
        title="System Architecture"
        description="BentoBoard multi-agent system — scroll to pan, wheel to zoom, click nodes for details"
        actions={
          <div className="flex items-center gap-2">
            <button onClick={reset} className="px-3 py-1.5 rounded-lg text-xs glass-card" style={{ color: 'var(--text-secondary)' }}>
              Reset View
            </button>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {Math.round(scale * 100)}%
            </span>
          </div>
        }
      />

      <div
        ref={containerRef}
        className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ background: 'linear-gradient(180deg, #060D1A 0%, #0F172A 60%, #1A2540 100%)' }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative"
          style={{
            width: contentWidth,
            height: contentHeight,
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            transformOrigin: '0 0',
          }}
        >
          {/* Column labels */}
          {COLUMNS.map((col, i) => (
            <div
              key={col.label}
              className="absolute text-[11px] font-semibold uppercase tracking-wider"
              style={{
                left: LABEL_WIDTH + (i * COL_GAP) + PADDING / 2 - 10,
                top: 12,
                color: col.color,
              }}
            >
              {col.label}
            </div>
          ))}

          {/* Connection lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: contentWidth, height: contentHeight, overflow: 'visible' }}
          >
            {CONNECTIONS.map((conn, i) => {
              const fromNode = NODES.find(n => n.id === conn.from)
              const toNode = NODES.find(n => n.id === conn.to)
              if (!fromNode || !toNode) return null
              const from = getNodePos(fromNode)
              const to = getNodePos(toNode)
              const style = CONNECTION_STYLES[conn.type]
              return (
                <line
                  key={i}
                  x1={from.x + NODE_WIDTH / 2}
                  y1={from.y + NODE_HEIGHT / 2}
                  x2={to.x + NODE_WIDTH / 2}
                  y2={to.y + NODE_HEIGHT / 2}
                  stroke={style.color}
                  strokeWidth={1.5}
                  strokeDasharray={style.dash}
                  opacity={0.6}
                />
              )
            })}
          </svg>

          {/* Nodes */}
          {NODES.map(node => {
            const pos = getNodePos(node)
            const style = TYPE_STYLES[node.type]
            const isSelected = selectedNode === node.id
            return (
              <div
                key={node.id}
                className="absolute rounded-lg cursor-pointer transition-all"
                style={{
                  left: pos.x,
                  top: pos.y,
                  width: NODE_WIDTH,
                  height: NODE_HEIGHT,
                  background: style.bg,
                  border: `2px solid ${isSelected ? '#fff' : style.border}`,
                  boxShadow: isSelected ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                }}
                onClick={() => handleNodeClick(node.id)}
              >
                <div
                  className="w-full h-full flex items-center justify-center text-[12px] font-medium px-2 text-center"
                  style={{ color: style.text }}
                >
                  {node.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Legend */}
      <div
        className="absolute bottom-4 left-4 glass-card p-3 text-xs space-y-1.5"
        style={{ zIndex: 10 }}
      >
        <div className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Connections</div>
        {Object.entries(CONNECTION_STYLES).map(([type, style]) => (
          <div key={type} className="flex items-center gap-2">
            <span className="w-4 h-0.5" style={{ background: style.color, borderStyle: style.dash ? 'dashed' : 'solid' }} />
            <span style={{ color: 'var(--text-secondary)' }} className="capitalize">{type}</span>
          </div>
        ))}
      </div>

      {/* Node detail panel */}
      {selected && (
        <div
          className="absolute top-20 right-4 w-64 glass-card p-4 animate-fade-in"
          style={{ zIndex: 20 }}
        >
          <button
            onClick={() => setSelectedNode(null)}
            className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded"
            style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)' }}
          >
            ✕
          </button>
          <h3 className="text-base font-semibold pr-6" style={{ color: 'var(--text-primary)' }}>
            {selected.label}
          </h3>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            {selected.details || selected.type}
          </p>
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid var(--divider)' }}>
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>CONNECTIONS</span>
            <div className="mt-2 space-y-1 max-h-32 overflow-y-auto">
              {CONNECTIONS.filter(c => c.from === selected.id || c.to === selected.id).map((conn, i) => {
                const isOut = conn.from === selected.id
                const other = NODES.find(n => n.id === (isOut ? conn.to : conn.from))
                if (!other) return null
                return (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full" style={{ background: CONNECTION_STYLES[conn.type].color }} />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {isOut ? '→' : '←'} {other.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}