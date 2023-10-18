import Project from '../../../../components/Project/Project';
import lockLearner from '../../../../../public/images/projects/lock-learner/lock-learner.jpg';


export default function LockLearner() {

  const projectData = {
    name: 'Lock Learner',
    date: 'Fall 2023',
    description: [`Lock Learner is a simple game made to teach PE students how to open their combination locks. It's a small app, but was a lot of
    fun to build.`, `The main challenges of this project were using GIMP to create the manipulatable lock images and implementing the logic to map the
    current rotation of the lock to a number 0-39. This was a lot less work in design, but a lot more work in logic and that was a fun change.`],
    tech: ['Next.js'],
    images: [lockLearner],
    deployLink: {url:'https://lock-game.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/lock-game.git', text: 'View Repo On Github'}
  }

  return (
      <Project data={projectData} />
  )
}