import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NoMatch.css';

const NoMatch = () => (
  <div className={styles.page}>
    <span className={styles.number}>404</span>
    <br />
    <span className={styles.text}>Page not found</span>
    <br />
    <Link className={styles.btn} to="/">
      Return to start page
    </Link>
  </div>
);

export default NoMatch;
