import { about, aboutFacts, profile } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">About Me</h2>
        <p className="section-sub" data-aos="fade-right" data-aos-delay="60">
          Passionate about secure software engineering, intelligent systems, and practical problem solving.
        </p>

        <div className="about-grid">
          <div className="about-photo" data-aos="fade-up-right">
            <img src={profile.photo} alt={profile.photoAlt} loading="lazy" />
          </div>

          <div data-aos="fade-up-left">
            <p>{about.aboutText}</p>
            <p className="about-story">{about.aboutStory}</p>

            <div className="fact-grid">
              {aboutFacts.map((fact, index) => (
                <article className="fact-card" data-aos="fade-up" data-aos-delay={60 + index * 60} key={fact.title}>
                  <i className={fact.icon} />
                  <p className="fact-title">{fact.title}</p>
                  <p>{fact.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
