import fs from 'node:fs'
import path from 'node:path'

const source = path.resolve('content/research')
const target = path.resolve('.next/bentoboard-content')

if (!fs.existsSync(source)) {
  console.warn(`No bundled content found at ${source}`)
  process.exit(0)
}

fs.rmSync(target, { recursive: true, force: true })
fs.mkdirSync(target, { recursive: true })

let copied = 0
function walk(directory, relative = '') {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const from = path.join(directory, entry.name)
    const relativePath = path.join(relative, entry.name)
    if (entry.isDirectory()) {
      walk(from, relativePath)
    } else if (entry.isFile() && /\.(md|txt)$/i.test(entry.name)) {
      const to = path.join(target, relativePath)
      fs.mkdirSync(path.dirname(to), { recursive: true })
      fs.copyFileSync(from, to)
      copied += 1
    }
  }
}

walk(source)
console.log(`Copied ${copied} markdown and text files to ${target}`)
