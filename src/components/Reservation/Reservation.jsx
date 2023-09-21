import styles from './Reservation.module.css'
import group11 from '../../assets/img/Group11.svg'
import group12 from '../../assets/img/Group12.svg'
import group7 from '../../assets/img/Group7.svg'
import women from '../../assets/img/Rectangle17.svg'
import leaf1 from '../../assets/img/leaf1.svg'
import map1 from '../../assets/img/map1.svg'
import send2 from '../../assets/img/send2.svg'
import building from '../../assets/img/building.svg'
import reservation from '../../assets/img/image32.svg'
import line from '../../assets/img/Group3.svg'
import heart from '../../assets/img/Vector2.svg'

export default function Reservation() {

    const data = [
        {
            img: group7,
            title: 'Choose Destination',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
        },
        {
            img: group12,
            title: 'Make Payment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
        },
        {
            img: group11,
            title: 'Reach Airport on Selected Date',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ',
        },
    ]

  return (
    <div className={styles.wrapper}>
       <div>
        <h5 className={styles.subtitle}>Easy and Fast</h5>
        <h3 className={styles.title}>Book your next trip in 3 easy steps</h3>
        <ul className={styles.list}>
                {data.map(item => (
                    <li key={item.img} className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.img} src={item.img} alt="" />
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
                <p  className={styles.cardTitle}>Trip To Greece</p>
                <div className={styles.cardDate}>
                    <span>14-29 June</span>
                    <span>by Robbin joseph</span>
                </div>
                <div className={styles.cardIcon}>
                    <span><img src={leaf1} alt="" /></span>
                    <span><img src={map1} alt="" /></span>
                    <span><img src={send2} alt="" /></span>
                </div>
                <div className={styles.cardPeople}>
                    <div>
                        <img src={building} alt="" />
                        <span>24 people going</span>
                    </div>
                    <img src={heart} alt="" />
                </div>
            </div>
            <div className={styles.blue}></div>
            <div className={styles.notification}>
                <div className={styles.notificationImg}><img src={reservation} alt="" /></div>
                <div>
                    <p className={styles.ongoing}>Ongoing</p>
                    <p  className={styles.trip}>Trip to rome</p>
                    <p className={styles.completed}><span className={styles.interest}>40% </span><span>completed</span></p>
                    <img src={line} alt="" />
                </div>
            </div>
       </div>
    </div>
  )
}
