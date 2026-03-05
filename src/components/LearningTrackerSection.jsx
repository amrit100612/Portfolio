import { dailyLearningTracker } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function LearningTrackerSection() {
  return (
    <section id="tracker" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Tracker" title="Daily learning tracker" description={dailyLearningTracker.streak} />
      <div className="grid gap-3 sm:grid-cols-2">
        {dailyLearningTracker.blocks.map((block) => (
          <article key={block.label} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-cyan-200">{block.label}</h3>
            <p className="mt-1 text-sm text-slate-300">{block.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
