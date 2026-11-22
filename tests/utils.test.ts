import { describe, it, expect } from 'vitest'
import { cn } from '../lib/utils'

describe('cn utility', () => {
  it('combines simple class names', () => {
    expect(cn('btn', 'btn-primary')).toBe('btn btn-primary')
  })

  it('handles conditional classes properly', () => {
    const isActive = true
    const isDisabled = false
    expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active')
  })

  it('resolves Tailwind conflicts favoring the last class', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('handles null, undefined, and empty strings gracefully', () => {
    expect(cn('valid', null, undefined, '', 'also-valid')).toBe('valid also-valid')
  })
})
