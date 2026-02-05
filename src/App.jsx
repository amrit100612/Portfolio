import { useEffect, useMemo, useState } from 'react'
import './App.css'

const profile = {
  name: 'Amrit Kumar',
  title:
    'B.Tech CSE (Cyber Security) | Secure Web | Threat-Aware Development | Blue Team Focus',
  location: 'Kolkata, India',
  phone: '+91 9508043572',
  email: 'amritkum1209@gmail.com',
  linkedin: '#',
  github: '#',
  resume: 'https://drive.google.com/file/d/1pgDYTm0XBWvT9vqV-atukpNN6yg7A0-i/view?usp=sharing',
}

const stats = [
  { label: 'CTF Labs', value: '32+' },
  { label: 'Security Projects', value: '4' },
  { label: 'Certifications', value: '4' },
  { label: 'CGPA', value: '8.02/10' },
]

const skillsByCategory = [
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'C', 'Java'],
  },
  {
    title: 'Security Tooling',
    items: ['Wireshark', 'Burp Suite', 'Nmap', 'Linux CLI', 'Git'],
  },
  {
    title: 'Web Security',
    items: ['OWASP Top 10', 'Auth Flows', 'Input Validation', 'Secure APIs'],
  },
  {
    title: 'Defensive Practices',
    items: ['Threat Modeling', 'Log Review', 'Incident Triage', 'Hardening Basics'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML5', 'CSS3', 'React.js', 'Vite'],
  },
  {
    title: 'Core CS',
    items: ['Computer Networks', 'Operating Systems', 'DBMS', 'OOP'],
  },
]

const softSkills = [
  {
    skill: 'Analytical Thinking',
    example:
      'Breaks down incidents into signals, hypotheses, and testable next steps.',
  },
  {
    skill: 'Communication',
    example:
      'Explains findings in clear, non-technical language for teams and stakeholders.',
  },
  {
    skill: 'Collaboration',
    example:
      'Partners with dev teams to close vulnerabilities without slowing delivery.',
  },
  {
    skill: 'Ownership',
    example:
      'Takes security tasks end-to-end, from discovery to remediation notes.',
  },
]

const skillsMatrix = [
  {
    domain: 'Offensive',
    items: ['Recon Basics', 'Web Enumeration', 'CTF Methodology', 'Burp Suite'],
  },
  {
    domain: 'Defensive',
    items: ['Log Review', 'Incident Triage', 'Hardening', 'Secure Configs'],
  },
  {
    domain: 'Web Security',
    items: ['OWASP Top 10', 'Auth Testing', 'Secure Sessions', 'Input Validation'],
  },
  {
    domain: 'Automation',
    items: ['Python Scripts', 'Bash', 'Data Parsing', 'Report Generation'],
  },
  {
    domain: 'Core CS',
    items: ['Networks', 'OS', 'DBMS', 'OOP'],
  },
]

const projects = [
  {
    title: 'CipherX — Password Encrypter/Decrypter',
    impact:
      'Python CLI tool for encrypting and decrypting passwords using basic cryptographic techniques.',
    context:
      'Built to strengthen cybersecurity fundamentals and reinforce secure data handling practices.',
    dataset: 'User-provided inputs via command-line interface.',
    methodology:
      'Input validation, deterministic transformations, and safeguards against misuse.',
    stack: ['Python'],
    metrics: 'Consistent encryption/decryption outputs with user-friendly prompts.',
    challenges: 'Balancing usability with safe input handling.',
    learnings: 'Security tools must be simple to use and hard to misuse.',
    links: {
      github: '#',
      demo: '#',
      blog: '#',
    },
  },
  {
    title: 'ThreatLens — Log Review Mini Lab',
    impact:
      'A practice lab for triaging suspicious access logs and mapping signals to actions.',
    context:
      'Designed to build a repeatable incident triage workflow and reporting habits.',
    dataset: 'Sanitized access and auth logs from controlled lab environments.',
    methodology:
      'Pattern matching, anomaly checks, and severity scoring for prioritization.',
    stack: ['Python', 'CSV', 'Markdown'],
    metrics: 'Reduced review time with templates and clear escalation notes.',
    challenges: 'Avoiding false positives while keeping the process fast.',
    learnings: 'A reliable triage checklist beats ad-hoc analysis.',
    links: {
      github: '#',
      demo: '#',
      blog: '#',
    },
  },
  {
    title: 'Secure Sprint — Web Security Checklist',
    impact:
      'Developer-friendly checklist for secure web releases and bug-prevention habits.',
    context:
      'Created to translate OWASP Top 10 into daily engineering practice.',
    dataset: 'OWASP guidance and common classroom project findings.',
    methodology:
      'Mapped risks to actionable checks across auth, inputs, and sessions.',
    stack: ['Markdown', 'Docs'],
    metrics: 'Faster peer reviews and more consistent security coverage.',
    challenges: 'Keeping it short without losing critical steps.',
    learnings: 'Short, repeatable checklists drive real behavior change.',
    links: {
      github: '#',
      demo: '#',
      blog: '#',
    },
  },
]

