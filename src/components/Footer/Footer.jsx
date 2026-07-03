import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCube, faEnvelope, faHome, faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css'; // Assuming you have a CSS file for styling

export default function Footer() {
  const links = [
    { href: '/', label: 'HOME', icon: faHome },
    { href: '/apps', label: 'CODE', icon: faCode },
    { href: '/music', label: 'MUSIC', icon: faMusic },
    { href: '/3d-design', label: '3D DESIGN', icon: faCube },
    { href: '/connect', label: 'CONNECT', icon: faEnvelope },
  ];

  return (
    <div className={styles.footerContainer}>
<div className={styles.footerGrid}>
  {links.map((link) => (
    <Link href={link.href} className={styles.footerLink} key={link.href}>
      <FontAwesomeIcon icon={link.icon} className={styles.footerIcon} aria-hidden="true" />
      <h2>{link.label}</h2>
    </Link>
  ))}
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