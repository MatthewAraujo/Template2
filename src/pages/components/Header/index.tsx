import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useState } from 'react'
export default function Header() {
  const [modal, setModal] = useState(false)
  function handleModal() {
    setModal(!modal)
  }
  return (
    <header>
      <div className={styles.container}>
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={110}
            height={30}
            loading="lazy"
          />
        </div>
        <nav className={modal === false ? styles.nav : styles.navActivate}>
          <ul>
            <li>
              <Image
                src="/logo.png"
                alt="logo"
                width={110}
                height={30}
                loading="lazy"
              />
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#empreendimento">O Empreendimento</a>
            </li>
            <li>
              <a href="#lazer">Lazer</a>
            </li>
            <li>
              <a href="#plantas">Plantas</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <Link href="/politica">política de privacidade</Link>
            </li>
          </ul>
        </nav>
        <div>
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
