import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
  getApps: vi.fn(() => []),
  getApp: vi.fn(),
}))

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  collection: vi.fn(),
  addDoc: vi.fn(),
  serverTimestamp: vi.fn(() => 'MOCK_TIMESTAMP'),
}))

import { submitContactMessage } from '../app/actions/contact'
import { addDoc } from 'firebase/firestore'

describe('submitContactMessage Server Action', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('rejects submissions with missing full name', async () => {
    const formData = new FormData()
    formData.append('fullName', '')
    formData.append('phone', '+91 9876543210')

    const result = await submitContactMessage({ success: false, message: '' }, formData)
    expect(result.success).toBe(false)
    expect(result.message).toBe('Please enter your full name.')
    expect(addDoc).not.toHaveBeenCalled()
  })

  it('rejects submissions with missing phone number', async () => {
    const formData = new FormData()
    formData.append('fullName', 'John Doe')
    formData.append('phone', '')

    const result = await submitContactMessage({ success: false, message: '' }, formData)
    expect(result.success).toBe(false)
    expect(result.message).toBe('Please enter your phone number.')
    expect(addDoc).not.toHaveBeenCalled()
  })

  it('rejects submissions with invalid email format', async () => {
    const formData = new FormData()
    formData.append('fullName', 'John Doe')
    formData.append('phone', '+91 9876543210')
    formData.append('email', 'not-an-email')

    const result = await submitContactMessage({ success: false, message: '' }, formData)
    expect(result.success).toBe(false)
    expect(result.message).toBe('Please enter a valid email address.')
    expect(addDoc).not.toHaveBeenCalled()
  })

  it('successfully creates appointment when valid inputs are provided', async () => {
    vi.mocked(addDoc).mockResolvedValueOnce({ id: 'doc-123' } as any)

    const formData = new FormData()
    formData.append('fullName', 'Jane Doe')
    formData.append('phone', '+91 9876543210')
    formData.append('email', 'jane@example.com')
    formData.append('branch', 'Toli Chowki')

    const result = await submitContactMessage({ success: false, message: '' }, formData)
    expect(result.success).toBe(true)
    expect(result.message).toContain('Your consultation request has been received')
    expect(addDoc).toHaveBeenCalledTimes(1)
  })

  it('handles database exceptions gracefully without crashing', async () => {
    vi.mocked(addDoc).mockRejectedValueOnce(new Error('Firestore connection timeout'))

    const formData = new FormData()
    formData.append('fullName', 'Jane Doe')
    formData.append('phone', '+91 9876543210')

    const result = await submitContactMessage({ success: false, message: '' }, formData)
    expect(result.success).toBe(false)
    expect(result.message).toBe('Something went wrong. Please try again.')
  })
})
