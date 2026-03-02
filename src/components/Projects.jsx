import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Engineering Projects"
        title="Real projects with deployment, measurable outcomes, and clear engineering thinking"
        description="Each project is presented recruiter-style: Problem → Solution → Tech Stack → Results, followed by repository and live links where available."
      />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                {project.type}
              </span>
            </div>

            <div className="grid gap-4 text-sm leading-6 text-slate-300 md:grid-cols-2">
              <p><strong className="text-white">Problem:</strong> {project.problem}</p>
              <p><strong className="text-white">Why It Matters:</strong> {project.whyItMatters}</p>
              <p><strong className="text-white">Solution:</strong> {project.solution}</p>
              <p><strong className="text-white">Approach:</strong> {project.approach}</p>
              <p className="md:col-span-2">
                <strong className="text-white">Tech Stack:</strong> {project.stack.join(' • ')}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="mb-2 font-semibold text-cyan-200">Challenges</h4>
              <ul className="space-y-1 text-sm text-slate-300">
                {project.challenges.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold text-cyan-200">Results</h4>
                <ul className="space-y-1 text-slate-300">
                  {project.metrics.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-300"><strong className="text-white">Deployment:</strong> {project.deployment}</p>
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-cyan-300"
                  >
                    GitHub Repo
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
