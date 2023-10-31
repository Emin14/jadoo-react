import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import traveller from '../../assets/img/Traveller.png';
import airplane from '../../assets/img/Airplane.svg';
import playButton from '../../assets/img/Polygon1.svg';
import vector from '../../assets/img/Vector.svg';
import styles from './Banner.module.css';

export default function Banner() {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const playVideo = (e) => {
    setShow((prev) => !prev);
    if (e.target.nodeName === 'DIV') {
      const { src } = e.target.children[0].children[0];
      e.target.children[0].children[0].src = '';
      setTimeout(() => {
        e.target.children[0].children[0].src = src;
      }, 0);
    }
  };

  return (
    <div className='container'>
    <div className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <div className={styles.bannerText}>
          <h5 className={styles.subtitle}>{t('banner.subtitle')}</h5>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{t('banner.title')}</h3>
            <img className={styles.vector} src={vector} alt="" />
          </div>
          <p className={styles.text}>{t('banner.text')}</p>
          <div className={styles.play}>
            <button type="button" className={styles.moreBtn}>{t('banner.more')}</button>
            <button type="button" className={styles.playBtn} onClick={playVideo}>
              <img src={playButton} alt="" />
            </button>
            <span className={styles.demo}>{t('banner.demo')}</span>
          </div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <img src={traveller} alt="" className={styles.traveller} />
        <img src={airplane} alt="" className={styles.airplane1} />
        <img src={airplane} alt="" className={styles.airplane2} />
      </div>
      <div className={show ? `${styles.popup} ${styles.active}` : styles.popup} onClick={playVideo} onKeyDown={playVideo} role="presentation">
        <div className={styles.modal}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=eYk-X8F-Rt-3Jegp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>
      </div>
    </div>
    </div>
  );
}
