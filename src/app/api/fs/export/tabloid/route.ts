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
 * Keeps some structure for readability
 */
function stripMarkdown(content: string): string {
  return content
    .replace(/^---[\s\S]*?---\s*/m, '')   // frontmatter
    .replace(/```[\s\S]*?```/g, '[code]')  // code blocks
    .replace(/`([^`]+)`/g, '"$1"')        // inline code
    .replace(/!\[.*?\]\(.*?\)/g, '[image]') // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links -> text
    .replace(/^#{1,6}\s+/gm, '► ')         // headings with marker
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // bold/italic
    .replace(/^\s*[-*+]\s+/gm, '• ')      // list bullets
    .replace(/^\s*\d+\.\s+/gm, (m) => { // ordered lists
      const n = m.match(/\d+/)?.[0] || '1'
      return n + '. '
    })
    .replace(/^\s*>\s+/gm, '│ ')          // blockquotes with marker
    .replace(/\n{3,}/g, '\n\n')           // extra blank lines
    .trim()
}

function generateHtml(entry: DirEntry, title: string, generatedAt: string): string {
  // Track sections and their page numbers for TOC
  const sections: Array<{ name: string; files: Array<{ title: string }> }> = []
  let currentPage = 2 // TOC is page 1, content starts at page 2

  // Count estimated pages needed
  function countPages(dir: DirEntry): number {
    let pages = 1 // at least one page per section
    for (const sub of dir.subdirs) {
      pages += countPages(sub)
    }
    return pages
  }

  // Determine column span based on content length (waterfall algorithm heuristic)
  function getSpanClass(contentLength: number): string {
    if (contentLength > 2000) return 'span-6'
    if (contentLength > 1500) return 'span-5'
    if (contentLength > 1000) return 'span-4'
    if (contentLength > 600)  return 'span-3'
    if (contentLength > 300)  return 'span-2'
    return 'span-1'
  }

  // Build sections with page tracking
  function buildSections(dir: DirEntry, depth = 0): string {
    let html = ''

    // Skip section header for root, only add for subdirs
    if (depth > 0 && dir.name) {
      sections.push({ name: dir.name, files: dir.files.map(f => ({ title: f.title })) })
      html += `<div class="section-header">${escapeHtml(dir.name)}</div>`
    } else if (depth === 0 && dir.files.length > 0) {
      // Root-level files get a section too
      sections.push({ name: '', files: dir.files.map(f => ({ title: f.title })) })
    }

    // Files in this dir - wrapped in 6-column grid for newspaper layout
    if (dir.files.length > 0) {
      html += '<div class="tabloid-grid">'
      for (const file of dir.files) {
        const plainContent = stripMarkdown(file.content)
        // Take more content for preview - up to 2000 chars for large spans
        const preview = plainContent.slice(0, 2000).trim() + (plainContent.length > 2000 ? '…' : '')
        const spanClass = getSpanClass(plainContent.length)
        html += `
          <div class="file-entry article ${spanClass}">
            <div class="file-title">${escapeHtml(file.title)}</div>
            <div class="file-content">${escapeHtml(preview) || '<em style="color:#999;">No content</em>'}</div>
          </div>`
      }
      html += '</div>'
    }

    // Recurse into subdirs
    for (const sub of dir.subdirs) {
      html += buildSections(sub, depth + 1)
    }

    return html
  }

  const sectionsHtml = buildSections(entry)
  
  // Build TOC HTML from sections
  const tocHtml = sections
    .map(s => {
      if (s.name) {
        return `<div class="toc-entry toc-section"><span>▸ ${escapeHtml(s.name)}</span></div>` +
          s.files.map(f => `<div class="toc-entry toc-file"><span>${escapeHtml(f.title)}</span></div>`).join('\n')
      }
      return s.files.map(f => `<div class="toc-entry"><span>${escapeHtml(f.title)}</span></div>`).join('\n')
    })
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
    .toc-section {
      font-weight: bold;
      font-size: 14px;
      color: #111;
      border-bottom: 2px solid #111;
      margin-top: 8px;
    }
    .toc-file {
      padding-left: 16px;
      font-style: italic;
    }

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

    /* ── Flexible Column Grid (BENTO-027) ──
     * 6-column newspaper grid with variable article spans
     * Column spans: span-1 (1/6) through span-6 (full width)
     * Waterfall layout fills shortest columns first
     */
    .tabloid-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 12px;
      margin-bottom: 0.15in;
    }
    /* Article span classes - controls column width */
    .article { page-break-inside: avoid; }
    .article.span-1 { grid-column: span 1; }
    .article.span-2 { grid-column: span 2; }
    .article.span-3 { grid-column: span 3; }
    .article.span-4 { grid-column: span 4; }
    .article.span-5 { grid-column: span 5; }
    .article.span-6 { grid-column: span 6; }
    /* Offset classes for fine-tuning placement */
    .article.offset-1 { grid-column-start: 2; }
    .article.offset-2 { grid-column-start: 3; }
    /* Responsive breakpoints for screen viewing */
    @media screen and (max-width: 800px) {
      .tabloid-grid { grid-template-columns: repeat(4, 1fr); }
      .article.span-5, .article.span-6 { grid-column: span 4; }
    }
    @media screen and (max-width: 500px) {
      .tabloid-grid { grid-template-columns: repeat(2, 1fr); }
      .article.span-3, .article.span-4, .article.span-5, .article.span-6 { grid-column: span 2; }
    }
    /* Legacy file-entry styling preserved for non-grid sections */
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
    body { padding-bottom: 0.5in; }
    .tabloid-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 9px;
      color: #666;
      padding: 4px 0;
      border-top: 1px solid #ccc;
      background: #fff;
    }
    @media print {
      .tabloid-footer { background: white; }
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

  <footer class="tabloid-footer">Generated: ${escapeHtml(generatedAt)} &nbsp;|&nbsp; BentoBoard Export</footer>

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

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Disposition': 'inline',
      },
    })
  } catch (error) {
    console.error('Error in /api/fs/export/tabloid:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
