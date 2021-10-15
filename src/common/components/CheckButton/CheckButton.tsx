import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './CheckButton.css';

type TCheckButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  children?: ReactNode;
};

const CheckButton = ({
  className,
  type = 'submit',
  children,
}: TCheckButtonProps): JSX.Element => {
  return (
    <button type={type} className={cn(styles.btn, className)}>
      {children}
    </button>
  );
};

export default CheckButton;
