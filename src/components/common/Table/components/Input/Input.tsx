import React, { ChangeEventHandler } from 'react';
import cn from 'classnames';

import styles from './Input.css';

type TInputProps = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const Input = ({ id, onChange, className = '' }: TInputProps): JSX.Element => {
  return (
    <input
      type="text"
      id={id}
      onChange={onChange}
      className={cn(styles.input, styles[className])}
    />
  );
};

Input.displayName = 'Input';

export default Input;
