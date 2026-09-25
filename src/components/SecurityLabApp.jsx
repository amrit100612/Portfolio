import { useEffect, useState } from 'react'
import { profile, projects } from '../data/portfolioData'

const routes = [
  ['/', '01', 'Home'],
  ['/about', '02', 'About'],
  ['/projects', '03', 'Projects'],
  ['/security-lab', '04', 'Security Lab'],
  ['/skills', '05', 'Skills'],
  ['/journey', '06', 'Journey'],
  ['/contact', '07', 'Contact'],
]

const projectMeta = {
  'PCAP Threat Analyzer': {
    slug: 'pcap-threat-analyzer',
    category: 'Cybersecurity',
    features: ['PCAP traffic analysis', 'Port scan detection', 'Brute-force detection', 'Suspicious DNS / HTTP activity', 'Rule-based risk scoring', 'CSV investigation reports'],
  },
  'CipherX — Encryption/Decryption CLI Tool': {
    slug: 'cipherx',
    category: 'Cybersecurity',
    features: ['Caesar + XOR hybrid cipher', 'Bidirectional encode / decode', 'Input validation', 'CIA Triad', 'Threat modelling'],
  },
  'Loan Approval Prediction using Machine Learning': {
    slug: 'loan-prediction',
    category: 'Machine Learning',
    features: ['EDA and data cleaning', 'Feature engineering', 'Model evaluation', 'SMOTE', 'Streamlit deployment'],
  },
}

const projectLinks = {
  'PCAP Threat Analyzer': {
    github: 'https://github.com/amrit100612/PCAP-Threat-Analyzer',
    live: 'https://pcap-threat-analyzer.streamlit.app/',
  },
  'CipherX — Encryption/Decryption CLI Tool': {
    github: 'https://github.com/amrit100612/CipherX',
    live: 'https://cipherx404.streamlit.app/',
  },
  'Loan Approval Prediction using Machine Learning': {
    github: 'https://github.com/amrit100612/Loan-Prediction',
    live: 'https://huggingface.co/spaces/amrit1209/Loan_Prediction',
  },
}

const skillGroups = {
  Cybersecurity: ['Applied Cryptography', 'Network Security', 'OWASP Top 10', 'Vulnerability Analysis', 'Penetration Testing', 'Risk Assessment', 'Incident Response', 'Secure Coding', 'CIA Triad', 'CTF'],
  Programming: ['Python', 'Java', 'C', 'Bash', 'SQL'],
  Tools: ['Linux', 'Wireshark', 'Nmap', 'TryHackMe', 'Git', 'GitHub', 'Streamlit', 'Splunk'],
  Networking: ['TCP/IP', 'PCAP Analysis', 'Scapy', 'DNS / HTTP Analysis'],
  'ML / Data': ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'Model Evaluation'],
  Web: ['React.js', 'HTML5', 'CSS3', 'REST APIs'],
  'CS Fundamentals': ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
}

const journey = [
  ['2023', 'B.Tech started', 'Haldia Institute of Technology, CSE (Cyber Security).'],
  ['2024', 'Cybersecurity foundations', 'Deloitte Australia job simulation and Hacktoberfest Level 4.'],
  ['2025', 'Open source and security labs', 'GSSoC contribution and TryHackMe practice across Linux, networking, cryptography, and web security.'],
  ['2026', 'Applied security building', 'ISOEH training and PCAP Threat Analyzer development.'],
  ['2027', 'Expected graduation', 'B.Tech CSE (Cyber Security).'],
]

function getPath() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  return hash.startsWith('/projects/') ? hash : hash.replace(/\/$/, '') || '/'
}

function Link({ href, children, className = '', onClick }) {
  return <a className={className} href={`#${href}`} onClick={onClick}>{children}</a>
}

function SectionHeader({ index, eyebrow, title, children }) {
  return <div className="lab-section-header"><div><p className="lab-kicker">{index} / {eyebrow}</p><h2>{title}</h2></div>{children && <p className="lab-section-note">{children}</p>}</div>
}

function Metric({ label, value, tone = 'cyan' }) {
  return <div className="lab-metric"><span>{label}</span><strong className={`tone-${tone}`}>{value}</strong></div>
}

