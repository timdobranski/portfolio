'use client';

import styles from './Projects.module.css'
import Image from 'next/image';
import Link from 'next/link';
import projectData from 'public/projectData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {

  // const pageVariants = {
  //   initial: {
  //     backgroundColor: 'black',
  //     scale: 0.1
  //   },
  //   in: {
  //     backgroundColor: 'transparent',
  //     scale: 1
  //   },
  //   out: {
  //     backgroundColor: 'black',
  //     scale: 1.1
  //   }
  // };
  // const overlayVariants = {
  //   initial: {
  //     opacity: 1,
  //     pointerEvents: 'all'
  //   },
  //   in: {
  //     opacity: 0,
  //     pointerEvents: 'none'
  //   },
  //   out: {
  //     opacity: 1,
  //     pointerEvents: 'all'
  //   }
  // };

  if (!projectData) {
    return <div>Loading...</div>
  }

  return (
    <div className='pageContentContainer'>
      <div className={styles.titleWrapper}>
        <FontAwesomeIcon icon={faCode} className={styles.codeIcon} />
        <h1 className={styles.projectsHeader}>WEB & MOBILE APPS</h1>
        {/* <FontAwesomeIcon icon={faCode} className={styles.codeIcon} /> */}
      </div>
      <p className={styles.projectsSubheader}>
        Check out my personal software development projects below. While my schedule and current employment contract limit my availability for freelance work,
        exceptions can be made for the right opportunity.
      </p>
      <div className={styles.projectsGrid}>

        {projectData.map((project, index) => {
          return (
            <div className={styles.projectsGridItem} key={index}>


              <div className={styles.thumbnailWrapper}>
                <div className={`${styles.hoverMessage}`} key={index}>
                  {project.summary}
                </div>
                <Link href={`apps/${project.page}`} className={styles.projectLink}>

                  {project.images.length &&
                  <>
                    <img className={styles.projectThumb} src={project.images[0]} priority='true'  alt={'project homepage thumbnail'}/>
                    <p className={`
                      ${styles.projectStatus}
                      ${project.status === 'In Production' && styles.inProduction}
                      ${project.status === 'In Development' && styles.inDevelopment}
                      ${(project.status === 'Demo Project' || project.status === 'School Project') && styles.demoProject}
                      `}>{project.status}</p>
                  </>
                  }
                </Link>
            </div>
              <h3 className={styles.projectTitle}>{project.name}</h3>
        </div>
          )
        })}

      </div>
    </div>
  )
}
