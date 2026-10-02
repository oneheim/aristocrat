function LetterTiles({ text, variant = 'outline', className = '' }) {
  return (
    <div
      className={`letter-tiles letter-tiles-${variant}${className ? ` ${className}` : ''}`}
      aria-label={text}
    >
      {text.split('').map((char, index) =>
        char === ' ' ? (
          <span className="letter-gap" key={`${char}-${index}`} />
        ) : char === '.' ? (
          <span className="letter-tile" key={`${char}-${index}`}>
            .
          </span>
        ) : (
          <span className="letter-tile" key={`${char}-${index}`}>
            {char}
          </span>
        ),
      )}
    </div>
  )
}

export default LetterTiles
