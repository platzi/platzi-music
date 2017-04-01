import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { connect } from 'react-redux';
import { formattedTime } from '../lib/utils.js';

const TrackItem = styled.li`
  margin-bottom: 1em;
  color: ${props => props.theme.color.grayB};
  border-bottom: 1px solid ${props => props.theme.color.grayA};
  cursor: pointer;
  transition: .3s;
  &:hover {
    background: ${props => props.theme.color.grayB}
    color: ${props => props.theme.color.grayA};;
    & strong {
      color: ${props => props.theme.color.grayA};;
    }
  }

`;
const Album = styled.div`
  display: flex;
  align-items:  center;
  span {
    margin-left: 1em;
    display: inline-block;
  }
  strong {
    color: ${props => props.theme.color.grayB};
  }
`
const Time = styled.div`
  text-align: right;
  padding-right: .5em;
`

// ¿Este elemento tendrá eventos? SI class
class Track extends Component {
  handleClick = event => {
    this.props.dispatch({
      type: 'SET_PLAYLIST',
      payload: {
        playlist: [{...this.props}]
      }
    })
    this.props.dispatch({
      type: 'SET_CURRENT_TRACK',
      payload: {
        index: 0,
      }
    })
    this.props.dispatch({
      type: 'SET_ALBUM_DATA',
      payload: {
        data: this.props.album,
      }
    })
    this.context.setCurrentTrack(this.props)
  }
  render() {
    return (
      <TrackItem onClick={this.handleClick}>
        <Row middle="sm">
          <Col xs={12} sm={5}>
            <Album>
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
            </Album>
          </Col>
          <Col xs={8} sm={5}>
            {this.props.name}
          </Col>
          <Col xs={4} sm={2}>
            <Time>
              {formattedTime(this.props.duration_ms)}
            </Time>
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
