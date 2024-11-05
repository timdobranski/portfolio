const projectData = [
  {
    name: 'Parkway Periodical',
    date: 'Summer 2024',
    page: 'parkway-periodical',
    summary: 'School blog w/intro animation and custom post editor for school administrators.',
    description: [
    `This was an incredibly fun and inspiring app to build. It's a replacement for the Parkway Academy school blog. The basic idea was to design a blog from scratch, with a complete custom post editor. The end result has all of that, plus an autosave/draft feature, search and filter features for content discovery, an archive feature to archive content when they school year is over,  and a feature to help users maintain their uploaded content by setting expiration dates that automatically remind administrators to either update or delete expired content. This is usually most relevant at the end of a trimester or the end of the school year as new changes are made to electives, clubs, parent resource links, etc.`,

    `I started with the back end, planning the types of content that would be stored and how it would be stored. I then worked more specifically on building the post editor. This was the biggest part of the project, and I found it was absolutely essential to stay organized in my thinking and avoid improvised changes when I encountered an obstacle.`,

    `Once the administrator side was complete, I began working more on the public-facing user side, growing my CSS skills by adding filters, hover effects, transitions, and an animated version of the school logo. A polished and impressive design aesthetic was important here, and I'm quite happy with how the design turned out.
    `],
    tech: ['Next.js', 'Postgres', 'Node.js'],
    video: 'https://www.youtube.com/embed/xre8OCEW4XM?si=2YbNFInwtEY9vsAd',
    images: [
      `/images/projects/parkway-periodical/1.jpg`,
      `/images/projects/parkway-periodical/2.webp`,
      `/images/projects/parkway-periodical/3.webp`,
      `/images/projects/parkway-periodical/4.webp`,
      `/images/projects/parkway-periodical/5.webp`,
    ],
    deployLink: {url:'https://parkway-periodical.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway-periodical.git', text: 'View Repo On Github'},
    status: 'In Production'
  },
  {
    name: 'Lock Learner',
    date: 'Fall 2023',
    page: 'lock-learner',
    summary: 'Web game to teach PE students how to open their combination locks',
    description: [`Lock Learner is a javascript web game made to teach PE students how to open their combination locks. It can be played
    with a mouse, but the best experience with this app is with touch-enabled devices. This project
    represents my ongoing software engineering work for the La Mesa-Spring Valley School District. It was a lot of
    fun to build!`, `The main challenges of this project were creating the manipulatable lock images and implementing an algorithm to
    register circular swipe patterns to manupulate the lock face.`, `The game guides the user from setting a combination to turning the
    correct direction for all three numbers. Once the third number is reached, the lock opens and the user is congratulated.`],
    tech: ['Next.js'],
    images: [
      `/images/projects/lock-learner/lockLearner1.webp`,
      `/images/projects/lock-learner/lockLearner2.webp`,
      `/images/projects/lock-learner/lockLearner3.webp`,
    ],
    deployLink: {url:'https://lock-game.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/lock-game.git', text: 'View Repo On Github'},
    status: 'In Production'
  },
  {
    name: 'Parkway Schedule',
    date: 'Summer 2024',
    page: 'parkway-schedule',
    summary: 'Interactive schedule for students and staff with todos functionality',
    description: [`The Parkway Schedule app was build when the 2024-25 school year started and it became apparent
      that navigating the school's new schedule had become a concern.`, `The new schedule includes branching paths for
      staff and students with different lunch periods, prep periods, etc.`, `The app allows you to input your schedule parameters
      and generate your personalized schedule for each day of the week. From there you can add todos to your schedule, which are stored in local storage`],
    tech: ['Next.js'],
    images: [
      `/images/projects/parkway-schedule/3.webp`,
      `/images/projects/parkway-schedule/1.png`,
      `/images/projects/parkway-schedule/2.png`,

    ],
    deployLink: {url:'https://parkwayschedule.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/lock-game.git', text: 'View Repo On Github'},
    status: 'In Production'
  },
  {
    name: 'String School',
    date: 'Late 2024/Eary 2025',
    page: 'string-school',
    summary: 'Web & mobile app for music students with scheduling, progress-tracking and more',
    description: [`This is both a web app and a mobile app for iOS and Android for guitar students. Features include Google sign-in, scheduling/rescheduling, payment tracking,
     progress tracking, access to sheet music and other online resources, practice-logging, and instructor sign-in to manage student accounts. `, `It's grown into a gigantic app
     with twenty Postgres tables of extensive data and even has an entire companion app for Windows just to track and sync sheet music files with Supabase storage.`, `Although
     it's not yet in production for my students, you can see the existing String School webpage, which I also designed, at the link above.`, `The challenges of
     this project have been accounting for many different account edge cases, including students who share an email address with a parent, students
     who have multiple parent contacts, parents who have multiple students, and adult students who have no parent contact.`],
    tech: ['Next.js', 'React Native', 'Node.js', 'Spotify API', 'Google OAuth', 'PostgreSQL', 'cron', 'Twilio', 'AWS'],
    video: 'https://www.youtube.com/embed/LTPBrOg7JbY',
    images: [
      `/images/projects/string-school/lmss-banner.jpg`,
      `/images/projects/string-school/lmss1.webp`,
      `/images/projects/string-school/lmss2.webp`,
      `/images/projects/string-school/lmss3.webp`,
      `/images/projects/string-school/lmss4.webp`,
      `/images/projects/string-school/lmss5.webp`,
      `/images/projects/string-school/lmss6.webp`,
      `/images/projects/string-school/lmss7.webp`,
      `/images/projects/string-school/lmss8.webp`,
    ],
    deployLink: { url: 'http://www.lamesastringschool.com', 'text': 'LaMesaStringSchool.com'},
    repoLink: { url: 'https://github.com/timdobranski/string-school-web', text: 'View On Github' },
    status: 'In Development'
  },
  {
    name: 'Stringsmith',
    date: 'Late 2024/Early 2025',
    page: 'stringsmith',
    summary: 'A unique tool to teach guitar & music theory through games & songwriting. Not complete yet!',
    description: [`Stringsmith is a learning platform for music students. It teaches fundamental concepts from beginner to advanced levels through
      interactive lessons, games, and progress-tracking tools. It is a standalone app, but it also integrates with my String School app to
      keep students up to date on their progress. Standout features include AI-powered pitch detection and an interactive guitar fretboard that can be
      upgraded and customized with nearly unlimited animations and designs in-game through achievements and microtransactions.`],
    tech: ['Next.js', 'Vercel', 'Supabase', 'Tauri', 'React Native'],
    images: [
      '/images/projects/songsmith/logo.webp',
      '/images/projects/songsmith/defaultTheme.webp',
      '/images/projects/songsmith/metalheadTheme.webp',
      '/images/projects/songsmith/glitterbombTheme.webp',
    ],
    deployLink: { url: 'https://stringsmith.vercel.app/fretboard', text: 'See It In Action'},
    repoLink: { url: '', text: 'Repo Is Private' },
    status: 'In Development'
  },
  {
    name: 'Canine Corners',
    date: 'Fall 2023',
    page: 'canine-corners',
    summary: 'A fictional social media app for my local dog park',
    description: [`This was a small project I built to continue work on my CSS and design skills. It's a faux social media app for my local dog park.
    Features include posts, friends lists, messages, park scheduling, and user profiles.`, `With this app I had a very specific goal in mind:
    to practice mobile responsive styling and positioning of menus and navbars. I spent the majority of the time on this project ensuring that the
    mobile design was responsive and clean.`, `I considered building it into a full stack app with a database
    to enable features like posting and auth,
    but decided against it because I wanted to focus on the front end.`, `This was built just using Next.js/React.`],
    tech: ['Next.js'],
    images: [
      `/images/projects/canine-corners/1.webp`,
      `/images/projects/canine-corners/2.webp`,
      `/images/projects/canine-corners/3.webp`,
      `/images/projects/canine-corners/4.webp`,
      `/images/projects/canine-corners/5.webp`,
      `/images/projects/canine-corners/6.webp`,
    ],
    deployLink: {url:'https://canine-corners.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/canine-corners', text: 'View Repo On Github'},
    status: 'Demo Project'
  },
  {
    name: 'Atelier Vacations',
    date: 'Fall 2023',
    page: 'atelier-vacations',
    summary: 'A small mobile-responsive landing page with a focus on design & styling',
    description: [`This small project represents my continued efforts to improve my CSS skills and design creativity. It's a mobile-responsive
    front-end without a use yet.`, `Thus far styling and design has been the primary focus, but features will be added as needed
    in the future.`, `A major styling challenge for this project was learning how to display portions of the
    same image in multiple places on the page. There are libraries that can accomplish this, but I wanted to learn how to do
    so while familiarizing myself with advanced CSS.`],
    tech: ['Next.js', 'AWS'],
    images: [
      `/images/projects/atelier-vacations/atelier-vacations.jpg`,
    ],
    deployLink: {url:'https://parkway-three.vercel.app/', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/parkway.git', text: 'View Repo On Github'},
    status: 'Demo Project'
  },
  {
    name: 'Atelier Design',
    date: 'Fall 2023',
    page: 'atelier-design',
    summary: 'Promo site for a fictional web development firm',
    description: [`This is a promotional website for a fictional web development firm. Features include a full-screen fade-in effect,
    a responsive grid layout, and a signup form that sends a confirmation email to the user via a node express server and the Twilio sendgrid API.`,
    `Challenges of this project were learning how to create a mobile-responsive grid layout that rendered consistently across different browsers,
    aspect ratios and platforms.`],
    tech: ['React', 'Node.js', 'Express', 'AWS', 'Twilio Sendgrid API'],
    images: [
      `/images/projects/atelier-design/atelier-design.jpg`,
      `/images/projects/atelier-design/atelier-design-2.jpg`,
      `/images/projects/atelier-design/atelier-design-3.jpg`,
      `/images/projects/atelier-design/atelier-design-4.jpg`,
    ],
    deployLink: {url:'', text: 'See It In Action'},
    repoLink: {url:'https://github.com/timdobranski/atelier-design.git'},
    status: 'Demo Project'
  },
  {
    name: 'FitPass',
    date: 'Spring 2023',
    page: 'fitpass',
    summary: 'Mobile web app to connect users to local fitness studio classes',
    description: [`This is a mobile-first web app for users to connect with local fitness studio classes. Users or fitness studios can both sign
    up to either host or attend classes. Features include a search function, a map with geolocation, a calendar, and a booking system.`, `This project
    was developed in a team of seven, and each team member worked on crucial front-end and back-end features.`, `My responsibilities included the
    home page for fitness studio login as well as pages to view all studio locations and all studio classes currently stored in the database. As a
    stretch goal, I was able to also implement email confirmation on user class signup.`, `Challenges of this project included learning how to do
    familiar things in a new framework. The team used Next.js, Typescript, Supabase, and Tailwind, all four of which were new to me. The experience
    helped me develop a stronger level of comfort in working with new technologies.`],
    tech: ['Next.js', 'Typescript', 'Supabase', 'Tailwind', 'Sendgrid API'],
    images: [
      '/images/projects/fitpass/fitpass.png', //'/images/projects/fitpass/fitpass-1.png
      '/images/projects/fitpass/fitpass-1.png',
      '/images/projects/fitpass/fitpass-2.png',
      '/images/projects/fitpass/fitpass-3.png',
      '/images/projects/fitpass/fitpass-4.png',
      '/images/projects/fitpass/fitpass-5.png',
      '/images/projects/fitpass/fitpass-6.png',
      '/images/projects/fitpass/fitpass-7.png',
      '/images/projects/fitpass/fitpass-8.png',
    ],
    deployLink: {url:'', text: 'No deployment available'},
    repoLink: {url:'https://github.com/rpp2210-BOC-Aquaforce/FitnessPass', text: 'View Repo On Github'},
    status: 'School Project'
  },
  {
    name: 'Atelier Apparel',
    date: 'Spring 2023',
    page: 'atelier-apparel',
    summary: 'Ecommerce portal for a fictional apparel company',
    description: [`This project is a front-end e-commerce website for a fictional clothing retailer. It was build in a team of three,
    with each team member handling a different section of the site.`, `My responsibilities included the related products carousel and a
    'My Outfit' carousel for users to add and save their favorite items. As a stretch goal, I was also able to implement a dark mode
    toggle`, `Challenges for this project included learning to use local browser storage to cache results from the API and learning to
    toggle stylesheets based on state for the light/dark mode.`],
    tech: ['React', 'Node.js', 'Express', 'AWS'],
    images: [
      '/images/projects/atelier-apparel/atelier-logo.png',
      '/images/projects/atelier-apparel/light-mode.webp',
      '/images/projects/atelier-apparel/dark-mode.webp',
    ],
    deployLink: {url:'', text: 'See It Deployed Here'},
    repoLink: {url:'https://github.com/RPP2210-Wraith/Atelier'},
    status: 'School Project'
  },
  {
    name: 'Portfolio',
    date: 'Fall 2023',
    page: 'portfolio',
    summary: 'This page!',
    description: [`This project represents my first major attempt at improving my CSS skills. I wanted to create a portfolio that was attention-grabbing,
    radical in design, and with enough technical styling challenges to help me grow as a developer.`, `I wanted to use as few styling libraries as possible,
    to ensure that I was building a strong foundation in core CSS principles. The only library I need to rely on was Framer Motion for some of the
    transitions.`, `The main challenges of this project were developing a quick and efficient workflow for styling, and learning Next.js's new router behavior
    to conditionally render transitions.`],
    tech: ['Next.js', 'Framer Motion'],
    images: [
      '/images/projects/portfolio/portfolio-preview.webp',
    ],
    deployLink: {url:'/', text: 'TimDobranski.com'},
    repoLink: {url:'https://github.com/timdobranski/portfolio.git', text: ''},
    status: 'In Production'
  }
]

export default projectData;