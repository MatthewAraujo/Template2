import styles from './styles.module.scss'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

export default function SwiperPlantas() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  console.log(thumbsSwiper)
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image width={1024} height={768} alt="image" src="/planta1.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image width={1024} height={768} alt="image" src="/plantas2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image width={1024} height={768} alt="image" src="/plantas3.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image width={1024} height={768} alt="image" src="/plantas4.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        modules={[Navigation, Thumbs]}
        className={styles.swiper2}
      >
        <SwiperSlide className={styles.swiperThumbs}>
          <Image width={1024} height={1024} alt="image" src="/planta1.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperThumbs}>
          <Image width={1024} height={1024} alt="image" src="/plantas2.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperThumbs}>
          <Image width={1024} height={1024} alt="image" src="/plantas3.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperThumbs}>
          <Image width={1024} height={1024} alt="image" src="/plantas4.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
