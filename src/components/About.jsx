import { Link } from 'react-router-dom'
import LetterTiles from './LetterTiles'
import { useCopy } from '../i18n/LanguageContext'
import aboutImage from '../assets/about.png'
import unionMark from '../assets/union.svg'

function About() {
  const t = useCopy()

  return (
    <section className="about" id="about">
      <LetterTiles text={t.about.tiles} />

      <p className="about-lead">{t.about.lead}</p>

      <div className="about-body">
        <ul className="about-stats">
          {t.about.stats.map((item) => (
            <li key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <figure className="about-frame">
          <img src={aboutImage} alt={t.about.teamAlt} />
          <Link className="text-underline" to="/about">
            {t.about.readMore}
          </Link>
        </figure>

        <img className="about-union" src={unionMark} alt="" />
      </div>
    </section>
  )
}

export default About
