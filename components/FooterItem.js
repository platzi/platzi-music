import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  font-family: 'Quicksand';
  font-size: 16px;
  padding: 48px 15px;
`
const Title = styled.h4`
  font-weight: bold;
`
const Text = styled.p`
`


function FooterItem(props) {
  return (
    <Item>
      <Title>
        {props.item.title}
      </Title>
      <Text>
        {props.item.text}
      </Text>
    </Item>
  )
}

export default FooterItem
