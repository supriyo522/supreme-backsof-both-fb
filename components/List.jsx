/*List.jsx*/
'use client';
import styles from '../styles/List.module.css';

export default function List({ data }) {
  return (
    <>
      {data.map((link) => (
        <div key={link.id} className={styles['list-category']}>
          <h3 className={styles['category-title']}>{link.category}</h3>
          <ul className={styles['link-list']}>
            {link.links.map((item) => (
              <li key={item.id} className={styles['link-item']}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
