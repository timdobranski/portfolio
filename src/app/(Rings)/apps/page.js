'use client';

import styles from './Projects.module.css'
import { useEffect, useMemo, useState } from 'react';
import projectData from 'public/projectData';
import Project from '../../../components/Project/Project';

export default function Projects() {
  const [selectedProjectPage, setSelectedProjectPage] = useState(null);

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

  const projectOrder = [
    'forgotten-alibi',
    'early-times-music',
    'string-school',
    'stringsmith',
    'parkway-periodical',
    'lock-learner',
    'parkway-schedule',
    'atelier-vacations',
    'atelier-design',
  ];

  const orderMap = new Map(projectOrder.map((page, i) => [page, i]));
  const sortedProjects = [...projectData].sort(
    (a, b) => (orderMap.get(a.page) ?? 999) - (orderMap.get(b.page) ?? 999)
  );
  const selectedProject = useMemo(
    () => projectData.find((project) => project.page === selectedProjectPage),
    [selectedProjectPage]
  );

  const syncProjectFromUrl = () => {
    const slug = window.location.pathname.match(/^\/apps\/([^/]+)$/)?.[1] ?? null;
    setSelectedProjectPage(slug);
  };

  useEffect(() => {
    syncProjectFromUrl();
    window.addEventListener('popstate', syncProjectFromUrl);

    return () => window.removeEventListener('popstate', syncProjectFromUrl);
  }, []);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }, [selectedProjectPage]);

  const openProject = (projectPage) => {
    setSelectedProjectPage(projectPage);
    window.history.pushState({ projectPage }, '', `/apps/${projectPage}`);
  };

  if (!projectData) {
    return <div>Loading...</div>
  }

  if (selectedProject) {
    return (
      <>
        <Project data={selectedProject} />
      </>
    );
  }

  return (
    <div className={`pageContentContainer ${styles.projectsContainer}`}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.projectsHeader}>WEB & MOBILE APPS</h1>
      </div>
      <p className={styles.projectsSubheader}>
        Check out my personal software development projects below. While my schedule and current employment contract limit my availability for freelance work,
        exceptions can be made for the right opportunity.
      </p>
      <div className={styles.projectsGrid}>

        {sortedProjects.map((project, index) => {
          return (
            <div className={styles.projectsGridItem} key={index}>


              <div className={styles.thumbnailWrapper}>
                <button
                  type="button"
                  className={styles.projectLink}
                  onClick={() => openProject(project.page)}
                  aria-label={`Open ${project.name}`}
                >

                  {project.images.length &&
                  <>
                    <img className={styles.projectThumb} src={project.images[0]} priority='true'  alt={'project homepage thumbnail'}/>
                    {/* <p className={`
                      ${styles.projectStatus}
                      ${project.status === 'In Production' && styles.inProduction}
                      ${project.status === 'In Development' && styles.inDevelopment}
                      ${(project.status === 'Demo Project' || project.status === 'School Project') && styles.demoProject}
                      `}>{project.status}</p> */}
                  </>
                  }
                </button>
                <div className={`${styles.hoverMessage}`} key={index}>
                  {project.summary}
                </div>
            </div>
              <h3 className={styles.projectTitle}>{project.name}</h3>
        </div>
          )
        })}

      </div>
    </div>
  )
}
