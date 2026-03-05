import { skills } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function SkillsSection() {
  return (
    <section id="skills" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Skills" title="Engineering toolkit" />
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((item) => (
          <article key={item.category} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-cyan-200">{item.category}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
