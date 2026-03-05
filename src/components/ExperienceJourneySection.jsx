import { experienceJourney } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function ExperienceJourneySection() {
  return (
    <section id="journey" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Journey" title="Experience and growth" />
      <div className="space-y-4">
        {experienceJourney.map((item) => (
          <article key={item.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-xs uppercase tracking-wide text-cyan-300">{item.period}</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              {item.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
