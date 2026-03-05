import { useEffect, useRef } from 'react'
import { heroRoles, profile } from '../data/portfolioData'

export default function Hero() {
  const typedRef = useRef(null)

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

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div data-aos="fade-up" data-aos-duration="900">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-name">Amrit Kumar</h1>
          <p className="typed-line">
            I am a <strong ref={typedRef} />
          </p>
          <p className="hero-desc">
            A third-year undergraduate student in Computer Science and Engineering (Cyber Security) at Haldia Institute of
            Technology, India, originally from Sheikhpura, Bihar.
          </p>

          <div className="btn-row">
            <a className="btn btn-gold" href="#projects">View Projects</a>
            <a className="btn btn-outline" href={profile.resume} target="_blank" rel="noreferrer">Download Resume</a>
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

        <div className="profile-wrap" data-aos="zoom-in" data-aos-duration="1000">
          <div className="profile-circle">
            <img src={profile.photo} alt={profile.photoAlt} />
          </div>
          <span className="float-icon float-1"><i className="fas fa-shield-halved" /></span>
          <span className="float-icon float-2"><i className="fas fa-lock" /></span>
          <span className="float-icon float-3"><i className="fas fa-code" /></span>
        </div>
      </div>
    </section>
  )
}
