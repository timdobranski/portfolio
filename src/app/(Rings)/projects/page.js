'use client';

import styles from './Projects.module.css'
import Image from 'next/image';
import Link from 'next/link';
import projectData from 'public/projectData';

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
      <h1 className={styles.projectsHeader}>WEBSITES & APPS</h1>
      <p className={styles.projectsSubheader}>Click on a project below to learn more about it</p>
      {/* <h3 className={styles.subtitle}>IN PRODUCTION</h3> */}
      <div className={styles.projectsGrid}>

        {projectData.map((project, index) => {
          return (
            <div className={styles.projectsGridItem} key={index}>
              <div className={`${styles.thumbnailWrapper} ${styles.hoverMessage}`} key={index}>

                <Link href={`projects/${project.page}`}>
                  {project.images.length &&
                  <>
                  <Image className={styles.projectThumb} src={project.images[0]} fill='true' priority='true'  alt={'project homepage thumbnail'}/>
                  <p className={`
                ${styles.projectStatus}
                ${project.status === 'In Production' && styles.inProduction}
                ${project.status === 'In Development' && styles.inDevelopment}
                ${(project.status === 'Demo Project' || project.status === 'School Project') && styles.demoProject}

                `}>{project.status}</p>
                  </>
                  }
                  <p className={styles.hoverText}>{project.summary}</p>
                </Link>
              </div>
              <h3 className={styles.projectTitle}>{project.name}</h3>
              {/* <p className={`
                ${styles.projectStatus}
                ${project.status === 'In Production' && styles.inProduction}
                ${project.status === 'In Development' && styles.inDevelopment}
                ${project.status === 'Demo Project' || project.status === 'School Project' && styles.demoProject}

                `}>{project.status}</p> */}
            </div>
          )
        })}


      </div>
    </div>
  )
}
