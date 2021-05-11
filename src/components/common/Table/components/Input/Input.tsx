import React from 'react';
import cn from 'classnames';

import styles from './Input.css';

type TInputProps = {
  id: string;
  className?: string;
};

const Input = ({ id, className = '' }: TInputProps): JSX.Element => {
  return (
    <input
      type="text"
      id={id}
      className={cn(styles.input, styles[className])}
    />
  );
};

Input.displayName = 'Input';

export default Input;
