import styles from './Subscribe.module.css'
import decor from '../../assets/img/Group42.svg'
import decor2 from '../../assets/img/Group43.svg'
import decor3 from '../../assets/img/Group77.svg'
import decor4 from '../../assets/img/Group5.svg'

export default function Subscribe() {
  return (
    <div>
        <div className={styles.wrapper}>
            <form action="" className={styles.form}>
                <h5 className={styles.title}>Subscribe to get information, latest news and other interesting offers about Jadoo</h5>
                <div className={styles.submit}>
                    <input className={styles.input} type="text" placeholder='Your email'/>
                    <button className={styles.button}>Subscribe</button>
                </div>
                <img className={styles.decor} src={decor} alt="" />
                <img className={styles.decor2} src={decor2} alt="" />
                <img className={styles.decor3} src={decor3} alt="" />
            </form>
            <img className={styles.decor4} src={decor4} alt="" />
        </div>
    </div>
  )
}
