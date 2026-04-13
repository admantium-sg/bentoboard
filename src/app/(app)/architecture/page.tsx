'use client'

import { useRef, useState, useMemo, useCallback, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Float, Line, Sphere, Box, Cylinder, Html, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// ── Types ────────────────────────────────────────────────────────────────────────

type NodeType = 'input' | 'agent' | 'database' | 'dashboard' | 'output'
type ConnectionType = 'input' | 'database' | 'orchestration' | 'realtime' | 'approval' | 'output' | 'learning'

interface NodeData {
  id: string
  label: string
  type: NodeType
  position: [number, number, number]
  details?: string
  icon?: string
  schedule?: string
  model?: string
  readsFrom?: string[]
  writesTo?: string[]
}

interface ConnectionData {
  from: string
  to: string
  type: ConnectionType
  label?: string
}

// ── Node definitions ──────────────────────────────────────────────────────────
// Spread across X (pipeline flow left→right), Y (vertical height), Z (depth)

const INPUT_NODES: NodeData[] = [
  { id: 'x-api',          label: 'X/Twitter API',  type: 'input', position: [-18,  5,  -4], details: 'Tweet monitoring, engagement metrics', icon: '𝕏' },
  { id: 'hn-api',         label: 'Hacker News',    type: 'input', position: [-18,  3,   2], details: 'Tech trends, startup mentions', icon: '▲' },
  { id: 'reddit',         label: 'Reddit JSON',    type: 'input', position: [-18,  1,  -6], details: 'Community discussions', icon: '⬡' },
  { id: 'blog-rss',       label: 'Blog RSS',       type: 'input', position: [-18, -1,   4], details: 'blog.kilo.ai/feed', icon: '📰' },
  { id: 'google-trends',  label: 'Google Trends',  type: 'input', position: [-18, -3,  -2], details: 'Search interest data', icon: '📊' },
  { id: 'ai-visibility',  label: 'AI Visibility',  type: 'input', position: [-18, -5,   6], details: 'BotSee, AEO monitoring', icon: '🔍' },
  { id: 'gmail',          label: 'Gmail',          type: 'input', position: [-14,  4,   5], details: 'brian.turcotte.bot@kilocode.ai', icon: '📧', schedule: 'Every 30 min' },
  { id: 'slack',          label: 'Slack #devrel',  type: 'input', position: [-14,  2,  -5], details: 'Context input, read-only', icon: '💬', schedule: 'Every 3 hrs weekdays' },
  { id: 'youtube',        label: 'YouTube',        type: 'input', position: [-14, -2,   3], details: '@Kilo-Code channel', icon: '▶️' },
  { id: 'github',         label: 'GitHub',         type: 'input', position: [-14, -4,  -3], details: 'Kilo-Org repos', icon: '⌘' },
]

const AGENT_NODES: NodeData[] = [
  {
    id: 'scout',
    label: 'Scout Agent',
    type: 'agent',
    position: [-6, 4, -4],
    details: 'Input collector',
    model: 'balanced/cheap',
    schedule: 'Every 60 min',
    readsFrom: ['X API', 'HN API', 'Reddit', 'Blog RSS', 'Google Trends', 'AI Visibility'],
    writesTo: ['events table'],
  },
  {
    id: 'analyst',
    label: 'Analyst Agent',
    type: 'agent',
    position: [-6, 0, 4],
    details: 'Intelligence engine',
    model: 'mid-tier',
    schedule: 'Every 2 hours',
    readsFrom: ['events table'],
    writesTo: ['contexts table', 'items table (proposals)'],
  },
  {
    id: 'writer',
    label: 'Writer Agent',
    type: 'agent',
    position: [-6, -5, -2],
    details: 'Content factory',
    model: 'frontier',
    schedule: 'on-demand',
    readsFrom: ['action briefs from main'],
    writesTo: ['items table (drafts)', 'storage (HTML files)'],
  },
  {
    id: 'main',
    label: 'Main Agent / Bento',
    type: 'agent',
    position: [0, 2, 0],
    details: 'Orchestrator',
    model: 'frontier',
    schedule: 'always running',
    readsFrom: ['everything'],
    writesTo: ['everything'],
  },
]

const DATABASE_NODES: NodeData[] = [
  { id: 'events',        label: 'events',        type: 'database', position: [6,   5,  -5], details: 'Raw data from Scout' },
  { id: 'contexts',      label: 'contexts',      type: 'database', position: [6,   3,   3], details: 'Analyst insights' },
  { id: 'items',         label: 'items',         type: 'database', position: [6,   1,  -2], details: 'draft, idea, file, task' },
  { id: 'comments',      label: 'comments',      type: 'database', position: [6,  -1,   5], details: 'Brian + Bento convos' },
  { id: 'notifications', label: 'notifications', type: 'database', position: [6,  -3,  -4], details: 'Alerts for Brian' },
  { id: 'outreach',      label: 'outreach',      type: 'database', position: [6,  -5,   2], details: 'Creator pipeline' },
  { id: 'preferences',   label: 'preferences',   type: 'database', position: [10,  4,   0], details: 'Learning from approvals' },
  { id: 'config',        label: 'config',        type: 'database', position: [10,  0,  -4], details: 'Settings' },
  { id: 'storage',       label: 'storage',       type: 'database', position: [10, -4,   4], details: 'files/ bucket' },
]

const DASHBOARD_NODES: NodeData[] = [
  { id: 'inbox',      label: 'Inbox',    type: 'dashboard', position: [16,  5,  -3], details: 'Notifications' },
  { id: 'drafts',     label: 'Drafts',   type: 'dashboard', position: [16,  3,   3], details: 'Content review' },
  { id: 'ideas',      label: 'Ideas',    type: 'dashboard', position: [16,  1,  -5], details: 'Kanban board' },
  { id: 'tasks',      label: 'Tasks',    type: 'dashboard', position: [16, -1,   5], details: 'Work items' },
  { id: 'files',      label: 'Files',    type: 'dashboard', position: [16, -3,  -1], details: 'Shared docs' },
  { id: 'outreach-db',label: 'Outreach', type: 'dashboard', position: [16, -5,   1], details: 'Creator tracker' },
  { id: 'settings',   label: 'Settings', type: 'dashboard', position: [20,  0,   0], details: 'Preferences' },
]

const OUTPUT_NODES: NodeData[] = [
  { id: 'telegram',   label: 'Telegram',   type: 'output', position: [26,  5,  -3], details: 'Brian DMs' },
  { id: 'slack-dm',   label: 'Slack DM',   type: 'output', position: [26,  3,   3], details: 'Brian only' },
  { id: 'email',      label: 'Email',      type: 'output', position: [26,  1,  -4], details: 'via gog CLI' },
  { id: 'blog',       label: 'Blog',       type: 'output', position: [26, -1,   4], details: 'Publishing' },
  { id: 'social',     label: 'Social',     type: 'output', position: [26, -3,  -2], details: 'X, LinkedIn, Bluesky' },
  { id: 'newsletter', label: 'Newsletter', type: 'output', position: [26, -5,   2], details: 'HTML email' },
]

const ALL_NODES = [...INPUT_NODES, ...AGENT_NODES, ...DATABASE_NODES, ...DASHBOARD_NODES, ...OUTPUT_NODES]

// ── Connections ────────────────────────────────────────────────────────────────

const CONNECTIONS: ConnectionData[] = [
  // Input → Scout
  { from: 'x-api',         to: 'scout',  type: 'input' },
  { from: 'hn-api',        to: 'scout',  type: 'input' },
  { from: 'reddit',        to: 'scout',  type: 'input' },
  { from: 'blog-rss',      to: 'scout',  type: 'input' },
  { from: 'google-trends', to: 'scout',  type: 'input' },
  { from: 'ai-visibility', to: 'scout',  type: 'input' },
  // Input → Main (VIP, context)
  { from: 'gmail',   to: 'main', type: 'input', label: 'VIP alerts' },
  { from: 'slack',   to: 'main', type: 'input', label: 'context' },
  { from: 'youtube', to: 'main', type: 'input' },
  { from: 'github',  to: 'main', type: 'input' },
  // Agent → Database
  { from: 'scout',   to: 'events',        type: 'database' },
  { from: 'analyst', to: 'contexts',      type: 'database' },
  { from: 'analyst', to: 'items',         type: 'database', label: 'proposals' },
  { from: 'writer',  to: 'items',         type: 'database', label: 'drafts' },
  { from: 'writer',  to: 'storage',       type: 'database', label: 'HTML' },
  { from: 'main',    to: 'notifications', type: 'database' },
  { from: 'main',    to: 'comments',      type: 'database' },
  // Orchestration
  { from: 'main',    to: 'scout',   type: 'orchestration', label: 'spawns' },
  { from: 'main',    to: 'analyst', type: 'orchestration', label: 'spawns' },
  { from: 'main',    to: 'writer',  type: 'orchestration', label: 'spawns' },
  { from: 'scout',   to: 'main',    type: 'orchestration', label: 'announces' },
  { from: 'analyst', to: 'main',    type: 'orchestration', label: 'announces' },
  { from: 'writer',  to: 'main',    type: 'orchestration', label: 'announces' },
  // Dashboard (realtime)
  { from: 'items',         to: 'drafts',     type: 'realtime', label: 'realtime' },
  { from: 'items',         to: 'ideas',      type: 'realtime', label: 'realtime' },
  { from: 'items',         to: 'tasks',      type: 'realtime', label: 'realtime' },
  { from: 'notifications', to: 'inbox',      type: 'realtime', label: 'realtime' },
  { from: 'comments',      to: 'inbox',      type: 'realtime', label: 'realtime' },
  { from: 'outreach',      to: 'outreach-db',type: 'realtime', label: 'realtime' },
  { from: 'events',        to: 'inbox',      type: 'realtime', label: 'realtime' },
  // Approval
  { from: 'ideas',    to: 'main', type: 'approval', label: 'approve' },
  { from: 'drafts',   to: 'main', type: 'approval', label: 'approve' },
  { from: 'tasks',    to: 'main', type: 'approval', label: 'approve' },
  { from: 'ideas',    to: 'main', type: 'approval', label: 'reject' },
  { from: 'drafts',   to: 'main', type: 'approval', label: 'reject' },
  { from: 'comments', to: 'main', type: 'approval', label: 'comment' },
  // Output
  { from: 'main', to: 'telegram',   type: 'output' },
  { from: 'main', to: 'slack-dm',   type: 'output' },
  { from: 'main', to: 'email',      type: 'output' },
  { from: 'main', to: 'blog',       type: 'output' },
  { from: 'main', to: 'social',     type: 'output' },
  { from: 'main', to: 'newsletter', type: 'output' },
  // Learning
  { from: 'preferences', to: 'main', type: 'learning', label: 'learns' },
]

// ── Colors ────────────────────────────────────────────────────────────────────────

const COLORS: Record<ConnectionType, string> = {
  input:         '#60A5FA',
  database:      '#34D399',
  orchestration: '#FBBF24',
  realtime:      '#A78BFA',
  approval:      '#F87171',
  output:        '#FB923C',
  learning:      '#FFFFFF',
}

const TYPE_COLORS: Record<NodeType, string> = {
  input:     '#1E3A5F',
  agent:     '#3B2F5E',
  database:  '#2D3748',
  dashboard: '#1A365D',
  output:    '#553C2E',
}

// ── Keyboard Camera Controller ────────────────────────────────────────────────

const KEYS: Record<string, boolean> = {}

function KeyboardCameraController() {
  const { camera } = useThree()

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => { KEYS[e.code] = true }
    const onUp   = (e: KeyboardEvent) => { KEYS[e.code] = false }
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup',   onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup',   onUp)
    }
  }, [])

  useFrame((_, delta) => {
    const speed  = (KEYS['ShiftLeft'] || KEYS['ShiftRight']) ? 24 : 8
    const move   = speed * delta

    const forward = new THREE.Vector3()
    camera.getWorldDirection(forward)
    forward.normalize()

    const right = new THREE.Vector3()
    right.crossVectors(forward, camera.up).normalize()

    // W / ArrowUp  — move toward scene
    if (KEYS['KeyW'] || KEYS['ArrowUp'])   camera.position.addScaledVector(forward,  move)
    // S / ArrowDown — move away from scene
    if (KEYS['KeyS'] || KEYS['ArrowDown']) camera.position.addScaledVector(forward, -move)
    // A / ArrowLeft — strafe left
    if (KEYS['KeyA'] || KEYS['ArrowLeft']) camera.position.addScaledVector(right,   -move)
    // D / ArrowRight — strafe right
    if (KEYS['KeyD'] || KEYS['ArrowRight'])camera.position.addScaledVector(right,    move)
    // Q — move up
    if (KEYS['KeyQ']) camera.position.y += move
    // E — move down
    if (KEYS['KeyE']) camera.position.y -= move
  })

  return null
}

