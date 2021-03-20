import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';

const IdMenu = props => {
  const { t } = useTranslation();
  const { tense, id } = props;
  const media = {
    prasens: [1, 2, 3, 4, 5],
    preter: [1, 2, 3, 4, 5],
    perfect: [1, 2, 3, 4],
    deklination: [1, 2, 3, 4, 5, 6],
  };

  return (
    <Menu mode="horizontal" selectedKeys={id}>
      {media[tense].map(el => (
        <Menu.Item key={el}>
          <Link to={`/media/${tense}/${el}`}>{`${t('video')} ${el}`}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

IdMenu.propTypes = {
  tense: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default IdMenu;
