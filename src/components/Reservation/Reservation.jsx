import { useTranslation } from 'react-i18next';
import group11 from '../../assets/img/Group11.svg';
import group12 from '../../assets/img/Group12.svg';
import group7 from '../../assets/img/Group7.svg';
import women from '../../assets/img/Rectangle17.svg';
import leaf1 from '../../assets/img/leaf1.svg';
import map1 from '../../assets/img/map1.svg';
import send2 from '../../assets/img/send2.svg';
import building from '../../assets/img/building.svg';
import reservation from '../../assets/img/image32.svg';
import line from '../../assets/img/Group3.svg';
import styles from './Reservation.module.css';

export default function Reservation() {
  const img = [group11, group12, group7];

  const { t } = useTranslation();
  const data = t('reservation.data', { returnObjects: true });

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftBlock}>
        <h5 className={styles.subtitle}>{t('reservation.subtitle')}</h5>
        <h3 className={styles.title}>{t('reservation.title')}</h3>
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img className={styles.img} src={img[item.id]} alt="" />
              </div>
              <div className={styles.bottom}>
                <h6 className={styles.itemTitle}>{item.title}</h6>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.card}>
          <img className={styles.cardImg} src={women} alt="" />
          <p className={styles.cardTitle}>{t('reservation.trip')}</p>
          <div className={styles.cardDate}>
            <span>
              14-29
              {t('reservation.month')}
            </span>
            <span>
              {' '}
              {t('reservation.author')}
            </span>
          </div>
          <div className={styles.cardIcon}>
            <span><img src={leaf1} alt="" /></span>
            <span><img src={map1} alt="" /></span>
            <span><img src={send2} alt="" /></span>
          </div>
          <div className={styles.cardPeople}>
            <div>
              <img src={building} alt="" />
              <span>
                24
                {t('reservation.people')}
              </span>
            </div>
            <svg className={styles.heart} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3644 2.45457C17.33 1.34265 15.8804 0.709981 14.3617 0.707636C12.8417 0.709395 11.3906 1.34173 10.3546 2.45386L10.0015 2.82698L9.64836 2.45386C7.59251 0.241198 4.13215 0.114128 1.91953 2.16998C1.82148 2.26112 1.72679 2.35577 1.63565 2.45386C-0.545218 4.80619 -0.545218 8.44162 1.63565 10.794L9.48255 19.069C9.75403 19.3556 10.2064 19.3679 10.493 19.0964C10.5024 19.0875 10.5115 19.0784 10.5204 19.069L18.3645 10.794C20.5452 8.44187 20.5452 4.80665 18.3644 2.45457ZM17.3302 9.80969H17.3294L10.0015 17.5386L2.67282 9.80969C1.00676 8.01229 1.00676 5.23481 2.67282 3.43741C4.1858 1.79757 6.74172 1.69475 8.38156 3.20773C8.46118 3.28119 8.53778 3.35779 8.61124 3.43741L9.48255 4.35663C9.76969 4.64193 10.2333 4.64193 10.5204 4.35663L11.3917 3.43812C12.9047 1.79828 15.4606 1.69546 17.1005 3.20844C17.1801 3.2819 17.2567 3.35851 17.3302 3.43812C19.0107 5.23837 19.023 8.02092 17.3302 9.80969Z" fill="#4152CA" />
            </svg>
          </div>
        </div>
        <div className={styles.blue} />
        <div className={styles.notification}>
          <div className={styles.notificationImg}><img src={reservation} alt="" /></div>
          <div>
            <p className={styles.ongoing}>{t('reservation.status')}</p>
            <p className={styles.trip}>{t('reservation.name')}</p>
            <p className={styles.completed}>
              <span className={styles.interest}>40% </span>
              <span>{t('reservation.completed')}</span>
            </p>
            <img src={line} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
