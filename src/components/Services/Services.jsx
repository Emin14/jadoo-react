import microphone from '../../assets/img/microphone.svg'
import plane from '../../assets/img/plane.svg'
import power from '../../assets/img/power.svg'
import satellite from '../../assets/img/satellite-dish.svg'
import styles from './Services.module.css'

const data = [
    {
        img: satellite,
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
        img: plane,
        title: 'Best Flights',
        description: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
        img: microphone,
        title: 'Local Events',
        description: 'Barton vanity itself do in it. Preferd to men it engrossed listening. '
    },
    {
        img: power,
        title: 'Customization',
        description: 'We deliver outsourced aviation services for military customers'
    },
]

export default function Services() {
  return (
    <div className={styles.servises}>
        <h5 className={styles.category}>CATEGORY</h5>
        <h3 className={styles.servisesTitle}>We Offer Best Services</h3>
        <div>
            <ul className={styles.list}>
                {data.map(item => (
                    <li key={item.img} className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img src={item.img} alt="" />
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
