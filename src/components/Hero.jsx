import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="classic-panel hero-bg hero-animate p-6 sm:p-8">
      <div className="max-w-4xl">
        <p className="hero-line hero-line-1 hero-mix-eyebrow text-sm font-semibold uppercase tracking-[0.24em]">HELLO FOLKS !</p>
        <h1 className="hero-line hero-line-2 hero-mix-title mt-2 text-2xl font-bold sm:text-4xl">
          My name is Amrit I am a Programmer from Haldia Institute of Technology, India.
        </h1>
        <p className="hero-line hero-line-3 mt-5 text-sm">
          <a href="#projects" className="hero-mix-link-primary font-semibold decoration-white">MY WORKS</a>
          {' | '}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="hero-mix-link-secondary font-semibold decoration-white">RESUME</a>
        </p>

        <a href="#about" className="hero-scroll-cue hero-mix-link-secondary mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] no-underline">
          Scroll
          <span aria-hidden="true">v</span>
        </a>
      </div>
    </section>
  )
}
