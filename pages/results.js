import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Track from '../components/Track';

class ResultsPage extends Component {
  static async getInitialProps({ query }) {
    const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`

    const response = await fetch(URL)

    const data = await response.json()
    console.log(data);
    return data
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {
            this.props.tracks.items.map(
              item => {
                const lol = item.name + 'lol';
                let itemProps = item;
                if (itemProps.name === 'Despacito (Featuring Daddy Yankee)') {
                  itemProps = {...item, name: 'Suavecito'}
                }
                return (
                  <Track
                    key={item.id}
                    otherName={lol}
                    {...itemProps}
                  />
                )
              }
            )
          }
        </ul>
        <ul>
          {
            this.props.albums.items.map(
              item => (
                <li key={item.id}> {item.name} </li>
              )
            )
          }
        </ul>
        <ul>
          {
            this.props.artists.items.map(
              item => (
                <li key={item.id}> {item.name} </li>
              )
            )
          }
        </ul>


      </div>
    )
  }
}

export default ResultsPage;
