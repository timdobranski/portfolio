import styles from './page.module.css'
import me from '../../public/images/me.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Tim Dobranski</h1>
      <p className={styles.description}>Web developer, musician, educator, and dog dad to Aria</p>

      <div className={styles.grid}>
        <a href='' className={styles.card}>
          <h2>Projects &rarr;</h2>
          <p>See my work</p>
        </a>
        <a href='' className={styles.card}>
          <h2>Resume &rarr;</h2>
          <p>See my work history</p>
        </a>
        <a href='' className={styles.card}>
          <h2>Blog &rarr;</h2>
          <p>Read my thoughts</p>
        </a>
        <a href='' className={styles.card}>
          <h2>Connect &rarr;</h2>
          <p>Get in touch</p>
        </a>
      </div>

      <div className={styles.grid}>
        <Image src={me} className={styles.me} alt="Tim Dobranski" />
      </div>

    </main>
  )
}
