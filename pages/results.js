import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch'

class ResultsPage extends Component {
  static async getInitialProps({ query }) {
    const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist`

    const response = await fetch(URL)

    const data = await response.json()

    return data
  }

  render() {
    console.log(this.props)
    return (
      <ul>
        {
          this.props.artists.items.map(
            item => (
              <li key={item.id}> {item.name} </li>
            )
          )
        }
      </ul>
    )
  }
}

export default ResultsPage;
