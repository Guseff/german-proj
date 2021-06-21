import React, { ReactNode } from 'react';

import styles from './HeaderCell.css';

type TCellProps = {
  children?: ReactNode | ReactNode[];
};

const Cell = ({ children }: TCellProps): JSX.Element => (
  <th className={styles.th}>{children}</th>
);

export default Cell;
