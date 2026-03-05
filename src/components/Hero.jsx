import { useState } from 'react'
import { profile } from '../data/portfolioData'

export default function Hero() {
  const [showLinks, setShowLinks] = useState(false)

  const quickLinks = [
    { label: 'GitHub', href: profile.github, image: profile.githubImage },
    { label: 'LinkedIn', href: profile.linkedin, image: profile.linkedinImage },
    { label: 'LeetCode', href: profile.leetcode, image: profile.leetcodeImage },
    { label: 'Email', href: `mailto:${profile.email}` },
    { label: 'Resume', href: profile.resume },
  ]

  return (
    <section id="home" className="classic-panel hero-bg reveal-up p-6 sm:p-8">
      <div className="grid items-center gap-8 md:grid-cols-[220px,1fr] lg:grid-cols-[260px,1fr]">
        <div className="mx-auto w-full max-w-[260px]">
          <button
            type="button"
            onClick={() => setShowLinks((current) => !current)}
            className="block w-full text-left transition-transform duration-300 hover:scale-[1.01]"
            aria-expanded={showLinks}
            aria-label="Toggle profile links"
          >
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              className="h-auto w-full border border-stone-900/20 bg-white object-cover"
              loading="eager"
            />
          </button>

          {showLinks && (
            <div className="reveal-fade mt-3 border border-stone-900/20 bg-white p-3 text-sm text-stone-800">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600">Quick Links</p>
              <ul className="space-y-1.5">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                      className="inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.label}
                          className="h-6 w-6 rounded-sm border border-stone-900/20 object-cover"
                          loading="lazy"
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="reveal-up delay-1">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">HELLO FOLKS !</p>
          <h1 className="mt-2 max-w-4xl text-2xl font-bold text-white sm:text-4xl">
            My name is Amrit I am a Programmer from Haldia Institute of Technology, India.
          </h1>
          <p className="mt-5 text-sm">
            <a href="#projects" className="font-semibold text-white decoration-white">MY WORKS</a>
            {' | '}
            <a href={profile.resume} target="_blank" rel="noreferrer" className="font-semibold text-white decoration-white">RESUME</a>
          </p>
        </div>
      </div>
    </section>
  )
}
