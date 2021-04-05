import React from 'react';
import PropTypes from 'prop-types';

import styles from './Content.css';

const Content = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
