'use client';

import styles from './Projects.module.css'
import Image from 'next/image';
import atelierApparel from '../../../../public/images/projects/atelier-apparel/atelier-logo.png';
import atelierDesign from '../../../../public/images/projects/atelier-design/atelier-design.jpg';
import songsmith4 from '../../../../public/images/projects/songsmith/songsmith-4.jpg';
import stringSchool from '../../../../public/images/projects/string-school/lmss-banner.jpg';
import fitPass from '../../../../public/images/projects/fitpass/fitpass.png';
import portfolioPreview from '../../../../public/images/projects/portfolio/portfolio-preview-2.png';
import parkway from '../../../../public/images/projects/parkway/parkway.jpg';
import Link from 'next/link';


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
        <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.stringSchoolThumb}>
          <Link href={`Projects/string-school`}>
              <Image className={styles.projectThumb} src={stringSchool} fill='true' priority='true'  alt='animated guitar'/>
            <div className={styles.hoverText}>Web & mobile app for music students with scheduling, progress-tracking and more</div>
          </Link>
        </div>

        <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.parkwayThumb}>
          <Link href={`Projects/parkway`}>
            <Image className={styles.projectThumb} src={parkway} fill='true' priority='true'  alt='palm trees and a sunset'/>
              <div className={styles.hoverText}>A mobile-responsive web app for the school I work at</div>
            </Link>
          </div>



          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.atelierDesignThumb}>
            <Link href={`Projects/atelier-design`}>
            <Image className={[styles.projectThumb]} src={atelierDesign}  priority='true' fill='true' alt='golden gate bridge at sunset'/>
              <div className={styles.hoverText}>Promo site for a fictional web development firm</div>
            </Link>
          </div>

          <div className={` `} id={styles.stringSchoolLabel}>
            <h2 className={`${styles.projectHeader}`}>String School</h2>
          </div>
          <div className={` `} id={styles.parkwayLabel}>
            <h2 className={`${styles.projectHeader}`}>Parkway Academy</h2>
          </div>

          <div className={` ${styles.projectDescription}`} id={styles.atelierDesignLabel}>
            <h2 className={styles.projectHeader}>Atelier Design</h2>
          </div>


          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.songsmithThumb}>
          <Link href={`Projects/songsmith`}>
            <Image className={styles.projectThumb} src={songsmith4} fill='true' priority='true'  alt='tool to aid songwriting'/>
              <div className={styles.hoverText}>Not complete yet, but on the way soon. Check it out!</div>
            </Link>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.fitpassThumb}>
          <Link href={`Projects/fitpass`}>
            <Image className={[styles.projectThumb]} src={fitPass}  fill='true' priority='true'  alt='mobile web app to connect users to gym classes'/>
            <div className={styles.hoverText}>Mobile web app to connect users to local fitness studio classes</div>
          </Link>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.atelierApparelThumb}>
          <Link href={`Projects/atelier-apparel`}>
            <Image className={[styles.projectThumb]} src={atelierApparel} fill='true' priority='true'  alt='fictional apparel company'/>
            <div className={styles.hoverText}>Ecommerce portal for a fictional apparel company</div>
          </Link>
           </div>

           <div className={`${styles.projectsGridItem} ${styles.projectDescription}`} id={styles.songsmithLabel}>
            <h2 className={` ${styles.projectHeader}`}>Songsmith</h2>
          </div>
          <div className={`${styles.projectsGridItem} `}>
            <h2 className={styles.projectHeader}>FitPass</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={styles.projectHeader}>Atelier Apparel</h2>
          </div>


          <div className={`${styles.projectsGridItem}`} id={styles.portfolioThumb}>
          <Link href={`Projects/portfolio`}>
            <Image className={[styles.projectThumb]} src={portfolioPreview} fill='true' priority='true' alt='a preview image of this website'/>
            <div className={styles.hoverText}>This page!</div>
            </Link>
          </div>
          <div></div>
          <div></div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={styles.projectHeader}>Portfolio</h2>
          </div>
      </div>
    </div>
  )
}