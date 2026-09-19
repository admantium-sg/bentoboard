import { NextRequest, NextResponse } from 'next/server'
import 'server-only'
import fs from 'fs'
import path from 'path'

import { getWorkspacePath } from '@/lib/workspace'

/** Extensions treated as text (non-binary) — same allowlist as docs/list */
const TEXT_EXTENSIONS = new Set([
  '.md', '.txt', '.json', '.yaml', '.yml', '.toml', '.ini', '.cfg', '.conf',
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
  '.html', '.htm', '.css', '.scss', '.sass', '.less',
  '.py', '.rb', '.php', '.sh', '.bash', '.zsh', '.fish',
  '.sql', '.graphql', '.gql',
  '.xml', '.svg',
  '.csv', '.tsv', '.log', '.env', '.gitignore', '.dockerignore',
  '.dockerfile', '.nginx',
  '.rst', '.adoc', '.tex',
])

function isTextFile(filePath: string): boolean {
  return TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase())
}

function extractTitle(filePath: string, content: string): string {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.md' || ext === '.rst' || ext === '.adoc') {
    const lines = content.split('\n')
    for (const line of lines) {
      if (line.startsWith('# ')) return line.slice(2).trim()
    }
  }
  if (ext === '.json') {
    try {
      const parsed = JSON.parse(content)
      if (typeof parsed === 'object' && parsed !== null) {
        const firstKey = Object.keys(parsed)[0]
        if (firstKey) return String(parsed[firstKey])
      }
    } catch { /* not JSON */ }
  }
  return path.basename(filePath, ext)
}

interface FileEntry {
  name: string
  path: string
  title: string
  content: string
}

interface DirEntry {
  name: string
  files: FileEntry[]
  subdirs: DirEntry[]
}

/**
 * Recursively scan a directory for text files
 */
function scanDir(dirPath: string, relPrefix: string): DirEntry {
  const name = path.basename(dirPath)
  const entry: DirEntry = { name, files: [], subdirs: [] }

  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true })
  } catch {
    return entry
  }

  for (const e of entries) {
    const full = path.join(dirPath, e.name)
    const rel = relPrefix ? `${relPrefix}/${e.name}` : e.name

    if (e.isDirectory()) {
      entry.subdirs.push(scanDir(full, rel))
    } else if (isTextFile(full)) {
      let content = ''
      try {
        const fd = fs.openSync(full, 'r')
        const buf = Buffer.alloc(65536)
        const n = fs.readSync(fd, buf, 0, 65536, 0)
        fs.closeSync(fd)
        content = buf.slice(0, n).toString('utf-8')
      } catch { /* skip unreadable */ }

      entry.files.push({
        name: e.name,
        path: rel,
        title: extractTitle(full, content),
        content,
      })
    }
  }

  return entry
}

/**
 * Strip markdown syntax for plain-text rendering in tabloid
 */
