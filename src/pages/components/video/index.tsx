import Image from 'next/image'
import { MapPin } from 'phosphor-react'
import Tag from '../Tags'
import styles from './styles.module.scss'

export default function Video() {
  return (
    <div className={styles.video}>
      <Tag
        icon={<MapPin size={32} />}
        psecond="da cidade"
        strong="coração"
        pfist="no"
      />
      <div className={styles.videoPlayer}>
        <Image
          src="/faixada.png"
          alt="faixada do predio"
          width={1082}
          height={581}
          loading="lazy"
        />
      </div>
    </div>
  )
}
