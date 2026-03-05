import { premiumSkills } from '../data/portfolioData'

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Skills</h2>
        <p className="section-sub" data-aos="fade-right" data-aos-delay="60">
          Core technologies and tools I use to build practical, scalable software solutions.
        </p>

        <div className="skill-grid">
          {premiumSkills.map((item, index) => (
            <div key={item.label} data-aos="fade-up" data-aos-delay={60 + index * 60}>
              <div className="skill-label">
                <span>{item.label}</span>
                <span>{item.detail}</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${item.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
