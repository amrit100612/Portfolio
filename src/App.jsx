import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'framer-motion'
import './App.css'

const profile = {
  name: 'Amrit Kumar',
  headline: 'Amrit Kumar',
  subtitle: '3rd Year CSE (Cyber Security) Student | Web & Security Enthusiast',
  punchline: 'Building secure and creative web experiences with a hacker mindset.',
  summary:
    'Third-year B.Tech CSE (Cyber Security) student at Haldia Institute of Technology. Strong foundations in programming, web technologies, and secure systems, with a growth mindset toward software development and ML basics.',
  location: 'Kolkata, India',
  email: 'amritkum1209@gmail.com',
  phone: '+91 9508043572',
  resume: 'https://drive.google.com/file/d/1pgDYTm0XBWvT9vqV-atukpNN6yg7A0-i/view?usp=sharing',
  linkedin: 'https://linkedin.com/in/amrit-kumar',
  github: 'https://github.com/amritkum1209',
}

const roles = [
  'Cybersecurity Learner',
  'Web Security Enthusiast',
  'Machine Learning Explorer',
]

const quickStats = [
  { label: 'CGPA', value: 8, suffix: '.02/10' },
  { label: 'Leadership Roles', value: 3, suffix: '' },
  { label: 'Security Projects', value: 4, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
]

const skillHighlights = [
  {
    label: 'Security Foundations',
    value: 78,
  },
  {
    label: 'Web Development',
    value: 80,
  },
  {
    label: 'Machine Learning Basics',
    value: 72,
  },
  {
    label: 'Problem Solving',
    value: 82,
  },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['C', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks and Libraries',
    items: ['React.js'],
  },
  {
    title: 'ML Algorithms',
    items: [
      'Linear Regression',
      'Logistic Regression',
      'Decision Trees',
      'Random Forest',
      'KNN',
      'Content-Based Recommendation',
    ],
  },
  {
    title: 'Data Science Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    title: 'Tools and Technologies',
    items: ['Git', 'GitHub', 'Database Management'],
  },
  {
    title: 'Core Concepts',
    items: ['OOP', 'Operating Systems', 'Computer Networks', 'Cyber Security Fundamentals'],
  },
]

const projects = [
  {
    title: 'Weather Detection Website',
    description:
      'Real-time weather dashboard with location-aware insights and resilient API handling.',
    highlights: [
      'WeatherAPI.com integration using async/await Fetch API',
      'Geolocation-based weather detection',
      'Temperature (Celsius) + AQI visualization with error handling',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    github: '#',
    demo: '#',
  },
  {
    title: 'CipherX - Password Encrypter/Decrypter',
    description:
      'CLI tool that reinforces cybersecurity fundamentals through simple cryptographic transformations.',
    highlights: [
      'Encryption and decryption modes with input validation',
      'Interactive prompts built for usability and safe handling',
      'Focus on data protection concepts and secure habits',
    ],
    stack: ['Python', 'Crypto'],
    category: 'Security',
    github: '#',
    demo: '#',
  },
  {
    title: 'ML-based Prediction Model',
    description:
      'Supervised learning pipeline with feature engineering, evaluation metrics, and model review.',
    highlights: [
      'Data preprocessing and train-test evaluation',
      'Metrics tracking and confusion matrix review',
      'Focused on explainability and reliable baselines',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas'],
    category: 'ML',
    github: '#',
    demo: '#',
  },
]

const education = {
  title: 'Haldia Institute of Technology',
  subtitle: 'B.Tech in Computer Science and Engineering (Cyber Security)',
  timeline: '2023 - 2027',
  coursework: [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
    'Database Management Systems',
    'Cybersecurity Fundamentals',
  ],
}

const experience = [
  {
    title: 'Class Representative - CSE (Cyber Security)',
    time: '2023 - 2027',
    detail:
      'Represented students, coordinated academic activities, and served as a liaison with faculty.',
  },
  {
    title: 'TARUGUARDIANS - Public Relations Team Member',
    time: '2024 - Present',
    detail:
      'Managed communication and outreach, promoted events, and handled public interactions.',
  },
  {
    title: 'House Captain - Arawali House (JNV)',
    time: '2020 - 2022',
    detail: 'Led house activities, coordinated inter-house events, and built team leadership.',
  },
]

const leadershipHighlights = [
  'Student-faculty liaison for academic coordination and issue resolution.',
  'Led outreach initiatives and event promotion with TARUGUARDIANS.',
  'Organized inter-house activities and built team leadership at JNV.',
]

const certificates = [
  'Deloitte Australia Cyber Program (Forage)',
  'Access Denied Workshop - Data Science Academy and ISTE',
  'Hacktoberfest 2024 Level 4 badge',
  'GirlScript Summer of Code 2025 - Project: GrowCraft',
]

const floatingSnippets = [
  'sudo nmap -sV target',
  'def secure_login():',
  'SELECT * FROM audit_logs;',
  'cipher = encrypt(secret)',
  'const token = jwt.sign()',
  'git commit -m "secure"',
]

const filters = ['All', 'Web', 'Security', 'ML']

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
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
      <ul className="project-highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-stack">
        {project.stack.map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
      <div className="project-links">
        <a className="link" href={project.github}>
          View on GitHub
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
            <p className="eyebrow">3rd-year CSE (Cyber Security) student</p>
            <h1>{profile.headline}</h1>
            <p className="hero-subtitle">{profile.subtitle}</p>
            <p className="typewriter">
              <span>{typedText}</span>
              <span className="type-cursor">|</span>
            </p>
            <p className="hero-punch">{profile.punchline}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="btn ghost" href={profile.resume}>
                View Resume
              </a>
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href="#contact">
                Contact Me
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
                {['Cybersecurity', 'Secure Web', 'Software Development', 'ML Basics'].map(
                  (item) => (
                    <span key={item} className="chip solid">{item}</span>
                  ),
                )}
              </div>
              <p className="panel-note">
                Learning fast. Shipping secure. Ready for internships in cyber or web.
              </p>
            </div>
            <div className="glass-card parallax-card">
              <p className="panel-title">Tech Stack Signal</p>
              <p className="panel-note">
                Python, React, secure APIs, and core cybersecurity fundamentals.
              </p>
              <div className="signal-bar">
                <span />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="education" className="section alt">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">Education</p>
            <h2>{education.title}</h2>
            <p className="section-subtitle">
              {education.subtitle} | {education.timeline}
            </p>
          </motion.div>
          <motion.div
            className="glass-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3>Relevant Coursework</h3>
            <ul className="course-list">
              {education.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
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
            <h2>Curiosity, rigor, and a security-first mindset</h2>
            <p className="section-subtitle">
              Third-year B.Tech CSE (Cyber Security) student focused on secure systems, web technologies,
              and hands-on projects that blend creativity with safety.
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
                Currently pursuing B.Tech in Computer Science and Engineering (Cyber Security) at Haldia
                Institute of Technology. I enjoy building secure software, learning how systems fail, and
                applying defenses that keep users safe.
              </p>
              <p>
                I am excited about secure web development, practical cybersecurity, and ML basics that
                support smarter decision-making.
              </p>
              <div className="timeline">
                <div className="timeline-item">
                  <span>2023</span>
                  <p>Started the CSE Cyber Security program and built web fundamentals.</p>
                </div>
                <div className="timeline-item">
                  <span>2024</span>
                  <p>Expanded into secure development and workshop-based learning.</p>
                </div>
                <div className="timeline-item">
                  <span>2025</span>
                  <p>Focused on security workflows and deeper systems thinking.</p>
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
                  { label: 'Cybersecurity Fundamentals', value: 76 },
                  { label: 'Web Technologies', value: 80 },
                  { label: 'Machine Learning Basics', value: 70 },
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
              <div className="stat-spotlight">
                <p>CGPA</p>
                <span>8.02/10</span>
              </div>
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
            <h2>Security-ready skills across coding, web, and ML basics</h2>
            <p className="section-subtitle">
              A blend of core CS, cybersecurity fundamentals, and practical tools for building reliable
              software.
            </p>
          </motion.div>
          <div className="skills-grid">
            <motion.div
              className="skill-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Skill Highlights</h3>
              {skillHighlights.map((item) => (
                <div key={item.label} className="skill-bar">
                  <div className="skill-bar-header">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <span style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </motion.div>
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                className="skill-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip solid">{item}</span>
                  ))}
                </div>
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
            <p className="section-eyebrow">Experience and Leadership</p>
            <h2>Leadership roles with real-world impact</h2>
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
              <h3>Leadership Highlights</h3>
              <ul className="achievement-list">
                {leadershipHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="stat-banner">
                <p>Available for internships in security + web.</p>
                <span className="glow-pill">Open to Roles</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="certificates" className="section">
          <motion.div
            className="section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="section-eyebrow">Certificates and Achievements</p>
            <h2>Proof of learning, consistency, and community impact</h2>
          </motion.div>
          <div className="badge-grid">
            {certificates.map((item) => (
              <motion.div
                key={item}
                className="badge-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <span>{item}</span>
              </motion.div>
            ))}
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
              <p>{profile.phone}</p>
              <div className="social-links">
                <a className="icon-link" href={profile.linkedin}>
                  <span>in</span>
                  LinkedIn
                </a>
                <a className="icon-link" href={profile.github}>
                  <span>gh</span>
                  GitHub
                </a>
                <a className="icon-link" href={`mailto:${profile.email}`}>
                  <span>@</span>
                  Email
                </a>
              </div>
              <div className="mini-cta">
                <p>Looking for a security-minded CS intern?</p>
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
