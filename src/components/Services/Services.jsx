import { useTranslation } from 'react-i18next';
import microphone from '../../assets/img/microphone.svg';
import plane from '../../assets/img/plane.svg';
import power from '../../assets/img/power.svg';
import satellite from '../../assets/img/satellite-dish.svg';
import decor from '../../assets/img/Group4.svg';
import styles from './Services.module.css';

const img = [satellite, plane, microphone, power];

export default function Services() {
  const { t } = useTranslation();
  const data = t('services.data', { returnObjects: true });

  return (
    <div className={styles.servises}>
      <h5 className={styles.category}>{t('services.category')}</h5>
      <h3 className={styles.servisesTitle}>{t('services.offer')}</h3>
      <div>
        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img src={img[item.id]} alt="" />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.decor}>
        <img src={decor} alt="" />
      </div>
    </div>
  );
}
