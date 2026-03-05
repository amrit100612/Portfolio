import { useMemo, useState } from 'react'
import { works } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const FILTERS = ['All', 'Programming', 'Machine Learning', 'Web Design']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [openArchitectures, setOpenArchitectures] = useState({})

  const openCardLink = (url) => {
    if (!url) {
      return
    }
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const toggleArchitecture = (cardKey) => {
    setOpenArchitectures((current) => ({
      ...current,
      [cardKey]: !current[cardKey],
    }))
  }

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'All') {
      return works
    }
    return works.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="classic-panel reveal-up delay-2 p-6 sm:p-8">
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

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredWorks.map((item) => {
          const cardKey = `${item.title}-${item.category}`
          const cardClassName =
            'vikas-card group block cursor-pointer border border-stone-900/20 bg-white p-3 no-underline transition hover:border-stone-900/50 hover:bg-stone-50'

          const content = (
            <>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-3 h-36 w-full border border-stone-900/15 object-cover"
                  loading="lazy"
                />
              )}
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">{item.category}</p>
              <h3 className="mt-1 text-sm font-semibold text-stone-900 group-hover:underline">{item.title}</h3>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="text-xs text-stone-600">Click card to open link</span>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    toggleArchitecture(cardKey)
                  }}
                  className="border border-stone-900/20 px-2 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-stone-800 hover:bg-stone-100"
                >
                  Architecture
                </button>
              </div>

              {openArchitectures[cardKey] && item.architecture?.length > 0 && (
                <div className="mt-3 border border-stone-900/15 bg-stone-50 p-2">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-stone-700">Architecture Structure</p>
                  <ul className="space-y-1 text-xs text-stone-700">
                    {item.architecture.map((node) => (
                      <li key={`${cardKey}-${node}`}>- {node}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )

          return (
            <article
              key={cardKey}
              className={cardClassName}
              role="button"
              tabIndex={0}
              onClick={() => openCardLink(item.url)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openCardLink(item.url)
                }
              }}
            >
              {content}
            </article>
          )
        })}
      </div>

      {filteredWorks.length === 0 && (
        <p className="mt-3 text-sm text-stone-600">No works in this category yet.</p>
      )}
    </section>
  )
}
