'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavChild = { href: string; label: string; description: string }
type NavItem = { href: string; label: string; children?: NavChild[] }

// Every link is rendered into the server HTML (dropdowns are hidden with CSS,
// not unmounted) so search engines can crawl the whole menu.
const navItems: NavItem[] = [
  {
    href: '/about',
    label: 'About Us',
    children: [
      { href: '/about', label: 'Who We Are', description: 'Our story and the people behind the work' },
      { href: '/mission', label: 'Our Mission', description: 'Healthcare for all: quality first, equity always' },
      { href: '/about#how-we-work', label: 'How We Work', description: 'Simple, transparent and accountable' },
      { href: '/about#our-community', label: 'Our Community', description: 'A core team and a network of volunteer circles' },
    ],
  },
  {
    href: '/get-involved',
    label: 'Get Involved',
    children: [
      { href: '/get-involved', label: 'Ways to Help', description: 'Find the right way for you to take part' },
      { href: '/volunteer', label: 'Volunteer', description: 'Offer your skills to a project team' },
      { href: '/donate', label: 'Donate', description: '100% of community gifts go to the work' },
      { href: '/get-involved#start-a-local-circle', label: 'Start a Local Circle', description: 'Bring us to your campus, company or neighbourhood' },
    ],
  },
  {
    href: '/stories',
    label: 'Stories',
    children: [
      { href: '/stories', label: 'All Stories', description: 'Where Heroes are showing up right now' },
      { href: '/stories#community-equity-funds', label: 'Community Equity Funds', description: 'Micro-grants for grassroots groups' },
      { href: '/stories#skills-for-justice', label: 'Skills for Justice', description: 'Volunteers powering local campaigns' },
      { href: '/stories#stories-that-shift-power', label: 'Stories that Shift Power', description: 'Amplifying lived experience' },
      { href: '/stories#care-for-every-child', label: 'Care for Every Child', description: 'Supporting children living with sickle cell' },
    ],
  },
  { href: '/contact', label: 'Contact' },
]

// Each top-level item takes one logo-heart colour (underline on hover/active, dropdown edge)
const itemColours = [
  { line: 'after:bg-logo-pink', edge: 'border-logo-pink' },
  { line: 'after:bg-logo-orange', edge: 'border-logo-orange' },
  { line: 'after:bg-logo-green', edge: 'border-logo-green' },
  { line: 'after:bg-logo-blue', edge: 'border-logo-blue' },
]

// Underline drawn with ::after; grows in on hover or when the page is active
const underline =
  "relative after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 group-hover:after:scale-x-100 data-[active=true]:after:scale-x-100"

function Chevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const pathname = usePathname()

  // Close the dropdown after choosing a page (blur so :focus-within lets go too)
  const closeDropdown = (e: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(null)
    e.currentTarget.blur()
  }

  // Escape closes any open dropdown
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="Hala Equity Heroes — home">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={52}
                height={41}
                priority
                className="h-10 w-auto"
              />
              <span className="text-white font-extrabold text-lg sm:text-sm md:text-base">
                Hala Equity Heroes
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => {
                  const active = isActive(item.href)
                  const colour = itemColours[index % itemColours.length]
                  if (!item.children) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          data-active={active}
                          className={`block px-3 py-2 text-sm font-semibold transition-colors ${underline} ${colour.line} ${active ? 'text-white' : 'text-white/80 hover:text-white'}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  }
                  const open = openMenu === item.label
                  const menuId = `menu-${item.href.slice(1)}`
                  return (
                    <li
                      key={item.href}
                      className="group relative"
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={closeDropdown}
                          aria-current={active ? 'page' : undefined}
                          data-active={active}
                          className={`py-2 pl-3 pr-1 text-sm font-semibold transition-colors ${underline} ${colour.line} ${active ? 'text-white' : 'text-white/80 group-hover:text-white'}`}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={menuId}
                          aria-label={`Show ${item.label} pages`}
                          onClick={() => setOpenMenu(open ? null : item.label)}
                          className="p-1 text-white/70 transition-colors hover:text-white"
                        >
                          <Chevron className={`h-4 w-4 transition-transform duration-200 group-hover:rotate-180 ${open ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      {/* Dropdown — opens on hover, keyboard focus, or the chevron button */}
                      <div
                        id={menuId}
                        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
                      >
                        <ul className={`w-80 border-t-4 bg-white p-2 shadow-xl ring-1 ring-slate-900/5 ${colour.edge}`}>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeDropdown}
                                className="block px-4 py-3 transition-colors hover:bg-brand-sky-tint focus-visible:bg-brand-sky-tint focus-visible:outline-none"
                              >
                                <span className="block text-sm font-bold text-brand-navy">{child.label}</span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{child.description}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/volunteer"
                className="px-5 py-2 text-sm font-bold text-white border-2 border-white/25 hover:bg-white/10 transition-colors duration-200"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="px-5 py-2.5 text-sm font-bold text-brand-navy bg-brand-amber hover:bg-brand-amber-dark transition-colors duration-200 shadow-md shadow-brand-amber/30"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div aria-hidden className="flex h-1">
          <span className="flex-1 bg-logo-pink" />
          <span className="flex-1 bg-logo-orange" />
          <span className="flex-1 bg-logo-green" />
          <span className="flex-1 bg-logo-blue" />
        </div>
      </header>

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
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-brand-navy border-l border-white/10 z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <nav aria-label="Mobile">
                  <ul className="space-y-1">
                    {navItems.map((item) => {
                      const expanded = mobileSection === item.label
                      return (
                        <li key={item.href}>
                          {item.children ? (
                            <>
                              <button
                                type="button"
                                aria-expanded={expanded}
                                onClick={() => setMobileSection(expanded ? null : item.label)}
                                className="flex w-full items-center justify-between py-2.5 text-left text-base font-semibold text-white"
                              >
                                {item.label}
                                <Chevron className={`h-5 w-5 text-white/75 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                              </button>
                              {expanded && (
                                <ul className="mb-2 space-y-1 border-l border-white/15 pl-4">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-1.5 text-sm text-white/75 hover:text-white"
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2.5 text-base font-semibold text-white"
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </nav>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <Link
                    href="/volunteer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center text-sm font-bold text-white border-2 border-white/25 hover:bg-white/10 transition-colors duration-200"
                  >
                    Volunteer
                  </Link>
                  <Link
                    href="/donate"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-center text-sm font-bold text-brand-navy bg-brand-amber hover:bg-brand-amber-dark transition-colors duration-200 shadow-md"
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
