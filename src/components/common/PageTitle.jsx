import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

const PageTitle = ({ pageTitle }) => {
  const { t } = useTranslation();

  return <Header className="page-title light">{t(pageTitle)}</Header>;
};

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;
