import styles from './Resume.module.css'

export default function Resume() {

  return (
    <div className={styles.resumeContainer}>
      <h1 >RESUME</h1>
      <p>Download my resume, or browse my skills, accomplishments, & work philosophy below</p>
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
          <h2>Testing/Deployment</h2>
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
        <h2 className={styles.skillsLabel}>Professional Accomplishments</h2>
        <div className={`${styles.accomplishmentsGridItem}`}>
          <ul>
            <li>* Founded and sustained a Yelp 5-star small business over 14+ years, the La Mesa String School
            </li>
            <li>* Designed & implemented lesson plans for students of various skills, ages, & musical preferences</li>
            <li>* Published 2 editions of original textbook, The String School Guitar Method</li>
            <li>* Organized & held biannual student concerts for families</li>
            <li>* Developed & fostered positive relationships & communication with 35-45 weekly students & families</li>
          </ul>
        </div>
      </div>

      <div className={styles.resumeGrid}>
        <h2 className={styles.skillsLabel}>Philosophy</h2>
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