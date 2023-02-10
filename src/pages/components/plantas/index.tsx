import { Buildings } from 'phosphor-react'
import SwiperPlantas from '../swiperPlantas'
import Tag from '../Tags'
import styles from './styles.module.scss'

export default function Plantas() {
  return (
    <section className={styles.container} id="plantas">
      <Tag
        icon={<Buildings size={32} />}
        psecond="quartos"
        strong="1 e 2"
        pfist=""
      />
      <div className={styles.containerPlantas}>
        <SwiperPlantas />
      </div>
    </section>
  )
}
