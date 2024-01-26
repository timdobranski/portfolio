'use client';

import styles from './Connect.module.css'

export default function Connect() {
  return (
    <div>
      <div className='pageContentContainer'>
      <h1>CONNECT</h1>
      <p>{`I'm always happy to make a new connection.`}</p>
      <p>{`Feel free to reach out in the following ways:`}</p>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactHeaders}>
          <p className={styles.emailLabel}>Email</p>
          <p className={styles.phoneLabel}>Phone</p>
          <p className={styles.linkedLabel}>LinkedIn</p>
          <p className={styles.githubLabel}>Github</p>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.email}>timdobranski@gmail.com</p>
          <p className={styles.phone}>{'(619) 820-6213'}</p>
          <a href='http://www.linkedin.com/in/timdobranski' target='_blank' rel='noreferrer'>
            <p className={styles.linkedIn}>linkedin.com/in/timdobranski</p>
          </a>
          <a href='http://www.github.com/timdobranski' target='_blank' rel='noreferrer'>
            <p className={styles.github}>github.com/timdobranski</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

