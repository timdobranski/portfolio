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
          <p>Email</p>
          <p>Phone</p>
          <p>LinkedIn</p>
          <p>Github</p>
        </div>
        <div className={styles.contactInfo}>
          <p>timdobranski@gmail.com</p>
          <p>{'(619) 820-6213'}</p>
          <p>linkedin.com/in/timdobranski</p>
          <p>github.com/timdobranski</p>
        </div>
      </div>
    </div>
  </div>
  )
}

