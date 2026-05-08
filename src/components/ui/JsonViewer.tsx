'use client'

import { useEffect, useState } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Button } from '@/components/ui/Button'
import { ChevronLeft, Copy, Check } from 'lucide-react'
import Link from 'next/link'

export function JsonViewer({ filePath }: { filePath: string }) {
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchContent() {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/fs/read?path=${encodeURIComponent(filePath)}`)
        if (!res.ok) {
          const data = await res.json()
          setError(data.error || 'Failed to load file')
          return
        }
        const data = await res.json()
        setContent(data.content)
      } catch (err) {
        console.error('Failed to fetch content:', err)
        setError('Failed to load file')
      } finally {
        setIsLoading(false)
      }
    }

    if (filePath) {
      fetchContent()
    }
  }, [filePath])

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (isLoading) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Loading..." description="" />
        <div className="glass-card p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-transparent border-t-[var(--accent)] mx-auto"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="animate-fade-in max-w-5xl">
        <PageHeader title="Error" description={error} />
        <div className="glass-card p-12 text-center" style={{ color: 'var(--text-muted)' }}>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  const fileName = filePath.split('/').pop() || 'Unknown'

  return (
    <div className="animate-fade-in max-w-5xl">
      <PageHeader
        title={fileName}
        description={filePath}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleCopy}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
          </div>
        }
      />

      <div className="glass-card p-6">
        <pre className="text-[13px] font-mono overflow-x-auto" style={{ color: 'var(--text-primary)' }}>
          {content}
        </pre>
      </div>
    </div>
  )
}
