import Image from 'next/image'
import Link from 'next/link'
import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Menu from './menu'
import styles from './styles.module.scss'

const links = [
  {
    id: 0,
    href: '#home',
    text: 'Home',
  },
  {
    id: 1,
    href: '#empreendimento',
    text: 'Empreendimento',
  },
  {
    id: 2,
    href: '#lazer',
    text: 'Lazer',
  },
  {
    id: 3,
    href: '#localizacao',
    text: 'Localização',
  },
  {
    id: 4,
    href: '#plantas',
    text: 'Plantas',
  },
  {
    id: 5,
    href: '#contato',
    text: 'Contato',
  },
]

export default function Header() {
  const [modal, setModal] = useState(false)
  const [isActve, setIsActve] = useState(0)
  const [header, setHeader] = useState(false)
  function handleModal() {
    setModal(!modal)
  }
  useEffect(() => {
    const map = {
      home: 0,
      empreendimento: 1,
      lazer: 2,
      localizacao: 3,
      plantas: 4,
      contato: 5,
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActve(map[entry.target.id])
          }
        })
      },
      {
        rootMargin: '0px 0px -780px 0px',
      },
    )

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })
  })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeader(window.scrollY >= 80)
    })
  })

  return (
    <header>
      <div className={`${styles.container} ${header ? styles.scrolled : ''}`}>
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
            <Link href="/Politica">Política de Privacidade</Link>
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
