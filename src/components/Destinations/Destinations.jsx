import styles from './Destinations.module.css'
import rectangle14 from '../../assets/img/Rectangle14.svg'
import rectangle15 from '../../assets/img/Rectangle15.svg'
import rectangle16 from '../../assets/img/Rectangle16.svg'
import navigation from '../../assets/img/Navigation.svg'
import decore from '../../assets/img/Decore2.svg'

export default function Destinations() {

    const data = [
        {
            img: rectangle14,
            place: 'Rome, Italty',
            price: 5.42,
            days: 10
        },
        {
            img: rectangle15,
            place: 'London, UK',
            price: 4.2,
            days: 12
        },
        {
            img: rectangle16,
            place: 'Full Europe',
            price: 15,
            days: 28
        },
    ]

    return (
        <div className={styles.destinations}>
            <h5 className={styles.subtitle}>Top Selling</h5>
            <h3 className={styles.title}>Top Destinations</h3>
            <ul className={styles.list}>
                {data.map(item => (
                    <li key={item.img} className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.img} src={item.img} alt="" />
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.placePrice}>
                                <span className={styles.place}>{item.place}</span>
                                <span className={styles.price}>${item.price}k</span>
                            </div>
                            <div className={styles.days}>
                                <img className={styles.icon} src={navigation} alt="" />
                                <span className={styles.description}>{item.days} Days Trip</span>
                            </div>
                        </div>
                    </li>
                ))}
                <img src={decore} className={styles.decore} />
            </ul>
        </div>
    )
}
