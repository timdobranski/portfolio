'use client';

import styles from './Home.module.css'
import Image from 'next/image'
import me from '../../public/images/Me-2.jpg'
import { useState } from 'react'


export default function Home() {
  const [ activeRing, setActiveRing ] = useState(1)

  const rings = [
    {
      header: '',
      text: 'To learn more about me and my background, click on the about me tab above',
      color: 'blueGlow'
    },
    {
      header: 'WELCOME!',
      text: 'My name is Tim, and I develop websites and apps',
      color: 'greenGlow'
    },
    {
      header: '',
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
    {rings.map((ring, i) => {
        let ringClass = '';

        if (i === activeRing) {
          ringClass = styles.activeRing;
      } else if (i === activeRing + 1) {
          ringClass = styles.inactiveRight;
      } else if (i === activeRing - 1) {
          ringClass = styles.inactiveLeft;
      }

        return (
            <div className={`${styles.ring} ${styles[ring.color]} ${ringClass}`} key={i}>
                {i === activeRing ?
                <>
                  <h1>{ring.header}</h1>
                  <p>{ring.text}</p>
                </>
                : ''
                }
            </div>
        )
    })}
    </main>
  )
}
