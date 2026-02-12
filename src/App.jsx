import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import './App.css'

const profile = {
  name: 'Amrit Kumar',
  headline: "Hi, I'm Amrit - Turning Data into Decisions.",
  summary:
    'Third-year Computer Science student driven by data, curious about ML systems, and serious about secure, scalable software. I blend statistics with engineering to build products that are smart, reliable, and human-centered.',
  location: 'Kolkata, India',
  email: 'amritkum1209@gmail.com',
  resume: 'https://drive.google.com/file/d/1pgDYTm0XBWvT9vqV-atukpNN6yg7A0-i/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
}

const roles = [
  'Data Science Enthusiast',
  'Machine Learning Explorer',
  'Problem Solver',
]

const quickStats = [
  { label: 'Projects Completed', value: 12, suffix: '+' },
  { label: 'Certifications', value: 6, suffix: '' },
  { label: 'Hackathons', value: 4, suffix: '' },
  { label: 'CGPA', value: 8, suffix: '.0' },
]

const skills = [
  {
    title: 'Programming',
    items: [
      { label: 'Python', level: 90 },
      { label: 'JavaScript', level: 84 },
      { label: 'C++', level: 78 },
    ],
  },
  {
    title: 'Data and ML',
    items: [
      { label: 'Pandas', level: 86 },
      { label: 'NumPy', level: 82 },
      { label: 'Scikit-learn', level: 80 },
    ],
  },
  {
    title: 'Web',
    items: [
      { label: 'React', level: 83 },
      { label: 'Node.js', level: 70 },
      { label: 'REST APIs', level: 76 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git', level: 84 },
      { label: 'SQL', level: 74 },
      { label: 'Linux', level: 72 },
    ],
  },
]

const projects = [
  {
    title: 'Weather Detection Website',
    description:
      'Real-time weather intelligence with city search, forecast visualizations, and graceful error handling.',
    stack: ['React', 'API', 'CSS'],
    category: 'Web',
    github: '#',
    demo: '#',
  },
  {
    title: 'Password Encrypter/Decrypter',
    description:
      'CLI tool that protects secrets with reversible encryption and strict input validation.',
    stack: ['Python', 'Crypto'],
    category: 'Security',
    github: '#',
    demo: '#',
  },
  {
    title: 'ML-based Prediction Model',
    description:
      'Supervised learning model with feature engineering, evaluation metrics, and explainability notes.',
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    category: 'ML',
    github: '#',
    demo: '#',
  },
  {
    title: 'Customer Segmentation Insight Lab',
    description:
      'Clustering-driven analysis that highlights behavioral segments and data-backed recommendations.',
    stack: ['Python', 'Pandas', 'KMeans'],
    category: 'Data',
    github: '#',
    demo: '#',
  },
]

const experience = [
  {
    title: 'Data Science Workshop - ISTE',
    time: '2024',
    detail: 'Hands-on ML pipelines, model evaluation, and data storytelling assignments.',
  },
  {
    title: 'Cybersecurity Training Program',
    time: '2024',
    detail: 'Focused on secure development, threat modeling, and incident triage basics.',
  },
  {
    title: 'Class Representative',
    time: '2023 - Present',
    detail: 'Bridging student-faculty collaboration and coordinating peer-led tech initiatives.',
  },
]

const achievements = [
  'Deloitte Australia Cyber Program (Forage) completed',
  'Hacktoberfest 2024 Level 4 badge recipient',
  'GirlScript Summer of Code 2025 contributor',
]

const floatingSnippets = [
  'train_test_split()',
  'from sklearn import metrics',
  'def secure_api():',
  'SELECT * FROM insights;',
  'model.fit(X, y)',
  'git commit -m "ship"',
]

const filters = ['All', 'ML', 'Web', 'Data', 'Security']

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const useTypewriter = (words, speed = 110, pause = 1400) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const shouldDelete = isDeleting
    const nextText = shouldDelete
      ? current.substring(0, text.length - 1)
      : current.substring(0, text.length + 1)

    const timeout = setTimeout(
      () => {
        setText(nextText)
        if (!shouldDelete && nextText === current) {
          setIsDeleting(true)
        } else if (shouldDelete && nextText === '') {
          setIsDeleting(false)
          setWordIndex((prev) => prev + 1)
        }
      },
      shouldDelete ? speed / 2 : speed,
    )

    if (!shouldDelete && nextText === current) {
      clearTimeout(timeout)
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true)
      }, pause)
      return () => clearTimeout(pauseTimeout)
    }

    return () => clearTimeout(timeout)
  }, [isDeleting, pause, speed, text, wordIndex, words])

  return text
}

