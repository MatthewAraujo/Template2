import { MapPin } from 'phosphor-react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Tag from '../Tags'
import styles from './styles.module.scss'

export default function Video() {
  const [asWindow, setAsWindow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAsWindow(true)
    }
  }, [])
  return (
    <section className={styles.video} id="lazer">
      <Tag
        icon={<MapPin size={32} />}
        psecond="da cidade"
        strong="coração"
        pfist="no"
      />
      <div>
        {asWindow && (
          <ReactPlayer
            width="100%"
            height="70vh"
            url="https://www.youtube.com/watch?v=2OTq15A5s0Y"
          />
        )}
      </div>
    </section>
  )
}
