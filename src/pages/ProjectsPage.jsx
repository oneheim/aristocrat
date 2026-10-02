import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import OrderBlock from '../components/OrderBlock'
import ProjectCard from '../components/ProjectCard'
import { catalogProjects, extraProjects, compareByDate } from '../data/projects'

const filters = [
  { id: 'all', label: '/all projects (9)', tag: null },
  { id: 'conferences', label: '/conferences (1)', tag: '/conferences' },
  { id: 'launches', label: '/launches (1)', tag: '/launches' },
  { id: 'festivals', label: '/musical festivals (1)', tag: '/musical festivals' },
  { id: 'city', label: '/city festivals (1)', tag: '/city festivals' },
  { id: 'museums', label: '/museums (1)', tag: '/museums' },
  { id: 'forums', label: '/forums (4)', tag: '/forums' },
]

// Slugs of projects important enough to show in the big feature format.
// They still appear in strict date order — only the card format changes.
const FEATURED_SLUGS = ['moscow-2030']
const SMALL_CARD_LIMIT = 9

function buildSegments(sortedProjects) {
  const segments = []
  let group = []
  let smallCount = 0
  const overflow = []

  function flushGroup() {
    if (group.length) {
      segments.push({ type: 'grid', items: group })
      group = []
    }
  }

  for (const project of sortedProjects) {
    if (FEATURED_SLUGS.includes(project.slug)) {
      flushGroup()
      segments.push({ type: 'feature', item: project })
    } else if (smallCount < SMALL_CARD_LIMIT) {
      group.push(project)
      smallCount += 1
    } else {
      overflow.push(project)
    }
  }
  flushGroup()

  return { segments, overflow }
}

function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [showMore, setShowMore] = useState(false)
  const sortedAll = [...catalogProjects, ...extraProjects].sort(compareByDate)
  const { segments, overflow } = buildSegments(sortedAll)
  const activeFilter = filters.find((item) => item.id === filter) ?? filters[0]
  const filteredAll = activeFilter.tag
    ? sortedAll.filter((project) => project.tag === activeFilter.tag)
    : sortedAll
  const isAll = filter === 'all'

  function selectFilter(id) {
    setFilter(id)
    setShowMore(false)
  }

  return (
    <div className="page projects-page">
      <div className="projects-page-top">
        <Header variant="light" />
      </div>

      <h1 className="projects-page-title">PROJECTS</h1>

      <div className="projects-filters" role="tablist" aria-label="Project categories">
        {filters.map((item) => (
          <button
            type="button"
            key={item.id}
            role="tab"
            className={filter === item.id ? 'is-active' : undefined}
            aria-selected={filter === item.id}
            onClick={() => selectFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="projects-catalog">
        {isAll ? (
          <>
            {segments.map((segment, index) =>
              segment.type === 'grid' ? (
                <div className="projects-grid" key={`grid-${index}`}>
                  {segment.items.map((project) => (
                    <ProjectCard project={project} key={project.slug} />
                  ))}
                </div>
              ) : (
                <article className="project-feature" key={segment.item.slug}>
                  <div className="project-feature-copy">
                    <h2>
                      {segment.item.heroLines[0]}
                      <br />
                      {segment.item.heroLines[1]}
                    </h2>
                    <p>{segment.item.place}</p>
                    <span>{segment.item.year}</span>
                    <span>{segment.item.tag}</span>
                    <Link className="btn-ghost" to={`/projects/${segment.item.slug}`}>
                      read more
                    </Link>
                  </div>
                  <div className="project-feature-media">
                    <img src={segment.item.image} alt="" />
                  </div>
                </article>
              ),
            )}

            {showMore ? (
              <div className="projects-grid projects-extra" id="more-projects">
                {overflow.map((project) => (
                  <ProjectCard project={project} key={project.slug} />
                ))}
              </div>
            ) : overflow.length > 0 ? (
              <button
                type="button"
                className="projects-more"
                onClick={() => setShowMore(true)}
              >
                show more
              </button>
            ) : null}
          </>
        ) : (
          <div className="projects-grid">
            {filteredAll.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        )}
      </div>

      <OrderBlock />

      <Contacts />
    </div>
  )
}

export default ProjectsPage
