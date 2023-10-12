import Project from '../../../../components/Project/Project';
import fitpass5 from '../../../../../public/images/projects/fitpass/fitpass-5.png';
import fitpass6 from '../../../../../public/images/projects/fitpass/fitpass-6.png';
import fitpass7 from '../../../../../public/images/projects/fitpass/fitpass-7.png';
import fitpass8 from '../../../../../public/images/projects/fitpass/fitpass-8.png';


export default function Fitpass() {

  const projectData = {
    name: 'FITPASS',
    date: 'SPRING 2023',
    description: [`This is a mobile-first web app for users to connect with local fitness studio classes. Users or fitness studios can both sign
    up to either host or attend classes. Features include a search function, a map with geolocation, a calendar, and a booking system.`, `This project
    was developed in a team of seven, and each team member worked on crucial front-end and back-end features.`, `My responsibilities included the
    home page for fitness studio login as well as pages to view all studio locations and all studio classes currently stored in the database. As a
    stretch goal, I was able to also implement email confirmation on user class signup.`, `Challenges of this project included learning how to do
    familiar things in a new framework. The team used Next.js, Typescript, Supabase, and Tailwind, all four of which were new to me. The experience
    helped me develop a stronger level of comfort in working with new technologies.`],
    tech: ['Next.js', 'Typescript', 'Supabase', 'Tailwind', 'Sendgrid API'],
    images: [fitpass5, fitpass6, fitpass7, fitpass8],
    deployLink: {url:'', text: 'No deployment available'},
    repoLink: {url:'https://github.com/rpp2210-BOC-Aquaforce/FitnessPass', text: 'View Repo On Github'}
  }

  return (
      <Project data={projectData} />
  )
}