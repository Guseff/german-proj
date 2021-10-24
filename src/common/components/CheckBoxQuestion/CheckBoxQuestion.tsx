import React, { ChangeEventHandler, ReactNode } from 'react';

import styles from './CheckBoxQuestion.css';

type TCheckBoxProps = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
};

const CheckBoxQuestion = ({
  id,
  onChange,
  children,
}: TCheckBoxProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
      />
      &nbsp;
      {children}
    </div>
  );
};

export default CheckBoxQuestion;
