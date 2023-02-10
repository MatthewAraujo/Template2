import Image from 'next/image'
import styles from './styles.module.scss'
export default function Banner() {
  return (
    <section className={styles.banner} id="home">
      <Image
        src="/banner.png"
        alt="sala"
        width={1920}
        height={853}
        loading="lazy"
      />
      <div className={styles.content}>
        <div className={styles.background}>
          <div className={styles.text}>
            <h1>
              <strong>LOREM IPSUM</strong> DOLOR SIT AMET
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
