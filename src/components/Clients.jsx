import LetterTiles from './LetterTiles'

const clients = [
  { n: '02', name: 'BRUSNIKA' },
  { n: '03', name: 'YANDEX' },
  { n: '04', name: 'SBER' },
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
      width="36"
      height="31"
      viewBox="0 0 36 31"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="15.5" r="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="18" cy="15.5" r="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="25.5" cy="15.5" r="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function Clients() {
  return (
    <section className="clients" aria-label="Clients">
      <LetterTiles text="CLIENTS" />

      <div className="clients-grid">
        {clients.map((client) => (
          <article className="client-card" key={client.name}>
            <PlusMark />
            <span className="client-n">{client.n}</span>
            <strong>{client.name}</strong>
            <CirclesMark />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Clients
