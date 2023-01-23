import { useState } from 'react'
import styles from './styles.module.scss'

interface IconsProps {
  icons: any
  texto: string
}

export default function Icons({ icons, texto }: IconsProps) {
  const [button, setButton] = useState(false)
  function handleClickButton() {
    setButton(!button)
  }
  return (
    <button
      onClick={handleClickButton}
      className={`${
        !button ? styles.containerIcons : styles.containerIconsActive
      }`}
    >
      <div className={styles.object}>{icons}</div>
      <div className={styles.chat}>
        <p>{texto}</p>
      </div>
    </button>
  )
}
