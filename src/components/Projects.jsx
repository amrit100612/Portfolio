import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function Projects() {
  return (
    <section id="projects" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Engineering Projects"
        title="Real projects with deployment, measurable outcomes, and clear engineering thinking"
        description="Each project includes architecture, implementation decisions, and outcomes to show end-to-end engineering depth."
      />

      <div className="mb-5 inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-100">
        Highlighted Projects
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className={`rounded-xl border bg-slate-900/60 p-5 ${
              project.featured
                ? 'border-cyan-300/35 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_28px_rgba(34,211,238,0.15)]'
                : 'border-white/10'
            }`}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <div className="flex flex-wrap items-center gap-2">
                {project.featured && (
                  <span className="rounded-full border border-cyan-300/35 bg-cyan-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
                    Featured
                  </span>
                )}
                <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  {project.type}
                </span>
              </div>
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

            {project.architecture?.length > 0 && (
              <div className="mt-4">
                <h4 className="mb-2 font-semibold text-cyan-200">Project Architecture</h4>
                <ul className="space-y-1 text-sm text-slate-300">
                  {project.architecture.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {(project.architectureFlow?.length > 0 || project.architecture?.length > 0) && (
              <div className="mt-4">
                <h4 className="mb-2 font-semibold text-cyan-200">Architecture Flow</h4>
                <div className="rounded-xl border border-cyan-300/20 bg-slate-950/70 p-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    {(project.architectureFlow ?? project.architecture.map((item) => item.split(':')[0])).map((node, nodeIndex, nodes) => (
                      <div key={`${project.title}-${node}`} className="flex items-center gap-2">
                        <span className="rounded-lg border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1.5 font-medium text-cyan-100">
                          {node}
                        </span>
                        {nodeIndex < nodes.length - 1 && <span className="text-cyan-200">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
          </motion.article>
        ))}
      </div>
    </section>
  )
}
