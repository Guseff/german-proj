import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Input.css';

const Input = forwardRef(({ id, className }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      id={id}
      className={cn(styles.input, styles[className])}
    />
  );
});

Input.defaultProps = {
  className: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
