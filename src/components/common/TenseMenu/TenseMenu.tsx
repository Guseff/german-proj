import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ETenses } from '../../../constants';

import styles from './TenseMenu.css';

type TTenseMenu = {
  tense: string;
  component: string;
  sublevel?: boolean;
};

const TenseMenu = ({ tense, component, sublevel }: TTenseMenu): JSX.Element => {
  const { t } = useTranslation();

  const toStartWithCapital = (str: string): string =>
    str[0].toUpperCase() + str.slice(1);

  return (
    <ul className={styles.list}>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === ETenses.PRASENS,
        })}
      >
        <Link
          className={styles.link}
          to={`/${component}/${ETenses.PRASENS}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(ETenses.PRASENS))}
        </Link>
      </li>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === ETenses.PRETER,
        })}
        key={ETenses.PRETER}
      >
        <Link
          className={styles.link}
          to={`/${component}/${ETenses.PRETER}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(ETenses.PRETER))}
        </Link>
      </li>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === ETenses.PERFECT,
        })}
        key={ETenses.PERFECT}
      >
        <Link
          className={styles.link}
          to={`/${component}/${ETenses.PERFECT}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(ETenses.PERFECT))}
        </Link>
      </li>
      <li
        className={cn(styles.element, {
          [styles.active]: tense === ETenses.DEKLINATION,
        })}
        key={ETenses.DEKLINATION}
      >
        <Link
          className={styles.link}
          to={`/${component}/${ETenses.DEKLINATION}${sublevel ? '/1' : ''}`}
        >
          {toStartWithCapital(t(ETenses.DEKLINATION))}
        </Link>
      </li>
    </ul>
  );
};

export default TenseMenu;
