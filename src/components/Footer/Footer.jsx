import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCube, faEnvelope, faHome, faMusic } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css'; // Assuming you have a CSS file for styling

export default function Footer() {
  // Icon colors match each page's header underline (text-decoration-color).
  const links = [
    { href: '/', label: 'HOME', icon: faHome, color: 'var(--text-primary)' },
    { href: '/apps', label: 'CODE', icon: faCode, color: 'rgb(116, 185, 116)' },
    { href: '/music', label: 'MUSIC', icon: faMusic, color: 'var(--red-start)' },
    { href: '/3d-design', label: '3D DESIGN', icon: faCube, color: 'rgb(187, 175, 86)' },
    { href: '/connect', label: 'CONNECT', icon: faEnvelope, color: 'rgb(0, 106, 145)' },
  ];

  return (
    <div className={styles.footerContainer}>
<div className={styles.footerGrid}>
  {links.map((link) => (
    <Link
      href={link.href}
      className={styles.footerLink}
      key={link.href}
      style={{ '--nav-color': link.color }}
    >
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