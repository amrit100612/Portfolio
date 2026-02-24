import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { blogIdeas } from '../data/portfolioData'

export default function BlogSection() {
  return (
    <section id="blog" className="glass rounded-2xl p-6 sm:p-8">
      <SectionHeader
        eyebrow="Technical Writing"
        title="Blog pipeline for engineering communication"
        description="Planned technical articles that demonstrate architecture depth, debugging process, and clear written communication expected in high-performance engineering teams."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {blogIdeas.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
          >
            <h3 className="text-base font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{post.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
