import { useState } from 'react'
import LetterTiles from './LetterTiles'
import { useCopy } from '../i18n/LanguageContext'
import servicesImage from '../assets/services.jpg'

function Services() {
  const t = useCopy()
  const services = t.services.items
  const [active, setActive] = useState(services[0].id)
  const current = services.find((item) => item.id === active) ?? services[0]

  return (
    <section className="services" id="services">
      <LetterTiles text={t.services.tiles} />

      <div className="services-layout">
        <div className="services-panel">
          <div className="services-tabs" role="tablist">
            {services.map((item) => (
              <button
                type="button"
                role="tab"
                key={item.id}
                className={item.id === active ? 'is-active' : undefined}
                aria-selected={item.id === active}
                onClick={() => setActive(item.id)}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className="services-copy">
            <div className="services-copy-text">
              <h3>{current.title}</h3>
              <p>{current.text}</p>
            </div>
            <span className="services-index" aria-hidden="true">
              {current.index}
            </span>
          </div>
        </div>

        <img className="services-photo" src={servicesImage} alt="" />
      </div>
    </section>
  )
}

export default Services
