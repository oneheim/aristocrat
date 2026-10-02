import LetterTiles from './LetterTiles'
import factsImage from '../assets/fact-texture-1.jpg'

const facts = [
  {
    value: '>600',
    label:
      'completed projects ranging from chamber presentations to large-scale corporate events and city festivals.',
  },
  {
    value: '30%',
    label:
      'budget savings for clients due to work without third-party contractors and a full in-house production cycle.',
  },
  {
    value: '>900',
    label:
      'square meters area of own production facility including mock-up, milling and welding workshops, as well as 3D and large-format printing.',
  },
  {
    value: '<72',
    label:
      'hours to develop and launch non-standard designs thanks to our own design team and production facilities.',
  },
]

function Facts() {
  return (
    <section className="about-facts">
      <LetterTiles text="FACTS" />

      <div className="about-facts-grid">
        {facts.map((fact) => (
          <div className="about-fact-item" key={fact.value}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
        <img className="about-facts-photo" src={factsImage} alt="" />
      </div>
    </section>
  )
}

export default Facts
