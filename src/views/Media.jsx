import React from 'react'
import { Layout } from 'antd'
import PageTemplate from '../components/common/PageTemplate'

const Media = () => {
  const temp = 'Some infos'
  return (
    <PageTemplate>
      <Layout.Content>{temp}</Layout.Content>
    </PageTemplate>
  )
}

export default Media
