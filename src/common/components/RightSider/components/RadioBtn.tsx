import React from 'react';
import cn from 'classnames';

import styles from './RadioBtn.css';

type TRadioBtnProps = {
  value: string;
  name: string;
  lang: string;
};

const RadioBtn = ({ value, name, lang }: TRadioBtnProps): JSX.Element => (
  <label
    className={cn(styles.label, { [styles.active]: lang === value })}
    htmlFor={lang}
  >
    {lang.toUpperCase()}
    <input
      type="radio"
      id={lang}
      name={name}
      className={styles.input}
      value={lang}
    />
  </label>
);

export default RadioBtn;
