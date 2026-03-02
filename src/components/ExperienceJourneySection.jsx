import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { experienceJourney } from '../data/portfolioData'

export default function ExperienceJourneySection() {
  return (
    <section id="journey" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Experience"
        title="Learning journey through internships, hackathons, and open collaboration"
        description="As a fresher, I focus on proving execution through consistent project delivery, collaborative building, and transparent public learning."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {experienceJourney.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{item.period}</p>
            <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
