import Link from 'next/link'
import { X } from 'phosphor-react'
import styles from './styles.module.scss'

export default function Politica() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Politica de privacidade</h1>
        <Link href="/">
          <X size={32} />{' '}
        </Link>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          earum nesciunt laudantium, voluptatum, molestias magnam pariatur ex
          possimus sed suscipit fugiat. Illum, quasi cumque est fugit saepe
          blanditiis cum mollitia.
        </p>
      </div>
    </div>
  )
}
