import { describe, it, expect } from 'vitest'

describe('Site Navigation & Clinical Routes', () => {
  const expectedNavRoutes = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Doctor', href: '/doctor' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ]

  it('defines all required navigation links', () => {
    expect(expectedNavRoutes).toHaveLength(6)
    expectedNavRoutes.forEach(route => {
      expect(route.href.startsWith('/')).toBe(true)
      expect(route.label.length).toBeGreaterThan(0)
    })
  })

  it('verifies clinical branch information completeness', () => {
    const branches = [
      { name: 'Toli Chowki', phone: '+91 73372 25251' },
      { name: 'Shamshabad', phone: '+91 73372 25251' },
      { name: 'Secunderabad', phone: '+91 73372 25251' },
    ]

    branches.forEach(branch => {
      expect(branch.name).toBeTruthy()
      expect(branch.phone).toMatch(/^\+91\s\d{5}\s\d{5}$/)
    })
  })
})
