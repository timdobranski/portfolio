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
            <p>{`I'm a native of La Mesa, California, just outside of San Diego. In 2009 I opened the La Mesa String School, my
              music studio, and I've taught guitar there ever since. `}</p>
            <p>{`In 2020, I returned to school to consider a pivot to software development. After one introductory summer class, I was hooked.
            I then attended Hack Reactor's software engineering immersive, which I completed in July 2023.`}</p>
            <p>{`Currently I'm continuing to teach music and looking for a role as a software developer. I enjoy the creative outlet that front-end
            roles offer, but I'm open to any opportunity to learn and grow as a developer.`}</p>
            <p>{`I believe wholeheartedly in the honest exchange of hard work and great results in exchange for good compensation and a positive work environment,
            and I hope to find a position in an environment that matches those values.`}</p>
            <p>{`In my free time, I can be found playing, writing, & recording music, reading or binge watching the latest show, and spending time exploring San Diego
          with my dog, Aria. I'm currently working my way through Isaac Asimov's considerable body of fiction, and playing Aria's favorite new game, called 'Chew on Tim's arm'.`}</p>
          </div>
          <div className={styles.meImageContainer}>
            <Image className={styles.ariaImage} src={aria} alt='Tim Dobranski'/>
          </div>

    </div>
  )
}