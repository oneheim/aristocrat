import { useState } from 'react'
import LetterTiles from './LetterTiles'
import unionMark from '../assets/union.svg'
import { catalogProjects } from '../data/projects'

const project = catalogProjects.find((item) => item.slug === 'moscow-2030') ?? catalogProjects[0]
const thumbs = project.gallery.slice(0, 5)

function SelectedProject() {
  const [active, setActive] = useState(0)

  return (
    <section className="moscow" aria-label={`Selected projects, ${project.title}`}>
      <div className="section-bar moscow-head">
        <LetterTiles text="SELECTED PROJECTS" />
      </div>

      <div className="moscow-stage">
        <div className="moscow-hero">
          <img className="moscow-photo" src={thumbs[active]} alt="" />
          <div className="moscow-dim" aria-hidden="true" />
          <img className="moscow-union moscow-union-left" src={unionMark} alt="" />
          <img className="moscow-union moscow-union-right" src={unionMark} alt="" />

          <div className="moscow-copy">
            <h2>{project.title.toUpperCase()}</h2>
            <p>
              A city festival stage for Moscow&rsquo;s &ldquo;My District&rdquo;
              program, built in a bold blue-and-silver identity.
            </p>
            <a className="btn-cream" href={`/projects/${project.slug}`}>
              see more
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
                aria-label={`Show photo ${index + 1}`}
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
