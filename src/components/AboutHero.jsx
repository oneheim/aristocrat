import Header from './Header'
import { useCopy } from '../i18n/LanguageContext'
import aboutHeroImage from '../assets/about-hero.jpg'
import aboutHeroMark from '../assets/about-hero-mark.svg'

function AboutHero() {
  const t = useCopy()

  return (
    <section className="about-page-hero">
      <img className="about-page-hero-photo" src={aboutHeroImage} alt="" />
      <div className="about-page-hero-dim" aria-hidden="true" />
      <img className="about-page-hero-mark about-page-hero-mark-left" src={aboutHeroMark} alt="" />
      <img className="about-page-hero-mark about-page-hero-mark-right" src={aboutHeroMark} alt="" />

      <div className="about-page-hero-inner">
        <Header />
        <div className="about-page-hero-foot">
          <div className="about-page-hero-rule" aria-hidden="true" />
          <h1 className="about-page-hero-title">{t.aboutPage.title}</h1>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