function stripMarkdown(content: string): string {
  return content
    .replace(/^---[\s\S]*?---\s*/m, '')   // frontmatter
    .replace(/```[\s\S]*?```/g, '')         // code blocks
    .replace(/`[^`]+`/g, (m) => m.slice(1, -1))
    .replace(/!\[.*?\]\(.*?\)/g, '')       // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/^#{1,6}\s+/gm, '')           // headings
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // bold/italic
    .replace(/^\s*[-*+]\s+/gm, '')         // list bullets
    .replace(/^\s*\d+\.\s+/gm, '')         // ordered lists
    .replace(/^\s*>\s+/gm, '')             // blockquotes
    .replace(/\n{3,}/g, '\n\n')            // extra blank lines
    .trim()
}

function generateHtml(entry: DirEntry, title: string, generatedAt: string): string {
  const tocEntries: Array<{ title: string; page: number }> = []
  let pageNum = 2 // TOC is page 1

  // Collect TOC entries
  for (const sub of entry.subdirs) {
    tocEntries.push({ title: sub.name, page: pageNum })
    for (const f of sub.files) {
      tocEntries.push({ title: f.title, page: pageNum })
    }
  }
  for (const f of entry.files) {
    tocEntries.push({ title: f.title, page: pageNum })
  }

  // Build sections HTML
  function buildSections(dir: DirEntry, depth = 0): string {
    let html = ''

    // Section header
    if (depth > 0 || dir.name) {
      html += `<div class="section-header">${escapeHtml(dir.name)}</div>`
    }

    // Files in this dir
    for (const file of dir.files) {
      const plainContent = stripMarkdown(file.content)
      const preview = plainContent.slice(0, 800) + (plainContent.length > 800 ? '…' : '')
      html += `
        <div class="file-entry">
          <div class="file-title">${escapeHtml(file.title)}</div>
          <div class="file-content">${escapeHtml(preview)}</div>
        </div>`
    }

    // Recurse into subdirs
    for (const sub of dir.subdirs) {
      html += buildSections(sub, depth + 1)
    }

    return html
  }

  const sectionsHtml = buildSections(entry)
  const tocHtml = tocEntries
    .map(e => `<div class="toc-entry"><span>${escapeHtml(e.title)}</span></div>`)
    .join('\n')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(title)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @page {
      size: 11in 17in;
      margin: 0.75in;
    }

    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 11px;
      line-height: 1.5;
      color: #111;
    }

    /* ── Nameplate ── */
    .nameplate {
      text-align: center;
      padding: 0.5in 0 0.25in;
      border-bottom: 4px solid #111;
      margin-bottom: 0.25in;
    }
    .nameplate-title {
      font-size: 56px;
      font-weight: bold;
      letter-spacing: -1px;
      line-height: 1;
      text-transform: uppercase;
    }
    .nameplate-sub {
      font-size: 14px;
      margin-top: 6px;
      color: #555;
      font-style: italic;
    }

    /* ── Table of Contents ── */
    .toc-page {
      page: toc;
    }
    @page toc { size: 11in 17in; }
    .toc-title {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0.2in;
      border-bottom: 2px solid #111;
      padding-bottom: 0.1in;
    }
    .toc-entry {
      display: flex;
      justify-content: space-between;
      padding: 3px 0;
      border-bottom: 1px dotted #ccc;
      font-size: 12px;
    }
    .toc-entry::after { content: '.'; visibility: hidden; }

    /* ── Content ── */
    .content-page {
      page-break-before: right;
    }
    .section-header {
      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 2px solid #111;
      margin: 0.2in 0 0.1in;
      padding-bottom: 4px;
      page-break-after: avoid;
    }
    .file-entry {
      margin-bottom: 14px;
      page-break-inside: avoid;
    }
    .file-title {
      font-size: 13px;
      font-weight: bold;
      margin-bottom: 3px;
      color: #000;
    }
    .file-content {
      font-size: 10px;
      line-height: 1.6;
      color: #333;
      white-space: pre-wrap;
      word-break: break-word;
    }

    /* ── Footer ── */
    @page {
      @bottom-center {
        content: 'Generated: ${escapeHtml(generatedAt)}  |  Page ' counter(page) ' of ' counter(pages);
        font-size: 9px;
        color: #666;
      }
    }

    /* ── Print helpers ── */
    @media print {
      .content-page { page-break-before: always; }
    }
  </style>
</head>
<body>

  <!-- Nameplate -->
  <header class="nameplate">
    <div class="nameplate-title">${escapeHtml(title)}</div>
    <div class="nameplate-sub">Generated: ${escapeHtml(generatedAt)}</div>
  </header>

  <!-- Table of Contents -->
  <div class="toc-page">
    <div class="toc-title">Table of Contents</div>
    ${tocHtml}
  </div>

  <!-- Content -->
  <div class="content-page">
    ${sectionsHtml}
  </div>

</body>
</html>`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Export a workspace folder as a tabloid HTML document
 * POST /api/fs/export/tabloid
 * Body: { path: string }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path: relativePath } = body as { path: string }

    if (!relativePath) {
      return NextResponse.json({ error: 'path is required' }, { status: 400 })
    }

    // Security: prevent path traversal
    if (relativePath.includes('..') || relativePath.startsWith('/')) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
    }

    const workspaceRoot = getWorkspacePath()
    const fullPath = path.join(workspaceRoot, relativePath)

    // Verify it's within workspace
    if (!fullPath.startsWith(workspaceRoot)) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    }

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Folder not found' }, { status: 404 })
    }

    const stats = fs.statSync(fullPath)
    if (!stats.isDirectory()) {
      return NextResponse.json({ error: 'Path is not a directory' }, { status: 400 })
    }

    // Scan the directory tree
    const scanned = scanDir(fullPath, relativePath)
    const folderName = path.basename(relativePath) || 'workspace'
    const generatedAt = new Date().toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })

    const html = generateHtml(scanned, folderName, generatedAt)

    const safeName = folderName.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase()
    const filename = `tabloid-${safeName}.html`

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Error in /api/fs/export/tabloid:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
