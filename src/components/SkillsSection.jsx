import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { skills, skillChart } from '../data/portfolioData'

export default function SkillsSection() {
  return (
    <section id="skills" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Skills"
        title="Engineering toolkit with execution depth"
        description="Skills are grouped by engineering function with practical proficiency context, emphasizing implementation capability over keyword listing."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">{skill.category}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{skill.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Skills Chart</h3>
        <div className="mt-4 space-y-3">
          {skillChart.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <div className="mb-1 flex items-center justify-between text-xs text-slate-300 sm:text-sm">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" style={{ width: `${item.value}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
