import React from 'react'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { Sider } = Layout

const LeftSider = () => {
  const { t } = useTranslation()
  return (
    <Sider theme="light">
      <Menu className="page--side-menu" defaultSelectedKeys="pres">
        <Menu.Item key="pres">
          <Link className="capital" to="/prasence">
            {t('prasence')}
          </Link>
        </Menu.Item>
        <Menu.Item key="prat">
          <Link className="capital" to="/prater">
            {t('prater')}
          </Link>
        </Menu.Item>
        <Menu.Item key="perf">
          <Link className="capital" to="/perfect">
            Perfect
          </Link>
        </Menu.Item>
        <Menu.Item key="media">
          <Link className="capital" to="/media/5">
            Media
          </Link>
        </Menu.Item>
        <Menu.Item key="tasks">
          <Link className="capital" to="/task/1">
            {t('tasks')}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default LeftSider
