import { useCopy } from '../i18n/LanguageContext'
import image1 from '../assets/who-1.jpg'
import image2 from '../assets/who-2.jpg'
import image3 from '../assets/who-3.jpg'
import image4 from '../assets/who-4.jpg'
import image5 from '../assets/who-5.jpg'
import image6 from '../assets/who-6.jpg'

const images = [image1, image2, image3, image4, image5, image6]

function WhoWeAre() {
  const t = useCopy()

  return (
    <section className="who-we-are">
      <h2>{t.who.title}</h2>
      <p className="who-we-are-lead">{t.who.p1}</p>
      <p className="who-we-are-body">{t.who.p2}</p>

      <div className="who-we-are-grid">
        {images.map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>

      <p className="who-we-are-note">{t.who.note}</p>
    </section>
  )
}

export default WhoWeAre
