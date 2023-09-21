import styles from './Footer.module.css'
import instagram from '../../assets/img/Social-media/instagram1.svg'
import facebook from '../../assets/img/Social-media/Facebook.svg'
import twitter from '../../assets/img/Social-media/twitter.svg'
import apple from '../../assets/img/apple.svg'
import google from '../../assets/img/google-play.svg'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.blocks}>
            <div>
                <a className={styles.title} href="">Jadoo.</a>
                <p className={styles.subtitle}>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <ul className={styles.list}>
                <li>Company</li>
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
            </ul>
            <ul className={styles.list}>
                <li>Contact</li>
                <li>Help/FAQ</li>
                <li>Press</li>
                <li>Affilates</li>
            </ul>
            <ul className={styles.list}>
                <li>More</li>
                <li>Airlinefees</li>
                <li>Airline</li>
                <li>Low fare tips</li>
            </ul>
            <div>
                <div className={styles.socials}>
                    <span className={styles.facebook}><img src={facebook} alt="" /></span>
                    <span className={styles.instagram}><img src={instagram} alt="" /></span>
                    <span className={styles.twitter}><img src={twitter} alt="" /></span>
                </div>
                <p className={styles.socialsText}>Discover our app</p>
                <div className={styles.stores}>
                    <a href="">
                        <div className={styles.store}>
                            <img className={styles.google} src={google} alt="" />
                            <div>
                                <p>Get in on</p>
                                <p>Google play</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className={styles.store}>
                        <img className={styles.apple} src={apple} alt="" />
                            <div>
                                <p>Avaible on the</p>
                                <p>Apple store</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <p className={styles.copyright}>All rights reserved@jadoo.co</p>
    </div>
  )
}
