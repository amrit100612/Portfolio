import { profile } from '../data/portfolioData'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'dsa', label: 'DSA' },
  { id: 'system-design', label: 'System Design' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
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
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20 sm:text-sm"
        >
          Resume
        </a>
      </div>
    </header>
  )
}
