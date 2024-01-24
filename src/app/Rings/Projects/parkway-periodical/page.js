import Project from '../../../../components/Project/Project';
import parkwayPeriodical from '../../../../../public/images/projects/parkway-periodical/parkway-periodical.png';


export default function ParkwayPeriodical() {

  const projectData = {
    name: 'PARKWAY PERIODICAL',
    date: 'Fall 2023',
    description: [`This project has been a unique learning experience for me. It's a redesign of the Parkway Academy school blog,
    which was originall built with Google Sites. I created a Next.js app that features the original blog postings format, as well as
    more robust features like an archive page and an About page which introduces the school administrators. The majority of the work
    went into creating the post editor back end for the school administrators, which allows them to create, edit and delete posts.
    I knew there were easier ways to tie into APIs for this but I wanted to learn how to do it from scratch. As of Jan 2024, the
    project is nearly complete. School administrators are very happy with the early results and I'm looking forward to finishing it up.`],
    tech: ['Next.js', 'Postgres', 'Node.js'],
    images: [parkwayPeriodical],
    deployLink: {url:'https://parkway-academy-periodical.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway-periodical.git', text: 'View Repo On Github'}
  }

  return (
      <Project data={projectData} />
  )
}