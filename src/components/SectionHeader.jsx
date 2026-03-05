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
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-700 sm:text-base">{description}</p>}
    </motion.div>
  )
}
