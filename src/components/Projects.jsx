import { projectCards } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-right">Projects</h2>
        <p className="section-sub" data-aos="fade-right" data-aos-delay="60">
          Selected projects with practical architecture and implementation depth.
        </p>

        <div className="projects-grid">
          {projectCards.map((project, index) => (
            <article className="project-card" data-aos="fade-up" data-aos-delay={60 + index * 50} key={project.title}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={`${project.title}-${item}`}>{item}</span>
                ))}
              </div>

              <details>
                <summary>Architecture</summary>
                <ul>
                  {project.architecture.map((line) => (
                    <li key={`${project.title}-${line}`}>{line}</li>
                  ))}
                </ul>
              </details>

              <div className="project-actions">
                <a className="btn btn-gold" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
