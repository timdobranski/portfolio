'use client';

import styles from './Project.module.css';
import Link from 'next/link';
import Gallery from '../Gallery/Gallery.js';


function ProjectDescriptionBlock({ block, index }) {
  if (typeof block === 'string') {
    return <p className={styles.description}>{block}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul className={styles.descriptionList}>
        {block.items.map((item) => (
          <li className={styles.descriptionListItem} key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p className={styles.description} key={index}>{block.content}</p>;
}

export default function Project({ data }) {
  const { name, date, description, tech, images, deployLink } = data;
  const hasDeployLink = deployLink.url.length > 0;
  const deployLinkLabel = `Open ${name}`;

  return (
    <div className='pageContentContainer'>
      <div className={styles.titleRow}>
        <h1 className={`pageTitle ${styles.projectHeader}`}>{name}</h1>
        {hasDeployLink ?
          <Link href={deployLink.url} className={`${styles.projectLink} ${styles.desktopProjectLink}`} aria-label={deployLinkLabel}>
            <span aria-hidden="true">↗</span>
          </Link> :
          null}
      </div>
      <div className={styles.dateRow}>
        <p className={styles.date}>{date}</p>
        {hasDeployLink ?
          <Link href={deployLink.url} className={`${styles.projectLink} ${styles.mobileProjectLink}`} aria-label={deployLinkLabel}>
            <span aria-hidden="true">↗</span>
          </Link> :
          null}
      </div>
      <div className={styles.projectGrid}>
        <Gallery images={images} />

        <div className={`${styles.textContainer} ${styles.gridItem}`}>
          {/* {data.video ? <iframe className={styles.video} src={data.video} title={name} frameBorder="0"
        controls allowFullScreen></iframe> : null} */}
          <div className={styles.sectionContainer}>
            {description.map((p, i) => {
              return <ProjectDescriptionBlock block={p} index={i} key={i} />
            })}
          </div>
          <div className={styles.sectionContainer}>
            <p className={styles.techLabel}>TECH</p>
            <ul className={styles.techList}>
              {tech.map((tech) => {
                return <li className={styles.techStack} key={tech}>{tech}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}