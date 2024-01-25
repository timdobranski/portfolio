'use client';

import styles from './Projects.module.css'
import Image from 'next/image';
import atelierApparel from '../../../../public/images/projects/atelier-apparel/atelier-logo.png';
import atelierDesign from '../../../../public/images/projects/atelier-design/atelier-design.png';
import songsmith4 from '../../../../public/images/projects/songsmith/songsmith-4.png';
import stringSchool from '../../../../public/images/projects/string-school/lmss-banner.jpg';
import fitPass from '../../../../public/images/projects/fitpass/fitpass.png';
import portfolioPreview from '../../../../public/images/projects/portfolio/portfolio-preview-2.png';
import atelierVacations from '../../../../public/images/projects/atelier-vacations/atelier-vacations.jpg';
import lockLearner from '../../../../public/images/projects/lock-learner/lock-learner.png';
import parkwayPeriodical from '../../../../public/images/projects/parkway-periodical/parkway-periodical.webp'
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

        {/* ROW ONE */}
        <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.stringSchoolThumb}>
          <Link href={`Projects/string-school`}>
              <Image className={styles.projectThumb} src={stringSchool} fill='true' priority='true'  alt='animated guitar'/>
            <div className={styles.hoverText}>Web & mobile app for music students with scheduling, progress-tracking and more</div>
          </Link>
        </div>

        <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.periodicalThumb}>
          <Link href={`Projects/parkway-periodical`}>
            <Image className={[styles.projectThumb]} src={parkwayPeriodical}  fill='true' priority='true'  alt='mobile web app to connect users to gym classes'/>
            <div className={styles.hoverText}>{`Middle School blog w/intro animation and custom post editor for school administrators. Still in progress.`}</div>
          </Link>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.lockLearnerThumb}>
          <Link href={`Projects/lock-learner`}>
            <Image className={[styles.projectThumb]} src={lockLearner} fill='true' priority='true' alt='a preview image of this website'/>
            <div className={styles.hoverText}>A Javascript game to teach PE students to use a combination lock</div>
            </Link>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.stringSchoolLabel}>
            <h2 className={`${styles.projectHeader}`}>String School</h2>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`} id={styles.periodicalLabel}>
            <h2 className={` ${styles.projectHeader}`}>Parkway Periodical</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`} id={styles.lockLearnerLabel}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Parkway Lock Learner</h2>
          </div>

        {/* ROW TWO */}
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.songsmithThumb}>
          <Link href={`Projects/songsmith`}>
            <Image className={styles.projectThumb} src={songsmith4} fill='true' priority='true'  alt='tool to aid songwriting'/>
              <div className={styles.hoverText}>A unique tool to teach music theory through songwriting. Not complete yet!</div>
            </Link>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.atelierVacationsThumb}>
          <Link href={`Projects/atelier-vacations`}>
            <Image className={styles.projectThumb} src={atelierVacations} fill='true' priority='true'  alt='palm trees and a sunset'/>
              <div className={styles.hoverText}>A mobile-responsive landing page with a focus on design & styling</div>
            </Link>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.atelierDesignThumb}>
            <Link href={`Projects/atelier-design`}>
            <Image className={[styles.projectThumb]} src={atelierDesign}  priority='true' fill='true' alt='golden gate bridge at sunset'/>
              <div className={styles.hoverText}>Promo site for a fictional web development firm</div>
            </Link>
          </div>

           <div className={`${styles.projectsGridItem} ${styles.projectDescription}`} id={styles.songsmithLabel}>
            <h2 className={` ${styles.projectHeader}`}>Songsmith</h2>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.atelierVacationsLabel}>
            <h2 className={`${styles.projectHeader}`}>Atelier Vacations</h2>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`} id={styles.atelierDesignLabel}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Atelier Design</h2>
          </div>



        {/* ROW THREE */}

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

          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`} id={styles.portfolioThumb}>
          <Link href={`Projects/portfolio`}>
            <Image className={styles.projectThumb} src={portfolioPreview} fill='true' priority='true' alt='this page'/>
            <div className={styles.hoverText}>This page!</div>
            </Link>
          </div>



          <div className={`${styles.projectsGridItem} ${styles.hoverMessage}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>FitPass</h2>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Atelier Apparel</h2>
          </div>

          <div className={`${styles.projectsGridItem} ${styles.projectDescription}`}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Portfolio</h2>
          </div>
      </div>
    </div>
  )
}