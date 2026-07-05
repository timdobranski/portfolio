'use client';

import styles from './About.module.css';
import me from '@/public/images/me2square.jpg';
import aria from '@/public/images/aria3.jpg';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {

  return (
    <div className='pageContentContainer'>

      <h1 className={styles.aboutHeader}>ABOUT ME</h1>

          <div className={styles.meImageContainer}>
            <div className={styles.aboutAvatarFrame}>
              <Image className={styles.aboutAvatar} src={me} alt='Tim Dobranski' fill sizes='(max-width: 768px) 180px, 220px'/>
            </div>
          </div>
          <div className={styles.bioContainer}>
<p>{`I'm a native of La Mesa, California, just outside of San Diego. After high school, I attended San Diego State University, and over time my path has moved through a mix of creative work, teaching, and software development. I’ve always been drawn to building things, whether that means writing music, designing tools, creating learning systems, or turning an idea into something people can actually use.`}</p>

<h2 className={styles.bioSubtitle}>{`Music`}</h2>

<p>{`I've been playing guitar and writing/recording music for most of my life. I grew up on rock, and as I've progressed I've ventured into blues and jazz. I'm drawn to music that feels unfamiliar, unexpected, or slightly impossible at first. Lately, I've been especially impressed by the creativity and innovation in bands like Bear Ghost, Closure In Moscow, and The Dear Hunter. I also love to shred along to Intervals when I've got the time.`}</p>

<p>{`In high school, I started a rock band, Forgotten Alibi, and we were fortunate enough to sign a record contract just as I started college. We wrote and recorded our first EP, then broke up shortly after due to creative differences.`}</p>

<p>{`In 2009, I opened La Mesa String School, my music studio, and I've taught guitar there ever since. Teaching has always pushed me to look for better ways to explain, organize, and build systems around learning, and it eventually became one of the bridges between my music background and my work in software.`}</p>

<h2 className={styles.bioSubtitle}>{`Web Development`}</h2>

<p>
{`From October 2022 through July 2023, I attended Hack Reactor, where I trained in full stack web development with a focus on React. After finishing the program, I was excited by the ability to build real software and started looking for opportunities to create useful tools wherever I could. Some of the first projects I built were for my music school, including several apps featured on the `}
<Link className={styles.bioLink} href='/apps'>{`Apps page`}</Link>
{`.`}
</p>

<p>
{`Although my training started in web development, I quickly became interested in building beyond the browser. That led me into mobile and desktop app development for projects like String School, my guitar lesson platform, which you can also find on the `}
<Link className={styles.bioLink} href='/apps'>{`Apps page`}</Link>
{`. In November 2024, I joined Rooster Grin Media as a web developer, and I've been very happy there ever since.`}
</p>

<p>{`In my free time, I can usually be found playing and recording music, reading or binge watching the latest show, building something new, or exploring San Diego with my dog, Aria.`}</p>


      </div>
          <div className={styles.meImageContainer}>
            <Image className={styles.ariaImage} src={aria} alt='Tim Dobranski'/>
          </div>

    </div>
  )
}