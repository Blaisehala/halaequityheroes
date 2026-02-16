'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { href: '#mission', label: 'Our Mission' },
  { href: '/about', label: 'About Us' },
  { href: '#initiatives', label: 'Get Involved' },
  { href: '/stories', label: 'Stories' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c2340]/95 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white font-bold">
                HE
              </div>
              {/* <span className="text-white font-semibold text-sm sm:text-base hidden sm:block">
                Hala Equity Heroes
              </span> */}
              <span className="text-white font-semibold text-lg sm:text-sm md:text-base">
  Hala Equity Heroes
</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">

            <Link
                href="/mission"
                className="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                mission
              </Link>
              <Link
                href="/volunteer"
                className="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Volunteer
              </Link>


              <Link
                href="/donate"
                className="px-4 py-2 text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-[#0c2340] border-l border-white/10 z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Navigation Links */}
                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-white/80 hover:text-white text-base font-medium transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <Link
                    href="/volunteer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-200"
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/donate"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center text-sm font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}