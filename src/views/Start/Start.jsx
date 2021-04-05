import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import styles from './Start.css';

const Start = () => (
  <Row className={styles.centered}>
    <Col span={20} offset={2}>
      <Row justify="center" className={styles.university}>
        <Col>
          Учреждение образования
          <br />
          “Брестский государственный университет имени А.С. Пушкина”
          <br />
          Кафедра немецкой филологии и лингводидактики
        </Col>
      </Row>
      <Row justify="center" className={styles.author}>
        <Col>А.В. Гусева</Col>
      </Row>
      <Row justify="center" className={styles.title}>
        <Col>практическая грамматика</Col>
      </Row>
      <Row className="intro">
        <Col span={24}>
          <Row justify="center" className={styles.introTitle}>
            <Col>НЕМЕЦКИЙ ЯЗЫК</Col>
          </Row>
          <Row justify="center">
            <Col>
              <Link to="/prasens" className={styles.button}>
                СТАРТ
              </Link>
            </Col>
          </Row>

          <Row justify="center" className={styles.introDescription}>
            <Col>
              Электронный интерактивный практикум
              <br />
              для студентов языковых специальностей
              <br />
              высших учебных заведений, изучающий немецкий язык как второй
              иностранный
            </Col>
          </Row>
          <Row justify="center" className={styles.introBoss}>
            <Col>
              Под редакцией кандидата педагогических наук, доцента
              <br />
              Е. Д. Осипова
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Start;
