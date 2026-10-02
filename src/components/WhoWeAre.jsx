import image1 from '../assets/moscow-1.png'
import image2 from '../assets/moscow-2.png'
import image3 from '../assets/moscow-3.png'
import image4 from '../assets/moscow-4.png'

const images = [image1, image2, image3, image4]

function WhoWeAre() {
  return (
    <section className="who-we-are">
      <h2>Who are we?</h2>

      <div className="who-we-are-copy">
        <p>
          We are a full—service event agency with our own production base and
          a creative team.
        </p>
        <p>
          We create events of any complexity: from concept and design
          development to production of decorations, installation and
          technical implementation on the site. By combining strategy,
          creativity and production in one team, we guarantee the accuracy of
          execution, compliance with deadlines and a high level of quality at
          every stage of the project.
        </p>
      </div>

      <div className="who-we-are-grid">
        {images.map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>

      <p className="who-we-are-note">
        We are able to work with both large-scale corporate events and
        immersive camera formats. Thanks to our own workshops and design
        department, we translate complex ideas into real designs, decorations
        and interactive solutions that fully correspond to the concept of the
        event.
      </p>
    </section>
  )
}

export default WhoWeAre
