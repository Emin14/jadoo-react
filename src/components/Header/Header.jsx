import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
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

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((prev) => !prev);
  };

  return (
    <header className={nav ? [styles.wrapper, styles.active].join(' ') : [styles.wrapper]}>
      <div className={styles.hamburger} onClick={handleClick} onKeyDown={handleClick} role="presentation">
        {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </div>
      <div className={styles.user}>
        <AiOutlineUser size={35} />
      </div>
      <a href="/" className={styles.logo} aria-label="logo"><img src={logo} alt="" /></a>
      <div className={
                  nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
                }
      >
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {headerMenu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <div className={styles.account}>
          <button type="button" className={styles.login}>{t('login')}</button>
          <button type="button" className={styles.signup}>{t('sign-up')}</button>

        </div>
      </div>
      <select name="user_profile_color_2" required="required" className={styles.select} onChange={changeLang}>
        <option value="EN">EN</option>
        <option value="RU">RU</option>
      </select>
    </header>
  );
}
