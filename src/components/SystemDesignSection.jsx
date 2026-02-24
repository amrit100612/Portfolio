import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { systemDesign } from '../data/portfolioData'

export default function SystemDesignSection() {
  return (
    <section id="system-design" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="System Design"
        title="Design thinking across scale, reliability, and tradeoffs"
        description="Structured mini-designs to demonstrate component decomposition, data strategy, and operational tradeoffs for real-world high-traffic systems."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {systemDesign.map((design, index) => (
          <motion.article
            key={design.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
          >
            <h3 className="text-base font-semibold text-white">{design.title}</h3>
            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
              <div>
                <p className="font-semibold text-cyan-200">Components</p>
                <ul className="mt-1 space-y-1">
                  {design.components.map((component) => (
                    <li key={component}>• {component}</li>
                  ))}
                </ul>
              </div>
              <p><span className="font-semibold text-cyan-200">Databases:</span> {design.databases}</p>
              <p><span className="font-semibold text-cyan-200">Load Balancing:</span> {design.loadBalancing}</p>
              <p><span className="font-semibold text-cyan-200">Caching:</span> {design.caching}</p>
              <p><span className="font-semibold text-cyan-200">Tradeoffs:</span> {design.tradeoffs}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
