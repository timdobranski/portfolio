import Project from '../../../../components/Project/Project';
import parkwayPeriodical from '../../../../../public/images/projects/parkway-periodical/parkway-periodical.png';


export default function ParkwayPeriodical() {

  const projectData = {
    name: 'PARKWAY PERIODICAL',
    date: 'Fall 2023',
    description: [`This was a unique learning experience with new technical challenges that really helped me grow as a developer.`,
    `The school administration wanted an updated, more visually appealing blog. The existing blog was created using Google Sites.
    The ideal scenario for them was to continue using Google Sites to add new content. So I set to work designing a scraper and a
    caching tool to extract the content from the old blog and transform it into my new blog with a different visual container.
     This allowed school administrators to continue building the site in their preferred format, while enabling a visual overhaul
     and content reordered to multiple pages. The disadvantage of this approach was that if Google Sites should update their
     implementation there is the potential for the data fetcher to break. I handled this scenario by redirecting the user to the
     original blog if there should be an error in the data fetching process.`,
    `The main challenges for this project were to extract styling data, both the stylesheet and inline styling, and also to extract
     images in a way that they would persist despite no active session on Google Sites.`],
    tech: ['Next.js'],
    images: [parkwayPeriodical],
    deployLink: {url:'https://parkway-academy-periodical.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway-periodical.git', text: 'View Repo On Github'}
  }

  return (
      <Project data={projectData} />
  )
}