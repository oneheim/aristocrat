import { useState } from 'react'
import LetterTiles from './LetterTiles'
import { useCopy, useLocalizedProject } from '../i18n/LanguageContext'
import selectedMarkLeft from '../assets/selected-mark-left.svg'
import selectedMarkRight from '../assets/selected-mark-right.svg'
import { catalogProjects } from '../data/projects'

const source = catalogProjects.find((item) => item.slug === 'moscow-2030') ?? catalogProjects[0]
const thumbs = source.gallery.slice(0, 5)

function SelectedProject() {
  const t = useCopy()
  const project = useLocalizedProject(source)
  const [active, setActive] = useState(0)

  return (
    <section className="moscow" aria-label={t.selected.aria(project.title)}>
      <div className="section-bar moscow-head">
        <LetterTiles text={t.selected.tiles} />
      </div>

      <div className="moscow-stage">
        <div className="moscow-hero">
          <img className="moscow-photo" src={thumbs[active]} alt="" />
          <div className="moscow-dim" aria-hidden="true" />
          <img className="moscow-union moscow-union-left" src={selectedMarkLeft} alt="" />
          <img className="moscow-union moscow-union-right" src={selectedMarkRight} alt="" />

          <div className="moscow-copy">
            <h2>{project.title.toUpperCase()}</h2>
            <p>{t.selected.blurb}</p>
            <a className="btn-cream" href={`/projects/${project.slug}`}>
              {t.selected.seeMore}
            </a>
          </div>
        </div>

        <div className="moscow-thumbs">
          {thumbs.map((src, index) => {
            const isActive = index === active
            return (
              <button
                type="button"
                className={`moscow-thumb${isActive ? ' moscow-thumb-active' : ''}`}
                key={`${src}-${index}`}
                aria-pressed={isActive}
                aria-label={t.selected.photo(index + 1)}
                onClick={() => setActive(index)}
              >
                <img src={src} alt="" />
                {isActive ? null : (
                  <span className="moscow-thumb-dim" aria-hidden="true" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SelectedProject
