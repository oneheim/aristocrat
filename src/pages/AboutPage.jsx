import AboutHero from '../components/AboutHero'
import WhoWeAre from '../components/WhoWeAre'
import Facts from '../components/Facts'
import Team from '../components/Team'
import Projects from '../components/Projects'
import Reviews from '../components/Reviews'
import Clients from '../components/Clients'
import OrderBlock from '../components/OrderBlock'
import Contacts from '../components/Contacts'

function AboutPage() {
  return (
    <div className="page about-page">
      <AboutHero />
      <WhoWeAre />
      <Facts />
      <Team />
      <Projects />
      <Reviews />
      <Clients />
      <OrderBlock />
      <Contacts />
    </div>
  )
}

export default AboutPage
