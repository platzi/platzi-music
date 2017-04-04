import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  padding: 48px 15px;
`
const Title = styled.h4`
  font-weight: bold;
`

function FooterItem(props) {
  return (
    <Item>
      <Title>
        {props.item.title}
      </Title>
      <p>
        {props.item.text}
      </p>
    </Item>
  )
}

export default FooterItem
