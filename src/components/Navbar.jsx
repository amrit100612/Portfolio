import { useState } from 'react'
import { profile } from '../data/portfolioData'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Portfolio', highlight: true },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-stone-900/15 bg-[#f3eee4]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.12em] text-stone-900 sm:text-base">
          {profile.name}
        </a>

        <nav className="hidden items-center text-sm uppercase tracking-[0.1em] text-stone-700 md:flex">
          {navLinks.map((link, index) => (
            <span key={link.id} className="inline-flex items-center">
              <a
                href={`#${link.id}`}
                className={`transition hover:text-stone-900 ${link.highlight ? 'font-semibold text-stone-900' : ''}`}
              >
                {link.label}
              </a>
              {index < navLinks.length - 1 && <span className="mx-3 text-stone-500">|</span>}
            </span>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="border border-stone-900/20 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-stone-800 transition hover:bg-white sm:text-sm"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center border border-stone-900/20 bg-white px-3 py-2 text-sm font-medium text-stone-900 transition hover:border-stone-900/35 md:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-stone-900/10 bg-[#f3eee4] px-4 py-3 md:hidden sm:px-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className={`px-3 py-2 text-sm uppercase tracking-[0.08em] transition ${
                  link.highlight
                    ? 'font-semibold text-stone-900'
                    : 'text-stone-700 hover:bg-white hover:text-stone-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
            className="mt-3 inline-flex border border-stone-900/20 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-stone-900"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
