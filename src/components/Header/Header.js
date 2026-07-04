"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCube, faEnvelope, faMusic, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const links = [
  // { href: '/', label: 'HOME', icon: faHome, color: 'var(--text-primary)' },
  { href: '/apps', label: 'CODE', icon: faCode, color: 'rgb(116, 185, 116)' },
  { href: '/music', label: 'MUSIC', icon: faMusic, color: 'var(--red-start)' },
  { href: '/3d-design', label: '3D DESIGN', icon: faCube, color: 'rgb(187, 175, 86)' },
  { href: '/about', label: 'ABOUT', icon: faUser, color: 'rgb(0, 106, 145)' },
  { href: '/connect', label: 'CONNECT', icon: faEnvelope, color: 'rgb(139, 141, 255)' },
];

export default function Header() {
  const handleTitleClick = () => {
    window.dispatchEvent(new CustomEvent('ringPageBackToRings'));
  };

  return (
    <div className={styles.headerContainer}>
      {/* <img src={'/images/td-logo.png'} className={styles.headerLogo} alt='logo' /> */}
      <Link href='/' className={styles.titleLink} onClick={handleTitleClick}>
        <h1 className={styles.title}>TIM DOBRANSKI</h1>
      </Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">
        {links.map((link) => (
          <Link
            href={link.href}
            className={styles.navLink}
            key={link.href}
            style={{ '--nav-color': link.color }}
          >
            <FontAwesomeIcon icon={link.icon} className={styles.navIcon} aria-hidden="true" />
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
      <p className={styles.description}>
        <span>CODE</span>
        <span className={styles.separator}>|</span>
        <span>MUSIC</span>
        <span className={styles.separator}>|</span>
        <span>3D DESIGN</span>
      </p>
    </div>
  )
}
