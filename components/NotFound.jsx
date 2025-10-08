/*Notfound.jsx*/
'use client';
import Button from './Button';
import styles from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles['not-found-container']}>
      <div className={styles['not-found-content']}>
        <h2 className={styles['not-found-title']}>404</h2>
        <p className={styles['not-found-message']}>
          The page you have requested doesn’t exist.
        </p>
        <Button
          text="Go to Homepage"
          className={styles['not-found-button']}
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </div>
    </div>
  );
}
