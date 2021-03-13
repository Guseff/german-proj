import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { TENSES } from '../../constants';
import { setId } from '../../actions';

const TenseMenu = props => {
  const { t } = useTranslation();
  const { tense } = props;

  const setVideoId = () => setId(1);
  const toStartWithCapital = str => str[0].toUpperCase() + str.slice(1);

  return (
    <Menu mode="horizontal" selectedKeys={tense}>
      <Menu.Item key={TENSES.PRASENS}>
        <Link to={`/media/${TENSES.PRASENS}/1`} onClick={setVideoId}>
          {toStartWithCapital(t(TENSES.PRASENS))}
        </Link>
      </Menu.Item>
      <Menu.Item key={TENSES.PRETER}>
        <Link to={`/media/${TENSES.PRETER}/1`} onClick={setVideoId}>
          {toStartWithCapital(t(TENSES.PRETER))}
        </Link>
      </Menu.Item>
      <Menu.Item key={TENSES.PERFECT}>
        <Link to={`/media/${TENSES.PERFECT}/1`} onClick={setVideoId}>
          {toStartWithCapital(t(TENSES.PERFECT))}
        </Link>
      </Menu.Item>
      <Menu.Item key={TENSES.DEKLINATION}>
        <Link to={`/media/${TENSES.DEKLINATION}/1`} onClick={setVideoId}>
          {toStartWithCapital(t(TENSES.DEKLINATION))}
        </Link>
      </Menu.Item>
    </Menu>
  );
};

TenseMenu.propTypes = {
  tense: PropTypes.string.isRequired,
};

export default TenseMenu;
