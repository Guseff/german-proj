import React, { ChangeEventHandler } from 'react';
import cn from 'classnames';

import styles from './Input.css';

type TInputProps = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  small?: boolean;
  className?: string;
};

const Input = ({
  id,
  onChange,
  small,
  className = '',
}: TInputProps): JSX.Element => {
  return (
    <input
      type="text"
      id={id}
      onChange={onChange}
      className={cn(styles.input, styles[className], {
        [styles.small]: small,
      })}
    />
  );
};

Input.displayName = 'Input';

export default Input;
