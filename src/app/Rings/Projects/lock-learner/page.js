import Project from '../../../../components/Project/Project';
import lockLearner from '../../../../../public/images/projects/lock-learner/lock-learner.webp';
import lockLearner2 from '../../../../../public/images/projects/lock-learner/lock-learner-2.webp';
import lockLearner3 from '../../../../../public/images/projects/lock-learner/lock-learner-3.webp';
import lockLearner4 from '../../../../../public/images/projects/lock-learner/lock-learner-4.webp'


export default function LockLearner() {

  const projectData = {
    name: 'LOCK LEARNER',
    date: 'Fall 2023',
    description: [`Lock Learner is a javascript web game made to teach PE students how to open their combination locks. It can be played
    with a mouse, but the best experience with this app is with touch-enabled devices. This project
    represents my ongoing software engineering work for the La Mesa-Spring Valley School District. It was a lot of
    fun to build!`, `The main challenges of this project were creating the manipulatable lock images and implementing an algorithm to
    register circular swipe patterns to manupulate the lock face.`, `The game guides the user from setting a combination to turning the
    correct direction for all three numbers. Once the third number is reached, the lock opens and the user is congratulated.`],
    tech: ['Next.js'],
    images: [lockLearner, lockLearner2, lockLearner3, lockLearner4],
    deployLink: {url:'https://lock-game.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/lock-game.git', text: 'View Repo On Github'}
  }

  return (
      <Project data={projectData} />
  )
}