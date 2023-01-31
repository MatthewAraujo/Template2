// import Swiper core and required modules
import { Navigation, Thumbs } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'

import styles from './styles.module.scss'
import { Bicycle } from 'phosphor-react'
import Image from 'next/image'

export default function SwiperLazer() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image src="/bike.png" width={645} alt="churrasco" height={496} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/barbecue.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/futebol.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/barbecue.png" width={456} alt="churrasco" height={358} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        className={styles.swiperThumbs}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
      >
        <SwiperSlide>
          <div></div>
          <div className={styles.ThumbsText}>
            <div>
              <Bicycle size={32} />
            </div>
            <div>
              <h1>bicicleta</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
