import { useState } from 'react'
import { profile } from '../data/portfolioData'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'dsa', label: 'DSA' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'tracker', label: 'Tracker' },
  { id: 'blog', label: 'Blog' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'resume-tips', label: 'Resume Tips' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white sm:text-base">
          {profile.name}
        </a>
        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20 sm:text-sm"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/10 md:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-xl md:hidden sm:px-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-cyan-200"
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
            className="mt-3 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
