import React from 'react'
import { Layout } from 'antd'
import { useParams, Redirect } from 'react-router-dom'
import { Player, BigPlayButton } from 'video-react'

import PageTemplate from '../components/common/PageTemplate'
import { TENSES } from '../constants'
import TenseMenu from '../components/common/TenseMenu'
import IdMenu from '../components/common/IdMenu'

const Media = () => {
  const { tense, id } = useParams()
  if (
    tense !== TENSES.PERFECT &&
    tense !== TENSES.PRASENCE &&
    tense !== TENSES.PRATER
  )
    return <Redirect to="/404" />

  const src = `/video/de-${tense}-vid${id}.mp4`
  const poster = `/posters/de-${tense}-vid${id}.png`

  return (
    <PageTemplate>
      <Layout.Content className="page-content">
        <TenseMenu tense={tense} />
        <IdMenu tense={tense} id={id} />
        <Player src={src} poster={poster} className="page-player">
          <BigPlayButton position="center" />
        </Player>
      </Layout.Content>
    </PageTemplate>
  )
}

export default Media
