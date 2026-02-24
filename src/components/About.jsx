import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { about } from '../data/portfolioData'

const points = [
  'Started with Python automation and quickly adopted software engineering best practices.',
  'Evolved from ML prototypes to full-stack solutions with API reliability and maintainable UI design.',
  'Applies cybersecurity principles to improve trust, integrity, and secure-by-default implementation.',
  'Focused on scalable systems, measurable outcomes, and continuous technical growth.',
]

export default function About() {
  return (
    <section id="about" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="About"
        title="Building from first principles with product and systems ownership"
        description={about.paragraph1}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="space-y-4 text-sm leading-6 text-slate-300"
        >
          <p>{about.paragraph2}</p>
          <p>{about.paragraph3}</p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3"
        >
          {points.map((point) => (
            <li key={point} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              {point}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
