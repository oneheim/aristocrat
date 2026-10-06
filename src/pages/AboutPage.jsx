import AboutHero from '../components/AboutHero'
import WhoWeAre from '../components/WhoWeAre'
import Facts from '../components/Facts'
import Team from '../components/Team'
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
      <Clients />
      <OrderBlock />
      <Contacts />
    </div>
  )
}

export default AboutPage
