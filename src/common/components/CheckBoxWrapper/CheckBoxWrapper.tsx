import React, { ReactNode } from 'react';
import cn from 'classnames';

import { ETestResult } from '../Tasks/types';

import styles from './CheckBoxWrapper.css';

type TCheckBoxProps = {
  children?: ReactNode;
  testResult?: ETestResult;
};

const CheckBoxWrapper = ({
  children,
  testResult,
}: TCheckBoxProps): JSX.Element => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.red]: testResult === ETestResult.Wrong,
        [styles.green]: testResult === ETestResult.Right, 
      })}
    >
      {children}
    </div>
  );
};

export default CheckBoxWrapper;
