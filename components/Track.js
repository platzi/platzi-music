import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { connect } from 'react-redux';
import { formattedTime } from '../lib/utils.js';

const TrackItem = styled.li`
  margin: 10px;
  color: ${props => props.theme.color.grayB};
`;

// ¿Este elemento tendrá eventos? SI class
class Track extends Component {
  handleClick = event => {
    this.props.dispatch({
      type: 'SET_PLAYLIST',
      payload: {
        playlist: [{...this.props}]
      }
    })
    this.context.setCurrentTrack(this.props)
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
            {formattedTime(this.props.duration_ms)}
          </Col>
        </Row>
      </TrackItem>
    )
  }
}

Track.contextTypes = {
  setCurrentTrack: PropTypes.func,
}

export default connect(null)(Track)
