import { useState } from 'react'
import LetterTiles from './LetterTiles'
import servicesImage from '../assets/services.png'

const services = [
  {
    id: 'private',
    tab: 'private events',
    index: '01',
    title: 'PRIVATE EVENTS DESIGN',
    text: 'We design birthdays, weddings, anniversaries, and other private events. In-house production and decor base — any idea turnkey.',
  },
  {
    id: 'conferences',
    tab: 'conferences',
    index: '02',
    title: 'CONFERENCES DESIGN',
    text: 'Stage, light and guest flow for offsites and forums. We build the room around the speech, not the other way around.',
  },
  {
    id: 'festivals',
    tab: 'city festivals',
    index: '03',
    title: 'CITY FESTIVALS DESIGN',
    text: 'Public-scale scenography for streets, parks and courtyards — wayfinding, stages and branded worlds that hold a crowd.',
  },
  {
    id: 'weddings',
    tab: 'weddings',
    index: '04',
    title: 'WEDDINGS DESIGN',
    text: 'Ceremony and dinner as one spatial story. Floristry, light and construction from a single production team.',
  },
  {
    id: 'hbd',
    tab: 'hbd',
    index: '05',
    title: 'BIRTHDAY DESIGN',
    text: 'Private celebrations with the same production standard as a brand launch — set, table and lighting as one object.',
  },
  {
    id: 'launches',
    tab: 'launches',
    index: '06',
    title: 'LAUNCHES DESIGN',
    text: 'Product and space launches: installation, media wall, guest path. From first sketch to strike.',
  },
]

function Services() {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((item) => item.id === active) ?? services[0]

  return (
    <section className="services" id="services">
      <LetterTiles text="SERVICES" />

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
