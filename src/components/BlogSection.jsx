import { blogIdeas } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

export default function BlogSection() {
  return (
    <section id="blog" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader eyebrow="Blog" title="Technical writing pipeline" />
      <div className="grid gap-3 sm:grid-cols-2">
        {blogIdeas.map((idea) => (
          <article key={idea.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-white">{idea.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{idea.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
