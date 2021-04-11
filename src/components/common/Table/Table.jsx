import React from 'react';
import PropTypes, { element } from 'prop-types';

import styles from './Table.css';

const Table = ({ children }) => (
  <table className={styles.table}>
    <tbody>{children}</tbody>
  </table>
);

Table.defaultProps = {
  children: undefined,
};

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(element),
  ]),
};

export default Table;
