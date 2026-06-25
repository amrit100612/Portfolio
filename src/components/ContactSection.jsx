import { useState } from 'react'
import { contact, profile } from '../data/portfolioData'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const hasSentMessage =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('sent') === '1'

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Contact</h2>
        <p className="section-sub" data-aos="fade-right" data-aos-delay="60">
          {contact.message}
        </p>
        {hasSentMessage && (
          <p className="section-sub" data-aos="fade-right" data-aos-delay="80">
            Thanks. Your message has been sent successfully.
          </p>
        )}

        <div className="contact-grid">
          <div className="contact-card" data-aos="fade-up" data-aos-delay="80">
            <h3 className="icon-title">
              <i className="fas fa-paper-plane" />
              Let&apos;s Connect
            </h3>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <i className="fas fa-envelope" />
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <i className="fab fa-github" />
                github.com/amrit100612
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" />
                linkedin.com/in/amrit100612
              </a>
              <a href={profile.website} target="_blank" rel="noreferrer">
                <i className="fas fa-globe" />
                amritkumar.me
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            data-aos="fade-up"
            data-aos-delay="140"
            action="https://formsubmit.co/amritkum1209@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={`${profile.website}/?sent=1#contact`} />
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required />
            </div>
            <button type="submit" className="btn btn-gold" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
