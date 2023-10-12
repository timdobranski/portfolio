import Project from '../../../../components/Project/Project';
import atelierLogo from '../../../../../public/images/projects/atelier-apparel/atelier-logo.png';
import lightMode from '../../../../../public/images/projects/atelier-apparel/light-mode.png';
import darkMode from '../../../../../public/images/projects/atelier-apparel/dark-mode.png';


export default function AtelierApparel() {
  const projectData = {
    name: 'ATELIER APPAREL',
    date: 'Spring 2023',
    description: [`This project is a front-end e-commerce website for a fictional clothing retailer. It was build in a team of three,
    with each team member handling a different section of the site.`, `My responsibilities included the related products carousel and a
    'My Outfit' carousel for users to add and save their favorite items. As a stretch goal, I was also able to implement a dark mode
    toggle`, `Challenges for this project included learning to use local browser storage to cache results from the API and learning to
    toggle stylesheets based on state for the light/dark mode.`],
    tech: ['React', 'Node.js', 'Express', 'AWS'],
    images: [lightMode, darkMode, atelierLogo],
    deployLink: {url:'', text: 'See It Deployed Here'},
    repoLink: {url:'https://github.com/RPP2210-Wraith/Atelier'}
  }

  return (
    <Project data={projectData}/>
  )
}