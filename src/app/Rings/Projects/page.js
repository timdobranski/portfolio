'use client';

import styles from './Projects.module.css'
import Image from 'next/image';
import atelierApparel from '../../../../public/images/projects/atelier-apparel/atelier-logo.png';
import atelierDesign from '../../../../public/images/projects/atelier-design/atelier-design.png';
import songwriter from '../../../../public/images/projects/songwriter/songsmith.jpeg';
import stringSchool from '../../../../public/images/projects/string-school/lmss-banner.jpg';
import timioBros from '../../../../public/images/projects/super-timio-bros/super-timio-bros.jpeg';
import fitPass from '../../../../public/images/projects/fitpass/fitpass.png';
import Link from 'next/link';
// import { AnimatePresence } from 'framer-motion';
// import { motion } from 'framer-motion';

export default function Projects() {

  const pageVariants = {
    initial: {
      backgroundColor: 'black',
      scale: 0.1
    },
    in: {
      backgroundColor: 'transparent',
      scale: 1
    },
    out: {
      backgroundColor: 'black',
      scale: 1.1
    }
  };
  const overlayVariants = {
    initial: {
      opacity: 1,
      pointerEvents: 'all'
    },
    in: {
      opacity: 0,
      pointerEvents: 'none'
    },
    out: {
      opacity: 1,
      pointerEvents: 'all'
    }
  };

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsHeader}>PROJECTS</h1>
      <p>Click on a project below to learn more about it</p>
      <div className={styles.projectsGrid}>
            <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
          <Link href={`Projects/string-school`}>
              <Image className={styles.projectThumb} src={stringSchool} fill='true' alt='mobile app for music students'/>
            <div className={styles.hoverText}>Web & mobile app for music students with scheduling, progress-tracking and more</div>
          </Link>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} >
            <Image className={styles.projectThumb} src={songwriter} fill='true' alt='tool to aid songwriting'/>
            <div className={styles.hoverText}>This project is not yet complete. Check back soon!</div>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
            <Link href={`Projects/atelier-design`}>
            <Image className={[styles.projectThumb]} src={atelierDesign}  fill='true' alt='fictional web development firm'/>
              <div className={styles.hoverText}>Promo site for a fictional web development firm</div>
            </Link>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
            <h2 className={`${styles.projectHeader}`}>String School</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={` ${styles.projectHeader}`}>Songsmith</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Atelier Design</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
          <Link href={`Projects/fitpass`}>
            <Image className={[styles.projectThumb]} src={fitPass}  fill='true' alt='mobile web app to connect users to gym classes'/>
            <div className={styles.hoverText}>Mobile web app to connect users to local fitness studio classes</div>
          </Link>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
          <Link href={`Projects/atelier-apparel`}>
            <Image className={[styles.projectThumb]} src={atelierApparel} fill='true' alt='fictional apparel company'/>
            <div className={styles.hoverText}>Ecommerce portal for a fictional apparel company</div>
          </Link>
           </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
            <Image className={[styles.projectThumb]} src={timioBros} fill='true' alt='a side-scroller video game'/>
            <div className={styles.hoverText}>This project is not yet complete. Check back soon!</div>
          </div>
             <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>FitPass</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Atelier Apparel</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Super Tim-io Bros</h2>
          </div>
      </div>
    </div>
  )
}