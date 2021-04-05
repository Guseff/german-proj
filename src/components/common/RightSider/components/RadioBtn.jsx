import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './RadioBtn.css';

const RadioBtn = ({ value, name, lang }) => (
  <label
    className={cn(styles.label, { [styles.active]: lang === value })}
    htmlFor={lang}
  >
    {lang.toUpperCase()}
    <input
      type="radio"
      id={value}
      name={name}
      className={styles.input}
      value={lang}
    />
  </label>
);

RadioBtn.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default RadioBtn;
