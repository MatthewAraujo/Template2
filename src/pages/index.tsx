import Banner from './components/Banner'
import Contact from './components/Contatos_mobile'
import Cookies from './components/Cookies'
import Faixada from './components/Faixada'
import Header from './components/Header'
import HoverIcons from './components/HoverIcons'
import Lazer from './components/Lazer'
import Video from './components/video'

export default function Home() {
  return (
    <div>
      <Header />
      <Cookies />
      <Contact />
      <HoverIcons />
      <Banner />
      <Faixada />
      <Video />
      <Lazer />
    </div>
  )
}
