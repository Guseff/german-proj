import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import LeftSider from '../LeftSider';
import RightSider from '../RightSider';
import PageTitle from '../PageTitle';

const PageTemplate = ({ children }) => {
  const location = useLocation();
  const pageTitle = (location.pathname.match(/\/.+?\//) || [
    location.pathname.concat('/'),
  ])[0].slice(1, -1);

  return (
    <>
      <PageTitle className="light" pageTitle={pageTitle} />
      <Layout className="media-page light">
        <LeftSider pageTitle={pageTitle} />
        {children}
        <RightSider />
      </Layout>
    </>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
