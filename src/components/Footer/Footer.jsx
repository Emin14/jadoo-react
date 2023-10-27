import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import instagram from '../../assets/img/Social-media/instagram1.svg';
import facebook from '../../assets/img/Social-media/Facebook.svg';
import twitter from '../../assets/img/Social-media/twitter.svg';
import apple from '../../assets/img/apple.svg';
import google from '../../assets/img/google-play.svg';

export default function Footer() {
  const { t } = useTranslation();
  const data = t('footer.data', { returnObjects: true });

  return (
    <div className={styles.wrapper}>
      <div className={styles.blocks}>
        <div>
          <p className={styles.title}>Jadoo.</p>
          <p className={styles.subtitle}>{t('footer.subtitle')}</p>
        </div>
        {data.map((item) => (
          <div key={item.title}>
            <h3 className={styles.listTitle}>{item.title}</h3>
            <ul>
              {item.list.map((el) => (
                <li key={el} className={styles.item}>{el}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className={styles.socials}>
            <span className={styles.facebook}><img src={facebook} alt="" /></span>
            <span className={styles.instagram}><img src={instagram} alt="" /></span>
            <span className={styles.twitter}><img src={twitter} alt="" /></span>
          </div>
          <p className={styles.socialsText}>{t('footer.socialsText')}</p>
          <div className={styles.stores}>
            <div className={styles.store}>
              <img className={styles.google} src={google} alt="" />
              <div>
                <p>{t('footer.google')}</p>
                <p>Google play</p>
              </div>
            </div>
            <div className={styles.store}>
              <img className={styles.apple} src={apple} alt="" />
              <div>
                <p>{t('footer.apple')}</p>
                <p>Apple store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>{t('footer.copyright')}</p>
    </div>
  );
}
