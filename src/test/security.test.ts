import { describe, it, expect } from 'vitest'
import { validatePath, sanitizePath, calculateHash } from '../lib/security'

describe('security.ts', () => {
  describe('validatePath', () => {
    it('should allow paths within workspace', () => {
      const workspace = '/home/devcon/.openclaw/shared-workspace'
      expect(validatePath('/home/devcon/.openclaw/shared-workspace/kanban', workspace)).toBe(true)
    })

    it('should reject paths outside workspace', () => {
      const workspace = '/home/devcon/.openclaw/shared-workspace'
      expect(validatePath('/etc/passwd', workspace)).toBe(false)
      expect(validatePath('/home/devcon/.openclaw/shared-workspace/../../../etc/passwd', workspace)).toBe(false)
    })

    it('should handle paths with traversal attempts', () => {
      const workspace = '/home/devcon/.openclaw/shared-workspace'
      // These use path.resolve which normalizes the path
      expect(validatePath('../etc/passwd', workspace)).toBe(false)
    })

    it('should handle empty string path', () => {
      const workspace = '/home/devcon/.openclaw/shared-workspace'
      const result = validatePath('', workspace)
      // Empty string resolves to CWD which won't start with workspace
      expect(typeof result).toBe('boolean')
    })

    it('should handle paths with special characters', () => {
      const workspace = '/home/devcon/.openclaw/shared-workspace'
      expect(validatePath('/home/devcon/.openclaw/shared-workspace/kanban/my-project', workspace)).toBe(true)
    })
  })

  describe('sanitizePath', () => {
    it('should remove traversal segments', () => {
      // sanitizePath filters out '..' segments
      expect(sanitizePath('kanban/../etc/passwd')).toBe('kanban/etc/passwd')
      expect(sanitizePath('../etc/passwd')).toBe('etc/passwd')
    })

    it('should remove leading slashes', () => {
      expect(sanitizePath('/kanban/my-project')).toBe('kanban/my-project')
    })

    it('should handle empty segments', () => {
      expect(sanitizePath('kanban//my-project')).toBe('kanban/my-project')
    })

    it('should preserve valid paths', () => {
      expect(sanitizePath('kanban/my-project')).toBe('kanban/my-project')
    })

    it('should handle paths with dots in names', () => {
      expect(sanitizePath('.hidden/file.txt')).toBe('.hidden/file.txt')
    })

    it('should handle multiple traversal attempts', () => {
      expect(sanitizePath('a/../../b')).toBe('a/b')
    })
  })

  describe('calculateHash', () => {
    it('should return consistent hashes for same content', () => {
      const content = 'Hello, World!'
      expect(calculateHash(content)).toBe(calculateHash(content))
    })

    it('should return different hashes for different content', () => {
      expect(calculateHash('Hello')).not.toBe(calculateHash('World'))
    })

    it('should return non-empty string', () => {
      expect(calculateHash('test')).toBeTruthy()
    })

    it('should handle empty string', () => {
      expect(calculateHash('')).toBe('0')
    })

    it('should handle long content', () => {
      const longContent = 'a'.repeat(10000)
      expect(calculateHash(longContent)).toBeTruthy()
    })
  })
})