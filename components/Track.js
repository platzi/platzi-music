import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';

const TrackItem = styled.li`
  margin: 10px;
  color: ${props => props.theme.color.grayB};
`;

// ¿Este elemento tendrá eventos? SI class
class Track extends Component {
  handleClick = event => {
    console.log(this.props)
  }
  render() {
    return (
      <TrackItem onClick={this.handleClick}>
        <Row middle="sm">
          <Col xs={12} sm={5}>
            <img
              src={this.props.album.images[1].url}
              width="70"
              height="70"
              alt={this.props.album.name}
            />
            <span>
              <strong>
                {this.props.album.name}
              </strong>
            </span>
          </Col>
          <Col xs={8} sm={5}>
            {this.props.name}
          </Col>
          <Col xs={4} sm={2}>
            {this.props.duration_ms}
          </Col>
        </Row>
      </TrackItem>
    )
  }
}

export default Track
