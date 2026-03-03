import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { contact, contactForm, profile } from '../data/portfolioData'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio Contact from ${formData.name || 'Recruiter'}`)}&body=${encodeURIComponent(
    `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`,
  )}`

  return (
    <section id="contact" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Contact" title={contact.title} description={contact.message} />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3 rounded-xl border border-white/10 bg-slate-900/60 p-4"
          onSubmit={(event) => {
            event.preventDefault()
            window.location.href = mailtoHref
          }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">{contactForm.heading}</h3>

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />

          <button type="submit" className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3"
        >
          <a href={`tel:${profile.phone}`} className="block rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10">
            Phone: {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="block rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10">
            Email: {profile.email}
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
          >
            Website: amritkumar.me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
          >
            LinkedIn Profile
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
          >
            GitHub Repositories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
