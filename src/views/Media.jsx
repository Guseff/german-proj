import React from 'react'
import { Layout } from 'antd'
import { useParams, Redirect } from 'react-router-dom'
import { Player } from 'video-react'

import PageTemplate from '../components/common/PageTemplate'
import { TENSES } from '../constants'

// import poster from '../assets/posters/de-perfect-vid1.png'

const Media = () => {
  const { tense, id } = useParams()
  if (
    tense !== TENSES.PERFECT &&
    tense !== TENSES.PRASENCE &&
    tense !== TENSES.PRATER
  )
    return <Redirect to="/404" />

  return (
    <PageTemplate>
      <Layout.Content>
        {`tense: ${tense}, id: ${id}`}
        <Player
          source="video/de-perfect-vid1.mp4"
          poster="posters/de-perfect-vid1.png"
        />
      </Layout.Content>
    </PageTemplate>
  )
}

export default Media
