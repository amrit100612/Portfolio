import { about } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="classic-panel rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="About" title={about.heading} />

      <div className="space-y-6 text-sm leading-7 text-stone-700 sm:text-base">
        <div>
          <h3 className="mb-2 text-base font-semibold text-stone-900 sm:text-lg">About</h3>
          <p>{about.aboutText}</p>
          <p className="mt-3">{about.aboutStory}</p>
        </div>

        <div>
          <h3 className="mb-2 text-base font-semibold text-stone-900 sm:text-lg">Interests</h3>
          <p>{about.interestsText}</p>
          <p className="mt-3">{about.interestsMusic}</p>
        </div>

        <div>
          <h3 className="mb-2 text-base font-semibold text-stone-900 sm:text-lg">Skills</h3>
          <p>{about.skillsText}</p>
        </div>

        <div>
          <h3 className="mb-2 text-base font-semibold text-stone-900 sm:text-lg">Tech Stack</h3>
          <ul className="space-y-1">
            {about.techStack.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