// ── Animated Connection Line ──────────────────────────────────────────────────

function AnimatedConnection({
  from,
  to,
  type,
  label,
  highlighted,
}: {
  from: string
  to: string
  type: ConnectionType
  label?: string
  highlighted?: boolean
}) {
  const fromNode = ALL_NODES.find(n => n.id === from)
  const toNode   = ALL_NODES.find(n => n.id === to)

  const particlesRef = useRef<THREE.Points>(null)
  const [time, setTime] = useState(0)

  useFrame((_, delta) => {
    setTime(t => t + delta * 0.5)
    if (particlesRef.current && fromNode && toNode) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const count = positions.length / 3
      for (let i = 0; i < count; i++) {
        const t = ((i / count) + time) % 1
        positions[i * 3]     = THREE.MathUtils.lerp(fromNode.position[0], toNode.position[0], t)
        positions[i * 3 + 1] = THREE.MathUtils.lerp(fromNode.position[1], toNode.position[1], t)
        positions[i * 3 + 2] = THREE.MathUtils.lerp(fromNode.position[2], toNode.position[2], t)
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  if (!fromNode || !toNode) return null

  const points = [
    new THREE.Vector3(...fromNode.position),
    new THREE.Vector3(...toNode.position),
  ]

  const midPoint: [number, number, number] = [
    (fromNode.position[0] + toNode.position[0]) / 2,
    (fromNode.position[1] + toNode.position[1]) / 2 + 0.5,
    (fromNode.position[2] + toNode.position[2]) / 2,
  ]

  const isDashed   = type === 'learning'
  const color      = COLORS[type]
  const lineWidth  = highlighted ? 3 : (type === 'orchestration' || type === 'realtime' ? 1.5 : 1)

  return (
    <group>
      <Line
        points={points}
        color={color}
        lineWidth={lineWidth}
        dashed={isDashed}
        dashScale={isDashed ? 0.5 : 1}
        dashSize={isDashed ? 0.4 : 0}
        gapSize={isDashed ? 0.2 : 0}
        opacity={highlighted ? 1 : 0.5}
        transparent
      />
      {type !== 'learning' && (
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[new Float32Array(60), 3]} />
          </bufferGeometry>
          <pointsMaterial color={color} size={0.12} transparent opacity={0.8} sizeAttenuation />
        </points>
      )}
      {label && (
        <Text
          position={midPoint}
          fontSize={0.25}
          color={color}
          anchorX="center"
          anchorY={0}
          outlineWidth={0.02}
          outlineColor="#000"
        >
          {label}
        </Text>
      )}
    </group>
  )
}

// ── 3D Node ────────────────────────────────────────────────────────────────────

function SystemNode({
  node,
  onHover,
  onClick,
  isHovered,
  isClicked,
}: {
  node: NodeData
  onHover: (id: string | null) => void
  onClick: (id: string) => void
  isHovered: boolean
  isClicked: boolean
}) {
  const meshRef    = useRef<THREE.Mesh>(null)
  const [pulse, setPulse] = useState(0)

  useFrame((_, delta) => {
    if (isHovered || isClicked) setPulse(t => t + delta * 3)
    else setPulse(0)
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.2
  })

  const isAgent   = node.type === 'agent'
  const scale     = isAgent ? 1.4 : 1
  const color     = TYPE_COLORS[node.type]
  const emissive  = isClicked ? '#FFD700' : isHovered ? '#60A5FA' : '#1E293B'
  const emissiveI = isClicked ? 0.9 : isHovered ? 0.6 : 0.15

  const Geom = node.type === 'database' ? Cylinder : Box

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.4} floatingRange={[-0.15, 0.15]}>
      <group
        position={node.position}
        onPointerEnter={() => onHover(node.id)}
        onPointerLeave={() => onHover(null)}
        onClick={(e) => { e.stopPropagation(); onClick(node.id) }}
      >
        <Geom ref={meshRef} args={[0.55 * scale, 0.55 * scale, 0.55 * scale, 16]}>
          <meshStandardMaterial
            color={color}
            emissive={emissive}
            emissiveIntensity={emissiveI + Math.sin(pulse) * 0.2}
            roughness={0.15}
            metalness={0.4}
            transparent
            opacity={0.92}
          />
        </Geom>

        {/* Glow ring for agents */}
        {isAgent && (
          <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.4}>
            <torusGeometry args={[0.75, 0.03, 8, 48]} />
            <meshBasicMaterial color="#FBBF24" transparent opacity={isHovered ? 0.9 : 0.4} />
          </mesh>
        )}

        {/* Label below node */}
        <Text
          position={[0, -0.85, 0]}
          fontSize={0.28}
          color="#E2E8F0"
          anchorX="center"
          anchorY="top"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {node.label}
        </Text>

        {/* Icon overlay */}
        {node.icon && (
          <Html position={[0, 0, 0.3]} center style={{ pointerEvents: 'none' }}>
            <div style={{
              fontSize: '18px',
              userSelect: 'none',
              color: isHovered ? '#60A5FA' : '#94A3B8',
              textShadow: '0 0 8px rgba(96,165,250,0.6)',
            }}>
              {node.icon}
            </div>
          </Html>
        )}

        {/* Schedule badge */}
        {node.schedule && (
          <group position={[0.85, 0.6, 0]}>
            <mesh>
              <planeGeometry args={[0.7, 0.2]} />
              <meshBasicMaterial color="#000" transparent opacity={0.75} />
            </mesh>
            <Text position={[0, 0, 0.01]} fontSize={0.1} color="#FBBF24" anchorX="center" anchorY={0}>
              {node.schedule}
            </Text>
          </group>
        )}
      </group>
    </Float>
  )
}

