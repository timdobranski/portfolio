import projectData from '../../../../../public/projectData';

export async function generateMetadata({ params }) {
  const project = projectData.find((item) => item.page === params.projectName);

  if (!project) {
    return {
      title: 'Project',
      description: 'Selected software project by Tim Dobranski.',
      openGraph: {
        title: 'Project',
        description: 'Selected software project by Tim Dobranski.',
        images: ['/opengraph-image.png'],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Project',
        description: 'Selected software project by Tim Dobranski.',
        images: ['/twitter-image.png'],
      },
    };
  }

  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      images: ['/opengraph-image.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description: project.summary,
      images: ['/twitter-image.png'],
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}