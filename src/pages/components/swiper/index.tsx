import React, { useState } from 'react'
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
import { Bicycle, SoccerBall } from 'phosphor-react'
import Image from 'next/image'

export default function SwiperLazer() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className={styles.containerSwiper}>
      <Swiper
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/bike.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/barbecue.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/futebol.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/barbecue.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
        navigation={true}
      >
        <SwiperSlide className={styles.contentThumbs}>
          <div></div>
          <div className={styles.ThumbsText}>
            <div>
              <Bicycle size={32} />
            </div>
            <div>
              <h1>Bicicleta</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.contentThumbs}>
          <div></div>
          <div className={styles.ThumbsText}>
            <div>
              <SoccerBall size={32} />
            </div>
            <div>
              <h1>Futebol</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.contentThumbs}>
          <div></div>
          <div className={styles.ThumbsText}>
            <div>
              <SoccerBall size={32} />
            </div>
            <div>
              <h1>Futebol</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
