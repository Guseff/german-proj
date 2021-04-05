import React from 'react';
import PropTypes, { element } from 'prop-types';

import styles from './Content.css';

const Content = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

Content.defaultProps = {
  children: undefined,
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(element),
  ]),
};

export default Content;
