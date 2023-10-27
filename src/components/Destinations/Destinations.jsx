import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Destinations.module.css';
import rectangle14 from '../../assets/img/Rectangle14.svg';
import rectangle15 from '../../assets/img/Rectangle15.svg';
import rectangle16 from '../../assets/img/Rectangle16.jpg';
import navigation from '../../assets/img/Navigation.svg';
import decore from '../../assets/img/Decore2.svg';

export default function Destinations() {
  const img = [rectangle14, rectangle15, rectangle16];

  const { t } = useTranslation();
  const data = t('destinations.data', { returnObjects: true });

  return (
    <div className={styles.destinations}>
      <h5 className={styles.subtitle}>{t('destinations.subtitle')}</h5>
      <h3 className={styles.title}>{t('destinations.title')}</h3>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.imageWrapper}>
              <img className={styles.img} src={img[item.id]} alt="" />
            </div>
            <div className={styles.bottom}>
              <div className={styles.placePrice}>
                <span className={styles.place}>{item.place}</span>
                <span className={styles.price}>
                  $
                  {item.price}
                  k
                </span>
              </div>
              <div className={styles.days}>
                <img className={styles.icon} src={navigation} alt="" />
                <span className={styles.description}>
                  {item.days}
                  {' '}
                  {t('destinations.days')}
                </span>
              </div>
            </div>
          </li>
        ))}
        <img src={decore} className={styles.decore} alt="decore" />
      </ul>
    </div>
  );
}
