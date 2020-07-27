import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Header } = Layout

const PageTitle = props => {
  const { title } = props
  return <Header className="page-title light">{title}</Header>
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
