'use client';

import styles from './About.module.css';
import me from '../../../../public/images/Me-2.jpg';
import aria from '../../../../public/images/aria3.jpg';

import Image from 'next/image';

export default function About() {

  return (
    <div className={styles.aboutContainer}>

      <h1 className={styles.aboutHeader}>ABOUT ME</h1>

          <div className={styles.meImageContainer}>
            <Image className={styles.aboutImage} src={me} alt='Tim Dobranski'/>
          </div>
          <div className={styles.bioContainer}>
            <p>{`I'm a native of La Mesa, California, just outside of San Diego. I've been playing the guitar and writing/recording music
            for most of my life. I grew up on rock, and as I've progressed I've ventured into blues and more recently jazz.`}</p>
          <p>{`In high school, I started a rock band, and we were fortunate enough to sign a record contract just as I started college. We wrote and
          recorded the first album, then promptly broke up after that.`}</p>
          <p>{`In 2009 I opened the La Mesa String School, my music studio, and I've taught guitar there ever since. `}</p>
          <p>{`In my free time, I can be found playing music, reading or binge watching the latest show, and spending time exploring San Diego
          with my dog, Aria. I'm currently working my way through Isaac Asimov's considerable body of fiction, and playing Aria's favorite new game, called 'Chew on Tim's arm'.`}</p>
          </div>
          <div className={styles.meImageContainer}>
            <Image className={styles.ariaImage} src={aria} alt='Tim Dobranski'/>
          </div>

    </div>
  )
}