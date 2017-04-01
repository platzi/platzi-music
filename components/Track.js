import React, { Component } from 'react';
import styled from 'styled-components';

const TrackItem = styled.li`
  background: red;
  color: white;
  margin: 10px;
`;

class Track extends Component {
  render() {
    console.log(this.props)
    return (
      <TrackItem>
        <p>
          <span>
            <img
              src={this.props.album.images[1].url}
              width="70"
              height="70"
              alt={this.props.album.name}
            />
            <span>
              {this.props.album.name}
            </span>
          </span>
          <span>
            {this.props.name}
          </span>
          <span>
            {this.props.duration_ms}
          </span>
        </p>
      </TrackItem>
    )
  }
}

export default Track
