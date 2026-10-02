import { Link } from 'react-router-dom'
import LetterTiles from './LetterTiles'
import aboutImage from '../assets/about.png'
import unionMark from '../assets/union.svg'

const stats = [
  { value: '10+ years', label: 'we work in the field of set design' },
  { value: '80+', label: 'employees on staff' },
  { value: '600+', label: 'successfully implemented projects' },
]

function About() {
  return (
    <section className="about" id="about">
      <LetterTiles text="ABOUT US" />

      <p className="about-lead">
        ARISTOCRAT — international full-service event production. For five
        years, we’ve been designing private and corporate events, exhibitions,
        art spaces & large-scale concepts worldwide.
      </p>

      <div className="about-body">
        <ul className="about-stats">
          {stats.map((item) => (
            <li key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <figure className="about-frame">
          <img src={aboutImage} alt="ARISTOCRAT team" />
          <Link className="text-underline" to="/about">
            read more
          </Link>
        </figure>

        <img className="about-union" src={unionMark} alt="" />
      </div>
    </section>
  )
}

export default About
