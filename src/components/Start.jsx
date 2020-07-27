import React from 'react'
import { Row, Col, Button } from 'antd'
// import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <Row className="start-page">
      <Col span={20} offset={2}>
        <Row justify="center" className="start-page--university">
          <Col>
            Учреждение образования
            <br />
            “Брестский государственный университет имени А.С. Пушкина”
            <br />
            Кафедра немецкой филологии и лингводидактики
          </Col>
        </Row>
        <Row justify="center" className="start-page--author">
          <Col>А.В. Гусева</Col>
        </Row>
        <Row justify="center" className="start-page--title">
          <Col>практическая грамматика</Col>
        </Row>
        <Row className="start-page--intro">
          <Col span={24}>
            <Row justify="center" className="start-page--intro--title">
              <Col>НЕМЕЦКИЙ ЯЗЫК</Col>
            </Row>
            <Row justify="center">
              <Col>
                <Button
                  type="primary"
                  size="large"
                  className="start-page--intro--button"
                  href="/media/1"
                >
                  СТАРТ
                </Button>
              </Col>
            </Row>

            <Row justify="center" className="start-page--intro--description">
              <Col>
                Электронный интерактивный практикум
                <br />
                для студентов языковых специальностей
                <br />
                высших учебных заведений, изучающий немецкий язык как второй
                иностранный
              </Col>
            </Row>
            <Row justify="center" className="start-page--intro--boss">
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
  )
}

export default Start
