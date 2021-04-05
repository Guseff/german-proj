import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import LeftSider from '../LeftSider';
import RightSider from '../RightSider';
import PageTitle from '../PageTitle';
import Content from '../Content';

import styles from './PageTemplate.css';

const PageTemplate = ({ children }) => {
  const { pathname } = useLocation();
  const pageTitle = (pathname.match(/\/.+?\//) || [
    pathname.concat('/'),
  ])[0].slice(1, -1);

  return (
    <>
      <PageTitle className="light" pageTitle={pageTitle} />
      <article className={styles.wrapper}>
        <LeftSider pageTitle={pageTitle} />
        <Content>{children}</Content>
        <RightSider />
      </article>
    </>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
