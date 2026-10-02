import LetterTiles from './LetterTiles'
import review1 from '../assets/review-1.png'
import review2 from '../assets/review-2.png'
import review3 from '../assets/project-bosco.png'

const reviews = [
  {
    n: '(1)',
    name: 'RASARIO X POSIE TEAM',
    text: 'The team promptly offered several concepts and fully handled the decoration process. Everything was completed on time and to a high standard.',
    image: review1,
  },
  {
    n: '(2)',
    name: 'BOSCO TEAM',
    text: 'Excellent quality of decorations and well-organized workflow. The collaboration was professional and smooth.',
    image: review2,
  },
  {
    n: '(3)',
    name: 'GAZPROM TEAM',
    text: 'A big advantage is their in-house production and flexible approach. The project was delivered exactly according to the technical requirements.',
    image: review3,
  },
]

function Reviews() {
  return (
    <section className="reviews" aria-label="Reviews">
      <LetterTiles text="REVIEWS" />

      <div className="reviews-list">
        {reviews.map((item) => (
          <article className="review-row" key={item.name}>
            <div className="review-company">
              <span className="review-n">{item.n}</span>
              <h3>{item.name}</h3>
            </div>
            <p>{item.text}</p>
            <img src={item.image} alt="" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
