import { useState } from 'react'
import {
  about,
  aboutFacts,
  achievements,
  blogIdeas,
  contact,
  dailyLearningTracker,
  dsa,
  experienceJourney,
  heroRoles,
  premiumSkills,
  profile,
  projectCards,
  projects,
  skills,
} from './data/portfolioData'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const siteUrl = profile.website || 'https://amritkumar.me'
  const year = new Date().getFullYear()

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Story' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: profile.github, label: 'GitHub' },
    { href: profile.linkedin, label: 'LinkedIn' },
    { href: profile.leetcode, label: 'LeetCode' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            Amrit Kumar
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="topbar-actions">
            <a className="ghost-link" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-drawer">
            <div className="container mobile-drawer-inner">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mobile-link" onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <a className="mobile-link" href={profile.resume} target="_blank" rel="noreferrer" onClick={closeMenu}>
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.title}</p>
              <h1>{profile.name}</h1>
              <p className="hero-lead">{profile.headline}</p>
              <p className="hero-support">{profile.subheading}</p>

              <div className="role-strip" aria-label="Core roles">
                {heroRoles.map((role) => (
                  <span key={role} className="role-chip">
                    {role}
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <a className="primary-button" href="#projects">
                  Explore Projects
                </a>
                <a className="secondary-button" href={profile.resume} target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </div>

              <div className="hero-metrics">
                <article className="metric-card">
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                </article>
                <article className="metric-card">
                  <span>Focus</span>
                  <strong>Cybersecurity and secure software</strong>
                </article>
                <article className="metric-card">
                  <span>Stack</span>
                  <strong>Java, Python, React, Linux</strong>
                </article>
              </div>

              <div className="social-row" aria-label="Social profiles">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-photo-wrap">
                  <img className="profile-photo" src={profile.photo} alt={profile.photoAlt} loading="eager" />
                </div>

                <div className="profile-snapshot">
                  <p>Snapshot</p>
                  <strong>Building secure systems, practical ML tools, and thoughtful interfaces.</strong>
                  <span>{profile.email}</span>
                </div>

                <div className="signal-grid">
                  {aboutFacts.map((fact) => (
                    <article className="signal-card" key={fact.title}>
                      <i className={fact.icon} aria-hidden="true" />
                      <h3>{fact.title}</h3>
                      <p>{fact.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="container section-grid story-grid">
            <div className="section-copy">
              <p className="section-label">About</p>
              <h2>Built around clarity, security, and useful work.</h2>
              <p className="section-text">{about.aboutText}</p>
              <p className="section-text">{about.aboutStory}</p>
              <p className="section-text">{about.aboutStory2}</p>
              <p className="section-text">{about.interestsText}</p>
              <p className="section-text">{about.interestsMusic}</p>
            </div>

            <div className="section-panel panel-stack">
              <article className="panel-card">
                <h3>Core Tools</h3>
                <div className="stack-list">
                  {about.techStack.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>

              <article className="panel-card">
                <h3>Technical Base</h3>
                <div className="compact-grid">
                  {skills.map((item) => (
                    <div className="compact-item" key={item.category}>
                      <span>{item.category}</span>
                      <strong>{item.detail}</strong>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container section-grid skills-grid">
            <div className="section-copy">
              <p className="section-label">Skills</p>
              <h2>Enough breadth to ship, enough depth to reason.</h2>
              <p className="section-text">Security thinking, implementation discipline, and problem solving show up in every stack I use.</p>

              <div className="learning-card">
                <span className="learning-label">Daily focus</span>
                <strong>{dailyLearningTracker.streak}</strong>
                <div className="learning-list">
                  {dailyLearningTracker.blocks.map((block) => (
                    <article key={block.label} className="learning-item">
                      <span>{block.label}</span>
                      <p>{block.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="section-panel skill-panel">
              {premiumSkills.map((skill) => (
                <article className="skill-card" key={skill.label}>
                  <div className="skill-head">
                    <div>
                      <h3>{skill.label}</h3>
                      <p>{skill.detail}</p>
                    </div>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="skill-track">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-copy section-copy-wide">
              <p className="section-label">Projects</p>
              <h2>Case studies that show process, not just output.</h2>
              <p className="section-text">These projects are kept in your voice and structured for a recruiter scan: what it solved, how it was built, and why it matters.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-header">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.title}</h3>
                    </div>
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>

                  <div className="project-copy-grid">
                    <div>
                      <span>Problem</span>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <span>Why it matters</span>
                      <p>{project.whyItMatters}</p>
                    </div>
                    <div>
                      <span>Solution</span>
                      <p>{project.solution}</p>
                    </div>
                    <div>
                      <span>Approach</span>
                      <p>{project.approach}</p>
                    </div>
                  </div>

                  <div className="stack-list stack-list-tight">
                    {project.stack.map((item) => (
                      <span key={`${project.title}-${item}`} className="stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="details-grid">
                    <div>
                      <h4>Architecture</h4>
                      <ul>
                        {project.architecture.map((item) => (
                          <li key={`${project.title}-arch-${item}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Flow</h4>
                      <ol>
                        {project.architectureFlow.map((item) => (
                          <li key={`${project.title}-flow-${item}`}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="project-foot">
                    <div>
                      <span>Metrics</span>
                      <p>{project.metrics.join(' ')}</p>
                    </div>
                    <div>
                      <span>Deployment</span>
                      <p>{project.deployment}</p>
                    </div>
                  </div>

                  <div className="project-actions">
                    <a className="secondary-button small-button" href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    <a className="ghost-button small-button" href={project.live} target="_blank" rel="noreferrer">
                      Live / Reference
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="project-strip">
              {projectCards.map((card) => (
                <article className="mini-project-card" key={card.title}>
                  <p>{card.description}</p>
                  <h3>{card.title}</h3>
                  <div className="stack-list stack-list-tight">
                    {card.stack.map((item) => (
                      <span key={`${card.title}-${item}`} className="stack-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a href={card.github} target="_blank" rel="noreferrer">
                    Open project
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="section alt-section">
          <div className="container section-grid timeline-grid">
            <div className="section-copy">
              <p className="section-label">Timeline</p>
              <h2>Experience, achievements, and the habit loop behind the work.</h2>
              <p className="section-text">This keeps the portfolio grounded in evidence: leadership, contributions, and regular practice.</p>

              <div className="timeline-list">
                {experienceJourney.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <div>
                      <h3>{item.title}</h3>
                      <span>{item.period}</span>
                    </div>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="section-panel panel-stack">
              <article className="panel-card">
                <h3>Achievements</h3>
                <div className="achievement-grid">
                  {achievements.map((item) => (
                    <article className="achievement-card" key={item.title}>
                      <i className={item.icon} aria-hidden="true" />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </article>

              <article className="panel-card">
                <h3>Writing queue</h3>
                <div className="blog-list">
                  {blogIdeas.map((item) => (
                    <article key={item.title} className="blog-item">
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </article>

              <article className="panel-card">
                <h3>Problem solving</h3>
                <p>{dsa.highlights[0]}</p>
                <p>{dsa.highlights[1]}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid">
            <div className="section-copy contact-copy">
              <p className="section-label">Contact</p>
              <h2>{contact.title}</h2>
              <p className="section-text">{contact.message}</p>
              <p className="section-text">{contact.address}</p>

              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer">
                  LeetCode
                </a>
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/amritkum1209@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${siteUrl}/?sent=1#contact`} />
              <input type="text" name="_honey" className="honeypot" tabIndex="-1" autoComplete="off" />

              <label>
                <span>Your name</span>
                <input type="text" name="name" placeholder="Your Name" required />
              </label>

              <label>
                <span>Your email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>

              <label>
                <span>Your message</span>
                <textarea name="message" placeholder="Tell me what you’re building." required />
              </label>

              <button type="submit" className="primary-button submit-button">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {year} Amrit Kumar</p>
          <p>Built with care for clarity, restraint, and honest details.</p>
          <a href={siteUrl} target="_blank" rel="noreferrer">
            {siteUrl.replace(/^https?:\/\//, '')}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
