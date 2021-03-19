import React, { useContext } from 'react';
import { Layout } from 'antd';
import { useParams, Redirect } from 'react-router-dom';
import { Player, BigPlayButton } from 'video-react';

import PageTemplate from '../components/common/PageTemplate';
import TenseMenu from '../components/common/TenseMenu';
import IdMenu from '../components/common/IdMenu';
import { LangContext } from '../context';
import { TENSES } from '../constants';

const srcMap = {
  'ru-prasens-vid1':
    'https://drive.google.com/file/d/1wUNfr8F0PCkHqR-S-ASUFMw5riTPoxa-/view?usp=sharing',
  'de-prasens-vid1':
    'https://drive.google.com/file/d/1dx4C_JF13loEKN3z0JlioOteAQUUazkE/view?usp=sharing',
};

const Media = () => {
  const { lang } = useContext(LangContext);
  const { tense, id } = useParams();
  const srcKey = `${lang}-${tense}-vid${id}`;
  const src = srcMap[srcKey];
  const poster = `/posters/de-${tense}-vid${id}.png`;

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
        <Player src={src} poster={poster} className="page-player">
          <BigPlayButton position="center" />
        </Player>
      </Layout.Content>
    </PageTemplate>
  );
};

export default Media;
