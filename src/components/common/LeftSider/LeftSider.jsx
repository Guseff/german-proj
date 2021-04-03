import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './LeftSider.css';

const LeftSider = ({ pageTitle }) => {
  const { t } = useTranslation();

  return (
    <aside>
      <nav className={styles.sideMenu} selectedKeys={pageTitle}>
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} to="/prasens">
              {t('prasens')}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/preter">
              {t('preter')}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/perfect">
              Perfect
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/deklination">
              Deklination
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/media/prasens/1">
              Media
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/tests/prasens">
              {t('tasks')}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

LeftSider.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default LeftSider;
