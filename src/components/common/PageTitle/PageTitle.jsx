import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './PageTitle.css';

const PageTitle = ({ pageTitle }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h1>{t(pageTitle)}</h1>
    </header>
  );
};

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;
