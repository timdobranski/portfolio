import styles from './StringSchool.module.css';
// import lmssVideo from '../../../../public/LMSS.mov';

export default function StringSchool() {
  return (
    <div className={styles.stringSchoolContainer}>
      <h1>String School</h1>
      <p>{`String School is a web application designed to help string students and teachers manage their
        practice time. It allows students to create a practice schedule, log their practice time, and
        view their progress over time. It allows teachers to create assignments for their students, track their students' progress, and communicate with their students`}.</p>
      <p>String School was built using React, Redux, and Firebase. It is currently in development.</p>

    </div>
  )
}