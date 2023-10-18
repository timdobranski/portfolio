import Project from '../../../../components/Project/Project';
import parkway from '../../../../../public/images/projects/parkway/atelier-vacations.jpg';

export default function Parkway() {
  const projectData = {
    name: 'ATELIER VACATIONS',
    date: 'Fall 2023',
    description: [`This projects represents my continued efforts to improve my CSS skills and design creativity. It's a mobile-responsive
    front-end without a use yet.`, `Thus far styling and design has been the primary focus, but features will be added as needed
    in the future.`, `A major styling challenge for this project was learning how to display portions of the
    same image in multiple places on the page. There are libraries that can accomplish this, but I wanted to learn how to do
    so while familiarizing myself with advanced CSS.`],
    tech: ['Next.js', 'AWS'],
    images: [parkway],
    deployLink: {url:'https://parkway-three.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway.git', text: 'View Repo On Github'}
  }

  return (
    <Project data={projectData}/>
  )
}