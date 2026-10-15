"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Doctor", href: "/doctor" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href.startsWith("/") && !href.includes("#")
      ? pathname === href
      : false

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <Logo className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105" />

          <div className="leading-tight">
            <h1 className="font-display text-xl font-bold text-[#2B1D28] transition-colors duration-300 group-hover:text-pink-600">
              Hira Fertility
            </h1>

            <p className="text-sm font-medium text-pink-500">
              Center
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
<div className="hidden items-center gap-8 lg:flex">

  <Link
    href="/"
    className={`relative text-[15px] font-semibold transition-all duration-300 hover:text-pink-600 ${
      pathname === "/" ? "text-pink-600" : "text-gray-700"
    }`}
  >
    Home
    {pathname === "/" && (
      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-pink-600" />
    )}
  </Link>

  {/* About Dropdown */}
  <div className="group relative">

    <button className="flex items-center gap-1 text-[15px] font-semibold text-gray-700 transition hover:text-pink-600">
      About Us
      <ChevronDown className="h-4 w-4" />
    </button>

    <div className="invisible absolute left-0 top-full mt-3 w-60 rounded-xl bg-white shadow-xl ring-1 ring-pink-100 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">

      <Link
        href="/about"
        className="block px-5 py-3 hover:bg-pink-50"
      >
        About Hira Fertility
      </Link>

      <Link
        href="/about/leadership"
        className="block px-5 py-3 hover:bg-pink-50"
      >
        Leadership Team
      </Link>

      <Link
        href="/about/awards"
        className="block px-5 py-3 hover:bg-pink-50"
      >
        Awards & Recognition
      </Link>

      <Link
        href="/about/gallery"
        className="block px-5 py-3 hover:bg-pink-50"
      >
        Gallery
      </Link>

    </div>

  </div>

  <Link href="/doctor" className="text-[15px] font-semibold text-gray-700 hover:text-pink-600">
    Our Doctor
  </Link>

  <Link href="/services" className="text-[15px] font-semibold text-gray-700 hover:text-pink-600">
    Services
  </Link>

  <Link href="/pricing" className="text-[15px] font-semibold text-gray-700 hover:text-pink-600">
    Pricing
  </Link>

  <Link href="/contact" className="text-[15px] font-semibold text-gray-700 hover:text-pink-600">
    Contact
  </Link>

</div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-pink-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-pink-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}