const Counter = ({ value, suffix }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplay(Math.round(latest))
      },
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)

  const handleMove = (event) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateX = ((y / rect.height) - 0.5) * -12
    const rotateY = ((x / rect.width) - 0.5) * 12
    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: 20 }}
      layout
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-tag">{project.category}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-stack">
        {project.stack.map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
      <div className="project-links">
        <a className="link" href={project.github}>
          GitHub
        </a>
        <a className="link" href={project.demo}>
          Live Demo
        </a>
      </div>
    </motion.article>
  )
}

function App() {
  const typedText = useTypewriter(roles)
  const [filter, setFilter] = useState('All')
  const [showLoader, setShowLoader] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [cursorActive, setCursorActive] = useState(false)
  const [eggActive, setEggActive] = useState(false)
  const [ambientOn, setAmbientOn] = useState(false)
  const oscillatorRef = useRef(null)
  const audioContextRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    const handleEnter = () => setCursorActive(true)
    const handleLeave = () => setCursorActive(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseenter', handleEnter)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseenter', handleEnter)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  useEffect(() => {
    let raf = 0
    const handleScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`)
        raf = 0
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.category === filter)
  }, [filter])

  const toggleAmbient = () => {
    if (ambientOn) {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop()
        oscillatorRef.current.disconnect()
        oscillatorRef.current = null
      }
      setAmbientOn(false)
      return
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    const context = audioContextRef.current
    if (context.state === 'suspended') {
      context.resume()
    }
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = 'sine'
    oscillator.frequency.value = 180
    gain.gain.value = 0.015
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start()
    oscillatorRef.current = oscillator
    setAmbientOn(true)
  }

  const triggerEgg = () => {
    setEggActive(true)
    setTimeout(() => setEggActive(false), 1200)
  }

  return (
    <div className="app">
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="loader-name"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {profile.name}
            </motion.div>
            <motion.div
              className="loader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`custom-cursor ${cursorActive ? 'active' : ''}`}
        style={{ '--x': `${cursor.x}px`, '--y': `${cursor.y}px` }}
      />
      <div
        className="custom-cursor-dot"
        style={{ '--x': `${cursor.x}px`, '--y': `${cursor.y}px` }}
      />

      <div className="background-layer">
        <div className="gradient-mesh" />
        <div className="particles">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} className="particle" />
          ))}
        </div>
        <div className="floating-code">
          {floatingSnippets.map((snippet, index) => (
            <span key={snippet} style={{ animationDelay: `${index * 1.4}s` }}>
              {snippet}
            </span>
          ))}
        </div>
      </div>

      <header className="nav">
        <button
          className={`logo ${eggActive ? 'egg' : ''}`}
          type="button"
          onClick={triggerEgg}
          aria-label="Trigger logo animation"
        >
          <span>AK</span>
        </button>
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="btn ghost" type="button" onClick={toggleAmbient}>
            {ambientOn ? 'Ambient On' : 'Ambient Off'}
          </button>
          <a className="btn primary" href={profile.resume}>
            Download Resume
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Motivated 3rd-year CS student</p>
            <h1>{profile.headline}</h1>
            <p className="typewriter">
              <span>{typedText}</span>
              <span className="type-cursor">|</span>
            </p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href={profile.resume}>
                Download Resume
              </a>
            </div>
            <div className="hero-stats">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="stat-value">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="glass-card">
              <p className="panel-title">Focus Areas</p>
              <div className="chip-row">
                {['Data Science', 'Machine Learning', 'Cybersecurity', 'Software Development'].map(
                  (item) => (
                    <span key={item} className="chip solid">{item}</span>
                  ),
                )}
              </div>
              <p className="panel-note">
                Learning fast. Shipping faster. Ready for internships in data, ML, or software.
              </p>
            </div>
            <div className="glass-card parallax-card">
              <p className="panel-title">Tech Stack Signal</p>
              <p className="panel-note">
                Python + ML pipelines, React front-ends, API integrations, and secure deployment habits.
              </p>
              <div className="signal-bar">
                <span />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">About</p>
            <h2>Curiosity, rigor, and a growth mindset</h2>
            <p className="section-subtitle">
              I started with coding challenges, then fell in love with data-driven decisions. Now I build
              ML prototypes, analyze patterns, and keep security in mind from day one.
            </p>
          </motion.div>
          <div className="about-grid">
            <motion.div
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>My Journey</h3>
              <p>
                Third-year CS student with strong fundamentals in DSA, statistics, and machine learning.
                I enjoy tackling messy datasets, crafting clean APIs, and building interfaces that feel
                alive.
              </p>
              <p>
                My goal is to become an ML engineer who ships reliable models, monitors performance, and
                builds secure, user-first products.
              </p>
              <div className="timeline">
                <div className="timeline-item">
                  <span>2023</span>
                  <p>Started CS degree and built my first data visualization project.</p>
                </div>
                <div className="timeline-item">
                  <span>2024</span>
                  <p>Deepened ML learning with workshops and full-stack mini apps.</p>
                </div>
                <div className="timeline-item">
                  <span>2025</span>
                  <p>Focused on ML deployment, security, and systems thinking.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Growth Mindset</h3>
              <div className="progress-list">
                {[
                  { label: 'DSA and Problem Solving', value: 82 },
                  { label: 'ML Foundations', value: 78 },
                  { label: 'Statistics', value: 74 },
                  { label: 'Secure Development', value: 70 },
                ].map((item) => (
                  <div key={item.label} className="progress-item">
                    <div className="progress-header">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="progress-bar">
                      <span style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn primary" type="button">
                Open to Internship Roles
              </button>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">Skills</p>
            <h2>Modern stack with data-first thinking</h2>
            <p className="section-subtitle">
              I combine data tooling, ML workflows, and modern web engineering to craft intelligent
              experiences.
            </p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((group) => (
              <motion.div
                key={group.title}
                className="skill-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <h3>{group.title}</h3>
                {group.items.map((item) => (
                  <div key={item.label} className="skill-bar">
                    <div className="skill-bar-header">
                      <span>{item.label}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <span style={{ width: `${item.level}%` }} />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">Projects</p>
            <h2>Interactive builds with real-world impact</h2>
            <p className="section-subtitle">
              Hover to explore. Filter by focus area to discover the tech stories behind each build.
            </p>
          </motion.div>
          <div className="filter-row">
            {filters.map((item) => (
              <button
                key={item}
                className={`btn filter ${filter === item ? 'active' : ''}`}
                type="button"
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <motion.div
            className="project-grid"
            layout
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="experience" className="section alt">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">Experience and Achievements</p>
            <h2>Momentum across learning, leadership, and impact</h2>
          </motion.div>
          <div className="experience-grid">
            <motion.div
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Experience Timeline</h3>
              <div className="timeline vertical">
                {experience.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <span>{item.time}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Achievements</h3>
              <ul className="achievement-list">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="stat-banner">
                <p>Always learning, always building.</p>
                <span className="glow-pill">Internship Ready</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">Contact</p>
            <h2>Let us build something bold</h2>
            <p className="section-subtitle">
              Reach out for internships, collaborations, or anything data and ML related.
            </p>
          </motion.div>
          <div className="contact-grid">
            <motion.form
              className="contact-form"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="input-row">
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" rows="5" placeholder="Tell me about your idea" />
              <button className="btn primary" type="submit">
                Send Message
              </button>
            </motion.form>
            <motion.div
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Connect</h3>
              <p>{profile.location}</p>
              <p>{profile.email}</p>
              <div className="social-links">
                <a className="link" href={profile.linkedin}>
                  LinkedIn
                </a>
                <a className="link" href={profile.github}>
                  GitHub
                </a>
                <a className="link" href={`mailto:${profile.email}`}>
                  Email
                </a>
              </div>
              <div className="mini-cta">
                <p>Looking for a driven data + ML intern?</p>
                <a className="btn ghost" href={profile.resume}>
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed and built by {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
