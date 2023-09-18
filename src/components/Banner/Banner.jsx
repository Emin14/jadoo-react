import React, { useState } from 'react'
import traveller from '../../assets/img/Traveller.svg'
import airplane from '../../assets/img/Airplane.svg'
import playButton from '../../assets/img/Polygon1.svg'
import vector from '../../assets/img/Vector.svg'
import styles from './Banner.module.css'

export default function Banner(){

  const [show, setShow] = useState(false)

  const playVideo = (e) => {
    if(e.target.nodeName === "IMG") {
      console.log('bp')

}

    setShow(prev => !prev)
    if(e.target.nodeName === "DIV") {
      const src = e.target.children[0].children[0].src
      e.target.children[0].children[0].src = ''
      setTimeout(()=> {
              e.target.children[0].children[0].src = src
      }, 0)
    }
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.leftBlock}>
          <div className={styles.bannerText}>
          <h5 className={styles.subtitle}>Best Destinations around the world</h5>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>Travel, enjoy and live a new and full life</h3>
            <img className={styles.vector} src={vector} alt="" />
          </div>
          <p className={styles.text}>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <div className={styles.play}>
            <button className={styles.moreBtn}>Find out more</button>
              <button className={styles.playBtn} onClick={playVideo}>
                <img src={playButton} alt=""/>
              </button>
              <span className={styles.demo}>Play Demo</span>
          </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <img src={traveller} alt="" className={styles.traveller}/>
          <img src={airplane} alt="" className={styles.airplane1}/>
          <img src={airplane} alt="" className={styles.airplane2}/>
        </div>
        <div className={show ? `${styles.popup} ${styles.active}` : styles.popup} onClick={playVideo}>
            <div className={styles.modal}>
            <iframe width="560" height="315" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=eYk-X8F-Rt-3Jegp" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
            </div>
        </div>
    </div>
  )
}
