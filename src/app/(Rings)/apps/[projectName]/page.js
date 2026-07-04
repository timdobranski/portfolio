'use client'
import projectData from '/public/projectData';
import Project from '../../../../components/Project/Project';
import styles from '../Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProjectPage({ params }) {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const project = projectData.find(project => project.page === params.projectName);
    setProject(project);
  }, [params.projectName])


  if (!project) { return <h1>Loading...</h1> }

        return (
      <>
        <button className={`ringPageSiblingBackButton ${styles.projectBackButton}`} type="button" onClick={() => router.back()}>
          <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
          Back
        </button>
        <Project data={project} />
      </>
    )

}