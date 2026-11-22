import { describe, it, expect } from 'vitest'
import { formatCurrency, getDashboardStats, getStatusBreakdown, monthlyAppointments, doctors } from '../lib/data'

describe('Data models and helper functions', () => {
  it('formats currency with two decimal places', () => {
    expect(formatCurrency(100)).toBe('$100.00')
    expect(formatCurrency(0)).toBe('$0.00')
    expect(formatCurrency(49.99)).toBe('$49.99')
  })

  it('returns valid initial structure for dashboard stats', () => {
    const stats = getDashboardStats()
    expect(stats).toHaveProperty('total')
    expect(stats).toHaveProperty('pending')
    expect(stats).toHaveProperty('confirmed')
    expect(stats).toHaveProperty('completed')
    expect(stats).toHaveProperty('cancelled')
    expect(stats).toHaveProperty('revenue')
    expect(typeof stats.total).toBe('number')
  })

  it('verifies that doctor records conform to the Doctor schema', () => {
    expect(Array.isArray(doctors)).toBe(true)
    expect(doctors.length).toBeGreaterThan(0)

    for (const doc of doctors) {
      expect(doc.id).toBeDefined()
      expect(typeof doc.name).toBe('string')
      expect(doc.name.length).toBeGreaterThan(0)
      expect(typeof doc.specialty).toBe('string')
      expect(doc.specialty.length).toBeGreaterThan(0)
      expect(typeof doc.branch).toBe('string')
      expect(typeof doc.status).toBe('string')
      expect(typeof doc.phone).toBe('string')
      expect(typeof doc.email).toBe('string')
    }
  })

  it('monthlyAppointments and getStatusBreakdown return valid arrays', () => {
    expect(Array.isArray(monthlyAppointments())).toBe(true)
    expect(Array.isArray(getStatusBreakdown())).toBe(true)
  })
})
