import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import PageTemplate from '../components/common/PageTemplate';

const { Content } = Layout;

const Deklination = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate>
      <Content className="page-content">
        <h2 className="centered">{t('deklination.title')}</h2>
        <h3 className="centered">{t('1.Feminine.title')}</h3>
        <h3 className="centered">{t('2.S-declension.title')}</h3>
        <h3 className="centered">{t('3.N-declension.title')}</h3>
      </Content>
    </PageTemplate>
  );
};

export default Deklination;
