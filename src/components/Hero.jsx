import { useEffect, useRef, useState } from 'react'
import { heroRoles, profile } from '../data/portfolioData'

const commandResponses = {
  help: [
    'Available commands:',
    '  help              Show this help menu',
    '  about             Show profile summary',
    '  skills            Show technical stack',
    '  projects          List featured projects',
    '  contact           Show contact links',
    '  resume            Open resume',
    '  github            Open GitHub profile',
    '  linkedin          Open LinkedIn profile',
    '  clear             Clear the terminal',
  ],
  about: [
    'Name: Amrit Kumar',
    'Role: Threat-aware Builder',
    'Focus: Cybersecurity, secure software, systems thinking',
  ],
  skills: [
    'Languages: Java, Python, C, JavaScript',
    'Security: Secure coding, threat thinking, systems awareness',
    'Web: React, REST APIs, HTML5, CSS3',
    'Data: scikit-learn, Pandas, NumPy, Git, Linux',
  ],
  projects: [
    'Featured projects:',
    '  • CipherX - Encryption/Decryption Tool',
    '  • PCAP Threat Analyzer',
    '  • Loan Approval Prediction',
  ],
  contact: [
    'Email: amritkum1209@gmail.com',
    'GitHub: github.com/amrit100612',
    'LinkedIn: linkedin.com/in/amrit100612',
    'Website: amritkumar.me',
  ],
  resume: ['Opening resume link...'],
  github: ['Opening GitHub profile...'],
  linkedin: ['Opening LinkedIn profile...'],
  clear: [],
}

export default function Hero() {
  const typedRef = useRef(null)
  const inputRef = useRef(null)
  const [terminalInput, setTerminalInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', value: 'Welcome to AmritOS' },
    { type: 'output', value: 'Type "help" to explore the full profile.' },
  ])

  useEffect(() => {
    let typedInstance

    const setupTyping = async () => {
      const Typed = (await import('typed.js')).default
      typedInstance = new Typed(typedRef.current, {
        strings: heroRoles,
        startDelay: 250,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1200,
        smartBackspace: true,
        cursorChar: '|',
        loop: true,
      })
    }

    setupTyping()

    return () => {
      if (typedInstance) {
        typedInstance.destroy()
      }
    }
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const command = terminalInput.trim().toLowerCase()
    if (!command) {
      setTerminalInput('')
      return
    }

    if (command === 'clear') {
      setHistory([])
      setTerminalInput('')
      return
    }

    const responses = commandResponses[command] || [
      `Command not found: ${command}`,
      'Type "help" to view available commands.',
    ]

    setHistory((prev) => [
      ...prev,
      { type: 'input', value: command },
      ...responses.map((value) => ({ type: 'output', value })),
    ])
    setTerminalInput('')

    if (typeof window !== 'undefined' && command === 'resume') {
      window.open(profile.resume, '_blank', 'noopener,noreferrer')
    }

    if (typeof window !== 'undefined' && command === 'github') {
      window.open(profile.github, '_blank', 'noopener,noreferrer')
    }

    if (typeof window !== 'undefined' && command === 'linkedin') {
      window.open(profile.linkedin, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy" data-aos="fade-up" data-aos-duration="900">
          <p className="hero-kicker">Cybersecurity • Secure software • Systems thinking</p>
          <h1 className="hero-name">Amrit Kumar</h1>
          <p className="typed-line">
            I build <strong ref={typedRef} />
          </p>
          <p className="hero-desc">
            I’m a cybersecurity-focused student who enjoys turning ideas into reliable systems, careful architecture, and practical builds that actually matter.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">Hands-on builds</span>
            <span className="hero-badge">Security-minded</span>
            <span className="hero-badge">Linux + code</span>
          </div>

          <div className="btn-row">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-secondary" href={profile.resume} target="_blank" rel="noreferrer">Download Resume</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-label">Focus</span>
              <span className="stat-value">Defensive Thinking</span>
            </div>
            <div className="hero-stat">
              <span className="stat-label">Stack</span>
              <span className="stat-value">Python / Java / Linux</span>
            </div>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="zoom-in" data-aos-duration="1000">
          <div className="hero-panel terminal-shell">
            <div className="hero-panel-top">
              <span>portfolio@amrit:~</span>
              <span className="panel-pill">interactive shell</span>
            </div>
            <div className="hero-panel-body terminal-body">
              <div className="terminal-output">
                {history.map((entry, index) => (
                  <div key={`${entry.type}-${index}`} className={`terminal-line ${entry.type}`}>
                    {entry.type === 'input' ? (
                      <>
                        <span className="terminal-prompt">$</span>
                        <span>{entry.value}</span>
                      </>
                    ) : (
                      <span>{entry.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <form className="terminal-form" onSubmit={handleSubmit}>
                <span className="terminal-prompt">$</span>
                <input
                  ref={inputRef}
                  className="terminal-input"
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal command"
                  placeholder="Type help"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
