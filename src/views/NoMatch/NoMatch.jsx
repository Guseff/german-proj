import React from 'react';
import { Row, Col } from 'antd';

import styles from './NoMatch.css';

const NoMatch = () => (
  <Row justify="center" className="media-page">
    <Col className={styles.number}>
      404
      <br />
      <span className={styles.text}>Page not found</span>
    </Col>
  </Row>
);

export default NoMatch;
