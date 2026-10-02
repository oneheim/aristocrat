import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Contacts from '../components/Contacts'
import LetterTiles from '../components/LetterTiles'
import OrderBlock from '../components/OrderBlock'
import ProjectCard from '../components/ProjectCard'
import { catalogProjects } from '../data/projects'
import servicesImage from '../assets/services.png'
import unionMark from '../assets/union.svg'

const tags = ['/hbd', '/weddings', '/anniversaires', '/parties']

const stats = [
  {
    value: '250+',
    label: 'projects we implemented in the field of private events design',
  },
  {
    value: '10+',
    label: 'years we work in the field of set design',
  },
]

const benefits = [
  'Full cycle: from concept to installation',
  'In-house production facilities',
  'Fast turnaround times thanks to in-house operations',
  'Quality control at all stages',
  'Custom and unique solutions',
  'Budget optimization without unnecessary contractors',
]

function ServicesPage() {
  return (
    <div className="page service-page">
      <div className="service-page-top">
        <Header variant="light" />
      </div>

      <section className="service-hero">
        <div className="service-hero-copy">
          <h1>
            PRIVATE
            <br />
            EVENT
            <br />
            DESIGN
          </h1>
          <div className="service-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <ul className="service-stats">
            {stats.map((item) => (
              <li key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-hero-media">
          <img
            className="service-hero-photo"
            src={servicesImage}
            width={910}
            height={875}
            alt=""
          />
          <img className="service-union service-union-hero" src={unionMark} alt="" />
        </div>
      </section>

      <section className="service-about">
        <LetterTiles text="ABOUT US" />
        <p className="service-about-lead">
          We create immersive, tailor-made decor concepts for private events
          that transform ordinary spaces into truly unforgettable, visually
          striking experiences filled with emotion.
        </p>
        <div className="service-about-body">
          <img className="service-union service-union-about" src={unionMark} alt="" />
          <div className="service-about-copy">
            <p>
              From intimate birthday celebrations and elegant dinners to
              engagement parties and exclusive gatherings, our team handles
              every visual detail with creativity and precision. Our service
              includes concept development, mood boards, color palette
              selection, floral and table styling, custom installations, and
              on-site setup. We work closely with each client to reflect their
              personality, vision, and the unique atmosphere they want to
              create.
            </p>
            <p>
              Whether you dream of a chic modern look, romantic elegance, or a
              bold themed celebration, we craft cohesive aesthetics that feel
              both stylish and personal. With a strong eye for composition and
              trend-aware design, we ensure your event looks stunning in real
              life and in photos. Let us turn your private event into a
              beautifully curated experience that guests will remember long
              after the celebration ends.
            </p>
          </div>
        </div>
      </section>

      <section className="service-benefits">
        <div className="service-benefits-left">
          <h2>BENEFITS</h2>
          <p className="service-benefits-note">
            We are deeply immersed in the clients tasks and take over the entire
            organization — from the development of a creative concept to the
            final implementation on the site.
          </p>
        </div>
        <p className="service-benefits-lead">
          We are a full-service agency with in-house production: from concept
          and design to manufacturing and installation. Our in-house facilities
          allow us to launch projects faster, control quality at every stage,
          and create custom solutions without outsourcing. This saves budget
          and investment, and ensures a consistent, high standard of execution.
        </p>
        <ol className="service-benefits-list">
          {benefits.map((item, index) => (
            <li key={item}>
              {index < benefits.length - 1 ? (
                <svg
                  className="service-benefits-curve"
                  viewBox="0 0 40 80"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M40 1.2 C 1.6 1.2, 1.6 78.8, 40 78.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeDasharray="0.2 5.2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              ) : null}
              <span className="service-benefits-num" aria-hidden="true">
                {index + 1}
              </span>
              <span className="service-benefits-text">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-projects">
        <div className="section-bar">
          <LetterTiles text="SERVICES" />
          <Link className="text-underline" to="/projects">
            view all projects
          </Link>
        </div>
        <div className="projects-grid">
          {catalogProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>

      <OrderBlock />
      <Contacts />
    </div>
  )
}

export default ServicesPage
