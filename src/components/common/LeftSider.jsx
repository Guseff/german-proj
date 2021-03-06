import React from 'react'
import PropTypes from 'prop-types'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const { Sider } = Layout

const LeftSider = props => {
  const { pageTitle } = props
  const { t } = useTranslation()
  const { tense, id } = useSelector(state => state.media)
  return (
    <Sider theme="light">
      <Menu className="page--side-menu" selectedKeys={pageTitle}>
        <Menu.Item key="prasence">
          <Link className="capital" to="/prasence">
            {t('prasence')}
          </Link>
        </Menu.Item>
        <Menu.Item key="prater">
          <Link className="capital" to="/prater">
            {t('prater')}
          </Link>
        </Menu.Item>
        <Menu.Item key="perfect">
          <Link className="capital" to="/perfect">
            Perfect
          </Link>
        </Menu.Item>
        <Menu.Item key="media">
          <Link className="capital" to={`/media/${tense}/${id}`}>
            Media
          </Link>
        </Menu.Item>
        <Menu.Item key="tasks">
          <Link className="capital" to="/tasks/1">
            {t('tasks')}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

LeftSider.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default LeftSider
