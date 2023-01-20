import { ChatCircleText, Envelope, WhatsappLogo } from 'phosphor-react'
import styles from './styles.module.scss'

export default function Contact() {
  return (
    <div className={styles.containerContact}>
      <div className={styles.containerContent}>
        <div className={styles.object}>
        <div>
            <ChatCircleText size={35} />
          </div>
          <button>Consultor online</button>
        </div>
        <div className={styles.object}>
          <div>
              <Envelope size={35} />
            </div>
            <button>Consultor online</button>
          </div>
        <div className={styles.object}>
          <div>
            <WhatsappLogo size={35} />
          </div>
          <button>Consultor online</button>
        </div>
      </div>
    </div>
  )
}
