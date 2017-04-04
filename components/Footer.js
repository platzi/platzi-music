import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import FooterItem from './FooterItem'
import items from '../static/content/footer.json'

function Footer() {
  return (
    <Row center="xs">
      <Col xs={12} sm={4}>
        <FooterItem item={items.item1} />
      </Col>
      <Col xs={12} sm={4}>
        <FooterItem item={items.item2} />
      </Col>
      <Col xs={12} sm={4}>
        <FooterItem item={items.item3} />
      </Col>
    </Row>
  )
}

export default Footer
