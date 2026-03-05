export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold uppercase text-stone-900">{title}</h2>
      {description && <p className="mt-2 max-w-3xl text-sm leading-7 text-stone-700">{description}</p>}
    </div>
  )
}
