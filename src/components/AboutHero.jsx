import Header from './Header'
import aboutHeroImage from '../assets/about.png'

function AboutHero() {
  return (
    <section className="about-page-hero">
      <img className="about-page-hero-photo" src={aboutHeroImage} alt="" />
      <div className="about-page-hero-dim" aria-hidden="true" />

      <div className="about-page-hero-inner">
        <Header />
        <h1 className="about-page-hero-title">ABOUT</h1>
      </div>
    </section>
  )
}

export default AboutHero
