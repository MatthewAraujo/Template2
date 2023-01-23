import Banner from './components/Banner'
import Contact from './components/Contatos_mobile'
import Cookies from './components/Cookies'
import Faixada from './components/Faixada'
import Header from './components/Header'
import HoverIcons from './components/HoverIcons'

export default function Home() {
  return (
    <div>
      <Header />
      <Cookies />
      <Contact />
      <HoverIcons />
      <Banner />
      <Faixada />
    </div>
  )
}
