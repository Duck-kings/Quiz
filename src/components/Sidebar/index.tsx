import React from 'react';

import styles from './sidebar.module.scss';

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.aside}>
        <nav className={styles.navigation}>
          <ul>
            <li className={styles.link}>Profile</li>
            <li className={styles.link}>Home</li>
            <li className={styles.link}>Works</li>
            <li className={styles.link}>Educatoin</li>
            <li className={styles.link}>Log out</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}