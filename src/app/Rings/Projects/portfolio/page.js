import Project from '../../../../components/Project/Project';
import portfolioPreview from '../../../../../public/images/projects/portfolio/portfolio-preview-2.png';

export default function Portfolio() {

  const projectData = {
    name: 'PORTFOLIO',
    date: 'Fall 2023',
    description: [`This project represents my first major attempt at improving my CSS skills. I wanted to create a portfolio that was attention-grabbing,
    radical in design, and with enough technical styling challenges to help me grow as a developer.`, `I wanted to use as few styling libraries as possible,
    to ensure that I was building a strong foundation in core CSS principles. The only library I need to rely on was Framer Motion for some of the
    transitions.`, `The main challenges of this project were developing a quick and efficient workflow for styling, and learning Next.js's new router behavior
    to conditionally render transitions.`],
    tech: ['Next.js', 'Framer Motion'],
    images: [portfolioPreview],
    deployLink: {url:'timdobranski.com', text: 'TimDobranski.com'},
    repoLink: {url:'https://github.com/timdobranski/portfolio.git', text: ''}
  }

  return (
    <Project data={projectData} />
  )
}