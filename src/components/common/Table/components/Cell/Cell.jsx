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
  bold,
  top,
  centered,
}) => (
  <td
    rowSpan={rowSpan}
    className={cn(className, {
      [styles.lowCell]: low,
      [styles.midCell]: middle,
      [styles.bigCell]: big,
      [styles.gapCell]: gap,
      [styles.boldCell]: bold,
      [styles.topCell]: top,
      [styles.centeredCell]: centered,
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
  bold: undefined,
  top: undefined,
  centered: undefined,
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
  bold: PropTypes.bool,
  top: PropTypes.bool,
  centered: PropTypes.bool,
};

export default Cell;
