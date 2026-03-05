import { useMemo, useState } from 'react'
import { works } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const FILTERS = ['All', 'Programming', 'Machine Learning', 'Web Design']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'All') {
      return works
    }
    return works.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="classic-panel p-6 sm:p-8">
      <SectionHeader
        eyebrow="MY WORKS"
        title="MY WORKS"
        description="Filter by type and explore selected work, coding profiles, and project links."
      />

      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
        Filter by Type:
      </div>

      <div className="mb-6 flex flex-wrap items-center text-sm text-stone-700">
        {FILTERS.map((filter, index) => (
          <span key={filter} className="inline-flex items-center">
            <button
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`transition hover:text-stone-900 ${activeFilter === filter ? 'font-semibold text-stone-900 underline underline-offset-4' : ''}`}
            >
              {filter}
            </button>
            {index < FILTERS.length - 1 && <span className="mx-2 text-stone-500">|</span>}
          </span>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredWorks.map((item) => (
          <li key={`${item.title}-${item.category}`} className="flex items-center gap-3 border-b border-stone-900/10 pb-2">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="h-10 w-10 shrink-0 rounded-sm border border-stone-900/20 object-cover"
                loading="lazy"
              />
            )}
            <span className="mr-2 text-stone-500">-</span>
            {item.url === '#' ? (
              <span className="text-sm text-stone-700">{item.title} ... To Be Updated Soon</span>
            ) : (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold underline underline-offset-4"
              >
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>

      {filteredWorks.length === 0 && (
        <p className="mt-3 text-sm text-stone-600">No works in this category yet.</p>
      )}
      <div className="mt-6 text-sm text-stone-700">
        TO BE UPDATED SOON !
      </div>
    </section>
  )
}
