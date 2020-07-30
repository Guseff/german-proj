import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import LeftSider from './LeftSider'
import RightSider from './RightSider'
import PageTitle from './PageTitle'

const PageTemplate = props => {
  const title = 'Media'
  const { children } = props
  return (
    <>
      <PageTitle className="light" title={title} />
      <Layout className="media-page light">
        <LeftSider />
        {children}
        <RightSider />
      </Layout>
    </>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PageTemplate