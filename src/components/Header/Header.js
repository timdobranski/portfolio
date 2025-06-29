import '../../app/globals.css';
import Link from 'next/link';
import styles from './Header.module.css';


export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={'/images/td-logo.png'} className={styles.headerLogo} alt='logo' />
      <Link href='/'>
        <h1 className={styles.title}>TIM DOBRANSKI</h1>
      </Link>
      <p className={styles.description}>BRINGING IDEAS TO LIFE THROUGH CODE, MUSIC, & PHYSICAL DESIGN</p>
    </div>
  )
}
