import React, { useContext } from 'react';
import { Layout } from 'antd';
import { useParams, Redirect } from 'react-router-dom';
import { Player, BigPlayButton } from 'video-react';

import PageTemplate from '../components/common/PageTemplate';
import TenseMenu from '../components/common/TenseMenu';
import IdMenu from '../components/common/IdMenu';
import { LangContext } from '../context';
import { TENSES, VIDEO_SRC } from '../constants';

const Media = () => {
  const { lang } = useContext(LangContext);
  const { tense, id } = useParams();
  const srcKey = `${lang}-${tense}-vid${id}`;
  const src = VIDEO_SRC[srcKey];
  const poster = `../../posters/de-${tense}-vid${id}.png`;

  if (
    tense !== TENSES.PERFECT &&
    tense !== TENSES.PRASENS &&
    tense !== TENSES.PRETER &&
    tense !== TENSES.DEKLINATION
  )
    return <Redirect to="/404" />;

  return (
    <PageTemplate>
      <Layout.Content className="page-content">
        <TenseMenu tense={tense} />
        <IdMenu tense={tense} id={id} />
        <Player
          src={src}
          poster={poster}
          className="page-player"
          // type="video/mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </Layout.Content>
    </PageTemplate>
  );
};

export default Media;
