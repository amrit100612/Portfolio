import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolioData'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.typingRoles.length)
    }, 2400)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="pt-12 sm:pt-16">
      <motion.div variants={container} initial="hidden" animate="visible" className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <motion.p variants={item} className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {profile.title}
          </motion.p>
          <motion.h1 variants={item} className="mt-3 text-3xl font-bold leading-tight text-white sm:text-5xl">
            {profile.headline}
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            {profile.subheading}
          </motion.p>

          <motion.div variants={item} className="mt-4 h-6 text-sm text-cyan-200">
            <span className="font-medium">{profile.typingRoles[roleIndex]}</span>
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-cyan-200 align-middle" />
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Resume
            </a>
            <a href="#projects" className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Explore Projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
            >
              View GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
            >
              LeetCode
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-200">Recruiter Snapshot</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li><strong className="text-white">Education:</strong> 3rd Year B.Tech CSE (Cybersecurity)</li>
            <li><strong className="text-white">Target:</strong> FAANG-level SDE Internship</li>
            <li><strong className="text-white">Location:</strong> {profile.location}</li>
            <li><strong className="text-white">Strengths:</strong> DSA in Java, CS fundamentals, ML + Web engineering</li>
          </ul>
        </motion.aside>
      </motion.div>
    </section>
  )
}
