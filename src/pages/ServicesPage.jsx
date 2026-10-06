import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import LetterTiles from '../components/LetterTiles'
import OrderBlock from '../components/OrderBlock'
import ProjectCard from '../components/ProjectCard'
import CategoryList from '../components/CategoryList'
import { useCopy, useLocalizedProjects } from '../i18n/LanguageContext'
import { catalogProjects } from '../data/projects'
import servicesImage from '../assets/services.jpg'
import unionMark from '../assets/union.svg'
import aboutMark from '../assets/union-about.svg'

function layoutBenefitCurves(list) {
  if (!list) return
  const items = [...list.children]
  items.forEach((li, index) => {
    const next = items[index + 1]
    if (!next) return
    const from = li.querySelector('.service-benefits-num')
    const to = next.querySelector('.service-benefits-num')
    if (!from || !to) return
    const a = from.getBoundingClientRect()
    const b = to.getBoundingClientRect()
    li.style.setProperty('--curve-h', `${b.top + b.height / 2 - (a.top + a.height / 2)}px`)
  })
}

function ServicesPage() {
  const t = useCopy()
  const projects = useLocalizedProjects(catalogProjects)
  const benefitsListRef = useRef(null)

  useLayoutEffect(() => {
    const list = benefitsListRef.current
    if (!list) return
    const update = () => layoutBenefitCurves(list)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(list)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [t.servicePage.benefits])

  return (
    <div className="page service-page">
      <div className="service-page-top">
        <Header variant="light" />
      </div>

      <section className="service-hero">
        <div className="service-hero-copy">
          <h1>
            {t.servicePage.title[0]}
            <br />
            {t.servicePage.title[1]}
            <br />
            {t.servicePage.title[2]}
          </h1>
          <CategoryList />
          <ul className="service-stats">
            {t.servicePage.stats.map((item) => (
              <li key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-hero-media">
          <img
            className="service-hero-photo"
            src={servicesImage}
            width={910}
            height={875}
            alt=""
          />
          <img className="service-union service-union-hero" src={unionMark} alt="" />
        </div>
      </section>

      <section className="service-about">
        <LetterTiles text={t.servicePage.aboutTiles} />
        <p className="service-about-lead">{t.servicePage.aboutLead}</p>
        <div className="service-about-body">
          <img className="service-union service-union-about" src={aboutMark} alt="" />
          <div className="service-about-copy">
            <p>{t.servicePage.aboutP1}</p>
            <p>{t.servicePage.aboutP2}</p>
          </div>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-benefits-left">
          <h2>{t.servicePage.benefitsTitle}</h2>
          <p className="service-benefits-note">{t.servicePage.benefitsNote}</p>
        </div>
        <p className="service-benefits-lead">{t.servicePage.benefitsLead}</p>
        <ol className="service-benefits-list" ref={benefitsListRef}>
          {t.servicePage.benefits.map((item, index) => (
            <li key={item}>
              {index < t.servicePage.benefits.length - 1 ? (
                <svg
                  className="service-benefits-curve"
                  viewBox="0 0 50 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M50 0 A 50 50 0 0 0 50 100"
                    fill="none"
                    stroke="currentColor"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              ) : null}
              <span className="service-benefits-num" aria-hidden="true">
                {index + 1}
              </span>
              <span className="service-benefits-text">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-projects">
        <div className="section-bar">
          <LetterTiles text={t.servicePage.projectsTiles} />
          <Link className="text-underline" to="/projects">
            {t.projects.viewAll}
          </Link>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} cta={t.projects.readMore} />
          ))}
        </div>
      </section>

      <OrderBlock />
      <Contacts />
    </div>
  )
}

export default ServicesPage
