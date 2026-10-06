import { useEffect } from 'react'

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={dir === 'prev' ? 'M14.5 5.5 8 12l6.5 6.5' : 'M9.5 5.5 16 12l-6.5 6.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectLightbox({ images, index, onClose, onChange, labels }) {
  useEffect(() => {
    if (index == null) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') {
        onChange((index - 1 + images.length) % images.length)
      }
      if (event.key === 'ArrowRight') {
        onChange((index + 1) % images.length)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [index, images.length, onClose, onChange])

  if (index == null || !images.length) return null

  const prev = () => onChange((index - 1 + images.length) % images.length)
  const next = () => onChange((index + 1) % images.length)

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={labels.aria}>
      <div className="lightbox-stage" onClick={onClose}>
        <img src={images[index]} alt="" onClick={(event) => event.stopPropagation()} />
      </div>
      <div className="lightbox-foot">
        <div className="lightbox-strip">
          {images.map((src, i) => (
            <button
              type="button"
              key={`${src}-${i}`}
              className={i === index ? 'is-current' : undefined}
              onClick={() => onChange(i)}
              aria-label={labels.photo(i + 1)}
              aria-current={i === index ? 'true' : undefined}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
        <div className="lightbox-nav">
          <button type="button" aria-label={labels.prev} onClick={prev}>
            <Arrow dir="prev" />
          </button>
          <button type="button" aria-label={labels.next} onClick={next}>
            <Arrow dir="next" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectLightbox
