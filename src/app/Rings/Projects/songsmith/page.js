import Project from '../../../../components/Project/Project';
import songsmith from '../../../../../public/images/projects/songsmith/songsmith.jpeg';
import songsmith2 from '../../../../../public/images/projects/songsmith/songsmith-2.png';
import songsmith3 from '../../../../../public/images/projects/songsmith/songsmith-3.png';

export default function Songsmith() {

  const projectData = {
    name: 'SONGSMITH',
    date: 'Fall/Winter 2023',
    description: [`Songsmith is still in the early stages of development. It's a web application to aid musicians in songwriting.
    The app suggests scale and chord options for the user, given a key, or even just a root note. The app is built with an emphasis on understanding
    tonal choices, and each scale/chord progression suggested is accompanied by a description of its tonality for the user to consider.`, `More to
    come on this project soon!`],
    tech: ['Next.js', 'AWS'],
    images: [songsmith3, songsmith, songsmith2],
    deployLink: { url: 'http://13.58.198.187:3000/', text: 'See It Deployed Here'},
    repoLink: { url: 'https://github.com/timdobranski/songsmith.git', text: 'View Repo On Github' }
  }

  return (
    <Project data={projectData}/>
  )
}