const education = [
  {
    title: 'B.Tech in CSE (Cyber Security)',
    org: 'Haldia Institute of Technology',
    detail: 'CGPA: 8.02/10 | 2023 - 2027 (expected)',
    highlights: [
      'Relevant coursework: DSA, OS, OOP, Computer Networks, DBMS',
      'Cybersecurity fundamentals and secure systems focus',
    ],
  },
]

const experience = [
  {
    title: 'Class Representative — CSE (Cyber Security)',
    timeline: '2023 - 2027',
    details: [
      'Represented the student body and served as liaison between faculty and students.',
      'Coordinated academic and departmental activities.',
    ],
  },
  {
    title: 'TARUGUARDIANS — Public Relations Team Member',
    timeline: '2024 - Present',
    details: [
      'Managed communication and outreach initiatives.',
      'Promoted events and handled public interactions.',
    ],
  },
  {
    title: 'House Captain — Arawali House (JNV)',
    timeline: '2020 - 2022',
    details: [
      'Led house activities and coordinated inter-house events.',
      'Built leadership, teamwork, and organizational skills.',
    ],
  },
]

const achievements = [
  'Completed Deloitte Australia Cyber Program on Forage.',
  'Attended Access Denied Workshop by Data Science Academy and ISTE.',
  'Hacktoberfest 2024 Level 4 badge recipient.',
  'Contributor at GirlScript Summer of Code 2025 — Project: GrowCraft.',
]

