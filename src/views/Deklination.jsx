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
        <h3 className="centered">{t('use')}</h3>
      </Content>
    </PageTemplate>
  );
};

export default Deklination;
