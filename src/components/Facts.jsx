import LetterTiles from './LetterTiles'
import { useCopy } from '../i18n/LanguageContext'
import factsPhoto from '../assets/facts-photo.jpg'

function Facts() {
  const t = useCopy()

  return (
    <section className="about-facts">
      <div className="about-facts-stage">
        <div className="about-facts-title">
          <LetterTiles text={t.facts.tiles} />
        </div>

        {t.facts.items.map((fact, index) => (
          <article className={`about-fact about-fact-${index}`} key={fact.value}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </article>
        ))}

        <img className="about-facts-photo" src={factsPhoto} alt="" />

        <svg
          className="about-facts-stairs"
          viewBox="0 0 2000 1080"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M100 500 V580 H145 V670 H190 V760" />
          <path d="M670 430 V490 H630 V545 H700 V600 H860 V690 H980 V780 H1120" />
          <path d="M830 1000 H1000 V1040 H1140" />
          <path d="M1480 400 V560 H1410 V640 H1495 V720 H1586" />
        </svg>
      </div>
    </section>
  )
}

export default Facts
