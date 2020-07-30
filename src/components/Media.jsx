import React from 'react'
import { Layout } from 'antd'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const { Content } = Layout

const Media = () => {
  const { id } = useParams()
  const { language } = useSelector(store => store.settings)
  return (
    <>
      <Content>{`${id} - ${language}  `}</Content>
    </>
  )
}

export default Media
