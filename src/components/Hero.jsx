import Header from './Header'
import LetterTiles from './LetterTiles'
import heroImage from '../assets/hero.jpg'
import heroMark from '../assets/hero-o.svg'

const letterRows = ['YOUR EVENTS', 'OUR EXPERIENCE', 'ARCHITECTURE .']

function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero-photo" src={heroImage} alt="" />
      <div className="hero-dim" aria-hidden="true" />

      <div className="hero-inner">
        <Header />

        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span>DECOR&nbsp;&nbsp;&nbsp;&nbsp;EVENT</span>
            <span>AGENCY</span>
          </h1>
          <img className="hero-amp" src={heroMark} alt="" />
        </div>

        <div className="hero-letters" aria-label="Your events. Our experience. Architecture.">
          {letterRows.map((row, index) => (
            <div className="hero-letter-row" key={row}>
              <LetterTiles text={row} variant="filled" />
              {index === 0 ? <span className="hero-letter-rule" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>

        <a className="btn-cream hero-cta" href="#projects">
          view projects
        </a>
      </div>
    </section>
  )
}

export default Hero
