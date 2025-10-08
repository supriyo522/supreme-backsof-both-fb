/*Maincontainer.jsx*/
'use client';
import styles from '../styles/MainContainer.module.css';

export default function MainContainer() {
  return (
    <div className={styles['main-container']} id="maindiv">
      <video autoPlay loop muted playsInline className={styles['video-background']}>
        <source src="/assets/automotive.224e7418884105595114.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <p className={styles['performance-text']}>Driven by performance</p>
        <p className={styles['solution-text']}>
          <span>
            Soft trims and <span className={styles.highlight}>NVH solutions</span>
          </span>
          <br />
          for seamless rides
        </p>
      </div>
    </div>
  );
}
