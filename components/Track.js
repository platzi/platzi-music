import React, { Component } from 'react';

class Track extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

export default Track