const focusAreas = ['Blue team foundations', 'Secure web apps', 'Threat modeling']

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [theme, setTheme] = useState(getPreferredTheme)
  const [activeDomain, setActiveDomain] = useState('All')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const filteredMatrix = useMemo(() => {
    if (activeDomain === 'All') return skillsMatrix
    return skillsMatrix.filter((item) => item.domain === activeDomain)
  }, [activeDomain])

  return (
    <div className="app">
      <header className="nav">
        <div className="brand">
          <span className="brand-mark">AK</span>
          <div>
            <p className="brand-title">Amrit Kumar</p>
            <p className="brand-subtitle">Cybersecurity Student Portfolio</p>
          </div>
        </div>
        <nav className="nav-links">
          {['About', 'Skills', 'Projects', 'Education', 'Experience', 'Achievements', 'Contact'].map(
            (item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="btn ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <a className="btn primary" href="#contact">
            Open to Opportunities
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Cybersecurity student focused on secure web and defense</p>
          <h1>
            {profile.name}
            <span className="hero-accent"> secures digital experiences with practical defenses.</span>
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-summary">
            Third-year B.Tech CSE (Cyber Security) student with strong foundations in programming and
            web technologies. Focused on secure system design, web security, and practical threat-aware
            development. Open to internships and entry-level roles where security is a first-class
            requirement.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href={profile.resume}>
              Download Resume
            </a>
            <a className="btn ghost" href="#projects">
              View Projects
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-card">
            <p className="panel-title">Security Snapshot</p>
            <p className="panel-subtitle">Signals, safeguards, and secure-by-design habits</p>
            <div className="chip-row">
              {focusAreas.map((item) => (
                <span key={item} className="chip solid">
                  {item}
                </span>
              ))}
            </div>
            <p className="panel-caption">Open to internships and collaborative security projects.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-header">
          <p className="section-eyebrow">About Me</p>
          <h2>Building secure systems with threat-aware development and discipline</h2>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <p className="lead">
              I am a third-year CSE (Cyber Security) student with a strong foundation in programming and
              web technologies. I enjoy building reliable software and applying security practices that
              protect users and systems.
            </p>
            <p>
              Currently pursuing a B.Tech in Computer Science and Engineering (Cyber Security) at Haldia
              Institute of Technology with a CGPA of 8.02/10.
            </p>
            <p className="mission">
              Mission: Build secure, efficient, and user-focused software with strong security practices.
            </p>
            <p>
              Current focus: strengthening secure system design, web security testing, and incident
              triage workflows through practical labs.
            </p>
          </div>
          <div className="about-card">
            <h3>Soft Skills with Real Examples</h3>
            <div className="soft-skill-list">
              {softSkills.map((item) => (
                <div key={item.skill} className="soft-skill-item">
                  <p className="soft-skill-title">{item.skill}</p>
                  <p className="soft-skill-example">{item.example}</p>
                </div>
              ))}
            </div>
            <div className="cta-card">
              <p>Open to internships and collaborative software or cybersecurity projects.</p>
              <a className="btn primary" href="#contact">
                Let us connect
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="section-header">
          <p className="section-eyebrow">Technical Skills</p>
          <h2>Security-first skills across web, tooling, and defensive practice</h2>
        </div>
        <div className="skills-grid">
          {skillsByCategory.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((skill) => (
                  <span key={skill} className="chip solid">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="matrix-panel">
          <div className="matrix-header">
            <div>
              <h3>Interactive Technical Skills Matrix</h3>
              <p>Filter by domain to explore offensive, defensive, and web security focus areas.</p>
            </div>
            <div className="matrix-filters">
              <button
                type="button"
                className={`btn filter ${activeDomain === 'All' ? 'active' : ''}`}
                onClick={() => setActiveDomain('All')}
              >
                All
              </button>
              {skillsMatrix.map((domain) => (
                <button
                  key={domain.domain}
                  type="button"
                  className={`btn filter ${activeDomain === domain.domain ? 'active' : ''}`}
                  onClick={() => setActiveDomain(domain.domain)}
                >
                  {domain.domain}
                </button>
              ))}
            </div>
          </div>
          <div className="matrix-grid">
            {filteredMatrix.map((domain) => (
              <div key={domain.domain} className="matrix-card">
                <h4>{domain.domain}</h4>
                <ul>
                  {domain.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <p className="section-eyebrow">Projects</p>
          <h2>Hands-on projects in web security and cyber foundations</h2>
          <p className="section-note">
            Links below are placeholders and should be replaced with your real GitHub and demo URLs.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-visual">
                <span>Visual Placeholder</span>
                <p>Replace with project screenshot or chart.</p>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-impact">{project.impact}</p>
                <div className="project-details">
                  <p>
                    <strong>Problem:</strong> {project.context}
                  </p>
                  <p>
                    <strong>Dataset:</strong> {project.dataset}
                  </p>
                  <p>
                    <strong>Method:</strong> {project.methodology}
                  </p>
                  <p>
                    <strong>Tech Stack:</strong> {project.stack.join(', ')}
                  </p>
                  <p>
                    <strong>Metrics:</strong> {project.metrics}
                  </p>
                  <p>
                    <strong>Challenges:</strong> {project.challenges}
                  </p>
                  <p>
                    <strong>Learnings:</strong> {project.learnings}
                  </p>
                </div>
                <div className="project-links">
                  <a href={project.links.github}>GitHub</a>
                  <a href={project.links.demo}>Live Demo</a>
                  <a href={project.links.blog}>Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section alt">
        <div className="section-header">
          <p className="section-eyebrow">Education</p>
          <h2>Academic foundation and coursework</h2>
        </div>
        <div className="timeline">
          {education.map((item) => (
            <div key={item.title} className="timeline-card">
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-header">
          <p className="section-eyebrow">Experience and Leadership</p>
          <h2>Leadership roles and teamwork mindset</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div key={item.title} className="timeline-card">
              <div>
                <h3>{item.title}</h3>
                <p className="timeline-detail">{item.timeline}</p>
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="section">
        <div className="section-header">
          <p className="section-eyebrow">Certificates and Achievements</p>
          <h2>Cyber programs and recognitions</h2>
        </div>
        <div className="achievement-grid">
          {achievements.map((item) => (
            <div key={item} className="achievement-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-header">
          <p className="section-eyebrow">Contact</p>
          <h2>Lets build secure, reliable software together</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Reach out directly</h3>
            <p className="contact-detail">{profile.location}</p>
            <p className="contact-detail">{profile.phone}</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="contact-links">
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={profile.github}>GitHub</a>
              <a href={profile.resume}>Resume</a>
            </div>
            <p className="contact-note">
              Replace /resume.pdf and update your LinkedIn/GitHub links.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@email.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Share the role, idea, or collaboration you have in mind."
                required
              />
            </div>
            <button className="btn primary" type="submit">
              Send Message
            </button>
            <p className="form-note">Form is front-end only. Connect it to a backend or service.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>{profile.name} - Cyber Security and Software Portfolio</p>
        <p>Built with React and Vite. Focused on secure, reliable, and user-focused systems.</p>
      </footer>
    </div>
  )
}

export default App
