import React from 'react'
import logo from '../../assets/img/Logo.svg'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <a href="/"><img src={logo} alt="" className={styles.logo}/></a>
        <nav>
            <ul className={styles.list}>
                <li>Desitnations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
            </ul>
        </nav>
        <button className={`${styles.login} ${styles.account}`}>Login</button>
        <button className={`${styles.signup} ${styles.account}`}>Sign up</button>
        <select name="user_profile_color_2" required="required" className={styles.select}>
          <option value="EN">EN</option>
          <option value="RU">RU</option>
        </select>
    </header>
  )
}
