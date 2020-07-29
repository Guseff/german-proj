import React from 'react'
import { Layout } from 'antd'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LeftSider from './LeftSider'
import RightSider from './RightSider'
import PageTitle from './PageTitle'

const { Content } = Layout

const Media = () => {
  const { id } = useParams()
  const { language } = useSelector(store => store.settings)
  const title = 'Media'
  return (
    <>
      <PageTitle className="light" title={title} />
      <Layout className="media-page light">
        <LeftSider />
        <Content>{`${id} - ${language}  `}</Content>
        <RightSider />
      </Layout>
    </>
  )
}

export default Media
