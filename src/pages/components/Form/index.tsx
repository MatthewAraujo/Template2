import Link from 'next/link'
import styles from './styles.module.scss'

export default function Form() {
  return (
    <div className={styles.container} id="contato">
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0001000000003!2d-46.69399968501673!3d-23.59599968469843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f8f8f8f8f8f%3A0x1b8b8b8b8b8b8b8b8!2sAv.%20Paulista%2C%201.000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-000!5e0!3m2!1spt-BR!2sbr!4v1629200000000!5m2!1spt-BR!2sbr"
          width="900"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
          <span>
            ficou <p> interessado?</p>
          </span>
          <span>Entre em contato</span>
        </div>
        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Telefone" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Mensagem" />
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p>
              li e aceito os termos de uso dos dados conforme indicado na{' '}
              <Link className={styles.link} href="/Politica">
                Politica de privacidade
              </Link>
            </p>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <p>
          Rua Itaperuna, 100 Santa Rosa - Pé Pequeno Niterói - RJ, 24240-070
        </p>
      </div>
    </div>
  )
}
