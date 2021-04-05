import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import 'video-react/dist/video-react.css';
import styles from './IdMenu.css';

const IdMenu = ({ tense, id }) => {
  const { t } = useTranslation();
  const media = {
    prasens: [1, 2, 3, 4, 5],
    preter: [1, 2, 3, 4, 5],
    perfect: [1, 2, 3, 4],
    deklination: [1, 2, 3, 4, 5, 6],
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

IdMenu.propTypes = {
  tense: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default IdMenu;
