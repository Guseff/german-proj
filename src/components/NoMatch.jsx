import React from 'react'
import { Row, Col } from 'antd'

const NoMatch = () => {
  return (
    <Row justify="center" className="media-page">
      <Col className="centered no-match-num">
        404
        <br />
        <span>Page not found</span>
      </Col>
    </Row>
  )
}

export default NoMatch
