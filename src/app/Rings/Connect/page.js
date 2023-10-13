'use client';

import styles from './Connect.module.css'

export default function Connect() {
  return (
    <div>
      <div className={styles.connectContainer}>
      <h1>CONNECT</h1>
      <p>{`I'm always happy to make a new connection.`}</p>
      <p>{`Feel free to reach out in the following ways:`}</p>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactHeaders}>
          <p id={styles.emailLabel}>Email</p>
          <p id={styles.phoneLabel}>Phone</p>
          <p id={styles.linkedLabel}>LinkedIn</p>
          <p id={styles.githubLabel}>Github</p>
        </div>
        <div className={styles.contactInfo}>
          <p id={styles.email}>timdobranski@gmail.com</p>
          <p id={styles.phone}>{'(619) 820-6213'}</p>
          <a href='http://www.linkedin.com/in/timdobranski' target='_blank' rel='noreferrer'>
            <p id={styles.linkedIn}>linkedin.com/in/timdobranski</p>
          </a>
          <a href='http://www.github.com/timdobranski' target='_blank' rel='noreferrer'>
            <p id={styles.github}>github.com/timdobranski</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

