import { contact, profile } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function ContactSection() {
  return (
    <section id="contact" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Contact" title={contact.title} description={contact.message} />
      <div className="flex flex-wrap gap-3 text-sm">
        <a href={`mailto:${profile.email}`} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-4 py-2 text-slate-200">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-4 py-2 text-slate-200">LinkedIn</a>
      </div>
    </section>
  )
}
