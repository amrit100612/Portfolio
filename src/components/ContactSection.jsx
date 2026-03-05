import { contact, profile } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function ContactSection() {
  return (
    <section id="contact" className="classic-panel p-6 sm:p-8">
      <SectionHeader eyebrow="CONTACT" title={contact.title} description={contact.message} />

      <div className="grid gap-5 text-sm leading-7 text-stone-700 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Address</p>
          <p className="mt-2">{contact.address}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Email</p>
          <a href={`mailto:${profile.email}`} className="mt-2 inline-block font-semibold underline underline-offset-4">
            {profile.email}
          </a>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">Phone</p>
          <p className="mt-2 font-medium text-stone-900">{profile.phone}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"
        >
          <img src={profile.githubImage} alt="GitHub" className="h-7 w-7 rounded-sm border border-stone-900/20 object-cover" loading="lazy" />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"
        >
          <img src={profile.linkedinImage} alt="LinkedIn" className="h-7 w-7 rounded-sm border border-stone-900/20 object-cover" loading="lazy" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}
