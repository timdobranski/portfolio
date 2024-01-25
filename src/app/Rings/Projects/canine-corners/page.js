// import photos
import Project from '../../../../components/Project/Project';
// import image1 from 'public/images/projects/canine-corners/1.webp';
import image1 from 'public/images/projects/canine-corners/1.webp';
import image2 from 'public/images/projects/canine-corners/2.webp';
import image3 from 'public/images/projects/canine-corners/3.webp';
import image4 from 'public/images/projects/canine-corners/4.webp';
import image5 from 'public/images/projects/canine-corners/5.webp';
import image6 from 'public/images/projects/canine-corners/6.webp';
export default function Fitpass() {

  const projectData = {
    name: 'CANINE CORNERS',
    date: 'Fall 2023',
    description: [`This was a small project I built to continue work on my CSS and design skills. It's a faux social media app for my local dog park.
    Features include posts, friends lists, messages, park scheduling, and user profiles.`, `With this app I had a very specific goal in mind:
    to practice mobile responsive styling and positioning of menus and navbars. I spent the majority of the time on this project ensuring that the
    mobile design was responsive and clean.`, `I considered building it into a full stack app with a database
    to enable features like posting and auth,
    but decided against it because I wanted to focus on the front end.`, `This was built just using Next.js/React.`],
    tech: ['Next.js'],
    images: [image1, image2, image3, image4, image5, image6],
    deployLink: {url:'https://canine-corners.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/canine-corners', text: 'View Repo On Github'}
  }

  return (
      <Project data={projectData} />
  )
}