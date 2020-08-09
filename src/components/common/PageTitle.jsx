import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'

const { Header } = Layout

const PageTitle = props => {
  const { t } = useTranslation()
  const { pageTitle } = props
  return <Header className="page-title light">{t(pageTitle)}</Header>
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default PageTitle
