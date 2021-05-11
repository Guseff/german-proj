import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import PageTemplate from '../../components/common/PageTemplate';
import TenseMenu from '../../components/common/TenseMenu';
import IdMenu from '../../components/common/IdMenu';
import { useLanguangesContext } from '../../context';
import { ELanguages, ETenses, VIDEO_SRC } from '../../constants';

import styles from './Media.css';

const Media = (): JSX.Element => {
  const { lang } = useLanguangesContext();
  const { tense, id } = useParams<{
    tense: string;
    id: string;
  }>();

  const src =
    VIDEO_SRC[lang as ELanguages][tense as ETenses][
      Number.parseInt(id, 10) - 1
    ];

  const poster = `../../posters/de-${tense}-vid${id}.png`;

  if (
    tense !== ETenses.PERFECT &&
    tense !== ETenses.PRASENS &&
    tense !== ETenses.PRETER &&
    tense !== ETenses.DEKLINATION
  )
    return <Redirect to="/404" />;

  return (
    <PageTemplate>
      <TenseMenu tense={tense} component="media" sublevel />
      <IdMenu tense={tense} id={id} />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video className={styles.video} src={src} poster={poster} controls />
    </PageTemplate>
  );
};

export default Media;
