'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111111] shadow-2xl shadow-black/40' : 'bg-[#111111]/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo — oversized, overflows below the header bar */}
        <Link
          href="/"
          className="relative z-10 flex items-start self-stretch group"
          aria-label="Rev-Tech Mechanical home"
        >
          <Image
            src="/images/logo.png"
            alt="Rev-Tech Mechanical"
            width={300}
            height={249}
            priority
            className="h-32 w-auto mt-2 drop-shadow-lg transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === link.href ? 'text-[#E61515]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#E61515] transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Phone */}
        <a
          href="tel:0733552248"
          id="nav-phone-cta"
          className="hidden md:flex items-center gap-2 bg-[#E61515] hover:bg-[#C01010] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" />
          (07) 3355 2248
        </a>

        {/* Mobile burger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#111111] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-[#E61515]/10 text-[#E61515]'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:0733552248"
              className="flex items-center gap-2 mt-2 bg-[#E61515] text-white font-semibold px-4 py-3 rounded-lg text-sm"
            >
              <Phone className="w-4 h-4" />
              Call (07) 3355 2248
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
