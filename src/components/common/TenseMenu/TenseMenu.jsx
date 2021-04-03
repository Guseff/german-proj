import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { TENSES } from '../../../constants';

const TenseMenu = ({ tense, component }) => {
  const { t } = useTranslation();

  const toStartWithCapital = str => str[0].toUpperCase() + str.slice(1);

  return (
    <Menu mode="horizontal" selectedKeys={tense}>
      <Menu.Item key={TENSES.PRASENS}>
        <Link to={`/${component}/${TENSES.PRASENS}/1`}>
          {toStartWithCapital(t(TENSES.PRASENS))}
        </Link>
      </Menu.Item>
      <Menu.Item key={TENSES.PRETER}>
        <Link to={`/${component}/${TENSES.PRETER}/1`}>
          {toStartWithCapital(t(TENSES.PRETER))}
        </Link>
      </Menu.Item>
      <Menu.Item key={TENSES.PERFECT}>
        <Link to={`/${component}/${TENSES.PERFECT}/1`}>
          {toStartWithCapital(t(TENSES.PERFECT))}
        </Link>
      </Menu.Item>
      <Menu.Item key={TENSES.DEKLINATION}>
        <Link to={`/${component}/${TENSES.DEKLINATION}/1`}>
          {toStartWithCapital(t(TENSES.DEKLINATION))}
        </Link>
      </Menu.Item>
    </Menu>
  );
};

TenseMenu.propTypes = {
  tense: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

export default TenseMenu;
