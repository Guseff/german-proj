import React from 'react';
import PropTypes, { element } from 'prop-types';

import styles from './Row.css';

const Row = ({ children }) => <tr className={styles.row}>{children}</tr>;

Row.defaultProps = {
  children: undefined,
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(element),
  ]),
};

export default Row;
