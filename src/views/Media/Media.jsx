import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import PageTemplate from '../../components/common/PageTemplate';
import TenseMenu from '../../components/common/TenseMenu';
import IdMenu from '../../components/common/IdMenu';
import { LangContext } from '../../context';
import { TENSES, VIDEO_SRC } from '../../constants';

import styles from './Media.css';

const Media = () => {
  const { lang } = useContext(LangContext);
  const { tense, id } = useParams();
  const src = VIDEO_SRC[lang][tense][id - 1];
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
      <TenseMenu tense={tense} component="media" sublevel />
      <IdMenu tense={tense} id={id} />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className={styles.video}
        src={src}
        poster={poster}
        type="video/mp4"
        controls
      />
    </PageTemplate>
  );
};

export default Media;
