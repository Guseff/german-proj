import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PageTitle.css';

type TPageTitleProps = {
  pageTitle: string;
};

const PageTitle = ({ pageTitle }: TPageTitleProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h1>{t(pageTitle)}</h1>
    </header>
  );
};

export default PageTitle;
