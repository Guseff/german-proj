import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import PageTemplate from '../../components/common/PageTemplate';
import TenseMenu from '../../components/common/TenseMenu';
import { ETenses } from '../../constants';
import {
  DeklinationTest,
  PerfectTest,
  PrasensTest,
  PreterTest,
} from '../../components/common/tasks';

// import styles from './Tests.css';

const Tests = (): JSX.Element => {
  const { tense } = useParams<{ tense: string }>();

  if (
    tense !== ETenses.PERFECT &&
    tense !== ETenses.PRASENS &&
    tense !== ETenses.PRETER &&
    tense !== ETenses.DEKLINATION
  )
    return <Redirect to="/404" />;

  let TestComponent;
  switch (tense) {
    case ETenses.PERFECT:
      TestComponent = PerfectTest;
      break;
    case ETenses.PRASENS:
      TestComponent = PrasensTest;
      break;
    case ETenses.PRETER:
      TestComponent = PreterTest;
      break;
    case ETenses.DEKLINATION:
      TestComponent = DeklinationTest;
      break;
    default:
      throw new Error('unappropiate tense');
  }

  return (
    <PageTemplate>
      <TenseMenu tense={tense} component="tests" />
      <TestComponent />
    </PageTemplate>
  );
};

export default Tests;
