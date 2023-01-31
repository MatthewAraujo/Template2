import { Target } from 'phosphor-react'
import SwiperLazer from '../swiper'
import Tag from '../Tags'
import styles from './styles.module.scss'
export default function Lazer() {
  return (
    <div className={styles.container}>
      <Tag
        strong="lazer"
        pfist=""
        psecond="completo"
        icon={<Target size={32} />}
      />
      <div className={styles.containerLazer}>
        <SwiperLazer />
      </div>
    </div>
  )
}
