import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useErrorPopup } from '../components/ui/ErrorPopup'
import { useAutoSave } from '../components/ui/AutoSaveIndicator'
import { deletePaths } from '../lib/utils'

describe('workspace bulk delete', () => {
  it('sends one request per path without splitting filenames that contain commas', async () => {
    const paths = ['folder/a,b.md', 'folder/notes.md']
    const request = vi.fn().mockResolvedValue({ ok: true } as Response)

    await deletePaths(paths, request as unknown as typeof fetch)

    expect(request).toHaveBeenCalledTimes(2)
    const sentPaths = request.mock.calls.map((call) => {
      const init = call[1] as RequestInit
      return JSON.parse(init.body as string).path
    })
    expect(sentPaths).toEqual(paths)
  })
})

describe('useErrorPopup hook', () => {
  it('should initialize with null error', () => {
    const { result } = renderHook(() => useErrorPopup())
    expect(result.current.error).toBeNull()
  })

  it('should show error', async () => {
    const { result } = renderHook(() => useErrorPopup())

    await act(async () => {
      result.current.showError('New error')
    })

    expect(result.current.error).toBe('New error')
  })

  it('should dismiss error', async () => {
    const { result } = renderHook(() => useErrorPopup())

    await act(async () => {
      result.current.showError('New error')
      result.current.dismissError()
    })

    expect(result.current.error).toBeNull()
  })
})

describe('useAutoSave hook', () => {
  it('should initialize with idle state', () => {
    const { result } = renderHook(() => useAutoSave())
    expect(result.current.state).toBe('idle')
  })

  it('should mark as unsaved', async () => {
    const { result } = renderHook(() => useAutoSave())

    await act(async () => {
      result.current.markUnsaved()
    })

    expect(result.current.state).toBe('unsaved')
  })

  it('should reset state', async () => {
    const { result } = renderHook(() => useAutoSave())

    await act(async () => {
      result.current.markUnsaved()
      result.current.reset()
    })

    expect(result.current.state).toBe('idle')
  })

  it('should save successfully', async () => {
    const { result } = renderHook(() => useAutoSave())
    const saveFn = vi.fn().mockResolvedValue(undefined)

    await act(async () => {
      await result.current.save(saveFn)
    })

    expect(result.current.state).toBe('saved')
    expect(result.current.lastSaved).toBeInstanceOf(Date)
  })

  it('should handle save error', async () => {
    const { result } = renderHook(() => useAutoSave())
    const saveFn = vi.fn().mockRejectedValue(new Error('Save failed'))

    await act(async () => {
      await result.current.save(saveFn)
    })

    expect(result.current.state).toBe('error')
    expect(result.current.error).toBe('Save failed')
  })
})
