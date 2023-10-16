import Project from '../../../../components/Project/Project';
import atelierDesign from '../../../../../public/images/projects/atelier-design/atelier-design.jpg';
import atelierDesign2 from '../../../../../public/images/projects/atelier-design/atelier-design-2.jpg';
import atelierDesign3 from '../../../../../public/images/projects/atelier-design/atelier-design-3.jpg';
import atelierDesign4 from '../../../../../public/images/projects/atelier-design/atelier-design-4.jpg';
import atelierDesign5 from '../../../../../public/images/projects/atelier-design/atelier-design-5.png';
import atelierDesign6 from '../../../../../public/images/projects/atelier-design/atelier-design-6.png';


export default function AtelierDesign() {
  const projectData = {
    name: 'ATELIER DESIGN',
    date: 'Fall 2023',
    description: [`This is a promotional website for a fictional web development firm. Features include a full-screen fade-in effect,
    a responsive grid layout, and a signup form that sends a confirmation email to the user via a node express server and the Twilio sendgrid API.`,
    `Challenges of this project were learning how to create a mobile-responsive grid layout that rendered consistently across different browsers,
    aspect ratios and platforms.`],
    tech: ['React', 'Node.js', 'Express', 'AWS', 'Twilio Sendgrid API'],
    images: [atelierDesign, atelierDesign2, atelierDesign3, atelierDesign4, atelierDesign5, atelierDesign6],
    deployLink: {url:'http://3.134.201.86/', text: 'See It Deployed Here'},
    repoLink: {url:'https://github.com/timdobranski/atelier-design.git'}
  }

  return (
    <Project data={projectData}/>
  )
}