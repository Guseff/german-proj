import React from 'react'
import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom'

const Media = () => {
  const { id } = useParams()
  return (
    <Row className="media-page">
      <Col span={20} offset={2}>
        <Row justify="center">
          <Col>
            Media
            <br />
            {id}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Media
