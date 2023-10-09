'use client';

import styles from './Home.module.css'
import Image from 'next/image'
import me from '../../public/images/Me-2.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  const [ activeRing, setActiveRing ] = useState(1)

  const rings = [
    {
      header: 'CONNECT',
      text: 'To connect with me, click on the connect tab above',
      color: 'yellowGlow'
    },
    {
      header: 'WELCOME!',
      text: 'My name is Tim, and I develop websites and apps',
      color: 'greenGlow'
    },
    {
      header: 'MY WORK',
      text: 'To see more of my work, click on the projects tab above',
      color: 'redGlow'
    },
    {
      header: 'ABOUT ME',
      text: 'To learn more about me and my background, click on the about me tab above',
      color: 'blueGlow'
    },
  ]


  const handleNextRing = () => {
    setActiveRing((prevRing) => (prevRing + 1) % rings.length);
}

const handlePreviousRing = () => {
    setActiveRing((prevRing) => (prevRing - 1 + rings.length) % rings.length);
}


  return (
    <main id={styles.home}>
    <FontAwesomeIcon icon={faChevronLeft} className={styles.leftNav} onClick={handlePreviousRing}/>
    <FontAwesomeIcon icon={faChevronRight} className={styles.rightNav} onClick={handleNextRing} />

    {rings.map((ring, index) => {
        let ringClass;
        if (index === activeRing) {
            ringClass = styles.activeRing;
        } else if (index === (activeRing + 1) % rings.length) {
            ringClass = styles.inactiveRight;
        } else if (index === (activeRing - 1 + rings.length) % rings.length) {
            ringClass = styles.inactiveLeft;
        } else {
            ringClass = styles.hidden; // For rings that are not in the immediate view
        }

        return (
            <div className={`${styles.ring} ${styles[ring.color]} ${ringClass}`} key={index}>
                <h1 className={styles.ringHeader}>{ring.header}</h1>
                <p className={styles.ringText}>{ring.text}</p>
            </div>
        );
    })}
</main>
)
}