// ── Layer Labels ───────────────────────────────────────────────────────────────

function LayerLabel({ x, label, color }: { x: number; label: string; color: string }) {
  return (
    <Text
      position={[x, 9, 0]}
      fontSize={0.6}
      color={color}
      anchorX="center"
      anchorY="bottom"
      outlineWidth={0.04}
      outlineColor="#000"
    >
      {label}
    </Text>
  )
}

// ── Floor Grid ─────────────────────────────────────────────────────────────────

function FloorGrid() {
  return (
    <group position={[4, -9, 0]}>
      <gridHelper args={[60, 40, '#1E3A5F', '#0F172A']} />
    </group>
  )
}

// ── Scene ───────────────────────────────────────────────────────────────────────

function Scene({
  hoveredNode,
  setHoveredNode,
  clickedNode,
  setClickedNode,
  orbitRef,
}: {
  hoveredNode: string | null
  setHoveredNode: (id: string | null) => void
  clickedNode: string | null
  setClickedNode: (id: string | null) => void
  orbitRef: React.RefObject<any>
}) {
  const highlightedConnections = useMemo(() => {
    if (!clickedNode) return []
    return CONNECTIONS.filter(c => c.from === clickedNode || c.to === clickedNode)
  }, [clickedNode])

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 6, 28]} fov={65} />
      <OrbitControls
        ref={orbitRef}
        enablePan
        enableZoom
        enableRotate
        minDistance={3}
        maxDistance={80}
        panSpeed={1.2}
        rotateSpeed={0.6}
        zoomSpeed={1.2}
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN,
        }}
      />

      <KeyboardCameraController />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[-10, 15, 10]} intensity={1.2} color="#60A5FA" />
      <pointLight position={[15,  10, -5]} intensity={0.8} color="#A78BFA" />
      <pointLight position={[ 4,  -5, 15]} intensity={0.6} color="#34D399" />

      <FloorGrid />

      {/* Layer labels */}
      <LayerLabel x={-16} label="INPUTS"    color="#60A5FA" />
      <LayerLabel x={ -3} label="AGENTS"    color="#FBBF24" />
      <LayerLabel x={  8} label="DATABASE"  color="#34D399" />
      <LayerLabel x={ 18} label="DASHBOARD" color="#A78BFA" />
      <LayerLabel x={ 26} label="OUTPUTS"   color="#FB923C" />

      {/* Nodes */}
      {ALL_NODES.map(node => (
        <SystemNode
          key={node.id}
          node={node}
          onHover={setHoveredNode}
          onClick={setClickedNode}
          isHovered={hoveredNode === node.id}
          isClicked={clickedNode === node.id}
        />
      ))}

      {/* Connections */}
      {CONNECTIONS.map((conn, i) => (
        <AnimatedConnection
          key={i}
          from={conn.from}
          to={conn.to}
          type={conn.type}
          label={conn.label}
          highlighted={!!(clickedNode && (conn.from === clickedNode || conn.to === clickedNode))}
        />
      ))}
    </>
  )
}

