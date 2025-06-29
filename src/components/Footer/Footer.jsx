import Link from 'next/link';
import styles from './Footer.module.css'; // Assuming you have a CSS file for styling

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
<div className={styles.footerGrid}>
  <Link href='/' className={styles.footerLink}>
    <h2>HOME</h2>
  </Link>
  <Link href='/projects' className={styles.footerLink}>
    <h2>APPS</h2>
  </Link>
    <Link href='/music' className={styles.footerLink}>
    <h2>MUSIC</h2>
  </Link>
    <Link href='/string-school' className={styles.footerLink}>
    <h2>TEACHING</h2>
  </Link>
    <Link href='/3d-design' className={styles.footerLink}>
    <h2>3D DESIGN</h2>
  </Link>
    <Link href='/connect' className={styles.footerLink}>
    <h2>CONNECT</h2>
  </Link>
  {/* <Link href='resume' className={styles.footerLink}>
    <h2>RESUME</h2>
  </Link>
  <Link href='/about' className={styles.footerLink}>
    <h2>ABOUT ME</h2>
  </Link>
  <Link href='/connect' className={styles.footerLink}>
    <h2>CONNECT</h2>
  </Link> */}
</div>
    </div>
  )
}