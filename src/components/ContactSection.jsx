import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { contact, profile } from '../data/portfolioData'

export default function ContactSection() {
  return (
    <section id="contact" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Contact" title={contact.title} description={contact.message} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        <a href={`mailto:${profile.email}`} className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          Email Me
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
        >
          Connect on LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
        >
          Explore GitHub
        </a>
      </motion.div>
    </section>
  )
}
