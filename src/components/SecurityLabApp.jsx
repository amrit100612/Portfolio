import { useEffect, useMemo, useRef, useState } from 'react'
import { profile, projects, skills } from '../data/portfolioData'

const themes = {
  crimson: ['Zero-Day Crimson', '#08080A', '#FF2E4C'],
  cobalt: ['Phantom Cobalt', '#050914', '#38BDF8'],
  emerald: ['Venomous Emerald', '#060B09', '#10B981'],
  ultraviolet: ['Synthwave Ultraviolet', '#090612', '#C084FC'],
  gold: ['Tactical Gold', '#0A0A0A', '#EAB308'],
}

const modules = [
  ['overview', 'overview'],
  ['arsenal', 'arsenal'],
  ['operations', 'operations'],
  ['intel', 'intel'],
  ['terminal', 'terminal'],
  ['secure-comms', 'secure-comms'],
]

const intel = [
  ['2026', 'PCAP Threat Analyzer', 'HIGH', 'Detection engineering / network traffic triage'],
  ['2025', 'GSSoC contribution', 'OPEN', 'Open-source feature and documentation work'],
  ['2024', 'Deloitte cyber simulation', 'LAB', 'Threat detection, logs, and incident reporting'],
  ['2024', 'Hacktoberfest Level 4', 'OPEN', 'Top 15% global contributor milestone'],
]

const projectLinks = {
  'CipherX — Encryption/Decryption CLI Tool': ['https://github.com/amrit100612/CipherX', 'https://cipherx404.streamlit.app/'],
  'PCAP Threat Analyzer': ['https://github.com/amrit100612/PCAP-Threat-Analyzer', 'https://pcap-threat-analyzer.streamlit.app/'],
  'Loan Approval Prediction using Machine Learning': ['https://github.com/amrit100612/Loan-Prediction', 'https://huggingface.co/spaces/amrit1209/Loan_Prediction'],
}

const terminalCommands = {
  help: 'help  whoami  skills  projects  scan  matrix  clear',
  whoami: 'amrit.k / cybersecurity analyst / defensive builder',
  skills: 'python · java · network security · threat detection · cryptography',
  projects: 'CipherX · PCAP Threat Analyzer · Loan Approval Prediction',
  scan: 'surface scan complete: 0 critical / 3 monitored / 100% curiosity',
  matrix: 'red team / blue team / secure software / applied ML',
}

function useThreatCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const context = canvas.getContext('2d')
    const nodes = Array.from({ length: 34 }, (_, index) => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .00035, vy: (Math.random() - .5) * .00035, phase: index }))
    let frame
    let pointer = { x: -.5, y: -.5 }
    const resize = () => { canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio; context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0) }
    const move = (event) => { pointer = { x: event.clientX, y: event.clientY } }
    const draw = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      context.clearRect(0, 0, width, height)
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > 1) node.vx *= -1
        if (node.y < 0 || node.y > 1) node.vy *= -1
        const x = node.x * width
        const y = node.y * height
        const distance = Math.hypot(pointer.x - x, pointer.y - y)
        const alpha = distance < 180 ? .75 : .22
        context.fillStyle = `rgba(0,240,255,${alpha})`
        context.fillRect(x, y, 2, 2)
        nodes.forEach((other) => {
          const ox = other.x * width
          const oy = other.y * height
          const gap = Math.hypot(x - ox, y - oy)
          if (gap < 130) { context.strokeStyle = `rgba(112,0,255,${(1 - gap / 130) * .18})`; context.beginPath(); context.moveTo(x, y); context.lineTo(ox, oy); context.stroke() }
        })
      })
      frame = requestAnimationFrame(draw)
    }
    resize(); window.addEventListener('resize', resize); window.addEventListener('pointermove', move); frame = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move) }
  }, [canvasRef])
}

function BootScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setProgress((value) => {
      if (value >= 100) { clearInterval(timer); setTimeout(onComplete, 350); return 100 }
      return value + 4
    }), 45)
    return () => clearInterval(timer)
  }, [onComplete])
  const dump = ['A4 7F 19 C2', '00 FF 2A 6D', '9B 10 38 BD', 'DE AD BE EF', '7C 84 FC 2D', '42 0C 11 AE', 'F0 0D 55 19', '13 37 88 C0', 'AB 91 0E 42', '6D 2A FF 08', '10 98 B3 7A', 'C4 20 7F 91', 'E2 04 1A 6B', '5C 3D 00 F1']
  return <div className="aether-boot"><div className="boot-dump">{dump.map((value, index) => <span key={value}>0x{value} // handshake.{index + 1} verified</span>)}</div><div className="boot-core"><div className="boot-ring" style={{ '--progress': `${progress * 3.6}deg` }}><strong>{progress}%</strong></div><p>AMRIT-OS v4.2</p><span>INITIALIZING AMRIT-OS / DECRYPTING RSA KEYS</span><button onClick={onComplete}>Skip handshake ↗</button></div><div className="boot-shutter boot-shutter-left" /><div className="boot-shutter boot-shutter-right" /></div>
}

function Terminal({ setModule }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState(['AMRIT-OS terminal / secure zsh', 'type help to enumerate commands'])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const commandNames = Object.keys(terminalCommands)
  const submittedCommands = history.filter((line) => line.startsWith('$ ')).map((line) => line.slice(2))
  const submit = (event) => {
    event.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command) return
    if (command === 'clear') setHistory([])
    else { setHistory((current) => [...current, `$ ${command}`, terminalCommands[command] || `command not found: ${command}`]); if (command === 'scan') setModule('intel') }
    setInput('')
    setHistoryIndex(-1)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') { event.preventDefault(); const next = Math.max(0, historyIndex < 0 ? submittedCommands.length - 1 : historyIndex - 1); setHistoryIndex(next); setInput(submittedCommands[next] || '') }
    if (event.key === 'ArrowDown') { event.preventDefault(); const next = Math.min(submittedCommands.length, historyIndex + 1); setHistoryIndex(next); setInput(submittedCommands[next] || '') }
    if (event.key === 'Tab') { event.preventDefault(); const match = commandNames.find((name) => name.startsWith(input.toLowerCase())); if (match) setInput(match) }
  }
  return <div className="aether-terminal"><div className="terminal-top"><span><i /><i /><i /></span><b>root@amrit-os:~</b><small>zsh / aes-256</small></div><div className="terminal-output">{history.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><form onSubmit={submit}><span>➜</span><input value={input} onChange={(event) => { setInput(event.target.value); setHistoryIndex(-1) }} onKeyDown={handleKeyDown} placeholder="type help..." aria-label="AMRIT-OS terminal" autoComplete="off" /></form></div>
}

function AppShell() {
  const [booted, setBooted] = useState(false)
  const [module, setModule] = useState('overview')
  const [theme, setTheme] = useState('crimson')
  const [recon, setRecon] = useState(false)
  const [drawer, setDrawer] = useState(null)
  const [message, setMessage] = useState('')
  const [toast, setToast] = useState('')
  const [encrypting, setEncrypting] = useState(false)
  const [utc, setUtc] = useState(() => new Date().toISOString().slice(11, 19))
  const canvasRef = useRef(null)
  useThreatCanvas(canvasRef)
  const activeTheme = themes[theme]
  const activeSkills = useMemo(() => skills.slice(0, 6), [])
  useEffect(() => { const timer = setInterval(() => setUtc(new Date().toISOString().slice(11, 19)), 1000); return () => clearInterval(timer) }, [])
  const spotlight = (event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`); event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`) }
  const copyKey = async () => { await navigator.clipboard?.writeText('-----BEGIN PGP PUBLIC KEY-----\\nAMRIT.K / AETHER-OS\\n-----END PGP PUBLIC KEY-----'); setToast('PGP fingerprint copied'); setTimeout(() => setToast(''), 2200) }
  if (!booted) return <BootScreen onComplete={() => setBooted(true)} />
  return <div className={`aether-os ${recon ? 'is-recon' : ''}`} style={{ '--theme-bg': activeTheme[1], '--theme-accent': activeTheme[2] }}>
    <canvas className="aether-canvas" ref={canvasRef} aria-hidden="true" />
    <header className="aether-command-bar"><div className="aether-brand"><span>▲</span> AMRIT-OS <small>v4.2</small></div><div className="aether-telemetry"><span>UTC {utc}</span><b>CPU 42%</b><b>RAM 2.8GB</b><b className="telemetry-alert">THREAT LOW</b></div><div className="aether-controls"><select value={theme} onChange={(event) => setTheme(event.target.value)} aria-label="Theme palette">{Object.entries(themes).map(([key, value]) => <option value={key} key={key}>{value[0]}</option>)}</select><button className={recon ? 'is-active' : ''} onClick={() => setRecon((value) => !value)}>◉ RECON X-RAY</button></div></header>
    <nav className="aether-dock">{modules.map(([id, label]) => <button className={module === id ? 'is-active' : ''} key={id} onClick={() => setModule(id)}><span>~/</span>{label}</button>)}</nav>
    <main className="aether-workspace">
      {module === 'overview' && <section className="aether-module aether-overview"><div className="module-intro"><p className="aether-kicker">01 / EXECUTIVE DOSSIER</p><h1>Security is not a feature.<br /><em>It&apos;s the operating system.</em></h1><p>Amrit Kumar is a cybersecurity professional building secure software, practical detection systems, and threat-aware experiences.</p><div className="module-actions"><button onClick={() => setModule('operations')}>Open operations ↗</button><a href={profile.resume} target="_blank" rel="noreferrer">Download dossier ↓</a></div></div><div className="overview-grid"><article className="aether-card clearance-card"><span>SECURITY CLEARANCE</span><strong>DEFENSIVE<br />BUILDER</strong><small>Network security / cryptography / secure software</small><i>AVAILABLE FOR IMPACT</i></article><article className="aether-card counter-card"><span>THREAT SURFACE MONITORED</span><strong>03</strong><small>Active build systems</small><div className="waveform" /></article><article className="aether-card"><span>CORE SIGNAL</span><strong>150+</strong><small>DSA problems solved</small></article><article className="aether-card"><span>STATUS</span><strong className="status-online">ONLINE</strong><small>Open to security roles and collaborations</small></article></div></section>}
      {module === 'arsenal' && <section className="aether-module"><div className="module-heading"><p className="aether-kicker">02 / TECHNICAL ARSENAL</p><h2>Every tool has a threat model.</h2><p>Interactive capability matrix for the systems I use to investigate, build, and defend.</p></div><div className="arsenal-matrix">{activeSkills.map((item, index) => <article className="aether-card arsenal-node" onMouseMove={spotlight} key={item.category}><span>0{index + 1} / {item.category.toUpperCase()}</span><h3>{item.category}</h3><p>{item.detail}</p><div className="node-pulse" /></article>)}</div></section>}
      {module === 'operations' && <section className="aether-module"><div className="module-heading"><p className="aether-kicker">03 / OPERATIONS</p><h2>Built for hostile inputs.</h2><p>Open a dossier to inspect the challenge, execution, architecture, and impact.</p></div><div className="operation-grid">{projects.map((project, index) => <button className="aether-card operation-card" onMouseMove={spotlight} key={project.title} onClick={() => setDrawer(project)}><span>OPERATION 0{index + 1} / {project.type}</span><h3>{project.title.replace(' — Encryption/Decryption CLI Tool', '')}</h3><p>{project.solution}</p><div>{project.stack.slice(0, 4).map((tag) => <b key={tag}>{tag}</b>)}</div><strong>OPEN DOSSIER ↗</strong></button>)}</div></section>}
      {module === 'intel' && <section className="aether-module"><div className="module-heading"><p className="aether-kicker">04 / THREAT INTELLIGENCE</p><h2>Signals, not noise.</h2><p>Research, open source, and security learning logs from the field.</p></div><div className="intel-log">{intel.map(([year, title, severity, detail]) => <article className="aether-card" key={title}><span>{year} / {severity}</span><div><h3>{title}</h3><p>{detail}</p></div><b>LOGGED</b></article>)}</div></section>}
      {module === 'terminal' && <section className="aether-module terminal-module"><div className="module-heading"><p className="aether-kicker">05 / COMMAND LINE</p><h2>Talk to the system.</h2><p>Try <code>help</code>, <code>whoami</code>, <code>skills</code>, <code>projects</code>, <code>scan</code>, or <code>matrix</code>.</p></div><Terminal setModule={setModule} /></section>}
      {module === 'secure-comms' && <section className="aether-module comms-module"><div className="module-heading"><p className="aether-kicker">06 / SECURE COMMS</p><h2>Transmit securely.</h2><p>A private channel for project ideas, security work, and serious conversations.</p></div><div className="comms-grid"><div className="aether-card comms-form"><label>MESSAGE PAYLOAD<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Write an encrypted signal..." /></label><button disabled={encrypting || !message.trim()} onClick={() => { setEncrypting(true); setTimeout(() => { setEncrypting(false); setMessage(''); setToast('AES-256 transmission queued'); setTimeout(() => setToast(''), 2200) }, 1000) }}>{encrypting ? 'Encrypting payload...' : 'Encrypt & transmit ↗'}</button></div><div className="aether-card comms-key"><span>PUBLIC KEY / FINGERPRINT</span><code>AE42 7F91 0C11<br />AMRIT KUMAR / AETHER-OS</code><button onClick={copyKey}>Copy PGP key</button><button onClick={async () => { await navigator.clipboard?.writeText(profile.email); setToast('Email address copied'); setTimeout(() => setToast(''), 2200) }}>Copy direct email</button><a href={`mailto:${profile.email}`}>Open email client ↗</a></div></div></section>}
    </main>
    {drawer && <><button className="drawer-backdrop" aria-label="Close dossier backdrop" onClick={() => setDrawer(null)} /><aside className="dossier-drawer" aria-label={`${drawer.title} dossier`}><button className="drawer-close" onClick={() => setDrawer(null)}>× CLOSE</button><p className="aether-kicker">KILL-CHAIN DOSSIER / {drawer.type}</p><h2>{drawer.title}</h2><p>{drawer.solution}</p><h3>EXECUTION LOG</h3><ol>{drawer.architecture.map((item) => <li key={item}>{item}</li>)}</ol><div className="drawer-links"><a href={projectLinks[drawer.title][0]} target="_blank" rel="noreferrer">GitHub ↗</a><a href={projectLinks[drawer.title][1]} target="_blank" rel="noreferrer">Live demo ↗</a></div></aside></>}
    {toast && <div className="aether-toast">{toast}</div>}
  </div>
}

export default function SecurityLabApp() {
  return <AppShell />
}
