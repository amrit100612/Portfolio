import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="classic-panel p-6 sm:p-8">
      <div className="grid items-center gap-8 md:grid-cols-[220px,1fr] lg:grid-cols-[260px,1fr]">
        <div className="mx-auto w-full max-w-[260px]">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="h-auto w-full border border-stone-900/20 bg-white object-cover"
            loading="eager"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-stone-600">{profile.title}</p>
          <h1 className="mt-2 text-3xl font-bold text-stone-900 sm:text-5xl">{profile.name}</h1>
          <p className="mt-2 text-lg text-stone-800">I am a Programmer from India.</p>
          <p className="mt-4 max-w-3xl text-stone-700">{profile.headline}</p>
          <p className="mt-2 max-w-3xl text-sm text-stone-600">{profile.subheading}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#projects" className="border border-stone-900/20 bg-white px-4 py-2 text-sm font-semibold text-stone-900">My Works</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="border border-stone-900/20 bg-white px-4 py-2 text-sm text-stone-800">Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
