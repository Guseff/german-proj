import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './LeftSider.css';

type TLeftSiderProps = {
  pageTitle: string;
};

const LeftSider = ({ pageTitle }: TLeftSiderProps): JSX.Element => {
  const { t } = useTranslation();

  // ToDo: list from enum
  return (
    <aside className={styles.wrapper}>
      <nav className={styles.sideMenu}>
        <ul className={styles.list}>
          <li
            className={cn(styles.element, {
              [styles.active]: pageTitle === 'prasens',
            })}
          >
            <Link className={styles.link} to="/prasens">
              {t('prasens')}
            </Link>
          </li>
          <li
            className={cn(styles.element, {
              [styles.active]: pageTitle === 'preter',
            })}
          >
            <Link className={styles.link} to="/preter">
              {t('preter')}
            </Link>
          </li>
          <li
            className={cn(styles.element, {
              [styles.active]: pageTitle === 'perfect',
            })}
          >
            <Link className={styles.link} to="/perfect">
              Perfect
            </Link>
          </li>
          <li
            className={cn(styles.element, {
              [styles.active]: pageTitle === 'deklination',
            })}
          >
            <Link className={styles.link} to="/deklination">
              Deklination
            </Link>
          </li>
          <li
            className={cn(styles.element, {
              [styles.active]: pageTitle === 'media',
            })}
          >
            <Link className={styles.link} to="/media/prasens/1">
              Media
            </Link>
          </li>
          <li
            className={cn(styles.element, {
              [styles.active]: pageTitle === 'tests',
            })}
          >
            <Link className={styles.link} to="/tests/prasens">
              Tests
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSider;
