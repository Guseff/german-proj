import React, { useContext } from 'react';
import { Layout } from 'antd';
import { useParams, Redirect } from 'react-router-dom';
import { Player, BigPlayButton } from 'video-react';

import PageTemplate from '../components/common/PageTemplate';
import { TENSES } from '../constants';
import TenseMenu from '../components/common/TenseMenu';
import IdMenu from '../components/common/IdMenu';
import { LangContext } from '../context';

const Media = () => {
  const { tense, id } = useParams();
  const { lang } = useContext(LangContext);

  if (
    tense !== TENSES.PERFECT &&
    tense !== TENSES.PRASENS &&
    tense !== TENSES.PRETER &&
    tense !== TENSES.DEKLINATION
  ) {
    return <Redirect to="/404" />;
  }

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
