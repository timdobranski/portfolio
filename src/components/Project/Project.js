'use client';

import styles from './Project.module.css';
import Link from 'next/link';
import Gallery from '../Gallery/Gallery.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


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

  return (
    <div className='pageContentContainer'>
      <div className={styles.titleRow}>
        <h1 className={`pageTitle ${styles.projectHeader}`}>{name}</h1>
        {deployLink.url.length > 0 ?
          <Link href={deployLink.url} className={styles.projectLink} aria-label={`Open ${name}`}>
            <FontAwesomeIcon icon={faLink} />
          </Link> :
          null}
      </div>
      <p className={styles.date}>{date}</p>
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
            <ul>
              {tech.map((tech) => {
                return <li className={styles.techStack}key={tech}>{tech}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}