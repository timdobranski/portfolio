import styles from './Resume.module.css'

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h1>Resume</h1>
      <p>Click below to download my resume</p>
      <a href='https://docs.google.com/document/d/1W2uhSpW7nABS7ghYJyMSFq4B4OewsUBZX-lPDuYDrVk/edit?usp=sharing' target='_blank' rel='noreferrer'>
        <div className={styles.resumeLink}>Download Resume</div>
      </a>
    </div>
  )
}