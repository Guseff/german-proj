import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import PageTemplate from '../../components/common/PageTemplate';
import TenseMenu from '../../components/common/TenseMenu';
import { TENSES } from '../../constants';
import {
  DeklinationTest,
  PerfectTest,
  PrasensTest,
  PreterTest,
} from '../../components/common/tasks';

import styles from './Tests.css';

const Tests = () => {
  const { tense } = useParams();

  if (
    tense !== TENSES.PERFECT &&
    tense !== TENSES.PRASENS &&
    tense !== TENSES.PRETER &&
    tense !== TENSES.DEKLINATION
  )
    return <Redirect to="/404" />;

  let TestComponent;
  switch (tense) {
    case TENSES.PERFECT:
      TestComponent = PerfectTest;
      break;
    case TENSES.PRASENS:
      TestComponent = PrasensTest;
      break;
    case TENSES.PRETER:
      TestComponent = PreterTest;
      break;
    case TENSES.DEKLINATION:
      TestComponent = DeklinationTest;
      break;
    default:
      throw new Error('unappropiate tense');
  }

  return (
    <PageTemplate>
      <TenseMenu tense={tense} component="tests" />
      <TestComponent styles={styles} />
    </PageTemplate>
  );
};

export default Tests;
