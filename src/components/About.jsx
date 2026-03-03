import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { about } from '../data/portfolioData'

const points = [
  'B.Tech CSE (Cyber Security) student at Haldia Institute of Technology with CGPA 8.02/10.',
  'Builds practical ML and web projects with implementation-first focus.',
  'Practices DSA in Java consistently with emphasis on correctness and clarity.',
  'Contributes through leadership roles, open-source participation, and technical communication.',
]

export default function About() {
  return (
    <section id="about" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="About"
        title="A practical engineering journey built on fundamentals and execution"
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
