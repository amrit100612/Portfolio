import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { resumeTips } from '../data/portfolioData'

export default function ResumeTipsSection() {
  return (
    <section id="resume-tips" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Resume Tips"
        title="Resume tips for high-signal internship applications"
        description="This section reflects the same standards I follow while refining my own resume for top-tier software roles."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {resumeTips.map((tip, index) => (
          <motion.div
            key={tip}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-300"
          >
            • {tip}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
