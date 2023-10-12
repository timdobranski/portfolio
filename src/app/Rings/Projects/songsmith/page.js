import Project from '../../../../components/Project/Project';
import songsmith from '../../../../../public/images/projects/songsmith/songsmith.jpeg';

export default function Songsmith() {

  const projectData = {
    name: 'SONGSMITH',
    date: 'Fall/Winter 2023',
    description: [`Songsmith is still in the early stages of development. It's a full-stack web application to aid musicians in songwriting.
    The app suggests scale and chord options for the user, given a key, or even just a root note. The app is built on an emphasis on understanding
    tonal choices, and each scale/chord progression suggested is accompanied by a description of its tonality for the user to consider.`, `More to
    come on this project soon!`],
    tech: ['Next.js', 'AWS'],
    images: [songsmith],
    deployLink: { url: 'http://www.lamesastringschool.com', 'text': 'LaMesaStringSchool.com'},
    repoLink: { url: 'https://github.com/timdobranski/la-mesa-string-school', text: 'View Repo On Github' }
  }

  return (
    <Project data={projectData}/>
  )
}