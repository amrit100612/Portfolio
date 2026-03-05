import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="classic-panel hero-bg hero-animate p-6 sm:p-8">
      <div className="max-w-4xl">
        <p className="hero-line hero-line-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">HELLO FOLKS !</p>
        <h1 className="hero-line hero-line-2 mt-2 text-2xl font-bold text-white sm:text-4xl">
          My name is Amrit I am a Programmer from Haldia Institute of Technology, India.
        </h1>
        <p className="hero-line hero-line-3 mt-5 text-sm">
          <a href="#projects" className="font-semibold text-white decoration-white">MY WORKS</a>
          {' | '}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="font-semibold text-white decoration-white">RESUME</a>
        </p>

        <a href="#about" className="hero-scroll-cue mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 no-underline">
          Scroll
          <span aria-hidden="true">v</span>
        </a>
      </div>
    </section>
  )
}