function ProjectVisual({ project }) {
  if (project.title === 'PCAP Threat Analyzer') return <div className="lab-visual pcap-visual"><div className="pcap-grid" /><div className="pcap-nodes"><i /><i /><i /><i /><i /></div><div className="risk-list"><span>PORT SCAN <b>HIGH</b></span><span>BRUTE FORCE <b className="risk-medium">MEDIUM</b></span><span>DNS ACTIVITY <b>HIGH</b></span><span>HTTP ACTIVITY <b className="risk-medium">MEDIUM</b></span></div><small>SAMPLE / DEMO VISUALIZATION</small></div>
  if (project.title === 'CipherX — Encryption/Decryption CLI Tool') return <div className="lab-visual cipher-visual"><div><span>INPUT</span><strong>Hello World</strong></div><b>↓</b><div><span>CAESAR + XOR</span><strong>••••••••••</strong></div><small>ENC / DEC PIPELINE</small></div>
  return <div className="lab-visual loan-visual"><span>MODEL ANALYSIS</span><div><b>614</b><small>ROWS</small></div><div><b>13</b><small>FEATURES</small></div><div><b>SMOTE</b><small>PREPROCESSING</small></div><small>STREAMLIT / MODEL WORKFLOW</small></div>
}

function ProjectCard({ project, index }) {
  const meta = projectMeta[project.title]
  return <article className={`lab-project-card ${index === 0 ? 'lab-project-featured' : ''}`}><ProjectVisual project={project} /><div className="lab-project-content"><p className="lab-kicker">0{index + 1} / {meta.category}</p><h3>{project.title.replace(' — Encryption/Decryption CLI Tool', '')}</h3>{project.title.includes('CipherX') && <p className="lab-project-subtitle">Encryption / Decryption CLI Tool</p>}<p>{project.solution}</p><div className="lab-tags">{project.stack.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}</div><ul className="lab-feature-list">{meta.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="lab-project-actions"><Link href={`/projects/${meta.slug}`} className="lab-text-link">Explore details <span>↗</span></Link><a className="lab-github-link" href={projectLinks[project.title].github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a className="lab-live-link" href={projectLinks[project.title].live} target="_blank" rel="noreferrer">Live <span>↗</span></a></div></div></article>
}

function Home({ navigate }) {
  return <>
    <section className="lab-hero"><div className="lab-container lab-hero-grid"><div className="lab-hero-copy"><p className="lab-kicker"><i className="lab-live-dot" /> AMRIT.K / SECURITY ENGINEERING LAB</p><h1>Cybersecurity Analyst<br /><em>building secure &amp; intelligent systems.</em></h1><p className="lab-hero-subtitle">B.Tech CSE (Cyber Security) <span>•</span> 2027</p><p className="lab-hero-description">Network Security <span>•</span> Threat Detection <span>•</span> Applied Cryptography <span>•</span> Security-focused Development</p><div className="lab-actions"><button className="lab-button lab-button-primary" onClick={() => navigate('/projects')}>Explore My Work <span>↘</span></button><a className="lab-button" href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a className="lab-button" href={profile.resume} target="_blank" rel="noreferrer">Resume <span>↗</span></a></div></div><div className="lab-profile-stage"><div className="lab-scan-line" /><div className="lab-photo-card"><p>SECURITY PROFILE</p><img src={profile.photo} alt={profile.photoAlt} /><strong>AMRIT KUMAR</strong><span>CYBERSECURITY / 04</span></div><div className="lab-profile-status"><span>● NETWORK SECURITY</span><span>● THREAT DETECTION</span><span>● PYTHON</span><b>STATUS: ONLINE</b></div></div></div></section>
    <section className="lab-overview"><div className="lab-container"><div className="lab-overview-head"><p className="lab-kicker">PORTFOLIO / DEMO OVERVIEW</p><span>NOT LIVE NETWORK DATA</span></div><div className="lab-metric-grid"><Metric label="Network" value="MONITORING" tone="green" /><Metric label="Threat engine" value="READY" /><Metric label="PCAP analyzer" value="ONLINE" tone="green" /><Metric label="Projects" value="03" /><Metric label="LeetCode" value="150+" /><Metric label="Open source PRs" value="03+" /></div></div></section>
    <section className="lab-section lab-home-about"><div className="lab-container lab-split"><div><p className="lab-kicker">01 / WHO IS AMRIT?</p><h2>Practical security, grounded in software.</h2></div><div><p className="lab-lead">I&apos;m Amrit Kumar, a 4th-year B.Tech CSE (Cyber Security) student focused on network security, threat detection, applied cryptography, and security-focused development.</p><button className="lab-text-button" onClick={() => navigate('/about')}>Open profile <span>↗</span></button></div></div></section>
    <section className="lab-section"><div className="lab-container"><SectionHeader index="02" eyebrow="Project lab" title="What I build." >Security tools and applications, documented as working case studies.</SectionHeader><div className="lab-project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div><button className="lab-text-button" onClick={() => navigate('/projects')}>Open project lab <span>↗</span></button></div></section>
  </>
}

function About() {
  const workAreas = [['NETWORK SECURITY', 'Traffic, protocols, packet analysis', ['Python', 'Scapy', 'Wireshark']], ['THREAT DETECTION', 'Signals, logs, risk scoring', ['Splunk', 'Pandas', 'Detection rules']], ['AI / ML SECURITY', 'Applied models and responsible analysis', ['Scikit-learn', 'Feature engineering']], ['APPLIED CRYPTOGRAPHY', 'Practical transformation and threat models', ['Python', 'Caesar + XOR', 'CIA Triad']], ['SECURITY TOOLS', 'Useful utilities for investigation', ['Linux', 'Nmap', 'Streamlit']], ['SOFTWARE DEVELOPMENT', 'Readable, testable product work', ['Java', 'React.js', 'Git']]]
  const [active, setActive] = useState(0)
  return <section className="lab-page"><div className="lab-container"><SectionHeader index="02" eyebrow="About" title="Who I am." >A security-focused developer building useful systems and learning in public.</SectionHeader><div className="lab-about-intro"><p className="lab-lead">Cybersecurity Analyst building secure &amp; intelligent systems.</p><p>I work across network security, threat detection, applied cryptography, machine learning, and software development. My approach is simple: build practical tools, learn through hands-on labs, and solve problems with care.</p></div><div className="lab-area-grid">{workAreas.map(([name, description, tags], index) => <button className={`lab-area-card ${active === index ? 'is-active' : ''}`} key={name} onClick={() => setActive(index)}><span>0{index + 1}</span><h3>{name}</h3>{active === index && <><p>{description}</p><div className="lab-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></>}</button>)}</div><div className="lab-education-panel"><p className="lab-kicker">EDUCATION / 2023 — 2027</p><h3>B.Tech — Computer Science &amp; Engineering (Cyber Security)</h3><p>Haldia Institute of Technology <strong>CGPA: 8.08 / 10</strong></p><div className="lab-tags">{['Networking', 'Operating Systems', 'DBMS', 'OOP', 'Machine Learning', 'Cybersecurity'].map((tag) => <span key={tag}>{tag}</span>)}</div></div></div></section>
}

function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Cybersecurity', 'Machine Learning']
  const visible = projects.filter((project) => filter === 'All' || projectMeta[project.title].category === filter)
  return <section className="lab-page"><div className="lab-container"><SectionHeader index="03" eyebrow="Project lab" title="Built for real problems." >Explore the systems, signals, and decisions behind each build.</SectionHeader><div className="lab-filter-row">{filters.map((item) => <button className={filter === item ? 'is-selected' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="lab-project-grid">{visible.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></div></section>
}

function ProjectDetail({ slug }) {
  const project = projects.find((item) => projectMeta[item.title].slug === slug)
  if (!project) return <NotFound />
  const meta = projectMeta[project.title]
  return <section className="lab-page"><div className="lab-container"><Link href="/projects" className="lab-back-link">← Back to project lab</Link><div className="lab-detail-hero"><p className="lab-kicker">PROJECT DETAIL / {meta.category}</p><h1>{project.title}</h1><p>{project.solution}</p><div className="lab-detail-actions"><a className="lab-button lab-button-primary" href={projectLinks[project.title].github} target="_blank" rel="noreferrer">View on GitHub ↗</a><a className="lab-button" href={projectLinks[project.title].live} target="_blank" rel="noreferrer">Open Live ↗</a></div></div><div className="lab-detail-grid"><article><p className="lab-kicker">OVERVIEW</p><h2>Problem &amp; solution</h2><p>{project.problem}</p><p>{project.approach}</p></article><article><p className="lab-kicker">ARCHITECTURE</p><h2>How it works</h2><ol className="lab-architecture">{project.architecture.map((item) => <li key={item}>{item}</li>)}</ol></article></div><div className="lab-detail-bottom"><div><p className="lab-kicker">KEY FEATURES</p><ul className="lab-feature-list">{meta.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div><p className="lab-kicker">WHAT I LEARNED</p><p>{project.metrics.join(' ')}</p></div></div></div></section>
}

function SecurityLab() {
  return <section className="lab-page"><div className="lab-container"><SectionHeader index="04" eyebrow="Security lab" title="Practice over posturing." >A portfolio view of hands-on learning, not a live monitoring system.</SectionHeader><div className="lab-module-grid">{[['NETWORK', ['Linux', 'TCP/IP', 'Wireshark', 'Nmap']], ['DETECTION', ['Splunk', 'Detection engineering', 'Log analysis']], ['SECURITY', ['OWASP', 'Cryptography', 'Threat modelling', 'Incident response']], ['ML / DATA', ['Scikit-learn', 'Pandas', 'Feature engineering', 'Model evaluation']]].map(([title, items]) => <article className="lab-module" key={title}><p className="lab-kicker">MODULE / 0{items.length}</p><h3>{title}</h3>{items.map((item) => <span key={item}>● {item}</span>)}</article>)}</div><div className="lab-learning-map"><p className="lab-kicker">SECURITY LEARNING PATH</p>{['Linux', 'Network Security', 'Cryptography', 'Web Security', 'Detection Engineering'].map((item, index) => <span key={item}>{item}{index < 4 && <b>↓</b>}</span>)}</div><a className="lab-text-link" href="https://tryhackme.com/p/amritkum1209/" target="_blank" rel="noreferrer">Open TryHackMe profile ↗</a></div></section>
}

function Skills() {
  const [active, setActive] = useState('Cybersecurity')
  return <section className="lab-page"><div className="lab-container"><SectionHeader index="05" eyebrow="Skills" title="A working toolkit." >No inflated percentages. Just the technologies I use to build and reason.</SectionHeader><div className="lab-skills-layout"><div className="lab-skill-tabs">{Object.keys(skillGroups).map((group) => <button className={active === group ? 'is-selected' : ''} key={group} onClick={() => setActive(group)}>{group}</button>)}</div><div className="lab-skill-detail"><p className="lab-kicker">ACTIVE CATEGORY</p><h3>{active}</h3><div className="lab-skill-nodes">{skillGroups[active].map((skill, index) => <span style={{ '--delay': `${index * 50}ms` }} key={skill}>{skill}</span>)}</div></div></div></div></section>
}

function Journey() {
  const [active, setActive] = useState(3)
  return <section className="lab-page"><div className="lab-container"><SectionHeader index="06" eyebrow="Journey" title="Learning in public." >Training, projects, open source, and the habits behind the work.</SectionHeader><div className="lab-timeline">{journey.map(([year, title, detail], index) => <button className={`lab-timeline-item ${active === index ? 'is-active' : ''}`} key={`${year}-${title}`} onClick={() => setActive(index)}><span>{year}</span><div><h3>{title}</h3>{active === index && <p>{detail}</p>}</div></button>)}</div></div></section>
}

function Contact() {
  return <section className="lab-page lab-contact-page"><div className="lab-container"><div className="lab-terminal-contact"><p>&gt; INITIALIZING CONNECTION...</p><p>&gt; USER: AMRIT KUMAR</p><p>&gt; STATUS: <strong>AVAILABLE</strong></p><p>&gt; CHANNELS: <strong>ONLINE</strong></p></div><SectionHeader index="07" eyebrow="Contact" title="Establish connection." >I&apos;m open to cybersecurity internships, projects, and opportunities where I can learn, contribute, and solve real-world security problems.</SectionHeader><div className="lab-contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a><a href="https://tryhackme.com/p/amritkum1209/" target="_blank" rel="noreferrer">TryHackMe ↗</a></div></div></section>
}

function NotFound() { return <section className="lab-page"><div className="lab-container"><h1>Route not found.</h1><Link href="/" className="lab-text-link">Return home ↗</Link></div></section> }

export default function SecurityLabApp() {
  const [path, setPath] = useState(getPath)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const onHashChange = () => { setPath(getPath()); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }; window.addEventListener('hashchange', onHashChange); return () => window.removeEventListener('hashchange', onHashChange) }, [])
  const navigate = (next) => { window.location.hash = next }
  const detailSlug = path.startsWith('/projects/') ? path.split('/')[2] : null
  const isActive = (href) => path === href || (href === '/projects' && path.startsWith('/projects/'))
  const page = path === '/' ? <Home navigate={navigate} /> : path === '/about' ? <About /> : path === '/projects' ? <ProjectsPage /> : detailSlug ? <ProjectDetail slug={detailSlug} /> : path === '/security-lab' ? <SecurityLab /> : path === '/skills' ? <Skills /> : path === '/journey' ? <Journey /> : path === '/contact' ? <Contact /> : <NotFound />
  return <div className="lab-app"><div className="lab-background" aria-hidden="true"><span /><span /><span /><span /><span /></div><header className="lab-nav"><div className="lab-container lab-nav-inner"><Link href="/" className="lab-brand" onClick={() => setMenuOpen(false)}>AMRIT.K</Link><nav className={menuOpen ? 'is-open' : ''}>{routes.map(([href, number, label]) => <Link key={href} href={href} className={isActive(href) ? 'is-active' : ''} onClick={() => setMenuOpen(false)}><small>{number}</small>{label}</Link>)}</nav><a className="lab-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a><button className={`lab-menu ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i /><i /></button></div></header><main>{page}</main><footer className="lab-footer"><div className="lab-container"><Link href="/" className="lab-brand">AMRIT.K</Link><p>Cybersecurity • Threat Detection • Software Development</p><span>© 2026 Amrit Kumar</span></div></footer></div>
}
