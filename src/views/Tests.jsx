import React from 'react';
import { Layout } from 'antd';
import { useParams, Redirect } from 'react-router-dom';

import PageTemplate from '../components/common/PageTemplate';
import TenseMenu from '../components/common/TenseMenu';
import { TENSES } from '../constants';

const Tests = () => {
  const { tense } = useParams();

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
        <TenseMenu tense={tense} component="tests" />
      </Layout.Content>
    </PageTemplate>
  );
};

export default Tests;
