'use client';

import Link from 'next/link';
import PhotoSlider from '../../../components/PhotoSlider/PhotoSlider';
import styles from './page.module.css'

export default function Music() {
  const sliderImages = [
    '/images/projects/forgottenalibi/fa-collage.jpg',
    // '/images/projects/forgottenalibi/home-page.jpg',
    // '/images/projects/forgottenalibi/about-page.jpg',
    // '/images/music/placeholder.svg',
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={`pageContentContainer ${styles.pageContentContainer}`}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.pageHeader}>MUSIC</h1>
        </div>

        <div className={styles.hero}>

          <p className={styles.whiteText}>
            {`Forgotten Alibi is one of the first bands I was involved with. We formed in high school in the 2000s during the height of the post-hardcore movement and released one EP on Pacific Ridge Records before breaking up. After that, we all stayed involved with music in different ways, including producing, learning and teaching, and working on other projects across different genres.

Now in 2025, our music has found new life on streaming platforms and some of us are back together making new music. As of early 2026, we’re looking for a new singer, and we are excited to lock in a new voice and release the next chapter of Forgotten Alibi.`}
          </p>

<div className={styles.spotifyEmbed}>
  <iframe
    src='https://open.spotify.com/embed/artist/1t4C8ykJoEcC8mHUHOKem0?utm_source=generator&theme=0'
    title='Forgotten Alibi on Spotify'
    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
    loading='lazy'
  />
</div>
          <Link href='https://www.forgottenalibi.com' target='_blank' rel='noreferrer' className={styles.cta}>
            Visit ForgottenAlibi.com
          </Link>
        </div>

        <div className={styles.sliderSection}>
          <h2 className={styles.sectionTitle}>Photos</h2>
          {/* <p className={styles.whiteText}>{`Swipe through some highlights.`}</p> */}
          <PhotoSlider images={sliderImages} aspectRatio='3 / 2' altBase='Forgotten Alibi photo' />
        </div>
      </div>
    </div>
  )
}
