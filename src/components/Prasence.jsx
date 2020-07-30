import React from 'react'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'

const { Content } = Layout

const Media = () => {
  const { language } = useSelector(store => store.settings)
  return (
    <>
      <Content>{language}</Content>
    </>
  )
}

export default Media
