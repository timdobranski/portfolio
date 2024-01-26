'use client';

import styles from './Home.module.css'
import Image from 'next/image'
import me from '../../public/images/Me-2.jpg'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [activeRing, setActiveRing] = useState(1);
  const [zoomedRing, setZoomedRing] = useState(null);


  const prevActiveRingRef = useRef();

  const router = useRouter();
  const rings = [
    {
      header: 'CONNECT',
      text: ['Select this ring to', 'connect with me'],
      color: 'yellowGlow',
      link: '/rings/connect',
      id: 'ring0'
    },
    {
      header: 'WELCOME!',
      text: ['I\'m Tim and I develop', ' websites & apps. Select', 'this ring to see my work'],
      color: 'greenGlow',
      link: '/rings/projects',
      id: 'ring1'
    },
    {
      header: 'RESUME',
      text: ['Select this ring to see my ', 'expanded resume'],
      color: 'redGlow',
      link: '/rings/resume',
      id: 'ring2'
    },
    {
      header: 'ABOUT ME',
      text: ['Select this ring to learn', 'more about my', 'background'],
      color: 'blueGlow',
      link: '/rings/about',
      id: 'ring3'
    },
  ]


  const handleRingClick = (ringElement, url) => {
    setZoomedRing(ringElement);

    const handleRouteChange = () => {
      setZoomedRing(null);
      router.events.off('routeChangeStart', handleRouteChange);
  }
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
  const pageVariants = {
    initial: {
      opacity: 1,
      scale: 2
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 1,
      scale: 1.5
    }
  };

  return (
    <main id={styles.home}>
          <AnimatePresence >

          <svg style={{position: 'absolute', width: 0, height: 0}}>
                <filter id="water">
                    <feTurbulence  id='sea-filter' baseFrequency='0.005' numOctaves="5" seed='0' />
                    <feDisplacementMap  id='displacement' in="SourceGraphic" in2='noise' scale="7"/>
                </filter>
                <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="90s" keyTimes="0;0.5;1" values="0.02 0.02;0.03 0.03;0.02 0.02" repeatCount="indefinite"/>

        </svg>
      <div className={styles.homeContainer} key='homeContainer'>
    <FontAwesomeIcon icon={faChevronLeft} className={styles.leftNav} onClick={handlePreviousRing}/>
    <FontAwesomeIcon icon={faChevronRight} className={styles.rightNav} onClick={handleNextRing} />
              <div className='backgroundRing yellowGlow m c1'></div>
              <div className='backgroundRing blueGlow m c2'></div>
              <div className='backgroundRing redGlow l c3'></div>
              <div className='backgroundRing greenGlow m c4'></div>
              <div className='backgroundRing blueGlow m c5'></div>
    <div className={styles.ringGrid}>


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

            <div onClick={() => handleRingClick(ring.id, ring.link)} key={ring.link}
            className={`${styles.ring} ${styles[ring.color]} ${ringClass} ${zoomedRing === ring.id ? styles.ringZoom : ''}`}
            id={ring.id}>
              <div className={styles.ringContainer}>
              <h1 className={`${styles.ringHeader} ${textClass}`}>{ring.header}</h1>
              {ring.text.map((text, i) => {
                return (
                  <p className={`${styles.ringText} ${textClass}`} key={i}>{text}</p>
                )
              })}
              </div>
            </div>
          );
      })}
        </div>
      </div>
    </AnimatePresence>
    </main>
  )
}
