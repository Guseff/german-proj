import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import LeftSider from '../LeftSider';
import RightSider from '../RightSider';
import PageTitle from '../PageTitle';
import Content from '../Content';

import styles from './PageTemplate.css';

type TPageTemplateProps = {
  children?: ReactNode;
};

const PageTemplate = ({ children }: TPageTemplateProps): JSX.Element => {
  const { pathname } = useLocation();
  const pageTitle = (/\/.+?\//.exec(pathname) || [
    pathname.concat('/'),
  ])[0].slice(1, -1);

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <article className={styles.wrapper}>
        <LeftSider pageTitle={pageTitle} />
        <Content>{children}</Content>
        <RightSider />
      </article>
    </>
  );
};

export default PageTemplate;