// ── Node Detail Panel ─────────────────────────────────────────────────────────

function NodeDetailPanel({ nodeId, onClose }: { nodeId: string; onClose: () => void }) {
  const node = ALL_NODES.find(n => n.id === nodeId)
  if (!node) return null

  return (
    <div
      className="absolute top-4 right-4 w-72 glass-card p-4 animate-fade-in"
      style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto', zIndex: 10 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {node.icon && <span className="text-xl">{node.icon}</span>}
          <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            {node.label}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="text-xs px-2 py-0.5 rounded"
          style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)' }}
        >
          ✕
        </button>
      </div>

      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{node.details}</p>

      {node.type === 'agent' && (
        <div className="space-y-2 text-xs">
          {node.model && (
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Model:</span>
              <span style={{ color: 'var(--text-primary)' }}>{node.model}</span>
            </div>
          )}
          {node.schedule && (
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Schedule:</span>
              <span style={{ color: 'var(--accent-text)' }}>{node.schedule}</span>
            </div>
          )}
          {node.readsFrom && (
            <div>
              <span className="block mb-1" style={{ color: 'var(--text-muted)' }}>Reads from:</span>
              <div className="flex flex-wrap gap-1">
                {node.readsFrom.map(r => (
                  <span key={r} className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{ background: 'var(--nav-item-active)', color: 'var(--nav-item-active-text)' }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}
          {node.writesTo && (
            <div>
              <span className="block mb-1" style={{ color: 'var(--text-muted)' }}>Writes to:</span>
              <div className="flex flex-wrap gap-1">
                {node.writesTo.map(w => (
                  <span key={w} className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{ background: 'rgba(52,211,153,0.15)', color: '#34D399' }}>
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--divider)' }}>
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>CONNECTIONS</span>
        <div className="mt-2 space-y-1">
          {CONNECTIONS.filter(c => c.from === node.id || c.to === node.id).map((conn, i) => {
            const isOut  = conn.from === node.id
            const other  = ALL_NODES.find(n => n.id === (isOut ? conn.to : conn.from))
            if (!other) return null
            return (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: COLORS[conn.type] }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  {isOut ? '→' : '←'} {other.label}
                  {conn.label && <span style={{ color: 'var(--text-muted)' }}> ({conn.label})</span>}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ArchitecturePage() {
  const [hoveredNode, setHoveredNode]   = useState<string | null>(null)
  const [clickedNode, setClickedNode]   = useState<string | null>(null)
  const orbitRef = useRef<any>(null)

  const handleNodeClick = useCallback((id: string | null) => {
    setClickedNode(prev => prev === id ? null : id)
  }, [])

  const resetCamera = useCallback(() => {
    if (orbitRef.current) {
      orbitRef.current.reset()
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <Canvas
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #060D1A 0%, #0F172A 60%, #1A2540 100%)',
        }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <Scene
          hoveredNode={hoveredNode}
          setHoveredNode={setHoveredNode}
          clickedNode={clickedNode}
          setClickedNode={handleNodeClick}
          orbitRef={orbitRef}
        />
      </Canvas>

      {/* Top-left header overlay */}
      <div className="absolute top-4 left-4 pointer-events-none" style={{ zIndex: 10 }}>
        <h1 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>System Architecture</h1>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
          BentoBoard multi-agent system
        </p>
      </div>

      {/* Reset camera button */}
      <div className="absolute top-4 left-4 mt-12 pointer-events-auto" style={{ zIndex: 10 }}>
        <button
          onClick={resetCamera}
          className="px-3 py-1.5 rounded text-xs glass-card"
          style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
        >
          Reset Camera
        </button>
      </div>

      {/* Legend */}
      <div
        className="absolute bottom-4 left-4 glass-card p-3 text-xs space-y-1.5"
        style={{ zIndex: 10 }}
      >
        <div className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Connections</div>
        {(Object.entries(COLORS) as [ConnectionType, string][]).map(([type, color]) => (
          <div key={type} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
            <span style={{ color: 'var(--text-secondary)' }} className="capitalize">{type.replace('_', ' ')}</span>
          </div>
        ))}
      </div>

      {/* Controls hint */}
      <div
        className="absolute bottom-4 right-4 glass-card px-3 py-2 text-xs"
        style={{ color: 'var(--text-muted)', zIndex: 10 }}
      >
        <div className="font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>Navigation</div>
        <div>Left drag — rotate</div>
        <div>Right drag / middle drag — pan</div>
        <div>Scroll — zoom</div>
        <div>W A S D — fly through</div>
        <div>Q / E — up / down</div>
        <div>Shift — fast move</div>
        <div className="mt-1">Click node — details</div>
      </div>

      {clickedNode && (
        <NodeDetailPanel nodeId={clickedNode} onClose={() => setClickedNode(null)} />
      )}
    </div>
  )
}
