import { useLayoutEffect, useRef } from 'react'
import Header from './Header'
import LetterTiles from './LetterTiles'
import { useCopy, useLanguage } from '../i18n/LanguageContext'
import heroImage from '../assets/hero-moscow.jpg'
import heroMark from '../assets/hero-o.svg'

function alignAmpToLetters(line) {
  const amp = line?.querySelector('.hero-amp')
  if (!line || !amp) return

  const cs = getComputedStyle(line)
  const ctx = document.createElement('canvas').getContext('2d')
  ctx.font = cs.font
  const textNode = [...line.childNodes].find((node) => node.nodeType === Node.TEXT_NODE)
  const metrics = ctx.measureText((textNode?.textContent ?? 'H').trim() || 'H')
  const fontSize = parseFloat(cs.fontSize)
  const lineHeight = parseFloat(cs.lineHeight)
  const halfLeading = (lineHeight - fontSize) / 2
  const inkBottom = halfLeading + metrics.fontBoundingBoxAscent + metrics.actualBoundingBoxDescent
  amp.style.bottom = `${Math.round(lineHeight - inkBottom)}px`
}

function Hero() {
  const t = useCopy()
  const { lang } = useLanguage()
  const topLineRef = useRef(null)

  useLayoutEffect(() => {
    let cancelled = false

    function align() {
      if (!cancelled) alignAmpToLetters(topLineRef.current)
    }

    align()
    document.fonts.ready.then(align)
    window.addEventListener('resize', align)
    return () => {
      cancelled = true
      window.removeEventListener('resize', align)
    }
  }, [lang, t.hero.line1])

  return (
    <section className="hero" id="home">
      <img className="hero-photo" src={heroImage} alt="" />
      <div className="hero-dim" aria-hidden="true" />

      <div className="hero-inner">
        <Header />

        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span className="hero-title-top" ref={topLineRef}>
              {t.hero.line1}
              <img className="hero-amp" src={heroMark} alt="" />
            </span>
            <span>{t.hero.line2}</span>
          </h1>
        </div>

        <div className="hero-letters" aria-label={t.hero.lettersAria}>
          {t.hero.letters.map((row, index) => (
            <div className="hero-letter-row" key={row}>
              <LetterTiles text={row} variant="filled" />
              {index === 0 ? <span className="hero-letter-rule" aria-hidden="true" /> : null}
              {index === t.hero.letters.length - 1 ? (
                <span className="letter-tile hero-letter-dot">.</span>
              ) : null}
            </div>
          ))}
        </div>

        <a className="btn-cream hero-cta" href="#projects">
          {t.hero.viewProjects}
        </a>
      </div>
    </section>
  )
}

export default Hero
