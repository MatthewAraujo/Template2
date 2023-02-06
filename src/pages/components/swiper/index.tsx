// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import styles from './styles.module.scss'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper'
import {
  ArrowLeft,
  ArrowRight,
  Bicycle,
  CookingPot,
  SoccerBall,
} from 'phosphor-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function SwiperLazer() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <div className={styles.containerSwiper}>
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <div className="image">
              <Image src="/bike.png" width={476} alt="churrasco" height={458} />
            </div>
            <div className={styles.content}>
              <div className={styles.icon}>
                <Bicycle size={32} />
              </div>
              <div>
                <h1>Bicicletário</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <div className="image">
              <Image
                src="/barbecue.png"
                width={476}
                alt="churrasco"
                height={458}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.icon}>
                <CookingPot size={32} />
              </div>
              <div>
                <h1>Churrasco</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <div className="image">
              <Image
                src="/futebol.png"
                width={476}
                alt="churrasco"
                height={458}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.icon}>
                <SoccerBall size={32} />
              </div>
              <div>
                <h1>Futebol</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.containerArrow}>
        <div ref={navigationPrevRef}>
          <ArrowLeft size={32} />
        </div>
        <div ref={navigationNextRef}>
          <ArrowRight size={32} />
        </div>
      </div>
    </div>
  )
}
