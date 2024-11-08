'use client';

import styles from './Project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '../Gallery/Gallery.js';


export default function Project({ data }) {
  console.log('project data', data)
  // const name = data.name;
  // const date = data.date;
  // const description = data.description;
  // const tech = data.tech;
  // const images = data.images;
  // const deployLink = data.deployLink;
  // const repoLink = data.repoLink;

  const { name, date, description, tech, images, deployLink, repoLink } = data;
  // const { date } = data;
  // const { description } = data;
  // const { tech } = data;
  // const { images } = data;
  // const { deployLink } = data;
  // const { repoLink } = data;

  return (
    <div className='pageContentContainer'>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.date}>{date}</p>
      <div className={styles.projectGrid}>
        <Gallery images={images} />

        <div className={`${styles.textContainer} ${styles.gridItem}`}>
          {deployLink.url.length > 0 ?
          <Link href={deployLink.url}>
            <p className={styles.projectLink}>{deployLink.text}</p>
          </Link> :
          null}
          {repoLink.url ? <Link href={repoLink.url}>
            <p className={styles.projectLink}>View Repo on Github</p>
          </Link> : <p className={styles.projectLink}>Repo Is Private</p>}
          {data.video ? <iframe className={styles.video} src={data.video} title={name} frameBorder="0"
        controls allowFullScreen></iframe> : null}
          <div className={styles.sectionContainer}>
            {description.map((p, i) => {
              return <p className={styles.description} key={i}>{p}</p>
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