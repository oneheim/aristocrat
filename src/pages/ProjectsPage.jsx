import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import OrderBlock from '../components/OrderBlock'
import ProjectCard from '../components/ProjectCard'
import CategoryList from '../components/CategoryList'
import { useLanguage } from '../i18n/LanguageContext'
import { catalogProjects, extraProjects, compareByDate, localizeProject } from '../data/projects'
import { isCategoryId } from '../data/categories'

const FEATURED_SLUGS = ['moscow-2030']
const SMALL_CARD_LIMIT = 9
const SMALL_COLS = 3

function isFeatured(slug) {
  return FEATURED_SLUGS.includes(slug)
}

function buildSegments(projects) {
  const segments = []
  const pending = [...projects]
  let smallBuf = []

  function flushSmall() {
    if (smallBuf.length) {
      segments.push({ type: 'grid', items: smallBuf })
      smallBuf = []
    }
  }

  while (pending.length) {
    const project = pending.shift()
    if (!isFeatured(project.slug)) {
      smallBuf.push(project)
      continue
    }

    const remainder = smallBuf.length % SMALL_COLS
    if (remainder !== 0) {
      const need = SMALL_COLS - remainder
      const pulled = []
      const rest = []
      for (const item of pending) {
        if (pulled.length < need && !isFeatured(item.slug)) pulled.push(item)
        else rest.push(item)
      }
      smallBuf.push(...pulled)
      pending.length = 0
      pending.push(...rest)
    }
    flushSmall()
    segments.push({ type: 'feature', item: project })
  }
  flushSmall()
  return segments
}

function ProjectsPage() {
  const { lang, t } = useLanguage()
  const [params] = useSearchParams()
  const [showMore, setShowMore] = useState(false)
  const filter = isCategoryId(params.get('cat')) ? params.get('cat') : null
  const sortedAll = useMemo(
    () => [...catalogProjects, ...extraProjects].sort(compareByDate),
    [],
  )
  const pool = useMemo(() => {
    const list = filter ? sortedAll.filter((project) => project.category === filter) : sortedAll
    return list.slice().sort(compareByDate)
  }, [sortedAll, filter])
  const smallProjects = useMemo(
    () => pool.filter((project) => !isFeatured(project.slug)),
    [pool],
  )
  const visibleProjects = useMemo(() => {
    const visibleSmall = showMore ? smallProjects : smallProjects.slice(0, SMALL_CARD_LIMIT)
    const allowed = new Set(visibleSmall.map((project) => project.slug))
    for (const project of pool) {
      if (isFeatured(project.slug)) allowed.add(project.slug)
    }
    return pool.filter((project) => allowed.has(project.slug))
  }, [pool, smallProjects, showMore])
  const segments = useMemo(() => buildSegments(visibleProjects), [visibleProjects])
  const overflow = !showMore && smallProjects.length > SMALL_CARD_LIMIT
  const loc = (project) => localizeProject(project, lang)

  useEffect(() => {
    setShowMore(false)
  }, [filter])

  return (
    <div className="page projects-page">
      <div className="projects-page-top">
        <Header variant="light" />
      </div>

      <h1 className="projects-page-title">{t.projects.pageTitle}</h1>

      <CategoryList className="projects-categories" showCounts />

      <div className="projects-catalog">
        {segments.map((segment, index) =>
          segment.type === 'grid' ? (
            <div className="projects-grid" key={`grid-${index}`}>
              {segment.items.map((project) => (
                <ProjectCard
                  project={loc(project)}
                  key={project.slug}
                  cta={t.projects.readMore}
                />
              ))}
            </div>
          ) : (
            <article
              className={`project-feature${segment.item.slug === 'moscow-2030' ? ' is-title-caps' : ''}`}
              key={segment.item.slug}
            >
              <div className="project-feature-copy">
                <h2>{loc(segment.item).title}</h2>
                <p>{loc(segment.item).place}</p>
                <div className="project-feature-meta">
                  <span>{segment.item.year}</span>
                  <span>{loc(segment.item).tag}</span>
                </div>
                <Link className="btn-ghost" to={`/projects/${segment.item.slug}`}>
                  {t.projects.readMore}
                </Link>
              </div>
              <div className="project-feature-media">
                <img src={segment.item.image} alt="" />
              </div>
            </article>
          ),
        )}

        {overflow ? (
          <button
            type="button"
            className="projects-more"
            onClick={() => setShowMore(true)}
          >
            {t.projects.showMore}
          </button>
        ) : null}
      </div>

      <OrderBlock />

      <Contacts />
    </div>
  )
}

export default ProjectsPage
