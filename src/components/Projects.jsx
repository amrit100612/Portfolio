import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Engineering Projects"
        title="Case studies built with product, architecture, and operational thinking"
        description="Each project is documented using engineering-review structure: problem framing, architecture decisions, implementation constraints, optimization work, and measurable outcomes."
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
              <p><strong className="text-white">Problem Statement:</strong> {project.problem}</p>
              <p><strong className="text-white">Real-world Context:</strong> {project.context}</p>
              <p className="md:col-span-2"><strong className="text-white">Architecture:</strong> {project.architecture}</p>
              <p className="md:col-span-2">
                <strong className="text-white">Tech Stack:</strong> {project.stack.join(' • ')}
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-cyan-200">Challenges</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.challenges.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-cyan-200">Optimizations</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.optimizations.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
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
              <div className="space-y-2 text-slate-300">
                <p><strong className="text-white">Deployment:</strong> {project.deployment}</p>
                <p><strong className="text-white">Future Improvements:</strong> {project.future}</p>
              </div>
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/35 hover:bg-white/10"
                  >
                    GitHub Repo
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
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
