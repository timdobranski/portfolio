'use client';

import styles from './Home.module.css'
import Image from 'next/image'
import me from '../../public/images/Me-2.jpg'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {
  const [activeRing, setActiveRing] = useState(1);
  const [zoomClass, setZoomClass] = useState('');

  // Event listeners for arrow keys
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight" || event.keyCode === 39) {
        handleNextRing();
      } else if (event.key === "ArrowLeft" || event.keyCode === 37) {
        handlePreviousRing();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const rings = [
    {
      header: 'CONNECT',
      text: 'To connect with me, click on the connect tab above',
      color: 'yellowGlow',
      link: '/Connect'
    },
    {
      header: 'WELCOME!',
      text: 'My name is Tim, and I develop websites and apps. Click here to see some of my work',
      color: 'greenGlow',
      link: '/Projects'

    },
    {
      header: 'RESUME',
      text: 'Click here to see my expanded resume',
      color: 'redGlow',
      link: '/Resume'
    },
    {
      header: 'ABOUT ME',
      text: 'To learn more about me and my background, click on the about me tab above',
      color: 'blueGlow',
      link: '/About'
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
          let textClass = "";  // Initialize an empty string for text class

          if (index === activeRing) {
              ringClass = styles.activeRing;
              textClass = styles['fade-in-text'];  // Assign the fade-in-text class to active ring
          } else if (index === (activeRing + 1) % rings.length) {
              ringClass = styles.inactiveRight;
          } else if (index === (activeRing - 1 + rings.length) % rings.length) {
              ringClass = styles.inactiveLeft;
          } else {
              ringClass = styles.hidden;
          }

          return (
            <Link href={ring.link} key={index} className={styles.link}>
              <div className={`${styles.ring} ${styles[ring.color]} ${ringClass}`}>
                <h1 className={`${styles.ringHeader} ${textClass}`}>{ring.header}</h1>
                <p className={`${styles.ringText} ${textClass}`}>{ring.text}</p>
              </div>
            </Link>
          );
      })}
    </main>
)
}
