import Image from 'next/image'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.conteudo}>
        <p>
          Direitos reservados a <strong>COMPANY.</strong>
        </p>
        <p>Acesse a nossa política de privacidade. Desenvolvido por</p>
      </div>
      <div>
        <Image
          src="/internit.png"
          width={88}
          height={26}
          alt="logo internit"
          loading="lazy"
        />
      </div>
    </div>
  )
}
