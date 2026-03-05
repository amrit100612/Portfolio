import { dsa } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function DsaSection() {
  return (
    <section id="dsa" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="DSA" title="Problem solving discipline" />
      <ul className="space-y-2 text-sm text-slate-300">
        {dsa.highlights.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
      <a href={dsa.profileUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950">
        View LeetCode Profile
      </a>
    </section>
  )
}
