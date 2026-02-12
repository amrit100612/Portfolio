import { useEffect } from 'react'
import './App.css'

const profile = {
  name: 'Amrit Kumar',
  location: 'Kolkata, India',
  role: '3rd Year CSE (Cyber Security) Student',
  tagline: 'I build simple, secure, and user-friendly web experiences.',
  degree:
    'B.Tech in Computer Science and Engineering (Cyber Security), Haldia Institute of Technology (2023-2027)',
  cgpa: '8.02 / 10',
  interests: [
    'Cybersecurity',
    'Secure systems',
    'Web development',
    'Programming',
    'Machine learning basics',
    'Data science basics',
  ],
  email: 'amritkum1209@gmail.com',
  phone: '+91 9508043572',
  linkedin: 'https://linkedin.com/in/amrit-kumar',
  github: 'https://github.com/amritkum1209',
  resume: 'https://drive.google.com/file/d/1pgDYTm0XBWvT9vqV-atukpNN6yg7A0-i/view?usp=sharing',
}

const projects = [
  {
    title: 'Weather Detecting Website',
    description:
      'Real-time weather dashboard with WeatherAPI.com integration and geolocation support.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Async/await Fetch API with error handling',
      'Location-based detection via Geolocation',
      'Temperature in Celsius + AQI display',
    ],
    github: '#',
  },
  {
    title: 'CipherX - Password Encrypter/Decrypter',
    description:
      'CLI tool with encryption/decryption modes that reinforces cybersecurity fundamentals.',
    stack: ['Python'],
    highlights: [
      'Input validation with safe prompts',
      'String transformations for encryption/decryption',
      'Focus on data protection concepts',
    ],
    github: '#',
  },
  {
    title: 'ML-based Prediction Model',
    description:
      'Supervised learning pipeline with preprocessing, evaluation, and baseline analysis.',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
    highlights: [
      'Train-test split with evaluation metrics',
      'Feature engineering and baseline modeling',
      'Explainability notes for model decisions',
    ],
    github: '#',
  },
]

