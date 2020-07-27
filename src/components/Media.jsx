import React from 'react'
import { Layout } from 'antd'
import { useParams } from 'react-router-dom'
import SideMenu from './SideMenu'
import PageTitle from './PageTitle'

const { Content } = Layout

const Media = () => {
  const { id } = useParams()
  const title = 'Media'
  return (
    <>
      <PageTitle className="light" title={title} />
      <Layout className="media-page light">
        <SideMenu className="light" />
        <Content>{id}</Content>
      </Layout>
    </>
  )
}

export default Media
