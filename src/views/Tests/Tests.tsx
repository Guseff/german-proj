import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import PageTemplate from '../../common/components/PageTemplate';
import TenseMenu from '../../common/components/TenseMenu';
import { ETenses } from '../../constants';
import { getTaskComponent } from './utils/getTaskComponent';

const Tests = (): JSX.Element => {
  const { tense } = useParams<{ tense: string }>();

  if (
    tense !== ETenses.PERFECT &&
    tense !== ETenses.PRASENS &&
    tense !== ETenses.PRETER &&
    tense !== ETenses.DEKLINATION
  )
    return <Redirect to="/404" />;

  const TestComponent = getTaskComponent(tense);

  return (
    <PageTemplate>
      <TenseMenu tense={tense} component="tests" />
      <TestComponent />
    </PageTemplate>
  );
};

export default Tests;
