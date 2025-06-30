'use client';

import styles from './Home.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMusic, faCode, faGraduationCap, faWrench, faMessage } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [activeRing, setActiveRing] = useState(1);
  const [zoomedRing, setZoomedRing] = useState(null);

  const router = useRouter();
  const rings = [
    {
      header: 'CONNECT',
      text: ['Select this ring to', 'connect with me'],
      color: 'purpleGlow',
      link: '/connect',
      id: 'ring0',
      icon: faMessage
    },
    {
      header: 'APPS',
      text: ['Select this ring to', 'see my web and mobile', 'software projects'],
      color: 'greenGlow',
      link: '/apps',
      id: 'ring1',
      icon: faCode
    },
    {
      header: 'MUSIC',
      text: ['Select this ring to see my ', 'musical projects'],
      color: 'redGlow',
      link: '/music',
      id: 'ring2',
      icon: faMusic
    },
    {
      header: 'LESSONS',
      text: ['Select this ring to learn', 'more about my guitar', 'lessons'],
      color: 'blueGlow',
      link: '/lessons',
      id: 'ring3',
      icon: faGraduationCap
    },
    {
      header: '3D DESIGN',
      text: ['Select this ring to', 'see the art I create', 'from 3D models and', 'woodworking'],
      color: 'yellowGlow',
      link: '/3d-design',
      id: 'ring4',
      icon: faWrench
    },
  ]


  const handleRingClick = (ringElement, url) => {
    setZoomedRing(ringElement);
    setTimeout(() => {
      router.push(url);
    }, 1000);
  }

  const handleNextRing = () => {
    setActiveRing((prevRing) => (prevRing + 1) % rings.length);
  }

  const handlePreviousRing = () => {
    setActiveRing((prevRing) => (prevRing - 1 + rings.length) % rings.length);
  }


  return (
    <main id={styles.home}>
      <AnimatePresence >

        {/* <svg style={{position: 'absolute', width: 0, height: 0}}>
          <filter id="water">
            <feTurbulence  id='sea-filter' baseFrequency='0.005' numOctaves="5" seed='0' />
            <feDisplacementMap  id='displacement' in="SourceGraphic" in2='noise' scale="7"/>
          </filter>
          <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="90s" keyTimes="0;0.5;1" values="0.02 0.02;0.03 0.03;0.02 0.02" repeatCount="indefinite"/>

        </svg> */}
        <div className={styles.homeContainer} key='homeContainer'>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.leftNav} onClick={handlePreviousRing}/>
          <FontAwesomeIcon icon={faChevronRight} className={styles.rightNav} onClick={handleNextRing} />
          <div className='backgroundRing yellowGlow m c1'>
            <FontAwesomeIcon icon={faWrench} className={styles.ringIcon} />

          </div>
          <div className='backgroundRing purpleGlow m c2'>
            <FontAwesomeIcon icon={faMessage} className={styles.ringIcon} />
          </div>
          <div className='backgroundRing redGlow l c3'>
            <FontAwesomeIcon icon={faMusic} className={styles.ringIcon} />
          </div>
          <div className='backgroundRing greenGlow m c4'>
            <FontAwesomeIcon icon={faCode} className={styles.ringIcon} />
          </div>
          <div className='backgroundRing blueGlow m c5'>
            <FontAwesomeIcon icon={faGraduationCap} className={styles.ringIcon} />
          </div>
          <div className={styles.ringGrid}>


            {rings.map((ring, index) => {
              let ringClass;
              let textClass = "";  // Initialize an empty string for text class

              const prev1 = (activeRing - 1 + rings.length) % rings.length;
              const prev2 = (activeRing - 2 + rings.length) % rings.length;
              const next1 = (activeRing + 1) % rings.length;
              const next2 = (activeRing + 2) % rings.length;

              if (index === activeRing) {
                ringClass = styles.activeRing;
                textClass = styles['fade-in-text'];
              } else if (index === next1) {
                ringClass = styles.inactiveRight;
              } else if (index === next2) {
                ringClass = styles.farRightInactive;
              } else if (index === prev1) {
                ringClass = styles.inactiveLeft;
              } else if (index === prev2) {
                ringClass = styles.farLeftInactive;
              } else {
                ringClass = styles.hidden;
              }

              return (
                <>

                  <div onClick={() => handleRingClick(ring.id, ring.link)} key={ring.link}
                    className={`${styles.ring} ${styles[ring.color]} ${ringClass} ${zoomedRing === ring.id ? styles.ringZoom : ''}`}
                    id={ring.id}>

                    <div className={styles.ringContainer}>

                      {ring.icon && <FontAwesomeIcon icon={ring.icon} className={styles.ringIcon} />}
                      <h1 className={`${styles.ringHeader} ${textClass}`}>{ring.header}</h1>
                      {ring.text.map((text, i) => {
                        return (
                          <p className={`${styles.ringText} ${textClass}`} key={i}>{text}</p>
                        )
                      })}

                    </div>


                  </div>
                   <div className={styles.greenGlowBorder}></div>
                </>
              );
            })}
          </div>
        </div>
      </AnimatePresence>
    </main>
  )
}
