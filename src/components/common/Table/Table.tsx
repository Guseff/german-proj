import React, { ReactNode } from 'react';

import styles from './Table.css';

type TTableProps = {
  children?: ReactNode | ReactNode[];
};

const Table = ({ children }: TTableProps): JSX.Element => (
  <table className={styles.table}>
    <tbody>{children}</tbody>
  </table>
);

export default Table;
