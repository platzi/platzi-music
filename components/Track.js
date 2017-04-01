import React, { Component } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';

const TrackItem = styled.li`
  margin: 10px;
`;

class Track extends Component {
  render() {
    console.log(this.props)
    return (
      <TrackItem>
        <Row middle="sm">
          <Col xs={12} sm={5}>
            <img
              src={this.props.album.images[1].url}
              width="70"
              height="70"
              alt={this.props.album.name}
            />
            <span>
              {this.props.album.name}
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
