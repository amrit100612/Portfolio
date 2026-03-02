import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { interviewRoadmap } from '../data/portfolioData'

export default function InterviewRoadmapSection() {
  return (
    <section id="roadmap" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Interview Roadmap"
        title="FAANG interview preparation roadmap"
        description="A structured roadmap balancing DSA, fundamentals, project depth, and mock interview execution."
      />

      <div className="space-y-4">
        {interviewRoadmap.map((item, index) => (
          <motion.article
            key={item.phase}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
          >
            <h3 className="text-base font-semibold text-white">{item.phase}</h3>
            <p className="mt-2 text-sm text-cyan-200"><strong className="text-cyan-100">Focus:</strong> {item.focus}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300"><strong className="text-white">Action:</strong> {item.action}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
