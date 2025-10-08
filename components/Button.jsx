/*button.jsx*/
'use client';
import styles from '../styles/Button.module.css';

const Button = ({ text, className, onClick }) => {
  return (
    <div
      className={`${styles['button-container']} ${className || ''}`}
      onClick={onClick}
    >
      <span className={styles['button-text']}>{text}</span>
    </div>
  );
};

export default Button;
