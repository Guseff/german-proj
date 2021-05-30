import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.css';

type TButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  children?: ReactNode;
};

const Button = ({
  className,
  type = 'submit',
  children,
}: TButtonProps): JSX.Element => {
  return (
    <button type={type} className={cn(styles.btn, className)}>
      {children}
    </button>
  );
};

export default Button;
