'use client'

import styles from './Resume.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {


  return (
    <div className={styles.resumeContainer}>
      <h1 >RESUME</h1>
      <p>Download my resume, or browse my skills, history, accomplishments, & work values below</p>
      <a className={styles.resumeLink}href='https://docs.google.com/document/d/1W2uhSpW7nABS7ghYJyMSFq4B4OewsUBZX-lPDuYDrVk/edit?usp=sharing' target='_blank' rel='noreferrer'>
        <div >Download Resume</div>
      </a>
      <div className={styles.resumeGrid}>
      <h2 className={styles.skillsLabel}>Technical Skills</h2>
        <div className={`${styles.frontEnd} ${styles.resumeGridItem}`}>
          <h2>Front End</h2>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div className={`${styles.backEnd} ${styles.resumeGridItem}`}>
          <h2>Back End</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className={`${styles.testingDeployment} ${styles.resumeGridItem}`}>
          <h2>Test/Deploy</h2>
          <ul>
            <li>Jest</li>
            <li>Mocha/Chai</li>
            <li>AWS</li>
            <li>Vercel</li>
            <li>Test-Driven Development</li>
            </ul>
        </div>
        <div className={`${styles.tools} ${styles.resumeGridItem}`}>
          <h2>Tools</h2>
          <ul>
            <li>Bash</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>npm</li>
            <li>GIMP</li>
          </ul>
        </div>
      </div>

      <div className={styles.resumeGrid}>
        <h2 className={styles.skillsLabel}>History</h2>
        <p className={styles.philosophy}>{`I've spent most of my professional life as a music teacher. I founded the La Mesa String School
        in 2009, and since then I've been building on its successes with innovative new ideas to teach and explore music. My experiences
        with the String School have also taught me about the importance of organization, planning, and communication in my workflow. At its
        peak, I was teaching 35-45 students per week, and I had to be able to keep track of each student's progress, goals, and challenges.`}</p>
         <p className={styles.philosophy}>{`One of my proudest accomplishments was publishing my own textbook, The String School Guitar Method, which I have used to teach my students
        for several years. My approach to teaching blends foundational methods of modern music pedagogy with innovative and effective tools
        and technology to make learning to play music more accessable and more rewarding than ever before. Other noteworthy accomplishments
        include organizing biannual student concerts, and developing a curriculum flexible enough to accommodate students of all ages, skill levels, and musical preferences.`}</p>
        <p className={styles.philosophy}>{`
        In the summer of 2020, I began to consider a career change and took my first programming class at the local community college.
        I knew I loved it, and continued to self study in my spare time. Eventually, I enrolled and completed the Hack Reactor software
        engineering immersive, which consisted of over 1,000 hours of software engineering projects and challenges with an emphasis on
        autonomous problem-solving. Now I'm searching for a new role as a software engineer, while using and growing my skills wherever
        I can by building projects for myself and as freelance work.`}</p>
      </div>

      <div className={styles.resumeGrid}>
        <h2 className={styles.skillsLabel}>Professional Accomplishments</h2>
        <div className={`${styles.accomplishmentsGridItem}`}>
          <ul>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
              <li>Founded and sustained a Yelp 5-star small business over 14+ years, the La Mesa String School</li>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
            <li>Designed & implemented lesson plans for students of various skills, ages, & musical preferences</li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
            <li>Published 2 editions of original textbook, The String School Guitar Method</li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
            <li>Organized & held biannual student concerts for families</li>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
            <li>Developed & fostered positive relationships & communication with 35-45 weekly students & families</li>
          </ul>
        </div>
      </div>


      <div className={styles.resumeGrid}>
        <h2 className={styles.skillsLabel}>Values</h2>
        <p className={styles.philosophy}>{`I believe in personal growth both in and outside of the workplace. I strive to be a
        lifelong learner, and I genuinely enjoy the experience of accumulating new skills and experiences. I also value
        downtime, work-life balance and the opportunity to refresh and regroup at my peak ability. I work best in an environment
        where my contributions can be seen, and I take great personal pride in everything I work on.`} </p>
        <p className={styles.philosophy}>{`I believe in living life with integrity, and that if you're going to do something,
        you should do it well.`}</p>
      </div>
    </div>
  )
}