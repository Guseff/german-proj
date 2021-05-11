import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ETenses } from '../../../constants';

import styles from './IdMenu.css';

type TIdMenu = {
  tense: ETenses;
  id: string;
};

const IdMenu = ({ tense, id }: TIdMenu): JSX.Element => {
  const { t } = useTranslation();
  const media = {
    [ETenses.PRASENS]: [1, 2, 3, 4, 5],
    [ETenses.PRETER]: [1, 2, 3, 4, 5],
    [ETenses.PERFECT]: [1, 2, 3, 4],
    [ETenses.DEKLINATION]: [1, 2, 3, 4, 5, 6],
  };

  return (
    <ul className={styles.list}>
      {media[tense].map((el, i) => (
        <li
          className={cn(styles.element, {
            [styles.active]: parseInt(id, 10) === i + 1,
          })}
          key={el}
        >
          <Link className={styles.link} to={`/media/${tense}/${el}`}>
            {`${t('video')} ${el}`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IdMenu;
