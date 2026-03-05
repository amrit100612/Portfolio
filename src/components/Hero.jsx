import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="glass rounded-2xl p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{profile.title}</p>
      <h1 className="mt-2 text-3xl font-bold text-white sm:text-5xl">{profile.name}</h1>
      <p className="mt-4 max-w-3xl text-slate-300">{profile.headline}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">View Projects</a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200">Download Resume</a>
      </div>
    </section>
  )
}
