import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import SelectedProject from '../components/SelectedProject'
import Reviews from '../components/Reviews'
import Clients from '../components/Clients'
import OrderBlock from '../components/OrderBlock'
import Contacts from '../components/Contacts'

function Home() {
  return (
    <div className="page">
      <Hero />
      <About />
      <Projects />
      <Services />
      <SelectedProject />
      <Reviews />
      <Clients />
      <OrderBlock />
      <Contacts />
    </div>
  )
}

export default Home
