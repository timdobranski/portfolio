'use client';

import styles from './About.module.css';
import me from '../../../../public/images/Me-2.jpg';
import aria from '../../../../public/images/aria3.jpg';

import Image from 'next/image';

export default function About() {

  return (
    <div className='pageContentContainer'>

      <h1 className={styles.aboutHeader}>ABOUT ME</h1>

          <div className={styles.meImageContainer}>
            <Image className={styles.aboutImage} src={me} alt='Tim Dobranski'/>
          </div>
          <div className={styles.bioContainer}>
            <p>{`I'm a native of La Mesa, California, just outside of San Diego. I've been playing the guitar and writing/recording music
            for most of my life. I grew up on rock, and as I've progressed I've ventured into blues and jazz. I'm drawn to music that is unfamiliar,
            and surprising to me. Lately, I've been really impressed by the creativity and innovation in bands like Bear Ghost, Closure In Moscow,
            and The Dear Hunter. I love to shred along to the band Intervals when I've got the time.`}</p>
          <p>{`In high school, I started a rock band, Forgotten Alibi, and we were fortunate enough to sign a record contract just as I started college. We wrote and
          recorded the first EP, then broke up due to creative differences after that.`}</p>
          <p>{`In 2009 I opened the La Mesa String School, my music studio, and I've taught guitar there ever since. `}</p>
          <p>{`In my free time, I can be found playing and recording music, reading or binge watching the latest show, and spending time exploring San Diego
          with my dog, Aria.`}</p>
          </div>
          <div className={styles.meImageContainer}>
            <Image className={styles.ariaImage} src={aria} alt='Tim Dobranski'/>
          </div>

    </div>
  )
}