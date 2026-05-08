'use client'

import { useState, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownEditorProps {
  initialContent: string
  onSave: (content: string) => Promise<void>
  onCancel: () => void
}

export function MarkdownEditor({ initialContent, onSave, onCancel }: MarkdownEditorProps) {
  const [content, setContent] = useState(initialContent)
  const [isSaving, setIsSaving] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    setHasChanges(e.target.value !== initialContent)
  }, [initialContent])

  const handleSave = useCallback(async () => {
    setIsSaving(true)
    try {
      await onSave(content)
      setHasChanges(false)
    } catch (error) {
      console.error('Failed to save:', error)
    } finally {
      setIsSaving(false)
    }
  }, [content, onSave])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
      handleSave()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onCancel()
    }
  }, [handleSave, onCancel])

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ background: 'var(--glass-bg-flat)', borderColor: 'var(--border-subtle)' }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[12px]" style={{ color: 'var(--text-muted)' }}>
            Markdown Editor
          </span>
        </div>
        <div className="flex items-center gap-2">
          {hasChanges && (
            <span className="text-[11px] px-2 py-1 rounded-md" style={{ background: 'var(--warning)', color: 'white' }}>
              Unsaved
            </span>
          )}
          <button
            onClick={onCancel}
            className="px-3 py-1.5 rounded-lg text-[12px] hover:bg-[var(--nav-item-hover)] transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            Cancel (Esc)
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving || !hasChanges}
            className="px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors disabled:opacity-50"
            style={{
              background: hasChanges ? 'var(--accent)' : 'var(--glass-bg-flat)',
              color: hasChanges ? 'white' : 'var(--text-muted)',
            }}
          >
            {isSaving ? 'Saving...' : 'Save (Ctrl+S)'}
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Textarea */}
        <div className="flex-1 p-4">
          <textarea
            value={content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-full h-full resize-none input-glass font-mono text-[13px] leading-relaxed"
            placeholder="Enter markdown content..."
            autoFocus
          />
        </div>

        {/* Preview */}
        <div
          className="flex-1 p-4 overflow-y-auto border-l"
          style={{ background: 'var(--glass-bg-flat)', borderColor: 'var(--border-subtle)' }}
        >
          <div className="prose-bentoboard">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-4 py-2 border-t text-[11px]"
        style={{ background: 'var(--glass-bg-flat)', borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
      >
        <div className="flex items-center justify-between">
          <span>Use markdown syntax for formatting</span>
          <span>{content.length} characters</span>
        </div>
      </div>
    </div>
  )
}
