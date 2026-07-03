'use client';

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
  return (
    <div className={styles.pageWrapper}>
      <div className={`pageContentContainer ${styles.pageContentContainer}`}>
        <h1 className={styles.pageTitle}>3D DESIGN</h1>
        <p className={styles.whiteText}>{`Lately, I’ve been getting deeper into woodworking and 3D design, building everything from art pieces to furniture that mixes physical craft with digital tools. A lot of that started with my dad, who’s shared his knowledge, experience, and eye for how things are made. I’m drawn to projects that feel tactile, colorful, and a little unexpected, often combining wood, 3D printing, lighting, and bold visual details.
`}</p>

        <div className={styles.projectsList}>
          {projects.map((project) => (
            <section className={styles.projectSection} key={project.title}>
              <div className={styles.projectText}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
              <PhotoSlider
                images={project.images}
                aspectRatio='9 / 16'
                altBase={`${project.title} photo`}
                frameClassName={styles.projectSliderFrame}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

