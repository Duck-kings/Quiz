import React from 'react';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header
      className={styles.header}
    >
      <nav className={styles.btnsContainer}>
        <ul>
          <li className={styles.btn}>Profile</li>
          <li className={styles.btn}>Home</li>
          <li className={styles.btn}>Works</li>
          <li className={styles.btn}>Educatoin</li>
          <li className={styles.btn}>Log out</li>
        </ul>
      </nav>
    </header>
  );
}