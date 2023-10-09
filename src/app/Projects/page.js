import styles from './Projects.module.css'
import Image from 'next/image';
import atelierApparel from '../../../public/images/projects/atelier-apparel/light-mode.png';
import atelierDesign from '../../../public/images/projects/atelier-design/atelier-design.png';
import songwriter from '../../../public/images/projects/songwriter/songwriter.jpeg';
import stringSchool from '../../../public/images/projects/string-school/string-school.png';
import timioBros from '../../../public/images/projects/super-timio-bros/super-timio-bros.jpeg';
import fitPass from '../../../public/images/projects/fitpass/fitpass.png';

export default function Projects() {

  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <p>Click on a project below to learn more about it</p>
      <div className={styles.projectsGrid}>
          <div className={`${styles.projectsGridItem}`}>
            <Image className={[styles.projectThumb]} src={stringSchool} fill='true' alt='mobile app for music students'/>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.unfinished}`} >
            <Image className={styles.projectThumb} src={songwriter} fill='true' alt='tool to aid songwriting'/>
            <div className={styles.hoverText}>This project is not yet complete. Check back soon!</div>
          </div>
          <div className={[styles.projectsGridItem]}>
            <Image className={[styles.projectThumb]} src={atelierDesign}  fill='true' alt='fictional web development firm'/>
          </div>
          <div className={[styles.projectsGridItem, styles.projectDescription]}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>String School</h2>
          </div>
          <div className={[styles.projectsGridItem, styles.projectDescription]}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Songwriter</h2>
          </div>
          <div className={[styles.projectsGridItem, styles.projectDescription]}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Atelier Design</h2>
          </div>
          <div className={[styles.projectsGridItem]}>
            <Image className={[styles.projectThumb]} src={fitPass}  alt='mobile web app to connect users to gym classes'/>
          </div>
          <div className={[styles.projectsGridItem]}>
            <Image className={[styles.projectThumb]} src={atelierApparel} fill='true' alt='fictional apparel company'/>
          </div>
          <div className={`${styles.projectsGridItem} ${styles.unfinished}`}>
            <Image className={[styles.projectThumb]} src={timioBros} fill='true' alt='a side-scroller video game'/>
            <div className={styles.hoverText}>This project is not yet complete. Check back soon!</div>
          </div>
          <div className={[styles.projectsGridItem, styles.projectDescription]}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>FitPass</h2>
          </div>
          <div className={[styles.projectsGridItem, styles.projectDescription]}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Atelier Apparel</h2>
          </div>
          <div className={[styles.projectsGridItem, styles.projectDescription]}>
            <h2 className={[styles.projectsGridItem, styles.projectHeader]}>Super Timio Bros</h2>
          </div>
      </div>
    </div>
  )
}