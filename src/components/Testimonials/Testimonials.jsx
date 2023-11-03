import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { useTranslation } from 'react-i18next';
import { A11y, EffectCards } from 'swiper/modules';

import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';
import mike from '../../assets/img/Mike.jpg';
import tagiev from '../../assets/img/tagiev.jpg';
import styles from './Testimonials.module.css';
import './testimonials.css';

export default function Testimonials() {
  const { t } = useTranslation();
  const data = t('testimonials.data', { returnObjects: true });

  const img = [mike, tagiev];

  return (
    <div className={styles.wrapper}>
      <div>
        <h5 className={styles.subtitle}>{t('testimonials.subtitle')}</h5>
        <h3 className={styles.title}>{t('testimonials.title')}</h3>
      </div>
      <div className={styles.slider}>
        <Swiper
          effect="cards"
          navigation
          direction="vertical"
          modules={[A11y, EffectCards]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.author} className={styles.resSlide}>
              <div className={styles.modal}>
                <img src={img[item.id]} alt="" />
                <div className={styles.textBlock}>
                  <p className={styles.modalText}>{item.text}</p>
                  <p className={styles.modalName}>{item.author}</p>
                  <p className={styles.modalPlace}>{item.place}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
}
