import React from 'react';
import { Layout } from 'antd';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Player, BigPlayButton } from 'video-react';

import PageTemplate from '../components/common/PageTemplate';
import { TENSES } from '../constants';
import TenseMenu from '../components/common/TenseMenu';
import IdMenu from '../components/common/IdMenu';

const Media = () => {
  const lang = useSelector(store => store.settings.language);
  const { tense, id } = useParams();
  if (
    tense !== TENSES.PERFECT &&
    tense !== TENSES.PRASENS &&
    tense !== TENSES.PRETER
  )
    return <Redirect to="/404" />;

  const src = `/video/${lang}-${tense}-vid${id}.mp4`;
  const poster = `/posters/de-${tense}-vid${id}.png`;

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
  );
};

export default Media;
