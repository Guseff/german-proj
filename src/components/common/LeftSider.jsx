import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

const LeftSider = ({ pageTitle }) => {
  const { t } = useTranslation();

  return (
    <Sider theme="light">
      <Menu className="page--side-menu" selectedKeys={pageTitle}>
        <Menu.Item key="prasens">
          <Link className="capital" to="/prasens">
            {t('prasens')}
          </Link>
        </Menu.Item>
        <Menu.Item key="preter">
          <Link className="capital" to="/preter">
            {t('preter')}
          </Link>
        </Menu.Item>
        <Menu.Item key="perfect">
          <Link className="capital" to="/perfect">
            Perfect
          </Link>
        </Menu.Item>
        <Menu.Item key="deklination">
          <Link className="capital" to="/deklination">
            Deklination
          </Link>
        </Menu.Item>
        <Menu.Item key="media">
          <Link className="capital" to="/media/prasens/1">
            Media
          </Link>
        </Menu.Item>
        <Menu.Item key="tasks">
          <Link className="capital" to="/tests/prasens">
            {t('tasks')}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

LeftSider.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default LeftSider;
