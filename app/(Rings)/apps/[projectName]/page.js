import projectData from '@/public/projectData';
import Project from '../../../../components/Project/Project';

export default async function ProjectPage({ params }) {
  const { projectName } = await params;
  const project = projectData.find(project => project.page === projectName);


  if (!project) { return <h1>Loading...</h1> }

  return <Project data={project} />

}