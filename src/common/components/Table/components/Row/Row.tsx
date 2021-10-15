import React, { ReactNode } from 'react';

import styles from './Row.css';

type TRowProps = {
  children: ReactNode;
};

const Row = ({ children }: TRowProps): JSX.Element => (
  <tr className={styles.row}>{children}</tr>
);

export default Row;
