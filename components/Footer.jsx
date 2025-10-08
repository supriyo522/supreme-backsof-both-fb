/*footer.jsx*/
'use client';
import List from './List';
import Constants from '../constants/index.js';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-logo']}>
          <a href="/">
            <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="logo"
              width="144"
              height="44"
            />
          </a>
        </div>

        <div className={styles['footer-links']}>
          <List data={Constants} />
        </div>

        <div className={styles['footer-bottom']}>
          <p>©2024. All Rights Reserved.</p>
          <p className={styles['footer-address']}>
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </p>
        </div>
      </div>
    </footer>
  );
}
