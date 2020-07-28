import React from 'react'
import { Layout } from 'antd'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import SideMenu from './SideMenu'
import PageTitle from './PageTitle'

const { Content, Sider } = Layout

const Media = () => {
  const { id } = useParams()
  // const { language } = useSelector(store => store.settings.language)
  const title = 'Media'
  return (
    <>
      <PageTitle className="light" title={title} />
      <Layout className="media-page light">
        <SideMenu />
        <Content>{`${id} - `}</Content>
        <Sider />
      </Layout>
    </>
  )
}

export default Media
