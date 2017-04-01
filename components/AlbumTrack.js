import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { formattedTime } from '../lib/utils';

const Track = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background: ${props => props.theme.color.grayB};
    color: white;
  };
  &.is-active {
    background: gray;
    color: white;
  }
  p {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  strong {
    display: inline-block;
    width: 30px;
  }
`;

class AlbumTrack extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    duration_ms: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
  }
  handleClick = () => {
    this.props.dispatch({
      type: 'SET_CURRENT_TRACK',
      payload: {
        index: this.props.number - 1,
      },
    });
  }
  render() {
    const className = this.props.active ? 'is-active' : '';
    return (
      <Track className={className} onClick={this.handleClick}>
        <p>
          <span><strong>{this.props.number}.</strong> {this.props.name} </span>
          <span>{formattedTime(this.props.duration_ms)}</span>
        </p>
      </Track>
    );
  }
}

// function mapStateToProps(state) {
//   return {

//   }
// }

export default connect(null)(AlbumTrack);
