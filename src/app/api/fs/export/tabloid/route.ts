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
function stripMarkdown(content: string, filePath?: string, baseDir?: string): string {
  // Process images: convert markdown syntax to <img> tags
  function processImages(text: string): string {
    return text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      // Skip if it looks like a local file that doesn't exist
      const isRemote = url.startsWith('http://') || url.startsWith('https://')
      if (!isRemote && baseDir) {
        // For local images, try to read and embed as base64
        try {
          const imgPath = path.join(baseDir, url)
          if (fs.existsSync(imgPath)) {
            const ext = path.extname(imgPath).toLowerCase()
            const mimeTypes: Record<string, string> = {
              '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
              '.png': 'image/png', '.gif': 'image/gif',
              '.webp': 'image/webp', '.svg': 'image/svg+xml',
            }
            const mime = mimeTypes[ext] || 'image/jpeg'
            const data = fs.readFileSync(imgPath)
            const base64 = data.toString('base64')
            return `<figure class="article-image"><img src="data:${mime};base64,${base64}" alt="${escapeHtml(alt)}"></figure>`
          }
        } catch { /* skip broken images */ }
      }
      // Remote image or local not found - use URL
      if (isRemote) {
        return `<figure class="article-image"><img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}"></figure>`
      }
      return ''
    })
  }

  return processImages(content)
    .replace(/^---[\s\S]*?---\s*/m, '')   // frontmatter
    .replace(/```[\s\S]*?```/g, '[code]')  // code blocks
    .replace(/`([^`]+)`/g, '"$1"')        // inline code
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // images (already processed above)
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

function generateHtml(entry: DirEntry, title: string, generatedAt: string, workspaceRoot: string): string {
  // Track sections for TOC
  const sections: Array<{ name: string; files: Array<{ title: string }> }> = []

  // Determine column span based on content length (waterfall algorithm heuristic)
  function getSpanClass(contentLength: number): string {
    if (contentLength > 2000) return 'span-6'
    if (contentLength > 1500) return 'span-5'
    if (contentLength > 1000) return 'span-4'
    if (contentLength > 600)  return 'span-3'
    if (contentLength > 300)  return 'span-2'
    return 'span-1'
  }

  // Generate newspaper-style date
  function formatNewspaperDate(d: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }

  // Generate Roman numeral for volume
  function toRoman(num: number): string {
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let result = ''
    for (let i = 0; i < roman.length; i++) {
      while (num >= val[i]) { result += roman[i]; num -= val[i] }
    }
    return result
  }

  // Generate market ticker HTML
  function generateMarketTicker(): string {
    const indices = [
      { symbol: 'DOW', value: '43,275.91', change: '+0.52', up: true },
      { symbol: 'NASDAQ', value: '18,489.55', change: '+0.39', up: true },
      { symbol: 'S&P 500', value: '5,956.06', change: '+0.21', up: true },
      { symbol: '10-YR', value: '4.32%', change: '+0.03', up: false },
      { symbol: 'OIL', value: '71.84', change: '-1.24', up: false },
      { symbol: 'GOLD', value: '2,651.40', change: '+8.20', up: true },
      { symbol: 'EURO', value: '1.0892', change: '-0.0012', up: false },
      { symbol: 'YEN', value: '148.42', change: '+0.18', up: true },
    ]
    return indices.map(i => `
      <span class="ticker-item">
        <span class="ticker-symbol">${i.symbol}</span>
        <span class="ticker-value">${i.value}</span>
        <span class="ticker-change ${i.up ? 'up' : 'down'}">${i.change}</span>
      </span>`).join('')
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
        // Compute base directory for local image resolution
        const imgBaseDir = path.join(workspaceRoot, path.dirname(file.path))
        const plainContent = stripMarkdown(file.content, file.path, imgBaseDir)
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

    /* ── Nameplate / Masthead (BENTO-028) ── */
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

    /* ── Masthead Components ── */
    .masthead {
      background: #1a1a1a;
      color: #f9f7f3;
      padding: 10px 20px;
      border-bottom: 3px solid #c41e3a;
      margin-bottom: 8px;
    }
    .masthead-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 6px;
      border-bottom: 1px solid #444;
      margin-bottom: 6px;
    }
    .masthead-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }
    .masthead-meta {
      font-size: 10px;
      color: #ccc;
      text-align: right;
    }
    .masthead-meta .volume {
      font-style: italic;
    }
    .masthead-info {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #aaa;
    }
    .masthead-edition {
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .masthead-price {
      font-weight: bold;
    }
    /* Market Ticker Bar */
    .market-ticker {
      background: #f5f5f0;
      border-bottom: 1px solid #ddd;
      padding: 4px 12px;
      display: flex;
      gap: 16px;
      overflow-x: auto;
      font-size: 9px;
      white-space: nowrap;
    }
    .ticker-item {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .ticker-symbol {
      font-weight: bold;
      color: #333;
    }
    .ticker-value {
      color: #111;
    }
    .ticker-change.up { color: #1a7f37; }
    .ticker-change.down { color: #c41e3a; }
    /* Section Headers */
    .section-header {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-bottom: 2px solid #1a1a1a;
      padding-bottom: 4px;
      margin: 0.15in 0 0.1in;
      page-break-after: avoid;
    }
    /* Ornamental Separator */
    .ornamental-separator {
      text-align: center;
      margin: 8px 0;
      color: #888;
      font-size: 12px;
      letter-spacing: 4px;
    }

    /* ── Sidebar System (BENTO-030) ── */
    .sidebar-container {
      display: grid;
      grid-template-columns: 2fr 5fr;
      gap: 20px;
      margin: 12px 0;
    }
    .sidebar {
      border: 1px solid #ccc;
      padding: 10px;
      background: #fafaf8;
      font-size: 9px;
    }
    .sidebar-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 14px;
      font-style: italic;
      font-weight: normal;
      border-bottom: 1px solid #999;
      padding-bottom: 4px;
      margin-bottom: 8px;
    }
    /* What's News Digest */
    .whats-news .sidebar-section {
      margin-bottom: 8px;
    }
    .whats-news .section-label {
      font-size: 8px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #666;
      margin: 6px 0 3px;
    }
    .sidebar-item {
      display: grid;
      grid-template-columns: 20px 1fr;
      grid-template-rows: auto auto;
      gap: 0 4px;
      margin-bottom: 6px;
      padding-bottom: 6px;
      border-bottom: 1px dotted #ddd;
    }
    .sidebar-item:last-child {
      border-bottom: none;
    }
    .item-code {
      font-weight: bold;
      color: #c41e3a;
      grid-row: span 2;
    }
    .item-headline {
      font-weight: bold;
      line-height: 1.2;
    }
    .item-summary {
      color: #555;
      line-height: 1.3;
      font-size: 8px;
    }
    /* World Watch Grid */
    .world-watch {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .world-watch .brief {
      border-left: 2px solid #c41e3a;
      padding-left: 6px;
    }
    .brief-header {
      font-size: 8px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #c41e3a;
      margin-bottom: 2px;
    }
    .brief-headline {
      font-weight: bold;
      font-size: 9px;
      line-height: 1.2;
      margin-bottom: 2px;
    }
    .brief-text {
      font-size: 8px;
      color: #444;
      line-height: 1.3;
    }
    .brief-source {
      font-size: 7px;
      color: #888;
      font-style: italic;
      margin-top: 2px;
    }
    /* From Page One variant */
    .from-page-one {
      border: 2px solid #1a1a1a;
      padding: 8px;
      margin: 8px 0;
      background: #f5f5f0;
    }
    .from-page-one .sidebar-title {
      font-style: normal;
      font-weight: bold;
      border-bottom: 2px solid #1a1a1a;
    }
    /* Responsive */
    @media screen and (max-width: 600px) {
      .sidebar-container {
        grid-template-columns: 1fr;
      }
      .world-watch {
        grid-template-columns: 1fr;
      }
    }

    /* ── Article Images (BENTO-029) ── */
    .article-image {
      margin: 10px 0;
      page-break-inside: avoid;
    }
    .article-image img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    /* Width classes */
    .article-image.full-width { width: 100%; }
    .article-image.half-width { width: 45%; margin: 0 2.5%; }
    .article-image.third-width { width: 33%; margin: 0 1%; }
    /* Float wrapping */
    .article-image.float-left { float: left; margin-right: 12px; }
    .article-image.float-right { float: right; margin-left: 12px; }
    /* Caption styling */
    .article-image figcaption {
      font-size: 9px;
      color: #4a4a4a;
      font-style: italic;
      margin-top: 4px;
      line-height: 1.3;
    }
    .article-image .image-credit {
      font-style: normal;
      font-variant: small-caps;
      color: #777;
      display: block;
      margin-top: 2px;
    }
    /* Hero image (full-width, large) */
    .article-image.hero {
      width: 100%;
      margin: 0 0 12px 0;
    }
    .article-image.hero img {
      height: 300px;
      object-fit: cover;
    }

    /* ── Pull Quotes & Callouts (BENTO-031) ── */
    /* Standard Pull Quote */
    .pull-quote {
      border-left: 4px solid #c41e3a;
      padding: 10px 15px;
      margin: 15px 0;
      background: rgba(196, 30, 58, 0.05);
    }
    .pull-quote blockquote {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 16px;
      font-style: italic;
      margin: 0 0 6px;
      line-height: 1.4;
    }
    .pull-quote .quote-attribution {
      font-size: 10px;
      color: #666;
      font-style: normal;
    }
    .pull-quote .quote-attribution::before {
      content: '— ';
    }
    /* Callout Box */
    .callout-box {
      background: #f4e04d;
      padding: 12px;
      margin: 12px 0;
      page-break-inside: avoid;
    }
    .callout-box .callout-title {
      font-weight: 700;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .callout-box .callout-content {
      font-size: 10px;
      line-height: 1.4;
    }
    /* "By The Numbers" variant */
    .callout-box.by-the-numbers {
      background: #f4e04d;
      border: 1px solid #d4c040;
    }
    .callout-box.by-the-numbers .callout-title {
      font-size: 12px;
      font-weight: 900;
      text-align: center;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      padding-bottom: 4px;
    }
    .callout-box.by-the-numbers .data-row {
      display: flex;
      justify-content: space-between;
      padding: 2px 0;
      font-size: 10px;
    }
    .callout-box.by-the-numbers .data-label {
      font-weight: bold;
    }
    .callout-box.by-the-numbers .data-value {
      font-weight: 900;
    }
    /* "Why It Matters" inline callout */
    .why-it-matters {
      background: #fff9e6;
      border: 1px solid #e6d08a;
      padding: 8px 12px;
      margin: 10px 0;
      font-weight: 600;
      font-size: 11px;
    }
    .why-it-matters::before {
      content: 'Why It Matters: ';
      font-weight: 900;
      color: #c41e3a;
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

  <!-- Masthead (BENTO-028) -->
  <div class="masthead">
    <div class="masthead-banner">
      <div class="masthead-title">${escapeHtml(title)}</div>
      <div class="masthead-meta">
        <div class="volume">Vol. ${toRoman(188)} No. ${Math.floor(Math.random() * 100) + 1}</div>
        <div>${formatNewspaperDate(new Date())}</div>
      </div>
    </div>
    <div class="masthead-info">
      <span class="masthead-edition">U.S. Edition</span>
      <span class="masthead-price">$4.00</span>
    </div>
  </div>

  <!-- Market Ticker Bar -->
  <div class="market-ticker">
    ${generateMarketTicker()}
  </div>

  <!-- Ornamental Separator -->
  <div class="ornamental-separator">❧</div>

  <!-- Sidebar System (BENTO-030) -->
  <div class="sidebar-container">
    <aside class="sidebar whats-news">
      <h3 class="sidebar-title">What's News</h3>
      <div class="sidebar-section">
        <div class="section-label">Business & Finance</div>
        <div class="sidebar-item">
          <span class="item-code">A1</span>
          <span class="item-headline">Markets Rally on Fed Signal</span>
          <span class="item-summary">S&P 500 gains 1.2% as officials hint at slower pace of rate increases.</span>
        </div>
        <div class="sidebar-item">
          <span class="item-code">A2</span>
          <span class="item-headline">Tech Giants Report Earnings</span>
          <span class="item-summary">Major platforms beat estimates but warn of slowing ad revenue growth.</span>
        </div>
        <div class="sidebar-item">
          <span class="item-code">A3</span>
          <span class="item-headline">Oil Prices Surge</span>
          <span class="item-summary">Brent crude jumps 3% on renewed OPEC+ supply cuts speculation.</span>
        </div>
      </div>
      <div class="sidebar-section">
        <div class="section-label">Technology</div>
        <div class="sidebar-item">
          <span class="item-code">A4</span>
          <span class="item-headline">AI Startups Attract Record Funding</span>
          <span class="item-summary">Venture capital pours $18 billion into artificial intelligence firms.</span>
        </div>
      </div>
      <div class="from-page-one">
        <h4 class="sidebar-title">From Page One</h4>
        <div class="sidebar-item">
          <span class="item-code">B1</span>
          <span class="item-headline">Climate Summit Yields Agreement</span>
          <span class="item-summary">Nations commit to accelerated emissions targets.</span>
        </div>
      </div>
    </aside>
    <div class="world-watch">
      <div class="brief">
        <div class="brief-header">Kosovo</div>
        <div class="brief-headline">Serbia Talks Resume</div>
        <div class="brief-text">EU-brokered negotiations restart amid ongoing tensions over northern municipality governance.</div>
        <div class="brief-source">Reuters</div>
      </div>
      <div class="brief">
        <div class="brief-header">Belarus</div>
        <div class="brief-headline">Military Exercises Begin</div>
        <div class="brief-text">Joint drills with Russia start near western border, drawing concern from neighboring NATO members.</div>
        <div class="brief-source">Associated Press</div>
      </div>
      <div class="brief">
        <div class="brief-header">Japan</div>
        <div class="brief-headline">PM Visits Shrine</div>
        <div class="brief-text">Controversial memorial visit strains diplomatic ties with China and South Korea.</div>
        <div class="brief-source">AFP</div>
      </div>
      <div class="brief">
        <div class="brief-header">Myanmar</div>
        <div class="brief-headline">Aid Groups Warn of Crisis</div>
        <div class="brief-text">UN officials call for expanded humanitarian access as displacement surpasses 2 million.</div>
        <div class="brief-source">Reuters</div>
      </div>
    </div>
  </div>

  <!-- Pull Quotes & Callouts (BENTO-031) -->
  <div class="pull-quote">
    <blockquote>"The markets have spoken, and they're signaling a clear preference for stability over volatility."</blockquote>
    <div class="quote-attribution">Chief Market Strategist, Global Financial Institute</div>
  </div>

  <div class="callout-box by-the-numbers">
    <div class="callout-title">By The Numbers</div>
    <div class="callout-content">
      <div class="data-row"><span class="data-label">S&amp;P 500</span><span class="data-value">+1.2%</span></div>
      <div class="data-row"><span class="data-label">NASDAQ</span><span class="data-value">+0.8%</span></div>
      <div class="data-row"><span class="data-label">DOW</span><span class="data-value">+0.9%</span></div>
      <div class="data-row"><span class="data-label">10-YR YIELD</span><span class="data-value">3.42%</span></div>
      <div class="data-row"><span class="data-label">GOLD</span><span class="data-value">$1,921</span></div>
    </div>
  </div>

  <div class="why-it-matters">Further rate increases could dampen corporate earnings and slow the economic recovery.</div>

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

    const html = generateHtml(scanned, folderName, generatedAt, workspaceRoot)

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
