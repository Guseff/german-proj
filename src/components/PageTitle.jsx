import React from 'react'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const { Header } = Layout

const PageTitle = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const pageTitle = location.pathname.match(/\/.+?\//) || [
    location.pathname.concat('/'),
  ]
  return (
    <Header className="page-title light">{t(pageTitle[0].slice(1, -1))}</Header>
  )
}

export default PageTitle
