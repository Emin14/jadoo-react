import styles from './Testimonials.module.css'
import mike from '../../assets/img/Mike.svg'
import tagiev from '../../assets/img/tagiev.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  return (
    <div className={styles.wrapper}>
        <h5 className={styles.subtitle}>Testimonials</h5>
        <h3 className={styles.title}>What people say about Us.</h3>
        <div>
        <Swiper
        direction={'vertical'}
        navigation={true} 
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.modal}>
            <img src={mike} alt="" />
            <p className={styles.modalText}>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <p className={styles.modalName}>Mike taylor</p>
            <p className={styles.modalPlace}>Lahore, Pakistan</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.modal}>
            <img src={tagiev} alt="" />
            <p className={styles.modalText}>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <p className={styles.modalName}>Chris Thomas</p>
            <p className={styles.modalPlace}>CEO of Red Button</p>
          </div>
          </SwiperSlide>
      </Swiper>
        </div>

    </div>
  )
}
