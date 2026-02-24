import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mb-6"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
    </motion.div>
  )
}
