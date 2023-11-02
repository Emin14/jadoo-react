import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/Logo.svg';
import styles from './header.module.css';
import { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';


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

  const [active, setActive] = useState('')

  const [nav, setNav] = useState(false);

const mrt = (e) => {
  setNav(!nav)


  if(active === 'active') {
    console.log(e.target)
    setActive('')
  }
  else {
    console.log(e.target)
    setActive('active')
  }

}

  return (
        <header className={[styles[`wrapper`], styles[`${active}`]].join(" ")}>
            <div onClick={mrt} className={styles.hamburger} >
                {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>
            <div className={styles.user}>
              <AiOutlineUser size={35} />
            </div>
          <a href="/" className={styles.logo} aria-label="logo"><img src={logo} alt="" /></a>
          <div className={
                  nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
                }>
            <nav>
              <ul className={styles.list}>
                {headerMenu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </nav>
            <div className={styles.account2}>
              <button type="button" className={`${styles.login} ${styles.account}`}>{t('login')}</button>
              <button type="button" className={`${styles.signup} ${styles.account}`}>{t('sign-up')}</button>

            </div>
          </div>
          <select name="user_profile_color_2" required="required" className={styles.select} onChange={changeLang}>
                <option value="EN">EN</option>
                <option value="RU">RU</option>
              </select>
          </header>
  );
}
