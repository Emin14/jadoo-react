import { useSwiper } from 'swiper/react';
import styles from './SwiperNavButtons.module.css';

export default function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <div className={styles.swiperNavBtns}>
      <button type="button" className={styles.prev} onClick={() => swiper.slidePrev()}>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8.5L8 1.5L15 8.5" stroke="#BCB7C2" />
        </svg>
      </button>
      <button type="button" className={styles.next} onClick={() => swiper.slideNext()}>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L8 8L15 1" stroke="#BCB7C2" />
        </svg>
      </button>
    </div>
  );
}
