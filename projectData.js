export default projectData = [
  {
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
  },
  {
    name: 'PARKWAY PERIODICAL',
    date: 'Winter 2023',
    description: [`This project has been a unique learning experience for me. It's a redesign of the Parkway Academy school blog,
    which was originally built with Google Sites. I created a Next.js app that features the original blog postings format, as well as
    more robust features like an archive page and an About page which introduces the school administrators. The majority of the work
    went into creating the post editor back end for the school administrators, which allows them to create, edit and delete posts.
    I knew there were easier ways to tie into APIs for this but I wanted to learn how to do it from scratch. As of Jan 2024, the
    project is nearly complete. School administrators are very happy with the early results and I'm looking forward to finishing it up.`],
    tech: ['Next.js', 'Postgres', 'Node.js'],
    video: 'https://www.youtube.com/embed/-4ADdpUKpJo',
    images: [parkwayPeriodical, photo1, photo2, photo3],
    deployLink: {url:'https://parkway-academy-periodical.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway-periodical.git', text: 'View Repo On Github'}
  },
  {
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
  },
  {
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
  },
  {
    name: 'ATELIER VACATIONS',
    date: 'Fall 2023',
    description: [`This small project represents my continued efforts to improve my CSS skills and design creativity. It's a mobile-responsive
    front-end without a use yet.`, `Thus far styling and design has been the primary focus, but features will be added as needed
    in the future.`, `A major styling challenge for this project was learning how to display portions of the
    same image in multiple places on the page. There are libraries that can accomplish this, but I wanted to learn how to do
    so while familiarizing myself with advanced CSS.`],
    tech: ['Next.js', 'AWS'],
    images: [atelierVacations],
    deployLink: {url:'https://parkway-three.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway.git', text: 'View Repo On Github'}
  },
  {
    name: 'ATELIER DESIGN',
    date: 'Fall 2023',
    description: [`This is a promotional website for a fictional web development firm. Features include a full-screen fade-in effect,
    a responsive grid layout, and a signup form that sends a confirmation email to the user via a node express server and the Twilio sendgrid API.`,
    `Challenges of this project were learning how to create a mobile-responsive grid layout that rendered consistently across different browsers,
    aspect ratios and platforms.`],
    tech: ['React', 'Node.js', 'Express', 'AWS', 'Twilio Sendgrid API'],
    images: [atelierDesign, atelierDesign2, atelierDesign3, atelierDesign4, atelierDesign5, atelierDesign6],
    deployLink: {url:'http://3.23.230.122:3002/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/atelier-design.git'}
  },
  {
    name: 'FITPASS',
    date: 'Spring 2023',
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
  },
  {
    name: 'ATELIER APPAREL',
    date: 'Spring 2023',
    description: [`This project is a front-end e-commerce website for a fictional clothing retailer. It was build in a team of three,
    with each team member handling a different section of the site.`, `My responsibilities included the related products carousel and a
    'My Outfit' carousel for users to add and save their favorite items. As a stretch goal, I was also able to implement a dark mode
    toggle`, `Challenges for this project included learning to use local browser storage to cache results from the API and learning to
    toggle stylesheets based on state for the light/dark mode.`],
    tech: ['React', 'Node.js', 'Express', 'AWS'],
    images: [lightMode, darkMode, atelierLogo],
    deployLink: {url:'', text: 'See It Deployed Here'},
    repoLink: {url:'https://github.com/RPP2210-Wraith/Atelier'}
  },
  {
    name: 'SONGSMITH',
    date: 'Spring 2024',
    description: [`Songsmith is still in the early stages of development. It's a companion web/mobile application to aid musicians in songwriting.
    The app suggests scale and chord options for the user, given a key, or even just a root note. The app is built with an emphasis on understanding
    tonal choices, and each scale/chord progression suggested is accompanied by a description of its tonality for the user to consider.`, `More to
    come on this project soon!`],
    tech: ['Next.js', 'AWS'],
    images: [songsmith4],
    deployLink: { url: 'https://songsmith.vercel.app/', text: 'See It In Action'},
    repoLink: { url: 'https://github.com/timdobranski/songsmith.git', text: 'View Repo On Github' }
  },
  {
    name: 'PORTFOLIO',
    date: 'Fall 2023',
    description: [`This project represents my first major attempt at improving my CSS skills. I wanted to create a portfolio that was attention-grabbing,
    radical in design, and with enough technical styling challenges to help me grow as a developer.`, `I wanted to use as few styling libraries as possible,
    to ensure that I was building a strong foundation in core CSS principles. The only library I need to rely on was Framer Motion for some of the
    transitions.`, `The main challenges of this project were developing a quick and efficient workflow for styling, and learning Next.js's new router behavior
    to conditionally render transitions.`],
    tech: ['Next.js', 'Framer Motion'],
    images: [portfolioPreview],
    deployLink: {url:'/', text: 'TimDobranski.com'},
    repoLink: {url:'https://github.com/timdobranski/portfolio.git', text: ''}
  }
]