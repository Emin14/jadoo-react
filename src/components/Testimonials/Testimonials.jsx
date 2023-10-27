import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { useTranslation } from 'react-i18next';

import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';

import mike from '../../assets/img/Mike.svg';
import tagiev from '../../assets/img/tagiev.jpg';

import styles from './Testimonials.module.css';
import './index.css';


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
        // spaceBetween={100}
        // slidesPerView={1}
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
          {/* <SwiperSlide className={styles.resSlide}>
          <div className={styles.modal}>
            <img src={mike} alt="" />
            <div className={styles.textBlock}>
              <p className={styles.modalText}>{t('testimonials.data[0].text')}</p>
              <p className={styles.modalName}>{t('testimonials.data[0].author')}</p>
              <p className={styles.modalPlace}>{t('testimonials.data[0].place')}</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.resSlide}>
          <div className={styles.modal}>
            <img src={tagiev} alt="" />
            <div className={styles.textBlock}>
            <p className={styles.modalText}>{t('testimonials.data[1].text')}</p>
              <p className={styles.modalName}>{t('testimonials.data[1].author')}</p>
              <p className={styles.modalPlace}>{t('testimonials.data[1].place')}</p>
            </div>
          </div>
        </SwiperSlide> */}
          <SwiperNavButtons />
        </Swiper>
      </div>

    </div>
  );
}
