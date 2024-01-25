import styles from './StringSchool.module.css';
import Project from '../../../../components/Project/Project';
import lmssBanner from '../../../../../public/images/projects/string-school/lmss-banner.jpg';
import lmss1 from '../../../../../public/images/projects/string-school/lmss1.png';
import lmss2 from '../../../../../public/images/projects/string-school/lmss2.png';
import lmss3 from '../../../../../public/images/projects/string-school/lmss3.png';
import lmss4 from '../../../../../public/images/projects/string-school/lmss4.png';
import lmss5 from '../../../../../public/images/projects/string-school/lmss5.png';
import lmss6 from '../../../../../public/images/projects/string-school/lmss6.png';
import lmss7 from '../../../../../public/images/projects/string-school/lmss7.png';
import lmss8 from '../../../../../public/images/projects/string-school/lmss8.png';


export default function StringSchool() {

  const projectData = {
    name: 'STRING SCHOOL',
    date: 'Fall 2023 - Spring 2024',
    description: [`This is both a web app and a mobile app for iOS and Android for guitar students. Features include Google sign-in, scheduling/rescheduling, payment tracking,
     progress tracking, access to sheet music and other online resources, practice-logging, and instructor sign-in to manage student accounts. `, `It's grown into a gigantic app
     with twenty Postgres tables of extensive data and even has an entire companion app for Windows just to track and sync sheet music files with Supabase storage.`, `Although
     it's not yet in production for my students, you can see the existing String School webpage, which I also designed, at the link above.`, `The challenges of
     this project have been accounting for many different account edge cases, including students who share an email address with a parent, students
     who have multiple parent contacts, parents who have multiple students, and adult students who have no parent contact.`],
    tech: ['Next.js', 'React Native', 'Node.js', 'Spotify API', 'Google OAuth', 'PostgreSQL', 'cron', 'Twilio', 'AWS'],
    video: 'https://www.youtube.com/embed/LTPBrOg7JbY',
    images: [lmssBanner, lmss1, lmss2, lmss3, lmss4, lmss5, lmss6, lmss7, lmss8],
    deployLink: { url: 'http://www.lamesastringschool.com', 'text': 'LaMesaStringSchool.com'},
    repoLink: { url: 'https://github.com/timdobranski/la-mesa-string-school', text: 'View Repo On Github' }
  }

  return (
    <Project data={projectData}/>
  )
}