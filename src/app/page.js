'use client';

import styles from './Home.module.css'
import Image from 'next/image'
import me from '../../public/images/Me-2.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [ activeRing, setActiveRing ] = useState(0)

  const rings = [
    {
      header: 'WELCOME!',
      text: 'My name is Tim, and I develop websites and apps',
      color: 'greenGlow'
    },
    {
      header: 'ABOUT ME',
      text: 'To learn more about me and my background, click on the about me tab above',
      color: 'blueGlow'
    },
    {
      header: 'CONNECT',
      text: 'To connect with me, click on the connect tab above',
      color: 'yellowGlow'
    },
    {
      header: 'MY WORK',
      text: 'To see more of my work, click on the projects tab above',
      color: 'redGlow'
    },
  ]


  const handleNextRing = () => {
    if (activeRing === 3) {
      setActiveRing(0)
    } else {
      setActiveRing(activeRing + 1)
    }
  }
  const handlePreviousRing = () => {
    if (activeRing === 0) {
      setActiveRing(3)
    } else {
      setActiveRing(activeRing - 1)
    }
  }


  return (
    <main id={styles.home}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.leftNav} onClick={handlePreviousRing}/>
        <FontAwesomeIcon icon={faChevronRight} className={styles.rightNav} onClick={handleNextRing} />

        {/* Previous Ring */}
        {(() => {
            const i = (activeRing - 1 + rings.length) % rings.length;
            const ring = rings[i];
            return (
                <div className={`${styles.ring} ${styles[ring.color]} ${styles.inactiveLeft}`} key={i}>
                    <h1>{ring.header}</h1>
                    <p>{ring.text}</p>
                </div>
            );
        })()}

        {/* Active Ring */}
        {(() => {
            const ring = rings[activeRing];
            return (
                <div className={`${styles.ring} ${styles[ring.color]} ${styles.activeRing}`} key={activeRing}>
                    <h1 className={styles.ringHeader} >{ring.header} </h1>
                    <p className={styles.ringText} >{ring.text}</p>
                </div>
            );
        })()}

        {/* Next Ring */}
        {(() => {
            const i = (activeRing + 1) % rings.length;
            const ring = rings[i];
            return (
                <div className={`${styles.ring} ${styles[ring.color]} ${styles.inactiveRight}`} key={i}>
                    <h1>{ring.header}</h1>
                    <p>{ring.text}</p>
                </div>
            );
        })()}
    </main>
)
}
