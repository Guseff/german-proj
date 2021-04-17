import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Cell.css';

const Cell = ({
  children,
  className,
  rowSpan,
  low,
  middle,
  big,
  gap,
  equal,
  bold,
  top,
  centered,
  cursive,
  right,
}) => (
  <td
    rowSpan={rowSpan}
    className={cn(className, {
      [styles.lowCell]: low,
      [styles.midCell]: middle,
      [styles.bigCell]: big,
      [styles.gapCell]: gap,
      [styles.equCell]: equal,
      [styles.boldCell]: bold,
      [styles.topCell]: top,
      [styles.centeredCell]: centered,
      [styles.cursive]: cursive,
      [styles.right]: right,
    })}
  >
    {children}
  </td>
);

Cell.defaultProps = {
  className: '',
  rowSpan: '',
  low: undefined,
  middle: undefined,
  big: undefined,
  gap: undefined,
  equal: undefined,
  bold: undefined,
  top: undefined,
  centered: undefined,
  cursive: undefined,
  right: undefined,
};

Cell.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  rowSpan: PropTypes.string,
  className: PropTypes.string,
  low: PropTypes.bool,
  middle: PropTypes.bool,
  big: PropTypes.bool,
  gap: PropTypes.bool,
  equal: PropTypes.bool,
  bold: PropTypes.bool,
  top: PropTypes.bool,
  centered: PropTypes.bool,
  cursive: PropTypes.bool,
  right: PropTypes.bool,
};

export default Cell;
