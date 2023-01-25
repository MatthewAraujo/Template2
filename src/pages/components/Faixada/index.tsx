import Image from 'next/image'
import { ChatCircleText, MapPinLine, Mountains, WifiHigh } from 'phosphor-react'

import styles from './styles.module.scss'
export default function Faixada() {
  return (
    <div className={styles.container}>
      <div className={styles.containerDiferenciais}>
        <div className={styles.diferencias}>
          <div className={styles.image}>
            <WifiHigh size={35} />
          </div>
          <div className={styles.text}>
            <p>
              <strong>WI-FI</strong> na area comum
            </p>
          </div>
        </div>
        <div className={styles.diferencias}>
          <div className={styles.image}>
            <Mountains size={35} />
          </div>
          <div className={styles.text}>
            <p>
              <strong>natureza</strong> nativa
            </p>
          </div>
        </div>
        <div className={styles.diferencias}>
          <div className={styles.image}>
            <MapPinLine size={35} />
          </div>
          <div className={styles.text}>
            <p>
              <strong>comércio</strong> local
            </p>
          </div>
        </div>
      </div>
      <div className={styles.faixada}>
        <div className={styles.image}>
          <Image
            src="/faixada.png"
            alt="faixada do predio"
            width={1082}
            height={581}
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.background}>
            <div className={styles.text}>
              <h1>LOREM IPSUM</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam quasi ut nam ex dignissimos in ipsum placeat
                voluptatum sint magni adipisci, sit, labore dolores ad! Ducimus
                accusamus nobis corporis quo
              </p>
            </div>
          </div>
          <div className={styles.button}>
            <button>
              <div className={styles.chatImage}>
                <ChatCircleText size={35} />
              </div>
              <strong>marque uma visita</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
