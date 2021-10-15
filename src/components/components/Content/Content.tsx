import React, { ReactNode } from 'react';

import styles from './Content.css';

type TContentProps = {
  children: ReactNode;
};

const Content = ({ children }: TContentProps): JSX.Element => (
  <div className={styles.wrapper}>{children}</div>
);

export default Content;
