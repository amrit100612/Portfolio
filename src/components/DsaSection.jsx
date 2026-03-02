import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { dsa } from '../data/portfolioData'

export default function DsaSection() {
  return (
    <section id="dsa" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="DSA & Achievements"
        title="Problem solving in Java with interview-focused consistency"
        description="Structured preparation across platforms, contest-style timing, and deliberate revision to build strong correctness and communication under pressure."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dsa.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
            <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Categories Solved</h3>
          <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {dsa.categories.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Recruiter Highlights</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {dsa.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Certifications & Milestones</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {dsa.certifications.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Academic Achievements</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {dsa.academic.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Optimized Example</h3>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-slate-950 p-4 text-xs text-cyan-100 sm:text-sm">
          <code>{dsa.snippet}</code>
        </pre>
        <p className="mt-3 text-sm text-slate-300">{dsa.complexity}</p>
        <a
          href={dsa.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 transition hover:bg-cyan-300"
        >
          View LeetCode Profile
        </a>
      </div>
    </section>
  )
}
