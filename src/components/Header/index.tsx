import React from 'react';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header
      className={styles.header}
    >
      <div className={styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.btn}>Home</li>
          <li className={styles.btn}>Profile</li>
          <li className={styles.btn}>My Quizes</li>
          <li className={styles.btn}>Create Quiz</li>
          <li className={styles.btn}>Log out</li>
        </ul>
      </nav>
    </header>
  );
}