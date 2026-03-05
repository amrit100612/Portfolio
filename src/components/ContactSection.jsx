import { contact, profile } from '../data/portfolioData'

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Contact</h2>
        <p className="section-sub" data-aos="fade-right" data-aos-delay="60">
          {contact.message}
        </p>

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

          <form className="contact-form" data-aos="fade-up" data-aos-delay="140">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required />
            </div>
            <button type="submit" className="btn btn-gold">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
