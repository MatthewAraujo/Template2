import Banner from './components/Banner'
import Contact from './components/Contatos_mobile'
import Cookies from './components/Cookies'
import Faixada from './components/Faixada'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import HoverIcons from './components/HoverIcons'
import Lazer from './components/Lazer'
import Plantas from './components/plantas'
import Video from './components/video'

export default function Home() {
  return (
    <div>
      <header>
        <title>Company</title>
      </header>
      <Header />
      <Cookies />
      <Contact />
      <HoverIcons />
      <Banner />
      <Faixada />
      <Video />
      <Lazer />
      <Plantas />
      <Form />
      <Footer />
    </div>
  )
}
