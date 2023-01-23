import { ChatCircleText, Envelope, WhatsappLogo } from 'phosphor-react'
import styles from './styles.module.scss'

export default function Contact() {
  return (
    <div className={styles.containerContact}>
      <div className={styles.object}>
        <ChatCircleText size={35} />
      </div>
      <span></span>
      <div className={styles.object}>
        <Envelope size={35} />
      </div>
      <span></span>
      <div className={styles.object}>
        <WhatsappLogo size={35} />
      </div>
    </div>
  )
}
