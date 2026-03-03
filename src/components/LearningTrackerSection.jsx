import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { dailyLearningTracker } from '../data/portfolioData'

export default function LearningTrackerSection() {
  return (
    <section id="tracker" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Daily Tracker"
        title="Daily learning tracker for consistent engineering growth"
        description="This tracker reflects a steady routine across DSA, CS fundamentals, project implementation, and technical communication practice."
      />

      <div className="rounded-xl border border-cyan-300/35 bg-cyan-300/10 p-4 text-sm text-cyan-100">
        <strong className="text-white">Current consistency focus:</strong> {dailyLearningTracker.streak}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {dailyLearningTracker.blocks.map((block, index) => (
          <motion.article
            key={block.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">{block.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{block.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
