import LetterTiles from './LetterTiles'
import { useCopy } from '../i18n/LanguageContext'
import review1 from '../assets/review-1.jpg'
import review2 from '../assets/review-2.jpg'
import review3 from '../assets/review-3.webp'

const images = [review1, review2, review3]

function Reviews() {
  const t = useCopy()

  return (
    <section className="reviews" aria-label={t.reviews.aria}>
      <LetterTiles text={t.reviews.tiles} />

      <div className="reviews-list">
        {t.reviews.items.map((item, index) => (
          <article className="review-row" key={item.name}>
            <div className="review-company">
              <span className="review-n">{item.n}</span>
              <h3>{item.name}</h3>
            </div>
            <p>{item.text}</p>
            <img src={images[index]} alt="" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
