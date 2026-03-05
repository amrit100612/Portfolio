import { about } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="About" title="Software developer with ML mindset" />
      <div className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
        <p>{about.paragraph1}</p>
        <p>{about.paragraph2}</p>
        <p>{about.paragraph3}</p>
      </div>
    </section>
  )
}
