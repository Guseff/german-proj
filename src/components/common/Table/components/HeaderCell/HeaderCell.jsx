import React from 'react';
import PropTypes, { element } from 'prop-types';

import styles from './HeaderCell.css';

const Cell = ({ children }) => <th className={styles.th}>{children}</th>;

Cell.defaultProps = {
  children: undefined,
};

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(element),
  ]),
};

export default Cell;
