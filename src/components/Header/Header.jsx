import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/Logo.svg';
import styles from './header.module.css';

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    if (e.target.value === 'RU') {
      i18n.changeLanguage('ru');
    } else {
      i18n.changeLanguage('en');
    }
  };

  const headerMenu = t('menu-list', { returnObjects: true });

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo} aria-label="logo"><img src={logo} alt="" /></a>
      <div className={styles.wrapper}>
        <nav>
          <ul className={styles.list}>
            {headerMenu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <button type="button" className={`${styles.login} ${styles.account}`}>{t('login')}</button>
        <button type="button" className={`${styles.signup} ${styles.account}`}>{t('sign-up')}</button>
        <select name="user_profile_color_2" required="required" className={styles.select} onChange={changeLang}>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </select>
      </div>

    </header>
  );
}
