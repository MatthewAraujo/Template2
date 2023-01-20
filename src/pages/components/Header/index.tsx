import Image from 'next/image'
import { X } from 'phosphor-react'
import { useState } from 'react'
import Menu from './menu'
import styles from './styles.module.scss'

const links = [
  {
    id: 0,
    href: '/#home',
    text: 'Home',
  },
  {
    id: 1,
    href: '/#empreendimento',
    text: 'Empreendimento',
  },
  {
    id: 2,
    href: '/#lazer',
    text: 'Lazer',
  },
  {
    id: 3,
    href: '/#localizacao',
    text: 'Localização',
  },
  {
    id: 4,
    href: '/#plantas',
    text: 'Plantas',
  },
  {
    id: 5,
    href: '/#contato',
    text: 'Contato',
  },
]

export default function Header() {
  const [modal, setModal] = useState(false)
  const [isActve, setIsActve] = useState(0)
  function handleModal() {
    setModal(!modal)
  }

  return (
    <header>
      <div className={styles.container}>
        <div>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="logo"
            width={312}
            height={85}
            loading="lazy"
          />
        </div>
        <nav className={!modal ? styles.nav : styles.navActivate}>
          <X className={styles.xis} size={30} onClick={handleModal} />
          <div className={styles.containerA}>
            <Image
              src="/logoModal.png"
              alt="logo"
              width={154}
              height={42}
              loading="lazy"
            />
            {links.map((link) => (
              <Menu
                key={link.id}
                id={link.id}
                href={link.href}
                isActive={link.id === isActve}
                setIsActve={setIsActve}
                setModal={setModal}
              >
                {link.text}
              </Menu>
            ))}
            <a href="politica"> Política de Privacidade</a>
          </div>
        </nav>
        <div className={styles.modal}>
          <Image
            src="/modal.png"
            alt="phone"
            width={30}
            height={30}
            onMouseUp={handleModal}
          />
        </div>
      </div>
    </header>
  )
}