const skills = [
  {
    title: 'Programming',
    items: ['C', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Web',
    items: ['HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks and Libraries',
    items: ['React.js'],
  },
  {
    title: 'Machine Learning (Basics)',
    items: [
      'Linear Regression',
      'Logistic Regression',
      'Decision Trees',
      'Random Forest',
      'KNN',
      'Content-Based Recommendation Systems',
    ],
  },
  {
    title: 'Data Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    title: 'Tools and Platforms',
    items: ['Git', 'GitHub', 'Database Management'],
  },
  {
    title: 'Core Concepts',
    items: ['OOP', 'Operating Systems', 'Computer Networks', 'Cyber Security Fundamentals'],
  },
]

const experience = [
  {
    role: 'Class Representative - CSE (Cyber Security)',
    time: '2023 - 2027',
    points: [
      'Represented students and acted as a liaison between faculty and students.',
      'Helped coordinate academic and departmental activities.',
    ],
  },
  {
    role: 'TARUGUARDIANS - Public Relations Team Member',
    time: '2024 - Present',
    points: [
      'Managed communication and outreach.',
      'Helped promote events and handle public interactions.',
    ],
  },
  {
    role: 'House Captain - Arawali House (JNV)',
    time: '2020 - 2022',
    points: [
      'Led house activities and inter-house events.',
      'Built leadership, teamwork, and organization skills.',
    ],
  },
]

const certificates = [
  'Deloitte Australia Cyber Program (Forage)',
  'Access Denied Workshop (Data Science Academy and ISTE)',
  'Hacktoberfest 2024 - Level 4 Badge',
  'Contributor - GirlScript Summer of Code 2025 (Project: GrowCraft)',
]

const coursework = [
  'Data Structures and Algorithms',
  'Operating Systems',
  'Object-Oriented Programming',
  'Computer Networks',
  'Database Management Systems',
  'Cybersecurity Fundamentals',
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <div className="brand">{profile.name}</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn outline" href={profile.resume}>
            View Resume
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text reveal">
              <p className="eyebrow">{profile.role}</p>
              <h1>{profile.name}</h1>
              <p className="hero-tagline">{profile.tagline}</p>
              <p className="hero-summary">{profile.degree}</p>
              <div className="hero-actions">
                <a className="btn" href="#projects">
                  View Projects
                </a>
                <a className="btn outline" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-card reveal">
              <div className="hero-card-inner">
                <p className="hero-card-title">Quick Facts</p>
                <div className="fact-row">
                  <span>Location</span>
                  <span>{profile.location}</span>
                </div>
                <div className="fact-row">
                  <span>Specialization</span>
                  <span>Cyber Security</span>
                </div>
                <div className="fact-row">
                  <span>CGPA</span>
                  <span>{profile.cgpa}</span>
                </div>
                <div className="chip-row">
                  {profile.interests.map((interest) => (
                    <span key={interest} className="chip">{interest}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-shape" aria-hidden="true" />
        </section>

        <section id="about" className="section">
          <div className="container reveal">
            <div className="section-header">
              <h2>About Me</h2>
              <p>
                I am a third-year B.Tech CSE (Cyber Security) student at Haldia Institute of Technology
                with a CGPA of 8.02/10. I enjoy building secure web experiences, exploring secure systems,
                and strengthening my foundations in programming, ML, and data science.
              </p>
            </div>
            <div className="stat-card">
              <p>CGPA</p>
              <span>{profile.cgpa}</span>
            </div>
            <div className="facts-row">
              <div>
                <strong>Location:</strong> {profile.location}
              </div>
              <div>
                <strong>Specialization:</strong> Cyber Security
              </div>
              <div>
                <strong>CGPA:</strong> {profile.cgpa}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section light">
          <div className="container reveal">
            <div className="section-header">
              <h2>Education</h2>
              <p>Haldia Institute of Technology</p>
            </div>
            <div className="card">
              <h3>B.Tech - Computer Science and Engineering (Cyber Security)</h3>
              <p>2023 - 2027</p>
              <p>CGPA: {profile.cgpa}</p>
              <p className="label">Relevant Coursework:</p>
              <div className="chip-row">
                {coursework.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container reveal">
            <div className="section-header">
              <h2>Projects</h2>
              <p>Focused builds that show secure, reliable development habits.</p>
            </div>
            <div className="grid">
              {projects.map((project) => (
                <article key={project.title} className="card hover-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="chip-row">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                  <a className="btn small" href={project.github}>
                    View on GitHub
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section light">
          <div className="container reveal">
            <div className="section-header">
              <h2>Skills</h2>
              <p>Clear, organized expertise across programming, web, and cybersecurity basics.</p>
            </div>
            <div className="grid">
              {skills.map((group) => (
                <div key={group.title} className="card">
                  <h3>{group.title}</h3>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span key={item} className="chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container reveal">
            <div className="section-header">
              <h2>Experience and Leadership</h2>
              <p>Roles that built communication, responsibility, and team leadership.</p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div key={item.role} className="timeline-item">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="muted">{item.time}</p>
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section light">
          <div className="container reveal">
            <div className="section-header">
              <h2>Certificates and Achievements</h2>
              <p>Professional learning milestones and community contributions.</p>
            </div>
            <div className="grid badges">
              {certificates.map((item) => (
                <div key={item} className="badge">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container reveal">
            <div className="section-header">
              <h2>Contact</h2>
              <p>Reach out for internships, collaborations, or cybersecurity conversations.</p>
            </div>
            <div className="contact-grid">
              <div className="card">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
                <p>
                  <strong>Phone:</strong> {profile.phone}
                </p>
                <div className="socials">
                  <a href={profile.linkedin}>LinkedIn</a>
                  <a href={profile.github}>GitHub</a>
                </div>
              </div>
              <form className="card contact-form" onSubmit={(event) => event.preventDefault()}>
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@email.com" required />
                </label>
                <label>
                  Message
                  <textarea name="message" rows="4" placeholder="How can I help?" required />
                </label>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Designed by {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
