import React from 'react'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'

const { Content } = Layout

const Media = () => {
  const { t } = useTranslation()
  return (
    <Content>
      <h3>{t('use')}</h3>
      <p>{t('1')}</p>
      <p>{t('2')}</p>
      <p>{t('3')}</p>
      <p>{t('4')}</p>
      <h3>{t('howto')}</h3>
    </Content>
  )
}

export default Media
