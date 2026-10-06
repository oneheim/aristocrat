import { useEffect, useRef } from 'react'
import LetterTiles from './LetterTiles'
import { useCopy } from '../i18n/LanguageContext'

const clients = [
  { n: '01', name: 'ANEX' },
  { n: '02', name: 'BRUSNIKA' },
  { n: '03', name: 'YANDEX' },
  { n: '04', name: 'SBER' },
  { n: '05', name: 'AEROFLOT' },
  { n: '06', name: 'GAZPROM' },
  { n: '07', name: 'FONBET' },
]

function PlusMark() {
  return (
    <svg
      className="client-plus"
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      aria-hidden="true"
    >
      <path d="M15.5.5v30M.5 15.5h30" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function CirclesMark() {
  return (
    <svg
      className="client-circles"
      width="31"
      height="36"
      viewBox="0 0 31 36"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="15.5" cy="10.5" r="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="15.5" cy="18" r="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="15.5" cy="25.5" r="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function ClientCard({ client }) {
  return (
    <article className="client-card">
      <PlusMark />
      <span className="client-n">({client.n})</span>
      <strong>{client.name}</strong>
      <CirclesMark />
    </article>
  )
}

function Clients() {
  const t = useCopy()
  const trackRef = useRef(null)
  const setRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const set = setRef.current
    if (!track || !set) return

    const speed = 90
    let raf = 0
    let last = performance.now()
    let offset = 0

    const tick = (now) => {
      const dt = Math.min(64, now - last) / 1000
      last = now
      const width = set.offsetWidth
      if (width > 0) {
        offset = (offset + speed * dt) % width
        track.style.transform = `translate3d(${offset - width}px, 0, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    const onVis = () => {
      last = performance.now()
    }

    document.addEventListener('visibilitychange', onVis)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <section className="clients" aria-label={t.clients.aria}>
      <LetterTiles text={t.clients.tiles} />

      <div className="clients-viewport">
        <div className="clients-track" ref={trackRef}>
          {[0, 1].map((copy) => (
            <div
              className="clients-set"
              key={copy}
              ref={copy === 0 ? setRef : undefined}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {clients.map((client) => (
                <ClientCard client={client} key={`${copy}-${client.n}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
