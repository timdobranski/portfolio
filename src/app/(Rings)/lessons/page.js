'use client';

import Image from 'next/image';
import Link from 'next/link';
import PhotoSlider from '../../../components/PhotoSlider/PhotoSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css'

export default function Lessons() {
  const sliderImages = [
    '/images/lessons/1.webp',
    '/images/lessons/5.webp',
    '/images/lessons/8.webp',
    '/images/lessons/14.webp',
    '/images/lessons/concert1.webp',
    '/images/lessons/lobby.webp',
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <div className={styles.titleWrapper}>
          <div className={styles.codeIconWrapper}>
          <FontAwesomeIcon icon={faMusic} className={styles.codeIcon} />
          </div>
          <h1 className={styles.pageHeader}>TEACHING</h1>
        </div>

        <div className={styles.hero}>
          <Link
            href='https://www.lamesastringschool.com'
            target='_blank'
            rel='noreferrer'
            className={styles.logoLink}
            aria-label='Open La Mesa String School website'
          >
            <Image
              src='/images/projects/string-school/title-logo.png'
              alt='String School'
              width={520}
              height={160}
              priority
              className={styles.logo}
            />
          </Link>

          <p className={styles.whiteText}>
            {`My guitar lessons are modern, fun, and built around the music you actually want to play. We’ll focus on real-world skills—rhythm, technique, tone, songwriting, and music theory—without the boring, one-size-fits-all approach.`}
          </p>
          <p className={styles.whiteText}>
            {`Every 6 months, students get the chance to perform in an awesome real-life concert—so you’re not just learning in a vacuum, you’re building confidence and musicianship with a real goal.`}
          </p>

          <Link href='https://www.lamesastringschool.com' target='_blank' rel='noreferrer' className={styles.cta}>
            Visit LaMesaStringSchool.com
          </Link>
        </div>

        <div className={styles.sliderSection}>
          <h2 className={styles.sectionTitle}>Lesson Photos</h2>
          <p className={styles.whiteText}>
            {`Check out the studio, lobby, and the student concerts`}
          </p>
          <PhotoSlider images={sliderImages} aspectRatio='3 / 2' altBase='Lesson photo' />
        </div>
      </div>
    </div>
  )
}

