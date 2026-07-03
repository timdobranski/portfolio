'use client';

import { useState } from 'react';
import PhotoSlider from '../../../components/PhotoSlider/PhotoSlider';
import styles from './page.module.css'

const projects = [
  {
    title: 'Acoustic Panels',
    description: `I built these acoustic panels for sound treatment in my home studio. 
    They combine a black wooden frame with a lightstrip for a subtle glow, while reducing sound reflections.
     The panels are made from a combination of wood, fabric, and acoustic foam.`,
    images: [
      '/images/3d-design-projects/acoustic-panels/acoustic-panel1.webp',
      '/images/3d-design-projects/acoustic-panels/acousticpanel2.webp',
      '/images/3d-design-projects/acoustic-panels/acoustic-panel3.webp',
    ],
  },
  {
    title: 'LightWall',
    description: `This Lightwall prototype eventually became a full-scale 8-foot tall by 30-foot wide installation
     for the school I used to work at. It was designed as a backdrop for performances and events. 
     It combines 3D printed components, wood, and LED lighting to create a visually striking wall that can be
     programmed to display different colors and patterns.`,
    images: [
      '/images/3d-design-projects/lightwall/lightwall1.webp',
      '/images/3d-design-projects/lightwall/lightwall2.webp',
      '/images/3d-design-projects/lightwall/lightwall3.webp',
    ],
  },
];

export default function Design() {
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(projects[0].title);
  const selectedProject = projects.find((project) => project.title === selectedProjectTitle) ?? projects[0];

  return (
    <div className={styles.pageWrapper}>
      <div className={`pageContentContainer ${styles.pageContentContainer}`}>
        <h1 className={styles.pageTitle}>3D DESIGN</h1>
        <p className={styles.whiteText}>{`Woodworking and 3D design has become a new interest of mine, and I enjoy building everything from art pieces to concert installations that mix physical craft with digital tools. A lot of that started with my dad, who’s shared his knowledge, experience, and eye for how things are made.
`}</p>

        <div className={styles.projectSelector} aria-label="3D design projects">
          {projects.map((project) => (
            <button
              className={project.title === selectedProject.title ? styles.projectButtonActive : styles.projectButton}
              key={project.title}
              type="button"
              onClick={() => setSelectedProjectTitle(project.title)}
            >
              {project.title}
            </button>
          ))}
        </div>

        <section className={styles.projectSection}>
          <div className={styles.projectText}>
            <h2 className={styles.projectTitle}>{selectedProject.title}</h2>
            <p className={styles.projectDescription}>{selectedProject.description}</p>
          </div>
          <PhotoSlider
            images={selectedProject.images}
            aspectRatio='9 / 16'
            altBase={`${selectedProject.title} photo`}
            frameClassName={styles.projectSliderFrame}
          />
        </section>
      </div>
    </div>
  )
}

