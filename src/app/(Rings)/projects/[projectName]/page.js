'use client'
import projectData from '/public/projectData';
import Project from '../../../../components/Project/Project';
import { useState, useEffect } from 'react';

export default function ProjectPage({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const project = projectData.find(project => project.page === params.projectName);
    setProject(project);
  }, [])


  if (!project) { return <h1>Loading...</h1> }

        return (
      <Project data={project} />
    )

}