import styles from './StringSchool.module.css';
import Project from '../../../../components/Project/Project';
import stringSchool from '../../../../../public/images/projects/string-school/string-school.png';
import lmssBanner from '../../../../../public/images/projects/string-school/lmss-banner.jpg';
import lmssBanner2 from '../../../../../public/images/projects/string-school/lmss-banner.png';

export default function StringSchool() {

  const projectData = {
    name: 'STRING SCHOOL',
    date: 'Summer 2023',
    description: [`This is a mobile app for iOS and Android for guitar students. Features include Google sign-in, scheduling/rescheduling, payment tracking,
     progress tracking, access to sheet music and other online resources, practice-logging, and instructor sign-in to manage student accounts. `, `Challenges of
     this project were accounting for many different account edge cases, including students who share an email address with a parent, students who have multiple parent contacts,
     parents who have multiple students, and adult students who have no parent contact.`],
    tech: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
    images: [lmssBanner, stringSchool, lmssBanner2],
    deployLink: { url: 'http://www.lamesastringschool.com', 'text': 'LaMesaStringSchool.com'},
    repoLink: { url: 'https://github.com/timdobranski/la-mesa-string-school', text: 'View Repo On Github' }
  }

  return (
    <Project data={projectData}/>
  )
}