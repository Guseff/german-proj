import React, { ChangeEventHandler } from 'react';
import cn from 'classnames';

import styles from './Select.css';

type TSelectProps = {
  id: string;
  options: string[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
};

const Select = ({
  id,
  options,
  onChange,
  className = '',
}: TSelectProps): JSX.Element => {
  return (
    <select
      id={id}
      defaultValue="..."
      onChange={onChange}
      className={cn(styles.input, styles[className])}
    >
      <option disabled>...</option>
      {options.map(x => (
        <option key={x}>{x}</option>
      ))}
    </select>
  );
};

Select.displayName = 'Select';

export default Select;
