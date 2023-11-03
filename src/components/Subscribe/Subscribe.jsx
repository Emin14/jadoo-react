import { useTranslation } from 'react-i18next';
import decor from '../../assets/img/Group42.svg';
import decor2 from '../../assets/img/Group43.svg';
import decor3 from '../../assets/img/Group77.svg';
import decor4 from '../../assets/img/Group5.svg';
import styles from './Subscribe.module.css';

export default function Subscribe() {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.wrapper}>
        <form action="" className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <h5 className={styles.title}>{t('subscribe.title')}</h5>
          <div className={styles.submit}>
            <label className={styles.label} htmlFor="mail">
              <input className={styles.input} id="mail" type="text" placeholder={t('subscribe.mail')} />
            </label>
            <button type="submit" className={styles.button}>{t('subscribe.subscription') }</button>
          </div>
          <img className={styles.decor} src={decor} alt="" />
          <img className={styles.decor2} src={decor2} alt="" />
          <img className={styles.decor3} src={decor3} alt="" />
        </form>
        <img className={styles.decor4} src={decor4} alt="" />
      </div>
    </div>
  );
}
