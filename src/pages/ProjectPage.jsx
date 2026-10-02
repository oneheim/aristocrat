import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import LetterTiles from '../components/LetterTiles'
import OrderBlock from '../components/OrderBlock'
import ProjectCard from '../components/ProjectCard'
import ProjectLightbox from '../components/ProjectLightbox'
import { getProject, getRelevant } from '../data/projects'

function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLightbox(null)
  }, [slug])

  const openLightbox = useCallback((index) => {
    setLightbox(index)
  }, [])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const gallery = project.gallery
  const pic = (index) => gallery[index % gallery.length]
  const cardPhoto = pic(1)
  const relevant = getRelevant(project.slug)

  return (
    <div className="page project-page">
      <section className="case-hero">
        <img className="case-hero-photo" src={cardPhoto} alt="" />
        <div className="case-hero-dim" aria-hidden="true" />
        <div className="case-hero-head">
          <Header />
        </div>

        <aside className="case-info">
          <div className="case-info-meta">
            <p>{project.tag}</p>
            <strong>{project.date}</strong>
          </div>
          <img src={cardPhoto} alt="" />
          <div className="case-info-place">
            <span>{project.city}</span>
            <span>{project.venue}</span>
          </div>
        </aside>

        <div className="case-hero-title">
          <h1>
            {project.heroLines[0]}
            <br />
            {project.heroLines[1]}
          </h1>
          <p>
            {project.venue}, {project.city}
          </p>
        </div>
      </section>

      <section className="case-intro">
        <LetterTiles text="ABOUT" />

        <div className="case-intro-body">
          <img className="case-intro-main" src={pic(0)} alt="" />

          <div className="case-intro-side">
            <div className="case-intro-thumbs">
              <img src={pic(1)} alt="" />
              <img src={pic(2)} alt="" />
            </div>
            <div className="case-intro-copy">
              {project.copy.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-mosaic" aria-label="Project gallery">
        <LetterTiles text="GALLERY" />

        <div className="case-mosaic-top">
          <button type="button" className="case-mosaic-main" onClick={() => openLightbox(0)}>
            <img src={pic(0)} alt="" />
          </button>

          <div className="case-mosaic-side">
            <button type="button" onClick={() => openLightbox(1)}>
              <img src={pic(1)} alt="" />
            </button>
            <button type="button" onClick={() => openLightbox(2)}>
              <img src={pic(2)} alt="" />
            </button>
            <button type="button" className="case-mosaic-zoom" onClick={() => openLightbox(3)}>
              <img src={pic(3)} alt="" />
              <span className="case-mosaic-zoom-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M15.5 15.5 21 21" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="case-mosaic-bottom">
          <button type="button" onClick={() => openLightbox(4)}>
            <img src={pic(4)} alt="" />
          </button>
          <button type="button" onClick={() => openLightbox(5)}>
            <img src={pic(5)} alt="" />
          </button>
          <button type="button" onClick={() => openLightbox(6)}>
            <img src={pic(6)} alt="" />
          </button>
          <button type="button" onClick={() => openLightbox(7)}>
            <img src={pic(7)} alt="" />
          </button>
        </div>
      </section>

      <section className="case-facts">
        <LetterTiles text="FACTS" />
        <div className="facts-grid">
          {project.facts.map((item) => (
            <article className="facts-panel" key={item.value}>
              <div className="facts-frame">
                <div className="facts-card">
                  <strong>
                    {item.value}
                    <span>{item.unit}</span>
                  </strong>
                  <p>{item.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <OrderBlock />

      <section className="case-relevant">
        <div className="section-bar">
          <LetterTiles text="RELEVANT PROJECTS" />
          <Link className="text-underline" to="/projects">
            view all projects
          </Link>
        </div>
        <div className="projects-grid">
          {relevant.map((item) => (
            <ProjectCard project={item} key={item.slug} />
          ))}
        </div>
      </section>

      <Contacts />

      <ProjectLightbox
        images={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onChange={setLightbox}
      />
    </div>
  )
}

export default ProjectPage
