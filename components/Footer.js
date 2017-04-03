import React from 'react'
import { Row, Col } from 'react-styled-flexboxgrid'
import FooterItem from './FooterItem'

function Footer() {
  const items = {
    item1: {
      title: 'Mauris acv arius arcu',
      text: 'Proin dolor libero, interdum vitae lorem et, pellentesque feugait urna. Nulla viverra, ex quis interdum malesuada, tellus enim viverra nulla'
    },
    item2: {
      title: 'Nulla viverra',
      text: 'Dolor libero, interdum vitae lorem et, pallentesque feugiat urna. Nulla viverra, ex'
    },
    item3: {
      title: 'Usce ornare',
      text: 'Ain dolor libero, interdum vitae lorem et, pallentesque feugiat urna. Nulla uis interdum malesu tellus enim viverra nulla'
    }
  }
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
