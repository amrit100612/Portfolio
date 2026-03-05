import { useState } from 'react'
import { profile } from '../data/portfolioData'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-wrap">
        <a href="#home" className="logo">
          AK
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="mobile-toggle"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu reveal-fade">
          <nav>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="mobile-nav-link"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              className="mobile-nav-link"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
