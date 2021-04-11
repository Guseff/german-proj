import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { TENSES } from '../../../constants';

import styles from './TenseMenu.css';

const TenseMenu = ({ tense, component, sublevel }) => {
  const { t } = useTranslation();

  const toStartWithCapital = str => str[0].toUpperCase() + str.slice(1);

  return (
    <ul className={styles.list}>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === TENSES.PRASENS,
        })}
      >
        <Link
          className={styles.link}
          to={`/${component}/${TENSES.PRASENS}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(TENSES.PRASENS))}
        </Link>
      </li>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === TENSES.PRETER,
        })}
        key={TENSES.PRETER}
      >
        <Link
          className={styles.link}
          to={`/${component}/${TENSES.PRETER}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(TENSES.PRETER))}
        </Link>
      </li>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === TENSES.PERFECT,
        })}
        key={TENSES.PERFECT}
      >
        <Link
          className={styles.link}
          to={`/${component}/${TENSES.PERFECT}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(TENSES.PERFECT))}
        </Link>
      </li>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === TENSES.DEKLINATION,
        })}
        key={TENSES.DEKLINATION}
      >
        <Link
          className={styles.link}
          to={`/${component}/${TENSES.DEKLINATION}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(TENSES.DEKLINATION))}
        </Link>
      </li>
    </ul>
  );
};

TenseMenu.defaultProps = {
  sublevel: undefined,
};

TenseMenu.propTypes = {
  tense: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  sublevel: PropTypes.bool,
};

export default TenseMenu;
