'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/components/ui/PageHeader'
import { DEFAULT_PROJECTS, cn } from '@/lib/utils'
import { useThemeStore } from '@/lib/theme'
import { Check, Sun, Moon, TreePine, Sunset, MountainSnow } from 'lucide-react'

const ACCENT_COLORS = [
  { label: 'Blue',   value: '#3B82F6' },
  { label: 'Purple', value: '#8B5CF6' },
  { label: 'Pink',   value: '#EC4899' },
  { label: 'Teal',   value: '#14B8A6' },
  { label: 'Green',  value: '#22C55E' },
  { label: 'Orange', value: '#F97316' },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card-flat rounded-2xl p-5 mb-4">
      <h2 className="text-[15px] font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

export default function SettingsPage() {
  const [accentColor, setAccentColor] = useState('#3B82F6')
  const [saved, setSaved] = useState(false)
  const { theme, cycle, setTheme } = useThemeStore()
  const isDark = theme === 'dark'
  const isForest = theme === 'forest'

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const isConnected = supabaseUrl && supabaseUrl !== 'https://placeholder.supabase.co'

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="animate-fade-in max-w-2xl">
      <PageHeader title="Settings" description="Configure BentoBoard" />

      <Section title="Database Connection">
        <div
          className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border-subtle)' }}
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: isConnected ? 'var(--success)' : 'var(--warning)' }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-medium" style={{ color: 'var(--text-primary)' }}>
              {isConnected ? 'Connected to Supabase' : 'Running in demo mode'}
            </p>
            <p className="text-[12px] truncate font-mono" style={{ color: 'var(--text-muted)' }}>
              {isConnected ? supabaseUrl : 'Add NEXT_PUBLIC_SUPABASE_URL to .env.local'}
            </p>
          </div>
        </div>

        {!isConnected && (
          <div
            className="mt-3 p-3 rounded-xl"
            style={{ background: 'var(--accent-muted)', border: '1px solid var(--pill-proposed-bd)' }}
          >
            <p className="text-[12px] font-medium mb-1" style={{ color: 'var(--accent-text)' }}>Connect Supabase</p>
            <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Add these to{' '}
              <code className="font-mono px-1 py-0.5 rounded" style={{ background: 'var(--code-bg)', color: 'var(--accent-text)' }}>
                .env.local
              </code>
              :
            </p>
            <pre className="text-[11px] font-mono mt-2 whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
{`NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`}
            </pre>
          </div>
        )}
      </Section>

      <Section title="Projects">
        <div className="space-y-1">
          {DEFAULT_PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-colors"
              style={{ cursor: 'default' }}
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>{project.name}</p>
                <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>{project.slug}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <Button variant="secondary" size="sm">+ Add Project</Button>
        </div>
      </Section>

      <Section title="Appearance">
        <div className="space-y-5">
          {/* Theme toggle */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>Theme</p>
              <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>
                {theme === 'light'    ? 'Light — frosted glass'
                 : theme === 'dark'   ? 'Dark — obsidian + yellow'
                 : theme === 'forest' ? 'Forest — lush green background'
                 : theme === 'desert' ? 'Desert — arid sandstone scene'
                 : 'Mountain — snow and steel-blue peaks'}
              </p>
            </div>
            {/* Three-way picker */}
            <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border)' }}>
              {([
                { value: 'light',  icon: <Sun      size={13} strokeWidth={2} />, label: 'Light'  },
                { value: 'dark',   icon: <Moon     size={13} strokeWidth={2} />, label: 'Dark'   },
                { value: 'forest',   icon: <TreePine     size={13} strokeWidth={2} />, label: 'Forest'   },
                { value: 'desert',   icon: <Sunset       size={13} strokeWidth={2} />, label: 'Desert'   },
                { value: 'mountain', icon: <MountainSnow size={13} strokeWidth={2} />, label: 'Mountain' },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-150"
                  style={{
                    background: theme === opt.value ? 'var(--tab-active-bg)' : 'transparent',
                    color: theme === opt.value ? 'var(--accent-text)' : 'var(--text-muted)',
                  }}
                >
                  {opt.icon}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accent colors */}
          <div>
            <p className="text-[11px] font-medium mb-2.5 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Accent Color
            </p>
            <div className="flex gap-2">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setAccentColor(c.value)}
                  className="w-7 h-7 rounded-full transition-all duration-150 flex items-center justify-center"
                  style={{
                    backgroundColor: c.value,
                    outline: accentColor === c.value ? `2px solid ${c.value}` : 'none',
                    outlineOffset: 2,
                    transform: accentColor === c.value ? 'scale(1.15)' : 'scale(1)',
                  }}
                  title={c.label}
                >
                  {accentColor === c.value && <Check size={12} strokeWidth={3} className="text-white" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Bento Integration">
        <div className="space-y-3">
          <div
            className="p-3 rounded-xl"
            style={{ background: 'var(--glass-bg-flat)', border: '1px solid var(--border-subtle)' }}
          >
            <p className="text-[12px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              Service Role Key (for KiloClaw machine)
            </p>
            <p className="text-[11px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Set{' '}
              <code className="font-mono px-1 rounded" style={{ background: 'var(--code-bg)', color: 'var(--accent-text)' }}>
                SUPABASE_SERVICE_ROLE_KEY
              </code>{' '}
              in Bento&apos;s environment on the KiloClaw machine.
            </p>
          </div>

          <div
            className="p-3 rounded-xl"
            style={{ background: 'var(--pill-review-bg)', border: '1px solid var(--pill-review-bd)' }}
          >
            <p className="text-[12px] font-semibold mb-1" style={{ color: 'var(--pill-review-fg)' }}>
              Example Bento command
            </p>
            <pre className="text-[10px] font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto" style={{ color: 'var(--pill-review-fg)' }}>
{`curl -X POST "$SUPABASE_URL/rest/v1/items" \\
  -H "apikey: $SUPABASE_KEY" \\
  -H "Authorization: Bearer $SUPABASE_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"type":"draft","title":"...", \\
    "project":"newsletter","status":"in_review", \\
    "created_by":"bento"}'`}
            </pre>
          </div>
        </div>
      </Section>

      <div className="flex justify-end">
        <Button
          variant="primary"
          icon={saved ? <Check size={13} strokeWidth={2.5} /> : undefined}
          onClick={handleSave}
        >
          {saved ? 'Saved' : 'Save Settings'}
        </Button>
      </div>
    </div>
  )
}
