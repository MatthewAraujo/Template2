import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.scss'

export default function Cookies() {
  const [cookies, setCookies] = useState(false)
  function handleAcceptCookies() {
    setCookies(true)
  }
  return (
    <div
      className={`${!cookies ? styles.containerCookies : styles.containerNone}`}
    >
      <div className={styles.containerContent}>
        <p>
          Para melhorar a sua experiência de navegação, utilizamos de cookies,
          entre outras tecnologias. De acordo com a nossa Política de
          Privacidade, ao continuar navegando, você aceita estas condições.
          Acesse nossa{' '}
          <Link className={styles.link} href="/Politica">
            Política de Privacidade
          </Link>
          .
        </p>
        <button onClick={handleAcceptCookies}>concordar e continuar</button>
      </div>
    </div>
  )
}
