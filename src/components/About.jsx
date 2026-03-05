import { about, profile } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="classic-panel reveal-up delay-1 p-6 sm:p-8">
      <SectionHeader eyebrow="About" title={about.heading} />

      <div className="grid items-start gap-6 md:grid-cols-[220px,1fr]">
        <div>
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="w-full border border-stone-900/20 bg-white object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 text-[15px] leading-7 text-stone-700">
          <div>
            <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-stone-900">About</h3>
            <p>{about.aboutText}</p>
            <p className="mt-3">{about.aboutStory}</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-stone-900">Interests</h3>
            <p>{about.interestsText}</p>
            <p className="mt-3">{about.interestsMusic}</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-stone-900">Skills</h3>
            <p>{about.skillsText}</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold uppercase tracking-[0.08em] text-stone-900">Tech Stack</h3>
            <ul className="space-y-1">
              {about.techStack.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
