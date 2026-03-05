import { achievements } from '../data/portfolioData'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Achievements</h2>
        <div className="achieve-grid">
          {achievements.map((item, index) => (
            <article className="achieve-card" data-aos="fade-up" data-aos-delay={60 + index * 50} key={item.title}>
              <h3 className="icon-title">
                <i className={item.icon} />
                {item.title}
              </h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
