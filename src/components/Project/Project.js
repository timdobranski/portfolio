// 'use client';

import styles from './Project.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Gallery from '../Gallery/Gallery.js';


export default function Project({ data }) {
  const name = data.name;
  const date = data.date;
  const description = data.description;
  const tech = data.tech;
  const images = data.images;
  const link = data.link;

  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.date}>{date}</p>
      <div className={styles.projectGrid}>
        {/* <div className={`${styles.imageContainer} ${styles.gridItem}`}>
          <Image src={images[0]} alt={name} className={styles.mainImage} fill='true'/>
        </div> */}

        <Gallery images={images} />

        <div className={`${styles.textContainer} ${styles.gridItem}`}>
          <Link href={link}>
            <p className={styles.projectLink}>LaMesaStringSchool.com</p>
          </Link>
          {description.map((p, i) => {
            return <p className={styles.description} key={i}>{p}</p>
          })}

          <div className={styles.techContainer}>
            <p className={styles.techLabel}>Tech:</p>
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