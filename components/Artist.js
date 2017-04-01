import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

const Item = styled(Col)`
  margin-bottom: 1em;
`;

const Thumb = styled.img`
  height: 125px;
  width: 125px;
  object-fit: cover;
`;

const Title = styled.h4`
  font-family: ${props => props.theme.font.title};
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

function Artist(props) {
  if (!props.images[0]) return null;
  return (
    <Item>
      <Thumb src={props.images[0].url} />
      <Title>{props.name}</Title>
    </Item>
  );
}


Artist.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
};



export default Artist;
