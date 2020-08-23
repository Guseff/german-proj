import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { useTranslation } from 'react-i18next'
import { TENSES } from '../../constants'

const TenseMenu = props => {
  const { t } = useTranslation()
  const { tense } = props

  return (
    <Menu mode="horizontal" selectedKeys={tense}>
      <Menu.Item key={TENSES.PRASENCE}>
        <Link to={`/media/${TENSES.PRASENCE}/1`}>{t(TENSES.PRASENCE)}</Link>
      </Menu.Item>
      <Menu.Item key={TENSES.PRATER}>
        <Link to={`/media/${TENSES.PRATER}/1`}>{t(TENSES.PRATER)}</Link>
      </Menu.Item>
      <Menu.Item key={TENSES.PERFECT}>
        <Link to={`/media/${TENSES.PERFECT}/1`}>{t(TENSES.PERFECT)}</Link>
      </Menu.Item>
    </Menu>
  )
}

TenseMenu.propTypes = {
  tense: PropTypes.string.isRequired,
}

export default TenseMenu
